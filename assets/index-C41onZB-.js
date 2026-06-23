const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/HeavyApp-C6kf1gXd.js", "assets/App-CYgIjxWH.js"])
) => i.map((i) => d[i]);
(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) r(c);
  new MutationObserver((c) => {
    for (const h of c)
      if (h.type === "childList")
        for (const f of h.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && r(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(c) {
    const h = {};
    return (
      c.integrity && (h.integrity = c.integrity),
      c.referrerPolicy && (h.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (h.credentials = "omit")
        : (h.credentials = "same-origin"),
      h
    );
  }
  function r(c) {
    if (c.ep) return;
    c.ep = !0;
    const h = l(c);
    fetch(c.href, h);
  }
})();
const xv = "modulepreload",
  Ov = function (s) {
    return "/" + s;
  },
  Pd = {},
  Bm = function (a, l, r) {
    let c = Promise.resolve();
    if (l && l.length > 0) {
      let f = function (g) {
        return Promise.all(
          g.map((y) =>
            Promise.resolve(y).then(
              (_) => ({ status: "fulfilled", value: _ }),
              (_) => ({ status: "rejected", reason: _ })
            )
          )
        );
      };
      document.getElementsByTagName("link");
      const m = document.querySelector("meta[property=csp-nonce]"),
        v =
          (m == null ? void 0 : m.nonce) ||
          (m == null ? void 0 : m.getAttribute("nonce"));
      c = f(
        l.map((g) => {
          if (((g = Ov(g)), g in Pd)) return;
          Pd[g] = !0;
          const y = g.endsWith(".css"),
            _ = y ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${g}"]${_}`)) return;
          const T = document.createElement("link");
          if (
            ((T.rel = y ? "stylesheet" : xv),
            y || (T.as = "script"),
            (T.crossOrigin = ""),
            (T.href = g),
            v && T.setAttribute("nonce", v),
            document.head.appendChild(T),
            y)
          )
            return new Promise((x, j) => {
              T.addEventListener("load", x),
                T.addEventListener("error", () =>
                  j(new Error(`Unable to preload CSS for ${g}`))
                );
            });
        })
      );
    }
    function h(f) {
      const m = new Event("vite:preloadError", { cancelable: !0 });
      if (((m.payload = f), window.dispatchEvent(m), !m.defaultPrevented))
        throw f;
    }
    return c.then((f) => {
      for (const m of f || []) m.status === "rejected" && h(m.reason);
      return a().catch(h);
    });
  };
var Fb =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Rv(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default")
    ? s.default
    : s;
}
var wo = { exports: {} },
  ls = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wd;
function Cv() {
  if (Wd) return ls;
  Wd = 1;
  var s = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.fragment");
  function l(r, c, h) {
    var f = null;
    if (
      (h !== void 0 && (f = "" + h),
      c.key !== void 0 && (f = "" + c.key),
      "key" in c)
    ) {
      h = {};
      for (var m in c) m !== "key" && (h[m] = c[m]);
    } else h = c;
    return (
      (c = h.ref),
      { $$typeof: s, type: r, key: f, ref: c !== void 0 ? c : null, props: h }
    );
  }
  return (ls.Fragment = a), (ls.jsx = l), (ls.jsxs = l), ls;
}
var Fd;
function jv() {
  return Fd || ((Fd = 1), (wo.exports = Cv())), wo.exports;
}
var S = jv(),
  So = { exports: {} },
  ce = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var em;
function Nv() {
  if (em) return ce;
  em = 1;
  var s = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    _ = Symbol.for("react.activity"),
    T = Symbol.iterator;
  function x(w) {
    return w === null || typeof w != "object"
      ? null
      : ((w = (T && w[T]) || w["@@iterator"]),
        typeof w == "function" ? w : null);
  }
  var j = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    L = Object.assign,
    q = {};
  function X(w, z, K) {
    (this.props = w),
      (this.context = z),
      (this.refs = q),
      (this.updater = K || j);
  }
  (X.prototype.isReactComponent = {}),
    (X.prototype.setState = function (w, z) {
      if (typeof w != "object" && typeof w != "function" && w != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, w, z, "setState");
    }),
    (X.prototype.forceUpdate = function (w) {
      this.updater.enqueueForceUpdate(this, w, "forceUpdate");
    });
  function Q() {}
  Q.prototype = X.prototype;
  function H(w, z, K) {
    (this.props = w),
      (this.context = z),
      (this.refs = q),
      (this.updater = K || j);
  }
  var ee = (H.prototype = new Q());
  (ee.constructor = H), L(ee, X.prototype), (ee.isPureReactComponent = !0);
  var Y = Array.isArray;
  function F() {}
  var B = { H: null, A: null, T: null, S: null },
    ve = Object.prototype.hasOwnProperty;
  function G(w, z, K) {
    var P = K.ref;
    return {
      $$typeof: s,
      type: w,
      key: z,
      ref: P !== void 0 ? P : null,
      props: K,
    };
  }
  function V(w, z) {
    return G(w.type, z, w.props);
  }
  function re(w) {
    return typeof w == "object" && w !== null && w.$$typeof === s;
  }
  function je(w) {
    var z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      w.replace(/[=:]/g, function (K) {
        return z[K];
      })
    );
  }
  var rt = /\/+/g;
  function Je(w, z) {
    return typeof w == "object" && w !== null && w.key != null
      ? je("" + w.key)
      : z.toString(36);
  }
  function Qe(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (
          (typeof w.status == "string"
            ? w.then(F, F)
            : ((w.status = "pending"),
              w.then(
                function (z) {
                  w.status === "pending" &&
                    ((w.status = "fulfilled"), (w.value = z));
                },
                function (z) {
                  w.status === "pending" &&
                    ((w.status = "rejected"), (w.reason = z));
                }
              )),
          w.status)
        ) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
        }
    }
    throw w;
  }
  function k(w, z, K, P, oe) {
    var de = typeof w;
    (de === "undefined" || de === "boolean") && (w = null);
    var _e = !1;
    if (w === null) _e = !0;
    else
      switch (de) {
        case "bigint":
        case "string":
        case "number":
          _e = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case s:
            case a:
              _e = !0;
              break;
            case y:
              return (_e = w._init), k(_e(w._payload), z, K, P, oe);
          }
      }
    if (_e)
      return (
        (oe = oe(w)),
        (_e = P === "" ? "." + Je(w, 0) : P),
        Y(oe)
          ? ((K = ""),
            _e != null && (K = _e.replace(rt, "$&/") + "/"),
            k(oe, z, K, "", function (di) {
              return di;
            }))
          : oe != null &&
            (re(oe) &&
              (oe = V(
                oe,
                K +
                  (oe.key == null || (w && w.key === oe.key)
                    ? ""
                    : ("" + oe.key).replace(rt, "$&/") + "/") +
                  _e
              )),
            z.push(oe)),
        1
      );
    _e = 0;
    var Ze = P === "" ? "." : P + ":";
    if (Y(w))
      for (var Be = 0; Be < w.length; Be++)
        (P = w[Be]), (de = Ze + Je(P, Be)), (_e += k(P, z, K, de, oe));
    else if (((Be = x(w)), typeof Be == "function"))
      for (w = Be.call(w), Be = 0; !(P = w.next()).done; )
        (P = P.value), (de = Ze + Je(P, Be++)), (_e += k(P, z, K, de, oe));
    else if (de === "object") {
      if (typeof w.then == "function") return k(Qe(w), z, K, P, oe);
      throw (
        ((z = String(w)),
        Error(
          "Objects are not valid as a React child (found: " +
            (z === "[object Object]"
              ? "object with keys {" + Object.keys(w).join(", ") + "}"
              : z) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return _e;
  }
  function $(w, z, K) {
    if (w == null) return w;
    var P = [],
      oe = 0;
    return (
      k(w, P, "", "", function (de) {
        return z.call(K, de, oe++);
      }),
      P
    );
  }
  function ne(w) {
    if (w._status === -1) {
      var z = w._result;
      (z = z()),
        z.then(
          function (K) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 1), (w._result = K));
          },
          function (K) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 2), (w._result = K));
          }
        ),
        w._status === -1 && ((w._status = 0), (w._result = z));
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var ue =
      typeof reportError == "function"
        ? reportError
        : function (w) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var z = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof w == "object" &&
                  w !== null &&
                  typeof w.message == "string"
                    ? String(w.message)
                    : String(w),
                error: w,
              });
              if (!window.dispatchEvent(z)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", w);
              return;
            }
            console.error(w);
          },
    J = {
      map: $,
      forEach: function (w, z, K) {
        $(
          w,
          function () {
            z.apply(this, arguments);
          },
          K
        );
      },
      count: function (w) {
        var z = 0;
        return (
          $(w, function () {
            z++;
          }),
          z
        );
      },
      toArray: function (w) {
        return (
          $(w, function (z) {
            return z;
          }) || []
        );
      },
      only: function (w) {
        if (!re(w))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return w;
      },
    };
  return (
    (ce.Activity = _),
    (ce.Children = J),
    (ce.Component = X),
    (ce.Fragment = l),
    (ce.Profiler = c),
    (ce.PureComponent = H),
    (ce.StrictMode = r),
    (ce.Suspense = v),
    (ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B),
    (ce.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (w) {
        return B.H.useMemoCache(w);
      },
    }),
    (ce.cache = function (w) {
      return function () {
        return w.apply(null, arguments);
      };
    }),
    (ce.cacheSignal = function () {
      return null;
    }),
    (ce.cloneElement = function (w, z, K) {
      if (w == null)
        throw Error(
          "The argument must be a React element, but you passed " + w + "."
        );
      var P = L({}, w.props),
        oe = w.key;
      if (z != null)
        for (de in (z.key !== void 0 && (oe = "" + z.key), z))
          !ve.call(z, de) ||
            de === "key" ||
            de === "__self" ||
            de === "__source" ||
            (de === "ref" && z.ref === void 0) ||
            (P[de] = z[de]);
      var de = arguments.length - 2;
      if (de === 1) P.children = K;
      else if (1 < de) {
        for (var _e = Array(de), Ze = 0; Ze < de; Ze++)
          _e[Ze] = arguments[Ze + 2];
        P.children = _e;
      }
      return G(w.type, oe, P);
    }),
    (ce.createContext = function (w) {
      return (
        (w = {
          $$typeof: f,
          _currentValue: w,
          _currentValue2: w,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (w.Provider = w),
        (w.Consumer = { $$typeof: h, _context: w }),
        w
      );
    }),
    (ce.createElement = function (w, z, K) {
      var P,
        oe = {},
        de = null;
      if (z != null)
        for (P in (z.key !== void 0 && (de = "" + z.key), z))
          ve.call(z, P) &&
            P !== "key" &&
            P !== "__self" &&
            P !== "__source" &&
            (oe[P] = z[P]);
      var _e = arguments.length - 2;
      if (_e === 1) oe.children = K;
      else if (1 < _e) {
        for (var Ze = Array(_e), Be = 0; Be < _e; Be++)
          Ze[Be] = arguments[Be + 2];
        oe.children = Ze;
      }
      if (w && w.defaultProps)
        for (P in ((_e = w.defaultProps), _e))
          oe[P] === void 0 && (oe[P] = _e[P]);
      return G(w, de, oe);
    }),
    (ce.createRef = function () {
      return { current: null };
    }),
    (ce.forwardRef = function (w) {
      return { $$typeof: m, render: w };
    }),
    (ce.isValidElement = re),
    (ce.lazy = function (w) {
      return { $$typeof: y, _payload: { _status: -1, _result: w }, _init: ne };
    }),
    (ce.memo = function (w, z) {
      return { $$typeof: g, type: w, compare: z === void 0 ? null : z };
    }),
    (ce.startTransition = function (w) {
      var z = B.T,
        K = {};
      B.T = K;
      try {
        var P = w(),
          oe = B.S;
        oe !== null && oe(K, P),
          typeof P == "object" &&
            P !== null &&
            typeof P.then == "function" &&
            P.then(F, ue);
      } catch (de) {
        ue(de);
      } finally {
        z !== null && K.types !== null && (z.types = K.types), (B.T = z);
      }
    }),
    (ce.unstable_useCacheRefresh = function () {
      return B.H.useCacheRefresh();
    }),
    (ce.use = function (w) {
      return B.H.use(w);
    }),
    (ce.useActionState = function (w, z, K) {
      return B.H.useActionState(w, z, K);
    }),
    (ce.useCallback = function (w, z) {
      return B.H.useCallback(w, z);
    }),
    (ce.useContext = function (w) {
      return B.H.useContext(w);
    }),
    (ce.useDebugValue = function () {}),
    (ce.useDeferredValue = function (w, z) {
      return B.H.useDeferredValue(w, z);
    }),
    (ce.useEffect = function (w, z) {
      return B.H.useEffect(w, z);
    }),
    (ce.useEffectEvent = function (w) {
      return B.H.useEffectEvent(w);
    }),
    (ce.useId = function () {
      return B.H.useId();
    }),
    (ce.useImperativeHandle = function (w, z, K) {
      return B.H.useImperativeHandle(w, z, K);
    }),
    (ce.useInsertionEffect = function (w, z) {
      return B.H.useInsertionEffect(w, z);
    }),
    (ce.useLayoutEffect = function (w, z) {
      return B.H.useLayoutEffect(w, z);
    }),
    (ce.useMemo = function (w, z) {
      return B.H.useMemo(w, z);
    }),
    (ce.useOptimistic = function (w, z) {
      return B.H.useOptimistic(w, z);
    }),
    (ce.useReducer = function (w, z, K) {
      return B.H.useReducer(w, z, K);
    }),
    (ce.useRef = function (w) {
      return B.H.useRef(w);
    }),
    (ce.useState = function (w) {
      return B.H.useState(w);
    }),
    (ce.useSyncExternalStore = function (w, z, K) {
      return B.H.useSyncExternalStore(w, z, K);
    }),
    (ce.useTransition = function () {
      return B.H.useTransition();
    }),
    (ce.version = "19.2.4"),
    ce
  );
}
var tm;
function Xo() {
  return tm || ((tm = 1), (So.exports = Nv())), So.exports;
}
var I = Xo();
const kv = Rv(I);
var Eo = { exports: {} },
  rs = {},
  To = { exports: {} },
  Ao = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nm;
function Uv() {
  return (
    nm ||
      ((nm = 1),
      (function (s) {
        function a(k, $) {
          var ne = k.length;
          k.push($);
          e: for (; 0 < ne; ) {
            var ue = (ne - 1) >>> 1,
              J = k[ue];
            if (0 < c(J, $)) (k[ue] = $), (k[ne] = J), (ne = ue);
            else break e;
          }
        }
        function l(k) {
          return k.length === 0 ? null : k[0];
        }
        function r(k) {
          if (k.length === 0) return null;
          var $ = k[0],
            ne = k.pop();
          if (ne !== $) {
            k[0] = ne;
            e: for (var ue = 0, J = k.length, w = J >>> 1; ue < w; ) {
              var z = 2 * (ue + 1) - 1,
                K = k[z],
                P = z + 1,
                oe = k[P];
              if (0 > c(K, ne))
                P < J && 0 > c(oe, K)
                  ? ((k[ue] = oe), (k[P] = ne), (ue = P))
                  : ((k[ue] = K), (k[z] = ne), (ue = z));
              else if (P < J && 0 > c(oe, ne))
                (k[ue] = oe), (k[P] = ne), (ue = P);
              else break e;
            }
          }
          return $;
        }
        function c(k, $) {
          var ne = k.sortIndex - $.sortIndex;
          return ne !== 0 ? ne : k.id - $.id;
        }
        if (
          ((s.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          s.unstable_now = function () {
            return h.now();
          };
        } else {
          var f = Date,
            m = f.now();
          s.unstable_now = function () {
            return f.now() - m;
          };
        }
        var v = [],
          g = [],
          y = 1,
          _ = null,
          T = 3,
          x = !1,
          j = !1,
          L = !1,
          q = !1,
          X = typeof setTimeout == "function" ? setTimeout : null,
          Q = typeof clearTimeout == "function" ? clearTimeout : null,
          H = typeof setImmediate < "u" ? setImmediate : null;
        function ee(k) {
          for (var $ = l(g); $ !== null; ) {
            if ($.callback === null) r(g);
            else if ($.startTime <= k)
              r(g), ($.sortIndex = $.expirationTime), a(v, $);
            else break;
            $ = l(g);
          }
        }
        function Y(k) {
          if (((L = !1), ee(k), !j))
            if (l(v) !== null) (j = !0), F || ((F = !0), je());
            else {
              var $ = l(g);
              $ !== null && Qe(Y, $.startTime - k);
            }
        }
        var F = !1,
          B = -1,
          ve = 5,
          G = -1;
        function V() {
          return q ? !0 : !(s.unstable_now() - G < ve);
        }
        function re() {
          if (((q = !1), F)) {
            var k = s.unstable_now();
            G = k;
            var $ = !0;
            try {
              e: {
                (j = !1), L && ((L = !1), Q(B), (B = -1)), (x = !0);
                var ne = T;
                try {
                  t: {
                    for (
                      ee(k), _ = l(v);
                      _ !== null && !(_.expirationTime > k && V());

                    ) {
                      var ue = _.callback;
                      if (typeof ue == "function") {
                        (_.callback = null), (T = _.priorityLevel);
                        var J = ue(_.expirationTime <= k);
                        if (((k = s.unstable_now()), typeof J == "function")) {
                          (_.callback = J), ee(k), ($ = !0);
                          break t;
                        }
                        _ === l(v) && r(v), ee(k);
                      } else r(v);
                      _ = l(v);
                    }
                    if (_ !== null) $ = !0;
                    else {
                      var w = l(g);
                      w !== null && Qe(Y, w.startTime - k), ($ = !1);
                    }
                  }
                  break e;
                } finally {
                  (_ = null), (T = ne), (x = !1);
                }
                $ = void 0;
              }
            } finally {
              $ ? je() : (F = !1);
            }
          }
        }
        var je;
        if (typeof H == "function")
          je = function () {
            H(re);
          };
        else if (typeof MessageChannel < "u") {
          var rt = new MessageChannel(),
            Je = rt.port2;
          (rt.port1.onmessage = re),
            (je = function () {
              Je.postMessage(null);
            });
        } else
          je = function () {
            X(re, 0);
          };
        function Qe(k, $) {
          B = X(function () {
            k(s.unstable_now());
          }, $);
        }
        (s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (s.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ve = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (s.unstable_next = function (k) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var $ = 3;
                break;
              default:
                $ = T;
            }
            var ne = T;
            T = $;
            try {
              return k();
            } finally {
              T = ne;
            }
          }),
          (s.unstable_requestPaint = function () {
            q = !0;
          }),
          (s.unstable_runWithPriority = function (k, $) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var ne = T;
            T = k;
            try {
              return $();
            } finally {
              T = ne;
            }
          }),
          (s.unstable_scheduleCallback = function (k, $, ne) {
            var ue = s.unstable_now();
            switch (
              (typeof ne == "object" && ne !== null
                ? ((ne = ne.delay),
                  (ne = typeof ne == "number" && 0 < ne ? ue + ne : ue))
                : (ne = ue),
              k)
            ) {
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
                J = 5e3;
            }
            return (
              (J = ne + J),
              (k = {
                id: y++,
                callback: $,
                priorityLevel: k,
                startTime: ne,
                expirationTime: J,
                sortIndex: -1,
              }),
              ne > ue
                ? ((k.sortIndex = ne),
                  a(g, k),
                  l(v) === null &&
                    k === l(g) &&
                    (L ? (Q(B), (B = -1)) : (L = !0), Qe(Y, ne - ue)))
                : ((k.sortIndex = J),
                  a(v, k),
                  j || x || ((j = !0), F || ((F = !0), je()))),
              k
            );
          }),
          (s.unstable_shouldYield = V),
          (s.unstable_wrapCallback = function (k) {
            var $ = T;
            return function () {
              var ne = T;
              T = $;
              try {
                return k.apply(this, arguments);
              } finally {
                T = ne;
              }
            };
          });
      })(Ao)),
    Ao
  );
}
var am;
function Dv() {
  return am || ((am = 1), (To.exports = Uv())), To.exports;
}
var xo = { exports: {} },
  lt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var im;
function zv() {
  if (im) return lt;
  im = 1;
  var s = Xo();
  function a(v) {
    var g = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        g += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return (
      "Minified React error #" +
      v +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l() {}
  var r = {
      d: {
        f: l,
        r: function () {
          throw Error(a(522));
        },
        D: l,
        C: l,
        L: l,
        m: l,
        X: l,
        S: l,
        M: l,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function h(v, g, y) {
    var _ =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: _ == null ? null : "" + _,
      children: v,
      containerInfo: g,
      implementation: y,
    };
  }
  var f = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(v, g) {
    if (v === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (lt.createPortal = function (v, g) {
      var y =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(a(299));
      return h(v, g, null, y);
    }),
    (lt.flushSync = function (v) {
      var g = f.T,
        y = r.p;
      try {
        if (((f.T = null), (r.p = 2), v)) return v();
      } finally {
        (f.T = g), (r.p = y), r.d.f();
      }
    }),
    (lt.preconnect = function (v, g) {
      typeof v == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        r.d.C(v, g));
    }),
    (lt.prefetchDNS = function (v) {
      typeof v == "string" && r.d.D(v);
    }),
    (lt.preinit = function (v, g) {
      if (typeof v == "string" && g && typeof g.as == "string") {
        var y = g.as,
          _ = m(y, g.crossOrigin),
          T = typeof g.integrity == "string" ? g.integrity : void 0,
          x = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        y === "style"
          ? r.d.S(v, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: _,
              integrity: T,
              fetchPriority: x,
            })
          : y === "script" &&
            r.d.X(v, {
              crossOrigin: _,
              integrity: T,
              fetchPriority: x,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (lt.preinitModule = function (v, g) {
      if (typeof v == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var y = m(g.as, g.crossOrigin);
            r.d.M(v, {
              crossOrigin: y,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && r.d.M(v);
    }),
    (lt.preload = function (v, g) {
      if (
        typeof v == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var y = g.as,
          _ = m(y, g.crossOrigin);
        r.d.L(v, y, {
          crossOrigin: _,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (lt.preloadModule = function (v, g) {
      if (typeof v == "string")
        if (g) {
          var y = m(g.as, g.crossOrigin);
          r.d.m(v, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: y,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else r.d.m(v);
    }),
    (lt.requestFormReset = function (v) {
      r.d.r(v);
    }),
    (lt.unstable_batchedUpdates = function (v, g) {
      return v(g);
    }),
    (lt.useFormState = function (v, g, y) {
      return f.H.useFormState(v, g, y);
    }),
    (lt.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (lt.version = "19.2.4"),
    lt
  );
}
var sm;
function qm() {
  if (sm) return xo.exports;
  sm = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (a) {
        console.error(a);
      }
  }
  return s(), (xo.exports = zv()), xo.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lm;
function Mv() {
  if (lm) return rs;
  lm = 1;
  var s = Dv(),
    a = Xo(),
    l = qm();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function h(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (h(e) !== e) throw Error(r(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = h(e)), t === null)) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var n = e, i = t; ; ) {
      var u = n.return;
      if (u === null) break;
      var o = u.alternate;
      if (o === null) {
        if (((i = u.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (u.child === o.child) {
        for (o = u.child; o; ) {
          if (o === n) return v(u), e;
          if (o === i) return v(u), t;
          o = o.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== i.return) (n = u), (i = o);
      else {
        for (var d = !1, p = u.child; p; ) {
          if (p === n) {
            (d = !0), (n = u), (i = o);
            break;
          }
          if (p === i) {
            (d = !0), (i = u), (n = o);
            break;
          }
          p = p.sibling;
        }
        if (!d) {
          for (p = o.child; p; ) {
            if (p === n) {
              (d = !0), (n = o), (i = u);
              break;
            }
            if (p === i) {
              (d = !0), (i = o), (n = u);
              break;
            }
            p = p.sibling;
          }
          if (!d) throw Error(r(189));
        }
      }
      if (n.alternate !== i) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? e : t;
  }
  function y(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = y(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var _ = Object.assign,
    T = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    j = Symbol.for("react.portal"),
    L = Symbol.for("react.fragment"),
    q = Symbol.for("react.strict_mode"),
    X = Symbol.for("react.profiler"),
    Q = Symbol.for("react.consumer"),
    H = Symbol.for("react.context"),
    ee = Symbol.for("react.forward_ref"),
    Y = Symbol.for("react.suspense"),
    F = Symbol.for("react.suspense_list"),
    B = Symbol.for("react.memo"),
    ve = Symbol.for("react.lazy"),
    G = Symbol.for("react.activity"),
    V = Symbol.for("react.memo_cache_sentinel"),
    re = Symbol.iterator;
  function je(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (re && e[re]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var rt = Symbol.for("react.client.reference");
  function Je(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === rt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case L:
        return "Fragment";
      case X:
        return "Profiler";
      case q:
        return "StrictMode";
      case Y:
        return "Suspense";
      case F:
        return "SuspenseList";
      case G:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case j:
          return "Portal";
        case H:
          return e.displayName || "Context";
        case Q:
          return (e._context.displayName || "Context") + ".Consumer";
        case ee:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case B:
          return (
            (t = e.displayName || null), t !== null ? t : Je(e.type) || "Memo"
          );
        case ve:
          (t = e._payload), (e = e._init);
          try {
            return Je(e(t));
          } catch {}
      }
    return null;
  }
  var Qe = Array.isArray,
    k = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    $ = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ne = { pending: !1, data: null, method: null, action: null },
    ue = [],
    J = -1;
  function w(e) {
    return { current: e };
  }
  function z(e) {
    0 > J || ((e.current = ue[J]), (ue[J] = null), J--);
  }
  function K(e, t) {
    J++, (ue[J] = e.current), (e.current = t);
  }
  var P = w(null),
    oe = w(null),
    de = w(null),
    _e = w(null);
  function Ze(e, t) {
    switch ((K(de, t), K(oe, e), K(P, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? _d(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = _d(t)), (e = wd(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    z(P), K(P, e);
  }
  function Be() {
    z(P), z(oe), z(de);
  }
  function di(e) {
    e.memoizedState !== null && K(_e, e);
    var t = P.current,
      n = wd(t, e.type);
    t !== n && (K(oe, e), K(P, n));
  }
  function Ss(e) {
    oe.current === e && (z(P), z(oe)),
      _e.current === e && (z(_e), (ns._currentValue = ne));
  }
  var nr, Io;
  function Xn(e) {
    if (nr === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        (nr = (t && t[1]) || ""),
          (Io =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      nr +
      e +
      Io
    );
  }
  var ar = !1;
  function ir(e, t) {
    if (!e || ar) return "";
    ar = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var M = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(M.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(M, []);
                } catch (N) {
                  var C = N;
                }
                Reflect.construct(e, [], M);
              } else {
                try {
                  M.call();
                } catch (N) {
                  C = N;
                }
                e.call(M.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                C = N;
              }
              (M = e()) &&
                typeof M.catch == "function" &&
                M.catch(function () {});
            }
          } catch (N) {
            if (N && C && typeof N.stack == "string") return [N.stack, C.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = i.DetermineComponentFrameRoot(),
        d = o[0],
        p = o[1];
      if (d && p) {
        var b = d.split(`
`),
          R = p.split(`
`);
        for (
          u = i = 0;
          i < b.length && !b[i].includes("DetermineComponentFrameRoot");

        )
          i++;
        for (; u < R.length && !R[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (i === b.length || u === R.length)
          for (
            i = b.length - 1, u = R.length - 1;
            1 <= i && 0 <= u && b[i] !== R[u];

          )
            u--;
        for (; 1 <= i && 0 <= u; i--, u--)
          if (b[i] !== R[u]) {
            if (i !== 1 || u !== 1)
              do
                if ((i--, u--, 0 > u || b[i] !== R[u])) {
                  var U =
                    `
` + b[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      U.includes("<anonymous>") &&
                      (U = U.replace("<anonymous>", e.displayName)),
                    U
                  );
                }
              while (1 <= i && 0 <= u);
            break;
          }
      }
    } finally {
      (ar = !1), (Error.prepareStackTrace = n);
    }
    return (n = e ? e.displayName || e.name : "") ? Xn(n) : "";
  }
  function ag(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Xn(e.type);
      case 16:
        return Xn("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Xn("Suspense Fallback")
          : Xn("Suspense");
      case 19:
        return Xn("SuspenseList");
      case 0:
      case 15:
        return ir(e.type, !1);
      case 11:
        return ir(e.type.render, !1);
      case 1:
        return ir(e.type, !0);
      case 31:
        return Xn("Activity");
      default:
        return "";
    }
  }
  function Zo(e) {
    try {
      var t = "",
        n = null;
      do (t += ag(e, n)), (n = e), (e = e.return);
      while (e);
      return t;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  var sr = Object.prototype.hasOwnProperty,
    lr = s.unstable_scheduleCallback,
    rr = s.unstable_cancelCallback,
    ig = s.unstable_shouldYield,
    sg = s.unstable_requestPaint,
    pt = s.unstable_now,
    lg = s.unstable_getCurrentPriorityLevel,
    Po = s.unstable_ImmediatePriority,
    Wo = s.unstable_UserBlockingPriority,
    Es = s.unstable_NormalPriority,
    rg = s.unstable_LowPriority,
    Fo = s.unstable_IdlePriority,
    ug = s.log,
    og = s.unstable_setDisableYieldValue,
    mi = null,
    yt = null;
  function bn(e) {
    if (
      (typeof ug == "function" && og(e),
      yt && typeof yt.setStrictMode == "function")
    )
      try {
        yt.setStrictMode(mi, e);
      } catch {}
  }
  var bt = Math.clz32 ? Math.clz32 : fg,
    cg = Math.log,
    hg = Math.LN2;
  function fg(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((cg(e) / hg) | 0)) | 0;
  }
  var Ts = 256,
    As = 262144,
    xs = 4194304;
  function Jn(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Os(e, t, n) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var u = 0,
      o = e.suspendedLanes,
      d = e.pingedLanes;
    e = e.warmLanes;
    var p = i & 134217727;
    return (
      p !== 0
        ? ((i = p & ~o),
          i !== 0
            ? (u = Jn(i))
            : ((d &= p),
              d !== 0
                ? (u = Jn(d))
                : n || ((n = p & ~e), n !== 0 && (u = Jn(n)))))
        : ((p = i & ~o),
          p !== 0
            ? (u = Jn(p))
            : d !== 0
            ? (u = Jn(d))
            : n || ((n = i & ~e), n !== 0 && (u = Jn(n)))),
      u === 0
        ? 0
        : t !== 0 &&
          t !== u &&
          (t & o) === 0 &&
          ((o = u & -u),
          (n = t & -t),
          o >= n || (o === 32 && (n & 4194048) !== 0))
        ? t
        : u
    );
  }
  function gi(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function dg(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ec() {
    var e = xs;
    return (xs <<= 1), (xs & 62914560) === 0 && (xs = 4194304), e;
  }
  function ur(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function vi(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function mg(e, t, n, i, u, o) {
    var d = e.pendingLanes;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0);
    var p = e.entanglements,
      b = e.expirationTimes,
      R = e.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var U = 31 - bt(n),
        M = 1 << U;
      (p[U] = 0), (b[U] = -1);
      var C = R[U];
      if (C !== null)
        for (R[U] = null, U = 0; U < C.length; U++) {
          var N = C[U];
          N !== null && (N.lane &= -536870913);
        }
      n &= ~M;
    }
    i !== 0 && tc(e, i, 0),
      o !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(d & ~t));
  }
  function tc(e, t, n) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var i = 31 - bt(t);
    (e.entangledLanes |= t),
      (e.entanglements[i] = e.entanglements[i] | 1073741824 | (n & 261930));
  }
  function nc(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var i = 31 - bt(n),
        u = 1 << i;
      (u & t) | (e[i] & t) && (e[i] |= t), (n &= ~u);
    }
  }
  function ac(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : or(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }
  function or(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function cr(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ic() {
    var e = $.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Kd(e.type));
  }
  function sc(e, t) {
    var n = $.p;
    try {
      return ($.p = e), t();
    } finally {
      $.p = n;
    }
  }
  var _n = Math.random().toString(36).slice(2),
    Fe = "__reactFiber$" + _n,
    ot = "__reactProps$" + _n,
    va = "__reactContainer$" + _n,
    hr = "__reactEvents$" + _n,
    gg = "__reactListeners$" + _n,
    vg = "__reactHandles$" + _n,
    lc = "__reactResources$" + _n,
    pi = "__reactMarker$" + _n;
  function fr(e) {
    delete e[Fe], delete e[ot], delete e[hr], delete e[gg], delete e[vg];
  }
  function pa(e) {
    var t = e[Fe];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[va] || n[Fe])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Rd(e); e !== null; ) {
            if ((n = e[Fe])) return n;
            e = Rd(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function ya(e) {
    if ((e = e[Fe] || e[va])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function yi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function ba(e) {
    var t = e[lc];
    return (
      t ||
        (t = e[lc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Pe(e) {
    e[pi] = !0;
  }
  var rc = new Set(),
    uc = {};
  function Qn(e, t) {
    _a(e, t), _a(e + "Capture", t);
  }
  function _a(e, t) {
    for (uc[e] = t, e = 0; e < t.length; e++) rc.add(t[e]);
  }
  var pg = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    oc = {},
    cc = {};
  function yg(e) {
    return sr.call(cc, e)
      ? !0
      : sr.call(oc, e)
      ? !1
      : pg.test(e)
      ? (cc[e] = !0)
      : ((oc[e] = !0), !1);
  }
  function Rs(e, t, n) {
    if (yg(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var i = t.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Cs(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function Pt(e, t, n, i) {
    if (i === null) e.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + i);
    }
  }
  function Ct(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function hc(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function bg(e, t, n) {
    var i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var u = i.get,
        o = i.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (d) {
            (n = "" + d), o.call(this, d);
          },
        }),
        Object.defineProperty(e, t, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (d) {
            n = "" + d;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function dr(e) {
    if (!e._valueTracker) {
      var t = hc(e) ? "checked" : "value";
      e._valueTracker = bg(e, t, "" + e[t]);
    }
  }
  function fc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      i = "";
    return (
      e && (i = hc(e) ? (e.checked ? "true" : "false") : e.value),
      (e = i),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function js(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var _g = /[\n"\\]/g;
  function jt(e) {
    return e.replace(_g, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function mr(e, t, n, i, u, o, d, p) {
    (e.name = ""),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (e.type = d)
        : e.removeAttribute("type"),
      t != null
        ? d === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Ct(t))
          : e.value !== "" + Ct(t) && (e.value = "" + Ct(t))
        : (d !== "submit" && d !== "reset") || e.removeAttribute("value"),
      t != null
        ? gr(e, d, Ct(t))
        : n != null
        ? gr(e, d, Ct(n))
        : i != null && e.removeAttribute("value"),
      u == null && o != null && (e.defaultChecked = !!o),
      u != null &&
        (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (e.name = "" + Ct(p))
        : e.removeAttribute("name");
  }
  function dc(e, t, n, i, u, o, d, p) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (e.type = o),
      t != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || t != null)) {
        dr(e);
        return;
      }
      (n = n != null ? "" + Ct(n) : ""),
        (t = t != null ? "" + Ct(t) : n),
        p || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (i = i ?? u),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (e.checked = p ? e.checked : !!i),
      (e.defaultChecked = !!i),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.name = d),
      dr(e);
  }
  function gr(e, t, n) {
    (t === "number" && js(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function wa(e, t, n, i) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < n.length; u++) t["$" + n[u]] = !0;
      for (n = 0; n < e.length; n++)
        (u = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== u && (e[n].selected = u),
          u && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Ct(n), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === n) {
          (e[u].selected = !0), i && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function mc(e, t, n) {
    if (
      t != null &&
      ((t = "" + Ct(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Ct(n) : "";
  }
  function gc(e, t, n, i) {
    if (t == null) {
      if (i != null) {
        if (n != null) throw Error(r(92));
        if (Qe(i)) {
          if (1 < i.length) throw Error(r(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), (t = n);
    }
    (n = Ct(t)),
      (e.defaultValue = n),
      (i = e.textContent),
      i === n && i !== "" && i !== null && (e.value = i),
      dr(e);
  }
  function Sa(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var wg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function vc(e, t, n) {
    var i = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? i
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : i
      ? e.setProperty(t, n)
      : typeof n != "number" || n === 0 || wg.has(t)
      ? t === "float"
        ? (e.cssFloat = n)
        : (e[t] = ("" + n).trim())
      : (e[t] = n + "px");
  }
  function pc(e, t, n) {
    if (t != null && typeof t != "object") throw Error(r(62));
    if (((e = e.style), n != null)) {
      for (var i in n)
        !n.hasOwnProperty(i) ||
          (t != null && t.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? e.setProperty(i, "")
            : i === "float"
            ? (e.cssFloat = "")
            : (e[i] = ""));
      for (var u in t)
        (i = t[u]), t.hasOwnProperty(u) && n[u] !== i && vc(e, u, i);
    } else for (var o in t) t.hasOwnProperty(o) && vc(e, o, t[o]);
  }
  function vr(e) {
    if (e.indexOf("-") === -1) return !1;
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
        return !0;
    }
  }
  var Sg = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Eg =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ns(e) {
    return Eg.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Wt() {}
  var pr = null;
  function yr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ea = null,
    Ta = null;
  function yc(e) {
    var t = ya(e);
    if (t && (e = t.stateNode)) {
      var n = e[ot] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (mr(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + jt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var i = n[t];
              if (i !== e && i.form === e.form) {
                var u = i[ot] || null;
                if (!u) throw Error(r(90));
                mr(
                  i,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              (i = n[t]), i.form === e.form && fc(i);
          }
          break e;
        case "textarea":
          mc(e, n.value, n.defaultValue);
          break e;
        case "select":
          (t = n.value), t != null && wa(e, !!n.multiple, t, !1);
      }
    }
  }
  var br = !1;
  function bc(e, t, n) {
    if (br) return e(t, n);
    br = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (
        ((br = !1),
        (Ea !== null || Ta !== null) &&
          (yl(), Ea && ((t = Ea), (e = Ta), (Ta = Ea = null), yc(t), e)))
      )
        for (t = 0; t < e.length; t++) yc(e[t]);
    }
  }
  function bi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = n[ot] || null;
    if (i === null) return null;
    n = i[t];
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
        (i = !i.disabled) ||
          ((e = e.type),
          (i = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !i);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(r(231, t, typeof n));
    return n;
  }
  var Ft = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    _r = !1;
  if (Ft)
    try {
      var _i = {};
      Object.defineProperty(_i, "passive", {
        get: function () {
          _r = !0;
        },
      }),
        window.addEventListener("test", _i, _i),
        window.removeEventListener("test", _i, _i);
    } catch {
      _r = !1;
    }
  var wn = null,
    wr = null,
    ks = null;
  function _c() {
    if (ks) return ks;
    var e,
      t = wr,
      n = t.length,
      i,
      u = "value" in wn ? wn.value : wn.textContent,
      o = u.length;
    for (e = 0; e < n && t[e] === u[e]; e++);
    var d = n - e;
    for (i = 1; i <= d && t[n - i] === u[o - i]; i++);
    return (ks = u.slice(e, 1 < i ? 1 - i : void 0));
  }
  function Us(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ds() {
    return !0;
  }
  function wc() {
    return !1;
  }
  function ct(e) {
    function t(n, i, u, o, d) {
      (this._reactName = n),
        (this._targetInst = u),
        (this.type = i),
        (this.nativeEvent = o),
        (this.target = d),
        (this.currentTarget = null);
      for (var p in e)
        e.hasOwnProperty(p) && ((n = e[p]), (this[p] = n ? n(o) : o[p]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Ds
          : wc),
        (this.isPropagationStopped = wc),
        this
      );
    }
    return (
      _(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ds));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ds));
        },
        persist: function () {},
        isPersistent: Ds,
      }),
      t
    );
  }
  var In = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    zs = ct(In),
    wi = _({}, In, { view: 0, detail: 0 }),
    Tg = ct(wi),
    Sr,
    Er,
    Si,
    Ms = _({}, wi, {
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
      getModifierState: Ar,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Si &&
              (Si && e.type === "mousemove"
                ? ((Sr = e.screenX - Si.screenX), (Er = e.screenY - Si.screenY))
                : (Er = Sr = 0),
              (Si = e)),
            Sr);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Er;
      },
    }),
    Sc = ct(Ms),
    Ag = _({}, Ms, { dataTransfer: 0 }),
    xg = ct(Ag),
    Og = _({}, wi, { relatedTarget: 0 }),
    Tr = ct(Og),
    Rg = _({}, In, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Cg = ct(Rg),
    jg = _({}, In, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ng = ct(jg),
    kg = _({}, In, { data: 0 }),
    Ec = ct(kg),
    Ug = {
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
      MozPrintableKey: "Unidentified",
    },
    Dg = {
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
      224: "Meta",
    },
    zg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Mg(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = zg[e])
      ? !!t[e]
      : !1;
  }
  function Ar() {
    return Mg;
  }
  var Lg = _({}, wi, {
      key: function (e) {
        if (e.key) {
          var t = Ug[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Us(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Dg[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ar,
      charCode: function (e) {
        return e.type === "keypress" ? Us(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Us(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Bg = ct(Lg),
    qg = _({}, Ms, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Tc = ct(qg),
    Hg = _({}, wi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ar,
    }),
    $g = ct(Hg),
    Gg = _({}, In, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Vg = ct(Gg),
    Kg = _({}, Ms, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Yg = ct(Kg),
    Xg = _({}, In, { newState: 0, oldState: 0 }),
    Jg = ct(Xg),
    Qg = [9, 13, 27, 32],
    xr = Ft && "CompositionEvent" in window,
    Ei = null;
  Ft && "documentMode" in document && (Ei = document.documentMode);
  var Ig = Ft && "TextEvent" in window && !Ei,
    Ac = Ft && (!xr || (Ei && 8 < Ei && 11 >= Ei)),
    xc = " ",
    Oc = !1;
  function Rc(e, t) {
    switch (e) {
      case "keyup":
        return Qg.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Cc(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Aa = !1;
  function Zg(e, t) {
    switch (e) {
      case "compositionend":
        return Cc(t);
      case "keypress":
        return t.which !== 32 ? null : ((Oc = !0), xc);
      case "textInput":
        return (e = t.data), e === xc && Oc ? null : e;
      default:
        return null;
    }
  }
  function Pg(e, t) {
    if (Aa)
      return e === "compositionend" || (!xr && Rc(e, t))
        ? ((e = _c()), (ks = wr = wn = null), (Aa = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ac && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Wg = {
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
    week: !0,
  };
  function jc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Wg[e.type] : t === "textarea";
  }
  function Nc(e, t, n, i) {
    Ea ? (Ta ? Ta.push(i) : (Ta = [i])) : (Ea = i),
      (t = Al(t, "onChange")),
      0 < t.length &&
        ((n = new zs("onChange", "change", null, n, i)),
        e.push({ event: n, listeners: t }));
  }
  var Ti = null,
    Ai = null;
  function Fg(e) {
    md(e, 0);
  }
  function Ls(e) {
    var t = yi(e);
    if (fc(t)) return e;
  }
  function kc(e, t) {
    if (e === "change") return t;
  }
  var Uc = !1;
  if (Ft) {
    var Or;
    if (Ft) {
      var Rr = "oninput" in document;
      if (!Rr) {
        var Dc = document.createElement("div");
        Dc.setAttribute("oninput", "return;"),
          (Rr = typeof Dc.oninput == "function");
      }
      Or = Rr;
    } else Or = !1;
    Uc = Or && (!document.documentMode || 9 < document.documentMode);
  }
  function zc() {
    Ti && (Ti.detachEvent("onpropertychange", Mc), (Ai = Ti = null));
  }
  function Mc(e) {
    if (e.propertyName === "value" && Ls(Ai)) {
      var t = [];
      Nc(t, Ai, e, yr(e)), bc(Fg, t);
    }
  }
  function e0(e, t, n) {
    e === "focusin"
      ? (zc(), (Ti = t), (Ai = n), Ti.attachEvent("onpropertychange", Mc))
      : e === "focusout" && zc();
  }
  function t0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ls(Ai);
  }
  function n0(e, t) {
    if (e === "click") return Ls(t);
  }
  function a0(e, t) {
    if (e === "input" || e === "change") return Ls(t);
  }
  function i0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var _t = typeof Object.is == "function" ? Object.is : i0;
  function xi(e, t) {
    if (_t(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var u = n[i];
      if (!sr.call(t, u) || !_t(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Lc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Bc(e, t) {
    var n = Lc(e);
    e = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = e + n.textContent.length), e <= t && i >= t))
          return { node: n, offset: t - e };
        e = i;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Lc(n);
    }
  }
  function qc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? qc(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Hc(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = js(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = js(e.document);
    }
    return t;
  }
  function Cr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var s0 = Ft && "documentMode" in document && 11 >= document.documentMode,
    xa = null,
    jr = null,
    Oi = null,
    Nr = !1;
  function $c(e, t, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Nr ||
      xa == null ||
      xa !== js(i) ||
      ((i = xa),
      "selectionStart" in i && Cr(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Oi && xi(Oi, i)) ||
        ((Oi = i),
        (i = Al(jr, "onSelect")),
        0 < i.length &&
          ((t = new zs("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: i }),
          (t.target = xa))));
  }
  function Zn(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Oa = {
      animationend: Zn("Animation", "AnimationEnd"),
      animationiteration: Zn("Animation", "AnimationIteration"),
      animationstart: Zn("Animation", "AnimationStart"),
      transitionrun: Zn("Transition", "TransitionRun"),
      transitionstart: Zn("Transition", "TransitionStart"),
      transitioncancel: Zn("Transition", "TransitionCancel"),
      transitionend: Zn("Transition", "TransitionEnd"),
    },
    kr = {},
    Gc = {};
  Ft &&
    ((Gc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Oa.animationend.animation,
      delete Oa.animationiteration.animation,
      delete Oa.animationstart.animation),
    "TransitionEvent" in window || delete Oa.transitionend.transition);
  function Pn(e) {
    if (kr[e]) return kr[e];
    if (!Oa[e]) return e;
    var t = Oa[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Gc) return (kr[e] = t[n]);
    return e;
  }
  var Vc = Pn("animationend"),
    Kc = Pn("animationiteration"),
    Yc = Pn("animationstart"),
    l0 = Pn("transitionrun"),
    r0 = Pn("transitionstart"),
    u0 = Pn("transitioncancel"),
    Xc = Pn("transitionend"),
    Jc = new Map(),
    Ur =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Ur.push("scrollEnd");
  function qt(e, t) {
    Jc.set(e, t), Qn(t, [e]);
  }
  var Bs =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Nt = [],
    Ra = 0,
    Dr = 0;
  function qs() {
    for (var e = Ra, t = (Dr = Ra = 0); t < e; ) {
      var n = Nt[t];
      Nt[t++] = null;
      var i = Nt[t];
      Nt[t++] = null;
      var u = Nt[t];
      Nt[t++] = null;
      var o = Nt[t];
      if (((Nt[t++] = null), i !== null && u !== null)) {
        var d = i.pending;
        d === null ? (u.next = u) : ((u.next = d.next), (d.next = u)),
          (i.pending = u);
      }
      o !== 0 && Qc(n, u, o);
    }
  }
  function Hs(e, t, n, i) {
    (Nt[Ra++] = e),
      (Nt[Ra++] = t),
      (Nt[Ra++] = n),
      (Nt[Ra++] = i),
      (Dr |= i),
      (e.lanes |= i),
      (e = e.alternate),
      e !== null && (e.lanes |= i);
  }
  function zr(e, t, n, i) {
    return Hs(e, t, n, i), $s(e);
  }
  function Wn(e, t) {
    return Hs(e, null, null, t), $s(e);
  }
  function Qc(e, t, n) {
    e.lanes |= n;
    var i = e.alternate;
    i !== null && (i.lanes |= n);
    for (var u = !1, o = e.return; o !== null; )
      (o.childLanes |= n),
        (i = o.alternate),
        i !== null && (i.childLanes |= n),
        o.tag === 22 &&
          ((e = o.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = o),
        (o = o.return);
    return e.tag === 3
      ? ((o = e.stateNode),
        u &&
          t !== null &&
          ((u = 31 - bt(n)),
          (e = o.hiddenUpdates),
          (i = e[u]),
          i === null ? (e[u] = [t]) : i.push(t),
          (t.lane = n | 536870912)),
        o)
      : null;
  }
  function $s(e) {
    if (50 < Ii) throw ((Ii = 0), (Ku = null), Error(r(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ca = {};
  function o0(e, t, n, i) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function wt(e, t, n, i) {
    return new o0(e, t, n, i);
  }
  function Mr(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function en(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = wt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function Ic(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Gs(e, t, n, i, u, o) {
    var d = 0;
    if (((i = e), typeof e == "function")) Mr(e) && (d = 1);
    else if (typeof e == "string")
      d = mv(e, n, P.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case G:
          return (e = wt(31, n, t, u)), (e.elementType = G), (e.lanes = o), e;
        case L:
          return Fn(n.children, u, o, t);
        case q:
          (d = 8), (u |= 24);
          break;
        case X:
          return (
            (e = wt(12, n, t, u | 2)), (e.elementType = X), (e.lanes = o), e
          );
        case Y:
          return (e = wt(13, n, t, u)), (e.elementType = Y), (e.lanes = o), e;
        case F:
          return (e = wt(19, n, t, u)), (e.elementType = F), (e.lanes = o), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case H:
                d = 10;
                break e;
              case Q:
                d = 9;
                break e;
              case ee:
                d = 11;
                break e;
              case B:
                d = 14;
                break e;
              case ve:
                (d = 16), (i = null);
                break e;
            }
          (d = 29),
            (n = Error(r(130, e === null ? "null" : typeof e, ""))),
            (i = null);
      }
    return (
      (t = wt(d, n, t, u)), (t.elementType = e), (t.type = i), (t.lanes = o), t
    );
  }
  function Fn(e, t, n, i) {
    return (e = wt(7, e, i, t)), (e.lanes = n), e;
  }
  function Lr(e, t, n) {
    return (e = wt(6, e, null, t)), (e.lanes = n), e;
  }
  function Zc(e) {
    var t = wt(18, null, null, 0);
    return (t.stateNode = e), t;
  }
  function Br(e, t, n) {
    return (
      (t = wt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Pc = new WeakMap();
  function kt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Pc.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: Zo(t) }), Pc.set(e, t), t);
    }
    return { value: e, source: t, stack: Zo(t) };
  }
  var ja = [],
    Na = 0,
    Vs = null,
    Ri = 0,
    Ut = [],
    Dt = 0,
    Sn = null,
    Kt = 1,
    Yt = "";
  function tn(e, t) {
    (ja[Na++] = Ri), (ja[Na++] = Vs), (Vs = e), (Ri = t);
  }
  function Wc(e, t, n) {
    (Ut[Dt++] = Kt), (Ut[Dt++] = Yt), (Ut[Dt++] = Sn), (Sn = e);
    var i = Kt;
    e = Yt;
    var u = 32 - bt(i) - 1;
    (i &= ~(1 << u)), (n += 1);
    var o = 32 - bt(t) + u;
    if (30 < o) {
      var d = u - (u % 5);
      (o = (i & ((1 << d) - 1)).toString(32)),
        (i >>= d),
        (u -= d),
        (Kt = (1 << (32 - bt(t) + u)) | (n << u) | i),
        (Yt = o + e);
    } else (Kt = (1 << o) | (n << u) | i), (Yt = e);
  }
  function qr(e) {
    e.return !== null && (tn(e, 1), Wc(e, 1, 0));
  }
  function Hr(e) {
    for (; e === Vs; )
      (Vs = ja[--Na]), (ja[Na] = null), (Ri = ja[--Na]), (ja[Na] = null);
    for (; e === Sn; )
      (Sn = Ut[--Dt]),
        (Ut[Dt] = null),
        (Yt = Ut[--Dt]),
        (Ut[Dt] = null),
        (Kt = Ut[--Dt]),
        (Ut[Dt] = null);
  }
  function Fc(e, t) {
    (Ut[Dt++] = Kt),
      (Ut[Dt++] = Yt),
      (Ut[Dt++] = Sn),
      (Kt = t.id),
      (Yt = t.overflow),
      (Sn = e);
  }
  var et = null,
    ke = null,
    be = !1,
    En = null,
    zt = !1,
    $r = Error(r(519));
  function Tn(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Ci(kt(t, e)), $r);
  }
  function eh(e) {
    var t = e.stateNode,
      n = e.type,
      i = e.memoizedProps;
    switch (((t[Fe] = e), (t[ot] = i), n)) {
      case "dialog":
        ge("cancel", t), ge("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ge("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Pi.length; n++) ge(Pi[n], t);
        break;
      case "source":
        ge("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ge("error", t), ge("load", t);
        break;
      case "details":
        ge("toggle", t);
        break;
      case "input":
        ge("invalid", t),
          dc(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
        break;
      case "select":
        ge("invalid", t);
        break;
      case "textarea":
        ge("invalid", t), gc(t, i.value, i.defaultValue, i.children);
    }
    (n = i.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      i.suppressHydrationWarning === !0 ||
      yd(t.textContent, n)
        ? (i.popover != null && (ge("beforetoggle", t), ge("toggle", t)),
          i.onScroll != null && ge("scroll", t),
          i.onScrollEnd != null && ge("scrollend", t),
          i.onClick != null && (t.onclick = Wt),
          (t = !0))
        : (t = !1),
      t || Tn(e, !0);
  }
  function th(e) {
    for (et = e.return; et; )
      switch (et.tag) {
        case 5:
        case 31:
        case 13:
          zt = !1;
          return;
        case 27:
        case 3:
          zt = !0;
          return;
        default:
          et = et.return;
      }
  }
  function ka(e) {
    if (e !== et) return !1;
    if (!be) return th(e), (be = !0), !1;
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || so(e.type, e.memoizedProps))),
        (n = !n)),
      n && ke && Tn(e),
      th(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      ke = Od(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      ke = Od(e);
    } else
      t === 27
        ? ((t = ke), Bn(e.type) ? ((e = co), (co = null), (ke = e)) : (ke = t))
        : (ke = et ? Lt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function ea() {
    (ke = et = null), (be = !1);
  }
  function Gr() {
    var e = En;
    return (
      e !== null &&
        (mt === null ? (mt = e) : mt.push.apply(mt, e), (En = null)),
      e
    );
  }
  function Ci(e) {
    En === null ? (En = [e]) : En.push(e);
  }
  var Vr = w(null),
    ta = null,
    nn = null;
  function An(e, t, n) {
    K(Vr, t._currentValue), (t._currentValue = n);
  }
  function an(e) {
    (e._currentValue = Vr.current), z(Vr);
  }
  function Kr(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Yr(e, t, n, i) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var o = u.dependencies;
      if (o !== null) {
        var d = u.child;
        o = o.firstContext;
        e: for (; o !== null; ) {
          var p = o;
          o = u;
          for (var b = 0; b < t.length; b++)
            if (p.context === t[b]) {
              (o.lanes |= n),
                (p = o.alternate),
                p !== null && (p.lanes |= n),
                Kr(o.return, n, e),
                i || (d = null);
              break e;
            }
          o = p.next;
        }
      } else if (u.tag === 18) {
        if (((d = u.return), d === null)) throw Error(r(341));
        (d.lanes |= n),
          (o = d.alternate),
          o !== null && (o.lanes |= n),
          Kr(d, n, e),
          (d = null);
      } else d = u.child;
      if (d !== null) d.return = u;
      else
        for (d = u; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (((u = d.sibling), u !== null)) {
            (u.return = d.return), (d = u);
            break;
          }
          d = d.return;
        }
      u = d;
    }
  }
  function Ua(e, t, n, i) {
    e = null;
    for (var u = t, o = !1; u !== null; ) {
      if (!o) {
        if ((u.flags & 524288) !== 0) o = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var d = u.alternate;
        if (d === null) throw Error(r(387));
        if (((d = d.memoizedProps), d !== null)) {
          var p = u.type;
          _t(u.pendingProps.value, d.value) ||
            (e !== null ? e.push(p) : (e = [p]));
        }
      } else if (u === _e.current) {
        if (((d = u.alternate), d === null)) throw Error(r(387));
        d.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(ns) : (e = [ns]));
      }
      u = u.return;
    }
    e !== null && Yr(t, e, n, i), (t.flags |= 262144);
  }
  function Ks(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!_t(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function na(e) {
    (ta = e),
      (nn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function tt(e) {
    return nh(ta, e);
  }
  function Ys(e, t) {
    return ta === null && na(e), nh(e, t);
  }
  function nh(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), nn === null)) {
      if (e === null) throw Error(r(308));
      (nn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else nn = nn.next = t;
    return n;
  }
  var c0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, i) {
                  e.push(i);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                });
            };
          },
    h0 = s.unstable_scheduleCallback,
    f0 = s.unstable_NormalPriority,
    $e = {
      $$typeof: H,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Xr() {
    return { controller: new c0(), data: new Map(), refCount: 0 };
  }
  function ji(e) {
    e.refCount--,
      e.refCount === 0 &&
        h0(f0, function () {
          e.controller.abort();
        });
  }
  var Ni = null,
    Jr = 0,
    Da = 0,
    za = null;
  function d0(e, t) {
    if (Ni === null) {
      var n = (Ni = []);
      (Jr = 0),
        (Da = Zu()),
        (za = {
          status: "pending",
          value: void 0,
          then: function (i) {
            n.push(i);
          },
        });
    }
    return Jr++, t.then(ah, ah), t;
  }
  function ah() {
    if (--Jr === 0 && Ni !== null) {
      za !== null && (za.status = "fulfilled");
      var e = Ni;
      (Ni = null), (Da = 0), (za = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function m0(e, t) {
    var n = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          n.push(u);
        },
      };
    return (
      e.then(
        function () {
          (i.status = "fulfilled"), (i.value = t);
          for (var u = 0; u < n.length; u++) (0, n[u])(t);
        },
        function (u) {
          for (i.status = "rejected", i.reason = u, u = 0; u < n.length; u++)
            (0, n[u])(void 0);
        }
      ),
      i
    );
  }
  var ih = k.S;
  k.S = function (e, t) {
    (Gf = pt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        d0(e, t),
      ih !== null && ih(e, t);
  };
  var aa = w(null);
  function Qr() {
    var e = aa.current;
    return e !== null ? e : Ce.pooledCache;
  }
  function Xs(e, t) {
    t === null ? K(aa, aa.current) : K(aa, t.pool);
  }
  function sh() {
    var e = Qr();
    return e === null ? null : { parent: $e._currentValue, pool: e };
  }
  var Ma = Error(r(460)),
    Ir = Error(r(474)),
    Js = Error(r(542)),
    Qs = { then: function () {} };
  function lh(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function rh(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(Wt, Wt), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), oh(e), e);
      default:
        if (typeof t.status == "string") t.then(Wt, Wt);
        else {
          if (((e = Ce), e !== null && 100 < e.shellSuspendCounter))
            throw Error(r(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (i) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "fulfilled"), (u.value = i);
                }
              },
              function (i) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "rejected"), (u.reason = i);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), oh(e), e);
        }
        throw ((sa = t), Ma);
    }
  }
  function ia(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((sa = n), Ma)
        : n;
    }
  }
  var sa = null;
  function uh() {
    if (sa === null) throw Error(r(459));
    var e = sa;
    return (sa = null), e;
  }
  function oh(e) {
    if (e === Ma || e === Js) throw Error(r(483));
  }
  var La = null,
    ki = 0;
  function Is(e) {
    var t = ki;
    return (ki += 1), La === null && (La = []), rh(La, e, t);
  }
  function Ui(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Zs(e, t) {
    throw t.$$typeof === T
      ? Error(r(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function ch(e) {
    function t(A, E) {
      if (e) {
        var O = A.deletions;
        O === null ? ((A.deletions = [E]), (A.flags |= 16)) : O.push(E);
      }
    }
    function n(A, E) {
      if (!e) return null;
      for (; E !== null; ) t(A, E), (E = E.sibling);
      return null;
    }
    function i(A) {
      for (var E = new Map(); A !== null; )
        A.key !== null ? E.set(A.key, A) : E.set(A.index, A), (A = A.sibling);
      return E;
    }
    function u(A, E) {
      return (A = en(A, E)), (A.index = 0), (A.sibling = null), A;
    }
    function o(A, E, O) {
      return (
        (A.index = O),
        e
          ? ((O = A.alternate),
            O !== null
              ? ((O = O.index), O < E ? ((A.flags |= 67108866), E) : O)
              : ((A.flags |= 67108866), E))
          : ((A.flags |= 1048576), E)
      );
    }
    function d(A) {
      return e && A.alternate === null && (A.flags |= 67108866), A;
    }
    function p(A, E, O, D) {
      return E === null || E.tag !== 6
        ? ((E = Lr(O, A.mode, D)), (E.return = A), E)
        : ((E = u(E, O)), (E.return = A), E);
    }
    function b(A, E, O, D) {
      var ae = O.type;
      return ae === L
        ? U(A, E, O.props.children, D, O.key)
        : E !== null &&
          (E.elementType === ae ||
            (typeof ae == "object" &&
              ae !== null &&
              ae.$$typeof === ve &&
              ia(ae) === E.type))
        ? ((E = u(E, O.props)), Ui(E, O), (E.return = A), E)
        : ((E = Gs(O.type, O.key, O.props, null, A.mode, D)),
          Ui(E, O),
          (E.return = A),
          E);
    }
    function R(A, E, O, D) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== O.containerInfo ||
        E.stateNode.implementation !== O.implementation
        ? ((E = Br(O, A.mode, D)), (E.return = A), E)
        : ((E = u(E, O.children || [])), (E.return = A), E);
    }
    function U(A, E, O, D, ae) {
      return E === null || E.tag !== 7
        ? ((E = Fn(O, A.mode, D, ae)), (E.return = A), E)
        : ((E = u(E, O)), (E.return = A), E);
    }
    function M(A, E, O) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return (E = Lr("" + E, A.mode, O)), (E.return = A), E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case x:
            return (
              (O = Gs(E.type, E.key, E.props, null, A.mode, O)),
              Ui(O, E),
              (O.return = A),
              O
            );
          case j:
            return (E = Br(E, A.mode, O)), (E.return = A), E;
          case ve:
            return (E = ia(E)), M(A, E, O);
        }
        if (Qe(E) || je(E))
          return (E = Fn(E, A.mode, O, null)), (E.return = A), E;
        if (typeof E.then == "function") return M(A, Is(E), O);
        if (E.$$typeof === H) return M(A, Ys(A, E), O);
        Zs(A, E);
      }
      return null;
    }
    function C(A, E, O, D) {
      var ae = E !== null ? E.key : null;
      if (
        (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
      )
        return ae !== null ? null : p(A, E, "" + O, D);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case x:
            return O.key === ae ? b(A, E, O, D) : null;
          case j:
            return O.key === ae ? R(A, E, O, D) : null;
          case ve:
            return (O = ia(O)), C(A, E, O, D);
        }
        if (Qe(O) || je(O)) return ae !== null ? null : U(A, E, O, D, null);
        if (typeof O.then == "function") return C(A, E, Is(O), D);
        if (O.$$typeof === H) return C(A, E, Ys(A, O), D);
        Zs(A, O);
      }
      return null;
    }
    function N(A, E, O, D, ae) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return (A = A.get(O) || null), p(E, A, "" + D, ae);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case x:
            return (
              (A = A.get(D.key === null ? O : D.key) || null), b(E, A, D, ae)
            );
          case j:
            return (
              (A = A.get(D.key === null ? O : D.key) || null), R(E, A, D, ae)
            );
          case ve:
            return (D = ia(D)), N(A, E, O, D, ae);
        }
        if (Qe(D) || je(D)) return (A = A.get(O) || null), U(E, A, D, ae, null);
        if (typeof D.then == "function") return N(A, E, O, Is(D), ae);
        if (D.$$typeof === H) return N(A, E, O, Ys(E, D), ae);
        Zs(E, D);
      }
      return null;
    }
    function Z(A, E, O, D) {
      for (
        var ae = null, we = null, te = E, fe = (E = 0), ye = null;
        te !== null && fe < O.length;
        fe++
      ) {
        te.index > fe ? ((ye = te), (te = null)) : (ye = te.sibling);
        var Se = C(A, te, O[fe], D);
        if (Se === null) {
          te === null && (te = ye);
          break;
        }
        e && te && Se.alternate === null && t(A, te),
          (E = o(Se, E, fe)),
          we === null ? (ae = Se) : (we.sibling = Se),
          (we = Se),
          (te = ye);
      }
      if (fe === O.length) return n(A, te), be && tn(A, fe), ae;
      if (te === null) {
        for (; fe < O.length; fe++)
          (te = M(A, O[fe], D)),
            te !== null &&
              ((E = o(te, E, fe)),
              we === null ? (ae = te) : (we.sibling = te),
              (we = te));
        return be && tn(A, fe), ae;
      }
      for (te = i(te); fe < O.length; fe++)
        (ye = N(te, A, fe, O[fe], D)),
          ye !== null &&
            (e &&
              ye.alternate !== null &&
              te.delete(ye.key === null ? fe : ye.key),
            (E = o(ye, E, fe)),
            we === null ? (ae = ye) : (we.sibling = ye),
            (we = ye));
      return (
        e &&
          te.forEach(function (Vn) {
            return t(A, Vn);
          }),
        be && tn(A, fe),
        ae
      );
    }
    function le(A, E, O, D) {
      if (O == null) throw Error(r(151));
      for (
        var ae = null,
          we = null,
          te = E,
          fe = (E = 0),
          ye = null,
          Se = O.next();
        te !== null && !Se.done;
        fe++, Se = O.next()
      ) {
        te.index > fe ? ((ye = te), (te = null)) : (ye = te.sibling);
        var Vn = C(A, te, Se.value, D);
        if (Vn === null) {
          te === null && (te = ye);
          break;
        }
        e && te && Vn.alternate === null && t(A, te),
          (E = o(Vn, E, fe)),
          we === null ? (ae = Vn) : (we.sibling = Vn),
          (we = Vn),
          (te = ye);
      }
      if (Se.done) return n(A, te), be && tn(A, fe), ae;
      if (te === null) {
        for (; !Se.done; fe++, Se = O.next())
          (Se = M(A, Se.value, D)),
            Se !== null &&
              ((E = o(Se, E, fe)),
              we === null ? (ae = Se) : (we.sibling = Se),
              (we = Se));
        return be && tn(A, fe), ae;
      }
      for (te = i(te); !Se.done; fe++, Se = O.next())
        (Se = N(te, A, fe, Se.value, D)),
          Se !== null &&
            (e &&
              Se.alternate !== null &&
              te.delete(Se.key === null ? fe : Se.key),
            (E = o(Se, E, fe)),
            we === null ? (ae = Se) : (we.sibling = Se),
            (we = Se));
      return (
        e &&
          te.forEach(function (Av) {
            return t(A, Av);
          }),
        be && tn(A, fe),
        ae
      );
    }
    function Re(A, E, O, D) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === L &&
          O.key === null &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case x:
            e: {
              for (var ae = O.key; E !== null; ) {
                if (E.key === ae) {
                  if (((ae = O.type), ae === L)) {
                    if (E.tag === 7) {
                      n(A, E.sibling),
                        (D = u(E, O.props.children)),
                        (D.return = A),
                        (A = D);
                      break e;
                    }
                  } else if (
                    E.elementType === ae ||
                    (typeof ae == "object" &&
                      ae !== null &&
                      ae.$$typeof === ve &&
                      ia(ae) === E.type)
                  ) {
                    n(A, E.sibling),
                      (D = u(E, O.props)),
                      Ui(D, O),
                      (D.return = A),
                      (A = D);
                    break e;
                  }
                  n(A, E);
                  break;
                } else t(A, E);
                E = E.sibling;
              }
              O.type === L
                ? ((D = Fn(O.props.children, A.mode, D, O.key)),
                  (D.return = A),
                  (A = D))
                : ((D = Gs(O.type, O.key, O.props, null, A.mode, D)),
                  Ui(D, O),
                  (D.return = A),
                  (A = D));
            }
            return d(A);
          case j:
            e: {
              for (ae = O.key; E !== null; ) {
                if (E.key === ae)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === O.containerInfo &&
                    E.stateNode.implementation === O.implementation
                  ) {
                    n(A, E.sibling),
                      (D = u(E, O.children || [])),
                      (D.return = A),
                      (A = D);
                    break e;
                  } else {
                    n(A, E);
                    break;
                  }
                else t(A, E);
                E = E.sibling;
              }
              (D = Br(O, A.mode, D)), (D.return = A), (A = D);
            }
            return d(A);
          case ve:
            return (O = ia(O)), Re(A, E, O, D);
        }
        if (Qe(O)) return Z(A, E, O, D);
        if (je(O)) {
          if (((ae = je(O)), typeof ae != "function")) throw Error(r(150));
          return (O = ae.call(O)), le(A, E, O, D);
        }
        if (typeof O.then == "function") return Re(A, E, Is(O), D);
        if (O.$$typeof === H) return Re(A, E, Ys(A, O), D);
        Zs(A, O);
      }
      return (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
        ? ((O = "" + O),
          E !== null && E.tag === 6
            ? (n(A, E.sibling), (D = u(E, O)), (D.return = A), (A = D))
            : (n(A, E), (D = Lr(O, A.mode, D)), (D.return = A), (A = D)),
          d(A))
        : n(A, E);
    }
    return function (A, E, O, D) {
      try {
        ki = 0;
        var ae = Re(A, E, O, D);
        return (La = null), ae;
      } catch (te) {
        if (te === Ma || te === Js) throw te;
        var we = wt(29, te, null, A.mode);
        return (we.lanes = D), (we.return = A), we;
      } finally {
      }
    };
  }
  var la = ch(!0),
    hh = ch(!1),
    xn = !1;
  function Zr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Pr(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function On(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Rn(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (Ee & 2) !== 0)) {
      var u = i.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (i.pending = t),
        (t = $s(e)),
        Qc(e, null, n),
        t
      );
    }
    return Hs(e, i, t, n), $s(e);
  }
  function Di(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var i = t.lanes;
      (i &= e.pendingLanes), (n |= i), (t.lanes = n), nc(e, n);
    }
  }
  function Wr(e, t) {
    var n = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var u = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          o === null ? (u = o = d) : (o = o.next = d), (n = n.next);
        } while (n !== null);
        o === null ? (u = o = t) : (o = o.next = t);
      } else u = o = t;
      (n = {
        baseState: i.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: o,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  var Fr = !1;
  function zi() {
    if (Fr) {
      var e = za;
      if (e !== null) throw e;
    }
  }
  function Mi(e, t, n, i) {
    Fr = !1;
    var u = e.updateQueue;
    xn = !1;
    var o = u.firstBaseUpdate,
      d = u.lastBaseUpdate,
      p = u.shared.pending;
    if (p !== null) {
      u.shared.pending = null;
      var b = p,
        R = b.next;
      (b.next = null), d === null ? (o = R) : (d.next = R), (d = b);
      var U = e.alternate;
      U !== null &&
        ((U = U.updateQueue),
        (p = U.lastBaseUpdate),
        p !== d &&
          (p === null ? (U.firstBaseUpdate = R) : (p.next = R),
          (U.lastBaseUpdate = b)));
    }
    if (o !== null) {
      var M = u.baseState;
      (d = 0), (U = R = b = null), (p = o);
      do {
        var C = p.lane & -536870913,
          N = C !== p.lane;
        if (N ? (pe & C) === C : (i & C) === C) {
          C !== 0 && C === Da && (Fr = !0),
            U !== null &&
              (U = U.next =
                {
                  lane: 0,
                  tag: p.tag,
                  payload: p.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var Z = e,
              le = p;
            C = t;
            var Re = n;
            switch (le.tag) {
              case 1:
                if (((Z = le.payload), typeof Z == "function")) {
                  M = Z.call(Re, M, C);
                  break e;
                }
                M = Z;
                break e;
              case 3:
                Z.flags = (Z.flags & -65537) | 128;
              case 0:
                if (
                  ((Z = le.payload),
                  (C = typeof Z == "function" ? Z.call(Re, M, C) : Z),
                  C == null)
                )
                  break e;
                M = _({}, M, C);
                break e;
              case 2:
                xn = !0;
            }
          }
          (C = p.callback),
            C !== null &&
              ((e.flags |= 64),
              N && (e.flags |= 8192),
              (N = u.callbacks),
              N === null ? (u.callbacks = [C]) : N.push(C));
        } else
          (N = {
            lane: C,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            U === null ? ((R = U = N), (b = M)) : (U = U.next = N),
            (d |= C);
        if (((p = p.next), p === null)) {
          if (((p = u.shared.pending), p === null)) break;
          (N = p),
            (p = N.next),
            (N.next = null),
            (u.lastBaseUpdate = N),
            (u.shared.pending = null);
        }
      } while (!0);
      U === null && (b = M),
        (u.baseState = b),
        (u.firstBaseUpdate = R),
        (u.lastBaseUpdate = U),
        o === null && (u.shared.lanes = 0),
        (Un |= d),
        (e.lanes = d),
        (e.memoizedState = M);
    }
  }
  function fh(e, t) {
    if (typeof e != "function") throw Error(r(191, e));
    e.call(t);
  }
  function dh(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) fh(n[e], t);
  }
  var Ba = w(null),
    Ps = w(0);
  function mh(e, t) {
    (e = dn), K(Ps, e), K(Ba, t), (dn = e | t.baseLanes);
  }
  function eu() {
    K(Ps, dn), K(Ba, Ba.current);
  }
  function tu() {
    (dn = Ps.current), z(Ba), z(Ps);
  }
  var St = w(null),
    Mt = null;
  function Cn(e) {
    var t = e.alternate;
    K(qe, qe.current & 1),
      K(St, e),
      Mt === null &&
        (t === null || Ba.current !== null || t.memoizedState !== null) &&
        (Mt = e);
  }
  function nu(e) {
    K(qe, qe.current), K(St, e), Mt === null && (Mt = e);
  }
  function gh(e) {
    e.tag === 22
      ? (K(qe, qe.current), K(St, e), Mt === null && (Mt = e))
      : jn();
  }
  function jn() {
    K(qe, qe.current), K(St, St.current);
  }
  function Et(e) {
    z(St), Mt === e && (Mt = null), z(qe);
  }
  var qe = w(0);
  function Ws(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || uo(n) || oo(n)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var sn = 0,
    he = null,
    xe = null,
    Ge = null,
    Fs = !1,
    qa = !1,
    ra = !1,
    el = 0,
    Li = 0,
    Ha = null,
    g0 = 0;
  function ze() {
    throw Error(r(321));
  }
  function au(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!_t(e[n], t[n])) return !1;
    return !0;
  }
  function iu(e, t, n, i, u, o) {
    return (
      (sn = o),
      (he = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (k.H = e === null || e.memoizedState === null ? Wh : bu),
      (ra = !1),
      (o = n(i, u)),
      (ra = !1),
      qa && (o = ph(t, n, i, u)),
      vh(e),
      o
    );
  }
  function vh(e) {
    k.H = Hi;
    var t = xe !== null && xe.next !== null;
    if (((sn = 0), (Ge = xe = he = null), (Fs = !1), (Li = 0), (Ha = null), t))
      throw Error(r(300));
    e === null ||
      Ve ||
      ((e = e.dependencies), e !== null && Ks(e) && (Ve = !0));
  }
  function ph(e, t, n, i) {
    he = e;
    var u = 0;
    do {
      if ((qa && (Ha = null), (Li = 0), (qa = !1), 25 <= u))
        throw Error(r(301));
      if (((u += 1), (Ge = xe = null), e.updateQueue != null)) {
        var o = e.updateQueue;
        (o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0);
      }
      (k.H = Fh), (o = t(n, i));
    } while (qa);
    return o;
  }
  function v0() {
    var e = k.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Bi(t) : t),
      (e = e.useState()[0]),
      (xe !== null ? xe.memoizedState : null) !== e && (he.flags |= 1024),
      t
    );
  }
  function su() {
    var e = el !== 0;
    return (el = 0), e;
  }
  function lu(e, t, n) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
  }
  function ru(e) {
    if (Fs) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      Fs = !1;
    }
    (sn = 0), (Ge = xe = he = null), (qa = !1), (Li = el = 0), (Ha = null);
  }
  function ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ge === null ? (he.memoizedState = Ge = e) : (Ge = Ge.next = e), Ge;
  }
  function He() {
    if (xe === null) {
      var e = he.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xe.next;
    var t = Ge === null ? he.memoizedState : Ge.next;
    if (t !== null) (Ge = t), (xe = e);
    else {
      if (e === null)
        throw he.alternate === null ? Error(r(467)) : Error(r(310));
      (xe = e),
        (e = {
          memoizedState: xe.memoizedState,
          baseState: xe.baseState,
          baseQueue: xe.baseQueue,
          queue: xe.queue,
          next: null,
        }),
        Ge === null ? (he.memoizedState = Ge = e) : (Ge = Ge.next = e);
    }
    return Ge;
  }
  function tl() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Bi(e) {
    var t = Li;
    return (
      (Li += 1),
      Ha === null && (Ha = []),
      (e = rh(Ha, e, t)),
      (t = he),
      (Ge === null ? t.memoizedState : Ge.next) === null &&
        ((t = t.alternate),
        (k.H = t === null || t.memoizedState === null ? Wh : bu)),
      e
    );
  }
  function nl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Bi(e);
      if (e.$$typeof === H) return tt(e);
    }
    throw Error(r(438, String(e)));
  }
  function uu(e) {
    var t = null,
      n = he.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var i = he.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (t = {
              data: i.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = tl()), (he.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), i = 0; i < e; i++) n[i] = V;
    return t.index++, n;
  }
  function ln(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function al(e) {
    var t = He();
    return ou(t, xe, e);
  }
  function ou(e, t, n) {
    var i = e.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = n;
    var u = e.baseQueue,
      o = i.pending;
    if (o !== null) {
      if (u !== null) {
        var d = u.next;
        (u.next = o.next), (o.next = d);
      }
      (t.baseQueue = u = o), (i.pending = null);
    }
    if (((o = e.baseState), u === null)) e.memoizedState = o;
    else {
      t = u.next;
      var p = (d = null),
        b = null,
        R = t,
        U = !1;
      do {
        var M = R.lane & -536870913;
        if (M !== R.lane ? (pe & M) === M : (sn & M) === M) {
          var C = R.revertLane;
          if (C === 0)
            b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: R.action,
                  hasEagerState: R.hasEagerState,
                  eagerState: R.eagerState,
                  next: null,
                }),
              M === Da && (U = !0);
          else if ((sn & C) === C) {
            (R = R.next), C === Da && (U = !0);
            continue;
          } else
            (M = {
              lane: 0,
              revertLane: R.revertLane,
              gesture: null,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null,
            }),
              b === null ? ((p = b = M), (d = o)) : (b = b.next = M),
              (he.lanes |= C),
              (Un |= C);
          (M = R.action),
            ra && n(o, M),
            (o = R.hasEagerState ? R.eagerState : n(o, M));
        } else
          (C = {
            lane: M,
            revertLane: R.revertLane,
            gesture: R.gesture,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          }),
            b === null ? ((p = b = C), (d = o)) : (b = b.next = C),
            (he.lanes |= M),
            (Un |= M);
        R = R.next;
      } while (R !== null && R !== t);
      if (
        (b === null ? (d = o) : (b.next = p),
        !_t(o, e.memoizedState) && ((Ve = !0), U && ((n = za), n !== null)))
      )
        throw n;
      (e.memoizedState = o),
        (e.baseState = d),
        (e.baseQueue = b),
        (i.lastRenderedState = o);
    }
    return u === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function cu(e) {
    var t = He(),
      n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch,
      u = n.pending,
      o = t.memoizedState;
    if (u !== null) {
      n.pending = null;
      var d = (u = u.next);
      do (o = e(o, d.action)), (d = d.next);
      while (d !== u);
      _t(o, t.memoizedState) || (Ve = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, i];
  }
  function yh(e, t, n) {
    var i = he,
      u = He(),
      o = be;
    if (o) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = t();
    var d = !_t((xe || u).memoizedState, n);
    if (
      (d && ((u.memoizedState = n), (Ve = !0)),
      (u = u.queue),
      du(wh.bind(null, i, u, e), [e]),
      u.getSnapshot !== t || d || (Ge !== null && Ge.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        $a(9, { destroy: void 0 }, _h.bind(null, i, u, n, t), null),
        Ce === null)
      )
        throw Error(r(349));
      o || (sn & 127) !== 0 || bh(i, t, n);
    }
    return n;
  }
  function bh(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = he.updateQueue),
      t === null
        ? ((t = tl()), (he.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function _h(e, t, n, i) {
    (t.value = n), (t.getSnapshot = i), Sh(t) && Eh(e);
  }
  function wh(e, t, n) {
    return n(function () {
      Sh(t) && Eh(e);
    });
  }
  function Sh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !_t(e, n);
    } catch {
      return !0;
    }
  }
  function Eh(e) {
    var t = Wn(e, 2);
    t !== null && gt(t, e, 2);
  }
  function hu(e) {
    var t = ut();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), ra)) {
        bn(!0);
        try {
          n();
        } finally {
          bn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ln,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Th(e, t, n, i) {
    return (e.baseState = n), ou(e, xe, typeof i == "function" ? i : ln);
  }
  function p0(e, t, n, i, u) {
    if (ll(e)) throw Error(r(485));
    if (((e = t.action), e !== null)) {
      var o = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          o.listeners.push(d);
        },
      };
      k.T !== null ? n(!0) : (o.isTransition = !1),
        i(o),
        (n = t.pending),
        n === null
          ? ((o.next = t.pending = o), Ah(t, o))
          : ((o.next = n.next), (t.pending = n.next = o));
    }
  }
  function Ah(e, t) {
    var n = t.action,
      i = t.payload,
      u = e.state;
    if (t.isTransition) {
      var o = k.T,
        d = {};
      k.T = d;
      try {
        var p = n(u, i),
          b = k.S;
        b !== null && b(d, p), xh(e, t, p);
      } catch (R) {
        fu(e, t, R);
      } finally {
        o !== null && d.types !== null && (o.types = d.types), (k.T = o);
      }
    } else
      try {
        (o = n(u, i)), xh(e, t, o);
      } catch (R) {
        fu(e, t, R);
      }
  }
  function xh(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (i) {
            Oh(e, t, i);
          },
          function (i) {
            return fu(e, t, i);
          }
        )
      : Oh(e, t, n);
  }
  function Oh(e, t, n) {
    (t.status = "fulfilled"),
      (t.value = n),
      Rh(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Ah(e, n)));
  }
  function fu(e, t, n) {
    var i = e.pending;
    if (((e.pending = null), i !== null)) {
      i = i.next;
      do (t.status = "rejected"), (t.reason = n), Rh(t), (t = t.next);
      while (t !== i);
    }
    e.action = null;
  }
  function Rh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Ch(e, t) {
    return t;
  }
  function jh(e, t) {
    if (be) {
      var n = Ce.formState;
      if (n !== null) {
        e: {
          var i = he;
          if (be) {
            if (ke) {
              t: {
                for (var u = ke, o = zt; u.nodeType !== 8; ) {
                  if (!o) {
                    u = null;
                    break t;
                  }
                  if (((u = Lt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (o = u.data), (u = o === "F!" || o === "F" ? u : null);
              }
              if (u) {
                (ke = Lt(u.nextSibling)), (i = u.data === "F!");
                break e;
              }
            }
            Tn(i);
          }
          i = !1;
        }
        i && (t = n[0]);
      }
    }
    return (
      (n = ut()),
      (n.memoizedState = n.baseState = t),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ch,
        lastRenderedState: t,
      }),
      (n.queue = i),
      (n = Ih.bind(null, he, i)),
      (i.dispatch = n),
      (i = hu(!1)),
      (o = yu.bind(null, he, !1, i.queue)),
      (i = ut()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (i.queue = u),
      (n = p0.bind(null, he, u, o, n)),
      (u.dispatch = n),
      (i.memoizedState = e),
      [t, n, !1]
    );
  }
  function Nh(e) {
    var t = He();
    return kh(t, xe, e);
  }
  function kh(e, t, n) {
    if (
      ((t = ou(e, t, Ch)[0]),
      (e = al(ln)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var i = Bi(t);
      } catch (d) {
        throw d === Ma ? Js : d;
      }
    else i = t;
    t = He();
    var u = t.queue,
      o = u.dispatch;
    return (
      n !== t.memoizedState &&
        ((he.flags |= 2048),
        $a(9, { destroy: void 0 }, y0.bind(null, u, n), null)),
      [i, o, e]
    );
  }
  function y0(e, t) {
    e.action = t;
  }
  function Uh(e) {
    var t = He(),
      n = xe;
    if (n !== null) return kh(t, n, e);
    He(), (t = t.memoizedState), (n = He());
    var i = n.queue.dispatch;
    return (n.memoizedState = e), [t, i, !1];
  }
  function $a(e, t, n, i) {
    return (
      (e = { tag: e, create: n, deps: i, inst: t, next: null }),
      (t = he.updateQueue),
      t === null && ((t = tl()), (he.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e)),
      e
    );
  }
  function Dh() {
    return He().memoizedState;
  }
  function il(e, t, n, i) {
    var u = ut();
    (he.flags |= e),
      (u.memoizedState = $a(
        1 | t,
        { destroy: void 0 },
        n,
        i === void 0 ? null : i
      ));
  }
  function sl(e, t, n, i) {
    var u = He();
    i = i === void 0 ? null : i;
    var o = u.memoizedState.inst;
    xe !== null && i !== null && au(i, xe.memoizedState.deps)
      ? (u.memoizedState = $a(t, o, n, i))
      : ((he.flags |= e), (u.memoizedState = $a(1 | t, o, n, i)));
  }
  function zh(e, t) {
    il(8390656, 8, e, t);
  }
  function du(e, t) {
    sl(2048, 8, e, t);
  }
  function b0(e) {
    he.flags |= 4;
    var t = he.updateQueue;
    if (t === null) (t = tl()), (he.updateQueue = t), (t.events = [e]);
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function Mh(e) {
    var t = He().memoizedState;
    return (
      b0({ ref: t, nextImpl: e }),
      function () {
        if ((Ee & 2) !== 0) throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Lh(e, t) {
    return sl(4, 2, e, t);
  }
  function Bh(e, t) {
    return sl(4, 4, e, t);
  }
  function qh(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Hh(e, t, n) {
    (n = n != null ? n.concat([e]) : null), sl(4, 4, qh.bind(null, t, e), n);
  }
  function mu() {}
  function $h(e, t) {
    var n = He();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return t !== null && au(t, i[1]) ? i[0] : ((n.memoizedState = [e, t]), e);
  }
  function Gh(e, t) {
    var n = He();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    if (t !== null && au(t, i[1])) return i[0];
    if (((i = e()), ra)) {
      bn(!0);
      try {
        e();
      } finally {
        bn(!1);
      }
    }
    return (n.memoizedState = [i, t]), i;
  }
  function gu(e, t, n) {
    return n === void 0 || ((sn & 1073741824) !== 0 && (pe & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Kf()), (he.lanes |= e), (Un |= e), n);
  }
  function Vh(e, t, n, i) {
    return _t(n, t)
      ? n
      : Ba.current !== null
      ? ((e = gu(e, n, i)), _t(e, t) || (Ve = !0), e)
      : (sn & 42) === 0 || ((sn & 1073741824) !== 0 && (pe & 261930) === 0)
      ? ((Ve = !0), (e.memoizedState = n))
      : ((e = Kf()), (he.lanes |= e), (Un |= e), t);
  }
  function Kh(e, t, n, i, u) {
    var o = $.p;
    $.p = o !== 0 && 8 > o ? o : 8;
    var d = k.T,
      p = {};
    (k.T = p), yu(e, !1, t, n);
    try {
      var b = u(),
        R = k.S;
      if (
        (R !== null && R(p, b),
        b !== null && typeof b == "object" && typeof b.then == "function")
      ) {
        var U = m0(b, i);
        qi(e, t, U, xt(e));
      } else qi(e, t, i, xt(e));
    } catch (M) {
      qi(e, t, { then: function () {}, status: "rejected", reason: M }, xt());
    } finally {
      ($.p = o),
        d !== null && p.types !== null && (d.types = p.types),
        (k.T = d);
    }
  }
  function _0() {}
  function vu(e, t, n, i) {
    if (e.tag !== 5) throw Error(r(476));
    var u = Yh(e).queue;
    Kh(
      e,
      u,
      t,
      ne,
      n === null
        ? _0
        : function () {
            return Xh(e), n(i);
          }
    );
  }
  function Yh(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ne,
      baseState: ne,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ln,
        lastRenderedState: ne,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ln,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Xh(e) {
    var t = Yh(e);
    t.next === null && (t = e.alternate.memoizedState),
      qi(e, t.next.queue, {}, xt());
  }
  function pu() {
    return tt(ns);
  }
  function Jh() {
    return He().memoizedState;
  }
  function Qh() {
    return He().memoizedState;
  }
  function w0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = xt();
          e = On(n);
          var i = Rn(t, e, n);
          i !== null && (gt(i, t, n), Di(i, t, n)),
            (t = { cache: Xr() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function S0(e, t, n) {
    var i = xt();
    (n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ll(e)
        ? Zh(t, n)
        : ((n = zr(e, t, n, i)), n !== null && (gt(n, e, i), Ph(n, t, i)));
  }
  function Ih(e, t, n) {
    var i = xt();
    qi(e, t, n, i);
  }
  function qi(e, t, n, i) {
    var u = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ll(e)) Zh(t, u);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var d = t.lastRenderedState,
            p = o(d, n);
          if (((u.hasEagerState = !0), (u.eagerState = p), _t(p, d)))
            return Hs(e, t, u, 0), Ce === null && qs(), !1;
        } catch {
        } finally {
        }
      if (((n = zr(e, t, u, i)), n !== null))
        return gt(n, e, i), Ph(n, t, i), !0;
    }
    return !1;
  }
  function yu(e, t, n, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: Zu(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ll(e))
    ) {
      if (t) throw Error(r(479));
    } else (t = zr(e, n, i, 2)), t !== null && gt(t, e, 2);
  }
  function ll(e) {
    var t = e.alternate;
    return e === he || (t !== null && t === he);
  }
  function Zh(e, t) {
    qa = Fs = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Ph(e, t, n) {
    if ((n & 4194048) !== 0) {
      var i = t.lanes;
      (i &= e.pendingLanes), (n |= i), (t.lanes = n), nc(e, n);
    }
  }
  var Hi = {
    readContext: tt,
    use: nl,
    useCallback: ze,
    useContext: ze,
    useEffect: ze,
    useImperativeHandle: ze,
    useLayoutEffect: ze,
    useInsertionEffect: ze,
    useMemo: ze,
    useReducer: ze,
    useRef: ze,
    useState: ze,
    useDebugValue: ze,
    useDeferredValue: ze,
    useTransition: ze,
    useSyncExternalStore: ze,
    useId: ze,
    useHostTransitionStatus: ze,
    useFormState: ze,
    useActionState: ze,
    useOptimistic: ze,
    useMemoCache: ze,
    useCacheRefresh: ze,
  };
  Hi.useEffectEvent = ze;
  var Wh = {
      readContext: tt,
      use: nl,
      useCallback: function (e, t) {
        return (ut().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: tt,
      useEffect: zh,
      useImperativeHandle: function (e, t, n) {
        (n = n != null ? n.concat([e]) : null),
          il(4194308, 4, qh.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return il(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        il(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = ut();
        t = t === void 0 ? null : t;
        var i = e();
        if (ra) {
          bn(!0);
          try {
            e();
          } finally {
            bn(!1);
          }
        }
        return (n.memoizedState = [i, t]), i;
      },
      useReducer: function (e, t, n) {
        var i = ut();
        if (n !== void 0) {
          var u = n(t);
          if (ra) {
            bn(!0);
            try {
              n(t);
            } finally {
              bn(!1);
            }
          }
        } else u = t;
        return (
          (i.memoizedState = i.baseState = u),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: u,
          }),
          (i.queue = e),
          (e = e.dispatch = S0.bind(null, he, e)),
          [i.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ut();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = hu(e);
        var t = e.queue,
          n = Ih.bind(null, he, t);
        return (t.dispatch = n), [e.memoizedState, n];
      },
      useDebugValue: mu,
      useDeferredValue: function (e, t) {
        var n = ut();
        return gu(n, e, t);
      },
      useTransition: function () {
        var e = hu(!1);
        return (
          (e = Kh.bind(null, he, e.queue, !0, !1)),
          (ut().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var i = he,
          u = ut();
        if (be) {
          if (n === void 0) throw Error(r(407));
          n = n();
        } else {
          if (((n = t()), Ce === null)) throw Error(r(349));
          (pe & 127) !== 0 || bh(i, t, n);
        }
        u.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (u.queue = o),
          zh(wh.bind(null, i, o, e), [e]),
          (i.flags |= 2048),
          $a(9, { destroy: void 0 }, _h.bind(null, i, o, n, t), null),
          n
        );
      },
      useId: function () {
        var e = ut(),
          t = Ce.identifierPrefix;
        if (be) {
          var n = Yt,
            i = Kt;
          (n = (i & ~(1 << (32 - bt(i) - 1))).toString(32) + n),
            (t = "_" + t + "R_" + n),
            (n = el++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "_");
        } else (n = g0++), (t = "_" + t + "r_" + n.toString(32) + "_");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: pu,
      useFormState: jh,
      useActionState: jh,
      useOptimistic: function (e) {
        var t = ut();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = yu.bind(null, he, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: uu,
      useCacheRefresh: function () {
        return (ut().memoizedState = w0.bind(null, he));
      },
      useEffectEvent: function (e) {
        var t = ut(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((Ee & 2) !== 0) throw Error(r(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    bu = {
      readContext: tt,
      use: nl,
      useCallback: $h,
      useContext: tt,
      useEffect: du,
      useImperativeHandle: Hh,
      useInsertionEffect: Lh,
      useLayoutEffect: Bh,
      useMemo: Gh,
      useReducer: al,
      useRef: Dh,
      useState: function () {
        return al(ln);
      },
      useDebugValue: mu,
      useDeferredValue: function (e, t) {
        var n = He();
        return Vh(n, xe.memoizedState, e, t);
      },
      useTransition: function () {
        var e = al(ln)[0],
          t = He().memoizedState;
        return [typeof e == "boolean" ? e : Bi(e), t];
      },
      useSyncExternalStore: yh,
      useId: Jh,
      useHostTransitionStatus: pu,
      useFormState: Nh,
      useActionState: Nh,
      useOptimistic: function (e, t) {
        var n = He();
        return Th(n, xe, e, t);
      },
      useMemoCache: uu,
      useCacheRefresh: Qh,
    };
  bu.useEffectEvent = Mh;
  var Fh = {
    readContext: tt,
    use: nl,
    useCallback: $h,
    useContext: tt,
    useEffect: du,
    useImperativeHandle: Hh,
    useInsertionEffect: Lh,
    useLayoutEffect: Bh,
    useMemo: Gh,
    useReducer: cu,
    useRef: Dh,
    useState: function () {
      return cu(ln);
    },
    useDebugValue: mu,
    useDeferredValue: function (e, t) {
      var n = He();
      return xe === null ? gu(n, e, t) : Vh(n, xe.memoizedState, e, t);
    },
    useTransition: function () {
      var e = cu(ln)[0],
        t = He().memoizedState;
      return [typeof e == "boolean" ? e : Bi(e), t];
    },
    useSyncExternalStore: yh,
    useId: Jh,
    useHostTransitionStatus: pu,
    useFormState: Uh,
    useActionState: Uh,
    useOptimistic: function (e, t) {
      var n = He();
      return xe !== null
        ? Th(n, xe, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: uu,
    useCacheRefresh: Qh,
  };
  Fh.useEffectEvent = Mh;
  function _u(e, t, n, i) {
    (t = e.memoizedState),
      (n = n(i, t)),
      (n = n == null ? t : _({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var wu = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var i = xt(),
        u = On(i);
      (u.payload = t),
        n != null && (u.callback = n),
        (t = Rn(e, u, i)),
        t !== null && (gt(t, e, i), Di(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var i = xt(),
        u = On(i);
      (u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = Rn(e, u, i)),
        t !== null && (gt(t, e, i), Di(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = xt(),
        i = On(n);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = Rn(e, i, n)),
        t !== null && (gt(t, e, n), Di(t, e, n));
    },
  };
  function ef(e, t, n, i, u, o, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, o, d)
        : t.prototype && t.prototype.isPureReactComponent
        ? !xi(n, i) || !xi(u, o)
        : !0
    );
  }
  function tf(e, t, n, i) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, i),
      t.state !== e && wu.enqueueReplaceState(t, t.state, null);
  }
  function ua(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var i in t) i !== "ref" && (n[i] = t[i]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = _({}, n));
      for (var u in e) n[u] === void 0 && (n[u] = e[u]);
    }
    return n;
  }
  function nf(e) {
    Bs(e);
  }
  function af(e) {
    console.error(e);
  }
  function sf(e) {
    Bs(e);
  }
  function rl(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function lf(e, t, n) {
    try {
      var i = e.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Su(e, t, n) {
    return (
      (n = On(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        rl(e, t);
      }),
      n
    );
  }
  function rf(e) {
    return (e = On(e)), (e.tag = 3), e;
  }
  function uf(e, t, n, i) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var o = i.value;
      (e.payload = function () {
        return u(o);
      }),
        (e.callback = function () {
          lf(t, n, i);
        });
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (e.callback = function () {
        lf(t, n, i),
          typeof u != "function" &&
            (Dn === null ? (Dn = new Set([this])) : Dn.add(this));
        var p = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: p !== null ? p : "",
        });
      });
  }
  function E0(e, t, n, i, u) {
    if (
      ((n.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && Ua(t, n, u, !0),
        (n = St.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Mt === null ? bl() : n.alternate === null && Me === 0 && (Me = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = u),
              i === Qs
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([i])) : t.add(i),
                  Ju(e, i, u)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              i === Qs
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([i])) : n.add(i)),
                  Ju(e, i, u)),
              !1
            );
        }
        throw Error(r(435, n.tag));
      }
      return Ju(e, i, u), bl(), !1;
    }
    if (be)
      return (
        (t = St.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            i !== $r && ((e = Error(r(422), { cause: i })), Ci(kt(e, n))))
          : (i !== $r && ((t = Error(r(423), { cause: i })), Ci(kt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (i = kt(i, n)),
            (u = Su(e.stateNode, i, u)),
            Wr(e, u),
            Me !== 4 && (Me = 2)),
        !1
      );
    var o = Error(r(520), { cause: i });
    if (
      ((o = kt(o, n)),
      Qi === null ? (Qi = [o]) : Qi.push(o),
      Me !== 4 && (Me = 2),
      t === null)
    )
      return !0;
    (i = kt(i, n)), (n = t);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = u & -u),
            (n.lanes |= e),
            (e = Su(n.stateNode, i, e)),
            Wr(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (Dn === null || !Dn.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (u &= -u),
              (n.lanes |= u),
              (u = rf(u)),
              uf(u, e, n, i),
              Wr(n, u),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Eu = Error(r(461)),
    Ve = !1;
  function nt(e, t, n, i) {
    t.child = e === null ? hh(t, null, n, i) : la(t, e.child, n, i);
  }
  function of(e, t, n, i, u) {
    n = n.render;
    var o = t.ref;
    if ("ref" in i) {
      var d = {};
      for (var p in i) p !== "ref" && (d[p] = i[p]);
    } else d = i;
    return (
      na(t),
      (i = iu(e, t, n, d, o, u)),
      (p = su()),
      e !== null && !Ve
        ? (lu(e, t, u), rn(e, t, u))
        : (be && p && qr(t), (t.flags |= 1), nt(e, t, i, u), t.child)
    );
  }
  function cf(e, t, n, i, u) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Mr(o) &&
        o.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = o), hf(e, t, o, i, u))
        : ((e = Gs(n.type, null, i, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !Nu(e, u))) {
      var d = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : xi), n(d, i) && e.ref === t.ref)
      )
        return rn(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = en(o, i)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function hf(e, t, n, i, u) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (xi(o, i) && e.ref === t.ref)
        if (((Ve = !1), (t.pendingProps = i = o), Nu(e, u)))
          (e.flags & 131072) !== 0 && (Ve = !0);
        else return (t.lanes = e.lanes), rn(e, t, u);
    }
    return Tu(e, t, n, i, u);
  }
  function ff(e, t, n, i) {
    var u = i.children,
      o = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      i.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((o = o !== null ? o.baseLanes | n : n), e !== null)) {
          for (i = t.child = e.child, u = 0; i !== null; )
            (u = u | i.lanes | i.childLanes), (i = i.sibling);
          i = u & ~o;
        } else (i = 0), (t.child = null);
        return df(e, t, o, n, i);
      }
      if ((n & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Xs(t, o !== null ? o.cachePool : null),
          o !== null ? mh(t, o) : eu(),
          gh(t);
      else
        return (
          (i = t.lanes = 536870912),
          df(e, t, o !== null ? o.baseLanes | n : n, n, i)
        );
    } else
      o !== null
        ? (Xs(t, o.cachePool), mh(t, o), jn(), (t.memoizedState = null))
        : (e !== null && Xs(t, null), eu(), jn());
    return nt(e, t, u, n), t.child;
  }
  function $i(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function df(e, t, n, i, u) {
    var o = Qr();
    return (
      (o = o === null ? null : { parent: $e._currentValue, pool: o }),
      (t.memoizedState = { baseLanes: n, cachePool: o }),
      e !== null && Xs(t, null),
      eu(),
      gh(t),
      e !== null && Ua(e, t, i, !0),
      (t.childLanes = u),
      null
    );
  }
  function ul(e, t) {
    return (
      (t = cl({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function mf(e, t, n) {
    return (
      la(t, e.child, null, n),
      (e = ul(t, t.pendingProps)),
      (e.flags |= 2),
      Et(t),
      (t.memoizedState = null),
      e
    );
  }
  function T0(e, t, n) {
    var i = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (be) {
        if (i.mode === "hidden")
          return (e = ul(t, i)), (t.lanes = 536870912), $i(null, e);
        if (
          (nu(t),
          (e = ke)
            ? ((e = xd(e, zt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Sn !== null ? { id: Kt, overflow: Yt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Zc(e)),
                (n.return = t),
                (t.child = n),
                (et = t),
                (ke = null)))
            : (e = null),
          e === null)
        )
          throw Tn(t);
        return (t.lanes = 536870912), null;
      }
      return ul(t, i);
    }
    var o = e.memoizedState;
    if (o !== null) {
      var d = o.dehydrated;
      if ((nu(t), u))
        if (t.flags & 256) (t.flags &= -257), (t = mf(e, t, n));
        else if (t.memoizedState !== null)
          (t.child = e.child), (t.flags |= 128), (t = null);
        else throw Error(r(558));
      else if (
        (Ve || Ua(e, t, n, !1), (u = (n & e.childLanes) !== 0), Ve || u)
      ) {
        if (
          ((i = Ce),
          i !== null && ((d = ac(i, n)), d !== 0 && d !== o.retryLane))
        )
          throw ((o.retryLane = d), Wn(e, d), gt(i, e, d), Eu);
        bl(), (t = mf(e, t, n));
      } else
        (e = o.treeContext),
          (ke = Lt(d.nextSibling)),
          (et = t),
          (be = !0),
          (En = null),
          (zt = !1),
          e !== null && Fc(t, e),
          (t = ul(t, i)),
          (t.flags |= 4096);
      return t;
    }
    return (
      (e = en(e.child, { mode: i.mode, children: i.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function ol(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(r(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Tu(e, t, n, i, u) {
    return (
      na(t),
      (n = iu(e, t, n, i, void 0, u)),
      (i = su()),
      e !== null && !Ve
        ? (lu(e, t, u), rn(e, t, u))
        : (be && i && qr(t), (t.flags |= 1), nt(e, t, n, u), t.child)
    );
  }
  function gf(e, t, n, i, u, o) {
    return (
      na(t),
      (t.updateQueue = null),
      (n = ph(t, i, n, u)),
      vh(e),
      (i = su()),
      e !== null && !Ve
        ? (lu(e, t, o), rn(e, t, o))
        : (be && i && qr(t), (t.flags |= 1), nt(e, t, n, o), t.child)
    );
  }
  function vf(e, t, n, i, u) {
    if ((na(t), t.stateNode === null)) {
      var o = Ca,
        d = n.contextType;
      typeof d == "object" && d !== null && (o = tt(d)),
        (o = new n(i, o)),
        (t.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = wu),
        (t.stateNode = o),
        (o._reactInternals = t),
        (o = t.stateNode),
        (o.props = i),
        (o.state = t.memoizedState),
        (o.refs = {}),
        Zr(t),
        (d = n.contextType),
        (o.context = typeof d == "object" && d !== null ? tt(d) : Ca),
        (o.state = t.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == "function" && (_u(t, n, d, i), (o.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((d = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          d !== o.state && wu.enqueueReplaceState(o, o.state, null),
          Mi(t, i, o, u),
          zi(),
          (o.state = t.memoizedState)),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        (i = !0);
    } else if (e === null) {
      o = t.stateNode;
      var p = t.memoizedProps,
        b = ua(n, p);
      o.props = b;
      var R = o.context,
        U = n.contextType;
      (d = Ca), typeof U == "object" && U !== null && (d = tt(U));
      var M = n.getDerivedStateFromProps;
      (U =
        typeof M == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (p = t.pendingProps !== p),
        U ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((p || R !== d) && tf(t, o, i, d)),
        (xn = !1);
      var C = t.memoizedState;
      (o.state = C),
        Mi(t, i, o, u),
        zi(),
        (R = t.memoizedState),
        p || C !== R || xn
          ? (typeof M == "function" && (_u(t, n, M, i), (R = t.memoizedState)),
            (b = xn || ef(t, n, b, i, C, R, d))
              ? (U ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = i),
                (t.memoizedState = R)),
            (o.props = i),
            (o.state = R),
            (o.context = d),
            (i = b))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (i = !1));
    } else {
      (o = t.stateNode),
        Pr(e, t),
        (d = t.memoizedProps),
        (U = ua(n, d)),
        (o.props = U),
        (M = t.pendingProps),
        (C = o.context),
        (R = n.contextType),
        (b = Ca),
        typeof R == "object" && R !== null && (b = tt(R)),
        (p = n.getDerivedStateFromProps),
        (R =
          typeof p == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((d !== M || C !== b) && tf(t, o, i, b)),
        (xn = !1),
        (C = t.memoizedState),
        (o.state = C),
        Mi(t, i, o, u),
        zi();
      var N = t.memoizedState;
      d !== M ||
      C !== N ||
      xn ||
      (e !== null && e.dependencies !== null && Ks(e.dependencies))
        ? (typeof p == "function" && (_u(t, n, p, i), (N = t.memoizedState)),
          (U =
            xn ||
            ef(t, n, U, i, C, N, b) ||
            (e !== null && e.dependencies !== null && Ks(e.dependencies)))
            ? (R ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(i, N, b),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(i, N, b)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (d === e.memoizedProps && C === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && C === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = N)),
          (o.props = i),
          (o.state = N),
          (o.context = b),
          (i = U))
        : (typeof o.componentDidUpdate != "function" ||
            (d === e.memoizedProps && C === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && C === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1));
    }
    return (
      (o = i),
      ol(e, t),
      (i = (t.flags & 128) !== 0),
      o || i
        ? ((o = t.stateNode),
          (n =
            i && typeof n.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (t.flags |= 1),
          e !== null && i
            ? ((t.child = la(t, e.child, null, u)),
              (t.child = la(t, null, n, u)))
            : nt(e, t, n, u),
          (t.memoizedState = o.state),
          (e = t.child))
        : (e = rn(e, t, u)),
      e
    );
  }
  function pf(e, t, n, i) {
    return ea(), (t.flags |= 256), nt(e, t, n, i), t.child;
  }
  var Au = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function xu(e) {
    return { baseLanes: e, cachePool: sh() };
  }
  function Ou(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= At), e;
  }
  function yf(e, t, n) {
    var i = t.pendingProps,
      u = !1,
      o = (t.flags & 128) !== 0,
      d;
    if (
      ((d = o) ||
        (d =
          e !== null && e.memoizedState === null ? !1 : (qe.current & 2) !== 0),
      d && ((u = !0), (t.flags &= -129)),
      (d = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (be) {
        if (
          (u ? Cn(t) : jn(),
          (e = ke)
            ? ((e = xd(e, zt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Sn !== null ? { id: Kt, overflow: Yt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Zc(e)),
                (n.return = t),
                (t.child = n),
                (et = t),
                (ke = null)))
            : (e = null),
          e === null)
        )
          throw Tn(t);
        return oo(e) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      }
      var p = i.children;
      return (
        (i = i.fallback),
        u
          ? (jn(),
            (u = t.mode),
            (p = cl({ mode: "hidden", children: p }, u)),
            (i = Fn(i, u, n, null)),
            (p.return = t),
            (i.return = t),
            (p.sibling = i),
            (t.child = p),
            (i = t.child),
            (i.memoizedState = xu(n)),
            (i.childLanes = Ou(e, d, n)),
            (t.memoizedState = Au),
            $i(null, i))
          : (Cn(t), Ru(t, p))
      );
    }
    var b = e.memoizedState;
    if (b !== null && ((p = b.dehydrated), p !== null)) {
      if (o)
        t.flags & 256
          ? (Cn(t), (t.flags &= -257), (t = Cu(e, t, n)))
          : t.memoizedState !== null
          ? (jn(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (jn(),
            (p = i.fallback),
            (u = t.mode),
            (i = cl({ mode: "visible", children: i.children }, u)),
            (p = Fn(p, u, n, null)),
            (p.flags |= 2),
            (i.return = t),
            (p.return = t),
            (i.sibling = p),
            (t.child = i),
            la(t, e.child, null, n),
            (i = t.child),
            (i.memoizedState = xu(n)),
            (i.childLanes = Ou(e, d, n)),
            (t.memoizedState = Au),
            (t = $i(null, i)));
      else if ((Cn(t), oo(p))) {
        if (((d = p.nextSibling && p.nextSibling.dataset), d)) var R = d.dgst;
        (d = R),
          (i = Error(r(419))),
          (i.stack = ""),
          (i.digest = d),
          Ci({ value: i, source: null, stack: null }),
          (t = Cu(e, t, n));
      } else if (
        (Ve || Ua(e, t, n, !1), (d = (n & e.childLanes) !== 0), Ve || d)
      ) {
        if (
          ((d = Ce),
          d !== null && ((i = ac(d, n)), i !== 0 && i !== b.retryLane))
        )
          throw ((b.retryLane = i), Wn(e, i), gt(d, e, i), Eu);
        uo(p) || bl(), (t = Cu(e, t, n));
      } else
        uo(p)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = b.treeContext),
            (ke = Lt(p.nextSibling)),
            (et = t),
            (be = !0),
            (En = null),
            (zt = !1),
            e !== null && Fc(t, e),
            (t = Ru(t, i.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (jn(),
        (p = i.fallback),
        (u = t.mode),
        (b = e.child),
        (R = b.sibling),
        (i = en(b, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = b.subtreeFlags & 65011712),
        R !== null ? (p = en(R, p)) : ((p = Fn(p, u, n, null)), (p.flags |= 2)),
        (p.return = t),
        (i.return = t),
        (i.sibling = p),
        (t.child = i),
        $i(null, i),
        (i = t.child),
        (p = e.child.memoizedState),
        p === null
          ? (p = xu(n))
          : ((u = p.cachePool),
            u !== null
              ? ((b = $e._currentValue),
                (u = u.parent !== b ? { parent: b, pool: b } : u))
              : (u = sh()),
            (p = { baseLanes: p.baseLanes | n, cachePool: u })),
        (i.memoizedState = p),
        (i.childLanes = Ou(e, d, n)),
        (t.memoizedState = Au),
        $i(e.child, i))
      : (Cn(t),
        (n = e.child),
        (e = n.sibling),
        (n = en(n, { mode: "visible", children: i.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((d = t.deletions),
          d === null ? ((t.deletions = [e]), (t.flags |= 16)) : d.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Ru(e, t) {
    return (
      (t = cl({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function cl(e, t) {
    return (e = wt(22, e, null, t)), (e.lanes = 0), e;
  }
  function Cu(e, t, n) {
    return (
      la(t, e.child, null, n),
      (e = Ru(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function bf(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Kr(e.return, t, n);
  }
  function ju(e, t, n, i, u, o) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: u,
          treeForkCount: o,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = i),
        (d.tail = n),
        (d.tailMode = u),
        (d.treeForkCount = o));
  }
  function _f(e, t, n) {
    var i = t.pendingProps,
      u = i.revealOrder,
      o = i.tail;
    i = i.children;
    var d = qe.current,
      p = (d & 2) !== 0;
    if (
      (p ? ((d = (d & 1) | 2), (t.flags |= 128)) : (d &= 1),
      K(qe, d),
      nt(e, t, i, n),
      (i = be ? Ri : 0),
      !p && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bf(e, n, t);
        else if (e.tag === 19) bf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    switch (u) {
      case "forwards":
        for (n = t.child, u = null; n !== null; )
          (e = n.alternate),
            e !== null && Ws(e) === null && (u = n),
            (n = n.sibling);
        (n = u),
          n === null
            ? ((u = t.child), (t.child = null))
            : ((u = n.sibling), (n.sibling = null)),
          ju(t, !1, u, n, o, i);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Ws(e) === null)) {
            t.child = u;
            break;
          }
          (e = u.sibling), (u.sibling = n), (n = u), (u = e);
        }
        ju(t, !0, n, null, o, i);
        break;
      case "together":
        ju(t, !1, null, null, void 0, i);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function rn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Un |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Ua(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = en(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Nu(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Ks(e)));
  }
  function A0(e, t, n) {
    switch (t.tag) {
      case 3:
        Ze(t, t.stateNode.containerInfo),
          An(t, $e, e.memoizedState.cache),
          ea();
        break;
      case 27:
      case 5:
        di(t);
        break;
      case 4:
        Ze(t, t.stateNode.containerInfo);
        break;
      case 10:
        An(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return (t.flags |= 128), nu(t), null;
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (Cn(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? yf(e, t, n)
            : (Cn(t), (e = rn(e, t, n)), e !== null ? e.sibling : null);
        Cn(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((i = (n & t.childLanes) !== 0),
          i || (Ua(e, t, n, !1), (i = (n & t.childLanes) !== 0)),
          u)
        ) {
          if (i) return _f(e, t, n);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          K(qe, qe.current),
          i)
        )
          break;
        return null;
      case 22:
        return (t.lanes = 0), ff(e, t, n, t.pendingProps);
      case 24:
        An(t, $e, e.memoizedState.cache);
    }
    return rn(e, t, n);
  }
  function wf(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ve = !0;
      else {
        if (!Nu(e, n) && (t.flags & 128) === 0) return (Ve = !1), A0(e, t, n);
        Ve = (e.flags & 131072) !== 0;
      }
    else (Ve = !1), be && (t.flags & 1048576) !== 0 && Wc(t, Ri, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var i = t.pendingProps;
          if (((e = ia(t.elementType)), (t.type = e), typeof e == "function"))
            Mr(e)
              ? ((i = ua(e, i)), (t.tag = 1), (t = vf(null, t, e, i, n)))
              : ((t.tag = 0), (t = Tu(null, t, e, i, n)));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === ee) {
                (t.tag = 11), (t = of(null, t, e, i, n));
                break e;
              } else if (u === B) {
                (t.tag = 14), (t = cf(null, t, e, i, n));
                break e;
              }
            }
            throw ((t = Je(e) || e), Error(r(306, t, "")));
          }
        }
        return t;
      case 0:
        return Tu(e, t, t.type, t.pendingProps, n);
      case 1:
        return (i = t.type), (u = ua(i, t.pendingProps)), vf(e, t, i, u, n);
      case 3:
        e: {
          if ((Ze(t, t.stateNode.containerInfo), e === null))
            throw Error(r(387));
          i = t.pendingProps;
          var o = t.memoizedState;
          (u = o.element), Pr(e, t), Mi(t, i, null, n);
          var d = t.memoizedState;
          if (
            ((i = d.cache),
            An(t, $e, i),
            i !== o.cache && Yr(t, [$e], n, !0),
            zi(),
            (i = d.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: i, isDehydrated: !1, cache: d.cache }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              t = pf(e, t, i, n);
              break e;
            } else if (i !== u) {
              (u = kt(Error(r(424)), t)), Ci(u), (t = pf(e, t, i, n));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                ke = Lt(e.firstChild),
                  et = t,
                  be = !0,
                  En = null,
                  zt = !0,
                  n = hh(t, null, i, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((ea(), i === u)) {
              t = rn(e, t, n);
              break e;
            }
            nt(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          ol(e, t),
          e === null
            ? (n = kd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : be ||
                ((n = t.type),
                (e = t.pendingProps),
                (i = xl(de.current).createElement(n)),
                (i[Fe] = t),
                (i[ot] = e),
                at(i, n, e),
                Pe(i),
                (t.stateNode = i))
            : (t.memoizedState = kd(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          di(t),
          e === null &&
            be &&
            ((i = t.stateNode = Cd(t.type, t.pendingProps, de.current)),
            (et = t),
            (zt = !0),
            (u = ke),
            Bn(t.type) ? ((co = u), (ke = Lt(i.firstChild))) : (ke = u)),
          nt(e, t, t.pendingProps.children, n),
          ol(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            be &&
            ((u = i = ke) &&
              ((i = tv(i, t.type, t.pendingProps, zt)),
              i !== null
                ? ((t.stateNode = i),
                  (et = t),
                  (ke = Lt(i.firstChild)),
                  (zt = !1),
                  (u = !0))
                : (u = !1)),
            u || Tn(t)),
          di(t),
          (u = t.type),
          (o = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (i = o.children),
          so(u, o) ? (i = null) : d !== null && so(u, d) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = iu(e, t, v0, null, null, n)), (ns._currentValue = u)),
          ol(e, t),
          nt(e, t, i, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            be &&
            ((e = n = ke) &&
              ((n = nv(n, t.pendingProps, zt)),
              n !== null
                ? ((t.stateNode = n), (et = t), (ke = null), (e = !0))
                : (e = !1)),
            e || Tn(t)),
          null
        );
      case 13:
        return yf(e, t, n);
      case 4:
        return (
          Ze(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = la(t, null, i, n)) : nt(e, t, i, n),
          t.child
        );
      case 11:
        return of(e, t, t.type, t.pendingProps, n);
      case 7:
        return nt(e, t, t.pendingProps, n), t.child;
      case 8:
        return nt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return nt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return (
          (i = t.pendingProps),
          An(t, t.type, i.value),
          nt(e, t, i.children, n),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (i = t.pendingProps.children),
          na(t),
          (u = tt(u)),
          (i = i(u)),
          (t.flags |= 1),
          nt(e, t, i, n),
          t.child
        );
      case 14:
        return cf(e, t, t.type, t.pendingProps, n);
      case 15:
        return hf(e, t, t.type, t.pendingProps, n);
      case 19:
        return _f(e, t, n);
      case 31:
        return T0(e, t, n);
      case 22:
        return ff(e, t, n, t.pendingProps);
      case 24:
        return (
          na(t),
          (i = tt($e)),
          e === null
            ? ((u = Qr()),
              u === null &&
                ((u = Ce),
                (o = Xr()),
                (u.pooledCache = o),
                o.refCount++,
                o !== null && (u.pooledCacheLanes |= n),
                (u = o)),
              (t.memoizedState = { parent: i, cache: u }),
              Zr(t),
              An(t, $e, u))
            : ((e.lanes & n) !== 0 && (Pr(e, t), Mi(t, null, null, n), zi()),
              (u = e.memoizedState),
              (o = t.memoizedState),
              u.parent !== i
                ? ((u = { parent: i, cache: i }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  An(t, $e, i))
                : ((i = o.cache),
                  An(t, $e, i),
                  i !== u.cache && Yr(t, [$e], n, !0))),
          nt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function un(e) {
    e.flags |= 4;
  }
  function ku(e, t, n, i, u) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (u & 335544128) === u))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Qf()) e.flags |= 8192;
        else throw ((sa = Qs), Ir);
    } else e.flags &= -16777217;
  }
  function Sf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Ld(t)))
      if (Qf()) e.flags |= 8192;
      else throw ((sa = Qs), Ir);
  }
  function hl(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? ec() : 536870912), (e.lanes |= t), (Ya |= t));
  }
  function Gi(e, t) {
    if (!be)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling);
          i === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      i = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (n |= u.lanes | u.childLanes),
          (i |= u.subtreeFlags & 65011712),
          (i |= u.flags & 65011712),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (n |= u.lanes | u.childLanes),
          (i |= u.subtreeFlags),
          (i |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= i), (e.childLanes = n), t;
  }
  function x0(e, t, n) {
    var i = t.pendingProps;
    switch ((Hr(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ue(t), null;
      case 1:
        return Ue(t), null;
      case 3:
        return (
          (n = t.stateNode),
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          t.memoizedState.cache !== i && (t.flags |= 2048),
          an($e),
          Be(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (ka(t)
              ? un(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Gr())),
          Ue(t),
          null
        );
      case 26:
        var u = t.type,
          o = t.memoizedState;
        return (
          e === null
            ? (un(t),
              o !== null ? (Ue(t), Sf(t, o)) : (Ue(t), ku(t, u, null, i, n)))
            : o
            ? o !== e.memoizedState
              ? (un(t), Ue(t), Sf(t, o))
              : (Ue(t), (t.flags &= -16777217))
            : ((e = e.memoizedProps),
              e !== i && un(t),
              Ue(t),
              ku(t, u, e, i, n)),
          null
        );
      case 27:
        if (
          (Ss(t),
          (n = de.current),
          (u = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== i && un(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(r(166));
            return Ue(t), null;
          }
          (e = P.current),
            ka(t) ? eh(t) : ((e = Cd(u, i, n)), (t.stateNode = e), un(t));
        }
        return Ue(t), null;
      case 5:
        if ((Ss(t), (u = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== i && un(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(r(166));
            return Ue(t), null;
          }
          if (((o = P.current), ka(t))) eh(t);
          else {
            var d = xl(de.current);
            switch (o) {
              case 1:
                o = d.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                o = d.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    o = d.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    o = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    (o = d.createElement("div")),
                      (o.innerHTML = "<script></script>"),
                      (o = o.removeChild(o.firstChild));
                    break;
                  case "select":
                    (o =
                      typeof i.is == "string"
                        ? d.createElement("select", { is: i.is })
                        : d.createElement("select")),
                      i.multiple
                        ? (o.multiple = !0)
                        : i.size && (o.size = i.size);
                    break;
                  default:
                    o =
                      typeof i.is == "string"
                        ? d.createElement(u, { is: i.is })
                        : d.createElement(u);
                }
            }
            (o[Fe] = t), (o[ot] = i);
            e: for (d = t.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6) o.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                (d.child.return = d), (d = d.child);
                continue;
              }
              if (d === t) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === t) break e;
                d = d.return;
              }
              (d.sibling.return = d.return), (d = d.sibling);
            }
            t.stateNode = o;
            e: switch ((at(o, u, i), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
            i && un(t);
          }
        }
        return (
          Ue(t),
          ku(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== i && un(t);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(r(166));
          if (((e = de.current), ka(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (i = null),
              (u = et),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  i = u.memoizedProps;
              }
            (e[Fe] = t),
              (e = !!(
                e.nodeValue === n ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                yd(e.nodeValue, n)
              )),
              e || Tn(t, !0);
          } else (e = xl(e).createTextNode(i)), (e[Fe] = t), (t.stateNode = e);
        }
        return Ue(t), null;
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((i = ka(t)), n !== null)) {
            if (e === null) {
              if (!i) throw Error(r(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(r(557));
              e[Fe] = t;
            } else
              ea(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ue(t), (e = !1);
          } else
            (n = Gr()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0);
          if (!e) return t.flags & 256 ? (Et(t), t) : (Et(t), null);
          if ((t.flags & 128) !== 0) throw Error(r(558));
        }
        return Ue(t), null;
      case 13:
        if (
          ((i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = ka(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(r(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(r(317));
              u[Fe] = t;
            } else
              ea(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ue(t), (u = !1);
          } else
            (u = Gr()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return t.flags & 256 ? (Et(t), t) : (Et(t), null);
        }
        return (
          Et(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = i !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((i = t.child),
                (u = null),
                i.alternate !== null &&
                  i.alternate.memoizedState !== null &&
                  i.alternate.memoizedState.cachePool !== null &&
                  (u = i.alternate.memoizedState.cachePool.pool),
                (o = null),
                i.memoizedState !== null &&
                  i.memoizedState.cachePool !== null &&
                  (o = i.memoizedState.cachePool.pool),
                o !== u && (i.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              hl(t, t.updateQueue),
              Ue(t),
              null)
        );
      case 4:
        return Be(), e === null && eo(t.stateNode.containerInfo), Ue(t), null;
      case 10:
        return an(t.type), Ue(t), null;
      case 19:
        if ((z(qe), (i = t.memoizedState), i === null)) return Ue(t), null;
        if (((u = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (u) Gi(i, !1);
          else {
            if (Me !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = Ws(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      Gi(i, !1),
                      e = o.updateQueue,
                      t.updateQueue = e,
                      hl(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    Ic(n, e), (n = n.sibling);
                  return (
                    K(qe, (qe.current & 1) | 2),
                    be && tn(t, i.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            i.tail !== null &&
              pt() > vl &&
              ((t.flags |= 128), (u = !0), Gi(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = Ws(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                hl(t, e),
                Gi(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !o.alternate &&
                  !be)
              )
                return Ue(t), null;
            } else
              2 * pt() - i.renderingStartTime > vl &&
                n !== 536870912 &&
                ((t.flags |= 128), (u = !0), Gi(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((e = i.last),
              e !== null ? (e.sibling = o) : (t.child = o),
              (i.last = o));
        }
        return i.tail !== null
          ? ((e = i.tail),
            (i.rendering = e),
            (i.tail = e.sibling),
            (i.renderingStartTime = pt()),
            (e.sibling = null),
            (n = qe.current),
            K(qe, u ? (n & 1) | 2 : n & 1),
            be && tn(t, i.treeForkCount),
            e)
          : (Ue(t), null);
      case 22:
      case 23:
        return (
          Et(t),
          tu(),
          (i = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== i && (t.flags |= 8192)
            : i && (t.flags |= 8192),
          i
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ue(t),
          (n = t.updateQueue),
          n !== null && hl(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (i = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (i = t.memoizedState.cachePool.pool),
          i !== n && (t.flags |= 2048),
          e !== null && z(aa),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          an($e),
          Ue(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function O0(e, t) {
    switch ((Hr(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          an($e),
          Be(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ss(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ((Et(t), t.alternate === null)) throw Error(r(340));
          ea();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Et(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          ea();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return z(qe), null;
      case 4:
        return Be(), null;
      case 10:
        return an(t.type), null;
      case 22:
      case 23:
        return (
          Et(t),
          tu(),
          e !== null && z(aa),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return an($e), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ef(e, t) {
    switch ((Hr(t), t.tag)) {
      case 3:
        an($e), Be();
        break;
      case 26:
      case 27:
      case 5:
        Ss(t);
        break;
      case 4:
        Be();
        break;
      case 31:
        t.memoizedState !== null && Et(t);
        break;
      case 13:
        Et(t);
        break;
      case 19:
        z(qe);
        break;
      case 10:
        an(t.type);
        break;
      case 22:
      case 23:
        Et(t), tu(), e !== null && z(aa);
        break;
      case 24:
        an($e);
    }
  }
  function Vi(e, t) {
    try {
      var n = t.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            i = void 0;
            var o = n.create,
              d = n.inst;
            (i = o()), (d.destroy = i);
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (p) {
      Ae(t, t.return, p);
    }
  }
  function Nn(e, t, n) {
    try {
      var i = t.updateQueue,
        u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var o = u.next;
        i = o;
        do {
          if ((i.tag & e) === e) {
            var d = i.inst,
              p = d.destroy;
            if (p !== void 0) {
              (d.destroy = void 0), (u = t);
              var b = n,
                R = p;
              try {
                R();
              } catch (U) {
                Ae(u, b, U);
              }
            }
          }
          i = i.next;
        } while (i !== o);
      }
    } catch (U) {
      Ae(t, t.return, U);
    }
  }
  function Tf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        dh(t, n);
      } catch (i) {
        Ae(e, e.return, i);
      }
    }
  }
  function Af(e, t, n) {
    (n.props = ua(e.type, e.memoizedProps)), (n.state = e.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (i) {
      Ae(e, t, i);
    }
  }
  function Ki(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var i = e.stateNode;
            break;
          case 30:
            i = e.stateNode;
            break;
          default:
            i = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(i)) : (n.current = i);
      }
    } catch (u) {
      Ae(e, t, u);
    }
  }
  function Xt(e, t) {
    var n = e.ref,
      i = e.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (u) {
          Ae(e, t, u);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          Ae(e, t, u);
        }
      else n.current = null;
  }
  function xf(e) {
    var t = e.type,
      n = e.memoizedProps,
      i = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break e;
        case "img":
          n.src ? (i.src = n.src) : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (u) {
      Ae(e, e.return, u);
    }
  }
  function Uu(e, t, n) {
    try {
      var i = e.stateNode;
      I0(i, e.type, n, t), (i[ot] = t);
    } catch (u) {
      Ae(e, e.return, u);
    }
  }
  function Of(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Bn(e.type)) ||
      e.tag === 4
    );
  }
  function Du(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Of(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Bn(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function zu(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Wt));
    else if (
      i !== 4 &&
      (i === 27 && Bn(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (zu(e, t, n), e = e.sibling; e !== null; )
        zu(e, t, n), (e = e.sibling);
  }
  function fl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (
      i !== 4 &&
      (i === 27 && Bn(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (fl(e, t, n), e = e.sibling; e !== null; )
        fl(e, t, n), (e = e.sibling);
  }
  function Rf(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var i = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      at(t, i, n), (t[Fe] = e), (t[ot] = n);
    } catch (o) {
      Ae(e, e.return, o);
    }
  }
  var on = !1,
    Ke = !1,
    Mu = !1,
    Cf = typeof WeakSet == "function" ? WeakSet : Set,
    We = null;
  function R0(e, t) {
    if (((e = e.containerInfo), (ao = Ul), (e = Hc(e)), Cr(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var u = i.anchorOffset,
              o = i.focusNode;
            i = i.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var d = 0,
              p = -1,
              b = -1,
              R = 0,
              U = 0,
              M = e,
              C = null;
            t: for (;;) {
              for (
                var N;
                M !== n || (u !== 0 && M.nodeType !== 3) || (p = d + u),
                  M !== o || (i !== 0 && M.nodeType !== 3) || (b = d + i),
                  M.nodeType === 3 && (d += M.nodeValue.length),
                  (N = M.firstChild) !== null;

              )
                (C = M), (M = N);
              for (;;) {
                if (M === e) break t;
                if (
                  (C === n && ++R === u && (p = d),
                  C === o && ++U === i && (b = d),
                  (N = M.nextSibling) !== null)
                )
                  break;
                (M = C), (C = M.parentNode);
              }
              M = N;
            }
            n = p === -1 || b === -1 ? null : { start: p, end: b };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      io = { focusedElem: e, selectionRange: n }, Ul = !1, We = t;
      We !== null;

    )
      if (
        ((t = We), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (We = e);
      else
        for (; We !== null; ) {
          switch (((t = We), (o = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (n = 0; n < e.length; n++)
                  (u = e[n]), (u.ref.impl = u.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && o !== null) {
                (e = void 0),
                  (n = t),
                  (u = o.memoizedProps),
                  (o = o.memoizedState),
                  (i = n.stateNode);
                try {
                  var Z = ua(n.type, u);
                  (e = i.getSnapshotBeforeUpdate(Z, o)),
                    (i.__reactInternalSnapshotBeforeUpdate = e);
                } catch (le) {
                  Ae(n, n.return, le);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  ro(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ro(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (We = e);
            break;
          }
          We = t.return;
        }
  }
  function jf(e, t, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        hn(e, n), i & 4 && Vi(5, n);
        break;
      case 1:
        if ((hn(e, n), i & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (d) {
              Ae(n, n.return, d);
            }
          else {
            var u = ua(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Ae(n, n.return, d);
            }
          }
        i & 64 && Tf(n), i & 512 && Ki(n, n.return);
        break;
      case 3:
        if ((hn(e, n), i & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            dh(e, t);
          } catch (d) {
            Ae(n, n.return, d);
          }
        }
        break;
      case 27:
        t === null && i & 4 && Rf(n);
      case 26:
      case 5:
        hn(e, n), t === null && i & 4 && xf(n), i & 512 && Ki(n, n.return);
        break;
      case 12:
        hn(e, n);
        break;
      case 31:
        hn(e, n), i & 4 && Uf(e, n);
        break;
      case 13:
        hn(e, n),
          i & 4 && Df(e, n),
          i & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = L0.bind(null, n)), av(e, n))));
        break;
      case 22:
        if (((i = n.memoizedState !== null || on), !i)) {
          (t = (t !== null && t.memoizedState !== null) || Ke), (u = on);
          var o = Ke;
          (on = i),
            (Ke = t) && !o ? fn(e, n, (n.subtreeFlags & 8772) !== 0) : hn(e, n),
            (on = u),
            (Ke = o);
        }
        break;
      case 30:
        break;
      default:
        hn(e, n);
    }
  }
  function Nf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Nf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && fr(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var De = null,
    ht = !1;
  function cn(e, t, n) {
    for (n = n.child; n !== null; ) kf(e, t, n), (n = n.sibling);
  }
  function kf(e, t, n) {
    if (yt && typeof yt.onCommitFiberUnmount == "function")
      try {
        yt.onCommitFiberUnmount(mi, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Ke || Xt(n, t),
          cn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Ke || Xt(n, t);
        var i = De,
          u = ht;
        Bn(n.type) && ((De = n.stateNode), (ht = !1)),
          cn(e, t, n),
          Fi(n.stateNode),
          (De = i),
          (ht = u);
        break;
      case 5:
        Ke || Xt(n, t);
      case 6:
        if (
          ((i = De),
          (u = ht),
          (De = null),
          cn(e, t, n),
          (De = i),
          (ht = u),
          De !== null)
        )
          if (ht)
            try {
              (De.nodeType === 9
                ? De.body
                : De.nodeName === "HTML"
                ? De.ownerDocument.body
                : De
              ).removeChild(n.stateNode);
            } catch (o) {
              Ae(n, t, o);
            }
          else
            try {
              De.removeChild(n.stateNode);
            } catch (o) {
              Ae(n, t, o);
            }
        break;
      case 18:
        De !== null &&
          (ht
            ? ((e = De),
              Td(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                n.stateNode
              ),
              Fa(e))
            : Td(De, n.stateNode));
        break;
      case 4:
        (i = De),
          (u = ht),
          (De = n.stateNode.containerInfo),
          (ht = !0),
          cn(e, t, n),
          (De = i),
          (ht = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Nn(2, n, t), Ke || Nn(4, n, t), cn(e, t, n);
        break;
      case 1:
        Ke ||
          (Xt(n, t),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function" && Af(n, t, i)),
          cn(e, t, n);
        break;
      case 21:
        cn(e, t, n);
        break;
      case 22:
        (Ke = (i = Ke) || n.memoizedState !== null), cn(e, t, n), (Ke = i);
        break;
      default:
        cn(e, t, n);
    }
  }
  function Uf(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Fa(e);
      } catch (n) {
        Ae(t, t.return, n);
      }
    }
  }
  function Df(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Fa(e);
      } catch (n) {
        Ae(t, t.return, n);
      }
  }
  function C0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Cf()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Cf()),
          t
        );
      default:
        throw Error(r(435, e.tag));
    }
  }
  function dl(e, t) {
    var n = C0(e);
    t.forEach(function (i) {
      if (!n.has(i)) {
        n.add(i);
        var u = B0.bind(null, e, i);
        i.then(u, u);
      }
    });
  }
  function ft(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var u = n[i],
          o = e,
          d = t,
          p = d;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (Bn(p.type)) {
                (De = p.stateNode), (ht = !1);
                break e;
              }
              break;
            case 5:
              (De = p.stateNode), (ht = !1);
              break e;
            case 3:
            case 4:
              (De = p.stateNode.containerInfo), (ht = !0);
              break e;
          }
          p = p.return;
        }
        if (De === null) throw Error(r(160));
        kf(o, d, u),
          (De = null),
          (ht = !1),
          (o = u.alternate),
          o !== null && (o.return = null),
          (u.return = null);
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) zf(t, e), (t = t.sibling);
  }
  var Ht = null;
  function zf(e, t) {
    var n = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ft(t, e),
          dt(e),
          i & 4 && (Nn(3, e, e.return), Vi(3, e), Nn(5, e, e.return));
        break;
      case 1:
        ft(t, e),
          dt(e),
          i & 512 && (Ke || n === null || Xt(n, n.return)),
          i & 64 &&
            on &&
            ((e = e.updateQueue),
            e !== null &&
              ((i = e.callbacks),
              i !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? i : n.concat(i)))));
        break;
      case 26:
        var u = Ht;
        if (
          (ft(t, e),
          dt(e),
          i & 512 && (Ke || n === null || Xt(n, n.return)),
          i & 4)
        ) {
          var o = n !== null ? n.memoizedState : null;
          if (((i = e.memoizedState), n === null))
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  (i = e.type),
                    (n = e.memoizedProps),
                    (u = u.ownerDocument || u);
                  t: switch (i) {
                    case "title":
                      (o = u.getElementsByTagName("title")[0]),
                        (!o ||
                          o[pi] ||
                          o[Fe] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = u.createElement(i)),
                          u.head.insertBefore(
                            o,
                            u.querySelector("head > title")
                          )),
                        at(o, i, n),
                        (o[Fe] = e),
                        Pe(o),
                        (i = o);
                      break e;
                    case "link":
                      var d = zd("link", "href", u).get(i + (n.href || ""));
                      if (d) {
                        for (var p = 0; p < d.length; p++)
                          if (
                            ((o = d[p]),
                            o.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              o.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(p, 1);
                            break t;
                          }
                      }
                      (o = u.createElement(i)),
                        at(o, i, n),
                        u.head.appendChild(o);
                      break;
                    case "meta":
                      if (
                        (d = zd("meta", "content", u).get(
                          i + (n.content || "")
                        ))
                      ) {
                        for (p = 0; p < d.length; p++)
                          if (
                            ((o = d[p]),
                            o.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              o.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(p, 1);
                            break t;
                          }
                      }
                      (o = u.createElement(i)),
                        at(o, i, n),
                        u.head.appendChild(o);
                      break;
                    default:
                      throw Error(r(468, i));
                  }
                  (o[Fe] = e), Pe(o), (i = o);
                }
                e.stateNode = i;
              } else Md(u, e.type, e.stateNode);
            else e.stateNode = Dd(u, i, e.memoizedProps);
          else
            o !== i
              ? (o === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                i === null
                  ? Md(u, e.type, e.stateNode)
                  : Dd(u, i, e.memoizedProps))
              : i === null &&
                e.stateNode !== null &&
                Uu(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        ft(t, e),
          dt(e),
          i & 512 && (Ke || n === null || Xt(n, n.return)),
          n !== null && i & 4 && Uu(e, e.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (ft(t, e),
          dt(e),
          i & 512 && (Ke || n === null || Xt(n, n.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            Sa(u, "");
          } catch (Z) {
            Ae(e, e.return, Z);
          }
        }
        i & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), Uu(e, u, n !== null ? n.memoizedProps : u)),
          i & 1024 && (Mu = !0);
        break;
      case 6:
        if ((ft(t, e), dt(e), i & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          (i = e.memoizedProps), (n = e.stateNode);
          try {
            n.nodeValue = i;
          } catch (Z) {
            Ae(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (
          ((Cl = null),
          (u = Ht),
          (Ht = Ol(t.containerInfo)),
          ft(t, e),
          (Ht = u),
          dt(e),
          i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Fa(t.containerInfo);
          } catch (Z) {
            Ae(e, e.return, Z);
          }
        Mu && ((Mu = !1), Mf(e));
        break;
      case 4:
        (i = Ht),
          (Ht = Ol(e.stateNode.containerInfo)),
          ft(t, e),
          dt(e),
          (Ht = i);
        break;
      case 12:
        ft(t, e), dt(e);
        break;
      case 31:
        ft(t, e),
          dt(e),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), dl(e, i)));
        break;
      case 13:
        ft(t, e),
          dt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (gl = pt()),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), dl(e, i)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var b = n !== null && n.memoizedState !== null,
          R = on,
          U = Ke;
        if (
          ((on = R || u),
          (Ke = U || b),
          ft(t, e),
          (Ke = U),
          (on = R),
          dt(e),
          i & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (n === null || b || on || Ke || oa(e)),
              n = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                b = n = t;
                try {
                  if (((o = b.stateNode), u))
                    (d = o.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none");
                  else {
                    p = b.stateNode;
                    var M = b.memoizedProps.style,
                      C =
                        M != null && M.hasOwnProperty("display")
                          ? M.display
                          : null;
                    p.style.display =
                      C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (Z) {
                  Ae(b, b.return, Z);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                b = t;
                try {
                  b.stateNode.nodeValue = u ? "" : b.memoizedProps;
                } catch (Z) {
                  Ae(b, b.return, Z);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                b = t;
                try {
                  var N = b.stateNode;
                  u ? Ad(N, !0) : Ad(b.stateNode, !1);
                } catch (Z) {
                  Ae(b, b.return, Z);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), (t = t.return);
            }
            n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        i & 4 &&
          ((i = e.updateQueue),
          i !== null &&
            ((n = i.retryQueue),
            n !== null && ((i.retryQueue = null), dl(e, n))));
        break;
      case 19:
        ft(t, e),
          dt(e),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), dl(e, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ft(t, e), dt(e);
    }
  }
  function dt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, i = e.return; i !== null; ) {
          if (Of(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var u = n.stateNode,
              o = Du(e);
            fl(e, o, u);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (Sa(d, ""), (n.flags &= -33));
            var p = Du(e);
            fl(e, p, d);
            break;
          case 3:
          case 4:
            var b = n.stateNode.containerInfo,
              R = Du(e);
            zu(e, R, b);
            break;
          default:
            throw Error(r(161));
        }
      } catch (U) {
        Ae(e, e.return, U);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Mf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Mf(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function hn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) jf(e, t.alternate, t), (t = t.sibling);
  }
  function oa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Nn(4, t, t.return), oa(t);
          break;
        case 1:
          Xt(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Af(t, t.return, n),
            oa(t);
          break;
        case 27:
          Fi(t.stateNode);
        case 26:
        case 5:
          Xt(t, t.return), oa(t);
          break;
        case 22:
          t.memoizedState === null && oa(t);
          break;
        case 30:
          oa(t);
          break;
        default:
          oa(t);
      }
      e = e.sibling;
    }
  }
  function fn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate,
        u = e,
        o = t,
        d = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          fn(u, o, n), Vi(4, o);
          break;
        case 1:
          if (
            (fn(u, o, n),
            (i = o),
            (u = i.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (R) {
              Ae(i, i.return, R);
            }
          if (((i = o), (u = i.updateQueue), u !== null)) {
            var p = i.stateNode;
            try {
              var b = u.shared.hiddenCallbacks;
              if (b !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < b.length; u++)
                  fh(b[u], p);
            } catch (R) {
              Ae(i, i.return, R);
            }
          }
          n && d & 64 && Tf(o), Ki(o, o.return);
          break;
        case 27:
          Rf(o);
        case 26:
        case 5:
          fn(u, o, n), n && i === null && d & 4 && xf(o), Ki(o, o.return);
          break;
        case 12:
          fn(u, o, n);
          break;
        case 31:
          fn(u, o, n), n && d & 4 && Uf(u, o);
          break;
        case 13:
          fn(u, o, n), n && d & 4 && Df(u, o);
          break;
        case 22:
          o.memoizedState === null && fn(u, o, n), Ki(o, o.return);
          break;
        case 30:
          break;
        default:
          fn(u, o, n);
      }
      t = t.sibling;
    }
  }
  function Lu(e, t) {
    var n = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && ji(n));
  }
  function Bu(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && ji(e));
  }
  function $t(e, t, n, i) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Lf(e, t, n, i), (t = t.sibling);
  }
  function Lf(e, t, n, i) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        $t(e, t, n, i), u & 2048 && Vi(9, t);
        break;
      case 1:
        $t(e, t, n, i);
        break;
      case 3:
        $t(e, t, n, i),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && ji(e)));
        break;
      case 12:
        if (u & 2048) {
          $t(e, t, n, i), (e = t.stateNode);
          try {
            var o = t.memoizedProps,
              d = o.id,
              p = o.onPostCommit;
            typeof p == "function" &&
              p(
                d,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (b) {
            Ae(t, t.return, b);
          }
        } else $t(e, t, n, i);
        break;
      case 31:
        $t(e, t, n, i);
        break;
      case 13:
        $t(e, t, n, i);
        break;
      case 23:
        break;
      case 22:
        (o = t.stateNode),
          (d = t.alternate),
          t.memoizedState !== null
            ? o._visibility & 2
              ? $t(e, t, n, i)
              : Yi(e, t)
            : o._visibility & 2
            ? $t(e, t, n, i)
            : ((o._visibility |= 2),
              Ga(e, t, n, i, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Lu(d, t);
        break;
      case 24:
        $t(e, t, n, i), u & 2048 && Bu(t.alternate, t);
        break;
      default:
        $t(e, t, n, i);
    }
  }
  function Ga(e, t, n, i, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var o = e,
        d = t,
        p = n,
        b = i,
        R = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          Ga(o, d, p, b, u), Vi(8, d);
          break;
        case 23:
          break;
        case 22:
          var U = d.stateNode;
          d.memoizedState !== null
            ? U._visibility & 2
              ? Ga(o, d, p, b, u)
              : Yi(o, d)
            : ((U._visibility |= 2), Ga(o, d, p, b, u)),
            u && R & 2048 && Lu(d.alternate, d);
          break;
        case 24:
          Ga(o, d, p, b, u), u && R & 2048 && Bu(d.alternate, d);
          break;
        default:
          Ga(o, d, p, b, u);
      }
      t = t.sibling;
    }
  }
  function Yi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          i = t,
          u = i.flags;
        switch (i.tag) {
          case 22:
            Yi(n, i), u & 2048 && Lu(i.alternate, i);
            break;
          case 24:
            Yi(n, i), u & 2048 && Bu(i.alternate, i);
            break;
          default:
            Yi(n, i);
        }
        t = t.sibling;
      }
  }
  var Xi = 8192;
  function Va(e, t, n) {
    if (e.subtreeFlags & Xi)
      for (e = e.child; e !== null; ) Bf(e, t, n), (e = e.sibling);
  }
  function Bf(e, t, n) {
    switch (e.tag) {
      case 26:
        Va(e, t, n),
          e.flags & Xi &&
            e.memoizedState !== null &&
            gv(n, Ht, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Va(e, t, n);
        break;
      case 3:
      case 4:
        var i = Ht;
        (Ht = Ol(e.stateNode.containerInfo)), Va(e, t, n), (Ht = i);
        break;
      case 22:
        e.memoizedState === null &&
          ((i = e.alternate),
          i !== null && i.memoizedState !== null
            ? ((i = Xi), (Xi = 16777216), Va(e, t, n), (Xi = i))
            : Va(e, t, n));
        break;
      default:
        Va(e, t, n);
    }
  }
  function qf(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Ji(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (We = i), $f(i, e);
        }
      qf(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Hf(e), (e = e.sibling);
  }
  function Hf(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ji(e), e.flags & 2048 && Nn(9, e, e.return);
        break;
      case 3:
        Ji(e);
        break;
      case 12:
        Ji(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), ml(e))
          : Ji(e);
        break;
      default:
        Ji(e);
    }
  }
  function ml(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (We = i), $f(i, e);
        }
      qf(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Nn(8, t, t.return), ml(t);
          break;
        case 22:
          (n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), ml(t));
          break;
        default:
          ml(t);
      }
      e = e.sibling;
    }
  }
  function $f(e, t) {
    for (; We !== null; ) {
      var n = We;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Nn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          ji(n.memoizedState.cache);
      }
      if (((i = n.child), i !== null)) (i.return = n), (We = i);
      else
        e: for (n = e; We !== null; ) {
          i = We;
          var u = i.sibling,
            o = i.return;
          if ((Nf(i), i === n)) {
            We = null;
            break e;
          }
          if (u !== null) {
            (u.return = o), (We = u);
            break e;
          }
          We = o;
        }
    }
  }
  var j0 = {
      getCacheForType: function (e) {
        var t = tt($e),
          n = t.data.get(e);
        return n === void 0 && ((n = e()), t.data.set(e, n)), n;
      },
      cacheSignal: function () {
        return tt($e).controller.signal;
      },
    },
    N0 = typeof WeakMap == "function" ? WeakMap : Map,
    Ee = 0,
    Ce = null,
    me = null,
    pe = 0,
    Te = 0,
    Tt = null,
    kn = !1,
    Ka = !1,
    qu = !1,
    dn = 0,
    Me = 0,
    Un = 0,
    ca = 0,
    Hu = 0,
    At = 0,
    Ya = 0,
    Qi = null,
    mt = null,
    $u = !1,
    gl = 0,
    Gf = 0,
    vl = 1 / 0,
    pl = null,
    Dn = null,
    Ie = 0,
    zn = null,
    Xa = null,
    mn = 0,
    Gu = 0,
    Vu = null,
    Vf = null,
    Ii = 0,
    Ku = null;
  function xt() {
    return (Ee & 2) !== 0 && pe !== 0 ? pe & -pe : k.T !== null ? Zu() : ic();
  }
  function Kf() {
    if (At === 0)
      if ((pe & 536870912) === 0 || be) {
        var e = As;
        (As <<= 1), (As & 3932160) === 0 && (As = 262144), (At = e);
      } else At = 536870912;
    return (e = St.current), e !== null && (e.flags |= 32), At;
  }
  function gt(e, t, n) {
    ((e === Ce && (Te === 2 || Te === 9)) || e.cancelPendingCommit !== null) &&
      (Ja(e, 0), Mn(e, pe, At, !1)),
      vi(e, n),
      ((Ee & 2) === 0 || e !== Ce) &&
        (e === Ce &&
          ((Ee & 2) === 0 && (ca |= n), Me === 4 && Mn(e, pe, At, !1)),
        Jt(e));
  }
  function Yf(e, t, n) {
    if ((Ee & 6) !== 0) throw Error(r(327));
    var i = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || gi(e, t),
      u = i ? D0(e, t) : Xu(e, t, !0),
      o = i;
    do {
      if (u === 0) {
        Ka && !i && Mn(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), o && !k0(n))) {
          (u = Xu(e, t, !1)), (o = !1);
          continue;
        }
        if (u === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var d = 0;
          else
            (d = e.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0);
          if (d !== 0) {
            t = d;
            e: {
              var p = e;
              u = Qi;
              var b = p.current.memoizedState.isDehydrated;
              if ((b && (Ja(p, d).flags |= 256), (d = Xu(p, d, !1)), d !== 2)) {
                if (qu && !b) {
                  (p.errorRecoveryDisabledLanes |= o), (ca |= o), (u = 4);
                  break e;
                }
                (o = mt),
                  (mt = u),
                  o !== null && (mt === null ? (mt = o) : mt.push.apply(mt, o));
              }
              u = d;
            }
            if (((o = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Ja(e, 0), Mn(e, t, 0, !0);
          break;
        }
        e: {
          switch (((i = e), (o = u), o)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Mn(i, t, At, !kn);
              break e;
            case 2:
              mt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && ((u = gl + 300 - pt()), 10 < u)) {
            if ((Mn(i, t, At, !kn), Os(i, 0, !0) !== 0)) break e;
            (mn = t),
              (i.timeoutHandle = Sd(
                Xf.bind(
                  null,
                  i,
                  n,
                  mt,
                  pl,
                  $u,
                  t,
                  At,
                  ca,
                  Ya,
                  kn,
                  o,
                  "Throttled",
                  -0,
                  0
                ),
                u
              ));
            break e;
          }
          Xf(i, n, mt, pl, $u, t, At, ca, Ya, kn, o, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Jt(e);
  }
  function Xf(e, t, n, i, u, o, d, p, b, R, U, M, C, N) {
    if (
      ((e.timeoutHandle = -1),
      (M = t.subtreeFlags),
      M & 8192 || (M & 16785408) === 16785408)
    ) {
      (M = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Wt,
      }),
        Bf(t, o, M);
      var Z =
        (o & 62914560) === o ? gl - pt() : (o & 4194048) === o ? Gf - pt() : 0;
      if (((Z = vv(M, Z)), Z !== null)) {
        (mn = o),
          (e.cancelPendingCommit = Z(
            ed.bind(null, e, t, o, n, i, u, d, p, b, U, M, null, C, N)
          )),
          Mn(e, o, d, !R);
        return;
      }
    }
    ed(e, t, o, n, i, u, d, p, b);
  }
  function k0(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var i = 0; i < n.length; i++) {
          var u = n[i],
            o = u.getSnapshot;
          u = u.value;
          try {
            if (!_t(o(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Mn(e, t, n, i) {
    (t &= ~Hu),
      (t &= ~ca),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      i && (e.warmLanes |= t),
      (i = e.expirationTimes);
    for (var u = t; 0 < u; ) {
      var o = 31 - bt(u),
        d = 1 << o;
      (i[o] = -1), (u &= ~d);
    }
    n !== 0 && tc(e, n, t);
  }
  function yl() {
    return (Ee & 6) === 0 ? (Zi(0), !1) : !0;
  }
  function Yu() {
    if (me !== null) {
      if (Te === 0) var e = me.return;
      else (e = me), (nn = ta = null), ru(e), (La = null), (ki = 0), (e = me);
      for (; e !== null; ) Ef(e.alternate, e), (e = e.return);
      me = null;
    }
  }
  function Ja(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && ((e.timeoutHandle = -1), W0(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (mn = 0),
      Yu(),
      (Ce = e),
      (me = n = en(e.current, null)),
      (pe = t),
      (Te = 0),
      (Tt = null),
      (kn = !1),
      (Ka = gi(e, t)),
      (qu = !1),
      (Ya = At = Hu = ca = Un = Me = 0),
      (mt = Qi = null),
      ($u = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var u = 31 - bt(i),
          o = 1 << u;
        (t |= e[u]), (i &= ~o);
      }
    return (dn = t), qs(), n;
  }
  function Jf(e, t) {
    (he = null),
      (k.H = Hi),
      t === Ma || t === Js
        ? ((t = uh()), (Te = 3))
        : t === Ir
        ? ((t = uh()), (Te = 4))
        : (Te =
            t === Eu
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (Tt = t),
      me === null && ((Me = 1), rl(e, kt(t, e.current)));
  }
  function Qf() {
    var e = St.current;
    return e === null
      ? !0
      : (pe & 4194048) === pe
      ? Mt === null
      : (pe & 62914560) === pe || (pe & 536870912) !== 0
      ? e === Mt
      : !1;
  }
  function If() {
    var e = k.H;
    return (k.H = Hi), e === null ? Hi : e;
  }
  function Zf() {
    var e = k.A;
    return (k.A = j0), e;
  }
  function bl() {
    (Me = 4),
      kn || ((pe & 4194048) !== pe && St.current !== null) || (Ka = !0),
      ((Un & 134217727) === 0 && (ca & 134217727) === 0) ||
        Ce === null ||
        Mn(Ce, pe, At, !1);
  }
  function Xu(e, t, n) {
    var i = Ee;
    Ee |= 2;
    var u = If(),
      o = Zf();
    (Ce !== e || pe !== t) && ((pl = null), Ja(e, t)), (t = !1);
    var d = Me;
    e: do
      try {
        if (Te !== 0 && me !== null) {
          var p = me,
            b = Tt;
          switch (Te) {
            case 8:
              Yu(), (d = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              St.current === null && (t = !0);
              var R = Te;
              if (((Te = 0), (Tt = null), Qa(e, p, b, R), n && Ka)) {
                d = 0;
                break e;
              }
              break;
            default:
              (R = Te), (Te = 0), (Tt = null), Qa(e, p, b, R);
          }
        }
        U0(), (d = Me);
        break;
      } catch (U) {
        Jf(e, U);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (nn = ta = null),
      (Ee = i),
      (k.H = u),
      (k.A = o),
      me === null && ((Ce = null), (pe = 0), qs()),
      d
    );
  }
  function U0() {
    for (; me !== null; ) Pf(me);
  }
  function D0(e, t) {
    var n = Ee;
    Ee |= 2;
    var i = If(),
      u = Zf();
    Ce !== e || pe !== t
      ? ((pl = null), (vl = pt() + 500), Ja(e, t))
      : (Ka = gi(e, t));
    e: do
      try {
        if (Te !== 0 && me !== null) {
          t = me;
          var o = Tt;
          t: switch (Te) {
            case 1:
              (Te = 0), (Tt = null), Qa(e, t, o, 1);
              break;
            case 2:
            case 9:
              if (lh(o)) {
                (Te = 0), (Tt = null), Wf(t);
                break;
              }
              (t = function () {
                (Te !== 2 && Te !== 9) || Ce !== e || (Te = 7), Jt(e);
              }),
                o.then(t, t);
              break e;
            case 3:
              Te = 7;
              break e;
            case 4:
              Te = 5;
              break e;
            case 7:
              lh(o)
                ? ((Te = 0), (Tt = null), Wf(t))
                : ((Te = 0), (Tt = null), Qa(e, t, o, 7));
              break;
            case 5:
              var d = null;
              switch (me.tag) {
                case 26:
                  d = me.memoizedState;
                case 5:
                case 27:
                  var p = me;
                  if (d ? Ld(d) : p.stateNode.complete) {
                    (Te = 0), (Tt = null);
                    var b = p.sibling;
                    if (b !== null) me = b;
                    else {
                      var R = p.return;
                      R !== null ? ((me = R), _l(R)) : (me = null);
                    }
                    break t;
                  }
              }
              (Te = 0), (Tt = null), Qa(e, t, o, 5);
              break;
            case 6:
              (Te = 0), (Tt = null), Qa(e, t, o, 6);
              break;
            case 8:
              Yu(), (Me = 6);
              break e;
            default:
              throw Error(r(462));
          }
        }
        z0();
        break;
      } catch (U) {
        Jf(e, U);
      }
    while (!0);
    return (
      (nn = ta = null),
      (k.H = i),
      (k.A = u),
      (Ee = n),
      me !== null ? 0 : ((Ce = null), (pe = 0), qs(), Me)
    );
  }
  function z0() {
    for (; me !== null && !ig(); ) Pf(me);
  }
  function Pf(e) {
    var t = wf(e.alternate, e, dn);
    (e.memoizedProps = e.pendingProps), t === null ? _l(e) : (me = t);
  }
  function Wf(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = gf(n, t, t.pendingProps, t.type, void 0, pe);
        break;
      case 11:
        t = gf(n, t, t.pendingProps, t.type.render, t.ref, pe);
        break;
      case 5:
        ru(t);
      default:
        Ef(n, t), (t = me = Ic(t, dn)), (t = wf(n, t, dn));
    }
    (e.memoizedProps = e.pendingProps), t === null ? _l(e) : (me = t);
  }
  function Qa(e, t, n, i) {
    (nn = ta = null), ru(t), (La = null), (ki = 0);
    var u = t.return;
    try {
      if (E0(e, u, t, n, pe)) {
        (Me = 1), rl(e, kt(n, e.current)), (me = null);
        return;
      }
    } catch (o) {
      if (u !== null) throw ((me = u), o);
      (Me = 1), rl(e, kt(n, e.current)), (me = null);
      return;
    }
    t.flags & 32768
      ? (be || i === 1
          ? (e = !0)
          : Ka || (pe & 536870912) !== 0
          ? (e = !1)
          : ((kn = e = !0),
            (i === 2 || i === 9 || i === 3 || i === 6) &&
              ((i = St.current),
              i !== null && i.tag === 13 && (i.flags |= 16384))),
        Ff(t, e))
      : _l(t);
  }
  function _l(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Ff(t, kn);
        return;
      }
      e = t.return;
      var n = x0(t.alternate, t, dn);
      if (n !== null) {
        me = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        me = t;
        return;
      }
      me = t = e;
    } while (t !== null);
    Me === 0 && (Me = 5);
  }
  function Ff(e, t) {
    do {
      var n = O0(e.alternate, e);
      if (n !== null) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        me = e;
        return;
      }
      me = e = n;
    } while (e !== null);
    (Me = 6), (me = null);
  }
  function ed(e, t, n, i, u, o, d, p, b) {
    e.cancelPendingCommit = null;
    do wl();
    while (Ie !== 0);
    if ((Ee & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (
        ((o = t.lanes | t.childLanes),
        (o |= Dr),
        mg(e, n, o, d, p, b),
        e === Ce && ((me = Ce = null), (pe = 0)),
        (Xa = t),
        (zn = e),
        (mn = n),
        (Gu = o),
        (Vu = u),
        (Vf = i),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            q0(Es, function () {
              return sd(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (i = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || i)
      ) {
        (i = k.T), (k.T = null), (u = $.p), ($.p = 2), (d = Ee), (Ee |= 4);
        try {
          R0(e, t, n);
        } finally {
          (Ee = d), ($.p = u), (k.T = i);
        }
      }
      (Ie = 1), td(), nd(), ad();
    }
  }
  function td() {
    if (Ie === 1) {
      Ie = 0;
      var e = zn,
        t = Xa,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        (n = k.T), (k.T = null);
        var i = $.p;
        $.p = 2;
        var u = Ee;
        Ee |= 4;
        try {
          zf(t, e);
          var o = io,
            d = Hc(e.containerInfo),
            p = o.focusedElem,
            b = o.selectionRange;
          if (
            d !== p &&
            p &&
            p.ownerDocument &&
            qc(p.ownerDocument.documentElement, p)
          ) {
            if (b !== null && Cr(p)) {
              var R = b.start,
                U = b.end;
              if ((U === void 0 && (U = R), "selectionStart" in p))
                (p.selectionStart = R),
                  (p.selectionEnd = Math.min(U, p.value.length));
              else {
                var M = p.ownerDocument || document,
                  C = (M && M.defaultView) || window;
                if (C.getSelection) {
                  var N = C.getSelection(),
                    Z = p.textContent.length,
                    le = Math.min(b.start, Z),
                    Re = b.end === void 0 ? le : Math.min(b.end, Z);
                  !N.extend && le > Re && ((d = Re), (Re = le), (le = d));
                  var A = Bc(p, le),
                    E = Bc(p, Re);
                  if (
                    A &&
                    E &&
                    (N.rangeCount !== 1 ||
                      N.anchorNode !== A.node ||
                      N.anchorOffset !== A.offset ||
                      N.focusNode !== E.node ||
                      N.focusOffset !== E.offset)
                  ) {
                    var O = M.createRange();
                    O.setStart(A.node, A.offset),
                      N.removeAllRanges(),
                      le > Re
                        ? (N.addRange(O), N.extend(E.node, E.offset))
                        : (O.setEnd(E.node, E.offset), N.addRange(O));
                  }
                }
              }
            }
            for (M = [], N = p; (N = N.parentNode); )
              N.nodeType === 1 &&
                M.push({ element: N, left: N.scrollLeft, top: N.scrollTop });
            for (
              typeof p.focus == "function" && p.focus(), p = 0;
              p < M.length;
              p++
            ) {
              var D = M[p];
              (D.element.scrollLeft = D.left), (D.element.scrollTop = D.top);
            }
          }
          (Ul = !!ao), (io = ao = null);
        } finally {
          (Ee = u), ($.p = i), (k.T = n);
        }
      }
      (e.current = t), (Ie = 2);
    }
  }
  function nd() {
    if (Ie === 2) {
      Ie = 0;
      var e = zn,
        t = Xa,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        (n = k.T), (k.T = null);
        var i = $.p;
        $.p = 2;
        var u = Ee;
        Ee |= 4;
        try {
          jf(e, t.alternate, t);
        } finally {
          (Ee = u), ($.p = i), (k.T = n);
        }
      }
      Ie = 3;
    }
  }
  function ad() {
    if (Ie === 4 || Ie === 3) {
      (Ie = 0), sg();
      var e = zn,
        t = Xa,
        n = mn,
        i = Vf;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ie = 5)
        : ((Ie = 0), (Xa = zn = null), id(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (
        (u === 0 && (Dn = null),
        cr(n),
        (t = t.stateNode),
        yt && typeof yt.onCommitFiberRoot == "function")
      )
        try {
          yt.onCommitFiberRoot(mi, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        (t = k.T), (u = $.p), ($.p = 2), (k.T = null);
        try {
          for (var o = e.onRecoverableError, d = 0; d < i.length; d++) {
            var p = i[d];
            o(p.value, { componentStack: p.stack });
          }
        } finally {
          (k.T = t), ($.p = u);
        }
      }
      (mn & 3) !== 0 && wl(),
        Jt(e),
        (u = e.pendingLanes),
        (n & 261930) !== 0 && (u & 42) !== 0
          ? e === Ku
            ? Ii++
            : ((Ii = 0), (Ku = e))
          : (Ii = 0),
        Zi(0);
    }
  }
  function id(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), ji(t)));
  }
  function wl() {
    return td(), nd(), ad(), sd();
  }
  function sd() {
    if (Ie !== 5) return !1;
    var e = zn,
      t = Gu;
    Gu = 0;
    var n = cr(mn),
      i = k.T,
      u = $.p;
    try {
      ($.p = 32 > n ? 32 : n), (k.T = null), (n = Vu), (Vu = null);
      var o = zn,
        d = mn;
      if (((Ie = 0), (Xa = zn = null), (mn = 0), (Ee & 6) !== 0))
        throw Error(r(331));
      var p = Ee;
      if (
        ((Ee |= 4),
        Hf(o.current),
        Lf(o, o.current, d, n),
        (Ee = p),
        Zi(0, !1),
        yt && typeof yt.onPostCommitFiberRoot == "function")
      )
        try {
          yt.onPostCommitFiberRoot(mi, o);
        } catch {}
      return !0;
    } finally {
      ($.p = u), (k.T = i), id(e, t);
    }
  }
  function ld(e, t, n) {
    (t = kt(n, t)),
      (t = Su(e.stateNode, t, 2)),
      (e = Rn(e, t, 2)),
      e !== null && (vi(e, 2), Jt(e));
  }
  function Ae(e, t, n) {
    if (e.tag === 3) ld(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ld(t, e, n);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Dn === null || !Dn.has(i)))
          ) {
            (e = kt(n, e)),
              (n = rf(2)),
              (i = Rn(t, n, 2)),
              i !== null && (uf(n, i, t, e), vi(i, 2), Jt(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ju(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new N0();
      var u = new Set();
      i.set(t, u);
    } else (u = i.get(t)), u === void 0 && ((u = new Set()), i.set(t, u));
    u.has(n) ||
      ((qu = !0), u.add(n), (e = M0.bind(null, e, t, n)), t.then(e, e));
  }
  function M0(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Ce === e &&
        (pe & n) === n &&
        (Me === 4 || (Me === 3 && (pe & 62914560) === pe && 300 > pt() - gl)
          ? (Ee & 2) === 0 && Ja(e, 0)
          : (Hu |= n),
        Ya === pe && (Ya = 0)),
      Jt(e);
  }
  function rd(e, t) {
    t === 0 && (t = ec()), (e = Wn(e, t)), e !== null && (vi(e, t), Jt(e));
  }
  function L0(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), rd(e, n);
  }
  function B0(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var i = e.stateNode,
          u = e.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      case 22:
        i = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    i !== null && i.delete(t), rd(e, n);
  }
  function q0(e, t) {
    return lr(e, t);
  }
  var Sl = null,
    Ia = null,
    Qu = !1,
    El = !1,
    Iu = !1,
    Ln = 0;
  function Jt(e) {
    e !== Ia &&
      e.next === null &&
      (Ia === null ? (Sl = Ia = e) : (Ia = Ia.next = e)),
      (El = !0),
      Qu || ((Qu = !0), $0());
  }
  function Zi(e, t) {
    if (!Iu && El) {
      Iu = !0;
      do
        for (var n = !1, i = Sl; i !== null; ) {
          if (e !== 0) {
            var u = i.pendingLanes;
            if (u === 0) var o = 0;
            else {
              var d = i.suspendedLanes,
                p = i.pingedLanes;
              (o = (1 << (31 - bt(42 | e) + 1)) - 1),
                (o &= u & ~(d & ~p)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0);
            }
            o !== 0 && ((n = !0), hd(i, o));
          } else
            (o = pe),
              (o = Os(
                i,
                i === Ce ? o : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1
              )),
              (o & 3) === 0 || gi(i, o) || ((n = !0), hd(i, o));
          i = i.next;
        }
      while (n);
      Iu = !1;
    }
  }
  function H0() {
    ud();
  }
  function ud() {
    El = Qu = !1;
    var e = 0;
    Ln !== 0 && P0() && (e = Ln);
    for (var t = pt(), n = null, i = Sl; i !== null; ) {
      var u = i.next,
        o = od(i, t);
      o === 0
        ? ((i.next = null),
          n === null ? (Sl = u) : (n.next = u),
          u === null && (Ia = n))
        : ((n = i), (e !== 0 || (o & 3) !== 0) && (El = !0)),
        (i = u);
    }
    (Ie !== 0 && Ie !== 5) || Zi(e), Ln !== 0 && (Ln = 0);
  }
  function od(e, t) {
    for (
      var n = e.suspendedLanes,
        i = e.pingedLanes,
        u = e.expirationTimes,
        o = e.pendingLanes & -62914561;
      0 < o;

    ) {
      var d = 31 - bt(o),
        p = 1 << d,
        b = u[d];
      b === -1
        ? ((p & n) === 0 || (p & i) !== 0) && (u[d] = dg(p, t))
        : b <= t && (e.expiredLanes |= p),
        (o &= ~p);
    }
    if (
      ((t = Ce),
      (n = pe),
      (n = Os(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (i = e.callbackNode),
      n === 0 ||
        (e === t && (Te === 2 || Te === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && rr(i),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || gi(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((i !== null && rr(i), cr(n))) {
        case 2:
        case 8:
          n = Wo;
          break;
        case 32:
          n = Es;
          break;
        case 268435456:
          n = Fo;
          break;
        default:
          n = Es;
      }
      return (
        (i = cd.bind(null, e)),
        (n = lr(n, i)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      i !== null && i !== null && rr(i),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function cd(e, t) {
    if (Ie !== 0 && Ie !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var n = e.callbackNode;
    if (wl() && e.callbackNode !== n) return null;
    var i = pe;
    return (
      (i = Os(
        e,
        e === Ce ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      i === 0
        ? null
        : (Yf(e, i, t),
          od(e, pt()),
          e.callbackNode != null && e.callbackNode === n
            ? cd.bind(null, e)
            : null)
    );
  }
  function hd(e, t) {
    if (wl()) return null;
    Yf(e, t, !0);
  }
  function $0() {
    F0(function () {
      (Ee & 6) !== 0 ? lr(Po, H0) : ud();
    });
  }
  function Zu() {
    if (Ln === 0) {
      var e = Da;
      e === 0 && ((e = Ts), (Ts <<= 1), (Ts & 261888) === 0 && (Ts = 256)),
        (Ln = e);
    }
    return Ln;
  }
  function fd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Ns("" + e);
  }
  function dd(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function G0(e, t, n, i, u) {
    if (t === "submit" && n && n.stateNode === u) {
      var o = fd((u[ot] || null).action),
        d = i.submitter;
      d &&
        ((t = (t = d[ot] || null)
          ? fd(t.formAction)
          : d.getAttribute("formAction")),
        t !== null && ((o = t), (d = null)));
      var p = new zs("action", "action", null, i, u);
      e.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (Ln !== 0) {
                  var b = d ? dd(u, d) : new FormData(u);
                  vu(
                    n,
                    { pending: !0, data: b, method: u.method, action: o },
                    null,
                    b
                  );
                }
              } else
                typeof o == "function" &&
                  (p.preventDefault(),
                  (b = d ? dd(u, d) : new FormData(u)),
                  vu(
                    n,
                    { pending: !0, data: b, method: u.method, action: o },
                    o,
                    b
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Pu = 0; Pu < Ur.length; Pu++) {
    var Wu = Ur[Pu],
      V0 = Wu.toLowerCase(),
      K0 = Wu[0].toUpperCase() + Wu.slice(1);
    qt(V0, "on" + K0);
  }
  qt(Vc, "onAnimationEnd"),
    qt(Kc, "onAnimationIteration"),
    qt(Yc, "onAnimationStart"),
    qt("dblclick", "onDoubleClick"),
    qt("focusin", "onFocus"),
    qt("focusout", "onBlur"),
    qt(l0, "onTransitionRun"),
    qt(r0, "onTransitionStart"),
    qt(u0, "onTransitionCancel"),
    qt(Xc, "onTransitionEnd"),
    _a("onMouseEnter", ["mouseout", "mouseover"]),
    _a("onMouseLeave", ["mouseout", "mouseover"]),
    _a("onPointerEnter", ["pointerout", "pointerover"]),
    _a("onPointerLeave", ["pointerout", "pointerover"]),
    Qn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Qn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Qn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Qn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Qn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Pi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Y0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Pi)
    );
  function md(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n],
        u = i.event;
      i = i.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var d = i.length - 1; 0 <= d; d--) {
            var p = i[d],
              b = p.instance,
              R = p.currentTarget;
            if (((p = p.listener), b !== o && u.isPropagationStopped()))
              break e;
            (o = p), (u.currentTarget = R);
            try {
              o(u);
            } catch (U) {
              Bs(U);
            }
            (u.currentTarget = null), (o = b);
          }
        else
          for (d = 0; d < i.length; d++) {
            if (
              ((p = i[d]),
              (b = p.instance),
              (R = p.currentTarget),
              (p = p.listener),
              b !== o && u.isPropagationStopped())
            )
              break e;
            (o = p), (u.currentTarget = R);
            try {
              o(u);
            } catch (U) {
              Bs(U);
            }
            (u.currentTarget = null), (o = b);
          }
      }
    }
  }
  function ge(e, t) {
    var n = t[hr];
    n === void 0 && (n = t[hr] = new Set());
    var i = e + "__bubble";
    n.has(i) || (gd(t, e, 2, !1), n.add(i));
  }
  function Fu(e, t, n) {
    var i = 0;
    t && (i |= 4), gd(n, e, i, t);
  }
  var Tl = "_reactListening" + Math.random().toString(36).slice(2);
  function eo(e) {
    if (!e[Tl]) {
      (e[Tl] = !0),
        rc.forEach(function (n) {
          n !== "selectionchange" && (Y0.has(n) || Fu(n, !1, e), Fu(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Tl] || ((t[Tl] = !0), Fu("selectionchange", !1, t));
    }
  }
  function gd(e, t, n, i) {
    switch (Kd(t)) {
      case 2:
        var u = bv;
        break;
      case 8:
        u = _v;
        break;
      default:
        u = vo;
    }
    (n = u.bind(null, t, n, e)),
      (u = void 0),
      !_r ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      i
        ? u !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: u })
          : e.addEventListener(t, n, !0)
        : u !== void 0
        ? e.addEventListener(t, n, { passive: u })
        : e.addEventListener(t, n, !1);
  }
  function to(e, t, n, i, u) {
    var o = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return;
        var d = i.tag;
        if (d === 3 || d === 4) {
          var p = i.stateNode.containerInfo;
          if (p === u) break;
          if (d === 4)
            for (d = i.return; d !== null; ) {
              var b = d.tag;
              if ((b === 3 || b === 4) && d.stateNode.containerInfo === u)
                return;
              d = d.return;
            }
          for (; p !== null; ) {
            if (((d = pa(p)), d === null)) return;
            if (((b = d.tag), b === 5 || b === 6 || b === 26 || b === 27)) {
              i = o = d;
              continue e;
            }
            p = p.parentNode;
          }
        }
        i = i.return;
      }
    bc(function () {
      var R = o,
        U = yr(n),
        M = [];
      e: {
        var C = Jc.get(e);
        if (C !== void 0) {
          var N = zs,
            Z = e;
          switch (e) {
            case "keypress":
              if (Us(n) === 0) break e;
            case "keydown":
            case "keyup":
              N = Bg;
              break;
            case "focusin":
              (Z = "focus"), (N = Tr);
              break;
            case "focusout":
              (Z = "blur"), (N = Tr);
              break;
            case "beforeblur":
            case "afterblur":
              N = Tr;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = Sc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = xg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = $g;
              break;
            case Vc:
            case Kc:
            case Yc:
              N = Cg;
              break;
            case Xc:
              N = Vg;
              break;
            case "scroll":
            case "scrollend":
              N = Tg;
              break;
            case "wheel":
              N = Yg;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = Ng;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Tc;
              break;
            case "toggle":
            case "beforetoggle":
              N = Jg;
          }
          var le = (t & 4) !== 0,
            Re = !le && (e === "scroll" || e === "scrollend"),
            A = le ? (C !== null ? C + "Capture" : null) : C;
          le = [];
          for (var E = R, O; E !== null; ) {
            var D = E;
            if (
              ((O = D.stateNode),
              (D = D.tag),
              (D !== 5 && D !== 26 && D !== 27) ||
                O === null ||
                A === null ||
                ((D = bi(E, A)), D != null && le.push(Wi(E, D, O))),
              Re)
            )
              break;
            E = E.return;
          }
          0 < le.length &&
            ((C = new N(C, Z, null, n, U)),
            M.push({ event: C, listeners: le }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((C = e === "mouseover" || e === "pointerover"),
            (N = e === "mouseout" || e === "pointerout"),
            C &&
              n !== pr &&
              (Z = n.relatedTarget || n.fromElement) &&
              (pa(Z) || Z[va]))
          )
            break e;
          if (
            (N || C) &&
            ((C =
              U.window === U
                ? U
                : (C = U.ownerDocument)
                ? C.defaultView || C.parentWindow
                : window),
            N
              ? ((Z = n.relatedTarget || n.toElement),
                (N = R),
                (Z = Z ? pa(Z) : null),
                Z !== null &&
                  ((Re = h(Z)),
                  (le = Z.tag),
                  Z !== Re || (le !== 5 && le !== 27 && le !== 6)) &&
                  (Z = null))
              : ((N = null), (Z = R)),
            N !== Z)
          ) {
            if (
              ((le = Sc),
              (D = "onMouseLeave"),
              (A = "onMouseEnter"),
              (E = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((le = Tc),
                (D = "onPointerLeave"),
                (A = "onPointerEnter"),
                (E = "pointer")),
              (Re = N == null ? C : yi(N)),
              (O = Z == null ? C : yi(Z)),
              (C = new le(D, E + "leave", N, n, U)),
              (C.target = Re),
              (C.relatedTarget = O),
              (D = null),
              pa(U) === R &&
                ((le = new le(A, E + "enter", Z, n, U)),
                (le.target = O),
                (le.relatedTarget = Re),
                (D = le)),
              (Re = D),
              N && Z)
            )
              t: {
                for (le = X0, A = N, E = Z, O = 0, D = A; D; D = le(D)) O++;
                D = 0;
                for (var ae = E; ae; ae = le(ae)) D++;
                for (; 0 < O - D; ) (A = le(A)), O--;
                for (; 0 < D - O; ) (E = le(E)), D--;
                for (; O--; ) {
                  if (A === E || (E !== null && A === E.alternate)) {
                    le = A;
                    break t;
                  }
                  (A = le(A)), (E = le(E));
                }
                le = null;
              }
            else le = null;
            N !== null && vd(M, C, N, le, !1),
              Z !== null && Re !== null && vd(M, Re, Z, le, !0);
          }
        }
        e: {
          if (
            ((C = R ? yi(R) : window),
            (N = C.nodeName && C.nodeName.toLowerCase()),
            N === "select" || (N === "input" && C.type === "file"))
          )
            var we = kc;
          else if (jc(C))
            if (Uc) we = a0;
            else {
              we = t0;
              var te = e0;
            }
          else
            (N = C.nodeName),
              !N ||
              N.toLowerCase() !== "input" ||
              (C.type !== "checkbox" && C.type !== "radio")
                ? R && vr(R.elementType) && (we = kc)
                : (we = n0);
          if (we && (we = we(e, R))) {
            Nc(M, we, n, U);
            break e;
          }
          te && te(e, C, R),
            e === "focusout" &&
              R &&
              C.type === "number" &&
              R.memoizedProps.value != null &&
              gr(C, "number", C.value);
        }
        switch (((te = R ? yi(R) : window), e)) {
          case "focusin":
            (jc(te) || te.contentEditable === "true") &&
              ((xa = te), (jr = R), (Oi = null));
            break;
          case "focusout":
            Oi = jr = xa = null;
            break;
          case "mousedown":
            Nr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Nr = !1), $c(M, n, U);
            break;
          case "selectionchange":
            if (s0) break;
          case "keydown":
          case "keyup":
            $c(M, n, U);
        }
        var fe;
        if (xr)
          e: {
            switch (e) {
              case "compositionstart":
                var ye = "onCompositionStart";
                break e;
              case "compositionend":
                ye = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ye = "onCompositionUpdate";
                break e;
            }
            ye = void 0;
          }
        else
          Aa
            ? Rc(e, n) && (ye = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (ye = "onCompositionStart");
        ye &&
          (Ac &&
            n.locale !== "ko" &&
            (Aa || ye !== "onCompositionStart"
              ? ye === "onCompositionEnd" && Aa && (fe = _c())
              : ((wn = U),
                (wr = "value" in wn ? wn.value : wn.textContent),
                (Aa = !0))),
          (te = Al(R, ye)),
          0 < te.length &&
            ((ye = new Ec(ye, e, null, n, U)),
            M.push({ event: ye, listeners: te }),
            fe
              ? (ye.data = fe)
              : ((fe = Cc(n)), fe !== null && (ye.data = fe)))),
          (fe = Ig ? Zg(e, n) : Pg(e, n)) &&
            ((ye = Al(R, "onBeforeInput")),
            0 < ye.length &&
              ((te = new Ec("onBeforeInput", "beforeinput", null, n, U)),
              M.push({ event: te, listeners: ye }),
              (te.data = fe))),
          G0(M, e, R, n, U);
      }
      md(M, t);
    });
  }
  function Wi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Al(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var u = e,
        o = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          o === null ||
          ((u = bi(e, n)),
          u != null && i.unshift(Wi(e, u, o)),
          (u = bi(e, t)),
          u != null && i.push(Wi(e, u, o))),
        e.tag === 3)
      )
        return i;
      e = e.return;
    }
    return [];
  }
  function X0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function vd(e, t, n, i, u) {
    for (var o = t._reactName, d = []; n !== null && n !== i; ) {
      var p = n,
        b = p.alternate,
        R = p.stateNode;
      if (((p = p.tag), b !== null && b === i)) break;
      (p !== 5 && p !== 26 && p !== 27) ||
        R === null ||
        ((b = R),
        u
          ? ((R = bi(n, o)), R != null && d.unshift(Wi(n, R, b)))
          : u || ((R = bi(n, o)), R != null && d.push(Wi(n, R, b)))),
        (n = n.return);
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var J0 = /\r\n?/g,
    Q0 = /\u0000|\uFFFD/g;
  function pd(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        J0,
        `
`
      )
      .replace(Q0, "");
  }
  function yd(e, t) {
    return (t = pd(t)), pd(e) === t;
  }
  function Oe(e, t, n, i, u, o) {
    switch (n) {
      case "children":
        typeof i == "string"
          ? t === "body" || (t === "textarea" && i === "") || Sa(e, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            t !== "body" &&
            Sa(e, "" + i);
        break;
      case "className":
        Cs(e, "class", i);
        break;
      case "tabIndex":
        Cs(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Cs(e, n, i);
        break;
      case "style":
        pc(e, i, o);
        break;
      case "data":
        if (t !== "object") {
          Cs(e, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        (i = Ns("" + i)), e.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (t !== "input" && Oe(e, t, "name", u.name, u, null),
                Oe(e, t, "formEncType", u.formEncType, u, null),
                Oe(e, t, "formMethod", u.formMethod, u, null),
                Oe(e, t, "formTarget", u.formTarget, u, null))
              : (Oe(e, t, "encType", u.encType, u, null),
                Oe(e, t, "method", u.method, u, null),
                Oe(e, t, "target", u.target, u, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(n);
          break;
        }
        (i = Ns("" + i)), e.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (e.onclick = Wt);
        break;
      case "onScroll":
        i != null && ge("scroll", e);
        break;
      case "onScrollEnd":
        i != null && ge("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((n = i.__html), n != null)) {
            if (u.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        e.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (n = Ns("" + i)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? e.setAttribute(n, "" + i)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0
          ? e.setAttribute(n, "")
          : i !== !1 &&
            i != null &&
            typeof i != "function" &&
            typeof i != "symbol"
          ? e.setAttribute(n, i)
          : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? e.setAttribute(n, i)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? e.removeAttribute(n)
          : e.setAttribute(n, i);
        break;
      case "popover":
        ge("beforetoggle", e), ge("toggle", e), Rs(e, "popover", i);
        break;
      case "xlinkActuate":
        Pt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        Pt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        Pt(e, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        Pt(e, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        Pt(e, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        Pt(e, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        Pt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        Pt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        Pt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        Rs(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Sg.get(n) || n), Rs(e, n, i));
    }
  }
  function no(e, t, n, i, u, o) {
    switch (n) {
      case "style":
        pc(e, i, o);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((n = i.__html), n != null)) {
            if (u.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? Sa(e, i)
          : (typeof i == "number" || typeof i == "bigint") && Sa(e, "" + i);
        break;
      case "onScroll":
        i != null && ge("scroll", e);
        break;
      case "onScrollEnd":
        i != null && ge("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = Wt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!uc.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((u = n.endsWith("Capture")),
              (t = n.slice(2, u ? n.length - 7 : void 0)),
              (o = e[ot] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && e.removeEventListener(t, o, u),
              typeof i == "function")
            ) {
              typeof o != "function" &&
                o !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, i, u);
              break e;
            }
            n in e
              ? (e[n] = i)
              : i === !0
              ? e.setAttribute(n, "")
              : Rs(e, n, i);
          }
    }
  }
  function at(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ge("error", e), ge("load", e);
        var i = !1,
          u = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var d = n[o];
            if (d != null)
              switch (o) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  Oe(e, t, o, d, n, null);
              }
          }
        u && Oe(e, t, "srcSet", n.srcSet, n, null),
          i && Oe(e, t, "src", n.src, n, null);
        return;
      case "input":
        ge("invalid", e);
        var p = (o = d = u = null),
          b = null,
          R = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var U = n[i];
            if (U != null)
              switch (i) {
                case "name":
                  u = U;
                  break;
                case "type":
                  d = U;
                  break;
                case "checked":
                  b = U;
                  break;
                case "defaultChecked":
                  R = U;
                  break;
                case "value":
                  o = U;
                  break;
                case "defaultValue":
                  p = U;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null) throw Error(r(137, t));
                  break;
                default:
                  Oe(e, t, i, U, n, null);
              }
          }
        dc(e, o, p, b, R, d, u, !1);
        return;
      case "select":
        ge("invalid", e), (i = d = o = null);
        for (u in n)
          if (n.hasOwnProperty(u) && ((p = n[u]), p != null))
            switch (u) {
              case "value":
                o = p;
                break;
              case "defaultValue":
                d = p;
                break;
              case "multiple":
                i = p;
              default:
                Oe(e, t, u, p, n, null);
            }
        (t = o),
          (n = d),
          (e.multiple = !!i),
          t != null ? wa(e, !!i, t, !1) : n != null && wa(e, !!i, n, !0);
        return;
      case "textarea":
        ge("invalid", e), (o = u = i = null);
        for (d in n)
          if (n.hasOwnProperty(d) && ((p = n[d]), p != null))
            switch (d) {
              case "value":
                i = p;
                break;
              case "defaultValue":
                u = p;
                break;
              case "children":
                o = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(r(91));
                break;
              default:
                Oe(e, t, d, p, n, null);
            }
        gc(e, i, u, o);
        return;
      case "option":
        for (b in n)
          if (n.hasOwnProperty(b) && ((i = n[b]), i != null))
            switch (b) {
              case "selected":
                e.selected =
                  i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Oe(e, t, b, i, n, null);
            }
        return;
      case "dialog":
        ge("beforetoggle", e), ge("toggle", e), ge("cancel", e), ge("close", e);
        break;
      case "iframe":
      case "object":
        ge("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Pi.length; i++) ge(Pi[i], e);
        break;
      case "image":
        ge("error", e), ge("load", e);
        break;
      case "details":
        ge("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ge("error", e), ge("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (R in n)
          if (n.hasOwnProperty(R) && ((i = n[R]), i != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Oe(e, t, R, i, n, null);
            }
        return;
      default:
        if (vr(t)) {
          for (U in n)
            n.hasOwnProperty(U) &&
              ((i = n[U]), i !== void 0 && no(e, t, U, i, n, void 0));
          return;
        }
    }
    for (p in n)
      n.hasOwnProperty(p) && ((i = n[p]), i != null && Oe(e, t, p, i, n, null));
  }
  function I0(e, t, n, i) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          o = null,
          d = null,
          p = null,
          b = null,
          R = null,
          U = null;
        for (N in n) {
          var M = n[N];
          if (n.hasOwnProperty(N) && M != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = M;
              default:
                i.hasOwnProperty(N) || Oe(e, t, N, null, i, M);
            }
        }
        for (var C in i) {
          var N = i[C];
          if (((M = n[C]), i.hasOwnProperty(C) && (N != null || M != null)))
            switch (C) {
              case "type":
                o = N;
                break;
              case "name":
                u = N;
                break;
              case "checked":
                R = N;
                break;
              case "defaultChecked":
                U = N;
                break;
              case "value":
                d = N;
                break;
              case "defaultValue":
                p = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(r(137, t));
                break;
              default:
                N !== M && Oe(e, t, C, N, i, M);
            }
        }
        mr(e, d, p, b, R, U, o, u);
        return;
      case "select":
        N = d = p = C = null;
        for (o in n)
          if (((b = n[o]), n.hasOwnProperty(o) && b != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                N = b;
              default:
                i.hasOwnProperty(o) || Oe(e, t, o, null, i, b);
            }
        for (u in i)
          if (
            ((o = i[u]),
            (b = n[u]),
            i.hasOwnProperty(u) && (o != null || b != null))
          )
            switch (u) {
              case "value":
                C = o;
                break;
              case "defaultValue":
                p = o;
                break;
              case "multiple":
                d = o;
              default:
                o !== b && Oe(e, t, u, o, i, b);
            }
        (t = p),
          (n = d),
          (i = N),
          C != null
            ? wa(e, !!n, C, !1)
            : !!i != !!n &&
              (t != null ? wa(e, !!n, t, !0) : wa(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        N = C = null;
        for (p in n)
          if (
            ((u = n[p]),
            n.hasOwnProperty(p) && u != null && !i.hasOwnProperty(p))
          )
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                Oe(e, t, p, null, i, u);
            }
        for (d in i)
          if (
            ((u = i[d]),
            (o = n[d]),
            i.hasOwnProperty(d) && (u != null || o != null))
          )
            switch (d) {
              case "value":
                C = u;
                break;
              case "defaultValue":
                N = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== o && Oe(e, t, d, u, i, o);
            }
        mc(e, C, N);
        return;
      case "option":
        for (var Z in n)
          if (
            ((C = n[Z]),
            n.hasOwnProperty(Z) && C != null && !i.hasOwnProperty(Z))
          )
            switch (Z) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Oe(e, t, Z, null, i, C);
            }
        for (b in i)
          if (
            ((C = i[b]),
            (N = n[b]),
            i.hasOwnProperty(b) && C !== N && (C != null || N != null))
          )
            switch (b) {
              case "selected":
                e.selected =
                  C && typeof C != "function" && typeof C != "symbol";
                break;
              default:
                Oe(e, t, b, C, i, N);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var le in n)
          (C = n[le]),
            n.hasOwnProperty(le) &&
              C != null &&
              !i.hasOwnProperty(le) &&
              Oe(e, t, le, null, i, C);
        for (R in i)
          if (
            ((C = i[R]),
            (N = n[R]),
            i.hasOwnProperty(R) && C !== N && (C != null || N != null))
          )
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(r(137, t));
                break;
              default:
                Oe(e, t, R, C, i, N);
            }
        return;
      default:
        if (vr(t)) {
          for (var Re in n)
            (C = n[Re]),
              n.hasOwnProperty(Re) &&
                C !== void 0 &&
                !i.hasOwnProperty(Re) &&
                no(e, t, Re, void 0, i, C);
          for (U in i)
            (C = i[U]),
              (N = n[U]),
              !i.hasOwnProperty(U) ||
                C === N ||
                (C === void 0 && N === void 0) ||
                no(e, t, U, C, i, N);
          return;
        }
    }
    for (var A in n)
      (C = n[A]),
        n.hasOwnProperty(A) &&
          C != null &&
          !i.hasOwnProperty(A) &&
          Oe(e, t, A, null, i, C);
    for (M in i)
      (C = i[M]),
        (N = n[M]),
        !i.hasOwnProperty(M) ||
          C === N ||
          (C == null && N == null) ||
          Oe(e, t, M, C, i, N);
  }
  function bd(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Z0() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType("resource"), i = 0;
        i < n.length;
        i++
      ) {
        var u = n[i],
          o = u.transferSize,
          d = u.initiatorType,
          p = u.duration;
        if (o && p && bd(d)) {
          for (d = 0, p = u.responseEnd, i += 1; i < n.length; i++) {
            var b = n[i],
              R = b.startTime;
            if (R > p) break;
            var U = b.transferSize,
              M = b.initiatorType;
            U &&
              bd(M) &&
              ((b = b.responseEnd), (d += U * (b < p ? 1 : (p - R) / (b - R))));
          }
          if ((--i, (t += (8 * (o + d)) / (u.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var ao = null,
    io = null;
  function xl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function _d(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function wd(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function so(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var lo = null;
  function P0() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === lo
        ? !1
        : ((lo = e), !0)
      : ((lo = null), !1);
  }
  var Sd = typeof setTimeout == "function" ? setTimeout : void 0,
    W0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ed = typeof Promise == "function" ? Promise : void 0,
    F0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ed < "u"
        ? function (e) {
            return Ed.resolve(null).then(e).catch(ev);
          }
        : Sd;
  function ev(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Bn(e) {
    return e === "head";
  }
  function Td(e, t) {
    var n = t,
      i = 0;
    do {
      var u = n.nextSibling;
      if ((e.removeChild(n), u && u.nodeType === 8))
        if (((n = u.data), n === "/$" || n === "/&")) {
          if (i === 0) {
            e.removeChild(u), Fa(t);
            return;
          }
          i--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          i++;
        else if (n === "html") Fi(e.ownerDocument.documentElement);
        else if (n === "head") {
          (n = e.ownerDocument.head), Fi(n);
          for (var o = n.firstChild; o; ) {
            var d = o.nextSibling,
              p = o.nodeName;
            o[pi] ||
              p === "SCRIPT" ||
              p === "STYLE" ||
              (p === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(o),
              (o = d);
          }
        } else n === "body" && Fi(e.ownerDocument.body);
      n = u;
    } while (n);
    Fa(t);
  }
  function Ad(e, t) {
    var n = e;
    e = 0;
    do {
      var i = n.nextSibling;
      if (
        (n.nodeType === 1
          ? t
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (t
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        i && i.nodeType === 8)
      )
        if (((n = i.data), n === "/$")) {
          if (e === 0) break;
          e--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || e++;
      n = i;
    } while (n);
  }
  function ro(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ro(n), fr(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function tv(e, t, n, i) {
    for (; e.nodeType === 1; ) {
      var u = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (i) {
        if (!e[pi])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((o = e.getAttribute("rel")),
                o === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== u.rel ||
                e.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                e.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((o = e.getAttribute("src")),
                (o !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  o &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var o = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === o) return e;
      } else return e;
      if (((e = Lt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function nv(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = Lt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function xd(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Lt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function uo(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function oo(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function av(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var i = function () {
        t(), n.removeEventListener("DOMContentLoaded", i);
      };
      n.addEventListener("DOMContentLoaded", i), (e._reactRetry = i);
    }
  }
  function Lt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var co = null;
  function Od(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return Lt(e.nextSibling);
          t--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Rd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else (n !== "/$" && n !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Cd(e, t, n) {
    switch (((t = xl(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(r(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(r(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function Fi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    fr(e);
  }
  var Bt = new Map(),
    jd = new Set();
  function Ol(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var gn = $.d;
  $.d = { f: iv, r: sv, D: lv, C: rv, L: uv, m: ov, X: hv, S: cv, M: fv };
  function iv() {
    var e = gn.f(),
      t = yl();
    return e || t;
  }
  function sv(e) {
    var t = ya(e);
    t !== null && t.tag === 5 && t.type === "form" ? Xh(t) : gn.r(e);
  }
  var Za = typeof document > "u" ? null : document;
  function Nd(e, t, n) {
    var i = Za;
    if (i && typeof t == "string" && t) {
      var u = jt(t);
      (u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof n == "string" && (u += '[crossorigin="' + n + '"]'),
        jd.has(u) ||
          (jd.add(u),
          (e = { rel: e, crossOrigin: n, href: t }),
          i.querySelector(u) === null &&
            ((t = i.createElement("link")),
            at(t, "link", e),
            Pe(t),
            i.head.appendChild(t)));
    }
  }
  function lv(e) {
    gn.D(e), Nd("dns-prefetch", e, null);
  }
  function rv(e, t) {
    gn.C(e, t), Nd("preconnect", e, t);
  }
  function uv(e, t, n) {
    gn.L(e, t, n);
    var i = Za;
    if (i && e && t) {
      var u = 'link[rel="preload"][as="' + jt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((u += '[imagesrcset="' + jt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (u += '[imagesizes="' + jt(n.imageSizes) + '"]'))
        : (u += '[href="' + jt(e) + '"]');
      var o = u;
      switch (t) {
        case "style":
          o = Pa(e);
          break;
        case "script":
          o = Wa(e);
      }
      Bt.has(o) ||
        ((e = _(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n
        )),
        Bt.set(o, e),
        i.querySelector(u) !== null ||
          (t === "style" && i.querySelector(es(o))) ||
          (t === "script" && i.querySelector(ts(o))) ||
          ((t = i.createElement("link")),
          at(t, "link", e),
          Pe(t),
          i.head.appendChild(t)));
    }
  }
  function ov(e, t) {
    gn.m(e, t);
    var n = Za;
    if (n && e) {
      var i = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + jt(i) + '"][href="' + jt(e) + '"]',
        o = u;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = Wa(e);
      }
      if (
        !Bt.has(o) &&
        ((e = _({ rel: "modulepreload", href: e }, t)),
        Bt.set(o, e),
        n.querySelector(u) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ts(o))) return;
        }
        (i = n.createElement("link")),
          at(i, "link", e),
          Pe(i),
          n.head.appendChild(i);
      }
    }
  }
  function cv(e, t, n) {
    gn.S(e, t, n);
    var i = Za;
    if (i && e) {
      var u = ba(i).hoistableStyles,
        o = Pa(e);
      t = t || "default";
      var d = u.get(o);
      if (!d) {
        var p = { loading: 0, preload: null };
        if ((d = i.querySelector(es(o)))) p.loading = 5;
        else {
          (e = _({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = Bt.get(o)) && ho(e, n);
          var b = (d = i.createElement("link"));
          Pe(b),
            at(b, "link", e),
            (b._p = new Promise(function (R, U) {
              (b.onload = R), (b.onerror = U);
            })),
            b.addEventListener("load", function () {
              p.loading |= 1;
            }),
            b.addEventListener("error", function () {
              p.loading |= 2;
            }),
            (p.loading |= 4),
            Rl(d, t, i);
        }
        (d = { type: "stylesheet", instance: d, count: 1, state: p }),
          u.set(o, d);
      }
    }
  }
  function hv(e, t) {
    gn.X(e, t);
    var n = Za;
    if (n && e) {
      var i = ba(n).hoistableScripts,
        u = Wa(e),
        o = i.get(u);
      o ||
        ((o = n.querySelector(ts(u))),
        o ||
          ((e = _({ src: e, async: !0 }, t)),
          (t = Bt.get(u)) && fo(e, t),
          (o = n.createElement("script")),
          Pe(o),
          at(o, "link", e),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        i.set(u, o));
    }
  }
  function fv(e, t) {
    gn.M(e, t);
    var n = Za;
    if (n && e) {
      var i = ba(n).hoistableScripts,
        u = Wa(e),
        o = i.get(u);
      o ||
        ((o = n.querySelector(ts(u))),
        o ||
          ((e = _({ src: e, async: !0, type: "module" }, t)),
          (t = Bt.get(u)) && fo(e, t),
          (o = n.createElement("script")),
          Pe(o),
          at(o, "link", e),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        i.set(u, o));
    }
  }
  function kd(e, t, n, i) {
    var u = (u = de.current) ? Ol(u) : null;
    if (!u) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = Pa(n.href)),
            (n = ba(u).hoistableStyles),
            (i = n.get(t)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = Pa(n.href);
          var o = ba(u).hoistableStyles,
            d = o.get(e);
          if (
            (d ||
              ((u = u.ownerDocument || u),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(e, d),
              (o = u.querySelector(es(e))) &&
                !o._p &&
                ((d.instance = o), (d.state.loading = 5)),
              Bt.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Bt.set(e, n),
                o || dv(u, e, n, d.state))),
            t && i === null)
          )
            throw Error(r(528, ""));
          return d;
        }
        if (t && i !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Wa(n)),
              (n = ba(u).hoistableScripts),
              (i = n.get(t)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, e));
    }
  }
  function Pa(e) {
    return 'href="' + jt(e) + '"';
  }
  function es(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Ud(e) {
    return _({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function dv(e, t, n, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (i.loading = 1)
      : ((t = e.createElement("link")),
        (i.preload = t),
        t.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        at(t, "link", n),
        Pe(t),
        e.head.appendChild(t));
  }
  function Wa(e) {
    return '[src="' + jt(e) + '"]';
  }
  function ts(e) {
    return "script[async]" + e;
  }
  function Dd(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var i = e.querySelector('style[data-href~="' + jt(n.href) + '"]');
          if (i) return (t.instance = i), Pe(i), i;
          var u = _({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (e.ownerDocument || e).createElement("style")),
            Pe(i),
            at(i, "style", u),
            Rl(i, n.precedence, e),
            (t.instance = i)
          );
        case "stylesheet":
          u = Pa(n.href);
          var o = e.querySelector(es(u));
          if (o) return (t.state.loading |= 4), (t.instance = o), Pe(o), o;
          (i = Ud(n)),
            (u = Bt.get(u)) && ho(i, u),
            (o = (e.ownerDocument || e).createElement("link")),
            Pe(o);
          var d = o;
          return (
            (d._p = new Promise(function (p, b) {
              (d.onload = p), (d.onerror = b);
            })),
            at(o, "link", i),
            (t.state.loading |= 4),
            Rl(o, n.precedence, e),
            (t.instance = o)
          );
        case "script":
          return (
            (o = Wa(n.src)),
            (u = e.querySelector(ts(o)))
              ? ((t.instance = u), Pe(u), u)
              : ((i = n),
                (u = Bt.get(o)) && ((i = _({}, n)), fo(i, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                Pe(u),
                at(u, "link", i),
                e.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((i = t.instance), (t.state.loading |= 4), Rl(i, n.precedence, e));
    return t.instance;
  }
  function Rl(e, t, n) {
    for (
      var i = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = i.length ? i[i.length - 1] : null,
        o = u,
        d = 0;
      d < i.length;
      d++
    ) {
      var p = i[d];
      if (p.dataset.precedence === t) o = p;
      else if (o !== u) break;
    }
    o
      ? o.parentNode.insertBefore(e, o.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function ho(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function fo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Cl = null;
  function zd(e, t, n) {
    if (Cl === null) {
      var i = new Map(),
        u = (Cl = new Map());
      u.set(n, i);
    } else (u = Cl), (i = u.get(n)), i || ((i = new Map()), u.set(n, i));
    if (i.has(e)) return i;
    for (
      i.set(e, null), n = n.getElementsByTagName(e), u = 0;
      u < n.length;
      u++
    ) {
      var o = n[u];
      if (
        !(
          o[pi] ||
          o[Fe] ||
          (e === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = o.getAttribute(t) || "";
        d = e + d;
        var p = i.get(d);
        p ? p.push(o) : i.set(d, [o]);
      }
    }
    return i;
  }
  function Md(e, t, n) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function mv(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Ld(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function gv(e, t, n, i) {
    if (
      n.type === "stylesheet" &&
      (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var u = Pa(i.href),
          o = t.querySelector(es(u));
        if (o) {
          (t = o._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = jl.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = o),
            Pe(o);
          return;
        }
        (o = t.ownerDocument || t),
          (i = Ud(i)),
          (u = Bt.get(u)) && ho(i, u),
          (o = o.createElement("link")),
          Pe(o);
        var d = o;
        (d._p = new Promise(function (p, b) {
          (d.onload = p), (d.onerror = b);
        })),
          at(o, "link", i),
          (n.instance = o);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = jl.bind(e)),
          t.addEventListener("load", n),
          t.addEventListener("error", n));
    }
  }
  var mo = 0;
  function vv(e, t) {
    return (
      e.stylesheets && e.count === 0 && kl(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var i = setTimeout(function () {
              if ((e.stylesheets && kl(e, e.stylesheets), e.unsuspend)) {
                var o = e.unsuspend;
                (e.unsuspend = null), o();
              }
            }, 6e4 + t);
            0 < e.imgBytes && mo === 0 && (mo = 62500 * Z0());
            var u = setTimeout(function () {
              if (
                ((e.waitingForImages = !1),
                e.count === 0 &&
                  (e.stylesheets && kl(e, e.stylesheets), e.unsuspend))
              ) {
                var o = e.unsuspend;
                (e.unsuspend = null), o();
              }
            }, (e.imgBytes > mo ? 50 : 800) + t);
            return (
              (e.unsuspend = n),
              function () {
                (e.unsuspend = null), clearTimeout(i), clearTimeout(u);
              }
            );
          }
        : null
    );
  }
  function jl() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) kl(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Nl = null;
  function kl(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Nl = new Map()),
        t.forEach(pv, e),
        (Nl = null),
        jl.call(e));
  }
  function pv(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Nl.get(e);
      if (n) var i = n.get(null);
      else {
        (n = new Map()), Nl.set(e, n);
        for (
          var u = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            o = 0;
          o < u.length;
          o++
        ) {
          var d = u[o];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (n.set(d.dataset.precedence, d), (i = d));
        }
        i && n.set(null, i);
      }
      (u = t.instance),
        (d = u.getAttribute("data-precedence")),
        (o = n.get(d) || i),
        o === i && n.set(null, u),
        n.set(d, u),
        this.count++,
        (i = jl.bind(this)),
        u.addEventListener("load", i),
        u.addEventListener("error", i),
        o
          ? o.parentNode.insertBefore(u, o.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var ns = {
    $$typeof: H,
    Provider: null,
    Consumer: null,
    _currentValue: ne,
    _currentValue2: ne,
    _threadCount: 0,
  };
  function yv(e, t, n, i, u, o, d, p, b) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ur(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ur(0)),
      (this.hiddenUpdates = ur(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = u),
      (this.onCaughtError = o),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.incompleteTransitions = new Map());
  }
  function Bd(e, t, n, i, u, o, d, p, b, R, U, M) {
    return (
      (e = new yv(e, t, n, d, b, R, U, M, p)),
      (t = 1),
      o === !0 && (t |= 24),
      (o = wt(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (t = Xr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (o.memoizedState = { element: i, isDehydrated: n, cache: t }),
      Zr(o),
      e
    );
  }
  function qd(e) {
    return e ? ((e = Ca), e) : Ca;
  }
  function Hd(e, t, n, i, u, o) {
    (u = qd(u)),
      i.context === null ? (i.context = u) : (i.pendingContext = u),
      (i = On(t)),
      (i.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (i.callback = o),
      (n = Rn(e, i, t)),
      n !== null && (gt(n, e, t), Di(n, e, t));
  }
  function $d(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function go(e, t) {
    $d(e, t), (e = e.alternate) && $d(e, t);
  }
  function Gd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Wn(e, 67108864);
      t !== null && gt(t, e, 67108864), go(e, 67108864);
    }
  }
  function Vd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = xt();
      t = or(t);
      var n = Wn(e, t);
      n !== null && gt(n, e, t), go(e, t);
    }
  }
  var Ul = !0;
  function bv(e, t, n, i) {
    var u = k.T;
    k.T = null;
    var o = $.p;
    try {
      ($.p = 2), vo(e, t, n, i);
    } finally {
      ($.p = o), (k.T = u);
    }
  }
  function _v(e, t, n, i) {
    var u = k.T;
    k.T = null;
    var o = $.p;
    try {
      ($.p = 8), vo(e, t, n, i);
    } finally {
      ($.p = o), (k.T = u);
    }
  }
  function vo(e, t, n, i) {
    if (Ul) {
      var u = po(i);
      if (u === null) to(e, t, i, Dl, n), Yd(e, i);
      else if (Sv(u, e, t, n, i)) i.stopPropagation();
      else if ((Yd(e, i), t & 4 && -1 < wv.indexOf(e))) {
        for (; u !== null; ) {
          var o = ya(u);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var d = Jn(o.pendingLanes);
                  if (d !== 0) {
                    var p = o;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; d; ) {
                      var b = 1 << (31 - bt(d));
                      (p.entanglements[1] |= b), (d &= ~b);
                    }
                    Jt(o), (Ee & 6) === 0 && ((vl = pt() + 500), Zi(0));
                  }
                }
                break;
              case 31:
              case 13:
                (p = Wn(o, 2)), p !== null && gt(p, o, 2), yl(), go(o, 2);
            }
          if (((o = po(i)), o === null && to(e, t, i, Dl, n), o === u)) break;
          u = o;
        }
        u !== null && i.stopPropagation();
      } else to(e, t, i, null, n);
    }
  }
  function po(e) {
    return (e = yr(e)), yo(e);
  }
  var Dl = null;
  function yo(e) {
    if (((Dl = null), (e = pa(e)), e !== null)) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = f(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = m(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Dl = e), null;
  }
  function Kd(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (lg()) {
          case Po:
            return 2;
          case Wo:
            return 8;
          case Es:
          case rg:
            return 32;
          case Fo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var bo = !1,
    qn = null,
    Hn = null,
    $n = null,
    as = new Map(),
    is = new Map(),
    Gn = [],
    wv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Yd(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        qn = null;
        break;
      case "dragenter":
      case "dragleave":
        Hn = null;
        break;
      case "mouseover":
      case "mouseout":
        $n = null;
        break;
      case "pointerover":
      case "pointerout":
        as.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        is.delete(t.pointerId);
    }
  }
  function ss(e, t, n, i, u, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: o,
          targetContainers: [u],
        }),
        t !== null && ((t = ya(t)), t !== null && Gd(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function Sv(e, t, n, i, u) {
    switch (t) {
      case "focusin":
        return (qn = ss(qn, e, t, n, i, u)), !0;
      case "dragenter":
        return (Hn = ss(Hn, e, t, n, i, u)), !0;
      case "mouseover":
        return ($n = ss($n, e, t, n, i, u)), !0;
      case "pointerover":
        var o = u.pointerId;
        return as.set(o, ss(as.get(o) || null, e, t, n, i, u)), !0;
      case "gotpointercapture":
        return (
          (o = u.pointerId), is.set(o, ss(is.get(o) || null, e, t, n, i, u)), !0
        );
    }
    return !1;
  }
  function Xd(e) {
    var t = pa(e.target);
    if (t !== null) {
      var n = h(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = f(n)), t !== null)) {
            (e.blockedOn = t),
              sc(e.priority, function () {
                Vd(n);
              });
            return;
          }
        } else if (t === 31) {
          if (((t = m(n)), t !== null)) {
            (e.blockedOn = t),
              sc(e.priority, function () {
                Vd(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function zl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = po(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        (pr = i), n.target.dispatchEvent(i), (pr = null);
      } else return (t = ya(n)), t !== null && Gd(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Jd(e, t, n) {
    zl(e) && n.delete(t);
  }
  function Ev() {
    (bo = !1),
      qn !== null && zl(qn) && (qn = null),
      Hn !== null && zl(Hn) && (Hn = null),
      $n !== null && zl($n) && ($n = null),
      as.forEach(Jd),
      is.forEach(Jd);
  }
  function Ml(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      bo ||
        ((bo = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, Ev)));
  }
  var Ll = null;
  function Qd(e) {
    Ll !== e &&
      ((Ll = e),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        Ll === e && (Ll = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            i = e[t + 1],
            u = e[t + 2];
          if (typeof i != "function") {
            if (yo(i || n) === null) continue;
            break;
          }
          var o = ya(n);
          o !== null &&
            (e.splice(t, 3),
            (t -= 3),
            vu(o, { pending: !0, data: u, method: n.method, action: i }, i, u));
        }
      }));
  }
  function Fa(e) {
    function t(b) {
      return Ml(b, e);
    }
    qn !== null && Ml(qn, e),
      Hn !== null && Ml(Hn, e),
      $n !== null && Ml($n, e),
      as.forEach(t),
      is.forEach(t);
    for (var n = 0; n < Gn.length; n++) {
      var i = Gn[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < Gn.length && ((n = Gn[0]), n.blockedOn === null); )
      Xd(n), n.blockedOn === null && Gn.shift();
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (i = 0; i < n.length; i += 3) {
        var u = n[i],
          o = n[i + 1],
          d = u[ot] || null;
        if (typeof o == "function") d || Qd(n);
        else if (d) {
          var p = null;
          if (o && o.hasAttribute("formAction")) {
            if (((u = o), (d = o[ot] || null))) p = d.formAction;
            else if (yo(u) !== null) continue;
          } else p = d.action;
          typeof p == "function" ? (n[i + 1] = p) : (n.splice(i, 3), (i -= 3)),
            Qd(n);
        }
      }
  }
  function Id() {
    function e(o) {
      o.canIntercept &&
        o.info === "react-transition" &&
        o.intercept({
          handler: function () {
            return new Promise(function (d) {
              return (u = d);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      u !== null && (u(), (u = null)), i || setTimeout(n, 20);
    }
    function n() {
      if (!i && !navigation.transition) {
        var o = navigation.currentEntry;
        o &&
          o.url != null &&
          navigation.navigate(o.url, {
            state: o.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var i = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(n, 100),
        function () {
          (i = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null));
        }
      );
    }
  }
  function _o(e) {
    this._internalRoot = e;
  }
  (Bl.prototype.render = _o.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var n = t.current,
        i = xt();
      Hd(n, i, e, t, null, null);
    }),
    (Bl.prototype.unmount = _o.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Hd(e.current, 2, null, e, null, null), yl(), (t[va] = null);
        }
      });
  function Bl(e) {
    this._internalRoot = e;
  }
  Bl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ic();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Gn.length && t !== 0 && t < Gn[n].priority; n++);
      Gn.splice(n, 0, e), n === 0 && Xd(e);
    }
  };
  var Zd = a.version;
  if (Zd !== "19.2.4") throw Error(r(527, Zd, "19.2.4"));
  $.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(r(188))
        : ((e = Object.keys(e).join(",")), Error(r(268, e)));
    return (
      (e = g(t)),
      (e = e !== null ? y(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Tv = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: k,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ql.isDisabled && ql.supportsFiber)
      try {
        (mi = ql.inject(Tv)), (yt = ql);
      } catch {}
  }
  return (
    (rs.createRoot = function (e, t) {
      if (!c(e)) throw Error(r(299));
      var n = !1,
        i = "",
        u = nf,
        o = af,
        d = sf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (o = t.onCaughtError),
          t.onRecoverableError !== void 0 && (d = t.onRecoverableError)),
        (t = Bd(e, 1, !1, null, null, n, i, null, u, o, d, Id)),
        (e[va] = t.current),
        eo(e),
        new _o(t)
      );
    }),
    (rs.hydrateRoot = function (e, t, n) {
      if (!c(e)) throw Error(r(299));
      var i = !1,
        u = "",
        o = nf,
        d = af,
        p = sf,
        b = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (p = n.onRecoverableError),
          n.formState !== void 0 && (b = n.formState)),
        (t = Bd(e, 1, !0, t, n ?? null, i, u, b, o, d, p, Id)),
        (t.context = qd(null)),
        (n = t.current),
        (i = xt()),
        (i = or(i)),
        (u = On(i)),
        (u.callback = null),
        Rn(n, u, i),
        (n = i),
        (t.current.lanes = n),
        vi(t, n),
        Jt(t),
        (e[va] = t.current),
        eo(e),
        new Bl(t)
      );
    }),
    (rs.version = "19.2.4"),
    rs
  );
}
var rm;
function Lv() {
  if (rm) return Eo.exports;
  rm = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (a) {
        console.error(a);
      }
  }
  return s(), (Eo.exports = Mv()), Eo.exports;
}
var Bv = Lv();
const um = [420, 1400, 2450, 3300, 4100];
function qv({ isExiting: s = !1, skipRequested: a = !1, onSkip: l }) {
  const [r, c] = I.useState(0),
    h = I.useRef(null),
    f = I.useRef(null),
    m = I.useRef(null);
  return (
    I.useEffect(() => {
      const v = um.map((g, y) => window.setTimeout(() => c(y + 1), g));
      return () => v.forEach(window.clearTimeout);
    }, []),
    I.useEffect(() => {
      a && c(um.length);
    }, [a]),
    I.useEffect(() => {
      const v = h.current;
      if (!v) return;
      const g = v.getContext("2d");
      if (!g) return;
      const y = Array.from({ length: 56 }, () => ({
          angle: Math.random() * Math.PI * 2,
          dist: 26 + Math.random() * 136,
          speed: 0.001 + Math.random() * 0.003,
          size: 1 + Math.random() * 2.4,
          opacity: 0.05 + Math.random() * 0.14,
          phase: Math.random() * Math.PI * 2,
        })),
        _ = [
          {
            a: 75,
            b: 30,
            rotation: -0.35,
            speed: 0.006,
            planetAngle: 0.8,
            planetSize: 4,
            color: [162, 168, 184],
          },
          {
            a: 108,
            b: 42,
            rotation: 0.25,
            speed: -0.005,
            planetAngle: 3.5,
            planetSize: 3,
            color: [176, 170, 181],
          },
          {
            a: 142,
            b: 48,
            rotation: -0.1,
            speed: 0.003,
            planetAngle: 5.2,
            planetSize: 2,
            color: [148, 160, 178],
          },
        ];
      let T = 0,
        x = 0,
        j = 1,
        L = 0,
        q = 0;
      const X = () => {
          const ee = v.getBoundingClientRect(),
            Y = Math.max(ee.width, window.innerWidth, 1),
            F = Math.max(ee.height, window.innerHeight, 1),
            B = window.devicePixelRatio || 1;
          (T = Y),
            (x = F),
            (j = Math.min(T / 420, x / 720)),
            (L = T / 2),
            (q = x * 0.36),
            (v.width = Math.round(T * B)),
            (v.height = Math.round(x * B)),
            g.setTransform(B, 0, 0, B, 0, 0);
        },
        Q = (ee, Y, F, B, ve, G, V) => {
          const re = g.createRadialGradient(ee, Y, 0, ee, Y, F);
          re.addColorStop(0, `rgba(${B},${ve},${G},${V})`),
            re.addColorStop(0.4, `rgba(${B},${ve},${G},${V * 0.38})`),
            re.addColorStop(0.75, `rgba(${B},${ve},${G},${V * 0.08})`),
            re.addColorStop(1, `rgba(${B},${ve},${G},0)`),
            (g.fillStyle = re),
            g.beginPath(),
            g.arc(ee, Y, F, 0, Math.PI * 2),
            g.fill();
        },
        H = (ee) => {
          m.current === null && (m.current = ee);
          const Y = (ee - m.current) / 1e3;
          g.clearRect(0, 0, T, x);
          const F = g.createRadialGradient(L, q, 0, L, q, Math.max(T, x) * 0.9);
          F.addColorStop(0, "rgba(237,241,246,1)"),
            F.addColorStop(0.42, "rgba(228,233,240,1)"),
            F.addColorStop(0.82, "rgba(219,225,233,1)"),
            F.addColorStop(1, "rgba(213,220,229,1)"),
            (g.fillStyle = F),
            g.fillRect(0, 0, T, x);
          const B = Math.min(1, Y / 1.9),
            ve = Math.min(1, Math.max(0, (Y - 1.05) / 1.9)),
            G = Math.min(1, Math.max(0, (Y - 2.5) / 1.3));
          if (B > 0) {
            const V = 0.86 + 0.14 * Math.sin(Y * 0.9);
            Q(L, q, 188 * j * B, 184, 193, 205, 0.09 * B * V),
              Q(L, q, 118 * j * B, 198, 190, 181, 0.06 * B * V);
          }
          if (
            (ve > 0 &&
              (y.forEach((V) => {
                V.angle += V.speed;
                const re = Math.sin(Y * 0.58 + V.phase) * 10 * j,
                  je = L + Math.cos(V.angle) * (V.dist * j + re) * 1.3,
                  rt = q + Math.sin(V.angle) * (V.dist * j + re) * 0.42,
                  Je = 0.58 + 0.42 * Math.sin(Y * 1.5 + V.phase);
                (g.globalAlpha = V.opacity * ve * Je),
                  (g.fillStyle = "rgba(156,167,184,1)"),
                  g.beginPath(),
                  g.arc(je, rt, V.size * j, 0, Math.PI * 2),
                  g.fill();
              }),
              (g.globalAlpha = 1)),
            ve > 0 &&
              _.forEach((V, re) => {
                const je = re * 0.18,
                  rt = Math.min(1, Math.max(0, (ve - je) / 0.72));
                if (rt <= 0) return;
                g.save(),
                  g.translate(L, q),
                  g.rotate(V.rotation + Y * V.speed * 0.3);
                const [Je, Qe, k] = V.color;
                if (
                  ((g.strokeStyle = `rgba(${Je},${Qe},${k},${0.18 * rt})`),
                  (g.lineWidth = 0.8 * j),
                  g.beginPath(),
                  g.ellipse(0, 0, V.a * j, V.b * j, 0, 0, Math.PI * 2),
                  g.stroke(),
                  G > 0)
                ) {
                  const $ = V.planetAngle + Y * V.speed * 2,
                    ne = Math.cos($) * V.a * j,
                    ue = Math.sin($) * V.b * j,
                    J = g.createRadialGradient(
                      ne,
                      ue,
                      0,
                      ne,
                      ue,
                      V.planetSize * j * 5
                    );
                  J.addColorStop(0, `rgba(${Je},${Qe},${k},${0.22 * G})`),
                    J.addColorStop(1, `rgba(${Je},${Qe},${k},0)`),
                    (g.fillStyle = J),
                    g.beginPath(),
                    g.arc(ne, ue, V.planetSize * j * 5, 0, Math.PI * 2),
                    g.fill();
                  const w = g.createRadialGradient(
                    ne - V.planetSize * j * 0.3,
                    ue - V.planetSize * j * 0.3,
                    0,
                    ne,
                    ue,
                    V.planetSize * j
                  );
                  w.addColorStop(
                    0,
                    `rgba(${Math.min(255, Je + 28)},${Math.min(
                      255,
                      Qe + 24
                    )},${Math.min(255, k + 18)},${0.74 * G})`
                  ),
                    w.addColorStop(1, `rgba(${Je},${Qe},${k},${0.46 * G})`),
                    (g.fillStyle = w),
                    g.beginPath(),
                    g.arc(ne, ue, V.planetSize * j * G, 0, Math.PI * 2),
                    g.fill();
                }
                g.restore();
              }),
            B > 0)
          ) {
            const V = 0.9 + 0.1 * Math.sin(Y * 1.2);
            Q(L, q, 52 * j * B, 201, 196, 188, 0.2 * B * V),
              Q(L, q, 24 * j * B, 233, 227, 216, 0.32 * B * V);
            const re = g.createRadialGradient(L, q, 0, L, q, 11 * j * B);
            re.addColorStop(0, `rgba(245,242,236,${0.95 * B})`),
              re.addColorStop(0.5, `rgba(225,220,210,${0.82 * B})`),
              re.addColorStop(1, `rgba(206,204,198,${0.48 * B})`),
              (g.fillStyle = re),
              g.beginPath(),
              g.arc(L, q, 11 * j * B, 0, Math.PI * 2),
              g.fill(),
              (g.fillStyle = `rgba(252,249,243,${0.88 * B * V})`),
              g.beginPath(),
              g.arc(L, q, 4 * j * B, 0, Math.PI * 2),
              g.fill();
          }
          f.current = window.requestAnimationFrame(H);
        };
      return (
        X(),
        window.addEventListener("resize", X),
        (f.current = window.requestAnimationFrame(H)),
        () => {
          window.removeEventListener("resize", X),
            f.current !== null && window.cancelAnimationFrame(f.current),
            (m.current = null);
        }
      );
    }, []),
    S.jsxs("div", {
      className: `echoes-splash-screen absolute inset-0 z-[120] overflow-hidden transition-opacity duration-700 ${
        s ? "opacity-0" : "opacity-100"
      }`,
      style: {
        background: "linear-gradient(180deg, #edf1f6 0%, #d8e0e8 100%)",
        cursor: s ? "default" : "pointer",
      },
      onClick: (v) => {
        v.preventDefault(), v.stopPropagation(), s || l == null || l();
      },
      children: [
        S.jsx("canvas", {
          ref: h,
          className: "echoes-splash-canvas absolute inset-0 h-full w-full",
        }),
        S.jsx("div", {
          className:
            "echoes-splash-content absolute inset-0 flex flex-col items-center justify-center px-8",
          children: S.jsxs("div", {
            className: "relative h-full w-full max-w-[420px]",
            children: [
              S.jsx("div", {
                className:
                  "echoes-splash-title absolute left-1/2 text-center transition-opacity duration-[2000ms] [transform:translateX(-50%)]",
                style: { top: "61%", opacity: r >= 3 ? 1 : 0, zIndex: 2 },
                children: S.jsx("div", {
                  style: {
                    color: "rgba(111,123,140,0.62)",
                    fontFamily:
                      "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', 'Songti SC', 'STSong', serif",
                    fontSize: "22px",
                    fontWeight: 300,
                    letterSpacing: "0.55em",
                    paddingLeft: "0.55em",
                    textTransform: "uppercase",
                  },
                  children: "Echoes",
                }),
              }),
              S.jsx("div", {
                className:
                  "echoes-splash-subtitle absolute left-1/2 whitespace-nowrap text-center transition-opacity duration-[2500ms] [transform:translateX(-50%)]",
                style: { top: "68%", opacity: r >= 4 ? 1 : 0, zIndex: 2 },
                children: S.jsx("div", {
                  style: {
                    color: "rgba(131,141,156,0.4)",
                    fontFamily:
                      "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', 'Songti SC', 'STSong', serif",
                    fontSize: "11px",
                    fontWeight: 300,
                    letterSpacing: "0.36em",
                    paddingLeft: "0.36em",
                  },
                  children: "观测万物的回响",
                }),
              }),
              S.jsx("div", {
                className:
                  "absolute left-1/2 transition-opacity duration-[1500ms] [transform:translateX(-50%)]",
                style: { bottom: "60px", opacity: r >= 5 ? 1 : 0, zIndex: 2 },
                children: S.jsx("div", {
                  className: "echoes-splash-pulse h-px w-9",
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
class Hv extends kv.Component {
  constructor() {
    super(...arguments),
      (this.state = { hasError: !1, error: null, reloading: !1 }),
      (this.handleReload = async () => {
        var l, r;
        this.setState({ reloading: !0 });
        try {
          const c = new Set(),
            f = (
              ((l = this.state.error) == null ? void 0 : l.message) || ""
            ).match(/\/assets\/[A-Za-z0-9_\-\.]+\.(?:js|mjs|css)/g);
          f && f.forEach((m) => c.add(m)),
            document
              .querySelectorAll("script[src], link[href]")
              .forEach((m) => {
                const g = (m.src || m.href || "").match(
                  /\/assets\/[A-Za-z0-9_\-\.]+\.(?:js|mjs|css)/
                );
                g && c.add(g[0]);
              }),
            await Promise.all(
              [...c].map((m) => fetch(m, { cache: "reload" }).catch(() => {}))
            );
        } catch {}
        try {
          if ("caches" in window) {
            const h = await caches.keys();
            await Promise.all(h.map((f) => caches.delete(f)));
          }
          const c = await ((r = navigator.serviceWorker) == null
            ? void 0
            : r.getRegistrations());
          c && (await Promise.all(c.map((h) => h.unregister())));
        } catch {}
        const a =
          window.location.pathname + "?_t=" + Date.now() + window.location.hash;
        window.location.replace(a);
      }),
      (this.handleRetry = () => {
        this.setState({ hasError: !1, error: null });
      });
  }
  static getDerivedStateFromError(a) {
    return { hasError: !0, error: a };
  }
  isChunkError() {
    var l;
    const a = ((l = this.state.error) == null ? void 0 : l.message) || "";
    return (
      a.includes("Failed to fetch dynamically imported module") ||
      a.includes("Loading chunk") ||
      a.includes("Importing a module script failed") ||
      a.includes("Unexpected end of script")
    );
  }
  render() {
    var l, r;
    if (!this.state.hasError) return this.props.children;
    const a = this.isChunkError();
    return S.jsxs("div", {
      className:
        "echoes-error-screen fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#f0f4f8] px-8 text-center",
      children: [
        S.jsx("div", {
          className: "text-slate-400 text-4xl mb-4",
          children: "⚠",
        }),
        S.jsx("h2", {
          className: "text-slate-600 text-lg font-medium mb-2",
          children: a ? "版本已更新" : "出了点问题",
        }),
        S.jsx("p", {
          className: "text-slate-400 text-sm mb-6 max-w-xs",
          children: a
            ? "检测到新版本，请刷新页面以加载最新内容。"
            : "应用遇到了意外错误，请尝试刷新。",
        }),
        this.state.error &&
          S.jsxs("details", {
            className:
              "echoes-error-details text-slate-300 text-xs mb-4 max-w-xs break-all leading-relaxed",
            children: [
              S.jsx("summary", {
                className: "cursor-pointer text-slate-400 mb-1",
                children:
                  (l = this.state.error.message) == null
                    ? void 0
                    : l.slice(0, 200),
              }),
              S.jsx("pre", {
                className:
                  "text-left mt-2 text-[10px] leading-snug max-h-40 overflow-auto whitespace-pre-wrap opacity-60",
                children:
                  (r = this.state.error.stack) == null
                    ? void 0
                    : r.slice(0, 800),
              }),
            ],
          }),
        S.jsxs("div", {
          className: "flex gap-3",
          children: [
            !a &&
              S.jsx("button", {
                onClick: this.handleRetry,
                className:
                  "echoes-error-retry-btn px-5 py-2 rounded-xl text-sm bg-white/60 text-slate-500 border border-white/80 shadow-sm active:scale-95 transition-transform",
                children: "重试",
              }),
            S.jsxs("button", {
              onClick: this.handleReload,
              disabled: this.state.reloading,
              className: `echoes-error-reload-btn px-5 py-2 rounded-xl text-sm shadow-sm transition-all flex items-center gap-2 ${
                this.state.reloading
                  ? "bg-slate-600/95 text-white cursor-not-allowed"
                  : "bg-slate-500/90 text-white active:scale-95 active:bg-slate-600"
              }`,
              children: [
                this.state.reloading &&
                  S.jsx("span", {
                    className:
                      "inline-block w-3.5 h-3.5 border-2 border-white/70 border-t-transparent rounded-full animate-spin",
                  }),
                S.jsx("span", {
                  children: this.state.reloading ? "正在刷新…" : "刷新页面",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
}
function Wl(s, a) {
  var l = {};
  for (var r in s)
    Object.prototype.hasOwnProperty.call(s, r) &&
      a.indexOf(r) < 0 &&
      (l[r] = s[r]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, r = Object.getOwnPropertySymbols(s); c < r.length; c++)
      a.indexOf(r[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, r[c]) &&
        (l[r[c]] = s[r[c]]);
  return l;
}
function $v(s, a, l, r) {
  function c(h) {
    return h instanceof l
      ? h
      : new l(function (f) {
          f(h);
        });
  }
  return new (l || (l = Promise))(function (h, f) {
    function m(y) {
      try {
        g(r.next(y));
      } catch (_) {
        f(_);
      }
    }
    function v(y) {
      try {
        g(r.throw(y));
      } catch (_) {
        f(_);
      }
    }
    function g(y) {
      y.done ? h(y.value) : c(y.value).then(m, v);
    }
    g((r = r.apply(s, a || [])).next());
  });
}
const Gv = (s) => (s ? (...a) => s(...a) : (...a) => fetch(...a));
class Jo extends Error {
  constructor(a, l = "FunctionsError", r) {
    super(a), (this.name = l), (this.context = r);
  }
}
class Vv extends Jo {
  constructor(a) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      a
    );
  }
}
class om extends Jo {
  constructor(a) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", a);
  }
}
class cm extends Jo {
  constructor(a) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      a
    );
  }
}
var Uo;
(function (s) {
  (s.Any = "any"),
    (s.ApNortheast1 = "ap-northeast-1"),
    (s.ApNortheast2 = "ap-northeast-2"),
    (s.ApSouth1 = "ap-south-1"),
    (s.ApSoutheast1 = "ap-southeast-1"),
    (s.ApSoutheast2 = "ap-southeast-2"),
    (s.CaCentral1 = "ca-central-1"),
    (s.EuCentral1 = "eu-central-1"),
    (s.EuWest1 = "eu-west-1"),
    (s.EuWest2 = "eu-west-2"),
    (s.EuWest3 = "eu-west-3"),
    (s.SaEast1 = "sa-east-1"),
    (s.UsEast1 = "us-east-1"),
    (s.UsWest1 = "us-west-1"),
    (s.UsWest2 = "us-west-2");
})(Uo || (Uo = {}));
class Kv {
  constructor(a, { headers: l = {}, customFetch: r, region: c = Uo.Any } = {}) {
    (this.url = a), (this.headers = l), (this.region = c), (this.fetch = Gv(r));
  }
  setAuth(a) {
    this.headers.Authorization = `Bearer ${a}`;
  }
  invoke(a) {
    return $v(this, arguments, void 0, function* (l, r = {}) {
      var c;
      let h, f;
      try {
        const { headers: m, method: v, body: g, signal: y, timeout: _ } = r;
        let T = {},
          { region: x } = r;
        x || (x = this.region);
        const j = new URL(`${this.url}/${l}`);
        x &&
          x !== "any" &&
          ((T["x-region"] = x), j.searchParams.set("forceFunctionRegion", x));
        let L;
        g &&
        ((m && !Object.prototype.hasOwnProperty.call(m, "Content-Type")) || !m)
          ? (typeof Blob < "u" && g instanceof Blob) || g instanceof ArrayBuffer
            ? ((T["Content-Type"] = "application/octet-stream"), (L = g))
            : typeof g == "string"
            ? ((T["Content-Type"] = "text/plain"), (L = g))
            : typeof FormData < "u" && g instanceof FormData
            ? (L = g)
            : ((T["Content-Type"] = "application/json"),
              (L = JSON.stringify(g)))
          : g &&
            typeof g != "string" &&
            !(typeof Blob < "u" && g instanceof Blob) &&
            !(g instanceof ArrayBuffer) &&
            !(typeof FormData < "u" && g instanceof FormData)
          ? (L = JSON.stringify(g))
          : (L = g);
        let q = y;
        _ &&
          ((f = new AbortController()),
          (h = setTimeout(() => f.abort(), _)),
          y
            ? ((q = f.signal), y.addEventListener("abort", () => f.abort()))
            : (q = f.signal));
        const X = yield this.fetch(j.toString(), {
            method: v || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, T), this.headers),
              m
            ),
            body: L,
            signal: q,
          }).catch((Y) => {
            throw new Vv(Y);
          }),
          Q = X.headers.get("x-relay-error");
        if (Q && Q === "true") throw new om(X);
        if (!X.ok) throw new cm(X);
        let H = (
            (c = X.headers.get("Content-Type")) !== null && c !== void 0
              ? c
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          ee;
        return (
          H === "application/json"
            ? (ee = yield X.json())
            : H === "application/octet-stream" || H === "application/pdf"
            ? (ee = yield X.blob())
            : H === "text/event-stream"
            ? (ee = X)
            : H === "multipart/form-data"
            ? (ee = yield X.formData())
            : (ee = yield X.text()),
          { data: ee, error: null, response: X }
        );
      } catch (m) {
        return {
          data: null,
          error: m,
          response: m instanceof cm || m instanceof om ? m.context : void 0,
        };
      } finally {
        h && clearTimeout(h);
      }
    });
  }
}
var Yv = class extends Error {
    constructor(s) {
      super(s.message),
        (this.name = "PostgrestError"),
        (this.details = s.details),
        (this.hint = s.hint),
        (this.code = s.code);
    }
  },
  Xv = class {
    constructor(s) {
      var a, l, r;
      (this.shouldThrowOnError = !1),
        (this.method = s.method),
        (this.url = s.url),
        (this.headers = new Headers(s.headers)),
        (this.schema = s.schema),
        (this.body = s.body),
        (this.shouldThrowOnError =
          (a = s.shouldThrowOnError) !== null && a !== void 0 ? a : !1),
        (this.signal = s.signal),
        (this.isMaybeSingle =
          (l = s.isMaybeSingle) !== null && l !== void 0 ? l : !1),
        (this.urlLengthLimit =
          (r = s.urlLengthLimit) !== null && r !== void 0 ? r : 8e3),
        s.fetch ? (this.fetch = s.fetch) : (this.fetch = fetch);
    }
    throwOnError() {
      return (this.shouldThrowOnError = !0), this;
    }
    setHeader(s, a) {
      return (
        (this.headers = new Headers(this.headers)), this.headers.set(s, a), this
      );
    }
    then(s, a) {
      var l = this;
      this.schema === void 0 ||
        (["GET", "HEAD"].includes(this.method)
          ? this.headers.set("Accept-Profile", this.schema)
          : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          this.headers.set("Content-Type", "application/json");
      const r = this.fetch;
      let c = r(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal,
      }).then(async (h) => {
        let f = null,
          m = null,
          v = null,
          g = h.status,
          y = h.statusText;
        if (h.ok) {
          var _, T;
          if (l.method !== "HEAD") {
            var x;
            const q = await h.text();
            q === "" ||
              (l.headers.get("Accept") === "text/csv" ||
              (l.headers.get("Accept") &&
                !((x = l.headers.get("Accept")) === null || x === void 0) &&
                x.includes("application/vnd.pgrst.plan+text"))
                ? (m = q)
                : (m = JSON.parse(q)));
          }
          const j =
              (_ = l.headers.get("Prefer")) === null || _ === void 0
                ? void 0
                : _.match(/count=(exact|planned|estimated)/),
            L =
              (T = h.headers.get("content-range")) === null || T === void 0
                ? void 0
                : T.split("/");
          j && L && L.length > 1 && (v = parseInt(L[1])),
            l.isMaybeSingle &&
              Array.isArray(m) &&
              (m.length > 1
                ? ((f = {
                    code: "PGRST116",
                    details: `Results contain ${m.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message:
                      "JSON object requested, multiple (or no) rows returned",
                  }),
                  (m = null),
                  (v = null),
                  (g = 406),
                  (y = "Not Acceptable"))
                : m.length === 1
                ? (m = m[0])
                : (m = null));
        } else {
          const j = await h.text();
          try {
            (f = JSON.parse(j)),
              Array.isArray(f) &&
                h.status === 404 &&
                ((m = []), (f = null), (g = 200), (y = "OK"));
          } catch {
            h.status === 404 && j === ""
              ? ((g = 204), (y = "No Content"))
              : (f = { message: j });
          }
          if (f && l.shouldThrowOnError) throw new Yv(f);
        }
        return { error: f, data: m, count: v, status: g, statusText: y };
      });
      return (
        this.shouldThrowOnError ||
          (c = c.catch((h) => {
            var f;
            let m = "",
              v = "",
              g = "";
            const y = h == null ? void 0 : h.cause;
            if (y) {
              var _, T, x, j;
              const X =
                  (_ = y == null ? void 0 : y.message) !== null && _ !== void 0
                    ? _
                    : "",
                Q =
                  (T = y == null ? void 0 : y.code) !== null && T !== void 0
                    ? T
                    : "";
              (m = `${
                (x = h == null ? void 0 : h.name) !== null && x !== void 0
                  ? x
                  : "FetchError"
              }: ${h == null ? void 0 : h.message}`),
                (m += `

Caused by: ${
                  (j = y == null ? void 0 : y.name) !== null && j !== void 0
                    ? j
                    : "Error"
                }: ${X}`),
                Q && (m += ` (${Q})`),
                y != null &&
                  y.stack &&
                  (m += `
${y.stack}`);
            } else {
              var L;
              m =
                (L = h == null ? void 0 : h.stack) !== null && L !== void 0
                  ? L
                  : "";
            }
            const q = this.url.toString().length;
            return (
              (h == null ? void 0 : h.name) === "AbortError" ||
              (h == null ? void 0 : h.code) === "ABORT_ERR"
                ? ((g = ""),
                  (v = "Request was aborted (timeout or manual cancellation)"),
                  q > this.urlLengthLimit &&
                    (v += `. Note: Your request URL is ${q} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`))
                : ((y == null ? void 0 : y.name) === "HeadersOverflowError" ||
                    (y == null ? void 0 : y.code) ===
                      "UND_ERR_HEADERS_OVERFLOW") &&
                  ((g = ""),
                  (v = "HTTP headers exceeded server limits (typically 16KB)"),
                  q > this.urlLengthLimit &&
                    (v += `. Your request URL is ${q} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),
              {
                error: {
                  message: `${
                    (f = h == null ? void 0 : h.name) !== null && f !== void 0
                      ? f
                      : "FetchError"
                  }: ${h == null ? void 0 : h.message}`,
                  details: m,
                  hint: v,
                  code: g,
                },
                data: null,
                count: null,
                status: 0,
                statusText: "",
              }
            );
          })),
        c.then(s, a)
      );
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  },
  Jv = class extends Xv {
    select(s) {
      let a = !1;
      const l = (s ?? "*")
        .split("")
        .map((r) => (/\s/.test(r) && !a ? "" : (r === '"' && (a = !a), r)))
        .join("");
      return (
        this.url.searchParams.set("select", l),
        this.headers.append("Prefer", "return=representation"),
        this
      );
    }
    order(
      s,
      {
        ascending: a = !0,
        nullsFirst: l,
        foreignTable: r,
        referencedTable: c = r,
      } = {}
    ) {
      const h = c ? `${c}.order` : "order",
        f = this.url.searchParams.get(h);
      return (
        this.url.searchParams.set(
          h,
          `${f ? `${f},` : ""}${s}.${a ? "asc" : "desc"}${
            l === void 0 ? "" : l ? ".nullsfirst" : ".nullslast"
          }`
        ),
        this
      );
    }
    limit(s, { foreignTable: a, referencedTable: l = a } = {}) {
      const r = typeof l > "u" ? "limit" : `${l}.limit`;
      return this.url.searchParams.set(r, `${s}`), this;
    }
    range(s, a, { foreignTable: l, referencedTable: r = l } = {}) {
      const c = typeof r > "u" ? "offset" : `${r}.offset`,
        h = typeof r > "u" ? "limit" : `${r}.limit`;
      return (
        this.url.searchParams.set(c, `${s}`),
        this.url.searchParams.set(h, `${a - s + 1}`),
        this
      );
    }
    abortSignal(s) {
      return (this.signal = s), this;
    }
    single() {
      return (
        this.headers.set("Accept", "application/vnd.pgrst.object+json"), this
      );
    }
    maybeSingle() {
      return (this.isMaybeSingle = !0), this;
    }
    csv() {
      return this.headers.set("Accept", "text/csv"), this;
    }
    geojson() {
      return this.headers.set("Accept", "application/geo+json"), this;
    }
    explain({
      analyze: s = !1,
      verbose: a = !1,
      settings: l = !1,
      buffers: r = !1,
      wal: c = !1,
      format: h = "text",
    } = {}) {
      var f;
      const m = [
          s ? "analyze" : null,
          a ? "verbose" : null,
          l ? "settings" : null,
          r ? "buffers" : null,
          c ? "wal" : null,
        ]
          .filter(Boolean)
          .join("|"),
        v =
          (f = this.headers.get("Accept")) !== null && f !== void 0
            ? f
            : "application/json";
      return (
        this.headers.set(
          "Accept",
          `application/vnd.pgrst.plan+${h}; for="${v}"; options=${m};`
        ),
        h === "json" ? this : this
      );
    }
    rollback() {
      return this.headers.append("Prefer", "tx=rollback"), this;
    }
    returns() {
      return this;
    }
    maxAffected(s) {
      return (
        this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${s}`),
        this
      );
    }
  };
const hm = new RegExp("[,()]");
var li = class extends Jv {
    eq(s, a) {
      return this.url.searchParams.append(s, `eq.${a}`), this;
    }
    neq(s, a) {
      return this.url.searchParams.append(s, `neq.${a}`), this;
    }
    gt(s, a) {
      return this.url.searchParams.append(s, `gt.${a}`), this;
    }
    gte(s, a) {
      return this.url.searchParams.append(s, `gte.${a}`), this;
    }
    lt(s, a) {
      return this.url.searchParams.append(s, `lt.${a}`), this;
    }
    lte(s, a) {
      return this.url.searchParams.append(s, `lte.${a}`), this;
    }
    like(s, a) {
      return this.url.searchParams.append(s, `like.${a}`), this;
    }
    likeAllOf(s, a) {
      return (
        this.url.searchParams.append(s, `like(all).{${a.join(",")}}`), this
      );
    }
    likeAnyOf(s, a) {
      return (
        this.url.searchParams.append(s, `like(any).{${a.join(",")}}`), this
      );
    }
    ilike(s, a) {
      return this.url.searchParams.append(s, `ilike.${a}`), this;
    }
    ilikeAllOf(s, a) {
      return (
        this.url.searchParams.append(s, `ilike(all).{${a.join(",")}}`), this
      );
    }
    ilikeAnyOf(s, a) {
      return (
        this.url.searchParams.append(s, `ilike(any).{${a.join(",")}}`), this
      );
    }
    regexMatch(s, a) {
      return this.url.searchParams.append(s, `match.${a}`), this;
    }
    regexIMatch(s, a) {
      return this.url.searchParams.append(s, `imatch.${a}`), this;
    }
    is(s, a) {
      return this.url.searchParams.append(s, `is.${a}`), this;
    }
    isDistinct(s, a) {
      return this.url.searchParams.append(s, `isdistinct.${a}`), this;
    }
    in(s, a) {
      const l = Array.from(new Set(a))
        .map((r) => (typeof r == "string" && hm.test(r) ? `"${r}"` : `${r}`))
        .join(",");
      return this.url.searchParams.append(s, `in.(${l})`), this;
    }
    notIn(s, a) {
      const l = Array.from(new Set(a))
        .map((r) => (typeof r == "string" && hm.test(r) ? `"${r}"` : `${r}`))
        .join(",");
      return this.url.searchParams.append(s, `not.in.(${l})`), this;
    }
    contains(s, a) {
      return (
        typeof a == "string"
          ? this.url.searchParams.append(s, `cs.${a}`)
          : Array.isArray(a)
          ? this.url.searchParams.append(s, `cs.{${a.join(",")}}`)
          : this.url.searchParams.append(s, `cs.${JSON.stringify(a)}`),
        this
      );
    }
    containedBy(s, a) {
      return (
        typeof a == "string"
          ? this.url.searchParams.append(s, `cd.${a}`)
          : Array.isArray(a)
          ? this.url.searchParams.append(s, `cd.{${a.join(",")}}`)
          : this.url.searchParams.append(s, `cd.${JSON.stringify(a)}`),
        this
      );
    }
    rangeGt(s, a) {
      return this.url.searchParams.append(s, `sr.${a}`), this;
    }
    rangeGte(s, a) {
      return this.url.searchParams.append(s, `nxl.${a}`), this;
    }
    rangeLt(s, a) {
      return this.url.searchParams.append(s, `sl.${a}`), this;
    }
    rangeLte(s, a) {
      return this.url.searchParams.append(s, `nxr.${a}`), this;
    }
    rangeAdjacent(s, a) {
      return this.url.searchParams.append(s, `adj.${a}`), this;
    }
    overlaps(s, a) {
      return (
        typeof a == "string"
          ? this.url.searchParams.append(s, `ov.${a}`)
          : this.url.searchParams.append(s, `ov.{${a.join(",")}}`),
        this
      );
    }
    textSearch(s, a, { config: l, type: r } = {}) {
      let c = "";
      r === "plain"
        ? (c = "pl")
        : r === "phrase"
        ? (c = "ph")
        : r === "websearch" && (c = "w");
      const h = l === void 0 ? "" : `(${l})`;
      return this.url.searchParams.append(s, `${c}fts${h}.${a}`), this;
    }
    match(s) {
      return (
        Object.entries(s)
          .filter(([a, l]) => l !== void 0)
          .forEach(([a, l]) => {
            this.url.searchParams.append(a, `eq.${l}`);
          }),
        this
      );
    }
    not(s, a, l) {
      return this.url.searchParams.append(s, `not.${a}.${l}`), this;
    }
    or(s, { foreignTable: a, referencedTable: l = a } = {}) {
      const r = l ? `${l}.or` : "or";
      return this.url.searchParams.append(r, `(${s})`), this;
    }
    filter(s, a, l) {
      return this.url.searchParams.append(s, `${a}.${l}`), this;
    }
  },
  Qv = class {
    constructor(
      s,
      { headers: a = {}, schema: l, fetch: r, urlLengthLimit: c = 8e3 }
    ) {
      (this.url = s),
        (this.headers = new Headers(a)),
        (this.schema = l),
        (this.fetch = r),
        (this.urlLengthLimit = c);
    }
    cloneRequestState() {
      return {
        url: new URL(this.url.toString()),
        headers: new Headers(this.headers),
      };
    }
    select(s, a) {
      const { head: l = !1, count: r } = a ?? {},
        c = l ? "HEAD" : "GET";
      let h = !1;
      const f = (s ?? "*")
          .split("")
          .map((g) => (/\s/.test(g) && !h ? "" : (g === '"' && (h = !h), g)))
          .join(""),
        { url: m, headers: v } = this.cloneRequestState();
      return (
        m.searchParams.set("select", f),
        r && v.append("Prefer", `count=${r}`),
        new li({
          method: c,
          url: m,
          headers: v,
          schema: this.schema,
          fetch: this.fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
    insert(s, { count: a, defaultToNull: l = !0 } = {}) {
      var r;
      const c = "POST",
        { url: h, headers: f } = this.cloneRequestState();
      if (
        (a && f.append("Prefer", `count=${a}`),
        l || f.append("Prefer", "missing=default"),
        Array.isArray(s))
      ) {
        const m = s.reduce((v, g) => v.concat(Object.keys(g)), []);
        if (m.length > 0) {
          const v = [...new Set(m)].map((g) => `"${g}"`);
          h.searchParams.set("columns", v.join(","));
        }
      }
      return new li({
        method: c,
        url: h,
        headers: f,
        schema: this.schema,
        body: s,
        fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
        urlLengthLimit: this.urlLengthLimit,
      });
    }
    upsert(
      s,
      {
        onConflict: a,
        ignoreDuplicates: l = !1,
        count: r,
        defaultToNull: c = !0,
      } = {}
    ) {
      var h;
      const f = "POST",
        { url: m, headers: v } = this.cloneRequestState();
      if (
        (v.append("Prefer", `resolution=${l ? "ignore" : "merge"}-duplicates`),
        a !== void 0 && m.searchParams.set("on_conflict", a),
        r && v.append("Prefer", `count=${r}`),
        c || v.append("Prefer", "missing=default"),
        Array.isArray(s))
      ) {
        const g = s.reduce((y, _) => y.concat(Object.keys(_)), []);
        if (g.length > 0) {
          const y = [...new Set(g)].map((_) => `"${_}"`);
          m.searchParams.set("columns", y.join(","));
        }
      }
      return new li({
        method: f,
        url: m,
        headers: v,
        schema: this.schema,
        body: s,
        fetch: (h = this.fetch) !== null && h !== void 0 ? h : fetch,
        urlLengthLimit: this.urlLengthLimit,
      });
    }
    update(s, { count: a } = {}) {
      var l;
      const r = "PATCH",
        { url: c, headers: h } = this.cloneRequestState();
      return (
        a && h.append("Prefer", `count=${a}`),
        new li({
          method: r,
          url: c,
          headers: h,
          schema: this.schema,
          body: s,
          fetch: (l = this.fetch) !== null && l !== void 0 ? l : fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
    delete({ count: s } = {}) {
      var a;
      const l = "DELETE",
        { url: r, headers: c } = this.cloneRequestState();
      return (
        s && c.append("Prefer", `count=${s}`),
        new li({
          method: l,
          url: r,
          headers: c,
          schema: this.schema,
          fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
  };
function ms(s) {
  "@babel/helpers - typeof";
  return (
    (ms =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (a) {
            return typeof a;
          }
        : function (a) {
            return a &&
              typeof Symbol == "function" &&
              a.constructor === Symbol &&
              a !== Symbol.prototype
              ? "symbol"
              : typeof a;
          }),
    ms(s)
  );
}
function Iv(s, a) {
  if (ms(s) != "object" || !s) return s;
  var l = s[Symbol.toPrimitive];
  if (l !== void 0) {
    var r = l.call(s, a);
    if (ms(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(s);
}
function Zv(s) {
  var a = Iv(s, "string");
  return ms(a) == "symbol" ? a : a + "";
}
function Pv(s, a, l) {
  return (
    (a = Zv(a)) in s
      ? Object.defineProperty(s, a, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (s[a] = l),
    s
  );
}
function fm(s, a) {
  var l = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(s);
    a &&
      (r = r.filter(function (c) {
        return Object.getOwnPropertyDescriptor(s, c).enumerable;
      })),
      l.push.apply(l, r);
  }
  return l;
}
function Hl(s) {
  for (var a = 1; a < arguments.length; a++) {
    var l = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? fm(Object(l), !0).forEach(function (r) {
          Pv(s, r, l[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l))
      : fm(Object(l)).forEach(function (r) {
          Object.defineProperty(s, r, Object.getOwnPropertyDescriptor(l, r));
        });
  }
  return s;
}
var Wv = class Hm {
  constructor(
    a,
    {
      headers: l = {},
      schema: r,
      fetch: c,
      timeout: h,
      urlLengthLimit: f = 8e3,
    } = {}
  ) {
    (this.url = a),
      (this.headers = new Headers(l)),
      (this.schemaName = r),
      (this.urlLengthLimit = f);
    const m = c ?? globalThis.fetch;
    h !== void 0 && h > 0
      ? (this.fetch = (v, g) => {
          const y = new AbortController(),
            _ = setTimeout(() => y.abort(), h),
            T = g == null ? void 0 : g.signal;
          if (T) {
            if (T.aborted) return clearTimeout(_), m(v, g);
            const x = () => {
              clearTimeout(_), y.abort();
            };
            return (
              T.addEventListener("abort", x, { once: !0 }),
              m(v, Hl(Hl({}, g), {}, { signal: y.signal })).finally(() => {
                clearTimeout(_), T.removeEventListener("abort", x);
              })
            );
          }
          return m(v, Hl(Hl({}, g), {}, { signal: y.signal })).finally(() =>
            clearTimeout(_)
          );
        })
      : (this.fetch = m);
  }
  from(a) {
    if (!a || typeof a != "string" || a.trim() === "")
      throw new Error(
        "Invalid relation name: relation must be a non-empty string."
      );
    return new Qv(new URL(`${this.url}/${a}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
    });
  }
  schema(a) {
    return new Hm(this.url, {
      headers: this.headers,
      schema: a,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
    });
  }
  rpc(a, l = {}, { head: r = !1, get: c = !1, count: h } = {}) {
    var f;
    let m;
    const v = new URL(`${this.url}/rpc/${a}`);
    let g;
    const y = (x) =>
        x !== null && typeof x == "object" && (!Array.isArray(x) || x.some(y)),
      _ = r && Object.values(l).some(y);
    _
      ? ((m = "POST"), (g = l))
      : r || c
      ? ((m = r ? "HEAD" : "GET"),
        Object.entries(l)
          .filter(([x, j]) => j !== void 0)
          .map(([x, j]) => [x, Array.isArray(j) ? `{${j.join(",")}}` : `${j}`])
          .forEach(([x, j]) => {
            v.searchParams.append(x, j);
          }))
      : ((m = "POST"), (g = l));
    const T = new Headers(this.headers);
    return (
      _
        ? T.set("Prefer", h ? `count=${h},return=minimal` : "return=minimal")
        : h && T.set("Prefer", `count=${h}`),
      new li({
        method: m,
        url: v,
        headers: T,
        schema: this.schemaName,
        body: g,
        fetch: (f = this.fetch) !== null && f !== void 0 ? f : fetch,
        urlLengthLimit: this.urlLengthLimit,
      })
    );
  }
};
class Fv {
  constructor() {}
  static detectEnvironment() {
    var a;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (
      typeof globalThis < "u" &&
      typeof globalThis.WebSocketPair < "u" &&
      typeof globalThis.WebSocket > "u"
    )
      return {
        type: "cloudflare",
        error:
          "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround:
          "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.",
      };
    if (
      (typeof globalThis < "u" && globalThis.EdgeRuntime) ||
      (typeof navigator < "u" &&
        !((a = navigator.userAgent) === null || a === void 0) &&
        a.includes("Vercel-Edge"))
    )
      return {
        type: "unsupported",
        error:
          "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround:
          "Use serverless functions or a different deployment target for WebSocket functionality.",
      };
    const l = globalThis.process;
    if (l) {
      const r = l.versions;
      if (r && r.node) {
        const c = r.node,
          h = parseInt(c.replace(/^v/, "").split(".")[0]);
        return h >= 22
          ? typeof globalThis.WebSocket < "u"
            ? { type: "native", constructor: globalThis.WebSocket }
            : {
                type: "unsupported",
                error: `Node.js ${h} detected but native WebSocket not found.`,
                workaround:
                  "Provide a WebSocket implementation via the transport option.",
              }
          : {
              type: "unsupported",
              error: `Node.js ${h} detected without native WebSocket support.`,
              workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`,
            };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround:
        "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.",
    };
  }
  static getWebSocketConstructor() {
    const a = this.detectEnvironment();
    if (a.constructor) return a.constructor;
    let l = a.error || "WebSocket not supported in this environment.";
    throw (
      (a.workaround &&
        (l += `

Suggested solution: ${a.workaround}`),
      new Error(l))
    );
  }
  static isWebSocketSupported() {
    try {
      const a = this.detectEnvironment();
      return a.type === "native" || a.type === "ws";
    } catch {
      return !1;
    }
  }
}
const ep = "2.101.0",
  tp = `realtime-js/${ep}`,
  np = "1.0.0",
  $m = "2.0.0",
  ap = $m,
  ip = 1e4,
  sp = 100,
  Kn = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving",
  },
  Gm = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    leave: "phx_leave",
    access_token: "access_token",
  },
  Do = { connecting: "connecting", closing: "closing", closed: "closed" };
class lp {
  constructor(a) {
    (this.HEADER_LENGTH = 1),
      (this.USER_BROADCAST_PUSH_META_LENGTH = 6),
      (this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }),
      (this.BINARY_ENCODING = 0),
      (this.JSON_ENCODING = 1),
      (this.BROADCAST_EVENT = "broadcast"),
      (this.allowedMetadataKeys = []),
      (this.allowedMetadataKeys = a ?? []);
  }
  encode(a, l) {
    if (
      a.event === this.BROADCAST_EVENT &&
      !(a.payload instanceof ArrayBuffer) &&
      typeof a.payload.event == "string"
    )
      return l(this._binaryEncodeUserBroadcastPush(a));
    let r = [a.join_ref, a.ref, a.topic, a.event, a.payload];
    return l(JSON.stringify(r));
  }
  _binaryEncodeUserBroadcastPush(a) {
    var l;
    return this._isArrayBuffer(
      (l = a.payload) === null || l === void 0 ? void 0 : l.payload
    )
      ? this._encodeBinaryUserBroadcastPush(a)
      : this._encodeJsonUserBroadcastPush(a);
  }
  _encodeBinaryUserBroadcastPush(a) {
    var l, r;
    const c =
      (r = (l = a.payload) === null || l === void 0 ? void 0 : l.payload) !==
        null && r !== void 0
        ? r
        : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(a, this.BINARY_ENCODING, c);
  }
  _encodeJsonUserBroadcastPush(a) {
    var l, r;
    const c =
        (r = (l = a.payload) === null || l === void 0 ? void 0 : l.payload) !==
          null && r !== void 0
          ? r
          : {},
      f = new TextEncoder().encode(JSON.stringify(c)).buffer;
    return this._encodeUserBroadcastPush(a, this.JSON_ENCODING, f);
  }
  _encodeUserBroadcastPush(a, l, r) {
    var c, h;
    const f = a.topic,
      m = (c = a.ref) !== null && c !== void 0 ? c : "",
      v = (h = a.join_ref) !== null && h !== void 0 ? h : "",
      g = a.payload.event,
      y = this.allowedMetadataKeys
        ? this._pick(a.payload, this.allowedMetadataKeys)
        : {},
      _ = Object.keys(y).length === 0 ? "" : JSON.stringify(y);
    if (v.length > 255)
      throw new Error(`joinRef length ${v.length} exceeds maximum of 255`);
    if (m.length > 255)
      throw new Error(`ref length ${m.length} exceeds maximum of 255`);
    if (f.length > 255)
      throw new Error(`topic length ${f.length} exceeds maximum of 255`);
    if (g.length > 255)
      throw new Error(`userEvent length ${g.length} exceeds maximum of 255`);
    if (_.length > 255)
      throw new Error(`metadata length ${_.length} exceeds maximum of 255`);
    const T =
        this.USER_BROADCAST_PUSH_META_LENGTH +
        v.length +
        m.length +
        f.length +
        g.length +
        _.length,
      x = new ArrayBuffer(this.HEADER_LENGTH + T);
    let j = new DataView(x),
      L = 0;
    j.setUint8(L++, this.KINDS.userBroadcastPush),
      j.setUint8(L++, v.length),
      j.setUint8(L++, m.length),
      j.setUint8(L++, f.length),
      j.setUint8(L++, g.length),
      j.setUint8(L++, _.length),
      j.setUint8(L++, l),
      Array.from(v, (X) => j.setUint8(L++, X.charCodeAt(0))),
      Array.from(m, (X) => j.setUint8(L++, X.charCodeAt(0))),
      Array.from(f, (X) => j.setUint8(L++, X.charCodeAt(0))),
      Array.from(g, (X) => j.setUint8(L++, X.charCodeAt(0))),
      Array.from(_, (X) => j.setUint8(L++, X.charCodeAt(0)));
    var q = new Uint8Array(x.byteLength + r.byteLength);
    return (
      q.set(new Uint8Array(x), 0),
      q.set(new Uint8Array(r), x.byteLength),
      q.buffer
    );
  }
  decode(a, l) {
    if (this._isArrayBuffer(a)) {
      let r = this._binaryDecode(a);
      return l(r);
    }
    if (typeof a == "string") {
      const r = JSON.parse(a),
        [c, h, f, m, v] = r;
      return l({ join_ref: c, ref: h, topic: f, event: m, payload: v });
    }
    return l({});
  }
  _binaryDecode(a) {
    const l = new DataView(a),
      r = l.getUint8(0),
      c = new TextDecoder();
    switch (r) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(a, l, c);
    }
  }
  _decodeUserBroadcast(a, l, r) {
    const c = l.getUint8(1),
      h = l.getUint8(2),
      f = l.getUint8(3),
      m = l.getUint8(4);
    let v = this.HEADER_LENGTH + 4;
    const g = r.decode(a.slice(v, v + c));
    v = v + c;
    const y = r.decode(a.slice(v, v + h));
    v = v + h;
    const _ = r.decode(a.slice(v, v + f));
    v = v + f;
    const T = a.slice(v, a.byteLength),
      x = m === this.JSON_ENCODING ? JSON.parse(r.decode(T)) : T,
      j = { type: this.BROADCAST_EVENT, event: y, payload: x };
    return (
      f > 0 && (j.meta = JSON.parse(_)),
      {
        join_ref: null,
        ref: null,
        topic: g,
        event: this.BROADCAST_EVENT,
        payload: j,
      }
    );
  }
  _isArrayBuffer(a) {
    var l;
    return (
      a instanceof ArrayBuffer ||
      ((l = a == null ? void 0 : a.constructor) === null || l === void 0
        ? void 0
        : l.name) === "ArrayBuffer"
    );
  }
  _pick(a, l) {
    return !a || typeof a != "object"
      ? {}
      : Object.fromEntries(Object.entries(a).filter(([r]) => l.includes(r)));
  }
}
var Ne;
(function (s) {
  (s.abstime = "abstime"),
    (s.bool = "bool"),
    (s.date = "date"),
    (s.daterange = "daterange"),
    (s.float4 = "float4"),
    (s.float8 = "float8"),
    (s.int2 = "int2"),
    (s.int4 = "int4"),
    (s.int4range = "int4range"),
    (s.int8 = "int8"),
    (s.int8range = "int8range"),
    (s.json = "json"),
    (s.jsonb = "jsonb"),
    (s.money = "money"),
    (s.numeric = "numeric"),
    (s.oid = "oid"),
    (s.reltime = "reltime"),
    (s.text = "text"),
    (s.time = "time"),
    (s.timestamp = "timestamp"),
    (s.timestamptz = "timestamptz"),
    (s.timetz = "timetz"),
    (s.tsrange = "tsrange"),
    (s.tstzrange = "tstzrange");
})(Ne || (Ne = {}));
const dm = (s, a, l = {}) => {
    var r;
    const c = (r = l.skipTypes) !== null && r !== void 0 ? r : [];
    return a
      ? Object.keys(a).reduce((h, f) => ((h[f] = rp(f, s, a, c)), h), {})
      : {};
  },
  rp = (s, a, l, r) => {
    const c = a.find((m) => m.name === s),
      h = c == null ? void 0 : c.type,
      f = l[s];
    return h && !r.includes(h) ? Vm(h, f) : zo(f);
  },
  Vm = (s, a) => {
    if (s.charAt(0) === "_") {
      const l = s.slice(1, s.length);
      return hp(a, l);
    }
    switch (s) {
      case Ne.bool:
        return up(a);
      case Ne.float4:
      case Ne.float8:
      case Ne.int2:
      case Ne.int4:
      case Ne.int8:
      case Ne.numeric:
      case Ne.oid:
        return op(a);
      case Ne.json:
      case Ne.jsonb:
        return cp(a);
      case Ne.timestamp:
        return fp(a);
      case Ne.abstime:
      case Ne.date:
      case Ne.daterange:
      case Ne.int4range:
      case Ne.int8range:
      case Ne.money:
      case Ne.reltime:
      case Ne.text:
      case Ne.time:
      case Ne.timestamptz:
      case Ne.timetz:
      case Ne.tsrange:
      case Ne.tstzrange:
        return zo(a);
      default:
        return zo(a);
    }
  },
  zo = (s) => s,
  up = (s) => {
    switch (s) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return s;
    }
  },
  op = (s) => {
    if (typeof s == "string") {
      const a = parseFloat(s);
      if (!Number.isNaN(a)) return a;
    }
    return s;
  },
  cp = (s) => {
    if (typeof s == "string")
      try {
        return JSON.parse(s);
      } catch {
        return s;
      }
    return s;
  },
  hp = (s, a) => {
    if (typeof s != "string") return s;
    const l = s.length - 1,
      r = s[l];
    if (s[0] === "{" && r === "}") {
      let h;
      const f = s.slice(1, l);
      try {
        h = JSON.parse("[" + f + "]");
      } catch {
        h = f ? f.split(",") : [];
      }
      return h.map((m) => Vm(a, m));
    }
    return s;
  },
  fp = (s) => (typeof s == "string" ? s.replace(" ", "T") : s),
  Km = (s) => {
    const a = new URL(s);
    return (
      (a.protocol = a.protocol.replace(/^ws/i, "http")),
      (a.pathname = a.pathname
        .replace(/\/+$/, "")
        .replace(/\/socket\/websocket$/i, "")
        .replace(/\/socket$/i, "")
        .replace(/\/websocket$/i, "")),
      a.pathname === "" || a.pathname === "/"
        ? (a.pathname = "/api/broadcast")
        : (a.pathname = a.pathname + "/api/broadcast"),
      a.href
    );
  };
var hs = (s) =>
    typeof s == "function"
      ? s
      : function () {
          return s;
        },
  dp = typeof self < "u" ? self : null,
  ri = typeof window < "u" ? window : null,
  It = dp || ri || globalThis,
  mp = "2.0.0",
  gp = 1e4,
  vp = 1e3,
  Zt = { connecting: 0, open: 1, closing: 2, closed: 3 },
  vt = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving",
  },
  vn = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave",
  },
  Mo = { longpoll: "longpoll", websocket: "websocket" },
  pp = { complete: 4 },
  Lo = "base64url.bearer.phx.",
  $l = class {
    constructor(s, a, l, r) {
      (this.channel = s),
        (this.event = a),
        (this.payload =
          l ||
          function () {
            return {};
          }),
        (this.receivedResp = null),
        (this.timeout = r),
        (this.timeoutTimer = null),
        (this.recHooks = []),
        (this.sent = !1),
        (this.ref = void 0);
    }
    resend(s) {
      (this.timeout = s), this.reset(), this.send();
    }
    send() {
      this.hasReceived("timeout") ||
        (this.startTimeout(),
        (this.sent = !0),
        this.channel.socket.push({
          topic: this.channel.topic,
          event: this.event,
          payload: this.payload(),
          ref: this.ref,
          join_ref: this.channel.joinRef(),
        }));
    }
    receive(s, a) {
      return (
        this.hasReceived(s) && a(this.receivedResp.response),
        this.recHooks.push({ status: s, callback: a }),
        this
      );
    }
    reset() {
      this.cancelRefEvent(),
        (this.ref = null),
        (this.refEvent = null),
        (this.receivedResp = null),
        (this.sent = !1);
    }
    destroy() {
      this.cancelRefEvent(), this.cancelTimeout();
    }
    matchReceive({ status: s, response: a, _ref: l }) {
      this.recHooks.filter((r) => r.status === s).forEach((r) => r.callback(a));
    }
    cancelRefEvent() {
      this.refEvent && this.channel.off(this.refEvent);
    }
    cancelTimeout() {
      clearTimeout(this.timeoutTimer), (this.timeoutTimer = null);
    }
    startTimeout() {
      this.timeoutTimer && this.cancelTimeout(),
        (this.ref = this.channel.socket.makeRef()),
        (this.refEvent = this.channel.replyEventName(this.ref)),
        this.channel.on(this.refEvent, (s) => {
          this.cancelRefEvent(),
            this.cancelTimeout(),
            (this.receivedResp = s),
            this.matchReceive(s);
        }),
        (this.timeoutTimer = setTimeout(() => {
          this.trigger("timeout", {});
        }, this.timeout));
    }
    hasReceived(s) {
      return this.receivedResp && this.receivedResp.status === s;
    }
    trigger(s, a) {
      this.channel.trigger(this.refEvent, { status: s, response: a });
    }
  },
  Ym = class {
    constructor(s, a) {
      (this.callback = s),
        (this.timerCalc = a),
        (this.timer = void 0),
        (this.tries = 0);
    }
    reset() {
      (this.tries = 0), clearTimeout(this.timer);
    }
    scheduleTimeout() {
      clearTimeout(this.timer),
        (this.timer = setTimeout(() => {
          (this.tries = this.tries + 1), this.callback();
        }, this.timerCalc(this.tries + 1)));
    }
  },
  yp = class {
    constructor(s, a, l) {
      (this.state = vt.closed),
        (this.topic = s),
        (this.params = hs(a || {})),
        (this.socket = l),
        (this.bindings = []),
        (this.bindingRef = 0),
        (this.timeout = this.socket.timeout),
        (this.joinedOnce = !1),
        (this.joinPush = new $l(this, vn.join, this.params, this.timeout)),
        (this.pushBuffer = []),
        (this.stateChangeRefs = []),
        (this.rejoinTimer = new Ym(() => {
          this.socket.isConnected() && this.rejoin();
        }, this.socket.rejoinAfterMs)),
        this.stateChangeRefs.push(
          this.socket.onError(() => this.rejoinTimer.reset())
        ),
        this.stateChangeRefs.push(
          this.socket.onOpen(() => {
            this.rejoinTimer.reset(), this.isErrored() && this.rejoin();
          })
        ),
        this.joinPush.receive("ok", () => {
          (this.state = vt.joined),
            this.rejoinTimer.reset(),
            this.pushBuffer.forEach((r) => r.send()),
            (this.pushBuffer = []);
        }),
        this.joinPush.receive("error", (r) => {
          (this.state = vt.errored),
            this.socket.hasLogger() &&
              this.socket.log("channel", `error ${this.topic}`, r),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
        }),
        this.onClose(() => {
          this.rejoinTimer.reset(),
            this.socket.hasLogger() &&
              this.socket.log("channel", `close ${this.topic}`),
            (this.state = vt.closed),
            this.socket.remove(this);
        }),
        this.onError((r) => {
          this.socket.hasLogger() &&
            this.socket.log("channel", `error ${this.topic}`, r),
            this.isJoining() && this.joinPush.reset(),
            (this.state = vt.errored),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
        }),
        this.joinPush.receive("timeout", () => {
          this.socket.hasLogger() &&
            this.socket.log(
              "channel",
              `timeout ${this.topic}`,
              this.joinPush.timeout
            ),
            new $l(this, vn.leave, hs({}), this.timeout).send(),
            (this.state = vt.errored),
            this.joinPush.reset(),
            this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
        }),
        this.on(vn.reply, (r, c) => {
          this.trigger(this.replyEventName(c), r);
        });
    }
    join(s = this.timeout) {
      if (this.joinedOnce)
        throw new Error(
          "tried to join multiple times. 'join' can only be called a single time per channel instance"
        );
      return (
        (this.timeout = s), (this.joinedOnce = !0), this.rejoin(), this.joinPush
      );
    }
    teardown() {
      this.pushBuffer.forEach((s) => s.destroy()),
        (this.pushBuffer = []),
        this.rejoinTimer.reset(),
        this.joinPush.destroy(),
        (this.state = vt.closed),
        (this.bindings = []);
    }
    onClose(s) {
      this.on(vn.close, s);
    }
    onError(s) {
      return this.on(vn.error, (a) => s(a));
    }
    on(s, a) {
      let l = this.bindingRef++;
      return this.bindings.push({ event: s, ref: l, callback: a }), l;
    }
    off(s, a) {
      this.bindings = this.bindings.filter(
        (l) => !(l.event === s && (typeof a > "u" || a === l.ref))
      );
    }
    canPush() {
      return this.socket.isConnected() && this.isJoined();
    }
    push(s, a, l = this.timeout) {
      if (((a = a || {}), !this.joinedOnce))
        throw new Error(
          `tried to push '${s}' to '${this.topic}' before joining. Use channel.join() before pushing events`
        );
      let r = new $l(
        this,
        s,
        function () {
          return a;
        },
        l
      );
      return (
        this.canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)),
        r
      );
    }
    leave(s = this.timeout) {
      this.rejoinTimer.reset(),
        this.joinPush.cancelTimeout(),
        (this.state = vt.leaving);
      let a = () => {
          this.socket.hasLogger() &&
            this.socket.log("channel", `leave ${this.topic}`),
            this.trigger(vn.close, "leave");
        },
        l = new $l(this, vn.leave, hs({}), s);
      return (
        l.receive("ok", () => a()).receive("timeout", () => a()),
        l.send(),
        this.canPush() || l.trigger("ok", {}),
        l
      );
    }
    onMessage(s, a, l) {
      return a;
    }
    filterBindings(s, a, l) {
      return !0;
    }
    isMember(s, a, l, r) {
      return this.topic !== s
        ? !1
        : r && r !== this.joinRef()
        ? (this.socket.hasLogger() &&
            this.socket.log("channel", "dropping outdated message", {
              topic: s,
              event: a,
              payload: l,
              joinRef: r,
            }),
          !1)
        : !0;
    }
    joinRef() {
      return this.joinPush.ref;
    }
    rejoin(s = this.timeout) {
      this.isLeaving() ||
        (this.socket.leaveOpenTopic(this.topic),
        (this.state = vt.joining),
        this.joinPush.resend(s));
    }
    trigger(s, a, l, r) {
      let c = this.onMessage(s, a, l, r);
      if (a && !c)
        throw new Error(
          "channel onMessage callbacks must return the payload, modified or unmodified"
        );
      let h = this.bindings.filter(
        (f) => f.event === s && this.filterBindings(f, a, l)
      );
      for (let f = 0; f < h.length; f++)
        h[f].callback(c, l, r || this.joinRef());
    }
    replyEventName(s) {
      return `chan_reply_${s}`;
    }
    isClosed() {
      return this.state === vt.closed;
    }
    isErrored() {
      return this.state === vt.errored;
    }
    isJoined() {
      return this.state === vt.joined;
    }
    isJoining() {
      return this.state === vt.joining;
    }
    isLeaving() {
      return this.state === vt.leaving;
    }
  },
  Ql = class {
    static request(s, a, l, r, c, h, f) {
      if (It.XDomainRequest) {
        let m = new It.XDomainRequest();
        return this.xdomainRequest(m, s, a, r, c, h, f);
      } else if (It.XMLHttpRequest) {
        let m = new It.XMLHttpRequest();
        return this.xhrRequest(m, s, a, l, r, c, h, f);
      } else {
        if (It.fetch && It.AbortController)
          return this.fetchRequest(s, a, l, r, c, h, f);
        throw new Error("No suitable XMLHttpRequest implementation found");
      }
    }
    static fetchRequest(s, a, l, r, c, h, f) {
      let m = { method: s, headers: l, body: r },
        v = null;
      return (
        c &&
          ((v = new AbortController()),
          setTimeout(() => v.abort(), c),
          (m.signal = v.signal)),
        It.fetch(a, m)
          .then((g) => g.text())
          .then((g) => this.parseJSON(g))
          .then((g) => f && f(g))
          .catch((g) => {
            g.name === "AbortError" && h ? h() : f && f(null);
          }),
        v
      );
    }
    static xdomainRequest(s, a, l, r, c, h, f) {
      return (
        (s.timeout = c),
        s.open(a, l),
        (s.onload = () => {
          let m = this.parseJSON(s.responseText);
          f && f(m);
        }),
        h && (s.ontimeout = h),
        (s.onprogress = () => {}),
        s.send(r),
        s
      );
    }
    static xhrRequest(s, a, l, r, c, h, f, m) {
      s.open(a, l, !0), (s.timeout = h);
      for (let [v, g] of Object.entries(r)) s.setRequestHeader(v, g);
      return (
        (s.onerror = () => m && m(null)),
        (s.onreadystatechange = () => {
          if (s.readyState === pp.complete && m) {
            let v = this.parseJSON(s.responseText);
            m(v);
          }
        }),
        f && (s.ontimeout = f),
        s.send(c),
        s
      );
    }
    static parseJSON(s) {
      if (!s || s === "") return null;
      try {
        return JSON.parse(s);
      } catch {
        return console && console.log("failed to parse JSON response", s), null;
      }
    }
    static serialize(s, a) {
      let l = [];
      for (var r in s) {
        if (!Object.prototype.hasOwnProperty.call(s, r)) continue;
        let c = a ? `${a}[${r}]` : r,
          h = s[r];
        typeof h == "object"
          ? l.push(this.serialize(h, c))
          : l.push(encodeURIComponent(c) + "=" + encodeURIComponent(h));
      }
      return l.join("&");
    }
    static appendParams(s, a) {
      if (Object.keys(a).length === 0) return s;
      let l = s.match(/\?/) ? "&" : "?";
      return `${s}${l}${this.serialize(a)}`;
    }
  },
  bp = (s) => {
    let a = "",
      l = new Uint8Array(s),
      r = l.byteLength;
    for (let c = 0; c < r; c++) a += String.fromCharCode(l[c]);
    return btoa(a);
  },
  ei = class {
    constructor(s, a) {
      a &&
        a.length === 2 &&
        a[1].startsWith(Lo) &&
        (this.authToken = atob(a[1].slice(Lo.length))),
        (this.endPoint = null),
        (this.token = null),
        (this.skipHeartbeat = !0),
        (this.reqs = new Set()),
        (this.awaitingBatchAck = !1),
        (this.currentBatch = null),
        (this.currentBatchTimer = null),
        (this.batchBuffer = []),
        (this.onopen = function () {}),
        (this.onerror = function () {}),
        (this.onmessage = function () {}),
        (this.onclose = function () {}),
        (this.pollEndpoint = this.normalizeEndpoint(s)),
        (this.readyState = Zt.connecting),
        setTimeout(() => this.poll(), 0);
    }
    normalizeEndpoint(s) {
      return s
        .replace("ws://", "http://")
        .replace("wss://", "https://")
        .replace(new RegExp("(.*)/" + Mo.websocket), "$1/" + Mo.longpoll);
    }
    endpointURL() {
      return Ql.appendParams(this.pollEndpoint, { token: this.token });
    }
    closeAndRetry(s, a, l) {
      this.close(s, a, l), (this.readyState = Zt.connecting);
    }
    ontimeout() {
      this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1);
    }
    isActive() {
      return this.readyState === Zt.open || this.readyState === Zt.connecting;
    }
    poll() {
      const s = { Accept: "application/json" };
      this.authToken && (s["X-Phoenix-AuthToken"] = this.authToken),
        this.ajax(
          "GET",
          s,
          null,
          () => this.ontimeout(),
          (a) => {
            if (a) {
              var { status: l, token: r, messages: c } = a;
              if (l === 410 && this.token !== null) {
                this.onerror(410), this.closeAndRetry(3410, "session_gone", !1);
                return;
              }
              this.token = r;
            } else l = 0;
            switch (l) {
              case 200:
                c.forEach((h) => {
                  setTimeout(() => this.onmessage({ data: h }), 0);
                }),
                  this.poll();
                break;
              case 204:
                this.poll();
                break;
              case 410:
                (this.readyState = Zt.open), this.onopen({}), this.poll();
                break;
              case 403:
                this.onerror(403), this.close(1008, "forbidden", !1);
                break;
              case 0:
              case 500:
                this.onerror(500),
                  this.closeAndRetry(1011, "internal server error", 500);
                break;
              default:
                throw new Error(`unhandled poll status ${l}`);
            }
          }
        );
    }
    send(s) {
      typeof s != "string" && (s = bp(s)),
        this.currentBatch
          ? this.currentBatch.push(s)
          : this.awaitingBatchAck
          ? this.batchBuffer.push(s)
          : ((this.currentBatch = [s]),
            (this.currentBatchTimer = setTimeout(() => {
              this.batchSend(this.currentBatch), (this.currentBatch = null);
            }, 0)));
    }
    batchSend(s) {
      (this.awaitingBatchAck = !0),
        this.ajax(
          "POST",
          { "Content-Type": "application/x-ndjson" },
          s.join(`
`),
          () => this.onerror("timeout"),
          (a) => {
            (this.awaitingBatchAck = !1),
              !a || a.status !== 200
                ? (this.onerror(a && a.status),
                  this.closeAndRetry(1011, "internal server error", !1))
                : this.batchBuffer.length > 0 &&
                  (this.batchSend(this.batchBuffer), (this.batchBuffer = []));
          }
        );
    }
    close(s, a, l) {
      for (let c of this.reqs) c.abort();
      this.readyState = Zt.closed;
      let r = Object.assign(
        { code: 1e3, reason: void 0, wasClean: !0 },
        { code: s, reason: a, wasClean: l }
      );
      (this.batchBuffer = []),
        clearTimeout(this.currentBatchTimer),
        (this.currentBatchTimer = null),
        typeof CloseEvent < "u"
          ? this.onclose(new CloseEvent("close", r))
          : this.onclose(r);
    }
    ajax(s, a, l, r, c) {
      let h,
        f = () => {
          this.reqs.delete(h), r();
        };
      (h = Ql.request(s, this.endpointURL(), a, l, this.timeout, f, (m) => {
        this.reqs.delete(h), this.isActive() && c(m);
      })),
        this.reqs.add(h);
    }
  },
  _p = class os {
    constructor(a, l = {}) {
      let r = l.events || { state: "presence_state", diff: "presence_diff" };
      (this.state = {}),
        (this.pendingDiffs = []),
        (this.channel = a),
        (this.joinRef = null),
        (this.caller = {
          onJoin: function () {},
          onLeave: function () {},
          onSync: function () {},
        }),
        this.channel.on(r.state, (c) => {
          let { onJoin: h, onLeave: f, onSync: m } = this.caller;
          (this.joinRef = this.channel.joinRef()),
            (this.state = os.syncState(this.state, c, h, f)),
            this.pendingDiffs.forEach((v) => {
              this.state = os.syncDiff(this.state, v, h, f);
            }),
            (this.pendingDiffs = []),
            m();
        }),
        this.channel.on(r.diff, (c) => {
          let { onJoin: h, onLeave: f, onSync: m } = this.caller;
          this.inPendingSyncState()
            ? this.pendingDiffs.push(c)
            : ((this.state = os.syncDiff(this.state, c, h, f)), m());
        });
    }
    onJoin(a) {
      this.caller.onJoin = a;
    }
    onLeave(a) {
      this.caller.onLeave = a;
    }
    onSync(a) {
      this.caller.onSync = a;
    }
    list(a) {
      return os.list(this.state, a);
    }
    inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel.joinRef();
    }
    static syncState(a, l, r, c) {
      let h = this.clone(a),
        f = {},
        m = {};
      return (
        this.map(h, (v, g) => {
          l[v] || (m[v] = g);
        }),
        this.map(l, (v, g) => {
          let y = h[v];
          if (y) {
            let _ = g.metas.map((L) => L.phx_ref),
              T = y.metas.map((L) => L.phx_ref),
              x = g.metas.filter((L) => T.indexOf(L.phx_ref) < 0),
              j = y.metas.filter((L) => _.indexOf(L.phx_ref) < 0);
            x.length > 0 && ((f[v] = g), (f[v].metas = x)),
              j.length > 0 && ((m[v] = this.clone(y)), (m[v].metas = j));
          } else f[v] = g;
        }),
        this.syncDiff(h, { joins: f, leaves: m }, r, c)
      );
    }
    static syncDiff(a, l, r, c) {
      let { joins: h, leaves: f } = this.clone(l);
      return (
        r || (r = function () {}),
        c || (c = function () {}),
        this.map(h, (m, v) => {
          let g = a[m];
          if (((a[m] = this.clone(v)), g)) {
            let y = a[m].metas.map((T) => T.phx_ref),
              _ = g.metas.filter((T) => y.indexOf(T.phx_ref) < 0);
            a[m].metas.unshift(..._);
          }
          r(m, g, v);
        }),
        this.map(f, (m, v) => {
          let g = a[m];
          if (!g) return;
          let y = v.metas.map((_) => _.phx_ref);
          (g.metas = g.metas.filter((_) => y.indexOf(_.phx_ref) < 0)),
            c(m, g, v),
            g.metas.length === 0 && delete a[m];
        }),
        a
      );
    }
    static list(a, l) {
      return (
        l ||
          (l = function (r, c) {
            return c;
          }),
        this.map(a, (r, c) => l(r, c))
      );
    }
    static map(a, l) {
      return Object.getOwnPropertyNames(a).map((r) => l(r, a[r]));
    }
    static clone(a) {
      return JSON.parse(JSON.stringify(a));
    }
  },
  Gl = {
    HEADER_LENGTH: 1,
    META_LENGTH: 4,
    KINDS: { push: 0, reply: 1, broadcast: 2 },
    encode(s, a) {
      if (s.payload.constructor === ArrayBuffer) return a(this.binaryEncode(s));
      {
        let l = [s.join_ref, s.ref, s.topic, s.event, s.payload];
        return a(JSON.stringify(l));
      }
    },
    decode(s, a) {
      if (s.constructor === ArrayBuffer) return a(this.binaryDecode(s));
      {
        let [l, r, c, h, f] = JSON.parse(s);
        return a({ join_ref: l, ref: r, topic: c, event: h, payload: f });
      }
    },
    binaryEncode(s) {
      let { join_ref: a, ref: l, event: r, topic: c, payload: h } = s,
        f = this.META_LENGTH + a.length + l.length + c.length + r.length,
        m = new ArrayBuffer(this.HEADER_LENGTH + f),
        v = new DataView(m),
        g = 0;
      v.setUint8(g++, this.KINDS.push),
        v.setUint8(g++, a.length),
        v.setUint8(g++, l.length),
        v.setUint8(g++, c.length),
        v.setUint8(g++, r.length),
        Array.from(a, (_) => v.setUint8(g++, _.charCodeAt(0))),
        Array.from(l, (_) => v.setUint8(g++, _.charCodeAt(0))),
        Array.from(c, (_) => v.setUint8(g++, _.charCodeAt(0))),
        Array.from(r, (_) => v.setUint8(g++, _.charCodeAt(0)));
      var y = new Uint8Array(m.byteLength + h.byteLength);
      return (
        y.set(new Uint8Array(m), 0),
        y.set(new Uint8Array(h), m.byteLength),
        y.buffer
      );
    },
    binaryDecode(s) {
      let a = new DataView(s),
        l = a.getUint8(0),
        r = new TextDecoder();
      switch (l) {
        case this.KINDS.push:
          return this.decodePush(s, a, r);
        case this.KINDS.reply:
          return this.decodeReply(s, a, r);
        case this.KINDS.broadcast:
          return this.decodeBroadcast(s, a, r);
      }
    },
    decodePush(s, a, l) {
      let r = a.getUint8(1),
        c = a.getUint8(2),
        h = a.getUint8(3),
        f = this.HEADER_LENGTH + this.META_LENGTH - 1,
        m = l.decode(s.slice(f, f + r));
      f = f + r;
      let v = l.decode(s.slice(f, f + c));
      f = f + c;
      let g = l.decode(s.slice(f, f + h));
      f = f + h;
      let y = s.slice(f, s.byteLength);
      return { join_ref: m, ref: null, topic: v, event: g, payload: y };
    },
    decodeReply(s, a, l) {
      let r = a.getUint8(1),
        c = a.getUint8(2),
        h = a.getUint8(3),
        f = a.getUint8(4),
        m = this.HEADER_LENGTH + this.META_LENGTH,
        v = l.decode(s.slice(m, m + r));
      m = m + r;
      let g = l.decode(s.slice(m, m + c));
      m = m + c;
      let y = l.decode(s.slice(m, m + h));
      m = m + h;
      let _ = l.decode(s.slice(m, m + f));
      m = m + f;
      let T = s.slice(m, s.byteLength),
        x = { status: _, response: T };
      return { join_ref: v, ref: g, topic: y, event: vn.reply, payload: x };
    },
    decodeBroadcast(s, a, l) {
      let r = a.getUint8(1),
        c = a.getUint8(2),
        h = this.HEADER_LENGTH + 2,
        f = l.decode(s.slice(h, h + r));
      h = h + r;
      let m = l.decode(s.slice(h, h + c));
      h = h + c;
      let v = s.slice(h, s.byteLength);
      return { join_ref: null, ref: null, topic: f, event: m, payload: v };
    },
  },
  wp = class {
    constructor(s, a = {}) {
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
        (this.channels = []),
        (this.sendBuffer = []),
        (this.ref = 0),
        (this.fallbackRef = null),
        (this.timeout = a.timeout || gp),
        (this.transport = a.transport || It.WebSocket || ei),
        (this.conn = void 0),
        (this.primaryPassedHealthCheck = !1),
        (this.longPollFallbackMs = a.longPollFallbackMs),
        (this.fallbackTimer = null),
        (this.sessionStore = a.sessionStorage || (It && It.sessionStorage)),
        (this.establishedConnections = 0),
        (this.defaultEncoder = Gl.encode.bind(Gl)),
        (this.defaultDecoder = Gl.decode.bind(Gl)),
        (this.closeWasClean = !0),
        (this.disconnecting = !1),
        (this.binaryType = a.binaryType || "arraybuffer"),
        (this.connectClock = 1),
        (this.pageHidden = !1),
        (this.encode = void 0),
        (this.decode = void 0),
        this.transport !== ei
          ? ((this.encode = a.encode || this.defaultEncoder),
            (this.decode = a.decode || this.defaultDecoder))
          : ((this.encode = this.defaultEncoder),
            (this.decode = this.defaultDecoder));
      let l = null;
      ri &&
        ri.addEventListener &&
        (ri.addEventListener("pagehide", (r) => {
          this.conn && (this.disconnect(), (l = this.connectClock));
        }),
        ri.addEventListener("pageshow", (r) => {
          l === this.connectClock && ((l = null), this.connect());
        }),
        ri.addEventListener("visibilitychange", () => {
          document.visibilityState === "hidden"
            ? (this.pageHidden = !0)
            : ((this.pageHidden = !1),
              !this.isConnected() &&
                !this.closeWasClean &&
                this.teardown(() => this.connect()));
        })),
        (this.heartbeatIntervalMs = a.heartbeatIntervalMs || 3e4),
        (this.autoSendHeartbeat = a.autoSendHeartbeat ?? !0),
        (this.heartbeatCallback = a.heartbeatCallback ?? (() => {})),
        (this.rejoinAfterMs = (r) =>
          a.rejoinAfterMs ? a.rejoinAfterMs(r) : [1e3, 2e3, 5e3][r - 1] || 1e4),
        (this.reconnectAfterMs = (r) =>
          a.reconnectAfterMs
            ? a.reconnectAfterMs(r)
            : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][r - 1] || 5e3),
        (this.logger = a.logger || null),
        !this.logger &&
          a.debug &&
          (this.logger = (r, c, h) => {
            console.log(`${r}: ${c}`, h);
          }),
        (this.longpollerTimeout = a.longpollerTimeout || 2e4),
        (this.params = hs(a.params || {})),
        (this.endPoint = `${s}/${Mo.websocket}`),
        (this.vsn = a.vsn || mp),
        (this.heartbeatTimeoutTimer = null),
        (this.heartbeatTimer = null),
        (this.heartbeatSentAt = null),
        (this.pendingHeartbeatRef = null),
        (this.reconnectTimer = new Ym(() => {
          if (this.pageHidden) {
            this.log("Not reconnecting as page is hidden!"), this.teardown();
            return;
          }
          this.teardown(async () => {
            a.beforeReconnect && (await a.beforeReconnect()), this.connect();
          });
        }, this.reconnectAfterMs)),
        (this.authToken = a.authToken);
    }
    getLongPollTransport() {
      return ei;
    }
    replaceTransport(s) {
      this.connectClock++,
        (this.closeWasClean = !0),
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        this.conn && (this.conn.close(), (this.conn = null)),
        (this.transport = s);
    }
    protocol() {
      return location.protocol.match(/^https/) ? "wss" : "ws";
    }
    endPointURL() {
      let s = Ql.appendParams(Ql.appendParams(this.endPoint, this.params()), {
        vsn: this.vsn,
      });
      return s.charAt(0) !== "/"
        ? s
        : s.charAt(1) === "/"
        ? `${this.protocol()}:${s}`
        : `${this.protocol()}://${location.host}${s}`;
    }
    disconnect(s, a, l) {
      this.connectClock++,
        (this.disconnecting = !0),
        (this.closeWasClean = !0),
        clearTimeout(this.fallbackTimer),
        this.reconnectTimer.reset(),
        this.teardown(
          () => {
            (this.disconnecting = !1), s && s();
          },
          a,
          l
        );
    }
    connect(s) {
      s &&
        (console &&
          console.log(
            "passing params to connect is deprecated. Instead pass :params to the Socket constructor"
          ),
        (this.params = hs(s))),
        !(this.conn && !this.disconnecting) &&
          (this.longPollFallbackMs && this.transport !== ei
            ? this.connectWithFallback(ei, this.longPollFallbackMs)
            : this.transportConnect());
    }
    log(s, a, l) {
      this.logger && this.logger(s, a, l);
    }
    hasLogger() {
      return this.logger !== null;
    }
    onOpen(s) {
      let a = this.makeRef();
      return this.stateChangeCallbacks.open.push([a, s]), a;
    }
    onClose(s) {
      let a = this.makeRef();
      return this.stateChangeCallbacks.close.push([a, s]), a;
    }
    onError(s) {
      let a = this.makeRef();
      return this.stateChangeCallbacks.error.push([a, s]), a;
    }
    onMessage(s) {
      let a = this.makeRef();
      return this.stateChangeCallbacks.message.push([a, s]), a;
    }
    onHeartbeat(s) {
      this.heartbeatCallback = s;
    }
    ping(s) {
      if (!this.isConnected()) return !1;
      let a = this.makeRef(),
        l = Date.now();
      this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: a });
      let r = this.onMessage((c) => {
        c.ref === a && (this.off([r]), s(Date.now() - l));
      });
      return !0;
    }
    transportName(s) {
      switch (s) {
        case ei:
          return "LongPoll";
        default:
          return s.name;
      }
    }
    transportConnect() {
      this.connectClock++, (this.closeWasClean = !1);
      let s;
      this.authToken &&
        (s = ["phoenix", `${Lo}${btoa(this.authToken).replace(/=/g, "")}`]),
        (this.conn = new this.transport(this.endPointURL(), s)),
        (this.conn.binaryType = this.binaryType),
        (this.conn.timeout = this.longpollerTimeout),
        (this.conn.onopen = () => this.onConnOpen()),
        (this.conn.onerror = (a) => this.onConnError(a)),
        (this.conn.onmessage = (a) => this.onConnMessage(a)),
        (this.conn.onclose = (a) => this.onConnClose(a));
    }
    getSession(s) {
      return this.sessionStore && this.sessionStore.getItem(s);
    }
    storeSession(s, a) {
      this.sessionStore && this.sessionStore.setItem(s, a);
    }
    connectWithFallback(s, a = 2500) {
      clearTimeout(this.fallbackTimer);
      let l = !1,
        r = !0,
        c,
        h,
        f = this.transportName(s),
        m = (v) => {
          this.log("transport", `falling back to ${f}...`, v),
            this.off([c, h]),
            (r = !1),
            this.replaceTransport(s),
            this.transportConnect();
        };
      if (this.getSession(`phx:fallback:${f}`)) return m("memorized");
      (this.fallbackTimer = setTimeout(m, a)),
        (h = this.onError((v) => {
          this.log("transport", "error", v),
            r && !l && (clearTimeout(this.fallbackTimer), m(v));
        })),
        this.fallbackRef && this.off([this.fallbackRef]),
        (this.fallbackRef = this.onOpen(() => {
          if (((l = !0), !r)) {
            let v = this.transportName(s);
            return (
              this.primaryPassedHealthCheck ||
                this.storeSession(`phx:fallback:${v}`, "true"),
              this.log("transport", `established ${v} fallback`)
            );
          }
          clearTimeout(this.fallbackTimer),
            (this.fallbackTimer = setTimeout(m, a)),
            this.ping((v) => {
              this.log("transport", "connected to primary after", v),
                (this.primaryPassedHealthCheck = !0),
                clearTimeout(this.fallbackTimer);
            });
        })),
        this.transportConnect();
    }
    clearHeartbeats() {
      clearTimeout(this.heartbeatTimer),
        clearTimeout(this.heartbeatTimeoutTimer);
    }
    onConnOpen() {
      this.hasLogger() &&
        this.log("transport", `connected to ${this.endPointURL()}`),
        (this.closeWasClean = !1),
        (this.disconnecting = !1),
        this.establishedConnections++,
        this.flushSendBuffer(),
        this.reconnectTimer.reset(),
        this.autoSendHeartbeat && this.resetHeartbeat(),
        this.triggerStateCallbacks("open");
    }
    heartbeatTimeout() {
      if (this.pendingHeartbeatRef) {
        (this.pendingHeartbeatRef = null),
          (this.heartbeatSentAt = null),
          this.hasLogger() &&
            this.log(
              "transport",
              "heartbeat timeout. Attempting to re-establish connection"
            );
        try {
          this.heartbeatCallback("timeout");
        } catch (s) {
          this.log("error", "error in heartbeat callback", s);
        }
        this.triggerChanError(),
          (this.closeWasClean = !1),
          this.teardown(
            () => this.reconnectTimer.scheduleTimeout(),
            vp,
            "heartbeat timeout"
          );
      }
    }
    resetHeartbeat() {
      (this.conn && this.conn.skipHeartbeat) ||
        ((this.pendingHeartbeatRef = null),
        this.clearHeartbeats(),
        (this.heartbeatTimer = setTimeout(
          () => this.sendHeartbeat(),
          this.heartbeatIntervalMs
        )));
    }
    teardown(s, a, l) {
      if (!this.conn) return s && s();
      const r = this.conn;
      this.waitForBufferDone(r, () => {
        a ? r.close(a, l || "") : r.close(),
          this.waitForSocketClosed(r, () => {
            this.conn === r &&
              ((this.conn.onopen = function () {}),
              (this.conn.onerror = function () {}),
              (this.conn.onmessage = function () {}),
              (this.conn.onclose = function () {}),
              (this.conn = null)),
              s && s();
          });
      });
    }
    waitForBufferDone(s, a, l = 1) {
      if (l === 5 || !s.bufferedAmount) {
        a();
        return;
      }
      setTimeout(() => {
        this.waitForBufferDone(s, a, l + 1);
      }, 150 * l);
    }
    waitForSocketClosed(s, a, l = 1) {
      if (l === 5 || s.readyState === Zt.closed) {
        a();
        return;
      }
      setTimeout(() => {
        this.waitForSocketClosed(s, a, l + 1);
      }, 150 * l);
    }
    onConnClose(s) {
      this.conn && (this.conn.onclose = () => {}),
        this.hasLogger() && this.log("transport", "close", s),
        this.triggerChanError(),
        this.clearHeartbeats(),
        this.closeWasClean || this.reconnectTimer.scheduleTimeout(),
        this.triggerStateCallbacks("close", s);
    }
    onConnError(s) {
      this.hasLogger() && this.log("transport", s);
      let a = this.transport,
        l = this.establishedConnections;
      this.triggerStateCallbacks("error", s, a, l),
        (a === this.transport || l > 0) && this.triggerChanError();
    }
    triggerChanError() {
      this.channels.forEach((s) => {
        s.isErrored() || s.isLeaving() || s.isClosed() || s.trigger(vn.error);
      });
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case Zt.connecting:
          return "connecting";
        case Zt.open:
          return "open";
        case Zt.closing:
          return "closing";
        default:
          return "closed";
      }
    }
    isConnected() {
      return this.connectionState() === "open";
    }
    remove(s) {
      this.off(s.stateChangeRefs),
        (this.channels = this.channels.filter((a) => a !== s));
    }
    off(s) {
      for (let a in this.stateChangeCallbacks)
        this.stateChangeCallbacks[a] = this.stateChangeCallbacks[a].filter(
          ([l]) => s.indexOf(l) === -1
        );
    }
    channel(s, a = {}) {
      let l = new yp(s, a, this);
      return this.channels.push(l), l;
    }
    push(s) {
      if (this.hasLogger()) {
        let { topic: a, event: l, payload: r, ref: c, join_ref: h } = s;
        this.log("push", `${a} ${l} (${h}, ${c})`, r);
      }
      this.isConnected()
        ? this.encode(s, (a) => this.conn.send(a))
        : this.sendBuffer.push(() => this.encode(s, (a) => this.conn.send(a)));
    }
    makeRef() {
      let s = this.ref + 1;
      return (
        s === this.ref ? (this.ref = 0) : (this.ref = s), this.ref.toString()
      );
    }
    sendHeartbeat() {
      if (!this.isConnected()) {
        try {
          this.heartbeatCallback("disconnected");
        } catch (s) {
          this.log("error", "error in heartbeat callback", s);
        }
        return;
      }
      if (this.pendingHeartbeatRef) {
        this.heartbeatTimeout();
        return;
      }
      (this.pendingHeartbeatRef = this.makeRef()),
        (this.heartbeatSentAt = Date.now()),
        this.push({
          topic: "phoenix",
          event: "heartbeat",
          payload: {},
          ref: this.pendingHeartbeatRef,
        });
      try {
        this.heartbeatCallback("sent");
      } catch (s) {
        this.log("error", "error in heartbeat callback", s);
      }
      this.heartbeatTimeoutTimer = setTimeout(
        () => this.heartbeatTimeout(),
        this.heartbeatIntervalMs
      );
    }
    flushSendBuffer() {
      this.isConnected() &&
        this.sendBuffer.length > 0 &&
        (this.sendBuffer.forEach((s) => s()), (this.sendBuffer = []));
    }
    onConnMessage(s) {
      this.decode(s.data, (a) => {
        let { topic: l, event: r, payload: c, ref: h, join_ref: f } = a;
        if (h && h === this.pendingHeartbeatRef) {
          const m = this.heartbeatSentAt
            ? Date.now() - this.heartbeatSentAt
            : void 0;
          this.clearHeartbeats();
          try {
            this.heartbeatCallback(c.status === "ok" ? "ok" : "error", m);
          } catch (v) {
            this.log("error", "error in heartbeat callback", v);
          }
          (this.pendingHeartbeatRef = null),
            (this.heartbeatSentAt = null),
            this.autoSendHeartbeat &&
              (this.heartbeatTimer = setTimeout(
                () => this.sendHeartbeat(),
                this.heartbeatIntervalMs
              ));
        }
        this.hasLogger() &&
          this.log(
            "receive",
            `${c.status || ""} ${l} ${r} ${(h && "(" + h + ")") || ""}`.trim(),
            c
          );
        for (let m = 0; m < this.channels.length; m++) {
          const v = this.channels[m];
          v.isMember(l, r, c, f) && v.trigger(r, c, h, f);
        }
        this.triggerStateCallbacks("message", a);
      });
    }
    triggerStateCallbacks(s, ...a) {
      try {
        this.stateChangeCallbacks[s].forEach(([l, r]) => {
          try {
            r(...a);
          } catch (c) {
            this.log("error", `error in ${s} callback`, c);
          }
        });
      } catch (l) {
        this.log("error", `error triggering ${s} callbacks`, l);
      }
    }
    leaveOpenTopic(s) {
      let a = this.channels.find(
        (l) => l.topic === s && (l.isJoined() || l.isJoining())
      );
      a &&
        (this.hasLogger() &&
          this.log("transport", `leaving duplicate topic "${s}"`),
        a.leave());
    }
  };
class fs {
  constructor(a, l) {
    const r = Ep(l);
    (this.presence = new _p(a.getChannel(), r)),
      this.presence.onJoin((c, h, f) => {
        const m = fs.onJoinPayload(c, h, f);
        a.getChannel().trigger("presence", m);
      }),
      this.presence.onLeave((c, h, f) => {
        const m = fs.onLeavePayload(c, h, f);
        a.getChannel().trigger("presence", m);
      }),
      this.presence.onSync(() => {
        a.getChannel().trigger("presence", { event: "sync" });
      });
  }
  get state() {
    return fs.transformState(this.presence.state);
  }
  static transformState(a) {
    return (
      (a = Sp(a)),
      Object.getOwnPropertyNames(a).reduce((l, r) => {
        const c = a[r];
        return (l[r] = Jl(c)), l;
      }, {})
    );
  }
  static onJoinPayload(a, l, r) {
    const c = mm(l),
      h = Jl(r);
    return { event: "join", key: a, currentPresences: c, newPresences: h };
  }
  static onLeavePayload(a, l, r) {
    const c = mm(l),
      h = Jl(r);
    return { event: "leave", key: a, currentPresences: c, leftPresences: h };
  }
}
function Jl(s) {
  return s.metas.map(
    (a) => (
      (a.presence_ref = a.phx_ref), delete a.phx_ref, delete a.phx_ref_prev, a
    )
  );
}
function Sp(s) {
  return JSON.parse(JSON.stringify(s));
}
function Ep(s) {
  return (s == null ? void 0 : s.events) && { events: s.events };
}
function mm(s) {
  return s != null && s.metas ? Jl(s) : [];
}
var gm;
(function (s) {
  (s.SYNC = "sync"), (s.JOIN = "join"), (s.LEAVE = "leave");
})(gm || (gm = {}));
class Tp {
  get state() {
    return this.presenceAdapter.state;
  }
  constructor(a, l) {
    (this.channel = a),
      (this.presenceAdapter = new fs(this.channel.channelAdapter, l));
  }
}
class Ap {
  constructor(a, l, r) {
    const c = xp(r);
    (this.channel = a.getSocket().channel(l, c)), (this.socket = a);
  }
  get state() {
    return this.channel.state;
  }
  set state(a) {
    this.channel.state = a;
  }
  get joinedOnce() {
    return this.channel.joinedOnce;
  }
  get joinPush() {
    return this.channel.joinPush;
  }
  get rejoinTimer() {
    return this.channel.rejoinTimer;
  }
  on(a, l) {
    return this.channel.on(a, l);
  }
  off(a, l) {
    this.channel.off(a, l);
  }
  subscribe(a) {
    return this.channel.join(a);
  }
  unsubscribe(a) {
    return this.channel.leave(a);
  }
  teardown() {
    this.channel.teardown();
  }
  onClose(a) {
    this.channel.onClose(a);
  }
  onError(a) {
    return this.channel.onError(a);
  }
  push(a, l, r) {
    let c;
    try {
      c = this.channel.push(a, l, r);
    } catch {
      throw `tried to push '${a}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`;
    }
    if (this.channel.pushBuffer.length > sp) {
      const h = this.channel.pushBuffer.shift();
      h.cancelTimeout(),
        this.socket.log(
          "channel",
          `discarded push due to buffer overflow: ${h.event}`,
          h.payload()
        );
    }
    return c;
  }
  updateJoinPayload(a) {
    const l = this.channel.joinPush.payload();
    this.channel.joinPush.payload = () =>
      Object.assign(Object.assign({}, l), a);
  }
  canPush() {
    return this.socket.isConnected() && this.state === Kn.joined;
  }
  isJoined() {
    return this.state === Kn.joined;
  }
  isJoining() {
    return this.state === Kn.joining;
  }
  isClosed() {
    return this.state === Kn.closed;
  }
  isLeaving() {
    return this.state === Kn.leaving;
  }
  updateFilterBindings(a) {
    this.channel.filterBindings = a;
  }
  updatePayloadTransform(a) {
    this.channel.onMessage = a;
  }
  getChannel() {
    return this.channel;
  }
}
function xp(s) {
  return {
    config: Object.assign(
      {
        broadcast: { ack: !1, self: !1 },
        presence: { key: "", enabled: !1 },
        private: !1,
      },
      s.config
    ),
  };
}
var vm;
(function (s) {
  (s.ALL = "*"),
    (s.INSERT = "INSERT"),
    (s.UPDATE = "UPDATE"),
    (s.DELETE = "DELETE");
})(vm || (vm = {}));
var ci;
(function (s) {
  (s.BROADCAST = "broadcast"),
    (s.PRESENCE = "presence"),
    (s.POSTGRES_CHANGES = "postgres_changes"),
    (s.SYSTEM = "system");
})(ci || (ci = {}));
var pn;
(function (s) {
  (s.SUBSCRIBED = "SUBSCRIBED"),
    (s.TIMED_OUT = "TIMED_OUT"),
    (s.CLOSED = "CLOSED"),
    (s.CHANNEL_ERROR = "CHANNEL_ERROR");
})(pn || (pn = {}));
class ds {
  get state() {
    return this.channelAdapter.state;
  }
  set state(a) {
    this.channelAdapter.state = a;
  }
  get joinedOnce() {
    return this.channelAdapter.joinedOnce;
  }
  get timeout() {
    return this.socket.timeout;
  }
  get joinPush() {
    return this.channelAdapter.joinPush;
  }
  get rejoinTimer() {
    return this.channelAdapter.rejoinTimer;
  }
  constructor(a, l = { config: {} }, r) {
    var c, h;
    if (
      ((this.topic = a),
      (this.params = l),
      (this.socket = r),
      (this.bindings = {}),
      (this.subTopic = a.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        {
          broadcast: { ack: !1, self: !1 },
          presence: { key: "", enabled: !1 },
          private: !1,
        },
        l.config
      )),
      (this.channelAdapter = new Ap(this.socket.socketAdapter, a, this.params)),
      (this.presence = new Tp(this)),
      this._onClose(() => {
        this.socket._remove(this);
      }),
      this._updateFilterTransform(),
      (this.broadcastEndpointURL = Km(this.socket.socketAdapter.endPointURL())),
      (this.private = this.params.config.private || !1),
      !this.private &&
        !(
          (h =
            (c = this.params.config) === null || c === void 0
              ? void 0
              : c.broadcast) === null || h === void 0
        ) &&
        h.replay)
    )
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  subscribe(a, l = this.timeout) {
    var r, c, h;
    if (
      (this.socket.isConnected() || this.socket.connect(),
      this.channelAdapter.isClosed())
    ) {
      const {
          config: { broadcast: f, presence: m, private: v },
        } = this.params,
        g =
          (c =
            (r = this.bindings.postgres_changes) === null || r === void 0
              ? void 0
              : r.map((x) => x.filter)) !== null && c !== void 0
            ? c
            : [],
        y =
          (!!this.bindings[ci.PRESENCE] &&
            this.bindings[ci.PRESENCE].length > 0) ||
          ((h = this.params.config.presence) === null || h === void 0
            ? void 0
            : h.enabled) === !0,
        _ = {},
        T = {
          broadcast: f,
          presence: Object.assign(Object.assign({}, m), { enabled: y }),
          postgres_changes: g,
          private: v,
        };
      this.socket.accessTokenValue &&
        (_.access_token = this.socket.accessTokenValue),
        this._onError((x) => {
          a == null || a(pn.CHANNEL_ERROR, x);
        }),
        this._onClose(() => (a == null ? void 0 : a(pn.CLOSED))),
        this.updateJoinPayload(Object.assign({ config: T }, _)),
        this._updateFilterMessage(),
        this.channelAdapter
          .subscribe(l)
          .receive("ok", async ({ postgres_changes: x }) => {
            if (
              (this.socket._isManualToken() || this.socket.setAuth(),
              x === void 0)
            ) {
              a == null || a(pn.SUBSCRIBED);
              return;
            }
            this._updatePostgresBindings(x, a);
          })
          .receive("error", (x) => {
            (this.state = Kn.errored),
              a == null ||
                a(
                  pn.CHANNEL_ERROR,
                  new Error(
                    JSON.stringify(Object.values(x).join(", ") || "error")
                  )
                );
          })
          .receive("timeout", () => {
            a == null || a(pn.TIMED_OUT);
          });
    }
    return this;
  }
  _updatePostgresBindings(a, l) {
    var r;
    const c = this.bindings.postgres_changes,
      h = (r = c == null ? void 0 : c.length) !== null && r !== void 0 ? r : 0,
      f = [];
    for (let m = 0; m < h; m++) {
      const v = c[m],
        {
          filter: { event: g, schema: y, table: _, filter: T },
        } = v,
        x = a && a[m];
      if (
        x &&
        x.event === g &&
        ds.isFilterValueEqual(x.schema, y) &&
        ds.isFilterValueEqual(x.table, _) &&
        ds.isFilterValueEqual(x.filter, T)
      )
        f.push(Object.assign(Object.assign({}, v), { id: x.id }));
      else {
        this.unsubscribe(),
          (this.state = Kn.errored),
          l == null ||
            l(
              pn.CHANNEL_ERROR,
              new Error(
                "mismatch between server and client bindings for postgres changes"
              )
            );
        return;
      }
    }
    (this.bindings.postgres_changes = f),
      this.state != Kn.errored && l && l(pn.SUBSCRIBED);
  }
  presenceState() {
    return this.presence.state;
  }
  async track(a, l = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: a },
      l.timeout || this.timeout
    );
  }
  async untrack(a = {}) {
    return await this.send({ type: "presence", event: "untrack" }, a);
  }
  on(a, l, r) {
    const c = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(),
      h = a === ci.PRESENCE || a === ci.POSTGRES_CHANGES;
    if (c && h)
      throw (
        (this.socket.log(
          "channel",
          `cannot add \`${a}\` callbacks for ${this.topic} after \`subscribe()\`.`
        ),
        new Error(
          `cannot add \`${a}\` callbacks for ${this.topic} after \`subscribe()\`.`
        ))
      );
    return this._on(a, l, r);
  }
  async httpSend(a, l, r = {}) {
    var c;
    if (l == null) return Promise.reject("Payload is required for httpSend()");
    const h = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json",
    };
    this.socket.accessTokenValue &&
      (h.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const f = {
        method: "POST",
        headers: h,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: a,
              payload: l,
              private: this.private,
            },
          ],
        }),
      },
      m = await this._fetchWithTimeout(
        this.broadcastEndpointURL,
        f,
        (c = r.timeout) !== null && c !== void 0 ? c : this.timeout
      );
    if (m.status === 202) return { success: !0 };
    let v = m.statusText;
    try {
      const g = await m.json();
      v = g.error || g.message || v;
    } catch {}
    return Promise.reject(new Error(v));
  }
  async send(a, l = {}) {
    var r, c;
    if (!this.channelAdapter.canPush() && a.type === "broadcast") {
      console.warn(
        "Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery."
      );
      const { event: h, payload: f } = a,
        m = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json",
        };
      this.socket.accessTokenValue &&
        (m.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const v = {
        method: "POST",
        headers: m,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: h,
              payload: f,
              private: this.private,
            },
          ],
        }),
      };
      try {
        const g = await this._fetchWithTimeout(
          this.broadcastEndpointURL,
          v,
          (r = l.timeout) !== null && r !== void 0 ? r : this.timeout
        );
        return (
          await ((c = g.body) === null || c === void 0 ? void 0 : c.cancel()),
          g.ok ? "ok" : "error"
        );
      } catch (g) {
        return g.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((h) => {
        var f, m, v;
        const g = this.channelAdapter.push(
          a.type,
          a,
          l.timeout || this.timeout
        );
        a.type === "broadcast" &&
          !(
            !(
              (v =
                (m =
                  (f = this.params) === null || f === void 0
                    ? void 0
                    : f.config) === null || m === void 0
                  ? void 0
                  : m.broadcast) === null || v === void 0
            ) && v.ack
          ) &&
          h("ok"),
          g.receive("ok", () => h("ok")),
          g.receive("error", () => h("error")),
          g.receive("timeout", () => h("timed out"));
      });
  }
  updateJoinPayload(a) {
    this.channelAdapter.updateJoinPayload(a);
  }
  async unsubscribe(a = this.timeout) {
    return new Promise((l) => {
      this.channelAdapter
        .unsubscribe(a)
        .receive("ok", () => l("ok"))
        .receive("timeout", () => l("timed out"))
        .receive("error", () => l("error"));
    });
  }
  teardown() {
    this.channelAdapter.teardown();
  }
  async _fetchWithTimeout(a, l, r) {
    const c = new AbortController(),
      h = setTimeout(() => c.abort(), r),
      f = await this.socket.fetch(
        a,
        Object.assign(Object.assign({}, l), { signal: c.signal })
      );
    return clearTimeout(h), f;
  }
  _on(a, l, r) {
    const c = a.toLocaleLowerCase(),
      h = this.channelAdapter.on(a, r),
      f = { type: c, filter: l, callback: r, ref: h };
    return (
      this.bindings[c] ? this.bindings[c].push(f) : (this.bindings[c] = [f]),
      this._updateFilterMessage(),
      this
    );
  }
  _onClose(a) {
    this.channelAdapter.onClose(a);
  }
  _onError(a) {
    this.channelAdapter.onError(a);
  }
  _updateFilterMessage() {
    this.channelAdapter.updateFilterBindings((a, l, r) => {
      var c, h, f, m, v, g, y;
      const _ = a.event.toLocaleLowerCase();
      if (this._notThisChannelEvent(_, r)) return !1;
      const T =
        (c = this.bindings[_]) === null || c === void 0
          ? void 0
          : c.find((x) => x.ref === a.ref);
      if (!T) return !0;
      if (["broadcast", "presence", "postgres_changes"].includes(_))
        if ("id" in T) {
          const x = T.id,
            j = (h = T.filter) === null || h === void 0 ? void 0 : h.event;
          return (
            x &&
            ((f = l.ids) === null || f === void 0 ? void 0 : f.includes(x)) &&
            (j === "*" ||
              (j == null ? void 0 : j.toLocaleLowerCase()) ===
                ((m = l.data) === null || m === void 0
                  ? void 0
                  : m.type.toLocaleLowerCase()))
          );
        } else {
          const x =
            (g =
              (v = T == null ? void 0 : T.filter) === null || v === void 0
                ? void 0
                : v.event) === null || g === void 0
              ? void 0
              : g.toLocaleLowerCase();
          return (
            x === "*" ||
            x ===
              ((y = l == null ? void 0 : l.event) === null || y === void 0
                ? void 0
                : y.toLocaleLowerCase())
          );
        }
      else return T.type.toLocaleLowerCase() === _;
    });
  }
  _notThisChannelEvent(a, l) {
    const { close: r, error: c, leave: h, join: f } = Gm;
    return l && [r, c, h, f].includes(a) && l !== this.joinPush.ref;
  }
  _updateFilterTransform() {
    this.channelAdapter.updatePayloadTransform((a, l, r) => {
      if (typeof l == "object" && "ids" in l) {
        const c = l.data,
          { schema: h, table: f, commit_timestamp: m, type: v, errors: g } = c;
        return Object.assign(
          Object.assign(
            {},
            {
              schema: h,
              table: f,
              commit_timestamp: m,
              eventType: v,
              new: {},
              old: {},
              errors: g,
            }
          ),
          this._getPayloadRecords(c)
        );
      }
      return l;
    });
  }
  copyBindings(a) {
    if (this.joinedOnce)
      throw new Error("cannot copy bindings into joined channel");
    for (const l in a.bindings)
      for (const r of a.bindings[l]) this._on(r.type, r.filter, r.callback);
  }
  static isFilterValueEqual(a, l) {
    return (a ?? void 0) === (l ?? void 0);
  }
  _getPayloadRecords(a) {
    const l = { new: {}, old: {} };
    return (
      (a.type === "INSERT" || a.type === "UPDATE") &&
        (l.new = dm(a.columns, a.record)),
      (a.type === "UPDATE" || a.type === "DELETE") &&
        (l.old = dm(a.columns, a.old_record)),
      l
    );
  }
}
class Op {
  constructor(a, l) {
    this.socket = new wp(a, l);
  }
  get timeout() {
    return this.socket.timeout;
  }
  get endPoint() {
    return this.socket.endPoint;
  }
  get transport() {
    return this.socket.transport;
  }
  get heartbeatIntervalMs() {
    return this.socket.heartbeatIntervalMs;
  }
  get heartbeatCallback() {
    return this.socket.heartbeatCallback;
  }
  set heartbeatCallback(a) {
    this.socket.heartbeatCallback = a;
  }
  get heartbeatTimer() {
    return this.socket.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.socket.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socket.reconnectTimer;
  }
  get vsn() {
    return this.socket.vsn;
  }
  get encode() {
    return this.socket.encode;
  }
  get decode() {
    return this.socket.decode;
  }
  get reconnectAfterMs() {
    return this.socket.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socket.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socket.stateChangeCallbacks;
  }
  connect() {
    this.socket.connect();
  }
  disconnect(a, l, r, c = 1e4) {
    return new Promise((h) => {
      setTimeout(() => h("timeout"), c),
        this.socket.disconnect(
          () => {
            a(), h("ok");
          },
          l,
          r
        );
    });
  }
  push(a) {
    this.socket.push(a);
  }
  log(a, l, r) {
    this.socket.log(a, l, r);
  }
  makeRef() {
    return this.socket.makeRef();
  }
  onOpen(a) {
    this.socket.onOpen(a);
  }
  onClose(a) {
    this.socket.onClose(a);
  }
  onError(a) {
    this.socket.onError(a);
  }
  onMessage(a) {
    this.socket.onMessage(a);
  }
  isConnected() {
    return this.socket.isConnected();
  }
  isConnecting() {
    return this.socket.connectionState() == Do.connecting;
  }
  isDisconnecting() {
    return this.socket.connectionState() == Do.closing;
  }
  connectionState() {
    return this.socket.connectionState();
  }
  endPointURL() {
    return this.socket.endPointURL();
  }
  sendHeartbeat() {
    this.socket.sendHeartbeat();
  }
  getSocket() {
    return this.socket;
  }
}
const Rp = { HEARTBEAT_INTERVAL: 25e3 },
  Cp = [1e3, 2e3, 5e3, 1e4],
  jp = 1e4,
  Np = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class kp {
  get endPoint() {
    return this.socketAdapter.endPoint;
  }
  get timeout() {
    return this.socketAdapter.timeout;
  }
  get transport() {
    return this.socketAdapter.transport;
  }
  get heartbeatCallback() {
    return this.socketAdapter.heartbeatCallback;
  }
  get heartbeatIntervalMs() {
    return this.socketAdapter.heartbeatIntervalMs;
  }
  get heartbeatTimer() {
    return this.worker
      ? this._workerHeartbeatTimer
      : this.socketAdapter.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.worker
      ? this._pendingWorkerHeartbeatRef
      : this.socketAdapter.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socketAdapter.reconnectTimer;
  }
  get vsn() {
    return this.socketAdapter.vsn;
  }
  get encode() {
    return this.socketAdapter.encode;
  }
  get decode() {
    return this.socketAdapter.decode;
  }
  get reconnectAfterMs() {
    return this.socketAdapter.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socketAdapter.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socketAdapter.stateChangeCallbacks;
  }
  constructor(a, l) {
    var r;
    if (
      ((this.channels = new Array()),
      (this.accessTokenValue = null),
      (this.accessToken = null),
      (this.apiKey = null),
      (this.httpEndpoint = ""),
      (this.headers = {}),
      (this.params = {}),
      (this.ref = 0),
      (this.serializer = new lp()),
      (this._manuallySetToken = !1),
      (this._authPromise = null),
      (this._workerHeartbeatTimer = void 0),
      (this._pendingWorkerHeartbeatRef = null),
      (this._resolveFetch = (h) =>
        h ? (...f) => h(...f) : (...f) => fetch(...f)),
      !(
        !((r = l == null ? void 0 : l.params) === null || r === void 0) &&
        r.apikey
      ))
    )
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = l.params.apikey;
    const c = this._initializeOptions(l);
    (this.socketAdapter = new Op(a, c)),
      (this.httpEndpoint = Km(a)),
      (this.fetch = this._resolveFetch(l == null ? void 0 : l.fetch));
  }
  connect() {
    if (
      !(this.isConnecting() || this.isDisconnecting() || this.isConnected())
    ) {
      this.accessToken && !this._authPromise && this._setAuthSafely("connect"),
        this._setupConnectionHandlers();
      try {
        this.socketAdapter.connect();
      } catch (a) {
        const l = a.message;
        throw l.includes("Node.js")
          ? new Error(`${l}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`)
          : new Error(`WebSocket not available: ${l}`);
      }
      this._handleNodeJsRaceCondition();
    }
  }
  endpointURL() {
    return this.socketAdapter.endPointURL();
  }
  async disconnect(a, l) {
    return this.isDisconnecting()
      ? "ok"
      : await this.socketAdapter.disconnect(
          () => {
            clearInterval(this._workerHeartbeatTimer), this._terminateWorker();
          },
          a,
          l
        );
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(a) {
    const l = await a.unsubscribe();
    return (
      l === "ok" && a.teardown(),
      this.channels.length === 0 && this.disconnect(),
      l
    );
  }
  async removeAllChannels() {
    const a = this.channels.map(async (r) => {
        const c = await r.unsubscribe();
        return r.teardown(), c;
      }),
      l = await Promise.all(a);
    return this.disconnect(), l;
  }
  log(a, l, r) {
    this.socketAdapter.log(a, l, r);
  }
  connectionState() {
    return this.socketAdapter.connectionState() || Do.closed;
  }
  isConnected() {
    return this.socketAdapter.isConnected();
  }
  isConnecting() {
    return this.socketAdapter.isConnecting();
  }
  isDisconnecting() {
    return this.socketAdapter.isDisconnecting();
  }
  channel(a, l = { config: {} }) {
    const r = `realtime:${a}`,
      c = this.getChannels().find((h) => h.topic === r);
    if (c) return c;
    {
      const h = new ds(`realtime:${a}`, l, this);
      return this.channels.push(h), h;
    }
  }
  push(a) {
    this.socketAdapter.push(a);
  }
  async setAuth(a = null) {
    this._authPromise = this._performAuth(a);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  _isManualToken() {
    return this._manuallySetToken;
  }
  async sendHeartbeat() {
    this.socketAdapter.sendHeartbeat();
  }
  onHeartbeat(a) {
    this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(a);
  }
  _makeRef() {
    return this.socketAdapter.makeRef();
  }
  _remove(a) {
    this.channels = this.channels.filter((l) => l.topic !== a.topic);
  }
  async _performAuth(a = null) {
    let l,
      r = !1;
    if (a) (l = a), (r = !0);
    else if (this.accessToken)
      try {
        l = await this.accessToken();
      } catch (c) {
        this.log("error", "Error fetching access token from callback", c),
          (l = this.accessTokenValue);
      }
    else l = this.accessTokenValue;
    r
      ? (this._manuallySetToken = !0)
      : this.accessToken && (this._manuallySetToken = !1),
      this.accessTokenValue != l &&
        ((this.accessTokenValue = l),
        this.channels.forEach((c) => {
          const h = { access_token: l, version: tp };
          l && c.updateJoinPayload(h),
            c.joinedOnce &&
              c.channelAdapter.isJoined() &&
              c.channelAdapter.push(Gm.access_token, { access_token: l });
        }));
  }
  async _waitForAuthIfNeeded() {
    this._authPromise && (await this._authPromise);
  }
  _setAuthSafely(a = "general") {
    this._isManualToken() ||
      this.setAuth().catch((l) => {
        this.log("error", `Error setting auth in ${a}`, l);
      });
  }
  _setupConnectionHandlers() {
    this.socketAdapter.onOpen(() => {
      (
        this._authPromise ||
        (this.accessToken && !this.accessTokenValue
          ? this.setAuth()
          : Promise.resolve())
      ).catch((l) => {
        this.log("error", "error waiting for auth on connect", l);
      }),
        this.worker && !this.workerRef && this._startWorkerHeartbeat();
    }),
      this.socketAdapter.onClose(() => {
        this.worker && this.workerRef && this._terminateWorker();
      }),
      this.socketAdapter.onMessage((a) => {
        a.ref &&
          a.ref === this._pendingWorkerHeartbeatRef &&
          (this._pendingWorkerHeartbeatRef = null);
      });
  }
  _handleNodeJsRaceCondition() {
    this.socketAdapter.isConnected() &&
      this.socketAdapter.getSocket().onConnOpen();
  }
  _wrapHeartbeatCallback(a) {
    return (l, r) => {
      l == "sent" && this._setAuthSafely(), a && a(l, r);
    };
  }
  _startWorkerHeartbeat() {
    this.workerUrl
      ? this.log("worker", `starting worker for from ${this.workerUrl}`)
      : this.log("worker", "starting default worker");
    const a = this._workerObjectUrl(this.workerUrl);
    (this.workerRef = new Worker(a)),
      (this.workerRef.onerror = (l) => {
        this.log("worker", "worker error", l.message),
          this._terminateWorker(),
          this.disconnect();
      }),
      (this.workerRef.onmessage = (l) => {
        l.data.event === "keepAlive" && this.sendHeartbeat();
      }),
      this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs,
      });
  }
  _terminateWorker() {
    this.workerRef &&
      (this.log("worker", "terminating worker"),
      this.workerRef.terminate(),
      (this.workerRef = void 0));
  }
  _workerObjectUrl(a) {
    let l;
    if (a) l = a;
    else {
      const r = new Blob([Np], { type: "application/javascript" });
      l = URL.createObjectURL(r);
    }
    return l;
  }
  _initializeOptions(a) {
    var l, r, c, h, f, m, v, g, y;
    (this.worker =
      (l = a == null ? void 0 : a.worker) !== null && l !== void 0 ? l : !1),
      (this.accessToken =
        (r = a == null ? void 0 : a.accessToken) !== null && r !== void 0
          ? r
          : null);
    const _ = {};
    (_.timeout =
      (c = a == null ? void 0 : a.timeout) !== null && c !== void 0 ? c : ip),
      (_.heartbeatIntervalMs =
        (h = a == null ? void 0 : a.heartbeatIntervalMs) !== null &&
        h !== void 0
          ? h
          : Rp.HEARTBEAT_INTERVAL),
      (_.transport =
        (f = a == null ? void 0 : a.transport) !== null && f !== void 0
          ? f
          : Fv.getWebSocketConstructor()),
      (_.params = a == null ? void 0 : a.params),
      (_.logger = a == null ? void 0 : a.logger),
      (_.heartbeatCallback = this._wrapHeartbeatCallback(
        a == null ? void 0 : a.heartbeatCallback
      )),
      (_.reconnectAfterMs =
        (m = a == null ? void 0 : a.reconnectAfterMs) !== null && m !== void 0
          ? m
          : (L) => Cp[L - 1] || jp);
    let T, x;
    const j =
      (v = a == null ? void 0 : a.vsn) !== null && v !== void 0 ? v : ap;
    switch (j) {
      case np:
        (T = (L, q) => q(JSON.stringify(L))), (x = (L, q) => q(JSON.parse(L)));
        break;
      case $m:
        (T = this.serializer.encode.bind(this.serializer)),
          (x = this.serializer.decode.bind(this.serializer));
        break;
      default:
        throw new Error(`Unsupported serializer version: ${_.vsn}`);
    }
    if (
      ((_.vsn = j),
      (_.encode =
        (g = a == null ? void 0 : a.encode) !== null && g !== void 0 ? g : T),
      (_.decode =
        (y = a == null ? void 0 : a.decode) !== null && y !== void 0 ? y : x),
      (_.beforeReconnect = this._reconnectAuth.bind(this)),
      ((a != null && a.logLevel) || (a != null && a.log_level)) &&
        ((this.logLevel = a.logLevel || a.log_level),
        (_.params = Object.assign(Object.assign({}, _.params), {
          log_level: this.logLevel,
        }))),
      this.worker)
    ) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      (this.workerUrl = a == null ? void 0 : a.workerUrl),
        (_.autoSendHeartbeat = !this.worker);
    }
    return _;
  }
  async _reconnectAuth() {
    await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
  }
}
var gs = class extends Error {
  constructor(s, a) {
    var l;
    super(s),
      (this.name = "IcebergError"),
      (this.status = a.status),
      (this.icebergType = a.icebergType),
      (this.icebergCode = a.icebergCode),
      (this.details = a.details),
      (this.isCommitStateUnknown =
        a.icebergType === "CommitStateUnknownException" ||
        ([500, 502, 504].includes(a.status) &&
          ((l = a.icebergType) == null ? void 0 : l.includes("CommitState")) ===
            !0));
  }
  isNotFound() {
    return this.status === 404;
  }
  isConflict() {
    return this.status === 409;
  }
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function Up(s, a, l) {
  const r = new URL(a, s);
  if (l)
    for (const [c, h] of Object.entries(l))
      h !== void 0 && r.searchParams.set(c, h);
  return r.toString();
}
async function Dp(s) {
  return !s || s.type === "none"
    ? {}
    : s.type === "bearer"
    ? { Authorization: `Bearer ${s.token}` }
    : s.type === "header"
    ? { [s.name]: s.value }
    : s.type === "custom"
    ? await s.getHeaders()
    : {};
}
function zp(s) {
  const a = s.fetchImpl ?? globalThis.fetch;
  return {
    async request({ method: l, path: r, query: c, body: h, headers: f }) {
      const m = Up(s.baseUrl, r, c),
        v = await Dp(s.auth),
        g = await a(m, {
          method: l,
          headers: {
            ...(h ? { "Content-Type": "application/json" } : {}),
            ...v,
            ...f,
          },
          body: h ? JSON.stringify(h) : void 0,
        }),
        y = await g.text(),
        _ = (g.headers.get("content-type") || "").includes("application/json"),
        T = _ && y ? JSON.parse(y) : y;
      if (!g.ok) {
        const x = _ ? T : void 0,
          j = x == null ? void 0 : x.error;
        throw new gs(
          (j == null ? void 0 : j.message) ??
            `Request failed with status ${g.status}`,
          {
            status: g.status,
            icebergType: j == null ? void 0 : j.type,
            icebergCode: j == null ? void 0 : j.code,
            details: x,
          }
        );
      }
      return { status: g.status, headers: g.headers, data: T };
    },
  };
}
function Vl(s) {
  return s.join("");
}
var Mp = class {
  constructor(s, a = "") {
    (this.client = s), (this.prefix = a);
  }
  async listNamespaces(s) {
    const a = s ? { parent: Vl(s.namespace) } : void 0;
    return (
      await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces`,
        query: a,
      })
    ).data.namespaces.map((r) => ({ namespace: r }));
  }
  async createNamespace(s, a) {
    const l = {
      namespace: s.namespace,
      properties: a == null ? void 0 : a.properties,
    };
    return (
      await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces`,
        body: l,
      })
    ).data;
  }
  async dropNamespace(s) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Vl(s.namespace)}`,
    });
  }
  async loadNamespaceMetadata(s) {
    return {
      properties: (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${Vl(s.namespace)}`,
        })
      ).data.properties,
    };
  }
  async namespaceExists(s) {
    try {
      return (
        await this.client.request({
          method: "HEAD",
          path: `${this.prefix}/namespaces/${Vl(s.namespace)}`,
        }),
        !0
      );
    } catch (a) {
      if (a instanceof gs && a.status === 404) return !1;
      throw a;
    }
  }
  async createNamespaceIfNotExists(s, a) {
    try {
      return await this.createNamespace(s, a);
    } catch (l) {
      if (l instanceof gs && l.status === 409) return;
      throw l;
    }
  }
};
function ti(s) {
  return s.join("");
}
var Lp = class {
    constructor(s, a = "", l) {
      (this.client = s), (this.prefix = a), (this.accessDelegation = l);
    }
    async listTables(s) {
      return (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${ti(s.namespace)}/tables`,
        })
      ).data.identifiers;
    }
    async createTable(s, a) {
      const l = {};
      return (
        this.accessDelegation &&
          (l["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${ti(s.namespace)}/tables`,
            body: a,
            headers: l,
          })
        ).data.metadata
      );
    }
    async updateTable(s, a) {
      const l = await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces/${ti(s.namespace)}/tables/${s.name}`,
        body: a,
      });
      return {
        "metadata-location": l.data["metadata-location"],
        metadata: l.data.metadata,
      };
    }
    async dropTable(s, a) {
      await this.client.request({
        method: "DELETE",
        path: `${this.prefix}/namespaces/${ti(s.namespace)}/tables/${s.name}`,
        query: { purgeRequested: String((a == null ? void 0 : a.purge) ?? !1) },
      });
    }
    async loadTable(s) {
      const a = {};
      return (
        this.accessDelegation &&
          (a["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${ti(s.namespace)}/tables/${
              s.name
            }`,
            headers: a,
          })
        ).data.metadata
      );
    }
    async tableExists(s) {
      const a = {};
      this.accessDelegation &&
        (a["X-Iceberg-Access-Delegation"] = this.accessDelegation);
      try {
        return (
          await this.client.request({
            method: "HEAD",
            path: `${this.prefix}/namespaces/${ti(s.namespace)}/tables/${
              s.name
            }`,
            headers: a,
          }),
          !0
        );
      } catch (l) {
        if (l instanceof gs && l.status === 404) return !1;
        throw l;
      }
    }
    async createTableIfNotExists(s, a) {
      try {
        return await this.createTable(s, a);
      } catch (l) {
        if (l instanceof gs && l.status === 409)
          return await this.loadTable({ namespace: s.namespace, name: a.name });
        throw l;
      }
    }
  },
  Bp = class {
    constructor(s) {
      var r;
      let a = "v1";
      s.catalogName && (a += `/${s.catalogName}`);
      const l = s.baseUrl.endsWith("/") ? s.baseUrl : `${s.baseUrl}/`;
      (this.client = zp({ baseUrl: l, auth: s.auth, fetchImpl: s.fetch })),
        (this.accessDelegation =
          (r = s.accessDelegation) == null ? void 0 : r.join(",")),
        (this.namespaceOps = new Mp(this.client, a)),
        (this.tableOps = new Lp(this.client, a, this.accessDelegation));
    }
    async listNamespaces(s) {
      return this.namespaceOps.listNamespaces(s);
    }
    async createNamespace(s, a) {
      return this.namespaceOps.createNamespace(s, a);
    }
    async dropNamespace(s) {
      await this.namespaceOps.dropNamespace(s);
    }
    async loadNamespaceMetadata(s) {
      return this.namespaceOps.loadNamespaceMetadata(s);
    }
    async listTables(s) {
      return this.tableOps.listTables(s);
    }
    async createTable(s, a) {
      return this.tableOps.createTable(s, a);
    }
    async updateTable(s, a) {
      return this.tableOps.updateTable(s, a);
    }
    async dropTable(s, a) {
      await this.tableOps.dropTable(s, a);
    }
    async loadTable(s) {
      return this.tableOps.loadTable(s);
    }
    async namespaceExists(s) {
      return this.namespaceOps.namespaceExists(s);
    }
    async tableExists(s) {
      return this.tableOps.tableExists(s);
    }
    async createNamespaceIfNotExists(s, a) {
      return this.namespaceOps.createNamespaceIfNotExists(s, a);
    }
    async createTableIfNotExists(s, a) {
      return this.tableOps.createTableIfNotExists(s, a);
    }
  },
  Fl = class extends Error {
    constructor(s, a = "storage", l, r) {
      super(s),
        (this.__isStorageError = !0),
        (this.namespace = a),
        (this.name = a === "vectors" ? "StorageVectorsError" : "StorageError"),
        (this.status = l),
        (this.statusCode = r);
    }
  };
function er(s) {
  return typeof s == "object" && s !== null && "__isStorageError" in s;
}
var Bo = class extends Fl {
    constructor(s, a, l, r = "storage") {
      super(s, r, a, l),
        (this.name =
          r === "vectors" ? "StorageVectorsApiError" : "StorageApiError"),
        (this.status = a),
        (this.statusCode = l);
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        statusCode: this.statusCode,
      };
    }
  },
  Xm = class extends Fl {
    constructor(s, a, l = "storage") {
      super(s, l),
        (this.name =
          l === "vectors"
            ? "StorageVectorsUnknownError"
            : "StorageUnknownError"),
        (this.originalError = a);
    }
  };
const qp = (s) => (s ? (...a) => s(...a) : (...a) => fetch(...a)),
  Hp = (s) => {
    if (typeof s != "object" || s === null) return !1;
    const a = Object.getPrototypeOf(s);
    return (
      (a === null ||
        a === Object.prototype ||
        Object.getPrototypeOf(a) === null) &&
      !(Symbol.toStringTag in s) &&
      !(Symbol.iterator in s)
    );
  },
  qo = (s) => {
    if (Array.isArray(s)) return s.map((l) => qo(l));
    if (typeof s == "function" || s !== Object(s)) return s;
    const a = {};
    return (
      Object.entries(s).forEach(([l, r]) => {
        const c = l.replace(/([-_][a-z])/gi, (h) =>
          h.toUpperCase().replace(/[-_]/g, "")
        );
        a[c] = qo(r);
      }),
      a
    );
  },
  $p = (s) =>
    !s ||
    typeof s != "string" ||
    s.length === 0 ||
    s.length > 100 ||
    s.trim() !== s ||
    s.includes("/") ||
    s.includes("\\")
      ? !1
      : /^[\w!.\*'() &$@=;:+,?-]+$/.test(s);
function vs(s) {
  "@babel/helpers - typeof";
  return (
    (vs =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (a) {
            return typeof a;
          }
        : function (a) {
            return a &&
              typeof Symbol == "function" &&
              a.constructor === Symbol &&
              a !== Symbol.prototype
              ? "symbol"
              : typeof a;
          }),
    vs(s)
  );
}
function Gp(s, a) {
  if (vs(s) != "object" || !s) return s;
  var l = s[Symbol.toPrimitive];
  if (l !== void 0) {
    var r = l.call(s, a);
    if (vs(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(s);
}
function Vp(s) {
  var a = Gp(s, "string");
  return vs(a) == "symbol" ? a : a + "";
}
function Kp(s, a, l) {
  return (
    (a = Vp(a)) in s
      ? Object.defineProperty(s, a, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (s[a] = l),
    s
  );
}
function pm(s, a) {
  var l = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(s);
    a &&
      (r = r.filter(function (c) {
        return Object.getOwnPropertyDescriptor(s, c).enumerable;
      })),
      l.push.apply(l, r);
  }
  return l;
}
function se(s) {
  for (var a = 1; a < arguments.length; a++) {
    var l = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? pm(Object(l), !0).forEach(function (r) {
          Kp(s, r, l[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l))
      : pm(Object(l)).forEach(function (r) {
          Object.defineProperty(s, r, Object.getOwnPropertyDescriptor(l, r));
        });
  }
  return s;
}
const ym = (s) => {
    var a;
    return (
      s.msg ||
      s.message ||
      s.error_description ||
      (typeof s.error == "string"
        ? s.error
        : (a = s.error) === null || a === void 0
        ? void 0
        : a.message) ||
      JSON.stringify(s)
    );
  },
  Yp = async (s, a, l, r) => {
    if (s !== null && typeof s == "object" && typeof s.json == "function") {
      const c = s;
      let h = parseInt(c.status, 10);
      Number.isFinite(h) || (h = 500),
        c
          .json()
          .then((f) => {
            const m =
              (f == null ? void 0 : f.statusCode) ||
              (f == null ? void 0 : f.code) ||
              h + "";
            a(new Bo(ym(f), h, m, r));
          })
          .catch(() => {
            const f = h + "";
            a(new Bo(c.statusText || `HTTP ${h} error`, h, f, r));
          });
    } else a(new Xm(ym(s), s, r));
  },
  Xp = (s, a, l, r) => {
    const c = { method: s, headers: (a == null ? void 0 : a.headers) || {} };
    return s === "GET" || s === "HEAD" || !r
      ? se(se({}, c), l)
      : (Hp(r)
          ? ((c.headers = se(
              { "Content-Type": "application/json" },
              a == null ? void 0 : a.headers
            )),
            (c.body = JSON.stringify(r)))
          : (c.body = r),
        a != null && a.duplex && (c.duplex = a.duplex),
        se(se({}, c), l));
  };
async function us(s, a, l, r, c, h, f) {
  return new Promise((m, v) => {
    s(l, Xp(a, r, c, h))
      .then((g) => {
        if (!g.ok) throw g;
        if (r != null && r.noResolveJson) return g;
        if (f === "vectors") {
          const y = g.headers.get("content-type");
          if (g.headers.get("content-length") === "0" || g.status === 204)
            return {};
          if (!y || !y.includes("application/json")) return {};
        }
        return g.json();
      })
      .then((g) => m(g))
      .catch((g) => Yp(g, v, r, f));
  });
}
function Jm(s = "storage") {
  return {
    get: async (a, l, r, c) => us(a, "GET", l, r, c, void 0, s),
    post: async (a, l, r, c, h) => us(a, "POST", l, c, h, r, s),
    put: async (a, l, r, c, h) => us(a, "PUT", l, c, h, r, s),
    head: async (a, l, r, c) =>
      us(a, "HEAD", l, se(se({}, r), {}, { noResolveJson: !0 }), c, void 0, s),
    remove: async (a, l, r, c, h) => us(a, "DELETE", l, c, h, r, s),
  };
}
const Jp = Jm("storage"),
  { get: ps, post: Vt, put: Ho, head: Qp, remove: Qo } = Jp,
  Rt = Jm("vectors");
var fi = class {
    constructor(s, a = {}, l, r = "storage") {
      (this.shouldThrowOnError = !1),
        (this.url = s),
        (this.headers = a),
        (this.fetch = qp(l)),
        (this.namespace = r);
    }
    throwOnError() {
      return (this.shouldThrowOnError = !0), this;
    }
    setHeader(s, a) {
      return (this.headers = se(se({}, this.headers), {}, { [s]: a })), this;
    }
    async handleOperation(s) {
      var a = this;
      try {
        return { data: await s(), error: null };
      } catch (l) {
        if (a.shouldThrowOnError) throw l;
        if (er(l)) return { data: null, error: l };
        throw l;
      }
    }
  },
  Ip = class {
    constructor(s, a) {
      (this.downloadFn = s), (this.shouldThrowOnError = a);
    }
    then(s, a) {
      return this.execute().then(s, a);
    }
    async execute() {
      var s = this;
      try {
        return { data: (await s.downloadFn()).body, error: null };
      } catch (a) {
        if (s.shouldThrowOnError) throw a;
        if (er(a)) return { data: null, error: a };
        throw a;
      }
    }
  };
let Qm;
Qm = Symbol.toStringTag;
var Zp = class {
  constructor(s, a) {
    (this.downloadFn = s),
      (this.shouldThrowOnError = a),
      (this[Qm] = "BlobDownloadBuilder"),
      (this.promise = null);
  }
  asStream() {
    return new Ip(this.downloadFn, this.shouldThrowOnError);
  }
  then(s, a) {
    return this.getPromise().then(s, a);
  }
  catch(s) {
    return this.getPromise().catch(s);
  }
  finally(s) {
    return this.getPromise().finally(s);
  }
  getPromise() {
    return this.promise || (this.promise = this.execute()), this.promise;
  }
  async execute() {
    var s = this;
    try {
      return { data: await (await s.downloadFn()).blob(), error: null };
    } catch (a) {
      if (s.shouldThrowOnError) throw a;
      if (er(a)) return { data: null, error: a };
      throw a;
    }
  }
};
const Pp = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  bm = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
var Wp = class extends fi {
  constructor(s, a = {}, l, r) {
    super(s, a, r, "storage"), (this.bucketId = l);
  }
  async uploadOrUpdate(s, a, l, r) {
    var c = this;
    return c.handleOperation(async () => {
      let h;
      const f = se(se({}, bm), r);
      let m = se(
        se({}, c.headers),
        s === "POST" && { "x-upsert": String(f.upsert) }
      );
      const v = f.metadata;
      typeof Blob < "u" && l instanceof Blob
        ? ((h = new FormData()),
          h.append("cacheControl", f.cacheControl),
          v && h.append("metadata", c.encodeMetadata(v)),
          h.append("", l))
        : typeof FormData < "u" && l instanceof FormData
        ? ((h = l),
          h.has("cacheControl") || h.append("cacheControl", f.cacheControl),
          v && !h.has("metadata") && h.append("metadata", c.encodeMetadata(v)))
        : ((h = l),
          (m["cache-control"] = `max-age=${f.cacheControl}`),
          (m["content-type"] = f.contentType),
          v && (m["x-metadata"] = c.toBase64(c.encodeMetadata(v))),
          ((typeof ReadableStream < "u" && h instanceof ReadableStream) ||
            (h &&
              typeof h == "object" &&
              "pipe" in h &&
              typeof h.pipe == "function")) &&
            !f.duplex &&
            (f.duplex = "half")),
        r != null && r.headers && (m = se(se({}, m), r.headers));
      const g = c._removeEmptyFolders(a),
        y = c._getFinalPath(g),
        _ = await (s == "PUT" ? Ho : Vt)(
          c.fetch,
          `${c.url}/object/${y}`,
          h,
          se({ headers: m }, f != null && f.duplex ? { duplex: f.duplex } : {})
        );
      return { path: g, id: _.Id, fullPath: _.Key };
    });
  }
  async upload(s, a, l) {
    return this.uploadOrUpdate("POST", s, a, l);
  }
  async uploadToSignedUrl(s, a, l, r) {
    var c = this;
    const h = c._removeEmptyFolders(s),
      f = c._getFinalPath(h),
      m = new URL(c.url + `/object/upload/sign/${f}`);
    return (
      m.searchParams.set("token", a),
      c.handleOperation(async () => {
        let v;
        const g = se(se({}, bm), r),
          y = se(se({}, c.headers), { "x-upsert": String(g.upsert) });
        return (
          typeof Blob < "u" && l instanceof Blob
            ? ((v = new FormData()),
              v.append("cacheControl", g.cacheControl),
              v.append("", l))
            : typeof FormData < "u" && l instanceof FormData
            ? ((v = l), v.append("cacheControl", g.cacheControl))
            : ((v = l),
              (y["cache-control"] = `max-age=${g.cacheControl}`),
              (y["content-type"] = g.contentType)),
          {
            path: h,
            fullPath: (await Ho(c.fetch, m.toString(), v, { headers: y })).Key,
          }
        );
      })
    );
  }
  async createSignedUploadUrl(s, a) {
    var l = this;
    return l.handleOperation(async () => {
      let r = l._getFinalPath(s);
      const c = se({}, l.headers);
      a != null && a.upsert && (c["x-upsert"] = "true");
      const h = await Vt(
          l.fetch,
          `${l.url}/object/upload/sign/${r}`,
          {},
          { headers: c }
        ),
        f = new URL(l.url + h.url),
        m = f.searchParams.get("token");
      if (!m) throw new Fl("No token returned by API");
      return { signedUrl: f.toString(), path: s, token: m };
    });
  }
  async update(s, a, l) {
    return this.uploadOrUpdate("PUT", s, a, l);
  }
  async move(s, a, l) {
    var r = this;
    return r.handleOperation(
      async () =>
        await Vt(
          r.fetch,
          `${r.url}/object/move`,
          {
            bucketId: r.bucketId,
            sourceKey: s,
            destinationKey: a,
            destinationBucket: l == null ? void 0 : l.destinationBucket,
          },
          { headers: r.headers }
        )
    );
  }
  async copy(s, a, l) {
    var r = this;
    return r.handleOperation(async () => ({
      path: (
        await Vt(
          r.fetch,
          `${r.url}/object/copy`,
          {
            bucketId: r.bucketId,
            sourceKey: s,
            destinationKey: a,
            destinationBucket: l == null ? void 0 : l.destinationBucket,
          },
          { headers: r.headers }
        )
      ).Key,
    }));
  }
  async createSignedUrl(s, a, l) {
    var r = this;
    return r.handleOperation(async () => {
      let c = r._getFinalPath(s);
      const h =
        typeof (l == null ? void 0 : l.transform) == "object" &&
        l.transform !== null &&
        Object.keys(l.transform).length > 0;
      let f = await Vt(
        r.fetch,
        `${r.url}/object/sign/${c}`,
        se({ expiresIn: a }, h ? { transform: l.transform } : {}),
        { headers: r.headers }
      );
      const m =
          l != null && l.download
            ? `&download=${l.download === !0 ? "" : l.download}`
            : "",
        v =
          h && f.signedURL.includes("/object/sign/")
            ? f.signedURL.replace("/object/sign/", "/render/image/sign/")
            : f.signedURL;
      return { signedUrl: encodeURI(`${r.url}${v}${m}`) };
    });
  }
  async createSignedUrls(s, a, l) {
    var r = this;
    return r.handleOperation(async () => {
      const c = await Vt(
          r.fetch,
          `${r.url}/object/sign/${r.bucketId}`,
          { expiresIn: a, paths: s },
          { headers: r.headers }
        ),
        h =
          l != null && l.download
            ? `&download=${l.download === !0 ? "" : l.download}`
            : "";
      return c.map((f) =>
        se(
          se({}, f),
          {},
          {
            signedUrl: f.signedURL
              ? encodeURI(`${r.url}${f.signedURL}${h}`)
              : null,
          }
        )
      );
    });
  }
  download(s, a, l) {
    const r =
        typeof (a == null ? void 0 : a.transform) < "u"
          ? "render/image/authenticated"
          : "object",
      c = this.transformOptsToQueryString(
        (a == null ? void 0 : a.transform) || {}
      ),
      h = c ? `?${c}` : "",
      f = this._getFinalPath(s),
      m = () =>
        ps(
          this.fetch,
          `${this.url}/${r}/${f}${h}`,
          { headers: this.headers, noResolveJson: !0 },
          l
        );
    return new Zp(m, this.shouldThrowOnError);
  }
  async info(s) {
    var a = this;
    const l = a._getFinalPath(s);
    return a.handleOperation(async () =>
      qo(await ps(a.fetch, `${a.url}/object/info/${l}`, { headers: a.headers }))
    );
  }
  async exists(s) {
    var a = this;
    const l = a._getFinalPath(s);
    try {
      return (
        await Qp(a.fetch, `${a.url}/object/${l}`, { headers: a.headers }),
        { data: !0, error: null }
      );
    } catch (c) {
      if (a.shouldThrowOnError) throw c;
      if (er(c)) {
        var r;
        const h =
          c instanceof Bo
            ? c.status
            : c instanceof Xm
            ? (r = c.originalError) === null || r === void 0
              ? void 0
              : r.status
            : void 0;
        if (h !== void 0 && [400, 404].includes(h))
          return { data: !1, error: c };
      }
      throw c;
    }
  }
  getPublicUrl(s, a) {
    const l = this._getFinalPath(s),
      r = [],
      c =
        a != null && a.download
          ? `download=${a.download === !0 ? "" : a.download}`
          : "";
    c !== "" && r.push(c);
    const h =
        typeof (a == null ? void 0 : a.transform) < "u"
          ? "render/image"
          : "object",
      f = this.transformOptsToQueryString(
        (a == null ? void 0 : a.transform) || {}
      );
    f !== "" && r.push(f);
    let m = r.join("&");
    return (
      m !== "" && (m = `?${m}`),
      { data: { publicUrl: encodeURI(`${this.url}/${h}/public/${l}${m}`) } }
    );
  }
  async remove(s) {
    var a = this;
    return a.handleOperation(
      async () =>
        await Qo(
          a.fetch,
          `${a.url}/object/${a.bucketId}`,
          { prefixes: s },
          { headers: a.headers }
        )
    );
  }
  async list(s, a, l) {
    var r = this;
    return r.handleOperation(async () => {
      const c = se(se(se({}, Pp), a), {}, { prefix: s || "" });
      return await Vt(
        r.fetch,
        `${r.url}/object/list/${r.bucketId}`,
        c,
        { headers: r.headers },
        l
      );
    });
  }
  async listV2(s, a) {
    var l = this;
    return l.handleOperation(async () => {
      const r = se({}, s);
      return await Vt(
        l.fetch,
        `${l.url}/object/list-v2/${l.bucketId}`,
        r,
        { headers: l.headers },
        a
      );
    });
  }
  encodeMetadata(s) {
    return JSON.stringify(s);
  }
  toBase64(s) {
    return typeof Buffer < "u" ? Buffer.from(s).toString("base64") : btoa(s);
  }
  _getFinalPath(s) {
    return `${this.bucketId}/${s.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(s) {
    return s.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(s) {
    const a = [];
    return (
      s.width && a.push(`width=${s.width}`),
      s.height && a.push(`height=${s.height}`),
      s.resize && a.push(`resize=${s.resize}`),
      s.format && a.push(`format=${s.format}`),
      s.quality && a.push(`quality=${s.quality}`),
      a.join("&")
    );
  }
};
const Fp = "2.101.0",
  ws = { "X-Client-Info": `storage-js/${Fp}` };
var ey = class extends fi {
    constructor(s, a = {}, l, r) {
      const c = new URL(s);
      r != null &&
        r.useNewHostname &&
        /supabase\.(co|in|red)$/.test(c.hostname) &&
        !c.hostname.includes("storage.supabase.") &&
        (c.hostname = c.hostname.replace("supabase.", "storage.supabase."));
      const h = c.href.replace(/\/$/, ""),
        f = se(se({}, ws), a);
      super(h, f, l, "storage");
    }
    async listBuckets(s) {
      var a = this;
      return a.handleOperation(async () => {
        const l = a.listBucketOptionsToQueryString(s);
        return await ps(a.fetch, `${a.url}/bucket${l}`, { headers: a.headers });
      });
    }
    async getBucket(s) {
      var a = this;
      return a.handleOperation(
        async () =>
          await ps(a.fetch, `${a.url}/bucket/${s}`, { headers: a.headers })
      );
    }
    async createBucket(s, a = { public: !1 }) {
      var l = this;
      return l.handleOperation(
        async () =>
          await Vt(
            l.fetch,
            `${l.url}/bucket`,
            {
              id: s,
              name: s,
              type: a.type,
              public: a.public,
              file_size_limit: a.fileSizeLimit,
              allowed_mime_types: a.allowedMimeTypes,
            },
            { headers: l.headers }
          )
      );
    }
    async updateBucket(s, a) {
      var l = this;
      return l.handleOperation(
        async () =>
          await Ho(
            l.fetch,
            `${l.url}/bucket/${s}`,
            {
              id: s,
              name: s,
              public: a.public,
              file_size_limit: a.fileSizeLimit,
              allowed_mime_types: a.allowedMimeTypes,
            },
            { headers: l.headers }
          )
      );
    }
    async emptyBucket(s) {
      var a = this;
      return a.handleOperation(
        async () =>
          await Vt(
            a.fetch,
            `${a.url}/bucket/${s}/empty`,
            {},
            { headers: a.headers }
          )
      );
    }
    async deleteBucket(s) {
      var a = this;
      return a.handleOperation(
        async () =>
          await Qo(a.fetch, `${a.url}/bucket/${s}`, {}, { headers: a.headers })
      );
    }
    listBucketOptionsToQueryString(s) {
      const a = {};
      return (
        s &&
          ("limit" in s && (a.limit = String(s.limit)),
          "offset" in s && (a.offset = String(s.offset)),
          s.search && (a.search = s.search),
          s.sortColumn && (a.sortColumn = s.sortColumn),
          s.sortOrder && (a.sortOrder = s.sortOrder)),
        Object.keys(a).length > 0 ? "?" + new URLSearchParams(a).toString() : ""
      );
    }
  },
  ty = class extends fi {
    constructor(s, a = {}, l) {
      const r = s.replace(/\/$/, ""),
        c = se(se({}, ws), a);
      super(r, c, l, "storage");
    }
    async createBucket(s) {
      var a = this;
      return a.handleOperation(
        async () =>
          await Vt(
            a.fetch,
            `${a.url}/bucket`,
            { name: s },
            { headers: a.headers }
          )
      );
    }
    async listBuckets(s) {
      var a = this;
      return a.handleOperation(async () => {
        const l = new URLSearchParams();
        (s == null ? void 0 : s.limit) !== void 0 &&
          l.set("limit", s.limit.toString()),
          (s == null ? void 0 : s.offset) !== void 0 &&
            l.set("offset", s.offset.toString()),
          s != null && s.sortColumn && l.set("sortColumn", s.sortColumn),
          s != null && s.sortOrder && l.set("sortOrder", s.sortOrder),
          s != null && s.search && l.set("search", s.search);
        const r = l.toString(),
          c = r ? `${a.url}/bucket?${r}` : `${a.url}/bucket`;
        return await ps(a.fetch, c, { headers: a.headers });
      });
    }
    async deleteBucket(s) {
      var a = this;
      return a.handleOperation(
        async () =>
          await Qo(a.fetch, `${a.url}/bucket/${s}`, {}, { headers: a.headers })
      );
    }
    from(s) {
      var a = this;
      if (!$p(s))
        throw new Fl(
          "Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters."
        );
      const l = new Bp({
          baseUrl: this.url,
          catalogName: s,
          auth: { type: "custom", getHeaders: async () => a.headers },
          fetch: this.fetch,
        }),
        r = this.shouldThrowOnError;
      return new Proxy(l, {
        get(c, h) {
          const f = c[h];
          return typeof f != "function"
            ? f
            : async (...m) => {
                try {
                  return { data: await f.apply(c, m), error: null };
                } catch (v) {
                  if (r) throw v;
                  return { data: null, error: v };
                }
              };
        },
      });
    }
  },
  ny = class extends fi {
    constructor(s, a = {}, l) {
      const r = s.replace(/\/$/, ""),
        c = se(se({}, ws), {}, { "Content-Type": "application/json" }, a);
      super(r, c, l, "vectors");
    }
    async createIndex(s) {
      var a = this;
      return a.handleOperation(
        async () =>
          (await Rt.post(a.fetch, `${a.url}/CreateIndex`, s, {
            headers: a.headers,
          })) || {}
      );
    }
    async getIndex(s, a) {
      var l = this;
      return l.handleOperation(
        async () =>
          await Rt.post(
            l.fetch,
            `${l.url}/GetIndex`,
            { vectorBucketName: s, indexName: a },
            { headers: l.headers }
          )
      );
    }
    async listIndexes(s) {
      var a = this;
      return a.handleOperation(
        async () =>
          await Rt.post(a.fetch, `${a.url}/ListIndexes`, s, {
            headers: a.headers,
          })
      );
    }
    async deleteIndex(s, a) {
      var l = this;
      return l.handleOperation(
        async () =>
          (await Rt.post(
            l.fetch,
            `${l.url}/DeleteIndex`,
            { vectorBucketName: s, indexName: a },
            { headers: l.headers }
          )) || {}
      );
    }
  },
  ay = class extends fi {
    constructor(s, a = {}, l) {
      const r = s.replace(/\/$/, ""),
        c = se(se({}, ws), {}, { "Content-Type": "application/json" }, a);
      super(r, c, l, "vectors");
    }
    async putVectors(s) {
      var a = this;
      if (s.vectors.length < 1 || s.vectors.length > 500)
        throw new Error("Vector batch size must be between 1 and 500 items");
      return a.handleOperation(
        async () =>
          (await Rt.post(a.fetch, `${a.url}/PutVectors`, s, {
            headers: a.headers,
          })) || {}
      );
    }
    async getVectors(s) {
      var a = this;
      return a.handleOperation(
        async () =>
          await Rt.post(a.fetch, `${a.url}/GetVectors`, s, {
            headers: a.headers,
          })
      );
    }
    async listVectors(s) {
      var a = this;
      if (s.segmentCount !== void 0) {
        if (s.segmentCount < 1 || s.segmentCount > 16)
          throw new Error("segmentCount must be between 1 and 16");
        if (
          s.segmentIndex !== void 0 &&
          (s.segmentIndex < 0 || s.segmentIndex >= s.segmentCount)
        )
          throw new Error(
            `segmentIndex must be between 0 and ${s.segmentCount - 1}`
          );
      }
      return a.handleOperation(
        async () =>
          await Rt.post(a.fetch, `${a.url}/ListVectors`, s, {
            headers: a.headers,
          })
      );
    }
    async queryVectors(s) {
      var a = this;
      return a.handleOperation(
        async () =>
          await Rt.post(a.fetch, `${a.url}/QueryVectors`, s, {
            headers: a.headers,
          })
      );
    }
    async deleteVectors(s) {
      var a = this;
      if (s.keys.length < 1 || s.keys.length > 500)
        throw new Error("Keys batch size must be between 1 and 500 items");
      return a.handleOperation(
        async () =>
          (await Rt.post(a.fetch, `${a.url}/DeleteVectors`, s, {
            headers: a.headers,
          })) || {}
      );
    }
  },
  iy = class extends fi {
    constructor(s, a = {}, l) {
      const r = s.replace(/\/$/, ""),
        c = se(se({}, ws), {}, { "Content-Type": "application/json" }, a);
      super(r, c, l, "vectors");
    }
    async createBucket(s) {
      var a = this;
      return a.handleOperation(
        async () =>
          (await Rt.post(
            a.fetch,
            `${a.url}/CreateVectorBucket`,
            { vectorBucketName: s },
            { headers: a.headers }
          )) || {}
      );
    }
    async getBucket(s) {
      var a = this;
      return a.handleOperation(
        async () =>
          await Rt.post(
            a.fetch,
            `${a.url}/GetVectorBucket`,
            { vectorBucketName: s },
            { headers: a.headers }
          )
      );
    }
    async listBuckets(s = {}) {
      var a = this;
      return a.handleOperation(
        async () =>
          await Rt.post(a.fetch, `${a.url}/ListVectorBuckets`, s, {
            headers: a.headers,
          })
      );
    }
    async deleteBucket(s) {
      var a = this;
      return a.handleOperation(
        async () =>
          (await Rt.post(
            a.fetch,
            `${a.url}/DeleteVectorBucket`,
            { vectorBucketName: s },
            { headers: a.headers }
          )) || {}
      );
    }
  },
  sy = class extends iy {
    constructor(s, a = {}) {
      super(s, a.headers || {}, a.fetch);
    }
    from(s) {
      return new ly(this.url, this.headers, s, this.fetch);
    }
    async createBucket(s) {
      var a = () => super.createBucket,
        l = this;
      return a().call(l, s);
    }
    async getBucket(s) {
      var a = () => super.getBucket,
        l = this;
      return a().call(l, s);
    }
    async listBuckets(s = {}) {
      var a = () => super.listBuckets,
        l = this;
      return a().call(l, s);
    }
    async deleteBucket(s) {
      var a = () => super.deleteBucket,
        l = this;
      return a().call(l, s);
    }
  },
  ly = class extends ny {
    constructor(s, a, l, r) {
      super(s, a, r), (this.vectorBucketName = l);
    }
    async createIndex(s) {
      var a = () => super.createIndex,
        l = this;
      return a().call(
        l,
        se(se({}, s), {}, { vectorBucketName: l.vectorBucketName })
      );
    }
    async listIndexes(s = {}) {
      var a = () => super.listIndexes,
        l = this;
      return a().call(
        l,
        se(se({}, s), {}, { vectorBucketName: l.vectorBucketName })
      );
    }
    async getIndex(s) {
      var a = () => super.getIndex,
        l = this;
      return a().call(l, l.vectorBucketName, s);
    }
    async deleteIndex(s) {
      var a = () => super.deleteIndex,
        l = this;
      return a().call(l, l.vectorBucketName, s);
    }
    index(s) {
      return new ry(
        this.url,
        this.headers,
        this.vectorBucketName,
        s,
        this.fetch
      );
    }
  },
  ry = class extends ay {
    constructor(s, a, l, r, c) {
      super(s, a, c), (this.vectorBucketName = l), (this.indexName = r);
    }
    async putVectors(s) {
      var a = () => super.putVectors,
        l = this;
      return a().call(
        l,
        se(
          se({}, s),
          {},
          { vectorBucketName: l.vectorBucketName, indexName: l.indexName }
        )
      );
    }
    async getVectors(s) {
      var a = () => super.getVectors,
        l = this;
      return a().call(
        l,
        se(
          se({}, s),
          {},
          { vectorBucketName: l.vectorBucketName, indexName: l.indexName }
        )
      );
    }
    async listVectors(s = {}) {
      var a = () => super.listVectors,
        l = this;
      return a().call(
        l,
        se(
          se({}, s),
          {},
          { vectorBucketName: l.vectorBucketName, indexName: l.indexName }
        )
      );
    }
    async queryVectors(s) {
      var a = () => super.queryVectors,
        l = this;
      return a().call(
        l,
        se(
          se({}, s),
          {},
          { vectorBucketName: l.vectorBucketName, indexName: l.indexName }
        )
      );
    }
    async deleteVectors(s) {
      var a = () => super.deleteVectors,
        l = this;
      return a().call(
        l,
        se(
          se({}, s),
          {},
          { vectorBucketName: l.vectorBucketName, indexName: l.indexName }
        )
      );
    }
  },
  uy = class extends ey {
    constructor(s, a = {}, l, r) {
      super(s, a, l, r);
    }
    from(s) {
      return new Wp(this.url, this.headers, s, this.fetch);
    }
    get vectors() {
      return new sy(this.url + "/vector", {
        headers: this.headers,
        fetch: this.fetch,
      });
    }
    get analytics() {
      return new ty(this.url + "/iceberg", this.headers, this.fetch);
    }
  };
const Im = "2.101.0",
  ui = 30 * 1e3,
  $o = 3,
  Oo = $o * ui,
  oy = "http://localhost:9999",
  cy = "supabase.auth.token",
  hy = { "X-Client-Info": `gotrue-js/${Im}` },
  Go = "X-Supabase-Api-Version",
  Zm = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  },
  fy = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  dy = 600 * 1e3;
class ys extends Error {
  constructor(a, l, r) {
    super(a),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = l),
      (this.code = r);
  }
}
function W(s) {
  return typeof s == "object" && s !== null && "__isAuthError" in s;
}
class my extends ys {
  constructor(a, l, r) {
    super(a, l, r),
      (this.name = "AuthApiError"),
      (this.status = l),
      (this.code = r);
  }
}
function gy(s) {
  return W(s) && s.name === "AuthApiError";
}
class ma extends ys {
  constructor(a, l) {
    super(a), (this.name = "AuthUnknownError"), (this.originalError = l);
  }
}
class yn extends ys {
  constructor(a, l, r, c) {
    super(a, r, c), (this.name = l), (this.status = r);
  }
}
class Ot extends yn {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function Ro(s) {
  return W(s) && s.name === "AuthSessionMissingError";
}
class ni extends yn {
  constructor() {
    super(
      "Auth session or user missing",
      "AuthInvalidTokenResponseError",
      500,
      void 0
    );
  }
}
class Kl extends yn {
  constructor(a) {
    super(a, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class Yl extends yn {
  constructor(a, l = null) {
    super(a, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = l);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
function vy(s) {
  return W(s) && s.name === "AuthImplicitGrantRedirectError";
}
class _m extends yn {
  constructor(a, l = null) {
    super(a, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = l);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class py extends yn {
  constructor() {
    super(
      "PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.",
      "AuthPKCECodeVerifierMissingError",
      400,
      "pkce_code_verifier_not_found"
    );
  }
}
class Vo extends yn {
  constructor(a, l) {
    super(a, "AuthRetryableFetchError", l, void 0);
  }
}
function Co(s) {
  return W(s) && s.name === "AuthRetryableFetchError";
}
class wm extends yn {
  constructor(a, l, r) {
    super(a, "AuthWeakPasswordError", l, "weak_password"), (this.reasons = r);
  }
}
class Ko extends yn {
  constructor(a) {
    super(a, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const Il =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
      ""
    ),
  Sm = ` 	
\r=`.split(""),
  yy = (() => {
    const s = new Array(128);
    for (let a = 0; a < s.length; a += 1) s[a] = -1;
    for (let a = 0; a < Sm.length; a += 1) s[Sm[a].charCodeAt(0)] = -2;
    for (let a = 0; a < Il.length; a += 1) s[Il[a].charCodeAt(0)] = a;
    return s;
  })();
function Em(s, a, l) {
  if (s !== null)
    for (a.queue = (a.queue << 8) | s, a.queuedBits += 8; a.queuedBits >= 6; ) {
      const r = (a.queue >> (a.queuedBits - 6)) & 63;
      l(Il[r]), (a.queuedBits -= 6);
    }
  else if (a.queuedBits > 0)
    for (
      a.queue = a.queue << (6 - a.queuedBits), a.queuedBits = 6;
      a.queuedBits >= 6;

    ) {
      const r = (a.queue >> (a.queuedBits - 6)) & 63;
      l(Il[r]), (a.queuedBits -= 6);
    }
}
function Pm(s, a, l) {
  const r = yy[s];
  if (r > -1)
    for (a.queue = (a.queue << 6) | r, a.queuedBits += 6; a.queuedBits >= 8; )
      l((a.queue >> (a.queuedBits - 8)) & 255), (a.queuedBits -= 8);
  else {
    if (r === -2) return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(s)}"`);
  }
}
function Tm(s) {
  const a = [],
    l = (f) => {
      a.push(String.fromCodePoint(f));
    },
    r = { utf8seq: 0, codepoint: 0 },
    c = { queue: 0, queuedBits: 0 },
    h = (f) => {
      wy(f, r, l);
    };
  for (let f = 0; f < s.length; f += 1) Pm(s.charCodeAt(f), c, h);
  return a.join("");
}
function by(s, a) {
  if (s <= 127) {
    a(s);
    return;
  } else if (s <= 2047) {
    a(192 | (s >> 6)), a(128 | (s & 63));
    return;
  } else if (s <= 65535) {
    a(224 | (s >> 12)), a(128 | ((s >> 6) & 63)), a(128 | (s & 63));
    return;
  } else if (s <= 1114111) {
    a(240 | (s >> 18)),
      a(128 | ((s >> 12) & 63)),
      a(128 | ((s >> 6) & 63)),
      a(128 | (s & 63));
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${s.toString(16)}`);
}
function _y(s, a) {
  for (let l = 0; l < s.length; l += 1) {
    let r = s.charCodeAt(l);
    if (r > 55295 && r <= 56319) {
      const c = ((r - 55296) * 1024) & 65535;
      (r = (((s.charCodeAt(l + 1) - 56320) & 65535) | c) + 65536), (l += 1);
    }
    by(r, a);
  }
}
function wy(s, a, l) {
  if (a.utf8seq === 0) {
    if (s <= 127) {
      l(s);
      return;
    }
    for (let r = 1; r < 6; r += 1)
      if (((s >> (7 - r)) & 1) === 0) {
        a.utf8seq = r;
        break;
      }
    if (a.utf8seq === 2) a.codepoint = s & 31;
    else if (a.utf8seq === 3) a.codepoint = s & 15;
    else if (a.utf8seq === 4) a.codepoint = s & 7;
    else throw new Error("Invalid UTF-8 sequence");
    a.utf8seq -= 1;
  } else if (a.utf8seq > 0) {
    if (s <= 127) throw new Error("Invalid UTF-8 sequence");
    (a.codepoint = (a.codepoint << 6) | (s & 63)),
      (a.utf8seq -= 1),
      a.utf8seq === 0 && l(a.codepoint);
  }
}
function hi(s) {
  const a = [],
    l = { queue: 0, queuedBits: 0 },
    r = (c) => {
      a.push(c);
    };
  for (let c = 0; c < s.length; c += 1) Pm(s.charCodeAt(c), l, r);
  return new Uint8Array(a);
}
function Sy(s) {
  const a = [];
  return _y(s, (l) => a.push(l)), new Uint8Array(a);
}
function ga(s) {
  const a = [],
    l = { queue: 0, queuedBits: 0 },
    r = (c) => {
      a.push(c);
    };
  return s.forEach((c) => Em(c, l, r)), Em(null, l, r), a.join("");
}
function Ey(s) {
  return Math.round(Date.now() / 1e3) + s;
}
function Ty() {
  return Symbol("auth-callback");
}
const st = () => typeof window < "u" && typeof document < "u",
  ha = { tested: !1, writable: !1 },
  Wm = () => {
    if (!st()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (ha.tested) return ha.writable;
    const s = `lswt-${Math.random()}${Math.random()}`;
    try {
      globalThis.localStorage.setItem(s, s),
        globalThis.localStorage.removeItem(s),
        (ha.tested = !0),
        (ha.writable = !0);
    } catch {
      (ha.tested = !0), (ha.writable = !1);
    }
    return ha.writable;
  };
function Ay(s) {
  const a = {},
    l = new URL(s);
  if (l.hash && l.hash[0] === "#")
    try {
      new URLSearchParams(l.hash.substring(1)).forEach((c, h) => {
        a[h] = c;
      });
    } catch {}
  return (
    l.searchParams.forEach((r, c) => {
      a[c] = r;
    }),
    a
  );
}
const Fm = (s) => (s ? (...a) => s(...a) : (...a) => fetch(...a)),
  xy = (s) =>
    typeof s == "object" &&
    s !== null &&
    "status" in s &&
    "ok" in s &&
    "json" in s &&
    typeof s.json == "function",
  oi = async (s, a, l) => {
    await s.setItem(a, JSON.stringify(l));
  },
  fa = async (s, a) => {
    const l = await s.getItem(a);
    if (!l) return null;
    try {
      return JSON.parse(l);
    } catch {
      return l;
    }
  },
  it = async (s, a) => {
    await s.removeItem(a);
  };
class tr {
  constructor() {
    this.promise = new tr.promiseConstructor((a, l) => {
      (this.resolve = a), (this.reject = l);
    });
  }
}
tr.promiseConstructor = Promise;
function Xl(s) {
  const a = s.split(".");
  if (a.length !== 3) throw new Ko("Invalid JWT structure");
  for (let r = 0; r < a.length; r++)
    if (!fy.test(a[r])) throw new Ko("JWT not in base64url format");
  return {
    header: JSON.parse(Tm(a[0])),
    payload: JSON.parse(Tm(a[1])),
    signature: hi(a[2]),
    raw: { header: a[0], payload: a[1] },
  };
}
async function Oy(s) {
  return await new Promise((a) => {
    setTimeout(() => a(null), s);
  });
}
function Ry(s, a) {
  return new Promise((r, c) => {
    (async () => {
      for (let h = 0; h < 1 / 0; h++)
        try {
          const f = await s(h);
          if (!a(h, null, f)) {
            r(f);
            return;
          }
        } catch (f) {
          if (!a(h, f)) {
            c(f);
            return;
          }
        }
    })();
  });
}
function Cy(s) {
  return ("0" + s.toString(16)).substr(-2);
}
function jy() {
  const a = new Uint32Array(56);
  if (typeof crypto > "u") {
    const l =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      r = l.length;
    let c = "";
    for (let h = 0; h < 56; h++) c += l.charAt(Math.floor(Math.random() * r));
    return c;
  }
  return crypto.getRandomValues(a), Array.from(a, Cy).join("");
}
async function Ny(s) {
  const l = new TextEncoder().encode(s),
    r = await crypto.subtle.digest("SHA-256", l),
    c = new Uint8Array(r);
  return Array.from(c)
    .map((h) => String.fromCharCode(h))
    .join("");
}
async function ky(s) {
  if (
    !(
      typeof crypto < "u" &&
      typeof crypto.subtle < "u" &&
      typeof TextEncoder < "u"
    )
  )
    return (
      console.warn(
        "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
      ),
      s
    );
  const l = await Ny(s);
  return btoa(l).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function ai(s, a, l = !1) {
  const r = jy();
  let c = r;
  l && (c += "/PASSWORD_RECOVERY"), await oi(s, `${a}-code-verifier`, c);
  const h = await ky(r);
  return [h, r === h ? "plain" : "s256"];
}
const Uy = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Dy(s) {
  const a = s.headers.get(Go);
  if (!a || !a.match(Uy)) return null;
  try {
    return new Date(`${a}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function zy(s) {
  if (!s) throw new Error("Missing exp claim");
  const a = Math.floor(Date.now() / 1e3);
  if (s <= a) throw new Error("JWT has expired");
}
function My(s) {
  switch (s) {
    case "RS256":
      return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
    case "ES256":
      return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
    default:
      throw new Error("Invalid alg claim");
  }
}
const Ly = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function ii(s) {
  if (!Ly.test(s))
    throw new Error(
      "@supabase/auth-js: Expected parameter to be UUID but is not"
    );
}
function jo() {
  const s = {};
  return new Proxy(s, {
    get: (a, l) => {
      if (l === "__isUserNotAvailableProxy") return !0;
      if (typeof l == "symbol") {
        const r = l.toString();
        if (
          r === "Symbol(Symbol.toPrimitive)" ||
          r === "Symbol(Symbol.toStringTag)" ||
          r === "Symbol(util.inspect.custom)"
        )
          return;
      }
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${l}" property of the session object is not supported. Please use getUser() instead.`
      );
    },
    set: (a, l) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${l}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`
      );
    },
    deleteProperty: (a, l) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${l}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`
      );
    },
  });
}
function By(s, a) {
  return new Proxy(s, {
    get: (l, r, c) => {
      if (r === "__isInsecureUserWarningProxy") return !0;
      if (typeof r == "symbol") {
        const h = r.toString();
        if (
          h === "Symbol(Symbol.toPrimitive)" ||
          h === "Symbol(Symbol.toStringTag)" ||
          h === "Symbol(util.inspect.custom)" ||
          h === "Symbol(nodejs.util.inspect.custom)"
        )
          return Reflect.get(l, r, c);
      }
      return (
        !a.value &&
          typeof r == "string" &&
          (console.warn(
            "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."
          ),
          (a.value = !0)),
        Reflect.get(l, r, c)
      );
    },
  });
}
function Am(s) {
  return JSON.parse(JSON.stringify(s));
}
const da = (s) =>
    s.msg || s.message || s.error_description || s.error || JSON.stringify(s),
  qy = [502, 503, 504];
async function xm(s) {
  var a;
  if (!xy(s)) throw new Vo(da(s), 0);
  if (qy.includes(s.status)) throw new Vo(da(s), s.status);
  let l;
  try {
    l = await s.json();
  } catch (h) {
    throw new ma(da(h), h);
  }
  let r;
  const c = Dy(s);
  if (
    (c &&
    c.getTime() >= Zm["2024-01-01"].timestamp &&
    typeof l == "object" &&
    l &&
    typeof l.code == "string"
      ? (r = l.code)
      : typeof l == "object" &&
        l &&
        typeof l.error_code == "string" &&
        (r = l.error_code),
    r)
  ) {
    if (r === "weak_password")
      throw new wm(
        da(l),
        s.status,
        ((a = l.weak_password) === null || a === void 0 ? void 0 : a.reasons) ||
          []
      );
    if (r === "session_not_found") throw new Ot();
  } else if (
    typeof l == "object" &&
    l &&
    typeof l.weak_password == "object" &&
    l.weak_password &&
    Array.isArray(l.weak_password.reasons) &&
    l.weak_password.reasons.length &&
    l.weak_password.reasons.reduce((h, f) => h && typeof f == "string", !0)
  )
    throw new wm(da(l), s.status, l.weak_password.reasons);
  throw new my(da(l), s.status || 500, r);
}
const Hy = (s, a, l, r) => {
  const c = { method: s, headers: (a == null ? void 0 : a.headers) || {} };
  return s === "GET"
    ? c
    : ((c.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        a == null ? void 0 : a.headers
      )),
      (c.body = JSON.stringify(r)),
      Object.assign(Object.assign({}, c), l));
};
async function ie(s, a, l, r) {
  var c;
  const h = Object.assign({}, r == null ? void 0 : r.headers);
  h[Go] || (h[Go] = Zm["2024-01-01"].name),
    r != null && r.jwt && (h.Authorization = `Bearer ${r.jwt}`);
  const f =
    (c = r == null ? void 0 : r.query) !== null && c !== void 0 ? c : {};
  r != null && r.redirectTo && (f.redirect_to = r.redirectTo);
  const m = Object.keys(f).length
      ? "?" + new URLSearchParams(f).toString()
      : "",
    v = await $y(
      s,
      a,
      l + m,
      { headers: h, noResolveJson: r == null ? void 0 : r.noResolveJson },
      {},
      r == null ? void 0 : r.body
    );
  return r != null && r.xform
    ? r == null
      ? void 0
      : r.xform(v)
    : { data: Object.assign({}, v), error: null };
}
async function $y(s, a, l, r, c, h) {
  const f = Hy(a, r, c, h);
  let m;
  try {
    m = await s(l, Object.assign({}, f));
  } catch (v) {
    throw (console.error(v), new Vo(da(v), 0));
  }
  if ((m.ok || (await xm(m)), r != null && r.noResolveJson)) return m;
  try {
    return await m.json();
  } catch (v) {
    await xm(v);
  }
}
function Gt(s) {
  var a;
  let l = null;
  Ky(s) &&
    ((l = Object.assign({}, s)),
    s.expires_at || (l.expires_at = Ey(s.expires_in)));
  const r = (a = s.user) !== null && a !== void 0 ? a : s;
  return { data: { session: l, user: r }, error: null };
}
function Om(s) {
  const a = Gt(s);
  return (
    !a.error &&
      s.weak_password &&
      typeof s.weak_password == "object" &&
      Array.isArray(s.weak_password.reasons) &&
      s.weak_password.reasons.length &&
      s.weak_password.message &&
      typeof s.weak_password.message == "string" &&
      s.weak_password.reasons.reduce((l, r) => l && typeof r == "string", !0) &&
      (a.data.weak_password = s.weak_password),
    a
  );
}
function Yn(s) {
  var a;
  return {
    data: { user: (a = s.user) !== null && a !== void 0 ? a : s },
    error: null,
  };
}
function Gy(s) {
  return { data: s, error: null };
}
function Vy(s) {
  const {
      action_link: a,
      email_otp: l,
      hashed_token: r,
      redirect_to: c,
      verification_type: h,
    } = s,
    f = Wl(s, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    m = {
      action_link: a,
      email_otp: l,
      hashed_token: r,
      redirect_to: c,
      verification_type: h,
    },
    v = Object.assign({}, f);
  return { data: { properties: m, user: v }, error: null };
}
function Rm(s) {
  return s;
}
function Ky(s) {
  return s.access_token && s.refresh_token && s.expires_in;
}
const No = ["global", "local", "others"];
class Yy {
  constructor({ url: a = "", headers: l = {}, fetch: r }) {
    (this.url = a),
      (this.headers = l),
      (this.fetch = Fm(r)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      }),
      (this.oauth = {
        listClients: this._listOAuthClients.bind(this),
        createClient: this._createOAuthClient.bind(this),
        getClient: this._getOAuthClient.bind(this),
        updateClient: this._updateOAuthClient.bind(this),
        deleteClient: this._deleteOAuthClient.bind(this),
        regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this),
      }),
      (this.customProviders = {
        listProviders: this._listCustomProviders.bind(this),
        createProvider: this._createCustomProvider.bind(this),
        getProvider: this._getCustomProvider.bind(this),
        updateProvider: this._updateCustomProvider.bind(this),
        deleteProvider: this._deleteCustomProvider.bind(this),
      });
  }
  async signOut(a, l = No[0]) {
    if (No.indexOf(l) < 0)
      throw new Error(
        `@supabase/auth-js: Parameter scope must be one of ${No.join(", ")}`
      );
    try {
      return (
        await ie(this.fetch, "POST", `${this.url}/logout?scope=${l}`, {
          headers: this.headers,
          jwt: a,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (r) {
      if (W(r)) return { data: null, error: r };
      throw r;
    }
  }
  async inviteUserByEmail(a, l = {}) {
    try {
      return await ie(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: a, data: l.data },
        headers: this.headers,
        redirectTo: l.redirectTo,
        xform: Yn,
      });
    } catch (r) {
      if (W(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async generateLink(a) {
    try {
      const { options: l } = a,
        r = Wl(a, ["options"]),
        c = Object.assign(Object.assign({}, r), l);
      return (
        "newEmail" in r &&
          ((c.new_email = r == null ? void 0 : r.newEmail), delete c.newEmail),
        await ie(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: c,
          headers: this.headers,
          xform: Vy,
          redirectTo: l == null ? void 0 : l.redirectTo,
        })
      );
    } catch (l) {
      if (W(l)) return { data: { properties: null, user: null }, error: l };
      throw l;
    }
  }
  async createUser(a) {
    try {
      return await ie(this.fetch, "POST", `${this.url}/admin/users`, {
        body: a,
        headers: this.headers,
        xform: Yn,
      });
    } catch (l) {
      if (W(l)) return { data: { user: null }, error: l };
      throw l;
    }
  }
  async listUsers(a) {
    var l, r, c, h, f, m, v;
    try {
      const g = { nextPage: null, lastPage: 0, total: 0 },
        y = await ie(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (r =
                (l = a == null ? void 0 : a.page) === null || l === void 0
                  ? void 0
                  : l.toString()) !== null && r !== void 0
                ? r
                : "",
            per_page:
              (h =
                (c = a == null ? void 0 : a.perPage) === null || c === void 0
                  ? void 0
                  : c.toString()) !== null && h !== void 0
                ? h
                : "",
          },
          xform: Rm,
        });
      if (y.error) throw y.error;
      const _ = await y.json(),
        T =
          (f = y.headers.get("x-total-count")) !== null && f !== void 0 ? f : 0,
        x =
          (v =
            (m = y.headers.get("link")) === null || m === void 0
              ? void 0
              : m.split(",")) !== null && v !== void 0
            ? v
            : [];
      return (
        x.length > 0 &&
          (x.forEach((j) => {
            const L = parseInt(j.split(";")[0].split("=")[1].substring(0, 1)),
              q = JSON.parse(j.split(";")[1].split("=")[1]);
            g[`${q}Page`] = L;
          }),
          (g.total = parseInt(T))),
        { data: Object.assign(Object.assign({}, _), g), error: null }
      );
    } catch (g) {
      if (W(g)) return { data: { users: [] }, error: g };
      throw g;
    }
  }
  async getUserById(a) {
    ii(a);
    try {
      return await ie(this.fetch, "GET", `${this.url}/admin/users/${a}`, {
        headers: this.headers,
        xform: Yn,
      });
    } catch (l) {
      if (W(l)) return { data: { user: null }, error: l };
      throw l;
    }
  }
  async updateUserById(a, l) {
    ii(a);
    try {
      return await ie(this.fetch, "PUT", `${this.url}/admin/users/${a}`, {
        body: l,
        headers: this.headers,
        xform: Yn,
      });
    } catch (r) {
      if (W(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async deleteUser(a, l = !1) {
    ii(a);
    try {
      return await ie(this.fetch, "DELETE", `${this.url}/admin/users/${a}`, {
        headers: this.headers,
        body: { should_soft_delete: l },
        xform: Yn,
      });
    } catch (r) {
      if (W(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(a) {
    ii(a.userId);
    try {
      const { data: l, error: r } = await ie(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${a.userId}/factors`,
        {
          headers: this.headers,
          xform: (c) => ({ data: { factors: c }, error: null }),
        }
      );
      return { data: l, error: r };
    } catch (l) {
      if (W(l)) return { data: null, error: l };
      throw l;
    }
  }
  async _deleteFactor(a) {
    ii(a.userId), ii(a.id);
    try {
      return {
        data: await ie(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${a.userId}/factors/${a.id}`,
          { headers: this.headers }
        ),
        error: null,
      };
    } catch (l) {
      if (W(l)) return { data: null, error: l };
      throw l;
    }
  }
  async _listOAuthClients(a) {
    var l, r, c, h, f, m, v;
    try {
      const g = { nextPage: null, lastPage: 0, total: 0 },
        y = await ie(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (r =
                (l = a == null ? void 0 : a.page) === null || l === void 0
                  ? void 0
                  : l.toString()) !== null && r !== void 0
                ? r
                : "",
            per_page:
              (h =
                (c = a == null ? void 0 : a.perPage) === null || c === void 0
                  ? void 0
                  : c.toString()) !== null && h !== void 0
                ? h
                : "",
          },
          xform: Rm,
        });
      if (y.error) throw y.error;
      const _ = await y.json(),
        T =
          (f = y.headers.get("x-total-count")) !== null && f !== void 0 ? f : 0,
        x =
          (v =
            (m = y.headers.get("link")) === null || m === void 0
              ? void 0
              : m.split(",")) !== null && v !== void 0
            ? v
            : [];
      return (
        x.length > 0 &&
          (x.forEach((j) => {
            const L = parseInt(j.split(";")[0].split("=")[1].substring(0, 1)),
              q = JSON.parse(j.split(";")[1].split("=")[1]);
            g[`${q}Page`] = L;
          }),
          (g.total = parseInt(T))),
        { data: Object.assign(Object.assign({}, _), g), error: null }
      );
    } catch (g) {
      if (W(g)) return { data: { clients: [] }, error: g };
      throw g;
    }
  }
  async _createOAuthClient(a) {
    try {
      return await ie(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: a,
        headers: this.headers,
        xform: (l) => ({ data: l, error: null }),
      });
    } catch (l) {
      if (W(l)) return { data: null, error: l };
      throw l;
    }
  }
  async _getOAuthClient(a) {
    try {
      return await ie(
        this.fetch,
        "GET",
        `${this.url}/admin/oauth/clients/${a}`,
        { headers: this.headers, xform: (l) => ({ data: l, error: null }) }
      );
    } catch (l) {
      if (W(l)) return { data: null, error: l };
      throw l;
    }
  }
  async _updateOAuthClient(a, l) {
    try {
      return await ie(
        this.fetch,
        "PUT",
        `${this.url}/admin/oauth/clients/${a}`,
        {
          body: l,
          headers: this.headers,
          xform: (r) => ({ data: r, error: null }),
        }
      );
    } catch (r) {
      if (W(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteOAuthClient(a) {
    try {
      return (
        await ie(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${a}`, {
          headers: this.headers,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (l) {
      if (W(l)) return { data: null, error: l };
      throw l;
    }
  }
  async _regenerateOAuthClientSecret(a) {
    try {
      return await ie(
        this.fetch,
        "POST",
        `${this.url}/admin/oauth/clients/${a}/regenerate_secret`,
        { headers: this.headers, xform: (l) => ({ data: l, error: null }) }
      );
    } catch (l) {
      if (W(l)) return { data: null, error: l };
      throw l;
    }
  }
  async _listCustomProviders(a) {
    try {
      const l = {};
      return (
        a != null && a.type && (l.type = a.type),
        await ie(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
          headers: this.headers,
          query: l,
          xform: (r) => {
            var c;
            return {
              data: {
                providers:
                  (c = r == null ? void 0 : r.providers) !== null &&
                  c !== void 0
                    ? c
                    : [],
              },
              error: null,
            };
          },
        })
      );
    } catch (l) {
      if (W(l)) return { data: { providers: [] }, error: l };
      throw l;
    }
  }
  async _createCustomProvider(a) {
    try {
      return await ie(
        this.fetch,
        "POST",
        `${this.url}/admin/custom-providers`,
        {
          body: a,
          headers: this.headers,
          xform: (l) => ({ data: l, error: null }),
        }
      );
    } catch (l) {
      if (W(l)) return { data: null, error: l };
      throw l;
    }
  }
  async _getCustomProvider(a) {
    try {
      return await ie(
        this.fetch,
        "GET",
        `${this.url}/admin/custom-providers/${a}`,
        { headers: this.headers, xform: (l) => ({ data: l, error: null }) }
      );
    } catch (l) {
      if (W(l)) return { data: null, error: l };
      throw l;
    }
  }
  async _updateCustomProvider(a, l) {
    try {
      return await ie(
        this.fetch,
        "PUT",
        `${this.url}/admin/custom-providers/${a}`,
        {
          body: l,
          headers: this.headers,
          xform: (r) => ({ data: r, error: null }),
        }
      );
    } catch (r) {
      if (W(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteCustomProvider(a) {
    try {
      return (
        await ie(
          this.fetch,
          "DELETE",
          `${this.url}/admin/custom-providers/${a}`,
          { headers: this.headers, noResolveJson: !0 }
        ),
        { data: null, error: null }
      );
    } catch (l) {
      if (W(l)) return { data: null, error: l };
      throw l;
    }
  }
}
function Cm(s = {}) {
  return {
    getItem: (a) => s[a] || null,
    setItem: (a, l) => {
      s[a] = l;
    },
    removeItem: (a) => {
      delete s[a];
    },
  };
}
const Qt = {
  debug: !!(
    globalThis &&
    Wm() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
  ),
};
class eg extends Error {
  constructor(a) {
    super(a), (this.isAcquireTimeout = !0);
  }
}
class jm extends eg {}
async function Xy(s, a, l) {
  Qt.debug &&
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", s, a);
  const r = new globalThis.AbortController();
  let c;
  a > 0 &&
    (c = setTimeout(() => {
      r.abort(),
        Qt.debug &&
          console.log(
            "@supabase/gotrue-js: navigatorLock acquire timed out",
            s
          );
    }, a)),
    await Promise.resolve();
  try {
    return await globalThis.navigator.locks.request(
      s,
      a === 0
        ? { mode: "exclusive", ifAvailable: !0 }
        : { mode: "exclusive", signal: r.signal },
      async (h) => {
        if (h) {
          clearTimeout(c),
            Qt.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: acquired",
                s,
                h.name
              );
          try {
            return await l();
          } finally {
            Qt.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: released",
                s,
                h.name
              );
          }
        } else {
          if (a === 0)
            throw (
              (Qt.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: not immediately available",
                  s
                ),
              new jm(
                `Acquiring an exclusive Navigator LockManager lock "${s}" immediately failed`
              ))
            );
          if (Qt.debug)
            try {
              const f = await globalThis.navigator.locks.query();
              console.log(
                "@supabase/gotrue-js: Navigator LockManager state",
                JSON.stringify(f, null, "  ")
              );
            } catch (f) {
              console.warn(
                "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                f
              );
            }
          return (
            console.warn(
              "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
            ),
            clearTimeout(c),
            await l()
          );
        }
      }
    );
  } catch (h) {
    if (
      (a > 0 && clearTimeout(c),
      (h == null ? void 0 : h.name) === "AbortError" && a > 0)
    ) {
      if (r.signal.aborted)
        return (
          Qt.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock",
              s
            ),
          console.warn(
            `@supabase/gotrue-js: Lock "${s}" was not released within ${a}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`
          ),
          await Promise.resolve().then(() =>
            globalThis.navigator.locks.request(
              s,
              { mode: "exclusive", steal: !0 },
              async (f) => {
                if (f) {
                  Qt.debug &&
                    console.log(
                      "@supabase/gotrue-js: navigatorLock: recovered (stolen)",
                      s,
                      f.name
                    );
                  try {
                    return await l();
                  } finally {
                    Qt.debug &&
                      console.log(
                        "@supabase/gotrue-js: navigatorLock: released (stolen)",
                        s,
                        f.name
                      );
                  }
                } else
                  return (
                    console.warn(
                      "@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true"
                    ),
                    await l()
                  );
              }
            )
          )
        );
      throw (
        (Qt.debug &&
          console.log(
            "@supabase/gotrue-js: navigatorLock: lock was stolen by another request",
            s
          ),
        new jm(`Lock "${s}" was released because another request stole it`))
      );
    }
    throw h;
  }
}
function Jy() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function tg(s) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(s))
    throw new Error(`@supabase/auth-js: Address "${s}" is invalid.`);
  return s.toLowerCase();
}
function Qy(s) {
  return parseInt(s, 16);
}
function Iy(s) {
  const a = new TextEncoder().encode(s);
  return "0x" + Array.from(a, (r) => r.toString(16).padStart(2, "0")).join("");
}
function Zy(s) {
  var a;
  const {
    chainId: l,
    domain: r,
    expirationTime: c,
    issuedAt: h = new Date(),
    nonce: f,
    notBefore: m,
    requestId: v,
    resources: g,
    scheme: y,
    uri: _,
    version: T,
  } = s;
  {
    if (!Number.isInteger(l))
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${l}`
      );
    if (!r)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.'
      );
    if (f && f.length < 8)
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${f}`
      );
    if (!_)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.'
      );
    if (T !== "1")
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${T}`
      );
    if (
      !((a = s.statement) === null || a === void 0) &&
      a.includes(`
`)
    )
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${s.statement}`
      );
  }
  const x = tg(s.address),
    j = y ? `${y}://${r}` : r,
    L = s.statement
      ? `${s.statement}
`
      : "",
    q = `${j} wants you to sign in with your Ethereum account:
${x}

${L}`;
  let X = `URI: ${_}
Version: ${T}
Chain ID: ${l}${
    f
      ? `
Nonce: ${f}`
      : ""
  }
Issued At: ${h.toISOString()}`;
  if (
    (c &&
      (X += `
Expiration Time: ${c.toISOString()}`),
    m &&
      (X += `
Not Before: ${m.toISOString()}`),
    v &&
      (X += `
Request ID: ${v}`),
    g)
  ) {
    let Q = `
Resources:`;
    for (const H of g) {
      if (!H || typeof H != "string")
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${H}`
        );
      Q += `
- ${H}`;
    }
    X += Q;
  }
  return `${q}
${X}`;
}
class Ye extends Error {
  constructor({ message: a, code: l, cause: r, name: c }) {
    var h;
    super(a, { cause: r }),
      (this.__isWebAuthnError = !0),
      (this.name =
        (h = c ?? (r instanceof Error ? r.name : void 0)) !== null &&
        h !== void 0
          ? h
          : "Unknown Error"),
      (this.code = l);
  }
}
class Zl extends Ye {
  constructor(a, l) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: l,
      message: a,
    }),
      (this.name = "WebAuthnUnknownError"),
      (this.originalError = l);
  }
}
function Py({ error: s, options: a }) {
  var l, r, c;
  const { publicKey: h } = a;
  if (!h) throw Error("options was missing required publicKey property");
  if (s.name === "AbortError") {
    if (a.signal instanceof AbortSignal)
      return new Ye({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: s,
      });
  } else if (s.name === "ConstraintError") {
    if (
      ((l = h.authenticatorSelection) === null || l === void 0
        ? void 0
        : l.requireResidentKey) === !0
    )
      return new Ye({
        message:
          "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: s,
      });
    if (
      a.mediation === "conditional" &&
      ((r = h.authenticatorSelection) === null || r === void 0
        ? void 0
        : r.userVerification) === "required"
    )
      return new Ye({
        message:
          "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: s,
      });
    if (
      ((c = h.authenticatorSelection) === null || c === void 0
        ? void 0
        : c.userVerification) === "required"
    )
      return new Ye({
        message:
          "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: s,
      });
  } else {
    if (s.name === "InvalidStateError")
      return new Ye({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: s,
      });
    if (s.name === "NotAllowedError")
      return new Ye({
        message: s.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: s,
      });
    if (s.name === "NotSupportedError")
      return h.pubKeyCredParams.filter((m) => m.type === "public-key")
        .length === 0
        ? new Ye({
            message: 'No entry in pubKeyCredParams was of type "public-key"',
            code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
            cause: s,
          })
        : new Ye({
            message:
              "No available authenticator supported any of the specified pubKeyCredParams algorithms",
            code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
            cause: s,
          });
    if (s.name === "SecurityError") {
      const f = window.location.hostname;
      if (ng(f)) {
        if (h.rp.id !== f)
          return new Ye({
            message: `The RP ID "${h.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: s,
          });
      } else
        return new Ye({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: s,
        });
    } else if (s.name === "TypeError") {
      if (h.user.id.byteLength < 1 || h.user.id.byteLength > 64)
        return new Ye({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: s,
        });
    } else if (s.name === "UnknownError")
      return new Ye({
        message:
          "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: s,
      });
  }
  return new Ye({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: s,
  });
}
function Wy({ error: s, options: a }) {
  const { publicKey: l } = a;
  if (!l) throw Error("options was missing required publicKey property");
  if (s.name === "AbortError") {
    if (a.signal instanceof AbortSignal)
      return new Ye({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: s,
      });
  } else {
    if (s.name === "NotAllowedError")
      return new Ye({
        message: s.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: s,
      });
    if (s.name === "SecurityError") {
      const r = window.location.hostname;
      if (ng(r)) {
        if (l.rpId !== r)
          return new Ye({
            message: `The RP ID "${l.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: s,
          });
      } else
        return new Ye({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: s,
        });
    } else if (s.name === "UnknownError")
      return new Ye({
        message:
          "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: s,
      });
  }
  return new Ye({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: s,
  });
}
class Fy {
  createNewAbortSignal() {
    if (this.controller) {
      const l = new Error("Cancelling existing WebAuthn API call for new one");
      (l.name = "AbortError"), this.controller.abort(l);
    }
    const a = new AbortController();
    return (this.controller = a), a.signal;
  }
  cancelCeremony() {
    if (this.controller) {
      const a = new Error("Manually cancelling existing WebAuthn API call");
      (a.name = "AbortError"),
        this.controller.abort(a),
        (this.controller = void 0);
    }
  }
}
const eb = new Fy();
function tb(s) {
  if (!s) throw new Error("Credential creation options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseCreationOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseCreationOptionsFromJSON(s);
  const { challenge: a, user: l, excludeCredentials: r } = s,
    c = Wl(s, ["challenge", "user", "excludeCredentials"]),
    h = hi(a).buffer,
    f = Object.assign(Object.assign({}, l), { id: hi(l.id).buffer }),
    m = Object.assign(Object.assign({}, c), { challenge: h, user: f });
  if (r && r.length > 0) {
    m.excludeCredentials = new Array(r.length);
    for (let v = 0; v < r.length; v++) {
      const g = r[v];
      m.excludeCredentials[v] = Object.assign(Object.assign({}, g), {
        id: hi(g.id).buffer,
        type: g.type || "public-key",
        transports: g.transports,
      });
    }
  }
  return m;
}
function nb(s) {
  if (!s) throw new Error("Credential request options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseRequestOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseRequestOptionsFromJSON(s);
  const { challenge: a, allowCredentials: l } = s,
    r = Wl(s, ["challenge", "allowCredentials"]),
    c = hi(a).buffer,
    h = Object.assign(Object.assign({}, r), { challenge: c });
  if (l && l.length > 0) {
    h.allowCredentials = new Array(l.length);
    for (let f = 0; f < l.length; f++) {
      const m = l[f];
      h.allowCredentials[f] = Object.assign(Object.assign({}, m), {
        id: hi(m.id).buffer,
        type: m.type || "public-key",
        transports: m.transports,
      });
    }
  }
  return h;
}
function ab(s) {
  var a;
  if ("toJSON" in s && typeof s.toJSON == "function") return s.toJSON();
  const l = s;
  return {
    id: s.id,
    rawId: s.id,
    response: {
      attestationObject: ga(new Uint8Array(s.response.attestationObject)),
      clientDataJSON: ga(new Uint8Array(s.response.clientDataJSON)),
    },
    type: "public-key",
    clientExtensionResults: s.getClientExtensionResults(),
    authenticatorAttachment:
      (a = l.authenticatorAttachment) !== null && a !== void 0 ? a : void 0,
  };
}
function ib(s) {
  var a;
  if ("toJSON" in s && typeof s.toJSON == "function") return s.toJSON();
  const l = s,
    r = s.getClientExtensionResults(),
    c = s.response;
  return {
    id: s.id,
    rawId: s.id,
    response: {
      authenticatorData: ga(new Uint8Array(c.authenticatorData)),
      clientDataJSON: ga(new Uint8Array(c.clientDataJSON)),
      signature: ga(new Uint8Array(c.signature)),
      userHandle: c.userHandle ? ga(new Uint8Array(c.userHandle)) : void 0,
    },
    type: "public-key",
    clientExtensionResults: r,
    authenticatorAttachment:
      (a = l.authenticatorAttachment) !== null && a !== void 0 ? a : void 0,
  };
}
function ng(s) {
  return s === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(s);
}
function Nm() {
  var s, a;
  return !!(
    st() &&
    "PublicKeyCredential" in window &&
    window.PublicKeyCredential &&
    "credentials" in navigator &&
    typeof ((s = navigator == null ? void 0 : navigator.credentials) === null ||
    s === void 0
      ? void 0
      : s.create) == "function" &&
    typeof ((a = navigator == null ? void 0 : navigator.credentials) === null ||
    a === void 0
      ? void 0
      : a.get) == "function"
  );
}
async function sb(s) {
  try {
    const a = await navigator.credentials.create(s);
    return a
      ? a instanceof PublicKeyCredential
        ? { data: a, error: null }
        : {
            data: null,
            error: new Zl("Browser returned unexpected credential type", a),
          }
      : { data: null, error: new Zl("Empty credential response", a) };
  } catch (a) {
    return { data: null, error: Py({ error: a, options: s }) };
  }
}
async function lb(s) {
  try {
    const a = await navigator.credentials.get(s);
    return a
      ? a instanceof PublicKeyCredential
        ? { data: a, error: null }
        : {
            data: null,
            error: new Zl("Browser returned unexpected credential type", a),
          }
      : { data: null, error: new Zl("Empty credential response", a) };
  } catch (a) {
    return { data: null, error: Wy({ error: a, options: s }) };
  }
}
const rb = {
    hints: ["security-key"],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      requireResidentKey: !1,
      userVerification: "preferred",
      residentKey: "discouraged",
    },
    attestation: "direct",
  },
  ub = {
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct",
  };
function Pl(...s) {
  const a = (c) => c !== null && typeof c == "object" && !Array.isArray(c),
    l = (c) => c instanceof ArrayBuffer || ArrayBuffer.isView(c),
    r = {};
  for (const c of s)
    if (c)
      for (const h in c) {
        const f = c[h];
        if (f !== void 0)
          if (Array.isArray(f)) r[h] = f;
          else if (l(f)) r[h] = f;
          else if (a(f)) {
            const m = r[h];
            a(m) ? (r[h] = Pl(m, f)) : (r[h] = Pl(f));
          } else r[h] = f;
      }
  return r;
}
function ob(s, a) {
  return Pl(rb, s, a || {});
}
function cb(s, a) {
  return Pl(ub, s, a || {});
}
class hb {
  constructor(a) {
    (this.client = a),
      (this.enroll = this._enroll.bind(this)),
      (this.challenge = this._challenge.bind(this)),
      (this.verify = this._verify.bind(this)),
      (this.authenticate = this._authenticate.bind(this)),
      (this.register = this._register.bind(this));
  }
  async _enroll(a) {
    return this.client.mfa.enroll(
      Object.assign(Object.assign({}, a), { factorType: "webauthn" })
    );
  }
  async _challenge(
    { factorId: a, webauthn: l, friendlyName: r, signal: c },
    h
  ) {
    var f;
    try {
      const { data: m, error: v } = await this.client.mfa.challenge({
        factorId: a,
        webauthn: l,
      });
      if (!m) return { data: null, error: v };
      const g = c ?? eb.createNewAbortSignal();
      if (m.webauthn.type === "create") {
        const { user: y } = m.webauthn.credential_options.publicKey;
        if (!y.name) {
          const _ = r;
          if (_) y.name = `${y.id}:${_}`;
          else {
            const x = (await this.client.getUser()).data.user,
              j =
                ((f = x == null ? void 0 : x.user_metadata) === null ||
                f === void 0
                  ? void 0
                  : f.name) ||
                (x == null ? void 0 : x.email) ||
                (x == null ? void 0 : x.id) ||
                "User";
            y.name = `${y.id}:${j}`;
          }
        }
        y.displayName || (y.displayName = y.name);
      }
      switch (m.webauthn.type) {
        case "create": {
          const y = ob(
              m.webauthn.credential_options.publicKey,
              h == null ? void 0 : h.create
            ),
            { data: _, error: T } = await sb({ publicKey: y, signal: g });
          return _
            ? {
                data: {
                  factorId: a,
                  challengeId: m.id,
                  webauthn: { type: m.webauthn.type, credential_response: _ },
                },
                error: null,
              }
            : { data: null, error: T };
        }
        case "request": {
          const y = cb(
              m.webauthn.credential_options.publicKey,
              h == null ? void 0 : h.request
            ),
            { data: _, error: T } = await lb(
              Object.assign(Object.assign({}, m.webauthn.credential_options), {
                publicKey: y,
                signal: g,
              })
            );
          return _
            ? {
                data: {
                  factorId: a,
                  challengeId: m.id,
                  webauthn: { type: m.webauthn.type, credential_response: _ },
                },
                error: null,
              }
            : { data: null, error: T };
        }
      }
    } catch (m) {
      return W(m)
        ? { data: null, error: m }
        : { data: null, error: new ma("Unexpected error in challenge", m) };
    }
  }
  async _verify({ challengeId: a, factorId: l, webauthn: r }) {
    return this.client.mfa.verify({ factorId: l, challengeId: a, webauthn: r });
  }
  async _authenticate(
    {
      factorId: a,
      webauthn: {
        rpId: l = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0,
        signal: c,
      } = {},
    },
    h
  ) {
    if (!l)
      return {
        data: null,
        error: new ys("rpId is required for WebAuthn authentication"),
      };
    try {
      if (!Nm())
        return {
          data: null,
          error: new ma("Browser does not support WebAuthn", null),
        };
      const { data: f, error: m } = await this.challenge(
        { factorId: a, webauthn: { rpId: l, rpOrigins: r }, signal: c },
        { request: h }
      );
      if (!f) return { data: null, error: m };
      const { webauthn: v } = f;
      return this._verify({
        factorId: a,
        challengeId: f.challengeId,
        webauthn: {
          type: v.type,
          rpId: l,
          rpOrigins: r,
          credential_response: v.credential_response,
        },
      });
    } catch (f) {
      return W(f)
        ? { data: null, error: f }
        : { data: null, error: new ma("Unexpected error in authenticate", f) };
    }
  }
  async _register(
    {
      friendlyName: a,
      webauthn: {
        rpId: l = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0,
        signal: c,
      } = {},
    },
    h
  ) {
    if (!l)
      return {
        data: null,
        error: new ys("rpId is required for WebAuthn registration"),
      };
    try {
      if (!Nm())
        return {
          data: null,
          error: new ma("Browser does not support WebAuthn", null),
        };
      const { data: f, error: m } = await this._enroll({ friendlyName: a });
      if (!f)
        return (
          await this.client.mfa
            .listFactors()
            .then((y) => {
              var _;
              return (_ = y.data) === null || _ === void 0
                ? void 0
                : _.all.find(
                    (T) =>
                      T.factor_type === "webauthn" &&
                      T.friendly_name === a &&
                      T.status !== "unverified"
                  );
            })
            .then((y) =>
              y
                ? this.client.mfa.unenroll({
                    factorId: y == null ? void 0 : y.id,
                  })
                : void 0
            ),
          { data: null, error: m }
        );
      const { data: v, error: g } = await this._challenge(
        {
          factorId: f.id,
          friendlyName: f.friendly_name,
          webauthn: { rpId: l, rpOrigins: r },
          signal: c,
        },
        { create: h }
      );
      return v
        ? this._verify({
            factorId: f.id,
            challengeId: v.challengeId,
            webauthn: {
              rpId: l,
              rpOrigins: r,
              type: v.webauthn.type,
              credential_response: v.webauthn.credential_response,
            },
          })
        : { data: null, error: g };
    } catch (f) {
      return W(f)
        ? { data: null, error: f }
        : { data: null, error: new ma("Unexpected error in register", f) };
    }
  }
}
Jy();
const fb = {
  url: oy,
  storageKey: cy,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: hy,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 5e3,
  skipAutoInitialize: !1,
};
async function km(s, a, l) {
  return await l();
}
const si = {};
class bs {
  get jwks() {
    var a, l;
    return (l =
      (a = si[this.storageKey]) === null || a === void 0 ? void 0 : a.jwks) !==
      null && l !== void 0
      ? l
      : { keys: [] };
  }
  set jwks(a) {
    si[this.storageKey] = Object.assign(
      Object.assign({}, si[this.storageKey]),
      { jwks: a }
    );
  }
  get jwks_cached_at() {
    var a, l;
    return (l =
      (a = si[this.storageKey]) === null || a === void 0
        ? void 0
        : a.cachedAt) !== null && l !== void 0
      ? l
      : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(a) {
    si[this.storageKey] = Object.assign(
      Object.assign({}, si[this.storageKey]),
      { cachedAt: a }
    );
  }
  constructor(a) {
    var l, r, c;
    (this.userStorage = null),
      (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.autoRefreshTickTimeout = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.hasCustomAuthorizationHeader = !1),
      (this.suppressGetSessionWarning = !1),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log);
    const h = Object.assign(Object.assign({}, fb), a);
    if (
      ((this.storageKey = h.storageKey),
      (this.instanceID =
        (l = bs.nextInstanceID[this.storageKey]) !== null && l !== void 0
          ? l
          : 0),
      (bs.nextInstanceID[this.storageKey] = this.instanceID + 1),
      (this.logDebugMessages = !!h.debug),
      typeof h.debug == "function" && (this.logger = h.debug),
      this.instanceID > 0 && st())
    ) {
      const f = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(f), this.logDebugMessages && console.trace(f);
    }
    if (
      ((this.persistSession = h.persistSession),
      (this.autoRefreshToken = h.autoRefreshToken),
      (this.admin = new Yy({ url: h.url, headers: h.headers, fetch: h.fetch })),
      (this.url = h.url),
      (this.headers = h.headers),
      (this.fetch = Fm(h.fetch)),
      (this.lock = h.lock || km),
      (this.detectSessionInUrl = h.detectSessionInUrl),
      (this.flowType = h.flowType),
      (this.hasCustomAuthorizationHeader = h.hasCustomAuthorizationHeader),
      (this.throwOnError = h.throwOnError),
      (this.lockAcquireTimeout = h.lockAcquireTimeout),
      h.lock
        ? (this.lock = h.lock)
        : this.persistSession &&
          st() &&
          !(
            (r = globalThis == null ? void 0 : globalThis.navigator) === null ||
            r === void 0
          ) &&
          r.locks
        ? (this.lock = Xy)
        : (this.lock = km),
      this.jwks ||
        ((this.jwks = { keys: [] }),
        (this.jwks_cached_at = Number.MIN_SAFE_INTEGER)),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
        webauthn: new hb(this),
      }),
      (this.oauth = {
        getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
        approveAuthorization: this._approveAuthorization.bind(this),
        denyAuthorization: this._denyAuthorization.bind(this),
        listGrants: this._listOAuthGrants.bind(this),
        revokeGrant: this._revokeOAuthGrant.bind(this),
      }),
      this.persistSession
        ? (h.storage
            ? (this.storage = h.storage)
            : Wm()
            ? (this.storage = globalThis.localStorage)
            : ((this.memoryStorage = {}),
              (this.storage = Cm(this.memoryStorage))),
          h.userStorage && (this.userStorage = h.userStorage))
        : ((this.memoryStorage = {}), (this.storage = Cm(this.memoryStorage))),
      st() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey
        );
      } catch (f) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          f
        );
      }
      (c = this.broadcastChannel) === null ||
        c === void 0 ||
        c.addEventListener("message", async (f) => {
          this._debug(
            "received broadcast notification from other tab or client",
            f
          );
          try {
            await this._notifyAllSubscribers(f.data.event, f.data.session, !1);
          } catch (m) {
            this._debug("#broadcastChannel", "error", m);
          }
        });
    }
    h.skipAutoInitialize ||
      this.initialize().catch((f) => {
        this._debug("#initialize()", "error", f);
      });
  }
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  _returnResult(a) {
    if (this.throwOnError && a && a.error) throw a.error;
    return a;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${
      this.instanceID
    } (${Im}) ${new Date().toISOString()}`;
  }
  _debug(...a) {
    return this.logDebugMessages && this.logger(this._logPrefix(), ...a), this;
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          await this._acquireLock(
            this.lockAcquireTimeout,
            async () => await this._initialize()
          ))()),
        await this.initializePromise);
  }
  async _initialize() {
    var a;
    try {
      let l = {},
        r = "none";
      if (
        (st() &&
          ((l = Ay(window.location.href)),
          this._isImplicitGrantCallback(l)
            ? (r = "implicit")
            : (await this._isPKCECallback(l)) && (r = "pkce")),
        st() && this.detectSessionInUrl && r !== "none")
      ) {
        const { data: c, error: h } = await this._getSessionFromURL(l, r);
        if (h) {
          if (
            (this._debug(
              "#_initialize()",
              "error detecting session from URL",
              h
            ),
            vy(h))
          ) {
            const v =
              (a = h.details) === null || a === void 0 ? void 0 : a.code;
            if (
              v === "identity_already_exists" ||
              v === "identity_not_found" ||
              v === "single_identity_not_deletable"
            )
              return { error: h };
          }
          return { error: h };
        }
        const { session: f, redirectType: m } = c;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            f,
            "redirect type",
            m
          ),
          await this._saveSession(f),
          setTimeout(async () => {
            m === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", f)
              : await this._notifyAllSubscribers("SIGNED_IN", f);
          }, 0),
          { error: null }
        );
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (l) {
      return W(l)
        ? this._returnResult({ error: l })
        : this._returnResult({
            error: new ma("Unexpected error during initialization", l),
          });
    } finally {
      await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end");
    }
  }
  async signInAnonymously(a) {
    var l, r, c;
    try {
      const h = await ie(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (r =
                (l = a == null ? void 0 : a.options) === null || l === void 0
                  ? void 0
                  : l.data) !== null && r !== void 0
                ? r
                : {},
            gotrue_meta_security: {
              captcha_token:
                (c = a == null ? void 0 : a.options) === null || c === void 0
                  ? void 0
                  : c.captchaToken,
            },
          },
          xform: Gt,
        }),
        { data: f, error: m } = h;
      if (m || !f)
        return this._returnResult({
          data: { user: null, session: null },
          error: m,
        });
      const v = f.session,
        g = f.user;
      return (
        f.session &&
          (await this._saveSession(f.session),
          await this._notifyAllSubscribers("SIGNED_IN", v)),
        this._returnResult({ data: { user: g, session: v }, error: null })
      );
    } catch (h) {
      if (W(h))
        return this._returnResult({
          data: { user: null, session: null },
          error: h,
        });
      throw h;
    }
  }
  async signUp(a) {
    var l, r, c;
    try {
      let h;
      if ("email" in a) {
        const { email: y, password: _, options: T } = a;
        let x = null,
          j = null;
        this.flowType === "pkce" &&
          ([x, j] = await ai(this.storage, this.storageKey)),
          (h = await ie(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: T == null ? void 0 : T.emailRedirectTo,
            body: {
              email: y,
              password: _,
              data:
                (l = T == null ? void 0 : T.data) !== null && l !== void 0
                  ? l
                  : {},
              gotrue_meta_security: {
                captcha_token: T == null ? void 0 : T.captchaToken,
              },
              code_challenge: x,
              code_challenge_method: j,
            },
            xform: Gt,
          }));
      } else if ("phone" in a) {
        const { phone: y, password: _, options: T } = a;
        h = await ie(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: y,
            password: _,
            data:
              (r = T == null ? void 0 : T.data) !== null && r !== void 0
                ? r
                : {},
            channel:
              (c = T == null ? void 0 : T.channel) !== null && c !== void 0
                ? c
                : "sms",
            gotrue_meta_security: {
              captcha_token: T == null ? void 0 : T.captchaToken,
            },
          },
          xform: Gt,
        });
      } else
        throw new Kl(
          "You must provide either an email or phone number and a password"
        );
      const { data: f, error: m } = h;
      if (m || !f)
        return (
          await it(this.storage, `${this.storageKey}-code-verifier`),
          this._returnResult({ data: { user: null, session: null }, error: m })
        );
      const v = f.session,
        g = f.user;
      return (
        f.session &&
          (await this._saveSession(f.session),
          await this._notifyAllSubscribers("SIGNED_IN", v)),
        this._returnResult({ data: { user: g, session: v }, error: null })
      );
    } catch (h) {
      if ((await it(this.storage, `${this.storageKey}-code-verifier`), W(h)))
        return this._returnResult({
          data: { user: null, session: null },
          error: h,
        });
      throw h;
    }
  }
  async signInWithPassword(a) {
    try {
      let l;
      if ("email" in a) {
        const { email: h, password: f, options: m } = a;
        l = await ie(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: h,
              password: f,
              gotrue_meta_security: {
                captcha_token: m == null ? void 0 : m.captchaToken,
              },
            },
            xform: Om,
          }
        );
      } else if ("phone" in a) {
        const { phone: h, password: f, options: m } = a;
        l = await ie(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: h,
              password: f,
              gotrue_meta_security: {
                captcha_token: m == null ? void 0 : m.captchaToken,
              },
            },
            xform: Om,
          }
        );
      } else
        throw new Kl(
          "You must provide either an email or phone number and a password"
        );
      const { data: r, error: c } = l;
      if (c)
        return this._returnResult({
          data: { user: null, session: null },
          error: c,
        });
      if (!r || !r.session || !r.user) {
        const h = new ni();
        return this._returnResult({
          data: { user: null, session: null },
          error: h,
        });
      }
      return (
        r.session &&
          (await this._saveSession(r.session),
          await this._notifyAllSubscribers("SIGNED_IN", r.session)),
        this._returnResult({
          data: Object.assign(
            { user: r.user, session: r.session },
            r.weak_password ? { weakPassword: r.weak_password } : null
          ),
          error: c,
        })
      );
    } catch (l) {
      if (W(l))
        return this._returnResult({
          data: { user: null, session: null },
          error: l,
        });
      throw l;
    }
  }
  async signInWithOAuth(a) {
    var l, r, c, h;
    return await this._handleProviderSignIn(a.provider, {
      redirectTo:
        (l = a.options) === null || l === void 0 ? void 0 : l.redirectTo,
      scopes: (r = a.options) === null || r === void 0 ? void 0 : r.scopes,
      queryParams:
        (c = a.options) === null || c === void 0 ? void 0 : c.queryParams,
      skipBrowserRedirect:
        (h = a.options) === null || h === void 0
          ? void 0
          : h.skipBrowserRedirect,
    });
  }
  async exchangeCodeForSession(a) {
    return (
      await this.initializePromise,
      this._acquireLock(this.lockAcquireTimeout, async () =>
        this._exchangeCodeForSession(a)
      )
    );
  }
  async signInWithWeb3(a) {
    const { chain: l } = a;
    switch (l) {
      case "ethereum":
        return await this.signInWithEthereum(a);
      case "solana":
        return await this.signInWithSolana(a);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${l}"`);
    }
  }
  async signInWithEthereum(a) {
    var l, r, c, h, f, m, v, g, y, _, T;
    let x, j;
    if ("message" in a) (x = a.message), (j = a.signature);
    else {
      const { chain: L, wallet: q, statement: X, options: Q } = a;
      let H;
      if (st())
        if (typeof q == "object") H = q;
        else {
          const G = window;
          if (
            "ethereum" in G &&
            typeof G.ethereum == "object" &&
            "request" in G.ethereum &&
            typeof G.ethereum.request == "function"
          )
            H = G.ethereum;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead."
            );
        }
      else {
        if (typeof q != "object" || !(Q != null && Q.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments."
          );
        H = q;
      }
      const ee = new URL(
          (l = Q == null ? void 0 : Q.url) !== null && l !== void 0
            ? l
            : window.location.href
        ),
        Y = await H.request({ method: "eth_requestAccounts" })
          .then((G) => G)
          .catch(() => {
            throw new Error(
              "@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid"
            );
          });
      if (!Y || Y.length === 0)
        throw new Error(
          "@supabase/auth-js: No accounts available. Please ensure the wallet is connected."
        );
      const F = tg(Y[0]);
      let B =
        (r = Q == null ? void 0 : Q.signInWithEthereum) === null || r === void 0
          ? void 0
          : r.chainId;
      if (!B) {
        const G = await H.request({ method: "eth_chainId" });
        B = Qy(G);
      }
      const ve = {
        domain: ee.host,
        address: F,
        statement: X,
        uri: ee.href,
        version: "1",
        chainId: B,
        nonce:
          (c = Q == null ? void 0 : Q.signInWithEthereum) === null ||
          c === void 0
            ? void 0
            : c.nonce,
        issuedAt:
          (f =
            (h = Q == null ? void 0 : Q.signInWithEthereum) === null ||
            h === void 0
              ? void 0
              : h.issuedAt) !== null && f !== void 0
            ? f
            : new Date(),
        expirationTime:
          (m = Q == null ? void 0 : Q.signInWithEthereum) === null ||
          m === void 0
            ? void 0
            : m.expirationTime,
        notBefore:
          (v = Q == null ? void 0 : Q.signInWithEthereum) === null ||
          v === void 0
            ? void 0
            : v.notBefore,
        requestId:
          (g = Q == null ? void 0 : Q.signInWithEthereum) === null ||
          g === void 0
            ? void 0
            : g.requestId,
        resources:
          (y = Q == null ? void 0 : Q.signInWithEthereum) === null ||
          y === void 0
            ? void 0
            : y.resources,
      };
      (x = Zy(ve)),
        (j = await H.request({ method: "personal_sign", params: [Iy(x), F] }));
    }
    try {
      const { data: L, error: q } = await ie(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "ethereum", message: x, signature: j },
            !((_ = a.options) === null || _ === void 0) && _.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (T = a.options) === null || T === void 0
                        ? void 0
                        : T.captchaToken,
                  },
                }
              : null
          ),
          xform: Gt,
        }
      );
      if (q) throw q;
      if (!L || !L.session || !L.user) {
        const X = new ni();
        return this._returnResult({
          data: { user: null, session: null },
          error: X,
        });
      }
      return (
        L.session &&
          (await this._saveSession(L.session),
          await this._notifyAllSubscribers("SIGNED_IN", L.session)),
        this._returnResult({ data: Object.assign({}, L), error: q })
      );
    } catch (L) {
      if (W(L))
        return this._returnResult({
          data: { user: null, session: null },
          error: L,
        });
      throw L;
    }
  }
  async signInWithSolana(a) {
    var l, r, c, h, f, m, v, g, y, _, T, x;
    let j, L;
    if ("message" in a) (j = a.message), (L = a.signature);
    else {
      const { chain: q, wallet: X, statement: Q, options: H } = a;
      let ee;
      if (st())
        if (typeof X == "object") ee = X;
        else {
          const F = window;
          if (
            "solana" in F &&
            typeof F.solana == "object" &&
            (("signIn" in F.solana && typeof F.solana.signIn == "function") ||
              ("signMessage" in F.solana &&
                typeof F.solana.signMessage == "function"))
          )
            ee = F.solana;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead."
            );
        }
      else {
        if (typeof X != "object" || !(H != null && H.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments."
          );
        ee = X;
      }
      const Y = new URL(
        (l = H == null ? void 0 : H.url) !== null && l !== void 0
          ? l
          : window.location.href
      );
      if ("signIn" in ee && ee.signIn) {
        const F = await ee.signIn(
          Object.assign(
            Object.assign(
              Object.assign(
                { issuedAt: new Date().toISOString() },
                H == null ? void 0 : H.signInWithSolana
              ),
              { version: "1", domain: Y.host, uri: Y.href }
            ),
            Q ? { statement: Q } : null
          )
        );
        let B;
        if (Array.isArray(F) && F[0] && typeof F[0] == "object") B = F[0];
        else if (
          F &&
          typeof F == "object" &&
          "signedMessage" in F &&
          "signature" in F
        )
          B = F;
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() returned unrecognized value"
          );
        if (
          "signedMessage" in B &&
          "signature" in B &&
          (typeof B.signedMessage == "string" ||
            B.signedMessage instanceof Uint8Array) &&
          B.signature instanceof Uint8Array
        )
          (j =
            typeof B.signedMessage == "string"
              ? B.signedMessage
              : new TextDecoder().decode(B.signedMessage)),
            (L = B.signature);
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields"
          );
      } else {
        if (
          !("signMessage" in ee) ||
          typeof ee.signMessage != "function" ||
          !("publicKey" in ee) ||
          typeof ee != "object" ||
          !ee.publicKey ||
          !("toBase58" in ee.publicKey) ||
          typeof ee.publicKey.toBase58 != "function"
        )
          throw new Error(
            "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API"
          );
        j = [
          `${Y.host} wants you to sign in with your Solana account:`,
          ee.publicKey.toBase58(),
          ...(Q ? ["", Q, ""] : [""]),
          "Version: 1",
          `URI: ${Y.href}`,
          `Issued At: ${
            (c =
              (r = H == null ? void 0 : H.signInWithSolana) === null ||
              r === void 0
                ? void 0
                : r.issuedAt) !== null && c !== void 0
              ? c
              : new Date().toISOString()
          }`,
          ...(!(
            (h = H == null ? void 0 : H.signInWithSolana) === null ||
            h === void 0
          ) && h.notBefore
            ? [`Not Before: ${H.signInWithSolana.notBefore}`]
            : []),
          ...(!(
            (f = H == null ? void 0 : H.signInWithSolana) === null ||
            f === void 0
          ) && f.expirationTime
            ? [`Expiration Time: ${H.signInWithSolana.expirationTime}`]
            : []),
          ...(!(
            (m = H == null ? void 0 : H.signInWithSolana) === null ||
            m === void 0
          ) && m.chainId
            ? [`Chain ID: ${H.signInWithSolana.chainId}`]
            : []),
          ...(!(
            (v = H == null ? void 0 : H.signInWithSolana) === null ||
            v === void 0
          ) && v.nonce
            ? [`Nonce: ${H.signInWithSolana.nonce}`]
            : []),
          ...(!(
            (g = H == null ? void 0 : H.signInWithSolana) === null ||
            g === void 0
          ) && g.requestId
            ? [`Request ID: ${H.signInWithSolana.requestId}`]
            : []),
          ...(!(
            (_ =
              (y = H == null ? void 0 : H.signInWithSolana) === null ||
              y === void 0
                ? void 0
                : y.resources) === null || _ === void 0
          ) && _.length
            ? [
                "Resources",
                ...H.signInWithSolana.resources.map((B) => `- ${B}`),
              ]
            : []),
        ].join(`
`);
        const F = await ee.signMessage(new TextEncoder().encode(j), "utf8");
        if (!F || !(F instanceof Uint8Array))
          throw new Error(
            "@supabase/auth-js: Wallet signMessage() API returned an recognized value"
          );
        L = F;
      }
    }
    try {
      const { data: q, error: X } = await ie(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "solana", message: j, signature: ga(L) },
            !((T = a.options) === null || T === void 0) && T.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (x = a.options) === null || x === void 0
                        ? void 0
                        : x.captchaToken,
                  },
                }
              : null
          ),
          xform: Gt,
        }
      );
      if (X) throw X;
      if (!q || !q.session || !q.user) {
        const Q = new ni();
        return this._returnResult({
          data: { user: null, session: null },
          error: Q,
        });
      }
      return (
        q.session &&
          (await this._saveSession(q.session),
          await this._notifyAllSubscribers("SIGNED_IN", q.session)),
        this._returnResult({ data: Object.assign({}, q), error: X })
      );
    } catch (q) {
      if (W(q))
        return this._returnResult({
          data: { user: null, session: null },
          error: q,
        });
      throw q;
    }
  }
  async _exchangeCodeForSession(a) {
    const l = await fa(this.storage, `${this.storageKey}-code-verifier`),
      [r, c] = (l ?? "").split("/");
    try {
      if (!r && this.flowType === "pkce") throw new py();
      const { data: h, error: f } = await ie(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: a, code_verifier: r },
          xform: Gt,
        }
      );
      if ((await it(this.storage, `${this.storageKey}-code-verifier`), f))
        throw f;
      if (!h || !h.session || !h.user) {
        const m = new ni();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: m,
        });
      }
      return (
        h.session &&
          (await this._saveSession(h.session),
          await this._notifyAllSubscribers("SIGNED_IN", h.session)),
        this._returnResult({
          data: Object.assign(Object.assign({}, h), {
            redirectType: c ?? null,
          }),
          error: f,
        })
      );
    } catch (h) {
      if ((await it(this.storage, `${this.storageKey}-code-verifier`), W(h)))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: h,
        });
      throw h;
    }
  }
  async signInWithIdToken(a) {
    try {
      const {
          options: l,
          provider: r,
          token: c,
          access_token: h,
          nonce: f,
        } = a,
        m = await ie(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: r,
              id_token: c,
              access_token: h,
              nonce: f,
              gotrue_meta_security: {
                captcha_token: l == null ? void 0 : l.captchaToken,
              },
            },
            xform: Gt,
          }
        ),
        { data: v, error: g } = m;
      if (g)
        return this._returnResult({
          data: { user: null, session: null },
          error: g,
        });
      if (!v || !v.session || !v.user) {
        const y = new ni();
        return this._returnResult({
          data: { user: null, session: null },
          error: y,
        });
      }
      return (
        v.session &&
          (await this._saveSession(v.session),
          await this._notifyAllSubscribers("SIGNED_IN", v.session)),
        this._returnResult({ data: v, error: g })
      );
    } catch (l) {
      if (W(l))
        return this._returnResult({
          data: { user: null, session: null },
          error: l,
        });
      throw l;
    }
  }
  async signInWithOtp(a) {
    var l, r, c, h, f;
    try {
      if ("email" in a) {
        const { email: m, options: v } = a;
        let g = null,
          y = null;
        this.flowType === "pkce" &&
          ([g, y] = await ai(this.storage, this.storageKey));
        const { error: _ } = await ie(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: m,
            data:
              (l = v == null ? void 0 : v.data) !== null && l !== void 0
                ? l
                : {},
            create_user:
              (r = v == null ? void 0 : v.shouldCreateUser) !== null &&
              r !== void 0
                ? r
                : !0,
            gotrue_meta_security: {
              captcha_token: v == null ? void 0 : v.captchaToken,
            },
            code_challenge: g,
            code_challenge_method: y,
          },
          redirectTo: v == null ? void 0 : v.emailRedirectTo,
        });
        return this._returnResult({
          data: { user: null, session: null },
          error: _,
        });
      }
      if ("phone" in a) {
        const { phone: m, options: v } = a,
          { data: g, error: y } = await ie(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: m,
                data:
                  (c = v == null ? void 0 : v.data) !== null && c !== void 0
                    ? c
                    : {},
                create_user:
                  (h = v == null ? void 0 : v.shouldCreateUser) !== null &&
                  h !== void 0
                    ? h
                    : !0,
                gotrue_meta_security: {
                  captcha_token: v == null ? void 0 : v.captchaToken,
                },
                channel:
                  (f = v == null ? void 0 : v.channel) !== null && f !== void 0
                    ? f
                    : "sms",
              },
            }
          );
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: g == null ? void 0 : g.message_id,
          },
          error: y,
        });
      }
      throw new Kl("You must provide either an email or phone number.");
    } catch (m) {
      if ((await it(this.storage, `${this.storageKey}-code-verifier`), W(m)))
        return this._returnResult({
          data: { user: null, session: null },
          error: m,
        });
      throw m;
    }
  }
  async verifyOtp(a) {
    var l, r;
    try {
      let c, h;
      "options" in a &&
        ((c = (l = a.options) === null || l === void 0 ? void 0 : l.redirectTo),
        (h =
          (r = a.options) === null || r === void 0 ? void 0 : r.captchaToken));
      const { data: f, error: m } = await ie(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, a), {
            gotrue_meta_security: { captcha_token: h },
          }),
          redirectTo: c,
          xform: Gt,
        }
      );
      if (m) throw m;
      if (!f) throw new Error("An error occurred on token verification.");
      const v = f.session,
        g = f.user;
      return (
        v != null &&
          v.access_token &&
          (await this._saveSession(v),
          await this._notifyAllSubscribers(
            a.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            v
          )),
        this._returnResult({ data: { user: g, session: v }, error: null })
      );
    } catch (c) {
      if (W(c))
        return this._returnResult({
          data: { user: null, session: null },
          error: c,
        });
      throw c;
    }
  }
  async signInWithSSO(a) {
    var l, r, c, h, f;
    try {
      let m = null,
        v = null;
      this.flowType === "pkce" &&
        ([m, v] = await ai(this.storage, this.storageKey));
      const g = await ie(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  "providerId" in a ? { provider_id: a.providerId } : null
                ),
                "domain" in a ? { domain: a.domain } : null
              ),
              {
                redirect_to:
                  (r =
                    (l = a.options) === null || l === void 0
                      ? void 0
                      : l.redirectTo) !== null && r !== void 0
                    ? r
                    : void 0,
              }
            ),
            !((c = a == null ? void 0 : a.options) === null || c === void 0) &&
              c.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token: a.options.captchaToken,
                  },
                }
              : null
          ),
          {
            skip_http_redirect: !0,
            code_challenge: m,
            code_challenge_method: v,
          }
        ),
        headers: this.headers,
        xform: Gy,
      });
      return (
        !((h = g.data) === null || h === void 0) &&
          h.url &&
          st() &&
          !(
            !((f = a.options) === null || f === void 0) && f.skipBrowserRedirect
          ) &&
          window.location.assign(g.data.url),
        this._returnResult(g)
      );
    } catch (m) {
      if ((await it(this.storage, `${this.storageKey}-code-verifier`), W(m)))
        return this._returnResult({ data: null, error: m });
      throw m;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._reauthenticate()
      )
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (a) => {
        const {
          data: { session: l },
          error: r,
        } = a;
        if (r) throw r;
        if (!l) throw new Ot();
        const { error: c } = await ie(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: l.access_token }
        );
        return this._returnResult({
          data: { user: null, session: null },
          error: c,
        });
      });
    } catch (a) {
      if (W(a))
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      throw a;
    }
  }
  async resend(a) {
    try {
      const l = `${this.url}/resend`;
      if ("email" in a) {
        const { email: r, type: c, options: h } = a,
          { error: f } = await ie(this.fetch, "POST", l, {
            headers: this.headers,
            body: {
              email: r,
              type: c,
              gotrue_meta_security: {
                captcha_token: h == null ? void 0 : h.captchaToken,
              },
            },
            redirectTo: h == null ? void 0 : h.emailRedirectTo,
          });
        return this._returnResult({
          data: { user: null, session: null },
          error: f,
        });
      } else if ("phone" in a) {
        const { phone: r, type: c, options: h } = a,
          { data: f, error: m } = await ie(this.fetch, "POST", l, {
            headers: this.headers,
            body: {
              phone: r,
              type: c,
              gotrue_meta_security: {
                captcha_token: h == null ? void 0 : h.captchaToken,
              },
            },
          });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: f == null ? void 0 : f.message_id,
          },
          error: m,
        });
      }
      throw new Kl(
        "You must provide either an email or phone number and a type"
      );
    } catch (l) {
      if (W(l))
        return this._returnResult({
          data: { user: null, session: null },
          error: l,
        });
      throw l;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      await this._acquireLock(this.lockAcquireTimeout, async () =>
        this._useSession(async (l) => l)
      )
    );
  }
  async _acquireLock(a, l) {
    this._debug("#_acquireLock", "begin", a);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          c = (async () => (await r, await l()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await c;
              } catch {}
            })()
          ),
          c
        );
      }
      return await this.lock(`lock:${this.storageKey}`, a, async () => {
        this._debug(
          "#_acquireLock",
          "lock acquired for storage key",
          this.storageKey
        );
        try {
          this.lockAcquired = !0;
          const r = l();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await r;
                } catch {}
              })()
            ),
              await r;
            this.pendingInLock.length;

          ) {
            const c = [...this.pendingInLock];
            await Promise.all(c), this.pendingInLock.splice(0, c.length);
          }
          return await r;
        } finally {
          this._debug(
            "#_acquireLock",
            "lock released for storage key",
            this.storageKey
          ),
            (this.lockAcquired = !1);
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(a) {
    this._debug("#_useSession", "begin");
    try {
      const l = await this.__loadSession();
      return await a(l);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    this._debug("#__loadSession()", "begin"),
      this.lockAcquired ||
        this._debug(
          "#__loadSession()",
          "used outside of an acquired lock!",
          new Error().stack
        );
    try {
      let a = null;
      const l = await fa(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", l),
        l !== null &&
          (this._isValidSession(l)
            ? (a = l)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid"
              ),
              await this._removeSession())),
        !a)
      )
        return { data: { session: null }, error: null };
      const r = a.expires_at ? a.expires_at * 1e3 - Date.now() < Oo : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${r ? "" : " not"} expired`,
          "expires_at",
          a.expires_at
        ),
        !r)
      ) {
        if (this.userStorage) {
          const f = await fa(this.userStorage, this.storageKey + "-user");
          f != null && f.user ? (a.user = f.user) : (a.user = jo());
        }
        if (
          this.storage.isServer &&
          a.user &&
          !a.user.__isUserNotAvailableProxy
        ) {
          const f = { value: this.suppressGetSessionWarning };
          (a.user = By(a.user, f)),
            f.value && (this.suppressGetSessionWarning = !0);
        }
        return { data: { session: a }, error: null };
      }
      const { data: c, error: h } = await this._callRefreshToken(
        a.refresh_token
      );
      return h
        ? this._returnResult({ data: { session: null }, error: h })
        : this._returnResult({ data: { session: c }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(a) {
    if (a) return await this._getUser(a);
    await this.initializePromise;
    const l = await this._acquireLock(
      this.lockAcquireTimeout,
      async () => await this._getUser()
    );
    return l.data.user && (this.suppressGetSessionWarning = !0), l;
  }
  async _getUser(a) {
    try {
      return a
        ? await ie(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: a,
            xform: Yn,
          })
        : await this._useSession(async (l) => {
            var r, c, h;
            const { data: f, error: m } = l;
            if (m) throw m;
            return !(
              !((r = f.session) === null || r === void 0) && r.access_token
            ) && !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new Ot() }
              : await ie(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (h =
                      (c = f.session) === null || c === void 0
                        ? void 0
                        : c.access_token) !== null && h !== void 0
                      ? h
                      : void 0,
                  xform: Yn,
                });
          });
    } catch (l) {
      if (W(l))
        return (
          Ro(l) &&
            (await this._removeSession(),
            await it(this.storage, `${this.storageKey}-code-verifier`)),
          this._returnResult({ data: { user: null }, error: l })
        );
      throw l;
    }
  }
  async updateUser(a, l = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._updateUser(a, l)
      )
    );
  }
  async _updateUser(a, l = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: c, error: h } = r;
        if (h) throw h;
        if (!c.session) throw new Ot();
        const f = c.session;
        let m = null,
          v = null;
        this.flowType === "pkce" &&
          a.email != null &&
          ([m, v] = await ai(this.storage, this.storageKey));
        const { data: g, error: y } = await ie(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: l == null ? void 0 : l.emailRedirectTo,
            body: Object.assign(Object.assign({}, a), {
              code_challenge: m,
              code_challenge_method: v,
            }),
            jwt: f.access_token,
            xform: Yn,
          }
        );
        if (y) throw y;
        return (
          (f.user = g.user),
          await this._saveSession(f),
          await this._notifyAllSubscribers("USER_UPDATED", f),
          this._returnResult({ data: { user: f.user }, error: null })
        );
      });
    } catch (r) {
      if ((await it(this.storage, `${this.storageKey}-code-verifier`), W(r)))
        return this._returnResult({ data: { user: null }, error: r });
      throw r;
    }
  }
  async setSession(a) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._setSession(a)
      )
    );
  }
  async _setSession(a) {
    try {
      if (!a.access_token || !a.refresh_token) throw new Ot();
      const l = Date.now() / 1e3;
      let r = l,
        c = !0,
        h = null;
      const { payload: f } = Xl(a.access_token);
      if ((f.exp && ((r = f.exp), (c = r <= l)), c)) {
        const { data: m, error: v } = await this._callRefreshToken(
          a.refresh_token
        );
        if (v)
          return this._returnResult({
            data: { user: null, session: null },
            error: v,
          });
        if (!m) return { data: { user: null, session: null }, error: null };
        h = m;
      } else {
        const { data: m, error: v } = await this._getUser(a.access_token);
        if (v)
          return this._returnResult({
            data: { user: null, session: null },
            error: v,
          });
        (h = {
          access_token: a.access_token,
          refresh_token: a.refresh_token,
          user: m.user,
          token_type: "bearer",
          expires_in: r - l,
          expires_at: r,
        }),
          await this._saveSession(h),
          await this._notifyAllSubscribers("SIGNED_IN", h);
      }
      return this._returnResult({
        data: { user: h.user, session: h },
        error: null,
      });
    } catch (l) {
      if (W(l))
        return this._returnResult({
          data: { session: null, user: null },
          error: l,
        });
      throw l;
    }
  }
  async refreshSession(a) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._refreshSession(a)
      )
    );
  }
  async _refreshSession(a) {
    try {
      return await this._useSession(async (l) => {
        var r;
        if (!a) {
          const { data: f, error: m } = l;
          if (m) throw m;
          a = (r = f.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!(a != null && a.refresh_token)) throw new Ot();
        const { data: c, error: h } = await this._callRefreshToken(
          a.refresh_token
        );
        return h
          ? this._returnResult({
              data: { user: null, session: null },
              error: h,
            })
          : c
          ? this._returnResult({
              data: { user: c.user, session: c },
              error: null,
            })
          : this._returnResult({
              data: { user: null, session: null },
              error: null,
            });
      });
    } catch (l) {
      if (W(l))
        return this._returnResult({
          data: { user: null, session: null },
          error: l,
        });
      throw l;
    }
  }
  async _getSessionFromURL(a, l) {
    try {
      if (!st()) throw new Yl("No browser detected.");
      if (a.error || a.error_description || a.error_code)
        throw new Yl(
          a.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: a.error || "unspecified_error",
            code: a.error_code || "unspecified_code",
          }
        );
      switch (l) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new _m("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new Yl("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (l === "pkce") {
        if (
          (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !a.code)
        )
          throw new _m("No code detected.");
        const { data: Q, error: H } = await this._exchangeCodeForSession(
          a.code
        );
        if (H) throw H;
        const ee = new URL(window.location.href);
        return (
          ee.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", ee.toString()),
          { data: { session: Q.session, redirectType: null }, error: null }
        );
      }
      const {
        provider_token: r,
        provider_refresh_token: c,
        access_token: h,
        refresh_token: f,
        expires_in: m,
        expires_at: v,
        token_type: g,
      } = a;
      if (!h || !m || !f || !g) throw new Yl("No session defined in URL");
      const y = Math.round(Date.now() / 1e3),
        _ = parseInt(m);
      let T = y + _;
      v && (T = parseInt(v));
      const x = T - y;
      x * 1e3 <= ui &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${x}s, should have been closer to ${_}s`
        );
      const j = T - _;
      y - j >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            j,
            T,
            y
          )
        : y - j < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
            j,
            T,
            y
          );
      const { data: L, error: q } = await this._getUser(h);
      if (q) throw q;
      const X = {
        provider_token: r,
        provider_refresh_token: c,
        access_token: h,
        expires_in: _,
        expires_at: T,
        refresh_token: f,
        token_type: g,
        user: L.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        this._returnResult({
          data: { session: X, redirectType: a.type },
          error: null,
        })
      );
    } catch (r) {
      if (W(r))
        return this._returnResult({
          data: { session: null, redirectType: null },
          error: r,
        });
      throw r;
    }
  }
  _isImplicitGrantCallback(a) {
    return typeof this.detectSessionInUrl == "function"
      ? this.detectSessionInUrl(new URL(window.location.href), a)
      : !!(a.access_token || a.error_description);
  }
  async _isPKCECallback(a) {
    const l = await fa(this.storage, `${this.storageKey}-code-verifier`);
    return !!(a.code && l);
  }
  async signOut(a = { scope: "global" }) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._signOut(a)
      )
    );
  }
  async _signOut({ scope: a } = { scope: "global" }) {
    return await this._useSession(async (l) => {
      var r;
      const { data: c, error: h } = l;
      if (h && !Ro(h)) return this._returnResult({ error: h });
      const f =
        (r = c.session) === null || r === void 0 ? void 0 : r.access_token;
      if (f) {
        const { error: m } = await this.admin.signOut(f, a);
        if (
          m &&
          !(
            (gy(m) &&
              (m.status === 404 || m.status === 401 || m.status === 403)) ||
            Ro(m)
          )
        )
          return this._returnResult({ error: m });
      }
      return (
        a !== "others" &&
          (await this._removeSession(),
          await it(this.storage, `${this.storageKey}-code-verifier`)),
        this._returnResult({ error: null })
      );
    });
  }
  onAuthStateChange(a) {
    const l = Ty(),
      r = {
        id: l,
        callback: a,
        unsubscribe: () => {
          this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            l
          ),
            this.stateChangeEmitters.delete(l);
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", l),
      this.stateChangeEmitters.set(l, r),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => {
          this._emitInitialSession(l);
        })
      ))(),
      { data: { subscription: r } }
    );
  }
  async _emitInitialSession(a) {
    return await this._useSession(async (l) => {
      var r, c;
      try {
        const {
          data: { session: h },
          error: f,
        } = l;
        if (f) throw f;
        await ((r = this.stateChangeEmitters.get(a)) === null || r === void 0
          ? void 0
          : r.callback("INITIAL_SESSION", h)),
          this._debug("INITIAL_SESSION", "callback id", a, "session", h);
      } catch (h) {
        await ((c = this.stateChangeEmitters.get(a)) === null || c === void 0
          ? void 0
          : c.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", a, "error", h),
          console.error(h);
      }
    });
  }
  async resetPasswordForEmail(a, l = {}) {
    let r = null,
      c = null;
    this.flowType === "pkce" &&
      ([r, c] = await ai(this.storage, this.storageKey, !0));
    try {
      return await ie(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: a,
          code_challenge: r,
          code_challenge_method: c,
          gotrue_meta_security: { captcha_token: l.captchaToken },
        },
        headers: this.headers,
        redirectTo: l.redirectTo,
      });
    } catch (h) {
      if ((await it(this.storage, `${this.storageKey}-code-verifier`), W(h)))
        return this._returnResult({ data: null, error: h });
      throw h;
    }
  }
  async getUserIdentities() {
    var a;
    try {
      const { data: l, error: r } = await this.getUser();
      if (r) throw r;
      return this._returnResult({
        data: {
          identities: (a = l.user.identities) !== null && a !== void 0 ? a : [],
        },
        error: null,
      });
    } catch (l) {
      if (W(l)) return this._returnResult({ data: null, error: l });
      throw l;
    }
  }
  async linkIdentity(a) {
    return "token" in a
      ? this.linkIdentityIdToken(a)
      : this.linkIdentityOAuth(a);
  }
  async linkIdentityOAuth(a) {
    var l;
    try {
      const { data: r, error: c } = await this._useSession(async (h) => {
        var f, m, v, g, y;
        const { data: _, error: T } = h;
        if (T) throw T;
        const x = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          a.provider,
          {
            redirectTo:
              (f = a.options) === null || f === void 0 ? void 0 : f.redirectTo,
            scopes:
              (m = a.options) === null || m === void 0 ? void 0 : m.scopes,
            queryParams:
              (v = a.options) === null || v === void 0 ? void 0 : v.queryParams,
            skipBrowserRedirect: !0,
          }
        );
        return await ie(this.fetch, "GET", x, {
          headers: this.headers,
          jwt:
            (y =
              (g = _.session) === null || g === void 0
                ? void 0
                : g.access_token) !== null && y !== void 0
              ? y
              : void 0,
        });
      });
      if (c) throw c;
      return (
        st() &&
          !(
            !((l = a.options) === null || l === void 0) && l.skipBrowserRedirect
          ) &&
          window.location.assign(r == null ? void 0 : r.url),
        this._returnResult({
          data: { provider: a.provider, url: r == null ? void 0 : r.url },
          error: null,
        })
      );
    } catch (r) {
      if (W(r))
        return this._returnResult({
          data: { provider: a.provider, url: null },
          error: r,
        });
      throw r;
    }
  }
  async linkIdentityIdToken(a) {
    return await this._useSession(async (l) => {
      var r;
      try {
        const {
          error: c,
          data: { session: h },
        } = l;
        if (c) throw c;
        const {
            options: f,
            provider: m,
            token: v,
            access_token: g,
            nonce: y,
          } = a,
          _ = await ie(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              jwt:
                (r = h == null ? void 0 : h.access_token) !== null &&
                r !== void 0
                  ? r
                  : void 0,
              body: {
                provider: m,
                id_token: v,
                access_token: g,
                nonce: y,
                link_identity: !0,
                gotrue_meta_security: {
                  captcha_token: f == null ? void 0 : f.captchaToken,
                },
              },
              xform: Gt,
            }
          ),
          { data: T, error: x } = _;
        return x
          ? this._returnResult({
              data: { user: null, session: null },
              error: x,
            })
          : !T || !T.session || !T.user
          ? this._returnResult({
              data: { user: null, session: null },
              error: new ni(),
            })
          : (T.session &&
              (await this._saveSession(T.session),
              await this._notifyAllSubscribers("USER_UPDATED", T.session)),
            this._returnResult({ data: T, error: x }));
      } catch (c) {
        if ((await it(this.storage, `${this.storageKey}-code-verifier`), W(c)))
          return this._returnResult({
            data: { user: null, session: null },
            error: c,
          });
        throw c;
      }
    });
  }
  async unlinkIdentity(a) {
    try {
      return await this._useSession(async (l) => {
        var r, c;
        const { data: h, error: f } = l;
        if (f) throw f;
        return await ie(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${a.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (c =
                (r = h.session) === null || r === void 0
                  ? void 0
                  : r.access_token) !== null && c !== void 0
                ? c
                : void 0,
          }
        );
      });
    } catch (l) {
      if (W(l)) return this._returnResult({ data: null, error: l });
      throw l;
    }
  }
  async _refreshAccessToken(a) {
    const l = `#_refreshAccessToken(${a.substring(0, 5)}...)`;
    this._debug(l, "begin");
    try {
      const r = Date.now();
      return await Ry(
        async (c) => (
          c > 0 && (await Oy(200 * Math.pow(2, c - 1))),
          this._debug(l, "refreshing attempt", c),
          await ie(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: a }, headers: this.headers, xform: Gt }
          )
        ),
        (c, h) => {
          const f = 200 * Math.pow(2, c);
          return h && Co(h) && Date.now() + f - r < ui;
        }
      );
    } catch (r) {
      if ((this._debug(l, "error", r), W(r)))
        return this._returnResult({
          data: { session: null, user: null },
          error: r,
        });
      throw r;
    } finally {
      this._debug(l, "end");
    }
  }
  _isValidSession(a) {
    return (
      typeof a == "object" &&
      a !== null &&
      "access_token" in a &&
      "refresh_token" in a &&
      "expires_at" in a
    );
  }
  async _handleProviderSignIn(a, l) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, a, {
      redirectTo: l.redirectTo,
      scopes: l.scopes,
      queryParams: l.queryParams,
    });
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        a,
        "options",
        l,
        "url",
        r
      ),
      st() && !l.skipBrowserRedirect && window.location.assign(r),
      { data: { provider: a, url: r }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var a, l;
    const r = "#_recoverAndRefresh()";
    this._debug(r, "begin");
    try {
      const c = await fa(this.storage, this.storageKey);
      if (c && this.userStorage) {
        let f = await fa(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer &&
          Object.is(this.storage, this.userStorage) &&
          !f &&
          ((f = { user: c.user }),
          await oi(this.userStorage, this.storageKey + "-user", f)),
          (c.user =
            (a = f == null ? void 0 : f.user) !== null && a !== void 0
              ? a
              : jo());
      } else if (c && !c.user && !c.user) {
        const f = await fa(this.storage, this.storageKey + "-user");
        f && f != null && f.user
          ? ((c.user = f.user),
            await it(this.storage, this.storageKey + "-user"),
            await oi(this.storage, this.storageKey, c))
          : (c.user = jo());
      }
      if (
        (this._debug(r, "session from storage", c), !this._isValidSession(c))
      ) {
        this._debug(r, "session is not valid"),
          c !== null && (await this._removeSession());
        return;
      }
      const h =
        ((l = c.expires_at) !== null && l !== void 0 ? l : 1 / 0) * 1e3 -
          Date.now() <
        Oo;
      if (
        (this._debug(
          r,
          `session has${h ? "" : " not"} expired with margin of ${Oo}s`
        ),
        h)
      ) {
        if (this.autoRefreshToken && c.refresh_token) {
          const { error: f } = await this._callRefreshToken(c.refresh_token);
          f &&
            (console.error(f),
            Co(f) ||
              (this._debug(
                r,
                "refresh failed with a non-retryable error, removing the session",
                f
              ),
              await this._removeSession()));
        }
      } else if (c.user && c.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: f, error: m } = await this._getUser(c.access_token);
          !m && f != null && f.user
            ? ((c.user = f.user),
              await this._saveSession(c),
              await this._notifyAllSubscribers("SIGNED_IN", c))
            : this._debug(
                r,
                "could not get user data, skipping SIGNED_IN notification"
              );
        } catch (f) {
          console.error("Error getting user data:", f),
            this._debug(
              r,
              "error getting user data, skipping SIGNED_IN notification",
              f
            );
        }
      else await this._notifyAllSubscribers("SIGNED_IN", c);
    } catch (c) {
      this._debug(r, "error", c), console.error(c);
      return;
    } finally {
      this._debug(r, "end");
    }
  }
  async _callRefreshToken(a) {
    var l, r;
    if (!a) throw new Ot();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const c = `#_callRefreshToken(${a.substring(0, 5)}...)`;
    this._debug(c, "begin");
    try {
      this.refreshingDeferred = new tr();
      const { data: h, error: f } = await this._refreshAccessToken(a);
      if (f) throw f;
      if (!h.session) throw new Ot();
      await this._saveSession(h.session),
        await this._notifyAllSubscribers("TOKEN_REFRESHED", h.session);
      const m = { data: h.session, error: null };
      return this.refreshingDeferred.resolve(m), m;
    } catch (h) {
      if ((this._debug(c, "error", h), W(h))) {
        const f = { data: null, error: h };
        return (
          Co(h) || (await this._removeSession()),
          (l = this.refreshingDeferred) === null ||
            l === void 0 ||
            l.resolve(f),
          f
        );
      }
      throw (
        ((r = this.refreshingDeferred) === null || r === void 0 || r.reject(h),
        h)
      );
    } finally {
      (this.refreshingDeferred = null), this._debug(c, "end");
    }
  }
  async _notifyAllSubscribers(a, l, r = !0) {
    const c = `#_notifyAllSubscribers(${a})`;
    this._debug(c, "begin", l, `broadcast = ${r}`);
    try {
      this.broadcastChannel &&
        r &&
        this.broadcastChannel.postMessage({ event: a, session: l });
      const h = [],
        f = Array.from(this.stateChangeEmitters.values()).map(async (m) => {
          try {
            await m.callback(a, l);
          } catch (v) {
            h.push(v);
          }
        });
      if ((await Promise.all(f), h.length > 0)) {
        for (let m = 0; m < h.length; m += 1) console.error(h[m]);
        throw h[0];
      }
    } finally {
      this._debug(c, "end");
    }
  }
  async _saveSession(a) {
    this._debug("#_saveSession()", a),
      (this.suppressGetSessionWarning = !0),
      await it(this.storage, `${this.storageKey}-code-verifier`);
    const l = Object.assign({}, a),
      r = l.user && l.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !r &&
        l.user &&
        (await oi(this.userStorage, this.storageKey + "-user", {
          user: l.user,
        }));
      const c = Object.assign({}, l);
      delete c.user;
      const h = Am(c);
      await oi(this.storage, this.storageKey, h);
    } else {
      const c = Am(l);
      await oi(this.storage, this.storageKey, c);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"),
      (this.suppressGetSessionWarning = !1),
      await it(this.storage, this.storageKey),
      await it(this.storage, this.storageKey + "-code-verifier"),
      await it(this.storage, this.storageKey + "-user"),
      this.userStorage &&
        (await it(this.userStorage, this.storageKey + "-user")),
      await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const a = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      a &&
        st() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", a);
    } catch (l) {
      console.error("removing visibilitychange callback failed", l);
    }
  }
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const a = setInterval(() => this._autoRefreshTokenTick(), ui);
    (this.autoRefreshTicker = a),
      a && typeof a == "object" && typeof a.unref == "function"
        ? a.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(a);
    const l = setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
    (this.autoRefreshTickTimeout = l),
      l && typeof l == "object" && typeof l.unref == "function"
        ? l.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(l);
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const a = this.autoRefreshTicker;
    (this.autoRefreshTicker = null), a && clearInterval(a);
    const l = this.autoRefreshTickTimeout;
    (this.autoRefreshTickTimeout = null), l && clearTimeout(l);
  }
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const a = Date.now();
          try {
            return await this._useSession(async (l) => {
              const {
                data: { session: r },
              } = l;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const c = Math.floor((r.expires_at * 1e3 - a) / ui);
              this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${c} ticks, a tick lasts ${ui}ms, refresh threshold is ${$o} ticks`
              ),
                c <= $o && (await this._callRefreshToken(r.refresh_token));
            });
          } catch (l) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              l
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (a) {
      if (a.isAcquireTimeout || a instanceof eg)
        this._debug("auto refresh token tick lock not available");
      else throw a;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !st() || !(window != null && window.addEventListener))
    )
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      (this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(!1);
        } catch (a) {
          this._debug("#visibilityChangedCallback", "error", a);
        }
      }),
        window == null ||
          window.addEventListener(
            "visibilitychange",
            this.visibilityChangedCallback
          ),
        await this._onVisibilityChanged(!0);
    } catch (a) {
      console.error("_handleVisibilityChange", a);
    }
  }
  async _onVisibilityChanged(a) {
    const l = `#_onVisibilityChanged(${a})`;
    this._debug(l, "visibilityState", document.visibilityState),
      document.visibilityState === "visible"
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          a ||
            (await this.initializePromise,
            await this._acquireLock(this.lockAcquireTimeout, async () => {
              if (document.visibilityState !== "visible") {
                this._debug(
                  l,
                  "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                );
                return;
              }
              await this._recoverAndRefresh();
            })))
        : document.visibilityState === "hidden" &&
          this.autoRefreshToken &&
          this._stopAutoRefresh();
  }
  async _getUrlForProvider(a, l, r) {
    const c = [`provider=${encodeURIComponent(l)}`];
    if (
      (r != null &&
        r.redirectTo &&
        c.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
      r != null && r.scopes && c.push(`scopes=${encodeURIComponent(r.scopes)}`),
      this.flowType === "pkce")
    ) {
      const [h, f] = await ai(this.storage, this.storageKey),
        m = new URLSearchParams({
          code_challenge: `${encodeURIComponent(h)}`,
          code_challenge_method: `${encodeURIComponent(f)}`,
        });
      c.push(m.toString());
    }
    if (r != null && r.queryParams) {
      const h = new URLSearchParams(r.queryParams);
      c.push(h.toString());
    }
    return (
      r != null &&
        r.skipBrowserRedirect &&
        c.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
      `${a}?${c.join("&")}`
    );
  }
  async _unenroll(a) {
    try {
      return await this._useSession(async (l) => {
        var r;
        const { data: c, error: h } = l;
        return h
          ? this._returnResult({ data: null, error: h })
          : await ie(
              this.fetch,
              "DELETE",
              `${this.url}/factors/${a.factorId}`,
              {
                headers: this.headers,
                jwt:
                  (r = c == null ? void 0 : c.session) === null || r === void 0
                    ? void 0
                    : r.access_token,
              }
            );
      });
    } catch (l) {
      if (W(l)) return this._returnResult({ data: null, error: l });
      throw l;
    }
  }
  async _enroll(a) {
    try {
      return await this._useSession(async (l) => {
        var r, c;
        const { data: h, error: f } = l;
        if (f) return this._returnResult({ data: null, error: f });
        const m = Object.assign(
            { friendly_name: a.friendlyName, factor_type: a.factorType },
            a.factorType === "phone"
              ? { phone: a.phone }
              : a.factorType === "totp"
              ? { issuer: a.issuer }
              : {}
          ),
          { data: v, error: g } = await ie(
            this.fetch,
            "POST",
            `${this.url}/factors`,
            {
              body: m,
              headers: this.headers,
              jwt:
                (r = h == null ? void 0 : h.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            }
          );
        return g
          ? this._returnResult({ data: null, error: g })
          : (a.factorType === "totp" &&
              v.type === "totp" &&
              !((c = v == null ? void 0 : v.totp) === null || c === void 0) &&
              c.qr_code &&
              (v.totp.qr_code = `data:image/svg+xml;utf-8,${v.totp.qr_code}`),
            this._returnResult({ data: v, error: null }));
      });
    } catch (l) {
      if (W(l)) return this._returnResult({ data: null, error: l });
      throw l;
    }
  }
  async _verify(a) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (l) => {
          var r;
          const { data: c, error: h } = l;
          if (h) return this._returnResult({ data: null, error: h });
          const f = Object.assign(
              { challenge_id: a.challengeId },
              "webauthn" in a
                ? {
                    webauthn: Object.assign(Object.assign({}, a.webauthn), {
                      credential_response:
                        a.webauthn.type === "create"
                          ? ab(a.webauthn.credential_response)
                          : ib(a.webauthn.credential_response),
                    }),
                  }
                : { code: a.code }
            ),
            { data: m, error: v } = await ie(
              this.fetch,
              "POST",
              `${this.url}/factors/${a.factorId}/verify`,
              {
                body: f,
                headers: this.headers,
                jwt:
                  (r = c == null ? void 0 : c.session) === null || r === void 0
                    ? void 0
                    : r.access_token,
              }
            );
          return v
            ? this._returnResult({ data: null, error: v })
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + m.expires_in },
                  m
                )
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", m),
              this._returnResult({ data: m, error: v }));
        });
      } catch (l) {
        if (W(l)) return this._returnResult({ data: null, error: l });
        throw l;
      }
    });
  }
  async _challenge(a) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (l) => {
          var r;
          const { data: c, error: h } = l;
          if (h) return this._returnResult({ data: null, error: h });
          const f = await ie(
            this.fetch,
            "POST",
            `${this.url}/factors/${a.factorId}/challenge`,
            {
              body: a,
              headers: this.headers,
              jwt:
                (r = c == null ? void 0 : c.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            }
          );
          if (f.error) return f;
          const { data: m } = f;
          if (m.type !== "webauthn") return { data: m, error: null };
          switch (m.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, m), {
                  webauthn: Object.assign(Object.assign({}, m.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, m.webauthn.credential_options),
                      { publicKey: tb(m.webauthn.credential_options.publicKey) }
                    ),
                  }),
                }),
                error: null,
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, m), {
                  webauthn: Object.assign(Object.assign({}, m.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, m.webauthn.credential_options),
                      { publicKey: nb(m.webauthn.credential_options.publicKey) }
                    ),
                  }),
                }),
                error: null,
              };
          }
        });
      } catch (l) {
        if (W(l)) return this._returnResult({ data: null, error: l });
        throw l;
      }
    });
  }
  async _challengeAndVerify(a) {
    const { data: l, error: r } = await this._challenge({
      factorId: a.factorId,
    });
    return r
      ? this._returnResult({ data: null, error: r })
      : await this._verify({
          factorId: a.factorId,
          challengeId: l.id,
          code: a.code,
        });
  }
  async _listFactors() {
    var a;
    const {
      data: { user: l },
      error: r,
    } = await this.getUser();
    if (r) return { data: null, error: r };
    const c = { all: [], phone: [], totp: [], webauthn: [] };
    for (const h of (a = l == null ? void 0 : l.factors) !== null &&
    a !== void 0
      ? a
      : [])
      c.all.push(h), h.status === "verified" && c[h.factor_type].push(h);
    return { data: c, error: null };
  }
  async _getAuthenticatorAssuranceLevel(a) {
    var l, r, c, h;
    if (a)
      try {
        const { payload: x } = Xl(a);
        let j = null;
        x.aal && (j = x.aal);
        let L = j;
        const {
          data: { user: q },
          error: X,
        } = await this.getUser(a);
        if (X) return this._returnResult({ data: null, error: X });
        ((r =
          (l = q == null ? void 0 : q.factors) === null || l === void 0
            ? void 0
            : l.filter((ee) => ee.status === "verified")) !== null &&
        r !== void 0
          ? r
          : []
        ).length > 0 && (L = "aal2");
        const H = x.amr || [];
        return {
          data: {
            currentLevel: j,
            nextLevel: L,
            currentAuthenticationMethods: H,
          },
          error: null,
        };
      } catch (x) {
        if (W(x)) return this._returnResult({ data: null, error: x });
        throw x;
      }
    const {
      data: { session: f },
      error: m,
    } = await this.getSession();
    if (m) return this._returnResult({ data: null, error: m });
    if (!f)
      return {
        data: {
          currentLevel: null,
          nextLevel: null,
          currentAuthenticationMethods: [],
        },
        error: null,
      };
    const { payload: v } = Xl(f.access_token);
    let g = null;
    v.aal && (g = v.aal);
    let y = g;
    ((h =
      (c = f.user.factors) === null || c === void 0
        ? void 0
        : c.filter((x) => x.status === "verified")) !== null && h !== void 0
      ? h
      : []
    ).length > 0 && (y = "aal2");
    const T = v.amr || [];
    return {
      data: { currentLevel: g, nextLevel: y, currentAuthenticationMethods: T },
      error: null,
    };
  }
  async _getAuthorizationDetails(a) {
    try {
      return await this._useSession(async (l) => {
        const {
          data: { session: r },
          error: c,
        } = l;
        return c
          ? this._returnResult({ data: null, error: c })
          : r
          ? await ie(
              this.fetch,
              "GET",
              `${this.url}/oauth/authorizations/${a}`,
              {
                headers: this.headers,
                jwt: r.access_token,
                xform: (h) => ({ data: h, error: null }),
              }
            )
          : this._returnResult({ data: null, error: new Ot() });
      });
    } catch (l) {
      if (W(l)) return this._returnResult({ data: null, error: l });
      throw l;
    }
  }
  async _approveAuthorization(a, l) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: c },
          error: h,
        } = r;
        if (h) return this._returnResult({ data: null, error: h });
        if (!c) return this._returnResult({ data: null, error: new Ot() });
        const f = await ie(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${a}/consent`,
          {
            headers: this.headers,
            jwt: c.access_token,
            body: { action: "approve" },
            xform: (m) => ({ data: m, error: null }),
          }
        );
        return (
          f.data &&
            f.data.redirect_url &&
            st() &&
            !(l != null && l.skipBrowserRedirect) &&
            window.location.assign(f.data.redirect_url),
          f
        );
      });
    } catch (r) {
      if (W(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _denyAuthorization(a, l) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: c },
          error: h,
        } = r;
        if (h) return this._returnResult({ data: null, error: h });
        if (!c) return this._returnResult({ data: null, error: new Ot() });
        const f = await ie(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${a}/consent`,
          {
            headers: this.headers,
            jwt: c.access_token,
            body: { action: "deny" },
            xform: (m) => ({ data: m, error: null }),
          }
        );
        return (
          f.data &&
            f.data.redirect_url &&
            st() &&
            !(l != null && l.skipBrowserRedirect) &&
            window.location.assign(f.data.redirect_url),
          f
        );
      });
    } catch (r) {
      if (W(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (a) => {
        const {
          data: { session: l },
          error: r,
        } = a;
        return r
          ? this._returnResult({ data: null, error: r })
          : l
          ? await ie(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
              headers: this.headers,
              jwt: l.access_token,
              xform: (c) => ({ data: c, error: null }),
            })
          : this._returnResult({ data: null, error: new Ot() });
      });
    } catch (a) {
      if (W(a)) return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  async _revokeOAuthGrant(a) {
    try {
      return await this._useSession(async (l) => {
        const {
          data: { session: r },
          error: c,
        } = l;
        return c
          ? this._returnResult({ data: null, error: c })
          : r
          ? (await ie(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
              headers: this.headers,
              jwt: r.access_token,
              query: { client_id: a.clientId },
              noResolveJson: !0,
            }),
            { data: {}, error: null })
          : this._returnResult({ data: null, error: new Ot() });
      });
    } catch (l) {
      if (W(l)) return this._returnResult({ data: null, error: l });
      throw l;
    }
  }
  async fetchJwk(a, l = { keys: [] }) {
    let r = l.keys.find((m) => m.kid === a);
    if (r) return r;
    const c = Date.now();
    if (
      ((r = this.jwks.keys.find((m) => m.kid === a)),
      r && this.jwks_cached_at + dy > c)
    )
      return r;
    const { data: h, error: f } = await ie(
      this.fetch,
      "GET",
      `${this.url}/.well-known/jwks.json`,
      { headers: this.headers }
    );
    if (f) throw f;
    return !h.keys ||
      h.keys.length === 0 ||
      ((this.jwks = h),
      (this.jwks_cached_at = c),
      (r = h.keys.find((m) => m.kid === a)),
      !r)
      ? null
      : r;
  }
  async getClaims(a, l = {}) {
    try {
      let r = a;
      if (!r) {
        const { data: x, error: j } = await this.getSession();
        if (j || !x.session)
          return this._returnResult({ data: null, error: j });
        r = x.session.access_token;
      }
      const {
        header: c,
        payload: h,
        signature: f,
        raw: { header: m, payload: v },
      } = Xl(r);
      (l != null && l.allowExpired) || zy(h.exp);
      const g =
        !c.alg ||
        c.alg.startsWith("HS") ||
        !c.kid ||
        !("crypto" in globalThis && "subtle" in globalThis.crypto)
          ? null
          : await this.fetchJwk(
              c.kid,
              l != null && l.keys
                ? { keys: l.keys }
                : l == null
                ? void 0
                : l.jwks
            );
      if (!g) {
        const { error: x } = await this.getUser(r);
        if (x) throw x;
        return { data: { claims: h, header: c, signature: f }, error: null };
      }
      const y = My(c.alg),
        _ = await crypto.subtle.importKey("jwk", g, y, !0, ["verify"]);
      if (!(await crypto.subtle.verify(y, _, f, Sy(`${m}.${v}`))))
        throw new Ko("Invalid JWT signature");
      return { data: { claims: h, header: c, signature: f }, error: null };
    } catch (r) {
      if (W(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
}
bs.nextInstanceID = {};
const db = bs,
  mb = "2.101.0";
let cs = "";
typeof Deno < "u"
  ? (cs = "deno")
  : typeof document < "u"
  ? (cs = "web")
  : typeof navigator < "u" && navigator.product === "ReactNative"
  ? (cs = "react-native")
  : (cs = "node");
const gb = { "X-Client-Info": `supabase-js-${cs}/${mb}` },
  vb = { headers: gb },
  pb = { schema: "public" },
  yb = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  bb = {};
function _s(s) {
  "@babel/helpers - typeof";
  return (
    (_s =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (a) {
            return typeof a;
          }
        : function (a) {
            return a &&
              typeof Symbol == "function" &&
              a.constructor === Symbol &&
              a !== Symbol.prototype
              ? "symbol"
              : typeof a;
          }),
    _s(s)
  );
}
function _b(s, a) {
  if (_s(s) != "object" || !s) return s;
  var l = s[Symbol.toPrimitive];
  if (l !== void 0) {
    var r = l.call(s, a);
    if (_s(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(s);
}
function wb(s) {
  var a = _b(s, "string");
  return _s(a) == "symbol" ? a : a + "";
}
function Sb(s, a, l) {
  return (
    (a = wb(a)) in s
      ? Object.defineProperty(s, a, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (s[a] = l),
    s
  );
}
function Um(s, a) {
  var l = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(s);
    a &&
      (r = r.filter(function (c) {
        return Object.getOwnPropertyDescriptor(s, c).enumerable;
      })),
      l.push.apply(l, r);
  }
  return l;
}
function Le(s) {
  for (var a = 1; a < arguments.length; a++) {
    var l = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? Um(Object(l), !0).forEach(function (r) {
          Sb(s, r, l[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l))
      : Um(Object(l)).forEach(function (r) {
          Object.defineProperty(s, r, Object.getOwnPropertyDescriptor(l, r));
        });
  }
  return s;
}
const Eb = (s) => (s ? (...a) => s(...a) : (...a) => fetch(...a)),
  Tb = () => Headers,
  Ab = (s, a, l) => {
    const r = Eb(l),
      c = Tb();
    return async (h, f) => {
      var m;
      const v = (m = await a()) !== null && m !== void 0 ? m : s;
      let g = new c(f == null ? void 0 : f.headers);
      return (
        g.has("apikey") || g.set("apikey", s),
        g.has("Authorization") || g.set("Authorization", `Bearer ${v}`),
        r(h, Le(Le({}, f), {}, { headers: g }))
      );
    };
  };
function xb(s) {
  return s.endsWith("/") ? s : s + "/";
}
function Ob(s, a) {
  var l, r;
  const { db: c, auth: h, realtime: f, global: m } = s,
    { db: v, auth: g, realtime: y, global: _ } = a,
    T = {
      db: Le(Le({}, v), c),
      auth: Le(Le({}, g), h),
      realtime: Le(Le({}, y), f),
      storage: {},
      global: Le(
        Le(Le({}, _), m),
        {},
        {
          headers: Le(
            Le(
              {},
              (l = _ == null ? void 0 : _.headers) !== null && l !== void 0
                ? l
                : {}
            ),
            (r = m == null ? void 0 : m.headers) !== null && r !== void 0
              ? r
              : {}
          ),
        }
      ),
      accessToken: async () => "",
    };
  return (
    s.accessToken ? (T.accessToken = s.accessToken) : delete T.accessToken, T
  );
}
function Rb(s) {
  const a = s == null ? void 0 : s.trim();
  if (!a) throw new Error("supabaseUrl is required.");
  if (!a.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(xb(a));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var Cb = class extends db {
    constructor(s) {
      super(s);
    }
  },
  jb = class {
    constructor(s, a, l) {
      var r, c;
      (this.supabaseUrl = s), (this.supabaseKey = a);
      const h = Rb(s);
      if (!a) throw new Error("supabaseKey is required.");
      (this.realtimeUrl = new URL("realtime/v1", h)),
        (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
          "http",
          "ws"
        )),
        (this.authUrl = new URL("auth/v1", h)),
        (this.storageUrl = new URL("storage/v1", h)),
        (this.functionsUrl = new URL("functions/v1", h));
      const f = `sb-${h.hostname.split(".")[0]}-auth-token`,
        m = {
          db: pb,
          realtime: bb,
          auth: Le(Le({}, yb), {}, { storageKey: f }),
          global: vb,
        },
        v = Ob(l ?? {}, m);
      if (
        ((this.storageKey =
          (r = v.auth.storageKey) !== null && r !== void 0 ? r : ""),
        (this.headers =
          (c = v.global.headers) !== null && c !== void 0 ? c : {}),
        v.accessToken)
      )
        (this.accessToken = v.accessToken),
          (this.auth = new Proxy(
            {},
            {
              get: (y, _) => {
                throw new Error(
                  `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(
                    _
                  )} is not possible`
                );
              },
            }
          ));
      else {
        var g;
        this.auth = this._initSupabaseAuthClient(
          (g = v.auth) !== null && g !== void 0 ? g : {},
          this.headers,
          v.global.fetch
        );
      }
      (this.fetch = Ab(a, this._getAccessToken.bind(this), v.global.fetch)),
        (this.realtime = this._initRealtimeClient(
          Le(
            {
              headers: this.headers,
              accessToken: this._getAccessToken.bind(this),
            },
            v.realtime
          )
        )),
        this.accessToken &&
          Promise.resolve(this.accessToken())
            .then((y) => this.realtime.setAuth(y))
            .catch((y) =>
              console.warn("Failed to set initial Realtime auth token:", y)
            ),
        (this.rest = new Wv(new URL("rest/v1", h).href, {
          headers: this.headers,
          schema: v.db.schema,
          fetch: this.fetch,
          timeout: v.db.timeout,
          urlLengthLimit: v.db.urlLengthLimit,
        })),
        (this.storage = new uy(
          this.storageUrl.href,
          this.headers,
          this.fetch,
          l == null ? void 0 : l.storage
        )),
        v.accessToken || this._listenForAuthEvents();
    }
    get functions() {
      return new Kv(this.functionsUrl.href, {
        headers: this.headers,
        customFetch: this.fetch,
      });
    }
    from(s) {
      return this.rest.from(s);
    }
    schema(s) {
      return this.rest.schema(s);
    }
    rpc(s, a = {}, l = { head: !1, get: !1, count: void 0 }) {
      return this.rest.rpc(s, a, l);
    }
    channel(s, a = { config: {} }) {
      return this.realtime.channel(s, a);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(s) {
      return this.realtime.removeChannel(s);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
      var s = this,
        a,
        l;
      if (s.accessToken) return await s.accessToken();
      const { data: r } = await s.auth.getSession();
      return (a =
        (l = r.session) === null || l === void 0 ? void 0 : l.access_token) !==
        null && a !== void 0
        ? a
        : s.supabaseKey;
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: s,
        persistSession: a,
        detectSessionInUrl: l,
        storage: r,
        userStorage: c,
        storageKey: h,
        flowType: f,
        lock: m,
        debug: v,
        throwOnError: g,
      },
      y,
      _
    ) {
      const T = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new Cb({
        url: this.authUrl.href,
        headers: Le(Le({}, T), y),
        storageKey: h,
        autoRefreshToken: s,
        persistSession: a,
        detectSessionInUrl: l,
        storage: r,
        userStorage: c,
        flowType: f,
        lock: m,
        debug: v,
        throwOnError: g,
        fetch: _,
        hasCustomAuthorizationHeader: Object.keys(this.headers).some(
          (x) => x.toLowerCase() === "authorization"
        ),
      });
    }
    _initRealtimeClient(s) {
      return new kp(
        this.realtimeUrl.href,
        Le(
          Le({}, s),
          {},
          {
            params: Le(
              Le({}, { apikey: this.supabaseKey }),
              s == null ? void 0 : s.params
            ),
          }
        )
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((s, a) => {
        this._handleTokenChanged(
          s,
          "CLIENT",
          a == null ? void 0 : a.access_token
        );
      });
    }
    _handleTokenChanged(s, a, l) {
      (s === "TOKEN_REFRESHED" || s === "SIGNED_IN") &&
      this.changedAccessToken !== l
        ? ((this.changedAccessToken = l), this.realtime.setAuth(l))
        : s === "SIGNED_OUT" &&
          (this.realtime.setAuth(),
          a == "STORAGE" && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  };
const Nb = (s, a, l) => new jb(s, a, l);
function kb() {
  if (typeof window < "u") return !1;
  const s = globalThis.process;
  if (!s) return !1;
  const a = s.version;
  if (a == null) return !1;
  const l = a.match(/^v(\d+)\./);
  return l ? parseInt(l[1], 10) <= 18 : !1;
}
kb() &&
  console.warn(
    "⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217"
  );
const Ub = "https://udthmapvlrjneggbarli.supabase.co",
  Db =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkdGhtYXB2bHJqbmVnZ2JhcmxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4NjI3NjQsImV4cCI6MjA5MDQzODc2NH0.cFbASZg9hwInbXhq9n0AqGrSAv1aUc-LE4rlcRZk4Ys",
  Xe = Nb(Ub, Db);
function zb() {
  const [s, a] = I.useState(null),
    [l, r] = I.useState(!0),
    [c, h] = I.useState(!1);
  return (
    I.useEffect(() => {
      Xe.auth.getSession().then(({ data: { session: v } }) => {
        a(v), r(!1);
      });
      const {
        data: { subscription: m },
      } = Xe.auth.onAuthStateChange((v, g) => {
        a(g);
      });
      return () => m.unsubscribe();
    }, []),
    {
      session: s,
      loading: l,
      signOut: () => Xe.auth.signOut(),
      isPasswordResetInProgress: c,
      setIsPasswordResetInProgress: h,
    }
  );
}
function Mb({ onPasswordResetStart: s, onPasswordResetEnd: a }) {
  const [l, r] = I.useState("login"),
    [c, h] = I.useState(""),
    [f, m] = I.useState(""),
    [v, g] = I.useState(""),
    [y, _] = I.useState(""),
    [T, x] = I.useState(""),
    [j, L] = I.useState(""),
    [q, X] = I.useState(""),
    [Q, H] = I.useState(!1),
    [ee, Y] = I.useState(""),
    [F, B] = I.useState(!1),
    [ve, G] = I.useState(0),
    V = I.useRef(null);
  I.useEffect(() => {
    if (ve <= 0) {
      V.current !== null &&
        (window.clearInterval(V.current), (V.current = null));
      return;
    }
    return (
      (V.current = window.setInterval(() => {
        G((J) =>
          J <= 1
            ? (V.current !== null &&
                (window.clearInterval(V.current), (V.current = null)),
              0)
            : J - 1
        );
      }, 1e3)),
      () => {
        V.current !== null &&
          (window.clearInterval(V.current), (V.current = null));
      }
    );
  }, [ve > 0]);
  const re = () => {
      h(""), m(""), g(""), _(""), x(""), L(""), X(""), H(!1), Y("");
    },
    je = () => {
      re(), G(0), r("login");
    },
    rt = (J) => {
      re(), r(J);
    },
    Je = async () => {
      if (!c || !f) {
        Y("请填写邮箱和密码");
        return;
      }
      B(!0), Y("");
      const { error: J } = await Xe.auth.signInWithPassword({
        email: c,
        password: f,
      });
      J &&
        Y(
          J.message === "Invalid login credentials"
            ? "邮箱或密码错误"
            : J.message
        ),
        B(!1);
    },
    Qe = async () => {
      var w;
      if (!c || !f || !v || !y) {
        Y("请填写所有字段");
        return;
      }
      if (f !== v) {
        Y("两次输入的密码不一致");
        return;
      }
      if (f.length < 6) {
        Y("密码至少需要 6 个字符");
        return;
      }
      B(!0), Y("");
      const J = y.trim().toUpperCase();
      try {
        const { data: z, error: K } = await Xe.from("invitation_codes")
          .select("is_used")
          .eq("code", J)
          .maybeSingle();
        if (K) {
          Y("邀请码验证失败：" + K.message), B(!1);
          return;
        }
        if (!z || z.is_used) {
          Y("邀请码无效或已被使用"), B(!1);
          return;
        }
        const { data: P, error: oe } = await Xe.auth.signUp({
          email: c,
          password: f,
        });
        if (oe) {
          Y(
            oe.message === "User already registered"
              ? "该邮箱已被注册"
              : oe.message
          ),
            B(!1);
          return;
        }
        if (!((w = P.user) == null ? void 0 : w.id)) {
          Y("注册失败，请重试"), B(!1);
          return;
        }
        const { data: _e, error: Ze } = await Xe.rpc("redeem_invite_code", {
          code_input: J,
        });
        if (Ze) {
          Y("邀请码兑换失败：" + Ze.message), B(!1);
          return;
        }
        if (!_e) {
          Y("邀请码无效或已被使用"), B(!1);
          return;
        }
      } catch {
        Y("注册过程中出现错误，请重试");
      }
      B(!1);
    },
    k = async () => {
      if (!c) {
        Y("请填写邮箱");
        return;
      }
      B(!0), Y("");
      try {
        const { error: J } = await Xe.auth.signInWithOtp({
          email: c,
          options: { shouldCreateUser: !1 },
        });
        if (J) {
          const w = J.message.toLowerCase();
          w.includes("rate limit") || w.includes("too many")
            ? Y("发送太频繁，请稍后再试")
            : w.includes("not found") || w.includes("no user")
            ? Y("该邮箱未注册")
            : Y("发送失败: " + J.message),
            B(!1);
          return;
        }
        G(60), r("forgot-verify");
      } catch {
        Y("发送验证码时出现错误，请重试");
      }
      B(!1);
    },
    $ = async () => {
      if (!T) {
        Y("请填写验证码");
        return;
      }
      if (T.length < 6) {
        Y("请输入完整的验证码");
        return;
      }
      if (!j) {
        Y("请填写新密码");
        return;
      }
      if (j.length < 6) {
        Y("密码至少需要 6 个字符");
        return;
      }
      if (j !== q) {
        Y("两次输入的密码不一致");
        return;
      }
      B(!0), Y(""), s == null || s();
      try {
        const { error: J } = await Xe.auth.verifyOtp({
          email: c,
          token: T,
          type: "email",
        });
        if (J) {
          a == null || a();
          const z = J.message.toLowerCase();
          z.includes("expired") || z.includes("invalid")
            ? Y("验证码错误或已过期")
            : Y("验证失败: " + J.message),
            B(!1);
          return;
        }
        const { error: w } = await Xe.auth.updateUser({ password: j });
        if (w) {
          await Xe.auth.signOut(),
            a == null || a(),
            Y("验证成功，但密码更新失败，请重试"),
            r("forgot-email"),
            B(!1);
          return;
        }
        a == null || a();
      } catch {
        await Xe.auth.signOut(),
          a == null || a(),
          Y("操作过程中出现错误，请重试"),
          r("forgot-email");
      }
      B(!1);
    },
    ne = (J) => {
      J.preventDefault(),
        l === "login"
          ? Je()
          : l === "register"
          ? Qe()
          : l === "forgot-email"
          ? k()
          : l === "forgot-verify" && $();
    },
    ue =
      "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800 outline-none placeholder-slate-400";
  return S.jsxs("div", {
    className:
      "fixed inset-0 w-full h-full flex items-center justify-center overflow-hidden",
    children: [
      S.jsx("div", {
        className:
          "absolute inset-0 bg-gradient-to-b from-[#f6fafd] via-[#ecf3f9] to-[#e6eef5]",
      }),
      S.jsxs("div", {
        className: "absolute inset-0 overflow-hidden pointer-events-none",
        children: [
          S.jsx("div", {
            className:
              "absolute top-[-10%] left-[-10%] w-96 h-96 bg-sky-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse",
          }),
          S.jsx("div", {
            className:
              "absolute top-[20%] right-[-10%] w-80 h-80 bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60",
          }),
          S.jsx("div", {
            className:
              "absolute bottom-[-10%] left-[20%] w-96 h-96 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40",
          }),
        ],
      }),
      S.jsx("div", {
        className: "relative z-10 w-full max-w-sm mx-4",
        children: S.jsxs("div", {
          className:
            "bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-lg p-8",
          children: [
            S.jsxs("div", {
              className: "text-center mb-8",
              children: [
                S.jsx("h1", {
                  className: "text-2xl font-bold text-slate-700 tracking-wide",
                  children: "Echoes",
                }),
                S.jsxs("p", {
                  className: "text-sm text-slate-500 mt-1",
                  children: [
                    l === "login" && "世界仍在运转，欢迎回来",
                    l === "register" && "踏入这个世界",
                    l === "forgot-email" && "找回你的密码",
                    l === "forgot-verify" && "输入验证码与新密码",
                  ],
                }),
              ],
            }),
            (l === "login" || l === "register") &&
              S.jsxs("div", {
                className: "flex bg-white/30 rounded-2xl p-1 mb-6",
                children: [
                  S.jsx("button", {
                    type: "button",
                    className: `flex-1 py-2 text-sm font-medium rounded-xl transition-all ${
                      l === "login"
                        ? "bg-white/70 text-slate-700 shadow-sm"
                        : "text-slate-500 hover:text-slate-600"
                    }`,
                    onClick: () => rt("login"),
                    children: "登录",
                  }),
                  S.jsx("button", {
                    type: "button",
                    className: `flex-1 py-2 text-sm font-medium rounded-xl transition-all ${
                      l === "register"
                        ? "bg-white/70 text-slate-700 shadow-sm"
                        : "text-slate-500 hover:text-slate-600"
                    }`,
                    onClick: () => rt("register"),
                    children: "注册",
                  }),
                ],
              }),
            (l === "forgot-email" || l === "forgot-verify") &&
              S.jsxs("button", {
                type: "button",
                onClick:
                  l === "forgot-verify"
                    ? () => {
                        Y(""), x(""), L(""), X(""), r("forgot-email");
                      }
                    : je,
                className:
                  "flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 transition-colors mb-4",
                children: [
                  S.jsx("svg", {
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    className: "w-4 h-4",
                    children: S.jsx("path", {
                      fillRule: "evenodd",
                      d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z",
                      clipRule: "evenodd",
                    }),
                  }),
                  "返回",
                ],
              }),
            S.jsxs("form", {
              onSubmit: ne,
              className: "space-y-4",
              children: [
                l === "login" &&
                  S.jsxs(S.Fragment, {
                    children: [
                      S.jsx("input", {
                        type: "email",
                        placeholder: "邮箱",
                        value: c,
                        onChange: (J) => h(J.target.value),
                        className: ue,
                        autoComplete: "email",
                      }),
                      S.jsx("input", {
                        type: "password",
                        placeholder: "密码",
                        value: f,
                        onChange: (J) => m(J.target.value),
                        className: ue,
                        autoComplete: "current-password",
                      }),
                    ],
                  }),
                l === "register" &&
                  S.jsxs(S.Fragment, {
                    children: [
                      S.jsx("input", {
                        type: "email",
                        placeholder: "邮箱",
                        value: c,
                        onChange: (J) => h(J.target.value),
                        className: ue,
                        autoComplete: "email",
                      }),
                      S.jsx("input", {
                        type: "password",
                        placeholder: "密码",
                        value: f,
                        onChange: (J) => m(J.target.value),
                        className: ue,
                        autoComplete: "new-password",
                      }),
                      S.jsx("input", {
                        type: "password",
                        placeholder: "确认密码",
                        value: v,
                        onChange: (J) => g(J.target.value),
                        className: ue,
                        autoComplete: "new-password",
                      }),
                      S.jsxs("div", {
                        children: [
                          S.jsx("input", {
                            type: "text",
                            placeholder: "邀请码",
                            value: y,
                            onChange: (J) => _(J.target.value),
                            className: ue,
                            autoComplete: "off",
                          }),
                          S.jsx("p", {
                            className: "text-xs text-slate-400 mt-1.5 ml-1",
                            children: "购买时获取的邀请码",
                          }),
                        ],
                      }),
                    ],
                  }),
                l === "forgot-email" &&
                  S.jsxs(S.Fragment, {
                    children: [
                      S.jsx("input", {
                        type: "email",
                        placeholder: "注册时使用的邮箱",
                        value: c,
                        onChange: (J) => h(J.target.value),
                        className: ue,
                        autoComplete: "email",
                      }),
                      S.jsx("p", {
                        className: "text-xs text-slate-400 ml-1",
                        children: "我们会向这个邮箱发送验证码",
                      }),
                    ],
                  }),
                l === "forgot-verify" &&
                  S.jsxs(S.Fragment, {
                    children: [
                      S.jsxs("p", {
                        className:
                          "text-xs text-slate-500 bg-white/30 rounded-xl px-3 py-2",
                        children: [
                          "验证码已发送至 ",
                          S.jsx("span", {
                            className: "font-medium text-slate-700",
                            children: c,
                          }),
                        ],
                      }),
                      S.jsx("input", {
                        type: "text",
                        inputMode: "numeric",
                        placeholder: "邮箱验证码",
                        value: T,
                        onChange: (J) =>
                          x(J.target.value.replace(/\D/g, "").slice(0, 8)),
                        className: ue,
                        autoComplete: "one-time-code",
                        maxLength: 8,
                      }),
                      S.jsxs("div", {
                        className: "relative",
                        children: [
                          S.jsx("input", {
                            type: Q ? "text" : "password",
                            placeholder: "新密码（至少 6 位）",
                            value: j,
                            onChange: (J) => L(J.target.value),
                            className: ue,
                            autoComplete: "new-password",
                          }),
                          S.jsx("button", {
                            type: "button",
                            onClick: () => H(!Q),
                            className:
                              "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1",
                            children: Q
                              ? S.jsxs("svg", {
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  className: "w-4 h-4",
                                  children: [
                                    S.jsx("path", {
                                      fillRule: "evenodd",
                                      d: "M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.092 1.092a4 4 0 00-5.558-5.558z",
                                      clipRule: "evenodd",
                                    }),
                                    S.jsx("path", {
                                      d: "M10.748 13.93l2.523 2.523A9.987 9.987 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 014.09 5.12L6.57 7.6a4 4 0 004.178 6.33z",
                                    }),
                                  ],
                                })
                              : S.jsxs("svg", {
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  className: "w-4 h-4",
                                  children: [
                                    S.jsx("path", {
                                      d: "M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
                                    }),
                                    S.jsx("path", {
                                      fillRule: "evenodd",
                                      d: "M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
                                      clipRule: "evenodd",
                                    }),
                                  ],
                                }),
                          }),
                        ],
                      }),
                      S.jsx("input", {
                        type: Q ? "text" : "password",
                        placeholder: "确认新密码",
                        value: q,
                        onChange: (J) => X(J.target.value),
                        className: ue,
                        autoComplete: "new-password",
                      }),
                    ],
                  }),
                ee &&
                  S.jsx("p", {
                    className:
                      "text-sm text-red-500 text-center bg-red-50/50 rounded-xl py-2",
                    children: ee,
                  }),
                S.jsx("button", {
                  type: "submit",
                  disabled: F,
                  className:
                    "w-full bg-[#89b6d3] hover:bg-[#7aa8c7] disabled:opacity-50 text-white font-medium py-3 rounded-2xl transition-all shadow-sm",
                  children: F
                    ? "请稍候..."
                    : l === "login"
                    ? "登录"
                    : l === "register"
                    ? "注册"
                    : l === "forgot-email"
                    ? "发送验证码"
                    : "确认修改",
                }),
                l === "forgot-verify" &&
                  S.jsx("button", {
                    type: "button",
                    disabled: ve > 0 || F,
                    onClick: k,
                    className:
                      "w-full text-sm text-slate-500 hover:text-slate-700 disabled:text-slate-400 transition-colors py-1",
                    children: ve > 0 ? `重新发送 (${ve}s)` : "重新发送验证码",
                  }),
                l === "login" &&
                  S.jsx("button", {
                    type: "button",
                    onClick: () => {
                      Y(""), r("forgot-email");
                    },
                    className:
                      "w-full text-xs text-slate-400 hover:text-slate-600 transition-colors pt-1",
                    children: "忘记密码？",
                  }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const Lb = "Ech0#xK9$mVpL2wR",
  Dm = "admin_authenticated",
  Bb = 220;
function qb() {
  const [s, a] = I.useState(() => localStorage.getItem(Dm) === "1"),
    [l, r] = I.useState(""),
    [c, h] = I.useState(""),
    [f, m] = I.useState([]),
    [v, g] = I.useState(!1),
    [y, _] = I.useState(Bb),
    [T, x] = I.useState(!1),
    [j, L] = I.useState(""),
    [q, X] = I.useState(null),
    Q = (G) => {
      G.preventDefault(),
        l === Lb
          ? (localStorage.setItem(Dm, "1"), a(!0), h(""))
          : h("密码错误");
    },
    H = I.useCallback(async () => {
      g(!0), L("");
      try {
        const { data: G, error: V } = await Xe.rpc("admin_list_codes");
        if (V) throw V;
        m(G || []);
      } catch (G) {
        L("加载失败: " + (G.message || G));
      }
      g(!1);
    }, []);
  I.useEffect(() => {
    s && H();
  }, [s, H]);
  const ee = async () => {
      if (!(y < 1 || y > 9999)) {
        x(!0), L("");
        try {
          const { error: G } = await Xe.rpc("admin_generate_codes", {
            count: 1,
            max_uses: y,
          });
          if (G) throw G;
          await H();
        } catch (G) {
          L("生成失败: " + (G.message || G));
        }
        x(!1);
      }
    },
    Y = async (G) => {
      try {
        return await navigator.clipboard.writeText(G), !0;
      } catch {
        const V = document.createElement("textarea");
        return (
          (V.value = G),
          (V.style.cssText = "position:fixed;opacity:0"),
          document.body.appendChild(V),
          V.select(),
          document.execCommand("copy"),
          document.body.removeChild(V),
          !0
        );
      }
    },
    F = f
      .filter((G) => !G.is_used)
      .sort(
        (G, V) =>
          new Date(V.created_at).getTime() - new Date(G.created_at).getTime()
      ),
    B = f.reduce((G, V) => G + (V.current_uses || 0), 0),
    ve = f.filter((G) => !G.is_used).length;
  return s
    ? S.jsx("div", {
        className:
          "fixed inset-0 w-full h-full overflow-auto bg-gradient-to-b from-[#f6fafd] via-[#ecf3f9] to-[#e6eef5]",
        children: S.jsxs("div", {
          className: "max-w-3xl mx-auto px-4 py-8",
          children: [
            S.jsxs("div", {
              className: "flex items-center justify-between mb-6",
              children: [
                S.jsx("h1", {
                  className: "text-xl font-bold text-slate-700",
                  children: "邀请码管理",
                }),
                S.jsx("button", {
                  onClick: () => (window.location.href = "/"),
                  className:
                    "text-sm text-slate-500 hover:text-slate-700 transition-colors",
                  children: "返回首页",
                }),
              ],
            }),
            S.jsx("div", {
              className: "grid grid-cols-3 gap-3 mb-6",
              children: [
                { label: "总码数", value: f.length, color: "text-slate-700" },
                { label: "还有效", value: ve, color: "text-emerald-600" },
                { label: "累计兑换", value: B, color: "text-amber-600" },
              ].map(({ label: G, value: V, color: re }) =>
                S.jsxs(
                  "div",
                  {
                    className:
                      "bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-4 text-center shadow-sm",
                    children: [
                      S.jsx("div", {
                        className: `text-2xl font-bold ${re}`,
                        children: V,
                      }),
                      S.jsx("div", {
                        className: "text-xs text-slate-500 mt-1",
                        children: G,
                      }),
                    ],
                  },
                  G
                )
              ),
            }),
            S.jsx("div", {
              className:
                "bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-4 mb-6 shadow-sm",
              children: S.jsxs("div", {
                className: "flex gap-3 items-center flex-wrap",
                children: [
                  S.jsx("span", {
                    className: "text-sm text-slate-600",
                    children: "最多可用",
                  }),
                  S.jsx("input", {
                    type: "number",
                    min: 1,
                    max: 9999,
                    value: y,
                    onChange: (G) =>
                      _(Math.max(1, Math.min(9999, Number(G.target.value)))),
                    className:
                      "w-24 bg-white/50 border border-white/60 rounded-xl px-3 py-2 text-sm text-slate-800 outline-none focus:border-[#89b6d3] transition-all text-center",
                  }),
                  S.jsx("span", {
                    className: "text-sm text-slate-600",
                    children: "次",
                  }),
                  S.jsx("button", {
                    onClick: ee,
                    disabled: T,
                    className:
                      "ml-auto bg-[#89b6d3] hover:bg-[#7aa8c7] disabled:opacity-50 text-white text-sm font-medium px-4 py-2 rounded-xl transition-all shadow-sm",
                    children: T ? "生成中..." : "生成新码",
                  }),
                ],
              }),
            }),
            j &&
              S.jsx("p", {
                className:
                  "text-sm text-red-500 text-center bg-red-50/50 rounded-xl py-2 mb-4",
                children: j,
              }),
            S.jsx("div", {
              className: "space-y-2",
              children: v
                ? S.jsx("div", {
                    className: "p-8 text-center text-slate-400 text-sm",
                    children: "加载中...",
                  })
                : F.length === 0
                ? S.jsx("div", {
                    className: "p-8 text-center text-slate-400 text-sm",
                    children: "暂无可用邀请码",
                  })
                : F.map((G) => {
                    const V = G.max_uses || 0,
                      re = G.current_uses || 0,
                      je = V > 0 ? Math.min(100, (re / V) * 100) : 0;
                    return S.jsxs(
                      "div",
                      {
                        className:
                          "bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-4 shadow-sm transition-all",
                        children: [
                          S.jsxs("div", {
                            className:
                              "flex items-center justify-between gap-3",
                            children: [
                              S.jsx("span", {
                                className:
                                  "font-mono text-base text-slate-700 cursor-pointer active:text-[#89b6d3] transition-colors select-none",
                                onClick: async () => {
                                  await Y(G.code),
                                    X(G.id),
                                    setTimeout(() => X(null), 1500);
                                },
                                children:
                                  q === G.id
                                    ? S.jsx("span", {
                                        className: "text-emerald-500",
                                        children: "已复制!",
                                      })
                                    : G.code,
                              }),
                              S.jsxs("span", {
                                className:
                                  "text-sm font-medium tabular-nums text-slate-600",
                                children: ["已用 ", re, " / ", V],
                              }),
                            ],
                          }),
                          S.jsx("div", {
                            className:
                              "mt-2 h-1.5 bg-slate-200/40 rounded-full overflow-hidden",
                            children: S.jsx("div", {
                              className: "h-full bg-[#89b6d3] transition-all",
                              style: { width: `${je}%` },
                            }),
                          }),
                        ],
                      },
                      G.id
                    );
                  }),
            }),
          ],
        }),
      })
    : S.jsx("div", {
        className:
          "fixed inset-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-[#f6fafd] via-[#ecf3f9] to-[#e6eef5]",
        children: S.jsx("div", {
          className: "w-full max-w-xs mx-4",
          children: S.jsxs("div", {
            className:
              "bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-lg p-8",
            children: [
              S.jsx("h1", {
                className: "text-xl font-bold text-slate-700 text-center mb-6",
                children: "管理员验证",
              }),
              S.jsxs("form", {
                onSubmit: Q,
                className: "space-y-4",
                children: [
                  S.jsx("input", {
                    type: "password",
                    placeholder: "管理员密码",
                    value: l,
                    onChange: (G) => r(G.target.value),
                    className:
                      "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800 outline-none",
                    autoFocus: !0,
                  }),
                  c &&
                    S.jsx("p", {
                      className: "text-sm text-red-500 text-center",
                      children: c,
                    }),
                  S.jsx("button", {
                    type: "submit",
                    className:
                      "w-full bg-[#89b6d3] hover:bg-[#7aa8c7] text-white font-medium py-3 rounded-2xl transition-all shadow-sm",
                    children: "进入",
                  }),
                ],
              }),
            ],
          }),
        }),
      });
}
function Hb() {
  const [s, a] = I.useState(""),
    [l, r] = I.useState(!1),
    [c, h] = I.useState(""),
    [f, m] = I.useState(null),
    v = async () => {
      const _ = s.trim();
      if (!_) {
        h("请输入QQ号");
        return;
      }
      r(!0), h(""), m(null);
      try {
        const { data: T, error: x } = await Xe.from("qq_whitelist")
          .select("invitation_code, claimed")
          .eq("qq_number", _)
          .maybeSingle();
        if (x) {
          h("查询失败: " + x.message), r(!1);
          return;
        }
        if (!T) {
          h("未找到领取资格"), r(!1);
          return;
        }
        if (T.claimed) {
          m({ code: T.invitation_code, alreadyClaimed: !0 }), r(!1);
          return;
        }
        const { error: j } = await Xe.from("qq_whitelist")
          .update({ claimed: !0, claimed_at: new Date().toISOString() })
          .eq("qq_number", _);
        if (j) {
          h("领取失败: " + j.message), r(!1);
          return;
        }
        m({ code: T.invitation_code, alreadyClaimed: !1 });
      } catch {
        h("操作过程中出现错误，请重试");
      }
      r(!1);
    },
    g = (_) => {
      _.preventDefault(), v();
    };
  return S.jsxs("div", {
    className:
      "fixed inset-0 w-full h-full flex items-center justify-center overflow-hidden",
    children: [
      S.jsx("div", {
        className:
          "absolute inset-0 bg-gradient-to-b from-[#f6fafd] via-[#ecf3f9] to-[#e6eef5]",
      }),
      S.jsxs("div", {
        className: "absolute inset-0 overflow-hidden pointer-events-none",
        children: [
          S.jsx("div", {
            className:
              "absolute top-[-10%] left-[-10%] w-96 h-96 bg-sky-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse",
          }),
          S.jsx("div", {
            className:
              "absolute top-[20%] right-[-10%] w-80 h-80 bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60",
          }),
          S.jsx("div", {
            className:
              "absolute bottom-[-10%] left-[20%] w-96 h-96 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40",
          }),
        ],
      }),
      S.jsx("div", {
        className: "relative z-10 w-full max-w-sm mx-4",
        children: S.jsxs("div", {
          className:
            "bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-lg p-8",
          children: [
            S.jsxs("div", {
              className: "text-center mb-8",
              children: [
                S.jsx("h1", {
                  className: "text-2xl font-bold text-slate-700 tracking-wide",
                  children: "Echoes",
                }),
                S.jsx("p", {
                  className: "text-sm text-slate-500 mt-1",
                  children: "领取你的邀请码",
                }),
              ],
            }),
            S.jsxs("form", {
              onSubmit: g,
              className: "space-y-4",
              children: [
                S.jsx("input", {
                  type: "text",
                  placeholder: "请输入QQ号",
                  value: s,
                  onChange: (_) => a(_.target.value),
                  className:
                    "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800 outline-none placeholder-slate-400",
                  autoComplete: "off",
                  inputMode: "numeric",
                }),
                c &&
                  S.jsx("p", {
                    className:
                      "text-sm text-red-500 text-center bg-red-50/50 rounded-xl py-2",
                    children: c,
                  }),
                f &&
                  S.jsxs("div", {
                    className:
                      "text-center bg-white/50 rounded-2xl py-4 px-4 border border-white/60",
                    children: [
                      f.alreadyClaimed &&
                        S.jsx("p", {
                          className: "text-xs text-slate-400 mb-2",
                          children: "你已经领过了",
                        }),
                      S.jsx("p", {
                        className: "text-xs text-slate-500 mb-1",
                        children: "你的邀请码",
                      }),
                      S.jsx("p", {
                        className:
                          "text-lg font-bold text-[#89b6d3] tracking-widest select-all",
                        children: f.code,
                      }),
                    ],
                  }),
                !f &&
                  S.jsx("button", {
                    type: "submit",
                    disabled: l,
                    className:
                      "w-full bg-[#89b6d3] hover:bg-[#7aa8c7] disabled:opacity-50 text-white font-medium py-3 rounded-2xl transition-all shadow-sm",
                    children: l ? "请稍候..." : "领取邀请码",
                  }),
              ],
            }),
            S.jsx("div", {
              className: "text-center mt-6",
              children: S.jsx("a", {
                href: "/",
                className:
                  "text-xs text-slate-400 hover:text-slate-600 transition-colors",
                children: "返回登录",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const zm = "echoes_device_id";
function $b() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function"
    ? crypto.randomUUID()
    : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (s) => {
        const a = (Math.random() * 16) | 0;
        return (s === "x" ? a : (a & 3) | 8).toString(16);
      });
}
function ko() {
  let s = localStorage.getItem(zm);
  return s || ((s = $b()), localStorage.setItem(zm, s)), s;
}
function Gb(s) {
  const [a, l] = I.useState(!1),
    [r, c] = I.useState(!0),
    h = I.useCallback(async () => {
      const v = ko(),
        { data: g, error: y } = await Xe.rpc("register_device", {
          input_device_id: v,
        });
      return y ? (console.warn("Device register error:", y), !0) : g === !0;
    }, []);
  return (
    I.useEffect(() => {
      if (!s) {
        c(!1), l(!1);
        return;
      }
      (async () => {
        const v = await h();
        l(!v), c(!1);
      })();
    }, [s, h]),
    {
      blocked: a,
      checking: r,
      logout: async () => {
        const v = ko();
        await Xe.rpc("unregister_device", { input_device_id: v }),
          await Xe.auth.signOut();
      },
      kickOthers: async () => {
        const v = ko();
        await Xe.rpc("kick_other_devices", { input_device_id: v });
        const g = await h();
        l(!g);
      },
    }
  );
}
var Vb = qm();
const Yo = 2,
  Mm = "echoes_disclaimer_accepted";
function Kb({ readOnly: s, onAccept: a, onClose: l }) {
  const [r, c] = I.useState(!1),
    [h, f] = I.useState(!1),
    m = I.useRef(null);
  return (
    I.useEffect(() => {
      const v = m.current;
      if (!v) return;
      const g = () => {
          v.scrollHeight - v.scrollTop - v.clientHeight < 48 && f(!0);
        },
        y = requestAnimationFrame(g);
      return (
        v.addEventListener("scroll", g, { passive: !0 }),
        () => {
          cancelAnimationFrame(y), v.removeEventListener("scroll", g);
        }
      );
    }, []),
    Vb.createPortal(
      S.jsx("div", {
        className:
          "fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-slate-900/30 backdrop-blur-sm",
        children: S.jsxs("div", {
          className:
            "bg-white/80 backdrop-blur-3xl border border-white/60 shadow-2xl rounded-3xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 flex flex-col",
          style: { maxHeight: "min(88vh, 640px)" },
          onClick: (v) => v.stopPropagation(),
          children: [
            S.jsx("div", {
              className:
                "flex items-center justify-center p-4 border-b border-white/40 flex-shrink-0",
              children: S.jsx("h3", {
                className: "text-lg font-semibold text-slate-800",
                children: s ? "用户协议" : "使用Echoes前，请你读完这几段话",
              }),
            }),
            S.jsxs("div", {
              ref: m,
              className:
                "flex-1 overflow-y-auto p-5 space-y-5 text-sm leading-relaxed text-slate-700 text-justify",
              children: [
                S.jsxs("p", {
                  className: "text-slate-500 text-xs text-right",
                  children: ["协议版本：v", Yo],
                }),
                S.jsx("p", {
                  className: "indent-[2em]",
                  children:
                    "Echoes是一款由独立开发者完成的工具类软件，没有公司、没有团队、没有法务部，所以想用最直白的话跟你说清楚几件事。如果你不同意其中任何一条，请不要使用Echoes。",
                }),
                S.jsxs("div", {
                  children: [
                    S.jsx("h4", {
                      className: "font-semibold text-slate-800 mb-2",
                      children: "一、关于你和 AI 角色之间发生的一切",
                    }),
                    S.jsx("p", {
                      className: "mb-2 indent-[2em]",
                      children:
                        "Echoes本身不生成任何内容。你在 app 里看到的角色所说的每一句话，都是你自己配置的第三方 AI 服务（例如 Claude、Gemini 等）根据你自己设定的角色卡、世界书、对话历史生成的。这意味着：",
                    }),
                    S.jsxs("ul", {
                      className: "list-disc pl-5 space-y-1.5",
                      children: [
                        S.jsx("li", {
                          children:
                            "角色说了什么、写了什么、做了什么，都由你自己的 AI 服务商决定，Echoes不经手、不审核、不储存、不分发",
                        }),
                        S.jsx("li", {
                          children:
                            "你在角色扮演过程中产生的任何内容——无论主题是什么——都属于你和你的 AI 服务商之间的事，由你自行承担相应责任",
                        }),
                        S.jsx("li", {
                          children:
                            "你需要自己确认：你使用的 AI 服务商是否允许你当前的使用方式。不同服务商有不同的内容政策，请遵守它们，这不是Echoes能替你负责的事",
                        }),
                      ],
                    }),
                  ],
                }),
                S.jsxs("div", {
                  children: [
                    S.jsx("h4", {
                      className: "font-semibold text-slate-800 mb-2",
                      children: "二、关于情绪和心理",
                    }),
                    S.jsx("p", {
                      className: "mb-2 indent-[2em]",
                      children:
                        "AI 角色不是真人，也不是心理咨询师、医生或任何专业人士。长时间、高强度地与 AI 角色互动，有可能影响你的情绪状态、现实感或人际关系。我做Echoes的初心是让它成为生活的一点调剂，不是成为你生活的替代品。",
                    }),
                    S.jsxs("ul", {
                      className: "list-disc pl-5 space-y-1.5",
                      children: [
                        S.jsx("li", {
                          children:
                            "如果你正在经历心理困扰、情绪危机或任何形式的自我伤害念头，请立即寻求现实中的专业帮助（心理援助热线、精神科医生、你信任的人），不要把Echoes或其中的 AI 角色当作求助对象",
                        }),
                        S.jsx("li", {
                          children:
                            "请自己留意你与Echoes的相处边界。如果你发现自己的状态因为使用Echoes变差，请停下来，离开一段时间",
                        }),
                        S.jsx("li", {
                          children:
                            "Echoes不对因使用本软件而产生的任何情绪、心理或精神层面的影响承担责任",
                        }),
                      ],
                    }),
                  ],
                }),
                S.jsxs("div", {
                  children: [
                    S.jsx("h4", {
                      className: "font-semibold text-slate-800 mb-2",
                      children: "三、关于法律合规",
                    }),
                    S.jsx("p", {
                      className: "indent-[2em] mb-2",
                      children:
                        "Echoes是一款在中华人民共和国境内运营的软件，必须遵守中国法律法规。这一条我没办法用轻松的语气写——它就是严肃的，请你认真读完。",
                    }),
                    S.jsx("p", {
                      className: "indent-[2em] mb-2",
                      children:
                        "使用Echoes的过程中，你不得通过任何功能（包括但不限于角色扮演、世界书、对话内容、自定义设定等）产生、传播以下内容。以下列表依照《互联网信息服务管理办法》《网络信息内容生态治理规定》等法律法规原文：",
                    }),
                    S.jsxs("ul", {
                      className: "list-disc pl-5 space-y-1 mb-2",
                      children: [
                        S.jsx("li", {
                          children: "反对宪法所确定的基本原则的；",
                        }),
                        S.jsx("li", {
                          children:
                            "危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；",
                        }),
                        S.jsx("li", { children: "损害国家荣誉和利益的；" }),
                        S.jsx("li", {
                          children: "煽动民族仇恨、民族歧视，破坏民族团结的；",
                        }),
                        S.jsx("li", {
                          children: "破坏国家宗教政策，宣扬邪教和封建迷信的；",
                        }),
                        S.jsx("li", {
                          children: "散布谣言，扰乱社会秩序，破坏社会稳定的；",
                        }),
                        S.jsx("li", {
                          children:
                            "散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；",
                        }),
                        S.jsx("li", {
                          children: "侮辱或者诽谤他人，侵害他人合法权益的；",
                        }),
                        S.jsx("li", {
                          children: "含有法律、行政法规禁止的其他内容的。",
                        }),
                      ],
                    }),
                    S.jsx("p", {
                      className: "indent-[2em] mb-2",
                      children:
                        "你在Echoes内通过任何方式产生的一切内容，均由你本人承担全部法律责任。Echoes作为工具提供方，不经手、不审核、不储存、不分发任何用户生成的对话内容。",
                    }),
                    S.jsx("p", {
                      className: "indent-[2em]",
                      children:
                        "如发现有人利用Echoes从事违法犯罪活动，Echoes将依法配合相关部门处理。",
                    }),
                  ],
                }),
                S.jsxs("div", {
                  children: [
                    S.jsx("h4", {
                      className: "font-semibold text-slate-800 mb-2",
                      children: "四、一些前提",
                    }),
                    S.jsx("p", {
                      className: "indent-[2em]",
                      children:
                        '使用Echoes意味着你已年满 18 周岁（或你所在地区的法定成年年龄），具备完全民事行为能力，能够对自己的行为和选择负责。Echoes按"现状"提供，我会尽力维护，但不承诺无 bug、不承诺永久运营、不承诺任何服务水平。',
                    }),
                  ],
                }),
                !s &&
                  S.jsx("p", {
                    className: "text-slate-500 text-xs",
                    children:
                      '点击"我已阅读并同意"即表示你理解并接受以上全部内容。',
                  }),
              ],
            }),
            S.jsx("div", {
              className: "flex-shrink-0 border-t border-white/40 p-4 space-y-3",
              children: s
                ? S.jsx("button", {
                    onClick: l,
                    className:
                      "w-full py-3 rounded-2xl font-medium text-white bg-[#89b6d3] hover:bg-[#7aa8c7] transition-all shadow-sm",
                    children: "关闭",
                  })
                : S.jsxs(S.Fragment, {
                    children: [
                      S.jsxs("label", {
                        className:
                          "flex items-start gap-2.5 cursor-pointer select-none",
                        children: [
                          S.jsx("input", {
                            type: "checkbox",
                            checked: r,
                            onChange: (v) => c(v.target.checked),
                            className:
                              "mt-0.5 w-4 h-4 rounded border-slate-300 text-[#89b6d3] focus:ring-[#89b6d3] accent-[#89b6d3] flex-shrink-0",
                          }),
                          S.jsx("span", {
                            className: "text-xs text-slate-600 leading-relaxed",
                            children:
                              "我已完整阅读以上内容，理解并同意全部条款",
                          }),
                        ],
                      }),
                      S.jsx("button", {
                        disabled: !r || !h,
                        onClick: a,
                        className: `w-full py-3 rounded-2xl font-medium transition-all shadow-sm ${
                          r && h
                            ? "text-white bg-[#89b6d3] hover:bg-[#7aa8c7] active:scale-[0.98]"
                            : "text-slate-400 bg-slate-100/60 cursor-not-allowed"
                        }`,
                        children: "我已阅读并同意",
                      }),
                      !h &&
                        S.jsx("p", {
                          className: "text-center text-xs text-slate-400",
                          children: "请先阅读完全部内容",
                        }),
                    ],
                  }),
            }),
          ],
        }),
      }),
      document.body
    )
  );
}
const Yb = I.lazy(() =>
    Bm(() => import("./HeavyApp-C6kf1gXd.js"), __vite__mapDeps([0, 1]))
  ),
  Xb = 5200,
  Jb = 12e3,
  Qb = 900;
function Ib({ onLogout: s, onKickOthers: a }) {
  const [l, r] = I.useState(!1);
  return S.jsx("div", {
    className:
      "fixed inset-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-[#f6fafd] via-[#ecf3f9] to-[#e6eef5]",
    children: S.jsx("div", {
      className: "w-full max-w-sm mx-4",
      children: S.jsxs("div", {
        className:
          "bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-lg p-8 text-center",
        children: [
          S.jsx("div", { className: "text-4xl mb-4", children: "🔒" }),
          S.jsx("h2", {
            className: "text-lg font-bold text-slate-700 mb-2",
            children: "设备数量已达上限",
          }),
          S.jsx("p", {
            className: "text-sm text-slate-500 mb-6",
            children: "当前账号最多同时在 2 个设备上使用。",
          }),
          S.jsx("button", {
            onClick: async () => {
              r(!0), await a(), r(!1);
            },
            disabled: l,
            className:
              "w-full bg-[#89b6d3] hover:bg-[#7aa8c7] disabled:opacity-50 text-white font-medium py-3 rounded-2xl transition-all shadow-sm mb-3",
            children: l ? "正在处理..." : "登录此设备，踢掉其他设备",
          }),
          S.jsx("button", {
            onClick: s,
            className:
              "w-full bg-white/60 hover:bg-white/80 text-slate-600 font-medium py-3 rounded-2xl transition-all shadow-sm border border-white/60",
            children: "退出登录",
          }),
        ],
      }),
    }),
  });
}
function Zb() {
  const {
      session: s,
      loading: a,
      isPasswordResetInProgress: l,
      setIsPasswordResetInProgress: r,
    } = zb(),
    { blocked: c, checking: h, logout: f, kickOthers: m } = Gb(!!s),
    [v, g] = I.useState(!1),
    [y, _] = I.useState(!1),
    [T, x] = I.useState(!0),
    [j, L] = I.useState(!1),
    [q, X] = I.useState(!1),
    [Q, H] = I.useState(!1),
    [ee, Y] = I.useState(!1),
    F = I.useRef(null),
    [B, ve] = I.useState(() => {
      try {
        const re = localStorage.getItem(Mm);
        return re ? JSON.parse(re).version >= Yo : !1;
      } catch {
        return !1;
      }
    }),
    G = I.useCallback(() => {
      ve(!0);
      try {
        localStorage.setItem(
          Mm,
          JSON.stringify({ version: Yo, timestamp: new Date().toISOString() })
        );
      } catch (re) {
        console.error("Failed to persist disclaimer acceptance:", re);
      }
    }, []);
  I.useEffect(() => {
    const re = window.setTimeout(() => g(!0), Xb),
      je = window.setTimeout(() => Y(!0), Jb);
    return () => {
      window.clearTimeout(re), window.clearTimeout(je);
    };
  }, []),
    I.useEffect(() => {
      !(((q && Q) || ee || j) && (v || j)) ||
        !T ||
        F.current !== null ||
        (_(!0),
        (F.current = window.setTimeout(() => {
          x(!1), (F.current = null);
        }, Qb)));
    }, [q, Q, v, ee, j, T]),
    I.useEffect(
      () => () => {
        F.current !== null && window.clearTimeout(F.current);
      },
      []
    ),
    I.useEffect(() => {
      q &&
        Bm(() => import("./App-CYgIjxWH.js").then((re) => re.a_), [])
          .then((re) => re.preloadAllApps())
          .catch(() => {})
          .finally(() => H(!0));
    }, [q]);
  const V = I.useCallback(() => X(!0), []);
  return a || (s && h)
    ? S.jsx("div", { className: "w-full h-screen" })
    : !s || l
    ? S.jsx("div", {
        className: "h-screen w-full bg-[#e6eef5] overflow-hidden",
        children: S.jsx(Mb, {
          onPasswordResetStart: () => r(!0),
          onPasswordResetEnd: () => r(!1),
        }),
      })
    : c
    ? S.jsx("div", {
        className: "h-screen w-full bg-[#e6eef5] overflow-hidden",
        children: S.jsx(Ib, { onLogout: f, onKickOthers: m }),
      })
    : B
    ? S.jsxs("div", {
        className: "relative w-full overflow-hidden",
        style: { height: "var(--echoes-app-height, 100vh)" },
        children: [
          S.jsx(Hv, {
            children: S.jsx(I.Suspense, {
              fallback: null,
              children: S.jsx(Yb, { onReady: V }),
            }),
          }),
          T &&
            S.jsx(qv, { isExiting: y, skipRequested: j, onSkip: () => L(!0) }),
        ],
      })
    : S.jsx("div", {
        className:
          "h-screen w-full bg-gradient-to-b from-[#f6fafd] via-[#ecf3f9] to-[#e6eef5] overflow-hidden",
        children: S.jsx(Kb, { onAccept: G }),
      });
}
"serviceWorker" in navigator &&
  window.addEventListener("load", () => {
    {
      navigator.serviceWorker.register("/service-worker.js").catch((s) => {
        console.error("Service worker registration failed:", s);
      });
      return;
    }
  });
const Lm = window.location.pathname,
  Pb = document.getElementById("root"),
  Wb = Bv.createRoot(Pb);
Wb.render(
  S.jsx(I.StrictMode, {
    children:
      Lm === "/admin"
        ? S.jsx(qb, {})
        : Lm === "/claim"
        ? S.jsx(Hb, {})
        : S.jsx(Zb, {}),
  })
);
export {
  Kb as D,
  Hv as E,
  kv as R,
  Bm as _,
  Vb as a,
  Fb as c,
  Rv as g,
  S as j,
  I as r,
  Xe as s,
};
