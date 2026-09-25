/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function SA(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const J = {}, ut = [], dt = () => {
}, Vs = () => !1, Tn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Rn = (e) => e.startsWith("onUpdate:"), ke = Object.assign, Ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, fr = Object.prototype.hasOwnProperty, Y = (e, t) => fr.call(e, t), O = Array.isArray, Qe = (e) => nn(e) === "[object Map]", gt = (e) => nn(e) === "[object Set]", QA = (e) => nn(e) === "[object Date]", W = (e) => typeof e == "function", ne = (e) => typeof e == "string", Re = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", Gs = (e) => (q(e) || W(e)) && W(e.then) && W(e.catch), Ys = Object.prototype.toString, nn = (e) => Ys.call(e), dr = (e) => nn(e).slice(8, -1), Hs = (e) => nn(e) === "[object Object]", zA = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Vt = /* @__PURE__ */ SA(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Pn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, pr = /-\w/g, _e = Pn(
  (e) => e.replace(pr, (t) => t.slice(1).toUpperCase())
), hr = /\B([A-Z])/g, vt = Pn(
  (e) => e.replace(hr, "-$1").toLowerCase()
), Ks = Pn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Jn = Pn(
  (e) => e ? `on${Ks(e)}` : ""
), Te = (e, t) => !Object.is(e, t), hn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Zs = (e, t, n, A = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: A,
    value: n
  });
}, Fn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let qA;
const Nn = () => qA || (qA = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function On(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const A = e[n], s = ne(A) ? br(A) : On(A);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (ne(e) || q(e))
    return e;
}
const mr = /;(?![^(]*\))/g, gr = /:([^]+)/, xr = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function br(e) {
  const t = {};
  return e.replace(xr, (n) => n.startsWith("/*") ? "" : n).split(mr).forEach((n) => {
    if (n) {
      const A = n.split(gr);
      A.length > 1 && (t[A[0].trim()] = A[1].trim());
    }
  }), t;
}
function _t(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (O(e))
    for (let n = 0; n < e.length; n++) {
      const A = _t(e[n]);
      A && (t += A + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const yr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", vr = /* @__PURE__ */ SA(yr);
function Us(e) {
  return !!e || e === "";
}
function _r(e, t, n) {
  if (e.length !== t.length) return !1;
  let A = !0;
  for (let s = 0; A && s < e.length; s++)
    A = Xe(e[s], t[s], n);
  return A;
}
function XA(e, t, n) {
  if (e.size !== t.size) return !1;
  const A = Array.from(t), s = new Uint8Array(A.length);
  for (const i of e) {
    let r = -1;
    for (let o = 0; o < A.length; o++)
      if (!s[o] && Xe(i, A[o], n)) {
        r = o;
        break;
      }
    if (r < 0) return !1;
    s[r] = 1;
  }
  return !0;
}
function wr(e, t, n) {
  let A = Qe(e), s = Qe(t);
  if (A || s || (A = gt(e), s = gt(t), A || s))
    return A && s ? XA(e, t, n) : !1;
  const i = Object.keys(e).length, r = Object.keys(t).length;
  if (i !== r)
    return !1;
  for (const o in e) {
    const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
    if (l && !c || !l && c || !Xe(e[o], t[o], n))
      return !1;
  }
  return String(e) === String(t);
}
function es(e, t, n, A) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [s, i] = n;
  if (s.has(e) || i.has(t))
    return s.get(e) === t && i.get(t) === e;
  s.set(e, t), i.set(t, e);
  const r = A(e, t, n);
  return s.delete(e), i.delete(t), r;
}
function Xe(e, t, n) {
  if (e === t) return !0;
  let A = QA(e), s = QA(t);
  return A || s ? A && s ? e.getTime() === t.getTime() : !1 : (A = Re(e), s = Re(t), A || s ? e === t : (A = O(e), s = O(t), A || s ? A && s ? es(e, t, n, _r) : !1 : (A = q(e), s = q(t), A || s ? !A || !s ? !1 : es(e, t, n, wr) : String(e) === String(t))));
}
function kr(e, t) {
  return e.findIndex((n) => Xe(n, t));
}
const Js = (e) => !!(e && e.__v_isRef === !0), N = (e) => ne(e) ? e : e == null ? "" : O(e) || q(e) && (e.toString === Ys || !W(e.toString)) ? Js(e) ? N(e.value) : JSON.stringify(e, Qs, 2) : String(e), Qs = (e, t) => Js(t) ? Qs(e, t.value) : Qe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [A, s], i) => (n[Qn(A, i) + " =>"] = s, n),
    {}
  )
} : gt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Qn(n))
} : Re(t) ? Qn(t) : q(t) && !O(t) && !Hs(t) ? String(t) : t, Qn = (e, t = "") => {
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
let ie;
class Sr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ie && (ie.active ? (this.parent = ie, this.index = (ie.scopes || (ie.scopes = [])).push(
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
        const A = this.scopes.slice();
        for (t = 0, n = A.length; t < n; t++)
          A[t].pause();
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
        const s = this.scopes.slice();
        for (t = 0, n = s.length; t < n; t++)
          s[t].resume();
      }
      const A = this.effects.slice();
      for (t = 0, n = A.length; t < n; t++)
        A[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ie;
      try {
        return ie = this, t();
      } finally {
        ie = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ie, ie = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ie === this)
        ie = this.prevScope;
      else {
        let t = ie;
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
      let n, A;
      for (n = 0, A = this.effects.length; n < A; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, A = this.cleanups.length; n < A; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const s = this.scopes.slice();
        for (n = 0, A = s.length; n < A; n++)
          s[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function zr() {
  return ie;
}
let Z;
const qn = /* @__PURE__ */ new WeakSet();
class qs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ie && (ie.active ? ie.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qn.has(this) && (qn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ei(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ts(this), ti(this);
    const t = Z, n = we;
    Z = this, we = !0;
    try {
      return this.fn();
    } finally {
      ni(this), Z = t, we = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        CA(t);
      this.deps = this.depsTail = void 0, ts(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    fA(this) && this.run();
  }
  get dirty() {
    return fA(this);
  }
}
let Xs = 0, Wt, Gt;
function ei(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Gt, Gt = e;
    return;
  }
  e.next = Wt, Wt = e;
}
function EA() {
  Xs++;
}
function $A() {
  if (--Xs > 0)
    return;
  if (Gt) {
    let t = Gt;
    for (Gt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Wt; ) {
    let t = Wt;
    for (Wt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (A) {
          e || (e = A);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ti(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ni(e) {
  let t, n = e.depsTail, A = n;
  for (; A; ) {
    const s = A.prevDep;
    A.version === -1 ? (A === n && (n = s), CA(A), Er(A)) : t = A, A.dep.activeLink = A.prevActiveLink, A.prevActiveLink = void 0, A = s;
  }
  e.deps = t, e.depsTail = n;
}
function fA(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ai(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ai(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ut) || (e.globalVersion = Ut, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !fA(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Z, A = we;
  Z = e, we = !0;
  try {
    ti(e);
    const s = e.fn(e._value);
    (t.version === 0 || Te(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    Z = n, we = A, ni(e), e.flags &= -3;
  }
}
function CA(e, t = !1) {
  const { dep: n, prevSub: A, nextSub: s } = e;
  if (A && (A.nextSub = s, e.prevSub = void 0), s && (s.prevSub = A, e.nextSub = void 0), n.subs === e && (n.subs = A, !A && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      CA(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Er(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let we = !0;
const si = [];
function et() {
  si.push(we), we = !1;
}
function tt() {
  const e = si.pop();
  we = e === void 0 ? !0 : e;
}
function ts(e) {
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
let Ut = 0;
class $r {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class IA {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Z || !we || Z === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Z)
      n = this.activeLink = new $r(Z, this), Z.deps ? (n.prevDep = Z.depsTail, Z.depsTail.nextDep = n, Z.depsTail = n) : Z.deps = Z.depsTail = n, ii(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const A = n.nextDep;
      A.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = A), n.prevDep = Z.depsTail, n.nextDep = void 0, Z.depsTail.nextDep = n, Z.depsTail = n, Z.deps === n && (Z.deps = A);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ut++, this.notify(t);
  }
  notify(t) {
    EA();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      $A();
    }
  }
}
function ii(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let A = t.deps; A; A = A.nextDep)
        ii(A);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const dA = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ Symbol(
  ""
), pA = /* @__PURE__ */ Symbol(
  ""
), Jt = /* @__PURE__ */ Symbol(
  ""
);
function oe(e, t, n) {
  if (we && Z) {
    let A = dA.get(e);
    A || dA.set(e, A = /* @__PURE__ */ new Map());
    let s = A.get(n);
    s || (A.set(n, s = new IA()), s.map = A, s.key = n), s.track();
  }
}
function Le(e, t, n, A, s, i) {
  const r = dA.get(e);
  if (!r) {
    Ut++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (EA(), t === "clear")
    r.forEach(o);
  else {
    const l = O(e), c = l && zA(n);
    if (l && n === "length") {
      const a = Number(A);
      r.forEach((d, g) => {
        (g === "length" || g === Jt || !Re(g) && g >= a) && o(d);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && o(r.get(n)), c && o(r.get(Jt)), t) {
        case "add":
          l ? c && o(r.get("length")) : (o(r.get(pt)), Qe(e) && o(r.get(pA)));
          break;
        case "delete":
          l || (o(r.get(pt)), Qe(e) && o(r.get(pA)));
          break;
        case "set":
          Qe(e) && o(r.get(pt));
          break;
      }
  }
  $A();
}
function zt(e) {
  const t = /* @__PURE__ */ B(e);
  return t === e || (oe(t, "iterate", Jt), /* @__PURE__ */ ge(e)) ? t : /* @__PURE__ */ Pe(e) ? /* @__PURE__ */ qe(e) ? t.map((n) => nt(xe(n))) : t.map(nt) : t.map(xe);
}
function jn(e) {
  return oe(e = /* @__PURE__ */ B(e), "iterate", Jt), e;
}
function Ie(e, t) {
  return /* @__PURE__ */ Pe(e) ? nt(/* @__PURE__ */ qe(e) ? xe(t) : t) : xe(t);
}
const Cr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xn(this, Symbol.iterator, (e) => Ie(this, e));
  },
  concat(...e) {
    return zt(this).concat(
      ...e.map((t) => O(t) ? zt(t) : t)
    );
  },
  entries() {
    return Xn(this, "entries", (e) => (e[1] = Ie(this, e[1]), e));
  },
  every(e, t) {
    return je(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return je(
      this,
      "filter",
      e,
      t,
      (n) => n.map((A) => Ie(this, A)),
      arguments
    );
  },
  find(e, t) {
    return je(
      this,
      "find",
      e,
      t,
      (n) => Ie(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return je(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return je(
      this,
      "findLast",
      e,
      t,
      (n) => Ie(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return je(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return je(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return eA(this, "includes", e);
  },
  indexOf(...e) {
    return eA(this, "indexOf", e);
  },
  join(e) {
    return zt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return eA(this, "lastIndexOf", e);
  },
  map(e, t) {
    return je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return jt(this, "pop");
  },
  push(...e) {
    return jt(this, "push", e);
  },
  reduce(e, ...t) {
    return ns(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ns(this, "reduceRight", e, t);
  },
  shift() {
    return jt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return jt(this, "splice", e);
  },
  toReversed() {
    return zt(this).toReversed();
  },
  toSorted(e) {
    return zt(this).toSorted(e);
  },
  toSpliced(...e) {
    return zt(this).toSpliced(...e);
  },
  unshift(...e) {
    return jt(this, "unshift", e);
  },
  values() {
    return Xn(this, "values", (e) => Ie(this, e));
  }
};
function Xn(e, t, n) {
  const A = jn(e), s = A[t]();
  return A !== e && !/* @__PURE__ */ ge(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const Ir = Array.prototype;
function je(e, t, n, A, s, i) {
  const r = jn(e), o = r !== e && !/* @__PURE__ */ ge(e), l = r[t];
  if (l !== Ir[t]) {
    const d = l.apply(e, i);
    return o ? xe(d) : d;
  }
  let c = n;
  r !== e && (o ? c = function(d, g) {
    return n.call(this, Ie(e, d), g, e);
  } : n.length > 2 && (c = function(d, g) {
    return n.call(this, d, g, e);
  }));
  const a = l.call(r, c, A);
  return o && s ? s(a) : a;
}
function ns(e, t, n, A) {
  const s = jn(e), i = s !== e && !/* @__PURE__ */ ge(e);
  let r = n, o = !1;
  s !== e && (i ? (o = A.length === 0, r = function(c, a, d) {
    return o && (o = !1, c = Ie(e, c)), n.call(this, c, Ie(e, a), d, e);
  }) : n.length > 3 && (r = function(c, a, d) {
    return n.call(this, c, a, d, e);
  }));
  const l = s[t](r, ...A);
  return o ? Ie(e, l) : l;
}
function eA(e, t, n) {
  const A = /* @__PURE__ */ B(e);
  oe(A, "iterate", Jt);
  const s = A[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ RA(n[0]) ? (n[0] = /* @__PURE__ */ B(n[0]), A[t](...n)) : s;
}
function jt(e, t, n = []) {
  et(), EA();
  const A = (/* @__PURE__ */ B(e))[t].apply(e, n);
  return $A(), tt(), A;
}
const Mr = /* @__PURE__ */ SA("__proto__,__v_isRef,__isVue"), ri = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Re)
);
function Tr(e) {
  Re(e) || (e = String(e));
  const t = /* @__PURE__ */ B(this);
  return oe(t, "has", e), t.hasOwnProperty(e);
}
class oi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, A) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return A === (s ? i ? Vr : ui : i ? ai : ci).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(A) ? t : void 0;
    const r = O(t);
    if (!s) {
      let l;
      if (r && (l = Cr[n]))
        return l;
      if (n === "hasOwnProperty")
        return Tr;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ce(t) ? t : A
    );
    if ((Re(n) ? ri.has(n) : Mr(n)) || (s || oe(t, "get", n), i))
      return o;
    if (/* @__PURE__ */ ce(o)) {
      const l = r && zA(n) ? o : o.value;
      return s && q(l) ? /* @__PURE__ */ mA(l) : l;
    }
    return q(o) ? s ? /* @__PURE__ */ mA(o) : /* @__PURE__ */ Dn(o) : o;
  }
}
class li extends oi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, A, s) {
    let i = t[n];
    const r = O(t) && zA(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Pe(i);
      if (!/* @__PURE__ */ ge(A) && !/* @__PURE__ */ Pe(A) && (i = /* @__PURE__ */ B(i), A = /* @__PURE__ */ B(A)), !r && /* @__PURE__ */ ce(i) && !/* @__PURE__ */ ce(A))
        return c || (i.value = A), !0;
    }
    const o = r ? Number(n) < t.length : Y(t, n), l = Reflect.set(
      t,
      n,
      A,
      /* @__PURE__ */ ce(t) ? t : s
    );
    return t === /* @__PURE__ */ B(s) && l && (o ? Te(A, i) && Le(t, "set", n, A) : Le(t, "add", n, A)), l;
  }
  deleteProperty(t, n) {
    const A = Y(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && A && Le(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const A = Reflect.has(t, n);
    return (!Re(n) || !ri.has(n)) && oe(t, "has", n), A;
  }
  ownKeys(t) {
    return oe(
      t,
      "iterate",
      O(t) ? "length" : pt
    ), Reflect.ownKeys(t);
  }
}
class Rr extends oi {
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
const Pr = /* @__PURE__ */ new li(), Fr = /* @__PURE__ */ new Rr(), Nr = /* @__PURE__ */ new li(!0);
const hA = (e) => e, an = (e) => Reflect.getPrototypeOf(e);
function Or(e, t, n) {
  return function(...A) {
    const s = this.__v_raw, i = /* @__PURE__ */ B(s), r = Qe(i), o = e === "entries" || e === Symbol.iterator && r, l = e === "keys" && r, c = s[e](...A), a = n ? hA : t ? nt : xe;
    return !t && oe(
      i,
      "iterate",
      l ? pA : pt
    ), ke(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: g } = c.next();
          return g ? { value: d, done: g } : {
            value: o ? [a(d[0]), a(d[1])] : a(d),
            done: g
          };
        }
      }
    );
  };
}
function un(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function jr(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, r = /* @__PURE__ */ B(i), o = /* @__PURE__ */ B(s);
      e || (Te(s, o) && oe(r, "get", s), oe(r, "get", o));
      const { has: l } = an(r), c = t ? hA : e ? nt : xe;
      if (l.call(r, s))
        return c(i.get(s));
      if (l.call(r, o))
        return c(i.get(o));
      i !== r && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && oe(/* @__PURE__ */ B(s), "iterate", pt), s.size;
    },
    has(s) {
      const i = this.__v_raw, r = /* @__PURE__ */ B(i), o = /* @__PURE__ */ B(s);
      return e || (Te(s, o) && oe(r, "has", s), oe(r, "has", o)), s === o ? i.has(s) : i.has(s) || i.has(o);
    },
    forEach(s, i) {
      const r = this, o = r.__v_raw, l = /* @__PURE__ */ B(o), c = t ? hA : e ? nt : xe;
      return !e && oe(l, "iterate", pt), o.forEach((a, d) => s.call(i, c(a), c(d), r));
    }
  };
  return ke(
    n,
    e ? {
      add: un("add"),
      set: un("set"),
      delete: un("delete"),
      clear: un("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ B(this), r = an(i), o = /* @__PURE__ */ B(s), l = !t && !/* @__PURE__ */ ge(s) && !/* @__PURE__ */ Pe(s) ? o : s;
        return r.has.call(i, l) || Te(s, l) && r.has.call(i, s) || Te(o, l) && r.has.call(i, o) || (i.add(l), Le(i, "add", l, l)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ ge(i) && !/* @__PURE__ */ Pe(i) && (i = /* @__PURE__ */ B(i));
        const r = /* @__PURE__ */ B(this), { has: o, get: l } = an(r);
        let c = o.call(r, s);
        c || (s = /* @__PURE__ */ B(s), c = o.call(r, s));
        const a = l.call(r, s);
        return r.set(s, i), c ? Te(i, a) && Le(r, "set", s, i) : Le(r, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ B(this), { has: r, get: o } = an(i);
        let l = r.call(i, s);
        l || (s = /* @__PURE__ */ B(s), l = r.call(i, s)), o && o.call(i, s);
        const c = i.delete(s);
        return l && Le(i, "delete", s, void 0), c;
      },
      clear() {
        const s = /* @__PURE__ */ B(this), i = s.size !== 0, r = s.clear();
        return i && Le(
          s,
          "clear",
          void 0,
          void 0
        ), r;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = Or(s, e, t);
  }), n;
}
function MA(e, t) {
  const n = jr(e, t);
  return (A, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? A : Reflect.get(
    Y(n, s) && s in A ? n : A,
    s,
    i
  );
}
const Dr = {
  get: /* @__PURE__ */ MA(!1, !1)
}, Br = {
  get: /* @__PURE__ */ MA(!1, !0)
}, Lr = {
  get: /* @__PURE__ */ MA(!0, !1)
};
const ci = /* @__PURE__ */ new WeakMap(), ai = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), Vr = /* @__PURE__ */ new WeakMap();
function Wr(e) {
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
function Dn(e) {
  return /* @__PURE__ */ Pe(e) ? e : TA(
    e,
    !1,
    Pr,
    Dr,
    ci
  );
}
// @__NO_SIDE_EFFECTS__
function Gr(e) {
  return TA(
    e,
    !1,
    Nr,
    Br,
    ai
  );
}
// @__NO_SIDE_EFFECTS__
function mA(e) {
  return TA(
    e,
    !0,
    Fr,
    Lr,
    ui
  );
}
function TA(e, t, n, A, s) {
  if (!q(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const r = Wr(dr(e));
  if (r === 0)
    return e;
  const o = new Proxy(
    e,
    r === 2 ? A : n
  );
  return s.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return /* @__PURE__ */ Pe(e) ? /* @__PURE__ */ qe(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function RA(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function B(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ B(t) : e;
}
function Yr(e) {
  return !Y(e, "__v_skip") && Object.isExtensible(e) && Zs(e, "__v_skip", !0), e;
}
const xe = (e) => q(e) ? /* @__PURE__ */ Dn(e) : e, nt = (e) => q(e) ? /* @__PURE__ */ mA(e) : e;
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return Hr(e, !1);
}
function Hr(e, t) {
  return /* @__PURE__ */ ce(e) ? e : new Kr(e, t);
}
class Kr {
  constructor(t, n) {
    this.dep = new IA(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ B(t), this._value = n ? t : xe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, A = this.__v_isShallow || /* @__PURE__ */ ge(t) || /* @__PURE__ */ Pe(t);
    t = A ? t : /* @__PURE__ */ B(t), Te(t, n) && (this._rawValue = t, this._value = A ? t : xe(t), this.dep.trigger());
  }
}
function R(e) {
  return /* @__PURE__ */ ce(e) ? e.value : e;
}
const Zr = {
  get: (e, t, n) => t === "__v_raw" ? e : R(Reflect.get(e, t, n)),
  set: (e, t, n, A) => {
    const s = e[t];
    return /* @__PURE__ */ ce(s) && !/* @__PURE__ */ ce(n) ? (s.value = n, !0) : Reflect.set(e, t, n, A);
  }
};
function fi(e) {
  return /* @__PURE__ */ qe(e) ? e : new Proxy(e, Zr);
}
class Ur {
  constructor(t, n, A) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new IA(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ut - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = A;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Z !== this)
      return ei(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ai(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Jr(e, t, n = !1) {
  let A, s;
  return W(e) ? A = e : (A = e.get, s = e.set), new Ur(A, s, n);
}
const fn = {}, vn = /* @__PURE__ */ new WeakMap();
let ct;
function Qr(e, t = !1, n = ct) {
  if (n) {
    let A = vn.get(n);
    A || vn.set(n, A = []), A.push(e);
  }
}
function qr(e, t, n = J) {
  const { immediate: A, deep: s, once: i, scheduler: r, augmentJob: o, call: l } = n, c = (P) => s ? P : /* @__PURE__ */ ge(P) || s === !1 || s === 0 ? Ve(P, 1) : Ve(P);
  let a, d, g, m, I = !1, C = !1;
  if (/* @__PURE__ */ ce(e) ? (d = () => e.value, I = /* @__PURE__ */ ge(e)) : /* @__PURE__ */ qe(e) ? (d = () => c(e), I = !0) : O(e) ? (C = !0, I = e.some((P) => /* @__PURE__ */ qe(P) || /* @__PURE__ */ ge(P)), d = () => e.map((P) => {
    if (/* @__PURE__ */ ce(P))
      return P.value;
    if (/* @__PURE__ */ qe(P))
      return c(P);
    if (W(P))
      return l ? l(P, 2) : P();
  })) : W(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (g) {
      et();
      try {
        g();
      } finally {
        tt();
      }
    }
    const P = ct;
    ct = a;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      ct = P;
    }
  } : d = dt, t && s) {
    const P = d, ee = s === !0 ? 1 / 0 : s;
    d = () => Ve(P(), ee);
  }
  const U = zr(), H = () => {
    a.stop(), U && U.active && Ws(U.effects, a);
  };
  if (i && t) {
    const P = t;
    t = (...ee) => {
      const he = P(...ee);
      return H(), he;
    };
  }
  let j = C ? new Array(e.length).fill(fn) : fn;
  const L = (P) => {
    if (!(!(a.flags & 1) || !a.dirty && !P))
      if (t) {
        const ee = a.run();
        if (P || s || I || (C ? ee.some((he, ue) => Te(he, j[ue])) : Te(ee, j))) {
          g && g();
          const he = ct;
          ct = a;
          try {
            const ue = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              j === fn ? void 0 : C && j[0] === fn ? [] : j,
              m
            ];
            j = ee, l ? l(t, 3, ue) : (
              // @ts-expect-error
              t(...ue)
            );
          } finally {
            ct = he;
          }
        }
      } else
        a.run();
  };
  return o && o(L), a = new qs(d), a.scheduler = r ? () => r(L, !1) : L, m = (P) => Qr(P, !1, a), g = a.onStop = () => {
    const P = vn.get(a);
    if (P) {
      if (l)
        l(P, 4);
      else
        for (const ee of P) ee();
      vn.delete(a);
    }
  }, t ? A ? L(!0) : j = a.run() : r ? r(L.bind(null, !0), !0) : a.run(), H.pause = a.pause.bind(a), H.resume = a.resume.bind(a), H.stop = H, H;
}
function Ve(e, t = 1 / 0, n) {
  if (t <= 0 || !q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ce(e))
    Ve(e.value, t, n);
  else if (O(e))
    for (let A = 0; A < e.length; A++)
      Ve(e[A], t, n);
  else if (gt(e) || Qe(e))
    e.forEach((A) => {
      Ve(A, t, n);
    });
  else if (Hs(e)) {
    for (const A in e)
      Ve(e[A], t, n);
    for (const A of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, A) && Ve(e[A], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function An(e, t, n, A) {
  try {
    return A ? e(...A) : e();
  } catch (s) {
    Bn(s, t, n);
  }
}
function Ne(e, t, n, A) {
  if (W(e)) {
    const s = An(e, t, n, A);
    return s && Gs(s) && s.catch((i) => {
      Bn(i, t, n);
    }), s;
  }
  if (O(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Ne(e[i], t, n, A));
    return s;
  }
}
function Bn(e, t, n, A = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || J;
  if (t) {
    let o = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, l, c) === !1)
            return;
      }
      o = o.parent;
    }
    if (i) {
      et(), An(i, null, 10, [
        e,
        l,
        c
      ]), tt();
      return;
    }
  }
  Xr(e, n, s, A, r);
}
function Xr(e, t, n, A = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const le = [];
let Ce = -1;
const $t = [];
let Ue = null, Et = 0;
const di = /* @__PURE__ */ Promise.resolve();
let _n = null;
function pi(e) {
  const t = _n || di;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function eo(e) {
  let t = Ce + 1, n = le.length;
  for (; t < n; ) {
    const A = t + n >>> 1, s = le[A], i = Qt(s);
    i < e || i === e && s.flags & 2 ? t = A + 1 : n = A;
  }
  return t;
}
function PA(e) {
  if (!(e.flags & 1)) {
    const t = Qt(e), n = le[le.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Qt(n) ? le.push(e) : le.splice(eo(t), 0, e), e.flags |= 1, hi();
  }
}
function hi() {
  _n || (_n = di.then(gi));
}
function to(e) {
  if (!O(e))
    Ue && e.id === -1 ? Ue.splice(Et + 1, 0, e) : e.flags & 1 || ($t.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      $t.push(e[t]);
  hi();
}
function As(e, t, n = Ce + 1) {
  for (; n < le.length; n++) {
    const A = le[n];
    if (A && A.flags & 2) {
      if (e && A.id !== e.uid)
        continue;
      le.splice(n, 1), n--, A.flags & 4 && (A.flags &= -2), A(), A.flags & 4 || (A.flags &= -2);
    }
  }
}
function mi(e) {
  if ($t.length) {
    const t = [...new Set($t)].sort(
      (n, A) => Qt(n) - Qt(A)
    );
    if ($t.length = 0, Ue) {
      for (let n = 0; n < t.length; n++)
        Ue.push(t[n]);
      return;
    }
    for (Ue = t, Et = 0; Et < Ue.length; Et++) {
      const n = Ue[Et];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ue = null, Et = 0;
  }
}
const Qt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function gi(e) {
  try {
    for (Ce = 0; Ce < le.length; Ce++) {
      const t = le[Ce];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), An(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ce < le.length; Ce++) {
      const t = le[Ce];
      t && (t.flags &= -2);
    }
    Ce = -1, le.length = 0, mi(), _n = null, (le.length || $t.length) && gi();
  }
}
let me = null, xi = null;
function wn(e) {
  const t = me;
  return me = e, xi = e && e.type.__scopeId || null, t;
}
function no(e, t = me, n) {
  if (!t || e._n)
    return e;
  const A = (...s) => {
    A._d && as(-1);
    const i = wn(t), r = ht.length;
    let o;
    try {
      o = e(...s);
    } finally {
      for (let l = ht.length; l > r; l--) Ni();
      wn(i), A._d && as(1);
    }
    return o;
  };
  return A._n = !0, A._c = !0, A._d = !0, A;
}
function Ct(e, t) {
  if (me === null)
    return e;
  const n = Gn(me), A = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, r, o, l = J] = t[s];
    i && (W(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ve(r), A.push({
      dir: i,
      instance: n,
      value: r,
      oldValue: void 0,
      arg: o,
      modifiers: l
    }));
  }
  return e;
}
function ot(e, t, n, A) {
  const s = e.dirs, i = t && t.dirs;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    i && (o.oldValue = i[r].value);
    let l = o.dir[A];
    l && (et(), Ne(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), tt());
  }
}
function Ao(e, t, n = !1) {
  const A = Lo();
  if (A || It) {
    let s = It ? It._context.provides : A ? A.parent == null || A.ce ? A.vnode.appContext && A.vnode.appContext.provides : A.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && W(t) ? t.call(A && A.proxy) : t;
  }
}
const so = /* @__PURE__ */ Symbol.for("v-scx"), io = () => Ao(so);
function xt(e, t, n) {
  return ro(e, t, n);
}
function ro(e, t, n = J) {
  const { immediate: A, deep: s, flush: i, once: r } = n, o = ke({}, n), l = t && A || !t && i !== "post";
  let c;
  if (en) {
    if (i === "sync") {
      const m = io();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = dt, m.resume = dt, m.pause = dt, m;
    }
  }
  const a = At;
  o.call = (m, I, C) => Ne(m, a, I, C);
  let d = !1;
  i === "post" ? o.scheduler = (m) => {
    ae(m, a && a.suspense);
  } : i !== "sync" && (d = !0, o.scheduler = (m, I) => {
    I ? m() : PA(m);
  }), o.augmentJob = (m) => {
    t && (m.flags |= 4), d && (m.flags |= 2, a && (m.id = a.uid, m.i = a));
  };
  const g = qr(e, t, o);
  return en && (c ? c.push(g) : l && g()), g;
}
const oo = /* @__PURE__ */ Symbol("_vte"), Ln = (e) => e.__isTeleport, tA = /* @__PURE__ */ Symbol("_leaveCb");
function lo(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ge) {
        t = n;
        break;
      }
  }
  return t;
}
function bi(e) {
  if (!yi(e))
    return Ln(e.type) && e.children ? lo(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && W(n.default))
      return n.default();
  }
}
function FA(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    FA(
      Ln(n.type) && bi(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function rt(e, t) {
  return W(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ke({ name: e.name }, t, { setup: e })
  ) : e;
}
function co(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ss(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const kn = /* @__PURE__ */ new WeakMap();
function Yt(e, t, n, A, s = !1) {
  if (O(e)) {
    e.forEach(
      (C, U) => Yt(
        C,
        t && (O(t) ? t[U] : t),
        n,
        A,
        s
      )
    );
    return;
  }
  if (Ht(A) && !s) {
    A.shapeFlag & 512 && A.type.__asyncResolved && A.component.subTree.component && Yt(e, t, n, A.component.subTree);
    return;
  }
  const i = A.shapeFlag & 4 ? Gn(A.component) : A.el, r = s ? null : i, { i: o, r: l } = e, c = t && t.r, a = o.refs === J ? o.refs = {} : o.refs, d = o.setupState, g = /* @__PURE__ */ B(d), m = d === J ? Vs : (C) => ss(a, C) ? !1 : Y(g, C), I = (C, U) => !(U && ss(a, U));
  if (c != null && c !== l) {
    if (is(t), ne(c))
      a[c] = null, m(c) && (d[c] = null);
    else if (/* @__PURE__ */ ce(c)) {
      const C = t;
      I(c, C.k) && (c.value = null), C.k && (a[C.k] = null);
    }
  }
  if (W(l))
    An(l, o, 12, [r, a]);
  else {
    const C = ne(l), U = /* @__PURE__ */ ce(l);
    if (C || U) {
      const H = () => {
        if (e.f) {
          const j = C ? m(l) ? d[l] : a[l] : I() || !e.k ? l.value : a[e.k];
          if (s)
            O(j) && Ws(j, i);
          else if (O(j))
            j.includes(i) || j.push(i);
          else if (C)
            a[l] = [i], m(l) && (d[l] = a[l]);
          else {
            const L = [i];
            I(l, e.k) && (l.value = L), e.k && (a[e.k] = L);
          }
        } else C ? (a[l] = r, m(l) && (d[l] = r)) : U && (I(l, e.k) && (l.value = r), e.k && (a[e.k] = r));
      };
      if (r) {
        const j = () => {
          H(), kn.delete(e);
        };
        j.id = -1, kn.set(e, j), ae(j, n);
      } else
        is(e), H();
    }
  }
}
function is(e) {
  const t = kn.get(e);
  t && (t.flags |= 8, kn.delete(e));
}
Nn().requestIdleCallback;
Nn().cancelIdleCallback;
const Ht = (e) => !!e.type.__asyncLoader, yi = (e) => e.type.__isKeepAlive;
function ao(e, t, n = At, A = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      et();
      const o = jA(n), l = Ne(t, n, e, r);
      return o(), tt(), l;
    });
    return A ? s.unshift(i) : s.push(i), i;
  }
}
const vi = (e) => (t, n = At) => {
  (!en || e === "sp") && ao(e, (...A) => t(...A), n);
}, uo = vi("m"), _i = vi(
  "bum"
), fo = /* @__PURE__ */ Symbol.for("v-ndc");
function ve(e, t, n, A) {
  let s;
  const i = n, r = O(e);
  if (r || ne(e)) {
    const o = r && /* @__PURE__ */ qe(e);
    let l = !1, c = !1;
    o && (l = !/* @__PURE__ */ ge(e), c = /* @__PURE__ */ Pe(e), e = jn(e)), s = new Array(e.length);
    for (let a = 0, d = e.length; a < d; a++)
      s[a] = t(
        l ? c ? nt(xe(e[a])) : xe(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let o = 0; o < e; o++)
      s[o] = t(o + 1, o, void 0, i);
  } else if (q(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (o, l) => t(o, l, void 0, i)
      );
    else {
      const o = Object.keys(e);
      s = new Array(o.length);
      for (let l = 0, c = o.length; l < c; l++) {
        const a = o[l];
        s[l] = t(e[a], a, l, i);
      }
    }
  else
    s = [];
  return s;
}
const gA = (e) => e ? Bi(e) ? Gn(e) : gA(e.parent) : null, Kt = (
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
    $parent: (e) => gA(e.parent),
    $root: (e) => gA(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      PA(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = pi.bind(e.proxy)),
    $watch: (e) => dt
  })
), nA = (e, t) => e !== J && !e.__isScriptSetup && Y(e, t), po = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: A, data: s, props: i, accessCache: r, type: o, appContext: l } = e;
    if (t[0] !== "$") {
      const g = r[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return A[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (nA(A, t))
          return r[t] = 1, A[t];
        if (Y(i, t))
          return r[t] = 3, i[t];
        if (n !== J && Y(n, t))
          return r[t] = 4, n[t];
        r[t] = 0;
      }
    }
    const c = Kt[t];
    let a, d;
    if (c)
      return t === "$attrs" && oe(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (a = o.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== J && Y(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      d = l.config.globalProperties, Y(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: A, setupState: s, ctx: i } = e;
    return nA(s, t) ? (s[t] = n, !0) : Y(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: A, appContext: s, props: i, type: r }
  }, o) {
    let l;
    return !!(n[o] || nA(t, o) || Y(i, o) || Y(A, o) || Y(Kt, o) || Y(s.config.globalProperties, o) || (l = r.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Y(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function wi() {
  return {
    app: null,
    config: {
      isNativeTag: Vs,
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
let ho = 0;
function mo(e, t) {
  return function(A, s = null) {
    W(A) || (A = ke({}, A)), s != null && !q(s) && (s = null);
    const i = wi(), r = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const c = i.app = {
      _uid: ho++,
      _component: A,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Ko,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...d) {
        return r.has(a) || (a && W(a.install) ? (r.add(a), a.install(c, ...d)) : W(a) && (r.add(a), a(c, ...d))), c;
      },
      mixin(a) {
        return c;
      },
      component(a, d) {
        return d ? (i.components[a] = d, c) : i.components[a];
      },
      directive(a, d) {
        return d ? (i.directives[a] = d, c) : i.directives[a];
      },
      mount(a, d, g) {
        if (!l) {
          const m = c._ceVNode || We(A, s);
          return m.appContext = i, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(m, a, g), l = !0, c._container = a, a.__vue_app__ = c, Gn(m.component);
        }
      },
      onUnmount(a) {
        o.push(a);
      },
      unmount() {
        l && (Ne(
          o,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(a, d) {
        return i.provides[a] = d, c;
      },
      runWithContext(a) {
        const d = It;
        It = c;
        try {
          return a();
        } finally {
          It = d;
        }
      }
    };
    return c;
  };
}
let It = null;
const go = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_e(t)}Modifiers`] || e[`${vt(t)}Modifiers`];
function xo(e, t, ...n) {
  if (e.isUnmounted) return;
  const A = e.vnode.props || J;
  let s = n;
  const i = t.startsWith("update:"), r = i && go(A, t.slice(7));
  r && (r.trim && (s = n.map((a) => ne(a) ? a.trim() : a)), r.number && (s = s.map(Fn)));
  let o, l = A[o = Jn(t)] || // also try camelCase event handler (#2249)
  A[o = Jn(_e(t))];
  !l && i && (l = A[o = Jn(vt(t))]), l && Ne(
    l,
    e,
    6,
    s
  );
  const c = A[o + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, Ne(
      c,
      e,
      6,
      s
    );
  }
}
function bo(e, t, n = !1) {
  const A = t.emitsCache, s = A.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let r = {};
  return i ? (O(i) ? i.forEach((o) => r[o] = null) : ke(r, i), q(e) && A.set(e, r), r) : (q(e) && A.set(e, null), null);
}
function Vn(e, t) {
  return !e || !Tn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, vt(t)) || Y(e, t));
}
function rs(e) {
  const {
    type: t,
    vnode: n,
    proxy: A,
    withProxy: s,
    propsOptions: [i],
    slots: r,
    attrs: o,
    emit: l,
    render: c,
    renderCache: a,
    props: d,
    data: g,
    setupState: m,
    ctx: I,
    inheritAttrs: C
  } = e, U = wn(e);
  let H, j;
  try {
    if (n.shapeFlag & 4) {
      const P = s || A, ee = P;
      H = Me(
        c.call(
          ee,
          P,
          a,
          d,
          m,
          g,
          I
        )
      ), j = o;
    } else {
      const P = t;
      H = Me(
        P.length > 1 ? P(
          d,
          { attrs: o, slots: r, emit: l }
        ) : P(
          d,
          null
        )
      ), j = t.props ? o : yo(o);
    }
  } catch (P) {
    ht.length = 0, Bn(P, e, 1), H = We(Ge);
  }
  let L = H;
  if (j && C !== !1) {
    const P = Object.keys(j), { shapeFlag: ee } = L;
    P.length && ee & 7 && (i && P.some(Rn) && (j = vo(
      j,
      i
    )), L = Mt(L, j, !1, !0));
  }
  if (n.dirs && (L = Mt(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const P = Ln(L.type) && bi(L) || L;
    FA(P, n.transition);
  }
  return H = L, wn(U), H;
}
const yo = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Tn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, vo = (e, t) => {
  const n = {};
  for (const A in e)
    (!Rn(A) || !(A.slice(9) in t)) && (n[A] = e[A]);
  return n;
};
function _o(e, t, n) {
  const { props: A, children: s, component: i } = e, { props: r, children: o, patchFlag: l } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return A ? os(A, r, c) : !!r;
    if (l & 8) {
      const a = t.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        const g = a[d];
        if (ki(r, A, g) && !Vn(c, g))
          return !0;
      }
    }
  } else
    return (s || o) && (!o || !o.$stable) ? !0 : A === r ? !1 : A ? r ? os(A, r, c) : !0 : !!r;
  return !1;
}
function os(e, t, n) {
  const A = Object.keys(t);
  if (A.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < A.length; s++) {
    const i = A[s];
    if (ki(t, e, i) && !Vn(n, i))
      return !0;
  }
  return !1;
}
function ki(e, t, n) {
  const A = e[n], s = t[n];
  return n === "style" && q(A) && q(s) ? !Xe(A, s) : A !== s;
}
function wo({ vnode: e, parent: t, suspense: n }, A) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = A, e = s), s === e)
      (e = t.vnode).el = A, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = A);
}
const Si = {}, zi = () => Object.create(Si), Ei = (e) => Object.getPrototypeOf(e) === Si;
function ko(e, t, n, A = !1) {
  const s = {}, i = zi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), $i(e, t, s, i);
  for (const r in e.propsOptions[0])
    r in s || (s[r] = void 0);
  n ? e.props = A ? s : /* @__PURE__ */ Gr(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function So(e, t, n, A) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, o = /* @__PURE__ */ B(s), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (A || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const a = e.vnode.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        let g = a[d];
        if (Vn(e.emitsOptions, g))
          continue;
        const m = t[g];
        if (l)
          if (Y(i, g))
            m !== i[g] && (i[g] = m, c = !0);
          else {
            const I = _e(g);
            s[I] = xA(
              l,
              o,
              I,
              m,
              e,
              !1
            );
          }
        else
          m !== i[g] && (i[g] = m, c = !0);
      }
    }
  } else {
    $i(e, t, s, i) && (c = !0);
    let a;
    for (const d in o)
      (!t || // for camelCase
      !Y(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = vt(d)) === d || !Y(t, a))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[a] !== void 0) && (s[d] = xA(
        l,
        o,
        d,
        void 0,
        e,
        !0
      )) : delete s[d]);
    if (i !== o)
      for (const d in i)
        (!t || !Y(t, d)) && (delete i[d], c = !0);
  }
  c && Le(e.attrs, "set", "");
}
function $i(e, t, n, A) {
  const [s, i] = e.propsOptions;
  let r = !1, o;
  if (t)
    for (let l in t) {
      if (Vt(l))
        continue;
      const c = t[l];
      let a;
      s && Y(s, a = _e(l)) ? !i || !i.includes(a) ? n[a] = c : (o || (o = {}))[a] = c : Vn(e.emitsOptions, l) || (!(l in A) || c !== A[l]) && (A[l] = c, r = !0);
    }
  if (i) {
    const l = /* @__PURE__ */ B(n), c = o || J;
    for (let a = 0; a < i.length; a++) {
      const d = i[a];
      n[d] = xA(
        s,
        l,
        d,
        c[d],
        e,
        !Y(c, d)
      );
    }
  }
  return r;
}
function xA(e, t, n, A, s, i) {
  const r = e[n];
  if (r != null) {
    const o = Y(r, "default");
    if (o && A === void 0) {
      const l = r.default;
      if (r.type !== Function && !r.skipFactory && W(l)) {
        const { propsDefaults: c } = s;
        if (n in c)
          A = c[n];
        else {
          const a = jA(s);
          A = c[n] = l.call(
            null,
            t
          ), a();
        }
      } else
        A = l;
      s.ce && s.ce._setProp(n, A);
    }
    r[
      0
      /* shouldCast */
    ] && (i && !o ? A = !1 : r[
      1
      /* shouldCastTrue */
    ] && (A === "" || A === vt(n)) && (A = !0));
  }
  return A;
}
function zo(e, t, n = !1) {
  const A = t.propsCache, s = A.get(e);
  if (s)
    return s;
  const i = e.props, r = {}, o = [];
  if (!i)
    return q(e) && A.set(e, ut), ut;
  if (O(i))
    for (let c = 0; c < i.length; c++) {
      const a = _e(i[c]);
      ls(a) && (r[a] = J);
    }
  else if (i)
    for (const c in i) {
      const a = _e(c);
      if (ls(a)) {
        const d = i[c], g = r[a] = O(d) || W(d) ? { type: d } : ke({}, d), m = g.type;
        let I = !1, C = !0;
        if (O(m))
          for (let U = 0; U < m.length; ++U) {
            const H = m[U], j = W(H) && H.name;
            if (j === "Boolean") {
              I = !0;
              break;
            } else j === "String" && (C = !1);
          }
        else
          I = W(m) && m.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = I, g[
          1
          /* shouldCastTrue */
        ] = C, (I || Y(g, "default")) && o.push(a);
      }
    }
  const l = [r, o];
  return q(e) && A.set(e, l), l;
}
function ls(e) {
  return e[0] !== "$" && !Vt(e);
}
const NA = (e) => e === "_" || e === "_ctx" || e === "$stable", OA = (e) => O(e) ? e.map(Me) : [Me(e)], Eo = (e, t, n) => {
  if (t._n)
    return t;
  const A = no((...s) => OA(t(...s)), n);
  return A._c = !1, A;
}, Ci = (e, t, n) => {
  const A = e._ctx;
  for (const s in e) {
    if (NA(s)) continue;
    const i = e[s];
    if (W(i))
      t[s] = Eo(s, i, A);
    else if (i != null) {
      const r = OA(i);
      t[s] = () => r;
    }
  }
}, Ii = (e, t) => {
  const n = OA(t);
  e.slots.default = () => n;
}, Mi = (e, t, n) => {
  for (const A in t)
    (n || !NA(A)) && (e[A] = t[A]);
}, $o = (e, t, n) => {
  const A = e.slots = zi();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (Mi(A, t, n), n && Zs(A, "_", s, !0)) : Ci(t, A);
  } else t && Ii(e, t);
}, Co = (e, t, n) => {
  const { vnode: A, slots: s } = e;
  let i = !0, r = J;
  if (A.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? i = !1 : Mi(s, t, n) : (i = !t.$stable, Ci(t, s)), r = t;
  } else t && (Ii(e, t), r = { default: 1 });
  if (i)
    for (const o in s)
      !NA(o) && r[o] == null && delete s[o];
}, ae = Po;
function Io(e) {
  return Mo(e);
}
function Mo(e, t) {
  const n = Nn();
  n.__VUE__ = !0;
  const {
    insert: A,
    remove: s,
    patchProp: i,
    createElement: r,
    createText: o,
    createComment: l,
    setText: c,
    setElementText: a,
    parentNode: d,
    nextSibling: g,
    setScopeId: m = dt,
    insertStaticContent: I
  } = e, C = (u, f, p, _ = null, b = null, v = null, S = void 0, k = null, w = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !Dt(u, f) && (_ = cn(u), Oe(u, b, v, !0), u = null), f.patchFlag === -2 && (w = !1, f.dynamicChildren = null), f.dynamicChildren && u && u.dynamicChildren && u.dynamicChildren.hasOnce && (f.dynamicChildren === ut && (f.dynamicChildren = []), f.dynamicChildren.hasOnce = !0);
    const { type: y, ref: T, shapeFlag: z } = f;
    switch (y) {
      case Wn:
        U(u, f, p, _);
        break;
      case Ge:
        H(u, f, p, _);
        break;
      case sA:
        u == null && j(f, p, _, S);
        break;
      case Q:
        rn(
          u,
          f,
          p,
          _,
          b,
          v,
          S,
          k,
          w
        );
        break;
      default:
        z & 1 ? ee(
          u,
          f,
          p,
          _,
          b,
          v,
          S,
          k,
          w
        ) : z & 6 ? on(
          u,
          f,
          p,
          _,
          b,
          v,
          S,
          k,
          w
        ) : (z & 64 || z & 128) && y.process(
          u,
          f,
          p,
          _,
          b,
          v,
          S,
          k,
          w,
          Nt
        );
    }
    T != null && b ? Yt(T, u && u.ref, v, f || u, !f) : T == null && u && u.ref != null && Yt(u.ref, null, v, u, !0);
  }, U = (u, f, p, _) => {
    if (u == null)
      A(
        f.el = o(f.children),
        p,
        _
      );
    else {
      const b = f.el = u.el;
      f.children !== u.children && c(b, f.children);
    }
  }, H = (u, f, p, _) => {
    u == null ? A(
      f.el = l(f.children || ""),
      p,
      _
    ) : f.el = u.el;
  }, j = (u, f, p, _) => {
    [u.el, u.anchor] = I(
      u.children,
      f,
      p,
      _,
      u.el,
      u.anchor
    );
  }, L = ({ el: u, anchor: f }, p, _) => {
    let b;
    for (; u && u !== f; )
      b = g(u), A(u, p, _), u = b;
    A(f, p, _);
  }, P = ({ el: u, anchor: f }) => {
    let p;
    for (; u && u !== f; )
      p = g(u), s(u), u = p;
    s(f);
  }, ee = (u, f, p, _, b, v, S, k, w) => {
    if (f.type === "svg" ? S = "svg" : f.type === "math" && (S = "mathml"), u == null)
      he(
        f,
        p,
        _,
        b,
        v,
        S,
        k,
        w
      );
    else {
      const y = u.el && u.el._isVueCE ? u.el : null;
      try {
        y && y._beginPatch(), St(
          u,
          f,
          b,
          v,
          S,
          k,
          w
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, he = (u, f, p, _, b, v, S, k) => {
    let w, y;
    const { props: T, shapeFlag: z, transition: M, dirs: F } = u;
    if (w = u.el = r(
      u.type,
      v,
      T && T.is,
      T
    ), z & 8 ? a(w, u.children) : z & 16 && K(
      u.children,
      w,
      null,
      _,
      b,
      AA(u, v),
      S,
      k
    ), F && ot(u, null, _, "created"), ue(w, u, u.scopeId, S, _), T) {
      for (const G in T)
        G !== "value" && !Vt(G) && i(w, G, null, T[G], v, _);
      "value" in T && i(w, "value", null, T.value, v), (y = T.onVnodeBeforeMount) && $e(y, _, u);
    }
    F && ot(u, null, _, "beforeMount");
    const D = To(b, M);
    D && M.beforeEnter(w), A(w, f, p), ((y = T && T.onVnodeMounted) || D || F) && ae(() => {
      try {
        y && $e(y, _, u), D && M.enter(w), F && ot(u, null, _, "mounted");
      } finally {
      }
    }, b);
  }, ue = (u, f, p, _, b) => {
    if (p && m(u, p), _)
      for (let v = 0; v < _.length; v++)
        m(u, _[v]);
    if (b) {
      let v = b.subTree;
      if (f === v || Fi(v.type) && (v.ssContent === f || v.ssFallback === f)) {
        const S = b.vnode;
        ue(
          u,
          S,
          S.scopeId,
          S.slotScopeIds,
          b.parent
        );
      }
    }
  }, K = (u, f, p, _, b, v, S, k, w = 0) => {
    for (let y = w; y < u.length; y++) {
      const T = u[y] = k ? Be(u[y]) : Me(u[y]);
      C(
        null,
        T,
        f,
        p,
        _,
        b,
        v,
        S,
        k
      );
    }
  }, St = (u, f, p, _, b, v, S) => {
    const k = f.el = u.el;
    let { patchFlag: w, dynamicChildren: y, dirs: T } = f;
    w |= u.patchFlag & 16;
    const z = u.props || J, M = f.props || J;
    let F;
    if (p && lt(p, !1), (F = M.onVnodeBeforeUpdate) && $e(F, p, f, u), T && ot(f, u, p, "beforeUpdate"), p && lt(p, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!u.dynamicChildren || u.dynamicChildren.length !== y.length) && (w = 0, S = !1, y = null), (z.innerHTML && M.innerHTML == null || z.textContent && M.textContent == null) && a(k, ""), y ? Ae(
      u.dynamicChildren,
      y,
      k,
      p,
      _,
      AA(f, b),
      v
    ) : S || Zn(
      u,
      f,
      k,
      null,
      p,
      _,
      AA(f, b),
      v,
      !1
    ), w > 0) {
      if (w & 16)
        ye(k, z, M, p, b);
      else if (w & 2 && z.class !== M.class && i(k, "class", null, M.class, b), w & 4 && i(k, "style", z.style, M.style, b), w & 8) {
        const D = f.dynamicProps;
        for (let G = 0; G < D.length; G++) {
          const V = D[G], te = z[V], se = M[V];
          (se !== te || V === "value") && i(k, V, te, se, b, p);
        }
      }
      w & 1 && u.children !== f.children && a(k, f.children);
    } else !S && y == null && ye(k, z, M, p, b);
    ((F = M.onVnodeUpdated) || T) && ae(() => {
      F && $e(F, p, f, u), T && ot(f, u, p, "updated");
    }, _);
  }, Ae = (u, f, p, _, b, v, S) => {
    for (let k = 0; k < f.length; k++) {
      const w = u[k], y = f[k], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === Q || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Dt(w, y) || // - In the case of a component, it could contain anything.
        w.shapeFlag & 198) ? d(w.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      C(
        w,
        y,
        T,
        null,
        _,
        b,
        v,
        S,
        !0
      );
    }
  }, ye = (u, f, p, _, b) => {
    if (f !== p) {
      if (f !== J)
        for (const v in f)
          !Vt(v) && !(v in p) && i(
            u,
            v,
            f[v],
            null,
            b,
            _
          );
      for (const v in p) {
        if (Vt(v)) continue;
        const S = p[v], k = f[v];
        S !== k && v !== "value" && i(u, v, k, S, b, _);
      }
      "value" in p && i(u, "value", f.value, p.value, b);
    }
  }, rn = (u, f, p, _, b, v, S, k, w) => {
    const y = f.el = u ? u.el : o(""), T = f.anchor = u ? u.anchor : o("");
    let { patchFlag: z, dynamicChildren: M, slotScopeIds: F } = f;
    F && (k = k ? k.concat(F) : F), u == null ? (A(y, p, _), A(T, p, _), K(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      p,
      T,
      b,
      v,
      S,
      k,
      w
    )) : z > 0 && z & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === M.length ? (Ae(
      u.dynamicChildren,
      M,
      p,
      b,
      v,
      S,
      k
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || b && f === b.subTree) && Ti(
      u,
      f,
      !0
      /* shallow */
    )) : Zn(
      u,
      f,
      p,
      T,
      b,
      v,
      S,
      k,
      w
    );
  }, on = (u, f, p, _, b, v, S, k, w) => {
    f.slotScopeIds = k, u == null ? f.shapeFlag & 512 ? b.ctx.activate(
      f,
      p,
      _,
      S,
      w
    ) : Rt(
      f,
      p,
      _,
      b,
      v,
      S,
      w
    ) : He(u, f, w);
  }, Rt = (u, f, p, _, b, v, S) => {
    const k = u.component = Bo(
      u,
      _,
      b
    );
    if (yi(u) && (k.ctx.renderer = Nt), Vo(k, !1, S), k.asyncDep) {
      if (b && b.registerDep(k, Pt, S), !u.el) {
        const w = k.subTree = We(Ge);
        H(null, w, f, p), u.placeholder = w.el;
      }
    } else
      Pt(
        k,
        u,
        f,
        p,
        b,
        v,
        S
      );
  }, He = (u, f, p) => {
    const _ = f.component = u.component;
    if (_o(u, f, p))
      if (_.asyncDep && !_.asyncResolved) {
        f.el = u.el, Ke(_, f, p);
        return;
      } else
        _.next = f, _.update();
    else
      f.el = u.el, _.vnode = f;
  }, Pt = (u, f, p, _, b, v, S) => {
    const k = () => {
      if (u.isMounted) {
        let { next: z, bu: M, u: F, parent: D, vnode: G } = u;
        {
          const ze = Ri(u);
          if (ze) {
            z && (z.el = G.el, Ke(u, z, S)), ze.asyncDep.then(() => {
              ae(() => {
                u.isUnmounted || y();
              }, b);
            });
            return;
          }
        }
        let V = z, te;
        lt(u, !1), z ? (z.el = G.el, Ke(u, z, S)) : z = G, M && hn(M), (te = z.props && z.props.onVnodeBeforeUpdate) && $e(te, D, z, G), lt(u, !0);
        const se = rs(u), Se = u.subTree;
        u.subTree = se, C(
          Se,
          se,
          // parent may have changed if it's in a teleport
          d(Se.el),
          // anchor may have changed if it's in a fragment
          cn(Se),
          u,
          b,
          v
        ), z.el = se.el, V === null && wo(u, se.el), F && ae(F, b), (te = z.props && z.props.onVnodeUpdated) && ae(
          () => $e(te, D, z, G),
          b
        );
      } else {
        let z;
        const { el: M, props: F } = f, { bm: D, m: G, parent: V, root: te, type: se } = u, Se = Ht(f);
        lt(u, !1), D && hn(D), !Se && (z = F && F.onVnodeBeforeMount) && $e(z, V, f), lt(u, !0);
        {
          te.ce && te.ce._hasShadowRoot() && te.ce._injectChildStyle(
            se,
            u.parent ? u.parent.type : void 0
          );
          const ze = u.subTree = rs(u);
          C(
            null,
            ze,
            p,
            _,
            u,
            b,
            v
          ), f.el = ze.el;
        }
        if (G && ae(G, b), !Se && (z = F && F.onVnodeMounted)) {
          const ze = f;
          ae(
            () => $e(z, V, ze),
            b
          );
        }
        (f.shapeFlag & 256 || V && Ht(V.vnode) && V.vnode.shapeFlag & 256) && u.a && ae(u.a, b), u.isMounted = !0, f = p = _ = null;
      }
    };
    u.scope.on();
    const w = u.effect = new qs(k);
    u.scope.off();
    const y = u.update = w.run.bind(w), T = u.job = w.runIfDirty.bind(w);
    T.i = u, T.id = u.uid, w.scheduler = () => PA(T), lt(u, !0), y();
  }, Ke = (u, f, p) => {
    f.component = u;
    const _ = u.vnode.props;
    u.vnode = f, u.next = null, So(u, f.props, _, p), Co(u, f.children, p), et(), As(u), tt();
  }, Zn = (u, f, p, _, b, v, S, k, w = !1) => {
    const y = u && u.children, T = u ? u.shapeFlag : 0, z = f.children, { patchFlag: M, shapeFlag: F } = f;
    if (M > 0) {
      if (M & 128) {
        YA(
          y,
          z,
          p,
          _,
          b,
          v,
          S,
          k,
          w
        );
        return;
      } else if (M & 256) {
        cr(
          y,
          z,
          p,
          _,
          b,
          v,
          S,
          k,
          w
        );
        return;
      }
    }
    F & 8 ? (T & 16 && Ft(y, b, v), z !== y && a(p, z)) : T & 16 ? F & 16 ? YA(
      y,
      z,
      p,
      _,
      b,
      v,
      S,
      k,
      w
    ) : Ft(y, b, v, !0) : (T & 8 && a(p, ""), F & 16 && K(
      z,
      p,
      _,
      b,
      v,
      S,
      k,
      w
    ));
  }, cr = (u, f, p, _, b, v, S, k, w) => {
    u = u || ut, f = f || ut;
    const y = u.length, T = f.length, z = Math.min(y, T);
    let M;
    for (M = 0; M < z; M++) {
      const F = f[M] = w ? Be(f[M]) : Me(f[M]);
      C(
        u[M],
        F,
        p,
        null,
        b,
        v,
        S,
        k,
        w
      );
    }
    y > T ? Ft(
      u,
      b,
      v,
      !0,
      !1,
      z
    ) : K(
      f,
      p,
      _,
      b,
      v,
      S,
      k,
      w,
      z
    );
  }, YA = (u, f, p, _, b, v, S, k, w) => {
    let y = 0;
    const T = f.length;
    let z = u.length - 1, M = T - 1;
    for (; y <= z && y <= M; ) {
      const F = u[y], D = f[y] = w ? Be(f[y]) : Me(f[y]);
      if (Dt(F, D))
        C(
          F,
          D,
          p,
          null,
          b,
          v,
          S,
          k,
          w
        );
      else
        break;
      y++;
    }
    for (; y <= z && y <= M; ) {
      const F = u[z], D = f[M] = w ? Be(f[M]) : Me(f[M]);
      if (Dt(F, D))
        C(
          F,
          D,
          p,
          null,
          b,
          v,
          S,
          k,
          w
        );
      else
        break;
      z--, M--;
    }
    if (y > z) {
      if (y <= M) {
        const F = M + 1, D = F < T ? f[F].el : _;
        for (; y <= M; )
          C(
            null,
            f[y] = w ? Be(f[y]) : Me(f[y]),
            p,
            D,
            b,
            v,
            S,
            k,
            w
          ), y++;
      }
    } else if (y > M)
      for (; y <= z; )
        Oe(u[y], b, v, !0), y++;
    else {
      const F = y, D = y, G = /* @__PURE__ */ new Map();
      for (y = D; y <= M; y++) {
        const fe = f[y] = w ? Be(f[y]) : Me(f[y]);
        fe.key != null && G.set(fe.key, y);
      }
      let V, te = 0;
      const se = M - D + 1;
      let Se = !1, ze = 0;
      const Ot = new Array(se);
      for (y = 0; y < se; y++) Ot[y] = 0;
      for (y = F; y <= z; y++) {
        const fe = u[y];
        if (te >= se) {
          Oe(fe, b, v, !0);
          continue;
        }
        let Ee;
        if (fe.key != null)
          Ee = G.get(fe.key);
        else
          for (V = D; V <= M; V++)
            if (Ot[V - D] === 0 && Dt(fe, f[V])) {
              Ee = V;
              break;
            }
        Ee === void 0 ? Oe(fe, b, v, !0) : (Ot[Ee - D] = y + 1, Ee >= ze ? ze = Ee : Se = !0, C(
          fe,
          f[Ee],
          p,
          null,
          b,
          v,
          S,
          k,
          w
        ), te++);
      }
      const ZA = Se ? Ro(Ot) : ut;
      for (V = ZA.length - 1, y = se - 1; y >= 0; y--) {
        const fe = D + y, Ee = f[fe], UA = f[fe + 1], JA = fe + 1 < T ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          UA.el || Pi(UA)
        ) : _;
        Ot[y] === 0 ? C(
          null,
          Ee,
          p,
          JA,
          b,
          v,
          S,
          k,
          w
        ) : Se && (V < 0 || y !== ZA[V] ? ln(Ee, p, JA, 2) : V--);
      }
    }
  }, ln = (u, f, p, _, b = null) => {
    const { el: v, type: S, transition: k, children: w, shapeFlag: y } = u;
    if (y & 6) {
      ln(u.component.subTree, f, p, _);
      return;
    }
    if (y & 128) {
      u.suspense.move(f, p, _);
      return;
    }
    if (y & 64) {
      S.move(u, f, p, Nt);
      return;
    }
    if (S === Q) {
      A(v, f, p);
      for (let z = 0; z < w.length; z++)
        ln(w[z], f, p, _);
      A(u.anchor, f, p);
      return;
    }
    if (S === sA) {
      L(u, f, p);
      return;
    }
    if (_ !== 2 && y & 1 && k)
      if (_ === 0)
        k.persisted && !v[tA] ? A(v, f, p) : (k.beforeEnter(v), A(v, f, p), ae(() => k.enter(v), b));
      else {
        const { leave: z, delayLeave: M, afterLeave: F } = k, D = () => {
          u.ctx.isUnmounted ? s(v) : A(v, f, p);
        }, G = () => {
          const V = v._isLeaving || !!v[tA];
          v._isLeaving && v[tA](
            !0
            /* cancelled */
          ), k.persisted && !V ? D() : z(v, () => {
            D(), F && F();
          });
        };
        M ? M(v, D, G) : G();
      }
    else
      A(v, f, p);
  }, Oe = (u, f, p, _ = !1, b = !1) => {
    const {
      type: v,
      props: S,
      ref: k,
      children: w,
      dynamicChildren: y,
      shapeFlag: T,
      patchFlag: z,
      dirs: M,
      cacheIndex: F,
      memo: D
    } = u;
    if ((z === -2 || y && y.hasOnce) && (b = !1), k != null && (et(), Yt(k, null, p, u, !0), tt()), F != null && (!u.ctx || u.ctx === f) && (f.renderCache[F] = void 0), T & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const G = T & 1 && M, V = !Ht(u);
    let te;
    if (V && (te = S && S.onVnodeBeforeUnmount) && $e(te, f, u), T & 6)
      ur(u.component, p, _);
    else {
      if (T & 128) {
        u.suspense.unmount(p, _);
        return;
      }
      G && ot(u, null, f, "beforeUnmount"), T & 64 ? u.type.remove(
        u,
        f,
        p,
        Nt,
        _
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== Q || z > 0 && z & 64) ? Ft(
        y,
        f,
        p,
        !1,
        !0
      ) : (v === Q && z & 384 || !b && T & 16) && Ft(w, f, p), _ && HA(u);
    }
    const se = D != null && F == null;
    (V && (te = S && S.onVnodeUnmounted) || G || se) && ae(() => {
      te && $e(te, f, u), G && ot(u, null, f, "unmounted"), se && (u.el = null);
    }, p);
  }, HA = (u) => {
    const { type: f, el: p, anchor: _, transition: b } = u;
    if (f === Q) {
      ar(p, _);
      return;
    }
    if (f === sA) {
      P(u), b && !b.persisted && b.afterLeave && b.afterLeave();
      return;
    }
    const v = () => {
      s(p), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (u.shapeFlag & 1 && b && !b.persisted) {
      const { leave: S, delayLeave: k } = b, w = () => S(p, v);
      k ? k(u.el, v, w) : w();
    } else
      v();
  }, ar = (u, f) => {
    let p;
    for (; u !== f; )
      p = g(u), s(u), u = p;
    s(f);
  }, ur = (u, f, p) => {
    const { bum: _, scope: b, job: v, subTree: S, um: k, m: w, a: y } = u;
    cs(w), cs(y), _ && hn(_), b.stop(), v ? (v.flags |= 8, Oe(S, u, f, p)) : u.vnode.el && S && (S.transition = u.vnode.transition, Oe(S, u, f, p)), k && ae(k, f), ae(() => {
      u.isUnmounted = !0;
    }, f);
  }, Ft = (u, f, p, _ = !1, b = !1, v = 0) => {
    for (let S = v; S < u.length; S++)
      Oe(u[S], f, p, _, b);
  }, cn = (u) => {
    if (u.shapeFlag & 6)
      return cn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = g(u.anchor || u.el), p = f && f[oo];
    return p ? g(p) : f;
  };
  let Un = !1;
  const KA = (u, f, p) => {
    let _;
    u == null ? f._vnode && (Oe(f._vnode, null, null, !0), _ = f._vnode.component) : C(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      p
    ), f._vnode = u, Un || (Un = !0, As(_), mi(), Un = !1);
  }, Nt = {
    p: C,
    um: Oe,
    m: ln,
    r: HA,
    mt: Rt,
    mc: K,
    pc: Zn,
    pbc: Ae,
    n: cn,
    o: e
  };
  return {
    render: KA,
    hydrate: void 0,
    createApp: mo(KA)
  };
}
function AA({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function lt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function To(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ti(e, t, n = !1) {
  const A = e.children, s = t.children;
  if (O(A) && O(s))
    for (let i = 0; i < A.length; i++) {
      const r = A[i];
      let o = s[i];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = s[i] = Be(s[i]), o.el = r.el), !n && o.patchFlag !== -2 && Ti(r, o)), o.type === Wn && (o.patchFlag === -1 && (o = s[i] = Be(o)), o.el = r.el), o.type === Ge && !o.el && (o.el = r.el);
    }
}
function Ro(e) {
  const t = e.slice(), n = [0];
  let A, s, i, r, o;
  const l = e.length;
  for (A = 0; A < l; A++) {
    const c = e[A];
    if (c !== 0) {
      if (s = n[n.length - 1], e[s] < c) {
        t[A] = s, n.push(A);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        o = i + r >> 1, e[n[o]] < c ? i = o + 1 : r = o;
      c < e[n[i]] && (i > 0 && (t[A] = n[i - 1]), n[i] = A);
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; )
    n[i] = r, r = t[r];
  return n;
}
function Ri(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ri(t);
}
function cs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Pi(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Pi(t.subTree) : null;
}
const Fi = (e) => e.__isSuspense;
function Po(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : to(e);
}
const Q = /* @__PURE__ */ Symbol.for("v-fgt"), Wn = /* @__PURE__ */ Symbol.for("v-txt"), Ge = /* @__PURE__ */ Symbol.for("v-cmt"), sA = /* @__PURE__ */ Symbol.for("v-stc"), ht = [];
let de = null;
function E(e = !1) {
  ht.push(de = e ? null : []);
}
function Ni() {
  ht.pop(), de = ht[ht.length - 1] || null;
}
let qt = 1;
function as(e, t = !1) {
  qt += e, e < 0 && de && t && (de.hasOnce = !0);
}
function Oi(e) {
  return e.dynamicChildren = qt > 0 ? de || ut : null, Ni(), qt > 0 && de && de.push(e), e;
}
function $(e, t, n, A, s, i) {
  return Oi(
    x(
      e,
      t,
      n,
      A,
      s,
      i,
      !0
    )
  );
}
function Je(e, t, n, A, s) {
  return Oi(
    We(
      e,
      t,
      n,
      A,
      s,
      !0
    )
  );
}
function ji(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Dt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Di = ({ key: e }) => e ?? null, mn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || /* @__PURE__ */ ce(e) || W(e) ? { i: me, r: e, k: t, f: !!n } : e : null);
function x(e, t = null, n = null, A = 0, s = null, i = e === Q ? 0 : 1, r = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Di(t),
    ref: t && mn(t),
    scopeId: xi,
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
    patchFlag: A,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: me
  };
  return o ? (Sn(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= ne(n) ? 8 : 16), qt > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  de && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && de.push(l), l;
}
const We = Fo;
function Fo(e, t = null, n = null, A = 0, s = null, i = !1) {
  if ((!e || e === fo) && (e = Ge), ji(e)) {
    const o = Mt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Sn(o, n), qt > 0 && !i && de && (o.shapeFlag & 6 ? de[de.indexOf(e)] = o : de.push(o)), o.patchFlag = -2, o;
  }
  if (Ho(e) && (e = e.__vccOpts), t) {
    t = No(t);
    let { class: o, style: l } = t;
    o && !ne(o) && (t.class = _t(o)), q(l) && (/* @__PURE__ */ RA(l) && !O(l) && (l = ke({}, l)), t.style = On(l));
  }
  const r = ne(e) ? 1 : Fi(e) ? 128 : Ln(e) ? 64 : q(e) ? 4 : W(e) ? 2 : 0;
  return x(
    e,
    t,
    n,
    A,
    s,
    r,
    i,
    !0
  );
}
function No(e) {
  return e ? /* @__PURE__ */ RA(e) || Ei(e) ? ke({}, e) : e : null;
}
function Mt(e, t, n = !1, A = !1) {
  const { props: s, ref: i, patchFlag: r, children: o, transition: l } = e, c = t ? Oo(s || {}, t) : s, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Di(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? O(i) ? i.concat(mn(t)) : [i, mn(t)] : mn(t)
    ) : i,
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
    patchFlag: t && e.type !== Q ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && Mt(e.ssContent),
    ssFallback: e.ssFallback && Mt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return l && A && FA(
    a,
    l.clone(a)
  ), a;
}
function gn(e = " ", t = 0) {
  return We(Wn, null, e, t);
}
function X(e = "", t = !1) {
  return t ? (E(), Je(Ge, null, e)) : We(Ge, null, e);
}
function Me(e) {
  return e == null || typeof e == "boolean" ? We(Ge) : O(e) ? We(
    Q,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ji(e) ? Be(e) : We(Wn, null, String(e));
}
function Be(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Mt(e);
}
function Sn(e, t) {
  let n = 0;
  const { shapeFlag: A } = e;
  if (t == null)
    t = null;
  else if (O(t))
    n = 16;
  else if (typeof t == "object")
    if (A & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Sn(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Ei(t) ? t._ctx = me : s === 3 && me && (me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (W(t)) {
    if (A & 65) {
      Sn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: me }, n = 32;
  } else
    t = String(t), A & 64 ? (n = 16, t = [gn(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Oo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const A = e[n];
    for (const s in A)
      if (s === "class")
        t.class !== A.class && (t.class = _t([t.class, A.class]));
      else if (s === "style")
        t.style = On([t.style, A.style]);
      else if (Tn(s)) {
        const i = t[s], r = A[s];
        r && i !== r && !(O(i) && i.includes(r)) ? t[s] = i ? [].concat(i, r) : r : r == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Rn(s) && (t[s] = r);
      } else s !== "" && (t[s] = A[s]);
  }
  return t;
}
function $e(e, t, n, A = null) {
  Ne(e, t, 7, [
    n,
    A
  ]);
}
const jo = wi();
let Do = 0;
function Bo(e, t, n) {
  const A = e.type, s = (t ? t.appContext : e.appContext) || jo, i = {
    uid: Do++,
    vnode: e,
    type: A,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Sr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: zo(A, s),
    emitsOptions: bo(A, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: J,
    // inheritAttrs
    inheritAttrs: A.inheritAttrs,
    // state
    ctx: J,
    data: J,
    props: J,
    attrs: J,
    slots: J,
    refs: J,
    setupState: J,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = xo.bind(null, i), e.ce && e.ce(i), i;
}
let At = null;
const Lo = () => At || me;
let zn, Xt;
{
  const e = Nn(), t = (n, A) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(A), (i) => {
      s.length > 1 ? s.forEach((r) => r(i)) : s[0](i);
    };
  };
  zn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => At = n
  ), Xt = t(
    "__VUE_SSR_SETTERS__",
    (n) => en = n
  );
}
const jA = (e) => {
  const t = At;
  return zn(e), e.scope.on(), () => {
    e.scope.off(), zn(t);
  };
}, us = () => {
  At && At.scope.off(), zn(null);
};
function Bi(e) {
  return e.vnode.shapeFlag & 4;
}
let en = !1;
function Vo(e, t = !1, n = !1) {
  t && Xt(t);
  const { props: A, children: s } = e.vnode, i = Bi(e);
  ko(e, A, i, t), $o(e, s, n || t);
  const r = i ? Wo(e, t) : void 0;
  return t && Xt(!1), r;
}
function Wo(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, po);
  const { setup: A } = n;
  if (A) {
    et();
    const s = e.setupContext = A.length > 1 ? Yo(e) : null, i = jA(e), r = An(
      A,
      e,
      0,
      [
        e.props,
        s
      ]
    ), o = Gs(r);
    if (tt(), i(), (o || e.sp) && !Ht(e) && co(e), o) {
      if (r.then(us, us), t)
        return r.then((l) => {
          Xt(!0);
          try {
            fs(e, l, t);
          } finally {
            Xt(!1);
          }
        }).catch((l) => {
          Bn(l, e, 0);
        });
      e.asyncDep = r;
    } else
      fs(e, r);
  } else
    Li(e);
}
function fs(e, t, n) {
  W(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) && (e.setupState = fi(t)), Li(e);
}
function Li(e, t, n) {
  const A = e.type;
  e.render || (e.render = A.render || dt);
}
const Go = {
  get(e, t) {
    return oe(e, "get", ""), e[t];
  }
};
function Yo(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Go),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Gn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(fi(Yr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Kt)
        return Kt[n](e);
    },
    has(t, n) {
      return n in t || n in Kt;
    }
  })) : e.proxy;
}
function Ho(e) {
  return W(e) && "__vccOpts" in e;
}
const re = (e, t) => /* @__PURE__ */ Jr(e, t, en), Ko = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let bA;
const ds = typeof window < "u" && window.trustedTypes;
if (ds)
  try {
    bA = /* @__PURE__ */ ds.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Vi = bA ? (e) => bA.createHTML(e) : (e) => e, Zo = "http://www.w3.org/2000/svg", Uo = "http://www.w3.org/1998/Math/MathML", De = typeof document < "u" ? document : null, ps = De && /* @__PURE__ */ De.createElement("template"), Jo = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, A) => {
    const s = t === "svg" ? De.createElementNS(Zo, e) : t === "mathml" ? De.createElementNS(Uo, e) : n ? De.createElement(e, { is: n }) : De.createElement(e);
    return e === "select" && A && A.multiple != null && s.setAttribute("multiple", A.multiple), s;
  },
  createText: (e) => De.createTextNode(e),
  createComment: (e) => De.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => De.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, A, s, i) {
    const r = n ? n.previousSibling : t.lastChild;
    if (s && (s === i || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)); )
        ;
    else {
      ps.innerHTML = Vi(
        A === "svg" ? `<svg>${e}</svg>` : A === "mathml" ? `<math>${e}</math>` : e
      );
      const o = ps.content;
      if (A === "svg" || A === "mathml") {
        const l = o.firstChild;
        for (; l.firstChild; )
          o.appendChild(l.firstChild);
        o.removeChild(l);
      }
      t.insertBefore(o, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Qo = /* @__PURE__ */ Symbol("_vtc");
function qo(e, t, n) {
  const A = e[Qo];
  A && (t = (t ? [t, ...A] : [...A]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const hs = /* @__PURE__ */ Symbol("_vod"), Xo = /* @__PURE__ */ Symbol("_vsh"), el = /* @__PURE__ */ Symbol(""), tl = /(?:^|;)\s*display\s*:/;
function nl(e, t, n) {
  const A = e.style, s = ne(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (ne(t))
        for (const r of t.split(";")) {
          const o = r.slice(0, r.indexOf(":")).trim();
          n[o] == null && Lt(A, o, "");
        }
      else
        for (const r in t)
          n[r] == null && Lt(A, r, "");
    for (const r in n) {
      r === "display" && (i = !0);
      const o = n[r];
      o != null ? sl(
        e,
        r,
        !ne(t) && t ? t[r] : void 0,
        o
      ) || Lt(A, r, o) : Lt(A, r, "");
    }
  } else if (s) {
    if (t !== n) {
      const r = A[el];
      r && (n += ";" + r), A.cssText = n, i = tl.test(n);
    }
  } else t && e.removeAttribute("style");
  hs in e && (e[hs] = i ? A.display : "", e[Xo] && (A.display = "none"));
}
const dn = /\s*!important$/;
function Lt(e, t, n) {
  if (O(n))
    n.forEach((A) => Lt(e, t, A));
  else if (n == null && (n = ""), t.startsWith("--"))
    dn.test(n) ? e.setProperty(t, n.replace(dn, ""), "important") : e.setProperty(t, n);
  else {
    const A = Al(e, t);
    dn.test(n) ? e.setProperty(
      vt(A),
      n.replace(dn, ""),
      "important"
    ) : e[A] = n;
  }
}
const ms = ["Webkit", "Moz", "ms"], iA = {};
function Al(e, t) {
  const n = iA[t];
  if (n)
    return n;
  let A = _e(t);
  if (A !== "filter" && A in e)
    return iA[t] = A;
  A = Ks(A);
  for (let s = 0; s < ms.length; s++) {
    const i = ms[s] + A;
    if (i in e)
      return iA[t] = i;
  }
  return t;
}
function sl(e, t, n, A) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ne(A) && n === A;
}
const gs = "http://www.w3.org/1999/xlink";
function xs(e, t, n, A, s, i = vr(t)) {
  A && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(gs, t.slice(6, t.length)) : e.setAttributeNS(gs, t, n) : n == null || i && !Us(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Re(n) ? String(n) : n
  );
}
function bs(e, t, n, A, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Vi(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const o = i === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (o !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = Us(n) : n == null && o === "string" ? (n = "", r = !0) : o === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(s || t);
}
function at(e, t, n, A) {
  e.addEventListener(t, n, A);
}
function il(e, t, n, A) {
  e.removeEventListener(t, n, A);
}
const ys = /* @__PURE__ */ Symbol("_vei");
function rl(e, t, n, A, s = null) {
  const i = e[ys] || (e[ys] = {}), r = i[t];
  if (A && r)
    r.value = A;
  else {
    const [o, l] = cl(t);
    if (A) {
      const c = i[t] = fl(
        A,
        s
      );
      at(e, o, c, l);
    } else r && (il(e, o, r, l), i[t] = void 0);
  }
}
const ol = /(Once|Passive|Capture)$/, ll = /^on:?(?:Once|Passive|Capture)$/;
function cl(e) {
  let t, n;
  for (; (n = e.match(ol)) && !ll.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : vt(e.slice(2)), t];
}
let rA = 0;
const al = /* @__PURE__ */ Promise.resolve(), ul = () => rA || (al.then(() => rA = 0), rA = Date.now());
function fl(e, t) {
  const n = (A) => {
    if (!A._vts)
      A._vts = Date.now();
    else if (A._vts <= n.attached)
      return;
    const s = n.value;
    if (O(s)) {
      const i = A.stopImmediatePropagation;
      A.stopImmediatePropagation = () => {
        i.call(A), A._stopped = !0;
      };
      const r = s.slice(), o = [A];
      for (let l = 0; l < r.length && !A._stopped; l++) {
        const c = r[l];
        c && Ne(
          c,
          t,
          5,
          o
        );
      }
    } else
      Ne(
        s,
        t,
        5,
        [A]
      );
  };
  return n.value = e, n.attached = ul(), n;
}
const vs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, dl = (e, t, n, A, s, i) => {
  const r = s === "svg";
  t === "class" ? qo(e, A, r) : t === "style" ? nl(e, n, A) : Tn(t) ? Rn(t) || rl(e, t, n, A, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : pl(e, t, A, r)) ? (bs(e, t, A), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && xs(e, t, A, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (hl(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ne(A))) ? bs(e, _e(t), A, i, t) : (t === "true-value" ? e._trueValue = A : t === "false-value" && (e._falseValue = A), xs(e, t, A, r));
};
function pl(e, t, n, A) {
  if (A)
    return !!(t === "innerHTML" || t === "textContent" || t in e && vs(t) && W(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return vs(t) && ne(n) ? !1 : t in e;
}
function hl(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const A = _e(t);
  return Array.isArray(n) ? n.some((s) => _e(s) === A) : Object.keys(n).some((s) => _e(s) === A);
}
const En = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return O(t) ? (n) => hn(t, n) : t;
};
function ml(e) {
  e.target.composing = !0;
}
function _s(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ft = /* @__PURE__ */ Symbol("_assign"), pn = /* @__PURE__ */ Symbol("_initialValue");
function oA(e, t, n) {
  return t && (e = e.trim()), n && (e = Fn(e)), e;
}
const yA = {
  created(e, { modifiers: { lazy: t, trim: n, number: A } }, s) {
    e.parentNode && (e.type === "text" ? e[pn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[pn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[ft] = En(s);
    const i = A || s.props && s.props.type === "number";
    at(e, t ? "change" : "input", (r) => {
      r.target.composing || e[ft](oA(e.value, n, i));
    }), (n || i) && at(e, "change", () => {
      e.value = oA(e.value, n, i);
    }), t || (at(e, "compositionstart", ml), at(e, "compositionend", _s), at(e, "change", _s));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: A } }) {
    const s = t ?? "", i = e[pn];
    delete e[pn], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[ft](oA(e.value, n, A)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: A, trim: s, number: i } }, r) {
    if (e[ft] = En(r), e.composing) return;
    const o = (i || e.type === "number") && !/^0\d/.test(e.value) ? Fn(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (A && t === n || s && e.value.trim() === l) || (e.value = l);
  }
}, DA = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, A) {
    e._modelValue = t, at(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Fn($n(l)) : $n(l)
      ), i = e.multiple, r = i ? gt(e._modelValue) ? new Set(s) : s : s[0], o = e._pendingValue = [
        i,
        i ? O(r) ? s.slice() : s : r
      ];
      try {
        e[ft](r);
      } finally {
        pi(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[ft] = En(A);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ws(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[ft] = En(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !gl(t, n[1], n[0])) && ws(e, t);
  }
};
function gl(e, t, n) {
  if (!n || O(e)) return Xe(e, t);
  if (gt(e)) {
    if (e.size !== t.length) return !1;
    for (const A of t)
      if (!e.has(A)) return !1;
    return !0;
  }
  return !1;
}
function ws(e, t) {
  const n = e.multiple, A = O(t);
  if (!(n && !A && !gt(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const r = e.options[s], o = $n(r);
      if (n)
        if (A) {
          const l = typeof o;
          l === "string" || l === "number" ? r.selected = t.some((c) => String(c) === String(o)) : r.selected = kr(t, o) > -1;
        } else
          r.selected = t.has(o);
      else if (Xe($n(r), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function $n(e) {
  return "_value" in e ? e._value : e.value;
}
const xl = ["ctrl", "shift", "alt", "meta"], bl = {
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
  exact: (e, t) => xl.some((n) => e[`${n}Key`] && !t.includes(n))
}, yl = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), A = t.join(".");
  return n[A] || (n[A] = ((s, ...i) => {
    for (let r = 0; r < t.length; r++) {
      const o = bl[t[r]];
      if (o && o(s, t)) return;
    }
    return e(s, ...i);
  }));
}, vl = /* @__PURE__ */ ke({ patchProp: dl }, Jo);
let ks;
function _l() {
  return ks || (ks = Io(vl));
}
const wl = ((...e) => {
  const t = _l().createApp(...e), { mount: n } = t;
  return t.mount = (A) => {
    const s = Sl(A);
    if (!s) return;
    const i = t._component;
    !W(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const r = n(s, !1, kl(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), r;
  }, t;
});
function kl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Sl(e) {
  return ne(e) ? document.querySelector(e) : e;
}
const zl = "zhonglou", El = "钟楼", $l = "1.1.0", Cl = "S", Il = 10, Ml = "【副本进行中：钟楼】", Tl = [], Rl = { briefingName: "钟楼" }, Pl = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, Fl = { type: "nights", template: "剩余{n}夜" }, Nl = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], Ol = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", jl = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0 }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], Dl = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], Bl = [{ title: "游玩说明", md: `## 副本概况
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
- 1F文具柜：一沓纸、两支铅笔。因为道具栏冻结，这是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], Ll = {
  id: zl,
  name: El,
  version: $l,
  level: Cl,
  players: Il,
  token: Ml,
  legacyKeys: Tl,
  detect: Rl,
  time: Pl,
  remaining: Fl,
  roles: Nl,
  rolesNote: Ol,
  phases: jl,
  events: Dl,
  docs: Bl
}, Vl = "jingjie", Wl = "境界游乐园", Gl = "1.0.0", Yl = "A", Hl = "【副本进行中：境界游乐园】", Kl = [], Zl = { briefingName: "境界游乐园" }, Ul = { type: "none" }, Jl = { type: "fromPanel" }, Ql = [], ql = [], Xl = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], ec = {
  id: Vl,
  name: Wl,
  version: Gl,
  level: Yl,
  token: Hl,
  legacyKeys: Kl,
  detect: Zl,
  time: Ul,
  remaining: Jl,
  phases: Ql,
  events: ql,
  docs: Xl
}, tc = "kaoshi", nc = "考试", Ac = "1.0.0", sc = "A", ic = "【副本进行中：考试】", rc = [], oc = { briefingName: "考试" }, lc = { type: "none" }, cc = { type: "fromPanel" }, ac = [], uc = [], fc = [], dc = {
  id: tc,
  name: nc,
  version: Ac,
  level: sc,
  token: ic,
  legacyKeys: rc,
  detect: oc,
  time: lc,
  remaining: cc,
  phases: ac,
  events: uc,
  docs: fc
}, pc = "xiyan", hc = "喜宴", mc = "1.0.0", gc = "D", xc = "【副本进行中：喜宴】", bc = [], yc = { briefingName: "喜宴" }, vc = { type: "none" }, _c = { type: "fromPanel" }, wc = [], kc = [], Sc = [], zc = {
  id: pc,
  name: hc,
  version: mc,
  level: gc,
  token: xc,
  legacyKeys: bc,
  detect: yc,
  time: vc,
  remaining: _c,
  phases: wc,
  events: kc,
  docs: Sc
}, Ec = "youxi", $c = "游戏", Cc = "1.0.0", Ic = "C", Mc = "【副本进行中：游戏】", Tc = [], Rc = { briefingName: "游戏" }, Pc = { type: "none" }, Fc = { type: "fromPanel" }, Nc = [], Oc = [], jc = [], Dc = {
  id: Ec,
  name: $c,
  version: Cc,
  level: Ic,
  token: Mc,
  legacyKeys: Tc,
  detect: Rc,
  time: Pc,
  remaining: Fc,
  phases: Nc,
  events: Oc,
  docs: jc
}, Bc = "wuming", Lc = "污名", Vc = "1.0.0", Wc = "B", Gc = "4-8", Yc = "【副本进行中：污名】", Hc = ["污名"], Kc = { briefingName: "污名" }, Zc = { type: "countdown", minutesPerRound: 3 }, Uc = { type: "countdown", template: "剩余{m}分钟" }, Jc = [{ id: "normal", name: "常规", cap: 50, next: "final" }, { id: "final", name: "定稿", cap: 10, next: null }], Qc = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 10, to: 10, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], qc = [], Xc = !0, ea = {
  id: Bc,
  name: Lc,
  version: Vc,
  level: Wc,
  players: Gc,
  token: Yc,
  legacyKeys: Hc,
  detect: Kc,
  time: Zc,
  remaining: Uc,
  phases: Jc,
  events: Qc,
  docs: qc,
  disableLive: Xc
}, ta = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`, Cn = "generic", Ss = [Ll, ec, dc, zc, Dc, ea], na = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(ta)
  }
};
function Aa(e, t) {
  const n = na[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const Wi = ["D", "C", "B", "A", "S"];
function Gi(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const A = (c) => {
    (typeof n[c] != "string" || !n[c].trim()) && t.push(`缺少字段或不是文本：${c}`);
  };
  A("id"), A("name"), A("version"), A("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === Cn && t.push(`id 不能是保留字 ${Cn}`), Wi.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((c) => typeof c != "string")) && t.push("legacyKeys 必须是文本数组"), (!n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName) && t.push("缺少 detect.briefingName");
  const s = n.time;
  !s || !["none", "clock", "countdown"].includes(s.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (s.type === "clock" && (typeof s.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(s.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), s.type !== "none" && (typeof s.minutesPerRound != "number" || s.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"));
  const i = n.remaining;
  !i || !["nights", "countdown", "fromPanel"].includes(i.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : i.type !== "fromPanel" && typeof i.template != "string" && t.push("remaining.template 必须是文本"), i?.type === "countdown" && s?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.roles !== void 0 && (!Array.isArray(n.roles) || n.roles.some((c) => typeof c != "string" || !c)) && t.push("roles 必须是文本数组");
  const r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  Array.isArray(n.phases) ? (n.phases.forEach((c, a) => {
    if (!c || typeof c.id != "string" || typeof c.name != "string") {
      t.push(`phases[${a}] 缺少 id 或 name`);
      return;
    }
    r.has(c.id) && t.push(`阶段 id 重复：${c.id}`), o.has(c.name) && t.push(`阶段名称重复：${c.name}`), r.add(c.id), o.add(c.name), (typeof c.cap != "number" || c.cap < 1 || !Number.isInteger(c.cap)) && t.push(`阶段 ${c.id} 的 cap 必须是正整数`), c.next !== null && typeof c.next != "string" && t.push(`阶段 ${c.id} 的 next 必须是阶段 id 或 null`);
  }), n.phases.forEach((c) => {
    c && typeof c.next == "string" && !r.has(c.next) && t.push(`阶段 ${c.id} 的 next 指向不存在的阶段：${c.next}`);
  }), n.phases.length && n.phases[0]?.byTag && t.push("第一个阶段不能是 byTag 阶段")) : t.push("phases 必须是数组");
  const l = /* @__PURE__ */ new Set();
  return Array.isArray(n.events) ? n.events.forEach((c, a) => {
    if (!c || typeof c.id != "string" || typeof c.text != "string") {
      t.push(`events[${a}] 缺少 id 或 text`);
      return;
    }
    l.has(c.id) && t.push(`事件 id 重复：${c.id}`), l.add(c.id), r.has(c.phase) || t.push(`事件 ${c.id} 的 phase 不存在：${c.phase}`), (!Number.isInteger(c.from) || !Number.isInteger(c.to) || c.from < 1 || c.to < c.from) && t.push(`事件 ${c.id} 的轮次区间无效`), c.kind !== "event" && c.kind !== "directive" && t.push(`事件 ${c.id} 的 kind 必须是 event 或 directive`), c.if !== void 0 && typeof c.if != "string" && t.push(`事件 ${c.id} 的 if 必须是文本`);
  }) : t.push("events 必须是数组"), Array.isArray(n.docs) ? n.docs.forEach((c, a) => {
    !c || typeof c.title != "string" ? t.push(`docs[${a}] 缺少 title`) : c.md !== void 0 && typeof c.md != "string" ? t.push(`docs[${a}].md 必须是文本`) : c.image !== void 0 && typeof c.image != "string" && t.push(`docs[${a}].image 必须是文本`);
  }) : t.push("docs 必须是数组"), t;
}
function Yi(e) {
  const t = Wi.includes(e.level ?? "") ? e.level : "D";
  return {
    id: Cn,
    name: e.name,
    version: "1.0.0",
    level: t,
    token: `【副本进行中：${e.name}】`,
    legacyKeys: [],
    detect: { briefingName: e.name },
    time: { type: "none" },
    remaining: { type: "fromPanel" },
    phases: [],
    events: [],
    docs: []
  };
}
function BA(e) {
  const t = new Set(Ss.map((n) => n.id));
  return [...Ss, ...e.filter((n) => !t.has(n.id))];
}
function sa(e, t) {
  return e.find((n) => n.detect.briefingName === t);
}
const ia = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, ra = /<阶段切换>([\s\S]*?)<\/阶段切换>/, oa = /<副本结算>([\s\S]*?)<\/副本结算>/, la = /<副本>([\s\S]*?)<\/副本>/, ca = /<角色登记>([\s\S]*?)<\/角色登记>/, aa = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/;
function tn(e) {
  const t = ia.exec(e ?? "");
  if (!t) return null;
  const n = { name: t[1] }, A = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), s = (r) => {
    const o = new RegExp(`${r}\\s*[：:]\\s*([^」』\\n]+)`).exec(A);
    return o ? o[1].trim() : void 0;
  }, i = s("等级");
  return i && (n.level = i.replace(/级$/, "").trim().toUpperCase()), n.goal = s("目标"), n.limit = s("时限"), n.players = s("人数"), n;
}
function ua(e) {
  const t = ra.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function Hi(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const A = n.search(/[=＝]/);
    if (A < 0) continue;
    const s = n.slice(0, A).trim(), i = n.slice(A + 1).trim();
    s && (t[s] = i);
  }
  return t;
}
function Ki(e) {
  const t = oa.exec(e ?? "");
  if (!t) return null;
  const n = Hi(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function Zi(e) {
  const t = ca.exec(e ?? "");
  if (!t) return null;
  const n = Hi(t[1]);
  return Object.keys(n).length ? n : null;
}
function fa(e) {
  const t = la.exec(e ?? "");
  if (!t) return null;
  const n = { tasks: [] };
  let A = null;
  for (const s of t[1].split(`
`)) {
    const i = s.trim();
    if (!i) continue;
    const r = /^(时限|进度条|任务|ps|PS|Ps)\s*[：:]\s*(.*)$/.exec(i);
    if (r) {
      const o = r[1].toLowerCase(), l = r[2].trim();
      o === "时限" ? (n.limit = l, A = null) : o === "进度条" ? (n.progressBar = l, A = null) : o === "任务" ? (l && n.tasks.push(l), A = "tasks") : (n.ps = l, A = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(i)) {
      A = null;
      continue;
    }
    A === "tasks" ? n.tasks.push(i) : A === "ps" && (n.ps = n.ps ? `${n.ps}
${i}` : i);
  }
  return n;
}
function da(e) {
  const t = aa.exec(e ?? "");
  return t ? t[2] : null;
}
function lA(e, t, n) {
  const A = /* @__PURE__ */ new Set();
  let s = t;
  for (; s && !A.has(s.id); ) {
    if (n(s)) return s;
    A.add(s.id), s = s.next ? e.phases.find((i) => i.id === s.next) : void 0;
  }
  return null;
}
function pa(e, t, n, A) {
  if (!e.phases.length || !e.phases.some((o) => o.id === t.id)) return null;
  const s = (o) => !!o.clock && !o.night;
  let i = null, r = 0;
  switch (A) {
    case "日落":
    case "天黑":
    case "夜里":
      i = lA(e, t, s), r = i?.cap ?? 0;
      break;
    case "晚饭":
      i = lA(e, t, s), i && (r = Math.ceil(i.cap * 0.75), i.id === t.id && r <= n && (r = i.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      i = lA(e, t, (o) => !!o.night), r = i?.cap ?? 0;
      break;
  }
  return !i || i.id === t.id && r <= n + 1 ? null : { phase: i.id, round: r, label: `${i.name}第${r}轮` };
}
const zs = 5, ha = { id: "_open", name: "进行中", cap: 0, next: null };
function st(e) {
  return !!e && !e.is_user && !e.is_system;
}
function ma(e) {
  const [t, n] = e.split(":").map((A) => parseInt(A, 10));
  return (t || 0) * 60 + (n || 0);
}
function Ui(e, t, n) {
  const A = ma(e) + Math.max(0, n - 1) * t, s = Math.floor(A / 60) % 24, i = (A % 60 + 60) % 60;
  return `${s % 12 === 0 ? 12 : s % 12}:${String(i).padStart(2, "0")}`;
}
function Es(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return Ui(e.time.dayStart, e.time.minutesPerRound, n);
}
function Ji(e) {
  return e.phases.length ? e.phases : [ha];
}
function mt(e, t) {
  return Ji(e).find((n) => n.id === t);
}
function $s(e, t, n) {
  const A = /* @__PURE__ */ new Set();
  let s = t;
  for (; s && !A.has(s.id); ) {
    if (s.id === n) return !0;
    A.add(s.id), s = mt(e, s.next);
  }
  return !1;
}
function Cs(e, t, n, A) {
  const s = n + 1, i = e.events.filter((r) => r.phase === t.id);
  if (A) {
    const r = t.id === A.phase ? A.round : t.cap;
    if (r > s) {
      let o = i.map((c, a) => ({ e: c, i: a })).filter(({ e: c }) => c.from >= s && c.from <= r).sort((c, a) => c.e.from - a.e.from || c.i - a.i).map(({ e: c }) => c), l = r;
      return o.length > zs && (l = o[zs - 1].from, o = o.filter((c) => c.from <= l)), { phase: t, round: l, events: o, skipFrom: s };
    }
  }
  return { phase: t, round: s, events: i.filter((r) => r.from === s) };
}
function ga(e, t) {
  const n = /* @__PURE__ */ new Set();
  let A = 0, s = t;
  for (; s && !n.has(s.id); )
    s.night && A++, n.add(s.id), s = mt(e, s.next);
  return A;
}
function xa(e, t, n) {
  if (e.time.type !== "countdown" || t.cap <= 0) return;
  let A = Math.max(0, t.cap - n);
  const s = /* @__PURE__ */ new Set([t.id]);
  let i = mt(e, t.next);
  for (; i && !s.has(i.id); )
    A += Math.max(0, i.cap), s.add(i.id), i = mt(e, i.next);
  return A * e.time.minutesPerRound;
}
function ba(e, t, n) {
  const A = t.entryIndex;
  if (!st(e[A])) return null;
  const s = Ji(n);
  let i = s[0], r = 0, o = !1, l, c = null, a, d, g;
  const m = /* @__PURE__ */ new Set(), I = {}, C = /* @__PURE__ */ new Map();
  for (const K of t.manual ?? [])
    C.has(K.atIndex) || C.set(K.atIndex, []), C.get(K.atIndex).push(K);
  const U = (K) => {
    i = K, r = 0, c && !$s(n, i, c.phase) && (c = null);
  };
  for (let K = A; K < e.length; K++) {
    const St = e[K];
    if (!o && st(St)) {
      const Ae = Cs(n, i, r, c);
      r = Ae.round, Ae.events.forEach((He) => m.add(He.id)), I[K] = { phase: i.id, round: r, events: Ae.events.map((He) => He.id), skipFrom: Ae.skipFrom }, c && i.id === c.phase && r >= c.round && (c = null);
      const ye = String(St.mes ?? ""), rn = fa(ye);
      rn && (d = rn);
      const on = Zi(ye);
      on && (g = on);
      const Rt = Ki(ye);
      if (Rt)
        o = !0, l = "tag", a = Rt;
      else {
        const He = ua(ye), Pt = He ? s.find((Ke) => Ke.name === He) : void 0;
        if (Pt && n.phases.length)
          U(Pt);
        else if (i.cap > 0 && r >= i.cap && i.next) {
          const Ke = mt(n, i.next);
          Ke && U(Ke);
        }
      }
    }
    for (const Ae of C.get(K) ?? []) {
      if (o) break;
      switch (Ae.kind) {
        case "skip": {
          c = mt(n, Ae.targetPhase) && $s(n, i, Ae.targetPhase) ? { phase: Ae.targetPhase, round: Ae.targetRound } : null;
          break;
        }
        case "setPhase": {
          const ye = mt(n, Ae.phase);
          ye && (c = null, U(ye));
          break;
        }
        case "setRound":
          r = Math.max(0, Math.floor(Ae.round)), c = null;
          break;
        case "end":
          o = !0, l = "manual";
          break;
      }
    }
  }
  const H = o ? null : Cs(n, i, r, c), j = H ? H.round : r + 1, L = i.cap > 0, P = n.events.filter((K) => m.has(K.id)).map((K) => K.id);
  let ee, he;
  const ue = n.remaining;
  if (!o && ue.type === "nights" && n.phases.length && !i.byTag && !i.frozen)
    ee = he = ue.template.replace("{n}", String(ga(n, i)));
  else if (!o && ue.type === "countdown" && n.phases.length) {
    const K = (St) => {
      const Ae = xa(n, i, St);
      return Ae === void 0 ? void 0 : ue.template.replace("{m}", String(Ae));
    };
    ee = K(j), he = K(r);
  }
  return {
    phase: i,
    round: r,
    nextRound: j,
    clock: o ? void 0 : Es(n, i, j),
    currentClock: Es(n, i, r),
    remainingText: ee,
    currentRemainingText: he,
    ended: o,
    endedBy: l,
    firedEvents: P,
    warn: !o && L && j >= i.cap - 2,
    isLastRound: !o && L && j === i.cap,
    overdue: !o && L && !i.next && j > i.cap,
    next: H,
    skipGoal: c,
    settlement: a,
    panel: d,
    rolesFromChat: g,
    perMessage: I,
    entryIndex: A
  };
}
const Qi = "rlzc_token", qi = "rlzc_progress", Xi = "rlzc_turn", ya = [Qi, qi, Xi], Yn = { token: "", progress: "", turn: "", injected: [] };
function va(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Is(e, t, n) {
  const A = t.roles ?? [];
  if (!A.length) return e;
  const s = new RegExp(`(?<!\\{)\\{(${A.map(va).join("|")})\\}(?!\\})`, "g");
  return e.replace(s, (i, r) => n?.[r]?.trim() || r);
}
function _a(e, t) {
  if (!t.length) return "";
  const n = e.events.map((l) => l.id), A = t.map((l) => n.indexOf(l)).filter((l) => l >= 0).sort((l, c) => l - c), s = [];
  let i = A[0], r = A[0];
  const o = () => s.push(i === r ? n[i] : `${n[i]}–${n[r]}`);
  for (let l = 1; l < A.length; l++) {
    if (A[l] === r + 1) {
      r = A[l];
      continue;
    }
    o(), i = r = A[l];
  }
  return o(), s.join("、");
}
function Ms(e, t, n) {
  let A = Is(e.text, t, n);
  return e.to > e.from && (A = `在本阶段第${e.from}到${e.to}轮之间发生：${A}`), e.if && (A += `（条件：${Is(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${A}`;
}
function wa(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function ka(e, t, n, A = {}) {
  if (!t || !n || t.ended || n.status !== "active") return Yn;
  const s = A.roles, i = e.phases.length > 0, r = t.next, o = [`副本：${e.name}（${e.level}级）`];
  if (i ? (o.push(`阶段：${t.phase.name}`), o.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`)) : o.push(`本轮：第${t.nextRound}轮`), t.clock && o.push(`钟时：${t.clock}`), t.remainingText) o.push(t.remainingText);
  else {
    const m = A.panelLimit || A.briefing?.limit;
    m && o.push(`时限：${m}`);
  }
  const l = ["［副本进度·仅供AI］", o.join("　")];
  if (!i && A.briefing?.goal && l.push(`目标：${A.briefing.goal}`), e.roles?.length) {
    const m = e.roles.filter((I) => s?.[I]);
    l.push(
      m.length ? `角色登记：${e.roles.map((I) => `${I}=${s?.[I] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const c = _a(e, t.firedEvents);
  c && l.push(`已发生事件：${c}`);
  const a = [];
  r.skipFrom !== void 0 && a.push(`玩家选择快进：本轮从「${t.phase.name}」第${r.skipFrom}轮快进到第${r.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const d = r.events.filter((m) => m.kind === "event"), g = r.events.filter((m) => m.kind === "directive");
  if (d.length && (a.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), d.forEach((m) => a.push(Ms(m, e, s)))), g.length && (a.push("本轮写作要求："), g.forEach((m) => a.push(Ms(m, e, s)))), t.isLastRound ? a.push(wa(t)) : t.overdue && a.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), e.roles?.length && !e.roles.some((m) => s?.[m])) {
    let m = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((I) => `${I}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (m += "死者不得是{{user}}或其同伴。"), a.push(m);
  }
  return {
    token: e.token,
    progress: l.join(`
`),
    turn: a.length ? ["［本轮指令·仅供AI］", ...a].join(`
`) : "",
    injected: r.events.map((m) => m.id)
  };
}
const vA = "rlzc", er = "rlzc_memo";
function Sa() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function za(e, t, n) {
  return {
    id: Sa(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function Ea(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function $a(e, t) {
  return e.packId === Cn ? e.briefing ? Yi(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function Ca(e, t) {
  const n = (A) => !!A && !A.is_user && A.extra?.rlzc?.entry === t.id;
  if (!t.id) {
    const A = e[t.entryIndex];
    return A && !A.is_user && !A.is_system ? t.entryIndex : -1;
  }
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let A = e.length - 1; A >= 0; A--) if (n(e[A])) return A;
  return -1;
}
function Ia(e, t) {
  const n = Ca(e, t);
  if (n < 0) return !1;
  const A = n - t.entryIndex;
  return A !== 0 && (t.entryIndex = n, t.manual = t.manual.map((s) => ({ ...s, atIndex: s.atIndex + A }))), t.manual = t.manual.filter((s) => s.atIndex < e.length && s.atIndex >= t.entryIndex), !0;
}
function tr(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const Zt = "rlzc_declined";
function _A(e, t) {
  return `${e}:${t}`;
}
function Ma(e, t, n = []) {
  if (t?.status === "active") return null;
  const A = e.findIndex((i) => !!i && !i.is_user && !i.is_system);
  if (A < 0 || t && t.entryIndex === A) return null;
  const s = tn(String(e[A].mes ?? ""));
  return !s || n.includes(_A(A, s.name)) ? null : { index: A, info: s };
}
const Ta = 1, Ra = 0;
function be() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function Pa() {
  const e = be();
  return e.eventTypes ?? e.event_types ?? {};
}
function Ze(e, t) {
  const n = Pa()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  be().eventSource.on(n, t);
}
function pe() {
  return be().chat ?? [];
}
function LA() {
  const e = be();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function Tt() {
  return be().chatMetadata ?? {};
}
function sn() {
  const e = be();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function xn(e, t, n, A) {
  be().setExtensionPrompt(e, t, Ta, n, A, Ra);
}
function it(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Ye(e) {
  const t = be();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
const nr = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"], Fa = new RegExp(`<(${nr.join("|")})>[\\s\\S]*?<\\/\\1>`, "g"), Na = new RegExp(`<(${nr.join("|")})>`);
function Oa(e) {
  return e.replace(Fa, "").replace(/\n{3,}/g, `

`).trim();
}
function bn(e) {
  const t = pe()[e];
  if (!t || t.is_user) return;
  const n = String(t.extra?.display_text ?? t.mes ?? "");
  if (!Na.test(n)) return;
  const A = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!A) return;
  const s = be().messageFormatting;
  if (typeof s != "function") return;
  const i = s(Oa(n), t.name ?? "", !!t.is_system, !1, e);
  A.innerHTML !== i && (A.innerHTML = i);
}
function Ar() {
  document.querySelectorAll("#chat .mes[mesid]").forEach((e) => {
    const t = Number(e.getAttribute("mesid"));
    Number.isFinite(t) && bn(t);
  });
}
const wA = "rlzc", yn = {
  depths: { token: 4, progress: 4, turn: 0 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: []
}, h = /* @__PURE__ */ Dn({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  memo: "",
  settings: structuredClone(yn),
  packs: [],
  lastInjection: Yn,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0
});
function sr(e) {
  return JSON.parse(JSON.stringify(e));
}
function ja(...e) {
  h.settings.debug && console.log("[rlzc]", ...e);
}
function Da() {
  const e = be().extensionSettings, t = e[wA] ?? {}, n = {
    ...structuredClone(yn),
    ...t,
    depths: { ...yn.depths, ...t.depths ?? {} },
    ball: { ...yn.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((A) => Gi(A).length === 0) : []
  };
  e[wA] = n, h.settings = n, h.packs = BA(n.customPacks);
}
function bt() {
  be().extensionSettings[wA] = JSON.parse(JSON.stringify(h.settings)), be().saveSettingsDebounced(), h.packs = BA(h.settings.customPacks);
}
function Ba(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = Gi(t);
  if (n.length) return n;
  const A = t;
  return BA([]).some((s) => s.id === A.id) ? [`id「${A.id}」与内置副本包重复`] : (h.settings.customPacks = [...h.settings.customPacks.filter((s) => s.id !== A.id), A], bt(), []);
}
function La(e) {
  h.settings.customPacks = h.settings.customPacks.filter((t) => t.id !== e), bt();
}
function wt() {
  return Ea(Tt()[vA]);
}
function yt(e) {
  const t = Tt();
  e ? t[vA] = JSON.parse(JSON.stringify(e)) : delete t[vA], sn();
}
function VA(e) {
  const t = wt();
  t && (e(t), yt(t), kt());
}
function Va(e) {
  const t = pe();
  return (e === "swipe" || e === "continue") && st(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function In(e, t) {
  if (!t) return { session: null, pack: null, progress: null };
  const n = $a(t, h.packs);
  return n ? { session: t, pack: n, progress: ba(e, t, n) } : { session: t, pack: null, progress: null };
}
function kt() {
  const e = pe();
  let t = wt();
  if (t) {
    const A = JSON.stringify(t);
    if (!Ia(e, t))
      yt(null), it("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const s = In(e, t);
      s.progress && (t.status = s.progress.ended ? "ended" : "active"), JSON.stringify(t) !== A && yt(t);
    }
  }
  const n = In(e, t);
  h.session = n.session, h.pack = n.pack, h.progress = n.progress, h.tick++;
}
function Wa() {
  if (h.session)
    return tr(h.session, h.progress?.rolesFromChat);
}
function Mn() {
  for (const e of ya) xn(e, "", 0, !1);
}
let WA = -1;
function Ga(e) {
  const t = Va(e), n = wt(), { pack: A, progress: s } = In(t, n), i = n ? tr(n, s?.rolesFromChat) : void 0, r = A ? ka(A, s, n, { roles: i, briefing: n?.briefing, panelLimit: s?.panel?.limit }) : Yn;
  Mn();
  const o = h.settings.depths;
  r.token && xn(Qi, r.token, o.token, !0), r.progress && xn(qi, r.progress, o.progress, !1), r.turn && xn(Xi, r.turn, o.turn, !1), h.lastInjection = r, WA = t.length, ja("注入", e, r);
}
const kA = /* @__PURE__ */ new Set();
async function Ya() {
  const e = pe(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const A = da(n.mes);
  if (!A) return;
  const s = wt();
  if (!s || s.status !== "active" || s.manual.some((c) => c.kind === "skip" && c.atIndex === t)) return;
  const i = `${LA()}:${t}:${n.mes}`;
  if (kA.has(i)) return;
  kA.add(i);
  const { pack: r, progress: o } = In(e, s);
  if (!r || !o || o.ended) return;
  const l = pa(r, o.phase, o.round, A);
  l && await Ye(`是否跳到${A}？（${l.label}）`) && (s.manual.push({ kind: "skip", atIndex: t, targetPhase: l.phase, targetRound: l.round }), yt(s));
}
async function Ha(e, t, n, A) {
  try {
    if (A === "quiet" || A === "impersonate") {
      Mn();
      return;
    }
    A !== "continue" && A !== "swipe" && A !== "regenerate" && await Ya(), Ga(A);
  } catch (s) {
    console.error("[rlzc] 拦截器出错", s), Mn();
  }
}
const Ts = /* @__PURE__ */ new Set();
async function ir(e, t = !1) {
  const A = pe()[e], s = tn(A?.mes ?? "");
  if (!s) return;
  const i = `${LA()}:${e}:${s.name}`;
  if (Ts.has(i)) return;
  Ts.add(i);
  const r = sa(h.packs, s.name), o = r ? `检测到进入《${r.name}》，是否启用？` : `检测到进入《${s.name}》，是否启用？（未收录的副本，将使用通用副本包）`;
  if (!await Ye(o)) {
    if (t) {
      const c = Tt(), a = Array.isArray(c[Zt]) ? c[Zt] : [];
      c[Zt] = [...a.filter((d) => d !== _A(e, s.name)), _A(e, s.name)], sn();
    }
    return;
  }
  const l = pe()[e];
  if (!st(l) || tn(l.mes)?.name !== s.name) {
    it("warning", "简报消息已变化，未启用。");
    return;
  }
  rr(r ?? Yi(s), e, s);
}
function GA() {
  const e = Tt(), t = Array.isArray(e[Zt]) ? e[Zt] : [], n = Ma(pe(), wt(), t);
  n && ir(n.index, !0);
}
function Ka(e) {
  kt();
  const t = pe().findIndex((n) => st(n));
  e === t && GA();
}
function rr(e, t, n) {
  const s = pe()[t], i = za(e, t, n);
  s.extra = s.extra ?? {}, s.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: i.id }, yt(i), kt(), h.progress && (s.extra.rlzc.injected = sr(h.progress.perMessage[t]?.events ?? [])), sn(), it("success", `已进入副本《${e.name}》。`);
}
async function Za(e) {
  const t = h.packs.find((i) => i.id === e);
  if (!t) return;
  const n = pe();
  let A = n.length - 1;
  for (; A >= 0 && !st(n[A]); ) A--;
  if (A < 0) {
    it("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  wt()?.status === "active" && !await Ye("当前已有进行中的副本，确定要替换吗？") || await Ye(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`) && rr(t, A, tn(n[A].mes) ?? { name: t.name });
}
function Hn(e) {
  VA((t) => t.manual.push(e));
}
function Kn() {
  return pe().length - 1;
}
async function Rs() {
  const e = h.progress;
  if (!(!e || e.ended || !h.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      it("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Ye(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (Hn({ kind: "skip", atIndex: Kn(), targetPhase: e.phase.id, targetRound: e.phase.cap }), it("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function Ps() {
  !h.session || h.progress?.ended || await Ye("确定要手动结束当前副本吗？") && Hn({ kind: "end", atIndex: Kn() });
}
function Ua(e) {
  Hn({ kind: "setPhase", atIndex: Kn(), phase: e });
}
function Ja(e) {
  Hn({ kind: "setRound", atIndex: Kn(), round: e });
}
function Qa(e) {
  VA((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function qa(e) {
  VA((t) => t.manual.splice(e, 1));
}
async function Fs() {
  h.session && await Ye("确定要删除当前副本会话吗？（不会改动聊天记录）") && (yt(null), kt());
}
function Ns(e) {
  h.memo = e, Tt()[er] = e, sn();
}
function Xa(e) {
  const t = pe(), n = t[e];
  if (!st(n)) return;
  const A = wt();
  if ((!A || A.status === "ended") && tn(n.mes)) {
    e === t.findIndex((o) => st(o)) ? GA() : ir(e);
    return;
  }
  if (!A) return;
  const s = Zi(n.mes);
  s && (A.roles = { ...A.roles ?? {}, ...s }), yt(A), kt();
  const i = h.progress?.perMessage[e];
  if (i && h.pack) {
    const o = h.pack.phases.find((d) => d.id === i.phase), l = {
      phase: o?.name ?? i.phase,
      round: i.round,
      injected: WA === e ? h.lastInjection.injected : i.events
    }, c = h.pack.time;
    c.type === "clock" && o?.clock && !o.night && !o.frozen && (l.clock = Ui(c.dayStart, c.minutesPerRound, i.round));
    const a = n.extra?.rlzc?.entry;
    a && (l.entry = a), n.extra = n.extra ?? {}, n.extra.rlzc = sr(l), sn();
  }
  const r = Ki(n.mes);
  r && it("info", `副本结算：${r.result ?? "—"}${r.rating ? `，评价 ${r.rating}` : ""}`);
}
function Os() {
  kA.clear(), WA = -1, h.chatId = LA(), h.debugUnlocked = !1, h.lastInjection = Yn, Mn();
  const e = Tt()[er];
  h.memo = typeof e == "string" ? e : "", kt(), GA(), setTimeout(Ar, 50);
}
function cA() {
  kt();
}
const eu = { class: "rlzc-ball-mark" }, aA = 44, tu = /* @__PURE__ */ rt({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ Fe({ x: 0, y: 0 });
    let n = null;
    function A(a, d) {
      const g = window.innerWidth - aA - 4, m = window.innerHeight - aA - 4;
      return { x: Math.min(Math.max(4, a), g), y: Math.min(Math.max(4, d), m) };
    }
    function s() {
      const a = h.settings.ball;
      t.value = A(a.x ?? window.innerWidth - aA - 12, a.y ?? Math.round(window.innerHeight * 0.35));
    }
    function i(a) {
      a.currentTarget.setPointerCapture(a.pointerId), n = { id: a.pointerId, dx: a.clientX - t.value.x, dy: a.clientY - t.value.y, moved: !1, sx: a.clientX, sy: a.clientY };
    }
    function r(a) {
      !n || n.id !== a.pointerId || (Math.abs(a.clientX - n.sx) + Math.abs(a.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = A(a.clientX - n.dx, a.clientY - n.dy)));
    }
    function o(a) {
      if (!n || n.id !== a.pointerId) return;
      const d = n.moved;
      n = null, d ? (h.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, bt()) : h.panelOpen = !h.panelOpen;
    }
    const l = re(() => !!h.session && !h.progress?.ended), c = re(() => !!h.progress?.warn);
    return xt(() => h.settings.ball, s, { deep: !0 }), uo(() => {
      s(), window.addEventListener("resize", s);
    }), _i(() => window.removeEventListener("resize", s)), (a, d) => (E(), $("button", {
      class: _t(["rlzc-ball", { "is-active": l.value, "is-warn": c.value }]),
      style: On({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: i,
      onPointermove: r,
      onPointerup: o,
      onPointercancel: o
    }, [
      x("span", eu, N(l.value ? R(h).pack?.level ?? "副" : "廊"), 1)
    ], 38));
  }
}), nu = { class: "rlzc-system" }, Au = { class: "rlzc-card rlzc-hero" }, su = { class: "rlzc-hero-top" }, iu = { class: "rlzc-level" }, ru = {
  key: 0,
  class: "rlzc-chip"
}, ou = {
  key: 0,
  class: "rlzc-goal"
}, lu = { class: "rlzc-grid" }, cu = {
  key: 0,
  class: "rlzc-stat"
}, au = {
  key: 1,
  class: "rlzc-stat"
}, uu = { class: "rlzc-stat" }, fu = {
  key: 0,
  class: "rlzc-note"
}, du = {
  key: 1,
  class: "rlzc-card"
}, pu = { class: "rlzc-kv" }, hu = { class: "rlzc-kv" }, mu = {
  key: 2,
  class: "rlzc-note"
}, gu = {
  key: 3,
  class: "rlzc-card"
}, xu = {
  key: 0,
  class: "rlzc-kv"
}, bu = { class: "rlzc-mono" }, yu = {
  key: 1,
  class: "rlzc-tasks"
}, vu = {
  key: 2,
  class: "rlzc-ps"
}, _u = { class: "rlzc-actions" }, wu = ["disabled"], ku = ["disabled"], Su = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, zu = { class: "rlzc-card" }, Eu = { class: "rlzc-row" }, $u = ["value"], Cu = ["disabled"], Iu = /* @__PURE__ */ rt({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ Fe(""), n = re(() => !!h.session && !!h.pack), A = re(() => h.progress), s = re(() => !!h.pack?.phases.length), i = re(() => {
      const c = A.value;
      return c ? s.value ? `${c.warn ? "⚠️ " : ""}${c.round}/${c.phase.cap}` : `第${c.round}轮` : "";
    }), r = re(() => {
      const c = A.value;
      return c ? h.pack?.remaining.type !== "fromPanel" && c.currentRemainingText ? c.currentRemainingText : c.panel?.limit || h.session?.briefing?.limit || "—" : "";
    }), o = re(() => {
      const c = A.value;
      return !!c && !c.ended && s.value && c.phase.cap > 0 && c.nextRound < c.phase.cap;
    });
    async function l() {
      t.value && (await Za(t.value), t.value = "");
    }
    return (c, a) => (E(), $("div", nu, [
      n.value && A.value ? (E(), $(Q, { key: 0 }, [
        x("div", Au, [
          x("div", su, [
            x("span", iu, N(R(h).pack.level), 1),
            x("h3", null, N(R(h).pack.name), 1),
            A.value.ended ? (E(), $("span", ru, "已结束")) : X("", !0)
          ]),
          R(h).session?.briefing?.goal ? (E(), $("p", ou, "目标：" + N(R(h).session.briefing.goal), 1)) : X("", !0)
        ]),
        x("div", lu, [
          s.value ? (E(), $("div", cu, [
            a[3] || (a[3] = x("span", null, "阶段", -1)),
            x("b", null, N(A.value.phase.name), 1)
          ])) : X("", !0),
          x("div", {
            class: _t(["rlzc-stat", { warn: A.value.warn }])
          }, [
            a[4] || (a[4] = x("span", null, "轮次", -1)),
            x("b", null, N(i.value), 1)
          ], 2),
          A.value.currentClock ? (E(), $("div", au, [
            a[5] || (a[5] = x("span", null, "钟时", -1)),
            x("b", null, N(A.value.currentClock), 1)
          ])) : X("", !0),
          x("div", uu, [
            a[6] || (a[6] = x("span", null, "剩余时间", -1)),
            x("b", null, N(r.value), 1)
          ])
        ]),
        A.value.skipGoal ? (E(), $("div", fu, "快进中：目标 " + N(R(h).pack.phases.find((d) => d.id === A.value.skipGoal.phase)?.name) + " 第" + N(A.value.skipGoal.round) + "轮", 1)) : X("", !0),
        A.value.ended && A.value.settlement ? (E(), $("div", du, [
          x("div", pu, [
            a[7] || (a[7] = x("span", null, "结果", -1)),
            x("b", null, N(A.value.settlement.result ?? "—"), 1)
          ]),
          x("div", hu, [
            a[8] || (a[8] = x("span", null, "评价", -1)),
            x("b", null, N(A.value.settlement.rating ?? "—"), 1)
          ])
        ])) : A.value.ended ? (E(), $("div", mu, "副本已手动结束。")) : X("", !0),
        A.value.panel ? (E(), $("div", gu, [
          A.value.panel.progressBar ? (E(), $("div", xu, [
            a[9] || (a[9] = x("span", null, "进度", -1)),
            x("b", bu, N(A.value.panel.progressBar), 1)
          ])) : X("", !0),
          A.value.panel.tasks.length ? (E(), $("div", yu, [
            a[10] || (a[10] = x("span", null, "任务", -1)),
            x("ul", null, [
              (E(!0), $(Q, null, ve(A.value.panel.tasks, (d, g) => (E(), $("li", { key: g }, N(d), 1))), 128))
            ])
          ])) : X("", !0),
          A.value.panel.ps ? (E(), $("div", vu, "ps：" + N(A.value.panel.ps), 1)) : X("", !0)
        ])) : X("", !0),
        x("div", _u, [
          x("button", {
            class: "rlzc-btn",
            disabled: !o.value,
            onClick: a[0] || (a[0] = //@ts-ignore
            (...d) => R(Rs) && R(Rs)(...d))
          }, "跳过（到本阶段结束）", 8, wu),
          x("button", {
            class: "rlzc-btn ghost",
            disabled: A.value.ended,
            onClick: a[1] || (a[1] = //@ts-ignore
            (...d) => R(Ps) && R(Ps)(...d))
          }, "手动结束副本", 8, ku)
        ])
      ], 64)) : (E(), $("div", Su, [...a[11] || (a[11] = [
        x("h3", null, "休整中", -1),
        x("p", null, "当前在回廊里，没有进行中的副本，也不会注入任何提示词。", -1)
      ])])),
      x("div", zu, [
        a[13] || (a[13] = x("label", { class: "rlzc-label" }, "手动选择副本（以最新一条AI回复为第1轮）", -1)),
        x("div", Eu, [
          Ct(x("select", {
            "onUpdate:modelValue": a[2] || (a[2] = (d) => t.value = d),
            class: "rlzc-input"
          }, [
            a[12] || (a[12] = x("option", { value: "" }, "选择副本…", -1)),
            (E(!0), $(Q, null, ve(R(h).packs, (d) => (E(), $("option", {
              key: d.id,
              value: d.id
            }, N(d.level) + "｜" + N(d.name), 9, $u))), 128))
          ], 512), [
            [DA, t.value]
          ]),
          x("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: l
          }, "进入", 8, Cu)
        ])
      ])
    ]));
  }
});
function Mu(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Bt(e) {
  return Mu(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function Tu(e) {
  const t = [];
  let n = null, A = [];
  const s = () => {
    A.length && t.push(`<p>${A.map(Bt).join("<br>")}</p>`), A = [];
  }, i = () => {
    n && t.push(`</li></${n}>`), n = null;
  };
  for (const r of e.replace(/\r/g, "").split(`
`)) {
    const o = r.trimEnd();
    if (!o.trim()) {
      s(), i();
      continue;
    }
    const l = /^(#{1,4})\s+(.*)$/.exec(o);
    if (l) {
      s(), i();
      const g = Math.min(l[1].length + 2, 6);
      t.push(`<h${g}>${Bt(l[2])}</h${g}>`);
      continue;
    }
    const c = /^\s*[-*]\s+(.*)$/.exec(o), a = /^\s*(\d+)[.、]\s+(.*)$/.exec(o);
    if (c || a) {
      s();
      const g = c ? "ul" : "ol", m = c ? c[1] : a[2];
      n !== g ? (i(), n = g, t.push(g === "ol" ? `<ol start="${a[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(Bt(m));
      continue;
    }
    if (n && /^\s{2,}/.test(r)) {
      t.push(`<br>${Bt(o.trim())}`);
      continue;
    }
    const d = /^>\s?(.*)$/.exec(o);
    if (d) {
      s(), i(), t.push(`<blockquote>${Bt(d[1])}</blockquote>`);
      continue;
    }
    i(), A.push(o);
  }
  return s(), i(), t.join("");
}
const Ru = { class: "rlzc-docs" }, Pu = {
  key: 0,
  class: "rlzc-row"
}, Fu = ["value"], Nu = { class: "rlzc-subtabs" }, Ou = ["onClick"], ju = { class: "rlzc-md" }, Du = ["innerHTML"], Bu = ["src", "alt"], Lu = {
  key: 2,
  class: "rlzc-note"
}, Vu = {
  key: 2,
  class: "rlzc-note"
}, Wu = /* @__PURE__ */ rt({
  __name: "DocsTab",
  setup(e) {
    const t = re(() => !!h.session && !!h.pack), n = re(() => t.value ? [h.pack] : h.packs.filter((c) => c.docs?.length)), A = /* @__PURE__ */ Fe(""), s = /* @__PURE__ */ Fe(0);
    xt(
      n,
      (c) => {
        c.some((a) => a.id === A.value) || (A.value = c[0]?.id ?? "");
      },
      { immediate: !0 }
    ), xt(A, () => s.value = 0);
    const i = re(() => n.value.find((c) => c.id === A.value)), r = re(() => i.value?.docs?.[s.value]), o = re(() => r.value?.md ? Tu(r.value.md) : ""), l = re(() => i.value && r.value?.image ? Aa(i.value, r.value.image) : null);
    return (c, a) => (E(), $("div", Ru, [
      !t.value && n.value.length > 1 ? (E(), $("div", Pu, [
        Ct(x("select", {
          "onUpdate:modelValue": a[0] || (a[0] = (d) => A.value = d),
          class: "rlzc-input"
        }, [
          (E(!0), $(Q, null, ve(n.value, (d) => (E(), $("option", {
            key: d.id,
            value: d.id
          }, N(d.name), 9, Fu))), 128))
        ], 512), [
          [DA, A.value]
        ])
      ])) : X("", !0),
      i.value && i.value.docs?.length ? (E(), $(Q, { key: 1 }, [
        x("div", Nu, [
          (E(!0), $(Q, null, ve(i.value.docs, (d, g) => (E(), $("button", {
            key: g,
            class: _t({ on: s.value === g }),
            onClick: (m) => s.value = g
          }, N(d.title), 11, Ou))), 128))
        ]),
        x("article", ju, [
          o.value ? (E(), $("div", {
            key: 0,
            innerHTML: o.value
          }, null, 8, Du)) : X("", !0),
          l.value ? (E(), $("img", {
            key: 1,
            src: l.value,
            alt: r.value?.title,
            class: "rlzc-img"
          }, null, 8, Bu)) : r.value?.image && !l.value ? (E(), $("p", Lu, "图片无法加载：" + N(r.value.image), 1)) : X("", !0)
        ])
      ], 64)) : (E(), $("p", Vu, N(t.value ? "本副本没有公开资料" : "暂无可浏览的副本资料。"), 1))
    ]));
  }
}), Gu = { class: "rlzc-memo" }, Yu = { class: "rlzc-hint" }, Hu = /* @__PURE__ */ rt({
  __name: "MemoTab",
  setup(e) {
    const t = /* @__PURE__ */ Fe(h.memo), n = /* @__PURE__ */ Fe(!0);
    let A;
    xt(() => h.memo, (i) => {
      i !== t.value && (t.value = i);
    }), xt(() => h.chatId, () => {
      clearTimeout(A), n.value = !0, t.value = h.memo;
    }), _i(() => {
      clearTimeout(A), n.value || Ns(t.value);
    });
    function s() {
      n.value = !1, clearTimeout(A), A = setTimeout(() => {
        Ns(t.value), n.value = !0;
      }, 600);
    }
    return (i, r) => (E(), $("div", Gu, [
      Ct(x("textarea", {
        "onUpdate:modelValue": r[0] || (r[0] = (o) => t.value = o),
        class: "rlzc-input rlzc-textarea",
        placeholder: "记点什么……（按聊天保存，不会发给AI）",
        onInput: s
      }, null, 544), [
        [yA, t.value]
      ]),
      x("div", Yu, N(n.value ? "已自动保存" : "保存中…"), 1)
    ]));
  }
}), Ku = { class: "rlzc-settings" }, Zu = { class: "rlzc-card" }, Uu = { class: "rlzc-field" }, Ju = ["value"], Qu = { class: "rlzc-field" }, qu = ["value"], Xu = { class: "rlzc-field" }, ef = ["value"], tf = { class: "rlzc-card" }, nf = {
  key: 0,
  class: "rlzc-list"
}, Af = ["onClick"], sf = {
  key: 1,
  class: "rlzc-hint"
}, rf = {
  key: 2,
  class: "rlzc-errors"
}, of = { class: "rlzc-card" }, lf = { class: "rlzc-check" }, cf = ["checked"], af = { class: "rlzc-check" }, uf = ["checked"], ff = /* @__PURE__ */ rt({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ Fe([]), n = /* @__PURE__ */ Fe(null);
    function A(o, l) {
      const c = Math.max(0, Math.min(1e4, Math.floor(Number(l.target.value) || 0)));
      h.settings.depths[o] = c, bt();
    }
    async function s(o) {
      const l = o.target, c = l.files?.[0];
      l.value = "", c && (t.value = Ba(await c.text()), t.value.length || it("success", `已导入副本包：${c.name}`));
    }
    async function i(o, l) {
      await Ye(`确定删除自定义副本包《${l}》吗？`) && La(o);
    }
    function r(o, l) {
      h.settings[o] = l.target.checked, bt();
    }
    return (o, l) => (E(), $("div", Ku, [
      x("div", Zu, [
        l[9] || (l[9] = x("h4", null, "注入深度", -1)),
        x("label", Uu, [
          l[6] || (l[6] = x("span", null, "暗号 rlzc_token", -1)),
          x("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: R(h).settings.depths.token,
            onChange: l[0] || (l[0] = (c) => A("token", c))
          }, null, 40, Ju)
        ]),
        x("label", Qu, [
          l[7] || (l[7] = x("span", null, "进度 rlzc_progress", -1)),
          x("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: R(h).settings.depths.progress,
            onChange: l[1] || (l[1] = (c) => A("progress", c))
          }, null, 40, qu)
        ]),
        x("label", Xu, [
          l[8] || (l[8] = x("span", null, "本轮 rlzc_turn", -1)),
          x("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: R(h).settings.depths.turn,
            onChange: l[2] || (l[2] = (c) => A("turn", c))
          }, null, 40, ef)
        ])
      ]),
      x("div", tf, [
        l[10] || (l[10] = x("h4", null, "自定义副本包", -1)),
        R(h).settings.customPacks.length ? (E(), $("ul", nf, [
          (E(!0), $(Q, null, ve(R(h).settings.customPacks, (c) => (E(), $("li", {
            key: c.id
          }, [
            x("span", null, [
              gn(N(c.level) + "｜" + N(c.name) + " ", 1),
              x("small", null, "v" + N(c.version), 1)
            ]),
            x("button", {
              class: "rlzc-btn ghost small",
              onClick: (a) => i(c.id, c.name)
            }, "删除", 8, Af)
          ]))), 128))
        ])) : (E(), $("p", sf, "还没有导入自定义副本包。")),
        x("input", {
          ref_key: "fileInput",
          ref: n,
          type: "file",
          accept: ".json,application/json",
          hidden: "",
          onChange: s
        }, null, 544),
        x("button", {
          class: "rlzc-btn",
          onClick: l[3] || (l[3] = (c) => n.value?.click())
        }, "导入 JSON…"),
        t.value.length ? (E(), $("ul", rf, [
          (E(!0), $(Q, null, ve(t.value, (c, a) => (E(), $("li", { key: a }, N(c), 1))), 128))
        ])) : X("", !0)
      ]),
      x("div", of, [
        l[13] || (l[13] = x("h4", null, "其他", -1)),
        x("label", lf, [
          x("input", {
            type: "checkbox",
            checked: R(h).settings.showBall,
            onChange: l[4] || (l[4] = (c) => r("showBall", c))
          }, null, 40, cf),
          l[11] || (l[11] = gn("显示悬浮球（关闭后可从扩展菜单打开面板）", -1))
        ]),
        x("label", af, [
          x("input", {
            type: "checkbox",
            checked: R(h).settings.debug,
            onChange: l[5] || (l[5] = (c) => r("debug", c))
          }, null, 40, uf),
          l[12] || (l[12] = gn("调试模式（调试页允许手动修改，并在控制台输出日志）", -1))
        ])
      ])
    ]));
  }
}), df = { class: "rlzc-debug" }, pf = {
  key: 0,
  class: "rlzc-note"
}, hf = {
  key: 0,
  class: "rlzc-note"
}, mf = {
  key: 1,
  class: "rlzc-note"
}, gf = {
  key: 2,
  class: "rlzc-card"
}, xf = { class: "rlzc-row" }, bf = ["disabled"], yf = ["value"], vf = ["disabled"], _f = { class: "rlzc-row" }, wf = ["disabled"], kf = ["disabled"], Sf = {
  key: 3,
  class: "rlzc-card"
}, zf = ["onUpdate:modelValue", "disabled"], Ef = ["disabled"], $f = { class: "rlzc-card" }, Cf = {
  key: 0,
  class: "rlzc-list"
}, If = ["disabled", "onClick"], Mf = {
  key: 1,
  class: "rlzc-hint"
}, Tf = {
  class: "rlzc-card",
  open: ""
}, Rf = { class: "rlzc-pre" }, Pf = { class: "rlzc-card" }, Ff = { class: "rlzc-pre" }, Nf = { class: "rlzc-card" }, Of = { class: "rlzc-pre" }, jf = { class: "rlzc-card" }, Df = { class: "rlzc-table" }, Bf = ["disabled"], Lf = /* @__PURE__ */ rt({
  __name: "DebugTab",
  setup(e) {
    const t = re(() => h.settings.debug), n = /* @__PURE__ */ Fe(""), A = /* @__PURE__ */ Fe(null), s = /* @__PURE__ */ Dn({});
    xt(
      () => [h.tick, h.pack?.id],
      () => {
        for (const g of Object.keys(s)) delete s[g];
        const d = Wa() ?? {};
        for (const g of h.pack?.roles ?? []) s[g] = d[g] ?? "";
      },
      { immediate: !0 }
    );
    const i = re(() => {
      h.tick;
      const d = pe(), g = [], m = h.session?.entryIndex ?? 0;
      for (let I = m; I < d.length; I++) {
        const C = d[I]?.extra?.rlzc;
        C && g.push({ index: I, snap: C });
      }
      return g.reverse().slice(0, 60);
    }), r = re(() => {
      const d = h.progress;
      if (!d) return null;
      const { perMessage: g, phase: m, next: I, ...C } = d;
      return {
        phase: m.id + " " + m.name,
        ...C,
        next: I ? { round: I.round, skipFrom: I.skipFrom, events: I.events.map((U) => U.id) } : null,
        messages: Object.keys(g).length
      };
    });
    function o() {
      n.value && Ua(n.value);
    }
    function l() {
      A.value !== null && A.value >= 0 && Ja(A.value);
    }
    function c() {
      Qa({ ...s });
    }
    const a = (d) => JSON.stringify(d, null, 2);
    return (d, g) => (E(), $("div", df, [
      R(h).session ? (E(), $(Q, { key: 1 }, [
        t.value ? X("", !0) : (E(), $("p", hf, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        R(h).pack && R(h).session.packVersion !== R(h).pack.version ? (E(), $("p", mf, " 入场时副本包版本为 " + N(R(h).session.packVersion) + "，当前为 " + N(R(h).pack.version) + "。 ", 1)) : X("", !0),
        R(h).pack?.phases.length ? (E(), $("div", gf, [
          g[4] || (g[4] = x("h4", null, "手动修正", -1)),
          x("div", xf, [
            Ct(x("select", {
              "onUpdate:modelValue": g[0] || (g[0] = (m) => n.value = m),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              g[3] || (g[3] = x("option", { value: "" }, "切换到阶段…", -1)),
              (E(!0), $(Q, null, ve(R(h).pack.phases, (m) => (E(), $("option", {
                key: m.id,
                value: m.id
              }, N(m.name), 9, yf))), 128))
            ], 8, bf), [
              [DA, n.value]
            ]),
            x("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: o
            }, "切换", 8, vf)
          ]),
          x("div", _f, [
            Ct(x("input", {
              "onUpdate:modelValue": g[1] || (g[1] = (m) => A.value = m),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, wf), [
              [
                yA,
                A.value,
                void 0,
                { number: !0 }
              ]
            ]),
            x("button", {
              class: "rlzc-btn small",
              disabled: !t.value || A.value === null,
              onClick: l
            }, "修正轮次", 8, kf)
          ])
        ])) : X("", !0),
        R(h).pack?.roles?.length ? (E(), $("div", Sf, [
          g[5] || (g[5] = x("h4", null, "角色登记", -1)),
          (E(!0), $(Q, null, ve(R(h).pack.roles, (m) => (E(), $("label", {
            key: m,
            class: "rlzc-field"
          }, [
            x("span", null, N(m), 1),
            Ct(x("input", {
              "onUpdate:modelValue": (I) => s[m] = I,
              class: "rlzc-input",
              disabled: !t.value,
              placeholder: "未登记"
            }, null, 8, zf), [
              [yA, s[m]]
            ])
          ]))), 128)),
          x("button", {
            class: "rlzc-btn small",
            disabled: !t.value,
            onClick: c
          }, "保存登记", 8, Ef)
        ])) : X("", !0),
        x("div", $f, [
          g[6] || (g[6] = x("h4", null, "手动操作记录", -1)),
          R(h).session.manual.length ? (E(), $("ul", Cf, [
            (E(!0), $(Q, null, ve(R(h).session.manual, (m, I) => (E(), $("li", { key: I }, [
              x("code", null, "#" + N(m.atIndex) + " " + N(m.kind) + " " + N("phase" in m ? m.phase : "") + N("round" in m ? m.round : "") + N("targetPhase" in m ? `${m.targetPhase}:${m.targetRound}` : ""), 1),
              x("button", {
                class: "rlzc-btn ghost small",
                disabled: !t.value,
                onClick: (C) => R(qa)(I)
              }, "撤销", 8, If)
            ]))), 128))
          ])) : (E(), $("p", Mf, "无"))
        ]),
        x("details", Tf, [
          g[7] || (g[7] = x("summary", null, "本次注入", -1)),
          x("pre", Rf, N([R(h).lastInjection.token, R(h).lastInjection.progress, R(h).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
        ]),
        x("details", Pf, [
          g[8] || (g[8] = x("summary", null, "重放结果", -1)),
          x("pre", Ff, N(a(r.value)), 1)
        ]),
        x("details", Nf, [
          g[9] || (g[9] = x("summary", null, "会话原始数据", -1)),
          x("pre", Of, N(a(R(h).session)), 1)
        ]),
        x("details", jf, [
          g[11] || (g[11] = x("summary", null, "每楼快照（最近60条）", -1)),
          x("table", Df, [
            g[10] || (g[10] = x("thead", null, [
              x("tr", null, [
                x("th", null, "楼"),
                x("th", null, "阶段"),
                x("th", null, "轮"),
                x("th", null, "钟时"),
                x("th", null, "事件")
              ])
            ], -1)),
            x("tbody", null, [
              (E(!0), $(Q, null, ve(i.value, (m) => (E(), $("tr", {
                key: m.index
              }, [
                x("td", null, N(m.index) + N(m.snap.entry ? "★" : ""), 1),
                x("td", null, N(m.snap.phase), 1),
                x("td", null, N(m.snap.round), 1),
                x("td", null, N(m.snap.clock ?? ""), 1),
                x("td", null, N(m.snap.injected.join(" ")), 1)
              ]))), 128))
            ])
          ])
        ]),
        x("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: g[2] || (g[2] = //@ts-ignore
          (...m) => R(Fs) && R(Fs)(...m))
        }, "删除副本会话", 8, Bf)
      ], 64)) : (E(), $("p", pf, "当前聊天没有副本会话。"))
    ]));
  }
}), Vf = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, Wf = { class: "rlzc-head" }, Gf = { class: "rlzc-tabs" }, Yf = ["onClick"], Hf = { class: "rlzc-body" }, Kf = /* @__PURE__ */ rt({
  __name: "Panel",
  setup(e) {
    const t = [
      { id: "system", label: "系统" },
      { id: "docs", label: "副本资料" },
      { id: "memo", label: "备忘录" },
      { id: "settings", label: "设置" },
      { id: "debug", label: "调试" }
    ];
    async function n(A) {
      if (A === "debug" && !h.debugUnlocked) {
        if (!await Ye("此页会显示副本真相，确定要打开吗？")) return;
        h.debugUnlocked = !0;
      }
      h.tab = A;
    }
    return (A, s) => (E(), $("div", {
      class: "rlzc-backdrop",
      onClick: s[1] || (s[1] = yl((i) => R(h).panelOpen = !1, ["self"]))
    }, [
      x("section", Vf, [
        x("header", Wf, [
          s[2] || (s[2] = x("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          x("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: s[0] || (s[0] = (i) => R(h).panelOpen = !1)
          }, "×")
        ]),
        x("nav", Gf, [
          (E(), $(Q, null, ve(t, (i) => x("button", {
            key: i.id,
            class: _t({ on: R(h).tab === i.id }),
            onClick: (r) => n(i.id)
          }, N(i.label), 11, Yf)), 64))
        ]),
        x("div", Hf, [
          R(h).tab === "system" ? (E(), Je(Iu, { key: 0 })) : R(h).tab === "docs" ? (E(), Je(Wu, { key: 1 })) : R(h).tab === "memo" ? (E(), Je(Hu, { key: 2 })) : R(h).tab === "settings" ? (E(), Je(ff, { key: 3 })) : R(h).tab === "debug" && R(h).debugUnlocked ? (E(), Je(Lf, { key: 4 })) : X("", !0)
        ])
      ])
    ]));
  }
}), Zf = /* @__PURE__ */ rt({
  __name: "App",
  setup(e) {
    return (t, n) => (E(), $(Q, null, [
      R(h).settings.showBall ? (E(), Je(tu, { key: 0 })) : X("", !0),
      R(h).panelOpen ? (E(), Je(Kf, { key: 1 })) : X("", !0)
    ], 64));
  }
}), Uf = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-memo{height:100%}.rlzc-textarea{min-height:50vh;flex:1;resize:vertical;line-height:1.6}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}', js = "rlzc-host", Ds = "rlzc-menu-btn", Bs = "rlzc-settings-drawer";
function Jf() {
  if (document.getElementById(js)) return;
  const e = document.createElement("div");
  e.id = js, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = Uf, t.appendChild(n);
  const A = document.createElement("div");
  A.className = "rlzc-root", t.appendChild(A), wl(Zf).mount(A), or(), lr();
}
function or(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => or(e + 1), 500);
    return;
  }
  if (document.getElementById(Ds)) return;
  const n = document.createElement("div");
  n.id = Ds, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const A = document.createElement("div");
  A.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const s = document.createElement("span");
  s.textContent = "回廊种菜系统", n.append(A, s), n.addEventListener("click", () => {
    h.panelOpen = !h.panelOpen;
  }), t.appendChild(n);
}
function lr(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => lr(e + 1), 500);
    return;
  }
  if (document.getElementById(Bs)) return;
  const n = (g, m = "", I = "") => {
    const C = document.createElement(g);
    return m && (C.className = m), I && (C.textContent = I), C;
  }, A = n("div");
  A.id = Bs;
  const s = n("div", "inline-drawer"), i = n("div", "inline-drawer-toggle inline-drawer-header");
  i.append(n("b", "", "回廊种菜系统"), n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const r = n("div", "inline-drawer-content"), o = n("div", "menu_button menu_button_icon", "打开面板");
  o.prepend(n("i", "fa-solid fa-seedling")), o.addEventListener("click", () => h.panelOpen = !0);
  const l = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  l.addEventListener("click", () => {
    h.settings.ball = { x: null, y: null }, h.settings.showBall = !0, bt();
  });
  const c = n("label", "checkbox_label"), a = document.createElement("input");
  a.type = "checkbox", a.addEventListener("change", () => {
    h.settings.showBall = a.checked, bt();
  }), c.append(a, n("span", "", "显示悬浮球")), xt(() => h.settings.showBall, (g) => a.checked = g, { immediate: !0 });
  const d = n("div", "flex-container");
  d.append(o, l), r.append(d, c, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), s.append(i, r), A.append(s), t.append(A);
}
globalThis.rlzcInterceptor = Ha;
function uA() {
  Da(), Ze("MESSAGE_RECEIVED", (e) => Xa(Number(e))), Ze("CHARACTER_MESSAGE_RENDERED", (e) => bn(Number(e))), Ze("MESSAGE_DELETED", () => cA()), Ze("MESSAGE_SWIPED", (e) => {
    Ka(Number(e)), bn(Number(e));
  }), Ze("MESSAGE_EDITED", () => cA()), Ze("MESSAGE_UPDATED", (e) => {
    cA(), bn(Number(e));
  }), Ze("CHAT_CHANGED", () => Os()), Ze("MORE_MESSAGES_LOADED", () => Ar()), Jf(), Os(), console.log("[rlzc] 回廊种菜系统已加载", h.settings);
}
const Ls = window.jQuery;
typeof Ls == "function" ? Ls(() => uA()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", uA) : uA();
