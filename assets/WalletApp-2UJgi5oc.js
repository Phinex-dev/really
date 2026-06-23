import { r as w, j as e } from "./index-C41onZB-.js";
import {
  c as V,
  u as be,
  b as G,
  l as ee,
  C as je,
  X as Ne,
  J as ve,
} from "./App-CYgIjxWH.js";
import {
  a as we,
  S as Ie,
  g as te,
  e as se,
  c as ie,
  b as le,
} from "./wallet-C4f3BB2q.js";
import { S as Te, a as Se } from "./buttonStyles-CgOYb1KY.js";
import { A as ae } from "./ApiErrorCard-DsY_S22O.js";
import { C as re } from "./chevron-left-CTqCLzU8.js";
import { R as ke } from "./refresh-cw-BoDq0Pnx.js";
import { T as _e } from "./triangle-alert-Bl8c-dcA.js";
import { L as ne } from "./loader-circle-CcTwnOUB.js";
import { C as Ce } from "./circle-DP2uW7NY.js";
import { S as $e } from "./shopping-bag-D0B9U0yV.js";
import { C as H } from "./chevron-up-B8HwjlFZ.js";
import { C as J } from "./chevron-down-DsGpUXIv.js";
import { G as Ee } from "./gift-BS6_2u8f.js";
import { W as De } from "./wallet-BLjGLXEn.js";
import "./gemini-CeriFUnH.js";
import "./giftFulfillment-DLU8FseI.js";
import "./initialShopItems-Bgx56oyu.js";
import "./worldBookScopes-B0JaUaci.js";
import "./llmFetch-C_SjUca9.js";
import "./circle-alert-JwRkSIRb.js";
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Me = [
    ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
    ],
  ],
  Fe = V("briefcase", Me);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pe = [
    [
      "path",
      {
        d: "M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",
        key: "1piglc",
      },
    ],
    ["path", { d: "M16 10h.01", key: "1m94wz" }],
    ["path", { d: "M2 8v1a2 2 0 0 0 2 2h1", key: "1env43" }],
  ],
  Be = V("piggy-bank", Pe);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ae = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  Le = V("trending-up", Ae);
function C(t, r = "CNY") {
  return r === "CNY"
    ? `¥${t.toLocaleString("zh-CN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`
    : t.toLocaleString(void 0, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
}
function Re(t) {
  const [, r, m] = t.split("-");
  return `${parseInt(r)}月${parseInt(m)}日`;
}
function ce(t) {
  const r = new Date(t);
  return `${r.getMonth() + 1}月${r.getDate()}日 ${String(r.getHours()).padStart(
    2,
    "0"
  )}:${String(r.getMinutes()).padStart(2, "0")}`;
}
const Ye = { frugal: 0.3, moderate: 0.5, generous: 0.7, extravagant: 0.9 },
  Ke = { frugal: 80, moderate: 160, generous: 320, extravagant: 600 };
function Ue(t) {
  return t <= 500 ? t : 500 + 500 * Math.log(t / 500);
}
function We(t, r) {
  const m = Math.max(t.monthlyDisposable / 30, 0),
    n = t.spendingStyle ?? "moderate",
    p = Ue(m) * (Ye[n] ?? 0.5),
    i = Math.min(
      m * (n === "extravagant" ? 0.4 : n === "generous" ? 0.3 : 0.2),
      3e4
    ),
    f = Math.max(Ke[n] ?? 160, p * 3.2 + i),
    y = Math.max(f - p, 0);
  return Math.max(
    0,
    Math.min(
      y * 4,
      Math.max(r, 0) * 0.2,
      Math.max(t.monthlyDisposable, 0) * 0.35
    )
  );
}
function Oe(t, r, m, n) {
  var p, i;
  return t === "character"
    ? ((p = m.find((f) => f.id === r)) == null ? void 0 : p.name) || "未知"
    : (t === "user" &&
        ((i = n.find((f) => f.id === r)) == null ? void 0 : i.name)) ||
        "未知";
}
function oe(t, r, m) {
  var i, f, y;
  const n = Oe(t.toType, t.toId, r, m),
    p =
      (i = t.description) != null && i.includes("：")
        ? `：${t.description.split("：").slice(1).join("：")}`
        : "";
  return (f = t.description) != null && f.includes("点了外卖")
    ? `给${n}点了外卖${p}`
    : (y = t.description) != null && y.includes("赠送了房/车")
    ? `给${n}赠送了房/车${p}`
    : `给${n}送了礼物${p}`;
}
function ze(t, r) {
  switch (t.type) {
    case "transfer_in":
      return t.toType === "user" && t.toId === r;
    case "transfer_out":
    case "gift_purchase":
    case "self_purchase":
      return !1;
    case "user_edit":
      return t.toType === "user" && t.toId === r;
    default:
      return t.toType === "user" && t.toId === r;
  }
}
const Ge = {
    salary: "工资",
    family: "家族/家庭",
    investment: "投资收益",
    freelance: "自由职业",
    other: "其他",
  },
  Ve = ({ financials: t, workPlaceName: r }) => {
    const m = t.incomeSources ?? [],
      n = le(t),
      p = m.some((i) => i.type === "salary");
    return e.jsxs("div", {
      className:
        "bg-white/70 rounded-2xl border border-slate-200/50 p-4 shadow-sm",
      children: [
        e.jsxs("div", {
          className: "flex items-center justify-between mb-3",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx(Fe, { className: "w-4 h-4 text-slate-400" }),
                e.jsx("span", {
                  className: "text-[13px] font-semibold text-slate-600",
                  children: "收入来源",
                }),
              ],
            }),
            e.jsxs("span", {
              className:
                "text-[11px] px-2 py-0.5 rounded-full bg-slate-50 text-slate-500 border border-slate-100",
              children: ["月合计 ", C(n, t.currency)],
            }),
          ],
        }),
        e.jsx("div", {
          className: "space-y-0",
          children: m.map((i, f) =>
            e.jsxs(
              "div",
              {
                children: [
                  f > 0 &&
                    e.jsx("div", { className: "h-px bg-slate-100 my-2" }),
                  e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2 min-w-0",
                        children: [
                          e.jsx("div", {
                            className: `w-1.5 h-1.5 rounded-full shrink-0 ${
                              i.type === "salary"
                                ? "bg-emerald-400"
                                : i.type === "family"
                                ? "bg-amber-400"
                                : i.type === "investment"
                                ? "bg-sky-400"
                                : "bg-slate-300"
                            }`,
                          }),
                          e.jsx("span", {
                            className: "text-[13px] text-slate-600 truncate",
                            children: i.label,
                          }),
                          e.jsx("span", {
                            className: "text-[11px] text-slate-400 shrink-0",
                            children: Ge[i.type] || i.type,
                          }),
                        ],
                      }),
                      e.jsxs("span", {
                        className:
                          "text-[13px] font-medium text-slate-700 shrink-0 ml-3",
                        children: ["+", C(i.amount, t.currency)],
                      }),
                    ],
                  }),
                ],
              },
              f
            )
          ),
        }),
        p &&
          r &&
          e.jsxs("div", {
            className:
              "flex items-center gap-2 mt-3 px-3 py-2.5 bg-slate-50/80 rounded-xl",
            children: [
              e.jsx(Ce, {
                className: "w-2 h-2 text-emerald-400 fill-emerald-400 shrink-0",
              }),
              e.jsx("span", {
                className: "text-[13px] text-slate-500",
                children: r,
              }),
            ],
          }),
      ],
    });
  },
  He = ({
    financials: t,
    balance: r,
    monthlyIncome: m,
    monthlyExpense: n,
    extraExpense: p,
  }) => {
    const i = le(t),
      f = m > 0 ? m : i,
      $ = f - n + We(t, r);
    return e.jsxs("div", {
      className:
        "echoes-wallet-balance-card bg-white/70 rounded-2xl border border-slate-200/50 p-4 shadow-sm",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-2 mb-3",
          children: [
            e.jsx(Be, { className: "w-4 h-4 text-slate-400" }),
            e.jsx("span", {
              className: "text-[13px] font-semibold text-slate-600",
              children: "存款概览",
            }),
          ],
        }),
        e.jsx("div", {
          className: "text-[13px] text-slate-400",
          children: "当前余额",
        }),
        e.jsx("div", {
          className: `text-[22px] font-medium tracking-tight ${
            r >= 0 ? "text-slate-800" : "text-rose-600"
          }`,
          children: C(r, t.currency),
        }),
        e.jsxs("div", {
          className: "text-[12px] text-slate-400 mt-1",
          children: [
            "每月固定支出 ",
            C(t.fixedMonthlyExpense),
            "（房租、交通、订阅等）",
          ],
        }),
        e.jsxs("div", {
          className: "flex flex-col gap-1.5 mt-3",
          children: [
            e.jsxs("div", {
              className:
                "flex items-center justify-between bg-slate-50/80 rounded-xl px-3 py-2",
              children: [
                e.jsx("div", {
                  className: "text-[12px] text-slate-400",
                  children: "本月收入",
                }),
                e.jsxs("div", {
                  className: "text-[14px] font-medium text-emerald-600",
                  children: ["+", C(f)],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "flex items-center justify-between bg-slate-50/80 rounded-xl px-3 py-2",
              children: [
                e.jsx("div", {
                  className: "text-[12px] text-slate-400",
                  children: "本月花费",
                }),
                e.jsxs("div", {
                  className: "text-[14px] font-medium text-rose-500",
                  children: ["-", C(n)],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "flex items-center justify-between bg-slate-50/80 rounded-xl px-3 py-2",
              children: [
                e.jsx("div", {
                  className: "text-[12px] text-slate-400",
                  children: "剩余可用",
                }),
                e.jsx("div", {
                  className: `text-[14px] font-medium ${
                    $ >= 0 ? "text-slate-700" : "text-rose-500"
                  }`,
                  children: C($),
                }),
              ],
            }),
          ],
        }),
        t.spendingDescription &&
          e.jsx("div", {
            className: "text-[12px] text-slate-400 mt-3 leading-relaxed italic",
            children: t.spendingDescription,
          }),
      ],
    });
  },
  Je = ({ financials: t, transactions: r }) => {
    const m = r
        .filter(
          (p) =>
            p.type === "investment_contribution" &&
            p.fromType === "character" &&
            p.fromId === t.characterId
        )
        .reduce((p, i) => p + i.amount, 0),
      n = (t.investmentAssets || 0) + m;
    return n <= 0
      ? null
      : e.jsxs("div", {
          className:
            "bg-white/70 rounded-2xl border border-slate-200/50 p-4 shadow-sm",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2 mb-3",
              children: [
                e.jsx(Le, { className: "w-4 h-4 text-slate-400" }),
                e.jsx("span", {
                  className: "text-[13px] font-semibold text-slate-600",
                  children: "理财",
                }),
              ],
            }),
            e.jsx("div", {
              className: "text-[13px] text-slate-400",
              children: "持有资产",
            }),
            e.jsx("div", {
              className:
                "text-[22px] font-medium text-slate-800 tracking-tight",
              children: C(n, t.currency),
            }),
            t.investmentDescription &&
              e.jsx("div", {
                className:
                  "text-[12px] text-slate-400 mt-2 leading-relaxed italic",
                children: t.investmentDescription,
              }),
          ],
        });
  },
  Xe = ({ dailyExpenses: t, currency: r }) => {
    const [m, n] = w.useState(!1),
      p = m ? t : t.slice(0, 3);
    return e.jsxs("div", {
      className:
        "bg-white/70 rounded-2xl border border-slate-200/50 p-4 shadow-sm",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-2 mb-3",
          children: [
            e.jsx($e, { className: "w-4 h-4 text-slate-400" }),
            e.jsx("span", {
              className: "text-[13px] font-semibold text-slate-600",
              children: "日常消费",
            }),
          ],
        }),
        t.length === 0
          ? e.jsx("div", {
              className: "text-[12px] text-slate-300 py-3 text-center",
              children: "还没有消费记录",
            })
          : e.jsxs("div", {
              className: "space-y-0",
              children: [
                p.map((i, f) =>
                  e.jsxs(
                    "div",
                    {
                      children: [
                        f > 0 &&
                          e.jsx("div", {
                            className: "h-px bg-slate-100 my-2.5",
                          }),
                        e.jsx("div", {
                          className: "text-[11px] text-slate-400 mb-1",
                          children: Re(i.dateKey),
                        }),
                        e.jsx("div", {
                          className:
                            "text-[13px] text-slate-500 leading-relaxed mb-1",
                          children: i.summary,
                        }),
                        e.jsxs("div", {
                          className: "text-[13px] font-medium text-slate-700",
                          children: ["-", C(i.amount, r)],
                        }),
                      ],
                    },
                    i.dateKey
                  )
                ),
                t.length > 3 &&
                  e.jsx("button", {
                    onClick: () => n(!m),
                    className:
                      "flex items-center gap-1 text-[12px] text-slate-400 hover:text-slate-500 transition-colors mt-3 mx-auto",
                    children: m
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(H, { className: "w-3 h-3" }),
                            "收起",
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(J, { className: "w-3 h-3" }),
                            "查看更多 (",
                            t.length - 3,
                            ")",
                          ],
                        }),
                  }),
              ],
            }),
      ],
    });
  },
  qe = ({
    transactions: t,
    characterId: r,
    currency: m,
    characters: n,
    users: p,
  }) => {
    const [i, f] = w.useState(!1),
      y = (() => {
        const d = t.filter((l) =>
            l.type === "transfer_out"
              ? l.fromType === "character" && l.fromId === r
              : l.type === "transfer_in"
              ? l.toType === "character" && l.toId === r
              : l.type === "gift_purchase"
              ? l.fromType === "character" && l.fromId === r
              : !1
          ),
          S = d
            .filter(
              (l) =>
                (l.type === "transfer_out" || l.type === "transfer_in") &&
                l.transferStatus === "returned"
            )
            .map((l) => ({
              ...l,
              id: `${l.id}-rev`,
              timestamp: l.timestamp + 1,
            }));
        return [...d, ...S].sort((l, N) => N.timestamp - l.timestamp);
      })(),
      $ = (d, S) => {
        var T, D;
        const l = S ? d.toType : d.fromType,
          N = S ? d.toId : d.fromId;
        return l === "character"
          ? ((T = n.find((k) => k.id === N)) == null ? void 0 : T.name) ||
              "未知"
          : (l === "user" &&
              ((D = p.find((k) => k.id === N)) == null ? void 0 : D.name)) ||
              "未知";
      };
    return e.jsxs("div", {
      className:
        "echoes-wallet-transaction-item bg-white/70 rounded-2xl border border-slate-200/50 p-4 shadow-sm",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-2 mb-3",
          children: [
            e.jsx(Ee, { className: "w-4 h-4 text-slate-400" }),
            e.jsx("span", {
              className: "text-[13px] font-semibold text-slate-600",
              children: "送礼与转账",
            }),
          ],
        }),
        y.length === 0
          ? e.jsx("div", {
              className: "text-[12px] text-slate-300 py-3 text-center",
              children: "还没有礼物和转账记录",
            })
          : e.jsxs("div", {
              className: "space-y-0",
              children: [
                (i ? y : y.slice(0, 3)).map((d, S) => {
                  const l = d.id.endsWith("-rev"),
                    N = d.fromType === "character" && d.fromId === r,
                    T = l ? !N : N,
                    D =
                      !l &&
                      d.transferStatus === "pending" &&
                      (d.type === "transfer_out" || d.type === "transfer_in")
                        ? " (待确认)"
                        : "";
                  return e.jsxs(
                    "div",
                    {
                      children: [
                        S > 0 &&
                          e.jsx("div", { className: "h-px bg-slate-100 my-2" }),
                        e.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            e.jsx("div", {
                              className: `w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-medium shrink-0 ${
                                T
                                  ? "bg-rose-50 text-rose-500"
                                  : "bg-emerald-50 text-emerald-600"
                              }`,
                              children: T ? "出" : "入",
                            }),
                            e.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "text-[13px] text-slate-600 truncate",
                                  children:
                                    d.type === "transfer_out" ||
                                    d.type === "transfer_in"
                                      ? `${
                                          l
                                            ? "转账退回"
                                            : T
                                            ? "转账给"
                                            : "收到来自"
                                        } ${$(d, N)}${
                                          !l &&
                                          d.description &&
                                          d.description !== "转账"
                                            ? ` · ${d.description}`
                                            : ""
                                        }${D}`
                                      : d.type === "gift_purchase"
                                      ? oe(d, n, p)
                                      : d.description,
                                }),
                                e.jsx("div", {
                                  className: "text-[11px] text-slate-400",
                                  children: ce(d.timestamp),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: `text-[13px] font-medium shrink-0 ${
                                T ? "text-rose-500" : "text-emerald-600"
                              }`,
                              children: [T ? "-" : "+", C(d.amount, m)],
                            }),
                          ],
                        }),
                      ],
                    },
                    d.id
                  );
                }),
                y.length > 3 &&
                  e.jsx("button", {
                    onClick: () => f(!i),
                    className:
                      "flex items-center gap-1 text-[12px] text-slate-400 hover:text-slate-500 transition-colors mt-3 mx-auto",
                    children: i
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(H, { className: "w-3 h-3" }),
                            "收起",
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(J, { className: "w-3 h-3" }),
                            "查看更多 (",
                            y.length - 3,
                            ")",
                          ],
                        }),
                  }),
              ],
            }),
      ],
    });
  },
  Qe = ({
    wallet: t,
    userName: r,
    transactions: m,
    onEditBalance: n,
    characters: p,
    users: i,
  }) => {
    const [f, y] = w.useState(!1),
      [$, d] = w.useState(""),
      [S, l] = w.useState(!1),
      N = ie(t, m),
      T = () => {
        d(String(N)), y(!0);
      },
      D = () => {
        const c = parseFloat($);
        isNaN(c) || n(c), y(!1);
      },
      k = (() => {
        const c = m.filter((x) => {
            const u = x.fromType === "user" && x.fromId === t.userId,
              I = x.toType === "user" && x.toId === t.userId;
            return !u && !I
              ? !1
              : x.type === "transfer_out"
              ? u
              : x.type === "transfer_in"
              ? I
              : x.type === "gift_purchase"
              ? u
              : x.type !== "gift_receive";
          }),
          E = c
            .filter(
              (x) =>
                (x.type === "transfer_out" || x.type === "transfer_in") &&
                x.transferStatus === "returned"
            )
            .map((x) => ({
              ...x,
              id: `${x.id}-rev`,
              timestamp: x.timestamp + 1,
            }));
        return [...c, ...E].sort((x, u) => u.timestamp - x.timestamp);
      })(),
      B = (c, E) => {
        var I, M;
        const x = E ? c.fromType : c.toType,
          u = E ? c.fromId : c.toId;
        return x === "character"
          ? ((I = p.find((P) => P.id === u)) == null ? void 0 : I.name) ||
              "未知"
          : (x === "user" &&
              ((M = i.find((P) => P.id === u)) == null ? void 0 : M.name)) ||
              "未知";
      };
    return e.jsxs("div", {
      className: "space-y-3",
      children: [
        e.jsxs("div", {
          className:
            "bg-white/70 rounded-2xl border border-slate-200/50 p-4 shadow-sm",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3 mb-2",
              children: [
                e.jsx("div", {
                  className:
                    "w-11 h-11 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center",
                  children: e.jsx(De, { className: "w-5 h-5 text-amber-500" }),
                }),
                e.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    e.jsxs("div", {
                      className: "text-[15px] font-medium text-slate-700",
                      children: [r, " 的钱包"],
                    }),
                    e.jsx("div", {
                      className: "text-[12px] text-slate-400",
                      children: "可用于转账和购物",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "mt-2",
              children: [
                e.jsx("div", {
                  className: "text-[12px] text-slate-400",
                  children: "当前余额",
                }),
                f
                  ? e.jsxs("div", {
                      className: "flex items-center gap-1.5 mt-1 min-w-0",
                      children: [
                        e.jsx("span", {
                          className: "text-lg text-slate-400 shrink-0",
                          children: "¥",
                        }),
                        e.jsx("input", {
                          type: "number",
                          value: $,
                          onChange: (c) => d(c.target.value),
                          className:
                            "min-w-0 flex-1 text-[22px] font-medium text-slate-800 bg-transparent border-b border-amber-300 outline-none py-0.5",
                          autoFocus: !0,
                          onKeyDown: (c) => {
                            c.key === "Enter" && D(),
                              c.key === "Escape" && y(!1);
                          },
                        }),
                        e.jsx("button", {
                          onClick: D,
                          className:
                            "p-1.5 rounded-lg hover:bg-emerald-50 transition-colors shrink-0",
                          children: e.jsx(je, {
                            className: "w-4 h-4 text-emerald-500",
                          }),
                        }),
                        e.jsx("button", {
                          onClick: () => y(!1),
                          className:
                            "p-1.5 rounded-lg hover:bg-slate-50 transition-colors shrink-0",
                          children: e.jsx(Ne, {
                            className: "w-4 h-4 text-slate-400",
                          }),
                        }),
                      ],
                    })
                  : e.jsxs("div", {
                      className: "flex items-center gap-2 mt-0.5",
                      children: [
                        e.jsx("span", {
                          className: "text-[22px] font-medium text-slate-800",
                          children: C(N, t.currency),
                        }),
                        e.jsx("button", {
                          onClick: T,
                          className:
                            "p-1 rounded-lg hover:bg-slate-100 transition-colors",
                          children: e.jsx(ve, {
                            className: "w-3 h-3 text-slate-400",
                          }),
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
        k.length > 0 &&
          e.jsxs("div", {
            className:
              "bg-white/70 rounded-2xl border border-slate-200/50 p-4 shadow-sm",
            children: [
              e.jsx("div", {
                className: "text-[13px] font-semibold text-slate-600 mb-3",
                children: "交易记录",
              }),
              e.jsxs("div", {
                className: "space-y-0",
                children: [
                  (S ? k : k.slice(0, 3)).map((c, E) => {
                    const x = c.id.endsWith("-rev"),
                      u = ze(c, t.userId),
                      I = x ? !u : u,
                      M =
                        !x &&
                        c.transferStatus === "pending" &&
                        (c.type === "transfer_out" || c.type === "transfer_in")
                          ? " (待确认)"
                          : "";
                    return e.jsxs(
                      "div",
                      {
                        children: [
                          E > 0 &&
                            e.jsx("div", {
                              className: "h-px bg-slate-100 my-2",
                            }),
                          e.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              e.jsx("div", {
                                className: `w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-medium shrink-0 ${
                                  I
                                    ? "bg-emerald-50 text-emerald-600"
                                    : "bg-rose-50 text-rose-500"
                                }`,
                                children: I ? "入" : "出",
                              }),
                              e.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-[13px] text-slate-600 truncate",
                                    children:
                                      c.type === "transfer_out" ||
                                      c.type === "transfer_in"
                                        ? `${
                                            x
                                              ? "转账退回"
                                              : I
                                              ? "收到来自"
                                              : "转账给"
                                          } ${B(c, u)}${
                                            !x &&
                                            c.description &&
                                            c.description !== "转账"
                                              ? ` · ${c.description}`
                                              : ""
                                          }${M}`
                                        : c.type === "gift_purchase"
                                        ? oe(c, p, i)
                                        : c.description,
                                  }),
                                  e.jsx("div", {
                                    className: "text-[11px] text-slate-400",
                                    children: ce(c.timestamp),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: `text-[13px] font-medium shrink-0 ${
                                  I ? "text-emerald-600" : "text-rose-500"
                                }`,
                                children: [
                                  I ? "+" : "-",
                                  C(c.amount, t.currency),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      c.id
                    );
                  }),
                  k.length > 3 &&
                    e.jsx("button", {
                      onClick: () => l(!S),
                      className:
                        "flex items-center gap-1 text-[12px] text-slate-400 hover:text-slate-500 transition-colors mt-3 mx-auto",
                      children: S
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(H, { className: "w-3 h-3" }),
                              "收起",
                            ],
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(J, { className: "w-3 h-3" }),
                              "查看更多 (",
                              k.length - 3,
                              ")",
                            ],
                          }),
                    }),
                ],
              }),
            ],
          }),
      ],
    });
  };
function jt() {
  var Z;
  const {
      setCurrentApp: t,
      characters: r,
      users: m,
      activeUserId: n,
      userContacts: p,
      apiPresets: i,
      activePresetId: f,
      characterFinancials: y,
      setCharacterFinancials: $,
      userWallets: d,
      setUserWallets: S,
      transactions: l,
      setTransactions: N,
      setLastUsage: T,
      entityMapBindings: D,
      places: k,
      dailyPlans: B,
      worldBooks: c,
    } = be(),
    [E, x] = w.useState("characters"),
    [u, I] = w.useState(null),
    [M, P] = w.useState(null),
    [U, R] = w.useState(null),
    [de, W] = w.useState(!1),
    Y = i.find((s) => s.id === f) || i[0],
    me = p[n] || [],
    X = r.filter((s) => me.includes(s.id)),
    q = w.useCallback((s) => y.find((a) => a.characterId === s), [y]),
    xe = w.useCallback(
      (s) =>
        l.filter(
          (a) =>
            (a.fromType === "character" && a.fromId === s) ||
            (a.toType === "character" && a.toId === s)
        ),
      [l]
    ),
    O = w.useCallback(
      (s) => {
        var j, A;
        const a = D.find(
          (v) => v.entityType === "character" && v.entityId === s
        );
        if (!a) return;
        const o =
            (j = a.placeAnchors) == null
              ? void 0
              : j.find((v) => v.role === "work" && v.placeId),
          g =
            (o == null ? void 0 : o.placeId) ||
            ((A = a.workPlaceIds) == null ? void 0 : A[0]);
        if (!g) return;
        const b = k.find((v) => v.id === g);
        if (b) return { name: b.name, description: b.description };
      },
      [D, k]
    ),
    pe = w.useCallback(
      (s) =>
        B.filter(
          (a) =>
            a.entityType === "character" &&
            a.entityId === s &&
            a.dailyExpense != null &&
            a.dailyExpense > 0
        )
          .sort((a, o) => o.dateKey.localeCompare(a.dateKey))
          .map((a) => {
            var o;
            return {
              dateKey: a.dateKey,
              amount: a.dailyExpense,
              summary:
                (o = a.expenseEntries) != null && o.length
                  ? a.expenseEntries.map((g) => g.label).join("、")
                  : a.expenseSummary || "日常消费",
            };
          }),
      [B]
    ),
    he = async (s) => {
      if (!Y) return;
      const a = r.find((o) => o.id === s);
      if (a) {
        P(s), R(null);
        try {
          const { financials: o, usage: g } = await te({
            character: a,
            userId: n,
            preset: Y,
            workPlace: O(s),
            worldBooks: c,
          });
          $((j) => [...j, o]);
          const { newTx: b } = se(
            { ...o, lastPayday: "" },
            l,
            o.lastPayday + "-01"
          );
          b.length > 0 && N((j) => [...j, ...b]), g && T(g);
        } catch (o) {
          R({ title: "初始化失败", detail: ee(o) });
        } finally {
          P(null);
        }
      }
    },
    ue = async (s) => {
      if (!Y) return;
      const a = r.find((o) => o.id === s);
      if (a) {
        $((o) => o.filter((g) => g.characterId !== s)),
          N((o) =>
            o.filter(
              (g) =>
                !(
                  (g.fromType === "character" && g.fromId === s) ||
                  (g.toType === "character" && g.toId === s)
                )
            )
          ),
          W(!1),
          P(s),
          R(null);
        try {
          const { financials: o, usage: g } = await te({
            character: a,
            userId: n,
            preset: Y,
            workPlace: O(s),
            worldBooks: c,
          });
          $((j) => [...j, o]);
          const { newTx: b } = se(
            { ...o, lastPayday: "" },
            l,
            o.lastPayday + "-01"
          );
          b.length > 0 && N((j) => [...j, ...b]), g && T(g);
        } catch (o) {
          R({ title: "重新初始化失败", detail: ee(o) });
        } finally {
          P(null);
        }
      }
    },
    Q = (s) => {
      const a = d.find((o) => o.userId === s);
      return a || { userId: s, balance: 5e3, currency: "CNY" };
    };
  w.useEffect(() => {
    n &&
      !d.find((s) => s.userId === n) &&
      S((s) =>
        s.find((a) => a.userId === n)
          ? s
          : [...s, { userId: n, balance: 5e3, currency: "CNY" }]
      );
  }, [n, d]);
  const fe = (s, a) => {
      const o = Q(s),
        g = ie(
          o,
          l.filter(
            (v) =>
              (v.fromType === "user" && v.fromId === s) ||
              (v.toType === "user" && v.toId === s)
          )
        ),
        b = a - g;
      if (b === 0) return;
      const j = new Date(),
        A = `${j.getFullYear()}-${String(j.getMonth() + 1).padStart(
          2,
          "0"
        )}-${String(j.getDate()).padStart(2, "0")}`;
      N((v) => [
        ...v,
        {
          id: `tx-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          type: "user_edit",
          fromType: b > 0 ? "system" : "user",
          fromId: b > 0 ? "system" : s,
          toType: b > 0 ? "user" : "system",
          toId: b > 0 ? s : "system",
          amount: Math.abs(b),
          timestamp: Date.now(),
          dateKey: A,
          description: `余额手动调整为 ¥${a}`,
        },
      ]);
    },
    F = u ? r.find((s) => s.id === u) : null,
    _ = u ? q(u) : null,
    K = u ? xe(u) : [],
    ge = _ ? we(_, K, B) : 0,
    z = w.useMemo(() => {
      if (!_ || !u) return { income: 0, expense: 0, extraExpense: 0 };
      const s = new Date(),
        a = `${s.getFullYear()}-${String(s.getMonth() + 1).padStart(2, "0")}`,
        o = K.filter((h) => h.dateKey.startsWith(a)),
        g = o
          .filter(
            (h) =>
              h.toType === "character" &&
              h.toId === u &&
              ["salary", "transfer_in"].includes(h.type) &&
              h.transferStatus !== "returned"
          )
          .reduce((h, L) => h + L.amount, 0),
        b = o
          .filter(
            (h) =>
              h.fromType === "character" &&
              h.fromId === u &&
              h.type === "fixed_expense"
          )
          .reduce((h, L) => h + L.amount, 0),
        j = o
          .filter(
            (h) =>
              h.fromType === "character" &&
              h.fromId === u &&
              ["transfer_out", "gift_purchase"].includes(h.type) &&
              h.transferStatus !== "returned"
          )
          .reduce((h, L) => h + L.amount, 0),
        A = B.filter(
          (h) =>
            h.entityType === "character" &&
            h.entityId === u &&
            h.dateKey.startsWith(a) &&
            h.dailyExpense
        ).reduce((h, L) => h + L.dailyExpense, 0),
        v = b + j + A,
        ye = j + A;
      return { income: g, expense: v, extraExpense: ye };
    }, [_, u, K, B]);
  if (F && _) {
    const s = (Z = O(F.id)) == null ? void 0 : Z.name,
      a = pe(F.id);
    return e.jsxs("div", {
      className: "echoes-page echoes-page-wallet w-full h-full flex flex-col",
      children: [
        e.jsxs("div", {
          className:
            "echoes-page-header safe-top pb-4 px-4 border-b border-white/40 flex items-center gap-2 sticky top-0 z-10 bg-white/20 backdrop-blur-md",
          children: [
            e.jsx("button", {
              onClick: () => I(null),
              className:
                "echoes-wallet-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
              children: e.jsx(re, { className: "w-6 h-6" }),
            }),
            e.jsx("h1", {
              className: "text-2xl font-bold text-slate-800",
              children: "返回",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "shrink-0 px-5 pb-4 flex items-center gap-3.5",
          children: [
            e.jsx(G, { char: F, className: "w-[52px] h-[52px]" }),
            e.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [
                e.jsx("div", {
                  className: "text-[18px] font-medium text-slate-800",
                  children: F.name,
                }),
                e.jsx("div", {
                  className: "text-[12px] text-slate-400 mt-0.5",
                  children:
                    _.financialPersonality || `${Ie[_.spendingStyle]}消费`,
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "flex-1 overflow-y-auto px-4 pb-6 space-y-3",
          children: [
            e.jsx(Ve, { financials: _, workPlaceName: s }),
            e.jsx(He, {
              financials: _,
              balance: ge,
              monthlyIncome: z.income,
              monthlyExpense: z.expense,
              extraExpense: z.extraExpense,
            }),
            e.jsx(Je, { financials: _, transactions: K }),
            e.jsx(Xe, { dailyExpenses: a, currency: _.currency }),
            e.jsx(qe, {
              transactions: K,
              characterId: F.id,
              currency: _.currency,
              characters: r,
              users: m,
            }),
            de
              ? e.jsxs("div", {
                  className:
                    "bg-amber-50/80 rounded-2xl border border-amber-200/50 p-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-start gap-2.5 mb-3",
                      children: [
                        e.jsx(_e, {
                          className: "w-4 h-4 text-amber-500 shrink-0 mt-0.5",
                        }),
                        e.jsxs("div", {
                          className:
                            "text-[13px] text-slate-600 leading-relaxed",
                          children: [
                            "重新初始化将",
                            e.jsx("span", {
                              className: "font-medium text-amber-700",
                              children: "清空该角色的所有财务数据",
                            }),
                            "，包括当前存款、交易记录、转账历史等，并由 AI 重新生成一份全新的财务档案。此操作不可撤销。",
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsx("button", {
                          onClick: () => W(!1),
                          className:
                            "flex-1 py-2 rounded-xl text-[12px] font-medium bg-white/80 border border-slate-200/60 text-slate-500 hover:bg-white transition-colors",
                          children: "取消",
                        }),
                        e.jsx("button", {
                          onClick: () => ue(F.id),
                          disabled: M === F.id,
                          className:
                            "flex-1 py-2 rounded-xl text-[12px] font-medium bg-amber-500 text-white hover:bg-amber-600 disabled:opacity-50 transition-colors",
                          children:
                            M === F.id
                              ? e.jsx(ne, {
                                  className: "w-3.5 h-3.5 animate-spin mx-auto",
                                })
                              : "确认重新生成",
                        }),
                      ],
                    }),
                  ],
                })
              : e.jsxs("button", {
                  onClick: () => W(!0),
                  className:
                    "w-full flex items-center justify-center gap-1.5 py-2.5 text-[12px] text-slate-400 hover:text-slate-500 transition-colors",
                  children: [
                    e.jsx(ke, { className: "w-3 h-3" }),
                    "重新生成财务档案",
                  ],
                }),
            U &&
              e.jsx("div", {
                className: "mt-1",
                children: e.jsx(ae, { error: U, onClose: () => R(null) }),
              }),
          ],
        }),
      ],
    });
  }
  return e.jsxs("div", {
    className: "echoes-page echoes-page-wallet w-full h-full flex flex-col",
    children: [
      e.jsxs("div", {
        className:
          "echoes-page-header safe-top pb-4 px-4 border-b border-white/40 flex items-center gap-2 sticky top-0 z-10 bg-white/20 backdrop-blur-md",
        children: [
          e.jsx("button", {
            onClick: () => t("home"),
            className:
              "echoes-wallet-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
            children: e.jsx(re, { className: "w-6 h-6" }),
          }),
          e.jsx("h1", {
            className: "text-2xl font-bold text-slate-800",
            children: "资产",
          }),
        ],
      }),
      e.jsxs("div", {
        className: "shrink-0 mx-5 mb-4 flex gap-1 bg-white/20 rounded-2xl p-1",
        children: [
          e.jsx("button", {
            onClick: () => x("characters"),
            className: `flex-1 py-2.5 rounded-2xl text-[13px] font-bold transition-all duration-300 ${
              E === "characters"
                ? "bg-white/70 border border-white/80 text-slate-700 shadow-[0_2px_12px_rgba(148,163,184,0.1)]"
                : "bg-transparent border border-transparent text-slate-400 hover:text-slate-500 hover:bg-white/30"
            }`,
            children: "角色资产",
          }),
          e.jsx("button", {
            onClick: () => x("user"),
            className: `flex-1 py-2.5 rounded-2xl text-[13px] font-bold transition-all duration-300 ${
              E === "user"
                ? "bg-white/70 border border-white/80 text-slate-700 shadow-[0_2px_12px_rgba(148,163,184,0.1)]"
                : "bg-transparent border border-transparent text-slate-400 hover:text-slate-500 hover:bg-white/30"
            }`,
            children: "我的钱包",
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex-1 overflow-y-auto pb-6",
        children: [
          U &&
            e.jsx("div", {
              className: "px-4 mb-3",
              children: e.jsx(ae, { error: U, onClose: () => R(null) }),
            }),
          E === "characters" &&
            e.jsxs(e.Fragment, {
              children: [
                X.length === 0 &&
                  e.jsx("div", {
                    className: "text-center text-[13px] text-slate-400 py-10",
                    children: "还没有好友角色",
                  }),
                X.map((s) =>
                  q(s.id)
                    ? e.jsxs(
                        "div",
                        {
                          className:
                            "flex items-center gap-3 px-5 py-3.5 border-b border-slate-100/80 last:border-b-0 cursor-pointer active:bg-slate-50/50 transition-colors",
                          onClick: () => I(s.id),
                          children: [
                            e.jsx(G, { char: s, className: "w-11 h-11" }),
                            e.jsx("div", {
                              className: "flex-1 min-w-0",
                              children: e.jsx("div", {
                                className:
                                  "text-[15px] font-medium text-slate-700",
                                children: s.name,
                              }),
                            }),
                          ],
                        },
                        s.id
                      )
                    : e.jsxs(
                        "div",
                        {
                          className:
                            "flex items-center gap-3 px-5 py-3.5 border-b border-slate-100/80 last:border-b-0",
                          children: [
                            e.jsx(G, { char: s, className: "w-11 h-11" }),
                            e.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "text-[15px] font-medium text-slate-700",
                                  children: s.name,
                                }),
                                e.jsx("div", {
                                  className: "text-[12px] text-slate-400",
                                  children: "尚未查看过钱包",
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              onClick: () => he(s.id),
                              disabled: M === s.id || !Y,
                              className: `px-3 py-1.5 rounded-xl text-[12px] font-semibold ${Te} ${Se}`,
                              children:
                                M === s.id
                                  ? e.jsx(ne, {
                                      className: "w-3.5 h-3.5 animate-spin",
                                    })
                                  : "初始化",
                            }),
                          ],
                        },
                        s.id
                      )
                ),
              ],
            }),
          E === "user" &&
            e.jsx("div", {
              className: "px-4 space-y-3",
              children: (() => {
                const s = m.find((a) => a.id === n);
                return s
                  ? e.jsx(Qe, {
                      wallet: Q(n),
                      userName: s.name,
                      transactions: l.filter(
                        (a) =>
                          (a.fromType === "user" && a.fromId === n) ||
                          (a.toType === "user" && a.toId === n)
                      ),
                      onEditBalance: (a) => fe(n, a),
                      characters: r,
                      users: m,
                    })
                  : null;
              })(),
            }),
        ],
      }),
    ],
  });
}
export { jt as default };
