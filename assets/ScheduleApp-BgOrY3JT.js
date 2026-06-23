import { r as c, j as e } from "./index-C41onZB-.js";
import {
  u as pe,
  f as be,
  t as me,
  aI as he,
  aM as q,
  i as fe,
  b as ue,
  m as C,
  l as H,
} from "./App-CYgIjxWH.js";
import { A as ge } from "./ApiErrorCard-DsY_S22O.js";
import { g as ye, b as we, u as je } from "./scheduleGeneration-S9n8Pthk.js";
import { e as ve } from "./wallet-C4f3BB2q.js";
import { C as E } from "./clock-3-DKm-BOJs.js";
import { C as _e } from "./chevron-left-CTqCLzU8.js";
import { S as Ne } from "./sparkles-CGxZnICD.js";
import "./circle-alert-JwRkSIRb.js";
import "./gemini-CeriFUnH.js";
import "./giftFulfillment-DLU8FseI.js";
import "./initialShopItems-Bgx56oyu.js";
import "./worldBookScopes-B0JaUaci.js";
import "./llmFetch-C_SjUca9.js";
const A = {
    free: {
      label: "空闲中",
      badgeClass:
        "bg-emerald-100/90 text-emerald-700 border border-emerald-200/80",
      dotClass: "bg-emerald-400",
    },
    busy: {
      label: "忙碌中",
      badgeClass: "bg-amber-100/90 text-amber-700 border border-amber-200/80",
      dotClass: "bg-amber-400",
    },
    focused: {
      label: "专注中",
      badgeClass:
        "bg-violet-100/90 text-violet-700 border border-violet-200/80",
      dotClass: "bg-violet-400",
    },
    offline: {
      label: "离线中",
      badgeClass: "bg-slate-200/90 text-slate-600 border border-slate-300/80",
      dotClass: "bg-slate-400",
    },
  },
  ze = () => {
    var F, O;
    const {
        setCurrentApp: U,
        characters: y,
        knowledge: $,
        apiPresets: V,
        activePresetId: S,
        worldMaps: I,
        places: w,
        entityMapBindings: W,
        dailyPlans: j,
        dailyPlanGeneratingKeys: Y,
        worldCalendarEvents: J,
        userAnchors: Q,
        setDailyPlans: X,
        setLastUsage: Z,
        runWithDailyPlanGenerationLock: ee,
        messages: te,
        chats: se,
        users: ke,
        characterFinancials: D,
        setCharacterFinancials: ae,
        transactions: K,
        setTransactions: re,
        socialRelations: le,
        worldBooks: ie,
      } = pe(),
      v = c.useMemo(
        () =>
          y.map((t) => ({
            key: `character:${t.id}`,
            entityType: "character",
            entity: t,
          })),
        [y]
      ),
      [L, ne] = c.useState(((F = v[0]) == null ? void 0 : F.key) || ""),
      [_, N] = c.useState(null),
      [k, B] = c.useState(""),
      R = S ? V.find((t) => t.id === S) : void 0,
      s = v.find((t) => t.key === L) || v[0],
      h = be(s == null ? void 0 : s.entity.timezone),
      f = me(h),
      l = s
        ? W.find(
            (t) => t.entityType === s.entityType && t.entityId === s.entity.id
          )
        : void 0,
      p = l ? I.find((t) => t.id === l.currentMapId) : void 0,
      a = s
        ? j.find(
            (t) =>
              t.entityType === s.entityType &&
              t.entityId === s.entity.id &&
              t.dateKey === f
          )
        : void 0,
      T = s ? ye(s.entityType, s.entity.id, f) : "",
      x = T ? Y.includes(T) : !1,
      d = he(a, h),
      P = c.useMemo(() => {
        if (!a) return;
        const t = a.items.filter(
            (i) => i.kind === "temporary" || !q(a).has(i.id)
          ),
          n = fe(t, h);
        return t.find((i) => n >= i.startMinute && n <= i.endMinute);
      }, [a, h]),
      de =
        (d != null &&
          d.placeId &&
          ((O = w.find((t) => t.id === d.placeId)) == null
            ? void 0
            : O.name)) ||
        "未定位",
      M = d ? A[d.availability] : A.free;
    c.useEffect(() => {
      if (!_) return;
      const t = window.setTimeout(() => N(null), 6e3);
      return () => window.clearTimeout(t);
    }, [_]),
      c.useEffect(() => {
        if (!k) return;
        const t = window.setTimeout(() => B(""), 3e3);
        return () => window.clearTimeout(t);
      }, [k]);
    const z = async (t = !0) => {
      !s ||
        !l ||
        x ||
        (!t && a) ||
        (t && h.getHours() < 4 && B("当前还未过 4:00，生成的是昨天的日程"),
        await ee(T, async () => {
          try {
            const {
              plan: n,
              usage: i,
              generationError: r,
            } = await we({
              entityType: s.entityType,
              entityId: s.entity.id,
              dateKey: f,
              binding: l,
              places: w,
              worldMaps: I,
              dailyPlans: j,
              characters: y,
              users: [],
              knowledge: $,
              messages: te,
              chats: se,
              preset: R,
              characterFinancials: D,
              transactions: K,
              worldCalendarEvents: J,
              userAnchors: Q,
              socialRelations: le,
              worldBooks: ie,
            });
            if ((X((o) => je(o, n)), Z(i), s.entityType === "character")) {
              const o = D.find((b) => b.characterId === s.entity.id);
              if (o) {
                const { newTx: b, updatedFinancials: m } = ve(o, K, f, j);
                b.length > 0 && re((u) => [...u, ...b]),
                  m &&
                    ae((u) =>
                      u.map((g) =>
                        g.characterId === m.characterId && g.userId === m.userId
                          ? m
                          : g
                      )
                    );
              }
            }
            r &&
              N({
                title:
                  r.stage === "free"
                    ? "自由日程生成失败，已回退到基础日程"
                    : "日程润色失败，已保留基础日程",
                detail: H(r.error),
              });
          } catch (n) {
            N({ title: "今日日程生成失败", detail: H(n) });
          }
        }));
    };
    c.useEffect(() => {
      !s || !l || a || x || z(!1);
    }, [a, R, l, y, j, x, $, w, s, I]);
    const oe = q(a);
    return e.jsxs("div", {
      className:
        "echoes-page echoes-page-schedule w-full h-full flex flex-col backdrop-blur-3xl",
      children: [
        _ &&
          e.jsx(ge, {
            error: _,
            onClose: () => N(null),
            className:
              "absolute top-24 left-1/2 w-[min(92%,32rem)] -translate-x-1/2 z-[60] animate-in fade-in slide-in-from-top-4 duration-300",
          }),
        k &&
          e.jsx("div", {
            className:
              "absolute top-20 left-1/2 -translate-x-1/2 z-[60] animate-in fade-in slide-in-from-top-4 duration-300",
            children: e.jsxs("div", {
              className:
                "bg-white/40 backdrop-blur-xl border border-white/40 text-slate-800 px-6 py-2.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center gap-2.5",
              children: [
                e.jsx(E, { className: "w-4 h-4 text-amber-500" }),
                e.jsx("span", {
                  className: "text-sm font-bold tracking-wide",
                  children: k,
                }),
              ],
            }),
          }),
        e.jsxs("div", {
          className:
            "echoes-page-header safe-top pb-4 px-4 border-b border-white/40 flex items-center justify-between sticky top-0 z-10 bg-white/20 backdrop-blur-md",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx("button", {
                  onClick: () => U("home"),
                  className:
                    "echoes-schedule-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                  children: e.jsx(_e, { className: "w-6 h-6" }),
                }),
                e.jsx("h1", {
                  className: "text-2xl font-bold text-slate-800",
                  children: "日程",
                }),
              ],
            }),
            e.jsx("span", {
              className:
                "text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/70 border border-white/80 text-slate-500 shadow-[0_4px_10px_rgba(148,163,184,0.08)]",
              children: f,
            }),
          ],
        }),
        e.jsxs("div", {
          className: "flex-1 overflow-y-auto px-4 pb-24 pt-4 space-y-4",
          children: [
            e.jsxs("section", {
              className:
                "bg-white/45 border border-white/70 rounded-[28px] p-4 shadow-[0_8px_18px_rgba(148,163,184,0.08)] space-y-4",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className:
                        "text-xs font-bold uppercase tracking-[0.22em] text-slate-400",
                      children: "今日调度",
                    }),
                    e.jsx("h2", {
                      className: "text-lg font-bold text-slate-800 mt-1",
                      children: "为角色生成今日计划",
                    }),
                  ],
                }),
                e.jsx("select", {
                  value: L,
                  onChange: (t) => ne(t.target.value),
                  className:
                    "echoes-select-schedule-entity w-full bg-white/75 border border-white rounded-2xl px-4 py-3 text-sm text-slate-700 outline-none",
                  children: v.map((t) =>
                    e.jsx(
                      "option",
                      { value: t.key, children: t.entity.name },
                      t.key
                    )
                  ),
                }),
                s &&
                  e.jsxs("div", {
                    className:
                      "bg-white/70 border border-white rounded-[24px] p-4 flex items-center gap-3",
                    children: [
                      e.jsx(ue, {
                        char: s.entity,
                        className: "w-14 h-14 text-base",
                      }),
                      e.jsxs("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          e.jsx("div", {
                            className: "font-bold text-slate-800",
                            children: s.entity.name,
                          }),
                          e.jsx("div", {
                            className: "text-sm text-slate-500 mt-1",
                            children: l
                              ? `当前地图：${
                                  (p == null ? void 0 : p.name) || "未知地图"
                                }`
                              : "还没有绑定地图，请先去地图 app 设置归属与当前地图",
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        onClick: () => void z(!0),
                        disabled: !l || x,
                        title: l
                          ? x
                            ? "正在生成今日日程"
                            : a
                            ? "重新生成今天的基础日程"
                            : "生成今天的基础日程"
                          : "请先绑定地图",
                        "aria-label": l
                          ? x
                            ? "正在生成今日日程"
                            : a
                            ? "重新生成今天的基础日程"
                            : "生成今天的基础日程"
                          : "请先绑定地图",
                        className:
                          "echoes-schedule-generate-btn w-10 h-10 rounded-[14px] bg-[rgba(244,249,253,0.96)] border border-[#d9e5ee] text-[#6f8faa] shadow-[0_4px_10px_rgba(132,167,197,0.10)] hover:bg-white disabled:bg-slate-100/80 disabled:text-slate-300 disabled:border-white/70 transition-all flex items-center justify-center shrink-0",
                        children: e.jsx(Ne, {
                          className: `w-4 h-4 ${x ? "animate-spin" : ""}`,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            d &&
              s &&
              e.jsxs("section", {
                className:
                  "rounded-[30px] border border-[#d9e5ee]/85 bg-[linear-gradient(135deg,#f8fbfd_0%,#edf3f8_44%,#e2ebf4_100%)] p-4 shadow-[0_10px_24px_rgba(132,167,197,0.08)] overflow-hidden relative",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.95),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(137,182,211,0.12),_transparent_42%)]",
                  }),
                  e.jsxs("div", {
                    className: "relative space-y-4",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-2.5",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex items-center justify-between gap-3",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-xs font-bold uppercase tracking-[0.22em] text-slate-400",
                                children: "当前在场状态",
                              }),
                              e.jsxs("div", {
                                className: `inline-flex shrink-0 items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.1em] ${M.badgeClass}`,
                                children: [
                                  e.jsx("span", {
                                    className: `w-1.5 h-1.5 rounded-full ${M.dotClass}`,
                                  }),
                                  M.label,
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("h2", {
                            className:
                              "text-[1.35rem] leading-tight font-bold text-slate-800",
                            children: [s.entity.name, " 正在 ", d.activity],
                          }),
                        ],
                      }),
                      P &&
                        e.jsxs("div", {
                          className:
                            "inline-flex items-center gap-2 rounded-full bg-white/72 border border-[#e5edf4]/90 px-3 py-1.5 text-xs font-semibold text-slate-500 shadow-[0_4px_10px_rgba(148,163,184,0.06)]",
                          children: [
                            e.jsx(E, {
                              className: "w-3.5 h-3.5 text-slate-400",
                            }),
                            C(P.startMinute),
                            " - ",
                            C(P.endMinute),
                          ],
                        }),
                      e.jsxs("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                          e.jsxs("div", {
                            className:
                              "rounded-[22px] bg-white/74 border border-[#e5edf4]/90 px-4 py-3 shadow-[0_6px_14px_rgba(148,163,184,0.06)] backdrop-blur-md",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400",
                                children: "所在地图",
                              }),
                              e.jsx("p", {
                                className:
                                  "mt-1 text-sm font-semibold text-slate-700",
                                children:
                                  (p == null ? void 0 : p.name) || "未绑定",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "rounded-[22px] bg-white/74 border border-[#e5edf4]/90 px-4 py-3 shadow-[0_6px_14px_rgba(148,163,184,0.06)] backdrop-blur-md",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400",
                                children: "当前地点",
                              }),
                              e.jsx("p", {
                                className:
                                  "mt-1 text-sm font-semibold text-slate-700",
                                children: de,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            e.jsxs("section", {
              className:
                "bg-white/45 border border-white/70 rounded-[28px] p-4 shadow-[0_8px_18px_rgba(148,163,184,0.08)] space-y-4",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className:
                        "text-xs font-bold uppercase tracking-[0.22em] text-slate-400",
                      children: "时间线",
                    }),
                    e.jsx("h2", {
                      className: "text-lg font-bold text-slate-800 mt-1",
                      children: "基础日程与专属日程",
                    }),
                  ],
                }),
                a
                  ? e.jsx("div", {
                      className: "space-y-3",
                      children: a.items.map((t) => {
                        var G;
                        const n = t.placeId
                            ? (G = w.find((xe) => xe.id === t.placeId)) == null
                              ? void 0
                              : G.name
                            : void 0,
                          i = t.kind === "base" && oe.has(t.id),
                          r = t.kind === "temporary",
                          o = r
                            ? {
                                label: "赴约中",
                                badgeClass:
                                  "bg-rose-100/90 text-rose-700 border border-rose-200/80",
                                dotClass: "bg-rose-400",
                              }
                            : A[t.availability],
                          b = r
                            ? "border-rose-100/80 bg-[linear-gradient(180deg,rgba(255,248,250,0.98)_0%,rgba(255,240,245,0.96)_100%)]"
                            : i
                            ? "bg-slate-100 border-slate-200 opacity-60"
                            : "bg-white/80 border-slate-100/90",
                          m = r
                            ? "bg-rose-100 text-rose-700 border border-rose-200/80"
                            : "bg-[#edf4f9] text-[#6f8faa] border border-[#d7e5ef]",
                          u = r
                            ? "bg-white/92 border-rose-100 text-slate-600 shadow-[0_4px_10px_rgba(244,143,177,0.08)]"
                            : "bg-white/85 border-slate-200 text-slate-600 shadow-[0_4px_10px_rgba(148,163,184,0.08)]",
                          g = r
                            ? "bg-[linear-gradient(180deg,rgba(255,252,253,0.98)_0%,rgba(255,243,247,0.94)_100%)] border-rose-200/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)]"
                            : "bg-sky-50/90 border-sky-100/90",
                          ce = r
                            ? "bg-white/84 border-rose-200/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_5px_14px_rgba(244,143,177,0.06)]"
                            : "bg-slate-50/95 border-slate-200";
                        return e.jsx(
                          "div",
                          {
                            className: `rounded-[24px] p-4 border ${b}`,
                            children: e.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-start justify-between gap-3",
                                  children: [
                                    e.jsx("div", {
                                      className: "min-w-0 flex-1",
                                      children: e.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          e.jsx("span", {
                                            className: `text-[11px] px-2 py-1 rounded-full font-bold ${m}`,
                                            children: r ? "赴约" : "基础日程",
                                          }),
                                          i &&
                                            e.jsx("span", {
                                              className:
                                                "text-[11px] px-2 py-1 rounded-full font-bold bg-slate-200 text-slate-600",
                                              children: "被专属日程覆盖",
                                            }),
                                        ],
                                      }),
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 text-sm font-bold text-slate-600 whitespace-nowrap",
                                      children: [
                                        e.jsx(E, {
                                          className: "w-4 h-4 text-slate-400",
                                        }),
                                        C(t.startMinute),
                                        " - ",
                                        C(t.endMinute),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex flex-col items-center text-center gap-2",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "font-bold text-slate-800 text-[1.02rem] leading-snug max-w-[260px]",
                                      children: t.title,
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex flex-wrap items-center justify-center gap-2",
                                      children: [
                                        n &&
                                          e.jsx("span", {
                                            className: `inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium ${u}`,
                                            children: n,
                                          }),
                                        e.jsxs("span", {
                                          className: `inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ${o.badgeClass}`,
                                          children: [
                                            e.jsx("span", {
                                              className: `w-2 h-2 rounded-full ${o.dotClass}`,
                                            }),
                                            o.label,
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t.note &&
                                  e.jsx("div", {
                                    className: `max-w-[300px] mx-auto rounded-[18px] px-4 py-3 text-sm leading-relaxed text-slate-600 border ${g}`,
                                    children: t.note,
                                  }),
                                t.placeSelectionReason &&
                                  e.jsx("div", {
                                    className: `w-full max-w-[320px] mx-auto rounded-[20px] px-4 py-3 text-left text-xs leading-relaxed text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] border ${ce}`,
                                    children: t.placeSelectionReason,
                                  }),
                              ],
                            }),
                          },
                          t.id
                        );
                      }),
                    })
                  : e.jsx("div", {
                      className:
                        "bg-white/70 border border-white rounded-[24px] p-6 text-sm text-slate-500 leading-relaxed",
                      children: "先在地图 app 给角色绑定地点，再回来生成。",
                    }),
              ],
            }),
          ],
        }),
      ],
    });
  };
export { ze as default };
