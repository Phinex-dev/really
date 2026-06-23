import { r as n, j as e } from "./index-C41onZB-.js";
import {
  u as wt,
  P as Je,
  X as Ct,
  b as kt,
  G as lt,
  C as It,
  t as Xe,
  l as Ve,
  J as St,
  T as Pt,
} from "./App-CYgIjxWH.js";
import {
  b as $t,
  I as J,
  g as Ze,
  a as ge,
  C as Et,
  S as et,
} from "./initialShopItems-Bgx56oyu.js";
import { g as tt } from "./shop-C5PTfq-d.js";
import { c as _t } from "./wallet-C4f3BB2q.js";
import { S as A, a as X } from "./buttonStyles-CgOYb1KY.js";
import { g as je, b as Ne } from "./giftFulfillment-DLU8FseI.js";
import { C as Mt } from "./chevron-left-CTqCLzU8.js";
import { S as Tt } from "./search-BLOZ0mEQ.js";
import { L as st } from "./loader-circle-CcTwnOUB.js";
import { S as ye } from "./sparkles-CGxZnICD.js";
import { G as rt } from "./gift-BS6_2u8f.js";
import { C as at } from "./circle-alert-JwRkSIRb.js";
import { S as nt } from "./shopping-bag-D0B9U0yV.js";
import "./gemini-CeriFUnH.js";
import "./worldBookScopes-B0JaUaci.js";
import "./llmFetch-C_SjUca9.js";
const we = (o) =>
    o.minPrice === o.maxPrice
      ? `¥${o.minPrice.toFixed(2)}`
      : `¥${o.minPrice.toFixed(2)} - ¥${o.maxPrice.toFixed(2)}`,
  ve = (o) =>
    o.minPrice === o.maxPrice
      ? o.minPrice
      : Math.round(
          (o.minPrice + Math.random() * (o.maxPrice - o.minPrice)) * 100
        ) / 100,
  At = (o, f) =>
    o === "instant"
      ? `给${f}点了外卖`
      : o === "paperwork"
      ? `给${f}赠送了房/车`
      : `给${f}送了礼物`,
  Ft = (o) =>
    o === "instant"
      ? "点了一份外卖"
      : o === "paperwork"
      ? "赠送了一项房/车"
      : "送了一份礼物",
  Bt = ({
    item: o,
    catEmoji: f,
    catBg: F,
    onBuy: c,
    onSelfBuy: V,
    onRequestPay: P,
    onEdit: Z,
    onDelete: $,
  }) => {
    const ee = F || "from-slate-50 to-slate-100 text-slate-400";
    return e.jsxs("div", {
      className:
        "echoes-shop-item-card bg-white/70 rounded-2xl border border-slate-200/50 shadow-sm overflow-hidden flex flex-col",
      children: [
        e.jsxs("div", {
          className: `w-full aspect-square bg-gradient-to-br ${ee} flex flex-col items-center justify-center p-3 gap-1.5`,
          children: [
            e.jsx("span", { className: "text-3xl", children: f }),
            e.jsx("span", {
              className:
                "text-[11px] text-center leading-tight opacity-60 line-clamp-2",
              children: o.description,
            }),
          ],
        }),
        e.jsxs("div", {
          className: "p-2.5 flex flex-col flex-1",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-1",
              children: [
                e.jsx("span", {
                  className: "text-[13px] font-medium text-slate-700 truncate",
                  children: o.name,
                }),
                o.isCustom &&
                  e.jsx("span", {
                    className:
                      "text-[9px] text-slate-400 bg-slate-100 rounded px-1 shrink-0",
                    children: "自定义",
                  }),
              ],
            }),
            e.jsx("div", {
              className: "text-[12px] font-semibold text-emerald-600 mt-1",
              children: we(o),
            }),
            e.jsxs("div", {
              className: "flex items-center gap-1 mt-auto pt-2",
              children: [
                Z &&
                  e.jsx("button", {
                    onClick: Z,
                    className:
                      "p-1 rounded-lg hover:bg-slate-100 transition-colors",
                    children: e.jsx(St, {
                      className: "w-3 h-3 text-slate-400",
                    }),
                  }),
                $ &&
                  e.jsx("button", {
                    onClick: $,
                    className:
                      "p-1 rounded-lg hover:bg-slate-100 transition-colors",
                    children: e.jsx(Pt, {
                      className: "w-3 h-3 text-slate-300",
                    }),
                  }),
                e.jsxs("div", {
                  className: "ml-auto flex items-center gap-1",
                  children: [
                    P &&
                      e.jsx("button", {
                        onClick: P,
                        title: "请求代付",
                        "aria-label": "请求代付",
                        className:
                          "w-7 h-7 rounded-full border border-slate-200 bg-white/80 flex items-center justify-center hover:bg-slate-50 transition-colors",
                        children: e.jsx(lt, {
                          className: "w-3.5 h-3.5 text-slate-400",
                        }),
                      }),
                    e.jsx("button", {
                      onClick: V,
                      title: "买给自己",
                      "aria-label": "买给自己",
                      className:
                        "w-7 h-7 rounded-full border border-slate-200 bg-white/80 flex items-center justify-center hover:bg-slate-50 transition-colors",
                      children: e.jsx(nt, {
                        className: "w-3.5 h-3.5 text-slate-400",
                      }),
                    }),
                    c &&
                      e.jsx("button", {
                        onClick: c,
                        title: "送礼",
                        "aria-label": "送礼",
                        className:
                          "echoes-shop-buy-btn w-7 h-7 rounded-full border border-slate-200 bg-white/80 flex items-center justify-center hover:bg-slate-50 transition-colors",
                        children: e.jsx(rt, {
                          className: "w-3.5 h-3.5 text-slate-400",
                        }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function ts() {
  var He;
  const {
      setCurrentApp: o,
      characters: f,
      users: F,
      activeUserId: c,
      userContacts: V,
      chats: P,
      messages: Z,
      setMessages: $,
      userWallets: ee,
      transactions: it,
      setTransactions: Ce,
      wardrobeItems: Gt,
      setWardrobeItems: ot,
      customShopItems: te,
      setCustomShopItems: v,
      customCategories: w,
      setCustomCategories: ke,
      apiPresets: ct,
      activePresetId: Ie,
      worldBooks: Se,
    } = wt(),
    [B, dt] = n.useState(""),
    [h, se] = n.useState("food_drink"),
    [i, E] = n.useState(null),
    [x, C] = n.useState(null),
    [Pe, k] = n.useState(!1),
    [y, _] = n.useState("purchase"),
    [xt, G] = n.useState(!1),
    [I, $e] = n.useState(null),
    [M, ae] = n.useState(""),
    [le, re] = n.useState("food_drink"),
    [q, ne] = n.useState(""),
    [Ee, ie] = n.useState(""),
    [oe, ce] = n.useState(""),
    [d, O] = n.useState(null),
    [m, T] = n.useState(null),
    [mt, L] = n.useState(!1),
    [R, _e] = n.useState(""),
    [K, Me] = n.useState(""),
    [Te, Ae] = n.useState("emerald"),
    [Fe, Be] = n.useState(""),
    [Ge, qe] = n.useState(""),
    [z, de] = n.useState(!1),
    [xe, D] = n.useState(!0),
    [Oe, Le] = n.useState(""),
    [U, Re] = n.useState(!0),
    [me, Ke] = n.useState(!1),
    [ze, Y] = n.useState(null),
    [ue, W] = n.useState(null),
    pe = F.find((t) => t.id === c) || F[0],
    H = ee.find((t) => t.userId === c),
    j = H ? _t(H, it) : 0,
    ut = V[c] || [],
    De = f.filter((t) => ut.includes(t.id)),
    he = Ie ? ct.find((t) => t.id === Ie) : void 0,
    fe = n.useMemo(() => $t(w), [w]),
    Q = n.useMemo(() => {
      const t = new Map(te.map((r) => [r.id, r])),
        a = J.map((r) => t.get(r.id) || r).filter((r) => !r.isDeleted),
        l = new Set(J.map((r) => r.id)),
        s = te.filter((r) => !l.has(r.id) && !r.isDeleted);
      return [...a, ...s];
    }, [te]),
    pt = n.useMemo(() => {
      let t = Q.filter((a) => a.category === h);
      if (B.trim()) {
        const a = B.trim().toLowerCase();
        t = t.filter(
          (l) =>
            l.name.toLowerCase().includes(a) ||
            l.description.toLowerCase().includes(a)
        );
      }
      return t;
    }, [Q, h, B]),
    Ue = (t, a = "purchase") => {
      E(t), C(null), k(!1), _(a);
    },
    ht = () => {
      var Qe;
      if (!i || !x || !H) return;
      const t = ve(i);
      if (j < t) return;
      const a = Date.now(),
        l = Xe(new Date(a)),
        s = `tx-${Math.random().toString(36).substring(2, 10)}`,
        r = Math.random().toString(36).substring(7),
        u = P.find(
          (N) =>
            !N.isGroup && N.memberIds.includes(c) && N.memberIds.includes(x)
        ),
        p = (u == null ? void 0 : u.id) || "",
        S =
          ((Qe = f.find((N) => N.id === x)) == null ? void 0 : Qe.name) ||
          "未知",
        b = je(i.category, w),
        g = At(b, S),
        yt = {
          id: `${s}-purchase`,
          type: "gift_purchase",
          fromType: "user",
          fromId: c,
          toType: "character",
          toId: x,
          amount: t,
          timestamp: a,
          dateKey: l,
          description: `${g}：${i.name}`,
          relatedChatId: p,
          relatedMessageId: r,
        },
        vt = {
          id: `${s}-receive`,
          type: "gift_receive",
          fromType: "user",
          fromId: c,
          toType: "character",
          toId: x,
          amount: t,
          timestamp: a,
          dateKey: l,
          description: `${g}：${i.name}`,
          relatedChatId: p,
          relatedMessageId: r,
        };
      if ((Ce((N) => [...N, yt, vt]), p)) {
        f.find((be) => be.id === x);
        const N = {
          id: r,
          chatId: p,
          senderId: c,
          text: `${Ft(b)}：${i.name}`,
          perceivers: [c, x],
          timestamp: a,
          type: "gift",
          metadata: {
            senderName: pe.name,
            time: a,
            sourceName: (u == null ? void 0 : u.name) || "",
            gift: {
              transactionId: s,
              itemName: i.name,
              price: t,
              direction: "user_to_character",
              itemId: i.id,
              category: i.category,
              fulfillmentMode: b,
              estimatedArrival: Ne(b, a),
            },
          },
        };
        $((be) => [...be, N]);
      }
      T({ charName: S, itemName: i.name, price: t, mode: "purchase" }),
        E(null),
        C(null),
        k(!1),
        _("purchase");
    },
    ft = () => {
      var b;
      if (!i || !x) return;
      const t = Date.now(),
        a = ve(i),
        l = Math.random().toString(36).substring(7),
        s = P.find(
          (g) =>
            !g.isGroup && g.memberIds.includes(c) && g.memberIds.includes(x)
        ),
        r = (s == null ? void 0 : s.id) || "";
      if (!r) return;
      const u =
          ((b = f.find((g) => g.id === x)) == null ? void 0 : b.name) || "未知",
        p = je(i.category, w),
        S = {
          id: l,
          chatId: r,
          senderId: c,
          text: `请求代付：${i.name}`,
          perceivers: [c, x],
          timestamp: t,
          type: "gift",
          metadata: {
            senderName: pe.name,
            time: t,
            sourceName: (s == null ? void 0 : s.name) || "",
            gift: {
              transactionId: "",
              itemName: i.name,
              price: a,
              direction: "character_to_user",
              itemId: i.id,
              category: i.category,
              fulfillmentMode: p,
              estimatedArrival: Ne(p, t),
              paymentMode: "request_pay",
              requestStatus: "pending",
              requesterType: "user",
              requesterId: c,
              payerType: "character",
              payerId: x,
              recipientType: "user",
              recipientId: c,
            },
          },
        };
      $((g) => [...g, S]),
        T({ charName: u, itemName: i.name, price: a, mode: "request_pay" }),
        E(null),
        C(null),
        k(!1),
        _("purchase");
    },
    bt = () => {
      if (!d || !H) return;
      const t = ve(d);
      if (j < t) return;
      const a = Date.now(),
        l = Xe(new Date(a)),
        s = `tx-${Math.random().toString(36).substring(2, 10)}`,
        r = je(d.category, w),
        u = Ne(r, a),
        p = {
          id: `${s}-self`,
          type: "self_purchase",
          fromType: "user",
          fromId: c,
          toType: "user",
          toId: c,
          amount: t,
          timestamp: a,
          dateKey: l,
          description: `自购：${d.name}`,
        };
      Ce((b) => [...b, p]);
      const S = {
        id: `wi-${Math.random().toString(36).substring(2, 10)}`,
        userId: c,
        name: d.name,
        category: d.category,
        source: "purchase",
        fulfillmentMode: r,
        estimatedArrival: u,
        deliveryStatus: "pending",
        placement: null,
        timestamp: a,
        isEquipped: !1,
        isGifted: !1,
        ...(d.id && et[d.id] ? { furniturePackId: et[d.id] } : {}),
      };
      ot((b) => [...b, S]),
        T({
          charName: pe.name,
          itemName: d.name,
          price: t,
          mode: "self_purchase",
        }),
        O(null);
    },
    Ye = (t) => {
      t
        ? ($e(t),
          ae(t.name),
          re(t.category),
          ne(String(t.minPrice)),
          ie(String(t.maxPrice)),
          ce(t.description))
        : ($e(null), ae(""), re("food_drink"), ne(""), ie(""), ce("")),
        G(!0);
    },
    gt = () => {
      const t = parseFloat(q),
        a = parseFloat(Ee);
      if (!M.trim() || isNaN(t) || t <= 0) return;
      const l = isNaN(a) || a < t ? t : a;
      if (I) {
        const s = {
          ...I,
          name: M.trim(),
          category: le,
          minPrice: t,
          maxPrice: l,
          description: oe.trim(),
        };
        v((r) =>
          r.some((p) => p.id === I.id)
            ? r.map((p) => (p.id === I.id ? s : p))
            : [...r, s]
        );
      } else {
        const s = {
          id: `custom_${Math.random().toString(36).substring(2, 10)}`,
          name: M.trim(),
          category: le,
          minPrice: t,
          maxPrice: l,
          description: oe.trim(),
          isCustom: !0,
        };
        v((r) => [...r, s]);
      }
      G(!1);
    },
    jt = (t) => {
      const a = J.some((l) => l.id === t);
      v(
        a
          ? (l) =>
              l.some((r) => r.id === t)
                ? l.map((r) => (r.id === t ? { ...r, isDeleted: !0 } : r))
                : [...l, { ...J.find((r) => r.id === t), isDeleted: !0 }]
          : (l) => l.filter((s) => s.id !== t)
      );
    },
    Nt = async () => {
      if (!R.trim() || !K.trim() || me) return;
      const t = parseFloat(Fe) || 15,
        a = parseFloat(Ge) || Math.max(t * 5, 300),
        l = {
          id: `cat_${Date.now().toString(36)}_${Math.random()
            .toString(36)
            .substring(2, 6)}`,
          label: R.trim(),
          emoji: K.trim(),
          colorKey: Te,
          priceRange: { min: t, max: a },
          keywords: Oe.split(/[,，、\s]+/)
            .map((s) => s.trim())
            .filter(Boolean),
          isInstant: z,
          isEquippable: xe,
        };
      W(null), Ke(!0), ke((s) => [...s, l]), se(l.id), L(!1);
      try {
        if (!U) return;
        Y(l.id);
        const { items: s } = await tt({
          category: l,
          existingItems: Q,
          preset: he,
          count: 8,
          worldBooks: Se,
        });
        v((r) => [...r, ...s]);
      } catch (s) {
        console.error("Generate shop items failed:", s),
          W({ title: "AI 生成商品失败", detail: Ve(s) });
      } finally {
        Y(null), Ke(!1);
      }
    },
    We = async (t) => {
      if (ze) return;
      const a = fe.find((l) => l.id === t);
      if (a) {
        W(null), Y(t);
        try {
          const { items: l } = await tt({
            category: a,
            existingItems: Q,
            preset: he,
            count: 8,
            worldBooks: Se,
          });
          v((s) => [...s, ...l]);
        } catch (l) {
          console.error("Generate more shop items failed:", l),
            W({ title: "AI 补充商品失败", detail: Ve(l) });
        } finally {
          Y(null);
        }
      }
    };
  return e.jsxs("div", {
    className: "echoes-page echoes-page-shop h-full flex flex-col",
    children: [
      e.jsxs("div", {
        className:
          "echoes-page-header safe-top pb-4 px-4 border-b border-white/40 flex items-center gap-2 sticky top-0 z-10 bg-white/20 backdrop-blur-md",
        children: [
          e.jsx("button", {
            onClick: () => o("home"),
            className:
              "echoes-shop-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
            children: e.jsx(Mt, { className: "w-6 h-6" }),
          }),
          e.jsx("h1", {
            className: "text-2xl font-bold text-slate-800 flex-1",
            children: "商城",
          }),
          e.jsxs("div", {
            className: "text-[13px] text-slate-500",
            children: [
              "余额 ",
              e.jsxs("span", {
                className: "font-medium text-slate-700",
                children: ["¥", j.toFixed(2)],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "px-4 pb-2",
        children: [
          ue &&
            e.jsxs("div", {
              className:
                "mb-2 rounded-2xl border border-rose-200/70 bg-rose-50/90 px-3 py-2 text-[12px] text-rose-600",
              children: [
                e.jsx("div", { className: "font-medium", children: ue.title }),
                e.jsx("div", {
                  className: "mt-0.5 text-rose-500/90",
                  children: ue.detail,
                }),
              ],
            }),
          e.jsxs("div", {
            className: "relative",
            children: [
              e.jsx(Tt, {
                className:
                  "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2",
              }),
              e.jsx("input", {
                type: "text",
                value: B,
                onChange: (t) => dt(t.target.value),
                placeholder: "搜索商品...",
                className:
                  "echoes-shop-search-input w-full pl-9 pr-3 py-2 text-[13px] bg-white/70 border border-slate-200/50 rounded-xl outline-none focus:border-slate-300 transition-colors",
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "px-4 pb-2 flex gap-1.5 overflow-x-auto no-scrollbar",
        children: [
          fe.map((t) =>
            e.jsxs(
              "button",
              {
                onClick: () => se(t.id),
                className: `echoes-shop-tab px-3 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap flex items-center gap-1 transition-colors ${
                  h === t.id
                    ? "bg-[#dce4ed] text-slate-700 ring-1 ring-slate-300/60"
                    : "bg-white/70 text-slate-500 hover:bg-white"
                }`,
                children: [
                  e.jsx("span", {
                    className: "text-[11px]",
                    children: t.emoji,
                  }),
                  t.label,
                  !t.isBuiltin &&
                    h === t.id &&
                    e.jsx("span", {
                      onClick: (a) => {
                        a.stopPropagation(),
                          confirm(`删除类别「${t.label}」？
该类别下的商品将移至"日用品 / 小礼物"。`) &&
                            (ke((l) => l.filter((s) => s.id !== t.id)),
                            v((l) =>
                              l.map((s) =>
                                s.category === t.id
                                  ? { ...s, category: "daily_gift" }
                                  : s
                              )
                            ),
                            se("food_drink"));
                      },
                      className: "ml-0.5 hover:text-red-300 transition-colors",
                      children: "×",
                    }),
                ],
              },
              t.id
            )
          ),
          e.jsxs("button", {
            onClick: () => {
              _e(""),
                Me("🎁"),
                Ae("emerald"),
                Be(""),
                qe(""),
                de(!1),
                D(!0),
                Le(""),
                Re(!0),
                L(!0);
            },
            className:
              "px-2.5 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap flex items-center gap-0.5 bg-white/70 text-slate-400 hover:bg-white hover:text-slate-600 transition-colors border border-dashed border-slate-300",
            children: [e.jsx(Je, { className: "w-3 h-3" }), "类别"],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex-1 overflow-y-auto px-4 pb-4",
        children: [
          (() => {
            const t = pt.filter((s) => s.category === h),
              a = ze === h,
              l = Ze(h, w);
            return t.length === 0
              ? e.jsx("div", {
                  className: "py-12 text-center text-slate-400 text-[13px]",
                  children: a
                    ? e.jsxs("div", {
                        className: "flex flex-col items-center gap-2",
                        children: [
                          e.jsx(st, {
                            className: "w-5 h-5 animate-spin text-slate-400",
                          }),
                          e.jsx("span", {
                            children: "AI 正在生成这一类的商品...",
                          }),
                        ],
                      })
                    : e.jsxs("div", {
                        className: "flex flex-col items-center gap-3",
                        children: [
                          e.jsx("span", { children: "没有找到商品" }),
                          h !== "furniture_pack" &&
                            e.jsxs("button", {
                              onClick: () => We(h),
                              className:
                                "inline-flex items-center gap-1.5 rounded-full border border-sky-200/80 bg-white/80 px-3 py-1.5 text-[12px] font-medium text-slate-600 hover:bg-white transition-colors",
                              children: [
                                e.jsx(ye, {
                                  className: "w-3.5 h-3.5 text-sky-500",
                                }),
                                `让 AI 为"${l.label}"生成一批商品`,
                              ],
                            }),
                        ],
                      }),
                })
              : (ge(l.colorKey),
                e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("div", {
                      className: "grid grid-cols-2 gap-2.5",
                      children: t.map((s) => {
                        const r = Ze(s.category, w),
                          u = ge(r.colorKey);
                        return e.jsx(
                          Bt,
                          {
                            item: s,
                            catEmoji: r.emoji,
                            catBg: `${u.shopBg} ${u.shopText}`,
                            onBuy:
                              s.category !== "furniture_pack"
                                ? () => Ue(s, "purchase")
                                : void 0,
                            onSelfBuy: () => O(s),
                            onRequestPay: () => Ue(s, "request_pay"),
                            onEdit:
                              s.category !== "furniture_pack"
                                ? () => Ye(s)
                                : void 0,
                            onDelete:
                              s.category !== "furniture_pack"
                                ? () => jt(s.id)
                                : void 0,
                          },
                          s.id
                        );
                      }),
                    }),
                    h !== "furniture_pack" &&
                      e.jsxs("button", {
                        onClick: () => We(h),
                        disabled: a,
                        className:
                          "mt-3 w-full py-3 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 text-[13px] font-medium hover:border-slate-300 hover:text-slate-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-1.5",
                        children: [
                          a
                            ? e.jsx(st, {
                                className:
                                  "w-4 h-4 animate-spin text-slate-400",
                              })
                            : e.jsx(ye, {
                                className: "w-4 h-4 text-slate-400",
                              }),
                          a
                            ? `正在为"${l.label}"生成商品...`
                            : `让 AI 为"${l.label}"再生成一批商品`,
                        ],
                      }),
                  ],
                }));
          })(),
          h !== "furniture_pack" &&
            e.jsxs("button", {
              onClick: () => Ye(),
              className:
                "w-full py-3 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 text-[13px] font-medium hover:border-slate-300 hover:text-slate-500 transition-colors flex items-center justify-center gap-1.5",
              children: [e.jsx(Je, { className: "w-4 h-4" }), "添加自定义商品"],
            }),
        ],
      }),
      i &&
        !Pe &&
        e.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-end justify-center bg-black/30",
          onClick: () => E(null),
          children: e.jsxs("div", {
            className:
              "w-full max-w-lg bg-white rounded-t-2xl p-4 pb-6 shadow-xl animate-in slide-in-from-bottom",
            onClick: (t) => t.stopPropagation(),
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                  e.jsx("span", {
                    className: "text-[15px] font-semibold text-slate-700",
                    children:
                      y === "purchase" ? "选择送礼对象" : "选择代付对象",
                  }),
                  e.jsx("button", {
                    onClick: () => E(null),
                    className:
                      "p-1 rounded-lg hover:bg-slate-100 transition-colors",
                    children: e.jsx(Ct, {
                      className: "w-4 h-4 text-slate-400",
                    }),
                  }),
                ],
              }),
              e.jsx("div", {
                className: "text-[13px] text-slate-500 mb-3",
                children:
                  y === "purchase"
                    ? e.jsxs(e.Fragment, {
                        children: [
                          "将 ",
                          e.jsx("span", {
                            className: "font-medium text-slate-700",
                            children: i.name,
                          }),
                          " 送给谁？",
                        ],
                      })
                    : e.jsxs(e.Fragment, {
                        children: [
                          "想让谁为 ",
                          e.jsx("span", {
                            className: "font-medium text-slate-700",
                            children: i.name,
                          }),
                          " 代付？",
                        ],
                      }),
              }),
              De.length === 0
                ? e.jsx("div", {
                    className: "text-center text-slate-400 text-[13px] py-8",
                    children: "还没有联系人",
                  })
                : e.jsx("div", {
                    className: "space-y-1.5 max-h-[40vh] overflow-y-auto",
                    children: De.map((t) =>
                      e.jsxs(
                        "button",
                        {
                          onClick: () => {
                            C(t.id), k(!0);
                          },
                          className:
                            "w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left",
                          children: [
                            e.jsx(kt, { char: t, className: "w-9 h-9" }),
                            e.jsx("span", {
                              className: "text-[14px] text-slate-700",
                              children: t.name,
                            }),
                          ],
                        },
                        t.id
                      )
                    ),
                  }),
            ],
          }),
        }),
      i &&
        Pe &&
        x &&
        e.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black/30",
          onClick: () => {
            k(!1), C(null), _("purchase");
          },
          children: e.jsxs("div", {
            className: "w-[85%] max-w-sm bg-white rounded-2xl p-5 shadow-xl",
            onClick: (t) => t.stopPropagation(),
            children: [
              e.jsxs("div", {
                className: "text-center mb-4",
                children: [
                  y === "purchase"
                    ? e.jsx(rt, {
                        className: "w-8 h-8 text-emerald-500 mx-auto mb-2",
                      })
                    : e.jsx(lt, {
                        className: "w-8 h-8 text-slate-500 mx-auto mb-2",
                      }),
                  e.jsx("div", {
                    className: "text-[15px] font-semibold text-slate-700",
                    children: y === "purchase" ? "确认送礼" : "确认请求代付",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "bg-slate-50 rounded-xl p-3 space-y-1.5 mb-4",
                children: [
                  e.jsxs("div", {
                    className: "flex justify-between text-[13px]",
                    children: [
                      e.jsx("span", {
                        className: "text-slate-400",
                        children: "商品",
                      }),
                      e.jsx("span", {
                        className: "text-slate-700 font-medium",
                        children: i.name,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex justify-between text-[13px]",
                    children: [
                      e.jsx("span", {
                        className: "text-slate-400",
                        children: "价格",
                      }),
                      e.jsx("span", {
                        className: "text-slate-700 font-medium",
                        children: we(i),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex justify-between text-[13px]",
                    children: [
                      e.jsx("span", {
                        className: "text-slate-400",
                        children: "送给",
                      }),
                      e.jsx("span", {
                        className: "text-slate-700 font-medium",
                        children:
                          (He = f.find((t) => t.id === x)) == null
                            ? void 0
                            : He.name,
                      }),
                    ],
                  }),
                ],
              }),
              j < i.minPrice &&
                e.jsxs("div", {
                  className:
                    "flex items-center gap-2 text-[12px] text-rose-500 mb-3",
                  children: [
                    e.jsx(at, { className: "w-4 h-4 shrink-0" }),
                    e.jsxs("span", {
                      children: ["余额不足（当前 ¥", j.toFixed(2), "）"],
                    }),
                  ],
                }),
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  e.jsx("button", {
                    onClick: () => {
                      k(!1), C(null), _("purchase");
                    },
                    className:
                      "flex-1 py-2 rounded-xl text-[13px] font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors",
                    children: "取消",
                  }),
                  e.jsx("button", {
                    onClick: y === "purchase" ? ht : ft,
                    disabled: y === "purchase" && j < i.minPrice,
                    className: `flex-1 py-2 rounded-xl text-[13px] font-medium ${
                      y === "purchase"
                        ? `${A} ${X}`
                        : "text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                    }`,
                    children: y === "purchase" ? "确认购买" : "发送请求",
                  }),
                ],
              }),
            ],
          }),
        }),
      d &&
        e.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black/30",
          onClick: () => O(null),
          children: e.jsxs("div", {
            className: "w-[85%] max-w-sm bg-white rounded-2xl p-5 shadow-xl",
            onClick: (t) => t.stopPropagation(),
            children: [
              e.jsxs("div", {
                className: "text-center mb-4",
                children: [
                  e.jsx(nt, {
                    className: "w-8 h-8 text-emerald-500 mx-auto mb-2",
                  }),
                  e.jsx("div", {
                    className: "text-[15px] font-semibold text-slate-700",
                    children: "买给自己",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "bg-slate-50 rounded-xl p-3 space-y-1.5 mb-4",
                children: [
                  e.jsxs("div", {
                    className: "flex justify-between text-[13px]",
                    children: [
                      e.jsx("span", {
                        className: "text-slate-400",
                        children: "商品",
                      }),
                      e.jsx("span", {
                        className: "text-slate-700 font-medium",
                        children: d.name,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex justify-between text-[13px]",
                    children: [
                      e.jsx("span", {
                        className: "text-slate-400",
                        children: "价格",
                      }),
                      e.jsx("span", {
                        className: "text-slate-700 font-medium",
                        children: we(d),
                      }),
                    ],
                  }),
                ],
              }),
              j < d.minPrice &&
                e.jsxs("div", {
                  className:
                    "flex items-center gap-2 text-[12px] text-rose-500 mb-3",
                  children: [
                    e.jsx(at, { className: "w-4 h-4 shrink-0" }),
                    e.jsxs("span", {
                      children: ["余额不足（当前 ¥", j.toFixed(2), "）"],
                    }),
                  ],
                }),
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  e.jsx("button", {
                    onClick: () => O(null),
                    className:
                      "flex-1 py-2 rounded-xl text-[13px] font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors",
                    children: "取消",
                  }),
                  e.jsx("button", {
                    onClick: bt,
                    disabled: j < d.minPrice,
                    className: `flex-1 py-2 rounded-xl text-[13px] font-medium ${A} ${X}`,
                    children: "确认购买",
                  }),
                ],
              }),
            ],
          }),
        }),
      m &&
        e.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black/30",
          onClick: () => T(null),
          children: e.jsxs("div", {
            className:
              "w-[80%] max-w-xs bg-white rounded-2xl p-5 shadow-xl text-center",
            onClick: (t) => t.stopPropagation(),
            children: [
              e.jsx("div", {
                className:
                  "w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-3",
                children: e.jsx(It, { className: "w-6 h-6 text-emerald-500" }),
              }),
              e.jsx("div", {
                className: "text-[15px] font-semibold text-slate-700 mb-1",
                children:
                  m.mode === "self_purchase"
                    ? "下单成功！"
                    : m.mode === "purchase"
                    ? "送礼成功！"
                    : "代付请求已发出",
              }),
              e.jsx("div", {
                className: "text-[13px] text-slate-500",
                children:
                  m.mode === "self_purchase"
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("span", {
                            className: "font-medium text-slate-700",
                            children: m.itemName,
                          }),
                          " 正在配送中，稍后会送达收藏室",
                        ],
                      })
                    : m.mode === "purchase"
                    ? e.jsxs(e.Fragment, {
                        children: [
                          "已将 ",
                          e.jsx("span", {
                            className: "font-medium text-slate-700",
                            children: m.itemName,
                          }),
                          " 送给 ",
                          e.jsx("span", {
                            className: "font-medium text-slate-700",
                            children: m.charName,
                          }),
                        ],
                      })
                    : e.jsxs(e.Fragment, {
                        children: [
                          "已向 ",
                          e.jsx("span", {
                            className: "font-medium text-slate-700",
                            children: m.charName,
                          }),
                          " 发起 ",
                          e.jsx("span", {
                            className: "font-medium text-slate-700",
                            children: m.itemName,
                          }),
                          " 的代付请求",
                        ],
                      }),
              }),
              e.jsx("div", {
                className: `text-[13px] font-medium mt-1 ${
                  m.mode !== "request_pay"
                    ? "text-emerald-600"
                    : "text-slate-500"
                }`,
                children:
                  m.mode !== "request_pay"
                    ? `-¥${m.price.toFixed(2)}`
                    : `待对方确认 · ¥${m.price.toFixed(2)}`,
              }),
              e.jsx("button", {
                onClick: () => T(null),
                className: `mt-4 w-full py-2 rounded-xl text-[13px] font-medium ${A}`,
                children: "好的",
              }),
            ],
          }),
        }),
      xt &&
        e.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black/30",
          onClick: () => G(!1),
          children: e.jsxs("div", {
            className: "w-[90%] max-w-sm bg-white rounded-2xl p-5 shadow-xl",
            onClick: (t) => t.stopPropagation(),
            children: [
              e.jsx("div", {
                className: "text-[15px] font-semibold text-slate-700 mb-4",
                children: I ? "编辑商品" : "添加自定义商品",
              }),
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("label", {
                        className: "text-[12px] text-slate-500 mb-1 block",
                        children: "商品名称",
                      }),
                      e.jsx("input", {
                        type: "text",
                        value: M,
                        onChange: (t) => ae(t.target.value),
                        placeholder: "如：手工热可可",
                        className:
                          "w-full px-3 py-2 text-[13px] bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-slate-300",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("label", {
                        className: "text-[12px] text-slate-500 mb-1 block",
                        children: "类别",
                      }),
                      e.jsx("div", {
                        className: "flex flex-wrap gap-1.5",
                        children: fe
                          .filter((t) => t.id !== "furniture_pack")
                          .map((t) =>
                            e.jsxs(
                              "button",
                              {
                                onClick: () => re(t.id),
                                className: `px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors ${
                                  le === t.id
                                    ? "bg-[#dce4ed] text-slate-700 ring-1 ring-slate-300/60"
                                    : "bg-slate-100 text-slate-500"
                                }`,
                                children: [t.emoji, " ", t.label],
                              },
                              t.id
                            )
                          ),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      e.jsxs("div", {
                        className: "flex-1",
                        children: [
                          e.jsx("label", {
                            className: "text-[12px] text-slate-500 mb-1 block",
                            children: "最低价",
                          }),
                          e.jsx("input", {
                            type: "number",
                            value: q,
                            onChange: (t) => ne(t.target.value),
                            placeholder: "0.00",
                            min: "0",
                            step: "0.01",
                            className:
                              "w-full px-3 py-2 text-[13px] bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-slate-300",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex-1",
                        children: [
                          e.jsx("label", {
                            className: "text-[12px] text-slate-500 mb-1 block",
                            children: "最高价",
                          }),
                          e.jsx("input", {
                            type: "number",
                            value: Ee,
                            onChange: (t) => ie(t.target.value),
                            placeholder: "同最低价",
                            min: "0",
                            step: "0.01",
                            className:
                              "w-full px-3 py-2 text-[13px] bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-slate-300",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("label", {
                        className: "text-[12px] text-slate-500 mb-1 block",
                        children: "描述",
                      }),
                      e.jsx("textarea", {
                        value: oe,
                        onChange: (t) => ce(t.target.value),
                        placeholder: "简短描述这个商品",
                        rows: 2,
                        className:
                          "w-full px-3 py-2 text-[13px] bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-slate-300 resize-none",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-2 mt-4",
                children: [
                  e.jsx("button", {
                    onClick: () => G(!1),
                    className:
                      "flex-1 py-2 rounded-xl text-[13px] font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors",
                    children: "取消",
                  }),
                  e.jsx("button", {
                    onClick: gt,
                    disabled: !M.trim() || !q || parseFloat(q) <= 0,
                    className: `flex-1 py-2 rounded-xl text-[13px] font-medium ${A} ${X}`,
                    children: I ? "保存" : "添加",
                  }),
                ],
              }),
            ],
          }),
        }),
      mt &&
        e.jsx("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black/30",
          onClick: () => L(!1),
          children: e.jsxs("div", {
            className: "w-[90%] max-w-sm bg-white rounded-2xl p-5 shadow-xl",
            onClick: (t) => t.stopPropagation(),
            children: [
              e.jsx("div", {
                className: "text-[15px] font-semibold text-slate-700 mb-4",
                children: "新建商品类别",
              }),
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      e.jsxs("div", {
                        className: "flex-1",
                        children: [
                          e.jsx("label", {
                            className: "text-[12px] text-slate-500 mb-1 block",
                            children: "类别名称",
                          }),
                          e.jsx("input", {
                            type: "text",
                            value: R,
                            onChange: (t) => _e(t.target.value),
                            placeholder: "如：手工艺品",
                            className:
                              "w-full px-3 py-2 text-[13px] bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-slate-300",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "w-20",
                        children: [
                          e.jsx("label", {
                            className: "text-[12px] text-slate-500 mb-1 block",
                            children: "图标",
                          }),
                          e.jsx("input", {
                            type: "text",
                            value: K,
                            onChange: (t) => Me(t.target.value.slice(0, 2)),
                            placeholder: "🎁",
                            className:
                              "w-full px-3 py-2 text-[13px] bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-slate-300 text-center",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("label", {
                        className: "text-[12px] text-slate-500 mb-1 block",
                        children: "主题色",
                      }),
                      e.jsx("div", {
                        className: "flex flex-wrap gap-1.5",
                        children: Object.keys(Et).map((t) => {
                          const a = ge(t);
                          return e.jsx(
                            "button",
                            {
                              onClick: () => Ae(t),
                              className: `w-7 h-7 rounded-full bg-gradient-to-br ${
                                a.shopBg
                              } border-2 transition-colors ${
                                Te === t
                                  ? "border-slate-600 scale-110"
                                  : "border-transparent"
                              }`,
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("label", {
                        className: "text-[12px] text-slate-500 mb-1 block",
                        children: "配送方式",
                      }),
                      e.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          e.jsx("button", {
                            onClick: () => {
                              de(!0), D(!1);
                            },
                            className: `flex-1 py-1.5 rounded-xl text-[12px] font-medium transition-colors ${
                              z
                                ? "bg-[#dce4ed] text-slate-700 ring-1 ring-slate-300/60"
                                : "bg-slate-100 text-slate-500"
                            }`,
                            children: "即时配送（外卖）",
                          }),
                          e.jsx("button", {
                            onClick: () => de(!1),
                            className: `flex-1 py-1.5 rounded-xl text-[12px] font-medium transition-colors ${
                              z
                                ? "bg-slate-100 text-slate-500"
                                : "bg-[#dce4ed] text-slate-700 ring-1 ring-slate-300/60"
                            }`,
                            children: "快递（礼物）",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("label", {
                        className: "text-[12px] text-slate-500 mb-1 block",
                        children: "收藏室交互",
                      }),
                      e.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          e.jsx("button", {
                            onClick: () => D(!0),
                            className: `flex-1 py-1.5 rounded-xl text-[12px] font-medium transition-colors ${
                              xe
                                ? "bg-[#dce4ed] text-slate-700 ring-1 ring-slate-300/60"
                                : "bg-slate-100 text-slate-500"
                            }`,
                            children: "可携带 / 可丢弃",
                          }),
                          e.jsx("button", {
                            onClick: () => D(!1),
                            className: `flex-1 py-1.5 rounded-xl text-[12px] font-medium transition-colors ${
                              xe
                                ? "bg-slate-100 text-slate-500"
                                : "bg-[#dce4ed] text-slate-700 ring-1 ring-slate-300/60"
                            }`,
                            children: z ? "使用后移除" : "收取后移除",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      e.jsxs("div", {
                        className: "flex-1",
                        children: [
                          e.jsx("label", {
                            className: "text-[12px] text-slate-500 mb-1 block",
                            children: "最低价参考",
                          }),
                          e.jsx("input", {
                            type: "number",
                            value: Fe,
                            onChange: (t) => Be(t.target.value),
                            placeholder: "15",
                            min: "0",
                            step: "1",
                            className:
                              "w-full px-3 py-2 text-[13px] bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-slate-300",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex-1",
                        children: [
                          e.jsx("label", {
                            className: "text-[12px] text-slate-500 mb-1 block",
                            children: "最高价参考",
                          }),
                          e.jsx("input", {
                            type: "number",
                            value: Ge,
                            onChange: (t) => qe(t.target.value),
                            placeholder: "300",
                            min: "0",
                            step: "1",
                            className:
                              "w-full px-3 py-2 text-[13px] bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-slate-300",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsxs("label", {
                        className: "text-[12px] text-slate-500 mb-1 block",
                        children: [
                          "关键词 ",
                          e.jsx("span", {
                            className: "text-slate-400",
                            children: "（逗号分隔，帮助AI自动归类）",
                          }),
                        ],
                      }),
                      e.jsx("textarea", {
                        value: Oe,
                        onChange: (t) => Le(t.target.value),
                        placeholder: "如：手工，木雕，编织",
                        rows: 2,
                        className:
                          "w-full px-3 py-2 text-[13px] bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-slate-300 resize-none",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => Re((t) => !t),
                    className: `w-full rounded-2xl border px-3 py-2.5 text-left transition-colors ${
                      U
                        ? "border-sky-200/80 bg-sky-50/70"
                        : "border-slate-200 bg-slate-50/80"
                    }`,
                    children: e.jsxs("div", {
                      className: "flex items-start gap-2",
                      children: [
                        e.jsx("div", {
                          className: `mt-0.5 rounded-full p-1 ${
                            U
                              ? "bg-sky-100 text-sky-600"
                              : "bg-slate-100 text-slate-400"
                          }`,
                          children: e.jsx(ye, { className: "w-3.5 h-3.5" }),
                        }),
                        e.jsxs("div", {
                          className: "min-w-0",
                          children: [
                            e.jsx("div", {
                              className:
                                "text-[12px] font-medium text-slate-700",
                              children: "创建后让 AI 自动生成一批商品",
                            }),
                            e.jsxs("div", {
                              className: "mt-0.5 text-[11px] text-slate-500",
                              children: [
                                "默认生成 8 个该分类商品，省去手动逐条填写。",
                                he ? "" : " 当前未选中模型，创建时会报错提示。",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-2 mt-4",
                children: [
                  e.jsx("button", {
                    onClick: () => L(!1),
                    className:
                      "flex-1 py-2 rounded-xl text-[13px] font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors",
                    children: "取消",
                  }),
                  e.jsx("button", {
                    onClick: Nt,
                    disabled: !R.trim() || !K.trim() || me,
                    className: `flex-1 py-2 rounded-xl text-[13px] font-medium ${A} ${X}`,
                    children: me ? "创建中..." : U ? "创建并生成商品" : "创建",
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
export { ts as default };
