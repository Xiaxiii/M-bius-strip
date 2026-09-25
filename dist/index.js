/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Rs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const q = {}, gt = [], bt = () => {
}, Xi = () => !1, Nn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Fn = (e) => e.startsWith("onUpdate:"), ke = Object.assign, eA = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Tr = Object.prototype.hasOwnProperty, U = (e, t) => Tr.call(e, t), B = Array.isArray, qe = (e) => ln(e) === "[object Map]", _t = (e) => ln(e) === "[object Set]", Ai = (e) => ln(e) === "[object Date]", Y = (e) => typeof e == "function", se = (e) => typeof e == "string", Re = (e) => typeof e == "symbol", X = (e) => e !== null && typeof e == "object", tA = (e) => (X(e) || Y(e)) && Y(e.then) && Y(e.catch), nA = Object.prototype.toString, ln = (e) => nA.call(e), Pr = (e) => ln(e).slice(8, -1), sA = (e) => ln(e) === "[object Object]", Ns = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ht = /* @__PURE__ */ Rs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), On = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Rr = /-\w/g, _e = On(
  (e) => e.replace(Rr, (t) => t.slice(1).toUpperCase())
), Nr = /\B([A-Z])/g, St = On(
  (e) => e.replace(Nr, "-$1").toLowerCase()
), iA = On((e) => e.charAt(0).toUpperCase() + e.slice(1)), ss = On(
  (e) => e ? `on${iA(e)}` : ""
), Pe = (e, t) => !Object.is(e, t), gn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, AA = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, jn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ri;
const Dn = () => ri || (ri = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ln(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = se(s) ? Dr(s) : Ln(s);
      if (i)
        for (const A in i)
          t[A] = i[A];
    }
    return t;
  } else if (se(e) || X(e))
    return e;
}
const Fr = /;(?![^(]*\))/g, Or = /:([^]+)/, jr = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Dr(e) {
  const t = {};
  return e.replace(jr, (n) => n.startsWith("/*") ? "" : n).split(Fr).forEach((n) => {
    if (n) {
      const s = n.split(Or);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ct(e) {
  let t = "";
  if (se(e))
    t = e;
  else if (B(e))
    for (let n = 0; n < e.length; n++) {
      const s = ct(e[n]);
      s && (t += s + " ");
    }
  else if (X(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Lr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Br = /* @__PURE__ */ Rs(Lr);
function rA(e) {
  return !!e || e === "";
}
function Vr(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let i = 0; s && i < e.length; i++)
    s = nt(e[i], t[i], n);
  return s;
}
function oi(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), i = new Uint8Array(s.length);
  for (const A of e) {
    let o = -1;
    for (let r = 0; r < s.length; r++)
      if (!i[r] && nt(A, s[r], n)) {
        o = r;
        break;
      }
    if (o < 0) return !1;
    i[o] = 1;
  }
  return !0;
}
function Wr(e, t, n) {
  let s = qe(e), i = qe(t);
  if (s || i || (s = _t(e), i = _t(t), s || i))
    return s && i ? oi(e, t, n) : !1;
  const A = Object.keys(e).length, o = Object.keys(t).length;
  if (A !== o)
    return !1;
  for (const r in e) {
    const l = e.hasOwnProperty(r), c = t.hasOwnProperty(r);
    if (l && !c || !l && c || !nt(e[r], t[r], n))
      return !1;
  }
  return String(e) === String(t);
}
function li(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [i, A] = n;
  if (i.has(e) || A.has(t))
    return i.get(e) === t && A.get(t) === e;
  i.set(e, t), A.set(t, e);
  const o = s(e, t, n);
  return i.delete(e), A.delete(t), o;
}
function nt(e, t, n) {
  if (e === t) return !0;
  let s = Ai(e), i = Ai(t);
  return s || i ? s && i ? e.getTime() === t.getTime() : !1 : (s = Re(e), i = Re(t), s || i ? e === t : (s = B(e), i = B(t), s || i ? s && i ? li(e, t, n, Vr) : !1 : (s = X(e), i = X(t), s || i ? !s || !i ? !1 : li(e, t, n, Wr) : String(e) === String(t))));
}
function Gr(e, t) {
  return e.findIndex((n) => nt(n, t));
}
const oA = (e) => !!(e && e.__v_isRef === !0), R = (e) => se(e) ? e : e == null ? "" : B(e) || X(e) && (e.toString === nA || !Y(e.toString)) ? oA(e) ? R(e.value) : JSON.stringify(e, lA, 2) : String(e), lA = (e, t) => oA(t) ? lA(e, t.value) : qe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], A) => (n[is(s, A) + " =>"] = i, n),
    {}
  )
} : _t(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => is(n))
} : Re(t) ? is(t) : X(t) && !B(t) && !sA(t) ? String(t) : t, is = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Re(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let re;
class Yr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && re && (re.active ? (this.parent = re, this.index = (re.scopes || (re.scopes = [])).push(
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
      const n = re;
      try {
        return re = this, t();
      } finally {
        re = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = re, re = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (re === this)
        re = this.prevScope;
      else {
        let t = re;
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
function Hr() {
  return re;
}
let Z;
const As = /* @__PURE__ */ new WeakSet();
class cA {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, re && (re.active ? re.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, As.has(this) && (As.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || uA(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ci(this), fA(this);
    const t = Z, n = we;
    Z = this, we = !0;
    try {
      return this.fn();
    } finally {
      dA(this), Z = t, we = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        js(t);
      this.deps = this.depsTail = void 0, ci(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? As.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ws(this) && this.run();
  }
  get dirty() {
    return ws(this);
  }
}
let aA = 0, Ut, Kt;
function uA(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Kt, Kt = e;
    return;
  }
  e.next = Ut, Ut = e;
}
function Fs() {
  aA++;
}
function Os() {
  if (--aA > 0)
    return;
  if (Kt) {
    let t = Kt;
    for (Kt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ut; ) {
    let t = Ut;
    for (Ut = void 0; t; ) {
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
function fA(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function dA(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), js(s), Ur(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function ws(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (pA(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function pA(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Xt) || (e.globalVersion = Xt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ws(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Z, s = we;
  Z = e, we = !0;
  try {
    fA(e);
    const i = e.fn(e._value);
    (t.version === 0 || Pe(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Z = n, we = s, dA(e), e.flags &= -3;
  }
}
function js(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let A = n.computed.deps; A; A = A.nextDep)
      js(A, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ur(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let we = !0;
const hA = [];
function st() {
  hA.push(we), we = !1;
}
function it() {
  const e = hA.pop();
  we = e === void 0 ? !0 : e;
}
function ci(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Z;
    Z = void 0;
    try {
      t();
    } finally {
      Z = n;
    }
  }
}
let Xt = 0;
class Kr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ds {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Z || !we || Z === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Z)
      n = this.activeLink = new Kr(Z, this), Z.deps ? (n.prevDep = Z.depsTail, Z.depsTail.nextDep = n, Z.depsTail = n) : Z.deps = Z.depsTail = n, mA(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Z.depsTail, n.nextDep = void 0, Z.depsTail.nextDep = n, Z.depsTail = n, Z.deps === n && (Z.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Xt++, this.notify(t);
  }
  notify(t) {
    Fs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Os();
    }
  }
}
function mA(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        mA(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ks = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ Symbol(
  ""
), Ss = /* @__PURE__ */ Symbol(
  ""
), en = /* @__PURE__ */ Symbol(
  ""
);
function oe(e, t, n) {
  if (we && Z) {
    let s = ks.get(e);
    s || ks.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Ds()), i.map = s, i.key = n), i.track();
  }
}
function We(e, t, n, s, i, A) {
  const o = ks.get(e);
  if (!o) {
    Xt++;
    return;
  }
  const r = (l) => {
    l && l.trigger();
  };
  if (Fs(), t === "clear")
    o.forEach(r);
  else {
    const l = B(e), c = l && Ns(n);
    if (l && n === "length") {
      const u = Number(s);
      o.forEach((f, p) => {
        (p === "length" || p === en || !Re(p) && p >= u) && r(f);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && r(o.get(n)), c && r(o.get(en)), t) {
        case "add":
          l ? c && r(o.get("length")) : (r(o.get(yt)), qe(e) && r(o.get(Ss)));
          break;
        case "delete":
          l || (r(o.get(yt)), qe(e) && r(o.get(Ss)));
          break;
        case "set":
          qe(e) && r(o.get(yt));
          break;
      }
  }
  Os();
}
function Mt(e) {
  const t = /* @__PURE__ */ W(e);
  return t === e || (oe(t, "iterate", en), /* @__PURE__ */ be(e)) ? t : /* @__PURE__ */ Ne(e) ? /* @__PURE__ */ Xe(e) ? t.map((n) => At(ye(n))) : t.map(At) : t.map(ye);
}
function Bn(e) {
  return oe(e = /* @__PURE__ */ W(e), "iterate", en), e;
}
function Ie(e, t) {
  return /* @__PURE__ */ Ne(e) ? At(/* @__PURE__ */ Xe(e) ? ye(t) : t) : ye(t);
}
const Zr = {
  __proto__: null,
  [Symbol.iterator]() {
    return rs(this, Symbol.iterator, (e) => Ie(this, e));
  },
  concat(...e) {
    return Mt(this).concat(
      ...e.map((t) => B(t) ? Mt(t) : t)
    );
  },
  entries() {
    return rs(this, "entries", (e) => (e[1] = Ie(this, e[1]), e));
  },
  every(e, t) {
    return Le(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Le(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Ie(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Le(
      this,
      "find",
      e,
      t,
      (n) => Ie(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Le(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Le(
      this,
      "findLast",
      e,
      t,
      (n) => Ie(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Le(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Le(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return os(this, "includes", e);
  },
  indexOf(...e) {
    return os(this, "indexOf", e);
  },
  join(e) {
    return Mt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return os(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Le(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Vt(this, "pop");
  },
  push(...e) {
    return Vt(this, "push", e);
  },
  reduce(e, ...t) {
    return ai(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ai(this, "reduceRight", e, t);
  },
  shift() {
    return Vt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Le(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Vt(this, "splice", e);
  },
  toReversed() {
    return Mt(this).toReversed();
  },
  toSorted(e) {
    return Mt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Mt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Vt(this, "unshift", e);
  },
  values() {
    return rs(this, "values", (e) => Ie(this, e));
  }
};
function rs(e, t, n) {
  const s = Bn(e), i = s[t]();
  return s !== e && !/* @__PURE__ */ be(e) && (i._next = i.next, i.next = () => {
    const A = i._next();
    return A.done || (A.value = n(A.value)), A;
  }), i;
}
const Jr = Array.prototype;
function Le(e, t, n, s, i, A) {
  const o = Bn(e), r = o !== e && !/* @__PURE__ */ be(e), l = o[t];
  if (l !== Jr[t]) {
    const f = l.apply(e, A);
    return r ? ye(f) : f;
  }
  let c = n;
  o !== e && (r ? c = function(f, p) {
    return n.call(this, Ie(e, f), p, e);
  } : n.length > 2 && (c = function(f, p) {
    return n.call(this, f, p, e);
  }));
  const u = l.call(o, c, s);
  return r && i ? i(u) : u;
}
function ai(e, t, n, s) {
  const i = Bn(e), A = i !== e && !/* @__PURE__ */ be(e);
  let o = n, r = !1;
  i !== e && (A ? (r = s.length === 0, o = function(c, u, f) {
    return r && (r = !1, c = Ie(e, c)), n.call(this, c, Ie(e, u), f, e);
  }) : n.length > 3 && (o = function(c, u, f) {
    return n.call(this, c, u, f, e);
  }));
  const l = i[t](o, ...s);
  return r ? Ie(e, l) : l;
}
function os(e, t, n) {
  const s = /* @__PURE__ */ W(e);
  oe(s, "iterate", en);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Vs(n[0]) ? (n[0] = /* @__PURE__ */ W(n[0]), s[t](...n)) : i;
}
function Vt(e, t, n = []) {
  st(), Fs();
  const s = (/* @__PURE__ */ W(e))[t].apply(e, n);
  return Os(), it(), s;
}
const Qr = /* @__PURE__ */ Rs("__proto__,__v_isRef,__isVue"), gA = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Re)
);
function qr(e) {
  Re(e) || (e = String(e));
  const t = /* @__PURE__ */ W(this);
  return oe(t, "has", e), t.hasOwnProperty(e);
}
class xA {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, A = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return A;
    if (n === "__v_raw")
      return s === (i ? A ? lo : _A : A ? vA : yA).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = B(t);
    if (!i) {
      let l;
      if (o && (l = Zr[n]))
        return l;
      if (n === "hasOwnProperty")
        return qr;
    }
    const r = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ae(t) ? t : s
    );
    if ((Re(n) ? gA.has(n) : Qr(n)) || (i || oe(t, "get", n), A))
      return r;
    if (/* @__PURE__ */ ae(r)) {
      const l = o && Ns(n) ? r : r.value;
      return i && X(l) ? /* @__PURE__ */ Es(l) : l;
    }
    return X(r) ? i ? /* @__PURE__ */ Es(r) : /* @__PURE__ */ Vn(r) : r;
  }
}
class bA extends xA {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let A = t[n];
    const o = B(t) && Ns(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Ne(A);
      if (!/* @__PURE__ */ be(s) && !/* @__PURE__ */ Ne(s) && (A = /* @__PURE__ */ W(A), s = /* @__PURE__ */ W(s)), !o && /* @__PURE__ */ ae(A) && !/* @__PURE__ */ ae(s))
        return c || (A.value = s), !0;
    }
    const r = o ? Number(n) < t.length : U(t, n), l = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ae(t) ? t : i
    );
    return t === /* @__PURE__ */ W(i) && l && (r ? Pe(s, A) && We(t, "set", n, s) : We(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = U(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && We(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Re(n) || !gA.has(n)) && oe(t, "has", n), s;
  }
  ownKeys(t) {
    return oe(
      t,
      "iterate",
      B(t) ? "length" : yt
    ), Reflect.ownKeys(t);
  }
}
class Xr extends xA {
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
const eo = /* @__PURE__ */ new bA(), to = /* @__PURE__ */ new Xr(), no = /* @__PURE__ */ new bA(!0);
const zs = (e) => e, fn = (e) => Reflect.getPrototypeOf(e);
function so(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, A = /* @__PURE__ */ W(i), o = qe(A), r = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, c = i[e](...s), u = n ? zs : t ? At : ye;
    return !t && oe(
      A,
      "iterate",
      l ? Ss : yt
    ), ke(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: f, done: p } = c.next();
          return p ? { value: f, done: p } : {
            value: r ? [u(f[0]), u(f[1])] : u(f),
            done: p
          };
        }
      }
    );
  };
}
function dn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function io(e, t) {
  const n = {
    get(i) {
      const A = this.__v_raw, o = /* @__PURE__ */ W(A), r = /* @__PURE__ */ W(i);
      e || (Pe(i, r) && oe(o, "get", i), oe(o, "get", r));
      const { has: l } = fn(o), c = t ? zs : e ? At : ye;
      if (l.call(o, i))
        return c(A.get(i));
      if (l.call(o, r))
        return c(A.get(r));
      A !== o && A.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && oe(/* @__PURE__ */ W(i), "iterate", yt), i.size;
    },
    has(i) {
      const A = this.__v_raw, o = /* @__PURE__ */ W(A), r = /* @__PURE__ */ W(i);
      return e || (Pe(i, r) && oe(o, "has", i), oe(o, "has", r)), i === r ? A.has(i) : A.has(i) || A.has(r);
    },
    forEach(i, A) {
      const o = this, r = o.__v_raw, l = /* @__PURE__ */ W(r), c = t ? zs : e ? At : ye;
      return !e && oe(l, "iterate", yt), r.forEach((u, f) => i.call(A, c(u), c(f), o));
    }
  };
  return ke(
    n,
    e ? {
      add: dn("add"),
      set: dn("set"),
      delete: dn("delete"),
      clear: dn("clear")
    } : {
      add(i) {
        const A = /* @__PURE__ */ W(this), o = fn(A), r = /* @__PURE__ */ W(i), l = !t && !/* @__PURE__ */ be(i) && !/* @__PURE__ */ Ne(i) ? r : i;
        return o.has.call(A, l) || Pe(i, l) && o.has.call(A, i) || Pe(r, l) && o.has.call(A, r) || (A.add(l), We(A, "add", l, l)), this;
      },
      set(i, A) {
        !t && !/* @__PURE__ */ be(A) && !/* @__PURE__ */ Ne(A) && (A = /* @__PURE__ */ W(A));
        const o = /* @__PURE__ */ W(this), { has: r, get: l } = fn(o);
        let c = r.call(o, i);
        c || (i = /* @__PURE__ */ W(i), c = r.call(o, i));
        const u = l.call(o, i);
        return o.set(i, A), c ? Pe(A, u) && We(o, "set", i, A) : We(o, "add", i, A), this;
      },
      delete(i) {
        const A = /* @__PURE__ */ W(this), { has: o, get: r } = fn(A);
        let l = o.call(A, i);
        l || (i = /* @__PURE__ */ W(i), l = o.call(A, i)), r && r.call(A, i);
        const c = A.delete(i);
        return l && We(A, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ W(this), A = i.size !== 0, o = i.clear();
        return A && We(
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
    n[i] = so(i, e, t);
  }), n;
}
function Ls(e, t) {
  const n = io(e, t);
  return (s, i, A) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    U(n, i) && i in s ? n : s,
    i,
    A
  );
}
const Ao = {
  get: /* @__PURE__ */ Ls(!1, !1)
}, ro = {
  get: /* @__PURE__ */ Ls(!1, !0)
}, oo = {
  get: /* @__PURE__ */ Ls(!0, !1)
};
const yA = /* @__PURE__ */ new WeakMap(), vA = /* @__PURE__ */ new WeakMap(), _A = /* @__PURE__ */ new WeakMap(), lo = /* @__PURE__ */ new WeakMap();
function co(e) {
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
function Vn(e) {
  return /* @__PURE__ */ Ne(e) ? e : Bs(
    e,
    !1,
    eo,
    Ao,
    yA
  );
}
// @__NO_SIDE_EFFECTS__
function ao(e) {
  return Bs(
    e,
    !1,
    no,
    ro,
    vA
  );
}
// @__NO_SIDE_EFFECTS__
function Es(e) {
  return Bs(
    e,
    !0,
    to,
    oo,
    _A
  );
}
function Bs(e, t, n, s, i) {
  if (!X(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const A = i.get(e);
  if (A)
    return A;
  const o = co(Pr(e));
  if (o === 0)
    return e;
  const r = new Proxy(
    e,
    o === 2 ? s : n
  );
  return i.set(e, r), r;
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  return /* @__PURE__ */ Ne(e) ? /* @__PURE__ */ Xe(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Vs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function W(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ W(t) : e;
}
function uo(e) {
  return !U(e, "__v_skip") && Object.isExtensible(e) && AA(e, "__v_skip", !0), e;
}
const ye = (e) => X(e) ? /* @__PURE__ */ Vn(e) : e, At = (e) => X(e) ? /* @__PURE__ */ Es(e) : e;
// @__NO_SIDE_EFFECTS__
function ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function wt(e) {
  return fo(e, !1);
}
function fo(e, t) {
  return /* @__PURE__ */ ae(e) ? e : new po(e, t);
}
class po {
  constructor(t, n) {
    this.dep = new Ds(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ W(t), this._value = n ? t : ye(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ be(t) || /* @__PURE__ */ Ne(t);
    t = s ? t : /* @__PURE__ */ W(t), Pe(t, n) && (this._rawValue = t, this._value = s ? t : ye(t), this.dep.trigger());
  }
}
function T(e) {
  return /* @__PURE__ */ ae(e) ? e.value : e;
}
const ho = {
  get: (e, t, n) => t === "__v_raw" ? e : T(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ ae(i) && !/* @__PURE__ */ ae(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function wA(e) {
  return /* @__PURE__ */ Xe(e) ? e : new Proxy(e, ho);
}
class mo {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ds(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Xt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Z !== this)
      return uA(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return pA(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function go(e, t, n = !1) {
  let s, i;
  return Y(e) ? s = e : (s = e.get, i = e.set), new mo(s, i, n);
}
const pn = {}, wn = /* @__PURE__ */ new WeakMap();
let ht;
function xo(e, t = !1, n = ht) {
  if (n) {
    let s = wn.get(n);
    s || wn.set(n, s = []), s.push(e);
  }
}
function bo(e, t, n = q) {
  const { immediate: s, deep: i, once: A, scheduler: o, augmentJob: r, call: l } = n, c = (I) => i ? I : /* @__PURE__ */ be(I) || i === !1 || i === 0 ? Ge(I, 1) : Ge(I);
  let u, f, p, h, b = !1, y = !1;
  if (/* @__PURE__ */ ae(e) ? (f = () => e.value, b = /* @__PURE__ */ be(e)) : /* @__PURE__ */ Xe(e) ? (f = () => c(e), b = !0) : B(e) ? (y = !0, b = e.some((I) => /* @__PURE__ */ Xe(I) || /* @__PURE__ */ be(I)), f = () => e.map((I) => {
    if (/* @__PURE__ */ ae(I))
      return I.value;
    if (/* @__PURE__ */ Xe(I))
      return c(I);
    if (Y(I))
      return l ? l(I, 2) : I();
  })) : Y(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (p) {
      st();
      try {
        p();
      } finally {
        it();
      }
    }
    const I = ht;
    ht = u;
    try {
      return l ? l(e, 3, [h]) : e(h);
    } finally {
      ht = I;
    }
  } : f = bt, t && i) {
    const I = f, K = i === !0 ? 1 / 0 : i;
    f = () => Ge(I(), K);
  }
  const L = Hr(), j = () => {
    u.stop(), L && L.active && eA(L.effects, u);
  };
  if (A && t) {
    const I = t;
    t = (...K) => {
      const ee = I(...K);
      return j(), ee;
    };
  }
  let N = y ? new Array(e.length).fill(pn) : pn;
  const O = (I) => {
    if (!(!(u.flags & 1) || !u.dirty && !I))
      if (t) {
        const K = u.run();
        if (I || i || b || (y ? K.some((ee, fe) => Pe(ee, N[fe])) : Pe(K, N))) {
          p && p();
          const ee = ht;
          ht = u;
          try {
            const fe = [
              K,
              // pass undefined as the old value when it's changed for the first time
              N === pn ? void 0 : y && N[0] === pn ? [] : N,
              h
            ];
            N = K, l ? l(t, 3, fe) : (
              // @ts-expect-error
              t(...fe)
            );
          } finally {
            ht = ee;
          }
        }
      } else
        u.run();
  };
  return r && r(O), u = new cA(f), u.scheduler = o ? () => o(O, !1) : O, h = (I) => xo(I, !1, u), p = u.onStop = () => {
    const I = wn.get(u);
    if (I) {
      if (l)
        l(I, 4);
      else
        for (const K of I) K();
      wn.delete(u);
    }
  }, t ? s ? O(!0) : N = u.run() : o ? o(O.bind(null, !0), !0) : u.run(), j.pause = u.pause.bind(u), j.resume = u.resume.bind(u), j.stop = j, j;
}
function Ge(e, t = 1 / 0, n) {
  if (t <= 0 || !X(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ae(e))
    Ge(e.value, t, n);
  else if (B(e))
    for (let s = 0; s < e.length; s++)
      Ge(e[s], t, n);
  else if (_t(e) || qe(e))
    e.forEach((s) => {
      Ge(s, t, n);
    });
  else if (sA(e)) {
    for (const s in e)
      Ge(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ge(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function cn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Wn(i, t, n);
  }
}
function Fe(e, t, n, s) {
  if (Y(e)) {
    const i = cn(e, t, n, s);
    return i && tA(i) && i.catch((A) => {
      Wn(A, t, n);
    }), i;
  }
  if (B(e)) {
    const i = [];
    for (let A = 0; A < e.length; A++)
      i.push(Fe(e[A], t, n, s));
    return i;
  }
}
function Wn(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: A, throwUnhandledErrorInProduction: o } = t && t.appContext.config || q;
  if (t) {
    let r = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, l, c) === !1)
            return;
      }
      r = r.parent;
    }
    if (A) {
      st(), cn(A, null, 10, [
        e,
        l,
        c
      ]), it();
      return;
    }
  }
  yo(e, n, i, s, o);
}
function yo(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const ce = [];
let Me = -1;
const Pt = [];
let Qe = null, It = 0;
const kA = /* @__PURE__ */ Promise.resolve();
let kn = null;
function SA(e) {
  const t = kn || kA;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function vo(e) {
  let t = Me + 1, n = ce.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = ce[s], A = tn(i);
    A < e || A === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ws(e) {
  if (!(e.flags & 1)) {
    const t = tn(e), n = ce[ce.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= tn(n) ? ce.push(e) : ce.splice(vo(t), 0, e), e.flags |= 1, zA();
  }
}
function zA() {
  kn || (kn = kA.then($A));
}
function _o(e) {
  if (!B(e))
    Qe && e.id === -1 ? Qe.splice(It + 1, 0, e) : e.flags & 1 || (Pt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Pt.push(e[t]);
  zA();
}
function ui(e, t, n = Me + 1) {
  for (; n < ce.length; n++) {
    const s = ce[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ce.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function EA(e) {
  if (Pt.length) {
    const t = [...new Set(Pt)].sort(
      (n, s) => tn(n) - tn(s)
    );
    if (Pt.length = 0, Qe) {
      for (let n = 0; n < t.length; n++)
        Qe.push(t[n]);
      return;
    }
    for (Qe = t, It = 0; It < Qe.length; It++) {
      const n = Qe[It];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Qe = null, It = 0;
  }
}
const tn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function $A(e) {
  try {
    for (Me = 0; Me < ce.length; Me++) {
      const t = ce[Me];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), cn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Me < ce.length; Me++) {
      const t = ce[Me];
      t && (t.flags &= -2);
    }
    Me = -1, ce.length = 0, EA(), kn = null, (ce.length || Pt.length) && $A();
  }
}
let xe = null, CA = null;
function Sn(e) {
  const t = xe;
  return xe = e, CA = e && e.type.__scopeId || null, t;
}
function wo(e, t = xe, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && xi(-1);
    const A = Sn(t), o = vt.length;
    let r;
    try {
      r = e(...i);
    } finally {
      for (let l = vt.length; l > o; l--) HA();
      Sn(A), s._d && xi(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function xn(e, t) {
  if (xe === null)
    return e;
  const n = Kn(xe), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [A, o, r, l = q] = t[i];
    A && (Y(A) && (A = {
      mounted: A,
      updated: A
    }), A.deep && Ge(o), s.push({
      dir: A,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: r,
      modifiers: l
    }));
  }
  return e;
}
function dt(e, t, n, s) {
  const i = e.dirs, A = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const r = i[o];
    A && (r.oldValue = A[o].value);
    let l = r.dir[s];
    l && (st(), Fe(l, n, 8, [
      e.el,
      r,
      e,
      t
    ]), it());
  }
}
function ko(e, t, n = !1) {
  const s = ll();
  if (s || Rt) {
    let i = Rt ? Rt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && Y(t) ? t.call(s && s.proxy) : t;
  }
}
const So = /* @__PURE__ */ Symbol.for("v-scx"), zo = () => ko(So);
function Gn(e, t, n) {
  return Eo(e, t, n);
}
function Eo(e, t, n = q) {
  const { immediate: s, deep: i, flush: A, once: o } = n, r = ke({}, n), l = t && s || !t && A !== "post";
  let c;
  if (An) {
    if (A === "sync") {
      const h = zo();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = bt, h.resume = bt, h.pause = bt, h;
    }
  }
  const u = rt;
  r.call = (h, b, y) => Fe(h, u, b, y);
  let f = !1;
  A === "post" ? r.scheduler = (h) => {
    ue(h, u && u.suspense);
  } : A !== "sync" && (f = !0, r.scheduler = (h, b) => {
    b ? h() : Ws(h);
  }), r.augmentJob = (h) => {
    t && (h.flags |= 4), f && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const p = bo(e, t, r);
  return An && (c ? c.push(p) : l && p()), p;
}
const $o = /* @__PURE__ */ Symbol("_vte"), Yn = (e) => e.__isTeleport, ls = /* @__PURE__ */ Symbol("_leaveCb");
function Co(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ue) {
        t = n;
        break;
      }
  }
  return t;
}
function MA(e) {
  if (!IA(e))
    return Yn(e.type) && e.children ? Co(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Y(n.default))
      return n.default();
  }
}
function Gs(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Gs(
      Yn(n.type) && MA(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function zt(e, t) {
  return Y(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ke({ name: e.name }, t, { setup: e })
  ) : e;
}
function Mo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function fi(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const zn = /* @__PURE__ */ new WeakMap();
function Zt(e, t, n, s, i = !1) {
  if (B(e)) {
    e.forEach(
      (y, L) => Zt(
        y,
        t && (B(t) ? t[L] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (Jt(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Zt(e, t, n, s.component.subTree);
    return;
  }
  const A = s.shapeFlag & 4 ? Kn(s.component) : s.el, o = i ? null : A, { i: r, r: l } = e, c = t && t.r, u = r.refs === q ? r.refs = {} : r.refs, f = r.setupState, p = /* @__PURE__ */ W(f), h = f === q ? Xi : (y) => fi(u, y) ? !1 : U(p, y), b = (y, L) => !(L && fi(u, L));
  if (c != null && c !== l) {
    if (di(t), se(c))
      u[c] = null, h(c) && (f[c] = null);
    else if (/* @__PURE__ */ ae(c)) {
      const y = t;
      b(c, y.k) && (c.value = null), y.k && (u[y.k] = null);
    }
  }
  if (Y(l))
    cn(l, r, 12, [o, u]);
  else {
    const y = se(l), L = /* @__PURE__ */ ae(l);
    if (y || L) {
      const j = () => {
        if (e.f) {
          const N = y ? h(l) ? f[l] : u[l] : b() || !e.k ? l.value : u[e.k];
          if (i)
            B(N) && eA(N, A);
          else if (B(N))
            N.includes(A) || N.push(A);
          else if (y)
            u[l] = [A], h(l) && (f[l] = u[l]);
          else {
            const O = [A];
            b(l, e.k) && (l.value = O), e.k && (u[e.k] = O);
          }
        } else y ? (u[l] = o, h(l) && (f[l] = o)) : L && (b(l, e.k) && (l.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const N = () => {
          j(), zn.delete(e);
        };
        N.id = -1, zn.set(e, N), ue(N, n);
      } else
        di(e), j();
    }
  }
}
function di(e) {
  const t = zn.get(e);
  t && (t.flags |= 8, zn.delete(e));
}
Dn().requestIdleCallback;
Dn().cancelIdleCallback;
const Jt = (e) => !!e.type.__asyncLoader, IA = (e) => e.type.__isKeepAlive;
function Io(e, t, n = rt, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), A = t.__weh || (t.__weh = (...o) => {
      st();
      const r = Us(n), l = Fe(t, n, e, o);
      return r(), it(), l;
    });
    return s ? i.unshift(A) : i.push(A), A;
  }
}
const TA = (e) => (t, n = rt) => {
  (!An || e === "sp") && Io(e, (...s) => t(...s), n);
}, To = TA("m"), Po = TA(
  "bum"
), Ro = /* @__PURE__ */ Symbol.for("v-ndc");
function ge(e, t, n, s) {
  let i;
  const A = n, o = B(e);
  if (o || se(e)) {
    const r = o && /* @__PURE__ */ Xe(e);
    let l = !1, c = !1;
    r && (l = !/* @__PURE__ */ be(e), c = /* @__PURE__ */ Ne(e), e = Bn(e)), i = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++)
      i[u] = t(
        l ? c ? At(ye(e[u])) : ye(e[u]) : e[u],
        u,
        void 0,
        A
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let r = 0; r < e; r++)
      i[r] = t(r + 1, r, void 0, A);
  } else if (X(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (r, l) => t(r, l, void 0, A)
      );
    else {
      const r = Object.keys(e);
      i = new Array(r.length);
      for (let l = 0, c = r.length; l < c; l++) {
        const u = r[l];
        i[l] = t(e[u], u, l, A);
      }
    }
  else
    i = [];
  return i;
}
const $s = (e) => e ? JA(e) ? Kn(e) : $s(e.parent) : null, Qt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ke(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => $s(e.parent),
    $root: (e) => $s(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ws(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = SA.bind(e.proxy)),
    $watch: (e) => bt
  })
), cs = (e, t) => e !== q && !e.__isScriptSetup && U(e, t), No = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: A, accessCache: o, type: r, appContext: l } = e;
    if (t[0] !== "$") {
      const p = o[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return s[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return A[t];
        }
      else {
        if (cs(s, t))
          return o[t] = 1, s[t];
        if (U(A, t))
          return o[t] = 3, A[t];
        if (n !== q && U(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const c = Qt[t];
    let u, f;
    if (c)
      return t === "$attrs" && oe(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = r.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== q && U(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, U(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: A } = e;
    return cs(i, t) ? (i[t] = n, !0) : U(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (A[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: A, type: o }
  }, r) {
    let l;
    return !!(n[r] || cs(t, r) || U(A, r) || U(s, r) || U(Qt, r) || U(i.config.globalProperties, r) || (l = o.__cssModules) && l[r]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : U(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function PA() {
  return {
    app: null,
    config: {
      isNativeTag: Xi,
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
let Fo = 0;
function Oo(e, t) {
  return function(s, i = null) {
    Y(s) || (s = ke({}, s)), i != null && !X(i) && (i = null);
    const A = PA(), o = /* @__PURE__ */ new WeakSet(), r = [];
    let l = !1;
    const c = A.app = {
      _uid: Fo++,
      _component: s,
      _props: i,
      _container: null,
      _context: A,
      _instance: null,
      version: pl,
      get config() {
        return A.config;
      },
      set config(u) {
      },
      use(u, ...f) {
        return o.has(u) || (u && Y(u.install) ? (o.add(u), u.install(c, ...f)) : Y(u) && (o.add(u), u(c, ...f))), c;
      },
      mixin(u) {
        return c;
      },
      component(u, f) {
        return f ? (A.components[u] = f, c) : A.components[u];
      },
      directive(u, f) {
        return f ? (A.directives[u] = f, c) : A.directives[u];
      },
      mount(u, f, p) {
        if (!l) {
          const h = c._ceVNode || Ye(s, i);
          return h.appContext = A, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(h, u, p), l = !0, c._container = u, u.__vue_app__ = c, Kn(h.component);
        }
      },
      onUnmount(u) {
        r.push(u);
      },
      unmount() {
        l && (Fe(
          r,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, f) {
        return A.provides[u] = f, c;
      },
      runWithContext(u) {
        const f = Rt;
        Rt = c;
        try {
          return u();
        } finally {
          Rt = f;
        }
      }
    };
    return c;
  };
}
let Rt = null;
const jo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_e(t)}Modifiers`] || e[`${St(t)}Modifiers`];
function Do(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || q;
  let i = n;
  const A = t.startsWith("update:"), o = A && jo(s, t.slice(7));
  o && (o.trim && (i = n.map((u) => se(u) ? u.trim() : u)), o.number && (i = i.map(jn)));
  let r, l = s[r = ss(t)] || // also try camelCase event handler (#2249)
  s[r = ss(_e(t))];
  !l && A && (l = s[r = ss(St(t))]), l && Fe(
    l,
    e,
    6,
    i
  );
  const c = s[r + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[r])
      return;
    e.emitted[r] = !0, Fe(
      c,
      e,
      6,
      i
    );
  }
}
function Lo(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const A = e.emits;
  let o = {};
  return A ? (B(A) ? A.forEach((r) => o[r] = null) : ke(o, A), X(e) && s.set(e, o), o) : (X(e) && s.set(e, null), null);
}
function Hn(e, t) {
  return !e || !Nn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, St(t)) || U(e, t));
}
function pi(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [A],
    slots: o,
    attrs: r,
    emit: l,
    render: c,
    renderCache: u,
    props: f,
    data: p,
    setupState: h,
    ctx: b,
    inheritAttrs: y
  } = e, L = Sn(e);
  let j, N;
  try {
    if (n.shapeFlag & 4) {
      const I = i || s, K = I;
      j = Te(
        c.call(
          K,
          I,
          u,
          f,
          h,
          p,
          b
        )
      ), N = r;
    } else {
      const I = t;
      j = Te(
        I.length > 1 ? I(
          f,
          { attrs: r, slots: o, emit: l }
        ) : I(
          f,
          null
        )
      ), N = t.props ? r : Bo(r);
    }
  } catch (I) {
    vt.length = 0, Wn(I, e, 1), j = Ye(Ue);
  }
  let O = j;
  if (N && y !== !1) {
    const I = Object.keys(N), { shapeFlag: K } = O;
    I.length && K & 7 && (A && I.some(Fn) && (N = Vo(
      N,
      A
    )), O = Nt(O, N, !1, !0));
  }
  if (n.dirs && (O = Nt(O, null, !1, !0), O.dirs = O.dirs ? O.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const I = Yn(O.type) && MA(O) || O;
    Gs(I, n.transition);
  }
  return j = O, Sn(L), j;
}
const Bo = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Nn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Vo = (e, t) => {
  const n = {};
  for (const s in e)
    (!Fn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Wo(e, t, n) {
  const { props: s, children: i, component: A } = e, { props: o, children: r, patchFlag: l } = t, c = A.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return s ? hi(s, o, c) : !!o;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        if (RA(o, s, p) && !Hn(c, p))
          return !0;
      }
    }
  } else
    return (i || r) && (!r || !r.$stable) ? !0 : s === o ? !1 : s ? o ? hi(s, o, c) : !0 : !!o;
  return !1;
}
function hi(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const A = s[i];
    if (RA(t, e, A) && !Hn(n, A))
      return !0;
  }
  return !1;
}
function RA(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && X(s) && X(i) ? !nt(s, i) : s !== i;
}
function Go({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const NA = {}, FA = () => Object.create(NA), OA = (e) => Object.getPrototypeOf(e) === NA;
function Yo(e, t, n, s = !1) {
  const i = {}, A = FA();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), jA(e, t, i, A);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ ao(i) : e.type.props ? e.props = i : e.props = A, e.attrs = A;
}
function Ho(e, t, n, s) {
  const {
    props: i,
    attrs: A,
    vnode: { patchFlag: o }
  } = e, r = /* @__PURE__ */ W(i), [l] = e.propsOptions;
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
        let p = u[f];
        if (Hn(e.emitsOptions, p))
          continue;
        const h = t[p];
        if (l)
          if (U(A, p))
            h !== A[p] && (A[p] = h, c = !0);
          else {
            const b = _e(p);
            i[b] = Cs(
              l,
              r,
              b,
              h,
              e,
              !1
            );
          }
        else
          h !== A[p] && (A[p] = h, c = !0);
      }
    }
  } else {
    jA(e, t, i, A) && (c = !0);
    let u;
    for (const f in r)
      (!t || // for camelCase
      !U(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = St(f)) === f || !U(t, u))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[f] = Cs(
        l,
        r,
        f,
        void 0,
        e,
        !0
      )) : delete i[f]);
    if (A !== r)
      for (const f in A)
        (!t || !U(t, f)) && (delete A[f], c = !0);
  }
  c && We(e.attrs, "set", "");
}
function jA(e, t, n, s) {
  const [i, A] = e.propsOptions;
  let o = !1, r;
  if (t)
    for (let l in t) {
      if (Ht(l))
        continue;
      const c = t[l];
      let u;
      i && U(i, u = _e(l)) ? !A || !A.includes(u) ? n[u] = c : (r || (r = {}))[u] = c : Hn(e.emitsOptions, l) || (!(l in s) || c !== s[l]) && (s[l] = c, o = !0);
    }
  if (A) {
    const l = /* @__PURE__ */ W(n), c = r || q;
    for (let u = 0; u < A.length; u++) {
      const f = A[u];
      n[f] = Cs(
        i,
        l,
        f,
        c[f],
        e,
        !U(c, f)
      );
    }
  }
  return o;
}
function Cs(e, t, n, s, i, A) {
  const o = e[n];
  if (o != null) {
    const r = U(o, "default");
    if (r && s === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && Y(l)) {
        const { propsDefaults: c } = i;
        if (n in c)
          s = c[n];
        else {
          const u = Us(i);
          s = c[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        s = l;
      i.ce && i.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (A && !r ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === St(n)) && (s = !0));
  }
  return s;
}
function Uo(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const A = e.props, o = {}, r = [];
  if (!A)
    return X(e) && s.set(e, gt), gt;
  if (B(A))
    for (let c = 0; c < A.length; c++) {
      const u = _e(A[c]);
      mi(u) && (o[u] = q);
    }
  else if (A)
    for (const c in A) {
      const u = _e(c);
      if (mi(u)) {
        const f = A[c], p = o[u] = B(f) || Y(f) ? { type: f } : ke({}, f), h = p.type;
        let b = !1, y = !0;
        if (B(h))
          for (let L = 0; L < h.length; ++L) {
            const j = h[L], N = Y(j) && j.name;
            if (N === "Boolean") {
              b = !0;
              break;
            } else N === "String" && (y = !1);
          }
        else
          b = Y(h) && h.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = b, p[
          1
          /* shouldCastTrue */
        ] = y, (b || U(p, "default")) && r.push(u);
      }
    }
  const l = [o, r];
  return X(e) && s.set(e, l), l;
}
function mi(e) {
  return e[0] !== "$" && !Ht(e);
}
const Ys = (e) => e === "_" || e === "_ctx" || e === "$stable", Hs = (e) => B(e) ? e.map(Te) : [Te(e)], Ko = (e, t, n) => {
  if (t._n)
    return t;
  const s = wo((...i) => Hs(t(...i)), n);
  return s._c = !1, s;
}, DA = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (Ys(i)) continue;
    const A = e[i];
    if (Y(A))
      t[i] = Ko(i, A, s);
    else if (A != null) {
      const o = Hs(A);
      t[i] = () => o;
    }
  }
}, LA = (e, t) => {
  const n = Hs(t);
  e.slots.default = () => n;
}, BA = (e, t, n) => {
  for (const s in t)
    (n || !Ys(s)) && (e[s] = t[s]);
}, Zo = (e, t, n) => {
  const s = e.slots = FA();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (BA(s, t, n), n && AA(s, "_", i, !0)) : DA(t, s);
  } else t && LA(e, t);
}, Jo = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let A = !0, o = q;
  if (s.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? A = !1 : BA(i, t, n) : (A = !t.$stable, DA(t, i)), o = t;
  } else t && (LA(e, t), o = { default: 1 });
  if (A)
    for (const r in i)
      !Ys(r) && o[r] == null && delete i[r];
}, ue = tl;
function Qo(e) {
  return qo(e);
}
function qo(e, t) {
  const n = Dn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: A,
    createElement: o,
    createText: r,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: f,
    nextSibling: p,
    setScopeId: h = bt,
    insertStaticContent: b
  } = e, y = (a, d, x, k = null, v = null, w = null, E = void 0, z = null, S = !!d.dynamicChildren) => {
    if (a === d)
      return;
    a && !Wt(a, d) && (k = un(a), De(a, v, w, !0), a = null), d.patchFlag === -2 && (S = !1, d.dynamicChildren = null), d.dynamicChildren && a && a.dynamicChildren && a.dynamicChildren.hasOnce && (d.dynamicChildren === gt && (d.dynamicChildren = []), d.dynamicChildren.hasOnce = !0);
    const { type: _, ref: F, shapeFlag: $ } = d;
    switch (_) {
      case Un:
        L(a, d, x, k);
        break;
      case Ue:
        j(a, d, x, k);
        break;
      case us:
        a == null && N(d, x, k, E);
        break;
      case Q:
        te(
          a,
          d,
          x,
          k,
          v,
          w,
          E,
          z,
          S
        );
        break;
      default:
        $ & 1 ? K(
          a,
          d,
          x,
          k,
          v,
          w,
          E,
          z,
          S
        ) : $ & 6 ? an(
          a,
          d,
          x,
          k,
          v,
          w,
          E,
          z,
          S
        ) : ($ & 64 || $ & 128) && _.process(
          a,
          d,
          x,
          k,
          v,
          w,
          E,
          z,
          S,
          Lt
        );
    }
    F != null && v ? Zt(F, a && a.ref, w, d || a, !d) : F == null && a && a.ref != null && Zt(a.ref, null, w, a, !0);
  }, L = (a, d, x, k) => {
    if (a == null)
      s(
        d.el = r(d.children),
        x,
        k
      );
    else {
      const v = d.el = a.el;
      d.children !== a.children && c(v, d.children);
    }
  }, j = (a, d, x, k) => {
    a == null ? s(
      d.el = l(d.children || ""),
      x,
      k
    ) : d.el = a.el;
  }, N = (a, d, x, k) => {
    [a.el, a.anchor] = b(
      a.children,
      d,
      x,
      k,
      a.el,
      a.anchor
    );
  }, O = ({ el: a, anchor: d }, x, k) => {
    let v;
    for (; a && a !== d; )
      v = p(a), s(a, x, k), a = v;
    s(d, x, k);
  }, I = ({ el: a, anchor: d }) => {
    let x;
    for (; a && a !== d; )
      x = p(a), i(a), a = x;
    i(d);
  }, K = (a, d, x, k, v, w, E, z, S) => {
    if (d.type === "svg" ? E = "svg" : d.type === "math" && (E = "mathml"), a == null)
      ee(
        d,
        x,
        k,
        v,
        w,
        E,
        z,
        S
      );
    else {
      const _ = a.el && a.el._isVueCE ? a.el : null;
      try {
        _ && _._beginPatch(), Oe(
          a,
          d,
          v,
          w,
          E,
          z,
          S
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, ee = (a, d, x, k, v, w, E, z) => {
    let S, _;
    const { props: F, shapeFlag: $, transition: P, dirs: D } = a;
    if (S = a.el = o(
      a.type,
      w,
      F && F.is,
      F
    ), $ & 8 ? u(S, a.children) : $ & 16 && de(
      a.children,
      S,
      null,
      k,
      v,
      as(a, w),
      E,
      z
    ), D && dt(a, null, k, "created"), fe(S, a, a.scopeId, E, k), F) {
      for (const H in F)
        H !== "value" && !Ht(H) && A(S, H, null, F[H], w, k);
      "value" in F && A(S, "value", null, F.value, w), (_ = F.onVnodeBeforeMount) && Ce(_, k, a);
    }
    D && dt(a, null, k, "beforeMount");
    const V = Xo(v, P);
    V && P.beforeEnter(S), s(S, d, x), ((_ = F && F.onVnodeMounted) || V || D) && ue(() => {
      try {
        _ && Ce(_, k, a), V && P.enter(S), D && dt(a, null, k, "mounted");
      } finally {
      }
    }, v);
  }, fe = (a, d, x, k, v) => {
    if (x && h(a, x), k)
      for (let w = 0; w < k.length; w++)
        h(a, k[w]);
    if (v) {
      let w = v.subTree;
      if (d === w || YA(w.type) && (w.ssContent === d || w.ssFallback === d)) {
        const E = v.vnode;
        fe(
          a,
          E,
          E.scopeId,
          E.slotScopeIds,
          v.parent
        );
      }
    }
  }, de = (a, d, x, k, v, w, E, z, S = 0) => {
    for (let _ = S; _ < a.length; _++) {
      const F = a[_] = z ? Ve(a[_]) : Te(a[_]);
      y(
        null,
        F,
        d,
        x,
        k,
        v,
        w,
        E,
        z
      );
    }
  }, Oe = (a, d, x, k, v, w, E) => {
    const z = d.el = a.el;
    let { patchFlag: S, dynamicChildren: _, dirs: F } = d;
    S |= a.patchFlag & 16;
    const $ = a.props || q, P = d.props || q;
    let D;
    if (x && pt(x, !1), (D = P.onVnodeBeforeUpdate) && Ce(D, x, d, a), F && dt(d, a, x, "beforeUpdate"), x && pt(x, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    _ && (!a.dynamicChildren || a.dynamicChildren.length !== _.length) && (S = 0, E = !1, _ = null), ($.innerHTML && P.innerHTML == null || $.textContent && P.textContent == null) && u(z, ""), _ ? ut(
      a.dynamicChildren,
      _,
      z,
      x,
      k,
      as(d, v),
      w
    ) : E || Ct(
      a,
      d,
      z,
      null,
      x,
      k,
      as(d, v),
      w,
      !1
    ), S > 0) {
      if (S & 16)
        ft(z, $, P, x, v);
      else if (S & 2 && $.class !== P.class && A(z, "class", null, P.class, v), S & 4 && A(z, "style", $.style, P.style, v), S & 8) {
        const V = d.dynamicProps;
        for (let H = 0; H < V.length; H++) {
          const G = V[H], ne = $[G], Ae = P[G];
          (Ae !== ne || G === "value") && A(z, G, ne, Ae, v, x);
        }
      }
      S & 1 && a.children !== d.children && u(z, d.children);
    } else !E && _ == null && ft(z, $, P, x, v);
    ((D = P.onVnodeUpdated) || F) && ue(() => {
      D && Ce(D, x, d, a), F && dt(d, a, x, "updated");
    }, k);
  }, ut = (a, d, x, k, v, w, E) => {
    for (let z = 0; z < d.length; z++) {
      const S = a[z], _ = d[z], F = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === Q || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Wt(S, _) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? f(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      y(
        S,
        _,
        F,
        null,
        k,
        v,
        w,
        E,
        !0
      );
    }
  }, ft = (a, d, x, k, v) => {
    if (d !== x) {
      if (d !== q)
        for (const w in d)
          !Ht(w) && !(w in x) && A(
            a,
            w,
            d[w],
            null,
            v,
            k
          );
      for (const w in x) {
        if (Ht(w)) continue;
        const E = x[w], z = d[w];
        E !== z && w !== "value" && A(a, w, z, E, v, k);
      }
      "value" in x && A(a, "value", d.value, x.value, v);
    }
  }, te = (a, d, x, k, v, w, E, z, S) => {
    const _ = d.el = a ? a.el : r(""), F = d.anchor = a ? a.anchor : r("");
    let { patchFlag: $, dynamicChildren: P, slotScopeIds: D } = d;
    D && (z = z ? z.concat(D) : D), a == null ? (s(_, x, k), s(F, x, k), de(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      x,
      F,
      v,
      w,
      E,
      z,
      S
    )) : $ > 0 && $ & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === P.length ? (ut(
      a.dynamicChildren,
      P,
      x,
      v,
      w,
      E,
      z
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || v && d === v.subTree) && VA(
      a,
      d,
      !0
      /* shallow */
    )) : Ct(
      a,
      d,
      x,
      F,
      v,
      w,
      E,
      z,
      S
    );
  }, an = (a, d, x, k, v, w, E, z, S) => {
    d.slotScopeIds = z, a == null ? d.shapeFlag & 512 ? v.ctx.activate(
      d,
      x,
      k,
      E,
      S
    ) : le(
      d,
      x,
      k,
      v,
      w,
      E,
      S
    ) : Se(a, d, S);
  }, le = (a, d, x, k, v, w, E) => {
    const z = a.component = ol(
      a,
      k,
      v
    );
    if (IA(a) && (z.ctx.renderer = Lt), cl(z, !1, E), z.asyncDep) {
      if (v && v.registerDep(z, Et, E), !a.el) {
        const S = z.subTree = Ye(Ue);
        j(null, S, d, x), a.placeholder = S.el;
      }
    } else
      Et(
        z,
        a,
        d,
        x,
        v,
        w,
        E
      );
  }, Se = (a, d, x) => {
    const k = d.component = a.component;
    if (Wo(a, d, x))
      if (k.asyncDep && !k.asyncResolved) {
        d.el = a.el, $t(k, d, x);
        return;
      } else
        k.next = d, k.update();
    else
      d.el = a.el, k.vnode = d;
  }, Et = (a, d, x, k, v, w, E) => {
    const z = () => {
      if (a.isMounted) {
        let { next: $, bu: P, u: D, parent: V, vnode: H } = a;
        {
          const Ee = WA(a);
          if (Ee) {
            $ && ($.el = H.el, $t(a, $, E)), Ee.asyncDep.then(() => {
              ue(() => {
                a.isUnmounted || _();
              }, v);
            });
            return;
          }
        }
        let G = $, ne;
        pt(a, !1), $ ? ($.el = H.el, $t(a, $, E)) : $ = H, P && gn(P), (ne = $.props && $.props.onVnodeBeforeUpdate) && Ce(ne, V, $, H), pt(a, !0);
        const Ae = pi(a), ze = a.subTree;
        a.subTree = Ae, y(
          ze,
          Ae,
          // parent may have changed if it's in a teleport
          f(ze.el),
          // anchor may have changed if it's in a fragment
          un(ze),
          a,
          v,
          w
        ), $.el = Ae.el, G === null && Go(a, Ae.el), D && ue(D, v), (ne = $.props && $.props.onVnodeUpdated) && ue(
          () => Ce(ne, V, $, H),
          v
        );
      } else {
        let $;
        const { el: P, props: D } = d, { bm: V, m: H, parent: G, root: ne, type: Ae } = a, ze = Jt(d);
        pt(a, !1), V && gn(V), !ze && ($ = D && D.onVnodeBeforeMount) && Ce($, G, d), pt(a, !0);
        {
          ne.ce && ne.ce._hasShadowRoot() && ne.ce._injectChildStyle(
            Ae,
            a.parent ? a.parent.type : void 0
          );
          const Ee = a.subTree = pi(a);
          y(
            null,
            Ee,
            x,
            k,
            a,
            v,
            w
          ), d.el = Ee.el;
        }
        if (H && ue(H, v), !ze && ($ = D && D.onVnodeMounted)) {
          const Ee = d;
          ue(
            () => Ce($, G, Ee),
            v
          );
        }
        (d.shapeFlag & 256 || G && Jt(G.vnode) && G.vnode.shapeFlag & 256) && a.a && ue(a.a, v), a.isMounted = !0, d = x = k = null;
      }
    };
    a.scope.on();
    const S = a.effect = new cA(z);
    a.scope.off();
    const _ = a.update = S.run.bind(S), F = a.job = S.runIfDirty.bind(S);
    F.i = a, F.id = a.uid, S.scheduler = () => Ws(F), pt(a, !0), _();
  }, $t = (a, d, x) => {
    d.component = a;
    const k = a.vnode.props;
    a.vnode = d, a.next = null, Ho(a, d.props, k, x), Jo(a, d.children, x), st(), ui(a), it();
  }, Ct = (a, d, x, k, v, w, E, z, S = !1) => {
    const _ = a && a.children, F = a ? a.shapeFlag : 0, $ = d.children, { patchFlag: P, shapeFlag: D } = d;
    if (P > 0) {
      if (P & 128) {
        jt(
          _,
          $,
          x,
          k,
          v,
          w,
          E,
          z,
          S
        );
        return;
      } else if (P & 256) {
        Ze(
          _,
          $,
          x,
          k,
          v,
          w,
          E,
          z,
          S
        );
        return;
      }
    }
    D & 8 ? (F & 16 && Dt(_, v, w), $ !== _ && u(x, $)) : F & 16 ? D & 16 ? jt(
      _,
      $,
      x,
      k,
      v,
      w,
      E,
      z,
      S
    ) : Dt(_, v, w, !0) : (F & 8 && u(x, ""), D & 16 && de(
      $,
      x,
      k,
      v,
      w,
      E,
      z,
      S
    ));
  }, Ze = (a, d, x, k, v, w, E, z, S) => {
    a = a || gt, d = d || gt;
    const _ = a.length, F = d.length, $ = Math.min(_, F);
    let P;
    for (P = 0; P < $; P++) {
      const D = d[P] = S ? Ve(d[P]) : Te(d[P]);
      y(
        a[P],
        D,
        x,
        null,
        v,
        w,
        E,
        z,
        S
      );
    }
    _ > F ? Dt(
      a,
      v,
      w,
      !0,
      !1,
      $
    ) : de(
      d,
      x,
      k,
      v,
      w,
      E,
      z,
      S,
      $
    );
  }, jt = (a, d, x, k, v, w, E, z, S) => {
    let _ = 0;
    const F = d.length;
    let $ = a.length - 1, P = F - 1;
    for (; _ <= $ && _ <= P; ) {
      const D = a[_], V = d[_] = S ? Ve(d[_]) : Te(d[_]);
      if (Wt(D, V))
        y(
          D,
          V,
          x,
          null,
          v,
          w,
          E,
          z,
          S
        );
      else
        break;
      _++;
    }
    for (; _ <= $ && _ <= P; ) {
      const D = a[$], V = d[P] = S ? Ve(d[P]) : Te(d[P]);
      if (Wt(D, V))
        y(
          D,
          V,
          x,
          null,
          v,
          w,
          E,
          z,
          S
        );
      else
        break;
      $--, P--;
    }
    if (_ > $) {
      if (_ <= P) {
        const D = P + 1, V = D < F ? d[D].el : k;
        for (; _ <= P; )
          y(
            null,
            d[_] = S ? Ve(d[_]) : Te(d[_]),
            x,
            V,
            v,
            w,
            E,
            z,
            S
          ), _++;
      }
    } else if (_ > P)
      for (; _ <= $; )
        De(a[_], v, w, !0), _++;
    else {
      const D = _, V = _, H = /* @__PURE__ */ new Map();
      for (_ = V; _ <= P; _++) {
        const pe = d[_] = S ? Ve(d[_]) : Te(d[_]);
        pe.key != null && H.set(pe.key, _);
      }
      let G, ne = 0;
      const Ae = P - V + 1;
      let ze = !1, Ee = 0;
      const Bt = new Array(Ae);
      for (_ = 0; _ < Ae; _++) Bt[_] = 0;
      for (_ = D; _ <= $; _++) {
        const pe = a[_];
        if (ne >= Ae) {
          De(pe, v, w, !0);
          continue;
        }
        let $e;
        if (pe.key != null)
          $e = H.get(pe.key);
        else
          for (G = V; G <= P; G++)
            if (Bt[G - V] === 0 && Wt(pe, d[G])) {
              $e = G;
              break;
            }
        $e === void 0 ? De(pe, v, w, !0) : (Bt[$e - V] = _ + 1, $e >= Ee ? Ee = $e : ze = !0, y(
          pe,
          d[$e],
          x,
          null,
          v,
          w,
          E,
          z,
          S
        ), ne++);
      }
      const ni = ze ? el(Bt) : gt;
      for (G = ni.length - 1, _ = Ae - 1; _ >= 0; _--) {
        const pe = V + _, $e = d[pe], si = d[pe + 1], ii = pe + 1 < F ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          si.el || GA(si)
        ) : k;
        Bt[_] === 0 ? y(
          null,
          $e,
          x,
          ii,
          v,
          w,
          E,
          z,
          S
        ) : ze && (G < 0 || _ !== ni[G] ? je($e, x, ii, 2) : G--);
      }
    }
  }, je = (a, d, x, k, v = null) => {
    const { el: w, type: E, transition: z, children: S, shapeFlag: _ } = a;
    if (_ & 6) {
      je(a.component.subTree, d, x, k);
      return;
    }
    if (_ & 128) {
      a.suspense.move(d, x, k);
      return;
    }
    if (_ & 64) {
      E.move(a, d, x, Lt);
      return;
    }
    if (E === Q) {
      s(w, d, x);
      for (let $ = 0; $ < S.length; $++)
        je(S[$], d, x, k);
      s(a.anchor, d, x);
      return;
    }
    if (E === us) {
      O(a, d, x);
      return;
    }
    if (k !== 2 && _ & 1 && z)
      if (k === 0)
        z.persisted && !w[ls] ? s(w, d, x) : (z.beforeEnter(w), s(w, d, x), ue(() => z.enter(w), v));
      else {
        const { leave: $, delayLeave: P, afterLeave: D } = z, V = () => {
          a.ctx.isUnmounted ? i(w) : s(w, d, x);
        }, H = () => {
          const G = w._isLeaving || !!w[ls];
          w._isLeaving && w[ls](
            !0
            /* cancelled */
          ), z.persisted && !G ? V() : $(w, () => {
            V(), D && D();
          });
        };
        P ? P(w, V, H) : H();
      }
    else
      s(w, d, x);
  }, De = (a, d, x, k = !1, v = !1) => {
    const {
      type: w,
      props: E,
      ref: z,
      children: S,
      dynamicChildren: _,
      shapeFlag: F,
      patchFlag: $,
      dirs: P,
      cacheIndex: D,
      memo: V
    } = a;
    if (($ === -2 || _ && _.hasOnce) && (v = !1), z != null && (st(), Zt(z, null, x, a, !0), it()), D != null && (!a.ctx || a.ctx === d) && (d.renderCache[D] = void 0), F & 256) {
      d.ctx.deactivate(a);
      return;
    }
    const H = F & 1 && P, G = !Jt(a);
    let ne;
    if (G && (ne = E && E.onVnodeBeforeUnmount) && Ce(ne, d, a), F & 6)
      Ir(a.component, x, k);
    else {
      if (F & 128) {
        a.suspense.unmount(x, k);
        return;
      }
      H && dt(a, null, d, "beforeUnmount"), F & 64 ? a.type.remove(
        a,
        d,
        x,
        Lt,
        k
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (w !== Q || $ > 0 && $ & 64) ? Dt(
        _,
        d,
        x,
        !1,
        !0
      ) : (w === Q && $ & 384 || !v && F & 16) && Dt(S, d, x), k && ei(a);
    }
    const Ae = V != null && D == null;
    (G && (ne = E && E.onVnodeUnmounted) || H || Ae) && ue(() => {
      ne && Ce(ne, d, a), H && dt(a, null, d, "unmounted"), Ae && (a.el = null);
    }, x);
  }, ei = (a) => {
    const { type: d, el: x, anchor: k, transition: v } = a;
    if (d === Q) {
      Mr(x, k);
      return;
    }
    if (d === us) {
      I(a), v && !v.persisted && v.afterLeave && v.afterLeave();
      return;
    }
    const w = () => {
      i(x), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (a.shapeFlag & 1 && v && !v.persisted) {
      const { leave: E, delayLeave: z } = v, S = () => E(x, w);
      z ? z(a.el, w, S) : S();
    } else
      w();
  }, Mr = (a, d) => {
    let x;
    for (; a !== d; )
      x = p(a), i(a), a = x;
    i(d);
  }, Ir = (a, d, x) => {
    const { bum: k, scope: v, job: w, subTree: E, um: z, m: S, a: _ } = a;
    gi(S), gi(_), k && gn(k), v.stop(), w ? (w.flags |= 8, De(E, a, d, x)) : a.vnode.el && E && (E.transition = a.vnode.transition, De(E, a, d, x)), z && ue(z, d), ue(() => {
      a.isUnmounted = !0;
    }, d);
  }, Dt = (a, d, x, k = !1, v = !1, w = 0) => {
    for (let E = w; E < a.length; E++)
      De(a[E], d, x, k, v);
  }, un = (a) => {
    if (a.shapeFlag & 6)
      return un(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const d = p(a.anchor || a.el), x = d && d[$o];
    return x ? p(x) : d;
  };
  let ns = !1;
  const ti = (a, d, x) => {
    let k;
    a == null ? d._vnode && (De(d._vnode, null, null, !0), k = d._vnode.component) : y(
      d._vnode || null,
      a,
      d,
      null,
      null,
      null,
      x
    ), d._vnode = a, ns || (ns = !0, ui(k), EA(), ns = !1);
  }, Lt = {
    p: y,
    um: De,
    m: je,
    r: ei,
    mt: le,
    mc: de,
    pc: Ct,
    pbc: ut,
    n: un,
    o: e
  };
  return {
    render: ti,
    hydrate: void 0,
    createApp: Oo(ti)
  };
}
function as({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function pt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Xo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function VA(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (B(s) && B(i))
    for (let A = 0; A < s.length; A++) {
      const o = s[A];
      let r = i[A];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = i[A] = Ve(i[A]), r.el = o.el), !n && r.patchFlag !== -2 && VA(o, r)), r.type === Un && (r.patchFlag === -1 && (r = i[A] = Ve(r)), r.el = o.el), r.type === Ue && !r.el && (r.el = o.el);
    }
}
function el(e) {
  const t = e.slice(), n = [0];
  let s, i, A, o, r;
  const l = e.length;
  for (s = 0; s < l; s++) {
    const c = e[s];
    if (c !== 0) {
      if (i = n[n.length - 1], e[i] < c) {
        t[s] = i, n.push(s);
        continue;
      }
      for (A = 0, o = n.length - 1; A < o; )
        r = A + o >> 1, e[n[r]] < c ? A = r + 1 : o = r;
      c < e[n[A]] && (A > 0 && (t[s] = n[A - 1]), n[A] = s);
    }
  }
  for (A = n.length, o = n[A - 1]; A-- > 0; )
    n[A] = o, o = t[o];
  return n;
}
function WA(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : WA(t);
}
function gi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function GA(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? GA(t.subTree) : null;
}
const YA = (e) => e.__isSuspense;
function tl(e, t) {
  t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : _o(e);
}
const Q = /* @__PURE__ */ Symbol.for("v-fgt"), Un = /* @__PURE__ */ Symbol.for("v-txt"), Ue = /* @__PURE__ */ Symbol.for("v-cmt"), us = /* @__PURE__ */ Symbol.for("v-stc"), vt = [];
let he = null;
function C(e = !1) {
  vt.push(he = e ? null : []);
}
function HA() {
  vt.pop(), he = vt[vt.length - 1] || null;
}
let nn = 1;
function xi(e, t = !1) {
  nn += e, e < 0 && he && t && (he.hasOnce = !0);
}
function UA(e) {
  return e.dynamicChildren = nn > 0 ? he || gt : null, HA(), nn > 0 && he && he.push(e), e;
}
function M(e, t, n, s, i, A) {
  return UA(
    m(
      e,
      t,
      n,
      s,
      i,
      A,
      !0
    )
  );
}
function et(e, t, n, s, i) {
  return UA(
    Ye(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function KA(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Wt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ZA = ({ key: e }) => e ?? null, bn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || /* @__PURE__ */ ae(e) || Y(e) ? { i: xe, r: e, k: t, f: !!n } : e : null);
function m(e, t = null, n = null, s = 0, i = null, A = e === Q ? 0 : 1, o = !1, r = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ZA(t),
    ref: t && bn(t),
    scopeId: CA,
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
    shapeFlag: A,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: xe
  };
  return r ? (En(l, n), A & 128 && e.normalize(l)) : n && (l.shapeFlag |= se(n) ? 8 : 16), nn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  he && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || A & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && he.push(l), l;
}
const Ye = nl;
function nl(e, t = null, n = null, s = 0, i = null, A = !1) {
  if ((!e || e === Ro) && (e = Ue), KA(e)) {
    const r = Nt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && En(r, n), nn > 0 && !A && he && (r.shapeFlag & 6 ? he[he.indexOf(e)] = r : he.push(r)), r.patchFlag = -2, r;
  }
  if (dl(e) && (e = e.__vccOpts), t) {
    t = sl(t);
    let { class: r, style: l } = t;
    r && !se(r) && (t.class = ct(r)), X(l) && (/* @__PURE__ */ Vs(l) && !B(l) && (l = ke({}, l)), t.style = Ln(l));
  }
  const o = se(e) ? 1 : YA(e) ? 128 : Yn(e) ? 64 : X(e) ? 4 : Y(e) ? 2 : 0;
  return m(
    e,
    t,
    n,
    s,
    i,
    o,
    A,
    !0
  );
}
function sl(e) {
  return e ? /* @__PURE__ */ Vs(e) || OA(e) ? ke({}, e) : e : null;
}
function Nt(e, t, n = !1, s = !1) {
  const { props: i, ref: A, patchFlag: o, children: r, transition: l } = e, c = t ? il(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ZA(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && A ? B(A) ? A.concat(bn(t)) : [A, bn(t)] : bn(t)
    ) : A,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
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
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Nt(e.ssContent),
    ssFallback: e.ssFallback && Nt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return l && s && Gs(
    u,
    l.clone(u)
  ), u;
}
function qt(e = " ", t = 0) {
  return Ye(Un, null, e, t);
}
function J(e = "", t = !1) {
  return t ? (C(), et(Ue, null, e)) : Ye(Ue, null, e);
}
function Te(e) {
  return e == null || typeof e == "boolean" ? Ye(Ue) : B(e) ? Ye(
    Q,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : KA(e) ? Ve(e) : Ye(Un, null, String(e));
}
function Ve(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nt(e);
}
function En(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (B(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), En(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !OA(t) ? t._ctx = xe : i === 3 && xe && (xe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Y(t)) {
    if (s & 65) {
      En(e, { default: t });
      return;
    }
    t = { default: t, _ctx: xe }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [qt(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function il(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = ct([t.class, s.class]));
      else if (i === "style")
        t.style = Ln([t.style, s.style]);
      else if (Nn(i)) {
        const A = t[i], o = s[i];
        o && A !== o && !(B(A) && A.includes(o)) ? t[i] = A ? [].concat(A, o) : o : o == null && A == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Fn(i) && (t[i] = o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Ce(e, t, n, s = null) {
  Fe(e, t, 7, [
    n,
    s
  ]);
}
const Al = PA();
let rl = 0;
function ol(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || Al, A = {
    uid: rl++,
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
    scope: new Yr(
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
    propsOptions: Uo(s, i),
    emitsOptions: Lo(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: q,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: q,
    data: q,
    props: q,
    attrs: q,
    slots: q,
    refs: q,
    setupState: q,
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
  return A.ctx = { _: A }, A.root = t ? t.root : A, A.emit = Do.bind(null, A), e.ce && e.ce(A), A;
}
let rt = null;
const ll = () => rt || xe;
let $n, sn;
{
  const e = Dn(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (A) => {
      i.length > 1 ? i.forEach((o) => o(A)) : i[0](A);
    };
  };
  $n = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => rt = n
  ), sn = t(
    "__VUE_SSR_SETTERS__",
    (n) => An = n
  );
}
const Us = (e) => {
  const t = rt;
  return $n(e), e.scope.on(), () => {
    e.scope.off(), $n(t);
  };
}, bi = () => {
  rt && rt.scope.off(), $n(null);
};
function JA(e) {
  return e.vnode.shapeFlag & 4;
}
let An = !1;
function cl(e, t = !1, n = !1) {
  t && sn(t);
  const { props: s, children: i } = e.vnode, A = JA(e);
  Yo(e, s, A, t), Zo(e, i, n || t);
  const o = A ? al(e, t) : void 0;
  return t && sn(!1), o;
}
function al(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, No);
  const { setup: s } = n;
  if (s) {
    st();
    const i = e.setupContext = s.length > 1 ? fl(e) : null, A = Us(e), o = cn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), r = tA(o);
    if (it(), A(), (r || e.sp) && !Jt(e) && Mo(e), r) {
      if (o.then(bi, bi), t)
        return o.then((l) => {
          sn(!0);
          try {
            yi(e, l, t);
          } finally {
            sn(!1);
          }
        }).catch((l) => {
          Wn(l, e, 0);
        });
      e.asyncDep = o;
    } else
      yi(e, o);
  } else
    QA(e);
}
function yi(e, t, n) {
  Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : X(t) && (e.setupState = wA(t)), QA(e);
}
function QA(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || bt);
}
const ul = {
  get(e, t) {
    return oe(e, "get", ""), e[t];
  }
};
function fl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ul),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Kn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(wA(uo(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Qt)
        return Qt[n](e);
    },
    has(t, n) {
      return n in t || n in Qt;
    }
  })) : e.proxy;
}
function dl(e) {
  return Y(e) && "__vccOpts" in e;
}
const ie = (e, t) => /* @__PURE__ */ go(e, t, An), pl = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ms;
const vi = typeof window < "u" && window.trustedTypes;
if (vi)
  try {
    Ms = /* @__PURE__ */ vi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const qA = Ms ? (e) => Ms.createHTML(e) : (e) => e, hl = "http://www.w3.org/2000/svg", ml = "http://www.w3.org/1998/Math/MathML", Be = typeof document < "u" ? document : null, _i = Be && /* @__PURE__ */ Be.createElement("template"), gl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? Be.createElementNS(hl, e) : t === "mathml" ? Be.createElementNS(ml, e) : n ? Be.createElement(e, { is: n }) : Be.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => Be.createTextNode(e),
  createComment: (e) => Be.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Be.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, i, A) {
    const o = n ? n.previousSibling : t.lastChild;
    if (i && (i === A || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === A || !(i = i.nextSibling)); )
        ;
    else {
      _i.innerHTML = qA(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const r = _i.content;
      if (s === "svg" || s === "mathml") {
        const l = r.firstChild;
        for (; l.firstChild; )
          r.appendChild(l.firstChild);
        r.removeChild(l);
      }
      t.insertBefore(r, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, xl = /* @__PURE__ */ Symbol("_vtc");
function bl(e, t, n) {
  const s = e[xl];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const wi = /* @__PURE__ */ Symbol("_vod"), yl = /* @__PURE__ */ Symbol("_vsh"), vl = /* @__PURE__ */ Symbol(""), _l = /(?:^|;)\s*display\s*:/;
function wl(e, t, n) {
  const s = e.style, i = se(n);
  let A = !1;
  if (n && !i) {
    if (t)
      if (se(t))
        for (const o of t.split(";")) {
          const r = o.slice(0, o.indexOf(":")).trim();
          n[r] == null && Yt(s, r, "");
        }
      else
        for (const o in t)
          n[o] == null && Yt(s, o, "");
    for (const o in n) {
      o === "display" && (A = !0);
      const r = n[o];
      r != null ? Sl(
        e,
        o,
        !se(t) && t ? t[o] : void 0,
        r
      ) || Yt(s, o, r) : Yt(s, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = s[vl];
      o && (n += ";" + o), s.cssText = n, A = _l.test(n);
    }
  } else t && e.removeAttribute("style");
  wi in e && (e[wi] = A ? s.display : "", e[yl] && (s.display = "none"));
}
const hn = /\s*!important$/;
function Yt(e, t, n) {
  if (B(n))
    n.forEach((s) => Yt(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    hn.test(n) ? e.setProperty(t, n.replace(hn, ""), "important") : e.setProperty(t, n);
  else {
    const s = kl(e, t);
    hn.test(n) ? e.setProperty(
      St(s),
      n.replace(hn, ""),
      "important"
    ) : e[s] = n;
  }
}
const ki = ["Webkit", "Moz", "ms"], fs = {};
function kl(e, t) {
  const n = fs[t];
  if (n)
    return n;
  let s = _e(t);
  if (s !== "filter" && s in e)
    return fs[t] = s;
  s = iA(s);
  for (let i = 0; i < ki.length; i++) {
    const A = ki[i] + s;
    if (A in e)
      return fs[t] = A;
  }
  return t;
}
function Sl(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && se(s) && n === s;
}
const Si = "http://www.w3.org/1999/xlink";
function zi(e, t, n, s, i, A = Br(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Si, t.slice(6, t.length)) : e.setAttributeNS(Si, t, n) : n == null || A && !rA(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    A ? "" : Re(n) ? String(n) : n
  );
}
function Ei(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? qA(n) : n);
    return;
  }
  const A = e.tagName;
  if (t === "value" && A !== "PROGRESS" && // custom elements may use _value internally
  !A.includes("-")) {
    const r = A === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (r !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const r = typeof e[t];
    r === "boolean" ? n = rA(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function mt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function zl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const $i = /* @__PURE__ */ Symbol("_vei");
function El(e, t, n, s, i = null) {
  const A = e[$i] || (e[$i] = {}), o = A[t];
  if (s && o)
    o.value = s;
  else {
    const [r, l] = Ml(t);
    if (s) {
      const c = A[t] = Pl(
        s,
        i
      );
      mt(e, r, c, l);
    } else o && (zl(e, r, o, l), A[t] = void 0);
  }
}
const $l = /(Once|Passive|Capture)$/, Cl = /^on:?(?:Once|Passive|Capture)$/;
function Ml(e) {
  let t, n;
  for (; (n = e.match($l)) && !Cl.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : St(e.slice(2)), t];
}
let ds = 0;
const Il = /* @__PURE__ */ Promise.resolve(), Tl = () => ds || (Il.then(() => ds = 0), ds = Date.now());
function Pl(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (B(i)) {
      const A = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        A.call(s), s._stopped = !0;
      };
      const o = i.slice(), r = [s];
      for (let l = 0; l < o.length && !s._stopped; l++) {
        const c = o[l];
        c && Fe(
          c,
          t,
          5,
          r
        );
      }
    } else
      Fe(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = Tl(), n;
}
const Ci = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Rl = (e, t, n, s, i, A) => {
  const o = i === "svg";
  t === "class" ? bl(e, s, o) : t === "style" ? wl(e, n, s) : Nn(t) ? Fn(t) || El(e, t, n, s, A) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Nl(e, t, s, o)) ? (Ei(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && zi(e, t, s, o, A, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Fl(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !se(s))) ? Ei(e, _e(t), s, A, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), zi(e, t, s, o));
};
function Nl(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ci(t) && Y(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Ci(t) && se(n) ? !1 : t in e;
}
function Fl(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = _e(t);
  return Array.isArray(n) ? n.some((i) => _e(i) === s) : Object.keys(n).some((i) => _e(i) === s);
}
const Cn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return B(t) ? (n) => gn(t, n) : t;
};
function Ol(e) {
  e.target.composing = !0;
}
function Mi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const xt = /* @__PURE__ */ Symbol("_assign"), mn = /* @__PURE__ */ Symbol("_initialValue");
function ps(e, t, n) {
  return t && (e = e.trim()), n && (e = jn(e)), e;
}
const Ii = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[mn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[mn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[xt] = Cn(i);
    const A = s || i.props && i.props.type === "number";
    mt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[xt](ps(e.value, n, A));
    }), (n || A) && mt(e, "change", () => {
      e.value = ps(e.value, n, A);
    }), t || (mt(e, "compositionstart", Ol), mt(e, "compositionend", Mi), mt(e, "change", Mi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", A = e[mn];
    delete e[mn], A !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== A ? e[xt](ps(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: A } }, o) {
    if (e[xt] = Cn(o), e.composing) return;
    const r = (A || e.type === "number") && !/^0\d/.test(e.value) ? jn(e.value) : e.value, l = t ?? "";
    if (r === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === l) || (e.value = l);
  }
}, XA = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, mt(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? jn(Mn(l)) : Mn(l)
      ), A = e.multiple, o = A ? _t(e._modelValue) ? new Set(i) : i : i[0], r = e._pendingValue = [
        A,
        A ? B(o) ? i.slice() : i : o
      ];
      try {
        e[xt](o);
      } finally {
        SA(() => {
          e._pendingValue === r && (e._pendingValue = void 0);
        });
      }
    }), e[xt] = Cn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ti(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[xt] = Cn(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !jl(t, n[1], n[0])) && Ti(e, t);
  }
};
function jl(e, t, n) {
  if (!n || B(e)) return nt(e, t);
  if (_t(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function Ti(e, t) {
  const n = e.multiple, s = B(t);
  if (!(n && !s && !_t(t))) {
    for (let i = 0, A = e.options.length; i < A; i++) {
      const o = e.options[i], r = Mn(o);
      if (n)
        if (s) {
          const l = typeof r;
          l === "string" || l === "number" ? o.selected = t.some((c) => String(c) === String(r)) : o.selected = Gr(t, r) > -1;
        } else
          o.selected = t.has(r);
      else if (nt(Mn(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Mn(e) {
  return "_value" in e ? e._value : e.value;
}
const Dl = ["ctrl", "shift", "alt", "meta"], Ll = {
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
  exact: (e, t) => Dl.some((n) => e[`${n}Key`] && !t.includes(n))
}, Bl = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((i, ...A) => {
    for (let o = 0; o < t.length; o++) {
      const r = Ll[t[o]];
      if (r && r(i, t)) return;
    }
    return e(i, ...A);
  }));
}, Vl = /* @__PURE__ */ ke({ patchProp: Rl }, gl);
let Pi;
function Wl() {
  return Pi || (Pi = Qo(Vl));
}
const Gl = ((...e) => {
  const t = Wl().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Hl(s);
    if (!i) return;
    const A = t._component;
    !Y(A) && !A.render && !A.template && (A.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, Yl(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function Yl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Hl(e) {
  return se(e) ? document.querySelector(e) : e;
}
const Ul = "zhonglou", Kl = "钟楼", Zl = "1.2.0", Jl = "S", Ql = 10, ql = "【副本进行中：钟楼】", Xl = [], ec = { briefingName: "钟楼" }, tc = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, nc = { type: "nights", template: "剩余{n}夜" }, sc = "至第四日日出", ic = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], Ac = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", rc = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], oc = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], lc = [{ title: "游玩说明", md: `## 副本概况
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
- 1F文具柜：一沓纸、两支铅笔。因为道具栏冻结，这是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], cc = {
  id: Ul,
  name: Kl,
  version: Zl,
  level: Jl,
  players: Ql,
  token: ql,
  legacyKeys: Xl,
  detect: ec,
  time: tc,
  remaining: nc,
  deadline: sc,
  roles: ic,
  rolesNote: Ac,
  phases: rc,
  events: oc,
  docs: lc
}, ac = "jingjie", uc = "境界游乐园", fc = "1.0.0", dc = "A", pc = "【副本进行中：境界游乐园】", hc = [], mc = { briefingName: "境界游乐园" }, gc = { type: "none" }, xc = { type: "fromPanel" }, bc = [], yc = [], vc = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], _c = {
  id: ac,
  name: uc,
  version: fc,
  level: dc,
  token: pc,
  legacyKeys: hc,
  detect: mc,
  time: gc,
  remaining: xc,
  phases: bc,
  events: yc,
  docs: vc
}, wc = "kaoshi", kc = "考试", Sc = "1.1.0", zc = "A", Ec = "【副本进行中：考试】", $c = [], Cc = { briefingName: "考试" }, Mc = { type: "countdown", minutesPerRound: 3 }, Ic = { type: "fromPanel" }, Tc = "至考试结束", Pc = [{ id: "main", name: "考试", cap: 100, next: null }], Rc = [], Nc = [], Fc = {
  id: wc,
  name: kc,
  version: Sc,
  level: zc,
  token: Ec,
  legacyKeys: $c,
  detect: Cc,
  time: Mc,
  remaining: Ic,
  deadline: Tc,
  phases: Pc,
  events: Rc,
  docs: Nc
}, Oc = "xiyan", jc = "喜宴", Dc = "1.1.0", Lc = "D", Bc = "【副本进行中：喜宴】", Vc = [], Wc = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, Gc = { type: "countdown", minutesPerRound: 3 }, Yc = { type: "fromPanel" }, Hc = "至天亮", Uc = [{ id: "main", name: "喜宴", cap: 160, next: null }], Kc = [], Zc = [], Jc = {
  id: Oc,
  name: jc,
  version: Dc,
  level: Lc,
  token: Bc,
  legacyKeys: Vc,
  detect: Wc,
  time: Gc,
  remaining: Yc,
  deadline: Hc,
  phases: Uc,
  events: Kc,
  docs: Zc
}, Qc = "youxi", qc = "游戏", Xc = "1.1.0", ea = "C", ta = "【副本进行中：游戏】", na = [], sa = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, ia = { type: "countdown", minutesPerRound: 8 }, Aa = { type: "fromPanel" }, ra = "至结算", oa = [{ id: "main", name: "游戏", cap: 90, next: null }], la = [], ca = [], aa = {
  id: Qc,
  name: qc,
  version: Xc,
  level: ea,
  token: ta,
  legacyKeys: na,
  detect: sa,
  time: ia,
  remaining: Aa,
  deadline: ra,
  phases: oa,
  events: la,
  docs: ca
}, ua = "wuming", fa = "污名", da = "1.1.0", pa = "B", ha = "4-8", ma = "【副本进行中：污名】", ga = ["污名"], xa = { briefingName: "污名" }, ba = { type: "countdown", minutesPerRound: 3 }, ya = { type: "countdown", template: "剩余{m}分钟" }, va = "至收播", _a = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], wa = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], ka = [], Sa = !0, za = {
  id: ua,
  name: fa,
  version: da,
  level: pa,
  players: ha,
  token: ma,
  legacyKeys: ga,
  detect: xa,
  time: ba,
  remaining: ya,
  deadline: va,
  phases: _a,
  events: wa,
  docs: ka,
  disableLive: Sa
}, Ea = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function Tt(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const $a = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function Ri(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll($a)) {
    const i = Number(s[1]), A = s[2];
    n = !0, A === "天" ? t += i * 1440 : A === "小时" || A === "个小时" || A === "h" || A === "H" ? t += i * 60 : t += i;
  }
  return n ? Math.round(t) : null;
}
function er(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: Ri(t), total: n === void 0 ? null : Ri(n) };
}
function Ca(e, t) {
  return e.phases.find((n) => n.id === t);
}
function rn(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); )
    n.push(i), s.add(i.id), i = Ca(e, i.next);
  return n;
}
function tr(e, t) {
  return rn(e, t).filter((n) => n.night).length;
}
function Ma(e, t, n) {
  if (rn(e, t).some((i) => i.id === n.id)) return t;
  const s = e.phases[0];
  return s && rn(e, s).some((i) => i.id === n.id) ? s : n;
}
function hs(e, t, n, s, i) {
  if (!e.phases.length || !e.phases.some((f) => f.id === t.id)) return;
  let A = rn(e, n), o = A.findIndex((f) => f.id === t.id);
  o < 0 && (A = rn(e, t), o = 0);
  const r = A.reduce((f, p) => f + Math.max(0, p.cap), 0), l = Math.max(0, t.cap - s) + A.slice(o + 1).reduce((f, p) => f + Math.max(0, p.cap), 0), c = t.deadline ?? A[0].deadline ?? e.deadline, u = { x: l, y: r, deadline: c };
  if (e.time.type === "countdown") {
    const f = e.time.minutesPerRound, p = e.time.totalMinutes, h = p && p > 0 ? p : r * f;
    let b = p && p > 0 && r > 0 ? Math.round(h * l / r) : l * f;
    const y = er(i).remaining;
    y !== null && (b = Math.min(b, y - f)), b = Math.max(0, b), Object.assign(u, { minutes: b, total: h, text: `约剩${Tt(b)}/${Tt(h)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) u.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const f = e.remaining.template.replace("{n}", String(tr(e, t)));
      u.text = c ? `${c}·${f}` : f;
    } else c && (u.text = c);
  return u;
}
const on = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function nr(e, t, n = on) {
  const s = e ?? "", i = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), A = i ? Math.max(1, Number(i[1])) : Math.max(1, Math.round(n[t] ?? on[t])), o = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!o) return { rounds: A };
  const r = Number(o[1]), l = Math.round(o[2] === "天" ? r * 1440 : o[2].includes("小时") ? r * 60 : r);
  return l <= 0 ? { rounds: A } : { rounds: A, totalMinutes: l, minutesPerRound: Math.max(1, Math.round(l / A)) };
}
const In = "generic", Is = [cc, _c, Fc, Jc, aa, za], Ia = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(Ea)
  }
};
function Ta(e, t) {
  const n = Ia[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const sr = ["D", "C", "B", "A", "S"];
function ir(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (c) => {
    (typeof n[c] != "string" || !n[c].trim()) && t.push(`缺少字段或不是文本：${c}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === In && t.push(`id 不能是保留字 ${In}`), sr.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((c) => typeof c != "string")) && t.push("legacyKeys 必须是文本数组"), !n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName ? t.push("缺少 detect.briefingName") : n.detect.patterns !== void 0 && (!Array.isArray(n.detect.patterns) || n.detect.patterns.some((c) => typeof c != "string")) && t.push("detect.patterns 必须是文本数组");
  const i = n.time;
  !i || !["none", "clock", "countdown"].includes(i.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (i.type === "clock" && (typeof i.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(i.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), i.type !== "none" && (typeof i.minutesPerRound != "number" || i.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"), i.type === "countdown" && i.totalMinutes !== void 0 && (typeof i.totalMinutes != "number" || i.totalMinutes <= 0) && t.push("time.totalMinutes 必须是正数"));
  const A = n.remaining;
  !A || !["nights", "countdown", "fromPanel"].includes(A.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : A.type !== "fromPanel" && typeof A.template != "string" && t.push("remaining.template 必须是文本"), A?.type === "countdown" && i?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.deadline !== void 0 && typeof n.deadline != "string" && t.push("deadline 必须是文本"), n.disableLive !== void 0 && typeof n.disableLive != "boolean" && t.push("disableLive 必须是 true 或 false"), n.casino !== void 0 && typeof n.casino != "boolean" && t.push("casino 必须是 true 或 false"), n.roles !== void 0 && (!Array.isArray(n.roles) || n.roles.some((c) => typeof c != "string" || !c)) && t.push("roles 必须是文本数组");
  const o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
  Array.isArray(n.phases) ? (n.phases.forEach((c, u) => {
    if (!c || typeof c.id != "string" || typeof c.name != "string") {
      t.push(`phases[${u}] 缺少 id 或 name`);
      return;
    }
    o.has(c.id) && t.push(`阶段 id 重复：${c.id}`), r.has(c.name) && t.push(`阶段名称重复：${c.name}`), o.add(c.id), r.add(c.name), (typeof c.cap != "number" || c.cap < 1 || !Number.isInteger(c.cap)) && t.push(`阶段 ${c.id} 的 cap 必须是正整数`), c.next !== null && typeof c.next != "string" && t.push(`阶段 ${c.id} 的 next 必须是阶段 id 或 null`), c.deadline !== void 0 && typeof c.deadline != "string" && t.push(`阶段 ${c.id} 的 deadline 必须是文本`);
  }), n.phases.forEach((c) => {
    c && typeof c.next == "string" && !o.has(c.next) && t.push(`阶段 ${c.id} 的 next 指向不存在的阶段：${c.next}`);
  }), n.phases.length && n.phases[0]?.byTag && t.push("第一个阶段不能是 byTag 阶段")) : t.push("phases 必须是数组");
  const l = /* @__PURE__ */ new Set();
  return Array.isArray(n.events) ? n.events.forEach((c, u) => {
    if (!c || typeof c.id != "string" || typeof c.text != "string") {
      t.push(`events[${u}] 缺少 id 或 text`);
      return;
    }
    l.has(c.id) && t.push(`事件 id 重复：${c.id}`), l.add(c.id), o.has(c.phase) || t.push(`事件 ${c.id} 的 phase 不存在：${c.phase}`), (!Number.isInteger(c.from) || !Number.isInteger(c.to) || c.from < 1 || c.to < c.from) && t.push(`事件 ${c.id} 的轮次区间无效`), c.kind !== "event" && c.kind !== "directive" && t.push(`事件 ${c.id} 的 kind 必须是 event 或 directive`), c.if !== void 0 && typeof c.if != "string" && t.push(`事件 ${c.id} 的 if 必须是文本`);
  }) : t.push("events 必须是数组"), Array.isArray(n.docs) ? n.docs.forEach((c, u) => {
    !c || typeof c.title != "string" ? t.push(`docs[${u}] 缺少 title`) : c.md !== void 0 && typeof c.md != "string" ? t.push(`docs[${u}].md 必须是文本`) : c.image !== void 0 && typeof c.image != "string" && t.push(`docs[${u}].image 必须是文本`);
  }) : t.push("docs 必须是数组"), t;
}
function Ar(e) {
  return sr.includes(e.level ?? "") ? e.level : "D";
}
function rr(e, t = on) {
  const n = Ar(e), s = nr(e.limit, n, t), i = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, A = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / i)) : void 0;
  return {
    id: In,
    name: e.name,
    version: "1.0.0",
    level: n,
    token: `【副本进行中：${e.name}】`,
    legacyKeys: [],
    detect: { briefingName: e.name },
    // 总时长按简报的值；每轮分钟四舍五入只用于“每轮至少减去”的判断
    time: A ? { type: "countdown", minutesPerRound: A, totalMinutes: s.totalMinutes } : { type: "none" },
    remaining: { type: "fromPanel" },
    phases: [{ id: "main", name: e.name, cap: i, next: null }],
    events: [],
    docs: []
  };
}
function Ks(e) {
  const t = new Set(Is.map((n) => n.id));
  return [...Is, ...e.filter((n) => !t.has(n.id))];
}
const Pa = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, Ra = /<阶段切换>([\s\S]*?)<\/阶段切换>/, Na = /<副本结算>([\s\S]*?)<\/副本结算>/, or = /<副本>([\s\S]*?)<\/副本>/, Fa = /<角色登记>([\s\S]*?)<\/角色登记>/, Oa = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/;
function lr(e) {
  const t = Pa.exec(e ?? "");
  if (!t) return null;
  const n = { name: t[1] }, s = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), i = (o) => {
    const r = new RegExp(`${o}\\s*[：:]\\s*([^」』\\n]+)`).exec(s);
    return r ? r[1].trim() : void 0;
  }, A = i("等级");
  return A && (n.level = A.replace(/级$/, "").trim().toUpperCase()), n.goal = i("目标"), n.limit = i("时限"), n.players = i("人数"), n;
}
function ja(e) {
  const t = Ra.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function cr(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const i = n.slice(0, s).trim(), A = n.slice(s + 1).trim();
    i && (t[i] = A);
  }
  return t;
}
function ar(e) {
  const t = Na.exec(e ?? "");
  if (!t) return null;
  const n = cr(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function ur(e) {
  const t = Fa.exec(e ?? "");
  if (!t) return null;
  const n = cr(t[1]);
  return Object.keys(n).length ? n : null;
}
function fr(e) {
  const t = or.exec(e ?? "");
  if (!t) return null;
  const n = { tasks: [] };
  let s = null;
  for (const i of t[1].split(`
`)) {
    const A = i.trim();
    if (!A) continue;
    const o = /^(时限|进度条|任务|ps|PS|Ps)\s*[：:]\s*(.*)$/.exec(A);
    if (o) {
      const r = o[1].toLowerCase(), l = o[2].trim();
      r === "时限" ? (n.limit = l, s = null) : r === "进度条" ? (n.progressBar = l, s = null) : r === "任务" ? (l && n.tasks.push(l), s = "tasks") : (n.ps = l, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(A)) {
      s = null;
      continue;
    }
    s === "tasks" ? n.tasks.push(A) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${A}` : A);
  }
  return n;
}
function Da(e) {
  const t = Oa.exec(e ?? "");
  return t ? t[2] : null;
}
function ms(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (n(i)) return i;
    s.add(i.id), i = i.next ? e.phases.find((A) => A.id === i.next) : void 0;
  }
  return null;
}
function La(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((r) => r.id === t.id)) return null;
  const i = (r) => !!r.clock && !r.night;
  let A = null, o = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      A = ms(e, t, i), o = A?.cap ?? 0;
      break;
    case "晚饭":
      A = ms(e, t, i), A && (o = Math.ceil(A.cap * 0.75), A.id === t.id && o <= n && (o = A.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      A = ms(e, t, (r) => !!r.night), o = A?.cap ?? 0;
      break;
  }
  return !A || A.id === t.id && o <= n + 1 ? null : { phase: A.id, round: o, label: `${A.name}第${o}轮` };
}
const Ba = /<状态栏>([\s\S]*?)<\/状态栏>/;
function Va(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function gs(e, t) {
  const n = Va(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const xs = /* @__PURE__ */ new Map();
function Wa(e, t) {
  const n = `${e}\0${t}`;
  if (!xs.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (i) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, i);
    }
    xs.set(n, s);
  }
  return xs.get(n);
}
function Ga(e, t) {
  const n = String(e ?? ""), s = (r, l) => r ? { signal: l, pack: r, info: { name: r.name, level: r.level } } : null, i = lr(n);
  if (i)
    return { signal: 1, pack: t.find((l) => l.detect.briefingName === i.name), info: i };
  const A = or.exec(n);
  if (A) {
    const r = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(A[1]), l = r && s(gs(t, r[1]), 2);
    if (l) return l;
  }
  for (const r of n.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const l = s(gs(t, r[1]), 3);
    if (l) return l;
  }
  const o = Ba.exec(n);
  if (o) {
    for (const r of o[1].split(`
`))
      if (r.includes("地点"))
        for (const l of r.matchAll(/副本《([^》]+)》/g)) {
          const c = s(gs(t, l[1]), 4);
          if (c) return c;
        }
  }
  for (const r of t)
    for (const l of r.detect.patterns ?? []) {
      const c = Wa(r.id, l);
      if (c && c.test(n)) return s(r, 5);
    }
  return null;
}
const Ni = 5, Ya = { id: "_open", name: "进行中", cap: 0, next: null };
function Ft(e) {
  return !!e && !e.is_user && !e.is_system;
}
function Ha(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function dr(e, t, n) {
  const s = Ha(e) + Math.max(0, n - 1) * t, i = Math.floor(s / 60) % 24, A = (s % 60 + 60) % 60;
  return `${i % 12 === 0 ? 12 : i % 12}:${String(A).padStart(2, "0")}`;
}
function Fi(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return dr(e.time.dayStart, e.time.minutesPerRound, n);
}
function pr(e) {
  return e.phases.length ? e.phases : [Ya];
}
function yn(e, t) {
  return pr(e).find((n) => n.id === t);
}
function Oi(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let i = t;
  for (; i && !s.has(i.id); ) {
    if (i.id === n) return !0;
    s.add(i.id), i = yn(e, i.next);
  }
  return !1;
}
function ji(e, t, n, s) {
  const i = n + 1, A = e.events.filter((o) => o.phase === t.id);
  if (s) {
    const o = t.id === s.phase ? s.round : t.cap;
    if (o > i) {
      let r = A.map((c, u) => ({ e: c, i: u })).filter(({ e: c }) => c.from >= i && c.from <= o).sort((c, u) => c.e.from - u.e.from || c.i - u.i).map(({ e: c }) => c), l = o;
      return r.length > Ni && (l = r[Ni - 1].from, r = r.filter((c) => c.from <= l)), { phase: t, round: l, events: r, skipFrom: i };
    }
  }
  return { phase: t, round: i, events: A.filter((o) => o.from === i) };
}
function Ua(e, t, n) {
  const s = t.entryIndex;
  if (!Ft(e[s])) return null;
  const i = pr(n);
  let A = i[0], o = i[0], r = 0, l, c = !1, u, f, p = null, h, b, y;
  const L = /* @__PURE__ */ new Set(), j = {}, N = /* @__PURE__ */ new Map();
  for (const te of t.manual ?? [])
    N.has(te.atIndex) || N.set(te.atIndex, []), N.get(te.atIndex).push(te);
  const O = (te) => {
    n.phases.length && (o = Ma(n, o, te)), A = te, r = 0, p && !Oi(n, A, p.phase) && (p = null);
  };
  for (let te = s; te < e.length; te++) {
    const an = e[te];
    if (!c && Ft(an)) {
      const le = ji(n, A, r, p);
      r = le.round, le.events.forEach((Ze) => L.add(Ze.id)), j[te] = {
        phase: A.id,
        round: r,
        events: le.events.map((Ze) => Ze.id),
        skipFrom: le.skipFrom,
        limit: hs(n, A, o, r, l)
      }, p && A.id === p.phase && r >= p.round && (p = null);
      const Se = String(an.mes ?? ""), Et = fr(Se);
      Et && (b = Et), l = Et?.limit;
      const $t = ur(Se);
      $t && (y = $t);
      const Ct = ar(Se);
      if (Ct)
        c = !0, u = "tag", f = te, h = Ct;
      else {
        const Ze = ja(Se), jt = Ze ? i.find((je) => je.name === Ze) : void 0;
        if (jt && n.phases.length)
          O(jt);
        else if (A.cap > 0 && r >= A.cap && A.next) {
          const je = yn(n, A.next);
          je && O(je);
        }
      }
    }
    for (const le of N.get(te) ?? []) {
      if (c) break;
      switch (le.kind) {
        case "skip": {
          p = yn(n, le.targetPhase) && Oi(n, A, le.targetPhase) ? { phase: le.targetPhase, round: le.targetRound } : null;
          break;
        }
        case "setPhase": {
          const Se = yn(n, le.phase);
          Se && (p = null, O(Se));
          break;
        }
        case "setRound":
          r = Math.max(0, Math.floor(le.round)), p = null;
          break;
        case "end":
          c = !0, u = "manual", f = te;
          break;
      }
    }
  }
  const I = c ? null : ji(n, A, r, p), K = I ? I.round : r + 1, ee = A.cap > 0, fe = n.events.filter((te) => L.has(te.id)).map((te) => te.id), de = c ? void 0 : hs(n, A, o, K, l), Oe = c ? void 0 : hs(n, A, o, r);
  let ut;
  const ft = n.remaining;
  return !c && ft.type === "nights" && n.phases.length && !A.byTag && !A.frozen ? ut = ft.template.replace("{n}", String(tr(n, A))) : !c && ft.type === "countdown" && de?.minutes !== void 0 && (ut = ft.template.replace("{m}", String(de.minutes))), {
    phase: A,
    round: r,
    nextRound: K,
    clock: c ? void 0 : Fi(n, A, K),
    currentClock: Fi(n, A, r),
    remainingText: ut,
    limit: de,
    roundsLeft: Oe ? { x: Oe.x, y: Oe.y } : void 0,
    chainStart: n.phases.length ? o.id : void 0,
    ended: c,
    endedBy: u,
    endIndex: f,
    firedEvents: fe,
    warn: !c && ee && K >= A.cap - 2,
    isLastRound: !c && ee && K === A.cap,
    overdue: !c && ee && !A.next && K > A.cap,
    next: I,
    skipGoal: p,
    settlement: h,
    panel: b,
    rolesFromChat: y,
    perMessage: j,
    entryIndex: s
  };
}
const hr = "rlzc_token", mr = "rlzc_progress", gr = "rlzc_turn", Ka = [hr, mr, gr], Zn = { token: "", progress: "", turn: "", injected: [] };
function Za(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Di(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const i = new RegExp(`(?<!\\{)\\{(${s.map(Za).join("|")})\\}(?!\\})`, "g");
  return e.replace(i, (A, o) => n?.[o]?.trim() || o);
}
function Ja(e, t) {
  if (!t.length) return "";
  const n = e.events.map((l) => l.id), s = t.map((l) => n.indexOf(l)).filter((l) => l >= 0).sort((l, c) => l - c), i = [];
  let A = s[0], o = s[0];
  const r = () => i.push(A === o ? n[A] : `${n[A]}–${n[o]}`);
  for (let l = 1; l < s.length; l++) {
    if (s[l] === o + 1) {
      o = s[l];
      continue;
    }
    r(), A = o = s[l];
  }
  return r(), i.join("、");
}
function Li(e, t, n) {
  let s = Di(e.text, t, n);
  return e.to > e.from && (s = `在本阶段第${e.from}到${e.to}轮之间发生：${s}`), e.if && (s += `（条件：${Di(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${s}`;
}
function Qa(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function qa(e, t, n, s = {}) {
  if (!t || !n || t.ended || n.status !== "active") return Zn;
  const i = s.roles, A = e.phases.length > 0, o = t.next, r = [`副本：${e.name}（${e.level}级）`], l = t.limit;
  if (A)
    r.push(`阶段：${t.phase.name}`), r.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), l && r.push(`剩余${l.x}/${l.y}轮`), t.clock && r.push(`钟时：${t.clock}`), l?.text && r.push(`时限：${l.text}`), e.remaining.type === "countdown" && t.remainingText && r.push(t.remainingText), l?.deadline && !l.text?.includes(l.deadline) && r.push(`截止：${l.deadline}`);
  else {
    r.push(`本轮：第${t.nextRound}轮`), t.clock && r.push(`钟时：${t.clock}`);
    const y = s.panelLimit || s.briefing?.limit;
    y && r.push(`时限：${y}`);
  }
  const c = ["［副本进度·仅供AI］", r.join("　")];
  if (s.briefing?.goal && (!A || e.id === "generic") && c.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const y = e.roles.filter((L) => i?.[L]);
    c.push(
      y.length ? `角色登记：${e.roles.map((L) => `${L}=${i?.[L] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const u = Ja(e, t.firedEvents);
  u && c.push(`已发生事件：${u}`);
  const f = [];
  o.skipFrom !== void 0 && f.push(`玩家选择快进：本轮从「${t.phase.name}」第${o.skipFrom}轮快进到第${o.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const p = o.events.filter((y) => y.kind === "event"), h = o.events.filter((y) => y.kind === "directive");
  if (p.length && (f.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), p.forEach((y) => f.push(Li(y, e, i)))), h.length && (f.push("本轮写作要求："), h.forEach((y) => f.push(Li(y, e, i)))), t.isLastRound ? f.push(Qa(t)) : t.overdue && f.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && f.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && f.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some((y) => i?.[y])) {
    let y = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((L) => `${L}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (y += "死者不得是{{user}}或其同伴。"), f.push(y);
  }
  let b;
  return l?.text && (l.minutes !== void 0 ? (f.push(
    `本轮<副本>的时限一栏写：${l.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), b = { text: l.text, minutes: l.minutes, total: l.total }) : (f.push(`本轮<副本>的时限一栏写：${l.text}（照抄）。`), b = { text: l.text })), {
    token: e.token,
    progress: c.join(`
`),
    turn: f.length ? ["［本轮指令·仅供AI］", ...f].join(`
`) : "",
    injected: o.events.map((y) => y.id),
    limit: b
  };
}
const tt = "rlzc";
function Xa() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function eu(e, t, n) {
  return {
    id: Xa(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function tu(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function nu(e, t) {
  return e.packId === In ? e.briefing ? rr(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function su(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id) {
    const s = e[t.entryIndex];
    return s && !s.is_user && !s.is_system ? t.entryIndex : -1;
  }
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function iu(e, t) {
  const n = su(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((i) => ({ ...i, atIndex: i.atIndex + s }))), t.manual = t.manual.filter((i) => i.atIndex < e.length && i.atIndex >= t.entryIndex), !0;
}
function xr(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const Bi = "rlzc_declined";
function Zs(e, t) {
  return `${e}:${t}`;
}
function br(e) {
  return !!e && !e.is_user && !e.is_system;
}
function Jn(e, t, n) {
  if (!br(e[t])) return null;
  const s = Ga(String(e[t].mes ?? ""), n);
  return s ? { ...s, index: t } : null;
}
function Au(e, t, n, s, i = []) {
  for (let A = Math.max(0, n); A <= Math.min(s, e.length - 1); A++) {
    const o = Jn(e, A, t);
    if (o && !i.includes(Zs(A, o.info.name))) return o;
  }
  return null;
}
function ru(e, t, n = [], s = Is, i = 0) {
  if (t?.status === "active") return null;
  let A = -1;
  for (let r = Math.max(0, i); r < e.length; r++) if (br(e[r])) {
    A = r;
    break;
  }
  if (A < 0 || t && t.entryIndex === A) return null;
  const o = Jn(e, A, s);
  return !o || n.includes(Zs(A, o.info.name)) ? null : o;
}
const ou = 1, lu = 0;
function me() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function cu() {
  const e = me();
  return e.eventTypes ?? e.event_types ?? {};
}
function Je(e, t) {
  const n = cu()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  me().eventSource.on(n, t);
}
function ve() {
  return me().chat ?? [];
}
function Js() {
  const e = me();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function Qn() {
  return me().chatMetadata ?? {};
}
function qn() {
  const e = me();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function vn(e, t, n, s) {
  me().setExtensionPrompt(e, t, ou, n, s, lu);
}
function ot(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Ke(e) {
  const t = me();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
const Ot = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function yr(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function au(e, t = Ot) {
  return t.length ? e.replace(yr(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
function vr(e, t = Ot, n = !1) {
  const s = ve()[e];
  if (!s || s.is_user) return;
  const i = String(s.extra?.display_text ?? s.mes ?? "");
  if (!yr(n ? Ot : t, "").test(i)) return;
  const A = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!A) return;
  const o = me().messageFormatting;
  if (typeof o != "function") return;
  const r = o(au(i, t), s.name ?? "", !!s.is_system, !1, e);
  A.innerHTML !== r && (A.innerHTML = r);
}
function uu(e = Ot, t = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((n) => {
    const s = Number(n.getAttribute("mesid"));
    Number.isFinite(s) && vr(s, e, t);
  });
}
const fu = /[■█▰●◆★▮▓]/g, du = /[□░▱○◇☆▯▒]/g;
function pu(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const A = Number(n[2]);
    return A === 100 ? Number(n[1]) : A > 0 ? Math.round(Number(n[1]) / A * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(fu) ?? []).length, i = (t.match(du) ?? []).length;
  return s + i > 0 ? Math.round(s / (s + i) * 100) : null;
}
function Vi(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function hu(e, t) {
  return Vi(e).includes(Vi(t));
}
function mu(e, t, n) {
  const s = [], i = Object.keys(n.perMessage).map(Number).sort((l, c) => l - c);
  let A = !1, o = null, r = !1;
  for (const l of i) {
    const c = n.perMessage[l], f = t.phases.find((N) => N.id === c.phase)?.name ?? "进行中", p = (N, O) => s.push({ index: l, phase: f, round: c.round, kind: N, text: O }), h = fr(String(e[l]?.mes ?? "")), b = l === n.entryIndex;
    if (!h) {
      b || p("missing", "本轮回复缺少 <副本> 面板"), r = !b;
      continue;
    }
    r = !1;
    const y = pu(h.progressBar);
    h.progressBar === void 0 ? p("progressUnreadable", "<副本> 中没有进度条一栏") : y === null ? p("progressUnreadable", `进度条无法读出数值：「${h.progressBar}」`) : (!A && y !== 0 && p("progressStart", `入场后第一轮的进度条应为0，实际为 ${y}`), (y < 0 || y > 100) && p("progressRange", `进度条数值 ${y} 超出 0–100`), o !== null && y < o && p("progressDrop", `进度条比上一轮低：${o} → ${y}`), o = y), A = !0;
    const L = e[l]?.extra?.rlzc?.limit, j = L?.text ? L : c.limit?.text ? { text: c.limit.text, minutes: c.limit.minutes, total: c.limit.total } : void 0;
    if (j) {
      const N = h.limit;
      if (j.minutes !== void 0) {
        const O = er(N);
        !N || O.remaining === null || O.total === null ? p("limit", `时限读不到「剩余时间/总时长」：写的是「${N ?? "（没有时限一栏）"}」，注入的是「${j.text}」`) : (O.remaining > j.minutes && p("limit", `剩余时间比注入值多：写的是${Tt(O.remaining)}，注入的是${Tt(j.minutes)}`), j.total !== void 0 && O.total !== j.total && p("limit", `总时长与注入值不一致：写的是${Tt(O.total)}，注入的是${Tt(j.total)}`));
      } else (!N || !hu(N, j.text)) && p("limit", `时限与注入文字不一致：写的是「${N ?? "（没有时限一栏）"}」，注入的是「${j.text}」`);
    }
  }
  return { warnings: s, missingLast: r, hasPanel: A };
}
const Ts = "rlzc", _n = {
  depths: { token: 4, progress: 4, turn: 0 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel",
  genericCaps: { ...on }
}, g = /* @__PURE__ */ Vn({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
  settings: structuredClone(_n),
  packs: [],
  lastInjection: Zn,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0
});
function _r(e) {
  return JSON.parse(JSON.stringify(e));
}
function gu(...e) {
  g.settings.debug && console.log("[rlzc]", ...e);
}
function xu() {
  const e = me().extensionSettings, t = e[Ts] ?? {}, n = {
    ...structuredClone(_n),
    ...t,
    depths: { ..._n.depths, ...t.depths ?? {} },
    ball: { ..._n.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => ir(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    genericCaps: { ...on, ...t.genericCaps ?? {} }
  };
  e[Ts] = n, g.settings = n, g.packs = Ks(n.customPacks);
}
function He() {
  me().extensionSettings[Ts] = JSON.parse(JSON.stringify(g.settings)), me().saveSettingsDebounced(), g.packs = Ks(g.settings.customPacks);
}
function bu(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = ir(t);
  if (n.length) return n;
  const s = t;
  return Ks([]).some((i) => i.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (g.settings.customPacks = [...g.settings.customPacks.filter((i) => i.id !== s.id), s], He(), []);
}
function yu(e) {
  g.settings.customPacks = g.settings.customPacks.filter((t) => t.id !== e), He();
}
function at() {
  return tu(Qn()[tt]);
}
function Xn() {
  const e = Qn(), t = Array.isArray(e[tt]?.declined) ? e[tt].declined : [], n = Array.isArray(e[Bi]) ? e[Bi] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function vu(e) {
  const t = Qn(), n = [...Xn().filter((s) => s !== e), e];
  t[tt] = { ...t[tt] ?? {}, declined: n }, qn();
}
function kt(e) {
  const t = Qn(), n = Xn(), s = n.length ? { declined: n } : {};
  e ? t[tt] = { ...JSON.parse(JSON.stringify(e)), ...s } : n.length ? t[tt] = s : delete t[tt], qn();
}
function Qs(e) {
  const t = at();
  t && (e(t), kt(t), lt());
}
function _u(e) {
  const t = ve();
  return (e === "swipe" || e === "continue") && Ft(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function Tn(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = nu(t, g.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = Ua(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? mu(e, n, s) : null };
}
function lt() {
  const e = ve();
  let t = at();
  if (t) {
    const s = JSON.stringify(t);
    if (!iu(e, t))
      kt(null), ot("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const i = Tn(e, t);
      i.progress && (t.status = i.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && kt(t);
    }
  }
  const n = Tn(e, t);
  g.session = n.session, g.pack = n.pack, g.progress = n.progress, g.audit = n.audit, g.tick++;
}
function wu() {
  if (g.session)
    return xr(g.session, g.progress?.rolesFromChat);
}
function Pn() {
  for (const e of Ka) vn(e, "", 0, !1);
}
let Rn = -1;
function ku(e) {
  const t = _u(e), n = at(), { pack: s, progress: i, audit: A } = Tn(t, n), o = n ? xr(n, i?.rolesFromChat) : void 0, r = s ? qa(s, i, n, { roles: o, briefing: n?.briefing, panelLimit: i?.panel?.limit, audit: A ?? void 0 }) : Zn;
  Pn();
  const l = g.settings.depths;
  r.token && vn(hr, r.token, l.token, !0), r.progress && vn(mr, r.progress, l.progress, !1), r.turn && vn(gr, r.turn, l.turn, !1), g.lastInjection = r, Rn = t.length, gu("注入", e, r);
}
const Ps = /* @__PURE__ */ new Set();
async function Su() {
  const e = ve(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = Da(n.mes);
  if (!s) return;
  const i = at();
  if (!i || i.status !== "active" || i.manual.some((c) => c.kind === "skip" && c.atIndex === t)) return;
  const A = `${Js()}:${t}:${n.mes}`;
  if (Ps.has(A)) return;
  Ps.add(A);
  const { pack: o, progress: r } = Tn(e, i);
  if (!o || !r || r.ended) return;
  const l = La(o, r.phase, r.round, s);
  l && await Ke(`是否跳到${s}？（${l.label}）`) && (i.manual.push({ kind: "skip", atIndex: t, targetPhase: l.phase, targetRound: l.round }), kt(i));
}
async function zu(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      Pn();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await Su(), ku(s);
  } catch (i) {
    console.error("[rlzc] 拦截器出错", i), Pn();
  }
}
const Wi = /* @__PURE__ */ new Set();
function qs() {
  const e = at();
  if (!e || e.status !== "ended") return 0;
  const t = g.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
async function wr(e) {
  const { index: t, info: n } = e, s = `${Js()}:${t}:${n.name}`;
  if (Wi.has(s)) return;
  Wi.add(s);
  const i = e.pack ? `检测到进入《${e.pack.name}》，是否启用？` : `检测到进入《${n.name}》，是否启用？（未收录的副本，将使用通用副本包）`;
  if (!await Ke(i)) {
    vu(Zs(t, n.name));
    return;
  }
  const A = Jn(ve(), t, g.packs);
  if (!A || A.info.name !== n.name) {
    ot("warning", "入场消息已变化，未启用。");
    return;
  }
  const o = { ...n };
  e.pack || (o.rounds = nr(n.limit, Ar(n), g.settings.genericCaps).rounds), Sr(e.pack ?? rr(o, g.settings.genericCaps), t, o);
}
function kr() {
  const e = ru(ve(), at(), Xn(), g.packs, qs());
  e && wr(e);
}
function Eu(e) {
  lt();
  const t = ve(), n = qs();
  let s = -1;
  for (let i = n; i < t.length; i++) if (Ft(t[i])) {
    s = i;
    break;
  }
  e === s && kr();
}
function Sr(e, t, n) {
  const i = ve()[t], A = eu(e, t, n);
  i.extra = i.extra ?? {}, i.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: A.id }, kt(A), lt(), g.progress && (i.extra.rlzc.injected = _r(g.progress.perMessage[t]?.events ?? [])), qn(), ot("success", `已进入副本《${e.name}》。`);
}
async function $u(e) {
  const t = g.packs.find((A) => A.id === e);
  if (!t) return;
  const n = ve();
  let s = n.length - 1;
  for (; s >= 0 && !Ft(n[s]); ) s--;
  if (s < 0) {
    ot("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  at()?.status === "active" && !await Ke("当前已有进行中的副本，确定要替换吗？") || await Ke(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`) && Sr(t, s, lr(n[s].mes) ?? { name: t.name });
}
function es(e) {
  Qs((t) => t.manual.push(e));
}
function ts() {
  return ve().length - 1;
}
async function Gi() {
  const e = g.progress;
  if (!(!e || e.ended || !g.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      ot("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Ke(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (es({ kind: "skip", atIndex: ts(), targetPhase: e.phase.id, targetRound: e.phase.cap }), ot("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function Yi() {
  !g.session || g.progress?.ended || await Ke("确定要手动结束当前副本吗？") && es({ kind: "end", atIndex: ts() });
}
function Cu(e) {
  es({ kind: "setPhase", atIndex: ts(), phase: e });
}
function Mu(e) {
  es({ kind: "setRound", atIndex: ts(), round: e });
}
function Iu(e) {
  Qs((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function Tu(e) {
  Qs((t) => t.manual.splice(e, 1));
}
async function Hi() {
  g.session && await Ke("确定要删除当前副本会话吗？（不会改动聊天记录）") && (kt(null), lt());
}
function Pu(e) {
  const t = ve(), n = t[e];
  if (!Ft(n)) return;
  const s = at();
  if (!s || s.status === "ended") {
    if (Jn(t, e, g.packs)) {
      const r = Au(t, g.packs, qs(), e, Xn());
      r && wr(r);
    }
    return;
  }
  if (!s) return;
  const i = ur(n.mes);
  i && (s.roles = { ...s.roles ?? {}, ...i }), kt(s), lt();
  const A = g.progress?.perMessage[e];
  if (A && g.pack) {
    const r = g.pack.phases.find((p) => p.id === A.phase), l = {
      phase: r?.name ?? A.phase,
      round: A.round,
      injected: Rn === e ? g.lastInjection.injected : A.events
    }, c = g.pack.time;
    c.type === "clock" && r?.clock && !r.night && !r.frozen && (l.clock = dr(c.dayStart, c.minutesPerRound, A.round));
    const u = Rn === e ? g.lastInjection.limit : A.limit?.text ? { text: A.limit.text, minutes: A.limit.minutes, total: A.limit.total } : void 0;
    u && (l.limit = u);
    const f = n.extra?.rlzc?.entry;
    f && (l.entry = f), n.extra = n.extra ?? {}, n.extra.rlzc = _r(l), qn(), lt();
  }
  const o = ar(n.mes);
  o && ot("info", `副本结算：${o.result ?? "—"}${o.rating ? `，评价 ${o.rating}` : ""}`);
}
function Ui() {
  Ps.clear(), Rn = -1, g.chatId = Js(), g.debugUnlocked = !1, g.lastInjection = Zn, Pn(), lt(), kr(), setTimeout(() => Xs(), 50);
}
function bs() {
  lt();
}
function zr() {
  return g.settings.panelDisplay === "statusbar" ? Ot.filter((e) => e !== "副本") : Ot;
}
function ys(e) {
  vr(e, zr());
}
function Xs(e = !1) {
  uu(zr(), e);
}
function Ru(e) {
  g.settings.panelDisplay !== e && (g.settings.panelDisplay = e, He(), Xs(!0));
}
const Nu = { class: "rlzc-ball-mark" }, vs = 44, Fu = /* @__PURE__ */ zt({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ wt({ x: 0, y: 0 });
    let n = null;
    function s(u, f) {
      const p = window.innerWidth - vs - 4, h = window.innerHeight - vs - 4;
      return { x: Math.min(Math.max(4, u), p), y: Math.min(Math.max(4, f), h) };
    }
    function i() {
      const u = g.settings.ball;
      t.value = s(u.x ?? window.innerWidth - vs - 12, u.y ?? Math.round(window.innerHeight * 0.35));
    }
    function A(u) {
      u.currentTarget.setPointerCapture(u.pointerId), n = { id: u.pointerId, dx: u.clientX - t.value.x, dy: u.clientY - t.value.y, moved: !1, sx: u.clientX, sy: u.clientY };
    }
    function o(u) {
      !n || n.id !== u.pointerId || (Math.abs(u.clientX - n.sx) + Math.abs(u.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = s(u.clientX - n.dx, u.clientY - n.dy)));
    }
    function r(u) {
      if (!n || n.id !== u.pointerId) return;
      const f = n.moved;
      n = null, f ? (g.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, He()) : g.panelOpen = !g.panelOpen;
    }
    const l = ie(() => !!g.session && !g.progress?.ended), c = ie(() => !!g.progress?.warn);
    return Gn(() => g.settings.ball, i, { deep: !0 }), To(() => {
      i(), window.addEventListener("resize", i);
    }), Po(() => window.removeEventListener("resize", i)), (u, f) => (C(), M("button", {
      class: ct(["rlzc-ball", { "is-active": l.value, "is-warn": c.value }]),
      style: Ln({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: A,
      onPointermove: o,
      onPointerup: r,
      onPointercancel: r
    }, [
      m("span", Nu, R(l.value ? T(g).pack?.level ?? "副" : "廊"), 1)
    ], 38));
  }
});
function Ou(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Gt(e) {
  return Ou(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function ju(e) {
  const t = [];
  let n = null, s = [];
  const i = () => {
    s.length && t.push(`<p>${s.map(Gt).join("<br>")}</p>`), s = [];
  }, A = () => {
    n && t.push(`</li></${n}>`), n = null;
  };
  for (const o of e.replace(/\r/g, "").split(`
`)) {
    const r = o.trimEnd();
    if (!r.trim()) {
      i(), A();
      continue;
    }
    const l = /^(#{1,4})\s+(.*)$/.exec(r);
    if (l) {
      i(), A();
      const p = Math.min(l[1].length + 2, 6);
      t.push(`<h${p}>${Gt(l[2])}</h${p}>`);
      continue;
    }
    const c = /^\s*[-*]\s+(.*)$/.exec(r), u = /^\s*(\d+)[.、]\s+(.*)$/.exec(r);
    if (c || u) {
      i();
      const p = c ? "ul" : "ol", h = c ? c[1] : u[2];
      n !== p ? (A(), n = p, t.push(p === "ol" ? `<ol start="${u[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(Gt(h));
      continue;
    }
    if (n && /^\s{2,}/.test(o)) {
      t.push(`<br>${Gt(r.trim())}`);
      continue;
    }
    const f = /^>\s?(.*)$/.exec(r);
    if (f) {
      i(), A(), t.push(`<blockquote>${Gt(f[1])}</blockquote>`);
      continue;
    }
    A(), s.push(r);
  }
  return i(), A(), t.join("");
}
const Du = {
  key: 0,
  class: "rlzc-docs"
}, Lu = { class: "rlzc-subtabs" }, Bu = ["onClick"], Vu = { class: "rlzc-md" }, Wu = ["innerHTML"], Gu = ["src", "alt"], Yu = {
  key: 2,
  class: "rlzc-note"
}, Ki = /* @__PURE__ */ zt({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ wt(0);
    Gn(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = ie(() => t.pack.docs?.[n.value]), i = ie(() => s.value?.md ? ju(s.value.md) : ""), A = ie(() => s.value?.image ? Ta(t.pack, s.value.image) : null);
    return (o, r) => e.pack.docs?.length ? (C(), M("section", Du, [
      m("div", Lu, [
        (C(!0), M(Q, null, ge(e.pack.docs, (l, c) => (C(), M("button", {
          key: c,
          class: ct({ on: n.value === c }),
          onClick: (u) => n.value = c
        }, R(l.title), 11, Bu))), 128))
      ]),
      m("article", Vu, [
        i.value ? (C(), M("div", {
          key: 0,
          innerHTML: i.value
        }, null, 8, Wu)) : J("", !0),
        A.value ? (C(), M("img", {
          key: 1,
          src: A.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, Gu)) : s.value?.image && !A.value ? (C(), M("p", Yu, "图片无法加载：" + R(s.value.image), 1)) : J("", !0)
      ])
    ])) : J("", !0);
  }
}), Hu = { class: "rlzc-system" }, Uu = { class: "rlzc-card rlzc-hero" }, Ku = { class: "rlzc-hero-top" }, Zu = { class: "rlzc-level" }, Ju = {
  key: 0,
  class: "rlzc-chip"
}, Qu = {
  key: 0,
  class: "rlzc-goal"
}, qu = { class: "rlzc-grid" }, Xu = {
  key: 0,
  class: "rlzc-stat"
}, ef = {
  key: 1,
  class: "rlzc-stat"
}, tf = {
  key: 2,
  class: "rlzc-stat"
}, nf = {
  key: 3,
  class: "rlzc-stat"
}, sf = {
  key: 0,
  class: "rlzc-note"
}, Af = {
  key: 1,
  class: "rlzc-card"
}, rf = { class: "rlzc-kv" }, of = { class: "rlzc-kv" }, lf = {
  key: 2,
  class: "rlzc-note"
}, cf = {
  key: 3,
  class: "rlzc-card"
}, af = {
  key: 0,
  class: "rlzc-kv"
}, uf = { class: "rlzc-mono" }, ff = {
  key: 1,
  class: "rlzc-tasks"
}, df = {
  key: 2,
  class: "rlzc-ps"
}, pf = { class: "rlzc-actions" }, hf = ["disabled"], mf = ["disabled"], gf = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, xf = {
  key: 2,
  class: "rlzc-card"
}, bf = { class: "rlzc-row" }, yf = ["value"], vf = ["disabled"], _f = /* @__PURE__ */ zt({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ wt(""), n = ie(() => !!g.session && !!g.pack), s = ie(() => g.progress), i = ie(() => n.value && !!s.value && !s.value.ended), A = ie(() => g.packs.find((p) => p.id === t.value) ?? null), o = ie(() => !!g.pack?.phases.length), r = ie(() => g.settings.panelDisplay !== "statusbar"), l = ie(() => {
      const p = s.value;
      return p ? o.value ? `${p.warn ? "⚠️ " : ""}${p.round}/${p.phase.cap}` : `第${p.round}轮` : "";
    }), c = ie(() => {
      const p = s.value;
      return p ? p.limit?.text ? p.limit.text : p.panel?.limit || g.session?.briefing?.limit || "—" : "";
    }), u = ie(() => {
      const p = s.value;
      return !!p && !p.ended && o.value && p.phase.cap > 0 && p.nextRound < p.phase.cap;
    });
    async function f() {
      t.value && (await $u(t.value), t.value = "");
    }
    return (p, h) => (C(), M("div", Hu, [
      n.value && s.value ? (C(), M(Q, { key: 0 }, [
        m("div", Uu, [
          m("div", Ku, [
            m("span", Zu, R(T(g).pack.level), 1),
            m("h3", null, R(T(g).pack.name), 1),
            s.value.ended ? (C(), M("span", Ju, "已结束")) : J("", !0)
          ]),
          T(g).session?.briefing?.goal ? (C(), M("p", Qu, "目标：" + R(T(g).session.briefing.goal), 1)) : J("", !0)
        ]),
        m("div", qu, [
          o.value ? (C(), M("div", Xu, [
            h[3] || (h[3] = m("span", null, "阶段", -1)),
            m("b", null, R(s.value.phase.name), 1)
          ])) : J("", !0),
          m("div", {
            class: ct(["rlzc-stat", { warn: s.value.warn }])
          }, [
            h[4] || (h[4] = m("span", null, "轮次", -1)),
            m("b", null, R(l.value), 1)
          ], 2),
          s.value.currentClock ? (C(), M("div", ef, [
            h[5] || (h[5] = m("span", null, "钟时", -1)),
            m("b", null, R(s.value.currentClock), 1)
          ])) : J("", !0),
          s.value.roundsLeft ? (C(), M("div", tf, [
            h[6] || (h[6] = m("span", null, "最多剩余轮次", -1)),
            m("b", null, R(s.value.roundsLeft.x) + "/" + R(s.value.roundsLeft.y), 1)
          ])) : J("", !0),
          r.value ? (C(), M("div", nf, [
            h[7] || (h[7] = m("span", null, "剩余时间", -1)),
            m("b", null, R(c.value), 1)
          ])) : J("", !0)
        ]),
        s.value.skipGoal ? (C(), M("div", sf, "快进中：目标 " + R(T(g).pack.phases.find((b) => b.id === s.value.skipGoal.phase)?.name) + " 第" + R(s.value.skipGoal.round) + "轮", 1)) : J("", !0),
        s.value.ended && s.value.settlement ? (C(), M("div", Af, [
          m("div", rf, [
            h[8] || (h[8] = m("span", null, "结果", -1)),
            m("b", null, R(s.value.settlement.result ?? "—"), 1)
          ]),
          m("div", of, [
            h[9] || (h[9] = m("span", null, "评价", -1)),
            m("b", null, R(s.value.settlement.rating ?? "—"), 1)
          ])
        ])) : s.value.ended ? (C(), M("div", lf, "副本已手动结束。")) : J("", !0),
        r.value && s.value.panel ? (C(), M("div", cf, [
          s.value.panel.progressBar ? (C(), M("div", af, [
            h[10] || (h[10] = m("span", null, "进度", -1)),
            m("b", uf, R(s.value.panel.progressBar), 1)
          ])) : J("", !0),
          s.value.panel.tasks.length ? (C(), M("div", ff, [
            h[11] || (h[11] = m("span", null, "任务", -1)),
            m("ul", null, [
              (C(!0), M(Q, null, ge(s.value.panel.tasks, (b, y) => (C(), M("li", { key: y }, R(b), 1))), 128))
            ])
          ])) : J("", !0),
          s.value.panel.ps ? (C(), M("div", df, "ps：" + R(s.value.panel.ps), 1)) : J("", !0)
        ])) : J("", !0),
        m("div", pf, [
          m("button", {
            class: "rlzc-btn",
            disabled: !u.value,
            onClick: h[0] || (h[0] = //@ts-ignore
            (...b) => T(Gi) && T(Gi)(...b))
          }, "跳过（到本阶段结束）", 8, hf),
          m("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: h[1] || (h[1] = //@ts-ignore
            (...b) => T(Yi) && T(Yi)(...b))
          }, "手动结束副本", 8, mf)
        ]),
        i.value && T(g).pack.docs?.length ? (C(), et(Ki, {
          key: 4,
          pack: T(g).pack
        }, null, 8, ["pack"])) : J("", !0)
      ], 64)) : (C(), M("div", gf, [...h[12] || (h[12] = [
        m("h3", null, "休整中", -1),
        m("p", null, "当前在回廊里，没有进行中的副本，也不会注入任何提示词。", -1)
      ])])),
      i.value ? J("", !0) : (C(), M("div", xf, [
        h[14] || (h[14] = m("label", { class: "rlzc-label" }, "手动选择副本（以最新一条AI回复为第1轮）", -1)),
        m("div", bf, [
          xn(m("select", {
            "onUpdate:modelValue": h[2] || (h[2] = (b) => t.value = b),
            class: "rlzc-input"
          }, [
            h[13] || (h[13] = m("option", { value: "" }, "选择副本…", -1)),
            (C(!0), M(Q, null, ge(T(g).packs, (b) => (C(), M("option", {
              key: b.id,
              value: b.id
            }, R(b.level) + "｜" + R(b.name), 9, yf))), 128))
          ], 512), [
            [XA, t.value]
          ]),
          m("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: f
          }, "进入", 8, vf)
        ])
      ])),
      !i.value && A.value?.docs?.length ? (C(), et(Ki, {
        key: 3,
        pack: A.value
      }, null, 8, ["pack"])) : J("", !0)
    ]));
  }
}), wf = { class: "rlzc-settings" }, kf = { class: "rlzc-card" }, Sf = ["value"], zf = { class: "rlzc-hint" }, Ef = { class: "rlzc-card" }, $f = { class: "rlzc-field" }, Cf = ["value"], Mf = { class: "rlzc-field" }, If = ["value"], Tf = { class: "rlzc-field" }, Pf = ["value"], Rf = { class: "rlzc-card" }, Nf = ["value", "onChange"], Ff = { class: "rlzc-card" }, Of = {
  key: 0,
  class: "rlzc-list"
}, jf = ["onClick"], Df = {
  key: 1,
  class: "rlzc-hint"
}, Lf = {
  key: 2,
  class: "rlzc-errors"
}, Bf = { class: "rlzc-card" }, Vf = { class: "rlzc-check" }, Wf = ["checked"], Gf = { class: "rlzc-check" }, Yf = ["checked"], Hf = /* @__PURE__ */ zt({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ wt([]), n = /* @__PURE__ */ wt(null);
    function s(u, f) {
      const p = Math.max(0, Math.min(1e4, Math.floor(Number(f.target.value) || 0)));
      g.settings.depths[u] = p, He();
    }
    async function i(u) {
      const f = u.target, p = f.files?.[0];
      f.value = "", p && (t.value = bu(await p.text()), t.value.length || ot("success", `已导入副本包：${p.name}`));
    }
    async function A(u, f) {
      await Ke(`确定删除自定义副本包《${f}》吗？`) && yu(u);
    }
    const o = ["D", "C", "B", "A", "S"];
    function r(u, f) {
      const p = Math.floor(Number(f.target.value));
      !Number.isFinite(p) || p < 1 || (g.settings.genericCaps = { ...g.settings.genericCaps, [u]: p }, He());
    }
    function l(u) {
      Ru(u.target.value);
    }
    function c(u, f) {
      g.settings[u] = f.target.checked, He();
    }
    return (u, f) => (C(), M("div", wf, [
      m("div", kf, [
        f[7] || (f[7] = m("h4", null, "副本信息显示位置", -1)),
        m("select", {
          class: "rlzc-input",
          value: T(g).settings.panelDisplay,
          onChange: l
        }, [...f[6] || (f[6] = [
          m("option", { value: "panel" }, "扩展面板（默认）", -1),
          m("option", { value: "statusbar" }, "正文状态栏", -1)
        ])], 40, Sf),
        m("p", zf, R(T(g).settings.panelDisplay === "statusbar" ? "正文中保留 <副本> 标签，由你的状态栏显示；系统页不再显示时限、进度条、任务和 ps。" : "正文中隐藏 <副本> 标签，时限、进度条、任务和 ps 显示在系统页。") + " 两种方式下扩展都会读取 <副本> 做核对。 ", 1)
      ]),
      m("div", Ef, [
        f[11] || (f[11] = m("h4", null, "注入深度", -1)),
        m("label", $f, [
          f[8] || (f[8] = m("span", null, "暗号 rlzc_token", -1)),
          m("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: T(g).settings.depths.token,
            onChange: f[0] || (f[0] = (p) => s("token", p))
          }, null, 40, Cf)
        ]),
        m("label", Mf, [
          f[9] || (f[9] = m("span", null, "进度 rlzc_progress", -1)),
          m("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: T(g).settings.depths.progress,
            onChange: f[1] || (f[1] = (p) => s("progress", p))
          }, null, 40, If)
        ]),
        m("label", Tf, [
          f[10] || (f[10] = m("span", null, "本轮 rlzc_turn", -1)),
          m("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: T(g).settings.depths.turn,
            onChange: f[2] || (f[2] = (p) => s("turn", p))
          }, null, 40, Pf)
        ])
      ]),
      m("div", Rf, [
        f[12] || (f[12] = m("h4", null, "通用副本默认轮数上限", -1)),
        f[13] || (f[13] = m("p", { class: "rlzc-hint" }, "未收录的副本按等级取轮数上限；简报时限一行写了「（最多N轮）」时以简报为准。只影响之后进入的副本。", -1)),
        (C(), M(Q, null, ge(o, (p) => m("label", {
          key: p,
          class: "rlzc-field"
        }, [
          m("span", null, R(p) + " 级", 1),
          m("input", {
            type: "number",
            min: "1",
            class: "rlzc-input",
            value: T(g).settings.genericCaps[p],
            onChange: (h) => r(p, h)
          }, null, 40, Nf)
        ])), 64))
      ]),
      m("div", Ff, [
        f[14] || (f[14] = m("h4", null, "自定义副本包", -1)),
        T(g).settings.customPacks.length ? (C(), M("ul", Of, [
          (C(!0), M(Q, null, ge(T(g).settings.customPacks, (p) => (C(), M("li", {
            key: p.id
          }, [
            m("span", null, [
              qt(R(p.level) + "｜" + R(p.name) + " ", 1),
              m("small", null, "v" + R(p.version), 1)
            ]),
            m("button", {
              class: "rlzc-btn ghost small",
              onClick: (h) => A(p.id, p.name)
            }, "删除", 8, jf)
          ]))), 128))
        ])) : (C(), M("p", Df, "还没有导入自定义副本包。")),
        m("input", {
          ref_key: "fileInput",
          ref: n,
          type: "file",
          accept: ".json,application/json",
          hidden: "",
          onChange: i
        }, null, 544),
        m("button", {
          class: "rlzc-btn",
          onClick: f[3] || (f[3] = (p) => n.value?.click())
        }, "导入 JSON…"),
        t.value.length ? (C(), M("ul", Lf, [
          (C(!0), M(Q, null, ge(t.value, (p, h) => (C(), M("li", { key: h }, R(p), 1))), 128))
        ])) : J("", !0)
      ]),
      m("div", Bf, [
        f[17] || (f[17] = m("h4", null, "其他", -1)),
        m("label", Vf, [
          m("input", {
            type: "checkbox",
            checked: T(g).settings.showBall,
            onChange: f[4] || (f[4] = (p) => c("showBall", p))
          }, null, 40, Wf),
          f[15] || (f[15] = qt("显示悬浮球（关闭后可从扩展菜单打开面板）", -1))
        ]),
        m("label", Gf, [
          m("input", {
            type: "checkbox",
            checked: T(g).settings.debug,
            onChange: f[5] || (f[5] = (p) => c("debug", p))
          }, null, 40, Yf),
          f[16] || (f[16] = qt("调试模式（调试页允许手动修改，并在控制台输出日志）", -1))
        ])
      ])
    ]));
  }
}), Uf = { class: "rlzc-debug" }, Kf = {
  key: 0,
  class: "rlzc-note"
}, Zf = {
  key: 0,
  class: "rlzc-note"
}, Jf = {
  key: 1,
  class: "rlzc-note"
}, Qf = {
  key: 2,
  class: "rlzc-card"
}, qf = { class: "rlzc-row" }, Xf = ["disabled"], ed = ["value"], td = ["disabled"], nd = { class: "rlzc-row" }, sd = ["disabled"], id = ["disabled"], Ad = {
  key: 3,
  class: "rlzc-card"
}, rd = ["onUpdate:modelValue", "disabled"], od = ["disabled"], ld = { class: "rlzc-card" }, cd = {
  key: 0,
  class: "rlzc-hint"
}, ad = { class: "rlzc-hint" }, ud = { class: "rlzc-list rlzc-warns" }, fd = { class: "rlzc-card" }, dd = {
  key: 0,
  class: "rlzc-list"
}, pd = ["disabled", "onClick"], hd = {
  key: 1,
  class: "rlzc-hint"
}, md = {
  class: "rlzc-card",
  open: ""
}, gd = { class: "rlzc-pre" }, xd = { class: "rlzc-card" }, bd = { class: "rlzc-pre" }, yd = { class: "rlzc-card" }, vd = { class: "rlzc-pre" }, _d = { class: "rlzc-card" }, wd = { class: "rlzc-table" }, kd = ["disabled"], Sd = /* @__PURE__ */ zt({
  __name: "DebugTab",
  setup(e) {
    const t = ie(() => g.settings.debug), n = /* @__PURE__ */ wt(""), s = /* @__PURE__ */ wt(null), i = /* @__PURE__ */ Vn({});
    Gn(
      () => [g.tick, g.pack?.id],
      () => {
        for (const h of Object.keys(i)) delete i[h];
        const p = wu() ?? {};
        for (const h of g.pack?.roles ?? []) i[h] = p[h] ?? "";
      },
      { immediate: !0 }
    );
    const A = ie(() => {
      g.tick;
      const p = ve(), h = [], b = g.session?.entryIndex ?? 0;
      for (let y = b; y < p.length; y++) {
        const L = p[y]?.extra?.rlzc;
        L && h.push({ index: y, snap: L });
      }
      return h.reverse().slice(0, 60);
    }), o = ie(() => new Set((g.audit?.warnings ?? []).filter((p) => p.kind === "limit").map((p) => p.index))), r = ie(() => {
      const p = g.progress;
      if (!p) return null;
      const { perMessage: h, phase: b, next: y, ...L } = p;
      return {
        phase: b.id + " " + b.name,
        ...L,
        next: y ? { round: y.round, skipFrom: y.skipFrom, events: y.events.map((j) => j.id) } : null,
        messages: Object.keys(h).length
      };
    });
    function l() {
      n.value && Cu(n.value);
    }
    function c() {
      s.value !== null && s.value >= 0 && Mu(s.value);
    }
    function u() {
      Iu({ ...i });
    }
    const f = (p) => JSON.stringify(p, null, 2);
    return (p, h) => (C(), M("div", Uf, [
      T(g).session ? (C(), M(Q, { key: 1 }, [
        t.value ? J("", !0) : (C(), M("p", Zf, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        T(g).pack && T(g).session.packVersion !== T(g).pack.version ? (C(), M("p", Jf, " 入场时副本包版本为 " + R(T(g).session.packVersion) + "，当前为 " + R(T(g).pack.version) + "。 ", 1)) : J("", !0),
        T(g).pack?.phases.length ? (C(), M("div", Qf, [
          h[4] || (h[4] = m("h4", null, "手动修正", -1)),
          m("div", qf, [
            xn(m("select", {
              "onUpdate:modelValue": h[0] || (h[0] = (b) => n.value = b),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              h[3] || (h[3] = m("option", { value: "" }, "切换到阶段…", -1)),
              (C(!0), M(Q, null, ge(T(g).pack.phases, (b) => (C(), M("option", {
                key: b.id,
                value: b.id
              }, R(b.name), 9, ed))), 128))
            ], 8, Xf), [
              [XA, n.value]
            ]),
            m("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: l
            }, "切换", 8, td)
          ]),
          m("div", nd, [
            xn(m("input", {
              "onUpdate:modelValue": h[1] || (h[1] = (b) => s.value = b),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, sd), [
              [
                Ii,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            m("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: c
            }, "修正轮次", 8, id)
          ])
        ])) : J("", !0),
        T(g).pack?.roles?.length ? (C(), M("div", Ad, [
          h[5] || (h[5] = m("h4", null, "角色登记", -1)),
          (C(!0), M(Q, null, ge(T(g).pack.roles, (b) => (C(), M("label", {
            key: b,
            class: "rlzc-field"
          }, [
            m("span", null, R(b), 1),
            xn(m("input", {
              "onUpdate:modelValue": (y) => i[b] = y,
              class: "rlzc-input",
              disabled: !t.value,
              placeholder: "未登记"
            }, null, 8, rd), [
              [Ii, i[b]]
            ])
          ]))), 128)),
          m("button", {
            class: "rlzc-btn small",
            disabled: !t.value,
            onClick: u
          }, "保存登记", 8, od)
        ])) : J("", !0),
        m("div", ld, [
          h[7] || (h[7] = m("h4", null, "<副本> 核对", -1)),
          T(g).audit?.warnings.length ? (C(), M(Q, { key: 1 }, [
            m("p", ad, "共 " + R(T(g).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
            m("ul", ud, [
              (C(!0), M(Q, null, ge(T(g).audit.warnings.slice(-30).reverse(), (b, y) => (C(), M("li", { key: y }, [
                m("span", null, [
                  m("small", null, "#" + R(b.index) + "｜" + R(b.phase) + "第" + R(b.round) + "轮", 1),
                  h[6] || (h[6] = m("br", null, null, -1)),
                  qt("⚠️ " + R(b.text), 1)
                ])
              ]))), 128))
            ])
          ], 64)) : (C(), M("p", cd, "没有发现问题。"))
        ]),
        m("div", fd, [
          h[8] || (h[8] = m("h4", null, "手动操作记录", -1)),
          T(g).session.manual.length ? (C(), M("ul", dd, [
            (C(!0), M(Q, null, ge(T(g).session.manual, (b, y) => (C(), M("li", { key: y }, [
              m("code", null, "#" + R(b.atIndex) + " " + R(b.kind) + " " + R("phase" in b ? b.phase : "") + R("round" in b ? b.round : "") + R("targetPhase" in b ? `${b.targetPhase}:${b.targetRound}` : ""), 1),
              m("button", {
                class: "rlzc-btn ghost small",
                disabled: !t.value,
                onClick: (L) => T(Tu)(y)
              }, "撤销", 8, pd)
            ]))), 128))
          ])) : (C(), M("p", hd, "无"))
        ]),
        m("details", md, [
          h[9] || (h[9] = m("summary", null, "本次注入", -1)),
          m("pre", gd, R([T(g).lastInjection.token, T(g).lastInjection.progress, T(g).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
        ]),
        m("details", xd, [
          h[10] || (h[10] = m("summary", null, "重放结果", -1)),
          m("pre", bd, R(f(r.value)), 1)
        ]),
        m("details", yd, [
          h[11] || (h[11] = m("summary", null, "会话原始数据", -1)),
          m("pre", vd, R(f(T(g).session)), 1)
        ]),
        m("details", _d, [
          h[13] || (h[13] = m("summary", null, "每楼快照（最近60条）", -1)),
          m("table", wd, [
            h[12] || (h[12] = m("thead", null, [
              m("tr", null, [
                m("th", null, "楼"),
                m("th", null, "阶段"),
                m("th", null, "轮"),
                m("th", null, "钟时"),
                m("th", null, "时限"),
                m("th", null, "事件")
              ])
            ], -1)),
            m("tbody", null, [
              (C(!0), M(Q, null, ge(A.value, (b) => (C(), M("tr", {
                key: b.index,
                class: ct({ "rlzc-row-warn": o.value.has(b.index) })
              }, [
                m("td", null, R(b.index) + R(b.snap.entry ? "★" : ""), 1),
                m("td", null, R(b.snap.phase), 1),
                m("td", null, R(b.snap.round), 1),
                m("td", null, R(b.snap.clock ?? ""), 1),
                m("td", null, R(b.snap.limit?.text ?? ""), 1),
                m("td", null, R(b.snap.injected.join(" ")), 1)
              ], 2))), 128))
            ])
          ])
        ]),
        m("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: h[2] || (h[2] = //@ts-ignore
          (...b) => T(Hi) && T(Hi)(...b))
        }, "删除副本会话", 8, kd)
      ], 64)) : (C(), M("p", Kf, "当前聊天没有副本会话。"))
    ]));
  }
}), zd = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, Ed = { class: "rlzc-head" }, $d = { class: "rlzc-tabs" }, Cd = ["onClick"], Md = { class: "rlzc-body" }, Id = /* @__PURE__ */ zt({
  __name: "Panel",
  setup(e) {
    const t = [
      { id: "system", label: "系统" },
      { id: "settings", label: "设置" },
      { id: "debug", label: "调试" }
    ];
    async function n(s) {
      if (s === "debug" && !g.debugUnlocked) {
        if (!await Ke("此页会显示副本真相，确定要打开吗？")) return;
        g.debugUnlocked = !0;
      }
      g.tab = s;
    }
    return (s, i) => (C(), M("div", {
      class: "rlzc-backdrop",
      onClick: i[1] || (i[1] = Bl((A) => T(g).panelOpen = !1, ["self"]))
    }, [
      m("section", zd, [
        m("header", Ed, [
          i[2] || (i[2] = m("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          m("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: i[0] || (i[0] = (A) => T(g).panelOpen = !1)
          }, "×")
        ]),
        m("nav", $d, [
          (C(), M(Q, null, ge(t, (A) => m("button", {
            key: A.id,
            class: ct({ on: T(g).tab === A.id }),
            onClick: (o) => n(A.id)
          }, R(A.label), 11, Cd)), 64))
        ]),
        m("div", Md, [
          T(g).tab === "system" ? (C(), et(_f, { key: 0 })) : T(g).tab === "settings" ? (C(), et(Hf, { key: 1 })) : T(g).tab === "debug" && T(g).debugUnlocked ? (C(), et(Sd, { key: 2 })) : J("", !0)
        ])
      ])
    ]));
  }
}), Td = /* @__PURE__ */ zt({
  __name: "App",
  setup(e) {
    return (t, n) => (C(), M(Q, null, [
      T(g).settings.showBall ? (C(), et(Fu, { key: 0 })) : J("", !0),
      T(g).panelOpen ? (C(), et(Id, { key: 1 })) : J("", !0)
    ], 64));
  }
}), Pd = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}';
function Rd(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function Er(e, t, n) {
  const s = me().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function Nd() {
  const e = Rd();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await Er("/api/extensions/version", e, t);
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
async function Fd(e) {
  const t = await Er("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const Zi = "rlzc-host", Ji = "rlzc-menu-btn", Qi = "rlzc-settings-drawer";
function Od() {
  if (document.getElementById(Zi)) return;
  const e = document.createElement("div");
  e.id = Zi, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = Pd, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), Gl(Td).mount(s), $r(), Cr();
}
function $r(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => $r(e + 1), 500);
    return;
  }
  if (document.getElementById(Ji)) return;
  const n = document.createElement("div");
  n.id = Ji, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const i = document.createElement("span");
  i.textContent = "回廊种菜系统", n.append(s, i), n.addEventListener("click", () => {
    g.panelOpen = !g.panelOpen;
  }), t.appendChild(n);
}
function Cr(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => Cr(e + 1), 500);
    return;
  }
  if (document.getElementById(Qi)) return;
  const n = (ee, fe = "", de = "") => {
    const Oe = document.createElement(ee);
    return fe && (Oe.className = fe), de && (Oe.textContent = de), Oe;
  }, s = n("div");
  s.id = Qi;
  const i = n("div", "inline-drawer"), A = n("div", "inline-drawer-toggle inline-drawer-header"), o = n("div", "flex-container alignitemscenter margin0"), r = n("small", "rlzc-update-badge", "有更新");
  r.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", o.append(n("b", "", "回廊种菜系统"), r), A.append(o, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const l = n("div", "inline-drawer-content"), c = n("div", "menu_button menu_button_icon", "打开面板");
  c.prepend(n("i", "fa-solid fa-seedling")), c.addEventListener("click", () => g.panelOpen = !0);
  const u = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  u.addEventListener("click", () => {
    g.settings.ball = { x: null, y: null }, g.settings.showBall = !0, He();
  });
  const f = n("label", "checkbox_label"), p = document.createElement("input");
  p.type = "checkbox", p.addEventListener("change", () => {
    g.settings.showBall = p.checked, He();
  }), f.append(p, n("span", "", "显示悬浮球")), Gn(() => g.settings.showBall, (ee) => p.checked = ee, { immediate: !0 });
  const h = n("div", "flex-container");
  h.append(c, u);
  const b = n("div", "flex-container alignitemscenter"), y = n("small", "rlzc-update-status", "正在检查更新…"), L = n("div", "menu_button menu_button_icon", "检查更新"), j = n("div", "menu_button menu_button_icon", "立即更新"), N = n("div", "menu_button menu_button_icon", "刷新页面");
  j.style.display = "none", N.style.display = "none", b.append(y, L, j, N);
  let O = null, I = !1;
  const K = async () => {
    if (!I) {
      I = !0, y.textContent = "正在检查更新…", j.style.display = "none";
      try {
        O = await Nd();
        const ee = O.commit ? `（${O.commit}）` : "";
        O.isGit ? O.isUpToDate ? y.textContent = `已是最新版本${ee}` : (y.textContent = `有新版本可以更新，当前${ee || "版本较旧"}`, j.style.display = "") : y.textContent = "不是用仓库地址安装的，无法检查更新。", r.style.display = O.isGit && !O.isUpToDate ? "" : "none";
      } catch (ee) {
        y.textContent = `检查更新失败：${ee.message}`;
      } finally {
        I = !1;
      }
    }
  };
  L.addEventListener("click", () => void K()), j.addEventListener("click", async () => {
    if (!(!O || I)) {
      I = !0, y.textContent = "正在更新…", j.style.display = "none";
      try {
        await Fd(O), r.style.display = "none", y.textContent = "更新完成，刷新页面后生效。", N.style.display = "";
      } catch (ee) {
        y.textContent = `更新失败：${ee.message}`, j.style.display = "";
      } finally {
        I = !1;
      }
    }
  }), N.addEventListener("click", () => location.reload()), setTimeout(() => void K(), 3e3), l.append(h, f, b, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), i.append(A, l), s.append(i), t.append(s);
}
globalThis.rlzcInterceptor = zu;
function _s() {
  xu(), Je("MESSAGE_RECEIVED", (e) => Pu(Number(e))), Je("CHARACTER_MESSAGE_RENDERED", (e) => ys(Number(e))), Je("MESSAGE_DELETED", () => bs()), Je("MESSAGE_SWIPED", (e) => {
    Eu(Number(e)), ys(Number(e));
  }), Je("MESSAGE_EDITED", () => bs()), Je("MESSAGE_UPDATED", (e) => {
    bs(), ys(Number(e));
  }), Je("CHAT_CHANGED", () => Ui()), Je("MORE_MESSAGES_LOADED", () => Xs()), Od(), Ui(), console.log("[rlzc] 回廊种菜系统已加载", g.settings);
}
const qi = window.jQuery;
typeof qi == "function" ? qi(() => _s()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", _s) : _s();
