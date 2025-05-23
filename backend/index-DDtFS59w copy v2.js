(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
      return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
      r(l);
  new MutationObserver(l => {
      for (const s of l)
          if (s.type === "childList")
              for (const o of s.addedNodes)
                  o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
  }
  ).observe(document, {
      childList: !0,
      subtree: !0
  });
  function n(l) {
      const s = {};
      return l.integrity && (s.integrity = l.integrity),
      l.referrerPolicy && (s.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials" ? s.credentials = "include" : l.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
      s
  }
  function r(l) {
      if (l.ep)
          return;
      l.ep = !0;
      const s = n(l);
      fetch(l.href, s)
  }
}
)();
function aa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var ua = {
  exports: {}
}
, ol = {}
, ca = {
  exports: {}
}
, z = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var er = Symbol.for("react.element")
, Qc = Symbol.for("react.portal")
, Kc = Symbol.for("react.fragment")
, Yc = Symbol.for("react.strict_mode")
, Xc = Symbol.for("react.profiler")
, Gc = Symbol.for("react.provider")
, Zc = Symbol.for("react.context")
, Jc = Symbol.for("react.forward_ref")
, bc = Symbol.for("react.suspense")
, qc = Symbol.for("react.memo")
, ed = Symbol.for("react.lazy")
, Qi = Symbol.iterator;
function td(e) {
  return e === null || typeof e != "object" ? null : (e = Qi && e[Qi] || e["@@iterator"],
  typeof e == "function" ? e : null)
}
var da = {
  isMounted: function() {
      return !1
  },
  enqueueForceUpdate: function() {},
  enqueueReplaceState: function() {},
  enqueueSetState: function() {}
}
, fa = Object.assign
, pa = {};
function un(e, t, n) {
  this.props = e,
  this.context = t,
  this.refs = pa,
  this.updater = n || da
}
un.prototype.isReactComponent = {};
un.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
}
;
un.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function ma() {}
ma.prototype = un.prototype;
function Zs(e, t, n) {
  this.props = e,
  this.context = t,
  this.refs = pa,
  this.updater = n || da
}
var Js = Zs.prototype = new ma;
Js.constructor = Zs;
fa(Js, un.prototype);
Js.isPureReactComponent = !0;
var Ki = Array.isArray
, ha = Object.prototype.hasOwnProperty
, bs = {
  current: null
}
, ga = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function va(e, t, n) {
  var r, l = {}, s = null, o = null;
  if (t != null)
      for (r in t.ref !== void 0 && (o = t.ref),
      t.key !== void 0 && (s = "" + t.key),
      t)
          ha.call(t, r) && !ga.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1)
      l.children = n;
  else if (1 < a) {
      for (var u = Array(a), d = 0; d < a; d++)
          u[d] = arguments[d + 2];
      l.children = u
  }
  if (e && e.defaultProps)
      for (r in a = e.defaultProps,
      a)
          l[r] === void 0 && (l[r] = a[r]);
  return {
      $$typeof: er,
      type: e,
      key: s,
      ref: o,
      props: l,
      _owner: bs.current
  }
}
function nd(e, t) {
  return {
      $$typeof: er,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
  }
}
function qs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === er
}
function rd(e) {
  var t = {
      "=": "=0",
      ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function(n) {
      return t[n]
  })
}
var Yi = /\/+/g;
function Il(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? rd("" + e.key) : t.toString(36)
}
function kr(e, t, n, r, l) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null)
      o = !0;
  else
      switch (s) {
      case "string":
      case "number":
          o = !0;
          break;
      case "object":
          switch (e.$$typeof) {
          case er:
          case Qc:
              o = !0
          }
      }
  if (o)
      return o = e,
      l = l(o),
      e = r === "" ? "." + Il(o, 0) : r,
      Ki(l) ? (n = "",
      e != null && (n = e.replace(Yi, "$&/") + "/"),
      kr(l, t, n, "", function(d) {
          return d
      })) : l != null && (qs(l) && (l = nd(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Yi, "$&/") + "/") + e)),
      t.push(l)),
      1;
  if (o = 0,
  r = r === "" ? "." : r + ":",
  Ki(e))
      for (var a = 0; a < e.length; a++) {
          s = e[a];
          var u = r + Il(s, a);
          o += kr(s, t, n, u, l)
      }
  else if (u = td(e),
  typeof u == "function")
      for (e = u.call(e),
      a = 0; !(s = e.next()).done; )
          s = s.value,
          u = r + Il(s, a++),
          o += kr(s, t, n, u, l);
  else if (s === "object")
      throw t = String(e),
      Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o
}
function or(e, t, n) {
  if (e == null)
      return e;
  var r = []
    , l = 0;
  return kr(e, r, "", "", function(s) {
      return t.call(n, s, l++)
  }),
  r
}
function ld(e) {
  if (e._status === -1) {
      var t = e._result;
      t = t(),
      t.then(function(n) {
          (e._status === 0 || e._status === -1) && (e._status = 1,
          e._result = n)
      }, function(n) {
          (e._status === 0 || e._status === -1) && (e._status = 2,
          e._result = n)
      }),
      e._status === -1 && (e._status = 0,
      e._result = t)
  }
  if (e._status === 1)
      return e._result.default;
  throw e._result
}
var ue = {
  current: null
}
, Er = {
  transition: null
}
, sd = {
  ReactCurrentDispatcher: ue,
  ReactCurrentBatchConfig: Er,
  ReactCurrentOwner: bs
};
function ya() {
  throw Error("act(...) is not supported in production builds of React.")
}
z.Children = {
  map: or,
  forEach: function(e, t, n) {
      or(e, function() {
          t.apply(this, arguments)
      }, n)
  },
  count: function(e) {
      var t = 0;
      return or(e, function() {
          t++
      }),
      t
  },
  toArray: function(e) {
      return or(e, function(t) {
          return t
      }) || []
  },
  only: function(e) {
      if (!qs(e))
          throw Error("React.Children.only expected to receive a single React element child.");
      return e
  }
};
z.Component = un;
z.Fragment = Kc;
z.Profiler = Xc;
z.PureComponent = Zs;
z.StrictMode = Yc;
z.Suspense = bc;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sd;
z.act = ya;
z.cloneElement = function(e, t, n) {
  if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = fa({}, e.props)
    , l = e.key
    , s = e.ref
    , o = e._owner;
  if (t != null) {
      if (t.ref !== void 0 && (s = t.ref,
      o = bs.current),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
          var a = e.type.defaultProps;
      for (u in t)
          ha.call(t, u) && !ga.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u])
  }
  var u = arguments.length - 2;
  if (u === 1)
      r.children = n;
  else if (1 < u) {
      a = Array(u);
      for (var d = 0; d < u; d++)
          a[d] = arguments[d + 2];
      r.children = a
  }
  return {
      $$typeof: er,
      type: e.type,
      key: l,
      ref: s,
      props: r,
      _owner: o
  }
}
;
z.createContext = function(e) {
  return e = {
      $$typeof: Zc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
  },
  e.Provider = {
      $$typeof: Gc,
      _context: e
  },
  e.Consumer = e
}
;
z.createElement = va;
z.createFactory = function(e) {
  var t = va.bind(null, e);
  return t.type = e,
  t
}
;
z.createRef = function() {
  return {
      current: null
  }
}
;
z.forwardRef = function(e) {
  return {
      $$typeof: Jc,
      render: e
  }
}
;
z.isValidElement = qs;
z.lazy = function(e) {
  return {
      $$typeof: ed,
      _payload: {
          _status: -1,
          _result: e
      },
      _init: ld
  }
}
;
z.memo = function(e, t) {
  return {
      $$typeof: qc,
      type: e,
      compare: t === void 0 ? null : t
  }
}
;
z.startTransition = function(e) {
  var t = Er.transition;
  Er.transition = {};
  try {
      e()
  } finally {
      Er.transition = t
  }
}
;
z.unstable_act = ya;
z.useCallback = function(e, t) {
  return ue.current.useCallback(e, t)
}
;
z.useContext = function(e) {
  return ue.current.useContext(e)
}
;
z.useDebugValue = function() {}
;
z.useDeferredValue = function(e) {
  return ue.current.useDeferredValue(e)
}
;
z.useEffect = function(e, t) {
  return ue.current.useEffect(e, t)
}
;
z.useId = function() {
  return ue.current.useId()
}
;
z.useImperativeHandle = function(e, t, n) {
  return ue.current.useImperativeHandle(e, t, n)
}
;
z.useInsertionEffect = function(e, t) {
  return ue.current.useInsertionEffect(e, t)
}
;
z.useLayoutEffect = function(e, t) {
  return ue.current.useLayoutEffect(e, t)
}
;
z.useMemo = function(e, t) {
  return ue.current.useMemo(e, t)
}
;
z.useReducer = function(e, t, n) {
  return ue.current.useReducer(e, t, n)
}
;
z.useRef = function(e) {
  return ue.current.useRef(e)
}
;
z.useState = function(e) {
  return ue.current.useState(e)
}
;
z.useSyncExternalStore = function(e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n)
}
;
z.useTransition = function() {
  return ue.current.useTransition()
}
;
z.version = "18.3.1";
ca.exports = z;
var P = ca.exports;
const Cr = aa(P);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var id = P
, od = Symbol.for("react.element")
, ad = Symbol.for("react.fragment")
, ud = Object.prototype.hasOwnProperty
, cd = id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
, dd = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function xa(e, t, n) {
  var r, l = {}, s = null, o = null;
  n !== void 0 && (s = "" + n),
  t.key !== void 0 && (s = "" + t.key),
  t.ref !== void 0 && (o = t.ref);
  for (r in t)
      ud.call(t, r) && !dd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
      for (r in t = e.defaultProps,
      t)
          l[r] === void 0 && (l[r] = t[r]);
  return {
      $$typeof: od,
      type: e,
      key: s,
      ref: o,
      props: l,
      _owner: cd.current
  }
}
ol.Fragment = ad;
ol.jsx = xa;
ol.jsxs = xa;
ua.exports = ol;
var i = ua.exports
, wa = {
  exports: {}
}
, we = {}
, ja = {
  exports: {}
}
, Na = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(e) {
  function t(E, I) {
      var L = E.length;
      E.push(I);
      e: for (; 0 < L; ) {
          var K = L - 1 >>> 1
            , J = E[K];
          if (0 < l(J, I))
              E[K] = I,
              E[L] = J,
              L = K;
          else
              break e
      }
  }
  function n(E) {
      return E.length === 0 ? null : E[0]
  }
  function r(E) {
      if (E.length === 0)
          return null;
      var I = E[0]
        , L = E.pop();
      if (L !== I) {
          E[0] = L;
          e: for (var K = 0, J = E.length, sr = J >>> 1; K < sr; ) {
              var xt = 2 * (K + 1) - 1
                , Pl = E[xt]
                , wt = xt + 1
                , ir = E[wt];
              if (0 > l(Pl, L))
                  wt < J && 0 > l(ir, Pl) ? (E[K] = ir,
                  E[wt] = L,
                  K = wt) : (E[K] = Pl,
                  E[xt] = L,
                  K = xt);
              else if (wt < J && 0 > l(ir, L))
                  E[K] = ir,
                  E[wt] = L,
                  K = wt;
              else
                  break e
          }
      }
      return I
  }
  function l(E, I) {
      var L = E.sortIndex - I.sortIndex;
      return L !== 0 ? L : E.id - I.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
      var s = performance;
      e.unstable_now = function() {
          return s.now()
      }
  } else {
      var o = Date
        , a = o.now();
      e.unstable_now = function() {
          return o.now() - a
      }
  }
  var u = []
    , d = []
    , g = 1
    , h = null
    , m = 3
    , y = !1
    , x = !1
    , v = !1
    , N = typeof setTimeout == "function" ? setTimeout : null
    , f = typeof clearTimeout == "function" ? clearTimeout : null
    , c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
      for (var I = n(d); I !== null; ) {
          if (I.callback === null)
              r(d);
          else if (I.startTime <= E)
              r(d),
              I.sortIndex = I.expirationTime,
              t(u, I);
          else
              break;
          I = n(d)
      }
  }
  function w(E) {
      if (v = !1,
      p(E),
      !x)
          if (n(u) !== null)
              x = !0,
              _l(S);
          else {
              var I = n(d);
              I !== null && Tl(w, I.startTime - E)
          }
  }
  function S(E, I) {
      x = !1,
      v && (v = !1,
      f(T),
      T = -1),
      y = !0;
      var L = m;
      try {
          for (p(I),
          h = n(u); h !== null && (!(h.expirationTime > I) || E && !Te()); ) {
              var K = h.callback;
              if (typeof K == "function") {
                  h.callback = null,
                  m = h.priorityLevel;
                  var J = K(h.expirationTime <= I);
                  I = e.unstable_now(),
                  typeof J == "function" ? h.callback = J : h === n(u) && r(u),
                  p(I)
              } else
                  r(u);
              h = n(u)
          }
          if (h !== null)
              var sr = !0;
          else {
              var xt = n(d);
              xt !== null && Tl(w, xt.startTime - I),
              sr = !1
          }
          return sr
      } finally {
          h = null,
          m = L,
          y = !1
      }
  }
  var C = !1
    , _ = null
    , T = -1
    , Q = 5
    , M = -1;
  function Te() {
      return !(e.unstable_now() - M < Q)
  }
  function pn() {
      if (_ !== null) {
          var E = e.unstable_now();
          M = E;
          var I = !0;
          try {
              I = _(!0, E)
          } finally {
              I ? mn() : (C = !1,
              _ = null)
          }
      } else
          C = !1
  }
  var mn;
  if (typeof c == "function")
      mn = function() {
          c(pn)
      }
      ;
  else if (typeof MessageChannel < "u") {
      var Wi = new MessageChannel
        , Wc = Wi.port2;
      Wi.port1.onmessage = pn,
      mn = function() {
          Wc.postMessage(null)
      }
  } else
      mn = function() {
          N(pn, 0)
      }
      ;
  function _l(E) {
      _ = E,
      C || (C = !0,
      mn())
  }
  function Tl(E, I) {
      T = N(function() {
          E(e.unstable_now())
      }, I)
  }
  e.unstable_IdlePriority = 5,
  e.unstable_ImmediatePriority = 1,
  e.unstable_LowPriority = 4,
  e.unstable_NormalPriority = 3,
  e.unstable_Profiling = null,
  e.unstable_UserBlockingPriority = 2,
  e.unstable_cancelCallback = function(E) {
      E.callback = null
  }
  ,
  e.unstable_continueExecution = function() {
      x || y || (x = !0,
      _l(S))
  }
  ,
  e.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < E ? Math.floor(1e3 / E) : 5
  }
  ,
  e.unstable_getCurrentPriorityLevel = function() {
      return m
  }
  ,
  e.unstable_getFirstCallbackNode = function() {
      return n(u)
  }
  ,
  e.unstable_next = function(E) {
      switch (m) {
      case 1:
      case 2:
      case 3:
          var I = 3;
          break;
      default:
          I = m
      }
      var L = m;
      m = I;
      try {
          return E()
      } finally {
          m = L
      }
  }
  ,
  e.unstable_pauseExecution = function() {}
  ,
  e.unstable_requestPaint = function() {}
  ,
  e.unstable_runWithPriority = function(E, I) {
      switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
          break;
      default:
          E = 3
      }
      var L = m;
      m = E;
      try {
          return I()
      } finally {
          m = L
      }
  }
  ,
  e.unstable_scheduleCallback = function(E, I, L) {
      var K = e.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay,
      L = typeof L == "number" && 0 < L ? K + L : K) : L = K,
      E) {
      case 1:
          var J = -1;
          break;
      case 2:
          J = 250;
          break;
      case 5:
          J = 1073741823;
          break;
      case 4:
          J = 1e4;
          break;
      default:
          J = 5e3
      }
      return J = L + J,
      E = {
          id: g++,
          callback: I,
          priorityLevel: E,
          startTime: L,
          expirationTime: J,
          sortIndex: -1
      },
      L > K ? (E.sortIndex = L,
      t(d, E),
      n(u) === null && E === n(d) && (v ? (f(T),
      T = -1) : v = !0,
      Tl(w, L - K))) : (E.sortIndex = J,
      t(u, E),
      x || y || (x = !0,
      _l(S))),
      E
  }
  ,
  e.unstable_shouldYield = Te,
  e.unstable_wrapCallback = function(E) {
      var I = m;
      return function() {
          var L = m;
          m = I;
          try {
              return E.apply(this, arguments)
          } finally {
              m = L
          }
      }
  }
}
)(Na);
ja.exports = Na;
var fd = ja.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var pd = P
, xe = fd;
function j(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Sa = new Set
, On = {};
function Mt(e, t) {
  en(e, t),
  en(e + "Capture", t)
}
function en(e, t) {
  for (On[e] = t,
  e = 0; e < t.length; e++)
      Sa.add(t[e])
}
var Ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
, rs = Object.prototype.hasOwnProperty
, md = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
, Xi = {}
, Gi = {};
function hd(e) {
  return rs.call(Gi, e) ? !0 : rs.call(Xi, e) ? !1 : md.test(e) ? Gi[e] = !0 : (Xi[e] = !0,
  !1)
}
function gd(e, t, n, r) {
  if (n !== null && n.type === 0)
      return !1;
  switch (typeof t) {
  case "function":
  case "symbol":
      return !0;
  case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
      e !== "data-" && e !== "aria-");
  default:
      return !1
  }
}
function vd(e, t, n, r) {
  if (t === null || typeof t > "u" || gd(e, t, n, r))
      return !0;
  if (r)
      return !1;
  if (n !== null)
      switch (n.type) {
      case 3:
          return !t;
      case 4:
          return t === !1;
      case 5:
          return isNaN(t);
      case 6:
          return isNaN(t) || 1 > t
      }
  return !1
}
function ce(e, t, n, r, l, s, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4,
  this.attributeName = r,
  this.attributeNamespace = l,
  this.mustUseProperty = n,
  this.propertyName = e,
  this.type = t,
  this.sanitizeURL = s,
  this.removeEmptyString = o
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ne[e] = new ce(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ne[t] = new ce(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ne[e] = new ce(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ne[e] = new ce(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ne[e] = new ce(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ne[e] = new ce(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
  ne[e] = new ce(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ne[e] = new ce(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
  ne[e] = new ce(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var ei = /[\-:]([a-z])/g;
function ti(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(ei, ti);
  ne[t] = new ce(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ei, ti);
  ne[t] = new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ei, ti);
  ne[t] = new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ne[e] = new ce(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ne.xlinkHref = new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ne[e] = new ce(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function ni(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (vd(t, n, l, r) && (n = null),
  r || l === null ? hd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
  r = l.attributeNamespace,
  n === null ? e.removeAttribute(t) : (l = l.type,
  n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var be = pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
, ar = Symbol.for("react.element")
, Ot = Symbol.for("react.portal")
, At = Symbol.for("react.fragment")
, ri = Symbol.for("react.strict_mode")
, ls = Symbol.for("react.profiler")
, ka = Symbol.for("react.provider")
, Ea = Symbol.for("react.context")
, li = Symbol.for("react.forward_ref")
, ss = Symbol.for("react.suspense")
, is = Symbol.for("react.suspense_list")
, si = Symbol.for("react.memo")
, et = Symbol.for("react.lazy")
, Ca = Symbol.for("react.offscreen")
, Zi = Symbol.iterator;
function hn(e) {
  return e === null || typeof e != "object" ? null : (e = Zi && e[Zi] || e["@@iterator"],
  typeof e == "function" ? e : null)
}
var H = Object.assign, Ll;
function Sn(e) {
  if (Ll === void 0)
      try {
          throw Error()
      } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          Ll = t && t[1] || ""
      }
  return `
` + Ll + e
}
var zl = !1;
function Ml(e, t) {
  if (!e || zl)
      return "";
  zl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
      if (t)
          if (t = function() {
              throw Error()
          }
          ,
          Object.defineProperty(t.prototype, "props", {
              set: function() {
                  throw Error()
              }
          }),
          typeof Reflect == "object" && Reflect.construct) {
              try {
                  Reflect.construct(t, [])
              } catch (d) {
                  var r = d
              }
              Reflect.construct(e, [], t)
          } else {
              try {
                  t.call()
              } catch (d) {
                  r = d
              }
              e.call(t.prototype)
          }
      else {
          try {
              throw Error()
          } catch (d) {
              r = d
          }
          e()
      }
  } catch (d) {
      if (d && r && typeof d.stack == "string") {
          for (var l = d.stack.split(`
`), s = r.stack.split(`
`), o = l.length - 1, a = s.length - 1; 1 <= o && 0 <= a && l[o] !== s[a]; )
              a--;
          for (; 1 <= o && 0 <= a; o--,
          a--)
              if (l[o] !== s[a]) {
                  if (o !== 1 || a !== 1)
                      do
                          if (o--,
                          a--,
                          0 > a || l[o] !== s[a]) {
                              var u = `
` + l[o].replace(" at new ", " at ");
                              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                              u
                          }
                      while (1 <= o && 0 <= a);
                  break
              }
      }
  } finally {
      zl = !1,
      Error.prepareStackTrace = n
  }
  return (e = e ? e.displayName || e.name : "") ? Sn(e) : ""
}
function yd(e) {
  switch (e.tag) {
  case 5:
      return Sn(e.type);
  case 16:
      return Sn("Lazy");
  case 13:
      return Sn("Suspense");
  case 19:
      return Sn("SuspenseList");
  case 0:
  case 2:
  case 15:
      return e = Ml(e.type, !1),
      e;
  case 11:
      return e = Ml(e.type.render, !1),
      e;
  case 1:
      return e = Ml(e.type, !0),
      e;
  default:
      return ""
  }
}
function os(e) {
  if (e == null)
      return null;
  if (typeof e == "function")
      return e.displayName || e.name || null;
  if (typeof e == "string")
      return e;
  switch (e) {
  case At:
      return "Fragment";
  case Ot:
      return "Portal";
  case ls:
      return "Profiler";
  case ri:
      return "StrictMode";
  case ss:
      return "Suspense";
  case is:
      return "SuspenseList"
  }
  if (typeof e == "object")
      switch (e.$$typeof) {
      case Ea:
          return (e.displayName || "Context") + ".Consumer";
      case ka:
          return (e._context.displayName || "Context") + ".Provider";
      case li:
          var t = e.render;
          return e = e.displayName,
          e || (e = t.displayName || t.name || "",
          e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
          e;
      case si:
          return t = e.displayName || null,
          t !== null ? t : os(e.type) || "Memo";
      case et:
          t = e._payload,
          e = e._init;
          try {
              return os(e(t))
          } catch {}
      }
  return null
}
function xd(e) {
  var t = e.type;
  switch (e.tag) {
  case 24:
      return "Cache";
  case 9:
      return (t.displayName || "Context") + ".Consumer";
  case 10:
      return (t._context.displayName || "Context") + ".Provider";
  case 18:
      return "DehydratedFragment";
  case 11:
      return e = t.render,
      e = e.displayName || e.name || "",
      t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
  case 7:
      return "Fragment";
  case 5:
      return t;
  case 4:
      return "Portal";
  case 3:
      return "Root";
  case 6:
      return "Text";
  case 16:
      return os(t);
  case 8:
      return t === ri ? "StrictMode" : "Mode";
  case 22:
      return "Offscreen";
  case 12:
      return "Profiler";
  case 21:
      return "Scope";
  case 13:
      return "Suspense";
  case 19:
      return "SuspenseList";
  case 25:
      return "TracingMarker";
  case 1:
  case 0:
  case 17:
  case 2:
  case 14:
  case 15:
      if (typeof t == "function")
          return t.displayName || t.name || null;
      if (typeof t == "string")
          return t
  }
  return null
}
function mt(e) {
  switch (typeof e) {
  case "boolean":
  case "number":
  case "string":
  case "undefined":
      return e;
  case "object":
      return e;
  default:
      return ""
  }
}
function _a(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function wd(e) {
  var t = _a(e) ? "checked" : "value"
    , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
    , r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get
        , s = n.set;
      return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
              return l.call(this)
          },
          set: function(o) {
              r = "" + o,
              s.call(this, o)
          }
      }),
      Object.defineProperty(e, t, {
          enumerable: n.enumerable
      }),
      {
          getValue: function() {
              return r
          },
          setValue: function(o) {
              r = "" + o
          },
          stopTracking: function() {
              e._valueTracker = null,
              delete e[t]
          }
      }
  }
}
function ur(e) {
  e._valueTracker || (e._valueTracker = wd(e))
}
function Ta(e) {
  if (!e)
      return !1;
  var t = e._valueTracker;
  if (!t)
      return !0;
  var n = t.getValue()
    , r = "";
  return e && (r = _a(e) ? e.checked ? "true" : "false" : e.value),
  e = r,
  e !== n ? (t.setValue(e),
  !0) : !1
}
function Ar(e) {
  if (e = e || (typeof document < "u" ? document : void 0),
  typeof e > "u")
      return null;
  try {
      return e.activeElement || e.body
  } catch {
      return e.body
  }
}
function as(e, t) {
  var n = t.checked;
  return H({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked
  })
}
function Ji(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue
    , r = t.checked != null ? t.checked : t.defaultChecked;
  n = mt(t.value != null ? t.value : n),
  e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
  }
}
function Pa(e, t) {
  t = t.checked,
  t != null && ni(e, "checked", t, !1)
}
function us(e, t) {
  Pa(e, t);
  var n = mt(t.value)
    , r = t.type;
  if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return
  }
  t.hasOwnProperty("value") ? cs(e, t.type, n) : t.hasOwnProperty("defaultValue") && cs(e, t.type, mt(t.defaultValue)),
  t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function bi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
          return;
      t = "" + e._wrapperState.initialValue,
      n || t === e.value || (e.value = t),
      e.defaultValue = t
  }
  n = e.name,
  n !== "" && (e.name = ""),
  e.defaultChecked = !!e._wrapperState.initialChecked,
  n !== "" && (e.name = n)
}
function cs(e, t, n) {
  (t !== "number" || Ar(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var kn = Array.isArray;
function Xt(e, t, n, r) {
  if (e = e.options,
  t) {
      t = {};
      for (var l = 0; l < n.length; l++)
          t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
          l = t.hasOwnProperty("$" + e[n].value),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0)
  } else {
      for (n = "" + mt(n),
      t = null,
      l = 0; l < e.length; l++) {
          if (e[l].value === n) {
              e[l].selected = !0,
              r && (e[l].defaultSelected = !0);
              return
          }
          t !== null || e[l].disabled || (t = e[l])
      }
      t !== null && (t.selected = !0)
  }
}
function ds(e, t) {
  if (t.dangerouslySetInnerHTML != null)
      throw Error(j(91));
  return H({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
  })
}
function qi(e, t) {
  var n = t.value;
  if (n == null) {
      if (n = t.children,
      t = t.defaultValue,
      n != null) {
          if (t != null)
              throw Error(j(92));
          if (kn(n)) {
              if (1 < n.length)
                  throw Error(j(93));
              n = n[0]
          }
          t = n
      }
      t == null && (t = ""),
      n = t
  }
  e._wrapperState = {
      initialValue: mt(n)
  }
}
function Ia(e, t) {
  var n = mt(t.value)
    , r = mt(t.defaultValue);
  n != null && (n = "" + n,
  n !== e.value && (e.value = n),
  t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
  r != null && (e.defaultValue = "" + r)
}
function eo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function La(e) {
  switch (e) {
  case "svg":
      return "http://www.w3.org/2000/svg";
  case "math":
      return "http://www.w3.org/1998/Math/MathML";
  default:
      return "http://www.w3.org/1999/xhtml"
  }
}
function fs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? La(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var cr, za = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
          return e(t, n, r, l)
      })
  }
  : e
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
      e.innerHTML = t;
  else {
      for (cr = cr || document.createElement("div"),
      cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
      t = cr.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
      for (; t.firstChild; )
          e.appendChild(t.firstChild)
  }
});
function An(e, t) {
  if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return
      }
  }
  e.textContent = t
}
var _n = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}
, jd = ["Webkit", "ms", "Moz", "O"];
Object.keys(_n).forEach(function(e) {
  jd.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1),
      _n[t] = _n[e]
  })
});
function Ma(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || _n.hasOwnProperty(e) && _n[e] ? ("" + t).trim() : t + "px"
}
function Da(e, t) {
  e = e.style;
  for (var n in t)
      if (t.hasOwnProperty(n)) {
          var r = n.indexOf("--") === 0
            , l = Ma(n, t[n], r);
          n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : e[n] = l
      }
}
var Nd = H({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});
function ps(e, t) {
  if (t) {
      if (Nd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(j(137, e));
      if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
              throw Error(j(60));
          if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
              throw Error(j(61))
      }
      if (t.style != null && typeof t.style != "object")
          throw Error(j(62))
  }
}
function ms(e, t) {
  if (e.indexOf("-") === -1)
      return typeof t.is == "string";
  switch (e) {
  case "annotation-xml":
  case "color-profile":
  case "font-face":
  case "font-face-src":
  case "font-face-uri":
  case "font-face-format":
  case "font-face-name":
  case "missing-glyph":
      return !1;
  default:
      return !0
  }
}
var hs = null;
function ii(e) {
  return e = e.target || e.srcElement || window,
  e.correspondingUseElement && (e = e.correspondingUseElement),
  e.nodeType === 3 ? e.parentNode : e
}
var gs = null
, Gt = null
, Zt = null;
function to(e) {
  if (e = rr(e)) {
      if (typeof gs != "function")
          throw Error(j(280));
      var t = e.stateNode;
      t && (t = fl(t),
      gs(e.stateNode, e.type, t))
  }
}
function Ra(e) {
  Gt ? Zt ? Zt.push(e) : Zt = [e] : Gt = e
}
function Oa() {
  if (Gt) {
      var e = Gt
        , t = Zt;
      if (Zt = Gt = null,
      to(e),
      t)
          for (e = 0; e < t.length; e++)
              to(t[e])
  }
}
function Aa(e, t) {
  return e(t)
}
function Ua() {}
var Dl = !1;
function $a(e, t, n) {
  if (Dl)
      return e(t, n);
  Dl = !0;
  try {
      return Aa(e, t, n)
  } finally {
      Dl = !1,
      (Gt !== null || Zt !== null) && (Ua(),
      Oa())
  }
}
function Un(e, t) {
  var n = e.stateNode;
  if (n === null)
      return null;
  var r = fl(n);
  if (r === null)
      return null;
  n = r[t];
  e: switch (t) {
  case "onClick":
  case "onClickCapture":
  case "onDoubleClick":
  case "onDoubleClickCapture":
  case "onMouseDown":
  case "onMouseDownCapture":
  case "onMouseMove":
  case "onMouseMoveCapture":
  case "onMouseUp":
  case "onMouseUpCapture":
  case "onMouseEnter":
      (r = !r.disabled) || (e = e.type,
      r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
      e = !r;
      break e;
  default:
      e = !1
  }
  if (e)
      return null;
  if (n && typeof n != "function")
      throw Error(j(231, t, typeof n));
  return n
}
var vs = !1;
if (Ye)
  try {
      var gn = {};
      Object.defineProperty(gn, "passive", {
          get: function() {
              vs = !0
          }
      }),
      window.addEventListener("test", gn, gn),
      window.removeEventListener("test", gn, gn)
  } catch {
      vs = !1
  }
function Sd(e, t, n, r, l, s, o, a, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
      t.apply(n, d)
  } catch (g) {
      this.onError(g)
  }
}
var Tn = !1
, Ur = null
, $r = !1
, ys = null
, kd = {
  onError: function(e) {
      Tn = !0,
      Ur = e
  }
};
function Ed(e, t, n, r, l, s, o, a, u) {
  Tn = !1,
  Ur = null,
  Sd.apply(kd, arguments)
}
function Cd(e, t, n, r, l, s, o, a, u) {
  if (Ed.apply(this, arguments),
  Tn) {
      if (Tn) {
          var d = Ur;
          Tn = !1,
          Ur = null
      } else
          throw Error(j(198));
      $r || ($r = !0,
      ys = d)
  }
}
function Dt(e) {
  var t = e
    , n = e;
  if (e.alternate)
      for (; t.return; )
          t = t.return;
  else {
      e = t;
      do
          t = e,
          t.flags & 4098 && (n = t.return),
          e = t.return;
      while (e)
  }
  return t.tag === 3 ? n : null
}
function Fa(e) {
  if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate,
      e !== null && (t = e.memoizedState)),
      t !== null)
          return t.dehydrated
  }
  return null
}
function no(e) {
  if (Dt(e) !== e)
      throw Error(j(188))
}
function _d(e) {
  var t = e.alternate;
  if (!t) {
      if (t = Dt(e),
      t === null)
          throw Error(j(188));
      return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null)
          break;
      var s = l.alternate;
      if (s === null) {
          if (r = l.return,
          r !== null) {
              n = r;
              continue
          }
          break
      }
      if (l.child === s.child) {
          for (s = l.child; s; ) {
              if (s === n)
                  return no(l),
                  e;
              if (s === r)
                  return no(l),
                  t;
              s = s.sibling
          }
          throw Error(j(188))
      }
      if (n.return !== r.return)
          n = l,
          r = s;
      else {
          for (var o = !1, a = l.child; a; ) {
              if (a === n) {
                  o = !0,
                  n = l,
                  r = s;
                  break
              }
              if (a === r) {
                  o = !0,
                  r = l,
                  n = s;
                  break
              }
              a = a.sibling
          }
          if (!o) {
              for (a = s.child; a; ) {
                  if (a === n) {
                      o = !0,
                      n = s,
                      r = l;
                      break
                  }
                  if (a === r) {
                      o = !0,
                      r = s,
                      n = l;
                      break
                  }
                  a = a.sibling
              }
              if (!o)
                  throw Error(j(189))
          }
      }
      if (n.alternate !== r)
          throw Error(j(190))
  }
  if (n.tag !== 3)
      throw Error(j(188));
  return n.stateNode.current === n ? e : t
}
function Va(e) {
  return e = _d(e),
  e !== null ? Ha(e) : null
}
function Ha(e) {
  if (e.tag === 5 || e.tag === 6)
      return e;
  for (e = e.child; e !== null; ) {
      var t = Ha(e);
      if (t !== null)
          return t;
      e = e.sibling
  }
  return null
}
var Ba = xe.unstable_scheduleCallback
, ro = xe.unstable_cancelCallback
, Td = xe.unstable_shouldYield
, Pd = xe.unstable_requestPaint
, Y = xe.unstable_now
, Id = xe.unstable_getCurrentPriorityLevel
, oi = xe.unstable_ImmediatePriority
, Wa = xe.unstable_UserBlockingPriority
, Fr = xe.unstable_NormalPriority
, Ld = xe.unstable_LowPriority
, Qa = xe.unstable_IdlePriority
, al = null
, $e = null;
function zd(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
      try {
          $e.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128)
      } catch {}
}
var Me = Math.clz32 ? Math.clz32 : Rd
, Md = Math.log
, Dd = Math.LN2;
function Rd(e) {
  return e >>>= 0,
  e === 0 ? 32 : 31 - (Md(e) / Dd | 0) | 0
}
var dr = 64
, fr = 4194304;
function En(e) {
  switch (e & -e) {
  case 1:
      return 1;
  case 2:
      return 2;
  case 4:
      return 4;
  case 8:
      return 8;
  case 16:
      return 16;
  case 32:
      return 32;
  case 64:
  case 128:
  case 256:
  case 512:
  case 1024:
  case 2048:
  case 4096:
  case 8192:
  case 16384:
  case 32768:
  case 65536:
  case 131072:
  case 262144:
  case 524288:
  case 1048576:
  case 2097152:
      return e & 4194240;
  case 4194304:
  case 8388608:
  case 16777216:
  case 33554432:
  case 67108864:
      return e & 130023424;
  case 134217728:
      return 134217728;
  case 268435456:
      return 268435456;
  case 536870912:
      return 536870912;
  case 1073741824:
      return 1073741824;
  default:
      return e
  }
}
function Vr(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
      return 0;
  var r = 0
    , l = e.suspendedLanes
    , s = e.pingedLanes
    , o = n & 268435455;
  if (o !== 0) {
      var a = o & ~l;
      a !== 0 ? r = En(a) : (s &= o,
      s !== 0 && (r = En(s)))
  } else
      o = n & ~l,
      o !== 0 ? r = En(o) : s !== 0 && (r = En(s));
  if (r === 0)
      return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
  s = t & -t,
  l >= s || l === 16 && (s & 4194240) !== 0))
      return t;
  if (r & 4 && (r |= n & 16),
  t = e.entangledLanes,
  t !== 0)
      for (e = e.entanglements,
      t &= r; 0 < t; )
          n = 31 - Me(t),
          l = 1 << n,
          r |= e[n],
          t &= ~l;
  return r
}
function Od(e, t) {
  switch (e) {
  case 1:
  case 2:
  case 4:
      return t + 250;
  case 8:
  case 16:
  case 32:
  case 64:
  case 128:
  case 256:
  case 512:
  case 1024:
  case 2048:
  case 4096:
  case 8192:
  case 16384:
  case 32768:
  case 65536:
  case 131072:
  case 262144:
  case 524288:
  case 1048576:
  case 2097152:
      return t + 5e3;
  case 4194304:
  case 8388608:
  case 16777216:
  case 33554432:
  case 67108864:
      return -1;
  case 134217728:
  case 268435456:
  case 536870912:
  case 1073741824:
      return -1;
  default:
      return -1
  }
}
function Ad(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
      var o = 31 - Me(s)
        , a = 1 << o
        , u = l[o];
      u === -1 ? (!(a & n) || a & r) && (l[o] = Od(a, t)) : u <= t && (e.expiredLanes |= a),
      s &= ~a
  }
}
function xs(e) {
  return e = e.pendingLanes & -1073741825,
  e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Ka() {
  var e = dr;
  return dr <<= 1,
  !(dr & 4194240) && (dr = 64),
  e
}
function Rl(e) {
  for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
  return t
}
function tr(e, t, n) {
  e.pendingLanes |= t,
  t !== 536870912 && (e.suspendedLanes = 0,
  e.pingedLanes = 0),
  e = e.eventTimes,
  t = 31 - Me(t),
  e[t] = n
}
function Ud(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t,
  e.suspendedLanes = 0,
  e.pingedLanes = 0,
  e.expiredLanes &= t,
  e.mutableReadLanes &= t,
  e.entangledLanes &= t,
  t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Me(n)
        , s = 1 << l;
      t[l] = 0,
      r[l] = -1,
      e[l] = -1,
      n &= ~s
  }
}
function ai(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
      var r = 31 - Me(n)
        , l = 1 << r;
      l & t | e[r] & t && (e[r] |= t),
      n &= ~l
  }
}
var R = 0;
function Ya(e) {
  return e &= -e,
  1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Xa, ui, Ga, Za, Ja, ws = !1, pr = [], it = null, ot = null, at = null, $n = new Map, Fn = new Map, nt = [], $d = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function lo(e, t) {
  switch (e) {
  case "focusin":
  case "focusout":
      it = null;
      break;
  case "dragenter":
  case "dragleave":
      ot = null;
      break;
  case "mouseover":
  case "mouseout":
      at = null;
      break;
  case "pointerover":
  case "pointerout":
      $n.delete(t.pointerId);
      break;
  case "gotpointercapture":
  case "lostpointercapture":
      Fn.delete(t.pointerId)
  }
}
function vn(e, t, n, r, l, s) {
  return e === null || e.nativeEvent !== s ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: s,
      targetContainers: [l]
  },
  t !== null && (t = rr(t),
  t !== null && ui(t)),
  e) : (e.eventSystemFlags |= r,
  t = e.targetContainers,
  l !== null && t.indexOf(l) === -1 && t.push(l),
  e)
}
function Fd(e, t, n, r, l) {
  switch (t) {
  case "focusin":
      return it = vn(it, e, t, n, r, l),
      !0;
  case "dragenter":
      return ot = vn(ot, e, t, n, r, l),
      !0;
  case "mouseover":
      return at = vn(at, e, t, n, r, l),
      !0;
  case "pointerover":
      var s = l.pointerId;
      return $n.set(s, vn($n.get(s) || null, e, t, n, r, l)),
      !0;
  case "gotpointercapture":
      return s = l.pointerId,
      Fn.set(s, vn(Fn.get(s) || null, e, t, n, r, l)),
      !0
  }
  return !1
}
function ba(e) {
  var t = St(e.target);
  if (t !== null) {
      var n = Dt(t);
      if (n !== null) {
          if (t = n.tag,
          t === 13) {
              if (t = Fa(n),
              t !== null) {
                  e.blockedOn = t,
                  Ja(e.priority, function() {
                      Ga(n)
                  });
                  return
              }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
              e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
              return
          }
      }
  }
  e.blockedOn = null
}
function _r(e) {
  if (e.blockedOn !== null)
      return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
      var n = js(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type,n);
          hs = r,
          n.target.dispatchEvent(r),
          hs = null
      } else
          return t = rr(n),
          t !== null && ui(t),
          e.blockedOn = n,
          !1;
      t.shift()
  }
  return !0
}
function so(e, t, n) {
  _r(e) && n.delete(t)
}
function Vd() {
  ws = !1,
  it !== null && _r(it) && (it = null),
  ot !== null && _r(ot) && (ot = null),
  at !== null && _r(at) && (at = null),
  $n.forEach(so),
  Fn.forEach(so)
}
function yn(e, t) {
  e.blockedOn === t && (e.blockedOn = null,
  ws || (ws = !0,
  xe.unstable_scheduleCallback(xe.unstable_NormalPriority, Vd)))
}
function Vn(e) {
  function t(l) {
      return yn(l, e)
  }
  if (0 < pr.length) {
      yn(pr[0], e);
      for (var n = 1; n < pr.length; n++) {
          var r = pr[n];
          r.blockedOn === e && (r.blockedOn = null)
      }
  }
  for (it !== null && yn(it, e),
  ot !== null && yn(ot, e),
  at !== null && yn(at, e),
  $n.forEach(t),
  Fn.forEach(t),
  n = 0; n < nt.length; n++)
      r = nt[n],
      r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nt.length && (n = nt[0],
  n.blockedOn === null); )
      ba(n),
      n.blockedOn === null && nt.shift()
}
var Jt = be.ReactCurrentBatchConfig
, Hr = !0;
function Hd(e, t, n, r) {
  var l = R
    , s = Jt.transition;
  Jt.transition = null;
  try {
      R = 1,
      ci(e, t, n, r)
  } finally {
      R = l,
      Jt.transition = s
  }
}
function Bd(e, t, n, r) {
  var l = R
    , s = Jt.transition;
  Jt.transition = null;
  try {
      R = 4,
      ci(e, t, n, r)
  } finally {
      R = l,
      Jt.transition = s
  }
}
function ci(e, t, n, r) {
  if (Hr) {
      var l = js(e, t, n, r);
      if (l === null)
          Ql(e, t, r, Br, n),
          lo(e, r);
      else if (Fd(l, e, t, n, r))
          r.stopPropagation();
      else if (lo(e, r),
      t & 4 && -1 < $d.indexOf(e)) {
          for (; l !== null; ) {
              var s = rr(l);
              if (s !== null && Xa(s),
              s = js(e, t, n, r),
              s === null && Ql(e, t, r, Br, n),
              s === l)
                  break;
              l = s
          }
          l !== null && r.stopPropagation()
      } else
          Ql(e, t, r, null, n)
  }
}
var Br = null;
function js(e, t, n, r) {
  if (Br = null,
  e = ii(r),
  e = St(e),
  e !== null)
      if (t = Dt(e),
      t === null)
          e = null;
      else if (n = t.tag,
      n === 13) {
          if (e = Fa(t),
          e !== null)
              return e;
          e = null
      } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null
      } else
          t !== e && (e = null);
  return Br = e,
  null
}
function qa(e) {
  switch (e) {
  case "cancel":
  case "click":
  case "close":
  case "contextmenu":
  case "copy":
  case "cut":
  case "auxclick":
  case "dblclick":
  case "dragend":
  case "dragstart":
  case "drop":
  case "focusin":
  case "focusout":
  case "input":
  case "invalid":
  case "keydown":
  case "keypress":
  case "keyup":
  case "mousedown":
  case "mouseup":
  case "paste":
  case "pause":
  case "play":
  case "pointercancel":
  case "pointerdown":
  case "pointerup":
  case "ratechange":
  case "reset":
  case "resize":
  case "seeked":
  case "submit":
  case "touchcancel":
  case "touchend":
  case "touchstart":
  case "volumechange":
  case "change":
  case "selectionchange":
  case "textInput":
  case "compositionstart":
  case "compositionend":
  case "compositionupdate":
  case "beforeblur":
  case "afterblur":
  case "beforeinput":
  case "blur":
  case "fullscreenchange":
  case "focus":
  case "hashchange":
  case "popstate":
  case "select":
  case "selectstart":
      return 1;
  case "drag":
  case "dragenter":
  case "dragexit":
  case "dragleave":
  case "dragover":
  case "mousemove":
  case "mouseout":
  case "mouseover":
  case "pointermove":
  case "pointerout":
  case "pointerover":
  case "scroll":
  case "toggle":
  case "touchmove":
  case "wheel":
  case "mouseenter":
  case "mouseleave":
  case "pointerenter":
  case "pointerleave":
      return 4;
  case "message":
      switch (Id()) {
      case oi:
          return 1;
      case Wa:
          return 4;
      case Fr:
      case Ld:
          return 16;
      case Qa:
          return 536870912;
      default:
          return 16
      }
  default:
      return 16
  }
}
var lt = null
, di = null
, Tr = null;
function eu() {
  if (Tr)
      return Tr;
  var e, t = di, n = t.length, r, l = "value"in lt ? lt.value : lt.textContent, s = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
      ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[s - r]; r++)
      ;
  return Tr = l.slice(e, 1 < r ? 1 - r : void 0)
}
function Pr(e) {
  var t = e.keyCode;
  return "charCode"in e ? (e = e.charCode,
  e === 0 && t === 13 && (e = 13)) : e = t,
  e === 10 && (e = 13),
  32 <= e || e === 13 ? e : 0
}
function mr() {
  return !0
}
function io() {
  return !1
}
function je(e) {
  function t(n, r, l, s, o) {
      this._reactName = n,
      this._targetInst = l,
      this.type = r,
      this.nativeEvent = s,
      this.target = o,
      this.currentTarget = null;
      for (var a in e)
          e.hasOwnProperty(a) && (n = e[a],
          this[a] = n ? n(s) : s[a]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? mr : io,
      this.isPropagationStopped = io,
      this
  }
  return H(t.prototype, {
      preventDefault: function() {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          this.isDefaultPrevented = mr)
      },
      stopPropagation: function() {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          this.isPropagationStopped = mr)
      },
      persist: function() {},
      isPersistent: mr
  }),
  t
}
var cn = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function(e) {
      return e.timeStamp || Date.now()
  },
  defaultPrevented: 0,
  isTrusted: 0
}, fi = je(cn), nr = H({}, cn, {
  view: 0,
  detail: 0
}), Wd = je(nr), Ol, Al, xn, ul = H({}, nr, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: pi,
  button: 0,
  buttons: 0,
  relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
  },
  movementX: function(e) {
      return "movementX"in e ? e.movementX : (e !== xn && (xn && e.type === "mousemove" ? (Ol = e.screenX - xn.screenX,
      Al = e.screenY - xn.screenY) : Al = Ol = 0,
      xn = e),
      Ol)
  },
  movementY: function(e) {
      return "movementY"in e ? e.movementY : Al
  }
}), oo = je(ul), Qd = H({}, ul, {
  dataTransfer: 0
}), Kd = je(Qd), Yd = H({}, nr, {
  relatedTarget: 0
}), Ul = je(Yd), Xd = H({}, cn, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}), Gd = je(Xd), Zd = H({}, cn, {
  clipboardData: function(e) {
      return "clipboardData"in e ? e.clipboardData : window.clipboardData
  }
}), Jd = je(Zd), bd = H({}, cn, {
  data: 0
}), ao = je(bd), qd = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, ef = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, tf = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
function nf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = tf[e]) ? !!t[e] : !1
}
function pi() {
  return nf
}
var rf = H({}, nr, {
  key: function(e) {
      if (e.key) {
          var t = qd[e.key] || e.key;
          if (t !== "Unidentified")
              return t
      }
      return e.type === "keypress" ? (e = Pr(e),
      e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ef[e.keyCode] || "Unidentified" : ""
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: pi,
  charCode: function(e) {
      return e.type === "keypress" ? Pr(e) : 0
  },
  keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
  },
  which: function(e) {
      return e.type === "keypress" ? Pr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
  }
})
, lf = je(rf)
, sf = H({}, ul, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0
})
, uo = je(sf)
, of = H({}, nr, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: pi
})
, af = je(of)
, uf = H({}, cn, {
  propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0
})
, cf = je(uf)
, df = H({}, ul, {
  deltaX: function(e) {
      return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
  },
  deltaY: function(e) {
      return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
  },
  deltaZ: 0,
  deltaMode: 0
})
, ff = je(df)
, pf = [9, 13, 27, 32]
, mi = Ye && "CompositionEvent"in window
, Pn = null;
Ye && "documentMode"in document && (Pn = document.documentMode);
var mf = Ye && "TextEvent"in window && !Pn
, tu = Ye && (!mi || Pn && 8 < Pn && 11 >= Pn)
, co = " "
, fo = !1;
function nu(e, t) {
  switch (e) {
  case "keyup":
      return pf.indexOf(t.keyCode) !== -1;
  case "keydown":
      return t.keyCode !== 229;
  case "keypress":
  case "mousedown":
  case "focusout":
      return !0;
  default:
      return !1
  }
}
function ru(e) {
  return e = e.detail,
  typeof e == "object" && "data"in e ? e.data : null
}
var Ut = !1;
function hf(e, t) {
  switch (e) {
  case "compositionend":
      return ru(t);
  case "keypress":
      return t.which !== 32 ? null : (fo = !0,
      co);
  case "textInput":
      return e = t.data,
      e === co && fo ? null : e;
  default:
      return null
  }
}
function gf(e, t) {
  if (Ut)
      return e === "compositionend" || !mi && nu(e, t) ? (e = eu(),
      Tr = di = lt = null,
      Ut = !1,
      e) : null;
  switch (e) {
  case "paste":
      return null;
  case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
              return t.char;
          if (t.which)
              return String.fromCharCode(t.which)
      }
      return null;
  case "compositionend":
      return tu && t.locale !== "ko" ? null : t.data;
  default:
      return null
  }
}
var vf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function po(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vf[e.type] : t === "textarea"
}
function lu(e, t, n, r) {
  Ra(r),
  t = Wr(t, "onChange"),
  0 < t.length && (n = new fi("onChange","change",null,n,r),
  e.push({
      event: n,
      listeners: t
  }))
}
var In = null
, Hn = null;
function yf(e) {
  hu(e, 0)
}
function cl(e) {
  var t = Vt(e);
  if (Ta(t))
      return e
}
function xf(e, t) {
  if (e === "change")
      return t
}
var su = !1;
if (Ye) {
  var $l;
  if (Ye) {
      var Fl = "oninput"in document;
      if (!Fl) {
          var mo = document.createElement("div");
          mo.setAttribute("oninput", "return;"),
          Fl = typeof mo.oninput == "function"
      }
      $l = Fl
  } else
      $l = !1;
  su = $l && (!document.documentMode || 9 < document.documentMode)
}
function ho() {
  In && (In.detachEvent("onpropertychange", iu),
  Hn = In = null)
}
function iu(e) {
  if (e.propertyName === "value" && cl(Hn)) {
      var t = [];
      lu(t, Hn, e, ii(e)),
      $a(yf, t)
  }
}
function wf(e, t, n) {
  e === "focusin" ? (ho(),
  In = t,
  Hn = n,
  In.attachEvent("onpropertychange", iu)) : e === "focusout" && ho()
}
function jf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return cl(Hn)
}
function Nf(e, t) {
  if (e === "click")
      return cl(t)
}
function Sf(e, t) {
  if (e === "input" || e === "change")
      return cl(t)
}
function kf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Re = typeof Object.is == "function" ? Object.is : kf;
function Bn(e, t) {
  if (Re(e, t))
      return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
  var n = Object.keys(e)
    , r = Object.keys(t);
  if (n.length !== r.length)
      return !1;
  for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!rs.call(t, l) || !Re(e[l], t[l]))
          return !1
  }
  return !0
}
function go(e) {
  for (; e && e.firstChild; )
      e = e.firstChild;
  return e
}
function vo(e, t) {
  var n = go(e);
  e = 0;
  for (var r; n; ) {
      if (n.nodeType === 3) {
          if (r = e + n.textContent.length,
          e <= t && r >= t)
              return {
                  node: n,
                  offset: t - e
              };
          e = r
      }
      e: {
          for (; n; ) {
              if (n.nextSibling) {
                  n = n.nextSibling;
                  break e
              }
              n = n.parentNode
          }
          n = void 0
      }
      n = go(n)
  }
}
function ou(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ou(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function au() {
  for (var e = window, t = Ar(); t instanceof e.HTMLIFrameElement; ) {
      try {
          var n = typeof t.contentWindow.location.href == "string"
      } catch {
          n = !1
      }
      if (n)
          e = t.contentWindow;
      else
          break;
      t = Ar(e.document)
  }
  return t
}
function hi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Ef(e) {
  var t = au()
    , n = e.focusedElem
    , r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ou(n.ownerDocument.documentElement, n)) {
      if (r !== null && hi(n)) {
          if (t = r.start,
          e = r.end,
          e === void 0 && (e = t),
          "selectionStart"in n)
              n.selectionStart = t,
              n.selectionEnd = Math.min(e, n.value.length);
          else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
          e.getSelection) {
              e = e.getSelection();
              var l = n.textContent.length
                , s = Math.min(r.start, l);
              r = r.end === void 0 ? s : Math.min(r.end, l),
              !e.extend && s > r && (l = r,
              r = s,
              s = l),
              l = vo(n, s);
              var o = vo(n, r);
              l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
              t.setStart(l.node, l.offset),
              e.removeAllRanges(),
              s > r ? (e.addRange(t),
              e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
              e.addRange(t)))
          }
      }
      for (t = [],
      e = n; e = e.parentNode; )
          e.nodeType === 1 && t.push({
              element: e,
              left: e.scrollLeft,
              top: e.scrollTop
          });
      for (typeof n.focus == "function" && n.focus(),
      n = 0; n < t.length; n++)
          e = t[n],
          e.element.scrollLeft = e.left,
          e.element.scrollTop = e.top
  }
}
var Cf = Ye && "documentMode"in document && 11 >= document.documentMode
, $t = null
, Ns = null
, Ln = null
, Ss = !1;
function yo(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ss || $t == null || $t !== Ar(r) || (r = $t,
  "selectionStart"in r && hi(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
  } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
  r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
  }),
  Ln && Bn(Ln, r) || (Ln = r,
  r = Wr(Ns, "onSelect"),
  0 < r.length && (t = new fi("onSelect","select",null,t,n),
  e.push({
      event: t,
      listeners: r
  }),
  t.target = $t)))
}
function hr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(),
  n["Webkit" + e] = "webkit" + t,
  n["Moz" + e] = "moz" + t,
  n
}
var Ft = {
  animationend: hr("Animation", "AnimationEnd"),
  animationiteration: hr("Animation", "AnimationIteration"),
  animationstart: hr("Animation", "AnimationStart"),
  transitionend: hr("Transition", "TransitionEnd")
}
, Vl = {}
, uu = {};
Ye && (uu = document.createElement("div").style,
"AnimationEvent"in window || (delete Ft.animationend.animation,
delete Ft.animationiteration.animation,
delete Ft.animationstart.animation),
"TransitionEvent"in window || delete Ft.transitionend.transition);
function dl(e) {
  if (Vl[e])
      return Vl[e];
  if (!Ft[e])
      return e;
  var t = Ft[e], n;
  for (n in t)
      if (t.hasOwnProperty(n) && n in uu)
          return Vl[e] = t[n];
  return e
}
var cu = dl("animationend")
, du = dl("animationiteration")
, fu = dl("animationstart")
, pu = dl("transitionend")
, mu = new Map
, xo = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function gt(e, t) {
  mu.set(e, t),
  Mt(t, [e])
}
for (var Hl = 0; Hl < xo.length; Hl++) {
  var Bl = xo[Hl]
    , _f = Bl.toLowerCase()
    , Tf = Bl[0].toUpperCase() + Bl.slice(1);
  gt(_f, "on" + Tf)
}
gt(cu, "onAnimationEnd");
gt(du, "onAnimationIteration");
gt(fu, "onAnimationStart");
gt("dblclick", "onDoubleClick");
gt("focusin", "onFocus");
gt("focusout", "onBlur");
gt(pu, "onTransitionEnd");
en("onMouseEnter", ["mouseout", "mouseover"]);
en("onMouseLeave", ["mouseout", "mouseover"]);
en("onPointerEnter", ["pointerout", "pointerover"]);
en("onPointerLeave", ["pointerout", "pointerover"]);
Mt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Cn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
, Pf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));
function wo(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n,
  Cd(r, t, void 0, e),
  e.currentTarget = null
}
function hu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
      var r = e[n]
        , l = r.event;
      r = r.listeners;
      e: {
          var s = void 0;
          if (t)
              for (var o = r.length - 1; 0 <= o; o--) {
                  var a = r[o]
                    , u = a.instance
                    , d = a.currentTarget;
                  if (a = a.listener,
                  u !== s && l.isPropagationStopped())
                      break e;
                  wo(l, a, d),
                  s = u
              }
          else
              for (o = 0; o < r.length; o++) {
                  if (a = r[o],
                  u = a.instance,
                  d = a.currentTarget,
                  a = a.listener,
                  u !== s && l.isPropagationStopped())
                      break e;
                  wo(l, a, d),
                  s = u
              }
      }
  }
  if ($r)
      throw e = ys,
      $r = !1,
      ys = null,
      e
}
function A(e, t) {
  var n = t[Ts];
  n === void 0 && (n = t[Ts] = new Set);
  var r = e + "__bubble";
  n.has(r) || (gu(t, e, 2, !1),
  n.add(r))
}
function Wl(e, t, n) {
  var r = 0;
  t && (r |= 4),
  gu(n, e, r, t)
}
var gr = "_reactListening" + Math.random().toString(36).slice(2);
function Wn(e) {
  if (!e[gr]) {
      e[gr] = !0,
      Sa.forEach(function(n) {
          n !== "selectionchange" && (Pf.has(n) || Wl(n, !1, e),
          Wl(n, !0, e))
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[gr] || (t[gr] = !0,
      Wl("selectionchange", !1, t))
  }
}
function gu(e, t, n, r) {
  switch (qa(t)) {
  case 1:
      var l = Hd;
      break;
  case 4:
      l = Bd;
      break;
  default:
      l = ci
  }
  n = l.bind(null, t, n, e),
  l = void 0,
  !vs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
  r ? l !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: l
  }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
  }) : e.addEventListener(t, n, !1)
}
function Ql(e, t, n, r, l) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
      e: for (; ; ) {
          if (r === null)
              return;
          var o = r.tag;
          if (o === 3 || o === 4) {
              var a = r.stateNode.containerInfo;
              if (a === l || a.nodeType === 8 && a.parentNode === l)
                  break;
              if (o === 4)
                  for (o = r.return; o !== null; ) {
                      var u = o.tag;
                      if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo,
                      u === l || u.nodeType === 8 && u.parentNode === l))
                          return;
                      o = o.return
                  }
              for (; a !== null; ) {
                  if (o = St(a),
                  o === null)
                      return;
                  if (u = o.tag,
                  u === 5 || u === 6) {
                      r = s = o;
                      continue e
                  }
                  a = a.parentNode
              }
          }
          r = r.return
      }
  $a(function() {
      var d = s
        , g = ii(n)
        , h = [];
      e: {
          var m = mu.get(e);
          if (m !== void 0) {
              var y = fi
                , x = e;
              switch (e) {
              case "keypress":
                  if (Pr(n) === 0)
                      break e;
              case "keydown":
              case "keyup":
                  y = lf;
                  break;
              case "focusin":
                  x = "focus",
                  y = Ul;
                  break;
              case "focusout":
                  x = "blur",
                  y = Ul;
                  break;
              case "beforeblur":
              case "afterblur":
                  y = Ul;
                  break;
              case "click":
                  if (n.button === 2)
                      break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                  y = oo;
                  break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                  y = Kd;
                  break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                  y = af;
                  break;
              case cu:
              case du:
              case fu:
                  y = Gd;
                  break;
              case pu:
                  y = cf;
                  break;
              case "scroll":
                  y = Wd;
                  break;
              case "wheel":
                  y = ff;
                  break;
              case "copy":
              case "cut":
              case "paste":
                  y = Jd;
                  break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                  y = uo
              }
              var v = (t & 4) !== 0
                , N = !v && e === "scroll"
                , f = v ? m !== null ? m + "Capture" : null : m;
              v = [];
              for (var c = d, p; c !== null; ) {
                  p = c;
                  var w = p.stateNode;
                  if (p.tag === 5 && w !== null && (p = w,
                  f !== null && (w = Un(c, f),
                  w != null && v.push(Qn(c, w, p)))),
                  N)
                      break;
                  c = c.return
              }
              0 < v.length && (m = new y(m,x,null,n,g),
              h.push({
                  event: m,
                  listeners: v
              }))
          }
      }
      if (!(t & 7)) {
          e: {
              if (m = e === "mouseover" || e === "pointerover",
              y = e === "mouseout" || e === "pointerout",
              m && n !== hs && (x = n.relatedTarget || n.fromElement) && (St(x) || x[Xe]))
                  break e;
              if ((y || m) && (m = g.window === g ? g : (m = g.ownerDocument) ? m.defaultView || m.parentWindow : window,
              y ? (x = n.relatedTarget || n.toElement,
              y = d,
              x = x ? St(x) : null,
              x !== null && (N = Dt(x),
              x !== N || x.tag !== 5 && x.tag !== 6) && (x = null)) : (y = null,
              x = d),
              y !== x)) {
                  if (v = oo,
                  w = "onMouseLeave",
                  f = "onMouseEnter",
                  c = "mouse",
                  (e === "pointerout" || e === "pointerover") && (v = uo,
                  w = "onPointerLeave",
                  f = "onPointerEnter",
                  c = "pointer"),
                  N = y == null ? m : Vt(y),
                  p = x == null ? m : Vt(x),
                  m = new v(w,c + "leave",y,n,g),
                  m.target = N,
                  m.relatedTarget = p,
                  w = null,
                  St(g) === d && (v = new v(f,c + "enter",x,n,g),
                  v.target = p,
                  v.relatedTarget = N,
                  w = v),
                  N = w,
                  y && x)
                      t: {
                          for (v = y,
                          f = x,
                          c = 0,
                          p = v; p; p = Rt(p))
                              c++;
                          for (p = 0,
                          w = f; w; w = Rt(w))
                              p++;
                          for (; 0 < c - p; )
                              v = Rt(v),
                              c--;
                          for (; 0 < p - c; )
                              f = Rt(f),
                              p--;
                          for (; c--; ) {
                              if (v === f || f !== null && v === f.alternate)
                                  break t;
                              v = Rt(v),
                              f = Rt(f)
                          }
                          v = null
                      }
                  else
                      v = null;
                  y !== null && jo(h, m, y, v, !1),
                  x !== null && N !== null && jo(h, N, x, v, !0)
              }
          }
          e: {
              if (m = d ? Vt(d) : window,
              y = m.nodeName && m.nodeName.toLowerCase(),
              y === "select" || y === "input" && m.type === "file")
                  var S = xf;
              else if (po(m))
                  if (su)
                      S = Sf;
                  else {
                      S = jf;
                      var C = wf
                  }
              else
                  (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (S = Nf);
              if (S && (S = S(e, d))) {
                  lu(h, S, n, g);
                  break e
              }
              C && C(e, m, d),
              e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && cs(m, "number", m.value)
          }
          switch (C = d ? Vt(d) : window,
          e) {
          case "focusin":
              (po(C) || C.contentEditable === "true") && ($t = C,
              Ns = d,
              Ln = null);
              break;
          case "focusout":
              Ln = Ns = $t = null;
              break;
          case "mousedown":
              Ss = !0;
              break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
              Ss = !1,
              yo(h, n, g);
              break;
          case "selectionchange":
              if (Cf)
                  break;
          case "keydown":
          case "keyup":
              yo(h, n, g)
          }
          var _;
          if (mi)
              e: {
                  switch (e) {
                  case "compositionstart":
                      var T = "onCompositionStart";
                      break e;
                  case "compositionend":
                      T = "onCompositionEnd";
                      break e;
                  case "compositionupdate":
                      T = "onCompositionUpdate";
                      break e
                  }
                  T = void 0
              }
          else
              Ut ? nu(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
          T && (tu && n.locale !== "ko" && (Ut || T !== "onCompositionStart" ? T === "onCompositionEnd" && Ut && (_ = eu()) : (lt = g,
          di = "value"in lt ? lt.value : lt.textContent,
          Ut = !0)),
          C = Wr(d, T),
          0 < C.length && (T = new ao(T,e,null,n,g),
          h.push({
              event: T,
              listeners: C
          }),
          _ ? T.data = _ : (_ = ru(n),
          _ !== null && (T.data = _)))),
          (_ = mf ? hf(e, n) : gf(e, n)) && (d = Wr(d, "onBeforeInput"),
          0 < d.length && (g = new ao("onBeforeInput","beforeinput",null,n,g),
          h.push({
              event: g,
              listeners: d
          }),
          g.data = _))
      }
      hu(h, t)
  })
}
function Qn(e, t, n) {
  return {
      instance: e,
      listener: t,
      currentTarget: n
  }
}
function Wr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e
        , s = l.stateNode;
      l.tag === 5 && s !== null && (l = s,
      s = Un(e, n),
      s != null && r.unshift(Qn(e, s, l)),
      s = Un(e, t),
      s != null && r.push(Qn(e, s, l))),
      e = e.return
  }
  return r
}
function Rt(e) {
  if (e === null)
      return null;
  do
      e = e.return;
  while (e && e.tag !== 5);
  return e || null
}
function jo(e, t, n, r, l) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
      var a = n
        , u = a.alternate
        , d = a.stateNode;
      if (u !== null && u === r)
          break;
      a.tag === 5 && d !== null && (a = d,
      l ? (u = Un(n, s),
      u != null && o.unshift(Qn(n, u, a))) : l || (u = Un(n, s),
      u != null && o.push(Qn(n, u, a)))),
      n = n.return
  }
  o.length !== 0 && e.push({
      event: t,
      listeners: o
  })
}
var If = /\r\n?/g
, Lf = /\u0000|\uFFFD/g;
function No(e) {
  return (typeof e == "string" ? e : "" + e).replace(If, `
`).replace(Lf, "")
}
function vr(e, t, n) {
  if (t = No(t),
  No(e) !== t && n)
      throw Error(j(425))
}
function Qr() {}
var ks = null
, Es = null;
function Cs(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var _s = typeof setTimeout == "function" ? setTimeout : void 0
, zf = typeof clearTimeout == "function" ? clearTimeout : void 0
, So = typeof Promise == "function" ? Promise : void 0
, Mf = typeof queueMicrotask == "function" ? queueMicrotask : typeof So < "u" ? function(e) {
  return So.resolve(null).then(e).catch(Df)
}
: _s;
function Df(e) {
  setTimeout(function() {
      throw e
  })
}
function Kl(e, t) {
  var n = t
    , r = 0;
  do {
      var l = n.nextSibling;
      if (e.removeChild(n),
      l && l.nodeType === 8)
          if (n = l.data,
          n === "/$") {
              if (r === 0) {
                  e.removeChild(l),
                  Vn(t);
                  return
              }
              r--
          } else
              n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l
  } while (n);
  Vn(t)
}
function ut(e) {
  for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3)
          break;
      if (t === 8) {
          if (t = e.data,
          t === "$" || t === "$!" || t === "$?")
              break;
          if (t === "/$")
              return null
      }
  }
  return e
}
function ko(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
      if (e.nodeType === 8) {
          var n = e.data;
          if (n === "$" || n === "$!" || n === "$?") {
              if (t === 0)
                  return e;
              t--
          } else
              n === "/$" && t++
      }
      e = e.previousSibling
  }
  return null
}
var dn = Math.random().toString(36).slice(2)
, Ue = "__reactFiber$" + dn
, Kn = "__reactProps$" + dn
, Xe = "__reactContainer$" + dn
, Ts = "__reactEvents$" + dn
, Rf = "__reactListeners$" + dn
, Of = "__reactHandles$" + dn;
function St(e) {
  var t = e[Ue];
  if (t)
      return t;
  for (var n = e.parentNode; n; ) {
      if (t = n[Xe] || n[Ue]) {
          if (n = t.alternate,
          t.child !== null || n !== null && n.child !== null)
              for (e = ko(e); e !== null; ) {
                  if (n = e[Ue])
                      return n;
                  e = ko(e)
              }
          return t
      }
      e = n,
      n = e.parentNode
  }
  return null
}
function rr(e) {
  return e = e[Ue] || e[Xe],
  !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Vt(e) {
  if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
  throw Error(j(33))
}
function fl(e) {
  return e[Kn] || null
}
var Ps = []
, Ht = -1;
function vt(e) {
  return {
      current: e
  }
}
function U(e) {
  0 > Ht || (e.current = Ps[Ht],
  Ps[Ht] = null,
  Ht--)
}
function O(e, t) {
  Ht++,
  Ps[Ht] = e.current,
  e.current = t
}
var ht = {}
, ie = vt(ht)
, pe = vt(!1)
, Tt = ht;
function tn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
      return ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, s;
  for (s in n)
      l[s] = t[s];
  return r && (e = e.stateNode,
  e.__reactInternalMemoizedUnmaskedChildContext = t,
  e.__reactInternalMemoizedMaskedChildContext = l),
  l
}
function me(e) {
  return e = e.childContextTypes,
  e != null
}
function Kr() {
  U(pe),
  U(ie)
}
function Eo(e, t, n) {
  if (ie.current !== ht)
      throw Error(j(168));
  O(ie, t),
  O(pe, n)
}
function vu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes,
  typeof r.getChildContext != "function")
      return n;
  r = r.getChildContext();
  for (var l in r)
      if (!(l in t))
          throw Error(j(108, xd(e) || "Unknown", l));
  return H({}, n, r)
}
function Yr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ht,
  Tt = ie.current,
  O(ie, e),
  O(pe, pe.current),
  !0
}
function Co(e, t, n) {
  var r = e.stateNode;
  if (!r)
      throw Error(j(169));
  n ? (e = vu(e, t, Tt),
  r.__reactInternalMemoizedMergedChildContext = e,
  U(pe),
  U(ie),
  O(ie, e)) : U(pe),
  O(pe, n)
}
var Be = null
, pl = !1
, Yl = !1;
function yu(e) {
  Be === null ? Be = [e] : Be.push(e)
}
function Af(e) {
  pl = !0,
  yu(e)
}
function yt() {
  if (!Yl && Be !== null) {
      Yl = !0;
      var e = 0
        , t = R;
      try {
          var n = Be;
          for (R = 1; e < n.length; e++) {
              var r = n[e];
              do
                  r = r(!0);
              while (r !== null)
          }
          Be = null,
          pl = !1
      } catch (l) {
          throw Be !== null && (Be = Be.slice(e + 1)),
          Ba(oi, yt),
          l
      } finally {
          R = t,
          Yl = !1
      }
  }
  return null
}
var Bt = []
, Wt = 0
, Xr = null
, Gr = 0
, Ne = []
, Se = 0
, Pt = null
, We = 1
, Qe = "";
function jt(e, t) {
  Bt[Wt++] = Gr,
  Bt[Wt++] = Xr,
  Xr = e,
  Gr = t
}
function xu(e, t, n) {
  Ne[Se++] = We,
  Ne[Se++] = Qe,
  Ne[Se++] = Pt,
  Pt = e;
  var r = We;
  e = Qe;
  var l = 32 - Me(r) - 1;
  r &= ~(1 << l),
  n += 1;
  var s = 32 - Me(t) + l;
  if (30 < s) {
      var o = l - l % 5;
      s = (r & (1 << o) - 1).toString(32),
      r >>= o,
      l -= o,
      We = 1 << 32 - Me(t) + l | n << l | r,
      Qe = s + e
  } else
      We = 1 << s | n << l | r,
      Qe = e
}
function gi(e) {
  e.return !== null && (jt(e, 1),
  xu(e, 1, 0))
}
function vi(e) {
  for (; e === Xr; )
      Xr = Bt[--Wt],
      Bt[Wt] = null,
      Gr = Bt[--Wt],
      Bt[Wt] = null;
  for (; e === Pt; )
      Pt = Ne[--Se],
      Ne[Se] = null,
      Qe = Ne[--Se],
      Ne[Se] = null,
      We = Ne[--Se],
      Ne[Se] = null
}
var ye = null
, ve = null
, $ = !1
, ze = null;
function wu(e, t) {
  var n = ke(5, null, null, 0);
  n.elementType = "DELETED",
  n.stateNode = t,
  n.return = e,
  t = e.deletions,
  t === null ? (e.deletions = [n],
  e.flags |= 16) : t.push(n)
}
function _o(e, t) {
  switch (e.tag) {
  case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
      t !== null ? (e.stateNode = t,
      ye = e,
      ve = ut(t.firstChild),
      !0) : !1;
  case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
      t !== null ? (e.stateNode = t,
      ye = e,
      ve = null,
      !0) : !1;
  case 13:
      return t = t.nodeType !== 8 ? null : t,
      t !== null ? (n = Pt !== null ? {
          id: We,
          overflow: Qe
      } : null,
      e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
      },
      n = ke(18, null, null, 0),
      n.stateNode = t,
      n.return = e,
      e.child = n,
      ye = e,
      ve = null,
      !0) : !1;
  default:
      return !1
  }
}
function Is(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ls(e) {
  if ($) {
      var t = ve;
      if (t) {
          var n = t;
          if (!_o(e, t)) {
              if (Is(e))
                  throw Error(j(418));
              t = ut(n.nextSibling);
              var r = ye;
              t && _o(e, t) ? wu(r, n) : (e.flags = e.flags & -4097 | 2,
              $ = !1,
              ye = e)
          }
      } else {
          if (Is(e))
              throw Error(j(418));
          e.flags = e.flags & -4097 | 2,
          $ = !1,
          ye = e
      }
  }
}
function To(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
  ye = e
}
function yr(e) {
  if (e !== ye)
      return !1;
  if (!$)
      return To(e),
      $ = !0,
      !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
  t = t !== "head" && t !== "body" && !Cs(e.type, e.memoizedProps)),
  t && (t = ve)) {
      if (Is(e))
          throw ju(),
          Error(j(418));
      for (; t; )
          wu(e, t),
          t = ut(t.nextSibling)
  }
  if (To(e),
  e.tag === 13) {
      if (e = e.memoizedState,
      e = e !== null ? e.dehydrated : null,
      !e)
          throw Error(j(317));
      e: {
          for (e = e.nextSibling,
          t = 0; e; ) {
              if (e.nodeType === 8) {
                  var n = e.data;
                  if (n === "/$") {
                      if (t === 0) {
                          ve = ut(e.nextSibling);
                          break e
                      }
                      t--
                  } else
                      n !== "$" && n !== "$!" && n !== "$?" || t++
              }
              e = e.nextSibling
          }
          ve = null
      }
  } else
      ve = ye ? ut(e.stateNode.nextSibling) : null;
  return !0
}
function ju() {
  for (var e = ve; e; )
      e = ut(e.nextSibling)
}
function nn() {
  ve = ye = null,
  $ = !1
}
function yi(e) {
  ze === null ? ze = [e] : ze.push(e)
}
var Uf = be.ReactCurrentBatchConfig;
function wn(e, t, n) {
  if (e = n.ref,
  e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
          if (n = n._owner,
          n) {
              if (n.tag !== 1)
                  throw Error(j(309));
              var r = n.stateNode
          }
          if (!r)
              throw Error(j(147, e));
          var l = r
            , s = "" + e;
          return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
              var a = l.refs;
              o === null ? delete a[s] : a[s] = o
          }
          ,
          t._stringRef = s,
          t)
      }
      if (typeof e != "string")
          throw Error(j(284));
      if (!n._owner)
          throw Error(j(290, e))
  }
  return e
}
function xr(e, t) {
  throw e = Object.prototype.toString.call(t),
  Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Po(e) {
  var t = e._init;
  return t(e._payload)
}
function Nu(e) {
  function t(f, c) {
      if (e) {
          var p = f.deletions;
          p === null ? (f.deletions = [c],
          f.flags |= 16) : p.push(c)
      }
  }
  function n(f, c) {
      if (!e)
          return null;
      for (; c !== null; )
          t(f, c),
          c = c.sibling;
      return null
  }
  function r(f, c) {
      for (f = new Map; c !== null; )
          c.key !== null ? f.set(c.key, c) : f.set(c.index, c),
          c = c.sibling;
      return f
  }
  function l(f, c) {
      return f = pt(f, c),
      f.index = 0,
      f.sibling = null,
      f
  }
  function s(f, c, p) {
      return f.index = p,
      e ? (p = f.alternate,
      p !== null ? (p = p.index,
      p < c ? (f.flags |= 2,
      c) : p) : (f.flags |= 2,
      c)) : (f.flags |= 1048576,
      c)
  }
  function o(f) {
      return e && f.alternate === null && (f.flags |= 2),
      f
  }
  function a(f, c, p, w) {
      return c === null || c.tag !== 6 ? (c = es(p, f.mode, w),
      c.return = f,
      c) : (c = l(c, p),
      c.return = f,
      c)
  }
  function u(f, c, p, w) {
      var S = p.type;
      return S === At ? g(f, c, p.props.children, w, p.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === et && Po(S) === c.type) ? (w = l(c, p.props),
      w.ref = wn(f, c, p),
      w.return = f,
      w) : (w = Or(p.type, p.key, p.props, null, f.mode, w),
      w.ref = wn(f, c, p),
      w.return = f,
      w)
  }
  function d(f, c, p, w) {
      return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = ts(p, f.mode, w),
      c.return = f,
      c) : (c = l(c, p.children || []),
      c.return = f,
      c)
  }
  function g(f, c, p, w, S) {
      return c === null || c.tag !== 7 ? (c = _t(p, f.mode, w, S),
      c.return = f,
      c) : (c = l(c, p),
      c.return = f,
      c)
  }
  function h(f, c, p) {
      if (typeof c == "string" && c !== "" || typeof c == "number")
          return c = es("" + c, f.mode, p),
          c.return = f,
          c;
      if (typeof c == "object" && c !== null) {
          switch (c.$$typeof) {
          case ar:
              return p = Or(c.type, c.key, c.props, null, f.mode, p),
              p.ref = wn(f, null, c),
              p.return = f,
              p;
          case Ot:
              return c = ts(c, f.mode, p),
              c.return = f,
              c;
          case et:
              var w = c._init;
              return h(f, w(c._payload), p)
          }
          if (kn(c) || hn(c))
              return c = _t(c, f.mode, p, null),
              c.return = f,
              c;
          xr(f, c)
      }
      return null
  }
  function m(f, c, p, w) {
      var S = c !== null ? c.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number")
          return S !== null ? null : a(f, c, "" + p, w);
      if (typeof p == "object" && p !== null) {
          switch (p.$$typeof) {
          case ar:
              return p.key === S ? u(f, c, p, w) : null;
          case Ot:
              return p.key === S ? d(f, c, p, w) : null;
          case et:
              return S = p._init,
              m(f, c, S(p._payload), w)
          }
          if (kn(p) || hn(p))
              return S !== null ? null : g(f, c, p, w, null);
          xr(f, p)
      }
      return null
  }
  function y(f, c, p, w, S) {
      if (typeof w == "string" && w !== "" || typeof w == "number")
          return f = f.get(p) || null,
          a(c, f, "" + w, S);
      if (typeof w == "object" && w !== null) {
          switch (w.$$typeof) {
          case ar:
              return f = f.get(w.key === null ? p : w.key) || null,
              u(c, f, w, S);
          case Ot:
              return f = f.get(w.key === null ? p : w.key) || null,
              d(c, f, w, S);
          case et:
              var C = w._init;
              return y(f, c, p, C(w._payload), S)
          }
          if (kn(w) || hn(w))
              return f = f.get(p) || null,
              g(c, f, w, S, null);
          xr(c, w)
      }
      return null
  }
  function x(f, c, p, w) {
      for (var S = null, C = null, _ = c, T = c = 0, Q = null; _ !== null && T < p.length; T++) {
          _.index > T ? (Q = _,
          _ = null) : Q = _.sibling;
          var M = m(f, _, p[T], w);
          if (M === null) {
              _ === null && (_ = Q);
              break
          }
          e && _ && M.alternate === null && t(f, _),
          c = s(M, c, T),
          C === null ? S = M : C.sibling = M,
          C = M,
          _ = Q
      }
      if (T === p.length)
          return n(f, _),
          $ && jt(f, T),
          S;
      if (_ === null) {
          for (; T < p.length; T++)
              _ = h(f, p[T], w),
              _ !== null && (c = s(_, c, T),
              C === null ? S = _ : C.sibling = _,
              C = _);
          return $ && jt(f, T),
          S
      }
      for (_ = r(f, _); T < p.length; T++)
          Q = y(_, f, T, p[T], w),
          Q !== null && (e && Q.alternate !== null && _.delete(Q.key === null ? T : Q.key),
          c = s(Q, c, T),
          C === null ? S = Q : C.sibling = Q,
          C = Q);
      return e && _.forEach(function(Te) {
          return t(f, Te)
      }),
      $ && jt(f, T),
      S
  }
  function v(f, c, p, w) {
      var S = hn(p);
      if (typeof S != "function")
          throw Error(j(150));
      if (p = S.call(p),
      p == null)
          throw Error(j(151));
      for (var C = S = null, _ = c, T = c = 0, Q = null, M = p.next(); _ !== null && !M.done; T++,
      M = p.next()) {
          _.index > T ? (Q = _,
          _ = null) : Q = _.sibling;
          var Te = m(f, _, M.value, w);
          if (Te === null) {
              _ === null && (_ = Q);
              break
          }
          e && _ && Te.alternate === null && t(f, _),
          c = s(Te, c, T),
          C === null ? S = Te : C.sibling = Te,
          C = Te,
          _ = Q
      }
      if (M.done)
          return n(f, _),
          $ && jt(f, T),
          S;
      if (_ === null) {
          for (; !M.done; T++,
          M = p.next())
              M = h(f, M.value, w),
              M !== null && (c = s(M, c, T),
              C === null ? S = M : C.sibling = M,
              C = M);
          return $ && jt(f, T),
          S
      }
      for (_ = r(f, _); !M.done; T++,
      M = p.next())
          M = y(_, f, T, M.value, w),
          M !== null && (e && M.alternate !== null && _.delete(M.key === null ? T : M.key),
          c = s(M, c, T),
          C === null ? S = M : C.sibling = M,
          C = M);
      return e && _.forEach(function(pn) {
          return t(f, pn)
      }),
      $ && jt(f, T),
      S
  }
  function N(f, c, p, w) {
      if (typeof p == "object" && p !== null && p.type === At && p.key === null && (p = p.props.children),
      typeof p == "object" && p !== null) {
          switch (p.$$typeof) {
          case ar:
              e: {
                  for (var S = p.key, C = c; C !== null; ) {
                      if (C.key === S) {
                          if (S = p.type,
                          S === At) {
                              if (C.tag === 7) {
                                  n(f, C.sibling),
                                  c = l(C, p.props.children),
                                  c.return = f,
                                  f = c;
                                  break e
                              }
                          } else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === et && Po(S) === C.type) {
                              n(f, C.sibling),
                              c = l(C, p.props),
                              c.ref = wn(f, C, p),
                              c.return = f,
                              f = c;
                              break e
                          }
                          n(f, C);
                          break
                      } else
                          t(f, C);
                      C = C.sibling
                  }
                  p.type === At ? (c = _t(p.props.children, f.mode, w, p.key),
                  c.return = f,
                  f = c) : (w = Or(p.type, p.key, p.props, null, f.mode, w),
                  w.ref = wn(f, c, p),
                  w.return = f,
                  f = w)
              }
              return o(f);
          case Ot:
              e: {
                  for (C = p.key; c !== null; ) {
                      if (c.key === C)
                          if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                              n(f, c.sibling),
                              c = l(c, p.children || []),
                              c.return = f,
                              f = c;
                              break e
                          } else {
                              n(f, c);
                              break
                          }
                      else
                          t(f, c);
                      c = c.sibling
                  }
                  c = ts(p, f.mode, w),
                  c.return = f,
                  f = c
              }
              return o(f);
          case et:
              return C = p._init,
              N(f, c, C(p._payload), w)
          }
          if (kn(p))
              return x(f, c, p, w);
          if (hn(p))
              return v(f, c, p, w);
          xr(f, p)
      }
      return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
      c !== null && c.tag === 6 ? (n(f, c.sibling),
      c = l(c, p),
      c.return = f,
      f = c) : (n(f, c),
      c = es(p, f.mode, w),
      c.return = f,
      f = c),
      o(f)) : n(f, c)
  }
  return N
}
var rn = Nu(!0)
, Su = Nu(!1)
, Zr = vt(null)
, Jr = null
, Qt = null
, xi = null;
function wi() {
  xi = Qt = Jr = null
}
function ji(e) {
  var t = Zr.current;
  U(Zr),
  e._currentValue = t
}
function zs(e, t, n) {
  for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t,
      r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
          break;
      e = e.return
  }
}
function bt(e, t) {
  Jr = e,
  xi = Qt = null,
  e = e.dependencies,
  e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0),
  e.firstContext = null)
}
function Ce(e) {
  var t = e._currentValue;
  if (xi !== e)
      if (e = {
          context: e,
          memoizedValue: t,
          next: null
      },
      Qt === null) {
          if (Jr === null)
              throw Error(j(308));
          Qt = e,
          Jr.dependencies = {
              lanes: 0,
              firstContext: e
          }
      } else
          Qt = Qt.next = e;
  return t
}
var kt = null;
function Ni(e) {
  kt === null ? kt = [e] : kt.push(e)
}
function ku(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n,
  Ni(t)) : (n.next = l.next,
  l.next = n),
  t.interleaved = n,
  Ge(e, r)
}
function Ge(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t),
  n = e,
  e = e.return; e !== null; )
      e.childLanes |= t,
      n = e.alternate,
      n !== null && (n.childLanes |= t),
      n = e,
      e = e.return;
  return n.tag === 3 ? n.stateNode : null
}
var tt = !1;
function Si(e) {
  e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
          pending: null,
          interleaved: null,
          lanes: 0
      },
      effects: null
  }
}
function Eu(e, t) {
  e = e.updateQueue,
  t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
  })
}
function Ke(e, t) {
  return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
  }
}
function ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
      return null;
  if (r = r.shared,
  D & 2) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next,
      l.next = t),
      r.pending = t,
      Ge(e, n)
  }
  return l = r.interleaved,
  l === null ? (t.next = t,
  Ni(r)) : (t.next = l.next,
  l.next = t),
  r.interleaved = t,
  Ge(e, n)
}
function Ir(e, t, n) {
  if (t = t.updateQueue,
  t !== null && (t = t.shared,
  (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes,
      n |= r,
      t.lanes = n,
      ai(e, n)
  }
}
function Io(e, t) {
  var n = e.updateQueue
    , r = e.alternate;
  if (r !== null && (r = r.updateQueue,
  n === r)) {
      var l = null
        , s = null;
      if (n = n.firstBaseUpdate,
      n !== null) {
          do {
              var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null
              };
              s === null ? l = s = o : s = s.next = o,
              n = n.next
          } while (n !== null);
          s === null ? l = s = t : s = s.next = t
      } else
          l = s = t;
      n = {
          baseState: r.baseState,
          firstBaseUpdate: l,
          lastBaseUpdate: s,
          shared: r.shared,
          effects: r.effects
      },
      e.updateQueue = n;
      return
  }
  e = n.lastBaseUpdate,
  e === null ? n.firstBaseUpdate = t : e.next = t,
  n.lastBaseUpdate = t
}
function br(e, t, n, r) {
  var l = e.updateQueue;
  tt = !1;
  var s = l.firstBaseUpdate
    , o = l.lastBaseUpdate
    , a = l.shared.pending;
  if (a !== null) {
      l.shared.pending = null;
      var u = a
        , d = u.next;
      u.next = null,
      o === null ? s = d : o.next = d,
      o = u;
      var g = e.alternate;
      g !== null && (g = g.updateQueue,
      a = g.lastBaseUpdate,
      a !== o && (a === null ? g.firstBaseUpdate = d : a.next = d,
      g.lastBaseUpdate = u))
  }
  if (s !== null) {
      var h = l.baseState;
      o = 0,
      g = d = u = null,
      a = s;
      do {
          var m = a.lane
            , y = a.eventTime;
          if ((r & m) === m) {
              g !== null && (g = g.next = {
                  eventTime: y,
                  lane: 0,
                  tag: a.tag,
                  payload: a.payload,
                  callback: a.callback,
                  next: null
              });
              e: {
                  var x = e
                    , v = a;
                  switch (m = t,
                  y = n,
                  v.tag) {
                  case 1:
                      if (x = v.payload,
                      typeof x == "function") {
                          h = x.call(y, h, m);
                          break e
                      }
                      h = x;
                      break e;
                  case 3:
                      x.flags = x.flags & -65537 | 128;
                  case 0:
                      if (x = v.payload,
                      m = typeof x == "function" ? x.call(y, h, m) : x,
                      m == null)
                          break e;
                      h = H({}, h, m);
                      break e;
                  case 2:
                      tt = !0
                  }
              }
              a.callback !== null && a.lane !== 0 && (e.flags |= 64,
              m = l.effects,
              m === null ? l.effects = [a] : m.push(a))
          } else
              y = {
                  eventTime: y,
                  lane: m,
                  tag: a.tag,
                  payload: a.payload,
                  callback: a.callback,
                  next: null
              },
              g === null ? (d = g = y,
              u = h) : g = g.next = y,
              o |= m;
          if (a = a.next,
          a === null) {
              if (a = l.shared.pending,
              a === null)
                  break;
              m = a,
              a = m.next,
              m.next = null,
              l.lastBaseUpdate = m,
              l.shared.pending = null
          }
      } while (!0);
      if (g === null && (u = h),
      l.baseState = u,
      l.firstBaseUpdate = d,
      l.lastBaseUpdate = g,
      t = l.shared.interleaved,
      t !== null) {
          l = t;
          do
              o |= l.lane,
              l = l.next;
          while (l !== t)
      } else
          s === null && (l.shared.lanes = 0);
      Lt |= o,
      e.lanes = o,
      e.memoizedState = h
  }
}
function Lo(e, t, n) {
  if (e = t.effects,
  t.effects = null,
  e !== null)
      for (t = 0; t < e.length; t++) {
          var r = e[t]
            , l = r.callback;
          if (l !== null) {
              if (r.callback = null,
              r = n,
              typeof l != "function")
                  throw Error(j(191, l));
              l.call(r)
          }
      }
}
var lr = {}
, Fe = vt(lr)
, Yn = vt(lr)
, Xn = vt(lr);
function Et(e) {
  if (e === lr)
      throw Error(j(174));
  return e
}
function ki(e, t) {
  switch (O(Xn, t),
  O(Yn, e),
  O(Fe, lr),
  e = t.nodeType,
  e) {
  case 9:
  case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fs(null, "");
      break;
  default:
      e = e === 8 ? t.parentNode : t,
      t = e.namespaceURI || null,
      e = e.tagName,
      t = fs(t, e)
  }
  U(Fe),
  O(Fe, t)
}
function ln() {
  U(Fe),
  U(Yn),
  U(Xn)
}
function Cu(e) {
  Et(Xn.current);
  var t = Et(Fe.current)
    , n = fs(t, e.type);
  t !== n && (O(Yn, e),
  O(Fe, n))
}
function Ei(e) {
  Yn.current === e && (U(Fe),
  U(Yn))
}
var F = vt(0);
function qr(e) {
  for (var t = e; t !== null; ) {
      if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && (n = n.dehydrated,
          n === null || n.data === "$?" || n.data === "$!"))
              return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128)
              return t
      } else if (t.child !== null) {
          t.child.return = t,
          t = t.child;
          continue
      }
      if (t === e)
          break;
      for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
              return null;
          t = t.return
      }
      t.sibling.return = t.return,
      t = t.sibling
  }
  return null
}
var Xl = [];
function Ci() {
  for (var e = 0; e < Xl.length; e++)
      Xl[e]._workInProgressVersionPrimary = null;
  Xl.length = 0
}
var Lr = be.ReactCurrentDispatcher
, Gl = be.ReactCurrentBatchConfig
, It = 0
, V = null
, G = null
, b = null
, el = !1
, zn = !1
, Gn = 0
, $f = 0;
function re() {
  throw Error(j(321))
}
function _i(e, t) {
  if (t === null)
      return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
      if (!Re(e[n], t[n]))
          return !1;
  return !0
}
function Ti(e, t, n, r, l, s) {
  if (It = s,
  V = t,
  t.memoizedState = null,
  t.updateQueue = null,
  t.lanes = 0,
  Lr.current = e === null || e.memoizedState === null ? Bf : Wf,
  e = n(r, l),
  zn) {
      s = 0;
      do {
          if (zn = !1,
          Gn = 0,
          25 <= s)
              throw Error(j(301));
          s += 1,
          b = G = null,
          t.updateQueue = null,
          Lr.current = Qf,
          e = n(r, l)
      } while (zn)
  }
  if (Lr.current = tl,
  t = G !== null && G.next !== null,
  It = 0,
  b = G = V = null,
  el = !1,
  t)
      throw Error(j(300));
  return e
}
function Pi() {
  var e = Gn !== 0;
  return Gn = 0,
  e
}
function Ae() {
  var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
  };
  return b === null ? V.memoizedState = b = e : b = b.next = e,
  b
}
function _e() {
  if (G === null) {
      var e = V.alternate;
      e = e !== null ? e.memoizedState : null
  } else
      e = G.next;
  var t = b === null ? V.memoizedState : b.next;
  if (t !== null)
      b = t,
      G = e;
  else {
      if (e === null)
          throw Error(j(310));
      G = e,
      e = {
          memoizedState: G.memoizedState,
          baseState: G.baseState,
          baseQueue: G.baseQueue,
          queue: G.queue,
          next: null
      },
      b === null ? V.memoizedState = b = e : b = b.next = e
  }
  return b
}
function Zn(e, t) {
  return typeof t == "function" ? t(e) : t
}
function Zl(e) {
  var t = _e()
    , n = t.queue;
  if (n === null)
      throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = G
    , l = r.baseQueue
    , s = n.pending;
  if (s !== null) {
      if (l !== null) {
          var o = l.next;
          l.next = s.next,
          s.next = o
      }
      r.baseQueue = l = s,
      n.pending = null
  }
  if (l !== null) {
      s = l.next,
      r = r.baseState;
      var a = o = null
        , u = null
        , d = s;
      do {
          var g = d.lane;
          if ((It & g) === g)
              u !== null && (u = u.next = {
                  lane: 0,
                  action: d.action,
                  hasEagerState: d.hasEagerState,
                  eagerState: d.eagerState,
                  next: null
              }),
              r = d.hasEagerState ? d.eagerState : e(r, d.action);
          else {
              var h = {
                  lane: g,
                  action: d.action,
                  hasEagerState: d.hasEagerState,
                  eagerState: d.eagerState,
                  next: null
              };
              u === null ? (a = u = h,
              o = r) : u = u.next = h,
              V.lanes |= g,
              Lt |= g
          }
          d = d.next
      } while (d !== null && d !== s);
      u === null ? o = r : u.next = a,
      Re(r, t.memoizedState) || (fe = !0),
      t.memoizedState = r,
      t.baseState = o,
      t.baseQueue = u,
      n.lastRenderedState = r
  }
  if (e = n.interleaved,
  e !== null) {
      l = e;
      do
          s = l.lane,
          V.lanes |= s,
          Lt |= s,
          l = l.next;
      while (l !== e)
  } else
      l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch]
}
function Jl(e) {
  var t = _e()
    , n = t.queue;
  if (n === null)
      throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch
    , l = n.pending
    , s = t.memoizedState;
  if (l !== null) {
      n.pending = null;
      var o = l = l.next;
      do
          s = e(s, o.action),
          o = o.next;
      while (o !== l);
      Re(s, t.memoizedState) || (fe = !0),
      t.memoizedState = s,
      t.baseQueue === null && (t.baseState = s),
      n.lastRenderedState = s
  }
  return [s, r]
}
function _u() {}
function Tu(e, t) {
  var n = V
    , r = _e()
    , l = t()
    , s = !Re(r.memoizedState, l);
  if (s && (r.memoizedState = l,
  fe = !0),
  r = r.queue,
  Ii(Lu.bind(null, n, r, e), [e]),
  r.getSnapshot !== t || s || b !== null && b.memoizedState.tag & 1) {
      if (n.flags |= 2048,
      Jn(9, Iu.bind(null, n, r, l, t), void 0, null),
      q === null)
          throw Error(j(349));
      It & 30 || Pu(n, t, l)
  }
  return l
}
function Pu(e, t, n) {
  e.flags |= 16384,
  e = {
      getSnapshot: t,
      value: n
  },
  t = V.updateQueue,
  t === null ? (t = {
      lastEffect: null,
      stores: null
  },
  V.updateQueue = t,
  t.stores = [e]) : (n = t.stores,
  n === null ? t.stores = [e] : n.push(e))
}
function Iu(e, t, n, r) {
  t.value = n,
  t.getSnapshot = r,
  zu(t) && Mu(e)
}
function Lu(e, t, n) {
  return n(function() {
      zu(t) && Mu(e)
  })
}
function zu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
      var n = t();
      return !Re(e, n)
  } catch {
      return !0
  }
}
function Mu(e) {
  var t = Ge(e, 1);
  t !== null && De(t, e, 1, -1)
}
function zo(e) {
  var t = Ae();
  return typeof e == "function" && (e = e()),
  t.memoizedState = t.baseState = e,
  e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zn,
      lastRenderedState: e
  },
  t.queue = e,
  e = e.dispatch = Hf.bind(null, V, e),
  [t.memoizedState, e]
}
function Jn(e, t, n, r) {
  return e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null
  },
  t = V.updateQueue,
  t === null ? (t = {
      lastEffect: null,
      stores: null
  },
  V.updateQueue = t,
  t.lastEffect = e.next = e) : (n = t.lastEffect,
  n === null ? t.lastEffect = e.next = e : (r = n.next,
  n.next = e,
  e.next = r,
  t.lastEffect = e)),
  e
}
function Du() {
  return _e().memoizedState
}
function zr(e, t, n, r) {
  var l = Ae();
  V.flags |= e,
  l.memoizedState = Jn(1 | t, n, void 0, r === void 0 ? null : r)
}
function ml(e, t, n, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (G !== null) {
      var o = G.memoizedState;
      if (s = o.destroy,
      r !== null && _i(r, o.deps)) {
          l.memoizedState = Jn(t, n, s, r);
          return
      }
  }
  V.flags |= e,
  l.memoizedState = Jn(1 | t, n, s, r)
}
function Mo(e, t) {
  return zr(8390656, 8, e, t)
}
function Ii(e, t) {
  return ml(2048, 8, e, t)
}
function Ru(e, t) {
  return ml(4, 2, e, t)
}
function Ou(e, t) {
  return ml(4, 4, e, t)
}
function Au(e, t) {
  if (typeof t == "function")
      return e = e(),
      t(e),
      function() {
          t(null)
      }
      ;
  if (t != null)
      return e = e(),
      t.current = e,
      function() {
          t.current = null
      }
}
function Uu(e, t, n) {
  return n = n != null ? n.concat([e]) : null,
  ml(4, 4, Au.bind(null, t, e), n)
}
function Li() {}
function $u(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _i(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
  e)
}
function Fu(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _i(t, r[1]) ? r[0] : (e = e(),
  n.memoizedState = [e, t],
  e)
}
function Vu(e, t, n) {
  return It & 21 ? (Re(n, t) || (n = Ka(),
  V.lanes |= n,
  Lt |= n,
  e.baseState = !0),
  t) : (e.baseState && (e.baseState = !1,
  fe = !0),
  e.memoizedState = n)
}
function Ff(e, t) {
  var n = R;
  R = n !== 0 && 4 > n ? n : 4,
  e(!0);
  var r = Gl.transition;
  Gl.transition = {};
  try {
      e(!1),
      t()
  } finally {
      R = n,
      Gl.transition = r
  }
}
function Hu() {
  return _e().memoizedState
}
function Vf(e, t, n) {
  var r = ft(e);
  if (n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
  },
  Bu(e))
      Wu(t, n);
  else if (n = ku(e, t, n, r),
  n !== null) {
      var l = ae();
      De(n, e, r, l),
      Qu(n, t, r)
  }
}
function Hf(e, t, n) {
  var r = ft(e)
    , l = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
  };
  if (Bu(e))
      Wu(t, l);
  else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
      s !== null))
          try {
              var o = t.lastRenderedState
                , a = s(o, n);
              if (l.hasEagerState = !0,
              l.eagerState = a,
              Re(a, o)) {
                  var u = t.interleaved;
                  u === null ? (l.next = l,
                  Ni(t)) : (l.next = u.next,
                  u.next = l),
                  t.interleaved = l;
                  return
              }
          } catch {} finally {}
      n = ku(e, t, l, r),
      n !== null && (l = ae(),
      De(n, e, r, l),
      Qu(n, t, r))
  }
}
function Bu(e) {
  var t = e.alternate;
  return e === V || t !== null && t === V
}
function Wu(e, t) {
  zn = el = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next,
  n.next = t),
  e.pending = t
}
function Qu(e, t, n) {
  if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes,
      n |= r,
      t.lanes = n,
      ai(e, n)
  }
}
var tl = {
  readContext: Ce,
  useCallback: re,
  useContext: re,
  useEffect: re,
  useImperativeHandle: re,
  useInsertionEffect: re,
  useLayoutEffect: re,
  useMemo: re,
  useReducer: re,
  useRef: re,
  useState: re,
  useDebugValue: re,
  useDeferredValue: re,
  useTransition: re,
  useMutableSource: re,
  useSyncExternalStore: re,
  useId: re,
  unstable_isNewReconciler: !1
}
, Bf = {
  readContext: Ce,
  useCallback: function(e, t) {
      return Ae().memoizedState = [e, t === void 0 ? null : t],
      e
  },
  useContext: Ce,
  useEffect: Mo,
  useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([e]) : null,
      zr(4194308, 4, Au.bind(null, t, e), n)
  },
  useLayoutEffect: function(e, t) {
      return zr(4194308, 4, e, t)
  },
  useInsertionEffect: function(e, t) {
      return zr(4, 2, e, t)
  },
  useMemo: function(e, t) {
      var n = Ae();
      return t = t === void 0 ? null : t,
      e = e(),
      n.memoizedState = [e, t],
      e
  },
  useReducer: function(e, t, n) {
      var r = Ae();
      return t = n !== void 0 ? n(t) : t,
      r.memoizedState = r.baseState = t,
      e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
      },
      r.queue = e,
      e = e.dispatch = Vf.bind(null, V, e),
      [r.memoizedState, e]
  },
  useRef: function(e) {
      var t = Ae();
      return e = {
          current: e
      },
      t.memoizedState = e
  },
  useState: zo,
  useDebugValue: Li,
  useDeferredValue: function(e) {
      return Ae().memoizedState = e
  },
  useTransition: function() {
      var e = zo(!1)
        , t = e[0];
      return e = Ff.bind(null, e[1]),
      Ae().memoizedState = e,
      [t, e]
  },
  useMutableSource: function() {},
  useSyncExternalStore: function(e, t, n) {
      var r = V
        , l = Ae();
      if ($) {
          if (n === void 0)
              throw Error(j(407));
          n = n()
      } else {
          if (n = t(),
          q === null)
              throw Error(j(349));
          It & 30 || Pu(r, t, n)
      }
      l.memoizedState = n;
      var s = {
          value: n,
          getSnapshot: t
      };
      return l.queue = s,
      Mo(Lu.bind(null, r, s, e), [e]),
      r.flags |= 2048,
      Jn(9, Iu.bind(null, r, s, n, t), void 0, null),
      n
  },
  useId: function() {
      var e = Ae()
        , t = q.identifierPrefix;
      if ($) {
          var n = Qe
            , r = We;
          n = (r & ~(1 << 32 - Me(r) - 1)).toString(32) + n,
          t = ":" + t + "R" + n,
          n = Gn++,
          0 < n && (t += "H" + n.toString(32)),
          t += ":"
      } else
          n = $f++,
          t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t
  },
  unstable_isNewReconciler: !1
}
, Wf = {
  readContext: Ce,
  useCallback: $u,
  useContext: Ce,
  useEffect: Ii,
  useImperativeHandle: Uu,
  useInsertionEffect: Ru,
  useLayoutEffect: Ou,
  useMemo: Fu,
  useReducer: Zl,
  useRef: Du,
  useState: function() {
      return Zl(Zn)
  },
  useDebugValue: Li,
  useDeferredValue: function(e) {
      var t = _e();
      return Vu(t, G.memoizedState, e)
  },
  useTransition: function() {
      var e = Zl(Zn)[0]
        , t = _e().memoizedState;
      return [e, t]
  },
  useMutableSource: _u,
  useSyncExternalStore: Tu,
  useId: Hu,
  unstable_isNewReconciler: !1
}
, Qf = {
  readContext: Ce,
  useCallback: $u,
  useContext: Ce,
  useEffect: Ii,
  useImperativeHandle: Uu,
  useInsertionEffect: Ru,
  useLayoutEffect: Ou,
  useMemo: Fu,
  useReducer: Jl,
  useRef: Du,
  useState: function() {
      return Jl(Zn)
  },
  useDebugValue: Li,
  useDeferredValue: function(e) {
      var t = _e();
      return G === null ? t.memoizedState = e : Vu(t, G.memoizedState, e)
  },
  useTransition: function() {
      var e = Jl(Zn)[0]
        , t = _e().memoizedState;
      return [e, t]
  },
  useMutableSource: _u,
  useSyncExternalStore: Tu,
  useId: Hu,
  unstable_isNewReconciler: !1
};
function Ie(e, t) {
  if (e && e.defaultProps) {
      t = H({}, t),
      e = e.defaultProps;
      for (var n in e)
          t[n] === void 0 && (t[n] = e[n]);
      return t
  }
  return t
}
function Ms(e, t, n, r) {
  t = e.memoizedState,
  n = n(r, t),
  n = n == null ? t : H({}, t, n),
  e.memoizedState = n,
  e.lanes === 0 && (e.updateQueue.baseState = n)
}
var hl = {
  isMounted: function(e) {
      return (e = e._reactInternals) ? Dt(e) === e : !1
  },
  enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = ae()
        , l = ft(e)
        , s = Ke(r, l);
      s.payload = t,
      n != null && (s.callback = n),
      t = ct(e, s, l),
      t !== null && (De(t, e, l, r),
      Ir(t, e, l))
  },
  enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = ae()
        , l = ft(e)
        , s = Ke(r, l);
      s.tag = 1,
      s.payload = t,
      n != null && (s.callback = n),
      t = ct(e, s, l),
      t !== null && (De(t, e, l, r),
      Ir(t, e, l))
  },
  enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = ae()
        , r = ft(e)
        , l = Ke(n, r);
      l.tag = 2,
      t != null && (l.callback = t),
      t = ct(e, l, r),
      t !== null && (De(t, e, r, n),
      Ir(t, e, r))
  }
};
function Do(e, t, n, r, l, s, o) {
  return e = e.stateNode,
  typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !Bn(n, r) || !Bn(l, s) : !0
}
function Ku(e, t, n) {
  var r = !1
    , l = ht
    , s = t.contextType;
  return typeof s == "object" && s !== null ? s = Ce(s) : (l = me(t) ? Tt : ie.current,
  r = t.contextTypes,
  s = (r = r != null) ? tn(e, l) : ht),
  t = new t(n,s),
  e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
  t.updater = hl,
  e.stateNode = t,
  t._reactInternals = e,
  r && (e = e.stateNode,
  e.__reactInternalMemoizedUnmaskedChildContext = l,
  e.__reactInternalMemoizedMaskedChildContext = s),
  t
}
function Ro(e, t, n, r) {
  e = t.state,
  typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
  typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
  t.state !== e && hl.enqueueReplaceState(t, t.state, null)
}
function Ds(e, t, n, r) {
  var l = e.stateNode;
  l.props = n,
  l.state = e.memoizedState,
  l.refs = {},
  Si(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? l.context = Ce(s) : (s = me(t) ? Tt : ie.current,
  l.context = tn(e, s)),
  l.state = e.memoizedState,
  s = t.getDerivedStateFromProps,
  typeof s == "function" && (Ms(e, t, s, n),
  l.state = e.memoizedState),
  typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
  typeof l.componentWillMount == "function" && l.componentWillMount(),
  typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
  t !== l.state && hl.enqueueReplaceState(l, l.state, null),
  br(e, n, l, r),
  l.state = e.memoizedState),
  typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function sn(e, t) {
  try {
      var n = ""
        , r = t;
      do
          n += yd(r),
          r = r.return;
      while (r);
      var l = n
  } catch (s) {
      l = `
Error generating stack: ` + s.message + `
` + s.stack
  }
  return {
      value: e,
      source: t,
      stack: l,
      digest: null
  }
}
function bl(e, t, n) {
  return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
  }
}
function Rs(e, t) {
  try {
      console.error(t.value)
  } catch (n) {
      setTimeout(function() {
          throw n
      })
  }
}
var Kf = typeof WeakMap == "function" ? WeakMap : Map;
function Yu(e, t, n) {
  n = Ke(-1, n),
  n.tag = 3,
  n.payload = {
      element: null
  };
  var r = t.value;
  return n.callback = function() {
      rl || (rl = !0,
      Qs = r),
      Rs(e, t)
  }
  ,
  n
}
function Xu(e, t, n) {
  n = Ke(-1, n),
  n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
          return r(l)
      }
      ,
      n.callback = function() {
          Rs(e, t)
      }
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
      Rs(e, t),
      typeof r != "function" && (dt === null ? dt = new Set([this]) : dt.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : ""
      })
  }
  ),
  n
}
function Oo(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
      r = e.pingCache = new Kf;
      var l = new Set;
      r.set(t, l)
  } else
      l = r.get(t),
      l === void 0 && (l = new Set,
      r.set(t, l));
  l.has(n) || (l.add(n),
  e = ip.bind(null, e, t, n),
  t.then(e, e))
}
function Ao(e) {
  do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState,
      t = t !== null ? t.dehydrated !== null : !0),
      t)
          return e;
      e = e.return
  } while (e !== null);
  return null
}
function Uo(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536,
  e.lanes = l,
  e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
  n.flags |= 131072,
  n.flags &= -52805,
  n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ke(-1, 1),
  t.tag = 2,
  ct(n, t, 1))),
  n.lanes |= 1),
  e)
}
var Yf = be.ReactCurrentOwner
, fe = !1;
function oe(e, t, n, r) {
  t.child = e === null ? Su(t, null, n, r) : rn(t, e.child, n, r)
}
function $o(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return bt(t, l),
  r = Ti(e, t, n, r, s, l),
  n = Pi(),
  e !== null && !fe ? (t.updateQueue = e.updateQueue,
  t.flags &= -2053,
  e.lanes &= ~l,
  Ze(e, t, l)) : ($ && n && gi(t),
  t.flags |= 1,
  oe(e, t, r, l),
  t.child)
}
function Fo(e, t, n, r, l) {
  if (e === null) {
      var s = n.type;
      return typeof s == "function" && !$i(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
      t.type = s,
      Gu(e, t, s, r, l)) : (e = Or(n.type, null, r, t, t.mode, l),
      e.ref = t.ref,
      e.return = t,
      t.child = e)
  }
  if (s = e.child,
  !(e.lanes & l)) {
      var o = s.memoizedProps;
      if (n = n.compare,
      n = n !== null ? n : Bn,
      n(o, r) && e.ref === t.ref)
          return Ze(e, t, l)
  }
  return t.flags |= 1,
  e = pt(s, r),
  e.ref = t.ref,
  e.return = t,
  t.child = e
}
function Gu(e, t, n, r, l) {
  if (e !== null) {
      var s = e.memoizedProps;
      if (Bn(s, r) && e.ref === t.ref)
          if (fe = !1,
          t.pendingProps = r = s,
          (e.lanes & l) !== 0)
              e.flags & 131072 && (fe = !0);
          else
              return t.lanes = e.lanes,
              Ze(e, t, l)
  }
  return Os(e, t, n, r, l)
}
function Zu(e, t, n) {
  var r = t.pendingProps
    , l = r.children
    , s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
      if (!(t.mode & 1))
          t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
          },
          O(Yt, ge),
          ge |= n;
      else {
          if (!(n & 1073741824))
              return e = s !== null ? s.baseLanes | n : n,
              t.lanes = t.childLanes = 1073741824,
              t.memoizedState = {
                  baseLanes: e,
                  cachePool: null,
                  transitions: null
              },
              t.updateQueue = null,
              O(Yt, ge),
              ge |= e,
              null;
          t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
          },
          r = s !== null ? s.baseLanes : n,
          O(Yt, ge),
          ge |= r
      }
  else
      s !== null ? (r = s.baseLanes | n,
      t.memoizedState = null) : r = n,
      O(Yt, ge),
      ge |= r;
  return oe(e, t, l, n),
  t.child
}
function Ju(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
  t.flags |= 2097152)
}
function Os(e, t, n, r, l) {
  var s = me(n) ? Tt : ie.current;
  return s = tn(t, s),
  bt(t, l),
  n = Ti(e, t, n, r, s, l),
  r = Pi(),
  e !== null && !fe ? (t.updateQueue = e.updateQueue,
  t.flags &= -2053,
  e.lanes &= ~l,
  Ze(e, t, l)) : ($ && r && gi(t),
  t.flags |= 1,
  oe(e, t, n, l),
  t.child)
}
function Vo(e, t, n, r, l) {
  if (me(n)) {
      var s = !0;
      Yr(t)
  } else
      s = !1;
  if (bt(t, l),
  t.stateNode === null)
      Mr(e, t),
      Ku(t, n, r),
      Ds(t, n, r, l),
      r = !0;
  else if (e === null) {
      var o = t.stateNode
        , a = t.memoizedProps;
      o.props = a;
      var u = o.context
        , d = n.contextType;
      typeof d == "object" && d !== null ? d = Ce(d) : (d = me(n) ? Tt : ie.current,
      d = tn(t, d));
      var g = n.getDerivedStateFromProps
        , h = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || u !== d) && Ro(t, o, r, d),
      tt = !1;
      var m = t.memoizedState;
      o.state = m,
      br(t, r, o, l),
      u = t.memoizedState,
      a !== r || m !== u || pe.current || tt ? (typeof g == "function" && (Ms(t, n, g, r),
      u = t.memoizedState),
      (a = tt || Do(t, n, a, r, m, u, d)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
      typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
      t.memoizedProps = r,
      t.memoizedState = u),
      o.props = r,
      o.state = u,
      o.context = d,
      r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
      r = !1)
  } else {
      o = t.stateNode,
      Eu(e, t),
      a = t.memoizedProps,
      d = t.type === t.elementType ? a : Ie(t.type, a),
      o.props = d,
      h = t.pendingProps,
      m = o.context,
      u = n.contextType,
      typeof u == "object" && u !== null ? u = Ce(u) : (u = me(n) ? Tt : ie.current,
      u = tn(t, u));
      var y = n.getDerivedStateFromProps;
      (g = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== h || m !== u) && Ro(t, o, r, u),
      tt = !1,
      m = t.memoizedState,
      o.state = m,
      br(t, r, o, l);
      var x = t.memoizedState;
      a !== h || m !== x || pe.current || tt ? (typeof y == "function" && (Ms(t, n, y, r),
      x = t.memoizedState),
      (d = tt || Do(t, n, d, r, m, x, u) || !1) ? (g || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, u),
      typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, u)),
      typeof o.componentDidUpdate == "function" && (t.flags |= 4),
      typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
      typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
      t.memoizedProps = r,
      t.memoizedState = x),
      o.props = r,
      o.state = x,
      o.context = u,
      r = d) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
      typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
      r = !1)
  }
  return As(e, t, n, r, s, l)
}
function As(e, t, n, r, l, s) {
  Ju(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o)
      return l && Co(t, n, !1),
      Ze(e, t, s);
  r = t.stateNode,
  Yf.current = t;
  var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1,
  e !== null && o ? (t.child = rn(t, e.child, null, s),
  t.child = rn(t, null, a, s)) : oe(e, t, a, s),
  t.memoizedState = r.state,
  l && Co(t, n, !0),
  t.child
}
function bu(e) {
  var t = e.stateNode;
  t.pendingContext ? Eo(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Eo(e, t.context, !1),
  ki(e, t.containerInfo)
}
function Ho(e, t, n, r, l) {
  return nn(),
  yi(l),
  t.flags |= 256,
  oe(e, t, n, r),
  t.child
}
var Us = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};
function $s(e) {
  return {
      baseLanes: e,
      cachePool: null,
      transitions: null
  }
}
function qu(e, t, n) {
  var r = t.pendingProps, l = F.current, s = !1, o = (t.flags & 128) !== 0, a;
  if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
  a ? (s = !0,
  t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
  O(F, l & 1),
  e === null)
      return Ls(t),
      e = t.memoizedState,
      e !== null && (e = e.dehydrated,
      e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
      null) : (o = r.children,
      e = r.fallback,
      s ? (r = t.mode,
      s = t.child,
      o = {
          mode: "hidden",
          children: o
      },
      !(r & 1) && s !== null ? (s.childLanes = 0,
      s.pendingProps = o) : s = yl(o, r, 0, null),
      e = _t(e, r, n, null),
      s.return = t,
      e.return = t,
      s.sibling = e,
      t.child = s,
      t.child.memoizedState = $s(n),
      t.memoizedState = Us,
      e) : zi(t, o));
  if (l = e.memoizedState,
  l !== null && (a = l.dehydrated,
  a !== null))
      return Xf(e, t, o, r, a, l, n);
  if (s) {
      s = r.fallback,
      o = t.mode,
      l = e.child,
      a = l.sibling;
      var u = {
          mode: "hidden",
          children: r.children
      };
      return !(o & 1) && t.child !== l ? (r = t.child,
      r.childLanes = 0,
      r.pendingProps = u,
      t.deletions = null) : (r = pt(l, u),
      r.subtreeFlags = l.subtreeFlags & 14680064),
      a !== null ? s = pt(a, s) : (s = _t(s, o, n, null),
      s.flags |= 2),
      s.return = t,
      r.return = t,
      r.sibling = s,
      t.child = r,
      r = s,
      s = t.child,
      o = e.child.memoizedState,
      o = o === null ? $s(n) : {
          baseLanes: o.baseLanes | n,
          cachePool: null,
          transitions: o.transitions
      },
      s.memoizedState = o,
      s.childLanes = e.childLanes & ~n,
      t.memoizedState = Us,
      r
  }
  return s = e.child,
  e = s.sibling,
  r = pt(s, {
      mode: "visible",
      children: r.children
  }),
  !(t.mode & 1) && (r.lanes = n),
  r.return = t,
  r.sibling = null,
  e !== null && (n = t.deletions,
  n === null ? (t.deletions = [e],
  t.flags |= 16) : n.push(e)),
  t.child = r,
  t.memoizedState = null,
  r
}
function zi(e, t) {
  return t = yl({
      mode: "visible",
      children: t
  }, e.mode, 0, null),
  t.return = e,
  e.child = t
}
function wr(e, t, n, r) {
  return r !== null && yi(r),
  rn(t, e.child, null, n),
  e = zi(t, t.pendingProps.children),
  e.flags |= 2,
  t.memoizedState = null,
  e
}
function Xf(e, t, n, r, l, s, o) {
  if (n)
      return t.flags & 256 ? (t.flags &= -257,
      r = bl(Error(j(422))),
      wr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
      t.flags |= 128,
      null) : (s = r.fallback,
      l = t.mode,
      r = yl({
          mode: "visible",
          children: r.children
      }, l, 0, null),
      s = _t(s, l, o, null),
      s.flags |= 2,
      r.return = t,
      s.return = t,
      r.sibling = s,
      t.child = r,
      t.mode & 1 && rn(t, e.child, null, o),
      t.child.memoizedState = $s(o),
      t.memoizedState = Us,
      s);
  if (!(t.mode & 1))
      return wr(e, t, o, null);
  if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset,
      r)
          var a = r.dgst;
      return r = a,
      s = Error(j(419)),
      r = bl(s, r, void 0),
      wr(e, t, o, r)
  }
  if (a = (o & e.childLanes) !== 0,
  fe || a) {
      if (r = q,
      r !== null) {
          switch (o & -o) {
          case 4:
              l = 2;
              break;
          case 16:
              l = 8;
              break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
              l = 32;
              break;
          case 536870912:
              l = 268435456;
              break;
          default:
              l = 0
          }
          l = l & (r.suspendedLanes | o) ? 0 : l,
          l !== 0 && l !== s.retryLane && (s.retryLane = l,
          Ge(e, l),
          De(r, e, l, -1))
      }
      return Ui(),
      r = bl(Error(j(421))),
      wr(e, t, o, r)
  }
  return l.data === "$?" ? (t.flags |= 128,
  t.child = e.child,
  t = op.bind(null, e),
  l._reactRetry = t,
  null) : (e = s.treeContext,
  ve = ut(l.nextSibling),
  ye = t,
  $ = !0,
  ze = null,
  e !== null && (Ne[Se++] = We,
  Ne[Se++] = Qe,
  Ne[Se++] = Pt,
  We = e.id,
  Qe = e.overflow,
  Pt = t),
  t = zi(t, r.children),
  t.flags |= 4096,
  t)
}
function Bo(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t),
  zs(e.return, t, n)
}
function ql(e, t, n, r, l) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: l
  } : (s.isBackwards = t,
  s.rendering = null,
  s.renderingStartTime = 0,
  s.last = r,
  s.tail = n,
  s.tailMode = l)
}
function ec(e, t, n) {
  var r = t.pendingProps
    , l = r.revealOrder
    , s = r.tail;
  if (oe(e, t, r.children, n),
  r = F.current,
  r & 2)
      r = r & 1 | 2,
      t.flags |= 128;
  else {
      if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
              if (e.tag === 13)
                  e.memoizedState !== null && Bo(e, n, t);
              else if (e.tag === 19)
                  Bo(e, n, t);
              else if (e.child !== null) {
                  e.child.return = e,
                  e = e.child;
                  continue
              }
              if (e === t)
                  break e;
              for (; e.sibling === null; ) {
                  if (e.return === null || e.return === t)
                      break e;
                  e = e.return
              }
              e.sibling.return = e.return,
              e = e.sibling
          }
      r &= 1
  }
  if (O(F, r),
  !(t.mode & 1))
      t.memoizedState = null;
  else
      switch (l) {
      case "forwards":
          for (n = t.child,
          l = null; n !== null; )
              e = n.alternate,
              e !== null && qr(e) === null && (l = n),
              n = n.sibling;
          n = l,
          n === null ? (l = t.child,
          t.child = null) : (l = n.sibling,
          n.sibling = null),
          ql(t, !1, l, n, s);
          break;
      case "backwards":
          for (n = null,
          l = t.child,
          t.child = null; l !== null; ) {
              if (e = l.alternate,
              e !== null && qr(e) === null) {
                  t.child = l;
                  break
              }
              e = l.sibling,
              l.sibling = n,
              n = l,
              l = e
          }
          ql(t, !0, n, null, s);
          break;
      case "together":
          ql(t, !1, null, null, void 0);
          break;
      default:
          t.memoizedState = null
      }
  return t.child
}
function Mr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null,
  t.alternate = null,
  t.flags |= 2)
}
function Ze(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies),
  Lt |= t.lanes,
  !(n & t.childLanes))
      return null;
  if (e !== null && t.child !== e.child)
      throw Error(j(153));
  if (t.child !== null) {
      for (e = t.child,
      n = pt(e, e.pendingProps),
      t.child = n,
      n.return = t; e.sibling !== null; )
          e = e.sibling,
          n = n.sibling = pt(e, e.pendingProps),
          n.return = t;
      n.sibling = null
  }
  return t.child
}
function Gf(e, t, n) {
  switch (t.tag) {
  case 3:
      bu(t),
      nn();
      break;
  case 5:
      Cu(t);
      break;
  case 1:
      me(t.type) && Yr(t);
      break;
  case 4:
      ki(t, t.stateNode.containerInfo);
      break;
  case 10:
      var r = t.type._context
        , l = t.memoizedProps.value;
      O(Zr, r._currentValue),
      r._currentValue = l;
      break;
  case 13:
      if (r = t.memoizedState,
      r !== null)
          return r.dehydrated !== null ? (O(F, F.current & 1),
          t.flags |= 128,
          null) : n & t.child.childLanes ? qu(e, t, n) : (O(F, F.current & 1),
          e = Ze(e, t, n),
          e !== null ? e.sibling : null);
      O(F, F.current & 1);
      break;
  case 19:
      if (r = (n & t.childLanes) !== 0,
      e.flags & 128) {
          if (r)
              return ec(e, t, n);
          t.flags |= 128
      }
      if (l = t.memoizedState,
      l !== null && (l.rendering = null,
      l.tail = null,
      l.lastEffect = null),
      O(F, F.current),
      r)
          break;
      return null;
  case 22:
  case 23:
      return t.lanes = 0,
      Zu(e, t, n)
  }
  return Ze(e, t, n)
}
var tc, Fs, nc, rc;
tc = function(e, t) {
  for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6)
          e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
          n.child.return = n,
          n = n.child;
          continue
      }
      if (n === t)
          break;
      for (; n.sibling === null; ) {
          if (n.return === null || n.return === t)
              return;
          n = n.return
      }
      n.sibling.return = n.return,
      n = n.sibling
  }
}
;
Fs = function() {}
;
nc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
      e = t.stateNode,
      Et(Fe.current);
      var s = null;
      switch (n) {
      case "input":
          l = as(e, l),
          r = as(e, r),
          s = [];
          break;
      case "select":
          l = H({}, l, {
              value: void 0
          }),
          r = H({}, r, {
              value: void 0
          }),
          s = [];
          break;
      case "textarea":
          l = ds(e, l),
          r = ds(e, r),
          s = [];
          break;
      default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qr)
      }
      ps(n, r);
      var o;
      n = null;
      for (d in l)
          if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
              if (d === "style") {
                  var a = l[d];
                  for (o in a)
                      a.hasOwnProperty(o) && (n || (n = {}),
                      n[o] = "")
              } else
                  d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (On.hasOwnProperty(d) ? s || (s = []) : (s = s || []).push(d, null));
      for (d in r) {
          var u = r[d];
          if (a = l != null ? l[d] : void 0,
          r.hasOwnProperty(d) && u !== a && (u != null || a != null))
              if (d === "style")
                  if (a) {
                      for (o in a)
                          !a.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}),
                          n[o] = "");
                      for (o in u)
                          u.hasOwnProperty(o) && a[o] !== u[o] && (n || (n = {}),
                          n[o] = u[o])
                  } else
                      n || (s || (s = []),
                      s.push(d, n)),
                      n = u;
              else
                  d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                  a = a ? a.__html : void 0,
                  u != null && a !== u && (s = s || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (s = s || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (On.hasOwnProperty(d) ? (u != null && d === "onScroll" && A("scroll", e),
                  s || a === u || (s = [])) : (s = s || []).push(d, u))
      }
      n && (s = s || []).push("style", n);
      var d = s;
      (t.updateQueue = d) && (t.flags |= 4)
  }
}
;
rc = function(e, t, n, r) {
  n !== r && (t.flags |= 4)
}
;
function jn(e, t) {
  if (!$)
      switch (e.tailMode) {
      case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
              t.alternate !== null && (n = t),
              t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
      case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
              n.alternate !== null && (r = n),
              n = n.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
      }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child
    , n = 0
    , r = 0;
  if (t)
      for (var l = e.child; l !== null; )
          n |= l.lanes | l.childLanes,
          r |= l.subtreeFlags & 14680064,
          r |= l.flags & 14680064,
          l.return = e,
          l = l.sibling;
  else
      for (l = e.child; l !== null; )
          n |= l.lanes | l.childLanes,
          r |= l.subtreeFlags,
          r |= l.flags,
          l.return = e,
          l = l.sibling;
  return e.subtreeFlags |= r,
  e.childLanes = n,
  t
}
function Zf(e, t, n) {
  var r = t.pendingProps;
  switch (vi(t),
  t.tag) {
  case 2:
  case 16:
  case 15:
  case 0:
  case 11:
  case 7:
  case 8:
  case 12:
  case 9:
  case 14:
      return le(t),
      null;
  case 1:
      return me(t.type) && Kr(),
      le(t),
      null;
  case 3:
      return r = t.stateNode,
      ln(),
      U(pe),
      U(ie),
      Ci(),
      r.pendingContext && (r.context = r.pendingContext,
      r.pendingContext = null),
      (e === null || e.child === null) && (yr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
      ze !== null && (Xs(ze),
      ze = null))),
      Fs(e, t),
      le(t),
      null;
  case 5:
      Ei(t);
      var l = Et(Xn.current);
      if (n = t.type,
      e !== null && t.stateNode != null)
          nc(e, t, n, r, l),
          e.ref !== t.ref && (t.flags |= 512,
          t.flags |= 2097152);
      else {
          if (!r) {
              if (t.stateNode === null)
                  throw Error(j(166));
              return le(t),
              null
          }
          if (e = Et(Fe.current),
          yr(t)) {
              r = t.stateNode,
              n = t.type;
              var s = t.memoizedProps;
              switch (r[Ue] = t,
              r[Kn] = s,
              e = (t.mode & 1) !== 0,
              n) {
              case "dialog":
                  A("cancel", r),
                  A("close", r);
                  break;
              case "iframe":
              case "object":
              case "embed":
                  A("load", r);
                  break;
              case "video":
              case "audio":
                  for (l = 0; l < Cn.length; l++)
                      A(Cn[l], r);
                  break;
              case "source":
                  A("error", r);
                  break;
              case "img":
              case "image":
              case "link":
                  A("error", r),
                  A("load", r);
                  break;
              case "details":
                  A("toggle", r);
                  break;
              case "input":
                  Ji(r, s),
                  A("invalid", r);
                  break;
              case "select":
                  r._wrapperState = {
                      wasMultiple: !!s.multiple
                  },
                  A("invalid", r);
                  break;
              case "textarea":
                  qi(r, s),
                  A("invalid", r)
              }
              ps(n, s),
              l = null;
              for (var o in s)
                  if (s.hasOwnProperty(o)) {
                      var a = s[o];
                      o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && vr(r.textContent, a, e),
                      l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && vr(r.textContent, a, e),
                      l = ["children", "" + a]) : On.hasOwnProperty(o) && a != null && o === "onScroll" && A("scroll", r)
                  }
              switch (n) {
              case "input":
                  ur(r),
                  bi(r, s, !0);
                  break;
              case "textarea":
                  ur(r),
                  eo(r);
                  break;
              case "select":
              case "option":
                  break;
              default:
                  typeof s.onClick == "function" && (r.onclick = Qr)
              }
              r = l,
              t.updateQueue = r,
              r !== null && (t.flags |= 4)
          } else {
              o = l.nodeType === 9 ? l : l.ownerDocument,
              e === "http://www.w3.org/1999/xhtml" && (e = La(n)),
              e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
              e.innerHTML = "<script><\/script>",
              e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                  is: r.is
              }) : (e = o.createElement(n),
              n === "select" && (o = e,
              r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
              e[Ue] = t,
              e[Kn] = r,
              tc(e, t, !1, !1),
              t.stateNode = e;
              e: {
                  switch (o = ms(n, r),
                  n) {
                  case "dialog":
                      A("cancel", e),
                      A("close", e),
                      l = r;
                      break;
                  case "iframe":
                  case "object":
                  case "embed":
                      A("load", e),
                      l = r;
                      break;
                  case "video":
                  case "audio":
                      for (l = 0; l < Cn.length; l++)
                          A(Cn[l], e);
                      l = r;
                      break;
                  case "source":
                      A("error", e),
                      l = r;
                      break;
                  case "img":
                  case "image":
                  case "link":
                      A("error", e),
                      A("load", e),
                      l = r;
                      break;
                  case "details":
                      A("toggle", e),
                      l = r;
                      break;
                  case "input":
                      Ji(e, r),
                      l = as(e, r),
                      A("invalid", e);
                      break;
                  case "option":
                      l = r;
                      break;
                  case "select":
                      e._wrapperState = {
                          wasMultiple: !!r.multiple
                      },
                      l = H({}, r, {
                          value: void 0
                      }),
                      A("invalid", e);
                      break;
                  case "textarea":
                      qi(e, r),
                      l = ds(e, r),
                      A("invalid", e);
                      break;
                  default:
                      l = r
                  }
                  ps(n, l),
                  a = l;
                  for (s in a)
                      if (a.hasOwnProperty(s)) {
                          var u = a[s];
                          s === "style" ? Da(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                          u != null && za(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && An(e, u) : typeof u == "number" && An(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (On.hasOwnProperty(s) ? u != null && s === "onScroll" && A("scroll", e) : u != null && ni(e, s, u, o))
                      }
                  switch (n) {
                  case "input":
                      ur(e),
                      bi(e, r, !1);
                      break;
                  case "textarea":
                      ur(e),
                      eo(e);
                      break;
                  case "option":
                      r.value != null && e.setAttribute("value", "" + mt(r.value));
                      break;
                  case "select":
                      e.multiple = !!r.multiple,
                      s = r.value,
                      s != null ? Xt(e, !!r.multiple, s, !1) : r.defaultValue != null && Xt(e, !!r.multiple, r.defaultValue, !0);
                      break;
                  default:
                      typeof l.onClick == "function" && (e.onclick = Qr)
                  }
                  switch (n) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                      r = !!r.autoFocus;
                      break e;
                  case "img":
                      r = !0;
                      break e;
                  default:
                      r = !1
                  }
              }
              r && (t.flags |= 4)
          }
          t.ref !== null && (t.flags |= 512,
          t.flags |= 2097152)
      }
      return le(t),
      null;
  case 6:
      if (e && t.stateNode != null)
          rc(e, t, e.memoizedProps, r);
      else {
          if (typeof r != "string" && t.stateNode === null)
              throw Error(j(166));
          if (n = Et(Xn.current),
          Et(Fe.current),
          yr(t)) {
              if (r = t.stateNode,
              n = t.memoizedProps,
              r[Ue] = t,
              (s = r.nodeValue !== n) && (e = ye,
              e !== null))
                  switch (e.tag) {
                  case 3:
                      vr(r.nodeValue, n, (e.mode & 1) !== 0);
                      break;
                  case 5:
                      e.memoizedProps.suppressHydrationWarning !== !0 && vr(r.nodeValue, n, (e.mode & 1) !== 0)
                  }
              s && (t.flags |= 4)
          } else
              r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
              r[Ue] = t,
              t.stateNode = r
      }
      return le(t),
      null;
  case 13:
      if (U(F),
      r = t.memoizedState,
      e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if ($ && ve !== null && t.mode & 1 && !(t.flags & 128))
              ju(),
              nn(),
              t.flags |= 98560,
              s = !1;
          else if (s = yr(t),
          r !== null && r.dehydrated !== null) {
              if (e === null) {
                  if (!s)
                      throw Error(j(318));
                  if (s = t.memoizedState,
                  s = s !== null ? s.dehydrated : null,
                  !s)
                      throw Error(j(317));
                  s[Ue] = t
              } else
                  nn(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  t.flags |= 4;
              le(t),
              s = !1
          } else
              ze !== null && (Xs(ze),
              ze = null),
              s = !0;
          if (!s)
              return t.flags & 65536 ? t : null
      }
      return t.flags & 128 ? (t.lanes = n,
      t) : (r = r !== null,
      r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
      t.mode & 1 && (e === null || F.current & 1 ? Z === 0 && (Z = 3) : Ui())),
      t.updateQueue !== null && (t.flags |= 4),
      le(t),
      null);
  case 4:
      return ln(),
      Fs(e, t),
      e === null && Wn(t.stateNode.containerInfo),
      le(t),
      null;
  case 10:
      return ji(t.type._context),
      le(t),
      null;
  case 17:
      return me(t.type) && Kr(),
      le(t),
      null;
  case 19:
      if (U(F),
      s = t.memoizedState,
      s === null)
          return le(t),
          null;
      if (r = (t.flags & 128) !== 0,
      o = s.rendering,
      o === null)
          if (r)
              jn(s, !1);
          else {
              if (Z !== 0 || e !== null && e.flags & 128)
                  for (e = t.child; e !== null; ) {
                      if (o = qr(e),
                      o !== null) {
                          for (t.flags |= 128,
                          jn(s, !1),
                          r = o.updateQueue,
                          r !== null && (t.updateQueue = r,
                          t.flags |= 4),
                          t.subtreeFlags = 0,
                          r = n,
                          n = t.child; n !== null; )
                              s = n,
                              e = r,
                              s.flags &= 14680066,
                              o = s.alternate,
                              o === null ? (s.childLanes = 0,
                              s.lanes = e,
                              s.child = null,
                              s.subtreeFlags = 0,
                              s.memoizedProps = null,
                              s.memoizedState = null,
                              s.updateQueue = null,
                              s.dependencies = null,
                              s.stateNode = null) : (s.childLanes = o.childLanes,
                              s.lanes = o.lanes,
                              s.child = o.child,
                              s.subtreeFlags = 0,
                              s.deletions = null,
                              s.memoizedProps = o.memoizedProps,
                              s.memoizedState = o.memoizedState,
                              s.updateQueue = o.updateQueue,
                              s.type = o.type,
                              e = o.dependencies,
                              s.dependencies = e === null ? null : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext
                              }),
                              n = n.sibling;
                          return O(F, F.current & 1 | 2),
                          t.child
                      }
                      e = e.sibling
                  }
              s.tail !== null && Y() > on && (t.flags |= 128,
              r = !0,
              jn(s, !1),
              t.lanes = 4194304)
          }
      else {
          if (!r)
              if (e = qr(o),
              e !== null) {
                  if (t.flags |= 128,
                  r = !0,
                  n = e.updateQueue,
                  n !== null && (t.updateQueue = n,
                  t.flags |= 4),
                  jn(s, !0),
                  s.tail === null && s.tailMode === "hidden" && !o.alternate && !$)
                      return le(t),
                      null
              } else
                  2 * Y() - s.renderingStartTime > on && n !== 1073741824 && (t.flags |= 128,
                  r = !0,
                  jn(s, !1),
                  t.lanes = 4194304);
          s.isBackwards ? (o.sibling = t.child,
          t.child = o) : (n = s.last,
          n !== null ? n.sibling = o : t.child = o,
          s.last = o)
      }
      return s.tail !== null ? (t = s.tail,
      s.rendering = t,
      s.tail = t.sibling,
      s.renderingStartTime = Y(),
      t.sibling = null,
      n = F.current,
      O(F, r ? n & 1 | 2 : n & 1),
      t) : (le(t),
      null);
  case 22:
  case 23:
      return Ai(),
      r = t.memoizedState !== null,
      e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
      r && t.mode & 1 ? ge & 1073741824 && (le(t),
      t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t),
      null;
  case 24:
      return null;
  case 25:
      return null
  }
  throw Error(j(156, t.tag))
}
function Jf(e, t) {
  switch (vi(t),
  t.tag) {
  case 1:
      return me(t.type) && Kr(),
      e = t.flags,
      e & 65536 ? (t.flags = e & -65537 | 128,
      t) : null;
  case 3:
      return ln(),
      U(pe),
      U(ie),
      Ci(),
      e = t.flags,
      e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
      t) : null;
  case 5:
      return Ei(t),
      null;
  case 13:
      if (U(F),
      e = t.memoizedState,
      e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
              throw Error(j(340));
          nn()
      }
      return e = t.flags,
      e & 65536 ? (t.flags = e & -65537 | 128,
      t) : null;
  case 19:
      return U(F),
      null;
  case 4:
      return ln(),
      null;
  case 10:
      return ji(t.type._context),
      null;
  case 22:
  case 23:
      return Ai(),
      null;
  case 24:
      return null;
  default:
      return null
  }
}
var jr = !1
, se = !1
, bf = typeof WeakSet == "function" ? WeakSet : Set
, k = null;
function Kt(e, t) {
  var n = e.ref;
  if (n !== null)
      if (typeof n == "function")
          try {
              n(null)
          } catch (r) {
              B(e, t, r)
          }
      else
          n.current = null
}
function Vs(e, t, n) {
  try {
      n()
  } catch (r) {
      B(e, t, r)
  }
}
var Wo = !1;
function qf(e, t) {
  if (ks = Hr,
  e = au(),
  hi(e)) {
      if ("selectionStart"in e)
          var n = {
              start: e.selectionStart,
              end: e.selectionEnd
          };
      else
          e: {
              n = (n = e.ownerDocument) && n.defaultView || window;
              var r = n.getSelection && n.getSelection();
              if (r && r.rangeCount !== 0) {
                  n = r.anchorNode;
                  var l = r.anchorOffset
                    , s = r.focusNode;
                  r = r.focusOffset;
                  try {
                      n.nodeType,
                      s.nodeType
                  } catch {
                      n = null;
                      break e
                  }
                  var o = 0
                    , a = -1
                    , u = -1
                    , d = 0
                    , g = 0
                    , h = e
                    , m = null;
                  t: for (; ; ) {
                      for (var y; h !== n || l !== 0 && h.nodeType !== 3 || (a = o + l),
                      h !== s || r !== 0 && h.nodeType !== 3 || (u = o + r),
                      h.nodeType === 3 && (o += h.nodeValue.length),
                      (y = h.firstChild) !== null; )
                          m = h,
                          h = y;
                      for (; ; ) {
                          if (h === e)
                              break t;
                          if (m === n && ++d === l && (a = o),
                          m === s && ++g === r && (u = o),
                          (y = h.nextSibling) !== null)
                              break;
                          h = m,
                          m = h.parentNode
                      }
                      h = y
                  }
                  n = a === -1 || u === -1 ? null : {
                      start: a,
                      end: u
                  }
              } else
                  n = null
          }
      n = n || {
          start: 0,
          end: 0
      }
  } else
      n = null;
  for (Es = {
      focusedElem: e,
      selectionRange: n
  },
  Hr = !1,
  k = t; k !== null; )
      if (t = k,
      e = t.child,
      (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t,
          k = e;
      else
          for (; k !== null; ) {
              t = k;
              try {
                  var x = t.alternate;
                  if (t.flags & 1024)
                      switch (t.tag) {
                      case 0:
                      case 11:
                      case 15:
                          break;
                      case 1:
                          if (x !== null) {
                              var v = x.memoizedProps
                                , N = x.memoizedState
                                , f = t.stateNode
                                , c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Ie(t.type, v), N);
                              f.__reactInternalSnapshotBeforeUpdate = c
                          }
                          break;
                      case 3:
                          var p = t.stateNode.containerInfo;
                          p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                          break;
                      case 5:
                      case 6:
                      case 4:
                      case 17:
                          break;
                      default:
                          throw Error(j(163))
                      }
              } catch (w) {
                  B(t, t.return, w)
              }
              if (e = t.sibling,
              e !== null) {
                  e.return = t.return,
                  k = e;
                  break
              }
              k = t.return
          }
  return x = Wo,
  Wo = !1,
  x
}
function Mn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null,
  r !== null) {
      var l = r = r.next;
      do {
          if ((l.tag & e) === e) {
              var s = l.destroy;
              l.destroy = void 0,
              s !== void 0 && Vs(t, n, s)
          }
          l = l.next
      } while (l !== r)
  }
}
function gl(e, t) {
  if (t = t.updateQueue,
  t = t !== null ? t.lastEffect : null,
  t !== null) {
      var n = t = t.next;
      do {
          if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r()
          }
          n = n.next
      } while (n !== t)
  }
}
function Hs(e) {
  var t = e.ref;
  if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
      case 5:
          e = n;
          break;
      default:
          e = n
      }
      typeof t == "function" ? t(e) : t.current = e
  }
}
function lc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null,
  lc(t)),
  e.child = null,
  e.deletions = null,
  e.sibling = null,
  e.tag === 5 && (t = e.stateNode,
  t !== null && (delete t[Ue],
  delete t[Kn],
  delete t[Ts],
  delete t[Rf],
  delete t[Of])),
  e.stateNode = null,
  e.return = null,
  e.dependencies = null,
  e.memoizedProps = null,
  e.memoizedState = null,
  e.pendingProps = null,
  e.stateNode = null,
  e.updateQueue = null
}
function sc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Qo(e) {
  e: for (; ; ) {
      for (; e.sibling === null; ) {
          if (e.return === null || sc(e.return))
              return null;
          e = e.return
      }
      for (e.sibling.return = e.return,
      e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
              continue e;
          e.child.return = e,
          e = e.child
      }
      if (!(e.flags & 2))
          return e.stateNode
  }
}
function Bs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
      e = e.stateNode,
      t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
      t.insertBefore(e, n)) : (t = n,
      t.appendChild(e)),
      n = n._reactRootContainer,
      n != null || t.onclick !== null || (t.onclick = Qr));
  else if (r !== 4 && (e = e.child,
  e !== null))
      for (Bs(e, t, n),
      e = e.sibling; e !== null; )
          Bs(e, t, n),
          e = e.sibling
}
function Ws(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
      e = e.stateNode,
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child,
  e !== null))
      for (Ws(e, t, n),
      e = e.sibling; e !== null; )
          Ws(e, t, n),
          e = e.sibling
}
var ee = null
, Le = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; )
      ic(e, t, n),
      n = n.sibling
}
function ic(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
      try {
          $e.onCommitFiberUnmount(al, n)
      } catch {}
  switch (n.tag) {
  case 5:
      se || Kt(n, t);
  case 6:
      var r = ee
        , l = Le;
      ee = null,
      qe(e, t, n),
      ee = r,
      Le = l,
      ee !== null && (Le ? (e = ee,
      n = n.stateNode,
      e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ee.removeChild(n.stateNode));
      break;
  case 18:
      ee !== null && (Le ? (e = ee,
      n = n.stateNode,
      e.nodeType === 8 ? Kl(e.parentNode, n) : e.nodeType === 1 && Kl(e, n),
      Vn(e)) : Kl(ee, n.stateNode));
      break;
  case 4:
      r = ee,
      l = Le,
      ee = n.stateNode.containerInfo,
      Le = !0,
      qe(e, t, n),
      ee = r,
      Le = l;
      break;
  case 0:
  case 11:
  case 14:
  case 15:
      if (!se && (r = n.updateQueue,
      r !== null && (r = r.lastEffect,
      r !== null))) {
          l = r = r.next;
          do {
              var s = l
                , o = s.destroy;
              s = s.tag,
              o !== void 0 && (s & 2 || s & 4) && Vs(n, t, o),
              l = l.next
          } while (l !== r)
      }
      qe(e, t, n);
      break;
  case 1:
      if (!se && (Kt(n, t),
      r = n.stateNode,
      typeof r.componentWillUnmount == "function"))
          try {
              r.props = n.memoizedProps,
              r.state = n.memoizedState,
              r.componentWillUnmount()
          } catch (a) {
              B(n, t, a)
          }
      qe(e, t, n);
      break;
  case 21:
      qe(e, t, n);
      break;
  case 22:
      n.mode & 1 ? (se = (r = se) || n.memoizedState !== null,
      qe(e, t, n),
      se = r) : qe(e, t, n);
      break;
  default:
      qe(e, t, n)
  }
}
function Ko(e) {
  var t = e.updateQueue;
  if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new bf),
      t.forEach(function(r) {
          var l = ap.bind(null, e, r);
          n.has(r) || (n.add(r),
          r.then(l, l))
      })
  }
}
function Pe(e, t) {
  var n = t.deletions;
  if (n !== null)
      for (var r = 0; r < n.length; r++) {
          var l = n[r];
          try {
              var s = e
                , o = t
                , a = o;
              e: for (; a !== null; ) {
                  switch (a.tag) {
                  case 5:
                      ee = a.stateNode,
                      Le = !1;
                      break e;
                  case 3:
                      ee = a.stateNode.containerInfo,
                      Le = !0;
                      break e;
                  case 4:
                      ee = a.stateNode.containerInfo,
                      Le = !0;
                      break e
                  }
                  a = a.return
              }
              if (ee === null)
                  throw Error(j(160));
              ic(s, o, l),
              ee = null,
              Le = !1;
              var u = l.alternate;
              u !== null && (u.return = null),
              l.return = null
          } catch (d) {
              B(l, t, d)
          }
      }
  if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
          oc(t, e),
          t = t.sibling
}
function oc(e, t) {
  var n = e.alternate
    , r = e.flags;
  switch (e.tag) {
  case 0:
  case 11:
  case 14:
  case 15:
      if (Pe(t, e),
      Oe(e),
      r & 4) {
          try {
              Mn(3, e, e.return),
              gl(3, e)
          } catch (v) {
              B(e, e.return, v)
          }
          try {
              Mn(5, e, e.return)
          } catch (v) {
              B(e, e.return, v)
          }
      }
      break;
  case 1:
      Pe(t, e),
      Oe(e),
      r & 512 && n !== null && Kt(n, n.return);
      break;
  case 5:
      if (Pe(t, e),
      Oe(e),
      r & 512 && n !== null && Kt(n, n.return),
      e.flags & 32) {
          var l = e.stateNode;
          try {
              An(l, "")
          } catch (v) {
              B(e, e.return, v)
          }
      }
      if (r & 4 && (l = e.stateNode,
      l != null)) {
          var s = e.memoizedProps
            , o = n !== null ? n.memoizedProps : s
            , a = e.type
            , u = e.updateQueue;
          if (e.updateQueue = null,
          u !== null)
              try {
                  a === "input" && s.type === "radio" && s.name != null && Pa(l, s),
                  ms(a, o);
                  var d = ms(a, s);
                  for (o = 0; o < u.length; o += 2) {
                      var g = u[o]
                        , h = u[o + 1];
                      g === "style" ? Da(l, h) : g === "dangerouslySetInnerHTML" ? za(l, h) : g === "children" ? An(l, h) : ni(l, g, h, d)
                  }
                  switch (a) {
                  case "input":
                      us(l, s);
                      break;
                  case "textarea":
                      Ia(l, s);
                      break;
                  case "select":
                      var m = l._wrapperState.wasMultiple;
                      l._wrapperState.wasMultiple = !!s.multiple;
                      var y = s.value;
                      y != null ? Xt(l, !!s.multiple, y, !1) : m !== !!s.multiple && (s.defaultValue != null ? Xt(l, !!s.multiple, s.defaultValue, !0) : Xt(l, !!s.multiple, s.multiple ? [] : "", !1))
                  }
                  l[Kn] = s
              } catch (v) {
                  B(e, e.return, v)
              }
      }
      break;
  case 6:
      if (Pe(t, e),
      Oe(e),
      r & 4) {
          if (e.stateNode === null)
              throw Error(j(162));
          l = e.stateNode,
          s = e.memoizedProps;
          try {
              l.nodeValue = s
          } catch (v) {
              B(e, e.return, v)
          }
      }
      break;
  case 3:
      if (Pe(t, e),
      Oe(e),
      r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
              Vn(t.containerInfo)
          } catch (v) {
              B(e, e.return, v)
          }
      break;
  case 4:
      Pe(t, e),
      Oe(e);
      break;
  case 13:
      Pe(t, e),
      Oe(e),
      l = e.child,
      l.flags & 8192 && (s = l.memoizedState !== null,
      l.stateNode.isHidden = s,
      !s || l.alternate !== null && l.alternate.memoizedState !== null || (Ri = Y())),
      r & 4 && Ko(e);
      break;
  case 22:
      if (g = n !== null && n.memoizedState !== null,
      e.mode & 1 ? (se = (d = se) || g,
      Pe(t, e),
      se = d) : Pe(t, e),
      Oe(e),
      r & 8192) {
          if (d = e.memoizedState !== null,
          (e.stateNode.isHidden = d) && !g && e.mode & 1)
              for (k = e,
              g = e.child; g !== null; ) {
                  for (h = k = g; k !== null; ) {
                      switch (m = k,
                      y = m.child,
                      m.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                          Mn(4, m, m.return);
                          break;
                      case 1:
                          Kt(m, m.return);
                          var x = m.stateNode;
                          if (typeof x.componentWillUnmount == "function") {
                              r = m,
                              n = m.return;
                              try {
                                  t = r,
                                  x.props = t.memoizedProps,
                                  x.state = t.memoizedState,
                                  x.componentWillUnmount()
                              } catch (v) {
                                  B(r, n, v)
                              }
                          }
                          break;
                      case 5:
                          Kt(m, m.return);
                          break;
                      case 22:
                          if (m.memoizedState !== null) {
                              Xo(h);
                              continue
                          }
                      }
                      y !== null ? (y.return = m,
                      k = y) : Xo(h)
                  }
                  g = g.sibling
              }
          e: for (g = null,
          h = e; ; ) {
              if (h.tag === 5) {
                  if (g === null) {
                      g = h;
                      try {
                          l = h.stateNode,
                          d ? (s = l.style,
                          typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = h.stateNode,
                          u = h.memoizedProps.style,
                          o = u != null && u.hasOwnProperty("display") ? u.display : null,
                          a.style.display = Ma("display", o))
                      } catch (v) {
                          B(e, e.return, v)
                      }
                  }
              } else if (h.tag === 6) {
                  if (g === null)
                      try {
                          h.stateNode.nodeValue = d ? "" : h.memoizedProps
                      } catch (v) {
                          B(e, e.return, v)
                      }
              } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                  h.child.return = h,
                  h = h.child;
                  continue
              }
              if (h === e)
                  break e;
              for (; h.sibling === null; ) {
                  if (h.return === null || h.return === e)
                      break e;
                  g === h && (g = null),
                  h = h.return
              }
              g === h && (g = null),
              h.sibling.return = h.return,
              h = h.sibling
          }
      }
      break;
  case 19:
      Pe(t, e),
      Oe(e),
      r & 4 && Ko(e);
      break;
  case 21:
      break;
  default:
      Pe(t, e),
      Oe(e)
  }
}
function Oe(e) {
  var t = e.flags;
  if (t & 2) {
      try {
          e: {
              for (var n = e.return; n !== null; ) {
                  if (sc(n)) {
                      var r = n;
                      break e
                  }
                  n = n.return
              }
              throw Error(j(160))
          }
          switch (r.tag) {
          case 5:
              var l = r.stateNode;
              r.flags & 32 && (An(l, ""),
              r.flags &= -33);
              var s = Qo(e);
              Ws(e, s, l);
              break;
          case 3:
          case 4:
              var o = r.stateNode.containerInfo
                , a = Qo(e);
              Bs(e, a, o);
              break;
          default:
              throw Error(j(161))
          }
      } catch (u) {
          B(e, e.return, u)
      }
      e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function ep(e, t, n) {
  k = e,
  ac(e)
}
function ac(e, t, n) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
      var l = k
        , s = l.child;
      if (l.tag === 22 && r) {
          var o = l.memoizedState !== null || jr;
          if (!o) {
              var a = l.alternate
                , u = a !== null && a.memoizedState !== null || se;
              a = jr;
              var d = se;
              if (jr = o,
              (se = u) && !d)
                  for (k = l; k !== null; )
                      o = k,
                      u = o.child,
                      o.tag === 22 && o.memoizedState !== null ? Go(l) : u !== null ? (u.return = o,
                      k = u) : Go(l);
              for (; s !== null; )
                  k = s,
                  ac(s),
                  s = s.sibling;
              k = l,
              jr = a,
              se = d
          }
          Yo(e)
      } else
          l.subtreeFlags & 8772 && s !== null ? (s.return = l,
          k = s) : Yo(e)
  }
}
function Yo(e) {
  for (; k !== null; ) {
      var t = k;
      if (t.flags & 8772) {
          var n = t.alternate;
          try {
              if (t.flags & 8772)
                  switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                      se || gl(5, t);
                      break;
                  case 1:
                      var r = t.stateNode;
                      if (t.flags & 4 && !se)
                          if (n === null)
                              r.componentDidMount();
                          else {
                              var l = t.elementType === t.type ? n.memoizedProps : Ie(t.type, n.memoizedProps);
                              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                          }
                      var s = t.updateQueue;
                      s !== null && Lo(t, s, r);
                      break;
                  case 3:
                      var o = t.updateQueue;
                      if (o !== null) {
                          if (n = null,
                          t.child !== null)
                              switch (t.child.tag) {
                              case 5:
                                  n = t.child.stateNode;
                                  break;
                              case 1:
                                  n = t.child.stateNode
                              }
                          Lo(t, o, n)
                      }
                      break;
                  case 5:
                      var a = t.stateNode;
                      if (n === null && t.flags & 4) {
                          n = a;
                          var u = t.memoizedProps;
                          switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                              u.autoFocus && n.focus();
                              break;
                          case "img":
                              u.src && (n.src = u.src)
                          }
                      }
                      break;
                  case 6:
                      break;
                  case 4:
                      break;
                  case 12:
                      break;
                  case 13:
                      if (t.memoizedState === null) {
                          var d = t.alternate;
                          if (d !== null) {
                              var g = d.memoizedState;
                              if (g !== null) {
                                  var h = g.dehydrated;
                                  h !== null && Vn(h)
                              }
                          }
                      }
                      break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                      break;
                  default:
                      throw Error(j(163))
                  }
              se || t.flags & 512 && Hs(t)
          } catch (m) {
              B(t, t.return, m)
          }
      }
      if (t === e) {
          k = null;
          break
      }
      if (n = t.sibling,
      n !== null) {
          n.return = t.return,
          k = n;
          break
      }
      k = t.return
  }
}
function Xo(e) {
  for (; k !== null; ) {
      var t = k;
      if (t === e) {
          k = null;
          break
      }
      var n = t.sibling;
      if (n !== null) {
          n.return = t.return,
          k = n;
          break
      }
      k = t.return
  }
}
function Go(e) {
  for (; k !== null; ) {
      var t = k;
      try {
          switch (t.tag) {
          case 0:
          case 11:
          case 15:
              var n = t.return;
              try {
                  gl(4, t)
              } catch (u) {
                  B(t, n, u)
              }
              break;
          case 1:
              var r = t.stateNode;
              if (typeof r.componentDidMount == "function") {
                  var l = t.return;
                  try {
                      r.componentDidMount()
                  } catch (u) {
                      B(t, l, u)
                  }
              }
              var s = t.return;
              try {
                  Hs(t)
              } catch (u) {
                  B(t, s, u)
              }
              break;
          case 5:
              var o = t.return;
              try {
                  Hs(t)
              } catch (u) {
                  B(t, o, u)
              }
          }
      } catch (u) {
          B(t, t.return, u)
      }
      if (t === e) {
          k = null;
          break
      }
      var a = t.sibling;
      if (a !== null) {
          a.return = t.return,
          k = a;
          break
      }
      k = t.return
  }
}
var tp = Math.ceil
, nl = be.ReactCurrentDispatcher
, Mi = be.ReactCurrentOwner
, Ee = be.ReactCurrentBatchConfig
, D = 0
, q = null
, X = null
, te = 0
, ge = 0
, Yt = vt(0)
, Z = 0
, bn = null
, Lt = 0
, vl = 0
, Di = 0
, Dn = null
, de = null
, Ri = 0
, on = 1 / 0
, He = null
, rl = !1
, Qs = null
, dt = null
, Nr = !1
, st = null
, ll = 0
, Rn = 0
, Ks = null
, Dr = -1
, Rr = 0;
function ae() {
  return D & 6 ? Y() : Dr !== -1 ? Dr : Dr = Y()
}
function ft(e) {
  return e.mode & 1 ? D & 2 && te !== 0 ? te & -te : Uf.transition !== null ? (Rr === 0 && (Rr = Ka()),
  Rr) : (e = R,
  e !== 0 || (e = window.event,
  e = e === void 0 ? 16 : qa(e.type)),
  e) : 1
}
function De(e, t, n, r) {
  if (50 < Rn)
      throw Rn = 0,
      Ks = null,
      Error(j(185));
  tr(e, n, r),
  (!(D & 2) || e !== q) && (e === q && (!(D & 2) && (vl |= n),
  Z === 4 && rt(e, te)),
  he(e, r),
  n === 1 && D === 0 && !(t.mode & 1) && (on = Y() + 500,
  pl && yt()))
}
function he(e, t) {
  var n = e.callbackNode;
  Ad(e, t);
  var r = Vr(e, e === q ? te : 0);
  if (r === 0)
      n !== null && ro(n),
      e.callbackNode = null,
      e.callbackPriority = 0;
  else if (t = r & -r,
  e.callbackPriority !== t) {
      if (n != null && ro(n),
      t === 1)
          e.tag === 0 ? Af(Zo.bind(null, e)) : yu(Zo.bind(null, e)),
          Mf(function() {
              !(D & 6) && yt()
          }),
          n = null;
      else {
          switch (Ya(r)) {
          case 1:
              n = oi;
              break;
          case 4:
              n = Wa;
              break;
          case 16:
              n = Fr;
              break;
          case 536870912:
              n = Qa;
              break;
          default:
              n = Fr
          }
          n = gc(n, uc.bind(null, e))
      }
      e.callbackPriority = t,
      e.callbackNode = n
  }
}
function uc(e, t) {
  if (Dr = -1,
  Rr = 0,
  D & 6)
      throw Error(j(327));
  var n = e.callbackNode;
  if (qt() && e.callbackNode !== n)
      return null;
  var r = Vr(e, e === q ? te : 0);
  if (r === 0)
      return null;
  if (r & 30 || r & e.expiredLanes || t)
      t = sl(e, r);
  else {
      t = r;
      var l = D;
      D |= 2;
      var s = dc();
      (q !== e || te !== t) && (He = null,
      on = Y() + 500,
      Ct(e, t));
      do
          try {
              lp();
              break
          } catch (a) {
              cc(e, a)
          }
      while (!0);
      wi(),
      nl.current = s,
      D = l,
      X !== null ? t = 0 : (q = null,
      te = 0,
      t = Z)
  }
  if (t !== 0) {
      if (t === 2 && (l = xs(e),
      l !== 0 && (r = l,
      t = Ys(e, l))),
      t === 1)
          throw n = bn,
          Ct(e, 0),
          rt(e, r),
          he(e, Y()),
          n;
      if (t === 6)
          rt(e, r);
      else {
          if (l = e.current.alternate,
          !(r & 30) && !np(l) && (t = sl(e, r),
          t === 2 && (s = xs(e),
          s !== 0 && (r = s,
          t = Ys(e, s))),
          t === 1))
              throw n = bn,
              Ct(e, 0),
              rt(e, r),
              he(e, Y()),
              n;
          switch (e.finishedWork = l,
          e.finishedLanes = r,
          t) {
          case 0:
          case 1:
              throw Error(j(345));
          case 2:
              Nt(e, de, He);
              break;
          case 3:
              if (rt(e, r),
              (r & 130023424) === r && (t = Ri + 500 - Y(),
              10 < t)) {
                  if (Vr(e, 0) !== 0)
                      break;
                  if (l = e.suspendedLanes,
                  (l & r) !== r) {
                      ae(),
                      e.pingedLanes |= e.suspendedLanes & l;
                      break
                  }
                  e.timeoutHandle = _s(Nt.bind(null, e, de, He), t);
                  break
              }
              Nt(e, de, He);
              break;
          case 4:
              if (rt(e, r),
              (r & 4194240) === r)
                  break;
              for (t = e.eventTimes,
              l = -1; 0 < r; ) {
                  var o = 31 - Me(r);
                  s = 1 << o,
                  o = t[o],
                  o > l && (l = o),
                  r &= ~s
              }
              if (r = l,
              r = Y() - r,
              r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * tp(r / 1960)) - r,
              10 < r) {
                  e.timeoutHandle = _s(Nt.bind(null, e, de, He), r);
                  break
              }
              Nt(e, de, He);
              break;
          case 5:
              Nt(e, de, He);
              break;
          default:
              throw Error(j(329))
          }
      }
  }
  return he(e, Y()),
  e.callbackNode === n ? uc.bind(null, e) : null
}
function Ys(e, t) {
  var n = Dn;
  return e.current.memoizedState.isDehydrated && (Ct(e, t).flags |= 256),
  e = sl(e, t),
  e !== 2 && (t = de,
  de = n,
  t !== null && Xs(t)),
  e
}
function Xs(e) {
  de === null ? de = e : de.push.apply(de, e)
}
function np(e) {
  for (var t = e; ; ) {
      if (t.flags & 16384) {
          var n = t.updateQueue;
          if (n !== null && (n = n.stores,
          n !== null))
              for (var r = 0; r < n.length; r++) {
                  var l = n[r]
                    , s = l.getSnapshot;
                  l = l.value;
                  try {
                      if (!Re(s(), l))
                          return !1
                  } catch {
                      return !1
                  }
              }
      }
      if (n = t.child,
      t.subtreeFlags & 16384 && n !== null)
          n.return = t,
          t = n;
      else {
          if (t === e)
              break;
          for (; t.sibling === null; ) {
              if (t.return === null || t.return === e)
                  return !0;
              t = t.return
          }
          t.sibling.return = t.return,
          t = t.sibling
      }
  }
  return !0
}
function rt(e, t) {
  for (t &= ~Di,
  t &= ~vl,
  e.suspendedLanes |= t,
  e.pingedLanes &= ~t,
  e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Me(t)
        , r = 1 << n;
      e[n] = -1,
      t &= ~r
  }
}
function Zo(e) {
  if (D & 6)
      throw Error(j(327));
  qt();
  var t = Vr(e, 0);
  if (!(t & 1))
      return he(e, Y()),
      null;
  var n = sl(e, t);
  if (e.tag !== 0 && n === 2) {
      var r = xs(e);
      r !== 0 && (t = r,
      n = Ys(e, r))
  }
  if (n === 1)
      throw n = bn,
      Ct(e, 0),
      rt(e, t),
      he(e, Y()),
      n;
  if (n === 6)
      throw Error(j(345));
  return e.finishedWork = e.current.alternate,
  e.finishedLanes = t,
  Nt(e, de, He),
  he(e, Y()),
  null
}
function Oi(e, t) {
  var n = D;
  D |= 1;
  try {
      return e(t)
  } finally {
      D = n,
      D === 0 && (on = Y() + 500,
      pl && yt())
  }
}
function zt(e) {
  st !== null && st.tag === 0 && !(D & 6) && qt();
  var t = D;
  D |= 1;
  var n = Ee.transition
    , r = R;
  try {
      if (Ee.transition = null,
      R = 1,
      e)
          return e()
  } finally {
      R = r,
      Ee.transition = n,
      D = t,
      !(D & 6) && yt()
  }
}
function Ai() {
  ge = Yt.current,
  U(Yt)
}
function Ct(e, t) {
  e.finishedWork = null,
  e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1,
  zf(n)),
  X !== null)
      for (n = X.return; n !== null; ) {
          var r = n;
          switch (vi(r),
          r.tag) {
          case 1:
              r = r.type.childContextTypes,
              r != null && Kr();
              break;
          case 3:
              ln(),
              U(pe),
              U(ie),
              Ci();
              break;
          case 5:
              Ei(r);
              break;
          case 4:
              ln();
              break;
          case 13:
              U(F);
              break;
          case 19:
              U(F);
              break;
          case 10:
              ji(r.type._context);
              break;
          case 22:
          case 23:
              Ai()
          }
          n = n.return
      }
  if (q = e,
  X = e = pt(e.current, null),
  te = ge = t,
  Z = 0,
  bn = null,
  Di = vl = Lt = 0,
  de = Dn = null,
  kt !== null) {
      for (t = 0; t < kt.length; t++)
          if (n = kt[t],
          r = n.interleaved,
          r !== null) {
              n.interleaved = null;
              var l = r.next
                , s = n.pending;
              if (s !== null) {
                  var o = s.next;
                  s.next = l,
                  r.next = o
              }
              n.pending = r
          }
      kt = null
  }
  return e
}
function cc(e, t) {
  do {
      var n = X;
      try {
          if (wi(),
          Lr.current = tl,
          el) {
              for (var r = V.memoizedState; r !== null; ) {
                  var l = r.queue;
                  l !== null && (l.pending = null),
                  r = r.next
              }
              el = !1
          }
          if (It = 0,
          b = G = V = null,
          zn = !1,
          Gn = 0,
          Mi.current = null,
          n === null || n.return === null) {
              Z = 1,
              bn = t,
              X = null;
              break
          }
          e: {
              var s = e
                , o = n.return
                , a = n
                , u = t;
              if (t = te,
              a.flags |= 32768,
              u !== null && typeof u == "object" && typeof u.then == "function") {
                  var d = u
                    , g = a
                    , h = g.tag;
                  if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                      var m = g.alternate;
                      m ? (g.updateQueue = m.updateQueue,
                      g.memoizedState = m.memoizedState,
                      g.lanes = m.lanes) : (g.updateQueue = null,
                      g.memoizedState = null)
                  }
                  var y = Ao(o);
                  if (y !== null) {
                      y.flags &= -257,
                      Uo(y, o, a, s, t),
                      y.mode & 1 && Oo(s, d, t),
                      t = y,
                      u = d;
                      var x = t.updateQueue;
                      if (x === null) {
                          var v = new Set;
                          v.add(u),
                          t.updateQueue = v
                      } else
                          x.add(u);
                      break e
                  } else {
                      if (!(t & 1)) {
                          Oo(s, d, t),
                          Ui();
                          break e
                      }
                      u = Error(j(426))
                  }
              } else if ($ && a.mode & 1) {
                  var N = Ao(o);
                  if (N !== null) {
                      !(N.flags & 65536) && (N.flags |= 256),
                      Uo(N, o, a, s, t),
                      yi(sn(u, a));
                      break e
                  }
              }
              s = u = sn(u, a),
              Z !== 4 && (Z = 2),
              Dn === null ? Dn = [s] : Dn.push(s),
              s = o;
              do {
                  switch (s.tag) {
                  case 3:
                      s.flags |= 65536,
                      t &= -t,
                      s.lanes |= t;
                      var f = Yu(s, u, t);
                      Io(s, f);
                      break e;
                  case 1:
                      a = u;
                      var c = s.type
                        , p = s.stateNode;
                      if (!(s.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (dt === null || !dt.has(p)))) {
                          s.flags |= 65536,
                          t &= -t,
                          s.lanes |= t;
                          var w = Xu(s, a, t);
                          Io(s, w);
                          break e
                      }
                  }
                  s = s.return
              } while (s !== null)
          }
          pc(n)
      } catch (S) {
          t = S,
          X === n && n !== null && (X = n = n.return);
          continue
      }
      break
  } while (!0)
}
function dc() {
  var e = nl.current;
  return nl.current = tl,
  e === null ? tl : e
}
function Ui() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
  q === null || !(Lt & 268435455) && !(vl & 268435455) || rt(q, te)
}
function sl(e, t) {
  var n = D;
  D |= 2;
  var r = dc();
  (q !== e || te !== t) && (He = null,
  Ct(e, t));
  do
      try {
          rp();
          break
      } catch (l) {
          cc(e, l)
      }
  while (!0);
  if (wi(),
  D = n,
  nl.current = r,
  X !== null)
      throw Error(j(261));
  return q = null,
  te = 0,
  Z
}
function rp() {
  for (; X !== null; )
      fc(X)
}
function lp() {
  for (; X !== null && !Td(); )
      fc(X)
}
function fc(e) {
  var t = hc(e.alternate, e, ge);
  e.memoizedProps = e.pendingProps,
  t === null ? pc(e) : X = t,
  Mi.current = null
}
function pc(e) {
  var t = e;
  do {
      var n = t.alternate;
      if (e = t.return,
      t.flags & 32768) {
          if (n = Jf(n, t),
          n !== null) {
              n.flags &= 32767,
              X = n;
              return
          }
          if (e !== null)
              e.flags |= 32768,
              e.subtreeFlags = 0,
              e.deletions = null;
          else {
              Z = 6,
              X = null;
              return
          }
      } else if (n = Zf(n, t, ge),
      n !== null) {
          X = n;
          return
      }
      if (t = t.sibling,
      t !== null) {
          X = t;
          return
      }
      X = t = e
  } while (t !== null);
  Z === 0 && (Z = 5)
}
function Nt(e, t, n) {
  var r = R
    , l = Ee.transition;
  try {
      Ee.transition = null,
      R = 1,
      sp(e, t, n, r)
  } finally {
      Ee.transition = l,
      R = r
  }
  return null
}
function sp(e, t, n, r) {
  do
      qt();
  while (st !== null);
  if (D & 6)
      throw Error(j(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
      return null;
  if (e.finishedWork = null,
  e.finishedLanes = 0,
  n === e.current)
      throw Error(j(177));
  e.callbackNode = null,
  e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (Ud(e, s),
  e === q && (X = q = null,
  te = 0),
  !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Nr || (Nr = !0,
  gc(Fr, function() {
      return qt(),
      null
  })),
  s = (n.flags & 15990) !== 0,
  n.subtreeFlags & 15990 || s) {
      s = Ee.transition,
      Ee.transition = null;
      var o = R;
      R = 1;
      var a = D;
      D |= 4,
      Mi.current = null,
      qf(e, n),
      oc(n, e),
      Ef(Es),
      Hr = !!ks,
      Es = ks = null,
      e.current = n,
      ep(n),
      Pd(),
      D = a,
      R = o,
      Ee.transition = s
  } else
      e.current = n;
  if (Nr && (Nr = !1,
  st = e,
  ll = l),
  s = e.pendingLanes,
  s === 0 && (dt = null),
  zd(n.stateNode),
  he(e, Y()),
  t !== null)
      for (r = e.onRecoverableError,
      n = 0; n < t.length; n++)
          l = t[n],
          r(l.value, {
              componentStack: l.stack,
              digest: l.digest
          });
  if (rl)
      throw rl = !1,
      e = Qs,
      Qs = null,
      e;
  return ll & 1 && e.tag !== 0 && qt(),
  s = e.pendingLanes,
  s & 1 ? e === Ks ? Rn++ : (Rn = 0,
  Ks = e) : Rn = 0,
  yt(),
  null
}
function qt() {
  if (st !== null) {
      var e = Ya(ll)
        , t = Ee.transition
        , n = R;
      try {
          if (Ee.transition = null,
          R = 16 > e ? 16 : e,
          st === null)
              var r = !1;
          else {
              if (e = st,
              st = null,
              ll = 0,
              D & 6)
                  throw Error(j(331));
              var l = D;
              for (D |= 4,
              k = e.current; k !== null; ) {
                  var s = k
                    , o = s.child;
                  if (k.flags & 16) {
                      var a = s.deletions;
                      if (a !== null) {
                          for (var u = 0; u < a.length; u++) {
                              var d = a[u];
                              for (k = d; k !== null; ) {
                                  var g = k;
                                  switch (g.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                      Mn(8, g, s)
                                  }
                                  var h = g.child;
                                  if (h !== null)
                                      h.return = g,
                                      k = h;
                                  else
                                      for (; k !== null; ) {
                                          g = k;
                                          var m = g.sibling
                                            , y = g.return;
                                          if (lc(g),
                                          g === d) {
                                              k = null;
                                              break
                                          }
                                          if (m !== null) {
                                              m.return = y,
                                              k = m;
                                              break
                                          }
                                          k = y
                                      }
                              }
                          }
                          var x = s.alternate;
                          if (x !== null) {
                              var v = x.child;
                              if (v !== null) {
                                  x.child = null;
                                  do {
                                      var N = v.sibling;
                                      v.sibling = null,
                                      v = N
                                  } while (v !== null)
                              }
                          }
                          k = s
                      }
                  }
                  if (s.subtreeFlags & 2064 && o !== null)
                      o.return = s,
                      k = o;
                  else
                      e: for (; k !== null; ) {
                          if (s = k,
                          s.flags & 2048)
                              switch (s.tag) {
                              case 0:
                              case 11:
                              case 15:
                                  Mn(9, s, s.return)
                              }
                          var f = s.sibling;
                          if (f !== null) {
                              f.return = s.return,
                              k = f;
                              break e
                          }
                          k = s.return
                      }
              }
              var c = e.current;
              for (k = c; k !== null; ) {
                  o = k;
                  var p = o.child;
                  if (o.subtreeFlags & 2064 && p !== null)
                      p.return = o,
                      k = p;
                  else
                      e: for (o = c; k !== null; ) {
                          if (a = k,
                          a.flags & 2048)
                              try {
                                  switch (a.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                      gl(9, a)
                                  }
                              } catch (S) {
                                  B(a, a.return, S)
                              }
                          if (a === o) {
                              k = null;
                              break e
                          }
                          var w = a.sibling;
                          if (w !== null) {
                              w.return = a.return,
                              k = w;
                              break e
                          }
                          k = a.return
                      }
              }
              if (D = l,
              yt(),
              $e && typeof $e.onPostCommitFiberRoot == "function")
                  try {
                      $e.onPostCommitFiberRoot(al, e)
                  } catch {}
              r = !0
          }
          return r
      } finally {
          R = n,
          Ee.transition = t
      }
  }
  return !1
}
function Jo(e, t, n) {
  t = sn(n, t),
  t = Yu(e, t, 1),
  e = ct(e, t, 1),
  t = ae(),
  e !== null && (tr(e, 1, t),
  he(e, t))
}
function B(e, t, n) {
  if (e.tag === 3)
      Jo(e, e, n);
  else
      for (; t !== null; ) {
          if (t.tag === 3) {
              Jo(t, e, n);
              break
          } else if (t.tag === 1) {
              var r = t.stateNode;
              if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (dt === null || !dt.has(r))) {
                  e = sn(n, e),
                  e = Xu(t, e, 1),
                  t = ct(t, e, 1),
                  e = ae(),
                  t !== null && (tr(t, 1, e),
                  he(t, e));
                  break
              }
          }
          t = t.return
      }
}
function ip(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
  t = ae(),
  e.pingedLanes |= e.suspendedLanes & n,
  q === e && (te & n) === n && (Z === 4 || Z === 3 && (te & 130023424) === te && 500 > Y() - Ri ? Ct(e, 0) : Di |= n),
  he(e, t)
}
function mc(e, t) {
  t === 0 && (e.mode & 1 ? (t = fr,
  fr <<= 1,
  !(fr & 130023424) && (fr = 4194304)) : t = 1);
  var n = ae();
  e = Ge(e, t),
  e !== null && (tr(e, t, n),
  he(e, n))
}
function op(e) {
  var t = e.memoizedState
    , n = 0;
  t !== null && (n = t.retryLane),
  mc(e, n)
}
function ap(e, t) {
  var n = 0;
  switch (e.tag) {
  case 13:
      var r = e.stateNode
        , l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
  case 19:
      r = e.stateNode;
      break;
  default:
      throw Error(j(314))
  }
  r !== null && r.delete(t),
  mc(e, n)
}
var hc;
hc = function(e, t, n) {
  if (e !== null)
      if (e.memoizedProps !== t.pendingProps || pe.current)
          fe = !0;
      else {
          if (!(e.lanes & n) && !(t.flags & 128))
              return fe = !1,
              Gf(e, t, n);
          fe = !!(e.flags & 131072)
      }
  else
      fe = !1,
      $ && t.flags & 1048576 && xu(t, Gr, t.index);
  switch (t.lanes = 0,
  t.tag) {
  case 2:
      var r = t.type;
      Mr(e, t),
      e = t.pendingProps;
      var l = tn(t, ie.current);
      bt(t, n),
      l = Ti(null, t, r, e, l, n);
      var s = Pi();
      return t.flags |= 1,
      typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
      t.memoizedState = null,
      t.updateQueue = null,
      me(r) ? (s = !0,
      Yr(t)) : s = !1,
      t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
      Si(t),
      l.updater = hl,
      t.stateNode = l,
      l._reactInternals = t,
      Ds(t, r, e, n),
      t = As(null, t, r, !0, s, n)) : (t.tag = 0,
      $ && s && gi(t),
      oe(null, t, l, n),
      t = t.child),
      t;
  case 16:
      r = t.elementType;
      e: {
          switch (Mr(e, t),
          e = t.pendingProps,
          l = r._init,
          r = l(r._payload),
          t.type = r,
          l = t.tag = cp(r),
          e = Ie(r, e),
          l) {
          case 0:
              t = Os(null, t, r, e, n);
              break e;
          case 1:
              t = Vo(null, t, r, e, n);
              break e;
          case 11:
              t = $o(null, t, r, e, n);
              break e;
          case 14:
              t = Fo(null, t, r, Ie(r.type, e), n);
              break e
          }
          throw Error(j(306, r, ""))
      }
      return t;
  case 0:
      return r = t.type,
      l = t.pendingProps,
      l = t.elementType === r ? l : Ie(r, l),
      Os(e, t, r, l, n);
  case 1:
      return r = t.type,
      l = t.pendingProps,
      l = t.elementType === r ? l : Ie(r, l),
      Vo(e, t, r, l, n);
  case 3:
      e: {
          if (bu(t),
          e === null)
              throw Error(j(387));
          r = t.pendingProps,
          s = t.memoizedState,
          l = s.element,
          Eu(e, t),
          br(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element,
          s.isDehydrated)
              if (s = {
                  element: r,
                  isDehydrated: !1,
                  cache: o.cache,
                  pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                  transitions: o.transitions
              },
              t.updateQueue.baseState = s,
              t.memoizedState = s,
              t.flags & 256) {
                  l = sn(Error(j(423)), t),
                  t = Ho(e, t, r, n, l);
                  break e
              } else if (r !== l) {
                  l = sn(Error(j(424)), t),
                  t = Ho(e, t, r, n, l);
                  break e
              } else
                  for (ve = ut(t.stateNode.containerInfo.firstChild),
                  ye = t,
                  $ = !0,
                  ze = null,
                  n = Su(t, null, r, n),
                  t.child = n; n; )
                      n.flags = n.flags & -3 | 4096,
                      n = n.sibling;
          else {
              if (nn(),
              r === l) {
                  t = Ze(e, t, n);
                  break e
              }
              oe(e, t, r, n)
          }
          t = t.child
      }
      return t;
  case 5:
      return Cu(t),
      e === null && Ls(t),
      r = t.type,
      l = t.pendingProps,
      s = e !== null ? e.memoizedProps : null,
      o = l.children,
      Cs(r, l) ? o = null : s !== null && Cs(r, s) && (t.flags |= 32),
      Ju(e, t),
      oe(e, t, o, n),
      t.child;
  case 6:
      return e === null && Ls(t),
      null;
  case 13:
      return qu(e, t, n);
  case 4:
      return ki(t, t.stateNode.containerInfo),
      r = t.pendingProps,
      e === null ? t.child = rn(t, null, r, n) : oe(e, t, r, n),
      t.child;
  case 11:
      return r = t.type,
      l = t.pendingProps,
      l = t.elementType === r ? l : Ie(r, l),
      $o(e, t, r, l, n);
  case 7:
      return oe(e, t, t.pendingProps, n),
      t.child;
  case 8:
      return oe(e, t, t.pendingProps.children, n),
      t.child;
  case 12:
      return oe(e, t, t.pendingProps.children, n),
      t.child;
  case 10:
      e: {
          if (r = t.type._context,
          l = t.pendingProps,
          s = t.memoizedProps,
          o = l.value,
          O(Zr, r._currentValue),
          r._currentValue = o,
          s !== null)
              if (Re(s.value, o)) {
                  if (s.children === l.children && !pe.current) {
                      t = Ze(e, t, n);
                      break e
                  }
              } else
                  for (s = t.child,
                  s !== null && (s.return = t); s !== null; ) {
                      var a = s.dependencies;
                      if (a !== null) {
                          o = s.child;
                          for (var u = a.firstContext; u !== null; ) {
                              if (u.context === r) {
                                  if (s.tag === 1) {
                                      u = Ke(-1, n & -n),
                                      u.tag = 2;
                                      var d = s.updateQueue;
                                      if (d !== null) {
                                          d = d.shared;
                                          var g = d.pending;
                                          g === null ? u.next = u : (u.next = g.next,
                                          g.next = u),
                                          d.pending = u
                                      }
                                  }
                                  s.lanes |= n,
                                  u = s.alternate,
                                  u !== null && (u.lanes |= n),
                                  zs(s.return, n, t),
                                  a.lanes |= n;
                                  break
                              }
                              u = u.next
                          }
                      } else if (s.tag === 10)
                          o = s.type === t.type ? null : s.child;
                      else if (s.tag === 18) {
                          if (o = s.return,
                          o === null)
                              throw Error(j(341));
                          o.lanes |= n,
                          a = o.alternate,
                          a !== null && (a.lanes |= n),
                          zs(o, n, t),
                          o = s.sibling
                      } else
                          o = s.child;
                      if (o !== null)
                          o.return = s;
                      else
                          for (o = s; o !== null; ) {
                              if (o === t) {
                                  o = null;
                                  break
                              }
                              if (s = o.sibling,
                              s !== null) {
                                  s.return = o.return,
                                  o = s;
                                  break
                              }
                              o = o.return
                          }
                      s = o
                  }
          oe(e, t, l.children, n),
          t = t.child
      }
      return t;
  case 9:
      return l = t.type,
      r = t.pendingProps.children,
      bt(t, n),
      l = Ce(l),
      r = r(l),
      t.flags |= 1,
      oe(e, t, r, n),
      t.child;
  case 14:
      return r = t.type,
      l = Ie(r, t.pendingProps),
      l = Ie(r.type, l),
      Fo(e, t, r, l, n);
  case 15:
      return Gu(e, t, t.type, t.pendingProps, n);
  case 17:
      return r = t.type,
      l = t.pendingProps,
      l = t.elementType === r ? l : Ie(r, l),
      Mr(e, t),
      t.tag = 1,
      me(r) ? (e = !0,
      Yr(t)) : e = !1,
      bt(t, n),
      Ku(t, r, l),
      Ds(t, r, l, n),
      As(null, t, r, !0, e, n);
  case 19:
      return ec(e, t, n);
  case 22:
      return Zu(e, t, n)
  }
  throw Error(j(156, t.tag))
}
;
function gc(e, t) {
  return Ba(e, t)
}
function up(e, t, n, r) {
  this.tag = e,
  this.key = n,
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
  this.index = 0,
  this.ref = null,
  this.pendingProps = t,
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
  this.mode = r,
  this.subtreeFlags = this.flags = 0,
  this.deletions = null,
  this.childLanes = this.lanes = 0,
  this.alternate = null
}
function ke(e, t, n, r) {
  return new up(e,t,n,r)
}
function $i(e) {
  return e = e.prototype,
  !(!e || !e.isReactComponent)
}
function cp(e) {
  if (typeof e == "function")
      return $i(e) ? 1 : 0;
  if (e != null) {
      if (e = e.$$typeof,
      e === li)
          return 11;
      if (e === si)
          return 14
  }
  return 2
}
function pt(e, t) {
  var n = e.alternate;
  return n === null ? (n = ke(e.tag, t, e.key, e.mode),
  n.elementType = e.elementType,
  n.type = e.type,
  n.stateNode = e.stateNode,
  n.alternate = e,
  e.alternate = n) : (n.pendingProps = t,
  n.type = e.type,
  n.flags = 0,
  n.subtreeFlags = 0,
  n.deletions = null),
  n.flags = e.flags & 14680064,
  n.childLanes = e.childLanes,
  n.lanes = e.lanes,
  n.child = e.child,
  n.memoizedProps = e.memoizedProps,
  n.memoizedState = e.memoizedState,
  n.updateQueue = e.updateQueue,
  t = e.dependencies,
  n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
  },
  n.sibling = e.sibling,
  n.index = e.index,
  n.ref = e.ref,
  n
}
function Or(e, t, n, r, l, s) {
  var o = 2;
  if (r = e,
  typeof e == "function")
      $i(e) && (o = 1);
  else if (typeof e == "string")
      o = 5;
  else
      e: switch (e) {
      case At:
          return _t(n.children, l, s, t);
      case ri:
          o = 8,
          l |= 8;
          break;
      case ls:
          return e = ke(12, n, t, l | 2),
          e.elementType = ls,
          e.lanes = s,
          e;
      case ss:
          return e = ke(13, n, t, l),
          e.elementType = ss,
          e.lanes = s,
          e;
      case is:
          return e = ke(19, n, t, l),
          e.elementType = is,
          e.lanes = s,
          e;
      case Ca:
          return yl(n, l, s, t);
      default:
          if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
              case ka:
                  o = 10;
                  break e;
              case Ea:
                  o = 9;
                  break e;
              case li:
                  o = 11;
                  break e;
              case si:
                  o = 14;
                  break e;
              case et:
                  o = 16,
                  r = null;
                  break e
              }
          throw Error(j(130, e == null ? e : typeof e, ""))
      }
  return t = ke(o, n, t, l),
  t.elementType = e,
  t.type = r,
  t.lanes = s,
  t
}
function _t(e, t, n, r) {
  return e = ke(7, e, r, t),
  e.lanes = n,
  e
}
function yl(e, t, n, r) {
  return e = ke(22, e, r, t),
  e.elementType = Ca,
  e.lanes = n,
  e.stateNode = {
      isHidden: !1
  },
  e
}
function es(e, t, n) {
  return e = ke(6, e, null, t),
  e.lanes = n,
  e
}
function ts(e, t, n) {
  return t = ke(4, e.children !== null ? e.children : [], e.key, t),
  t.lanes = n,
  t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
  },
  t
}
function dp(e, t, n, r, l) {
  this.tag = t,
  this.containerInfo = e,
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
  this.timeoutHandle = -1,
  this.callbackNode = this.pendingContext = this.context = null,
  this.callbackPriority = 0,
  this.eventTimes = Rl(0),
  this.expirationTimes = Rl(-1),
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
  this.entanglements = Rl(0),
  this.identifierPrefix = r,
  this.onRecoverableError = l,
  this.mutableSourceEagerHydrationData = null
}
function Fi(e, t, n, r, l, s, o, a, u) {
  return e = new dp(e,t,n,a,u),
  t === 1 ? (t = 1,
  s === !0 && (t |= 8)) : t = 0,
  s = ke(3, null, null, t),
  e.current = s,
  s.stateNode = e,
  s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
  },
  Si(s),
  e
}
function fp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
      $$typeof: Ot,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
  }
}
function vc(e) {
  if (!e)
      return ht;
  e = e._reactInternals;
  e: {
      if (Dt(e) !== e || e.tag !== 1)
          throw Error(j(170));
      var t = e;
      do {
          switch (t.tag) {
          case 3:
              t = t.stateNode.context;
              break e;
          case 1:
              if (me(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e
              }
          }
          t = t.return
      } while (t !== null);
      throw Error(j(171))
  }
  if (e.tag === 1) {
      var n = e.type;
      if (me(n))
          return vu(e, n, t)
  }
  return t
}
function yc(e, t, n, r, l, s, o, a, u) {
  return e = Fi(n, r, !0, e, l, s, o, a, u),
  e.context = vc(null),
  n = e.current,
  r = ae(),
  l = ft(n),
  s = Ke(r, l),
  s.callback = t ?? null,
  ct(n, s, l),
  e.current.lanes = l,
  tr(e, l, r),
  he(e, r),
  e
}
function xl(e, t, n, r) {
  var l = t.current
    , s = ae()
    , o = ft(l);
  return n = vc(n),
  t.context === null ? t.context = n : t.pendingContext = n,
  t = Ke(s, o),
  t.payload = {
      element: e
  },
  r = r === void 0 ? null : r,
  r !== null && (t.callback = r),
  e = ct(l, t, o),
  e !== null && (De(e, l, o, s),
  Ir(e, l, o)),
  o
}
function il(e) {
  if (e = e.current,
  !e.child)
      return null;
  switch (e.child.tag) {
  case 5:
      return e.child.stateNode;
  default:
      return e.child.stateNode
  }
}
function bo(e, t) {
  if (e = e.memoizedState,
  e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Vi(e, t) {
  bo(e, t),
  (e = e.alternate) && bo(e, t)
}
var xc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e)
}
;
function Hi(e) {
  this._internalRoot = e
}
wl.prototype.render = Hi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
      throw Error(j(409));
  xl(e, t, null, null)
}
;
wl.prototype.unmount = Hi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      zt(function() {
          xl(null, e, null, null)
      }),
      t[Xe] = null
  }
}
;
function wl(e) {
  this._internalRoot = e
}
wl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
      var t = Za();
      e = {
          blockedOn: null,
          target: e,
          priority: t
      };
      for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++)
          ;
      nt.splice(n, 0, e),
      n === 0 && ba(e)
  }
}
;
function Bi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function jl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function qo() {}
function pp(e, t, n, r, l) {
  if (l) {
      if (typeof r == "function") {
          var s = r;
          r = function() {
              var d = il(o);
              s.call(d)
          }
      }
      var o = yc(t, r, e, 0, null, !1, !1, "", qo);
      return e._reactRootContainer = o,
      e[Xe] = o.current,
      Wn(e.nodeType === 8 ? e.parentNode : e),
      zt(),
      o
  }
  for (; l = e.lastChild; )
      e.removeChild(l);
  if (typeof r == "function") {
      var a = r;
      r = function() {
          var d = il(u);
          a.call(d)
      }
  }
  var u = Fi(e, 0, !1, null, null, !1, !1, "", qo);
  return e._reactRootContainer = u,
  e[Xe] = u.current,
  Wn(e.nodeType === 8 ? e.parentNode : e),
  zt(function() {
      xl(t, u, n, r)
  }),
  u
}
function Nl(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
      var o = s;
      if (typeof l == "function") {
          var a = l;
          l = function() {
              var u = il(o);
              a.call(u)
          }
      }
      xl(t, o, e, l)
  } else
      o = pp(n, t, e, l, r);
  return il(o)
}
Xa = function(e) {
  switch (e.tag) {
  case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
          var n = En(t.pendingLanes);
          n !== 0 && (ai(t, n | 1),
          he(t, Y()),
          !(D & 6) && (on = Y() + 500,
          yt()))
      }
      break;
  case 13:
      zt(function() {
          var r = Ge(e, 1);
          if (r !== null) {
              var l = ae();
              De(r, e, 1, l)
          }
      }),
      Vi(e, 1)
  }
}
;
ui = function(e) {
  if (e.tag === 13) {
      var t = Ge(e, 134217728);
      if (t !== null) {
          var n = ae();
          De(t, e, 134217728, n)
      }
      Vi(e, 134217728)
  }
}
;
Ga = function(e) {
  if (e.tag === 13) {
      var t = ft(e)
        , n = Ge(e, t);
      if (n !== null) {
          var r = ae();
          De(n, e, t, r)
      }
      Vi(e, t)
  }
}
;
Za = function() {
  return R
}
;
Ja = function(e, t) {
  var n = R;
  try {
      return R = e,
      t()
  } finally {
      R = n
  }
}
;
gs = function(e, t, n) {
  switch (t) {
  case "input":
      if (us(e, n),
      t = n.name,
      n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
              n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
          t = 0; t < n.length; t++) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                  var l = fl(r);
                  if (!l)
                      throw Error(j(90));
                  Ta(r),
                  us(r, l)
              }
          }
      }
      break;
  case "textarea":
      Ia(e, n);
      break;
  case "select":
      t = n.value,
      t != null && Xt(e, !!n.multiple, t, !1)
  }
}
;
Aa = Oi;
Ua = zt;
var mp = {
  usingClientEntryPoint: !1,
  Events: [rr, Vt, fl, Ra, Oa, Oi]
}
, Nn = {
  findFiberByHostInstance: St,
  bundleType: 0,
  version: "18.3.1",
  rendererPackageName: "react-dom"
}
, hp = {
  bundleType: Nn.bundleType,
  version: Nn.version,
  rendererPackageName: Nn.rendererPackageName,
  rendererConfig: Nn.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setErrorHandler: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: be.ReactCurrentDispatcher,
  findHostInstanceByFiber: function(e) {
      return e = Va(e),
      e === null ? null : e.stateNode
  },
  findFiberByHostInstance: Nn.findFiberByHostInstance,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null,
  reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Sr.isDisabled && Sr.supportsFiber)
      try {
          al = Sr.inject(hp),
          $e = Sr
      } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mp;
we.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bi(t))
      throw Error(j(200));
  return fp(e, t, null, n)
}
;
we.createRoot = function(e, t) {
  if (!Bi(e))
      throw Error(j(299));
  var n = !1
    , r = ""
    , l = xc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0),
  t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
  t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
  t = Fi(e, 1, !1, null, null, n, !1, r, l),
  e[Xe] = t.current,
  Wn(e.nodeType === 8 ? e.parentNode : e),
  new Hi(t)
}
;
we.findDOMNode = function(e) {
  if (e == null)
      return null;
  if (e.nodeType === 1)
      return e;
  var t = e._reactInternals;
  if (t === void 0)
      throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
      Error(j(268, e)));
  return e = Va(t),
  e = e === null ? null : e.stateNode,
  e
}
;
we.flushSync = function(e) {
  return zt(e)
}
;
we.hydrate = function(e, t, n) {
  if (!jl(t))
      throw Error(j(200));
  return Nl(null, e, t, !0, n)
}
;
we.hydrateRoot = function(e, t, n) {
  if (!Bi(e))
      throw Error(j(405));
  var r = n != null && n.hydratedSources || null
    , l = !1
    , s = ""
    , o = xc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0),
  n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
  n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
  t = yc(t, null, e, 1, n ?? null, l, !1, s, o),
  e[Xe] = t.current,
  Wn(e),
  r)
      for (e = 0; e < r.length; e++)
          n = r[e],
          l = n._getVersion,
          l = l(n._source),
          t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
  return new wl(t)
}
;
we.render = function(e, t, n) {
  if (!jl(t))
      throw Error(j(200));
  return Nl(null, e, t, !1, n)
}
;
we.unmountComponentAtNode = function(e) {
  if (!jl(e))
      throw Error(j(40));
  return e._reactRootContainer ? (zt(function() {
      Nl(null, null, e, !1, function() {
          e._reactRootContainer = null,
          e[Xe] = null
      })
  }),
  !0) : !1
}
;
we.unstable_batchedUpdates = Oi;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!jl(n))
      throw Error(j(200));
  if (e == null || e._reactInternals === void 0)
      throw Error(j(38));
  return Nl(e, t, n, !1, r)
}
;
we.version = "18.3.1-next-f1338f8080-20240426";
function wc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wc)
      } catch (e) {
          console.error(e)
      }
}
wc(),
wa.exports = we;
var gp = wa.exports, jc, ea = gp;
jc = ea.createRoot,
ea.hydrateRoot;
function ta({children: e}) {
  return i.jsx("div", {
      className: "min-h-screen bg-gradient-to-br from-background to-background-light text-white relative",
      children: i.jsx("div", {
          className: "max-w-md mx-auto min-h-screen p-4 pb-20 flex flex-col justify-center",
          children: e
      })
  })
}
function vp() {
  return i.jsx("div", {
      className: "flex items-center justify-center mb-8",
      children: i.jsx("img", {
          src: "https://traderinfalivel.com/wp-content/uploads/2025/01/logo-hacker-invest.png",
          alt: "Quotex",
          className: "h-12 w-auto animate-pulse hover:scale-110 transition-transform duration-300"
      })
  })
}
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var yp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xp = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
, W = (e, t) => {
  const n = P.forwardRef( ({color: r="currentColor", size: l=24, strokeWidth: s=2, absoluteStrokeWidth: o, className: a="", children: u, ...d}, g) => P.createElement("svg", {
      ref: g,
      ...yp,
      width: l,
      height: l,
      stroke: r,
      strokeWidth: o ? Number(s) * 24 / Number(l) : s,
      className: ["lucide", `lucide-${xp(e)}`, a].join(" "),
      ...d
  }, [...t.map( ([h,m]) => P.createElement(h, m)), ...Array.isArray(u) ? u : [u]]));
  return n.displayName = `${e}`,
  n
}
;
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const wp = W("Activity", [["path", {
  d: "M22 12h-4l-3 9L9 3l-3 9H2",
  key: "d5dnw9"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Je = W("AlertCircle", [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "8",
  y2: "12",
  key: "1pkeuh"
}], ["line", {
  x1: "12",
  x2: "12.01",
  y1: "16",
  y2: "16",
  key: "4dfq90"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const jp = W("BarChart2", [["line", {
  x1: "18",
  x2: "18",
  y1: "20",
  y2: "10",
  key: "1xfpm4"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "20",
  y2: "4",
  key: "be30l9"
}], ["line", {
  x1: "6",
  x2: "6",
  y1: "20",
  y2: "14",
  key: "1r4le6"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Nc = W("BookOpen", [["path", {
  d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
  key: "vv98re"
}], ["path", {
  d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
  key: "1cyq3y"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Sl = W("CheckCircle", [["path", {
  d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
  key: "g774vq"
}], ["path", {
  d: "m9 11 3 3L22 4",
  key: "1pflzl"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Np = W("ChevronDown", [["path", {
  d: "m6 9 6 6 6-6",
  key: "qrunsl"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ve = W("Clock", [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["polyline", {
  points: "12 6 12 12 16 14",
  key: "68esgv"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Sc = W("ExternalLink", [["path", {
  d: "M15 3h6v6",
  key: "1q9fwt"
}], ["path", {
  d: "M10 14 21 3",
  key: "gplh6r"
}], ["path", {
  d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
  key: "a6xqqp"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Sp = W("HelpCircle", [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
  key: "1u773s"
}], ["path", {
  d: "M12 17h.01",
  key: "p32p05"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const kp = W("History", [["path", {
  d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
  key: "1357e3"
}], ["path", {
  d: "M3 3v5h5",
  key: "1xhq8a"
}], ["path", {
  d: "M12 7v5l4 2",
  key: "1fdv2h"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const kc = W("Home", [["path", {
  d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  key: "y5dka4"
}], ["polyline", {
  points: "9 22 9 12 15 12 15 22",
  key: "e2us08"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Gs = W("LineChart", [["path", {
  d: "M3 3v18h18",
  key: "1s2lah"
}], ["path", {
  d: "m19 9-5 5-4-4-3 3",
  key: "2osh9i"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const kl = W("Loader2", [["path", {
  d: "M21 12a9 9 0 1 1-6.219-8.56",
  key: "13zald"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ep = W("Lock", [["rect", {
  width: "18",
  height: "11",
  x: "3",
  y: "11",
  rx: "2",
  ry: "2",
  key: "1w4ew1"
}], ["path", {
  d: "M7 11V7a5 5 0 0 1 10 0v4",
  key: "fwvmzm"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Cp = W("Map", [["polygon", {
  points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",
  key: "ok2ie8"
}], ["line", {
  x1: "9",
  x2: "9",
  y1: "3",
  y2: "18",
  key: "w34qz5"
}], ["line", {
  x1: "15",
  x2: "15",
  y1: "6",
  y2: "21",
  key: "volv9a"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _p = W("MessageCircle", [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
  key: "vv11sd"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ec = W("Minus", [["path", {
  d: "M5 12h14",
  key: "1ays0h"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Tp = W("Radio", [["path", {
  d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9",
  key: "1vaf9d"
}], ["path", {
  d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",
  key: "u1ii0m"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2",
  key: "1c9p78"
}], ["path", {
  d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",
  key: "1j5fej"
}], ["path", {
  d: "M19.1 4.9C23 8.8 23 15.1 19.1 19",
  key: "10b0cb"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Cc = W("TrendingDown", [["polyline", {
  points: "22 17 13.5 8.5 8.5 13.5 2 7",
  key: "1r2t7k"
}], ["polyline", {
  points: "16 17 22 17 22 11",
  key: "11uiuu"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _c = W("TrendingUp", [["polyline", {
  points: "22 7 13.5 15.5 8.5 10.5 2 17",
  key: "126l90"
}], ["polyline", {
  points: "16 7 22 7 22 13",
  key: "kwv8wd"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Tc = W("Users", [["path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
  key: "1yyitq"
}], ["circle", {
  cx: "9",
  cy: "7",
  r: "4",
  key: "nufk8"
}], ["path", {
  d: "M22 21v-2a4 4 0 0 0-3-3.87",
  key: "kshegd"
}], ["path", {
  d: "M16 3.13a4 4 0 0 1 0 7.75",
  key: "1da9ce"
}]]);
/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const fn = W("X", [["path", {
  d: "M18 6 6 18",
  key: "1bl5f8"
}], ["path", {
  d: "m6 6 12 12",
  key: "d8bk6v"
}]]);
function Pc({availableAssets: e, onSelectAsset: t}) {
  const [n,r] = Cr.useState("ATIVO")
    , [l,s] = Cr.useState(!1)
    , [o,a] = Cr.useState("EUR/USD")
    , u = () => {
      switch (n) {
      case "ATIVO":
          return e["MERCADO ABERTO"];
      case "OTC":
          return e.OTC;
      case "CRYPTO":
          return e.CRYPTO
      }
  }
  ;
  return i.jsxs("div", {
      className: "animate-fade-in mb-5",
      children: [i.jsx("div", {
          className: "text-sm text-green-500 mb-2",
          children: "Selecione um Ativo"
      }), i.jsxs("button", {
          onClick: () => s(!l),
          className: "w-full bg-gray-800 rounded-lg p-4 flex items-center justify-between mb-4",
          children: [i.jsxs("div", {
              className: "flex items-center gap-2",
              children: [i.jsx("span", {
                  className: "text-gray-400",
                  children: "EU"
              }), i.jsx("span", {
                  className: "text-gray-400",
                  children: "/"
              }), i.jsx("span", {
                  className: "text-gray-400",
                  children: "US"
              }), i.jsx("span", {
                  className: "text-white",
                  children: o
              })]
          }), i.jsx(Np, {
              className: `w-5 h-5 transition-transform ${l ? "rotate-180" : ""}`
          })]
      }), i.jsx("div", {
          className: "flex border-b border-gray-700",
          children: ["ATIVO", "OTC", "CRYPTO"].map(d => i.jsx("button", {
              onClick: () => r(d),
              className: `flex-1 py-2 text-center transition-colors ${n === d ? "text-green-500 border-b-2 border-green-500" : "text-gray-400 hover:text-gray-300"}`,
              children: d
          }, d))
      }), l && i.jsx("div", {
          className: "mt-2 bg-gray-800 rounded-lg max-h-60 overflow-y-auto",
          children: u().map(d => i.jsx("button", {
              onClick: () => {
                  a(d),
                  s(!1),
                  t(d)
              }
              ,
              className: "w-full px-4 py-3 text-left hover:bg-gray-700 flex items-center gap-2",
              children: i.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [i.jsx("span", {
                      className: "text-gray-400",
                      children: "EU"
                  }), i.jsx("span", {
                      className: "text-gray-400",
                      children: "/"
                  }), i.jsx("span", {
                      className: "text-gray-400",
                      children: "US"
                  }), i.jsx("span", {
                      className: "text-white",
                      children: d
                  })]
              })
          }, d))
      })]
  })
}
function Pp({onClick: e, cooldownTime: t}) {
  return i.jsx("button", {
      onClick: e,
      disabled: t > 0,
      className: "w-full bg-secondary hover:bg-secondary-dark disabled:bg-surface text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 mb-8 text-lg",
      children: t > 0 ? `Aguarde ${t}s para nova análise` : "Analisar Mercado"
  })
}
const Ip = {
  "MERCADO ABERTO": ["EUR/USD", "USD/BRL", "AUD/CAD", "EUR/GBP", "EUR/JPY", "USD/MXN", "PEN/USD"],
  OTC: ["EUR/USD-OTC", "USD/BRL-OTC", "AUD/CAD-OTC", "EUR/GBP-OTC", "EUR/JPY-OTC", "USD/MXN-OTC", "PEN/USD-OTC"],
  CRYPTO: ["BTC/USD", "ETH/USD", "BNB/USD", "XRP/USD", "ADA/USD", "SOL/USD"]
};
function Lp({onAnalyze: e, onSelectAsset: t, cooldownTime: n}) {
  return i.jsxs("div", {
      className: "bg-surface rounded-xl shadow-2xl p-8",
      children: [i.jsx(vp, {}), i.jsx(Pc, {
          availableAssets: Ip,
          onSelectAsset: t
      }), i.jsx(Pp, {
          onClick: e,
          cooldownTime: n
      })]
  })
}
function zp({result: e, onReset: t}) {
  return i.jsxs("div", {
      className: "space-y-6 animate-fade-in",
      children: [i.jsxs("div", {
          className: "space-y-4 bg-surface rounded-lg p-6",
          children: [i.jsx("h2", {
              className: "text-xl font-semibold text-center mb-4",
              children: "Resultado da Análise"
          }), i.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [i.jsx("div", {
                  className: "text-gray-300",
                  children: "Ativo:"
              }), i.jsx("div", {
                  className: "font-bold text-primary",
                  children: e.asset
              }), i.jsx("div", {
                  className: "text-gray-300",
                  children: "Ordem:"
              }), i.jsx("div", {
                  className: `font-bold ${e.order === "COMPRA" ? "text-success" : "text-error"}`,
                  children: e.order
              }), i.jsx("div", {
                  className: "text-gray-300",
                  children: "Horário:"
              }), i.jsx("div", {
                  className: "font-bold text-primary",
                  children: e.time
              }), i.jsx("div", {
                  className: "text-gray-300",
                  children: "Timeframe:"
              }), i.jsx("div", {
                  className: "font-bold text-primary",
                  children: e.timeframe
              })]
          })]
      }), i.jsx("button", {
          onClick: t,
          className: "w-full bg-surface hover:bg-surface-light text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200",
          children: "Nova Análise"
      })]
  })
}
const Mp = ["Conectando na conta...", "Acessando o gráfico..."]
, Dp = ["Analisando padrões de candlestick...", "Verificando suportes e resistências...", "Avaliando tendências de mercado...", "Calculando médias móveis...", "Identificando padrões de reversão...", "Analisando volume de trades...", "Verificando indicadores técnicos...", "Avaliando momentum do mercado...", "Analisando divergências...", "Verificando níveis de Fibonacci...", "Identificando zonas de liquidez...", "Analisando fluxo de ordens...", "Verificando volatilidade do mercado...", "Avaliando pressão compradora/vendedora...", "Analisando correlação entre ativos..."];
function Rp(e) {
  return [...Dp].sort( () => .5 - Math.random()).slice(0, e)
}
function Op() {
  const [e,t] = P.useState(0)
    , [n] = P.useState( () => {
      const l = Rp(3);
      return [...Mp.map(s => ({
          icon: Gs,
          message: s
      })), ...l.map(s => ({
          icon: [Gs, jp, wp][Math.floor(Math.random() * 3)],
          message: s
      }))]
  }
  );
  P.useEffect( () => {
      const l = setInterval( () => {
          t(s => (s + 1) % n.length)
      }
      , 6e3);
      return () => clearInterval(l)
  }
  , [n.length]);
  const r = n[e].icon;
  return i.jsxs("div", {
      className: "space-y-8 animate-fade-in",
      children: [i.jsxs("div", {
          className: "flex flex-col items-center justify-center space-y-4",
          children: [i.jsxs("div", {
              className: "relative",
              children: [i.jsx(r, {
                  className: "w-16 h-16 text-blue-400 animate-pulse"
              }), i.jsx("div", {
                  className: "absolute -top-1 -right-1",
                  children: i.jsx(kl, {
                      className: "w-6 h-6 text-blue-400 animate-spin"
                  })
              })]
          }), i.jsx("p", {
              className: "text-lg font-medium text-center",
              children: n[e].message
          })]
      }), i.jsx("div", {
          className: "w-full bg-gray-700 rounded-full h-2",
          children: i.jsx("div", {
              className: "bg-blue-400 h-2 rounded-full transition-all duration-300",
              style: {
                  width: `${(e + 1) / n.length * 100}%`
              }
          })
      })]
  })
}
function Ap({onReset: e, marketClosed: t, timeUntilOpen: n}) {
  return t ? i.jsxs("div", {
      className: "space-y-6 animate-fade-in",
      children: [i.jsxs("div", {
          className: "flex flex-col items-center justify-center space-y-4",
          children: [i.jsx(Je, {
              className: "w-16 h-16 text-yellow-500"
          }), i.jsx("h3", {
              className: "text-xl font-semibold text-center",
              children: "Mercado Fechado"
          }), i.jsx("p", {
              className: "text-gray-300 text-center",
              children: "O mercado está fechado no momento. Retorne a partir das 00:01 de segunda-feira para novas oportunidades."
          }), n && i.jsx("div", {
              className: "bg-gray-700 rounded-lg p-4 w-full",
              children: i.jsxs("div", {
                  className: "flex items-center justify-center gap-2 text-green-400",
                  children: [i.jsx(Ve, {
                      className: "w-5 h-5"
                  }), i.jsxs("span", {
                      children: ["Reabre em: ", n]
                  })]
              })
          })]
      }), i.jsx("button", {
          onClick: e,
          className: "w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200",
          children: "Voltar ao Início"
      })]
  }) : i.jsxs("div", {
      className: "space-y-6 animate-fade-in",
      children: [i.jsxs("div", {
          className: "flex flex-col items-center justify-center space-y-4",
          children: [i.jsx(Je, {
              className: "w-16 h-16 text-yellow-500"
          }), i.jsx("h3", {
              className: "text-xl font-semibold text-center",
              children: "Sem Sinais Disponíveis"
          }), i.jsx("p", {
              className: "text-gray-300 text-center",
              children: "No momento não há entradas com alta assertividade. Aguarde alguns minutos e tente novamente."
          })]
      }), i.jsx("button", {
          onClick: e,
          className: "w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200",
          children: "Voltar ao Início"
      })]
  })
}
const Up = [{
  text: "Conectando na conta...",
  success: !0,
  completed: !1,
  visible: !0
}, {
  text: "Instalando aplicativo...",
  success: !0,
  completed: !1,
  visible: !1
}, {
  text: "Acessando algoritmo do gráfico...",
  success: !0,
  completed: !1,
  visible: !1
}, {
  text: "Conectando na API da conta...",
  success: !0,
  completed: !1,
  visible: !1
}];
function $p({onComplete: e}) {
  const [t,n] = P.useState(Up)
    , [r,l] = P.useState(0);
  return P.useEffect( () => {
      if (r < t.length) {
          n(o => o.map( (a, u) => u === r ? {
              ...a,
              visible: !0
          } : a));
          const s = setTimeout( () => {
              n(o => o.map( (a, u) => u === r ? {
                  ...a,
                  completed: !0
              } : a)),
              l(o => o + 1)
          }
          , 4e3);
          return () => clearTimeout(s)
      } else
          setTimeout(e, 1e3)
  }
  , [r, e]),
  i.jsx("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
      children: i.jsx("div", {
          className: "bg-gray-800 rounded-xl p-8 w-full max-w-md",
          children: i.jsxs("div", {
              className: "flex flex-col items-center space-y-6",
              children: [i.jsx("div", {
                  className: "relative",
                  children: i.jsx(kl, {
                      className: "w-16 h-16 text-blue-400 animate-spin"
                  })
              }), i.jsx("div", {
                  className: "w-full space-y-4",
                  children: t.map( (s, o) => s.visible && i.jsxs("div", {
                      className: `flex items-center justify-between transition-opacity duration-500 ${o === r && !s.completed ? "animate-[pulse_1s_ease-in-out_infinite]" : ""}`,
                      children: [i.jsx("span", {
                          className: `text-gray-300 ${o === r && !s.completed ? "text-white" : ""}`,
                          children: s.text
                      }), i.jsx("div", {
                          className: "w-5 h-5 flex items-center justify-center",
                          children: s.completed && i.jsx(Sl, {
                              className: "w-5 h-5 text-blue-400"
                          })
                      })]
                  }, o))
              }), i.jsx("div", {
                  className: "w-full bg-gray-700 rounded-full h-2",
                  children: i.jsx("div", {
                      className: "bg-blue-400 h-2 rounded-full transition-all duration-300",
                      style: {
                          width: `${r / t.length * 100}%`
                      }
                  })
              })]
          })
      })
  })
}
const Fp = [{
  text: "Conectando na conta...",
  success: !0,
  completed: !1,
  visible: !0
}, {
  text: "Tentando instalar o aplicativo...",
  success: !1,
  completed: !1,
  visible: !1
}, {
  text: "Acessando algoritmo do gráfico...",
  success: !1,
  completed: !1,
  visible: !1
}, {
  text: "Tentando acesso à API da conta...",
  success: !1,
  completed: !1,
  visible: !1
}];
function Vp({onComplete: e}) {
  const [t,n] = P.useState(Fp)
    , [r,l] = P.useState(0);
  return P.useEffect( () => {
      if (r < t.length) {
          n(o => o.map( (a, u) => u === r ? {
              ...a,
              visible: !0
          } : a));
          const s = setTimeout( () => {
              n(o => o.map( (a, u) => u === r ? {
                  ...a,
                  completed: !0
              } : a)),
              l(o => o + 1)
          }
          , 4e3);
          return () => clearTimeout(s)
      } else
          setTimeout(e, 1e3)
  }
  , [r, e]),
  i.jsx("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
      children: i.jsx("div", {
          className: "bg-gray-800 rounded-xl p-8 w-full max-w-md",
          children: i.jsxs("div", {
              className: "flex flex-col items-center space-y-6",
              children: [i.jsx("div", {
                  className: "relative",
                  children: i.jsx(kl, {
                      className: "w-16 h-16 text-blue-400 animate-spin"
                  })
              }), i.jsx("div", {
                  className: "w-full space-y-4",
                  children: t.map( (s, o) => s.visible && i.jsxs("div", {
                      className: `flex items-center justify-between transition-opacity duration-500 ${o === r && !s.completed ? "animate-[pulse_1s_ease-in-out_infinite]" : ""}`,
                      children: [i.jsx("span", {
                          className: `text-gray-300 ${o === r && !s.completed ? "text-white" : ""}`,
                          children: s.text
                      }), i.jsx("div", {
                          className: "w-5 h-5 flex items-center justify-center",
                          children: s.completed && (s.success ? i.jsx(Sl, {
                              className: "w-5 h-5 text-blue-400"
                          }) : i.jsx(fn, {
                              className: "w-5 h-5 text-red-500"
                          }))
                      })]
                  }, o))
              }), i.jsx("div", {
                  className: "w-full bg-gray-700 rounded-full h-2",
                  children: i.jsx("div", {
                      className: "bg-blue-400 h-2 rounded-full transition-all duration-300",
                      style: {
                          width: `${r / t.length * 100}%`
                      }
                  })
              })]
          })
      })
  })
}
const Hp = [{
  text: "Conectando na conta...",
  success: !0,
  completed: !1,
  visible: !0
}, {
  text: "Instalando aplicativo...",
  success: !0,
  completed: !1,
  visible: !1
}, {
  text: "Verificando depósitos...",
  success: !1,
  completed: !1,
  visible: !1
}, {
  text: "Conectando na conta real...",
  success: !1,
  completed: !1,
  visible: !1
}];
function Bp({onComplete: e}) {
  const [t,n] = P.useState(Hp)
    , [r,l] = P.useState(0);
  return P.useEffect( () => {
      if (r < t.length) {
          n(o => o.map( (a, u) => u === r ? {
              ...a,
              visible: !0
          } : a));
          const s = setTimeout( () => {
              n(o => o.map( (a, u) => u === r ? {
                  ...a,
                  completed: !0
              } : a)),
              l(o => o + 1)
          }
          , 4e3);
          return () => clearTimeout(s)
      } else
          setTimeout(e, 1e3)
  }
  , [r, e]),
  i.jsx("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
      children: i.jsx("div", {
          className: "bg-gray-800 rounded-xl p-8 w-full max-w-md",
          children: i.jsxs("div", {
              className: "flex flex-col items-center space-y-6",
              children: [i.jsx("div", {
                  className: "relative",
                  children: i.jsx(kl, {
                      className: "w-16 h-16 text-blue-400 animate-spin"
                  })
              }), i.jsx("div", {
                  className: "w-full space-y-4",
                  children: t.map( (s, o) => s.visible && i.jsxs("div", {
                      className: `flex items-center justify-between transition-opacity duration-500 ${o === r && !s.completed ? "animate-[pulse_1s_ease-in-out_infinite]" : ""}`,
                      children: [i.jsx("span", {
                          className: `text-gray-300 ${o === r && !s.completed ? "text-white" : ""}`,
                          children: s.text
                      }), i.jsx("div", {
                          className: "w-5 h-5 flex items-center justify-center",
                          children: s.completed && (s.success ? i.jsx(Sl, {
                              className: "w-5 h-5 text-blue-400"
                          }) : i.jsx(fn, {
                              className: "w-5 h-5 text-red-500"
                          }))
                      })]
                  }, o))
              }), i.jsx("div", {
                  className: "w-full bg-gray-700 rounded-full h-2",
                  children: i.jsx("div", {
                      className: "bg-blue-400 h-2 rounded-full transition-all duration-300",
                      style: {
                          width: `${r / t.length * 100}%`
                      }
                  })
              })]
          })
      })
  })
}
const na = {
  link1: "https://trade.broker10.com/register?aff=749644&aff_model=revenue&afftrack=hackerinvest",
  link2: "https://trade.broker10.com/register?aff=757072&aff_model=revenue&afftrack=app"
};
function Ic() {
  return Math.random() < .5 ? na.link1 : na.link2
}
function Wp({onContinue: e}) {
  return i.jsx("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
      children: i.jsx("div", {
          className: "bg-gray-800 rounded-xl p-8 w-full max-w-md",
          children: i.jsxs("div", {
              className: "flex flex-col items-center space-y-6",
              children: [i.jsx("div", {
                  className: "bg-blue-500/10 p-4 rounded-full",
                  children: i.jsx(Sl, {
                      className: "w-16 h-16 text-blue-500"
                  })
              }), i.jsxs("div", {
                  className: "text-center space-y-4",
                  children: [i.jsx("h3", {
                      className: "text-xl font-bold text-white",
                      children: "Aplicativo Conectado!"
                  }), i.jsx("p", {
                      className: "text-blue-400",
                      children: "Seu ID foi verificado com sucesso."
                  }), i.jsx("p", {
                      className: "text-gray-300",
                      children: "Você já pode começar a usar o aplicativo."
                  })]
              }), i.jsx("button", {
                  onClick: e,
                  className: "w-full bg-blue-400 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200",
                  children: "Começar"
              })]
          })
      })
  })
}
function Qp({onTryAgain: e}) {
  return i.jsx("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
      children: i.jsx("div", {
          className: "bg-gray-800 rounded-xl p-8 w-full max-w-md",
          children: i.jsxs("div", {
              className: "flex flex-col items-center space-y-6",
              children: [i.jsx("div", {
                  className: "bg-red-500/10 p-4 rounded-full",
                  children: i.jsx(Je, {
                      className: "w-16 h-16 text-red-500"
                  })
              }), i.jsxs("div", {
                  className: "text-center space-y-6",
                  children: [i.jsxs("div", {
                      children: [i.jsx("h3", {
                          className: "text-xl font-bold text-white mb-2",
                          children: "Erro de Instalação"
                      }), i.jsx("p", {
                          className: "text-lg text-red-500",
                          children: "Não foi possível instalar o aplicativo neste ID."
                      })]
                  }), i.jsxs("div", {
                      className: "bg-gray-700/50 rounded-lg p-6 space-y-4",
                      children: [i.jsx("h4", {
                          className: "font-semibold text-lg mb-2 text-white",
                          children: "O que fazer:"
                      }), i.jsxs("ol", {
                          className: "space-y-3 text-left text-gray-300",
                          children: [i.jsxs("li", {
                              className: "flex items-start gap-2",
                              children: [i.jsx("div", {
                                  className: "w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                  children: i.jsx("span", {
                                      className: "text-white font-bold",
                                      children: "1"
                                  })
                              }), i.jsx("span", {
                                  children: "Crie uma nova conta com API liberada clicando no botão abaixo"
                              })]
                          }), i.jsxs("li", {
                              className: "flex items-start gap-2",
                              children: [i.jsx("div", {
                                  className: "w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                  children: i.jsx("span", {
                                      className: "text-white font-bold",
                                      children: "2"
                                  })
                              }), i.jsx("span", {
                                  children: "Use a aba anônima do navegador para evitar conflitos"
                              })]
                          }), i.jsxs("li", {
                              className: "flex items-start gap-2",
                              children: [i.jsx("div", {
                                  className: "w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                  children: i.jsx("span", {
                                      className: "text-white font-bold",
                                      children: "3"
                                  })
                              }), i.jsx("span", {
                                  children: "Volte ao aplicativo com seu novo ID"
                              })]
                          })]
                      })]
                  }), i.jsxs("div", {
                      className: "space-y-4",
                      children: [i.jsx("a", {
                          href: Ic(),
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200",
                          children: "Criar Nova Conta com API"
                      }), i.jsxs("div", {
                          className: "flex items-center justify-center gap-2 text-gray-400 text-sm",
                          children: [i.jsx(Je, {
                              className: "w-4 h-4"
                          }), i.jsx("span", {
                              children: "Precisa de ajuda? Clique no ícone de suporte."
                          })]
                      }), i.jsx("button", {
                          onClick: e,
                          className: "w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200",
                          children: "Tentar Novamente"
                      })]
                  })]
              })]
          })
      })
  })
}
function Kp({onTryAgain: e}) {
  return i.jsx("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
      children: i.jsx("div", {
          className: "bg-gray-800 rounded-xl p-8 w-full max-w-md",
          children: i.jsxs("div", {
              className: "flex flex-col items-center space-y-6",
              children: [i.jsx("div", {
                  className: "bg-yellow-500/10 p-4 rounded-full",
                  children: i.jsx(Je, {
                      className: "w-16 h-16 text-yellow-500"
                  })
              }), i.jsxs("div", {
                  className: "text-center space-y-6",
                  children: [i.jsxs("div", {
                      children: [i.jsx("h3", {
                          className: "text-xl font-bold text-white mb-2",
                          children: "Conta Real Inativa"
                      }), i.jsx("p", {
                          className: "text-lg text-yellow-500",
                          children: "O aplicativo não consegue se conectar na sua conta."
                      })]
                  }), i.jsxs("div", {
                      className: "bg-gray-700/50 rounded-lg p-6 space-y-4",
                      children: [i.jsx("h4", {
                          className: "font-semibold text-lg mb-2 text-white",
                          children: "Como resolver:"
                      }), i.jsxs("ol", {
                          className: "space-y-3 text-left text-gray-300",
                          children: [i.jsxs("li", {
                              className: "flex items-start gap-2",
                              children: [i.jsx("div", {
                                  className: "w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                  children: i.jsx("span", {
                                      className: "text-black font-bold",
                                      children: "1"
                                  })
                              }), i.jsx("span", {
                                  children: "Faça um depósito de qualquer valor na sua conta real da corretora"
                              })]
                          }), i.jsxs("li", {
                              className: "flex items-start gap-2",
                              children: [i.jsx("div", {
                                  className: "w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                  children: i.jsx("span", {
                                      className: "text-black font-bold",
                                      children: "2"
                                  })
                              }), i.jsx("span", {
                                  children: "Aguarde alguns minutos para o sistema processar seu depósito"
                              })]
                          }), i.jsxs("li", {
                              className: "flex items-start gap-2",
                              children: [i.jsx("div", {
                                  className: "w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                  children: i.jsx("span", {
                                      className: "text-black font-bold",
                                      children: "3"
                                  })
                              }), i.jsx("span", {
                                  children: "Volte ao aplicativo e tente novamente"
                              })]
                          })]
                      })]
                  }), i.jsxs("div", {
                      className: "space-y-4",
                      children: [i.jsxs("div", {
                          className: "flex items-center justify-center gap-2 text-gray-400 text-sm",
                          children: [i.jsx(Je, {
                              className: "w-4 h-4"
                          }), i.jsx("span", {
                              children: "Precisa de ajuda? Clique no ícone de suporte."
                          })]
                      }), i.jsx("button", {
                          onClick: e,
                          className: "w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200",
                          children: "Tentar Novamente"
                      })]
                  })]
              })]
          })
      })
  })
}
function Lc({videoUrl: e, onClose: t}) {
  return i.jsx("div", {
      className: "fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4",
      children: i.jsxs("div", {
          className: "relative w-full max-w-4xl bg-gray-900 rounded-lg overflow-hidden",
          children: [i.jsx("button", {
              onClick: t,
              className: "absolute top-4 right-4 text-white hover:text-gray-300 z-10",
              children: i.jsx(fn, {
                  className: "w-6 h-6"
              })
          }), i.jsx("div", {
              className: "aspect-video",
              children: i.jsx("video", {
                  src: e,
                  className: "w-full h-full",
                  controls: !0,
                  autoPlay: !0,
                  controlsList: "nodownload",
                  children: "Seu navegador não suporta a reprodução de vídeos."
              })
          })]
      })
  })
}
function Yp(e, t, n) {
  const r = new Date;
  r.setTime(r.getTime() + n * 24 * 60 * 60 * 1e3);
  const l = `expires=${r.toUTCString()}`;
  document.cookie = `${e}=${t};${l};path=/`
}
function zc(e) {
  const t = `${e}=`
    , n = document.cookie.split(";");
  for (let r = 0; r < n.length; r++) {
      let l = n[r];
      for (; l.charAt(0) === " "; )
          l = l.substring(1, l.length);
      if (l.indexOf(t) === 0)
          return l.substring(t.length, l.length)
  }
  return null
}
async function Xp(e) {
  try {
      const t = await fetch("/public/uid.txt");
      return t.ok ? (await t.text()).split(`
`).map(l => l.trim()).filter(l => l.length > 0).includes(e) : !1
  } catch (t) {
      return console.error("Error checking UID access:", t),
      !1
  }
}
async function Gp(e) {
  try {
      const t = await fetch("/public/ftd.txt");
      if (!t.ok)
          return !1;
      const l = (await t.text()).split(`
`).map(s => s.trim()).filter(s => s.length > 0).includes(e);
      return l && Yp("verifiedId", e, 30),
      l
  } catch (t) {
      return console.error("Error checking ID access:", t),
      !1
  }
}
function Zp() {
  return !!zc("verifiedId")
}
function Mc() {
  return zc("verifiedId")
}
function Jp({onClose: e, onVerified: t}) {
  const [n,r] = P.useState("")
    , [l,s] = P.useState(!1)
    , [o,a] = P.useState(null)
    , [u,d] = P.useState(!1)
    , [g,h] = P.useState(!1)
    , m = async v => {
      v.preventDefault(),
      s(!0),
      a(null);
      try {
          const N = await Xp(n)
            , f = await Gp(n);
          a(N ? f ? "IDValido" : "IDInativo" : "IDInvalido")
      } catch (N) {
          console.error("Error verifying ID:", N),
          a("IDInvalido")
      }
  }
    , y = () => {
      d(!0),
      s(!1)
  }
    , x = () => {
      r(""),
      a(null),
      d(!1),
      s(!1)
  }
  ;
  if (l && o) {
      if (o === "IDValido")
          return i.jsx($p, {
              onComplete: () => {
                  y()
              }
          });
      if (o === "IDInvalido")
          return i.jsx(Vp, {
              onComplete: y
          });
      if (o === "IDInativo")
          return i.jsx(Bp, {
              onComplete: y
          })
  }
  if (u) {
      if (o === "IDValido")
          return i.jsx(Wp, {
              onContinue: () => {
                  t(),
                  e()
              }
          });
      if (o === "IDInvalido")
          return i.jsx(Qp, {
              onTryAgain: x
          });
      if (o === "IDInativo")
          return i.jsx(Kp, {
              onTryAgain: x
          })
  }
  return i.jsxs("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
      children: [i.jsxs("div", {
          className: `
      bg-gray-800 rounded-xl p-6 relative
      w-[90%] max-h-[80vh]
      md:w-[80%] md:max-h-[70vh]
      lg:w-[500px] lg:max-h-[70vh]
      2xl:w-[600px]
      overflow-y-auto
    `,
          children: [i.jsx("button", {
              onClick: e,
              className: "absolute top-4 right-4 text-gray-400 hover:text-white z-10",
              children: i.jsx(fn, {
                  className: "w-6 h-6"
              })
          }), i.jsx("h2", {
              className: "text-xl font-bold mb-6",
              children: "Verificar ID"
          }), i.jsxs("form", {
              onSubmit: m,
              className: "space-y-4",
              children: [i.jsxs("div", {
                  children: [i.jsx("label", {
                      htmlFor: "id",
                      className: "block text-sm font-medium text-gray-300 mb-1",
                      children: "Digite seu ID da corretora"
                  }), i.jsx("input", {
                      type: "text",
                      id: "id",
                      value: n,
                      onChange: v => r(v.target.value),
                      className: "w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-base",
                      placeholder: "Seu ID",
                      required: !0,
                      disabled: l
                  })]
              }), i.jsx("div", {
                  className: "bg-gray-700/50 rounded-lg p-4 text-sm text-gray-300 mt-4",
                  children: i.jsxs("p", {
                      className: "flex items-start gap-2",
                      children: [i.jsx(Je, {
                          className: "w-5 h-5 flex-shrink-0 text-yellow-500 mt-0.5"
                      }), i.jsx("span", {
                          children: "É necessário ter uma conta com acesso à API na corretora BROKER10 para que o aplicativo possa se conectar e ter acesso ao gráfico. Em caso de dúvidas, assista o vídeo tutorial ou clique no ícone de suporte no canto superior direito."
                      })]
                  })
              }), i.jsx("button", {
                  type: "submit",
                  className: "w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6",
                  disabled: l,
                  children: l ? "Verificando..." : "Conectar"
              })]
          }), i.jsxs("div", {
              className: "mt-8 space-y-4",
              children: [i.jsxs("div", {
                  className: "relative",
                  children: [i.jsx("div", {
                      className: "absolute inset-0 flex items-center",
                      children: i.jsx("div", {
                          className: "w-full border-t border-gray-700"
                      })
                  }), i.jsx("div", {
                      className: "relative flex justify-center text-sm",
                      children: i.jsx("span", {
                          className: "px-2 bg-gray-800 text-gray-400",
                          children: "ou"
                      })
                  })]
              }), i.jsxs("div", {
                  className: "space-y-3",
                  children: [i.jsxs("a", {
                      href: Ic(),
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 text-base",
                      children: [i.jsx(Sc, {
                          className: "w-5 h-5"
                      }), "Criar Conta API Broker10"]
                  }), i.jsxs("button", {
                      onClick: () => h(!0),
                      className: "flex items-center justify-center gap-2 w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 text-base",
                      children: [i.jsx(Sp, {
                          className: "w-5 h-5"
                      }), "Como Criar Minha Conta?"]
                  })]
              })]
          })]
      }), g && i.jsx(Lc, {
          videoUrl: "https://traderinfalivel.com/wp-content/uploads/2025/01/VIDEO-INTRODUCAO-COMO-CRIAR-CONTA-NO-APLICATIVO.mp4",
          onClose: () => h(!1)
      })]
  })
}
function bp({onClick: e, disabled: t, cooldownTime: n}) {
  return i.jsxs("button", {
      onClick: () => {
          e()
      }
      ,
      disabled: t,
      className: "fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-700 hover:bg-gray-600 disabled:hover:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-200 disabled:opacity-50 z-40",
      children: [i.jsx(kc, {
          className: "w-5 h-5"
      }), i.jsx("span", {
          children: t && n ? `Voltar (${n}s)` : "Voltar ao início"
      })]
  })
}
const ra = e => {
  let t;
  const n = new Set
    , r = (g, h) => {
      const m = typeof g == "function" ? g(t) : g;
      if (!Object.is(m, t)) {
          const y = t;
          t = h ?? (typeof m != "object" || m === null) ? m : Object.assign({}, t, m),
          n.forEach(x => x(t, y))
      }
  }
    , l = () => t
    , u = {
      setState: r,
      getState: l,
      getInitialState: () => d,
      subscribe: g => (n.add(g),
      () => n.delete(g)),
      destroy: () => {
          n.clear()
      }
  }
    , d = t = e(r, l, u);
  return u
}
, qp = e => e ? ra(e) : ra;
var Dc = {
  exports: {}
}
, Rc = {}
, Oc = {
  exports: {}
}
, Ac = {};
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var an = P;
function em(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var tm = typeof Object.is == "function" ? Object.is : em
, nm = an.useState
, rm = an.useEffect
, lm = an.useLayoutEffect
, sm = an.useDebugValue;
function im(e, t) {
  var n = t()
    , r = nm({
      inst: {
          value: n,
          getSnapshot: t
      }
  })
    , l = r[0].inst
    , s = r[1];
  return lm(function() {
      l.value = n,
      l.getSnapshot = t,
      ns(l) && s({
          inst: l
      })
  }, [e, n, t]),
  rm(function() {
      return ns(l) && s({
          inst: l
      }),
      e(function() {
          ns(l) && s({
              inst: l
          })
      })
  }, [e]),
  sm(n),
  n
}
function ns(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
      var n = t();
      return !tm(e, n)
  } catch {
      return !0
  }
}
function om(e, t) {
  return t()
}
var am = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? om : im;
Ac.useSyncExternalStore = an.useSyncExternalStore !== void 0 ? an.useSyncExternalStore : am;
Oc.exports = Ac;
var um = Oc.exports;
/**
* @license React
* use-sync-external-store-shim/with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var El = P
, cm = um;
function dm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var fm = typeof Object.is == "function" ? Object.is : dm
, pm = cm.useSyncExternalStore
, mm = El.useRef
, hm = El.useEffect
, gm = El.useMemo
, vm = El.useDebugValue;
Rc.useSyncExternalStoreWithSelector = function(e, t, n, r, l) {
  var s = mm(null);
  if (s.current === null) {
      var o = {
          hasValue: !1,
          value: null
      };
      s.current = o
  } else
      o = s.current;
  s = gm(function() {
      function u(y) {
          if (!d) {
              if (d = !0,
              g = y,
              y = r(y),
              l !== void 0 && o.hasValue) {
                  var x = o.value;
                  if (l(x, y))
                      return h = x
              }
              return h = y
          }
          if (x = h,
          fm(g, y))
              return x;
          var v = r(y);
          return l !== void 0 && l(x, v) ? (g = y,
          x) : (g = y,
          h = v)
      }
      var d = !1, g, h, m = n === void 0 ? null : n;
      return [function() {
          return u(t())
      }
      , m === null ? void 0 : function() {
          return u(m())
      }
      ]
  }, [t, n, r, l]);
  var a = pm(e, s[0], s[1]);
  return hm(function() {
      o.hasValue = !0,
      o.value = a
  }, [a]),
  vm(a),
  a
}
;
Dc.exports = Rc;
var ym = Dc.exports;
const xm = aa(ym)
, {useDebugValue: wm} = Cr
, {useSyncExternalStoreWithSelector: jm} = xm
, Nm = e => e;
function Sm(e, t=Nm, n) {
  const r = jm(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
  return wm(r),
  r
}
const la = e => {
  const t = typeof e == "function" ? qp(e) : e
    , n = (r, l) => Sm(t, r, l);
  return Object.assign(n, t),
  n
}
, Cl = e => e ? la(e) : la
, Uc = Cl(e => ({
  currentView: "main",
  setCurrentView: t => e({
      currentView: t
  })
}));
function sa() {
  const {currentView: e, setCurrentView: t} = Uc();
  return i.jsx("div", {
      className: "fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 z-50",
      children: i.jsxs("div", {
          className: "max-w-md mx-auto flex items-center justify-between px-4 py-2",
          children: [i.jsxs("button", {
              onClick: () => t("main"),
              className: `flex flex-col items-center p-2 ${e === "main" ? "text-blue-300" : "text-gray-400 hover:text-white"}`,
              children: [i.jsx(kc, {
                  className: "w-6 h-6"
              }), i.jsx("span", {
                  className: "text-xs mt-1",
                  children: "Início"
              })]
          }), i.jsxs("button", {
              onClick: () => t("academy"),
              className: `flex flex-col items-center p-2 ${e === "academy" ? "text-blue-300" : "text-gray-400 hover:text-white"}`,
              children: [i.jsx(Nc, {
                  className: "w-6 h-6"
              }), i.jsx("span", {
                  className: "text-xs mt-1",
                  children: "Academy"
              })]
          }), i.jsxs("button", {
              onClick: () => t("live"),
              className: "flex flex-col items-center p-2 -mt-4 bg-red-500 hover:bg-red-600 rounded-full text-white transform scale-110 transition-all duration-200",
              children: [i.jsx(Tp, {
                  className: "w-6 h-6"
              }), i.jsx("span", {
                  className: "text-xs mt-1",
                  children: "Live"
              })]
          }), i.jsxs("button", {
              onClick: () => t("map"),
              className: `flex flex-col items-center p-2 ${e === "map" ? "text-blue-300" : "text-gray-400 hover:text-white"}`,
              children: [i.jsx(Cp, {
                  className: "w-6 h-6"
              }), i.jsx("span", {
                  className: "text-xs mt-1",
                  children: "Mapa"
              })]
          }), i.jsxs("button", {
              onClick: () => t("history"),
              className: `flex flex-col items-center p-2 ${e === "history" ? "text-blue-300" : "text-gray-400 hover:text-white"}`,
              children: [i.jsx(kp, {
                  className: "w-6 h-6"
              }), i.jsx("span", {
                  className: "text-xs mt-1",
                  children: "Histórico"
              })]
          })]
      })
  })
}
function km(e, t) {
  let n;
  try {
      n = e()
  } catch {
      return
  }
  return {
      getItem: l => {
          var s;
          const o = u => u === null ? null : JSON.parse(u, void 0)
            , a = (s = n.getItem(l)) != null ? s : null;
          return a instanceof Promise ? a.then(o) : o(a)
      }
      ,
      setItem: (l, s) => n.setItem(l, JSON.stringify(s, void 0)),
      removeItem: l => n.removeItem(l)
  }
}
const qn = e => t => {
  try {
      const n = e(t);
      return n instanceof Promise ? n : {
          then(r) {
              return qn(r)(n)
          },
          catch(r) {
              return this
          }
      }
  } catch (n) {
      return {
          then(r) {
              return this
          },
          catch(r) {
              return qn(r)(n)
          }
      }
  }
}
, Em = (e, t) => (n, r, l) => {
  let s = {
      getStorage: () => localStorage,
      serialize: JSON.stringify,
      deserialize: JSON.parse,
      partialize: N => N,
      version: 0,
      merge: (N, f) => ({
          ...f,
          ...N
      }),
      ...t
  }
    , o = !1;
  const a = new Set
    , u = new Set;
  let d;
  try {
      d = s.getStorage()
  } catch {}
  if (!d)
      return e( (...N) => {
          console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),
          n(...N)
      }
      , r, l);
  const g = qn(s.serialize)
    , h = () => {
      const N = s.partialize({
          ...r()
      });
      let f;
      const c = g({
          state: N,
          version: s.version
      }).then(p => d.setItem(s.name, p)).catch(p => {
          f = p
      }
      );
      if (f)
          throw f;
      return c
  }
    , m = l.setState;
  l.setState = (N, f) => {
      m(N, f),
      h()
  }
  ;
  const y = e( (...N) => {
      n(...N),
      h()
  }
  , r, l);
  let x;
  const v = () => {
      var N;
      if (!d)
          return;
      o = !1,
      a.forEach(c => c(r()));
      const f = ((N = s.onRehydrateStorage) == null ? void 0 : N.call(s, r())) || void 0;
      return qn(d.getItem.bind(d))(s.name).then(c => {
          if (c)
              return s.deserialize(c)
      }
      ).then(c => {
          if (c)
              if (typeof c.version == "number" && c.version !== s.version) {
                  if (s.migrate)
                      return s.migrate(c.state, c.version);
                  console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
              } else
                  return c.state
      }
      ).then(c => {
          var p;
          return x = s.merge(c, (p = r()) != null ? p : y),
          n(x, !0),
          h()
      }
      ).then( () => {
          f == null || f(x, void 0),
          o = !0,
          u.forEach(c => c(x))
      }
      ).catch(c => {
          f == null || f(void 0, c)
      }
      )
  }
  ;
  return l.persist = {
      setOptions: N => {
          s = {
              ...s,
              ...N
          },
          N.getStorage && (d = N.getStorage())
      }
      ,
      clearStorage: () => {
          d == null || d.removeItem(s.name)
      }
      ,
      getOptions: () => s,
      rehydrate: () => v(),
      hasHydrated: () => o,
      onHydrate: N => (a.add(N),
      () => {
          a.delete(N)
      }
      ),
      onFinishHydration: N => (u.add(N),
      () => {
          u.delete(N)
      }
      )
  },
  v(),
  x || y
}
, Cm = (e, t) => (n, r, l) => {
  let s = {
      storage: km( () => localStorage),
      partialize: v => v,
      version: 0,
      merge: (v, N) => ({
          ...N,
          ...v
      }),
      ...t
  }
    , o = !1;
  const a = new Set
    , u = new Set;
  let d = s.storage;
  if (!d)
      return e( (...v) => {
          console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),
          n(...v)
      }
      , r, l);
  const g = () => {
      const v = s.partialize({
          ...r()
      });
      return d.setItem(s.name, {
          state: v,
          version: s.version
      })
  }
    , h = l.setState;
  l.setState = (v, N) => {
      h(v, N),
      g()
  }
  ;
  const m = e( (...v) => {
      n(...v),
      g()
  }
  , r, l);
  l.getInitialState = () => m;
  let y;
  const x = () => {
      var v, N;
      if (!d)
          return;
      o = !1,
      a.forEach(c => {
          var p;
          return c((p = r()) != null ? p : m)
      }
      );
      const f = ((N = s.onRehydrateStorage) == null ? void 0 : N.call(s, (v = r()) != null ? v : m)) || void 0;
      return qn(d.getItem.bind(d))(s.name).then(c => {
          if (c)
              if (typeof c.version == "number" && c.version !== s.version) {
                  if (s.migrate)
                      return [!0, s.migrate(c.state, c.version)];
                  console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
              } else
                  return [!1, c.state];
          return [!1, void 0]
      }
      ).then(c => {
          var p;
          const [w,S] = c;
          if (y = s.merge(S, (p = r()) != null ? p : m),
          n(y, !0),
          w)
              return g()
      }
      ).then( () => {
          f == null || f(y, void 0),
          y = r(),
          o = !0,
          u.forEach(c => c(y))
      }
      ).catch(c => {
          f == null || f(void 0, c)
      }
      )
  }
  ;
  return l.persist = {
      setOptions: v => {
          s = {
              ...s,
              ...v
          },
          v.storage && (d = v.storage)
      }
      ,
      clearStorage: () => {
          d == null || d.removeItem(s.name)
      }
      ,
      getOptions: () => s,
      rehydrate: () => x(),
      hasHydrated: () => o,
      onHydrate: v => (a.add(v),
      () => {
          a.delete(v)
      }
      ),
      onFinishHydration: v => (u.add(v),
      () => {
          u.delete(v)
      }
      )
  },
  s.skipHydration || x(),
  y || m
}
, _m = (e, t) => "getStorage"in t || "serialize"in t || "deserialize"in t ? Em(e, t) : Cm(e, t)
, $c = _m
, Fc = "trades_by_id_";
function Tm(e, t) {
  const n = `${Fc}${e}`
    , r = Vc(e)
    , l = [t, ...r].slice(0, 100);
  localStorage.setItem(n, JSON.stringify(l))
}
function Vc(e) {
  const t = `${Fc}${e}`
    , n = localStorage.getItem(t);
  return n ? JSON.parse(n) : []
}
const Hc = Cl()($c(e => ({
  trades: [],
  addTrade: t => {
      const n = Mc();
      if (n) {
          const r = {
              ...t,
              timestamp: Date.now()
          };
          Tm(n, r),
          e(l => ({
              trades: [r, ...l.trades].slice(0, 100)
          }))
      }
  }
  ,
  loadTradesForId: t => {
      const n = Vc(t);
      e({
          trades: n
      })
  }
}), {
  name: "trade-history"
}));
function Pm() {
  const {trades: e, loadTradesForId: t} = Hc()
    , [n,r] = P.useState(0);
  return P.useEffect( () => {
      const l = Mc();
      l && t(l),
      r(Math.floor(Math.random() * 76) + 872)
  }
  , [t]),
  i.jsxs("div", {
      className: "pb-20",
      children: [i.jsx("h2", {
          className: "text-2xl font-bold mb-6",
          children: "Histórico de Operações"
      }), i.jsxs("div", {
          className: "grid grid-cols-2 gap-4 mb-6",
          children: [i.jsxs("div", {
              className: "bg-gray-800 rounded-lg p-4",
              children: [i.jsxs("div", {
                  className: "flex items-center gap-2 text-gray-400 mb-1",
                  children: [i.jsx(Gs, {
                      className: "w-5 h-5"
                  }), i.jsx("span", {
                      children: "Total de Sinais"
                  })]
              }), i.jsx("p", {
                  className: "text-2xl font-bold text-green-500",
                  children: e.length
              })]
          }), i.jsxs("div", {
              className: "bg-gray-800 rounded-lg p-4",
              children: [i.jsxs("div", {
                  className: "flex items-center gap-2 text-gray-400 mb-1",
                  children: [i.jsx(Tc, {
                      className: "w-5 h-5"
                  }), i.jsx("span", {
                      children: "Traders Ativos"
                  })]
              }), i.jsx("p", {
                  className: "text-2xl font-bold text-blue-500",
                  children: n
              })]
          })]
      }), i.jsx("div", {
          className: "space-y-4",
          children: e.length === 0 ? i.jsx("p", {
              className: "text-gray-400 text-center py-8",
              children: "Nenhuma operação registrada ainda."
          }) : e.map( (l, s) => i.jsxs("div", {
              className: "bg-gray-800 rounded-lg p-4 flex justify-between items-center",
              children: [i.jsxs("div", {
                  children: [i.jsx("h3", {
                      className: "font-semibold",
                      children: l.asset
                  }), i.jsx("p", {
                      className: "text-sm text-gray-400",
                      children: new Date(l.timestamp).toLocaleString()
                  })]
              }), i.jsx("span", {
                  className: `font-bold ${l.order.includes("COMPRAR") ? "text-green-500" : "text-red-500"}`,
                  children: l.order
              })]
          }, s))
      })]
  })
}
const ia = [{
  id: "fundamentals",
  title: "Fundamentos do Mercado",
  description: "Aprenda os conceitos básicos do mercado de opções binárias",
  lessons: [{
      id: "intro-market",
      title: "Introdução ao Mercado",
      description: "Conceitos fundamentais do mercado de opções binárias",
      duration: "45 min",
      videoUrl: "https://traderinfalivel.com/wp-content/uploads/2024/08/AULA-01-INTRODUCAO-AO-MERCADO-1.mp4"
  }, {
      id: "binary-options",
      title: "Mercado de Opções Binárias",
      description: "Entenda profundamente como funciona o mercado de opções binárias",
      duration: "60 min",
      videoUrl: "https://traderinfalivel.com/wp-content/uploads/2024/08/AULA-01-O-Mercado-de-Opcoes-Binarias-1.mp4"
  }]
}, {
  id: "strategies",
  title: "Estratégias de Trading",
  description: "Domine as principais estratégias para operar com sucesso",
  lessons: [{
      id: "zero-time",
      title: "Estratégia Zero Time",
      description: "Aprenda a estratégia Zero Time para utilizar os sinais do aplicativo",
      duration: "35 min",
      videoUrl: "https://traderinfalivel.com/wp-content/uploads/2024/08/ZERO-TIME.mp4"
  }, {
      id: "loss-wait",
      title: "Estratégia Esperar o Loss",
      description: "Técnica especial para gerenciar operações após perdas",
      duration: "40 min",
      videoUrl: "https://traderinfalivel.com/wp-content/uploads/2024/08/ESPERAR-O-LOSS.mp4"
  }, {
      id: "standard-entry",
      title: "Entrada Padrão",
      description: "Aprenda o modelo padrão de entrada seguindo horário e ordem",
      duration: "30 min",
      videoUrl: "https://traderinfalivel.com/wp-content/uploads/2024/08/ENTRADA-PADRAO.mp4"
  }]
}, {
  id: "technical",
  title: "Análise Técnica",
  description: "Aprenda a analisar gráficos e identificar padrões",
  lessons: [{
      id: "support-resistance",
      title: "Suporte e Resistência",
      description: "Aprenda a identificar e operar com suporte e resistência",
      duration: "55 min",
      videoUrl: "https://traderinfalivel.com/wp-content/uploads/2024/08/AULA-12-Suporte-e-resistencia-1.0-1.mp4"
  }]
}, {
  id: "psychology",
  title: "Psicologia e Gestão",
  description: "Desenvolva a mentalidade correta para o trading",
  lessons: [{
      id: "trader-mindset",
      title: "Mindset do Trader",
      description: "Desenvolva a mentalidade necessária para o sucesso",
      duration: "50 min",
      videoUrl: "https://traderinfalivel.com/wp-content/uploads/2024/08/AULA-03-Mindset-Trader-1.mp4"
  }, {
      id: "money-management",
      title: "Gerenciamento Milionário",
      description: "Os segredos da gestão financeira rumo à riqueza",
      duration: "65 min",
      videoUrl: "https://traderinfalivel.com/wp-content/uploads/2024/08/Gerenciamento-Milionario-Os-Segredos-da-Gestao-Rumo-a-Riqueza-1.mp4"
  }]
}]
, Im = Cl()($c(e => ({
  completedLessons: [],
  toggleLesson: t => e(n => ({
      completedLessons: n.completedLessons.includes(t) ? n.completedLessons.filter(r => r !== t) : [...n.completedLessons, t]
  }))
}), {
  name: "course-progress"
}))
, Lm = Cl(e => ({
  currentVideo: null,
  setCurrentVideo: t => e({
      currentVideo: t
  })
}));
function zm() {
  const {completedLessons: e, toggleLesson: t} = Im()
    , {currentVideo: n, setCurrentVideo: r} = Lm()
    , l = ia.reduce( (o, a) => o + a.lessons.length, 0)
    , s = e.length / l * 100;
  return i.jsxs("div", {
      className: "pb-20",
      children: [i.jsxs("div", {
          className: "bg-gray-800 rounded-lg p-6 mb-6",
          children: [i.jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Academia do Trader"
          }), i.jsxs("div", {
              className: "grid grid-cols-3 gap-4 mb-6",
              children: [i.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [i.jsx(Ve, {
                      className: "w-5 h-5 text-blue-400"
                  }), i.jsxs("div", {
                      children: [i.jsx("p", {
                          className: "text-sm text-gray-400",
                          children: "Duração Total"
                      }), i.jsx("p", {
                          className: "font-semibold",
                          children: "54h"
                      })]
                  })]
              }), i.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [i.jsx(Tc, {
                      className: "w-5 h-5 text-blue-400"
                  }), i.jsxs("div", {
                      children: [i.jsx("p", {
                          className: "text-sm text-gray-400",
                          children: "Alunos Ativos"
                      }), i.jsx("p", {
                          className: "font-semibold",
                          children: "847"
                      })]
                  })]
              }), i.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [i.jsx(Nc, {
                      className: "w-5 h-5 text-blue-400"
                  }), i.jsxs("div", {
                      children: [i.jsx("p", {
                          className: "text-sm text-gray-400",
                          children: "Progresso"
                      }), i.jsxs("p", {
                          className: "font-semibold",
                          children: [s.toFixed(0), "%"]
                      })]
                  })]
              })]
          }), i.jsx("div", {
              className: "w-full bg-gray-700 rounded-full h-2",
              children: i.jsx("div", {
                  className: "bg-blue-400 h-2 rounded-full transition-all duration-300",
                  style: {
                      width: `${s}%`
                  }
              })
          })]
      }), i.jsx("div", {
          className: "space-y-6",
          children: ia.map(o => i.jsxs("div", {
              className: "bg-gray-800 rounded-lg p-6",
              children: [i.jsx("h3", {
                  className: "text-xl font-semibold mb-2",
                  children: o.title
              }), i.jsx("p", {
                  className: "text-gray-400 mb-4",
                  children: o.description
              }), i.jsx("div", {
                  className: "space-y-4",
                  children: o.lessons.map(a => {
                      const u = e.includes(a.id);
                      return i.jsx("div", {
                          className: "bg-gray-700 rounded-lg p-4",
                          children: i.jsxs("div", {
                              className: "flex items-start justify-between gap-4",
                              children: [i.jsxs("div", {
                                  className: "flex-1",
                                  children: [i.jsx("h4", {
                                      className: "font-semibold mb-1",
                                      children: a.title
                                  }), i.jsx("p", {
                                      className: "text-sm text-gray-400 mb-2",
                                      children: a.description
                                  }), i.jsx("div", {
                                      className: "flex items-center gap-4",
                                      children: i.jsxs("span", {
                                          className: "text-sm text-gray-400",
                                          children: [i.jsx(Ve, {
                                              className: "w-4 h-4 inline mr-1"
                                          }), a.duration]
                                      })
                                  })]
                              }), i.jsxs("div", {
                                  className: "flex items-center gap-3",
                                  children: [i.jsx("button", {
                                      onClick: () => r(a.videoUrl),
                                      className: "bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                      children: "Assistir"
                                  }), i.jsxs("label", {
                                      className: "flex items-center cursor-pointer",
                                      children: [i.jsx("input", {
                                          type: "checkbox",
                                          checked: u,
                                          onChange: () => t(a.id),
                                          className: "sr-only"
                                      }), i.jsx("div", {
                                          className: `w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${u ? "bg-blue-400 border-blue-400" : "border-gray-500"}`,
                                          children: u && i.jsx("svg", {
                                              className: "w-4 h-4 text-white",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                              children: i.jsx("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: 2,
                                                  d: "M5 13l4 4L19 7"
                                              })
                                          })
                                      })]
                                  })]
                              })]
                          })
                      }, a.id)
                  }
                  )
              })]
          }, o.id))
      }), n && i.jsx(Lc, {
          videoUrl: n,
          onClose: () => r(null)
      })]
  })
}
function Mm() {
  const e = {
      volatility: 75,
      activity: 85,
      sentiment: 65
  };
  return i.jsxs("div", {
      className: "bg-gray-800 rounded-lg p-6",
      children: [i.jsx("h3", {
          className: "text-xl font-semibold mb-4",
          children: "Visão Geral do Mercado"
      }), i.jsxs("div", {
          className: "grid grid-cols-3 gap-4",
          children: [i.jsxs("div", {
              className: "space-y-2",
              children: [i.jsxs("div", {
                  className: "flex items-center justify-between text-sm",
                  children: [i.jsx("span", {
                      className: "text-gray-400",
                      children: "Volatilidade"
                  }), i.jsxs("span", {
                      className: "font-medium",
                      children: [e.volatility, "%"]
                  })]
              }), i.jsx("div", {
                  className: "w-full bg-gray-700 rounded-full h-2",
                  children: i.jsx("div", {
                      className: "bg-yellow-500 h-2 rounded-full transition-all duration-300",
                      style: {
                          width: `${e.volatility}%`
                      }
                  })
              })]
          }), i.jsxs("div", {
              className: "space-y-2",
              children: [i.jsxs("div", {
                  className: "flex items-center justify-between text-sm",
                  children: [i.jsx("span", {
                      className: "text-gray-400",
                      children: "Atividade"
                  }), i.jsxs("span", {
                      className: "font-medium",
                      children: [e.activity, "%"]
                  })]
              }), i.jsx("div", {
                  className: "w-full bg-gray-700 rounded-full h-2",
                  children: i.jsx("div", {
                      className: "bg-blue-500 h-2 rounded-full transition-all duration-300",
                      style: {
                          width: `${e.activity}%`
                      }
                  })
              })]
          }), i.jsxs("div", {
              className: "space-y-2",
              children: [i.jsxs("div", {
                  className: "flex items-center justify-between text-sm",
                  children: [i.jsx("span", {
                      className: "text-gray-400",
                      children: "Sentimento"
                  }), i.jsxs("span", {
                      className: "font-medium",
                      children: [e.sentiment, "%"]
                  })]
              }), i.jsx("div", {
                  className: "w-full bg-gray-700 rounded-full h-2",
                  children: i.jsx("div", {
                      className: "bg-green-500 h-2 rounded-full transition-all duration-300",
                      style: {
                          width: `${e.sentiment}%`
                      }
                  })
              })]
          })]
      })]
  })
}
const Dm = [{
  id: "asian",
  name: "Sessão Asiática",
  startTime: "22:00",
  endTime: "07:00",
  activity: "medium",
  description: "Volatilidade moderada, bom para EUR/JPY e USD/JPY"
}, {
  id: "european",
  name: "Sessão Europeia",
  startTime: "03:00",
  endTime: "12:00",
  activity: "high",
  description: "Alta volatilidade, excelente para EUR/USD e GBP/USD"
}, {
  id: "american",
  name: "Sessão Americana",
  startTime: "08:00",
  endTime: "17:00",
  activity: "high",
  description: "Volume intenso, ótimo para todos os pares"
}];
function Rm() {
  const e = n => {
      switch (n) {
      case "high":
          return "bg-green-500";
      case "medium":
          return "bg-yellow-500";
      case "low":
          return "bg-red-500"
      }
  }
    , t = n => {
      switch (n) {
      case "high":
          return "Alta";
      case "medium":
          return "Média";
      case "low":
          return "Baixa"
      }
  }
  ;
  return i.jsxs("div", {
      className: "bg-gray-800 rounded-lg p-6",
      children: [i.jsx("h3", {
          className: "text-xl font-semibold mb-4",
          children: "Sessões de Mercado"
      }), i.jsx("div", {
          className: "space-y-4",
          children: Dm.map(n => i.jsx("div", {
              className: "bg-gray-700 rounded-lg p-4",
              children: i.jsxs("div", {
                  className: "flex items-start justify-between gap-4",
                  children: [i.jsxs("div", {
                      children: [i.jsx("h4", {
                          className: "font-semibold mb-1",
                          children: n.name
                      }), i.jsxs("div", {
                          className: "flex items-center gap-2 text-sm text-gray-400 mb-2",
                          children: [i.jsx(Ve, {
                              className: "w-4 h-4"
                          }), i.jsxs("span", {
                              children: [n.startTime, " - ", n.endTime]
                          })]
                      }), i.jsx("p", {
                          className: "text-sm text-gray-300",
                          children: n.description
                      })]
                  }), i.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [i.jsx("div", {
                          className: `w-3 h-3 rounded-full ${e(n.activity)}`
                      }), i.jsx("span", {
                          className: "text-sm font-medium",
                          children: t(n.activity)
                      })]
                  })]
              })
          }, n.id))
      })]
  })
}
const Om = [{
  asset: "EUR/USD",
  trend: "up",
  strength: 85
}, {
  asset: "GBP/USD",
  trend: "down",
  strength: 65
}, {
  asset: "USD/JPY",
  trend: "neutral",
  strength: 45
}, {
  asset: "EUR/JPY",
  trend: "up",
  strength: 75
}, {
  asset: "AUD/USD",
  trend: "down",
  strength: 55
}, {
  asset: "USD/CAD",
  trend: "up",
  strength: 70
}];
function Am() {
  const e = t => {
      switch (t) {
      case "up":
          return i.jsx(_c, {
              className: "w-5 h-5 text-green-500"
          });
      case "down":
          return i.jsx(Cc, {
              className: "w-5 h-5 text-red-500"
          });
      default:
          return i.jsx(Ec, {
              className: "w-5 h-5 text-yellow-500"
          })
      }
  }
  ;
  return i.jsx("div", {
      className: "flex gap-4 pb-4 min-w-max",
      children: Om.map(t => i.jsxs("div", {
          className: "bg-gray-700 rounded-lg p-4 w-[200px]",
          children: [i.jsxs("div", {
              className: "flex items-center justify-between mb-2",
              children: [i.jsx("span", {
                  className: "font-medium",
                  children: t.asset
              }), e(t.trend)]
          }), i.jsxs("div", {
              className: "space-y-1",
              children: [i.jsxs("div", {
                  className: "flex items-center justify-between text-sm",
                  children: [i.jsx("span", {
                      className: "text-gray-400",
                      children: "Força"
                  }), i.jsxs("span", {
                      children: [t.strength, "%"]
                  })]
              }), i.jsx("div", {
                  className: "w-full bg-gray-600 rounded-full h-2",
                  children: i.jsx("div", {
                      className: `h-2 rounded-full ${t.trend === "up" ? "bg-green-500" : t.trend === "down" ? "bg-red-500" : "bg-yellow-500"}`,
                      style: {
                          width: `${t.strength}%`
                      }
                  })
              })]
          })]
      }, t.asset))
  })
}
const Um = [{
  asset: "EUR/USD",
  currentTrend: "up",
  volatility: 85,
  volume: 90,
  strength: 75,
  nextSignal: {
      time: "14:30",
      type: "CALL",
      probability: 85
  }
}, {
  asset: "GBP/USD",
  currentTrend: "down",
  volatility: 70,
  volume: 65,
  strength: 80
}, {
  asset: "USD/JPY",
  currentTrend: "neutral",
  volatility: 60,
  volume: 75,
  strength: 65,
  nextSignal: {
      time: "15:15",
      type: "PUT",
      probability: 78
  }
}];
function $m() {
  const e = t => {
      switch (t) {
      case "up":
          return i.jsx(_c, {
              className: "w-5 h-5 text-green-500"
          });
      case "down":
          return i.jsx(Cc, {
              className: "w-5 h-5 text-red-500"
          });
      case "neutral":
          return i.jsx(Ec, {
              className: "w-5 h-5 text-yellow-500"
          })
      }
  }
  ;
  return i.jsxs("div", {
      className: "bg-gray-800 rounded-lg p-6",
      children: [i.jsx("h3", {
          className: "text-xl font-semibold mb-4",
          children: "Desempenho dos Ativos"
      }), i.jsx("div", {
          className: "space-y-4",
          children: Um.map(t => i.jsxs("div", {
              className: "bg-gray-700 rounded-lg p-4",
              children: [i.jsx("div", {
                  className: "flex items-start justify-between gap-4 mb-4",
                  children: i.jsxs("div", {
                      children: [i.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [i.jsx("h4", {
                              className: "font-semibold",
                              children: t.asset
                          }), e(t.currentTrend)]
                      }), t.nextSignal && i.jsxs("div", {
                          className: "flex items-center gap-2 mt-2 text-sm",
                          children: [i.jsx(Ve, {
                              className: "w-4 h-4 text-gray-400"
                          }), i.jsx("span", {
                              className: "text-gray-300",
                              children: "Próximo sinal:"
                          }), i.jsx("span", {
                              className: "font-medium",
                              children: t.nextSignal.time
                          }), i.jsx("span", {
                              className: `font-medium ${t.nextSignal.type === "CALL" ? "text-green-500" : "text-red-500"}`,
                              children: t.nextSignal.type
                          }), i.jsxs("span", {
                              className: "text-gray-400",
                              children: ["(", t.nextSignal.probability, "%)"]
                          })]
                      })]
                  })
              }), i.jsxs("div", {
                  className: "grid grid-cols-3 gap-4",
                  children: [i.jsxs("div", {
                      className: "space-y-2",
                      children: [i.jsxs("div", {
                          className: "flex items-center justify-between text-sm",
                          children: [i.jsx("span", {
                              className: "text-gray-400",
                              children: "Volatilidade"
                          }), i.jsxs("span", {
                              children: [t.volatility, "%"]
                          })]
                      }), i.jsx("div", {
                          className: "w-full bg-gray-600 rounded-full h-2",
                          children: i.jsx("div", {
                              className: "bg-yellow-500 h-2 rounded-full",
                              style: {
                                  width: `${t.volatility}%`
                              }
                          })
                      })]
                  }), i.jsxs("div", {
                      className: "space-y-2",
                      children: [i.jsxs("div", {
                          className: "flex items-center justify-between text-sm",
                          children: [i.jsx("span", {
                              className: "text-gray-400",
                              children: "Volume"
                          }), i.jsxs("span", {
                              children: [t.volume, "%"]
                          })]
                      }), i.jsx("div", {
                          className: "w-full bg-gray-600 rounded-full h-2",
                          children: i.jsx("div", {
                              className: "bg-blue-500 h-2 rounded-full",
                              style: {
                                  width: `${t.volume}%`
                              }
                          })
                      })]
                  }), i.jsxs("div", {
                      className: "space-y-2",
                      children: [i.jsxs("div", {
                          className: "flex items-center justify-between text-sm",
                          children: [i.jsx("span", {
                              className: "text-gray-400",
                              children: "Força"
                          }), i.jsxs("span", {
                              children: [t.strength, "%"]
                          })]
                      }), i.jsx("div", {
                          className: "w-full bg-gray-600 rounded-full h-2",
                          children: i.jsx("div", {
                              className: "bg-purple-500 h-2 rounded-full",
                              style: {
                                  width: `${t.strength}%`
                              }
                          })
                      })]
                  })]
              })]
          }, t.asset))
      })]
  })
}
function Bc() {
  const e = new Date
    , t = new Date(e.toLocaleString("en-US", {
      timeZone: "America/Sao_Paulo"
  }))
    , n = Math.floor(Math.random() * 3) + 2;
  t.setMinutes(t.getMinutes() + n);
  const r = t.getHours().toString().padStart(2, "0")
    , l = t.getMinutes().toString().padStart(2, "0");
  return `${r}:${l}`
}
function Fm({showVerification: e=!0}) {
  const t = Bc();
  return i.jsx("div", {
      className: "bg-gray-700 rounded-lg p-4",
      children: i.jsxs("div", {
          className: "flex items-center justify-between",
          children: [i.jsxs("div", {
              className: "flex items-center gap-2",
              children: [i.jsx(Ve, {
                  className: "w-5 h-5 text-green-400"
              }), i.jsx("span", {
                  className: "text-gray-300",
                  children: "Horário Indicado para Análise:"
              })]
          }), i.jsx("span", {
              className: "font-bold text-green-400",
              children: t
          })]
      })
  })
}
async function Vm(e) {
  try {
      console.log("Checking email access for:", e);
      const t = await fetch("/public/mapa.txt", {
          mode: "no-cors",
          cache: "no-store",
          headers: {
              "Cache-Control": "no-cache",
              Pragma: "no-cache"
          }
      })
        , n = "https://api.allorigins.win/raw?url="
        , r = encodeURIComponent("/public/mapa.txt")
        , l = await fetch(n + r);
      if (!l.ok)
          return console.error("Failed to fetch email list:", l.status, l.statusText),
          !1;
      const s = await l.text();
      if (console.log("Received text content:", s.slice(0, 100) + "..."),
      !s.trim())
          return console.error("Received empty text content"),
          !1;
      const o = s.split(`
`).map(d => d.trim().toLowerCase()).filter(d => d.length > 0);
      console.log("Number of emails found:", o.length);
      const a = e.toLowerCase().trim()
        , u = o.includes(a);
      return console.log("Email exists in list:", u),
      u
  } catch (t) {
      return console.error("Error checking email access:", t),
      t instanceof Error && (console.error("Error name:", t.name),
      console.error("Error message:", t.message),
      console.error("Error stack:", t.stack)),
      !1
  }
}
function Hm({onClose: e, onVerified: t}) {
  const [n,r] = P.useState("")
    , [l,s] = P.useState(!1)
    , [o,a] = P.useState("")
    , u = async d => {
      d.preventDefault(),
      s(!0),
      a("");
      try {
          if (!n.includes("@")) {
              a("Email inválido");
              return
          }
          console.log("Starting email verification for:", n);
          const g = await Vm(n);
          if (console.log("Access check result:", g),
          g) {
              const h = n.toLowerCase().trim();
              localStorage.setItem("verifiedEmail", h),
              console.log("Email verified successfully:", h),
              t()
          } else
              console.log("Email verification failed"),
              a("Email não autorizado")
      } catch (g) {
          console.error("Verification error:", g),
          a("Erro ao verificar email. Tente novamente.")
      } finally {
          s(!1)
      }
  }
  ;
  return i.jsx("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
      children: i.jsxs("div", {
          className: "bg-gray-800 rounded-xl p-6 w-full max-w-md relative",
          children: [i.jsx("button", {
              onClick: e,
              className: "absolute top-4 right-4 text-gray-400 hover:text-white",
              children: i.jsx(fn, {
                  className: "w-6 h-6"
              })
          }), i.jsx("h2", {
              className: "text-xl font-bold mb-4",
              children: "Verificar Acesso"
          }), i.jsxs("form", {
              onSubmit: u,
              className: "space-y-4",
              children: [i.jsxs("div", {
                  children: [i.jsx("label", {
                      htmlFor: "email",
                      className: "block text-sm font-medium text-gray-300 mb-1",
                      children: "Digite seu email"
                  }), i.jsx("input", {
                      type: "email",
                      id: "email",
                      value: n,
                      onChange: d => r(d.target.value),
                      className: "w-full px-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                      placeholder: "seu@email.com",
                      required: !0,
                      disabled: l
                  })]
              }), o && i.jsxs("div", {
                  className: "space-y-4",
                  children: [i.jsxs("div", {
                      className: "flex items-center gap-2 text-red-400",
                      children: [i.jsx(Je, {
                          className: "w-4 h-4"
                      }), i.jsx("p", {
                          children: o
                      })]
                  }), i.jsxs("div", {
                      className: "space-y-2",
                      children: [i.jsx("p", {
                          className: "text-sm text-gray-400",
                          children: "Para ter acesso ao horário indicado, você precisa adquirir o produto."
                      }), i.jsx("a", {
                          href: "https://pay.kirvano.com/96443c66-a95a-42a0-bbbc-8d733e0a4e2a",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-center transition-colors duration-200",
                          children: "Comprar Agora"
                      })]
                  })]
              }), !o && i.jsx("button", {
                  type: "submit",
                  className: "w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                  disabled: l,
                  children: l ? "Verificando..." : "Verificar"
              })]
          })]
      })
  })
}
function Bm() {
  const [e,t] = P.useState(!1)
    , [n,r] = P.useState(!1);
  P.useEffect( () => {
      const s = localStorage.getItem("verifiedEmail");
      r(!!s)
  }
  , []);
  const l = () => {
      r(!0),
      t(!1)
  }
  ;
  return i.jsxs("div", {
      className: "pb-20",
      children: [i.jsx("h2", {
          className: "text-2xl font-bold mb-6",
          children: "Análise de Mercado"
      }), i.jsxs("div", {
          className: "relative",
          children: [i.jsx("div", {
              className: n ? "" : "filter blur-sm",
              children: i.jsxs("div", {
                  className: "space-y-6",
                  children: [i.jsx(Fm, {
                      showVerification: !1
                  }), i.jsx(Mm, {}), i.jsx($m, {}), i.jsxs("div", {
                      className: "bg-gray-800 rounded-lg p-6",
                      children: [i.jsx("h3", {
                          className: "text-xl font-semibold mb-4",
                          children: "Tendência dos Ativos"
                      }), i.jsx("div", {
                          className: "overflow-x-auto -mx-6 px-6",
                          children: i.jsx(Am, {})
                      })]
                  }), i.jsx(Rm, {})]
              })
          }), !n && i.jsx("div", {
              className: "absolute inset-0 flex items-start justify-center p-4",
              style: {
                  marginTop: "20vh"
              },
              children: i.jsx("div", {
                  className: "bg-gray-800/95 backdrop-blur-sm max-w-md w-full rounded-xl p-8 shadow-2xl",
                  children: i.jsxs("div", {
                      className: "flex flex-col items-center text-center",
                      children: [i.jsx("div", {
                          className: "bg-green-500/10 p-4 rounded-full mb-6",
                          children: i.jsx(Ep, {
                              className: "w-12 h-12 text-green-500"
                          })
                      }), i.jsx("h3", {
                          className: "text-2xl font-bold mb-4",
                          children: "Desbloqueie o Mapa do Mercado"
                      }), i.jsxs("div", {
                          className: "bg-gray-700/50 rounded-lg p-6 mb-6 w-full",
                          children: [i.jsx("h4", {
                              className: "font-semibold text-lg mb-4 text-green-400",
                              children: "Tenha acesso completo a:"
                          }), i.jsxs("ul", {
                              className: "space-y-3 text-left",
                              children: [i.jsxs("li", {
                                  className: "flex items-center gap-2",
                                  children: [i.jsx("div", {
                                      className: "w-2 h-2 bg-green-500 rounded-full"
                                  }), i.jsx("span", {
                                      children: "Horários indicados para análise"
                                  })]
                              }), i.jsxs("li", {
                                  className: "flex items-center gap-2",
                                  children: [i.jsx("div", {
                                      className: "w-2 h-2 bg-green-500 rounded-full"
                                  }), i.jsx("span", {
                                      children: "Visão geral do mercado em tempo real"
                                  })]
                              }), i.jsxs("li", {
                                  className: "flex items-center gap-2",
                                  children: [i.jsx("div", {
                                      className: "w-2 h-2 bg-green-500 rounded-full"
                                  }), i.jsx("span", {
                                      children: "Performance detalhada dos ativos"
                                  })]
                              }), i.jsxs("li", {
                                  className: "flex items-center gap-2",
                                  children: [i.jsx("div", {
                                      className: "w-2 h-2 bg-green-500 rounded-full"
                                  }), i.jsx("span", {
                                      children: "Tendências e momentos ideais"
                                  })]
                              }), i.jsxs("li", {
                                  className: "flex items-center gap-2",
                                  children: [i.jsx("div", {
                                      className: "w-2 h-2 bg-green-500 rounded-full"
                                  }), i.jsx("span", {
                                      children: "Sessões de mercado otimizadas"
                                  })]
                              })]
                          })]
                      }), i.jsx("button", {
                          onClick: () => t(!0),
                          className: "w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200",
                          children: "Desbloquear Agora"
                      })]
                  })
              })
          })]
      }), e && i.jsx(Hm, {
          onClose: () => t(!1),
          onVerified: l
      })]
  })
}
function Wm(e) {
  const [t,n] = P.useState("")
    , [r,l] = P.useState(!1);
  return P.useEffect( () => {
      const s = () => {
          const a = new Date
            , [u,d] = e.split(":").map(Number)
            , g = -3
            , h = a.getTimezoneOffset() / 60
            , m = g - -h
            , y = new Date(a.getTime() + m * 60 * 60 * 1e3)
            , x = new Date(y);
          x.setHours(u, d, 0, 0),
          y > x && x.setDate(x.getDate() + 1);
          const v = x.getTime() - y.getTime()
            , N = v <= 0 && v > -36e5;
          if (l(N),
          N) {
              n("Sessão em Andamento");
              return
          }
          const f = Math.floor(v / (1e3 * 60 * 60))
            , c = Math.floor(v % (1e3 * 60 * 60) / (1e3 * 60));
          n(`${f}h ${c}m`)
      }
      ;
      s();
      const o = setInterval(s, 6e4);
      return () => clearInterval(o)
  }
  , [e]),
  {
      timeUntilNext: t,
      isSessionTime: r
  }
}
function Qm() {
  const {timeUntilNext: e, isSessionTime: t} = Wm("16:00");
  return i.jsxs("div", {
      className: "pb-20",
      children: [i.jsx("h2", {
          className: "text-2xl font-bold mb-6",
          children: "Sessões ao Vivo"
      }), i.jsx("div", {
          className: "mb-8",
          children: i.jsx("a", {
              href: "https://chat.whatsapp.com/JXZaDx1J9dy01MxH0T5KXj",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center justify-center gap-2 w-full bg-[#12b880] hover:bg-[#04875b] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200",
              children: "Entrar no Grupo do Whatsapp"
          })
      }), i.jsxs("div", {
          className: "bg-surface rounded-lg p-6 mb-6",
          children: [i.jsxs("div", {
              className: "flex items-center gap-4 mb-4",
              children: [i.jsx("img", {
                  src: "https://traderinfalivel.com/wp-content/uploads/2025/01/MATHEUS.png",
                  alt: "Matheus",
                  className: "w-16 h-16 rounded-full object-cover"
              }), i.jsxs("div", {
                  children: [i.jsx("h3", {
                      className: "text-xl font-semibold",
                      children: "Matheus Mettler"
                  }), i.jsx("p", {
                      className: "text-gray-400",
                      children: "Trader Profissional"
                  })]
              })]
          }), i.jsxs("div", {
              className: "space-y-4",
              children: [i.jsxs("div", {
                  className: "flex items-center gap-2 text-gray-300",
                  children: [i.jsx(Ve, {
                      className: "w-5 h-5"
                  }), i.jsx("span", {
                      children: "Segunda a Sexta, às 16:00"
                  })]
              }), t ? i.jsxs("a", {
                  href: "https://us02web.zoom.us/j/83950820203?pwd=9FE9LEbgYOi3NrrsGXOKRajP79sBWk.1",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200",
                  children: [i.jsx(Sc, {
                      className: "w-5 h-5"
                  }), "Entrar na Sessão"]
              }) : i.jsxs("div", {
                  children: [i.jsx("div", {
                      className: "text-gray-400 mb-2",
                      children: "Próxima sessão em:"
                  }), i.jsx("div", {
                      className: "bg-surface-light rounded-lg p-4 text-center",
                      children: i.jsx("span", {
                          className: "text-2xl font-bold",
                          children: e
                      })
                  })]
              })]
          })]
      }), i.jsxs("div", {
          className: "bg-surface rounded-lg p-6 mb-6",
          children: [i.jsxs("div", {
              className: "flex items-center gap-4 mb-4",
              children: [i.jsx("img", {
                  src: "https://traderinfalivel.com/wp-content/uploads/2025/01/adamtrader.png",
                  alt: "Adam",
                  className: "w-16 h-16 rounded-full object-cover"
              }), i.jsxs("div", {
                  children: [i.jsx("h3", {
                      className: "text-xl font-semibold",
                      children: "Adam Oliveira"
                  }), i.jsx("p", {
                      className: "text-gray-400",
                      children: "Trader Profissional"
                  })]
              })]
          }), i.jsxs("div", {
              className: "space-y-4",
              children: [i.jsxs("div", {
                  className: "flex items-center gap-2 text-gray-300",
                  children: [i.jsx(Ve, {
                      className: "w-5 h-5"
                  }), i.jsx("span", {
                      children: "Segunda a Sexta, às 18:00"
                  })]
              }), i.jsxs("div", {
                  className: "flex items-center gap-2 text-warning bg-warning/10 p-3 rounded-lg",
                  children: [i.jsx(Je, {
                      className: "w-5 h-5 flex-shrink-0"
                  }), i.jsx("span", {
                      children: "Trader em férias. As sessões retornarão em breve!"
                  })]
              }), i.jsx("button", {
                  disabled: !0,
                  className: "w-full bg-surface-light text-gray-400 font-bold py-3 px-6 rounded-lg cursor-not-allowed",
                  children: "Sessão Indisponível"
              })]
          })]
      })]
  })
}
function oa() {
  const [e,t] = P.useState(!1)
    , [n,r] = P.useState(!1)
    , l = () => {
      r(!0),
      t(!e)
  }
  ;
  return i.jsxs(i.Fragment, {
      children: [i.jsx("button", {
          onClick: l,
          className: `fixed top-4 right-4 bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-lg transition-all duration-300 transform z-50 ${n ? "scale-95" : "scale-100"} ${e ? "rotate-180" : "hover:rotate-12"}`,
          onAnimationEnd: () => r(!1),
          children: e ? i.jsx(fn, {
              className: "w-6 h-6"
          }) : i.jsx(_p, {
              className: "w-6 h-6"
          })
      }), i.jsxs("div", {
          className: `fixed top-20 right-4 w-80 bg-surface rounded-lg shadow-xl transform transition-all duration-300 z-50 ${e ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}`,
          children: [i.jsxs("div", {
              className: "bg-surface-light rounded-t-lg p-4 flex items-center gap-3 border-b border-surface-dark",
              children: [i.jsx("img", {
                  src: "https://traderinfalivel.com/wp-content/uploads/2025/01/perfil-matheus.png",
                  alt: "Support",
                  className: "w-10 h-10 rounded-full object-cover"
              }), i.jsxs("div", {
                  children: [i.jsx("h3", {
                      className: "font-semibold text-white",
                      children: "Mateus Mettler"
                  }), i.jsxs("div", {
                      className: "flex items-center gap-1 text-primary-light text-sm",
                      children: [i.jsx("div", {
                          className: "w-2 h-2 bg-primary rounded-full"
                      }), i.jsx("span", {
                          children: "Online"
                      })]
                  })]
              })]
          }), i.jsxs("div", {
              className: "p-4 space-y-4",
              children: [i.jsxs("div", {
                  className: "flex gap-3",
                  children: [i.jsx("img", {
                      src: "https://traderinfalivel.com/wp-content/uploads/2025/01/perfil-matheus.png",
                      alt: "Support",
                      className: "w-8 h-8 rounded-full object-cover"
                  }), i.jsx("div", {
                      className: "bg-surface-light rounded-lg p-3 text-sm max-w-[80%] text-white",
                      children: i.jsx("p", {
                          children: "Olá! Nosso suporte está disponível via Telegram nos seguintes horários:"
                      })
                  })]
              }), i.jsxs("div", {
                  className: "bg-surface-light rounded-lg p-3 space-y-2",
                  children: [i.jsxs("div", {
                      className: "flex items-center gap-2 text-sm",
                      children: [i.jsx(Ve, {
                          className: "w-4 h-4 text-primary-light"
                      }), i.jsx("span", {
                          children: "Segunda a Sexta: 09h00 às 17h00"
                      })]
                  }), i.jsxs("div", {
                      className: "flex items-center gap-2 text-sm",
                      children: [i.jsx(Ve, {
                          className: "w-4 h-4 text-primary-light"
                      }), i.jsx("span", {
                          children: "Sábado: 10h00 às 14h00"
                      })]
                  })]
              })]
          }), i.jsx("div", {
              className: "p-4 border-t border-surface-dark",
              children: i.jsx("a", {
                  href: "https://t.me/Mateustraderadm",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "block w-full bg-primary hover:bg-primary-dark text-white text-center py-3 px-4 rounded-lg transition-colors duration-200",
                  children: "Iniciar Conversa no Telegram"
              })
          })]
      })]
  })
}
function Km(e) {
  return {
      asset: e,
      order: Math.random() > .5 ? "COMPRA" : "VENDA",
      time: Bc(),
      timeframe: "M1"
  }
}
function Ym() {
  const [e,t] = P.useState(!1)
    , [n,r] = P.useState(null)
    , [l,s] = P.useState("EUR/USD")
    , [o,a] = P.useState([])
    , [u,d] = P.useState(!1)
    , [g,h] = P.useState(!1)
    , [m,y] = P.useState(0)
    , [x,v] = P.useState(null);
  return P.useEffect( () => {
      let p = null;
      return m > 0 && (p = setInterval( () => {
          y(w => w <= 1 ? (p && clearInterval(p),
          0) : w - 1)
      }
      , 1e3)),
      () => {
          p && clearInterval(p)
      }
  }
  , [m]),
  P.useEffect( () => {
      h(Zp())
  }
  , []),
  {
      isLoading: e,
      result: n,
      availableAssets: o,
      showIdVerification: u,
      setShowIdVerification: d,
      isVerified: g,
      setIsVerified: h,
      cooldownTime: m,
      selectedAsset: l,
      analyze: () => {
          if (!g) {
              d(!0);
              return
          }
          if (m > 0)
              return;
          t(!0),
          r(null),
          a([]);
          const p = setTimeout( () => {
              const w = Km(l);
              r(w),
              t(!1),
              v(null)
          }
          , 3e3);
          v(p)
      }
      ,
      selectAsset: p => {
          s(p)
      }
      ,
      reset: () => {
          x && (clearTimeout(x),
          v(null)),
          t(!1),
          r(null),
          a([]),
          y(3)
      }
  }
}
function Xm() {
  const {currentView: e} = Uc()
    , {addTrade: t} = Hc()
    , {isLoading: n, result: r, showNoSignals: l, marketClosed: s, timeUntilOpen: o, availableAssets: a, showIdVerification: u, setShowIdVerification: d, isVerified: g, setIsVerified: h, cooldownTime: m, analyze: y, selectAsset: x, reset: v} = Ym()
    , N = c => {
      t({
          asset: c.asset,
          order: c.order
      })
  }
    , f = !n && !l && !r && a.length === 0;
  if (e === "history" || e === "academy" || e === "map" || e === "live") {
      const c = {
          history: Pm,
          academy: zm,
          map: Bm,
          live: Qm
      }[e];
      return i.jsxs(ta, {
          children: [i.jsx(oa, {}), i.jsx(c, {}), i.jsx(sa, {})]
      })
  }
  return i.jsxs(ta, {
      children: [i.jsx(oa, {}), f && i.jsx(Lp, {
          onAnalyze: y,
          onSelectAsset: x,
          cooldownTime: m
      }), n && i.jsx(Op, {}), l && i.jsx(Ap, {
          onReset: v,
          marketClosed: s,
          timeUntilOpen: o
      }), a.length > 0 && i.jsx(Pc, {
          availableAssets: a,
          onSelectAsset: x
      }), r && i.jsx(zp, {
          result: r,
          onReset: () => {
              N(r),
              v()
          }
      }), e === "main" && !f && i.jsx(bp, {
          onClick: () => v(),
          disabled: m > 0,
          cooldownTime: m
      }), u && i.jsx(Jp, {
          onClose: () => d(!1),
          onVerified: () => {
              h(!0),
              d(!1),
              y()
          }
      }), i.jsx(sa, {})]
  })
}
jc(document.getElementById("root")).render(i.jsx(P.StrictMode, {
  children: i.jsx(Xm, {})
}));