/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Us(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const te = {}, kt = [], $t = () => {
}, pr = () => !1, Wn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Un = (e) => e.startsWith("onUpdate:"), Ie = Object.assign, hr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, gl = Object.prototype.hasOwnProperty, Q = (e, t) => gl.call(e, t), W = Array.isArray, it = (e) => fn(e) === "[object Map]", Ct = (e) => fn(e) === "[object Set]", bi = (e) => fn(e) === "[object Date]", J = (e) => typeof e == "function", oe = (e) => typeof e == "string", Be = (e) => typeof e == "symbol", ne = (e) => e !== null && typeof e == "object", mr = (e) => (ne(e) || J(e)) && J(e.then) && J(e.catch), gr = Object.prototype.toString, fn = (e) => gr.call(e), xl = (e) => fn(e).slice(8, -1), xr = (e) => fn(e) === "[object Object]", Gs = (e) => oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qt = /* @__PURE__ */ Us(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Gn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, bl = /-\w/g, $e = Gn(
  (e) => e.replace(bl, (t) => t.slice(1).toUpperCase())
), vl = /\B([A-Z])/g, Tt = Gn(
  (e) => e.replace(vl, "-$1").toLowerCase()
), br = Gn((e) => e.charAt(0).toUpperCase() + e.slice(1)), us = Gn(
  (e) => e ? `on${br(e)}` : ""
), Le = (e, t) => !Object.is(e, t), kn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, vr = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Yn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let vi;
const Hn = () => vi || (vi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Kn(e) {
  if (W(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = oe(s) ? kl(s) : Kn(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (oe(e) || ne(e))
    return e;
}
const yl = /;(?![^(]*\))/g, wl = /:([^]+)/, _l = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function kl(e) {
  const t = {};
  return e.replace(_l, (n) => n.startsWith("/*") ? "" : n).split(yl).forEach((n) => {
    if (n) {
      const s = n.split(wl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ge(e) {
  let t = "";
  if (oe(e))
    t = e;
  else if (W(e))
    for (let n = 0; n < e.length; n++) {
      const s = ge(e[n]);
      s && (t += s + " ");
    }
  else if (ne(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const zl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", $l = /* @__PURE__ */ Us(zl);
function yr(e) {
  return !!e || e === "";
}
function Sl(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let i = 0; s && i < e.length; i++)
    s = lt(e[i], t[i], n);
  return s;
}
function yi(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), i = new Uint8Array(s.length);
  for (const r of e) {
    let l = -1;
    for (let o = 0; o < s.length; o++)
      if (!i[o] && lt(r, s[o], n)) {
        l = o;
        break;
      }
    if (l < 0) return !1;
    i[l] = 1;
  }
  return !0;
}
function El(e, t, n) {
  let s = it(e), i = it(t);
  if (s || i || (s = Ct(e), i = Ct(t), s || i))
    return s && i ? yi(e, t, n) : !1;
  const r = Object.keys(e).length, l = Object.keys(t).length;
  if (r !== l)
    return !1;
  for (const o in e) {
    const A = e.hasOwnProperty(o), a = t.hasOwnProperty(o);
    if (A && !a || !A && a || !lt(e[o], t[o], n))
      return !1;
  }
  return String(e) === String(t);
}
function wi(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [i, r] = n;
  if (i.has(e) || r.has(t))
    return i.get(e) === t && r.get(t) === e;
  i.set(e, t), r.set(t, e);
  const l = s(e, t, n);
  return i.delete(e), r.delete(t), l;
}
function lt(e, t, n) {
  if (e === t) return !0;
  let s = bi(e), i = bi(t);
  return s || i ? s && i ? e.getTime() === t.getTime() : !1 : (s = Be(e), i = Be(t), s || i ? e === t : (s = W(e), i = W(t), s || i ? s && i ? wi(e, t, n, Sl) : !1 : (s = ne(e), i = ne(t), s || i ? !s || !i ? !1 : wi(e, t, n, El) : String(e) === String(t))));
}
function Cl(e, t) {
  return e.findIndex((n) => lt(n, t));
}
const wr = (e) => !!(e && e.__v_isRef === !0), O = (e) => oe(e) ? e : e == null ? "" : W(e) || ne(e) && (e.toString === gr || !J(e.toString)) ? wr(e) ? O(e.value) : JSON.stringify(e, _r, 2) : String(e), _r = (e, t) => wr(t) ? _r(e, t.value) : it(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[ds(s, r) + " =>"] = i, n),
    {}
  )
} : Ct(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ds(n))
} : Be(t) ? ds(t) : ne(t) && !W(t) && !xr(t) ? String(t) : t, ds = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Be(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ae;
class Ml {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ae && (ae.active ? (this.parent = ae, this.index = (ae.scopes || (ae.scopes = [])).push(
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
      const n = ae;
      try {
        return ae = this, t();
      } finally {
        ae = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ae, ae = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ae === this)
        ae = this.prevScope;
      else {
        let t = ae;
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
function Il() {
  return ae;
}
let ee;
const fs = /* @__PURE__ */ new WeakSet();
class kr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ae && (ae.active ? ae.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, fs.has(this) && (fs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || $r(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, _i(this), Sr(this);
    const t = ee, n = Se;
    ee = this, Se = !0;
    try {
      return this.fn();
    } finally {
      Er(this), ee = t, Se = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ks(t);
      this.deps = this.depsTail = void 0, _i(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? fs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ts(this) && this.run();
  }
  get dirty() {
    return Ts(this);
  }
}
let zr = 0, Qt, Xt;
function $r(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Xt, Xt = e;
    return;
  }
  e.next = Qt, Qt = e;
}
function Ys() {
  zr++;
}
function Hs() {
  if (--zr > 0)
    return;
  if (Xt) {
    let t = Xt;
    for (Xt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Qt; ) {
    let t = Qt;
    for (Qt = void 0; t; ) {
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
function Sr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Er(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), Ks(s), Tl(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function Ts(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Cr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Cr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === rn) || (e.globalVersion = rn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ts(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ee, s = Se;
  ee = e, Se = !0;
  try {
    Sr(e);
    const i = e.fn(e._value);
    (t.version === 0 || Le(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ee = n, Se = s, Er(e), e.flags &= -3;
  }
}
function Ks(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Ks(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Tl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Se = !0;
const Mr = [];
function At() {
  Mr.push(Se), Se = !1;
}
function at() {
  const e = Mr.pop();
  Se = e === void 0 ? !0 : e;
}
function _i(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ee;
    ee = void 0;
    try {
      t();
    } finally {
      ee = n;
    }
  }
}
let rn = 0;
class Pl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Zs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ee || !Se || ee === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ee)
      n = this.activeLink = new Pl(ee, this), ee.deps ? (n.prevDep = ee.depsTail, ee.depsTail.nextDep = n, ee.depsTail = n) : ee.deps = ee.depsTail = n, Ir(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ee.depsTail, n.nextDep = void 0, ee.depsTail.nextDep = n, ee.depsTail = n, ee.deps === n && (ee.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, rn++, this.notify(t);
  }
  notify(t) {
    Ys();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Hs();
    }
  }
}
function Ir(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Ir(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ps = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ Symbol(
  ""
), Ns = /* @__PURE__ */ Symbol(
  ""
), on = /* @__PURE__ */ Symbol(
  ""
);
function ce(e, t, n) {
  if (Se && ee) {
    let s = Ps.get(e);
    s || Ps.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Zs()), i.map = s, i.key = n), i.track();
  }
}
function Ze(e, t, n, s, i, r) {
  const l = Ps.get(e);
  if (!l) {
    rn++;
    return;
  }
  const o = (A) => {
    A && A.trigger();
  };
  if (Ys(), t === "clear")
    l.forEach(o);
  else {
    const A = W(e), a = A && Gs(n);
    if (A && n === "length") {
      const c = Number(s);
      l.forEach((d, h) => {
        (h === "length" || h === on || !Be(h) && h >= c) && o(d);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && o(l.get(n)), a && o(l.get(on)), t) {
        case "add":
          A ? a && o(l.get("length")) : (o(l.get(St)), it(e) && o(l.get(Ns)));
          break;
        case "delete":
          A || (o(l.get(St)), it(e) && o(l.get(Ns)));
          break;
        case "set":
          it(e) && o(l.get(St));
          break;
      }
  }
  Hs();
}
function Nt(e) {
  const t = /* @__PURE__ */ H(e);
  return t === e || (ce(t, "iterate", on), /* @__PURE__ */ ke(e)) ? t : /* @__PURE__ */ Ve(e) ? /* @__PURE__ */ rt(e) ? t.map((n) => ct(ze(n))) : t.map(ct) : t.map(ze);
}
function Zn(e) {
  return ce(e = /* @__PURE__ */ H(e), "iterate", on), e;
}
function Oe(e, t) {
  return /* @__PURE__ */ Ve(e) ? ct(/* @__PURE__ */ rt(e) ? ze(t) : t) : ze(t);
}
const Nl = {
  __proto__: null,
  [Symbol.iterator]() {
    return ps(this, Symbol.iterator, (e) => Oe(this, e));
  },
  concat(...e) {
    return Nt(this).concat(
      ...e.map((t) => W(t) ? Nt(t) : t)
    );
  },
  entries() {
    return ps(this, "entries", (e) => (e[1] = Oe(this, e[1]), e));
  },
  every(e, t) {
    return Ye(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ye(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Oe(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ye(
      this,
      "find",
      e,
      t,
      (n) => Oe(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ye(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ye(
      this,
      "findLast",
      e,
      t,
      (n) => Oe(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ye(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ye(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return hs(this, "includes", e);
  },
  indexOf(...e) {
    return hs(this, "indexOf", e);
  },
  join(e) {
    return Nt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return hs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ye(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Yt(this, "pop");
  },
  push(...e) {
    return Yt(this, "push", e);
  },
  reduce(e, ...t) {
    return ki(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ki(this, "reduceRight", e, t);
  },
  shift() {
    return Yt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ye(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Yt(this, "splice", e);
  },
  toReversed() {
    return Nt(this).toReversed();
  },
  toSorted(e) {
    return Nt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Nt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Yt(this, "unshift", e);
  },
  values() {
    return ps(this, "values", (e) => Oe(this, e));
  }
};
function ps(e, t, n) {
  const s = Zn(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ ke(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const Rl = Array.prototype;
function Ye(e, t, n, s, i, r) {
  const l = Zn(e), o = l !== e && !/* @__PURE__ */ ke(e), A = l[t];
  if (A !== Rl[t]) {
    const d = A.apply(e, r);
    return o ? ze(d) : d;
  }
  let a = n;
  l !== e && (o ? a = function(d, h) {
    return n.call(this, Oe(e, d), h, e);
  } : n.length > 2 && (a = function(d, h) {
    return n.call(this, d, h, e);
  }));
  const c = A.call(l, a, s);
  return o && i ? i(c) : c;
}
function ki(e, t, n, s) {
  const i = Zn(e), r = i !== e && !/* @__PURE__ */ ke(e);
  let l = n, o = !1;
  i !== e && (r ? (o = s.length === 0, l = function(a, c, d) {
    return o && (o = !1, a = Oe(e, a)), n.call(this, a, Oe(e, c), d, e);
  }) : n.length > 3 && (l = function(a, c, d) {
    return n.call(this, a, c, d, e);
  }));
  const A = i[t](l, ...s);
  return o ? Oe(e, A) : A;
}
function hs(e, t, n) {
  const s = /* @__PURE__ */ H(e);
  ce(s, "iterate", on);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Qs(n[0]) ? (n[0] = /* @__PURE__ */ H(n[0]), s[t](...n)) : i;
}
function Yt(e, t, n = []) {
  At(), Ys();
  const s = (/* @__PURE__ */ H(e))[t].apply(e, n);
  return Hs(), at(), s;
}
const Fl = /* @__PURE__ */ Us("__proto__,__v_isRef,__isVue"), Tr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Be)
);
function Ol(e) {
  Be(e) || (e = String(e));
  const t = /* @__PURE__ */ H(this);
  return ce(t, "has", e), t.hasOwnProperty(e);
}
class Pr {
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
      return s === (i ? r ? Hl : Or : r ? Fr : Rr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = W(t);
    if (!i) {
      let A;
      if (l && (A = Nl[n]))
        return A;
      if (n === "hasOwnProperty")
        return Ol;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ pe(t) ? t : s
    );
    if ((Be(n) ? Tr.has(n) : Fl(n)) || (i || ce(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ pe(o)) {
      const A = l && Gs(n) ? o : o.value;
      return i && ne(A) ? /* @__PURE__ */ Fs(A) : A;
    }
    return ne(o) ? i ? /* @__PURE__ */ Fs(o) : /* @__PURE__ */ Jn(o) : o;
  }
}
class Nr extends Pr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const l = W(t) && Gs(n);
    if (!this._isShallow) {
      const a = /* @__PURE__ */ Ve(r);
      if (!/* @__PURE__ */ ke(s) && !/* @__PURE__ */ Ve(s) && (r = /* @__PURE__ */ H(r), s = /* @__PURE__ */ H(s)), !l && /* @__PURE__ */ pe(r) && !/* @__PURE__ */ pe(s))
        return a || (r.value = s), !0;
    }
    const o = l ? Number(n) < t.length : Q(t, n), A = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ pe(t) ? t : i
    );
    return t === /* @__PURE__ */ H(i) && A && (o ? Le(s, r) && Ze(t, "set", n, s) : Ze(t, "add", n, s)), A;
  }
  deleteProperty(t, n) {
    const s = Q(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && Ze(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Be(n) || !Tr.has(n)) && ce(t, "has", n), s;
  }
  ownKeys(t) {
    return ce(
      t,
      "iterate",
      W(t) ? "length" : St
    ), Reflect.ownKeys(t);
  }
}
class jl extends Pr {
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
const Ll = /* @__PURE__ */ new Nr(), Dl = /* @__PURE__ */ new jl(), Bl = /* @__PURE__ */ new Nr(!0);
const Rs = (e) => e, xn = (e) => Reflect.getPrototypeOf(e);
function Vl(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = /* @__PURE__ */ H(i), l = it(r), o = e === "entries" || e === Symbol.iterator && l, A = e === "keys" && l, a = i[e](...s), c = n ? Rs : t ? ct : ze;
    return !t && ce(
      r,
      "iterate",
      A ? Ns : St
    ), Ie(
      // inheriting all iterator properties
      Object.create(a),
      {
        // iterator protocol
        next() {
          const { value: d, done: h } = a.next();
          return h ? { value: d, done: h } : {
            value: o ? [c(d[0]), c(d[1])] : c(d),
            done: h
          };
        }
      }
    );
  };
}
function bn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Wl(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, l = /* @__PURE__ */ H(r), o = /* @__PURE__ */ H(i);
      e || (Le(i, o) && ce(l, "get", i), ce(l, "get", o));
      const { has: A } = xn(l), a = t ? Rs : e ? ct : ze;
      if (A.call(l, i))
        return a(r.get(i));
      if (A.call(l, o))
        return a(r.get(o));
      r !== l && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ce(/* @__PURE__ */ H(i), "iterate", St), i.size;
    },
    has(i) {
      const r = this.__v_raw, l = /* @__PURE__ */ H(r), o = /* @__PURE__ */ H(i);
      return e || (Le(i, o) && ce(l, "has", i), ce(l, "has", o)), i === o ? r.has(i) : r.has(i) || r.has(o);
    },
    forEach(i, r) {
      const l = this, o = l.__v_raw, A = /* @__PURE__ */ H(o), a = t ? Rs : e ? ct : ze;
      return !e && ce(A, "iterate", St), o.forEach((c, d) => i.call(r, a(c), a(d), l));
    }
  };
  return Ie(
    n,
    e ? {
      add: bn("add"),
      set: bn("set"),
      delete: bn("delete"),
      clear: bn("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ H(this), l = xn(r), o = /* @__PURE__ */ H(i), A = !t && !/* @__PURE__ */ ke(i) && !/* @__PURE__ */ Ve(i) ? o : i;
        return l.has.call(r, A) || Le(i, A) && l.has.call(r, i) || Le(o, A) && l.has.call(r, o) || (r.add(A), Ze(r, "add", A, A)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ ke(r) && !/* @__PURE__ */ Ve(r) && (r = /* @__PURE__ */ H(r));
        const l = /* @__PURE__ */ H(this), { has: o, get: A } = xn(l);
        let a = o.call(l, i);
        a || (i = /* @__PURE__ */ H(i), a = o.call(l, i));
        const c = A.call(l, i);
        return l.set(i, r), a ? Le(r, c) && Ze(l, "set", i, r) : Ze(l, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ H(this), { has: l, get: o } = xn(r);
        let A = l.call(r, i);
        A || (i = /* @__PURE__ */ H(i), A = l.call(r, i)), o && o.call(r, i);
        const a = r.delete(i);
        return A && Ze(r, "delete", i, void 0), a;
      },
      clear() {
        const i = /* @__PURE__ */ H(this), r = i.size !== 0, l = i.clear();
        return r && Ze(
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
    n[i] = Vl(i, e, t);
  }), n;
}
function Js(e, t) {
  const n = Wl(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    Q(n, i) && i in s ? n : s,
    i,
    r
  );
}
const Ul = {
  get: /* @__PURE__ */ Js(!1, !1)
}, Gl = {
  get: /* @__PURE__ */ Js(!1, !0)
}, Yl = {
  get: /* @__PURE__ */ Js(!0, !1)
};
const Rr = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), Hl = /* @__PURE__ */ new WeakMap();
function Kl(e) {
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
function Jn(e) {
  return /* @__PURE__ */ Ve(e) ? e : qs(
    e,
    !1,
    Ll,
    Ul,
    Rr
  );
}
// @__NO_SIDE_EFFECTS__
function Zl(e) {
  return qs(
    e,
    !1,
    Bl,
    Gl,
    Fr
  );
}
// @__NO_SIDE_EFFECTS__
function Fs(e) {
  return qs(
    e,
    !0,
    Dl,
    Yl,
    Or
  );
}
function qs(e, t, n, s, i) {
  if (!ne(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const l = Kl(xl(e));
  if (l === 0)
    return e;
  const o = new Proxy(
    e,
    l === 2 ? s : n
  );
  return i.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function rt(e) {
  return /* @__PURE__ */ Ve(e) ? /* @__PURE__ */ rt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ve(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ke(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Qs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function H(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ H(t) : e;
}
function Jl(e) {
  return !Q(e, "__v_skip") && Object.isExtensible(e) && vr(e, "__v_skip", !0), e;
}
const ze = (e) => ne(e) ? /* @__PURE__ */ Jn(e) : e, ct = (e) => ne(e) ? /* @__PURE__ */ Fs(e) : e;
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  return ql(e, !1);
}
function ql(e, t) {
  return /* @__PURE__ */ pe(e) ? e : new Ql(e, t);
}
class Ql {
  constructor(t, n) {
    this.dep = new Zs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ H(t), this._value = n ? t : ze(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ ke(t) || /* @__PURE__ */ Ve(t);
    t = s ? t : /* @__PURE__ */ H(t), Le(t, n) && (this._rawValue = t, this._value = s ? t : ze(t), this.dep.trigger());
  }
}
function j(e) {
  return /* @__PURE__ */ pe(e) ? e.value : e;
}
const Xl = {
  get: (e, t, n) => t === "__v_raw" ? e : j(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ pe(i) && !/* @__PURE__ */ pe(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function jr(e) {
  return /* @__PURE__ */ rt(e) ? e : new Proxy(e, Xl);
}
class eA {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Zs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = rn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ee !== this)
      return $r(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Cr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function tA(e, t, n = !1) {
  let s, i;
  return J(e) ? s = e : (s = e.get, i = e.set), new eA(s, i, n);
}
const vn = {}, Mn = /* @__PURE__ */ new WeakMap();
let wt;
function nA(e, t = !1, n = wt) {
  if (n) {
    let s = Mn.get(n);
    s || Mn.set(n, s = []), s.push(e);
  }
}
function sA(e, t, n = te) {
  const { immediate: s, deep: i, once: r, scheduler: l, augmentJob: o, call: A } = n, a = (T) => i ? T : /* @__PURE__ */ ke(T) || i === !1 || i === 0 ? Je(T, 1) : Je(T);
  let c, d, h, x, R = !1, v = !1;
  if (/* @__PURE__ */ pe(e) ? (d = () => e.value, R = /* @__PURE__ */ ke(e)) : /* @__PURE__ */ rt(e) ? (d = () => a(e), R = !0) : W(e) ? (v = !0, R = e.some((T) => /* @__PURE__ */ rt(T) || /* @__PURE__ */ ke(T)), d = () => e.map((T) => {
    if (/* @__PURE__ */ pe(T))
      return T.value;
    if (/* @__PURE__ */ rt(T))
      return a(T);
    if (J(T))
      return A ? A(T, 2) : T();
  })) : J(e) ? t ? d = A ? () => A(e, 2) : e : d = () => {
    if (h) {
      At();
      try {
        h();
      } finally {
        at();
      }
    }
    const T = wt;
    wt = c;
    try {
      return A ? A(e, 3, [x]) : e(x);
    } finally {
      wt = T;
    }
  } : d = $t, t && i) {
    const T = d, L = i === !0 ? 1 / 0 : i;
    d = () => Je(T(), L);
  }
  const _ = Il(), z = () => {
    c.stop(), _ && _.active && hr(_.effects, c);
  };
  if (r && t) {
    const T = t;
    t = (...L) => {
      const E = T(...L);
      return z(), E;
    };
  }
  let I = v ? new Array(e.length).fill(vn) : vn;
  const b = (T) => {
    if (!(!(c.flags & 1) || !c.dirty && !T))
      if (t) {
        const L = c.run();
        if (T || i || R || (v ? L.some((E, G) => Le(E, I[G])) : Le(L, I))) {
          h && h();
          const E = wt;
          wt = c;
          try {
            const G = [
              L,
              // pass undefined as the old value when it's changed for the first time
              I === vn ? void 0 : v && I[0] === vn ? [] : I,
              x
            ];
            I = L, A ? A(t, 3, G) : (
              // @ts-expect-error
              t(...G)
            );
          } finally {
            wt = E;
          }
        }
      } else
        c.run();
  };
  return o && o(b), c = new kr(d), c.scheduler = l ? () => l(b, !1) : b, x = (T) => nA(T, !1, c), h = c.onStop = () => {
    const T = Mn.get(c);
    if (T) {
      if (A)
        A(T, 4);
      else
        for (const L of T) L();
      Mn.delete(c);
    }
  }, t ? s ? b(!0) : I = c.run() : l ? l(b.bind(null, !0), !0) : c.run(), z.pause = c.pause.bind(c), z.resume = c.resume.bind(c), z.stop = z, z;
}
function Je(e, t = 1 / 0, n) {
  if (t <= 0 || !ne(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ pe(e))
    Je(e.value, t, n);
  else if (W(e))
    for (let s = 0; s < e.length; s++)
      Je(e[s], t, n);
  else if (Ct(e) || it(e))
    e.forEach((s) => {
      Je(s, t, n);
    });
  else if (xr(e)) {
    for (const s in e)
      Je(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Je(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function pn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    qn(i, t, n);
  }
}
function We(e, t, n, s) {
  if (J(e)) {
    const i = pn(e, t, n, s);
    return i && mr(i) && i.catch((r) => {
      qn(r, t, n);
    }), i;
  }
  if (W(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(We(e[r], t, n, s));
    return i;
  }
}
function qn(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: l } = t && t.appContext.config || te;
  if (t) {
    let o = t.parent;
    const A = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, A, a) === !1)
            return;
      }
      o = o.parent;
    }
    if (r) {
      At(), pn(r, null, 10, [
        e,
        A,
        a
      ]), at();
      return;
    }
  }
  iA(e, n, i, s, l);
}
function iA(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const de = [];
let Fe = -1;
const jt = [];
let nt = null, Rt = 0;
const Lr = /* @__PURE__ */ Promise.resolve();
let In = null;
function Dr(e) {
  const t = In || Lr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function rA(e) {
  let t = Fe + 1, n = de.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = de[s], r = ln(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Xs(e) {
  if (!(e.flags & 1)) {
    const t = ln(e), n = de[de.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ln(n) ? de.push(e) : de.splice(rA(t), 0, e), e.flags |= 1, Br();
  }
}
function Br() {
  In || (In = Lr.then(Wr));
}
function oA(e) {
  if (!W(e))
    nt && e.id === -1 ? nt.splice(Rt + 1, 0, e) : e.flags & 1 || (jt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      jt.push(e[t]);
  Br();
}
function zi(e, t, n = Fe + 1) {
  for (; n < de.length; n++) {
    const s = de[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      de.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Vr(e) {
  if (jt.length) {
    const t = [...new Set(jt)].sort(
      (n, s) => ln(n) - ln(s)
    );
    if (jt.length = 0, nt) {
      for (let n = 0; n < t.length; n++)
        nt.push(t[n]);
      return;
    }
    for (nt = t, Rt = 0; Rt < nt.length; Rt++) {
      const n = nt[Rt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    nt = null, Rt = 0;
  }
}
const ln = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Wr(e) {
  try {
    for (Fe = 0; Fe < de.length; Fe++) {
      const t = de[Fe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), pn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Fe < de.length; Fe++) {
      const t = de[Fe];
      t && (t.flags &= -2);
    }
    Fe = -1, de.length = 0, Vr(), In = null, (de.length || jt.length) && Wr();
  }
}
let _e = null, Ur = null;
function Tn(e) {
  const t = _e;
  return _e = e, Ur = e && e.type.__scopeId || null, t;
}
function lA(e, t = _e, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Ti(-1);
    const r = Tn(t), l = Et.length;
    let o;
    try {
      o = e(...i);
    } finally {
      for (let A = Et.length; A > l; A--) lo();
      Tn(r), s._d && Ti(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function zn(e, t) {
  if (_e === null)
    return e;
  const n = ns(_e), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, l, o, A = te] = t[i];
    r && (J(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Je(l), s.push({
      dir: r,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: o,
      modifiers: A
    }));
  }
  return e;
}
function vt(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let l = 0; l < i.length; l++) {
    const o = i[l];
    r && (o.oldValue = r[l].value);
    let A = o.dir[s];
    A && (At(), We(A, n, 8, [
      e.el,
      o,
      e,
      t
    ]), at());
  }
}
function AA(e, t, n = !1) {
  const s = YA();
  if (s || Lt) {
    let i = Lt ? Lt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && J(t) ? t.call(s && s.proxy) : t;
  }
}
const aA = /* @__PURE__ */ Symbol.for("v-scx"), cA = () => AA(aA);
function Qn(e, t, n) {
  return uA(e, t, n);
}
function uA(e, t, n = te) {
  const { immediate: s, deep: i, flush: r, once: l } = n, o = Ie({}, n), A = t && s || !t && r !== "post";
  let a;
  if (cn) {
    if (r === "sync") {
      const x = cA();
      a = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!A) {
      const x = () => {
      };
      return x.stop = $t, x.resume = $t, x.pause = $t, x;
    }
  }
  const c = ut;
  o.call = (x, R, v) => We(x, c, R, v);
  let d = !1;
  r === "post" ? o.scheduler = (x) => {
    me(x, c && c.suspense);
  } : r !== "sync" && (d = !0, o.scheduler = (x, R) => {
    R ? x() : Xs(x);
  }), o.augmentJob = (x) => {
    t && (x.flags |= 4), d && (x.flags |= 2, c && (x.id = c.uid, x.i = c));
  };
  const h = sA(e, t, o);
  return cn && (a ? a.push(h) : A && h()), h;
}
const dA = /* @__PURE__ */ Symbol("_vte"), Xn = (e) => e.__isTeleport, ms = /* @__PURE__ */ Symbol("_leaveCb");
function fA(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Qe) {
        t = n;
        break;
      }
  }
  return t;
}
function Gr(e) {
  if (!Yr(e))
    return Xn(e.type) && e.children ? fA(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && J(n.default))
      return n.default();
  }
}
function ei(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    ei(
      Xn(n.type) && Gr(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function et(e, t) {
  return J(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ie({ name: e.name }, t, { setup: e })
  ) : e;
}
function pA(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function $i(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Pn = /* @__PURE__ */ new WeakMap();
function en(e, t, n, s, i = !1) {
  if (W(e)) {
    e.forEach(
      (v, _) => en(
        v,
        t && (W(t) ? t[_] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (tn(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && en(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? ns(s.component) : s.el, l = i ? null : r, { i: o, r: A } = e, a = t && t.r, c = o.refs === te ? o.refs = {} : o.refs, d = o.setupState, h = /* @__PURE__ */ H(d), x = d === te ? pr : (v) => $i(c, v) ? !1 : Q(h, v), R = (v, _) => !(_ && $i(c, _));
  if (a != null && a !== A) {
    if (Si(t), oe(a))
      c[a] = null, x(a) && (d[a] = null);
    else if (/* @__PURE__ */ pe(a)) {
      const v = t;
      R(a, v.k) && (a.value = null), v.k && (c[v.k] = null);
    }
  }
  if (J(A))
    pn(A, o, 12, [l, c]);
  else {
    const v = oe(A), _ = /* @__PURE__ */ pe(A);
    if (v || _) {
      const z = () => {
        if (e.f) {
          const I = v ? x(A) ? d[A] : c[A] : R() || !e.k ? A.value : c[e.k];
          if (i)
            W(I) && hr(I, r);
          else if (W(I))
            I.includes(r) || I.push(r);
          else if (v)
            c[A] = [r], x(A) && (d[A] = c[A]);
          else {
            const b = [r];
            R(A, e.k) && (A.value = b), e.k && (c[e.k] = b);
          }
        } else v ? (c[A] = l, x(A) && (d[A] = l)) : _ && (R(A, e.k) && (A.value = l), e.k && (c[e.k] = l));
      };
      if (l) {
        const I = () => {
          z(), Pn.delete(e);
        };
        I.id = -1, Pn.set(e, I), me(I, n);
      } else
        Si(e), z();
    }
  }
}
function Si(e) {
  const t = Pn.get(e);
  t && (t.flags |= 8, Pn.delete(e));
}
Hn().requestIdleCallback;
Hn().cancelIdleCallback;
const tn = (e) => !!e.type.__asyncLoader, Yr = (e) => e.type.__isKeepAlive;
function hA(e, t, n = ut, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...l) => {
      At();
      const o = si(n), A = We(t, n, e, l);
      return o(), at(), A;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const Hr = (e) => (t, n = ut) => {
  (!cn || e === "sp") && hA(e, (...s) => t(...s), n);
}, mA = Hr("m"), gA = Hr(
  "bum"
), xA = /* @__PURE__ */ Symbol.for("v-ndc");
function fe(e, t, n, s) {
  let i;
  const r = n, l = W(e);
  if (l || oe(e)) {
    const o = l && /* @__PURE__ */ rt(e);
    let A = !1, a = !1;
    o && (A = !/* @__PURE__ */ ke(e), a = /* @__PURE__ */ Ve(e), e = Zn(e)), i = new Array(e.length);
    for (let c = 0, d = e.length; c < d; c++)
      i[c] = t(
        A ? a ? ct(ze(e[c])) : ze(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let o = 0; o < e; o++)
      i[o] = t(o + 1, o, void 0, r);
  } else if (ne(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (o, A) => t(o, A, void 0, r)
      );
    else {
      const o = Object.keys(e);
      i = new Array(o.length);
      for (let A = 0, a = o.length; A < a; A++) {
        const c = o[A];
        i[A] = t(e[c], c, A, r);
      }
    }
  else
    i = [];
  return i;
}
const Os = (e) => e ? uo(e) ? ns(e) : Os(e.parent) : null, nn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ie(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Os(e.parent),
    $root: (e) => Os(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Xs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Dr.bind(e.proxy)),
    $watch: (e) => $t
  })
), gs = (e, t) => e !== te && !e.__isScriptSetup && Q(e, t), bA = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: r, accessCache: l, type: o, appContext: A } = e;
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
        if (gs(s, t))
          return l[t] = 1, s[t];
        if (Q(r, t))
          return l[t] = 3, r[t];
        if (n !== te && Q(n, t))
          return l[t] = 4, n[t];
        l[t] = 0;
      }
    }
    const a = nn[t];
    let c, d;
    if (a)
      return t === "$attrs" && ce(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (c = o.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== te && Q(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      d = A.config.globalProperties, Q(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return gs(i, t) ? (i[t] = n, !0) : Q(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: l }
  }, o) {
    let A;
    return !!(n[o] || gs(t, o) || Q(r, o) || Q(s, o) || Q(nn, o) || Q(i.config.globalProperties, o) || (A = l.__cssModules) && A[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Kr() {
  return {
    app: null,
    config: {
      isNativeTag: pr,
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
let vA = 0;
function yA(e, t) {
  return function(s, i = null) {
    J(s) || (s = Ie({}, s)), i != null && !ne(i) && (i = null);
    const r = Kr(), l = /* @__PURE__ */ new WeakSet(), o = [];
    let A = !1;
    const a = r.app = {
      _uid: vA++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: QA,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return l.has(c) || (c && J(c.install) ? (l.add(c), c.install(a, ...d)) : J(c) && (l.add(c), c(a, ...d))), a;
      },
      mixin(c) {
        return a;
      },
      component(c, d) {
        return d ? (r.components[c] = d, a) : r.components[c];
      },
      directive(c, d) {
        return d ? (r.directives[c] = d, a) : r.directives[c];
      },
      mount(c, d, h) {
        if (!A) {
          const x = a._ceVNode || De(s, i);
          return x.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(x, c, h), A = !0, a._container = c, c.__vue_app__ = a, ns(x.component);
        }
      },
      onUnmount(c) {
        o.push(c);
      },
      unmount() {
        A && (We(
          o,
          a._instance,
          16
        ), e(null, a._container), delete a._container.__vue_app__);
      },
      provide(c, d) {
        return r.provides[c] = d, a;
      },
      runWithContext(c) {
        const d = Lt;
        Lt = a;
        try {
          return c();
        } finally {
          Lt = d;
        }
      }
    };
    return a;
  };
}
let Lt = null;
const wA = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${$e(t)}Modifiers`] || e[`${Tt(t)}Modifiers`];
function _A(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || te;
  let i = n;
  const r = t.startsWith("update:"), l = r && wA(s, t.slice(7));
  l && (l.trim && (i = n.map((c) => oe(c) ? c.trim() : c)), l.number && (i = i.map(Yn)));
  let o, A = s[o = us(t)] || // also try camelCase event handler (#2249)
  s[o = us($e(t))];
  !A && r && (A = s[o = us(Tt(t))]), A && We(
    A,
    e,
    6,
    i
  );
  const a = s[o + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, We(
      a,
      e,
      6,
      i
    );
  }
}
function kA(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let l = {};
  return r ? (W(r) ? r.forEach((o) => l[o] = null) : Ie(l, r), ne(e) && s.set(e, l), l) : (ne(e) && s.set(e, null), null);
}
function es(e, t) {
  return !e || !Wn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Q(e, t[0].toLowerCase() + t.slice(1)) || Q(e, Tt(t)) || Q(e, t));
}
function Ei(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [r],
    slots: l,
    attrs: o,
    emit: A,
    render: a,
    renderCache: c,
    props: d,
    data: h,
    setupState: x,
    ctx: R,
    inheritAttrs: v
  } = e, _ = Tn(e);
  let z, I;
  try {
    if (n.shapeFlag & 4) {
      const T = i || s, L = T;
      z = je(
        a.call(
          L,
          T,
          c,
          d,
          x,
          h,
          R
        )
      ), I = o;
    } else {
      const T = t;
      z = je(
        T.length > 1 ? T(
          d,
          { attrs: o, slots: l, emit: A }
        ) : T(
          d,
          null
        )
      ), I = t.props ? o : zA(o);
    }
  } catch (T) {
    Et.length = 0, qn(T, e, 1), z = De(Qe);
  }
  let b = z;
  if (I && v !== !1) {
    const T = Object.keys(I), { shapeFlag: L } = b;
    T.length && L & 7 && (r && T.some(Un) && (I = $A(
      I,
      r
    )), b = Dt(b, I, !1, !0));
  }
  if (n.dirs && (b = Dt(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const T = Xn(b.type) && Gr(b) || b;
    ei(T, n.transition);
  }
  return z = b, Tn(_), z;
}
const zA = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Wn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, $A = (e, t) => {
  const n = {};
  for (const s in e)
    (!Un(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function SA(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: l, children: o, patchFlag: A } = t, a = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && A >= 0) {
    if (A & 1024)
      return !0;
    if (A & 16)
      return s ? Ci(s, l, a) : !!l;
    if (A & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const h = c[d];
        if (Zr(l, s, h) && !es(a, h))
          return !0;
      }
    }
  } else
    return (i || o) && (!o || !o.$stable) ? !0 : s === l ? !1 : s ? l ? Ci(s, l, a) : !0 : !!l;
  return !1;
}
function Ci(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (Zr(t, e, r) && !es(n, r))
      return !0;
  }
  return !1;
}
function Zr(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && ne(s) && ne(i) ? !lt(s, i) : s !== i;
}
function EA({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Jr = {}, qr = () => Object.create(Jr), Qr = (e) => Object.getPrototypeOf(e) === Jr;
function CA(e, t, n, s = !1) {
  const i = {}, r = qr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Xr(e, t, i, r);
  for (const l in e.propsOptions[0])
    l in i || (i[l] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Zl(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function MA(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: l }
  } = e, o = /* @__PURE__ */ H(i), [A] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let h = c[d];
        if (es(e.emitsOptions, h))
          continue;
        const x = t[h];
        if (A)
          if (Q(r, h))
            x !== r[h] && (r[h] = x, a = !0);
          else {
            const R = $e(h);
            i[R] = js(
              A,
              o,
              R,
              x,
              e,
              !1
            );
          }
        else
          x !== r[h] && (r[h] = x, a = !0);
      }
    }
  } else {
    Xr(e, t, i, r) && (a = !0);
    let c;
    for (const d in o)
      (!t || // for camelCase
      !Q(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Tt(d)) === d || !Q(t, c))) && (A ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (i[d] = js(
        A,
        o,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (r !== o)
      for (const d in r)
        (!t || !Q(t, d)) && (delete r[d], a = !0);
  }
  a && Ze(e.attrs, "set", "");
}
function Xr(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let l = !1, o;
  if (t)
    for (let A in t) {
      if (qt(A))
        continue;
      const a = t[A];
      let c;
      i && Q(i, c = $e(A)) ? !r || !r.includes(c) ? n[c] = a : (o || (o = {}))[c] = a : es(e.emitsOptions, A) || (!(A in s) || a !== s[A]) && (s[A] = a, l = !0);
    }
  if (r) {
    const A = /* @__PURE__ */ H(n), a = o || te;
    for (let c = 0; c < r.length; c++) {
      const d = r[c];
      n[d] = js(
        i,
        A,
        d,
        a[d],
        e,
        !Q(a, d)
      );
    }
  }
  return l;
}
function js(e, t, n, s, i, r) {
  const l = e[n];
  if (l != null) {
    const o = Q(l, "default");
    if (o && s === void 0) {
      const A = l.default;
      if (l.type !== Function && !l.skipFactory && J(A)) {
        const { propsDefaults: a } = i;
        if (n in a)
          s = a[n];
        else {
          const c = si(i);
          s = a[n] = A.call(
            null,
            t
          ), c();
        }
      } else
        s = A;
      i.ce && i.ce._setProp(n, s);
    }
    l[
      0
      /* shouldCast */
    ] && (r && !o ? s = !1 : l[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Tt(n)) && (s = !0));
  }
  return s;
}
function IA(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, l = {}, o = [];
  if (!r)
    return ne(e) && s.set(e, kt), kt;
  if (W(r))
    for (let a = 0; a < r.length; a++) {
      const c = $e(r[a]);
      Mi(c) && (l[c] = te);
    }
  else if (r)
    for (const a in r) {
      const c = $e(a);
      if (Mi(c)) {
        const d = r[a], h = l[c] = W(d) || J(d) ? { type: d } : Ie({}, d), x = h.type;
        let R = !1, v = !0;
        if (W(x))
          for (let _ = 0; _ < x.length; ++_) {
            const z = x[_], I = J(z) && z.name;
            if (I === "Boolean") {
              R = !0;
              break;
            } else I === "String" && (v = !1);
          }
        else
          R = J(x) && x.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = R, h[
          1
          /* shouldCastTrue */
        ] = v, (R || Q(h, "default")) && o.push(c);
      }
    }
  const A = [l, o];
  return ne(e) && s.set(e, A), A;
}
function Mi(e) {
  return e[0] !== "$" && !qt(e);
}
const ti = (e) => e === "_" || e === "_ctx" || e === "$stable", ni = (e) => W(e) ? e.map(je) : [je(e)], TA = (e, t, n) => {
  if (t._n)
    return t;
  const s = lA((...i) => ni(t(...i)), n);
  return s._c = !1, s;
}, eo = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (ti(i)) continue;
    const r = e[i];
    if (J(r))
      t[i] = TA(i, r, s);
    else if (r != null) {
      const l = ni(r);
      t[i] = () => l;
    }
  }
}, to = (e, t) => {
  const n = ni(t);
  e.slots.default = () => n;
}, no = (e, t, n) => {
  for (const s in t)
    (n || !ti(s)) && (e[s] = t[s]);
}, PA = (e, t, n) => {
  const s = e.slots = qr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (no(s, t, n), n && vr(s, "_", i, !0)) : eo(t, s);
  } else t && to(e, t);
}, NA = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, l = te;
  if (s.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : no(i, t, n) : (r = !t.$stable, eo(t, i)), l = t;
  } else t && (to(e, t), l = { default: 1 });
  if (r)
    for (const o in i)
      !ti(o) && l[o] == null && delete i[o];
}, me = LA;
function RA(e) {
  return FA(e);
}
function FA(e, t) {
  const n = Hn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: r,
    createElement: l,
    createText: o,
    createComment: A,
    setText: a,
    setElementText: c,
    parentNode: d,
    nextSibling: h,
    setScopeId: x = $t,
    insertStaticContent: R
  } = e, v = (u, p, g, $ = null, y = null, k = null, N = void 0, P = null, M = !!p.dynamicChildren) => {
    if (u === p)
      return;
    u && !Ht(u, p) && ($ = gn(u), he(u, y, k, !0), u = null), p.patchFlag === -2 && (M = !1, p.dynamicChildren = null), p.dynamicChildren && u && u.dynamicChildren && u.dynamicChildren.hasOnce && (p.dynamicChildren === kt && (p.dynamicChildren = []), p.dynamicChildren.hasOnce = !0);
    const { type: w, ref: B, shapeFlag: F } = p;
    switch (w) {
      case ts:
        _(u, p, g, $);
        break;
      case Qe:
        z(u, p, g, $);
        break;
      case bs:
        u == null && I(p, g, $, N);
        break;
      case K:
        ie(
          u,
          p,
          g,
          $,
          y,
          k,
          N,
          P,
          M
        );
        break;
      default:
        F & 1 ? L(
          u,
          p,
          g,
          $,
          y,
          k,
          N,
          P,
          M
        ) : F & 6 ? Vt(
          u,
          p,
          g,
          $,
          y,
          k,
          N,
          P,
          M
        ) : (F & 64 || F & 128) && w.process(
          u,
          p,
          g,
          $,
          y,
          k,
          N,
          P,
          M,
          Ut
        );
    }
    B != null && y ? en(B, u && u.ref, k, p || u, !p) : B == null && u && u.ref != null && en(u.ref, null, k, u, !0);
  }, _ = (u, p, g, $) => {
    if (u == null)
      s(
        p.el = o(p.children),
        g,
        $
      );
    else {
      const y = p.el = u.el;
      p.children !== u.children && a(y, p.children);
    }
  }, z = (u, p, g, $) => {
    u == null ? s(
      p.el = A(p.children || ""),
      g,
      $
    ) : p.el = u.el;
  }, I = (u, p, g, $) => {
    [u.el, u.anchor] = R(
      u.children,
      p,
      g,
      $,
      u.el,
      u.anchor
    );
  }, b = ({ el: u, anchor: p }, g, $) => {
    let y;
    for (; u && u !== p; )
      y = h(u), s(u, g, $), u = y;
    s(p, g, $);
  }, T = ({ el: u, anchor: p }) => {
    let g;
    for (; u && u !== p; )
      g = h(u), i(u), u = g;
    i(p);
  }, L = (u, p, g, $, y, k, N, P, M) => {
    if (p.type === "svg" ? N = "svg" : p.type === "math" && (N = "mathml"), u == null)
      E(
        p,
        g,
        $,
        y,
        k,
        N,
        P,
        M
      );
    else {
      const w = u.el && u.el._isVueCE ? u.el : null;
      try {
        w && w._beginPatch(), Ge(
          u,
          p,
          y,
          k,
          N,
          P,
          M
        );
      } finally {
        w && w._endPatch();
      }
    }
  }, E = (u, p, g, $, y, k, N, P) => {
    let M, w;
    const { props: B, shapeFlag: F, transition: D, dirs: V } = u;
    if (M = u.el = l(
      u.type,
      k,
      B && B.is,
      B
    ), F & 8 ? c(M, u.children) : F & 16 && xe(
      u.children,
      M,
      null,
      $,
      y,
      xs(u, k),
      N,
      P
    ), V && vt(u, null, $, "created"), G(M, u, u.scopeId, N, $), B) {
      for (const q in B)
        q !== "value" && !qt(q) && r(M, q, null, B[q], k, $);
      "value" in B && r(M, "value", null, B.value, k), (w = B.onVnodeBeforeMount) && Re(w, $, u);
    }
    V && vt(u, null, $, "beforeMount");
    const Y = OA(y, D);
    Y && D.beforeEnter(M), s(M, p, g), ((w = B && B.onVnodeMounted) || Y || V) && me(() => {
      try {
        w && Re(w, $, u), Y && D.enter(M), V && vt(u, null, $, "mounted");
      } finally {
      }
    }, y);
  }, G = (u, p, g, $, y) => {
    if (g && x(u, g), $)
      for (let k = 0; k < $.length; k++)
        x(u, $[k]);
    if (y) {
      let k = y.subTree;
      if (p === k || oo(k.type) && (k.ssContent === p || k.ssFallback === p)) {
        const N = y.vnode;
        G(
          u,
          N,
          N.scopeId,
          N.slotScopeIds,
          y.parent
        );
      }
    }
  }, xe = (u, p, g, $, y, k, N, P, M = 0) => {
    for (let w = M; w < u.length; w++) {
      const B = u[w] = P ? Ke(u[w]) : je(u[w]);
      v(
        null,
        B,
        p,
        g,
        $,
        y,
        k,
        N,
        P
      );
    }
  }, Ge = (u, p, g, $, y, k, N) => {
    const P = p.el = u.el;
    let { patchFlag: M, dynamicChildren: w, dirs: B } = p;
    M |= u.patchFlag & 16;
    const F = u.props || te, D = p.props || te;
    let V;
    if (g && yt(g, !1), (V = D.onVnodeBeforeUpdate) && Re(V, g, p, u), B && vt(p, u, g, "beforeUpdate"), g && yt(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    w && (!u.dynamicChildren || u.dynamicChildren.length !== w.length) && (M = 0, N = !1, w = null), (F.innerHTML && D.innerHTML == null || F.textContent && D.textContent == null) && c(P, ""), w ? pt(
      u.dynamicChildren,
      w,
      P,
      g,
      $,
      xs(p, y),
      k
    ) : N || Pt(
      u,
      p,
      P,
      null,
      g,
      $,
      xs(p, y),
      k,
      !1
    ), M > 0) {
      if (M & 16)
        ht(P, F, D, g, y);
      else if (M & 2 && F.class !== D.class && r(P, "class", null, D.class, y), M & 4 && r(P, "style", F.style, D.style, y), M & 8) {
        const Y = p.dynamicProps;
        for (let q = 0; q < Y.length; q++) {
          const Z = Y[q], re = F[Z], Ae = D[Z];
          (Ae !== re || Z === "value") && r(P, Z, re, Ae, y, g);
        }
      }
      M & 1 && u.children !== p.children && c(P, p.children);
    } else !N && w == null && ht(P, F, D, g, y);
    ((V = D.onVnodeUpdated) || B) && me(() => {
      V && Re(V, g, p, u), B && vt(p, u, g, "updated");
    }, $);
  }, pt = (u, p, g, $, y, k, N) => {
    for (let P = 0; P < p.length; P++) {
      const M = u[P], w = p[P], B = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        M.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (M.type === K || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ht(M, w) || // - In the case of a component, it could contain anything.
        M.shapeFlag & 198) ? d(M.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      v(
        M,
        w,
        B,
        null,
        $,
        y,
        k,
        N,
        !0
      );
    }
  }, ht = (u, p, g, $, y) => {
    if (p !== g) {
      if (p !== te)
        for (const k in p)
          !qt(k) && !(k in g) && r(
            u,
            k,
            p[k],
            null,
            y,
            $
          );
      for (const k in g) {
        if (qt(k)) continue;
        const N = g[k], P = p[k];
        N !== P && k !== "value" && r(u, k, P, N, y, $);
      }
      "value" in g && r(u, "value", p.value, g.value, y);
    }
  }, ie = (u, p, g, $, y, k, N, P, M) => {
    const w = p.el = u ? u.el : o(""), B = p.anchor = u ? u.anchor : o("");
    let { patchFlag: F, dynamicChildren: D, slotScopeIds: V } = p;
    V && (P = P ? P.concat(V) : V), u == null ? (s(w, g, $), s(B, g, $), xe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      g,
      B,
      y,
      k,
      N,
      P,
      M
    )) : F > 0 && F & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === D.length ? (pt(
      u.dynamicChildren,
      D,
      g,
      y,
      k,
      N,
      P
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || y && p === y.subTree) && so(
      u,
      p,
      !0
      /* shallow */
    )) : Pt(
      u,
      p,
      g,
      B,
      y,
      k,
      N,
      P,
      M
    );
  }, Vt = (u, p, g, $, y, k, N, P, M) => {
    p.slotScopeIds = P, u == null ? p.shapeFlag & 512 ? y.ctx.activate(
      p,
      g,
      $,
      N,
      M
    ) : ue(
      p,
      g,
      $,
      y,
      k,
      N,
      M
    ) : mt(u, p, M);
  }, ue = (u, p, g, $, y, k, N) => {
    const P = u.component = GA(
      u,
      $,
      y
    );
    if (Yr(u) && (P.ctx.renderer = Ut), HA(P, !1, N), P.asyncDep) {
      if (y && y.registerDep(P, gt, N), !u.el) {
        const M = P.subTree = De(Qe);
        z(null, M, p, g), u.placeholder = M.el;
      }
    } else
      gt(
        P,
        u,
        p,
        g,
        y,
        k,
        N
      );
  }, mt = (u, p, g) => {
    const $ = p.component = u.component;
    if (SA(u, p, g))
      if ($.asyncDep && !$.asyncResolved) {
        p.el = u.el, xt($, p, g);
        return;
      } else
        $.next = p, $.update();
    else
      p.el = u.el, $.vnode = p;
  }, gt = (u, p, g, $, y, k, N) => {
    const P = () => {
      if (u.isMounted) {
        let { next: F, bu: D, u: V, parent: Y, vnode: q } = u;
        {
          const Pe = io(u);
          if (Pe) {
            F && (F.el = q.el, xt(u, F, N)), Pe.asyncDep.then(() => {
              me(() => {
                u.isUnmounted || w();
              }, y);
            });
            return;
          }
        }
        let Z = F, re;
        yt(u, !1), F ? (F.el = q.el, xt(u, F, N)) : F = q, D && kn(D), (re = F.props && F.props.onVnodeBeforeUpdate) && Re(re, Y, F, q), yt(u, !0);
        const Ae = Ei(u), Te = u.subTree;
        u.subTree = Ae, v(
          Te,
          Ae,
          // parent may have changed if it's in a teleport
          d(Te.el),
          // anchor may have changed if it's in a fragment
          gn(Te),
          u,
          y,
          k
        ), F.el = Ae.el, Z === null && EA(u, Ae.el), V && me(V, y), (re = F.props && F.props.onVnodeUpdated) && me(
          () => Re(re, Y, F, q),
          y
        );
      } else {
        let F;
        const { el: D, props: V } = p, { bm: Y, m: q, parent: Z, root: re, type: Ae } = u, Te = tn(p);
        yt(u, !1), Y && kn(Y), !Te && (F = V && V.onVnodeBeforeMount) && Re(F, Z, p), yt(u, !0);
        {
          re.ce && re.ce._hasShadowRoot() && re.ce._injectChildStyle(
            Ae,
            u.parent ? u.parent.type : void 0
          );
          const Pe = u.subTree = Ei(u);
          v(
            null,
            Pe,
            g,
            $,
            u,
            y,
            k
          ), p.el = Pe.el;
        }
        if (q && me(q, y), !Te && (F = V && V.onVnodeMounted)) {
          const Pe = p;
          me(
            () => Re(F, Z, Pe),
            y
          );
        }
        (p.shapeFlag & 256 || Z && tn(Z.vnode) && Z.vnode.shapeFlag & 256) && u.a && me(u.a, y), u.isMounted = !0, p = g = $ = null;
      }
    };
    u.scope.on();
    const M = u.effect = new kr(P);
    u.scope.off();
    const w = u.update = M.run.bind(M), B = u.job = M.runIfDirty.bind(M);
    B.i = u, B.id = u.uid, M.scheduler = () => Xs(B), yt(u, !0), w();
  }, xt = (u, p, g) => {
    p.component = u;
    const $ = u.vnode.props;
    u.vnode = p, u.next = null, MA(u, p.props, $, g), NA(u, p.children, g), At(), zi(u), at();
  }, Pt = (u, p, g, $, y, k, N, P, M = !1) => {
    const w = u && u.children, B = u ? u.shapeFlag : 0, F = p.children, { patchFlag: D, shapeFlag: V } = p;
    if (D > 0) {
      if (D & 128) {
        ye(
          w,
          F,
          g,
          $,
          y,
          k,
          N,
          P,
          M
        );
        return;
      } else if (D & 256) {
        mn(
          w,
          F,
          g,
          $,
          y,
          k,
          N,
          P,
          M
        );
        return;
      }
    }
    V & 8 ? (B & 16 && Wt(w, y, k), F !== w && c(g, F)) : B & 16 ? V & 16 ? ye(
      w,
      F,
      g,
      $,
      y,
      k,
      N,
      P,
      M
    ) : Wt(w, y, k, !0) : (B & 8 && c(g, ""), V & 16 && xe(
      F,
      g,
      $,
      y,
      k,
      N,
      P,
      M
    ));
  }, mn = (u, p, g, $, y, k, N, P, M) => {
    u = u || kt, p = p || kt;
    const w = u.length, B = p.length, F = Math.min(w, B);
    let D;
    for (D = 0; D < F; D++) {
      const V = p[D] = M ? Ke(p[D]) : je(p[D]);
      v(
        u[D],
        V,
        g,
        null,
        y,
        k,
        N,
        P,
        M
      );
    }
    w > B ? Wt(
      u,
      y,
      k,
      !0,
      !1,
      F
    ) : xe(
      p,
      g,
      $,
      y,
      k,
      N,
      P,
      M,
      F
    );
  }, ye = (u, p, g, $, y, k, N, P, M) => {
    let w = 0;
    const B = p.length;
    let F = u.length - 1, D = B - 1;
    for (; w <= F && w <= D; ) {
      const V = u[w], Y = p[w] = M ? Ke(p[w]) : je(p[w]);
      if (Ht(V, Y))
        v(
          V,
          Y,
          g,
          null,
          y,
          k,
          N,
          P,
          M
        );
      else
        break;
      w++;
    }
    for (; w <= F && w <= D; ) {
      const V = u[F], Y = p[D] = M ? Ke(p[D]) : je(p[D]);
      if (Ht(V, Y))
        v(
          V,
          Y,
          g,
          null,
          y,
          k,
          N,
          P,
          M
        );
      else
        break;
      F--, D--;
    }
    if (w > F) {
      if (w <= D) {
        const V = D + 1, Y = V < B ? p[V].el : $;
        for (; w <= D; )
          v(
            null,
            p[w] = M ? Ke(p[w]) : je(p[w]),
            g,
            Y,
            y,
            k,
            N,
            P,
            M
          ), w++;
      }
    } else if (w > D)
      for (; w <= F; )
        he(u[w], y, k, !0), w++;
    else {
      const V = w, Y = w, q = /* @__PURE__ */ new Map();
      for (w = Y; w <= D; w++) {
        const be = p[w] = M ? Ke(p[w]) : je(p[w]);
        be.key != null && q.set(be.key, w);
      }
      let Z, re = 0;
      const Ae = D - Y + 1;
      let Te = !1, Pe = 0;
      const Gt = new Array(Ae);
      for (w = 0; w < Ae; w++) Gt[w] = 0;
      for (w = V; w <= F; w++) {
        const be = u[w];
        if (re >= Ae) {
          he(be, y, k, !0);
          continue;
        }
        let Ne;
        if (be.key != null)
          Ne = q.get(be.key);
        else
          for (Z = Y; Z <= D; Z++)
            if (Gt[Z - Y] === 0 && Ht(be, p[Z])) {
              Ne = Z;
              break;
            }
        Ne === void 0 ? he(be, y, k, !0) : (Gt[Ne - Y] = w + 1, Ne >= Pe ? Pe = Ne : Te = !0, v(
          be,
          p[Ne],
          g,
          null,
          y,
          k,
          N,
          P,
          M
        ), re++);
      }
      const mi = Te ? jA(Gt) : kt;
      for (Z = mi.length - 1, w = Ae - 1; w >= 0; w--) {
        const be = Y + w, Ne = p[be], gi = p[be + 1], xi = be + 1 < B ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          gi.el || ro(gi)
        ) : $;
        Gt[w] === 0 ? v(
          null,
          Ne,
          g,
          xi,
          y,
          k,
          N,
          P,
          M
        ) : Te && (Z < 0 || w !== mi[Z] ? bt(Ne, g, xi, 2) : Z--);
      }
    }
  }, bt = (u, p, g, $, y = null) => {
    const { el: k, type: N, transition: P, children: M, shapeFlag: w } = u;
    if (w & 6) {
      bt(u.component.subTree, p, g, $);
      return;
    }
    if (w & 128) {
      u.suspense.move(p, g, $);
      return;
    }
    if (w & 64) {
      N.move(u, p, g, Ut);
      return;
    }
    if (N === K) {
      s(k, p, g);
      for (let F = 0; F < M.length; F++)
        bt(M[F], p, g, $);
      s(u.anchor, p, g);
      return;
    }
    if (N === bs) {
      b(u, p, g);
      return;
    }
    if ($ !== 2 && w & 1 && P)
      if ($ === 0)
        P.persisted && !k[ms] ? s(k, p, g) : (P.beforeEnter(k), s(k, p, g), me(() => P.enter(k), y));
      else {
        const { leave: F, delayLeave: D, afterLeave: V } = P, Y = () => {
          u.ctx.isUnmounted ? i(k) : s(k, p, g);
        }, q = () => {
          const Z = k._isLeaving || !!k[ms];
          k._isLeaving && k[ms](
            !0
            /* cancelled */
          ), P.persisted && !Z ? Y() : F(k, () => {
            Y(), V && V();
          });
        };
        D ? D(k, Y, q) : q();
      }
    else
      s(k, p, g);
  }, he = (u, p, g, $ = !1, y = !1) => {
    const {
      type: k,
      props: N,
      ref: P,
      children: M,
      dynamicChildren: w,
      shapeFlag: B,
      patchFlag: F,
      dirs: D,
      cacheIndex: V,
      memo: Y
    } = u;
    if ((F === -2 || w && w.hasOnce) && (y = !1), P != null && (At(), en(P, null, g, u, !0), at()), V != null && (!u.ctx || u.ctx === p) && (p.renderCache[V] = void 0), B & 256) {
      p.ctx.deactivate(u);
      return;
    }
    const q = B & 1 && D, Z = !tn(u);
    let re;
    if (Z && (re = N && N.onVnodeBeforeUnmount) && Re(re, p, u), B & 6)
      ml(u.component, g, $);
    else {
      if (B & 128) {
        u.suspense.unmount(g, $);
        return;
      }
      q && vt(u, null, p, "beforeUnmount"), B & 64 ? u.type.remove(
        u,
        p,
        g,
        Ut,
        $
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== K || F > 0 && F & 64) ? Wt(
        w,
        p,
        g,
        !1,
        !0
      ) : (k === K && F & 384 || !y && B & 16) && Wt(M, p, g), $ && pi(u);
    }
    const Ae = Y != null && V == null;
    (Z && (re = N && N.onVnodeUnmounted) || q || Ae) && me(() => {
      re && Re(re, p, u), q && vt(u, null, p, "unmounted"), Ae && (u.el = null);
    }, g);
  }, pi = (u) => {
    const { type: p, el: g, anchor: $, transition: y } = u;
    if (p === K) {
      hl(g, $);
      return;
    }
    if (p === bs) {
      T(u), y && !y.persisted && y.afterLeave && y.afterLeave();
      return;
    }
    const k = () => {
      i(g), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (u.shapeFlag & 1 && y && !y.persisted) {
      const { leave: N, delayLeave: P } = y, M = () => N(g, k);
      P ? P(u.el, k, M) : M();
    } else
      k();
  }, hl = (u, p) => {
    let g;
    for (; u !== p; )
      g = h(u), i(u), u = g;
    i(p);
  }, ml = (u, p, g) => {
    const { bum: $, scope: y, job: k, subTree: N, um: P, m: M, a: w } = u;
    Ii(M), Ii(w), $ && kn($), y.stop(), k ? (k.flags |= 8, he(N, u, p, g)) : u.vnode.el && N && (N.transition = u.vnode.transition, he(N, u, p, g)), P && me(P, p), me(() => {
      u.isUnmounted = !0;
    }, p);
  }, Wt = (u, p, g, $ = !1, y = !1, k = 0) => {
    for (let N = k; N < u.length; N++)
      he(u[N], p, g, $, y);
  }, gn = (u) => {
    if (u.shapeFlag & 6)
      return gn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const p = h(u.anchor || u.el), g = p && p[dA];
    return g ? h(g) : p;
  };
  let cs = !1;
  const hi = (u, p, g) => {
    let $;
    u == null ? p._vnode && (he(p._vnode, null, null, !0), $ = p._vnode.component) : v(
      p._vnode || null,
      u,
      p,
      null,
      null,
      null,
      g
    ), p._vnode = u, cs || (cs = !0, zi($), Vr(), cs = !1);
  }, Ut = {
    p: v,
    um: he,
    m: bt,
    r: pi,
    mt: ue,
    mc: xe,
    pc: Pt,
    pbc: pt,
    n: gn,
    o: e
  };
  return {
    render: hi,
    hydrate: void 0,
    createApp: yA(hi)
  };
}
function xs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function yt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function OA(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function so(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (W(s) && W(i))
    for (let r = 0; r < s.length; r++) {
      const l = s[r];
      let o = i[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = i[r] = Ke(i[r]), o.el = l.el), !n && o.patchFlag !== -2 && so(l, o)), o.type === ts && (o.patchFlag === -1 && (o = i[r] = Ke(o)), o.el = l.el), o.type === Qe && !o.el && (o.el = l.el);
    }
}
function jA(e) {
  const t = e.slice(), n = [0];
  let s, i, r, l, o;
  const A = e.length;
  for (s = 0; s < A; s++) {
    const a = e[s];
    if (a !== 0) {
      if (i = n[n.length - 1], e[i] < a) {
        t[s] = i, n.push(s);
        continue;
      }
      for (r = 0, l = n.length - 1; r < l; )
        o = r + l >> 1, e[n[o]] < a ? r = o + 1 : l = o;
      a < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, l = n[r - 1]; r-- > 0; )
    n[r] = l, l = t[l];
  return n;
}
function io(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : io(t);
}
function Ii(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ro(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ro(t.subTree) : null;
}
const oo = (e) => e.__isSuspense;
function LA(e, t) {
  t && t.pendingBranch ? W(e) ? t.effects.push(...e) : t.effects.push(e) : oA(e);
}
const K = /* @__PURE__ */ Symbol.for("v-fgt"), ts = /* @__PURE__ */ Symbol.for("v-txt"), Qe = /* @__PURE__ */ Symbol.for("v-cmt"), bs = /* @__PURE__ */ Symbol.for("v-stc"), Et = [];
let ve = null;
function S(e = !1) {
  Et.push(ve = e ? null : []);
}
function lo() {
  Et.pop(), ve = Et[Et.length - 1] || null;
}
let An = 1;
function Ti(e, t = !1) {
  An += e, e < 0 && ve && t && (ve.hasOnce = !0);
}
function Ao(e) {
  return e.dynamicChildren = An > 0 ? ve || kt : null, lo(), An > 0 && ve && ve.push(e), e;
}
function C(e, t, n, s, i, r) {
  return Ao(
    f(
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
function qe(e, t, n, s, i) {
  return Ao(
    De(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function ao(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ht(e, t) {
  return e.type === t.type && e.key === t.key;
}
const co = ({ key: e }) => e ?? null, $n = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? oe(e) || /* @__PURE__ */ pe(e) || J(e) ? { i: _e, r: e, k: t, f: !!n } : e : null);
function f(e, t = null, n = null, s = 0, i = null, r = e === K ? 0 : 1, l = !1, o = !1) {
  const A = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && co(t),
    ref: t && $n(t),
    scopeId: Ur,
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
    ctx: _e
  };
  return o ? (Nn(A, n), r & 128 && e.normalize(A)) : n && (A.shapeFlag |= oe(n) ? 8 : 16), An > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  ve && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (A.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  A.patchFlag !== 32 && ve.push(A), A;
}
const De = DA;
function DA(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === xA) && (e = Qe), ao(e)) {
    const o = Dt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Nn(o, n), An > 0 && !r && ve && (o.shapeFlag & 6 ? ve[ve.indexOf(e)] = o : ve.push(o)), o.patchFlag = -2, o;
  }
  if (qA(e) && (e = e.__vccOpts), t) {
    t = BA(t);
    let { class: o, style: A } = t;
    o && !oe(o) && (t.class = ge(o)), ne(A) && (/* @__PURE__ */ Qs(A) && !W(A) && (A = Ie({}, A)), t.style = Kn(A));
  }
  const l = oe(e) ? 1 : oo(e) ? 128 : Xn(e) ? 64 : ne(e) ? 4 : J(e) ? 2 : 0;
  return f(
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
function BA(e) {
  return e ? /* @__PURE__ */ Qs(e) || Qr(e) ? Ie({}, e) : e : null;
}
function Dt(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: l, children: o, transition: A } = e, a = t ? VA(i || {}, t) : i, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && co(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? W(r) ? r.concat($n(t)) : [r, $n(t)] : $n(t)
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
    patchFlag: t && e.type !== K ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: A,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Dt(e.ssContent),
    ssFallback: e.ssFallback && Dt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return A && s && ei(
    c,
    A.clone(c)
  ), c;
}
function st(e = " ", t = 0) {
  return De(ts, null, e, t);
}
function U(e = "", t = !1) {
  return t ? (S(), qe(Qe, null, e)) : De(Qe, null, e);
}
function je(e) {
  return e == null || typeof e == "boolean" ? De(Qe) : W(e) ? De(
    K,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ao(e) ? Ke(e) : De(ts, null, String(e));
}
function Ke(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Dt(e);
}
function Nn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (W(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Nn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Qr(t) ? t._ctx = _e : i === 3 && _e && (_e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (J(t)) {
    if (s & 65) {
      Nn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: _e }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [st(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function VA(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = ge([t.class, s.class]));
      else if (i === "style")
        t.style = Kn([t.style, s.style]);
      else if (Wn(i)) {
        const r = t[i], l = s[i];
        l && r !== l && !(W(r) && r.includes(l)) ? t[i] = r ? [].concat(r, l) : l : l == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Un(i) && (t[i] = l);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Re(e, t, n, s = null) {
  We(e, t, 7, [
    n,
    s
  ]);
}
const WA = Kr();
let UA = 0;
function GA(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || WA, r = {
    uid: UA++,
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
    scope: new Ml(
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
    propsOptions: IA(s, i),
    emitsOptions: kA(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: te,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: te,
    data: te,
    props: te,
    attrs: te,
    slots: te,
    refs: te,
    setupState: te,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = _A.bind(null, r), e.ce && e.ce(r), r;
}
let ut = null;
const YA = () => ut || _e;
let Rn, an;
{
  const e = Hn(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((l) => l(r)) : i[0](r);
    };
  };
  Rn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ut = n
  ), an = t(
    "__VUE_SSR_SETTERS__",
    (n) => cn = n
  );
}
const si = (e) => {
  const t = ut;
  return Rn(e), e.scope.on(), () => {
    e.scope.off(), Rn(t);
  };
}, Pi = () => {
  ut && ut.scope.off(), Rn(null);
};
function uo(e) {
  return e.vnode.shapeFlag & 4;
}
let cn = !1;
function HA(e, t = !1, n = !1) {
  t && an(t);
  const { props: s, children: i } = e.vnode, r = uo(e);
  CA(e, s, r, t), PA(e, i, n || t);
  const l = r ? KA(e, t) : void 0;
  return t && an(!1), l;
}
function KA(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, bA);
  const { setup: s } = n;
  if (s) {
    At();
    const i = e.setupContext = s.length > 1 ? JA(e) : null, r = si(e), l = pn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), o = mr(l);
    if (at(), r(), (o || e.sp) && !tn(e) && pA(e), o) {
      if (l.then(Pi, Pi), t)
        return l.then((A) => {
          an(!0);
          try {
            Ni(e, A, t);
          } finally {
            an(!1);
          }
        }).catch((A) => {
          qn(A, e, 0);
        });
      e.asyncDep = l;
    } else
      Ni(e, l);
  } else
    fo(e);
}
function Ni(e, t, n) {
  J(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ne(t) && (e.setupState = jr(t)), fo(e);
}
function fo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || $t);
}
const ZA = {
  get(e, t) {
    return ce(e, "get", ""), e[t];
  }
};
function JA(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ZA),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ns(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(jr(Jl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in nn)
        return nn[n](e);
    },
    has(t, n) {
      return n in t || n in nn;
    }
  })) : e.proxy;
}
function qA(e) {
  return J(e) && "__vccOpts" in e;
}
const X = (e, t) => /* @__PURE__ */ tA(e, t, cn), QA = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ls;
const Ri = typeof window < "u" && window.trustedTypes;
if (Ri)
  try {
    Ls = /* @__PURE__ */ Ri.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const po = Ls ? (e) => Ls.createHTML(e) : (e) => e, XA = "http://www.w3.org/2000/svg", ea = "http://www.w3.org/1998/Math/MathML", He = typeof document < "u" ? document : null, Fi = He && /* @__PURE__ */ He.createElement("template"), ta = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? He.createElementNS(XA, e) : t === "mathml" ? He.createElementNS(ea, e) : n ? He.createElement(e, { is: n }) : He.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => He.createTextNode(e),
  createComment: (e) => He.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => He.querySelector(e),
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
      Fi.innerHTML = po(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Fi.content;
      if (s === "svg" || s === "mathml") {
        const A = o.firstChild;
        for (; A.firstChild; )
          o.appendChild(A.firstChild);
        o.removeChild(A);
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
}, na = /* @__PURE__ */ Symbol("_vtc");
function sa(e, t, n) {
  const s = e[na];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Oi = /* @__PURE__ */ Symbol("_vod"), ia = /* @__PURE__ */ Symbol("_vsh"), ra = /* @__PURE__ */ Symbol(""), oa = /(?:^|;)\s*display\s*:/;
function la(e, t, n) {
  const s = e.style, i = oe(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (oe(t))
        for (const l of t.split(";")) {
          const o = l.slice(0, l.indexOf(":")).trim();
          n[o] == null && Zt(s, o, "");
        }
      else
        for (const l in t)
          n[l] == null && Zt(s, l, "");
    for (const l in n) {
      l === "display" && (r = !0);
      const o = n[l];
      o != null ? aa(
        e,
        l,
        !oe(t) && t ? t[l] : void 0,
        o
      ) || Zt(s, l, o) : Zt(s, l, "");
    }
  } else if (i) {
    if (t !== n) {
      const l = s[ra];
      l && (n += ";" + l), s.cssText = n, r = oa.test(n);
    }
  } else t && e.removeAttribute("style");
  Oi in e && (e[Oi] = r ? s.display : "", e[ia] && (s.display = "none"));
}
const yn = /\s*!important$/;
function Zt(e, t, n) {
  if (W(n))
    n.forEach((s) => Zt(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    yn.test(n) ? e.setProperty(t, n.replace(yn, ""), "important") : e.setProperty(t, n);
  else {
    const s = Aa(e, t);
    yn.test(n) ? e.setProperty(
      Tt(s),
      n.replace(yn, ""),
      "important"
    ) : e[s] = n;
  }
}
const ji = ["Webkit", "Moz", "ms"], vs = {};
function Aa(e, t) {
  const n = vs[t];
  if (n)
    return n;
  let s = $e(t);
  if (s !== "filter" && s in e)
    return vs[t] = s;
  s = br(s);
  for (let i = 0; i < ji.length; i++) {
    const r = ji[i] + s;
    if (r in e)
      return vs[t] = r;
  }
  return t;
}
function aa(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && oe(s) && n === s;
}
const Li = "http://www.w3.org/1999/xlink";
function Di(e, t, n, s, i, r = $l(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Li, t.slice(6, t.length)) : e.setAttributeNS(Li, t, n) : n == null || r && !yr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Be(n) ? String(n) : n
  );
}
function Bi(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? po(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const o = r === "OPTION" ? e.getAttribute("value") || "" : e.value, A = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (o !== A || !("_value" in e)) && (e.value = A), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = yr(n) : n == null && o === "string" ? (n = "", l = !0) : o === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(i || t);
}
function _t(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ca(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Vi = /* @__PURE__ */ Symbol("_vei");
function ua(e, t, n, s, i = null) {
  const r = e[Vi] || (e[Vi] = {}), l = r[t];
  if (s && l)
    l.value = s;
  else {
    const [o, A] = pa(t);
    if (s) {
      const a = r[t] = ga(
        s,
        i
      );
      _t(e, o, a, A);
    } else l && (ca(e, o, l, A), r[t] = void 0);
  }
}
const da = /(Once|Passive|Capture)$/, fa = /^on:?(?:Once|Passive|Capture)$/;
function pa(e) {
  let t, n;
  for (; (n = e.match(da)) && !fa.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Tt(e.slice(2)), t];
}
let ys = 0;
const ha = /* @__PURE__ */ Promise.resolve(), ma = () => ys || (ha.then(() => ys = 0), ys = Date.now());
function ga(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (W(i)) {
      const r = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        r.call(s), s._stopped = !0;
      };
      const l = i.slice(), o = [s];
      for (let A = 0; A < l.length && !s._stopped; A++) {
        const a = l[A];
        a && We(
          a,
          t,
          5,
          o
        );
      }
    } else
      We(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = ma(), n;
}
const Wi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, xa = (e, t, n, s, i, r) => {
  const l = i === "svg";
  t === "class" ? sa(e, s, l) : t === "style" ? la(e, n, s) : Wn(t) ? Un(t) || ua(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ba(e, t, s, l)) ? (Bi(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Di(e, t, s, l, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (va(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !oe(s))) ? Bi(e, $e(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Di(e, t, s, l));
};
function ba(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Wi(t) && J(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Wi(t) && oe(n) ? !1 : t in e;
}
function va(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = $e(t);
  return Array.isArray(n) ? n.some((i) => $e(i) === s) : Object.keys(n).some((i) => $e(i) === s);
}
const Fn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return W(t) ? (n) => kn(t, n) : t;
};
function ya(e) {
  e.target.composing = !0;
}
function Ui(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const zt = /* @__PURE__ */ Symbol("_assign"), wn = /* @__PURE__ */ Symbol("_initialValue");
function ws(e, t, n) {
  return t && (e = e.trim()), n && (e = Yn(e)), e;
}
const Gi = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[wn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[wn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[zt] = Fn(i);
    const r = s || i.props && i.props.type === "number";
    _t(e, t ? "change" : "input", (l) => {
      l.target.composing || e[zt](ws(e.value, n, r));
    }), (n || r) && _t(e, "change", () => {
      e.value = ws(e.value, n, r);
    }), t || (_t(e, "compositionstart", ya), _t(e, "compositionend", Ui), _t(e, "change", Ui));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", r = e[wn];
    delete e[wn], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[zt](ws(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, l) {
    if (e[zt] = Fn(l), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? Yn(e.value) : e.value, A = t ?? "";
    if (o === A)
      return;
    const a = e.getRootNode();
    (a instanceof Document || a instanceof ShadowRoot) && a.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === A) || (e.value = A);
  }
}, ho = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, _t(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (A) => A.selected).map(
        (A) => n ? Yn(On(A)) : On(A)
      ), r = e.multiple, l = r ? Ct(e._modelValue) ? new Set(i) : i : i[0], o = e._pendingValue = [
        r,
        r ? W(l) ? i.slice() : i : l
      ];
      try {
        e[zt](l);
      } finally {
        Dr(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[zt] = Fn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Yi(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[zt] = Fn(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !wa(t, n[1], n[0])) && Yi(e, t);
  }
};
function wa(e, t, n) {
  if (!n || W(e)) return lt(e, t);
  if (Ct(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function Yi(e, t) {
  const n = e.multiple, s = W(t);
  if (!(n && !s && !Ct(t))) {
    for (let i = 0, r = e.options.length; i < r; i++) {
      const l = e.options[i], o = On(l);
      if (n)
        if (s) {
          const A = typeof o;
          A === "string" || A === "number" ? l.selected = t.some((a) => String(a) === String(o)) : l.selected = Cl(t, o) > -1;
        } else
          l.selected = t.has(o);
      else if (lt(On(l), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function On(e) {
  return "_value" in e ? e._value : e.value;
}
const _a = ["ctrl", "shift", "alt", "meta"], ka = {
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
  exact: (e, t) => _a.some((n) => e[`${n}Key`] && !t.includes(n))
}, za = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((i, ...r) => {
    for (let l = 0; l < t.length; l++) {
      const o = ka[t[l]];
      if (o && o(i, t)) return;
    }
    return e(i, ...r);
  }));
}, $a = /* @__PURE__ */ Ie({ patchProp: xa }, ta);
let Hi;
function Sa() {
  return Hi || (Hi = RA($a));
}
const Ea = ((...e) => {
  const t = Sa().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Ma(s);
    if (!i) return;
    const r = t._component;
    !J(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const l = n(i, !1, Ca(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), l;
  }, t;
});
function Ca(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ma(e) {
  return oe(e) ? document.querySelector(e) : e;
}
const Ia = "zhonglou", Ta = "钟楼", Pa = "1.3.0", Na = "S", Ra = 10, Fa = "【副本进行中：钟楼】", Oa = [], ja = { briefingName: "钟楼" }, La = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, Da = { type: "nights", template: "剩余{n}夜" }, Ba = "至第四日日出", Va = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], Wa = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", Ua = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], Ga = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], Ya = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], Ha = [{ title: "游玩说明", md: `## 副本概况
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
- 1F文具柜：一沓纸、两支铅笔。因为道具栏冻结，这是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], Ka = {
  id: Ia,
  name: Ta,
  version: Pa,
  level: Na,
  players: Ra,
  token: Fa,
  legacyKeys: Oa,
  detect: ja,
  time: La,
  remaining: Da,
  deadline: Ba,
  roles: Va,
  rolesNote: Wa,
  stateFields: Ua,
  phases: Ga,
  events: Ya,
  docs: Ha
}, Za = "jingjie", Ja = "境界游乐园", qa = "1.0.0", Qa = "A", Xa = "【副本进行中：境界游乐园】", ec = [], tc = { briefingName: "境界游乐园" }, nc = { type: "none" }, sc = { type: "fromPanel" }, ic = [], rc = [], oc = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], lc = {
  id: Za,
  name: Ja,
  version: qa,
  level: Qa,
  token: Xa,
  legacyKeys: ec,
  detect: tc,
  time: nc,
  remaining: sc,
  phases: ic,
  events: rc,
  docs: oc
}, Ac = "kaoshi", ac = "考试", cc = "1.1.0", uc = "A", dc = "【副本进行中：考试】", fc = [], pc = { briefingName: "考试" }, hc = { type: "countdown", minutesPerRound: 3 }, mc = { type: "fromPanel" }, gc = "至考试结束", xc = [{ id: "main", name: "考试", cap: 100, next: null }], bc = [], vc = [], yc = {
  id: Ac,
  name: ac,
  version: cc,
  level: uc,
  token: dc,
  legacyKeys: fc,
  detect: pc,
  time: hc,
  remaining: mc,
  deadline: gc,
  phases: xc,
  events: bc,
  docs: vc
}, wc = "xiyan", _c = "喜宴", kc = "1.1.0", zc = "D", $c = "【副本进行中：喜宴】", Sc = [], Ec = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, Cc = { type: "countdown", minutesPerRound: 3 }, Mc = { type: "fromPanel" }, Ic = "至天亮", Tc = [{ id: "main", name: "喜宴", cap: 160, next: null }], Pc = [], Nc = [], Rc = {
  id: wc,
  name: _c,
  version: kc,
  level: zc,
  token: $c,
  legacyKeys: Sc,
  detect: Ec,
  time: Cc,
  remaining: Mc,
  deadline: Ic,
  phases: Tc,
  events: Pc,
  docs: Nc
}, Fc = "youxi", Oc = "游戏", jc = "1.1.0", Lc = "C", Dc = "【副本进行中：游戏】", Bc = [], Vc = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, Wc = { type: "countdown", minutesPerRound: 8 }, Uc = { type: "fromPanel" }, Gc = "至结算", Yc = [{ id: "main", name: "游戏", cap: 90, next: null }], Hc = [], Kc = [], Zc = {
  id: Fc,
  name: Oc,
  version: jc,
  level: Lc,
  token: Dc,
  legacyKeys: Bc,
  detect: Vc,
  time: Wc,
  remaining: Uc,
  deadline: Gc,
  phases: Yc,
  events: Hc,
  docs: Kc
}, Jc = "wuming", qc = "污名", Qc = "1.1.0", Xc = "B", eu = "4-8", tu = "【副本进行中：污名】", nu = ["污名"], su = { briefingName: "污名" }, iu = { type: "countdown", minutesPerRound: 3 }, ru = { type: "countdown", template: "剩余{m}分钟" }, ou = "至收播", lu = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], Au = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], au = [], cu = !0, uu = {
  id: Jc,
  name: qc,
  version: Qc,
  level: Xc,
  players: eu,
  token: tu,
  legacyKeys: nu,
  detect: su,
  time: iu,
  remaining: ru,
  deadline: ou,
  phases: lu,
  events: Au,
  docs: au,
  disableLive: cu
}, du = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function Ot(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const fu = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function Ki(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(fu)) {
    const i = Number(s[1]), r = s[2];
    n = !0, r === "天" ? t += i * 1440 : r === "小时" || r === "个小时" || r === "h" || r === "H" ? t += i * 60 : t += i;
  }
  return n ? Math.round(t) : null;
}
function mo(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: Ki(t), total: n === void 0 ? null : Ki(n) };
}
function pu(e, t) {
  return e.phases.find((n) => n.id === t);
}
function un(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); )
    n.push(i), s.add(i.id), i = pu(e, i.next);
  return n;
}
function go(e, t) {
  return un(e, t).filter((n) => n.night).length;
}
function hu(e, t, n) {
  if (un(e, t).some((i) => i.id === n.id)) return t;
  const s = e.phases[0];
  return s && un(e, s).some((i) => i.id === n.id) ? s : n;
}
function _s(e, t, n, s, i) {
  if (!e.phases.length || !e.phases.some((d) => d.id === t.id)) return;
  let r = un(e, n), l = r.findIndex((d) => d.id === t.id);
  l < 0 && (r = un(e, t), l = 0);
  const o = r.reduce((d, h) => d + Math.max(0, h.cap), 0), A = Math.max(0, t.cap - s) + r.slice(l + 1).reduce((d, h) => d + Math.max(0, h.cap), 0), a = t.deadline ?? r[0].deadline ?? e.deadline, c = { x: A, y: o, deadline: a };
  if (e.time.type === "countdown") {
    const d = e.time.minutesPerRound, h = e.time.totalMinutes, x = h && h > 0 ? h : o * d;
    let R = h && h > 0 && o > 0 ? Math.round(x * A / o) : A * d;
    const v = mo(i).remaining;
    v !== null && (R = Math.min(R, v - d)), R = Math.max(0, R), Object.assign(c, { minutes: R, total: x, text: `约剩${Ot(R)}/${Ot(x)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) c.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const d = e.remaining.template.replace("{n}", String(go(e, t)));
      c.text = a ? `${a}·${d}` : d;
    } else a && (c.text = a);
  return c;
}
const dn = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function xo(e, t, n = dn) {
  const s = e ?? "", i = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), r = i ? Math.max(1, Number(i[1])) : Math.max(1, Math.round(n[t] ?? dn[t])), l = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!l) return { rounds: r };
  const o = Number(l[1]), A = Math.round(l[2] === "天" ? o * 1440 : l[2].includes("小时") ? o * 60 : o);
  return A <= 0 ? { rounds: r } : { rounds: r, totalMinutes: A, minutesPerRound: Math.max(1, Math.round(A / r)) };
}
const jn = "generic", Ds = [Ka, lc, yc, Rc, Zc, uu], mu = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(du)
  }
};
function gu(e, t) {
  const n = mu[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const bo = ["D", "C", "B", "A", "S"];
function vo(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (a) => {
    (typeof n[a] != "string" || !n[a].trim()) && t.push(`缺少字段或不是文本：${a}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === jn && t.push(`id 不能是保留字 ${jn}`), bo.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((a) => typeof a != "string")) && t.push("legacyKeys 必须是文本数组"), !n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName ? t.push("缺少 detect.briefingName") : n.detect.patterns !== void 0 && (!Array.isArray(n.detect.patterns) || n.detect.patterns.some((a) => typeof a != "string")) && t.push("detect.patterns 必须是文本数组");
  const i = n.time;
  !i || !["none", "clock", "countdown"].includes(i.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (i.type === "clock" && (typeof i.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(i.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), i.type !== "none" && (typeof i.minutesPerRound != "number" || i.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"), i.type === "countdown" && i.totalMinutes !== void 0 && (typeof i.totalMinutes != "number" || i.totalMinutes <= 0) && t.push("time.totalMinutes 必须是正数"));
  const r = n.remaining;
  !r || !["nights", "countdown", "fromPanel"].includes(r.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : r.type !== "fromPanel" && typeof r.template != "string" && t.push("remaining.template 必须是文本"), r?.type === "countdown" && i?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.deadline !== void 0 && typeof n.deadline != "string" && t.push("deadline 必须是文本"), n.disableLive !== void 0 && typeof n.disableLive != "boolean" && t.push("disableLive 必须是 true 或 false"), n.casino !== void 0 && typeof n.casino != "boolean" && t.push("casino 必须是 true 或 false"), n.stateFields !== void 0 && (Array.isArray(n.stateFields) ? n.stateFields.forEach((a, c) => {
    (!a || typeof a.key != "string" || !a.key || typeof a.label != "string" || typeof a.hint != "string") && t.push(`stateFields[${c}] 需要 key、label、hint 三个文本`);
  }) : t.push("stateFields 必须是数组")), n.roles !== void 0 && (!Array.isArray(n.roles) || n.roles.some((a) => typeof a != "string" || !a)) && t.push("roles 必须是文本数组");
  const l = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  Array.isArray(n.phases) ? (n.phases.forEach((a, c) => {
    if (!a || typeof a.id != "string" || typeof a.name != "string") {
      t.push(`phases[${c}] 缺少 id 或 name`);
      return;
    }
    l.has(a.id) && t.push(`阶段 id 重复：${a.id}`), o.has(a.name) && t.push(`阶段名称重复：${a.name}`), l.add(a.id), o.add(a.name), (typeof a.cap != "number" || a.cap < 1 || !Number.isInteger(a.cap)) && t.push(`阶段 ${a.id} 的 cap 必须是正整数`), a.next !== null && typeof a.next != "string" && t.push(`阶段 ${a.id} 的 next 必须是阶段 id 或 null`), a.deadline !== void 0 && typeof a.deadline != "string" && t.push(`阶段 ${a.id} 的 deadline 必须是文本`);
  }), n.phases.forEach((a) => {
    a && typeof a.next == "string" && !l.has(a.next) && t.push(`阶段 ${a.id} 的 next 指向不存在的阶段：${a.next}`);
  }), n.phases.length && n.phases[0]?.byTag && t.push("第一个阶段不能是 byTag 阶段")) : t.push("phases 必须是数组");
  const A = /* @__PURE__ */ new Set();
  return Array.isArray(n.events) ? n.events.forEach((a, c) => {
    if (!a || typeof a.id != "string" || typeof a.text != "string") {
      t.push(`events[${c}] 缺少 id 或 text`);
      return;
    }
    A.has(a.id) && t.push(`事件 id 重复：${a.id}`), A.add(a.id), l.has(a.phase) || t.push(`事件 ${a.id} 的 phase 不存在：${a.phase}`), (!Number.isInteger(a.from) || !Number.isInteger(a.to) || a.from < 1 || a.to < a.from) && t.push(`事件 ${a.id} 的轮次区间无效`), a.kind !== "event" && a.kind !== "directive" && t.push(`事件 ${a.id} 的 kind 必须是 event 或 directive`), a.if !== void 0 && typeof a.if != "string" && t.push(`事件 ${a.id} 的 if 必须是文本`);
  }) : t.push("events 必须是数组"), Array.isArray(n.docs) ? n.docs.forEach((a, c) => {
    !a || typeof a.title != "string" ? t.push(`docs[${c}] 缺少 title`) : a.md !== void 0 && typeof a.md != "string" ? t.push(`docs[${c}].md 必须是文本`) : a.image !== void 0 && typeof a.image != "string" && t.push(`docs[${c}].image 必须是文本`);
  }) : t.push("docs 必须是数组"), t;
}
function yo(e) {
  return bo.includes(e.level ?? "") ? e.level : "D";
}
function wo(e, t = dn) {
  const n = yo(e), s = xo(e.limit, n, t), i = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, r = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / i)) : void 0;
  return {
    id: jn,
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
function ii(e) {
  const t = new Set(Ds.map((n) => n.id));
  return [...Ds, ...e.filter((n) => !t.has(n.id))];
}
const xu = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, bu = /<阶段切换>([\s\S]*?)<\/阶段切换>/, vu = /<副本结算>([\s\S]*?)<\/副本结算>/, _o = /<副本>([\s\S]*?)<\/副本>/, yu = /<角色登记>([\s\S]*?)<\/角色登记>/, wu = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/, _u = /<积分变动>([\s\S]*?)<\/积分变动>/g;
function ko(e) {
  const t = xu.exec(e ?? "");
  if (!t) return null;
  const n = { name: t[1] }, s = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), i = (l) => {
    const o = new RegExp(`${l}\\s*[：:]\\s*([^」』\\n]+)`).exec(s);
    return o ? o[1].trim() : void 0;
  }, r = i("等级");
  return r && (n.level = r.replace(/级$/, "").trim().toUpperCase()), n.goal = i("目标"), n.limit = i("时限"), n.players = i("人数"), n;
}
function ku(e) {
  const t = bu.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function zo(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const i = n.slice(0, s).trim(), r = n.slice(s + 1).trim();
    i && (t[i] = r);
  }
  return t;
}
function ri(e) {
  const t = vu.exec(e ?? "");
  if (!t) return null;
  const n = zo(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function $o(e) {
  const t = yu.exec(e ?? "");
  if (!t) return null;
  const n = zo(t[1]);
  return Object.keys(n).length ? n : null;
}
function _n(e) {
  return e.replace(/^[-*•·]\s*/, "").trim();
}
function So(e) {
  const t = _o.exec(e ?? "");
  if (!t) return null;
  const n = { tasks: [] };
  let s = null;
  for (const i of t[1].split(`
`)) {
    const r = i.trim();
    if (!r) continue;
    const l = /^(时限|进度条|任务|ps|PS|Ps)\s*[：:]\s*(.*)$/.exec(r);
    if (l) {
      const o = l[1].toLowerCase(), A = l[2].trim();
      o === "时限" ? (n.limit = A, s = null) : o === "进度条" ? (n.progressBar = A, s = null) : o === "任务" ? (_n(A) && n.tasks.push(_n(A)), s = "tasks") : (n.ps = A, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(r)) {
      s = null;
      continue;
    }
    s === "tasks" ? _n(r) && n.tasks.push(_n(r)) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${r}` : r);
  }
  return n;
}
function zu(e) {
  const t = wu.exec(e ?? "");
  return t ? t[2] : null;
}
function ks(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (n(i)) return i;
    s.add(i.id), i = i.next ? e.phases.find((r) => r.id === i.next) : void 0;
  }
  return null;
}
function $u(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((o) => o.id === t.id)) return null;
  const i = (o) => !!o.clock && !o.night;
  let r = null, l = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      r = ks(e, t, i), l = r?.cap ?? 0;
      break;
    case "晚饭":
      r = ks(e, t, i), r && (l = Math.ceil(r.cap * 0.75), r.id === t.id && l <= n && (l = r.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      r = ks(e, t, (o) => !!o.night), l = r?.cap ?? 0;
      break;
  }
  return !r || r.id === t.id && l <= n + 1 ? null : { phase: r.id, round: l, label: `${r.name}第${l}轮` };
}
const Su = /<状态栏>([\s\S]*?)<\/状态栏>/;
function Eu(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function zs(e, t) {
  const n = Eu(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const $s = /* @__PURE__ */ new Map();
function Cu(e, t) {
  const n = `${e}\0${t}`;
  if (!$s.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (i) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, i);
    }
    $s.set(n, s);
  }
  return $s.get(n);
}
function Mu(e, t) {
  const n = String(e ?? ""), s = (o, A) => o ? { signal: A, pack: o, info: { name: o.name, level: o.level } } : null, i = ko(n);
  if (i)
    return { signal: 1, pack: t.find((A) => A.detect.briefingName === i.name), info: i };
  const r = _o.exec(n);
  if (r) {
    const o = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(r[1]), A = o && s(zs(t, o[1]), 2);
    if (A) return A;
  }
  for (const o of n.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const A = s(zs(t, o[1]), 3);
    if (A) return A;
  }
  const l = Su.exec(n);
  if (l) {
    for (const o of l[1].split(`
`))
      if (o.includes("地点"))
        for (const A of o.matchAll(/副本《([^》]+)》/g)) {
          const a = s(zs(t, A[1]), 4);
          if (a) return a;
        }
  }
  for (const o of t)
    for (const A of o.detect.patterns ?? []) {
      const a = Cu(o.id, A);
      if (a && a.test(n)) return s(o, 5);
    }
  return null;
}
const Zi = 5, Iu = { id: "_open", name: "进行中", cap: 0, next: null };
function Ue(e) {
  return !e || e.is_user ? !1 : !(e.is_system && e.extra?.type);
}
function Tu(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function Eo(e, t, n) {
  const s = Tu(e) + Math.max(0, n - 1) * t, i = Math.floor(s / 60) % 24, r = (s % 60 + 60) % 60;
  return `${i % 12 === 0 ? 12 : i % 12}:${String(r).padStart(2, "0")}`;
}
function Ji(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return Eo(e.time.dayStart, e.time.minutesPerRound, n);
}
function Co(e) {
  return e.phases.length ? e.phases : [Iu];
}
function Sn(e, t) {
  return Co(e).find((n) => n.id === t);
}
function qi(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (i.id === n) return !0;
    s.add(i.id), i = Sn(e, i.next);
  }
  return !1;
}
function Qi(e, t, n, s) {
  const i = n + 1, r = e.events.filter((l) => l.phase === t.id);
  if (s) {
    const l = t.id === s.phase ? s.round : t.cap;
    if (l > i) {
      let o = r.map((a, c) => ({ e: a, i: c })).filter(({ e: a }) => a.from >= i && a.from <= l).sort((a, c) => a.e.from - c.e.from || a.i - c.i).map(({ e: a }) => a), A = l;
      return o.length > Zi && (A = o[Zi - 1].from, o = o.filter((a) => a.from <= A)), { phase: t, round: A, events: o, skipFrom: i };
    }
  }
  return { phase: t, round: i, events: r.filter((l) => l.from === i) };
}
function Pu(e, t, n) {
  const s = t.entryIndex;
  if (!Ue(e[s])) return null;
  const i = Co(n);
  let r = i[0], l = i[0], o = 0, A, a = !1, c, d, h = null, x, R, v;
  const _ = /* @__PURE__ */ new Set(), z = {}, I = /* @__PURE__ */ new Map();
  for (const ie of t.manual ?? [])
    I.has(ie.atIndex) || I.set(ie.atIndex, []), I.get(ie.atIndex).push(ie);
  const b = (ie) => {
    n.phases.length && (l = hu(n, l, ie)), r = ie, o = 0, h && !qi(n, r, h.phase) && (h = null);
  };
  for (let ie = s; ie < e.length; ie++) {
    const Vt = e[ie];
    if (!a && Ue(Vt)) {
      const ue = Qi(n, r, o, h);
      o = ue.round;
      const mt = new Set((Vt.extra?.rlzc?.skippedEvents ?? []).map((ye) => ye.id));
      ue.events.forEach((ye) => {
        mt.has(ye.id) || _.add(ye.id);
      }), z[ie] = {
        phase: r.id,
        round: o,
        events: ue.events.map((ye) => ye.id),
        skipFrom: ue.skipFrom,
        limit: _s(n, r, l, o, A)
      }, h && r.id === h.phase && o >= h.round && (h = null);
      const gt = String(Vt.mes ?? ""), xt = So(gt);
      xt && (R = xt), A = xt?.limit;
      const Pt = $o(gt);
      Pt && (v = Pt);
      const mn = ri(gt);
      if (mn)
        a = !0, c = "tag", d = ie, x = mn;
      else {
        const ye = ku(gt), bt = ye ? i.find((he) => he.name === ye) : void 0;
        if (bt && n.phases.length)
          b(bt);
        else if (r.cap > 0 && o >= r.cap && r.next) {
          const he = Sn(n, r.next);
          he && b(he);
        }
      }
    }
    for (const ue of I.get(ie) ?? []) {
      if (a) break;
      switch (ue.kind) {
        case "skip": {
          h = Sn(n, ue.targetPhase) && qi(n, r, ue.targetPhase) ? { phase: ue.targetPhase, round: ue.targetRound } : null;
          break;
        }
        case "setPhase": {
          const mt = Sn(n, ue.phase);
          mt && (h = null, b(mt));
          break;
        }
        case "setRound":
          o = Math.max(0, Math.floor(ue.round)), h = null;
          break;
        case "end":
          a = !0, c = "manual", d = ie;
          break;
      }
    }
  }
  const T = a ? null : Qi(n, r, o, h), L = T ? T.round : o + 1, E = r.cap > 0, G = n.events.filter((ie) => _.has(ie.id)).map((ie) => ie.id), xe = a ? void 0 : _s(n, r, l, L, A), Ge = a ? void 0 : _s(n, r, l, o);
  let pt;
  const ht = n.remaining;
  return !a && ht.type === "nights" && n.phases.length && !r.byTag && !r.frozen ? pt = ht.template.replace("{n}", String(go(n, r))) : !a && ht.type === "countdown" && xe?.minutes !== void 0 && (pt = ht.template.replace("{m}", String(xe.minutes))), {
    phase: r,
    round: o,
    nextRound: L,
    clock: a ? void 0 : Ji(n, r, L),
    currentClock: Ji(n, r, o),
    remainingText: pt,
    limit: xe,
    roundsLeft: Ge ? { x: Ge.x, y: Ge.y } : void 0,
    chainStart: n.phases.length ? l.id : void 0,
    ended: a,
    endedBy: c,
    endIndex: d,
    firedEvents: G,
    warn: !a && E && L >= r.cap - 2,
    isLastRound: !a && E && L === r.cap,
    overdue: !a && E && !r.next && L > r.cap,
    next: T,
    skipGoal: h,
    settlement: x,
    panel: R,
    rolesFromChat: v,
    perMessage: z,
    entryIndex: s
  };
}
const Mo = "rlzc_token", Io = "rlzc_progress", To = "rlzc_turn", Po = "rlzc_state", No = "rlzc_balance", Nu = [Mo, Io, To, Po, No], ss = { token: "", progress: "", turn: "", injected: [] };
function Ru(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ln(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const i = new RegExp(`(?<!\\{)\\{(${s.map(Ru).join("|")})\\}(?!\\})`, "g");
  return e.replace(i, (r, l) => n?.[l]?.trim() || l);
}
function Fu(e, t) {
  if (!t.length) return "";
  const n = e.events.map((A) => A.id), s = t.map((A) => n.indexOf(A)).filter((A) => A >= 0).sort((A, a) => A - a), i = [];
  let r = s[0], l = s[0];
  const o = () => i.push(r === l ? n[r] : `${n[r]}–${n[l]}`);
  for (let A = 1; A < s.length; A++) {
    if (s[A] === l + 1) {
      l = s[A];
      continue;
    }
    o(), r = l = s[A];
  }
  return o(), i.join("、");
}
function Xi(e, t, n, s = !1) {
  let i = Ln(e.text, t, n);
  return e.to > e.from && (i = `在本阶段第${e.from}到${e.to}轮之间发生：${i}`), e.if && !s && (i += `（条件：${Ln(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${i}`;
}
function Ou(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function ju(e, t, n, s = {}) {
  if (!t || !n || t.ended || n.status !== "active") return ss;
  const i = s.roles, r = e.phases.length > 0, l = t.next, o = [`副本：${e.name}（${e.level}级）`], A = t.limit;
  if (r)
    o.push(`阶段：${t.phase.name}`), o.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), A && o.push(`剩余${A.x}/${A.y}轮`), t.clock && o.push(`钟时：${t.clock}`), A?.text && o.push(`时限：${A.text}`), e.remaining.type === "countdown" && t.remainingText && o.push(t.remainingText), A?.deadline && !A.text?.includes(A.deadline) && o.push(`截止：${A.deadline}`);
  else {
    o.push(`本轮：第${t.nextRound}轮`), t.clock && o.push(`钟时：${t.clock}`);
    const b = s.panelLimit || s.briefing?.limit;
    b && o.push(`时限：${b}`);
  }
  const a = ["［副本进度·仅供AI］", o.join("　")];
  if (s.briefing?.goal && (!r || e.id === "generic") && a.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const b = e.roles.filter((T) => i?.[T]);
    a.push(
      b.length ? `角色登记：${e.roles.map((T) => `${T}=${i?.[T] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const c = Fu(e, t.firedEvents);
  c && a.push(`已发生事件：${c}`);
  const d = [];
  l.skipFrom !== void 0 && d.push(`玩家选择快进：本轮从「${t.phase.name}」第${l.skipFrom}轮快进到第${l.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const h = new Map((s.subNext ?? []).map((b) => [b.id, b])), x = l.events.filter((b) => b.if && h.get(b.id)?.ok === !1).map((b) => ({ id: b.id, reason: h.get(b.id).reason })), R = l.events.filter((b) => !x.some((T) => T.id === b.id)), v = (b) => !!b.if && h.get(b.id)?.ok === !0, _ = R.filter((b) => b.kind === "event"), z = R.filter((b) => b.kind === "directive");
  if (_.length && (d.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), _.forEach((b) => d.push(Xi(b, e, i, v(b))))), z.length && (d.push("本轮写作要求："), z.forEach((b) => d.push(Xi(b, e, i, v(b))))), t.isLastRound ? d.push(Ou(t)) : t.overdue && d.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && d.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && d.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((b) => i?.[b])) {
    let b = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((T) => `${T}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (b += "死者不得是{{user}}或其同伴。"), d.push(b);
  }
  let I;
  return A?.text && (A.minutes !== void 0 ? (d.push(
    `本轮<副本>的时限一栏写：${A.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), I = { text: A.text, minutes: A.minutes, total: A.total }) : (d.push(`本轮<副本>的时限一栏写：${A.text}（照抄）。`), I = { text: A.text })), {
    token: e.token,
    progress: a.join(`
`),
    turn: d.length ? ["［本轮指令·仅供AI］", ...d].join(`
`) : "",
    injected: R.map((b) => b.id),
    limit: I,
    skipped: x.length ? x : void 0,
    state: s.stateText || void 0
  };
}
const Lu = 1, Du = 0;
function le() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function Bu() {
  const e = le();
  return e.eventTypes ?? e.event_types ?? {};
}
function tt(e, t) {
  const n = Bu()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  le().eventSource.on(n, t);
}
function se() {
  return le().chat ?? [];
}
function is() {
  const e = le();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function Bt() {
  return le().chatMetadata ?? {};
}
function dt() {
  const e = le();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function Ft(e, t, n, s) {
  le().setExtensionPrompt(e, t, Lu, n, s, Du);
}
function Ce(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Me(e) {
  const t = le();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
async function er(e, t = "") {
  const n = le();
  if (n.callGenericPopup && n.POPUP_TYPE) {
    const s = document.createElement("div");
    s.textContent = e;
    const i = await n.callGenericPopup(s, n.POPUP_TYPE.INPUT, t, { okButton: "确定", cancelButton: "取消" });
    return typeof i == "string" ? i : null;
  }
  return window.prompt(e, t);
}
const Mt = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function Ro(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function Vu(e, t = Mt) {
  return t.length ? e.replace(Ro(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
function Fo(e, t = Mt, n = !1) {
  const s = se()[e];
  if (!s || s.is_user) return;
  const i = String(s.extra?.display_text ?? s.mes ?? "");
  if (!Ro(n ? Mt : t, "").test(i)) return;
  const r = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!r) return;
  const l = le().messageFormatting;
  if (typeof l != "function") return;
  const o = l(Vu(i, t), s.name ?? "", !!s.is_system, !1, e);
  r.innerHTML !== o && (r.innerHTML = o);
}
function Wu(e = Mt, t = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((n) => {
    const s = Number(n.getAttribute("mesid"));
    Number.isFinite(s) && Fo(s, e, t);
  });
}
const Uu = { key: "summary", label: "概况", hint: "本副本目前的整体情况，不超过150字" };
function Oo(e) {
  return e.stateFields?.length ? e.stateFields : [Uu];
}
const Gu = [...Mt, "状态栏"], Yu = new RegExp(`<(${Gu.join("|")})>[\\s\\S]*?<\\/\\1>`, "g");
function Hu(e) {
  return String(e ?? "").replace(Yu, "").replace(/\n{3,}/g, `

`).trim();
}
function Ku(e) {
  const n = [
    "你是角色扮演副本的记录员，不写剧情，只整理事实。",
    "根据本轮正文完成三件事：",
    "1. 事件核对：逐条判断「本轮后台事件」在正文里是 done（已发生）、missed（该发生但没写出来）还是 void（条件已不成立，不该发生），各附一句理由。后台事件即使{{user}}看不到，只要正文与之不矛盾、且没有写出相反的事实，就算 done。标明「第X到Y轮之间」的事件不一定在本轮写出：本轮没写到、也没写出相反的事实，同样算 done。",
    "2. 隐藏状态：在「上一轮状态」的基础上更新下列字段，只依据正文里已经发生的事实，没有变化就照抄上一轮：",
    ...Oo(e.pack).map((o) => `   - ${o.key}（${o.label}）：${o.hint}`),
    "3. 条件预判：逐条判断「下一轮事件」的条件现在是否仍成立（ok 为 true/false），附一句理由。",
    "只输出一个 JSON 对象，不要任何解释，格式：",
    '{"events":[{"id":"E11","status":"done|missed|void","reason":"…"}],"state":{…},"next":[{"id":"E12","ok":true,"reason":"…"}]}',
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
${Hu(e.text)}`
  ].join(`

`);
  return { system: n, user: l };
}
function Zu(e, t) {
  const n = new Set(t);
  return e.events.filter((s) => n.has(s.id) && s.kind !== "directive");
}
class Jt extends Error {
}
function Ju(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("{"), i = t.lastIndexOf("}");
  if (s < 0 || i <= s) throw new Jt("返回里没有 JSON");
  let r;
  try {
    r = JSON.parse(t.slice(s, i + 1));
  } catch {
    throw new Jt("返回的 JSON 无法解析");
  }
  if (!r || typeof r != "object" || Array.isArray(r)) throw new Jt("返回的不是 JSON 对象");
  if (!r.state || typeof r.state != "object" || Array.isArray(r.state)) throw new Jt("缺少 state");
  const l = ["done", "missed", "void"], o = (Array.isArray(r.events) ? r.events : []).filter((a) => a && typeof a.id == "string" && l.includes(a.status)).map((a) => ({ id: a.id, status: a.status, reason: String(a.reason ?? "") })), A = (Array.isArray(r.next) ? r.next : []).filter((a) => a && typeof a.id == "string" && typeof a.ok == "boolean").map((a) => ({ id: a.id, ok: a.ok, reason: String(a.reason ?? "") }));
  return { events: o, state: r.state, next: A };
}
function qu(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = t * 31 + e.charCodeAt(n) | 0;
  return `${e.length}.${t}`;
}
function Qu(e, t, n) {
  const s = [n?.send_date, n?.gen_started, n?.gen_finished].map((i) => String(i ?? "")).join("|");
  return `${e}:${t}:${s}:${qu(String(n?.mes ?? ""))}`;
}
function Xu(e) {
  return !(!e.enabled || !e.active || e.type === "continue" || e.type === "first_message" || e.saveMode && !e.hasEvents && !e.hasNextConditional);
}
async function ed(e, t, n = 2) {
  let s;
  for (let i = 0; i <= n; i++)
    try {
      return Ju(await e(t));
    } catch (r) {
      s = r;
    }
  throw s;
}
class jo extends Error {
}
function Lo(e) {
  if (e instanceof jo) return "超时";
  if (e instanceof Jt) return "返回格式不对";
  const t = `${e?.message ?? ""} ${e?.cause?.message ?? ""} ${String(e?.status ?? "")}`.toLowerCase();
  return /abort|timeout|timed out|超时/.test(t) ? "超时" : /quota|insufficient|balance|429|too many|额度|余额/.test(t) ? "额度不足" : /401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(t) ? "密钥无效" : "其他";
}
function Do(e) {
  return e?.extra?.rlzc;
}
function rs(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!Ue(s)) continue;
    const i = Do(s)?.sub;
    if (i?.state && !i.skipped) return { index: n, state: i.state };
  }
  return null;
}
function td(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!Ue(s)) continue;
    const i = Do(s)?.sub;
    return i && !i.skipped && Array.isArray(i.next) ? i.next : void 0;
  }
}
function Dn(e) {
  return Array.isArray(e) ? e.length ? e.map((t) => Dn(t)).join("、") : "无" : e && typeof e == "object" ? Object.entries(e).map(([t, n]) => `${t}：${Dn(n)}`).join("；") : e == null || e === "" ? "未知" : String(e);
}
function Bo(e, t) {
  const n = Oo(e), s = new Set(n.map((r) => r.key)), i = n.filter((r) => t[r.key] !== void 0).map((r) => `${r.label}：${Dn(t[r.key])}`);
  for (const [r, l] of Object.entries(t)) s.has(r) || i.push(`${r}：${Dn(l)}`);
  return i.length ? ["［副本状态·仅供AI］", ...i].join(`
`) : "";
}
const nd = 1500;
function Vo() {
  return le().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function Wo(e) {
  const t = { chat_completion_source: "custom", custom_url: e.url.trim().replace(/\/+$/, "") };
  return e.key.trim() && (t.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${e.key.trim()}` })), t;
}
async function Uo(e, t) {
  const n = new AbortController();
  let s;
  const i = new Promise((r, l) => {
    s = setTimeout(() => {
      n.abort(), l(new jo(`超过 ${Math.round(e / 1e3)} 秒没有返回`));
    }, e);
  });
  try {
    return await Promise.race([t(n.signal), i]);
  } finally {
    clearTimeout(s);
  }
}
function Go(e, t) {
  const n = t?.error?.message ?? t?.message ?? (typeof t == "string" ? t : "") ?? "", s = new Error(`${e || ""} ${n}${t?.quota_error ? " insufficient_quota" : ""}`.trim());
  return s.status = e, s;
}
async function Yo(e, t, n, s = nd) {
  const i = await fetch("/api/backends/chat-completions/generate", {
    method: "POST",
    headers: Vo(),
    signal: n,
    body: JSON.stringify({
      ...Wo(e),
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
  let l;
  try {
    l = JSON.parse(r);
  } catch {
    l = r;
  }
  if (!i.ok || l?.error) throw Go(i.status === 200 ? 0 : i.status, l);
  const o = l?.choices?.[0]?.message?.content ?? l?.choices?.[0]?.text ?? l?.content;
  if (typeof o != "string") throw new Error("返回里没有正文");
  return o;
}
async function sd(e) {
  const t = le();
  if (typeof t.generateRaw != "function") throw new Error("当前酒馆版本没有 generateRaw");
  return String(await t.generateRaw({ prompt: e.user, systemPrompt: e.system }));
}
function id(e, t) {
  return Uo(e.timeoutMs, (n) => {
    if (e.source === "main") return sd(t);
    if (!e.preset) throw new Error("没有选择接口预设");
    return Yo(e.preset, t, n);
  });
}
async function Ho(e) {
  const t = await fetch("/api/backends/chat-completions/status", {
    method: "POST",
    headers: Vo(),
    body: JSON.stringify(Wo(e))
  }), n = await t.json().catch(() => null);
  if (!t.ok || n?.error) throw Go(t.status, n);
  return (Array.isArray(n) ? n : Array.isArray(n?.data) ? n.data : Array.isArray(n?.models) ? n.models : []).map((i) => typeof i == "string" ? i : i?.id ?? i?.name).filter(Boolean).sort();
}
async function rd(e, t) {
  const n = await Ho(e).catch(() => []), s = { ...e, model: e.model || n[0] || "" }, i = await Uo(
    t,
    (r) => Yo(s, { system: "只回复 OK。", user: "ping" }, r, 5)
  );
  return { models: n, reply: i };
}
const Ko = "rlzc_ledger", Zo = {
  D: 300,
  C: 1e3,
  B: 3e3,
  A: 1e4,
  S: 3e4
}, tr = {
  D: 500,
  C: 1500,
  B: 5e3,
  A: 15e3,
  S: 5e4
}, od = {
  S: 1.5,
  A: 1.2,
  B: 1,
  C: 0.8,
  D: 0.6
}, ld = {
  越级: 0.6,
  抽查: 0.5
};
function Ad(e) {
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
function Jo(e) {
  let t;
  e instanceof Date ? t = e : typeof e == "number" ? t = new Date(e) : typeof e == "string" ? t = new Date(e) : t = /* @__PURE__ */ new Date(), isNaN(t.getTime()) && (t = /* @__PURE__ */ new Date());
  const n = t.getMonth() + 1, s = t.getDate(), i = String(t.getHours()).padStart(2, "0"), r = String(t.getMinutes()).padStart(2, "0");
  return `${n}/${s} ${i}:${r}`;
}
function ad(e) {
  const t = /积分[：:]\s*([+-]?\d+)/.exec(e);
  if (!t) return null;
  const n = parseInt(t[1], 10);
  return Number.isFinite(n) ? n : null;
}
function cd(e, t) {
  const n = t.结果 ?? "", s = (t.评价 ?? "").toUpperCase();
  if (n === "失败" || n === "阵亡")
    return -Math.round(tr[e] * 0.3);
  if (n !== "通关" && n !== "成功" && n !== "胜利")
    return 0;
  let i = tr[e];
  i = Math.round(i * (od[s] ?? 1));
  for (const [r, l] of Object.entries(ld))
    (t[r] === "是" || t[r] === "true" || t[r] === "1") && (i = Math.round(i * l));
  return i;
}
function qo(e, t) {
  return t.reduce((n, s) => n + s.delta, e);
}
function Qo(e, t, n) {
  let s = e, i = !1;
  for (const r of t)
    s += r.delta, s < n && (i = !0), r.type === "settle" && r.delta > 0 && (i = !1);
  return i;
}
function ud(e) {
  const t = e.delta >= 0 ? "+" : "", n = e.source ? ` ${e.source}` : "";
  return `${e.at} ${t}${e.delta}${n}`;
}
function dd(e, t) {
  const n = [`当前积分：${e}`];
  return t && n.push("待清算：是（余额曾低于斩杀线，需通关结算后清除）"), `［积分余额·仅供AI］
${n.join(`
`)}`;
}
const ot = "rlzc";
function fd() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function pd(e, t, n) {
  return {
    id: fd(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function hd(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function md(e, t) {
  return e.packId === jn ? e.briefing ? wo(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function gd(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id)
    return Ue(e[t.entryIndex]) ? t.entryIndex : -1;
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function xd(e, t) {
  const n = gd(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((i) => ({ ...i, atIndex: i.atIndex + s }))), t.manual = t.manual.filter((i) => i.atIndex < e.length && i.atIndex >= t.entryIndex), !0;
}
function Xo(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const nr = "rlzc_declined";
function oi(e, t) {
  return `${e}:${t}`;
}
const el = Ue;
function os(e, t, n) {
  if (!el(e[t])) return null;
  const s = Mu(String(e[t].mes ?? ""), n);
  return s ? { ...s, index: t } : null;
}
function bd(e, t, n, s, i = []) {
  for (let r = Math.max(0, n); r <= Math.min(s, e.length - 1); r++) {
    const l = os(e, r, t);
    if (l && !i.includes(oi(r, l.info.name))) return l;
  }
  return null;
}
function vd(e, t, n = [], s = Ds, i = 0) {
  if (t?.status === "active") return null;
  let r = -1;
  for (let o = Math.max(0, i); o < e.length; o++) if (el(e[o])) {
    r = o;
    break;
  }
  if (r < 0 || t && t.entryIndex === r) return null;
  const l = os(e, r, s);
  return !l || n.includes(oi(r, l.info.name)) ? null : l;
}
const yd = /[■█▰●◆★▮▓]/g, wd = /[□░▱○◇☆▯▒]/g;
function _d(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const r = Number(n[2]);
    return r === 100 ? Number(n[1]) : r > 0 ? Math.round(Number(n[1]) / r * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(yd) ?? []).length, i = (t.match(wd) ?? []).length;
  return s + i > 0 ? Math.round(s / (s + i) * 100) : null;
}
function sr(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function kd(e, t) {
  return sr(e).includes(sr(t));
}
function zd(e, t, n) {
  const s = [], i = Object.keys(n.perMessage).map(Number).sort((A, a) => A - a);
  let r = !1, l = null, o = !1;
  for (const A of i) {
    const a = n.perMessage[A], d = t.phases.find((b) => b.id === a.phase)?.name ?? "进行中", h = (b, T) => s.push({ index: A, phase: d, round: a.round, kind: b, text: T }), x = e[A]?.extra?.rlzc;
    for (const b of x?.sub?.events ?? []) b.status === "missed" && h("eventMissed", `${b.id} 未写出来：${b.reason}`);
    for (const b of x?.skippedEvents ?? []) h("eventSkipped", `${b.id} 条件不成立，已跳过：${b.reason}`);
    const R = So(String(e[A]?.mes ?? "")), v = A === n.entryIndex;
    if (!R) {
      v || h("missing", "本轮回复缺少 <副本> 面板"), o = !v;
      continue;
    }
    o = !1;
    const _ = _d(R.progressBar);
    R.progressBar === void 0 ? h("progressUnreadable", "<副本> 中没有进度条一栏") : _ === null ? h("progressUnreadable", `进度条无法读出数值：「${R.progressBar}」`) : (!r && _ !== 0 && h("progressStart", `入场后第一轮的进度条应为0，实际为 ${_}`), (_ < 0 || _ > 100) && h("progressRange", `进度条数值 ${_} 超出 0–100`), l !== null && _ < l && h("progressDrop", `进度条比上一轮低：${l} → ${_}`), l = _), r = !0;
    const z = e[A]?.extra?.rlzc?.limit, I = z?.text ? z : a.limit?.text ? { text: a.limit.text, minutes: a.limit.minutes, total: a.limit.total } : void 0;
    if (I) {
      const b = R.limit;
      if (I.minutes !== void 0) {
        const T = mo(b);
        !b || T.remaining === null || T.total === null ? h("limit", `时限读不到「剩余时间/总时长」：写的是「${b ?? "（没有时限一栏）"}」，注入的是「${I.text}」`) : (T.remaining > I.minutes && h("limit", `剩余时间比注入值多：写的是${Ot(T.remaining)}，注入的是${Ot(I.minutes)}`), I.total !== void 0 && T.total !== I.total && h("limit", `总时长与注入值不一致：写的是${Ot(T.total)}，注入的是${Ot(I.total)}`));
      } else (!b || !kd(b, I.text)) && h("limit", `时限与注入文字不一致：写的是「${b ?? "（没有时限一栏）"}」，注入的是「${I.text}」`);
    }
  }
  return { warnings: s, missingLast: o, hasPanel: r };
}
const Bs = "rlzc", tl = {
  source: "off",
  presets: [],
  presetId: "",
  saveMode: !1,
  wait: !0,
  timeoutSec: 60
}, En = {
  depths: { token: 4, progress: 4, turn: 0 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel",
  genericCaps: { ...dn },
  subApi: structuredClone(tl)
}, m = /* @__PURE__ */ Jn({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
  /** 副API正在整理 */
  subBusy: !1,
  /** 系统页的一行小字：副本记录：已更新（第N轮）/ 第N轮状态未更新 */
  subLine: "",
  settings: structuredClone(En),
  packs: [],
  lastInjection: ss,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0,
  /** 积分账本流水（重放自聊天快照，CLAUDE.md 第三期） */
  ledger: []
});
function hn(e) {
  return JSON.parse(JSON.stringify(e));
}
function nl(...e) {
  m.settings.debug && console.log("[rlzc]", ...e);
}
function $d() {
  const e = le().extensionSettings, t = e[Bs] ?? {}, n = {
    ...structuredClone(En),
    ...t,
    depths: { ...En.depths, ...t.depths ?? {} },
    ball: { ...En.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => vo(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    genericCaps: { ...dn, ...t.genericCaps ?? {} },
    subApi: {
      ...structuredClone(tl),
      ...t.subApi ?? {},
      presets: Array.isArray(t.subApi?.presets) ? t.subApi.presets : [],
      // 旧版本里的「酒馆连接配置」来源已删除，按关闭处理
      source: ["off", "main", "preset"].includes(t.subApi?.source) ? t.subApi.source : "off"
    }
  };
  e[Bs] = n, m.settings = n, m.packs = ii(n.customPacks);
}
function Ee() {
  le().extensionSettings[Bs] = /* @__PURE__ */ H(m.settings), le().saveSettingsDebounced(), m.packs = ii(m.settings.customPacks);
}
function Sd(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = vo(t);
  if (n.length) return n;
  const s = t;
  return ii([]).some((i) => i.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (m.settings.customPacks = [...m.settings.customPacks.filter((i) => i.id !== s.id), s], Ee(), []);
}
function Ed(e) {
  m.settings.customPacks = m.settings.customPacks.filter((t) => t.id !== e), Ee();
}
function Cd() {
  const e = Bt()[Ko];
  return !e || Array.isArray(e) ? {} : e;
}
function Md(e) {
  Bt()[Ko] = e, dt();
}
function li(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    if (s.is_user || s.is_system) continue;
    const i = s.extra?.rlzc?.ledger;
    if (Array.isArray(i))
      for (const r of i) t.push({ ...r, mesIndex: n });
  }
  return t;
}
function sl(e) {
  const t = Cd();
  if (t.init != null) return { value: t.init.value, source: t.init.source };
  const n = /<状态栏>([\s\S]*?)<\/状态栏>/;
  for (let s = e.length - 1; s >= 0; s--) {
    const i = e[s];
    if (i.is_user || !i.mes) continue;
    const r = n.exec(i.mes);
    if (!r) continue;
    const l = ad(r[1]);
    if (l !== null) {
      const o = Jo(i.send_date ?? i.gen_finished ?? void 0);
      return Md({ ...t, init: { value: l, source: "状态栏读取", at: o } }), { value: l, source: "状态栏读取" };
    }
  }
  return { value: 1e3, source: "默认值" };
}
function Id(e) {
  const n = se()[e];
  if (!n || n.is_user) return;
  const s = n.mes ?? "", i = Jo(n.send_date ?? n.gen_finished ?? void 0), r = [], l = new RegExp(_u.source, "g");
  let o;
  for (; (o = l.exec(s)) !== null; ) {
    const a = Ad(o[1]);
    a && r.push({ delta: a.delta, source: a.source, type: "tag", at: i });
  }
  const A = ri(s);
  if (A && m.pack) {
    const a = {
      结果: A.result ?? "",
      评价: A.rating ?? "",
      ...A.fields
    }, c = cd(m.pack.level, a);
    if (c !== 0) {
      const d = A.rating ? `·${A.rating}` : "";
      r.push({ delta: c, source: `副本结算·${A.result ?? ""}${d}`, type: "settle", at: i });
    }
  }
  if (r.length || n.extra?.rlzc?.ledger?.length) {
    n.extra = n.extra ?? {};
    const a = n.extra.rlzc ?? { phase: "", round: 0, injected: [] };
    n.extra.rlzc = hn({ ...a, ledger: r.length ? r : void 0 }), dt();
  }
  m.ledger = li(se());
}
function Td(e) {
  const n = se()[e];
  n?.extra?.rlzc && (n.extra.rlzc = hn({ ...n.extra.rlzc, ledger: void 0 }), dt(), m.ledger = li(se()));
}
function ft() {
  return hd(Bt()[ot]);
}
function ls() {
  const e = Bt(), t = Array.isArray(e[ot]?.declined) ? e[ot].declined : [], n = Array.isArray(e[nr]) ? e[nr] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function Pd(e) {
  const t = Bt(), n = [...ls().filter((s) => s !== e), e];
  t[ot] = { ...t[ot] ?? {}, declined: n }, dt();
}
function It(e) {
  const t = Bt(), n = ls(), s = n.length ? { declined: n } : {};
  e ? t[ot] = { ...JSON.parse(JSON.stringify(e)), ...s } : n.length ? t[ot] = s : delete t[ot], dt();
}
function Ai(e) {
  const t = ft();
  t && (e(t), It(t), Xe());
}
function il(e) {
  const t = se();
  return (e === "swipe" || e === "continue") && Ue(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function Bn(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = md(t, m.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = Pu(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? zd(e, n, s) : null };
}
function Xe() {
  const e = se();
  let t = ft();
  if (t) {
    const s = JSON.stringify(t);
    if (!xd(e, t))
      It(null), Ce("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const i = Bn(e, t);
      i.progress && (t.status = i.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && It(t);
    }
  }
  const n = Bn(e, t);
  m.session = n.session, m.pack = n.pack, m.progress = n.progress, m.audit = n.audit, m.subLine = al(e, n.progress), m.tick++;
}
function rl() {
  if (m.session)
    return Xo(m.session, m.progress?.rolesFromChat);
}
function Vn() {
  for (const e of Nu) Ft(e, "", 0, !1);
}
let sn = -1;
function Nd(e) {
  const t = il(e), n = ft(), { pack: s, progress: i, audit: r } = Bn(t, n), l = n ? Xo(n, i?.rolesFromChat) : void 0, o = ci() && !!i, A = o ? rs(t, i.entryIndex) : null, a = s ? ju(s, i, n, {
    roles: l,
    briefing: n?.briefing,
    panelLimit: i?.panel?.limit,
    audit: r ?? void 0,
    subNext: o ? td(t, i.entryIndex) : void 0,
    stateText: A ? Bo(s, A.state) : void 0
  }) : ss;
  Vn();
  const c = m.settings.depths;
  if (a.token && Ft(Mo, a.token, c.token, !0), a.progress && Ft(Io, a.progress, c.progress, !1), a.turn && Ft(To, a.turn, c.turn, !1), a.state && Ft(Po, a.state, c.progress, !1), s && n?.status === "active") {
    const d = sl(t), h = qo(d.value, m.ledger), x = s.level, R = Qo(d.value, m.ledger, Zo[x]);
    Ft(No, dd(h, R), c.progress, !1);
  }
  m.lastInjection = a, sn = t.length, nl("注入", e, a);
}
const Vs = /* @__PURE__ */ new Set();
async function Rd() {
  const e = se(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = zu(n.mes);
  if (!s) return;
  const i = ft();
  if (!i || i.status !== "active" || i.manual.some((a) => a.kind === "skip" && a.atIndex === t)) return;
  const r = `${is()}:${t}:${n.mes}`;
  if (Vs.has(r)) return;
  Vs.add(r);
  const { pack: l, progress: o } = Bn(e, i);
  if (!l || !o || o.ended) return;
  const A = $u(l, o.phase, o.round, s);
  A && await Me(`是否跳到${s}？（${A.label}）`) && (i.manual.push({ kind: "skip", atIndex: t, targetPhase: A.phase, targetRound: A.round }), It(i));
}
async function Fd(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      Vn();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await Rd(), await Kd(s), Nd(s);
  } catch (i) {
    console.error("[rlzc] 拦截器出错", i), Vn();
  }
}
const Ws = /* @__PURE__ */ new Set();
function ai() {
  const e = ft();
  if (!e || e.status !== "ended") return 0;
  const t = m.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
async function ol(e) {
  const { index: t, info: n } = e, s = `${is()}:${t}:${n.name}`;
  if (Ws.has(s)) return;
  Ws.add(s);
  const i = e.pack ? `检测到进入《${e.pack.name}》，是否启用？` : `检测到进入《${n.name}》，是否启用？（未收录的副本，将使用通用副本包）`;
  if (!await Me(i)) {
    Pd(oi(t, n.name));
    return;
  }
  const r = os(se(), t, m.packs);
  if (!r || r.info.name !== n.name) {
    Ce("warning", "入场消息已变化，未启用。");
    return;
  }
  const l = { ...n };
  e.pack || (l.rounds = xo(n.limit, yo(n), m.settings.genericCaps).rounds), Al(e.pack ?? wo(l, m.settings.genericCaps), t, l);
}
function ll() {
  const e = vd(se(), ft(), ls(), m.packs, ai());
  e && ol(e);
}
function Od(e) {
  Xe();
  const t = se(), n = ai();
  let s = -1;
  for (let i = n; i < t.length; i++) if (Ue(t[i])) {
    s = i;
    break;
  }
  e === s && ll();
}
function Al(e, t, n) {
  const i = se()[t], r = pd(e, t, n);
  i.extra = i.extra ?? {}, i.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: r.id }, It(r), Xe(), m.progress && (i.extra.rlzc.injected = hn(m.progress.perMessage[t]?.events ?? [])), dt(), Ce("success", `已进入副本《${e.name}》。`);
}
async function jd(e) {
  const t = m.packs.find((r) => r.id === e);
  if (!t) return;
  const n = se();
  let s = n.length - 1;
  for (; s >= 0 && !Ue(n[s]); ) s--;
  if (s < 0) {
    Ce("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  ft()?.status === "active" && !await Me("当前已有进行中的副本，确定要替换吗？") || await Me(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`) && Al(t, s, ko(n[s].mes) ?? { name: t.name });
}
function As(e) {
  Ai((t) => t.manual.push(e));
}
function as() {
  return se().length - 1;
}
async function ir() {
  const e = m.progress;
  if (!(!e || e.ended || !m.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      Ce("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Me(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (As({ kind: "skip", atIndex: as(), targetPhase: e.phase.id, targetRound: e.phase.cap }), Ce("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function rr() {
  !m.session || m.progress?.ended || await Me("确定要手动结束当前副本吗？") && As({ kind: "end", atIndex: as() });
}
function Ld(e) {
  As({ kind: "setPhase", atIndex: as(), phase: e });
}
function Dd(e) {
  As({ kind: "setRound", atIndex: as(), round: e });
}
function Bd(e) {
  Ai((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function Vd(e) {
  Ai((t) => t.manual.splice(e, 1));
}
async function or() {
  m.session && await Me("确定要删除当前副本会话吗？（不会改动聊天记录）") && (It(null), Xe());
}
function ci() {
  return m.settings.subApi.source !== "off";
}
function Wd() {
  const e = m.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function Ud(e) {
  return e.source === "main" ? "跟随主API" : `自设API「${e.preset?.name}」`;
}
function al(e, t) {
  if (!ci() || !t || t.ended) return "";
  if (m.subBusy) return "副本记录：整理中…";
  const n = Object.keys(t.perMessage).map(Number);
  if (!n.length) return "";
  const s = Math.max(...n);
  if (e[s]?.extra?.rlzc?.sub?.skipped) return `第${t.perMessage[s].round}轮状态未更新`;
  const i = rs(e, t.entryIndex);
  return i && t.perMessage[i.index] ? `副本记录：已更新（第${t.perMessage[i.index].round}轮）` : "副本记录：尚未整理";
}
let Cn = null;
const ui = /* @__PURE__ */ new Set();
function di(e) {
  return Qu(is(), e, se()[e]);
}
function lr(e) {
  m.subBusy = e, m.subLine = al(se(), m.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && m.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：正在检测本轮的副本事件", n.style.cssText = "align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;", s.prepend(n));
  } else n?.remove();
}
function cl(e, t, n) {
  if (di(e) !== t) return;
  const s = se()[e];
  s?.extra?.rlzc && (s.extra.rlzc = hn({ ...s.extra.rlzc, sub: n }), dt(), Xe());
}
function Gd(e, t) {
  const n = se(), s = m.progress, i = m.pack, r = n[e], l = s?.perMessage[e];
  if (!i || !s || !l || !r) return;
  const o = rl(), A = (b) => ({ ...b, text: Ln(b.text, i, o), if: b.if ? Ln(b.if, i, o) : void 0 }), a = Zu(i, r.extra?.rlzc?.injected ?? []).map(A), c = (s.next?.events ?? []).filter((b) => b.if).map(A);
  if (!Xu({
    enabled: ci(),
    active: !s.ended && m.session?.status === "active",
    type: t,
    saveMode: m.settings.subApi.saveMode,
    hasEvents: a.length > 0,
    hasNextConditional: c.length > 0
  })) return;
  const h = di(e);
  if (ui.has(h)) return;
  const x = i.phases.find((b) => b.id === l.phase), R = rs(n.slice(0, e), s.entryIndex), v = Ku({
    pack: i,
    phaseName: x?.name ?? l.phase,
    round: l.round,
    prevState: R?.state ?? null,
    events: a,
    nextConditional: c,
    text: String(r.mes ?? "")
  }), _ = le().substituteParams, z = _ ? { system: _(v.system), user: _(v.user) } : v, I = Yd(e, h, l.round, z);
  Cn = { key: h, index: e, promise: I }, I.finally(() => {
    Cn?.key === h && (Cn = null);
  });
}
async function Yd(e, t, n, s) {
  lr(!0);
  try {
    let i = 2;
    for (; ; ) {
      const r = Wd();
      if (!r) throw new Error("副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设");
      const l = Date.now();
      try {
        const o = await ed((A) => id(r, A), s, i);
        cl(e, t, { ...o, ms: Date.now() - l, via: Ud(r), at: (/* @__PURE__ */ new Date()).toISOString() }), ui.add(t);
        return;
      } catch (o) {
        if (di(e) !== t) return;
        const A = Lo(o), a = String(o?.message ?? o).slice(0, 200);
        if (nl("副本事件检测失败", A, o), !m.settings.subApi.wait) {
          Ce("warning", `第${n}轮事件检测失败（${A}），已沿用上一轮状态。`), Ss(e, t, A);
          return;
        }
        if (await Hd(n, A, a) === "skip") {
          Ss(e, t, A);
          return;
        }
        i = 0;
      }
    }
  } catch (i) {
    Ce("error", String(i?.message ?? i)), Ss(e, t, "其他");
  } finally {
    lr(!1);
  }
}
function Ss(e, t, n) {
  ui.add(t), cl(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function Hd(e, t, n) {
  const s = le();
  if (!s.Popup || !s.POPUP_TYPE)
    return window.confirm(`第${e}轮事件检测失败（${t}）。重试吗？取消则这轮先跳过。`) ? "retry" : "skip";
  const i = m.settings.subApi, r = document.createElement("div"), l = document.createElement("h3");
  l.textContent = `第${e}轮事件检测失败`;
  const o = document.createElement("p");
  o.textContent = `原因：${t}`;
  const A = document.createElement("small");
  A.textContent = n, A.style.opacity = "0.7";
  const a = document.createElement("div");
  a.style.cssText = "display:none;margin-top:10px;";
  const c = document.createElement("label");
  c.textContent = "换成：";
  const d = document.createElement("select");
  d.className = "text_pole";
  const h = [{ value: "", text: "请选择…" }];
  for (const v of i.presets) i.source === "preset" && v.id === i.presetId || h.push({ value: `preset:${v.id}`, text: `自设API：${v.name}` });
  i.source !== "main" && h.push({ value: "main", text: "跟随主API" });
  for (const v of h) {
    const _ = document.createElement("option");
    _.value = v.value, _.textContent = v.text, d.append(_);
  }
  c.append(d), a.append(c), r.append(l, o, A, a);
  let x;
  d.addEventListener("change", () => {
    const v = d.value;
    v && (v === "main" ? i.source = "main" : (i.source = "preset", i.presetId = v.slice(7)), Ee(), x.complete(s.POPUP_RESULT.CUSTOM1));
  }), x = new s.Popup(r, s.POPUP_TYPE.TEXT, "", {
    okButton: "重试",
    cancelButton: "这轮先跳过",
    customButtons: [
      {
        text: "换一个接口",
        action: () => {
          a.style.display = "", d.focus();
        }
      }
    ]
  });
  const R = await x.show();
  return R === s.POPUP_RESULT.AFFIRMATIVE || R === s.POPUP_RESULT.CUSTOM1 ? "retry" : "skip";
}
async function Kd(e) {
  const t = Cn;
  if (!(!t || !m.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= il(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function Zd(e, t) {
  const n = se(), s = n[e];
  if (!Ue(s)) return;
  const i = ft();
  if (!i || i.status === "ended") {
    if (os(n, e, m.packs)) {
      const A = bd(n, m.packs, ai(), e, ls());
      A && ol(A);
    }
    return;
  }
  if (t === "first_message") return;
  const r = $o(s.mes);
  r && (i.roles = { ...i.roles ?? {}, ...r }), It(i), Xe();
  const l = m.progress?.perMessage[e];
  if (l && m.pack) {
    const A = m.pack.phases.find((x) => x.id === l.phase), a = {
      phase: A?.name ?? l.phase,
      round: l.round,
      injected: sn === e ? m.lastInjection.injected : l.events
    }, c = m.pack.time;
    c.type === "clock" && A?.clock && !A.night && !A.frozen && (a.clock = Eo(c.dayStart, c.minutesPerRound, l.round));
    const d = sn === e ? m.lastInjection.limit : l.limit?.text ? { text: l.limit.text, minutes: l.limit.minutes, total: l.limit.total } : void 0;
    d && (a.limit = d);
    const h = s.extra?.rlzc?.entry;
    h && (a.entry = h), sn === e && m.lastInjection.skipped?.length && (a.skippedEvents = m.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (a.sub = s.extra.rlzc.sub), s.extra = s.extra ?? {}, s.extra.rlzc = hn(a), dt(), Xe(), Gd(e, t);
  }
  const o = ri(s.mes);
  o && Ce("info", `副本结算：${o.result ?? "—"}${o.rating ? `，评价 ${o.rating}` : ""}`), Id(e);
}
function Ar() {
  Vs.clear(), Ws.clear(), sn = -1, m.chatId = is(), m.debugUnlocked = !1, m.lastInjection = ss, Vn(), m.ledger = li(se()), Xe(), ll(), setTimeout(() => fi(), 50);
}
function Es() {
  Xe();
}
function ul() {
  return m.settings.panelDisplay === "statusbar" ? Mt.filter((e) => e !== "副本") : Mt;
}
function Cs(e) {
  Fo(e, ul());
}
function fi(e = !1) {
  Wu(ul(), e);
}
function Jd(e) {
  m.settings.panelDisplay !== e && (m.settings.panelDisplay = e, Ee(), fi(!0));
}
const qd = { class: "rlzc-ball-mark" }, Ms = 44, Qd = /* @__PURE__ */ et({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ we({ x: 0, y: 0 });
    let n = null;
    function s(c, d) {
      const h = window.innerWidth - Ms - 4, x = window.innerHeight - Ms - 4;
      return { x: Math.min(Math.max(4, c), h), y: Math.min(Math.max(4, d), x) };
    }
    function i() {
      const c = m.settings.ball;
      t.value = s(c.x ?? window.innerWidth - Ms - 12, c.y ?? Math.round(window.innerHeight * 0.35));
    }
    function r(c) {
      c.currentTarget.setPointerCapture(c.pointerId), n = { id: c.pointerId, dx: c.clientX - t.value.x, dy: c.clientY - t.value.y, moved: !1, sx: c.clientX, sy: c.clientY };
    }
    function l(c) {
      !n || n.id !== c.pointerId || (Math.abs(c.clientX - n.sx) + Math.abs(c.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = s(c.clientX - n.dx, c.clientY - n.dy)));
    }
    function o(c) {
      if (!n || n.id !== c.pointerId) return;
      const d = n.moved;
      n = null, d ? (m.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, Ee()) : m.panelOpen = !m.panelOpen;
    }
    const A = X(() => !!m.session && !m.progress?.ended), a = X(() => !!m.progress?.warn);
    return Qn(() => m.settings.ball, i, { deep: !0 }), mA(() => {
      i(), window.addEventListener("resize", i);
    }), gA(() => window.removeEventListener("resize", i)), (c, d) => (S(), C("button", {
      class: ge(["rlzc-ball", { "is-active": A.value, "is-warn": a.value }]),
      style: Kn({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: r,
      onPointermove: l,
      onPointerup: o,
      onPointercancel: o
    }, [
      f("span", qd, O(A.value ? j(m).pack?.level ?? "副" : "廊"), 1)
    ], 38));
  }
});
function Xd(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Kt(e) {
  return Xd(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function ef(e) {
  const t = [];
  let n = null, s = [];
  const i = () => {
    s.length && t.push(`<p>${s.map(Kt).join("<br>")}</p>`), s = [];
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
    const A = /^(#{1,4})\s+(.*)$/.exec(o);
    if (A) {
      i(), r();
      const h = Math.min(A[1].length + 2, 6);
      t.push(`<h${h}>${Kt(A[2])}</h${h}>`);
      continue;
    }
    const a = /^\s*[-*]\s+(.*)$/.exec(o), c = /^\s*(\d+)[.、]\s+(.*)$/.exec(o);
    if (a || c) {
      i();
      const h = a ? "ul" : "ol", x = a ? a[1] : c[2];
      n !== h ? (r(), n = h, t.push(h === "ol" ? `<ol start="${c[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(Kt(x));
      continue;
    }
    if (n && /^\s{2,}/.test(l)) {
      t.push(`<br>${Kt(o.trim())}`);
      continue;
    }
    const d = /^>\s?(.*)$/.exec(o);
    if (d) {
      i(), r(), t.push(`<blockquote>${Kt(d[1])}</blockquote>`);
      continue;
    }
    r(), s.push(o);
  }
  return i(), r(), t.join("");
}
const tf = {
  key: 0,
  class: "rlzc-docs"
}, nf = { class: "rlzc-subtabs" }, sf = ["onClick"], rf = { class: "rlzc-md" }, of = ["innerHTML"], lf = ["src", "alt"], Af = {
  key: 2,
  class: "rlzc-note"
}, ar = /* @__PURE__ */ et({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ we(0);
    Qn(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = X(() => t.pack.docs?.[n.value]), i = X(() => s.value?.md ? ef(s.value.md) : ""), r = X(() => s.value?.image ? gu(t.pack, s.value.image) : null);
    return (l, o) => e.pack.docs?.length ? (S(), C("section", tf, [
      f("div", nf, [
        (S(!0), C(K, null, fe(e.pack.docs, (A, a) => (S(), C("button", {
          key: a,
          class: ge({ on: n.value === a }),
          onClick: (c) => n.value = a
        }, O(A.title), 11, sf))), 128))
      ]),
      f("article", rf, [
        i.value ? (S(), C("div", {
          key: 0,
          innerHTML: i.value
        }, null, 8, of)) : U("", !0),
        r.value ? (S(), C("img", {
          key: 1,
          src: r.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, lf)) : s.value?.image && !r.value ? (S(), C("p", Af, "图片无法加载：" + O(s.value.image), 1)) : U("", !0)
      ])
    ])) : U("", !0);
  }
}), af = { class: "rlzc-system" }, cf = { class: "rlzc-card rlzc-hero" }, uf = { class: "rlzc-hero-top" }, df = { class: "rlzc-level" }, ff = {
  key: 0,
  class: "rlzc-chip"
}, pf = {
  key: 0,
  class: "rlzc-goal"
}, hf = { class: "rlzc-grid" }, mf = {
  key: 0,
  class: "rlzc-stat"
}, gf = {
  key: 1,
  class: "rlzc-stat"
}, xf = {
  key: 2,
  class: "rlzc-stat"
}, bf = {
  key: 3,
  class: "rlzc-stat"
}, vf = {
  key: 0,
  class: "rlzc-subline"
}, yf = {
  key: 1,
  class: "rlzc-note"
}, wf = {
  key: 2,
  class: "rlzc-card"
}, _f = { class: "rlzc-kv" }, kf = { class: "rlzc-kv" }, zf = {
  key: 3,
  class: "rlzc-note"
}, $f = {
  key: 4,
  class: "rlzc-card"
}, Sf = {
  key: 0,
  class: "rlzc-kv"
}, Ef = { class: "rlzc-mono" }, Cf = {
  key: 1,
  class: "rlzc-tasks"
}, Mf = {
  key: 2,
  class: "rlzc-ps"
}, If = { class: "rlzc-actions" }, Tf = ["disabled"], Pf = ["disabled"], Nf = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, Rf = {
  key: 2,
  class: "rlzc-card"
}, Ff = { class: "rlzc-row" }, Of = ["value"], jf = ["disabled"], Lf = /* @__PURE__ */ et({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ we(""), n = X(() => !!m.session && !!m.pack), s = X(() => m.progress), i = X(() => n.value && !!s.value && !s.value.ended), r = X(() => m.packs.find((h) => h.id === t.value) ?? null), l = X(() => !!m.pack?.phases.length), o = X(() => m.settings.panelDisplay !== "statusbar"), A = X(() => {
      const h = s.value;
      return h ? l.value ? `${h.warn ? "⚠️ " : ""}${h.round}/${h.phase.cap}` : `第${h.round}轮` : "";
    }), a = X(() => {
      const h = s.value;
      return h ? h.limit?.text ? h.limit.text : h.panel?.limit || m.session?.briefing?.limit || "—" : "";
    }), c = X(() => {
      const h = s.value;
      return !!h && !h.ended && l.value && h.phase.cap > 0 && h.nextRound < h.phase.cap;
    });
    async function d() {
      t.value && (await jd(t.value), t.value = "");
    }
    return (h, x) => (S(), C("div", af, [
      n.value && s.value ? (S(), C(K, { key: 0 }, [
        f("div", cf, [
          f("div", uf, [
            f("span", df, O(j(m).pack.level), 1),
            f("h3", null, O(j(m).pack.name), 1),
            s.value.ended ? (S(), C("span", ff, "已结束")) : U("", !0)
          ]),
          j(m).session?.briefing?.goal ? (S(), C("p", pf, "目标：" + O(j(m).session.briefing.goal), 1)) : U("", !0)
        ]),
        f("div", hf, [
          l.value ? (S(), C("div", mf, [
            x[3] || (x[3] = f("span", null, "阶段", -1)),
            f("b", null, O(s.value.phase.name), 1)
          ])) : U("", !0),
          f("div", {
            class: ge(["rlzc-stat", { warn: s.value.warn }])
          }, [
            x[4] || (x[4] = f("span", null, "轮次", -1)),
            f("b", null, O(A.value), 1)
          ], 2),
          s.value.currentClock ? (S(), C("div", gf, [
            x[5] || (x[5] = f("span", null, "钟时", -1)),
            f("b", null, O(s.value.currentClock), 1)
          ])) : U("", !0),
          s.value.roundsLeft ? (S(), C("div", xf, [
            x[6] || (x[6] = f("span", null, "最多剩余轮次", -1)),
            f("b", null, O(s.value.roundsLeft.x) + "/" + O(s.value.roundsLeft.y), 1)
          ])) : U("", !0),
          o.value ? (S(), C("div", bf, [
            x[7] || (x[7] = f("span", null, "剩余时间", -1)),
            f("b", null, O(a.value), 1)
          ])) : U("", !0)
        ]),
        j(m).subLine ? (S(), C("p", vf, O(j(m).subLine), 1)) : U("", !0),
        s.value.skipGoal ? (S(), C("div", yf, "快进中：目标 " + O(j(m).pack.phases.find((R) => R.id === s.value.skipGoal.phase)?.name) + " 第" + O(s.value.skipGoal.round) + "轮", 1)) : U("", !0),
        s.value.ended && s.value.settlement ? (S(), C("div", wf, [
          f("div", _f, [
            x[8] || (x[8] = f("span", null, "结果", -1)),
            f("b", null, O(s.value.settlement.result ?? "—"), 1)
          ]),
          f("div", kf, [
            x[9] || (x[9] = f("span", null, "评价", -1)),
            f("b", null, O(s.value.settlement.rating ?? "—"), 1)
          ])
        ])) : s.value.ended ? (S(), C("div", zf, "副本已手动结束。")) : U("", !0),
        o.value && s.value.panel ? (S(), C("div", $f, [
          s.value.panel.progressBar ? (S(), C("div", Sf, [
            x[10] || (x[10] = f("span", null, "进度", -1)),
            f("b", Ef, O(s.value.panel.progressBar), 1)
          ])) : U("", !0),
          s.value.panel.tasks.length ? (S(), C("div", Cf, [
            x[11] || (x[11] = f("span", null, "任务", -1)),
            f("ul", null, [
              (S(!0), C(K, null, fe(s.value.panel.tasks, (R, v) => (S(), C("li", { key: v }, O(R), 1))), 128))
            ])
          ])) : U("", !0),
          s.value.panel.ps ? (S(), C("div", Mf, "ps：" + O(s.value.panel.ps), 1)) : U("", !0)
        ])) : U("", !0),
        f("div", If, [
          f("button", {
            class: "rlzc-btn",
            disabled: !c.value,
            onClick: x[0] || (x[0] = //@ts-ignore
            (...R) => j(ir) && j(ir)(...R))
          }, "跳过（到本阶段结束）", 8, Tf),
          f("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: x[1] || (x[1] = //@ts-ignore
            (...R) => j(rr) && j(rr)(...R))
          }, "手动结束副本", 8, Pf)
        ]),
        i.value && j(m).pack.docs?.length ? (S(), qe(ar, {
          key: 5,
          pack: j(m).pack
        }, null, 8, ["pack"])) : U("", !0)
      ], 64)) : (S(), C("div", Nf, [...x[12] || (x[12] = [
        f("h3", null, "休整中", -1),
        f("p", null, "当前没有进行中的副本，不会注入任何提示词。", -1)
      ])])),
      i.value ? U("", !0) : (S(), C("div", Rf, [
        x[14] || (x[14] = f("label", { class: "rlzc-label" }, "手动选择副本", -1)),
        f("div", Ff, [
          zn(f("select", {
            "onUpdate:modelValue": x[2] || (x[2] = (R) => t.value = R),
            class: "rlzc-input"
          }, [
            x[13] || (x[13] = f("option", { value: "" }, "选择副本…", -1)),
            (S(!0), C(K, null, fe(j(m).packs, (R) => (S(), C("option", {
              key: R.id,
              value: R.id
            }, O(R.level) + "｜" + O(R.name), 9, Of))), 128))
          ], 512), [
            [ho, t.value]
          ]),
          f("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: d
          }, "进入", 8, jf)
        ])
      ])),
      !i.value && r.value?.docs?.length ? (S(), qe(ar, {
        key: 3,
        pack: r.value
      }, null, 8, ["pack"])) : U("", !0)
    ]));
  }
}), Df = { class: "rlzc-ledger" }, Bf = { class: "rlzc-card rlzc-ledger-hero" }, Vf = {
  key: 0,
  class: "rlzc-ledger-pending"
}, Wf = { class: "rlzc-card" }, Uf = {
  key: 0,
  class: "rlzc-ledger-list"
}, Gf = { class: "rlzc-ledger-entry" }, Yf = ["onClick"], Hf = {
  key: 1,
  class: "rlzc-hint"
}, Kf = /* @__PURE__ */ et({
  __name: "LedgerTab",
  setup(e) {
    const t = X(() => m.ledger), n = X(() => sl(se())), s = X(() => qo(n.value.value, t.value)), i = X(() => m.pack ? Qo(n.value.value, t.value, Zo[m.pack.level]) : !1);
    async function r(l) {
      await Me("确定撤销这条流水记录吗？") && Td(l);
    }
    return (l, o) => (S(), C("div", Df, [
      f("div", Bf, [
        o[0] || (o[0] = f("span", { class: "rlzc-ledger-label" }, "当前积分", -1)),
        f("b", {
          class: ge(["rlzc-ledger-balance", { negative: s.value < 0 }])
        }, O(s.value >= 0 ? "+" : "") + O(s.value), 3),
        i.value ? (S(), C("span", Vf, "待清算")) : U("", !0)
      ]),
      f("div", Wf, [
        o[1] || (o[1] = f("h4", null, "流水记录", -1)),
        t.value.length ? (S(), C("ul", Uf, [
          (S(!0), C(K, null, fe([...t.value].reverse(), (A) => (S(), C("li", {
            key: `${A.mesIndex}-${A.delta}-${A.at}`,
            class: "rlzc-ledger-item"
          }, [
            f("span", Gf, O(j(ud)(A)), 1),
            f("button", {
              class: "rlzc-btn ghost small",
              "aria-label": "撤销",
              onClick: (a) => r(A.mesIndex)
            }, "撤销", 8, Yf)
          ]))), 128))
        ])) : (S(), C("p", Hf, "暂无流水记录。AI 输出 <积分变动>±数额｜来源</积分变动> 时自动追加。"))
      ])
    ]));
  }
}), Zf = { class: "rlzc-card rlzc-subapi" }, Jf = { class: "rlzc-subapi-head" }, qf = ["data-kind"], Qf = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "检测来源"
}, Xf = {
  key: 0,
  class: "rlzc-preset-area"
}, ep = { class: "rlzc-preset-row" }, tp = ["value"], np = {
  key: 0,
  value: ""
}, sp = ["value"], ip = ["disabled"], rp = ["disabled"], op = { class: "rlzc-stacked-field" }, lp = ["value"], Ap = { class: "rlzc-stacked-field" }, ap = { class: "rlzc-key-wrap" }, cp = ["type", "value"], up = ["aria-label"], dp = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, fp = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, pp = { class: "rlzc-stacked-field" }, hp = ["value"], mp = ["value"], gp = ["value"], xp = ["value"], bp = { class: "rlzc-conn-row" }, vp = ["data-kind"], yp = ["disabled"], wp = {
  key: 1,
  class: "rlzc-option-list"
}, _p = { class: "rlzc-option-row" }, kp = ["aria-checked"], zp = { class: "rlzc-option-row" }, $p = ["aria-checked"], Sp = { class: "rlzc-option-row rlzc-option-row-timeout" }, Ep = { class: "rlzc-timeout-wrap" }, Cp = ["value"], Mp = /* @__PURE__ */ et({
  __name: "SubApiCard",
  setup(e) {
    const t = X(() => m.settings.subApi), n = X(() => t.value.presets.find((L) => L.id === t.value.presetId) ?? null), s = /* @__PURE__ */ we([]), i = /* @__PURE__ */ we(!1), r = /* @__PURE__ */ we(!1), l = /* @__PURE__ */ we("none"), o = /* @__PURE__ */ we(""), A = X(() => t.value.source === "off" ? { kind: "off", text: "未开启" } : t.value.source === "main" ? { kind: "on", text: "跟随主API" } : l.value === "ok" ? { kind: "on", text: "已连接" } : l.value === "fail" ? { kind: "warn", text: "连接失败" } : { kind: "warn", text: "未测试" }), a = X(() => l.value === "ok" ? `已连接 · 共 ${s.value.length} 个模型` : l.value === "fail" ? `连接失败：${o.value}` : "未测试");
    function c() {
      Ee();
    }
    function d(L) {
      t.value.source = L, l.value = "none", c();
    }
    function h() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function x() {
      const L = (await er("给这个API起个名字：", `我的API ${t.value.presets.length + 1}`))?.trim();
      if (!L) return;
      const E = { id: h(), name: L, url: "", key: "", model: "" };
      t.value.presets = [...t.value.presets, E], t.value.presetId = E.id, s.value = [], l.value = "none", c();
    }
    async function R() {
      if (!n.value) return;
      const L = (await er("改名为：", n.value.name))?.trim();
      L && (n.value.name = L, c());
    }
    async function v() {
      n.value && await Me(`确定删除「${n.value.name}」吗？`) && (t.value.presets = t.value.presets.filter((L) => L.id !== t.value.presetId), t.value.presetId = t.value.presets[0]?.id ?? "", s.value = [], l.value = "none", c());
    }
    function _(L) {
      t.value.presetId = L.target.value, s.value = [], l.value = "none", c();
    }
    function z(L, E) {
      n.value && (n.value[L] = E.target.value.trim(), c());
    }
    async function I() {
      if (n.value) {
        r.value = !0, l.value = "none", o.value = "";
        try {
          const L = await rd(n.value, Math.max(5, t.value.timeoutSec) * 1e3);
          s.value = L.models, !n.value.model && L.models.length && (n.value.model = L.models[0], c()), l.value = "ok";
        } catch (L) {
          l.value = "fail", o.value = Lo(L), s.value = await Ho(n.value).catch(() => []);
        } finally {
          r.value = !1;
        }
      }
    }
    function b(L) {
      const E = Math.floor(Number(L.target.value));
      if (!Number.isFinite(E) || E < 5) {
        Ce("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = E, c();
    }
    function T(L, E) {
      t.value[L] = E, c();
    }
    return (L, E) => (S(), C("div", Zf, [
      f("div", Jf, [
        E[9] || (E[9] = f("h4", null, "副本事件检测", -1)),
        f("span", {
          class: "rlzc-dot",
          "data-kind": A.value.kind
        }, O(A.value.text), 9, qf)
      ]),
      E[24] || (E[24] = f("p", { class: "rlzc-hint" }, "每轮让另一个 AI 核对预设事件有没有写出来，并记下副本状态。开启后每轮多一次调用。", -1)),
      f("div", Qf, [
        f("button", {
          class: ge({ on: t.value.source === "off" }),
          onClick: E[0] || (E[0] = (G) => d("off"))
        }, "关闭", 2),
        f("button", {
          class: ge({ on: t.value.source === "main" }),
          onClick: E[1] || (E[1] = (G) => d("main"))
        }, "跟随主API", 2),
        f("button", {
          class: ge({ on: t.value.source === "preset" }),
          onClick: E[2] || (E[2] = (G) => d("preset"))
        }, "自设API", 2)
      ]),
      t.value.source === "preset" ? (S(), C("div", Xf, [
        f("div", ep, [
          f("select", {
            class: "rlzc-input",
            value: t.value.presetId,
            onChange: _
          }, [
            t.value.presets.length ? U("", !0) : (S(), C("option", np, "还没有保存的接口")),
            (S(!0), C(K, null, fe(t.value.presets, (G) => (S(), C("option", {
              key: G.id,
              value: G.id
            }, O(G.name), 9, sp))), 128))
          ], 40, tp),
          f("button", {
            class: "rlzc-icon-btn",
            "aria-label": "新建接口",
            type: "button",
            onClick: x
          }, [...E[10] || (E[10] = [
            f("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "aria-hidden": "true"
            }, [
              f("path", { d: "M8 3v10M3 8h10" })
            ], -1)
          ])]),
          f("button", {
            class: "rlzc-icon-btn",
            "aria-label": "改名",
            type: "button",
            disabled: !n.value,
            onClick: R
          }, [...E[11] || (E[11] = [
            f("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "aria-hidden": "true"
            }, [
              f("path", { d: "M11 2L14 5 5 14H2v-3L11 2z" })
            ], -1)
          ])], 8, ip),
          f("button", {
            class: "rlzc-icon-btn rlzc-danger",
            "aria-label": "删除接口",
            type: "button",
            disabled: !n.value,
            onClick: v
          }, [...E[12] || (E[12] = [
            f("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "aria-hidden": "true"
            }, [
              f("path", { d: "M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10" })
            ], -1)
          ])], 8, rp)
        ]),
        n.value ? (S(), C(K, { key: 0 }, [
          f("div", op, [
            E[13] || (E[13] = f("label", { class: "rlzc-label" }, "地址", -1)),
            f("input", {
              class: "rlzc-input",
              value: n.value.url,
              placeholder: "https://…/v1",
              onChange: E[3] || (E[3] = (G) => z("url", G))
            }, null, 40, lp)
          ]),
          f("div", Ap, [
            E[16] || (E[16] = f("label", { class: "rlzc-label" }, "密钥", -1)),
            f("div", ap, [
              f("input", {
                class: "rlzc-input",
                type: i.value ? "text" : "password",
                value: n.value.key,
                autocomplete: "off",
                onChange: E[4] || (E[4] = (G) => z("key", G))
              }, null, 40, cp),
              f("button", {
                class: "rlzc-eye-btn",
                type: "button",
                "aria-label": i.value ? "隐藏密钥" : "显示密钥",
                onClick: E[5] || (E[5] = (G) => i.value = !i.value)
              }, [
                i.value ? (S(), C("svg", dp, [...E[14] || (E[14] = [
                  f("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                  f("circle", {
                    cx: "8",
                    cy: "8",
                    r: "2"
                  }, null, -1),
                  f("path", { d: "M2 2l12 12" }, null, -1)
                ])])) : (S(), C("svg", fp, [...E[15] || (E[15] = [
                  f("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                  f("circle", {
                    cx: "8",
                    cy: "8",
                    r: "2"
                  }, null, -1)
                ])]))
              ], 8, up)
            ])
          ]),
          f("div", pp, [
            E[17] || (E[17] = f("label", { class: "rlzc-label" }, "模型", -1)),
            s.value.length ? (S(), C("select", {
              key: 0,
              class: "rlzc-input",
              value: n.value.model,
              onChange: E[6] || (E[6] = (G) => z("model", G))
            }, [
              s.value.includes(n.value.model) ? U("", !0) : (S(), C("option", {
                key: 0,
                value: n.value.model
              }, O(n.value.model || "请选择…"), 9, mp)),
              (S(!0), C(K, null, fe(s.value, (G) => (S(), C("option", {
                key: G,
                value: G
              }, O(G), 9, gp))), 128))
            ], 40, hp)) : (S(), C("input", {
              key: 1,
              class: "rlzc-input rlzc-input-disabled",
              value: n.value.model ? n.value.model : "先测试连接",
              readonly: "",
              tabindex: "-1"
            }, null, 8, xp))
          ]),
          f("div", bp, [
            f("span", {
              class: "rlzc-dot",
              "data-kind": l.value === "ok" ? "on" : l.value === "fail" ? "warn" : "off"
            }, O(a.value), 9, vp),
            f("button", {
              class: "rlzc-btn ghost",
              disabled: r.value || !n.value.url,
              onClick: I
            }, "测试连接", 8, yp)
          ])
        ], 64)) : U("", !0)
      ])) : U("", !0),
      t.value.source !== "off" ? (S(), C("div", wp, [
        f("div", _p, [
          E[19] || (E[19] = f("div", { class: "rlzc-option-label" }, [
            f("span", null, "省钱模式"),
            f("small", null, "只在有预设事件的轮次检测")
          ], -1)),
          f("button", {
            role: "switch",
            type: "button",
            "aria-checked": t.value.saveMode ? "true" : "false",
            class: ge(["rlzc-toggle", { on: t.value.saveMode }]),
            onClick: E[7] || (E[7] = (G) => T("saveMode", !t.value.saveMode))
          }, [...E[18] || (E[18] = [
            f("span", null, null, -1)
          ])], 10, kp)
        ]),
        f("div", zp, [
          E[21] || (E[21] = f("div", { class: "rlzc-option-label" }, [
            f("span", null, "等检测完再写下一轮"),
            f("small", null, "关掉更快，状态可能晚一轮")
          ], -1)),
          f("button", {
            role: "switch",
            type: "button",
            "aria-checked": t.value.wait ? "true" : "false",
            class: ge(["rlzc-toggle", { on: t.value.wait }]),
            onClick: E[8] || (E[8] = (G) => T("wait", !t.value.wait))
          }, [...E[20] || (E[20] = [
            f("span", null, null, -1)
          ])], 10, $p)
        ]),
        f("div", Sp, [
          E[23] || (E[23] = f("span", null, "超时", -1)),
          f("div", Ep, [
            f("input", {
              type: "number",
              min: "5",
              class: "rlzc-input rlzc-input-num",
              value: t.value.timeoutSec,
              onChange: b
            }, null, 40, Cp),
            E[22] || (E[22] = f("span", { class: "rlzc-unit" }, "秒", -1))
          ])
        ])
      ])) : U("", !0)
    ]));
  }
}), Ip = { class: "rlzc-settings" }, Tp = { class: "rlzc-card" }, Pp = ["value"], Np = { class: "rlzc-card" }, Rp = { class: "rlzc-depth" }, Fp = { class: "rlzc-field" }, Op = ["value"], jp = { class: "rlzc-field" }, Lp = ["value"], Dp = { class: "rlzc-field" }, Bp = ["value"], Vp = { class: "rlzc-card" }, Wp = ["value", "onChange"], Up = { class: "rlzc-card" }, Gp = {
  key: 0,
  class: "rlzc-list"
}, Yp = ["onClick"], Hp = {
  key: 1,
  class: "rlzc-hint"
}, Kp = {
  key: 2,
  class: "rlzc-errors"
}, Zp = { class: "rlzc-card" }, Jp = { class: "rlzc-check" }, qp = ["checked"], Qp = { class: "rlzc-check" }, Xp = ["checked"], eh = /* @__PURE__ */ et({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ we([]), n = /* @__PURE__ */ we(null);
    function s(c, d) {
      const h = Math.max(0, Math.min(1e4, Math.floor(Number(d.target.value) || 0)));
      m.settings.depths[c] = h, Ee();
    }
    async function i(c) {
      const d = c.target, h = d.files?.[0];
      d.value = "", h && (t.value = Sd(await h.text()), t.value.length || Ce("success", `已导入副本包：${h.name}`));
    }
    async function r(c, d) {
      await Me(`确定删除自定义副本包《${d}》吗？`) && Ed(c);
    }
    const l = ["D", "C", "B", "A", "S"];
    function o(c, d) {
      const h = Math.floor(Number(d.target.value));
      !Number.isFinite(h) || h < 1 || (m.settings.genericCaps = { ...m.settings.genericCaps, [c]: h }, Ee());
    }
    function A(c) {
      Jd(c.target.value);
    }
    function a(c, d) {
      m.settings[c] = d.target.checked, Ee();
    }
    return (c, d) => (S(), C(K, null, [
      f("div", Ip, [
        f("div", Tp, [
          d[7] || (d[7] = f("h4", null, "副本信息显示位置", -1)),
          f("select", {
            class: "rlzc-input",
            value: j(m).settings.panelDisplay,
            onChange: A
          }, [...d[6] || (d[6] = [
            f("option", { value: "panel" }, "扩展面板（默认）", -1),
            f("option", { value: "statusbar" }, "正文状态栏", -1)
          ])], 40, Pp),
          d[8] || (d[8] = f("p", { class: "rlzc-hint" }, "选「正文状态栏」时，时限和任务由状态栏显示，系统页不重复。", -1))
        ]),
        f("div", Np, [
          d[12] || (d[12] = f("h4", null, "注入深度", -1)),
          d[13] || (d[13] = f("p", { class: "rlzc-hint" }, "数字越小越靠近最新消息，AI 越重视。一般不用改。", -1)),
          f("div", Rp, [
            f("label", Fp, [
              d[9] || (d[9] = f("span", null, [
                st("副本暗号"),
                f("small", null, "触发世界书的副本条目")
              ], -1)),
              f("input", {
                type: "number",
                min: "0",
                class: "rlzc-input",
                value: j(m).settings.depths.token,
                onChange: d[0] || (d[0] = (h) => s("token", h))
              }, null, 40, Op)
            ]),
            f("label", jp, [
              d[10] || (d[10] = f("span", null, [
                st("副本进度"),
                f("small", null, "阶段、轮次、时限、副本状态")
              ], -1)),
              f("input", {
                type: "number",
                min: "0",
                class: "rlzc-input",
                value: j(m).settings.depths.progress,
                onChange: d[1] || (d[1] = (h) => s("progress", h))
              }, null, 40, Lp)
            ]),
            f("label", Dp, [
              d[11] || (d[11] = f("span", null, [
                st("本轮指令"),
                f("small", null, "本轮事件与时限写法")
              ], -1)),
              f("input", {
                type: "number",
                min: "0",
                class: "rlzc-input",
                value: j(m).settings.depths.turn,
                onChange: d[2] || (d[2] = (h) => s("turn", h))
              }, null, 40, Bp)
            ])
          ])
        ]),
        De(Mp),
        f("div", Vp, [
          d[14] || (d[14] = f("h4", null, "通用副本默认轮数上限", -1)),
          d[15] || (d[15] = f("p", { class: "rlzc-hint" }, "未收录副本按等级取轮数上限，简报里写了「（最多N轮）」时以简报为准。", -1)),
          (S(), C(K, null, fe(l, (h) => f("label", {
            key: h,
            class: "rlzc-field"
          }, [
            f("span", null, O(h) + " 级", 1),
            f("input", {
              type: "number",
              min: "1",
              class: "rlzc-input",
              value: j(m).settings.genericCaps[h],
              onChange: (x) => o(h, x)
            }, null, 40, Wp)
          ])), 64))
        ]),
        f("div", Up, [
          d[16] || (d[16] = f("h4", null, "自定义副本包", -1)),
          j(m).settings.customPacks.length ? (S(), C("ul", Gp, [
            (S(!0), C(K, null, fe(j(m).settings.customPacks, (h) => (S(), C("li", {
              key: h.id
            }, [
              f("span", null, [
                st(O(h.level) + "｜" + O(h.name) + " ", 1),
                f("small", null, "v" + O(h.version), 1)
              ]),
              f("button", {
                class: "rlzc-btn ghost small",
                onClick: (x) => r(h.id, h.name)
              }, "删除", 8, Yp)
            ]))), 128))
          ])) : (S(), C("p", Hp, "还没有导入自定义副本包。")),
          f("input", {
            ref_key: "fileInput",
            ref: n,
            type: "file",
            accept: ".json,application/json",
            hidden: "",
            onChange: i
          }, null, 544),
          f("button", {
            class: "rlzc-btn",
            onClick: d[3] || (d[3] = (h) => n.value?.click())
          }, "导入 JSON…"),
          t.value.length ? (S(), C("ul", Kp, [
            (S(!0), C(K, null, fe(t.value, (h, x) => (S(), C("li", { key: x }, O(h), 1))), 128))
          ])) : U("", !0)
        ]),
        f("div", Zp, [
          d[19] || (d[19] = f("h4", null, "其他", -1)),
          f("label", Jp, [
            f("input", {
              type: "checkbox",
              checked: j(m).settings.showBall,
              onChange: d[4] || (d[4] = (h) => a("showBall", h))
            }, null, 40, qp),
            d[17] || (d[17] = st("显示悬浮球", -1))
          ]),
          f("label", Qp, [
            f("input", {
              type: "checkbox",
              checked: j(m).settings.debug,
              onChange: d[5] || (d[5] = (h) => a("debug", h))
            }, null, 40, Xp),
            d[18] || (d[18] = st("调试模式", -1))
          ])
        ])
      ]),
      d[20] || (d[20] = f("p", { class: "rlzc-hint rlzc-key-notice" }, "密钥保存在本机酒馆设置里，分享设置或截图时注意别带出去。", -1))
    ], 64));
  }
}), th = { class: "rlzc-debug" }, nh = {
  key: 0,
  class: "rlzc-note"
}, sh = {
  key: 0,
  class: "rlzc-note"
}, ih = {
  key: 1,
  class: "rlzc-note"
}, rh = {
  key: 2,
  class: "rlzc-card"
}, oh = { class: "rlzc-row" }, lh = ["disabled"], Ah = ["value"], ah = ["disabled"], ch = { class: "rlzc-row" }, uh = ["disabled"], dh = ["disabled"], fh = {
  key: 3,
  class: "rlzc-card"
}, ph = ["onUpdate:modelValue", "disabled"], hh = ["disabled"], mh = { class: "rlzc-card" }, gh = {
  key: 0,
  class: "rlzc-hint"
}, xh = { class: "rlzc-hint" }, bh = { class: "rlzc-list rlzc-warns" }, vh = { class: "rlzc-card" }, yh = {
  key: 0,
  class: "rlzc-list"
}, wh = ["disabled", "onClick"], _h = {
  key: 1,
  class: "rlzc-hint"
}, kh = {
  key: 4,
  class: "rlzc-card"
}, zh = { class: "rlzc-pre" }, $h = {
  key: 0,
  class: "rlzc-pre"
}, Sh = {
  class: "rlzc-card",
  open: ""
}, Eh = { class: "rlzc-pre" }, Ch = { class: "rlzc-card" }, Mh = { class: "rlzc-pre" }, Ih = { class: "rlzc-card" }, Th = { class: "rlzc-pre" }, Ph = { class: "rlzc-card" }, Nh = { class: "rlzc-table" }, Rh = ["disabled"], Fh = /* @__PURE__ */ et({
  __name: "DebugTab",
  setup(e) {
    const t = X(() => m.settings.debug), n = /* @__PURE__ */ we(""), s = /* @__PURE__ */ we(null), i = /* @__PURE__ */ Jn({});
    Qn(
      () => [m.tick, m.pack?.id],
      () => {
        for (const _ of Object.keys(i)) delete i[_];
        const v = rl() ?? {};
        for (const _ of m.pack?.roles ?? []) i[_] = v[_] ?? "";
      },
      { immediate: !0 }
    );
    const r = X(() => {
      m.tick;
      const v = se(), _ = [], z = m.session?.entryIndex ?? 0;
      for (let I = z; I < v.length; I++) {
        const b = v[I]?.extra?.rlzc;
        b && _.push({ index: I, snap: b });
      }
      return _.reverse().slice(0, 60);
    }), l = X(
      () => new Set((m.audit?.warnings ?? []).filter((v) => v.kind === "limit" || v.kind === "eventMissed").map((v) => v.index))
    ), o = X(() => {
      if (m.tick, !m.session || !m.pack || !m.progress) return null;
      const v = se(), _ = rs(v, m.progress.entryIndex);
      let z = null;
      for (let I = v.length - 1; I >= m.progress.entryIndex; I--) {
        const b = v[I]?.extra?.rlzc?.sub;
        if (b) {
          z = b;
          break;
        }
      }
      return {
        text: _ ? Bo(m.pack, _.state) : "",
        state: _?.state ?? null,
        record: z
      };
    }), A = { done: "✓", missed: "✗", void: "–" };
    function a(v) {
      if (!v.sub && !v.skippedEvents?.length) return "";
      const _ = [];
      v.sub?.skipped && _.push(`未更新（${v.sub.error ?? ""}）`);
      for (const z of v.sub?.events ?? []) _.push(`${z.id}${A[z.status]}`);
      for (const z of v.skippedEvents ?? []) _.push(`跳过${z.id}`);
      return v.sub && !v.sub.skipped && !_.length && _.push("已整理"), _.join(" ");
    }
    const c = X(() => {
      const v = m.progress;
      if (!v) return null;
      const { perMessage: _, phase: z, next: I, ...b } = v;
      return {
        phase: z.id + " " + z.name,
        ...b,
        next: I ? { round: I.round, skipFrom: I.skipFrom, events: I.events.map((T) => T.id) } : null,
        messages: Object.keys(_).length
      };
    });
    function d() {
      n.value && Ld(n.value);
    }
    function h() {
      s.value !== null && s.value >= 0 && Dd(s.value);
    }
    function x() {
      Bd({ ...i });
    }
    const R = (v) => JSON.stringify(v, null, 2);
    return (v, _) => (S(), C("div", th, [
      j(m).session ? (S(), C(K, { key: 1 }, [
        t.value ? U("", !0) : (S(), C("p", sh, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        j(m).pack && j(m).session.packVersion !== j(m).pack.version ? (S(), C("p", ih, " 入场时副本包版本为 " + O(j(m).session.packVersion) + "，当前为 " + O(j(m).pack.version) + "。 ", 1)) : U("", !0),
        j(m).pack?.phases.length ? (S(), C("div", rh, [
          _[4] || (_[4] = f("h4", null, "手动修正", -1)),
          f("div", oh, [
            zn(f("select", {
              "onUpdate:modelValue": _[0] || (_[0] = (z) => n.value = z),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              _[3] || (_[3] = f("option", { value: "" }, "切换到阶段…", -1)),
              (S(!0), C(K, null, fe(j(m).pack.phases, (z) => (S(), C("option", {
                key: z.id,
                value: z.id
              }, O(z.name), 9, Ah))), 128))
            ], 8, lh), [
              [ho, n.value]
            ]),
            f("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: d
            }, "切换", 8, ah)
          ]),
          f("div", ch, [
            zn(f("input", {
              "onUpdate:modelValue": _[1] || (_[1] = (z) => s.value = z),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, uh), [
              [
                Gi,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            f("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: h
            }, "修正轮次", 8, dh)
          ])
        ])) : U("", !0),
        j(m).pack?.roles?.length ? (S(), C("div", fh, [
          _[5] || (_[5] = f("h4", null, "角色登记", -1)),
          (S(!0), C(K, null, fe(j(m).pack.roles, (z) => (S(), C("label", {
            key: z,
            class: "rlzc-field"
          }, [
            f("span", null, O(z), 1),
            zn(f("input", {
              "onUpdate:modelValue": (I) => i[z] = I,
              class: "rlzc-input",
              disabled: !t.value,
              placeholder: "未登记"
            }, null, 8, ph), [
              [Gi, i[z]]
            ])
          ]))), 128)),
          f("button", {
            class: "rlzc-btn small",
            disabled: !t.value,
            onClick: x
          }, "保存登记", 8, hh)
        ])) : U("", !0),
        f("div", mh, [
          _[7] || (_[7] = f("h4", null, "<副本> 核对", -1)),
          j(m).audit?.warnings.length ? (S(), C(K, { key: 1 }, [
            f("p", xh, "共 " + O(j(m).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
            f("ul", bh, [
              (S(!0), C(K, null, fe(j(m).audit.warnings.slice(-30).reverse(), (z, I) => (S(), C("li", { key: I }, [
                f("span", null, [
                  f("small", null, "#" + O(z.index) + "｜" + O(z.phase) + "第" + O(z.round) + "轮", 1),
                  _[6] || (_[6] = f("br", null, null, -1)),
                  st("⚠️ " + O(z.text), 1)
                ])
              ]))), 128))
            ])
          ], 64)) : (S(), C("p", gh, "没有发现问题。"))
        ]),
        f("div", vh, [
          _[8] || (_[8] = f("h4", null, "手动操作记录", -1)),
          j(m).session.manual.length ? (S(), C("ul", yh, [
            (S(!0), C(K, null, fe(j(m).session.manual, (z, I) => (S(), C("li", { key: I }, [
              f("code", null, "#" + O(z.atIndex) + " " + O(z.kind) + " " + O("phase" in z ? z.phase : "") + O("round" in z ? z.round : "") + O("targetPhase" in z ? `${z.targetPhase}:${z.targetRound}` : ""), 1),
              f("button", {
                class: "rlzc-btn ghost small",
                disabled: !t.value,
                onClick: (b) => j(Vd)(I)
              }, "撤销", 8, wh)
            ]))), 128))
          ])) : (S(), C("p", _h, "无"))
        ]),
        o.value && (o.value.state || o.value.record) ? (S(), C("details", kh, [
          _[9] || (_[9] = f("summary", null, "副本事件检测：副本状态与最近一次检测", -1)),
          f("pre", zh, O(o.value.text || "（尚无状态）"), 1),
          o.value.record ? (S(), C("pre", $h, O(R(o.value.record)), 1)) : U("", !0),
          _[10] || (_[10] = f("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入", -1))
        ])) : U("", !0),
        f("details", Sh, [
          _[11] || (_[11] = f("summary", null, "本次注入", -1)),
          f("pre", Eh, O([j(m).lastInjection.token, j(m).lastInjection.progress, j(m).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
        ]),
        f("details", Ch, [
          _[12] || (_[12] = f("summary", null, "重放结果", -1)),
          f("pre", Mh, O(R(c.value)), 1)
        ]),
        f("details", Ih, [
          _[13] || (_[13] = f("summary", null, "会话原始数据", -1)),
          f("pre", Th, O(R(j(m).session)), 1)
        ]),
        f("details", Ph, [
          _[15] || (_[15] = f("summary", null, "每楼快照（最近60条）", -1)),
          f("table", Nh, [
            _[14] || (_[14] = f("thead", null, [
              f("tr", null, [
                f("th", null, "楼"),
                f("th", null, "阶段"),
                f("th", null, "轮"),
                f("th", null, "钟时"),
                f("th", null, "时限"),
                f("th", null, "事件"),
                f("th", null, "检测")
              ])
            ], -1)),
            f("tbody", null, [
              (S(!0), C(K, null, fe(r.value, (z) => (S(), C("tr", {
                key: z.index,
                class: ge({ "rlzc-row-warn": l.value.has(z.index) })
              }, [
                f("td", null, O(z.index) + O(z.snap.entry ? "★" : ""), 1),
                f("td", null, O(z.snap.phase), 1),
                f("td", null, O(z.snap.round), 1),
                f("td", null, O(z.snap.clock ?? ""), 1),
                f("td", null, O(z.snap.limit?.text ?? ""), 1),
                f("td", null, O(z.snap.injected.join(" ")), 1),
                f("td", null, O(a(z.snap)), 1)
              ], 2))), 128))
            ])
          ])
        ]),
        f("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: _[2] || (_[2] = //@ts-ignore
          (...z) => j(or) && j(or)(...z))
        }, "删除副本会话", 8, Rh)
      ], 64)) : (S(), C("p", nh, "当前聊天没有副本会话。"))
    ]));
  }
}), Oh = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, jh = { class: "rlzc-head" }, Lh = { class: "rlzc-tabs" }, Dh = ["onClick"], Bh = { class: "rlzc-body" }, Vh = /* @__PURE__ */ et({
  __name: "Panel",
  setup(e) {
    const t = [
      { id: "system", label: "系统" },
      { id: "ledger", label: "账本" },
      { id: "settings", label: "设置" },
      { id: "debug", label: "调试" }
    ];
    async function n(s) {
      if (s === "debug" && !m.debugUnlocked) {
        if (!await Me("此页会显示副本真相，确定要打开吗？")) return;
        m.debugUnlocked = !0;
      }
      m.tab = s;
    }
    return (s, i) => (S(), C("div", {
      class: "rlzc-backdrop",
      onClick: i[1] || (i[1] = za((r) => j(m).panelOpen = !1, ["self"]))
    }, [
      f("section", Oh, [
        f("header", jh, [
          i[2] || (i[2] = f("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          f("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: i[0] || (i[0] = (r) => j(m).panelOpen = !1)
          }, "×")
        ]),
        f("nav", Lh, [
          (S(), C(K, null, fe(t, (r) => f("button", {
            key: r.id,
            class: ge({ on: j(m).tab === r.id }),
            onClick: (l) => n(r.id)
          }, O(r.label), 11, Dh)), 64))
        ]),
        f("div", Bh, [
          j(m).tab === "system" ? (S(), qe(Lf, { key: 0 })) : j(m).tab === "ledger" ? (S(), qe(Kf, { key: 1 })) : j(m).tab === "settings" ? (S(), qe(eh, { key: 2 })) : j(m).tab === "debug" && j(m).debugUnlocked ? (S(), qe(Fh, { key: 3 })) : U("", !0)
        ])
      ])
    ]));
  }
}), Wh = /* @__PURE__ */ et({
  __name: "App",
  setup(e) {
    return (t, n) => (S(), C(K, null, [
      j(m).settings.showBall ? (S(), qe(Qd, { key: 0 })) : U("", !0),
      j(m).panelOpen ? (S(), qe(Vh, { key: 1 })) : U("", !0)
    ], 64));
  }
}), Uh = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}.rlzc-depth .rlzc-field{align-items:flex-start}.rlzc-depth .rlzc-field>span{display:flex;flex-direction:column;gap:2px}.rlzc-depth .rlzc-field>span small{color:var(--muted);font-size:11px;line-height:1.4}.rlzc-depth .rlzc-field>.rlzc-input{flex:0 0 72px;width:72px}.rlzc-subapi-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.rlzc-subapi-head h4{margin:0}.rlzc-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--muted)}.rlzc-dot:before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--muted)}.rlzc-dot[data-kind=on]{color:#4caf72}.rlzc-dot[data-kind=on]:before{background:#4caf72}.rlzc-dot[data-kind=warn]{color:#c9833a}.rlzc-dot[data-kind=warn]:before{background:#c9833a}.rlzc-segsrc{display:flex;width:100%;border:1px solid var(--line);border-radius:8px;overflow:hidden;margin:8px 0}.rlzc-segsrc button{flex:1;padding:8px 4px;font:inherit;font-size:13px;background:none;border:none;border-right:1px solid var(--line);color:var(--muted);cursor:pointer;min-height:44px}.rlzc-segsrc button:last-child{border-right:none}.rlzc-segsrc button.on{background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--fg);font-weight:600}.rlzc-segsrc button:hover:not(.on){background:var(--soft);color:var(--fg)}.rlzc-preset-area{background:color-mix(in srgb,var(--bg) 50%,transparent);border:1px solid var(--line);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.rlzc-preset-row{display:flex;gap:6px;align-items:center}.rlzc-preset-row .rlzc-input{flex:1;min-width:0}.rlzc-icon-btn{flex:0 0 44px;width:44px;height:44px;display:grid;place-items:center;background:none;border:1px solid var(--line);border-radius:8px;color:var(--muted);cursor:pointer;padding:0}.rlzc-icon-btn:hover:not(:disabled){color:var(--fg);border-color:var(--fg)}.rlzc-icon-btn.rlzc-danger{color:#c9534f;border-color:color-mix(in srgb,#c9534f 40%,transparent)}.rlzc-icon-btn.rlzc-danger:hover:not(:disabled){background:color-mix(in srgb,#c9534f 12%,transparent);border-color:#c9534f}.rlzc-icon-btn:disabled{opacity:.35;cursor:not-allowed}.rlzc-stacked-field{display:flex;flex-direction:column;gap:4px}.rlzc-key-wrap{position:relative;display:flex}.rlzc-key-wrap .rlzc-input{padding-right:44px;width:100%}.rlzc-eye-btn{position:absolute;right:0;top:0;bottom:0;width:44px;display:grid;place-items:center;background:none;border:none;color:var(--muted);cursor:pointer;padding:0}.rlzc-eye-btn:hover{color:var(--fg)}.rlzc-input-disabled{color:var(--muted);cursor:default}.rlzc-conn-row{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:44px}.rlzc-option-list{border-top:1px solid var(--line);margin-top:4px;padding-top:4px;display:flex;flex-direction:column}.rlzc-option-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 50%,transparent);min-height:44px}.rlzc-option-row:last-child{border-bottom:none}.rlzc-option-label{display:flex;flex-direction:column;gap:2px;font-size:13px}.rlzc-option-label small{font-size:11px;color:var(--muted)}.rlzc-option-row-timeout{justify-content:flex-start;gap:16px}.rlzc-option-row-timeout>span{font-size:13px}.rlzc-timeout-wrap{display:flex;align-items:center;gap:6px}.rlzc-input-num{width:72px}.rlzc-unit{font-size:13px;color:var(--muted)}.rlzc-toggle{flex:0 0 44px;height:26px;border-radius:13px;background:color-mix(in srgb,var(--muted) 30%,transparent);border:1px solid var(--line);cursor:pointer;padding:0;position:relative;transition:background .15s}.rlzc-toggle.on{background:color-mix(in srgb,var(--accent) 70%,transparent);border-color:var(--accent)}.rlzc-toggle span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--fg);transition:transform .15s}.rlzc-toggle.on span{transform:translate(18px)}.rlzc-toggle:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-key-notice{text-align:center;margin-top:4px}.rlzc-ledger-hero{display:flex;align-items:baseline;justify-content:space-between;gap:12px}.rlzc-ledger-label{font-size:12px;color:var(--muted)}.rlzc-ledger-balance{font-size:28px;font-variant-numeric:tabular-nums}.rlzc-ledger-balance.negative{color:#c9534f}.rlzc-ledger-list{list-style:none;margin:0;padding:0}.rlzc-ledger-item{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:5px 0;border-bottom:1px dashed var(--line)}.rlzc-ledger-item:last-child{border-bottom:none}.rlzc-ledger-entry{font-size:13px;font-variant-numeric:tabular-nums;flex:1;min-width:0;word-break:break-all}';
function Gh(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function dl(e, t, n) {
  const s = le().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function Yh() {
  const e = Gh();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await dl("/api/extensions/version", e, t);
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
async function Hh(e) {
  const t = await dl("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const cr = "rlzc-host", ur = "rlzc-menu-btn", dr = "rlzc-settings-drawer";
function Kh() {
  if (document.getElementById(cr)) return;
  const e = document.createElement("div");
  e.id = cr, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = Uh, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), Ea(Wh).mount(s), fl(), pl();
}
function fl(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => fl(e + 1), 500);
    return;
  }
  if (document.getElementById(ur)) return;
  const n = document.createElement("div");
  n.id = ur, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const i = document.createElement("span");
  i.textContent = "回廊种菜系统", n.append(s, i), n.addEventListener("click", () => {
    m.panelOpen = !m.panelOpen;
  }), t.appendChild(n);
}
function pl(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => pl(e + 1), 500);
    return;
  }
  if (document.getElementById(dr)) return;
  const n = (E, G = "", xe = "") => {
    const Ge = document.createElement(E);
    return G && (Ge.className = G), xe && (Ge.textContent = xe), Ge;
  }, s = n("div");
  s.id = dr;
  const i = n("div", "inline-drawer"), r = n("div", "inline-drawer-toggle inline-drawer-header"), l = n("div", "flex-container alignitemscenter margin0"), o = n("small", "rlzc-update-badge", "有更新");
  o.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", l.append(n("b", "", "回廊种菜系统"), o), r.append(l, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const A = n("div", "inline-drawer-content"), a = n("div", "menu_button menu_button_icon", "打开面板");
  a.prepend(n("i", "fa-solid fa-seedling")), a.addEventListener("click", () => m.panelOpen = !0);
  const c = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  c.addEventListener("click", () => {
    m.settings.ball = { x: null, y: null }, m.settings.showBall = !0, Ee();
  });
  const d = n("label", "checkbox_label"), h = document.createElement("input");
  h.type = "checkbox", h.addEventListener("change", () => {
    m.settings.showBall = h.checked, Ee();
  }), d.append(h, n("span", "", "显示悬浮球")), Qn(() => m.settings.showBall, (E) => h.checked = E, { immediate: !0 });
  const x = n("div", "flex-container");
  x.append(a, c);
  const R = n("div", "flex-container alignitemscenter"), v = n("small", "rlzc-update-status", "正在检查更新…"), _ = n("div", "menu_button menu_button_icon", "检查更新"), z = n("div", "menu_button menu_button_icon", "立即更新"), I = n("div", "menu_button menu_button_icon", "刷新页面");
  z.style.display = "none", I.style.display = "none", R.append(v, _, z, I);
  let b = null, T = !1;
  const L = async () => {
    if (!T) {
      T = !0, v.textContent = "正在检查更新…", z.style.display = "none";
      try {
        b = await Yh();
        const E = b.commit ? `（${b.commit}）` : "";
        b.isGit ? b.isUpToDate ? v.textContent = `已是最新版本${E}` : (v.textContent = `有新版本可以更新，当前${E || "版本较旧"}`, z.style.display = "") : v.textContent = "不是用仓库地址安装的，无法检查更新。", o.style.display = b.isGit && !b.isUpToDate ? "" : "none";
      } catch (E) {
        v.textContent = `检查更新失败：${E.message}`;
      } finally {
        T = !1;
      }
    }
  };
  _.addEventListener("click", () => void L()), z.addEventListener("click", async () => {
    if (!(!b || T)) {
      T = !0, v.textContent = "正在更新…", z.style.display = "none";
      try {
        await Hh(b), o.style.display = "none", v.textContent = "更新完成，刷新页面后生效。", I.style.display = "";
      } catch (E) {
        v.textContent = `更新失败：${E.message}`, z.style.display = "";
      } finally {
        T = !1;
      }
    }
  }), I.addEventListener("click", () => location.reload()), setTimeout(() => void L(), 3e3), A.append(x, d, R, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), i.append(r, A), s.append(i), t.append(s);
}
globalThis.rlzcInterceptor = Fd;
function Is() {
  $d(), tt("MESSAGE_RECEIVED", (e, t) => Zd(Number(e), t)), tt("CHARACTER_MESSAGE_RENDERED", (e) => Cs(Number(e))), tt("MESSAGE_DELETED", () => Es()), tt("MESSAGE_SWIPED", (e) => {
    Od(Number(e)), Cs(Number(e));
  }), tt("MESSAGE_EDITED", () => Es()), tt("MESSAGE_UPDATED", (e) => {
    Es(), Cs(Number(e));
  }), tt("CHAT_CHANGED", () => Ar()), tt("MORE_MESSAGES_LOADED", () => fi()), Kh(), Ar(), console.log("[rlzc] 回廊种菜系统已加载", m.settings);
}
const fr = window.jQuery;
typeof fr == "function" ? fr(() => Is()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Is) : Is();
