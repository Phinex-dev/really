import { r as o, j as t } from "./index-C41onZB-.js";
import { c as fe, u as be, b as je, T as Ne } from "./App-CYgIjxWH.js";
import {
  b as ve,
  a as ye,
  g as k,
  d as W,
  i as G,
} from "./initialShopItems-Bgx56oyu.js";
import { S as z } from "./buttonStyles-CgOYb1KY.js";
import { g as F, f as we, c as ke } from "./giftFulfillment-DLU8FseI.js";
import { C as Ce } from "./chevron-left-CTqCLzU8.js";
import { P as U } from "./package-Dm7dxqWi.js";
import { S as Ie } from "./sparkles-CGxZnICD.js";
import { C as Me } from "./chevron-up-B8HwjlFZ.js";
import { C as Ae } from "./chevron-down-DsGpUXIv.js";
import { M as X } from "./map-pin-B1_DHgxu.js";
import { T as Se } from "./tag-Ka5DFHdS.js";
import { S as Pe } from "./send-DYTL5zGj.js";
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Te = [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }],
  ],
  Ee = fe("lock-open", Te);
function Je() {
  var R, H;
  const {
      setCurrentApp: V,
      activeUserId: x,
      users: B,
      characters: C,
      userContacts: J,
      wardrobeItems: I,
      setWardrobeItems: m,
      setUnlockedFurniturePackIds: Q,
      customCategories: p,
      chats: Z,
      messages: Le,
      setMessages: ee,
      transactions: De,
      setTransactions: _e,
      places: $e,
      setPlaces: te,
      entityMapBindings: qe,
      setEntityMapBindings: se,
      worldMaps: ae,
    } = be(),
    O = B.find((e) => e.id === x) || B[0],
    le = J[x] || [],
    Y = C.filter((e) => le.includes(e.id)),
    [r, c] = o.useState(null),
    [v, d] = o.useState(null),
    [M, A] = o.useState(null),
    [P, ne] = o.useState(!1),
    [f, re] = o.useState(() => Date.now()),
    [K, y] = o.useState(""),
    T = ((R = ae[0]) == null ? void 0 : R.id) || "";
  o.useEffect(() => {
    const e = window.setInterval(() => {
      re(Date.now());
    }, 3e4);
    return () => {
      window.clearInterval(e);
    };
  }, []),
    o.useEffect(() => {
      m((e) => {
        let s = !1;
        const a = e.map((l) =>
          l.placement !== void 0
            ? l
            : ((s = !0), { ...l, placement: l.isEquipped ? "carried" : null })
        );
        return s ? a : e;
      });
    }, [m]),
    o.useEffect(() => {
      m((e) => {
        let s = !1;
        const a = e.map((l) =>
          l.userId !== x ||
          l.isGifted ||
          l.deliveryStatus !== "pending" ||
          !l.estimatedArrival ||
          l.estimatedArrival > f
            ? l
            : ((s = !0), { ...l, deliveryStatus: "delivered" })
        );
        return s ? a : e;
      });
    }, [x, f, m]);
  const j = o.useMemo(
      () => I.filter((e) => e.userId === x && !e.isGifted),
      [I, x]
    ),
    E = o.useMemo(
      () =>
        j.filter(
          (e) =>
            e.deliveryStatus === "pending" &&
            (!e.estimatedArrival || e.estimatedArrival > f)
        ),
      [j, f]
    ),
    N = o.useMemo(
      () =>
        j.filter(
          (e) =>
            e.deliveryStatus !== "pending" ||
            (!!e.estimatedArrival && e.estimatedArrival <= f)
        ),
      [j, f]
    ),
    L = o.useMemo(() => I.filter((e) => e.userId === x && e.isGifted), [I, x]),
    S = (e) => e.placement ?? (e.isEquipped ? "carried" : null),
    D = o.useMemo(() => N.filter((e) => S(e) === "worn"), [N]),
    _ = o.useMemo(() => N.filter((e) => S(e) === "carried"), [N]),
    oe = o.useMemo(() => ve(p), [p]),
    ie = o.useMemo(() => {
      const e = new Map();
      for (const s of N) {
        if (S(s)) continue;
        const a = e.get(s.category) || [];
        a.push(s), e.set(s.category, a);
      }
      return e;
    }, [N]),
    $ = (e, s) => {
      m((a) =>
        a.map((l) =>
          l.id === e.id ? { ...l, placement: s, isEquipped: s !== null } : l
        )
      );
    },
    ce = (e) => {
      m((s) => s.filter((a) => a.id !== e.id)), c(null), d(null);
    },
    de = (e) => {
      m((s) => s.filter((a) => a.id !== e.id)), c(null), d(null);
    },
    xe = (e, s) => {
      const a = `place-home-${e.id}`,
        l = 20 + Math.random() * 60,
        b = 20 + Math.random() * 60,
        u = {
          id: a,
          mapId: T,
          name: s,
          category: "住宅",
          description: `${O.name}的${e.name}`,
          tags: ["home", "housing"],
          positionX: Math.round(l * 10) / 10,
          positionY: Math.round(b * 10) / 10,
        };
      te((i) => [...i, u]),
        se((i) => {
          const n = i.find((g) => g.entityType === "user" && g.entityId === x);
          if (n)
            return i.map((g) =>
              g.id === n.id
                ? {
                    ...g,
                    homePlaceId: a,
                    placeAnchors: [
                      ...(g.placeAnchors || []).filter(
                        (ge) => ge.role !== "home"
                      ),
                      {
                        id: `anchor-home-${e.id}`,
                        role: "home",
                        intent: "home",
                        placeId: a,
                        note: s,
                      },
                    ],
                    updatedAt: Date.now(),
                  }
                : g
            );
          const h = {
            id: `emb-user-${x}`,
            entityType: "user",
            entityId: x,
            homeMapId: T,
            currentMapId: T,
            homePlaceId: a,
            workPlaceIds: [],
            favoritePlaceIds: [],
            placeAnchors: [
              {
                id: `anchor-home-${e.id}`,
                role: "home",
                intent: "home",
                placeId: a,
                note: s,
              },
            ],
            updatedAt: Date.now(),
          };
          return [...i, h];
        }),
        m((i) => i.filter((n) => n.id !== e.id)),
        c(null),
        d(null),
        y("");
    },
    me = (e, s) => {
      var i;
      const a = Date.now();
      (i = C.find((n) => n.id === s)) != null && i.name;
      const l = F(e.category, p),
        b = ke(l, a);
      m((n) =>
        n.map((h) =>
          h.id === e.id
            ? {
                ...h,
                placement: null,
                isEquipped: !1,
                isGifted: !0,
                giftedToCharId: s,
                giftedAt: a,
              }
            : h
        )
      );
      const u = Z.find(
        (n) => !n.isGroup && n.memberIds.includes(x) && n.memberIds.includes(s)
      );
      if (u) {
        const h = {
          id: Math.random().toString(36).substring(7),
          chatId: u.id,
          senderId: x,
          text: `转赠了一件物品：${e.name}`,
          perceivers: [x, s],
          timestamp: a,
          type: "gift",
          metadata: {
            senderName: O.name,
            time: a,
            sourceName: u.name || "",
            gift: {
              transactionId: "",
              itemName: e.name,
              price: 0,
              sourceKind: "transfer",
              direction: "user_to_character",
              category: e.category,
              fulfillmentMode: l,
              estimatedArrival: b,
            },
          },
        };
        ee((g) => [...g, h]);
      }
      c(null), d(null), A(null);
    },
    pe = (e) => k(e.category, p).isEquippable !== !1,
    w = (e) => (k(e.category, p).isInstant ? "使用" : "收取"),
    ue = (e) =>
      (e.fulfillmentMode || F(e.category, p)) === "paperwork"
        ? "办理中"
        : "配送中",
    q = (e, s) => {
      const a = k(e.category, p),
        l = pe(e),
        b = w(e),
        u = S(e);
      return t.jsxs(
        "div",
        {
          className:
            "bg-white/70 rounded-xl border border-slate-200/50 shadow-sm p-3 flex flex-col gap-2",
          children: [
            t.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                t.jsx("span", { className: "text-lg", children: a.emoji }),
                t.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    t.jsx("div", {
                      className:
                        "text-[13px] font-medium text-slate-700 truncate",
                      children: e.name,
                    }),
                    t.jsx("div", {
                      className: "text-[11px] text-slate-400",
                      children:
                        e.source === "gift" && e.giverName
                          ? `来自 ${e.giverName}`
                          : "自购",
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              className: "flex items-center gap-1.5 flex-wrap",
              children: [
                l &&
                  s &&
                  t.jsxs(t.Fragment, {
                    children: [
                      u !== "worn" &&
                        t.jsx("button", {
                          onClick: () => $(e, "worn"),
                          className:
                            "echoes-wardrobe-wear-btn px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200",
                          children: "穿戴",
                        }),
                      u !== "carried" &&
                        t.jsx("button", {
                          onClick: () => $(e, "carried"),
                          className:
                            "echoes-wardrobe-carry-btn px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200",
                          children: "携带",
                        }),
                      u &&
                        t.jsx("button", {
                          onClick: () => $(e, null),
                          className:
                            "px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#dce4ed] text-slate-600 ring-1 ring-slate-300/60",
                          children: "放回",
                        }),
                    ],
                  }),
                e.category === "furniture_pack" &&
                  W(e) &&
                  !e.isEquipped &&
                  t.jsxs("button", {
                    onClick: () => {
                      const i = W(e);
                      i &&
                        (Q((n) => (n.includes(i) ? n : [...n, i])),
                        m((n) => n.filter((h) => h.id !== e.id)));
                    },
                    className:
                      "px-2.5 py-1 rounded-lg text-[11px] font-medium bg-teal-50 text-teal-600 hover:bg-teal-100 transition-colors flex items-center gap-1",
                    children: [t.jsx(Ee, { className: "w-3 h-3" }), "解锁"],
                  }),
                e.category === "furniture_pack" &&
                  e.isEquipped &&
                  t.jsx("span", {
                    className:
                      "px-2.5 py-1 rounded-lg text-[11px] font-medium bg-teal-50/50 text-teal-400",
                    children: "已解锁",
                  }),
                !l &&
                  !G(e) &&
                  e.category !== "furniture_pack" &&
                  t.jsx("button", {
                    onClick: () => {
                      c(e), d("use");
                    },
                    className:
                      "px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors",
                    children: b,
                  }),
                G(e) &&
                  t.jsxs("button", {
                    onClick: () => {
                      c(e), d("anchor"), y(e.name);
                    },
                    className:
                      "px-2.5 py-1 rounded-lg text-[11px] font-medium bg-sky-50 text-sky-600 hover:bg-sky-100 transition-colors flex items-center gap-1",
                    children: [
                      t.jsx(X, { className: "w-3 h-3" }),
                      "锚定到地图",
                    ],
                  }),
                e.category === "housing_vehicle" &&
                  !G(e) &&
                  t.jsxs("button", {
                    onClick: () =>
                      m((i) =>
                        i.map((n) =>
                          n.id === e.id ? { ...n, markedAsHousing: !0 } : n
                        )
                      ),
                    className:
                      "px-2.5 py-1 rounded-lg text-[11px] font-medium text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-colors flex items-center gap-1",
                    title: "标记为房产后可锚定到地图",
                    children: [t.jsx(Se, { className: "w-3 h-3" }), "标为房产"],
                  }),
                e.category !== "furniture_pack" &&
                  t.jsxs("button", {
                    onClick: () => {
                      c(e), d("gift");
                    },
                    className:
                      "px-2.5 py-1 rounded-lg text-[11px] font-medium bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors flex items-center gap-1",
                    children: [t.jsx(Pe, { className: "w-3 h-3" }), "转赠"],
                  }),
                l &&
                  t.jsx("button", {
                    onClick: () => {
                      c(e), d("discard");
                    },
                    className:
                      "px-2.5 py-1 rounded-lg text-[11px] font-medium text-slate-300 hover:text-rose-400 hover:bg-rose-50 transition-colors ml-auto",
                    children: t.jsx(Ne, { className: "w-3 h-3" }),
                  }),
              ],
            }),
          ],
        },
        e.id
      );
    },
    he = (e) => {
      const s = k(e.category, p),
        a = e.fulfillmentMode || F(e.category, p),
        l = we(a, e.estimatedArrival, f) || "配送中",
        b = ue(e);
      return t.jsxs(
        "div",
        {
          className:
            "bg-white/70 rounded-xl border border-slate-200/60 shadow-sm p-3 flex items-center gap-3",
          children: [
            t.jsx("div", {
              className:
                "w-10 h-10 rounded-xl bg-slate-100/80 flex items-center justify-center text-lg shrink-0",
              children: s.emoji,
            }),
            t.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [
                t.jsx("div", {
                  className: "text-[13px] font-medium text-slate-700 truncate",
                  children: e.name,
                }),
                t.jsx("div", {
                  className: "text-[11px] text-slate-400",
                  children:
                    e.source === "gift" && e.giverName
                      ? `来自 ${e.giverName}`
                      : "自购",
                }),
                t.jsx("div", {
                  className: "mt-1 text-[11px] text-sky-600",
                  children: l,
                }),
              ],
            }),
            t.jsx("div", {
              className: "text-[11px] font-medium text-slate-400 shrink-0",
              children: b,
            }),
          ],
        },
        e.id
      );
    };
  return t.jsxs("div", {
    className: "echoes-page echoes-page-wardrobe h-full flex flex-col",
    children: [
      t.jsxs("div", {
        className:
          "echoes-page-header safe-top pb-4 px-4 border-b border-white/40 flex items-center gap-2 sticky top-0 z-10 bg-white/20 backdrop-blur-md",
        children: [
          t.jsx("button", {
            onClick: () => V("home"),
            className:
              "echoes-wardrobe-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
            children: t.jsx(Ce, { className: "w-6 h-6" }),
          }),
          t.jsx("h1", {
            className: "text-2xl font-bold text-slate-800 flex-1",
            children: "收藏室",
          }),
          t.jsxs("span", {
            className: "text-[13px] text-slate-500",
            children: [j.length, " 件"],
          }),
        ],
      }),
      t.jsxs("div", {
        className: "flex-1 overflow-y-auto px-4 pb-6 space-y-5",
        children: [
          E.length > 0 &&
            t.jsxs("section", {
              children: [
                t.jsxs("div", {
                  className: "flex items-center gap-2 mb-2",
                  children: [
                    t.jsx(U, { className: "w-4 h-4 text-slate-400" }),
                    t.jsx("span", {
                      className: "text-[13px] font-semibold text-slate-600",
                      children: "待收取",
                    }),
                    t.jsx("span", {
                      className: "text-[11px] text-slate-400",
                      children: E.length,
                    }),
                  ],
                }),
                t.jsx("div", {
                  className: "grid grid-cols-1 gap-2",
                  children: E.map((e) => he(e)),
                }),
              ],
            }),
          t.jsxs("section", {
            children: [
              t.jsxs("div", {
                className: "flex items-center gap-2 mb-2",
                children: [
                  t.jsx(Ie, { className: "w-4 h-4 text-slate-400" }),
                  t.jsx("span", {
                    className: "text-[13px] font-semibold text-slate-600",
                    children: "穿戴中",
                  }),
                  t.jsx("span", {
                    className: "text-[11px] text-slate-400",
                    children: D.length,
                  }),
                ],
              }),
              D.length === 0
                ? t.jsx("div", {
                    className:
                      "text-[12px] text-slate-400 py-4 text-center bg-white/50 rounded-xl border border-dashed border-slate-200",
                    children: "还没有穿戴任何物品",
                  })
                : t.jsx("div", {
                    className: "grid grid-cols-1 gap-2",
                    children: D.map((e) => q(e, !0)),
                  }),
            ],
          }),
          t.jsxs("section", {
            children: [
              t.jsxs("div", {
                className: "flex items-center gap-2 mb-2",
                children: [
                  t.jsx(U, { className: "w-4 h-4 text-slate-400" }),
                  t.jsx("span", {
                    className: "text-[13px] font-semibold text-slate-600",
                    children: "随身携带",
                  }),
                  t.jsx("span", {
                    className: "text-[11px] text-slate-400",
                    children: _.length,
                  }),
                ],
              }),
              _.length === 0
                ? t.jsx("div", {
                    className:
                      "text-[12px] text-slate-400 py-4 text-center bg-white/50 rounded-xl border border-dashed border-slate-200",
                    children: "还没有携带任何物品",
                  })
                : t.jsx("div", {
                    className: "grid grid-cols-1 gap-2",
                    children: _.map((e) => q(e, !0)),
                  }),
            ],
          }),
          oe.map((e) => {
            const s = ie.get(e.id);
            return !s || s.length === 0
              ? null
              : (ye(e.colorKey),
                t.jsxs(
                  "section",
                  {
                    children: [
                      t.jsxs("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                          t.jsx("span", {
                            className: "text-base",
                            children: e.emoji,
                          }),
                          t.jsx("span", {
                            className:
                              "text-[13px] font-semibold text-slate-600",
                            children: e.label,
                          }),
                          t.jsx("span", {
                            className: "text-[11px] text-slate-400",
                            children: s.length,
                          }),
                        ],
                      }),
                      t.jsx("div", {
                        className: "grid grid-cols-1 gap-2",
                        children: s.map((a) => q(a, !0)),
                      }),
                    ],
                  },
                  e.id
                ));
          }),
          j.length === 0 &&
            t.jsxs("div", {
              className: "text-center py-12 text-slate-400 text-[13px]",
              children: [
                t.jsx(U, { className: "w-10 h-10 mx-auto mb-2 opacity-40" }),
                "收藏室空空如也",
              ],
            }),
          L.length > 0 &&
            t.jsxs("section", {
              children: [
                t.jsxs("button", {
                  onClick: () => ne(!P),
                  className: "flex items-center gap-2 w-full text-left mb-2",
                  children: [
                    P
                      ? t.jsx(Me, { className: "w-4 h-4 text-slate-400" })
                      : t.jsx(Ae, { className: "w-4 h-4 text-slate-400" }),
                    t.jsx("span", {
                      className: "text-[13px] font-semibold text-slate-500",
                      children: "赠出记录",
                    }),
                    t.jsx("span", {
                      className: "text-[11px] text-slate-400",
                      children: L.length,
                    }),
                  ],
                }),
                P &&
                  t.jsx("div", {
                    className: "space-y-1.5",
                    children: L.map((e) => {
                      var a;
                      const s =
                        (e.giftedToCharId &&
                          ((a = C.find((l) => l.id === e.giftedToCharId)) ==
                          null
                            ? void 0
                            : a.name)) ||
                        "未知";
                      return t.jsxs(
                        "div",
                        {
                          className:
                            "flex items-center gap-2 px-3 py-2 bg-white/50 rounded-lg border border-slate-100",
                          children: [
                            t.jsx("span", {
                              className: "text-[12px]",
                              children: k(e.category, p).emoji,
                            }),
                            t.jsx("span", {
                              className:
                                "text-[12px] text-slate-500 flex-1 truncate",
                              children: e.name,
                            }),
                            t.jsxs("span", {
                              className: "text-[11px] text-slate-400",
                              children: ["→ ", s],
                            }),
                            e.giftedAt &&
                              t.jsx("span", {
                                className: "text-[10px] text-slate-300",
                                children: new Date(
                                  e.giftedAt
                                ).toLocaleDateString("zh-CN", {
                                  month: "short",
                                  day: "numeric",
                                }),
                              }),
                          ],
                        },
                        e.id
                      );
                    }),
                  }),
              ],
            }),
        ],
      }),
      r &&
        v === "use" &&
        t.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black/30",
          onClick: () => {
            c(null), d(null);
          },
          children: t.jsxs("div", {
            className:
              "w-[80%] max-w-xs bg-white rounded-2xl p-5 shadow-xl text-center",
            onClick: (e) => e.stopPropagation(),
            children: [
              t.jsxs("div", {
                className: "text-[15px] font-semibold text-slate-700 mb-2",
                children: [w(r), "物品"],
              }),
              t.jsxs("div", {
                className: "text-[13px] text-slate-500 mb-4",
                children: [
                  "确定",
                  w(r),
                  " ",
                  t.jsx("span", {
                    className: "font-medium text-slate-700",
                    children: r.name,
                  }),
                  "？",
                  w(r),
                  "后将从收藏室中移除。",
                ],
              }),
              t.jsxs("div", {
                className: "flex gap-2",
                children: [
                  t.jsx("button", {
                    onClick: () => {
                      c(null), d(null);
                    },
                    className:
                      "flex-1 py-2 rounded-xl text-[13px] font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors",
                    children: "取消",
                  }),
                  t.jsx("button", {
                    onClick: () => ce(r),
                    className: `flex-1 py-2 rounded-xl text-[13px] font-medium ${z}`,
                    children: w(r),
                  }),
                ],
              }),
            ],
          }),
        }),
      r &&
        v === "discard" &&
        t.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black/30",
          onClick: () => {
            c(null), d(null);
          },
          children: t.jsxs("div", {
            className:
              "w-[80%] max-w-xs bg-white rounded-2xl p-5 shadow-xl text-center",
            onClick: (e) => e.stopPropagation(),
            children: [
              t.jsx("div", {
                className: "text-[15px] font-semibold text-slate-700 mb-2",
                children: "丢弃物品",
              }),
              t.jsxs("div", {
                className: "text-[13px] text-slate-500 mb-4",
                children: [
                  "确定丢弃 ",
                  t.jsx("span", {
                    className: "font-medium text-slate-700",
                    children: r.name,
                  }),
                  "？此操作不可撤销。",
                ],
              }),
              t.jsxs("div", {
                className: "flex gap-2",
                children: [
                  t.jsx("button", {
                    onClick: () => {
                      c(null), d(null);
                    },
                    className:
                      "flex-1 py-2 rounded-xl text-[13px] font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors",
                    children: "取消",
                  }),
                  t.jsx("button", {
                    onClick: () => de(r),
                    className:
                      "echoes-wardrobe-discard-btn flex-1 py-2 rounded-xl text-[13px] font-medium text-rose-500 bg-rose-50 hover:bg-rose-100 transition-colors",
                    children: "丢弃",
                  }),
                ],
              }),
            ],
          }),
        }),
      r &&
        v === "gift" &&
        !M &&
        t.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-end justify-center bg-black/30",
          onClick: () => {
            c(null), d(null);
          },
          children: t.jsxs("div", {
            className:
              "w-full max-w-lg bg-white rounded-t-2xl p-4 pb-6 shadow-xl animate-in slide-in-from-bottom",
            onClick: (e) => e.stopPropagation(),
            children: [
              t.jsxs("div", {
                className: "text-[15px] font-semibold text-slate-700 mb-3",
                children: [
                  "将 ",
                  t.jsx("span", {
                    className: "text-slate-900",
                    children: r.name,
                  }),
                  " 转赠给…",
                ],
              }),
              Y.length === 0
                ? t.jsx("div", {
                    className: "text-center text-slate-400 text-[13px] py-8",
                    children: "还没有联系人",
                  })
                : t.jsx("div", {
                    className: "space-y-1.5 max-h-[40vh] overflow-y-auto",
                    children: Y.map((e) =>
                      t.jsxs(
                        "button",
                        {
                          onClick: () => A(e.id),
                          className:
                            "w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left",
                          children: [
                            t.jsx(je, { char: e, className: "w-9 h-9" }),
                            t.jsx("span", {
                              className: "text-[14px] text-slate-700",
                              children: e.name,
                            }),
                          ],
                        },
                        e.id
                      )
                    ),
                  }),
            ],
          }),
        }),
      r &&
        v === "gift" &&
        M &&
        t.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black/30",
          onClick: () => {
            A(null);
          },
          children: t.jsxs("div", {
            className:
              "w-[80%] max-w-xs bg-white rounded-2xl p-5 shadow-xl text-center",
            onClick: (e) => e.stopPropagation(),
            children: [
              t.jsx("div", {
                className: "text-[15px] font-semibold text-slate-700 mb-2",
                children: "确认转赠",
              }),
              t.jsxs("div", {
                className: "text-[13px] text-slate-500 mb-4",
                children: [
                  "将 ",
                  t.jsx("span", {
                    className: "font-medium text-slate-700",
                    children: r.name,
                  }),
                  " 赠送给",
                  " ",
                  t.jsx("span", {
                    className: "font-medium text-slate-700",
                    children:
                      (H = C.find((e) => e.id === M)) == null ? void 0 : H.name,
                  }),
                  "？",
                ],
              }),
              t.jsxs("div", {
                className: "flex gap-2",
                children: [
                  t.jsx("button", {
                    onClick: () => A(null),
                    className:
                      "flex-1 py-2 rounded-xl text-[13px] font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors",
                    children: "取消",
                  }),
                  t.jsx("button", {
                    onClick: () => me(r, M),
                    className: `echoes-wardrobe-gift-btn flex-1 py-2 rounded-xl text-[13px] font-medium ${z}`,
                    children: "转赠",
                  }),
                ],
              }),
            ],
          }),
        }),
      r &&
        v === "anchor" &&
        t.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black/30",
          onClick: () => {
            c(null), d(null), y("");
          },
          children: t.jsxs("div", {
            className: "w-[85%] max-w-xs bg-white rounded-2xl p-5 shadow-xl",
            onClick: (e) => e.stopPropagation(),
            children: [
              t.jsxs("div", {
                className:
                  "text-[15px] font-semibold text-slate-700 mb-1 flex items-center gap-2",
                children: [
                  t.jsx(X, { className: "w-4 h-4 text-sky-500" }),
                  "锚定到地图",
                ],
              }),
              t.jsxs("div", {
                className: "text-[12px] text-slate-400 mb-3",
                children: [
                  "将 ",
                  t.jsx("span", {
                    className: "font-medium text-slate-600",
                    children: r.name,
                  }),
                  " 作为你的家锚定到地图上",
                ],
              }),
              t.jsxs("div", {
                className: "mb-4",
                children: [
                  t.jsx("label", {
                    className: "text-[11px] text-slate-500 mb-1 block",
                    children: "地图上显示的名称",
                  }),
                  t.jsx("input", {
                    type: "text",
                    value: K,
                    onChange: (e) => y(e.target.value),
                    placeholder: r.name,
                    className:
                      "w-full px-3 py-2 rounded-xl border border-slate-200 text-[13px] text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-300 bg-slate-50/50",
                    maxLength: 30,
                    autoFocus: !0,
                  }),
                ],
              }),
              t.jsxs("div", {
                className: "flex gap-2",
                children: [
                  t.jsx("button", {
                    onClick: () => {
                      c(null), d(null), y("");
                    },
                    className:
                      "flex-1 py-2 rounded-xl text-[13px] font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors",
                    children: "取消",
                  }),
                  t.jsx("button", {
                    onClick: () => xe(r, K.trim() || r.name),
                    className: `flex-1 py-2 rounded-xl text-[13px] font-medium ${z}`,
                    children: "确认锚定",
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
export { Je as default };
