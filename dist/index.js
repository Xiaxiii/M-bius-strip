/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Fr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const he = {}, Ut = [], Gt = () => {
}, vo = () => !1, Es = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Cs = (e) => e.startsWith("onUpdate:"), Ke = Object.assign, ko = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ha = Object.prototype.hasOwnProperty, ce = (e, t) => Ha.call(e, t), ne = Array.isArray, $t = (e) => Wn(e) === "[object Map]", qt = (e) => Wn(e) === "[object Set]", yi = (e) => Wn(e) === "[object Date]", le = (e) => typeof e == "function", ye = (e) => typeof e == "string", lt = (e) => typeof e == "symbol", me = (e) => e !== null && typeof e == "object", wo = (e) => (me(e) || le(e)) && le(e.then) && le(e.catch), _o = Object.prototype.toString, Wn = (e) => _o.call(e), Ga = (e) => Wn(e).slice(8, -1), zo = (e) => Wn(e) === "[object Object]", Lr = (e) => ye(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, wn = /* @__PURE__ */ Fr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ms = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Ka = /-\w/g, He = Ms(
  (e) => e.replace(Ka, (t) => t.slice(1).toUpperCase())
), Ya = /\B([A-Z])/g, en = Ms(
  (e) => e.replace(Ya, "-$1").toLowerCase()
), $o = Ms((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xs = Ms(
  (e) => e ? `on${$o(e)}` : ""
), rt = (e, t) => !Object.is(e, t), as = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, So = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Is = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let bi;
const Ts = () => bi || (bi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ns(e) {
  if (ne(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = ye(s) ? Qa(s) : Ns(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ye(e) || me(e))
    return e;
}
const qa = /;(?![^(]*\))/g, Ja = /:([^]+)/, Za = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Qa(e) {
  const t = {};
  return e.replace(Za, (n) => n.startsWith("/*") ? "" : n).split(qa).forEach((n) => {
    if (n) {
      const s = n.split(Ja);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function te(e) {
  let t = "";
  if (ye(e))
    t = e;
  else if (ne(e))
    for (let n = 0; n < e.length; n++) {
      const s = te(e[n]);
      s && (t += s + " ");
    }
  else if (me(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Xa = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ec = /* @__PURE__ */ Fr(Xa);
function Eo(e) {
  return !!e || e === "";
}
function tc(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let r = 0; s && r < e.length; r++)
    s = Ct(e[r], t[r], n);
  return s;
}
function vi(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), r = new Uint8Array(s.length);
  for (const i of e) {
    let o = -1;
    for (let l = 0; l < s.length; l++)
      if (!r[l] && Ct(i, s[l], n)) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    r[o] = 1;
  }
  return !0;
}
function nc(e, t, n) {
  let s = $t(e), r = $t(t);
  if (s || r || (s = qt(e), r = qt(t), s || r))
    return s && r ? vi(e, t, n) : !1;
  const i = Object.keys(e).length, o = Object.keys(t).length;
  if (i !== o)
    return !1;
  for (const l in e) {
    const a = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
    if (a && !c || !a && c || !Ct(e[l], t[l], n))
      return !1;
  }
  return String(e) === String(t);
}
function ki(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [r, i] = n;
  if (r.has(e) || i.has(t))
    return r.get(e) === t && i.get(t) === e;
  r.set(e, t), i.set(t, e);
  const o = s(e, t, n);
  return r.delete(e), i.delete(t), o;
}
function Ct(e, t, n) {
  if (e === t) return !0;
  let s = yi(e), r = yi(t);
  return s || r ? s && r ? e.getTime() === t.getTime() : !1 : (s = lt(e), r = lt(t), s || r ? e === t : (s = ne(e), r = ne(t), s || r ? s && r ? ki(e, t, n, tc) : !1 : (s = me(e), r = me(t), s || r ? !s || !r ? !1 : ki(e, t, n, nc) : String(e) === String(t))));
}
function sc(e, t) {
  return e.findIndex((n) => Ct(n, t));
}
const Co = (e) => !!(e && e.__v_isRef === !0), S = (e) => ye(e) ? e : e == null ? "" : ne(e) || me(e) && (e.toString === _o || !le(e.toString)) ? Co(e) ? S(e.value) : JSON.stringify(e, Mo, 2) : String(e), Mo = (e, t) => Co(t) ? Mo(e, t.value) : $t(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[er(s, i) + " =>"] = r, n),
    {}
  )
} : qt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => er(n))
} : lt(t) ? er(t) : me(t) && !ne(t) && !zo(t) ? String(t) : t, er = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    lt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let we;
class rc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && we && (we.active ? (this.parent = we, this.index = (we.scopes || (we.scopes = [])).push(
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
      const n = we;
      try {
        return we = this, t();
      } finally {
        we = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = we, we = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (we === this)
        we = this.prevScope;
      else {
        let t = we;
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
function ic() {
  return we;
}
let Ae;
const tr = /* @__PURE__ */ new WeakSet();
class Io {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, we && (we.active ? we.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, tr.has(this) && (tr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || No(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, wi(this), Po(this);
    const t = Ae, n = Ge;
    Ae = this, Ge = !0;
    try {
      return this.fn();
    } finally {
      jo(this), Ae = t, Ge = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Vr(t);
      this.deps = this.depsTail = void 0, wi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? tr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    zr(this) && this.run();
  }
  get dirty() {
    return zr(this);
  }
}
let To = 0, _n, zn;
function No(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = zn, zn = e;
    return;
  }
  e.next = _n, _n = e;
}
function Dr() {
  To++;
}
function Br() {
  if (--To > 0)
    return;
  if (zn) {
    let t = zn;
    for (zn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; _n; ) {
    let t = _n;
    for (_n = void 0; t; ) {
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
function Po(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function jo(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Vr(s), oc(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function zr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ro(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ro(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Nn) || (e.globalVersion = Nn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !zr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Ae, s = Ge;
  Ae = e, Ge = !0;
  try {
    Po(e);
    const r = e.fn(e._value);
    (t.version === 0 || rt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Ae = n, Ge = s, jo(e), e.flags &= -3;
  }
}
function Vr(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Vr(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function oc(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ge = !0;
const Oo = [];
function Mt() {
  Oo.push(Ge), Ge = !1;
}
function It() {
  const e = Oo.pop();
  Ge = e === void 0 ? !0 : e;
}
function wi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Ae;
    Ae = void 0;
    try {
      t();
    } finally {
      Ae = n;
    }
  }
}
let Nn = 0;
class lc {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ur {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Ae || !Ge || Ae === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ae)
      n = this.activeLink = new lc(Ae, this), Ae.deps ? (n.prevDep = Ae.depsTail, Ae.depsTail.nextDep = n, Ae.depsTail = n) : Ae.deps = Ae.depsTail = n, Fo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Ae.depsTail, n.nextDep = void 0, Ae.depsTail.nextDep = n, Ae.depsTail = n, Ae.deps === n && (Ae.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Nn++, this.notify(t);
  }
  notify(t) {
    Dr();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Br();
    }
  }
}
function Fo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Fo(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const $r = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ Symbol(
  ""
), Sr = /* @__PURE__ */ Symbol(
  ""
), Pn = /* @__PURE__ */ Symbol(
  ""
);
function _e(e, t, n) {
  if (Ge && Ae) {
    let s = $r.get(e);
    s || $r.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Ur()), r.map = s, r.key = n), r.track();
  }
}
function mt(e, t, n, s, r, i) {
  const o = $r.get(e);
  if (!o) {
    Nn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Dr(), t === "clear")
    o.forEach(l);
  else {
    const a = ne(e), c = a && Lr(n);
    if (a && n === "length") {
      const u = Number(s);
      o.forEach((d, h) => {
        (h === "length" || h === Pn || !lt(h) && h >= u) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), c && l(o.get(Pn)), t) {
        case "add":
          a ? c && l(o.get("length")) : (l(o.get(Kt)), $t(e) && l(o.get(Sr)));
          break;
        case "delete":
          a || (l(o.get(Kt)), $t(e) && l(o.get(Sr)));
          break;
        case "set":
          $t(e) && l(o.get(Kt));
          break;
      }
  }
  Br();
}
function rn(e) {
  const t = /* @__PURE__ */ ie(e);
  return t === e || (_e(t, "iterate", Pn), /* @__PURE__ */ Le(e)) ? t : /* @__PURE__ */ at(e) ? /* @__PURE__ */ St(e) ? t.map((n) => Tt(De(n))) : t.map(Tt) : t.map(De);
}
function Ps(e) {
  return _e(e = /* @__PURE__ */ ie(e), "iterate", Pn), e;
}
function nt(e, t) {
  return /* @__PURE__ */ at(e) ? Tt(/* @__PURE__ */ St(e) ? De(t) : t) : De(t);
}
const ac = {
  __proto__: null,
  [Symbol.iterator]() {
    return nr(this, Symbol.iterator, (e) => nt(this, e));
  },
  concat(...e) {
    return rn(this).concat(
      ...e.map((t) => ne(t) ? rn(t) : t)
    );
  },
  entries() {
    return nr(this, "entries", (e) => (e[1] = nt(this, e[1]), e));
  },
  every(e, t) {
    return ft(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ft(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => nt(this, s)),
      arguments
    );
  },
  find(e, t) {
    return ft(
      this,
      "find",
      e,
      t,
      (n) => nt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ft(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ft(
      this,
      "findLast",
      e,
      t,
      (n) => nt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ft(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ft(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return sr(this, "includes", e);
  },
  indexOf(...e) {
    return sr(this, "indexOf", e);
  },
  join(e) {
    return rn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return sr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ft(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return gn(this, "pop");
  },
  push(...e) {
    return gn(this, "push", e);
  },
  reduce(e, ...t) {
    return _i(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return _i(this, "reduceRight", e, t);
  },
  shift() {
    return gn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ft(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return gn(this, "splice", e);
  },
  toReversed() {
    return rn(this).toReversed();
  },
  toSorted(e) {
    return rn(this).toSorted(e);
  },
  toSpliced(...e) {
    return rn(this).toSpliced(...e);
  },
  unshift(...e) {
    return gn(this, "unshift", e);
  },
  values() {
    return nr(this, "values", (e) => nt(this, e));
  }
};
function nr(e, t, n) {
  const s = Ps(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ Le(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const cc = Array.prototype;
function ft(e, t, n, s, r, i) {
  const o = Ps(e), l = o !== e && !/* @__PURE__ */ Le(e), a = o[t];
  if (a !== cc[t]) {
    const d = a.apply(e, i);
    return l ? De(d) : d;
  }
  let c = n;
  o !== e && (l ? c = function(d, h) {
    return n.call(this, nt(e, d), h, e);
  } : n.length > 2 && (c = function(d, h) {
    return n.call(this, d, h, e);
  }));
  const u = a.call(o, c, s);
  return l && r ? r(u) : u;
}
function _i(e, t, n, s) {
  const r = Ps(e), i = r !== e && !/* @__PURE__ */ Le(e);
  let o = n, l = !1;
  r !== e && (i ? (l = s.length === 0, o = function(c, u, d) {
    return l && (l = !1, c = nt(e, c)), n.call(this, c, nt(e, u), d, e);
  }) : n.length > 3 && (o = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }));
  const a = r[t](o, ...s);
  return l ? nt(e, a) : a;
}
function sr(e, t, n) {
  const s = /* @__PURE__ */ ie(e);
  _e(s, "iterate", Pn);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ Gr(n[0]) ? (n[0] = /* @__PURE__ */ ie(n[0]), s[t](...n)) : r;
}
function gn(e, t, n = []) {
  Mt(), Dr();
  const s = (/* @__PURE__ */ ie(e))[t].apply(e, n);
  return Br(), It(), s;
}
const uc = /* @__PURE__ */ Fr("__proto__,__v_isRef,__isVue"), Lo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(lt)
);
function Ac(e) {
  lt(e) || (e = String(e));
  const t = /* @__PURE__ */ ie(this);
  return _e(t, "has", e), t.hasOwnProperty(e);
}
class Do {
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
      return s === (r ? i ? vc : Wo : i ? Uo : Vo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = ne(t);
    if (!r) {
      let a;
      if (o && (a = ac[n]))
        return a;
      if (n === "hasOwnProperty")
        return Ac;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ $e(t) ? t : s
    );
    if ((lt(n) ? Lo.has(n) : uc(n)) || (r || _e(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ $e(l)) {
      const a = o && Lr(n) ? l : l.value;
      return r && me(a) ? /* @__PURE__ */ Cr(a) : a;
    }
    return me(l) ? r ? /* @__PURE__ */ Cr(l) : /* @__PURE__ */ js(l) : l;
  }
}
class Bo extends Do {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = ne(t) && Lr(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ at(i);
      if (!/* @__PURE__ */ Le(s) && !/* @__PURE__ */ at(s) && (i = /* @__PURE__ */ ie(i), s = /* @__PURE__ */ ie(s)), !o && /* @__PURE__ */ $e(i) && !/* @__PURE__ */ $e(s))
        return c || (i.value = s), !0;
    }
    const l = o ? Number(n) < t.length : ce(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ $e(t) ? t : r
    );
    return t === /* @__PURE__ */ ie(r) && a && (l ? rt(s, i) && mt(t, "set", n, s) : mt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = ce(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && mt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!lt(n) || !Lo.has(n)) && _e(t, "has", n), s;
  }
  ownKeys(t) {
    return _e(
      t,
      "iterate",
      ne(t) ? "length" : Kt
    ), Reflect.ownKeys(t);
  }
}
class dc extends Do {
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
const fc = /* @__PURE__ */ new Bo(), pc = /* @__PURE__ */ new dc(), hc = /* @__PURE__ */ new Bo(!0);
const Er = (e) => e, es = (e) => Reflect.getPrototypeOf(e);
function mc(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ ie(r), o = $t(i), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, c = r[e](...s), u = n ? Er : t ? Tt : De;
    return !t && _e(
      i,
      "iterate",
      a ? Sr : Kt
    ), Ke(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: h } = c.next();
          return h ? { value: d, done: h } : {
            value: l ? [u(d[0]), u(d[1])] : u(d),
            done: h
          };
        }
      }
    );
  };
}
function ts(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function gc(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ ie(i), l = /* @__PURE__ */ ie(r);
      e || (rt(r, l) && _e(o, "get", r), _e(o, "get", l));
      const { has: a } = es(o), c = t ? Er : e ? Tt : De;
      if (a.call(o, r))
        return c(i.get(r));
      if (a.call(o, l))
        return c(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && _e(/* @__PURE__ */ ie(r), "iterate", Kt), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ ie(i), l = /* @__PURE__ */ ie(r);
      return e || (rt(r, l) && _e(o, "has", r), _e(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ ie(l), c = t ? Er : e ? Tt : De;
      return !e && _e(a, "iterate", Kt), l.forEach((u, d) => r.call(i, c(u), c(d), o));
    }
  };
  return Ke(
    n,
    e ? {
      add: ts("add"),
      set: ts("set"),
      delete: ts("delete"),
      clear: ts("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ ie(this), o = es(i), l = /* @__PURE__ */ ie(r), a = !t && !/* @__PURE__ */ Le(r) && !/* @__PURE__ */ at(r) ? l : r;
        return o.has.call(i, a) || rt(r, a) && o.has.call(i, r) || rt(l, a) && o.has.call(i, l) || (i.add(a), mt(i, "add", a, a)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ Le(i) && !/* @__PURE__ */ at(i) && (i = /* @__PURE__ */ ie(i));
        const o = /* @__PURE__ */ ie(this), { has: l, get: a } = es(o);
        let c = l.call(o, r);
        c || (r = /* @__PURE__ */ ie(r), c = l.call(o, r));
        const u = a.call(o, r);
        return o.set(r, i), c ? rt(i, u) && mt(o, "set", r, i) : mt(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ ie(this), { has: o, get: l } = es(i);
        let a = o.call(i, r);
        a || (r = /* @__PURE__ */ ie(r), a = o.call(i, r)), l && l.call(i, r);
        const c = i.delete(r);
        return a && mt(i, "delete", r, void 0), c;
      },
      clear() {
        const r = /* @__PURE__ */ ie(this), i = r.size !== 0, o = r.clear();
        return i && mt(
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
    n[r] = mc(r, e, t);
  }), n;
}
function Wr(e, t) {
  const n = gc(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    ce(n, r) && r in s ? n : s,
    r,
    i
  );
}
const xc = {
  get: /* @__PURE__ */ Wr(!1, !1)
}, yc = {
  get: /* @__PURE__ */ Wr(!1, !0)
}, bc = {
  get: /* @__PURE__ */ Wr(!0, !1)
};
const Vo = /* @__PURE__ */ new WeakMap(), Uo = /* @__PURE__ */ new WeakMap(), Wo = /* @__PURE__ */ new WeakMap(), vc = /* @__PURE__ */ new WeakMap();
function kc(e) {
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
function js(e) {
  return /* @__PURE__ */ at(e) ? e : Hr(
    e,
    !1,
    fc,
    xc,
    Vo
  );
}
// @__NO_SIDE_EFFECTS__
function wc(e) {
  return Hr(
    e,
    !1,
    hc,
    yc,
    Uo
  );
}
// @__NO_SIDE_EFFECTS__
function Cr(e) {
  return Hr(
    e,
    !0,
    pc,
    bc,
    Wo
  );
}
function Hr(e, t, n, s, r) {
  if (!me(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = kc(Ga(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function St(e) {
  return /* @__PURE__ */ at(e) ? /* @__PURE__ */ St(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Gr(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ie(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ie(t) : e;
}
function _c(e) {
  return !ce(e, "__v_skip") && Object.isExtensible(e) && So(e, "__v_skip", !0), e;
}
const De = (e) => me(e) ? /* @__PURE__ */ js(e) : e, Tt = (e) => me(e) ? /* @__PURE__ */ Cr(e) : e;
// @__NO_SIDE_EFFECTS__
function $e(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function de(e) {
  return zc(e, !1);
}
function zc(e, t) {
  return /* @__PURE__ */ $e(e) ? e : new $c(e, t);
}
class $c {
  constructor(t, n) {
    this.dep = new Ur(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ie(t), this._value = n ? t : De(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Le(t) || /* @__PURE__ */ at(t);
    t = s ? t : /* @__PURE__ */ ie(t), rt(t, n) && (this._rawValue = t, this._value = s ? t : De(t), this.dep.trigger());
  }
}
function R(e) {
  return /* @__PURE__ */ $e(e) ? e.value : e;
}
const Sc = {
  get: (e, t, n) => t === "__v_raw" ? e : R(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ $e(r) && !/* @__PURE__ */ $e(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Ho(e) {
  return /* @__PURE__ */ St(e) ? e : new Proxy(e, Sc);
}
class Ec {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ur(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Nn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ae !== this)
      return No(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ro(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Cc(e, t, n = !1) {
  let s, r;
  return le(e) ? s = e : (s = e.get, r = e.set), new Ec(s, r, n);
}
const ns = {}, hs = /* @__PURE__ */ new WeakMap();
let Dt;
function Mc(e, t = !1, n = Dt) {
  if (n) {
    let s = hs.get(n);
    s || hs.set(n, s = []), s.push(e);
  }
}
function Ic(e, t, n = he) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: a } = n, c = (I) => r ? I : /* @__PURE__ */ Le(I) || r === !1 || r === 0 ? gt(I, 1) : gt(I);
  let u, d, h, g, k = !1, z = !1;
  if (/* @__PURE__ */ $e(e) ? (d = () => e.value, k = /* @__PURE__ */ Le(e)) : /* @__PURE__ */ St(e) ? (d = () => c(e), k = !0) : ne(e) ? (z = !0, k = e.some((I) => /* @__PURE__ */ St(I) || /* @__PURE__ */ Le(I)), d = () => e.map((I) => {
    if (/* @__PURE__ */ $e(I))
      return I.value;
    if (/* @__PURE__ */ St(I))
      return c(I);
    if (le(I))
      return a ? a(I, 2) : I();
  })) : le(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
    if (h) {
      Mt();
      try {
        h();
      } finally {
        It();
      }
    }
    const I = Dt;
    Dt = u;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      Dt = I;
    }
  } : d = Gt, t && r) {
    const I = d, ee = r === !0 ? 1 / 0 : r;
    d = () => gt(I(), ee);
  }
  const L = ic(), V = () => {
    u.stop(), L && L.active && ko(L.effects, u);
  };
  if (i && t) {
    const I = t;
    t = (...ee) => {
      const J = I(...ee);
      return V(), J;
    };
  }
  let N = z ? new Array(e.length).fill(ns) : ns;
  const $ = (I) => {
    if (!(!(u.flags & 1) || !u.dirty && !I))
      if (t) {
        const ee = u.run();
        if (I || r || k || (z ? ee.some((J, D) => rt(J, N[D])) : rt(ee, N))) {
          h && h();
          const J = Dt;
          Dt = u;
          try {
            const D = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              N === ns ? void 0 : z && N[0] === ns ? [] : N,
              g
            ];
            N = ee, a ? a(t, 3, D) : (
              // @ts-expect-error
              t(...D)
            );
          } finally {
            Dt = J;
          }
        }
      } else
        u.run();
  };
  return l && l($), u = new Io(d), u.scheduler = o ? () => o($, !1) : $, g = (I) => Mc(I, !1, u), h = u.onStop = () => {
    const I = hs.get(u);
    if (I) {
      if (a)
        a(I, 4);
      else
        for (const ee of I) ee();
      hs.delete(u);
    }
  }, t ? s ? $(!0) : N = u.run() : o ? o($.bind(null, !0), !0) : u.run(), V.pause = u.pause.bind(u), V.resume = u.resume.bind(u), V.stop = V, V;
}
function gt(e, t = 1 / 0, n) {
  if (t <= 0 || !me(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ $e(e))
    gt(e.value, t, n);
  else if (ne(e))
    for (let s = 0; s < e.length; s++)
      gt(e[s], t, n);
  else if (qt(e) || $t(e))
    e.forEach((s) => {
      gt(s, t, n);
    });
  else if (zo(e)) {
    for (const s in e)
      gt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && gt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Hn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Rs(r, t, n);
  }
}
function ct(e, t, n, s) {
  if (le(e)) {
    const r = Hn(e, t, n, s);
    return r && wo(r) && r.catch((i) => {
      Rs(i, t, n);
    }), r;
  }
  if (ne(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(ct(e[i], t, n, s));
    return r;
  }
}
function Rs(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || he;
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
      Mt(), Hn(i, null, 10, [
        e,
        a,
        c
      ]), It();
      return;
    }
  }
  Tc(e, n, r, s, o);
}
function Tc(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ze = [];
let tt = -1;
const an = [];
let _t = null, on = 0;
const Go = /* @__PURE__ */ Promise.resolve();
let ms = null;
function Ko(e) {
  const t = ms || Go;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Nc(e) {
  let t = tt + 1, n = ze.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = ze[s], i = jn(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Kr(e) {
  if (!(e.flags & 1)) {
    const t = jn(e), n = ze[ze.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jn(n) ? ze.push(e) : ze.splice(Nc(t), 0, e), e.flags |= 1, Yo();
  }
}
function Yo() {
  ms || (ms = Go.then(Jo));
}
function Pc(e) {
  if (!ne(e))
    _t && e.id === -1 ? _t.splice(on + 1, 0, e) : e.flags & 1 || (an.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      an.push(e[t]);
  Yo();
}
function zi(e, t, n = tt + 1) {
  for (; n < ze.length; n++) {
    const s = ze[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ze.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function qo(e) {
  if (an.length) {
    const t = [...new Set(an)].sort(
      (n, s) => jn(n) - jn(s)
    );
    if (an.length = 0, _t) {
      for (let n = 0; n < t.length; n++)
        _t.push(t[n]);
      return;
    }
    for (_t = t, on = 0; on < _t.length; on++) {
      const n = _t[on];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    _t = null, on = 0;
  }
}
const jn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Jo(e) {
  try {
    for (tt = 0; tt < ze.length; tt++) {
      const t = ze[tt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Hn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; tt < ze.length; tt++) {
      const t = ze[tt];
      t && (t.flags &= -2);
    }
    tt = -1, ze.length = 0, qo(), ms = null, (ze.length || an.length) && Jo();
  }
}
let Fe = null, Zo = null;
function gs(e) {
  const t = Fe;
  return Fe = e, Zo = e && e.type.__scopeId || null, t;
}
function jc(e, t = Fe, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Ti(-1);
    const i = gs(t), o = Yt.length;
    let l;
    try {
      l = e(...r);
    } finally {
      for (let a = Yt.length; a > o; a--) hl();
      gs(i), s._d && Ti(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ot(e, t) {
  if (Fe === null)
    return e;
  const n = Bs(Fe), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, a = he] = t[r];
    i && (le(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && gt(o), s.push({
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
function Ft(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[s];
    a && (Mt(), ct(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), It());
  }
}
function Rc(e, t, n = !1) {
  const s = yu();
  if (s || cn) {
    let r = cn ? cn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && le(t) ? t.call(s && s.proxy) : t;
  }
}
const Oc = /* @__PURE__ */ Symbol.for("v-scx"), Fc = () => Rc(Oc);
function Os(e, t, n) {
  return Lc(e, t, n);
}
function Lc(e, t, n = he) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = Ke({}, n), a = t && s || !t && i !== "post";
  let c;
  if (Fn) {
    if (i === "sync") {
      const g = Fc();
      c = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!a) {
      const g = () => {
      };
      return g.stop = Gt, g.resume = Gt, g.pause = Gt, g;
    }
  }
  const u = Nt;
  l.call = (g, k, z) => ct(g, u, k, z);
  let d = !1;
  i === "post" ? l.scheduler = (g) => {
    Ee(g, u && u.suspense);
  } : i !== "sync" && (d = !0, l.scheduler = (g, k) => {
    k ? g() : Kr(g);
  }), l.augmentJob = (g) => {
    t && (g.flags |= 4), d && (g.flags |= 2, u && (g.id = u.uid, g.i = u));
  };
  const h = Ic(e, t, l);
  return Fn && (c ? c.push(h) : a && h()), h;
}
const Dc = /* @__PURE__ */ Symbol("_vte"), Fs = (e) => e.__isTeleport, rr = /* @__PURE__ */ Symbol("_leaveCb");
function Bc(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== yt) {
        t = n;
        break;
      }
  }
  return t;
}
function Qo(e) {
  if (!Xo(e))
    return Fs(e.type) && e.children ? Bc(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && le(n.default))
      return n.default();
  }
}
function Yr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Yr(
      Fs(n.type) && Qo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Be(e, t) {
  return le(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ke({ name: e.name }, t, { setup: e })
  ) : e;
}
function Vc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function $i(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const xs = /* @__PURE__ */ new WeakMap();
function $n(e, t, n, s, r = !1) {
  if (ne(e)) {
    e.forEach(
      (z, L) => $n(
        z,
        t && (ne(t) ? t[L] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Sn(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && $n(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Bs(s.component) : s.el, o = r ? null : i, { i: l, r: a } = e, c = t && t.r, u = l.refs === he ? l.refs = {} : l.refs, d = l.setupState, h = /* @__PURE__ */ ie(d), g = d === he ? vo : (z) => $i(u, z) ? !1 : ce(h, z), k = (z, L) => !(L && $i(u, L));
  if (c != null && c !== a) {
    if (Si(t), ye(c))
      u[c] = null, g(c) && (d[c] = null);
    else if (/* @__PURE__ */ $e(c)) {
      const z = t;
      k(c, z.k) && (c.value = null), z.k && (u[z.k] = null);
    }
  }
  if (le(a))
    Hn(a, l, 12, [o, u]);
  else {
    const z = ye(a), L = /* @__PURE__ */ $e(a);
    if (z || L) {
      const V = () => {
        if (e.f) {
          const N = z ? g(a) ? d[a] : u[a] : k() || !e.k ? a.value : u[e.k];
          if (r)
            ne(N) && ko(N, i);
          else if (ne(N))
            N.includes(i) || N.push(i);
          else if (z)
            u[a] = [i], g(a) && (d[a] = u[a]);
          else {
            const $ = [i];
            k(a, e.k) && (a.value = $), e.k && (u[e.k] = $);
          }
        } else z ? (u[a] = o, g(a) && (d[a] = o)) : L && (k(a, e.k) && (a.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const N = () => {
          V(), xs.delete(e);
        };
        N.id = -1, xs.set(e, N), Ee(N, n);
      } else
        Si(e), V();
    }
  }
}
function Si(e) {
  const t = xs.get(e);
  t && (t.flags |= 8, xs.delete(e));
}
Ts().requestIdleCallback;
Ts().cancelIdleCallback;
const Sn = (e) => !!e.type.__asyncLoader, Xo = (e) => e.type.__isKeepAlive;
function Uc(e, t, n = Nt, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Mt();
      const l = Zr(n), a = ct(t, n, e, o);
      return l(), It(), a;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const el = (e) => (t, n = Nt) => {
  (!Fn || e === "sp") && Uc(e, (...s) => t(...s), n);
}, Wc = el("m"), tl = el(
  "bum"
), Hc = /* @__PURE__ */ Symbol.for("v-ndc");
function fe(e, t, n, s) {
  let r;
  const i = n, o = ne(e);
  if (o || ye(e)) {
    const l = o && /* @__PURE__ */ St(e);
    let a = !1, c = !1;
    l && (a = !/* @__PURE__ */ Le(e), c = /* @__PURE__ */ at(e), e = Ps(e)), r = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      r[u] = t(
        a ? c ? Tt(De(e[u])) : De(e[u]) : e[u],
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
const Mr = (e) => e ? yl(e) ? Bs(e) : Mr(e.parent) : null, En = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ke(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Mr(e.parent),
    $root: (e) => Mr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => e.type,
    $forceUpdate: (e) => e.f || (e.f = () => {
      Kr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ko.bind(e.proxy)),
    $watch: (e) => Gt
  })
), ir = (e, t) => e !== he && !e.__isScriptSetup && ce(e, t), Gc = {
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
        if (ir(s, t))
          return o[t] = 1, s[t];
        if (ce(i, t))
          return o[t] = 3, i[t];
        if (n !== he && ce(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const c = En[t];
    let u, d;
    if (c)
      return t === "$attrs" && _e(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== he && ce(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      d = a.config.globalProperties, ce(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return ir(r, t) ? (r[t] = n, !0) : ce(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o }
  }, l) {
    let a;
    return !!(n[l] || ir(t, l) || ce(i, l) || ce(s, l) || ce(En, l) || ce(r.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ce(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function nl() {
  return {
    app: null,
    config: {
      isNativeTag: vo,
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
let Kc = 0;
function Yc(e, t) {
  return function(s, r = null) {
    le(s) || (s = Ke({}, s)), r != null && !me(r) && (r = null);
    const i = nl(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = i.app = {
      _uid: Kc++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: zu,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return o.has(u) || (u && le(u.install) ? (o.add(u), u.install(c, ...d)) : le(u) && (o.add(u), u(c, ...d))), c;
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
      mount(u, d, h) {
        if (!a) {
          const g = c._ceVNode || je(s, r);
          return g.appContext = i, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(g, u, h), a = !0, c._container = u, u.__vue_app__ = c, Bs(g.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a && (ct(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return i.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = cn;
        cn = c;
        try {
          return u();
        } finally {
          cn = d;
        }
      }
    };
    return c;
  };
}
let cn = null;
const qc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${He(t)}Modifiers`] || e[`${en(t)}Modifiers`];
function Jc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || he;
  let r = n;
  const i = t.startsWith("update:"), o = i && qc(s, t.slice(7));
  o && (o.trim && (r = n.map((u) => ye(u) ? u.trim() : u)), o.number && (r = r.map(Is)));
  let l, a = s[l = Xs(t)] || // also try camelCase event handler (#2249)
  s[l = Xs(He(t))];
  !a && i && (a = s[l = Xs(en(t))]), a && ct(
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
    e.emitted[l] = !0, ct(
      c,
      e,
      6,
      r
    );
  }
}
function Zc(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {};
  return i ? (ne(i) ? i.forEach((l) => o[l] = null) : Ke(o, i), me(e) && s.set(e, o), o) : (me(e) && s.set(e, null), null);
}
function Ls(e, t) {
  return !e || !Es(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ce(e, t[0].toLowerCase() + t.slice(1)) || ce(e, en(t)) || ce(e, t));
}
function Ei(e) {
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
    data: h,
    setupState: g,
    ctx: k,
    inheritAttrs: z
  } = e, L = gs(e);
  let V, N;
  try {
    if (n.shapeFlag & 4) {
      const I = r || s, ee = I;
      V = st(
        c.call(
          ee,
          I,
          u,
          d,
          g,
          h,
          k
        )
      ), N = l;
    } else {
      const I = t;
      V = st(
        I.length > 1 ? I(
          d,
          { attrs: l, slots: o, emit: a }
        ) : I(
          d,
          null
        )
      ), N = t.props ? l : Qc(l);
    }
  } catch (I) {
    Yt.length = 0, Rs(I, e, 1), V = je(yt);
  }
  let $ = V;
  if (N && z !== !1) {
    const I = Object.keys(N), { shapeFlag: ee } = $;
    I.length && ee & 7 && (i && I.some(Cs) && (N = Xc(
      N,
      i
    )), $ = An($, N, !1, !0));
  }
  if (n.dirs && ($ = An($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const I = Fs($.type) && Qo($) || $;
    Yr(I, n.transition);
  }
  return V = $, gs(L), V;
}
const Qc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Es(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Xc = (e, t) => {
  const n = {};
  for (const s in e)
    (!Cs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function eu(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: a } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Ci(s, o, c) : !!o;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const h = u[d];
        if (sl(o, s, h) && !Ls(c, h))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Ci(s, o, c) : !0 : !!o;
  return !1;
}
function Ci(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (sl(t, e, i) && !Ls(n, i))
      return !0;
  }
  return !1;
}
function sl(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && me(s) && me(r) ? !Ct(s, r) : s !== r;
}
function tu({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const rl = {}, il = () => Object.create(rl), ol = (e) => Object.getPrototypeOf(e) === rl;
function nu(e, t, n, s = !1) {
  const r = {}, i = il();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ll(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ wc(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function su(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ ie(r), [a] = e.propsOptions;
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
        let h = u[d];
        if (Ls(e.emitsOptions, h))
          continue;
        const g = t[h];
        if (a)
          if (ce(i, h))
            g !== i[h] && (i[h] = g, c = !0);
          else {
            const k = He(h);
            r[k] = Ir(
              a,
              l,
              k,
              g,
              e,
              !1
            );
          }
        else
          g !== i[h] && (i[h] = g, c = !0);
      }
    }
  } else {
    ll(e, t, r, i) && (c = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !ce(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = en(d)) === d || !ce(t, u))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[d] = Ir(
        a,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (i !== l)
      for (const d in i)
        (!t || !ce(t, d)) && (delete i[d], c = !0);
  }
  c && mt(e.attrs, "set", "");
}
function ll(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (wn(a))
        continue;
      const c = t[a];
      let u;
      r && ce(r, u = He(a)) ? !i || !i.includes(u) ? n[u] = c : (l || (l = {}))[u] = c : Ls(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, o = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ ie(n), c = l || he;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      n[d] = Ir(
        r,
        a,
        d,
        c[d],
        e,
        !ce(c, d)
      );
    }
  }
  return o;
}
function Ir(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = ce(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && le(a)) {
        const { propsDefaults: c } = r;
        if (n in c)
          s = c[n];
        else {
          const u = Zr(r);
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
    ] && (s === "" || s === en(n)) && (s = !0));
  }
  return s;
}
function ru(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  if (!i)
    return me(e) && s.set(e, Ut), Ut;
  if (ne(i))
    for (let c = 0; c < i.length; c++) {
      const u = He(i[c]);
      Mi(u) && (o[u] = he);
    }
  else if (i)
    for (const c in i) {
      const u = He(c);
      if (Mi(u)) {
        const d = i[c], h = o[u] = ne(d) || le(d) ? { type: d } : Ke({}, d), g = h.type;
        let k = !1, z = !0;
        if (ne(g))
          for (let L = 0; L < g.length; ++L) {
            const V = g[L], N = le(V) && V.name;
            if (N === "Boolean") {
              k = !0;
              break;
            } else N === "String" && (z = !1);
          }
        else
          k = le(g) && g.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = k, h[
          1
          /* shouldCastTrue */
        ] = z, (k || ce(h, "default")) && l.push(u);
      }
    }
  const a = [o, l];
  return me(e) && s.set(e, a), a;
}
function Mi(e) {
  return e[0] !== "$" && !wn(e);
}
const qr = (e) => e === "_" || e === "_ctx" || e === "$stable", Jr = (e) => ne(e) ? e.map(st) : [st(e)], iu = (e, t, n) => {
  if (t._n)
    return t;
  const s = jc((...r) => Jr(t(...r)), n);
  return s._c = !1, s;
}, al = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (qr(r)) continue;
    const i = e[r];
    if (le(i))
      t[r] = iu(r, i, s);
    else if (i != null) {
      const o = Jr(i);
      t[r] = () => o;
    }
  }
}, cl = (e, t) => {
  const n = Jr(t);
  e.slots.default = () => n;
}, ul = (e, t, n) => {
  for (const s in t)
    (n || !qr(s)) && (e[s] = t[s]);
}, ou = (e, t, n) => {
  const s = e.slots = il();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (ul(s, t, n), n && So(s, "_", r, !0)) : al(t, s);
  } else t && cl(e, t);
}, lu = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = he;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : ul(r, t, n) : (i = !t.$stable, al(t, r)), o = t;
  } else t && (cl(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !qr(l) && o[l] == null && delete r[l];
}, Ee = du;
function au(e) {
  return cu(e);
}
function cu(e, t) {
  const n = Ts();
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
    nextSibling: h,
    setScopeId: g = Gt,
    insertStaticContent: k
  } = e, z = (p, x, _, T = null, E = null, M = null, F = void 0, O = null, j = !!x.dynamicChildren) => {
    if (p === x)
      return;
    p && !xn(p, x) && (T = Xn(p), K(p, E, M, !0), p = null), x.patchFlag === -2 && (j = !1, x.dynamicChildren = null), x.dynamicChildren && p && p.dynamicChildren && p.dynamicChildren.hasOnce && (x.dynamicChildren === Ut && (x.dynamicChildren = []), x.dynamicChildren.hasOnce = !0);
    const { type: C, ref: q, shapeFlag: B } = x;
    switch (C) {
      case Ds:
        L(p, x, _, T);
        break;
      case yt:
        V(p, x, _, T);
        break;
      case lr:
        p == null && N(x, _, T, F);
        break;
      case Z:
        ue(
          p,
          x,
          _,
          T,
          E,
          M,
          F,
          O,
          j
        );
        break;
      default:
        B & 1 ? ee(
          p,
          x,
          _,
          T,
          E,
          M,
          F,
          O,
          j
        ) : B & 6 ? se(
          p,
          x,
          _,
          T,
          E,
          M,
          F,
          O,
          j
        ) : (B & 64 || B & 128) && C.process(
          p,
          x,
          _,
          T,
          E,
          M,
          F,
          O,
          j,
          hn
        );
    }
    q != null && E ? $n(q, p && p.ref, M, x || p, !x) : q == null && p && p.ref != null && $n(p.ref, null, M, p, !0);
  }, L = (p, x, _, T) => {
    if (p == null)
      s(
        x.el = l(x.children),
        _,
        T
      );
    else {
      const E = x.el = p.el;
      x.children !== p.children && c(E, x.children);
    }
  }, V = (p, x, _, T) => {
    p == null ? s(
      x.el = a(x.children || ""),
      _,
      T
    ) : x.el = p.el;
  }, N = (p, x, _, T) => {
    [p.el, p.anchor] = k(
      p.children,
      x,
      _,
      T,
      p.el,
      p.anchor
    );
  }, $ = ({ el: p, anchor: x }, _, T) => {
    let E;
    for (; p && p !== x; )
      E = h(p), s(p, _, T), p = E;
    s(x, _, T);
  }, I = ({ el: p, anchor: x }) => {
    let _;
    for (; p && p !== x; )
      _ = h(p), r(p), p = _;
    r(x);
  }, ee = (p, x, _, T, E, M, F, O, j) => {
    if (x.type === "svg" ? F = "svg" : x.type === "math" && (F = "mathml"), p == null)
      J(
        x,
        _,
        T,
        E,
        M,
        F,
        O,
        j
      );
    else {
      const C = p.el && p.el._isVueCE ? p.el : null;
      try {
        C && C._beginPatch(), m(
          p,
          x,
          E,
          M,
          F,
          O,
          j
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, J = (p, x, _, T, E, M, F, O) => {
    let j, C;
    const { props: q, shapeFlag: B, transition: Y, dirs: X } = p;
    if (j = p.el = o(
      p.type,
      M,
      q && q.is,
      q
    ), B & 8 ? u(j, p.children) : B & 16 && b(
      p.children,
      j,
      null,
      T,
      E,
      or(p, M),
      F,
      O
    ), X && Ft(p, null, T, "created"), D(j, p, p.scopeId, F, T), q) {
      for (const ae in q)
        ae !== "value" && !wn(ae) && i(j, ae, null, q[ae], M, T);
      "value" in q && i(j, "value", null, q.value, M), (C = q.onVnodeBeforeMount) && et(C, T, p);
    }
    X && Ft(p, null, T, "beforeMount");
    const re = uu(E, Y);
    re && Y.beforeEnter(j), s(j, x, _), ((C = q && q.onVnodeMounted) || re || X) && Ee(() => {
      try {
        C && et(C, T, p), re && Y.enter(j), X && Ft(p, null, T, "mounted");
      } finally {
      }
    }, E);
  }, D = (p, x, _, T, E) => {
    if (_ && g(p, _), T)
      for (let M = 0; M < T.length; M++)
        g(p, T[M]);
    if (E) {
      let M = E.subTree;
      if (x === M || pl(M.type) && (M.ssContent === x || M.ssFallback === x)) {
        const F = E.vnode;
        D(
          p,
          F,
          F.scopeId,
          F.slotScopeIds,
          E.parent
        );
      }
    }
  }, b = (p, x, _, T, E, M, F, O, j = 0) => {
    for (let C = j; C < p.length; C++) {
      const q = p[C] = O ? ht(p[C]) : st(p[C]);
      z(
        null,
        q,
        x,
        _,
        T,
        E,
        M,
        F,
        O
      );
    }
  }, m = (p, x, _, T, E, M, F) => {
    const O = x.el = p.el;
    let { patchFlag: j, dynamicChildren: C, dirs: q } = x;
    j |= p.patchFlag & 16;
    const B = p.props || he, Y = x.props || he;
    let X;
    if (_ && Lt(_, !1), (X = Y.onVnodeBeforeUpdate) && et(X, _, x, p), q && Ft(x, p, _, "beforeUpdate"), _ && Lt(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    C && (!p.dynamicChildren || p.dynamicChildren.length !== C.length) && (j = 0, F = !1, C = null), (B.innerHTML && Y.innerHTML == null || B.textContent && Y.textContent == null) && u(O, ""), C ? y(
      p.dynamicChildren,
      C,
      O,
      _,
      T,
      or(x, E),
      M
    ) : F || We(
      p,
      x,
      O,
      null,
      _,
      T,
      or(x, E),
      M,
      !1
    ), j > 0) {
      if (j & 16)
        W(O, B, Y, _, E);
      else if (j & 2 && B.class !== Y.class && i(O, "class", null, Y.class, E), j & 4 && i(O, "style", B.style, Y.style, E), j & 8) {
        const re = x.dynamicProps;
        for (let ae = 0; ae < re.length; ae++) {
          const oe = re[ae], xe = B[oe], ke = Y[oe];
          (ke !== xe || oe === "value") && i(O, oe, xe, ke, E, _);
        }
      }
      j & 1 && p.children !== x.children && u(O, x.children);
    } else !F && C == null && W(O, B, Y, _, E);
    ((X = Y.onVnodeUpdated) || q) && Ee(() => {
      X && et(X, _, x, p), q && Ft(x, p, _, "updated");
    }, T);
  }, y = (p, x, _, T, E, M, F) => {
    for (let O = 0; O < x.length; O++) {
      const j = p[O], C = x[O], q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        j.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (j.type === Z || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xn(j, C) || // - In the case of a component, it could contain anything.
        j.shapeFlag & 198) ? d(j.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      z(
        j,
        C,
        q,
        null,
        T,
        E,
        M,
        F,
        !0
      );
    }
  }, W = (p, x, _, T, E) => {
    if (x !== _) {
      if (x !== he)
        for (const M in x)
          !wn(M) && !(M in _) && i(
            p,
            M,
            x[M],
            null,
            E,
            T
          );
      for (const M in _) {
        if (wn(M)) continue;
        const F = _[M], O = x[M];
        F !== O && M !== "value" && i(p, M, O, F, E, T);
      }
      "value" in _ && i(p, "value", x.value, _.value, E);
    }
  }, ue = (p, x, _, T, E, M, F, O, j) => {
    const C = x.el = p ? p.el : l(""), q = x.anchor = p ? p.anchor : l("");
    let { patchFlag: B, dynamicChildren: Y, slotScopeIds: X } = x;
    X && (O = O ? O.concat(X) : X), p == null ? (s(C, _, T), s(q, _, T), b(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      x.children || [],
      _,
      q,
      E,
      M,
      F,
      O,
      j
    )) : B > 0 && B & 64 && Y && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === Y.length ? (y(
      p.dynamicChildren,
      Y,
      _,
      E,
      M,
      F,
      O
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (x.key != null || E && x === E.subTree) && Al(
      p,
      x,
      !0
      /* shallow */
    )) : We(
      p,
      x,
      _,
      q,
      E,
      M,
      F,
      O,
      j
    );
  }, se = (p, x, _, T, E, M, F, O, j) => {
    x.slotScopeIds = O, p == null ? x.shapeFlag & 512 ? E.ctx.activate(
      x,
      _,
      T,
      F,
      j
    ) : Ve(
      x,
      _,
      T,
      E,
      M,
      F,
      j
    ) : ve(p, x, j);
  }, Ve = (p, x, _, T, E, M, F) => {
    const O = p.component = xu(
      p,
      T,
      E
    );
    if (Xo(p) && (O.ctx.renderer = hn), bu(O, !1, F), O.asyncDep) {
      if (E && E.registerDep(O, Ue, F), !p.el) {
        const j = O.subTree = je(yt);
        V(null, j, x, _), p.placeholder = j.el;
      }
    } else
      Ue(
        O,
        p,
        x,
        _,
        E,
        M,
        F
      );
  }, ve = (p, x, _) => {
    const T = x.component = p.component;
    if (eu(p, x, _))
      if (T.asyncDep && !T.asyncResolved) {
        x.el = p.el, Je(T, x, _);
        return;
      } else
        T.next = x, T.update();
    else
      x.el = p.el, T.vnode = x;
  }, Ue = (p, x, _, T, E, M, F) => {
    const O = () => {
      if (p.isMounted) {
        let { next: B, bu: Y, u: X, parent: re, vnode: ae } = p;
        {
          const Qe = dl(p);
          if (Qe) {
            B && (B.el = ae.el, Je(p, B, F)), Qe.asyncDep.then(() => {
              Ee(() => {
                p.isUnmounted || C();
              }, E);
            });
            return;
          }
        }
        let oe = B, xe;
        Lt(p, !1), B ? (B.el = ae.el, Je(p, B, F)) : B = ae, Y && as(Y), (xe = B.props && B.props.onVnodeBeforeUpdate) && et(xe, re, B, ae), Lt(p, !0);
        const ke = Ei(p), Ze = p.subTree;
        p.subTree = ke, z(
          Ze,
          ke,
          // parent may have changed if it's in a teleport
          d(Ze.el),
          // anchor may have changed if it's in a fragment
          Xn(Ze),
          p,
          E,
          M
        ), B.el = ke.el, oe === null && tu(p, ke.el), X && Ee(X, E), (xe = B.props && B.props.onVnodeUpdated) && Ee(
          () => et(xe, re, B, ae),
          E
        );
      } else {
        let B;
        const { el: Y, props: X } = x, { bm: re, m: ae, parent: oe, root: xe, type: ke } = p, Ze = Sn(x);
        Lt(p, !1), re && as(re), !Ze && (B = X && X.onVnodeBeforeMount) && et(B, oe, x), Lt(p, !0);
        {
          xe.ce && xe.ce._hasShadowRoot() && xe.ce._injectChildStyle(
            ke,
            p.parent ? p.parent.type : void 0
          );
          const Qe = p.subTree = Ei(p);
          z(
            null,
            Qe,
            _,
            T,
            p,
            E,
            M
          ), x.el = Qe.el;
        }
        if (ae && Ee(ae, E), !Ze && (B = X && X.onVnodeMounted)) {
          const Qe = x;
          Ee(
            () => et(B, oe, Qe),
            E
          );
        }
        (x.shapeFlag & 256 || oe && Sn(oe.vnode) && oe.vnode.shapeFlag & 256) && p.a && Ee(p.a, E), p.isMounted = !0, x = _ = T = null;
      }
    };
    p.scope.on();
    const j = p.effect = new Io(O);
    p.scope.off();
    const C = p.update = j.run.bind(j), q = p.job = j.runIfDirty.bind(j);
    q.i = p, q.id = p.uid, j.scheduler = () => Kr(q), Lt(p, !0), C();
  }, Je = (p, x, _) => {
    x.component = p;
    const T = p.vnode.props;
    p.vnode = x, p.next = null, su(p, x.props, T, _), lu(p, x.children, _), Mt(), zi(p), It();
  }, We = (p, x, _, T, E, M, F, O, j = !1) => {
    const C = p && p.children, q = p ? p.shapeFlag : 0, B = x.children, { patchFlag: Y, shapeFlag: X } = x;
    if (Y > 0) {
      if (Y & 128) {
        Ot(
          C,
          B,
          _,
          T,
          E,
          M,
          F,
          O,
          j
        );
        return;
      } else if (Y & 256) {
        sn(
          C,
          B,
          _,
          T,
          E,
          M,
          F,
          O,
          j
        );
        return;
      }
    }
    X & 8 ? (q & 16 && kt(C, E, M), B !== C && u(_, B)) : q & 16 ? X & 16 ? Ot(
      C,
      B,
      _,
      T,
      E,
      M,
      F,
      O,
      j
    ) : kt(C, E, M, !0) : (q & 8 && u(_, ""), X & 16 && b(
      B,
      _,
      T,
      E,
      M,
      F,
      O,
      j
    ));
  }, sn = (p, x, _, T, E, M, F, O, j) => {
    p = p || Ut, x = x || Ut;
    const C = p.length, q = x.length, B = Math.min(C, q);
    let Y;
    for (Y = 0; Y < B; Y++) {
      const X = x[Y] = j ? ht(x[Y]) : st(x[Y]);
      z(
        p[Y],
        X,
        _,
        null,
        E,
        M,
        F,
        O,
        j
      );
    }
    C > q ? kt(
      p,
      E,
      M,
      !0,
      !1,
      B
    ) : b(
      x,
      _,
      T,
      E,
      M,
      F,
      O,
      j,
      B
    );
  }, Ot = (p, x, _, T, E, M, F, O, j) => {
    let C = 0;
    const q = x.length;
    let B = p.length - 1, Y = q - 1;
    for (; C <= B && C <= Y; ) {
      const X = p[C], re = x[C] = j ? ht(x[C]) : st(x[C]);
      if (xn(X, re))
        z(
          X,
          re,
          _,
          null,
          E,
          M,
          F,
          O,
          j
        );
      else
        break;
      C++;
    }
    for (; C <= B && C <= Y; ) {
      const X = p[B], re = x[Y] = j ? ht(x[Y]) : st(x[Y]);
      if (xn(X, re))
        z(
          X,
          re,
          _,
          null,
          E,
          M,
          F,
          O,
          j
        );
      else
        break;
      B--, Y--;
    }
    if (C > B) {
      if (C <= Y) {
        const X = Y + 1, re = X < q ? x[X].el : T;
        for (; C <= Y; )
          z(
            null,
            x[C] = j ? ht(x[C]) : st(x[C]),
            _,
            re,
            E,
            M,
            F,
            O,
            j
          ), C++;
      }
    } else if (C > Y)
      for (; C <= B; )
        K(p[C], E, M, !0), C++;
    else {
      const X = C, re = C, ae = /* @__PURE__ */ new Map();
      for (C = re; C <= Y; C++) {
        const Ie = x[C] = j ? ht(x[C]) : st(x[C]);
        Ie.key != null && ae.set(Ie.key, C);
      }
      let oe, xe = 0;
      const ke = Y - re + 1;
      let Ze = !1, Qe = 0;
      const mn = new Array(ke);
      for (C = 0; C < ke; C++) mn[C] = 0;
      for (C = X; C <= B; C++) {
        const Ie = p[C];
        if (xe >= ke) {
          K(Ie, E, M, !0);
          continue;
        }
        let Xe;
        if (Ie.key != null)
          Xe = ae.get(Ie.key);
        else
          for (oe = re; oe <= Y; oe++)
            if (mn[oe - re] === 0 && xn(Ie, x[oe])) {
              Xe = oe;
              break;
            }
        Xe === void 0 ? K(Ie, E, M, !0) : (mn[Xe - re] = C + 1, Xe >= Qe ? Qe = Xe : Ze = !0, z(
          Ie,
          x[Xe],
          _,
          null,
          E,
          M,
          F,
          O,
          j
        ), xe++);
      }
      const mi = Ze ? Au(mn) : Ut;
      for (oe = mi.length - 1, C = ke - 1; C >= 0; C--) {
        const Ie = re + C, Xe = x[Ie], gi = x[Ie + 1], xi = Ie + 1 < q ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          gi.el || fl(gi)
        ) : T;
        mn[C] === 0 ? z(
          null,
          Xe,
          _,
          xi,
          E,
          M,
          F,
          O,
          j
        ) : Ze && (oe < 0 || C !== mi[oe] ? P(Xe, _, xi, 2) : oe--);
      }
    }
  }, P = (p, x, _, T, E = null) => {
    const { el: M, type: F, transition: O, children: j, shapeFlag: C } = p;
    if (C & 6) {
      P(p.component.subTree, x, _, T);
      return;
    }
    if (C & 128) {
      p.suspense.move(x, _, T);
      return;
    }
    if (C & 64) {
      F.move(p, x, _, hn);
      return;
    }
    if (F === Z) {
      s(M, x, _);
      for (let B = 0; B < j.length; B++)
        P(j[B], x, _, T);
      s(p.anchor, x, _);
      return;
    }
    if (F === lr) {
      $(p, x, _);
      return;
    }
    if (T !== 2 && C & 1 && O)
      if (T === 0)
        O.persisted && !M[rr] ? s(M, x, _) : (O.beforeEnter(M), s(M, x, _), Ee(() => O.enter(M), E));
      else {
        const { leave: B, delayLeave: Y, afterLeave: X } = O, re = () => {
          p.ctx.isUnmounted ? r(M) : s(M, x, _);
        }, ae = () => {
          const oe = M._isLeaving || !!M[rr];
          M._isLeaving && M[rr](
            !0
            /* cancelled */
          ), O.persisted && !oe ? re() : B(M, () => {
            re(), X && X();
          });
        };
        Y ? Y(M, re, ae) : ae();
      }
    else
      s(M, x, _);
  }, K = (p, x, _, T = !1, E = !1) => {
    const {
      type: M,
      props: F,
      ref: O,
      children: j,
      dynamicChildren: C,
      shapeFlag: q,
      patchFlag: B,
      dirs: Y,
      cacheIndex: X,
      memo: re
    } = p;
    if ((B === -2 || C && C.hasOnce) && (E = !1), O != null && (Mt(), $n(O, null, _, p, !0), It()), X != null && (!p.ctx || p.ctx === x) && (x.renderCache[X] = void 0), q & 256) {
      x.ctx.deactivate(p);
      return;
    }
    const ae = q & 1 && Y, oe = !Sn(p);
    let xe;
    if (oe && (xe = F && F.onVnodeBeforeUnmount) && et(xe, x, p), q & 6)
      Qn(p.component, _, T);
    else {
      if (q & 128) {
        p.suspense.unmount(_, T);
        return;
      }
      ae && Ft(p, null, x, "beforeUnmount"), q & 64 ? p.type.remove(
        p,
        x,
        _,
        hn,
        T
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== Z || B > 0 && B & 64) ? kt(
        C,
        x,
        _,
        !1,
        !0
      ) : (M === Z && B & 384 || !E && q & 16) && kt(j, x, _), T && U(p);
    }
    const ke = re != null && X == null;
    (oe && (xe = F && F.onVnodeUnmounted) || ae || ke) && Ee(() => {
      xe && et(xe, x, p), ae && Ft(p, null, x, "unmounted"), ke && (p.el = null);
    }, _);
  }, U = (p) => {
    const { type: x, el: _, anchor: T, transition: E } = p;
    if (x === Z) {
      pe(_, T);
      return;
    }
    if (x === lr) {
      I(p), E && !E.persisted && E.afterLeave && E.afterLeave();
      return;
    }
    const M = () => {
      r(_), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (p.shapeFlag & 1 && E && !E.persisted) {
      const { leave: F, delayLeave: O } = E, j = () => F(_, M);
      O ? O(p.el, M, j) : j();
    } else
      M();
  }, pe = (p, x) => {
    let _;
    for (; p !== x; )
      _ = h(p), r(p), p = _;
    r(x);
  }, Qn = (p, x, _) => {
    const { bum: T, scope: E, job: M, subTree: F, um: O, m: j, a: C } = p;
    Ii(j), Ii(C), T && as(T), E.stop(), M ? (M.flags |= 8, K(F, p, x, _)) : p.vnode.el && F && (F.transition = p.vnode.transition, K(F, p, x, _)), O && Ee(O, x), Ee(() => {
      p.isUnmounted = !0;
    }, x);
  }, kt = (p, x, _, T = !1, E = !1, M = 0) => {
    for (let F = M; F < p.length; F++)
      K(p[F], x, _, T, E);
  }, Xn = (p) => {
    if (p.shapeFlag & 6)
      return Xn(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const x = h(p.anchor || p.el), _ = x && x[Dc];
    return _ ? h(_) : x;
  };
  let Qs = !1;
  const hi = (p, x, _) => {
    let T;
    p == null ? x._vnode && (K(x._vnode, null, null, !0), T = x._vnode.component) : z(
      x._vnode || null,
      p,
      x,
      null,
      null,
      null,
      _
    ), x._vnode = p, Qs || (Qs = !0, zi(T), qo(), Qs = !1);
  }, hn = {
    p: z,
    um: K,
    m: P,
    r: U,
    mt: Ve,
    mc: b,
    pc: We,
    pbc: y,
    n: Xn,
    o: e
  };
  return {
    render: hi,
    hydrate: void 0,
    createApp: Yc(hi)
  };
}
function or({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Lt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function uu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Al(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (ne(s) && ne(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = ht(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && Al(o, l)), l.type === Ds && (l.patchFlag === -1 && (l = r[i] = ht(l)), l.el = o.el), l.type === yt && !l.el && (l.el = o.el);
    }
}
function Au(e) {
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
function dl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : dl(t);
}
function Ii(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function fl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? fl(t.subTree) : null;
}
const pl = (e) => e.__isSuspense;
function du(e, t) {
  t && t.pendingBranch ? ne(e) ? t.effects.push(...e) : t.effects.push(e) : Pc(e);
}
const Z = /* @__PURE__ */ Symbol.for("v-fgt"), Ds = /* @__PURE__ */ Symbol.for("v-txt"), yt = /* @__PURE__ */ Symbol.for("v-cmt"), lr = /* @__PURE__ */ Symbol.for("v-stc"), Yt = [];
let Ne = null;
function v(e = !1) {
  Yt.push(Ne = e ? null : []);
}
function hl() {
  Yt.pop(), Ne = Yt[Yt.length - 1] || null;
}
let Rn = 1;
function Ti(e, t = !1) {
  Rn += e, e < 0 && Ne && t && (Ne.hasOnce = !0);
}
function ml(e) {
  return e.dynamicChildren = Rn > 0 ? Ne || Ut : null, hl(), Rn > 0 && Ne && Ne.push(e), e;
}
function w(e, t, n, s, r, i) {
  return ml(
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
function it(e, t, n, s, r) {
  return ml(
    je(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function gl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function xn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const xl = ({ key: e }) => e ?? null, cs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ye(e) || /* @__PURE__ */ $e(e) || le(e) ? { i: Fe, r: e, k: t, f: !!n } : e : null);
function A(e, t = null, n = null, s = 0, r = null, i = e === Z ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xl(t),
    ref: t && cs(t),
    scopeId: Zo,
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
    ctx: Fe
  };
  return l ? (ys(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= ye(n) ? 8 : 16), Rn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ne && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ne.push(a), a;
}
const je = fu;
function fu(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === Hc) && (e = yt), gl(e)) {
    const l = An(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ys(l, n), Rn > 0 && !i && Ne && (l.shapeFlag & 6 ? Ne[Ne.indexOf(e)] = l : Ne.push(l)), l.patchFlag = -2, l;
  }
  if (_u(e) && (e = e.__vccOpts), t) {
    t = pu(t);
    let { class: l, style: a } = t;
    l && !ye(l) && (t.class = te(l)), me(a) && (/* @__PURE__ */ Gr(a) && !ne(a) && (a = Ke({}, a)), t.style = Ns(a));
  }
  const o = ye(e) ? 1 : pl(e) ? 128 : Fs(e) ? 64 : me(e) ? 4 : le(e) ? 2 : 0;
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
function pu(e) {
  return e ? /* @__PURE__ */ Gr(e) || ol(e) ? Ke({}, e) : e : null;
}
function An(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: a } = e, c = t ? hu(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && xl(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? ne(i) ? i.concat(cs(t)) : [i, cs(t)] : cs(t)
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
    patchFlag: t && e.type !== Z ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && An(e.ssContent),
    ssFallback: e.ssFallback && An(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return a && s && Yr(
    u,
    a.clone(u)
  ), u;
}
function Te(e = " ", t = 0) {
  return je(Ds, null, e, t);
}
function H(e = "", t = !1) {
  return t ? (v(), it(yt, null, e)) : je(yt, null, e);
}
function st(e) {
  return e == null || typeof e == "boolean" ? je(yt) : ne(e) ? je(
    Z,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : gl(e) ? ht(e) : je(Ds, null, String(e));
}
function ht(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : An(e);
}
function ys(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (ne(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), ys(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !ol(t) ? t._ctx = Fe : r === 3 && Fe && (Fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (le(t)) {
    if (s & 65) {
      ys(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Fe }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Te(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function hu(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = te([t.class, s.class]));
      else if (r === "style")
        t.style = Ns([t.style, s.style]);
      else if (Es(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(ne(i) && i.includes(o)) ? t[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Cs(r) && (t[r] = o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function et(e, t, n, s = null) {
  ct(e, t, 7, [
    n,
    s
  ]);
}
const mu = nl();
let gu = 0;
function xu(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || mu, i = {
    uid: gu++,
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
    scope: new rc(
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
    propsOptions: ru(s, r),
    emitsOptions: Zc(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: he,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: he,
    data: he,
    props: he,
    attrs: he,
    slots: he,
    refs: he,
    setupState: he,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Jc.bind(null, i), e.ce && e.ce(i), i;
}
let Nt = null;
const yu = () => Nt || Fe;
let bs, On;
{
  const e = Ts(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  bs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Nt = n
  ), On = t(
    "__VUE_SSR_SETTERS__",
    (n) => Fn = n
  );
}
const Zr = (e) => {
  const t = Nt;
  return bs(e), e.scope.on(), () => {
    e.scope.off(), bs(t);
  };
}, Ni = () => {
  Nt && Nt.scope.off(), bs(null);
};
function yl(e) {
  return e.vnode.shapeFlag & 4;
}
let Fn = !1;
function bu(e, t = !1, n = !1) {
  t && On(t);
  const { props: s, children: r } = e.vnode, i = yl(e);
  nu(e, s, i, t), ou(e, r, n || t);
  const o = i ? vu(e, t) : void 0;
  return t && On(!1), o;
}
function vu(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Gc);
  const { setup: s } = n;
  if (s) {
    Mt();
    const r = e.setupContext = s.length > 1 ? wu(e) : null, i = Zr(e), o = Hn(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = wo(o);
    if (It(), i(), (l || e.sp) && !Sn(e) && Vc(e), l) {
      if (o.then(Ni, Ni), t)
        return o.then((a) => {
          On(!0);
          try {
            Pi(e, a, t);
          } finally {
            On(!1);
          }
        }).catch((a) => {
          Rs(a, e, 0);
        });
      e.asyncDep = o;
    } else
      Pi(e, o);
  } else
    bl(e);
}
function Pi(e, t, n) {
  le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) && (e.setupState = Ho(t)), bl(e);
}
function bl(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Gt);
}
const ku = {
  get(e, t) {
    return _e(e, "get", ""), e[t];
  }
};
function wu(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ku),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Bs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ho(_c(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in En)
        return En[n](e);
    },
    has(t, n) {
      return n in t || n in En;
    }
  })) : e.proxy;
}
function _u(e) {
  return le(e) && "__vccOpts" in e;
}
const G = (e, t) => /* @__PURE__ */ Cc(e, t, Fn), zu = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Tr;
const ji = typeof window < "u" && window.trustedTypes;
if (ji)
  try {
    Tr = /* @__PURE__ */ ji.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const vl = Tr ? (e) => Tr.createHTML(e) : (e) => e, $u = "http://www.w3.org/2000/svg", Su = "http://www.w3.org/1998/Math/MathML", pt = typeof document < "u" ? document : null, Ri = pt && /* @__PURE__ */ pt.createElement("template"), Eu = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? pt.createElementNS($u, e) : t === "mathml" ? pt.createElementNS(Su, e) : n ? pt.createElement(e, { is: n }) : pt.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => pt.createTextNode(e),
  createComment: (e) => pt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => pt.querySelector(e),
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
      Ri.innerHTML = vl(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ri.content;
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
}, Cu = /* @__PURE__ */ Symbol("_vtc");
function Mu(e, t, n) {
  const s = e[Cu];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Oi = /* @__PURE__ */ Symbol("_vod"), Iu = /* @__PURE__ */ Symbol("_vsh"), Tu = /* @__PURE__ */ Symbol(""), Nu = /(?:^|;)\s*display\s*:/;
function Pu(e, t, n) {
  const s = e.style, r = ye(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (ye(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && vn(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && vn(s, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? Ru(
        e,
        o,
        !ye(t) && t ? t[o] : void 0,
        l
      ) || vn(s, o, l) : vn(s, o, "");
    }
  } else if (r) {
    if (t !== n) {
      const o = s[Tu];
      o && (n += ";" + o), s.cssText = n, i = Nu.test(n);
    }
  } else t && e.removeAttribute("style");
  Oi in e && (e[Oi] = i ? s.display : "", e[Iu] && (s.display = "none"));
}
const ss = /\s*!important$/;
function vn(e, t, n) {
  if (ne(n))
    n.forEach((s) => vn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    ss.test(n) ? e.setProperty(t, n.replace(ss, ""), "important") : e.setProperty(t, n);
  else {
    const s = ju(e, t);
    ss.test(n) ? e.setProperty(
      en(s),
      n.replace(ss, ""),
      "important"
    ) : e[s] = n;
  }
}
const Fi = ["Webkit", "Moz", "ms"], ar = {};
function ju(e, t) {
  const n = ar[t];
  if (n)
    return n;
  let s = He(t);
  if (s !== "filter" && s in e)
    return ar[t] = s;
  s = $o(s);
  for (let r = 0; r < Fi.length; r++) {
    const i = Fi[r] + s;
    if (i in e)
      return ar[t] = i;
  }
  return t;
}
function Ru(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ye(s) && n === s;
}
const Li = "http://www.w3.org/1999/xlink";
function Di(e, t, n, s, r, i = ec(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Li, t.slice(6, t.length)) : e.setAttributeNS(Li, t, n) : n == null || i && !Eo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : lt(n) ? String(n) : n
  );
}
function Bi(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? vl(n) : n);
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
    l === "boolean" ? n = Eo(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function Vt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ou(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Vi = /* @__PURE__ */ Symbol("_vei");
function Fu(e, t, n, s, r = null) {
  const i = e[Vi] || (e[Vi] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = Bu(t);
    if (s) {
      const c = i[t] = Wu(
        s,
        r
      );
      Vt(e, l, c, a);
    } else o && (Ou(e, l, o, a), i[t] = void 0);
  }
}
const Lu = /(Once|Passive|Capture)$/, Du = /^on:?(?:Once|Passive|Capture)$/;
function Bu(e) {
  let t, n;
  for (; (n = e.match(Lu)) && !Du.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : en(e.slice(2)), t];
}
let cr = 0;
const Vu = /* @__PURE__ */ Promise.resolve(), Uu = () => cr || (Vu.then(() => cr = 0), cr = Date.now());
function Wu(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const r = n.value;
    if (ne(r)) {
      const i = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        i.call(s), s._stopped = !0;
      };
      const o = r.slice(), l = [s];
      for (let a = 0; a < o.length && !s._stopped; a++) {
        const c = o[a];
        c && ct(
          c,
          t,
          5,
          l
        );
      }
    } else
      ct(
        r,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = Uu(), n;
}
const Ui = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Hu = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? Mu(e, s, o) : t === "style" ? Pu(e, n, s) : Es(t) ? Cs(t) || Fu(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Gu(e, t, s, o)) ? (Bi(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Di(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ku(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ye(s))) ? Bi(e, He(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Di(e, t, s, o));
};
function Gu(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ui(t) && le(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ui(t) && ye(n) ? !1 : t in e;
}
function Ku(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = He(t);
  return Array.isArray(n) ? n.some((r) => He(r) === s) : Object.keys(n).some((r) => He(r) === s);
}
const vs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ne(t) ? (n) => as(t, n) : t;
};
function Yu(e) {
  e.target.composing = !0;
}
function Wi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Wt = /* @__PURE__ */ Symbol("_assign"), rs = /* @__PURE__ */ Symbol("_initialValue");
function ur(e, t, n) {
  return t && (e = e.trim()), n && (e = Is(e)), e;
}
const zt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e.parentNode && (e.type === "text" ? e[rs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[rs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Wt] = vs(r);
    const i = s || r.props && r.props.type === "number";
    Vt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Wt](ur(e.value, n, i));
    }), (n || i) && Vt(e, "change", () => {
      e.value = ur(e.value, n, i);
    }), t || (Vt(e, "compositionstart", Yu), Vt(e, "compositionend", Wi), Vt(e, "change", Wi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const r = t ?? "", i = e[rs];
    delete e[rs], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[Wt](ur(e.value, n, s)) : e.value = r;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[Wt] = vs(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Is(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === a) || (e.value = a);
  }
}, kl = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    e._modelValue = t, Vt(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => n ? Is(ks(a)) : ks(a)
      ), i = e.multiple, o = i ? qt(e._modelValue) ? new Set(r) : r : r[0], l = e._pendingValue = [
        i,
        i ? ne(o) ? r.slice() : r : o
      ];
      try {
        e[Wt](o);
      } finally {
        Ko(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[Wt] = vs(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Hi(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Wt] = vs(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !qu(t, n[1], n[0])) && Hi(e, t);
  }
};
function qu(e, t, n) {
  if (!n || ne(e)) return Ct(e, t);
  if (qt(e)) {
    if (e.size !== t.length) return !1;
    for (const s of t)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function Hi(e, t) {
  const n = e.multiple, s = ne(t);
  if (!(n && !s && !qt(t))) {
    for (let r = 0, i = e.options.length; r < i; r++) {
      const o = e.options[r], l = ks(o);
      if (n)
        if (s) {
          const a = typeof l;
          a === "string" || a === "number" ? o.selected = t.some((c) => String(c) === String(l)) : o.selected = sc(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Ct(ks(o), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function ks(e) {
  return "_value" in e ? e._value : e.value;
}
const Ju = ["ctrl", "shift", "alt", "meta"], Zu = {
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
  exact: (e, t) => Ju.some((n) => e[`${n}Key`] && !t.includes(n))
}, Qu = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = Zu[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, Xu = /* @__PURE__ */ Ke({ patchProp: Hu }, Eu);
let Gi;
function eA() {
  return Gi || (Gi = au(Xu));
}
const tA = ((...e) => {
  const t = eA().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = sA(s);
    if (!r) return;
    const i = t._component;
    !le(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, nA(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function nA(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function sA(e) {
  return ye(e) ? document.querySelector(e) : e;
}
const rA = "zhonglou", iA = "钟楼", oA = "1.4.0", lA = "S", aA = 10, cA = "【副本进行中：钟楼】", uA = [], AA = { briefingName: "钟楼" }, dA = { type: "clock", dayStart: "12:00", minutesPerRound: 5 }, fA = { type: "nights", template: "剩余{n}夜" }, pA = "至第四日日出", hA = ["死者", "布局者", "原值班者", "摇钟者", "窃读者", "异见者", "首夜目击", "大厅目击", "零点目击"], mA = "死者永远不是{{user}}或其同伴。其余角色位默认由NPC担任；{{user}}或同伴通过自己的行动进入某个位置时，以实际行动为准。", gA = [{ key: "crank", label: "曲柄当前在谁手里", hint: "4F机房曲柄现在由谁掌握；没人拿着就写「挂在机房」" }, { key: "watcher", label: "当夜值班者", hint: "当夜抽签或托付后的值班者；白天写上一夜的值班者，尚未抽签写「未定」" }, { key: "positions", label: "各角色所在位置", hint: "简写，如「死者：5F西侧；布局者：1F大厅」；只写正文能推断出的" }, { key: "victim", label: "死者目前状态", hint: "如「正常活动」「5F西侧昏睡」「已坠入竖井」「尸体已被发现」" }, { key: "clues", label: "已被发现的关键线索", hint: "列表；只记{{user}}或同伴已经发现的" }, { key: "theories", label: "已公开讨论过的推理", hint: "列表；众人公开说出过的推理或怀疑" }], xA = [{ id: "d1", name: "第一日·白天", cap: 72, next: "n1", clock: !0 }, { id: "n1", name: "第一夜", cap: 28, next: "d2", night: !0 }, { id: "d2", name: "第二日·白天", cap: 72, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 28, next: "d3", night: !0 }, { id: "d3", name: "第三日·白天", cap: 72, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 28, next: null, night: !0 }, { id: "inv", name: "调查", cap: 50, next: "trial", byTag: !0, frozen: !0, deadline: "至审判结束" }, { id: "trial", name: "审判", cap: 50, next: null, byTag: !0, frozen: !0 }], yA = [{ id: "E01", phase: "d1", text: "十人落在塔外岩岸，系统展开简报与入场提示，发放楼层图。", kind: "event", from: 1, to: 1 }, { id: "E02", phase: "d1", text: "{布局者}独自读完《操作手册》及夹页，多次上5F，在东半侧外壁墙根画下粉笔短线与数字1到6。", kind: "event", from: 2, to: 60 }, { id: "E03", phase: "d1", text: "本日须自然呈现至少两条公平破绽（见世界书F4），不得特写或点破。", kind: "directive", from: 2, to: 72 }, { id: "E04", phase: "d1", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{首夜目击}。", kind: "event", from: 72, to: 72 }, { id: "E05", phase: "n1", text: "{首夜目击}经4F铁门、旋转梯登钟室检查大钟，铁门吱呀响两次。", kind: "event", from: 1, to: 10 }, { id: "E06", phase: "n1", text: "{首夜目击}回机房摇钟，曲柄全程很轻，第20轮前鸣钟十二下。", kind: "event", from: 10, to: 20 }, { id: "E07", phase: "d2", text: "{布局者}从1F药箱取走两片安眠药（剩十片），溶进保温杯的热茶，之后拿着保温杯在塔内走动。", kind: "event", from: 5, to: 15 }, { id: "E08", phase: "d2", text: "{布局者}在1F大厅角落告诉{死者}铭文的位置与“只有钟面三点前能过去”，递出保温杯。{大厅目击}看见两人交谈。", kind: "event", from: 19, to: 19, if: "{死者}与{布局者}仍按原计划行动" }, { id: "E09", phase: "d2", text: "{死者}从文具柜拿走较粗的那支铅笔和几张纸。", kind: "event", from: 20, to: 28, if: "{死者}仍按原计划行动" }, { id: "E10", phase: "d2", text: "{死者}拿着保温杯独自上楼。{大厅目击}看见。", kind: "event", from: 29, to: 29, if: "{死者}仍按原计划行动" }, { id: "E11", phase: "d2", text: "{死者}在5F西侧外壁抄下铭文，在页边写下日期与{布局者}的名字，喝了茶，靠墙睡着。", kind: "event", from: 31, to: 31, if: "{死者}已到达5F西侧且未被阻止" }, { id: "E12", phase: "d2", text: "{窃读者}跟着上楼。{大厅目击}看见。", kind: "event", from: 32, to: 32 }, { id: "E13", phase: "d2", text: "{窃读者}在5F看见{死者}睡着，没有叫醒，用掉在地上的铅笔抄下铭文，顺手把铅笔揣走。", kind: "event", from: 33, to: 33, if: "{死者}正在5F西侧昏睡" }, { id: "E14", phase: "d2", text: "{窃读者}匆匆下楼。{大厅目击}看见。", kind: "event", from: 34, to: 34 }, { id: "E15", phase: "d2", text: "时针之墙压住东口，推不开；第39轮起{死者}所在区域与东口隔开。", kind: "event", from: 35, to: 39 }, { id: "E16", phase: "d2", text: "共同进食，{死者}缺席。{窃读者}没有说出他看见的事。", kind: "event", from: 55, to: 65, if: "{死者}仍被封在西侧" }, { id: "E17", phase: "d2", text: "日落：钟停在6点，东口上锁，1F抽签，结果为{原值班者}。", kind: "event", from: 72, to: 72 }, { id: "E18", phase: "n2", text: "{窃读者}经铁门登钟室，路过格栅没有停下，匆匆看过即下来。铁门响两次，间隔短。", kind: "event", from: 1, to: 4 }, { id: "E19", phase: "n2", text: "{布局者}取下插销，上5F东半圆摸索一圈，确认一面直墙贯穿圆心，下来挂回插销。", kind: "event", from: 5, to: 8 }, { id: "E20", phase: "n2", text: "{原值班者}经铁门上行，在格栅前停下贴近静听，听见西半圆里熟睡的呼吸声，登钟室检查后下来。铁门响两次，间隔长。", kind: "event", from: 9, to: 14, if: "{死者}仍在西半圆昏睡" }, { id: "E21", phase: "n2", text: "{摇钟者}来到机房帮忙，{原值班者}笑着把曲柄托付给对方。若此时{{user}}在机房并愿意摇钟，改为托付给{{user}}。", kind: "event", from: 15, to: 17 }, { id: "E22", phase: "n2", text: "摇钟：第18轮起曲柄变沉；第20轮{死者}与保温杯被时针之墙推进竖井，曲柄突然一轻，{原值班者}说“老钟都这样”；{大厅目击}在1F听见闷响；第22轮鸣钟十二下。", kind: "event", from: 18, to: 22, if: "{死者}仍在西半圆，且无人中止或逆摇" }, { id: "E23", phase: "n2", text: "{零点目击}从摇钟者手中接过插销，上5F摸索一圈：只有一面墙，完整的圆，没有人。下来挂回插销。", kind: "event", from: 23, to: 25 }, { id: "E24", phase: "d3", text: "日出点名。若{死者}缺席：众人搜索，打开1F竖井检修门发现尸体，系统宣布有人死于他人之手、钟楼停摆，并在正文末尾输出<阶段切换>调查</阶段切换>。若无人死亡：点名全员到齐，钟楼照常走动。", kind: "event", from: 1, to: 1 }, { id: "E25", phase: "d3", text: "日落：钟停在6点，东口上锁，1F在所有存活者中抽签（包括{{user}}与同伴）选出第三夜值班者。所有人都知道这支签意味着什么。", kind: "event", from: 72, to: 72 }, { id: "E26", phase: "n3", text: "第三夜值班者知道自己将被留下，会按其人格设法把曲柄托付给别人（劝说、交换条件、欺骗、以情相求），也可能认命；{{user}}与同伴同样可能被托付。最后实际摇动曲柄、让大钟鸣响十二下的人，就是第三夜的值班者，第20轮前鸣钟。", kind: "event", from: 1, to: 20 }, { id: "E27", phase: "n3", text: "第四日日出：点名。第三夜最后摇动曲柄的人没有出现，他站在钟室大钟旁，被钟楼留下成为钟守，石壁上多了他的名字。其余人通关。按世界书F5评价，在正文末尾输出<副本结算>。", kind: "event", from: 28, to: 28 }, { id: "E28", phase: "inv", text: "调查开始：钟楼停在12点，5F为完整的圆，东口因停摆上锁，插销挂在机房。", kind: "event", from: 1, to: 1 }, { id: "E29", phase: "inv", text: "调查时间结束：系统宣布审判开启，并在正文末尾输出<阶段切换>审判</阶段切换>。", kind: "event", from: 50, to: 50 }, { id: "E30", phase: "trial", text: "审判时间结束：强制投票，按守则第10条执行；投中时凶手成为钟守，其余人通关。在正文末尾输出<副本结算>。", kind: "event", from: 50, to: 50 }], bA = [{ id: "M1", q: "第一夜的值班签会抽中主播吗", yes: "会", no: "不会", p: 0.1, by: "d1", judge: "第一日日落的抽签结果是{{user}}本人当夜值班" }, { id: "M2", q: "塔里会出人命吗", yes: "会", no: "不会", p: 0.5, judge: "有人死于他人之手，系统宣布钟楼停摆、开启审判" }, { id: "M3", q: "主播会亲手摇响大钟吗", yes: "会", no: "不会", p: 0.35, judge: "{{user}}本人在4F机房摇动曲柄，让大钟鸣响" }], vA = [{ title: "游玩说明", md: `## 副本概况
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
- 1F文具柜：一沓纸、两支铅笔。因为道具栏冻结，这是塔内仅有的书写工具。` }, { title: "楼层图", image: "zhonglou-map.svg" }], kA = [{ type: "discuss", text: "S级本还封异能，这谁顶得住", when: "open" }, { type: "discuss", text: "异能封了，道具也冻了，全靠脑子" }, { type: "discuss", text: "塔里连个钟都没有，全靠外面那一根时针" }, { type: "discuss", text: "守则我截图了，第十四条越看越不对劲" }, { type: "cold", text: "四面都是海，想跑都没船" }, { type: "discuss", text: "抽签别抽到主播，我看着都怕", phase: ["d1", "d2", "d3"] }, { type: "discuss", text: "今晚谁值班？", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "钟面层不能有光，那得多黑", phase: ["n1", "n2", "n3"] }, { type: "bless", text: "十二下，一定要数清楚", phase: ["n1", "n2", "n3"] }, { type: "discuss", text: "谁想当钟守，反正我不想" }, { type: "discuss", text: "停摆了……开始查吧", phase: ["inv"] }, { type: "discuss", text: "投票前再想想，投错了只有凶手能出去", phase: ["trial"] }, { type: "discuss", text: "平票也算没找出来，别分票", phase: ["trial"] }], wA = {
  id: rA,
  name: iA,
  version: oA,
  level: lA,
  players: aA,
  token: cA,
  legacyKeys: uA,
  detect: AA,
  time: dA,
  remaining: fA,
  deadline: pA,
  roles: hA,
  rolesNote: mA,
  stateFields: gA,
  phases: xA,
  events: yA,
  markets: bA,
  docs: vA,
  danmaku: kA
}, _A = "jingjie", zA = "境界游乐园", $A = "1.1.0", SA = "A", EA = "【副本进行中：境界游乐园】", CA = [], MA = { briefingName: "境界游乐园" }, IA = { type: "none" }, TA = { type: "fromPanel" }, NA = [], PA = [], jA = [{ id: "M1", q: "15:30演出时主播会回头吗", yes: "会", no: "不会", p: 0.3, judge: "15:30表演区演出期间，{{user}}本人回头了" }, { id: "M2", q: "主播会坐上摩天轮吗", yes: "会", no: "不会", p: 0.55, judge: "{{user}}本人乘坐了摩天轮" }, { id: "M3", q: "主播会走进镜宫吗", yes: "会", no: "不会", p: 0.45, judge: "{{user}}本人进入了镜宫" }], RA = [{ title: "游客须知", md: `A-境界游乐园｜F1 可公开规则·《境界游乐园》游客须知（修订版）

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
如果你确认自己不是游客，请把手环交给离你最近的人。` }], OA = {
  id: _A,
  name: zA,
  version: $A,
  level: SA,
  token: EA,
  legacyKeys: CA,
  detect: MA,
  time: IA,
  remaining: TA,
  phases: NA,
  events: PA,
  markets: jA,
  docs: RA
}, FA = "kaoshi", LA = "考试", DA = "1.1.0", BA = "A", VA = "【副本进行中：考试】", UA = [], WA = { briefingName: "考试" }, HA = { type: "countdown", minutesPerRound: 3 }, GA = { type: "fromPanel" }, KA = "至考试结束", YA = [{ id: "main", name: "考试", cap: 100, next: null }], qA = [], JA = [], ZA = {
  id: FA,
  name: LA,
  version: DA,
  level: BA,
  token: VA,
  legacyKeys: UA,
  detect: WA,
  time: HA,
  remaining: GA,
  deadline: KA,
  phases: YA,
  events: qA,
  docs: JA
}, QA = "xiyan", XA = "喜宴", ed = "1.2.0", td = "D", nd = "【副本进行中：喜宴】", sd = [], rd = { briefingName: "喜宴", patterns: ["6=5\\+1"] }, id = { type: "countdown", minutesPerRound: 3 }, od = { type: "fromPanel" }, ld = "至天亮", ad = [{ id: "main", name: "喜宴", cap: 160, next: null }], cd = [], ud = [{ id: "M1", q: "主播会穿上喜服吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人穿上了喜服" }, { id: "M2", q: "这场婚礼的新人会是主播吗", yes: "是", no: "不是", p: 0.17, judge: "{{user}}被认定为这场婚礼的新郎或新娘", judgeNo: "{{user}}以外的某个人被认定为这场婚礼的新郎或新娘" }, { id: "M3", q: "天亮前会有人死吗", yes: "会", no: "不会", p: 0.4, judge: "有人死亡" }], Ad = [], dd = [{ type: "praise", text: "D级本就是好，还管饭", when: "open" }, { type: "discuss", text: "村民也太热情了吧，热情得我发毛" }, { type: "discuss", text: "新人在你们之中？谁结婚啊" }, { type: "discuss", text: "那身喜服别穿！别穿！" }, { type: "discuss", text: "唢呐一响，我鸡皮疙瘩起来了" }, { type: "bless", text: "撑到天亮就行吧？应该吧？" }, { type: "discuss", text: "六个人，谁心里有鬼" }, { type: "discuss", text: "吃席吃出一身冷汗" }, { type: "discuss", text: "红纸贴满墙，看久了眼花" }, { type: "cold", text: "D级而已，大佬们别笑" }, { type: "discuss", text: "喜事别变丧事啊……", when: "hurt" }], fd = {
  id: QA,
  name: XA,
  version: ed,
  level: td,
  token: nd,
  legacyKeys: sd,
  detect: rd,
  time: id,
  remaining: od,
  deadline: ld,
  phases: ad,
  events: cd,
  markets: ud,
  docs: Ad,
  danmaku: dd
}, pd = "youxi", hd = "游戏", md = "1.2.0", gd = "C", xd = "【副本进行中：游戏】", yd = [], bd = { briefingName: "游戏", patterns: ["(本次|此次)副本《游戏》"] }, vd = { type: "countdown", minutesPerRound: 8 }, kd = { type: "fromPanel" }, wd = "至结算", _d = [{ id: "main", name: "游戏", cap: 90, next: null }], zd = [], $d = [{ id: "M1", q: "第一个出局的会是主播吗", yes: "是", no: "不是", p: 0.08, judge: "第一个被淘汰出局的人是{{user}}", judgeNo: "{{user}}以外的某个人成为第一个被淘汰出局的人" }, { id: "M2", q: "三场游戏能全部玩完吗", yes: "能", no: "不能", p: 0.55, judge: "第三场游戏结束" }, { id: "M3", q: "喊数抱团时主播会拉陌生人吗", yes: "会", no: "不会", p: 0.5, judge: "喊数抱团时，{{user}}主动拉了自己同伴以外的人一起抱团" }], Sd = [], Ed = [{ type: "discuss", text: "小时候玩的游戏，现在要拿命玩", when: "open" }, { type: "discuss", text: "喊数抱团，手快有手慢无" }, { type: "bless", text: "数清人数啊！" }, { type: "discuss", text: "那群小孩一直在看这边" }, { type: "discuss", text: "十二个人，最后能剩几个" }, { type: "discuss", text: "三场游戏，现在第几场了" }, { type: "cold", text: "C级本，老观众都说别小看" }, { type: "discuss", text: "村子里太安静了，就小孩在笑" }, { type: "bless", text: "别掉队，跟紧人" }, { type: "smear", text: "拉人凑数的时候，真看出人品了" }, { type: "discuss", text: "又少了一个……", when: "hurt" }], Cd = {
  id: pd,
  name: hd,
  version: md,
  level: gd,
  token: xd,
  legacyKeys: yd,
  detect: bd,
  time: vd,
  remaining: kd,
  deadline: wd,
  phases: _d,
  events: zd,
  markets: $d,
  docs: Sd,
  danmaku: Ed
}, Md = "wuming", Id = "污名", Td = "1.1.0", Nd = "B", Pd = "4-8", jd = "【副本进行中：污名】", Rd = ["污名"], Od = { briefingName: "污名" }, Fd = { type: "countdown", minutesPerRound: 3 }, Ld = { type: "countdown", template: "剩余{m}分钟" }, Dd = "至收播", Bd = [{ id: "normal", name: "常规", cap: 60, next: "final" }, { id: "final", name: "定稿", cap: 20, next: null }], Vd = [{ id: "E01", phase: "normal", from: 1, to: 1, kind: "event", text: "玩家在正在直播的卧室里醒来，系统展开简报。直播已经开始，她正在被围攻。" }, { id: "E02", phase: "final", from: 1, to: 1, kind: "directive", text: "定稿阶段开始：弹幕不再产生全新指控，而是从此前出现过的叙事中挑选一版，逐渐写进现实。" }, { id: "E03", phase: "final", from: 20, to: 20, kind: "event", text: "收播：直播结束。按世界书F1第九节判定失败或评价，在正文末尾输出<副本结算>。" }], Ud = [], Wd = !0, Hd = {
  id: Md,
  name: Id,
  version: Td,
  level: Nd,
  players: Pd,
  token: jd,
  legacyKeys: Rd,
  detect: Od,
  time: Fd,
  remaining: Ld,
  deadline: Dd,
  phases: Bd,
  events: Vd,
  docs: Ud,
  disableLive: Wd
}, Gd = "dusongshu", Kd = "杜松树", Yd = "1.1.0", qd = "A", Jd = 6, Zd = "【副本进行中：杜松树】", Qd = [], Xd = { briefingName: "杜松树" }, ef = { type: "countdown", minutesPerRound: 30 }, tf = { type: "fromPanel" }, nf = "至第四日日出", sf = ["父亲", "继母", "玛琳", "男孩", "其余"], rf = "登记开局发到的牌面。「继母」「男孩」必定发出；金匠、鞋匠、磨坊工写进「其余」，多人用顿号分隔。之后牌面改写不重新登记。", of = [{ id: "n1", name: "第一夜", cap: 24, next: "d2", night: !0 }, { id: "d2", name: "第二日", cap: 24, next: "n2", clock: !0 }, { id: "n2", name: "第二夜", cap: 24, next: "d3", night: !0 }, { id: "d3", name: "第三日", cap: 24, next: "n3", clock: !0 }, { id: "n3", name: "第三夜", cap: 24, next: null, night: !0 }], lf = [{ id: "E01", phase: "n1", from: 1, to: 1, kind: "event", text: "日落。六人在与自己牌面一致的房间醒来，口袋里各有一块木牌；系统展开简报。杜松树上的鸟一声不吭。" }, { id: "E02", phase: "n1", from: 10, to: 14, kind: "event", text: "{继母}耳边有人说「去叫他拿个苹果吧」；看向{男孩}时，有一瞬间说不清来由的厌恶。只写{继母}能感知到的，不替其行动。", if: "{继母}仍活着" }, { id: "E03", phase: "n1", from: 19, to: 19, kind: "event", text: "苹果箱的盖子掀开一条缝，箱底传来轻轻的敲击声，醒着或浅睡的人能听见楼下有动静。一个NPC下楼去看，弯腰，箱盖落下，只有很重的一声闷响，然后安静。{{user}}或同伴若自己下楼，按其实际行动结算。", if: "今夜还没有人死在苹果箱里" }, { id: "E04", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。死者的床空着，鞋还在床边；灶火是旺的，锅里炖着肉。所有人的牌面按实际发生的事改写，画像上男孩的脸变成死者的脸。鸟第一次开口，用死者的声音唱「母亲杀了我」。", if: "第一夜有人死在苹果箱里" }, { id: "E05", phase: "d2", from: 1, to: 1, kind: "event", text: "日出。所有人的牌面变成空白，鸟仍然不叫，灶膛是冷的。", if: "第一夜没有人死在苹果箱里" }, { id: "E06", phase: "n2", from: 1, to: 1, kind: "directive", text: "日落：鸟按顺序只唱已成真的歌词，不多唱一个字；还没有歌词成真就不唱。" }, { id: "E07", phase: "n2", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，轻轻的敲击声比上一夜更多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E08", phase: "d3", from: 1, to: 1, kind: "directive", text: "日出：牌面按实际发生的事改写；鸟只唱已成真的歌词；吃过炖肉的人木化推进一步。" }, { id: "E09", phase: "n3", from: 1, to: 1, kind: "directive", text: "日落：若故事尚未进入断局，从现在起进入断局（见世界书F3阶段三）；鸟只唱已成真的歌词。" }, { id: "E10", phase: "n3", from: 19, to: 19, kind: "event", text: "苹果箱、衣柜、抽屉、地窖门都掀开一条缝，敲击声比前两夜都多。谁下楼、谁弯腰去看，盖子就落下。", if: "至今还没有人死在苹果箱里" }, { id: "E11", phase: "n3", from: 24, to: 24, kind: "directive", text: "本轮结尾是第四日日出，时限到达：按世界书F2第5节与F3第3节判定结局，在正文末尾输出<副本结算>。" }], af = [{ key: "cards", label: "各人当前牌面", hint: "每人牌上现在刻的字；只在日出改写" }, { key: "boy", label: "死者", hint: "死在苹果箱里的人；还没有写「无」" }, { key: "eaters", label: "吃过炖肉的人", hint: "名字、第一次吃在第几日、木化到哪一步" }, { key: "bones", label: "骨头在哪里", hint: "锅里、桌下、丝巾里、已埋，各还剩多少；谁拾的" }, { key: "scarf", label: "丝巾", hint: "还在「玛琳」房抽屉里，还是在谁手里" }, { key: "lastPage", label: "最后一页", hint: "还在鸟巢里，还是谁拿到了、谁读过" }, { key: "lines", label: "已成真的歌词", hint: "四句里已成真的几句" }, { key: "millstone", label: "磨盘", hint: "现在的位置，指向谁" }, { key: "evidence", label: "{{user}}已发现的异常", hint: "撑杆啄痕、爪痕、羽毛、没有指纹、撕口啄痕、最后一页中，{{user}}亲自发现的" }, { key: "stage", label: "故事阶段", hint: "迷雾、暗黑或断局，按世界书F3的条件" }, { key: "named", label: "埋骨后说出的名字", hint: "埋骨的人盖上土后第一次说出的名字；还没有写「无」" }], cf = [{ id: "M1", q: "第一夜会有人死在苹果箱里吗", yes: "会", no: "不会", p: 0.5, by: "n1", judge: "有人在苹果箱里被箱盖压死或死在箱中" }, { id: "M2", q: "主播会吃下锅里的炖肉吗", yes: "会", no: "不会", p: 0.3, judge: "{{user}}本人吃了灶上铁锅里炖的肉" }, { id: "M3", q: "杜松树上的鸟会开口吗", yes: "会", no: "不会", p: 0.6, judge: "杜松树上那只红绿羽毛的鸟开口说话或唱歌" }], uf = [{ title: "游玩说明", md: `## 副本概况
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
最后一页被撕掉了，装订线上只剩一条不整齐的纸茬。` }], Af = [{ type: "discuss", text: "醒来口袋里就一块木牌，这是什么身份", when: "open" }, { type: "discuss", text: "屋里暖和得不像A级本" }, { type: "discuss", text: "故事书偏偏少了最后一页" }, { type: "bless", text: "别碰那个苹果箱啊" }, { type: "discuss", text: "拿到继母牌的，压力也太大了" }, { type: "discuss", text: "那只鸟一直不叫" }, { type: "discuss", text: "画像上的脸全是糊的" }, { type: "cold", text: "四面都是林子，别想跑了" }, { type: "discuss", text: "今晚有人下楼吗……别下", phase: ["n1"] }, { type: "bless", text: "男孩牌的今晚别落单", phase: ["n1"] }, { type: "discuss", text: "少了一个人……", when: "hurt" }, { type: "discuss", text: "牌上的字……变了？", phase: ["d2", "n2", "d3", "n3"] }, { type: "bless", text: "别吃那锅！", phase: ["d2", "n2", "d3", "n3"] }, { type: "discuss", text: "鸟开口了", phase: ["d2", "n2", "d3", "n3"] }, { type: "smear", text: "吃了的人还装没事", phase: ["d2", "n2", "d3", "n3"] }], df = {
  id: Gd,
  name: Kd,
  version: Yd,
  level: qd,
  players: Jd,
  token: Zd,
  legacyKeys: Qd,
  detect: Xd,
  time: ef,
  remaining: tf,
  deadline: nf,
  roles: sf,
  rolesNote: rf,
  phases: of,
  events: lf,
  stateFields: af,
  markets: cf,
  docs: uf,
  danmaku: Af
}, ff = "nongxian", pf = "农闲", hf = "1.0.0", mf = "D", gf = !0, xf = "不限", yf = "【副本进行中：农闲】", bf = [], vf = { briefingName: "农闲" }, kf = { type: "none" }, wf = { type: "fromPanel" }, _f = [], zf = [], $f = [{ title: "游玩说明", md: `## 系统简报

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
梅姨教新菜，会添在配方板上。` }], Sf = [{ type: "discuss", text: "这是副本？这是度假吧", when: "open" }, { type: "discuss", text: "休整本也开播，我爱看" }, { type: "praise", text: "这田种得真齐整" }, { type: "praise", text: "方块房子盖得好好看" }, { type: "discuss", text: "梅姨做的饭看着好香" }, { type: "discuss", text: "蜂叔又在给鸡起名字了" }, { type: "discuss", text: "水花是方的，笑死" }, { type: "discuss", text: "今天拿什么去换了？" }, { type: "discuss", text: "月亮也是方的" }, { type: "discuss", text: "桃花瓣落了一头" }, { type: "bless", text: "好好歇着，外面的事先别想" }, { type: "envy", text: "凭什么别人能抽到休整本" }, { type: "cold", text: "种地有什么好看的……好吧我看了一小时" }], Ef = {
  id: ff,
  name: pf,
  version: hf,
  level: mf,
  rest: gf,
  players: xf,
  token: yf,
  legacyKeys: bf,
  detect: vf,
  time: kf,
  remaining: wf,
  phases: _f,
  events: zf,
  docs: $f,
  danmaku: Sf
}, Cf = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 707" width="400" height="707" font-family="'Noto Serif CJK SC','Songti SC','Noto Serif SC','SimSun',serif" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTphNmE3YjgwOC1iZWE1LTRjOWEtYWY3My00YTFiYTAwNDVjZDgAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaA7lHgmd1lrfgR2Ba5Av6LcAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpjZGQwMzcxNC1jOWI3LTQ3YWUtODUzMC0wNDAzNWZiYTIyZDJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoi2PRahh5wcGGeW3Ga5NSPQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg0PaDqGneMavLaCcae5iL8OYLmd2yClwfwZExuVptlCGkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaDguTGafdJMhAn9tUVvsVu0AAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCXT1hZpVBRyKX/1bZWw7nZ+KF4h2sKtGHgmIQtWRewbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjjZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOmE2YTdiODA4LWJlYTUtNGM5YS1hZjczLTRhMWJhMDA0NWNkOC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOmIyZTU1MDFkLTQ0YjUtNGI0NS1iODM3LWU4MThkMDg1MmNiZnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDQ9oOoad4xq8toJxp7mIvw5guZ3bIKXB/BkTG5Wm2UIaJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggkgyEL0oyKP7JKq95iWpfJj6evOzwZtXkIDhKkVi2NgqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggMCM1nvcBcGO3X47TZ8o8ZKesJONwv/U3Kbc1YRNYXht0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQPSgw7maSzLdQ1Sg4R7jSQlmE0J56Jp4mnYXgOq8RktEhwHifgfUzS9frn6I3+bgW8LKMGX3ru/OePvAdodGgvA=</c2pa:manifest></metadata><rect x="0" y="0" width="400" height="707" fill="#efe6d2"/><text x="200.0" y="24.0" font-size="15" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟楼 · 楼层图</text><text x="372.0" y="24.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">北↑</text><rect x="18.0" y="18.0" width="10" height="10" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="34.0" y="24.0" font-size="10" text-anchor="start" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井</text><text x="100.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">钟室</text><circle cx="100.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><path d="M84 178 Q84 150 100 148 Q116 150 116 178 Z" fill="none" stroke="#3b3326" stroke-width="1.4"/><line x1="80.0" y1="178.0" x2="120.0" y2="178.0" stroke="#3b3326" stroke-width="1.4"/><circle cx="100.0" cy="182.0" r="3" fill="#3b3326" stroke="#3b3326" stroke-width="1"/><text x="100.0" y="202.0" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">大钟</text><text x="300.0" y="70.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">5F 钟面层</text><circle cx="300.0" cy="168.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><line x1="300.0" y1="98.0" x2="300.0" y2="238.0" stroke="#3b3326" stroke-width="1.6"/><text x="335.0" y="142.0" font-size="11" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">东室</text><text x="265.0" y="142.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">西室·无入口</text><rect x="342.0" y="162.0" width="12" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="342.0" y1="168.0" x2="354.0" y2="168.0" stroke="#3b3326" stroke-width="0.8"/><text x="336.0" y="190.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">东口（梯）</text><circle cx="244.0" cy="168.0" r="6" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="266.0" y="186.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">西口</text><text x="266.0" y="199.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井·危险</text><text x="100.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">4F 机房</text><circle cx="100.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><rect x="88.0" y="375.0" width="24" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="112.0" y1="383.0" x2="120.0" y2="383.0" stroke="#3b3326" stroke-width="1.6"/><line x1="120.0" y1="378.0" x2="120.0" y2="388.0" stroke="#3b3326" stroke-width="1.6"/><text x="100.0" y="403.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">齿轮箱·曲柄</text><rect x="146.0" y="375.0" width="10" height="16" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="146.0" y1="379.0" x2="156.0" y2="379.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="383.0" x2="156.0" y2="383.0" stroke="#3b3326" stroke-width="0.8"/><line x1="146.0" y1="387.0" x2="156.0" y2="387.0" stroke="#3b3326" stroke-width="0.8"/><text x="140.0" y="361.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯·通东口</text><rect x="34.0" y="374.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="36.0" y1="372.0" x2="48.0" y2="372.0" stroke="#3b3326" stroke-width="2.6"/><text x="70.0" y="347.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">铁门·旋转梯</text><text x="70.0" y="359.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">通钟室</text><rect x="124.1" y="414.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="128.1" y1="414.3" x2="128.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="132.1" y1="414.3" x2="132.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><line x1="136.1" y1="414.3" x2="136.1" y2="428.3" stroke="#3b3326" stroke-width="0.8"/><text x="102.0" y="433.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">楼梯·通3F</text><text x="300.0" y="285.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">3F</text><circle cx="300.0" cy="383.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="300.0" cy="383.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="319.1" y1="394.0" x2="360.6" y2="418.0" stroke="#3b3326" stroke-width="1.1"/><line x1="307.5" y1="403.7" x2="323.9" y2="448.8" stroke="#3b3326" stroke-width="1.1"/><line x1="290.0" y1="402.6" x2="268.2" y2="445.4" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="388.7" x2="232.4" y2="401.1" stroke="#3b3326" stroke-width="1.1"/><line x1="278.7" y1="377.3" x2="232.4" y2="364.9" stroke="#3b3326" stroke-width="1.1"/><line x1="296.2" y1="361.3" x2="287.8" y2="314.1" stroke="#3b3326" stroke-width="1.1"/><line x1="318.0" y1="370.4" x2="357.3" y2="342.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="232.4,401.1 231.1,395.2 230.3,389.1 230.0,383.0 230.3,376.9 231.1,370.8 232.4,364.9 278.7,377.3 278.3,379.2 278.1,381.1 278.0,383.0 278.1,384.9 278.3,386.8 278.7,388.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="297.1" y="429.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="263.5" y="412.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="268.2" y="348.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="318.0" y="339.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="347.0" y="380.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="329.6" y="418.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="300.0" y="467.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="100.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">2F</text><circle cx="100.0" cy="598.0" r="70" fill="none" stroke="#3b3326" stroke-width="1.6"/><circle cx="100.0" cy="598.0" r="22" fill="none" stroke="#3b3326" stroke-width="1"/><line x1="119.1" y1="609.0" x2="160.6" y2="633.0" stroke="#3b3326" stroke-width="1.1"/><line x1="107.5" y1="618.7" x2="123.9" y2="663.8" stroke="#3b3326" stroke-width="1.1"/><line x1="90.0" y1="617.6" x2="68.2" y2="660.4" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="603.7" x2="32.4" y2="616.1" stroke="#3b3326" stroke-width="1.1"/><line x1="78.7" y1="592.3" x2="32.4" y2="579.9" stroke="#3b3326" stroke-width="1.1"/><line x1="96.2" y1="576.3" x2="87.8" y2="529.1" stroke="#3b3326" stroke-width="1.1"/><line x1="118.0" y1="585.4" x2="157.3" y2="557.8" stroke="#3b3326" stroke-width="1.1"/><polygon points="32.4,616.1 31.1,610.2 30.3,604.1 30.0,598.0 30.3,591.9 31.1,585.8 32.4,579.9 78.7,592.3 78.3,594.2 78.1,596.1 78.0,598.0 78.1,599.9 78.3,601.8 78.7,603.7" fill="#4a4133" stroke="#3b3326" stroke-width="1"/><text x="97.1" y="644.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="63.5" y="627.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="68.2" y="563.3" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="118.0" y="554.6" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="147.0" y="595.9" font-size="10" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧</text><text x="129.6" y="633.2" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text><text x="100.0" y="682.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">卧室五间</text><text x="300.0" y="500.0" font-size="12" text-anchor="middle" dominant-baseline="central" font-weight="bold" fill="#3b3326">1F 大厅</text><path d="M287.8 666.9 A70 70 0 1 1 312.2 666.9" fill="none" stroke="#3b3326" stroke-width="1.6"/><text x="300.0" y="678.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">塔门</text><path d="M267.0 540.8 A66 66 0 0 1 333.0 540.8" fill="none" stroke="#3b3326" stroke-width="4"/><text x="300.0" y="546.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">守则石壁</text><rect x="286.0" y="592.0" width="28" height="12" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="300.0" y="614.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">抽签桌</text><rect x="234.0" y="589.0" width="16" height="18" fill="#4a4133" stroke="#3b3326" stroke-width="1.2"/><line x1="250.0" y1="593.0" x2="250.0" y2="603.0" stroke="#3b3326" stroke-width="2.6"/><text x="266.0" y="626.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">竖井检修门</text><rect x="338.0" y="564.0" width="12" height="9" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="344.0" y="554.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">药箱</text><rect x="350.0" y="592.0" width="9" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><text x="334.0" y="599.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">文具柜</text><rect x="324.1" y="629.3" width="16" height="14" fill="none" stroke="#3b3326" stroke-width="1.2"/><line x1="328.1" y1="629.3" x2="328.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="332.1" y1="629.3" x2="332.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><line x1="336.1" y1="629.3" x2="336.1" y2="643.3" stroke="#3b3326" stroke-width="0.8"/><text x="334.0" y="652.0" font-size="9.5" text-anchor="middle" dominant-baseline="central" font-weight="normal" fill="#3b3326">梯</text></svg>`;
function ln(e) {
  const t = Math.max(0, Math.round(e));
  if (t < 60) return `${t}分钟`;
  const n = Math.floor(t / 60), s = t % 60;
  return s ? `${n}小时${s}分` : `${n}小时`;
}
const Mf = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|h|H|分钟|分|min)/g;
function Ki(e) {
  if (!e) return null;
  let t = 0, n = !1;
  for (const s of e.matchAll(Mf)) {
    const r = Number(s[1]), i = s[2];
    n = !0, i === "天" ? t += r * 1440 : i === "小时" || i === "个小时" || i === "h" || i === "H" ? t += r * 60 : t += r;
  }
  return n ? Math.round(t) : null;
}
function wl(e) {
  if (!e) return { remaining: null, total: null };
  const [t, n] = e.split(/[/／]/);
  return { remaining: Ki(t), total: n === void 0 ? null : Ki(n) };
}
function If(e, t) {
  return e.phases.find((n) => n.id === t);
}
function Ln(e, t) {
  const n = [], s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); )
    n.push(r), s.add(r.id), r = If(e, r.next);
  return n;
}
function _l(e, t) {
  return Ln(e, t).filter((n) => n.night).length;
}
function Tf(e, t, n) {
  if (Ln(e, t).some((r) => r.id === n.id)) return t;
  const s = e.phases[0];
  return s && Ln(e, s).some((r) => r.id === n.id) ? s : n;
}
function Ar(e, t, n, s, r) {
  if (!e.phases.length || !e.phases.some((d) => d.id === t.id)) return;
  let i = Ln(e, n), o = i.findIndex((d) => d.id === t.id);
  o < 0 && (i = Ln(e, t), o = 0);
  const l = i.reduce((d, h) => d + Math.max(0, h.cap), 0), a = Math.max(0, t.cap - s) + i.slice(o + 1).reduce((d, h) => d + Math.max(0, h.cap), 0), c = t.deadline ?? i[0].deadline ?? e.deadline, u = { x: a, y: l, deadline: c };
  if (e.time.type === "countdown") {
    const d = e.time.minutesPerRound, h = e.time.totalMinutes, g = h && h > 0 ? h : l * d;
    let k = h && h > 0 && l > 0 ? Math.round(g * a / l) : a * d;
    const z = wl(r).remaining;
    z !== null && (k = Math.min(k, z - d)), k = Math.max(0, k), Object.assign(u, { minutes: k, total: g, text: `约剩${ln(k)}/${ln(g)}` });
  } else if (e.time.type === "clock")
    if (t.frozen) u.text = `${e.name}停摆·${t.name}中`;
    else if (e.remaining.type === "nights") {
      const d = e.remaining.template.replace("{n}", String(_l(e, t)));
      u.text = c ? `${c}·${d}` : d;
    } else c && (u.text = c);
  return u;
}
const Dn = { D: 70, C: 90, B: 110, A: 135, S: 200 };
function zl(e, t, n = Dn) {
  const s = e ?? "", r = /[（(]\s*最多\s*(\d+)\s*轮\s*[）)]/.exec(s), i = r ? Math.max(1, Number(r[1])) : Math.max(1, Math.round(n[t] ?? Dn[t])), o = /(\d+(?:\.\d+)?)\s*(天|个小时|小时|分钟|分)/.exec(s.replace(/[（(][^）)]*[）)]/g, ""));
  if (!o) return { rounds: i };
  const l = Number(o[1]), a = Math.round(o[2] === "天" ? l * 1440 : o[2].includes("小时") ? l * 60 : l);
  return a <= 0 ? { rounds: i } : { rounds: i, totalMinutes: a, minutesPerRound: Math.max(1, Math.round(a / i)) };
}
const ws = "generic", Nr = [wA, OA, ZA, fd, Cd, Hd, df, Ef], Nf = {
  zhonglou: {
    "zhonglou-map.svg": "data:image/svg+xml;charset=utf-8," + encodeURIComponent(Cf)
  }
};
function Pf(e, t) {
  const n = Nf[e.id]?.[t];
  return n || (/^https?:\/\//i.test(t) || /^data:image\//i.test(t) ? t : null);
}
const $l = ["D", "C", "B", "A", "S"];
function Sl(e) {
  const t = [], n = e;
  if (!n || typeof n != "object" || Array.isArray(n)) return ["副本包必须是 JSON 对象"];
  const s = (c) => {
    (typeof n[c] != "string" || !n[c].trim()) && t.push(`缺少字段或不是文本：${c}`);
  };
  s("id"), s("name"), s("version"), s("token"), typeof n.id == "string" && !/^[A-Za-z0-9_-]+$/.test(n.id) && t.push("id 只能包含字母、数字、下划线和短横线"), n.id === ws && t.push(`id 不能是保留字 ${ws}`), $l.includes(n.level) || t.push("level 必须是 D/C/B/A/S 之一"), n.players !== void 0 && typeof n.players != "number" && typeof n.players != "string" && t.push("players 必须是数字或文本"), (!Array.isArray(n.legacyKeys) || n.legacyKeys.some((c) => typeof c != "string")) && t.push("legacyKeys 必须是文本数组"), !n.detect || typeof n.detect.briefingName != "string" || !n.detect.briefingName ? t.push("缺少 detect.briefingName") : n.detect.patterns !== void 0 && (!Array.isArray(n.detect.patterns) || n.detect.patterns.some((c) => typeof c != "string")) && t.push("detect.patterns 必须是文本数组");
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
        for (const h of ["id", "q", "yes", "no", "judge"])
          (typeof u[h] != "string" || !u[h].trim()) && t.push(`markets[${d}] 缺少文本字段 ${h}`);
        (typeof u.p != "number" || !(u.p >= 0.01 && u.p <= 0.99)) && t.push(`markets[${d}].p 必须是 0.01–0.99 的数`), u.judgeNo !== void 0 && (typeof u.judgeNo != "string" || !u.judgeNo.trim()) && t.push(`markets[${d}].judgeNo 必须是文本`), u.by !== void 0 && typeof u.by != "string" && t.push(`markets[${d}].by 必须是阶段 id`), typeof u.id == "string" && (c.has(u.id) && t.push(`事件盘 id 重复：${u.id}`), c.add(u.id));
      });
    }
  return t;
}
function jf(e) {
  const t = new Set(e.phases.map((n) => n.id));
  return (e.markets ?? []).filter((n) => n.by !== void 0 && !t.has(n.by) ? (console.warn(`[rlzc] 副本包 ${e.id} 的事件盘 ${n.id}：by「${n.by}」不是本包的阶段 id，已跳过`), !1) : !0);
}
function El(e) {
  return $l.includes(e.level ?? "") ? e.level : "D";
}
function Cl(e, t = Dn) {
  const n = El(e), s = zl(e.limit, n, t), r = e.rounds && e.rounds > 0 ? e.rounds : s.rounds, i = s.totalMinutes ? Math.max(1, Math.round(s.totalMinutes / r)) : void 0;
  return {
    id: ws,
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
function Qr(e) {
  const t = new Set(Nr.map((n) => n.id));
  return [...Nr, ...e.filter((n) => !t.has(n.id))];
}
const Rf = /副本简报\s*[-－—]\s*([^\s」』\n]+)/, Of = /<阶段切换>([\s\S]*?)<\/阶段切换>/, Ff = /<副本结算>([\s\S]*?)<\/副本结算>/, Ml = /<副本>([\s\S]*?)<\/副本>/, Lf = /<角色登记>([\s\S]*?)<\/角色登记>/, Df = /(跳到|快进到|睡到|等到)(日落|天黑|天亮|日出|晚饭|夜里|明天)/, Bf = /<积分变动>([\s\S]*?)<\/积分变动>/g;
function Il(e) {
  const t = Rf.exec(e ?? "");
  if (!t) return null;
  const n = { name: t[1] }, s = e.slice(t.index + t[0].length).split(`
`).slice(0, 12).join(`
`), r = (o) => {
    const l = new RegExp(`${o}\\s*[：:]\\s*([^」』\\n]+)`).exec(s);
    return l ? l[1].trim() : void 0;
  }, i = r("等级");
  return i && (n.level = i.replace(/级$/, "").trim().toUpperCase()), n.goal = r("目标"), n.limit = r("时限"), n.players = r("人数"), n;
}
function Vf(e) {
  const t = Of.exec(e ?? "");
  return t ? t[1].trim() : null;
}
function Tl(e) {
  const t = {};
  for (const n of e.split(/[｜|\n]/)) {
    const s = n.search(/[=＝]/);
    if (s < 0) continue;
    const r = n.slice(0, s).trim(), i = n.slice(s + 1).trim();
    r && (t[r] = i);
  }
  return t;
}
function Vs(e) {
  const t = Ff.exec(e ?? "");
  if (!t) return null;
  const n = Tl(t[1]);
  return { raw: t[1].trim(), result: n.结果, rating: n.评价, fields: n };
}
function Nl(e) {
  const t = Lf.exec(e ?? "");
  if (!t) return null;
  const n = Tl(t[1]);
  return Object.keys(n).length ? n : null;
}
function is(e) {
  return e.replace(/^[-*•·]\s*/, "").trim();
}
function Pl(e) {
  const t = Ml.exec(e ?? "");
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
      l === "时限" ? (n.limit = a, s = null) : l === "进度条" ? (n.progressBar = a, s = null) : l === "任务" ? (is(a) && n.tasks.push(is(a)), s = "tasks") : (n.ps = a, s = "ps");
      continue;
    }
    if (/^[^：:\s]{1,6}\s*[：:]/.test(i)) {
      s = null;
      continue;
    }
    s === "tasks" ? is(i) && n.tasks.push(is(i)) : s === "ps" && (n.ps = n.ps ? `${n.ps}
${i}` : i);
  }
  return n;
}
function Uf(e) {
  const t = Df.exec(e ?? "");
  return t ? t[2] : null;
}
function dr(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); ) {
    if (n(r)) return r;
    s.add(r.id), r = r.next ? e.phases.find((i) => i.id === r.next) : void 0;
  }
  return null;
}
function Wf(e, t, n, s) {
  if (!e.phases.length || !e.phases.some((l) => l.id === t.id)) return null;
  const r = (l) => !!l.clock && !l.night;
  let i = null, o = 0;
  switch (s) {
    case "日落":
    case "天黑":
    case "夜里":
      i = dr(e, t, r), o = i?.cap ?? 0;
      break;
    case "晚饭":
      i = dr(e, t, r), i && (o = Math.ceil(i.cap * 0.75), i.id === t.id && o <= n && (o = i.cap));
      break;
    case "天亮":
    case "日出":
    case "明天":
      i = dr(e, t, (l) => !!l.night), o = i?.cap ?? 0;
      break;
  }
  return !i || i.id === t.id && o <= n + 1 ? null : { phase: i.id, round: o, label: `${i.name}第${o}轮` };
}
const Hf = /<状态栏>([\s\S]*?)<\/状态栏>/;
function Gf(e) {
  return e.replace(/[《》「」『』【】"'“”]/g, "").trim();
}
function fr(e, t) {
  const n = Gf(t);
  return n ? e.find((s) => s.name === n || s.detect.briefingName === n) : void 0;
}
const pr = /* @__PURE__ */ new Map();
function Kf(e, t) {
  const n = `${e}\0${t}`;
  if (!pr.has(n)) {
    let s = null;
    try {
      s = new RegExp(t);
    } catch (r) {
      console.warn(`[rlzc] 副本包 ${e} 的 detect.patterns 正则无效，已跳过：${t}`, r);
    }
    pr.set(n, s);
  }
  return pr.get(n);
}
function Yf(e, t) {
  const n = String(e ?? ""), s = (l, a) => l ? { signal: a, pack: l, info: { name: l.name, level: l.level } } : null, r = Il(n);
  if (r)
    return { signal: 1, pack: t.find((a) => a.detect.briefingName === r.name), info: r };
  const i = Ml.exec(n);
  if (i) {
    const l = /副本名\s*[：:]\s*([^\n｜|]+)/.exec(i[1]), a = l && s(fr(t, l[1]), 2);
    if (a) return a;
  }
  for (const l of n.matchAll(/(?:本次|此次)副本《([^》]+)》/g)) {
    const a = s(fr(t, l[1]), 3);
    if (a) return a;
  }
  const o = Hf.exec(n);
  if (o) {
    for (const l of o[1].split(`
`))
      if (l.includes("地点"))
        for (const a of l.matchAll(/副本《([^》]+)》/g)) {
          const c = s(fr(t, a[1]), 4);
          if (c) return c;
        }
  }
  for (const l of t)
    for (const a of l.detect.patterns ?? []) {
      const c = Kf(l.id, a);
      if (c && c.test(n)) return s(l, 5);
    }
  return null;
}
const Yi = 5, qf = { id: "_open", name: "进行中", cap: 0, next: null };
function Re(e) {
  return !e || e.is_user ? !1 : !(e.is_system && e.extra?.type);
}
function Jf(e) {
  const [t, n] = e.split(":").map((s) => parseInt(s, 10));
  return (t || 0) * 60 + (n || 0);
}
function jl(e, t, n) {
  const s = Jf(e) + Math.max(0, n - 1) * t, r = Math.floor(s / 60) % 24, i = (s % 60 + 60) % 60;
  return `${r % 12 === 0 ? 12 : r % 12}:${String(i).padStart(2, "0")}`;
}
function qi(e, t, n) {
  if (!(e.time.type !== "clock" || !t.clock || t.night || t.frozen || n < 1))
    return jl(e.time.dayStart, e.time.minutesPerRound, n);
}
function Rl(e) {
  return e.phases.length ? e.phases : [qf];
}
function us(e, t) {
  return Rl(e).find((n) => n.id === t);
}
function Ji(e, t, n) {
  const s = /* @__PURE__ */ new Set();
  let r = t;
  for (; r && !s.has(r.id); ) {
    if (r.id === n) return !0;
    s.add(r.id), r = us(e, r.next);
  }
  return !1;
}
function Zi(e, t, n, s) {
  const r = n + 1, i = e.events.filter((o) => o.phase === t.id);
  if (s) {
    const o = t.id === s.phase ? s.round : t.cap;
    if (o > r) {
      let l = i.map((c, u) => ({ e: c, i: u })).filter(({ e: c }) => c.from >= r && c.from <= o).sort((c, u) => c.e.from - u.e.from || c.i - u.i).map(({ e: c }) => c), a = o;
      return l.length > Yi && (a = l[Yi - 1].from, l = l.filter((c) => c.from <= a)), { phase: t, round: a, events: l, skipFrom: r };
    }
  }
  return { phase: t, round: r, events: i.filter((o) => o.from === r) };
}
function Ol(e, t, n) {
  const s = t.entryIndex;
  if (!Re(e[s])) return null;
  const r = Rl(n);
  let i = r[0], o = r[0], l = 0, a, c = !1, u, d, h = null, g, k, z;
  const L = /* @__PURE__ */ new Set(), V = {}, N = {}, $ = /* @__PURE__ */ new Map();
  for (const se of t.manual ?? [])
    $.has(se.atIndex) || $.set(se.atIndex, []), $.get(se.atIndex).push(se);
  const I = (se, Ve) => {
    N[i.id] === void 0 && se.id !== i.id && (N[i.id] = Ve), n.phases.length && (o = Tf(n, o, se)), i = se, l = 0, h && !Ji(n, i, h.phase) && (h = null);
  };
  for (let se = s; se < e.length; se++) {
    const Ve = e[se];
    if (!c && Re(Ve)) {
      const ve = Zi(n, i, l, h);
      l = ve.round;
      const Ue = new Set((Ve.extra?.rlzc?.skippedEvents ?? []).map((P) => P.id));
      ve.events.forEach((P) => {
        Ue.has(P.id) || L.add(P.id);
      }), V[se] = {
        phase: i.id,
        round: l,
        events: ve.events.map((P) => P.id),
        skipFrom: ve.skipFrom,
        limit: Ar(n, i, o, l, a)
      }, h && i.id === h.phase && l >= h.round && (h = null);
      const Je = String(Ve.mes ?? ""), We = Pl(Je);
      We && (k = We), a = We?.limit;
      const sn = Nl(Je);
      sn && (z = sn);
      const Ot = Vs(Je);
      if (Ot)
        c = !0, u = "tag", d = se, g = Ot;
      else {
        const P = Vf(Je), K = P ? r.find((U) => U.name === P) : void 0;
        if (K && n.phases.length)
          I(K, se);
        else if (i.cap > 0 && l >= i.cap && i.next) {
          const U = us(n, i.next);
          U && I(U, se);
        }
      }
    }
    for (const ve of $.get(se) ?? []) {
      if (c) break;
      switch (ve.kind) {
        case "skip": {
          h = us(n, ve.targetPhase) && Ji(n, i, ve.targetPhase) ? { phase: ve.targetPhase, round: ve.targetRound } : null;
          break;
        }
        case "setPhase": {
          const Ue = us(n, ve.phase);
          Ue && (h = null, I(Ue, se));
          break;
        }
        case "setRound":
          l = Math.max(0, Math.floor(ve.round)), h = null;
          break;
        case "end":
          c = !0, u = "manual", d = se;
          break;
      }
    }
  }
  const ee = c ? null : Zi(n, i, l, h), J = ee ? ee.round : l + 1, D = i.cap > 0, b = n.events.filter((se) => L.has(se.id)).map((se) => se.id), m = c ? void 0 : Ar(n, i, o, J, a), y = c ? void 0 : Ar(n, i, o, l);
  let W;
  const ue = n.remaining;
  return !c && ue.type === "nights" && n.phases.length && !i.byTag && !i.frozen ? W = ue.template.replace("{n}", String(_l(n, i))) : !c && ue.type === "countdown" && m?.minutes !== void 0 && (W = ue.template.replace("{m}", String(m.minutes))), {
    phase: i,
    round: l,
    nextRound: J,
    clock: c ? void 0 : qi(n, i, J),
    currentClock: qi(n, i, l),
    remainingText: W,
    limit: m,
    roundsLeft: y ? { x: y.x, y: y.y } : void 0,
    chainStart: n.phases.length ? o.id : void 0,
    ended: c,
    endedBy: u,
    endIndex: d,
    firedEvents: b,
    warn: !c && D && J >= i.cap - 2,
    isLastRound: !c && D && J === i.cap,
    overdue: !c && D && !i.next && J > i.cap,
    next: ee,
    skipGoal: h,
    settlement: g,
    panel: k,
    rolesFromChat: z,
    perMessage: V,
    phaseEnds: N,
    entryIndex: s
  };
}
const Fl = "rlzc_token", Ll = "rlzc_progress", Dl = "rlzc_turn", Bl = "rlzc_state", Vl = "rlzc_ledger", Ul = "rlzc_live", Zf = [Fl, Ll, Dl, Bl, Vl, Ul], Bn = { token: "", progress: "", turn: "", injected: [] };
function Qf(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function _s(e, t, n) {
  const s = t.roles ?? [];
  if (!s.length) return e;
  const r = new RegExp(`(?<!\\{)\\{(${s.map(Qf).join("|")})\\}(?!\\})`, "g");
  return e.replace(r, (i, o) => n?.[o]?.trim() || o);
}
function Xf(e, t) {
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
function Qi(e, t, n, s = !1) {
  let r = _s(e.text, t, n);
  return e.to > e.from && (r = `在本阶段第${e.from}到${e.to}轮之间发生：${r}`), e.if && !s && (r += `（条件：${_s(e.if, t, n)}。若条件已不成立，此事件不发生，也不补写替代事件）`), `- ${e.id}：${r}`;
}
function ep(e) {
  const t = e.phase;
  return t.clock && !t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日落。" : t.night ? "本阶段在本轮结束：请在本轮结尾自然写出日出。" : `本阶段在本轮结束：请在本轮结尾自然收束「${t.name}」。`;
}
function tp(e, t, n, s = {}) {
  if (e.rest && n?.status === "active")
    return { ...Bn, token: e.token };
  if (!t || !n || t.ended || n.status !== "active") return Bn;
  const r = s.roles, i = e.phases.length > 0, o = t.next, l = [`副本：${e.name}（${e.level}级）`], a = t.limit;
  if (i)
    l.push(`阶段：${t.phase.name}`), l.push(`本轮：第${t.nextRound}/${t.phase.cap}轮`), a && l.push(`剩余${a.x}/${a.y}轮`), t.clock && l.push(`钟时：${t.clock}`), a?.text && l.push(`时限：${a.text}`), e.remaining.type === "countdown" && t.remainingText && l.push(t.remainingText), a?.deadline && !a.text?.includes(a.deadline) && l.push(`截止：${a.deadline}`);
  else {
    l.push(`本轮：第${t.nextRound}轮`), t.clock && l.push(`钟时：${t.clock}`);
    const $ = s.panelLimit || s.briefing?.limit;
    $ && l.push(`时限：${$}`);
  }
  const c = ["［副本进度·仅供AI］", l.join("　")];
  if (s.briefing?.goal && (!i || e.id === "generic") && c.push(`目标：${s.briefing.goal}`), e.roles?.length) {
    const $ = e.roles.filter((I) => r?.[I]);
    c.push(
      $.length ? `角色登记：${e.roles.map((I) => `${I}=${r?.[I] || "未登记"}`).join("｜")}` : "角色登记：尚未登记"
    );
  }
  const u = Xf(e, t.firedEvents);
  u && c.push(`已发生事件：${u}`);
  const d = [];
  o.skipFrom !== void 0 && d.push(`玩家选择快进：本轮从「${t.phase.name}」第${o.skipFrom}轮快进到第${o.round}轮。请用简短的过渡叙述带过这段时间；若途中出现必须由{{user}}亲自决定的事，就停在那里交给{{user}}。`);
  const h = new Map((s.subNext ?? []).map(($) => [$.id, $])), g = o.events.filter(($) => $.if && h.get($.id)?.ok === !1).map(($) => ({ id: $.id, reason: h.get($.id).reason })), k = o.events.filter(($) => !g.some((I) => I.id === $.id)), z = ($) => !!$.if && h.get($.id)?.ok === !0, L = k.filter(($) => $.kind === "event"), V = k.filter(($) => $.kind === "directive");
  if (L.length && (d.push("本轮后台事件（既定事实，必须发生；只有{{user}}或其同伴能感知时才写进正文，否则只作为已发生的事实）："), L.forEach(($) => d.push(Qi($, e, r, z($))))), V.length && (d.push("本轮写作要求："), V.forEach(($) => d.push(Qi($, e, r, z($))))), t.isLastRound ? d.push(ep(t)) : t.overdue && d.push(`「${t.phase.name}」已到时限，请按副本规则在本轮完成结算。`), s.audit?.missingLast && d.push("上一轮缺少<副本>面板，本轮必须完整输出。"), s.audit && !s.audit.hasPanel && d.push("本轮<副本>的进度条写0。"), e.roles?.length && !e.roles.some(($) => r?.[$])) {
    let $ = `请在本轮正文末尾输出一次角色登记（玩家看不到）：<角色登记>${e.roles.map((I) => `${I}=姓名`).join("｜")}</角色登记>。按世界书规定生成NPC。`;
    e.roles.includes("死者") && ($ += "死者不得是{{user}}或其同伴。"), d.push($);
  }
  let N;
  return a?.text && (a.minutes !== void 0 ? (d.push(
    `本轮<副本>的时限一栏写：${a.text}。正文里提到的时间也以此为准。本轮剧情若跳过了时间，约剩时间可以写得更少，不能更多；总时长照抄。`
  ), N = { text: a.text, minutes: a.minutes, total: a.total }) : (d.push(`本轮<副本>的时限一栏写：${a.text}（照抄）。`), N = { text: a.text })), {
    token: e.token,
    progress: c.join(`
`),
    turn: d.length ? ["［本轮指令·仅供AI］", ...d].join(`
`) : "",
    injected: k.map(($) => $.id),
    limit: N,
    skipped: g.length ? g : void 0,
    state: s.stateText || void 0
  };
}
const np = 1, sp = 0;
function ge() {
  const e = window.SillyTavern;
  if (!e?.getContext) throw new Error("[rlzc] 找不到 SillyTavern.getContext()");
  return e.getContext();
}
function rp() {
  const e = ge();
  return e.eventTypes ?? e.event_types ?? {};
}
function wt(e, t) {
  const n = rp()[e];
  if (!n) {
    console.warn(`[rlzc] 当前 ST 没有事件 ${e}，已跳过`);
    return;
  }
  ge().eventSource.on(n, t);
}
function Q() {
  return ge().chat ?? [];
}
function dn() {
  const e = ge();
  return String(e.getCurrentChatId?.() ?? e.chatId ?? "");
}
function At() {
  return ge().chatMetadata ?? {};
}
function dt() {
  const e = ge();
  e.saveMetadataDebounced ? e.saveMetadataDebounced() : e.saveMetadata?.();
}
function Bt(e, t, n, s) {
  ge().setExtensionPrompt(e, t, np, n, s, sp);
}
function Se(e, t) {
  const n = window.toastr;
  n ? n[e](t, "回廊种菜系统") : console.log(`[rlzc] ${t}`);
}
async function Pt(e) {
  const t = ge();
  if (t.callGenericPopup && t.POPUP_TYPE && t.POPUP_RESULT) {
    const n = document.createElement("div");
    return n.textContent = e, await t.callGenericPopup(n, t.POPUP_TYPE.CONFIRM, "", { okButton: "确定", cancelButton: "取消" }) === t.POPUP_RESULT.AFFIRMATIVE;
  }
  return window.confirm(e);
}
async function Xi(e, t = "") {
  const n = ge();
  if (n.callGenericPopup && n.POPUP_TYPE) {
    const s = document.createElement("div");
    s.textContent = e;
    const r = await n.callGenericPopup(s, n.POPUP_TYPE.INPUT, t, { okButton: "确定", cancelButton: "取消" });
    return typeof r == "string" ? r : null;
  }
  return window.prompt(e, t);
}
async function Wl(e, t) {
  const n = ge(), s = document.createElement("div"), r = document.createElement("div");
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
const Jt = ["阶段切换", "副本结算", "副本", "角色登记", "积分变动"];
function Hl(e, t) {
  return new RegExp(`<(${e.join("|")})>[\\s\\S]*?<\\/\\1>`, t);
}
function ip(e, t = Jt) {
  return t.length ? e.replace(Hl(t, "g"), "").replace(/\n{3,}/g, `

`).trim() : e;
}
function Gl(e, t = Jt, n = !1) {
  const s = Q()[e];
  if (!s || s.is_user) return;
  const r = String(s.extra?.display_text ?? s.mes ?? "");
  if (!Hl(n ? Jt : t, "").test(r)) return;
  const i = document.querySelector(`#chat .mes[mesid="${e}"] .mes_text`);
  if (!i) return;
  const o = ge().messageFormatting;
  if (typeof o != "function") return;
  const l = o(ip(r, t), s.name ?? "", !!s.is_system, !1, e);
  i.innerHTML !== l && (i.innerHTML = l);
}
function op(e = Jt, t = !1) {
  document.querySelectorAll("#chat .mes[mesid]").forEach((n) => {
    const s = Number(n.getAttribute("mesid"));
    Number.isFinite(s) && Gl(s, e, t);
  });
}
const lp = { key: "summary", label: "概况", hint: "本副本目前的整体情况，不超过150字" };
function Kl(e) {
  return e.stateFields?.length ? e.stateFields : [lp];
}
const ap = [...Jt, "状态栏"], cp = new RegExp(`<(${ap.join("|")})>[\\s\\S]*?<\\/\\1>`, "g");
function Yl(e) {
  return String(e ?? "").replace(cp, "").replace(/\n{3,}/g, `

`).trim();
}
function up(e) {
  const t = Kl(e.pack), n = e.markets ?? [], s = [
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
${Yl(e.text)}`
  ].join(`

`);
  return { system: s, user: l };
}
function Ap(e, t) {
  const n = new Set(t);
  return e.events.filter((s) => n.has(s.id) && s.kind !== "directive");
}
class Pe extends Error {
}
function dp(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("{"), r = t.lastIndexOf("}");
  if (s < 0 || r <= s) throw new Pe("返回里没有 JSON");
  let i;
  try {
    i = JSON.parse(t.slice(s, r + 1));
  } catch {
    throw new Pe("返回的 JSON 无法解析");
  }
  if (!i || typeof i != "object" || Array.isArray(i)) throw new Pe("返回的不是 JSON 对象");
  if (!i.state || typeof i.state != "object" || Array.isArray(i.state)) throw new Pe("缺少 state");
  const o = ["done", "missed", "void"], l = (Array.isArray(i.events) ? i.events : []).filter((d) => d && typeof d.id == "string" && o.includes(d.status)).map((d) => ({ id: d.id, status: d.status, reason: String(d.reason ?? "") })), a = (Array.isArray(i.next) ? i.next : []).filter((d) => d && typeof d.id == "string" && typeof d.ok == "boolean").map((d) => ({ id: d.id, ok: d.ok, reason: String(d.reason ?? "") })), c = { events: l, state: i.state, next: a }, u = typeof i.hype == "number" ? i.hype : typeof i.hype == "string" && i.hype.trim() !== "" ? Number(i.hype) : NaN;
  if (Number.isFinite(u) && (c.hype = Math.max(0, Math.min(100, Math.round(u)))), typeof i.hurt == "boolean" ? c.hurt = i.hurt : (i.hurt === "true" || i.hurt === "false") && (c.hurt = i.hurt === "true"), i.markets && typeof i.markets == "object" && !Array.isArray(i.markets)) {
    const d = {};
    for (const [h, g] of Object.entries(i.markets))
      typeof g == "boolean" ? d[h] = g : (g === "true" || g === "false") && (d[h] = g === "true");
    c.markets = d;
  }
  return c;
}
function fp(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = t * 31 + e.charCodeAt(n) | 0;
  return `${e.length}.${t}`;
}
function pp(e, t, n) {
  const s = [n?.send_date, n?.gen_started, n?.gen_finished].map((r) => String(r ?? "")).join("|");
  return `${e}:${t}:${s}:${fp(String(n?.mes ?? ""))}`;
}
function hp(e) {
  return !(!e.enabled || !e.active || e.type === "continue" || e.type === "first_message" || e.saveMode && !e.hasEvents && !e.hasNextConditional);
}
async function mp(e, t, n = 2) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return dp(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
class ql extends Error {
}
function Us(e) {
  if (e instanceof ql) return "超时";
  if (e instanceof Pe) return "返回格式不对";
  const t = `${e?.message ?? ""} ${e?.cause?.message ?? ""} ${String(e?.status ?? "")}`.toLowerCase();
  return /abort|timeout|timed out|超时/.test(t) ? "超时" : /quota|insufficient|balance|429|too many|额度|余额/.test(t) ? "额度不足" : /401|403|unauthori[sz]ed|forbidden|invalid[ _-]?api[ _-]?key|incorrect api key|authentication|密钥/.test(t) ? "密钥无效" : "其他";
}
function Jl(e) {
  return e?.extra?.rlzc;
}
function Ws(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!Re(s)) continue;
    const r = Jl(s)?.sub;
    if (r?.state && !r.skipped) return { index: n, state: r.state };
  }
  return null;
}
function gp(e, t) {
  for (let n = e.length - 1; n >= t && n >= 0; n--) {
    const s = e[n];
    if (!Re(s)) continue;
    const r = Jl(s)?.sub;
    return r && !r.skipped && Array.isArray(r.next) ? r.next : void 0;
  }
}
function zs(e) {
  return Array.isArray(e) ? e.length ? e.map((t) => zs(t)).join("、") : "无" : e && typeof e == "object" ? Object.entries(e).map(([t, n]) => `${t}：${zs(n)}`).join("；") : e == null || e === "" ? "未知" : String(e);
}
function Zl(e, t) {
  const n = Kl(e), s = new Set(n.map((i) => i.key)), r = n.filter((i) => t[i.key] !== void 0).map((i) => `${i.label}：${zs(t[i.key])}`);
  for (const [i, o] of Object.entries(t)) s.has(i) || r.push(`${i}：${zs(o)}`);
  return r.length ? ["［副本状态·仅供AI］", ...r].join(`
`) : "";
}
const xp = "你在写回廊直播间的观众弹幕。观众是回廊里的其他玩家，只看得到直播画面。什么人都有：夸赞、祝福、讨论、泼冷水、嫉妒、抹黑、造谣，正面的稍多。每条30字以内，口语，称{{user}}为主播，不用性别代词。只能根据画面里已经发生的事说话，不猜测、不透露画面外的信息。", yp = ["praise", "bless", "discuss", "cold", "envy", "smear", "rumor"];
function bp(e) {
  if (!e.aiSource || !e.subOn) return !1;
  const t = Math.max(1, Math.min(10, Math.floor(e.freq) || 3));
  return e.roundInShow > 0 && e.roundInShow % t === 0 ? !0 : e.phaseSwitch || e.hurt || e.eventDone;
}
function Ql(e) {
  return String(e ?? "").replace(/<(副本|状态栏|阶段切换|副本结算|角色登记|积分变动|直播|thinking|think)>[\s\S]*?<\/\1>/g, "").replace(/<\/?[A-Za-z一-龥][^<>]*>/g, "").replace(/\n{3,}/g, `

`).trim();
}
function vp(e, t, n) {
  const s = e.map((o) => o.text), r = [], i = /* @__PURE__ */ new Set();
  for (let o = 0; o < t * 10 && r.length < Math.min(t, s.length); o++) {
    const l = Math.floor(n() * s.length);
    i.has(l) || (i.add(l), r.push(s[l]));
  }
  return r;
}
function kp(e) {
  const t = [
    xp,
    "只输出一个 JSON 数组，8–12条，不要任何解释，格式：",
    '[{"type":"praise|bless|discuss|cold|envy|smear|rumor","name":"观众昵称","text":"…"}]'
  ].join(`
`), n = [
    `【直播间】${e.scene}`,
    `【在场角色】${e.cast.length ? e.cast.join("、") : "（无）"}`,
    `【最近两轮画面】
${e.texts.map((s) => Ql(s)).filter(Boolean).join(`

`) || "（无）"}`,
    `【语气示例】
${e.samples.map((s) => `- ${s}`).join(`
`)}`
  ].join(`

`);
  return { system: t, user: n };
}
function wp(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("["), r = t.lastIndexOf("]");
  if (s < 0 || r <= s) throw new Pe("返回里没有 JSON 数组");
  let i;
  try {
    i = JSON.parse(t.slice(s, r + 1));
  } catch {
    throw new Pe("返回的 JSON 无法解析");
  }
  if (!Array.isArray(i)) throw new Pe("返回的不是 JSON 数组");
  const o = i.filter((l) => l && typeof l.text == "string" && l.text.trim()).map((l) => ({
    type: yp.includes(l.type) ? l.type : "discuss",
    name: typeof l.name == "string" && l.name.trim() ? l.name.trim().slice(0, 16) : "匿名",
    text: l.text.trim()
  })).slice(0, 12);
  if (!o.length) throw new Pe("返回的弹幕为空");
  return o;
}
async function _p(e, t, n = 1) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return wp(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
function zp(e) {
  return e.t === "tip" ? `${e.name} 打赏${e.amount}` : `${e.name}：${e.text}`;
}
function $p(e, t = 5) {
  if (!e.on) return "";
  const n = e.feed.filter((r) => r.t === "msg" || r.t === "tip").slice(-t), s = `［直播·仅供AI］{{user}}正在直播，约${e.viewers}人在看。`;
  return n.length ? `${s}最近弹幕：${n.map(zp).join("／")}` : s;
}
const Xl = 1500;
function ea() {
  return ge().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
}
function ta(e) {
  const t = { chat_completion_source: "custom", custom_url: e.url.trim().replace(/\/+$/, "") };
  return e.key.trim() && (t.custom_include_headers = JSON.stringify({ Authorization: `Bearer ${e.key.trim()}` })), t;
}
async function na(e, t) {
  const n = new AbortController();
  let s;
  const r = new Promise((i, o) => {
    s = setTimeout(() => {
      n.abort(), o(new ql(`超过 ${Math.round(e / 1e3)} 秒没有返回`));
    }, e);
  });
  try {
    return await Promise.race([t(n.signal), r]);
  } finally {
    clearTimeout(s);
  }
}
function sa(e, t) {
  const n = t?.error?.message ?? t?.message ?? (typeof t == "string" ? t : "") ?? "", s = new Error(`${e || ""} ${n}${t?.quota_error ? " insufficient_quota" : ""}`.trim());
  return s.status = e, s;
}
async function ra(e, t, n, s = Xl, r = 0.2) {
  const i = await fetch("/api/backends/chat-completions/generate", {
    method: "POST",
    headers: ea(),
    signal: n,
    body: JSON.stringify({
      ...ta(e),
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
  if (!i.ok || l?.error) throw sa(i.status === 200 ? 0 : i.status, l);
  const a = l?.choices?.[0]?.message?.content ?? l?.choices?.[0]?.text ?? l?.content;
  if (typeof a != "string") throw new Error("返回里没有正文");
  return a;
}
async function Sp(e) {
  const t = ge();
  if (typeof t.generateRaw != "function") throw new Error("当前酒馆版本没有 generateRaw");
  return String(await t.generateRaw({ prompt: e.user, systemPrompt: e.system }));
}
function Xr(e, t, n = {}) {
  return na(e.timeoutMs, (s) => {
    if (e.source === "main") return Sp(t);
    if (!e.preset) throw new Error("没有选择接口预设");
    return ra(e.preset, t, s, Xl, n.temperature ?? 0.2);
  });
}
async function ia(e) {
  const t = await fetch("/api/backends/chat-completions/status", {
    method: "POST",
    headers: ea(),
    body: JSON.stringify(ta(e))
  }), n = await t.json().catch(() => null);
  if (!t.ok || n?.error) throw sa(t.status, n);
  return (Array.isArray(n) ? n : Array.isArray(n?.data) ? n.data : Array.isArray(n?.models) ? n.models : []).map((r) => typeof r == "string" ? r : r?.id ?? r?.name).filter(Boolean).sort();
}
async function Ep(e, t) {
  const n = await ia(e).catch(() => []), s = { ...e, model: e.model || n[0] || "" }, r = await na(
    t,
    (i) => ra(s, { system: "只回复 OK。", user: "ping" }, i, 5)
  );
  return { models: n, reply: r };
}
const oa = "rlzc_ledger", bt = {
  D: 300,
  C: 1e3,
  B: 3e3,
  A: 1e4,
  S: 3e4
}, Cp = {
  D: { D: 150, C: 300, B: 600, A: 1e3, S: 1800 },
  C: { D: 800, C: 1400, B: 2200, A: 3e3, S: 4200 },
  B: { D: 3e3, C: 4800, B: 6800, A: 9e3, S: 12500 },
  A: { D: 11e3, C: 16e3, B: 21500, A: 28e3, S: 38e3 },
  S: { D: 36e3, C: 48e3, B: 64e3, A: 85e3, S: 115e3 }
};
function Mp(e) {
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
function ei(e) {
  const t = /等级[：:]\s*([DCBAS])/.exec(e);
  return t ? t[1] : null;
}
function la(e) {
  const t = /积分[：:]\s*([+-]?\d+)/.exec(e);
  if (!t) return null;
  const n = parseInt(t[1], 10);
  return Number.isFinite(n) ? n : null;
}
function Ip(e, t, n, s, r, i = "") {
  const o = n.结果 ?? "", l = (n.评价 ?? "").toUpperCase().trim(), a = ["D", "C", "B", "A", "S"].includes(l) ? l : null, c = o === "通关" || o === "成功" || o === "胜利", u = o === "失败", d = o === "死亡" || o === "阵亡";
  if (!c && !u && !d)
    return { delta: 0, source: "" };
  if (d)
    return { delta: 0, source: "" };
  if (u)
    return r ? { delta: 0, source: "清算未通关" } : { delta: -Math.floor(s * 0.3), source: "副本失败·扣除30%" };
  if (r) {
    const N = bt[t] + 500;
    return { delta: Math.max(0, N - s), source: "清算通关·续存至斩杀线+500", clearWin: !0 };
  }
  if (!a)
    return { delta: 0, source: "", warn: "评价缺失或无法识别，不发奖励" };
  let h = Cp[e][a];
  const g = i || e, k = n.抽查 === "是" || n.抽查 === "true" || n.抽查 === "1", z = n.越级 === "是" || n.越级 === "true" || n.越级 === "1", L = e !== t;
  let V = `副本奖励·${g} ${a}评`;
  return k ? (h = Math.floor(h * 0.5), V += "（×50%）") : (z || L) && (h = Math.floor(h * 0.6), V += "（×60%）"), { delta: h, source: V };
}
function tn(e, t) {
  return t.reduce((n, s) => n + s.delta, e);
}
function Gn(e, t, n) {
  let s = e, r = !1;
  for (const i of t)
    s += i.delta, s < n && (r = !0), i.clear && (r = !1);
  return r;
}
function Tp(e) {
  const t = [];
  return e.level && t.push(`等级写${e.level}`), e.rank && t.push(`位格写${e.rank}`), t.length ? `本轮状态栏里{{user}}的${t.join("、")}，之后按剧情照常。` : "";
}
function Np(e, t, n = "D", s) {
  if (!t)
    return `［账户·仅供AI］积分：${e}　待清算：无`;
  const r = s ?? bt[n], i = Math.max(0, r - e);
  return `［账户·仅供AI］积分：${e}　待清算：已标记，距斩杀线${i}分（${n}级斩杀线${r}）。商城价格上浮30%，下一场副本为清算副本。`;
}
const Et = "rlzc";
function Pp() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function jp(e, t, n) {
  return {
    id: Pp(),
    packId: e.id,
    packVersion: e.version,
    entryIndex: t,
    status: "active",
    manual: [],
    briefing: n
  };
}
function Rp(e) {
  const t = e;
  return !t || typeof t != "object" || typeof t.packId != "string" || typeof t.entryIndex != "number" ? null : (Array.isArray(t.manual) || (t.manual = []), t.status !== "ended" && (t.status = "active"), typeof t.id != "string" && (t.id = ""), t);
}
function aa(e, t) {
  return e.packId === ws ? e.briefing ? Cl(e.briefing) : null : t.find((n) => n.id === e.packId) ?? null;
}
function Op(e, t) {
  const n = (s) => !!s && !s.is_user && s.extra?.rlzc?.entry === t.id;
  if (!t.id)
    return Re(e[t.entryIndex]) ? t.entryIndex : -1;
  if (n(e[t.entryIndex])) return t.entryIndex;
  for (let s = e.length - 1; s >= 0; s--) if (n(e[s])) return s;
  return -1;
}
function Fp(e, t) {
  const n = Op(e, t);
  if (n < 0) return !1;
  const s = n - t.entryIndex;
  return s !== 0 && (t.entryIndex = n, t.manual = t.manual.map((r) => ({ ...r, atIndex: r.atIndex + s }))), t.manual = t.manual.filter((r) => r.atIndex < e.length && r.atIndex >= t.entryIndex), !0;
}
function ca(e, t) {
  const n = e.roles && Object.keys(e.roles).length ? e.roles : void 0;
  if (!(!n && !t))
    return { ...t ?? {}, ...n ?? {} };
}
const eo = "rlzc_declined";
function ti(e, t) {
  return `${e}:${t}`;
}
const ua = Re;
function Hs(e, t, n) {
  if (!ua(e[t])) return null;
  const s = Yf(String(e[t].mes ?? ""), n);
  return s ? { ...s, index: t } : null;
}
function Lp(e, t, n, s, r = []) {
  for (let i = Math.max(0, n); i <= Math.min(s, e.length - 1); i++) {
    const o = Hs(e, i, t);
    if (o && !r.includes(ti(i, o.info.name))) return o;
  }
  return null;
}
function Dp(e, t, n = [], s = Nr, r = 0) {
  if (t?.status === "active") return null;
  let i = -1;
  for (let l = Math.max(0, r); l < e.length; l++) if (ua(e[l])) {
    i = l;
    break;
  }
  if (i < 0 || t && t.entryIndex === i) return null;
  const o = Hs(e, i, s);
  return !o || n.includes(ti(i, o.info.name)) ? null : o;
}
const Bp = /[■█▰●◆★▮▓]/g, Vp = /[□░▱○◇☆▯▒]/g;
function Up(e) {
  if (!e) return null;
  const t = e.trim();
  let n = /(-?\d+(?:\.\d+)?)\s*[%％]/.exec(t);
  if (n) return Number(n[1]);
  if (n = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/.exec(t), n) {
    const i = Number(n[2]);
    return i === 100 ? Number(n[1]) : i > 0 ? Math.round(Number(n[1]) / i * 100) : null;
  }
  if (n = /-?\d+(?:\.\d+)?/.exec(t), n) return Number(n[0]);
  const s = (t.match(Bp) ?? []).length, r = (t.match(Vp) ?? []).length;
  return s + r > 0 ? Math.round(s / (s + r) * 100) : null;
}
function to(e) {
  return e.replace(/[\s，。,.:：;；、（）()【】「」『』\-－—~～]/g, "");
}
function Wp(e, t) {
  return to(e).includes(to(t));
}
function Hp(e, t, n) {
  const s = [], r = Object.keys(n.perMessage).map(Number).sort((a, c) => a - c);
  let i = !1, o = null, l = !1;
  for (const a of r) {
    const c = n.perMessage[a], d = t.phases.find(($) => $.id === c.phase)?.name ?? "进行中", h = ($, I) => s.push({ index: a, phase: d, round: c.round, kind: $, text: I }), g = e[a]?.extra?.rlzc;
    for (const $ of g?.sub?.events ?? []) $.status === "missed" && h("eventMissed", `${$.id} 未写出来：${$.reason}`);
    for (const $ of g?.skippedEvents ?? []) h("eventSkipped", `${$.id} 条件不成立，已跳过：${$.reason}`);
    const k = Pl(String(e[a]?.mes ?? "")), z = a === n.entryIndex;
    if (!k) {
      z || h("missing", "本轮回复缺少 <副本> 面板"), l = !z;
      continue;
    }
    l = !1;
    const L = Up(k.progressBar);
    k.progressBar === void 0 ? h("progressUnreadable", "<副本> 中没有进度条一栏") : L === null ? h("progressUnreadable", `进度条无法读出数值：「${k.progressBar}」`) : (!i && L !== 0 && h("progressStart", `入场后第一轮的进度条应为0，实际为 ${L}`), (L < 0 || L > 100) && h("progressRange", `进度条数值 ${L} 超出 0–100`), o !== null && L < o && h("progressDrop", `进度条比上一轮低：${o} → ${L}`), o = L), i = !0;
    const V = e[a]?.extra?.rlzc?.limit, N = V?.text ? V : c.limit?.text ? { text: c.limit.text, minutes: c.limit.minutes, total: c.limit.total } : void 0;
    if (N) {
      const $ = k.limit;
      if (N.minutes !== void 0) {
        const I = wl($);
        !$ || I.remaining === null || I.total === null ? h("limit", `时限读不到「剩余时间/总时长」：写的是「${$ ?? "（没有时限一栏）"}」，注入的是「${N.text}」`) : (I.remaining > N.minutes && h("limit", `剩余时间比注入值多：写的是${ln(I.remaining)}，注入的是${ln(N.minutes)}`), N.total !== void 0 && I.total !== N.total && h("limit", `总时长与注入值不一致：写的是${ln(I.total)}，注入的是${ln(N.total)}`));
      } else (!$ || !Wp($, N.text)) && h("limit", `时限与注入文字不一致：写的是「${$ ?? "（没有时限一栏）"}」，注入的是「${N.text}」`);
    }
  }
  return { warnings: s, missingLast: l, hasPanel: i };
}
const Gp = {
  D: 2e3,
  C: 8e3,
  B: 3e4,
  A: 1e5,
  S: 3e5
}, Kp = [
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
function Aa(e) {
  return Kp.some((t) => e.includes(t));
}
function Yp(e) {
  if (e.subHype !== void 0)
    return Math.max(0, Math.min(100, Math.round(e.subHype)));
  const t = e.subHurt !== void 0 ? e.subHurt : e.bodyText ? Aa(e.bodyText) : !1;
  let n = 20;
  return e.hasEvents && (n += 20), e.hasPhaseSwitch && (n += 20), t && (n += 30), Math.min(100, n);
}
function qp(e, t) {
  return Math.round(e * 0.6 + t * 0.4);
}
function ni(e) {
  const t = !e.packLevel || e.isRest ? e.playerLevel : e.packLevel, n = Gp[t], s = !e.packLevel || e.isRest ? 0.3 : 1;
  return Math.round(n * s * (0.5 + e.heat / 100) * e.rand);
}
const Jp = [10, 20, 50, 100, 200, 500, 1e3], Zp = [20, 25, 15, 20, 10, 8, 2], Qp = [15, 20, 15, 20, 10, 16, 4];
function Xp(e, t, n) {
  const s = t.reduce((i, o) => i + o, 0);
  let r = n * s;
  for (let i = 0; i < e.length; i++)
    if (r -= t[i], r <= 0) return e[i];
  return e[e.length - 1];
}
function eh(e) {
  const { hype: t, isCorr: n, rand: s, names: r } = e, i = t / 40, o = [], l = [], a = t >= 70 ? Qp : Zp;
  for (let h = 1; h <= 3; h++) {
    const g = Math.min(1, Math.max(0, i - (h - 1)));
    if (s() < g) {
      let k = Xp(Jp, a, s());
      n && (k = Math.max(10, Math.round(k * 0.3 / 10) * 10)), o.push(k), l.push(r[Math.floor(s() * r.length)] ?? "匿名");
    }
  }
  const c = o.reduce((h, g) => h + g, 0), u = Math.floor(c * 0.6);
  let d = "";
  return o.length === 1 ? d = `直播打赏${o[0]}×60%` : o.length > 1 && (d = `直播打赏${o.length}笔·共${c}×60%`), { count: o.length, totalFace: c, faces: o, netTotal: u, source: d, names: l };
}
function hr(e, t, n, s, r, i, o) {
  const l = t && !n;
  return !(e.scope === "inst" && !l || e.scope === "corr" && l || e.when === "hurt" && !s || e.when === "calm" && r >= 30 || e.when === "open" && !i || e.when === "end" && !o);
}
function th(e) {
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
    names: h,
    whoNames: g,
    rand: k
  } = e, z = 5 + Math.floor(k() * 4), L = [], V = new Set(d), N = t.filter(
    (b) => hr(b, i, o, l, a, c, u)
  ), I = g.length > 0 ? n.filter(
    (b) => hr(b, i, o, l, a, c, u)
  ) : [], ee = s.filter((b) => hr(b, i, o, l, a, c, u) ? b.phase && b.phase.length > 0 && r ? b.phase.includes(r) : !0 : !1), J = () => h[Math.floor(k() * h.length)] ?? "匿名", D = () => g[Math.floor(k() * g.length)] ?? "";
  for (let b = 0; b < z * 5 && L.length < z; b++) {
    let m = "", y = "discuss";
    if (ee.length > 0 && k() < 0.3) {
      const ue = ee[Math.floor(k() * ee.length)];
      m = ue.text, y = ue.type;
    } else if (I.length > 0 && k() < 0.5) {
      const se = I[Math.floor(k() * I.length)];
      m = se.text.replace("{who}", D()), y = se.type;
    } else if (N.length > 0) {
      const se = N[Math.floor(k() * N.length)];
      m = se.text, y = se.type;
    }
    !m || V.has(m) || (V.add(m), L.push({ name: J(), text: m, type: y }));
  }
  return L;
}
const da = "rlzc_live", nh = "本局直播打赏撤回", fa = 20, Zt = {
  corridorOn: "回廊直播开始。",
  corridorOff: "已下播。",
  enterOff: "进入副本，回廊直播已结束。",
  instanceOn: "本局副本直播开始。",
  instanceOff: "副本结束，直播已下播。",
  revoke: "主播在副本中死亡，本局打赏已全部撤回。"
};
function sh(e) {
  const t = e && typeof e == "object" ? e : {}, n = t.corridor ?? {};
  return {
    seq: Number.isFinite(t.seq) ? Number(t.seq) : 0,
    corridor: { on: !!n.on, show: typeof n.show == "string" ? n.show : "", viewers: Number.isFinite(n.viewers) ? n.viewers : void 0 },
    sys: Array.isArray(t.sys) ? t.sys.filter((s) => s && typeof s.id == "number") : []
  };
}
function pa(e, t) {
  return e.disableLive ? { show: !1, checked: !1 } : { show: !0, checked: !!t };
}
function nn(e) {
  const t = e?.extra?.rlzc?.live;
  return t && typeof t.show == "string" && Array.isArray(t.feed) ? t : void 0;
}
function si(e, t, n = e.length) {
  const s = [];
  for (let r = 0; r < Math.min(n, e.length); r++) {
    const i = e[r];
    if (!i || i.is_user) continue;
    const o = nn(i);
    o && o.show === t && s.push({ index: r, rec: o });
  }
  return s;
}
function ri(e, t) {
  return si(e, t).reduce((n, { rec: s }) => n + (s.tipNet || 0) - (s.revoke || 0), 0);
}
function ii(e, t) {
  let n = t.seq;
  for (const s of t.sys) n = Math.max(n, s.id);
  for (const s of e) for (const r of nn(s)?.feed ?? []) n = Math.max(n, r.id);
  return n;
}
function rh(e, t = 30) {
  const n = [];
  for (let s = e.length - 1; s >= 0 && n.length < t; s--) {
    const r = nn(e[s])?.feed ?? [];
    for (let i = r.length - 1; i >= 0 && n.length < t; i--) r[i].t === "msg" && n.push(r[i].text);
  }
  return n;
}
const ha = /<状态栏>([\s\S]*?)<\/状态栏>/, ih = /^(积分|位格|道具|在场)$/, oh = /^(地点|时间|日期|等级|位格|积分|待清算|任务|道具|在场|状态|态度|os)\s*[：:]/i;
function ma(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const r = ha.exec(s.mes);
    if (r) return r[1];
  }
  return null;
}
function Gs(e, t = e.length) {
  for (let n = Math.min(t, e.length) - 1; n >= 0; n--) {
    const s = e[n];
    if (!s || s.is_user || !s.mes) continue;
    const r = ha.exec(s.mes);
    if (!r) continue;
    const i = /等级[：:]\s*([DCBAS])/.exec(r[1]);
    if (i) return i[1];
  }
  return "D";
}
function ga(e, t = "") {
  if (!e) return [];
  const n = [];
  let s = null;
  for (const i of e.split(`
`)) {
    const o = i.trim();
    if (!o || /^[━─—=\-]{3,}$/.test(o)) continue;
    const l = oh.exec(o);
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
    if (o === 0 && [...i.keys].some((a) => ih.test(a))) return;
    const l = i.name.replace(/[（(][\s\S]*$/, "").trim();
    !l || /^(陌生|路人)/.test(l) || l === "{{user}}" || t && l === t || r.includes(l) || r.push(l);
  }), r;
}
function lh(e) {
  const { rand: t } = e, n = Yl(e.text), s = e.sub?.hurt !== void 0 ? e.sub.hurt : Aa(n), r = Yp({ subHype: e.sub?.hype, subHurt: s, hasEvents: e.hasEvents, hasPhaseSwitch: e.hasPhaseSwitch, bodyText: n }), i = qp(e.prevHeat ?? fa, r), o = e.scope === "corridor" || e.isRest, l = ni({
    packLevel: e.scope === "instance" ? e.packLevel : null,
    playerLevel: e.playerLevel,
    isRest: e.isRest,
    heat: i,
    rand: 0.9 + t() * 0.2
  }), a = th({
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
    rand: t
  }), c = eh({ hype: r, isCorr: o, rand: t, names: e.names }), u = [...a, ...e.extraDanmaku ?? []].map((k) => ({ t: "msg", name: k.name, text: k.text, amount: 0, net: 0 }));
  for (let k = u.length - 1; k > 0; k--) {
    const z = Math.floor(t() * (k + 1));
    [u[k], u[z]] = [u[z], u[k]];
  }
  c.faces.forEach((k, z) => {
    const L = u.length ? 1 + Math.floor(t() * u.length) : 0;
    u.splice(Math.min(L, u.length), 0, { t: "tip", name: c.names[z], text: "", amount: k, net: Math.floor(k * 0.6) });
  });
  let d;
  e.settle && (e.settle.died && (d = e.settle.tipsBefore + c.netTotal, d > 0 ? u.push({ t: "sys", name: "", text: Zt.revoke, amount: 0, net: -d }) : d = void 0), u.push({ t: "sys", name: "", text: Zt.instanceOff, amount: 0, net: 0 }));
  const h = u.map((k, z) => ({ id: e.firstId + z, ...k })), g = {
    show: e.show,
    scope: e.scope,
    hype: r,
    heat: i,
    viewers: l,
    hurt: s,
    feed: h,
    tipNet: c.netTotal,
    tipFace: c.totalFace,
    tipSource: c.source
  };
  return d && (g.revoke = d), g;
}
function ah(e, t) {
  if (!e) return [];
  const n = [];
  return e.tipNet > 0 && n.push({ delta: e.tipNet, source: e.tipSource, type: "tip", at: t }), e.revoke && e.revoke > 0 && n.push({ delta: -e.revoke, source: nh, type: "tip", at: t }), n;
}
function ch(e) {
  return `其中本局直播打赏${e}分，副本内不可使用，离开副本后可用。`;
}
function uh(e, t) {
  return e && `${e}${e.endsWith("。") ? "" : "。"}${ch(t)}`;
}
function Ah(e, t, n) {
  const s = si(e, n), r = [];
  for (const { rec: i } of s) r.push(...i.feed);
  for (const i of t.sys) i.show === n && r.push({ id: i.id, t: i.t, name: i.name, text: i.text, amount: i.amount, net: i.net });
  return r.sort((i, o) => i.id - o.id), { items: r, last: s[s.length - 1]?.rec };
}
function dh(e, t) {
  let n = "", s = -1;
  for (const r of t.sys) r.id > s && (s = r.id, n = r.show);
  for (const r of e) {
    const i = nn(r);
    if (i)
      for (const o of i.feed) o.id > s && (s = o.id, n = i.show);
  }
  return n;
}
function fh(e, t, n, s = /* @__PURE__ */ new Set()) {
  const r = n.inInstance ? "instance" : "corridor", i = n.inInstance ? n.instanceLive : t.corridor.on, o = n.inInstance ? n.instanceLive ? n.instanceShow ?? "" : "" : i ? t.corridor.show : dh(e, t), l = { on: i, canToggle: !n.inInstance, scope: r, viewers: 0, heat: 0, tipTotal: 0, injectToAI: n.injectToAI, feed: [], lastTip: null };
  if (!o) return l;
  const { items: a, last: c } = Ah(e, t, o), u = a.filter((g) => !s.has(g.id));
  let d = 0, h = null;
  for (const g of u)
    d += g.net, g.t === "tip" && (h = { id: g.id, net: g.net });
  return {
    ...l,
    viewers: i ? c?.viewers ?? n.startViewers ?? 0 : 0,
    heat: i ? c?.heat ?? fa : 0,
    tipTotal: d,
    feed: u.slice(-60),
    lastTip: h
  };
}
const ph = ["小满", "好运来", "路过的D级", "一个路过的A级", "数据党", "理性讨论", "吃瓜", "夜班保安", "柠檬汁", "阿柒", "东区卖菜的", "西区摆摊的", "情报社小号", "失眠第三天", "房租交不起", "今天也在种土豆", "匿名", "光幕前的咸鱼", "刚通关的C级", "排行榜第九十九", "不想进本", "炸鱼被抓过", "黑市常客", "训练场打卡人", "药剂站熬夜班", "公会跑腿的", "一个路人", "今日份幸运", "积分快见底", "刚升B级", "看录像长大的", "老观众", "新来的", "别叫我大佬", "蹲一个结算", "白开水", "半夜不睡", "又是我", "打工人", "瓜田里的猹", "慢热", "晴天", "阿九", "十一", "小绿", "老周", "木子", "苏苏", "七七", "一颗橘子", "等天亮", "北风", "不吃香菜", "没抢到号", "退役S级", "D级万岁", "靠运气活着", "只看不说", "路过打个卡", "最后一排"], hh = [{ type: "praise", text: "这反应速度，不愧是主播" }, { type: "praise", text: "冷静得不像第一次进这个级别的本", scope: "inst" }, { type: "praise", text: "刚才那个判断绝了" }, { type: "praise", text: "主播脑子转得是真快" }, { type: "praise", text: "这波我服" }, { type: "praise", text: "稳，太稳了" }, { type: "praise", text: "讲道理，换我早慌了" }, { type: "praise", text: "这就是高手吗" }, { type: "praise", text: "看得我手心出汗，主播还面不改色" }, { type: "praise", text: "刚才那句话说得漂亮" }, { type: "praise", text: "细节拉满，这都注意到了", scope: "inst" }, { type: "praise", text: "主播说话好有条理" }, { type: "praise", text: "这才叫会玩" }, { type: "praise", text: "就冲这个判断，关注了" }, { type: "praise", text: "有勇有谋" }, { type: "praise", text: "比上一个主播强多了" }, { type: "praise", text: "队友拖后腿，主播一个人在带", scope: "inst" }, { type: "praise", text: "这个位置站得好", scope: "inst" }, { type: "praise", text: "我宣布这是本周最佳直播" }, { type: "praise", text: "主播镇定得让我也镇定了" }, { type: "praise", text: "那个眼神，太帅了" }, { type: "praise", text: "心态真好，要是我早骂人了" }, { type: "praise", text: "这个节奏把握得好", scope: "inst" }, { type: "praise", text: "看出来是做过功课的" }, { type: "praise", text: "夸一句，主播是真的会说话" }, { type: "praise", text: "一句话就把场面稳住了", scope: "inst" }, { type: "praise", text: "这份胆量我是没有" }, { type: "praise", text: "学到了，下次我也这么干" }, { type: "praise", text: "主播好好看" }, { type: "praise", text: "声音也好听，别下播" }, { type: "praise", text: "越看越顺眼" }, { type: "praise", text: "这气质，放在哪个本都是主角" }, { type: "praise", text: "能屈能伸，佩服" }, { type: "praise", text: "刚才那一下我起立鼓掌" }, { type: "praise", text: "不慌不忙，高手风范" }, { type: "praise", text: "回廊里也过得这么讲究，爱了", scope: "corr" }, { type: "praise", text: "主播种的菜看着真水灵", scope: "corr" }, { type: "praise", text: "这手艺可以去西区摆摊了", scope: "corr" }, { type: "praise", text: "休整都不忘练，怪不得排名涨", scope: "corr" }, { type: "praise", text: "房间收拾得真干净", scope: "corr" }, { type: "bless", text: "祝平安出来！！", scope: "inst" }, { type: "bless", text: "主播一定要活着回来", scope: "inst" }, { type: "bless", text: "保佑保佑" }, { type: "bless", text: "冲啊主播！" }, { type: "bless", text: "这把一定能过", scope: "inst" }, { type: "bless", text: "结算见！", scope: "inst", when: "end" }, { type: "bless", text: "平安就好，评级无所谓", scope: "inst" }, { type: "bless", text: "等你出来请你吃饭", scope: "inst" }, { type: "bless", text: "好运加满，霉运退散" }, { type: "bless", text: "希望别再有人出事了", scope: "inst", when: "hurt" }, { type: "bless", text: "主播加油，我在东区超市门口看着呢" }, { type: "bless", text: "撑住，天总会亮的", scope: "inst" }, { type: "bless", text: "别怕，我们都在" }, { type: "bless", text: "好人一生平安" }, { type: "bless", text: "这波过了就能歇歇了", scope: "inst" }, { type: "bless", text: "下个副本抽个简单的吧", scope: "corr" }, { type: "bless", text: "注意安全，别逞强", scope: "inst" }, { type: "bless", text: "保重身体啊", when: "hurt" }, { type: "bless", text: "受伤了先处理伤口", scope: "inst", when: "hurt" }, { type: "bless", text: "一路绿灯，一路绿灯" }, { type: "bless", text: "今天也要好好活着" }, { type: "bless", text: "愿系统对你手下留情" }, { type: "bless", text: "别哭，我们陪你", when: "hurt" }, { type: "bless", text: "等着看你升级" }, { type: "bless", text: "最后一口气了，撑住", scope: "inst", when: "end" }, { type: "bless", text: "最后几轮，稳住！", scope: "inst", when: "end" }, { type: "bless", text: "主播今天早点睡", scope: "corr" }, { type: "bless", text: "休息好了再进本", scope: "corr" }, { type: "bless", text: "希望房租别涨", scope: "corr" }, { type: "bless", text: "回廊安稳一天是一天", scope: "corr" }, { type: "discuss", text: "现在什么情况，我刚进来" }, { type: "discuss", text: "来了来了，这把什么本", scope: "inst", when: "open" }, { type: "discuss", text: "开播了开播了", when: "open" }, { type: "discuss", text: "新主播？没见过", when: "open" }, { type: "discuss", text: "先别吵，看局势" }, { type: "discuss", text: "我觉得还有线索没找到", scope: "inst" }, { type: "discuss", text: "按往届，这本不好打", scope: "inst" }, { type: "discuss", text: "有没有人看过这本的录像", scope: "inst" }, { type: "discuss", text: "黑市那种录像别全信" }, { type: "discuss", text: "这队人各怀心思吧", scope: "inst" }, { type: "discuss", text: "现在还剩几个人？", scope: "inst" }, { type: "discuss", text: "前面说的那个我也注意到了" }, { type: "discuss", text: "理性讨论，别带节奏" }, { type: "discuss", text: "我赌主播能过" }, { type: "discuss", text: "有人算过这把能拿什么评吗", scope: "inst" }, { type: "discuss", text: "主播刚才是不是话里有话" }, { type: "discuss", text: "这个人说话一直留半句", scope: "inst" }, { type: "discuss", text: "注意细节，刚才那句不对劲", scope: "inst" }, { type: "discuss", text: "我在光幕前面站了一个小时了" }, { type: "discuss", text: "回放能看吗，刚才没看清" }, { type: "discuss", text: "有没有懂的解释一下" }, { type: "discuss", text: "你们看出来了吗，我看不出来" }, { type: "discuss", text: "这一段要是剪进录像会卖爆" }, { type: "discuss", text: "楼上别剧透……虽然我也不知道" }, { type: "discuss", text: "好无聊，快进", when: "calm" }, { type: "discuss", text: "主播在发呆吗", when: "calm" }, { type: "discuss", text: "挂着当背景音了", when: "calm" }, { type: "discuss", text: "去泡了碗面回来还是这样", when: "calm" }, { type: "discuss", text: "这么安静，要出事了吧", scope: "inst", when: "calm" }, { type: "discuss", text: "暴风雨前的宁静", scope: "inst", when: "calm" }, { type: "discuss", text: "啊啊啊有人倒了", scope: "inst", when: "hurt" }, { type: "discuss", text: "刚才那一下我没敢看", when: "hurt" }, { type: "discuss", text: "又走一个……", scope: "inst", when: "hurt" }, { type: "discuss", text: "手在抖吧，换我也抖", when: "hurt" }, { type: "discuss", text: "快结束了吧", scope: "inst", when: "end" }, { type: "discuss", text: "结算前最后几轮最容易出事", scope: "inst", when: "end" }, { type: "discuss", text: "今天种什么？", scope: "corr" }, { type: "discuss", text: "回廊直播也有人看，我服了我自己", scope: "corr" }, { type: "discuss", text: "排行榜又变了，你们看了吗", scope: "corr" }, { type: "discuss", text: "下个本打算报哪个？", scope: "corr" }, { type: "cold", text: "别高兴太早" }, { type: "cold", text: "我看悬" }, { type: "cold", text: "这把凉了吧" }, { type: "cold", text: "就这？" }, { type: "cold", text: "也就一般" }, { type: "cold", text: "运气好而已" }, { type: "cold", text: "换个人也能做到" }, { type: "cold", text: "等着翻车吧" }, { type: "cold", text: "这种判断，迟早出事" }, { type: "cold", text: "看了半天也没看出哪里厉害" }, { type: "cold", text: "太磨叽了" }, { type: "cold", text: "说了这么多，一点用没有" }, { type: "cold", text: "我押失败", scope: "inst" }, { type: "cold", text: "评级能拿个C就不错了", scope: "inst" }, { type: "cold", text: "队友再强也带不动", scope: "inst" }, { type: "cold", text: "太自信了，这本专治自信", scope: "inst" }, { type: "cold", text: "往届比这厉害的都栽在这", scope: "inst" }, { type: "cold", text: "真以为能全身而退？", scope: "inst" }, { type: "cold", text: "没意思，我换台了" }, { type: "cold", text: "这操作也就D级水平" }, { type: "cold", text: "这不是冷静，是反应慢" }, { type: "cold", text: "别吹了，看结算", scope: "inst" }, { type: "cold", text: "种菜有什么好看的", scope: "corr" }, { type: "cold", text: "回廊里直播，缺积分缺疯了吧", scope: "corr" }, { type: "cold", text: "天天摆烂，等着被清算吧", scope: "corr" }, { type: "envy", text: "凭什么这种人能上热门" }, { type: "envy", text: "我直播三天没人看，这也行？" }, { type: "envy", text: "长得好就是占便宜" }, { type: "envy", text: "又是这种运气好的" }, { type: "envy", text: "打赏的是托吧" }, { type: "envy", text: "我也想有人给我刷" }, { type: "envy", text: "这点本事也能拿打赏" }, { type: "envy", text: "同样是D级进来的，差距怎么这么大" }, { type: "envy", text: "分到这么好的队友，换我我也行", scope: "inst" }, { type: "envy", text: "酸了，真的酸了" }, { type: "envy", text: "一进来就有大佬带，羡慕不来", scope: "inst" }, { type: "envy", text: "这热度买的吧" }, { type: "envy", text: "凭什么打赏都往这边跑" }, { type: "envy", text: "我通关都没人看" }, { type: "envy", text: "排行榜上那些名字，一半靠运气" }, { type: "envy", text: "有人天生就是被偏爱的" }, { type: "envy", text: "我要是有这配置，比这还稳", scope: "inst" }, { type: "envy", text: "住的地方比我好十倍", scope: "corr" }, { type: "envy", text: "在回廊都能开播赚积分，羡慕哭了", scope: "corr" }, { type: "envy", text: "这菜种得，比我吃的还好", scope: "corr" }, { type: "smear", text: "装什么装" }, { type: "smear", text: "演的吧，这反应太假了" }, { type: "smear", text: "人设立得挺好" }, { type: "smear", text: "会说话而已，真打起来就露馅" }, { type: "smear", text: "这种人最会卖队友" }, { type: "smear", text: "表面客气，背地里肯定算计着" }, { type: "smear", text: "我不信真这么淡定" }, { type: "smear", text: "刚才那个眼神，心虚了吧" }, { type: "smear", text: "故意卖惨要打赏" }, { type: "smear", text: "刚才明明可以救，没救", scope: "inst", when: "hurt" }, { type: "smear", text: "自私，只顾自己", scope: "inst" }, { type: "smear", text: "队友出事了还这么冷静，冷血吧", scope: "inst", when: "hurt" }, { type: "smear", text: "这是在拿别人探路", scope: "inst" }, { type: "smear", text: "满嘴好话，一件实事没干" }, { type: "smear", text: "装新人的吧" }, { type: "smear", text: "就是冲着打赏来的" }, { type: "smear", text: "看着就不是好人" }, { type: "smear", text: "别被骗了，都是算计好的" }, { type: "smear", text: "下了本也要直播，吃相难看", scope: "corr" }, { type: "smear", text: "种田人设，炒给谁看", scope: "corr" }, { type: "rumor", text: "听说积分是借的，真的假的" }, { type: "rumor", text: "肯定是抱大腿进来的" }, { type: "rumor", text: "我朋友说在黑市见过这人" }, { type: "rumor", text: "据说上一个本是被人带飞的" }, { type: "rumor", text: "听说欠了一屁股积分" }, { type: "rumor", text: "有人说是买了攻略才敢进的", scope: "inst" }, { type: "rumor", text: "听说被公会踢出来过" }, { type: "rumor", text: "情报社的人说，这人被抽查过" }, { type: "rumor", text: "有人在西区看到这人跟黑市贩子说话" }, { type: "rumor", text: "据说是走后门才越级的" }, { type: "rumor", text: "听说上个本的队友都没出来" }, { type: "rumor", text: "有人说这人其实早就待清算了" }, { type: "rumor", text: "我听说排名是刷的" }, { type: "rumor", text: "传闻进本前偷偷买了防抽查道具" }, { type: "rumor", text: "听说有人专门花钱买这人的录像" }], mh = [{ type: "praise", text: "{who}刚才那下好帅" }, { type: "praise", text: "{who}挺靠谱的" }, { type: "bless", text: "{who}别出事啊" }, { type: "bless", text: "心疼{who}" }, { type: "bless", text: "{who}还好吗", when: "hurt" }, { type: "discuss", text: "{who}靠谱吗，我看不透" }, { type: "discuss", text: "{who}又不说话了" }, { type: "discuss", text: "{who}刚才那句什么意思" }, { type: "discuss", text: "盯紧{who}" }, { type: "discuss", text: "{who}和主播配合挺默契" }, { type: "discuss", text: "{who}好像知道点什么" }, { type: "cold", text: "{who}也就那样" }, { type: "cold", text: "指望{who}？算了吧" }, { type: "envy", text: "凭什么{who}也有人喜欢" }, { type: "smear", text: "我就说{who}有问题" }, { type: "smear", text: "{who}在演" }, { type: "smear", text: "{who}那个表情不对劲" }, { type: "rumor", text: "听说{who}在排行榜上挂过名" }, { type: "rumor", text: "我听说{who}以前出过事" }, { type: "rumor", text: "{who}跟主播是不是早就认识" }], gh = {
  names: ph,
  pool: hh,
  templates: mh
}, Vn = /* @__PURE__ */ new Set(), Ht = [];
let xt = null, As = [], mr = null;
function Kn() {
  for (const e of As.slice())
    try {
      e();
    } catch (t) {
      console.warn("[rlzc] RLZC_LIVE 订阅回调出错", t);
    }
}
function xh() {
  return 1500 + Math.random() * 1500;
}
function xa() {
  xt = null;
  const e = Ht.shift();
  e !== void 0 && (Vn.delete(e), Kn()), Ht.length && (xt = setTimeout(xa, xh()));
}
function oi(e, t = !1) {
  if (t && Ht.length) {
    for (const n of Ht) Vn.delete(n);
    Ht.length = 0, xt && clearTimeout(xt), xt = null;
  }
  if (e.length) {
    for (const n of e)
      Vn.add(n.id), Ht.push(n.id);
    xt ? Kn() : xa();
  }
}
function yh() {
  xt && clearTimeout(xt), xt = null, Ht.length = 0, Vn.clear();
}
function bh(e) {
  mr = e, window.RLZC_LIVE = {
    get: () => mr.view(Vn),
    subscribe(t) {
      return typeof t != "function" ? () => {
      } : (As.push(t), () => {
        As = As.filter((n) => n !== t);
      });
    },
    toggle: () => mr.toggle()
  };
}
const ya = "rlzc_market", no = { D: 0, C: 1, B: 2, A: 3, S: 4 }, ba = { D: 1e3, C: 5e3, B: 2e4, A: 8e4, S: 3e5 }, so = 10, vh = 0.8, kh = "ending", wh = "rating", va = ["S", "A", "B", "C", "D"];
function _h(e, t) {
  return no[e] - no[t];
}
function zh(e) {
  return e <= -2 ? 0.85 : e === -1 ? 0.75 : e === 0 ? 0.6 : e === 1 ? 0.4 : e === 2 ? 0.25 : 0.15;
}
const os = {
  "le-1": { S: 0.15, A: 0.3, B: 0.3, C: 0.17, D: 0.08 },
  0: { S: 0.08, A: 0.2, B: 0.35, C: 0.25, D: 0.12 },
  1: { S: 0.04, A: 0.12, B: 0.3, C: 0.32, D: 0.22 },
  ge2: { S: 0.02, A: 0.08, B: 0.25, C: 0.35, D: 0.3 }
};
function $h(e) {
  return e <= -1 ? os["le-1"] : e === 0 ? os[0] : e === 1 ? os[1] : os.ge2;
}
function Ks(e) {
  return Math.round(e * 100) / 100;
}
function Sh(e, t) {
  const n = 0.93 + t() * 0.14;
  return Math.max(1.01, Ks(1 / e * vh * n));
}
function ka(e, t) {
  return Math.floor(e * Math.round(t * 100) / 100);
}
function Cn(e, t, n, s) {
  return { id: e, label: t, p: n, odds: Sh(n, s) };
}
function wa(e, t, n) {
  const s = {
    id: t.id,
    kind: e,
    q: t.q,
    options: [Cn("yes", t.yes, t.p, n), Cn("no", t.no, Ks(1 - t.p), n)],
    judge: t.judge
  };
  return t.judgeNo && (s.judgeNo = t.judgeNo), t.by && (s.by = t.by), s;
}
function Eh(e) {
  const { pack: t, rand: n } = e;
  if (t.rest) return [];
  const s = _h(t.level, e.playerLevel), r = zh(s), i = [
    { id: kh, kind: "ending", q: "本局结果", options: [Cn("win", "通关", r, n), Cn("lose", "失败", Ks(1 - r), n)] }
  ], o = $h(s);
  if (i.push({ id: wh, kind: "rating", q: "本局评价", options: va.map((l) => Cn(l, l, o[l], n)) }), e.withEvents) for (const l of jf(t)) i.push(wa("event", l, n));
  return i;
}
function Ch(e, t) {
  return e - Math.max(0, t);
}
function _a(e) {
  const t = ba[e.playerLevel], n = Ch(e.balance, e.lockedTips), s = Math.max(0, Math.min(t - e.already, n)), r = e.stake, i = Number.isFinite(r) && r > 0 && e.balance - r < bt[e.playerLevel];
  let o;
  return !Number.isInteger(r) || r < so ? o = `最少押${so}` : e.already + r > t ? o = "超过单注上限" : r > n && (o = "可用余额不足"), { ok: !o, reason: o, cap: t, max: s, belowKill: i };
}
function Mh(e, t) {
  return e.tickets.filter((n) => n.market === t).reduce((n, s) => n + s.stake, 0);
}
function Ih(e, t) {
  return Object.keys(e).map(Number).filter((n) => n >= t).length >= 2;
}
const za = ["通关", "成功", "胜利"], li = ["死亡", "阵亡"];
function Th(e) {
  return li.includes(String(e ?? "").trim());
}
function Nh(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  return li.includes(n) ? { kind: "lost", index: t } : za.includes(n) ? { kind: "option", option: "win", index: t } : n === "失败" ? { kind: "option", option: "lose", index: t } : { kind: "refund", index: t };
}
function Ph(e) {
  if (!e.ended) return null;
  const t = e.endIndex ?? -1;
  if (e.endedBy !== "tag") return { kind: "refund", index: t };
  const n = String(e.result ?? "").trim();
  if (li.includes(n)) return { kind: "lost", index: t };
  const s = String(e.rating ?? "").trim().toUpperCase();
  return za.includes(n) && va.includes(s) ? { kind: "option", option: s, index: t } : { kind: "refund", index: t };
}
function jh(e, t) {
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
  return a && n.endedBy === "tag" && Th(n.result) ? { kind: "lost", index: r } : a && n.endedBy !== "tag" ? { kind: "refund", index: r } : o ? null : i && l > 0 ? { kind: "option", option: "no", index: r } : { kind: "refund", index: r };
}
function Rh(e) {
  const t = {};
  for (const n of e.markets)
    e.outcome.voided ? t[n.id] = { kind: "refund", index: -1 } : n.kind === "ending" ? t[n.id] = Nh(e.outcome) : n.kind === "rating" ? t[n.id] = Ph(e.outcome) : t[n.id] = jh(n, e);
  return t;
}
function Pr(e, t) {
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
function Oh(e, t) {
  const n = {}, s = Pr({ ...e, frozen: void 0 }, t);
  for (const r of e.tickets) n[r.id] = s[r.id] ?? { stamp: "refund", index: -1 };
  return n;
}
function Fh(e, t, n, s = []) {
  const r = new Set(Array.isArray(s) ? s : [s]);
  return Object.keys(t).map(Number).filter((i) => i > n && Re(e[i])).sort((i, o) => i - o).map((i) => {
    const o = e[i]?.extra?.rlzc?.sub;
    return o && !o.skipped && o.markets && typeof o.markets == "object" ? { index: i, state: "ok", hits: o.markets } : !o && r.has(i) ? { index: i, state: "pending", hits: {} } : { index: i, state: "miss", hits: {} };
  });
}
function Lh(e, t) {
  const n = [];
  if (e.frozen) return n;
  for (const s of e.markets)
    s.kind !== "event" && s.kind !== "freak" || t[s.id] || !s.judge || (n.push({ id: s.id, judge: s.judge }), s.judgeNo && n.push({ id: `${s.id}:no`, judge: s.judgeNo }));
  return n;
}
function $a(e, t) {
  return e.markets.find((n) => n.id === t);
}
function Dh(e, t) {
  return e?.options.find((n) => n.id === t)?.label ?? t;
}
function Bh(e, t) {
  const n = $a(e, t.market);
  return `下注·${e.packName}·${n?.q ?? t.market}·${Dh(n, t.option)}`;
}
function Vh(e, t, n) {
  const s = [];
  for (const r of e.tickets) {
    s.push({ delta: -r.stake, source: Bh(e, r), type: "bet", at: r.at, pos: r.after, seq: r.seq ?? 0 });
    const i = t[r.id];
    if (!i || i.stamp === "lose") continue;
    const o = $a(e, r.market)?.q ?? r.market, l = (i.index >= 0 ? n(i.index) : void 0) ?? r.at;
    i.stamp === "win" ? s.push({ delta: ka(r.stake, r.odds), source: `赌票兑付·${e.packName}·${o}`, type: "bet", at: l, pos: i.index }) : s.push({ delta: r.stake, source: `赌票退还·${e.packName}·${o}`, type: "bet", at: l, pos: i.index });
  }
  return s;
}
const Uh = '你是回廊黑市的庄家，要为主播即将进入的副本开几个离谱但有趣的盘口。你只知道下面这些公开信息，不知道剧情会怎么走。出2到3道是非题：题目20字以内，称{{user}}为主播，不用性别代词；必须能从之后的正文里直接看出是或否；不要问结局、评价和生死，那些已经有盘了；不要涉及公开信息以外的设定。每题给一个你估计「是」的概率p（0.05到0.95）。只输出JSON：[{"q":"题目","judge":"用来判断是否发生的一句陈述","p":0.3}]', Wh = 4e3;
function Hh(e) {
  const n = Ql(e).split(`
`), s = n.findIndex((i) => /副本简报/.test(i));
  return (s >= 0 ? n.slice(s, s + 6) : n).join(`
`).trim().slice(0, 1e3);
}
function Gh(e) {
  const t = e.docs.filter((s) => s.md && s.md.trim()).map((s) => `## ${s.title}
${s.md.trim()}`).join(`

`).slice(0, Wh), n = [
    `【副本】${e.name}　等级：${e.level}`,
    `【简报】
${e.briefing || "（无）"}`,
    `【公开资料】
${t || "（无）"}`
  ].join(`

`);
  return { system: Uh, user: n };
}
function Kh(e) {
  let t = String(e ?? "").trim();
  const n = /```(?:json)?\s*([\s\S]*?)```/i.exec(t);
  n && (t = n[1].trim());
  const s = t.indexOf("["), r = t.lastIndexOf("]");
  if (s < 0 || r <= s) throw new Pe("返回里没有 JSON 数组");
  let i;
  try {
    i = JSON.parse(t.slice(s, r + 1));
  } catch {
    throw new Pe("返回的 JSON 无法解析");
  }
  if (!Array.isArray(i)) throw new Pe("返回的不是 JSON 数组");
  const o = [];
  for (const l of i) {
    if (!l || typeof l.q != "string" || typeof l.judge != "string") continue;
    const a = l.q.trim(), c = l.judge.trim(), u = typeof l.p == "number" ? l.p : Number(l.p);
    if (!(!a || a.length > 20 || !c || !Number.isFinite(u) || u < 0.05 || u > 0.95) && (o.push({ q: a, judge: c, p: Ks(u) }), o.length >= 3))
      break;
  }
  if (!o.length) throw new Pe("没有合格的题");
  return o;
}
async function Yh(e, t, n = 1) {
  let s;
  for (let r = 0; r <= n; r++)
    try {
      return Kh(await e(t));
    } catch (i) {
      s = i;
    }
  throw s;
}
function qh(e, t) {
  return e.map((n, s) => wa("freak", { id: `F${s + 1}`, q: n.q, yes: "会", no: "不会", p: n.p, judge: n.judge }, t));
}
function Jh(e) {
  return `{{user}}在黑市押了自己本局失败，押注${e}分。`;
}
function Zh(e) {
  return `{{user}}刚在赌坊输掉${e}分，余额已低于斩杀线。`;
}
function Qh(e) {
  return `{{user}}刚在赌坊一局赢了${e}分。`;
}
function Xh(e) {
  return e.kind === "betLose" ? Jh(e.amount) : e.kind === "casinoLoss" ? Zh(e.amount) : Qh(e.amount);
}
function jr(e, t) {
  if (t.kind === "betLose") {
    const n = e.find((s) => s.kind === "betLose");
    if (n && !n.sent) return e.map((s) => s === n ? { ...s, amount: s.amount + t.amount, after: t.after } : s);
  }
  return [...e, t];
}
function em(e) {
  return e.filter((t) => !t.sent);
}
function tm(e) {
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
const gr = (e) => Array.from({ length: e }, (t, n) => n + 1), Sa = [
  {
    id: "bell",
    name: "听钟",
    desc: "押钟声单双、大小，或猜几下。",
    bets: [
      { id: "odd", label: "单", mult: 1.6 },
      { id: "even", label: "双", mult: 1.6 },
      { id: "small", label: "小", mult: 1.6 },
      { id: "big", label: "大", mult: 1.6 },
      ...gr(12).map((e) => ({ id: `n${e}`, label: `${e}下`, mult: 9.6 }))
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
      ...gr(20).map((e) => ({ id: `d${e}`, label: `${e}号`, mult: 16 }))
    ]
  },
  {
    id: "lot",
    name: "抽签",
    desc: "三支签，一支大吉。",
    bets: gr(3).map((e) => ({ id: `s${e}`, label: `第${e}支`, mult: 2.4 }))
  },
  {
    id: "card",
    name: "翻牌",
    desc: "和庄家各翻一张，大的赢，平局庄家赢。",
    bets: [{ id: "high", label: "比大小", mult: 1.73 }]
  }
];
function un(e) {
  return Sa.find((t) => t.id === e);
}
function yn(e, t) {
  return Math.min(e, 1 + Math.floor(t() * e));
}
function nm(e, t) {
  return Math.floor(e * Math.round(t * 100) / 100);
}
function sm(e, t, n, s) {
  const r = un(e), i = r?.bets.find((u) => u.id === t);
  if (!r || !i) return null;
  let o = !1, l = "", a = [];
  switch (r.id) {
    case "bell": {
      const u = yn(12, s);
      a = [u], i.id === "odd" || i.id === "even" ? (o = u % 2 === 1 == (i.id === "odd"), l = `${u}下，${u % 2 ? "单" : "双"}`) : i.id === "small" || i.id === "big" ? (o = u <= 6 == (i.id === "small"), l = `${u}下，${u <= 6 ? "小" : "大"}`) : (o = i.id === `n${u}`, l = `${u}下`);
      break;
    }
    case "door": {
      const u = yn(20, s);
      if (a = [u], i.id.startsWith("r")) {
        const d = Number(i.id.slice(1));
        o = u > (d - 1) * 5 && u <= d * 5;
      } else o = i.id === `d${u}`;
      l = `${u}号门`;
      break;
    }
    case "lot": {
      const u = yn(3, s);
      a = [u], o = i.id === `s${u}`, l = `第${u}支大吉`;
      break;
    }
    case "card": {
      const u = yn(13, s), d = yn(13, s);
      a = [u, d], o = u > d, l = `你 ${u}，庄家 ${d}`;
      break;
    }
  }
  const c = o ? nm(n, i.mult) : 0;
  return { win: o, payout: c, net: o ? c - n : -n, result: l, label: `押${i.label}`, faces: a };
}
function rm(e, t) {
  return `赌坊·${un(e)?.name ?? e}·${t}`;
}
function im(e) {
  const t = Sa.map((i) => i.id), n = Math.min(t.length - 1, Math.floor(e() * t.length)), s = t.filter((i, o) => o !== n), r = Math.min(s.length - 1, Math.floor(e() * s.length));
  return [t[n], s[r]];
}
function om(e, t, n) {
  return e.tables.length === 2 && e.tables.every((r) => un(r)) && e.key === t ? { tables: e.tables, key: t, changed: !1 } : { tables: im(n), key: t, changed: !0 };
}
const Rr = "rlzc", ds = { optIn: !1, injectToAI: !1, source: "local", freq: 3 }, Ea = {
  source: "off",
  presets: [],
  presetId: "",
  saveMode: !1,
  wait: !0,
  timeoutSec: 60
}, kn = {
  depths: { token: 4, progress: 4, turn: 0, ledger: 4, live: 4 },
  ball: { x: null, y: null },
  showBall: !0,
  debug: !1,
  customPacks: [],
  panelDisplay: "panel",
  genericCaps: { ...Dn },
  subApi: structuredClone(Ea),
  cardCollapsed: { depths: !0, subApi: !0, genericCaps: !0, accountFix: !0, rolesDebug: !0, live: !0 },
  live: { ...ds }
}, f = /* @__PURE__ */ js({
  chatId: "",
  session: null,
  pack: null,
  progress: null,
  audit: null,
  /** 副API正在整理 */
  subBusy: !1,
  /** 系统页的一行小字：副本记录：已更新（第N轮）/ 第N轮状态未更新 */
  subLine: "",
  settings: structuredClone(kn),
  packs: [],
  lastInjection: Bn,
  panelOpen: !1,
  tab: "system",
  debugUnlocked: !1,
  /** 刷新计数，调试页据此重读每楼快照 */
  tick: 0,
  /** 积分账本流水（重放自聊天快照，CLAUDE.md 第三期） */
  ledger: [],
  /** 黑市（第四期）：本局盘口、赌票、摆桌 */
  market: Fm()
});
function ut(e) {
  return JSON.parse(JSON.stringify(e));
}
function Yn(...e) {
  f.settings.debug && console.log("[rlzc]", ...e);
}
function lm() {
  const e = ge().extensionSettings, t = e[Rr] ?? {}, n = {
    ...structuredClone(kn),
    ...t,
    depths: { ...kn.depths, ...t.depths ?? {}, ledger: t.depths?.ledger ?? kn.depths.ledger },
    ball: { ...kn.ball, ...t.ball ?? {} },
    customPacks: Array.isArray(t.customPacks) ? t.customPacks.filter((s) => Sl(s).length === 0) : [],
    panelDisplay: t.panelDisplay === "statusbar" ? "statusbar" : "panel",
    genericCaps: { ...Dn, ...t.genericCaps ?? {} },
    subApi: {
      ...structuredClone(Ea),
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
    live: am(t.live)
  };
  e[Rr] = n, f.settings = n, f.packs = Qr(n.customPacks);
}
function am(e) {
  const t = e ?? {}, n = Math.floor(Number(t.freq));
  return {
    optIn: typeof t.optIn == "boolean" ? t.optIn : ds.optIn,
    injectToAI: typeof t.injectToAI == "boolean" ? t.injectToAI : ds.injectToAI,
    source: t.source === "ai" ? "ai" : "local",
    freq: Number.isFinite(n) ? Math.max(1, Math.min(10, n)) : ds.freq
  };
}
function be() {
  ge().extensionSettings[Rr] = /* @__PURE__ */ ie(f.settings), ge().saveSettingsDebounced(), f.packs = Qr(f.settings.customPacks);
}
function cm(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return ["不是有效的 JSON 文件"];
  }
  const n = Sl(t);
  if (n.length) return n;
  const s = t;
  return Qr([]).some((r) => r.id === s.id) ? [`id「${s.id}」与内置副本包重复`] : (f.settings.customPacks = [...f.settings.customPacks.filter((r) => r.id !== s.id), s], be(), []);
}
function um(e) {
  f.settings.customPacks = f.settings.customPacks.filter((t) => t.id !== e), be();
}
function qe() {
  const e = At()[oa];
  return !e || Array.isArray(e) ? {} : e;
}
function qn(e) {
  At()[oa] = e, dt();
}
function fn(e) {
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (i.is_user || i.is_system) continue;
    const o = i.extra?.rlzc?.ledger;
    if (Array.isArray(o))
      for (const l of o) t.push({ e: { ...l, mesIndex: r }, pos: r, g: 0, seq: 0 });
  }
  for (const { pos: r, seq: i, ...o } of Dm(e))
    t.push({ e: { ...o, mesIndex: r }, pos: r < 0 ? Number.MAX_SAFE_INTEGER : r, g: i === void 0 ? 1 : 2, seq: i ?? 0 });
  t.sort((r, i) => r.pos - i.pos || r.g - i.g || r.seq - i.seq);
  const n = t.map((r) => r.e), s = qe();
  for (const r of s.adjust ?? [])
    n.push({ delta: r.amount, source: `手动：${r.note}`, type: "manual", at: r.at, mesIndex: -1 });
  return n;
}
function jt(e) {
  const t = qe();
  if (t.init != null) return { value: t.init.value, source: t.init.source };
  const n = /<状态栏>([\s\S]*?)<\/状态栏>/;
  for (let s = e.length - 1; s >= 0; s--) {
    const r = e[s];
    if (r.is_user || !r.mes) continue;
    const i = n.exec(r.mes);
    if (!i) continue;
    const o = la(i[1]);
    if (o !== null) {
      const l = Ye(r.send_date ?? r.gen_finished ?? void 0);
      return qn({ ...t, init: { value: o, source: "状态栏读取", at: l } }), { value: o, source: "状态栏读取" };
    }
  }
  return { value: 1e3, source: "默认值" };
}
function Am(e) {
  const t = qe();
  if (!(t.init != null || f.ledger.length > 0)) return "";
  const s = jt(e), r = tn(s.value, f.ledger), i = /<状态栏>([\s\S]*?)<\/状态栏>/;
  let o = "D";
  const l = t.fix?.level;
  if (l && ["D", "C", "B", "A", "S"].includes(l))
    o = l;
  else
    for (let h = e.length - 1; h >= 0; h--) {
      if (e[h].is_user || !e[h].mes) continue;
      const g = i.exec(e[h].mes);
      if (!g) continue;
      const k = ei(g[1]);
      if (k) {
        o = k;
        break;
      }
    }
  const a = bt[o], c = Gn(s.value, f.ledger, a), u = Np(r, c, o, a), d = Me();
  return d?.status === "active" && d.live ? uh(u, ri(e, d.id)) : u;
}
function ro(e, t = !0) {
  const n = Q(), s = n[e];
  if (!s || s.is_user) return;
  const r = s.mes ?? "", i = Ye(s.send_date ?? s.gen_finished ?? void 0), o = [], l = new RegExp(Bf.source, "g");
  let a;
  for (; (a = l.exec(r)) !== null; ) {
    const u = Mp(a[1]);
    u && o.push({ delta: u.delta, source: u.source, type: "tag", at: i });
  }
  const c = t ? Vs(r) : null;
  if (c && f.pack && !f.pack.rest) {
    const u = {
      结果: c.result ?? "",
      评价: c.rating ?? "",
      ...c.fields
    }, d = qe(), h = /<状态栏>([\s\S]*?)<\/状态栏>/;
    let g = "D";
    const k = d.fix?.level;
    if (k && ["D", "C", "B", "A", "S"].includes(k))
      g = k;
    else
      for (let $ = e - 1; $ >= 0; $--) {
        if (n[$].is_user || !n[$].mes) continue;
        const I = h.exec(n[$].mes);
        if (!I) continue;
        const ee = ei(I[1]);
        if (ee) {
          g = ee;
          break;
        }
      }
    const z = jt(n), L = tn(z.value, f.ledger), V = !!f.session?.clearance, N = Ip(f.pack.level, g, u, L, V, f.pack.name);
    if (N.warn) {
      s.extra = s.extra ?? {};
      const $ = s.extra.rlzc ?? { phase: "", round: 0, injected: [] };
      s.extra.rlzc = ut({ ...$, settleWarn: N.warn });
    }
    if (N.delta !== 0) {
      const $ = { delta: N.delta, source: N.source, type: "settle", at: i };
      N.clearWin && ($.clear = !0), o.push($);
    }
  }
  if (o.length || s.extra?.rlzc?.ledger?.length) {
    s.extra = s.extra ?? {};
    const u = s.extra.rlzc ?? { phase: "", round: 0, injected: [] }, d = [...o, ...(u.ledger ?? []).filter((h) => h.type === "tip")];
    s.extra.rlzc = ut({ ...u, ledger: d.length ? d : void 0 }), dt();
  }
  f.ledger = fn(Q());
}
function dm(e, t) {
  const n = qe(), s = Ye(void 0), r = [...n.adjust ?? [], { amount: e, note: t, at: s }];
  qn({ ...n, adjust: r });
  const i = { delta: e, source: `手动：${t}`, type: "manual", at: s, mesIndex: -1 };
  f.ledger = [...f.ledger, i];
}
function fm(e, t) {
  dm(e, t);
}
function pm(e) {
  const t = qe(), n = Ye(void 0);
  qn({ ...t, init: { value: e, source: "手动设置", at: n } }), f.ledger = fn(Q());
}
function hm(e, t) {
  if (!e && !t) return;
  const n = qe(), s = Q(), r = Ye(void 0);
  qn({ ...n, fix: { level: e, rank: t, at: r, afterIndex: s.length - 1 } });
}
function Me() {
  return Rp(At()[Et]);
}
function Ys() {
  const e = At(), t = Array.isArray(e[Et]?.declined) ? e[Et].declined : [], n = Array.isArray(e[eo]) ? e[eo] : [];
  return [.../* @__PURE__ */ new Set([...n, ...t])];
}
function mm(e) {
  const t = At(), n = [...Ys().filter((s) => s !== e), e];
  t[Et] = { ...t[Et] ?? {}, declined: n }, dt();
}
function Qt(e) {
  const t = At(), n = Ys(), s = n.length ? { declined: n } : {};
  e ? t[Et] = { ...JSON.parse(JSON.stringify(e)), ...s } : n.length ? t[Et] = s : delete t[Et], dt();
}
function ai(e) {
  const t = Me();
  t && (e(t), Qt(t), Ce());
}
function Ca(e) {
  const t = Q();
  return (e === "swipe" || e === "continue") && Re(t[t.length - 1]) ? t.slice(0, -1) : t;
}
function $s(e, t) {
  if (!t) return { session: null, pack: null, progress: null, audit: null };
  const n = aa(t, f.packs);
  if (!n) return { session: t, pack: null, progress: null, audit: null };
  const s = Ol(e, t, n);
  return { session: t, pack: n, progress: s, audit: s ? Hp(e, n, s) : null };
}
function Ce() {
  const e = Q();
  let t = Me();
  if (t) {
    const s = JSON.stringify(t);
    if (!Fp(e, t))
      La(t.id), Qt(null), Se("info", "入场消息已不存在，副本会话已作废。"), t = null;
    else {
      const r = $s(e, t);
      r.progress && (t.status = r.progress.ended ? "ended" : "active"), JSON.stringify(t) !== s && Qt(t);
    }
  }
  const n = $s(e, t);
  f.session = n.session, f.pack = n.pack, f.progress = n.progress, f.audit = n.audit, f.subLine = ja(e, n.progress), Hm(e, n.session), f.ledger = fn(e), f.tick++, Kn();
}
function Ma() {
  if (f.session)
    return ca(f.session, f.progress?.rolesFromChat);
}
function Ss() {
  for (const e of Zf) Bt(e, "", 0, !1);
}
let Mn = -1;
function gm(e) {
  const t = Ca(e), n = Me(), { pack: s, progress: r, audit: i } = $s(t, n), o = n ? ca(n, r?.rolesFromChat) : void 0, l = pn() && !!r, a = l ? Ws(t, r.entryIndex) : null, c = s ? tp(s, r, n, {
    roles: o,
    briefing: n?.briefing,
    panelLimit: r?.panel?.limit,
    audit: i ?? void 0,
    subNext: l ? gp(t, r.entryIndex) : void 0,
    stateText: a ? Zl(s, a.state) : void 0
  }) : Bn;
  Ss();
  const u = f.settings.depths;
  c.token && Bt(Fl, c.token, u.token, !0), c.progress && Bt(Ll, c.progress, u.progress, !1), c.turn && Bt(Dl, c.turn, u.turn, !1), c.state && Bt(Bl, c.state, u.progress, !1);
  const d = qe();
  let h = Am(t);
  if (d.fix) {
    const k = Tp(d.fix);
    k && (h = h ? `${h}
${k}` : k);
  }
  const g = Oe();
  if (g.hints.length) {
    const k = g.hints.map(Xh).join("");
    h = h ? `${h}
${k}` : k, g.hints.some((z) => !z.sent) && (g.hints = g.hints.map((z) => ({ ...z, sent: !0 })), vt(g));
  }
  if (h && Bt(Vl, h, u.ledger, !1), f.settings.live.injectToAI) {
    const k = $p(fi(/* @__PURE__ */ new Set(), t));
    k && Bt(Ul, k, u.live, !1);
  }
  f.lastInjection = c, Mn = t.length, Yn("注入", e, c);
}
const Or = /* @__PURE__ */ new Set();
async function xm() {
  const e = Q(), t = e.length - 1, n = e[t];
  if (!n?.is_user) return;
  const s = Uf(n.mes);
  if (!s) return;
  const r = Me();
  if (!r || r.status !== "active" || r.manual.some((c) => c.kind === "skip" && c.atIndex === t)) return;
  const i = `${dn()}:${t}:${n.mes}`;
  if (Or.has(i)) return;
  Or.add(i);
  const { pack: o, progress: l } = $s(e, r);
  if (!o || !l || l.ended) return;
  const a = Wf(o, l.phase, l.round, s);
  a && await Pt(`是否跳到${s}？（${a.label}）`) && (r.manual.push({ kind: "skip", atIndex: t, targetPhase: a.phase, targetRound: a.round }), Qt(r));
}
async function ym(e, t, n, s) {
  try {
    if (s === "quiet" || s === "impersonate") {
      Ss();
      return;
    }
    s !== "continue" && s !== "swipe" && s !== "regenerate" && await xm(), await Mm(s), gm(s);
  } catch (r) {
    console.error("[rlzc] 拦截器出错", r), Ss();
  }
}
const fs = /* @__PURE__ */ new Set();
function ci() {
  const e = Me();
  if (!e || e.status !== "ended") return 0;
  const t = f.progress?.endIndex;
  return t !== void 0 ? t + 1 : e.entryIndex + 1;
}
async function Ia(e) {
  const { index: t, info: n } = e, s = dn(), r = `${s}:${t}:${n.name}`;
  if (fs.has(r)) return;
  fs.add(r);
  const i = e.pack ? `检测到进入《${e.pack.name}》，是否启用？` : `检测到进入《${n.name}》，是否启用？（未收录的副本，将使用通用副本包）`, o = pa(e.pack ?? {}, f.settings.live.optIn), l = await Wl(i, o.show ? { label: "开启直播", checked: o.checked } : null);
  if (dn() !== s) {
    fs.delete(r);
    return;
  }
  if (!l.ok) {
    mm(ti(t, n.name));
    return;
  }
  o.show && Ta(l.checked);
  const a = Hs(Q(), t, f.packs);
  if (!a || a.info.name !== n.name) {
    Se("warning", "入场消息已变化，未启用。");
    return;
  }
  const c = { ...n };
  e.pack || (c.rounds = zl(n.limit, El(n), f.settings.genericCaps).rounds), Pa(e.pack ?? Cl(c, f.settings.genericCaps), t, c, o.show && l.checked);
}
function Ta(e) {
  f.settings.live.optIn !== e && (f.settings.live.optIn = e, be());
}
function Na() {
  const e = Dp(Q(), Me(), Ys(), f.packs, ci());
  e && Ia(e);
}
function bm(e) {
  Ce();
  const t = Q(), n = ci();
  let s = -1;
  for (let r = n; r < t.length; r++) if (Re(t[r])) {
    s = r;
    break;
  }
  e === s && Na();
}
function Pa(e, t, n, s = !1) {
  const r = Q(), i = r[t], o = Me();
  o && Bm(o);
  const l = jp(e, t, n), a = Rt();
  if (a.corridor.on && (a.corridor.on = !1, Un(a, a.corridor.show, Zt.enterOff)), s && !e.disableLive && (l.live = !0, Un(a, l.id, Zt.instanceOn)), Jn(a), !e.rest) {
    const c = jt(r), u = qe(), d = /<状态栏>([\s\S]*?)<\/状态栏>/;
    let h = "D";
    const g = u.fix?.level;
    if (g && ["D", "C", "B", "A", "S"].includes(g))
      h = g;
    else
      for (let k = r.length - 1; k >= 0; k--) {
        if (r[k].is_user || !r[k].mes) continue;
        const z = d.exec(r[k].mes);
        if (!z) continue;
        const L = ei(z[1]);
        if (L) {
          h = L;
          break;
        }
      }
    Gn(c.value, f.ledger, bt[h]) && (l.clearance = !0);
  }
  i.extra = i.extra ?? {}, i.extra.rlzc = { phase: e.phases[0]?.name ?? "进行中", round: 1, injected: [], entry: l.id }, Qt(l), Vm(l, e, t), Ce(), f.progress && (i.extra.rlzc.injected = ut(f.progress.perMessage[t]?.events ?? [])), dt(), Se("success", `已进入副本《${e.name}》。`);
}
async function vm(e) {
  const t = f.packs.find((l) => l.id === e);
  if (!t) return;
  const n = Q();
  let s = n.length - 1;
  for (; s >= 0 && !Re(n[s]); ) s--;
  if (s < 0) {
    Se("warning", "当前聊天还没有AI消息，无法手动进入副本。");
    return;
  }
  if (Me()?.status === "active" && !await Pt("当前已有进行中的副本，确定要替换吗？")) return;
  const i = pa(t, f.settings.live.optIn), o = await Wl(`以最新一条AI回复作为《${t.name}》的第1轮，确定进入吗？`, i.show ? { label: "开启直播", checked: i.checked } : null);
  o.ok && (i.show && Ta(o.checked), Pa(t, s, Il(n[s].mes) ?? { name: t.name }, i.show && o.checked));
}
function qs(e) {
  ai((t) => t.manual.push(e));
}
function Js() {
  return Q().length - 1;
}
async function io() {
  const e = f.progress;
  if (!(!e || e.ended || !f.pack?.phases.length || e.phase.cap <= 0)) {
    if (e.nextRound >= e.phase.cap) {
      Se("info", "已经是本阶段最后一轮，无需跳过。");
      return;
    }
    await Pt(`是否跳到本阶段结束？（${e.phase.name}第${e.phase.cap}轮）`) && (qs({ kind: "skip", atIndex: Js(), targetPhase: e.phase.id, targetRound: e.phase.cap }), Se("info", "已记录跳过，下一次生成开始快进。"));
  }
}
async function oo() {
  if (!(!f.session || f.progress?.ended) && await Pt("确定要手动结束当前副本吗？")) {
    if (f.session.live) {
      const e = Rt();
      Un(e, f.session.id, Zt.instanceOff), Jn(e);
    }
    qs({ kind: "end", atIndex: Js() });
  }
}
function km(e) {
  qs({ kind: "setPhase", atIndex: Js(), phase: e });
}
function wm(e) {
  qs({ kind: "setRound", atIndex: Js(), round: e });
}
function _m(e) {
  ai((t) => {
    t.roles = Object.fromEntries(Object.entries(e).filter(([, n]) => n.trim()));
  });
}
function zm(e) {
  ai((t) => t.manual.splice(e, 1));
}
async function lo() {
  f.session && await Pt("确定要删除当前副本会话吗？（不会改动聊天记录）") && (La(f.session.id), Qt(null), Ce());
}
function pn() {
  return f.settings.subApi.source !== "off";
}
function ui() {
  const e = f.settings.subApi, t = Math.max(5, Number(e.timeoutSec) || 60) * 1e3;
  if (e.source === "main") return { source: "main", timeoutMs: t };
  if (e.source === "preset") {
    const n = e.presets.find((s) => s.id === e.presetId);
    return n ? { source: "preset", preset: n, timeoutMs: t } : null;
  }
  return null;
}
function $m(e) {
  return e.source === "main" ? "跟随主API" : `自设API「${e.preset?.name}」`;
}
function ja(e, t) {
  if (!pn() || !t || t.ended) return "";
  if (f.subBusy) return "副本记录：整理中…";
  const n = Object.keys(t.perMessage).map(Number);
  if (!n.length) return "";
  const s = Math.max(...n);
  if (e[s]?.extra?.rlzc?.sub?.skipped) return `第${t.perMessage[s].round}轮状态未更新`;
  const r = Ws(e, t.entryIndex);
  return r && t.perMessage[r.index] ? `副本记录：已更新（第${t.perMessage[r.index].round}轮）` : "副本记录：尚未整理";
}
let In = null;
const Ai = /* @__PURE__ */ new Set();
function Xt(e) {
  return pp(dn(), e, Q()[e]);
}
function ao(e) {
  f.subBusy = e, f.subLine = ja(Q(), f.progress);
  const t = "rlzc-sub-busy";
  let n = document.getElementById(t);
  if (e && f.settings.subApi.wait) {
    const s = document.getElementById("rightSendForm");
    !n && s && (n = document.createElement("small"), n.id = t, n.textContent = "整理中…", n.title = "回廊种菜系统：正在检测本轮的副本事件", n.style.cssText = "align-self:center;margin:0 6px;opacity:.75;white-space:nowrap;font-size:calc(var(--mainFontSize, 15px) * 0.8);line-height:1.2;", s.prepend(n));
  } else n?.remove();
}
function Ra(e, t, n) {
  if (Xt(e) !== t) return;
  const s = Q()[e];
  s?.extra?.rlzc && (s.extra.rlzc = ut({ ...s.extra.rlzc, sub: n }), dt(), Ce());
}
function Sm(e, t) {
  const n = Q(), s = f.progress, r = f.pack, i = n[e], o = s?.perMessage[e];
  if (!r || !s || !o || !i) return null;
  const l = Ma(), a = (I) => ({ ...I, text: _s(I.text, r, l), if: I.if ? _s(I.if, r, l) : void 0 }), c = Ap(r, i.extra?.rlzc?.injected ?? []).map(a), u = (s.next?.events ?? []).filter((I) => I.if).map(a);
  if (!hp({
    enabled: pn(),
    active: !s.ended && f.session?.status === "active",
    type: t,
    saveMode: f.settings.subApi.saveMode,
    hasEvents: c.length > 0,
    hasNextConditional: u.length > 0
  })) return null;
  const h = Xt(e);
  if (Ai.has(h)) return null;
  const g = r.phases.find((I) => I.id === o.phase), k = Ws(n.slice(0, e), s.entryIndex), z = f.session ? Oe().books[f.session.id] : void 0, L = up({
    pack: r,
    phaseName: g?.name ?? o.phase,
    round: o.round,
    prevState: k?.state ?? null,
    events: c,
    nextConditional: u,
    text: String(i.mes ?? ""),
    markets: z ? Lh(z, f.market.results) : []
  }), V = ge().substituteParams, N = V ? { system: V(L.system), user: V(L.user) } : L, $ = Em(e, h, o.round, N);
  return In = { key: h, index: e, promise: $ }, $.finally(() => {
    In?.key === h && (In = null);
  }), $;
}
async function Em(e, t, n, s) {
  ao(!0);
  try {
    let r = 2;
    for (; ; ) {
      const i = ui();
      if (!i) throw new Error("副本事件检测没有设置好：选了「自设API」时需要先选一个接口预设");
      const o = Date.now();
      try {
        const l = await mp((a) => Xr(i, a), s, r);
        Ra(e, t, { ...l, ms: Date.now() - o, via: $m(i), at: (/* @__PURE__ */ new Date()).toISOString() }), Ai.add(t);
        return;
      } catch (l) {
        if (Xt(e) !== t) return;
        const a = Us(l), c = String(l?.message ?? l).slice(0, 200);
        if (Yn("副本事件检测失败", a, l), !f.settings.subApi.wait) {
          Se("warning", `第${n}轮事件检测失败（${a}），已沿用上一轮状态。`), xr(e, t, a);
          return;
        }
        if (await Cm(n, a, c) === "skip") {
          xr(e, t, a);
          return;
        }
        r = 0;
      }
    }
  } catch (r) {
    Se("error", String(r?.message ?? r)), xr(e, t, "其他");
  } finally {
    ao(!1);
  }
}
function xr(e, t, n) {
  Ai.add(t), Ra(e, t, { skipped: !0, error: n, at: (/* @__PURE__ */ new Date()).toISOString() });
}
async function Cm(e, t, n) {
  const s = ge();
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
  const h = [{ value: "", text: "请选择…" }];
  for (const z of r.presets) r.source === "preset" && z.id === r.presetId || h.push({ value: `preset:${z.id}`, text: `自设API：${z.name}` });
  r.source !== "main" && h.push({ value: "main", text: "跟随主API" });
  for (const z of h) {
    const L = document.createElement("option");
    L.value = z.value, L.textContent = z.text, d.append(L);
  }
  u.append(d), c.append(u), i.append(o, l, a, c);
  let g;
  d.addEventListener("change", () => {
    const z = d.value;
    z && (z === "main" ? r.source = "main" : (r.source = "preset", r.presetId = z.slice(7)), be(), g.complete(s.POPUP_RESULT.CUSTOM1));
  }), g = new s.Popup(i, s.POPUP_TYPE.TEXT, "", {
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
  const k = await g.show();
  return k === s.POPUP_RESULT.AFFIRMATIVE || k === s.POPUP_RESULT.CUSTOM1 ? "retry" : "skip";
}
async function Mm(e) {
  const t = In;
  if (!(!t || !f.settings.subApi.wait) && !((e === "swipe" || e === "regenerate" || e === "continue") && t.index >= Ca(e).length))
    try {
      await t.promise;
    } catch {
    }
}
function Im(e, t) {
  const n = Q(), s = n[e];
  if (!Re(s)) return;
  const r = Me();
  if (!r || r.status === "ended") {
    if (Hs(n, e, f.packs)) {
      const c = Lp(n, f.packs, ci(), e, Ys());
      c && Ia(c);
    }
    if (t === "first_message") return;
    Ce(), ro(e, !1), uo(e), vr(e, t), co(), po();
    return;
  }
  if (t === "first_message") return;
  let i = null;
  pn() && (Tn = e);
  const o = Nl(s.mes);
  o && (r.roles = { ...r.roles ?? {}, ...o }), Qt(r), Ce();
  const l = f.progress?.perMessage[e];
  if (l && f.pack) {
    const c = f.pack.phases.find((z) => z.id === l.phase), u = {
      phase: c?.name ?? l.phase,
      round: l.round,
      injected: Mn === e ? f.lastInjection.injected : l.events
    }, d = f.pack.time;
    d.type === "clock" && c?.clock && !c.night && !c.frozen && (u.clock = jl(d.dayStart, d.minutesPerRound, l.round));
    const h = Mn === e ? f.lastInjection.limit : l.limit?.text ? { text: l.limit.text, minutes: l.limit.minutes, total: l.limit.total } : void 0;
    h && (u.limit = h);
    const g = s.extra?.rlzc?.entry;
    g && (u.entry = g), Mn === e && f.lastInjection.skipped?.length && (u.skippedEvents = f.lastInjection.skipped), t === "continue" && s.extra?.rlzc?.sub && (u.sub = s.extra.rlzc.sub), t === "continue" && s.extra?.rlzc?.live && (u.live = s.extra.rlzc.live);
    const k = (s.extra?.rlzc?.ledger ?? []).filter((z) => z.type === "tip");
    t === "continue" && k.length && (u.ledger = k), s.extra = s.extra ?? {}, s.extra.rlzc = ut(u), dt(), Ce(), i = Sm(e, t);
  }
  Tn >= 0 && (Tn = -1, i || Ce());
  const a = Vs(s.mes);
  if (a && Se("info", `副本结算：${a.result ?? "—"}${a.rating ? `，评价 ${a.rating}` : ""}`), ro(e), uo(e), i) {
    const c = Xt(e);
    i.then(() => {
      Xt(e) === c && vr(e, t);
    });
  } else vr(e, t);
  co(), po();
}
function co() {
  const e = qe();
  e.fix && qn({ ...e, fix: void 0 });
}
function uo(e) {
  const t = Q(), n = t[e];
  if (!n || n.is_user || !n.mes) return;
  const r = /<状态栏>([\s\S]*?)<\/状态栏>/.exec(n.mes);
  if (!r) return;
  const i = la(r[1]);
  if (i === null) return;
  const o = jt(t), l = (c) => c.mesIndex === e && (c.type === "tip" || c.type === "bet" && /^赌票/.test(c.source)), a = tn(o.value, fn(t).filter((c) => !l(c)));
  i !== a && (Yn(`积分核对不符（楼层${e}）：状态栏 ${i}，账本 ${a}`), n.extra?.rlzc && (n.extra.rlzc = ut({ ...n.extra.rlzc, ledgerMismatch: { status: i, ledger: a } }), dt()));
}
function Ao() {
  Or.clear(), fs.clear(), Mn = -1, Tn = -1, f.chatId = dn(), f.debugUnlocked = !1, f.lastInjection = Bn, Ss(), yh(), f.ledger = fn(Q()), Ce(), Na(), setTimeout(() => di(), 50);
}
function yr() {
  Ce();
}
function Oa() {
  return f.settings.panelDisplay === "statusbar" ? Jt.filter((e) => e !== "副本") : Jt;
}
function br(e) {
  Gl(e, Oa());
}
function di(e = !1) {
  op(Oa(), e);
}
function Tm(e) {
  f.settings.panelDisplay !== e && (f.settings.panelDisplay = e, be(), di(!0));
}
const ps = gh;
function Rt() {
  return sh(At()[da]);
}
function Jn(e) {
  At()[da] = ut(e), dt();
}
function Un(e, t, n) {
  if (!t) return;
  const s = ii(Q(), e) + 1, r = { id: s, t: "sys", name: "", text: n, amount: 0, net: 0, show: t };
  e.sys = [...e.sys, r].slice(-100), e.seq = s, oi([r]);
}
function Nm() {
  return "c" + Math.random().toString(36).slice(2, 8) + Date.now().toString(36);
}
function Pm(e) {
  const t = f.session, n = f.progress;
  if (!!t && e > t.entryIndex && (!n?.ended || n.endIndex !== void 0 && e <= n.endIndex)) return t.live && f.pack ? { show: t.id, scope: "instance", pack: f.pack } : null;
  const r = Rt();
  return r.corridor.on && r.corridor.show ? { show: r.corridor.show, scope: "corridor", pack: null } : null;
}
function vr(e, t) {
  if (t === "continue" || t === "first_message") return;
  const n = Q(), s = n[e];
  if (!Re(s) || nn(s)) return;
  const r = Pm(e);
  if (!r) return;
  const i = Rt(), { show: o, scope: l, pack: a } = r, c = f.progress, u = s.extra?.rlzc ?? { phase: "", round: 0, injected: [] }, d = si(n, o, e), h = u.sub && !u.sub.skipped ? { hype: u.sub.hype, hurt: u.sub.hurt } : void 0, g = l === "instance" && c?.endIndex === e && c.endedBy === "tag" ? Vs(s.mes) : null, k = !!g && ["死亡", "阵亡"].includes(String(g.result ?? "").trim()), z = c?.roundsLeft, L = /<阶段切换>[\s\S]*?<\/阶段切换>/.test(String(s.mes ?? "")), V = new Set((a?.events ?? []).filter((D) => D.kind !== "directive").map((D) => D.id)), N = lh({
    show: o,
    scope: l,
    packLevel: a?.level ?? null,
    playerLevel: Gs(n, e + 1),
    isRest: !!a?.rest,
    prevHeat: d.length ? d[d.length - 1].rec.heat : null,
    roundsInShow: d.length,
    text: String(s.mes ?? ""),
    hasEvents: (u.injected ?? []).some((D) => V.has(D)),
    hasPhaseSwitch: L,
    sub: h,
    isEnd: l === "instance" && !!z && z.y > 0 && z.x < z.y * 0.1,
    phaseId: l === "instance" ? c?.perMessage[e]?.phase : void 0,
    pool: ps.pool,
    templates: ps.templates,
    packDanmaku: a?.danmaku,
    names: ps.names,
    whoNames: ga(ma(n, e + 1), String(ge().name1 ?? "")),
    recentTexts: rh(n.slice(0, e)),
    firstId: ii(n, i) + 1,
    settle: g ? { died: k, tipsBefore: ri(n.slice(0, e), o) } : void 0,
    rand: Math.random
  }), $ = bp({
    aiSource: f.settings.live.source === "ai",
    subOn: pn(),
    roundInShow: d.length + 1,
    freq: f.settings.live.freq,
    phaseSwitch: L,
    hurt: N.hurt,
    eventDone: !!u.sub && !u.sub.skipped && (u.sub.events ?? []).some((D) => D.status === "done")
  });
  $ && (N.ai = { ok: !1, pending: !0 });
  const I = Ye(s.send_date ?? s.gen_finished ?? void 0), J = [...(u.ledger ?? []).filter((D) => D.type !== "tip"), ...ah(N, I)];
  s.extra = s.extra ?? {}, s.extra.rlzc = ut({ ...u, live: N, ledger: J.length ? J : void 0 }), i.seq = Math.max(i.seq, ...N.feed.map((D) => D.id)), Jn(i), f.ledger = fn(Q()), f.tick++, oi(N.feed, !0), $ && jm(e, N.scope === "instance" ? a?.name : void 0);
}
function jm(e, t) {
  const n = Q(), s = Xt(e), r = ui();
  if (!r) {
    kr(e, s, [], "副本事件检测没有设置好", 0);
    return;
  }
  const i = [];
  for (let u = e; u >= 0 && i.length < 2; u--) Re(n[u]) && i.unshift(String(n[u].mes ?? ""));
  const o = kp({
    scene: t ?? "回廊",
    texts: i,
    cast: ga(ma(n, e + 1), String(ge().name1 ?? "")),
    samples: vp(ps.pool, 10, Math.random)
  }), l = ge().substituteParams, a = l ? { system: l(o.system), user: l(o.user) } : o, c = Date.now();
  _p((u) => Xr(r, u, { temperature: 0.9 }), a, 1).then((u) => kr(e, s, u, null, Date.now() - c)).catch((u) => {
    Yn("AI 弹幕生成失败", u);
    const d = String(u?.message ?? u).slice(0, 120);
    kr(e, s, [], `${Us(u)}：${d}`, Date.now() - c);
  });
}
function kr(e, t, n, s, r) {
  if (Xt(e) !== t) return;
  const i = Q(), o = i[e], l = nn(o);
  if (!l || !o.extra?.rlzc) return;
  const a = Rt();
  let c = ii(i, a);
  const u = n.map((h) => ({ id: ++c, t: "msg", name: h.name, text: h.text, amount: 0, net: 0 })), d = { ...l, feed: [...l.feed, ...u], ai: s ? { ok: !1, error: s, ms: r } : { ok: !0, count: u.length, ms: r } };
  o.extra.rlzc = ut({ ...o.extra.rlzc, live: d }), a.seq = Math.max(a.seq, c), Jn(a), f.tick++, u.length ? oi(u) : Kn();
}
function Rm() {
  const e = Rt();
  return f.session?.status === "active" && f.pack ? ni({ packLevel: f.pack.level, playerLevel: Gs(Q()), isRest: !!f.pack.rest, heat: 20, rand: 1 }) : e.corridor.viewers ?? 0;
}
function fi(e, t = Q()) {
  const n = f.session, s = n?.status === "active";
  return fh(
    t,
    Rt(),
    {
      inInstance: s,
      instanceLive: !!(s && n?.live),
      instanceShow: n?.id,
      startViewers: Rm(),
      injectToAI: f.settings.live.injectToAI
    },
    e
  );
}
function Om() {
  if (f.session?.status === "active") return !1;
  const e = Rt();
  if (e.corridor.on)
    e.corridor.on = !1, Un(e, e.corridor.show, Zt.corridorOff);
  else {
    const t = Nm();
    e.corridor = {
      on: !0,
      show: t,
      viewers: ni({ packLevel: null, playerLevel: Gs(Q()), isRest: !1, heat: 20, rand: 0.9 + Math.random() * 0.2 })
    }, Un(e, t, Zt.corridorOn);
  }
  return Jn(e), f.tick++, Kn(), !0;
}
function Fm() {
  return { book: null, results: {}, tickets: [], pending: 0, tables: [], casinoOpen: !0 };
}
function Oe() {
  return tm(At()[ya]);
}
function vt(e) {
  At()[ya] = ut(e), dt();
}
let Tn = -1;
function Lm() {
  return [Tn, In?.index ?? -1].filter((e) => e >= 0);
}
function Zn(e = Q()) {
  const t = qe().fix?.level;
  return t && ["D", "C", "B", "A", "S"].includes(t) ? t : Gs(e);
}
function pi(e = Q()) {
  return tn(jt(e).value, f.ledger);
}
function Fa() {
  const e = Me();
  return e?.status === "active" && e.live ? ri(Q(), e.id) : 0;
}
function Zs(e, t, n) {
  if (t.frozen) return { results: {}, tickets: Pr(t, {}), rounds: [] };
  let s = { voided: !0, ended: !1 }, r = [], i = {};
  if (n && n.id === t.session) {
    const l = aa(n, f.packs), a = l ? Ol(e, n, l) : null;
    a && (s = {
      ended: a.ended,
      endedBy: a.endedBy,
      endIndex: a.endIndex,
      result: a.settlement?.result,
      rating: a.settlement?.rating
    }, r = Fh(e, a.perMessage, a.entryIndex, Lm()), i = a.phaseEnds);
  }
  const o = Rh({ markets: t.markets, rounds: r, outcome: s, phaseEnds: i });
  return { results: o, tickets: Pr(t, o), rounds: r };
}
function Dm(e) {
  const t = Oe(), n = Me(), s = (i) => e[i] ? Ye(e[i].send_date ?? e[i].gen_finished ?? void 0) : void 0, r = [];
  for (const i of Object.values(t.books)) r.push(...Vh(i, Zs(e, i, n).tickets, s));
  for (const i of t.casino.plays)
    r.push({ delta: i.net, source: rm(i.table, i.label), type: "bet", at: i.at, pos: i.after, seq: i.seq ?? 0 });
  return r;
}
function Bm(e) {
  const t = Oe(), n = t.books[e.id];
  if (!n || n.frozen) return;
  const s = Q(), r = Oh(n, Zs(s, n, e).results);
  for (const i of n.tickets) r[i.id].index < 0 && (r[i.id].index = Math.max(s.length, i.after + 1));
  n.frozen = r, vt(t);
}
function La(e) {
  const t = Oe(), n = t.books[e];
  if (!n || n.frozen) return;
  const s = Q().length;
  n.frozen = Object.fromEntries(n.tickets.map((r) => [r.id, { stamp: "refund", index: Math.max(s, r.after + 1) }])), vt(t);
}
function Vm(e, t, n) {
  if (t.rest) return;
  const s = Q(), r = pn(), i = Eh({ pack: t, playerLevel: Zn(s), withEvents: r, rand: Math.random });
  if (!i.length) return;
  const o = Oe(), l = { session: e.id, packId: t.id, packName: t.name, openedAt: Ye(void 0), markets: i, tickets: [] };
  r && (l.freak = { status: "pending" }), o.books[e.id] = l, vt(o), r && Um(e.id, t, n);
}
function Um(e, t, n) {
  const s = (c, u) => {
    const d = Oe(), h = d.books[e];
    h && (u && (h.closedAt || h.frozen) ? h.freak = { ...c, status: "late" } : (u && (h.markets = [...h.markets.filter((g) => g.kind !== "freak"), ...qh(u, Math.random)]), h.freak = c), vt(d), Ce());
  }, r = ui();
  if (!r) {
    s({ status: "failed", error: "副本事件检测没有设置好" });
    return;
  }
  const i = Gh({
    name: t.name,
    level: t.level,
    briefing: Hh(String(Q()[n]?.mes ?? "")),
    docs: t.docs
  }), o = ge().substituteParams, l = o ? { system: o(i.system), user: o(i.user) } : i, a = Date.now();
  Yh((c) => Xr(r, c), l, 1).then((c) => s({ status: "ok", count: c.length, ms: Date.now() - a }, c)).catch((c) => {
    Yn("庄家怪盘出题失败", c);
    const u = String(c?.message ?? c).slice(0, 120);
    s({ status: "failed", error: `${Us(c)}：${u}`, ms: Date.now() - a });
  });
}
const ls = /* @__PURE__ */ new Map();
let fo = null;
function Wm(e) {
  const t = dn(), n = fo !== t;
  n && ls.clear(), fo = t;
  const s = { win: 0, lose: 0, refund: 0 };
  for (const i of e) {
    const o = i.res?.stamp ?? null, l = ls.has(i.ticket.id), a = ls.get(i.ticket.id);
    ls.set(i.ticket.id, o), !n && l && o && o !== a && s[o]++;
  }
  const r = [s.win ? `兑 ${s.win} 张` : "", s.lose ? `废 ${s.lose} 张` : "", s.refund ? `退 ${s.refund} 张` : ""].filter(Boolean);
  r.length && Se("info", `赌票开奖：${r.join("，")}。`);
}
function Hm(e, t) {
  const n = Oe();
  let s = !1;
  const r = t?.status === "active", i = t ? n.books[t.id] : void 0;
  i && !i.closedAt && !i.frozen && f.progress && Ih(f.progress.perMessage, f.progress.entryIndex) && (i.closedAt = Ye(void 0), s = !0);
  const o = r ? n.casino.key : t?.status === "ended" ? t.id : "", l = om(n.casino, o, Math.random);
  l.changed && (!r || n.casino.tables.length !== 2) && (n.casino.tables = l.tables, n.casino.key = l.key, s = !0), s && vt(n);
  const a = [];
  let c = {};
  for (const u of Object.values(n.books)) {
    const d = Zs(e, u, t);
    i && u.session === i.session && (c = d.results);
    for (const h of u.tickets) a.push({ ticket: h, book: u, market: u.markets.find((g) => g.id === h.market), res: d.tickets[h.id] ?? null });
  }
  a.sort((u, d) => (d.ticket.seq ?? 0) - (u.ticket.seq ?? 0)), Wm(a), f.market = {
    book: r && i ? i : null,
    results: c,
    tickets: a,
    pending: a.filter((u) => !u.res).length,
    tables: n.casino.tables,
    casinoOpen: !r || !!f.pack?.casino
  };
}
function Da(e, t) {
  const n = Q(), s = f.market.book;
  return _a({
    playerLevel: Zn(n),
    stake: t,
    already: s ? Mh(s, e) : 0,
    balance: pi(n),
    lockedTips: Fa()
  });
}
function Gm(e, t, n) {
  const s = Me();
  if (!s || s.status !== "active") return "没有进行中的副本";
  const r = Oe(), i = r.books[s.id];
  if (!i || i.frozen) return "本局没有开盘";
  if (i.closedAt) return "已封盘";
  const o = i.markets.find((d) => d.id === e), l = o?.options.find((d) => d.id === t);
  if (!o || !l) return "没有这个盘口";
  if (f.market.results[e]) return "已开奖";
  const a = Da(e, n);
  if (!a.ok) return a.reason ?? "不能下注";
  const c = Q(), u = r.seq + 1;
  return r.seq = u, i.tickets.push({ id: `t${u}`, seq: u, market: e, option: t, stake: n, odds: l.odds, at: Ye(void 0), after: c.length - 1 }), o.kind === "ending" && t === "lose" && (r.hints = jr(r.hints, { kind: "betLose", amount: n, after: c.length - 1 })), vt(r), Ce(), null;
}
function Ba(e) {
  const t = Q();
  return _a({ playerLevel: Zn(t), stake: e, already: 0, balance: pi(t), lockedTips: Fa() });
}
function Km(e, t, n) {
  if (!f.market.casinoOpen) return { error: "赌坊只在回廊营业。" };
  const s = Oe();
  if (!s.casino.tables.includes(e)) return { error: "这张桌今晚没开" };
  const r = Ba(n);
  if (!r.ok) return { error: r.reason };
  const i = sm(e, t, n, Math.random);
  if (!i) return { error: "没有这种押法" };
  const o = Q(), l = Zn(o), a = pi(o), c = o.length - 1, u = s.seq + 1;
  return s.seq = u, s.casino.plays = [
    ...s.casino.plays,
    { id: `g${u}`, seq: u, table: e, bet: t, label: i.label, stake: n, win: i.win, payout: i.payout, net: i.net, result: i.result, at: Ye(void 0), after: c }
  ], !i.win && a - n < bt[l] && (s.hints = jr(s.hints, { kind: "casinoLoss", amount: n, after: c })), i.win && i.net > ba[l] * 5 && (s.hints = jr(s.hints, { kind: "casinoWin", amount: i.net, after: c })), vt(s), Ce(), { outcome: i };
}
function po() {
  const e = Oe();
  if (!e.hints.length) return;
  const t = em(e.hints);
  t.length !== e.hints.length && (e.hints = t, vt(e));
}
function Ym() {
  const e = Me(), t = e ? Oe().books[e.id] : void 0;
  return t ? Zs(Q(), t, e).rounds : [];
}
const qm = { class: "rlzc-ball-mark" }, Jm = {
  key: 0,
  class: "rlzc-ball-badge",
  title: "待开奖赌票"
}, wr = 44, Zm = /* @__PURE__ */ Be({
  __name: "FloatBall",
  setup(e) {
    const t = /* @__PURE__ */ de({ x: 0, y: 0 });
    let n = null;
    function s(u, d) {
      const h = window.innerWidth - wr - 4, g = window.innerHeight - wr - 4;
      return { x: Math.min(Math.max(4, u), h), y: Math.min(Math.max(4, d), g) };
    }
    function r() {
      const u = f.settings.ball;
      t.value = s(u.x ?? window.innerWidth - wr - 12, u.y ?? Math.round(window.innerHeight * 0.35));
    }
    function i(u) {
      u.currentTarget.setPointerCapture(u.pointerId), n = { id: u.pointerId, dx: u.clientX - t.value.x, dy: u.clientY - t.value.y, moved: !1, sx: u.clientX, sy: u.clientY };
    }
    function o(u) {
      !n || n.id !== u.pointerId || (Math.abs(u.clientX - n.sx) + Math.abs(u.clientY - n.sy) > 6 && (n.moved = !0), n.moved && (t.value = s(u.clientX - n.dx, u.clientY - n.dy)));
    }
    function l(u) {
      if (!n || n.id !== u.pointerId) return;
      const d = n.moved;
      n = null, d ? (f.settings.ball = { x: Math.round(t.value.x), y: Math.round(t.value.y) }, be()) : f.panelOpen = !f.panelOpen;
    }
    const a = G(() => !!f.session && !f.progress?.ended), c = G(() => !!f.progress?.warn);
    return Os(() => f.settings.ball, r, { deep: !0 }), Wc(() => {
      r(), window.addEventListener("resize", r);
    }), tl(() => window.removeEventListener("resize", r)), (u, d) => (v(), w("button", {
      class: te(["rlzc-ball", { "is-active": a.value, "is-warn": c.value }]),
      style: Ns({ left: t.value.x + "px", top: t.value.y + "px" }),
      title: "回廊种菜系统（可拖动）",
      onPointerdown: i,
      onPointermove: o,
      onPointerup: l,
      onPointercancel: l
    }, [
      A("span", qm, S(a.value ? R(f).pack?.level ?? "副" : "廊"), 1),
      R(f).market.pending > 0 ? (v(), w("span", Jm, S(R(f).market.pending), 1)) : H("", !0)
    ], 38));
  }
});
function Qm(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function bn(e) {
  return Qm(e).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function Xm(e) {
  const t = [];
  let n = null, s = [];
  const r = () => {
    s.length && t.push(`<p>${s.map(bn).join("<br>")}</p>`), s = [];
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
      t.push(`<h${h}>${bn(a[2])}</h${h}>`);
      continue;
    }
    const c = /^\s*[-*]\s+(.*)$/.exec(l), u = /^\s*(\d+)[.、]\s+(.*)$/.exec(l);
    if (c || u) {
      r();
      const h = c ? "ul" : "ol", g = c ? c[1] : u[2];
      n !== h ? (i(), n = h, t.push(h === "ol" ? `<ol start="${u[1]}"><li>` : "<ul><li>")) : t.push("</li><li>"), t.push(bn(g));
      continue;
    }
    if (n && /^\s{2,}/.test(o)) {
      t.push(`<br>${bn(l.trim())}`);
      continue;
    }
    const d = /^>\s?(.*)$/.exec(l);
    if (d) {
      r(), i(), t.push(`<blockquote>${bn(d[1])}</blockquote>`);
      continue;
    }
    i(), s.push(l);
  }
  return r(), i(), t.join("");
}
const eg = {
  key: 0,
  class: "rlzc-docs"
}, tg = { class: "rlzc-subtabs" }, ng = ["onClick"], sg = { class: "rlzc-md" }, rg = ["innerHTML"], ig = ["src", "alt"], og = {
  key: 2,
  class: "rlzc-note"
}, ho = /* @__PURE__ */ Be({
  __name: "PackDocs",
  props: {
    pack: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ de(0);
    Os(
      () => t.pack.id,
      () => n.value = 0
    );
    const s = G(() => t.pack.docs?.[n.value]), r = G(() => s.value?.md ? Xm(s.value.md) : ""), i = G(() => s.value?.image ? Pf(t.pack, s.value.image) : null);
    return (o, l) => e.pack.docs?.length ? (v(), w("section", eg, [
      A("div", tg, [
        (v(!0), w(Z, null, fe(e.pack.docs, (a, c) => (v(), w("button", {
          key: c,
          class: te({ on: n.value === c }),
          onClick: (u) => n.value = c
        }, S(a.title), 11, ng))), 128))
      ]),
      A("article", sg, [
        r.value ? (v(), w("div", {
          key: 0,
          innerHTML: r.value
        }, null, 8, rg)) : H("", !0),
        i.value ? (v(), w("img", {
          key: 1,
          src: i.value,
          alt: s.value?.title,
          class: "rlzc-img"
        }, null, 8, ig)) : s.value?.image && !i.value ? (v(), w("p", og, "图片无法加载：" + S(s.value.image), 1)) : H("", !0)
      ])
    ])) : H("", !0);
  }
}), lg = {
  key: 0,
  class: "rlzc-ledger-summary"
}, ag = {
  key: 0,
  class: "rlzc-ledger-sum-pending"
}, mo = /* @__PURE__ */ Be({
  __name: "LedgerSummary",
  setup(e) {
    const t = G(() => Q()), n = G(() => jt(t.value)), s = G(() => tn(n.value.value, f.ledger)), r = G(() => f.pack?.level ?? "D"), i = G(() => bt[r.value]), o = G(() => Gn(n.value.value, f.ledger, i.value)), l = G(() => f.ledger.length > 0 || n.value.source !== "默认值");
    return (a, c) => l.value ? (v(), w("div", lg, [
      A("span", {
        class: te(["rlzc-ledger-sum-bal", { negative: s.value < 0 }])
      }, "积分 " + S(s.value >= 0 ? "+" : "") + S(s.value), 3),
      o.value ? (v(), w("span", ag, "待清算")) : H("", !0)
    ])) : H("", !0);
  }
}), cg = { class: "rlzc-system" }, ug = { class: "rlzc-card rlzc-hero" }, Ag = { class: "rlzc-hero-top" }, dg = { class: "rlzc-level" }, fg = {
  key: 0,
  class: "rlzc-chip"
}, pg = {
  key: 0,
  class: "rlzc-goal"
}, hg = { class: "rlzc-grid" }, mg = {
  key: 0,
  class: "rlzc-stat"
}, gg = {
  key: 1,
  class: "rlzc-stat"
}, xg = {
  key: 2,
  class: "rlzc-stat"
}, yg = {
  key: 3,
  class: "rlzc-stat"
}, bg = {
  key: 0,
  class: "rlzc-subline"
}, vg = {
  key: 1,
  class: "rlzc-note"
}, kg = {
  key: 2,
  class: "rlzc-card"
}, wg = { class: "rlzc-kv" }, _g = { class: "rlzc-kv" }, zg = {
  key: 0,
  class: "rlzc-note rlzc-note-warn"
}, $g = {
  key: 3,
  class: "rlzc-note"
}, Sg = {
  key: 4,
  class: "rlzc-card"
}, Eg = {
  key: 0,
  class: "rlzc-kv"
}, Cg = { class: "rlzc-mono" }, Mg = {
  key: 1,
  class: "rlzc-tasks"
}, Ig = {
  key: 2,
  class: "rlzc-ps"
}, Tg = { class: "rlzc-actions" }, Ng = ["disabled"], Pg = ["disabled"], jg = {
  key: 1,
  class: "rlzc-card rlzc-rest"
}, Rg = {
  key: 2,
  class: "rlzc-card"
}, Og = { class: "rlzc-row" }, Fg = ["value"], Lg = ["disabled"], Dg = /* @__PURE__ */ Be({
  __name: "SystemTab",
  setup(e) {
    const t = /* @__PURE__ */ de(""), n = G(() => !!f.session && !!f.pack), s = G(() => f.progress), r = G(() => n.value && !!s.value && !s.value.ended), i = G(() => f.packs.find((h) => h.id === t.value) ?? null), o = G(() => !!f.pack?.phases.length), l = G(() => f.settings.panelDisplay !== "statusbar"), a = G(() => {
      const h = s.value;
      return h ? o.value ? `${h.warn ? "⚠️ " : ""}${h.round}/${h.phase.cap}` : `第${h.round}轮` : "";
    }), c = G(() => {
      const h = s.value;
      return h ? h.limit?.text ? h.limit.text : h.panel?.limit || f.session?.briefing?.limit || "—" : "";
    }), u = G(() => {
      const h = s.value;
      return !!h && !h.ended && o.value && h.phase.cap > 0 && h.nextRound < h.phase.cap;
    });
    async function d() {
      t.value && (await vm(t.value), t.value = "");
    }
    return (h, g) => (v(), w("div", cg, [
      n.value && s.value ? (v(), w(Z, { key: 0 }, [
        A("div", ug, [
          A("div", Ag, [
            A("span", dg, S(R(f).pack?.rest ? "—" : R(f).pack.level), 1),
            A("h3", null, S(R(f).pack.name), 1),
            s.value.ended ? (v(), w("span", fg, "已结束")) : H("", !0)
          ]),
          R(f).session?.briefing?.goal ? (v(), w("p", pg, "目标：" + S(R(f).session.briefing.goal), 1)) : H("", !0)
        ]),
        A("div", hg, [
          o.value ? (v(), w("div", mg, [
            g[3] || (g[3] = A("span", null, "阶段", -1)),
            A("b", null, S(s.value.phase.name), 1)
          ])) : H("", !0),
          A("div", {
            class: te(["rlzc-stat", { warn: s.value.warn }])
          }, [
            g[4] || (g[4] = A("span", null, "轮次", -1)),
            A("b", null, S(a.value), 1)
          ], 2),
          s.value.currentClock ? (v(), w("div", gg, [
            g[5] || (g[5] = A("span", null, "钟时", -1)),
            A("b", null, S(s.value.currentClock), 1)
          ])) : H("", !0),
          s.value.roundsLeft ? (v(), w("div", xg, [
            g[6] || (g[6] = A("span", null, "最多剩余轮次", -1)),
            A("b", null, S(s.value.roundsLeft.x) + "/" + S(s.value.roundsLeft.y), 1)
          ])) : H("", !0),
          l.value ? (v(), w("div", yg, [
            g[7] || (g[7] = A("span", null, "剩余时间", -1)),
            A("b", null, S(c.value), 1)
          ])) : H("", !0),
          je(mo)
        ]),
        R(f).subLine ? (v(), w("p", bg, S(R(f).subLine), 1)) : H("", !0),
        s.value.skipGoal ? (v(), w("div", vg, "快进中：目标 " + S(R(f).pack.phases.find((k) => k.id === s.value.skipGoal.phase)?.name) + " 第" + S(s.value.skipGoal.round) + "轮", 1)) : H("", !0),
        s.value.ended && s.value.settlement ? (v(), w("div", kg, [
          A("div", wg, [
            g[8] || (g[8] = A("span", null, "结果", -1)),
            A("b", null, S(s.value.settlement.result ?? "—"), 1)
          ]),
          A("div", _g, [
            g[9] || (g[9] = A("span", null, "评价", -1)),
            A("b", null, S(s.value.settlement.rating ?? "—"), 1)
          ]),
          R(f).session?.clearance && s.value.settlement.result === "失败" ? (v(), w("div", zg, " 清算未通关 ")) : H("", !0)
        ])) : s.value.ended ? (v(), w("div", $g, "副本已手动结束。")) : H("", !0),
        l.value && s.value.panel ? (v(), w("div", Sg, [
          s.value.panel.progressBar ? (v(), w("div", Eg, [
            g[10] || (g[10] = A("span", null, "进度", -1)),
            A("b", Cg, S(s.value.panel.progressBar), 1)
          ])) : H("", !0),
          s.value.panel.tasks.length ? (v(), w("div", Mg, [
            g[11] || (g[11] = A("span", null, "任务", -1)),
            A("ul", null, [
              (v(!0), w(Z, null, fe(s.value.panel.tasks, (k, z) => (v(), w("li", { key: z }, S(k), 1))), 128))
            ])
          ])) : H("", !0),
          s.value.panel.ps ? (v(), w("div", Ig, "ps：" + S(s.value.panel.ps), 1)) : H("", !0)
        ])) : H("", !0),
        A("div", Tg, [
          A("button", {
            class: "rlzc-btn",
            disabled: !u.value,
            onClick: g[0] || (g[0] = //@ts-ignore
            (...k) => R(io) && R(io)(...k))
          }, "跳过（到本阶段结束）", 8, Ng),
          A("button", {
            class: "rlzc-btn ghost",
            disabled: s.value.ended,
            onClick: g[1] || (g[1] = //@ts-ignore
            (...k) => R(oo) && R(oo)(...k))
          }, "手动结束副本", 8, Pg)
        ]),
        r.value && R(f).pack.docs?.length ? (v(), it(ho, {
          key: 5,
          pack: R(f).pack
        }, null, 8, ["pack"])) : H("", !0)
      ], 64)) : (v(), w("div", jg, [
        g[12] || (g[12] = A("h3", null, "当前在回廊里，没有进行中的副本。", -1)),
        je(mo)
      ])),
      r.value ? H("", !0) : (v(), w("div", Rg, [
        g[14] || (g[14] = A("label", { class: "rlzc-label" }, "手动选择副本", -1)),
        A("div", Og, [
          ot(A("select", {
            "onUpdate:modelValue": g[2] || (g[2] = (k) => t.value = k),
            class: "rlzc-input"
          }, [
            g[13] || (g[13] = A("option", { value: "" }, "选择副本…", -1)),
            (v(!0), w(Z, null, fe(R(f).packs, (k) => (v(), w("option", {
              key: k.id,
              value: k.id
            }, S(k.level) + "｜" + S(k.name), 9, Fg))), 128))
          ], 512), [
            [kl, t.value]
          ]),
          A("button", {
            class: "rlzc-btn",
            disabled: !t.value,
            onClick: d
          }, "进入", 8, Lg)
        ])
      ])),
      !r.value && i.value?.docs?.length ? (v(), it(ho, {
        key: 3,
        pack: i.value
      }, null, 8, ["pack"])) : H("", !0)
    ]));
  }
}), Bg = { class: "rlzc-ledger" }, Vg = { class: "rlzc-card rlzc-ledger-hero-card" }, Ug = { class: "rlzc-ledger-hero-cols" }, Wg = { class: "rlzc-ledger-hero-col" }, Hg = { class: "rlzc-ledger-hero-col-val" }, Gg = { class: "rlzc-ledger-hero-col" }, Kg = { class: "rlzc-ledger-hero-col-val" }, Yg = { class: "rlzc-ledger-hero-col" }, qg = {
  key: 0,
  class: "rlzc-ledger-init-hint"
}, Jg = { class: "rlzc-card" }, Zg = {
  key: 0,
  class: "rlzc-ledger-list"
}, Qg = { class: "rlzc-ledger-item-left" }, Xg = { class: "rlzc-ledger-item-src" }, ex = { class: "rlzc-ledger-item-time" }, tx = {
  key: 1,
  class: "rlzc-hint"
}, nx = /* @__PURE__ */ Be({
  __name: "LedgerTab",
  setup(e) {
    const t = G(() => Q()), n = G(() => jt(t.value)), s = G(() => f.ledger), r = G(() => tn(n.value.value, s.value)), i = G(() => f.pack?.level ?? "D"), o = G(() => bt[i.value]), l = G(() => Gn(n.value.value, s.value, o.value)), a = G(() => Math.max(0, o.value - r.value)), c = G(() => n.value.source === "默认值");
    function u(g) {
      return new Intl.NumberFormat("zh-CN").format(g);
    }
    function d(g) {
      return (g >= 0 ? "+" : "") + new Intl.NumberFormat("zh-CN").format(g);
    }
    function h(g) {
      try {
        const k = new Date(g), z = String(k.getMonth() + 1).padStart(2, "0"), L = String(k.getDate()).padStart(2, "0"), V = String(k.getHours()).padStart(2, "0"), N = String(k.getMinutes()).padStart(2, "0");
        return `${z}-${L} ${V}:${N}`;
      } catch {
        return g;
      }
    }
    return (g, k) => (v(), w("div", Bg, [
      A("div", Vg, [
        k[3] || (k[3] = A("span", { class: "rlzc-ledger-hero-label" }, "当前积分", -1)),
        A("b", {
          class: te(["rlzc-ledger-hero-num", { negative: r.value < 0 }])
        }, S(u(r.value)), 3),
        k[4] || (k[4] = A("div", { class: "rlzc-ledger-hero-divider" }, null, -1)),
        A("div", Ug, [
          A("div", Wg, [
            k[0] || (k[0] = A("span", { class: "rlzc-ledger-hero-col-label" }, "等级", -1)),
            A("span", Hg, S(i.value), 1)
          ]),
          A("div", Gg, [
            k[1] || (k[1] = A("span", { class: "rlzc-ledger-hero-col-label" }, "斩杀线", -1)),
            A("span", Kg, S(u(o.value)), 1)
          ]),
          A("div", Yg, [
            k[2] || (k[2] = A("span", { class: "rlzc-ledger-hero-col-label" }, "待清算", -1)),
            A("span", {
              class: te(["rlzc-ledger-hero-col-val", { "rlzc-ledger-warn": l.value }])
            }, S(l.value ? `距线 ${u(a.value)}` : "无"), 3)
          ])
        ]),
        c.value ? (v(), w("p", qg, "初始积分按 1000 计，可在设置页修改")) : H("", !0)
      ]),
      A("div", Jg, [
        k[5] || (k[5] = A("h4", null, "流水", -1)),
        s.value.length ? (v(), w("ul", Zg, [
          (v(!0), w(Z, null, fe([...s.value].reverse(), (z, L) => (v(), w("li", {
            key: `${L}-${z.mesIndex}-${z.delta}-${z.at}`,
            class: "rlzc-ledger-item"
          }, [
            A("div", Qg, [
              A("span", Xg, S(z.source), 1),
              A("span", ex, S(h(z.at)), 1)
            ]),
            A("span", {
              class: te(["rlzc-ledger-item-delta", z.delta >= 0 ? "pos" : "neg"])
            }, S(d(z.delta)), 3)
          ]))), 128))
        ])) : (v(), w("p", tx, "还没有收支记录。"))
      ])
    ]));
  }
}), sx = { class: "rlzc-market" }, rx = { class: "rlzc-subtabs rlzc-market-tabs" }, ix = { class: "rlzc-card rlzc-mk-status" }, ox = { class: "rlzc-mk-q" }, lx = { class: "rlzc-mk-tag" }, ax = { class: "rlzc-mk-opts" }, cx = ["disabled", "onClick"], ux = { class: "rlzc-row rlzc-mk-bet" }, Ax = ["onUpdate:modelValue"], dx = ["disabled", "onClick"], fx = { class: "rlzc-hint" }, px = {
  key: 0,
  class: "rlzc-mk-red"
}, hx = {
  key: 1,
  class: "rlzc-mk-mine"
}, mx = {
  key: 1,
  class: "rlzc-card"
}, gx = {
  key: 0,
  class: "rlzc-tk-list"
}, xx = { class: "rlzc-tk-left" }, yx = { class: "rlzc-tk-title" }, bx = {
  key: 1,
  class: "rlzc-hint"
}, vx = {
  key: 0,
  class: "rlzc-card rlzc-mk-status"
}, kx = { class: "rlzc-cs-tables" }, wx = ["onClick"], _x = {
  key: 0,
  class: "rlzc-card rlzc-cs-play"
}, zx = {
  key: 0,
  class: "rlzc-segsrc rlzc-cs-seg"
}, $x = ["onClick"], Sx = ["onClick"], Ex = { class: "rlzc-row rlzc-mk-bet" }, Cx = ["disabled"], Mx = { class: "rlzc-hint" }, Ix = {
  key: 2,
  class: "rlzc-mk-red"
}, Tx = /* @__PURE__ */ Be({
  __name: "MarketTab",
  setup(e) {
    const t = /* @__PURE__ */ de("book"), n = (P) => new Intl.NumberFormat("en-US").format(P), s = (P) => `×${P.toFixed(2)}`, r = G(() => f.market.pending), i = G(() => (f.tick, Zn())), o = G(() => f.market.book), l = G(() => !!o.value?.closedAt), a = G(() => {
      const P = o.value;
      return P ? P.closedAt ? `《${P.packName}》已封盘` : `《${P.packName}》开盘中 · 第1轮结束封盘` : f.session?.status === "active" && f.pack?.rest ? "休整副本不开盘。" : "进副本后开盘。";
    }), c = { ending: "结局", rating: "评价", event: "事件", freak: "庄家" }, u = /* @__PURE__ */ de({}), d = /* @__PURE__ */ de({});
    function h(P, K) {
      l.value || f.market.results[P.id] || (u.value = { ...u.value, [P.id]: u.value[P.id] === K ? "" : K });
    }
    function g(P) {
      f.tick;
      const K = d.value[P.id];
      return Da(P.id, typeof K == "number" ? K : 0);
    }
    function k(P) {
      const K = u.value[P.id], U = d.value[P.id];
      if (!K || typeof U != "number") return;
      const pe = Gm(P.id, K, U);
      if (pe) {
        Se("warning", pe);
        return;
      }
      d.value = { ...d.value, [P.id]: null }, u.value = { ...u.value, [P.id]: "" };
    }
    function z(P) {
      const K = o.value;
      return K ? f.market.tickets.filter((U) => U.book.session === K.session && U.ticket.market === P.id) : [];
    }
    function L(P) {
      return P.market?.options.find((K) => K.id === P.ticket.option)?.label ?? P.ticket.option;
    }
    function V(P) {
      return `${P.book.packName} · ${P.market?.q ?? P.ticket.market} · ${L(P)}`;
    }
    function N(P) {
      const K = P.ticket, U = P.res?.stamp;
      return U ? U === "win" ? `押 ${n(K.stake)} · ${s(K.odds)} · 兑 ${n(ka(K.stake, K.odds))}` : U === "lose" ? `押 ${n(K.stake)} · ${s(K.odds)}` : `押 ${n(K.stake)} · 原数退还` : `押 ${n(K.stake)} · ${s(K.odds)} · 待开奖`;
    }
    const $ = { win: "兑", lose: "废", refund: "退" }, I = G(() => f.market.tables.map((P) => un(P)).filter((P) => !!P)), ee = /* @__PURE__ */ de(""), J = G(() => ee.value ? un(ee.value) : void 0), D = /* @__PURE__ */ de(""), b = /* @__PURE__ */ de(null), m = /* @__PURE__ */ de(!1), y = /* @__PURE__ */ de(""), W = /* @__PURE__ */ de(null);
    let ue = null;
    function se(P) {
      if (ee.value === P) {
        ee.value = "";
        return;
      }
      ee.value = P;
      const K = un(P);
      D.value = K && K.bets.length === 1 ? K.bets[0].id : "", W.value = null;
    }
    const Ve = G(() => (J.value?.bets ?? []).filter((P) => !/^[nd]\d+$/.test(P.id))), ve = G(() => (J.value?.bets ?? []).filter((P) => /^[nd]\d+$/.test(P.id))), Ue = G(() => (f.tick, Ba(typeof b.value == "number" ? b.value : 0)));
    function Je() {
      try {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      } catch {
        return !1;
      }
    }
    function We(P, K) {
      return P === "bell" ? `${K[0]}下` : P === "door" ? `${K[0]}号门` : P === "lot" ? `第${K[0]}支` : `${K[0]} : ${K[1]}`;
    }
    function sn() {
      const P = J.value, K = b.value;
      if (!P || !D.value || typeof K != "number" || m.value) return;
      const U = Km(P.id, D.value, K);
      if (U.error || !U.outcome) {
        Se("warning", U.error ?? "不能下注");
        return;
      }
      const pe = { ...U.outcome, stake: K };
      if (W.value = null, Je()) {
        y.value = We(P.id, pe.faces), W.value = pe;
        return;
      }
      m.value = !0;
      const Qn = P.id === "bell" ? 12 : P.id === "door" ? 20 : P.id === "lot" ? 3 : 13, kt = () => 1 + Math.floor(Math.random() * Qn);
      ue = setInterval(() => y.value = We(P.id, [kt(), kt()]), 80), setTimeout(() => {
        ue && clearInterval(ue), ue = null, y.value = We(P.id, pe.faces), m.value = !1, W.value = pe;
      }, 1200);
    }
    const Ot = G(() => {
      const P = W.value;
      return P ? `结果：${P.result}。${P.win ? `赢 ${n(P.payout)}` : `输 ${n(P.stake)}`}` : "";
    });
    return tl(() => {
      ue && clearInterval(ue);
    }), (P, K) => (v(), w("div", sx, [
      A("nav", rx, [
        A("button", {
          class: te({ on: t.value === "book" }),
          onClick: K[0] || (K[0] = (U) => t.value = "book")
        }, "盘口", 2),
        A("button", {
          class: te({ on: t.value === "tickets" }),
          onClick: K[1] || (K[1] = (U) => t.value = "tickets")
        }, S(r.value ? `票夹 · ${r.value}` : "票夹"), 3),
        A("button", {
          class: te({ on: t.value === "casino" }),
          onClick: K[2] || (K[2] = (U) => t.value = "casino")
        }, "赌坊", 2)
      ]),
      t.value === "book" ? (v(), w(Z, { key: 0 }, [
        A("div", ix, S(a.value), 1),
        (v(!0), w(Z, null, fe(o.value?.markets ?? [], (U) => (v(), w("div", {
          key: U.id,
          class: "rlzc-card rlzc-mk-card"
        }, [
          A("div", ox, [
            A("span", lx, S(c[U.kind]), 1),
            Te(S(U.q), 1)
          ]),
          A("div", ax, [
            (v(!0), w(Z, null, fe(U.options, (pe) => (v(), w("button", {
              key: pe.id,
              class: te(["rlzc-mk-opt", { on: u.value[U.id] === pe.id }]),
              disabled: l.value || !!R(f).market.results[U.id],
              onClick: (Qn) => h(U, pe.id)
            }, [
              A("span", null, S(pe.label), 1),
              A("b", null, S(s(pe.odds)), 1)
            ], 10, cx))), 128))
          ]),
          u.value[U.id] && !l.value ? (v(), w(Z, { key: 0 }, [
            A("div", ux, [
              ot(A("input", {
                "onUpdate:modelValue": (pe) => d.value[U.id] = pe,
                type: "number",
                min: "10",
                step: "1",
                inputmode: "numeric",
                class: "rlzc-input",
                placeholder: "押多少"
              }, null, 8, Ax), [
                [
                  zt,
                  d.value[U.id],
                  void 0,
                  { number: !0 }
                ]
              ]),
              A("button", {
                class: "rlzc-btn",
                disabled: typeof d.value[U.id] != "number",
                onClick: (pe) => k(U)
              }, "下注", 8, dx)
            ]),
            A("p", fx, "单注上限 " + S(n(g(U).cap)) + "（" + S(i.value) + "级）", 1),
            g(U).belowKill ? (v(), w("p", px, "押完余额低于斩杀线")) : H("", !0)
          ], 64)) : H("", !0),
          z(U).length ? (v(), w("ul", hx, [
            (v(!0), w(Z, null, fe(z(U), (pe) => (v(), w("li", {
              key: pe.ticket.id
            }, S(L(pe)) + " · " + S(N(pe)), 1))), 128))
          ])) : H("", !0)
        ]))), 128))
      ], 64)) : t.value === "tickets" ? (v(), w("div", mx, [
        R(f).market.tickets.length ? (v(), w("ul", gx, [
          (v(!0), w(Z, null, fe(R(f).market.tickets, (U) => (v(), w("li", {
            key: U.ticket.id,
            class: "rlzc-tk"
          }, [
            A("div", xx, [
              A("span", yx, S(V(U)), 1),
              A("small", null, S(N(U)), 1)
            ]),
            A("span", {
              class: te(["rlzc-stamp", U.res ? U.res.stamp : "pending"])
            }, S(U.res ? $[U.res.stamp] : "待"), 3)
          ]))), 128))
        ])) : (v(), w("p", bx, "还没有赌票。"))
      ])) : (v(), w(Z, { key: 2 }, [
        R(f).market.casinoOpen ? (v(), w(Z, { key: 1 }, [
          K[4] || (K[4] = A("p", { class: "rlzc-hint" }, "今晚开两张桌，回到回廊换一批。", -1)),
          A("div", kx, [
            (v(!0), w(Z, null, fe(I.value, (U) => (v(), w("button", {
              key: U.id,
              class: te(["rlzc-card rlzc-cs-table", { on: ee.value === U.id }]),
              onClick: (pe) => se(U.id)
            }, [
              A("b", null, S(U.name), 1),
              A("small", null, S(U.desc), 1)
            ], 10, wx))), 128))
          ]),
          J.value ? (v(), w("div", _x, [
            A("h4", null, S(J.value.name), 1),
            Ve.value.length ? (v(), w("div", zx, [
              (v(!0), w(Z, null, fe(Ve.value, (U) => (v(), w("button", {
                key: U.id,
                class: te({ on: D.value === U.id }),
                onClick: (pe) => D.value = U.id
              }, S(U.label), 11, $x))), 128))
            ])) : H("", !0),
            ve.value.length ? (v(), w("div", {
              key: 1,
              class: te(["rlzc-cs-grid", J.value.id])
            }, [
              (v(!0), w(Z, null, fe(ve.value, (U) => (v(), w("button", {
                key: U.id,
                class: te({ on: D.value === U.id }),
                onClick: (pe) => D.value = U.id
              }, S(U.label), 11, Sx))), 128))
            ], 2)) : H("", !0),
            A("div", Ex, [
              ot(A("input", {
                "onUpdate:modelValue": K[3] || (K[3] = (U) => b.value = U),
                type: "number",
                min: "10",
                step: "1",
                inputmode: "numeric",
                class: "rlzc-input",
                placeholder: "押多少"
              }, null, 512), [
                [
                  zt,
                  b.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              A("button", {
                class: "rlzc-btn",
                disabled: !D.value || typeof b.value != "number" || m.value,
                onClick: sn
              }, "开", 8, Cx)
            ]),
            A("p", Mx, "单注上限 " + S(n(Ue.value.cap)) + "（" + S(i.value) + "级）", 1),
            Ue.value.belowKill ? (v(), w("p", Ix, "押完余额低于斩杀线")) : H("", !0),
            m.value || W.value ? (v(), w("div", {
              key: 3,
              class: te(["rlzc-cs-face", { rolling: m.value }])
            }, S(y.value || ""), 3)) : H("", !0),
            W.value ? (v(), w("p", {
              key: 4,
              class: te(["rlzc-cs-result", W.value.win ? "win" : "lose"])
            }, S(Ot.value), 3)) : H("", !0)
          ])) : H("", !0)
        ], 64)) : (v(), w("div", vx, "赌坊只在回廊营业。"))
      ], 64))
    ]));
  }
}), Nx = { class: "rlzc-card rlzc-collapsible rlzc-subapi" }, Px = ["aria-expanded"], jx = ["data-kind"], Rx = {
  key: 0,
  class: "rlzc-collapse-body"
}, Ox = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "检测来源"
}, Fx = {
  key: 0,
  class: "rlzc-preset-area"
}, Lx = { class: "rlzc-preset-row" }, Dx = ["value"], Bx = {
  key: 0,
  value: ""
}, Vx = ["value"], Ux = ["disabled"], Wx = ["disabled"], Hx = { class: "rlzc-stacked-field" }, Gx = ["value"], Kx = { class: "rlzc-stacked-field" }, Yx = { class: "rlzc-key-wrap" }, qx = ["type", "value"], Jx = ["aria-label"], Zx = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, Qx = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "aria-hidden": "true"
}, Xx = { class: "rlzc-stacked-field" }, e0 = ["value"], t0 = ["value"], n0 = ["value"], s0 = ["value"], r0 = { class: "rlzc-conn-row" }, i0 = ["data-kind"], o0 = ["disabled"], l0 = {
  key: 1,
  class: "rlzc-option-list"
}, a0 = { class: "rlzc-option-row" }, c0 = ["aria-checked"], u0 = { class: "rlzc-option-row" }, A0 = ["aria-checked"], d0 = { class: "rlzc-option-row rlzc-option-row-timeout" }, f0 = { class: "rlzc-timeout-wrap" }, p0 = ["value"], h0 = /* @__PURE__ */ Be({
  __name: "SubApiCard",
  setup(e) {
    const t = G(() => f.settings.subApi), n = G(() => t.value.presets.find((D) => D.id === t.value.presetId) ?? null), s = /* @__PURE__ */ de([]), r = /* @__PURE__ */ de(!1), i = /* @__PURE__ */ de(!1), o = /* @__PURE__ */ de("none"), l = /* @__PURE__ */ de(""), a = G(() => t.value.source === "off" ? { kind: "off", text: "未开启" } : t.value.source === "main" ? { kind: "on", text: "跟随主API" } : o.value === "ok" ? { kind: "on", text: "已连接" } : o.value === "fail" ? { kind: "warn", text: "连接失败" } : { kind: "warn", text: "未测试" }), c = G(() => f.settings.cardCollapsed.subApi);
    function u() {
      f.settings.cardCollapsed.subApi = !f.settings.cardCollapsed.subApi, h();
    }
    const d = G(() => o.value === "ok" ? `已连接 · 共 ${s.value.length} 个模型` : o.value === "fail" ? `连接失败：${l.value}` : "未测试");
    function h() {
      be();
    }
    function g(D) {
      t.value.source = D, o.value = "none", h();
    }
    function k() {
      return Math.random().toString(36).slice(2, 10);
    }
    async function z() {
      const D = (await Xi("给这个API起个名字：", `我的API ${t.value.presets.length + 1}`))?.trim();
      if (!D) return;
      const b = { id: k(), name: D, url: "", key: "", model: "" };
      t.value.presets = [...t.value.presets, b], t.value.presetId = b.id, s.value = [], o.value = "none", h();
    }
    async function L() {
      if (!n.value) return;
      const D = (await Xi("改名为：", n.value.name))?.trim();
      D && (n.value.name = D, h());
    }
    async function V() {
      n.value && await Pt(`确定删除「${n.value.name}」吗？`) && (t.value.presets = t.value.presets.filter((D) => D.id !== t.value.presetId), t.value.presetId = t.value.presets[0]?.id ?? "", s.value = [], o.value = "none", h());
    }
    function N(D) {
      t.value.presetId = D.target.value, s.value = [], o.value = "none", h();
    }
    function $(D, b) {
      n.value && (n.value[D] = b.target.value.trim(), h());
    }
    async function I() {
      if (n.value) {
        i.value = !0, o.value = "none", l.value = "";
        try {
          const D = await Ep(n.value, Math.max(5, t.value.timeoutSec) * 1e3);
          s.value = D.models, !n.value.model && D.models.length && (n.value.model = D.models[0], h()), o.value = "ok";
        } catch (D) {
          o.value = "fail", l.value = Us(D), s.value = await ia(n.value).catch(() => []);
        } finally {
          i.value = !1;
        }
      }
    }
    function ee(D) {
      const b = Math.floor(Number(D.target.value));
      if (!Number.isFinite(b) || b < 5) {
        Se("warning", "超时时间至少 5 秒。");
        return;
      }
      t.value.timeoutSec = b, h();
    }
    function J(D, b) {
      t.value[D] = b, h();
    }
    return (D, b) => (v(), w("div", Nx, [
      A("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !c.value,
        onClick: u
      }, [
        b[9] || (b[9] = A("h4", null, "副本事件检测", -1)),
        A("span", {
          class: "rlzc-dot",
          "data-kind": a.value.kind
        }, S(a.value.text), 9, jx),
        A("span", {
          class: te(["rlzc-collapse-arrow", { open: !c.value }])
        }, "▸", 2)
      ], 8, Px),
      c.value ? H("", !0) : (v(), w("div", Rx, [
        b[24] || (b[24] = A("p", { class: "rlzc-hint" }, "每轮让另一个 AI 核对预设事件有没有写出来，并记下副本状态。开启后每轮多一次调用。", -1)),
        A("div", Ox, [
          A("button", {
            class: te({ on: t.value.source === "off" }),
            onClick: b[0] || (b[0] = (m) => g("off"))
          }, "关闭", 2),
          A("button", {
            class: te({ on: t.value.source === "main" }),
            onClick: b[1] || (b[1] = (m) => g("main"))
          }, "跟随主API", 2),
          A("button", {
            class: te({ on: t.value.source === "preset" }),
            onClick: b[2] || (b[2] = (m) => g("preset"))
          }, "自设API", 2)
        ]),
        t.value.source === "preset" ? (v(), w("div", Fx, [
          A("div", Lx, [
            A("select", {
              class: "rlzc-input",
              value: t.value.presetId,
              onChange: N
            }, [
              t.value.presets.length ? H("", !0) : (v(), w("option", Bx, "还没有保存的接口")),
              (v(!0), w(Z, null, fe(t.value.presets, (m) => (v(), w("option", {
                key: m.id,
                value: m.id
              }, S(m.name), 9, Vx))), 128))
            ], 40, Dx),
            A("button", {
              class: "rlzc-icon-btn",
              "aria-label": "新建接口",
              type: "button",
              onClick: z
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
              onClick: L
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
            ])], 8, Ux),
            A("button", {
              class: "rlzc-icon-btn rlzc-danger",
              "aria-label": "删除接口",
              type: "button",
              disabled: !n.value,
              onClick: V
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
            ])], 8, Wx)
          ]),
          n.value ? (v(), w(Z, { key: 0 }, [
            A("div", Hx, [
              b[13] || (b[13] = A("label", { class: "rlzc-label" }, "地址", -1)),
              A("input", {
                class: "rlzc-input",
                value: n.value.url,
                placeholder: "https://…/v1",
                onChange: b[3] || (b[3] = (m) => $("url", m))
              }, null, 40, Gx)
            ]),
            A("div", Kx, [
              b[16] || (b[16] = A("label", { class: "rlzc-label" }, "密钥", -1)),
              A("div", Yx, [
                A("input", {
                  class: "rlzc-input",
                  type: r.value ? "text" : "password",
                  value: n.value.key,
                  autocomplete: "off",
                  onChange: b[4] || (b[4] = (m) => $("key", m))
                }, null, 40, qx),
                A("button", {
                  class: "rlzc-eye-btn",
                  type: "button",
                  "aria-label": r.value ? "隐藏密钥" : "显示密钥",
                  onClick: b[5] || (b[5] = (m) => r.value = !r.value)
                }, [
                  r.value ? (v(), w("svg", Zx, [...b[14] || (b[14] = [
                    A("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    A("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1),
                    A("path", { d: "M2 2l12 12" }, null, -1)
                  ])])) : (v(), w("svg", Qx, [...b[15] || (b[15] = [
                    A("path", { d: "M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" }, null, -1),
                    A("circle", {
                      cx: "8",
                      cy: "8",
                      r: "2"
                    }, null, -1)
                  ])]))
                ], 8, Jx)
              ])
            ]),
            A("div", Xx, [
              b[17] || (b[17] = A("label", { class: "rlzc-label" }, "模型", -1)),
              s.value.length ? (v(), w("select", {
                key: 0,
                class: "rlzc-input",
                value: n.value.model,
                onChange: b[6] || (b[6] = (m) => $("model", m))
              }, [
                s.value.includes(n.value.model) ? H("", !0) : (v(), w("option", {
                  key: 0,
                  value: n.value.model
                }, S(n.value.model || "请选择…"), 9, t0)),
                (v(!0), w(Z, null, fe(s.value, (m) => (v(), w("option", {
                  key: m,
                  value: m
                }, S(m), 9, n0))), 128))
              ], 40, e0)) : (v(), w("input", {
                key: 1,
                class: "rlzc-input rlzc-input-disabled",
                value: n.value.model ? n.value.model : "先测试连接",
                readonly: "",
                tabindex: "-1"
              }, null, 8, s0))
            ]),
            A("div", r0, [
              A("span", {
                class: "rlzc-dot",
                "data-kind": o.value === "ok" ? "on" : o.value === "fail" ? "warn" : "off"
              }, S(d.value), 9, i0),
              A("button", {
                class: "rlzc-btn ghost",
                disabled: i.value || !n.value.url,
                onClick: I
              }, "测试连接", 8, o0)
            ])
          ], 64)) : H("", !0)
        ])) : H("", !0),
        t.value.source !== "off" ? (v(), w("div", l0, [
          A("div", a0, [
            b[19] || (b[19] = A("div", { class: "rlzc-option-label" }, [
              A("span", null, "省钱模式"),
              A("small", null, "只在有预设事件的轮次检测")
            ], -1)),
            A("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.saveMode ? "true" : "false",
              class: te(["rlzc-toggle", { on: t.value.saveMode }]),
              onClick: b[7] || (b[7] = (m) => J("saveMode", !t.value.saveMode))
            }, [...b[18] || (b[18] = [
              A("span", null, null, -1)
            ])], 10, c0)
          ]),
          A("div", u0, [
            b[21] || (b[21] = A("div", { class: "rlzc-option-label" }, [
              A("span", null, "等检测完再写下一轮"),
              A("small", null, "关掉更快，状态可能晚一轮")
            ], -1)),
            A("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.wait ? "true" : "false",
              class: te(["rlzc-toggle", { on: t.value.wait }]),
              onClick: b[8] || (b[8] = (m) => J("wait", !t.value.wait))
            }, [...b[20] || (b[20] = [
              A("span", null, null, -1)
            ])], 10, A0)
          ]),
          A("div", d0, [
            b[23] || (b[23] = A("span", null, "超时", -1)),
            A("div", f0, [
              A("input", {
                type: "number",
                min: "5",
                class: "rlzc-input rlzc-input-num",
                value: t.value.timeoutSec,
                onChange: ee
              }, null, 40, p0),
              b[22] || (b[22] = A("span", { class: "rlzc-unit" }, "秒", -1))
            ])
          ])
        ])) : H("", !0)
      ]))
    ]));
  }
}), m0 = { class: "rlzc-card rlzc-collapsible rlzc-live-card" }, g0 = ["aria-expanded"], x0 = {
  key: 0,
  class: "rlzc-dot",
  "data-kind": "on"
}, y0 = {
  key: 0,
  class: "rlzc-collapse-body"
}, b0 = { class: "rlzc-option-list" }, v0 = { class: "rlzc-option-row rlzc-option-row-stack" }, k0 = {
  class: "rlzc-segsrc",
  role: "group",
  "aria-label": "弹幕来源"
}, w0 = ["disabled"], _0 = {
  key: 0,
  class: "rlzc-hint"
}, z0 = {
  key: 0,
  class: "rlzc-option-row"
}, $0 = { class: "rlzc-timeout-wrap" }, S0 = ["value"], E0 = { class: "rlzc-option-row" }, C0 = ["aria-checked"], M0 = /* @__PURE__ */ Be({
  __name: "LiveCard",
  setup(e) {
    const t = G(() => f.settings.live), n = G(() => f.settings.subApi.source !== "off"), s = G(() => n.value ? t.value.source : "local"), r = G(() => (f.tick, f.session, fi(/* @__PURE__ */ new Set()).on)), i = G(() => f.settings.cardCollapsed.live);
    function o() {
      f.settings.cardCollapsed.live = !f.settings.cardCollapsed.live, be();
    }
    function l(u) {
      u === "ai" && !n.value || (t.value.source = u, be());
    }
    function a(u) {
      const d = Math.floor(Number(u.target.value));
      t.value.freq = Number.isFinite(d) ? Math.max(1, Math.min(10, d)) : 3, u.target.value = String(t.value.freq), be();
    }
    function c(u) {
      t.value.injectToAI = u, be();
    }
    return (u, d) => (v(), w("div", m0, [
      A("button", {
        class: "rlzc-collapse-head",
        "aria-expanded": !i.value,
        onClick: o
      }, [
        d[3] || (d[3] = A("h4", null, "直播", -1)),
        r.value ? (v(), w("span", x0, "直播中")) : H("", !0),
        A("span", {
          class: te(["rlzc-collapse-arrow", { open: !i.value }])
        }, "▸", 2)
      ], 8, g0),
      i.value ? H("", !0) : (v(), w("div", y0, [
        d[10] || (d[10] = A("p", { class: "rlzc-hint" }, "开播后有观众弹幕和打赏，打赏计入积分。画面在状态栏的直播页。", -1)),
        A("div", b0, [
          A("div", v0, [
            d[4] || (d[4] = A("span", { class: "rlzc-option-label" }, [
              A("span", null, "弹幕来源")
            ], -1)),
            A("div", k0, [
              A("button", {
                class: te({ on: s.value === "local" }),
                onClick: d[0] || (d[0] = (h) => l("local"))
              }, "本地", 2),
              A("button", {
                class: te({ on: s.value === "ai" }),
                disabled: !n.value,
                onClick: d[1] || (d[1] = (h) => l("ai"))
              }, "本地+AI", 10, w0)
            ]),
            n.value ? H("", !0) : (v(), w("small", _0, "需先在副本事件检测里选接口"))
          ]),
          s.value === "ai" ? (v(), w("div", z0, [
            d[7] || (d[7] = A("div", { class: "rlzc-option-label" }, [
              A("span", null, "生成频率"),
              A("small", null, "关键事件时另加一次")
            ], -1)),
            A("div", $0, [
              d[5] || (d[5] = A("span", { class: "rlzc-unit" }, "每", -1)),
              A("input", {
                type: "number",
                min: "1",
                max: "10",
                class: "rlzc-input rlzc-input-num",
                value: t.value.freq,
                onChange: a
              }, null, 40, S0),
              d[6] || (d[6] = A("span", { class: "rlzc-unit" }, "轮", -1))
            ])
          ])) : H("", !0),
          A("div", E0, [
            d[9] || (d[9] = A("div", { class: "rlzc-option-label" }, [
              A("span", null, "弹幕传给AI"),
              A("small", null, "主AI能看到最近弹幕")
            ], -1)),
            A("button", {
              role: "switch",
              type: "button",
              "aria-checked": t.value.injectToAI ? "true" : "false",
              class: te(["rlzc-toggle", { on: t.value.injectToAI }]),
              onClick: d[2] || (d[2] = (h) => c(!t.value.injectToAI))
            }, [...d[8] || (d[8] = [
              A("span", null, null, -1)
            ])], 10, C0)
          ])
        ])
      ]))
    ]));
  }
}), I0 = { class: "rlzc-settings" }, T0 = { class: "rlzc-card" }, N0 = ["value"], P0 = { class: "rlzc-card rlzc-collapsible" }, j0 = ["aria-expanded"], R0 = {
  key: 0,
  class: "rlzc-collapse-body"
}, O0 = { class: "rlzc-ledger-status" }, F0 = { class: "rlzc-row" }, L0 = ["placeholder"], D0 = ["disabled"], B0 = { class: "rlzc-row" }, V0 = ["disabled"], U0 = { class: "rlzc-row" }, W0 = { class: "rlzc-seg-group" }, H0 = ["onClick"], G0 = ["disabled"], K0 = {
  key: 0,
  class: "rlzc-hint rlzc-warn-text"
}, Y0 = { class: "rlzc-card rlzc-collapsible" }, q0 = ["aria-expanded"], J0 = {
  key: 0,
  class: "rlzc-collapse-body"
}, Z0 = { class: "rlzc-depth" }, Q0 = { class: "rlzc-field" }, X0 = ["value"], e1 = { class: "rlzc-field" }, t1 = ["value"], n1 = { class: "rlzc-field" }, s1 = ["value"], r1 = { class: "rlzc-field" }, i1 = ["value"], o1 = { class: "rlzc-field" }, l1 = ["value"], a1 = { class: "rlzc-card rlzc-collapsible" }, c1 = ["aria-expanded"], u1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, A1 = ["value", "onChange"], d1 = { class: "rlzc-card" }, f1 = {
  key: 0,
  class: "rlzc-list"
}, p1 = ["onClick"], h1 = {
  key: 1,
  class: "rlzc-hint"
}, m1 = {
  key: 2,
  class: "rlzc-errors"
}, g1 = { class: "rlzc-card" }, x1 = { class: "rlzc-check" }, y1 = ["checked"], b1 = { class: "rlzc-check" }, v1 = ["checked"], k1 = /* @__PURE__ */ Be({
  __name: "SettingsTab",
  setup(e) {
    const t = /* @__PURE__ */ de([]), n = /* @__PURE__ */ de(null), s = /* @__PURE__ */ de(null), r = /* @__PURE__ */ de(null), i = /* @__PURE__ */ de(""), o = /* @__PURE__ */ de(""), l = /* @__PURE__ */ de(""), a = ["D", "C", "B", "A", "S"], c = G(() => jt(Q())), u = G(() => tn(c.value.value, f.ledger)), d = G(() => f.pack?.level ?? "D"), h = G(() => bt[d.value]), g = G(() => Gn(c.value.value, f.ledger, h.value));
    function k() {
      s.value !== null && (pm(s.value), s.value = null);
    }
    function z() {
      r.value !== null && (fm(r.value, i.value || "手动"), r.value = null, i.value = "");
    }
    function L() {
      !o.value && !l.value || (hm(o.value || void 0, l.value || void 0), o.value = "", l.value = "", Se("success", "校正已保存，下一轮生成时写入状态栏。"));
    }
    function V(b, m) {
      const y = Math.max(0, Math.min(1e4, Math.floor(Number(m.target.value) || 0)));
      f.settings.depths[b] = y, be();
    }
    async function N(b) {
      const m = b.target, y = m.files?.[0];
      m.value = "", y && (t.value = cm(await y.text()), t.value.length || Se("success", `已导入副本包：${y.name}`));
    }
    async function $(b, m) {
      await Pt(`确定删除自定义副本包《${m}》吗？`) && um(b);
    }
    function I(b, m) {
      const y = Math.floor(Number(m.target.value));
      !Number.isFinite(y) || y < 1 || (f.settings.genericCaps = { ...f.settings.genericCaps, [b]: y }, be());
    }
    function ee(b) {
      Tm(b.target.value);
    }
    function J(b, m) {
      f.settings[b] = m.target.checked, be();
    }
    function D(b) {
      f.settings.cardCollapsed[b] = !f.settings.cardCollapsed[b], be();
    }
    return (b, m) => (v(), w(Z, null, [
      A("div", I0, [
        A("div", T0, [
          m[16] || (m[16] = A("h4", null, "副本信息显示位置", -1)),
          A("select", {
            class: "rlzc-input",
            value: R(f).settings.panelDisplay,
            onChange: ee
          }, [...m[15] || (m[15] = [
            A("option", { value: "panel" }, "扩展面板（默认）", -1),
            A("option", { value: "statusbar" }, "正文状态栏", -1)
          ])], 40, N0),
          m[17] || (m[17] = A("p", { class: "rlzc-hint" }, "选「正文状态栏」时，时限和任务由状态栏显示，系统页不重复。", -1))
        ]),
        A("div", P0, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !R(f).settings.cardCollapsed.accountFix,
            onClick: m[0] || (m[0] = (y) => D("accountFix"))
          }, [
            m[18] || (m[18] = A("h4", null, "账户校正", -1)),
            A("span", {
              class: te(["rlzc-collapse-arrow", { open: !R(f).settings.cardCollapsed.accountFix }])
            }, "▸", 2)
          ], 8, j0),
          R(f).settings.cardCollapsed.accountFix ? H("", !0) : (v(), w("div", R0, [
            m[20] || (m[20] = A("p", { class: "rlzc-hint" }, "当账本与AI状态栏不同步时，在此手动校正积分或写入等级位格。", -1)),
            A("div", O0, [
              A("span", null, [
                m[19] || (m[19] = Te("当前余额：", -1)),
                A("b", null, S(u.value), 1)
              ]),
              A("span", null, S(g.value ? "⚠ 待清算" : "无待清算"), 1)
            ]),
            m[21] || (m[21] = A("div", { class: "rlzc-section-label" }, "初始积分", -1)),
            A("div", F0, [
              ot(A("input", {
                "onUpdate:modelValue": m[1] || (m[1] = (y) => s.value = y),
                type: "number",
                class: "rlzc-input",
                placeholder: `当前：${c.value.value}`
              }, null, 8, L0), [
                [
                  zt,
                  s.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              A("button", {
                class: "rlzc-btn small",
                disabled: s.value === null,
                onClick: k
              }, "保存", 8, D0)
            ]),
            m[22] || (m[22] = A("div", { class: "rlzc-section-label" }, "追加一笔", -1)),
            A("div", B0, [
              ot(A("input", {
                "onUpdate:modelValue": m[2] || (m[2] = (y) => r.value = y),
                type: "number",
                class: "rlzc-input",
                placeholder: "金额（正/负）"
              }, null, 512), [
                [
                  zt,
                  r.value,
                  void 0,
                  { number: !0 }
                ]
              ]),
              ot(A("input", {
                "onUpdate:modelValue": m[3] || (m[3] = (y) => i.value = y),
                class: "rlzc-input",
                placeholder: "备注（可选）"
              }, null, 512), [
                [zt, i.value]
              ]),
              A("button", {
                class: "rlzc-btn small",
                disabled: r.value === null,
                onClick: z
              }, "追加", 8, V0)
            ]),
            m[23] || (m[23] = A("div", { class: "rlzc-section-label" }, "等级 / 位格校正", -1)),
            m[24] || (m[24] = A("p", { class: "rlzc-hint" }, "下一轮生成时在状态栏写入，之后按剧情照常。", -1)),
            A("div", U0, [
              A("div", W0, [
                (v(), w(Z, null, fe(a, (y) => A("button", {
                  key: y,
                  class: te(["rlzc-seg", { active: o.value === y }]),
                  onClick: (W) => o.value = o.value === y ? "" : y
                }, S(y), 11, H0)), 64))
              ]),
              ot(A("input", {
                "onUpdate:modelValue": m[4] || (m[4] = (y) => l.value = y),
                class: "rlzc-input",
                placeholder: "位格（如：候补）"
              }, null, 512), [
                [zt, l.value]
              ]),
              A("button", {
                class: "rlzc-btn small",
                disabled: !o.value && !l.value,
                onClick: L
              }, "校正", 8, G0)
            ]),
            R(f).ledger.length === 0 && c.value.source === "默认值" ? (v(), w("p", K0, " 初始积分使用默认值 1000，建议设置正确的初始值。 ")) : H("", !0)
          ]))
        ]),
        A("div", Y0, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !R(f).settings.cardCollapsed.depths,
            onClick: m[5] || (m[5] = (y) => D("depths"))
          }, [
            m[25] || (m[25] = A("h4", null, "注入深度", -1)),
            A("span", {
              class: te(["rlzc-collapse-arrow", { open: !R(f).settings.cardCollapsed.depths }])
            }, "▸", 2)
          ], 8, q0),
          R(f).settings.cardCollapsed.depths ? H("", !0) : (v(), w("div", J0, [
            m[31] || (m[31] = A("p", { class: "rlzc-hint" }, "数字越小越靠近最新消息，AI 越重视。一般不用改。", -1)),
            A("div", Z0, [
              A("label", Q0, [
                m[26] || (m[26] = A("span", null, [
                  Te("副本暗号"),
                  A("small", null, "触发世界书的副本条目")
                ], -1)),
                A("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: R(f).settings.depths.token,
                  onChange: m[6] || (m[6] = (y) => V("token", y))
                }, null, 40, X0)
              ]),
              A("label", e1, [
                m[27] || (m[27] = A("span", null, [
                  Te("副本进度"),
                  A("small", null, "阶段、轮次、时限、副本状态")
                ], -1)),
                A("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: R(f).settings.depths.progress,
                  onChange: m[7] || (m[7] = (y) => V("progress", y))
                }, null, 40, t1)
              ]),
              A("label", n1, [
                m[28] || (m[28] = A("span", null, [
                  Te("本轮指令"),
                  A("small", null, "本轮事件与时限写法")
                ], -1)),
                A("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: R(f).settings.depths.turn,
                  onChange: m[8] || (m[8] = (y) => V("turn", y))
                }, null, 40, s1)
              ]),
              A("label", r1, [
                m[29] || (m[29] = A("span", null, [
                  Te("账户"),
                  A("small", null, "积分余额与清算状态")
                ], -1)),
                A("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: R(f).settings.depths.ledger,
                  onChange: m[9] || (m[9] = (y) => V("ledger", y))
                }, null, 40, i1)
              ]),
              A("label", o1, [
                m[30] || (m[30] = A("span", null, [
                  Te("直播"),
                  A("small", null, "在看人数与最近弹幕")
                ], -1)),
                A("input", {
                  type: "number",
                  min: "0",
                  class: "rlzc-input rlzc-input-num",
                  value: R(f).settings.depths.live,
                  onChange: m[10] || (m[10] = (y) => V("live", y))
                }, null, 40, l1)
              ])
            ])
          ]))
        ]),
        je(h0),
        je(M0),
        A("div", a1, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !R(f).settings.cardCollapsed.genericCaps,
            onClick: m[11] || (m[11] = (y) => D("genericCaps"))
          }, [
            m[32] || (m[32] = A("h4", null, "通用副本默认轮数上限", -1)),
            A("span", {
              class: te(["rlzc-collapse-arrow", { open: !R(f).settings.cardCollapsed.genericCaps }])
            }, "▸", 2)
          ], 8, c1),
          R(f).settings.cardCollapsed.genericCaps ? H("", !0) : (v(), w("div", u1, [
            m[33] || (m[33] = A("p", { class: "rlzc-hint" }, "未收录副本按等级取轮数上限，简报里写了「（最多N轮）」时以简报为准。", -1)),
            (v(), w(Z, null, fe(a, (y) => A("label", {
              key: y,
              class: "rlzc-field"
            }, [
              A("span", null, S(y) + " 级", 1),
              A("input", {
                type: "number",
                min: "1",
                class: "rlzc-input rlzc-input-num",
                value: R(f).settings.genericCaps[y],
                onChange: (W) => I(y, W)
              }, null, 40, A1)
            ])), 64))
          ]))
        ]),
        A("div", d1, [
          m[34] || (m[34] = A("h4", null, "自定义副本包", -1)),
          R(f).settings.customPacks.length ? (v(), w("ul", f1, [
            (v(!0), w(Z, null, fe(R(f).settings.customPacks, (y) => (v(), w("li", {
              key: y.id
            }, [
              A("span", null, [
                Te(S(y.level) + "｜" + S(y.name) + " ", 1),
                A("small", null, "v" + S(y.version), 1)
              ]),
              A("button", {
                class: "rlzc-btn ghost small",
                onClick: (W) => $(y.id, y.name)
              }, "删除", 8, p1)
            ]))), 128))
          ])) : (v(), w("p", h1, "还没有导入自定义副本包。")),
          A("input", {
            ref_key: "fileInput",
            ref: n,
            type: "file",
            accept: ".json,application/json",
            hidden: "",
            onChange: N
          }, null, 544),
          A("button", {
            class: "rlzc-btn",
            onClick: m[12] || (m[12] = (y) => n.value?.click())
          }, "导入 JSON…"),
          t.value.length ? (v(), w("ul", m1, [
            (v(!0), w(Z, null, fe(t.value, (y, W) => (v(), w("li", { key: W }, S(y), 1))), 128))
          ])) : H("", !0)
        ]),
        A("div", g1, [
          m[37] || (m[37] = A("h4", null, "其他", -1)),
          A("label", x1, [
            A("input", {
              type: "checkbox",
              checked: R(f).settings.showBall,
              onChange: m[13] || (m[13] = (y) => J("showBall", y))
            }, null, 40, y1),
            m[35] || (m[35] = Te("显示悬浮球", -1))
          ]),
          A("label", b1, [
            A("input", {
              type: "checkbox",
              checked: R(f).settings.debug,
              onChange: m[14] || (m[14] = (y) => J("debug", y))
            }, null, 40, v1),
            m[36] || (m[36] = Te("调试模式", -1))
          ])
        ])
      ]),
      m[38] || (m[38] = A("p", { class: "rlzc-hint rlzc-key-notice" }, "密钥保存在本机酒馆设置里，分享设置或截图时注意别带出去。", -1))
    ], 64));
  }
}), w1 = { class: "rlzc-debug" }, _1 = {
  key: 0,
  class: "rlzc-note"
}, z1 = {
  key: 0,
  class: "rlzc-note"
}, $1 = {
  key: 1,
  class: "rlzc-note"
}, S1 = {
  key: 2,
  class: "rlzc-card"
}, E1 = { class: "rlzc-row" }, C1 = ["disabled"], M1 = ["value"], I1 = ["disabled"], T1 = { class: "rlzc-row" }, N1 = ["disabled"], P1 = ["disabled"], j1 = {
  key: 3,
  class: "rlzc-card rlzc-collapsible"
}, R1 = ["aria-expanded"], O1 = {
  key: 0,
  class: "rlzc-collapse-body"
}, F1 = ["onUpdate:modelValue", "disabled"], L1 = ["disabled"], D1 = { class: "rlzc-card" }, B1 = {
  key: 0,
  class: "rlzc-hint"
}, V1 = { class: "rlzc-hint" }, U1 = { class: "rlzc-list rlzc-warns" }, W1 = { class: "rlzc-card" }, H1 = {
  key: 0,
  class: "rlzc-list"
}, G1 = ["disabled", "onClick"], K1 = {
  key: 1,
  class: "rlzc-hint"
}, Y1 = {
  key: 4,
  class: "rlzc-card"
}, q1 = { class: "rlzc-pre" }, J1 = {
  key: 0,
  class: "rlzc-pre"
}, Z1 = {
  key: 5,
  class: "rlzc-card"
}, Q1 = { class: "rlzc-table" }, X1 = { class: "rlzc-hint" }, ey = { class: "rlzc-hint" }, ty = {
  key: 0,
  class: "rlzc-table"
}, ny = {
  class: "rlzc-card",
  open: ""
}, sy = { class: "rlzc-pre" }, ry = { class: "rlzc-card" }, iy = { class: "rlzc-pre" }, oy = { class: "rlzc-card" }, ly = { class: "rlzc-pre" }, ay = { class: "rlzc-card" }, cy = { class: "rlzc-table" }, uy = {
  key: 0,
  class: "rlzc-warn-text"
}, Ay = { key: 1 }, dy = ["disabled"], fy = {
  key: 2,
  class: "rlzc-card"
}, py = { class: "rlzc-table" }, hy = /* @__PURE__ */ Be({
  __name: "DebugTab",
  setup(e) {
    const t = G(() => f.settings.debug), n = /* @__PURE__ */ de(""), s = /* @__PURE__ */ de(null), r = /* @__PURE__ */ js({});
    Os(
      () => [f.tick, f.pack?.id],
      () => {
        for (const m of Object.keys(r)) delete r[m];
        const b = Ma() ?? {};
        for (const m of f.pack?.roles ?? []) r[m] = b[m] ?? "";
      },
      { immediate: !0 }
    );
    const i = G(() => {
      f.tick;
      const b = Q(), m = [], y = f.session?.entryIndex ?? 0;
      for (let W = y; W < b.length; W++) {
        const ue = b[W]?.extra?.rlzc;
        ue && m.push({ index: W, snap: ue });
      }
      return m.reverse().slice(0, 60);
    }), o = G(() => {
      const b = new Set((f.audit?.warnings ?? []).filter((W) => W.kind === "limit" || W.kind === "eventMissed").map((W) => W.index)), m = Q(), y = f.session?.entryIndex ?? 0;
      for (let W = y; W < m.length; W++)
        m[W]?.extra?.rlzc?.ledgerMismatch && b.add(W);
      return b;
    }), l = G(() => {
      if (f.tick, !f.session || !f.pack || !f.progress) return null;
      const b = Q(), m = Ws(b, f.progress.entryIndex);
      let y = null;
      for (let W = b.length - 1; W >= f.progress.entryIndex; W--) {
        const ue = b[W]?.extra?.rlzc?.sub;
        if (ue) {
          y = ue;
          break;
        }
      }
      return {
        text: m ? Zl(f.pack, m.state) : "",
        state: m?.state ?? null,
        record: y
      };
    }), a = G(() => {
      f.tick;
      const b = Q(), m = [];
      for (let y = b.length - 1; y >= 0 && m.length < 60; y--) {
        const W = nn(b[y]);
        W && m.push({ index: y, rec: W });
      }
      return m;
    });
    function c(b) {
      const m = b.feed.filter((y) => y.t === "tip").map((y) => `${y.name} ${y.amount}→${y.net}`);
      return b.revoke && m.push(`撤回 −${b.revoke}`), m.join("；");
    }
    function u(b) {
      const m = b.ai;
      return m ? m.pending ? "生成中…" : m.ok ? `${m.count}条（${m.ms}ms）` : `失败：${m.error ?? ""}` : "";
    }
    const d = { done: "✓", missed: "✗", void: "–" };
    function h(b) {
      if (!b.sub && !b.skippedEvents?.length) return "";
      const m = [];
      b.sub?.skipped && m.push(`未更新（${b.sub.error ?? ""}）`);
      for (const y of b.sub?.events ?? []) m.push(`${y.id}${d[y.status]}`);
      for (const y of b.skippedEvents ?? []) m.push(`跳过${y.id}`);
      return b.sub && !b.sub.skipped && !m.length && m.push("已整理"), m.join(" ");
    }
    const g = G(() => {
      if (f.tick, !f.session) return null;
      const b = Oe().books[f.session.id];
      return b ? { book: b, rounds: Ym() } : null;
    }), k = { ending: "结局", rating: "评价", event: "事件", freak: "庄家" };
    function z(b, m) {
      return b ? b.kind === "refund" ? `全退（#${b.index}）` : b.kind === "lost" ? `全废（#${b.index}）` : `${m[b.option] ?? b.option}（#${b.index}）` : "待开奖";
    }
    function L(b) {
      return b ? b.status === "pending" ? "出题中…" : b.status === "ok" ? `已出 ${b.count} 题（${b.ms}ms）` : b.status === "late" ? `晚于封盘到达，已丢弃（${b.ms}ms）` : `失败：${b.error ?? ""}` : "事件检测关闭，未出题";
    }
    const V = { ok: "已检测", miss: "没检测", pending: "检测中" }, N = G(() => {
      const b = f.progress;
      if (!b) return null;
      const { perMessage: m, phase: y, next: W, ...ue } = b;
      return {
        phase: y.id + " " + y.name,
        ...ue,
        next: W ? { round: W.round, skipFrom: W.skipFrom, events: W.events.map((se) => se.id) } : null,
        messages: Object.keys(m).length
      };
    });
    function $() {
      n.value && km(n.value);
    }
    function I() {
      s.value !== null && s.value >= 0 && wm(s.value);
    }
    function ee() {
      _m({ ...r });
    }
    const J = (b) => JSON.stringify(b, null, 2);
    function D(b) {
      f.settings.cardCollapsed[b] = !f.settings.cardCollapsed[b], be();
    }
    return (b, m) => (v(), w("div", w1, [
      R(f).session ? (v(), w(Z, { key: 1 }, [
        t.value ? H("", !0) : (v(), w("p", z1, "只读。要手动修改，请先在「设置」里打开调试模式。")),
        R(f).pack && R(f).session.packVersion !== R(f).pack.version ? (v(), w("p", $1, " 入场时副本包版本为 " + S(R(f).session.packVersion) + "，当前为 " + S(R(f).pack.version) + "。 ", 1)) : H("", !0),
        R(f).pack?.phases.length ? (v(), w("div", S1, [
          m[5] || (m[5] = A("h4", null, "手动修正", -1)),
          A("div", E1, [
            ot(A("select", {
              "onUpdate:modelValue": m[0] || (m[0] = (y) => n.value = y),
              class: "rlzc-input",
              disabled: !t.value
            }, [
              m[4] || (m[4] = A("option", { value: "" }, "切换到阶段…", -1)),
              (v(!0), w(Z, null, fe(R(f).pack.phases, (y) => (v(), w("option", {
                key: y.id,
                value: y.id
              }, S(y.name), 9, M1))), 128))
            ], 8, C1), [
              [kl, n.value]
            ]),
            A("button", {
              class: "rlzc-btn small",
              disabled: !t.value || !n.value,
              onClick: $
            }, "切换", 8, I1)
          ]),
          A("div", T1, [
            ot(A("input", {
              "onUpdate:modelValue": m[1] || (m[1] = (y) => s.value = y),
              type: "number",
              min: "0",
              class: "rlzc-input",
              placeholder: "本阶段已完成的轮数",
              disabled: !t.value
            }, null, 8, N1), [
              [
                zt,
                s.value,
                void 0,
                { number: !0 }
              ]
            ]),
            A("button", {
              class: "rlzc-btn small",
              disabled: !t.value || s.value === null,
              onClick: I
            }, "修正轮次", 8, P1)
          ])
        ])) : H("", !0),
        R(f).pack?.roles?.length ? (v(), w("div", j1, [
          A("button", {
            class: "rlzc-collapse-head",
            "aria-expanded": !R(f).settings.cardCollapsed.rolesDebug,
            onClick: m[2] || (m[2] = (y) => D("rolesDebug"))
          }, [
            m[6] || (m[6] = A("h4", null, "角色登记", -1)),
            A("span", {
              class: te(["rlzc-collapse-arrow", { open: !R(f).settings.cardCollapsed.rolesDebug }])
            }, "▸", 2)
          ], 8, R1),
          R(f).settings.cardCollapsed.rolesDebug ? H("", !0) : (v(), w("div", O1, [
            (v(!0), w(Z, null, fe(R(f).pack.roles, (y) => (v(), w("label", {
              key: y,
              class: "rlzc-field"
            }, [
              A("span", null, S(y), 1),
              ot(A("input", {
                "onUpdate:modelValue": (W) => r[y] = W,
                class: "rlzc-input",
                disabled: !t.value,
                placeholder: "未登记"
              }, null, 8, F1), [
                [zt, r[y]]
              ])
            ]))), 128)),
            A("button", {
              class: "rlzc-btn small",
              disabled: !t.value,
              onClick: ee
            }, "保存登记", 8, L1)
          ]))
        ])) : H("", !0),
        A("div", D1, [
          m[8] || (m[8] = A("h4", null, "<副本> 核对", -1)),
          R(f).audit?.warnings.length ? (v(), w(Z, { key: 1 }, [
            A("p", V1, "共 " + S(R(f).audit.warnings.length) + " 条，显示最近 30 条。只作提示，不会改动消息。", 1),
            A("ul", U1, [
              (v(!0), w(Z, null, fe(R(f).audit.warnings.slice(-30).reverse(), (y, W) => (v(), w("li", { key: W }, [
                A("span", null, [
                  A("small", null, "#" + S(y.index) + "｜" + S(y.phase) + "第" + S(y.round) + "轮", 1),
                  m[7] || (m[7] = A("br", null, null, -1)),
                  Te("⚠️ " + S(y.text), 1)
                ])
              ]))), 128))
            ])
          ], 64)) : (v(), w("p", B1, "没有发现问题。"))
        ]),
        A("div", W1, [
          m[9] || (m[9] = A("h4", null, "手动操作记录", -1)),
          R(f).session.manual.length ? (v(), w("ul", H1, [
            (v(!0), w(Z, null, fe(R(f).session.manual, (y, W) => (v(), w("li", { key: W }, [
              A("code", null, "#" + S(y.atIndex) + " " + S(y.kind) + " " + S("phase" in y ? y.phase : "") + S("round" in y ? y.round : "") + S("targetPhase" in y ? `${y.targetPhase}:${y.targetRound}` : ""), 1),
              A("button", {
                class: "rlzc-btn ghost small",
                disabled: !t.value,
                onClick: (ue) => R(zm)(W)
              }, "撤销", 8, G1)
            ]))), 128))
          ])) : (v(), w("p", K1, "无"))
        ]),
        l.value && (l.value.state || l.value.record) ? (v(), w("details", Y1, [
          m[10] || (m[10] = A("summary", null, "副本事件检测：副本状态与最近一次检测", -1)),
          A("pre", q1, S(l.value.text || "（尚无状态）"), 1),
          l.value.record ? (v(), w("pre", J1, S(J(l.value.record)), 1)) : H("", !0),
          m[11] || (m[11] = A("p", { class: "rlzc-hint" }, "✓ 已发生　✗ 该发生但没写出来　– 条件不成立　跳过 = 检测时判断条件已不成立，这一轮没有注入", -1))
        ])) : H("", !0),
        g.value ? (v(), w("details", Z1, [
          m[17] || (m[17] = A("summary", null, "黑市：盘口赔率与检测判定", -1)),
          A("table", Q1, [
            m[15] || (m[15] = A("thead", null, [
              A("tr", null, [
                A("th", null, "盘"),
                A("th", null, "题目"),
                A("th", null, "赔率"),
                A("th", null, "结果")
              ])
            ], -1)),
            A("tbody", null, [
              (v(!0), w(Z, null, fe(g.value.book.markets, (y) => (v(), w("tr", {
                key: y.id
              }, [
                A("td", null, S(k[y.kind]) + " " + S(y.id), 1),
                A("td", null, [
                  Te(S(y.q), 1),
                  y.judge ? (v(), w(Z, { key: 0 }, [
                    m[12] || (m[12] = A("br", null, null, -1)),
                    A("small", null, S(y.judge), 1)
                  ], 64)) : H("", !0),
                  y.judgeNo ? (v(), w(Z, { key: 1 }, [
                    m[13] || (m[13] = A("br", null, null, -1)),
                    A("small", null, "否：" + S(y.judgeNo), 1)
                  ], 64)) : H("", !0),
                  y.by ? (v(), w(Z, { key: 2 }, [
                    m[14] || (m[14] = A("br", null, null, -1)),
                    A("small", null, "by " + S(y.by), 1)
                  ], 64)) : H("", !0)
                ]),
                A("td", null, S(y.options.map((W) => `${W.label}(${Math.round(W.p * 100)}%) ×${W.odds.toFixed(2)}`).join("　")), 1),
                A("td", null, S(z(R(f).market.results[y.id], Object.fromEntries(y.options.map((W) => [W.id, W.label])))), 1)
              ]))), 128))
            ])
          ]),
          A("p", X1, "庄家怪盘：" + S(L(g.value.book.freak)), 1),
          A("p", ey, "开盘 " + S(g.value.book.openedAt) + "　" + S(g.value.book.closedAt ? `封盘 ${g.value.book.closedAt}` : "未封盘") + S(g.value.book.frozen ? "　已定格" : ""), 1),
          g.value.rounds.length ? (v(), w("table", ty, [
            m[16] || (m[16] = A("thead", null, [
              A("tr", null, [
                A("th", null, "楼"),
                A("th", null, "检测"),
                A("th", null, "判定为真")
              ])
            ], -1)),
            A("tbody", null, [
              (v(!0), w(Z, null, fe(g.value.rounds, (y) => (v(), w("tr", {
                key: y.index,
                class: te({ "rlzc-row-warn": y.state === "miss" })
              }, [
                A("td", null, S(y.index), 1),
                A("td", null, S(V[y.state]), 1),
                A("td", null, S(Object.keys(y.hits).filter((W) => y.hits[W]).join(" ") || "—"), 1)
              ], 2))), 128))
            ])
          ])) : H("", !0)
        ])) : H("", !0),
        A("details", ny, [
          m[18] || (m[18] = A("summary", null, "本次注入", -1)),
          A("pre", sy, S([R(f).lastInjection.token, R(f).lastInjection.progress, R(f).lastInjection.turn].filter(Boolean).join(`

`) || "（尚未生成）"), 1)
        ]),
        A("details", ry, [
          m[19] || (m[19] = A("summary", null, "重放结果", -1)),
          A("pre", iy, S(J(N.value)), 1)
        ]),
        A("details", oy, [
          m[20] || (m[20] = A("summary", null, "会话原始数据", -1)),
          A("pre", ly, S(J(R(f).session)), 1)
        ]),
        A("details", ay, [
          m[22] || (m[22] = A("summary", null, "每楼快照（最近60条）", -1)),
          A("table", cy, [
            m[21] || (m[21] = A("thead", null, [
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
              (v(!0), w(Z, null, fe(i.value, (y) => (v(), w("tr", {
                key: y.index,
                class: te({ "rlzc-row-warn": o.value.has(y.index) })
              }, [
                A("td", null, S(y.index) + S(y.snap.entry ? "★" : ""), 1),
                A("td", null, S(y.snap.phase), 1),
                A("td", null, S(y.snap.round), 1),
                A("td", null, S(y.snap.clock ?? ""), 1),
                A("td", null, S(y.snap.limit?.text ?? ""), 1),
                A("td", null, S(y.snap.injected.join(" ")), 1),
                A("td", null, S(h(y.snap)), 1),
                y.snap.ledgerMismatch ? (v(), w("td", uy, "状态栏 " + S(y.snap.ledgerMismatch.status) + " / 账本 " + S(y.snap.ledgerMismatch.ledger), 1)) : (v(), w("td", Ay))
              ], 2))), 128))
            ])
          ])
        ]),
        A("button", {
          class: "rlzc-btn ghost",
          disabled: !t.value,
          onClick: m[3] || (m[3] = //@ts-ignore
          (...y) => R(lo) && R(lo)(...y))
        }, "删除副本会话", 8, dy)
      ], 64)) : (v(), w("p", _1, "当前聊天没有副本会话。")),
      a.value.length ? (v(), w("details", fy, [
        m[24] || (m[24] = A("summary", null, "直播（每楼，最近60条）", -1)),
        A("table", py, [
          m[23] || (m[23] = A("thead", null, [
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
            (v(!0), w(Z, null, fe(a.value, (y) => (v(), w("tr", {
              key: y.index,
              class: te({ "rlzc-row-warn": y.rec.ai && !y.rec.ai.ok && !y.rec.ai.pending })
            }, [
              A("td", null, S(y.index) + S(y.rec.scope === "corridor" ? "·回廊" : ""), 1),
              A("td", null, S(y.rec.hype) + S(y.rec.hurt ? "·伤" : ""), 1),
              A("td", null, S(y.rec.heat), 1),
              A("td", null, S(y.rec.viewers), 1),
              A("td", null, S(c(y.rec)), 1),
              A("td", null, S(u(y.rec)), 1)
            ], 2))), 128))
          ])
        ])
      ])) : H("", !0)
    ]));
  }
}), my = {
  class: "rlzc-panel",
  role: "dialog",
  "aria-label": "回廊种菜系统"
}, gy = { class: "rlzc-head" }, xy = { class: "rlzc-tabs" }, yy = ["onClick"], by = { class: "rlzc-body" }, vy = /* @__PURE__ */ Be({
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
        if (!await Pt("此页会显示副本真相，确定要打开吗？")) return;
        f.debugUnlocked = !0;
      }
      f.tab = s;
    }
    return (s, r) => (v(), w("div", {
      class: "rlzc-backdrop",
      onClick: r[1] || (r[1] = Qu((i) => R(f).panelOpen = !1, ["self"]))
    }, [
      A("section", my, [
        A("header", gy, [
          r[2] || (r[2] = A("span", { class: "rlzc-title" }, "回廊种菜系统", -1)),
          A("button", {
            class: "rlzc-icon",
            title: "关闭",
            onClick: r[0] || (r[0] = (i) => R(f).panelOpen = !1)
          }, "×")
        ]),
        A("nav", xy, [
          (v(), w(Z, null, fe(t, (i) => A("button", {
            key: i.id,
            class: te({ on: R(f).tab === i.id }),
            onClick: (o) => n(i.id)
          }, S(i.label), 11, yy)), 64))
        ]),
        A("div", by, [
          R(f).tab === "system" ? (v(), it(Dg, { key: 0 })) : R(f).tab === "ledger" ? (v(), it(nx, { key: 1 })) : R(f).tab === "market" ? (v(), it(Tx, { key: 2 })) : R(f).tab === "settings" ? (v(), it(k1, { key: 3 })) : R(f).tab === "debug" && R(f).debugUnlocked ? (v(), it(hy, { key: 4 })) : H("", !0)
        ])
      ])
    ]));
  }
}), ky = /* @__PURE__ */ Be({
  __name: "App",
  setup(e) {
    return (t, n) => (v(), w(Z, null, [
      R(f).settings.showBall ? (v(), it(Zm, { key: 0 })) : H("", !0),
      R(f).panelOpen ? (v(), it(vy, { key: 1 })) : H("", !0)
    ], 64));
  }
}), wy = ':host{all:initial}.rlzc-root{--fg: var(--SmartThemeBodyColor, #dcdcd2);--bg: var(--SmartThemeBlurTintColor, #171717);--line: var(--SmartThemeBorderColor, rgba(127, 127, 127, .35));--accent: var(--SmartThemeQuoteColor, #d88a2a);--muted: var(--SmartThemeEmColor, #919191);--solid: color-mix(in srgb, var(--bg) 92%, var(--fg) 8%);--soft: color-mix(in srgb, var(--fg) 7%, transparent);--ok: #4caf72;--bad: #c9534f;font-family:var(--mainFontFamily, system-ui, -apple-system, "PingFang SC", "Noto Sans SC", sans-serif);font-size:14px;line-height:1.55;color:var(--fg)}.rlzc-root *,.rlzc-root *:before,.rlzc-root *:after{box-sizing:border-box}.rlzc-ball{position:fixed;z-index:3000;width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:var(--solid);color:var(--fg);display:grid;place-items:center;cursor:grab;touch-action:none;user-select:none;box-shadow:0 2px 10px #00000040;padding:0;font:inherit}.rlzc-ball:active{cursor:grabbing}.rlzc-ball-mark{font-weight:700;font-size:15px;letter-spacing:0}.rlzc-ball.is-active{border-color:var(--accent);box-shadow:0 0 0 2px color-mix(in srgb,var(--accent) 30%,transparent),0 2px 10px #00000040}.rlzc-ball.is-active .rlzc-ball-mark{color:var(--accent)}.rlzc-ball.is-warn{animation:rlzc-pulse 1.8s ease-in-out infinite}@keyframes rlzc-pulse{50%{transform:scale(1.08)}}.rlzc-ball-badge{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:var(--accent);color:var(--bg);font-size:11px;font-weight:700;line-height:18px;text-align:center;pointer-events:none}.rlzc-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;height:100dvh;z-index:3001;background:#0000004d;display:flex;align-items:flex-end;justify-content:center}.rlzc-panel{width:100%;max-height:86dvh;height:86vh;height:86dvh;display:flex;flex-direction:column;background:var(--solid);color:var(--fg);border:1px solid var(--line);border-radius:14px 14px 0 0;box-shadow:0 -6px 30px #00000059;overflow:hidden;padding-bottom:env(safe-area-inset-bottom,0)}@media(min-width:720px){.rlzc-backdrop{align-items:center;justify-content:flex-end;padding:24px;background:#00000026}.rlzc-panel{width:440px;height:min(760px,90vh);border-radius:14px}}.rlzc-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px 4px}.rlzc-title{font-weight:700;letter-spacing:.08em}.rlzc-icon{background:none;border:0;color:var(--fg);font-size:22px;line-height:1;cursor:pointer;padding:4px 8px}.rlzc-tabs{display:flex;gap:2px;padding:0 8px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}.rlzc-tabs button,.rlzc-subtabs button{flex:1 0 auto;background:none;border:0;color:var(--muted);font:inherit;cursor:pointer;padding:9px 10px;border-bottom:2px solid transparent;white-space:nowrap}.rlzc-tabs button.on{color:var(--fg);border-bottom-color:var(--accent);font-weight:600}.rlzc-body{flex:1;overflow-y:auto;padding:12px;-webkit-overflow-scrolling:touch}.rlzc-body>div{display:flex;flex-direction:column;gap:10px}.rlzc-card{border:1px solid var(--line);border-radius:10px;padding:10px 12px;background:var(--soft)}.rlzc-card h3,.rlzc-card h4{margin:0 0 6px}.rlzc-card h4{font-size:13px;color:var(--muted);font-weight:600}.rlzc-card summary{cursor:pointer;font-weight:600}.rlzc-note{margin:0;padding:8px 10px;border-left:3px solid var(--accent);background:var(--soft);border-radius:4px;font-size:13px}.rlzc-hint{font-size:12px;color:var(--muted);margin:4px 0}.rlzc-row{display:flex;gap:8px;align-items:center;margin:4px 0}.rlzc-row>.rlzc-input{flex:1;min-width:0}.rlzc-label{display:block;font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-input{font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 70%,transparent);border:1px solid var(--line);border-radius:8px;padding:7px 9px;width:100%}.rlzc-input:focus{outline:1px solid var(--accent)}.rlzc-input option{background:var(--solid);color:var(--fg)}.rlzc-btn{font:inherit;cursor:pointer;border-radius:8px;padding:7px 12px;white-space:nowrap;border:1px solid var(--accent);background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--fg)}.rlzc-btn.ghost{border-color:var(--line);background:none}.rlzc-btn.small{padding:4px 9px;font-size:12px}.rlzc-btn:disabled{opacity:.4;cursor:not-allowed}.rlzc-field{display:flex;align-items:center;gap:8px;margin:4px 0}.rlzc-field>span{flex:0 0 42%;font-size:13px}.rlzc-check{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:13px}.rlzc-list{list-style:none;margin:0 0 8px;padding:0}.rlzc-list li{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:4px 0;border-bottom:1px dashed var(--line)}.rlzc-errors{color:#d9534f;font-size:12px;margin:6px 0 0;padding-left:18px}.rlzc-mono,.rlzc-pre,code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.rlzc-pre{white-space:pre-wrap;word-break:break-all;font-size:12px;margin:8px 0 0;max-height:50vh;overflow:auto}.rlzc-hero-top{display:flex;align-items:center;gap:10px}.rlzc-hero-top h3{margin:0;font-size:18px;flex:1}.rlzc-level{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);font-weight:800}.rlzc-chip{font-size:12px;padding:2px 8px;border-radius:99px;border:1px solid var(--line);color:var(--muted)}.rlzc-goal{margin:8px 0 0;font-size:13px}.rlzc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-stat{border:1px solid var(--line);border-radius:10px;padding:8px 10px;display:flex;flex-direction:column;background:var(--soft)}.rlzc-stat span{font-size:11px;color:var(--muted)}.rlzc-stat b{font-size:16px;font-variant-numeric:tabular-nums}.rlzc-stat.warn b{color:var(--accent)}.rlzc-kv{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.rlzc-kv span,.rlzc-tasks>span{color:var(--muted);font-size:12px}.rlzc-tasks ul{margin:4px 0 0;padding-left:18px}.rlzc-ps{font-size:13px;color:var(--muted);margin-top:6px;white-space:pre-wrap}.rlzc-actions{display:flex;gap:8px;flex-wrap:wrap}.rlzc-actions .rlzc-btn{flex:1}.rlzc-rest{text-align:center;padding:24px 12px}.rlzc-rest p{color:var(--muted);font-size:13px;margin:0}.rlzc-docs{border:1px solid var(--line);border-radius:10px;padding:2px 12px 10px;background:var(--soft)}.rlzc-subtabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line)}.rlzc-subtabs button{flex:0 0 auto}.rlzc-subtabs button.on{color:var(--fg);border-bottom-color:var(--accent)}.rlzc-md{font-size:14px}.rlzc-md h3,.rlzc-md h4,.rlzc-md h5{margin:14px 0 6px}.rlzc-md p{margin:6px 0}.rlzc-md ul,.rlzc-md ol{padding-left:20px;margin:6px 0}.rlzc-md blockquote{margin:6px 0;padding-left:10px;border-left:3px solid var(--line);color:var(--muted)}.rlzc-img{display:block;max-width:100%;margin:8px auto;background:#fff;border-radius:8px}.rlzc-table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}.rlzc-table th,.rlzc-table td{text-align:left;padding:3px 4px;border-bottom:1px solid var(--line);vertical-align:top}.rlzc-warns li{align-items:flex-start;font-size:13px}.rlzc-row-warn td{background:color-mix(in srgb,#e0b000 22%,transparent)}.rlzc-intro{line-height:1.6;margin-bottom:8px}.rlzc-grow{flex:1;margin:0}.rlzc-grow>.rlzc-input{flex:1;min-width:0}.rlzc-subline{font-size:12px;color:var(--muted);margin:0}.rlzc-depth .rlzc-field{align-items:flex-start}.rlzc-depth .rlzc-field>span{display:flex;flex-direction:column;gap:2px}.rlzc-depth .rlzc-field>span small{color:var(--muted);font-size:11px;line-height:1.4}.rlzc-depth .rlzc-field>.rlzc-input{flex:0 0 72px;width:72px}.rlzc-subapi-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}.rlzc-subapi-head h4{margin:0}.rlzc-dot{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--muted)}.rlzc-dot:before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--muted)}.rlzc-dot[data-kind=on]{color:#4caf72}.rlzc-dot[data-kind=on]:before{background:#4caf72}.rlzc-dot[data-kind=warn]{color:#c9833a}.rlzc-dot[data-kind=warn]:before{background:#c9833a}.rlzc-segsrc{display:flex;width:100%;border:1px solid var(--line);border-radius:8px;overflow:hidden;margin:8px 0}.rlzc-segsrc button{flex:1;padding:8px 4px;font:inherit;font-size:13px;background:none;border:none;border-right:1px solid var(--line);color:var(--muted);cursor:pointer;min-height:44px}.rlzc-segsrc button:last-child{border-right:none}.rlzc-segsrc button.on{background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--fg);font-weight:600}.rlzc-segsrc button:hover:not(.on){background:var(--soft);color:var(--fg)}.rlzc-preset-area{background:color-mix(in srgb,var(--bg) 50%,transparent);border:1px solid var(--line);border-radius:8px;padding:10px;display:flex;flex-direction:column;gap:8px;margin-bottom:8px}.rlzc-preset-row{display:flex;gap:6px;align-items:center}.rlzc-preset-row .rlzc-input{flex:1;min-width:0}.rlzc-icon-btn{flex:0 0 44px;width:44px;height:44px;display:grid;place-items:center;background:none;border:1px solid var(--line);border-radius:8px;color:var(--muted);cursor:pointer;padding:0}.rlzc-icon-btn:hover:not(:disabled){color:var(--fg);border-color:var(--fg)}.rlzc-icon-btn.rlzc-danger{color:#c9534f;border-color:color-mix(in srgb,#c9534f 40%,transparent)}.rlzc-icon-btn.rlzc-danger:hover:not(:disabled){background:color-mix(in srgb,#c9534f 12%,transparent);border-color:#c9534f}.rlzc-icon-btn:disabled{opacity:.35;cursor:not-allowed}.rlzc-stacked-field{display:flex;flex-direction:column;gap:4px}.rlzc-key-wrap{position:relative;display:flex}.rlzc-key-wrap .rlzc-input{padding-right:44px;width:100%}.rlzc-eye-btn{position:absolute;right:0;top:0;bottom:0;width:44px;display:grid;place-items:center;background:none;border:none;color:var(--muted);cursor:pointer;padding:0}.rlzc-eye-btn:hover{color:var(--fg)}.rlzc-input-disabled{color:var(--muted);cursor:default}.rlzc-conn-row{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:44px}.rlzc-option-list{border-top:1px solid var(--line);margin-top:4px;padding-top:4px;display:flex;flex-direction:column}.rlzc-option-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 50%,transparent);min-height:44px}.rlzc-option-row:last-child{border-bottom:none}.rlzc-option-label{display:flex;flex-direction:column;gap:2px;font-size:13px}.rlzc-option-label small{font-size:11px;color:var(--muted)}.rlzc-option-row-timeout{justify-content:flex-start;gap:16px}.rlzc-option-row-timeout>span{font-size:13px}.rlzc-timeout-wrap{display:flex;align-items:center;gap:6px}.rlzc-input-num{width:72px;text-align:right;font-variant-numeric:tabular-nums}.rlzc-unit{font-size:13px;color:var(--muted)}.rlzc-toggle{flex:0 0 44px;height:26px;border-radius:13px;background:color-mix(in srgb,var(--muted) 30%,transparent);border:1px solid var(--line);cursor:pointer;padding:0;position:relative;transition:background .15s}.rlzc-toggle.on{background:color-mix(in srgb,var(--accent) 70%,transparent);border-color:var(--accent)}.rlzc-toggle span{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--fg);transition:transform .15s}.rlzc-toggle.on span{transform:translate(18px)}.rlzc-toggle:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.rlzc-toggle:after{content:"";position:absolute;inset:-10px 0}.rlzc-segsrc button:disabled{opacity:.4;cursor:not-allowed}.rlzc-segsrc button:disabled:hover{background:none;color:var(--muted)}.rlzc-live-card .rlzc-input-num{min-height:44px}.rlzc-option-row-stack{flex-direction:column;align-items:stretch;gap:0}.rlzc-option-row-stack .rlzc-segsrc{margin:6px 0 2px}.rlzc-option-row-stack .rlzc-hint{margin:2px 0 0}.rlzc-key-notice{text-align:center;margin-top:4px}.rlzc-ledger-hero-card{display:flex;flex-direction:column;gap:0}.rlzc-ledger-hero-label{font-size:12px;color:var(--muted);margin-bottom:4px}.rlzc-ledger-hero-num{font-size:32px;font-variant-numeric:tabular-nums;line-height:1.1;letter-spacing:-.02em;margin-bottom:10px}.rlzc-ledger-hero-num.negative{color:#c9534f}.rlzc-ledger-hero-divider{height:1px;background:var(--line);margin:0 0 10px}.rlzc-ledger-hero-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.rlzc-ledger-hero-col{display:flex;flex-direction:column;gap:3px}.rlzc-ledger-hero-col-label{font-size:11px;color:var(--muted)}.rlzc-ledger-hero-col-val{font-size:14px;font-variant-numeric:tabular-nums;font-weight:600}.rlzc-ledger-warn{color:#c9833a}.rlzc-ledger-init-hint{font-size:11px;color:var(--muted);margin:10px 0 0}.rlzc-ledger-list{list-style:none;margin:6px 0 0;padding:0}.rlzc-ledger-item{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-ledger-item:last-child{border-bottom:none}.rlzc-ledger-item-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-ledger-item-src{font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rlzc-ledger-item-time{font-size:11px;color:var(--muted)}.rlzc-ledger-item-delta{flex:0 0 auto;font-size:14px;font-variant-numeric:tabular-nums;font-weight:600;text-align:right;white-space:nowrap}.rlzc-ledger-item-delta.pos{color:#4caf72}.rlzc-ledger-item-delta.neg{color:#c9534f}.rlzc-collapsible{padding:0}.rlzc-collapse-head{width:100%;display:flex;align-items:center;gap:8px;padding:10px 12px;min-height:44px;background:none;border:none;color:inherit;font:inherit;cursor:pointer;text-align:left}.rlzc-collapsible .rlzc-collapse-head h4{flex:1;margin:0}.rlzc-collapse-head:hover{background:var(--soft);border-radius:10px}.rlzc-collapse-arrow{flex:0 0 auto;font-size:13px;color:var(--muted);display:inline-block;transition:transform .15s ease;transform:rotate(0)}.rlzc-collapse-arrow.open{transform:rotate(90deg)}.rlzc-collapse-body{padding:0 12px 10px}.rlzc-collapse-head .rlzc-dot{font-size:12px}.rlzc-market-tabs button{flex:1 1 0;min-height:44px}.rlzc-mk-status{font-size:14px}.rlzc-mk-q{display:flex;align-items:baseline;gap:8px;margin-bottom:8px;font-weight:600;overflow-wrap:anywhere}.rlzc-mk-tag{flex:0 0 auto;font-size:11px;font-weight:600;color:var(--accent);padding:1px 6px;border:1px solid color-mix(in srgb,var(--accent) 60%,transparent);border-radius:4px}.rlzc-mk-opts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}.rlzc-mk-opt{display:flex;align-items:center;justify-content:space-between;gap:6px;min-height:44px;padding:6px 10px;font:inherit;color:var(--fg);background:color-mix(in srgb,var(--bg) 60%,transparent);border:1px solid var(--line);border-radius:8px;cursor:pointer;text-align:left}.rlzc-mk-opt b{font-weight:600;font-variant-numeric:tabular-nums;color:var(--muted)}.rlzc-mk-opt.on{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 16%,transparent)}.rlzc-mk-opt.on b{color:var(--fg)}.rlzc-mk-opt:disabled{opacity:.55;cursor:not-allowed}.rlzc-mk-bet{margin-top:8px}.rlzc-mk-bet .rlzc-input,.rlzc-mk-bet .rlzc-btn{min-height:44px}.rlzc-mk-bet .rlzc-btn{flex:0 0 auto;min-width:64px}.rlzc-mk-red{color:var(--bad);font-size:12px;margin:2px 0}.rlzc-mk-mine{list-style:none;margin:8px 0 0;padding:6px 0 0;border-top:1px dashed var(--line);font-size:12px;color:var(--muted)}.rlzc-mk-mine li{padding:2px 0;font-variant-numeric:tabular-nums}.rlzc-tk-list{list-style:none;margin:0;padding:0}.rlzc-tk{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:52px;padding:6px 0;border-bottom:1px solid color-mix(in srgb,var(--line) 60%,transparent)}.rlzc-tk:last-child{border-bottom:none}.rlzc-tk-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.rlzc-tk-title{font-size:13px;overflow-wrap:anywhere}.rlzc-tk-left small{font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}.rlzc-stamp{flex:0 0 40px;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:16px;border:2px solid currentColor;transform:rotate(-14deg);box-shadow:inset 0 0 0 2px color-mix(in srgb,currentColor 18%,transparent)}.rlzc-stamp.win{color:var(--ok)}.rlzc-stamp.lose{color:var(--bad)}.rlzc-stamp.refund{color:var(--muted)}.rlzc-stamp.pending{color:var(--muted);border-style:dashed;border-width:1px;box-shadow:none;transform:none;font-weight:600;font-size:14px}.rlzc-cs-tables{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.rlzc-cs-table{display:flex;flex-direction:column;align-items:flex-start;gap:4px;min-height:76px;text-align:left;font:inherit;color:var(--fg);cursor:pointer}.rlzc-cs-table b{font-size:15px}.rlzc-cs-table small{font-size:12px;color:var(--muted);line-height:1.45}.rlzc-cs-table.on{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,transparent)}.rlzc-cs-play h4{margin-bottom:4px}.rlzc-cs-seg{margin:6px 0}.rlzc-cs-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:4px;margin:6px 0}.rlzc-cs-grid.door{grid-template-columns:repeat(5,minmax(0,1fr))}.rlzc-cs-grid button{min-height:44px;padding:0 2px;font:inherit;font-size:13px;color:var(--muted);cursor:pointer;background:none;border:1px solid var(--line);border-radius:8px;font-variant-numeric:tabular-nums}.rlzc-cs-grid button.on{color:var(--fg);border-color:var(--accent);background:color-mix(in srgb,var(--accent) 15%,transparent);font-weight:600}.rlzc-cs-face{margin-top:10px;min-height:52px;display:grid;place-items:center;font-size:26px;font-weight:800;font-variant-numeric:tabular-nums;border:1px dashed var(--line);border-radius:10px}.rlzc-cs-face.rolling{color:var(--muted)}.rlzc-cs-result{margin:8px 0 0;font-weight:600;font-variant-numeric:tabular-nums}.rlzc-cs-result.win{color:var(--ok)}.rlzc-cs-result.lose{color:var(--bad)}';
function _y(e = import.meta.url) {
  const t = /\/scripts\/extensions\/third-party\/([^/]+)\//.exec(decodeURIComponent(new URL(e, globalThis.location?.href ?? "http://localhost/").pathname));
  return t ? t[1] : null;
}
async function Va(e, t, n) {
  const s = ge().getRequestHeaders?.() ?? { "Content-Type": "application/json" };
  return fetch(e, { method: "POST", headers: s, body: JSON.stringify({ extensionName: t, global: n }) });
}
async function zy() {
  const e = _y();
  if (!e) throw new Error("无法确定扩展的安装位置");
  for (const t of [!1, !0]) {
    const n = await Va("/api/extensions/version", e, t);
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
async function $y(e) {
  const t = await Va("/api/extensions/update", e.folder, e.global);
  if (!t.ok) throw new Error(t.status === 403 ? "没有权限更新全局扩展" : `更新失败（${t.status}）`);
}
const go = "rlzc-host", xo = "rlzc-menu-btn", yo = "rlzc-settings-drawer";
function Sy() {
  if (document.getElementById(go)) return;
  const e = document.createElement("div");
  e.id = go, document.body.appendChild(e);
  const t = e.attachShadow({ mode: "open" }), n = document.createElement("style");
  n.textContent = wy, t.appendChild(n);
  const s = document.createElement("div");
  s.className = "rlzc-root", t.appendChild(s), tA(ky).mount(s), Ua(), Wa();
}
function Ua(e = 0) {
  const t = document.getElementById("extensionsMenu");
  if (!t) {
    e < 40 && setTimeout(() => Ua(e + 1), 500);
    return;
  }
  if (document.getElementById(xo)) return;
  const n = document.createElement("div");
  n.id = xo, n.className = "list-group-item flex-container flexGap5 interactable", n.tabIndex = 0, n.title = "打开回廊种菜系统面板";
  const s = document.createElement("div");
  s.className = "fa-solid fa-seedling extensionsMenuExtensionButton";
  const r = document.createElement("span");
  r.textContent = "回廊种菜系统", n.append(s, r), n.addEventListener("click", () => {
    f.panelOpen = !f.panelOpen;
  }), t.appendChild(n);
}
function Wa(e = 0) {
  const t = document.getElementById("extensions_settings2") ?? document.getElementById("extensions_settings");
  if (!t) {
    e < 40 && setTimeout(() => Wa(e + 1), 500);
    return;
  }
  if (document.getElementById(yo)) return;
  const n = (J, D = "", b = "") => {
    const m = document.createElement(J);
    return D && (m.className = D), b && (m.textContent = b), m;
  }, s = n("div");
  s.id = yo;
  const r = n("div", "inline-drawer"), i = n("div", "inline-drawer-toggle inline-drawer-header"), o = n("div", "flex-container alignitemscenter margin0"), l = n("small", "rlzc-update-badge", "有更新");
  l.style.cssText = "display:none;margin-left:6px;padding:0 6px;border-radius:8px;background:var(--SmartThemeQuoteColor,#d88a2a);color:#fff;font-weight:normal;", o.append(n("b", "", "回廊种菜系统"), l), i.append(o, n("div", "inline-drawer-icon fa-solid fa-circle-chevron-down down"));
  const a = n("div", "inline-drawer-content"), c = n("div", "menu_button menu_button_icon", "打开面板");
  c.prepend(n("i", "fa-solid fa-seedling")), c.addEventListener("click", () => f.panelOpen = !0);
  const u = n("div", "menu_button menu_button_icon", "悬浮球回到默认位置");
  u.addEventListener("click", () => {
    f.settings.ball = { x: null, y: null }, f.settings.showBall = !0, be();
  });
  const d = n("label", "checkbox_label"), h = document.createElement("input");
  h.type = "checkbox", h.addEventListener("change", () => {
    f.settings.showBall = h.checked, be();
  }), d.append(h, n("span", "", "显示悬浮球")), Os(() => f.settings.showBall, (J) => h.checked = J, { immediate: !0 });
  const g = n("div", "flex-container");
  g.append(c, u);
  const k = n("div", "flex-container alignitemscenter"), z = n("small", "rlzc-update-status", "正在检查更新…"), L = n("div", "menu_button menu_button_icon", "检查更新"), V = n("div", "menu_button menu_button_icon", "立即更新"), N = n("div", "menu_button menu_button_icon", "刷新页面");
  V.style.display = "none", N.style.display = "none", k.append(z, L, V, N);
  let $ = null, I = !1;
  const ee = async () => {
    if (!I) {
      I = !0, z.textContent = "正在检查更新…", V.style.display = "none";
      try {
        $ = await zy();
        const J = $.commit ? `（${$.commit}）` : "";
        $.isGit ? $.isUpToDate ? z.textContent = `已是最新版本${J}` : (z.textContent = `有新版本可以更新，当前${J || "版本较旧"}`, V.style.display = "") : z.textContent = "不是用仓库地址安装的，无法检查更新。", l.style.display = $.isGit && !$.isUpToDate ? "" : "none";
      } catch (J) {
        z.textContent = `检查更新失败：${J.message}`;
      } finally {
        I = !1;
      }
    }
  };
  L.addEventListener("click", () => void ee()), V.addEventListener("click", async () => {
    if (!(!$ || I)) {
      I = !0, z.textContent = "正在更新…", V.style.display = "none";
      try {
        await $y($), l.style.display = "none", z.textContent = "更新完成，刷新页面后生效。", N.style.display = "";
      } catch (J) {
        z.textContent = `更新失败：${J.message}`, V.style.display = "";
      } finally {
        I = !1;
      }
    }
  }), N.addEventListener("click", () => location.reload()), setTimeout(() => void ee(), 3e3), a.append(g, d, k, n("small", "", "也可以从输入框左侧的魔棒菜单打开面板。")), r.append(i, a), s.append(r), t.append(s);
}
globalThis.rlzcInterceptor = ym;
function _r() {
  lm(), wt("MESSAGE_RECEIVED", (e, t) => Im(Number(e), t)), wt("CHARACTER_MESSAGE_RENDERED", (e) => br(Number(e))), wt("MESSAGE_DELETED", () => yr()), wt("MESSAGE_SWIPED", (e) => {
    bm(Number(e)), br(Number(e));
  }), wt("MESSAGE_EDITED", () => yr()), wt("MESSAGE_UPDATED", (e) => {
    yr(), br(Number(e));
  }), wt("CHAT_CHANGED", () => Ao()), wt("MORE_MESSAGES_LOADED", () => di()), Sy(), bh({ view: fi, toggle: Om }), Ao(), console.log("[rlzc] 回廊种菜系统已加载", f.settings);
}
const bo = window.jQuery;
typeof bo == "function" ? bo(() => _r()) : document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", _r) : _r();
