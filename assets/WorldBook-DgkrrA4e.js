import { r as d, j as e } from "./index-C41onZB-.js";
import { c as re, u as ye, P as se, T as le, C as Ce } from "./App-CYgIjxWH.js";
import { M as U } from "./Modal-BhAOmQIi.js";
import {
  W as Ie,
  a as Se,
  A as _e,
  D as Be,
} from "./worldBookScopes-B0JaUaci.js";
import { C as We } from "./chevron-left-CTqCLzU8.js";
import { P as Me } from "./pen-DzfzbAck.js";
import { L as oe } from "./link-C5imY-0s.js";
import { G as De } from "./globe-DcmCTt9a.js";
import { H as Ae } from "./hash-g_y78lcq.js";
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oe = [
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
        key: "k3hazp",
      },
    ],
  ],
  $e = re("book", Oe);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Le = [
    ["path", { d: "M14 17H5", key: "gfn3mx" }],
    ["path", { d: "M19 7h-9", key: "6i9tg" }],
    ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
    ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }],
  ],
  Ge = re("settings-2", Le);
function Je() {
  var ee, te;
  const {
      currentApp: Pe,
      setCurrentApp: ne,
      worldBooks: m,
      setWorldBooks: b,
      chats: N,
      setChats: O,
      activeChatId: q,
      characters: $,
      setCharacters: L,
      activeUserId: w,
      userContacts: ae,
      worldBookSubcategories: j,
      setWorldBookSubcategories: k,
    } = ye(),
    [r, J] = d.useState("rule"),
    [x, p] = d.useState(null),
    [a, c] = d.useState(null),
    [Q, h] = d.useState(null),
    [y, v] = d.useState(""),
    [C, G] = d.useState(null),
    [I, S] = d.useState(""),
    ie = [
      { id: "rule", label: "最高准则", desc: "全局系统设定" },
      { id: "patch", label: "灵魂补丁", desc: "角色设定热更新" },
      { id: "lore", label: "背景知识", desc: "世界观文档" },
      { id: "keyword", label: "触发词条", desc: "自动化检索词库" },
      { id: "html", label: "HTML", desc: "触发式 HTML 渲染" },
    ],
    [_, P] = d.useState(""),
    [B, T] = d.useState(""),
    [E, H] = d.useState(""),
    [f, W] = d.useState(""),
    [de, M] = d.useState(!1),
    [g, D] = d.useState(null);
  d.useMemo(() => N.find((t) => t.id === q), [N, q]);
  const n = d.useMemo(() => m.find((t) => t.id === a), [m, a]),
    V = (t, l) => {
      var o;
      if (!l) return !1;
      const s = N.find((i) => i.id === l);
      return (
        ((o = s == null ? void 0 : s.mountedWorldBookIds) == null
          ? void 0
          : o.includes(t)) || !1
      );
    },
    X = (t) =>
      N.filter((l) => {
        if (t === "html" && l.isGroup) return !1;
        if (l.isGroup)
          return l.creatorId === w || (!l.creatorId && w === "user");
        if (!l.memberIds.includes(w)) return !1;
        const s = ae[w] || [],
          o = l.memberIds.find((i) => i !== w);
        return o ? s.includes(o) : !1;
      }),
    K = (t) =>
      X(t.categoryId).filter((l) => {
        var s;
        return (s = l.mountedWorldBookIds) == null ? void 0 : s.includes(t.id);
      }),
    ce = (t, l) => {
      var o;
      const s = $.find((i) => i.id === l);
      return (
        ((o = s == null ? void 0 : s.mountedWorldBookIds) == null
          ? void 0
          : o.includes(t)) || !1
      );
    },
    xe = (t) =>
      $.some((l) => {
        var s;
        return (s = l.mountedWorldBookIds) == null ? void 0 : s.includes(t);
      }),
    ue = (t) => {
      P(t.title), T(t.content), H(t.keywords ? t.keywords.join(", ") : "");
    },
    me = (t) => {
      c(t);
      const l = m.find((s) => s.id === t);
      if (l && (ue(l), l.categoryId === "keyword" || l.categoryId === "html")) {
        const s = K(l)[0];
        W((s == null ? void 0 : s.id) || "");
      }
    },
    he = () => {
      c("new"), P(""), T(""), H(""), W("");
    },
    F = () => {
      if (!(!_.trim() || !B.trim()))
        if (a === "new") {
          if (!r || !x) return;
          const t = {
            id: `wb_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
            categoryId: r,
            subCategoryId: x,
            title: _.trim(),
            content: B.trim(),
            isGlobalActive: !1,
            scopes: r === "rule" ? [...Be] : void 0,
            keywords:
              r === "keyword" || r === "html"
                ? E.split(/[,，]/)
                    .map((l) => l.trim())
                    .filter(Boolean)
                : void 0,
          };
          b((l) => [...l, t]), c(t.id);
        } else
          b((t) =>
            t.map((l) =>
              l.id === a
                ? {
                    ...l,
                    title: _.trim(),
                    content: B.trim(),
                    keywords:
                      r === "keyword" || r === "html"
                        ? E.split(/[,，]/)
                            .map((s) => s.trim())
                            .filter(Boolean)
                        : l.keywords,
                  }
                : l
            )
          );
    },
    be = (t) => {
      D(t), M(!0);
    },
    pe = () => {
      g &&
        (b((t) => t.filter((l) => l.id !== g)),
        O((t) =>
          t.map((l) => {
            var s;
            return {
              ...l,
              mountedWorldBookIds:
                ((s = l.mountedWorldBookIds) == null
                  ? void 0
                  : s.filter((o) => o !== g)) || [],
            };
          })
        ),
        L((t) =>
          t.map((l) => {
            var s;
            return {
              ...l,
              mountedWorldBookIds:
                ((s = l.mountedWorldBookIds) == null
                  ? void 0
                  : s.filter((o) => o !== g)) || [],
            };
          })
        ),
        a === g && c(null),
        D(null),
        M(!1));
    },
    fe = (t) => {
      if (confirm("确定要删除此分类吗？里面的所有词条将被一并删除。")) {
        const l = m.filter((s) => s.subCategoryId === t).map((s) => s.id);
        b((s) => s.filter((o) => o.subCategoryId !== t)),
          l.length > 0 &&
            (O((s) =>
              s.map((o) => {
                var i;
                return {
                  ...o,
                  mountedWorldBookIds:
                    ((i = o.mountedWorldBookIds) == null
                      ? void 0
                      : i.filter((u) => !l.includes(u))) || [],
                };
              })
            ),
            L((s) =>
              s.map((o) => {
                var i;
                return {
                  ...o,
                  mountedWorldBookIds:
                    ((i = o.mountedWorldBookIds) == null
                      ? void 0
                      : i.filter((u) => !l.includes(u))) || [],
                };
              })
            )),
          k((s) => s.filter((o) => o.id !== t)),
          x === t && (p(null), c(null)),
          C === t && (G(null), S(""));
      }
    },
    ge = (t) => {
      const l = j.find((s) => s.id === t);
      l && (G(t), S(l.name));
    },
    A = () => {
      G(null), S("");
    },
    Y = () => {
      if (!C) return;
      const t = I.trim();
      t && (k((l) => l.map((s) => (s.id === C ? { ...s, name: t } : s))), A());
    },
    we = () => {
      !a ||
        a === "new" ||
        b((t) =>
          t.map((l) =>
            l.id === a ? { ...l, isGlobalActive: !l.isGlobalActive } : l
          )
        );
    },
    je = (t) => {
      !a ||
        a === "new" ||
        b((l) =>
          l.map((s) => {
            if (s.id !== a) return s;
            const o = Array.isArray(s.scopes) ? s.scopes : [],
              i = o.includes(t) ? o.filter((u) => u !== t) : [...o, t];
            return { ...s, scopes: i };
          })
        );
    },
    [ve, R] = d.useState(!1),
    Ne = (t) => {
      !a ||
        a === "new" ||
        !t ||
        O((l) =>
          l.map((s) => {
            var o;
            if (s.id === t) {
              const u = (
                (o = s.mountedWorldBookIds) == null ? void 0 : o.includes(a)
              )
                ? (s.mountedWorldBookIds || []).filter((z) => z !== a)
                : [...(s.mountedWorldBookIds || []), a];
              return { ...s, mountedWorldBookIds: u };
            }
            return s;
          })
        );
    },
    ke = (t) => {
      !a ||
        a === "new" ||
        L((l) =>
          l.map((s) => {
            var o;
            if (s.id === t) {
              const u = (
                (o = s.mountedWorldBookIds) == null ? void 0 : o.includes(a)
              )
                ? (s.mountedWorldBookIds || []).filter((z) => z !== a)
                : [...(s.mountedWorldBookIds || []), a];
              return { ...s, mountedWorldBookIds: u };
            }
            return s;
          })
        );
    },
    Z = () => {
      var t;
      return e.jsxs("div", {
        className: "space-y-4 fade-in animate-in duration-300",
        children: [
          n &&
            (r === "keyword" || r === "html") &&
            (() => {
              const l = K(n);
              return l.length === 0
                ? null
                : e.jsxs("div", {
                    className:
                      "flex flex-wrap items-center gap-2 rounded-2xl border border-sky-100/80 bg-sky-50/60 px-3 py-2 shadow-sm",
                    children: [
                      e.jsx("span", {
                        className: "text-[11px] font-bold text-[#5f7f9a]",
                        children: "已挂载",
                      }),
                      l
                        .slice(0, 3)
                        .map((s) =>
                          e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => W(s.id),
                              className: `max-w-[9rem] truncate rounded-lg px-2 py-1 text-[11px] font-bold transition-all ${
                                f === s.id
                                  ? "bg-[#89b6d3] text-white shadow-sm shadow-sky-200/50"
                                  : "bg-white/80 text-[#6f8faa] hover:bg-white"
                              }`,
                              title: s.name,
                              children: s.name,
                            },
                            s.id
                          )
                        ),
                      l.length > 3 &&
                        e.jsxs("span", {
                          className: "text-[11px] font-bold text-[#8aa2b6]",
                          children: ["+", l.length - 3],
                        }),
                    ],
                  });
            })(),
          a !== "new" &&
            e.jsxs("div", {
              className:
                "bg-white/60 border border-white/80 rounded-2xl p-4 shadow-sm space-y-3",
              children: [
                r === "keyword" || r === "html"
                  ? e.jsxs("div", {
                      className: "flex flex-col gap-3",
                      children: [
                        e.jsxs("div", {
                          className:
                            "text-sm font-bold text-slate-700 flex items-center gap-1.5 shrink-0 whitespace-nowrap",
                          children: [
                            e.jsx(oe, { className: "w-4 h-4 text-[#6f8faa]" }),
                            "指定对话挂载",
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-center gap-2 pointer-events-auto flex-wrap",
                          children: [
                            e.jsxs("select", {
                              value: f,
                              onChange: (l) => W(l.target.value),
                              className:
                                "bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-lg px-2 py-1.5 text-[11px] outline-none transition-all text-slate-700 font-medium flex-1 min-w-[100px] truncate",
                              children: [
                                e.jsx("option", {
                                  value: "",
                                  disabled: !0,
                                  children: "- 选择对话 -",
                                }),
                                X(r).map((l) =>
                                  e.jsx(
                                    "option",
                                    { value: l.id, children: l.name },
                                    l.id
                                  )
                                ),
                              ],
                            }),
                            e.jsx("button", {
                              onClick: () => Ne(f),
                              disabled: !f,
                              className: `relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out outline-none disabled:opacity-50 disabled:cursor-not-allowed ${
                                V((n == null ? void 0 : n.id) || "", f)
                                  ? "bg-[#89b6d3]"
                                  : "bg-slate-200"
                              }`,
                              children: e.jsx("span", {
                                className: `inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out shadow-sm ${
                                  V((n == null ? void 0 : n.id) || "", f)
                                    ? "translate-x-6"
                                    : "translate-x-1"
                                }`,
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : e.jsxs("div", {
                      className:
                        "flex items-center justify-between pointer-events-none gap-2",
                      children: [
                        e.jsxs("div", {
                          className:
                            "text-sm font-bold text-slate-700 flex items-center gap-1.5 shrink-0 whitespace-nowrap",
                          children: [
                            r === "rule" &&
                              e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx(De, {
                                    className: "w-4 h-4 text-amber-500",
                                  }),
                                  "全局响应状态",
                                ],
                              }),
                            (r === "patch" || r === "lore") &&
                              e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx(oe, {
                                    className: "w-4 h-4 text-purple-500",
                                  }),
                                  "角色绑定",
                                ],
                              }),
                          ],
                        }),
                        r === "rule" &&
                          e.jsx("button", {
                            onClick: we,
                            className: `relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out outline-none pointer-events-auto ${
                              n != null && n.isGlobalActive
                                ? "bg-amber-500"
                                : "bg-slate-200"
                            }`,
                            children: e.jsx("span", {
                              className: `inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out shadow-sm ${
                                n != null && n.isGlobalActive
                                  ? "translate-x-6"
                                  : "translate-x-1"
                              }`,
                            }),
                          }),
                      ],
                    }),
                (r === "keyword" || r === "html") &&
                  e.jsx("p", {
                    className: "text-[10px] text-slate-400 font-medium",
                    children:
                      r === "html"
                        ? "在下拉列表中选择一个私聊对话以开启 HTML 触发监听。"
                        : "在下拉列表中选择一个对话以开启同步监听。",
                  }),
                r === "rule" &&
                  e.jsx("p", {
                    className: "text-[10px] text-amber-600/70 font-medium",
                    children:
                      "开启后，此最高准则将应用在所有角色的对话上下文中。",
                  }),
                r === "rule" &&
                  (n == null ? void 0 : n.isGlobalActive) &&
                  e.jsx("div", {
                    className: "pt-1 space-y-1.5",
                    children: e.jsxs("button", {
                      onClick: () => R(!0),
                      className:
                        "w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white border border-white/80 hover:border-[#89b6d3]/40 transition-all outline-none group",
                      children: [
                        e.jsxs("div", {
                          className:
                            "text-xs font-bold text-slate-700 flex items-center gap-1.5 min-w-0",
                          children: [
                            e.jsx(Ge, {
                              className: "w-3.5 h-3.5 text-[#6f8faa] shrink-0",
                            }),
                            e.jsx("span", {
                              className: "truncate",
                              children: "作用场景",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "flex items-center gap-1 text-[11px] font-bold text-slate-500 group-hover:text-[#6f8faa] transition-colors",
                          children: e.jsxs("span", {
                            children: [
                              ((t = n == null ? void 0 : n.scopes) == null
                                ? void 0
                                : t.length) ?? 0,
                              " / ",
                              _e.length,
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                (r === "patch" || r === "lore") &&
                  e.jsxs("div", {
                    className: "pt-2",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-[10px] text-purple-600/70 font-medium mb-3",
                        children: "选择要将此档案挂载给哪些角色：",
                      }),
                      e.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: $.map((l) => {
                          const s = ce((n == null ? void 0 : n.id) || "", l.id);
                          return e.jsxs(
                            "button",
                            {
                              onClick: () => ke(l.id),
                              className: `flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-bold transition-all outline-none ${
                                s
                                  ? "bg-purple-500 text-white border-purple-500 shadow-sm shadow-purple-500/20"
                                  : "bg-white/50 text-slate-500 border-white hover:bg-white hover:text-slate-700 hover:border-slate-200"
                              }`,
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-4 h-4 rounded-full overflow-hidden bg-slate-200 shrink-0 border border-white/50",
                                  children: l.avatarUrl
                                    ? e.jsx("img", {
                                        src: l.avatarUrl,
                                        className: "w-full h-full object-cover",
                                      })
                                    : e.jsx("div", {
                                        className: `w-full h-full ${l.avatarColor}`,
                                      }),
                                }),
                                l.name,
                              ],
                            },
                            l.id
                          );
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsxs("div", {
                className: "space-y-1.5",
                children: [
                  e.jsx("label", {
                    className:
                      "text-[11px] font-bold text-slate-500 uppercase ml-1",
                    children: "标题",
                  }),
                  e.jsx("input", {
                    type: "text",
                    value: _,
                    onChange: (l) => P(l.target.value),
                    placeholder: "输入词条名称（必填）",
                    onBlur: F,
                    className:
                      "w-full px-4 py-3 rounded-2xl bg-white/60 border border-white/80 focus:border-[#89b6d3] text-sm font-bold text-slate-800 placeholder-slate-400 transition-all shadow-sm outline-none",
                  }),
                ],
              }),
              (r === "keyword" || r === "html") &&
                e.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    e.jsxs("label", {
                      className:
                        "text-[11px] font-bold text-slate-500 uppercase ml-1 flex items-center gap-1",
                      children: [
                        e.jsx(Ae, { className: "w-3 h-3" }),
                        "触发关键词",
                      ],
                    }),
                    e.jsx("input", {
                      type: "text",
                      value: E,
                      onChange: (l) => H(l.target.value),
                      placeholder:
                        "逗号分隔（中英文均可），例如：魔法，原力，设定",
                      onBlur: F,
                      className:
                        "w-full px-4 py-2.5 rounded-xl bg-white/60 border border-white/80 focus:border-[#89b6d3] text-xs font-medium text-slate-700 placeholder-slate-400 transition-all shadow-sm outline-none",
                    }),
                  ],
                }),
              e.jsxs("div", {
                className: "space-y-1.5",
                children: [
                  e.jsx("label", {
                    className:
                      "text-[11px] font-bold text-slate-500 uppercase ml-1",
                    children: "正文",
                  }),
                  e.jsx("textarea", {
                    value: B,
                    onChange: (l) => T(l.target.value),
                    placeholder: "详细的内容描述（必填）...",
                    onBlur: F,
                    className:
                      "w-full h-48 px-4 py-3 rounded-2xl bg-white/60 border border-white/80 focus:border-[#89b6d3] text-[13px] leading-relaxed text-slate-700 placeholder-slate-400 transition-all shadow-sm outline-none resize-none",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    };
  return e.jsxs("div", {
    className:
      "echoes-page echoes-page-worldbook w-full h-full flex flex-col backdrop-blur-2xl relative overflow-hidden animate-in slide-in-from-right-8 duration-300",
    children: [
      e.jsx("div", {
        className:
          "echoes-page-header safe-top pb-4 px-4 bg-white/10 backdrop-blur-md border-b border-white/40 flex items-center sticky top-0 z-10 shrink-0",
        children: e.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            e.jsx("button", {
              onClick: () => ne("home"),
              className:
                "echoes-worldbook-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
              children: e.jsx(We, { className: "w-6 h-6" }),
            }),
            e.jsx("h1", {
              className: "text-2xl font-bold text-slate-800",
              children: "世界书",
            }),
          ],
        }),
      }),
      e.jsxs("div", {
        className: "flex-1 flex overflow-hidden",
        children: [
          e.jsx("div", {
            className:
              "w-[28%] min-w-[90px] max-w-[140px] border-r border-white/20 bg-white/20 flex flex-col h-full shrink-0 overflow-y-auto [&::-webkit-scrollbar]:hidden p-2 space-y-2",
            children: ie.map((t) => {
              const l = r === t.id;
              return (
                m.filter((s) => s.categoryId === t.id),
                e.jsxs(
                  "div",
                  {
                    className: "flex flex-col mb-1.5",
                    children: [
                      e.jsx("button", {
                        onClick: () => {
                          if (l) J(null), c(null);
                          else {
                            J(t.id), c(null);
                            const s = j.filter((o) => o.categoryId === t.id);
                            s.length > 0
                              ? (p(s[0].id), h(null))
                              : (p(null), h(t.id));
                          }
                        },
                        className: `w-full text-left outline-none px-4 py-3 rounded-xl transition-all duration-200 border-l-[3px] ${
                          l
                            ? "bg-[rgba(219,232,242,0.72)] text-[#5f7f9a] font-bold shadow-[0_4px_10px_rgba(132,167,197,0.10)] border-[#7f9cb5]"
                            : "text-slate-500 hover:bg-white/40 font-bold border-transparent"
                        }`,
                        children: e.jsx("div", {
                          className: "text-[13px] tracking-wide",
                          children: t.label,
                        }),
                      }),
                      l &&
                        e.jsxs("div", {
                          className:
                            "mt-2 flex flex-col gap-1.5 animate-in slide-in-from-top-2 duration-200",
                          children: [
                            e.jsxs("div", {
                              className:
                                "px-1 flex items-center justify-between mt-1 mb-1",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1",
                                  children: "子分类",
                                }),
                                e.jsx("button", {
                                  onClick: () => h(t.id),
                                  className:
                                    "w-6 h-6 rounded-lg bg-[rgba(244,249,253,0.96)] text-[#6f8faa] hover:bg-white flex items-center justify-center transition-colors shadow-[0_3px_8px_rgba(132,167,197,0.10)] border border-sky-100/80 outline-none",
                                  children: e.jsx(se, { className: "w-4 h-4" }),
                                }),
                              ],
                            }),
                            Q === t.id &&
                              e.jsx("div", {
                                className:
                                  "flex gap-1 mb-1 relative animate-in zoom-in-95 duration-200",
                                children: e.jsx("input", {
                                  autoFocus: !0,
                                  value: y,
                                  onChange: (s) => v(s.target.value),
                                  onKeyDown: (s) => {
                                    if (s.key === "Enter" && y.trim()) {
                                      const o = {
                                        id: `sub_${Date.now()}_${Math.random()
                                          .toString(36)
                                          .substr(2, 6)}`,
                                        categoryId: t.id,
                                        name: y.trim(),
                                      };
                                      k((i) => [...i, o]),
                                        v(""),
                                        h(null),
                                        p(o.id),
                                        c(null);
                                    } else
                                      s.key === "Escape" && (h(null), v(""));
                                  },
                                  onBlur: () => {
                                    const s = y.trim();
                                    if (!s) h(null), v("");
                                    else {
                                      const o = {
                                        id: `sub_${Date.now()}_${Math.random()
                                          .toString(36)
                                          .substr(2, 6)}`,
                                        categoryId: t.id,
                                        name: s,
                                      };
                                      k((i) => [...i, o]),
                                        v(""),
                                        h(null),
                                        p(o.id),
                                        c(null);
                                    }
                                  },
                                  placeholder: "分类名称",
                                  className:
                                    "w-full px-3 py-2 text-[12px] font-bold text-slate-800 bg-white border border-sky-100/80 rounded-xl outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] shadow-sm",
                                }),
                              }),
                            j
                              .filter((s) => s.categoryId === t.id)
                              .map((s) =>
                                e.jsx(
                                  "div",
                                  {
                                    className: "relative group",
                                    children: e.jsx("button", {
                                      onClick: () => {
                                        p(s.id), c(null);
                                      },
                                      className: `w-full text-left outline-none px-3 py-2.5 rounded-xl transition-all duration-200 border ${
                                        x === s.id
                                          ? "bg-white border-white/70 shadow-[0_4px_10px_rgba(148,163,184,0.10)] z-10 text-[#5f7f9a] font-bold"
                                          : "bg-white/40 border-white/40 hover:bg-white/80 text-slate-600 font-medium"
                                      }`,
                                      children: e.jsx("div", {
                                        className:
                                          "text-[12px] line-clamp-1 truncate",
                                        children: s.name,
                                      }),
                                    }),
                                  },
                                  s.id
                                )
                              ),
                            j.filter((s) => s.categoryId === t.id).length ===
                              0 &&
                              Q !== t.id &&
                              e.jsx("div", {
                                className:
                                  "text-center py-4 text-[10px] text-slate-400 italic font-medium bg-white/30 rounded-xl border border-dashed border-white/60",
                                children: "暂无子分类",
                              }),
                          ],
                        }),
                    ],
                  },
                  t.id
                )
              );
            }),
          }),
          e.jsx("div", {
            className:
              "flex-1 overflow-y-auto bg-transparent p-4 [&::-webkit-scrollbar]:hidden relative",
            children: x
              ? e.jsxs("div", {
                  className: "space-y-4 max-w-2xl mx-auto pb-32",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex items-center justify-between pb-4 mb-4 border-b border-white/20 gap-2",
                      children: [
                        e.jsx("h2", {
                          className:
                            "text-xl font-bold text-slate-800 flex-1 truncate",
                          children:
                            (ee = j.find((t) => t.id === x)) == null
                              ? void 0
                              : ee.name,
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-2 shrink-0",
                          children: [
                            e.jsxs("button", {
                              onClick: he,
                              className:
                                "echoes-worldbook-add-btn px-3 py-1.5 rounded-xl bg-[rgba(244,249,253,0.96)] text-[#6f8faa] hover:bg-white font-bold text-xs transition-all flex items-center gap-1.5 border border-sky-100/80 shadow-[0_4px_10px_rgba(148,163,184,0.10)] outline-none",
                              children: [
                                e.jsx(se, { className: "w-4 h-4" }),
                                "新增词条",
                              ],
                            }),
                            e.jsx("button", {
                              onClick: () => ge(x),
                              className:
                                "p-1.5 rounded-xl bg-[rgba(244,249,253,0.96)] text-[#6f8faa] hover:bg-white transition-all border border-sky-100/80 shadow-[0_4px_10px_rgba(148,163,184,0.10)] outline-none",
                              title: "编辑分类名",
                              children: e.jsx(Me, { className: "w-4 h-4" }),
                            }),
                            e.jsx("button", {
                              onClick: () => fe(x),
                              className:
                                "p-1.5 rounded-xl bg-red-50 text-red-400 hover:bg-red-100 hover:text-red-500 transition-all border border-red-50 shadow-sm outline-none",
                              title: "删除分类",
                              children: e.jsx(le, { className: "w-4 h-4" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    m
                      .filter((t) => t.subCategoryId === x)
                      .map((t) => {
                        const l = a === t.id,
                          s =
                            t.categoryId === "keyword" ||
                            t.categoryId === "html"
                              ? K(t)
                              : [];
                        return e.jsxs(
                          "div",
                          {
                            className:
                              "echoes-worldbook-entry-card bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 overflow-hidden shadow-sm transition-all duration-300",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "w-full px-5 py-4 flex items-center justify-between hover:bg-white/50 transition-colors group",
                                children: [
                                  e.jsxs("button", {
                                    onClick: () => {
                                      l ? c(null) : me(t.id);
                                    },
                                    className:
                                      "flex-1 flex items-center text-left outline-none",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "font-bold text-slate-800 line-clamp-1 pr-2 text-[15px]",
                                        children: t.title || "未命名词条",
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "flex gap-1.5 items-center mr-4",
                                        children: [
                                          r === "rule" &&
                                            t.isGlobalActive &&
                                            e.jsx("div", {
                                              className:
                                                "w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_4px_rgba(251,191,36,0.6)]",
                                              title: "全局生效",
                                            }),
                                          (r === "keyword" || r === "html") &&
                                            s.length > 0 &&
                                            e.jsxs("span", {
                                              className:
                                                "shrink-0 rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-bold text-[#6f8faa] ring-1 ring-sky-100",
                                              title: `已挂载：${s
                                                .map((o) => o.name)
                                                .join("、")}`,
                                              children: ["已挂载 ", s.length],
                                            }),
                                          (r === "patch" || r === "lore") &&
                                            xe(t.id) &&
                                            e.jsx("div", {
                                              className:
                                                "w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_4px_rgba(192,132,252,0.6)]",
                                              title: "已绑定角色",
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("button", {
                                    onClick: (o) => {
                                      o.stopPropagation(), be(t.id);
                                    },
                                    className:
                                      "echoes-worldbook-delete-btn p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg opacity-40 group-hover:opacity-100 transition-all outline-none",
                                    title: "删除",
                                    children: e.jsx(le, {
                                      className: "w-4 h-4",
                                    }),
                                  }),
                                ],
                              }),
                              l &&
                                e.jsx("div", {
                                  className:
                                    "p-5 border-t border-slate-200/50 bg-white/50 animate-in slide-in-from-top-2 duration-200",
                                  children: Z(),
                                }),
                            ],
                          },
                          t.id
                        );
                      }),
                    a === "new" &&
                      e.jsx("div", {
                        className:
                          "bg-white/60 backdrop-blur-md rounded-2xl border-2 border-[#d9e5ee]/85 overflow-hidden shadow-[0_8px_18px_rgba(148,163,184,0.08)] animate-in slide-in-from-bottom-4 duration-300",
                        children: e.jsx("div", {
                          className: "p-5",
                          children: Z(),
                        }),
                      }),
                    m.filter((t) => t.subCategoryId === x).length === 0 &&
                      a !== "new" &&
                      e.jsx("div", {
                        className:
                          "text-center py-20 text-slate-400 text-sm font-medium",
                        children: "该分类下暂无词条，点击右上角新建吧",
                      }),
                  ],
                })
              : e.jsxs("div", {
                  className:
                    "w-full flex flex-col items-center text-slate-400 pt-32",
                  children: [
                    e.jsx($e, { className: "w-16 h-16 opacity-20 mb-4" }),
                    e.jsx("p", {
                      className: "text-sm font-medium",
                      children: "请在左侧选择或新建一个子分类",
                    }),
                  ],
                }),
          }),
        ],
      }),
      de &&
        e.jsx(U, {
          onClose: () => {
            M(!1), D(null);
          },
          title: "删除词条",
          children: e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsxs("p", {
                className: "text-sm font-medium text-slate-700 leading-relaxed",
                children: [
                  "确定要删除词条 ",
                  e.jsxs("span", {
                    className: "font-bold text-red-500",
                    children: [
                      '"',
                      (te = m.find((t) => t.id === g)) == null
                        ? void 0
                        : te.title,
                      '"',
                    ],
                  }),
                  " 吗？ 此操作将同时移除该词条与所有对话和角色的绑定关系。",
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-3 pt-2",
                children: [
                  e.jsx("button", {
                    onClick: () => {
                      M(!1), D(null);
                    },
                    className:
                      "flex-1 py-2.5 rounded-xl bg-slate-100/80 text-slate-600 font-bold text-sm hover:bg-slate-200/80 transition-colors",
                    children: "取消",
                  }),
                  e.jsx("button", {
                    onClick: pe,
                    className:
                      "flex-1 py-2.5 rounded-xl bg-red-500/90 text-white font-bold text-sm hover:bg-red-500 transition-colors shadow-sm shadow-red-500/20",
                    children: "确认删除",
                  }),
                ],
              }),
            ],
          }),
        }),
      C &&
        e.jsx(U, {
          onClose: A,
          title: "编辑分类名",
          children: e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsxs("div", {
                className: "space-y-1.5",
                children: [
                  e.jsx("label", {
                    className:
                      "text-[11px] font-bold text-slate-500 uppercase ml-1",
                    children: "分类名称",
                  }),
                  e.jsx("input", {
                    autoFocus: !0,
                    type: "text",
                    value: I,
                    onChange: (t) => S(t.target.value),
                    onKeyDown: (t) => {
                      t.key === "Enter" && I.trim()
                        ? Y()
                        : t.key === "Escape" && A();
                    },
                    placeholder: "输入新的分类名称",
                    className:
                      "w-full px-4 py-3 rounded-2xl bg-white/70 border border-white/80 focus:border-[#89b6d3] text-sm font-bold text-slate-800 placeholder-slate-400 transition-all shadow-sm outline-none",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-3 pt-2",
                children: [
                  e.jsx("button", {
                    onClick: A,
                    className:
                      "flex-1 py-2.5 rounded-xl bg-slate-100/80 text-slate-600 font-bold text-sm hover:bg-slate-200/80 transition-colors",
                    children: "取消",
                  }),
                  e.jsx("button", {
                    onClick: Y,
                    disabled: !I.trim(),
                    className:
                      "echoes-worldbook-save-btn flex-1 py-2.5 rounded-xl bg-[#89b6d3] text-white font-bold text-sm hover:bg-[#7aa8c8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm shadow-[#89b6d3]/20",
                    children: "保存",
                  }),
                ],
              }),
            ],
          }),
        }),
      ve &&
        n &&
        e.jsx(U, {
          onClose: () => R(!1),
          title: "作用场景",
          children: e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsxs("p", {
                className:
                  "text-[11px] text-slate-500 font-medium leading-relaxed",
                children: [
                  "勾选这条最高准则要注入到哪些",
                  e.jsx("strong", { children: "后台生成" }),
                  "场景的 prompt。",
                  e.jsx("br", {}),
                  '主聊天、离线消息、朋友圈、论坛、倒影、侧写、浮生这类"人设相关"的正向场景只要开了总开关就强制注入，不在此列。',
                  e.jsx("br", {}),
                  "这里列出来的都是独立的小请求(总结、日程、商城、日记等),默认只勾总结 + 日程两项省 token。",
                ],
              }),
              ["memory", "world", "room"].map((t) => {
                const l = Ie.filter((o) => o.group === t),
                  s = (n == null ? void 0 : n.scopes) || [];
                return e.jsxs(
                  "div",
                  {
                    className: "space-y-2",
                    children: [
                      e.jsx("div", {
                        className:
                          "text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1",
                        children: Se[t],
                      }),
                      e.jsx("div", {
                        className: "grid grid-cols-2 gap-1.5",
                        children: l.map((o) => {
                          const i = s.includes(o.id);
                          return e.jsxs(
                            "button",
                            {
                              onClick: () => je(o.id),
                              className: `flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-bold transition-all outline-none text-left ${
                                i
                                  ? "bg-[#89b6d3] text-white border-[#89b6d3] shadow-sm shadow-[#89b6d3]/20"
                                  : "bg-white/60 text-slate-600 border-white hover:bg-white hover:border-slate-200"
                              }`,
                              children: [
                                e.jsx("div", {
                                  className: `w-4 h-4 rounded-md flex items-center justify-center shrink-0 ${
                                    i ? "bg-white/30" : "bg-slate-100"
                                  }`,
                                  children:
                                    i &&
                                    e.jsx(Ce, {
                                      className: "w-3 h-3 text-white",
                                      strokeWidth: 3,
                                    }),
                                }),
                                e.jsx("span", {
                                  className: "truncate",
                                  children: o.label,
                                }),
                              ],
                            },
                            o.id
                          );
                        }),
                      }),
                    ],
                  },
                  t
                );
              }),
              e.jsx("div", {
                className: "flex gap-3 pt-2",
                children: e.jsx("button", {
                  onClick: () => R(!1),
                  className:
                    "flex-1 py-2.5 rounded-xl bg-[#89b6d3] text-white font-bold text-sm hover:bg-[#7aa8c8] transition-colors shadow-sm shadow-[#89b6d3]/20",
                  children: "完成",
                }),
              }),
            ],
          }),
        }),
    ],
  });
}
export { Je as default };
