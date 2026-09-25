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
const Q = {}, ft = [], pt = () => {
}, Ys = () => !1, Tn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Pn = (e) => e.startsWith("onUpdate:"), ke = Object.assign, Hs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, yr = Object.prototype.hasOwnProperty, K = (e, t) => yr.call(e, t), j = Array.isArray, Qe = (e) => sn(e) === "[object Map]", xt = (e) => sn(e) === "[object Set]", XA = (e) => sn(e) === "[object Date]", Y = (e) => typeof e == "function", ne = (e) => typeof e == "string", Pe = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", Ks = (e) => (q(e) || Y(e)) && Y(e.then) && Y(e.catch), Us = Object.prototype.toString, sn = (e) => Us.call(e), vr = (e) => sn(e).slice(8, -1), Zs = (e) => sn(e) === "[object Object]", EA = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Wt = /* @__PURE__ */ SA(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Rn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, _r = /-\w/g, _e = Rn(
  (e) => e.replace(_r, (t) => t.slice(1).toUpperCase())
), wr = /\B([A-Z])/g, vt = Rn(
  (e) => e.replace(wr, "-$1").toLowerCase()
), Js = Rn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Jn = Rn(
  (e) => e ? `on${Js(e)}` : ""
), Te = (e, t) => !Object.is(e, t), gn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Qs = (e, t, n, A = !1) => {
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
let es;
const Nn = () => es || (es = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function On(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const A = e[n], s = ne(A) ? Er(A) : On(A);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (ne(e) || q(e))
    return e;
}
const kr = /;(?![^(]*\))/g, zr = /:([^]+)/, Sr = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Er(e) {
  const t = {};
  return e.replace(Sr, (n) => n.startsWith("/*") ? "" : n).split(kr).forEach((n) => {
    if (n) {
      const A = n.split(zr);
      A.length > 1 && (t[A[0].trim()] = A[1].trim());
    }
  }), t;
}
function _t(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (j(e))
    for (let n = 0; n < e.length; n++) {
      const A = _t(e[n]);
      A && (t += A + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const $r = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Cr = /* @__PURE__ */ SA($r);
function qs(e) {
  return !!e || e === "";
}
function Ir(e, t, n) {
  if (e.length !== t.length) return !1;
  let A = !0;
  for (let s = 0; A && s < e.length; s++)
    A = Xe(e[s], t[s], n);
  return A;
}
function ts(e, t, n) {
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
function Mr(e, t, n) {
  let A = Qe(e), s = Qe(t);
  if (A || s || (A = xt(e), s = xt(t), A || s))
    return A && s ? ts(e, t, n) : !1;
  const i = Object.keys(e).length, r = Object.keys(t).length;
  if (i !== r)
    return !1;
  for (const o in e) {
    const c = e.hasOwnProperty(o), l = t.hasOwnProperty(o);
    if (c && !l || !c && l || !Xe(e[o], t[o], n))
      return !1;
  }
  return String(e) === String(t);
}
function ns(e, t, n, A) {
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
  let A = XA(e), s = XA(t);
  return A || s ? A && s ? e.getTime() === t.getTime() : !1 : (A = Pe(e), s = Pe(t), A || s ? e === t : (A = j(e), s = j(t), A || s ? A && s ? ns(e, t, n, Ir) : !1 : (A = q(e), s = q(t), A || s ? !A || !s ? !1 : ns(e, t, n, Mr) : String(e) === String(t))));
}
function Tr(e, t) {
  return e.findIndex((n) => Xe(n, t));
}
const Xs = (e) => !!(e && e.__v_isRef === !0), P = (e) => ne(e) ? e : e == null ? "" : j(e) || q(e) && (e.toString === Us || !Y(e.toString)) ? Xs(e) ? P(e.value) : JSON.stringify(e, ei, 2) : String(e), ei = (e, t) => Xs(t) ? ei(e, t.value) : Qe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [A, s], i) => (n[Qn(A, i) + " =>"] = s, n),
    {}
  )
} : xt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Qn(n))
} : Pe(t) ? Qn(t) : q(t) && !j(t) && !Zs(t) ? String(t) : t, Qn = (e, t = "") => {
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
let re;
class Pr {
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
function Rr() {
  return re;
}
let Z;
const qn = /* @__PURE__ */ new WeakSet();
class ti {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, re && (re.active ? re.effects.push(this) : this.flags &= -2);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ai(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, As(this), si(this);
    const t = Z, n = we;
    Z = this, we = !0;
    try {
      return this.fn();
    } finally {
      ii(this), Z = t, we = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        IA(t);
      this.deps = this.depsTail = void 0, As(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    dA(this) && this.run();
  }
  get dirty() {
    return dA(this);
  }
}
let ni = 0, Gt, Yt;
function Ai(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Yt, Yt = e;
    return;
  }
  e.next = Gt, Gt = e;
}
function $A() {
  ni++;
}
function CA() {
  if (--ni > 0)
    return;
  if (Yt) {
    let t = Yt;
    for (Yt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Gt; ) {
    let t = Gt;
    for (Gt = void 0; t; ) {
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
function si(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ii(e) {
  let t, n = e.depsTail, A = n;
  for (; A; ) {
    const s = A.prevDep;
    A.version === -1 ? (A === n && (n = s), IA(A), Fr(A)) : t = A, A.dep.activeLink = A.prevActiveLink, A.prevActiveLink = void 0, A = s;
  }
  e.deps = t, e.depsTail = n;
}
function dA(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ri(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ri(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Qt) || (e.globalVersion = Qt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !dA(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Z, A = we;
  Z = e, we = !0;
  try {
    si(e);
    const s = e.fn(e._value);
    (t.version === 0 || Te(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    Z = n, we = A, ii(e), e.flags &= -3;
  }
}
function IA(e, t = !1) {
  const { dep: n, prevSub: A, nextSub: s } = e;
  if (A && (A.nextSub = s, e.prevSub = void 0), s && (s.prevSub = A, e.nextSub = void 0), n.subs === e && (n.subs = A, !A && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      IA(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Fr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let we = !0;
const oi = [];
function et() {
  oi.push(we), we = !1;
}
function tt() {
  const e = oi.pop();
  we = e === void 0 ? !0 : e;
}
function As(e) {
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
let Qt = 0;
class Nr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class MA {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Z || !we || Z === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Z)
      n = this.activeLink = new Nr(Z, this), Z.deps ? (n.prevDep = Z.depsTail, Z.depsTail.nextDep = n, Z.depsTail = n) : Z.deps = Z.depsTail = n, li(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const A = n.nextDep;
      A.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = A), n.prevDep = Z.depsTail, n.nextDep = void 0, Z.depsTail.nextDep = n, Z.depsTail = n, Z.deps === n && (Z.deps = A);
    }
    return n;
  }
  trigger(t) {
    this.version++, Qt++, this.notify(t);
  }
  notify(t) {
    $A();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      CA();
    }
  }
}
function li(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let A = t.deps; A; A = A.nextDep)
        li(A);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const pA = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ Symbol(
  ""
), hA = /* @__PURE__ */ Symbol(
  ""
), qt = /* @__PURE__ */ Symbol(
  ""
);
function oe(e, t, n) {
  if (we && Z) {
    let A = pA.get(e);
    A || pA.set(e, A = /* @__PURE__ */ new Map());
    let s = A.get(n);
    s || (A.set(n, s = new MA()), s.map = A, s.key = n), s.track();
  }
}
function Le(e, t, n, A, s, i) {
  const r = pA.get(e);
  if (!r) {
    Qt++;
    return;
  }
  const o = (c) => {
    c && c.trigger();
  };
  if ($A(), t === "clear")
    r.forEach(o);
  else {
    const c = j(e), l = c && EA(n);
    if (c && n === "length") {
      const a = Number(A);
      r.forEach((d, p) => {
        (p === "length" || p === qt || !Pe(p) && p >= a) && o(d);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && o(r.get(n)), l && o(r.get(qt)), t) {
        case "add":
          c ? l && o(r.get("length")) : (o(r.get(ht)), Qe(e) && o(r.get(hA)));
          break;
        case "delete":
          c || (o(r.get(ht)), Qe(e) && o(r.get(hA)));
          break;
        case "set":
          Qe(e) && o(r.get(ht));
          break;
      }
  }
  CA();
}
function St(e) {
  const t = /* @__PURE__ */ V(e);
  return t === e || (oe(t, "iterate", qt), /* @__PURE__ */ xe(e)) ? t : /* @__PURE__ */ Re(e) ? /* @__PURE__ */ qe(e) ? t.map((n) => nt(be(n))) : t.map(nt) : t.map(be);
}
function jn(e) {
  return oe(e = /* @__PURE__ */ V(e), "iterate", qt), e;
}
function Ie(e, t) {
  return /* @__PURE__ */ Re(e) ? nt(/* @__PURE__ */ qe(e) ? be(t) : t) : be(t);
}
const Or = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xn(this, Symbol.iterator, (e) => Ie(this, e));
  },
  concat(...e) {
    return St(this).concat(
      ...e.map((t) => j(t) ? St(t) : t)
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
    return St(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return eA(this, "lastIndexOf", e);
  },
  map(e, t) {
    return je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Dt(this, "pop");
  },
  push(...e) {
    return Dt(this, "push", e);
  },
  reduce(e, ...t) {
    return ss(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ss(this, "reduceRight", e, t);
  },
  shift() {
    return Dt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Dt(this, "splice", e);
  },
  toReversed() {
    return St(this).toReversed();
  },
  toSorted(e) {
    return St(this).toSorted(e);
  },
  toSpliced(...e) {
    return St(this).toSpliced(...e);
  },
  unshift(...e) {
    return Dt(this, "unshift", e);
  },
  values() {
    return Xn(this, "values", (e) => Ie(this, e));
  }
};
function Xn(e, t, n) {
  const A = jn(e), s = A[t]();
  return A !== e && !/* @__PURE__ */ xe(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const jr = Array.prototype;
function je(e, t, n, A, s, i) {
  const r = jn(e), o = r !== e && !/* @__PURE__ */ xe(e), c = r[t];
  if (c !== jr[t]) {
    const d = c.apply(e, i);
    return o ? be(d) : d;
  }
  let l = n;
  r !== e && (o ? l = function(d, p) {
    return n.call(this, Ie(e, d), p, e);
  } : n.length > 2 && (l = function(d, p) {
    return n.call(this, d, p, e);
  }));
  const a = c.call(r, l, A);
  return o && s ? s(a) : a;
}
function ss(e, t, n, A) {
  const s = jn(e), i = s !== e && !/* @__PURE__ */ xe(e);
  let r = n, o = !1;
  s !== e && (i ? (o = A.length === 0, r = function(l, a, d) {
    return o && (o = !1, l = Ie(e, l)), n.call(this, l, Ie(e, a), d, e);
  }) : n.length > 3 && (r = function(l, a, d) {
    return n.call(this, l, a, d, e);
  }));
  const c = s[t](r, ...A);
  return o ? Ie(e, c) : c;
}
function eA(e, t, n) {
  const A = /* @__PURE__ */ V(e);
  oe(A, "iterate", qt);
  const s = A[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ RA(n[0]) ? (n[0] = /* @__PURE__ */ V(n[0]), A[t](...n)) : s;
}
function Dt(e, t, n = []) {
  et(), $A();
  const A = (/* @__PURE__ */ V(e))[t].apply(e, n);
  return CA(), tt(), A;
}
const Dr = /* @__PURE__ */ SA("__proto__,__v_isRef,__isVue"), ci = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pe)
);
function Br(e) {
  Pe(e) || (e = String(e));
  const t = /* @__PURE__ */ V(this);
  return oe(t, "has", e), t.hasOwnProperty(e);
}
class ai {
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
      return A === (s ? i ? Jr : pi : i ? di : fi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(A) ? t : void 0;
    const r = j(t);
    if (!s) {
      let c;
      if (r && (c = Or[n]))
        return c;
      if (n === "hasOwnProperty")
        return Br;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ce(t) ? t : A
    );
    if ((Pe(n) ? ci.has(n) : Dr(n)) || (s || oe(t, "get", n), i))
      return o;
    if (/* @__PURE__ */ ce(o)) {
      const c = r && EA(n) ? o : o.value;
      return s && q(c) ? /* @__PURE__ */ gA(c) : c;
    }
    return q(o) ? s ? /* @__PURE__ */ gA(o) : /* @__PURE__ */ Dn(o) : o;
  }
}
class ui extends ai {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, A, s) {
    let i = t[n];
    const r = j(t) && EA(n);
    if (!this._isShallow) {
      const l = /* @__PURE__ */ Re(i);
      if (!/* @__PURE__ */ xe(A) && !/* @__PURE__ */ Re(A) && (i = /* @__PURE__ */ V(i), A = /* @__PURE__ */ V(A)), !r && /* @__PURE__ */ ce(i) && !/* @__PURE__ */ ce(A))
        return l || (i.value = A), !0;
    }
    const o = r ? Number(n) < t.length : K(t, n), c = Reflect.set(
      t,
      n,
      A,
      /* @__PURE__ */ ce(t) ? t : s
    );
    return t === /* @__PURE__ */ V(s) && c && (o ? Te(A, i) && Le(t, "set", n, A) : Le(t, "add", n, A)), c;
  }
  deleteProperty(t, n) {
    const A = K(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && A && Le(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const A = Reflect.has(t, n);
    return (!Pe(n) || !ci.has(n)) && oe(t, "has", n), A;
  }
  ownKeys(t) {
    return oe(
      t,
      "iterate",
      j(t) ? "length" : ht
    ), Reflect.ownKeys(t);
  }
}
class Lr extends ai {
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
const Vr = /* @__PURE__ */ new ui(), Wr = /* @__PURE__ */ new Lr(), Gr = /* @__PURE__ */ new ui(!0);
const mA = (e) => e, fn = (e) => Reflect.getPrototypeOf(e);
function Yr(e, t, n) {
  return function(...A) {
    const s = this.__v_raw, i = /* @__PURE__ */ V(s), r = Qe(i), o = e === "entries" || e === Symbol.iterator && r, c = e === "keys" && r, l = s[e](...A), a = n ? mA : t ? nt : be;
    return !t && oe(
      i,
      "iterate",
      c ? hA : ht
    ), ke(
      // inheriting all iterator properties
      Object.create(l),
      {
        // iterator protocol
        next() {
          const { value: d, done: p } = l.next();
          return p ? { value: d, done: p } : {
            value: o ? [a(d[0]), a(d[1])] : a(d),
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
function Hr(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, r = /* @__PURE__ */ V(i), o = /* @__PURE__ */ V(s);
      e || (Te(s, o) && oe(r, "get", s), oe(r, "get", o));
      const { has: c } = fn(r), l = t ? mA : e ? nt : be;
      if (c.call(r, s))
        return l(i.get(s));
      if (c.call(r, o))
        return l(i.get(o));
      i !== r && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && oe(/* @__PURE__ */ V(s), "iterate", ht), s.size;
    },
    has(s) {
      const i = this.__v_raw, r = /* @__PURE__ */ V(i), o = /* @__PURE__ */ V(s);
      return e || (Te(s, o) && oe(r, "has", s), oe(r, "has", o)), s === o ? i.has(s) : i.has(s) || i.has(o);
    },
    forEach(s, i) {
      const r = this, o = r.__v_raw, c = /* @__PURE__ */ V(o), l = t ? mA : e ? nt : be;
      return !e && oe(c, "iterate", ht), o.forEach((a, d) => s.call(i, l(a), l(d), r));
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
      add(s) {
        const i = /* @__PURE__ */ V(this), r = fn(i), o = /* @__PURE__ */ V(s), c = !t && !/* @__PURE__ */ xe(s) && !/* @__PURE__ */ Re(s) ? o : s;
        return r.has.call(i, c) || Te(s, c) && r.has.call(i, s) || Te(o, c) && r.has.call(i, o) || (i.add(c), Le(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ xe(i) && !/* @__PURE__ */ Re(i) && (i = /* @__PURE__ */ V(i));
        const r = /* @__PURE__ */ V(this), { has: o, get: c } = fn(r);
        let l = o.call(r, s);
        l || (s = /* @__PURE__ */ V(s), l = o.call(r, s));
        const a = c.call(r, s);
        return r.set(s, i), l ? Te(i, a) && Le(r, "set", s, i) : Le(r, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ V(this), { has: r, get: o } = fn(i);
        let c = r.call(i, s);
        c || (s = /* @__PURE__ */ V(s), c = r.call(i, s)), o && o.call(i, s);
        const l = i.delete(s);
        return c && Le(i, "delete", s, void 0), l;
      },
      clear() {
        const s = /* @__PURE__ */ V(this), i = s.size !== 0, r = s.clear();
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
    n[s] = Yr(s, e, t);
  }), n;
}
function TA(e, t) {
  const n = Hr(e, t);
  return (A, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? A : Reflect.get(
    K(n, s) && s in A ? n : A,
    s,
    i
  );
}
const Kr = {
  get: /* @__PURE__ */ TA(!1, !1)
}, Ur = {
  get: /* @__PURE__ */ TA(!1, !0)
}, Zr = {
  get: /* @__PURE__ */ TA(!0, !1)
};
const fi = /* @__PURE__ */ new WeakMap(), di = /* @__PURE__ */ new WeakMap(), pi = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap();
function Qr(e) {
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
  return /* @__PURE__ */ Re(e) ? e : PA(
    e,
    !1,
    Vr,
    Kr,
    fi
  );
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  return PA(
    e,
    !1,
    Gr,
    Ur,
    di
  );
}
// @__NO_SIDE_EFFECTS__
function gA(e) {
  return PA(
    e,
    !0,
    Wr,
    Zr,
    pi
  );
}
function PA(e, t, n, A, s) {
  if (!q(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const r = Qr(vr(e));
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
  return /* @__PURE__ */ Re(e) ? /* @__PURE__ */ qe(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Re(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function RA(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function V(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ V(t) : e;
}
function Xr(e) {
  return !K(e, "__v_skip") && Object.isExtensible(e) && Qs(e, "__v_skip", !0), e;
}
const be = (e) => q(e) ? /* @__PURE__ */ Dn(e) : e, nt = (e) => q(e) ? /* @__PURE__ */ gA(e) : e;
// @__NO_SIDE_EFFECTS__
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return eo(e, !1);
}
function eo(e, t) {
  return /* @__PURE__ */ ce(e) ? e : new to(e, t);
}
class to {
  constructor(t, n) {
    this.dep = new MA(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ V(t), this._value = n ? t : be(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, A = this.__v_isShallow || /* @__PURE__ */ xe(t) || /* @__PURE__ */ Re(t);
    t = A ? t : /* @__PURE__ */ V(t), Te(t, n) && (this._rawValue = t, this._value = A ? t : be(t), this.dep.trigger());
  }
}
function M(e) {
  return /* @__PURE__ */ ce(e) ? e.value : e;
}
const no = {
  get: (e, t, n) => t === "__v_raw" ? e : M(Reflect.get(e, t, n)),
  set: (e, t, n, A) => {
    const s = e[t];
    return /* @__PURE__ */ ce(s) && !/* @__PURE__ */ ce(n) ? (s.value = n, !0) : Reflect.set(e, t, n, A);
  }
};
function hi(e) {
  return /* @__PURE__ */ qe(e) ? e : new Proxy(e, no);
}
class Ao {
  constructor(t, n, A) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new MA(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Qt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = A;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Z !== this)
      return Ai(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ri(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function so(e, t, n = !1) {
  let A, s;
  return Y(e) ? A = e : (A = e.get, s = e.set), new Ao(A, s, n);
}
const pn = {}, vn = /* @__PURE__ */ new WeakMap();
let at;
function io(e, t = !1, n = at) {
  if (n) {
    let A = vn.get(n);
    A || vn.set(n, A = []), A.push(e);
  }
}
function ro(e, t, n = Q) {
  const { immediate: A, deep: s, once: i, scheduler: r, augmentJob: o, call: c } = n, l = (F) => s ? F : /* @__PURE__ */ xe(F) || s === !1 || s === 0 ? Ve(F, 1) : Ve(F);
  let a, d, p, h, I = !1, $ = !1;
  if (/* @__PURE__ */ ce(e) ? (d = () => e.value, I = /* @__PURE__ */ xe(e)) : /* @__PURE__ */ qe(e) ? (d = () => l(e), I = !0) : j(e) ? ($ = !0, I = e.some((F) => /* @__PURE__ */ qe(F) || /* @__PURE__ */ xe(F)), d = () => e.map((F) => {
    if (/* @__PURE__ */ ce(F))
      return F.value;
    if (/* @__PURE__ */ qe(F))
      return l(F);
    if (Y(F))
      return c ? c(F, 2) : F();
  })) : Y(e) ? t ? d = c ? () => c(e, 2) : e : d = () => {
    if (p) {
      et();
      try {
        p();
      } finally {
        tt();
      }
    }
    const F = at;
    at = a;
    try {
      return c ? c(e, 3, [h]) : e(h);
    } finally {
      at = F;
    }
  } : d = pt, t && s) {
    const F = d, ee = s === !0 ? 1 / 0 : s;
    d = () => Ve(F(), ee);
  }
  const B = Rr(), L = () => {
    a.stop(), B && B.active && Hs(B.effects, a);
  };
  if (i && t) {
    const F = t;
    t = (...ee) => {
      const he = F(...ee);
      return L(), he;
    };
  }
  let O = $ ? new Array(e.length).fill(pn) : pn;
  const W = (F) => {
    if (!(!(a.flags & 1) || !a.dirty && !F))
      if (t) {
        const ee = a.run();
        if (F || s || I || ($ ? ee.some((he, ue) => Te(he, O[ue])) : Te(ee, O))) {
          p && p();
          const he = at;
          at = a;
          try {
            const ue = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              O === pn ? void 0 : $ && O[0] === pn ? [] : O,
              h
            ];
            O = ee, c ? c(t, 3, ue) : (
              // @ts-expect-error
              t(...ue)
            );
          } finally {
            at = he;
          }
        }
      } else
        a.run();
  };
  return o && o(W), a = new ti(d), a.scheduler = r ? () => r(W, !1) : W, h = (F) => io(F, !1, a), p = a.onStop = () => {
    const F = vn.get(a);
    if (F) {
      if (c)
        c(F, 4);
      else
        for (const ee of F) ee();
      vn.delete(a);
    }
  }, t ? A ? W(!0) : O = a.run() : r ? r(W.bind(null, !0), !0) : a.run(), L.pause = a.pause.bind(a), L.resume = a.resume.bind(a), L.stop = L, L;
}
function Ve(e, t = 1 / 0, n) {
  if (t <= 0 || !q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ce(e))
    Ve(e.value, t, n);
  else if (j(e))
    for (let A = 0; A < e.length; A++)
      Ve(e[A], t, n);
  else if (xt(e) || Qe(e))
    e.forEach((A) => {
      Ve(A, t, n);
    });
  else if (Zs(e)) {
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
function rn(e, t, n, A) {
  try {
    return A ? e(...A) : e();
  } catch (s) {
    Bn(s, t, n);
  }
}
function Ne(e, t, n, A) {
  if (Y(e)) {
    const s = rn(e, t, n, A);
    return s && Ks(s) && s.catch((i) => {
      Bn(i, t, n);
    }), s;
  }
  if (j(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Ne(e[i], t, n, A));
    return s;
  }
}
function Bn(e, t, n, A = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || Q;
  if (t) {
    let o = t.parent;
    const c = t.proxy, l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, c, l) === !1)
            return;
      }
      o = o.parent;
    }
    if (i) {
      et(), rn(i, null, 10, [
        e,
        c,
        l
      ]), tt();
      return;
    }
  }
  oo(e, n, s, A, r);
}
function oo(e, t, n, A = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const le = [];
let Ce = -1;
const $t = [];
let Ze = null, Et = 0;
const mi = /* @__PURE__ */ Promise.resolve();
let _n = null;
function gi(e) {
  const t = _n || mi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function lo(e) {
  let t = Ce + 1, n = le.length;
  for (; t < n; ) {
    const A = t + n >>> 1, s = le[A], i = Xt(s);
    i < e || i === e && s.flags & 2 ? t = A + 1 : n = A;
  }
  return t;
}
function FA(e) {
  if (!(e.flags & 1)) {
    const t = Xt(e), n = le[le.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Xt(n) ? le.push(e) : le.splice(lo(t), 0, e), e.flags |= 1, xi();
  }
}
function xi() {
  _n || (_n = mi.then(yi));
}
function co(e) {
  if (!j(e))
    Ze && e.id === -1 ? Ze.splice(Et + 1, 0, e) : e.flags & 1 || ($t.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      $t.push(e[t]);
  xi();
}
function is(e, t, n = Ce + 1) {
  for (; n < le.length; n++) {
    const A = le[n];
    if (A && A.flags & 2) {
      if (e && A.id !== e.uid)
        continue;
      le.splice(n, 1), n--, A.flags & 4 && (A.flags &= -2), A(), A.flags & 4 || (A.flags &= -2);
    }
  }
}
function bi(e) {
  if ($t.length) {
    const t = [...new Set($t)].sort(
      (n, A) => Xt(n) - Xt(A)
    );
    if ($t.length = 0, Ze) {
      for (let n = 0; n < t.length; n++)
        Ze.push(t[n]);
      return;
    }
    for (Ze = t, Et = 0; Et < Ze.length; Et++) {
      const n = Ze[Et];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ze = null, Et = 0;
  }
}
const Xt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function yi(e) {
  try {
    for (Ce = 0; Ce < le.length; Ce++) {
      const t = le[Ce];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), rn(
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
    Ce = -1, le.length = 0, bi(), _n = null, (le.length || $t.length) && yi();
  }
}
let ge = null, vi = null;
function wn(e) {
  const t = ge;
  return ge = e, vi = e && e.type.__scopeId || null, t;
}
function ao(e, t = ge, n) {
  if (!t || e._n)
    return e;
  const A = (...s) => {
    A._d && fs(-1);
    const i = wn(t), r = mt.length;
    let o;
    try {
      o = e(...s);
    } finally {
      for (let c = mt.length; c > r; c--) Di();
      wn(i), A._d && fs(1);
    }
    return o;
  };
  return A._n = !0, A._c = !0, A._d = !0, A;
}
function Ct(e, t) {
  if (ge === null)
    return e;
  const n = Gn(ge), A = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, r, o, c = Q] = t[s];
    i && (Y(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ve(r), A.push({
      dir: i,
      instance: n,
      value: r,
      oldValue: void 0,
      arg: o,
      modifiers: c
    }));
  }
  return e;
}
function lt(e, t, n, A) {
  const s = e.dirs, i = t && t.dirs;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    i && (o.oldValue = i[r].value);
    let c = o.dir[A];
    c && (et(), Ne(c, n, 8, [
      e.el,
      o,
      e,
      t
    ]), tt());
  }
}
function uo(e, t, n = !1) {
  const A = Zo();
  if (A || It) {
    let s = It ? It._context.provides : A ? A.parent == null || A.ce ? A.vnode.appContext && A.vnode.appContext.provides : A.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && Y(t) ? t.call(A && A.proxy) : t;
  }
}
const fo = /* @__PURE__ */ Symbol.for("v-scx"), po = () => uo(fo);
function bt(e, t, n) {
  return ho(e, t, n);
}
function ho(e, t, n = Q) {
  const { immediate: A, deep: s, flush: i, once: r } = n, o = ke({}, n), c = t && A || !t && i !== "post";
  let l;
  if (nn) {
    if (i === "sync") {
      const h = po();
      l = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!c) {
      const h = () => {
      };
      return h.stop = pt, h.resume = pt, h.pause = pt, h;
    }
  }
  const a = At;
  o.call = (h, I, $) => Ne(h, a, I, $);
  let d = !1;
  i === "post" ? o.scheduler = (h) => {
    ae(h, a && a.suspense);
  } : i !== "sync" && (d = !0, o.scheduler = (h, I) => {
    I ? h() : FA(h);
  }), o.augmentJob = (h) => {
    t && (h.flags |= 4), d && (h.flags |= 2, a && (h.id = a.uid, h.i = a));
  };
  const p = ro(e, t, o);
  return nn && (l ? l.push(p) : c && p()), p;
}
const mo = /* @__PURE__ */ Symbol("_vte"), Ln = (e) => e.__isTeleport, tA = /* @__PURE__ */ Symbol("_leaveCb");
function go(e) {
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
function _i(e) {
  if (!wi(e))
    return Ln(e.type) && e.children ? go(e.children) : e;
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
function NA(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    NA(
      Ln(n.type) && _i(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function ot(e, t) {
  return Y(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ke({ name: e.name }, t, { setup: e })
  ) : e;
}
function xo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function rs(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const kn = /* @__PURE__ */ new WeakMap();
function Ht(e, t, n, A, s = !1) {
  if (j(e)) {
    e.forEach(
      ($, B) => Ht(
        $,
        t && (j(t) ? t[B] : t),
        n,
        A,
        s
      )
    );
    return;
  }
  if (Kt(A) && !s) {
    A.shapeFlag & 512 && A.type.__asyncResolved && A.component.subTree.component && Ht(e, t, n, A.component.subTree);
    return;
  }
  const i = A.shapeFlag & 4 ? Gn(A.component) : A.el, r = s ? null : i, { i: o, r: c } = e, l = t && t.r, a = o.refs === Q ? o.refs = {} : o.refs, d = o.setupState, p = /* @__PURE__ */ V(d), h = d === Q ? Ys : ($) => rs(a, $) ? !1 : K(p, $), I = ($, B) => !(B && rs(a, B));
  if (l != null && l !== c) {
    if (os(t), ne(l))
      a[l] = null, h(l) && (d[l] = null);
    else if (/* @__PURE__ */ ce(l)) {
      const $ = t;
      I(l, $.k) && (l.value = null), $.k && (a[$.k] = null);
    }
  }
  if (Y(c))
    rn(c, o, 12, [r, a]);
  else {
    const $ = ne(c), B = /* @__PURE__ */ ce(c);
    if ($ || B) {
      const L = () => {
        if (e.f) {
          const O = $ ? h(c) ? d[c] : a[c] : I() || !e.k ? c.value : a[e.k];
          if (s)
            j(O) && Hs(O, i);
          else if (j(O))
            O.includes(i) || O.push(i);
          else if ($)
            a[c] = [i], h(c) && (d[c] = a[c]);
          else {
            const W = [i];
            I(c, e.k) && (c.value = W), e.k && (a[e.k] = W);
          }
        } else $ ? (a[c] = r, h(c) && (d[c] = r)) : B && (I(c, e.k) && (c.value = r), e.k && (a[e.k] = r));
      };
      if (r) {
        const O = () => {
          L(), kn.delete(e);
        };
        O.id = -1, kn.set(e, O), ae(O, n);
      } else
        os(e), L();
    }
  }
}
function os(e) {
  const t = kn.get(e);
  t && (t.flags |= 8, kn.delete(e));
}
Nn().requestIdleCallback;
Nn().cancelIdleCallback;
const Kt = (e) => !!e.type.__asyncLoader, wi = (e) => e.type.__isKeepAlive;
function bo(e, t, n = At, A = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      et();
      const o = DA(n), c = Ne(t, n, e, r);
      return o(), tt(), c;
    });
    return A ? s.unshift(i) : s.push(i), i;
  }
}
const ki = (e) => (t, n = At) => {
  (!nn || e === "sp") && bo(e, (...A) => t(...A), n);
}, yo = ki("m"), zi = ki(
  "bum"
), vo = /* @__PURE__ */ Symbol.for("v-ndc");
function me(e, t, n, A) {
  let s;
  const i = n, r = j(e);
  if (r || ne(e)) {
    const o = r && /* @__PURE__ */ qe(e);
    let c = !1, l = !1;
    o && (c = !/* @__PURE__ */ xe(e), l = /* @__PURE__ */ Re(e), e = jn(e)), s = new Array(e.length);
    for (let a = 0, d = e.length; a < d; a++)
      s[a] = t(
        c ? l ? nt(be(e[a])) : be(e[a]) : e[a],
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
        (o, c) => t(o, c, void 0, i)
      );
    else {
      const o = Object.keys(e);
      s = new Array(o.length);
      for (let c = 0, l = o.length; c < l; c++) {
        const a = o[c];
        s[c] = t(e[a], a, c, i);
      }
    }
  else
    s = [];
  return s;
}
const xA = (e) => e ? Wi(e) ? Gn(e) : xA(e.parent) : null, Ut = (
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
    $parent: (e) => xA(e.parent),
    $root: (e) => xA(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      FA(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = gi.bind(e.proxy)),
    $watch: (e) => pt
  })
), nA = (e, t) => e !== Q && !e.__isScriptSetup && K(e, t), _o = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: A, data: s, props: i, accessCache: r, type: o, appContext: c } = e;
    if (t[0] !== "$") {
      const p = r[t];
      if (p !== void 0)
        switch (p) {
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
        if (K(i, t))
          return r[t] = 3, i[t];
        if (n !== Q && K(n, t))
          return r[t] = 4, n[t];
        r[t] = 0;
      }
    }
    const l = Ut[t];
    let a, d;
    if (l)
      return t === "$attrs" && oe(e.attrs, "get", ""), l(e);
    if (
      // css module (injected by vue-loader)
      (a = o.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== Q && K(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      d = c.config.globalProperties, K(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: A, setupState: s, ctx: i } = e;
    return nA(s, t) ? (s[t] = n, !0) : K(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: A, appContext: s, props: i, type: r }
  }, o) {
    let c;
    return !!(n[o] || nA(t, o) || K(i, o) || K(A, o) || K(Ut, o) || K(s.config.globalProperties, o) || (c = r.__cssModules) && c[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : K(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Si() {
  return {
    app: null,
    config: {
      isNativeTag: Ys,
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
let wo = 0;
function ko(e, t) {
  return function(A, s = null) {
    Y(A) || (A = ke({}, A)), s != null && !q(s) && (s = null);
    const i = Si(), r = /* @__PURE__ */ new WeakSet(), o = [];
    let c = !1;
    const l = i.app = {
      _uid: wo++,
      _component: A,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: tl,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...d) {
        return r.has(a) || (a && Y(a.install) ? (r.add(a), a.install(l, ...d)) : Y(a) && (r.add(a), a(l, ...d))), l;
      },
      mixin(a) {
        return l;
      },
      component(a, d) {
        return d ? (i.components[a] = d, l) : i.components[a];
      },
      directive(a, d) {
        return d ? (i.directives[a] = d, l) : i.directives[a];
      },
      mount(a, d, p) {
        if (!c) {
          const h = l._ceVNode || We(A, s);
          return h.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(h, a, p), c = !0, l._container = a, a.__vue_app__ = l, Gn(h.component);
        }
      },
      onUnmount(a) {
        o.push(a);
      },
      unmount() {
        c && (Ne(
          o,
          l._instance,
          16
        ), e(null, l._container), delete l._container.__vue_app__);
      },
      provide(a, d) {
        return i.provides[a] = d, l;
      },
      runWithContext(a) {
        const d = It;
        It = l;
        try {
          return a();
        } finally {
          It = d;
        }
      }
    };
    return l;
  };
}
let It = null;
const zo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_e(t)}Modifiers`] || e[`${vt(t)}Modifiers`];
function So(e, t, ...n) {
  if (e.isUnmounted) return;
  const A = e.vnode.props || Q;
  let s = n;
  const i = t.startsWith("update:"), r = i && zo(A, t.slice(7));
  r && (r.trim && (s = n.map((a) => ne(a) ? a.trim() : a)), r.number && (s = s.map(Fn)));
  let o, c = A[o = Jn(t)] || // also try camelCase event handler (#2249)
  A[o = Jn(_e(t))];
  !c && i && (c = A[o = Jn(vt(t))]), c && Ne(
    c,
    e,
    6,
    s
  );
  const l = A[o + "Once"];
  if (l) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, Ne(
      l,
      e,
      6,
      s
    );
  }
}
function Eo(e, t, n = !1) {
  const A = t.emitsCache, s = A.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let r = {};
  return i ? (j(i) ? i.forEach((o) => r[o] = null) : ke(r, i), q(e) && A.set(e, r), r) : (q(e) && A.set(e, null), null);
}
function Vn(e, t) {
  return !e || !Tn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, vt(t)) || K(e, t));
}
function ls(e) {
  const {
    type: t,
    vnode: n,
    proxy: A,
    withProxy: s,
    propsOptions: [i],
    slots: r,
    attrs: o,
    emit: c,
    render: l,
    renderCache: a,
    props: d,
    data: p,
    setupState: h,
    ctx: I,
    inheritAttrs: $
  } = e, B = wn(e);
  let L, O;
  try {
    if (n.shapeFlag & 4) {
      const F = s || A, ee = F;
      L = Me(
        l.call(
          ee,
          F,
          a,
          d,
          h,
          p,
          I
        )
      ), O = o;
    } else {
      const F = t;
      L = Me(
        F.length > 1 ? F(
          d,
          { attrs: o, slots: r, emit: c }
        ) : F(
          d,
          null
        )
      ), O = t.props ? o : $o(o);
    }
  } catch (F) {
    mt.length = 0, Bn(F, e, 1), L = We(Ge);
  }
  let W = L;
  if (O && $ !== !1) {
    const F = Object.keys(O), { shapeFlag: ee } = W;
    F.length && ee & 7 && (i && F.some(Pn) && (O = Co(
      O,
      i
    )), W = Mt(W, O, !1, !0));
  }
  if (n.dirs && (W = Mt(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const F = Ln(W.type) && _i(W) || W;
    NA(F, n.transition);
  }
  return L = W, wn(B), L;
}
const $o = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Tn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Co = (e, t) => {
  const n = {};
  for (const A in e)
    (!Pn(A) || !(A.slice(9) in t)) && (n[A] = e[A]);
  return n;
};
function Io(e, t, n) {
  const { props: A, children: s, component: i } = e, { props: r, children: o, patchFlag: c } = t, l = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return A ? cs(A, r, l) : !!r;
    if (c & 8) {
      const a = t.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        const p = a[d];
        if (Ei(r, A, p) && !Vn(l, p))
          return !0;
      }
    }
  } else
    return (s || o) && (!o || !o.$stable) ? !0 : A === r ? !1 : A ? r ? cs(A, r, l) : !0 : !!r;
  return !1;
}
function cs(e, t, n) {
  const A = Object.keys(t);
  if (A.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < A.length; s++) {
    const i = A[s];
    if (Ei(t, e, i) && !Vn(n, i))
      return !0;
  }
  return !1;
}
function Ei(e, t, n) {
  const A = e[n], s = t[n];
  return n === "style" && q(A) && q(s) ? !Xe(A, s) : A !== s;
}
function Mo({ vnode: e, parent: t, suspense: n }, A) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = A, e = s), s === e)
      (e = t.vnode).el = A, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = A);
}
const $i = {}, Ci = () => Object.create($i), Ii = (e) => Object.getPrototypeOf(e) === $i;
function To(e, t, n, A = !1) {
  const s = {}, i = Ci();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Mi(e, t, s, i);
  for (const r in e.propsOptions[0])
    r in s || (s[r] = void 0);
  n ? e.props = A ? s : /* @__PURE__ */ qr(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function Po(e, t, n, A) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, o = /* @__PURE__ */ V(s), [c] = e.propsOptions;
  let l = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (A || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const a = e.vnode.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        let p = a[d];
        if (Vn(e.emitsOptions, p))
          continue;
        const h = t[p];
        if (c)
          if (K(i, p))
            h !== i[p] && (i[p] = h, l = !0);
          else {
            const I = _e(p);
            s[I] = bA(
              c,
              o,
              I,
              h,
              e,
              !1
            );
          }
        else
          h !== i[p] && (i[p] = h, l = !0);
      }
    }
  } else {
    Mi(e, t, s, i) && (l = !0);
    let a;
    for (const d in o)
      (!t || // for camelCase
      !K(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = vt(d)) === d || !K(t, a))) && (c ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[a] !== void 0) && (s[d] = bA(
        c,
        o,
        d,
        void 0,
        e,
        !0
      )) : delete s[d]);
    if (i !== o)
      for (const d in i)
        (!t || !K(t, d)) && (delete i[d], l = !0);
  }
  l && Le(e.attrs, "set", "");
}
function Mi(e, t, n, A) {
  const [s, i] = e.propsOptions;
  let r = !1, o;
  if (t)
    for (let c in t) {
      if (Wt(c))
        continue;
      const l = t[c];
      let a;
      s && K(s, a = _e(c)) ? !i || !i.includes(a) ? n[a] = l : (o || (o = {}))[a] = l : Vn(e.emitsOptions, c) || (!(c in A) || l !== A[c]) && (A[c] = l, r = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ V(n), l = o || Q;
    for (let a = 0; a < i.length; a++) {
      const d = i[a];
      n[d] = bA(
        s,
        c,
        d,
        l[d],
        e,
        !K(l, d)
      );
    }
  }
  return r;
}
function bA(e, t, n, A, s, i) {
  const r = e[n];
  if (r != null) {
    const o = K(r, "default");
    if (o && A === void 0) {
      const c = r.default;
      if (r.type !== Function && !r.skipFactory && Y(c)) {
        const { propsDefaults: l } = s;
        if (n in l)
          A = l[n];
        else {
          const a = DA(s);
          A = l[n] = c.call(
            null,
            t
          ), a();
        }
      } else
        A = c;
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
function Ro(e, t, n = !1) {
  const A = t.propsCache, s = A.get(e);
  if (s)
    return s;
  const i = e.props, r = {}, o = [];
  if (!i)
    return q(e) && A.set(e, ft), ft;
  if (j(i))
    for (let l = 0; l < i.length; l++) {
      const a = _e(i[l]);
      as(a) && (r[a] = Q);
    }
  else if (i)
    for (const l in i) {
      const a = _e(l);
      if (as(a)) {
        const d = i[l], p = r[a] = j(d) || Y(d) ? { type: d } : ke({}, d), h = p.type;
        let I = !1, $ = !0;
        if (j(h))
          for (let B = 0; B < h.length; ++B) {
            const L = h[B], O = Y(L) && L.name;
            if (O === "Boolean") {
              I = !0;
              break;
            } else O === "String" && ($ = !1);
          }
        else
          I = Y(h) && h.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = I, p[
          1
          /* shouldCastTrue */
        ] = $, (I || K(p, "default")) && o.push(a);
      }
    }
  const c = [r, o];
  return q(e) && A.set(e, c), c;
}
function as(e) {
  return e[0] !== "$" && !Wt(e);
}
const OA = (e) => e === "_" || e === "_ctx" || e === "$stable", jA = (e) => j(e) ? e.map(Me) : [Me(e)], Fo = (e, t, n) => {
  if (t._n)
    return t;
  const A = ao((...s) => jA(t(...s)), n);
  return A._c = !1, A;
}, Ti = (e, t, n) => {
  const A = e._ctx;
  for (const s in e) {
    if (OA(s)) continue;
    const i = e[s];
    if (Y(i))
      t[s] = Fo(s, i, A);
    else if (i != null) {
      const r = jA(i);
      t[s] = () => r;
    }
  }
}, Pi = (e, t) => {
  const n = jA(t);
  e.slots.default = () => n;
}, Ri = (e, t, n) => {
  for (const A in t)
    (n || !OA(A)) && (e[A] = t[A]);
}, No = (e, t, n) => {
  const A = e.slots = Ci();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (Ri(A, t, n), n && Qs(A, "_", s, !0)) : Ti(t, A);
  } else t && Pi(e, t);
}, Oo = (e, t, n) => {
  const { vnode: A, slots: s } = e;
  let i = !0, r = Q;
  if (A.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? i = !1 : Ri(s, t, n) : (i = !t.$stable, Ti(t, s)), r = t;
  } else t && (Pi(e, t), r = { default: 1 });
  if (i)
    for (const o in s)
      !OA(o) && r[o] == null && delete s[o];
}, ae = Vo;
function jo(e) {
  return Do(e);
}
function Do(e, t) {
  const n = Nn();
  n.__VUE__ = !0;
  const {
    insert: A,
    remove: s,
    patchProp: i,
    createElement: r,
    createText: o,
    createComment: c,
    setText: l,
    setElementText: a,
    parentNode: d,
    nextSibling: p,
    setScopeId: h = pt,
    insertStaticContent: I
  } = e, $ = (u, f, x, _ = null, b = null, v = null, z = void 0, k = null, w = !!f.dynamicChildren) => {
    if (u === f)
      return;
    u && !Bt(u, f) && (_ = un(u), Oe(u, b, v, !0), u = null), f.patchFlag === -2 && (w = !1, f.dynamicChildren = null), f.dynamicChildren && u && u.dynamicChildren && u.dynamicChildren.hasOnce && (f.dynamicChildren === ft && (f.dynamicChildren = []), f.dynamicChildren.hasOnce = !0);
    const { type: y, ref: R, shapeFlag: E } = f;
    switch (y) {
      case Wn:
        B(u, f, x, _);
        break;
      case Ge:
        L(u, f, x, _);
        break;
      case sA:
        u == null && O(f, x, _, z);
        break;
      case J:
        ln(
          u,
          f,
          x,
          _,
          b,
          v,
          z,
          k,
          w
        );
        break;
      default:
        E & 1 ? ee(
          u,
          f,
          x,
          _,
          b,
          v,
          z,
          k,
          w
        ) : E & 6 ? cn(
          u,
          f,
          x,
          _,
          b,
          v,
          z,
          k,
          w
        ) : (E & 64 || E & 128) && y.process(
          u,
          f,
          x,
          _,
          b,
          v,
          z,
          k,
          w,
          Ot
        );
    }
    R != null && b ? Ht(R, u && u.ref, v, f || u, !f) : R == null && u && u.ref != null && Ht(u.ref, null, v, u, !0);
  }, B = (u, f, x, _) => {
    if (u == null)
      A(
        f.el = o(f.children),
        x,
        _
      );
    else {
      const b = f.el = u.el;
      f.children !== u.children && l(b, f.children);
    }
  }, L = (u, f, x, _) => {
    u == null ? A(
      f.el = c(f.children || ""),
      x,
      _
    ) : f.el = u.el;
  }, O = (u, f, x, _) => {
    [u.el, u.anchor] = I(
      u.children,
      f,
      x,
      _,
      u.el,
      u.anchor
    );
  }, W = ({ el: u, anchor: f }, x, _) => {
    let b;
    for (; u && u !== f; )
      b = p(u), A(u, x, _), u = b;
    A(f, x, _);
  }, F = ({ el: u, anchor: f }) => {
    let x;
    for (; u && u !== f; )
      x = p(u), s(u), u = x;
    s(f);
  }, ee = (u, f, x, _, b, v, z, k, w) => {
    if (f.type === "svg" ? z = "svg" : f.type === "math" && (z = "mathml"), u == null)
      he(
        f,
        x,
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
        y && y._beginPatch(), zt(
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
  }, he = (u, f, x, _, b, v, z, k) => {
    let w, y;
    const { props: R, shapeFlag: E, transition: T, dirs: N } = u;
    if (w = u.el = r(
      u.type,
      v,
      R && R.is,
      R
    ), E & 8 ? a(w, u.children) : E & 16 && U(
      u.children,
      w,
      null,
      _,
      b,
      AA(u, v),
      z,
      k
    ), N && lt(u, null, _, "created"), ue(w, u, u.scopeId, z, _), R) {
      for (const H in R)
        H !== "value" && !Wt(H) && i(w, H, null, R[H], v, _);
      "value" in R && i(w, "value", null, R.value, v), (y = R.onVnodeBeforeMount) && $e(y, _, u);
    }
    N && lt(u, null, _, "beforeMount");
    const D = Bo(b, T);
    D && T.beforeEnter(w), A(w, f, x), ((y = R && R.onVnodeMounted) || D || N) && ae(() => {
      try {
        y && $e(y, _, u), D && T.enter(w), N && lt(u, null, _, "mounted");
      } finally {
      }
    }, b);
  }, ue = (u, f, x, _, b) => {
    if (x && h(u, x), _)
      for (let v = 0; v < _.length; v++)
        h(u, _[v]);
    if (b) {
      let v = b.subTree;
      if (f === v || ji(v.type) && (v.ssContent === f || v.ssFallback === f)) {
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
  }, U = (u, f, x, _, b, v, z, k, w = 0) => {
    for (let y = w; y < u.length; y++) {
      const R = u[y] = k ? Be(u[y]) : Me(u[y]);
      $(
        null,
        R,
        f,
        x,
        _,
        b,
        v,
        z,
        k
      );
    }
  }, zt = (u, f, x, _, b, v, z) => {
    const k = f.el = u.el;
    let { patchFlag: w, dynamicChildren: y, dirs: R } = f;
    w |= u.patchFlag & 16;
    const E = u.props || Q, T = f.props || Q;
    let N;
    if (x && ct(x, !1), (N = T.onVnodeBeforeUpdate) && $e(N, x, f, u), R && lt(f, u, x, "beforeUpdate"), x && ct(x, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!u.dynamicChildren || u.dynamicChildren.length !== y.length) && (w = 0, z = !1, y = null), (E.innerHTML && T.innerHTML == null || E.textContent && T.textContent == null) && a(k, ""), y ? Ae(
      u.dynamicChildren,
      y,
      k,
      x,
      _,
      AA(f, b),
      v
    ) : z || Un(
      u,
      f,
      k,
      null,
      x,
      _,
      AA(f, b),
      v,
      !1
    ), w > 0) {
      if (w & 16)
        ve(k, E, T, x, b);
      else if (w & 2 && E.class !== T.class && i(k, "class", null, T.class, b), w & 4 && i(k, "style", E.style, T.style, b), w & 8) {
        const D = f.dynamicProps;
        for (let H = 0; H < D.length; H++) {
          const G = D[H], te = E[G], ie = T[G];
          (ie !== te || G === "value") && i(k, G, te, ie, b, x);
        }
      }
      w & 1 && u.children !== f.children && a(k, f.children);
    } else !z && y == null && ve(k, E, T, x, b);
    ((N = T.onVnodeUpdated) || R) && ae(() => {
      N && $e(N, x, f, u), R && lt(f, u, x, "updated");
    }, _);
  }, Ae = (u, f, x, _, b, v, z) => {
    for (let k = 0; k < f.length; k++) {
      const w = u[k], y = f[k], R = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === J || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Bt(w, y) || // - In the case of a component, it could contain anything.
        w.shapeFlag & 198) ? d(w.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      $(
        w,
        y,
        R,
        null,
        _,
        b,
        v,
        z,
        !0
      );
    }
  }, ve = (u, f, x, _, b) => {
    if (f !== x) {
      if (f !== Q)
        for (const v in f)
          !Wt(v) && !(v in x) && i(
            u,
            v,
            f[v],
            null,
            b,
            _
          );
      for (const v in x) {
        if (Wt(v)) continue;
        const z = x[v], k = f[v];
        z !== k && v !== "value" && i(u, v, k, z, b, _);
      }
      "value" in x && i(u, "value", f.value, x.value, b);
    }
  }, ln = (u, f, x, _, b, v, z, k, w) => {
    const y = f.el = u ? u.el : o(""), R = f.anchor = u ? u.anchor : o("");
    let { patchFlag: E, dynamicChildren: T, slotScopeIds: N } = f;
    N && (k = k ? k.concat(N) : N), u == null ? (A(y, x, _), A(R, x, _), U(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      x,
      R,
      b,
      v,
      z,
      k,
      w
    )) : E > 0 && E & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === T.length ? (Ae(
      u.dynamicChildren,
      T,
      x,
      b,
      v,
      z,
      k
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || b && f === b.subTree) && Fi(
      u,
      f,
      !0
      /* shallow */
    )) : Un(
      u,
      f,
      x,
      R,
      b,
      v,
      z,
      k,
      w
    );
  }, cn = (u, f, x, _, b, v, z, k, w) => {
    f.slotScopeIds = k, u == null ? f.shapeFlag & 512 ? b.ctx.activate(
      f,
      x,
      _,
      z,
      w
    ) : Rt(
      f,
      x,
      _,
      b,
      v,
      z,
      w
    ) : He(u, f, w);
  }, Rt = (u, f, x, _, b, v, z) => {
    const k = u.component = Uo(
      u,
      _,
      b
    );
    if (wi(u) && (k.ctx.renderer = Ot), Jo(k, !1, z), k.asyncDep) {
      if (b && b.registerDep(k, Ft, z), !u.el) {
        const w = k.subTree = We(Ge);
        L(null, w, f, x), u.placeholder = w.el;
      }
    } else
      Ft(
        k,
        u,
        f,
        x,
        b,
        v,
        z
      );
  }, He = (u, f, x) => {
    const _ = f.component = u.component;
    if (Io(u, f, x))
      if (_.asyncDep && !_.asyncResolved) {
        f.el = u.el, Ke(_, f, x);
        return;
      } else
        _.next = f, _.update();
    else
      f.el = u.el, _.vnode = f;
  }, Ft = (u, f, x, _, b, v, z) => {
    const k = () => {
      if (u.isMounted) {
        let { next: E, bu: T, u: N, parent: D, vnode: H } = u;
        {
          const Se = Ni(u);
          if (Se) {
            E && (E.el = H.el, Ke(u, E, z)), Se.asyncDep.then(() => {
              ae(() => {
                u.isUnmounted || y();
              }, b);
            });
            return;
          }
        }
        let G = E, te;
        ct(u, !1), E ? (E.el = H.el, Ke(u, E, z)) : E = H, T && gn(T), (te = E.props && E.props.onVnodeBeforeUpdate) && $e(te, D, E, H), ct(u, !0);
        const ie = ls(u), ze = u.subTree;
        u.subTree = ie, $(
          ze,
          ie,
          // parent may have changed if it's in a teleport
          d(ze.el),
          // anchor may have changed if it's in a fragment
          un(ze),
          u,
          b,
          v
        ), E.el = ie.el, G === null && Mo(u, ie.el), N && ae(N, b), (te = E.props && E.props.onVnodeUpdated) && ae(
          () => $e(te, D, E, H),
          b
        );
      } else {
        let E;
        const { el: T, props: N } = f, { bm: D, m: H, parent: G, root: te, type: ie } = u, ze = Kt(f);
        ct(u, !1), D && gn(D), !ze && (E = N && N.onVnodeBeforeMount) && $e(E, G, f), ct(u, !0);
        {
          te.ce && te.ce._hasShadowRoot() && te.ce._injectChildStyle(
            ie,
            u.parent ? u.parent.type : void 0
          );
          const Se = u.subTree = ls(u);
          $(
            null,
            Se,
            x,
            _,
            u,
            b,
            v
          ), f.el = Se.el;
        }
        if (H && ae(H, b), !ze && (E = N && N.onVnodeMounted)) {
          const Se = f;
          ae(
            () => $e(E, G, Se),
            b
          );
        }
        (f.shapeFlag & 256 || G && Kt(G.vnode) && G.vnode.shapeFlag & 256) && u.a && ae(u.a, b), u.isMounted = !0, f = x = _ = null;
      }
    };
    u.scope.on();
    const w = u.effect = new ti(k);
    u.scope.off();
    const y = u.update = w.run.bind(w), R = u.job = w.runIfDirty.bind(w);
    R.i = u, R.id = u.uid, w.scheduler = () => FA(R), ct(u, !0), y();
  }, Ke = (u, f, x) => {
    f.component = u;
    const _ = u.vnode.props;
    u.vnode = f, u.next = null, Po(u, f.props, _, x), Oo(u, f.children, x), et(), is(u), tt();
  }, Un = (u, f, x, _, b, v, z, k, w = !1) => {
    const y = u && u.children, R = u ? u.shapeFlag : 0, E = f.children, { patchFlag: T, shapeFlag: N } = f;
    if (T > 0) {
      if (T & 128) {
        KA(
          y,
          E,
          x,
          _,
          b,
          v,
          z,
          k,
          w
        );
        return;
      } else if (T & 256) {
        gr(
          y,
          E,
          x,
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
    N & 8 ? (R & 16 && Nt(y, b, v), E !== y && a(x, E)) : R & 16 ? N & 16 ? KA(
      y,
      E,
      x,
      _,
      b,
      v,
      z,
      k,
      w
    ) : Nt(y, b, v, !0) : (R & 8 && a(x, ""), N & 16 && U(
      E,
      x,
      _,
      b,
      v,
      z,
      k,
      w
    ));
  }, gr = (u, f, x, _, b, v, z, k, w) => {
    u = u || ft, f = f || ft;
    const y = u.length, R = f.length, E = Math.min(y, R);
    let T;
    for (T = 0; T < E; T++) {
      const N = f[T] = w ? Be(f[T]) : Me(f[T]);
      $(
        u[T],
        N,
        x,
        null,
        b,
        v,
        z,
        k,
        w
      );
    }
    y > R ? Nt(
      u,
      b,
      v,
      !0,
      !1,
      E
    ) : U(
      f,
      x,
      _,
      b,
      v,
      z,
      k,
      w,
      E
    );
  }, KA = (u, f, x, _, b, v, z, k, w) => {
    let y = 0;
    const R = f.length;
    let E = u.length - 1, T = R - 1;
    for (; y <= E && y <= T; ) {
      const N = u[y], D = f[y] = w ? Be(f[y]) : Me(f[y]);
      if (Bt(N, D))
        $(
          N,
          D,
          x,
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
    for (; y <= E && y <= T; ) {
      const N = u[E], D = f[T] = w ? Be(f[T]) : Me(f[T]);
      if (Bt(N, D))
        $(
          N,
          D,
          x,
          null,
          b,
          v,
          z,
          k,
          w
        );
      else
        break;
      E--, T--;
    }
    if (y > E) {
      if (y <= T) {
        const N = T + 1, D = N < R ? f[N].el : _;
        for (; y <= T; )
          $(
            null,
            f[y] = w ? Be(f[y]) : Me(f[y]),
            x,
            D,
            b,
            v,
            z,
            k,
            w
          ), y++;
      }
    } else if (y > T)
      for (; y <= E; )
        Oe(u[y], b, v, !0), y++;
    else {
      const N = y, D = y, H = /* @__PURE__ */ new Map();
      for (y = D; y <= T; y++) {
        const fe = f[y] = w ? Be(f[y]) : Me(f[y]);
        fe.key != null && H.set(fe.key, y);
      }
      let G, te = 0;
      const ie = T - D + 1;
      let ze = !1, Se = 0;
      const jt = new Array(ie);
      for (y = 0; y < ie; y++) jt[y] = 0;
      for (y = N; y <= E; y++) {
        const fe = u[y];
        if (te >= ie) {
          Oe(fe, b, v, !0);
          continue;
        }
        let Ee;
        if (fe.key != null)
          Ee = H.get(fe.key);
        else
          for (G = D; G <= T; G++)
            if (jt[G - D] === 0 && Bt(fe, f[G])) {
              Ee = G;
              break;
            }
        Ee === void 0 ? Oe(fe, b, v, !0) : (jt[Ee - D] = y + 1, Ee >= Se ? Se = Ee : ze = !0, $(
          fe,
          f[Ee],
          x,
          null,
          b,
          v,
          z,
          k,
          w
        ), te++);
      }
      const JA = ze ? Lo(jt) : ft;
      for (G = JA.length - 1, y = ie - 1; y >= 0; y--) {
        const fe = D + y, Ee = f[fe], QA = f[fe + 1], qA = fe + 1 < R ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          QA.el || Oi(QA)
        ) : _;
        jt[y] === 0 ? $(
          null,
          Ee,
          x,
          qA,
          b,
          v,
          z,
          k,
          w
        ) : ze && (G < 0 || y !== JA[G] ? an(Ee, x, qA, 2) : G--);
      }
    }
  }, an = (u, f, x, _, b = null) => {
    const { el: v, type: z, transition: k, children: w, shapeFlag: y } = u;
    if (y & 6) {
      an(u.component.subTree, f, x, _);
      return;
    }
    if (y & 128) {
      u.suspense.move(f, x, _);
      return;
    }
    if (y & 64) {
      z.move(u, f, x, Ot);
      return;
    }
    if (z === J) {
      A(v, f, x);
      for (let E = 0; E < w.length; E++)
        an(w[E], f, x, _);
      A(u.anchor, f, x);
      return;
    }
    if (z === sA) {
      W(u, f, x);
      return;
    }
    if (_ !== 2 && y & 1 && k)
      if (_ === 0)
        k.persisted && !v[tA] ? A(v, f, x) : (k.beforeEnter(v), A(v, f, x), ae(() => k.enter(v), b));
      else {
        const { leave: E, delayLeave: T, afterLeave: N } = k, D = () => {
          u.ctx.isUnmounted ? s(v) : A(v, f, x);
        }, H = () => {
          const G = v._isLeaving || !!v[tA];
          v._isLeaving && v[tA](
            !0
            /* cancelled */
          ), k.persisted && !G ? D() : E(v, () => {
            D(), N && N();
          });
        };
        T ? T(v, D, H) : H();
      }
    else
      A(v, f, x);
  }, Oe = (u, f, x, _ = !1, b = !1) => {
    const {
      type: v,
      props: z,
      ref: k,
      children: w,
      dynamicChildren: y,
      shapeFlag: R,
      patchFlag: E,
      dirs: T,
      cacheIndex: N,
      memo: D
    } = u;
    if ((E === -2 || y && y.hasOnce) && (b = !1), k != null && (et(), Ht(k, null, x, u, !0), tt()), N != null && (!u.ctx || u.ctx === f) && (f.renderCache[N] = void 0), R & 256) {
      f.ctx.deactivate(u);
      return;
    }
    const H = R & 1 && T, G = !Kt(u);
    let te;
    if (G && (te = z && z.onVnodeBeforeUnmount) && $e(te, f, u), R & 6)
      br(u.component, x, _);
    else {
      if (R & 128) {
        u.suspense.unmount(x, _);
        return;
      }
      H && lt(u, null, f, "beforeUnmount"), R & 64 ? u.type.remove(
        u,
        f,
        x,
        Ot,
        _
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== J || E > 0 && E & 64) ? Nt(
        y,
        f,
        x,
        !1,
        !0
      ) : (v === J && E & 384 || !b && R & 16) && Nt(w, f, x), _ && UA(u);
    }
    const ie = D != null && N == null;
    (G && (te = z && z.onVnodeUnmounted) || H || ie) && ae(() => {
      te && $e(te, f, u), H && lt(u, null, f, "unmounted"), ie && (u.el = null);
    }, x);
  }, UA = (u) => {
    const { type: f, el: x, anchor: _, transition: b } = u;
    if (f === J) {
      xr(x, _);
      return;
    }
    if (f === sA) {
      F(u), b && !b.persisted && b.afterLeave && b.afterLeave();
      return;
    }
    const v = () => {
      s(x), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (u.shapeFlag & 1 && b && !b.persisted) {
      const { leave: z, delayLeave: k } = b, w = () => z(x, v);
      k ? k(u.el, v, w) : w();
    } else
      v();
  }, xr = (u, f) => {
    let x;
    for (; u !== f; )
      x = p(u), s(u), u = x;
    s(f);
  }, br = (u, f, x) => {
    const { bum: _, scope: b, job: v, subTree: z, um: k, m: w, a: y } = u;
    us(w), us(y), _ && gn(_), b.stop(), v ? (v.flags |= 8, Oe(z, u, f, x)) : u.vnode.el && z && (z.transition = u.vnode.transition, Oe(z, u, f, x)), k && ae(k, f), ae(() => {
      u.isUnmounted = !0;
    }, f);
  }, Nt = (u, f, x, _ = !1, b = !1, v = 0) => {
    for (let z = v; z < u.length; z++)
      Oe(u[z], f, x, _, b);
  }, un = (u) => {
    if (u.shapeFlag & 6)
      return un(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const f = p(u.anchor || u.el), x = f && f[mo];
    return x ? p(x) : f;
  };
  let Zn = !1;
  const ZA = (u, f, x) => {
    let _;
    u == null ? f._vnode && (Oe(f._vnode, null, null, !0), _ = f._vnode.component) : $(
      f._vnode || null,
      u,
      f,
      null,
      null,
      null,
      x
    ), f._vnode = u, Zn || (Zn = !0, is(_), bi(), Zn = !1);
  }, Ot = {
    p: $,
    um: Oe,
    m: an,
    r: UA,
    mt: Rt,
    mc: U,
    pc: Un,
    pbc: Ae,
    n: un,
    o: e
  };
  return {
    render: ZA,
    hydrate: void 0,
    createApp: ko(ZA)
  };
}
function AA({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ct({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Bo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Fi(e, t, n = !1) {
  const A = e.children, s = t.children;
  if (j(A) && j(s))
    for (let i = 0; i < A.length; i++) {
      const r = A[i];
      let o = s[i];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = s[i] = Be(s[i]), o.el = r.el), !n && o.patchFlag !== -2 && Fi(r, o)), o.type === Wn && (o.patchFlag === -1 && (o = s[i] = Be(o)), o.el = r.el), o.type === Ge && !o.el && (o.el = r.el);
    }
}
function Lo(e) {
  const t = e.slice(), n = [0];
  let A, s, i, r, o;
  const c = e.length;
  for (A = 0; A < c; A++) {
    const l = e[A];
    if (l !== 0) {
      if (s = n[n.length - 1], e[s] < l) {
        t[A] = s, n.push(A);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        o = i + r >> 1, e[n[o]] < l ? i = o + 1 : r = o;
      l < e[n[i]] && (i > 0 && (t[A] = n[i - 1]), n[i] = A);
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; )
    n[i] = r, r = t[r];
  return n;
}
function Ni(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ni(t);
}
function us(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Oi(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Oi(t.subTree) : null;
}
const ji = (e) => e.__isSuspense;
function Vo(e, t) {
  t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : co(e);
}
const J = /* @__PURE__ */ Symbol.for("v-fgt"), Wn = /* @__PURE__ */ Symbol.for("v-txt"), Ge = /* @__PURE__ */ Symbol.for("v-cmt"), sA = /* @__PURE__ */ Symbol.for("v-stc"), mt = [];
let de = null;
function S(e = !1) {
  mt.push(de = e ? null : []);
}
function Di() {
  mt.pop(), de = mt[mt.length - 1] || null;
}
let en = 1;
function fs(e, t = !1) {
  en += e, e < 0 && de && t && (de.hasOnce = !0);
}
function Bi(e) {
  return e.dynamicChildren = en > 0 ? de || ft : null, Di(), en > 0 && de && de.push(e), e;
}
function C(e, t, n, A, s, i) {
  return Bi(
    g(
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
  return Bi(
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
function Li(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Bt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vi = ({ key: e }) => e ?? null, xn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || /* @__PURE__ */ ce(e) || Y(e) ? { i: ge, r: e, k: t, f: !!n } : e : null);
function g(e, t = null, n = null, A = 0, s = null, i = e === J ? 0 : 1, r = !1, o = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vi(t),
    ref: t && xn(t),
    scopeId: vi,
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
    ctx: ge
  };
  return o ? (zn(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= ne(n) ? 8 : 16), en > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  de && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && de.push(c), c;
}
const We = Wo;
function Wo(e, t = null, n = null, A = 0, s = null, i = !1) {
  if ((!e || e === vo) && (e = Ge), Li(e)) {
    const o = Mt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && zn(o, n), en > 0 && !i && de && (o.shapeFlag & 6 ? de[de.indexOf(e)] = o : de.push(o)), o.patchFlag = -2, o;
  }
  if (el(e) && (e = e.__vccOpts), t) {
    t = Go(t);
    let { class: o, style: c } = t;
    o && !ne(o) && (t.class = _t(o)), q(c) && (/* @__PURE__ */ RA(c) && !j(c) && (c = ke({}, c)), t.style = On(c));
  }
  const r = ne(e) ? 1 : ji(e) ? 128 : Ln(e) ? 64 : q(e) ? 4 : Y(e) ? 2 : 0;
  return g(
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
function Go(e) {
  return e ? /* @__PURE__ */ RA(e) || Ii(e) ? ke({}, e) : e : null;
}
function Mt(e, t, n = !1, A = !1) {
  const { props: s, ref: i, patchFlag: r, children: o, transition: c } = e, l = t ? Yo(s || {}, t) : s, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Vi(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? j(i) ? i.concat(xn(t)) : [i, xn(t)] : xn(t)
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
    patchFlag: t && e.type !== J ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && Mt(e.ssContent),
    ssFallback: e.ssFallback && Mt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return c && A && NA(
    a,
    c.clone(a)
  ), a;
}
function Zt(e = " ", t = 0) {
  return We(Wn, null, e, t);
}
function X(e = "", t = !1) {
  return t ? (S(), Je(Ge, null, e)) : We(Ge, null, e);
}
function Me(e) {
  return e == null || typeof e == "boolean" ? We(Ge) : j(e) ? We(
    J,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Li(e) ? Be(e) : We(Wn, null, String(e));
}
function Be(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Mt(e);
}
function zn(e, t) {
  let n = 0;
  const { shapeFlag: A } = e;
  if (t == null)
    t = null;
  else if (j(t))
    n = 16;
  else if (typeof t == "object")
    if (A & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), zn(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Ii(t) ? t._ctx = ge : s === 3 && ge && (ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Y(t)) {
    if (A & 65) {
      zn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: ge }, n = 32;
  } else
    t = String(t), A & 64 ? (n = 16, t = [Zt(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Yo(...e) {
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
        r && i !== r && !(j(i) && i.includes(r)) ? t[s] = i ? [].concat(i, r) : r : r == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Pn(s) && (t[s] = r);
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
const Ho = Si();
let Ko = 0;
function Uo(e, t, n) {
  const A = e.type, s = (t ? t.appContext : e.appContext) || Ho, i = {
    uid: Ko++,
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
    scope: new Pr(
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
    propsOptions: Ro(A, s),
    emitsOptions: Eo(A, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Q,
    // inheritAttrs
    inheritAttrs: A.inheritAttrs,
    // state
    ctx: Q,
    data: Q,
    props: Q,
    attrs: Q,
    slots: Q,
    refs: Q,
    setupState: Q,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = So.bind(null, i), e.ce && e.ce(i), i;
}
let At = null;
const Zo = () => At || ge;
let Sn, tn;
{
  const e = Nn(), t = (n, A) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(A), (i) => {
      s.length > 1 ? s.forEach((r) => r(i)) : s[0](i);
    };
  };
  Sn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => At = n
  ), tn = t(
    "__VUE_SSR_SETTERS__",
    (n) => nn = n
  );
}
const DA = (e) => {
  const t = At;
  return Sn(e), e.scope.on(), () => {
    e.scope.off(), Sn(t);
  };
}, ds = () => {
  At && At.scope.off(), Sn(null);
};
function Wi(e) {
  return e.vnode.shapeFlag & 4;
}
let nn = !1;
function Jo(e, t = !1, n = !1) {
  t && tn(t);
  const { props: A, children: s } = e.vnode, i = Wi(e);
  To(e, A, i, t), No(e, s, n || t);
  const r = i ? Qo(e, t) : void 0;
  return t && tn(!1), r;
}
function Qo(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, _o);
  const { setup: A } = n;
  if (A) {
    et();
    const s = e.setupContext = A.length > 1 ? Xo(e) : null, i = DA(e), r = rn(
      A,
      e,
      0,
      [
        e.props,
        s
      ]
    ), o = Ks(r);
    if (tt(), i(), (o || e.sp) && !Kt(e) && xo(e), o) {
      if (r.then(ds, ds), t)
        return r.then((c) => {
          tn(!0);
          try {
            ps(e, c, t);
          } finally {
            tn(!1);
          }
        }).catch((c) => {
          Bn(c, e, 0);
        });
      e.asyncDep = r;
    } else
      ps(e, r);
  } else
    Gi(e);
}
function ps(e, t, n) {
  Y(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) && (e.setupState = hi(t)), Gi(e);
}
function Gi(e, t, n) {
  const A = e.type;
  e.render || (e.render = A.render || pt);
}
const qo = {
  get(e, t) {
    return oe(e, "get", ""), e[t];
  }
};
function Xo(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, qo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Gn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(hi(Xr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ut)
        return Ut[n](e);
    },
    has(t, n) {
      return n in t || n in Ut;
    }
  })) : e.proxy;
}
function el(e) {
  return Y(e) && "__vccOpts" in e;
}
const se = (e, t) => /* @__PURE__ */ so(e, t, nn), tl = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let yA;
const hs = typeof window < "u" && window.trustedTypes;
if (hs)
  try {
    yA = /* @__PURE__ */ hs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Yi = yA ? (e) => yA.createHTML(e) : (e) => e, nl = "http://www.w3.org/2000/svg", Al = "http://www.w3.org/1998/Math/MathML", De = typeof document < "u" ? document : null, ms = De && /* @__PURE__ */ De.createElement("template"), sl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, A) => {
    const s = t === "svg" ? De.createElementNS(nl, e) : t === "mathml" ? De.createElementNS(Al, e) : n ? De.createElement(e, { is: n }) : De.createElement(e);
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
      ms.innerHTML = Yi(
        A === "svg" ? `<svg>${e}</svg>` : A === "mathml" ? `<math>${e}</math>` : e
      );
      const o = ms.content;
      if (A === "svg" || A === "mathml") {
        const c = o.firstChild;
        for (; c.firstChild; )
          o.appendChild(c.firstChild);
        o.removeChild(c);
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
}, il = /* @__PURE__ */ Symbol("_vtc");
function rl(e, t, n) {
  const A = e[il];
  A && (t = (t ? [t, ...A] : [...A]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const gs = /* @__PURE__ */ Symbol("_vod"), ol = /* @__PURE__ */ Symbol("_vsh"), ll = /* @__PURE__ */ Symbol(""), cl = /(?:^|;)\s*display\s*:/;
function al(e, t, n) {
  const A = e.style, s = ne(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (ne(t))
        for (const r of t.split(";")) {
          const o = r.slice(0, r.indexOf(":")).trim();
          n[o] == null && Vt(A, o, "");
        }
      else
        for (const r in t)
          n[r] == null && Vt(A, r, "");
    for (const r in n) {
      r === "display" && (i = !0);
      const o = n[r];
      o != null ? fl(
        e,
        r,
        !ne(t) && t ? t[r] : void 0,
        o
      ) || Vt(A, r, o) : Vt(A, r, "");
    }
  } else if (s) {
    if (t !== n) {
      const r = A[ll];
      r && (n += ";" + r), A.cssText = n, i = cl.test(n);
    }
  } else t && e.removeAttribute("style");
  gs in e && (e[gs] = i ? A.display : "", e[ol] && (A.display = "none"));
}
const hn = /\s*!important$/;
function Vt(e, t, n) {
  if (j(n))
    n.forEach((A) => Vt(e, t, A));
  else if (n == null && (n = ""), t.startsWith("--"))
    hn.test(n) ? e.setProperty(t, n.replace(hn, ""), "important") : e.setProperty(t, n);
  else {
    const A = ul(e, t);
    hn.test(n) ? e.setProperty(
      vt(A),
      n.replace(hn, ""),
      "important"
    ) : e[A] = n;
  }
}
const xs = ["Webkit", "Moz", "ms"], iA = {};
function ul(e, t) {
  const n = iA[t];
  if (n)
    return n;
  let A = _e(t);
  if (A !== "filter" && A in e)
    return iA[t] = A;
  A = Js(A);
  for (let s = 0; s < xs.length; s++) {
    const i = xs[s] + A;
    if (i in e)
      return iA[t] = i;
  }
  return t;
}
function fl(e, t, n, A) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ne(A) && n === A;
}
const bs = "http://www.w3.org/1999/xlink";
function ys(e, t, n, A, s, i = Cr(t)) {
  A && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(bs, t.slice(6, t.length)) : e.setAttributeNS(bs, t, n) : n == null || i && !qs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Pe(n) ? String(n) : n
  );
}
function vs(e, t, n, A, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Yi(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const o = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (o !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = qs(n) : n == null && o === "string" ? (n = "", r = !0) : o === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(s || t);
}
function ut(e, t, n, A) {
  e.addEventListener(t, n, A);
}
function dl(e, t, n, A) {
  e.removeEventListener(t, n, A);
}
const _s = /* @__PURE__ */ Symbol("_vei");
function pl(e, t, n, A, s = null) {
  const i = e[_s] || (e[_s] = {}), r = i[t];
  if (A && r)
    r.value = A;
  else {
    const [o, c] = gl(t);
    if (A) {
      const l = i[t] = yl(
        A,
        s
      );
      ut(e, o, l, c);
    } else r && (dl(e, o, r, c), i[t] = void 0);
  }
}
const hl = /(Once|Passive|Capture)$/, ml = /^on:?(?:Once|Passive|Capture)$/;
function gl(e) {
  let t, n;
  for (; (n = e.match(hl)) && !ml.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : vt(e.slice(2)), t];
}
let rA = 0;
const xl = /* @__PURE__ */ Promise.resolve(), bl = () => rA || (xl.then(() => rA = 0), rA = Date.now());
function yl(e, t) {
  const n = (A) => {
    if (!A._vts)
      A._vts = Date.now();
    else if (A._vts <= n.attached)
      return;
    const s = n.value;
    if (j(s)) {
      const i = A.stopImmediatePropagation;
      A.stopImmediatePropagation = () => {
        i.call(A), A._stopped = !0;
      };
      const r = s.slice(), o = [A];
      for (let c = 0; c < r.length && !A._stopped; c++) {
        const l = r[c];
        l && Ne(
          l,
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
  return n.value = e, n.attached = bl(), n;
}
const ws = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, vl = (e, t, n, A, s, i) => {
  const r = s === "svg";
  t === "class" ? rl(e, A, r) : t === "style" ? al(e, n, A) : Tn(t) ? Pn(t) || pl(e, t, n, A, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : _l(e, t, A, r)) ? (vs(e, t, A), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ys(e, t, A, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (wl(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ne(A))) ? vs(e, _e(t), A, i, t) : (t === "true-value" ? e._trueValue = A : t === "false-value" && (e._falseValue = A), ys(e, t, A, r));
};
function _l(e, t, n, A) {
  if (A)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ws(t) && Y(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return ws(t) && ne(n) ? !1 : t in e;
}
function wl(e, t) {
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
  return j(t) ? (n) => gn(t, n) : t;
};
function kl(e) {
  e.target.composing = !0;
}
function ks(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const dt = /* @__PURE__ */ Symbol("_assign"), mn = /* @__PURE__ */ Symbol("_initialValue");
function oA(e, t, n) {
  return t && (e = e.trim()), n && (e = Fn(e)), e;
}
const vA = {
  created(e, { modifiers: { lazy: t, trim: n, number: A } }, s) {
    e.parentNode && (e.type === "text" ? e[mn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[mn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[dt] = En(s);
    const i = A || s.props && s.props.type === "number";
    ut(e, t ? "change" : "input", (r) => {
      r.target.composing || e[dt](oA(e.value, n, i));
    }), (n || i) && ut(e, "change", () => {
      e.value = oA(e.value, n, i);
    }), t || (ut(e, "compositionstart", kl), ut(e, "compositionend", ks), ut(e, "change", ks));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: A } }) {
    const s = t ?? "", i = e[mn];
    delete e[mn], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[dt](oA(e.value, n, A)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: A, trim: s, number: i } }, r) {
    if (e[dt] = En(r), e.composing) return;
    const o = (i || e.type === "number") && !/^0\d/.test(e.value) ? Fn(e.value) : e.value, c = t ?? "";
    if (o === c)
      return;
    const l = e.getRootNode();
    (l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (A && t === n || s && e.value.trim() === c) || (e.value = c);
  }
}, BA = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, A) {
    e._modelValue = t, ut(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? Fn($n(c)) : $n(c)
      ), i = e.multiple, r = i ? xt(e._modelValue) ? new Set(s) : s : s[0], o = e._pendingValue = [
        i,
        i ? j(r) ? s.slice() : s : r
      ];
      try {
        e[dt](r);
      } finally {
        gi(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[dt] = En(A);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    zs(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[dt] = En(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !zl(t, n[1], n[0])) && zs(e, t);
  }
};
function zl(e, t, n) {
  if (!n || j(e)) return Xe(e, t);
  if (xt(e)) {
    if (e.size !== t.length) return !1;
    for (const A of t)
      if (!e.has(A)) return !1;
    return !0;
  }
  return !1;
}
function zs(e, t) {
  const n = e.multiple, A = j(t);
  if (!(n && !A && !xt(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const r = e.options[s], o = $n(r);
      if (n)
        if (A) {
          const c = typeof o;
          c === "string" || c === "number" ? r.selected = t.some((l) => String(l) === String(o)) : r.selected = Tr(t, o) > -1;
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
const Sl = ["ctrl", "shift", "alt", "meta"], El = {
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
  exact: (e, t) => Sl.some((n) => e[`${n}Key`] && !t.includes(n))
}, $l = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), A = t.join(".");
  return n[A] || (n[A] = ((s, ...i) => {
    for (let r = 0; r < t.length; r++) {
      const o = El[t[r]];
      if (o && o(s, t)) return;
    }
    return e(s, ...i);
  }));
}, Cl = /* @__PURE__ */ ke({ patchProp: vl }, sl);
let Ss;
function Il() {
  return Ss || (Ss = jo(Cl));
}
const Ml = ((...e) => {
  const t = Il().createApp(...e), { mount: n } = t;
  return t.mount = (A) => {
    const s = Pl(A);
    if (!s) return;
    const i = t._component;
    !Y(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const r = n(s, !1, Tl(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), r;
  }, t;
});
function Tl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Pl(e) {
  return ne(e) ? document.querySelector(e) : e;
}
const Rl = "zhonglou", Fl = "钟楼", Nl = "1.1.0", Ol = "S", jl = 10, Dl = "【副本进行中：钟楼】", Bl = [], Ll = { briefingName: "钟楼" }, Vl = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, Wl = { type: "nights", template: "剩余{n}夜" }, Gl = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], Yl = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", Hl = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0 }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], Kl = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], Ul = [{ title: "游玩说明", md: `## 副本概况
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
- 1F文具柜：一沓纸、两支铅笔。因为道具栏冻结，这是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], Zl = {
  id: Rl,
  name: Fl,
  version: Nl,
  level: Ol,
  players: jl,
  token: Dl,
  legacyKeys: Bl,
  detect: Ll,
  time: Vl,
  remaining: Wl,
  roles: Gl,
  rolesNote: Yl,
  phases: Hl,
  events: Kl,
  docs: Ul
}, Jl = "jingjie", Ql = "境界游乐园", ql = "1.0.0", Xl = "A", ec = "【副本进行中：境界游乐园】", tc = [], nc = { briefingName: "境界游乐园" }, Ac = { type: "none" }, sc = { type: "fromPanel" }, ic = [], rc = [], oc = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
  id: Jl,
  name: Ql,
  version: ql,
  level: Xl,
  token: ec,
  legacyKeys: tc,
  detect: nc,
  time: Ac,
  remaining: sc,
  phases: ic,
  events: rc,
  docs: oc
}, cc = "kaoshi", ac = "考试", uc = "1.0.0", fc = "A", dc = "【副本进行中：考试】", pc = [], hc = { briefingName: "考试" }, mc = { type: "none" }, gc = { type: "fromPanel" }, xc = [], bc = [], yc = [], vc = {
  id: cc,
  name: ac,
  version: uc,
  level: fc,
  token: dc,
  legacyKeys: pc,
  detect: hc,
  time: mc,
  remaining: gc,
  phases: xc,
  events: bc,
  docs: yc
}, _c = "xiyan", wc = "喜宴", kc = "1.0.0", zc = "D", Sc = "【副本进行中：喜宴】", Ec = [], $c = { briefingName: "喜宴" }, Cc = { type: "none" }, Ic = { type: "fromPanel" }, Mc = [], Tc = [], Pc = [], Rc = {
  id: _c,
  name: wc,
  version: kc,
  level: zc,
  token: Sc,
  legacyKeys: Ec,
  detect: $c,
  time: Cc,
  remaining: Ic,
  phases: Mc,
  events: Tc,
  docs: Pc
}, Fc = "youxi", Nc = "游戏", Oc = "1.0.0", jc = "C", Dc = "【副本进行中：游戏】", Bc = [], Lc = { briefingName: "游戏" }, Vc = { type: "none" }, Wc = { type: "fromPanel" }, Gc = [], Yc = [], Hc = [], Kc = {
  id: Fc,
  name: Nc,
  version: Oc,
  level: jc,
  token: Dc,
  legacyKeys: Bc,
  detect: Lc,
  time: Vc,
  remaining: Wc,
  phases: Gc,
  events: Yc,
  docs: Hc
}, Uc = "wuming", Zc = "污名", Jc = "1.0.0", Qc = "B", qc = "4-8", Xc = "【副本进行中：污名】", ea = ["污名"], ta = { briefingName: "污名" }, na = { type: "countdown", minutesPerRound: 3 }, Aa = { type: "countdown", template: "剩余{m}分钟" }, sa = [{ id: "normal", name: "常规", cap: 50, next: "final" }, { id: "final", name: "定稿", cap: 10, next: null }], ia = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 10, to: 10, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], ra = [], oa = !0, la = {
  id: Uc,
  name: Zc,
  version: Jc,
  level: Qc,
  players: qc,
  token: Xc,
  legacyKeys: ea,
  detect: ta,
  time: na,
  remaining: Aa,
  phases: sa,
  events: ia,
  docs: ra,
  disableLive: oa
}, ca = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`, Cn = "generic", Es = [Zl, lc, vc, Rc, Kc, la], aa = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(ca)
  }
};
function ua(e, t) {
  const n = aa[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const Hi = ["D", "C", "B", "A", "S"];
function Ki(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const A = (l) => {
    (typeof n[l] != "string" || !n[l].trim()) && t.push(`缺少字段或不是文本：${l}`);
  };
  A("id"), A("name"), A("version"), A("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === Cn && t.push(`id 不能是保留字 ${Cn}`), Hi.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((l) => typeof l != "string")) && t.push("legacyKeys 必须是文本数组"), (!n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName) && t.push("缺少 detect.briefingName");
  const s = n.time;
  !s || !["none", "clock", "countdown"].includes(s.type) ? t.push("time.type 必须是 clock、countdown 或 none") : (s.type === "clock" && (typeof s.dayStart != "string" || !/^\d{1,2}:\d{2}$/.test(s.dayStart)) && t.push("time.dayStart 格式应为 HH:MM"), s.type !== "none" && (typeof s.minutesPerRound != "number" || s.minutesPerRound <= 0) && t.push("time.minutesPerRound 必须是正数"));
  const i = n.remaining;
  !i || !["nights", "countdown", "fromPanel"].includes(i.type) ? t.push("remaining.type 必须是 nights、countdown 或 fromPanel") : i.type !== "fromPanel" && typeof i.template != "string" && t.push("remaining.template 必须是文本"), i?.type === "countdown" && s?.type !== "countdown" && t.push("remaining.type 为 countdown 时，time.type 也必须是 countdown"), n.roles !== void 0 && (!Array.isArray(n.roles) || n.roles.some((l) => typeof l != "string" || !l)) && t.push("roles 必须是文本数组");
  const r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  Array.isArray(n.phases) ? (n.phases.forEach((l, a) => {
    if (!l || typeof l.id != "string" || typeof l.name != "string") {
      t.push(`phases[${a}] 缺少 id 或 name`);
      return;
    }
    r.has(l.id) && t.push(`阶段 id 重复：${l.id}`), o.has(l.name) && t.push(`阶段名称重复：${l.name}`), r.add(l.id), o.add(l.name), (typeof l.cap != "number" || l.cap < 1 || !Number.isInteger(l.cap)) && t.push(`阶段 ${l.id} 的 cap 必须是正整数`), l.next !== null && typeof l.next != "string" && t.push(`阶段 ${l.id} 的 next 必须是阶段 id 或 null`);
  }), n.phases.forEach((l) => {
    l && typeof l.next == "string" && !r.has(l.next) && t.push(`阶段 ${l.id} 的 next 指向不存在的阶段：${l.next}`);
  }), n.phases.length && n.phases[0]?.byTag && t.push("第一个阶段不能是 byTag 阶段")) : t.push("phases 必须是数组");
  const c = /* @__PURE__ */ new Set();
  return Array.isArray(n.events) ? n.events.forEach((l, a) => {
    if (!l || typeof l.id != "string" || typeof l.text != "string") {
      t.push(`events[${a}] 缺少 id 或 text`);
      return;
    }
    c.has(l.id) && t.push(`事件 id 重复：${l.id}`), c.add(l.id), r.has(l.phase) || t.push(`事件 ${l.id} 的 phase 不存在：${l.phase}`), (!Number.isInteger(l.from) || !Number.isInteger(l.to) || l.from < 1 || l.to < l.from) && t.push(`事件 ${l.id} 的轮次区间无效`), l.kind !== "event" && l.kind !== "directive" && t.push(`事件 ${l.id} 的 kind 必须是 event 或 directive`), l.if !== void 0 && typeof l.if != "string" && t.push(`事件 ${l.id} 的 if 必须是文本`);
  }) : t.push("events 必须是数组"), Array.isArray(n.docs) ? n.docs.forEach((l, a) => {
    !l || typeof l.title != "string" ? t.push(`docs[${a}] 缺少 title`) : l.md !== void 0 && typeof l.md != "string" ? t.push(`docs[${a}].md 必须是文本`) : l.image !== void 0 && typeof l.image != "string" && t.push(`docs[${a}].image 必须是文本`);
  }) : t.push("docs 必须是数组"), t;
}
function Ui(e) {
  const t = Hi.includes(e.level ?? "") ? e.level : "D";
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
function LA(e) {
  const t = new Set(Es.map((n) => n.id));
  return [...Es, ...e.filter((n) => !t.has(n.id))];
}
function fa(e, t) {
  return e.find((n) => n.detect.briefingName === t);
}
const da = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, pa = /<阶段切换>([\s\S]*?)<\/阶段切换>/, ha = /<副本结算>([\s\S]*?)<\/副本结算>/, ma = /<副本>([\s\S]*?)<\/副本>/, ga = /<角色登记>([\s\S]*?)<\/角色登记>/, xa = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/;
function An(e) {
  const t = da.exec(e ?? "");
  if (!t) return null;
  const n = { name: t[1] }, A = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), s = (r) => {
    const o = new RegExp(`${r}\\s*[：:]\\s*([^」』\\n]+)`).exec(A);
    return o ? o[1].trim() : void 0;
  }, i = s("等级");
  return i && (n.level = i.replace(/级$/, "").trim().toUpperCase()), n.goal = s("目标"), n.limit = s("时限"), n.players = s("人数"), n;
}
function ba(e) {
  const t = pa.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function Zi(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const A = n.search(/[=＝]/);
    if (A < 0) continue;
    const s = n.slice(0, A).trim(), i = n.slice(A + 1).trim();
    s && (t[s] = i);
  }
  return t;
}
function Ji(e) {
  const t = ha.exec(e ?? "");
  if (!t) return null;
  const n = Zi(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function Qi(e) {
  const t = ga.exec(e ?? "");
  if (!t) return null;
  const n = Zi(t[1]);
  return Object.keys(n).length ? n : null;
}
function qi(e) {
  const t = ma.exec(e ?? "");
  if (!t) return null;
  const n = { tasks: [] };
  let A = null;
  for (const s of t[1].split(`
`)) {
    const i = s.trim();
    if (!i) continue;
    const r = /^(时限|进度条|任务|ps|PS|Ps)\s*[：:]\s*(.*)$/.exec(i);
    if (r) {
      const o = r[1].toLowerCase(), c = r[2].trim();
      o === "时限" ? (n.limit = c, A = null) : o === "进度条" ? (n.progressBar = c, A = null) : o === "任务" ? (c && n.tasks.push(c), A = "tasks") : (n.ps = c, A = "ps");
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
function ya(e) {
  const t = xa.exec(e ?? "");
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
function va(e, t, n, A) {
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
const $s = 5, _a = { id: "_open", name: "进行中", cap: 0, next: null };
function st(e) {
  return !!e && !e.is_user && !e.is_system;
}
function wa(e) {
  const [t, n] = e.split(":").map((A) => parseInt(A, 10));
  return (t || 0) * 60 + (n || 0);
}
function Xi(e, t, n) {
  const A = wa(e) + Math.max(0, n - 1) * t, s = Math.floor(A / 60) % 24, i = (A % 60 + 60) % 60;
  return `${s % 12 === 0 ? 12 : s % 12}:${String(i).padStart(2, "0")}`;
}
function Cs(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return Xi(e.time.dayStart, e.time.minutesPerRound, n);
}
function er(e) {
  return e.phases.length ? e.phases : [_a];
}
function gt(e, t) {
  return er(e).find((n) => n.id === t);
}
function Is(e, t, n) {
  const A = /* @__PURE__ */ new Set();
  let s = t;
  for (; s && !A.has(s.id); ) {
    if (s.id === n) return !0;
    A.add(s.id), s = gt(e, s.next);
  }
  return !1;
}
function Ms(e, t, n, A) {
  const s = n + 1, i = e.events.filter((r) => r.phase === t.id);
  if (A) {
    const r = t.id === A.phase ? A.round : t.cap;
    if (r > s) {
      let o = i.map((l, a) => ({ e: l, i: a })).filter(({ e: l }) => l.from >= s && l.from <= r).sort((l, a) => l.e.from - a.e.from || l.i - a.i).map(({ e: l }) => l), c = r;
      return o.length > $s && (c = o[$s - 1].from, o = o.filter((l) => l.from <= c)), { phase: t, round: c, events: o, skipFrom: s };
    }
  }
  return { phase: t, round: s, events: i.filter((r) => r.from === s) };
}
function tr(e, t) {
  const n = /* @__PURE__ */ new Set();
  let A = 0, s = t;
  for (; s && !n.has(s.id); )
    s.night && A++, n.add(s.id), s = gt(e, s.next);
  return A;
}
function nr(e, t, n) {
  if (e.time.type !== "countdown" || t.cap <= 0) return;
  let A = Math.max(0, t.cap - n);
  const s = /* @__PURE__ */ new Set([t.id]);
  let i = gt(e, t.next);
  for (; i && !s.has(i.id); )
    A += Math.max(0, i.cap), s.add(i.id), i = gt(e, i.next);
  return A * e.time.minutesPerRound;
}
function Ar(e, t, n) {
  if (!e.phases.some((s) => s.id === t.id)) return;
  const A = e.remaining;
  if (A.type === "nights" && !t.byTag && !t.frozen) return A.template.replace("{n}", String(tr(e, t)));
  if (A.type === "countdown") {
    const s = nr(e, t, n);
    if (s !== void 0) return A.template.replace("{m}", String(s));
  }
  if (t.cap > 0) return `${t.name}剩余${Math.max(0, t.cap - n)}轮`;
}
function ka(e, t, n) {
  const A = t.entryIndex;
  if (!st(e[A])) return null;
  const s = er(n);
  let i = s[0], r = 0, o = !1, c, l = null, a, d, p;
  const h = /* @__PURE__ */ new Set(), I = {}, $ = /* @__PURE__ */ new Map();
  for (const U of t.manual ?? [])
    $.has(U.atIndex) || $.set(U.atIndex, []), $.get(U.atIndex).push(U);
  const B = (U) => {
    i = U, r = 0, l && !Is(n, i, l.phase) && (l = null);
  };
  for (let U = A; U < e.length; U++) {
    const zt = e[U];
    if (!o && st(zt)) {
      const Ae = Ms(n, i, r, l);
      r = Ae.round, Ae.events.forEach((He) => h.add(He.id)), I[U] = { phase: i.id, round: r, events: Ae.events.map((He) => He.id), skipFrom: Ae.skipFrom }, l && i.id === l.phase && r >= l.round && (l = null);
      const ve = String(zt.mes ?? ""), ln = qi(ve);
      ln && (d = ln);
      const cn = Qi(ve);
      cn && (p = cn);
      const Rt = Ji(ve);
      if (Rt)
        o = !0, c = "tag", a = Rt;
      else {
        const He = ba(ve), Ft = He ? s.find((Ke) => Ke.name === He) : void 0;
        if (Ft && n.phases.length)
          B(Ft);
        else if (i.cap > 0 && r >= i.cap && i.next) {
          const Ke = gt(n, i.next);
          Ke && B(Ke);
        }
      }
    }
    for (const Ae of $.get(U) ?? []) {
      if (o) break;
      switch (Ae.kind) {
        case "skip": {
          l = gt(n, Ae.targetPhase) && Is(n, i, Ae.targetPhase) ? { phase: Ae.targetPhase, round: Ae.targetRound } : null;
          break;
        }
        case "setPhase": {
          const ve = gt(n, Ae.phase);
          ve && (l = null, B(ve));
          break;
        }
        case "setRound":
          r = Math.max(0, Math.floor(Ae.round)), l = null;
          break;
        case "end":
          o = !0, c = "manual";
          break;
      }
    }
  }
  const L = o ? null : Ms(n, i, r, l), O = L ? L.round : r + 1, W = i.cap > 0, F = n.events.filter((U) => h.has(U.id)).map((U) => U.id);
  let ee, he;
  const ue = n.remaining;
  if (!o && ue.type === "nights" && n.phases.length && !i.byTag && !i.frozen)
    ee = he = ue.template.replace("{n}", String(tr(n, i)));
  else if (!o && ue.type === "countdown" && n.phases.length) {
    const U = (zt) => {
      const Ae = nr(n, i, zt);
      return Ae === void 0 ? void 0 : ue.template.replace("{m}", String(Ae));
    };
    ee = U(O), he = U(r);
  }
  return {
    phase: i,
    round: r,
    nextRound: O,
    clock: o ? void 0 : Cs(n, i, O),
    currentClock: Cs(n, i, r),
    remainingText: ee,
    currentRemainingText: he,
    limitText: o ? void 0 : Ar(n, i, O),
    ended: o,
    endedBy: c,
    firedEvents: F,
    warn: !o && W && O >= i.cap - 2,
    isLastRound: !o && W && O === i.cap,
    overdue: !o && W && !i.next && O > i.cap,
    next: L,
    skipGoal: l,
    settlement: a,
    panel: d,
    rolesFromChat: p,
    perMessage: I,
    entryIndex: A
  };
}
const sr = "rlzc_token", ir = "rlzc_progress", rr = "rlzc_turn", za = [sr, ir, rr], Yn = { token: "", progress: "", turn: "", injected: [] };
function Sa(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ts(e, t, n) {
  const A = t.roles ?? [];
  if (!A.length) return e;
  const s = new RegExp(`(?<!\\{)\\{(${A.map(Sa).join("|")})\\}(?!\\})`, "g");
  return e.replace(s, (i, r) => n?.[r]?.trim() || r);
}
function Ea(e, t) {
  if (!t.length) return "";
  const n = e.events.map((c) => c.id), A = t.map((c) => n.indexOf(c)).filter((c) => c >= 0).sort((c, l) => c - l), s = [];
  let i = A[0], r = A[0];
  const o = () => s.push(i === r ? n[i] : `${n[i]}–${n[r]}`);
  for (let c = 1; c < A.length; c++) {
    if (A[c] === r + 1) {
      r = A[c];
      continue;
    }
    o(), i = r = A[c];
  }
  return o(), s.join("、");
}
function Ps(e, t, n) {
  let A = Ts(e.text, t, n);
  return e.to > e.from && (A = `在本阶段第${e.from}到${e.to}轮之间发生：${A}`), e.if && (A += `（条件：${Ts(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${A}`;
}
function $a(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function Ca(e, t, n, A = {}) {
  if (!t || !n || t.ended || n.status !== "active") return Yn;
  const s = A.roles, i = e.phases.length > 0, r = t.next, o = [`副本：${e.name}（${e.level}级）`];
  if (i ? (o.push(`阶段：${t.phase.name}`), o.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`)) : o.push(`本轮：第${t.nextRound}轮`), t.clock && o.push(`钟时：${t.clock}`), t.remainingText) o.push(t.remainingText);
  else {
    const h = A.panelLimit || A.briefing?.limit;
    h && o.push(`时限：${h}`);
  }
  const c = ["［副本进度·仅供AI］", o.join("　")];
  if (!i && A.briefing?.goal && c.push(`目标：${A.briefing.goal}`), e.roles?.length) {
    const h = e.roles.filter((I) => s?.[I]);
    c.push(
      h.length ? `角色登记：${e.roles.map((I) => `${I}=${s?.[I] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const l = Ea(e, t.firedEvents);
  l && c.push(`已发生事件：${l}`);
  const a = [];
  r.skipFrom !== void 0 && a.push(`玩家选择快进：本轮从「${t.phase.name}」第${r.skipFrom}轮快进到第${r.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const d = r.events.filter((h) => h.kind === "event"), p = r.events.filter((h) => h.kind === "directive");
  if (d.length && (a.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), d.forEach((h) => a.push(Ps(h, e, s)))), p.length && (a.push("本轮写作要求："), p.forEach((h) => a.push(Ps(h, e, s)))), t.isLastRound ? a.push($a(t)) : t.overdue && a.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), A.audit?.missingLast && a.push("上一轮缺少<副本>面板，本轮必须完整输出。"), A.audit && !A.audit.hasPanel && a.push("本轮<副本>的进度条写0。"), t.limitText && a.push(`本轮<副本>的时限一栏写：${t.limitText}`), e.roles?.length && !e.roles.some((h) => s?.[h])) {
    let h = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((I) => `${I}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && (h += "死者不得是{{user}}或其同伴。"), a.push(h);
  }
  return {
    token: e.token,
    progress: c.join(`
`),
    turn: a.length ? ["［本轮指令·仅供AI］", ...a].join(`
`) : "",
    injected: r.events.map((h) => h.id)
  };
}
const _A = "rlzc", or = "rlzc_memo";
function Ia() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function Ma(e, t, n) {
  return {
    id: Ia(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function Ta(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function Pa(e, t) {
  return e.packId === Cn ? e.briefing ? Ui(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function Ra(e, t) {
  const n = (A) => !!A && !A.is_user && A.extra?.rlzc?.entry === t.id;
  if (!t.id) {
    const A = e[t.entryIndex];
    return A && !A.is_user && !A.is_system ? t.entryIndex : -1;
  }
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let A = e.length - 1; A >= 0; A--) if (n(e[A])) return A;
  return -1;
}
function Fa(e, t) {
  const n = Ra(e, t);
  if (n < 0) return !1;
  const A = n - t.entryIndex;
  return A !== 0 && (t.entryIndex = n, t.manual = t.manual.map((s) => ({ ...s, atIndex: s.atIndex + A }))), t.manual = t.manual.filter((s) => s.atIndex < e.length && s.atIndex >= t.entryIndex), !0;
}
function lr(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const Jt = "rlzc_declined";
function wA(e, t) {
  return `${e}:${t}`;
}
function Na(e, t, n = []) {
  if (t?.status === "active") return null;
  const A = e.findIndex((i) => !!i && !i.is_user && !i.is_system);
  if (A < 0 || t && t.entryIndex === A) return null;
  const s = An(String(e[A].mes ?? ""));
  return !s || n.includes(wA(A, s.name)) ? null : { index: A, info: s };
}
const Oa = 1, ja = 0;
function ye() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function Da() {
  const e = ye();
  return e.eventTypes ?? e.event_types ?? {};
}
function Ue(e, t) {
  const n = Da()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  ye().eventSource.on(n, t);
}
function pe() {
  return ye().chat ?? [];
}
function VA() {
  const e = ye();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function Pt() {
  return ye().chatMetadata ?? {};
}
function on() {
  const e = ye();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function bn(e, t, n, A) {
  ye().setExtensionPrompt(e, t, Oa, n, A, ja);
}
function it(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Ye(e) {
  const t = ye();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
const Tt = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function cr(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function Ba(e, t = Tt) {
  return t.length ? e.replace(cr(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
function ar(e, t = Tt, n = !1) {
  const A = pe()[e];
  if (!A || A.is_user) return;
  const s = String(A.extra?.display_text ?? A.mes ?? "");
  if (!cr(n ? Tt : t, "").test(s)) return;
  const i = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!i) return;
  const r = ye().messageFormatting;
  if (typeof r != "function") return;
  const o = r(Ba(s, t), A.name ?? "", !!A.is_system, !1, e);
  i.innerHTML !== o && (i.innerHTML = o);
}
function La(e = Tt, t = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((n) => {
    const A = Number(n.getAttribute("mesid"));
    Number.isFinite(A) && ar(A, e, t);
  });
}
const Va = /[■█▰●◆★▮▓]/g, Wa = /[□░▱○◇☆▯▒]/g;
function Ga(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const i = Number(n[2]);
    return i === 100 ? Number(n[1]) : i > 0 ? Math.round(Number(n[1]) / i * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const A = (t.match(Va) ?? []).length, s = (t.match(Wa) ?? []).length;
  return A + s > 0 ? Math.round(A / (A + s) * 100) : null;
}
function Rs(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function Ya(e, t) {
  return Rs(e).includes(Rs(t));
}
function Ha(e, t, n) {
  const A = [], s = Object.keys(n.perMessage).map(Number).sort((c, l) => c - l);
  let i = !1, r = null, o = !1;
  for (const c of s) {
    const l = n.perMessage[c], a = t.phases.find((L) => L.id === l.phase), d = a?.name ?? "进行中", p = (L, O) => A.push({ index: c, phase: d, round: l.round, kind: L, text: O }), h = qi(String(e[c]?.mes ?? "")), I = c === n.entryIndex;
    if (!h) {
      I || p("missing", "本轮回复缺少 <副本> 面板"), o = !I;
      continue;
    }
    o = !1;
    const $ = Ga(h.progressBar);
    h.progressBar === void 0 ? p("progressUnreadable", "<副本> 中没有进度条一栏") : $ === null ? p("progressUnreadable", `进度条无法读出数值：「${h.progressBar}」`) : (!i && $ !== 0 && p("progressStart", `入场后第一轮的进度条应为0，实际为 ${$}`), ($ < 0 || $ > 100) && p("progressRange", `进度条数值 ${$} 超出 0–100`), r !== null && $ < r && p("progressDrop", `进度条比上一轮低：${r} → ${$}`), r = $), i = !0;
    const B = a ? Ar(t, a, l.round) : void 0;
    B && (h.limit ? Ya(h.limit, B) || p("limit", `时限与计算值不一致：写的是「${h.limit}」，应为「${B}」`) : p("limit", `<副本> 中没有时限一栏，应为「${B}」`));
  }
  return { warnings: A, missingLast: o, hasPanel: i };
}
const kA = "rlzc", yn = {
  depths: { token: 4, progress: 4, turn: 0 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel"
}, m = /* @__PURE__ */ Dn({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
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
function ur(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ka(...e) {
  m.settings.debug && console.log("[rlzc]", ...e);
}
function Ua() {
  const e = ye().extensionSettings, t = e[kA] ?? {}, n = {
    ...structuredClone(yn),
    ...t,
    depths: { ...yn.depths, ...t.depths ?? {} },
    ball: { ...yn.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((A) => Ki(A).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel"
  };
  e[kA] = n, m.settings = n, m.packs = LA(n.customPacks);
}
function rt() {
  ye().extensionSettings[kA] = JSON.parse(JSON.stringify(m.settings)), ye().saveSettingsDebounced(), m.packs = LA(m.settings.customPacks);
}
function Za(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = Ki(t);
  if (n.length) return n;
  const A = t;
  return LA([]).some((s) => s.id === A.id) ? [`id「${A.id}」与内置副本包重复`] : (m.settings.customPacks = [...m.settings.customPacks.filter((s) => s.id !== A.id), A], rt(), []);
}
function Ja(e) {
  m.settings.customPacks = m.settings.customPacks.filter((t) => t.id !== e), rt();
}
function wt() {
  return Ta(Pt()[_A]);
}
function yt(e) {
  const t = Pt();
  e ? t[_A] = JSON.parse(JSON.stringify(e)) : delete t[_A], on();
}
function WA(e) {
  const t = wt();
  t && (e(t), yt(t), kt());
}
function Qa(e) {
  const t = pe();
  return (e === "swipe" || e === "continue") && st(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function In(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = Pa(t, m.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const A = ka(e, t, n);
  return { session: t, pack: n, progress: A, audit: A ? Ha(e, n, A) : null };
}
function kt() {
  const e = pe();
  let t = wt();
  if (t) {
    const A = JSON.stringify(t);
    if (!Fa(e, t))
      yt(null), it("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const s = In(e, t);
      s.progress && (t.status = s.progress.ended ? "ended" : "active"), JSON.stringify(t) !== A && yt(t);
    }
  }
  const n = In(e, t);
  m.session = n.session, m.pack = n.pack, m.progress = n.progress, m.audit = n.audit, m.tick++;
}
function qa() {
  if (m.session)
    return lr(m.session, m.progress?.rolesFromChat);
}
function Mn() {
  for (const e of za) bn(e, "", 0, !1);
}
let GA = -1;
function Xa(e) {
  const t = Qa(e), n = wt(), { pack: A, progress: s, audit: i } = In(t, n), r = n ? lr(n, s?.rolesFromChat) : void 0, o = A ? Ca(A, s, n, { roles: r, briefing: n?.briefing, panelLimit: s?.panel?.limit, audit: i ?? void 0 }) : Yn;
  Mn();
  const c = m.settings.depths;
  o.token && bn(sr, o.token, c.token, !0), o.progress && bn(ir, o.progress, c.progress, !1), o.turn && bn(rr, o.turn, c.turn, !1), m.lastInjection = o, GA = t.length, Ka("注入", e, o);
}
const zA = /* @__PURE__ */ new Set();
async function eu() {
  const e = pe(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const A = ya(n.mes);
  if (!A) return;
  const s = wt();
  if (!s || s.status !== "active" || s.manual.some((l) => l.kind === "skip" && l.atIndex === t)) return;
  const i = `${VA()}:${t}:${n.mes}`;
  if (zA.has(i)) return;
  zA.add(i);
  const { pack: r, progress: o } = In(e, s);
  if (!r || !o || o.ended) return;
  const c = va(r, o.phase, o.round, A);
  c && await Ye(`是否跳到${A}？（${c.label}）`) && (s.manual.push({ kind: "skip", atIndex: t, targetPhase: c.phase, targetRound: c.round }), yt(s));
}
async function tu(e, t, n, A) {
  try {
    if (A === "quiet" || A === "impersonate") {
      Mn();
      return;
    }
    A !== "continue" && A !== "swipe" && A !== "regenerate" && await eu(), Xa(A);
  } catch (s) {
    console.error("[rlzc] 拦截器出错", s), Mn();
  }
}
const Fs = /* @__PURE__ */ new Set();
async function fr(e, t = !1) {
  const A = pe()[e], s = An(A?.mes ?? "");
  if (!s) return;
  const i = `${VA()}:${e}:${s.name}`;
  if (Fs.has(i)) return;
  Fs.add(i);
  const r = fa(m.packs, s.name), o = r ? `检测到进入《${r.name}》，是否启用？` : `检测到进入《${s.name}》，是否启用？（未收录的副本，将使用通用副本包）`;
  if (!await Ye(o)) {
    if (t) {
      const l = Pt(), a = Array.isArray(l[Jt]) ? l[Jt] : [];
      l[Jt] = [...a.filter((d) => d !== wA(e, s.name)), wA(e, s.name)], on();
    }
    return;
  }
  const c = pe()[e];
  if (!st(c) || An(c.mes)?.name !== s.name) {
    it("warning", "简报消息已变化，未启用。");
    return;
  }
  dr(r ?? Ui(s), e, s);
}
function YA() {
  const e = Pt(), t = Array.isArray(e[Jt]) ? e[Jt] : [], n = Na(pe(), wt(), t);
  n && fr(n.index, !0);
}
function nu(e) {
  kt();
  const t = pe().findIndex((n) => st(n));
  e === t && YA();
}
function dr(e, t, n) {
  const s = pe()[t], i = Ma(e, t, n);
  s.extra = s.extra ?? {}, s.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: i.id }, yt(i), kt(), m.progress && (s.extra.rlzc.injected = ur(m.progress.perMessage[t]?.events ?? [])), on(), it("success", `已进入副本《${e.name}》。`);
}
async function Au(e) {
  const t = m.packs.find((i) => i.id === e);
  if (!t) return;
  const n = pe();
  let A = n.length - 1;
  for (; A >= 0 && !st(n[A]); ) A--;
  if (A < 0) {
    it("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  wt()?.status === "active" && !await Ye("当前已有进行中的副本，确定要替换吗？") || await Ye(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`) && dr(t, A, An(n[A].mes) ?? { name: t.name });
}
function Hn(e) {
  WA((t) => t.manual.push(e));
}
function Kn() {
  return pe().length - 1;
}
async function Ns() {
  const e = m.progress;
  if (!(!e || e.ended || !m.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      it("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Ye(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (Hn({ kind: "skip", atIndex: Kn(), targetPhase: e.phase.id, targetRound: e.phase.cap }), it("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function Os() {
  !m.session || m.progress?.ended || await Ye("确定要手动结束当前副本吗？") && Hn({ kind: "end", atIndex: Kn() });
}
function su(e) {
  Hn({ kind: "setPhase", atIndex: Kn(), phase: e });
}
function iu(e) {
  Hn({ kind: "setRound", atIndex: Kn(), round: e });
}
function ru(e) {
  WA((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function ou(e) {
  WA((t) => t.manual.splice(e, 1));
}
async function js() {
  m.session && await Ye("确定要删除当前副本会话吗？（不会改动聊天记录）") && (yt(null), kt());
}
function Ds(e) {
  m.memo = e, Pt()[or] = e, on();
}
function lu(e) {
  const t = pe(), n = t[e];
  if (!st(n)) return;
  const A = wt();
  if ((!A || A.status === "ended") && An(n.mes)) {
    e === t.findIndex((o) => st(o)) ? YA() : fr(e);
    return;
  }
  if (!A) return;
  const s = Qi(n.mes);
  s && (A.roles = { ...A.roles ?? {}, ...s }), yt(A), kt();
  const i = m.progress?.perMessage[e];
  if (i && m.pack) {
    const o = m.pack.phases.find((d) => d.id === i.phase), c = {
      phase: o?.name ?? i.phase,
      round: i.round,
      injected: GA === e ? m.lastInjection.injected : i.events
    }, l = m.pack.time;
    l.type === "clock" && o?.clock && !o.night && !o.frozen && (c.clock = Xi(l.dayStart, l.minutesPerRound, i.round));
    const a = n.extra?.rlzc?.entry;
    a && (c.entry = a), n.extra = n.extra ?? {}, n.extra.rlzc = ur(c), on();
  }
  const r = Ji(n.mes);
  r && it("info", `副本结算：${r.result ?? "—"}${r.rating ? `，评价 ${r.rating}` : ""}`);
}
function Bs() {
  zA.clear(), GA = -1, m.chatId = VA(), m.debugUnlocked = !1, m.lastInjection = Yn, Mn();
  const e = Pt()[or];
  m.memo = typeof e == "string" ? e : "", kt(), YA(), setTimeout(() => HA(), 50);
}
function cA() {
  kt();
}
function pr() {
  return m.settings.panelDisplay === "statusbar" ? Tt.filter((e) => e !== "副本") : Tt;
}
function aA(e) {
  ar(e, pr());
}
function HA(e = !1) {
  La(pr(), e);
}
function cu(e) {
  m.settings.panelDisplay !== e && (m.settings.panelDisplay = e, rt(), HA(!0));
}
const au = { class: "rlzc-ball-mark" }, uA = 44, uu = /* @__PURE__ */ ot({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ Fe({ x: 0, y: 0 });
    let n = null;
    function A(a, d) {
      const p = window.innerWidth - uA - 4, h = window.innerHeight - uA - 4;
      return { x: Math.min(Math.max(4, a), p), y: Math.min(Math.max(4, d), h) };
    }
    function s() {
      const a = m.settings.ball;
      t.value = A(a.x ?? window.innerWidth - uA - 12, a.y ?? Math.round(window.innerHeight * 0.35));
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
      n = null, d ? (m.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, rt()) : m.panelOpen = !m.panelOpen;
    }
    const c = se(() => !!m.session && !m.progress?.ended), l = se(() => !!m.progress?.warn);
    return bt(() => m.settings.ball, s, { deep: !0 }), yo(() => {
      s(), window.addEventListener("resize", s);
    }), zi(() => window.removeEventListener("resize", s)), (a, d) => (S(), C("button", {
      class: _t(["rlzc-ball", { "is-active": c.value, "is-warn": l.value }]),
      style: On({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: i,
      onPointermove: r,
      onPointerup: o,
      onPointercancel: o
    }, [
      g("span", au, P(c.value ? M(m).pack?.level ?? "副" : "廊"), 1)
    ], 38));
  }
}), fu = { class: "rlzc-system" }, du = { class: "rlzc-card rlzc-hero" }, pu = { class: "rlzc-hero-top" }, hu = { class: "rlzc-level" }, mu = {
  key: 0,
  class: "rlzc-chip"
}, gu = {
  key: 0,
  class: "rlzc-goal"
}, xu = { class: "rlzc-grid" }, bu = {
  key: 0,
  class: "rlzc-stat"
}, yu = {
  key: 1,
  class: "rlzc-stat"
}, vu = {
  key: 2,
  class: "rlzc-stat"
}, _u = {
  key: 0,
  class: "rlzc-note"
}, wu = {
  key: 1,
  class: "rlzc-card"
}, ku = { class: "rlzc-kv" }, zu = { class: "rlzc-kv" }, Su = {
  key: 2,
  class: "rlzc-note"
}, Eu = {
  key: 3,
  class: "rlzc-card"
}, $u = {
  key: 0,
  class: "rlzc-kv"
}, Cu = { class: "rlzc-mono" }, Iu = {
  key: 1,
  class: "rlzc-tasks"
}, Mu = {
  key: 2,
  class: "rlzc-ps"
}, Tu = { class: "rlzc-actions" }, Pu = ["disabled"], Ru = ["disabled"], Fu = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, Nu = { class: "rlzc-card" }, Ou = { class: "rlzc-row" }, ju = ["value"], Du = ["disabled"], Bu = /* @__PURE__ */ ot({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ Fe(""), n = se(() => !!m.session && !!m.pack), A = se(() => m.progress), s = se(() => !!m.pack?.phases.length), i = se(() => m.settings.panelDisplay !== "statusbar"), r = se(() => {
      const a = A.value;
      return a ? s.value ? `${a.warn ? "⚠️ " : ""}${a.round}/${a.phase.cap}` : `第${a.round}轮` : "";
    }), o = se(() => {
      const a = A.value;
      return a ? m.pack?.remaining.type !== "fromPanel" && a.currentRemainingText ? a.currentRemainingText : a.panel?.limit || m.session?.briefing?.limit || "—" : "";
    }), c = se(() => {
      const a = A.value;
      return !!a && !a.ended && s.value && a.phase.cap > 0 && a.nextRound < a.phase.cap;
    });
    async function l() {
      t.value && (await Au(t.value), t.value = "");
    }
    return (a, d) => (S(), C("div", fu, [
      n.value && A.value ? (S(), C(J, { key: 0 }, [
        g("div", du, [
          g("div", pu, [
            g("span", hu, P(M(m).pack.level), 1),
            g("h3", null, P(M(m).pack.name), 1),
            A.value.ended ? (S(), C("span", mu, "已结束")) : X("", !0)
          ]),
          M(m).session?.briefing?.goal ? (S(), C("p", gu, "目标：" + P(M(m).session.briefing.goal), 1)) : X("", !0)
        ]),
        g("div", xu, [
          s.value ? (S(), C("div", bu, [
            d[3] || (d[3] = g("span", null, "阶段", -1)),
            g("b", null, P(A.value.phase.name), 1)
          ])) : X("", !0),
          g("div", {
            class: _t(["rlzc-stat", { warn: A.value.warn }])
          }, [
            d[4] || (d[4] = g("span", null, "轮次", -1)),
            g("b", null, P(r.value), 1)
          ], 2),
          A.value.currentClock ? (S(), C("div", yu, [
            d[5] || (d[5] = g("span", null, "钟时", -1)),
            g("b", null, P(A.value.currentClock), 1)
          ])) : X("", !0),
          i.value ? (S(), C("div", vu, [
            d[6] || (d[6] = g("span", null, "剩余时间", -1)),
            g("b", null, P(o.value), 1)
          ])) : X("", !0)
        ]),
        A.value.skipGoal ? (S(), C("div", _u, "快进中：目标 " + P(M(m).pack.phases.find((p) => p.id === A.value.skipGoal.phase)?.name) + " 第" + P(A.value.skipGoal.round) + "轮", 1)) : X("", !0),
        A.value.ended && A.value.settlement ? (S(), C("div", wu, [
          g("div", ku, [
            d[7] || (d[7] = g("span", null, "结果", -1)),
            g("b", null, P(A.value.settlement.result ?? "—"), 1)
          ]),
          g("div", zu, [
            d[8] || (d[8] = g("span", null, "评价", -1)),
            g("b", null, P(A.value.settlement.rating ?? "—"), 1)
          ])
        ])) : A.value.ended ? (S(), C("div", Su, "副本已手动结束。")) : X("", !0),
        i.value && A.value.panel ? (S(), C("div", Eu, [
          A.value.panel.progressBar ? (S(), C("div", $u, [
            d[9] || (d[9] = g("span", null, "进度", -1)),
            g("b", Cu, P(A.value.panel.progressBar), 1)
          ])) : X("", !0),
          A.value.panel.tasks.length ? (S(), C("div", Iu, [
            d[10] || (d[10] = g("span", null, "任务", -1)),
            g("ul", null, [
              (S(!0), C(J, null, me(A.value.panel.tasks, (p, h) => (S(), C("li", { key: h }, P(p), 1))), 128))
            ])
          ])) : X("", !0),
          A.value.panel.ps ? (S(), C("div", Mu, "ps：" + P(A.value.panel.ps), 1)) : X("", !0)
        ])) : X("", !0),
        g("div", Tu, [
          g("button", {
            class: "rlzc-btn",
            disabled: !c.value,
            onClick: d[0] || (d[0] = //@ts-ignore
            (...p) => M(Ns) && M(Ns)(...p))
          }, "跳过（到本阶段结束）", 8, Pu),
          g("button", {
            class: "rlzc-btn ghost",
            disabled: A.value.ended,
            onClick: d[1] || (d[1] = //@ts-ignore
            (...p) => M(Os) && M(Os)(...p))
          }, "手动结束副本", 8, Ru)
        ])
      ], 64)) : (S(), C("div", Fu, [...d[11] || (d[11] = [
        g("h3", null, "休整中", -1),
        g("p", null, "当前在回廊里，没有进行中的副本，也不会注入任何提示词。", -1)
      ])])),
      g("div", Nu, [
        d[13] || (d[13] = g("label", { class: "rlzc-label" }, "手动选择副本（以最新一条AI回复为第1轮）", -1)),
        g("div", Ou, [
          Ct(g("select", {
            "onUpdate:modelValue": d[2] || (d[2] = (p) => t.value = p),
            class: "rlzc-input"
          }, [
            d[12] || (d[12] = g("option", { value: "" }, "选择副本…", -1)),
            (S(!0), C(J, null, me(M(m).packs, (p) => (S(), C("option", {
              key: p.id,
              value: p.id
            }, P(p.level) + "｜" + P(p.name), 9, ju))), 128))
          ], 512), [
            [BA, t.value]
          ]),
          g("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: l
          }, "进入", 8, Du)
        ])
      ])
    ]));
  }
});
function Lu(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Lt(e) {
  return Lu(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function Vu(e) {
  const t = [];
  let n = null, A = [];
  const s = () => {
    A.length && t.push(`<p>${A.map(Lt).join("<br>")}</p>`), A = [];
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
    const c = /^(#{1,4})\s+(.*)$/.exec(o);
    if (c) {
      s(), i();
      const p = Math.min(c[1].length + 2, 6);
      t.push(`<h${p}>${Lt(c[2])}</h${p}>`);
      continue;
    }
    const l = /^\s*[-*]\s+(.*)$/.exec(o), a = /^\s*(\d+)[.、]\s+(.*)$/.exec(o);
    if (l || a) {
      s();
      const p = l ? "ul" : "ol", h = l ? l[1] : a[2];
      n !== p ? (i(), n = p, t.push(p === "ol" ? `<ol start="${a[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(Lt(h));
      continue;
    }
    if (n && /^\s{2,}/.test(r)) {
      t.push(`<br>${Lt(o.trim())}`);
      continue;
    }
    const d = /^>\s?(.*)$/.exec(o);
    if (d) {
      s(), i(), t.push(`<blockquote>${Lt(d[1])}</blockquote>`);
      continue;
    }
    i(), A.push(o);
  }
  return s(), i(), t.join("");
}
const Wu = { class: "rlzc-docs" }, Gu = {
  key: 0,
  class: "rlzc-row"
}, Yu = ["value"], Hu = { class: "rlzc-subtabs" }, Ku = ["onClick"], Uu = { class: "rlzc-md" }, Zu = ["innerHTML"], Ju = ["src", "alt"], Qu = {
  key: 2,
  class: "rlzc-note"
}, qu = {
  key: 2,
  class: "rlzc-note"
}, Xu = /* @__PURE__ */ ot({
  __name: "DocsTab",
  setup(e) {
    const t = se(() => !!m.session && !!m.pack), n = se(() => t.value ? [m.pack] : m.packs.filter((l) => l.docs?.length)), A = /* @__PURE__ */ Fe(""), s = /* @__PURE__ */ Fe(0);
    bt(
      n,
      (l) => {
        l.some((a) => a.id === A.value) || (A.value = l[0]?.id ?? "");
      },
      { immediate: !0 }
    ), bt(A, () => s.value = 0);
    const i = se(() => n.value.find((l) => l.id === A.value)), r = se(() => i.value?.docs?.[s.value]), o = se(() => r.value?.md ? Vu(r.value.md) : ""), c = se(() => i.value && r.value?.image ? ua(i.value, r.value.image) : null);
    return (l, a) => (S(), C("div", Wu, [
      !t.value && n.value.length > 1 ? (S(), C("div", Gu, [
        Ct(g("select", {
          "onUpdate:modelValue": a[0] || (a[0] = (d) => A.value = d),
          class: "rlzc-input"
        }, [
          (S(!0), C(J, null, me(n.value, (d) => (S(), C("option", {
            key: d.id,
            value: d.id
          }, P(d.name), 9, Yu))), 128))
        ], 512), [
          [BA, A.value]
        ])
      ])) : X("", !0),
      i.value && i.value.docs?.length ? (S(), C(J, { key: 1 }, [
        g("div", Hu, [
          (S(!0), C(J, null, me(i.value.docs, (d, p) => (S(), C("button", {
            key: p,
            class: _t({ on: s.value === p }),
            onClick: (h) => s.value = p
          }, P(d.title), 11, Ku))), 128))
        ]),
        g("article", Uu, [
          o.value ? (S(), C("div", {
            key: 0,
            innerHTML: o.value
          }, null, 8, Zu)) : X("", !0),
          c.value ? (S(), C("img", {
            key: 1,
            src: c.value,
            alt: r.value?.title,
            class: "rlzc-img"
          }, null, 8, Ju)) : r.value?.image && !c.value ? (S(), C("p", Qu, "图片无法加载：" + P(r.value.image), 1)) : X("", !0)
        ])
      ], 64)) : (S(), C("p", qu, P(t.value ? "本副本没有公开资料" : "暂无可浏览的副本资料。"), 1))
    ]));
  }
}), ef = { class: "rlzc-memo" }, tf = { class: "rlzc-hint" }, nf = /* @__PURE__ */ ot({
  __name: "MemoTab",
  setup(e) {
    const t = /* @__PURE__ */ Fe(m.memo), n = /* @__PURE__ */ Fe(!0);
    let A;
    bt(() => m.memo, (i) => {
      i !== t.value && (t.value = i);
    }), bt(() => m.chatId, () => {
      clearTimeout(A), n.value = !0, t.value = m.memo;
    }), zi(() => {
      clearTimeout(A), n.value || Ds(t.value);
    });
    function s() {
      n.value = !1, clearTimeout(A), A = setTimeout(() => {
        Ds(t.value), n.value = !0;
      }, 600);
    }
    return (i, r) => (S(), C("div", ef, [
      Ct(g("textarea", {
        "onUpdate:modelValue": r[0] || (r[0] = (o) => t.value = o),
        class: "rlzc-input rlzc-textarea",
        placeholder: "记点什么……（按聊天保存，不会发给AI）",
        onInput: s
      }, null, 544), [
        [vA, t.value]
      ]),
      g("div", tf, P(n.value ? "已自动保存" : "保存中…"), 1)
    ]));
  }
}), Af = { class: "rlzc-settings" }, sf = { class: "rlzc-card" }, rf = ["value"], of = { class: "rlzc-hint" }, lf = { class: "rlzc-card" }, cf = { class: "rlzc-field" }, af = ["value"], uf = { class: "rlzc-field" }, ff = ["value"], df = { class: "rlzc-field" }, pf = ["value"], hf = { class: "rlzc-card" }, mf = {
  key: 0,
  class: "rlzc-list"
}, gf = ["onClick"], xf = {
  key: 1,
  class: "rlzc-hint"
}, bf = {
  key: 2,
  class: "rlzc-errors"
}, yf = { class: "rlzc-card" }, vf = { class: "rlzc-check" }, _f = ["checked"], wf = { class: "rlzc-check" }, kf = ["checked"], zf = /* @__PURE__ */ ot({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ Fe([]), n = /* @__PURE__ */ Fe(null);
    function A(c, l) {
      const a = Math.max(0, Math.min(1e4, Math.floor(Number(l.target.value) || 0)));
      m.settings.depths[c] = a, rt();
    }
    async function s(c) {
      const l = c.target, a = l.files?.[0];
      l.value = "", a && (t.value = Za(await a.text()), t.value.length || it("success", `已导入副本包：${a.name}`));
    }
    async function i(c, l) {
      await Ye(`确定删除自定义副本包《${l}》吗？`) && Ja(c);
    }
    function r(c) {
      cu(c.target.value);
    }
    function o(c, l) {
      m.settings[c] = l.target.checked, rt();
    }
    return (c, l) => (S(), C("div", Af, [
      g("div", sf, [
        l[7] || (l[7] = g("h4", null, "副本信息显示位置", -1)),
        g("select", {
          class: "rlzc-input",
          value: M(m).settings.panelDisplay,
          onChange: r
        }, [...l[6] || (l[6] = [
          g("option", { value: "panel" }, "扩展面板（默认）", -1),
          g("option", { value: "statusbar" }, "正文状态栏", -1)
        ])], 40, rf),
        g("p", of, P(M(m).settings.panelDisplay === "statusbar" ? "正文中保留 <副本> 标签，由你的状态栏显示；系统页不再显示时限、进度条、任务和 ps。" : "正文中隐藏 <副本> 标签，时限、进度条、任务和 ps 显示在系统页。") + " 两种方式下扩展都会读取 <副本> 做核对。 ", 1)
      ]),
      g("div", lf, [
        l[11] || (l[11] = g("h4", null, "注入深度", -1)),
        g("label", cf, [
          l[8] || (l[8] = g("span", null, "暗号 rlzc_token", -1)),
          g("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: M(m).settings.depths.token,
            onChange: l[0] || (l[0] = (a) => A("token", a))
          }, null, 40, af)
        ]),
        g("label", uf, [
          l[9] || (l[9] = g("span", null, "进度 rlzc_progress", -1)),
          g("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: M(m).settings.depths.progress,
            onChange: l[1] || (l[1] = (a) => A("progress", a))
          }, null, 40, ff)
        ]),
        g("label", df, [
          l[10] || (l[10] = g("span", null, "本轮 rlzc_turn", -1)),
          g("input", {
            type: "number",
            min: "0",
            class: "rlzc-input",
            value: M(m).settings.depths.turn,
            onChange: l[2] || (l[2] = (a) => A("turn", a))
          }, null, 40, pf)
        ])
      ]),
      g("div", hf, [
        l[12] || (l[12] = g("h4", null, "自定义副本包", -1)),
        M(m).settings.customPacks.length ? (S(), C("ul", mf, [
          (S(!0), C(J, null, me(M(m).settings.customPacks, (a) => (S(), C("li", {
            key: a.id
          }, [
            g("span", null, [
              Zt(P(a.level) + "｜" + P(a.name) + " ", 1),
              g("small", null, "v" + P(a.version), 1)
            ]),
            g("button", {
              class: "rlzc-btn ghost small",
              onClick: (d) => i(a.id, a.name)
            }, "删除", 8, gf)
          ]))), 128))
        ])) : (S(), C("p", xf, "还没有导入自定义副本包。")),
        g("input", {
          ref_key: "fileInput",
          ref: n,
          type: "file",
          accept: ".json,application/json",
          hidden: "",
          onChange: s
        }, null, 544),
        g("button", {
          class: "rlzc-btn",
          onClick: l[3] || (l[3] = (a) => n.value?.click())
        }, "导入 JSON…"),
        t.value.length ? (S(), C("ul", bf, [
          (S(!0), C(J, null, me(t.value, (a, d) => (S(), C("li", { key: d }, P(a), 1))), 128))
        ])) : X("", !0)
      ]),
      g("div", yf, [
        l[15] || (l[15] = g("h4", null, "其他", -1)),
        g("label", vf, [
          g("input", {
            type: "checkbox",
            checked: M(m).settings.showBall,
            onChange: l[4] || (l[4] = (a) => o("showBall", a))
          }, null, 40, _f),
          l[13] || (l[13] = Zt("显示悬浮球（关闭后可从扩展菜单打开面板）", -1))
        ]),
        g("label", wf, [
          g("input", {
            type: "checkbox",
            checked: M(m).settings.debug,
            onChange: l[5] || (l[5] = (a) => o("debug", a))
          }, null, 40, kf),
          l[14] || (l[14] = Zt("调试模式（调试页允许手动修改，并在控制台输出日志）", -1))
        ])
      ])
    ]));
  }
}), Sf = { class: "rlzc-debug" }, Ef = {
  key: 0,
  class: "rlzc-note"
}, $f = {
  key: 0,
  class: "rlzc-note"
}, Cf = {
  key: 1,
  class: "rlzc-note"
}, If = {
  key: 2,
  class: "rlzc-card"
}, Mf = { class: "rlzc-row" }, Tf = ["disabled"], Pf = ["value"], Rf = ["disabled"], Ff = { class: "rlzc-row" }, Nf = ["disabled"], Of = ["disabled"], jf = {
  key: 3,
  class: "rlzc-card"
}, Df = ["onUpdate:modelValue", "disabled"], Bf = ["disabled"], Lf = { class: "rlzc-card" }, Vf = {
  key: 0,
  class: "rlzc-hint"
}, Wf = { class: "rlzc-hint" }, Gf = { class: "rlzc-list rlzc-warns" }, Yf = { class: "rlzc-card" }, Hf = {
  key: 0,
  class: "rlzc-list"
}, Kf = ["disabled", "onClick"], Uf = {
  key: 1,
  class: "rlzc-hint"
}, Zf = {
  class: "rlzc-card",
  open: ""
}, Jf = { class: "rlzc-pre" }, Qf = { class: "rlzc-card" }, qf = { class: "rlzc-pre" }, Xf = { class: "rlzc-card" }, ed = { class: "rlzc-pre" }, td = { class: "rlzc-card" }, nd = { class: "rlzc-table" }, Ad = ["disabled"], sd = /* @__PURE__ */ ot({
  __name: "DebugTab",
  setup(e) {
    const t = se(() => m.settings.debug), n = /* @__PURE__ */ Fe(""), A = /* @__PURE__ */ Fe(null), s = /* @__PURE__ */ Dn({});
    bt(
      () => [m.tick, m.pack?.id],
      () => {
        for (const p of Object.keys(s)) delete s[p];
        const d = qa() ?? {};
        for (const p of m.pack?.roles ?? []) s[p] = d[p] ?? "";
      },
      { immediate: !0 }
    );
    const i = se(() => {
      m.tick;
      const d = pe(), p = [], h = m.session?.entryIndex ?? 0;
      for (let I = h; I < d.length; I++) {
        const $ = d[I]?.extra?.rlzc;
        $ && p.push({ index: I, snap: $ });
      }
      return p.reverse().slice(0, 60);
    }), r = se(() => {
      const d = m.progress;
      if (!d) return null;
      const { perMessage: p, phase: h, next: I, ...$ } = d;
      return {
        phase: h.id + " " + h.name,
        ...$,
        next: I ? { round: I.round, skipFrom: I.skipFrom, events: I.events.map((B) => B.id) } : null,
        messages: Object.keys(p).length
      };
    });
    function o() {
      n.value && su(n.value);
    }
    function c() {
      A.value !== null && A.value >= 0 && iu(A.value);
    }
    function l() {
      ru({ ...s });
    }
    const a = (d) => JSON.stringify(d, null, 2);
    return (d, p) => (S(), C("div", Sf, [
      M(m).session ? (S(), C(J, { key: 1 }, [
        t.value ? X("", !0) : (S(), C("p", $f, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        M(m).pack && M(m).session.packVersion !== M(m).pack.version ? (S(), C("p", Cf, " 入场时副本包版本为 " + P(M(m).session.packVersion) + "，当前为 " + P(M(m).pack.version) + "。 ", 1)) : X("", !0),
        M(m).pack?.phases.length ? (S(), C("div", If, [
          p[4] || (p[4] = g("h4", null, "手动修正", -1)),
          g("div", Mf, [
            Ct(g("select", {
              "onUpdate:modelValue": p[0] || (p[0] = (h) => n.value = h),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              p[3] || (p[3] = g("option", { value: "" }, "切换到阶段…", -1)),
              (S(!0), C(J, null, me(M(m).pack.phases, (h) => (S(), C("option", {
                key: h.id,
                value: h.id
              }, P(h.name), 9, Pf))), 128))
            ], 8, Tf), [
              [BA, n.value]
            ]),
            g("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: o
            }, "切换", 8, Rf)
          ]),
          g("div", Ff, [
            Ct(g("input", {
              "onUpdate:modelValue": p[1] || (p[1] = (h) => A.value = h),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, Nf), [
              [
                vA,
                A.value,
                void 0,
                { number: !0 }
              ]
            ]),
            g("button", {
              class: "rlzc-btn small",
              disabled: !t.value || A.value === null,
              onClick: c
            }, "修正轮次", 8, Of)
          ])
        ])) : X("", !0),
        M(m).pack?.roles?.length ? (S(), C("div", jf, [
          p[5] || (p[5] = g("h4", null, "角色登记", -1)),
          (S(!0), C(J, null, me(M(m).pack.roles, (h) => (S(), C("label", {
            key: h,
            class: "rlzc-field"
          }, [
            g("span", null, P(h), 1),
            Ct(g("input", {
              "onUpdate:modelValue": (I) => s[h] = I,
              class: "rlzc-input",
              disabled: !t.value,
              placeholder: "未登记"
            }, null, 8, Df), [
              [vA, s[h]]
            ])
          ]))), 128)),
          g("button", {
            class: "rlzc-btn small",
            disabled: !t.value,
            onClick: l
          }, "保存登记", 8, Bf)
        ])) : X("", !0),
        g("div", Lf, [
          p[7] || (p[7] = g("h4", null, "<副本> 核对", -1)),
          M(m).audit?.warnings.length ? (S(), C(J, { key: 1 }, [
            g("p", Wf, "共 " + P(M(m).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
            g("ul", Gf, [
              (S(!0), C(J, null, me(M(m).audit.warnings.slice(-30).reverse(), (h, I) => (S(), C("li", { key: I }, [
                g("span", null, [
                  g("small", null, "#" + P(h.index) + "｜" + P(h.phase) + "第" + P(h.round) + "轮", 1),
                  p[6] || (p[6] = g("br", null, null, -1)),
                  Zt("⚠️ " + P(h.text), 1)
                ])
              ]))), 128))
            ])
          ], 64)) : (S(), C("p", Vf, "没有发现问题。"))
        ]),
        g("div", Yf, [
          p[8] || (p[8] = g("h4", null, "手动操作记录", -1)),
          M(m).session.manual.length ? (S(), C("ul", Hf, [
            (S(!0), C(J, null, me(M(m).session.manual, (h, I) => (S(), C("li", { key: I }, [
              g("code", null, "#" + P(h.atIndex) + " " + P(h.kind) + " " + P("phase" in h ? h.phase : "") + P("round" in h ? h.round : "") + P("targetPhase" in h ? `${h.targetPhase}:${h.targetRound}` : ""), 1),
              g("button", {
                class: "rlzc-btn ghost small",
                disabled: !t.value,
                onClick: ($) => M(ou)(I)
              }, "撤销", 8, Kf)
            ]))), 128))
          ])) : (S(), C("p", Uf, "无"))
        ]),
        g("details", Zf, [
          p[9] || (p[9] = g("summary", null, "本次注入", -1)),
          g("pre", Jf, P([M(m).lastInjection.token, M(m).lastInjection.progress, M(m).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
        ]),
        g("details", Qf, [
          p[10] || (p[10] = g("summary", null, "重放结果", -1)),
          g("pre", qf, P(a(r.value)), 1)
        ]),
        g("details", Xf, [
          p[11] || (p[11] = g("summary", null, "会话原始数据", -1)),
          g("pre", ed, P(a(M(m).session)), 1)
        ]),
        g("details", td, [
          p[13] || (p[13] = g("summary", null, "每楼快照（最近60条）", -1)),
          g("table", nd, [
            p[12] || (p[12] = g("thead", null, [
              g("tr", null, [
                g("th", null, "楼"),
                g("th", null, "阶段"),
                g("th", null, "轮"),
                g("th", null, "钟时"),
                g("th", null, "事件")
              ])
            ], -1)),
            g("tbody", null, [
              (S(!0), C(J, null, me(i.value, (h) => (S(), C("tr", {
                key: h.index
              }, [
                g("td", null, P(h.index) + P(h.snap.entry ? "★" : ""), 1),
                g("td", null, P(h.snap.phase), 1),
                g("td", null, P(h.snap.round), 1),
                g("td", null, P(h.snap.clock ?? ""), 1),
                g("td", null, P(h.snap.injected.join(" ")), 1)
              ]))), 128))
            ])
          ])
        ]),
        g("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: p[2] || (p[2] = //@ts-ignore
          (...h) => M(js) && M(js)(...h))
        }, "删除副本会话", 8, Ad)
      ], 64)) : (S(), C("p", Ef, "当前聊天没有副本会话。"))
    ]));
  }
}), id = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, rd = { class: "rlzc-head" }, od = { class: "rlzc-tabs" }, ld = ["onClick"], cd = { class: "rlzc-body" }, ad = /* @__PURE__ */ ot({
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
      if (A === "debug" && !m.debugUnlocked) {
        if (!await Ye("此页会显示副本真相，确定要打开吗？")) return;
        m.debugUnlocked = !0;
      }
      m.tab = A;
    }
    return (A, s) => (S(), C("div", {
      class: "rlzc-backdrop",
      onClick: s[1] || (s[1] = $l((i) => M(m).panelOpen = !1, ["self"]))
    }, [
      g("section", id, [
        g("header", rd, [
          s[2] || (s[2] = g("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          g("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: s[0] || (s[0] = (i) => M(m).panelOpen = !1)
          }, "×")
        ]),
        g("nav", od, [
          (S(), C(J, null, me(t, (i) => g("button", {
            key: i.id,
            class: _t({ on: M(m).tab === i.id }),
            onClick: (r) => n(i.id)
          }, P(i.label), 11, ld)), 64))
        ]),
        g("div", cd, [
          M(m).tab === "system" ? (S(), Je(Bu, { key: 0 })) : M(m).tab === "docs" ? (S(), Je(Xu, { key: 1 })) : M(m).tab === "memo" ? (S(), Je(nf, { key: 2 })) : M(m).tab === "settings" ? (S(), Je(zf, { key: 3 })) : M(m).tab === "debug" && M(m).debugUnlocked ? (S(), Je(sd, { key: 4 })) : X("", !0)
        ])
      ])
    ]));
  }
}), ud = /* @__PURE__ */ ot({
  __name: "App",
  setup(e) {
    return (t, n) => (S(), C(J, null, [
      M(m).settings.showBall ? (S(), Je(uu, { key: 0 })) : X("", !0),
      M(m).panelOpen ? (S(), Je(ad, { key: 1 })) : X("", !0)
    ], 64));
  }
}), fd = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-memo{height:100%}.rlzc-textarea{min-height:50vh;flex:1;resize:vertical;line-height:1.6}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}', Ls = "rlzc-host", Vs = "rlzc-menu-btn", Ws = "rlzc-settings-drawer";
function dd() {
  if (document.getElementById(Ls)) return;
  const e = document.createElement("div");
  e.id = Ls, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = fd, t.appendChild(n);
  const A = document.createElement("div");
  A.className = "rlzc-root", t.appendChild(A), Ml(ud).mount(A), hr(), mr();
}
function hr(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => hr(e + 1), 500);
    return;
  }
  if (document.getElementById(Vs)) return;
  const n = document.createElement("div");
  n.id = Vs, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const A = document.createElement("div");
  A.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const s = document.createElement("span");
  s.textContent = "回廊种菜系统", n.append(A, s), n.addEventListener("click", () => {
    m.panelOpen = !m.panelOpen;
  }), t.appendChild(n);
}
function mr(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => mr(e + 1), 500);
    return;
  }
  if (document.getElementById(Ws)) return;
  const n = (p, h = "", I = "") => {
    const $ = document.createElement(p);
    return h && ($.className = h), I && ($.textContent = I), $;
  }, A = n("div");
  A.id = Ws;
  const s = n("div", "inline-drawer"), i = n("div", "inline-drawer-toggle inline-drawer-header");
  i.append(n("b", "", "回廊种菜系统"), n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const r = n("div", "inline-drawer-content"), o = n("div", "menu_button menu_button_icon", "打开面板");
  o.prepend(n("i", "fa-solid fa-seedling")), o.addEventListener("click", () => m.panelOpen = !0);
  const c = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  c.addEventListener("click", () => {
    m.settings.ball = { x: null, y: null }, m.settings.showBall = !0, rt();
  });
  const l = n("label", "checkbox_label"), a = document.createElement("input");
  a.type = "checkbox", a.addEventListener("change", () => {
    m.settings.showBall = a.checked, rt();
  }), l.append(a, n("span", "", "显示悬浮球")), bt(() => m.settings.showBall, (p) => a.checked = p, { immediate: !0 });
  const d = n("div", "flex-container");
  d.append(o, c), r.append(d, l, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), s.append(i, r), A.append(s), t.append(A);
}
globalThis.rlzcInterceptor = tu;
function fA() {
  Ua(), Ue("MESSAGE_RECEIVED", (e) => lu(Number(e))), Ue("CHARACTER_MESSAGE_RENDERED", (e) => aA(Number(e))), Ue("MESSAGE_DELETED", () => cA()), Ue("MESSAGE_SWIPED", (e) => {
    nu(Number(e)), aA(Number(e));
  }), Ue("MESSAGE_EDITED", () => cA()), Ue("MESSAGE_UPDATED", (e) => {
    cA(), aA(Number(e));
  }), Ue("CHAT_CHANGED", () => Bs()), Ue("MORE_MESSAGES_LOADED", () => HA()), dd(), Bs(), console.log("[rlzc] 回廊种菜系统已加载", m.settings);
}
const Gs = window.jQuery;
typeof Gs == "function" ? Gs(() => fA()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", fA) : fA();
