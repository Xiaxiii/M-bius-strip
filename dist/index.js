/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function wA(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const J = {}, at = [], ft = () => {
}, js = () => !1, Mn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), In = (e) => e.startsWith("onUpdate:"), ke = Object.assign, Ds = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, oo = Object.prototype.hasOwnProperty, Y = (e, t) => oo.call(e, t), O = Array.isArray, Qe = (e) => Xt(e) === "[object Map]", mt = (e) => Xt(e) === "[object Set]", ZA = (e) => Xt(e) === "[object Date]", W = (e) => typeof e == "function", ne = (e) => typeof e == "string", Pe = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", Bs = (e) => (q(e) || W(e)) && W(e.then) && W(e.catch), Vs = Object.prototype.toString, Xt = (e) => Vs.call(e), ro = (e) => Xt(e).slice(8, -1), Ls = (e) => Xt(e) === "[object Object]", kA = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dt = /* @__PURE__ */ wA(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Tn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, lo = /-\w/g, ve = Tn(
  (e) => e.replace(lo, (t) => t.slice(1).toUpperCase())
), co = /\B([A-Z])/g, xt = Tn(
  (e) => e.replace(co, "-$1").toLowerCase()
), Ws = Tn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Jn = Tn(
  (e) => e ? `on${Ws(e)}` : ""
), Te = (e, t) => !Object.is(e, t), fn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Gs = (e, t, n, A = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: A,
    value: n
  });
}, Pn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let UA;
const Rn = () => UA || (UA = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Fn(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const A = e[n], s = ne(A) ? po(A) : Fn(A);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (ne(e) || q(e))
    return e;
}
const ao = /;(?![^(]*\))/g, uo = /:([^]+)/, fo = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function po(e) {
  const t = {};
  return e.replace(fo, (n) => n.startsWith("/*") ? "" : n).split(ao).forEach((n) => {
    if (n) {
      const A = n.split(uo);
      A.length > 1 && (t[A[0].trim()] = A[1].trim());
    }
  }), t;
}
function bt(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (O(e))
    for (let n = 0; n < e.length; n++) {
      const A = bt(e[n]);
      A && (t += A + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ho = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", mo = /* @__PURE__ */ wA(ho);
function Ys(e) {
  return !!e || e === "";
}
function go(e, t, n) {
  if (e.length !== t.length) return !1;
  let A = !0;
  for (let s = 0; A && s < e.length; s++)
    A = Xe(e[s], t[s], n);
  return A;
}
function JA(e, t, n) {
  if (e.size !== t.size) return !1;
  const A = Array.from(t), s = new Uint8Array(A.length);
  for (const i of e) {
    let o = -1;
    for (let r = 0; r < A.length; r++)
      if (!s[r] && Xe(i, A[r], n)) {
        o = r;
        break;
      }
    if (o < 0) return !1;
    s[o] = 1;
  }
  return !0;
}
function xo(e, t, n) {
  let A = Qe(e), s = Qe(t);
  if (A || s || (A = mt(e), s = mt(t), A || s))
    return A && s ? JA(e, t, n) : !1;
  const i = Object.keys(e).length, o = Object.keys(t).length;
  if (i !== o)
    return !1;
  for (const r in e) {
    const l = e.hasOwnProperty(r), c = t.hasOwnProperty(r);
    if (l && !c || !l && c || !Xe(e[r], t[r], n))
      return !1;
  }
  return String(e) === String(t);
}
function QA(e, t, n, A) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [s, i] = n;
  if (s.has(e) || i.has(t))
    return s.get(e) === t && i.get(t) === e;
  s.set(e, t), i.set(t, e);
  const o = A(e, t, n);
  return s.delete(e), i.delete(t), o;
}
function Xe(e, t, n) {
  if (e === t) return !0;
  let A = ZA(e), s = ZA(t);
  return A || s ? A && s ? e.getTime() === t.getTime() : !1 : (A = Pe(e), s = Pe(t), A || s ? e === t : (A = O(e), s = O(t), A || s ? A && s ? QA(e, t, n, go) : !1 : (A = q(e), s = q(t), A || s ? !A || !s ? !1 : QA(e, t, n, xo) : String(e) === String(t))));
}
function bo(e, t) {
  return e.findIndex((n) => Xe(n, t));
}
const Hs = (e) => !!(e && e.__v_isRef === !0), N = (e) => ne(e) ? e : e == null ? "" : O(e) || q(e) && (e.toString === Vs || !W(e.toString)) ? Hs(e) ? N(e.value) : JSON.stringify(e, Ks, 2) : String(e), Ks = (e, t) => Hs(t) ? Ks(e, t.value) : Qe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [A, s], i) => (n[Qn(A, i) + " =>"] = s, n),
    {}
  )
} : mt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Qn(n))
} : Pe(t) ? Qn(t) : q(t) && !O(t) && !Ls(t) ? String(t) : t, Qn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ie;
class yo {
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
function vo() {
  return ie;
}
let Z;
const qn = /* @__PURE__ */ new WeakSet();
class Zs {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Js(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, qA(this), Qs(this);
    const t = Z, n = _e;
    Z = this, _e = !0;
    try {
      return this.fn();
    } finally {
      qs(this), Z = t, _e = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        EA(t);
      this.deps = this.depsTail = void 0, qA(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    uA(this) && this.run();
  }
  get dirty() {
    return uA(this);
  }
}
let Us = 0, Bt, Vt;
function Js(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Vt, Vt = e;
    return;
  }
  e.next = Bt, Bt = e;
}
function zA() {
  Us++;
}
function SA() {
  if (--Us > 0)
    return;
  if (Vt) {
    let t = Vt;
    for (Vt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Bt; ) {
    let t = Bt;
    for (Bt = void 0; t; ) {
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
function Qs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function qs(e) {
  let t, n = e.depsTail, A = n;
  for (; A; ) {
    const s = A.prevDep;
    A.version === -1 ? (A === n && (n = s), EA(A), _o(A)) : t = A, A.dep.activeLink = A.prevActiveLink, A.prevActiveLink = void 0, A = s;
  }
  e.deps = t, e.depsTail = n;
}
function uA(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Xs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Xs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Yt) || (e.globalVersion = Yt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !uA(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Z, A = _e;
  Z = e, _e = !0;
  try {
    Qs(e);
    const s = e.fn(e._value);
    (t.version === 0 || Te(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    Z = n, _e = A, qs(e), e.flags &= -3;
  }
}
function EA(e, t = !1) {
  const { dep: n, prevSub: A, nextSub: s } = e;
  if (A && (A.nextSub = s, e.prevSub = void 0), s && (s.prevSub = A, e.nextSub = void 0), n.subs === e && (n.subs = A, !A && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      EA(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function _o(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let _e = !0;
const ei = [];
function et() {
  ei.push(_e), _e = !1;
}
function tt() {
  const e = ei.pop();
  _e = e === void 0 ? !0 : e;
}
function qA(e) {
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
let Yt = 0;
class wo {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class $A {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Z || !_e || Z === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Z)
      n = this.activeLink = new wo(Z, this), Z.deps ? (n.prevDep = Z.depsTail, Z.depsTail.nextDep = n, Z.depsTail = n) : Z.deps = Z.depsTail = n, ti(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const A = n.nextDep;
      A.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = A), n.prevDep = Z.depsTail, n.nextDep = void 0, Z.depsTail.nextDep = n, Z.depsTail = n, Z.deps === n && (Z.deps = A);
    }
    return n;
  }
  trigger(t) {
    this.version++, Yt++, this.notify(t);
  }
  notify(t) {
    zA();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      SA();
    }
  }
}
function ti(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let A = t.deps; A; A = A.nextDep)
        ti(A);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const fA = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ Symbol(
  ""
), dA = /* @__PURE__ */ Symbol(
  ""
), Ht = /* @__PURE__ */ Symbol(
  ""
);
function re(e, t, n) {
  if (_e && Z) {
    let A = fA.get(e);
    A || fA.set(e, A = /* @__PURE__ */ new Map());
    let s = A.get(n);
    s || (A.set(n, s = new $A()), s.map = A, s.key = n), s.track();
  }
}
function Ve(e, t, n, A, s, i) {
  const o = fA.get(e);
  if (!o) {
    Yt++;
    return;
  }
  const r = (l) => {
    l && l.trigger();
  };
  if (zA(), t === "clear")
    o.forEach(r);
  else {
    const l = O(e), c = l && kA(n);
    if (l && n === "length") {
      const a = Number(A);
      o.forEach((d, x) => {
        (x === "length" || x === Ht || !Pe(x) && x >= a) && r(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && r(o.get(n)), c && r(o.get(Ht)), t) {
        case "add":
          l ? c && r(o.get("length")) : (r(o.get(dt)), Qe(e) && r(o.get(dA)));
          break;
        case "delete":
          l || (r(o.get(dt)), Qe(e) && r(o.get(dA)));
          break;
        case "set":
          Qe(e) && r(o.get(dt));
          break;
      }
  }
  SA();
}
function vt(e) {
  const t = /* @__PURE__ */ B(e);
  return t === e || (re(t, "iterate", Ht), /* @__PURE__ */ me(e)) ? t : /* @__PURE__ */ Re(e) ? /* @__PURE__ */ qe(e) ? t.map((n) => nt(ge(n))) : t.map(nt) : t.map(ge);
}
function Nn(e) {
  return re(e = /* @__PURE__ */ B(e), "iterate", Ht), e;
}
function Me(e, t) {
  return /* @__PURE__ */ Re(e) ? nt(/* @__PURE__ */ qe(e) ? ge(t) : t) : ge(t);
}
const ko = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xn(this, Symbol.iterator, (e) => Me(this, e));
  },
  concat(...e) {
    return vt(this).concat(
      ...e.map((t) => O(t) ? vt(t) : t)
    );
  },
  entries() {
    return Xn(this, "entries", (e) => (e[1] = Me(this, e[1]), e));
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
      (n) => n.map((A) => Me(this, A)),
      arguments
    );
  },
  find(e, t) {
    return je(
      this,
      "find",
      e,
      t,
      (n) => Me(this, n),
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
      (n) => Me(this, n),
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
    return vt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return eA(this, "lastIndexOf", e);
  },
  map(e, t) {
    return je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ft(this, "pop");
  },
  push(...e) {
    return Ft(this, "push", e);
  },
  reduce(e, ...t) {
    return XA(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return XA(this, "reduceRight", e, t);
  },
  shift() {
    return Ft(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ft(this, "splice", e);
  },
  toReversed() {
    return vt(this).toReversed();
  },
  toSorted(e) {
    return vt(this).toSorted(e);
  },
  toSpliced(...e) {
    return vt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ft(this, "unshift", e);
  },
  values() {
    return Xn(this, "values", (e) => Me(this, e));
  }
};
function Xn(e, t, n) {
  const A = Nn(e), s = A[t]();
  return A !== e && !/* @__PURE__ */ me(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const zo = Array.prototype;
function je(e, t, n, A, s, i) {
  const o = Nn(e), r = o !== e && !/* @__PURE__ */ me(e), l = o[t];
  if (l !== zo[t]) {
    const d = l.apply(e, i);
    return r ? ge(d) : d;
  }
  let c = n;
  o !== e && (r ? c = function(d, x) {
    return n.call(this, Me(e, d), x, e);
  } : n.length > 2 && (c = function(d, x) {
    return n.call(this, d, x, e);
  }));
  const a = l.call(o, c, A);
  return r && s ? s(a) : a;
}
function XA(e, t, n, A) {
  const s = Nn(e), i = s !== e && !/* @__PURE__ */ me(e);
  let o = n, r = !1;
  s !== e && (i ? (r = A.length === 0, o = function(c, a, d) {
    return r && (r = !1, c = Me(e, c)), n.call(this, c, Me(e, a), d, e);
  }) : n.length > 3 && (o = function(c, a, d) {
    return n.call(this, c, a, d, e);
  }));
  const l = s[t](o, ...A);
  return r ? Me(e, l) : l;
}
function eA(e, t, n) {
  const A = /* @__PURE__ */ B(e);
  re(A, "iterate", Ht);
  const s = A[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ IA(n[0]) ? (n[0] = /* @__PURE__ */ B(n[0]), A[t](...n)) : s;
}
function Ft(e, t, n = []) {
  et(), zA();
  const A = (/* @__PURE__ */ B(e))[t].apply(e, n);
  return SA(), tt(), A;
}
const So = /* @__PURE__ */ wA("__proto__,__v_isRef,__isVue"), ni = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pe)
);
function Eo(e) {
  Pe(e) || (e = String(e));
  const t = /* @__PURE__ */ B(this);
  return re(t, "has", e), t.hasOwnProperty(e);
}
class Ai {
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
      return A === (s ? i ? Oo : ri : i ? oi : ii).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(A) ? t : void 0;
    const o = O(t);
    if (!s) {
      let l;
      if (o && (l = ko[n]))
        return l;
      if (n === "hasOwnProperty")
        return Eo;
    }
    const r = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ce(t) ? t : A
    );
    if ((Pe(n) ? ni.has(n) : So(n)) || (s || re(t, "get", n), i))
      return r;
    if (/* @__PURE__ */ ce(r)) {
      const l = o && kA(n) ? r : r.value;
      return s && q(l) ? /* @__PURE__ */ hA(l) : l;
    }
    return q(r) ? s ? /* @__PURE__ */ hA(r) : /* @__PURE__ */ On(r) : r;
  }
}
class si extends Ai {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, A, s) {
    let i = t[n];
    const o = O(t) && kA(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Re(i);
      if (!/* @__PURE__ */ me(A) && !/* @__PURE__ */ Re(A) && (i = /* @__PURE__ */ B(i), A = /* @__PURE__ */ B(A)), !o && /* @__PURE__ */ ce(i) && !/* @__PURE__ */ ce(A))
        return c || (i.value = A), !0;
    }
    const r = o ? Number(n) < t.length : Y(t, n), l = Reflect.set(
      t,
      n,
      A,
      /* @__PURE__ */ ce(t) ? t : s
    );
    return t === /* @__PURE__ */ B(s) && l && (r ? Te(A, i) && Ve(t, "set", n, A) : Ve(t, "add", n, A)), l;
  }
  deleteProperty(t, n) {
    const A = Y(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && A && Ve(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const A = Reflect.has(t, n);
    return (!Pe(n) || !ni.has(n)) && re(t, "has", n), A;
  }
  ownKeys(t) {
    return re(
      t,
      "iterate",
      O(t) ? "length" : dt
    ), Reflect.ownKeys(t);
  }
}
class $o extends Ai {
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
const Co = /* @__PURE__ */ new si(), Mo = /* @__PURE__ */ new $o(), Io = /* @__PURE__ */ new si(!0);
const pA = (e) => e, on = (e) => Reflect.getPrototypeOf(e);
function To(e, t, n) {
  return function(...A) {
    const s = this.__v_raw, i = /* @__PURE__ */ B(s), o = Qe(i), r = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, c = s[e](...A), a = n ? pA : t ? nt : ge;
    return !t && re(
      i,
      "iterate",
      l ? dA : dt
    ), ke(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: x } = c.next();
          return x ? { value: d, done: x } : {
            value: r ? [a(d[0]), a(d[1])] : a(d),
            done: x
          };
        }
      }
    );
  };
}
function rn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Po(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ B(i), r = /* @__PURE__ */ B(s);
      e || (Te(s, r) && re(o, "get", s), re(o, "get", r));
      const { has: l } = on(o), c = t ? pA : e ? nt : ge;
      if (l.call(o, s))
        return c(i.get(s));
      if (l.call(o, r))
        return c(i.get(r));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && re(/* @__PURE__ */ B(s), "iterate", dt), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ B(i), r = /* @__PURE__ */ B(s);
      return e || (Te(s, r) && re(o, "has", s), re(o, "has", r)), s === r ? i.has(s) : i.has(s) || i.has(r);
    },
    forEach(s, i) {
      const o = this, r = o.__v_raw, l = /* @__PURE__ */ B(r), c = t ? pA : e ? nt : ge;
      return !e && re(l, "iterate", dt), r.forEach((a, d) => s.call(i, c(a), c(d), o));
    }
  };
  return ke(
    n,
    e ? {
      add: rn("add"),
      set: rn("set"),
      delete: rn("delete"),
      clear: rn("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ B(this), o = on(i), r = /* @__PURE__ */ B(s), l = !t && !/* @__PURE__ */ me(s) && !/* @__PURE__ */ Re(s) ? r : s;
        return o.has.call(i, l) || Te(s, l) && o.has.call(i, s) || Te(r, l) && o.has.call(i, r) || (i.add(l), Ve(i, "add", l, l)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ me(i) && !/* @__PURE__ */ Re(i) && (i = /* @__PURE__ */ B(i));
        const o = /* @__PURE__ */ B(this), { has: r, get: l } = on(o);
        let c = r.call(o, s);
        c || (s = /* @__PURE__ */ B(s), c = r.call(o, s));
        const a = l.call(o, s);
        return o.set(s, i), c ? Te(i, a) && Ve(o, "set", s, i) : Ve(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ B(this), { has: o, get: r } = on(i);
        let l = o.call(i, s);
        l || (s = /* @__PURE__ */ B(s), l = o.call(i, s)), r && r.call(i, s);
        const c = i.delete(s);
        return l && Ve(i, "delete", s, void 0), c;
      },
      clear() {
        const s = /* @__PURE__ */ B(this), i = s.size !== 0, o = s.clear();
        return i && Ve(
          s,
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
  ].forEach((s) => {
    n[s] = To(s, e, t);
  }), n;
}
function CA(e, t) {
  const n = Po(e, t);
  return (A, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? A : Reflect.get(
    Y(n, s) && s in A ? n : A,
    s,
    i
  );
}
const Ro = {
  get: /* @__PURE__ */ CA(!1, !1)
}, Fo = {
  get: /* @__PURE__ */ CA(!1, !0)
}, No = {
  get: /* @__PURE__ */ CA(!0, !1)
};
const ii = /* @__PURE__ */ new WeakMap(), oi = /* @__PURE__ */ new WeakMap(), ri = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap();
function jo(e) {
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
function On(e) {
  return /* @__PURE__ */ Re(e) ? e : MA(
    e,
    !1,
    Co,
    Ro,
    ii
  );
}
// @__NO_SIDE_EFFECTS__
function Do(e) {
  return MA(
    e,
    !1,
    Io,
    Fo,
    oi
  );
}
// @__NO_SIDE_EFFECTS__
function hA(e) {
  return MA(
    e,
    !0,
    Mo,
    No,
    ri
  );
}
function MA(e, t, n, A, s) {
  if (!q(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const o = jo(ro(e));
  if (o === 0)
    return e;
  const r = new Proxy(
    e,
    o === 2 ? A : n
  );
  return s.set(e, r), r;
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return /* @__PURE__ */ Re(e) ? /* @__PURE__ */ qe(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Re(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function IA(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function B(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ B(t) : e;
}
function Bo(e) {
  return !Y(e, "__v_skip") && Object.isExtensible(e) && Gs(e, "__v_skip", !0), e;
}
const ge = (e) => q(e) ? /* @__PURE__ */ On(e) : e, nt = (e) => q(e) ? /* @__PURE__ */ hA(e) : e;
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return Vo(e, !1);
}
function Vo(e, t) {
  return /* @__PURE__ */ ce(e) ? e : new Lo(e, t);
}
class Lo {
  constructor(t, n) {
    this.dep = new $A(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ B(t), this._value = n ? t : ge(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, A = this.__v_isShallow || /* @__PURE__ */ me(t) || /* @__PURE__ */ Re(t);
    t = A ? t : /* @__PURE__ */ B(t), Te(t, n) && (this._rawValue = t, this._value = A ? t : ge(t), this.dep.trigger());
  }
}
function P(e) {
  return /* @__PURE__ */ ce(e) ? e.value : e;
}
const Wo = {
  get: (e, t, n) => t === "__v_raw" ? e : P(Reflect.get(e, t, n)),
  set: (e, t, n, A) => {
    const s = e[t];
    return /* @__PURE__ */ ce(s) && !/* @__PURE__ */ ce(n) ? (s.value = n, !0) : Reflect.set(e, t, n, A);
  }
};
function li(e) {
  return /* @__PURE__ */ qe(e) ? e : new Proxy(e, Wo);
}
class Go {
  constructor(t, n, A) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new $A(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Yt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = A;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Z !== this)
      return Js(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Xs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Yo(e, t, n = !1) {
  let A, s;
  return W(e) ? A = e : (A = e.get, s = e.set), new Go(A, s, n);
}
const ln = {}, xn = /* @__PURE__ */ new WeakMap();
let lt;
function Ho(e, t = !1, n = lt) {
  if (n) {
    let A = xn.get(n);
    A || xn.set(n, A = []), A.push(e);
  }
}
function Ko(e, t, n = J) {
  const { immediate: A, deep: s, once: i, scheduler: o, augmentJob: r, call: l } = n, c = (R) => s ? R : /* @__PURE__ */ me(R) || s === !1 || s === 0 ? Le(R, 1) : Le(R);
  let a, d, x, m, M = !1, I = !1;
  if (/* @__PURE__ */ ce(e) ? (d = () => e.value, M = /* @__PURE__ */ me(e)) : /* @__PURE__ */ qe(e) ? (d = () => c(e), M = !0) : O(e) ? (I = !0, M = e.some((R) => /* @__PURE__ */ qe(R) || /* @__PURE__ */ me(R)), d = () => e.map((R) => {
    if (/* @__PURE__ */ ce(R))
      return R.value;
    if (/* @__PURE__ */ qe(R))
      return c(R);
    if (W(R))
      return l ? l(R, 2) : R();
  })) : W(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (x) {
      et();
      try {
        x();
      } finally {
        tt();
      }
    }
    const R = lt;
    lt = a;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      lt = R;
    }
  } : d = ft, t && s) {
    const R = d, ee = s === !0 ? 1 / 0 : s;
    d = () => Le(R(), ee);
  }
  const U = vo(), H = () => {
    a.stop(), U && U.active && Ds(U.effects, a);
  };
  if (i && t) {
    const R = t;
    t = (...ee) => {
      const pe = R(...ee);
      return H(), pe;
    };
  }
  let j = I ? new Array(e.length).fill(ln) : ln;
  const V = (R) => {
    if (!(!(a.flags & 1) || !a.dirty && !R))
      if (t) {
        const ee = a.run();
        if (R || s || M || (I ? ee.some((pe, ue) => Te(pe, j[ue])) : Te(ee, j))) {
          x && x();
          const pe = lt;
          lt = a;
          try {
            const ue = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              j === ln ? void 0 : I && j[0] === ln ? [] : j,
              m
            ];
            j = ee, l ? l(t, 3, ue) : (
              // @ts-expect-error
              t(...ue)
            );
          } finally {
            lt = pe;
          }
        }
      } else
        a.run();
  };
  return r && r(V), a = new Zs(d), a.scheduler = o ? () => o(V, !1) : V, m = (R) => Ho(R, !1, a), x = a.onStop = () => {
    const R = xn.get(a);
    if (R) {
      if (l)
        l(R, 4);
      else
        for (const ee of R) ee();
      xn.delete(a);
    }
  }, t ? A ? V(!0) : j = a.run() : o ? o(V.bind(null, !0), !0) : a.run(), H.pause = a.pause.bind(a), H.resume = a.resume.bind(a), H.stop = H, H;
}
function Le(e, t = 1 / 0, n) {
  if (t <= 0 || !q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ce(e))
    Le(e.value, t, n);
  else if (O(e))
    for (let A = 0; A < e.length; A++)
      Le(e[A], t, n);
  else if (mt(e) || Qe(e))
    e.forEach((A) => {
      Le(A, t, n);
    });
  else if (Ls(e)) {
    for (const A in e)
      Le(e[A], t, n);
    for (const A of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, A) && Le(e[A], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function en(e, t, n, A) {
  try {
    return A ? e(...A) : e();
  } catch (s) {
    jn(s, t, n);
  }
}
function Ne(e, t, n, A) {
  if (W(e)) {
    const s = en(e, t, n, A);
    return s && Bs(s) && s.catch((i) => {
      jn(i, t, n);
    }), s;
  }
  if (O(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Ne(e[i], t, n, A));
    return s;
  }
}
function jn(e, t, n, A = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || J;
  if (t) {
    let r = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const a = r.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, l, c) === !1)
            return;
      }
      r = r.parent;
    }
    if (i) {
      et(), en(i, null, 10, [
        e,
        l,
        c
      ]), tt();
      return;
    }
  }
  Zo(e, n, s, A, o);
}
function Zo(e, t, n, A = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const le = [];
let Ce = -1;
const wt = [];
let Ue = null, _t = 0;
const ci = /* @__PURE__ */ Promise.resolve();
let bn = null;
function ai(e) {
  const t = bn || ci;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Uo(e) {
  let t = Ce + 1, n = le.length;
  for (; t < n; ) {
    const A = t + n >>> 1, s = le[A], i = Kt(s);
    i < e || i === e && s.flags & 2 ? t = A + 1 : n = A;
  }
  return t;
}
function TA(e) {
  if (!(e.flags & 1)) {
    const t = Kt(e), n = le[le.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Kt(n) ? le.push(e) : le.splice(Uo(t), 0, e), e.flags |= 1, ui();
  }
}
function ui() {
  bn || (bn = ci.then(di));
}
function Jo(e) {
  if (!O(e))
    Ue && e.id === -1 ? Ue.splice(_t + 1, 0, e) : e.flags & 1 || (wt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      wt.push(e[t]);
  ui();
}
function es(e, t, n = Ce + 1) {
  for (; n < le.length; n++) {
    const A = le[n];
    if (A && A.flags & 2) {
      if (e && A.id !== e.uid)
        continue;
      le.splice(n, 1), n--, A.flags & 4 && (A.flags &= -2), A(), A.flags & 4 || (A.flags &= -2);
    }
  }
}
function fi(e) {
  if (wt.length) {
    const t = [...new Set(wt)].sort(
      (n, A) => Kt(n) - Kt(A)
    );
    if (wt.length = 0, Ue) {
      for (let n = 0; n < t.length; n++)
        Ue.push(t[n]);
      return;
    }
    for (Ue = t, _t = 0; _t < Ue.length; _t++) {
      const n = Ue[_t];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ue = null, _t = 0;
  }
}
const Kt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function di(e) {
  try {
    for (Ce = 0; Ce < le.length; Ce++) {
      const t = le[Ce];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), en(
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
    Ce = -1, le.length = 0, fi(), bn = null, (le.length || wt.length) && di();
  }
}
let he = null, pi = null;
function yn(e) {
  const t = he;
  return he = e, pi = e && e.type.__scopeId || null, t;
}
function Qo(e, t = he, n) {
  if (!t || e._n)
    return e;
  const A = (...s) => {
    A._d && rs(-1);
    const i = yn(t), o = pt.length;
    let r;
    try {
      r = e(...s);
    } finally {
      for (let l = pt.length; l > o; l--) Ti();
      yn(i), A._d && rs(1);
    }
    return r;
  };
  return A._n = !0, A._c = !0, A._d = !0, A;
}
function kt(e, t) {
  if (he === null)
    return e;
  const n = Ln(he), A = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, r, l = J] = t[s];
    i && (W(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Le(o), A.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: r,
      modifiers: l
    }));
  }
  return e;
}
function ot(e, t, n, A) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    i && (r.oldValue = i[o].value);
    let l = r.dir[A];
    l && (et(), Ne(l, n, 8, [
      e.el,
      r,
      e,
      t
    ]), tt());
  }
}
function qo(e, t, n = !1) {
  const A = Fr();
  if (A || zt) {
    let s = zt ? zt._context.provides : A ? A.parent == null || A.ce ? A.vnode.appContext && A.vnode.appContext.provides : A.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && W(t) ? t.call(A && A.proxy) : t;
  }
}
const Xo = /* @__PURE__ */ Symbol.for("v-scx"), er = () => qo(Xo);
function Zt(e, t, n) {
  return tr(e, t, n);
}
function tr(e, t, n = J) {
  const { immediate: A, deep: s, flush: i, once: o } = n, r = ke({}, n), l = t && A || !t && i !== "post";
  let c;
  if (Qt) {
    if (i === "sync") {
      const m = er();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = ft, m.resume = ft, m.pause = ft, m;
    }
  }
  const a = At;
  r.call = (m, M, I) => Ne(m, a, M, I);
  let d = !1;
  i === "post" ? r.scheduler = (m) => {
    ae(m, a && a.suspense);
  } : i !== "sync" && (d = !0, r.scheduler = (m, M) => {
    M ? m() : TA(m);
  }), r.augmentJob = (m) => {
    t && (m.flags |= 4), d && (m.flags |= 2, a && (m.id = a.uid, m.i = a));
  };
  const x = Ko(e, t, r);
  return Qt && (c ? c.push(x) : l && x()), x;
}
const nr = /* @__PURE__ */ Symbol("_vte"), Dn = (e) => e.__isTeleport, tA = /* @__PURE__ */ Symbol("_leaveCb");
function Ar(e) {
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
function hi(e) {
  if (!mi(e))
    return Dn(e.type) && e.children ? Ar(e.children) : e;
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
function PA(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    PA(
      Dn(n.type) && hi(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function it(e, t) {
  return W(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ke({ name: e.name }, t, { setup: e })
  ) : e;
}
function sr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ts(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const vn = /* @__PURE__ */ new WeakMap();
function Lt(e, t, n, A, s = !1) {
  if (O(e)) {
    e.forEach(
      (I, U) => Lt(
        I,
        t && (O(t) ? t[U] : t),
        n,
        A,
        s
      )
    );
    return;
  }
  if (Wt(A) && !s) {
    A.shapeFlag & 512 && A.type.__asyncResolved && A.component.subTree.component && Lt(e, t, n, A.component.subTree);
    return;
  }
  const i = A.shapeFlag & 4 ? Ln(A.component) : A.el, o = s ? null : i, { i: r, r: l } = e, c = t && t.r, a = r.refs === J ? r.refs = {} : r.refs, d = r.setupState, x = /* @__PURE__ */ B(d), m = d === J ? js : (I) => ts(a, I) ? !1 : Y(x, I), M = (I, U) => !(U && ts(a, U));
  if (c != null && c !== l) {
    if (ns(t), ne(c))
      a[c] = null, m(c) && (d[c] = null);
    else if (/* @__PURE__ */ ce(c)) {
      const I = t;
      M(c, I.k) && (c.value = null), I.k && (a[I.k] = null);
    }
  }
  if (W(l))
    en(l, r, 12, [o, a]);
  else {
    const I = ne(l), U = /* @__PURE__ */ ce(l);
    if (I || U) {
      const H = () => {
        if (e.f) {
          const j = I ? m(l) ? d[l] : a[l] : M() || !e.k ? l.value : a[e.k];
          if (s)
            O(j) && Ds(j, i);
          else if (O(j))
            j.includes(i) || j.push(i);
          else if (I)
            a[l] = [i], m(l) && (d[l] = a[l]);
          else {
            const V = [i];
            M(l, e.k) && (l.value = V), e.k && (a[e.k] = V);
          }
        } else I ? (a[l] = o, m(l) && (d[l] = o)) : U && (M(l, e.k) && (l.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const j = () => {
          H(), vn.delete(e);
        };
        j.id = -1, vn.set(e, j), ae(j, n);
      } else
        ns(e), H();
    }
  }
}
function ns(e) {
  const t = vn.get(e);
  t && (t.flags |= 8, vn.delete(e));
}
Rn().requestIdleCallback;
Rn().cancelIdleCallback;
const Wt = (e) => !!e.type.__asyncLoader, mi = (e) => e.type.__isKeepAlive;
function ir(e, t, n = At, A = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      et();
      const r = NA(n), l = Ne(t, n, e, o);
      return r(), tt(), l;
    });
    return A ? s.unshift(i) : s.push(i), i;
  }
}
const gi = (e) => (t, n = At) => {
  (!Qt || e === "sp") && ir(e, (...A) => t(...A), n);
}, or = gi("m"), xi = gi(
  "bum"
), rr = /* @__PURE__ */ Symbol.for("v-ndc");
function ye(e, t, n, A) {
  let s;
  const i = n, o = O(e);
  if (o || ne(e)) {
    const r = o && /* @__PURE__ */ qe(e);
    let l = !1, c = !1;
    r && (l = !/* @__PURE__ */ me(e), c = /* @__PURE__ */ Re(e), e = Nn(e)), s = new Array(e.length);
    for (let a = 0, d = e.length; a < d; a++)
      s[a] = t(
        l ? c ? nt(ge(e[a])) : ge(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let r = 0; r < e; r++)
      s[r] = t(r + 1, r, void 0, i);
  } else if (q(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (r, l) => t(r, l, void 0, i)
      );
    else {
      const r = Object.keys(e);
      s = new Array(r.length);
      for (let l = 0, c = r.length; l < c; l++) {
        const a = r[l];
        s[l] = t(e[a], a, l, i);
      }
    }
  else
    s = [];
  return s;
}
const mA = (e) => e ? Ni(e) ? Ln(e) : mA(e.parent) : null, Gt = (
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
    $parent: (e) => mA(e.parent),
    $root: (e) => mA(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      TA(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ai.bind(e.proxy)),
    $watch: (e) => ft
  })
), nA = (e, t) => e !== J && !e.__isScriptSetup && Y(e, t), lr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: A, data: s, props: i, accessCache: o, type: r, appContext: l } = e;
    if (t[0] !== "$") {
      const x = o[t];
      if (x !== void 0)
        switch (x) {
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
          return o[t] = 1, A[t];
        if (Y(i, t))
          return o[t] = 3, i[t];
        if (n !== J && Y(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const c = Gt[t];
    let a, d;
    if (c)
      return t === "$attrs" && re(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (a = r.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== J && Y(n, t))
      return o[t] = 4, n[t];
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
    _: { data: e, setupState: t, accessCache: n, ctx: A, appContext: s, props: i, type: o }
  }, r) {
    let l;
    return !!(n[r] || nA(t, r) || Y(i, r) || Y(A, r) || Y(Gt, r) || Y(s.config.globalProperties, r) || (l = o.__cssModules) && l[r]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Y(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function bi() {
  return {
    app: null,
    config: {
      isNativeTag: js,
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
let cr = 0;
function ar(e, t) {
  return function(A, s = null) {
    W(A) || (A = ke({}, A)), s != null && !q(s) && (s = null);
    const i = bi(), o = /* @__PURE__ */ new WeakSet(), r = [];
    let l = !1;
    const c = i.app = {
      _uid: cr++,
      _component: A,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Vr,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...d) {
        return o.has(a) || (a && W(a.install) ? (o.add(a), a.install(c, ...d)) : W(a) && (o.add(a), a(c, ...d))), c;
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
      mount(a, d, x) {
        if (!l) {
          const m = c._ceVNode || We(A, s);
          return m.appContext = i, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(m, a, x), l = !0, c._container = a, a.__vue_app__ = c, Ln(m.component);
        }
      },
      onUnmount(a) {
        r.push(a);
      },
      unmount() {
        l && (Ne(
          r,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(a, d) {
        return i.provides[a] = d, c;
      },
      runWithContext(a) {
        const d = zt;
        zt = c;
        try {
          return a();
        } finally {
          zt = d;
        }
      }
    };
    return c;
  };
}
let zt = null;
const ur = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ve(t)}Modifiers`] || e[`${xt(t)}Modifiers`];
function fr(e, t, ...n) {
  if (e.isUnmounted) return;
  const A = e.vnode.props || J;
  let s = n;
  const i = t.startsWith("update:"), o = i && ur(A, t.slice(7));
  o && (o.trim && (s = n.map((a) => ne(a) ? a.trim() : a)), o.number && (s = s.map(Pn)));
  let r, l = A[r = Jn(t)] || // also try camelCase event handler (#2249)
  A[r = Jn(ve(t))];
  !l && i && (l = A[r = Jn(xt(t))]), l && Ne(
    l,
    e,
    6,
    s
  );
  const c = A[r + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[r])
      return;
    e.emitted[r] = !0, Ne(
      c,
      e,
      6,
      s
    );
  }
}
function dr(e, t, n = !1) {
  const A = t.emitsCache, s = A.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {};
  return i ? (O(i) ? i.forEach((r) => o[r] = null) : ke(o, i), q(e) && A.set(e, o), o) : (q(e) && A.set(e, null), null);
}
function Bn(e, t) {
  return !e || !Mn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, xt(t)) || Y(e, t));
}
function As(e) {
  const {
    type: t,
    vnode: n,
    proxy: A,
    withProxy: s,
    propsOptions: [i],
    slots: o,
    attrs: r,
    emit: l,
    render: c,
    renderCache: a,
    props: d,
    data: x,
    setupState: m,
    ctx: M,
    inheritAttrs: I
  } = e, U = yn(e);
  let H, j;
  try {
    if (n.shapeFlag & 4) {
      const R = s || A, ee = R;
      H = Ie(
        c.call(
          ee,
          R,
          a,
          d,
          m,
          x,
          M
        )
      ), j = r;
    } else {
      const R = t;
      H = Ie(
        R.length > 1 ? R(
          d,
          { attrs: r, slots: o, emit: l }
        ) : R(
          d,
          null
        )
      ), j = t.props ? r : pr(r);
    }
  } catch (R) {
    pt.length = 0, jn(R, e, 1), H = We(Ge);
  }
  let V = H;
  if (j && I !== !1) {
    const R = Object.keys(j), { shapeFlag: ee } = V;
    R.length && ee & 7 && (i && R.some(In) && (j = hr(
      j,
      i
    )), V = St(V, j, !1, !0));
  }
  if (n.dirs && (V = St(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const R = Dn(V.type) && hi(V) || V;
    PA(R, n.transition);
  }
  return H = V, yn(U), H;
}
const pr = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Mn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, hr = (e, t) => {
  const n = {};
  for (const A in e)
    (!In(A) || !(A.slice(9) in t)) && (n[A] = e[A]);
  return n;
};
function mr(e, t, n) {
  const { props: A, children: s, component: i } = e, { props: o, children: r, patchFlag: l } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return A ? ss(A, o, c) : !!o;
    if (l & 8) {
      const a = t.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        const x = a[d];
        if (yi(o, A, x) && !Bn(c, x))
          return !0;
      }
    }
  } else
    return (s || r) && (!r || !r.$stable) ? !0 : A === o ? !1 : A ? o ? ss(A, o, c) : !0 : !!o;
  return !1;
}
function ss(e, t, n) {
  const A = Object.keys(t);
  if (A.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < A.length; s++) {
    const i = A[s];
    if (yi(t, e, i) && !Bn(n, i))
      return !0;
  }
  return !1;
}
function yi(e, t, n) {
  const A = e[n], s = t[n];
  return n === "style" && q(A) && q(s) ? !Xe(A, s) : A !== s;
}
function gr({ vnode: e, parent: t, suspense: n }, A) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = A, e = s), s === e)
      (e = t.vnode).el = A, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = A);
}
const vi = {}, _i = () => Object.create(vi), wi = (e) => Object.getPrototypeOf(e) === vi;
function xr(e, t, n, A = !1) {
  const s = {}, i = _i();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ki(e, t, s, i);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = A ? s : /* @__PURE__ */ Do(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function br(e, t, n, A) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, r = /* @__PURE__ */ B(s), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (A || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        let x = a[d];
        if (Bn(e.emitsOptions, x))
          continue;
        const m = t[x];
        if (l)
          if (Y(i, x))
            m !== i[x] && (i[x] = m, c = !0);
          else {
            const M = ve(x);
            s[M] = gA(
              l,
              r,
              M,
              m,
              e,
              !1
            );
          }
        else
          m !== i[x] && (i[x] = m, c = !0);
      }
    }
  } else {
    ki(e, t, s, i) && (c = !0);
    let a;
    for (const d in r)
      (!t || // for camelCase
      !Y(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = xt(d)) === d || !Y(t, a))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[a] !== void 0) && (s[d] = gA(
        l,
        r,
        d,
        void 0,
        e,
        !0
      )) : delete s[d]);
    if (i !== r)
      for (const d in i)
        (!t || !Y(t, d)) && (delete i[d], c = !0);
  }
  c && Ve(e.attrs, "set", "");
}
function ki(e, t, n, A) {
  const [s, i] = e.propsOptions;
  let o = !1, r;
  if (t)
    for (let l in t) {
      if (Dt(l))
        continue;
      const c = t[l];
      let a;
      s && Y(s, a = ve(l)) ? !i || !i.includes(a) ? n[a] = c : (r || (r = {}))[a] = c : Bn(e.emitsOptions, l) || (!(l in A) || c !== A[l]) && (A[l] = c, o = !0);
    }
  if (i) {
    const l = /* @__PURE__ */ B(n), c = r || J;
    for (let a = 0; a < i.length; a++) {
      const d = i[a];
      n[d] = gA(
        s,
        l,
        d,
        c[d],
        e,
        !Y(c, d)
      );
    }
  }
  return o;
}
function gA(e, t, n, A, s, i) {
  const o = e[n];
  if (o != null) {
    const r = Y(o, "default");
    if (r && A === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && W(l)) {
        const { propsDefaults: c } = s;
        if (n in c)
          A = c[n];
        else {
          const a = NA(s);
          A = c[n] = l.call(
            null,
            t
          ), a();
        }
      } else
        A = l;
      s.ce && s.ce._setProp(n, A);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !r ? A = !1 : o[
      1
      /* shouldCastTrue */
    ] && (A === "" || A === xt(n)) && (A = !0));
  }
  return A;
}
function yr(e, t, n = !1) {
  const A = t.propsCache, s = A.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, r = [];
  if (!i)
    return q(e) && A.set(e, at), at;
  if (O(i))
    for (let c = 0; c < i.length; c++) {
      const a = ve(i[c]);
      is(a) && (o[a] = J);
    }
  else if (i)
    for (const c in i) {
      const a = ve(c);
      if (is(a)) {
        const d = i[c], x = o[a] = O(d) || W(d) ? { type: d } : ke({}, d), m = x.type;
        let M = !1, I = !0;
        if (O(m))
          for (let U = 0; U < m.length; ++U) {
            const H = m[U], j = W(H) && H.name;
            if (j === "Boolean") {
              M = !0;
              break;
            } else j === "String" && (I = !1);
          }
        else
          M = W(m) && m.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = M, x[
          1
          /* shouldCastTrue */
        ] = I, (M || Y(x, "default")) && r.push(a);
      }
    }
  const l = [o, r];
  return q(e) && A.set(e, l), l;
}
function is(e) {
  return e[0] !== "$" && !Dt(e);
}
const RA = (e) => e === "_" || e === "_ctx" || e === "$stable", FA = (e) => O(e) ? e.map(Ie) : [Ie(e)], vr = (e, t, n) => {
  if (t._n)
    return t;
  const A = Qo((...s) => FA(t(...s)), n);
  return A._c = !1, A;
}, zi = (e, t, n) => {
  const A = e._ctx;
  for (const s in e) {
    if (RA(s)) continue;
    const i = e[s];
    if (W(i))
      t[s] = vr(s, i, A);
    else if (i != null) {
      const o = FA(i);
      t[s] = () => o;
    }
  }
}, Si = (e, t) => {
  const n = FA(t);
  e.slots.default = () => n;
}, Ei = (e, t, n) => {
  for (const A in t)
    (n || !RA(A)) && (e[A] = t[A]);
}, _r = (e, t, n) => {
  const A = e.slots = _i();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (Ei(A, t, n), n && Gs(A, "_", s, !0)) : zi(t, A);
  } else t && Si(e, t);
}, wr = (e, t, n) => {
  const { vnode: A, slots: s } = e;
  let i = !0, o = J;
  if (A.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? i = !1 : Ei(s, t, n) : (i = !t.$stable, zi(t, s)), o = t;
  } else t && (Si(e, t), o = { default: 1 });
  if (i)
    for (const r in s)
      !RA(r) && o[r] == null && delete s[r];
}, ae = $r;
function kr(e) {
  return zr(e);
}
function zr(e, t) {
  const n = Rn();
  n.__VUE__ = !0;
  const {
    insert: A,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: r,
    createComment: l,
    setText: c,
    setElementText: a,
    parentNode: d,
    nextSibling: x,
    setScopeId: m = ft,
    insertStaticContent: M
  } = e, I = (u, f, p, _ = null, b = null, v = null, z = void 0, k = null, w = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !Nt(u, f) && (_ = sn(u), Oe(u, b, v, !0), u = null), f.patchFlag === -2 && (w = !1, f.dynamicChildren = null), f.dynamicChildren && u && u.dynamicChildren && u.dynamicChildren.hasOnce && (f.dynamicChildren === at && (f.dynamicChildren = []), f.dynamicChildren.hasOnce = !0);
    const { type: y, ref: T, shapeFlag: S } = f;
    switch (y) {
      case Vn:
        U(u, f, p, _);
        break;
      case Ge:
        H(u, f, p, _);
        break;
      case sA:
        u == null && j(f, p, _, z);
        break;
      case Q:
        tn(
          u,
          f,
          p,
          _,
          b,
          v,
          z,
          k,
          w
        );
        break;
      default:
        S & 1 ? ee(
          u,
          f,
          p,
          _,
          b,
          v,
          z,
          k,
          w
        ) : S & 6 ? nn(
          u,
          f,
          p,
          _,
          b,
          v,
          z,
          k,
          w
        ) : (S & 64 || S & 128) && y.process(
          u,
          f,
          p,
          _,
          b,
          v,
          z,
          k,
          w,
          Pt
        );
    }
    T != null && b ? Lt(T, u && u.ref, v, f || u, !f) : T == null && u && u.ref != null && Lt(u.ref, null, v, u, !0);
  }, U = (u, f, p, _) => {
    if (u == null)
      A(
        f.el = r(f.children),
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
    [u.el, u.anchor] = M(
      u.children,
      f,
      p,
      _,
      u.el,
      u.anchor
    );
  }, V = ({ el: u, anchor: f }, p, _) => {
    let b;
    for (; u && u !== f; )
      b = x(u), A(u, p, _), u = b;
    A(f, p, _);
  }, R = ({ el: u, anchor: f }) => {
    let p;
    for (; u && u !== f; )
      p = x(u), s(u), u = p;
    s(f);
  }, ee = (u, f, p, _, b, v, z, k, w) => {
    if (f.type === "svg" ? z = "svg" : f.type === "math" && (z = "mathml"), u == null)
      pe(
        f,
        p,
        _,
        b,
        v,
        z,
        k,
        w
      );
    else {
      const y = u.el && u.el._isVueCE ? u.el : null;
      try {
        y && y._beginPatch(), yt(
          u,
          f,
          b,
          v,
          z,
          k,
          w
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, pe = (u, f, p, _, b, v, z, k) => {
    let w, y;
    const { props: T, shapeFlag: S, transition: C, dirs: F } = u;
    if (w = u.el = o(
      u.type,
      v,
      T && T.is,
      T
    ), S & 8 ? a(w, u.children) : S & 16 && K(
      u.children,
      w,
      null,
      _,
      b,
      AA(u, v),
      z,
      k
    ), F && ot(u, null, _, "created"), ue(w, u, u.scopeId, z, _), T) {
      for (const G in T)
        G !== "value" && !Dt(G) && i(w, G, null, T[G], v, _);
      "value" in T && i(w, "value", null, T.value, v), (y = T.onVnodeBeforeMount) && $e(y, _, u);
    }
    F && ot(u, null, _, "beforeMount");
    const D = Sr(b, C);
    D && C.beforeEnter(w), A(w, f, p), ((y = T && T.onVnodeMounted) || D || F) && ae(() => {
      try {
        y && $e(y, _, u), D && C.enter(w), F && ot(u, null, _, "mounted");
      } finally {
      }
    }, b);
  }, ue = (u, f, p, _, b) => {
    if (p && m(u, p), _)
      for (let v = 0; v < _.length; v++)
        m(u, _[v]);
    if (b) {
      let v = b.subTree;
      if (f === v || Ii(v.type) && (v.ssContent === f || v.ssFallback === f)) {
        const z = b.vnode;
        ue(
          u,
          z,
          z.scopeId,
          z.slotScopeIds,
          b.parent
        );
      }
    }
  }, K = (u, f, p, _, b, v, z, k, w = 0) => {
    for (let y = w; y < u.length; y++) {
      const T = u[y] = k ? Be(u[y]) : Ie(u[y]);
      I(
        null,
        T,
        f,
        p,
        _,
        b,
        v,
        z,
        k
      );
    }
  }, yt = (u, f, p, _, b, v, z) => {
    const k = f.el = u.el;
    let { patchFlag: w, dynamicChildren: y, dirs: T } = f;
    w |= u.patchFlag & 16;
    const S = u.props || J, C = f.props || J;
    let F;
    if (p && rt(p, !1), (F = C.onVnodeBeforeUpdate) && $e(F, p, f, u), T && ot(f, u, p, "beforeUpdate"), p && rt(p, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!u.dynamicChildren || u.dynamicChildren.length !== y.length) && (w = 0, z = !1, y = null), (S.innerHTML && C.innerHTML == null || S.textContent && C.textContent == null) && a(k, ""), y ? Ae(
      u.dynamicChildren,
      y,
      k,
      p,
      _,
      AA(f, b),
      v
    ) : z || Zn(
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
        be(k, S, C, p, b);
      else if (w & 2 && S.class !== C.class && i(k, "class", null, C.class, b), w & 4 && i(k, "style", S.style, C.style, b), w & 8) {
        const D = f.dynamicProps;
        for (let G = 0; G < D.length; G++) {
          const L = D[G], te = S[L], se = C[L];
          (se !== te || L === "value") && i(k, L, te, se, b, p);
        }
      }
      w & 1 && u.children !== f.children && a(k, f.children);
    } else !z && y == null && be(k, S, C, p, b);
    ((F = C.onVnodeUpdated) || T) && ae(() => {
      F && $e(F, p, f, u), T && ot(f, u, p, "updated");
    }, _);
  }, Ae = (u, f, p, _, b, v, z) => {
    for (let k = 0; k < f.length; k++) {
      const w = u[k], y = f[k], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === Q || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Nt(w, y) || // - In the case of a component, it could contain anything.
        w.shapeFlag & 198) ? d(w.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      I(
        w,
        y,
        T,
        null,
        _,
        b,
        v,
        z,
        !0
      );
    }
  }, be = (u, f, p, _, b) => {
    if (f !== p) {
      if (f !== J)
        for (const v in f)
          !Dt(v) && !(v in p) && i(
            u,
            v,
            f[v],
            null,
            b,
            _
          );
      for (const v in p) {
        if (Dt(v)) continue;
        const z = p[v], k = f[v];
        z !== k && v !== "value" && i(u, v, k, z, b, _);
      }
      "value" in p && i(u, "value", f.value, p.value, b);
    }
  }, tn = (u, f, p, _, b, v, z, k, w) => {
    const y = f.el = u ? u.el : r(""), T = f.anchor = u ? u.anchor : r("");
    let { patchFlag: S, dynamicChildren: C, slotScopeIds: F } = f;
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
      z,
      k,
      w
    )) : S > 0 && S & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === C.length ? (Ae(
      u.dynamicChildren,
      C,
      p,
      b,
      v,
      z,
      k
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || b && f === b.subTree) && $i(
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
      z,
      k,
      w
    );
  }, nn = (u, f, p, _, b, v, z, k, w) => {
    f.slotScopeIds = k, u == null ? f.shapeFlag & 512 ? b.ctx.activate(
      f,
      p,
      _,
      z,
      w
    ) : Mt(
      f,
      p,
      _,
      b,
      v,
      z,
      w
    ) : He(u, f, w);
  }, Mt = (u, f, p, _, b, v, z) => {
    const k = u.component = Rr(
      u,
      _,
      b
    );
    if (mi(u) && (k.ctx.renderer = Pt), Nr(k, !1, z), k.asyncDep) {
      if (b && b.registerDep(k, It, z), !u.el) {
        const w = k.subTree = We(Ge);
        H(null, w, f, p), u.placeholder = w.el;
      }
    } else
      It(
        k,
        u,
        f,
        p,
        b,
        v,
        z
      );
  }, He = (u, f, p) => {
    const _ = f.component = u.component;
    if (mr(u, f, p))
      if (_.asyncDep && !_.asyncResolved) {
        f.el = u.el, Ke(_, f, p);
        return;
      } else
        _.next = f, _.update();
    else
      f.el = u.el, _.vnode = f;
  }, It = (u, f, p, _, b, v, z) => {
    const k = () => {
      if (u.isMounted) {
        let { next: S, bu: C, u: F, parent: D, vnode: G } = u;
        {
          const Se = Ci(u);
          if (Se) {
            S && (S.el = G.el, Ke(u, S, z)), Se.asyncDep.then(() => {
              ae(() => {
                u.isUnmounted || y();
              }, b);
            });
            return;
          }
        }
        let L = S, te;
        rt(u, !1), S ? (S.el = G.el, Ke(u, S, z)) : S = G, C && fn(C), (te = S.props && S.props.onVnodeBeforeUpdate) && $e(te, D, S, G), rt(u, !0);
        const se = As(u), ze = u.subTree;
        u.subTree = se, I(
          ze,
          se,
          // parent may have changed if it's in a teleport
          d(ze.el),
          // anchor may have changed if it's in a fragment
          sn(ze),
          u,
          b,
          v
        ), S.el = se.el, L === null && gr(u, se.el), F && ae(F, b), (te = S.props && S.props.onVnodeUpdated) && ae(
          () => $e(te, D, S, G),
          b
        );
      } else {
        let S;
        const { el: C, props: F } = f, { bm: D, m: G, parent: L, root: te, type: se } = u, ze = Wt(f);
        rt(u, !1), D && fn(D), !ze && (S = F && F.onVnodeBeforeMount) && $e(S, L, f), rt(u, !0);
        {
          te.ce && te.ce._hasShadowRoot() && te.ce._injectChildStyle(
            se,
            u.parent ? u.parent.type : void 0
          );
          const Se = u.subTree = As(u);
          I(
            null,
            Se,
            p,
            _,
            u,
            b,
            v
          ), f.el = Se.el;
        }
        if (G && ae(G, b), !ze && (S = F && F.onVnodeMounted)) {
          const Se = f;
          ae(
            () => $e(S, L, Se),
            b
          );
        }
        (f.shapeFlag & 256 || L && Wt(L.vnode) && L.vnode.shapeFlag & 256) && u.a && ae(u.a, b), u.isMounted = !0, f = p = _ = null;
      }
    };
    u.scope.on();
    const w = u.effect = new Zs(k);
    u.scope.off();
    const y = u.update = w.run.bind(w), T = u.job = w.runIfDirty.bind(w);
    T.i = u, T.id = u.uid, w.scheduler = () => TA(T), rt(u, !0), y();
  }, Ke = (u, f, p) => {
    f.component = u;
    const _ = u.vnode.props;
    u.vnode = f, u.next = null, br(u, f.props, _, p), wr(u, f.children, p), et(), es(u), tt();
  }, Zn = (u, f, p, _, b, v, z, k, w = !1) => {
    const y = u && u.children, T = u ? u.shapeFlag : 0, S = f.children, { patchFlag: C, shapeFlag: F } = f;
    if (C > 0) {
      if (C & 128) {
        LA(
          y,
          S,
          p,
          _,
          b,
          v,
          z,
          k,
          w
        );
        return;
      } else if (C & 256) {
        Ao(
          y,
          S,
          p,
          _,
          b,
          v,
          z,
          k,
          w
        );
        return;
      }
    }
    F & 8 ? (T & 16 && Tt(y, b, v), S !== y && a(p, S)) : T & 16 ? F & 16 ? LA(
      y,
      S,
      p,
      _,
      b,
      v,
      z,
      k,
      w
    ) : Tt(y, b, v, !0) : (T & 8 && a(p, ""), F & 16 && K(
      S,
      p,
      _,
      b,
      v,
      z,
      k,
      w
    ));
  }, Ao = (u, f, p, _, b, v, z, k, w) => {
    u = u || at, f = f || at;
    const y = u.length, T = f.length, S = Math.min(y, T);
    let C;
    for (C = 0; C < S; C++) {
      const F = f[C] = w ? Be(f[C]) : Ie(f[C]);
      I(
        u[C],
        F,
        p,
        null,
        b,
        v,
        z,
        k,
        w
      );
    }
    y > T ? Tt(
      u,
      b,
      v,
      !0,
      !1,
      S
    ) : K(
      f,
      p,
      _,
      b,
      v,
      z,
      k,
      w,
      S
    );
  }, LA = (u, f, p, _, b, v, z, k, w) => {
    let y = 0;
    const T = f.length;
    let S = u.length - 1, C = T - 1;
    for (; y <= S && y <= C; ) {
      const F = u[y], D = f[y] = w ? Be(f[y]) : Ie(f[y]);
      if (Nt(F, D))
        I(
          F,
          D,
          p,
          null,
          b,
          v,
          z,
          k,
          w
        );
      else
        break;
      y++;
    }
    for (; y <= S && y <= C; ) {
      const F = u[S], D = f[C] = w ? Be(f[C]) : Ie(f[C]);
      if (Nt(F, D))
        I(
          F,
          D,
          p,
          null,
          b,
          v,
          z,
          k,
          w
        );
      else
        break;
      S--, C--;
    }
    if (y > S) {
      if (y <= C) {
        const F = C + 1, D = F < T ? f[F].el : _;
        for (; y <= C; )
          I(
            null,
            f[y] = w ? Be(f[y]) : Ie(f[y]),
            p,
            D,
            b,
            v,
            z,
            k,
            w
          ), y++;
      }
    } else if (y > C)
      for (; y <= S; )
        Oe(u[y], b, v, !0), y++;
    else {
      const F = y, D = y, G = /* @__PURE__ */ new Map();
      for (y = D; y <= C; y++) {
        const fe = f[y] = w ? Be(f[y]) : Ie(f[y]);
        fe.key != null && G.set(fe.key, y);
      }
      let L, te = 0;
      const se = C - D + 1;
      let ze = !1, Se = 0;
      const Rt = new Array(se);
      for (y = 0; y < se; y++) Rt[y] = 0;
      for (y = F; y <= S; y++) {
        const fe = u[y];
        if (te >= se) {
          Oe(fe, b, v, !0);
          continue;
        }
        let Ee;
        if (fe.key != null)
          Ee = G.get(fe.key);
        else
          for (L = D; L <= C; L++)
            if (Rt[L - D] === 0 && Nt(fe, f[L])) {
              Ee = L;
              break;
            }
        Ee === void 0 ? Oe(fe, b, v, !0) : (Rt[Ee - D] = y + 1, Ee >= Se ? Se = Ee : ze = !0, I(
          fe,
          f[Ee],
          p,
          null,
          b,
          v,
          z,
          k,
          w
        ), te++);
      }
      const YA = ze ? Er(Rt) : at;
      for (L = YA.length - 1, y = se - 1; y >= 0; y--) {
        const fe = D + y, Ee = f[fe], HA = f[fe + 1], KA = fe + 1 < T ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          HA.el || Mi(HA)
        ) : _;
        Rt[y] === 0 ? I(
          null,
          Ee,
          p,
          KA,
          b,
          v,
          z,
          k,
          w
        ) : ze && (L < 0 || y !== YA[L] ? An(Ee, p, KA, 2) : L--);
      }
    }
  }, An = (u, f, p, _, b = null) => {
    const { el: v, type: z, transition: k, children: w, shapeFlag: y } = u;
    if (y & 6) {
      An(u.component.subTree, f, p, _);
      return;
    }
    if (y & 128) {
      u.suspense.move(f, p, _);
      return;
    }
    if (y & 64) {
      z.move(u, f, p, Pt);
      return;
    }
    if (z === Q) {
      A(v, f, p);
      for (let S = 0; S < w.length; S++)
        An(w[S], f, p, _);
      A(u.anchor, f, p);
      return;
    }
    if (z === sA) {
      V(u, f, p);
      return;
    }
    if (_ !== 2 && y & 1 && k)
      if (_ === 0)
        k.persisted && !v[tA] ? A(v, f, p) : (k.beforeEnter(v), A(v, f, p), ae(() => k.enter(v), b));
      else {
        const { leave: S, delayLeave: C, afterLeave: F } = k, D = () => {
          u.ctx.isUnmounted ? s(v) : A(v, f, p);
        }, G = () => {
          const L = v._isLeaving || !!v[tA];
          v._isLeaving && v[tA](
            !0
            /* cancelled */
          ), k.persisted && !L ? D() : S(v, () => {
            D(), F && F();
          });
        };
        C ? C(v, D, G) : G();
      }
    else
      A(v, f, p);
  }, Oe = (u, f, p, _ = !1, b = !1) => {
    const {
      type: v,
      props: z,
      ref: k,
      children: w,
      dynamicChildren: y,
      shapeFlag: T,
      patchFlag: S,
      dirs: C,
      cacheIndex: F,
      memo: D
    } = u;
    if ((S === -2 || y && y.hasOnce) && (b = !1), k != null && (et(), Lt(k, null, p, u, !0), tt()), F != null && (!u.ctx || u.ctx === f) && (f.renderCache[F] = void 0), T & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const G = T & 1 && C, L = !Wt(u);
    let te;
    if (L && (te = z && z.onVnodeBeforeUnmount) && $e(te, f, u), T & 6)
      io(u.component, p, _);
    else {
      if (T & 128) {
        u.suspense.unmount(p, _);
        return;
      }
      G && ot(u, null, f, "beforeUnmount"), T & 64 ? u.type.remove(
        u,
        f,
        p,
        Pt,
        _
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== Q || S > 0 && S & 64) ? Tt(
        y,
        f,
        p,
        !1,
        !0
      ) : (v === Q && S & 384 || !b && T & 16) && Tt(w, f, p), _ && WA(u);
    }
    const se = D != null && F == null;
    (L && (te = z && z.onVnodeUnmounted) || G || se) && ae(() => {
      te && $e(te, f, u), G && ot(u, null, f, "unmounted"), se && (u.el = null);
    }, p);
  }, WA = (u) => {
    const { type: f, el: p, anchor: _, transition: b } = u;
    if (f === Q) {
      so(p, _);
      return;
    }
    if (f === sA) {
      R(u), b && !b.persisted && b.afterLeave && b.afterLeave();
      return;
    }
    const v = () => {
      s(p), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (u.shapeFlag & 1 && b && !b.persisted) {
      const { leave: z, delayLeave: k } = b, w = () => z(p, v);
      k ? k(u.el, v, w) : w();
    } else
      v();
  }, so = (u, f) => {
    let p;
    for (; u !== f; )
      p = x(u), s(u), u = p;
    s(f);
  }, io = (u, f, p) => {
    const { bum: _, scope: b, job: v, subTree: z, um: k, m: w, a: y } = u;
    os(w), os(y), _ && fn(_), b.stop(), v ? (v.flags |= 8, Oe(z, u, f, p)) : u.vnode.el && z && (z.transition = u.vnode.transition, Oe(z, u, f, p)), k && ae(k, f), ae(() => {
      u.isUnmounted = !0;
    }, f);
  }, Tt = (u, f, p, _ = !1, b = !1, v = 0) => {
    for (let z = v; z < u.length; z++)
      Oe(u[z], f, p, _, b);
  }, sn = (u) => {
    if (u.shapeFlag & 6)
      return sn(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = x(u.anchor || u.el), p = f && f[nr];
    return p ? x(p) : f;
  };
  let Un = !1;
  const GA = (u, f, p) => {
    let _;
    u == null ? f._vnode && (Oe(f._vnode, null, null, !0), _ = f._vnode.component) : I(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      p
    ), f._vnode = u, Un || (Un = !0, es(_), fi(), Un = !1);
  }, Pt = {
    p: I,
    um: Oe,
    m: An,
    r: WA,
    mt: Mt,
    mc: K,
    pc: Zn,
    pbc: Ae,
    n: sn,
    o: e
  };
  return {
    render: GA,
    hydrate: void 0,
    createApp: ar(GA)
  };
}
function AA({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function rt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Sr(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function $i(e, t, n = !1) {
  const A = e.children, s = t.children;
  if (O(A) && O(s))
    for (let i = 0; i < A.length; i++) {
      const o = A[i];
      let r = s[i];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = s[i] = Be(s[i]), r.el = o.el), !n && r.patchFlag !== -2 && $i(o, r)), r.type === Vn && (r.patchFlag === -1 && (r = s[i] = Be(r)), r.el = o.el), r.type === Ge && !r.el && (r.el = o.el);
    }
}
function Er(e) {
  const t = e.slice(), n = [0];
  let A, s, i, o, r;
  const l = e.length;
  for (A = 0; A < l; A++) {
    const c = e[A];
    if (c !== 0) {
      if (s = n[n.length - 1], e[s] < c) {
        t[A] = s, n.push(A);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        r = i + o >> 1, e[n[r]] < c ? i = r + 1 : o = r;
      c < e[n[i]] && (i > 0 && (t[A] = n[i - 1]), n[i] = A);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function Ci(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ci(t);
}
function os(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Mi(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Mi(t.subTree) : null;
}
const Ii = (e) => e.__isSuspense;
function $r(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : Jo(e);
}
const Q = /* @__PURE__ */ Symbol.for("v-fgt"), Vn = /* @__PURE__ */ Symbol.for("v-txt"), Ge = /* @__PURE__ */ Symbol.for("v-cmt"), sA = /* @__PURE__ */ Symbol.for("v-stc"), pt = [];
let de = null;
function E(e = !1) {
  pt.push(de = e ? null : []);
}
function Ti() {
  pt.pop(), de = pt[pt.length - 1] || null;
}
let Ut = 1;
function rs(e, t = !1) {
  Ut += e, e < 0 && de && t && (de.hasOnce = !0);
}
function Pi(e) {
  return e.dynamicChildren = Ut > 0 ? de || at : null, Ti(), Ut > 0 && de && de.push(e), e;
}
function $(e, t, n, A, s, i) {
  return Pi(
    h(
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
  return Pi(
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
function Ri(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Nt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Fi = ({ key: e }) => e ?? null, dn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || /* @__PURE__ */ ce(e) || W(e) ? { i: he, r: e, k: t, f: !!n } : e : null);
function h(e, t = null, n = null, A = 0, s = null, i = e === Q ? 0 : 1, o = !1, r = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Fi(t),
    ref: t && dn(t),
    scopeId: pi,
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
    ctx: he
  };
  return r ? (_n(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= ne(n) ? 8 : 16), Ut > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  de && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && de.push(l), l;
}
const We = Cr;
function Cr(e, t = null, n = null, A = 0, s = null, i = !1) {
  if ((!e || e === rr) && (e = Ge), Ri(e)) {
    const r = St(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _n(r, n), Ut > 0 && !i && de && (r.shapeFlag & 6 ? de[de.indexOf(e)] = r : de.push(r)), r.patchFlag = -2, r;
  }
  if (Br(e) && (e = e.__vccOpts), t) {
    t = Mr(t);
    let { class: r, style: l } = t;
    r && !ne(r) && (t.class = bt(r)), q(l) && (/* @__PURE__ */ IA(l) && !O(l) && (l = ke({}, l)), t.style = Fn(l));
  }
  const o = ne(e) ? 1 : Ii(e) ? 128 : Dn(e) ? 64 : q(e) ? 4 : W(e) ? 2 : 0;
  return h(
    e,
    t,
    n,
    A,
    s,
    o,
    i,
    !0
  );
}
function Mr(e) {
  return e ? /* @__PURE__ */ IA(e) || wi(e) ? ke({}, e) : e : null;
}
function St(e, t, n = !1, A = !1) {
  const { props: s, ref: i, patchFlag: o, children: r, transition: l } = e, c = t ? Ir(s || {}, t) : s, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Fi(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? O(i) ? i.concat(dn(t)) : [i, dn(t)] : dn(t)
    ) : i,
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
    ssContent: e.ssContent && St(e.ssContent),
    ssFallback: e.ssFallback && St(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return l && A && PA(
    a,
    l.clone(a)
  ), a;
}
function pn(e = " ", t = 0) {
  return We(Vn, null, e, t);
}
function X(e = "", t = !1) {
  return t ? (E(), Je(Ge, null, e)) : We(Ge, null, e);
}
function Ie(e) {
  return e == null || typeof e == "boolean" ? We(Ge) : O(e) ? We(
    Q,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ri(e) ? Be(e) : We(Vn, null, String(e));
}
function Be(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : St(e);
}
function _n(e, t) {
  let n = 0;
  const { shapeFlag: A } = e;
  if (t == null)
    t = null;
  else if (O(t))
    n = 16;
  else if (typeof t == "object")
    if (A & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), _n(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !wi(t) ? t._ctx = he : s === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (W(t)) {
    if (A & 65) {
      _n(e, { default: t });
      return;
    }
    t = { default: t, _ctx: he }, n = 32;
  } else
    t = String(t), A & 64 ? (n = 16, t = [pn(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Ir(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const A = e[n];
    for (const s in A)
      if (s === "class")
        t.class !== A.class && (t.class = bt([t.class, A.class]));
      else if (s === "style")
        t.style = Fn([t.style, A.style]);
      else if (Mn(s)) {
        const i = t[s], o = A[s];
        o && i !== o && !(O(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !In(s) && (t[s] = o);
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
const Tr = bi();
let Pr = 0;
function Rr(e, t, n) {
  const A = e.type, s = (t ? t.appContext : e.appContext) || Tr, i = {
    uid: Pr++,
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
    scope: new yo(
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
    propsOptions: yr(A, s),
    emitsOptions: dr(A, s),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = fr.bind(null, i), e.ce && e.ce(i), i;
}
let At = null;
const Fr = () => At || he;
let wn, Jt;
{
  const e = Rn(), t = (n, A) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(A), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  wn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => At = n
  ), Jt = t(
    "__VUE_SSR_SETTERS__",
    (n) => Qt = n
  );
}
const NA = (e) => {
  const t = At;
  return wn(e), e.scope.on(), () => {
    e.scope.off(), wn(t);
  };
}, ls = () => {
  At && At.scope.off(), wn(null);
};
function Ni(e) {
  return e.vnode.shapeFlag & 4;
}
let Qt = !1;
function Nr(e, t = !1, n = !1) {
  t && Jt(t);
  const { props: A, children: s } = e.vnode, i = Ni(e);
  xr(e, A, i, t), _r(e, s, n || t);
  const o = i ? Or(e, t) : void 0;
  return t && Jt(!1), o;
}
function Or(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, lr);
  const { setup: A } = n;
  if (A) {
    et();
    const s = e.setupContext = A.length > 1 ? Dr(e) : null, i = NA(e), o = en(
      A,
      e,
      0,
      [
        e.props,
        s
      ]
    ), r = Bs(o);
    if (tt(), i(), (r || e.sp) && !Wt(e) && sr(e), r) {
      if (o.then(ls, ls), t)
        return o.then((l) => {
          Jt(!0);
          try {
            cs(e, l, t);
          } finally {
            Jt(!1);
          }
        }).catch((l) => {
          jn(l, e, 0);
        });
      e.asyncDep = o;
    } else
      cs(e, o);
  } else
    Oi(e);
}
function cs(e, t, n) {
  W(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) && (e.setupState = li(t)), Oi(e);
}
function Oi(e, t, n) {
  const A = e.type;
  e.render || (e.render = A.render || ft);
}
const jr = {
  get(e, t) {
    return re(e, "get", ""), e[t];
  }
};
function Dr(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, jr),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ln(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(li(Bo(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Gt)
        return Gt[n](e);
    },
    has(t, n) {
      return n in t || n in Gt;
    }
  })) : e.proxy;
}
function Br(e) {
  return W(e) && "__vccOpts" in e;
}
const oe = (e, t) => /* @__PURE__ */ Yo(e, t, Qt), Vr = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let xA;
const as = typeof window < "u" && window.trustedTypes;
if (as)
  try {
    xA = /* @__PURE__ */ as.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ji = xA ? (e) => xA.createHTML(e) : (e) => e, Lr = "http://www.w3.org/2000/svg", Wr = "http://www.w3.org/1998/Math/MathML", De = typeof document < "u" ? document : null, us = De && /* @__PURE__ */ De.createElement("template"), Gr = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, A) => {
    const s = t === "svg" ? De.createElementNS(Lr, e) : t === "mathml" ? De.createElementNS(Wr, e) : n ? De.createElement(e, { is: n }) : De.createElement(e);
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
    const o = n ? n.previousSibling : t.lastChild;
    if (s && (s === i || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)); )
        ;
    else {
      us.innerHTML = ji(
        A === "svg" ? `<svg>${e}</svg>` : A === "mathml" ? `<math>${e}</math>` : e
      );
      const r = us.content;
      if (A === "svg" || A === "mathml") {
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
}, Yr = /* @__PURE__ */ Symbol("_vtc");
function Hr(e, t, n) {
  const A = e[Yr];
  A && (t = (t ? [t, ...A] : [...A]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const fs = /* @__PURE__ */ Symbol("_vod"), Kr = /* @__PURE__ */ Symbol("_vsh"), Zr = /* @__PURE__ */ Symbol(""), Ur = /(?:^|;)\s*display\s*:/;
function Jr(e, t, n) {
  const A = e.style, s = ne(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (ne(t))
        for (const o of t.split(";")) {
          const r = o.slice(0, o.indexOf(":")).trim();
          n[r] == null && jt(A, r, "");
        }
      else
        for (const o in t)
          n[o] == null && jt(A, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const r = n[o];
      r != null ? qr(
        e,
        o,
        !ne(t) && t ? t[o] : void 0,
        r
      ) || jt(A, o, r) : jt(A, o, "");
    }
  } else if (s) {
    if (t !== n) {
      const o = A[Zr];
      o && (n += ";" + o), A.cssText = n, i = Ur.test(n);
    }
  } else t && e.removeAttribute("style");
  fs in e && (e[fs] = i ? A.display : "", e[Kr] && (A.display = "none"));
}
const cn = /\s*!important$/;
function jt(e, t, n) {
  if (O(n))
    n.forEach((A) => jt(e, t, A));
  else if (n == null && (n = ""), t.startsWith("--"))
    cn.test(n) ? e.setProperty(t, n.replace(cn, ""), "important") : e.setProperty(t, n);
  else {
    const A = Qr(e, t);
    cn.test(n) ? e.setProperty(
      xt(A),
      n.replace(cn, ""),
      "important"
    ) : e[A] = n;
  }
}
const ds = ["Webkit", "Moz", "ms"], iA = {};
function Qr(e, t) {
  const n = iA[t];
  if (n)
    return n;
  let A = ve(t);
  if (A !== "filter" && A in e)
    return iA[t] = A;
  A = Ws(A);
  for (let s = 0; s < ds.length; s++) {
    const i = ds[s] + A;
    if (i in e)
      return iA[t] = i;
  }
  return t;
}
function qr(e, t, n, A) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ne(A) && n === A;
}
const ps = "http://www.w3.org/1999/xlink";
function hs(e, t, n, A, s, i = mo(t)) {
  A && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ps, t.slice(6, t.length)) : e.setAttributeNS(ps, t, n) : n == null || i && !Ys(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Pe(n) ? String(n) : n
  );
}
function ms(e, t, n, A, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ji(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const r = i === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
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
    r === "boolean" ? n = Ys(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(s || t);
}
function ct(e, t, n, A) {
  e.addEventListener(t, n, A);
}
function Xr(e, t, n, A) {
  e.removeEventListener(t, n, A);
}
const gs = /* @__PURE__ */ Symbol("_vei");
function el(e, t, n, A, s = null) {
  const i = e[gs] || (e[gs] = {}), o = i[t];
  if (A && o)
    o.value = A;
  else {
    const [r, l] = Al(t);
    if (A) {
      const c = i[t] = ol(
        A,
        s
      );
      ct(e, r, c, l);
    } else o && (Xr(e, r, o, l), i[t] = void 0);
  }
}
const tl = /(Once|Passive|Capture)$/, nl = /^on:?(?:Once|Passive|Capture)$/;
function Al(e) {
  let t, n;
  for (; (n = e.match(tl)) && !nl.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : xt(e.slice(2)), t];
}
let oA = 0;
const sl = /* @__PURE__ */ Promise.resolve(), il = () => oA || (sl.then(() => oA = 0), oA = Date.now());
function ol(e, t) {
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
      const o = s.slice(), r = [A];
      for (let l = 0; l < o.length && !A._stopped; l++) {
        const c = o[l];
        c && Ne(
          c,
          t,
          5,
          r
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
  return n.value = e, n.attached = il(), n;
}
const xs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, rl = (e, t, n, A, s, i) => {
  const o = s === "svg";
  t === "class" ? Hr(e, A, o) : t === "style" ? Jr(e, n, A) : Mn(t) ? In(t) || el(e, t, n, A, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ll(e, t, A, o)) ? (ms(e, t, A), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && hs(e, t, A, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (cl(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ne(A))) ? ms(e, ve(t), A, i, t) : (t === "true-value" ? e._trueValue = A : t === "false-value" && (e._falseValue = A), hs(e, t, A, o));
};
function ll(e, t, n, A) {
  if (A)
    return !!(t === "innerHTML" || t === "textContent" || t in e && xs(t) && W(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return xs(t) && ne(n) ? !1 : t in e;
}
function cl(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const A = ve(t);
  return Array.isArray(n) ? n.some((s) => ve(s) === A) : Object.keys(n).some((s) => ve(s) === A);
}
const kn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return O(t) ? (n) => fn(t, n) : t;
};
function al(e) {
  e.target.composing = !0;
}
function bs(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ut = /* @__PURE__ */ Symbol("_assign"), an = /* @__PURE__ */ Symbol("_initialValue");
function rA(e, t, n) {
  return t && (e = e.trim()), n && (e = Pn(e)), e;
}
const bA = {
  created(e, { modifiers: { lazy: t, trim: n, number: A } }, s) {
    e.parentNode && (e.type === "text" ? e[an] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[an] = e.defaultValue.replace(/\r\n?/g, `
`))), e[ut] = kn(s);
    const i = A || s.props && s.props.type === "number";
    ct(e, t ? "change" : "input", (o) => {
      o.target.composing || e[ut](rA(e.value, n, i));
    }), (n || i) && ct(e, "change", () => {
      e.value = rA(e.value, n, i);
    }), t || (ct(e, "compositionstart", al), ct(e, "compositionend", bs), ct(e, "change", bs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: A } }) {
    const s = t ?? "", i = e[an];
    delete e[an], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[ut](rA(e.value, n, A)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: A, trim: s, number: i } }, o) {
    if (e[ut] = kn(o), e.composing) return;
    const r = (i || e.type === "number") && !/^0\d/.test(e.value) ? Pn(e.value) : e.value, l = t ?? "";
    if (r === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (A && t === n || s && e.value.trim() === l) || (e.value = l);
  }
}, OA = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, A) {
    e._modelValue = t, ct(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Pn(zn(l)) : zn(l)
      ), i = e.multiple, o = i ? mt(e._modelValue) ? new Set(s) : s : s[0], r = e._pendingValue = [
        i,
        i ? O(o) ? s.slice() : s : o
      ];
      try {
        e[ut](o);
      } finally {
        ai(() => {
          e._pendingValue === r && (e._pendingValue = void 0);
        });
      }
    }), e[ut] = kn(A);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ys(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[ut] = kn(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !ul(t, n[1], n[0])) && ys(e, t);
  }
};
function ul(e, t, n) {
  if (!n || O(e)) return Xe(e, t);
  if (mt(e)) {
    if (e.size !== t.length) return !1;
    for (const A of t)
      if (!e.has(A)) return !1;
    return !0;
  }
  return !1;
}
function ys(e, t) {
  const n = e.multiple, A = O(t);
  if (!(n && !A && !mt(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const o = e.options[s], r = zn(o);
      if (n)
        if (A) {
          const l = typeof r;
          l === "string" || l === "number" ? o.selected = t.some((c) => String(c) === String(r)) : o.selected = bo(t, r) > -1;
        } else
          o.selected = t.has(r);
      else if (Xe(zn(o), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function zn(e) {
  return "_value" in e ? e._value : e.value;
}
const fl = ["ctrl", "shift", "alt", "meta"], dl = {
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
  exact: (e, t) => fl.some((n) => e[`${n}Key`] && !t.includes(n))
}, pl = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), A = t.join(".");
  return n[A] || (n[A] = ((s, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const r = dl[t[o]];
      if (r && r(s, t)) return;
    }
    return e(s, ...i);
  }));
}, hl = /* @__PURE__ */ ke({ patchProp: rl }, Gr);
let vs;
function ml() {
  return vs || (vs = kr(hl));
}
const gl = ((...e) => {
  const t = ml().createApp(...e), { mount: n } = t;
  return t.mount = (A) => {
    const s = bl(A);
    if (!s) return;
    const i = t._component;
    !W(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, xl(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
});
function xl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function bl(e) {
  return ne(e) ? document.querySelector(e) : e;
}
const yl = "zhonglou", vl = "钟楼", _l = "1.1.0", wl = "S", kl = 10, zl = "【副本进行中：钟楼】", Sl = [], El = { briefingName: "钟楼" }, $l = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, Cl = { type: "nights", template: "剩余{n}夜" }, Ml = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], Il = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", Tl = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0 }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], Pl = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], Rl = [{ title: "游玩说明", md: `## 副本概况
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
- 1F文具柜：一沓纸、两支铅笔。因为道具栏冻结，这是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], Fl = {
  id: yl,
  name: vl,
  version: _l,
  level: wl,
  players: kl,
  token: zl,
  legacyKeys: Sl,
  detect: El,
  time: $l,
  remaining: Cl,
  roles: Ml,
  rolesNote: Il,
  phases: Tl,
  events: Pl,
  docs: Rl
}, Nl = "jingjie", Ol = "境界游乐园", jl = "1.0.0", Dl = "A", Bl = "【副本进行中：境界游乐园】", Vl = [], Ll = { briefingName: "境界游乐园" }, Wl = { type: "none" }, Gl = { type: "fromPanel" }, Yl = [], Hl = [], Kl = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], Zl = {
  id: Nl,
  name: Ol,
  version: jl,
  level: Dl,
  token: Bl,
  legacyKeys: Vl,
  detect: Ll,
  time: Wl,
  remaining: Gl,
  phases: Yl,
  events: Hl,
  docs: Kl
}, Ul = "kaoshi", Jl = "考试", Ql = "1.0.0", ql = "A", Xl = "【副本进行中：考试】", ec = [], tc = { briefingName: "考试" }, nc = { type: "none" }, Ac = { type: "fromPanel" }, sc = [], ic = [], oc = [], rc = {
  id: Ul,
  name: Jl,
  version: Ql,
  level: ql,
  token: Xl,
  legacyKeys: ec,
  detect: tc,
  time: nc,
  remaining: Ac,
  phases: sc,
  events: ic,
  docs: oc
}, lc = "xiyan", cc = "喜宴", ac = "1.0.0", uc = "D", fc = "【副本进行中：喜宴】", dc = [], pc = { briefingName: "喜宴" }, hc = { type: "none" }, mc = { type: "fromPanel" }, gc = [], xc = [], bc = [], yc = {
  id: lc,
  name: cc,
  version: ac,
  level: uc,
  token: fc,
  legacyKeys: dc,
  detect: pc,
  time: hc,
  remaining: mc,
  phases: gc,
  events: xc,
  docs: bc
}, vc = "youxi", _c = "游戏", wc = "1.0.0", kc = "C", zc = "【副本进行中：游戏】", Sc = [], Ec = { briefingName: "游戏" }, $c = { type: "none" }, Cc = { type: "fromPanel" }, Mc = [], Ic = [], Tc = [], Pc = {
  id: vc,
  name: _c,
  version: wc,
  level: kc,
  token: zc,
  legacyKeys: Sc,
  detect: Ec,
  time: $c,
  remaining: Cc,
  phases: Mc,
  events: Ic,
  docs: Tc
}, Rc = "wuming", Fc = "污名", Nc = "1.0.0", Oc = "B", jc = "4-8", Dc = "【副本进行中：污名】", Bc = ["污名"], Vc = { briefingName: "污名" }, Lc = { type: "countdown", minutesPerRound: 3 }, Wc = { type: "countdown", template: "剩余{m}分钟" }, Gc = [{ id: "normal", name: "常规", cap: 50, next: "final" }, { id: "final", name: "定稿", cap: 10, next: null }], Yc = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 10, to: 10, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], Hc = [], Kc = !0, Zc = {
  id: Rc,
  name: Fc,
  version: Nc,
  level: Oc,
  players: jc,
  token: Dc,
  legacyKeys: Bc,
  detect: Vc,
  time: Lc,
  remaining: Wc,
  phases: Gc,
  events: Yc,
  docs: Hc,
  disableLive: Kc
}, Uc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`, Sn = "generic", _s = [Fl, Zl, rc, yc, Pc, Zc], Jc = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(Uc)
  }
};
function Qc(e, t) {
  const n = Jc[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const Di = ["D", "C", "B", "A", "S"];
function Bi(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const A = (c) => {
    (typeof n[c] != "string" || !n[c].trim()) && t.push(`缺少字段或不是文本：${c}`);
  };
  A("id"), A("name"), A("version"), A("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === Sn && t.push(`id 不能是保留字 ${Sn}`), Di.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((c) => typeof c != "string")) && t.push("legacyKeys 必须是文本数组"), (!n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName) && t.push("缺少 detect.briefingName");
  const s = n.time;
  !s || !["none", "clock", "countdown"].includes(s.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (s.type === "clock" && (typeof s.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(s.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), s.type !== "none" && (typeof s.minutesPerRound != "number" || s.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"));
  const i = n.remaining;
  !i || !["nights", "countdown", "fromPanel"].includes(i.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : i.type !== "fromPanel" && typeof i.template != "string" && t.push("remaining.template 必须是文本"), i?.type === "countdown" && s?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.roles !== void 0 && (!Array.isArray(n.roles) || n.roles.some((c) => typeof c != "string" || !c)) && t.push("roles 必须是文本数组");
  const o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
  Array.isArray(n.phases) ? (n.phases.forEach((c, a) => {
    if (!c || typeof c.id != "string" || typeof c.name != "string") {
      t.push(`phases[${a}] 缺少 id 或 name`);
      return;
    }
    o.has(c.id) && t.push(`阶段 id 重复：${c.id}`), r.has(c.name) && t.push(`阶段名称重复：${c.name}`), o.add(c.id), r.add(c.name), (typeof c.cap != "number" || c.cap < 1 || !Number.isInteger(c.cap)) && t.push(`阶段 ${c.id} 的 cap 必须是正整数`), c.next !== null && typeof c.next != "string" && t.push(`阶段 ${c.id} 的 next 必须是阶段 id 或 null`);
  }), n.phases.forEach((c) => {
    c && typeof c.next == "string" && !o.has(c.next) && t.push(`阶段 ${c.id} 的 next 指向不存在的阶段：${c.next}`);
  }), n.phases.length && n.phases[0]?.byTag && t.push("第一个阶段不能是 byTag 阶段")) : t.push("phases 必须是数组");
  const l = /* @__PURE__ */ new Set();
  return Array.isArray(n.events) ? n.events.forEach((c, a) => {
    if (!c || typeof c.id != "string" || typeof c.text != "string") {
      t.push(`events[${a}] 缺少 id 或 text`);
      return;
    }
    l.has(c.id) && t.push(`事件 id 重复：${c.id}`), l.add(c.id), o.has(c.phase) || t.push(`事件 ${c.id} 的 phase 不存在：${c.phase}`), (!Number.isInteger(c.from) || !Number.isInteger(c.to) || c.from < 1 || c.to < c.from) && t.push(`事件 ${c.id} 的轮次区间无效`), c.kind !== "event" && c.kind !== "directive" && t.push(`事件 ${c.id} 的 kind 必须是 event 或 directive`), c.if !== void 0 && typeof c.if != "string" && t.push(`事件 ${c.id} 的 if 必须是文本`);
  }) : t.push("events 必须是数组"), Array.isArray(n.docs) ? n.docs.forEach((c, a) => {
    !c || typeof c.title != "string" ? t.push(`docs[${a}] 缺少 title`) : c.md !== void 0 && typeof c.md != "string" ? t.push(`docs[${a}].md 必须是文本`) : c.image !== void 0 && typeof c.image != "string" && t.push(`docs[${a}].image 必须是文本`);
  }) : t.push("docs 必须是数组"), t;
}
function Vi(e) {
  const t = Di.includes(e.level ?? "") ? e.level : "D";
  return {
    id: Sn,
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
function jA(e) {
  const t = new Set(_s.map((n) => n.id));
  return [..._s, ...e.filter((n) => !t.has(n.id))];
}
function qc(e, t) {
  return e.find((n) => n.detect.briefingName === t);
}
const Xc = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, ea = /<阶段切换>([\s\S]*?)<\/阶段切换>/, ta = /<副本结算>([\s\S]*?)<\/副本结算>/, na = /<副本>([\s\S]*?)<\/副本>/, Aa = /<角色登记>([\s\S]*?)<\/角色登记>/, sa = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/;
function En(e) {
  const t = Xc.exec(e ?? "");
  if (!t) return null;
  const n = { name: t[1] }, A = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), s = (o) => {
    const r = new RegExp(`${o}\\s*[：:]\\s*([^」』\\n]+)`).exec(A);
    return r ? r[1].trim() : void 0;
  }, i = s("等级");
  return i && (n.level = i.replace(/级$/, "").trim().toUpperCase()), n.goal = s("目标"), n.limit = s("时限"), n.players = s("人数"), n;
}
function ia(e) {
  const t = ea.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function Li(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const A = n.search(/[=＝]/);
    if (A < 0) continue;
    const s = n.slice(0, A).trim(), i = n.slice(A + 1).trim();
    s && (t[s] = i);
  }
  return t;
}
function Wi(e) {
  const t = ta.exec(e ?? "");
  if (!t) return null;
  const n = Li(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function Gi(e) {
  const t = Aa.exec(e ?? "");
  if (!t) return null;
  const n = Li(t[1]);
  return Object.keys(n).length ? n : null;
}
function oa(e) {
  const t = na.exec(e ?? "");
  if (!t) return null;
  const n = { tasks: [] };
  let A = null;
  for (const s of t[1].split(`
`)) {
    const i = s.trim();
    if (!i) continue;
    const o = /^(时限|进度条|任务|ps|PS|Ps)\s*[：:]\s*(.*)$/.exec(i);
    if (o) {
      const r = o[1].toLowerCase(), l = o[2].trim();
      r === "时限" ? (n.limit = l, A = null) : r === "进度条" ? (n.progressBar = l, A = null) : r === "任务" ? (l && n.tasks.push(l), A = "tasks") : (n.ps = l, A = "ps");
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
function ra(e) {
  const t = sa.exec(e ?? "");
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
function la(e, t, n, A) {
  if (!e.phases.length || !e.phases.some((r) => r.id === t.id)) return null;
  const s = (r) => !!r.clock && !r.night;
  let i = null, o = 0;
  switch (A) {
    case "日落":
    case "天黑":
    case "夜里":
      i = lA(e, t, s), o = i?.cap ?? 0;
      break;
    case "晚饭":
      i = lA(e, t, s), i && (o = Math.ceil(i.cap * 0.75), i.id === t.id && o <= n && (o = i.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      i = lA(e, t, (r) => !!r.night), o = i?.cap ?? 0;
      break;
  }
  return !i || i.id === t.id && o <= n + 1 ? null : { phase: i.id, round: o, label: `${i.name}第${o}轮` };
}
const ws = 5, ca = { id: "_open", name: "进行中", cap: 0, next: null };
function Et(e) {
  return !!e && !e.is_user && !e.is_system;
}
function aa(e) {
  const [t, n] = e.split(":").map((A) => parseInt(A, 10));
  return (t || 0) * 60 + (n || 0);
}
function Yi(e, t, n) {
  const A = aa(e) + Math.max(0, n - 1) * t, s = Math.floor(A / 60) % 24, i = (A % 60 + 60) % 60;
  return `${s % 12 === 0 ? 12 : s % 12}:${String(i).padStart(2, "0")}`;
}
function ks(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return Yi(e.time.dayStart, e.time.minutesPerRound, n);
}
function Hi(e) {
  return e.phases.length ? e.phases : [ca];
}
function ht(e, t) {
  return Hi(e).find((n) => n.id === t);
}
function zs(e, t, n) {
  const A = /* @__PURE__ */ new Set();
  let s = t;
  for (; s && !A.has(s.id); ) {
    if (s.id === n) return !0;
    A.add(s.id), s = ht(e, s.next);
  }
  return !1;
}
function Ss(e, t, n, A) {
  const s = n + 1, i = e.events.filter((o) => o.phase === t.id);
  if (A) {
    const o = t.id === A.phase ? A.round : t.cap;
    if (o > s) {
      let r = i.map((c, a) => ({ e: c, i: a })).filter(({ e: c }) => c.from >= s && c.from <= o).sort((c, a) => c.e.from - a.e.from || c.i - a.i).map(({ e: c }) => c), l = o;
      return r.length > ws && (l = r[ws - 1].from, r = r.filter((c) => c.from <= l)), { phase: t, round: l, events: r, skipFrom: s };
    }
  }
  return { phase: t, round: s, events: i.filter((o) => o.from === s) };
}
function ua(e, t) {
  const n = /* @__PURE__ */ new Set();
  let A = 0, s = t;
  for (; s && !n.has(s.id); )
    s.night && A++, n.add(s.id), s = ht(e, s.next);
  return A;
}
function fa(e, t, n) {
  if (e.time.type !== "countdown" || t.cap <= 0) return;
  let A = Math.max(0, t.cap - n);
  const s = /* @__PURE__ */ new Set([t.id]);
  let i = ht(e, t.next);
  for (; i && !s.has(i.id); )
    A += Math.max(0, i.cap), s.add(i.id), i = ht(e, i.next);
  return A * e.time.minutesPerRound;
}
function da(e, t, n) {
  const A = t.entryIndex;
  if (!Et(e[A])) return null;
  const s = Hi(n);
  let i = s[0], o = 0, r = !1, l, c = null, a, d, x;
  const m = /* @__PURE__ */ new Set(), M = {}, I = /* @__PURE__ */ new Map();
  for (const K of t.manual ?? [])
    I.has(K.atIndex) || I.set(K.atIndex, []), I.get(K.atIndex).push(K);
  const U = (K) => {
    i = K, o = 0, c && !zs(n, i, c.phase) && (c = null);
  };
  for (let K = A; K < e.length; K++) {
    const yt = e[K];
    if (!r && Et(yt)) {
      const Ae = Ss(n, i, o, c);
      o = Ae.round, Ae.events.forEach((He) => m.add(He.id)), M[K] = { phase: i.id, round: o, events: Ae.events.map((He) => He.id), skipFrom: Ae.skipFrom }, c && i.id === c.phase && o >= c.round && (c = null);
      const be = String(yt.mes ?? ""), tn = oa(be);
      tn && (d = tn);
      const nn = Gi(be);
      nn && (x = nn);
      const Mt = Wi(be);
      if (Mt)
        r = !0, l = "tag", a = Mt;
      else {
        const He = ia(be), It = He ? s.find((Ke) => Ke.name === He) : void 0;
        if (It && n.phases.length)
          U(It);
        else if (i.cap > 0 && o >= i.cap && i.next) {
          const Ke = ht(n, i.next);
          Ke && U(Ke);
        }
      }
    }
    for (const Ae of I.get(K) ?? []) {
      if (r) break;
      switch (Ae.kind) {
        case "skip": {
          c = ht(n, Ae.targetPhase) && zs(n, i, Ae.targetPhase) ? { phase: Ae.targetPhase, round: Ae.targetRound } : null;
          break;
        }
        case "setPhase": {
          const be = ht(n, Ae.phase);
          be && (c = null, U(be));
          break;
        }
        case "setRound":
          o = Math.max(0, Math.floor(Ae.round)), c = null;
          break;
        case "end":
          r = !0, l = "manual";
          break;
      }
    }
  }
  const H = r ? null : Ss(n, i, o, c), j = H ? H.round : o + 1, V = i.cap > 0, R = n.events.filter((K) => m.has(K.id)).map((K) => K.id);
  let ee, pe;
  const ue = n.remaining;
  if (!r && ue.type === "nights" && n.phases.length && !i.byTag && !i.frozen)
    ee = pe = ue.template.replace("{n}", String(ua(n, i)));
  else if (!r && ue.type === "countdown" && n.phases.length) {
    const K = (yt) => {
      const Ae = fa(n, i, yt);
      return Ae === void 0 ? void 0 : ue.template.replace("{m}", String(Ae));
    };
    ee = K(j), pe = K(o);
  }
  return {
    phase: i,
    round: o,
    nextRound: j,
    clock: r ? void 0 : ks(n, i, j),
    currentClock: ks(n, i, o),
    remainingText: ee,
    currentRemainingText: pe,
    ended: r,
    endedBy: l,
    firedEvents: R,
    warn: !r && V && j >= i.cap - 2,
    isLastRound: !r && V && j === i.cap,
    overdue: !r && V && !i.next && j > i.cap,
    next: H,
    skipGoal: c,
    settlement: a,
    panel: d,
    rolesFromChat: x,
    perMessage: M,
    entryIndex: A
  };
}
const Ki = "rlzc_token", Zi = "rlzc_progress", Ui = "rlzc_turn", pa = [Ki, Zi, Ui], Wn = { token: "", progress: "", turn: "", injected: [] };
function ha(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Es(e, t, n) {
  const A = t.roles ?? [];
  if (!A.length) return e;
  const s = new RegExp(`(?<!\\{)\\{(${A.map(ha).join("|")})\\}(?!\\})`, "g");
  return e.replace(s, (i, o) => n?.[o]?.trim() || o);
}
function ma(e, t) {
  if (!t.length) return "";
  const n = e.events.map((l) => l.id), A = t.map((l) => n.indexOf(l)).filter((l) => l >= 0).sort((l, c) => l - c), s = [];
  let i = A[0], o = A[0];
  const r = () => s.push(i === o ? n[i] : `${n[i]}–${n[o]}`);
  for (let l = 1; l < A.length; l++) {
    if (A[l] === o + 1) {
      o = A[l];
      continue;
    }
    r(), i = o = A[l];
  }
  return r(), s.join("、");
}
function $s(e, t, n) {
  let A = Es(e.text, t, n);
  return e.to > e.from && (A = `在本阶段第${e.from}到${e.to}轮之间发生：${A}`), e.if && (A += `（条件：${Es(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${A}`;
}
function ga(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function xa(e, t, n, A = {}) {
  if (!t || !n || t.ended || n.status !== "active") return Wn;
  const s = A.roles, i = e.phases.length > 0, o = t.next, r = [`副本：${e.name}（${e.level}级）`];
  if (i ? (r.push(`阶段：${t.phase.name}`), r.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`)) : r.push(`本轮：第${t.nextRound}轮`), t.clock && r.push(`钟时：${t.clock}`), t.remainingText) r.push(t.remainingText);
  else {
    const m = A.panelLimit || A.briefing?.limit;
    m && r.push(`时限：${m}`);
  }
  const l = ["［副本进度·仅供AI］", r.join("　")];
  if (!i && A.briefing?.goal && l.push(`目标：${A.briefing.goal}`), e.roles?.length) {
    const m = e.roles.filter((M) => s?.[M]);
    l.push(
      m.length ? `角色登记：${e.roles.map((M) => `${M}=${s?.[M] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const c = ma(e, t.firedEvents);
  c && l.push(`已发生事件：${c}`);
  const a = [];
  o.skipFrom !== void 0 && a.push(`玩家选择快进：本轮从「${t.phase.name}」第${o.skipFrom}轮快进到第${o.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const d = o.events.filter((m) => m.kind === "event"), x = o.events.filter((m) => m.kind === "directive");
  if (d.length && (a.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), d.forEach((m) => a.push($s(m, e, s)))), x.length && (a.push("本轮写作要求："), x.forEach((m) => a.push($s(m, e, s)))), t.isLastRound ? a.push(ga(t)) : t.overdue && a.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), e.roles?.length && !e.roles.some((m) => s?.[m])) {
    let m = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((M) => `${M}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (m += "死者不得是{{user}}或其同伴。"), a.push(m);
  }
  return {
    token: e.token,
    progress: l.join(`
`),
    turn: a.length ? ["［本轮指令·仅供AI］", ...a].join(`
`) : "",
    injected: o.events.map((m) => m.id)
  };
}
const yA = "rlzc", Ji = "rlzc_memo";
function ba() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function ya(e, t, n) {
  return {
    id: ba(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function va(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function _a(e, t) {
  return e.packId === Sn ? e.briefing ? Vi(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function wa(e, t) {
  const n = (A) => !!A && !A.is_user && A.extra?.rlzc?.entry === t.id;
  if (!t.id) {
    const A = e[t.entryIndex];
    return A && !A.is_user && !A.is_system ? t.entryIndex : -1;
  }
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let A = e.length - 1; A >= 0; A--) if (n(e[A])) return A;
  return -1;
}
function ka(e, t) {
  const n = wa(e, t);
  if (n < 0) return !1;
  const A = n - t.entryIndex;
  return A !== 0 && (t.entryIndex = n, t.manual = t.manual.map((s) => ({ ...s, atIndex: s.atIndex + A }))), t.manual = t.manual.filter((s) => s.atIndex < e.length && s.atIndex >= t.entryIndex), !0;
}
function Qi(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const za = 1, Sa = 0;
function xe() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function Ea() {
  const e = xe();
  return e.eventTypes ?? e.event_types ?? {};
}
function Ze(e, t) {
  const n = Ea()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  xe().eventSource.on(n, t);
}
function we() {
  return xe().chat ?? [];
}
function DA() {
  const e = xe();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function Gn() {
  return xe().chatMetadata ?? {};
}
function Yn() {
  const e = xe();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function hn(e, t, n, A) {
  xe().setExtensionPrompt(e, t, za, n, A, Sa);
}
function st(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Ye(e) {
  const t = xe();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
const qi = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"], $a = new RegExp(`<(${qi.join("|")})>[\\s\\S]*?<\\/\\1>`, "g"), Ca = new RegExp(`<(${qi.join("|")})>`);
function Ma(e) {
  return e.replace($a, "").replace(/\n{3,}/g, `

`).trim();
}
function mn(e) {
  const t = we()[e];
  if (!t || t.is_user) return;
  const n = String(t.extra?.display_text ?? t.mes ?? "");
  if (!Ca.test(n)) return;
  const A = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!A) return;
  const s = xe().messageFormatting;
  if (typeof s != "function") return;
  const i = s(Ma(n), t.name ?? "", !!t.is_system, !1, e);
  A.innerHTML !== i && (A.innerHTML = i);
}
function Xi() {
  document.querySelectorAll("#chat .mes[mesid]").forEach((e) => {
    const t = Number(e.getAttribute("mesid"));
    Number.isFinite(t) && mn(t);
  });
}
const vA = "rlzc", gn = {
  depths: { token: 4, progress: 4, turn: 0 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: []
}, g = /* @__PURE__ */ On({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  memo: "",
  settings: structuredClone(gn),
  packs: [],
  lastInjection: Wn,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0
});
function eo(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ia(...e) {
  g.settings.debug && console.log("[rlzc]", ...e);
}
function Ta() {
  const e = xe().extensionSettings, t = e[vA] ?? {}, n = {
    ...structuredClone(gn),
    ...t,
    depths: { ...gn.depths, ...t.depths ?? {} },
    ball: { ...gn.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((A) => Bi(A).length === 0) : []
  };
  e[vA] = n, g.settings = n, g.packs = jA(n.customPacks);
}
function qt() {
  xe().extensionSettings[vA] = JSON.parse(JSON.stringify(g.settings)), xe().saveSettingsDebounced(), g.packs = jA(g.settings.customPacks);
}
function Pa(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = Bi(t);
  if (n.length) return n;
  const A = t;
  return jA([]).some((s) => s.id === A.id) ? [`id「${A.id}」与内置副本包重复`] : (g.settings.customPacks = [...g.settings.customPacks.filter((s) => s.id !== A.id), A], qt(), []);
}
function Ra(e) {
  g.settings.customPacks = g.settings.customPacks.filter((t) => t.id !== e), qt();
}
function $t() {
  return va(Gn()[yA]);
}
function gt(e) {
  const t = Gn();
  e ? t[yA] = JSON.parse(JSON.stringify(e)) : delete t[yA], Yn();
}
function BA(e) {
  const t = $t();
  t && (e(t), gt(t), Ct());
}
function Fa(e) {
  const t = we();
  return (e === "swipe" || e === "continue") && Et(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function $n(e, t) {
  if (!t) return { session: null, pack: null, progress: null };
  const n = _a(t, g.packs);
  return n ? { session: t, pack: n, progress: da(e, t, n) } : { session: t, pack: null, progress: null };
}
function Ct() {
  const e = we();
  let t = $t();
  if (t) {
    const A = JSON.stringify(t);
    if (!ka(e, t))
      gt(null), st("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const s = $n(e, t);
      s.progress && (t.status = s.progress.ended ? "ended" : "active"), JSON.stringify(t) !== A && gt(t);
    }
  }
  const n = $n(e, t);
  g.session = n.session, g.pack = n.pack, g.progress = n.progress, g.tick++;
}
function Na() {
  if (g.session)
    return Qi(g.session, g.progress?.rolesFromChat);
}
function Cn() {
  for (const e of pa) hn(e, "", 0, !1);
}
let VA = -1;
function Oa(e) {
  const t = Fa(e), n = $t(), { pack: A, progress: s } = $n(t, n), i = n ? Qi(n, s?.rolesFromChat) : void 0, o = A ? xa(A, s, n, { roles: i, briefing: n?.briefing, panelLimit: s?.panel?.limit }) : Wn;
  Cn();
  const r = g.settings.depths;
  o.token && hn(Ki, o.token, r.token, !0), o.progress && hn(Zi, o.progress, r.progress, !1), o.turn && hn(Ui, o.turn, r.turn, !1), g.lastInjection = o, VA = t.length, Ia("注入", e, o);
}
const _A = /* @__PURE__ */ new Set();
async function ja() {
  const e = we(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const A = ra(n.mes);
  if (!A) return;
  const s = $t();
  if (!s || s.status !== "active" || s.manual.some((c) => c.kind === "skip" && c.atIndex === t)) return;
  const i = `${DA()}:${t}:${n.mes}`;
  if (_A.has(i)) return;
  _A.add(i);
  const { pack: o, progress: r } = $n(e, s);
  if (!o || !r || r.ended) return;
  const l = la(o, r.phase, r.round, A);
  l && await Ye(`是否跳到${A}？（${l.label}）`) && (s.manual.push({ kind: "skip", atIndex: t, targetPhase: l.phase, targetRound: l.round }), gt(s));
}
async function Da(e, t, n, A) {
  try {
    if (A === "quiet" || A === "impersonate") {
      Cn();
      return;
    }
    A !== "continue" && A !== "swipe" && A !== "regenerate" && await ja(), Oa(A);
  } catch (s) {
    console.error("[rlzc] 拦截器出错", s), Cn();
  }
}
const Cs = /* @__PURE__ */ new Set();
async function Ba(e) {
  const n = we()[e], A = En(n?.mes ?? "");
  if (!A) return;
  const s = `${DA()}:${e}:${A.name}`;
  if (Cs.has(s)) return;
  Cs.add(s);
  const i = qc(g.packs, A.name), o = i ? `检测到进入《${i.name}》，是否启用？` : `检测到进入《${A.name}》，是否启用？（未收录的副本，将使用通用副本包）`;
  if (!await Ye(o)) return;
  const r = we()[e];
  if (!Et(r) || En(r.mes)?.name !== A.name) {
    st("warning", "简报消息已变化，未启用。");
    return;
  }
  to(i ?? Vi(A), e, A);
}
function to(e, t, n) {
  const s = we()[t], i = ya(e, t, n);
  s.extra = s.extra ?? {}, s.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: i.id }, gt(i), Ct(), g.progress && (s.extra.rlzc.injected = eo(g.progress.perMessage[t]?.events ?? [])), Yn(), st("success", `已进入副本《${e.name}》。`);
}
async function Va(e) {
  const t = g.packs.find((i) => i.id === e);
  if (!t) return;
  const n = we();
  let A = n.length - 1;
  for (; A >= 0 && !Et(n[A]); ) A--;
  if (A < 0) {
    st("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  $t()?.status === "active" && !await Ye("当前已有进行中的副本，确定要替换吗？") || await Ye(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`) && to(t, A, En(n[A].mes) ?? { name: t.name });
}
function Hn(e) {
  BA((t) => t.manual.push(e));
}
function Kn() {
  return we().length - 1;
}
async function Ms() {
  const e = g.progress;
  if (!(!e || e.ended || !g.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      st("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Ye(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (Hn({ kind: "skip", atIndex: Kn(), targetPhase: e.phase.id, targetRound: e.phase.cap }), st("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function Is() {
  !g.session || g.progress?.ended || await Ye("确定要手动结束当前副本吗？") && Hn({ kind: "end", atIndex: Kn() });
}
function La(e) {
  Hn({ kind: "setPhase", atIndex: Kn(), phase: e });
}
function Wa(e) {
  Hn({ kind: "setRound", atIndex: Kn(), round: e });
}
function Ga(e) {
  BA((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function Ya(e) {
  BA((t) => t.manual.splice(e, 1));
}
async function Ts() {
  g.session && await Ye("确定要删除当前副本会话吗？（不会改动聊天记录）") && (gt(null), Ct());
}
function Ps(e) {
  g.memo = e, Gn()[Ji] = e, Yn();
}
function Ha(e) {
  const n = we()[e];
  if (!Et(n)) return;
  const A = $t();
  if ((!A || A.status === "ended") && En(n.mes)) {
    Ba(e);
    return;
  }
  if (!A) return;
  const s = Gi(n.mes);
  s && (A.roles = { ...A.roles ?? {}, ...s }), gt(A), Ct();
  const i = g.progress?.perMessage[e];
  if (i && g.pack) {
    const r = g.pack.phases.find((d) => d.id === i.phase), l = {
      phase: r?.name ?? i.phase,
      round: i.round,
      injected: VA === e ? g.lastInjection.injected : i.events
    }, c = g.pack.time;
    c.type === "clock" && r?.clock && !r.night && !r.frozen && (l.clock = Yi(c.dayStart, c.minutesPerRound, i.round));
    const a = n.extra?.rlzc?.entry;
    a && (l.entry = a), n.extra = n.extra ?? {}, n.extra.rlzc = eo(l), Yn();
  }
  const o = Wi(n.mes);
  o && st("info", `副本结算：${o.result ?? "—"}${o.rating ? `，评价 ${o.rating}` : ""}`);
}
function Rs() {
  _A.clear(), VA = -1, g.chatId = DA(), g.debugUnlocked = !1, g.lastInjection = Wn, Cn();
  const e = Gn()[Ji];
  g.memo = typeof e == "string" ? e : "", Ct(), setTimeout(Xi, 50);
}
function un() {
  Ct();
}
const Ka = { class: "rlzc-ball-mark" }, cA = 44, Za = /* @__PURE__ */ it({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ Fe({ x: 0, y: 0 });
    let n = null;
    function A(a, d) {
      const x = window.innerWidth - cA - 4, m = window.innerHeight - cA - 4;
      return { x: Math.min(Math.max(4, a), x), y: Math.min(Math.max(4, d), m) };
    }
    function s() {
      const a = g.settings.ball;
      t.value = A(a.x ?? window.innerWidth - cA - 12, a.y ?? Math.round(window.innerHeight * 0.35));
    }
    function i(a) {
      a.currentTarget.setPointerCapture(a.pointerId), n = { id: a.pointerId, dx: a.clientX - t.value.x, dy: a.clientY - t.value.y, moved: !1, sx: a.clientX, sy: a.clientY };
    }
    function o(a) {
      !n || n.id !== a.pointerId || (Math.abs(a.clientX - n.sx) + Math.abs(a.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = A(a.clientX - n.dx, a.clientY - n.dy)));
    }
    function r(a) {
      if (!n || n.id !== a.pointerId) return;
      const d = n.moved;
      n = null, d ? (g.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, qt()) : g.panelOpen = !g.panelOpen;
    }
    const l = oe(() => !!g.session && !g.progress?.ended), c = oe(() => !!g.progress?.warn);
    return or(() => {
      s(), window.addEventListener("resize", s);
    }), xi(() => window.removeEventListener("resize", s)), (a, d) => (E(), $("button", {
      class: bt(["rlzc-ball", { "is-active": l.value, "is-warn": c.value }]),
      style: Fn({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: i,
      onPointermove: o,
      onPointerup: r,
      onPointercancel: r
    }, [
      h("span", Ka, N(l.value ? P(g).pack?.level ?? "副" : "廊"), 1)
    ], 38));
  }
}), Ua = { class: "rlzc-system" }, Ja = { class: "rlzc-card rlzc-hero" }, Qa = { class: "rlzc-hero-top" }, qa = { class: "rlzc-level" }, Xa = {
  key: 0,
  class: "rlzc-chip"
}, eu = {
  key: 0,
  class: "rlzc-goal"
}, tu = { class: "rlzc-grid" }, nu = {
  key: 0,
  class: "rlzc-stat"
}, Au = {
  key: 1,
  class: "rlzc-stat"
}, su = { class: "rlzc-stat" }, iu = {
  key: 0,
  class: "rlzc-note"
}, ou = {
  key: 1,
  class: "rlzc-card"
}, ru = { class: "rlzc-kv" }, lu = { class: "rlzc-kv" }, cu = {
  key: 2,
  class: "rlzc-note"
}, au = {
  key: 3,
  class: "rlzc-card"
}, uu = {
  key: 0,
  class: "rlzc-kv"
}, fu = { class: "rlzc-mono" }, du = {
  key: 1,
  class: "rlzc-tasks"
}, pu = {
  key: 2,
  class: "rlzc-ps"
}, hu = { class: "rlzc-actions" }, mu = ["disabled"], gu = ["disabled"], xu = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, bu = { class: "rlzc-card" }, yu = { class: "rlzc-row" }, vu = ["value"], _u = ["disabled"], wu = /* @__PURE__ */ it({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ Fe(""), n = oe(() => !!g.session && !!g.pack), A = oe(() => g.progress), s = oe(() => !!g.pack?.phases.length), i = oe(() => {
      const c = A.value;
      return c ? s.value ? `${c.warn ? "⚠️ " : ""}${c.round}/${c.phase.cap}` : `第${c.round}轮` : "";
    }), o = oe(() => {
      const c = A.value;
      return c ? g.pack?.remaining.type !== "fromPanel" && c.currentRemainingText ? c.currentRemainingText : c.panel?.limit || g.session?.briefing?.limit || "—" : "";
    }), r = oe(() => {
      const c = A.value;
      return !!c && !c.ended && s.value && c.phase.cap > 0 && c.nextRound < c.phase.cap;
    });
    async function l() {
      t.value && (await Va(t.value), t.value = "");
    }
    return (c, a) => (E(), $("div", Ua, [
      n.value && A.value ? (E(), $(Q, { key: 0 }, [
        h("div", Ja, [
          h("div", Qa, [
            h("span", qa, N(P(g).pack.level), 1),
            h("h3", null, N(P(g).pack.name), 1),
            A.value.ended ? (E(), $("span", Xa, "已结束")) : X("", !0)
          ]),
          P(g).session?.briefing?.goal ? (E(), $("p", eu, "目标：" + N(P(g).session.briefing.goal), 1)) : X("", !0)
        ]),
        h("div", tu, [
          s.value ? (E(), $("div", nu, [
            a[3] || (a[3] = h("span", null, "阶段", -1)),
            h("b", null, N(A.value.phase.name), 1)
          ])) : X("", !0),
          h("div", {
            class: bt(["rlzc-stat", { warn: A.value.warn }])
          }, [
            a[4] || (a[4] = h("span", null, "轮次", -1)),
            h("b", null, N(i.value), 1)
          ], 2),
          A.value.currentClock ? (E(), $("div", Au, [
            a[5] || (a[5] = h("span", null, "钟时", -1)),
            h("b", null, N(A.value.currentClock), 1)
          ])) : X("", !0),
          h("div", su, [
            a[6] || (a[6] = h("span", null, "剩余时间", -1)),
            h("b", null, N(o.value), 1)
          ])
        ]),
        A.value.skipGoal ? (E(), $("div", iu, "快进中：目标 " + N(P(g).pack.phases.find((d) => d.id === A.value.skipGoal.phase)?.name) + " 第" + N(A.value.skipGoal.round) + "轮", 1)) : X("", !0),
        A.value.ended && A.value.settlement ? (E(), $("div", ou, [
          h("div", ru, [
            a[7] || (a[7] = h("span", null, "结果", -1)),
            h("b", null, N(A.value.settlement.result ?? "—"), 1)
          ]),
          h("div", lu, [
            a[8] || (a[8] = h("span", null, "评价", -1)),
            h("b", null, N(A.value.settlement.rating ?? "—"), 1)
          ])
        ])) : A.value.ended ? (E(), $("div", cu, "副本已手动结束。")) : X("", !0),
        A.value.panel ? (E(), $("div", au, [
          A.value.panel.progressBar ? (E(), $("div", uu, [
            a[9] || (a[9] = h("span", null, "进度", -1)),
            h("b", fu, N(A.value.panel.progressBar), 1)
          ])) : X("", !0),
          A.value.panel.tasks.length ? (E(), $("div", du, [
            a[10] || (a[10] = h("span", null, "任务", -1)),
            h("ul", null, [
              (E(!0), $(Q, null, ye(A.value.panel.tasks, (d, x) => (E(), $("li", { key: x }, N(d), 1))), 128))
            ])
          ])) : X("", !0),
          A.value.panel.ps ? (E(), $("div", pu, "ps：" + N(A.value.panel.ps), 1)) : X("", !0)
        ])) : X("", !0),
        h("div", hu, [
          h("button", {
            class: "rlzc-btn",
            disabled: !r.value,
            onClick: a[0] || (a[0] = //@ts-ignore
            (...d) => P(Ms) && P(Ms)(...d))
          }, "跳过（到本阶段结束）", 8, mu),
          h("button", {
            class: "rlzc-btn ghost",
            disabled: A.value.ended,
            onClick: a[1] || (a[1] = //@ts-ignore
            (...d) => P(Is) && P(Is)(...d))
          }, "手动结束副本", 8, gu)
        ])
      ], 64)) : (E(), $("div", xu, [...a[11] || (a[11] = [
        h("h3", null, "休整中", -1),
        h("p", null, "当前在回廊里，没有进行中的副本，也不会注入任何提示词。", -1)
      ])])),
      h("div", bu, [
        a[13] || (a[13] = h("label", { class: "rlzc-label" }, "手动选择副本（以最新一条AI回复为第1轮）", -1)),
        h("div", yu, [
          kt(h("select", {
            "onUpdate:modelValue": a[2] || (a[2] = (d) => t.value = d),
            class: "rlzc-input"
          }, [
            a[12] || (a[12] = h("option", { value: "" }, "选择副本…", -1)),
            (E(!0), $(Q, null, ye(P(g).packs, (d) => (E(), $("option", {
              key: d.id,
              value: d.id
            }, N(d.level) + "｜" + N(d.name), 9, vu))), 128))
          ], 512), [
            [OA, t.value]
          ]),
          h("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: l
          }, "进入", 8, _u)
        ])
      ])
    ]));
  }
});
function ku(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Ot(e) {
  return ku(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function zu(e) {
  const t = [];
  let n = null, A = [];
  const s = () => {
    A.length && t.push(`<p>${A.map(Ot).join("<br>")}</p>`), A = [];
  }, i = () => {
    n && t.push(`</li></${n}>`), n = null;
  };
  for (const o of e.replace(/\r/g, "").split(`
`)) {
    const r = o.trimEnd();
    if (!r.trim()) {
      s(), i();
      continue;
    }
    const l = /^(#{1,4})\s+(.*)$/.exec(r);
    if (l) {
      s(), i();
      const x = Math.min(l[1].length + 2, 6);
      t.push(`<h${x}>${Ot(l[2])}</h${x}>`);
      continue;
    }
    const c = /^\s*[-*]\s+(.*)$/.exec(r), a = /^\s*(\d+)[.、]\s+(.*)$/.exec(r);
    if (c || a) {
      s();
      const x = c ? "ul" : "ol", m = c ? c[1] : a[2];
      n !== x ? (i(), n = x, t.push(x === "ol" ? `<ol start="${a[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(Ot(m));
      continue;
    }
    if (n && /^\s{2,}/.test(o)) {
      t.push(`<br>${Ot(r.trim())}`);
      continue;
    }
    const d = /^>\s?(.*)$/.exec(r);
    if (d) {
      s(), i(), t.push(`<blockquote>${Ot(d[1])}</blockquote>`);
      continue;
    }
    i(), A.push(r);
  }
  return s(), i(), t.join("");
}
const Su = { class: "rlzc-docs" }, Eu = {
  key: 0,
  class: "rlzc-row"
}, $u = ["value"], Cu = { class: "rlzc-subtabs" }, Mu = ["onClick"], Iu = { class: "rlzc-md" }, Tu = ["innerHTML"], Pu = ["src", "alt"], Ru = {
  key: 2,
  class: "rlzc-note"
}, Fu = {
  key: 2,
  class: "rlzc-note"
}, Nu = /* @__PURE__ */ it({
  __name: "DocsTab",
  setup(e) {
    const t = oe(() => !!g.session && !!g.pack), n = oe(() => t.value ? [g.pack] : g.packs.filter((c) => c.docs?.length)), A = /* @__PURE__ */ Fe(""), s = /* @__PURE__ */ Fe(0);
    Zt(
      n,
      (c) => {
        c.some((a) => a.id === A.value) || (A.value = c[0]?.id ?? "");
      },
      { immediate: !0 }
    ), Zt(A, () => s.value = 0);
    const i = oe(() => n.value.find((c) => c.id === A.value)), o = oe(() => i.value?.docs?.[s.value]), r = oe(() => o.value?.md ? zu(o.value.md) : ""), l = oe(() => i.value && o.value?.image ? Qc(i.value, o.value.image) : null);
    return (c, a) => (E(), $("div", Su, [
      !t.value && n.value.length > 1 ? (E(), $("div", Eu, [
        kt(h("select", {
          "onUpdate:modelValue": a[0] || (a[0] = (d) => A.value = d),
          class: "rlzc-input"
        }, [
          (E(!0), $(Q, null, ye(n.value, (d) => (E(), $("option", {
            key: d.id,
            value: d.id
          }, N(d.name), 9, $u))), 128))
        ], 512), [
          [OA, A.value]
        ])
      ])) : X("", !0),
      i.value && i.value.docs?.length ? (E(), $(Q, { key: 1 }, [
        h("div", Cu, [
          (E(!0), $(Q, null, ye(i.value.docs, (d, x) => (E(), $("button", {
            key: x,
            class: bt({ on: s.value === x }),
            onClick: (m) => s.value = x
          }, N(d.title), 11, Mu))), 128))
        ]),
        h("article", Iu, [
          r.value ? (E(), $("div", {
            key: 0,
            innerHTML: r.value
          }, null, 8, Tu)) : X("", !0),
          l.value ? (E(), $("img", {
            key: 1,
            src: l.value,
            alt: o.value?.title,
            class: "rlzc-img"
          }, null, 8, Pu)) : o.value?.image && !l.value ? (E(), $("p", Ru, "图片无法加载：" + N(o.value.image), 1)) : X("", !0)
        ])
      ], 64)) : (E(), $("p", Fu, N(t.value ? "本副本没有公开资料" : "暂无可浏览的副本资料。"), 1))
    ]));
  }
}), Ou = { class: "rlzc-memo" }, ju = { class: "rlzc-hint" }, Du = /* @__PURE__ */ it({
  __name: "MemoTab",
  setup(e) {
    const t = /* @__PURE__ */ Fe(g.memo), n = /* @__PURE__ */ Fe(!0);
    let A;
    Zt(() => g.memo, (i) => {
      i !== t.value && (t.value = i);
    }), Zt(() => g.chatId, () => {
      clearTimeout(A), n.value = !0, t.value = g.memo;
    }), xi(() => {
      clearTimeout(A), n.value || Ps(t.value);
    });
    function s() {
      n.value = !1, clearTimeout(A), A = setTimeout(() => {
        Ps(t.value), n.value = !0;
      }, 600);
    }
    return (i, o) => (E(), $("div", Ou, [
      kt(h("textarea", {
        "onUpdate:modelValue": o[0] || (o[0] = (r) => t.value = r),
        class: "rlzc-input rlzc-textarea",
        placeholder: "记点什么……（按聊天保存，不会发给AI）",
        onInput: s
      }, null, 544), [
        [bA, t.value]
      ]),
      h("div", ju, N(n.value ? "已自动保存" : "保存中…"), 1)
    ]));
  }
}), Bu = { class: "rlzc-settings" }, Vu = { class: "rlzc-card" }, Lu = { class: "rlzc-field" }, Wu = ["value"], Gu = { class: "rlzc-field" }, Yu = ["value"], Hu = { class: "rlzc-field" }, Ku = ["value"], Zu = { class: "rlzc-card" }, Uu = {
  key: 0,
  class: "rlzc-list"
}, Ju = ["onClick"], Qu = {
  key: 1,
  class: "rlzc-hint"
}, qu = {
  key: 2,
  class: "rlzc-errors"
}, Xu = { class: "rlzc-card" }, ef = { class: "rlzc-check" }, tf = ["checked"], nf = { class: "rlzc-check" }, Af = ["checked"], sf = /* @__PURE__ */ it({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ Fe([]), n = /* @__PURE__ */ Fe(null);
    function A(r, l) {
      const c = Math.max(0, Math.min(1e4, Math.floor(Number(l.target.value) || 0)));
      g.settings.depths[r] = c, qt();
    }
    async function s(r) {
      const l = r.target, c = l.files?.[0];
      l.value = "", c && (t.value = Pa(await c.text()), t.value.length || st("success", `已导入副本包：${c.name}`));
    }
    async function i(r, l) {
      await Ye(`确定删除自定义副本包《${l}》吗？`) && Ra(r);
    }
    function o(r, l) {
      g.settings[r] = l.target.checked, qt();
    }
    return (r, l) => (E(), $("div", Bu, [
      h("div", Vu, [
        l[9] || (l[9] = h("h4", null, "注入深度", -1)),
        h("label", Lu, [
          l[6] || (l[6] = h("span", null, "暗号 rlzc_token", -1)),
          h("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: P(g).settings.depths.token,
            onChange: l[0] || (l[0] = (c) => A("token", c))
          }, null, 40, Wu)
        ]),
        h("label", Gu, [
          l[7] || (l[7] = h("span", null, "进度 rlzc_progress", -1)),
          h("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: P(g).settings.depths.progress,
            onChange: l[1] || (l[1] = (c) => A("progress", c))
          }, null, 40, Yu)
        ]),
        h("label", Hu, [
          l[8] || (l[8] = h("span", null, "本轮 rlzc_turn", -1)),
          h("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: P(g).settings.depths.turn,
            onChange: l[2] || (l[2] = (c) => A("turn", c))
          }, null, 40, Ku)
        ])
      ]),
      h("div", Zu, [
        l[10] || (l[10] = h("h4", null, "自定义副本包", -1)),
        P(g).settings.customPacks.length ? (E(), $("ul", Uu, [
          (E(!0), $(Q, null, ye(P(g).settings.customPacks, (c) => (E(), $("li", {
            key: c.id
          }, [
            h("span", null, [
              pn(N(c.level) + "｜" + N(c.name) + " ", 1),
              h("small", null, "v" + N(c.version), 1)
            ]),
            h("button", {
              class: "rlzc-btn ghost small",
              onClick: (a) => i(c.id, c.name)
            }, "删除", 8, Ju)
          ]))), 128))
        ])) : (E(), $("p", Qu, "还没有导入自定义副本包。")),
        h("input", {
          ref_key: "fileInput",
          ref: n,
          type: "file",
          accept: ".json,application/json",
          hidden: "",
          onChange: s
        }, null, 544),
        h("button", {
          class: "rlzc-btn",
          onClick: l[3] || (l[3] = (c) => n.value?.click())
        }, "导入 JSON…"),
        t.value.length ? (E(), $("ul", qu, [
          (E(!0), $(Q, null, ye(t.value, (c, a) => (E(), $("li", { key: a }, N(c), 1))), 128))
        ])) : X("", !0)
      ]),
      h("div", Xu, [
        l[13] || (l[13] = h("h4", null, "其他", -1)),
        h("label", ef, [
          h("input", {
            type: "checkbox",
            checked: P(g).settings.showBall,
            onChange: l[4] || (l[4] = (c) => o("showBall", c))
          }, null, 40, tf),
          l[11] || (l[11] = pn("显示悬浮球（关闭后可从扩展菜单打开面板）", -1))
        ]),
        h("label", nf, [
          h("input", {
            type: "checkbox",
            checked: P(g).settings.debug,
            onChange: l[5] || (l[5] = (c) => o("debug", c))
          }, null, 40, Af),
          l[12] || (l[12] = pn("调试模式（调试页允许手动修改，并在控制台输出日志）", -1))
        ])
      ])
    ]));
  }
}), of = { class: "rlzc-debug" }, rf = {
  key: 0,
  class: "rlzc-note"
}, lf = {
  key: 0,
  class: "rlzc-note"
}, cf = {
  key: 1,
  class: "rlzc-note"
}, af = {
  key: 2,
  class: "rlzc-card"
}, uf = { class: "rlzc-row" }, ff = ["disabled"], df = ["value"], pf = ["disabled"], hf = { class: "rlzc-row" }, mf = ["disabled"], gf = ["disabled"], xf = {
  key: 3,
  class: "rlzc-card"
}, bf = ["onUpdate:modelValue", "disabled"], yf = ["disabled"], vf = { class: "rlzc-card" }, _f = {
  key: 0,
  class: "rlzc-list"
}, wf = ["disabled", "onClick"], kf = {
  key: 1,
  class: "rlzc-hint"
}, zf = {
  class: "rlzc-card",
  open: ""
}, Sf = { class: "rlzc-pre" }, Ef = { class: "rlzc-card" }, $f = { class: "rlzc-pre" }, Cf = { class: "rlzc-card" }, Mf = { class: "rlzc-pre" }, If = { class: "rlzc-card" }, Tf = { class: "rlzc-table" }, Pf = ["disabled"], Rf = /* @__PURE__ */ it({
  __name: "DebugTab",
  setup(e) {
    const t = oe(() => g.settings.debug), n = /* @__PURE__ */ Fe(""), A = /* @__PURE__ */ Fe(null), s = /* @__PURE__ */ On({});
    Zt(
      () => [g.tick, g.pack?.id],
      () => {
        for (const x of Object.keys(s)) delete s[x];
        const d = Na() ?? {};
        for (const x of g.pack?.roles ?? []) s[x] = d[x] ?? "";
      },
      { immediate: !0 }
    );
    const i = oe(() => {
      g.tick;
      const d = we(), x = [], m = g.session?.entryIndex ?? 0;
      for (let M = m; M < d.length; M++) {
        const I = d[M]?.extra?.rlzc;
        I && x.push({ index: M, snap: I });
      }
      return x.reverse().slice(0, 60);
    }), o = oe(() => {
      const d = g.progress;
      if (!d) return null;
      const { perMessage: x, phase: m, next: M, ...I } = d;
      return {
        phase: m.id + " " + m.name,
        ...I,
        next: M ? { round: M.round, skipFrom: M.skipFrom, events: M.events.map((U) => U.id) } : null,
        messages: Object.keys(x).length
      };
    });
    function r() {
      n.value && La(n.value);
    }
    function l() {
      A.value !== null && A.value >= 0 && Wa(A.value);
    }
    function c() {
      Ga({ ...s });
    }
    const a = (d) => JSON.stringify(d, null, 2);
    return (d, x) => (E(), $("div", of, [
      P(g).session ? (E(), $(Q, { key: 1 }, [
        t.value ? X("", !0) : (E(), $("p", lf, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        P(g).pack && P(g).session.packVersion !== P(g).pack.version ? (E(), $("p", cf, " 入场时副本包版本为 " + N(P(g).session.packVersion) + "，当前为 " + N(P(g).pack.version) + "。 ", 1)) : X("", !0),
        P(g).pack?.phases.length ? (E(), $("div", af, [
          x[4] || (x[4] = h("h4", null, "手动修正", -1)),
          h("div", uf, [
            kt(h("select", {
              "onUpdate:modelValue": x[0] || (x[0] = (m) => n.value = m),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              x[3] || (x[3] = h("option", { value: "" }, "切换到阶段…", -1)),
              (E(!0), $(Q, null, ye(P(g).pack.phases, (m) => (E(), $("option", {
                key: m.id,
                value: m.id
              }, N(m.name), 9, df))), 128))
            ], 8, ff), [
              [OA, n.value]
            ]),
            h("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: r
            }, "切换", 8, pf)
          ]),
          h("div", hf, [
            kt(h("input", {
              "onUpdate:modelValue": x[1] || (x[1] = (m) => A.value = m),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, mf), [
              [
                bA,
                A.value,
                void 0,
                { number: !0 }
              ]
            ]),
            h("button", {
              class: "rlzc-btn small",
              disabled: !t.value || A.value === null,
              onClick: l
            }, "修正轮次", 8, gf)
          ])
        ])) : X("", !0),
        P(g).pack?.roles?.length ? (E(), $("div", xf, [
          x[5] || (x[5] = h("h4", null, "角色登记", -1)),
          (E(!0), $(Q, null, ye(P(g).pack.roles, (m) => (E(), $("label", {
            key: m,
            class: "rlzc-field"
          }, [
            h("span", null, N(m), 1),
            kt(h("input", {
              "onUpdate:modelValue": (M) => s[m] = M,
              class: "rlzc-input",
              disabled: !t.value,
              placeholder: "未登记"
            }, null, 8, bf), [
              [bA, s[m]]
            ])
          ]))), 128)),
          h("button", {
            class: "rlzc-btn small",
            disabled: !t.value,
            onClick: c
          }, "保存登记", 8, yf)
        ])) : X("", !0),
        h("div", vf, [
          x[6] || (x[6] = h("h4", null, "手动操作记录", -1)),
          P(g).session.manual.length ? (E(), $("ul", _f, [
            (E(!0), $(Q, null, ye(P(g).session.manual, (m, M) => (E(), $("li", { key: M }, [
              h("code", null, "#" + N(m.atIndex) + " " + N(m.kind) + " " + N("phase" in m ? m.phase : "") + N("round" in m ? m.round : "") + N("targetPhase" in m ? `${m.targetPhase}:${m.targetRound}` : ""), 1),
              h("button", {
                class: "rlzc-btn ghost small",
                disabled: !t.value,
                onClick: (I) => P(Ya)(M)
              }, "撤销", 8, wf)
            ]))), 128))
          ])) : (E(), $("p", kf, "无"))
        ]),
        h("details", zf, [
          x[7] || (x[7] = h("summary", null, "本次注入", -1)),
          h("pre", Sf, N([P(g).lastInjection.token, P(g).lastInjection.progress, P(g).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
        ]),
        h("details", Ef, [
          x[8] || (x[8] = h("summary", null, "重放结果", -1)),
          h("pre", $f, N(a(o.value)), 1)
        ]),
        h("details", Cf, [
          x[9] || (x[9] = h("summary", null, "会话原始数据", -1)),
          h("pre", Mf, N(a(P(g).session)), 1)
        ]),
        h("details", If, [
          x[11] || (x[11] = h("summary", null, "每楼快照（最近60条）", -1)),
          h("table", Tf, [
            x[10] || (x[10] = h("thead", null, [
              h("tr", null, [
                h("th", null, "楼"),
                h("th", null, "阶段"),
                h("th", null, "轮"),
                h("th", null, "钟时"),
                h("th", null, "事件")
              ])
            ], -1)),
            h("tbody", null, [
              (E(!0), $(Q, null, ye(i.value, (m) => (E(), $("tr", {
                key: m.index
              }, [
                h("td", null, N(m.index) + N(m.snap.entry ? "★" : ""), 1),
                h("td", null, N(m.snap.phase), 1),
                h("td", null, N(m.snap.round), 1),
                h("td", null, N(m.snap.clock ?? ""), 1),
                h("td", null, N(m.snap.injected.join(" ")), 1)
              ]))), 128))
            ])
          ])
        ]),
        h("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: x[2] || (x[2] = //@ts-ignore
          (...m) => P(Ts) && P(Ts)(...m))
        }, "删除副本会话", 8, Pf)
      ], 64)) : (E(), $("p", rf, "当前聊天没有副本会话。"))
    ]));
  }
}), Ff = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, Nf = { class: "rlzc-head" }, Of = { class: "rlzc-tabs" }, jf = ["onClick"], Df = { class: "rlzc-body" }, Bf = /* @__PURE__ */ it({
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
      if (A === "debug" && !g.debugUnlocked) {
        if (!await Ye("此页会显示副本真相，确定要打开吗？")) return;
        g.debugUnlocked = !0;
      }
      g.tab = A;
    }
    return (A, s) => (E(), $("div", {
      class: "rlzc-backdrop",
      onClick: s[1] || (s[1] = pl((i) => P(g).panelOpen = !1, ["self"]))
    }, [
      h("section", Ff, [
        h("header", Nf, [
          s[2] || (s[2] = h("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          h("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: s[0] || (s[0] = (i) => P(g).panelOpen = !1)
          }, "×")
        ]),
        h("nav", Of, [
          (E(), $(Q, null, ye(t, (i) => h("button", {
            key: i.id,
            class: bt({ on: P(g).tab === i.id }),
            onClick: (o) => n(i.id)
          }, N(i.label), 11, jf)), 64))
        ]),
        h("div", Df, [
          P(g).tab === "system" ? (E(), Je(wu, { key: 0 })) : P(g).tab === "docs" ? (E(), Je(Nu, { key: 1 })) : P(g).tab === "memo" ? (E(), Je(Du, { key: 2 })) : P(g).tab === "settings" ? (E(), Je(sf, { key: 3 })) : P(g).tab === "debug" && P(g).debugUnlocked ? (E(), Je(Rf, { key: 4 })) : X("", !0)
        ])
      ])
    ]));
  }
}), Vf = /* @__PURE__ */ it({
  __name: "App",
  setup(e) {
    return (t, n) => (E(), $(Q, null, [
      P(g).settings.showBall ? (E(), Je(Za, { key: 0 })) : X("", !0),
      P(g).panelOpen ? (E(), Je(Bf, { key: 1 })) : X("", !0)
    ], 64));
  }
}), Lf = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-memo{height:100%}.rlzc-textarea{min-height:50vh;flex:1;resize:vertical;line-height:1.6}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}', Fs = "rlzc-host", Ns = "rlzc-menu-btn";
function Wf() {
  if (document.getElementById(Fs)) return;
  const e = document.createElement("div");
  e.id = Fs, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = Lf, t.appendChild(n);
  const A = document.createElement("div");
  A.className = "rlzc-root", t.appendChild(A), gl(Vf).mount(A), no();
}
function no(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => no(e + 1), 500);
    return;
  }
  if (document.getElementById(Ns)) return;
  const n = document.createElement("div");
  n.id = Ns, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const A = document.createElement("div");
  A.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const s = document.createElement("span");
  s.textContent = "回廊种菜系统", n.append(A, s), n.addEventListener("click", () => {
    g.panelOpen = !g.panelOpen;
  }), t.appendChild(n);
}
globalThis.rlzcInterceptor = Da;
function aA() {
  Ta(), Ze("MESSAGE_RECEIVED", (e) => Ha(Number(e))), Ze("CHARACTER_MESSAGE_RENDERED", (e) => mn(Number(e))), Ze("MESSAGE_DELETED", () => un()), Ze("MESSAGE_SWIPED", (e) => {
    un(), mn(Number(e));
  }), Ze("MESSAGE_EDITED", () => un()), Ze("MESSAGE_UPDATED", (e) => {
    un(), mn(Number(e));
  }), Ze("CHAT_CHANGED", () => Rs()), Ze("MORE_MESSAGES_LOADED", () => Xi()), Wf(), Rs(), console.log("[rlzc] 回廊种菜系统已加载", g.settings);
}
const Os = window.jQuery;
typeof Os == "function" ? Os(() => aA()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", aA) : aA();
