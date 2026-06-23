import { r as a, j as e } from "./index-C41onZB-.js";
import {
  u as de,
  b as ce,
  P as me,
  T as xe,
  a1 as ue,
  a2 as he,
} from "./App-CYgIjxWH.js";
import { I as be } from "./ImageUpload-Cp3tPAar.js";
import { A as pe } from "./AppearanceReferenceUpload-Bzzwgotg.js";
import { S as fe, a as ge } from "./buttonStyles-CgOYb1KY.js";
import { g as M } from "./bio-D6j723LQ.js";
import { C as B } from "./chevron-left-CTqCLzU8.js";
import "./camera-D3fQhOQq.js";
import "./triangle-alert-Bl8c-dcA.js";
import "./llmFetch-C_SjUca9.js";
const Ae = () => {
  const {
      users: n,
      setUsers: p,
      activeUserId: v,
      setActiveUserId: P,
      setCurrentApp: O,
      currentUser: ve,
      chats: _,
      setChats: F,
      setMessages: L,
      setCharacterStates: Y,
      userContacts: je,
      setUserContacts: K,
      setCharacterContacts: G,
      setSocialRelations: $,
      setMomentPosts: V,
      setEntityMapBindings: W,
      setDailyPlans: q,
      setKnowledge: H,
    } = de(),
    [c, j] = a.useState("list"),
    [l, w] = a.useState(null),
    [d, N] = a.useState(""),
    [x, k] = a.useState(""),
    [u, y] = a.useState(""),
    [h, C] = a.useState(""),
    [I, S] = a.useState(""),
    [T, U] = a.useState(),
    [R, A] = a.useState(""),
    [J, g] = a.useState(!1),
    [Q, z] = a.useState(!1),
    [X, Z] = a.useState(""),
    f = a.useRef(null);
  a.useEffect(() => {
    if (l && c === "edit") {
      const t = n.find((b) => b.id === l);
      t &&
        (N(t.name),
        k(t.gender),
        y(t.intro),
        C(t.background),
        S(t.imagePrompt || ""),
        U(t.imageReference),
        A(t.avatarUrl || ""));
    }
  }, [l, n, c]),
    a.useEffect(
      () => () => {
        f.current && clearTimeout(f.current);
      },
      []
    );
  const D = (t) => {
      Z(t),
        z(!0),
        f.current && clearTimeout(f.current),
        (f.current = setTimeout(() => z(!1), 2e3));
    },
    ee = (t) => {
      w(t), j("edit");
    },
    te = () => {
      w(null), N(""), k(""), y(""), C(""), S(""), U(void 0), A(""), j("add");
    },
    E = () => {
      j("list"), w(null), g(!1);
    },
    se = () => {
      if (!d.trim()) return;
      const t = {
        id: Math.random().toString(36).substring(7),
        name: d,
        gender: x,
        intro: u,
        background: h,
        imagePrompt: I.trim() || void 0,
        imageReference: T,
        avatarUrl: R,
      };
      p([...n, t]);
      const b = t.id;
      M({ name: d, gender: x, intro: u, background: h })
        .then((m) =>
          p((o) => o.map((s) => (s.id === b ? { ...s, bio: m } : s)))
        )
        .catch(() => {}),
        D("身份创建完成，观测者已就绪"),
        setTimeout(E, 500);
    },
    re = () => {
      if (!l) return;
      const t = n.find((o) => o.id === l),
        b =
          t &&
          (t.name !== d ||
            t.gender !== x ||
            t.intro !== u ||
            t.background !== h),
        m = n.map((o) =>
          o.id === l
            ? {
                ...o,
                name: d,
                gender: x,
                intro: u,
                background: h,
                imagePrompt: I.trim() || void 0,
                imageReference: T,
                avatarUrl: R,
              }
            : o
        );
      if ((p(m), b)) {
        const o = l;
        M({ name: d, gender: x, intro: u, background: h })
          .then((s) =>
            p((r) => r.map((i) => (i.id === o ? { ...i, bio: s } : i)))
          )
          .catch(() => {});
      }
      l === v && P(l), D("身份同步完成，观测者已就绪");
    },
    ae = () => {
      !l || n.length <= 1 || g(!0);
    },
    le = () => {
      if (!l) return;
      const t = l,
        m = _.filter((s) => !s.isGroup && s.memberIds.includes(t)).map(
          (s) => s.id
        );
      L((s) => s.filter((r) => r.senderId !== t && !m.includes(r.chatId))),
        Y((s) => s.filter((r) => r.userId !== t && !m.includes(r.chatId))),
        F((s) =>
          s
            .filter((r) => !m.includes(r.id))
            .map((r) => ({
              ...r,
              memberIds: r.memberIds.filter((i) => i !== t),
            }))
        );
      const o = n.filter((s) => s.id !== t);
      p(o),
        K((s) => {
          const r = {};
          return (
            Object.entries(s).forEach(([i, ie]) => {
              i !== t && (r[i] = ie.filter((ne) => ne !== t));
            }),
            r
          );
        }),
        G((s) => ue(s, t)),
        $((s) => he(s, "user", t)),
        V((s) =>
          s
            .filter((r) => r.authorId !== t)
            .map((r) => ({
              ...r,
              authorizedReaderIds: (r.authorizedReaderIds || []).filter(
                (i) => i !== t
              ),
            }))
        ),
        H((s) =>
          s.map((r) => ({
            ...r,
            perceivers: r.perceivers.filter((i) => i !== t),
          }))
        ),
        W((s) =>
          s.filter((r) => !(r.entityType === "user" && r.entityId === t))
        ),
        q((s) =>
          s.filter((r) => !(r.entityType === "user" && r.entityId === t))
        ),
        v === t && o.length > 0 && P(o[0].id),
        g(!1),
        E();
    },
    oe = l ? n.find((t) => t.id === l) : null;
  return e.jsxs("div", {
    className:
      "echoes-page echoes-page-user h-full flex flex-col backdrop-blur-2xl relative",
    children: [
      Q &&
        e.jsx("div", {
          className:
            "fixed top-24 inset-x-0 z-[999] flex justify-center pointer-events-none",
          children: e.jsx("div", {
            className:
              "px-6 py-3 bg-white/60 backdrop-blur-xl border border-white/60 shadow-2xl rounded-2xl animate-in fade-in slide-in-from-top-4",
            children: e.jsx("p", {
              className: "text-sm font-medium text-slate-800 whitespace-nowrap",
              children: X,
            }),
          }),
        }),
      c === "list"
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsx("div", {
                className:
                  "echoes-page-header safe-top pb-4 px-4 bg-white/10 backdrop-blur-md border-b border-white/40 flex items-center sticky top-0 z-10",
                children: e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx("button", {
                      onClick: () => O("home"),
                      className:
                        "echoes-user-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                      children: e.jsx(B, { className: "w-6 h-6" }),
                    }),
                    e.jsx("h1", {
                      className: "text-2xl font-bold text-slate-800",
                      children: "观测站",
                    }),
                  ],
                }),
              }),
              e.jsx("div", {
                className:
                  "flex-1 overflow-y-auto overscroll-y-contain px-6 pb-20 pt-6",
                style: { WebkitOverflowScrolling: "touch" },
                children: e.jsxs("div", {
                  className: "grid grid-cols-3 gap-y-8 gap-x-4",
                  children: [
                    n.map((t) =>
                      e.jsxs(
                        "div",
                        {
                          onClick: () => ee(t.id),
                          className:
                            "flex flex-col items-center gap-3 cursor-pointer group",
                          children: [
                            e.jsxs("div", {
                              className: "relative",
                              children: [
                                e.jsx(ce, {
                                  char: t,
                                  className:
                                    "w-20 h-20 text-3xl shadow-md group-hover:scale-105 transition-transform duration-300 border-2 border-white",
                                }),
                                t.id === v &&
                                  e.jsx("div", {
                                    className:
                                      "absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-emerald-400 border-2 border-white rounded-full",
                                  }),
                              ],
                            }),
                            e.jsx("span", {
                              className:
                                "text-sm font-medium text-slate-700 text-center",
                              children: t.name,
                            }),
                          ],
                        },
                        t.id
                      )
                    ),
                    e.jsxs("button", {
                      onClick: te,
                      className:
                        "echoes-user-add-btn flex flex-col items-center gap-3 cursor-pointer group",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-20 h-20 rounded-full bg-white/30 border-2 border-dashed border-white/60 flex items-center justify-center group-hover:border-sky-400 group-hover:bg-sky-50/50",
                          children: e.jsx(me, {
                            className:
                              "w-8 h-8 text-slate-400 group-hover:text-sky-500",
                          }),
                        }),
                        e.jsx("span", {
                          className:
                            "text-sm font-medium text-slate-400 group-hover:text-sky-500",
                          children: "新建",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        : e.jsxs(e.Fragment, {
            children: [
              e.jsxs("div", {
                className:
                  "safe-top pb-4 px-4 bg-white/10 backdrop-blur-md border-b border-white/40 flex items-center justify-between sticky top-0 z-10",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx("button", {
                        onClick: E,
                        className:
                          "echoes-user-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                        children: e.jsx(B, { className: "w-6 h-6" }),
                      }),
                      e.jsx("h1", {
                        className: "text-2xl font-bold text-slate-800",
                        children: c === "add" ? "新建身份" : "身份配置",
                      }),
                    ],
                  }),
                  c === "edit" &&
                    n.length > 1 &&
                    e.jsx("button", {
                      onClick: ae,
                      className:
                        "echoes-user-delete-btn text-red-500 hover:text-red-600 p-2 rounded-lg hover:bg-red-50",
                      children: e.jsx(xe, { className: "w-5 h-5" }),
                    }),
                ],
              }),
              e.jsx("div", {
                className: "flex-1 overflow-y-auto",
                children: e.jsxs("div", {
                  className: "p-6 space-y-6",
                  children: [
                    e.jsx("div", {
                      className: "flex justify-center",
                      children: e.jsx(be, {
                        avatarUrl: R,
                        onUpload: A,
                        fallbackChar: oe || {
                          id: "temp",
                          name: d || "新",
                          gender: "",
                          intro: "",
                          background: "",
                          avatarUrl: "",
                        },
                        hideLabel: !0,
                      }),
                    }),
                    e.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className:
                                "block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1",
                              children: "姓名",
                            }),
                            e.jsx("input", {
                              type: "text",
                              value: d,
                              onChange: (t) => N(t.target.value),
                              placeholder: "给观测者起个名字",
                              className:
                                "echoes-input-user-name echoes-critical-user-name-input w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className:
                                "block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1",
                              children: "性别",
                            }),
                            e.jsx("input", {
                              type: "text",
                              value: x,
                              onChange: (t) => k(t.target.value),
                              placeholder: "自由填写...",
                              className:
                                "echoes-input-user-gender w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className:
                                "block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1",
                              children: "个人介绍",
                            }),
                            e.jsx("textarea", {
                              value: u,
                              onChange: (t) => y(t.target.value),
                              className:
                                "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm h-24 resize-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                              placeholder: "介绍自己...",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className:
                                "block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1",
                              children: "身份背景",
                            }),
                            e.jsx("textarea", {
                              value: h,
                              onChange: (t) => C(t.target.value),
                              className:
                                "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm h-32 resize-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                              placeholder: "详细的背景设定...",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("label", {
                          className:
                            "block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1",
                          children: "我的外貌提示词",
                        }),
                        e.jsx("textarea", {
                          value: I,
                          onChange: (t) => S(t.target.value),
                          className:
                            "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm h-24 resize-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                          placeholder:
                            "例如：黑色短发，圆框眼镜，浅色外套，笑起来有酒窝",
                        }),
                        e.jsx("p", {
                          className:
                            "text-[10px] text-slate-400 mt-1 ml-1 leading-4",
                          children:
                            "发送虚拟图片时默认会拼接这里；如果是风景、食物、截图、物品等场景图，会自动跳过人物外貌。角色发图时写“对方照片 / 你的照片 / 合照”也会用到这里。",
                        }),
                      ],
                    }),
                    e.jsx(pe, { value: T, onChange: U }),
                    e.jsx("div", {
                      className: "pt-4 pb-10",
                      children: e.jsx("button", {
                        onClick: c === "add" ? se : re,
                        disabled: !d.trim(),
                        className: `echoes-user-save-btn w-full rounded-2xl py-4 font-bold ${fe} ${ge}`,
                        children: c === "add" ? "创建身份" : "更新身份信息",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
      J &&
        e.jsx("div", {
          className:
            "echoes-user-delete-dialog absolute inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4",
          children: e.jsxs("div", {
            className:
              "w-[80%] max-w-sm bg-white/80 backdrop-blur-xl border border-white/60 shadow-2xl rounded-2xl p-6",
            children: [
              e.jsx("h3", {
                className: "text-lg font-bold text-slate-800 mb-2 text-center",
                children: "确认断开连接？",
              }),
              e.jsx("p", {
                className:
                  "text-sm text-slate-600 mb-6 text-center leading-relaxed",
                children: "一旦切断连接，这里将再也无法感知到你的存在。",
              }),
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx("button", {
                    onClick: () => g(!1),
                    className:
                      "flex-1 py-2.5 bg-slate-100 text-slate-600 font-medium rounded-xl",
                    children: "我再想想",
                  }),
                  e.jsx("button", {
                    onClick: le,
                    className:
                      "flex-1 py-2.5 bg-red-500 text-white font-medium rounded-xl",
                    children: "确认断开",
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
};
export { Ae as UserApp, Ae as default };
