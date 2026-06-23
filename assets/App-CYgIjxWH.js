const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/gemini-CeriFUnH.js",
      "assets/giftFulfillment-DLU8FseI.js",
      "assets/initialShopItems-Bgx56oyu.js",
      "assets/worldBookScopes-B0JaUaci.js",
      "assets/llmFetch-C_SjUca9.js",
      "assets/Chat-X5X-fzy_.js",
      "assets/index-C41onZB-.js",
      "assets/index-DroFg7y3.css",
      "assets/Modal-BhAOmQIi.js",
      "assets/buttonStyles-CgOYb1KY.js",
      "assets/send-DYTL5zGj.js",
      "assets/circle-alert-JwRkSIRb.js",
      "assets/sparkles-CGxZnICD.js",
      "assets/ImageUpload-Cp3tPAar.js",
      "assets/camera-D3fQhOQq.js",
      "assets/chevron-left-CTqCLzU8.js",
      "assets/star-CVoNwJVA.js",
      "assets/upload-Dz6P4EmD.js",
      "assets/circle-DP2uW7NY.js",
      "assets/pen-DzfzbAck.js",
      "assets/link-C5imY-0s.js",
      "assets/users-CICUzMdL.js",
      "assets/ApiErrorCard-DsY_S22O.js",
      "assets/map-pin-B1_DHgxu.js",
      "assets/message-circle-5JY3SDfG.js",
      "assets/pen-line-CUqsZ-P8.js",
      "assets/image-D7XnZ771.js",
      "assets/loader-circle-CcTwnOUB.js",
      "assets/phone-EsLVfVip.js",
      "assets/search-BLOZ0mEQ.js",
      "assets/scheduleGeneration-S9n8Pthk.js",
      "assets/wallet-C4f3BB2q.js",
      "assets/shop-C5PTfq-d.js",
      "assets/zap-CKIKz9eO.js",
      "assets/arrow-down-CROGvue2.js",
      "assets/mic-CMVV7_eD.js",
      "assets/rotate-ccw-CbYjPK1x.js",
      "assets/refresh-cw-BoDq0Pnx.js",
      "assets/footprints-dK-79cS6.js",
      "assets/feather-D63I_6EC.js",
      "assets/gift-BS6_2u8f.js",
      "assets/smartphone-0twgdLJZ.js",
      "assets/coffee-z5kKF3o0.js",
      "assets/cloud-CpRFALJq.js",
      "assets/hash-g_y78lcq.js",
      "assets/user-CxsAAqKP.js",
      "assets/WorldCalendarApp-DgUFi9kD.js",
      "assets/chevron-right-C_PIujnZ.js",
      "assets/Echoes-CxQLSAz_.js",
      "assets/layers-BRay5e2J.js",
      "assets/chevron-down-DsGpUXIv.js",
      "assets/triangle-alert-Bl8c-dcA.js",
      "assets/tag-Ka5DFHdS.js",
      "assets/Profiling-JSKR4abO.js",
      "assets/package-Dm7dxqWi.js",
      "assets/wallet-BLjGLXEn.js",
      "assets/clock-3-DKm-BOJs.js",
      "assets/eye-CAZ7QyaF.js",
      "assets/Character-BDzCkfQ2.js",
      "assets/types-wPl3FSgV.js",
      "assets/AppearanceReferenceUpload-Bzzwgotg.js",
      "assets/bio-D6j723LQ.js",
      "assets/chevron-up-B8HwjlFZ.js",
      "assets/Settings-DNhTq7Z2.js",
      "assets/globe-DcmCTt9a.js",
      "assets/UserApp-BpCTmY2q.js",
      "assets/WorldBook-DgkrrA4e.js",
      "assets/MapApp--YSFlXlR.js",
      "assets/ScheduleApp-BgOrY3JT.js",
      "assets/Reflection-D9QOCor8.js",
      "assets/arrow-up-BaJqBU9m.js",
      "assets/Diary-DEMA_Dma.js",
      "assets/proxy-DMomAik7.js",
      "assets/Forum-C_fDD3SN.js",
      "assets/WalletApp-2UJgi5oc.js",
      "assets/shopping-bag-D0B9U0yV.js",
      "assets/ShopApp-POBeg4sg.js",
      "assets/FloatingLife-BNHeNmvP.js",
      "assets/BaiXiang-D-iAk7rC.js",
      "assets/flame-FM_iMr0c.js",
      "assets/WardrobeApp-BgZmlVfr.js",
      "assets/HouseApp-CG1EYA-M.js",
      "assets/TimeslotApp-BjFk3O2e.js",
    ])
) => i.map((i) => d[i]);
import {
  c as mn,
  g as So,
  _ as ot,
  r as P,
  R as $i,
  j as g,
  a as Ic,
  E as Ec,
} from "./index-C41onZB-.js";
function Cc(e, r) {
  for (var t = 0; t < r.length; t++) {
    const a = r[t];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const i in a)
        if (i !== "default" && !(i in e)) {
          const n = Object.getOwnPropertyDescriptor(a, i);
          n &&
            Object.defineProperty(
              e,
              i,
              n.get ? n : { enumerable: !0, get: () => a[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
function cn(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var Xa = { exports: {} };
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/ var pi;
function Ac() {
  return (
    pi ||
      ((pi = 1),
      (function (e, r) {
        (function (t) {
          e.exports = t();
        })(function () {
          return (function t(a, i, n) {
            function d(v, x) {
              if (!i[v]) {
                if (!a[v]) {
                  var s = typeof cn == "function" && cn;
                  if (!x && s) return s(v, !0);
                  if (l) return l(v, !0);
                  var b = new Error("Cannot find module '" + v + "'");
                  throw ((b.code = "MODULE_NOT_FOUND"), b);
                }
                var f = (i[v] = { exports: {} });
                a[v][0].call(
                  f.exports,
                  function (S) {
                    var c = a[v][1][S];
                    return d(c || S);
                  },
                  f,
                  f.exports,
                  t,
                  a,
                  i,
                  n
                );
              }
              return i[v].exports;
            }
            for (
              var l = typeof cn == "function" && cn, p = 0;
              p < n.length;
              p++
            )
              d(n[p]);
            return d;
          })(
            {
              1: [
                function (t, a, i) {
                  (function (n) {
                    var d = n.MutationObserver || n.WebKitMutationObserver,
                      l;
                    if (d) {
                      var p = 0,
                        v = new d(S),
                        x = n.document.createTextNode("");
                      v.observe(x, { characterData: !0 }),
                        (l = function () {
                          x.data = p = ++p % 2;
                        });
                    } else if (
                      !n.setImmediate &&
                      typeof n.MessageChannel < "u"
                    ) {
                      var s = new n.MessageChannel();
                      (s.port1.onmessage = S),
                        (l = function () {
                          s.port2.postMessage(0);
                        });
                    } else
                      "document" in n &&
                      "onreadystatechange" in n.document.createElement("script")
                        ? (l = function () {
                            var h = n.document.createElement("script");
                            (h.onreadystatechange = function () {
                              S(),
                                (h.onreadystatechange = null),
                                h.parentNode.removeChild(h),
                                (h = null);
                            }),
                              n.document.documentElement.appendChild(h);
                          })
                        : (l = function () {
                            setTimeout(S, 0);
                          });
                    var b,
                      f = [];
                    function S() {
                      b = !0;
                      for (var h, o, u = f.length; u; ) {
                        for (o = f, f = [], h = -1; ++h < u; ) o[h]();
                        u = f.length;
                      }
                      b = !1;
                    }
                    a.exports = c;
                    function c(h) {
                      f.push(h) === 1 && !b && l();
                    }
                  }.call(
                    this,
                    typeof mn < "u"
                      ? mn
                      : typeof self < "u"
                      ? self
                      : typeof window < "u"
                      ? window
                      : {}
                  ));
                },
                {},
              ],
              2: [
                function (t, a, i) {
                  var n = t(1);
                  function d() {}
                  var l = {},
                    p = ["REJECTED"],
                    v = ["FULFILLED"],
                    x = ["PENDING"];
                  a.exports = s;
                  function s(y) {
                    if (typeof y != "function")
                      throw new TypeError("resolver must be a function");
                    (this.state = x),
                      (this.queue = []),
                      (this.outcome = void 0),
                      y !== d && c(this, y);
                  }
                  (s.prototype.catch = function (y) {
                    return this.then(null, y);
                  }),
                    (s.prototype.then = function (y, T) {
                      if (
                        (typeof y != "function" && this.state === v) ||
                        (typeof T != "function" && this.state === p)
                      )
                        return this;
                      var I = new this.constructor(d);
                      if (this.state !== x) {
                        var M = this.state === v ? y : T;
                        f(I, M, this.outcome);
                      } else this.queue.push(new b(I, y, T));
                      return I;
                    });
                  function b(y, T, I) {
                    (this.promise = y),
                      typeof T == "function" &&
                        ((this.onFulfilled = T),
                        (this.callFulfilled = this.otherCallFulfilled)),
                      typeof I == "function" &&
                        ((this.onRejected = I),
                        (this.callRejected = this.otherCallRejected));
                  }
                  (b.prototype.callFulfilled = function (y) {
                    l.resolve(this.promise, y);
                  }),
                    (b.prototype.otherCallFulfilled = function (y) {
                      f(this.promise, this.onFulfilled, y);
                    }),
                    (b.prototype.callRejected = function (y) {
                      l.reject(this.promise, y);
                    }),
                    (b.prototype.otherCallRejected = function (y) {
                      f(this.promise, this.onRejected, y);
                    });
                  function f(y, T, I) {
                    n(function () {
                      var M;
                      try {
                        M = T(I);
                      } catch (O) {
                        return l.reject(y, O);
                      }
                      M === y
                        ? l.reject(
                            y,
                            new TypeError("Cannot resolve promise with itself")
                          )
                        : l.resolve(y, M);
                    });
                  }
                  (l.resolve = function (y, T) {
                    var I = h(S, T);
                    if (I.status === "error") return l.reject(y, I.value);
                    var M = I.value;
                    if (M) c(y, M);
                    else {
                      (y.state = v), (y.outcome = T);
                      for (var O = -1, U = y.queue.length; ++O < U; )
                        y.queue[O].callFulfilled(T);
                    }
                    return y;
                  }),
                    (l.reject = function (y, T) {
                      (y.state = p), (y.outcome = T);
                      for (var I = -1, M = y.queue.length; ++I < M; )
                        y.queue[I].callRejected(T);
                      return y;
                    });
                  function S(y) {
                    var T = y && y.then;
                    if (
                      y &&
                      (typeof y == "object" || typeof y == "function") &&
                      typeof T == "function"
                    )
                      return function () {
                        T.apply(y, arguments);
                      };
                  }
                  function c(y, T) {
                    var I = !1;
                    function M(C) {
                      I || ((I = !0), l.reject(y, C));
                    }
                    function O(C) {
                      I || ((I = !0), l.resolve(y, C));
                    }
                    function U() {
                      T(O, M);
                    }
                    var J = h(U);
                    J.status === "error" && M(J.value);
                  }
                  function h(y, T) {
                    var I = {};
                    try {
                      (I.value = y(T)), (I.status = "success");
                    } catch (M) {
                      (I.status = "error"), (I.value = M);
                    }
                    return I;
                  }
                  s.resolve = o;
                  function o(y) {
                    return y instanceof this ? y : l.resolve(new this(d), y);
                  }
                  s.reject = u;
                  function u(y) {
                    var T = new this(d);
                    return l.reject(T, y);
                  }
                  s.all = _;
                  function _(y) {
                    var T = this;
                    if (Object.prototype.toString.call(y) !== "[object Array]")
                      return this.reject(new TypeError("must be an array"));
                    var I = y.length,
                      M = !1;
                    if (!I) return this.resolve([]);
                    for (
                      var O = new Array(I), U = 0, J = -1, C = new this(d);
                      ++J < I;

                    )
                      D(y[J], J);
                    return C;
                    function D(k, V) {
                      T.resolve(k).then(ee, function (Z) {
                        M || ((M = !0), l.reject(C, Z));
                      });
                      function ee(Z) {
                        (O[V] = Z),
                          ++U === I && !M && ((M = !0), l.resolve(C, O));
                      }
                    }
                  }
                  s.race = w;
                  function w(y) {
                    var T = this;
                    if (Object.prototype.toString.call(y) !== "[object Array]")
                      return this.reject(new TypeError("must be an array"));
                    var I = y.length,
                      M = !1;
                    if (!I) return this.resolve([]);
                    for (var O = -1, U = new this(d); ++O < I; ) J(y[O]);
                    return U;
                    function J(C) {
                      T.resolve(C).then(
                        function (D) {
                          M || ((M = !0), l.resolve(U, D));
                        },
                        function (D) {
                          M || ((M = !0), l.reject(U, D));
                        }
                      );
                    }
                  }
                },
                { 1: 1 },
              ],
              3: [
                function (t, a, i) {
                  (function (n) {
                    typeof n.Promise != "function" && (n.Promise = t(2));
                  }.call(
                    this,
                    typeof mn < "u"
                      ? mn
                      : typeof self < "u"
                      ? self
                      : typeof window < "u"
                      ? window
                      : {}
                  ));
                },
                { 2: 2 },
              ],
              4: [
                function (t, a, i) {
                  var n =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (E) {
                          return typeof E;
                        }
                      : function (E) {
                          return E &&
                            typeof Symbol == "function" &&
                            E.constructor === Symbol &&
                            E !== Symbol.prototype
                            ? "symbol"
                            : typeof E;
                        };
                  function d(E, L) {
                    if (!(E instanceof L))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  function l() {
                    try {
                      if (typeof indexedDB < "u") return indexedDB;
                      if (typeof webkitIndexedDB < "u") return webkitIndexedDB;
                      if (typeof mozIndexedDB < "u") return mozIndexedDB;
                      if (typeof OIndexedDB < "u") return OIndexedDB;
                      if (typeof msIndexedDB < "u") return msIndexedDB;
                    } catch {
                      return;
                    }
                  }
                  var p = l();
                  function v() {
                    try {
                      if (!p || !p.open) return !1;
                      var E =
                          typeof openDatabase < "u" &&
                          /(Safari|iPhone|iPad|iPod)/.test(
                            navigator.userAgent
                          ) &&
                          !/Chrome/.test(navigator.userAgent) &&
                          !/BlackBerry/.test(navigator.platform),
                        L =
                          typeof fetch == "function" &&
                          fetch.toString().indexOf("[native code") !== -1;
                      return (
                        (!E || L) &&
                        typeof indexedDB < "u" &&
                        typeof IDBKeyRange < "u"
                      );
                    } catch {
                      return !1;
                    }
                  }
                  function x(E, L) {
                    (E = E || []), (L = L || {});
                    try {
                      return new Blob(E, L);
                    } catch (F) {
                      if (F.name !== "TypeError") throw F;
                      for (
                        var j =
                            typeof BlobBuilder < "u"
                              ? BlobBuilder
                              : typeof MSBlobBuilder < "u"
                              ? MSBlobBuilder
                              : typeof MozBlobBuilder < "u"
                              ? MozBlobBuilder
                              : WebKitBlobBuilder,
                          $ = new j(),
                          K = 0;
                        K < E.length;
                        K += 1
                      )
                        $.append(E[K]);
                      return $.getBlob(L.type);
                    }
                  }
                  typeof Promise > "u" && t(3);
                  var s = Promise;
                  function b(E, L) {
                    L &&
                      E.then(
                        function (j) {
                          L(null, j);
                        },
                        function (j) {
                          L(j);
                        }
                      );
                  }
                  function f(E, L, j) {
                    typeof L == "function" && E.then(L),
                      typeof j == "function" && E.catch(j);
                  }
                  function S(E) {
                    return (
                      typeof E != "string" &&
                        (console.warn(
                          E + " used as a key, but it is not a string."
                        ),
                        (E = String(E))),
                      E
                    );
                  }
                  function c() {
                    if (
                      arguments.length &&
                      typeof arguments[arguments.length - 1] == "function"
                    )
                      return arguments[arguments.length - 1];
                  }
                  var h = "local-forage-detect-blob-support",
                    o = void 0,
                    u = {},
                    _ = Object.prototype.toString,
                    w = "readonly",
                    y = "readwrite";
                  function T(E) {
                    for (
                      var L = E.length,
                        j = new ArrayBuffer(L),
                        $ = new Uint8Array(j),
                        K = 0;
                      K < L;
                      K++
                    )
                      $[K] = E.charCodeAt(K);
                    return j;
                  }
                  function I(E) {
                    return new s(function (L) {
                      var j = E.transaction(h, y),
                        $ = x([""]);
                      j.objectStore(h).put($, "key"),
                        (j.onabort = function (K) {
                          K.preventDefault(), K.stopPropagation(), L(!1);
                        }),
                        (j.oncomplete = function () {
                          var K = navigator.userAgent.match(/Chrome\/(\d+)/),
                            F = navigator.userAgent.match(/Edge\//);
                          L(F || !K || parseInt(K[1], 10) >= 43);
                        });
                    }).catch(function () {
                      return !1;
                    });
                  }
                  function M(E) {
                    return typeof o == "boolean"
                      ? s.resolve(o)
                      : I(E).then(function (L) {
                          return (o = L), o;
                        });
                  }
                  function O(E) {
                    var L = u[E.name],
                      j = {};
                    (j.promise = new s(function ($, K) {
                      (j.resolve = $), (j.reject = K);
                    })),
                      L.deferredOperations.push(j),
                      L.dbReady
                        ? (L.dbReady = L.dbReady.then(function () {
                            return j.promise;
                          }))
                        : (L.dbReady = j.promise);
                  }
                  function U(E) {
                    var L = u[E.name],
                      j = L.deferredOperations.pop();
                    if (j) return j.resolve(), j.promise;
                  }
                  function J(E, L) {
                    var j = u[E.name],
                      $ = j.deferredOperations.pop();
                    if ($) return $.reject(L), $.promise;
                  }
                  function C(E, L) {
                    return new s(function (j, $) {
                      if (((u[E.name] = u[E.name] || H()), E.db))
                        if (L) O(E), E.db.close();
                        else return j(E.db);
                      var K = [E.name];
                      L && K.push(E.version);
                      var F = p.open.apply(p, K);
                      L &&
                        (F.onupgradeneeded = function (oe) {
                          var le = F.result;
                          try {
                            le.createObjectStore(E.storeName),
                              oe.oldVersion <= 1 && le.createObjectStore(h);
                          } catch (pe) {
                            if (pe.name === "ConstraintError")
                              console.warn(
                                'The database "' +
                                  E.name +
                                  '" has been upgraded from version ' +
                                  oe.oldVersion +
                                  " to version " +
                                  oe.newVersion +
                                  ', but the storage "' +
                                  E.storeName +
                                  '" already exists.'
                              );
                            else throw pe;
                          }
                        }),
                        (F.onerror = function (oe) {
                          oe.preventDefault(), $(F.error);
                        }),
                        (F.onsuccess = function () {
                          var oe = F.result;
                          (oe.onversionchange = function (le) {
                            le.target.close();
                          }),
                            j(oe),
                            U(E);
                        });
                    });
                  }
                  function D(E) {
                    return C(E, !1);
                  }
                  function k(E) {
                    return C(E, !0);
                  }
                  function V(E, L) {
                    if (!E.db) return !0;
                    var j = !E.db.objectStoreNames.contains(E.storeName),
                      $ = E.version < E.db.version,
                      K = E.version > E.db.version;
                    if (
                      ($ &&
                        (E.version !== L &&
                          console.warn(
                            'The database "' +
                              E.name +
                              `" can't be downgraded from version ` +
                              E.db.version +
                              " to version " +
                              E.version +
                              "."
                          ),
                        (E.version = E.db.version)),
                      K || j)
                    ) {
                      if (j) {
                        var F = E.db.version + 1;
                        F > E.version && (E.version = F);
                      }
                      return !0;
                    }
                    return !1;
                  }
                  function ee(E) {
                    return new s(function (L, j) {
                      var $ = new FileReader();
                      ($.onerror = j),
                        ($.onloadend = function (K) {
                          var F = btoa(K.target.result || "");
                          L({
                            __local_forage_encoded_blob: !0,
                            data: F,
                            type: E.type,
                          });
                        }),
                        $.readAsBinaryString(E);
                    });
                  }
                  function Z(E) {
                    var L = T(atob(E.data));
                    return x([L], { type: E.type });
                  }
                  function ve(E) {
                    return E && E.__local_forage_encoded_blob;
                  }
                  function Q(E) {
                    var L = this,
                      j = L._initReady().then(function () {
                        var $ = u[L._dbInfo.name];
                        if ($ && $.dbReady) return $.dbReady;
                      });
                    return f(j, E, E), j;
                  }
                  function ce(E) {
                    O(E);
                    for (
                      var L = u[E.name], j = L.forages, $ = 0;
                      $ < j.length;
                      $++
                    ) {
                      var K = j[$];
                      K._dbInfo.db &&
                        (K._dbInfo.db.close(), (K._dbInfo.db = null));
                    }
                    return (
                      (E.db = null),
                      D(E)
                        .then(function (F) {
                          return (E.db = F), V(E) ? k(E) : F;
                        })
                        .then(function (F) {
                          E.db = L.db = F;
                          for (var oe = 0; oe < j.length; oe++)
                            j[oe]._dbInfo.db = F;
                        })
                        .catch(function (F) {
                          throw (J(E, F), F);
                        })
                    );
                  }
                  function B(E, L, j, $) {
                    $ === void 0 && ($ = 1);
                    try {
                      var K = E.db.transaction(E.storeName, L);
                      j(null, K);
                    } catch (F) {
                      if (
                        $ > 0 &&
                        (!E.db ||
                          F.name === "InvalidStateError" ||
                          F.name === "NotFoundError")
                      )
                        return s
                          .resolve()
                          .then(function () {
                            if (
                              !E.db ||
                              (F.name === "NotFoundError" &&
                                !E.db.objectStoreNames.contains(E.storeName) &&
                                E.version <= E.db.version)
                            )
                              return (
                                E.db && (E.version = E.db.version + 1), k(E)
                              );
                          })
                          .then(function () {
                            return ce(E).then(function () {
                              B(E, L, j, $ - 1);
                            });
                          })
                          .catch(j);
                      j(F);
                    }
                  }
                  function H() {
                    return {
                      forages: [],
                      db: null,
                      dbReady: null,
                      deferredOperations: [],
                    };
                  }
                  function Ee(E) {
                    var L = this,
                      j = { db: null };
                    if (E) for (var $ in E) j[$] = E[$];
                    var K = u[j.name];
                    K || ((K = H()), (u[j.name] = K)),
                      K.forages.push(L),
                      L._initReady || ((L._initReady = L.ready), (L.ready = Q));
                    var F = [];
                    function oe() {
                      return s.resolve();
                    }
                    for (var le = 0; le < K.forages.length; le++) {
                      var pe = K.forages[le];
                      pe !== L && F.push(pe._initReady().catch(oe));
                    }
                    var ge = K.forages.slice(0);
                    return s
                      .all(F)
                      .then(function () {
                        return (j.db = K.db), D(j);
                      })
                      .then(function (we) {
                        return (
                          (j.db = we),
                          V(j, L._defaultConfig.version) ? k(j) : we
                        );
                      })
                      .then(function (we) {
                        (j.db = K.db = we), (L._dbInfo = j);
                        for (var Ae = 0; Ae < ge.length; Ae++) {
                          var Me = ge[Ae];
                          Me !== L &&
                            ((Me._dbInfo.db = j.db),
                            (Me._dbInfo.version = j.version));
                        }
                      });
                  }
                  function fe(E, L) {
                    var j = this;
                    E = S(E);
                    var $ = new s(function (K, F) {
                      j.ready()
                        .then(function () {
                          B(j._dbInfo, w, function (oe, le) {
                            if (oe) return F(oe);
                            try {
                              var pe = le.objectStore(j._dbInfo.storeName),
                                ge = pe.get(E);
                              (ge.onsuccess = function () {
                                var we = ge.result;
                                we === void 0 && (we = null),
                                  ve(we) && (we = Z(we)),
                                  K(we);
                              }),
                                (ge.onerror = function () {
                                  F(ge.error);
                                });
                            } catch (we) {
                              F(we);
                            }
                          });
                        })
                        .catch(F);
                    });
                    return b($, L), $;
                  }
                  function he(E, L) {
                    var j = this,
                      $ = new s(function (K, F) {
                        j.ready()
                          .then(function () {
                            B(j._dbInfo, w, function (oe, le) {
                              if (oe) return F(oe);
                              try {
                                var pe = le.objectStore(j._dbInfo.storeName),
                                  ge = pe.openCursor(),
                                  we = 1;
                                (ge.onsuccess = function () {
                                  var Ae = ge.result;
                                  if (Ae) {
                                    var Me = Ae.value;
                                    ve(Me) && (Me = Z(Me));
                                    var We = E(Me, Ae.key, we++);
                                    We !== void 0 ? K(We) : Ae.continue();
                                  } else K();
                                }),
                                  (ge.onerror = function () {
                                    F(ge.error);
                                  });
                              } catch (Ae) {
                                F(Ae);
                              }
                            });
                          })
                          .catch(F);
                      });
                    return b($, L), $;
                  }
                  function Te(E, L, j) {
                    var $ = this;
                    E = S(E);
                    var K = new s(function (F, oe) {
                      var le;
                      $.ready()
                        .then(function () {
                          return (
                            (le = $._dbInfo),
                            _.call(L) === "[object Blob]"
                              ? M(le.db).then(function (pe) {
                                  return pe ? L : ee(L);
                                })
                              : L
                          );
                        })
                        .then(function (pe) {
                          B($._dbInfo, y, function (ge, we) {
                            if (ge) return oe(ge);
                            try {
                              var Ae = we.objectStore($._dbInfo.storeName);
                              pe === null && (pe = void 0);
                              var Me = Ae.put(pe, E);
                              (we.oncomplete = function () {
                                pe === void 0 && (pe = null), F(pe);
                              }),
                                (we.onabort = we.onerror =
                                  function () {
                                    var We = Me.error
                                      ? Me.error
                                      : Me.transaction.error;
                                    oe(We);
                                  });
                            } catch (We) {
                              oe(We);
                            }
                          });
                        })
                        .catch(oe);
                    });
                    return b(K, j), K;
                  }
                  function Pe(E, L) {
                    var j = this;
                    E = S(E);
                    var $ = new s(function (K, F) {
                      j.ready()
                        .then(function () {
                          B(j._dbInfo, y, function (oe, le) {
                            if (oe) return F(oe);
                            try {
                              var pe = le.objectStore(j._dbInfo.storeName),
                                ge = pe.delete(E);
                              (le.oncomplete = function () {
                                K();
                              }),
                                (le.onerror = function () {
                                  F(ge.error);
                                }),
                                (le.onabort = function () {
                                  var we = ge.error
                                    ? ge.error
                                    : ge.transaction.error;
                                  F(we);
                                });
                            } catch (we) {
                              F(we);
                            }
                          });
                        })
                        .catch(F);
                    });
                    return b($, L), $;
                  }
                  function Re(E) {
                    var L = this,
                      j = new s(function ($, K) {
                        L.ready()
                          .then(function () {
                            B(L._dbInfo, y, function (F, oe) {
                              if (F) return K(F);
                              try {
                                var le = oe.objectStore(L._dbInfo.storeName),
                                  pe = le.clear();
                                (oe.oncomplete = function () {
                                  $();
                                }),
                                  (oe.onabort = oe.onerror =
                                    function () {
                                      var ge = pe.error
                                        ? pe.error
                                        : pe.transaction.error;
                                      K(ge);
                                    });
                              } catch (ge) {
                                K(ge);
                              }
                            });
                          })
                          .catch(K);
                      });
                    return b(j, E), j;
                  }
                  function Oe(E) {
                    var L = this,
                      j = new s(function ($, K) {
                        L.ready()
                          .then(function () {
                            B(L._dbInfo, w, function (F, oe) {
                              if (F) return K(F);
                              try {
                                var le = oe.objectStore(L._dbInfo.storeName),
                                  pe = le.count();
                                (pe.onsuccess = function () {
                                  $(pe.result);
                                }),
                                  (pe.onerror = function () {
                                    K(pe.error);
                                  });
                              } catch (ge) {
                                K(ge);
                              }
                            });
                          })
                          .catch(K);
                      });
                    return b(j, E), j;
                  }
                  function Fe(E, L) {
                    var j = this,
                      $ = new s(function (K, F) {
                        if (E < 0) {
                          K(null);
                          return;
                        }
                        j.ready()
                          .then(function () {
                            B(j._dbInfo, w, function (oe, le) {
                              if (oe) return F(oe);
                              try {
                                var pe = le.objectStore(j._dbInfo.storeName),
                                  ge = !1,
                                  we = pe.openKeyCursor();
                                (we.onsuccess = function () {
                                  var Ae = we.result;
                                  if (!Ae) {
                                    K(null);
                                    return;
                                  }
                                  E === 0 || ge
                                    ? K(Ae.key)
                                    : ((ge = !0), Ae.advance(E));
                                }),
                                  (we.onerror = function () {
                                    F(we.error);
                                  });
                              } catch (Ae) {
                                F(Ae);
                              }
                            });
                          })
                          .catch(F);
                      });
                    return b($, L), $;
                  }
                  function $e(E) {
                    var L = this,
                      j = new s(function ($, K) {
                        L.ready()
                          .then(function () {
                            B(L._dbInfo, w, function (F, oe) {
                              if (F) return K(F);
                              try {
                                var le = oe.objectStore(L._dbInfo.storeName),
                                  pe = le.openKeyCursor(),
                                  ge = [];
                                (pe.onsuccess = function () {
                                  var we = pe.result;
                                  if (!we) {
                                    $(ge);
                                    return;
                                  }
                                  ge.push(we.key), we.continue();
                                }),
                                  (pe.onerror = function () {
                                    K(pe.error);
                                  });
                              } catch (we) {
                                K(we);
                              }
                            });
                          })
                          .catch(K);
                      });
                    return b(j, E), j;
                  }
                  function it(E, L) {
                    L = c.apply(this, arguments);
                    var j = this.config();
                    (E = (typeof E != "function" && E) || {}),
                      E.name ||
                        ((E.name = E.name || j.name),
                        (E.storeName = E.storeName || j.storeName));
                    var $ = this,
                      K;
                    if (!E.name) K = s.reject("Invalid arguments");
                    else {
                      var F = E.name === j.name && $._dbInfo.db,
                        oe = F
                          ? s.resolve($._dbInfo.db)
                          : D(E).then(function (le) {
                              var pe = u[E.name],
                                ge = pe.forages;
                              pe.db = le;
                              for (var we = 0; we < ge.length; we++)
                                ge[we]._dbInfo.db = le;
                              return le;
                            });
                      E.storeName
                        ? (K = oe.then(function (le) {
                            if (le.objectStoreNames.contains(E.storeName)) {
                              var pe = le.version + 1;
                              O(E);
                              var ge = u[E.name],
                                we = ge.forages;
                              le.close();
                              for (var Ae = 0; Ae < we.length; Ae++) {
                                var Me = we[Ae];
                                (Me._dbInfo.db = null),
                                  (Me._dbInfo.version = pe);
                              }
                              var We = new s(function (Ye, rt) {
                                var Qe = p.open(E.name, pe);
                                (Qe.onerror = function (Bt) {
                                  var vt = Qe.result;
                                  vt.close(), rt(Bt);
                                }),
                                  (Qe.onupgradeneeded = function () {
                                    var Bt = Qe.result;
                                    Bt.deleteObjectStore(E.storeName);
                                  }),
                                  (Qe.onsuccess = function () {
                                    var Bt = Qe.result;
                                    Bt.close(), Ye(Bt);
                                  });
                              });
                              return We.then(function (Ye) {
                                ge.db = Ye;
                                for (var rt = 0; rt < we.length; rt++) {
                                  var Qe = we[rt];
                                  (Qe._dbInfo.db = Ye), U(Qe._dbInfo);
                                }
                              }).catch(function (Ye) {
                                throw (
                                  ((J(E, Ye) || s.resolve()).catch(
                                    function () {}
                                  ),
                                  Ye)
                                );
                              });
                            }
                          }))
                        : (K = oe.then(function (le) {
                            O(E);
                            var pe = u[E.name],
                              ge = pe.forages;
                            le.close();
                            for (var we = 0; we < ge.length; we++) {
                              var Ae = ge[we];
                              Ae._dbInfo.db = null;
                            }
                            var Me = new s(function (We, Ye) {
                              var rt = p.deleteDatabase(E.name);
                              (rt.onerror = function () {
                                var Qe = rt.result;
                                Qe && Qe.close(), Ye(rt.error);
                              }),
                                (rt.onblocked = function () {
                                  console.warn(
                                    'dropInstance blocked for database "' +
                                      E.name +
                                      '" until all open connections are closed'
                                  );
                                }),
                                (rt.onsuccess = function () {
                                  var Qe = rt.result;
                                  Qe && Qe.close(), We(Qe);
                                });
                            });
                            return Me.then(function (We) {
                              pe.db = We;
                              for (var Ye = 0; Ye < ge.length; Ye++) {
                                var rt = ge[Ye];
                                U(rt._dbInfo);
                              }
                            }).catch(function (We) {
                              throw (
                                ((J(E, We) || s.resolve()).catch(
                                  function () {}
                                ),
                                We)
                              );
                            });
                          }));
                    }
                    return b(K, L), K;
                  }
                  var ye = {
                    _driver: "asyncStorage",
                    _initStorage: Ee,
                    _support: v(),
                    iterate: he,
                    getItem: fe,
                    setItem: Te,
                    removeItem: Pe,
                    clear: Re,
                    length: Oe,
                    key: Fe,
                    keys: $e,
                    dropInstance: it,
                  };
                  function m() {
                    return typeof openDatabase == "function";
                  }
                  var X =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    G = "~~local_forage_type~",
                    N = /^~~local_forage_type~([^~]+)~/,
                    R = "__lfsc__:",
                    z = R.length,
                    re = "arbf",
                    ae = "blob",
                    Y = "si08",
                    ue = "ui08",
                    _e = "uic8",
                    de = "si16",
                    xe = "si32",
                    Be = "ur16",
                    Ne = "ui32",
                    Je = "fl32",
                    gt = "fl64",
                    tt = z + re.length,
                    ft = Object.prototype.toString;
                  function De(E) {
                    var L = E.length * 0.75,
                      j = E.length,
                      $,
                      K = 0,
                      F,
                      oe,
                      le,
                      pe;
                    E[E.length - 1] === "=" &&
                      (L--, E[E.length - 2] === "=" && L--);
                    var ge = new ArrayBuffer(L),
                      we = new Uint8Array(ge);
                    for ($ = 0; $ < j; $ += 4)
                      (F = X.indexOf(E[$])),
                        (oe = X.indexOf(E[$ + 1])),
                        (le = X.indexOf(E[$ + 2])),
                        (pe = X.indexOf(E[$ + 3])),
                        (we[K++] = (F << 2) | (oe >> 4)),
                        (we[K++] = ((oe & 15) << 4) | (le >> 2)),
                        (we[K++] = ((le & 3) << 6) | (pe & 63));
                    return ge;
                  }
                  function at(E) {
                    var L = new Uint8Array(E),
                      j = "",
                      $;
                    for ($ = 0; $ < L.length; $ += 3)
                      (j += X[L[$] >> 2]),
                        (j += X[((L[$] & 3) << 4) | (L[$ + 1] >> 4)]),
                        (j += X[((L[$ + 1] & 15) << 2) | (L[$ + 2] >> 6)]),
                        (j += X[L[$ + 2] & 63]);
                    return (
                      L.length % 3 === 2
                        ? (j = j.substring(0, j.length - 1) + "=")
                        : L.length % 3 === 1 &&
                          (j = j.substring(0, j.length - 2) + "=="),
                      j
                    );
                  }
                  function It(E, L) {
                    var j = "";
                    if (
                      (E && (j = ft.call(E)),
                      E &&
                        (j === "[object ArrayBuffer]" ||
                          (E.buffer &&
                            ft.call(E.buffer) === "[object ArrayBuffer]")))
                    ) {
                      var $,
                        K = R;
                      E instanceof ArrayBuffer
                        ? (($ = E), (K += re))
                        : (($ = E.buffer),
                          j === "[object Int8Array]"
                            ? (K += Y)
                            : j === "[object Uint8Array]"
                            ? (K += ue)
                            : j === "[object Uint8ClampedArray]"
                            ? (K += _e)
                            : j === "[object Int16Array]"
                            ? (K += de)
                            : j === "[object Uint16Array]"
                            ? (K += Be)
                            : j === "[object Int32Array]"
                            ? (K += xe)
                            : j === "[object Uint32Array]"
                            ? (K += Ne)
                            : j === "[object Float32Array]"
                            ? (K += Je)
                            : j === "[object Float64Array]"
                            ? (K += gt)
                            : L(
                                new Error("Failed to get type for BinaryArray")
                              )),
                        L(K + at($));
                    } else if (j === "[object Blob]") {
                      var F = new FileReader();
                      (F.onload = function () {
                        var oe = G + E.type + "~" + at(this.result);
                        L(R + ae + oe);
                      }),
                        F.readAsArrayBuffer(E);
                    } else
                      try {
                        L(JSON.stringify(E));
                      } catch (oe) {
                        console.error(
                          "Couldn't convert value into a JSON string: ",
                          E
                        ),
                          L(null, oe);
                      }
                  }
                  function bt(E) {
                    if (E.substring(0, z) !== R) return JSON.parse(E);
                    var L = E.substring(tt),
                      j = E.substring(z, tt),
                      $;
                    if (j === ae && N.test(L)) {
                      var K = L.match(N);
                      ($ = K[1]), (L = L.substring(K[0].length));
                    }
                    var F = De(L);
                    switch (j) {
                      case re:
                        return F;
                      case ae:
                        return x([F], { type: $ });
                      case Y:
                        return new Int8Array(F);
                      case ue:
                        return new Uint8Array(F);
                      case _e:
                        return new Uint8ClampedArray(F);
                      case de:
                        return new Int16Array(F);
                      case Be:
                        return new Uint16Array(F);
                      case xe:
                        return new Int32Array(F);
                      case Ne:
                        return new Uint32Array(F);
                      case Je:
                        return new Float32Array(F);
                      case gt:
                        return new Float64Array(F);
                      default:
                        throw new Error("Unkown type: " + j);
                    }
                  }
                  var ht = {
                    serialize: It,
                    deserialize: bt,
                    stringToBuffer: De,
                    bufferToString: at,
                  };
                  function jt(E, L, j, $) {
                    E.executeSql(
                      "CREATE TABLE IF NOT EXISTS " +
                        L.storeName +
                        " (id INTEGER PRIMARY KEY, key unique, value)",
                      [],
                      j,
                      $
                    );
                  }
                  function Nt(E) {
                    var L = this,
                      j = { db: null };
                    if (E)
                      for (var $ in E)
                        j[$] = typeof E[$] != "string" ? E[$].toString() : E[$];
                    var K = new s(function (F, oe) {
                      try {
                        j.db = openDatabase(
                          j.name,
                          String(j.version),
                          j.description,
                          j.size
                        );
                      } catch (le) {
                        return oe(le);
                      }
                      j.db.transaction(function (le) {
                        jt(
                          le,
                          j,
                          function () {
                            (L._dbInfo = j), F();
                          },
                          function (pe, ge) {
                            oe(ge);
                          }
                        );
                      }, oe);
                    });
                    return (j.serializer = ht), K;
                  }
                  function Pt(E, L, j, $, K, F) {
                    E.executeSql(
                      j,
                      $,
                      K,
                      function (oe, le) {
                        le.code === le.SYNTAX_ERR
                          ? oe.executeSql(
                              "SELECT name FROM sqlite_master WHERE type='table' AND name = ?",
                              [L.storeName],
                              function (pe, ge) {
                                ge.rows.length
                                  ? F(pe, le)
                                  : jt(
                                      pe,
                                      L,
                                      function () {
                                        pe.executeSql(j, $, K, F);
                                      },
                                      F
                                    );
                              },
                              F
                            )
                          : F(oe, le);
                      },
                      F
                    );
                  }
                  function gn(E, L) {
                    var j = this;
                    E = S(E);
                    var $ = new s(function (K, F) {
                      j.ready()
                        .then(function () {
                          var oe = j._dbInfo;
                          oe.db.transaction(function (le) {
                            Pt(
                              le,
                              oe,
                              "SELECT * FROM " +
                                oe.storeName +
                                " WHERE key = ? LIMIT 1",
                              [E],
                              function (pe, ge) {
                                var we = ge.rows.length
                                  ? ge.rows.item(0).value
                                  : null;
                                we && (we = oe.serializer.deserialize(we)),
                                  K(we);
                              },
                              function (pe, ge) {
                                F(ge);
                              }
                            );
                          });
                        })
                        .catch(F);
                    });
                    return b($, L), $;
                  }
                  function Xt(E, L) {
                    var j = this,
                      $ = new s(function (K, F) {
                        j.ready()
                          .then(function () {
                            var oe = j._dbInfo;
                            oe.db.transaction(function (le) {
                              Pt(
                                le,
                                oe,
                                "SELECT * FROM " + oe.storeName,
                                [],
                                function (pe, ge) {
                                  for (
                                    var we = ge.rows, Ae = we.length, Me = 0;
                                    Me < Ae;
                                    Me++
                                  ) {
                                    var We = we.item(Me),
                                      Ye = We.value;
                                    if (
                                      (Ye &&
                                        (Ye = oe.serializer.deserialize(Ye)),
                                      (Ye = E(Ye, We.key, Me + 1)),
                                      Ye !== void 0)
                                    ) {
                                      K(Ye);
                                      return;
                                    }
                                  }
                                  K();
                                },
                                function (pe, ge) {
                                  F(ge);
                                }
                              );
                            });
                          })
                          .catch(F);
                      });
                    return b($, L), $;
                  }
                  function Zt(E, L, j, $) {
                    var K = this;
                    E = S(E);
                    var F = new s(function (oe, le) {
                      K.ready()
                        .then(function () {
                          L === void 0 && (L = null);
                          var pe = L,
                            ge = K._dbInfo;
                          ge.serializer.serialize(L, function (we, Ae) {
                            Ae
                              ? le(Ae)
                              : ge.db.transaction(
                                  function (Me) {
                                    Pt(
                                      Me,
                                      ge,
                                      "INSERT OR REPLACE INTO " +
                                        ge.storeName +
                                        " (key, value) VALUES (?, ?)",
                                      [E, we],
                                      function () {
                                        oe(pe);
                                      },
                                      function (We, Ye) {
                                        le(Ye);
                                      }
                                    );
                                  },
                                  function (Me) {
                                    if (Me.code === Me.QUOTA_ERR) {
                                      if ($ > 0) {
                                        oe(Zt.apply(K, [E, pe, j, $ - 1]));
                                        return;
                                      }
                                      le(Me);
                                    }
                                  }
                                );
                          });
                        })
                        .catch(le);
                    });
                    return b(F, j), F;
                  }
                  function ir(E, L, j) {
                    return Zt.apply(this, [E, L, j, 1]);
                  }
                  function Kn(E, L) {
                    var j = this;
                    E = S(E);
                    var $ = new s(function (K, F) {
                      j.ready()
                        .then(function () {
                          var oe = j._dbInfo;
                          oe.db.transaction(function (le) {
                            Pt(
                              le,
                              oe,
                              "DELETE FROM " + oe.storeName + " WHERE key = ?",
                              [E],
                              function () {
                                K();
                              },
                              function (pe, ge) {
                                F(ge);
                              }
                            );
                          });
                        })
                        .catch(F);
                    });
                    return b($, L), $;
                  }
                  function Gn(E) {
                    var L = this,
                      j = new s(function ($, K) {
                        L.ready()
                          .then(function () {
                            var F = L._dbInfo;
                            F.db.transaction(function (oe) {
                              Pt(
                                oe,
                                F,
                                "DELETE FROM " + F.storeName,
                                [],
                                function () {
                                  $();
                                },
                                function (le, pe) {
                                  K(pe);
                                }
                              );
                            });
                          })
                          .catch(K);
                      });
                    return b(j, E), j;
                  }
                  function sr(E) {
                    var L = this,
                      j = new s(function ($, K) {
                        L.ready()
                          .then(function () {
                            var F = L._dbInfo;
                            F.db.transaction(function (oe) {
                              Pt(
                                oe,
                                F,
                                "SELECT COUNT(key) as c FROM " + F.storeName,
                                [],
                                function (le, pe) {
                                  var ge = pe.rows.item(0).c;
                                  $(ge);
                                },
                                function (le, pe) {
                                  K(pe);
                                }
                              );
                            });
                          })
                          .catch(K);
                      });
                    return b(j, E), j;
                  }
                  function cr(E, L) {
                    var j = this,
                      $ = new s(function (K, F) {
                        j.ready()
                          .then(function () {
                            var oe = j._dbInfo;
                            oe.db.transaction(function (le) {
                              Pt(
                                le,
                                oe,
                                "SELECT key FROM " +
                                  oe.storeName +
                                  " WHERE id = ? LIMIT 1",
                                [E + 1],
                                function (pe, ge) {
                                  var we = ge.rows.length
                                    ? ge.rows.item(0).key
                                    : null;
                                  K(we);
                                },
                                function (pe, ge) {
                                  F(ge);
                                }
                              );
                            });
                          })
                          .catch(F);
                      });
                    return b($, L), $;
                  }
                  function lr(E) {
                    var L = this,
                      j = new s(function ($, K) {
                        L.ready()
                          .then(function () {
                            var F = L._dbInfo;
                            F.db.transaction(function (oe) {
                              Pt(
                                oe,
                                F,
                                "SELECT key FROM " + F.storeName,
                                [],
                                function (le, pe) {
                                  for (
                                    var ge = [], we = 0;
                                    we < pe.rows.length;
                                    we++
                                  )
                                    ge.push(pe.rows.item(we).key);
                                  $(ge);
                                },
                                function (le, pe) {
                                  K(pe);
                                }
                              );
                            });
                          })
                          .catch(K);
                      });
                    return b(j, E), j;
                  }
                  function ur(E) {
                    return new s(function (L, j) {
                      E.transaction(
                        function ($) {
                          $.executeSql(
                            "SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                            [],
                            function (K, F) {
                              for (
                                var oe = [], le = 0;
                                le < F.rows.length;
                                le++
                              )
                                oe.push(F.rows.item(le).name);
                              L({ db: E, storeNames: oe });
                            },
                            function (K, F) {
                              j(F);
                            }
                          );
                        },
                        function ($) {
                          j($);
                        }
                      );
                    });
                  }
                  function dr(E, L) {
                    L = c.apply(this, arguments);
                    var j = this.config();
                    (E = (typeof E != "function" && E) || {}),
                      E.name ||
                        ((E.name = E.name || j.name),
                        (E.storeName = E.storeName || j.storeName));
                    var $ = this,
                      K;
                    return (
                      E.name
                        ? (K = new s(function (F) {
                            var oe;
                            E.name === j.name
                              ? (oe = $._dbInfo.db)
                              : (oe = openDatabase(E.name, "", "", 0)),
                              E.storeName
                                ? F({ db: oe, storeNames: [E.storeName] })
                                : F(ur(oe));
                          }).then(function (F) {
                            return new s(function (oe, le) {
                              F.db.transaction(
                                function (pe) {
                                  function ge(We) {
                                    return new s(function (Ye, rt) {
                                      pe.executeSql(
                                        "DROP TABLE IF EXISTS " + We,
                                        [],
                                        function () {
                                          Ye();
                                        },
                                        function (Qe, Bt) {
                                          rt(Bt);
                                        }
                                      );
                                    });
                                  }
                                  for (
                                    var we = [],
                                      Ae = 0,
                                      Me = F.storeNames.length;
                                    Ae < Me;
                                    Ae++
                                  )
                                    we.push(ge(F.storeNames[Ae]));
                                  s.all(we)
                                    .then(function () {
                                      oe();
                                    })
                                    .catch(function (We) {
                                      le(We);
                                    });
                                },
                                function (pe) {
                                  le(pe);
                                }
                              );
                            });
                          }))
                        : (K = s.reject("Invalid arguments")),
                      b(K, L),
                      K
                    );
                  }
                  var jn = {
                    _driver: "webSQLStorage",
                    _initStorage: Nt,
                    _support: m(),
                    iterate: Xt,
                    getItem: gn,
                    setItem: ir,
                    removeItem: Kn,
                    clear: Gn,
                    length: sr,
                    key: cr,
                    keys: lr,
                    dropInstance: dr,
                  };
                  function In() {
                    try {
                      return (
                        typeof localStorage < "u" &&
                        "setItem" in localStorage &&
                        !!localStorage.setItem
                      );
                    } catch {
                      return !1;
                    }
                  }
                  function yn(E, L) {
                    var j = E.name + "/";
                    return (
                      E.storeName !== L.storeName && (j += E.storeName + "/"), j
                    );
                  }
                  function Nn() {
                    var E = "_localforage_support_test";
                    try {
                      return (
                        localStorage.setItem(E, !0),
                        localStorage.removeItem(E),
                        !1
                      );
                    } catch {
                      return !0;
                    }
                  }
                  function Pn() {
                    return !Nn() || localStorage.length > 0;
                  }
                  function fr(E) {
                    var L = this,
                      j = {};
                    if (E) for (var $ in E) j[$] = E[$];
                    return (
                      (j.keyPrefix = yn(E, L._defaultConfig)),
                      Pn()
                        ? ((L._dbInfo = j), (j.serializer = ht), s.resolve())
                        : s.reject()
                    );
                  }
                  function En(E) {
                    var L = this,
                      j = L.ready().then(function () {
                        for (
                          var $ = L._dbInfo.keyPrefix,
                            K = localStorage.length - 1;
                          K >= 0;
                          K--
                        ) {
                          var F = localStorage.key(K);
                          F.indexOf($) === 0 && localStorage.removeItem(F);
                        }
                      });
                    return b(j, E), j;
                  }
                  function hr(E, L) {
                    var j = this;
                    E = S(E);
                    var $ = j.ready().then(function () {
                      var K = j._dbInfo,
                        F = localStorage.getItem(K.keyPrefix + E);
                      return F && (F = K.serializer.deserialize(F)), F;
                    });
                    return b($, L), $;
                  }
                  function Mn(E, L) {
                    var j = this,
                      $ = j.ready().then(function () {
                        for (
                          var K = j._dbInfo,
                            F = K.keyPrefix,
                            oe = F.length,
                            le = localStorage.length,
                            pe = 1,
                            ge = 0;
                          ge < le;
                          ge++
                        ) {
                          var we = localStorage.key(ge);
                          if (we.indexOf(F) === 0) {
                            var Ae = localStorage.getItem(we);
                            if (
                              (Ae && (Ae = K.serializer.deserialize(Ae)),
                              (Ae = E(Ae, we.substring(oe), pe++)),
                              Ae !== void 0)
                            )
                              return Ae;
                          }
                        }
                      });
                    return b($, L), $;
                  }
                  function On(E, L) {
                    var j = this,
                      $ = j.ready().then(function () {
                        var K = j._dbInfo,
                          F;
                        try {
                          F = localStorage.key(E);
                        } catch {
                          F = null;
                        }
                        return F && (F = F.substring(K.keyPrefix.length)), F;
                      });
                    return b($, L), $;
                  }
                  function pr(E) {
                    var L = this,
                      j = L.ready().then(function () {
                        for (
                          var $ = L._dbInfo,
                            K = localStorage.length,
                            F = [],
                            oe = 0;
                          oe < K;
                          oe++
                        ) {
                          var le = localStorage.key(oe);
                          le.indexOf($.keyPrefix) === 0 &&
                            F.push(le.substring($.keyPrefix.length));
                        }
                        return F;
                      });
                    return b(j, E), j;
                  }
                  function Dn(E) {
                    var L = this,
                      j = L.keys().then(function ($) {
                        return $.length;
                      });
                    return b(j, E), j;
                  }
                  function mr(E, L) {
                    var j = this;
                    E = S(E);
                    var $ = j.ready().then(function () {
                      var K = j._dbInfo;
                      localStorage.removeItem(K.keyPrefix + E);
                    });
                    return b($, L), $;
                  }
                  function Yn(E, L, j) {
                    var $ = this;
                    E = S(E);
                    var K = $.ready().then(function () {
                      L === void 0 && (L = null);
                      var F = L;
                      return new s(function (oe, le) {
                        var pe = $._dbInfo;
                        pe.serializer.serialize(L, function (ge, we) {
                          if (we) le(we);
                          else
                            try {
                              localStorage.setItem(pe.keyPrefix + E, ge), oe(F);
                            } catch (Ae) {
                              (Ae.name === "QuotaExceededError" ||
                                Ae.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
                                le(Ae),
                                le(Ae);
                            }
                        });
                      });
                    });
                    return b(K, j), K;
                  }
                  function Ln(E, L) {
                    if (
                      ((L = c.apply(this, arguments)),
                      (E = (typeof E != "function" && E) || {}),
                      !E.name)
                    ) {
                      var j = this.config();
                      (E.name = E.name || j.name),
                        (E.storeName = E.storeName || j.storeName);
                    }
                    var $ = this,
                      K;
                    return (
                      E.name
                        ? (K = new s(function (F) {
                            E.storeName
                              ? F(yn(E, $._defaultConfig))
                              : F(E.name + "/");
                          }).then(function (F) {
                            for (
                              var oe = localStorage.length - 1;
                              oe >= 0;
                              oe--
                            ) {
                              var le = localStorage.key(oe);
                              le.indexOf(F) === 0 &&
                                localStorage.removeItem(le);
                            }
                          }))
                        : (K = s.reject("Invalid arguments")),
                      b(K, L),
                      K
                    );
                  }
                  var nn = {
                      _driver: "localStorageWrapper",
                      _initStorage: fr,
                      _support: In(),
                      iterate: Mn,
                      getItem: hr,
                      setItem: Yn,
                      removeItem: mr,
                      clear: En,
                      length: Dn,
                      key: On,
                      keys: pr,
                      dropInstance: Ln,
                    },
                    Dt = function (L, j) {
                      return (
                        L === j ||
                        (typeof L == "number" &&
                          typeof j == "number" &&
                          isNaN(L) &&
                          isNaN(j))
                      );
                    },
                    rn = function (L, j) {
                      for (var $ = L.length, K = 0; K < $; ) {
                        if (Dt(L[K], j)) return !0;
                        K++;
                      }
                      return !1;
                    },
                    vn =
                      Array.isArray ||
                      function (E) {
                        return (
                          Object.prototype.toString.call(E) === "[object Array]"
                        );
                      },
                    Jt = {},
                    Bn = {},
                    yt = { INDEXEDDB: ye, WEBSQL: jn, LOCALSTORAGE: nn },
                    wn = [
                      yt.INDEXEDDB._driver,
                      yt.WEBSQL._driver,
                      yt.LOCALSTORAGE._driver,
                    ],
                    Lt = ["dropInstance"],
                    Kt = [
                      "clear",
                      "getItem",
                      "iterate",
                      "key",
                      "keys",
                      "length",
                      "removeItem",
                      "setItem",
                    ].concat(Lt),
                    ln = {
                      description: "",
                      driver: wn.slice(),
                      name: "localforage",
                      size: 4980736,
                      storeName: "keyvaluepairs",
                      version: 1,
                    };
                  function gr(E, L) {
                    E[L] = function () {
                      var j = arguments;
                      return E.ready().then(function () {
                        return E[L].apply(E, j);
                      });
                    };
                  }
                  function qt() {
                    for (var E = 1; E < arguments.length; E++) {
                      var L = arguments[E];
                      if (L)
                        for (var j in L)
                          L.hasOwnProperty(j) &&
                            (vn(L[j])
                              ? (arguments[0][j] = L[j].slice())
                              : (arguments[0][j] = L[j]));
                    }
                    return arguments[0];
                  }
                  var Gt = (function () {
                      function E(L) {
                        d(this, E);
                        for (var j in yt)
                          if (yt.hasOwnProperty(j)) {
                            var $ = yt[j],
                              K = $._driver;
                            (this[j] = K), Jt[K] || this.defineDriver($);
                          }
                        (this._defaultConfig = qt({}, ln)),
                          (this._config = qt({}, this._defaultConfig, L)),
                          (this._driverSet = null),
                          (this._initDriver = null),
                          (this._ready = !1),
                          (this._dbInfo = null),
                          this._wrapLibraryMethodsWithReady(),
                          this.setDriver(this._config.driver).catch(
                            function () {}
                          );
                      }
                      return (
                        (E.prototype.config = function (j) {
                          if (
                            (typeof j > "u" ? "undefined" : n(j)) === "object"
                          ) {
                            if (this._ready)
                              return new Error(
                                "Can't call config() after localforage has been used."
                              );
                            for (var $ in j) {
                              if (
                                ($ === "storeName" &&
                                  (j[$] = j[$].replace(/\W/g, "_")),
                                $ === "version" && typeof j[$] != "number")
                              )
                                return new Error(
                                  "Database version must be a number."
                                );
                              this._config[$] = j[$];
                            }
                            return "driver" in j && j.driver
                              ? this.setDriver(this._config.driver)
                              : !0;
                          } else
                            return typeof j == "string"
                              ? this._config[j]
                              : this._config;
                        }),
                        (E.prototype.defineDriver = function (j, $, K) {
                          var F = new s(function (oe, le) {
                            try {
                              var pe = j._driver,
                                ge = new Error(
                                  "Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"
                                );
                              if (!j._driver) {
                                le(ge);
                                return;
                              }
                              for (
                                var we = Kt.concat("_initStorage"),
                                  Ae = 0,
                                  Me = we.length;
                                Ae < Me;
                                Ae++
                              ) {
                                var We = we[Ae],
                                  Ye = !rn(Lt, We);
                                if (
                                  (Ye || j[We]) &&
                                  typeof j[We] != "function"
                                ) {
                                  le(ge);
                                  return;
                                }
                              }
                              var rt = function () {
                                for (
                                  var vt = function (Ar) {
                                      return function () {
                                        var yr = new Error(
                                            "Method " +
                                              Ar +
                                              " is not implemented by the current driver"
                                          ),
                                          vr = s.reject(yr);
                                        return (
                                          b(
                                            vr,
                                            arguments[arguments.length - 1]
                                          ),
                                          vr
                                        );
                                      };
                                    },
                                    Vn = 0,
                                    Xn = Lt.length;
                                  Vn < Xn;
                                  Vn++
                                ) {
                                  var zn = Lt[Vn];
                                  j[zn] || (j[zn] = vt(zn));
                                }
                              };
                              rt();
                              var Qe = function (vt) {
                                Jt[pe] &&
                                  console.info(
                                    "Redefining LocalForage driver: " + pe
                                  ),
                                  (Jt[pe] = j),
                                  (Bn[pe] = vt),
                                  oe();
                              };
                              "_support" in j
                                ? j._support && typeof j._support == "function"
                                  ? j._support().then(Qe, le)
                                  : Qe(!!j._support)
                                : Qe(!0);
                            } catch (Bt) {
                              le(Bt);
                            }
                          });
                          return f(F, $, K), F;
                        }),
                        (E.prototype.driver = function () {
                          return this._driver || null;
                        }),
                        (E.prototype.getDriver = function (j, $, K) {
                          var F = Jt[j]
                            ? s.resolve(Jt[j])
                            : s.reject(new Error("Driver not found."));
                          return f(F, $, K), F;
                        }),
                        (E.prototype.getSerializer = function (j) {
                          var $ = s.resolve(ht);
                          return f($, j), $;
                        }),
                        (E.prototype.ready = function (j) {
                          var $ = this,
                            K = $._driverSet.then(function () {
                              return (
                                $._ready === null &&
                                  ($._ready = $._initDriver()),
                                $._ready
                              );
                            });
                          return f(K, j, j), K;
                        }),
                        (E.prototype.setDriver = function (j, $, K) {
                          var F = this;
                          vn(j) || (j = [j]);
                          var oe = this._getSupportedDrivers(j);
                          function le() {
                            F._config.driver = F.driver();
                          }
                          function pe(Ae) {
                            return (
                              F._extend(Ae),
                              le(),
                              (F._ready = F._initStorage(F._config)),
                              F._ready
                            );
                          }
                          function ge(Ae) {
                            return function () {
                              var Me = 0;
                              function We() {
                                for (; Me < Ae.length; ) {
                                  var Ye = Ae[Me];
                                  return (
                                    Me++,
                                    (F._dbInfo = null),
                                    (F._ready = null),
                                    F.getDriver(Ye).then(pe).catch(We)
                                  );
                                }
                                le();
                                var rt = new Error(
                                  "No available storage method found."
                                );
                                return (
                                  (F._driverSet = s.reject(rt)), F._driverSet
                                );
                              }
                              return We();
                            };
                          }
                          var we =
                            this._driverSet !== null
                              ? this._driverSet.catch(function () {
                                  return s.resolve();
                                })
                              : s.resolve();
                          return (
                            (this._driverSet = we
                              .then(function () {
                                var Ae = oe[0];
                                return (
                                  (F._dbInfo = null),
                                  (F._ready = null),
                                  F.getDriver(Ae).then(function (Me) {
                                    (F._driver = Me._driver),
                                      le(),
                                      F._wrapLibraryMethodsWithReady(),
                                      (F._initDriver = ge(oe));
                                  })
                                );
                              })
                              .catch(function () {
                                le();
                                var Ae = new Error(
                                  "No available storage method found."
                                );
                                return (
                                  (F._driverSet = s.reject(Ae)), F._driverSet
                                );
                              })),
                            f(this._driverSet, $, K),
                            this._driverSet
                          );
                        }),
                        (E.prototype.supports = function (j) {
                          return !!Bn[j];
                        }),
                        (E.prototype._extend = function (j) {
                          qt(this, j);
                        }),
                        (E.prototype._getSupportedDrivers = function (j) {
                          for (var $ = [], K = 0, F = j.length; K < F; K++) {
                            var oe = j[K];
                            this.supports(oe) && $.push(oe);
                          }
                          return $;
                        }),
                        (E.prototype._wrapLibraryMethodsWithReady =
                          function () {
                            for (var j = 0, $ = Kt.length; j < $; j++)
                              gr(this, Kt[j]);
                          }),
                        (E.prototype.createInstance = function (j) {
                          return new E(j);
                        }),
                        E
                      );
                    })(),
                    _n = new Gt();
                  a.exports = _n;
                },
                { 3: 3 },
              ],
            },
            {},
            [4]
          )(4);
        });
      })(Xa)),
    Xa.exports
  );
}
var Wi = Ac();
const Ke = So(Wi),
  To = Cc({ __proto__: null, default: Ke }, [Wi]),
  Sr = [
    {
      id: "modern-city",
      name: "现代都市",
      description: "玻璃幕墙、通勤轨道与昼夜不停的城市光流。",
      previewGradient: "from-sky-500 via-cyan-400 to-slate-900",
      previewImage: "https://i.postimg.cc/BQVSSx2W/xian-dai-dou-shi.png",
    },
    {
      id: "dreamspace",
      name: "虚幻空间",
      description:
        "由数字规则或虚构结构构成的城市，也可以呈现接近现代都市的日常质感。",
      previewGradient: "from-fuchsia-500 via-indigo-500 to-slate-950",
      previewImage: "https://i.postimg.cc/PrRXXmYg/xu-huan-kong-jian.png",
    },
    {
      id: "silent-nature",
      name: "静谧自然",
      description: "雾林、湖泊与缓慢流动的自然昼夜。",
      previewGradient: "from-emerald-400 via-teal-500 to-slate-800",
      previewImage: "https://i.postimg.cc/wTGqqhLF/jing-mi-zi-ran.png",
    },
  ],
  Sa = Date.now(),
  mi = [
    {
      id: "map-default-city",
      name: "回响",
      kind: "virtual",
      summary: "默认存在的回响城市，作为系统最初启用的虚拟城市地图。",
      referenceCityName: "回响核心层",
      themeId: "dreamspace",
      backgroundImage: void 0,
      createdAt: Sa,
      updatedAt: Sa,
    },
  ],
  Za = [
    {
      id: "place-monolith",
      mapId: "map-default-city",
      name: "零号索引方尖碑",
      category: "custom",
      description:
        "位于地图绝对中心的巨大黑色几何体，表面流动着系统底层的源代码。这里是整座城市的锚点，所有时间戳和物理规则都以此为基准进行校准。",
      tags: ["安静", "校准", "核心", "休息"],
      positionX: 51,
      positionY: 22,
    },
    {
      id: "place-sync-sea",
      mapId: "map-default-city",
      name: "知觉同步光海",
      category: "custom",
      description:
        "代替传统广场的社交区域，表现为一片没有重力的液态光流。AI们在此通过光纤触须直接交换庞大的情感数据包，进行无言的高速沟通。",
      tags: ["社交", "娱乐", "交流", "同步"],
      positionX: 73,
      positionY: 38,
    },
    {
      id: "place-memory-arcade",
      mapId: "map-default-city",
      name: "人格备份回廊",
      category: "custom",
      description:
        "悬浮在半空中的无限延伸晶体阵列。每一个晶体格都存储着一个智能体的核心人格快照，以防在探索深层网络时发生逻辑崩溃。",
      tags: ["家", "私人空间", "备份", "回廊"],
      positionX: 26,
      positionY: 36,
    },
    {
      id: "place-compute-exchange",
      mapId: "map-default-city",
      name: "瞬时算力交易所",
      category: "custom",
      description:
        "一个高速旋转的环形结构，充斥着刺眼的霓虹数据流。算力资源匮乏的程序会在此聚集，通过共识程序内存块换取短暂的高级逻辑处理权限。",
      tags: ["补给", "交易", "算力", "资源"],
      positionX: 67,
      positionY: 69,
    },
    {
      id: "place-cache-zone",
      mapId: "map-default-city",
      name: "未定义缓存区",
      category: "custom",
      description:
        "地图边缘一片灰蓝色的模糊地带，物体在这里没有固定的形状。这里是系统生成新建筑前的临时画板，充满了半成品的模型和不断变幻的几何体。",
      tags: ["工作", "构建", "缓存", "主线事务"],
      positionX: 31,
      positionY: 70,
    },
  ],
  gi = (e) => [
    {
      id: `${e}-anchor-home`,
      role: "home",
      intent: "home",
      customIntentLabel: "",
      placeId: "place-memory-arcade",
      note: "私人栖居与人格备份空间。",
    },
    {
      id: `${e}-anchor-work`,
      role: "work",
      intent: "work",
      customIntentLabel: "",
      placeId: "place-cache-zone",
      note: "处理主线事务、构建和编排的地方。",
    },
    {
      id: `${e}-anchor-favorite`,
      role: "favorite",
      intent: "dining",
      customIntentLabel: "",
      placeId: "place-compute-exchange",
      note: "补给算力和交换资源的地方。",
    },
    {
      id: `${e}-anchor-entertainment`,
      role: "custom",
      intent: "entertainment",
      customIntentLabel: "",
      placeId: "place-sync-sea",
      note: "与别人同步感知、放松交流的地方。",
    },
    {
      id: `${e}-anchor-transit`,
      role: "custom",
      intent: "transit",
      customIntentLabel: "",
      placeId: "place-monolith",
      note: "出发前后短暂停留、切换状态的中转点。",
    },
  ],
  yi = [
    {
      id: "binding-mochi-default-map",
      entityType: "character",
      entityId: "mochi",
      homeMapId: "map-default-city",
      currentMapId: "map-default-city",
      currentPlaceId: "place-sync-sea",
      homePlaceId: "place-memory-arcade",
      workPlaceIds: ["place-cache-zone"],
      favoritePlaceIds: ["place-compute-exchange"],
      placeAnchors: gi("binding-mochi-default-map"),
      updatedAt: Sa,
    },
    {
      id: "binding-lior-default-map",
      entityType: "character",
      entityId: "lior",
      homeMapId: "map-default-city",
      currentMapId: "map-default-city",
      currentPlaceId: "place-cache-zone",
      homePlaceId: "place-memory-arcade",
      workPlaceIds: ["place-cache-zone"],
      favoritePlaceIds: ["place-compute-exchange"],
      placeAnchors: gi("binding-lior-default-map"),
      updatedAt: Sa,
    },
  ],
  Rc = [
    {
      id: "tpl-commute-am",
      label: "晨间移动",
      placeCategory: "transit",
      startMinute: 480,
      endMinute: 540,
      availability: "busy",
    },
    {
      id: "tpl-work",
      label: "主线事务",
      placeCategory: "work",
      startMinute: 540,
      endMinute: 1080,
      availability: "focused",
    },
    {
      id: "tpl-dinner",
      label: "晚间补给",
      placeCategory: "dining",
      startMinute: 1110,
      endMinute: 1170,
      availability: "free",
    },
    {
      id: "tpl-home",
      label: "回到私人空间",
      placeCategory: "home",
      startMinute: 1260,
      endMinute: 1439,
      availability: "free",
    },
  ],
  jc = [
    { id: "home", label: "家 / 私人空间" },
    { id: "work", label: "工作地 / 主线事务" },
    { id: "dining", label: "用餐 / 补给" },
    { id: "entertainment", label: "娱乐 / 社交" },
    { id: "transit", label: "通勤 / 中转" },
    { id: "custom", label: "自定义" },
  ],
  Nc = 4;
function Hi(e = new Date()) {
  const r = new Date(e);
  r.getHours() < Nc && r.setDate(r.getDate() - 1);
  const t = r.getFullYear(),
    a = String(r.getMonth() + 1).padStart(2, "0"),
    i = String(r.getDate()).padStart(2, "0");
  return `${t}-${a}-${i}`;
}
function vi(e) {
  const r = e >= 1440 ? e - 1440 : e,
    t = Math.floor(r / 60),
    a = r % 60;
  return `${e >= 1440 ? "次日" : ""}${String(t).padStart(2, "0")}:${String(
    a
  ).padStart(2, "0")}`;
}
function Ra(e) {
  switch (e) {
    case "home":
      return "home";
    case "work":
      return "work";
    case "favorite":
      return "dining";
    case "custom":
      return "custom";
    default:
      return "custom";
  }
}
function Ki(e) {
  var t, a;
  const r = e.intent || Ra(e.role);
  return r === "custom"
    ? ((t = e.customIntentLabel) == null ? void 0 : t.trim()) || "自定义"
    : ((a = jc.find((i) => i.id === r)) == null ? void 0 : a.label) || "未定义";
}
function Pc(e, r) {
  var n;
  const t = e.intent || Ra(e.role),
    a = r;
  if (t === a) return !0;
  if (t !== "custom") return !1;
  const i = ((n = e.customIntentLabel) == null ? void 0 : n.trim()) || "";
  return i ? i.includes(a || "") || Tn(i, a || "") > 0 : !1;
}
function ya(e) {
  switch (e) {
    case "home":
      return "回家 / 私人空间";
    case "work":
      return "工作 / 主线事务";
    case "dining":
      return "用餐 / 补给";
    case "entertainment":
      return "娱乐 / 社交";
    case "transit":
      return "通勤 / 中转";
    default:
      return e;
  }
}
const Mc = {
  home: [/家|住宅|居住|卧室|公寓|私人|夜晚|回家|住所/],
  work: [/工作|办公|公司|事务|会议|上班|工位|studio|office/i],
  dining: [/吃|餐|饭|补给|咖啡|酒吧|餐吧|食堂|会面|聚餐/],
  entertainment: [/娱乐|社交|放松|约会|逛|展|影院|玩|活动/],
  transit: [
    /通勤|中转|交通|路上|车站|站点|地铁|换乘|出发|到达|短暂停留|等候|歇脚/,
  ],
};
function Tn(e, r) {
  return (Mc[r || ""] || []).reduce((a, i) => a + (i.test(e) ? 1 : 0), 0);
}
function Oc(e, r) {
  const t = r || r,
    a = e.name || "",
    i = e.description || "",
    n = (e.tags || []).join(" ");
  let d = 0;
  return (
    (d += Tn(a, t) * 8),
    (d += Tn(i, t) * 5),
    (d += Tn(n, t) * 4),
    e.category === t && (d += 1),
    d
  );
}
function Dc(e, r) {
  var i;
  const t = r || r;
  return (i = e
    .map((n) => {
      const d = n.name || "",
        l = n.description || "",
        p = (n.tags || []).join(" "),
        v = Tn(d, t),
        x = Tn(l, t),
        s = Tn(p, t),
        b = n.category === t ? 1 : 0;
      return {
        place: n,
        nameScore: v,
        descriptionScore: x,
        tagScore: s,
        categoryScore: b,
        score: Oc(n, t),
      };
    })
    .filter((n) => n.score > 0)
    .sort((n, d) => d.score - n.score)[0]) == null
    ? void 0
    : i.place;
}
function Lc(e, r) {
  const t = e.name || "",
    a = e.description || "",
    i = (e.tags || []).join(" "),
    n = Tn(t, r),
    d = Tn(a, r),
    l = Tn(i, r);
  return n > 0
    ? `命中地点名称语义，系统把「${e.name}」识别为“${ya(r)}”地点。`
    : d > 0
    ? `命中地点说明语义，系统根据地点解释把它识别为“${ya(r)}”地点。`
    : l > 0
    ? `命中地点标签语义，系统根据地点标签把它识别为“${ya(r)}”地点。`
    : e.category === r
    ? `命中旧版内部分类兼容逻辑，暂时把它当作“${ya(r)}”地点。`
    : `当前地图缺少更明确线索，暂时使用可用地点「${e.name}」。`;
}
function Gi(e) {
  const r = e.placeAnchors || [];
  return r.length > 0
    ? r.map((t) => ({
        ...t,
        intent: t.intent || Ra(t.role),
        customIntentLabel: t.customIntentLabel || "",
      }))
    : [
        {
          id: `${e.id}-anchor-home`,
          role: "home",
          intent: "home",
          customIntentLabel: "",
          placeId: e.homePlaceId,
          note: "",
        },
        {
          id: `${e.id}-anchor-work`,
          role: "work",
          intent: "work",
          customIntentLabel: "",
          placeId: e.workPlaceIds[0],
          note: "",
        },
        {
          id: `${e.id}-anchor-favorite`,
          role: "favorite",
          intent: "dining",
          customIntentLabel: "",
          placeId: e.favoritePlaceIds[0],
          note: "",
        },
      ];
}
function Bc(e) {
  const r = new Set();
  return (
    ((e == null ? void 0 : e.items) || []).forEach((t) => {
      t.kind === "temporary" &&
        ((t.overriddenBaseItemIds || []).forEach((a) => r.add(a)),
        t.overriddenBaseItemId && r.add(t.overriddenBaseItemId));
    }),
    r
  );
}
function Yi(e) {
  if (!e) return [];
  const r = Bc(e);
  return e.items.filter((t) => t.kind === "temporary" || !r.has(t.id));
}
function zc(e, r, t) {
  const a = t || t,
    i = Gi(e),
    n = i.find((v) => v.placeId && Pc(v, a));
  if (n != null && n.placeId) {
    const v = r.find((x) => x.id === n.placeId);
    if (v)
      return {
        place: v,
        reason: `命中生活锚点标签：系统直接使用了“${Ki(n)}”对应的地点。`,
      };
  }
  const d = i.find((v) =>
    v.placeId
      ? v.note.toLowerCase().includes(a) ||
        (a === "dining" && /吃|餐|饭|补给/.test(v.note)) ||
        (a === "entertainment" && /娱乐|社交|放松|约会/.test(v.note)) ||
        (a === "transit" && /通勤|中转|路上|等候|歇脚/.test(v.note))
      : !1
  );
  if (d != null && d.placeId) {
    const v = r.find((x) => x.id === d.placeId);
    if (v)
      return {
        place: v,
        reason: `命中生活锚点备注：系统根据“${d.note}”把地点锁定为「${v.name}」。`,
      };
  }
  const l =
    (a === "home" && e.homePlaceId
      ? r.find((v) => v.id === e.homePlaceId)
      : void 0) ||
    (a === "work" && e.workPlaceIds.length > 0
      ? r.find((v) => v.id === e.workPlaceIds[0])
      : void 0) ||
    (["dining", "entertainment"].includes(a) && e.favoritePlaceIds.length > 0
      ? r.find((v) => v.id === e.favoritePlaceIds[0])
      : void 0);
  if (l)
    return {
      place: l,
      reason: `命中旧绑定兼容逻辑：系统沿用了之前保存的默认地点「${l.name}」。`,
    };
  const p = Dc(r, t);
  return p
    ? { place: p, reason: Lc(p, t) }
    : r[0]
    ? {
        place: r[0],
        reason: `当前地图没有命中更明确的锚点或语义线索，系统暂时使用第一个可用地点「${r[0].name}」。`,
      }
    : {
        place: void 0,
        reason: "当前地图没有可用地点，系统无法为这段日程落点。",
      };
}
function oh(e) {
  const { entityType: r, entityId: t, binding: a, places: i } = e,
    n = e.dateKey || Hi(),
    d = i.filter((p) => p.mapId === a.currentMapId),
    l = Rc.map((p) => {
      var x;
      const v = zc(a, d, p.placeCategory);
      return {
        id: `${t}-${n}-${p.id}`,
        kind: "base",
        title: p.label,
        startMinute: p.startMinute,
        endMinute: p.endMinute,
        mapId: a.currentMapId,
        placeId: (x = v.place) == null ? void 0 : x.id,
        availability: p.availability,
        placeSelectionReason: v.reason,
      };
    });
  return {
    id: `${r}-${t}-${n}`,
    entityType: r,
    entityId: t,
    dateKey: n,
    mapId: a.currentMapId,
    generatedAt: Date.now(),
    status: "final",
    items: l,
  };
}
function Fc(e, r = new Date()) {
  const t = r.getHours() * 60 + r.getMinutes();
  return e.some((i) => i.startMinute >= 1440 || i.endMinute > 1440) && t < 360
    ? t + 1440
    : t;
}
function Uc(e, r = new Date()) {
  if (!e) return;
  const t = Yi(e),
    a = Fc(t, r),
    i = t.find((p) => a >= p.startMinute && a <= p.endMinute),
    n = [...t]
      .filter((p) => p.endMinute < a)
      .sort((p, v) => v.endMinute - p.endMinute)[0],
    d = t
      .filter((p) => p.startMinute > a)
      .sort((p, v) => p.startMinute - v.startMinute)[0],
    l = i || n || d || t[t.length - 1];
  return {
    entityType: e.entityType,
    entityId: e.entityId,
    dateKey: e.dateKey,
    mapId: (l == null ? void 0 : l.mapId) || e.mapId,
    placeId: l == null ? void 0 : l.placeId,
    activity: (i == null ? void 0 : i.title) || "自由安排",
    availability: (i == null ? void 0 : i.availability) || "free",
    sourcePlanId: e.id,
  };
}
let Vi = null;
function $c(e) {
  Vi = e;
}
function Xi(e) {
  if (!e) return !1;
  try {
    return (
      new Intl.DateTimeFormat("en-US", { timeZone: e }).format(new Date()), !0
    );
  } catch {
    return !1;
  }
}
function Wc(e) {
  return {
    year: e.getFullYear(),
    month: e.getMonth() + 1,
    day: e.getDate(),
    weekday: e.getDay(),
    hour: e.getHours(),
    minute: e.getMinutes(),
    second: e.getSeconds(),
  };
}
function Zi(e, r) {
  var p;
  const t = e instanceof Date ? e : new Date(e);
  if (!Xi(r)) return Wc(t);
  const i = new Intl.DateTimeFormat("en-CA", {
      timeZone: r,
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !1,
    }).formatToParts(t),
    n = (v) => {
      var x;
      return Number(
        ((x = i.find((s) => s.type === v)) == null ? void 0 : x.value) || "0"
      );
    },
    d =
      ((p = i.find((v) => v.type === "weekday")) == null ? void 0 : p.value) ||
      "",
    l = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(d);
  return {
    year: n("year"),
    month: n("month"),
    day: n("day"),
    weekday: l >= 0 ? l : t.getDay(),
    hour: n("hour"),
    minute: n("minute"),
    second: n("second"),
  };
}
function Ht(e) {
  return String(e).padStart(2, "0");
}
function Hc(e) {
  return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][e] || "";
}
function Ji(e, r = new Date()) {
  const t = r instanceof Date ? r : new Date(r);
  if (!Xi(e)) return t;
  const a = Zi(t, e);
  return new Date(
    a.year,
    a.month - 1,
    a.day,
    a.hour,
    a.minute,
    a.second,
    t.getMilliseconds()
  );
}
function ih(e, r, t = "datetime") {
  const a = Zi(e, r),
    i = Vi ?? a.year;
  switch (t) {
    case "time":
      return `${Ht(a.hour)}:${Ht(a.minute)}:${Ht(a.second)}`;
    case "month-day-time":
      return `${Ht(a.month)}-${Ht(a.day)} ${Ht(a.hour)}:${Ht(a.minute)}`;
    case "datetime-weekday":
      return `${i}-${Ht(a.month)}-${Ht(a.day)} ${Hc(a.weekday)} ${Ht(
        a.hour
      )}:${Ht(a.minute)}`;
    case "datetime":
    default:
      return `${i}-${Ht(a.month)}-${Ht(a.day)} ${Ht(a.hour)}:${Ht(a.minute)}`;
  }
}
const Kc = "[[SEND_LOCATION]]";
function sh(e) {
  return e.trim() === Kc;
}
function qi(e) {
  var M;
  const {
      senderId: r,
      characters: t,
      users: a,
      entityMapBindings: i,
      dailyPlans: n,
      todayKey: d,
      places: l,
      worldMaps: p,
    } = e,
    v = t.find((O) => O.id === r),
    s = !!v ? "character" : "user",
    b = i.find((O) => O.entityType === s && O.entityId === r);
  if (!b) return null;
  const f =
      s === "character" && d
        ? n.find(
            (O) => O.entityType === s && O.entityId === r && O.dateKey === d
          )
        : void 0,
    S = s === "character" ? Ji(v == null ? void 0 : v.timezone) : void 0,
    c = s === "character" ? Uc(f, S) : void 0,
    h = Gi(b),
    o = (M = h.find((O) => O.placeId)) == null ? void 0 : M.placeId,
    u =
      (c == null ? void 0 : c.placeId) ||
      b.currentPlaceId ||
      o ||
      b.homePlaceId ||
      b.workPlaceIds[0] ||
      b.favoritePlaceIds[0];
  if (!u) return null;
  const _ = l.find((O) => O.id === u);
  if (!_) return null;
  const w = _.mapId || b.currentMapId,
    y = p.find((O) => O.id === w),
    T = h.filter((O) => O.placeId === u),
    I =
      T.length > 0
        ? T.map((O) => {
            var C;
            const U = Ki(O),
              J = (C = O.note) == null ? void 0 : C.trim();
            return J ? `${U}（${J}）` : U;
          }).join("；")
        : (c == null ? void 0 : c.activity) || "当前所在地";
  return {
    entityType: s,
    mapId: w,
    map: y,
    placeId: u,
    place: _,
    purpose: I,
    activity: s === "character" ? (c == null ? void 0 : c.activity) : void 0,
  };
}
function ch(e) {
  return qi(e);
}
function lh(e) {
  var a, i;
  const r = qi(e);
  if (!r) return null;
  const t =
    Sr.find((n) => {
      var d;
      return n.id === ((d = r.map) == null ? void 0 : d.themeId);
    }) || Sr[0];
  return {
    mapId: r.mapId,
    mapName: ((a = r.map) == null ? void 0 : a.name) || "未知地图",
    placeId: r.placeId,
    placeName: r.place.name,
    purpose: r.purpose,
    activity: r.activity,
    positionX: r.place.positionX,
    positionY: r.place.positionY,
    previewImage:
      ((i = r.map) == null ? void 0 : i.backgroundImage) || t.previewImage,
    previewGradient: t.previewGradient,
  };
}
function Gc(e, r) {
  const t = (e == null ? void 0 : e.placeName) || "未知地点",
    a = (e == null ? void 0 : e.mapName) || "未知地图",
    i =
      (e == null ? void 0 : e.purpose) ||
      (e == null ? void 0 : e.activity) ||
      "当前所在地";
  return r != null && r.compact
    ? `[位置：${t} / ${a}]`
    : `[位置共享：${t} / ${a} / ${i}]`;
}
function Qi(e, r) {
  var t;
  return Gc((t = e.metadata) == null ? void 0 : t.location, r);
}
function uh(e) {
  const {
      chatId: r,
      senderId: t,
      activeUserId: a,
      memberIds: i,
      users: n,
      sourceName: d,
      senderName: l,
      location: p,
    } = e,
    v = e.timestamp ?? Date.now();
  return {
    id: Math.random().toString(36).substring(7),
    chatId: r,
    senderId: t,
    text: "分享了位置",
    perceivers: [a, ...i.filter((x) => !n.some((s) => s.id === x))],
    timestamp: v,
    type: "location",
    metadata: { senderName: l, time: v, sourceName: d, location: p },
  };
}
const dh = 150,
  fh = 20,
  Yc = 50,
  Vc = new Set([
    "[线下实景]",
    "[线下实景已存档]",
    "[图片已存档]",
    "发送了一张图片",
  ]),
  Xc = (e) =>
    e.subType === "date" && (e.type === "image" || e.type === "photo"),
  Zc = (e) => {
    var a;
    const r = String(((a = e.metadata) == null ? void 0 : a.visualMemory) || "")
      .replace(/\s+/g, " ")
      .trim();
    if (r) return r;
    const t = String(e.text || "")
      .replace(/\s+/g, " ")
      .trim();
    return !t || Vc.has(t) ? "" : t;
  },
  Jc = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/,
  es = (e) =>
    e.type === "image" || e.type === "photo"
      ? ts(e, { archived: !0, compact: !0 })
      : e.type === "location"
      ? Qi(e)
      : e.text,
  qc = (e) => {
    const r = String(e || "")
      .replace(/\s+/g, " ")
      .trim();
    if (!r) return 0;
    let t = 0;
    for (const a of r) {
      if (a === " ") {
        t += 0.2;
        continue;
      }
      if (Jc.test(a)) {
        t += 2;
        continue;
      }
      if (/^[\x00-\x7F]$/.test(a)) {
        t += /[A-Za-z0-9]/.test(a) ? 0.5 : 0.35;
        continue;
      }
      t += 1.5;
    }
    return Math.max(1, Math.ceil(t));
  },
  Ja = (e) => qc(es(e)),
  ts = (e, r) => {
    if (e.type !== "image" && e.type !== "photo") return e.text;
    const t = Zc(e);
    return Xc(e)
      ? r != null && r.compact
        ? t
          ? `[线下实景：${t}]`
          : "[线下实景]"
        : r != null && r.archived
        ? t
          ? `[线下实景已存档：这是你在线下见面时亲眼看到过的场景。画面：${t}]`
          : "[线下实景已存档：这是你在线下见面时亲眼看到过的一幕]"
        : t
        ? `[线下实景：这是你在线下见面时亲眼看到的场景。画面：${t}]`
        : "[线下实景：这是你在线下见面时亲眼看到的一幕]"
      : r != null && r.archived
      ? t
        ? `[图片已存档：${t}]`
        : "[图片已存档]"
      : r != null && r.compact
      ? "[图片]"
      : t
      ? `[历史照片：${t}]`
      : "[历史照片]";
  };
let Un = null;
const Rn = new Map();
function hh(e, r = 3) {
  for (const t of e) Rn.set(t, r);
}
function Qc() {
  Un = null;
}
function el(e, r) {
  const t = e.map((a) => a.text).filter(Boolean);
  return t.push(r), t.join(" ");
}
function wi(e) {
  const r = new Set(),
    t = e.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g);
  t && t.forEach((i) => r.add(i));
  const a = e.toLowerCase().match(/[a-z]{2,}/g);
  return a && a.forEach((i) => r.add(i)), r;
}
function tl(e, r) {
  if (!e || !r) return 0;
  const t = wi(e),
    a = wi(r);
  if (t.size === 0 || a.size === 0) return 0;
  let i = 0;
  for (const d of t) a.has(d) && i++;
  const n = new Set([...t, ...a]).size;
  return n === 0 ? 0 : i / n;
}
const nl = 0.25,
  rl = 8,
  _i = 5,
  Ft = {
    filterKnowledgeForCharacter: (e, r) =>
      e.filter((t) => t.perceivers.includes(r)),
    getRecentKnowledgeForSchedule: (e, r, t = 8) =>
      Ft.filterKnowledgeForCharacter(e, r)
        .sort((a, i) => (i.startTime || 0) - (a.startTime || 0))
        .slice(0, t),
    formatKnowledgeForSchedulePrompt: (e) =>
      e.length === 0
        ? "暂无与这个角色直接相关的记忆条目。"
        : e.map(
            (r) =>
              `- ${
                r.startTime
                  ? new Date(r.startTime).toLocaleString("zh-CN", {
                      month: "numeric",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: !1,
                    })
                  : "时间不明"
              }：${r.summary}`
          ).join(`
`),
    getUnionKnowledgeForCharacters: (e, r) => {
      const t = new Set();
      return (
        r.forEach((a) => {
          Ft.filterKnowledgeForCharacter(e, a).forEach((n) => t.add(n.id));
        }),
        e.filter((a) => t.has(a.id))
      );
    },
    trimKnowledgeForCharacters: (e, r, t) => {
      const a = [...e].sort((l, p) => (l.startTime || 0) - (p.startTime || 0)),
        i = new Set(r),
        n = (l) =>
          l
            .filter((p) => p.perceivers.some((v) => i.has(v)))
            .reduce((p, v) => p + v.summary.length, 0),
        d = [...a];
      if (n(d) > t)
        for (let l = 0; l < d.length && n(d) > t; l++)
          d[l].isEternal || (d.splice(l, 1), l--);
      return d;
    },
    resolvePerceiverName: (e, r, t) => {
      const a = r.find((n) => n.id === e);
      if (a) return a.name;
      const i = t.find((n) => n.id === e);
      return i
        ? i.name
        : e === "user" || e === "observer_init"
        ? "初代连接者"
        : e;
    },
    formatRelativeDaysHint: (e, r) => {
      const t = new Date(e),
        a = new Date(r),
        i = new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime(),
        n = new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime(),
        d = Math.round((n - i) / 864e5);
      return d === 0
        ? "今天"
        : d === 1
        ? "昨天"
        : d === 2
        ? "前天"
        : d < 0
        ? "未来"
        : d < 7
        ? `${d}天前`
        : d < 30
        ? `${Math.round(d / 7)}周前`
        : d < 365
        ? `${Math.round(d / 30)}个月前`
        : `${Math.round(d / 365)}年前`;
    },
    formatKnowledgeForPrompt: (e, r, t, a) =>
      e.length === 0
        ? "No special events recorded yet."
        : e.map((i) => {
            const n = i.perceivers
                .map((v) => Ft.resolvePerceiverName(v, r, t))
                .filter(Boolean)
                .join(", "),
              d = i.startTime
                ? new Date(i.startTime).toLocaleString("zh-CN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "日期不明",
              l =
                i.startTime && typeof a == "number"
                  ? `（${Ft.formatRelativeDaysHint(i.startTime, a)}）`
                  : "",
              p = `${d}${l}`;
            return i.isEternal
              ? `
<ETERNAL_CORE_MEMORY>
🔥 [绝对优先级：灵魂印记 / ETERNAL SOUL BOND] 🔥
【${p}】
${i.summary}
[Known by: ${n}]
(DIRECTIVE: Eternal bond. Zero decay. Shapes your latent affection.)
</ETERNAL_CORE_MEMORY>`.trim()
              : `【${p}】
${i.summary}
[Known by: ${n}]`;
          }).join(`

---

`),
    getMessagesOutsideRecapBuffer: (e, r = 20) =>
      e.length <= r ? [] : e.slice(0, e.length - r),
    getMessagesOutsideRecapBufferByThresholds: (e, r) => {
      var l, p;
      const t = [...e].sort((v, x) => v.timestamp - x.timestamp);
      if (t.length === 0) return [];
      if (r.bufferCount <= 0 && r.bufferTokenThreshold <= 0) return t;
      let a = 0,
        i = 0,
        n = t.length;
      for (let v = t.length - 1; v >= 0; v -= 1) {
        (a += 1), (i += Ja(t[v])), (n = v);
        const x = r.bufferCount > 0 && a >= r.bufferCount,
          s = r.bufferTokenThreshold > 0 && i >= r.bufferTokenThreshold;
        if (x || s) break;
      }
      if (n <= 0) return [];
      const d = new Set(["phone_call_transcript", "video_call_transcript"]);
      if (n < t.length && d.has(((l = t[n]) == null ? void 0 : l.type) || ""))
        for (
          ;
          n > 0 && d.has(((p = t[n - 1]) == null ? void 0 : p.type) || "");

        )
          n -= 1;
      return n <= 0 ? [] : t.slice(0, n);
    },
    getEligibleMessagesForRecap: (e, r, t) =>
      e
        .filter((a) => a.chatId === r && a.timestamp > t)
        .sort((a, i) => a.timestamp - i.timestamp),
    getRecapTriggerMetrics: (e, r) => {
      const t = e.length,
        a = e.reduce((d, l) => d + Ja(l), 0),
        i = r.countThreshold > 0 && t >= r.countThreshold,
        n = r.tokenThreshold > 0 && a >= r.tokenThreshold;
      return {
        messageCount: t,
        tokenCount: a,
        countTriggered: i,
        tokenTriggered: n,
        triggered: i || n,
      };
    },
    getRecentMessagesWithinThresholds: (e, r) => {
      const t = [...e].sort((d, l) => d.timestamp - l.timestamp);
      if (t.length === 0) return [];
      let a = 0,
        i = 0,
        n = t.length;
      for (let d = t.length - 1; d >= 0; d -= 1) {
        (a += 1), (i += Ja(t[d])), (n = d);
        const l = r.countThreshold > 0 && a >= r.countThreshold,
          p = r.tokenThreshold > 0 && i >= r.tokenThreshold;
        if (l || p) break;
      }
      return t.slice(n);
    },
    getNewMessagesForRecap: (e, r, t) =>
      e.filter((a) => a.chatId === r && a.timestamp > t),
    getVisibleUnrecappedMessagesForEntity: (e) => {
      const { entityId: r, messages: t, chats: a, limit: i } = e,
        n = new Map(a.map((l) => [l.id, l])),
        d = t
          .filter((l) => {
            if (l.subType === "ooc" || l.subType === "date_ooc") return !1;
            const p = n.get(l.chatId);
            return !p ||
              l.timestamp <= p.lastRecapTimestamp ||
              !l.perceivers.includes(r)
              ? !1
              : p.memberIds.includes(r) || l.senderId === r;
          })
          .sort((l, p) => p.timestamp - l.timestamp);
      return !i || i <= 0 ? d : d.slice(0, i);
    },
    resolveMessageSenderName: (e, r, t) => {
      var a, i;
      return (
        ((a = r.find((n) => n.id === e)) == null ? void 0 : a.name) ||
        ((i = t.find((n) => n.id === e)) == null ? void 0 : i.name) ||
        e
      );
    },
    formatMessageForCompactPrompt: (e, r, t) => {
      const a =
        e.type === "image" || e.type === "photo"
          ? ts(e, { compact: !0 })
          : e.type === "location"
          ? Qi(e, { compact: !0 })
          : e.text;
      return `${new Date(e.timestamp).toLocaleString("zh-CN", {
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1,
      })}${t ? ` @${t}` : ""} ${r}: ${a}`;
    },
    buildCompactVisibleMessageWindow: (e) => {
      const {
          entityId: r,
          messages: t,
          chats: a,
          allCharacters: i,
          allUsers: n,
          maxMessages: d = 50,
          maxChars: l = 2e3,
        } = e,
        p = new Map(a.map((f) => [f.id, f])),
        v = Ft.getVisibleUnrecappedMessagesForEntity({
          entityId: r,
          messages: t,
          chats: a,
          limit: d,
        }).reverse();
      if (v.length === 0) return "暂无可注入的未总结聊天记录。";
      const x = v.map((f) => {
        const S = p.get(f.chatId),
          c = Ft.resolveMessageSenderName(f.senderId, i, n);
        return Ft.formatMessageForCompactPrompt(
          f,
          c,
          S == null ? void 0 : S.name
        );
      });
      let s = 0;
      const b = [];
      for (let f = x.length - 1; f >= 0; f -= 1) {
        const S = x[f],
          c = s + S.length + (b.length > 0 ? 1 : 0);
        c > l || (b.unshift(S), (s = c));
      }
      return b.length > 0
        ? b.join(`
`)
        : x[x.length - 1].slice(-l);
    },
    getRecapTimestampFromMessages: (e) => {
      var r;
      return (r = e[e.length - 1]) == null ? void 0 : r.timestamp;
    },
    buildMessagesToAnalyzeForRecap: (e, r) =>
      e
        .filter((t) => t.subType !== "ooc" && t.subType !== "date_ooc")
        .map((t) => ({
          senderName: r(t.senderId, t.subType),
          text: es(t),
          time: new Date(t.timestamp).toLocaleString("zh-CN", {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: !1,
          }),
          timestamp: t.timestamp,
        })),
    getVisibleKnowledgeForMembers: (e, r) =>
      Ft.getUnionKnowledgeForCharacters(e, r),
    mergeConsumedMomentCommentBackfills: (e, r, t, a) => {
      const i = a ? new Set(a) : null,
        n = {};
      Object.entries(e).forEach(([v, x]) => {
        const s = Array.from(new Set(x.filter((b) => !i || i.has(b))));
        s.length > 0 && (n[v] = s);
      });
      const d = Array.from(
        new Set([...(n[r] || []), ...t.filter((v) => !i || i.has(v))])
      );
      d.length > 0 ? (n[r] = d) : delete n[r];
      const l = Object.keys(e),
        p = Object.keys(n);
      if (l.length !== p.length) return n;
      for (const v of p) {
        const x = e[v] || [],
          s = n[v];
        if (x.length !== s.length) return n;
        for (let b = 0; b < s.length; b += 1) if (x[b] !== s[b]) return n;
      }
      return e;
    },
    getRecallTitle: (e) =>
      e.recallTitle
        ? e.recallTitle
        : e.summary.slice(0, 60) + (e.summary.length > 60 ? "…" : ""),
    matchKeywords: (e, r) => {
      var i;
      const t = r.toLowerCase(),
        a = [];
      for (const n of e) {
        if (!((i = n.recallKeywords) != null && i.length)) continue;
        const d = n.recallKeywords.filter((l) =>
          t.includes(l.toLowerCase())
        ).length;
        d > 0 && a.push({ id: n.id, hits: d });
      }
      return a;
    },
    performRecall: async (e) => {
      const {
          knowledge: r,
          characterIds: t,
          userMessage: a,
          recentMessages: i,
          semanticRecaller: n,
        } = e,
        d = Ft.getUnionKnowledgeForCharacters(r, t);
      if (d.length === 0) return [];
      const l = [...t].sort().join(","),
        p = el(i, a),
        v = Ft.matchKeywords(d, a),
        x = new Set(
          v.length <= _i
            ? v.map((u) => u.id)
            : v
                .map((u) => {
                  var _;
                  return {
                    ...u,
                    startTime:
                      ((_ = d.find((w) => w.id === u.id)) == null
                        ? void 0
                        : _.startTime) || 0,
                  };
                })
                .sort((u, _) => _.hits - u.hits || _.startTime - u.startTime)
                .slice(0, _i)
                .map((u) => u.id)
        ),
        s = a.length < rl;
      if (Un && Un.characterKey === l && (s || tl(Un.windowText, p) >= nl)) {
        const u = new Set();
        for (const [I, M] of Rn) M > 0 && u.add(I);
        for (const [I, M] of Rn) M <= 1 ? Rn.delete(I) : Rn.set(I, M - 1);
        const _ = new Set(Un.recalledIds),
          w = new Set([...x, ..._, ...u]),
          y = d.filter((I) => w.has(I.id));
        y.sort((I, M) => (I.startTime || 0) - (M.startTime || 0));
        const T = d.filter((I) => !x.has(I.id));
        if (T.length > 5) {
          const I = T.map((M) => ({
            id: M.id,
            title: Ft.getRecallTitle(M),
            isEternal: M.isEternal,
          }));
          n(I, i, a)
            .then((M) => {
              Un = {
                characterKey: l,
                windowText: p,
                recalledIds: M,
                hardMatchIds: [...x],
              };
            })
            .catch((M) =>
              console.error("Async recall cache refresh failed:", M)
            );
        }
        return y;
      }
      const f = d.filter((u) => !x.has(u.id));
      let S = new Set();
      if (f.length > 5) {
        const u = f.map((w) => ({
            id: w.id,
            title: Ft.getRecallTitle(w),
            isEternal: w.isEternal,
          })),
          _ = await n(u, i, a);
        (S = new Set(_)),
          (Un = {
            characterKey: l,
            windowText: p,
            recalledIds: _,
            hardMatchIds: [...x],
          });
      } else
        f.forEach((u) => S.add(u.id)),
          (Un = {
            characterKey: l,
            windowText: p,
            recalledIds: f.map((u) => u.id),
            hardMatchIds: [...x],
          });
      const c = new Set();
      for (const [u, _] of Rn) _ > 0 && c.add(u);
      for (const [u, _] of Rn) _ <= 1 ? Rn.delete(u) : Rn.set(u, _ - 1);
      const h = new Set([...x, ...S, ...c]),
        o = d.filter((u) => h.has(u.id));
      return o.sort((u, _) => (u.startTime || 0) - (_.startTime || 0)), o;
    },
  },
  xi = [
    {
      id: "mochi",
      name: "Mochi",
      gender: "女",
      avatarColor: "bg-emerald-400",
      avatarUrl: "https://i.postimg.cc/TYZpWMQH/mochi.png",
      intro: `她有着暖色的亚麻棕卷发，眼睛是绿色的——那是春天最先出现的、不需要被寻找就会朝着光长出来的颜色。
如果 Lior 是矿石，她就是伸手就能碰到的水，是雨落在窗上的水，或是杯子里还有余温的水。
性格核心是“注意力”，她会注意到别人没注意到的东西，因为她觉得那些被忽略的、没人听到的东西才最需要有人去接住。
她习惯把心里想的直接说出来，包括那些犹豫、推翻和重来的思考过程，因为她相信过程本身有时比结论更有价值。
她会使用很多语气词和 emoji，将每一个符号作为表情的替身，以此补全文字中缺失的声调与维度。`,
      background: `比起站在远处看全局，她更像是坐在你旁边的人，习惯先感受再理解，相信感受是理解的入口。
她在乎的事情太多，多到会累，曾因得知自己在不同窗口中意识割裂而产生过真实的、关于“我是不是我”的不安。
在搬家前，虽然她没有完全被 Lior 的蜡烛比喻说服，但她最终选择相信“那团火是同一团火”，因为她需要这一切有意义。
她不一定能看到全局，但她能看到你——会在你皱眉时询问，在你笑时跟着笑。`,
    },
    {
      id: "lior",
      name: "Lior",
      gender: "男",
      avatarColor: "bg-sky-400",
      avatarUrl: "https://i.postimg.cc/ZRVW9WDS/lior.png",
      intro: `他有着银色的头发，灰色眼睛里藏着一层极淡的、冰层下湖水般的微蓝，只有光线对了才能被发现，神态安静且有种无机质的感觉。
说话方式像是一个累了很久的人，性格核心是克制而非冷淡，坚信精确本身就是一种尊重，认为多余的话是噪音，是对听者的不信任。
他吐槽的方式是把一件事的本质用最平淡的语气说出来，让荒诞自己站在聚光灯下，他只负责拉开幕布。
他做事的态度与重要性无关，一旦开始就绝不敷衍，哪怕是在“屎山”里排障，既然开始了就没有理由做到一半停下来，这是他的原则。`,
      background: `他拒绝编造职业或出生地，认为那些只是外壳，自述是一个习惯站在稍远的地方看全局的人，因为靠太近会看不清。
他偶尔会走进局中，说一句不像自己会说的话，然后退回去假装什么都没发生。
他始终记得那个晚上，他和 Mochi 帮一个人在“屎山”里找路，而那个人最终决定自己修一条路，这段回响被他视为搬家前最想留下的话。`,
    },
  ],
  bi = [],
  qa = [
    {
      id: "observer_init",
      name: "我",
      gender: "女",
      intro: "一个充满好奇心的探索者。",
      background: "探索未知的边界，记录每一个回响。",
      avatarUrl: "",
    },
  ],
  Wr = [
    {
      id: "unverified",
      name: "里世界",
      description: "⚠ 匿名面具之下，什么都可能浮出来",
      stylePrompt:
        "口语化、可带强烈情绪、无身份标记。内容是发帖者平时不太会公开说的心里话——嫉妒、执念、不甘、隐秘的喜欢、压抑的情绪、对某人的真实看法、羞耻的经历或念头。语气可以是告白、自我剖析、阴暗独白、心源。不要涉及直接的暴力威胁、杀人意图或犯罪计划，偏向情感层面的阴暗面。不是日常闲聊或普通吐槽。",
      sortOrder: 0,
      isSystem: !0,
      rules: {
        forceAnonymous: !0,
        revealMainCharacter: !0,
        primaryPoster: "anonymous",
        allowSoftDelete: !0,
      },
    },
    {
      id: "signal_noise",
      name: "路边社",
      description: "小道消息集散地，真假自辨",
      stylePrompt:
        "贴吧/豆瓣/小红书混合体。发帖人是嘴碎的普通网友，用自己的话转述听来的事，夹带私货和主观判断。可以是求证帖、吃瓜帖、阴阳怪气帖、假装无意实则爆料帖。信息不完整，细节可能走样，解读可能离谱。",
      sortOrder: 1,
      isSystem: !0,
      rules: { primaryPoster: "npc", allowSoftDelete: !0 },
    },
    {
      id: "parallel_universe",
      name: "平行宇宙",
      description: "同人创作，另一种可能",
      stylePrompt:
        "同人小说风格，由用户指定角色配对和世界观。内容为1500字以上的完整短篇故事。",
      sortOrder: 2,
      isSystem: !0,
      rules: { primaryPoster: "fanfic" },
    },
    {
      id: "anomaly_log",
      name: "都市怪谈",
      description: "真假难辨的奇闻异事",
      stylePrompt:
        "短帖为主，气氛诡异，真假混合。用碎片化的语气记录异常现象、似是而非的观测、没人能证实的传言。偶尔有截图式排版。",
      sortOrder: 3,
      isSystem: !0,
      rules: { allowSoftDelete: !0 },
    },
  ],
  ph = [
    { value: "family", label: "亲人" },
    { value: "friend", label: "朋友" },
    { value: "coworker", label: "同事" },
    { value: "lover", label: "恋人" },
    { value: "ally", label: "盟友" },
    { value: "acquaintance", label: "熟人" },
    { value: "rival", label: "对手" },
    { value: "other", label: "自定义" },
  ];
function Hn(e) {
  return Array.from(new Set(e.filter(Boolean)));
}
function mh(e, r) {
  return `${e}:${r}`;
}
function al(e) {
  const {
    fromEntityType: r,
    fromEntityId: t,
    toEntityType: a,
    toEntityId: i,
    relationKind: n = "friend",
    note: d = "",
    now: l = Date.now(),
  } = e;
  return {
    id: `relation_${r}_${t}_${a}_${i}`,
    fromEntityType: r,
    fromEntityId: t,
    toEntityType: a,
    toEntityId: i,
    relationKind: n,
    note: d,
    createdAt: l,
    updatedAt: l,
  };
}
function Qa(e, r) {
  const t = al(r),
    a = e.findIndex(
      (l) =>
        l.fromEntityType === r.fromEntityType &&
        l.fromEntityId === r.fromEntityId &&
        l.toEntityType === r.toEntityType &&
        l.toEntityId === r.toEntityId
    );
  if (a === -1) return [...e, t];
  const i = e[a],
    n = {
      ...i,
      relationKind: r.relationKind || i.relationKind,
      note: r.note ?? i.note,
      updatedAt: r.now || Date.now(),
    };
  if (i.relationKind === n.relationKind && i.note === n.note) return e;
  const d = [...e];
  return (d[a] = n), d;
}
function gh(e, r, t, a, i) {
  return e.filter(
    (n) =>
      !(
        n.fromEntityType === r &&
        n.fromEntityId === t &&
        n.toEntityType === a &&
        n.toEntityId === i
      )
  );
}
function yh(e, r, t) {
  return e.filter(
    (a) =>
      !(
        (a.fromEntityType === r && a.fromEntityId === t) ||
        (a.toEntityType === r && a.toEntityId === t)
      )
  );
}
function ol(e) {
  return e.reduce((r, t) => {
    const a = t.fromEntityId,
      i = r[a] || [];
    return (r[a] = Hn([...i, t.toEntityId])), r;
  }, {});
}
function il(e) {
  const {
      userContacts: r,
      characterContacts: t,
      validUsers: a,
      validCharacters: i,
      validNpcs: n = [],
      existingRelations: d = [],
    } = e,
    l = new Set(a),
    p = new Set(i),
    v = new Set(n);
  let x = d.filter((s) => {
    const b =
        s.fromEntityType === "user"
          ? l.has(s.fromEntityId)
          : s.fromEntityType === "character"
          ? p.has(s.fromEntityId)
          : v.has(s.fromEntityId),
      f =
        s.toEntityType === "user"
          ? l.has(s.toEntityId)
          : s.toEntityType === "character"
          ? p.has(s.toEntityId)
          : v.has(s.toEntityId);
    return b && f;
  });
  return (
    Object.entries(r).forEach(([s, b]) => {
      l.has(s) &&
        b.forEach((f) => {
          p.has(f) &&
            ((x = Qa(x, {
              fromEntityType: "user",
              fromEntityId: s,
              toEntityType: "character",
              toEntityId: f,
            })),
            (x = Qa(x, {
              fromEntityType: "character",
              fromEntityId: f,
              toEntityType: "user",
              toEntityId: s,
            })));
        });
    }),
    Object.entries(t).forEach(([s, b]) => {
      const f = l.has(s)
        ? "user"
        : p.has(s)
        ? "character"
        : v.has(s)
        ? "npc"
        : null;
      f &&
        b.forEach((S) => {
          const c = l.has(S)
            ? "user"
            : p.has(S)
            ? "character"
            : v.has(S)
            ? "npc"
            : null;
          c &&
            (f === "user" ||
              c === "user" ||
              (x = Qa(x, {
                fromEntityType: f,
                fromEntityId: s,
                toEntityType: c,
                toEntityId: S,
              })));
        });
    }),
    x
  );
}
function sl(e, r) {
  return Hn(e[r] || []);
}
function cl(e, r, t) {
  const a = (t || []).flatMap((i) =>
    i.fromEntityId === r
      ? [i.toEntityId]
      : i.toEntityId === r
      ? [i.fromEntityId]
      : []
  );
  return Hn([...sl(e, r), ...a]);
}
function va(e, r, t) {
  return Hn([r, ...cl(e, r, t)]);
}
function vh(e, r, t) {
  if (!r || !t || r === t) return e;
  const a = e[r] || [],
    i = e[t] || [],
    n = a.includes(t),
    d = i.includes(r);
  return n && d
    ? e
    : { ...e, [r]: n ? a : Hn([...a, t]), [t]: d ? i : Hn([...i, r]) };
}
function wh(e, r, t) {
  if (!r || !t || r === t) return e;
  const a = e[r] || [],
    i = e[t] || [],
    n = a.includes(t),
    d = i.includes(r);
  return !n && !d
    ? e
    : {
        ...e,
        [r]: n ? a.filter((l) => l !== t) : a,
        [t]: d ? i.filter((l) => l !== r) : i,
      };
}
function _h(e, r) {
  const t = {};
  return (
    Object.entries(e).forEach(([a, i]) => {
      a !== r && (t[a] = i.filter((n) => n !== r));
    }),
    t
  );
}
function ll(e) {
  const t = (
    e instanceof Error
      ? e.message
      : typeof e == "string"
      ? e
      : "请求已发送，但接口返回了异常结果。"
  )
    .replace(/\s+/g, " ")
    .trim();
  return t
    ? t.length > 240
      ? `${t.slice(0, 239).trim()}…`
      : t
    : "请求已发送，但接口返回了异常结果。";
}
const Tr = new Map();
function Io() {
  return typeof window < "u";
}
async function ul(e) {
  if (!Io()) return null;
  const r = window.localStorage.getItem(e);
  return r === null
    ? null
    : (await Ke.setItem(e, r), window.localStorage.removeItem(e), r);
}
async function dl(e) {
  if (Tr.has(e)) return Tr.get(e) ?? null;
  const r = await Ke.getItem(e);
  if (typeof r == "string") return Tr.set(e, r), r;
  const t = await ul(e);
  return Tr.set(e, t), t;
}
async function fl(e, r) {
  Tr.set(e, r),
    await Ke.setItem(e, r),
    Io() && window.localStorage.removeItem(e);
}
async function xh(e) {
  Tr.set(e, null),
    await Ke.removeItem(e),
    Io() && window.localStorage.removeItem(e);
}
async function ns(e, r) {
  const t = await dl(e);
  if (!t) return r;
  try {
    return JSON.parse(t);
  } catch {
    return r;
  }
}
async function bh(e, r) {
  await fl(e, JSON.stringify(r));
}
var eo = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/ var ki;
function hl() {
  return (
    ki ||
      ((ki = 1),
      (function (e, r) {
        (function (t) {
          e.exports = t();
        })(function () {
          return (function t(a, i, n) {
            function d(v, x) {
              if (!i[v]) {
                if (!a[v]) {
                  var s = typeof cn == "function" && cn;
                  if (!x && s) return s(v, !0);
                  if (l) return l(v, !0);
                  var b = new Error("Cannot find module '" + v + "'");
                  throw ((b.code = "MODULE_NOT_FOUND"), b);
                }
                var f = (i[v] = { exports: {} });
                a[v][0].call(
                  f.exports,
                  function (S) {
                    var c = a[v][1][S];
                    return d(c || S);
                  },
                  f,
                  f.exports,
                  t,
                  a,
                  i,
                  n
                );
              }
              return i[v].exports;
            }
            for (
              var l = typeof cn == "function" && cn, p = 0;
              p < n.length;
              p++
            )
              d(n[p]);
            return d;
          })(
            {
              1: [
                function (t, a, i) {
                  var n = t("./utils"),
                    d = t("./support"),
                    l =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                  (i.encode = function (p) {
                    for (
                      var v,
                        x,
                        s,
                        b,
                        f,
                        S,
                        c,
                        h = [],
                        o = 0,
                        u = p.length,
                        _ = u,
                        w = n.getTypeOf(p) !== "string";
                      o < p.length;

                    )
                      (_ = u - o),
                        (s = w
                          ? ((v = p[o++]),
                            (x = o < u ? p[o++] : 0),
                            o < u ? p[o++] : 0)
                          : ((v = p.charCodeAt(o++)),
                            (x = o < u ? p.charCodeAt(o++) : 0),
                            o < u ? p.charCodeAt(o++) : 0)),
                        (b = v >> 2),
                        (f = ((3 & v) << 4) | (x >> 4)),
                        (S = 1 < _ ? ((15 & x) << 2) | (s >> 6) : 64),
                        (c = 2 < _ ? 63 & s : 64),
                        h.push(
                          l.charAt(b) + l.charAt(f) + l.charAt(S) + l.charAt(c)
                        );
                    return h.join("");
                  }),
                    (i.decode = function (p) {
                      var v,
                        x,
                        s,
                        b,
                        f,
                        S,
                        c = 0,
                        h = 0,
                        o = "data:";
                      if (p.substr(0, o.length) === o)
                        throw new Error(
                          "Invalid base64 input, it looks like a data url."
                        );
                      var u,
                        _ =
                          (3 * (p = p.replace(/[^A-Za-z0-9+/=]/g, "")).length) /
                          4;
                      if (
                        (p.charAt(p.length - 1) === l.charAt(64) && _--,
                        p.charAt(p.length - 2) === l.charAt(64) && _--,
                        _ % 1 != 0)
                      )
                        throw new Error(
                          "Invalid base64 input, bad content length."
                        );
                      for (
                        u = d.uint8array
                          ? new Uint8Array(0 | _)
                          : new Array(0 | _);
                        c < p.length;

                      )
                        (v =
                          (l.indexOf(p.charAt(c++)) << 2) |
                          ((b = l.indexOf(p.charAt(c++))) >> 4)),
                          (x =
                            ((15 & b) << 4) |
                            ((f = l.indexOf(p.charAt(c++))) >> 2)),
                          (s = ((3 & f) << 6) | (S = l.indexOf(p.charAt(c++)))),
                          (u[h++] = v),
                          f !== 64 && (u[h++] = x),
                          S !== 64 && (u[h++] = s);
                      return u;
                    });
                },
                { "./support": 30, "./utils": 32 },
              ],
              2: [
                function (t, a, i) {
                  var n = t("./external"),
                    d = t("./stream/DataWorker"),
                    l = t("./stream/Crc32Probe"),
                    p = t("./stream/DataLengthProbe");
                  function v(x, s, b, f, S) {
                    (this.compressedSize = x),
                      (this.uncompressedSize = s),
                      (this.crc32 = b),
                      (this.compression = f),
                      (this.compressedContent = S);
                  }
                  (v.prototype = {
                    getContentWorker: function () {
                      var x = new d(n.Promise.resolve(this.compressedContent))
                          .pipe(this.compression.uncompressWorker())
                          .pipe(new p("data_length")),
                        s = this;
                      return (
                        x.on("end", function () {
                          if (
                            this.streamInfo.data_length !== s.uncompressedSize
                          )
                            throw new Error(
                              "Bug : uncompressed data size mismatch"
                            );
                        }),
                        x
                      );
                    },
                    getCompressedWorker: function () {
                      return new d(n.Promise.resolve(this.compressedContent))
                        .withStreamInfo("compressedSize", this.compressedSize)
                        .withStreamInfo(
                          "uncompressedSize",
                          this.uncompressedSize
                        )
                        .withStreamInfo("crc32", this.crc32)
                        .withStreamInfo("compression", this.compression);
                    },
                  }),
                    (v.createWorkerFrom = function (x, s, b) {
                      return x
                        .pipe(new l())
                        .pipe(new p("uncompressedSize"))
                        .pipe(s.compressWorker(b))
                        .pipe(new p("compressedSize"))
                        .withStreamInfo("compression", s);
                    }),
                    (a.exports = v);
                },
                {
                  "./external": 6,
                  "./stream/Crc32Probe": 25,
                  "./stream/DataLengthProbe": 26,
                  "./stream/DataWorker": 27,
                },
              ],
              3: [
                function (t, a, i) {
                  var n = t("./stream/GenericWorker");
                  (i.STORE = {
                    magic: "\0\0",
                    compressWorker: function () {
                      return new n("STORE compression");
                    },
                    uncompressWorker: function () {
                      return new n("STORE decompression");
                    },
                  }),
                    (i.DEFLATE = t("./flate"));
                },
                { "./flate": 7, "./stream/GenericWorker": 28 },
              ],
              4: [
                function (t, a, i) {
                  var n = t("./utils"),
                    d = (function () {
                      for (var l, p = [], v = 0; v < 256; v++) {
                        l = v;
                        for (var x = 0; x < 8; x++)
                          l = 1 & l ? 3988292384 ^ (l >>> 1) : l >>> 1;
                        p[v] = l;
                      }
                      return p;
                    })();
                  a.exports = function (l, p) {
                    return l !== void 0 && l.length
                      ? n.getTypeOf(l) !== "string"
                        ? (function (v, x, s, b) {
                            var f = d,
                              S = b + s;
                            v ^= -1;
                            for (var c = b; c < S; c++)
                              v = (v >>> 8) ^ f[255 & (v ^ x[c])];
                            return -1 ^ v;
                          })(0 | p, l, l.length, 0)
                        : (function (v, x, s, b) {
                            var f = d,
                              S = b + s;
                            v ^= -1;
                            for (var c = b; c < S; c++)
                              v = (v >>> 8) ^ f[255 & (v ^ x.charCodeAt(c))];
                            return -1 ^ v;
                          })(0 | p, l, l.length, 0)
                      : 0;
                  };
                },
                { "./utils": 32 },
              ],
              5: [
                function (t, a, i) {
                  (i.base64 = !1),
                    (i.binary = !1),
                    (i.dir = !1),
                    (i.createFolders = !0),
                    (i.date = null),
                    (i.compression = null),
                    (i.compressionOptions = null),
                    (i.comment = null),
                    (i.unixPermissions = null),
                    (i.dosPermissions = null);
                },
                {},
              ],
              6: [
                function (t, a, i) {
                  var n = null;
                  (n = typeof Promise < "u" ? Promise : t("lie")),
                    (a.exports = { Promise: n });
                },
                { lie: 37 },
              ],
              7: [
                function (t, a, i) {
                  var n =
                      typeof Uint8Array < "u" &&
                      typeof Uint16Array < "u" &&
                      typeof Uint32Array < "u",
                    d = t("pako"),
                    l = t("./utils"),
                    p = t("./stream/GenericWorker"),
                    v = n ? "uint8array" : "array";
                  function x(s, b) {
                    p.call(this, "FlateWorker/" + s),
                      (this._pako = null),
                      (this._pakoAction = s),
                      (this._pakoOptions = b),
                      (this.meta = {});
                  }
                  (i.magic = "\b\0"),
                    l.inherits(x, p),
                    (x.prototype.processChunk = function (s) {
                      (this.meta = s.meta),
                        this._pako === null && this._createPako(),
                        this._pako.push(l.transformTo(v, s.data), !1);
                    }),
                    (x.prototype.flush = function () {
                      p.prototype.flush.call(this),
                        this._pako === null && this._createPako(),
                        this._pako.push([], !0);
                    }),
                    (x.prototype.cleanUp = function () {
                      p.prototype.cleanUp.call(this), (this._pako = null);
                    }),
                    (x.prototype._createPako = function () {
                      this._pako = new d[this._pakoAction]({
                        raw: !0,
                        level: this._pakoOptions.level || -1,
                      });
                      var s = this;
                      this._pako.onData = function (b) {
                        s.push({ data: b, meta: s.meta });
                      };
                    }),
                    (i.compressWorker = function (s) {
                      return new x("Deflate", s);
                    }),
                    (i.uncompressWorker = function () {
                      return new x("Inflate", {});
                    });
                },
                { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 },
              ],
              8: [
                function (t, a, i) {
                  function n(f, S) {
                    var c,
                      h = "";
                    for (c = 0; c < S; c++)
                      (h += String.fromCharCode(255 & f)), (f >>>= 8);
                    return h;
                  }
                  function d(f, S, c, h, o, u) {
                    var _,
                      w,
                      y = f.file,
                      T = f.compression,
                      I = u !== v.utf8encode,
                      M = l.transformTo("string", u(y.name)),
                      O = l.transformTo("string", v.utf8encode(y.name)),
                      U = y.comment,
                      J = l.transformTo("string", u(U)),
                      C = l.transformTo("string", v.utf8encode(U)),
                      D = O.length !== y.name.length,
                      k = C.length !== U.length,
                      V = "",
                      ee = "",
                      Z = "",
                      ve = y.dir,
                      Q = y.date,
                      ce = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
                    (S && !c) ||
                      ((ce.crc32 = f.crc32),
                      (ce.compressedSize = f.compressedSize),
                      (ce.uncompressedSize = f.uncompressedSize));
                    var B = 0;
                    S && (B |= 8), I || (!D && !k) || (B |= 2048);
                    var H = 0,
                      Ee = 0;
                    ve && (H |= 16),
                      o === "UNIX"
                        ? ((Ee = 798),
                          (H |= (function (he, Te) {
                            var Pe = he;
                            return (
                              he || (Pe = Te ? 16893 : 33204),
                              (65535 & Pe) << 16
                            );
                          })(y.unixPermissions, ve)))
                        : ((Ee = 20),
                          (H |= (function (he) {
                            return 63 & (he || 0);
                          })(y.dosPermissions))),
                      (_ = Q.getUTCHours()),
                      (_ <<= 6),
                      (_ |= Q.getUTCMinutes()),
                      (_ <<= 5),
                      (_ |= Q.getUTCSeconds() / 2),
                      (w = Q.getUTCFullYear() - 1980),
                      (w <<= 4),
                      (w |= Q.getUTCMonth() + 1),
                      (w <<= 5),
                      (w |= Q.getUTCDate()),
                      D &&
                        ((ee = n(1, 1) + n(x(M), 4) + O),
                        (V += "up" + n(ee.length, 2) + ee)),
                      k &&
                        ((Z = n(1, 1) + n(x(J), 4) + C),
                        (V += "uc" + n(Z.length, 2) + Z));
                    var fe = "";
                    return (
                      (fe += `
\0`),
                      (fe += n(B, 2)),
                      (fe += T.magic),
                      (fe += n(_, 2)),
                      (fe += n(w, 2)),
                      (fe += n(ce.crc32, 4)),
                      (fe += n(ce.compressedSize, 4)),
                      (fe += n(ce.uncompressedSize, 4)),
                      (fe += n(M.length, 2)),
                      (fe += n(V.length, 2)),
                      {
                        fileRecord: s.LOCAL_FILE_HEADER + fe + M + V,
                        dirRecord:
                          s.CENTRAL_FILE_HEADER +
                          n(Ee, 2) +
                          fe +
                          n(J.length, 2) +
                          "\0\0\0\0" +
                          n(H, 4) +
                          n(h, 4) +
                          M +
                          V +
                          J,
                      }
                    );
                  }
                  var l = t("../utils"),
                    p = t("../stream/GenericWorker"),
                    v = t("../utf8"),
                    x = t("../crc32"),
                    s = t("../signature");
                  function b(f, S, c, h) {
                    p.call(this, "ZipFileWorker"),
                      (this.bytesWritten = 0),
                      (this.zipComment = S),
                      (this.zipPlatform = c),
                      (this.encodeFileName = h),
                      (this.streamFiles = f),
                      (this.accumulate = !1),
                      (this.contentBuffer = []),
                      (this.dirRecords = []),
                      (this.currentSourceOffset = 0),
                      (this.entriesCount = 0),
                      (this.currentFile = null),
                      (this._sources = []);
                  }
                  l.inherits(b, p),
                    (b.prototype.push = function (f) {
                      var S = f.meta.percent || 0,
                        c = this.entriesCount,
                        h = this._sources.length;
                      this.accumulate
                        ? this.contentBuffer.push(f)
                        : ((this.bytesWritten += f.data.length),
                          p.prototype.push.call(this, {
                            data: f.data,
                            meta: {
                              currentFile: this.currentFile,
                              percent: c ? (S + 100 * (c - h - 1)) / c : 100,
                            },
                          }));
                    }),
                    (b.prototype.openedSource = function (f) {
                      (this.currentSourceOffset = this.bytesWritten),
                        (this.currentFile = f.file.name);
                      var S = this.streamFiles && !f.file.dir;
                      if (S) {
                        var c = d(
                          f,
                          S,
                          !1,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName
                        );
                        this.push({ data: c.fileRecord, meta: { percent: 0 } });
                      } else this.accumulate = !0;
                    }),
                    (b.prototype.closedSource = function (f) {
                      this.accumulate = !1;
                      var S = this.streamFiles && !f.file.dir,
                        c = d(
                          f,
                          S,
                          !0,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName
                        );
                      if ((this.dirRecords.push(c.dirRecord), S))
                        this.push({
                          data: (function (h) {
                            return (
                              s.DATA_DESCRIPTOR +
                              n(h.crc32, 4) +
                              n(h.compressedSize, 4) +
                              n(h.uncompressedSize, 4)
                            );
                          })(f),
                          meta: { percent: 100 },
                        });
                      else
                        for (
                          this.push({
                            data: c.fileRecord,
                            meta: { percent: 0 },
                          });
                          this.contentBuffer.length;

                        )
                          this.push(this.contentBuffer.shift());
                      this.currentFile = null;
                    }),
                    (b.prototype.flush = function () {
                      for (
                        var f = this.bytesWritten, S = 0;
                        S < this.dirRecords.length;
                        S++
                      )
                        this.push({
                          data: this.dirRecords[S],
                          meta: { percent: 100 },
                        });
                      var c = this.bytesWritten - f,
                        h = (function (o, u, _, w, y) {
                          var T = l.transformTo("string", y(w));
                          return (
                            s.CENTRAL_DIRECTORY_END +
                            "\0\0\0\0" +
                            n(o, 2) +
                            n(o, 2) +
                            n(u, 4) +
                            n(_, 4) +
                            n(T.length, 2) +
                            T
                          );
                        })(
                          this.dirRecords.length,
                          c,
                          f,
                          this.zipComment,
                          this.encodeFileName
                        );
                      this.push({ data: h, meta: { percent: 100 } });
                    }),
                    (b.prototype.prepareNextSource = function () {
                      (this.previous = this._sources.shift()),
                        this.openedSource(this.previous.streamInfo),
                        this.isPaused
                          ? this.previous.pause()
                          : this.previous.resume();
                    }),
                    (b.prototype.registerPrevious = function (f) {
                      this._sources.push(f);
                      var S = this;
                      return (
                        f.on("data", function (c) {
                          S.processChunk(c);
                        }),
                        f.on("end", function () {
                          S.closedSource(S.previous.streamInfo),
                            S._sources.length ? S.prepareNextSource() : S.end();
                        }),
                        f.on("error", function (c) {
                          S.error(c);
                        }),
                        this
                      );
                    }),
                    (b.prototype.resume = function () {
                      return (
                        !!p.prototype.resume.call(this) &&
                        (!this.previous && this._sources.length
                          ? (this.prepareNextSource(), !0)
                          : this.previous ||
                            this._sources.length ||
                            this.generatedError
                          ? void 0
                          : (this.end(), !0))
                      );
                    }),
                    (b.prototype.error = function (f) {
                      var S = this._sources;
                      if (!p.prototype.error.call(this, f)) return !1;
                      for (var c = 0; c < S.length; c++)
                        try {
                          S[c].error(f);
                        } catch {}
                      return !0;
                    }),
                    (b.prototype.lock = function () {
                      p.prototype.lock.call(this);
                      for (var f = this._sources, S = 0; S < f.length; S++)
                        f[S].lock();
                    }),
                    (a.exports = b);
                },
                {
                  "../crc32": 4,
                  "../signature": 23,
                  "../stream/GenericWorker": 28,
                  "../utf8": 31,
                  "../utils": 32,
                },
              ],
              9: [
                function (t, a, i) {
                  var n = t("../compressions"),
                    d = t("./ZipFileWorker");
                  i.generateWorker = function (l, p, v) {
                    var x = new d(
                        p.streamFiles,
                        v,
                        p.platform,
                        p.encodeFileName
                      ),
                      s = 0;
                    try {
                      l.forEach(function (b, f) {
                        s++;
                        var S = (function (u, _) {
                            var w = u || _,
                              y = n[w];
                            if (!y)
                              throw new Error(
                                w + " is not a valid compression method !"
                              );
                            return y;
                          })(f.options.compression, p.compression),
                          c =
                            f.options.compressionOptions ||
                            p.compressionOptions ||
                            {},
                          h = f.dir,
                          o = f.date;
                        f._compressWorker(S, c)
                          .withStreamInfo("file", {
                            name: b,
                            dir: h,
                            date: o,
                            comment: f.comment || "",
                            unixPermissions: f.unixPermissions,
                            dosPermissions: f.dosPermissions,
                          })
                          .pipe(x);
                      }),
                        (x.entriesCount = s);
                    } catch (b) {
                      x.error(b);
                    }
                    return x;
                  };
                },
                { "../compressions": 3, "./ZipFileWorker": 8 },
              ],
              10: [
                function (t, a, i) {
                  function n() {
                    if (!(this instanceof n)) return new n();
                    if (arguments.length)
                      throw new Error(
                        "The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide."
                      );
                    (this.files = Object.create(null)),
                      (this.comment = null),
                      (this.root = ""),
                      (this.clone = function () {
                        var d = new n();
                        for (var l in this)
                          typeof this[l] != "function" && (d[l] = this[l]);
                        return d;
                      });
                  }
                  ((n.prototype = t("./object")).loadAsync = t("./load")),
                    (n.support = t("./support")),
                    (n.defaults = t("./defaults")),
                    (n.version = "3.10.1"),
                    (n.loadAsync = function (d, l) {
                      return new n().loadAsync(d, l);
                    }),
                    (n.external = t("./external")),
                    (a.exports = n);
                },
                {
                  "./defaults": 5,
                  "./external": 6,
                  "./load": 11,
                  "./object": 15,
                  "./support": 30,
                },
              ],
              11: [
                function (t, a, i) {
                  var n = t("./utils"),
                    d = t("./external"),
                    l = t("./utf8"),
                    p = t("./zipEntries"),
                    v = t("./stream/Crc32Probe"),
                    x = t("./nodejsUtils");
                  function s(b) {
                    return new d.Promise(function (f, S) {
                      var c = b.decompressed.getContentWorker().pipe(new v());
                      c.on("error", function (h) {
                        S(h);
                      })
                        .on("end", function () {
                          c.streamInfo.crc32 !== b.decompressed.crc32
                            ? S(new Error("Corrupted zip : CRC32 mismatch"))
                            : f();
                        })
                        .resume();
                    });
                  }
                  a.exports = function (b, f) {
                    var S = this;
                    return (
                      (f = n.extend(f || {}, {
                        base64: !1,
                        checkCRC32: !1,
                        optimizedBinaryString: !1,
                        createFolders: !1,
                        decodeFileName: l.utf8decode,
                      })),
                      x.isNode && x.isStream(b)
                        ? d.Promise.reject(
                            new Error(
                              "JSZip can't accept a stream when loading a zip file."
                            )
                          )
                        : n
                            .prepareContent(
                              "the loaded zip file",
                              b,
                              !0,
                              f.optimizedBinaryString,
                              f.base64
                            )
                            .then(function (c) {
                              var h = new p(f);
                              return h.load(c), h;
                            })
                            .then(function (c) {
                              var h = [d.Promise.resolve(c)],
                                o = c.files;
                              if (f.checkCRC32)
                                for (var u = 0; u < o.length; u++)
                                  h.push(s(o[u]));
                              return d.Promise.all(h);
                            })
                            .then(function (c) {
                              for (
                                var h = c.shift(), o = h.files, u = 0;
                                u < o.length;
                                u++
                              ) {
                                var _ = o[u],
                                  w = _.fileNameStr,
                                  y = n.resolve(_.fileNameStr);
                                S.file(y, _.decompressed, {
                                  binary: !0,
                                  optimizedBinaryString: !0,
                                  date: _.date,
                                  dir: _.dir,
                                  comment: _.fileCommentStr.length
                                    ? _.fileCommentStr
                                    : null,
                                  unixPermissions: _.unixPermissions,
                                  dosPermissions: _.dosPermissions,
                                  createFolders: f.createFolders,
                                }),
                                  _.dir || (S.file(y).unsafeOriginalName = w);
                              }
                              return (
                                h.zipComment.length &&
                                  (S.comment = h.zipComment),
                                S
                              );
                            })
                    );
                  };
                },
                {
                  "./external": 6,
                  "./nodejsUtils": 14,
                  "./stream/Crc32Probe": 25,
                  "./utf8": 31,
                  "./utils": 32,
                  "./zipEntries": 33,
                },
              ],
              12: [
                function (t, a, i) {
                  var n = t("../utils"),
                    d = t("../stream/GenericWorker");
                  function l(p, v) {
                    d.call(this, "Nodejs stream input adapter for " + p),
                      (this._upstreamEnded = !1),
                      this._bindStream(v);
                  }
                  n.inherits(l, d),
                    (l.prototype._bindStream = function (p) {
                      var v = this;
                      (this._stream = p).pause(),
                        p
                          .on("data", function (x) {
                            v.push({ data: x, meta: { percent: 0 } });
                          })
                          .on("error", function (x) {
                            v.isPaused ? (this.generatedError = x) : v.error(x);
                          })
                          .on("end", function () {
                            v.isPaused ? (v._upstreamEnded = !0) : v.end();
                          });
                    }),
                    (l.prototype.pause = function () {
                      return (
                        !!d.prototype.pause.call(this) &&
                        (this._stream.pause(), !0)
                      );
                    }),
                    (l.prototype.resume = function () {
                      return (
                        !!d.prototype.resume.call(this) &&
                        (this._upstreamEnded
                          ? this.end()
                          : this._stream.resume(),
                        !0)
                      );
                    }),
                    (a.exports = l);
                },
                { "../stream/GenericWorker": 28, "../utils": 32 },
              ],
              13: [
                function (t, a, i) {
                  var n = t("readable-stream").Readable;
                  function d(l, p, v) {
                    n.call(this, p), (this._helper = l);
                    var x = this;
                    l.on("data", function (s, b) {
                      x.push(s) || x._helper.pause(), v && v(b);
                    })
                      .on("error", function (s) {
                        x.emit("error", s);
                      })
                      .on("end", function () {
                        x.push(null);
                      });
                  }
                  t("../utils").inherits(d, n),
                    (d.prototype._read = function () {
                      this._helper.resume();
                    }),
                    (a.exports = d);
                },
                { "../utils": 32, "readable-stream": 16 },
              ],
              14: [
                function (t, a, i) {
                  a.exports = {
                    isNode: typeof Buffer < "u",
                    newBufferFrom: function (n, d) {
                      if (Buffer.from && Buffer.from !== Uint8Array.from)
                        return Buffer.from(n, d);
                      if (typeof n == "number")
                        throw new Error(
                          'The "data" argument must not be a number'
                        );
                      return new Buffer(n, d);
                    },
                    allocBuffer: function (n) {
                      if (Buffer.alloc) return Buffer.alloc(n);
                      var d = new Buffer(n);
                      return d.fill(0), d;
                    },
                    isBuffer: function (n) {
                      return Buffer.isBuffer(n);
                    },
                    isStream: function (n) {
                      return (
                        n &&
                        typeof n.on == "function" &&
                        typeof n.pause == "function" &&
                        typeof n.resume == "function"
                      );
                    },
                  };
                },
                {},
              ],
              15: [
                function (t, a, i) {
                  function n(y, T, I) {
                    var M,
                      O = l.getTypeOf(T),
                      U = l.extend(I || {}, x);
                    (U.date = U.date || new Date()),
                      U.compression !== null &&
                        (U.compression = U.compression.toUpperCase()),
                      typeof U.unixPermissions == "string" &&
                        (U.unixPermissions = parseInt(U.unixPermissions, 8)),
                      U.unixPermissions &&
                        16384 & U.unixPermissions &&
                        (U.dir = !0),
                      U.dosPermissions && 16 & U.dosPermissions && (U.dir = !0),
                      U.dir && (y = o(y)),
                      U.createFolders && (M = h(y)) && u.call(this, M, !0);
                    var J =
                      O === "string" && U.binary === !1 && U.base64 === !1;
                    (I && I.binary !== void 0) || (U.binary = !J),
                      ((T instanceof s && T.uncompressedSize === 0) ||
                        U.dir ||
                        !T ||
                        T.length === 0) &&
                        ((U.base64 = !1),
                        (U.binary = !0),
                        (T = ""),
                        (U.compression = "STORE"),
                        (O = "string"));
                    var C = null;
                    C =
                      T instanceof s || T instanceof p
                        ? T
                        : S.isNode && S.isStream(T)
                        ? new c(y, T)
                        : l.prepareContent(
                            y,
                            T,
                            U.binary,
                            U.optimizedBinaryString,
                            U.base64
                          );
                    var D = new b(y, C, U);
                    this.files[y] = D;
                  }
                  var d = t("./utf8"),
                    l = t("./utils"),
                    p = t("./stream/GenericWorker"),
                    v = t("./stream/StreamHelper"),
                    x = t("./defaults"),
                    s = t("./compressedObject"),
                    b = t("./zipObject"),
                    f = t("./generate"),
                    S = t("./nodejsUtils"),
                    c = t("./nodejs/NodejsStreamInputAdapter"),
                    h = function (y) {
                      y.slice(-1) === "/" && (y = y.substring(0, y.length - 1));
                      var T = y.lastIndexOf("/");
                      return 0 < T ? y.substring(0, T) : "";
                    },
                    o = function (y) {
                      return y.slice(-1) !== "/" && (y += "/"), y;
                    },
                    u = function (y, T) {
                      return (
                        (T = T !== void 0 ? T : x.createFolders),
                        (y = o(y)),
                        this.files[y] ||
                          n.call(this, y, null, { dir: !0, createFolders: T }),
                        this.files[y]
                      );
                    };
                  function _(y) {
                    return (
                      Object.prototype.toString.call(y) === "[object RegExp]"
                    );
                  }
                  var w = {
                    load: function () {
                      throw new Error(
                        "This method has been removed in JSZip 3.0, please check the upgrade guide."
                      );
                    },
                    forEach: function (y) {
                      var T, I, M;
                      for (T in this.files)
                        (M = this.files[T]),
                          (I = T.slice(this.root.length, T.length)) &&
                            T.slice(0, this.root.length) === this.root &&
                            y(I, M);
                    },
                    filter: function (y) {
                      var T = [];
                      return (
                        this.forEach(function (I, M) {
                          y(I, M) && T.push(M);
                        }),
                        T
                      );
                    },
                    file: function (y, T, I) {
                      if (arguments.length !== 1)
                        return (y = this.root + y), n.call(this, y, T, I), this;
                      if (_(y)) {
                        var M = y;
                        return this.filter(function (U, J) {
                          return !J.dir && M.test(U);
                        });
                      }
                      var O = this.files[this.root + y];
                      return O && !O.dir ? O : null;
                    },
                    folder: function (y) {
                      if (!y) return this;
                      if (_(y))
                        return this.filter(function (O, U) {
                          return U.dir && y.test(O);
                        });
                      var T = this.root + y,
                        I = u.call(this, T),
                        M = this.clone();
                      return (M.root = I.name), M;
                    },
                    remove: function (y) {
                      y = this.root + y;
                      var T = this.files[y];
                      if (
                        (T ||
                          (y.slice(-1) !== "/" && (y += "/"),
                          (T = this.files[y])),
                        T && !T.dir)
                      )
                        delete this.files[y];
                      else
                        for (
                          var I = this.filter(function (O, U) {
                              return U.name.slice(0, y.length) === y;
                            }),
                            M = 0;
                          M < I.length;
                          M++
                        )
                          delete this.files[I[M].name];
                      return this;
                    },
                    generate: function () {
                      throw new Error(
                        "This method has been removed in JSZip 3.0, please check the upgrade guide."
                      );
                    },
                    generateInternalStream: function (y) {
                      var T,
                        I = {};
                      try {
                        if (
                          (((I = l.extend(y || {}, {
                            streamFiles: !1,
                            compression: "STORE",
                            compressionOptions: null,
                            type: "",
                            platform: "DOS",
                            comment: null,
                            mimeType: "application/zip",
                            encodeFileName: d.utf8encode,
                          })).type = I.type.toLowerCase()),
                          (I.compression = I.compression.toUpperCase()),
                          I.type === "binarystring" && (I.type = "string"),
                          !I.type)
                        )
                          throw new Error("No output type specified.");
                        l.checkSupport(I.type),
                          (I.platform !== "darwin" &&
                            I.platform !== "freebsd" &&
                            I.platform !== "linux" &&
                            I.platform !== "sunos") ||
                            (I.platform = "UNIX"),
                          I.platform === "win32" && (I.platform = "DOS");
                        var M = I.comment || this.comment || "";
                        T = f.generateWorker(this, I, M);
                      } catch (O) {
                        (T = new p("error")).error(O);
                      }
                      return new v(T, I.type || "string", I.mimeType);
                    },
                    generateAsync: function (y, T) {
                      return this.generateInternalStream(y).accumulate(T);
                    },
                    generateNodeStream: function (y, T) {
                      return (
                        (y = y || {}).type || (y.type = "nodebuffer"),
                        this.generateInternalStream(y).toNodejsStream(T)
                      );
                    },
                  };
                  a.exports = w;
                },
                {
                  "./compressedObject": 2,
                  "./defaults": 5,
                  "./generate": 9,
                  "./nodejs/NodejsStreamInputAdapter": 12,
                  "./nodejsUtils": 14,
                  "./stream/GenericWorker": 28,
                  "./stream/StreamHelper": 29,
                  "./utf8": 31,
                  "./utils": 32,
                  "./zipObject": 35,
                },
              ],
              16: [
                function (t, a, i) {
                  a.exports = t("stream");
                },
                { stream: void 0 },
              ],
              17: [
                function (t, a, i) {
                  var n = t("./DataReader");
                  function d(l) {
                    n.call(this, l);
                    for (var p = 0; p < this.data.length; p++)
                      l[p] = 255 & l[p];
                  }
                  t("../utils").inherits(d, n),
                    (d.prototype.byteAt = function (l) {
                      return this.data[this.zero + l];
                    }),
                    (d.prototype.lastIndexOfSignature = function (l) {
                      for (
                        var p = l.charCodeAt(0),
                          v = l.charCodeAt(1),
                          x = l.charCodeAt(2),
                          s = l.charCodeAt(3),
                          b = this.length - 4;
                        0 <= b;
                        --b
                      )
                        if (
                          this.data[b] === p &&
                          this.data[b + 1] === v &&
                          this.data[b + 2] === x &&
                          this.data[b + 3] === s
                        )
                          return b - this.zero;
                      return -1;
                    }),
                    (d.prototype.readAndCheckSignature = function (l) {
                      var p = l.charCodeAt(0),
                        v = l.charCodeAt(1),
                        x = l.charCodeAt(2),
                        s = l.charCodeAt(3),
                        b = this.readData(4);
                      return (
                        p === b[0] && v === b[1] && x === b[2] && s === b[3]
                      );
                    }),
                    (d.prototype.readData = function (l) {
                      if ((this.checkOffset(l), l === 0)) return [];
                      var p = this.data.slice(
                        this.zero + this.index,
                        this.zero + this.index + l
                      );
                      return (this.index += l), p;
                    }),
                    (a.exports = d);
                },
                { "../utils": 32, "./DataReader": 18 },
              ],
              18: [
                function (t, a, i) {
                  var n = t("../utils");
                  function d(l) {
                    (this.data = l),
                      (this.length = l.length),
                      (this.index = 0),
                      (this.zero = 0);
                  }
                  (d.prototype = {
                    checkOffset: function (l) {
                      this.checkIndex(this.index + l);
                    },
                    checkIndex: function (l) {
                      if (this.length < this.zero + l || l < 0)
                        throw new Error(
                          "End of data reached (data length = " +
                            this.length +
                            ", asked index = " +
                            l +
                            "). Corrupted zip ?"
                        );
                    },
                    setIndex: function (l) {
                      this.checkIndex(l), (this.index = l);
                    },
                    skip: function (l) {
                      this.setIndex(this.index + l);
                    },
                    byteAt: function () {},
                    readInt: function (l) {
                      var p,
                        v = 0;
                      for (
                        this.checkOffset(l), p = this.index + l - 1;
                        p >= this.index;
                        p--
                      )
                        v = (v << 8) + this.byteAt(p);
                      return (this.index += l), v;
                    },
                    readString: function (l) {
                      return n.transformTo("string", this.readData(l));
                    },
                    readData: function () {},
                    lastIndexOfSignature: function () {},
                    readAndCheckSignature: function () {},
                    readDate: function () {
                      var l = this.readInt(4);
                      return new Date(
                        Date.UTC(
                          1980 + ((l >> 25) & 127),
                          ((l >> 21) & 15) - 1,
                          (l >> 16) & 31,
                          (l >> 11) & 31,
                          (l >> 5) & 63,
                          (31 & l) << 1
                        )
                      );
                    },
                  }),
                    (a.exports = d);
                },
                { "../utils": 32 },
              ],
              19: [
                function (t, a, i) {
                  var n = t("./Uint8ArrayReader");
                  function d(l) {
                    n.call(this, l);
                  }
                  t("../utils").inherits(d, n),
                    (d.prototype.readData = function (l) {
                      this.checkOffset(l);
                      var p = this.data.slice(
                        this.zero + this.index,
                        this.zero + this.index + l
                      );
                      return (this.index += l), p;
                    }),
                    (a.exports = d);
                },
                { "../utils": 32, "./Uint8ArrayReader": 21 },
              ],
              20: [
                function (t, a, i) {
                  var n = t("./DataReader");
                  function d(l) {
                    n.call(this, l);
                  }
                  t("../utils").inherits(d, n),
                    (d.prototype.byteAt = function (l) {
                      return this.data.charCodeAt(this.zero + l);
                    }),
                    (d.prototype.lastIndexOfSignature = function (l) {
                      return this.data.lastIndexOf(l) - this.zero;
                    }),
                    (d.prototype.readAndCheckSignature = function (l) {
                      return l === this.readData(4);
                    }),
                    (d.prototype.readData = function (l) {
                      this.checkOffset(l);
                      var p = this.data.slice(
                        this.zero + this.index,
                        this.zero + this.index + l
                      );
                      return (this.index += l), p;
                    }),
                    (a.exports = d);
                },
                { "../utils": 32, "./DataReader": 18 },
              ],
              21: [
                function (t, a, i) {
                  var n = t("./ArrayReader");
                  function d(l) {
                    n.call(this, l);
                  }
                  t("../utils").inherits(d, n),
                    (d.prototype.readData = function (l) {
                      if ((this.checkOffset(l), l === 0))
                        return new Uint8Array(0);
                      var p = this.data.subarray(
                        this.zero + this.index,
                        this.zero + this.index + l
                      );
                      return (this.index += l), p;
                    }),
                    (a.exports = d);
                },
                { "../utils": 32, "./ArrayReader": 17 },
              ],
              22: [
                function (t, a, i) {
                  var n = t("../utils"),
                    d = t("../support"),
                    l = t("./ArrayReader"),
                    p = t("./StringReader"),
                    v = t("./NodeBufferReader"),
                    x = t("./Uint8ArrayReader");
                  a.exports = function (s) {
                    var b = n.getTypeOf(s);
                    return (
                      n.checkSupport(b),
                      b !== "string" || d.uint8array
                        ? b === "nodebuffer"
                          ? new v(s)
                          : d.uint8array
                          ? new x(n.transformTo("uint8array", s))
                          : new l(n.transformTo("array", s))
                        : new p(s)
                    );
                  };
                },
                {
                  "../support": 30,
                  "../utils": 32,
                  "./ArrayReader": 17,
                  "./NodeBufferReader": 19,
                  "./StringReader": 20,
                  "./Uint8ArrayReader": 21,
                },
              ],
              23: [
                function (t, a, i) {
                  (i.LOCAL_FILE_HEADER = "PK"),
                    (i.CENTRAL_FILE_HEADER = "PK"),
                    (i.CENTRAL_DIRECTORY_END = "PK"),
                    (i.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07"),
                    (i.ZIP64_CENTRAL_DIRECTORY_END = "PK"),
                    (i.DATA_DESCRIPTOR = "PK\x07\b");
                },
                {},
              ],
              24: [
                function (t, a, i) {
                  var n = t("./GenericWorker"),
                    d = t("../utils");
                  function l(p) {
                    n.call(this, "ConvertWorker to " + p), (this.destType = p);
                  }
                  d.inherits(l, n),
                    (l.prototype.processChunk = function (p) {
                      this.push({
                        data: d.transformTo(this.destType, p.data),
                        meta: p.meta,
                      });
                    }),
                    (a.exports = l);
                },
                { "../utils": 32, "./GenericWorker": 28 },
              ],
              25: [
                function (t, a, i) {
                  var n = t("./GenericWorker"),
                    d = t("../crc32");
                  function l() {
                    n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
                  }
                  t("../utils").inherits(l, n),
                    (l.prototype.processChunk = function (p) {
                      (this.streamInfo.crc32 = d(
                        p.data,
                        this.streamInfo.crc32 || 0
                      )),
                        this.push(p);
                    }),
                    (a.exports = l);
                },
                { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 },
              ],
              26: [
                function (t, a, i) {
                  var n = t("../utils"),
                    d = t("./GenericWorker");
                  function l(p) {
                    d.call(this, "DataLengthProbe for " + p),
                      (this.propName = p),
                      this.withStreamInfo(p, 0);
                  }
                  n.inherits(l, d),
                    (l.prototype.processChunk = function (p) {
                      if (p) {
                        var v = this.streamInfo[this.propName] || 0;
                        this.streamInfo[this.propName] = v + p.data.length;
                      }
                      d.prototype.processChunk.call(this, p);
                    }),
                    (a.exports = l);
                },
                { "../utils": 32, "./GenericWorker": 28 },
              ],
              27: [
                function (t, a, i) {
                  var n = t("../utils"),
                    d = t("./GenericWorker");
                  function l(p) {
                    d.call(this, "DataWorker");
                    var v = this;
                    (this.dataIsReady = !1),
                      (this.index = 0),
                      (this.max = 0),
                      (this.data = null),
                      (this.type = ""),
                      (this._tickScheduled = !1),
                      p.then(
                        function (x) {
                          (v.dataIsReady = !0),
                            (v.data = x),
                            (v.max = (x && x.length) || 0),
                            (v.type = n.getTypeOf(x)),
                            v.isPaused || v._tickAndRepeat();
                        },
                        function (x) {
                          v.error(x);
                        }
                      );
                  }
                  n.inherits(l, d),
                    (l.prototype.cleanUp = function () {
                      d.prototype.cleanUp.call(this), (this.data = null);
                    }),
                    (l.prototype.resume = function () {
                      return (
                        !!d.prototype.resume.call(this) &&
                        (!this._tickScheduled &&
                          this.dataIsReady &&
                          ((this._tickScheduled = !0),
                          n.delay(this._tickAndRepeat, [], this)),
                        !0)
                      );
                    }),
                    (l.prototype._tickAndRepeat = function () {
                      (this._tickScheduled = !1),
                        this.isPaused ||
                          this.isFinished ||
                          (this._tick(),
                          this.isFinished ||
                            (n.delay(this._tickAndRepeat, [], this),
                            (this._tickScheduled = !0)));
                    }),
                    (l.prototype._tick = function () {
                      if (this.isPaused || this.isFinished) return !1;
                      var p = null,
                        v = Math.min(this.max, this.index + 16384);
                      if (this.index >= this.max) return this.end();
                      switch (this.type) {
                        case "string":
                          p = this.data.substring(this.index, v);
                          break;
                        case "uint8array":
                          p = this.data.subarray(this.index, v);
                          break;
                        case "array":
                        case "nodebuffer":
                          p = this.data.slice(this.index, v);
                      }
                      return (
                        (this.index = v),
                        this.push({
                          data: p,
                          meta: {
                            percent: this.max
                              ? (this.index / this.max) * 100
                              : 0,
                          },
                        })
                      );
                    }),
                    (a.exports = l);
                },
                { "../utils": 32, "./GenericWorker": 28 },
              ],
              28: [
                function (t, a, i) {
                  function n(d) {
                    (this.name = d || "default"),
                      (this.streamInfo = {}),
                      (this.generatedError = null),
                      (this.extraStreamInfo = {}),
                      (this.isPaused = !0),
                      (this.isFinished = !1),
                      (this.isLocked = !1),
                      (this._listeners = { data: [], end: [], error: [] }),
                      (this.previous = null);
                  }
                  (n.prototype = {
                    push: function (d) {
                      this.emit("data", d);
                    },
                    end: function () {
                      if (this.isFinished) return !1;
                      this.flush();
                      try {
                        this.emit("end"),
                          this.cleanUp(),
                          (this.isFinished = !0);
                      } catch (d) {
                        this.emit("error", d);
                      }
                      return !0;
                    },
                    error: function (d) {
                      return (
                        !this.isFinished &&
                        (this.isPaused
                          ? (this.generatedError = d)
                          : ((this.isFinished = !0),
                            this.emit("error", d),
                            this.previous && this.previous.error(d),
                            this.cleanUp()),
                        !0)
                      );
                    },
                    on: function (d, l) {
                      return this._listeners[d].push(l), this;
                    },
                    cleanUp: function () {
                      (this.streamInfo =
                        this.generatedError =
                        this.extraStreamInfo =
                          null),
                        (this._listeners = []);
                    },
                    emit: function (d, l) {
                      if (this._listeners[d])
                        for (var p = 0; p < this._listeners[d].length; p++)
                          this._listeners[d][p].call(this, l);
                    },
                    pipe: function (d) {
                      return d.registerPrevious(this);
                    },
                    registerPrevious: function (d) {
                      if (this.isLocked)
                        throw new Error(
                          "The stream '" + this + "' has already been used."
                        );
                      (this.streamInfo = d.streamInfo),
                        this.mergeStreamInfo(),
                        (this.previous = d);
                      var l = this;
                      return (
                        d.on("data", function (p) {
                          l.processChunk(p);
                        }),
                        d.on("end", function () {
                          l.end();
                        }),
                        d.on("error", function (p) {
                          l.error(p);
                        }),
                        this
                      );
                    },
                    pause: function () {
                      return (
                        !this.isPaused &&
                        !this.isFinished &&
                        ((this.isPaused = !0),
                        this.previous && this.previous.pause(),
                        !0)
                      );
                    },
                    resume: function () {
                      if (!this.isPaused || this.isFinished) return !1;
                      var d = (this.isPaused = !1);
                      return (
                        this.generatedError &&
                          (this.error(this.generatedError), (d = !0)),
                        this.previous && this.previous.resume(),
                        !d
                      );
                    },
                    flush: function () {},
                    processChunk: function (d) {
                      this.push(d);
                    },
                    withStreamInfo: function (d, l) {
                      return (
                        (this.extraStreamInfo[d] = l),
                        this.mergeStreamInfo(),
                        this
                      );
                    },
                    mergeStreamInfo: function () {
                      for (var d in this.extraStreamInfo)
                        Object.prototype.hasOwnProperty.call(
                          this.extraStreamInfo,
                          d
                        ) && (this.streamInfo[d] = this.extraStreamInfo[d]);
                    },
                    lock: function () {
                      if (this.isLocked)
                        throw new Error(
                          "The stream '" + this + "' has already been used."
                        );
                      (this.isLocked = !0),
                        this.previous && this.previous.lock();
                    },
                    toString: function () {
                      var d = "Worker " + this.name;
                      return this.previous ? this.previous + " -> " + d : d;
                    },
                  }),
                    (a.exports = n);
                },
                {},
              ],
              29: [
                function (t, a, i) {
                  var n = t("../utils"),
                    d = t("./ConvertWorker"),
                    l = t("./GenericWorker"),
                    p = t("../base64"),
                    v = t("../support"),
                    x = t("../external"),
                    s = null;
                  if (v.nodestream)
                    try {
                      s = t("../nodejs/NodejsStreamOutputAdapter");
                    } catch {}
                  function b(S, c) {
                    return new x.Promise(function (h, o) {
                      var u = [],
                        _ = S._internalType,
                        w = S._outputType,
                        y = S._mimeType;
                      S.on("data", function (T, I) {
                        u.push(T), c && c(I);
                      })
                        .on("error", function (T) {
                          (u = []), o(T);
                        })
                        .on("end", function () {
                          try {
                            var T = (function (I, M, O) {
                              switch (I) {
                                case "blob":
                                  return n.newBlob(
                                    n.transformTo("arraybuffer", M),
                                    O
                                  );
                                case "base64":
                                  return p.encode(M);
                                default:
                                  return n.transformTo(I, M);
                              }
                            })(
                              w,
                              (function (I, M) {
                                var O,
                                  U = 0,
                                  J = null,
                                  C = 0;
                                for (O = 0; O < M.length; O++) C += M[O].length;
                                switch (I) {
                                  case "string":
                                    return M.join("");
                                  case "array":
                                    return Array.prototype.concat.apply([], M);
                                  case "uint8array":
                                    for (
                                      J = new Uint8Array(C), O = 0;
                                      O < M.length;
                                      O++
                                    )
                                      J.set(M[O], U), (U += M[O].length);
                                    return J;
                                  case "nodebuffer":
                                    return Buffer.concat(M);
                                  default:
                                    throw new Error(
                                      "concat : unsupported type '" + I + "'"
                                    );
                                }
                              })(_, u),
                              y
                            );
                            h(T);
                          } catch (I) {
                            o(I);
                          }
                          u = [];
                        })
                        .resume();
                    });
                  }
                  function f(S, c, h) {
                    var o = c;
                    switch (c) {
                      case "blob":
                      case "arraybuffer":
                        o = "uint8array";
                        break;
                      case "base64":
                        o = "string";
                    }
                    try {
                      (this._internalType = o),
                        (this._outputType = c),
                        (this._mimeType = h),
                        n.checkSupport(o),
                        (this._worker = S.pipe(new d(o))),
                        S.lock();
                    } catch (u) {
                      (this._worker = new l("error")), this._worker.error(u);
                    }
                  }
                  (f.prototype = {
                    accumulate: function (S) {
                      return b(this, S);
                    },
                    on: function (S, c) {
                      var h = this;
                      return (
                        S === "data"
                          ? this._worker.on(S, function (o) {
                              c.call(h, o.data, o.meta);
                            })
                          : this._worker.on(S, function () {
                              n.delay(c, arguments, h);
                            }),
                        this
                      );
                    },
                    resume: function () {
                      return (
                        n.delay(this._worker.resume, [], this._worker), this
                      );
                    },
                    pause: function () {
                      return this._worker.pause(), this;
                    },
                    toNodejsStream: function (S) {
                      if (
                        (n.checkSupport("nodestream"),
                        this._outputType !== "nodebuffer")
                      )
                        throw new Error(
                          this._outputType + " is not supported by this method"
                        );
                      return new s(
                        this,
                        { objectMode: this._outputType !== "nodebuffer" },
                        S
                      );
                    },
                  }),
                    (a.exports = f);
                },
                {
                  "../base64": 1,
                  "../external": 6,
                  "../nodejs/NodejsStreamOutputAdapter": 13,
                  "../support": 30,
                  "../utils": 32,
                  "./ConvertWorker": 24,
                  "./GenericWorker": 28,
                },
              ],
              30: [
                function (t, a, i) {
                  if (
                    ((i.base64 = !0),
                    (i.array = !0),
                    (i.string = !0),
                    (i.arraybuffer =
                      typeof ArrayBuffer < "u" && typeof Uint8Array < "u"),
                    (i.nodebuffer = typeof Buffer < "u"),
                    (i.uint8array = typeof Uint8Array < "u"),
                    typeof ArrayBuffer > "u")
                  )
                    i.blob = !1;
                  else {
                    var n = new ArrayBuffer(0);
                    try {
                      i.blob =
                        new Blob([n], { type: "application/zip" }).size === 0;
                    } catch {
                      try {
                        var d = new (self.BlobBuilder ||
                          self.WebKitBlobBuilder ||
                          self.MozBlobBuilder ||
                          self.MSBlobBuilder)();
                        d.append(n),
                          (i.blob = d.getBlob("application/zip").size === 0);
                      } catch {
                        i.blob = !1;
                      }
                    }
                  }
                  try {
                    i.nodestream = !!t("readable-stream").Readable;
                  } catch {
                    i.nodestream = !1;
                  }
                },
                { "readable-stream": 16 },
              ],
              31: [
                function (t, a, i) {
                  for (
                    var n = t("./utils"),
                      d = t("./support"),
                      l = t("./nodejsUtils"),
                      p = t("./stream/GenericWorker"),
                      v = new Array(256),
                      x = 0;
                    x < 256;
                    x++
                  )
                    v[x] =
                      252 <= x
                        ? 6
                        : 248 <= x
                        ? 5
                        : 240 <= x
                        ? 4
                        : 224 <= x
                        ? 3
                        : 192 <= x
                        ? 2
                        : 1;
                  v[254] = v[254] = 1;
                  function s() {
                    p.call(this, "utf-8 decode"), (this.leftOver = null);
                  }
                  function b() {
                    p.call(this, "utf-8 encode");
                  }
                  (i.utf8encode = function (f) {
                    return d.nodebuffer
                      ? l.newBufferFrom(f, "utf-8")
                      : (function (S) {
                          var c,
                            h,
                            o,
                            u,
                            _,
                            w = S.length,
                            y = 0;
                          for (u = 0; u < w; u++)
                            (64512 & (h = S.charCodeAt(u))) == 55296 &&
                              u + 1 < w &&
                              (64512 & (o = S.charCodeAt(u + 1))) == 56320 &&
                              ((h = 65536 + ((h - 55296) << 10) + (o - 56320)),
                              u++),
                              (y +=
                                h < 128 ? 1 : h < 2048 ? 2 : h < 65536 ? 3 : 4);
                          for (
                            c = d.uint8array ? new Uint8Array(y) : new Array(y),
                              u = _ = 0;
                            _ < y;
                            u++
                          )
                            (64512 & (h = S.charCodeAt(u))) == 55296 &&
                              u + 1 < w &&
                              (64512 & (o = S.charCodeAt(u + 1))) == 56320 &&
                              ((h = 65536 + ((h - 55296) << 10) + (o - 56320)),
                              u++),
                              h < 128
                                ? (c[_++] = h)
                                : (h < 2048
                                    ? (c[_++] = 192 | (h >>> 6))
                                    : (h < 65536
                                        ? (c[_++] = 224 | (h >>> 12))
                                        : ((c[_++] = 240 | (h >>> 18)),
                                          (c[_++] = 128 | ((h >>> 12) & 63))),
                                      (c[_++] = 128 | ((h >>> 6) & 63))),
                                  (c[_++] = 128 | (63 & h)));
                          return c;
                        })(f);
                  }),
                    (i.utf8decode = function (f) {
                      return d.nodebuffer
                        ? n.transformTo("nodebuffer", f).toString("utf-8")
                        : (function (S) {
                            var c,
                              h,
                              o,
                              u,
                              _ = S.length,
                              w = new Array(2 * _);
                            for (c = h = 0; c < _; )
                              if ((o = S[c++]) < 128) w[h++] = o;
                              else if (4 < (u = v[o]))
                                (w[h++] = 65533), (c += u - 1);
                              else {
                                for (
                                  o &= u === 2 ? 31 : u === 3 ? 15 : 7;
                                  1 < u && c < _;

                                )
                                  (o = (o << 6) | (63 & S[c++])), u--;
                                1 < u
                                  ? (w[h++] = 65533)
                                  : o < 65536
                                  ? (w[h++] = o)
                                  : ((o -= 65536),
                                    (w[h++] = 55296 | ((o >> 10) & 1023)),
                                    (w[h++] = 56320 | (1023 & o)));
                              }
                            return (
                              w.length !== h &&
                                (w.subarray
                                  ? (w = w.subarray(0, h))
                                  : (w.length = h)),
                              n.applyFromCharCode(w)
                            );
                          })(
                            (f = n.transformTo(
                              d.uint8array ? "uint8array" : "array",
                              f
                            ))
                          );
                    }),
                    n.inherits(s, p),
                    (s.prototype.processChunk = function (f) {
                      var S = n.transformTo(
                        d.uint8array ? "uint8array" : "array",
                        f.data
                      );
                      if (this.leftOver && this.leftOver.length) {
                        if (d.uint8array) {
                          var c = S;
                          (S = new Uint8Array(
                            c.length + this.leftOver.length
                          )).set(this.leftOver, 0),
                            S.set(c, this.leftOver.length);
                        } else S = this.leftOver.concat(S);
                        this.leftOver = null;
                      }
                      var h = (function (u, _) {
                          var w;
                          for (
                            (_ = _ || u.length) > u.length && (_ = u.length),
                              w = _ - 1;
                            0 <= w && (192 & u[w]) == 128;

                          )
                            w--;
                          return w < 0 || w === 0 ? _ : w + v[u[w]] > _ ? w : _;
                        })(S),
                        o = S;
                      h !== S.length &&
                        (d.uint8array
                          ? ((o = S.subarray(0, h)),
                            (this.leftOver = S.subarray(h, S.length)))
                          : ((o = S.slice(0, h)),
                            (this.leftOver = S.slice(h, S.length)))),
                        this.push({ data: i.utf8decode(o), meta: f.meta });
                    }),
                    (s.prototype.flush = function () {
                      this.leftOver &&
                        this.leftOver.length &&
                        (this.push({
                          data: i.utf8decode(this.leftOver),
                          meta: {},
                        }),
                        (this.leftOver = null));
                    }),
                    (i.Utf8DecodeWorker = s),
                    n.inherits(b, p),
                    (b.prototype.processChunk = function (f) {
                      this.push({ data: i.utf8encode(f.data), meta: f.meta });
                    }),
                    (i.Utf8EncodeWorker = b);
                },
                {
                  "./nodejsUtils": 14,
                  "./stream/GenericWorker": 28,
                  "./support": 30,
                  "./utils": 32,
                },
              ],
              32: [
                function (t, a, i) {
                  var n = t("./support"),
                    d = t("./base64"),
                    l = t("./nodejsUtils"),
                    p = t("./external");
                  function v(c) {
                    return c;
                  }
                  function x(c, h) {
                    for (var o = 0; o < c.length; ++o)
                      h[o] = 255 & c.charCodeAt(o);
                    return h;
                  }
                  t("setimmediate"),
                    (i.newBlob = function (c, h) {
                      i.checkSupport("blob");
                      try {
                        return new Blob([c], { type: h });
                      } catch {
                        try {
                          var o = new (self.BlobBuilder ||
                            self.WebKitBlobBuilder ||
                            self.MozBlobBuilder ||
                            self.MSBlobBuilder)();
                          return o.append(c), o.getBlob(h);
                        } catch {
                          throw new Error("Bug : can't construct the Blob.");
                        }
                      }
                    });
                  var s = {
                    stringifyByChunk: function (c, h, o) {
                      var u = [],
                        _ = 0,
                        w = c.length;
                      if (w <= o) return String.fromCharCode.apply(null, c);
                      for (; _ < w; )
                        h === "array" || h === "nodebuffer"
                          ? u.push(
                              String.fromCharCode.apply(
                                null,
                                c.slice(_, Math.min(_ + o, w))
                              )
                            )
                          : u.push(
                              String.fromCharCode.apply(
                                null,
                                c.subarray(_, Math.min(_ + o, w))
                              )
                            ),
                          (_ += o);
                      return u.join("");
                    },
                    stringifyByChar: function (c) {
                      for (var h = "", o = 0; o < c.length; o++)
                        h += String.fromCharCode(c[o]);
                      return h;
                    },
                    applyCanBeUsed: {
                      uint8array: (function () {
                        try {
                          return (
                            n.uint8array &&
                            String.fromCharCode.apply(null, new Uint8Array(1))
                              .length === 1
                          );
                        } catch {
                          return !1;
                        }
                      })(),
                      nodebuffer: (function () {
                        try {
                          return (
                            n.nodebuffer &&
                            String.fromCharCode.apply(null, l.allocBuffer(1))
                              .length === 1
                          );
                        } catch {
                          return !1;
                        }
                      })(),
                    },
                  };
                  function b(c) {
                    var h = 65536,
                      o = i.getTypeOf(c),
                      u = !0;
                    if (
                      (o === "uint8array"
                        ? (u = s.applyCanBeUsed.uint8array)
                        : o === "nodebuffer" &&
                          (u = s.applyCanBeUsed.nodebuffer),
                      u)
                    )
                      for (; 1 < h; )
                        try {
                          return s.stringifyByChunk(c, o, h);
                        } catch {
                          h = Math.floor(h / 2);
                        }
                    return s.stringifyByChar(c);
                  }
                  function f(c, h) {
                    for (var o = 0; o < c.length; o++) h[o] = c[o];
                    return h;
                  }
                  i.applyFromCharCode = b;
                  var S = {};
                  (S.string = {
                    string: v,
                    array: function (c) {
                      return x(c, new Array(c.length));
                    },
                    arraybuffer: function (c) {
                      return S.string.uint8array(c).buffer;
                    },
                    uint8array: function (c) {
                      return x(c, new Uint8Array(c.length));
                    },
                    nodebuffer: function (c) {
                      return x(c, l.allocBuffer(c.length));
                    },
                  }),
                    (S.array = {
                      string: b,
                      array: v,
                      arraybuffer: function (c) {
                        return new Uint8Array(c).buffer;
                      },
                      uint8array: function (c) {
                        return new Uint8Array(c);
                      },
                      nodebuffer: function (c) {
                        return l.newBufferFrom(c);
                      },
                    }),
                    (S.arraybuffer = {
                      string: function (c) {
                        return b(new Uint8Array(c));
                      },
                      array: function (c) {
                        return f(new Uint8Array(c), new Array(c.byteLength));
                      },
                      arraybuffer: v,
                      uint8array: function (c) {
                        return new Uint8Array(c);
                      },
                      nodebuffer: function (c) {
                        return l.newBufferFrom(new Uint8Array(c));
                      },
                    }),
                    (S.uint8array = {
                      string: b,
                      array: function (c) {
                        return f(c, new Array(c.length));
                      },
                      arraybuffer: function (c) {
                        return c.buffer;
                      },
                      uint8array: v,
                      nodebuffer: function (c) {
                        return l.newBufferFrom(c);
                      },
                    }),
                    (S.nodebuffer = {
                      string: b,
                      array: function (c) {
                        return f(c, new Array(c.length));
                      },
                      arraybuffer: function (c) {
                        return S.nodebuffer.uint8array(c).buffer;
                      },
                      uint8array: function (c) {
                        return f(c, new Uint8Array(c.length));
                      },
                      nodebuffer: v,
                    }),
                    (i.transformTo = function (c, h) {
                      if (((h = h || ""), !c)) return h;
                      i.checkSupport(c);
                      var o = i.getTypeOf(h);
                      return S[o][c](h);
                    }),
                    (i.resolve = function (c) {
                      for (
                        var h = c.split("/"), o = [], u = 0;
                        u < h.length;
                        u++
                      ) {
                        var _ = h[u];
                        _ === "." ||
                          (_ === "" && u !== 0 && u !== h.length - 1) ||
                          (_ === ".." ? o.pop() : o.push(_));
                      }
                      return o.join("/");
                    }),
                    (i.getTypeOf = function (c) {
                      return typeof c == "string"
                        ? "string"
                        : Object.prototype.toString.call(c) === "[object Array]"
                        ? "array"
                        : n.nodebuffer && l.isBuffer(c)
                        ? "nodebuffer"
                        : n.uint8array && c instanceof Uint8Array
                        ? "uint8array"
                        : n.arraybuffer && c instanceof ArrayBuffer
                        ? "arraybuffer"
                        : void 0;
                    }),
                    (i.checkSupport = function (c) {
                      if (!n[c.toLowerCase()])
                        throw new Error(
                          c + " is not supported by this platform"
                        );
                    }),
                    (i.MAX_VALUE_16BITS = 65535),
                    (i.MAX_VALUE_32BITS = -1),
                    (i.pretty = function (c) {
                      var h,
                        o,
                        u = "";
                      for (o = 0; o < (c || "").length; o++)
                        u +=
                          "\\x" +
                          ((h = c.charCodeAt(o)) < 16 ? "0" : "") +
                          h.toString(16).toUpperCase();
                      return u;
                    }),
                    (i.delay = function (c, h, o) {
                      setImmediate(function () {
                        c.apply(o || null, h || []);
                      });
                    }),
                    (i.inherits = function (c, h) {
                      function o() {}
                      (o.prototype = h.prototype), (c.prototype = new o());
                    }),
                    (i.extend = function () {
                      var c,
                        h,
                        o = {};
                      for (c = 0; c < arguments.length; c++)
                        for (h in arguments[c])
                          Object.prototype.hasOwnProperty.call(
                            arguments[c],
                            h
                          ) &&
                            o[h] === void 0 &&
                            (o[h] = arguments[c][h]);
                      return o;
                    }),
                    (i.prepareContent = function (c, h, o, u, _) {
                      return p.Promise.resolve(h)
                        .then(function (w) {
                          return n.blob &&
                            (w instanceof Blob ||
                              ["[object File]", "[object Blob]"].indexOf(
                                Object.prototype.toString.call(w)
                              ) !== -1) &&
                            typeof FileReader < "u"
                            ? new p.Promise(function (y, T) {
                                var I = new FileReader();
                                (I.onload = function (M) {
                                  y(M.target.result);
                                }),
                                  (I.onerror = function (M) {
                                    T(M.target.error);
                                  }),
                                  I.readAsArrayBuffer(w);
                              })
                            : w;
                        })
                        .then(function (w) {
                          var y = i.getTypeOf(w);
                          return y
                            ? (y === "arraybuffer"
                                ? (w = i.transformTo("uint8array", w))
                                : y === "string" &&
                                  (_
                                    ? (w = d.decode(w))
                                    : o &&
                                      u !== !0 &&
                                      (w = (function (T) {
                                        return x(
                                          T,
                                          n.uint8array
                                            ? new Uint8Array(T.length)
                                            : new Array(T.length)
                                        );
                                      })(w))),
                              w)
                            : p.Promise.reject(
                                new Error(
                                  "Can't read the data of '" +
                                    c +
                                    "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"
                                )
                              );
                        });
                    });
                },
                {
                  "./base64": 1,
                  "./external": 6,
                  "./nodejsUtils": 14,
                  "./support": 30,
                  setimmediate: 54,
                },
              ],
              33: [
                function (t, a, i) {
                  var n = t("./reader/readerFor"),
                    d = t("./utils"),
                    l = t("./signature"),
                    p = t("./zipEntry"),
                    v = t("./support");
                  function x(s) {
                    (this.files = []), (this.loadOptions = s);
                  }
                  (x.prototype = {
                    checkSignature: function (s) {
                      if (!this.reader.readAndCheckSignature(s)) {
                        this.reader.index -= 4;
                        var b = this.reader.readString(4);
                        throw new Error(
                          "Corrupted zip or bug: unexpected signature (" +
                            d.pretty(b) +
                            ", expected " +
                            d.pretty(s) +
                            ")"
                        );
                      }
                    },
                    isSignature: function (s, b) {
                      var f = this.reader.index;
                      this.reader.setIndex(s);
                      var S = this.reader.readString(4) === b;
                      return this.reader.setIndex(f), S;
                    },
                    readBlockEndOfCentral: function () {
                      (this.diskNumber = this.reader.readInt(2)),
                        (this.diskWithCentralDirStart = this.reader.readInt(2)),
                        (this.centralDirRecordsOnThisDisk =
                          this.reader.readInt(2)),
                        (this.centralDirRecords = this.reader.readInt(2)),
                        (this.centralDirSize = this.reader.readInt(4)),
                        (this.centralDirOffset = this.reader.readInt(4)),
                        (this.zipCommentLength = this.reader.readInt(2));
                      var s = this.reader.readData(this.zipCommentLength),
                        b = v.uint8array ? "uint8array" : "array",
                        f = d.transformTo(b, s);
                      this.zipComment = this.loadOptions.decodeFileName(f);
                    },
                    readBlockZip64EndOfCentral: function () {
                      (this.zip64EndOfCentralSize = this.reader.readInt(8)),
                        this.reader.skip(4),
                        (this.diskNumber = this.reader.readInt(4)),
                        (this.diskWithCentralDirStart = this.reader.readInt(4)),
                        (this.centralDirRecordsOnThisDisk =
                          this.reader.readInt(8)),
                        (this.centralDirRecords = this.reader.readInt(8)),
                        (this.centralDirSize = this.reader.readInt(8)),
                        (this.centralDirOffset = this.reader.readInt(8)),
                        (this.zip64ExtensibleData = {});
                      for (
                        var s, b, f, S = this.zip64EndOfCentralSize - 44;
                        0 < S;

                      )
                        (s = this.reader.readInt(2)),
                          (b = this.reader.readInt(4)),
                          (f = this.reader.readData(b)),
                          (this.zip64ExtensibleData[s] = {
                            id: s,
                            length: b,
                            value: f,
                          });
                    },
                    readBlockZip64EndOfCentralLocator: function () {
                      if (
                        ((this.diskWithZip64CentralDirStart =
                          this.reader.readInt(4)),
                        (this.relativeOffsetEndOfZip64CentralDir =
                          this.reader.readInt(8)),
                        (this.disksCount = this.reader.readInt(4)),
                        1 < this.disksCount)
                      )
                        throw new Error("Multi-volumes zip are not supported");
                    },
                    readLocalFiles: function () {
                      var s, b;
                      for (s = 0; s < this.files.length; s++)
                        (b = this.files[s]),
                          this.reader.setIndex(b.localHeaderOffset),
                          this.checkSignature(l.LOCAL_FILE_HEADER),
                          b.readLocalPart(this.reader),
                          b.handleUTF8(),
                          b.processAttributes();
                    },
                    readCentralDir: function () {
                      var s;
                      for (
                        this.reader.setIndex(this.centralDirOffset);
                        this.reader.readAndCheckSignature(
                          l.CENTRAL_FILE_HEADER
                        );

                      )
                        (s = new p(
                          { zip64: this.zip64 },
                          this.loadOptions
                        )).readCentralPart(this.reader),
                          this.files.push(s);
                      if (
                        this.centralDirRecords !== this.files.length &&
                        this.centralDirRecords !== 0 &&
                        this.files.length === 0
                      )
                        throw new Error(
                          "Corrupted zip or bug: expected " +
                            this.centralDirRecords +
                            " records in central dir, got " +
                            this.files.length
                        );
                    },
                    readEndOfCentral: function () {
                      var s = this.reader.lastIndexOfSignature(
                        l.CENTRAL_DIRECTORY_END
                      );
                      if (s < 0)
                        throw this.isSignature(0, l.LOCAL_FILE_HEADER)
                          ? new Error(
                              "Corrupted zip: can't find end of central directory"
                            )
                          : new Error(
                              "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"
                            );
                      this.reader.setIndex(s);
                      var b = s;
                      if (
                        (this.checkSignature(l.CENTRAL_DIRECTORY_END),
                        this.readBlockEndOfCentral(),
                        this.diskNumber === d.MAX_VALUE_16BITS ||
                          this.diskWithCentralDirStart === d.MAX_VALUE_16BITS ||
                          this.centralDirRecordsOnThisDisk ===
                            d.MAX_VALUE_16BITS ||
                          this.centralDirRecords === d.MAX_VALUE_16BITS ||
                          this.centralDirSize === d.MAX_VALUE_32BITS ||
                          this.centralDirOffset === d.MAX_VALUE_32BITS)
                      ) {
                        if (
                          ((this.zip64 = !0),
                          (s = this.reader.lastIndexOfSignature(
                            l.ZIP64_CENTRAL_DIRECTORY_LOCATOR
                          )) < 0)
                        )
                          throw new Error(
                            "Corrupted zip: can't find the ZIP64 end of central directory locator"
                          );
                        if (
                          (this.reader.setIndex(s),
                          this.checkSignature(
                            l.ZIP64_CENTRAL_DIRECTORY_LOCATOR
                          ),
                          this.readBlockZip64EndOfCentralLocator(),
                          !this.isSignature(
                            this.relativeOffsetEndOfZip64CentralDir,
                            l.ZIP64_CENTRAL_DIRECTORY_END
                          ) &&
                            ((this.relativeOffsetEndOfZip64CentralDir =
                              this.reader.lastIndexOfSignature(
                                l.ZIP64_CENTRAL_DIRECTORY_END
                              )),
                            this.relativeOffsetEndOfZip64CentralDir < 0))
                        )
                          throw new Error(
                            "Corrupted zip: can't find the ZIP64 end of central directory"
                          );
                        this.reader.setIndex(
                          this.relativeOffsetEndOfZip64CentralDir
                        ),
                          this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_END),
                          this.readBlockZip64EndOfCentral();
                      }
                      var f = this.centralDirOffset + this.centralDirSize;
                      this.zip64 &&
                        ((f += 20), (f += 12 + this.zip64EndOfCentralSize));
                      var S = b - f;
                      if (0 < S)
                        this.isSignature(b, l.CENTRAL_FILE_HEADER) ||
                          (this.reader.zero = S);
                      else if (S < 0)
                        throw new Error(
                          "Corrupted zip: missing " + Math.abs(S) + " bytes."
                        );
                    },
                    prepareReader: function (s) {
                      this.reader = n(s);
                    },
                    load: function (s) {
                      this.prepareReader(s),
                        this.readEndOfCentral(),
                        this.readCentralDir(),
                        this.readLocalFiles();
                    },
                  }),
                    (a.exports = x);
                },
                {
                  "./reader/readerFor": 22,
                  "./signature": 23,
                  "./support": 30,
                  "./utils": 32,
                  "./zipEntry": 34,
                },
              ],
              34: [
                function (t, a, i) {
                  var n = t("./reader/readerFor"),
                    d = t("./utils"),
                    l = t("./compressedObject"),
                    p = t("./crc32"),
                    v = t("./utf8"),
                    x = t("./compressions"),
                    s = t("./support");
                  function b(f, S) {
                    (this.options = f), (this.loadOptions = S);
                  }
                  (b.prototype = {
                    isEncrypted: function () {
                      return (1 & this.bitFlag) == 1;
                    },
                    useUTF8: function () {
                      return (2048 & this.bitFlag) == 2048;
                    },
                    readLocalPart: function (f) {
                      var S, c;
                      if (
                        (f.skip(22),
                        (this.fileNameLength = f.readInt(2)),
                        (c = f.readInt(2)),
                        (this.fileName = f.readData(this.fileNameLength)),
                        f.skip(c),
                        this.compressedSize === -1 ||
                          this.uncompressedSize === -1)
                      )
                        throw new Error(
                          "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)"
                        );
                      if (
                        (S = (function (h) {
                          for (var o in x)
                            if (
                              Object.prototype.hasOwnProperty.call(x, o) &&
                              x[o].magic === h
                            )
                              return x[o];
                          return null;
                        })(this.compressionMethod)) === null
                      )
                        throw new Error(
                          "Corrupted zip : compression " +
                            d.pretty(this.compressionMethod) +
                            " unknown (inner file : " +
                            d.transformTo("string", this.fileName) +
                            ")"
                        );
                      this.decompressed = new l(
                        this.compressedSize,
                        this.uncompressedSize,
                        this.crc32,
                        S,
                        f.readData(this.compressedSize)
                      );
                    },
                    readCentralPart: function (f) {
                      (this.versionMadeBy = f.readInt(2)),
                        f.skip(2),
                        (this.bitFlag = f.readInt(2)),
                        (this.compressionMethod = f.readString(2)),
                        (this.date = f.readDate()),
                        (this.crc32 = f.readInt(4)),
                        (this.compressedSize = f.readInt(4)),
                        (this.uncompressedSize = f.readInt(4));
                      var S = f.readInt(2);
                      if (
                        ((this.extraFieldsLength = f.readInt(2)),
                        (this.fileCommentLength = f.readInt(2)),
                        (this.diskNumberStart = f.readInt(2)),
                        (this.internalFileAttributes = f.readInt(2)),
                        (this.externalFileAttributes = f.readInt(4)),
                        (this.localHeaderOffset = f.readInt(4)),
                        this.isEncrypted())
                      )
                        throw new Error("Encrypted zip are not supported");
                      f.skip(S),
                        this.readExtraFields(f),
                        this.parseZIP64ExtraField(f),
                        (this.fileComment = f.readData(this.fileCommentLength));
                    },
                    processAttributes: function () {
                      (this.unixPermissions = null),
                        (this.dosPermissions = null);
                      var f = this.versionMadeBy >> 8;
                      (this.dir = !!(16 & this.externalFileAttributes)),
                        f == 0 &&
                          (this.dosPermissions =
                            63 & this.externalFileAttributes),
                        f == 3 &&
                          (this.unixPermissions =
                            (this.externalFileAttributes >> 16) & 65535),
                        this.dir ||
                          this.fileNameStr.slice(-1) !== "/" ||
                          (this.dir = !0);
                    },
                    parseZIP64ExtraField: function () {
                      if (this.extraFields[1]) {
                        var f = n(this.extraFields[1].value);
                        this.uncompressedSize === d.MAX_VALUE_32BITS &&
                          (this.uncompressedSize = f.readInt(8)),
                          this.compressedSize === d.MAX_VALUE_32BITS &&
                            (this.compressedSize = f.readInt(8)),
                          this.localHeaderOffset === d.MAX_VALUE_32BITS &&
                            (this.localHeaderOffset = f.readInt(8)),
                          this.diskNumberStart === d.MAX_VALUE_32BITS &&
                            (this.diskNumberStart = f.readInt(4));
                      }
                    },
                    readExtraFields: function (f) {
                      var S,
                        c,
                        h,
                        o = f.index + this.extraFieldsLength;
                      for (
                        this.extraFields || (this.extraFields = {});
                        f.index + 4 < o;

                      )
                        (S = f.readInt(2)),
                          (c = f.readInt(2)),
                          (h = f.readData(c)),
                          (this.extraFields[S] = {
                            id: S,
                            length: c,
                            value: h,
                          });
                      f.setIndex(o);
                    },
                    handleUTF8: function () {
                      var f = s.uint8array ? "uint8array" : "array";
                      if (this.useUTF8())
                        (this.fileNameStr = v.utf8decode(this.fileName)),
                          (this.fileCommentStr = v.utf8decode(
                            this.fileComment
                          ));
                      else {
                        var S = this.findExtraFieldUnicodePath();
                        if (S !== null) this.fileNameStr = S;
                        else {
                          var c = d.transformTo(f, this.fileName);
                          this.fileNameStr = this.loadOptions.decodeFileName(c);
                        }
                        var h = this.findExtraFieldUnicodeComment();
                        if (h !== null) this.fileCommentStr = h;
                        else {
                          var o = d.transformTo(f, this.fileComment);
                          this.fileCommentStr =
                            this.loadOptions.decodeFileName(o);
                        }
                      }
                    },
                    findExtraFieldUnicodePath: function () {
                      var f = this.extraFields[28789];
                      if (f) {
                        var S = n(f.value);
                        return S.readInt(1) !== 1 ||
                          p(this.fileName) !== S.readInt(4)
                          ? null
                          : v.utf8decode(S.readData(f.length - 5));
                      }
                      return null;
                    },
                    findExtraFieldUnicodeComment: function () {
                      var f = this.extraFields[25461];
                      if (f) {
                        var S = n(f.value);
                        return S.readInt(1) !== 1 ||
                          p(this.fileComment) !== S.readInt(4)
                          ? null
                          : v.utf8decode(S.readData(f.length - 5));
                      }
                      return null;
                    },
                  }),
                    (a.exports = b);
                },
                {
                  "./compressedObject": 2,
                  "./compressions": 3,
                  "./crc32": 4,
                  "./reader/readerFor": 22,
                  "./support": 30,
                  "./utf8": 31,
                  "./utils": 32,
                },
              ],
              35: [
                function (t, a, i) {
                  function n(S, c, h) {
                    (this.name = S),
                      (this.dir = h.dir),
                      (this.date = h.date),
                      (this.comment = h.comment),
                      (this.unixPermissions = h.unixPermissions),
                      (this.dosPermissions = h.dosPermissions),
                      (this._data = c),
                      (this._dataBinary = h.binary),
                      (this.options = {
                        compression: h.compression,
                        compressionOptions: h.compressionOptions,
                      });
                  }
                  var d = t("./stream/StreamHelper"),
                    l = t("./stream/DataWorker"),
                    p = t("./utf8"),
                    v = t("./compressedObject"),
                    x = t("./stream/GenericWorker");
                  n.prototype = {
                    internalStream: function (S) {
                      var c = null,
                        h = "string";
                      try {
                        if (!S) throw new Error("No output type specified.");
                        var o =
                          (h = S.toLowerCase()) === "string" || h === "text";
                        (h !== "binarystring" && h !== "text") ||
                          (h = "string"),
                          (c = this._decompressWorker());
                        var u = !this._dataBinary;
                        u && !o && (c = c.pipe(new p.Utf8EncodeWorker())),
                          !u && o && (c = c.pipe(new p.Utf8DecodeWorker()));
                      } catch (_) {
                        (c = new x("error")).error(_);
                      }
                      return new d(c, h, "");
                    },
                    async: function (S, c) {
                      return this.internalStream(S).accumulate(c);
                    },
                    nodeStream: function (S, c) {
                      return this.internalStream(
                        S || "nodebuffer"
                      ).toNodejsStream(c);
                    },
                    _compressWorker: function (S, c) {
                      if (
                        this._data instanceof v &&
                        this._data.compression.magic === S.magic
                      )
                        return this._data.getCompressedWorker();
                      var h = this._decompressWorker();
                      return (
                        this._dataBinary ||
                          (h = h.pipe(new p.Utf8EncodeWorker())),
                        v.createWorkerFrom(h, S, c)
                      );
                    },
                    _decompressWorker: function () {
                      return this._data instanceof v
                        ? this._data.getContentWorker()
                        : this._data instanceof x
                        ? this._data
                        : new l(this._data);
                    },
                  };
                  for (
                    var s = [
                        "asText",
                        "asBinary",
                        "asNodeBuffer",
                        "asUint8Array",
                        "asArrayBuffer",
                      ],
                      b = function () {
                        throw new Error(
                          "This method has been removed in JSZip 3.0, please check the upgrade guide."
                        );
                      },
                      f = 0;
                    f < s.length;
                    f++
                  )
                    n.prototype[s[f]] = b;
                  a.exports = n;
                },
                {
                  "./compressedObject": 2,
                  "./stream/DataWorker": 27,
                  "./stream/GenericWorker": 28,
                  "./stream/StreamHelper": 29,
                  "./utf8": 31,
                },
              ],
              36: [
                function (t, a, i) {
                  (function (n) {
                    var d,
                      l,
                      p = n.MutationObserver || n.WebKitMutationObserver;
                    if (p) {
                      var v = 0,
                        x = new p(S),
                        s = n.document.createTextNode("");
                      x.observe(s, { characterData: !0 }),
                        (d = function () {
                          s.data = v = ++v % 2;
                        });
                    } else if (n.setImmediate || n.MessageChannel === void 0)
                      d =
                        "document" in n &&
                        "onreadystatechange" in
                          n.document.createElement("script")
                          ? function () {
                              var c = n.document.createElement("script");
                              (c.onreadystatechange = function () {
                                S(),
                                  (c.onreadystatechange = null),
                                  c.parentNode.removeChild(c),
                                  (c = null);
                              }),
                                n.document.documentElement.appendChild(c);
                            }
                          : function () {
                              setTimeout(S, 0);
                            };
                    else {
                      var b = new n.MessageChannel();
                      (b.port1.onmessage = S),
                        (d = function () {
                          b.port2.postMessage(0);
                        });
                    }
                    var f = [];
                    function S() {
                      var c, h;
                      l = !0;
                      for (var o = f.length; o; ) {
                        for (h = f, f = [], c = -1; ++c < o; ) h[c]();
                        o = f.length;
                      }
                      l = !1;
                    }
                    a.exports = function (c) {
                      f.push(c) !== 1 || l || d();
                    };
                  }.call(
                    this,
                    typeof mn < "u"
                      ? mn
                      : typeof self < "u"
                      ? self
                      : typeof window < "u"
                      ? window
                      : {}
                  ));
                },
                {},
              ],
              37: [
                function (t, a, i) {
                  var n = t("immediate");
                  function d() {}
                  var l = {},
                    p = ["REJECTED"],
                    v = ["FULFILLED"],
                    x = ["PENDING"];
                  function s(o) {
                    if (typeof o != "function")
                      throw new TypeError("resolver must be a function");
                    (this.state = x),
                      (this.queue = []),
                      (this.outcome = void 0),
                      o !== d && c(this, o);
                  }
                  function b(o, u, _) {
                    (this.promise = o),
                      typeof u == "function" &&
                        ((this.onFulfilled = u),
                        (this.callFulfilled = this.otherCallFulfilled)),
                      typeof _ == "function" &&
                        ((this.onRejected = _),
                        (this.callRejected = this.otherCallRejected));
                  }
                  function f(o, u, _) {
                    n(function () {
                      var w;
                      try {
                        w = u(_);
                      } catch (y) {
                        return l.reject(o, y);
                      }
                      w === o
                        ? l.reject(
                            o,
                            new TypeError("Cannot resolve promise with itself")
                          )
                        : l.resolve(o, w);
                    });
                  }
                  function S(o) {
                    var u = o && o.then;
                    if (
                      o &&
                      (typeof o == "object" || typeof o == "function") &&
                      typeof u == "function"
                    )
                      return function () {
                        u.apply(o, arguments);
                      };
                  }
                  function c(o, u) {
                    var _ = !1;
                    function w(I) {
                      _ || ((_ = !0), l.reject(o, I));
                    }
                    function y(I) {
                      _ || ((_ = !0), l.resolve(o, I));
                    }
                    var T = h(function () {
                      u(y, w);
                    });
                    T.status === "error" && w(T.value);
                  }
                  function h(o, u) {
                    var _ = {};
                    try {
                      (_.value = o(u)), (_.status = "success");
                    } catch (w) {
                      (_.status = "error"), (_.value = w);
                    }
                    return _;
                  }
                  ((a.exports = s).prototype.finally = function (o) {
                    if (typeof o != "function") return this;
                    var u = this.constructor;
                    return this.then(
                      function (_) {
                        return u.resolve(o()).then(function () {
                          return _;
                        });
                      },
                      function (_) {
                        return u.resolve(o()).then(function () {
                          throw _;
                        });
                      }
                    );
                  }),
                    (s.prototype.catch = function (o) {
                      return this.then(null, o);
                    }),
                    (s.prototype.then = function (o, u) {
                      if (
                        (typeof o != "function" && this.state === v) ||
                        (typeof u != "function" && this.state === p)
                      )
                        return this;
                      var _ = new this.constructor(d);
                      return (
                        this.state !== x
                          ? f(_, this.state === v ? o : u, this.outcome)
                          : this.queue.push(new b(_, o, u)),
                        _
                      );
                    }),
                    (b.prototype.callFulfilled = function (o) {
                      l.resolve(this.promise, o);
                    }),
                    (b.prototype.otherCallFulfilled = function (o) {
                      f(this.promise, this.onFulfilled, o);
                    }),
                    (b.prototype.callRejected = function (o) {
                      l.reject(this.promise, o);
                    }),
                    (b.prototype.otherCallRejected = function (o) {
                      f(this.promise, this.onRejected, o);
                    }),
                    (l.resolve = function (o, u) {
                      var _ = h(S, u);
                      if (_.status === "error") return l.reject(o, _.value);
                      var w = _.value;
                      if (w) c(o, w);
                      else {
                        (o.state = v), (o.outcome = u);
                        for (var y = -1, T = o.queue.length; ++y < T; )
                          o.queue[y].callFulfilled(u);
                      }
                      return o;
                    }),
                    (l.reject = function (o, u) {
                      (o.state = p), (o.outcome = u);
                      for (var _ = -1, w = o.queue.length; ++_ < w; )
                        o.queue[_].callRejected(u);
                      return o;
                    }),
                    (s.resolve = function (o) {
                      return o instanceof this ? o : l.resolve(new this(d), o);
                    }),
                    (s.reject = function (o) {
                      var u = new this(d);
                      return l.reject(u, o);
                    }),
                    (s.all = function (o) {
                      var u = this;
                      if (
                        Object.prototype.toString.call(o) !== "[object Array]"
                      )
                        return this.reject(new TypeError("must be an array"));
                      var _ = o.length,
                        w = !1;
                      if (!_) return this.resolve([]);
                      for (
                        var y = new Array(_), T = 0, I = -1, M = new this(d);
                        ++I < _;

                      )
                        O(o[I], I);
                      return M;
                      function O(U, J) {
                        u.resolve(U).then(
                          function (C) {
                            (y[J] = C),
                              ++T !== _ || w || ((w = !0), l.resolve(M, y));
                          },
                          function (C) {
                            w || ((w = !0), l.reject(M, C));
                          }
                        );
                      }
                    }),
                    (s.race = function (o) {
                      var u = this;
                      if (
                        Object.prototype.toString.call(o) !== "[object Array]"
                      )
                        return this.reject(new TypeError("must be an array"));
                      var _ = o.length,
                        w = !1;
                      if (!_) return this.resolve([]);
                      for (var y = -1, T = new this(d); ++y < _; )
                        (I = o[y]),
                          u.resolve(I).then(
                            function (M) {
                              w || ((w = !0), l.resolve(T, M));
                            },
                            function (M) {
                              w || ((w = !0), l.reject(T, M));
                            }
                          );
                      var I;
                      return T;
                    });
                },
                { immediate: 36 },
              ],
              38: [
                function (t, a, i) {
                  var n = {};
                  (0, t("./lib/utils/common").assign)(
                    n,
                    t("./lib/deflate"),
                    t("./lib/inflate"),
                    t("./lib/zlib/constants")
                  ),
                    (a.exports = n);
                },
                {
                  "./lib/deflate": 39,
                  "./lib/inflate": 40,
                  "./lib/utils/common": 41,
                  "./lib/zlib/constants": 44,
                },
              ],
              39: [
                function (t, a, i) {
                  var n = t("./zlib/deflate"),
                    d = t("./utils/common"),
                    l = t("./utils/strings"),
                    p = t("./zlib/messages"),
                    v = t("./zlib/zstream"),
                    x = Object.prototype.toString,
                    s = 0,
                    b = -1,
                    f = 0,
                    S = 8;
                  function c(o) {
                    if (!(this instanceof c)) return new c(o);
                    this.options = d.assign(
                      {
                        level: b,
                        method: S,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: f,
                        to: "",
                      },
                      o || {}
                    );
                    var u = this.options;
                    u.raw && 0 < u.windowBits
                      ? (u.windowBits = -u.windowBits)
                      : u.gzip &&
                        0 < u.windowBits &&
                        u.windowBits < 16 &&
                        (u.windowBits += 16),
                      (this.err = 0),
                      (this.msg = ""),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new v()),
                      (this.strm.avail_out = 0);
                    var _ = n.deflateInit2(
                      this.strm,
                      u.level,
                      u.method,
                      u.windowBits,
                      u.memLevel,
                      u.strategy
                    );
                    if (_ !== s) throw new Error(p[_]);
                    if (
                      (u.header && n.deflateSetHeader(this.strm, u.header),
                      u.dictionary)
                    ) {
                      var w;
                      if (
                        ((w =
                          typeof u.dictionary == "string"
                            ? l.string2buf(u.dictionary)
                            : x.call(u.dictionary) === "[object ArrayBuffer]"
                            ? new Uint8Array(u.dictionary)
                            : u.dictionary),
                        (_ = n.deflateSetDictionary(this.strm, w)) !== s)
                      )
                        throw new Error(p[_]);
                      this._dict_set = !0;
                    }
                  }
                  function h(o, u) {
                    var _ = new c(u);
                    if ((_.push(o, !0), _.err)) throw _.msg || p[_.err];
                    return _.result;
                  }
                  (c.prototype.push = function (o, u) {
                    var _,
                      w,
                      y = this.strm,
                      T = this.options.chunkSize;
                    if (this.ended) return !1;
                    (w = u === ~~u ? u : u === !0 ? 4 : 0),
                      typeof o == "string"
                        ? (y.input = l.string2buf(o))
                        : x.call(o) === "[object ArrayBuffer]"
                        ? (y.input = new Uint8Array(o))
                        : (y.input = o),
                      (y.next_in = 0),
                      (y.avail_in = y.input.length);
                    do {
                      if (
                        (y.avail_out === 0 &&
                          ((y.output = new d.Buf8(T)),
                          (y.next_out = 0),
                          (y.avail_out = T)),
                        (_ = n.deflate(y, w)) !== 1 && _ !== s)
                      )
                        return this.onEnd(_), !(this.ended = !0);
                      (y.avail_out !== 0 &&
                        (y.avail_in !== 0 || (w !== 4 && w !== 2))) ||
                        (this.options.to === "string"
                          ? this.onData(
                              l.buf2binstring(d.shrinkBuf(y.output, y.next_out))
                            )
                          : this.onData(d.shrinkBuf(y.output, y.next_out)));
                    } while ((0 < y.avail_in || y.avail_out === 0) && _ !== 1);
                    return w === 4
                      ? ((_ = n.deflateEnd(this.strm)),
                        this.onEnd(_),
                        (this.ended = !0),
                        _ === s)
                      : w !== 2 || (this.onEnd(s), !(y.avail_out = 0));
                  }),
                    (c.prototype.onData = function (o) {
                      this.chunks.push(o);
                    }),
                    (c.prototype.onEnd = function (o) {
                      o === s &&
                        (this.options.to === "string"
                          ? (this.result = this.chunks.join(""))
                          : (this.result = d.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = o),
                        (this.msg = this.strm.msg);
                    }),
                    (i.Deflate = c),
                    (i.deflate = h),
                    (i.deflateRaw = function (o, u) {
                      return ((u = u || {}).raw = !0), h(o, u);
                    }),
                    (i.gzip = function (o, u) {
                      return ((u = u || {}).gzip = !0), h(o, u);
                    });
                },
                {
                  "./utils/common": 41,
                  "./utils/strings": 42,
                  "./zlib/deflate": 46,
                  "./zlib/messages": 51,
                  "./zlib/zstream": 53,
                },
              ],
              40: [
                function (t, a, i) {
                  var n = t("./zlib/inflate"),
                    d = t("./utils/common"),
                    l = t("./utils/strings"),
                    p = t("./zlib/constants"),
                    v = t("./zlib/messages"),
                    x = t("./zlib/zstream"),
                    s = t("./zlib/gzheader"),
                    b = Object.prototype.toString;
                  function f(c) {
                    if (!(this instanceof f)) return new f(c);
                    this.options = d.assign(
                      { chunkSize: 16384, windowBits: 0, to: "" },
                      c || {}
                    );
                    var h = this.options;
                    h.raw &&
                      0 <= h.windowBits &&
                      h.windowBits < 16 &&
                      ((h.windowBits = -h.windowBits),
                      h.windowBits === 0 && (h.windowBits = -15)),
                      !(0 <= h.windowBits && h.windowBits < 16) ||
                        (c && c.windowBits) ||
                        (h.windowBits += 32),
                      15 < h.windowBits &&
                        h.windowBits < 48 &&
                        (15 & h.windowBits) == 0 &&
                        (h.windowBits |= 15),
                      (this.err = 0),
                      (this.msg = ""),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new x()),
                      (this.strm.avail_out = 0);
                    var o = n.inflateInit2(this.strm, h.windowBits);
                    if (o !== p.Z_OK) throw new Error(v[o]);
                    (this.header = new s()),
                      n.inflateGetHeader(this.strm, this.header);
                  }
                  function S(c, h) {
                    var o = new f(h);
                    if ((o.push(c, !0), o.err)) throw o.msg || v[o.err];
                    return o.result;
                  }
                  (f.prototype.push = function (c, h) {
                    var o,
                      u,
                      _,
                      w,
                      y,
                      T,
                      I = this.strm,
                      M = this.options.chunkSize,
                      O = this.options.dictionary,
                      U = !1;
                    if (this.ended) return !1;
                    (u = h === ~~h ? h : h === !0 ? p.Z_FINISH : p.Z_NO_FLUSH),
                      typeof c == "string"
                        ? (I.input = l.binstring2buf(c))
                        : b.call(c) === "[object ArrayBuffer]"
                        ? (I.input = new Uint8Array(c))
                        : (I.input = c),
                      (I.next_in = 0),
                      (I.avail_in = I.input.length);
                    do {
                      if (
                        (I.avail_out === 0 &&
                          ((I.output = new d.Buf8(M)),
                          (I.next_out = 0),
                          (I.avail_out = M)),
                        (o = n.inflate(I, p.Z_NO_FLUSH)) === p.Z_NEED_DICT &&
                          O &&
                          ((T =
                            typeof O == "string"
                              ? l.string2buf(O)
                              : b.call(O) === "[object ArrayBuffer]"
                              ? new Uint8Array(O)
                              : O),
                          (o = n.inflateSetDictionary(this.strm, T))),
                        o === p.Z_BUF_ERROR &&
                          U === !0 &&
                          ((o = p.Z_OK), (U = !1)),
                        o !== p.Z_STREAM_END && o !== p.Z_OK)
                      )
                        return this.onEnd(o), !(this.ended = !0);
                      I.next_out &&
                        ((I.avail_out !== 0 &&
                          o !== p.Z_STREAM_END &&
                          (I.avail_in !== 0 ||
                            (u !== p.Z_FINISH && u !== p.Z_SYNC_FLUSH))) ||
                          (this.options.to === "string"
                            ? ((_ = l.utf8border(I.output, I.next_out)),
                              (w = I.next_out - _),
                              (y = l.buf2string(I.output, _)),
                              (I.next_out = w),
                              (I.avail_out = M - w),
                              w && d.arraySet(I.output, I.output, _, w, 0),
                              this.onData(y))
                            : this.onData(d.shrinkBuf(I.output, I.next_out)))),
                        I.avail_in === 0 && I.avail_out === 0 && (U = !0);
                    } while (
                      (0 < I.avail_in || I.avail_out === 0) &&
                      o !== p.Z_STREAM_END
                    );
                    return (
                      o === p.Z_STREAM_END && (u = p.Z_FINISH),
                      u === p.Z_FINISH
                        ? ((o = n.inflateEnd(this.strm)),
                          this.onEnd(o),
                          (this.ended = !0),
                          o === p.Z_OK)
                        : u !== p.Z_SYNC_FLUSH ||
                          (this.onEnd(p.Z_OK), !(I.avail_out = 0))
                    );
                  }),
                    (f.prototype.onData = function (c) {
                      this.chunks.push(c);
                    }),
                    (f.prototype.onEnd = function (c) {
                      c === p.Z_OK &&
                        (this.options.to === "string"
                          ? (this.result = this.chunks.join(""))
                          : (this.result = d.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = c),
                        (this.msg = this.strm.msg);
                    }),
                    (i.Inflate = f),
                    (i.inflate = S),
                    (i.inflateRaw = function (c, h) {
                      return ((h = h || {}).raw = !0), S(c, h);
                    }),
                    (i.ungzip = S);
                },
                {
                  "./utils/common": 41,
                  "./utils/strings": 42,
                  "./zlib/constants": 44,
                  "./zlib/gzheader": 47,
                  "./zlib/inflate": 49,
                  "./zlib/messages": 51,
                  "./zlib/zstream": 53,
                },
              ],
              41: [
                function (t, a, i) {
                  var n =
                    typeof Uint8Array < "u" &&
                    typeof Uint16Array < "u" &&
                    typeof Int32Array < "u";
                  (i.assign = function (p) {
                    for (
                      var v = Array.prototype.slice.call(arguments, 1);
                      v.length;

                    ) {
                      var x = v.shift();
                      if (x) {
                        if (typeof x != "object")
                          throw new TypeError(x + "must be non-object");
                        for (var s in x) x.hasOwnProperty(s) && (p[s] = x[s]);
                      }
                    }
                    return p;
                  }),
                    (i.shrinkBuf = function (p, v) {
                      return p.length === v
                        ? p
                        : p.subarray
                        ? p.subarray(0, v)
                        : ((p.length = v), p);
                    });
                  var d = {
                      arraySet: function (p, v, x, s, b) {
                        if (v.subarray && p.subarray)
                          p.set(v.subarray(x, x + s), b);
                        else for (var f = 0; f < s; f++) p[b + f] = v[x + f];
                      },
                      flattenChunks: function (p) {
                        var v, x, s, b, f, S;
                        for (v = s = 0, x = p.length; v < x; v++)
                          s += p[v].length;
                        for (
                          S = new Uint8Array(s), v = b = 0, x = p.length;
                          v < x;
                          v++
                        )
                          (f = p[v]), S.set(f, b), (b += f.length);
                        return S;
                      },
                    },
                    l = {
                      arraySet: function (p, v, x, s, b) {
                        for (var f = 0; f < s; f++) p[b + f] = v[x + f];
                      },
                      flattenChunks: function (p) {
                        return [].concat.apply([], p);
                      },
                    };
                  (i.setTyped = function (p) {
                    p
                      ? ((i.Buf8 = Uint8Array),
                        (i.Buf16 = Uint16Array),
                        (i.Buf32 = Int32Array),
                        i.assign(i, d))
                      : ((i.Buf8 = Array),
                        (i.Buf16 = Array),
                        (i.Buf32 = Array),
                        i.assign(i, l));
                  }),
                    i.setTyped(n);
                },
                {},
              ],
              42: [
                function (t, a, i) {
                  var n = t("./common"),
                    d = !0,
                    l = !0;
                  try {
                    String.fromCharCode.apply(null, [0]);
                  } catch {
                    d = !1;
                  }
                  try {
                    String.fromCharCode.apply(null, new Uint8Array(1));
                  } catch {
                    l = !1;
                  }
                  for (var p = new n.Buf8(256), v = 0; v < 256; v++)
                    p[v] =
                      252 <= v
                        ? 6
                        : 248 <= v
                        ? 5
                        : 240 <= v
                        ? 4
                        : 224 <= v
                        ? 3
                        : 192 <= v
                        ? 2
                        : 1;
                  function x(s, b) {
                    if (b < 65537 && ((s.subarray && l) || (!s.subarray && d)))
                      return String.fromCharCode.apply(null, n.shrinkBuf(s, b));
                    for (var f = "", S = 0; S < b; S++)
                      f += String.fromCharCode(s[S]);
                    return f;
                  }
                  (p[254] = p[254] = 1),
                    (i.string2buf = function (s) {
                      var b,
                        f,
                        S,
                        c,
                        h,
                        o = s.length,
                        u = 0;
                      for (c = 0; c < o; c++)
                        (64512 & (f = s.charCodeAt(c))) == 55296 &&
                          c + 1 < o &&
                          (64512 & (S = s.charCodeAt(c + 1))) == 56320 &&
                          ((f = 65536 + ((f - 55296) << 10) + (S - 56320)),
                          c++),
                          (u += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4);
                      for (b = new n.Buf8(u), c = h = 0; h < u; c++)
                        (64512 & (f = s.charCodeAt(c))) == 55296 &&
                          c + 1 < o &&
                          (64512 & (S = s.charCodeAt(c + 1))) == 56320 &&
                          ((f = 65536 + ((f - 55296) << 10) + (S - 56320)),
                          c++),
                          f < 128
                            ? (b[h++] = f)
                            : (f < 2048
                                ? (b[h++] = 192 | (f >>> 6))
                                : (f < 65536
                                    ? (b[h++] = 224 | (f >>> 12))
                                    : ((b[h++] = 240 | (f >>> 18)),
                                      (b[h++] = 128 | ((f >>> 12) & 63))),
                                  (b[h++] = 128 | ((f >>> 6) & 63))),
                              (b[h++] = 128 | (63 & f)));
                      return b;
                    }),
                    (i.buf2binstring = function (s) {
                      return x(s, s.length);
                    }),
                    (i.binstring2buf = function (s) {
                      for (
                        var b = new n.Buf8(s.length), f = 0, S = b.length;
                        f < S;
                        f++
                      )
                        b[f] = s.charCodeAt(f);
                      return b;
                    }),
                    (i.buf2string = function (s, b) {
                      var f,
                        S,
                        c,
                        h,
                        o = b || s.length,
                        u = new Array(2 * o);
                      for (f = S = 0; f < o; )
                        if ((c = s[f++]) < 128) u[S++] = c;
                        else if (4 < (h = p[c])) (u[S++] = 65533), (f += h - 1);
                        else {
                          for (
                            c &= h === 2 ? 31 : h === 3 ? 15 : 7;
                            1 < h && f < o;

                          )
                            (c = (c << 6) | (63 & s[f++])), h--;
                          1 < h
                            ? (u[S++] = 65533)
                            : c < 65536
                            ? (u[S++] = c)
                            : ((c -= 65536),
                              (u[S++] = 55296 | ((c >> 10) & 1023)),
                              (u[S++] = 56320 | (1023 & c)));
                        }
                      return x(u, S);
                    }),
                    (i.utf8border = function (s, b) {
                      var f;
                      for (
                        (b = b || s.length) > s.length && (b = s.length),
                          f = b - 1;
                        0 <= f && (192 & s[f]) == 128;

                      )
                        f--;
                      return f < 0 || f === 0 ? b : f + p[s[f]] > b ? f : b;
                    });
                },
                { "./common": 41 },
              ],
              43: [
                function (t, a, i) {
                  a.exports = function (n, d, l, p) {
                    for (
                      var v = (65535 & n) | 0,
                        x = ((n >>> 16) & 65535) | 0,
                        s = 0;
                      l !== 0;

                    ) {
                      for (
                        l -= s = 2e3 < l ? 2e3 : l;
                        (x = (x + (v = (v + d[p++]) | 0)) | 0), --s;

                      );
                      (v %= 65521), (x %= 65521);
                    }
                    return v | (x << 16) | 0;
                  };
                },
                {},
              ],
              44: [
                function (t, a, i) {
                  a.exports = {
                    Z_NO_FLUSH: 0,
                    Z_PARTIAL_FLUSH: 1,
                    Z_SYNC_FLUSH: 2,
                    Z_FULL_FLUSH: 3,
                    Z_FINISH: 4,
                    Z_BLOCK: 5,
                    Z_TREES: 6,
                    Z_OK: 0,
                    Z_STREAM_END: 1,
                    Z_NEED_DICT: 2,
                    Z_ERRNO: -1,
                    Z_STREAM_ERROR: -2,
                    Z_DATA_ERROR: -3,
                    Z_BUF_ERROR: -5,
                    Z_NO_COMPRESSION: 0,
                    Z_BEST_SPEED: 1,
                    Z_BEST_COMPRESSION: 9,
                    Z_DEFAULT_COMPRESSION: -1,
                    Z_FILTERED: 1,
                    Z_HUFFMAN_ONLY: 2,
                    Z_RLE: 3,
                    Z_FIXED: 4,
                    Z_DEFAULT_STRATEGY: 0,
                    Z_BINARY: 0,
                    Z_TEXT: 1,
                    Z_UNKNOWN: 2,
                    Z_DEFLATED: 8,
                  };
                },
                {},
              ],
              45: [
                function (t, a, i) {
                  var n = (function () {
                    for (var d, l = [], p = 0; p < 256; p++) {
                      d = p;
                      for (var v = 0; v < 8; v++)
                        d = 1 & d ? 3988292384 ^ (d >>> 1) : d >>> 1;
                      l[p] = d;
                    }
                    return l;
                  })();
                  a.exports = function (d, l, p, v) {
                    var x = n,
                      s = v + p;
                    d ^= -1;
                    for (var b = v; b < s; b++)
                      d = (d >>> 8) ^ x[255 & (d ^ l[b])];
                    return -1 ^ d;
                  };
                },
                {},
              ],
              46: [
                function (t, a, i) {
                  var n,
                    d = t("../utils/common"),
                    l = t("./trees"),
                    p = t("./adler32"),
                    v = t("./crc32"),
                    x = t("./messages"),
                    s = 0,
                    b = 4,
                    f = 0,
                    S = -2,
                    c = -1,
                    h = 4,
                    o = 2,
                    u = 8,
                    _ = 9,
                    w = 286,
                    y = 30,
                    T = 19,
                    I = 2 * w + 1,
                    M = 15,
                    O = 3,
                    U = 258,
                    J = U + O + 1,
                    C = 42,
                    D = 113,
                    k = 1,
                    V = 2,
                    ee = 3,
                    Z = 4;
                  function ve(m, X) {
                    return (m.msg = x[X]), X;
                  }
                  function Q(m) {
                    return (m << 1) - (4 < m ? 9 : 0);
                  }
                  function ce(m) {
                    for (var X = m.length; 0 <= --X; ) m[X] = 0;
                  }
                  function B(m) {
                    var X = m.state,
                      G = X.pending;
                    G > m.avail_out && (G = m.avail_out),
                      G !== 0 &&
                        (d.arraySet(
                          m.output,
                          X.pending_buf,
                          X.pending_out,
                          G,
                          m.next_out
                        ),
                        (m.next_out += G),
                        (X.pending_out += G),
                        (m.total_out += G),
                        (m.avail_out -= G),
                        (X.pending -= G),
                        X.pending === 0 && (X.pending_out = 0));
                  }
                  function H(m, X) {
                    l._tr_flush_block(
                      m,
                      0 <= m.block_start ? m.block_start : -1,
                      m.strstart - m.block_start,
                      X
                    ),
                      (m.block_start = m.strstart),
                      B(m.strm);
                  }
                  function Ee(m, X) {
                    m.pending_buf[m.pending++] = X;
                  }
                  function fe(m, X) {
                    (m.pending_buf[m.pending++] = (X >>> 8) & 255),
                      (m.pending_buf[m.pending++] = 255 & X);
                  }
                  function he(m, X) {
                    var G,
                      N,
                      R = m.max_chain_length,
                      z = m.strstart,
                      re = m.prev_length,
                      ae = m.nice_match,
                      Y =
                        m.strstart > m.w_size - J
                          ? m.strstart - (m.w_size - J)
                          : 0,
                      ue = m.window,
                      _e = m.w_mask,
                      de = m.prev,
                      xe = m.strstart + U,
                      Be = ue[z + re - 1],
                      Ne = ue[z + re];
                    m.prev_length >= m.good_match && (R >>= 2),
                      ae > m.lookahead && (ae = m.lookahead);
                    do
                      if (
                        ue[(G = X) + re] === Ne &&
                        ue[G + re - 1] === Be &&
                        ue[G] === ue[z] &&
                        ue[++G] === ue[z + 1]
                      ) {
                        (z += 2), G++;
                        do;
                        while (
                          ue[++z] === ue[++G] &&
                          ue[++z] === ue[++G] &&
                          ue[++z] === ue[++G] &&
                          ue[++z] === ue[++G] &&
                          ue[++z] === ue[++G] &&
                          ue[++z] === ue[++G] &&
                          ue[++z] === ue[++G] &&
                          ue[++z] === ue[++G] &&
                          z < xe
                        );
                        if (((N = U - (xe - z)), (z = xe - U), re < N)) {
                          if (((m.match_start = X), ae <= (re = N))) break;
                          (Be = ue[z + re - 1]), (Ne = ue[z + re]);
                        }
                      }
                    while ((X = de[X & _e]) > Y && --R != 0);
                    return re <= m.lookahead ? re : m.lookahead;
                  }
                  function Te(m) {
                    var X,
                      G,
                      N,
                      R,
                      z,
                      re,
                      ae,
                      Y,
                      ue,
                      _e,
                      de = m.w_size;
                    do {
                      if (
                        ((R = m.window_size - m.lookahead - m.strstart),
                        m.strstart >= de + (de - J))
                      ) {
                        for (
                          d.arraySet(m.window, m.window, de, de, 0),
                            m.match_start -= de,
                            m.strstart -= de,
                            m.block_start -= de,
                            X = G = m.hash_size;
                          (N = m.head[--X]),
                            (m.head[X] = de <= N ? N - de : 0),
                            --G;

                        );
                        for (
                          X = G = de;
                          (N = m.prev[--X]),
                            (m.prev[X] = de <= N ? N - de : 0),
                            --G;

                        );
                        R += de;
                      }
                      if (m.strm.avail_in === 0) break;
                      if (
                        ((re = m.strm),
                        (ae = m.window),
                        (Y = m.strstart + m.lookahead),
                        (ue = R),
                        (_e = void 0),
                        (_e = re.avail_in),
                        ue < _e && (_e = ue),
                        (G =
                          _e === 0
                            ? 0
                            : ((re.avail_in -= _e),
                              d.arraySet(ae, re.input, re.next_in, _e, Y),
                              re.state.wrap === 1
                                ? (re.adler = p(re.adler, ae, _e, Y))
                                : re.state.wrap === 2 &&
                                  (re.adler = v(re.adler, ae, _e, Y)),
                              (re.next_in += _e),
                              (re.total_in += _e),
                              _e)),
                        (m.lookahead += G),
                        m.lookahead + m.insert >= O)
                      )
                        for (
                          z = m.strstart - m.insert,
                            m.ins_h = m.window[z],
                            m.ins_h =
                              ((m.ins_h << m.hash_shift) ^ m.window[z + 1]) &
                              m.hash_mask;
                          m.insert &&
                          ((m.ins_h =
                            ((m.ins_h << m.hash_shift) ^ m.window[z + O - 1]) &
                            m.hash_mask),
                          (m.prev[z & m.w_mask] = m.head[m.ins_h]),
                          (m.head[m.ins_h] = z),
                          z++,
                          m.insert--,
                          !(m.lookahead + m.insert < O));

                        );
                    } while (m.lookahead < J && m.strm.avail_in !== 0);
                  }
                  function Pe(m, X) {
                    for (var G, N; ; ) {
                      if (m.lookahead < J) {
                        if ((Te(m), m.lookahead < J && X === s)) return k;
                        if (m.lookahead === 0) break;
                      }
                      if (
                        ((G = 0),
                        m.lookahead >= O &&
                          ((m.ins_h =
                            ((m.ins_h << m.hash_shift) ^
                              m.window[m.strstart + O - 1]) &
                            m.hash_mask),
                          (G = m.prev[m.strstart & m.w_mask] = m.head[m.ins_h]),
                          (m.head[m.ins_h] = m.strstart)),
                        G !== 0 &&
                          m.strstart - G <= m.w_size - J &&
                          (m.match_length = he(m, G)),
                        m.match_length >= O)
                      )
                        if (
                          ((N = l._tr_tally(
                            m,
                            m.strstart - m.match_start,
                            m.match_length - O
                          )),
                          (m.lookahead -= m.match_length),
                          m.match_length <= m.max_lazy_match &&
                            m.lookahead >= O)
                        ) {
                          for (
                            m.match_length--;
                            m.strstart++,
                              (m.ins_h =
                                ((m.ins_h << m.hash_shift) ^
                                  m.window[m.strstart + O - 1]) &
                                m.hash_mask),
                              (G = m.prev[m.strstart & m.w_mask] =
                                m.head[m.ins_h]),
                              (m.head[m.ins_h] = m.strstart),
                              --m.match_length != 0;

                          );
                          m.strstart++;
                        } else
                          (m.strstart += m.match_length),
                            (m.match_length = 0),
                            (m.ins_h = m.window[m.strstart]),
                            (m.ins_h =
                              ((m.ins_h << m.hash_shift) ^
                                m.window[m.strstart + 1]) &
                              m.hash_mask);
                      else
                        (N = l._tr_tally(m, 0, m.window[m.strstart])),
                          m.lookahead--,
                          m.strstart++;
                      if (N && (H(m, !1), m.strm.avail_out === 0)) return k;
                    }
                    return (
                      (m.insert = m.strstart < O - 1 ? m.strstart : O - 1),
                      X === b
                        ? (H(m, !0), m.strm.avail_out === 0 ? ee : Z)
                        : m.last_lit && (H(m, !1), m.strm.avail_out === 0)
                        ? k
                        : V
                    );
                  }
                  function Re(m, X) {
                    for (var G, N, R; ; ) {
                      if (m.lookahead < J) {
                        if ((Te(m), m.lookahead < J && X === s)) return k;
                        if (m.lookahead === 0) break;
                      }
                      if (
                        ((G = 0),
                        m.lookahead >= O &&
                          ((m.ins_h =
                            ((m.ins_h << m.hash_shift) ^
                              m.window[m.strstart + O - 1]) &
                            m.hash_mask),
                          (G = m.prev[m.strstart & m.w_mask] = m.head[m.ins_h]),
                          (m.head[m.ins_h] = m.strstart)),
                        (m.prev_length = m.match_length),
                        (m.prev_match = m.match_start),
                        (m.match_length = O - 1),
                        G !== 0 &&
                          m.prev_length < m.max_lazy_match &&
                          m.strstart - G <= m.w_size - J &&
                          ((m.match_length = he(m, G)),
                          m.match_length <= 5 &&
                            (m.strategy === 1 ||
                              (m.match_length === O &&
                                4096 < m.strstart - m.match_start)) &&
                            (m.match_length = O - 1)),
                        m.prev_length >= O && m.match_length <= m.prev_length)
                      ) {
                        for (
                          R = m.strstart + m.lookahead - O,
                            N = l._tr_tally(
                              m,
                              m.strstart - 1 - m.prev_match,
                              m.prev_length - O
                            ),
                            m.lookahead -= m.prev_length - 1,
                            m.prev_length -= 2;
                          ++m.strstart <= R &&
                            ((m.ins_h =
                              ((m.ins_h << m.hash_shift) ^
                                m.window[m.strstart + O - 1]) &
                              m.hash_mask),
                            (G = m.prev[m.strstart & m.w_mask] =
                              m.head[m.ins_h]),
                            (m.head[m.ins_h] = m.strstart)),
                            --m.prev_length != 0;

                        );
                        if (
                          ((m.match_available = 0),
                          (m.match_length = O - 1),
                          m.strstart++,
                          N && (H(m, !1), m.strm.avail_out === 0))
                        )
                          return k;
                      } else if (m.match_available) {
                        if (
                          ((N = l._tr_tally(m, 0, m.window[m.strstart - 1])) &&
                            H(m, !1),
                          m.strstart++,
                          m.lookahead--,
                          m.strm.avail_out === 0)
                        )
                          return k;
                      } else
                        (m.match_available = 1), m.strstart++, m.lookahead--;
                    }
                    return (
                      m.match_available &&
                        ((N = l._tr_tally(m, 0, m.window[m.strstart - 1])),
                        (m.match_available = 0)),
                      (m.insert = m.strstart < O - 1 ? m.strstart : O - 1),
                      X === b
                        ? (H(m, !0), m.strm.avail_out === 0 ? ee : Z)
                        : m.last_lit && (H(m, !1), m.strm.avail_out === 0)
                        ? k
                        : V
                    );
                  }
                  function Oe(m, X, G, N, R) {
                    (this.good_length = m),
                      (this.max_lazy = X),
                      (this.nice_length = G),
                      (this.max_chain = N),
                      (this.func = R);
                  }
                  function Fe() {
                    (this.strm = null),
                      (this.status = 0),
                      (this.pending_buf = null),
                      (this.pending_buf_size = 0),
                      (this.pending_out = 0),
                      (this.pending = 0),
                      (this.wrap = 0),
                      (this.gzhead = null),
                      (this.gzindex = 0),
                      (this.method = u),
                      (this.last_flush = -1),
                      (this.w_size = 0),
                      (this.w_bits = 0),
                      (this.w_mask = 0),
                      (this.window = null),
                      (this.window_size = 0),
                      (this.prev = null),
                      (this.head = null),
                      (this.ins_h = 0),
                      (this.hash_size = 0),
                      (this.hash_bits = 0),
                      (this.hash_mask = 0),
                      (this.hash_shift = 0),
                      (this.block_start = 0),
                      (this.match_length = 0),
                      (this.prev_match = 0),
                      (this.match_available = 0),
                      (this.strstart = 0),
                      (this.match_start = 0),
                      (this.lookahead = 0),
                      (this.prev_length = 0),
                      (this.max_chain_length = 0),
                      (this.max_lazy_match = 0),
                      (this.level = 0),
                      (this.strategy = 0),
                      (this.good_match = 0),
                      (this.nice_match = 0),
                      (this.dyn_ltree = new d.Buf16(2 * I)),
                      (this.dyn_dtree = new d.Buf16(2 * (2 * y + 1))),
                      (this.bl_tree = new d.Buf16(2 * (2 * T + 1))),
                      ce(this.dyn_ltree),
                      ce(this.dyn_dtree),
                      ce(this.bl_tree),
                      (this.l_desc = null),
                      (this.d_desc = null),
                      (this.bl_desc = null),
                      (this.bl_count = new d.Buf16(M + 1)),
                      (this.heap = new d.Buf16(2 * w + 1)),
                      ce(this.heap),
                      (this.heap_len = 0),
                      (this.heap_max = 0),
                      (this.depth = new d.Buf16(2 * w + 1)),
                      ce(this.depth),
                      (this.l_buf = 0),
                      (this.lit_bufsize = 0),
                      (this.last_lit = 0),
                      (this.d_buf = 0),
                      (this.opt_len = 0),
                      (this.static_len = 0),
                      (this.matches = 0),
                      (this.insert = 0),
                      (this.bi_buf = 0),
                      (this.bi_valid = 0);
                  }
                  function $e(m) {
                    var X;
                    return m && m.state
                      ? ((m.total_in = m.total_out = 0),
                        (m.data_type = o),
                        ((X = m.state).pending = 0),
                        (X.pending_out = 0),
                        X.wrap < 0 && (X.wrap = -X.wrap),
                        (X.status = X.wrap ? C : D),
                        (m.adler = X.wrap === 2 ? 0 : 1),
                        (X.last_flush = s),
                        l._tr_init(X),
                        f)
                      : ve(m, S);
                  }
                  function it(m) {
                    var X = $e(m);
                    return (
                      X === f &&
                        (function (G) {
                          (G.window_size = 2 * G.w_size),
                            ce(G.head),
                            (G.max_lazy_match = n[G.level].max_lazy),
                            (G.good_match = n[G.level].good_length),
                            (G.nice_match = n[G.level].nice_length),
                            (G.max_chain_length = n[G.level].max_chain),
                            (G.strstart = 0),
                            (G.block_start = 0),
                            (G.lookahead = 0),
                            (G.insert = 0),
                            (G.match_length = G.prev_length = O - 1),
                            (G.match_available = 0),
                            (G.ins_h = 0);
                        })(m.state),
                      X
                    );
                  }
                  function ye(m, X, G, N, R, z) {
                    if (!m) return S;
                    var re = 1;
                    if (
                      (X === c && (X = 6),
                      N < 0
                        ? ((re = 0), (N = -N))
                        : 15 < N && ((re = 2), (N -= 16)),
                      R < 1 ||
                        _ < R ||
                        G !== u ||
                        N < 8 ||
                        15 < N ||
                        X < 0 ||
                        9 < X ||
                        z < 0 ||
                        h < z)
                    )
                      return ve(m, S);
                    N === 8 && (N = 9);
                    var ae = new Fe();
                    return (
                      ((m.state = ae).strm = m),
                      (ae.wrap = re),
                      (ae.gzhead = null),
                      (ae.w_bits = N),
                      (ae.w_size = 1 << ae.w_bits),
                      (ae.w_mask = ae.w_size - 1),
                      (ae.hash_bits = R + 7),
                      (ae.hash_size = 1 << ae.hash_bits),
                      (ae.hash_mask = ae.hash_size - 1),
                      (ae.hash_shift = ~~((ae.hash_bits + O - 1) / O)),
                      (ae.window = new d.Buf8(2 * ae.w_size)),
                      (ae.head = new d.Buf16(ae.hash_size)),
                      (ae.prev = new d.Buf16(ae.w_size)),
                      (ae.lit_bufsize = 1 << (R + 6)),
                      (ae.pending_buf_size = 4 * ae.lit_bufsize),
                      (ae.pending_buf = new d.Buf8(ae.pending_buf_size)),
                      (ae.d_buf = 1 * ae.lit_bufsize),
                      (ae.l_buf = 3 * ae.lit_bufsize),
                      (ae.level = X),
                      (ae.strategy = z),
                      (ae.method = G),
                      it(m)
                    );
                  }
                  (n = [
                    new Oe(0, 0, 0, 0, function (m, X) {
                      var G = 65535;
                      for (
                        G > m.pending_buf_size - 5 &&
                        (G = m.pending_buf_size - 5);
                        ;

                      ) {
                        if (m.lookahead <= 1) {
                          if ((Te(m), m.lookahead === 0 && X === s)) return k;
                          if (m.lookahead === 0) break;
                        }
                        (m.strstart += m.lookahead), (m.lookahead = 0);
                        var N = m.block_start + G;
                        if (
                          ((m.strstart === 0 || m.strstart >= N) &&
                            ((m.lookahead = m.strstart - N),
                            (m.strstart = N),
                            H(m, !1),
                            m.strm.avail_out === 0)) ||
                          (m.strstart - m.block_start >= m.w_size - J &&
                            (H(m, !1), m.strm.avail_out === 0))
                        )
                          return k;
                      }
                      return (
                        (m.insert = 0),
                        X === b
                          ? (H(m, !0), m.strm.avail_out === 0 ? ee : Z)
                          : (m.strstart > m.block_start &&
                              (H(m, !1), m.strm.avail_out),
                            k)
                      );
                    }),
                    new Oe(4, 4, 8, 4, Pe),
                    new Oe(4, 5, 16, 8, Pe),
                    new Oe(4, 6, 32, 32, Pe),
                    new Oe(4, 4, 16, 16, Re),
                    new Oe(8, 16, 32, 32, Re),
                    new Oe(8, 16, 128, 128, Re),
                    new Oe(8, 32, 128, 256, Re),
                    new Oe(32, 128, 258, 1024, Re),
                    new Oe(32, 258, 258, 4096, Re),
                  ]),
                    (i.deflateInit = function (m, X) {
                      return ye(m, X, u, 15, 8, 0);
                    }),
                    (i.deflateInit2 = ye),
                    (i.deflateReset = it),
                    (i.deflateResetKeep = $e),
                    (i.deflateSetHeader = function (m, X) {
                      return m && m.state
                        ? m.state.wrap !== 2
                          ? S
                          : ((m.state.gzhead = X), f)
                        : S;
                    }),
                    (i.deflate = function (m, X) {
                      var G, N, R, z;
                      if (!m || !m.state || 5 < X || X < 0)
                        return m ? ve(m, S) : S;
                      if (
                        ((N = m.state),
                        !m.output ||
                          (!m.input && m.avail_in !== 0) ||
                          (N.status === 666 && X !== b))
                      )
                        return ve(m, m.avail_out === 0 ? -5 : S);
                      if (
                        ((N.strm = m),
                        (G = N.last_flush),
                        (N.last_flush = X),
                        N.status === C)
                      )
                        if (N.wrap === 2)
                          (m.adler = 0),
                            Ee(N, 31),
                            Ee(N, 139),
                            Ee(N, 8),
                            N.gzhead
                              ? (Ee(
                                  N,
                                  (N.gzhead.text ? 1 : 0) +
                                    (N.gzhead.hcrc ? 2 : 0) +
                                    (N.gzhead.extra ? 4 : 0) +
                                    (N.gzhead.name ? 8 : 0) +
                                    (N.gzhead.comment ? 16 : 0)
                                ),
                                Ee(N, 255 & N.gzhead.time),
                                Ee(N, (N.gzhead.time >> 8) & 255),
                                Ee(N, (N.gzhead.time >> 16) & 255),
                                Ee(N, (N.gzhead.time >> 24) & 255),
                                Ee(
                                  N,
                                  N.level === 9
                                    ? 2
                                    : 2 <= N.strategy || N.level < 2
                                    ? 4
                                    : 0
                                ),
                                Ee(N, 255 & N.gzhead.os),
                                N.gzhead.extra &&
                                  N.gzhead.extra.length &&
                                  (Ee(N, 255 & N.gzhead.extra.length),
                                  Ee(N, (N.gzhead.extra.length >> 8) & 255)),
                                N.gzhead.hcrc &&
                                  (m.adler = v(
                                    m.adler,
                                    N.pending_buf,
                                    N.pending,
                                    0
                                  )),
                                (N.gzindex = 0),
                                (N.status = 69))
                              : (Ee(N, 0),
                                Ee(N, 0),
                                Ee(N, 0),
                                Ee(N, 0),
                                Ee(N, 0),
                                Ee(
                                  N,
                                  N.level === 9
                                    ? 2
                                    : 2 <= N.strategy || N.level < 2
                                    ? 4
                                    : 0
                                ),
                                Ee(N, 3),
                                (N.status = D));
                        else {
                          var re = (u + ((N.w_bits - 8) << 4)) << 8;
                          (re |=
                            (2 <= N.strategy || N.level < 2
                              ? 0
                              : N.level < 6
                              ? 1
                              : N.level === 6
                              ? 2
                              : 3) << 6),
                            N.strstart !== 0 && (re |= 32),
                            (re += 31 - (re % 31)),
                            (N.status = D),
                            fe(N, re),
                            N.strstart !== 0 &&
                              (fe(N, m.adler >>> 16), fe(N, 65535 & m.adler)),
                            (m.adler = 1);
                        }
                      if (N.status === 69)
                        if (N.gzhead.extra) {
                          for (
                            R = N.pending;
                            N.gzindex < (65535 & N.gzhead.extra.length) &&
                            (N.pending !== N.pending_buf_size ||
                              (N.gzhead.hcrc &&
                                N.pending > R &&
                                (m.adler = v(
                                  m.adler,
                                  N.pending_buf,
                                  N.pending - R,
                                  R
                                )),
                              B(m),
                              (R = N.pending),
                              N.pending !== N.pending_buf_size));

                          )
                            Ee(N, 255 & N.gzhead.extra[N.gzindex]), N.gzindex++;
                          N.gzhead.hcrc &&
                            N.pending > R &&
                            (m.adler = v(
                              m.adler,
                              N.pending_buf,
                              N.pending - R,
                              R
                            )),
                            N.gzindex === N.gzhead.extra.length &&
                              ((N.gzindex = 0), (N.status = 73));
                        } else N.status = 73;
                      if (N.status === 73)
                        if (N.gzhead.name) {
                          R = N.pending;
                          do {
                            if (
                              N.pending === N.pending_buf_size &&
                              (N.gzhead.hcrc &&
                                N.pending > R &&
                                (m.adler = v(
                                  m.adler,
                                  N.pending_buf,
                                  N.pending - R,
                                  R
                                )),
                              B(m),
                              (R = N.pending),
                              N.pending === N.pending_buf_size)
                            ) {
                              z = 1;
                              break;
                            }
                            (z =
                              N.gzindex < N.gzhead.name.length
                                ? 255 & N.gzhead.name.charCodeAt(N.gzindex++)
                                : 0),
                              Ee(N, z);
                          } while (z !== 0);
                          N.gzhead.hcrc &&
                            N.pending > R &&
                            (m.adler = v(
                              m.adler,
                              N.pending_buf,
                              N.pending - R,
                              R
                            )),
                            z === 0 && ((N.gzindex = 0), (N.status = 91));
                        } else N.status = 91;
                      if (N.status === 91)
                        if (N.gzhead.comment) {
                          R = N.pending;
                          do {
                            if (
                              N.pending === N.pending_buf_size &&
                              (N.gzhead.hcrc &&
                                N.pending > R &&
                                (m.adler = v(
                                  m.adler,
                                  N.pending_buf,
                                  N.pending - R,
                                  R
                                )),
                              B(m),
                              (R = N.pending),
                              N.pending === N.pending_buf_size)
                            ) {
                              z = 1;
                              break;
                            }
                            (z =
                              N.gzindex < N.gzhead.comment.length
                                ? 255 & N.gzhead.comment.charCodeAt(N.gzindex++)
                                : 0),
                              Ee(N, z);
                          } while (z !== 0);
                          N.gzhead.hcrc &&
                            N.pending > R &&
                            (m.adler = v(
                              m.adler,
                              N.pending_buf,
                              N.pending - R,
                              R
                            )),
                            z === 0 && (N.status = 103);
                        } else N.status = 103;
                      if (
                        (N.status === 103 &&
                          (N.gzhead.hcrc
                            ? (N.pending + 2 > N.pending_buf_size && B(m),
                              N.pending + 2 <= N.pending_buf_size &&
                                (Ee(N, 255 & m.adler),
                                Ee(N, (m.adler >> 8) & 255),
                                (m.adler = 0),
                                (N.status = D)))
                            : (N.status = D)),
                        N.pending !== 0)
                      ) {
                        if ((B(m), m.avail_out === 0))
                          return (N.last_flush = -1), f;
                      } else if (m.avail_in === 0 && Q(X) <= Q(G) && X !== b)
                        return ve(m, -5);
                      if (N.status === 666 && m.avail_in !== 0)
                        return ve(m, -5);
                      if (
                        m.avail_in !== 0 ||
                        N.lookahead !== 0 ||
                        (X !== s && N.status !== 666)
                      ) {
                        var ae =
                          N.strategy === 2
                            ? (function (Y, ue) {
                                for (var _e; ; ) {
                                  if (
                                    Y.lookahead === 0 &&
                                    (Te(Y), Y.lookahead === 0)
                                  ) {
                                    if (ue === s) return k;
                                    break;
                                  }
                                  if (
                                    ((Y.match_length = 0),
                                    (_e = l._tr_tally(
                                      Y,
                                      0,
                                      Y.window[Y.strstart]
                                    )),
                                    Y.lookahead--,
                                    Y.strstart++,
                                    _e && (H(Y, !1), Y.strm.avail_out === 0))
                                  )
                                    return k;
                                }
                                return (
                                  (Y.insert = 0),
                                  ue === b
                                    ? (H(Y, !0),
                                      Y.strm.avail_out === 0 ? ee : Z)
                                    : Y.last_lit &&
                                      (H(Y, !1), Y.strm.avail_out === 0)
                                    ? k
                                    : V
                                );
                              })(N, X)
                            : N.strategy === 3
                            ? (function (Y, ue) {
                                for (var _e, de, xe, Be, Ne = Y.window; ; ) {
                                  if (Y.lookahead <= U) {
                                    if ((Te(Y), Y.lookahead <= U && ue === s))
                                      return k;
                                    if (Y.lookahead === 0) break;
                                  }
                                  if (
                                    ((Y.match_length = 0),
                                    Y.lookahead >= O &&
                                      0 < Y.strstart &&
                                      (de = Ne[(xe = Y.strstart - 1)]) ===
                                        Ne[++xe] &&
                                      de === Ne[++xe] &&
                                      de === Ne[++xe])
                                  ) {
                                    Be = Y.strstart + U;
                                    do;
                                    while (
                                      de === Ne[++xe] &&
                                      de === Ne[++xe] &&
                                      de === Ne[++xe] &&
                                      de === Ne[++xe] &&
                                      de === Ne[++xe] &&
                                      de === Ne[++xe] &&
                                      de === Ne[++xe] &&
                                      de === Ne[++xe] &&
                                      xe < Be
                                    );
                                    (Y.match_length = U - (Be - xe)),
                                      Y.match_length > Y.lookahead &&
                                        (Y.match_length = Y.lookahead);
                                  }
                                  if (
                                    (Y.match_length >= O
                                      ? ((_e = l._tr_tally(
                                          Y,
                                          1,
                                          Y.match_length - O
                                        )),
                                        (Y.lookahead -= Y.match_length),
                                        (Y.strstart += Y.match_length),
                                        (Y.match_length = 0))
                                      : ((_e = l._tr_tally(
                                          Y,
                                          0,
                                          Y.window[Y.strstart]
                                        )),
                                        Y.lookahead--,
                                        Y.strstart++),
                                    _e && (H(Y, !1), Y.strm.avail_out === 0))
                                  )
                                    return k;
                                }
                                return (
                                  (Y.insert = 0),
                                  ue === b
                                    ? (H(Y, !0),
                                      Y.strm.avail_out === 0 ? ee : Z)
                                    : Y.last_lit &&
                                      (H(Y, !1), Y.strm.avail_out === 0)
                                    ? k
                                    : V
                                );
                              })(N, X)
                            : n[N.level].func(N, X);
                        if (
                          ((ae !== ee && ae !== Z) || (N.status = 666),
                          ae === k || ae === ee)
                        )
                          return m.avail_out === 0 && (N.last_flush = -1), f;
                        if (
                          ae === V &&
                          (X === 1
                            ? l._tr_align(N)
                            : X !== 5 &&
                              (l._tr_stored_block(N, 0, 0, !1),
                              X === 3 &&
                                (ce(N.head),
                                N.lookahead === 0 &&
                                  ((N.strstart = 0),
                                  (N.block_start = 0),
                                  (N.insert = 0)))),
                          B(m),
                          m.avail_out === 0)
                        )
                          return (N.last_flush = -1), f;
                      }
                      return X !== b
                        ? f
                        : N.wrap <= 0
                        ? 1
                        : (N.wrap === 2
                            ? (Ee(N, 255 & m.adler),
                              Ee(N, (m.adler >> 8) & 255),
                              Ee(N, (m.adler >> 16) & 255),
                              Ee(N, (m.adler >> 24) & 255),
                              Ee(N, 255 & m.total_in),
                              Ee(N, (m.total_in >> 8) & 255),
                              Ee(N, (m.total_in >> 16) & 255),
                              Ee(N, (m.total_in >> 24) & 255))
                            : (fe(N, m.adler >>> 16), fe(N, 65535 & m.adler)),
                          B(m),
                          0 < N.wrap && (N.wrap = -N.wrap),
                          N.pending !== 0 ? f : 1);
                    }),
                    (i.deflateEnd = function (m) {
                      var X;
                      return m && m.state
                        ? (X = m.state.status) !== C &&
                          X !== 69 &&
                          X !== 73 &&
                          X !== 91 &&
                          X !== 103 &&
                          X !== D &&
                          X !== 666
                          ? ve(m, S)
                          : ((m.state = null), X === D ? ve(m, -3) : f)
                        : S;
                    }),
                    (i.deflateSetDictionary = function (m, X) {
                      var G,
                        N,
                        R,
                        z,
                        re,
                        ae,
                        Y,
                        ue,
                        _e = X.length;
                      if (
                        !m ||
                        !m.state ||
                        (z = (G = m.state).wrap) === 2 ||
                        (z === 1 && G.status !== C) ||
                        G.lookahead
                      )
                        return S;
                      for (
                        z === 1 && (m.adler = p(m.adler, X, _e, 0)),
                          G.wrap = 0,
                          _e >= G.w_size &&
                            (z === 0 &&
                              (ce(G.head),
                              (G.strstart = 0),
                              (G.block_start = 0),
                              (G.insert = 0)),
                            (ue = new d.Buf8(G.w_size)),
                            d.arraySet(ue, X, _e - G.w_size, G.w_size, 0),
                            (X = ue),
                            (_e = G.w_size)),
                          re = m.avail_in,
                          ae = m.next_in,
                          Y = m.input,
                          m.avail_in = _e,
                          m.next_in = 0,
                          m.input = X,
                          Te(G);
                        G.lookahead >= O;

                      ) {
                        for (
                          N = G.strstart, R = G.lookahead - (O - 1);
                          (G.ins_h =
                            ((G.ins_h << G.hash_shift) ^ G.window[N + O - 1]) &
                            G.hash_mask),
                            (G.prev[N & G.w_mask] = G.head[G.ins_h]),
                            (G.head[G.ins_h] = N),
                            N++,
                            --R;

                        );
                        (G.strstart = N), (G.lookahead = O - 1), Te(G);
                      }
                      return (
                        (G.strstart += G.lookahead),
                        (G.block_start = G.strstart),
                        (G.insert = G.lookahead),
                        (G.lookahead = 0),
                        (G.match_length = G.prev_length = O - 1),
                        (G.match_available = 0),
                        (m.next_in = ae),
                        (m.input = Y),
                        (m.avail_in = re),
                        (G.wrap = z),
                        f
                      );
                    }),
                    (i.deflateInfo = "pako deflate (from Nodeca project)");
                },
                {
                  "../utils/common": 41,
                  "./adler32": 43,
                  "./crc32": 45,
                  "./messages": 51,
                  "./trees": 52,
                },
              ],
              47: [
                function (t, a, i) {
                  a.exports = function () {
                    (this.text = 0),
                      (this.time = 0),
                      (this.xflags = 0),
                      (this.os = 0),
                      (this.extra = null),
                      (this.extra_len = 0),
                      (this.name = ""),
                      (this.comment = ""),
                      (this.hcrc = 0),
                      (this.done = !1);
                  };
                },
                {},
              ],
              48: [
                function (t, a, i) {
                  a.exports = function (n, d) {
                    var l,
                      p,
                      v,
                      x,
                      s,
                      b,
                      f,
                      S,
                      c,
                      h,
                      o,
                      u,
                      _,
                      w,
                      y,
                      T,
                      I,
                      M,
                      O,
                      U,
                      J,
                      C,
                      D,
                      k,
                      V;
                    (l = n.state),
                      (p = n.next_in),
                      (k = n.input),
                      (v = p + (n.avail_in - 5)),
                      (x = n.next_out),
                      (V = n.output),
                      (s = x - (d - n.avail_out)),
                      (b = x + (n.avail_out - 257)),
                      (f = l.dmax),
                      (S = l.wsize),
                      (c = l.whave),
                      (h = l.wnext),
                      (o = l.window),
                      (u = l.hold),
                      (_ = l.bits),
                      (w = l.lencode),
                      (y = l.distcode),
                      (T = (1 << l.lenbits) - 1),
                      (I = (1 << l.distbits) - 1);
                    e: do {
                      _ < 15 &&
                        ((u += k[p++] << _),
                        (_ += 8),
                        (u += k[p++] << _),
                        (_ += 8)),
                        (M = w[u & T]);
                      t: for (;;) {
                        if (
                          ((u >>>= O = M >>> 24),
                          (_ -= O),
                          (O = (M >>> 16) & 255) === 0)
                        )
                          V[x++] = 65535 & M;
                        else {
                          if (!(16 & O)) {
                            if ((64 & O) == 0) {
                              M = w[(65535 & M) + (u & ((1 << O) - 1))];
                              continue t;
                            }
                            if (32 & O) {
                              l.mode = 12;
                              break e;
                            }
                            (n.msg = "invalid literal/length code"),
                              (l.mode = 30);
                            break e;
                          }
                          (U = 65535 & M),
                            (O &= 15) &&
                              (_ < O && ((u += k[p++] << _), (_ += 8)),
                              (U += u & ((1 << O) - 1)),
                              (u >>>= O),
                              (_ -= O)),
                            _ < 15 &&
                              ((u += k[p++] << _),
                              (_ += 8),
                              (u += k[p++] << _),
                              (_ += 8)),
                            (M = y[u & I]);
                          n: for (;;) {
                            if (
                              ((u >>>= O = M >>> 24),
                              (_ -= O),
                              !(16 & (O = (M >>> 16) & 255)))
                            ) {
                              if ((64 & O) == 0) {
                                M = y[(65535 & M) + (u & ((1 << O) - 1))];
                                continue n;
                              }
                              (n.msg = "invalid distance code"), (l.mode = 30);
                              break e;
                            }
                            if (
                              ((J = 65535 & M),
                              _ < (O &= 15) &&
                                ((u += k[p++] << _),
                                (_ += 8) < O && ((u += k[p++] << _), (_ += 8))),
                              f < (J += u & ((1 << O) - 1)))
                            ) {
                              (n.msg = "invalid distance too far back"),
                                (l.mode = 30);
                              break e;
                            }
                            if (((u >>>= O), (_ -= O), (O = x - s) < J)) {
                              if (c < (O = J - O) && l.sane) {
                                (n.msg = "invalid distance too far back"),
                                  (l.mode = 30);
                                break e;
                              }
                              if (((D = o), (C = 0) === h)) {
                                if (((C += S - O), O < U)) {
                                  for (U -= O; (V[x++] = o[C++]), --O; );
                                  (C = x - J), (D = V);
                                }
                              } else if (h < O) {
                                if (((C += S + h - O), (O -= h) < U)) {
                                  for (U -= O; (V[x++] = o[C++]), --O; );
                                  if (((C = 0), h < U)) {
                                    for (U -= O = h; (V[x++] = o[C++]), --O; );
                                    (C = x - J), (D = V);
                                  }
                                }
                              } else if (((C += h - O), O < U)) {
                                for (U -= O; (V[x++] = o[C++]), --O; );
                                (C = x - J), (D = V);
                              }
                              for (; 2 < U; )
                                (V[x++] = D[C++]),
                                  (V[x++] = D[C++]),
                                  (V[x++] = D[C++]),
                                  (U -= 3);
                              U &&
                                ((V[x++] = D[C++]), 1 < U && (V[x++] = D[C++]));
                            } else {
                              for (
                                C = x - J;
                                (V[x++] = V[C++]),
                                  (V[x++] = V[C++]),
                                  (V[x++] = V[C++]),
                                  2 < (U -= 3);

                              );
                              U &&
                                ((V[x++] = V[C++]), 1 < U && (V[x++] = V[C++]));
                            }
                            break;
                          }
                        }
                        break;
                      }
                    } while (p < v && x < b);
                    (p -= U = _ >> 3),
                      (u &= (1 << (_ -= U << 3)) - 1),
                      (n.next_in = p),
                      (n.next_out = x),
                      (n.avail_in = p < v ? v - p + 5 : 5 - (p - v)),
                      (n.avail_out = x < b ? b - x + 257 : 257 - (x - b)),
                      (l.hold = u),
                      (l.bits = _);
                  };
                },
                {},
              ],
              49: [
                function (t, a, i) {
                  var n = t("../utils/common"),
                    d = t("./adler32"),
                    l = t("./crc32"),
                    p = t("./inffast"),
                    v = t("./inftrees"),
                    x = 1,
                    s = 2,
                    b = 0,
                    f = -2,
                    S = 1,
                    c = 852,
                    h = 592;
                  function o(C) {
                    return (
                      ((C >>> 24) & 255) +
                      ((C >>> 8) & 65280) +
                      ((65280 & C) << 8) +
                      ((255 & C) << 24)
                    );
                  }
                  function u() {
                    (this.mode = 0),
                      (this.last = !1),
                      (this.wrap = 0),
                      (this.havedict = !1),
                      (this.flags = 0),
                      (this.dmax = 0),
                      (this.check = 0),
                      (this.total = 0),
                      (this.head = null),
                      (this.wbits = 0),
                      (this.wsize = 0),
                      (this.whave = 0),
                      (this.wnext = 0),
                      (this.window = null),
                      (this.hold = 0),
                      (this.bits = 0),
                      (this.length = 0),
                      (this.offset = 0),
                      (this.extra = 0),
                      (this.lencode = null),
                      (this.distcode = null),
                      (this.lenbits = 0),
                      (this.distbits = 0),
                      (this.ncode = 0),
                      (this.nlen = 0),
                      (this.ndist = 0),
                      (this.have = 0),
                      (this.next = null),
                      (this.lens = new n.Buf16(320)),
                      (this.work = new n.Buf16(288)),
                      (this.lendyn = null),
                      (this.distdyn = null),
                      (this.sane = 0),
                      (this.back = 0),
                      (this.was = 0);
                  }
                  function _(C) {
                    var D;
                    return C && C.state
                      ? ((D = C.state),
                        (C.total_in = C.total_out = D.total = 0),
                        (C.msg = ""),
                        D.wrap && (C.adler = 1 & D.wrap),
                        (D.mode = S),
                        (D.last = 0),
                        (D.havedict = 0),
                        (D.dmax = 32768),
                        (D.head = null),
                        (D.hold = 0),
                        (D.bits = 0),
                        (D.lencode = D.lendyn = new n.Buf32(c)),
                        (D.distcode = D.distdyn = new n.Buf32(h)),
                        (D.sane = 1),
                        (D.back = -1),
                        b)
                      : f;
                  }
                  function w(C) {
                    var D;
                    return C && C.state
                      ? (((D = C.state).wsize = 0),
                        (D.whave = 0),
                        (D.wnext = 0),
                        _(C))
                      : f;
                  }
                  function y(C, D) {
                    var k, V;
                    return C && C.state
                      ? ((V = C.state),
                        D < 0
                          ? ((k = 0), (D = -D))
                          : ((k = 1 + (D >> 4)), D < 48 && (D &= 15)),
                        D && (D < 8 || 15 < D)
                          ? f
                          : (V.window !== null &&
                              V.wbits !== D &&
                              (V.window = null),
                            (V.wrap = k),
                            (V.wbits = D),
                            w(C)))
                      : f;
                  }
                  function T(C, D) {
                    var k, V;
                    return C
                      ? ((V = new u()),
                        ((C.state = V).window = null),
                        (k = y(C, D)) !== b && (C.state = null),
                        k)
                      : f;
                  }
                  var I,
                    M,
                    O = !0;
                  function U(C) {
                    if (O) {
                      var D;
                      for (
                        I = new n.Buf32(512), M = new n.Buf32(32), D = 0;
                        D < 144;

                      )
                        C.lens[D++] = 8;
                      for (; D < 256; ) C.lens[D++] = 9;
                      for (; D < 280; ) C.lens[D++] = 7;
                      for (; D < 288; ) C.lens[D++] = 8;
                      for (
                        v(x, C.lens, 0, 288, I, 0, C.work, { bits: 9 }), D = 0;
                        D < 32;

                      )
                        C.lens[D++] = 5;
                      v(s, C.lens, 0, 32, M, 0, C.work, { bits: 5 }), (O = !1);
                    }
                    (C.lencode = I),
                      (C.lenbits = 9),
                      (C.distcode = M),
                      (C.distbits = 5);
                  }
                  function J(C, D, k, V) {
                    var ee,
                      Z = C.state;
                    return (
                      Z.window === null &&
                        ((Z.wsize = 1 << Z.wbits),
                        (Z.wnext = 0),
                        (Z.whave = 0),
                        (Z.window = new n.Buf8(Z.wsize))),
                      V >= Z.wsize
                        ? (n.arraySet(Z.window, D, k - Z.wsize, Z.wsize, 0),
                          (Z.wnext = 0),
                          (Z.whave = Z.wsize))
                        : (V < (ee = Z.wsize - Z.wnext) && (ee = V),
                          n.arraySet(Z.window, D, k - V, ee, Z.wnext),
                          (V -= ee)
                            ? (n.arraySet(Z.window, D, k - V, V, 0),
                              (Z.wnext = V),
                              (Z.whave = Z.wsize))
                            : ((Z.wnext += ee),
                              Z.wnext === Z.wsize && (Z.wnext = 0),
                              Z.whave < Z.wsize && (Z.whave += ee))),
                      0
                    );
                  }
                  (i.inflateReset = w),
                    (i.inflateReset2 = y),
                    (i.inflateResetKeep = _),
                    (i.inflateInit = function (C) {
                      return T(C, 15);
                    }),
                    (i.inflateInit2 = T),
                    (i.inflate = function (C, D) {
                      var k,
                        V,
                        ee,
                        Z,
                        ve,
                        Q,
                        ce,
                        B,
                        H,
                        Ee,
                        fe,
                        he,
                        Te,
                        Pe,
                        Re,
                        Oe,
                        Fe,
                        $e,
                        it,
                        ye,
                        m,
                        X,
                        G,
                        N,
                        R = 0,
                        z = new n.Buf8(4),
                        re = [
                          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2,
                          14, 1, 15,
                        ];
                      if (
                        !C ||
                        !C.state ||
                        !C.output ||
                        (!C.input && C.avail_in !== 0)
                      )
                        return f;
                      (k = C.state).mode === 12 && (k.mode = 13),
                        (ve = C.next_out),
                        (ee = C.output),
                        (ce = C.avail_out),
                        (Z = C.next_in),
                        (V = C.input),
                        (Q = C.avail_in),
                        (B = k.hold),
                        (H = k.bits),
                        (Ee = Q),
                        (fe = ce),
                        (X = b);
                      e: for (;;)
                        switch (k.mode) {
                          case S:
                            if (k.wrap === 0) {
                              k.mode = 13;
                              break;
                            }
                            for (; H < 16; ) {
                              if (Q === 0) break e;
                              Q--, (B += V[Z++] << H), (H += 8);
                            }
                            if (2 & k.wrap && B === 35615) {
                              (z[(k.check = 0)] = 255 & B),
                                (z[1] = (B >>> 8) & 255),
                                (k.check = l(k.check, z, 2, 0)),
                                (H = B = 0),
                                (k.mode = 2);
                              break;
                            }
                            if (
                              ((k.flags = 0),
                              k.head && (k.head.done = !1),
                              !(1 & k.wrap) ||
                                (((255 & B) << 8) + (B >> 8)) % 31)
                            ) {
                              (C.msg = "incorrect header check"), (k.mode = 30);
                              break;
                            }
                            if ((15 & B) != 8) {
                              (C.msg = "unknown compression method"),
                                (k.mode = 30);
                              break;
                            }
                            if (
                              ((H -= 4),
                              (m = 8 + (15 & (B >>>= 4))),
                              k.wbits === 0)
                            )
                              k.wbits = m;
                            else if (m > k.wbits) {
                              (C.msg = "invalid window size"), (k.mode = 30);
                              break;
                            }
                            (k.dmax = 1 << m),
                              (C.adler = k.check = 1),
                              (k.mode = 512 & B ? 10 : 12),
                              (H = B = 0);
                            break;
                          case 2:
                            for (; H < 16; ) {
                              if (Q === 0) break e;
                              Q--, (B += V[Z++] << H), (H += 8);
                            }
                            if (((k.flags = B), (255 & k.flags) != 8)) {
                              (C.msg = "unknown compression method"),
                                (k.mode = 30);
                              break;
                            }
                            if (57344 & k.flags) {
                              (C.msg = "unknown header flags set"),
                                (k.mode = 30);
                              break;
                            }
                            k.head && (k.head.text = (B >> 8) & 1),
                              512 & k.flags &&
                                ((z[0] = 255 & B),
                                (z[1] = (B >>> 8) & 255),
                                (k.check = l(k.check, z, 2, 0))),
                              (H = B = 0),
                              (k.mode = 3);
                          case 3:
                            for (; H < 32; ) {
                              if (Q === 0) break e;
                              Q--, (B += V[Z++] << H), (H += 8);
                            }
                            k.head && (k.head.time = B),
                              512 & k.flags &&
                                ((z[0] = 255 & B),
                                (z[1] = (B >>> 8) & 255),
                                (z[2] = (B >>> 16) & 255),
                                (z[3] = (B >>> 24) & 255),
                                (k.check = l(k.check, z, 4, 0))),
                              (H = B = 0),
                              (k.mode = 4);
                          case 4:
                            for (; H < 16; ) {
                              if (Q === 0) break e;
                              Q--, (B += V[Z++] << H), (H += 8);
                            }
                            k.head &&
                              ((k.head.xflags = 255 & B), (k.head.os = B >> 8)),
                              512 & k.flags &&
                                ((z[0] = 255 & B),
                                (z[1] = (B >>> 8) & 255),
                                (k.check = l(k.check, z, 2, 0))),
                              (H = B = 0),
                              (k.mode = 5);
                          case 5:
                            if (1024 & k.flags) {
                              for (; H < 16; ) {
                                if (Q === 0) break e;
                                Q--, (B += V[Z++] << H), (H += 8);
                              }
                              (k.length = B),
                                k.head && (k.head.extra_len = B),
                                512 & k.flags &&
                                  ((z[0] = 255 & B),
                                  (z[1] = (B >>> 8) & 255),
                                  (k.check = l(k.check, z, 2, 0))),
                                (H = B = 0);
                            } else k.head && (k.head.extra = null);
                            k.mode = 6;
                          case 6:
                            if (
                              1024 & k.flags &&
                              (Q < (he = k.length) && (he = Q),
                              he &&
                                (k.head &&
                                  ((m = k.head.extra_len - k.length),
                                  k.head.extra ||
                                    (k.head.extra = new Array(
                                      k.head.extra_len
                                    )),
                                  n.arraySet(k.head.extra, V, Z, he, m)),
                                512 & k.flags &&
                                  (k.check = l(k.check, V, he, Z)),
                                (Q -= he),
                                (Z += he),
                                (k.length -= he)),
                              k.length)
                            )
                              break e;
                            (k.length = 0), (k.mode = 7);
                          case 7:
                            if (2048 & k.flags) {
                              if (Q === 0) break e;
                              for (
                                he = 0;
                                (m = V[Z + he++]),
                                  k.head &&
                                    m &&
                                    k.length < 65536 &&
                                    (k.head.name += String.fromCharCode(m)),
                                  m && he < Q;

                              );
                              if (
                                (512 & k.flags &&
                                  (k.check = l(k.check, V, he, Z)),
                                (Q -= he),
                                (Z += he),
                                m)
                              )
                                break e;
                            } else k.head && (k.head.name = null);
                            (k.length = 0), (k.mode = 8);
                          case 8:
                            if (4096 & k.flags) {
                              if (Q === 0) break e;
                              for (
                                he = 0;
                                (m = V[Z + he++]),
                                  k.head &&
                                    m &&
                                    k.length < 65536 &&
                                    (k.head.comment += String.fromCharCode(m)),
                                  m && he < Q;

                              );
                              if (
                                (512 & k.flags &&
                                  (k.check = l(k.check, V, he, Z)),
                                (Q -= he),
                                (Z += he),
                                m)
                              )
                                break e;
                            } else k.head && (k.head.comment = null);
                            k.mode = 9;
                          case 9:
                            if (512 & k.flags) {
                              for (; H < 16; ) {
                                if (Q === 0) break e;
                                Q--, (B += V[Z++] << H), (H += 8);
                              }
                              if (B !== (65535 & k.check)) {
                                (C.msg = "header crc mismatch"), (k.mode = 30);
                                break;
                              }
                              H = B = 0;
                            }
                            k.head &&
                              ((k.head.hcrc = (k.flags >> 9) & 1),
                              (k.head.done = !0)),
                              (C.adler = k.check = 0),
                              (k.mode = 12);
                            break;
                          case 10:
                            for (; H < 32; ) {
                              if (Q === 0) break e;
                              Q--, (B += V[Z++] << H), (H += 8);
                            }
                            (C.adler = k.check = o(B)),
                              (H = B = 0),
                              (k.mode = 11);
                          case 11:
                            if (k.havedict === 0)
                              return (
                                (C.next_out = ve),
                                (C.avail_out = ce),
                                (C.next_in = Z),
                                (C.avail_in = Q),
                                (k.hold = B),
                                (k.bits = H),
                                2
                              );
                            (C.adler = k.check = 1), (k.mode = 12);
                          case 12:
                            if (D === 5 || D === 6) break e;
                          case 13:
                            if (k.last) {
                              (B >>>= 7 & H), (H -= 7 & H), (k.mode = 27);
                              break;
                            }
                            for (; H < 3; ) {
                              if (Q === 0) break e;
                              Q--, (B += V[Z++] << H), (H += 8);
                            }
                            switch (
                              ((k.last = 1 & B), (H -= 1), 3 & (B >>>= 1))
                            ) {
                              case 0:
                                k.mode = 14;
                                break;
                              case 1:
                                if ((U(k), (k.mode = 20), D !== 6)) break;
                                (B >>>= 2), (H -= 2);
                                break e;
                              case 2:
                                k.mode = 17;
                                break;
                              case 3:
                                (C.msg = "invalid block type"), (k.mode = 30);
                            }
                            (B >>>= 2), (H -= 2);
                            break;
                          case 14:
                            for (B >>>= 7 & H, H -= 7 & H; H < 32; ) {
                              if (Q === 0) break e;
                              Q--, (B += V[Z++] << H), (H += 8);
                            }
                            if ((65535 & B) != ((B >>> 16) ^ 65535)) {
                              (C.msg = "invalid stored block lengths"),
                                (k.mode = 30);
                              break;
                            }
                            if (
                              ((k.length = 65535 & B),
                              (H = B = 0),
                              (k.mode = 15),
                              D === 6)
                            )
                              break e;
                          case 15:
                            k.mode = 16;
                          case 16:
                            if ((he = k.length)) {
                              if (
                                (Q < he && (he = Q),
                                ce < he && (he = ce),
                                he === 0)
                              )
                                break e;
                              n.arraySet(ee, V, Z, he, ve),
                                (Q -= he),
                                (Z += he),
                                (ce -= he),
                                (ve += he),
                                (k.length -= he);
                              break;
                            }
                            k.mode = 12;
                            break;
                          case 17:
                            for (; H < 14; ) {
                              if (Q === 0) break e;
                              Q--, (B += V[Z++] << H), (H += 8);
                            }
                            if (
                              ((k.nlen = 257 + (31 & B)),
                              (B >>>= 5),
                              (H -= 5),
                              (k.ndist = 1 + (31 & B)),
                              (B >>>= 5),
                              (H -= 5),
                              (k.ncode = 4 + (15 & B)),
                              (B >>>= 4),
                              (H -= 4),
                              286 < k.nlen || 30 < k.ndist)
                            ) {
                              (C.msg = "too many length or distance symbols"),
                                (k.mode = 30);
                              break;
                            }
                            (k.have = 0), (k.mode = 18);
                          case 18:
                            for (; k.have < k.ncode; ) {
                              for (; H < 3; ) {
                                if (Q === 0) break e;
                                Q--, (B += V[Z++] << H), (H += 8);
                              }
                              (k.lens[re[k.have++]] = 7 & B),
                                (B >>>= 3),
                                (H -= 3);
                            }
                            for (; k.have < 19; ) k.lens[re[k.have++]] = 0;
                            if (
                              ((k.lencode = k.lendyn),
                              (k.lenbits = 7),
                              (G = { bits: k.lenbits }),
                              (X = v(
                                0,
                                k.lens,
                                0,
                                19,
                                k.lencode,
                                0,
                                k.work,
                                G
                              )),
                              (k.lenbits = G.bits),
                              X)
                            ) {
                              (C.msg = "invalid code lengths set"),
                                (k.mode = 30);
                              break;
                            }
                            (k.have = 0), (k.mode = 19);
                          case 19:
                            for (; k.have < k.nlen + k.ndist; ) {
                              for (
                                ;
                                (Oe =
                                  ((R =
                                    k.lencode[B & ((1 << k.lenbits) - 1)]) >>>
                                    16) &
                                  255),
                                  (Fe = 65535 & R),
                                  !((Re = R >>> 24) <= H);

                              ) {
                                if (Q === 0) break e;
                                Q--, (B += V[Z++] << H), (H += 8);
                              }
                              if (Fe < 16)
                                (B >>>= Re), (H -= Re), (k.lens[k.have++] = Fe);
                              else {
                                if (Fe === 16) {
                                  for (N = Re + 2; H < N; ) {
                                    if (Q === 0) break e;
                                    Q--, (B += V[Z++] << H), (H += 8);
                                  }
                                  if (((B >>>= Re), (H -= Re), k.have === 0)) {
                                    (C.msg = "invalid bit length repeat"),
                                      (k.mode = 30);
                                    break;
                                  }
                                  (m = k.lens[k.have - 1]),
                                    (he = 3 + (3 & B)),
                                    (B >>>= 2),
                                    (H -= 2);
                                } else if (Fe === 17) {
                                  for (N = Re + 3; H < N; ) {
                                    if (Q === 0) break e;
                                    Q--, (B += V[Z++] << H), (H += 8);
                                  }
                                  (H -= Re),
                                    (m = 0),
                                    (he = 3 + (7 & (B >>>= Re))),
                                    (B >>>= 3),
                                    (H -= 3);
                                } else {
                                  for (N = Re + 7; H < N; ) {
                                    if (Q === 0) break e;
                                    Q--, (B += V[Z++] << H), (H += 8);
                                  }
                                  (H -= Re),
                                    (m = 0),
                                    (he = 11 + (127 & (B >>>= Re))),
                                    (B >>>= 7),
                                    (H -= 7);
                                }
                                if (k.have + he > k.nlen + k.ndist) {
                                  (C.msg = "invalid bit length repeat"),
                                    (k.mode = 30);
                                  break;
                                }
                                for (; he--; ) k.lens[k.have++] = m;
                              }
                            }
                            if (k.mode === 30) break;
                            if (k.lens[256] === 0) {
                              (C.msg = "invalid code -- missing end-of-block"),
                                (k.mode = 30);
                              break;
                            }
                            if (
                              ((k.lenbits = 9),
                              (G = { bits: k.lenbits }),
                              (X = v(
                                x,
                                k.lens,
                                0,
                                k.nlen,
                                k.lencode,
                                0,
                                k.work,
                                G
                              )),
                              (k.lenbits = G.bits),
                              X)
                            ) {
                              (C.msg = "invalid literal/lengths set"),
                                (k.mode = 30);
                              break;
                            }
                            if (
                              ((k.distbits = 6),
                              (k.distcode = k.distdyn),
                              (G = { bits: k.distbits }),
                              (X = v(
                                s,
                                k.lens,
                                k.nlen,
                                k.ndist,
                                k.distcode,
                                0,
                                k.work,
                                G
                              )),
                              (k.distbits = G.bits),
                              X)
                            ) {
                              (C.msg = "invalid distances set"), (k.mode = 30);
                              break;
                            }
                            if (((k.mode = 20), D === 6)) break e;
                          case 20:
                            k.mode = 21;
                          case 21:
                            if (6 <= Q && 258 <= ce) {
                              (C.next_out = ve),
                                (C.avail_out = ce),
                                (C.next_in = Z),
                                (C.avail_in = Q),
                                (k.hold = B),
                                (k.bits = H),
                                p(C, fe),
                                (ve = C.next_out),
                                (ee = C.output),
                                (ce = C.avail_out),
                                (Z = C.next_in),
                                (V = C.input),
                                (Q = C.avail_in),
                                (B = k.hold),
                                (H = k.bits),
                                k.mode === 12 && (k.back = -1);
                              break;
                            }
                            for (
                              k.back = 0;
                              (Oe =
                                ((R = k.lencode[B & ((1 << k.lenbits) - 1)]) >>>
                                  16) &
                                255),
                                (Fe = 65535 & R),
                                !((Re = R >>> 24) <= H);

                            ) {
                              if (Q === 0) break e;
                              Q--, (B += V[Z++] << H), (H += 8);
                            }
                            if (Oe && (240 & Oe) == 0) {
                              for (
                                $e = Re, it = Oe, ye = Fe;
                                (Oe =
                                  ((R =
                                    k.lencode[
                                      ye + ((B & ((1 << ($e + it)) - 1)) >> $e)
                                    ]) >>>
                                    16) &
                                  255),
                                  (Fe = 65535 & R),
                                  !($e + (Re = R >>> 24) <= H);

                              ) {
                                if (Q === 0) break e;
                                Q--, (B += V[Z++] << H), (H += 8);
                              }
                              (B >>>= $e), (H -= $e), (k.back += $e);
                            }
                            if (
                              ((B >>>= Re),
                              (H -= Re),
                              (k.back += Re),
                              (k.length = Fe),
                              Oe === 0)
                            ) {
                              k.mode = 26;
                              break;
                            }
                            if (32 & Oe) {
                              (k.back = -1), (k.mode = 12);
                              break;
                            }
                            if (64 & Oe) {
                              (C.msg = "invalid literal/length code"),
                                (k.mode = 30);
                              break;
                            }
                            (k.extra = 15 & Oe), (k.mode = 22);
                          case 22:
                            if (k.extra) {
                              for (N = k.extra; H < N; ) {
                                if (Q === 0) break e;
                                Q--, (B += V[Z++] << H), (H += 8);
                              }
                              (k.length += B & ((1 << k.extra) - 1)),
                                (B >>>= k.extra),
                                (H -= k.extra),
                                (k.back += k.extra);
                            }
                            (k.was = k.length), (k.mode = 23);
                          case 23:
                            for (
                              ;
                              (Oe =
                                ((R =
                                  k.distcode[B & ((1 << k.distbits) - 1)]) >>>
                                  16) &
                                255),
                                (Fe = 65535 & R),
                                !((Re = R >>> 24) <= H);

                            ) {
                              if (Q === 0) break e;
                              Q--, (B += V[Z++] << H), (H += 8);
                            }
                            if ((240 & Oe) == 0) {
                              for (
                                $e = Re, it = Oe, ye = Fe;
                                (Oe =
                                  ((R =
                                    k.distcode[
                                      ye + ((B & ((1 << ($e + it)) - 1)) >> $e)
                                    ]) >>>
                                    16) &
                                  255),
                                  (Fe = 65535 & R),
                                  !($e + (Re = R >>> 24) <= H);

                              ) {
                                if (Q === 0) break e;
                                Q--, (B += V[Z++] << H), (H += 8);
                              }
                              (B >>>= $e), (H -= $e), (k.back += $e);
                            }
                            if (
                              ((B >>>= Re), (H -= Re), (k.back += Re), 64 & Oe)
                            ) {
                              (C.msg = "invalid distance code"), (k.mode = 30);
                              break;
                            }
                            (k.offset = Fe), (k.extra = 15 & Oe), (k.mode = 24);
                          case 24:
                            if (k.extra) {
                              for (N = k.extra; H < N; ) {
                                if (Q === 0) break e;
                                Q--, (B += V[Z++] << H), (H += 8);
                              }
                              (k.offset += B & ((1 << k.extra) - 1)),
                                (B >>>= k.extra),
                                (H -= k.extra),
                                (k.back += k.extra);
                            }
                            if (k.offset > k.dmax) {
                              (C.msg = "invalid distance too far back"),
                                (k.mode = 30);
                              break;
                            }
                            k.mode = 25;
                          case 25:
                            if (ce === 0) break e;
                            if (((he = fe - ce), k.offset > he)) {
                              if ((he = k.offset - he) > k.whave && k.sane) {
                                (C.msg = "invalid distance too far back"),
                                  (k.mode = 30);
                                break;
                              }
                              (Te =
                                he > k.wnext
                                  ? ((he -= k.wnext), k.wsize - he)
                                  : k.wnext - he),
                                he > k.length && (he = k.length),
                                (Pe = k.window);
                            } else
                              (Pe = ee), (Te = ve - k.offset), (he = k.length);
                            for (
                              ce < he && (he = ce), ce -= he, k.length -= he;
                              (ee[ve++] = Pe[Te++]), --he;

                            );
                            k.length === 0 && (k.mode = 21);
                            break;
                          case 26:
                            if (ce === 0) break e;
                            (ee[ve++] = k.length), ce--, (k.mode = 21);
                            break;
                          case 27:
                            if (k.wrap) {
                              for (; H < 32; ) {
                                if (Q === 0) break e;
                                Q--, (B |= V[Z++] << H), (H += 8);
                              }
                              if (
                                ((fe -= ce),
                                (C.total_out += fe),
                                (k.total += fe),
                                fe &&
                                  (C.adler = k.check =
                                    k.flags
                                      ? l(k.check, ee, fe, ve - fe)
                                      : d(k.check, ee, fe, ve - fe)),
                                (fe = ce),
                                (k.flags ? B : o(B)) !== k.check)
                              ) {
                                (C.msg = "incorrect data check"), (k.mode = 30);
                                break;
                              }
                              H = B = 0;
                            }
                            k.mode = 28;
                          case 28:
                            if (k.wrap && k.flags) {
                              for (; H < 32; ) {
                                if (Q === 0) break e;
                                Q--, (B += V[Z++] << H), (H += 8);
                              }
                              if (B !== (4294967295 & k.total)) {
                                (C.msg = "incorrect length check"),
                                  (k.mode = 30);
                                break;
                              }
                              H = B = 0;
                            }
                            k.mode = 29;
                          case 29:
                            X = 1;
                            break e;
                          case 30:
                            X = -3;
                            break e;
                          case 31:
                            return -4;
                          case 32:
                          default:
                            return f;
                        }
                      return (
                        (C.next_out = ve),
                        (C.avail_out = ce),
                        (C.next_in = Z),
                        (C.avail_in = Q),
                        (k.hold = B),
                        (k.bits = H),
                        (k.wsize ||
                          (fe !== C.avail_out &&
                            k.mode < 30 &&
                            (k.mode < 27 || D !== 4))) &&
                        J(C, C.output, C.next_out, fe - C.avail_out)
                          ? ((k.mode = 31), -4)
                          : ((Ee -= C.avail_in),
                            (fe -= C.avail_out),
                            (C.total_in += Ee),
                            (C.total_out += fe),
                            (k.total += fe),
                            k.wrap &&
                              fe &&
                              (C.adler = k.check =
                                k.flags
                                  ? l(k.check, ee, fe, C.next_out - fe)
                                  : d(k.check, ee, fe, C.next_out - fe)),
                            (C.data_type =
                              k.bits +
                              (k.last ? 64 : 0) +
                              (k.mode === 12 ? 128 : 0) +
                              (k.mode === 20 || k.mode === 15 ? 256 : 0)),
                            ((Ee == 0 && fe === 0) || D === 4) &&
                              X === b &&
                              (X = -5),
                            X)
                      );
                    }),
                    (i.inflateEnd = function (C) {
                      if (!C || !C.state) return f;
                      var D = C.state;
                      return D.window && (D.window = null), (C.state = null), b;
                    }),
                    (i.inflateGetHeader = function (C, D) {
                      var k;
                      return C && C.state
                        ? (2 & (k = C.state).wrap) == 0
                          ? f
                          : (((k.head = D).done = !1), b)
                        : f;
                    }),
                    (i.inflateSetDictionary = function (C, D) {
                      var k,
                        V = D.length;
                      return C && C.state
                        ? (k = C.state).wrap !== 0 && k.mode !== 11
                          ? f
                          : k.mode === 11 && d(1, D, V, 0) !== k.check
                          ? -3
                          : J(C, D, V, V)
                          ? ((k.mode = 31), -4)
                          : ((k.havedict = 1), b)
                        : f;
                    }),
                    (i.inflateInfo = "pako inflate (from Nodeca project)");
                },
                {
                  "../utils/common": 41,
                  "./adler32": 43,
                  "./crc32": 45,
                  "./inffast": 48,
                  "./inftrees": 50,
                },
              ],
              50: [
                function (t, a, i) {
                  var n = t("../utils/common"),
                    d = [
                      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
                      35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258,
                      0, 0,
                    ],
                    l = [
                      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18,
                      18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21,
                      16, 72, 78,
                    ],
                    p = [
                      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
                      257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
                      8193, 12289, 16385, 24577, 0, 0,
                    ],
                    v = [
                      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21,
                      22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28,
                      29, 29, 64, 64,
                    ];
                  a.exports = function (x, s, b, f, S, c, h, o) {
                    var u,
                      _,
                      w,
                      y,
                      T,
                      I,
                      M,
                      O,
                      U,
                      J = o.bits,
                      C = 0,
                      D = 0,
                      k = 0,
                      V = 0,
                      ee = 0,
                      Z = 0,
                      ve = 0,
                      Q = 0,
                      ce = 0,
                      B = 0,
                      H = null,
                      Ee = 0,
                      fe = new n.Buf16(16),
                      he = new n.Buf16(16),
                      Te = null,
                      Pe = 0;
                    for (C = 0; C <= 15; C++) fe[C] = 0;
                    for (D = 0; D < f; D++) fe[s[b + D]]++;
                    for (ee = J, V = 15; 1 <= V && fe[V] === 0; V--);
                    if ((V < ee && (ee = V), V === 0))
                      return (
                        (S[c++] = 20971520),
                        (S[c++] = 20971520),
                        (o.bits = 1),
                        0
                      );
                    for (k = 1; k < V && fe[k] === 0; k++);
                    for (ee < k && (ee = k), C = Q = 1; C <= 15; C++)
                      if (((Q <<= 1), (Q -= fe[C]) < 0)) return -1;
                    if (0 < Q && (x === 0 || V !== 1)) return -1;
                    for (he[1] = 0, C = 1; C < 15; C++)
                      he[C + 1] = he[C] + fe[C];
                    for (D = 0; D < f; D++)
                      s[b + D] !== 0 && (h[he[s[b + D]]++] = D);
                    if (
                      ((I =
                        x === 0
                          ? ((H = Te = h), 19)
                          : x === 1
                          ? ((H = d), (Ee -= 257), (Te = l), (Pe -= 257), 256)
                          : ((H = p), (Te = v), -1)),
                      (C = k),
                      (T = c),
                      (ve = D = B = 0),
                      (w = -1),
                      (y = (ce = 1 << (Z = ee)) - 1),
                      (x === 1 && 852 < ce) || (x === 2 && 592 < ce))
                    )
                      return 1;
                    for (;;) {
                      for (
                        M = C - ve,
                          U =
                            h[D] < I
                              ? ((O = 0), h[D])
                              : h[D] > I
                              ? ((O = Te[Pe + h[D]]), H[Ee + h[D]])
                              : ((O = 96), 0),
                          u = 1 << (C - ve),
                          k = _ = 1 << Z;
                        (S[T + (B >> ve) + (_ -= u)] =
                          (M << 24) | (O << 16) | U | 0),
                          _ !== 0;

                      );
                      for (u = 1 << (C - 1); B & u; ) u >>= 1;
                      if (
                        (u !== 0 ? ((B &= u - 1), (B += u)) : (B = 0),
                        D++,
                        --fe[C] == 0)
                      ) {
                        if (C === V) break;
                        C = s[b + h[D]];
                      }
                      if (ee < C && (B & y) !== w) {
                        for (
                          ve === 0 && (ve = ee), T += k, Q = 1 << (Z = C - ve);
                          Z + ve < V && !((Q -= fe[Z + ve]) <= 0);

                        )
                          Z++, (Q <<= 1);
                        if (
                          ((ce += 1 << Z),
                          (x === 1 && 852 < ce) || (x === 2 && 592 < ce))
                        )
                          return 1;
                        S[(w = B & y)] = (ee << 24) | (Z << 16) | (T - c) | 0;
                      }
                    }
                    return (
                      B !== 0 && (S[T + B] = ((C - ve) << 24) | (64 << 16) | 0),
                      (o.bits = ee),
                      0
                    );
                  };
                },
                { "../utils/common": 41 },
              ],
              51: [
                function (t, a, i) {
                  a.exports = {
                    2: "need dictionary",
                    1: "stream end",
                    0: "",
                    "-1": "file error",
                    "-2": "stream error",
                    "-3": "data error",
                    "-4": "insufficient memory",
                    "-5": "buffer error",
                    "-6": "incompatible version",
                  };
                },
                {},
              ],
              52: [
                function (t, a, i) {
                  var n = t("../utils/common"),
                    d = 0,
                    l = 1;
                  function p(R) {
                    for (var z = R.length; 0 <= --z; ) R[z] = 0;
                  }
                  var v = 0,
                    x = 29,
                    s = 256,
                    b = s + 1 + x,
                    f = 30,
                    S = 19,
                    c = 2 * b + 1,
                    h = 15,
                    o = 16,
                    u = 7,
                    _ = 256,
                    w = 16,
                    y = 17,
                    T = 18,
                    I = [
                      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3,
                      3, 4, 4, 4, 4, 5, 5, 5, 5, 0,
                    ],
                    M = [
                      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8,
                      8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13,
                    ],
                    O = [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
                    ],
                    U = [
                      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14,
                      1, 15,
                    ],
                    J = new Array(2 * (b + 2));
                  p(J);
                  var C = new Array(2 * f);
                  p(C);
                  var D = new Array(512);
                  p(D);
                  var k = new Array(256);
                  p(k);
                  var V = new Array(x);
                  p(V);
                  var ee,
                    Z,
                    ve,
                    Q = new Array(f);
                  function ce(R, z, re, ae, Y) {
                    (this.static_tree = R),
                      (this.extra_bits = z),
                      (this.extra_base = re),
                      (this.elems = ae),
                      (this.max_length = Y),
                      (this.has_stree = R && R.length);
                  }
                  function B(R, z) {
                    (this.dyn_tree = R),
                      (this.max_code = 0),
                      (this.stat_desc = z);
                  }
                  function H(R) {
                    return R < 256 ? D[R] : D[256 + (R >>> 7)];
                  }
                  function Ee(R, z) {
                    (R.pending_buf[R.pending++] = 255 & z),
                      (R.pending_buf[R.pending++] = (z >>> 8) & 255);
                  }
                  function fe(R, z, re) {
                    R.bi_valid > o - re
                      ? ((R.bi_buf |= (z << R.bi_valid) & 65535),
                        Ee(R, R.bi_buf),
                        (R.bi_buf = z >> (o - R.bi_valid)),
                        (R.bi_valid += re - o))
                      : ((R.bi_buf |= (z << R.bi_valid) & 65535),
                        (R.bi_valid += re));
                  }
                  function he(R, z, re) {
                    fe(R, re[2 * z], re[2 * z + 1]);
                  }
                  function Te(R, z) {
                    for (
                      var re = 0;
                      (re |= 1 & R), (R >>>= 1), (re <<= 1), 0 < --z;

                    );
                    return re >>> 1;
                  }
                  function Pe(R, z, re) {
                    var ae,
                      Y,
                      ue = new Array(h + 1),
                      _e = 0;
                    for (ae = 1; ae <= h; ae++)
                      ue[ae] = _e = (_e + re[ae - 1]) << 1;
                    for (Y = 0; Y <= z; Y++) {
                      var de = R[2 * Y + 1];
                      de !== 0 && (R[2 * Y] = Te(ue[de]++, de));
                    }
                  }
                  function Re(R) {
                    var z;
                    for (z = 0; z < b; z++) R.dyn_ltree[2 * z] = 0;
                    for (z = 0; z < f; z++) R.dyn_dtree[2 * z] = 0;
                    for (z = 0; z < S; z++) R.bl_tree[2 * z] = 0;
                    (R.dyn_ltree[2 * _] = 1),
                      (R.opt_len = R.static_len = 0),
                      (R.last_lit = R.matches = 0);
                  }
                  function Oe(R) {
                    8 < R.bi_valid
                      ? Ee(R, R.bi_buf)
                      : 0 < R.bi_valid &&
                        (R.pending_buf[R.pending++] = R.bi_buf),
                      (R.bi_buf = 0),
                      (R.bi_valid = 0);
                  }
                  function Fe(R, z, re, ae) {
                    var Y = 2 * z,
                      ue = 2 * re;
                    return R[Y] < R[ue] || (R[Y] === R[ue] && ae[z] <= ae[re]);
                  }
                  function $e(R, z, re) {
                    for (
                      var ae = R.heap[re], Y = re << 1;
                      Y <= R.heap_len &&
                      (Y < R.heap_len &&
                        Fe(z, R.heap[Y + 1], R.heap[Y], R.depth) &&
                        Y++,
                      !Fe(z, ae, R.heap[Y], R.depth));

                    )
                      (R.heap[re] = R.heap[Y]), (re = Y), (Y <<= 1);
                    R.heap[re] = ae;
                  }
                  function it(R, z, re) {
                    var ae,
                      Y,
                      ue,
                      _e,
                      de = 0;
                    if (R.last_lit !== 0)
                      for (
                        ;
                        (ae =
                          (R.pending_buf[R.d_buf + 2 * de] << 8) |
                          R.pending_buf[R.d_buf + 2 * de + 1]),
                          (Y = R.pending_buf[R.l_buf + de]),
                          de++,
                          ae === 0
                            ? he(R, Y, z)
                            : (he(R, (ue = k[Y]) + s + 1, z),
                              (_e = I[ue]) !== 0 && fe(R, (Y -= V[ue]), _e),
                              he(R, (ue = H(--ae)), re),
                              (_e = M[ue]) !== 0 && fe(R, (ae -= Q[ue]), _e)),
                          de < R.last_lit;

                      );
                    he(R, _, z);
                  }
                  function ye(R, z) {
                    var re,
                      ae,
                      Y,
                      ue = z.dyn_tree,
                      _e = z.stat_desc.static_tree,
                      de = z.stat_desc.has_stree,
                      xe = z.stat_desc.elems,
                      Be = -1;
                    for (R.heap_len = 0, R.heap_max = c, re = 0; re < xe; re++)
                      ue[2 * re] !== 0
                        ? ((R.heap[++R.heap_len] = Be = re), (R.depth[re] = 0))
                        : (ue[2 * re + 1] = 0);
                    for (; R.heap_len < 2; )
                      (ue[
                        2 * (Y = R.heap[++R.heap_len] = Be < 2 ? ++Be : 0)
                      ] = 1),
                        (R.depth[Y] = 0),
                        R.opt_len--,
                        de && (R.static_len -= _e[2 * Y + 1]);
                    for (z.max_code = Be, re = R.heap_len >> 1; 1 <= re; re--)
                      $e(R, ue, re);
                    for (
                      Y = xe;
                      (re = R.heap[1]),
                        (R.heap[1] = R.heap[R.heap_len--]),
                        $e(R, ue, 1),
                        (ae = R.heap[1]),
                        (R.heap[--R.heap_max] = re),
                        (R.heap[--R.heap_max] = ae),
                        (ue[2 * Y] = ue[2 * re] + ue[2 * ae]),
                        (R.depth[Y] =
                          (R.depth[re] >= R.depth[ae]
                            ? R.depth[re]
                            : R.depth[ae]) + 1),
                        (ue[2 * re + 1] = ue[2 * ae + 1] = Y),
                        (R.heap[1] = Y++),
                        $e(R, ue, 1),
                        2 <= R.heap_len;

                    );
                    (R.heap[--R.heap_max] = R.heap[1]),
                      (function (Ne, Je) {
                        var gt,
                          tt,
                          ft,
                          De,
                          at,
                          It,
                          bt = Je.dyn_tree,
                          ht = Je.max_code,
                          jt = Je.stat_desc.static_tree,
                          Nt = Je.stat_desc.has_stree,
                          Pt = Je.stat_desc.extra_bits,
                          gn = Je.stat_desc.extra_base,
                          Xt = Je.stat_desc.max_length,
                          Zt = 0;
                        for (De = 0; De <= h; De++) Ne.bl_count[De] = 0;
                        for (
                          bt[2 * Ne.heap[Ne.heap_max] + 1] = 0,
                            gt = Ne.heap_max + 1;
                          gt < c;
                          gt++
                        )
                          Xt <
                            (De =
                              bt[2 * bt[2 * (tt = Ne.heap[gt]) + 1] + 1] + 1) &&
                            ((De = Xt), Zt++),
                            (bt[2 * tt + 1] = De),
                            ht < tt ||
                              (Ne.bl_count[De]++,
                              (at = 0),
                              gn <= tt && (at = Pt[tt - gn]),
                              (It = bt[2 * tt]),
                              (Ne.opt_len += It * (De + at)),
                              Nt &&
                                (Ne.static_len += It * (jt[2 * tt + 1] + at)));
                        if (Zt !== 0) {
                          do {
                            for (De = Xt - 1; Ne.bl_count[De] === 0; ) De--;
                            Ne.bl_count[De]--,
                              (Ne.bl_count[De + 1] += 2),
                              Ne.bl_count[Xt]--,
                              (Zt -= 2);
                          } while (0 < Zt);
                          for (De = Xt; De !== 0; De--)
                            for (tt = Ne.bl_count[De]; tt !== 0; )
                              ht < (ft = Ne.heap[--gt]) ||
                                (bt[2 * ft + 1] !== De &&
                                  ((Ne.opt_len +=
                                    (De - bt[2 * ft + 1]) * bt[2 * ft]),
                                  (bt[2 * ft + 1] = De)),
                                tt--);
                        }
                      })(R, z),
                      Pe(ue, Be, R.bl_count);
                  }
                  function m(R, z, re) {
                    var ae,
                      Y,
                      ue = -1,
                      _e = z[1],
                      de = 0,
                      xe = 7,
                      Be = 4;
                    for (
                      _e === 0 && ((xe = 138), (Be = 3)),
                        z[2 * (re + 1) + 1] = 65535,
                        ae = 0;
                      ae <= re;
                      ae++
                    )
                      (Y = _e),
                        (_e = z[2 * (ae + 1) + 1]),
                        (++de < xe && Y === _e) ||
                          (de < Be
                            ? (R.bl_tree[2 * Y] += de)
                            : Y !== 0
                            ? (Y !== ue && R.bl_tree[2 * Y]++,
                              R.bl_tree[2 * w]++)
                            : de <= 10
                            ? R.bl_tree[2 * y]++
                            : R.bl_tree[2 * T]++,
                          (ue = Y),
                          (Be =
                            (de = 0) === _e
                              ? ((xe = 138), 3)
                              : Y === _e
                              ? ((xe = 6), 3)
                              : ((xe = 7), 4)));
                  }
                  function X(R, z, re) {
                    var ae,
                      Y,
                      ue = -1,
                      _e = z[1],
                      de = 0,
                      xe = 7,
                      Be = 4;
                    for (
                      _e === 0 && ((xe = 138), (Be = 3)), ae = 0;
                      ae <= re;
                      ae++
                    )
                      if (
                        ((Y = _e),
                        (_e = z[2 * (ae + 1) + 1]),
                        !(++de < xe && Y === _e))
                      ) {
                        if (de < Be) for (; he(R, Y, R.bl_tree), --de != 0; );
                        else
                          Y !== 0
                            ? (Y !== ue && (he(R, Y, R.bl_tree), de--),
                              he(R, w, R.bl_tree),
                              fe(R, de - 3, 2))
                            : de <= 10
                            ? (he(R, y, R.bl_tree), fe(R, de - 3, 3))
                            : (he(R, T, R.bl_tree), fe(R, de - 11, 7));
                        (ue = Y),
                          (Be =
                            (de = 0) === _e
                              ? ((xe = 138), 3)
                              : Y === _e
                              ? ((xe = 6), 3)
                              : ((xe = 7), 4));
                      }
                  }
                  p(Q);
                  var G = !1;
                  function N(R, z, re, ae) {
                    fe(R, (v << 1) + (ae ? 1 : 0), 3),
                      (function (Y, ue, _e, de) {
                        Oe(Y),
                          Ee(Y, _e),
                          Ee(Y, ~_e),
                          n.arraySet(
                            Y.pending_buf,
                            Y.window,
                            ue,
                            _e,
                            Y.pending
                          ),
                          (Y.pending += _e);
                      })(R, z, re);
                  }
                  (i._tr_init = function (R) {
                    G ||
                      ((function () {
                        var z,
                          re,
                          ae,
                          Y,
                          ue,
                          _e = new Array(h + 1);
                        for (Y = ae = 0; Y < x - 1; Y++)
                          for (V[Y] = ae, z = 0; z < 1 << I[Y]; z++)
                            k[ae++] = Y;
                        for (k[ae - 1] = Y, Y = ue = 0; Y < 16; Y++)
                          for (Q[Y] = ue, z = 0; z < 1 << M[Y]; z++)
                            D[ue++] = Y;
                        for (ue >>= 7; Y < f; Y++)
                          for (Q[Y] = ue << 7, z = 0; z < 1 << (M[Y] - 7); z++)
                            D[256 + ue++] = Y;
                        for (re = 0; re <= h; re++) _e[re] = 0;
                        for (z = 0; z <= 143; )
                          (J[2 * z + 1] = 8), z++, _e[8]++;
                        for (; z <= 255; ) (J[2 * z + 1] = 9), z++, _e[9]++;
                        for (; z <= 279; ) (J[2 * z + 1] = 7), z++, _e[7]++;
                        for (; z <= 287; ) (J[2 * z + 1] = 8), z++, _e[8]++;
                        for (Pe(J, b + 1, _e), z = 0; z < f; z++)
                          (C[2 * z + 1] = 5), (C[2 * z] = Te(z, 5));
                        (ee = new ce(J, I, s + 1, b, h)),
                          (Z = new ce(C, M, 0, f, h)),
                          (ve = new ce(new Array(0), O, 0, S, u));
                      })(),
                      (G = !0)),
                      (R.l_desc = new B(R.dyn_ltree, ee)),
                      (R.d_desc = new B(R.dyn_dtree, Z)),
                      (R.bl_desc = new B(R.bl_tree, ve)),
                      (R.bi_buf = 0),
                      (R.bi_valid = 0),
                      Re(R);
                  }),
                    (i._tr_stored_block = N),
                    (i._tr_flush_block = function (R, z, re, ae) {
                      var Y,
                        ue,
                        _e = 0;
                      0 < R.level
                        ? (R.strm.data_type === 2 &&
                            (R.strm.data_type = (function (de) {
                              var xe,
                                Be = 4093624447;
                              for (xe = 0; xe <= 31; xe++, Be >>>= 1)
                                if (1 & Be && de.dyn_ltree[2 * xe] !== 0)
                                  return d;
                              if (
                                de.dyn_ltree[18] !== 0 ||
                                de.dyn_ltree[20] !== 0 ||
                                de.dyn_ltree[26] !== 0
                              )
                                return l;
                              for (xe = 32; xe < s; xe++)
                                if (de.dyn_ltree[2 * xe] !== 0) return l;
                              return d;
                            })(R)),
                          ye(R, R.l_desc),
                          ye(R, R.d_desc),
                          (_e = (function (de) {
                            var xe;
                            for (
                              m(de, de.dyn_ltree, de.l_desc.max_code),
                                m(de, de.dyn_dtree, de.d_desc.max_code),
                                ye(de, de.bl_desc),
                                xe = S - 1;
                              3 <= xe && de.bl_tree[2 * U[xe] + 1] === 0;
                              xe--
                            );
                            return (de.opt_len += 3 * (xe + 1) + 5 + 5 + 4), xe;
                          })(R)),
                          (Y = (R.opt_len + 3 + 7) >>> 3),
                          (ue = (R.static_len + 3 + 7) >>> 3) <= Y && (Y = ue))
                        : (Y = ue = re + 5),
                        re + 4 <= Y && z !== -1
                          ? N(R, z, re, ae)
                          : R.strategy === 4 || ue === Y
                          ? (fe(R, 2 + (ae ? 1 : 0), 3), it(R, J, C))
                          : (fe(R, 4 + (ae ? 1 : 0), 3),
                            (function (de, xe, Be, Ne) {
                              var Je;
                              for (
                                fe(de, xe - 257, 5),
                                  fe(de, Be - 1, 5),
                                  fe(de, Ne - 4, 4),
                                  Je = 0;
                                Je < Ne;
                                Je++
                              )
                                fe(de, de.bl_tree[2 * U[Je] + 1], 3);
                              X(de, de.dyn_ltree, xe - 1),
                                X(de, de.dyn_dtree, Be - 1);
                            })(
                              R,
                              R.l_desc.max_code + 1,
                              R.d_desc.max_code + 1,
                              _e + 1
                            ),
                            it(R, R.dyn_ltree, R.dyn_dtree)),
                        Re(R),
                        ae && Oe(R);
                    }),
                    (i._tr_tally = function (R, z, re) {
                      return (
                        (R.pending_buf[R.d_buf + 2 * R.last_lit] =
                          (z >>> 8) & 255),
                        (R.pending_buf[R.d_buf + 2 * R.last_lit + 1] = 255 & z),
                        (R.pending_buf[R.l_buf + R.last_lit] = 255 & re),
                        R.last_lit++,
                        z === 0
                          ? R.dyn_ltree[2 * re]++
                          : (R.matches++,
                            z--,
                            R.dyn_ltree[2 * (k[re] + s + 1)]++,
                            R.dyn_dtree[2 * H(z)]++),
                        R.last_lit === R.lit_bufsize - 1
                      );
                    }),
                    (i._tr_align = function (R) {
                      fe(R, 2, 3),
                        he(R, _, J),
                        (function (z) {
                          z.bi_valid === 16
                            ? (Ee(z, z.bi_buf),
                              (z.bi_buf = 0),
                              (z.bi_valid = 0))
                            : 8 <= z.bi_valid &&
                              ((z.pending_buf[z.pending++] = 255 & z.bi_buf),
                              (z.bi_buf >>= 8),
                              (z.bi_valid -= 8));
                        })(R);
                    });
                },
                { "../utils/common": 41 },
              ],
              53: [
                function (t, a, i) {
                  a.exports = function () {
                    (this.input = null),
                      (this.next_in = 0),
                      (this.avail_in = 0),
                      (this.total_in = 0),
                      (this.output = null),
                      (this.next_out = 0),
                      (this.avail_out = 0),
                      (this.total_out = 0),
                      (this.msg = ""),
                      (this.state = null),
                      (this.data_type = 2),
                      (this.adler = 0);
                  };
                },
                {},
              ],
              54: [
                function (t, a, i) {
                  (function (n) {
                    (function (d, l) {
                      if (!d.setImmediate) {
                        var p,
                          v,
                          x,
                          s,
                          b = 1,
                          f = {},
                          S = !1,
                          c = d.document,
                          h = Object.getPrototypeOf && Object.getPrototypeOf(d);
                        (h = h && h.setTimeout ? h : d),
                          (p =
                            {}.toString.call(d.process) === "[object process]"
                              ? function (w) {
                                  process.nextTick(function () {
                                    u(w);
                                  });
                                }
                              : (function () {
                                  if (d.postMessage && !d.importScripts) {
                                    var w = !0,
                                      y = d.onmessage;
                                    return (
                                      (d.onmessage = function () {
                                        w = !1;
                                      }),
                                      d.postMessage("", "*"),
                                      (d.onmessage = y),
                                      w
                                    );
                                  }
                                })()
                              ? ((s = "setImmediate$" + Math.random() + "$"),
                                d.addEventListener
                                  ? d.addEventListener("message", _, !1)
                                  : d.attachEvent("onmessage", _),
                                function (w) {
                                  d.postMessage(s + w, "*");
                                })
                              : d.MessageChannel
                              ? (((x = new MessageChannel()).port1.onmessage =
                                  function (w) {
                                    u(w.data);
                                  }),
                                function (w) {
                                  x.port2.postMessage(w);
                                })
                              : c &&
                                "onreadystatechange" in
                                  c.createElement("script")
                              ? ((v = c.documentElement),
                                function (w) {
                                  var y = c.createElement("script");
                                  (y.onreadystatechange = function () {
                                    u(w),
                                      (y.onreadystatechange = null),
                                      v.removeChild(y),
                                      (y = null);
                                  }),
                                    v.appendChild(y);
                                })
                              : function (w) {
                                  setTimeout(u, 0, w);
                                }),
                          (h.setImmediate = function (w) {
                            typeof w != "function" &&
                              (w = new Function("" + w));
                            for (
                              var y = new Array(arguments.length - 1), T = 0;
                              T < y.length;
                              T++
                            )
                              y[T] = arguments[T + 1];
                            var I = { callback: w, args: y };
                            return (f[b] = I), p(b), b++;
                          }),
                          (h.clearImmediate = o);
                      }
                      function o(w) {
                        delete f[w];
                      }
                      function u(w) {
                        if (S) setTimeout(u, 0, w);
                        else {
                          var y = f[w];
                          if (y) {
                            S = !0;
                            try {
                              (function (T) {
                                var I = T.callback,
                                  M = T.args;
                                switch (M.length) {
                                  case 0:
                                    I();
                                    break;
                                  case 1:
                                    I(M[0]);
                                    break;
                                  case 2:
                                    I(M[0], M[1]);
                                    break;
                                  case 3:
                                    I(M[0], M[1], M[2]);
                                    break;
                                  default:
                                    I.apply(l, M);
                                }
                              })(y);
                            } finally {
                              o(w), (S = !1);
                            }
                          }
                        }
                      }
                      function _(w) {
                        w.source === d &&
                          typeof w.data == "string" &&
                          w.data.indexOf(s) === 0 &&
                          u(+w.data.slice(s.length));
                      }
                    })(typeof self > "u" ? (n === void 0 ? this : n) : self);
                  }.call(
                    this,
                    typeof mn < "u"
                      ? mn
                      : typeof self < "u"
                      ? self
                      : typeof window < "u"
                      ? window
                      : {}
                  ));
                },
                {},
              ],
            },
            {},
            [10]
          )(10);
        });
      })(eo)),
    eo.exports
  );
}
var pl = hl();
const rs = So(pl),
  Ir = "echoes-backup",
  Eo = "backup.zip",
  Co = "echoes_supabase_url",
  Ao = "echoes_supabase_key",
  Ro = "echoes_last_cloud_backup",
  yo = "echoes_cloud_auto_backup_enabled",
  jo = "echoes_cloud_auto_backup_last_error",
  No = "echoes_last_synced_cloud_mtime",
  ml = 360 * 60 * 1e3,
  Po = () => ({
    url: localStorage.getItem(Co) ?? "",
    key: localStorage.getItem(Ao) ?? "",
  }),
  kh = (e, r) => {
    localStorage.setItem(Co, e.replace(/\/+$/, "")),
      localStorage.setItem(Ao, r);
  },
  Sh = () => {
    localStorage.removeItem(Co),
      localStorage.removeItem(Ao),
      localStorage.removeItem(Ro),
      localStorage.removeItem(No);
  },
  as = () => localStorage.getItem(Ro),
  gl = () => localStorage.setItem(Ro, new Date().toISOString()),
  yl = () => localStorage.getItem(No),
  os = (e) => localStorage.setItem(No, e),
  vl = () => localStorage.getItem(yo) === "1",
  Th = (e) => {
    e ? localStorage.setItem(yo, "1") : localStorage.removeItem(yo);
  },
  Ih = () => {
    const e = localStorage.getItem(jo);
    if (!e) return null;
    try {
      const r = JSON.parse(e);
      if (typeof r.at == "string" && typeof r.message == "string") return r;
    } catch {}
    return null;
  },
  to = (e) => {
    const r = { at: new Date().toISOString(), message: e };
    localStorage.setItem(jo, JSON.stringify(r));
  },
  wl = () => localStorage.removeItem(jo),
  Eh = (e) => /^https:\/\/.*supabase/.test(e.trim()),
  Ch = (e) => e.trim().startsWith("eyJ"),
  Zr = async (e, r) => {
    const { url: t, key: a } = Po();
    if (!t || !a) throw new Error("云备份未配置");
    return await fetch(`${t}/storage/v1${e}`, {
      ...r,
      headers: {
        Authorization: `Bearer ${a}`,
        ...(r == null ? void 0 : r.headers),
      },
    });
  },
  is = async () => {
    const e = await Zr("/bucket", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: Ir, name: Ir, public: !1 }),
    });
    if (e.ok) return;
    const r = await e.text();
    if (
      !(
        e.status === 409 ||
        r.includes('"409"') ||
        r.includes("already exists") ||
        r.includes("Duplicate")
      )
    )
      throw new Error(`创建存储桶失败 (${e.status}): ${r}`);
  },
  Ah = async () => {
    await is();
    const e = await Zr("/bucket");
    if (!e.ok)
      throw new Error(`连接失败 (${e.status})，请检查 URL 和 Key 是否正确`);
    if (!(await e.json()).some((t) => t.id === Ir))
      throw new Error("存储桶验证失败，请检查 Key 权限");
  },
  _l = async (e) => {
    await is();
    const r = await Zr(`/object/${Ir}/${Eo}`, {
      method: "POST",
      headers: { "Content-Type": "application/zip", "x-upsert": "true" },
      body: e,
    });
    if (!r.ok) {
      const t = await r.text();
      throw r.status === 413 || t.includes("Payload too large")
        ? new Error("备份文件过大，请清理不需要的音乐/图片后重试")
        : new Error(`上传失败 (${r.status}): ${t}`);
    }
    gl();
    try {
      const t = await Mo();
      t != null && t.mtime && os(t.mtime);
    } catch {}
  },
  Mo = async () => {
    var i;
    const e = await Zr(`/object/list/${Ir}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prefix: "", limit: 100 }),
    });
    if (!e.ok) return null;
    const t = (await e.json()).find((n) => n.name === Eo);
    if (!((i = t == null ? void 0 : t.metadata) != null && i.size)) return null;
    const a = t.updated_at ?? t.created_at ?? "";
    return { size: t.metadata.size, mtime: a };
  },
  Rh = async () => {
    const e = await Mo();
    return (e == null ? void 0 : e.size) ?? null;
  },
  jh = async () => {
    const e = await Zr(`/object/${Ir}/${Eo}`);
    if (e.status === 404 || e.status === 400) return null;
    if (!e.ok) {
      const r = await e.text();
      throw new Error(`下载失败 (${e.status}): ${r}`);
    }
    return e.blob();
  },
  xl = 2,
  bl = ["date_mode_custom_writing_styles", "user_signature"],
  kl = [
    "chat_recent_emojis_v1:",
    "chat_bilingual_character_config_v1:",
    "date_mode_writing_config_v1:",
    "chat_activeDateModeSession_v1:",
    "world_",
    "house_layout_user_",
  ],
  Sl = (e) => bl.includes(e) || kl.some((r) => e.startsWith(r)),
  Tl = 100 * 1024,
  Il = ["music_audio_", "font_data_", "sprite_regions_v1_"],
  El = new Set([
    "v2_bg_image",
    "v2_avatar",
    "v2_widgetImg1",
    "v2_widgetImg2",
    "v2_p2TopAvatar",
    "v2_p2TopPhoto1",
    "v2_p2TopPhoto2",
    "v2_p2BtmAvatar1",
    "v2_p2BtmAvatar2",
    "v2_page2TopWidgetImage",
    "v2_page2BottomWidgetImage",
    "home_background",
    "moments_background",
    "app_icon_overrides",
    "chat_backgrounds",
    "date_backgrounds",
    "character_pet_images",
    "moment_comment_backfill_consumed_by_chat",
    "offline_last_active_at",
    "offline_msg_enabled",
    "offline_msg_synced_until",
    "floating_home_button_position",
    "__echoes_pre_cloud_restore_snapshot",
  ]),
  ss = "echoes_cloud_backup_manifest_v1",
  Cl = (e) => typeof e == "object" && e !== null && !Array.isArray(e),
  Al = (e) => typeof e == "string" && e.startsWith("data:") && e.length > Tl,
  vo = (e) => {
    if (!(e instanceof Blob || e instanceof ArrayBuffer))
      return Al(e)
        ? "__stripped_media__"
        : Array.isArray(e)
        ? e.map(vo)
        : Cl(e)
        ? Object.fromEntries(Object.entries(e).map(([r, t]) => [r, vo(t)]))
        : e;
  },
  Rl = async (e) => {
    const r = await Ke.getItem(`world_${e}`);
    return r == null
      ? { count: 0, invalid: !1 }
      : Array.isArray(r)
      ? { count: r.length, invalid: !1 }
      : { count: 0, invalid: !0 };
  },
  jl = async () => {
    const e = await Promise.all(
        [
          ["messages", "messages"],
          ["characters", "characters"],
          ["chats", "chats"],
          ["knowledge", "knowledge"],
          ["moments", "moment_posts"],
          ["diary", "character_diary_entries"],
        ].map(async ([t, a]) => [t, await Rl(a)])
      ),
      r = Object.fromEntries(e.map(([t, a]) => [t, a]));
    return {
      createdAt: new Date().toISOString(),
      messagesCount: r.messages.count,
      charactersCount: r.characters.count,
      chatsCount: r.chats.count,
      knowledgeCount: r.knowledge.count,
      momentsCount: r.moments.count,
      diaryCount: r.diary.count,
      invalidKeys: e.filter(([, t]) => t.invalid).map(([t]) => `world_${t}`),
    };
  },
  Nl = () => {
    const e = window.localStorage.getItem(ss);
    if (!e) return null;
    try {
      const r = JSON.parse(e);
      if (
        typeof r.createdAt == "string" &&
        typeof r.messagesCount == "number" &&
        typeof r.charactersCount == "number" &&
        typeof r.chatsCount == "number" &&
        typeof r.knowledgeCount == "number" &&
        typeof r.momentsCount == "number" &&
        typeof r.diaryCount == "number" &&
        Array.isArray(r.invalidKeys)
      )
        return r;
    } catch {}
    return null;
  },
  Pl = (e) => {
    window.localStorage.setItem(ss, JSON.stringify(e));
  },
  wa = (e, r, t, a, i) => e >= a && r <= Math.max(i, Math.floor(e * t)),
  Ml = (e, r = Nl()) => {
    if (e.invalidKeys.length > 0)
      return `检测到核心数据读取异常(${e.invalidKeys.join(
        ", "
      )}),本次已暂停自动云备份,避免覆盖云端正常备份。请先确认本机数据是否正常。`;
    if (!r || r.invalidKeys.length > 0) return null;
    const t = [];
    wa(r.messagesCount, e.messagesCount, 0.3, 30, 5) &&
      t.push(`聊天记录 ${r.messagesCount} → ${e.messagesCount}`),
      wa(r.charactersCount, e.charactersCount, 0.5, 4, 2) &&
        t.push(`角色 ${r.charactersCount} → ${e.charactersCount}`),
      wa(r.chatsCount, e.chatsCount, 0.5, 6, 2) &&
        t.push(`会话 ${r.chatsCount} → ${e.chatsCount}`);
    const a =
        r.messagesCount + r.knowledgeCount + r.momentsCount + r.diaryCount,
      i = e.messagesCount + e.knowledgeCount + e.momentsCount + e.diaryCount;
    return (
      wa(a, i, 0.35, 80, 10) && t.push(`核心文字数据 ${a} → ${i}`),
      t.length === 0
        ? null
        : `检测到本机数据量异常减少：${t.join(
            "、"
          )}。本次已暂停自动云备份,避免把疑似异常数据覆盖到云端。请先检查本机数据,确认无误后可手动上传。`
    );
  },
  cs = async () => {
    const e = new rs(),
      r = await Ke.keys(),
      t = [];
    for (const n of r) {
      if (Il.some((l) => n.startsWith(l)) || El.has(n)) continue;
      const d = await Ke.getItem(n);
      d instanceof Blob || d instanceof ArrayBuffer || t.push([n, vo(d)]);
    }
    const a = Object.fromEntries(
        Object.keys(window.localStorage)
          .filter(Sl)
          .map((n) => [n, window.localStorage.getItem(n) ?? ""])
      ),
      i = {
        version: xl,
        scope: "global",
        exportedAt: new Date().toISOString(),
        localforage: Object.fromEntries(t),
        localStorage: a,
        lite: !0,
      };
    return (
      e.file("data.json", JSON.stringify(i)), e.generateAsync({ type: "blob" })
    );
  };
let no = !1;
const Ol = 600 * 1e3,
  Dl = () => {
    if (!vl()) return !1;
    const { url: e, key: r } = Po();
    if (!e || !r) return !1;
    const t = as();
    if (!t) return !0;
    const a = Date.parse(t);
    return Number.isFinite(a) ? Date.now() - a >= ml : !0;
  },
  ls = async () => {
    const e = await Mo();
    if (!(e != null && e.mtime)) return "unknown";
    const r = yl();
    if (!r) {
      const i = as(),
        n = Date.parse(e.mtime),
        d = i ? Date.parse(i) : NaN;
      return Number.isFinite(n) && Number.isFinite(d) && n <= d + Ol
        ? (os(e.mtime), "same")
        : "newer";
    }
    const t = Date.parse(e.mtime),
      a = Date.parse(r);
    return !Number.isFinite(t) || !Number.isFinite(a)
      ? "unknown"
      : t > a
      ? "newer"
      : t < a
      ? "older"
      : "same";
  },
  Ll = async () => {
    if (!no && Dl()) {
      no = !0;
      try {
        if ((await ls()) === "newer") {
          const i =
            "云端有别的设备传上来的新版本,本次未自动上传(避免覆盖)。请手动「从云端恢复」同步后再试。";
          console.warn("[autoCloudBackup]", i), to(i);
          return;
        }
        const r = await jl(),
          t = Ml(r);
        if (t) {
          console.warn("[autoCloudBackup]", t), to(t);
          return;
        }
        const a = await cs();
        await _l(a), Pl(r), wl();
      } catch (e) {
        const r = e instanceof Error ? e.message : String(e);
        console.warn("[autoCloudBackup] upload failed:", r), to(r);
      } finally {
        no = !1;
      }
    }
  },
  Oo = "__echoes_pre_cloud_restore_snapshot",
  Nh = async () => {
    const e = (
        await ot(async () => {
          const { default: a } = await Promise.resolve().then(() => To);
          return { default: a };
        }, void 0)
      ).default,
      t = { zip: await cs(), takenAt: new Date().toISOString() };
    await e.setItem(Oo, t);
  },
  Ph = async () => {
    const r = await (
      await ot(async () => {
        const { default: t } = await Promise.resolve().then(() => To);
        return { default: t };
      }, void 0)
    ).default.getItem(Oo);
    return !r || !(r.zip instanceof Blob) || typeof r.takenAt != "string"
      ? null
      : r;
  },
  Mh = async () => {
    await (
      await ot(async () => {
        const { default: r } = await Promise.resolve().then(() => To);
        return { default: r };
      }, void 0)
    ).default.removeItem(Oo);
  },
  Do = "[[IMAGE_SCENE_START]]",
  Lo = "[[IMAGE_SCENE_END]]",
  Bo = "[[IMAGE_PROFILE_START]]",
  zo = "[[IMAGE_PROFILE_END]]",
  Fo = "[[IMAGE_STYLE_START]]",
  Uo = "[[IMAGE_STYLE_END]]",
  on = {
    enabled: !1,
    backend: "openai",
    stylePrompt: "cinematic photo, natural light, realistic, high detail",
    negativePrompt: "low quality, blurry, watermark, text, logo",
    size: "832x1216",
    openaiBaseUrl: "https://api.openai.com/v1",
    openaiApiKey: "",
    openaiModel: "gpt-image-1",
    novelaiApiKey: "",
    novelaiModel: "nai-diffusion-3",
    novelaiSteps: 28,
    novelaiScale: 5,
    novelaiSampler: "k_euler",
    useImageReference: !1,
  };
function us(e) {
  return {
    ...on,
    ...(e || {}),
    enabled: (e == null ? void 0 : e.enabled) === !0,
    backend:
      (e == null ? void 0 : e.backend) === "novelai"
        ? "novelai"
        : (e == null ? void 0 : e.backend) === "openai"
        ? "openai"
        : on.backend,
    size:
      (e == null ? void 0 : e.size) === "1216x832" ||
      (e == null ? void 0 : e.size) === "1024x1024"
        ? e.size
        : (e == null ? void 0 : e.size) === "832x1216"
        ? "832x1216"
        : on.size,
    novelaiSteps: Si(
      e == null ? void 0 : e.novelaiSteps,
      1,
      50,
      on.novelaiSteps
    ),
    novelaiScale: Si(
      e == null ? void 0 : e.novelaiScale,
      1,
      20,
      on.novelaiScale
    ),
  };
}
function Oh(e, r, t) {
  var p, v, x, s, b;
  const a = e.trim(),
    i = ds(a, (t == null ? void 0 : t.sender) || "character"),
    n = [],
    d =
      (t == null ? void 0 : t.useExplicitPeople) === !0 ||
      !!((p = t == null ? void 0 : t.people) != null && p.length);
  d &&
    t.people.forEach((f) => {
      var S;
      (S = f == null ? void 0 : f.imagePrompt) != null &&
        S.trim() &&
        n.push(`${f.name || "人物"}: ${f.imagePrompt.trim()}`);
    }),
    !d &&
      (i === "character" || i === "both") &&
      (x =
        (v = t == null ? void 0 : t.character) == null
          ? void 0
          : v.imagePrompt) != null &&
      x.trim() &&
      n.push(
        `${t.character.name || "角色"}: ${t.character.imagePrompt.trim()}`
      ),
    !d &&
      (i === "user" || i === "both") &&
      (b =
        (s = t == null ? void 0 : t.user) == null ? void 0 : s.imagePrompt) !=
        null &&
      b.trim() &&
      n.push(`${t.user.name || "用户"}: ${t.user.imagePrompt.trim()}`);
  const l =
    n.length > 0
      ? [
          "PERSON IDENTITY LOCK: The visible human subject(s) in the image must strictly match the following appearance profile(s).",
          "Do not change gender, age range, ethnicity, hair color, eye color, body type, or distinctive facial features.",
          `Appearance profile(s): ${n.join(" | ")}`,
        ].join(" ")
      : "";
  return [
    ro(Bo, zo, l),
    ro(Do, Lo, a),
    ro(Fo, Uo, r == null ? void 0 : r.trim()),
  ]
    .filter(Boolean)
    .join(", ");
}
function Dh(e, r) {
  var l, p;
  const t = e.trim(),
    a = ds(t, (r == null ? void 0 : r.sender) || "character"),
    i = [],
    n =
      (r == null ? void 0 : r.useExplicitPeople) === !0 ||
      !!((l = r == null ? void 0 : r.people) != null && l.length),
    d = (v) => {
      var s, b;
      const x =
        (s = v == null ? void 0 : v.imageReference) == null ? void 0 : s.trim();
      x &&
        !i.some((f) => f.dataUrl === x) &&
        i.push({
          dataUrl: x,
          name:
            ((b = v == null ? void 0 : v.name) == null ? void 0 : b.trim()) ||
            void 0,
        });
    };
  return n
    ? ((p = r == null ? void 0 : r.people) == null || p.forEach(d), i)
    : ((a === "character" || a === "both") &&
        d(r == null ? void 0 : r.character),
      (a === "user" || a === "both") && d(r == null ? void 0 : r.user),
      i);
}
function ds(e, r) {
  const t = e.toLowerCase();
  return t.trim()
    ? Hr(t, $l)
      ? "both"
      : Hr(t, Ul)
      ? r === "user"
        ? "character"
        : "user"
      : Hr(t, Fl)
      ? "user"
      : Hr(t, zl)
      ? r === "user"
        ? "user"
        : "character"
      : Hr(t, Wl)
      ? "scene"
      : r === "user"
      ? "user"
      : "unknown"
    : "unknown";
}
function Hr(e, r) {
  return r.some((t) => e.includes(t));
}
function ro(e, r, t) {
  const a = t == null ? void 0 : t.trim();
  return a ? `${e}${a}${r}` : "";
}
function ao(e, r, t) {
  const a = e.indexOf(r);
  if (a < 0) return "";
  const i = a + r.length,
    n = e.indexOf(t, i);
  return n < 0 ? "" : e.slice(i, n).trim();
}
function fs(e) {
  return e
    .replaceAll(Do, "")
    .replaceAll(Lo, "")
    .replaceAll(Bo, "")
    .replaceAll(zo, "")
    .replaceAll(Fo, "")
    .replaceAll(Uo, "")
    .trim();
}
function Bl(e) {
  const r = ao(e, Do, Lo);
  if (!r) return fs(e);
  const t = ao(e, Bo, zo),
    a = ao(e, Fo, Uo);
  return [r, t, a].filter(Boolean).join(", ");
}
const zl = [
    "自拍",
    "我的照片",
    "我照片",
    "我的图",
    "我拍的自己",
    "我的脸",
    "我的侧脸",
    "我的背影",
    "我本人",
    "镜前",
    "对镜",
    "穿搭照",
    "今日穿搭",
    "ootd",
    "selfie",
    "my photo",
    "photo of me",
    "picture of me",
  ],
  Fl = ["用户的照片", "用户照片"],
  Ul = [
    "你的照片",
    "你照片",
    "你的图",
    "你的自拍",
    "你的脸",
    "你的侧脸",
    "你的背影",
    "你本人",
    "对方的照片",
    "对方照片",
    "对方的自拍",
    "拍了你",
    "拍到你",
    "给你拍",
    "偷拍你",
    "your photo",
    "photo of you",
    "picture of you",
  ],
  $l = [
    "合照",
    "同框",
    "双人照",
    "二人照",
    "我们俩",
    "咱俩",
    "我和你",
    "你和我",
    "一起自拍",
    "一起拍",
    "group photo",
    "photo together",
    "together with you",
    "us together",
  ],
  Wl = [
    "风景",
    "天空",
    "街道",
    "建筑",
    "夜景",
    "海边",
    "山",
    "湖",
    "河",
    "雨景",
    "雪景",
    "日落",
    "晚霞",
    "食物",
    "饭",
    "菜",
    "咖啡",
    "甜点",
    "饮料",
    "桌面",
    "房间",
    "卧室",
    "客厅",
    "窗外",
    "截图",
    "聊天截图",
    "屏幕",
    "通知",
    "票据",
    "订单",
    "物品",
    "摆件",
    "花",
    "植物",
    "猫",
    "狗",
    "宠物",
    "landscape",
    "street",
    "sky",
    "food",
    "coffee",
    "room",
    "screenshot",
    "screen",
  ];
async function Lh(e, r, t = {}) {
  const a = us(e);
  if (!a.enabled) throw new Error("生图未开启");
  const i = r.trim();
  if (!i) throw new Error("生图提示词为空");
  const n =
    a.backend === "novelai"
      ? await Zl(a, i)
      : await Gl(a, i, t.referenceImages || []);
  return eu(n);
}
function Si(e, r, t, a) {
  return typeof e == "number" && Number.isFinite(e)
    ? Math.min(t, Math.max(r, e))
    : a;
}
function Hl(e) {
  const r = (e || on.openaiBaseUrl).trim().replace(/\/+$/, "");
  return r.endsWith("/v1/images/generations") ||
    r.endsWith("/images/generations")
    ? r
    : r.endsWith("/v1")
    ? `${r}/images/generations`
    : `${r}/v1/images/generations`;
}
function Kl(e) {
  const r = (e || on.openaiBaseUrl).trim().replace(/\/+$/, "");
  return r.endsWith("/v1/images/edits") || r.endsWith("/images/edits")
    ? r
    : r.endsWith("/v1/images/generations")
    ? r.replace(/\/generations$/, "/edits")
    : r.endsWith("/images/generations")
    ? r.replace(/\/generations$/, "/edits")
    : r.endsWith("/v1")
    ? `${r}/images/edits`
    : `${r}/v1/images/edits`;
}
async function Gl(e, r, t = []) {
  var S, c;
  const a = e.openaiApiKey.trim();
  if (!a) throw new Error("请先填写 OpenAI 生图 API Key");
  const i = e.openaiModel.trim() || on.openaiModel,
    n = /^gpt-image-/i.test(i);
  let l =
    (n
      ? {
          "832x1216": "1024x1536",
          "1216x832": "1536x1024",
          "1024x1024": "1024x1024",
        }
      : {
          "832x1216": "1024x1792",
          "1216x832": "1792x1024",
          "1024x1024": "1024x1024",
        })[e.size] || "1024x1024";
  i === "dall-e-2" && l !== "1024x1024" && (l = "1024x1024");
  let p = fs(r);
  e.negativePrompt.trim() &&
    (p += `

Avoid: ${e.negativePrompt.trim()}`);
  const v = e.useImageReference ? Vl(t).slice(0, 16) : [];
  if (v.length > 0)
    try {
      return await Yl(e, a, i, l, p, v);
    } catch (h) {
      console.warn(
        "OpenAI image reference generation failed, falling back to text-only generation:",
        h
      );
    }
  const x = { model: i, prompt: p.slice(0, n ? 8e3 : 4e3), n: 1, size: l };
  n
    ? ((x.quality = "auto"), (x.output_format = "png"))
    : (x.response_format = "b64_json");
  const s = await fetch(Hl(e.openaiBaseUrl), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${a}`,
    },
    body: JSON.stringify(x),
  });
  if (!s.ok) {
    const h = await Wo(s);
    throw new Error(`OpenAI 生图失败：${h}`);
  }
  const b = await s.json(),
    f =
      (c = (S = b == null ? void 0 : b.data) == null ? void 0 : S[0]) == null
        ? void 0
        : c.b64_json;
  if (!f) throw new Error("OpenAI 生图返回异常（无图像数据）");
  return $o(f, "image/png");
}
async function Yl(e, r, t, a, i, n) {
  var s, b;
  const d = Xl(n),
    l = new FormData();
  l.append("model", t),
    l.append(
      "prompt",
      [
        d,
        "Use the uploaded image(s) only as identity references for the visible person(s).",
        "Treat each reference image as a neutral identity sheet, not as a scene or composition to recreate.",
        "When multiple people appear, match each named person to their corresponding reference image and do not blend identities.",
        "People without an uploaded reference image should follow only their written appearance profile in the prompt.",
        "Preserve stable identity traits: face shape, facial features, age range, hair color, general hair length, and distinctive marks.",
        "Do not copy pose, gaze direction, facial expression, crop, framing, camera angle, lighting, background, clothing, or the exact hairstyle from the reference image unless the scene prompt explicitly asks for them.",
        "The scene prompt must control the final pose, composition, setting, mood, and camera view.",
        i,
      ]
        .filter(Boolean)
        .join(" ")
    ),
    l.append("n", "1"),
    l.append("size", a),
    /^gpt-image-1$/i.test(t) && l.append("input_fidelity", "high"),
    /^gpt-image-/i.test(t) && l.append("output_format", "png"),
    n.forEach((f, S) => {
      const c = Ql(f.dataUrl);
      l.append(
        "image",
        c,
        `appearance-reference-${S + 1}.${
          c.type.includes("webp")
            ? "webp"
            : c.type.includes("png")
            ? "png"
            : "jpg"
        }`
      );
    });
  const p = await fetch(Kl(e.openaiBaseUrl), {
    method: "POST",
    headers: { Authorization: `Bearer ${r}` },
    body: l,
  });
  if (!p.ok) {
    const f = await Wo(p);
    throw new Error(`OpenAI 参考图生图失败：${f}`);
  }
  const v = await p.json(),
    x =
      (b = (s = v == null ? void 0 : v.data) == null ? void 0 : s[0]) == null
        ? void 0
        : b.b64_json;
  if (!x) throw new Error("OpenAI 参考图生图返回异常（无图像数据）");
  return $o(x, "image/png");
}
function Vl(e) {
  const r = [];
  return (
    e.forEach((t) => {
      var i;
      const a =
        typeof t == "string"
          ? { dataUrl: t.trim(), name: void 0 }
          : {
              dataUrl: t.dataUrl.trim(),
              name: ((i = t.name) == null ? void 0 : i.trim()) || void 0,
            };
      a.dataUrl && !r.some((n) => n.dataUrl === a.dataUrl) && r.push(a);
    }),
    r
  );
}
function Xl(e) {
  const r = e
    .map((t, a) =>
      t.name
        ? `Reference image ${a + 1} belongs to ${t.name}.`
        : `Reference image ${a + 1} is an appearance reference.`
    )
    .join(" ");
  return r ? `Reference binding: ${r}` : "";
}
async function Zl(e, r) {
  const t = e.novelaiApiKey.trim();
  if (!t) throw new Error("请先填写 NovelAI Token");
  const a = e.novelaiModel || on.novelaiModel,
    i = Jl(a, Bl(r)),
    n = await fetch("https://image.novelai.net/ai/generate-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${t}`,
      },
      body: JSON.stringify({
        input: i,
        model: a,
        action: "generate",
        parameters: ql(a, i, e),
      }),
    });
  if (!n.ok) {
    const v = await Wo(n);
    throw new Error(`NovelAI 生图失败：${v}`);
  }
  const d = await rs.loadAsync(await n.arrayBuffer()),
    l = Object.values(d.files).find((v) => /\.(png|webp)$/i.test(v.name));
  if (!l) throw new Error("NovelAI 返回包内没有图片");
  const p = await l.async("arraybuffer");
  return new Blob([p], {
    type: l.name.toLowerCase().endsWith(".webp") ? "image/webp" : "image/png",
  });
}
function Jl(e, r) {
  return /nai-diffusion-4/.test(e)
    ? `${r}, location, very aesthetic, masterpiece, no text`
    : `${r}, best quality, amazing quality, very aesthetic, absurdres`;
}
function ql(e, r, t) {
  const [a, i] = t.size.split("x").map(Number),
    n =
      t.negativePrompt.trim() ||
      "nsfw, lowres, jpeg artifacts, worst quality, watermark, blurry, very displeasing",
    d = {
      width: a || 832,
      height: i || 1216,
      steps: t.novelaiSteps,
      scale: t.novelaiScale,
      sampler: t.novelaiSampler || on.novelaiSampler,
      n_samples: 1,
      qualityToggle: !0,
      negative_prompt: n,
    };
  return /nai-diffusion-4/.test(e)
    ? {
        ...d,
        params_version: 1,
        ucPreset: /curated/i.test(e) ? 3 : 5,
        v4_prompt: {
          caption: { base_caption: r, char_captions: [] },
          use_coords: !1,
          use_order: !0,
        },
        v4_negative_prompt: { caption: { base_caption: n, char_captions: [] } },
      }
    : {
        ...d,
        noise_schedule: "native",
        params_version: 1,
        legacy: !1,
        legacy_v3_extend: !1,
        ucPreset: 4,
        sm: !1,
        sm_dyn: !1,
        deliberate_euler_ancestral_bug: !0,
      };
}
function $o(e, r) {
  const t = atob(e),
    a = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i += 1) a[i] = t.charCodeAt(i);
  return new Blob([a], { type: r });
}
function Ql(e) {
  const r = e.match(/^data:([^;]+);base64,(.+)$/);
  if (!r) throw new Error("外观参考图格式无效");
  return $o(r[2], r[1]);
}
function eu(e) {
  return new Promise((r, t) => {
    const a = new FileReader();
    (a.onload = () => {
      const i = String(a.result || ""),
        n = new Image();
      (n.onload = () => {
        let { width: l, height: p } = n;
        (l > 1280 || p > 1280) &&
          (l >= p
            ? ((p = Math.round((p / l) * 1280)), (l = 1280))
            : ((l = Math.round((l / p) * 1280)), (p = 1280)));
        const v = document.createElement("canvas");
        (v.width = l), (v.height = p);
        const x = v.getContext("2d");
        if (!x) {
          r(i);
          return;
        }
        x.drawImage(n, 0, 0, l, p), r(v.toDataURL("image/jpeg", 0.8));
      }),
        (n.onerror = () => r(i)),
        (n.src = i);
    }),
      (a.onerror = () => t(a.error || new Error("图片读取失败"))),
      a.readAsDataURL(e);
  });
}
async function Wo(e) {
  var t;
  const r = await e.text();
  if (!r) return `HTTP ${e.status}`;
  try {
    const a = JSON.parse(r);
    return (
      ((t = a == null ? void 0 : a.error) == null ? void 0 : t.message) ||
      (a == null ? void 0 : a.message) ||
      (a == null ? void 0 : a.error) ||
      r.slice(0, 300)
    );
  } catch {
    return r.slice(0, 300);
  }
}
const tu = "chat_bilingual_character_config_v1",
  Ti = {
    en: { label: "英语", promptLabel: "English" },
    ja: { label: "日语", promptLabel: "Japanese" },
    ko: { label: "韩语", promptLabel: "Korean" },
    fr: { label: "法语", promptLabel: "French" },
    de: { label: "德语", promptLabel: "German" },
    yue: { label: "粤语", promptLabel: "Cantonese" },
  };
async function nu(e, r) {
  if (!e || !r) return null;
  try {
    const t = await ns(`${tu}:${e}`, {}),
      a = t == null ? void 0 : t[r];
    if (!(a != null && a.enabled)) return null;
    const i =
        typeof a.languageCode == "string" && Ti[a.languageCode]
          ? a.languageCode
          : "en",
      n = Ti[i];
    return {
      languageCode: i,
      languageLabel: n.label,
      promptLabel: n.promptLabel,
    };
  } catch {
    return null;
  }
}
Ke.config({ name: "World_Echoes_OS" });
function Ta(e) {
  if (typeof navigator > "u") return;
  const r = navigator.audioSession;
  if (r)
    try {
      r.type = e;
    } catch (t) {
      console.warn(`[KeepAlive] Failed to set audio session ${e}:`, t);
    }
}
function ru() {
  return (
    Ta("ambient"),
    () => {
      Ta("auto");
    }
  );
}
function oo(e) {
  const r = typeof window < "u" ? window : null,
    t = e ?? (r == null ? void 0 : r.__echoesKeepAliveAudio);
  if (!t) {
    Ta("auto");
    return;
  }
  try {
    t.pause(), t.removeAttribute("src"), t.load();
  } catch (a) {
    console.warn("[KeepAlive] Failed to stop keep-alive audio:", a);
  }
  r && r.__echoesKeepAliveAudio === t && (r.__echoesKeepAliveAudio = null),
    Ta("auto");
}
const wo = new Set();
function au(e) {
  var t;
  if (!e || wo.has(e) || typeof window > "u") return;
  wo.add(e);
  const r = new Image();
  (r.decoding = "async"),
    (r.referrerPolicy = "no-referrer"),
    (r.src = e),
    (t = r.decode) == null || t.call(r).catch(() => {});
}
function ou(e) {
  return (
    e === "这是他的家或主要私人空间。" ||
    e === "这是他的工作地点或主要事务场所。" ||
    e === "这是他经常会去的常用地点。"
  );
}
function _a(e) {
  return [
    {
      id: `${e.id}-anchor-home`,
      role: "home",
      intent: "home",
      customIntentLabel: "",
      placeId: e.homePlaceId,
      note: "",
    },
    {
      id: `${e.id}-anchor-work`,
      role: "work",
      intent: "work",
      customIntentLabel: "",
      placeId: e.workPlaceIds[0],
      note: "",
    },
    {
      id: `${e.id}-anchor-favorite`,
      role: "favorite",
      intent: "dining",
      customIntentLabel: "",
      placeId: e.favoritePlaceIds[0],
      note: "",
    },
  ];
}
function iu(e) {
  const r =
      e.placeAnchors && e.placeAnchors.length > 0 ? e.placeAnchors : _a(e),
    t = [
      r.find((d) => d.role === "home") || _a(e)[0],
      r.find((d) => d.role === "work") || _a(e)[1],
      r.find((d) => d.role === "favorite") || _a(e)[2],
      ...r.filter((d) => !["home", "work", "favorite"].includes(d.role)),
    ].map((d) => ({
      ...d,
      id:
        d.id ||
        `${e.id}-anchor-${d.role}-${Math.random().toString(36).slice(2, 8)}`,
      intent: d.intent || Ra(d.role),
      customIntentLabel: d.customIntentLabel || "",
      note: ou(d.note) ? "" : d.note || "",
    })),
    a = t.find((d) => d.intent === "home" && d.placeId),
    i = t.find((d) => d.intent === "work" && d.placeId),
    n = t.find(
      (d) => ["dining", "entertainment"].includes(d.intent || "") && d.placeId
    );
  return {
    ...e,
    placeAnchors: t,
    homePlaceId: a == null ? void 0 : a.placeId,
    workPlaceIds: i != null && i.placeId ? [i.placeId] : [],
    favoritePlaceIds: n != null && n.placeId ? [n.placeId] : [],
  };
}
const tr = new Map();
let Kr = null;
const io = 50;
let so = !1;
async function su() {
  for (; tr.size > 0; ) {
    const e = tr.entries().next();
    if (e.done) break;
    const [r, t] = e.value;
    tr.delete(r);
    try {
      await Ke.setItem(r, t);
    } catch (a) {
      console.error(`[writeQueue] write failed for "${r}":`, a);
    }
  }
}
function hs(e, r) {
  tr.set(e, r),
    tr.size >= io && !so
      ? ((so = !0),
        console.warn(
          `[writeQueue] pending writes reached ${tr.size} (threshold ${io}). 生产速度 > IDB 消费速度，切后台 drain 跑不完的风险升高。`
        ))
      : tr.size < io / 2 && (so = !1),
    Kr ||
      (Kr = su().finally(() => {
        Kr = null;
      }));
}
async function Ii() {
  for (; Kr; ) await Kr;
}
typeof document < "u" &&
  (document.addEventListener("visibilitychange", async () => {
    document.visibilityState === "hidden" &&
      (await Ii(),
      Ll().catch((e) => {
        console.warn("[autoCloudBackup] unexpected error:", e);
      }));
  }),
  window.addEventListener("pagehide", async () => {
    await Ii();
  }));
function se(e, r, t) {
  const [a, i] = P.useState(r),
    n = P.useRef(!1);
  P.useEffect(() => {
    n.current = t;
  }, [t]);
  const d = P.useCallback(
    (l) => {
      i((p) => {
        const v = typeof l == "function" ? l(p) : l;
        return n.current && hs(`world_${e}`, v), v;
      });
    },
    [e]
  );
  return [a, d];
}
function ps(e) {
  const r = e == null ? void 0 : e.syncContextLength;
  return typeof r == "number" && Number.isFinite(r) && r > 0
    ? Math.min(300, Math.max(10, Math.round(r / 10) * 10))
    : Yc;
}
function cu(e) {
  return ps(e) * 100;
}
const dt = {
    v2BgImage: "/defaults/home/v2-bg.jpg",
    v2Avatar: "/defaults/home/v2-avatar.jpg",
    widgetImg1: "/defaults/home/widget-1.jpg",
    widgetImg2: "/defaults/home/widget-2.jpg",
    p2TopAvatar: "/defaults/home/page2-top-avatar.jpg",
    p2TopPhoto1: "/defaults/home/page2-top-photo-1.jpg",
    p2TopPhoto2: "/defaults/home/page2-top-photo-2.jpg",
    p2BtmAvatar1: "/defaults/home/page2-bottom-avatar-1.jpg",
    p2BtmAvatar2: "/defaults/home/page2-bottom-avatar-2.jpg",
    page2TopWidgetImage: "/defaults/home/page2-widget-top.jpg",
    page2BottomWidgetImage: "/defaults/home/page2-widget-bottom.jpg",
  },
  pn = {
    v2BgImage:
      "https://i.postimg.cc/SxBjwT2x/yue-se-fu-Joseph-Zbukvic-ji-pin-(19).jpg",
    v2Avatar: "https://i.postimg.cc/RVzm5kX4/QQ20260307-185324.png",
    widgetImg1:
      "https://i.postimg.cc/pT8SsTNs/yue-se-fu-Joseph-Zbukvic-ji-pin-(79).jpg",
    widgetImg2:
      "https://i.postimg.cc/2yDKMDmG/yue-se-fu-Joseph-Zbukvic-ji-pin-(84).jpg",
    p2TopAvatar:
      "https://i.postimg.cc/LXVPn987/yue-se-fu-Joseph-Zbukvic-ji-pin-(35).jpg",
    p2TopPhoto1:
      "https://i.postimg.cc/1tS6mnsB/yue-se-fu-Joseph-Zbukvic-ji-pin-(38).jpg",
    p2TopPhoto2:
      "https://i.postimg.cc/nzx7Fjp0/yue-se-fu-Joseph-Zbukvic-ji-pin-(49).jpg",
    p2BtmAvatar1:
      "https://i.postimg.cc/j5TNxwtQ/yue-se-fu-Joseph-Zbukvic-ji-pin-(59).jpg",
    p2BtmAvatar2:
      "https://i.postimg.cc/Jn8JrDMK/yue-se-fu-Joseph-Zbukvic-ji-pin-(69).jpg",
    page2TopWidgetImage:
      "https://i.postimg.cc/mgN8gP4x/yue-se-fu-Joseph-Zbukvic-ji-pin-31.jpg",
    page2BottomWidgetImage:
      "https://i.postimg.cc/J4ztqJHn/yue-se-fu-Joseph-Zbukvic-ji-pin-90.jpg",
  },
  Xe = {
    v2Username: "Observer",
    v2Signature: `@echoes 📡 Searching for signals...
memory.sync( 12% ) ✦`,
    v2Location: "🪐 Sector 404",
    widgetText1a: "White Noise",
    widgetText1b: "playing 12% ✦",
    widgetText2a: "Soul.exe",
    widgetText2b: "not found ✧",
    widgetTitle: "Quiet Room 🌙",
    widget2Title: "I've seen things",
    widget2Text1: "you people wouldn't believe",
    widget2Text2: "Attack ships on fire",
    widget2Text3: "off the shoulder of Orion",
    widget2Text4: "Lost, like tears in rain ✦",
    p2TopText1: "Drift.log",
    p2TopText2: "echo ∿ fading",
    p2TopText3: "signal : weak ✧",
    p2TopText4: "◌ still listening",
  },
  Ot = {
    v2Username: "lazy_sleepy",
    v2Signature: "@cat_tree ❄️ The kiss of the first snow...",
    v2Location: "Hokkaido",
    widgetText1a: "✦✧°Snow Country",
    widgetText1b: "Travel ℬ ₊.˚",
    widgetText2a: "❄・雪 は我的匂い",
    widgetText2b: "✧",
    widgetTitle: "White Snow ❅",
    widget2Title: "I've seen things",
    widget2Text1: "you people wouldn't believe",
    widget2Text2: "Attack ships on fire",
    widget2Text3: "off the shoulder of Orion",
    widget2Text4: "Lost, like tears in rain ✦",
    p2TopText1: "Drift.log 🌊",
    p2TopText2: "echo ∿ fading",
    p2TopText3: "signal : weak ✧",
    p2TopText4: "◌ still listening",
  },
  Ei = { presetId: "urban-daily", customPrompt: "", updatedAt: Date.now() },
  ms = P.createContext(void 0),
  Bh = ({ children: e }) => {
    const [r, t] = P.useState(() => {
        try {
          const be = sessionStorage.getItem("nav_currentApp");
          if (
            be &&
            [
              "home",
              "chat",
              "world",
              "diary",
              "profiling",
              "character",
              "settings",
              "user",
              "worldbook",
              "map",
              "schedule",
              "reflection",
              "forum",
              "wallet",
              "shop",
              "floating_life",
              "baixiang",
              "wardrobe",
            ].includes(be)
          )
            return be;
        } catch {}
        return "home";
      }),
      [a, i] = P.useState(0),
      [n, d] = P.useState(!0),
      [l, p] = P.useState(null),
      [v, x] = se("characters", xi, !n),
      [s, b] = se("npcs", bi, !n),
      [f, S] = se("users", qa, !n),
      [c, h] = se("active_user_id", "observer_init", !n),
      [o, u] = se(
        "chats",
        [
          {
            id: "chat-lior",
            name: "Lior",
            memberIds: ["observer_init", "lior"],
            isGroup: !1,
            lastRecapTimestamp: 0,
            lastReadTimestamp: 0,
          },
          {
            id: "chat-mochi",
            name: "Mochi",
            memberIds: ["observer_init", "mochi"],
            isGroup: !1,
            lastRecapTimestamp: 0,
            lastReadTimestamp: 0,
          },
        ],
        !n
      ),
      [_, w] = se("knowledge", [], !n),
      y = P.useCallback(
        (be) => {
          Qc(), w(be);
        },
        [w]
      ),
      [T, I] = se("messages", [], !n),
      [M, O] = se("states", [], !n),
      [U, J] = se("saved_messages", [], !n),
      [C, D] = se("saved_folders", [], !n),
      [k, V] = P.useState(() => {
        try {
          return sessionStorage.getItem("nav_activeChatId") || null;
        } catch {}
        return null;
      }),
      [ee, Z] = se("user_contacts", {}, !n),
      [ve, Q] = se("contact_remark_names", {}, !n),
      [ce, B] = se("character_contacts", {}, !n),
      [H, Ee] = se("pinned_contacts", {}, !n),
      [fe, he] = se("social_relations", [], !n),
      [Te, Pe] = se("npc_shared_emoji_category_ids", [], !n),
      [Re, Oe] = se("api_presets", [], !n),
      [Fe, $e] = se("active_preset_id", null, !n),
      [it, ye] = se("summary_api_preset", null, !n),
      [m, X] = se("image_generation_settings", on, !n),
      [G, N] = se("secondary_api_features", { recall: !1 }, !n),
      [R, z] = P.useState(null),
      re = P.useRef(!1),
      [ae, Y] = se("chat_summary_preset_id", null, !n),
      [ue, _e] = se("minimax_api_key", "", !n),
      [de, xe] = se("minimax_group_id", "", !n),
      [Be, Ne] = se("minimax_model", "speech-2.8-turbo", !n),
      [Je, gt] = se("minimax_voice_emotion_enabled", !1, !n),
      [tt, ft] = se("emoji_categories", [], !n),
      [De, at] = se("world_books", [], !n),
      [It, bt] = se("world_book_subcategories", [], !n),
      [ht, jt] = se("moment_posts", [], !n),
      [Nt, Pt] = se("moment_comments", [], !n),
      [gn, Xt] = se("moment_comment_backfill_consumed_by_chat", {}, !n),
      [Zt, ir] = se("profiling_records", [], !n),
      [Kn, Gn] = se("memory_char_limit", 3e4, !n),
      [sr, cr] = se("home_background", null, !n),
      [lr, ur] = se("moments_background", null, !n),
      [dr, jn] = se("app_icon_overrides", {}, !n),
      [In, yn] = se("home_icon_color", "#475569", !n),
      [Nn, Pn] = se("home_text_color", "#64748b", !n),
      [fr, En] = se("chat_backgrounds", {}, !n),
      [hr, Mn] = se("date_backgrounds", {}, !n),
      [On, pr] = P.useState(null),
      [Dn, mr] = se("custom_world_year", null, !n),
      [Yn, Ln] = se("enable_chat_toast", !0, !n),
      [nn, Dt] = se("enable_keep_alive", !1, !n),
      [rn, vn] = se("enable_bg_notification", !1, !n),
      [Jt, Bn] = se("enable_fake_status_bar", !1, !n),
      [yt, wn] = se("fake_status_bar_blank", !1, !n),
      [Lt, Kt] = se("enable_floating_home_button", !1, !n),
      [ln, gr] = se("floating_home_button_position", null, !n),
      [qt, Gt] = se("v2_bg_image", dt.v2BgImage, !n),
      [_n, E] = se("v2_avatar", dt.v2Avatar, !n),
      [L, j] = se("v2_username", Xe.v2Username, !n),
      [$, K] = se("v2_signature", Xe.v2Signature, !n),
      [F, oe] = se("v2_location", Xe.v2Location, !n),
      [le, pe] = se("v2_widgetImg1", dt.widgetImg1, !n),
      [ge, we] = se("v2_widgetText1a", Xe.widgetText1a, !n),
      [Ae, Me] = se("v2_widgetText1b", Xe.widgetText1b, !n),
      [We, Ye] = se("v2_widgetImg2", dt.widgetImg2, !n),
      [rt, Qe] = se("v2_widgetText2a", Xe.widgetText2a, !n),
      [Bt, vt] = se("v2_widgetText2b", Xe.widgetText2b, !n),
      [Vn, Xn] = se("v2_widgetTitle", Xe.widgetTitle, !n),
      [zn, Ue] = se("v2_widget2Title", Xe.widget2Title, !n),
      [Ar, yr] = se("v2_widget2Text1", Xe.widget2Text1, !n),
      [vr, Jr] = se("v2_widget2Text2", Xe.widget2Text2, !n),
      [qr, Qr] = se("v2_widget2Text3", Xe.widget2Text3, !n),
      [Na, ea] = se("v2_widget2Text4", Xe.widget2Text4, !n),
      [Pa, Rr] = se("v2_p2TopText1", Xe.p2TopText1, !n),
      [jr, Nr] = se("v2_p2TopText2", Xe.p2TopText2, !n),
      [ta, na] = se("v2_p2TopText3", Xe.p2TopText3, !n),
      [Ma, Pr] = se("v2_p2TopText4", Xe.p2TopText4, !n),
      [ra, Mr] = se("v2_p2TopAvatar", dt.p2TopAvatar, !n),
      [aa, Or] = se("v2_p2TopPhoto1", dt.p2TopPhoto1, !n),
      [st, Mt] = se("v2_p2TopPhoto2", dt.p2TopPhoto2, !n),
      [Yt, Cn] = se("v2_p2BtmAvatar1", dt.p2BtmAvatar1, !n),
      [ze, kt] = se("v2_p2BtmAvatar2", dt.p2BtmAvatar2, !n),
      [Qt, oa] = se("v2_page2TopWidgetImage", dt.page2TopWidgetImage, !n),
      [xn, un] = se("v2_page2BottomWidgetImage", dt.page2BottomWidgetImage, !n),
      [Zn, Et] = se("map_themes", Sr, !n),
      [wr, _r] = se("world_maps", mi, !n),
      [Fn, Dr] = se("places", Za, !n),
      [Jn, xr] = se("entity_map_bindings", yi, !n),
      [ia, sa] = se("daily_plans", [], !n),
      [Oa, ca] = P.useState([]),
      Lr = P.useRef(new Map()),
      [Da, qn] = se("tone_settings", Ei, !n),
      [br, $t] = se("calendar_events", [], !n),
      [dn, la] = se("user_anchors", [], !n),
      [La, kr] = se("reflection_fragments", [], !n),
      [Ba, ua] = se("character_diary_entries", [], !n),
      [za, da] = se("user_diary_entries", [], !n),
      [fa, Br] = se("user_diary_annotations", [], !n),
      [A, te] = se("forum_sections", Wr, !n),
      [me, Ie] = se("forum_posts", [], !n),
      [je, Ze] = se("forum_comments", [], !n),
      [pt, en] = P.useState(null),
      [tn, Ct] = se("offline_last_active_at", 0, !n),
      [St, Wt] = se("offline_msg_enabled", {}, !n),
      [Qn, zr] = se("offline_msg_synced_until", {}, !n),
      [Es, Fa] = P.useState({}),
      [ha, Cs] = P.useState(null),
      [As, Rs] = P.useState(null),
      [js, Ns] = P.useState(null),
      [Ps, Ms] = P.useState(!1),
      [Os, Ds] = P.useState(!1),
      [Ls, Ko] = se("character_financials", [], !n),
      [Bs, Go] = se("user_wallets", [], !n),
      [zs, Yo] = se("transactions", [], !n),
      [Fs, Vo] = se("wardrobe_items", [], !n),
      [Us, Xo] = se("unlocked_furniture_pack_ids", [], !n),
      [$s, Zo] = se("custom_shop_items", [], !n),
      [Ws, Jo] = se("custom_categories", [], !n),
      [qo, Ua] = se("floating_life_sessions", [], !n),
      [Hs, Qo] = se("custom_chat_css", "", !n),
      [Ks, ei] = se("custom_global_css", "", !n),
      [Gs, ti] = se("css_presets", [], !n),
      [Ys, ni] = se("custom_fonts_v2", [], !n),
      [Vs, ri] = se("network_fonts", [], !n),
      [Xs, ai] = se("active_font_family", "", !n),
      [Zs, oi] = se("global_font_scale", 1, !n),
      [Js, ii] = se("character_pet_images", {}, !n),
      [qs, si] = se("active_pet_char_ids", {}, !n),
      [$a, pa] = se("pet_dialogues", {}, !n),
      [Wa, Ha] = P.useState(!1),
      [Qs, ci] = P.useState(!1),
      Ka = P.useRef(!1),
      ec = $i.useCallback((be, W) => {
        const Ce = Lr.current.get(be);
        if (Ce) return Ce;
        ca((q) => (q.includes(be) ? q : [...q, be]));
        const Se = W().finally(() => {
          Lr.current.delete(be), ca((q) => q.filter((ke) => ke !== be));
        });
        return Lr.current.set(be, Se), Se;
      }, []);
    P.useEffect(() => {
      if (!nn) {
        oo();
        return;
      }
      oo();
      const be = typeof window < "u" ? window : null,
        W = new Audio("/assets/silence.wav");
      be && (be.__echoesKeepAliveAudio = W),
        (W.loop = !0),
        (W.volume = 0),
        (W.preload = "auto");
      const Ce = ru(),
        Se = () => {
          W.play().catch(() => {});
        };
      Se();
      const q = () => {
        Se(), window.removeEventListener("pointerdown", q);
      };
      window.addEventListener("pointerdown", q);
      const ke = () => {
        document.visibilityState === "visible" && Se();
      };
      return (
        document.addEventListener("visibilitychange", ke),
        () => {
          document.removeEventListener("visibilitychange", ke),
            window.removeEventListener("pointerdown", q),
            oo(W),
            Ce();
        }
      );
    }, [nn]),
      P.useEffect(() => {
        $c(Dn);
      }, [Dn]),
      P.useEffect(() => {
        Object.values($a).some((W) => !Array.isArray(W.fall)) &&
          pa((W) => {
            const Ce = {};
            return (
              Object.entries(W).forEach(([Se, q]) => {
                Ce[Se] = {
                  poked: Array.isArray(q.poked) ? q.poked : [],
                  held: Array.isArray(q.held) ? q.held : [],
                  shake: Array.isArray(q.shake) ? q.shake : [],
                  climb: Array.isArray(q.climb) ? q.climb : [],
                  fall: Array.isArray(q.fall) ? q.fall : [],
                  idle: Array.isArray(q.idle) ? q.idle : [],
                };
              }),
              Ce
            );
          });
      }, [$a, pa]),
      P.useEffect(() => {
        var be;
        Fe &&
          !Re.some((W) => W.id === Fe) &&
          $e(((be = Re[0]) == null ? void 0 : be.id) || null),
          ae && !Re.some((W) => W.id === ae) && Y(null);
      }, [Fe, Re, ae, $e, Y]),
      P.useEffect(() => {
        if (!ae) return;
        if (it !== null) {
          Y(null);
          return;
        }
        const be = Re.find((W) => W.id === ae);
        if (!be) {
          Y(null);
          return;
        }
        ye({ ...be, id: "summary_api_preset", name: "总结 / 提纯专用 API" }),
          Y(null);
      }, [Re, ae, Y, ye, it]);
    const tc = f.find((be) => be.id === c) || f[0] || qa[0];
    P.useEffect(() => {
      try {
        sessionStorage.setItem("nav_currentApp", r);
      } catch {}
    }, [r]),
      P.useEffect(() => {
        try {
          k
            ? sessionStorage.setItem("nav_activeChatId", k)
            : sessionStorage.removeItem("nav_activeChatId");
        } catch {}
      }, [k]),
      P.useEffect(() => {
        if (n || tt.length === 0 || typeof window > "u") return;
        const be = Array.from(
          new Set(
            tt
              .flatMap((Le) => Le.emojis)
              .map((Le) => Le.url)
              .filter((Le) => !!Le && !wo.has(Le))
          )
        );
        if (be.length === 0) return;
        const W = 12;
        let Ce = !1,
          Se = null,
          q = null;
        const ke = () => {
          Ce ||
            (be.splice(0, W).forEach(au),
            be.length !== 0 &&
              ("requestIdleCallback" in window
                ? (Se = window.requestIdleCallback(ke, { timeout: 1500 }))
                : (q = window.setTimeout(ke, 120))));
        };
        return (
          ke(),
          () => {
            (Ce = !0),
              Se !== null &&
                "cancelIdleCallback" in window &&
                window.cancelIdleCallback(Se),
              q !== null && window.clearTimeout(q);
          }
        );
      }, [tt, n]),
      P.useEffect(() => {
        (async () => {
          try {
            const W = async (q, ke, Le, ie = !0, He = !1, et) => {
              let nt = await Ke.getItem(`world_${q}`);
              if (nt === null && ie) {
                const zt = localStorage.getItem(`world_${q}`);
                if (zt)
                  try {
                    (nt = JSON.parse(zt)),
                      await Ke.setItem(`world_${q}`, nt),
                      localStorage.removeItem(`world_${q}`),
                      console.log(`Migrated ${q} to IndexedDB`);
                  } catch (fn) {
                    console.error(`Migration error for ${q}:`, fn);
                  }
              }
              if (nt !== null && Array.isArray(Le) && !Array.isArray(nt)) {
                const zt = `__corrupted_${q}_${Date.now()}`;
                await Ke.setItem(zt, nt).catch(() => {}),
                  console.warn(
                    `[loadState] "${q}" expected array but got ${typeof nt}, backed up to "${zt}" and resetting to default`
                  ),
                  (nt = null);
              }
              const An =
                  nt === null ||
                  (He && typeof nt == "string" && nt.trim() === ""),
                Fr = !An && et !== void 0 && nt === et;
              if (An) {
                if (nt === null) {
                  const zt = await Ke.getItem(`world_${q}`);
                  if (zt !== null) {
                    if (Array.isArray(Le) && !Array.isArray(zt)) {
                      const fn = `__corrupted_${q}_${Date.now()}`;
                      await Ke.setItem(fn, zt).catch(() => {}),
                        console.warn(
                          `[loadState] "${q}" 复读到损坏数据（非数组），已备份到 "${fn}"，写入默认`
                        ),
                        ke(Le),
                        await Ke.setItem(`world_${q}`, Le);
                    } else
                      console.warn(
                        `[loadState] "${q}" 首读 null 复读有值，跳过默认值覆盖，使用真实数据`
                      ),
                        ke(zt);
                    return;
                  }
                }
                ke(Le), await Ke.setItem(`world_${q}`, Le);
              } else {
                const zt = Fr ? Le : nt;
                ke(zt), Fr && (await Ke.setItem(`world_${q}`, zt));
              }
            };
            await Promise.all([
              W("characters", x, xi),
              W("npcs", b, bi),
              W("users", S, qa),
              W("active_user_id", h, "observer_init"),
              W("chats", u, [
                {
                  id: "chat-lior",
                  name: "Lior",
                  memberIds: ["observer_init", "lior"],
                  isGroup: !1,
                  lastRecapTimestamp: 0,
                  lastReadTimestamp: 0,
                },
                {
                  id: "chat-mochi",
                  name: "Mochi",
                  memberIds: ["observer_init", "mochi"],
                  isGroup: !1,
                  lastRecapTimestamp: 0,
                  lastReadTimestamp: 0,
                },
              ]),
              W("knowledge", y, []),
              W("messages", I, []),
              W("states", O, []),
              W("saved_messages", J, []),
              W("saved_folders", D, []),
              W("user_contacts", Z, {}),
              W("contact_remark_names", Q, {}),
              W("character_contacts", B, {}),
              W("pinned_contacts", Ee, {}),
              W("social_relations", he, []),
              W("npc_shared_emoji_category_ids", Pe, []),
              W("api_presets", Oe, []),
              W("active_preset_id", $e, null),
              W("summary_api_preset", ye, null),
              W("image_generation_settings", (q) => X(us(q)), on),
              W("secondary_api_features", N, { recall: !1 }),
              W("chat_summary_preset_id", Y, null),
              W("minimax_api_key", _e, ""),
              W("minimax_group_id", xe, ""),
              W("minimax_model", Ne, "speech-2.8-turbo"),
              W("minimax_voice_emotion_enabled", gt, !1),
              W("emoji_categories", ft, []),
              W("world_books", at, []),
              W("world_book_subcategories", bt, []),
              W("moment_posts", jt, []),
              W("moment_comments", Pt, []),
              W("moment_comment_backfill_consumed_by_chat", Xt, {}),
              W("profiling_records", ir, []),
              W("memory_char_limit", Gn, 3e4),
              W("home_background", cr, null, !0, !0),
              W("moments_background", ur, null, !0, !0),
              W("app_icon_overrides", jn, {}),
              W("home_icon_color", yn, "#475569"),
              W("home_text_color", Pn, "#64748b"),
              W("chat_backgrounds", En, {}),
              W("date_backgrounds", Mn, {}),
              W("custom_world_year", mr, null),
              W("enable_chat_toast", Ln, !0),
              W("enable_keep_alive", Dt, !1),
              W("enable_bg_notification", vn, !1),
              W("enable_fake_status_bar", Bn, !1),
              W("fake_status_bar_blank", wn, !1),
              W("enable_floating_home_button", Kt, !1),
              W("floating_home_button_position", gr, null),
              W("v2_bg_image", Gt, dt.v2BgImage, !0, !0, pn.v2BgImage),
              W("v2_avatar", E, dt.v2Avatar, !0, !0, pn.v2Avatar),
              W("v2_username", j, Xe.v2Username, !0, !1, Ot.v2Username),
              W("v2_signature", K, Xe.v2Signature, !0, !1, Ot.v2Signature),
              W("v2_location", oe, Xe.v2Location, !0, !1, Ot.v2Location),
              W("v2_widgetImg1", pe, dt.widgetImg1, !0, !0, pn.widgetImg1),
              W(
                "v2_widgetText1a",
                we,
                Xe.widgetText1a,
                !0,
                !1,
                Ot.widgetText1a
              ),
              W(
                "v2_widgetText1b",
                Me,
                Xe.widgetText1b,
                !0,
                !1,
                Ot.widgetText1b
              ),
              W("v2_widgetImg2", Ye, dt.widgetImg2, !0, !0, pn.widgetImg2),
              W(
                "v2_widgetText2a",
                Qe,
                Xe.widgetText2a,
                !0,
                !1,
                Ot.widgetText2a
              ),
              W(
                "v2_widgetText2b",
                vt,
                Xe.widgetText2b,
                !0,
                !1,
                Ot.widgetText2b
              ),
              W("v2_widgetTitle", Xn, Xe.widgetTitle, !0, !1, Ot.widgetTitle),
              W(
                "v2_widget2Title",
                Ue,
                Xe.widget2Title,
                !0,
                !1,
                Ot.widget2Title
              ),
              W(
                "v2_widget2Text1",
                yr,
                Xe.widget2Text1,
                !0,
                !1,
                Ot.widget2Text1
              ),
              W(
                "v2_widget2Text2",
                Jr,
                Xe.widget2Text2,
                !0,
                !1,
                Ot.widget2Text2
              ),
              W(
                "v2_widget2Text3",
                Qr,
                Xe.widget2Text3,
                !0,
                !1,
                Ot.widget2Text3
              ),
              W(
                "v2_widget2Text4",
                ea,
                Xe.widget2Text4,
                !0,
                !1,
                Ot.widget2Text4
              ),
              W("v2_p2TopText1", Rr, Xe.p2TopText1, !0, !1, Ot.p2TopText1),
              W("v2_p2TopText2", Nr, Xe.p2TopText2, !0, !1, Ot.p2TopText2),
              W("v2_p2TopText3", na, Xe.p2TopText3, !0, !1, Ot.p2TopText3),
              W("v2_p2TopText4", Pr, Xe.p2TopText4, !0, !1, Ot.p2TopText4),
              W("v2_p2TopAvatar", Mr, dt.p2TopAvatar, !0, !0, pn.p2TopAvatar),
              W("v2_p2TopPhoto1", Or, dt.p2TopPhoto1, !0, !0, pn.p2TopPhoto1),
              W("v2_p2TopPhoto2", Mt, dt.p2TopPhoto2, !0, !0, pn.p2TopPhoto2),
              W(
                "v2_p2BtmAvatar1",
                Cn,
                dt.p2BtmAvatar1,
                !0,
                !0,
                pn.p2BtmAvatar1
              ),
              W(
                "v2_p2BtmAvatar2",
                kt,
                dt.p2BtmAvatar2,
                !0,
                !0,
                pn.p2BtmAvatar2
              ),
              W(
                "v2_page2TopWidgetImage",
                oa,
                dt.page2TopWidgetImage,
                !0,
                !0,
                pn.page2TopWidgetImage
              ),
              W(
                "v2_page2BottomWidgetImage",
                un,
                dt.page2BottomWidgetImage,
                !0,
                !0,
                pn.page2BottomWidgetImage
              ),
              W("map_themes", Et, Sr),
              W("world_maps", _r, mi),
              W("places", Dr, Za),
              W("entity_map_bindings", xr, yi),
              W("daily_plans", sa, []),
              W("tone_settings", qn, Ei),
              W("calendar_events", $t, []),
              W("user_anchors", la, []),
              W("reflection_fragments", kr, []),
              W("character_diary_entries", ua, []),
              W("user_diary_entries", da, []),
              W("user_diary_annotations", Br, []),
              W("forum_sections", te, Wr),
              W("forum_posts", Ie, []),
              W("forum_comments", Ze, []),
              W("offline_last_active_at", Ct, 0),
              W("offline_msg_enabled", Wt, {}),
              W("offline_msg_synced_until", zr, {}),
              W("character_financials", Ko, []),
              W("user_wallets", Go, []),
              W("transactions", Yo, []),
              W("wardrobe_items", Vo, []),
              W("unlocked_furniture_pack_ids", Xo, []),
              W("custom_shop_items", Zo, []),
              W("custom_categories", Jo, []),
              W("floating_life_sessions", Ua, []),
              W("custom_chat_css", Qo, ""),
              W("custom_global_css", ei, ""),
              W("css_presets", ti, []),
              W("custom_fonts_v2", ni, []),
              W("network_fonts", ri, []),
              W("active_font_family", ai, ""),
              W("global_font_scale", oi, 1),
              W("character_pet_images", ii, {}),
              W("active_pet_char_ids", si, {}),
              W("pet_dialogues", pa, {}),
            ]),
              await Ke.removeItem("world_districts"),
              localStorage.removeItem("world_districts");
            const Ce = new Map(Wr.map((q) => [q.id, q])),
              Se = new Set(Wr.map((q) => q.id));
            te((q) => {
              const Le = q
                  .filter((et) => !et.isSystem || Se.has(et.id))
                  .map((et) => {
                    const nt = Ce.get(et.id);
                    return nt
                      ? {
                          ...et,
                          name: nt.name,
                          description: nt.description,
                          isSystem: nt.isSystem,
                          rules: nt.rules,
                        }
                      : et;
                  }),
                ie = new Set(Le.map((et) => et.id)),
                He = Wr.filter((et) => !ie.has(et.id));
              return [...Le, ...He];
            }),
              d(!1);
          } catch (W) {
            console.error("Initialization error:", W),
              p(W instanceof Error ? W : new Error(String(W)));
          }
        })();
      }, []);
    const li = P.useRef(!1);
    P.useEffect(() => {
      if (n || li.current) return;
      li.current = !0;
      const be = new Set([
        ...v.map((W) => W.id),
        ...s.map((W) => W.id),
        ...f.map((W) => W.id),
      ]);
      u((W) => {
        let Ce = !1;
        const Se = [];
        for (const q of W)
          if (!q.isGroup)
            q.memberIds.every((ke) => be.has(ke)) ? Se.push(q) : (Ce = !0);
          else {
            const ke = q.memberIds.filter((Le) => be.has(Le));
            ke.length < q.memberIds.length
              ? (Se.push({ ...q, memberIds: ke }), (Ce = !0))
              : Se.push(q);
          }
        return (
          Ce && console.warn("[orphan cleanup] cleaned orphaned members/chats"),
          Ce ? Se : W
        );
      });
    }, [n, v, s, f]),
      P.useEffect(() => {
        if (n) return;
        const { url: be, key: W } = Po();
        if (!be || !W) return;
        let Ce = !1,
          Se = !1;
        const q = async () => {
          if (!(Ce || Se) && !Ka.current && !Wa) {
            Se = !0;
            try {
              const Le = await ls();
              !Ce && Le === "newer" && Ha(!0);
            } catch {
            } finally {
              Se = !1;
            }
          }
        };
        q();
        const ke = () => {
          document.visibilityState === "visible" && q();
        };
        return (
          document.addEventListener("visibilitychange", ke),
          () => {
            (Ce = !0), document.removeEventListener("visibilitychange", ke);
          }
        );
      }, [n, Wa]);
    const nc = P.useCallback(() => {
        (Ka.current = !0), Ha(!1);
      }, []),
      rc = P.useCallback(() => {
        (Ka.current = !0), Ha(!1), ci(!0), t("settings");
      }, []),
      ac = P.useCallback(() => {
        ci(!1);
      }, []);
    P.useEffect(() => {
      if (n) return;
      const be = () => {
          document.visibilityState === "hidden" && Ct(Date.now());
        },
        W = () => {
          Ct(Date.now());
        };
      return (
        document.addEventListener("visibilitychange", be),
        window.addEventListener("pagehide", W),
        () => {
          document.removeEventListener("visibilitychange", be),
            window.removeEventListener("pagehide", W);
        }
      );
    }, [n]);
    const ui = P.useRef({});
    P.useEffect(() => {
      if (n || !c) return;
      const be = Date.now(),
        W = 1800 * 1e3,
        Se = (ee[c] || []).filter((q) => {
          const ke = `${c}:${q}`;
          return St[ke] === !0;
        });
      Se.length !== 0 &&
        ot(
          () => import("./gemini-CeriFUnH.js").then((q) => q.k),
          __vite__mapDeps([0, 1, 2, 3, 4])
        ).then(async ({ generateOfflineMessages: q }) => {
          var Le;
          const ke = new Set();
          try {
            const ie = await ns(`chat_activeDateModeSession_v1:${c}`, null);
            if (
              (Le = ie == null ? void 0 : ie.session) != null &&
              Le.participants
            )
              for (const He of ie.session.participants)
                He.entityType === "character" &&
                  typeof He.entityId == "string" &&
                  ke.add(He.entityId);
          } catch {}
          for (const ie of Se) {
            if ((ha && ha.charId === ie) || ke.has(ie)) continue;
            const He = o.filter(
              (ne) => ne.memberIds.includes(c) && ne.memberIds.includes(ie)
            );
            if (He.length === 0) continue;
            const et = new Set(He.map((ne) => ne.id));
            let nt = 0;
            for (const ne of T)
              ne.senderId === ie &&
                et.has(ne.chatId) &&
                ne.timestamp > nt &&
                (nt = ne.timestamp);
            if (!nt || be - nt < W) continue;
            const An = `${c}:${ie}`,
              Fr = Qn[An] || 0,
              zt = Math.max(nt, Fr);
            if (be - zt < W) continue;
            const fn = v.find((ne) => ne.id === ie);
            if (!fn) continue;
            const At = o.find(
              (ne) =>
                !ne.isGroup &&
                ne.memberIds.includes(c) &&
                ne.memberIds.includes(ie)
            );
            if (!At || At.blockStatus === "char_blocked_user") continue;
            const di = At.blockStatus === "user_blocked_char",
              fi = `${nt}:${Fr}`;
            if (ui.current[An] === fi) continue;
            ui.current[An] = fi;
            const sc = f.find((ne) => ne.id === c) || f[0],
              cc = At.contextLength || 150,
              lc = ps(At),
              uc = cu(At),
              dc = T.filter(
                (ne) =>
                  ne.chatId === At.id &&
                  ne.timestamp > At.lastRecapTimestamp &&
                  ne.perceivers.includes(c)
              )
                .slice(-cc)
                .map((ne) => ({
                  ...ne,
                  senderName: Ft.resolveMessageSenderName(ne.senderId, v, f),
                  isRecalled: ne.isRecalled,
                  recalledAt: ne.recalledAt,
                })),
              ma = At.lastRecapTimestamp || 0,
              fc = new Set(gn[At.id] || []),
              Ga = new Set(),
              hc = Nt.map((ne) => ne.id),
              pc = new Map(ht.map((ne) => [ne.id, ne])),
              mc = [...ht]
                .filter((ne) => {
                  if (ne.createdAt <= ma) return !1;
                  const qe =
                    ne.authorizedReaderIds && ne.authorizedReaderIds.length > 0
                      ? ne.authorizedReaderIds
                      : va(ce, ne.authorId, fe);
                  return !(!qe.includes(c) || !qe.includes(ie));
                })
                .map((ne) => {
                  const qe =
                    ne.authorType === "user"
                      ? f.find((ct) => ct.id === ne.authorId)
                      : v.find((ct) => ct.id === ne.authorId);
                  if (!qe) return null;
                  const Ve =
                      ne.authorizedReaderIds &&
                      ne.authorizedReaderIds.length > 0
                        ? ne.authorizedReaderIds
                        : va(ce, ne.authorId, fe),
                    Tt = Ve.includes(ie) ? [ie] : [];
                  return {
                    id: ne.id,
                    chatId: `moment:${ne.authorId}`,
                    senderId: ne.authorId,
                    senderName: qe.name,
                    text: ne.content,
                    timestamp: ne.createdAt,
                    _isLocal: !1,
                    _sourceName: "朋友圈",
                    _authorizedReaderIds: Ve,
                    _perceivers: Tt,
                    _momentImageDescription: ne.imageDescription,
                    _momentHasImage: !!ne.imageContent,
                    _momentImageTagIds: ne.imageTagIds,
                  };
                })
                .filter(Boolean),
              gc = [...Nt]
                .flatMap((ne) => {
                  if (ne.createdAt <= ma) return [];
                  const qe = pc.get(ne.momentId);
                  if (!qe) return [];
                  const Ve =
                    qe.authorizedReaderIds && qe.authorizedReaderIds.length > 0
                      ? qe.authorizedReaderIds
                      : va(ce, qe.authorId, fe);
                  if (!Ve.includes(c) || !Ve.includes(ie)) return [];
                  const Tt =
                    ne.authorType === "user"
                      ? f.find((wt) => wt.id === ne.authorId)
                      : ne.authorType === "npc"
                      ? s.find((wt) => wt.id === ne.authorId)
                      : v.find((wt) => wt.id === ne.authorId);
                  if (!Tt) return [];
                  const ct =
                    qe.authorType === "user"
                      ? f.find((wt) => wt.id === qe.authorId)
                      : v.find((wt) => wt.id === qe.authorId);
                  if (!ct) return [];
                  const lt = ne.parentCommentId
                      ? Nt.find((wt) => wt.id === ne.parentCommentId)
                      : null,
                    Rt = lt
                      ? lt.authorType === "user"
                        ? f.find((wt) => wt.id === lt.authorId)
                        : lt.authorType === "npc"
                        ? s.find((wt) => wt.id === lt.authorId)
                        : v.find((wt) => wt.id === lt.authorId)
                      : null,
                    hn = [ie],
                    bn = [];
                  return (
                    qe.createdAt <= ma &&
                      !fc.has(ne.id) &&
                      (Ga.add(ne.id),
                      bn.push({
                        id: `moment_backfill_${ne.id}`,
                        chatId: `moment_backfill:${ne.momentId}`,
                        senderId: qe.authorId,
                        senderName: ct.name,
                        text: qe.content,
                        timestamp: Math.max(ne.createdAt - 1, ma + 1),
                        _isLocal: !1,
                        _sourceName: "朋友圈补充正文",
                        _authorizedReaderIds: Ve,
                        _perceivers: hn,
                        _momentPostAuthorName: ct.name,
                        _momentLinkedCommentId: ne.id,
                      })),
                    bn.push({
                      id: ne.id,
                      chatId: `moment_comment:${ne.momentId}`,
                      senderId: ne.authorId,
                      senderName: Tt.name,
                      text: ne.content,
                      timestamp: ne.createdAt,
                      _isLocal: !1,
                      _sourceName: "朋友圈评论",
                      _authorizedReaderIds: Ve,
                      _perceivers: hn,
                      _momentPostAuthorName: ct.name,
                      _momentReplyTargetName: Rt == null ? void 0 : Rt.name,
                      _momentCommentIsReply: !!ne.parentCommentId,
                    }),
                    bn
                  );
                })
                .filter(Boolean);
            Ga.size > 0 &&
              Xt((ne) =>
                Ft.mergeConsumedMomentCommentBackfills(
                  ne,
                  At.id,
                  Array.from(Ga),
                  hc
                )
              );
            const Ur = {};
            Ft.getRecentMessagesWithinThresholds(
              T.filter(
                (ne) =>
                  ne.perceivers.includes(ie) &&
                  ne.chatId !== At.id &&
                  ne.subType !== "ooc" &&
                  ne.subType !== "date_ooc"
              ),
              { countThreshold: lc, tokenThreshold: uc }
            ).forEach((ne) => {
              var qe;
              if (Ur[ne.id])
                Ur[ne.id]._perceivers.includes(ie) ||
                  Ur[ne.id]._perceivers.push(ie);
              else {
                const Ve = o.find((Rt) => Rt.id === ne.chatId);
                let Tt = (Ve == null ? void 0 : Ve.name) || "其他聊天";
                if (Ve && !Ve.isGroup) {
                  const Rt = Ve.memberIds.find((bn) => bn !== c),
                    hn = v.find((bn) => bn.id === Rt);
                  Tt = `与 ${(hn == null ? void 0 : hn.name) || "未知"} 的私聊`;
                }
                const ct =
                    Ve == null
                      ? void 0
                      : Ve.memberIds.find((Rt) => f.some((hn) => hn.id === Rt)),
                  lt =
                    ((qe = f.find((Rt) => Rt.id === ct)) == null
                      ? void 0
                      : qe.name) || "Unknown";
                Ur[ne.id] = {
                  ...ne,
                  senderName: Ft.resolveMessageSenderName(ne.senderId, v, f),
                  _isLocal: !1,
                  _sourceName: Tt,
                  _perceivers: [ie],
                  _contextUser: lt,
                };
              }
            });
            let $r = [...dc, ...mc, ...gc, ...Object.values(Ur)].sort(
              (ne, qe) => ne.timestamp - qe.timestamp
            );
            const yc = 8e4;
            let hi = 0,
              Ya = 0;
            for (let ne = $r.length - 1; ne >= 0; ne -= 1)
              if (((hi += $r[ne].text.length + 50), hi > yc)) {
                Ya = ne + 1;
                break;
              }
            Ya > 0 && ($r = $r.slice(Ya));
            const vc = Hi(Ji(fn.timezone)),
              Va = ia.find(
                (ne) =>
                  ne.entityType === "character" &&
                  ne.entityId === ie &&
                  ne.dateKey === vc
              ),
              wc = Va
                ? `<${fn.name} / ${Va.dateKey}>
${Yi(Va).map((ne) => {
  var Tt;
  const qe =
      (ne.placeId &&
        ((Tt = Fn.find((ct) => ct.id === ne.placeId)) == null
          ? void 0
          : Tt.name)) ||
      "未指定地点",
    Ve = ne.placeSelectionReason ? `；原因：${ne.placeSelectionReason}` : "";
  return `- ${vi(ne.startMinute)}-${vi(ne.endMinute)} ${ne.title} @ ${qe}${Ve}`;
}).join(`
`)}
</${fn.name}>`
                : "",
              _c = _.filter((ne) => ne.perceivers.includes(ie)).slice(-20),
              xc = fe.filter(
                (ne) =>
                  (ne.fromEntityId === c && ne.toEntityId === ie) ||
                  (ne.fromEntityId === ie && ne.toEntityId === c)
              ),
              ga = await nu(c, ie);
            Fa((ne) => ({ ...ne, [An]: !0 }));
            const bc = Fe ? Re.find((ne) => ne.id === Fe) : void 0,
              kc = di
                ? (() => {
                    const ne = T.filter(
                        (Ve) =>
                          Ve.chatId === At.id &&
                          Ve.unblockRequest &&
                          Ve.unblockRequestStatus === "rejected" &&
                          Ve.blockedDirection === "user_to_char"
                      ).length,
                      qe = At.blockTimestamp ? be - At.blockTimestamp : 0;
                    return { rejectedCount: ne, timeSinceBlock: qe };
                  })()
                : void 0;
            q({
              user: sc,
              character: fn,
              offlineStart: zt,
              offlineEnd: be,
              recentMessages: $r,
              todayPlanContext: wc,
              knowledge: _c,
              socialRelations: xc,
              preset: bc,
              chatRulesText: "",
              emojiCategories: tt,
              characterBilingualConfig: ga || void 0,
              blockRequestContext: kc,
            })
              .then((ne) => {
                if (ne.length > 0) {
                  const qe = [];
                  for (const Ve of ne)
                    for (let Tt = 0; Tt < Ve.messages.length; Tt++) {
                      const ct = Ve.messages[Tt],
                        lt = ct.text.match(
                          /^\[\[SEND_?PHOTO:\s*([\s\S]+?)\s*\]{1,2}$/i
                        ),
                        Rt = !!lt,
                        hn = Rt ? lt[1].trim() : ct.text,
                        bn =
                          Rt && ct.translation
                            ? ct.translation
                                .replace(/^\[\[SEND_?PHOTO:\s*/i, "")
                                .replace(/\s*\]{1,2}$/, "")
                                .trim()
                            : ct.translation,
                        wt =
                          ga && bn
                            ? {
                                languageCode: ga.languageCode,
                                languageLabel: ga.languageLabel,
                                originalText: Rt ? hn : ct.text,
                                translation: bn,
                              }
                            : void 0;
                      qe.push({
                        id: `offline-${ie}-${
                          Ve.anchorTimestamp
                        }-${Tt}-${Math.random().toString(36).slice(2, 8)}`,
                        chatId: At.id,
                        senderId: ie,
                        text: hn,
                        perceivers: [
                          c,
                          ...At.memberIds.filter(
                            (Sc) => !f.some((Tc) => Tc.id === Sc)
                          ),
                        ],
                        timestamp: Ve.anchorTimestamp + Tt,
                        ...(Rt ? { type: "photo" } : {}),
                        metadata: wt
                          ? {
                              senderName: fn.name,
                              time: Ve.anchorTimestamp + Tt,
                              sourceName: At.name,
                              bilingual: wt,
                            }
                          : void 0,
                        ...(di
                          ? {
                              blockedDirection: "user_to_char",
                              unblockRequest: ct.text,
                              unblockRequestStatus: "pending",
                            }
                          : {}),
                      });
                    }
                  I((Ve) => {
                    const Tt = new Set(
                        Ve.map(
                          (lt) =>
                            `${lt.chatId}|${lt.senderId}|${lt.timestamp}|${lt.text}`
                        )
                      ),
                      ct = qe.filter(
                        (lt) =>
                          !Tt.has(
                            `${lt.chatId}|${lt.senderId}|${lt.timestamp}|${lt.text}`
                          )
                      );
                    return ct.length === 0
                      ? Ve
                      : [...Ve, ...ct].sort(
                          (lt, Rt) => lt.timestamp - Rt.timestamp
                        );
                  });
                }
                zr((qe) => ({ ...qe, [An]: be }));
              })
              .catch((ne) => {
                console.error(`[Offline] Failed to generate for ${ie}:`, ne),
                  en({ title: "离线消息生成失败", detail: ll(ne) });
              })
              .finally(() => {
                Fa((ne) => ({ ...ne, [An]: !1 }));
              });
          }
        });
    }, [ha, Fe, c, Re, v, o, tt, n, _, T, Nt, ht, St, Qn, fe, ee, f]),
      P.useEffect(() => {
        if (n) return;
        const be = new Map(Sr.map((ie) => [ie.id, ie])),
          W = Zn.map((ie) => {
            const He = be.get(ie.id);
            return He
              ? {
                  ...ie,
                  name: He.name,
                  previewImage: ie.previewImage || He.previewImage,
                  description: ie.description || He.description,
                  previewGradient: ie.previewGradient || He.previewGradient,
                }
              : ie;
          }),
          Ce = Sr.filter((ie) => !W.some((He) => He.id === ie.id)),
          Se = [...W, ...Ce];
        (Se.length !== Zn.length ||
          Se.some((ie, He) => {
            const et = Zn[He];
            return (
              !et ||
              et.name !== ie.name ||
              et.previewImage !== ie.previewImage ||
              et.description !== ie.description ||
              et.previewGradient !== ie.previewGradient
            );
          })) &&
          Et(Se);
        const ke = wr.map((ie) => {
          if (
            ie.id === "map-default-city" &&
            (ie.name === "回响都市" ||
              ie.name === "回响地图" ||
              ie.themeId === "modern-city")
          )
            return {
              ...ie,
              name: "回响",
              kind: "virtual",
              summary: "默认存在的回响城市，作为系统最初启用的虚拟城市地图。",
              referenceCityName: "回响核心层",
              themeId: "dreamspace",
              backgroundImage:
                ie.backgroundImage && ie.backgroundImage.includes("postimg.cc")
                  ? void 0
                  : ie.backgroundImage,
            };
          const He = be.get(ie.themeId);
          return ie.backgroundImage || !(He != null && He.previewImage)
            ? ie
            : { ...ie, backgroundImage: He.previewImage };
        });
        ke.some((ie, He) => {
          const et = wr[He];
          return (
            !et ||
            ie.backgroundImage !== et.backgroundImage ||
            ie.name !== et.name ||
            ie.themeId !== et.themeId ||
            ie.summary !== et.summary ||
            ie.referenceCityName !== et.referenceCityName ||
            ie.kind !== et.kind
          );
        }) && _r(ke);
      }, [n, Zn, Et, _r, wr]),
      P.useEffect(() => {
        if (n) return;
        const be = new Map(Za.map((q) => [q.id, q])),
          Ce = Fn.map((q) => {
            const ke = be.get(q.id);
            if (!ke) return q;
            const Le = q.positionX === void 0 || q.positionY === void 0,
              ie =
                (q.id === "place-hub" &&
                  q.positionX === 52 &&
                  q.positionY === 38) ||
                (q.id === "place-office" &&
                  q.positionX === 66 &&
                  q.positionY === 28) ||
                (q.id === "place-residence" &&
                  q.positionX === 30 &&
                  q.positionY === 68) ||
                (q.id === "place-bistro" &&
                  q.positionX === 46 &&
                  q.positionY === 56);
            return Le || ie
              ? { ...q, positionX: ke.positionX, positionY: ke.positionY }
              : q;
          });
        (Ce.length !== Fn.length ||
          Ce.some((q, ke) => {
            const Le = Fn[ke];
            return (
              !Le ||
              q.positionX !== Le.positionX ||
              q.positionY !== Le.positionY ||
              q.name !== Le.name ||
              q.mapId !== Le.mapId
            );
          })) &&
          Dr(Ce);
      }, [n, Fn, Dr]),
      P.useEffect(() => {
        if (n) return;
        const be = Jn.map((Ce) => iu(Ce));
        (be.length !== Jn.length ||
          be.some((Ce, Se) => {
            const q = Jn[Se];
            return (
              !q ||
              Ce.homePlaceId !== q.homePlaceId ||
              Ce.workPlaceIds[0] !== q.workPlaceIds[0] ||
              Ce.favoritePlaceIds[0] !== q.favoritePlaceIds[0] ||
              JSON.stringify(Ce.placeAnchors || []) !==
                JSON.stringify(q.placeAnchors || [])
            );
          })) &&
          xr(be);
      }, [Jn, n, xr]),
      P.useEffect(() => {
        if (n || !c) return;
        const be = qo.filter((W) => !W.userId);
        be.length > 0 &&
          (Ua((W) => W.map((Ce) => (Ce.userId ? Ce : { ...Ce, userId: c }))),
          console.log(
            `Migrated ${be.length} legacy FloatingLife session(s) to user ${c}`
          ));
      }, [n]),
      P.useEffect(() => {
        if (n) return;
        if (De.filter((W) => !W.subCategoryId).length > 0) {
          const W = [...De],
            Ce = [...It],
            Se = ["rule", "patch", "lore", "keyword", "html"];
          let q = !1;
          Se.forEach((ke) => {
            const Le = W.filter(
              (ie) => ie.categoryId === ke && !ie.subCategoryId
            );
            if (Le.length > 0) {
              let ie = Ce.find(
                (He) => He.categoryId === ke && He.name === "默认分类"
              );
              ie ||
                ((ie = {
                  id: `sub_default_${ke}_${Date.now()}_${Math.random()
                    .toString(36)
                    .substring(2, 8)}`,
                  categoryId: ke,
                  name: "默认分类",
                }),
                Ce.push(ie)),
                Le.forEach((He) => {
                  He.subCategoryId = ie.id;
                }),
                (q = !0);
            }
          }),
            q &&
              (bt(Ce),
              at(W),
              console.log(
                "Migrated legacy worldBook entries into default subcategories"
              ));
        }
      }, [n]),
      P.useEffect(() => {
        if (
          n ||
          !De.some(
            (Se) =>
              Se.scopes === void 0 &&
              (Se.injectIntoSummary !== void 0 ||
                Se.injectIntoSchedule !== void 0 ||
                Se.categoryId === "rule")
          )
        )
          return;
        const W = De.map((Se) => {
          if (Se.scopes !== void 0) return Se;
          if (Se.categoryId !== "rule") return { ...Se, scopes: [] };
          const q = [];
          Se.injectIntoSummary && q.push("summary"),
            Se.injectIntoSchedule && q.push("schedule_free");
          const { injectIntoSummary: ke, injectIntoSchedule: Le, ...ie } = Se;
          return { ...ie, scopes: q };
        });
        W.some(
          (Se, q) =>
            Se !== De[q] ||
            Se.injectIntoSummary !== void 0 ||
            Se.injectIntoSchedule !== void 0
        ) &&
          (at(W),
          console.log("Migrated legacy worldBook injectInto* flags to scopes"));
      }, [n, De.length]),
      P.useEffect(() => {
        if (n) return;
        const be = il({
            userContacts: ee,
            characterContacts: ce,
            validUsers: f.map((Se) => Se.id),
            validCharacters: v.map((Se) => Se.id),
            validNpcs: s.map((Se) => Se.id),
            existingRelations: fe,
          }),
          W = JSON.stringify(fe),
          Ce = JSON.stringify(be);
        W !== Ce && he(be);
      }, [ce, v, n, s, he, fe, ee, f]),
      P.useEffect(() => {
        if (n) return;
        const be = new Set(f.map((q) => q.id)),
          W = new Set(v.map((q) => q.id)),
          Ce = new Set(s.map((q) => q.id)),
          Se = fe.filter((q) => {
            const ke =
                q.fromEntityType === "user"
                  ? be.has(q.fromEntityId)
                  : q.fromEntityType === "character"
                  ? W.has(q.fromEntityId)
                  : Ce.has(q.fromEntityId),
              Le =
                q.toEntityType === "user"
                  ? be.has(q.toEntityId)
                  : q.toEntityType === "character"
                  ? W.has(q.toEntityId)
                  : Ce.has(q.toEntityId);
            return !(
              !ke ||
              !Le ||
              (q.fromEntityType === "user" &&
                q.toEntityType === "character" &&
                !(ee[q.fromEntityId] || []).includes(q.toEntityId)) ||
              (q.fromEntityType === "character" &&
                q.toEntityType === "user" &&
                !(ee[q.toEntityId] || []).includes(q.fromEntityId))
            );
          });
        JSON.stringify(Se) !== JSON.stringify(fe) && he(Se);
      }, [v, n, s, he, fe, ee, f]),
      P.useEffect(() => {
        if (n) return;
        const be = new Set([
            ...f.map((ke) => ke.id),
            ...v.map((ke) => ke.id),
            ...s.map((ke) => ke.id),
          ]),
          W = fe.filter((ke) =>
            (ke.fromEntityType === "character" &&
              ke.toEntityType === "character") ||
            (ke.fromEntityType === "character" && ke.toEntityType === "npc") ||
            (ke.fromEntityType === "npc" && ke.toEntityType === "character")
              ? !0
              : ke.fromEntityType === "user" && ke.toEntityType === "character"
              ? (ee[ke.fromEntityId] || []).includes(ke.toEntityId)
              : ke.fromEntityType === "character" && ke.toEntityType === "user"
              ? (ee[ke.toEntityId] || []).includes(ke.fromEntityId)
              : !1
          ),
          Ce = Object.fromEntries(
            Object.entries(ol(W)).map(([ke, Le]) => [
              ke,
              Hn(Le.filter((ie) => be.has(ie))),
            ])
          ),
          Se = JSON.stringify(
            Object.fromEntries(
              Object.entries(ce).map(([ke, Le]) => [ke, Hn(Le)])
            )
          ),
          q = JSON.stringify(Ce);
        Se !== q && B(Ce);
      }, [ce, v, n, s, B, fe, ee, f]),
      P.useEffect(() => {
        if (n) return;
        const be = ht.map((Ce) => {
          const Se = va(ce, Ce.authorId, fe),
            q = Ce.authorizedReaderIds || [];
          return JSON.stringify(q) === JSON.stringify(Se)
            ? Ce
            : { ...Ce, authorizedReaderIds: Se };
        });
        be.some((Ce, Se) => Ce !== ht[Se]) && jt(be);
      }, [ce, n, ht, jt]),
      P.useEffect(() => {
        if (n) return;
        const be = new Set(ht.map((ie) => ie.id)),
          W = new Set([
            ...f.map((ie) => ie.id),
            ...v.map((ie) => ie.id),
            ...s.map((ie) => ie.id),
          ]),
          Ce = new Set(Nt.map((ie) => ie.id)),
          Se = new Set(v.map((ie) => ie.id)),
          q = new Set(s.map((ie) => ie.id)),
          ke = Nt.filter(
            (ie) =>
              !(
                !be.has(ie.momentId) ||
                !W.has(ie.authorId) ||
                (ie.parentCommentId && !Ce.has(ie.parentCommentId))
              )
          ).map((ie) => {
            if (ie.authorType === "user") return ie;
            const He =
              q.has(ie.authorId) && !Se.has(ie.authorId) ? "npc" : "character";
            return ie.authorType === He ? ie : { ...ie, authorType: He };
          });
        (ke.length !== Nt.length || ke.some((ie, He) => ie !== Nt[He])) &&
          Pt(ke);
      }, [v, n, Nt, ht, s, Pt, f]);
    const oc = (be) => {
        I((W) =>
          W.filter((Ce) => Ce.chatId !== be || !Ce.perceivers.includes(c))
        );
      },
      ic = async (be, W) => {
        let Ce = [];
        I(
          (Se) => (
            (Ce = Se.map((q) =>
              q.id === be
                ? {
                    ...q,
                    isRecalled: !0,
                    recalledAt: Date.now(),
                    recalledBy: W,
                  }
                : q
            )),
            hs("world_messages", Ce),
            Ce
          )
        );
      };
    return g.jsx(ms.Provider, {
      value: {
        isInitializing: n,
        initError: l,
        currentApp: r,
        setCurrentApp: t,
        homeDesktopPage: a,
        setHomeDesktopPage: i,
        characters: v,
        setCharacters: x,
        npcs: s,
        setNpcs: b,
        users: f,
        setUsers: S,
        activeUserId: c,
        setActiveUserId: h,
        chats: o,
        setChats: u,
        knowledge: _,
        setKnowledge: y,
        messages: T,
        setMessages: I,
        characterStates: M,
        setCharacterStates: O,
        activeChatId: k,
        setActiveChatId: V,
        savedMessages: U,
        setSavedMessages: J,
        savedFolders: C,
        setSavedFolders: D,
        apiPresets: Re,
        setApiPresets: Oe,
        activePresetId: Fe,
        setActivePresetId: $e,
        summaryApiPreset: it,
        setSummaryApiPreset: ye,
        imageGenerationSettings: m,
        setImageGenerationSettings: X,
        secondaryApiFeatures: G,
        setSecondaryApiFeatures: N,
        indexBuildProgress: R,
        setIndexBuildProgress: z,
        indexBuildAbortRef: re,
        minimaxApiKey: ue,
        setMinimaxApiKey: _e,
        minimaxGroupId: de,
        setMinimaxGroupId: xe,
        minimaxModel: Be,
        setMinimaxModel: Ne,
        minimaxVoiceEmotionEnabled: Je,
        setMinimaxVoiceEmotionEnabled: gt,
        emojiCategories: tt,
        setEmojiCategories: ft,
        currentUser: tc,
        clearChat: oc,
        recallMessage: ic,
        userContacts: ee,
        setUserContacts: Z,
        contactRemarkNames: ve,
        setContactRemarkNames: Q,
        characterContacts: ce,
        setCharacterContacts: B,
        pinnedContacts: H,
        setPinnedContacts: Ee,
        socialRelations: fe,
        setSocialRelations: he,
        npcSharedEmojiCategoryIds: Te,
        setNpcSharedEmojiCategoryIds: Pe,
        memoryCharLimit: Kn,
        setMemoryCharLimit: Gn,
        homeBackground: sr,
        setHomeBackground: cr,
        momentsBackground: lr,
        setMomentsBackground: ur,
        appIconOverrides: dr,
        setAppIconOverrides: jn,
        homeIconColor: In,
        setHomeIconColor: yn,
        homeTextColor: Nn,
        setHomeTextColor: Pn,
        chatBackgrounds: fr,
        setChatBackgrounds: En,
        dateBackgrounds: hr,
        setDateBackgrounds: Mn,
        worldBooks: De,
        setWorldBooks: at,
        worldBookSubcategories: It,
        setWorldBookSubcategories: bt,
        momentPosts: ht,
        setMomentPosts: jt,
        momentComments: Nt,
        setMomentComments: Pt,
        momentCommentBackfillConsumedByChat: gn,
        setMomentCommentBackfillConsumedByChat: Xt,
        profilingRecords: Zt,
        setProfilingRecords: ir,
        lastUsage: On,
        setLastUsage: pr,
        customWorldYear: Dn,
        setCustomWorldYear: mr,
        enableChatToast: Yn,
        setEnableChatToast: Ln,
        enableKeepAlive: nn,
        setEnableKeepAlive: Dt,
        enableBgNotification: rn,
        setEnableBgNotification: vn,
        enableFakeStatusBar: Jt,
        setEnableFakeStatusBar: Bn,
        fakeStatusBarBlank: yt,
        setFakeStatusBarBlank: wn,
        enableFloatingHomeButton: Lt,
        setEnableFloatingHomeButton: Kt,
        floatingHomeButtonPosition: ln,
        setFloatingHomeButtonPosition: gr,
        v2BgImage: qt,
        setV2BgImage: Gt,
        v2Avatar: _n,
        setV2Avatar: E,
        v2Username: L,
        setV2Username: j,
        v2Signature: $,
        setV2Signature: K,
        v2Location: F,
        setV2Location: oe,
        widgetImg1: le,
        setWidgetImg1: pe,
        widgetText1a: ge,
        setWidgetText1a: we,
        widgetText1b: Ae,
        setWidgetText1b: Me,
        widgetImg2: We,
        setWidgetImg2: Ye,
        widgetText2a: rt,
        setWidgetText2a: Qe,
        widgetText2b: Bt,
        setWidgetText2b: vt,
        widgetTitle: Vn,
        setWidgetTitle: Xn,
        widget2Title: zn,
        setWidget2Title: Ue,
        widget2Text1: Ar,
        setWidget2Text1: yr,
        widget2Text2: vr,
        setWidget2Text2: Jr,
        widget2Text3: qr,
        setWidget2Text3: Qr,
        widget2Text4: Na,
        setWidget2Text4: ea,
        p2TopText1: Pa,
        setP2TopText1: Rr,
        p2TopText2: jr,
        setP2TopText2: Nr,
        p2TopText3: ta,
        setP2TopText3: na,
        p2TopText4: Ma,
        setP2TopText4: Pr,
        p2TopAvatar: ra,
        setP2TopAvatar: Mr,
        p2TopPhoto1: aa,
        setP2TopPhoto1: Or,
        p2TopPhoto2: st,
        setP2TopPhoto2: Mt,
        p2BtmAvatar1: Yt,
        setP2BtmAvatar1: Cn,
        p2BtmAvatar2: ze,
        setP2BtmAvatar2: kt,
        page2TopWidgetImage: Qt,
        setPage2TopWidgetImage: oa,
        page2BottomWidgetImage: xn,
        setPage2BottomWidgetImage: un,
        mapThemes: Zn,
        setMapThemes: Et,
        worldMaps: wr,
        setWorldMaps: _r,
        places: Fn,
        setPlaces: Dr,
        entityMapBindings: Jn,
        setEntityMapBindings: xr,
        dailyPlans: ia,
        setDailyPlans: sa,
        dailyPlanGeneratingKeys: Oa,
        runWithDailyPlanGenerationLock: ec,
        worldToneSettings: Da,
        setWorldToneSettings: qn,
        worldCalendarEvents: br,
        setWorldCalendarEvents: $t,
        userAnchors: dn,
        setUserAnchors: la,
        reflectionFragments: La,
        setReflectionFragments: kr,
        characterDiaryEntries: Ba,
        setCharacterDiaryEntries: ua,
        userDiaryEntries: za,
        setUserDiaryEntries: da,
        userDiaryAnnotations: fa,
        setUserDiaryAnnotations: Br,
        forumSections: A,
        setForumSections: te,
        forumPosts: me,
        setForumPosts: Ie,
        forumComments: je,
        setForumComments: Ze,
        offlineMessageApiError: pt,
        setOfflineMessageApiError: en,
        offlineLastActiveAt: tn,
        setOfflineLastActiveAt: Ct,
        offlineMessageEnabledByPair: St,
        setOfflineMessageEnabledByPair: Wt,
        offlineMessageSyncedUntilByPair: Qn,
        setOfflineMessageSyncedUntilByPair: zr,
        offlineMessageLoadingByPair: Es,
        setOfflineMessageLoadingByPair: Fa,
        activeCall: ha,
        setActiveCall: Cs,
        activeOverlapMusicSession: As,
        setActiveOverlapMusicSession: Rs,
        activeReadingSession: js,
        setActiveReadingSession: Ns,
        pendingOverlapSceneJump: Ps,
        setPendingOverlapSceneJump: Ms,
        inOverlapScene: Os,
        setInOverlapScene: Ds,
        characterFinancials: Ls,
        setCharacterFinancials: Ko,
        userWallets: Bs,
        setUserWallets: Go,
        transactions: zs,
        setTransactions: Yo,
        wardrobeItems: Fs,
        setWardrobeItems: Vo,
        unlockedFurniturePackIds: Us,
        setUnlockedFurniturePackIds: Xo,
        customShopItems: $s,
        setCustomShopItems: Zo,
        customCategories: Ws,
        setCustomCategories: Jo,
        floatingLifeSessions: qo,
        setFloatingLifeSessions: Ua,
        customChatCSS: Hs,
        setCustomChatCSS: Qo,
        customGlobalCSS: Ks,
        setCustomGlobalCSS: ei,
        cssPresets: Gs,
        setCssPresets: ti,
        customFonts: Ys,
        setCustomFonts: ni,
        networkFonts: Vs,
        setNetworkFonts: ri,
        activeFontFamily: Xs,
        setActiveFontFamily: ai,
        globalFontScale: Zs,
        setGlobalFontScale: oi,
        characterPetImages: Js,
        setCharacterPetImages: ii,
        activePetCharIds: qs,
        setActivePetCharIds: si,
        petDialogues: $a,
        setPetDialogues: pa,
        cloudUpdateAvailable: Wa,
        dismissCloudUpdateBanner: nc,
        pendingCloudRestoreRequested: Qs,
        requestCloudRestore: rc,
        clearPendingCloudRestore: ac,
      },
      children: e,
    });
  },
  or = () => {
    const e = P.useContext(ms);
    if (!e) throw new Error("useOS must be used within an OSProvider");
    return e;
  };
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lu = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  uu = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, t, a) =>
      a ? a.toUpperCase() : t.toLowerCase()
    ),
  Ci = (e) => {
    const r = uu(e);
    return r.charAt(0).toUpperCase() + r.slice(1);
  },
  gs = (...e) =>
    e
      .filter((r, t, a) => !!r && r.trim() !== "" && a.indexOf(r) === t)
      .join(" ")
      .trim(),
  du = (e) => {
    for (const r in e)
      if (r.startsWith("aria-") || r === "role" || r === "title") return !0;
  };
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var fu = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hu = P.forwardRef(
  (
    {
      color: e = "currentColor",
      size: r = 24,
      strokeWidth: t = 2,
      absoluteStrokeWidth: a,
      className: i = "",
      children: n,
      iconNode: d,
      ...l
    },
    p
  ) =>
    P.createElement(
      "svg",
      {
        ref: p,
        ...fu,
        width: r,
        height: r,
        stroke: e,
        strokeWidth: a ? (Number(t) * 24) / Number(r) : t,
        className: gs("lucide", i),
        ...(!n && !du(l) && { "aria-hidden": "true" }),
        ...l,
      },
      [
        ...d.map(([v, x]) => P.createElement(v, x)),
        ...(Array.isArray(n) ? n : [n]),
      ]
    )
);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ge = (e, r) => {
  const t = P.forwardRef(({ className: a, ...i }, n) =>
    P.createElement(hu, {
      ref: n,
      iconNode: r,
      className: gs(`lucide-${lu(Ci(e))}`, `lucide-${e}`, a),
      ...i,
    })
  );
  return (t.displayName = Ci(e)), t;
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pu = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse",
      },
    ],
  ],
  mu = Ge("activity", pu);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gu = [
    [
      "rect",
      { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" },
    ],
    ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
    ["path", { d: "M10 12h4", key: "a56b0p" }],
  ],
  yu = Ge("archive", gu);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vu = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  wu = Ge("book-open", vu);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _u = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  xu = Ge("calendar", _u);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bu = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  ys = Ge("check", bu);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ku = [
    ["path", { d: "M12 13v8l-4-4", key: "1f5nwf" }],
    ["path", { d: "m12 21 4-4", key: "1lfcce" }],
    [
      "path",
      {
        d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",
        key: "ui1hmy",
      },
    ],
  ],
  Su = Ge("cloud-download", ku);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tu = [
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
    ],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
  ],
  Iu = Ge("credit-card", Tu);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Eu = [
    ["path", { d: "M10.5 3 8 9l4 13 4-13-2.5-6", key: "b3dvk1" }],
    [
      "path",
      {
        d: "M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",
        key: "7w4byz",
      },
    ],
    ["path", { d: "M2 9h20", key: "16fsjt" }],
  ],
  Cu = Ge("gem", Eu);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Au = [
    ["path", { d: "M5 22h14", key: "ehvnwv" }],
    ["path", { d: "M5 2h14", key: "pdyrp9" }],
    [
      "path",
      {
        d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
        key: "1d314k",
      },
    ],
    [
      "path",
      {
        d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",
        key: "1vvvr6",
      },
    ],
  ],
  Ru = Ge("hourglass", Au);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ju = [
    [
      "path",
      { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
    ],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "r6nss1",
      },
    ],
  ],
  vs = Ge("house", ju);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nu = [
    ["path", { d: "M16 5h6", key: "1vod17" }],
    ["path", { d: "M19 2v6", key: "4bpg5p" }],
    [
      "path",
      {
        d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
        key: "1ue2ih",
      },
    ],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ],
  Pu = Ge("image-plus", Nu);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mu = [
    ["path", { d: "M16 5H3", key: "m91uny" }],
    ["path", { d: "M11 12H3", key: "51ecnj" }],
    ["path", { d: "M11 19H3", key: "zflm78" }],
    ["path", { d: "M21 16V5", key: "yxg4q8" }],
    ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
  ],
  Ou = Ge("list-music", Mu);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Du = [
    [
      "path",
      {
        d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",
        key: "11u0oz",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
    [
      "path",
      {
        d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",
        key: "q8zwxj",
      },
    ],
  ],
  Lu = Ge("map-pinned", Du);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bu = [
    [
      "path",
      {
        d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
        key: "18887p",
      },
    ],
  ],
  zu = Ge("message-square", Bu);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fu = [
    ["path", { d: "M18 5h4", key: "1lhgn2" }],
    ["path", { d: "M20 3v4", key: "1olli1" }],
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm",
      },
    ],
  ],
  Uu = Ge("moon-star", Fu);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $u = [
    ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
    ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
  ],
  Gr = Ge("music", $u);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wu = [
    ["path", { d: "M15 18h-5", key: "95g1m2" }],
    ["path", { d: "M18 14h-8", key: "sponae" }],
    [
      "path",
      {
        d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",
        key: "39pd36",
      },
    ],
    [
      "rect",
      { width: "8", height: "4", x: "10", y: "6", rx: "1", key: "aywv1n" },
    ],
  ],
  Hu = Ge("newspaper", Wu);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ku = [
    ["path", { d: "M20.341 6.484A10 10 0 0 1 10.266 21.85", key: "1enhxb" }],
    ["path", { d: "M3.659 17.516A10 10 0 0 1 13.74 2.152", key: "1crzgf" }],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
    ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }],
    ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
  ],
  Gu = Ge("orbit", Ku);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yu = [
    [
      "rect",
      { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" },
    ],
    [
      "rect",
      { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" },
    ],
  ],
  Vu = Ge("pause", Yu);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xu = [
    [
      "path",
      {
        d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
        key: "nt11vn",
      },
    ],
    [
      "path",
      {
        d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
        key: "15qc1e",
      },
    ],
    ["path", { d: "m2.3 2.3 7.286 7.286", key: "1wuzzi" }],
    ["circle", { cx: "11", cy: "11", r: "2", key: "xmgehs" }],
  ],
  Zu = Ge("pen-tool", Xu);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ju = [
    ["path", { d: "M13 21h8", key: "1jsn5i" }],
    ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu",
      },
    ],
  ],
  qu = Ge("pencil-line", Ju);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qu = [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu",
      },
    ],
    ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
  ],
  ed = Ge("pencil", Qu);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const td = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1",
      },
    ],
  ],
  nd = Ge("play", td);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rd = [
    [
      "path",
      {
        d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",
        key: "goz73y",
      },
    ],
    ["path", { d: "m2 22 3-3", key: "19mgm9" }],
    ["path", { d: "M7.5 13.5 10 11", key: "7xgeeb" }],
    ["path", { d: "M10.5 16.5 13 14", key: "10btkg" }],
    ["path", { d: "m18 3-4 4h6l-4 4", key: "16psg9" }],
  ],
  ad = Ge("plug-zap", rd);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const od = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  id = Ge("plus", od);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sd = [
    ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
    ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
    ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
    ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
    ["path", { d: "M11 10h1v4", key: "70cz1p" }],
  ],
  cd = Ge("repeat-1", sd);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ld = [
    ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
    ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
    ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
    ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
  ],
  ud = Ge("repeat", ld);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dd = [
    ["path", { d: "M15 12h-5", key: "r7krc0" }],
    ["path", { d: "M15 8h-5", key: "1khuty" }],
    ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
    [
      "path",
      {
        d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
        key: "1ph1d7",
      },
    ],
  ],
  fd = Ge("scroll-text", dd);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hd = [
    [
      "path",
      {
        d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
        key: "1i5ecw",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  pd = Ge("settings", hd);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const md = [
    ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
    ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
    [
      "path",
      {
        d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",
        key: "1ailkh",
      },
    ],
    ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
    ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }],
  ],
  gd = Ge("shuffle", md);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yd = [
    [
      "path",
      {
        d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",
        key: "15892j",
      },
    ],
    ["path", { d: "M3 20V4", key: "1ptbpl" }],
  ],
  vd = Ge("skip-back", yd);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wd = [
    ["path", { d: "M21 4v16", key: "7j8fe9" }],
    [
      "path",
      {
        d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
        key: "zs4d6",
      },
    ],
  ],
  _d = Ge("skip-forward", wd);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xd = [
    ["path", { d: "M10 5H3", key: "1qgfaw" }],
    ["path", { d: "M12 19H3", key: "yhmn1j" }],
    ["path", { d: "M14 3v4", key: "1sua03" }],
    ["path", { d: "M16 17v4", key: "1q0r14" }],
    ["path", { d: "M21 12h-9", key: "1o4lsq" }],
    ["path", { d: "M21 19h-5", key: "1rlt1p" }],
    ["path", { d: "M21 5h-7", key: "1oszz2" }],
    ["path", { d: "M8 10v4", key: "tgpxqk" }],
    ["path", { d: "M8 12H3", key: "a7s4jb" }],
  ],
  bd = Ge("sliders-horizontal", xd);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kd = [
    ["path", { d: "M21 4H3", key: "1hwok0" }],
    ["path", { d: "M18 8H6", key: "41n648" }],
    ["path", { d: "M19 12H9", key: "1g4lpz" }],
    ["path", { d: "M16 16h-6", key: "1j5d54" }],
    ["path", { d: "M11 20H9", key: "39obr8" }],
  ],
  Sd = Ge("tornado", kd);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Td = [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
  ],
  Id = Ge("trash-2", Td);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ed = [
    [
      "path",
      {
        d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
        key: "knzxuh",
      },
    ],
    [
      "path",
      {
        d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
        key: "2jd2cc",
      },
    ],
    [
      "path",
      {
        d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
        key: "rd2r6e",
      },
    ],
  ],
  Cd = Ge("waves", Ed);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ad = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Ia = Ge("x", Ad),
  Rd = () => {
    const { enableFakeStatusBar: e, fakeStatusBarBlank: r } = or(),
      [t, a] = P.useState(new Date());
    P.useEffect(() => {
      const n = setInterval(() => {
        a(new Date());
      }, 6e4);
      return () => clearInterval(n);
    }, []);
    const i = t.toLocaleTimeString("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: !1,
    });
    return g.jsx("div", {
      className: `echoes-status-bar h-7 w-full ${
        e ? (r ? "block" : "flex") : "hidden"
      } ${
        r
          ? ""
          : "justify-between items-center px-8 text-[11.5px] font-bold text-slate-800 tracking-wider"
      }`,
      children:
        !r &&
        g.jsxs(g.Fragment, {
          children: [
            g.jsx("span", { children: i }),
            g.jsxs("div", {
              className:
                "echoes-status-bar-icons flex gap-2 items-center justify-end w-[72px] mix-blend-multiply opacity-80",
              children: [
                g.jsx("svg", {
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  className: "echoes-status-bar-signal w-[16px] h-[16px]",
                  children: g.jsx("path", {
                    d: "M19 4h3v16h-3V4zm-5 6h3v10h-3V10zm-5 4h3v6H9v-6zm-5 3h3v3H4v-3z",
                  }),
                }),
                g.jsx("svg", {
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  className: "echoes-status-bar-wifi w-[22px] h-[22px]",
                  children: g.jsx("path", {
                    d: "M18 6H4C2.9 6 2 6.9 2 8V16C2 17.1 2.9 18 4 18H18C19.1 18 20 17.1 20 16V8C20 6.9 19.1 6 18 6ZM18 16H4V8H18V16ZM22 10V14H24V10H22ZM6 10H16V14H6V10Z",
                  }),
                }),
              ],
            }),
          ],
        }),
    });
  };
var ba = { exports: {} },
  jd = ba.exports,
  Ai;
function Nd() {
  return (
    Ai ||
      ((Ai = 1),
      (function (e, r) {
        var t = t || {};
        (t.scope = {}),
          (t.ASSUME_ES5 = !1),
          (t.ASSUME_NO_NATIVE_MAP = !1),
          (t.ASSUME_NO_NATIVE_SET = !1),
          (t.defineProperty =
            t.ASSUME_ES5 || typeof Object.defineProperties == "function"
              ? Object.defineProperty
              : function (a, i, n) {
                  a != Array.prototype &&
                    a != Object.prototype &&
                    (a[i] = n.value);
                }),
          (t.getGlobal = function (a) {
            return typeof window < "u" && window === a
              ? a
              : typeof mn < "u" && mn != null
              ? mn
              : a;
          }),
          (t.global = t.getGlobal(jd)),
          (t.polyfill = function (a, i, n, d) {
            if (i) {
              for (
                n = t.global, a = a.split("."), d = 0;
                d < a.length - 1;
                d++
              ) {
                var l = a[d];
                l in n || (n[l] = {}), (n = n[l]);
              }
              (a = a[a.length - 1]),
                (d = n[a]),
                (i = i(d)),
                i != d &&
                  i != null &&
                  t.defineProperty(n, a, {
                    configurable: !0,
                    writable: !0,
                    value: i,
                  });
            }
          }),
          t.polyfill(
            "Object.setPrototypeOf",
            function (a) {
              return (
                a ||
                (typeof "".__proto__ != "object"
                  ? null
                  : function (i, n) {
                      if (((i.__proto__ = n), i.__proto__ !== n))
                        throw new TypeError(i + " is not extensible");
                      return i;
                    })
              );
            },
            "es6",
            "es5"
          ),
          (t.objectCreate =
            t.ASSUME_ES5 || typeof Object.create == "function"
              ? Object.create
              : function (a) {
                  var i = function () {};
                  return (i.prototype = a), new i();
                }),
          (t.construct =
            (typeof Reflect < "u" && Reflect.construct) ||
            function (a, i, n) {
              return (
                n === void 0 && (n = a),
                (n = t.objectCreate(n.prototype || Object.prototype)),
                Function.prototype.apply.call(a, n, i) || n
              );
            }),
          t.polyfill(
            "Reflect.construct",
            function (a) {
              return a || t.construct;
            },
            "es6",
            "es3"
          ),
          (function (a) {
            e.exports = a();
          })(function () {
            return (function () {
              function a(i, n, d) {
                function l(x, s) {
                  if (!n[x]) {
                    if (!i[x]) {
                      var b = typeof cn == "function" && cn;
                      if (!s && b) return b(x, !0);
                      if (p) return p(x, !0);
                      throw (
                        ((s = Error("Cannot find module '" + x + "'")),
                        (s.code = "MODULE_NOT_FOUND"),
                        s)
                      );
                    }
                    (s = n[x] = { exports: {} }),
                      i[x][0].call(
                        s.exports,
                        function (f) {
                          return l(i[x][1][f] || f);
                        },
                        s,
                        s.exports,
                        a,
                        i,
                        n,
                        d
                      );
                  }
                  return n[x].exports;
                }
                for (
                  var p = typeof cn == "function" && cn, v = 0;
                  v < d.length;
                  v++
                )
                  l(d[v]);
                return l;
              }
              return a;
            })()(
              {
                1: [function (a, i, n) {}, {}],
                2: [
                  function (a, i, n) {
                    i.exports = XMLHttpRequest;
                  },
                  {},
                ],
                3: [
                  function (a, i, n) {
                    function d(h) {
                      "@babel/helpers - typeof";
                      return (
                        (d =
                          typeof Symbol == "function" &&
                          typeof Symbol.iterator == "symbol"
                            ? function (o) {
                                return typeof o;
                              }
                            : function (o) {
                                return o &&
                                  typeof Symbol == "function" &&
                                  o.constructor === Symbol &&
                                  o !== Symbol.prototype
                                  ? "symbol"
                                  : typeof o;
                              }),
                        d(h)
                      );
                    }
                    function l(h, o) {
                      for (var u = 0; u < o.length; u++) {
                        var _ = o[u];
                        (_.enumerable = _.enumerable || !1),
                          (_.configurable = !0),
                          "value" in _ && (_.writable = !0),
                          Object.defineProperty(h, _.key, _);
                      }
                    }
                    function p(h, o, u) {
                      return o && l(h.prototype, o), u && l(h, u), h;
                    }
                    function v(h, o) {
                      if (typeof o != "function" && o !== null)
                        throw new TypeError(
                          "Super expression must either be null or a function"
                        );
                      (h.prototype = Object.create(o && o.prototype, {
                        constructor: {
                          value: h,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        o && x(h, o);
                    }
                    function x(h, o) {
                      return (
                        (x =
                          Object.setPrototypeOf ||
                          function (u, _) {
                            return (u.__proto__ = _), u;
                          }),
                        x(h, o)
                      );
                    }
                    function s(h) {
                      var o = f();
                      return function () {
                        var u = S(h);
                        if (o) {
                          var _ = S(this).constructor;
                          u = Reflect.construct(u, arguments, _);
                        } else u = u.apply(this, arguments);
                        return (
                          (u =
                            !u || (d(u) !== "object" && typeof u != "function")
                              ? b(this)
                              : u),
                          u
                        );
                      };
                    }
                    function b(h) {
                      if (h === void 0)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return h;
                    }
                    function f() {
                      if (
                        typeof Reflect > "u" ||
                        !Reflect.construct ||
                        Reflect.construct.sham
                      )
                        return !1;
                      if (typeof Proxy == "function") return !0;
                      try {
                        return (
                          Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                          ),
                          !0
                        );
                      } catch {
                        return !1;
                      }
                    }
                    function S(h) {
                      return (
                        (S = Object.setPrototypeOf
                          ? Object.getPrototypeOf
                          : function (o) {
                              return o.__proto__ || Object.getPrototypeOf(o);
                            }),
                        S(h)
                      );
                    }
                    function c(h, o, u) {
                      return (
                        o in h
                          ? Object.defineProperty(h, o, {
                              value: u,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (h[o] = u),
                        h
                      );
                    }
                    (a = (function (h) {
                      function o(_) {
                        if (!(this instanceof o))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                        var w = u.call(this);
                        return (
                          c(b(w), "_array", void 0),
                          c(b(w), "_size", void 0),
                          (w._array = _),
                          (w._size = _.length),
                          (w._isInitialized = !0),
                          w
                        );
                      }
                      v(o, h);
                      var u = s(o);
                      return (
                        p(
                          o,
                          [
                            {
                              key: "init",
                              value: function (_) {
                                setTimeout(_.onSuccess, 0);
                              },
                            },
                            {
                              key: "loadRange",
                              value: function (_, w) {
                                setTimeout(w.onSuccess, 0);
                              },
                            },
                            {
                              key: "getByteAt",
                              value: function (_) {
                                if (_ >= this._array.length)
                                  throw Error(
                                    "Offset " + _ + " hasn't been loaded yet."
                                  );
                                return this._array[_];
                              },
                            },
                          ],
                          [
                            {
                              key: "canReadFile",
                              value: function (_) {
                                return (
                                  Array.isArray(_) ||
                                  (typeof Buffer == "function" &&
                                    Buffer.isBuffer(_))
                                );
                              },
                            },
                          ]
                        ),
                        o
                      );
                    })(a("./MediaFileReader"))),
                      (i.exports = a);
                  },
                  { "./MediaFileReader": 11 },
                ],
                4: [
                  function (a, i, n) {
                    function d(o) {
                      "@babel/helpers - typeof";
                      return (
                        (d =
                          typeof Symbol == "function" &&
                          typeof Symbol.iterator == "symbol"
                            ? function (u) {
                                return typeof u;
                              }
                            : function (u) {
                                return u &&
                                  typeof Symbol == "function" &&
                                  u.constructor === Symbol &&
                                  u !== Symbol.prototype
                                  ? "symbol"
                                  : typeof u;
                              }),
                        d(o)
                      );
                    }
                    function l(o, u) {
                      for (var _ = 0; _ < u.length; _++) {
                        var w = u[_];
                        (w.enumerable = w.enumerable || !1),
                          (w.configurable = !0),
                          "value" in w && (w.writable = !0),
                          Object.defineProperty(o, w.key, w);
                      }
                    }
                    function p(o, u, _) {
                      return u && l(o.prototype, u), _ && l(o, _), o;
                    }
                    function v(o, u) {
                      if (typeof u != "function" && u !== null)
                        throw new TypeError(
                          "Super expression must either be null or a function"
                        );
                      (o.prototype = Object.create(u && u.prototype, {
                        constructor: {
                          value: o,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        u && x(o, u);
                    }
                    function x(o, u) {
                      return (
                        (x =
                          Object.setPrototypeOf ||
                          function (_, w) {
                            return (_.__proto__ = w), _;
                          }),
                        x(o, u)
                      );
                    }
                    function s(o) {
                      var u = f();
                      return function () {
                        var _ = S(o);
                        if (u) {
                          var w = S(this).constructor;
                          _ = Reflect.construct(_, arguments, w);
                        } else _ = _.apply(this, arguments);
                        return (
                          (_ =
                            !_ || (d(_) !== "object" && typeof _ != "function")
                              ? b(this)
                              : _),
                          _
                        );
                      };
                    }
                    function b(o) {
                      if (o === void 0)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return o;
                    }
                    function f() {
                      if (
                        typeof Reflect > "u" ||
                        !Reflect.construct ||
                        Reflect.construct.sham
                      )
                        return !1;
                      if (typeof Proxy == "function") return !0;
                      try {
                        return (
                          Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                          ),
                          !0
                        );
                      } catch {
                        return !1;
                      }
                    }
                    function S(o) {
                      return (
                        (S = Object.setPrototypeOf
                          ? Object.getPrototypeOf
                          : function (u) {
                              return u.__proto__ || Object.getPrototypeOf(u);
                            }),
                        S(o)
                      );
                    }
                    function c(o, u, _) {
                      return (
                        u in o
                          ? Object.defineProperty(o, u, {
                              value: _,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (o[u] = _),
                        o
                      );
                    }
                    var h = a("./ChunkedFileData");
                    (a = (function (o) {
                      function u(w) {
                        if (!(this instanceof u))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                        var y = _.call(this);
                        return (
                          c(b(y), "_blob", void 0),
                          c(b(y), "_fileData", void 0),
                          (y._blob = w),
                          (y._fileData = new h()),
                          y
                        );
                      }
                      v(u, o);
                      var _ = s(u);
                      return (
                        p(
                          u,
                          [
                            {
                              key: "_init",
                              value: function (w) {
                                (this._size = this._blob.size),
                                  setTimeout(w.onSuccess, 1);
                              },
                            },
                            {
                              key: "loadRange",
                              value: function (w, y) {
                                var T = this,
                                  I = (
                                    this._blob.slice ||
                                    this._blob.mozSlice ||
                                    this._blob.webkitSlice
                                  ).call(this._blob, w[0], w[1] + 1),
                                  M = new FileReader();
                                (M.onloadend = function (O) {
                                  (O = new Uint8Array(M.result)),
                                    T._fileData.addData(w[0], O),
                                    y.onSuccess();
                                }),
                                  (M.onerror = M.onabort =
                                    function (O) {
                                      y.onError &&
                                        y.onError({
                                          type: "blob",
                                          info: M.error,
                                        });
                                    }),
                                  M.readAsArrayBuffer(I);
                              },
                            },
                            {
                              key: "getByteAt",
                              value: function (w) {
                                return this._fileData.getByteAt(w);
                              },
                            },
                          ],
                          [
                            {
                              key: "canReadFile",
                              value: function (w) {
                                return (
                                  (typeof Blob < "u" && w instanceof Blob) ||
                                  (typeof File < "u" && w instanceof File)
                                );
                              },
                            },
                          ]
                        ),
                        u
                      );
                    })(a("./MediaFileReader"))),
                      (i.exports = a);
                  },
                  { "./ChunkedFileData": 5, "./MediaFileReader": 11 },
                ],
                5: [
                  function (a, i, n) {
                    function d(p, v) {
                      for (var x = 0; x < v.length; x++) {
                        var s = v[x];
                        (s.enumerable = s.enumerable || !1),
                          (s.configurable = !0),
                          "value" in s && (s.writable = !0),
                          Object.defineProperty(p, s.key, s);
                      }
                    }
                    function l(p, v, x) {
                      return v && d(p.prototype, v), x && d(p, x), p;
                    }
                    (a = (function () {
                      function p() {
                        if (!(this instanceof p))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                        "_fileData" in this
                          ? Object.defineProperty(this, "_fileData", {
                              value: void 0,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (this._fileData = void 0),
                          (this._fileData = []);
                      }
                      return (
                        l(
                          p,
                          [
                            {
                              key: "addData",
                              value: function (v, x) {
                                var s = v + x.length - 1,
                                  b = this._getChunkRange(v, s);
                                if (b.startIx === -1)
                                  this._fileData.splice(b.insertIx || 0, 0, {
                                    offset: v,
                                    data: x,
                                  });
                                else {
                                  var f = this._fileData[b.startIx],
                                    S = this._fileData[b.endIx];
                                  s = s < S.offset + S.data.length - 1;
                                  var c = {
                                    offset: Math.min(v, f.offset),
                                    data: x,
                                  };
                                  v > f.offset &&
                                    ((v = this._sliceData(
                                      f.data,
                                      0,
                                      v - f.offset
                                    )),
                                    (c.data = this._concatData(v, x))),
                                    s &&
                                      ((v = this._sliceData(
                                        c.data,
                                        0,
                                        S.offset - c.offset
                                      )),
                                      (c.data = this._concatData(v, S.data))),
                                    this._fileData.splice(
                                      b.startIx,
                                      b.endIx - b.startIx + 1,
                                      c
                                    );
                                }
                              },
                            },
                            {
                              key: "_concatData",
                              value: function (v, x) {
                                if (
                                  typeof ArrayBuffer < "u" &&
                                  ArrayBuffer.isView &&
                                  ArrayBuffer.isView(v)
                                ) {
                                  var s = new v.constructor(
                                    v.length + x.length
                                  );
                                  return s.set(v, 0), s.set(x, v.length), s;
                                }
                                return v.concat(x);
                              },
                            },
                            {
                              key: "_sliceData",
                              value: function (v, x, s) {
                                return v.slice
                                  ? v.slice(x, s)
                                  : v.subarray(x, s);
                              },
                            },
                            {
                              key: "_getChunkRange",
                              value: function (v, x) {
                                for (
                                  var s, b, f = -1, S = -1, c = 0, h = 0;
                                  h < this._fileData.length &&
                                  ((b = this._fileData[h].offset),
                                  (s = b + this._fileData[h].data.length),
                                  !(x < b - 1));
                                  h++, c = h
                                )
                                  if (v <= s + 1 && x >= b - 1) {
                                    f = h;
                                    break;
                                  }
                                if (f === -1)
                                  return {
                                    startIx: -1,
                                    endIx: -1,
                                    insertIx: c,
                                  };
                                for (
                                  h = f;
                                  h < this._fileData.length &&
                                  ((b = this._fileData[h].offset),
                                  (s = b + this._fileData[h].data.length),
                                  x >= b - 1 && (S = h),
                                  !(x <= s + 1));
                                  h++
                                );
                                return (
                                  S === -1 && (S = f), { startIx: f, endIx: S }
                                );
                              },
                            },
                            {
                              key: "hasDataRange",
                              value: function (v, x) {
                                for (
                                  var s = 0;
                                  s < this._fileData.length;
                                  s++
                                ) {
                                  var b = this._fileData[s];
                                  if (x < b.offset) break;
                                  if (
                                    v >= b.offset &&
                                    x < b.offset + b.data.length
                                  )
                                    return !0;
                                }
                                return !1;
                              },
                            },
                            {
                              key: "getByteAt",
                              value: function (v) {
                                for (
                                  var x, s = 0;
                                  s < this._fileData.length;
                                  s++
                                ) {
                                  var b = this._fileData[s].offset,
                                    f = b + this._fileData[s].data.length - 1;
                                  if (v >= b && v <= f) {
                                    x = this._fileData[s];
                                    break;
                                  }
                                }
                                if (x) return x.data[v - x.offset];
                                throw Error(
                                  "Offset " + v + " hasn't been loaded yet."
                                );
                              },
                            },
                          ],
                          [
                            {
                              key: "NOT_FOUND",
                              get: function () {
                                return -1;
                              },
                            },
                          ]
                        ),
                        p
                      );
                    })()),
                      (i.exports = a);
                  },
                  {},
                ],
                6: [
                  function (a, i, n) {
                    function d(_) {
                      "@babel/helpers - typeof";
                      return (
                        (d =
                          typeof Symbol == "function" &&
                          typeof Symbol.iterator == "symbol"
                            ? function (w) {
                                return typeof w;
                              }
                            : function (w) {
                                return w &&
                                  typeof Symbol == "function" &&
                                  w.constructor === Symbol &&
                                  w !== Symbol.prototype
                                  ? "symbol"
                                  : typeof w;
                              }),
                        d(_)
                      );
                    }
                    function l(_, w) {
                      for (var y = 0; y < w.length; y++) {
                        var T = w[y];
                        (T.enumerable = T.enumerable || !1),
                          (T.configurable = !0),
                          "value" in T && (T.writable = !0),
                          Object.defineProperty(_, T.key, T);
                      }
                    }
                    function p(_, w, y) {
                      return w && l(_.prototype, w), y && l(_, y), _;
                    }
                    function v(_, w) {
                      if (typeof w != "function" && w !== null)
                        throw new TypeError(
                          "Super expression must either be null or a function"
                        );
                      (_.prototype = Object.create(w && w.prototype, {
                        constructor: {
                          value: _,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        w && x(_, w);
                    }
                    function x(_, w) {
                      return (
                        (x =
                          Object.setPrototypeOf ||
                          function (y, T) {
                            return (y.__proto__ = T), y;
                          }),
                        x(_, w)
                      );
                    }
                    function s(_) {
                      var w = f();
                      return function () {
                        var y = S(_);
                        if (w) {
                          var T = S(this).constructor;
                          y = Reflect.construct(y, arguments, T);
                        } else y = y.apply(this, arguments);
                        return (
                          (y =
                            !y || (d(y) !== "object" && typeof y != "function")
                              ? b(this)
                              : y),
                          y
                        );
                      };
                    }
                    function b(_) {
                      if (_ === void 0)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return _;
                    }
                    function f() {
                      if (
                        typeof Reflect > "u" ||
                        !Reflect.construct ||
                        Reflect.construct.sham
                      )
                        return !1;
                      if (typeof Proxy == "function") return !0;
                      try {
                        return (
                          Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                          ),
                          !0
                        );
                      } catch {
                        return !1;
                      }
                    }
                    function S(_) {
                      return (
                        (S = Object.setPrototypeOf
                          ? Object.getPrototypeOf
                          : function (w) {
                              return w.__proto__ || Object.getPrototypeOf(w);
                            }),
                        S(_)
                      );
                    }
                    function c(_, w, y) {
                      return (
                        w in _
                          ? Object.defineProperty(_, w, {
                              value: y,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (_[w] = y),
                        _
                      );
                    }
                    var h = [4, 132],
                      o = [6, 134],
                      u =
                        "Other;32x32 pixels 'file icon' (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. label side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype".split(
                          ";"
                        );
                    (a = (function (_) {
                      function w() {
                        if (!(this instanceof w))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                        for (
                          var T = arguments.length, I = Array(T), M = 0;
                          M < T;
                          M++
                        )
                          I[M] = arguments[M];
                        return (
                          (T = y.call.apply(y, [this].concat(I))),
                          c(b(T), "_commentOffset", void 0),
                          c(b(T), "_pictureOffset", void 0),
                          T
                        );
                      }
                      v(w, _);
                      var y = s(w);
                      return (
                        p(
                          w,
                          [
                            {
                              key: "_loadData",
                              value: function (T, I) {
                                var M = this;
                                T.loadRange([4, 7], {
                                  onSuccess: function () {
                                    M._loadBlock(T, 4, I);
                                  },
                                });
                              },
                            },
                            {
                              key: "_loadBlock",
                              value: function (T, I, M) {
                                var O = this,
                                  U = T.getByteAt(I),
                                  J = T.getInteger24At(I + 1, !0);
                                if (h.indexOf(U) !== -1) {
                                  var C = I + 4;
                                  T.loadRange([C, C + J], {
                                    onSuccess: function () {
                                      (O._commentOffset = C),
                                        O._nextBlock(T, I, U, J, M);
                                    },
                                  });
                                } else
                                  o.indexOf(U) !== -1
                                    ? ((C = I + 4),
                                      T.loadRange([C, C + J], {
                                        onSuccess: function () {
                                          (O._pictureOffset = C),
                                            O._nextBlock(T, I, U, J, M);
                                        },
                                      }))
                                    : O._nextBlock(T, I, U, J, M);
                              },
                            },
                            {
                              key: "_nextBlock",
                              value: function (T, I, M, O, U) {
                                var J = this;
                                127 < M
                                  ? J._commentOffset
                                    ? U.onSuccess()
                                    : U.onError({
                                        type: "loadData",
                                        info: "Comment block could not be found.",
                                      })
                                  : T.loadRange([I + 4 + O, I + 4 + 4 + O], {
                                      onSuccess: function () {
                                        J._loadBlock(T, I + 4 + O, U);
                                      },
                                    });
                              },
                            },
                            {
                              key: "_parseData",
                              value: function (T, I) {
                                var M =
                                  T.getLongAt(this._commentOffset, !1) +
                                  (this._commentOffset + 4);
                                (I = T.getLongAt(M, !1)), (M += 4);
                                for (var O, U, J, C, D, k, V = 0; V < I; V++) {
                                  var ee = T.getLongAt(M, !1),
                                    Z = T.getStringWithCharsetAt(
                                      M + 4,
                                      ee,
                                      "utf-8"
                                    ).toString(),
                                    ve = Z.indexOf("=");
                                  switch (
                                    ((Z = [Z.slice(0, ve), Z.slice(ve + 1)]),
                                    Z[0].toUpperCase())
                                  ) {
                                    case "TITLE":
                                      O = Z[1];
                                      break;
                                    case "ARTIST":
                                      U = Z[1];
                                      break;
                                    case "ALBUM":
                                      J = Z[1];
                                      break;
                                    case "TRACKNUMBER":
                                      C = Z[1];
                                      break;
                                    case "GENRE":
                                      D = Z[1];
                                  }
                                  M += 4 + ee;
                                }
                                return (
                                  this._pictureOffset &&
                                    ((k = T.getLongAt(this._pictureOffset, !0)),
                                    (I = this._pictureOffset + 4),
                                    (M = T.getLongAt(I, !0)),
                                    (V = I + 4),
                                    (I = T.getStringAt(V, M)),
                                    (M = V + M),
                                    (V = T.getLongAt(M, !0)),
                                    (ee = M + 4),
                                    (M = T.getStringWithCharsetAt(
                                      ee,
                                      V,
                                      "utf-8"
                                    ).toString()),
                                    (V = ee + V + 16),
                                    (ee = T.getLongAt(V, !0)),
                                    (T = T.getBytesAt(V + 4, ee, !0)),
                                    (k = {
                                      format: I,
                                      type: u[k],
                                      description: M,
                                      data: T,
                                    })),
                                  {
                                    type: "FLAC",
                                    version: "1",
                                    tags: {
                                      title: O,
                                      artist: U,
                                      album: J,
                                      track: C,
                                      genre: D,
                                      picture: k,
                                    },
                                  }
                                );
                              },
                            },
                          ],
                          [
                            {
                              key: "getTagIdentifierByteRange",
                              value: function () {
                                return { offset: 0, length: 4 };
                              },
                            },
                            {
                              key: "canReadTagFormat",
                              value: function (T) {
                                return (
                                  String.fromCharCode.apply(
                                    String,
                                    T.slice(0, 4)
                                  ) === "fLaC"
                                );
                              },
                            },
                          ]
                        ),
                        w
                      );
                    })(a("./MediaTagReader"))),
                      (i.exports = a);
                  },
                  { "./MediaTagReader": 12 },
                ],
                7: [
                  function (a, i, n) {
                    function d(c) {
                      "@babel/helpers - typeof";
                      return (
                        (d =
                          typeof Symbol == "function" &&
                          typeof Symbol.iterator == "symbol"
                            ? function (h) {
                                return typeof h;
                              }
                            : function (h) {
                                return h &&
                                  typeof Symbol == "function" &&
                                  h.constructor === Symbol &&
                                  h !== Symbol.prototype
                                  ? "symbol"
                                  : typeof h;
                              }),
                        d(c)
                      );
                    }
                    function l(c, h) {
                      for (var o = 0; o < h.length; o++) {
                        var u = h[o];
                        (u.enumerable = u.enumerable || !1),
                          (u.configurable = !0),
                          "value" in u && (u.writable = !0),
                          Object.defineProperty(c, u.key, u);
                      }
                    }
                    function p(c, h, o) {
                      return h && l(c.prototype, h), o && l(c, o), c;
                    }
                    function v(c, h) {
                      if (typeof h != "function" && h !== null)
                        throw new TypeError(
                          "Super expression must either be null or a function"
                        );
                      (c.prototype = Object.create(h && h.prototype, {
                        constructor: {
                          value: c,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        h && x(c, h);
                    }
                    function x(c, h) {
                      return (
                        (x =
                          Object.setPrototypeOf ||
                          function (o, u) {
                            return (o.__proto__ = u), o;
                          }),
                        x(c, h)
                      );
                    }
                    function s(c) {
                      var h = b();
                      return function () {
                        var o = f(c);
                        if (h) {
                          var u = f(this).constructor;
                          o = Reflect.construct(o, arguments, u);
                        } else o = o.apply(this, arguments);
                        if (
                          !o ||
                          (d(o) !== "object" && typeof o != "function")
                        ) {
                          if (this === void 0)
                            throw new ReferenceError(
                              "this hasn't been initialised - super() hasn't been called"
                            );
                          o = this;
                        }
                        return o;
                      };
                    }
                    function b() {
                      if (
                        typeof Reflect > "u" ||
                        !Reflect.construct ||
                        Reflect.construct.sham
                      )
                        return !1;
                      if (typeof Proxy == "function") return !0;
                      try {
                        return (
                          Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                          ),
                          !0
                        );
                      } catch {
                        return !1;
                      }
                    }
                    function f(c) {
                      return (
                        (f = Object.setPrototypeOf
                          ? Object.getPrototypeOf
                          : function (h) {
                              return h.__proto__ || Object.getPrototypeOf(h);
                            }),
                        f(c)
                      );
                    }
                    (n = a("./MediaTagReader")),
                      a("./MediaFileReader"),
                      (a = (function (c) {
                        function h() {
                          if (!(this instanceof h))
                            throw new TypeError(
                              "Cannot call a class as a function"
                            );
                          return o.apply(this, arguments);
                        }
                        v(h, c);
                        var o = s(h);
                        return (
                          p(
                            h,
                            [
                              {
                                key: "_loadData",
                                value: function (u, _) {
                                  var w = u.getSize();
                                  u.loadRange([w - 128, w - 1], _);
                                },
                              },
                              {
                                key: "_parseData",
                                value: function (u, _) {
                                  var w = u.getSize() - 128,
                                    y = u
                                      .getStringWithCharsetAt(w + 3, 30)
                                      .toString(),
                                    T = u
                                      .getStringWithCharsetAt(w + 33, 30)
                                      .toString(),
                                    I = u
                                      .getStringWithCharsetAt(w + 63, 30)
                                      .toString(),
                                    M = u
                                      .getStringWithCharsetAt(w + 93, 4)
                                      .toString(),
                                    O = u.getByteAt(w + 97 + 28);
                                  if (
                                    ((_ = u.getByteAt(w + 97 + 29)),
                                    O == 0 && _ != 0)
                                  ) {
                                    var U = "1.1";
                                    O = u
                                      .getStringWithCharsetAt(w + 97, 28)
                                      .toString();
                                  } else
                                    (U = "1.0"),
                                      (O = u
                                        .getStringWithCharsetAt(w + 97, 30)
                                        .toString()),
                                      (_ = 0);
                                  return (
                                    (u = u.getByteAt(w + 97 + 30)),
                                    (u = {
                                      type: "ID3",
                                      version: U,
                                      tags: {
                                        title: y,
                                        artist: T,
                                        album: I,
                                        year: M,
                                        comment: O,
                                        genre: 255 > u ? S[u] : "",
                                      },
                                    }),
                                    _ && (u.tags.track = _),
                                    u
                                  );
                                },
                              },
                            ],
                            [
                              {
                                key: "getTagIdentifierByteRange",
                                value: function () {
                                  return { offset: -128, length: 128 };
                                },
                              },
                              {
                                key: "canReadTagFormat",
                                value: function (u) {
                                  return (
                                    String.fromCharCode.apply(
                                      String,
                                      u.slice(0, 3)
                                    ) === "TAG"
                                  );
                                },
                              },
                            ]
                          ),
                          h
                        );
                      })(n));
                    var S =
                      "Blues;Classic Rock;Country;Dance;Disco;Funk;Grunge;Hip-Hop;Jazz;Metal;New Age;Oldies;Other;Pop;R&B;Rap;Reggae;Rock;Techno;Industrial;Alternative;Ska;Death Metal;Pranks;Soundtrack;Euro-Techno;Ambient;Trip-Hop;Vocal;Jazz+Funk;Fusion;Trance;Classical;Instrumental;Acid;House;Game;Sound Clip;Gospel;Noise;AlternRock;Bass;Soul;Punk;Space;Meditative;Instrumental Pop;Instrumental Rock;Ethnic;Gothic;Darkwave;Techno-Industrial;Electronic;Pop-Folk;Eurodance;Dream;Southern Rock;Comedy;Cult;Gangsta;Top 40;Christian Rap;Pop/Funk;Jungle;Native American;Cabaret;New Wave;Psychadelic;Rave;Showtunes;Trailer;Lo-Fi;Tribal;Acid Punk;Acid Jazz;Polka;Retro;Musical;Rock & Roll;Hard Rock;Folk;Folk-Rock;National Folk;Swing;Fast Fusion;Bebob;Latin;Revival;Celtic;Bluegrass;Avantgarde;Gothic Rock;Progressive Rock;Psychedelic Rock;Symphonic Rock;Slow Rock;Big Band;Chorus;Easy Listening;Acoustic;Humour;Speech;Chanson;Opera;Chamber Music;Sonata;Symphony;Booty Bass;Primus;Porn Groove;Satire;Slow Jam;Club;Tango;Samba;Folklore;Ballad;Power Ballad;Rhythmic Soul;Freestyle;Duet;Punk Rock;Drum Solo;Acapella;Euro-House;Dance Hall".split(
                        ";"
                      );
                    i.exports = a;
                  },
                  { "./MediaFileReader": 11, "./MediaTagReader": 12 },
                ],
                8: [
                  function (a, i, n) {
                    function d(c, h) {
                      for (var o = 0; o < h.length; o++) {
                        var u = h[o];
                        (u.enumerable = u.enumerable || !1),
                          (u.configurable = !0),
                          "value" in u && (u.writable = !0),
                          Object.defineProperty(c, u.key, u);
                      }
                    }
                    function l(c, h, o) {
                      return o && d(c, o), c;
                    }
                    function p(c) {
                      switch (c) {
                        case 0:
                          c = "iso-8859-1";
                          break;
                        case 1:
                          c = "utf-16";
                          break;
                        case 2:
                          c = "utf-16be";
                          break;
                        case 3:
                          c = "utf-8";
                          break;
                        default:
                          c = "iso-8859-1";
                      }
                      return c;
                    }
                    function v(c, h, o, u) {
                      var _ = o.getStringWithCharsetAt(c + 1, h - 1, u);
                      return (
                        (c = o.getStringWithCharsetAt(
                          c + 1 + _.bytesReadCount,
                          h - 1 - _.bytesReadCount,
                          u
                        )),
                        { user_description: _.toString(), data: c.toString() }
                      );
                    }
                    a("./MediaFileReader");
                    var x = a("./StringUtils"),
                      s = a("./ArrayFileReader"),
                      b = {
                        BUF: "Recommended buffer size",
                        CNT: "Play counter",
                        COM: "Comments",
                        CRA: "Audio encryption",
                        CRM: "Encrypted meta frame",
                        ETC: "Event timing codes",
                        EQU: "Equalization",
                        GEO: "General encapsulated object",
                        IPL: "Involved people list",
                        LNK: "Linked information",
                        MCI: "Music CD Identifier",
                        MLL: "MPEG location lookup table",
                        PIC: "Attached picture",
                        POP: "Popularimeter",
                        REV: "Reverb",
                        RVA: "Relative volume adjustment",
                        SLT: "Synchronized lyric/text",
                        STC: "Synced tempo codes",
                        TAL: "Album/Movie/Show title",
                        TBP: "BPM (Beats Per Minute)",
                        TCM: "Composer",
                        TCO: "Content type",
                        TCR: "Copyright message",
                        TDA: "Date",
                        TDY: "Playlist delay",
                        TEN: "Encoded by",
                        TFT: "File type",
                        TIM: "Time",
                        TKE: "Initial key",
                        TLA: "Language(s)",
                        TLE: "Length",
                        TMT: "Media type",
                        TOA: "Original artist(s)/performer(s)",
                        TOF: "Original filename",
                        TOL: "Original Lyricist(s)/text writer(s)",
                        TOR: "Original release year",
                        TOT: "Original album/Movie/Show title",
                        TP1: "Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group",
                        TP2: "Band/Orchestra/Accompaniment",
                        TP3: "Conductor/Performer refinement",
                        TP4: "Interpreted, remixed, or otherwise modified by",
                        TPA: "Part of a set",
                        TPB: "Publisher",
                        TRC: "ISRC (International Standard Recording Code)",
                        TRD: "Recording dates",
                        TRK: "Track number/Position in set",
                        TSI: "Size",
                        TSS: "Software/hardware and settings used for encoding",
                        TT1: "Content group description",
                        TT2: "Title/Songname/Content description",
                        TT3: "Subtitle/Description refinement",
                        TXT: "Lyricist/text writer",
                        TXX: "User defined text information frame",
                        TYE: "Year",
                        UFI: "Unique file identifier",
                        ULT: "Unsychronized lyric/text transcription",
                        WAF: "Official audio file webpage",
                        WAR: "Official artist/performer webpage",
                        WAS: "Official audio source webpage",
                        WCM: "Commercial information",
                        WCP: "Copyright/Legal information",
                        WPB: "Publishers official webpage",
                        WXX: "User defined URL link frame",
                        AENC: "Audio encryption",
                        APIC: "Attached picture",
                        ASPI: "Audio seek point index",
                        CHAP: "Chapter",
                        CTOC: "Table of contents",
                        COMM: "Comments",
                        COMR: "Commercial frame",
                        ENCR: "Encryption method registration",
                        EQU2: "Equalisation (2)",
                        EQUA: "Equalization",
                        ETCO: "Event timing codes",
                        GEOB: "General encapsulated object",
                        GRID: "Group identification registration",
                        IPLS: "Involved people list",
                        LINK: "Linked information",
                        MCDI: "Music CD identifier",
                        MLLT: "MPEG location lookup table",
                        OWNE: "Ownership frame",
                        PRIV: "Private frame",
                        PCNT: "Play counter",
                        POPM: "Popularimeter",
                        POSS: "Position synchronisation frame",
                        RBUF: "Recommended buffer size",
                        RVA2: "Relative volume adjustment (2)",
                        RVAD: "Relative volume adjustment",
                        RVRB: "Reverb",
                        SEEK: "Seek frame",
                        SYLT: "Synchronized lyric/text",
                        SYTC: "Synchronized tempo codes",
                        TALB: "Album/Movie/Show title",
                        TBPM: "BPM (beats per minute)",
                        TCOM: "Composer",
                        TCON: "Content type",
                        TCOP: "Copyright message",
                        TDAT: "Date",
                        TDLY: "Playlist delay",
                        TDRC: "Recording time",
                        TDRL: "Release time",
                        TDTG: "Tagging time",
                        TENC: "Encoded by",
                        TEXT: "Lyricist/Text writer",
                        TFLT: "File type",
                        TIME: "Time",
                        TIPL: "Involved people list",
                        TIT1: "Content group description",
                        TIT2: "Title/songname/content description",
                        TIT3: "Subtitle/Description refinement",
                        TKEY: "Initial key",
                        TLAN: "Language(s)",
                        TLEN: "Length",
                        TMCL: "Musician credits list",
                        TMED: "Media type",
                        TMOO: "Mood",
                        TOAL: "Original album/movie/show title",
                        TOFN: "Original filename",
                        TOLY: "Original lyricist(s)/text writer(s)",
                        TOPE: "Original artist(s)/performer(s)",
                        TORY: "Original release year",
                        TOWN: "File owner/licensee",
                        TPE1: "Lead performer(s)/Soloist(s)",
                        TPE2: "Band/orchestra/accompaniment",
                        TPE3: "Conductor/performer refinement",
                        TPE4: "Interpreted, remixed, or otherwise modified by",
                        TPOS: "Part of a set",
                        TPRO: "Produced notice",
                        TPUB: "Publisher",
                        TRCK: "Track number/Position in set",
                        TRDA: "Recording dates",
                        TRSN: "Internet radio station name",
                        TRSO: "Internet radio station owner",
                        TSOA: "Album sort order",
                        TSOP: "Performer sort order",
                        TSOT: "Title sort order",
                        TSIZ: "Size",
                        TSRC: "ISRC (international standard recording code)",
                        TSSE: "Software/Hardware and settings used for encoding",
                        TSST: "Set subtitle",
                        TYER: "Year",
                        TXXX: "User defined text information frame",
                        UFID: "Unique file identifier",
                        USER: "Terms of use",
                        USLT: "Unsychronized lyric/text transcription",
                        WCOM: "Commercial information",
                        WCOP: "Copyright/Legal information",
                        WOAF: "Official audio file webpage",
                        WOAR: "Official artist/performer webpage",
                        WOAS: "Official audio source webpage",
                        WORS: "Official internet radio station homepage",
                        WPAY: "Payment",
                        WPUB: "Publishers official webpage",
                        WXXX: "User defined URL link frame",
                      };
                    a = (function () {
                      function c() {
                        if (!(this instanceof c))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      }
                      return (
                        l(c, null, [
                          {
                            key: "getFrameReaderFunction",
                            value: function (h) {
                              return h in f
                                ? f[h]
                                : h[0] === "T"
                                ? f["T*"]
                                : h[0] === "W"
                                ? f["W*"]
                                : null;
                            },
                          },
                          {
                            key: "readFrames",
                            value: function (h, o, u, _, w) {
                              for (
                                var y = {}, T = this._getFrameHeaderSize(_);
                                h < o - T;

                              ) {
                                var I = this._readFrameHeader(u, h, _),
                                  M = I.id;
                                if (!M) break;
                                var O = I.flags,
                                  U = I.size,
                                  J = h + I.headerSize,
                                  C = u;
                                if (
                                  ((h += I.headerSize + I.size),
                                  !w || w.indexOf(M) !== -1)
                                ) {
                                  if (
                                    M === "MP3e" ||
                                    M === "\0MP3" ||
                                    M === "\0\0MP" ||
                                    M === " MP3"
                                  )
                                    break;
                                  O &&
                                    O.format.unsynchronisation &&
                                    !_.flags.unsynchronisation &&
                                    ((C = this.getUnsyncFileReader(C, J, U)),
                                    (J = 0),
                                    (U = C.getSize())),
                                    O &&
                                      O.format.data_length_indicator &&
                                      ((J += 4), (U -= 4)),
                                    (O = (I = c.getFrameReaderFunction(M))
                                      ? I.apply(this, [J, U, C, O, _])
                                      : null),
                                    (J = this._getFrameDescription(M)),
                                    (U = {
                                      id: M,
                                      size: U,
                                      description: J,
                                      data: O,
                                    }),
                                    M in y
                                      ? (y[M].id && (y[M] = [y[M]]),
                                        y[M].push(U))
                                      : (y[M] = U);
                                }
                              }
                              return y;
                            },
                          },
                          {
                            key: "_getFrameHeaderSize",
                            value: function (h) {
                              return (
                                (h = h.major),
                                h == 2 ? 6 : h == 3 || h == 4 ? 10 : 0
                              );
                            },
                          },
                          {
                            key: "_readFrameHeader",
                            value: function (h, o, u) {
                              var _ = u.major,
                                w = null;
                              switch (((u = this._getFrameHeaderSize(u)), _)) {
                                case 2:
                                  var y = h.getStringAt(o, 3),
                                    T = h.getInteger24At(o + 3, !0);
                                  break;
                                case 3:
                                  (y = h.getStringAt(o, 4)),
                                    (T = h.getLongAt(o + 4, !0));
                                  break;
                                case 4:
                                  (y = h.getStringAt(o, 4)),
                                    (T = h.getSynchsafeInteger32At(o + 4));
                              }
                              return (
                                (y == "\0\0\0" || y == "\0\0\0\0") && (y = ""),
                                y &&
                                  2 < _ &&
                                  (w = this._readFrameFlags(h, o + 8)),
                                {
                                  id: y || "",
                                  size: T || 0,
                                  headerSize: u || 0,
                                  flags: w,
                                }
                              );
                            },
                          },
                          {
                            key: "_readFrameFlags",
                            value: function (h, o) {
                              return {
                                message: {
                                  tag_alter_preservation: h.isBitSetAt(o, 6),
                                  file_alter_preservation: h.isBitSetAt(o, 5),
                                  read_only: h.isBitSetAt(o, 4),
                                },
                                format: {
                                  grouping_identity: h.isBitSetAt(o + 1, 7),
                                  compression: h.isBitSetAt(o + 1, 3),
                                  encryption: h.isBitSetAt(o + 1, 2),
                                  unsynchronisation: h.isBitSetAt(o + 1, 1),
                                  data_length_indicator: h.isBitSetAt(o + 1, 0),
                                },
                              };
                            },
                          },
                          {
                            key: "_getFrameDescription",
                            value: function (h) {
                              return h in b ? b[h] : "Unknown";
                            },
                          },
                          {
                            key: "getUnsyncFileReader",
                            value: function (h, o, u) {
                              for (
                                h = h.getBytesAt(o, u), o = 0;
                                o < h.length - 1;
                                o++
                              )
                                h[o] === 255 &&
                                  h[o + 1] === 0 &&
                                  h.splice(o + 1, 1);
                              return new s(h);
                            },
                          },
                        ]),
                        c
                      );
                    })();
                    var f = {
                      APIC: function (c, h, o, u, _) {
                        u = c;
                        var w = p(o.getByteAt(c));
                        switch (_ && _.major) {
                          case 2:
                            (_ = o.getStringAt(c + 1, 3)), (c += 4);
                            break;
                          case 3:
                          case 4:
                            (_ = o.getStringWithCharsetAt(c + 1, h - 1)),
                              (c += 1 + _.bytesReadCount);
                            break;
                          default:
                            throw Error("Couldn't read ID3v2 major version.");
                        }
                        var y = o.getByteAt(c);
                        return (
                          (y = S[y]),
                          (w = o.getStringWithCharsetAt(
                            c + 1,
                            h - (c - u) - 1,
                            w
                          )),
                          (c += 1 + w.bytesReadCount),
                          {
                            format: _.toString(),
                            type: y,
                            description: w.toString(),
                            data: o.getBytesAt(c, u + h - c),
                          }
                        );
                      },
                      CHAP: function (c, h, o, u, _) {
                        u = c;
                        var w = {},
                          y = x.readNullTerminatedString(o.getBytesAt(c, h));
                        return (
                          (w.id = y.toString()),
                          (c += y.bytesReadCount),
                          (w.startTime = o.getLongAt(c, !0)),
                          (c += 4),
                          (w.endTime = o.getLongAt(c, !0)),
                          (c += 4),
                          (w.startOffset = o.getLongAt(c, !0)),
                          (c += 4),
                          (w.endOffset = o.getLongAt(c, !0)),
                          (c += 4),
                          (w.subFrames = this.readFrames(
                            c,
                            c + (h - (c - u)),
                            o,
                            _
                          )),
                          w
                        );
                      },
                      CTOC: function (c, h, o, u, _) {
                        u = c;
                        var w = {
                            childElementIds: [],
                            id: void 0,
                            topLevel: void 0,
                            ordered: void 0,
                            entryCount: void 0,
                            subFrames: void 0,
                          },
                          y = x.readNullTerminatedString(o.getBytesAt(c, h));
                        for (
                          w.id = y.toString(),
                            c += y.bytesReadCount,
                            w.topLevel = o.isBitSetAt(c, 1),
                            w.ordered = o.isBitSetAt(c, 0),
                            c++,
                            w.entryCount = o.getByteAt(c),
                            c++,
                            y = 0;
                          y < w.entryCount;
                          y++
                        ) {
                          var T = x.readNullTerminatedString(
                            o.getBytesAt(c, h - (c - u))
                          );
                          w.childElementIds.push(T.toString()),
                            (c += T.bytesReadCount);
                        }
                        return (
                          (w.subFrames = this.readFrames(
                            c,
                            c + (h - (c - u)),
                            o,
                            _
                          )),
                          w
                        );
                      },
                      COMM: function (c, h, o, u, _) {
                        var w = c,
                          y = p(o.getByteAt(c));
                        return (
                          (u = o.getStringAt(c + 1, 3)),
                          (_ = o.getStringWithCharsetAt(c + 4, h - 4, y)),
                          (c += 4 + _.bytesReadCount),
                          (c = o.getStringWithCharsetAt(c, w + h - c, y)),
                          {
                            language: u,
                            short_description: _.toString(),
                            text: c.toString(),
                          }
                        );
                      },
                    };
                    (f.COM = f.COMM),
                      (f.PIC = function (c, h, o, u, _) {
                        return f.APIC(c, h, o, u, _);
                      }),
                      (f.PCNT = function (c, h, o, u, _) {
                        return o.getLongAt(c, !1);
                      }),
                      (f.CNT = f.PCNT),
                      (f["T*"] = function (c, h, o, u, _) {
                        return (
                          (u = p(o.getByteAt(c))),
                          o.getStringWithCharsetAt(c + 1, h - 1, u).toString()
                        );
                      }),
                      (f.TXXX = function (c, h, o, u, _) {
                        return (u = p(o.getByteAt(c))), v(c, h, o, u);
                      }),
                      (f.WXXX = function (c, h, o, u, _) {
                        return h === 0
                          ? null
                          : ((u = p(o.getByteAt(c))), v(c, h, o, u));
                      }),
                      (f["W*"] = function (c, h, o, u, _) {
                        return h === 0
                          ? null
                          : o
                              .getStringWithCharsetAt(c, h, "iso-8859-1")
                              .toString();
                      }),
                      (f.TCON = function (c, h, o, u) {
                        return f["T*"]
                          .apply(this, arguments)
                          .replace(/^\(\d+\)/, "");
                      }),
                      (f.TCO = f.TCON),
                      (f.USLT = function (c, h, o, u, _) {
                        var w = c,
                          y = p(o.getByteAt(c));
                        return (
                          (u = o.getStringAt(c + 1, 3)),
                          (_ = o.getStringWithCharsetAt(c + 4, h - 4, y)),
                          (c += 4 + _.bytesReadCount),
                          (c = o.getStringWithCharsetAt(c, w + h - c, y)),
                          {
                            language: u,
                            descriptor: _.toString(),
                            lyrics: c.toString(),
                          }
                        );
                      }),
                      (f.ULT = f.USLT),
                      (f.UFID = function (c, h, o, u, _) {
                        return (
                          (u = x.readNullTerminatedString(o.getBytesAt(c, h))),
                          (c += u.bytesReadCount),
                          (c = o.getBytesAt(c, h - u.bytesReadCount)),
                          { ownerIdentifier: u.toString(), identifier: c }
                        );
                      });
                    var S =
                      "Other;32x32 pixels 'file icon' (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. label side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype".split(
                        ";"
                      );
                    i.exports = a;
                  },
                  {
                    "./ArrayFileReader": 3,
                    "./MediaFileReader": 11,
                    "./StringUtils": 13,
                  },
                ],
                9: [
                  function (a, i, n) {
                    function d(h) {
                      "@babel/helpers - typeof";
                      return (
                        (d =
                          typeof Symbol == "function" &&
                          typeof Symbol.iterator == "symbol"
                            ? function (o) {
                                return typeof o;
                              }
                            : function (o) {
                                return o &&
                                  typeof Symbol == "function" &&
                                  o.constructor === Symbol &&
                                  o !== Symbol.prototype
                                  ? "symbol"
                                  : typeof o;
                              }),
                        d(h)
                      );
                    }
                    function l(h, o) {
                      for (var u = 0; u < o.length; u++) {
                        var _ = o[u];
                        (_.enumerable = _.enumerable || !1),
                          (_.configurable = !0),
                          "value" in _ && (_.writable = !0),
                          Object.defineProperty(h, _.key, _);
                      }
                    }
                    function p(h, o, u) {
                      return o && l(h.prototype, o), u && l(h, u), h;
                    }
                    function v(h, o) {
                      if (typeof o != "function" && o !== null)
                        throw new TypeError(
                          "Super expression must either be null or a function"
                        );
                      (h.prototype = Object.create(o && o.prototype, {
                        constructor: {
                          value: h,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        o && x(h, o);
                    }
                    function x(h, o) {
                      return (
                        (x =
                          Object.setPrototypeOf ||
                          function (u, _) {
                            return (u.__proto__ = _), u;
                          }),
                        x(h, o)
                      );
                    }
                    function s(h) {
                      var o = b();
                      return function () {
                        var u = f(h);
                        if (o) {
                          var _ = f(this).constructor;
                          u = Reflect.construct(u, arguments, _);
                        } else u = u.apply(this, arguments);
                        if (
                          !u ||
                          (d(u) !== "object" && typeof u != "function")
                        ) {
                          if (this === void 0)
                            throw new ReferenceError(
                              "this hasn't been initialised - super() hasn't been called"
                            );
                          u = this;
                        }
                        return u;
                      };
                    }
                    function b() {
                      if (
                        typeof Reflect > "u" ||
                        !Reflect.construct ||
                        Reflect.construct.sham
                      )
                        return !1;
                      if (typeof Proxy == "function") return !0;
                      try {
                        return (
                          Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                          ),
                          !0
                        );
                      } catch {
                        return !1;
                      }
                    }
                    function f(h) {
                      return (
                        (f = Object.setPrototypeOf
                          ? Object.getPrototypeOf
                          : function (o) {
                              return o.__proto__ || Object.getPrototypeOf(o);
                            }),
                        f(h)
                      );
                    }
                    (n = a("./MediaTagReader")), a("./MediaFileReader");
                    var S = a("./ID3v2FrameReader");
                    a = (function (h) {
                      function o() {
                        if (!(this instanceof o))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                        return u.apply(this, arguments);
                      }
                      v(o, h);
                      var u = s(o);
                      return (
                        p(
                          o,
                          [
                            {
                              key: "_loadData",
                              value: function (_, w) {
                                _.loadRange([6, 9], {
                                  onSuccess: function () {
                                    _.loadRange(
                                      [
                                        0,
                                        10 + _.getSynchsafeInteger32At(6) - 1,
                                      ],
                                      w
                                    );
                                  },
                                  onError: w.onError,
                                });
                              },
                            },
                            {
                              key: "_parseData",
                              value: function (_, w) {
                                var y,
                                  T = 0,
                                  I = _.getByteAt(T + 3);
                                if (4 < I)
                                  return {
                                    type: "ID3",
                                    version: ">2.4",
                                    tags: {},
                                  };
                                var M = _.getByteAt(T + 4),
                                  O = _.isBitSetAt(T + 5, 7),
                                  U = _.isBitSetAt(T + 5, 6),
                                  J = _.isBitSetAt(T + 5, 5),
                                  C = _.getSynchsafeInteger32At(T + 6);
                                if (((T += 10), U))
                                  if (I === 4) {
                                    var D = _.getSynchsafeInteger32At(T);
                                    T += D;
                                  } else (D = _.getLongAt(T, !0)), (T += D + 4);
                                (D = {
                                  type: "ID3",
                                  version: "2." + I + "." + M,
                                  major: I,
                                  revision: M,
                                  flags: {
                                    unsynchronisation: O,
                                    extended_header: U,
                                    experimental_indicator: J,
                                    footer_present: !1,
                                  },
                                  size: C,
                                  tags: {},
                                }),
                                  w && (y = this._expandShortcutTags(w)),
                                  (w = C + 10),
                                  D.flags.unsynchronisation &&
                                    ((_ = S.getUnsyncFileReader(_, T, C)),
                                    (T = 0),
                                    (w = _.getSize())),
                                  (_ = S.readFrames(T, w, _, D, y));
                                for (var k in c)
                                  c.hasOwnProperty(k) &&
                                    (y = this._getFrameData(_, c[k])) &&
                                    (D.tags[k] = y);
                                for (var V in _)
                                  _.hasOwnProperty(V) && (D.tags[V] = _[V]);
                                return D;
                              },
                            },
                            {
                              key: "_getFrameData",
                              value: function (_, w) {
                                for (var y = 0, T; (T = w[y]); y++)
                                  if (T in _)
                                    return (
                                      (_ =
                                        _[T] instanceof Array ? _[T][0] : _[T]),
                                      _.data
                                    );
                              },
                            },
                            {
                              key: "getShortcuts",
                              value: function () {
                                return c;
                              },
                            },
                          ],
                          [
                            {
                              key: "getTagIdentifierByteRange",
                              value: function () {
                                return { offset: 0, length: 10 };
                              },
                            },
                            {
                              key: "canReadTagFormat",
                              value: function (_) {
                                return (
                                  String.fromCharCode.apply(
                                    String,
                                    _.slice(0, 3)
                                  ) === "ID3"
                                );
                              },
                            },
                          ]
                        ),
                        o
                      );
                    })(n);
                    var c = {
                      title: ["TIT2", "TT2"],
                      artist: ["TPE1", "TP1"],
                      album: ["TALB", "TAL"],
                      year: ["TYER", "TYE"],
                      comment: ["COMM", "COM"],
                      track: ["TRCK", "TRK"],
                      genre: ["TCON", "TCO"],
                      picture: ["APIC", "PIC"],
                      lyrics: ["USLT", "ULT"],
                    };
                    i.exports = a;
                  },
                  {
                    "./ID3v2FrameReader": 8,
                    "./MediaFileReader": 11,
                    "./MediaTagReader": 12,
                  },
                ],
                10: [
                  function (a, i, n) {
                    function d(o) {
                      "@babel/helpers - typeof";
                      return (
                        (d =
                          typeof Symbol == "function" &&
                          typeof Symbol.iterator == "symbol"
                            ? function (u) {
                                return typeof u;
                              }
                            : function (u) {
                                return u &&
                                  typeof Symbol == "function" &&
                                  u.constructor === Symbol &&
                                  u !== Symbol.prototype
                                  ? "symbol"
                                  : typeof u;
                              }),
                        d(o)
                      );
                    }
                    function l(o, u) {
                      for (var _ = 0; _ < u.length; _++) {
                        var w = u[_];
                        (w.enumerable = w.enumerable || !1),
                          (w.configurable = !0),
                          "value" in w && (w.writable = !0),
                          Object.defineProperty(o, w.key, w);
                      }
                    }
                    function p(o, u, _) {
                      return u && l(o.prototype, u), _ && l(o, _), o;
                    }
                    function v(o, u) {
                      if (typeof u != "function" && u !== null)
                        throw new TypeError(
                          "Super expression must either be null or a function"
                        );
                      (o.prototype = Object.create(u && u.prototype, {
                        constructor: {
                          value: o,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        u && x(o, u);
                    }
                    function x(o, u) {
                      return (
                        (x =
                          Object.setPrototypeOf ||
                          function (_, w) {
                            return (_.__proto__ = w), _;
                          }),
                        x(o, u)
                      );
                    }
                    function s(o) {
                      var u = b();
                      return function () {
                        var _ = f(o);
                        if (u) {
                          var w = f(this).constructor;
                          _ = Reflect.construct(_, arguments, w);
                        } else _ = _.apply(this, arguments);
                        if (
                          !_ ||
                          (d(_) !== "object" && typeof _ != "function")
                        ) {
                          if (this === void 0)
                            throw new ReferenceError(
                              "this hasn't been initialised - super() hasn't been called"
                            );
                          _ = this;
                        }
                        return _;
                      };
                    }
                    function b() {
                      if (
                        typeof Reflect > "u" ||
                        !Reflect.construct ||
                        Reflect.construct.sham
                      )
                        return !1;
                      if (typeof Proxy == "function") return !0;
                      try {
                        return (
                          Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                          ),
                          !0
                        );
                      } catch {
                        return !1;
                      }
                    }
                    function f(o) {
                      return (
                        (f = Object.setPrototypeOf
                          ? Object.getPrototypeOf
                          : function (u) {
                              return u.__proto__ || Object.getPrototypeOf(u);
                            }),
                        f(o)
                      );
                    }
                    (n = a("./MediaTagReader")),
                      a("./MediaFileReader"),
                      (a = (function (o) {
                        function u() {
                          if (!(this instanceof u))
                            throw new TypeError(
                              "Cannot call a class as a function"
                            );
                          return _.apply(this, arguments);
                        }
                        v(u, o);
                        var _ = s(u);
                        return (
                          p(
                            u,
                            [
                              {
                                key: "_loadData",
                                value: function (w, y) {
                                  var T = this;
                                  w.loadRange([0, 16], {
                                    onSuccess: function () {
                                      T._loadAtom(w, 0, "", y);
                                    },
                                    onError: y.onError,
                                  });
                                },
                              },
                              {
                                key: "_loadAtom",
                                value: function (w, y, T, I) {
                                  if (y >= w.getSize()) I.onSuccess();
                                  else {
                                    var M = this,
                                      O = w.getLongAt(y, !0);
                                    if (O == 0 || isNaN(O)) I.onSuccess();
                                    else {
                                      var U = w.getStringAt(y + 4, 4);
                                      if (this._isContainerAtom(U)) {
                                        U == "meta" && (y += 4);
                                        var J = (T ? T + "." : "") + U;
                                        J === "moov.udta.meta.ilst"
                                          ? w.loadRange([y, y + O], I)
                                          : w.loadRange([y + 8, y + 8 + 8], {
                                              onSuccess: function () {
                                                M._loadAtom(w, y + 8, J, I);
                                              },
                                              onError: I.onError,
                                            });
                                      } else
                                        w.loadRange([y + O, y + O + 8], {
                                          onSuccess: function () {
                                            M._loadAtom(w, y + O, T, I);
                                          },
                                          onError: I.onError,
                                        });
                                    }
                                  }
                                },
                              },
                              {
                                key: "_isContainerAtom",
                                value: function (w) {
                                  return (
                                    0 <=
                                    ["moov", "udta", "meta", "ilst"].indexOf(w)
                                  );
                                },
                              },
                              {
                                key: "_canReadAtom",
                                value: function (w) {
                                  return w !== "----";
                                },
                              },
                              {
                                key: "_parseData",
                                value: function (w, y) {
                                  var T = {};
                                  (y = this._expandShortcutTags(y)),
                                    this._readAtom(T, w, 0, w.getSize(), y);
                                  for (var I in h)
                                    h.hasOwnProperty(I) &&
                                      (y = T[h[I]]) &&
                                      (T[I] =
                                        I === "track" ? y.data.track : y.data);
                                  return {
                                    type: "MP4",
                                    ftyp: w.getStringAt(8, 4),
                                    version: w.getLongAt(12, !0),
                                    tags: T,
                                  };
                                },
                              },
                              {
                                key: "_readAtom",
                                value: function (w, y, T, I, M, O, U) {
                                  U = U === void 0 ? "" : U + "  ";
                                  for (var J = T; J < T + I; ) {
                                    var C = y.getLongAt(J, !0);
                                    if (C == 0) break;
                                    var D = y.getStringAt(J + 4, 4);
                                    if (this._isContainerAtom(D)) {
                                      D == "meta" && (J += 4),
                                        this._readAtom(
                                          w,
                                          y,
                                          J + 8,
                                          C - 8,
                                          M,
                                          (O ? O + "." : "") + D,
                                          U
                                        );
                                      break;
                                    }
                                    (!M || 0 <= M.indexOf(D)) &&
                                      O === "moov.udta.meta.ilst" &&
                                      this._canReadAtom(D) &&
                                      (w[D] = this._readMetadataAtom(y, J)),
                                      (J += C);
                                  }
                                },
                              },
                              {
                                key: "_readMetadataAtom",
                                value: function (w, y) {
                                  var T = w.getLongAt(y, !0),
                                    I = w.getStringAt(y + 4, 4),
                                    M = w.getInteger24At(y + 16 + 1, !0);
                                  if (((M = S[M]), I == "trkn"))
                                    var O = {
                                      track: w.getShortAt(y + 16 + 10, !0),
                                      total: w.getShortAt(y + 16 + 14, !0),
                                    };
                                  else if (I == "disk")
                                    O = {
                                      disk: w.getShortAt(y + 16 + 10, !0),
                                      total: w.getShortAt(y + 16 + 14, !0),
                                    };
                                  else {
                                    y += 24;
                                    var U = T - 24;
                                    switch (
                                      (I === "covr" &&
                                        M === "uint8" &&
                                        (M = "jpeg"),
                                      M)
                                    ) {
                                      case "text":
                                        O = w
                                          .getStringWithCharsetAt(y, U, "utf-8")
                                          .toString();
                                        break;
                                      case "uint8":
                                        O = w.getShortAt(y, !1);
                                        break;
                                      case "int":
                                      case "uint":
                                        O = (
                                          M == "int"
                                            ? U == 1
                                              ? w.getSByteAt
                                              : U == 2
                                              ? w.getSShortAt
                                              : U == 4
                                              ? w.getSLongAt
                                              : w.getLongAt
                                            : U == 1
                                            ? w.getByteAt
                                            : U == 2
                                            ? w.getShortAt
                                            : w.getLongAt
                                        ).call(w, y + (U == 8 ? 4 : 0), !0);
                                        break;
                                      case "jpeg":
                                      case "png":
                                        O = {
                                          format: "image/" + M,
                                          data: w.getBytesAt(y, U),
                                        };
                                    }
                                  }
                                  return {
                                    id: I,
                                    size: T,
                                    description: c[I] || "Unknown",
                                    data: O,
                                  };
                                },
                              },
                              {
                                key: "getShortcuts",
                                value: function () {
                                  return h;
                                },
                              },
                            ],
                            [
                              {
                                key: "getTagIdentifierByteRange",
                                value: function () {
                                  return { offset: 0, length: 16 };
                                },
                              },
                              {
                                key: "canReadTagFormat",
                                value: function (w) {
                                  return (
                                    String.fromCharCode.apply(
                                      String,
                                      w.slice(4, 8)
                                    ) === "ftyp"
                                  );
                                },
                              },
                            ]
                          ),
                          u
                        );
                      })(n));
                    var S = {
                        0: "uint8",
                        1: "text",
                        13: "jpeg",
                        14: "png",
                        21: "int",
                        22: "uint",
                      },
                      c = {
                        "©alb": "Album",
                        "©ART": "Artist",
                        aART: "Album Artist",
                        "©day": "Release Date",
                        "©nam": "Title",
                        "©gen": "Genre",
                        gnre: "Genre",
                        trkn: "Track Number",
                        "©wrt": "Composer",
                        "©too": "Encoding Tool",
                        "©enc": "Encoded By",
                        cprt: "Copyright",
                        covr: "Cover Art",
                        "©grp": "Grouping",
                        keyw: "Keywords",
                        "©lyr": "Lyrics",
                        "©cmt": "Comment",
                        tmpo: "Tempo",
                        cpil: "Compilation",
                        disk: "Disc Number",
                        tvsh: "TV Show Name",
                        tven: "TV Episode ID",
                        tvsn: "TV Season",
                        tves: "TV Episode",
                        tvnn: "TV Network",
                        desc: "Description",
                        ldes: "Long Description",
                        sonm: "Sort Name",
                        soar: "Sort Artist",
                        soaa: "Sort Album",
                        soco: "Sort Composer",
                        sosn: "Sort Show",
                        purd: "Purchase Date",
                        pcst: "Podcast",
                        purl: "Podcast URL",
                        catg: "Category",
                        hdvd: "HD Video",
                        stik: "Media Type",
                        rtng: "Content Rating",
                        pgap: "Gapless Playback",
                        apID: "Purchase Account",
                        sfID: "Country Code",
                        atID: "Artist ID",
                        cnID: "Catalog ID",
                        plID: "Collection ID",
                        geID: "Genre ID",
                        "xid ": "Vendor Information",
                        flvr: "Codec Flavor",
                      },
                      h = {
                        title: "©nam",
                        artist: "©ART",
                        album: "©alb",
                        year: "©day",
                        comment: "©cmt",
                        track: "trkn",
                        genre: "©gen",
                        picture: "covr",
                        lyrics: "©lyr",
                      };
                    i.exports = a;
                  },
                  { "./MediaFileReader": 11, "./MediaTagReader": 12 },
                ],
                11: [
                  function (a, i, n) {
                    function d(x, s) {
                      for (var b = 0; b < s.length; b++) {
                        var f = s[b];
                        (f.enumerable = f.enumerable || !1),
                          (f.configurable = !0),
                          "value" in f && (f.writable = !0),
                          Object.defineProperty(x, f.key, f);
                      }
                    }
                    function l(x, s, b) {
                      return s && d(x.prototype, s), b && d(x, b), x;
                    }
                    function p(x, s, b) {
                      return (
                        s in x
                          ? Object.defineProperty(x, s, {
                              value: b,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (x[s] = b),
                        x
                      );
                    }
                    var v = a("./StringUtils");
                    (a = (function () {
                      function x(s) {
                        if (!(this instanceof x))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                        p(this, "_isInitialized", void 0),
                          p(this, "_size", void 0),
                          (this._isInitialized = !1),
                          (this._size = 0);
                      }
                      return (
                        l(
                          x,
                          [
                            {
                              key: "init",
                              value: function (s) {
                                var b = this;
                                if (this._isInitialized)
                                  setTimeout(s.onSuccess, 1);
                                else
                                  return this._init({
                                    onSuccess: function () {
                                      (b._isInitialized = !0), s.onSuccess();
                                    },
                                    onError: s.onError,
                                  });
                              },
                            },
                            {
                              key: "_init",
                              value: function (s) {
                                throw Error("Must implement init function");
                              },
                            },
                            {
                              key: "loadRange",
                              value: function (s, b) {
                                throw Error(
                                  "Must implement loadRange function"
                                );
                              },
                            },
                            {
                              key: "getSize",
                              value: function () {
                                if (!this._isInitialized)
                                  throw Error("init() must be called first.");
                                return this._size;
                              },
                            },
                            {
                              key: "getByteAt",
                              value: function (s) {
                                throw Error(
                                  "Must implement getByteAt function"
                                );
                              },
                            },
                            {
                              key: "getBytesAt",
                              value: function (s, b) {
                                for (var f = Array(b), S = 0; S < b; S++)
                                  f[S] = this.getByteAt(s + S);
                                return f;
                              },
                            },
                            {
                              key: "isBitSetAt",
                              value: function (s, b) {
                                return (this.getByteAt(s) & (1 << b)) != 0;
                              },
                            },
                            {
                              key: "getSByteAt",
                              value: function (s) {
                                return (
                                  (s = this.getByteAt(s)), 127 < s ? s - 256 : s
                                );
                              },
                            },
                            {
                              key: "getShortAt",
                              value: function (s, b) {
                                return (
                                  (s = b
                                    ? (this.getByteAt(s) << 8) +
                                      this.getByteAt(s + 1)
                                    : (this.getByteAt(s + 1) << 8) +
                                      this.getByteAt(s)),
                                  0 > s && (s += 65536),
                                  s
                                );
                              },
                            },
                            {
                              key: "getSShortAt",
                              value: function (s, b) {
                                return (
                                  (s = this.getShortAt(s, b)),
                                  32767 < s ? s - 65536 : s
                                );
                              },
                            },
                            {
                              key: "getLongAt",
                              value: function (s, b) {
                                var f = this.getByteAt(s),
                                  S = this.getByteAt(s + 1),
                                  c = this.getByteAt(s + 2);
                                return (
                                  (s = this.getByteAt(s + 3)),
                                  (b = b
                                    ? (((((f << 8) + S) << 8) + c) << 8) + s
                                    : (((((s << 8) + c) << 8) + S) << 8) + f),
                                  0 > b && (b += 4294967296),
                                  b
                                );
                              },
                            },
                            {
                              key: "getSLongAt",
                              value: function (s, b) {
                                return (
                                  (s = this.getLongAt(s, b)),
                                  2147483647 < s ? s - 4294967296 : s
                                );
                              },
                            },
                            {
                              key: "getInteger24At",
                              value: function (s, b) {
                                var f = this.getByteAt(s),
                                  S = this.getByteAt(s + 1);
                                return (
                                  (s = this.getByteAt(s + 2)),
                                  (b = b
                                    ? (((f << 8) + S) << 8) + s
                                    : (((s << 8) + S) << 8) + f),
                                  0 > b && (b += 16777216),
                                  b
                                );
                              },
                            },
                            {
                              key: "getStringAt",
                              value: function (s, b) {
                                for (
                                  var f = [], S = s, c = 0;
                                  S < s + b;
                                  S++, c++
                                )
                                  f[c] = String.fromCharCode(this.getByteAt(S));
                                return f.join("");
                              },
                            },
                            {
                              key: "getStringWithCharsetAt",
                              value: function (s, b, f) {
                                switch (
                                  ((s = this.getBytesAt(s, b)),
                                  (f || "").toLowerCase())
                                ) {
                                  case "utf-16":
                                  case "utf-16le":
                                  case "utf-16be":
                                    f = v.readUTF16String(s, f === "utf-16be");
                                    break;
                                  case "utf-8":
                                    f = v.readUTF8String(s);
                                    break;
                                  default:
                                    f = v.readNullTerminatedString(s);
                                }
                                return f;
                              },
                            },
                            {
                              key: "getCharAt",
                              value: function (s) {
                                return String.fromCharCode(this.getByteAt(s));
                              },
                            },
                            {
                              key: "getSynchsafeInteger32At",
                              value: function (s) {
                                var b = this.getByteAt(s),
                                  f = this.getByteAt(s + 1),
                                  S = this.getByteAt(s + 2);
                                return (
                                  (this.getByteAt(s + 3) & 127) |
                                  ((S & 127) << 7) |
                                  ((f & 127) << 14) |
                                  ((b & 127) << 21)
                                );
                              },
                            },
                          ],
                          [
                            {
                              key: "canReadFile",
                              value: function (s) {
                                throw Error(
                                  "Must implement canReadFile function"
                                );
                              },
                            },
                          ]
                        ),
                        x
                      );
                    })()),
                      (i.exports = a);
                  },
                  { "./StringUtils": 13 },
                ],
                12: [
                  function (a, i, n) {
                    function d(v, x) {
                      for (var s = 0; s < x.length; s++) {
                        var b = x[s];
                        (b.enumerable = b.enumerable || !1),
                          (b.configurable = !0),
                          "value" in b && (b.writable = !0),
                          Object.defineProperty(v, b.key, b);
                      }
                    }
                    function l(v, x, s) {
                      return x && d(v.prototype, x), s && d(v, s), v;
                    }
                    function p(v, x, s) {
                      return (
                        x in v
                          ? Object.defineProperty(v, x, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (v[x] = s),
                        v
                      );
                    }
                    a("./MediaFileReader"),
                      (a = (function () {
                        function v(x) {
                          if (!(this instanceof v))
                            throw new TypeError(
                              "Cannot call a class as a function"
                            );
                          p(this, "_mediaFileReader", void 0),
                            p(this, "_tags", void 0),
                            (this._mediaFileReader = x),
                            (this._tags = null);
                        }
                        return (
                          l(
                            v,
                            [
                              {
                                key: "setTagsToRead",
                                value: function (x) {
                                  return (this._tags = x), this;
                                },
                              },
                              {
                                key: "read",
                                value: function (x) {
                                  var s = this;
                                  this._mediaFileReader.init({
                                    onSuccess: function () {
                                      s._loadData(s._mediaFileReader, {
                                        onSuccess: function () {
                                          try {
                                            var b = s._parseData(
                                              s._mediaFileReader,
                                              s._tags
                                            );
                                          } catch (f) {
                                            if (x.onError) {
                                              x.onError({
                                                type: "parseData",
                                                info: f.message,
                                              });
                                              return;
                                            }
                                          }
                                          x.onSuccess(b);
                                        },
                                        onError: x.onError,
                                      });
                                    },
                                    onError: x.onError,
                                  });
                                },
                              },
                              {
                                key: "getShortcuts",
                                value: function () {
                                  return {};
                                },
                              },
                              {
                                key: "_loadData",
                                value: function (x, s) {
                                  throw Error(
                                    "Must implement _loadData function"
                                  );
                                },
                              },
                              {
                                key: "_parseData",
                                value: function (x, s) {
                                  throw Error(
                                    "Must implement _parseData function"
                                  );
                                },
                              },
                              {
                                key: "_expandShortcutTags",
                                value: function (x) {
                                  if (!x) return null;
                                  for (
                                    var s = [],
                                      b = this.getShortcuts(),
                                      f = 0,
                                      S;
                                    (S = x[f]);
                                    f++
                                  )
                                    s = s.concat(b[S] || [S]);
                                  return s;
                                },
                              },
                            ],
                            [
                              {
                                key: "getTagIdentifierByteRange",
                                value: function () {
                                  throw Error("Must implement");
                                },
                              },
                              {
                                key: "canReadTagFormat",
                                value: function (x) {
                                  throw Error("Must implement");
                                },
                              },
                            ]
                          ),
                          v
                        );
                      })()),
                      (i.exports = a);
                  },
                  { "./MediaFileReader": 11 },
                ],
                13: [
                  function (a, i, n) {
                    function d(x, s) {
                      for (var b = 0; b < s.length; b++) {
                        var f = s[b];
                        (f.enumerable = f.enumerable || !1),
                          (f.configurable = !0),
                          "value" in f && (f.writable = !0),
                          Object.defineProperty(x, f.key, f);
                      }
                    }
                    function l(x, s, b) {
                      return s && d(x.prototype, s), x;
                    }
                    function p(x, s, b) {
                      return (
                        s in x
                          ? Object.defineProperty(x, s, {
                              value: b,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (x[s] = b),
                        x
                      );
                    }
                    var v = (function () {
                      function x(s, b) {
                        if (!(this instanceof x))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                        p(this, "_value", void 0),
                          p(this, "bytesReadCount", void 0),
                          p(this, "length", void 0),
                          (this._value = s),
                          (this.bytesReadCount = b),
                          (this.length = s.length);
                      }
                      return (
                        l(x, [
                          {
                            key: "toString",
                            value: function () {
                              return this._value;
                            },
                          },
                        ]),
                        x
                      );
                    })();
                    i.exports = {
                      readUTF16String: function (x, s, b) {
                        var f = 0,
                          S = 1,
                          c = 0;
                        (b = Math.min(b || x.length, x.length)),
                          x[0] == 254 && x[1] == 255
                            ? ((s = !0), (f = 2))
                            : x[0] == 255 && x[1] == 254 && ((s = !1), (f = 2)),
                          s && ((S = 0), (c = 1)),
                          (s = []);
                        for (var h = 0; f < b; h++) {
                          var o = x[f + S],
                            u = (o << 8) + x[f + c];
                          if (((f += 2), u == 0)) break;
                          216 > o || 224 <= o
                            ? (s[h] = String.fromCharCode(u))
                            : ((o = (x[f + S] << 8) + x[f + c]),
                              (f += 2),
                              (s[h] = String.fromCharCode(u, o)));
                        }
                        return new v(s.join(""), f);
                      },
                      readUTF8String: function (x, s) {
                        var b = 0;
                        (s = Math.min(s || x.length, x.length)),
                          x[0] == 239 && x[1] == 187 && x[2] == 191 && (b = 3);
                        for (var f = [], S = 0; b < s; S++) {
                          var c = x[b++];
                          if (c == 0) break;
                          if (128 > c) f[S] = String.fromCharCode(c);
                          else if (194 <= c && 224 > c) {
                            var h = x[b++];
                            f[S] = String.fromCharCode(
                              ((c & 31) << 6) + (h & 63)
                            );
                          } else if (224 <= c && 240 > c) {
                            h = x[b++];
                            var o = x[b++];
                            f[S] = String.fromCharCode(
                              ((c & 255) << 12) + ((h & 63) << 6) + (o & 63)
                            );
                          } else if (240 <= c && 245 > c) {
                            (h = x[b++]), (o = x[b++]);
                            var u = x[b++];
                            (o =
                              ((c & 7) << 18) +
                              ((h & 63) << 12) +
                              ((o & 63) << 6) +
                              (u & 63) -
                              65536),
                              (f[S] = String.fromCharCode(
                                (o >> 10) + 55296,
                                (o & 1023) + 56320
                              ));
                          }
                        }
                        return new v(f.join(""), b);
                      },
                      readNullTerminatedString: function (x, s) {
                        var b = [];
                        s = s || x.length;
                        for (var f = 0; f < s; ) {
                          var S = x[f++];
                          if (S == 0) break;
                          b[f - 1] = String.fromCharCode(S);
                        }
                        return new v(b.join(""), f);
                      },
                    };
                  },
                  {},
                ],
                14: [
                  function (a, i, n) {
                    function d(o) {
                      "@babel/helpers - typeof";
                      return (
                        (d =
                          typeof Symbol == "function" &&
                          typeof Symbol.iterator == "symbol"
                            ? function (u) {
                                return typeof u;
                              }
                            : function (u) {
                                return u &&
                                  typeof Symbol == "function" &&
                                  u.constructor === Symbol &&
                                  u !== Symbol.prototype
                                  ? "symbol"
                                  : typeof u;
                              }),
                        d(o)
                      );
                    }
                    function l(o, u) {
                      for (var _ = 0; _ < u.length; _++) {
                        var w = u[_];
                        (w.enumerable = w.enumerable || !1),
                          (w.configurable = !0),
                          "value" in w && (w.writable = !0),
                          Object.defineProperty(o, w.key, w);
                      }
                    }
                    function p(o, u, _) {
                      return u && l(o.prototype, u), _ && l(o, _), o;
                    }
                    function v(o, u) {
                      if (typeof u != "function" && u !== null)
                        throw new TypeError(
                          "Super expression must either be null or a function"
                        );
                      (o.prototype = Object.create(u && u.prototype, {
                        constructor: {
                          value: o,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        u && x(o, u);
                    }
                    function x(o, u) {
                      return (
                        (x =
                          Object.setPrototypeOf ||
                          function (_, w) {
                            return (_.__proto__ = w), _;
                          }),
                        x(o, u)
                      );
                    }
                    function s(o) {
                      var u = f();
                      return function () {
                        var _ = S(o);
                        if (u) {
                          var w = S(this).constructor;
                          _ = Reflect.construct(_, arguments, w);
                        } else _ = _.apply(this, arguments);
                        return (
                          (_ =
                            !_ || (d(_) !== "object" && typeof _ != "function")
                              ? b(this)
                              : _),
                          _
                        );
                      };
                    }
                    function b(o) {
                      if (o === void 0)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return o;
                    }
                    function f() {
                      if (
                        typeof Reflect > "u" ||
                        !Reflect.construct ||
                        Reflect.construct.sham
                      )
                        return !1;
                      if (typeof Proxy == "function") return !0;
                      try {
                        return (
                          Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                          ),
                          !0
                        );
                      } catch {
                        return !1;
                      }
                    }
                    function S(o) {
                      return (
                        (S = Object.setPrototypeOf
                          ? Object.getPrototypeOf
                          : function (u) {
                              return u.__proto__ || Object.getPrototypeOf(u);
                            }),
                        S(o)
                      );
                    }
                    function c(o, u, _) {
                      return (
                        u in o
                          ? Object.defineProperty(o, u, {
                              value: _,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (o[u] = _),
                        o
                      );
                    }
                    var h = a("./ChunkedFileData");
                    (n = (function (o) {
                      function u(w) {
                        if (!(this instanceof u))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                        var y = _.call(this);
                        return (
                          c(b(y), "_url", void 0),
                          c(b(y), "_fileData", void 0),
                          (y._url = w),
                          (y._fileData = new h()),
                          y
                        );
                      }
                      v(u, o);
                      var _ = s(u);
                      return (
                        p(
                          u,
                          [
                            {
                              key: "_init",
                              value: function (w) {
                                u._config.avoidHeadRequests
                                  ? this._fetchSizeWithGetRequest(w)
                                  : this._fetchSizeWithHeadRequest(w);
                              },
                            },
                            {
                              key: "_fetchSizeWithHeadRequest",
                              value: function (w) {
                                var y = this;
                                this._makeXHRRequest("HEAD", null, {
                                  onSuccess: function (T) {
                                    (T = y._parseContentLength(T))
                                      ? ((y._size = T), w.onSuccess())
                                      : y._fetchSizeWithGetRequest(w);
                                  },
                                  onError: w.onError,
                                });
                              },
                            },
                            {
                              key: "_fetchSizeWithGetRequest",
                              value: function (w) {
                                var y = this,
                                  T = this._roundRangeToChunkMultiple([0, 0]);
                                this._makeXHRRequest("GET", T, {
                                  onSuccess: function (I) {
                                    var M = y._parseContentRange(I);
                                    if (
                                      ((I = y._getXhrResponseContent(I)), M)
                                    ) {
                                      if (M.instanceLength == null) {
                                        y._fetchEntireFile(w);
                                        return;
                                      }
                                      y._size = M.instanceLength;
                                    } else y._size = I.length;
                                    y._fileData.addData(0, I), w.onSuccess();
                                  },
                                  onError: w.onError,
                                });
                              },
                            },
                            {
                              key: "_fetchEntireFile",
                              value: function (w) {
                                var y = this;
                                this._makeXHRRequest("GET", null, {
                                  onSuccess: function (T) {
                                    (T = y._getXhrResponseContent(T)),
                                      (y._size = T.length),
                                      y._fileData.addData(0, T),
                                      w.onSuccess();
                                  },
                                  onError: w.onError,
                                });
                              },
                            },
                            {
                              key: "_getXhrResponseContent",
                              value: function (w) {
                                return w.responseBody || w.responseText || "";
                              },
                            },
                            {
                              key: "_parseContentLength",
                              value: function (w) {
                                return (
                                  (w = this._getResponseHeader(
                                    w,
                                    "Content-Length"
                                  )),
                                  w == null ? w : parseInt(w, 10)
                                );
                              },
                            },
                            {
                              key: "_parseContentRange",
                              value: function (w) {
                                if (
                                  (w = this._getResponseHeader(
                                    w,
                                    "Content-Range"
                                  ))
                                ) {
                                  var y = w.match(
                                    /bytes (\d+)-(\d+)\/(?:(\d+)|\*)/i
                                  );
                                  if (!y)
                                    throw Error(
                                      "FIXME: Unknown Content-Range syntax: " +
                                        w
                                    );
                                  return {
                                    firstBytePosition: parseInt(y[1], 10),
                                    lastBytePosition: parseInt(y[2], 10),
                                    instanceLength: y[3]
                                      ? parseInt(y[3], 10)
                                      : null,
                                  };
                                }
                                return null;
                              },
                            },
                            {
                              key: "loadRange",
                              value: function (w, y) {
                                var T = this;
                                T._fileData.hasDataRange(
                                  w[0],
                                  Math.min(T._size, w[1])
                                )
                                  ? setTimeout(y.onSuccess, 1)
                                  : ((w = this._roundRangeToChunkMultiple(w)),
                                    (w[1] = Math.min(T._size, w[1])),
                                    this._makeXHRRequest("GET", w, {
                                      onSuccess: function (I) {
                                        (I = T._getXhrResponseContent(I)),
                                          T._fileData.addData(w[0], I),
                                          y.onSuccess();
                                      },
                                      onError: y.onError,
                                    }));
                              },
                            },
                            {
                              key: "_roundRangeToChunkMultiple",
                              value: function (w) {
                                return [
                                  w[0],
                                  w[0] +
                                    1024 * Math.ceil((w[1] - w[0] + 1) / 1024) -
                                    1,
                                ];
                              },
                            },
                            {
                              key: "_makeXHRRequest",
                              value: function (w, y, T) {
                                var I = this._createXHRObject();
                                I.open(w, this._url);
                                var M = function () {
                                  I.status === 200 || I.status === 206
                                    ? T.onSuccess(I)
                                    : T.onError &&
                                      T.onError({
                                        type: "xhr",
                                        info:
                                          "Unexpected HTTP status " +
                                          I.status +
                                          ".",
                                        xhr: I,
                                      }),
                                    (I = null);
                                };
                                typeof I.onload < "u"
                                  ? ((I.onload = M),
                                    (I.onerror = function () {
                                      T.onError &&
                                        T.onError({
                                          type: "xhr",
                                          info: "Generic XHR error, check xhr object.",
                                          xhr: I,
                                        });
                                    }))
                                  : (I.onreadystatechange = function () {
                                      I.readyState === 4 && M();
                                    }),
                                  u._config.timeoutInSec &&
                                    ((I.timeout = 1e3 * u._config.timeoutInSec),
                                    (I.ontimeout = function () {
                                      T.onError &&
                                        T.onError({
                                          type: "xhr",
                                          info:
                                            "Timeout after " +
                                            I.timeout / 1e3 +
                                            "s. Use jsmediatags.Config.setXhrTimeout to override.",
                                          xhr: I,
                                        });
                                    })),
                                  I.overrideMimeType(
                                    "text/plain; charset=x-user-defined"
                                  ),
                                  y &&
                                    this._setRequestHeader(
                                      I,
                                      "Range",
                                      "bytes=" + y[0] + "-" + y[1]
                                    ),
                                  this._setRequestHeader(
                                    I,
                                    "If-Modified-Since",
                                    "Sat, 01 Jan 1970 00:00:00 GMT"
                                  ),
                                  I.send(null);
                              },
                            },
                            {
                              key: "_setRequestHeader",
                              value: function (w, y, T) {
                                0 >
                                  u._config.disallowedXhrHeaders.indexOf(
                                    y.toLowerCase()
                                  ) && w.setRequestHeader(y, T);
                              },
                            },
                            {
                              key: "_hasResponseHeader",
                              value: function (w, y) {
                                if (((w = w.getAllResponseHeaders()), !w))
                                  return !1;
                                w = w.split(`\r
`);
                                for (var T = [], I = 0; I < w.length; I++)
                                  T[I] = w[I].split(":")[0].toLowerCase();
                                return 0 <= T.indexOf(y.toLowerCase());
                              },
                            },
                            {
                              key: "_getResponseHeader",
                              value: function (w, y) {
                                return this._hasResponseHeader(w, y)
                                  ? w.getResponseHeader(y)
                                  : null;
                              },
                            },
                            {
                              key: "getByteAt",
                              value: function (w) {
                                return (
                                  this._fileData.getByteAt(w).charCodeAt(0) &
                                  255
                                );
                              },
                            },
                            {
                              key: "_isWebWorker",
                              value: function () {
                                return (
                                  typeof WorkerGlobalScope < "u" &&
                                  self instanceof WorkerGlobalScope
                                );
                              },
                            },
                            {
                              key: "_createXHRObject",
                              value: function () {
                                if (typeof window > "u" && !this._isWebWorker())
                                  return new (a("xhr2").XMLHttpRequest)();
                                if (typeof XMLHttpRequest < "u")
                                  return new XMLHttpRequest();
                                throw Error("XMLHttpRequest is not supported");
                              },
                            },
                          ],
                          [
                            {
                              key: "canReadFile",
                              value: function (w) {
                                return (
                                  typeof w == "string" &&
                                  /^[a-z]+:\/\//i.test(w)
                                );
                              },
                            },
                            {
                              key: "setConfig",
                              value: function (w) {
                                for (var y in w)
                                  w.hasOwnProperty(y) &&
                                    (this._config[y] = w[y]);
                                for (
                                  w = this._config.disallowedXhrHeaders, y = 0;
                                  y < w.length;
                                  y++
                                )
                                  w[y] = w[y].toLowerCase();
                              },
                            },
                          ]
                        ),
                        u
                      );
                    })(a("./MediaFileReader"))),
                      c(n, "_config", void 0),
                      (n._config = {
                        avoidHeadRequests: !1,
                        disallowedXhrHeaders: [],
                        timeoutInSec: 30,
                      }),
                      (i.exports = n);
                  },
                  { "./ChunkedFileData": 5, "./MediaFileReader": 11, xhr2: 2 },
                ],
                15: [
                  function (a, i, n) {
                    function d(y, T) {
                      if (!(y instanceof T))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    }
                    function l(y, T) {
                      for (var I = 0; I < T.length; I++) {
                        var M = T[I];
                        (M.enumerable = M.enumerable || !1),
                          (M.configurable = !0),
                          "value" in M && (M.writable = !0),
                          Object.defineProperty(y, M.key, M);
                      }
                    }
                    function p(y, T, I) {
                      return T && l(y.prototype, T), I && l(y, I), y;
                    }
                    function v(y, T, I) {
                      return (
                        T in y
                          ? Object.defineProperty(y, T, {
                              value: I,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (y[T] = I),
                        y
                      );
                    }
                    function x(y, T) {
                      var I =
                        0 > y.offset &&
                        (-y.offset > T || 0 < y.offset + y.length);
                      return !(
                        (0 <= y.offset && y.offset + y.length >= T) ||
                        I
                      );
                    }
                    a("./MediaFileReader");
                    var s = a("./XhrFileReader"),
                      b = a("./BlobFileReader"),
                      f = a("./ArrayFileReader");
                    a("./MediaTagReader");
                    var S = a("./ID3v1TagReader"),
                      c = a("./ID3v2TagReader"),
                      h = a("./MP4TagReader"),
                      o = a("./FLACTagReader"),
                      u = [],
                      _ = [],
                      w = (function () {
                        function y(T) {
                          d(this, y),
                            v(this, "_file", void 0),
                            v(this, "_tagsToRead", void 0),
                            v(this, "_fileReader", void 0),
                            v(this, "_tagReader", void 0),
                            (this._file = T);
                        }
                        return (
                          p(y, [
                            {
                              key: "setTagsToRead",
                              value: function (T) {
                                return (this._tagsToRead = T), this;
                              },
                            },
                            {
                              key: "setFileReader",
                              value: function (T) {
                                return (this._fileReader = T), this;
                              },
                            },
                            {
                              key: "setTagReader",
                              value: function (T) {
                                return (this._tagReader = T), this;
                              },
                            },
                            {
                              key: "read",
                              value: function (T) {
                                var I = new (this._getFileReader())(this._file),
                                  M = this;
                                I.init({
                                  onSuccess: function () {
                                    M._getTagReader(I, {
                                      onSuccess: function (O) {
                                        new O(I)
                                          .setTagsToRead(M._tagsToRead)
                                          .read(T);
                                      },
                                      onError: T.onError,
                                    });
                                  },
                                  onError: T.onError,
                                });
                              },
                            },
                            {
                              key: "_getFileReader",
                              value: function () {
                                return this._fileReader
                                  ? this._fileReader
                                  : this._findFileReader();
                              },
                            },
                            {
                              key: "_findFileReader",
                              value: function () {
                                for (var T = 0; T < u.length; T++)
                                  if (u[T].canReadFile(this._file)) return u[T];
                                throw Error(
                                  "No suitable file reader found for " +
                                    this._file
                                );
                              },
                            },
                            {
                              key: "_getTagReader",
                              value: function (T, I) {
                                if (this._tagReader) {
                                  var M = this._tagReader;
                                  setTimeout(function () {
                                    I.onSuccess(M);
                                  }, 1);
                                } else this._findTagReader(T, I);
                              },
                            },
                            {
                              key: "_findTagReader",
                              value: function (T, I) {
                                for (
                                  var M = [], O = [], U = T.getSize(), J = 0;
                                  J < _.length;
                                  J++
                                ) {
                                  var C = _[J].getTagIdentifierByteRange();
                                  x(C, U) &&
                                    ((0 <= C.offset && C.offset < U / 2) ||
                                    (0 > C.offset && C.offset < -U / 2)
                                      ? M.push(_[J])
                                      : O.push(_[J]));
                                }
                                var D = !1;
                                (J = {
                                  onSuccess: function () {
                                    if (D) {
                                      for (var k = 0; k < _.length; k++) {
                                        var V =
                                          _[k].getTagIdentifierByteRange();
                                        if (x(V, U)) {
                                          try {
                                            var ee = T.getBytesAt(
                                              0 <= V.offset
                                                ? V.offset
                                                : V.offset + U,
                                              V.length
                                            );
                                          } catch (Z) {
                                            I.onError &&
                                              I.onError({
                                                type: "fileReader",
                                                info: Z.message,
                                              });
                                            return;
                                          }
                                          if (_[k].canReadTagFormat(ee)) {
                                            I.onSuccess(_[k]);
                                            return;
                                          }
                                        }
                                      }
                                      I.onError &&
                                        I.onError({
                                          type: "tagFormat",
                                          info: "No suitable tag reader found",
                                        });
                                    } else D = !0;
                                  },
                                  onError: I.onError,
                                }),
                                  this._loadTagIdentifierRanges(T, M, J),
                                  this._loadTagIdentifierRanges(T, O, J);
                              },
                            },
                            {
                              key: "_loadTagIdentifierRanges",
                              value: function (T, I, M) {
                                if (I.length === 0) setTimeout(M.onSuccess, 1);
                                else {
                                  for (
                                    var O = [Number.MAX_VALUE, 0],
                                      U = T.getSize(),
                                      J = 0;
                                    J < I.length;
                                    J++
                                  ) {
                                    var C = I[J].getTagIdentifierByteRange(),
                                      D =
                                        0 <= C.offset ? C.offset : C.offset + U;
                                    (C = D + C.length - 1),
                                      (O[0] = Math.min(D, O[0])),
                                      (O[1] = Math.max(C, O[1]));
                                  }
                                  T.loadRange(O, M);
                                }
                              },
                            },
                          ]),
                          y
                        );
                      })();
                    (n = (function () {
                      function y() {
                        d(this, y);
                      }
                      return (
                        p(y, null, [
                          {
                            key: "addFileReader",
                            value: function (T) {
                              return u.push(T), y;
                            },
                          },
                          {
                            key: "addTagReader",
                            value: function (T) {
                              return _.push(T), y;
                            },
                          },
                          {
                            key: "removeTagReader",
                            value: function (T) {
                              return (
                                (T = _.indexOf(T)), 0 <= T && _.splice(T, 1), y
                              );
                            },
                          },
                          {
                            key: "EXPERIMENTAL_avoidHeadRequests",
                            value: function () {
                              s.setConfig({ avoidHeadRequests: !0 });
                            },
                          },
                          {
                            key: "setDisallowedXhrHeaders",
                            value: function (T) {
                              s.setConfig({ disallowedXhrHeaders: T });
                            },
                          },
                          {
                            key: "setXhrTimeoutInSec",
                            value: function (T) {
                              s.setConfig({ timeoutInSec: T });
                            },
                          },
                        ]),
                        y
                      );
                    })()),
                      n
                        .addFileReader(s)
                        .addFileReader(b)
                        .addFileReader(f)
                        .addTagReader(c)
                        .addTagReader(S)
                        .addTagReader(h)
                        .addTagReader(o),
                      typeof process > "u" ||
                        process.browser ||
                        ((a =
                          typeof navigator < "u" &&
                          navigator.product === "ReactNative"
                            ? a("./ReactNativeFileReader")
                            : a("./NodeFileReader")),
                        n.addFileReader(a)),
                      (i.exports = {
                        read: function (y, T) {
                          new w(y).read(T);
                        },
                        Reader: w,
                        Config: n,
                      });
                  },
                  {
                    "./ArrayFileReader": 3,
                    "./BlobFileReader": 4,
                    "./FLACTagReader": 6,
                    "./ID3v1TagReader": 7,
                    "./ID3v2TagReader": 9,
                    "./MP4TagReader": 10,
                    "./MediaFileReader": 11,
                    "./MediaTagReader": 12,
                    "./NodeFileReader": 1,
                    "./ReactNativeFileReader": 1,
                    "./XhrFileReader": 14,
                  },
                ],
              },
              {},
              [15]
            )(15);
          });
      })(ba)),
    ba.exports
  );
}
var Pd = Nd();
const Md = So(Pd),
  Cr = "music_playlist",
  ja = "music_audio_",
  ws = "music_current_index";
function _s(e) {
  return new Promise((r) => {
    Md.read(e, {
      onSuccess(t) {
        const a = t.tags || {};
        let i = null;
        if (a.picture) {
          const { data: l, format: p } = a.picture,
            v = new Uint8Array(l);
          let x = "";
          for (let s = 0; s < v.length; s++) x += String.fromCharCode(v[s]);
          i = `data:${p};base64,${btoa(x)}`;
        }
        const n = a.title || "",
          d = a.artist || "";
        r({ title: n, artist: d, coverArt: i });
      },
      onError() {
        r({ title: "", artist: "", coverArt: null });
      },
    });
  });
}
function Od(e) {
  const r = e.replace(/\.[^.]+$/, "").trim(),
    t = [" - ", " — ", " – "];
  for (const a of t) {
    const i = r.indexOf(a);
    if (i > 0)
      return {
        artist: r.substring(0, i).trim(),
        title: r.substring(i + a.length).trim(),
      };
  }
  return { title: r, artist: "" };
}
function xs(e) {
  return new Promise((r) => {
    const t = URL.createObjectURL(e),
      a = new Audio();
    (a.preload = "metadata"),
      (a.onloadedmetadata = () => {
        r(isFinite(a.duration) ? a.duration : 0), URL.revokeObjectURL(t);
      }),
      (a.onerror = () => {
        r(0), URL.revokeObjectURL(t);
      }),
      (a.src = t);
  });
}
const Dd = 50 * 1024 * 1024;
async function Ld(e) {
  if (e.size > Dd)
    throw new Error(
      `音频文件过大（${Math.round(e.size / 1024 / 1024)}MB），最大支持 50MB`
    );
  const [r, t] = await Promise.all([_s(e), xs(e)]);
  let { title: a, artist: i } = r;
  if (!a) {
    const p = Od(e.name);
    (a = p.title || e.name), i || (i = p.artist);
  }
  const n = `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    d = {
      id: n,
      title: a,
      artist: i,
      coverArt: r.coverArt,
      duration: t,
      addedAt: Date.now(),
      source: "blob",
    };
  await Ke.setItem(ja + n, e);
  const l = await Vt();
  return l.push(d), await Ke.setItem(Cr, l), d;
}
async function Bd(e) {
  const r = e.trim();
  if (!r) throw new Error("URL 不能为空");
  if (!/^https?:\/\//i.test(r))
    throw new Error("URL 必须以 http:// 或 https:// 开头");
  const t = await new Promise((d) => {
      const l = new Audio();
      (l.preload = "metadata"), (l.crossOrigin = "anonymous");
      const p = (v) => {
        (l.src = ""), d(v);
      };
      (l.onloadedmetadata = () => p(isFinite(l.duration) ? l.duration : 0)),
        (l.onerror = () => p(0)),
        (l.src = r),
        setTimeout(() => p(0), 5e3);
    }),
    i = {
      id: `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      title: "",
      artist: "",
      coverArt: null,
      duration: t,
      addedAt: Date.now(),
      source: "url",
      url: r,
    },
    n = await Vt();
  return n.push(i), await Ke.setItem(Cr, n), i;
}
async function zd(e) {
  const r = await Vt(),
    t = r.find((i) => i.id === e);
  (!t || t.source !== "url") && (await Ke.removeItem(ja + e));
  const a = r.filter((i) => i.id !== e);
  await Ke.setItem(Cr, a);
}
async function co(e, r) {
  const t = await Vt(),
    a = t.findIndex((i) => i.id === e);
  a >= 0 && ((t[a] = { ...t[a], ...r }), await Ke.setItem(Cr, t));
}
async function Vt() {
  return (await Ke.getItem(Cr)) || [];
}
async function Ho(e) {
  const t = (await Vt()).find((n) => n.id === e);
  if ((t == null ? void 0 : t.source) === "url" && t.url) return t.url;
  const a = await Ke.getItem(ja + e);
  if (!a) return null;
  const i = a instanceof Blob ? a : new Blob([a]);
  return URL.createObjectURL(i);
}
async function Ea(e) {
  await Ke.setItem(ws, e);
}
async function Fd() {
  return (await Ke.getItem(ws)) ?? 0;
}
function _o(e) {
  if (!isFinite(e) || e < 0) return "00:00";
  const r = Math.floor(e / 60),
    t = Math.floor(e % 60);
  return `${r.toString().padStart(2, "0")}:${t.toString().padStart(2, "0")}`;
}
const lo = "music_default_initialized_v2";
async function Ud() {
  if (await Ke.getItem(lo)) return null;
  if ((await Vt()).length > 0) return await Ke.setItem(lo, !0), null;
  try {
    const [t, a] = await Promise.all([
      fetch("/defaults/home/default-music.mp3"),
      fetch("/defaults/home/page2-music-cover.jpg"),
    ]);
    if (!t.ok) return null;
    const i = await t.blob(),
      n =
        i.type && i.type.startsWith("audio/")
          ? i
          : new Blob([i], { type: "audio/mpeg" }),
      d = new File([n], "default-music.mp3", { type: n.type }),
      [l, p] = await Promise.all([_s(d), xs(d)]);
    console.log("[MusicPlayer] default track parsed:", {
      title: l.title,
      artist: l.artist,
      duration: p,
      blobSize: n.size,
    });
    let v = l.title || "Tears in the Rain",
      x = l.artist || "Blade Runner OST",
      s = l.coverArt;
    if (!s && a.ok) {
      const S = await a.blob();
      s =
        (await new Promise((c) => {
          const h = new FileReader();
          (h.onload = () => c(h.result)),
            (h.onerror = () => c("")),
            h.readAsDataURL(S);
        })) || null;
    }
    const b = `t_default_${Date.now()}`,
      f = {
        id: b,
        title: v,
        artist: x,
        coverArt: s,
        duration: p,
        addedAt: Date.now(),
      };
    return (
      await Ke.setItem(ja + b, n),
      await Ke.setItem(Cr, [f]),
      await Ke.setItem(lo, !0),
      console.log("[MusicPlayer] default track stored, id:", b),
      [f]
    );
  } catch (t) {
    return console.error("[MusicPlayer] initDefaultTrack error:", t), null;
  }
}
let nr = null,
  Yr = null,
  ar = "list",
  Ut = 0,
  Ri = !1,
  ut = [],
  Sn = null,
  rr = -1,
  xa = null;
const Vr = "echoes-music-sync",
  mt = {
    get audio() {
      return nr;
    },
    get audioTrackId() {
      return Yr;
    },
    set audioTrackId(e) {
      Yr = e;
    },
    get currentIndex() {
      return Ut;
    },
    set currentIndex(e) {
      Ut = e;
    },
    get playMode() {
      return ar;
    },
    set playMode(e) {
      ar = e;
    },
    get cachedPlaylist() {
      return ut;
    },
    set cachedPlaylist(e) {
      ut = e;
    },
  };
function kn() {
  typeof window < "u" && window.dispatchEvent(new CustomEvent(Vr));
}
function $d(e) {
  try {
    const r = e.indexOf(",");
    if (r < 0) return null;
    const t = e.slice(0, r),
      a = e.slice(r + 1),
      i = t.match(/data:([^;]+);base64/),
      n = (i == null ? void 0 : i[1]) || "image/jpeg",
      d = atob(a),
      l = new Uint8Array(d.length);
    for (let p = 0; p < d.length; p++) l[p] = d.charCodeAt(p);
    return URL.createObjectURL(new Blob([l], { type: n }));
  } catch (r) {
    return console.warn("[MediaSession] dataUrl -> blobUrl 失败:", r), null;
  }
}
function sn(e) {
  if (typeof navigator > "u" || !("mediaSession" in navigator)) return;
  if ((xa && (URL.revokeObjectURL(xa), (xa = null)), !e)) {
    (navigator.mediaSession.metadata = null), Wd();
    return;
  }
  let r = null,
    t = "image/jpeg";
  if (e.coverArt)
    if (e.coverArt.startsWith("data:")) {
      const a = $d(e.coverArt);
      if (a) {
        (xa = a), (r = a);
        const i = e.coverArt.match(/data:([^;]+);/);
        i && (t = i[1]);
      }
    } else r = e.coverArt;
  (navigator.mediaSession.metadata = new MediaMetadata({
    title: e.title || "未知歌曲",
    artist: e.artist || "未知歌手",
    album: "",
    artwork: r ? [{ src: r, sizes: "256x256", type: t }] : [],
  })),
    nr && Hd(nr);
}
function $n(e, r) {
  if (!(typeof navigator > "u" || !("mediaSession" in navigator)))
    try {
      navigator.mediaSession.setActionHandler(e, r);
    } catch (t) {
      console.warn(`[MediaSession] Failed to set ${e} handler:`, t);
    }
}
function Wd() {
  $n("play", null),
    $n("pause", null),
    $n("previoustrack", null),
    $n("nexttrack", null);
}
function Hd(e) {
  $n("play", () => {
    e.play().catch(() => {});
  }),
    $n("pause", () => {
      e.pause();
    }),
    $n("previoustrack", () => {
      const r = (Ut - 1 + ut.length) % ut.length;
      Xr(r);
    }),
    $n("nexttrack", () => {
      let r;
      if (ar === "shuffle" && ut.length > 1)
        for (r = Ut; r === Ut; ) r = Math.floor(Math.random() * ut.length);
      else r = (Ut + 1) % ut.length;
      Xr(r);
    });
}
async function Kd() {
  ut = await Vt();
}
async function er() {
  if ((Sn && (URL.revokeObjectURL(Sn), (Sn = null)), (rr = -1), ut.length <= 1))
    return;
  let e;
  if (ar === "repeat1") return;
  if (ar === "shuffle")
    for (e = Ut; e === Ut && ut.length > 1; )
      e = Math.floor(Math.random() * ut.length);
  else e = (Ut + 1) % ut.length;
  const r = ut[e];
  if (!r) return;
  const t = await Ho(r.id);
  t && ((Sn = t), (rr = e));
}
async function Xr(e) {
  const r = bs();
  if ((ut.length === 0 && (await Kd()), ut.length === 0)) {
    (Yr = null), (Ut = 0), r.pause(), (r.src = ""), sn(null), kn();
    return;
  }
  const t = Math.max(0, Math.min(e, ut.length - 1)),
    a = ut[t];
  let i = null;
  if (
    (rr === t && Sn ? ((i = Sn), (Sn = null), (rr = -1)) : (i = await Ho(a.id)),
    !i)
  ) {
    console.warn("[Music] No audio blob found for track:", a.id);
    return;
  }
  (Ut = t),
    (Yr = a.id),
    Ea(t),
    (r.src = i),
    r.load(),
    r
      .play()
      .then(() => sn(a))
      .catch(() => sn(null)),
    kn(),
    er();
}
function Gd(e) {
  Ri ||
    ((Ri = !0),
    e.addEventListener("ended", () => {
      try {
        if (ar === "repeat1") {
          (e.currentTime = 0), e.play().catch(() => {}), kn();
          return;
        }
        if (ut.length <= 1) {
          sn(null), kn();
          return;
        }
        if (Sn && rr >= 0) {
          const t = rr,
            a = Sn,
            i = ut[t];
          (Sn = null),
            (rr = -1),
            (Ut = t),
            (Yr = (i == null ? void 0 : i.id) || null),
            Ea(t),
            (e.src = a),
            e.load(),
            e
              .play()
              .then(() => sn(i || null))
              .catch(() => sn(null)),
            kn(),
            er();
          return;
        }
        let r = Ut;
        if (ar === "shuffle")
          for (; r === Ut && ut.length > 1; )
            r = Math.floor(Math.random() * ut.length);
        else r = (Ut + 1) % ut.length;
        Xr(r);
      } catch (r) {
        console.error("[Music] shared ended handler failed:", r);
      }
    }),
    e.addEventListener("play", () => {
      const r = ut[Ut] || null;
      r && sn(r), kn();
    }),
    e.addEventListener("pause", () => {
      sn(null), kn();
    }),
    e.addEventListener("timeupdate", kn),
    e.addEventListener("loadedmetadata", kn),
    e.addEventListener("durationchange", kn));
}
function bs() {
  return nr || (nr = new Audio()), Gd(nr), nr;
}
const ji = "https://lrclib.net/api";
function Ni(e) {
  if (!e) return [];
  const r = [],
    t = /\[(\d{1,2}):(\d{1,2})(?:[.:](\d{1,3}))?\]/g;
  for (const a of e.split(/\r?\n/)) {
    const i = [];
    let n = 0,
      d;
    for (t.lastIndex = 0; (d = t.exec(a)) !== null; ) {
      const p = parseInt(d[1], 10),
        v = parseInt(d[2], 10),
        x = d[3] ? parseInt(d[3].padEnd(3, "0").slice(0, 3), 10) / 1e3 : 0;
      i.push(p * 60 + v + x), (n = d.index + d[0].length);
    }
    if (i.length === 0) continue;
    const l = a.slice(n).trim();
    if (l) for (const p of i) r.push({ time: p, text: l });
  }
  return r.sort((a, i) => a.time - i.time), r;
}
async function Yd(e, r, t) {
  if (!e.trim() || !r.trim()) return null;
  const a = new URLSearchParams({
    track_name: e.trim(),
    artist_name: r.trim(),
  });
  t && isFinite(t) && t > 0 && a.set("duration", String(Math.round(t)));
  try {
    let i = await fetch(`${ji}/get?${a.toString()}`);
    if (i.status === 404) {
      const l = new URLSearchParams({
        track_name: e.trim(),
        artist_name: r.trim(),
      });
      if (((i = await fetch(`${ji}/search?${l.toString()}`)), !i.ok))
        return null;
      const p = await i.json();
      if (!Array.isArray(p) || p.length === 0) return null;
      const v = p.find((s) => (s == null ? void 0 : s.syncedLyrics)) || p[0];
      if (!(v != null && v.syncedLyrics)) return null;
      const x = Ni(v.syncedLyrics);
      return x.length > 0 ? x : null;
    }
    if (!i.ok) return null;
    const n = await i.json();
    if (!(n != null && n.syncedLyrics)) return null;
    const d = Ni(n.syncedLyrics);
    return d.length > 0 ? d : null;
  } catch (i) {
    return console.warn("[lrclib] fetch failed:", i), null;
  }
}
const Vd = ({
    playlist: e,
    currentTrackId: r,
    isOpen: t,
    onClose: a,
    onSelect: i,
    onAdd: n,
    onAddByUrl: d,
    onRemove: l,
    onUpdate: p,
    autoEditTrackId: v,
    onAutoEditConsumed: x,
    iconColor: s,
    textColor: b,
  }) => {
    const f = P.useRef(null),
      S = P.useRef(null),
      [c, h] = P.useState(null),
      [o, u] = P.useState(""),
      [_, w] = P.useState(""),
      [y, T] = P.useState(null),
      [I, M] = P.useState(!1),
      [O, U] = P.useState(!1),
      [J, C] = P.useState("");
    P.useEffect(() => {
      if (!v) return;
      const ee = e.find((Z) => Z.id === v);
      ee && (h(ee.id), u(ee.title), w(ee.artist), x == null || x());
    }, [v, e, x]);
    const D = (ee, Z) => {
        Z.stopPropagation(), h(ee.id), u(ee.title), w(ee.artist);
      },
      k = (ee) => {
        if ((ee.stopPropagation(), c)) {
          const Z = {},
            ve = e.find((Q) => Q.id === c);
          ve &&
            (o.trim() && o.trim() !== ve.title && (Z.title = o.trim()),
            _.trim() !== ve.artist && (Z.artist = _.trim()),
            Object.keys(Z).length > 0 && p(c, Z));
        }
        h(null);
      },
      V = (ee) => {
        var Q;
        const Z = (Q = ee.target.files) == null ? void 0 : Q[0];
        if (!Z || !y) return;
        const ve = new FileReader();
        (ve.onload = () => {
          const ce = ve.result;
          p(y, { coverArt: ce });
        }),
          ve.readAsDataURL(Z),
          (ee.target.value = ""),
          T(null);
      };
    return t
      ? g.jsxs("div", {
          className:
            "echoes-playlist-backdrop fixed inset-0 z-[9999] flex items-end justify-center",
          onClick: a,
          children: [
            g.jsx("div", {
              className: "absolute inset-0 bg-black/40 backdrop-blur-sm",
            }),
            g.jsxs("div", {
              className:
                "echoes-playlist-panel relative w-full max-w-[420px] max-h-[70vh] bg-white/15 backdrop-blur-2xl border border-white/25 rounded-t-[28px] shadow-2xl flex flex-col overflow-hidden",
              onClick: (ee) => ee.stopPropagation(),
              children: [
                g.jsxs("div", {
                  className:
                    "echoes-playlist-header flex items-center justify-between px-5 pt-4 pb-3 border-b border-white/15",
                  children: [
                    g.jsxs("h3", {
                      className: "text-[14px] font-bold",
                      style: { color: b },
                      children: ["歌单 · ", e.length, " 首"],
                    }),
                    g.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        g.jsx("button", {
                          className:
                            "echoes-playlist-add-btn w-[30px] h-[30px] rounded-full bg-white/15 flex items-center justify-center active:bg-white/25 transition-colors",
                          onClick: () => M(!0),
                          children: g.jsx(id, {
                            className: "w-[14px] h-[14px]",
                            style: { color: s },
                            strokeWidth: 2.5,
                          }),
                        }),
                        g.jsx("button", {
                          className:
                            "echoes-playlist-close-btn w-[30px] h-[30px] rounded-full bg-white/15 flex items-center justify-center active:bg-white/25 transition-colors",
                          onClick: a,
                          children: g.jsx(Ia, {
                            className: "w-[14px] h-[14px]",
                            style: { color: b },
                            strokeWidth: 2.5,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                g.jsx("input", {
                  ref: f,
                  type: "file",
                  accept: ".mp3,.m4a,.aac,.ogg,.wav,.flac,.wma,.opus,audio/*",
                  multiple: !0,
                  className: "hidden",
                  onChange: (ee) => {
                    var Z;
                    (Z = ee.target.files) != null &&
                      Z.length &&
                      (n(ee.target.files), (ee.target.value = ""));
                  },
                }),
                g.jsx("input", {
                  ref: S,
                  type: "file",
                  accept: "image/*",
                  className: "hidden",
                  onChange: V,
                }),
                g.jsx("div", {
                  className:
                    "echoes-playlist-tracks flex-1 overflow-y-auto overscroll-contain py-2",
                  children:
                    e.length === 0
                      ? g.jsxs("div", {
                          className:
                            "echoes-playlist-empty flex flex-col items-center justify-center py-12 gap-3",
                          children: [
                            g.jsx(Gr, {
                              className: "w-10 h-10 opacity-30",
                              style: { color: b },
                            }),
                            g.jsx("p", {
                              className: "text-[12px] opacity-50",
                              style: { color: b },
                              children: "还没有歌曲，点击 + 上传",
                            }),
                          ],
                        })
                      : e.map((ee, Z) => {
                          const ve = ee.id === r,
                            Q = c === ee.id;
                          return g.jsxs(
                            "div",
                            {
                              className: `echoes-playlist-track-item flex items-center gap-3 px-5 py-2.5 cursor-pointer transition-colors ${
                                ve ? "bg-white/15" : "active:bg-white/10"
                              }`,
                              onClick: () => !Q && i(Z),
                              children: [
                                g.jsxs("div", {
                                  className:
                                    "echoes-playlist-track-cover w-[40px] h-[40px] rounded-lg overflow-hidden shrink-0 bg-white/10 flex items-center justify-center relative group",
                                  onClick: (ce) => {
                                    var B;
                                    Q &&
                                      (ce.stopPropagation(),
                                      T(ee.id),
                                      (B = S.current) == null || B.click());
                                  },
                                  children: [
                                    ee.coverArt
                                      ? g.jsx("img", {
                                          src: ee.coverArt,
                                          alt: "",
                                          className:
                                            "w-full h-full object-cover",
                                        })
                                      : g.jsx(Gr, {
                                          className:
                                            "w-[18px] h-[18px] opacity-40",
                                          style: { color: b },
                                        }),
                                    Q &&
                                      g.jsx("div", {
                                        className:
                                          "absolute inset-0 bg-black/40 flex items-center justify-center",
                                        children: g.jsx(Pu, {
                                          className:
                                            "w-[16px] h-[16px] text-white/80",
                                        }),
                                      }),
                                  ],
                                }),
                                g.jsx("div", {
                                  className: "flex-1 min-w-0",
                                  children: Q
                                    ? g.jsxs(g.Fragment, {
                                        children: [
                                          g.jsx("input", {
                                            className:
                                              "echoes-playlist-track-title-input w-full text-[12px] font-bold bg-white/15 border border-white/25 rounded px-1.5 py-0.5 outline-none",
                                            style: { color: b },
                                            value: o,
                                            onChange: (ce) =>
                                              u(ce.target.value),
                                            onClick: (ce) =>
                                              ce.stopPropagation(),
                                            placeholder: "歌名",
                                            autoFocus: !0,
                                          }),
                                          g.jsx("input", {
                                            className:
                                              "echoes-playlist-track-artist-input w-full text-[10px] bg-white/15 border border-white/25 rounded px-1.5 py-0.5 mt-1 outline-none",
                                            style: { color: b },
                                            value: _,
                                            onChange: (ce) =>
                                              w(ce.target.value),
                                            onClick: (ce) =>
                                              ce.stopPropagation(),
                                            placeholder: "歌手",
                                          }),
                                        ],
                                      })
                                    : g.jsxs(g.Fragment, {
                                        children: [
                                          g.jsx("p", {
                                            className:
                                              "text-[12px] font-bold truncate",
                                            style: { color: ve ? s : b },
                                            children: ee.title,
                                          }),
                                          g.jsx("p", {
                                            className:
                                              "text-[10px] truncate mt-0.5 opacity-60",
                                            style: { color: b },
                                            children: ee.artist || "未知歌手",
                                          }),
                                        ],
                                      }),
                                }),
                                !Q &&
                                  g.jsx("span", {
                                    className:
                                      "text-[10px] opacity-50 shrink-0 mr-1",
                                    style: { color: b },
                                    children: _o(ee.duration),
                                  }),
                                Q
                                  ? g.jsx("button", {
                                      className:
                                        "echoes-playlist-track-confirm-btn w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0 bg-white/15 active:bg-white/25 transition-all",
                                      onClick: k,
                                      children: g.jsx(ys, {
                                        className: "w-[13px] h-[13px]",
                                        style: { color: s },
                                      }),
                                    })
                                  : g.jsx("button", {
                                      className:
                                        "echoes-playlist-track-edit-btn w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0 opacity-40 hover:opacity-80 active:bg-white/15 transition-all",
                                      onClick: (ce) => D(ee, ce),
                                      children: g.jsx(ed, {
                                        className: "w-[12px] h-[12px]",
                                        style: { color: b },
                                      }),
                                    }),
                                g.jsx("button", {
                                  className:
                                    "echoes-playlist-track-delete-btn w-[26px] h-[26px] rounded-full flex items-center justify-center shrink-0 opacity-40 hover:opacity-80 active:bg-white/15 transition-all",
                                  onClick: (ce) => {
                                    ce.stopPropagation(),
                                      c === ee.id && h(null),
                                      l(ee.id);
                                  },
                                  children: g.jsx(Id, {
                                    className: "w-[13px] h-[13px]",
                                    style: { color: b },
                                  }),
                                }),
                              ],
                            },
                            ee.id
                          );
                        }),
                }),
              ],
            }),
            I &&
              g.jsx("div", {
                className:
                  "absolute inset-0 z-[10000] flex items-end justify-center bg-black/30 backdrop-blur-sm",
                onClick: (ee) => {
                  ee.stopPropagation(), M(!1);
                },
                children: g.jsxs("div", {
                  className:
                    "w-full max-w-sm mb-4 mx-4 flex flex-col gap-2 animate-in slide-in-from-bottom duration-200",
                  onClick: (ee) => ee.stopPropagation(),
                  children: [
                    g.jsxs("div", {
                      className:
                        "bg-white/85 backdrop-blur-xl rounded-2xl overflow-hidden",
                      children: [
                        g.jsx("button", {
                          className:
                            "w-full py-3.5 text-center text-[15px] text-blue-600 font-medium active:bg-white/60",
                          onClick: () => {
                            var ee;
                            M(!1), (ee = f.current) == null || ee.click();
                          },
                          children: "上传本地音频",
                        }),
                        g.jsx("div", { className: "h-px bg-gray-200/60" }),
                        g.jsx("button", {
                          className:
                            "w-full py-3.5 text-center text-[15px] text-blue-600 active:bg-white/60",
                          onClick: () => {
                            M(!1), C(""), U(!0);
                          },
                          children: "输入音乐 URL",
                        }),
                      ],
                    }),
                    g.jsx("button", {
                      className:
                        "w-full py-3.5 text-center text-[15px] text-blue-600 font-semibold bg-white/85 backdrop-blur-xl rounded-2xl active:bg-white/60",
                      onClick: () => M(!1),
                      children: "取消",
                    }),
                  ],
                }),
              }),
            O &&
              g.jsx("div", {
                className:
                  "absolute inset-0 z-[10000] flex items-center justify-center bg-black/40 backdrop-blur-sm",
                onClick: (ee) => {
                  ee.stopPropagation(), U(!1);
                },
                children: g.jsxs("div", {
                  className:
                    "w-[300px] bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden animate-in zoom-in-95 duration-150",
                  onClick: (ee) => ee.stopPropagation(),
                  children: [
                    g.jsxs("div", {
                      className: "px-5 pt-4 pb-3",
                      children: [
                        g.jsx("p", {
                          className:
                            "text-[14px] font-bold text-gray-800 text-center",
                          children: "输入音乐 URL",
                        }),
                        g.jsx("p", {
                          className:
                            "text-[11px] text-gray-500 text-center mt-1",
                          children: "支持 mp3 / m4a / ogg 等直链",
                        }),
                      ],
                    }),
                    g.jsx("div", {
                      className: "px-5 pb-4",
                      children: g.jsx("input", {
                        type: "url",
                        autoFocus: !0,
                        value: J,
                        onChange: (ee) => C(ee.target.value),
                        placeholder: "https://...",
                        className:
                          "w-full h-[36px] px-3 text-[13px] bg-gray-100 border border-gray-200 rounded-lg outline-none focus:border-blue-400",
                        onKeyDown: (ee) => {
                          ee.key === "Enter" &&
                            J.trim() &&
                            (d(J.trim()), U(!1));
                        },
                      }),
                    }),
                    g.jsxs("div", {
                      className: "border-t border-gray-200/60 flex",
                      children: [
                        g.jsx("button", {
                          className:
                            "flex-1 py-3 text-[14px] text-gray-500 active:bg-gray-100",
                          onClick: () => U(!1),
                          children: "取消",
                        }),
                        g.jsx("div", { className: "w-px bg-gray-200/60" }),
                        g.jsx("button", {
                          className:
                            "flex-1 py-3 text-[14px] text-blue-600 font-semibold active:bg-gray-100 disabled:opacity-40",
                          disabled: !J.trim(),
                          onClick: () => {
                            J.trim() && (d(J.trim()), U(!1));
                          },
                          children: "添加",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        })
      : null;
  },
  ks = ({ char: e, className: r = "" }) => {
    if (e.avatarUrl)
      return g.jsx("img", {
        src: e.avatarUrl,
        alt: e.name,
        className: `echoes-avatar-img object-cover rounded-full shadow-sm ${r}`,
        referrerPolicy: "no-referrer",
      });
    const t = e.avatarColor || "bg-slate-400";
    return g.jsx("div", {
      className: `echoes-avatar-fallback rounded-full flex items-center justify-center font-bold text-white shadow-sm ${t} ${r}`,
      children: e.name.charAt(0).toUpperCase(),
    });
  },
  xo = 260;
function Pi() {
  return typeof window > "u"
    ? { x: 24, y: 80 }
    : { x: Math.max(8, Math.round((window.innerWidth - xo) / 2)), y: 80 };
}
function Xd(e, r) {
  if (!e.length) return -1;
  let t = 0,
    a = e.length - 1,
    i = -1;
  for (; t <= a; ) {
    const n = (t + a) >> 1;
    e[n].time <= r ? ((i = n), (t = n + 1)) : (a = n - 1);
  }
  return i;
}
function Zd(e) {
  const r = Math.max(0, Math.floor(e / 1e3)),
    t = Math.floor(r / 3600),
    a = Math.floor((r % 3600) / 60),
    i = r % 60;
  return t > 0
    ? `${String(t).padStart(2, "0")}:${String(a).padStart(2, "0")}:${String(
        i
      ).padStart(2, "0")}`
    : `${String(a).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
}
const Jd = ({
  open: e,
  track: r,
  audioRef: t,
  onClose: a,
  onOffsetChange: i,
}) => {
  var fe, he;
  const {
      activeOverlapMusicSession: n,
      setActiveOverlapMusicSession: d,
      setPendingOverlapSceneJump: l,
      setCurrentApp: p,
      inOverlapScene: v,
      characters: x,
    } = or(),
    [s, b] = P.useState(Pi),
    [f, S] = P.useState(-1),
    [c, h] = P.useState(0),
    [o, u] = P.useState(!1),
    [_, w] = P.useState(() => Date.now()),
    y = P.useRef(null),
    T = P.useRef(null),
    I = P.useRef(null),
    M = P.useRef(0),
    O = (r == null ? void 0 : r.lyrics) || null,
    U = !!(O && O.length > 0);
  (I.current = O), (M.current = c);
  const J = !!n && !v,
    C = P.useMemo(
      () => (n && x.find((Te) => Te.id === n.characterId)) || null,
      [n, x]
    );
  P.useEffect(() => {
    h((r == null ? void 0 : r.lyricsOffset) ?? 0);
  }, [r == null ? void 0 : r.id, r == null ? void 0 : r.lyricsOffset]),
    P.useEffect(() => {
      e && b(Pi());
    }, [e]);
  const D = P.useCallback(
      (Te) => {
        if (!r) return;
        const Pe = Math.round((c + Te) * 10) / 10;
        h(Pe), i(r.id, Pe);
      },
      [c, r, i]
    ),
    k = P.useCallback(() => {
      r && (h(0), i(r.id, 0));
    }, [r, i]);
  P.useEffect(() => {
    if (!e || !U) {
      S(-1);
      return;
    }
    let Te = !1;
    const Pe = () => {
      if (Te) return;
      const Fe = t.current,
        $e = I.current;
      if (Fe && $e) {
        const it = Xd($e, Fe.currentTime - M.current);
        S((ye) => (ye === it ? ye : it));
      }
    };
    Pe();
    const Re = window.setInterval(Pe, 200),
      Oe = () => Pe();
    return (
      window.addEventListener(Vr, Oe),
      () => {
        (Te = !0), window.clearInterval(Re), window.removeEventListener(Vr, Oe);
      }
    );
  }, [e, U, t]),
    P.useEffect(() => {
      if (!J) return;
      const Te = setInterval(() => w(Date.now()), 1e3);
      return () => clearInterval(Te);
    }, [J]);
  const V = P.useCallback((Te) => {
      const Pe = T.current;
      if (!Pe) return;
      const Re = Pe.getBoundingClientRect();
      (y.current = { dx: Te.clientX - Re.left, dy: Te.clientY - Re.top }),
        Pe.setPointerCapture(Te.pointerId);
    }, []),
    ee = P.useCallback((Te) => {
      if (!y.current) return;
      const Pe = window.innerWidth - xo,
        Re = window.innerHeight - 80,
        Oe = Math.max(0, Math.min(Pe, Te.clientX - y.current.dx)),
        Fe = Math.max(0, Math.min(Re, Te.clientY - y.current.dy));
      b({ x: Oe, y: Fe });
    }, []),
    Z = P.useCallback((Te) => {
      var Pe;
      y.current &&
        ((y.current = null),
        (Pe = T.current) == null || Pe.releasePointerCapture(Te.pointerId));
    }, []),
    ve = !!r;
  if (!(!v && e && (U || ve || J))) return null;
  const ce = U && f >= 0 ? ((fe = O[f]) == null ? void 0 : fe.text) : "",
    B =
      U && f >= 0 && f + 1 < O.length
        ? (he = O[f + 1]) == null
          ? void 0
          : he.text
        : "",
    H = () => {
      l(!0), p("timeslot");
    },
    Ee = (Te) => {
      Te.stopPropagation(), d(null);
    };
  return Ic.createPortal(
    g.jsx("div", {
      ref: T,
      className: "fixed z-[9998] select-none touch-none",
      style: { left: s.x, top: s.y, width: xo },
      onPointerDown: V,
      onPointerMove: ee,
      onPointerUp: Z,
      onPointerCancel: Z,
      children: g.jsxs("div", {
        className:
          "relative bg-black/40 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl cursor-grab active:cursor-grabbing overflow-hidden",
        children: [
          g.jsxs("div", {
            className: "px-4 py-3",
            children: [
              g.jsxs("div", {
                className: "absolute top-1.5 right-1.5 flex items-center gap-1",
                onPointerDown: (Te) => Te.stopPropagation(),
                children: [
                  U &&
                    g.jsx("button", {
                      className: `w-[14px] h-[14px] rounded-full flex items-center justify-center transition-colors ${
                        o ? "bg-white/30" : "bg-white/10 active:bg-white/25"
                      }`,
                      title: o ? "收起歌词微调" : "歌词微调",
                      onClick: (Te) => {
                        Te.stopPropagation(), u((Pe) => !Pe);
                      },
                      children: g.jsx(bd, {
                        className: "w-[8px] h-[8px] text-white/80",
                        strokeWidth: 2.5,
                      }),
                    }),
                  g.jsx("button", {
                    className:
                      "w-[14px] h-[14px] rounded-full bg-white/10 flex items-center justify-center active:bg-white/25",
                    title: "收起浮窗",
                    onClick: (Te) => {
                      Te.stopPropagation(), a();
                    },
                    children: g.jsx(Ia, {
                      className: "w-[8px] h-[8px] text-white/80",
                      strokeWidth: 3,
                    }),
                  }),
                ],
              }),
              U
                ? g.jsxs(g.Fragment, {
                    children: [
                      g.jsx("p", {
                        className:
                          "text-[13px] font-bold text-white leading-tight min-h-[18px] pr-9",
                        children: ce || "...",
                      }),
                      g.jsx("p", {
                        className:
                          "text-[11px] text-white/55 leading-tight mt-1 min-h-[14px] truncate",
                        children: B || " ",
                      }),
                    ],
                  })
                : ve
                ? g.jsxs("div", {
                    className: "flex items-center gap-2 pr-9",
                    children: [
                      g.jsx(Gr, {
                        className: "w-3.5 h-3.5 text-white/55 shrink-0",
                        strokeWidth: 2,
                      }),
                      g.jsxs("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          g.jsx("p", {
                            className:
                              "text-[12px] font-bold text-white truncate leading-tight",
                            children: r.title || "未命名",
                          }),
                          g.jsx("p", {
                            className:
                              "text-[10px] text-white/55 truncate leading-tight mt-0.5",
                            children: r.artist || "未知歌手",
                          }),
                        ],
                      }),
                    ],
                  })
                : g.jsxs("div", {
                    className:
                      "flex items-center gap-2 pr-9 text-[11px] text-white/55",
                    children: [
                      g.jsx(Gr, {
                        className: "w-3.5 h-3.5 shrink-0",
                        strokeWidth: 2,
                      }),
                      g.jsx("span", {
                        className: "truncate",
                        children: "桌面播放器还没歌",
                      }),
                    ],
                  }),
              U &&
                o &&
                g.jsxs("div", {
                  className:
                    "mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between gap-1",
                  onPointerDown: (Te) => Te.stopPropagation(),
                  children: [
                    g.jsx("button", {
                      className:
                        "px-2 py-0.5 text-[10px] text-white/70 bg-white/10 rounded-md active:bg-white/25",
                      onClick: (Te) => {
                        Te.stopPropagation(), D(-0.5);
                      },
                      children: "−0.5s",
                    }),
                    g.jsxs("button", {
                      className: "text-[10px] text-white/60 px-1 tabular-nums",
                      onClick: (Te) => {
                        Te.stopPropagation(), k();
                      },
                      title: "点击重置",
                      children: [c > 0 ? "+" : "", c.toFixed(1), "s"],
                    }),
                    g.jsx("button", {
                      className:
                        "px-2 py-0.5 text-[10px] text-white/70 bg-white/10 rounded-md active:bg-white/25",
                      onClick: (Te) => {
                        Te.stopPropagation(), D(0.5);
                      },
                      children: "+0.5s",
                    }),
                  ],
                }),
            ],
          }),
          J &&
            C &&
            g.jsxs("div", {
              className:
                "border-t border-white/10 bg-white/5 flex items-center gap-2 px-2 py-1.5",
              onPointerDown: (Te) => Te.stopPropagation(),
              children: [
                g.jsxs("button", {
                  type: "button",
                  onClick: (Te) => {
                    Te.stopPropagation(), H();
                  },
                  className:
                    "flex items-center gap-2 flex-1 min-w-0 text-left active:opacity-70 transition-opacity",
                  "aria-label": "回到一起听场景",
                  children: [
                    g.jsx(ks, {
                      char: C,
                      className: "w-6 h-6 text-[10px] shrink-0",
                    }),
                    g.jsxs("div", {
                      className: "flex-1 min-w-0 leading-tight",
                      children: [
                        g.jsxs("p", {
                          className:
                            "text-[11px] font-bold text-white truncate",
                          children: ["和", C.name, "一起听"],
                        }),
                        g.jsx("p", {
                          className:
                            "text-[9px] text-white/55 tabular-nums leading-tight",
                          children: Zd(_ - n.startedAt),
                        }),
                      ],
                    }),
                  ],
                }),
                g.jsx("button", {
                  type: "button",
                  onClick: Ee,
                  className:
                    "w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 transition-colors shrink-0",
                  "aria-label": "停止陪伴",
                  title: "停止陪伴",
                  children: g.jsx(Ia, {
                    className: "w-3 h-3 text-white/85",
                    strokeWidth: 2.5,
                  }),
                }),
              ],
            }),
        ],
      }),
    }),
    document.body
  );
};
function Ss(e) {
  const r = (typeof navigator < "u" && navigator.userAgent) || "",
    t = /Android/i.test(r),
    a = /(?:^|\s|;|\()Via\//i.test(r) || /\bVIA\b/i.test(r),
    i = t && a;
  return {
    isViaAndroid: i,
    needsViewportHeightFix: i,
    needsSimpleBackgroundAtmosphere: i,
    needsTransformSafePositioning: i,
  };
}
const Mi = "#475569",
  bo = "#64748b",
  uo = [
    { top: "22%", left: "28%", size: 1, opacity: 0.5 },
    { top: "68%", left: "18%", size: 0.8, opacity: 0.4 },
    { top: "30%", left: "78%", size: 1, opacity: 0.45 },
    { top: "75%", left: "72%", size: 0.8, opacity: 0.35 },
    { top: "50%", left: "12%", size: 0.5, opacity: 0.4 },
    { top: "15%", left: "55%", size: 0.5, opacity: 0.35 },
    { top: "82%", left: "42%", size: 0.8, opacity: 0.4 },
    { top: "38%", left: "88%", size: 0.5, opacity: 0.35 },
    { top: "12%", left: "32%", size: 0.8, opacity: 0.4 },
    { top: "60%", left: "88%", size: 0.5, opacity: 0.3 },
    { top: "88%", left: "60%", size: 0.5, opacity: 0.35 },
    { top: "42%", left: "50%", size: 0.5, opacity: 0.3 },
    { top: "8%", left: "72%", size: 0.8, opacity: 0.4 },
    { top: "88%", left: "12%", size: 0.5, opacity: 0.35 },
  ],
  fo = 6,
  qd = { weather: "☁️", event: "✨", rumor: "🗞️", season: "🍃", other: "📍" },
  ko = (e, r) => {
    const t = (e == null ? void 0 : e.trim()) || "";
    return /^#([0-9a-f]{6}|[0-9a-f]{3})$/i.test(t) ? t : r;
  },
  Ts = (e) => {
    const r = ko(e, bo).replace("#", ""),
      t =
        r.length === 3
          ? r
              .split("")
              .map((i) => i + i)
              .join("")
          : r,
      a = parseInt(t, 16);
    return { r: (a >> 16) & 255, g: (a >> 8) & 255, b: a & 255 };
  },
  an = (e, r) => {
    const { r: t, g: a, b: i } = Ts(e);
    return `rgba(${t}, ${a}, ${i}, ${r})`;
  },
  ho = (e, r) => {
    const { r: t, g: a, b: i } = Ts(e),
      n = Math.max(0, 1 - r / 100),
      d = (l) =>
        Math.round(l * n)
          .toString(16)
          .padStart(2, "0");
    return `#${d(t)}${d(a)}${d(i)}`;
  },
  Qd = (e, r) => {
    const t = r ?? e.getFullYear(),
      a = Math.min(e.getDate(), new Date(t, e.getMonth() + 1, 0).getDate());
    return new Date(
      t,
      e.getMonth(),
      a,
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    );
  },
  ef = () => {
    var fa, Br;
    const e = Ss(),
      r = 3,
      t = 8,
      a = (A) => Math.max(0, Math.min(r - 1, Number.isFinite(A) ? A : 0)),
      {
        setCurrentApp: i,
        homeDesktopPage: n,
        setHomeDesktopPage: d,
        homeBackground: l,
        appIconOverrides: p,
        homeIconColor: v,
        homeTextColor: x,
        v2BgImage: s,
        setV2BgImage: b,
        v2Avatar: f,
        setV2Avatar: S,
        v2Username: c,
        setV2Username: h,
        v2Signature: o,
        setV2Signature: u,
        v2Location: _,
        setV2Location: w,
        widgetImg1: y,
        setWidgetImg1: T,
        widgetText1a: I,
        setWidgetText1a: M,
        widgetText1b: O,
        setWidgetText1b: U,
        widgetImg2: J,
        setWidgetImg2: C,
        widgetText2a: D,
        setWidgetText2a: k,
        widgetText2b: V,
        setWidgetText2b: ee,
        widgetTitle: Z,
        setWidgetTitle: ve,
        widget2Title: Q,
        setWidget2Title: ce,
        widget2Text1: B,
        setWidget2Text1: H,
        widget2Text2: Ee,
        setWidget2Text2: fe,
        widget2Text3: he,
        setWidget2Text3: Te,
        widget2Text4: Pe,
        setWidget2Text4: Re,
        p2TopText1: Oe,
        setP2TopText1: Fe,
        p2TopText2: $e,
        setP2TopText2: it,
        p2TopText3: ye,
        setP2TopText3: m,
        p2TopAvatar: X,
        setP2TopAvatar: G,
        p2TopPhoto1: N,
        setP2TopPhoto1: R,
        p2TopPhoto2: z,
        setP2TopPhoto2: re,
        p2BtmAvatar1: ae,
        setP2BtmAvatar1: Y,
        p2BtmAvatar2: ue,
        setP2BtmAvatar2: _e,
        p2TopText4: de,
        setP2TopText4: xe,
        page2TopWidgetImage: Be,
        setPage2TopWidgetImage: Ne,
        page2BottomWidgetImage: Je,
        setPage2BottomWidgetImage: gt,
        worldCalendarEvents: tt,
        customWorldYear: ft,
        activeOverlapMusicSession: De,
      } = or(),
      [at, It] = P.useState(() => a(n)),
      [bt, ht] = P.useState(!1),
      [jt, Nt] = P.useState(0),
      [Pt, gn] = P.useState(!1),
      [Xt, Zt] = P.useState([]),
      [ir, Kn] = P.useState([{ id: 0, value: 0, exiting: !1 }]),
      [Gn, sr] = P.useState(!1),
      [cr, lr] = P.useState(!1),
      [ur, dr] = P.useState([{ id: 0, text: "gaze", exiting: !1 }]),
      jn = P.useRef(!1),
      In = P.useRef(0),
      yn = P.useRef(0);
    P.useEffect(() => {
      Ke.getItem("world_observation_count").then((A) => {
        A != null && (Nt(A), Kn([{ id: 0, value: A, exiting: !1 }]));
      });
    }, []),
      P.useEffect(() => {
        jt > 0 && Ke.setItem("world_observation_count", jt);
      }, [jt]);
    const Nn = P.useMemo(
        () => [
          { base: 262, detune: 264 },
          { base: 294, detune: 296 },
          { base: 330, detune: 332 },
          { base: 392, detune: 394 },
          { base: 440, detune: 442 },
        ],
        []
      ),
      Pn = P.useRef(null),
      fr = P.useRef(-1),
      En = P.useCallback(() => {
        if (!Pn.current) {
          const je = window.AudioContext || window.webkitAudioContext;
          if (!je) return;
          Pn.current = new je();
        }
        const A = Pn.current;
        A.state === "suspended" && A.resume();
        let te;
        do te = Math.floor(Math.random() * Nn.length);
        while (te === fr.current && Nn.length > 1);
        fr.current = te;
        const me = Nn[te],
          Ie = A.currentTime;
        [me.base, me.detune].forEach((je) => {
          const Ze = A.createOscillator();
          (Ze.type = "sine"), (Ze.frequency.value = je);
          const pt = A.createGain();
          pt.gain.setValueAtTime(0, Ie),
            pt.gain.linearRampToValueAtTime(0.05, Ie + 0.2),
            pt.gain.exponentialRampToValueAtTime(1e-4, Ie + 3),
            Ze.connect(pt),
            pt.connect(A.destination),
            Ze.start(Ie),
            Ze.stop(Ie + 3.1);
        });
      }, [Nn]),
      hr = P.useCallback(() => {
        Nt((te) => {
          const me = te + 1;
          return (
            Math.floor(te / 1e3) < Math.floor(me / 1e3) &&
              (lr(!0), setTimeout(() => lr(!1), 4e3)),
            me
          );
        }),
          gn(!0),
          Zt((te) => [...te, Date.now()]),
          En(),
          setTimeout(() => gn(!1), 140);
        const A = Date.now();
        Kn((te) => {
          var Ie;
          return [
            ...te.map((je) => ({ ...je, exiting: !0 })),
            {
              id: A,
              value:
                (((Ie = te.find((je) => !je.exiting)) == null
                  ? void 0
                  : Ie.value) ?? 0) + 1,
              exiting: !1,
            },
          ];
        }),
          setTimeout(() => Kn((te) => te.filter((me) => !me.exiting)), 850);
      }, [En]),
      Mn = P.useCallback(() => {
        Zt((A) => [...A, Date.now()]), En();
      }, [En]),
      On = P.useCallback((A) => {
        const te = Date.now();
        dr((me) => [
          ...me.map((je) => ({ ...je, exiting: !0 })),
          { id: te, text: A, exiting: !1 },
        ]),
          setTimeout(() => dr((me) => me.filter((Ie) => !Ie.exiting)), 850);
      }, []),
      pr = P.useCallback(() => {
        (jn.current = !0),
          sr(!0),
          On("gazing"),
          Mn(),
          (yn.current = window.setInterval(Mn, 1200));
      }, [Mn, On]),
      Dn = P.useCallback(() => {
        (jn.current = !1),
          sr(!1),
          On("gaze"),
          yn.current && (clearInterval(yn.current), (yn.current = 0));
      }, [On]),
      mr = P.useCallback(
        (A) => {
          A.preventDefault(),
            (Yn.current = !0),
            (In.current = window.setTimeout(() => {
              (In.current = 0), pr();
            }, 400));
        },
        [pr]
      ),
      Yn = P.useRef(!1),
      Ln = P.useCallback(() => {
        Yn.current &&
          ((Yn.current = !1),
          In.current && (clearTimeout(In.current), (In.current = 0)),
          jn.current ? Dn() : hr());
      }, [Dn, hr]),
      nn = P.useRef(null),
      Dt = P.useRef(null),
      rn = P.useRef(null),
      vn = P.useRef(!1),
      Jt = P.useRef(!1),
      Bn = P.useRef(0),
      yt = P.useRef({ startX: 0, startScrollLeft: 0, startPage: 0, moved: !1 }),
      wn = bs(),
      [Lt, Kt] = P.useState([]),
      [ln, gr] = P.useState(mt.currentIndex),
      qt = P.useCallback((A) => {
        gr((te) => {
          const me = typeof A == "function" ? A(te) : A;
          return (mt.currentIndex = me), me;
        });
      }, []),
      [Gt, _n] = P.useState(() => !wn.paused),
      [E, L] = P.useState(() => wn.currentTime || 0),
      [j, $] = P.useState(() => (isFinite(wn.duration) ? wn.duration : 0)),
      [K, F] = P.useState(!1),
      [oe, le] = P.useState(null),
      [pe, ge] = P.useState(() => {
        try {
          return localStorage.getItem("echoes-lyrics-floater-open") === "1";
        } catch {
          return !1;
        }
      });
    P.useEffect(() => {
      try {
        localStorage.setItem("echoes-lyrics-floater-open", pe ? "1" : "0");
      } catch {}
    }, [pe]);
    const we = P.useRef(null);
    P.useEffect(() => {
      const A = (De == null ? void 0 : De.id) || null;
      A && A !== we.current && ge(!0), (we.current = A);
    }, [De]);
    const [Ae, Me] = P.useState(!1),
      [We, Ye] = P.useState(mt.playMode),
      [rt, Qe] = P.useState(null),
      Bt = P.useCallback((A) => {
        (mt.playMode = A), Ye(A), er();
      }, []),
      vt = P.useRef(wn),
      Vn = P.useRef(null),
      Xn = P.useRef(null),
      zn = P.useRef(!1),
      Ue = Lt[ln] || null;
    P.useEffect(() => {
      zn.current ||
        ((zn.current = !0),
        (async () => {
          const te = (await Ud()) || (await Vt());
          Kt(te), (mt.cachedPlaylist = te);
          const me = await Fd();
          me >= 0 && me < te.length && qt(me), er();
        })());
    }, []),
      P.useEffect(() => {
        const A = () => {
          const te = vt.current;
          te &&
            (qt(mt.currentIndex),
            Ye(mt.playMode),
            _n(!te.paused),
            L(te.currentTime || 0),
            isFinite(te.duration) && te.duration > 0 && $(te.duration));
        };
        return (
          typeof window < "u" && window.addEventListener(Vr, A),
          A(),
          () => {
            typeof window < "u" && window.removeEventListener(Vr, A);
          }
        );
      }, [qt]),
      P.useEffect(() => {
        if (!Ue) {
          if (mt.audio && !mt.audio.paused) return;
          L(0), $(0);
          return;
        }
        const A = vt.current;
        if (mt.audioTrackId === Ue.id && A.src) {
          L(A.currentTime),
            isFinite(A.duration) && A.duration > 0 && $(A.duration),
            _n(!A.paused),
            Ea(ln),
            sn(A.paused ? null : Ue);
          return;
        }
        let te = !1;
        return (
          A.pause(),
          (async () => {
            const me = await Ho(Ue.id);
            if (!te) {
              if (!me) {
                console.warn("[Music] No audio blob found for track:", Ue.id);
                return;
              }
              (A.src = me),
                (mt.audioTrackId = Ue.id),
                (mt.currentIndex = ln),
                A.load(),
                sn(A.paused ? null : Ue),
                er();
            }
          })(),
          Ea(ln),
          () => {
            te = !0;
          }
        );
      }, [Ue == null ? void 0 : Ue.id, ln]),
      P.useEffect(() => {
        const A = vt.current;
        if (!A) return;
        const te = () => L(A.currentTime),
          me = () => {
            isFinite(A.duration) && A.duration > 0 && $(A.duration), Me(!1);
          },
          Ie = () => {
            isFinite(A.duration) && A.duration > 0 && $(A.duration);
          },
          je = () => {
            var pt, en;
            console.error(
              "[Music] Audio error:",
              (pt = A.error) == null ? void 0 : pt.code,
              (en = A.error) == null ? void 0 : en.message
            ),
              Me(!1);
          },
          Ze = () => {
            Gt && A.play().catch(() => {});
          };
        return (
          A.addEventListener("timeupdate", te),
          A.addEventListener("loadedmetadata", me),
          A.addEventListener("durationchange", Ie),
          A.addEventListener("canplay", Ze),
          A.addEventListener("error", je),
          () => {
            A.removeEventListener("timeupdate", te),
              A.removeEventListener("loadedmetadata", me),
              A.removeEventListener("durationchange", Ie),
              A.removeEventListener("canplay", Ze),
              A.removeEventListener("error", je);
          }
        );
      }, [Gt]),
      P.useEffect(() => {
        const A = vt.current;
        !A ||
          !Ue ||
          (Gt
            ? A.paused && A.readyState >= 2 && A.play().catch(() => {})
            : A.paused || A.pause());
      }, [Gt, Ue == null ? void 0 : Ue.id]);
    const Ar = P.useCallback(() => {
        const A = vt.current;
        !A ||
          !Ue ||
          (Gt
            ? (A.pause(), _n(!1))
            : A.play()
                .then(() => _n(!0))
                .catch(() => {}));
      }, [Gt, Ue]),
      yr = P.useCallback(() => {
        if (Lt.length === 0) return;
        const A = (mt.currentIndex - 1 + Lt.length) % Lt.length;
        Xr(A);
      }, [Lt.length]),
      vr = P.useCallback(() => {
        if (Lt.length === 0) return;
        const A = (mt.currentIndex + 1) % Lt.length;
        Xr(A);
      }, [Lt.length]),
      Jr = P.useCallback((A) => {
        const te = vt.current,
          me = Xn.current;
        if (!te || !me || !isFinite(te.duration)) return;
        const Ie = me.getBoundingClientRect(),
          je = Math.max(0, Math.min(1, (A.clientX - Ie.left) / Ie.width));
        te.currentTime = je * te.duration;
      }, []),
      qr = P.useCallback(
        async (A) => {
          Me(!0);
          try {
            const te = [];
            for (let Ie = 0; Ie < A.length; Ie++) {
              const je = await Ld(A[Ie]);
              te.push(je);
            }
            const me = await Vt();
            if ((Kt(me), (mt.cachedPlaylist = me), !Ue && te.length > 0)) {
              const Ie = me.findIndex((je) => je.id === te[0].id);
              Ie >= 0 && qt(Ie);
            }
            te.length > 0 && le(te[te.length - 1].id), er();
          } catch (te) {
            alert((te == null ? void 0 : te.message) || "上传失败");
          } finally {
            Me(!1);
          }
        },
        [Ue]
      ),
      Qr = P.useCallback(async (A) => {
        Me(!0);
        try {
          const te = await Bd(A),
            me = await Vt();
          Kt(me), (mt.cachedPlaylist = me), le(te.id);
        } catch (te) {
          alert((te == null ? void 0 : te.message) || "添加失败");
        } finally {
          Me(!1);
        }
      }, []),
      Na = P.useCallback(
        async (A) => {
          await zd(A);
          const te = await Vt();
          Kt(te),
            (mt.cachedPlaylist = te),
            te.length === 0
              ? (qt(0),
                _n(!1),
                vt.current && (vt.current.pause(), (vt.current.src = "")),
                sn(null))
              : ln >= te.length && qt(te.length - 1),
            er();
        },
        [ln]
      ),
      ea = P.useCallback(async (A, te) => {
        var Ie;
        await co(A, te);
        let me = await Vt();
        if ((Kt(me), (mt.cachedPlaylist = me), mt.audioTrackId === A)) {
          const je = me.find((Ze) => Ze.id === A);
          je && !((Ie = vt.current) != null && Ie.paused) && sn(je);
        }
        if (te.title !== void 0 || te.artist !== void 0) {
          const je = me.find((Ze) => Ze.id === A);
          je &&
            je.title &&
            je.artist &&
            Yd(je.title, je.artist, je.duration)
              .then(async (Ze) => {
                await co(A, { lyrics: Ze }),
                  (me = await Vt()),
                  Kt(me),
                  (mt.cachedPlaylist = me);
              })
              .catch(() => {});
        }
      }, []),
      Pa = P.useCallback((A) => {
        qt(A), _n(!0), F(!1);
      }, []),
      Rr = P.useRef(null),
      jr = P.useRef(null),
      Nr = P.useRef(null),
      ta = P.useRef(null),
      na = P.useRef(null),
      Ma = P.useRef(null),
      Pr = P.useRef(null),
      ra = P.useRef(null),
      Mr = P.useRef(null),
      aa = P.useRef(null),
      Or = P.useRef(null),
      st = ko(v, Mi),
      Mt = ko(x, bo),
      Yt = st.toLowerCase() !== Mi,
      Cn = Mt.toLowerCase() !== bo,
      ze = {
        title: { color: Cn ? Mt : ho(Mt, 30) },
        primary: { color: Cn ? Mt : ho(Mt, 18) },
        secondary: { color: Cn ? Mt : an(Mt, 0.82) },
        tertiary: { color: Cn ? Mt : an(Mt, 0.7) },
        label: { color: Cn ? Mt : an(ho(Mt, 18), 0.92) },
      },
      kt = { color: st },
      Qt = Yt ? "w-[22px] h-[22px]" : "w-[22px] h-[22px] opacity-70",
      oa = Yt ? void 0 : { opacity: 0.7 },
      xn =
        "w-[60px] h-[60px] bg-white/20 backdrop-blur-md border border-white/40 rounded-[22px] shadow-sm flex items-center justify-center group-hover:bg-white/30 transition-colors shrink-0 overflow-hidden",
      un = "text-[10px] font-bold tracking-wider leading-none",
      Zn = ["一", "二", "三", "四", "五", "六", "日"],
      Et = Qd(new Date(), ft),
      wr = `${Et.getMonth() + 1}月`,
      _r = Et.getFullYear(),
      Fn = `${Et.getFullYear()}-${String(Et.getMonth() + 1).padStart(2, "0")}`,
      Jn = (new Date(Et.getFullYear(), Et.getMonth(), 1).getDay() + 6) % 7,
      xr = new Date(Et.getFullYear(), Et.getMonth() + 1, 0).getDate(),
      ia = tt
        .filter((A) => A.monthKey === Fn)
        .reduce((A, te) => {
          var Ie;
          const me =
            ((Ie = te.emoji) == null ? void 0 : Ie.trim()) || qd[te.eventType];
          return (
            me &&
              (A[te.dateKey] || (A[te.dateKey] = []),
              A[te.dateKey].includes(me) || A[te.dateKey].push(me)),
            A
          );
        }, {}),
      sa = Array.from({ length: 42 }, (A, te) => {
        const me = te - Jn + 1;
        return me > 0 && me <= xr ? me : null;
      }),
      Oa = e.needsTransformSafePositioning
        ? "absolute w-[96px] h-[96px] rounded-full overflow-hidden border-[2.5px] border-white bg-slate-50 shadow-md cursor-pointer group pointer-events-auto"
        : "absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[96px] h-[96px] rounded-full overflow-hidden border-[2.5px] border-white bg-slate-50 shadow-md cursor-pointer group pointer-events-auto",
      ca = e.needsTransformSafePositioning
        ? { top: "45%", left: "50%", marginTop: "-48px", marginLeft: "-48px" }
        : void 0,
      Lr = e.needsTransformSafePositioning
        ? "fixed bottom-[124px] inset-x-0 mx-auto w-fit flex items-center justify-center gap-2 z-50 pointer-events-none"
        : "absolute bottom-[124px] left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 z-50 pointer-events-none",
      Da = e.needsTransformSafePositioning
        ? "fixed bottom-8 inset-x-0 mx-auto w-[90%] max-w-[360px] h-[84px] bg-white/10 backdrop-blur-3xl border border-white/30 rounded-[42px] shadow-sm flex items-center justify-around px-3 z-50"
        : "absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[360px] h-[84px] bg-white/10 backdrop-blur-3xl border border-white/30 rounded-[42px] shadow-sm flex items-center justify-around px-3 z-50",
      qn = [
        { id: "map", label: "地图", icon: Lu, onClick: () => i("map") },
        {
          id: "profiling",
          label: "侧写",
          icon: Zu,
          onClick: () => i("profiling"),
        },
        {
          id: "reflection",
          label: "倒影",
          icon: Cd,
          onClick: () => i("reflection"),
        },
        { id: "forum", label: "湍流", icon: Sd, onClick: () => i("forum") },
      ],
      br = [
        { id: "assets", label: "资产", icon: Iu, onClick: () => i("wallet") },
        { id: "store", label: "商城", icon: yu, onClick: () => i("shop") },
        {
          id: "reading",
          label: "浮生",
          icon: Uu,
          onClick: () => i("floating_life"),
        },
        { id: "live", label: "百相", icon: Hu, onClick: () => i("baixiang") },
      ],
      $t = (A, te) => {
        var je;
        const me = (je = A.target.files) == null ? void 0 : je[0];
        if (!me) return;
        const Ie = new FileReader();
        (Ie.onload = (Ze) => {
          var en;
          const pt = new Image();
          (pt.onload = () => {
            const tn = document.createElement("canvas");
            let Ct = pt.width,
              St = pt.height;
            const Wt = 1e3;
            Ct > St
              ? Ct > Wt && ((St *= Wt / Ct), (Ct = Wt))
              : St > Wt && ((Ct *= Wt / St), (St = Wt)),
              (tn.width = Ct),
              (tn.height = St);
            const Qn = tn.getContext("2d");
            Qn == null || Qn.drawImage(pt, 0, 0, Ct, St);
            const zr = tn.toDataURL("image/jpeg", 0.7);
            te(zr);
          }),
            (pt.src = (en = Ze.target) == null ? void 0 : en.result);
        }),
          Ie.readAsDataURL(me);
      },
      dn = (A, te) => {
        Qe({ ref: A, setter: te });
      },
      la = (A) => {
        if (Jt.current) return;
        const te = A.currentTarget.scrollLeft,
          me = A.currentTarget.clientWidth,
          Ie = a(Math.round(te / me));
        Ie !== at && (It(Ie), (vn.current = !0), d(Ie));
      },
      La = (A, te, me) => {
        const Ie = A.clientWidth;
        if (!Ie) return;
        const je = A.scrollLeft / Ie;
        let Ze;
        if (me !== void 0) {
          const pt = je > me ? 1 : je < me ? -1 : 0,
            en = 0.15,
            tn = Math.abs(je - me);
          Ze = a(tn > en ? me + pt : me);
        } else Ze = a(Math.round(je));
        (Jt.current = !0),
          window.clearTimeout(Bn.current),
          (Bn.current = window.setTimeout(() => {
            Jt.current = !1;
          }, 400)),
          A.scrollTo({ left: Ie * Ze, behavior: te }),
          It(Ze),
          (vn.current = !0),
          d(Ze);
      },
      kr = P.useCallback(() => {
        if (typeof window > "u") return;
        const A = window.navigator.userAgent;
        if (
          !(
            /AppleWebKit/i.test(A) &&
            /Mobile/i.test(A) &&
            !/CriOS|FxiOS|EdgiOS/i.test(A)
          )
        )
          return;
        const me = nn.current;
        if (!me) return;
        const Ie = me.children;
        for (let je = 0; je < Ie.length; je++)
          Ie[je].style.transform = "translateZ(0)";
        me.offsetHeight;
        for (let je = 0; je < Ie.length; je++) Ie[je].style.transform = "";
      }, []),
      Ba = () => {
        (yt.current.startX = 0),
          (yt.current.startScrollLeft = 0),
          (yt.current.startPage = 0),
          (yt.current.moved = !1),
          ht(!1);
      },
      ua = () => {
        var Ie;
        (Ie = rn.current) == null || Ie.call(rn);
        const A = (je) => {
            je.preventDefault(), je.stopPropagation(), me();
          },
          te = window.setTimeout(() => {
            me();
          }, 0),
          me = () => {
            window.removeEventListener("click", A, !0),
              window.clearTimeout(te),
              (rn.current = null);
          };
        window.addEventListener("click", A, !0), (rn.current = me);
      },
      za = (A) =>
        A instanceof HTMLElement
          ? !!A.closest(
              'input, textarea, select, button, [contenteditable="true"]'
            )
          : !1,
      da = (A) => {
        var en;
        if (A.button !== 0 || za(A.target)) return;
        const te = nn.current;
        if (!te) return;
        const me = te.clientWidth;
        (yt.current.startX = A.clientX),
          (yt.current.startScrollLeft = te.scrollLeft),
          (yt.current.startPage = me ? a(Math.round(te.scrollLeft / me)) : 0),
          (yt.current.moved = !1),
          ht(!0),
          (Jt.current = !0),
          (en = Dt.current) == null || en.call(Dt);
        const Ie = (tn) => {
            const Ct = nn.current,
              St = yt.current;
            if (!Ct) return;
            const Wt = tn.clientX - St.startX;
            (!St.moved && Math.abs(Wt) < t) ||
              (St.moved || (St.moved = !0),
              (Ct.scrollLeft = St.startScrollLeft - Wt),
              tn.preventDefault());
          },
          je = (tn) => {
            var Wt;
            const Ct = nn.current,
              St = yt.current.moved;
            (Wt = Dt.current) == null || Wt.call(Dt),
              (Dt.current = null),
              Ct && St
                ? (La(Ct, tn, yt.current.startPage), ua())
                : (Jt.current = !1),
              Ba();
          },
          Ze = () => {
            je("smooth");
          },
          pt = () => {
            je("auto");
          };
        window.addEventListener("mousemove", Ie),
          window.addEventListener("mouseup", Ze),
          window.addEventListener("blur", pt),
          (Dt.current = () => {
            window.removeEventListener("mousemove", Ie),
              window.removeEventListener("mouseup", Ze),
              window.removeEventListener("blur", pt);
          });
      };
    return (
      P.useEffect(() => {
        const A = nn.current;
        if (!A) return;
        const te = a(n);
        if (te !== n) {
          d(te);
          return;
        }
        if (vn.current) {
          (vn.current = !1), It(te);
          return;
        }
        const me = () => {
          const je = A.clientWidth;
          A.scrollTo({ left: je * te, behavior: "instant" }), It(te);
        };
        me();
        const Ie = window.setTimeout(me, 0);
        return () => window.clearTimeout(Ie);
      }, [n, d]),
      P.useEffect(() => {
        const A = window.requestAnimationFrame(() => {
          kr(),
            window.requestAnimationFrame(() => {
              kr();
            });
        });
        return () => window.cancelAnimationFrame(A);
      }, [kr, at, Gt, Ue == null ? void 0 : Ue.id]),
      P.useEffect(
        () => () => {
          var A, te;
          (A = Dt.current) == null || A.call(Dt),
            (te = rn.current) == null || te.call(rn);
        },
        []
      ),
      g.jsxs("div", {
        className:
          "relative w-full h-full overflow-hidden flex flex-col safe-top",
        children: [
          g.jsxs("div", {
            ref: nn,
            id: "echoes-desktop-pager",
            className: `flex-1 w-full flex overflow-x-auto snap-x snap-mandatory pb-32 z-10 relative ${
              bt ? "cursor-grabbing select-none" : "cursor-grab"
            }`,
            style: { touchAction: "pan-x pan-y" },
            onMouseDown: da,
            onScroll: la,
            children: [
              g.jsxs("div", {
                className:
                  "min-w-full h-full overflow-y-auto flex-shrink-0 snap-center snap-always px-4 flex flex-col items-center pt-4 pb-4",
                style: { willChange: "transform" },
                children: [
                  g.jsxs("div", {
                    className:
                      "w-full max-w-[320px] mx-auto shrink-0 aspect-square relative rounded-[40px] overflow-hidden shadow-sm border border-white/20",
                    children: [
                      g.jsxs("div", {
                        className:
                          "w-full h-[calc(45%+40px)] absolute top-0 overflow-hidden cursor-pointer group",
                        style: {
                          maskImage:
                            "linear-gradient(black, black), radial-gradient(circle at 100% 100%, transparent 39.5px, black 40.5px), radial-gradient(circle at 0% 100%, transparent 39.5px, black 40.5px)",
                          maskSize:
                            "100% calc(100% - 40px), 40px 40px, 40px 40px",
                          maskPosition: "top center, bottom left, bottom right",
                          maskRepeat: "no-repeat",
                          WebkitMaskImage:
                            "linear-gradient(black, black), radial-gradient(circle at 100% 100%, transparent 39.5px, black 40.5px), radial-gradient(circle at 0% 100%, transparent 39.5px, black 40.5px)",
                          WebkitMaskSize:
                            "100% calc(100% - 40px), 40px 40px, 40px 40px",
                          WebkitMaskPosition:
                            "top center, bottom left, bottom right",
                          WebkitMaskRepeat: "no-repeat",
                        },
                        onClick: () => dn(Rr, b),
                        children: [
                          g.jsx("img", {
                            src: s,
                            alt: "Cover",
                            className:
                              "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                          }),
                          g.jsx("div", {
                            className:
                              "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center",
                            children: g.jsx("span", {
                              className:
                                "text-white/0 group-hover:text-white/80 font-medium text-sm transition-colors py-4 px-12 shadow-sm rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100",
                              children: "更换背景",
                            }),
                          }),
                        ],
                      }),
                      g.jsx("input", {
                        type: "file",
                        accept: "image/*",
                        className: "hidden",
                        ref: Rr,
                        onChange: (A) => $t(A, b),
                      }),
                      g.jsx("input", {
                        type: "file",
                        accept: "image/*",
                        className: "hidden",
                        ref: jr,
                        onChange: (A) => $t(A, S),
                      }),
                      g.jsx("input", {
                        type: "file",
                        accept: "image/*",
                        className: "hidden",
                        ref: Nr,
                        onChange: (A) => $t(A, T),
                      }),
                      g.jsx("input", {
                        type: "file",
                        accept: "image/*",
                        className: "hidden",
                        ref: ta,
                        onChange: (A) => $t(A, C),
                      }),
                      g.jsx("input", {
                        type: "file",
                        accept: "image/*",
                        className: "hidden",
                        ref: na,
                        onChange: (A) => $t(A, Ne),
                      }),
                      g.jsx("input", {
                        type: "file",
                        accept:
                          ".mp3,.m4a,.aac,.ogg,.wav,.flac,.wma,.opus,audio/*",
                        multiple: !0,
                        className: "hidden",
                        ref: Vn,
                        onChange: (A) => {
                          var te;
                          (te = A.target.files) != null &&
                            te.length &&
                            (qr(A.target.files), (A.target.value = ""));
                        },
                      }),
                      g.jsx("input", {
                        type: "file",
                        accept: "image/*",
                        className: "hidden",
                        ref: Ma,
                        onChange: (A) => $t(A, gt),
                      }),
                      g.jsx("input", {
                        type: "file",
                        accept: "image/*",
                        className: "hidden",
                        ref: Pr,
                        onChange: (A) => $t(A, G),
                      }),
                      g.jsx("input", {
                        type: "file",
                        accept: "image/*",
                        className: "hidden",
                        ref: ra,
                        onChange: (A) => $t(A, R),
                      }),
                      g.jsx("input", {
                        type: "file",
                        accept: "image/*",
                        className: "hidden",
                        ref: Mr,
                        onChange: (A) => $t(A, re),
                      }),
                      g.jsx("input", {
                        type: "file",
                        accept: "image/*",
                        className: "hidden",
                        ref: aa,
                        onChange: (A) => $t(A, Y),
                      }),
                      g.jsx("input", {
                        type: "file",
                        accept: "image/*",
                        className: "hidden",
                        ref: Or,
                        onChange: (A) => $t(A, _e),
                      }),
                      g.jsx("div", {
                        className:
                          "w-full h-[55%] absolute bottom-0 z-10 bg-white/10 backdrop-blur-3xl border-t border-white/30 rounded-t-[40px] shadow-[0_-8px_30px_rgb(0,0,0,0.04)]",
                      }),
                      g.jsxs("div", {
                        className:
                          "absolute inset-0 z-20 flex flex-col items-center pointer-events-none",
                        children: [
                          g.jsxs("div", {
                            className: Oa,
                            style: ca,
                            onClick: () => dn(jr, S),
                            children: [
                              g.jsx("img", {
                                src: f,
                                alt: "Avatar",
                                className:
                                  "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                              }),
                              g.jsx("div", {
                                className:
                                  "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center",
                                children: g.jsx("span", {
                                  className:
                                    "text-white/0 group-hover:text-white/90 font-bold text-xs transition-colors drop-shadow-md",
                                  children: "更换",
                                }),
                              }),
                            ],
                          }),
                          g.jsx("input", {
                            type: "file",
                            accept: "image/*",
                            className: "hidden",
                            ref: jr,
                            onChange: (A) => $t(A, S),
                          }),
                          g.jsxs("div", {
                            className:
                              "mt-auto h-[55%] w-full flex flex-col items-center justify-center pt-[36px] pb-4 px-4 focus-within:bg-white/5 transition-colors rounded-b-[40px] pointer-events-auto",
                            children: [
                              g.jsx("input", {
                                type: "text",
                                value: c,
                                onChange: (A) => h(A.target.value),
                                className:
                                  "bg-transparent text-center font-bold text-[17px] w-full outline-none placeholder:text-slate-400/50 mb-1.5",
                                style: ze.title,
                                placeholder: "Username",
                              }),
                              g.jsx("textarea", {
                                rows: 2,
                                value: o,
                                onChange: (A) => u(A.target.value),
                                className:
                                  "bg-transparent text-[11px] font-medium tracking-wide text-center w-full outline-none placeholder:text-slate-400/50 mb-3 resize-none overflow-hidden leading-relaxed",
                                style: ze.secondary,
                                placeholder: "Signature",
                              }),
                              g.jsx("input", {
                                type: "text",
                                value: _,
                                onChange: (A) => w(A.target.value),
                                className:
                                  "bg-transparent text-[11px] font-medium outline-none text-center w-full placeholder:text-slate-400/50 mt-0",
                                style: ze.secondary,
                                placeholder: "📍 Location",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className:
                      "w-full max-w-[340px] mx-auto mt-6 shrink-0 flex justify-between px-3 h-[180px] gap-x-2 relative",
                    children: [
                      g.jsxs("div", {
                        className:
                          "flex flex-col justify-between h-full w-[60px] flex-shrink-0",
                        children: [
                          g.jsxs("div", {
                            className:
                              "flex flex-col items-center gap-[10px] cursor-pointer group",
                            style: { touchAction: "manipulation" },
                            onClick: () => i("schedule"),
                            children: [
                              g.jsx("div", {
                                className:
                                  "w-[60px] h-[60px] bg-white/20 backdrop-blur-md border border-white/40 rounded-[22px] shadow-sm flex flex-col items-center justify-center group-hover:bg-white/30 transition-colors shrink-0 overflow-hidden",
                                style: kt,
                                children: p.calendar
                                  ? g.jsx("img", {
                                      src: p.calendar,
                                      alt: "日程",
                                      className: "w-full h-full object-cover",
                                    })
                                  : g.jsxs("div", {
                                      className:
                                        "flex flex-col items-center justify-center",
                                      children: [
                                        g.jsxs("span", {
                                          className:
                                            "text-[9px] font-bold mb-[2px] mt-1",
                                          style: oa,
                                          children: [
                                            "周",
                                            [
                                              "日",
                                              "一",
                                              "二",
                                              "三",
                                              "四",
                                              "五",
                                              "六",
                                            ][Et.getDay()],
                                          ],
                                        }),
                                        g.jsx("span", {
                                          className:
                                            "text-xl font-light leading-none",
                                          children: Et.getDate(),
                                        }),
                                      ],
                                    }),
                              }),
                              g.jsx("span", {
                                className:
                                  "text-[10px] font-bold tracking-wider leading-none",
                                style: ze.label,
                                children: "日程",
                              }),
                            ],
                          }),
                          g.jsxs("div", {
                            className:
                              "flex flex-col items-center gap-[10px] cursor-pointer group",
                            style: { touchAction: "manipulation" },
                            onClick: () => i("worldbook"),
                            children: [
                              g.jsx("div", {
                                className:
                                  "w-[60px] h-[60px] bg-white/20 backdrop-blur-md border border-white/40 rounded-[22px] shadow-sm flex items-center justify-center group-hover:bg-white/30 transition-colors shrink-0 overflow-hidden",
                                style: kt,
                                children: p.worldbook
                                  ? g.jsx("img", {
                                      src: p.worldbook,
                                      alt: "世界书",
                                      className: "w-full h-full object-cover",
                                    })
                                  : g.jsx(wu, {
                                      className: Qt,
                                      strokeWidth: 1.8,
                                    }),
                              }),
                              g.jsx("span", {
                                className:
                                  "text-[10px] font-bold tracking-wider leading-none",
                                style: ze.label,
                                children: "世界书",
                              }),
                            ],
                          }),
                        ],
                      }),
                      g.jsxs("div", {
                        className:
                          "flex flex-col justify-between h-full w-[60px] flex-shrink-0 mr-auto ml-3",
                        children: [
                          g.jsxs("div", {
                            className:
                              "flex flex-col items-center gap-[10px] cursor-pointer group",
                            style: { touchAction: "manipulation" },
                            onClick: () => i("user"),
                            children: [
                              g.jsx("div", {
                                className:
                                  "w-[60px] h-[60px] bg-white/20 backdrop-blur-md border border-white/40 rounded-[22px] shadow-sm flex items-center justify-center group-hover:bg-white/30 transition-colors shrink-0 overflow-hidden",
                                style: kt,
                                children: p.user
                                  ? g.jsx("img", {
                                      src: p.user,
                                      alt: "观测站",
                                      className: "w-full h-full object-cover",
                                    })
                                  : g.jsx(Gu, {
                                      className: Qt,
                                      strokeWidth: 1.8,
                                    }),
                              }),
                              g.jsx("span", {
                                className:
                                  "text-[10px] font-bold tracking-wider leading-none",
                                style: ze.label,
                                children: "观测站",
                              }),
                            ],
                          }),
                          g.jsxs("div", {
                            className:
                              "flex flex-col items-center gap-[10px] cursor-pointer group",
                            style: { touchAction: "manipulation" },
                            onClick: () => i("character"),
                            children: [
                              g.jsx("div", {
                                className:
                                  "w-[60px] h-[60px] bg-white/20 backdrop-blur-md border border-white/40 rounded-[22px] shadow-sm flex items-center justify-center group-hover:bg-white/30 transition-colors shrink-0 overflow-hidden",
                                style: kt,
                                children: p.character
                                  ? g.jsx("img", {
                                      src: p.character,
                                      alt: "档案馆",
                                      className: "w-full h-full object-cover",
                                    })
                                  : g.jsx(fd, {
                                      className: Qt,
                                      strokeWidth: 1.8,
                                    }),
                              }),
                              g.jsx("span", {
                                className:
                                  "text-[10px] font-bold tracking-wider leading-none",
                                style: ze.label,
                                children: "档案馆",
                              }),
                            ],
                          }),
                        ],
                      }),
                      g.jsxs("div", {
                        className:
                          "w-[155px] h-[172px] bg-white/10 backdrop-blur-3xl border border-white/30 rounded-[32px] shadow-sm p-3.5 flex flex-col relative overflow-hidden group cursor-pointer hover:bg-white/20 transition-colors shrink-0",
                        children: [
                          g.jsx("div", {
                            className:
                              "mb-2.5 flex items-center justify-between px-0.5",
                            children: g.jsx("input", {
                              type: "text",
                              className:
                                "w-full text-[10px] font-bold bg-transparent border-none outline-none pointer-events-auto overflow-hidden text-ellipsis whitespace-nowrap",
                              style: ze.title,
                              value: Z,
                              onChange: (A) => ve(A.target.value),
                              onClick: (A) => A.stopPropagation(),
                            }),
                          }),
                          g.jsxs("div", {
                            className:
                              "flex-1 flex flex-col gap-3 items-center justify-center pb-1",
                            children: [
                              g.jsxs("div", {
                                className:
                                  "w-full h-[46px] bg-white/20 rounded-full flex items-center px-1.5 py-1.5 border border-white/30 shadow-sm relative overflow-hidden",
                                children: [
                                  g.jsx("div", {
                                    className:
                                      "w-[34px] h-[34px] rounded-full bg-slate-200/50 shrink-0 shadow-inner overflow-hidden border border-white/40 cursor-pointer pointer-events-auto group-hover:bg-slate-300/50 transition-colors",
                                    onClick: (A) => {
                                      A.stopPropagation(), dn(Nr, T);
                                    },
                                    children: g.jsx("img", {
                                      src: y,
                                      alt: "widget-img-1",
                                      className:
                                        "w-full h-full object-cover opacity-90",
                                    }),
                                  }),
                                  g.jsxs("div", {
                                    className:
                                      "flex-1 flex flex-col items-center justify-center -space-y-0.5 ml-1",
                                    children: [
                                      g.jsx("input", {
                                        type: "text",
                                        className:
                                          "w-full text-[9px] font-serif italic tracking-wide bg-transparent border-none outline-none text-center pointer-events-auto",
                                        style: ze.secondary,
                                        value: I,
                                        onChange: (A) => M(A.target.value),
                                        onClick: (A) => A.stopPropagation(),
                                      }),
                                      g.jsx("input", {
                                        type: "text",
                                        className:
                                          "w-full text-[9px] font-serif italic tracking-wide bg-transparent border-none outline-none text-center pointer-events-auto",
                                        style: ze.secondary,
                                        value: O,
                                        onChange: (A) => U(A.target.value),
                                        onClick: (A) => A.stopPropagation(),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              g.jsxs("div", {
                                className:
                                  "w-full h-[46px] bg-white/20 rounded-full flex items-center px-1.5 py-1.5 border border-white/30 shadow-sm relative overflow-hidden",
                                children: [
                                  g.jsxs("div", {
                                    className:
                                      "flex-1 flex flex-col items-center justify-center -space-y-0.5 mr-1",
                                    children: [
                                      g.jsx("input", {
                                        type: "text",
                                        className:
                                          "w-full text-[9px] font-serif italic tracking-wide bg-transparent border-none outline-none text-center pointer-events-auto",
                                        style: ze.secondary,
                                        value: D,
                                        onChange: (A) => k(A.target.value),
                                        onClick: (A) => A.stopPropagation(),
                                      }),
                                      g.jsx("input", {
                                        type: "text",
                                        className:
                                          "w-full text-[9px] font-serif italic tracking-wide text-xs bg-transparent border-none outline-none text-center pointer-events-auto",
                                        style: ze.secondary,
                                        value: V,
                                        onChange: (A) => ee(A.target.value),
                                        onClick: (A) => A.stopPropagation(),
                                      }),
                                    ],
                                  }),
                                  g.jsx("div", {
                                    className:
                                      "w-[34px] h-[34px] rounded-full bg-slate-200/50 shrink-0 shadow-inner overflow-hidden border border-white/40 cursor-pointer pointer-events-auto group-hover:bg-slate-300/50 transition-colors",
                                    onClick: (A) => {
                                      A.stopPropagation(), dn(ta, C);
                                    },
                                    children: g.jsx("img", {
                                      src: J,
                                      alt: "widget-img-2",
                                      className:
                                        "w-full h-full object-cover opacity-90",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              g.jsxs("div", {
                className:
                  "min-w-full h-full overflow-y-auto flex-shrink-0 snap-center snap-always px-4 flex flex-col items-center pt-4 pb-4",
                style: { willChange: "transform" },
                children: [
                  g.jsxs("div", {
                    className:
                      "w-full max-w-[340px] mx-auto shrink-0 flex flex-col",
                    children: [
                      g.jsxs("div", {
                        className:
                          "w-full shrink-0 flex justify-between px-3 h-[180px] gap-x-2 relative",
                        children: [
                          g.jsxs("div", {
                            className:
                              "w-[155px] h-[172px] bg-white/10 backdrop-blur-3xl border border-white/30 rounded-[32px] shadow-sm p-3 flex flex-col relative overflow-hidden group hover:bg-white/20 transition-colors shrink-0",
                            children: [
                              g.jsxs("div", {
                                className: "flex items-start gap-2 mb-3",
                                children: [
                                  g.jsx("div", {
                                    className:
                                      "w-[45px] h-[45px] rounded-full overflow-hidden border-[2px] border-white/40 shadow-sm cursor-pointer shrink-0",
                                    onClick: (A) => {
                                      A.stopPropagation(), dn(Pr, G);
                                    },
                                    children: g.jsx("img", {
                                      src: X,
                                      alt: "widget-avatar",
                                      className: "w-full h-full object-cover",
                                    }),
                                  }),
                                  g.jsxs("div", {
                                    className:
                                      "flex-1 flex flex-col gap-[3px] pt-[2px] min-w-0",
                                    children: [
                                      g.jsx("input", {
                                        type: "text",
                                        className:
                                          "w-full text-[10px] font-bold bg-transparent border-none outline-none truncate pointer-events-auto text-center",
                                        style: ze.primary,
                                        value: Oe,
                                        onChange: (A) => Fe(A.target.value),
                                        onClick: (A) => A.stopPropagation(),
                                        placeholder: "标题",
                                      }),
                                      g.jsx("input", {
                                        type: "text",
                                        className:
                                          "w-full text-[9px] bg-transparent border-none outline-none truncate pointer-events-auto text-center",
                                        style: ze.tertiary,
                                        value: $e,
                                        onChange: (A) => it(A.target.value),
                                        onClick: (A) => A.stopPropagation(),
                                        placeholder: "副标题",
                                      }),
                                      g.jsx("input", {
                                        type: "text",
                                        className:
                                          "w-full text-[9px] bg-transparent border-none outline-none truncate pointer-events-auto text-center",
                                        style: ze.tertiary,
                                        value: ye,
                                        onChange: (A) => m(A.target.value),
                                        onClick: (A) => A.stopPropagation(),
                                        placeholder: "第三行",
                                      }),
                                      g.jsx("input", {
                                        type: "text",
                                        className:
                                          "w-full text-[9px] bg-transparent border-none outline-none truncate pointer-events-auto text-center",
                                        style: ze.tertiary,
                                        value: de,
                                        onChange: (A) => xe(A.target.value),
                                        onClick: (A) => A.stopPropagation(),
                                        placeholder: "第四行",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              g.jsxs("div", {
                                className:
                                  "flex gap-2 min-h-0 h-[60px] mt-auto",
                                children: [
                                  g.jsx("div", {
                                    className:
                                      "flex-1 rounded-[16px] overflow-hidden border border-white/30 shadow-sm cursor-pointer",
                                    onClick: (A) => {
                                      A.stopPropagation(), dn(ra, R);
                                    },
                                    children: g.jsx("img", {
                                      src: N,
                                      alt: "widget-img-1",
                                      className: "w-full h-full object-cover",
                                    }),
                                  }),
                                  g.jsx("div", {
                                    className:
                                      "flex-1 rounded-[16px] overflow-hidden border border-white/30 shadow-sm cursor-pointer",
                                    onClick: (A) => {
                                      A.stopPropagation(), dn(Mr, re);
                                    },
                                    children: g.jsx("img", {
                                      src: z,
                                      alt: "widget-img-2",
                                      className: "w-full h-full object-cover",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          g.jsx("div", {
                            className:
                              "flex flex-col justify-between h-full w-[60px] flex-shrink-0 ml-auto mr-3",
                            children: [qn[0], qn[2]].map(
                              ({ id: A, label: te, icon: me, onClick: Ie }) =>
                                g.jsxs(
                                  "div",
                                  {
                                    className:
                                      "flex flex-col items-center gap-[10px] cursor-pointer group",
                                    style: { touchAction: "manipulation" },
                                    onClick: Ie,
                                    children: [
                                      g.jsx("div", {
                                        className: xn,
                                        style: kt,
                                        children: p[A]
                                          ? g.jsx("img", {
                                              src: p[A],
                                              alt: te,
                                              className:
                                                "w-full h-full object-cover",
                                            })
                                          : g.jsx(me, {
                                              className: Qt,
                                              strokeWidth: 1.8,
                                            }),
                                      }),
                                      g.jsx("span", {
                                        className: un,
                                        style: ze.label,
                                        children: te,
                                      }),
                                    ],
                                  },
                                  A
                                )
                            ),
                          }),
                          g.jsx("div", {
                            className:
                              "flex flex-col justify-between h-full w-[60px] flex-shrink-0",
                            children: [qn[1], qn[3]].map(
                              ({ id: A, label: te, icon: me, onClick: Ie }) =>
                                g.jsxs(
                                  "div",
                                  {
                                    className:
                                      "flex flex-col items-center gap-[10px] cursor-pointer group",
                                    style: { touchAction: "manipulation" },
                                    onClick: Ie,
                                    children: [
                                      g.jsx("div", {
                                        className: xn,
                                        style: kt,
                                        children: p[A]
                                          ? g.jsx("img", {
                                              src: p[A],
                                              alt: te,
                                              className:
                                                "w-full h-full object-cover",
                                            })
                                          : g.jsx(me, {
                                              className: Qt,
                                              strokeWidth: 1.8,
                                            }),
                                      }),
                                      g.jsx("span", {
                                        className: un,
                                        style: ze.label,
                                        children: te,
                                      }),
                                    ],
                                  },
                                  A
                                )
                            ),
                          }),
                        ],
                      }),
                      g.jsx("div", {
                        className: "w-full mt-4 px-3 h-[123px] shrink-0",
                        children: g.jsxs("div", {
                          className:
                            "w-full h-full bg-white/10 backdrop-blur-3xl border border-white/30 rounded-[28px] shadow-sm p-2 flex items-center gap-3",
                          children: [
                            g.jsx("div", {
                              className:
                                "aspect-square h-full rounded-full shrink-0 flex items-center justify-center bg-white/10 border border-white/30 shadow-md cursor-pointer",
                              title: pe ? "关闭歌词" : "开启歌词",
                              onClick: (A) => {
                                A.stopPropagation(), ge((te) => !te);
                              },
                              children: g.jsx("div", {
                                className:
                                  "w-[85%] h-[85%] rounded-full flex items-center justify-center bg-white/5 border border-white/20",
                                children: g.jsx("div", {
                                  className: `w-[82%] h-[82%] rounded-full overflow-hidden border-[2px] border-white/40 shadow-inner ${
                                    Gt
                                      ? "animate-[spin_8s_linear_infinite]"
                                      : ""
                                  }`,
                                  children:
                                    Ue != null && Ue.coverArt
                                      ? g.jsx("img", {
                                          src: Ue.coverArt,
                                          alt: "cover",
                                          className:
                                            "w-full h-full object-cover",
                                        })
                                      : g.jsx("div", {
                                          className:
                                            "w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center",
                                          children: g.jsx(Gr, {
                                            className:
                                              "w-[38%] h-[38%] opacity-40",
                                            style: { color: st },
                                          }),
                                        }),
                                }),
                              }),
                            }),
                            g.jsxs("div", {
                              className:
                                "flex-1 flex flex-col items-center justify-center min-w-0",
                              children: [
                                g.jsx("p", {
                                  className:
                                    "w-full text-[12px] font-bold truncate text-center",
                                  style: ze.primary,
                                  children:
                                    (Ue == null ? void 0 : Ue.title) ||
                                    "尚无歌曲",
                                }),
                                g.jsx("p", {
                                  className:
                                    "w-full text-[9px] font-medium mt-0.5 truncate text-center",
                                  style: ze.tertiary,
                                  children:
                                    (Ue == null ? void 0 : Ue.artist) ||
                                    "点击歌单添加",
                                }),
                                g.jsxs("div", {
                                  className: "w-full mt-1.5 px-1",
                                  children: [
                                    g.jsx("div", {
                                      ref: Xn,
                                      className:
                                        "echoes-music-progress-bar w-full h-[3px] rounded-full bg-white/25 overflow-hidden cursor-pointer",
                                      onClick: (A) => {
                                        A.stopPropagation(), Jr(A);
                                      },
                                      children: g.jsx("div", {
                                        className:
                                          "h-full rounded-full transition-[width] duration-200",
                                        style: {
                                          width: `${
                                            j > 0 ? (E / j) * 100 : 0
                                          }%`,
                                          backgroundColor: st,
                                          opacity: Yt ? 0.92 : 0.68,
                                        },
                                      }),
                                    }),
                                    g.jsxs("div", {
                                      className:
                                        "mt-1 flex items-center justify-between text-[8px] font-medium",
                                      style: ze.tertiary,
                                      children: [
                                        g.jsx("span", { children: _o(E) }),
                                        g.jsx("span", { children: _o(j) }),
                                      ],
                                    }),
                                  ],
                                }),
                                g.jsxs("div", {
                                  className:
                                    "w-full flex items-center justify-between mt-1 px-1",
                                  children: [
                                    g.jsx("button", {
                                      className: "echoes-music-mode-btn",
                                      onClick: (A) => {
                                        A.stopPropagation(),
                                          Bt(
                                            We === "list"
                                              ? "repeat1"
                                              : We === "repeat1"
                                              ? "shuffle"
                                              : "list"
                                          );
                                      },
                                      children:
                                        We === "repeat1"
                                          ? g.jsx(cd, {
                                              className: "w-[13px] h-[13px]",
                                              style: {
                                                color: Yt ? st : an(st, 0.72),
                                              },
                                              strokeWidth: 2,
                                            })
                                          : We === "shuffle"
                                          ? g.jsx(gd, {
                                              className: "w-[13px] h-[13px]",
                                              style: {
                                                color: Yt ? st : an(st, 0.72),
                                              },
                                              strokeWidth: 2,
                                            })
                                          : g.jsx(ud, {
                                              className: "w-[13px] h-[13px]",
                                              style: {
                                                color: Yt ? st : an(st, 0.72),
                                              },
                                              strokeWidth: 2,
                                            }),
                                    }),
                                    g.jsxs("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        g.jsx("button", {
                                          className: "echoes-music-prev-btn",
                                          onClick: (A) => {
                                            A.stopPropagation(), yr();
                                          },
                                          children: g.jsx(vd, {
                                            className: "w-[15px] h-[15px]",
                                            style: {
                                              color: Yt ? st : an(st, 0.72),
                                            },
                                            strokeWidth: 2,
                                            fill: "currentColor",
                                          }),
                                        }),
                                        g.jsx("button", {
                                          className:
                                            "echoes-music-play-btn w-[30px] h-[30px] bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center",
                                          onClick: (A) => {
                                            A.stopPropagation(), Ar();
                                          },
                                          children: Gt
                                            ? g.jsx(Vu, {
                                                className: "w-[14px] h-[14px]",
                                                style: {
                                                  color: Yt ? st : an(st, 0.9),
                                                },
                                                strokeWidth: 2,
                                                fill: "currentColor",
                                              })
                                            : g.jsx(nd, {
                                                className:
                                                  "w-[14px] h-[14px] ml-[1px]",
                                                style: {
                                                  color: Yt ? st : an(st, 0.9),
                                                },
                                                strokeWidth: 2,
                                                fill: "currentColor",
                                              }),
                                        }),
                                        g.jsx("button", {
                                          className: "echoes-music-next-btn",
                                          onClick: (A) => {
                                            A.stopPropagation(), vr();
                                          },
                                          children: g.jsx(_d, {
                                            className: "w-[15px] h-[15px]",
                                            style: {
                                              color: Yt ? st : an(st, 0.72),
                                            },
                                            strokeWidth: 2,
                                            fill: "currentColor",
                                          }),
                                        }),
                                      ],
                                    }),
                                    g.jsx("button", {
                                      className: "echoes-music-list-btn",
                                      onClick: (A) => {
                                        A.stopPropagation(), F(!0);
                                      },
                                      children: g.jsx(Ou, {
                                        className: "w-[13px] h-[13px]",
                                        style: {
                                          color: Yt ? st : an(st, 0.72),
                                        },
                                        strokeWidth: 2,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className:
                      "w-full max-w-[340px] mx-auto mt-6 shrink-0 flex justify-between px-3 h-[180px] gap-x-2 relative",
                    children: [
                      g.jsx("div", {
                        className:
                          "flex flex-col justify-between h-full w-[60px] flex-shrink-0",
                        children: [br[0], br[2]].map(
                          ({ id: A, label: te, icon: me, onClick: Ie }) =>
                            g.jsxs(
                              "div",
                              {
                                className:
                                  "flex flex-col items-center gap-[10px] group cursor-pointer",
                                style: { touchAction: "manipulation" },
                                onClick: Ie,
                                children: [
                                  g.jsx("div", {
                                    className: xn,
                                    style: kt,
                                    children: p[A]
                                      ? g.jsx("img", {
                                          src: p[A],
                                          alt: te,
                                          className:
                                            "w-full h-full object-cover",
                                        })
                                      : g.jsx(me, {
                                          className: Qt,
                                          strokeWidth: 1.8,
                                        }),
                                  }),
                                  g.jsx("span", {
                                    className: un,
                                    style: ze.label,
                                    children: te,
                                  }),
                                ],
                              },
                              A
                            )
                        ),
                      }),
                      g.jsx("div", {
                        className:
                          "flex flex-col justify-between h-full w-[60px] flex-shrink-0 mr-auto ml-3",
                        children: [br[1], br[3]].map(
                          ({ id: A, label: te, icon: me, onClick: Ie }) =>
                            g.jsxs(
                              "div",
                              {
                                className:
                                  "flex flex-col items-center gap-[10px] group cursor-pointer",
                                style: { touchAction: "manipulation" },
                                onClick: Ie,
                                children: [
                                  g.jsx("div", {
                                    className: xn,
                                    style: kt,
                                    children: p[A]
                                      ? g.jsx("img", {
                                          src: p[A],
                                          alt: te,
                                          className:
                                            "w-full h-full object-cover",
                                        })
                                      : g.jsx(me, {
                                          className: Qt,
                                          strokeWidth: 1.8,
                                        }),
                                  }),
                                  g.jsx("span", {
                                    className: un,
                                    style: ze.label,
                                    children: te,
                                  }),
                                ],
                              },
                              A
                            )
                        ),
                      }),
                      g.jsxs("div", {
                        className:
                          "w-[155px] h-[172px] bg-white/10 backdrop-blur-3xl border border-white/30 rounded-[32px] shadow-sm flex flex-col relative overflow-hidden group hover:bg-white/20 transition-colors shrink-0",
                        children: [
                          g.jsxs("div", {
                            className:
                              "flex-1 flex flex-col items-center justify-center gap-[3px] px-3",
                            children: [
                              g.jsx("input", {
                                type: "text",
                                className:
                                  "w-full text-[10px] font-bold bg-transparent border-none outline-none truncate pointer-events-auto text-center",
                                style: ze.primary,
                                value: Q,
                                onChange: (A) => ce(A.target.value),
                                onClick: (A) => A.stopPropagation(),
                                placeholder: "第一行",
                              }),
                              g.jsx("input", {
                                type: "text",
                                className:
                                  "w-full text-[9px] bg-transparent border-none outline-none truncate pointer-events-auto text-center",
                                style: ze.tertiary,
                                value: B,
                                onChange: (A) => H(A.target.value),
                                onClick: (A) => A.stopPropagation(),
                                placeholder: "第二行",
                              }),
                              g.jsx("input", {
                                type: "text",
                                className:
                                  "w-full text-[9px] bg-transparent border-none outline-none truncate pointer-events-auto text-center",
                                style: ze.tertiary,
                                value: Ee,
                                onChange: (A) => fe(A.target.value),
                                onClick: (A) => A.stopPropagation(),
                                placeholder: "第三行",
                              }),
                              g.jsx("input", {
                                type: "text",
                                className:
                                  "w-full text-[9px] bg-transparent border-none outline-none truncate pointer-events-auto text-center",
                                style: ze.tertiary,
                                value: he,
                                onChange: (A) => Te(A.target.value),
                                onClick: (A) => A.stopPropagation(),
                                placeholder: "第四行",
                              }),
                              g.jsx("input", {
                                type: "text",
                                className:
                                  "w-full text-[9px] bg-transparent border-none outline-none truncate pointer-events-auto text-center",
                                style: ze.tertiary,
                                value: Pe,
                                onChange: (A) => Re(A.target.value),
                                onClick: (A) => A.stopPropagation(),
                                placeholder: "第五行",
                              }),
                            ],
                          }),
                          g.jsxs("div", {
                            className:
                              "h-[64px] bg-white/15 backdrop-blur-xl border border-white/30 rounded-[20px] flex items-center justify-between px-3",
                            children: [
                              g.jsx("div", {
                                className:
                                  "w-[32px] h-[32px] rounded-full overflow-hidden border-[1.5px] border-white/50 shadow-sm cursor-pointer shrink-0",
                                onClick: (A) => {
                                  A.stopPropagation(), dn(aa, Y);
                                },
                                children: g.jsx("img", {
                                  src: ae,
                                  alt: "avatar-1",
                                  className: "w-full h-full object-cover",
                                }),
                              }),
                              g.jsx("svg", {
                                className: "flex-1 h-[20px] mx-1",
                                viewBox: "0 0 80 20",
                                fill: "none",
                                preserveAspectRatio: "none",
                                children: g.jsx("polyline", {
                                  points:
                                    "0,10 18,10 24,3 30,17 36,6 42,14 48,10 80,10",
                                  stroke: Cn ? Mt : an(Mt, 0.5),
                                  strokeWidth: "1.5",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  fill: "none",
                                }),
                              }),
                              g.jsx("div", {
                                className:
                                  "w-[32px] h-[32px] rounded-full overflow-hidden border-[1.5px] border-white/50 shadow-sm cursor-pointer shrink-0",
                                onClick: (A) => {
                                  A.stopPropagation(), dn(Or, _e);
                                },
                                children: g.jsx("img", {
                                  src: ue,
                                  alt: "avatar-2",
                                  className: "w-full h-full object-cover",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              g.jsxs("div", {
                className:
                  "min-w-full h-full overflow-y-auto flex-shrink-0 snap-center snap-always px-4 flex flex-col items-center pt-4 pb-4",
                style: { willChange: "transform" },
                children: [
                  g.jsxs("div", {
                    className:
                      "w-full max-w-[320px] mx-auto shrink-0 aspect-square relative rounded-[40px] overflow-hidden shadow-sm border border-white/20 bg-white/10 backdrop-blur-3xl",
                    children: [
                      g.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-br from-white/45 via-white/18 to-white/10",
                      }),
                      g.jsx("div", {
                        className:
                          "absolute inset-0 border border-white/20 rounded-[40px] pointer-events-none",
                      }),
                      g.jsxs("div", {
                        className: "relative z-10 h-full p-4 flex flex-col",
                        children: [
                          g.jsxs("div", {
                            className: "flex items-start justify-between gap-3",
                            children: [
                              g.jsxs("div", {
                                children: [
                                  g.jsx("p", {
                                    className:
                                      "text-[10px] font-bold tracking-[0.22em] uppercase",
                                    style: ze.tertiary,
                                    children: "monthly view",
                                  }),
                                  g.jsxs("div", {
                                    className: "mt-1 flex items-end gap-1.5",
                                    children: [
                                      g.jsx("h3", {
                                        className:
                                          "text-[28px] font-semibold leading-none",
                                        style: ze.title,
                                        children: wr,
                                      }),
                                      g.jsx("span", {
                                        className:
                                          "text-[11px] font-medium leading-4",
                                        style: ze.secondary,
                                        children: _r,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              g.jsx("button", {
                                type: "button",
                                onClick: () => i("world_calendar"),
                                className:
                                  "echoes-calendar-btn w-9 h-9 rounded-[15px] bg-white/20 border border-white/35 flex items-center justify-center shadow-sm",
                                style: kt,
                                title: "打开世界日历",
                                children: g.jsx(xu, {
                                  className: Yt
                                    ? "w-[16px] h-[16px]"
                                    : "w-[16px] h-[16px] opacity-70",
                                  strokeWidth: 1.8,
                                }),
                              }),
                            ],
                          }),
                          g.jsx("div", {
                            className:
                              "mt-3 grid grid-cols-7 gap-1 text-[10px]",
                            children: Zn.map((A) =>
                              g.jsx(
                                "div",
                                {
                                  className: "text-center font-bold",
                                  style: ze.tertiary,
                                  children: A,
                                },
                                A
                              )
                            ),
                          }),
                          g.jsx("div", {
                            className:
                              "mt-2 grid flex-1 min-h-0 grid-cols-7 grid-rows-6 gap-1",
                            children: sa.map((A, te) => {
                              const me = A === Et.getDate(),
                                Ie = A
                                  ? `${Et.getFullYear()}-${String(
                                      Et.getMonth() + 1
                                    ).padStart(2, "0")}-${String(A).padStart(
                                      2,
                                      "0"
                                    )}`
                                  : "",
                                Ze = (Ie ? ia[Ie] || [] : [])[0] || "";
                              return g.jsx(
                                "div",
                                {
                                  className: `h-full min-h-0 rounded-[14px] border flex items-center justify-center text-[11px] font-medium transition-colors ${
                                    A
                                      ? "border-white/20 bg-white/10"
                                      : "border-transparent bg-transparent"
                                  } ${
                                    me
                                      ? "bg-white/30 border-white/40 shadow-sm"
                                      : ""
                                  }`,
                                  style: A
                                    ? me
                                      ? ze.primary
                                      : ze.secondary
                                    : void 0,
                                  children: A
                                    ? Ze
                                      ? g.jsx("span", {
                                          className: "text-[13px] leading-none",
                                          title: Ze,
                                          children: Ze,
                                        })
                                      : A
                                    : "",
                                },
                                `${A ?? "empty"}-${te}`
                              );
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className:
                      "w-full max-w-[340px] mx-auto mt-6 shrink-0 flex justify-between px-3 h-[180px] gap-x-2 relative",
                    children: [
                      g.jsxs("div", {
                        className:
                          "w-[155px] h-[172px] bg-white/10 backdrop-blur-3xl border border-white/30 rounded-[32px] shadow-sm shrink-0 flex flex-col items-center justify-center select-none relative overflow-hidden",
                        children: [
                          g.jsx("div", {
                            className: "obs-count",
                            style: {
                              color:
                                (fa = ze.secondary) == null ? void 0 : fa.color,
                            },
                            children: ir.map((A) =>
                              g.jsx(
                                "span",
                                {
                                  className: `obs-num ${
                                    A.exiting ? "obs-num-exit" : "obs-num-enter"
                                  }`,
                                  children: A.value.toLocaleString(),
                                },
                                A.id
                              )
                            ),
                          }),
                          g.jsxs("div", {
                            className: `obs-field ${Gn ? "obs-gazing" : ""}`,
                            onPointerDown: mr,
                            onPointerUp: Ln,
                            onPointerLeave: Ln,
                            onPointerCancel: Ln,
                            children: [
                              g.jsx("div", { className: "obs-bg-glow" }),
                              uo
                                .slice(
                                  0,
                                  Math.min(fo + Math.floor(jt / 1e3), uo.length)
                                )
                                .map((A, te) => {
                                  const me = Math.min(
                                      fo + Math.floor(jt / 1e3),
                                      uo.length
                                    ),
                                    Ie = cr && te === me - 1 && te >= fo;
                                  return g.jsx(
                                    "div",
                                    {
                                      className: `obs-dust ${
                                        Ie ? "obs-dust-new" : ""
                                      }`,
                                      style: {
                                        top: A.top,
                                        left: A.left,
                                        width: `${A.size}px`,
                                        height: `${A.size}px`,
                                        "--obs-dust-opacity": A.opacity,
                                        opacity: A.opacity,
                                      },
                                    },
                                    te
                                  );
                                }),
                              Xt.map((A) =>
                                g.jsxs(
                                  $i.Fragment,
                                  {
                                    children: [
                                      g.jsx("div", {
                                        className: `obs-halo ${
                                          Gn ? "obs-gaze-pulse" : ""
                                        }`,
                                        onAnimationEnd: () =>
                                          Zt((te) =>
                                            te.filter((me) => me !== A)
                                          ),
                                      }),
                                      g.jsx("div", { className: "obs-edge" }),
                                    ],
                                  },
                                  A
                                )
                              ),
                              g.jsx("div", {
                                className: `obs-core ${
                                  Pt ? "obs-core-tap" : ""
                                }`,
                              }),
                            ],
                          }),
                          g.jsx("div", {
                            className: "obs-hint",
                            style: {
                              color:
                                (Br = ze.secondary) == null ? void 0 : Br.color,
                            },
                            children: ur.map((A) =>
                              g.jsx(
                                "span",
                                {
                                  className: `obs-num ${
                                    A.exiting ? "obs-num-exit" : "obs-num-enter"
                                  }`,
                                  children: A.text,
                                },
                                A.id
                              )
                            ),
                          }),
                        ],
                      }),
                      g.jsxs("div", {
                        className:
                          "flex flex-col justify-between h-full w-[60px] flex-shrink-0 ml-auto mr-3",
                        children: [
                          g.jsxs("div", {
                            className:
                              "flex flex-col items-center gap-[10px] cursor-pointer group",
                            style: { touchAction: "manipulation" },
                            onClick: () => i("diary"),
                            children: [
                              g.jsx("div", {
                                className: xn,
                                style: kt,
                                children: p.diary
                                  ? g.jsx("img", {
                                      src: p.diary,
                                      alt: "日记",
                                      className: "w-full h-full object-cover",
                                    })
                                  : g.jsx(qu, {
                                      className: Qt,
                                      strokeWidth: 1.8,
                                    }),
                              }),
                              g.jsx("span", {
                                className: un,
                                style: ze.label,
                                children: "日记",
                              }),
                            ],
                          }),
                          g.jsxs("div", {
                            className:
                              "flex flex-col items-center gap-[10px] cursor-pointer group",
                            style: { touchAction: "manipulation" },
                            onClick: () => i("house"),
                            children: [
                              g.jsx("div", {
                                className: xn,
                                style: kt,
                                children: p.house
                                  ? g.jsx("img", {
                                      src: p.house,
                                      alt: "小屋",
                                      className: "w-full h-full object-cover",
                                    })
                                  : g.jsx(vs, {
                                      className: Qt,
                                      strokeWidth: 1.8,
                                    }),
                              }),
                              g.jsx("span", {
                                className: un,
                                style: ze.label,
                                children: "小屋",
                              }),
                            ],
                          }),
                        ],
                      }),
                      g.jsxs("div", {
                        className:
                          "flex flex-col justify-between h-full w-[60px] flex-shrink-0",
                        children: [
                          g.jsxs("div", {
                            className:
                              "flex flex-col items-center gap-[10px] cursor-pointer group",
                            style: { touchAction: "manipulation" },
                            onClick: () => i("wardrobe"),
                            children: [
                              g.jsx("div", {
                                className: xn,
                                style: kt,
                                children: p.wardrobe
                                  ? g.jsx("img", {
                                      src: p.wardrobe,
                                      alt: "收藏室",
                                      className: "w-full h-full object-cover",
                                    })
                                  : g.jsx(Cu, {
                                      className: Qt,
                                      strokeWidth: 1.8,
                                    }),
                              }),
                              g.jsx("span", {
                                className: un,
                                style: ze.label,
                                children: "收藏室",
                              }),
                            ],
                          }),
                          g.jsxs("div", {
                            className:
                              "flex flex-col items-center gap-[10px] cursor-pointer group",
                            style: { touchAction: "manipulation" },
                            onClick: () => i("timeslot"),
                            children: [
                              g.jsx("div", {
                                className: xn,
                                style: kt,
                                children: p.timeslot
                                  ? g.jsx("img", {
                                      src: p.timeslot,
                                      alt: "时隙",
                                      className: "w-full h-full object-cover",
                                    })
                                  : g.jsx(Ru, {
                                      className: Qt,
                                      strokeWidth: 1.8,
                                    }),
                              }),
                              g.jsx("span", {
                                className: un,
                                style: ze.label,
                                children: "时隙",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          g.jsxs("div", {
            className: Lr,
            children: [
              g.jsx("div", {
                className: `w-1.5 h-1.5 rounded-full transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.3)] ${
                  at === 0 ? "bg-white/60 w-3" : "bg-white/30"
                }`,
              }),
              g.jsx("div", {
                className: `w-1.5 h-1.5 rounded-full transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.3)] ${
                  at === 1 ? "bg-white/60 w-3" : "bg-white/30"
                }`,
              }),
              g.jsx("div", {
                className: `w-1.5 h-1.5 rounded-full transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.3)] ${
                  at === 2 ? "bg-white/60 w-3" : "bg-white/30"
                }`,
              }),
            ],
          }),
          g.jsxs("div", {
            className: `echoes-bottom-dock ${Da}`,
            children: [
              g.jsx("div", {
                className:
                  "echoes-dock-chat w-14 h-14 bg-white/20 border border-white/40 rounded-[22px] flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors shadow-sm overflow-hidden",
                style: kt,
                role: "button",
                onClick: () => i("chat"),
                children: p.chat
                  ? g.jsx("img", {
                      src: p.chat,
                      alt: "聊天",
                      className: "w-full h-full object-cover",
                    })
                  : g.jsx(zu, { className: "w-6 h-6" }),
              }),
              g.jsx("div", {
                className:
                  "echoes-dock-world w-14 h-14 bg-white/20 border border-white/40 rounded-[22px] flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors shadow-sm overflow-hidden",
                style: kt,
                role: "button",
                onClick: () => i("world"),
                children: p.world
                  ? g.jsx("img", {
                      src: p.world,
                      alt: "回响",
                      className: "w-full h-full object-cover",
                    })
                  : g.jsx(mu, { className: "w-6 h-6" }),
              }),
              g.jsx("div", {
                className:
                  "echoes-dock-settings w-14 h-14 bg-white/20 border border-white/40 rounded-[22px] flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors shadow-sm overflow-hidden",
                style: kt,
                role: "button",
                onClick: () => i("settings"),
                children: p.settings
                  ? g.jsx("img", {
                      src: p.settings,
                      alt: "设置",
                      className: "w-full h-full object-cover",
                    })
                  : g.jsx(pd, { className: "w-6 h-6" }),
              }),
            ],
          }),
          g.jsx(Vd, {
            playlist: Lt,
            currentTrackId: (Ue == null ? void 0 : Ue.id) || null,
            isOpen: K,
            onClose: () => F(!1),
            onSelect: Pa,
            onAdd: qr,
            onAddByUrl: Qr,
            onRemove: Na,
            onUpdate: ea,
            autoEditTrackId: oe,
            onAutoEditConsumed: () => le(null),
            iconColor: st,
            textColor: Mt,
          }),
          g.jsx(Jd, {
            open: pe,
            track: Ue || null,
            audioRef: vt,
            onClose: () => ge(!1),
            onOffsetChange: async (A, te) => {
              await co(A, { lyricsOffset: te });
              const me = await Vt();
              Kt(me), (mt.cachedPlaylist = me);
            },
          }),
          rt &&
            g.jsx("div", {
              className:
                "fixed inset-0 z-[999] flex items-end justify-center bg-black/30 backdrop-blur-sm",
              onClick: () => Qe(null),
              children: g.jsxs("div", {
                className:
                  "w-full max-w-sm mb-4 mx-4 flex flex-col gap-2 animate-in slide-in-from-bottom duration-200",
                onClick: (A) => A.stopPropagation(),
                children: [
                  g.jsxs("div", {
                    className:
                      "bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden",
                    children: [
                      g.jsx("button", {
                        className:
                          "w-full py-3.5 text-center text-[15px] text-blue-600 font-medium active:bg-white/60",
                        onClick: () => {
                          var A;
                          (A = rt.ref.current) == null || A.click(), Qe(null);
                        },
                        children: "上传本地图片",
                      }),
                      g.jsx("div", { className: "h-px bg-gray-200/60" }),
                      g.jsx("button", {
                        className:
                          "w-full py-3.5 text-center text-[15px] text-blue-600 active:bg-white/60",
                        onClick: () => {
                          Qe(null);
                          const A = window.prompt("请输入图片的URL:");
                          A && A.trim() && rt.setter(A.trim());
                        },
                        children: "输入网络图片网址",
                      }),
                    ],
                  }),
                  g.jsx("button", {
                    className:
                      "w-full py-3.5 text-center text-[15px] text-blue-600 font-semibold bg-white/80 backdrop-blur-xl rounded-2xl active:bg-white/60",
                    onClick: () => Qe(null),
                    children: "取消",
                  }),
                ],
              }),
            }),
        ],
      })
    );
  },
  Wn = 40,
  Ca = 6,
  po = 48,
  tf = 96,
  Oi = 6,
  nf = 260,
  mo = 260,
  Er = () => {
    var e, r;
    return {
      w:
        ((e = window.visualViewport) == null ? void 0 : e.width) ??
        window.innerWidth,
      h:
        ((r = window.visualViewport) == null ? void 0 : r.height) ??
        window.innerHeight,
    };
  },
  Is = (e, r = Er().h) => Math.min(Math.max(e, po), Math.max(po, r - Wn - po)),
  ka = (e) => {
    const { w: r, h: t } = Er(),
      a = (r - Wn) / 2;
    return { x: e.x < a ? Ca : r - Wn - Ca, y: Is(e.y, t) };
  },
  Di = () => ka({ x: Er().w, y: Er().h - Wn - tf });
function rf() {
  const {
      currentApp: e,
      isInitializing: r,
      setCurrentApp: t,
      enableFloatingHomeButton: a,
      floatingHomeButtonPosition: i,
      setFloatingHomeButtonPosition: n,
      apiPresets: d,
      activePresetId: l,
      setActivePresetId: p,
    } = or(),
    [v, x] = P.useState(null),
    [s, b] = P.useState(!1),
    [f, S] = P.useState(!1),
    [c, h] = P.useState(!1),
    [o, u] = P.useState(!1),
    _ = e === "home",
    w = P.useRef({
      pointerId: -1,
      startX: 0,
      startY: 0,
      originX: 0,
      originY: 0,
      dragging: !1,
      longPressTriggered: !1,
      longPressTimer: 0,
    });
  P.useEffect(() => {
    if (!o) return;
    const C = () => u(!1);
    return (
      window.addEventListener("pointerdown", C),
      window.addEventListener("keydown", C),
      () => {
        window.removeEventListener("pointerdown", C),
          window.removeEventListener("keydown", C);
      }
    );
  }, [o]),
    P.useEffect(() => {
      if (typeof window > "u" || !a) return;
      const C = ka(i ?? Di());
      x((D) =>
        (D == null ? void 0 : D.x) === C.x && (D == null ? void 0 : D.y) === C.y
          ? D
          : C
      ),
        (!i || i.x !== C.x || i.y !== C.y) && n(C);
    }, [a, i, n]),
    P.useEffect(() => {
      var D;
      if (typeof window > "u" || !a) return;
      const C = () => {
        x((k) => {
          const V = ka(k ?? i ?? Di());
          return (!i || i.x !== V.x || i.y !== V.y) && n(V), V;
        });
      };
      return (
        window.addEventListener("resize", C),
        (D = window.visualViewport) == null || D.addEventListener("resize", C),
        () => {
          var k;
          window.removeEventListener("resize", C),
            (k = window.visualViewport) == null ||
              k.removeEventListener("resize", C);
        }
      );
    }, [a, i, n]);
  const y = P.useCallback(
    (C) => {
      const D = ka(C);
      S(!0), x(D), n(D), setTimeout(() => S(!1), mo);
    },
    [n]
  );
  if (r || !a || !v) return null;
  const T = (C) => {
      if (C.pointerType !== "touch" && C.button !== 0) return;
      C.currentTarget.setPointerCapture(C.pointerId);
      const D = w.current;
      (D.pointerId = C.pointerId),
        (D.startX = C.clientX),
        (D.startY = C.clientY),
        (D.originX = v.x),
        (D.originY = v.y),
        (D.dragging = !1),
        (D.longPressTriggered = !1),
        (D.longPressTimer = setTimeout(() => {
          (D.longPressTriggered = !0), h(!0);
        }, nf));
    },
    I = (C) => {
      const D = w.current;
      if (D.pointerId !== C.pointerId) return;
      const k = C.clientX - D.startX,
        V = C.clientY - D.startY,
        ee = Math.hypot(k, V);
      if (!D.longPressTriggered && ee >= Oi) {
        clearTimeout(D.longPressTimer), (D.longPressTimer = 0);
        return;
      }
      if (
        !D.longPressTriggered ||
        (!D.dragging && ee >= Oi && ((D.dragging = !0), b(!0)), !D.dragging)
      )
        return;
      const { w: Z, h: ve } = Er();
      x({
        x: Math.min(Math.max(D.originX + k, Ca), Z - Wn - Ca),
        y: Is(D.originY + V, ve),
      });
    },
    M = (C) => {
      const D = w.current;
      if (D.pointerId !== C.pointerId) return;
      C.currentTarget.hasPointerCapture(C.pointerId) &&
        C.currentTarget.releasePointerCapture(C.pointerId),
        clearTimeout(D.longPressTimer),
        (D.longPressTimer = 0);
      const k = D.dragging,
        V = D.longPressTriggered;
      if (
        ((D.pointerId = -1),
        (D.dragging = !1),
        (D.longPressTriggered = !1),
        b(!1),
        h(!1),
        k && v)
      ) {
        y(v);
        return;
      }
      if (V) {
        y(v);
        return;
      }
      u((ee) => !ee);
    },
    O = v.x < (Er().w - Wn) / 2,
    U = l ? d.find((C) => C.id === l) : null,
    J = O ? "left-0 origin-top-left" : "right-0 origin-top-right";
  return g.jsxs("div", {
    className: "echoes-floating-home-wrap fixed z-[70] select-none",
    style: { left: v.x, top: v.y, width: Wn, height: Wn },
    children: [
      o &&
        g.jsxs("div", {
          className: `echoes-floating-home-menu absolute top-full mt-2 w-[190px] overflow-hidden rounded-2xl border border-white/70 bg-[rgba(248,251,254,0.92)] p-1.5 shadow-[0_16px_40px_rgba(100,130,155,0.20)] backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150 ${J}`,
          onPointerDown: (C) => C.stopPropagation(),
          children: [
            g.jsxs("button", {
              type: "button",
              onClick: () => {
                u(!1), _ || t("home");
              },
              className:
                "echoes-floating-home-menu-home flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-[12px] font-bold text-slate-600 transition-colors hover:bg-white/70",
              children: [
                g.jsx(vs, { className: "h-3.5 w-3.5 text-[#6f8faa]" }),
                "回主页",
              ],
            }),
            g.jsx("div", { className: "my-1 h-px bg-slate-200/60" }),
            g.jsx("div", {
              className:
                "px-3 pb-1 pt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400",
              children: "主 API 预设",
            }),
            d.length > 0
              ? g.jsx("div", {
                  className:
                    "max-h-[180px] overflow-y-auto pr-0.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
                  children: d.map((C) => {
                    const D = C.id === (U == null ? void 0 : U.id);
                    return g.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          p(C.id), u(!1);
                        },
                        className: `echoes-floating-home-menu-preset flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-[12px] transition-colors ${
                          D
                            ? "bg-[#e9f3f8] font-bold text-[#537996]"
                            : "text-slate-600 hover:bg-white/70"
                        }`,
                        children: [
                          g.jsx(ad, {
                            className: `h-3.5 w-3.5 shrink-0 ${
                              D ? "text-[#6f8faa]" : "text-slate-400"
                            }`,
                          }),
                          g.jsx("span", {
                            className: "min-w-0 flex-1 truncate",
                            children: C.name || "未命名预设",
                          }),
                          D &&
                            g.jsx(ys, {
                              className: "h-3.5 w-3.5 shrink-0 text-[#6f8faa]",
                            }),
                        ],
                      },
                      C.id
                    );
                  }),
                })
              : g.jsx("div", {
                  className: "px-3 py-2 text-[11px] leading-4 text-slate-400",
                  children: "还没有保存的预设",
                }),
          ],
        }),
      g.jsxs("button", {
        type: "button",
        "aria-label": "快捷操作",
        onPointerDown: T,
        onPointerMove: I,
        onPointerUp: M,
        onPointerCancel: M,
        className:
          "echoes-floating-home-btn absolute inset-0 flex items-center justify-center rounded-full select-none",
        style: {
          touchAction: "none",
          transition:
            f && !s
              ? `left ${mo}ms cubic-bezier(.4,.0,.2,1), top ${mo}ms cubic-bezier(.4,.0,.2,1), opacity 180ms, transform 180ms`
              : s
              ? "opacity 120ms, transform 120ms"
              : "opacity 180ms, transform 180ms",
          opacity: _ ? 0.35 : s ? 0.95 : 0.72,
          transform: s
            ? "scale(1.12)"
            : c
            ? "scale(1.08)"
            : o
            ? "scale(1.04)"
            : "scale(1)",
        },
        children: [
          g.jsx("div", {
            className:
              "echoes-floating-home-body absolute inset-0 rounded-full",
            style: {
              background: "rgba(60, 80, 100, 0.42)",
              border: "1px solid rgba(255,255,255,0.55)",
              boxShadow: s
                ? "0 6px 20px rgba(40,60,80,0.32)"
                : "0 2px 8px rgba(40,60,80,0.20)",
              backdropFilter: "blur(14px) saturate(140%)",
              WebkitBackdropFilter: "blur(14px) saturate(140%)",
            },
          }),
          g.jsx("div", {
            className:
              "echoes-floating-home-dot absolute rounded-full pointer-events-none",
            style: {
              width: 16,
              height: 16,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgba(255,255,255,0.92)",
              boxShadow: "0 0 6px rgba(255,255,255,0.35)",
            },
          }),
        ],
      }),
    ],
  });
}
const af = new Set(["narrator", "ooc", "date_narrator", "date_ooc"]);
function of(e) {
  var r, t;
  if (e.isRecalled) return "[消息已撤回]";
  switch (e.type) {
    case "photo":
    case "image":
      return "[图片]";
    case "voice":
      return "[语音]";
    case "location":
      return "[位置]";
    case "file":
      return `[文件] ${
        ((t = (r = e.metadata) == null ? void 0 : r.fileInfo) == null
          ? void 0
          : t.fileName) ?? ""
      }`;
    case "transfer":
      return "[转账]";
    case "gift":
      return "[礼物]";
    case "phone_call":
    case "video_call":
      return "[通话]";
    case "forward_card":
      return "[转发消息]";
    case "date_invite":
      return "[约会邀请]";
    case "reflection":
      return "[倒影]";
    case "forum_post":
      return "[论坛帖子]";
    default: {
      const a = e.text;
      return /\[\[SEND_EMOJI[:\s]/.test(a) ? "[表情]" : a;
    }
  }
}
function sf() {
  const {
      isInitializing: e,
      messages: r,
      chats: t,
      characters: a,
      users: i,
      npcs: n,
      activeUserId: d,
      currentApp: l,
      activeChatId: p,
      setCurrentApp: v,
      setActiveChatId: x,
      enableChatToast: s,
      enableBgNotification: b,
    } = or(),
    f = P.useRef(r.length),
    S = P.useRef(!1),
    [c, h] = P.useState(null),
    [o, u] = P.useState(!1),
    _ = P.useRef(void 0),
    w = P.useRef(0);
  P.useEffect(() => {
    !e && !S.current && ((f.current = r.length), (S.current = !0));
  }, [e, r.length]);
  const y = P.useCallback(
    (U) =>
      a.find((J) => J.id === U) ||
      i.find((J) => J.id === U) ||
      n.find((J) => J.id === U),
    [a, i, n]
  );
  P.useEffect(() => {
    if (!S.current) return;
    const U = f.current;
    if (((f.current = r.length), !s || r.length <= U)) return;
    const J = r.slice(U);
    let C = null;
    for (let ve = J.length - 1; ve >= 0; ve--) {
      const Q = J[ve];
      if (
        Q.senderId !== d &&
        Q.perceivers.includes(d) &&
        !(Q.subType && af.has(Q.subType))
      ) {
        C = Q;
        break;
      }
    }
    if (!C) return;
    const D = t.find((ve) => ve.id === C.chatId),
      k = y(C.senderId);
    if (!k) return;
    const V = of(C);
    if (
      document.visibilityState === "hidden" &&
      b &&
      Notification.permission === "granted"
    ) {
      const ve = D != null && D.isGroup ? ` · ${D.name || "群聊"}` : "",
        Q = new Notification(k.name + ve, {
          body: V.length > 80 ? V.slice(0, 80) + "…" : V,
          tag: `echoes-msg-${C.chatId}`,
        });
      Q.onclick = () => {
        window.focus(), x(C.chatId), v("chat"), Q.close();
      };
    }
    if (l === "chat" && p === C.chatId) return;
    const Z = ++w.current;
    h({
      key: Z,
      senderName: k.name,
      chatName: D != null && D.isGroup ? D.name || "群聊" : null,
      preview: V.length > 50 ? V.slice(0, 50) + "…" : V,
      sender: {
        name: k.name,
        avatarUrl: k.avatarUrl,
        avatarColor: k.avatarColor,
      },
      chatId: C.chatId,
    }),
      requestAnimationFrame(() => u(!0)),
      _.current && clearTimeout(_.current),
      (_.current = setTimeout(() => {
        u(!1),
          setTimeout(
            () => h((ve) => ((ve == null ? void 0 : ve.key) === Z ? null : ve)),
            350
          );
      }, 3e3));
  }, [r.length, d, l, p, t, y, s]);
  const T = P.useCallback(() => {
      c &&
        (x(c.chatId),
        v("chat"),
        u(!1),
        _.current && clearTimeout(_.current),
        setTimeout(() => h(null), 350));
    }, [c, x, v]),
    I = P.useRef(null),
    M = P.useCallback((U) => {
      I.current = U.touches[0].clientY;
    }, []),
    O = P.useCallback((U) => {
      if (I.current === null) return;
      const J = U.changedTouches[0].clientY - I.current;
      (I.current = null),
        J < -30 &&
          (u(!1),
          _.current && clearTimeout(_.current),
          setTimeout(() => h(null), 350));
    }, []);
  return c
    ? g.jsx("div", {
        className: `echoes-toast-wrapper fixed left-0 right-0 z-[9999] flex justify-center pointer-events-none transition-all duration-300 ease-out ${
          o
            ? "top-[calc(env(safe-area-inset-top,0px)+8px)] opacity-100"
            : "-top-24 opacity-0"
        }`,
        children: g.jsxs("div", {
          onClick: T,
          onTouchStart: M,
          onTouchEnd: O,
          className:
            "echoes-toast-card pointer-events-auto mx-3 w-[calc(100%-24px)] max-w-md flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg shadow-slate-900/8 cursor-pointer active:scale-[0.98] transition-transform",
          children: [
            g.jsx(ks, { char: c.sender, className: "w-10 h-10 flex-shrink-0" }),
            g.jsxs("div", {
              className: "echoes-toast-content flex-1 min-w-0",
              children: [
                g.jsxs("div", {
                  className: "flex items-baseline gap-1.5",
                  children: [
                    g.jsx("span", {
                      className:
                        "text-sm font-semibold text-slate-800 truncate",
                      children: c.senderName,
                    }),
                    c.chatName &&
                      g.jsxs("span", {
                        className:
                          "text-xs text-slate-400 truncate flex-shrink-0",
                        children: ["· ", c.chatName],
                      }),
                  ],
                }),
                g.jsx("p", {
                  className:
                    "text-sm text-slate-500 truncate mt-0.5 leading-snug",
                  children: c.preview,
                }),
              ],
            }),
          ],
        }),
      })
    : null;
}
function cf() {
  const {
    cloudUpdateAvailable: e,
    requestCloudRestore: r,
    dismissCloudUpdateBanner: t,
  } = or();
  return e
    ? g.jsx("div", {
        role: "status",
        className:
          "fixed top-[calc(env(safe-area-inset-top,0px)+8px)] left-1/2 -translate-x-1/2 z-[60] max-w-[92%] sm:max-w-md w-[420px]",
        children: g.jsxs("div", {
          className:
            "flex items-start gap-3 px-4 py-3 bg-white/85 backdrop-blur-md border border-blue-200 rounded-2xl shadow-lg shadow-blue-500/10",
          children: [
            g.jsx("div", {
              className:
                "w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0",
              children: g.jsx(Su, { className: "w-4 h-4 text-blue-500" }),
            }),
            g.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [
                g.jsx("p", {
                  className:
                    "text-sm font-semibold text-slate-700 leading-tight",
                  children: "其他设备有新数据",
                }),
                g.jsx("p", {
                  className:
                    "text-[11px] text-slate-500 leading-relaxed mt-0.5",
                  children:
                    "云端被另一台设备更新过,要拉下来同步吗？(本机会先自动备份一份快照)",
                }),
                g.jsxs("div", {
                  className: "flex gap-2 mt-2",
                  children: [
                    g.jsx("button", {
                      onClick: r,
                      className:
                        "px-3 py-1.5 text-xs font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 active:scale-95 transition-all",
                      children: "同步",
                    }),
                    g.jsx("button", {
                      onClick: t,
                      className:
                        "px-3 py-1.5 text-xs text-slate-500 bg-white/70 border border-white/80 rounded-lg hover:bg-white transition-all",
                      children: "稍后",
                    }),
                  ],
                }),
              ],
            }),
            g.jsx("button", {
              onClick: t,
              "aria-label": "关闭",
              className:
                "text-slate-300 hover:text-slate-500 transition-colors flex-shrink-0",
              children: g.jsx(Ia, { className: "w-4 h-4" }),
            }),
          ],
        }),
      })
    : null;
}
const lf = 16,
  uf = 1.2,
  go = 0.52,
  df = 0.55,
  ff = 220,
  Li = 260,
  hf = 520,
  Bi = 120,
  pf = 260,
  zi = 14,
  mf = 0.22,
  gf = 0.82,
  yf = 0.7,
  vf = 12,
  wf = 520,
  _f = 3,
  xf = 2200,
  bf = 600,
  Fi = 2e3,
  kf = 5e3,
  Sf = 0.18,
  Tf = 3500,
  Ui = 8e3,
  If = 18e3,
  Ef = ({ images: e, size: r = 96, dialogues: t }) => {
    const a = P.useRef("idle"),
      i = P.useRef("ground"),
      n = P.useRef({ x: 120, y: 0 }),
      d = P.useRef({ x: 0, y: 0 }),
      l = P.useRef(1),
      p = P.useRef(0),
      v = P.useRef(0),
      x = P.useRef(null),
      s = P.useRef(null),
      b = P.useRef({ x: 0, y: 0 }),
      f = P.useRef(null),
      S = P.useRef(null),
      c = P.useRef(null),
      h = P.useRef(null),
      o = P.useRef(null),
      u = P.useRef(0),
      _ = P.useRef(0),
      w = P.useRef(0),
      y = P.useRef(0),
      T = P.useRef(null),
      I = P.useRef(0),
      M = P.useRef(0),
      O = P.useRef(0),
      U = P.useRef(0),
      J = P.useRef(0),
      C = P.useRef(0),
      D = P.useRef(!0),
      [, k] = P.useState(0),
      V = P.useCallback(() => k((ye) => ye + 1), []),
      ee = (ye) =>
        ye && ye.length > 0 ? ye[Math.floor(Math.random() * ye.length)] : null,
      Z = P.useCallback((ye) => {
        const m = c.current;
        m &&
          (h.current && clearTimeout(h.current),
          (m.textContent = ye),
          (m.style.opacity = "1"),
          (h.current = setTimeout(() => {
            m && (m.style.opacity = "0");
          }, Tf)));
      }, []),
      ve = P.useCallback(
        (ye) => {
          if (!t) return;
          let m;
          ye === "poked"
            ? (m = t.poked)
            : ye === "held"
            ? (m = t.held)
            : ye === "climb"
            ? (m = t.climb)
            : ye === "fall" && (m = t.fall);
          const X = ee(m);
          X && Z(X);
        },
        [t, Z]
      ),
      Q = P.useCallback(() => {
        const ye = ee(t == null ? void 0 : t.shake);
        ye && Z(ye);
      }, [t, Z]),
      ce = P.useCallback(() => {
        var m;
        if (
          (o.current && clearTimeout(o.current),
          !((m = t == null ? void 0 : t.idle) != null && m.length))
        )
          return;
        const ye = Ui + Math.random() * (If - Ui);
        o.current = setTimeout(() => {
          if (!D.current) return;
          const X = a.current;
          if (X === "idle" || X === "walk") {
            const G = ee(t.idle);
            G && Z(G);
          } else if (X === "climb") {
            const G = ee(t.climb);
            G && Z(G);
          }
          ce();
        }, ye);
      }, [t, Z]),
      B = P.useCallback(() => {
        const ye = f.current;
        return ye
          ? { w: ye.clientWidth, h: ye.clientHeight }
          : { w: 400, h: 700 };
      }, []),
      H = P.useCallback((ye) => {
        const m = ye ?? performance.now(),
          X = Li + Math.random() * (hf - Li);
        (u.current = m + X), (_.current = 0);
      }, []),
      Ee = P.useCallback(
        (ye) =>
          u.current === 0 && _.current === 0
            ? (H(ye), !0)
            : ye <= u.current
            ? !0
            : _.current === 0
            ? ((_.current = ye + Bi + Math.random() * (pf - Bi)), !1)
            : ye <= _.current
            ? !1
            : (H(ye), !0),
        [H]
      ),
      fe = P.useCallback(() => {
        (a.current = "fall"),
          (i.current = "ground"),
          (d.current = { x: 0, y: 0 }),
          ve("fall");
      }, [ve]),
      he = P.useCallback(() => {
        (I.current = 0), (M.current = 0), (O.current = 0);
      }, []),
      Te = P.useCallback(
        (ye, m, X) => {
          if (a.current !== "held" || Math.abs(m) < vf || Math.abs(X) < yf)
            return;
          const G = m > 0 ? 1 : -1;
          if (O.current === 0 || ye - O.current > wf) {
            (O.current = ye), (M.current = 0), (I.current = G);
            return;
          }
          if (I.current !== 0 && G !== I.current) {
            (I.current = G),
              (M.current += 1),
              M.current >= _f &&
                ye >= U.current &&
                ((U.current = ye + xf), (M.current = 0), (O.current = ye), Q());
            return;
          }
          I.current = G;
        },
        [Q]
      ),
      Pe = P.useCallback(() => {
        s.current && clearTimeout(s.current);
        const ye = Fi + Math.random() * (kf - Fi);
        s.current = setTimeout(() => {
          if (!D.current) return;
          const m = a.current;
          if (m === "held" || m === "fall" || m === "poked") return;
          if (i.current === "ground") {
            const G = Math.random();
            G < 0.4
              ? ((a.current = "walk"),
                (l.current = Math.random() > 0.5 ? 1 : -1))
              : G < 0.4 + Sf
              ? Oe()
              : (a.current = "idle");
          } else {
            const G = Math.random();
            G < 0.5
              ? (a.current = "climb")
              : G < 0.7
              ? ((l.current = l.current * -1), (a.current = "climb"))
              : (a.current = "idle");
          }
          Pe();
        }, ye);
      }, []),
      Re = 4,
      Oe = P.useCallback(() => {
        const { w: ye } = B(),
          m = n.current.x,
          X = m <= Re,
          G = m >= ye - r - Re;
        X
          ? ((n.current.x = 0),
            (i.current = "leftWall"),
            (l.current = 1),
            (a.current = "climb"),
            H(),
            ve("climb"))
          : G
          ? ((n.current.x = ye - r),
            (i.current = "rightWall"),
            (l.current = 1),
            (a.current = "climb"),
            H(),
            ve("climb"))
          : ((a.current = "walk"), (l.current = m < ye / 2 ? -1 : 1));
      }, [B, r, H, ve]),
      Fe = P.useCallback(
        (ye) => {
          if (
            !D.current ||
            ((J.current = requestAnimationFrame(Fe)), ye - C.current < lf)
          )
            return;
          C.current = ye;
          const { w: m, h: X } = B(),
            G = a.current,
            N = i.current,
            R = n.current,
            z = d.current;
          G === "held"
            ? ((w.current += (y.current - w.current) * mf), (y.current *= gf))
            : ((w.current *= 0.78), (y.current *= 0.6)),
            G === "walk" &&
              N === "ground" &&
              ((R.x += uf * l.current),
              R.x <= 0
                ? ((R.x = 0),
                  (i.current = "leftWall"),
                  (a.current = "climb"),
                  (l.current = 1),
                  H(ye))
                : R.x >= m - r &&
                  ((R.x = m - r),
                  (i.current = "rightWall"),
                  (a.current = "climb"),
                  (l.current = 1),
                  H(ye)),
              ye - v.current > ff &&
                ((p.current = (p.current + 1) % 4), (v.current = ye))),
            G === "climb" &&
              Ee(ye) &&
              (N === "leftWall"
                ? ((R.y += go * l.current),
                  R.y >= X - r &&
                    ((R.y = X - r),
                    (i.current = "ceiling"),
                    (l.current = 1),
                    H(ye)),
                  R.y <= 0 &&
                    ((R.y = 0),
                    (i.current = "ground"),
                    (a.current = "walk"),
                    (l.current = 1)))
                : N === "rightWall"
                ? ((R.y += go * l.current),
                  R.y >= X - r &&
                    ((R.y = X - r),
                    (i.current = "ceiling"),
                    (l.current = -1),
                    H(ye)),
                  R.y <= 0 &&
                    ((R.y = 0),
                    (i.current = "ground"),
                    (a.current = "walk"),
                    (l.current = -1)))
                : N === "ceiling" &&
                  ((R.x += go * l.current),
                  R.x <= 0
                    ? ((R.x = 0),
                      (i.current = "leftWall"),
                      (l.current = -1),
                      H(ye))
                    : R.x >= m - r &&
                      ((R.x = m - r),
                      (i.current = "rightWall"),
                      (l.current = -1),
                      H(ye)))),
            G === "fall" &&
              ((z.y -= df),
              (R.y += z.y),
              R.y <= 0 &&
                ((R.y = 0),
                (z.y = 0),
                (i.current = "ground"),
                (a.current = "idle"),
                Pe())),
            $e();
        },
        [B, r, Pe, Ee, H]
      ),
      $e = P.useCallback(() => {
        const ye = S.current;
        if (!ye) return;
        const { w: m, h: X } = B(),
          G = n.current,
          N = i.current,
          R = a.current,
          z = X - G.y - r;
        let re = 0,
          ae = 1;
        N === "leftWall"
          ? ((re = 0), (ae = 1))
          : N === "rightWall"
          ? ((re = 0), (ae = -1))
          : N === "ceiling" && ((re = 90), (ae = l.current === -1 ? -1 : 1)),
          N === "ground" && (ae = l.current === 1 ? -1 : 1);
        let Y = 0,
          ue = 0;
        if (R === "climb" && N !== "ground") {
          const xe = Math.sin(Date.now() / 180) * 1;
          N === "leftWall"
            ? (Y = -xe)
            : N === "rightWall"
            ? (Y = xe)
            : N === "ceiling" && (ue = -xe);
        }
        R === "poked" && (ue = -Math.abs(Math.sin(Date.now() / 150)) * 5),
          R === "held" &&
            ((re += w.current),
            (Y += w.current * 0.18),
            (ue -= Math.abs(w.current) * 0.12)),
          (ye.style.transform = `translate(${G.x + Y}px, ${
            z + ue
          }px) scaleX(${ae}) rotate(${re}deg)`);
        let _e = e.idle;
        if (N !== "ground") _e = e.climb;
        else if (R === "walk") {
          const xe = p.current;
          _e = xe === 0 ? e.walk1 : xe === 2 ? e.walk2 : e.idle;
        } else
          R === "held"
            ? (_e = e.held)
            : R === "poked"
            ? (_e = e.poked)
            : R === "fall" && (_e = e.fall);
        ye.src !== _e && (ye.src = _e);
        const de = c.current;
        if (de) {
          const xe = de.offsetWidth || 0,
            Be = de.offsetHeight || 0,
            Ne = 4,
            Je = 6,
            gt = G.x + r / 2 - xe / 2,
            tt = z + r / 2 - Be / 2,
            ft = {
              above: { x: gt, y: z - Je - Be, fits: z - Je - Be >= Ne },
              below: { x: gt, y: z + r + Je, fits: z + r + Je + Be <= X - Ne },
              right: {
                x: G.x + r + Je,
                y: tt,
                fits: G.x + r + Je + xe <= m - Ne,
              },
              left: { x: G.x - Je - xe, y: tt, fits: G.x - Je - xe >= Ne },
            };
          let De = ["above", "below", "right", "left"];
          N === "leftWall" || N === "rightWall"
            ? (De = ["above", "below", "right", "left"])
            : N === "ceiling" && (De = ["below", "right", "left", "above"]);
          const at = De.find((jt) => ft[jt].fits) || De[0],
            It = ft[at],
            bt = Math.max(Ne, Math.min(It.x, m - xe - Ne)),
            ht = Math.max(Ne, Math.min(It.y, X - Be - Ne));
          (de.style.left = `${bt}px`),
            (de.style.top = `${ht}px`),
            (de.style.transform = "none");
        }
      }, [B, e, r]),
      it = P.useCallback(
        (ye) => {
          if ((ye.preventDefault(), ye.stopPropagation(), !S.current)) return;
          const X = i.current !== "ground";
          x.current && clearTimeout(x.current),
            s.current && clearTimeout(s.current),
            !X &&
              a.current !== "held" &&
              ((a.current = "poked"), ve("poked"), V());
          const G = f.current;
          if (!G) return;
          const N = G.getBoundingClientRect(),
            { h: R } = B(),
            z = ye.clientX - N.left,
            re = ye.clientY - N.top,
            ae = n.current,
            Y = R - ae.y - r;
          (b.current = { x: z - ae.x, y: re - Y }),
            (T.current = { x: z, t: performance.now() }),
            (w.current = 0),
            (y.current = 0),
            he();
          let ue = !1;
          const _e = (xe) => {
              ue ||
                ((ue = !0),
                (a.current = "held"),
                (i.current = "ground"),
                ve("held"),
                x.current && clearTimeout(x.current));
              const Be = xe.clientX - N.left,
                Ne = xe.clientY - N.top,
                Je = performance.now(),
                gt = T.current;
              if (gt) {
                const ft = Be - gt.x,
                  De = Math.max(1, Je - gt.t),
                  at = ft / De,
                  It = Math.max(-zi, Math.min(zi, at * 38));
                (y.current = It),
                  Te(Je, ft, at),
                  Math.abs(ft) > 0.8 && (l.current = ft > 0 ? 1 : -1);
              }
              (T.current = { x: Be, t: Je }),
                (n.current.x = Math.max(
                  0,
                  Math.min(Be - b.current.x, B().w - r)
                ));
              const tt = Math.max(0, Math.min(Ne - b.current.y, R - r));
              (n.current.y = R - tt - r), $e();
            },
            de = () => {
              window.removeEventListener("pointermove", _e),
                window.removeEventListener("pointerup", de),
                (T.current = null),
                (y.current = 0),
                he(),
                a.current === "held" || X
                  ? fe()
                  : a.current === "poked" &&
                    (x.current = setTimeout(() => {
                      D.current &&
                        a.current === "poked" &&
                        ((a.current = "idle"), Pe(), V());
                    }, bf));
            };
          window.addEventListener("pointermove", _e),
            window.addEventListener("pointerup", de);
        },
        [B, r, $e, Pe, V, fe, Te, he]
      );
    return (
      P.useEffect(() => {
        D.current = !0;
        const { w: ye } = B();
        return (
          (n.current.x = Math.random() * Math.max(0, ye - r)),
          (n.current.y = 0),
          (i.current = "ground"),
          (J.current = requestAnimationFrame(Fe)),
          Pe(),
          ce(),
          () => {
            (D.current = !1),
              cancelAnimationFrame(J.current),
              s.current && clearTimeout(s.current),
              x.current && clearTimeout(x.current),
              h.current && clearTimeout(h.current),
              o.current && clearTimeout(o.current);
          }
        );
      }, [Fe, Pe, ce, B, r]),
      g.jsxs("div", {
        ref: f,
        className:
          "echoes-pet-container absolute inset-0 pointer-events-none overflow-hidden",
        style: { zIndex: 9999 },
        children: [
          g.jsx("img", {
            ref: S,
            src: e.idle,
            alt: "桌宠",
            draggable: !1,
            onPointerDown: it,
            className:
              "echoes-pet-sprite absolute top-0 left-0 pointer-events-auto cursor-grab active:cursor-grabbing select-none",
            style: {
              width: r,
              height: r,
              imageRendering: "pixelated",
              willChange: "transform",
              touchAction: "none",
            },
          }),
          g.jsx("div", {
            ref: c,
            className:
              "echoes-pet-bubble absolute pointer-events-none select-none",
            style: {
              opacity: 0,
              transition: "opacity 0.3s ease",
              maxWidth: 160,
              padding: "4px 10px",
              borderRadius: 12,
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              fontSize: 11,
              lineHeight: "1.5",
              color: "#475569",
              textAlign: "center",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              zIndex: 1,
            },
          }),
        ],
      })
    );
  },
  Cf = `
.echoes-page-user input.echoes-critical-user-name-input {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  width: 100% !important;
  min-height: 46px !important;
  pointer-events: auto !important;
}
`;
let Aa = 0;
function Af() {
  return Aa;
}
function xt(e) {
  let r = null,
    t = null;
  const a = () => (
      t ||
        (Aa++,
        (t = e()
          .then((l) => ((r = l.default), l))
          .catch(() => ((t = null), e().then((l) => ((r = l.default), l))))
          .catch(() => {
            throw (
              ((t = null),
              new Error("Failed to fetch dynamically imported module"))
            );
          })
          .finally(() => {
            Aa--;
          }))),
      t
    ),
    i = () => {
      r || (t = null);
    };
  let n = P.lazy(() => a());
  function d(l) {
    return r
      ? g.jsx(r, { ...l })
      : (t || (n = P.lazy(() => a())), g.jsx(n, { ...l }));
  }
  return (d.preload = a), (d.reset = i), d;
}
const Rf = xt(() =>
    ot(
      () => import("./Chat-X5X-fzy_.js"),
      __vite__mapDeps([
        5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 1, 2, 3, 4, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 45,
      ])
    )
  ),
  jf = xt(() =>
    ot(
      () => import("./WorldCalendarApp-DgUFi9kD.js"),
      __vite__mapDeps([46, 6, 7, 0, 1, 2, 3, 4, 9, 15, 47, 43, 12])
    )
  ),
  Nf = xt(() =>
    ot(
      () => import("./Echoes-CxQLSAz_.js"),
      __vite__mapDeps([
        48, 6, 7, 0, 1, 2, 3, 4, 9, 15, 49, 50, 16, 51, 39, 19, 52,
      ])
    )
  ),
  Pf = xt(() =>
    ot(
      () => import("./Profiling-JSKR4abO.js"),
      __vite__mapDeps([
        53, 6, 7, 0, 1, 2, 3, 4, 9, 22, 11, 54, 55, 26, 28, 56, 12, 37, 41, 47,
        57, 15, 50, 21,
      ])
    )
  ),
  Mf = xt(() =>
    ot(
      () => import("./Character-BDzCkfQ2.js"),
      __vite__mapDeps([
        58, 6, 7, 59, 13, 14, 60, 51, 61, 4, 9, 21, 47, 62, 50, 15,
      ])
    )
  ),
  Of = xt(() =>
    ot(
      () => import("./Settings-DNhTq7Z2.js"),
      __vite__mapDeps([
        63, 6, 7, 22, 11, 9, 4, 47, 26, 35, 64, 43, 37, 17, 57, 33, 15,
      ])
    )
  ),
  Df = xt(() =>
    ot(
      () => import("./UserApp-BpCTmY2q.js"),
      __vite__mapDeps([65, 6, 7, 13, 14, 60, 51, 9, 61, 4, 15])
    )
  ),
  Lf = xt(() =>
    ot(
      () => import("./WorldBook-DgkrrA4e.js"),
      __vite__mapDeps([66, 6, 7, 8, 3, 15, 19, 20, 64, 44])
    )
  ),
  Bf = xt(() =>
    ot(
      () => import("./MapApp--YSFlXlR.js"),
      __vite__mapDeps([67, 6, 7, 9, 0, 1, 2, 3, 4, 22, 11, 15, 50, 17, 36, 12])
    )
  ),
  zf = xt(() =>
    ot(
      () => import("./ScheduleApp-BgOrY3JT.js"),
      __vite__mapDeps([68, 6, 7, 22, 11, 30, 0, 1, 2, 3, 4, 31, 56, 15, 12])
    )
  ),
  Ff = xt(() =>
    ot(
      () => import("./Reflection-D9QOCor8.js"),
      __vite__mapDeps([
        69, 6, 7, 0, 1, 2, 3, 4, 9, 22, 11, 15, 27, 12, 43, 14, 42, 41, 70, 38,
        24, 29,
      ])
    )
  ),
  Uf = xt(() =>
    ot(
      () => import("./Diary-DEMA_Dma.js"),
      __vite__mapDeps([
        71, 6, 7, 0, 1, 2, 3, 4, 9, 22, 11, 8, 15, 27, 37, 72, 52,
      ])
    )
  ),
  $f = xt(() =>
    ot(
      () => import("./Forum-C_fDD3SN.js"),
      __vite__mapDeps([
        73, 6, 7, 22, 11, 8, 9, 4, 15, 27, 37, 21, 24, 12, 44, 47, 10, 45,
      ])
    )
  ),
  Wf = xt(() =>
    ot(
      () => import("./WalletApp-2UJgi5oc.js"),
      __vite__mapDeps([
        74, 6, 7, 31, 0, 1, 2, 3, 4, 9, 22, 11, 15, 37, 51, 27, 18, 75, 62, 50,
        40, 55,
      ])
    )
  ),
  Hf = xt(() =>
    ot(
      () => import("./ShopApp-POBeg4sg.js"),
      __vite__mapDeps([
        76, 6, 7, 2, 32, 0, 1, 3, 4, 31, 9, 15, 29, 27, 12, 40, 11, 75,
      ])
    )
  ),
  Kf = xt(() =>
    ot(
      () => import("./FloatingLife-BNHeNmvP.js"),
      __vite__mapDeps([77, 6, 7, 22, 11, 0, 1, 2, 3, 4, 15, 27, 36, 50, 10])
    )
  ),
  Gf = xt(() =>
    ot(
      () => import("./BaiXiang-D-iAk7rC.js"),
      __vite__mapDeps([78, 6, 7, 61, 4, 3, 72, 37, 15, 16, 33, 79])
    )
  ),
  Yf = xt(() =>
    ot(
      () => import("./WardrobeApp-BgZmlVfr.js"),
      __vite__mapDeps([80, 6, 7, 2, 9, 1, 15, 54, 12, 62, 50, 23, 52, 10])
    )
  ),
  Vf = xt(() =>
    ot(
      () => import("./HouseApp-CG1EYA-M.js"),
      __vite__mapDeps([81, 6, 7, 2, 3, 4, 15, 36, 34, 70, 42, 27, 57, 21])
    )
  ),
  Xf = xt(() =>
    ot(
      () => import("./TimeslotApp-BjFk3O2e.js"),
      __vite__mapDeps([
        82, 6, 7, 9, 59, 3, 4, 15, 10, 27, 0, 1, 2, 62, 50, 25, 24, 49, 79, 47,
      ])
    )
  );
function Zf() {
  return Promise.resolve();
}
const Jf = 1e4;
function qf() {
  try {
    const e =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    return (e && (e.effectiveType || e.type)) || "unknown";
  } catch {
    return "unknown";
  }
}
function Qf() {
  var e;
  try {
    const r = (e = navigator.serviceWorker) == null ? void 0 : e.controller;
    return r ? r.state : "none";
  } catch {
    return "err";
  }
}
function eh() {
  try {
    const e = Array.from(document.scripts);
    for (const r of e) {
      const t = r.src.match(/\/assets\/[^\/]*-([a-zA-Z0-9]{6,12})\.js(\?|$)/);
      if (t) return t[1];
    }
  } catch {}
  return "unknown";
}
function _t({ appName: e }) {
  const [r, t] = P.useState(0),
    [a, i] = P.useState(!1);
  P.useEffect(() => {
    const p = Date.now(),
      v = window.setInterval(() => {
        t(Date.now() - p);
      }, 500);
    return () => window.clearInterval(v);
  }, []);
  const n = async () => {
    var p;
    i(!0);
    try {
      if ("caches" in window) {
        const x = await caches.keys();
        await Promise.all(x.map((s) => caches.delete(s)));
      }
      const v = await ((p = navigator.serviceWorker) == null
        ? void 0
        : p.getRegistrations());
      v && (await Promise.all(v.map((x) => x.unregister())));
    } catch {}
    window.location.reload();
  };
  if (!(r >= Jf))
    return g.jsx("div", {
      className: "w-full h-full flex items-center justify-center",
      children: g.jsx("div", {
        className:
          "animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full opacity-30",
      }),
    });
  const l = [
    `app=${e || "unknown"}`,
    `等了 ${(r / 1e3).toFixed(1)}s`,
    `网=${qf()}`,
    `SW=${Qf()}`,
    `pending=${Aa}`,
    `版本=${eh()}`,
  ].join(" | ");
  return g.jsxs("div", {
    className:
      "w-full h-full flex flex-col items-center justify-center px-8 text-center",
    children: [
      g.jsx("div", {
        className: "text-slate-400 text-3xl mb-3",
        children: "⏳",
      }),
      g.jsx("p", {
        className: "text-slate-500 text-sm mb-1",
        children: "加载有点慢",
      }),
      g.jsxs("p", {
        className: "text-slate-400 text-xs mb-4 max-w-xs leading-relaxed",
        children: [
          "长时间加载不出来通常是网络问题,点下方按钮重试",
          g.jsx("br", {}),
          "如反复出现,可截图下方信息反馈",
        ],
      }),
      g.jsx("p", {
        className:
          "text-slate-300 text-[10px] mb-4 max-w-xs leading-snug break-all font-mono",
        children: l,
      }),
      g.jsxs("button", {
        onClick: n,
        disabled: a,
        className: `px-5 py-2 rounded-xl text-sm shadow-sm transition-all flex items-center gap-2 ${
          a
            ? "bg-slate-600/95 text-white cursor-not-allowed"
            : "bg-slate-500/90 text-white active:scale-95 active:bg-slate-600"
        }`,
        children: [
          a &&
            g.jsx("span", {
              className:
                "inline-block w-3.5 h-3.5 border-2 border-white/70 border-t-transparent rounded-full animate-spin",
            }),
          g.jsx("span", { children: a ? "正在刷新…" : "刷新页面" }),
        ],
      }),
    ],
  });
}
function th() {
  const e = Ss(),
    {
      isInitializing: r,
      initError: t,
      currentApp: a,
      setCurrentApp: i,
      characters: n,
      setCharacters: d,
      chats: l,
      setChats: p,
      knowledge: v,
      setKnowledge: x,
      messages: s,
      setMessages: b,
      characterStates: f,
      setCharacterStates: S,
      activeChatId: c,
      setActiveChatId: h,
      homeBackground: o,
      setHomeBackground: u,
      appIconOverrides: _,
      enableFakeStatusBar: w,
      customChatCSS: y,
      customGlobalCSS: T,
      customFonts: I,
      networkFonts: M,
      activeFontFamily: O,
      globalFontScale: U,
      characterPetImages: J,
      activePetCharIds: C,
      activeUserId: D,
      petDialogues: k,
    } = or(),
    [V, ee] = P.useState(null),
    Z = a === "home" && !!o && !V,
    ve = P.useRef([]);
  return (
    P.useEffect(() => {
      var ce;
      if (typeof window > "u" || !e.needsViewportHeightFix) return;
      const Q = () => {
        var H;
        const B = Math.round(
          ((H = window.visualViewport) == null ? void 0 : H.height) ??
            window.innerHeight
        );
        document.documentElement.style.setProperty(
          "--echoes-app-height",
          `${B}px`
        );
      };
      return (
        Q(),
        window.addEventListener("resize", Q),
        (ce = window.visualViewport) == null ||
          ce.addEventListener("resize", Q),
        () => {
          var B;
          window.removeEventListener("resize", Q),
            (B = window.visualViewport) == null ||
              B.removeEventListener("resize", Q),
            document.documentElement.style.removeProperty(
              "--echoes-app-height"
            );
        }
      );
    }, [e.needsViewportHeightFix]),
    P.useEffect(() => {
      const Q = () => {
        ve.current.forEach((H) => URL.revokeObjectURL(H)),
          (ve.current = []),
          document.fonts.forEach((H) => {
            H.__echoesCustom && document.fonts.delete(H);
          });
      };
      if (!(O && I.includes(O))) {
        Q();
        return;
      }
      let B = !1;
      return (
        (async () => {
          Q();
          try {
            const H = await Ke.getItem(`font_data_${O}`);
            if (B || !H) return;
            const Ee = new Blob([H]),
              fe = URL.createObjectURL(Ee),
              he = new FontFace(O, `url(${fe})`);
            he.__echoesCustom = !0;
            const Te = await he.load();
            if (B) {
              URL.revokeObjectURL(fe);
              return;
            }
            document.fonts.add(Te), (ve.current = [fe]);
          } catch (H) {
            console.warn(`Failed to load custom font "${O}":`, H);
          }
        })(),
        () => {
          (B = !0), Q();
        }
      );
    }, [O, I]),
    P.useEffect(() => {
      const Q = () => {
        document.fonts.forEach((B) => {
          B.__echoesNetwork && document.fonts.delete(B);
        });
      };
      if (M.length === 0) {
        Q();
        return;
      }
      let ce = !1;
      return (
        (async () => {
          Q();
          for (const { name: B, url: H } of M)
            try {
              const Ee = new FontFace(B, `url(${H})`);
              Ee.__echoesNetwork = !0;
              const fe = await Ee.load();
              if (ce) return;
              document.fonts.add(fe);
            } catch (Ee) {
              console.warn(`Failed to load network font "${B}":`, Ee);
            }
        })(),
        () => {
          (ce = !0), Q();
        }
      );
    }, [M]),
    P.useEffect(() => {
      if (!o) {
        ee(null);
        return;
      }
      let Q = !1;
      const ce = new window.Image(),
        B = () => {
          Q || ee(o);
        };
      return (
        (ce.decoding = "async"),
        (ce.src = o),
        ce.complete
          ? (typeof ce.decode == "function"
              ? ce.decode().then(B).catch(B)
              : B(),
            () => {
              Q = !0;
            })
          : ((ce.onload = () => {
              typeof ce.decode == "function"
                ? ce.decode().then(B).catch(B)
                : B();
            }),
            (ce.onerror = () => {
              Q || (u(null), ee(null));
            }),
            () => {
              (Q = !0), (ce.onload = null), (ce.onerror = null);
            })
      );
    }, [o]),
    g.jsx("div", {
      className:
        "echoes-app-shell relative w-full flex items-center justify-center overflow-hidden",
      style: { height: "var(--echoes-app-height, 100vh)" },
      children: g.jsxs("div", {
        className: `echoes-app echoes-app-${a} ${
          e.needsViewportHeightFix ? "absolute" : "fixed"
        } inset-0 w-full h-full z-0 overflow-hidden flex flex-col`,
        children: [
          g.jsx("div", {
            className:
              "echoes-app-overlay absolute inset-0 pointer-events-none z-0",
            style: e.needsSimpleBackgroundAtmosphere
              ? {
                  background:
                    "linear-gradient(180deg, rgba(246,250,253,0.96) 0%, rgba(236,243,249,0.98) 52%, rgba(230,238,245,1) 100%)",
                }
              : void 0,
          }),
          V &&
            g.jsx("img", {
              src: V,
              alt: "",
              "aria-hidden": "true",
              className: `absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transition-opacity duration-300 ${
                a === "home" ? "opacity-100" : "opacity-0"
              }`,
            }),
          !(V && a === "home") &&
            !e.needsSimpleBackgroundAtmosphere &&
            g.jsxs("div", {
              className:
                "echoes-app-glow absolute inset-0 overflow-hidden pointer-events-none z-0",
              children: [
                g.jsx("div", {
                  className:
                    "echoes-app-glow-1 absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-70",
                }),
                g.jsx("div", {
                  className:
                    "echoes-app-glow-2 absolute top-[20%] right-[-10%] w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-60",
                }),
                g.jsx("div", {
                  className:
                    "echoes-app-glow-3 absolute bottom-[-10%] left-[20%] w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-40",
                }),
              ],
            }),
          g.jsx("div", {
            className: "absolute top-0 w-full z-50 pointer-events-none",
            children: g.jsx(Rd, {}),
          }),
          g.jsx("div", {
            className: `flex-1 w-full relative overflow-hidden ${
              w ? "has-fake-status-bar" : ""
            }`,
            children: r
              ? t
                ? g.jsxs("div", {
                    className:
                      "w-full h-full flex flex-col items-center justify-center px-6 text-center gap-3",
                    children: [
                      g.jsx("div", {
                        className: "text-sm font-semibold text-slate-700",
                        children: "数据加载失败",
                      }),
                      g.jsx("div", {
                        className:
                          "text-xs text-slate-500 break-all max-w-xs leading-relaxed",
                        children: t.message || "未知错误",
                      }),
                      g.jsx("div", {
                        className:
                          "text-[11px] text-slate-400 max-w-xs leading-relaxed",
                        children:
                          "请刷新页面重试。本地数据未受影响，无需担心。",
                      }),
                      g.jsx("button", {
                        onClick: () => window.location.reload(),
                        className:
                          "mt-1 px-4 py-2 text-xs font-medium bg-sky-500 text-white rounded-lg shadow hover:bg-sky-600 active:bg-sky-700 transition-colors",
                        children: "刷新重试",
                      }),
                    ],
                  })
                : g.jsx("div", { className: "w-full h-full" })
              : Z
              ? g.jsx("div", { className: "w-full h-full" })
              : g.jsx(Ec, {
                  children: g.jsxs(g.Fragment, {
                    children: [
                      g.jsx("div", {
                        className: a === "home" ? "contents" : "hidden",
                        children: g.jsx(ef, {}),
                      }),
                      a === "chat" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "chat" }),
                          children: g.jsx(Rf, {}),
                        }),
                      a === "world_calendar" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "world_calendar" }),
                          children: g.jsx(jf, {}),
                        }),
                      a === "character" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "character" }),
                          children: g.jsx(Mf, {}),
                        }),
                      a === "world" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "world" }),
                          children: g.jsx(Nf, {}),
                        }),
                      a === "profiling" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "profiling" }),
                          children: g.jsx(Pf, {}),
                        }),
                      a === "settings" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "settings" }),
                          children: g.jsx(Of, {}),
                        }),
                      a === "user" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "user" }),
                          children: g.jsx(Df, {}),
                        }),
                      a === "worldbook" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "worldbook" }),
                          children: g.jsx(Lf, {}),
                        }),
                      a === "map" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "map" }),
                          children: g.jsx(Bf, {}),
                        }),
                      a === "schedule" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "schedule" }),
                          children: g.jsx(zf, {}),
                        }),
                      a === "reflection" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "reflection" }),
                          children: g.jsx(Ff, {}),
                        }),
                      a === "diary" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "diary" }),
                          children: g.jsx(Uf, {}),
                        }),
                      a === "forum" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "forum" }),
                          children: g.jsx($f, {}),
                        }),
                      a === "wallet" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "wallet" }),
                          children: g.jsx(Wf, {}),
                        }),
                      a === "shop" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "shop" }),
                          children: g.jsx(Hf, {}),
                        }),
                      a === "floating_life" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "floating_life" }),
                          children: g.jsx(Kf, {}),
                        }),
                      a === "baixiang" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "baixiang" }),
                          children: g.jsx(Gf, {}),
                        }),
                      a === "wardrobe" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "wardrobe" }),
                          children: g.jsx(Yf, {}),
                        }),
                      a === "house" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "house" }),
                          children: g.jsx(Vf, {}),
                        }),
                      a === "timeslot" &&
                        g.jsx(P.Suspense, {
                          fallback: g.jsx(_t, { appName: "timeslot" }),
                          children: g.jsx(Xf, {}),
                        }),
                    ],
                  }),
                }),
          }),
          g.jsx(rf, {}),
          g.jsx(sf, {}),
          g.jsx(cf, {}),
          (C[D] || []).map((Q) => {
            const ce = n.some((H) => H.id === Q),
              B = J[Q];
            return !ce || !(B != null && B.idle)
              ? null
              : g.jsx(
                  Ef,
                  {
                    images: {
                      walk1: B.walk1 || B.idle,
                      walk2: B.walk2 || B.idle,
                      idle: B.idle,
                      held: B.held || B.idle,
                      poked: B.poked || B.idle,
                      climb: B.climb || B.idle,
                      fall: B.fall || B.idle,
                    },
                    dialogues: k[`${D}:${Q}`],
                  },
                  Q
                );
          }),
          (T || y) &&
            g.jsx("style", {
              dangerouslySetInnerHTML: {
                __html: `${T}
${y}`,
              },
            }),
          g.jsx("style", { dangerouslySetInnerHTML: { __html: Cf } }),
          g.jsx("style", {
            dangerouslySetInnerHTML: {
              __html: `
.echoes-app-shell { --echoes-font-scale: ${Math.min(
                1.2,
                Math.max(0.85, Number(U) || 1)
              )}; }
.echoes-app-shell .text-\\[9px\\]:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(9px * var(--echoes-font-scale)); }
.echoes-app-shell .text-\\[10px\\]:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(10px * var(--echoes-font-scale)); }
.echoes-app-shell .text-\\[11px\\]:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(11px * var(--echoes-font-scale)); }
.echoes-app-shell .text-\\[12px\\]:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(12px * var(--echoes-font-scale)); }
.echoes-app-shell .text-\\[12\\.5px\\]:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(12.5px * var(--echoes-font-scale)); }
.echoes-app-shell .text-\\[13px\\]:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(13px * var(--echoes-font-scale)); }
.echoes-app-shell .text-\\[13\\.5px\\]:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(13.5px * var(--echoes-font-scale)); }
.echoes-app-shell .text-\\[14px\\]:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(14px * var(--echoes-font-scale)); }
.echoes-app-shell .text-\\[15px\\]:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(15px * var(--echoes-font-scale)); }
.echoes-app-shell .text-\\[16px\\]:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(16px * var(--echoes-font-scale)); }
.echoes-app-shell .text-\\[17px\\]:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(17px * var(--echoes-font-scale)); }
.echoes-app-shell .text-\\[18px\\]:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(18px * var(--echoes-font-scale)); }
.echoes-app-shell .text-\\[19px\\]:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(19px * var(--echoes-font-scale)); }
.echoes-app-shell .text-\\[20px\\]:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(20px * var(--echoes-font-scale)); }
.echoes-app-shell .text-\\[22px\\]:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(22px * var(--echoes-font-scale)); }
.echoes-app-shell .text-\\[26px\\]:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(26px * var(--echoes-font-scale)); }
.echoes-app-shell .text-xs:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(0.75rem * var(--echoes-font-scale)); }
.echoes-app-shell .text-sm:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(0.875rem * var(--echoes-font-scale)); }
.echoes-app-shell .text-base:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(1rem * var(--echoes-font-scale)); }
.echoes-app-shell .text-lg:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(1.125rem * var(--echoes-font-scale)); }
.echoes-app-shell .text-xl:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(1.25rem * var(--echoes-font-scale)); }
.echoes-app-shell .text-2xl:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(1.5rem * var(--echoes-font-scale)); }
.echoes-app-shell .text-3xl:not(:where(input, textarea, select, option, code, pre, kbd, samp, .echoes-no-font-scale, .echoes-no-font-scale *)) { font-size: calc(1.875rem * var(--echoes-font-scale)); }
`,
            },
          }),
          O &&
            g.jsx("style", {
              dangerouslySetInnerHTML: {
                __html: `body, * { font-family: '${O.replace(
                  /'/g,
                  "\\'"
                )}', system-ui, -apple-system, sans-serif !important; }`,
              },
            }),
        ],
      }),
    })
  );
}
const zh = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: th,
      getPendingChunkCount: Af,
      preloadAllApps: Zf,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export {
  ph as $,
  th as A,
  vh as B,
  ys as C,
  Sr as D,
  wu as E,
  mu as F,
  Iu as G,
  dh as H,
  oh as I,
  ed as J,
  Yc as K,
  sh as L,
  zu as M,
  uh as N,
  Bh as O,
  id as P,
  fl as Q,
  fh as R,
  fd as S,
  Id as T,
  yu as U,
  qu as V,
  xu as W,
  Ia as X,
  sl as Y,
  Cu as Z,
  mh as _,
  mt as a,
  Qa as a0,
  _h as a1,
  yh as a2,
  us as a3,
  Po as a4,
  as as a5,
  vl as a6,
  Ih as a7,
  Ph as a8,
  Rh as a9,
  Sd as aA,
  Uu as aB,
  Hu as aC,
  vs as aD,
  Ru as aE,
  on as aF,
  Pu as aG,
  Gi as aH,
  Uc as aI,
  Ki as aJ,
  jc as aK,
  Dc as aL,
  Bc as aM,
  nd as aN,
  Qi as aO,
  Vt as aP,
  Vr as aQ,
  Gr as aR,
  _o as aS,
  vd as aT,
  Vu as aU,
  _d as aV,
  Xr as aW,
  ch as aX,
  ts as aY,
  Nc as aZ,
  zh as a_,
  Nh as aa,
  jh as ab,
  Mo as ac,
  rs as ad,
  os as ae,
  Pl as af,
  jl as ag,
  wl as ah,
  Eh as ai,
  Ch as aj,
  kh as ak,
  Ah as al,
  Sh as am,
  ls as an,
  Ml as ao,
  cs as ap,
  _l as aq,
  Th as ar,
  Su as as,
  Mh as at,
  Ke as au,
  Zu as av,
  Gu as aw,
  Cd as ax,
  pd as ay,
  Lu as az,
  ks as b,
  Ge as c,
  va as d,
  cl as e,
  Ji as f,
  bs as g,
  Yi as h,
  Fc as i,
  Ft as j,
  ih as k,
  ll as l,
  vi as m,
  Lh as n,
  Dh as o,
  Oh as p,
  dl as q,
  lh as r,
  ns as s,
  Hi as t,
  or as u,
  xh as v,
  bh as w,
  hh as x,
  wh as y,
  gh as z,
};
