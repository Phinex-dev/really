import { r, j as t } from "./index-C41onZB-.js";
import {
  u as nt,
  X as H,
  P as lt,
  T as ye,
  V as we,
  W as ot,
} from "./App-CYgIjxWH.js";
import { c as it } from "./gemini-CeriFUnH.js";
import { S as J, a as dt } from "./buttonStyles-CgOYb1KY.js";
import { C as je } from "./chevron-left-CTqCLzU8.js";
import { C as ct } from "./chevron-right-C_PIujnZ.js";
import { C as xt } from "./cloud-CpRFALJq.js";
import { S as ht } from "./sparkles-CGxZnICD.js";
import "./giftFulfillment-DLU8FseI.js";
import "./initialShopItems-Bgx56oyu.js";
import "./worldBookScopes-B0JaUaci.js";
import "./llmFetch-C_SjUca9.js";
const pt = [
    {
      id: "quiet-town",
      label: "平静小镇",
      description: "日常安稳，偶有季节变化和小范围传闻。",
    },
    {
      id: "urban-daily",
      label: "都市日常",
      description: "普通城市节奏里夹杂轻微扰动与公共事件。",
    },
    {
      id: "undercurrent",
      label: "暗流涌动",
      description: "表面平静，但新闻、停摆、异动会更频繁。",
    },
    {
      id: "custom",
      label: "自定义",
      description: "由你直接描述这个世界本月该是什么气氛。",
    },
  ],
  ve = {
    weather: "天气",
    event: "事件",
    rumor: "传闻",
    season: "季节",
    other: "其他",
  },
  Ne = { weather: "☁️", event: "✨", rumor: "🗞️", season: "🍃", other: "📍" },
  Ce = { birthday: "🎂", anniversary: "🕯️" },
  mt = ["一", "二", "三", "四", "五", "六", "日"],
  ke = () => Math.random().toString(36).slice(2, 10),
  Ee = (n, x = "") => ({
    dateKey: n,
    mapId: x,
    eventType: "event",
    emoji: "",
    title: "",
  });
function Me(n) {
  return [...n].sort((x, u) => x.dateKey.localeCompare(u.dateKey));
}
function De(n) {
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}`;
}
function X(n, x) {
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(x).padStart(2, "0")}`;
}
function bt(n, x) {
  const u = x ?? n.getFullYear(),
    C = Math.min(n.getDate(), new Date(u, n.getMonth() + 1, 0).getDate());
  return new Date(
    u,
    n.getMonth(),
    C,
    n.getHours(),
    n.getMinutes(),
    n.getSeconds(),
    n.getMilliseconds()
  );
}
function ut(n) {
  const [x, u] = n.slice(0, 7).split("-").map(Number);
  return new Date(x, u - 1, 1);
}
const St = () => {
  const {
      setCurrentApp: n,
      worldToneSettings: x,
      setWorldToneSettings: u,
      worldCalendarEvents: C,
      setWorldCalendarEvents: A,
      userAnchors: I,
      setUserAnchors: F,
      worldMaps: y,
      places: Se,
      characters: W,
      currentUser: w,
      apiPresets: Te,
      activePresetId: Q,
      setLastUsage: Ke,
      worldBooks: _e,
      customWorldYear: Z,
    } = nt(),
    d = r.useMemo(() => bt(new Date(), Z), [Z]),
    ee = X(d, d.getDate()),
    [E, Ae] = r.useState(x.customPrompt || ""),
    [$, te] = r.useState(!1),
    [Ie, R] = r.useState(!1),
    [$e, M] = r.useState(!1),
    [Oe, O] = r.useState(() => d.getDate()),
    [g, P] = r.useState(() => new Date(d.getFullYear(), d.getMonth(), 1)),
    [Pe, D] = r.useState(!1),
    [Ye, S] = r.useState(!1),
    [f, se] = r.useState(null),
    [p, ae] = r.useState(null),
    [l, j] = r.useState(() => Ee(ee)),
    [T, B] = r.useState(() => ee),
    [v, z] = r.useState("birthday"),
    [re, U] = r.useState(`user:${w.id}`),
    [ne, V] = r.useState(""),
    [k, Y] = r.useState("all"),
    [G, q] = r.useState([]),
    Le = Q ? Te.find((e) => e.id === Q) : void 0,
    m = De(g),
    Fe = (g.getDay() + 6) % 7,
    le = new Date(g.getFullYear(), g.getMonth() + 1, 0).getDate(),
    oe = Math.min(Oe, le),
    N = X(g, oe),
    ie = m === De(d),
    We = `${g.getFullYear()}年${g.getMonth() + 1}月`;
  r.useEffect(() => {
    P((e) =>
      e.getMonth() === d.getMonth()
        ? new Date(d.getFullYear(), d.getMonth(), 1)
        : e
    ),
      O((e) =>
        Math.min(e, new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate())
      );
  }, [d]);
  const de = r.useMemo(() => Me(C.filter((e) => e.monthKey === m)), [m, C]),
    ce = r.useMemo(
      () =>
        de.reduce(
          (e, s) => (
            e[s.dateKey] || (e[s.dateKey] = []), e[s.dateKey].push(s), e
          ),
          {}
        ),
      [de]
    ),
    xe = r.useMemo(() => Me(I.filter((e) => e.dateKey.startsWith(m))), [m, I]),
    he = r.useMemo(
      () =>
        xe.reduce(
          (e, s) => (
            e[s.dateKey] || (e[s.dateKey] = []), e[s.dateKey].push(s), e
          ),
          {}
        ),
      [xe]
    ),
    pe = ce[N] || [],
    me = he[N] || [],
    be = pe.length + me.length,
    Re = Array.from({ length: 42 }, (e, s) => {
      const o = s - Fe + 1;
      return o > 0 && o <= le ? o : null;
    }),
    Be = (e) => {
      u((s) => ({
        ...s,
        presetId: e,
        customPrompt: e === "custom" ? E.trim() : s.customPrompt,
        updatedAt: Date.now(),
      }));
    },
    ze = () => {
      u((e) => ({
        ...e,
        presetId: "custom",
        customPrompt: E.trim(),
        updatedAt: Date.now(),
      })),
        R(!1);
    },
    Ue = async () => {
      if ($) return;
      if (y.length === 0) {
        window.alert("当前没有可用地图，无法生成世界日历。");
        return;
      }
      if (
        !(
          C.some((s) => s.monthKey === m) &&
          !window.confirm(
            "重新生成本月世界日历会覆盖本月当前所有世界事件，包括你手动编辑过的内容，但不会自动改动已经生成好的角色日程。确定继续吗？"
          )
        )
      ) {
        te(!0);
        try {
          const s = y.map((a) => ({
              mapId: a.id,
              mapName: a.name,
              mapSummary: a.summary,
              placeNames: Se.filter((c) => c.mapId === a.id).map((c) => c.name),
            })),
            o = Array.from(
              new Set(
                I.filter((a) => a.dateKey.startsWith(m)).map((a) => a.dateKey)
              )
            ).sort(),
            { events: i, usage: h } = await it({
              monthKey: m,
              toneSettings:
                x.presetId === "custom" ? { ...x, customPrompt: E.trim() } : x,
              mapSummaries: s,
              occupiedAnchorDates: o,
              preset: Le,
              worldBooks: _e,
            });
          A((a) => [...a.filter((c) => c.monthKey !== m), ...i]),
            Ke(h),
            window.alert(
              i.length > 0
                ? `本月世界日历已生成，共 ${i.length} 条事件。`
                : "本月世界日历已生成，本次没有产出可用事件。"
            );
        } catch (s) {
          console.error("Failed to generate monthly world calendar:", s),
            window.alert("本月世界日历生成失败，请检查当前模型配置后重试。");
        } finally {
          te(!1);
        }
      }
    },
    Ve = (e) => {
      q((s) => (s.includes(e) ? s.filter((o) => o !== e) : [...s, e]));
    },
    Ge = () => {
      var a, c;
      const e = ne.trim().slice(0, 20),
        [s, o] = re.split(":");
      if (!T) {
        window.alert("请先选择日期。");
        return;
      }
      if (v === "anniversary" && !e) {
        window.alert("纪念日需要填写 20 字以内短描述。");
        return;
      }
      if (k === "selected" && G.length === 0) {
        window.alert("手动可见时，至少勾选一个角色。");
        return;
      }
      const i = Date.now(),
        h = {
          id: p || `anchor-${ke()}`,
          dateKey: T,
          anchorType: v,
          entityType: v === "birthday" ? s : void 0,
          entityId: v === "birthday" ? o : void 0,
          shortLabel:
            v === "birthday"
              ? s === "user"
                ? w.name
                : ((a = W.find((b) => b.id === o)) == null ? void 0 : a.name) ||
                  ""
              : e,
          visibilityMode: k,
          visibleToCharacterIds: k === "all" ? [] : G,
          createdAt:
            (p &&
              ((c = I.find((b) => b.id === p)) == null
                ? void 0
                : c.createdAt)) ||
            i,
          updatedAt: i,
        };
      F(p ? (b) => b.map((L) => (L.id === p ? h : L)) : (b) => [...b, h]),
        ge(T),
        _(T);
    },
    qe = (e) => {
      window.confirm("确定删除这个用户锚点吗？") &&
        (F((o) => o.filter((i) => i.id !== e)), p === e && _());
    },
    He = (e) =>
      e.anchorType === "birthday"
        ? `${e.shortLabel}生日`
        : `纪念日：${e.shortLabel}`,
    Je = (e) =>
      e.visibilityMode === "all"
        ? "全部角色可见"
        : `${e.visibleToCharacterIds.length} 个角色可见`,
    K = (e = N) => {
      var s;
      D(!1), se(null), j(Ee(e, ((s = y[0]) == null ? void 0 : s.id) || ""));
    },
    _ = (e = N) => {
      S(!1),
        ae(null),
        B(e),
        z("birthday"),
        U(`user:${w.id}`),
        V(""),
        Y("all"),
        q([]);
    },
    Xe = () => {
      M((e) => !e);
    },
    ue = (e) => {
      P((s) => new Date(s.getFullYear(), s.getMonth() + e, 1));
    },
    Qe = () => {
      const e = new Date(d.getFullYear(), d.getMonth(), 1);
      P(e), O(d.getDate());
    },
    ge = (e) => {
      P(ut(e)), O(Number(e.slice(-2)));
    },
    Ze = () => {
      if (y.length === 0) {
        window.alert("当前没有可用地图，无法新增世界事件。");
        return;
      }
      M(!1), S(!1), K(N), D(!0);
    },
    et = () => {
      M(!1), D(!1), _(N), S(!0);
    },
    tt = (e) => {
      M(!1),
        D(!1),
        S(!0),
        ae(e.id),
        B(e.dateKey),
        z(e.anchorType),
        U(
          e.anchorType === "birthday"
            ? `${e.entityType || "user"}:${e.entityId || w.id}`
            : `user:${w.id}`
        ),
        V(e.anchorType === "anniversary" ? e.shortLabel : ""),
        Y(e.visibilityMode),
        q(e.visibilityMode === "all" ? [] : e.visibleToCharacterIds);
    },
    st = (e) => {
      M(!1),
        S(!1),
        D(!0),
        se(e.id),
        j({
          dateKey: e.dateKey,
          mapId: e.mapId,
          eventType: e.eventType,
          emoji: e.emoji || "",
          title: e.title,
        });
    },
    at = () => {
      const e = l.title.trim(),
        s = l.emoji.trim();
      if (!l.dateKey) {
        window.alert("请先选择事件日期。");
        return;
      }
      if (!l.mapId) {
        window.alert("请先选择事件所属地图。");
        return;
      }
      if (!e) {
        window.alert("事件标题不能为空。");
        return;
      }
      if (
        C.filter(
          (a) => a.id !== f && a.dateKey === l.dateKey && a.mapId === l.mapId
        ).length >= 2
      ) {
        window.alert("同一地图同一天最多保留 2 条世界事件。");
        return;
      }
      const i = Date.now(),
        h = l.dateKey.slice(0, 7);
      A(
        f
          ? (a) =>
              a.map((c) =>
                c.id === f
                  ? {
                      ...c,
                      dateKey: l.dateKey,
                      monthKey: h,
                      mapId: l.mapId,
                      eventType: l.eventType,
                      emoji: s || void 0,
                      title: e,
                      updatedAt: i,
                    }
                  : c
              )
          : (a) => [
              ...a,
              {
                id: `world-event-${ke()}`,
                monthKey: h,
                dateKey: l.dateKey,
                mapId: l.mapId,
                eventType: l.eventType,
                emoji: s || void 0,
                title: e,
                createdAt: i,
                updatedAt: i,
              },
            ]
      ),
        ge(l.dateKey),
        K(l.dateKey);
    },
    rt = (e) => {
      window.confirm("确定删除这条世界事件吗？") &&
        (A((o) => o.filter((i) => i.id !== e)), f === e && K());
    };
  return t.jsxs("div", {
    className:
      "echoes-page echoes-page-world-calendar w-full h-full flex flex-col backdrop-blur-2xl relative",
    children: [
      t.jsxs("div", {
        className:
          "echoes-page-header safe-top pb-4 px-4 border-b border-white/40 flex items-center justify-between sticky top-0 z-10 bg-white/20 backdrop-blur-md",
        children: [
          t.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              t.jsx("button", {
                onClick: () => n("home"),
                className:
                  "echoes-worldcalendar-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                children: t.jsx(je, { className: "w-6 h-6" }),
              }),
              t.jsx("h1", {
                className: "text-2xl font-bold text-slate-800",
                children: "世界日历",
              }),
            ],
          }),
          t.jsx("div", {
            className:
              "rounded-full bg-white/75 border border-white/80 px-3 py-1 text-[11px] font-bold tracking-[0.18em] uppercase text-slate-500",
            children: m,
          }),
        ],
      }),
      t.jsxs("div", {
        className: "flex-1 overflow-y-auto px-4 pb-24 pt-4 space-y-4",
        children: [
          t.jsxs("section", {
            className:
              "bg-white/55 border border-white/80 rounded-[30px] p-4 shadow-[0_8px_18px_rgba(148,163,184,0.08)] backdrop-blur-2xl space-y-4 relative",
            children: [
              t.jsxs("div", {
                className: "flex items-center justify-between gap-3 flex-wrap",
                children: [
                  t.jsxs("div", {
                    className: "flex items-center gap-2 shrink-0 flex-wrap",
                    children: [
                      t.jsx("button", {
                        type: "button",
                        onClick: () => ue(-1),
                        className:
                          "w-8 h-8 rounded-full border border-white/80 bg-white/75 text-slate-500 hover:bg-white/90 transition-colors flex items-center justify-center",
                        title: "上个月",
                        children: t.jsx(je, { className: "w-4 h-4" }),
                      }),
                      t.jsx("div", {
                        className:
                          "rounded-full border border-white/80 bg-white/80 px-3 py-1.5 text-sm font-bold text-slate-700 min-w-[120px] text-center",
                        children: We,
                      }),
                      t.jsx("button", {
                        type: "button",
                        onClick: () => ue(1),
                        className:
                          "w-8 h-8 rounded-full border border-white/80 bg-white/75 text-slate-500 hover:bg-white/90 transition-colors flex items-center justify-center",
                        title: "下个月",
                        children: t.jsx(ct, { className: "w-4 h-4" }),
                      }),
                      !ie &&
                        t.jsx("button", {
                          type: "button",
                          onClick: Qe,
                          className:
                            "h-8 rounded-full border border-white/80 bg-white/75 px-3 text-xs font-bold text-slate-500 hover:bg-white/90 transition-colors",
                          children: "回到本月",
                        }),
                    ],
                  }),
                  t.jsxs("div", {
                    className: "flex items-center gap-2 shrink-0",
                    children: [
                      t.jsx("button", {
                        type: "button",
                        onClick: () => R((e) => !e),
                        className:
                          "w-8 h-8 rounded-[12px] border border-white/80 bg-white/70 text-[#6f8faa] shadow-[0_4px_10px_rgba(148,163,184,0.08)] flex items-center justify-center hover:bg-white/85 transition-colors",
                        title: "世界调性",
                        children: t.jsx(xt, { className: "w-3.5 h-3.5" }),
                      }),
                      t.jsx("button", {
                        type: "button",
                        onClick: Ue,
                        disabled: $,
                        className:
                          "w-8 h-8 rounded-[12px] border border-white/80 bg-white/70 text-[#6f8faa] shadow-[0_4px_10px_rgba(148,163,184,0.08)] flex items-center justify-center hover:bg-white/85 transition-colors disabled:opacity-50",
                        title: $ ? "正在生成本月世界日历" : "生成本月世界日历",
                        children: t.jsx(ht, {
                          className: `w-3.5 h-3.5 ${$ ? "animate-spin" : ""}`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Ie &&
                t.jsxs("div", {
                  className:
                    "rounded-[24px] border border-white/85 bg-[rgba(248,251,253,0.96)] shadow-[0_18px_40px_rgba(148,163,184,0.16)] backdrop-blur-2xl p-4 space-y-4",
                  children: [
                    t.jsxs("div", {
                      className: "flex items-start justify-between gap-3",
                      children: [
                        t.jsxs("div", {
                          children: [
                            t.jsx("p", {
                              className:
                                "text-xs font-bold uppercase tracking-[0.22em] text-slate-400",
                              children: "世界调性",
                            }),
                            t.jsx("h3", {
                              className:
                                "text-base font-bold text-slate-800 mt-1",
                              children: "决定这个月世界会下什么雨",
                            }),
                          ],
                        }),
                        t.jsx("button", {
                          type: "button",
                          onClick: () => R(!1),
                          className:
                            "w-8 h-8 rounded-full border border-white/80 bg-white/75 text-slate-400 hover:text-slate-600 flex items-center justify-center transition-colors",
                          title: "关闭世界调性",
                          children: t.jsx(H, { className: "w-4 h-4" }),
                        }),
                      ],
                    }),
                    t.jsx("div", {
                      className: "grid grid-cols-2 gap-2",
                      children: pt.map((e) => {
                        const s = x.presetId === e.id;
                        return t.jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () => Be(e.id),
                            className: `rounded-[20px] border px-4 py-3 text-left transition-all ${
                              s
                                ? "border-[#bcd4e4] bg-[rgba(232,242,249,0.95)] shadow-[0_6px_16px_rgba(132,167,197,0.12)]"
                                : "border-white/80 bg-white/70 hover:bg-white/85"
                            }`,
                            children: [
                              t.jsx("div", {
                                className: "text-sm font-bold text-slate-800",
                                children: e.label,
                              }),
                              t.jsx("div", {
                                className:
                                  "mt-1 text-xs leading-5 text-slate-500",
                                children: e.description,
                              }),
                            ],
                          },
                          e.id
                        );
                      }),
                    }),
                    t.jsx("textarea", {
                      value: E,
                      onChange: (e) => Ae(e.target.value),
                      placeholder:
                        "如果你选了自定义，在这里写这个月世界的整体气压。",
                      className:
                        "w-full h-24 resize-none rounded-[20px] border border-white/80 bg-white/75 px-4 py-3 text-sm text-slate-700 outline-none",
                    }),
                    t.jsx("button", {
                      type: "button",
                      onClick: ze,
                      disabled: !E.trim(),
                      className: `w-full rounded-2xl py-3 text-sm font-bold ${J} ${dt}`,
                      children: "保存为当前自定义调性",
                    }),
                  ],
                }),
              t.jsxs("div", {
                className:
                  "rounded-[28px] border border-white/80 bg-white/65 px-4 py-4 shadow-[0_6px_14px_rgba(148,163,184,0.06)]",
                children: [
                  t.jsx("div", {
                    className: "grid grid-cols-7 gap-2 text-[11px]",
                    children: mt.map((e) =>
                      t.jsx(
                        "div",
                        {
                          className: "text-center font-bold text-slate-400",
                          children: e,
                        },
                        e
                      )
                    ),
                  }),
                  t.jsx("div", {
                    className: "mt-3 grid grid-cols-7 gap-2",
                    children: Re.map((e, s) => {
                      var fe;
                      const o = ie && e === d.getDate(),
                        i = e === oe,
                        h = e ? X(g, e) : "",
                        a = h ? ce[h] || [] : [],
                        c = h ? he[h] || [] : [],
                        b =
                          ((fe = a[0]) == null ? void 0 : fe.emoji) ||
                          (a[0] ? Ne[a[0].eventType] : "") ||
                          (c[0] ? Ce[c[0].anchorType] : ""),
                        L = c.length > 0;
                      return t.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => e && O(e),
                          disabled: !e,
                          className: `aspect-square rounded-[18px] border flex flex-col items-center justify-center transition-all ${
                            e
                              ? "border-white/80 bg-white/72"
                              : "border-transparent bg-transparent"
                          } ${
                            o
                              ? "shadow-[0_6px_12px_rgba(132,167,197,0.08)]"
                              : ""
                          } ${
                            i
                              ? "ring-2 ring-[#bcd4e4] border-[#c8dbe9] bg-[rgba(236,244,250,0.98)]"
                              : ""
                          }`,
                          children: e
                            ? t.jsxs("div", {
                                className:
                                  "relative flex h-full w-full items-center justify-center",
                                children: [
                                  b
                                    ? t.jsx("span", {
                                        className: "text-[15px] leading-none",
                                        children: b,
                                      })
                                    : t.jsx("span", {
                                        className:
                                          "text-sm font-semibold text-slate-500",
                                        children: e,
                                      }),
                                  L &&
                                    t.jsx("span", {
                                      className:
                                        "absolute bottom-1.5 right-1.5 h-2 w-2 rounded-full bg-[#e4b8be] ring-2 ring-white/90",
                                    }),
                                ],
                              })
                            : null,
                        },
                        `${e ?? "empty"}-${s}`
                      );
                    }),
                  }),
                ],
              }),
              t.jsxs("div", {
                className:
                  "rounded-[24px] border border-white/80 bg-white/70 px-4 py-4 shadow-[0_6px_14px_rgba(148,163,184,0.06)] space-y-3",
                children: [
                  t.jsxs("div", {
                    className: "flex items-center justify-between gap-3",
                    children: [
                      t.jsx("h3", {
                        className:
                          "text-base font-bold leading-tight text-slate-800 sm:text-lg",
                        children: N,
                      }),
                      t.jsxs("div", {
                        className: "flex items-center gap-2 relative",
                        children: [
                          t.jsx("button", {
                            type: "button",
                            onClick: Xe,
                            className:
                              "w-9 h-9 rounded-full border border-white/80 bg-white/75 text-[#6f8faa] hover:bg-white/90 transition-colors flex items-center justify-center",
                            title: "新增内容",
                            children: t.jsx(lt, { className: "w-4 h-4" }),
                          }),
                          $e &&
                            t.jsxs("div", {
                              className:
                                "absolute right-0 top-11 z-10 w-44 rounded-[18px] border border-white/85 bg-[rgba(248,251,253,0.98)] p-2 shadow-[0_14px_30px_rgba(148,163,184,0.16)] backdrop-blur-xl space-y-2",
                              children: [
                                t.jsx("button", {
                                  type: "button",
                                  onClick: Ze,
                                  className:
                                    "w-full rounded-[14px] border border-white/80 bg-white/80 px-3 py-2 text-left text-sm font-bold text-slate-700 hover:bg-white transition-colors",
                                  children: "世界事件",
                                }),
                                t.jsx("button", {
                                  type: "button",
                                  onClick: et,
                                  className:
                                    "w-full rounded-[14px] border border-white/80 bg-white/80 px-3 py-2 text-left text-sm font-bold text-slate-700 hover:bg-white transition-colors",
                                  children: "用户锚点",
                                }),
                              ],
                            }),
                          t.jsxs("div", {
                            className:
                              "rounded-full border border-white/80 bg-white/75 px-3 py-1 text-[11px] font-bold tracking-[0.16em] uppercase text-slate-500",
                            children: [be, " 条内容"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Pe &&
                    t.jsxs("div", {
                      className:
                        "rounded-[20px] border border-white/80 bg-[rgba(243,248,252,0.92)] px-4 py-4 space-y-3",
                      children: [
                        t.jsxs("div", {
                          className: "flex items-center justify-between gap-3",
                          children: [
                            t.jsxs("div", {
                              children: [
                                t.jsx("p", {
                                  className:
                                    "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400",
                                  children: "单条世界事件",
                                }),
                                t.jsx("h4", {
                                  className:
                                    "mt-1 text-sm font-bold text-slate-800",
                                  children: f ? "编辑事件" : "新增事件",
                                }),
                              ],
                            }),
                            t.jsx("button", {
                              type: "button",
                              onClick: () => K(),
                              className:
                                "w-8 h-8 rounded-full border border-white/80 bg-white/80 text-slate-400 hover:text-slate-600 flex items-center justify-center transition-colors",
                              title: "关闭事件编辑器",
                              children: t.jsx(H, { className: "w-4 h-4" }),
                            }),
                          ],
                        }),
                        t.jsxs("div", {
                          className: "grid grid-cols-2 gap-3",
                          children: [
                            t.jsxs("label", {
                              className: "space-y-1",
                              children: [
                                t.jsx("span", {
                                  className:
                                    "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400",
                                  children: "日期",
                                }),
                                t.jsx("input", {
                                  type: "date",
                                  value: l.dateKey,
                                  onChange: (e) =>
                                    j((s) => ({
                                      ...s,
                                      dateKey: e.target.value,
                                    })),
                                  className:
                                    "w-full rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-sm text-slate-700 outline-none",
                                }),
                              ],
                            }),
                            t.jsxs("label", {
                              className: "space-y-1",
                              children: [
                                t.jsx("span", {
                                  className:
                                    "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400",
                                  children: "地图",
                                }),
                                t.jsx("select", {
                                  value: l.mapId,
                                  onChange: (e) =>
                                    j((s) => ({ ...s, mapId: e.target.value })),
                                  className:
                                    "w-full rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-sm text-slate-700 outline-none",
                                  children: y.map((e) =>
                                    t.jsx(
                                      "option",
                                      { value: e.id, children: e.name },
                                      e.id
                                    )
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        t.jsxs("div", {
                          className: "grid grid-cols-[1fr_110px] gap-3",
                          children: [
                            t.jsxs("label", {
                              className: "space-y-1",
                              children: [
                                t.jsx("span", {
                                  className:
                                    "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400",
                                  children: "标题",
                                }),
                                t.jsx("input", {
                                  value: l.title,
                                  onChange: (e) =>
                                    j((s) => ({
                                      ...s,
                                      title: e.target.value.slice(0, 40),
                                    })),
                                  placeholder: "这一天发生了什么",
                                  className:
                                    "w-full rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-sm text-slate-700 outline-none",
                                }),
                              ],
                            }),
                            t.jsxs("label", {
                              className: "space-y-1",
                              children: [
                                t.jsx("span", {
                                  className:
                                    "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400",
                                  children: "Emoji",
                                }),
                                t.jsx("input", {
                                  value: l.emoji,
                                  onChange: (e) =>
                                    j((s) => ({
                                      ...s,
                                      emoji: e.target.value.slice(0, 2),
                                    })),
                                  placeholder: "可选",
                                  className:
                                    "w-full rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-sm text-slate-700 outline-none",
                                }),
                              ],
                            }),
                          ],
                        }),
                        t.jsxs("label", {
                          className: "space-y-1 block",
                          children: [
                            t.jsx("span", {
                              className:
                                "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400",
                              children: "类型",
                            }),
                            t.jsx("select", {
                              value: l.eventType,
                              onChange: (e) =>
                                j((s) => ({ ...s, eventType: e.target.value })),
                              className:
                                "w-full rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-sm text-slate-700 outline-none",
                              children: Object.entries(ve).map(([e, s]) =>
                                t.jsx("option", { value: e, children: s }, e)
                              ),
                            }),
                          ],
                        }),
                        t.jsxs("div", {
                          className: "flex items-center justify-between gap-2",
                          children: [
                            t.jsx("div", {
                              children: f
                                ? t.jsx("button", {
                                    type: "button",
                                    onClick: () => rt(f),
                                    className:
                                      "w-10 h-10 rounded-full border border-[#f0d6dc] bg-[rgba(255,245,247,0.92)] text-[#b06c7b] hover:bg-[rgba(255,240,243,0.98)] transition-colors flex items-center justify-center",
                                    title: "删除事件",
                                    children: t.jsx(ye, {
                                      className: "w-4 h-4",
                                    }),
                                  })
                                : null,
                            }),
                            t.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                t.jsx("button", {
                                  type: "button",
                                  onClick: () => K(),
                                  className:
                                    "h-10 rounded-full border border-white/80 bg-white/75 px-4 text-sm font-bold text-slate-500 hover:bg-white/90 transition-colors",
                                  children: "取消",
                                }),
                                t.jsx("button", {
                                  type: "button",
                                  onClick: at,
                                  className: `h-10 rounded-full px-4 text-sm font-bold ${J}`,
                                  children: f ? "保存修改" : "添加事件",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  Ye &&
                    t.jsxs("div", {
                      className:
                        "rounded-[20px] border border-white/80 bg-[rgba(252,245,246,0.9)] px-4 py-4 space-y-3",
                      children: [
                        t.jsxs("div", {
                          className: "flex items-center justify-between gap-3",
                          children: [
                            t.jsxs("div", {
                              children: [
                                t.jsx("p", {
                                  className:
                                    "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400",
                                  children: "用户锚点",
                                }),
                                t.jsx("h4", {
                                  className:
                                    "mt-1 text-sm font-bold text-slate-800",
                                  children: p ? "编辑锚点" : "新增锚点",
                                }),
                              ],
                            }),
                            t.jsx("button", {
                              type: "button",
                              onClick: () => _(),
                              className:
                                "w-8 h-8 rounded-full border border-white/80 bg-white/80 text-slate-400 hover:text-slate-600 flex items-center justify-center transition-colors",
                              title: "关闭锚点编辑器",
                              children: t.jsx(H, { className: "w-4 h-4" }),
                            }),
                          ],
                        }),
                        t.jsxs("div", {
                          className: "grid grid-cols-2 gap-3",
                          children: [
                            t.jsxs("label", {
                              className: "space-y-1",
                              children: [
                                t.jsx("span", {
                                  className:
                                    "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400",
                                  children: "日期",
                                }),
                                t.jsx("input", {
                                  type: "date",
                                  value: T,
                                  onChange: (e) => B(e.target.value),
                                  className:
                                    "w-full rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-sm text-slate-700 outline-none",
                                }),
                              ],
                            }),
                            t.jsxs("label", {
                              className: "space-y-1",
                              children: [
                                t.jsx("span", {
                                  className:
                                    "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400",
                                  children: "类型",
                                }),
                                t.jsxs("select", {
                                  value: v,
                                  onChange: (e) => z(e.target.value),
                                  className:
                                    "w-full rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-sm text-slate-700 outline-none",
                                  children: [
                                    t.jsx("option", {
                                      value: "birthday",
                                      children: "生日",
                                    }),
                                    t.jsx("option", {
                                      value: "anniversary",
                                      children: "纪念日",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        v === "birthday"
                          ? t.jsxs("label", {
                              className: "space-y-1 block",
                              children: [
                                t.jsx("span", {
                                  className:
                                    "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400",
                                  children: "对象",
                                }),
                                t.jsxs("select", {
                                  value: re,
                                  onChange: (e) => U(e.target.value),
                                  className:
                                    "w-full rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-sm text-slate-700 outline-none",
                                  children: [
                                    t.jsxs("option", {
                                      value: `user:${w.id}`,
                                      children: [w.name, "（你自己）"],
                                    }),
                                    W.map((e) =>
                                      t.jsx(
                                        "option",
                                        {
                                          value: `character:${e.id}`,
                                          children: e.name,
                                        },
                                        e.id
                                      )
                                    ),
                                  ],
                                }),
                              ],
                            })
                          : t.jsxs("label", {
                              className: "space-y-1 block",
                              children: [
                                t.jsx("span", {
                                  className:
                                    "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400",
                                  children: "短描述",
                                }),
                                t.jsx("input", {
                                  value: ne,
                                  onChange: (e) =>
                                    V(e.target.value.slice(0, 20)),
                                  placeholder: "20 字以内",
                                  className:
                                    "w-full rounded-2xl border border-white/80 bg-white/75 px-4 py-3 text-sm text-slate-700 outline-none",
                                }),
                              ],
                            }),
                        t.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            t.jsx("div", {
                              className:
                                "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400",
                              children: "谁能看到",
                            }),
                            t.jsxs("div", {
                              className: "flex gap-2",
                              children: [
                                t.jsx("button", {
                                  type: "button",
                                  onClick: () => Y("all"),
                                  className: `px-4 py-2 rounded-full text-xs font-bold border ${
                                    k === "all"
                                      ? "bg-[rgba(232,242,249,0.95)] border-[#bcd4e4] text-[#6f8faa]"
                                      : "bg-white/75 border-white/80 text-slate-500"
                                  }`,
                                  children: "全部角色",
                                }),
                                t.jsx("button", {
                                  type: "button",
                                  onClick: () => Y("selected"),
                                  className: `px-4 py-2 rounded-full text-xs font-bold border ${
                                    k === "selected"
                                      ? "bg-[rgba(232,242,249,0.95)] border-[#bcd4e4] text-[#6f8faa]"
                                      : "bg-white/75 border-white/80 text-slate-500"
                                  }`,
                                  children: "手动勾选",
                                }),
                              ],
                            }),
                          ],
                        }),
                        k === "selected" &&
                          t.jsx("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: W.map((e) => {
                              const s = G.includes(e.id);
                              return t.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => Ve(e.id),
                                  className: `rounded-[18px] border px-3 py-2 text-sm text-left ${
                                    s
                                      ? "border-[#bcd4e4] bg-[rgba(232,242,249,0.95)] text-[#6f8faa]"
                                      : "border-white/80 bg-white/75 text-slate-600"
                                  }`,
                                  children: e.name,
                                },
                                e.id
                              );
                            }),
                          }),
                        t.jsxs("div", {
                          className: "flex items-center justify-between gap-2",
                          children: [
                            t.jsx("div", {
                              children: p
                                ? t.jsx("button", {
                                    type: "button",
                                    onClick: () => qe(p),
                                    className:
                                      "w-10 h-10 rounded-full border border-[#f0d6dc] bg-[rgba(255,245,247,0.92)] text-[#b06c7b] hover:bg-[rgba(255,240,243,0.98)] transition-colors flex items-center justify-center",
                                    title: "删除锚点",
                                    children: t.jsx(ye, {
                                      className: "w-4 h-4",
                                    }),
                                  })
                                : null,
                            }),
                            t.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                t.jsx("button", {
                                  type: "button",
                                  onClick: () => _(),
                                  className:
                                    "h-10 rounded-full border border-white/80 bg-white/75 px-4 text-sm font-bold text-slate-500 hover:bg-white/90 transition-colors",
                                  children: "取消",
                                }),
                                t.jsx("button", {
                                  type: "button",
                                  onClick: Ge,
                                  className: `h-10 rounded-full px-4 text-sm font-bold ${J}`,
                                  children: p ? "保存修改" : "添加锚点",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  be > 0
                    ? t.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          me.map((e) =>
                            t.jsx(
                              "div",
                              {
                                className:
                                  "rounded-[20px] border border-white/80 bg-[rgba(252,245,246,0.88)] px-4 py-3",
                                children: t.jsxs("div", {
                                  className: "flex items-start gap-2",
                                  children: [
                                    t.jsx("span", {
                                      className: "mt-0.5 text-sm",
                                      children: Ce[e.anchorType],
                                    }),
                                    t.jsxs("div", {
                                      className: "min-w-0 flex-1",
                                      children: [
                                        t.jsx("div", {
                                          className:
                                            "text-sm font-bold text-slate-800 leading-6",
                                          children: He(e),
                                        }),
                                        t.jsxs("div", {
                                          className:
                                            "mt-1 text-xs text-slate-500",
                                          children: ["用户锚点 · ", Je(e)],
                                        }),
                                      ],
                                    }),
                                    t.jsx("button", {
                                      type: "button",
                                      onClick: () => tt(e),
                                      className:
                                        "w-6 h-6 rounded-full border border-white/80 bg-white/80 text-slate-400 hover:text-[#6f8faa] flex items-center justify-center transition-colors shrink-0 mt-0.5",
                                      title: "编辑用户锚点",
                                      children: t.jsx(we, {
                                        className: "w-3 h-3",
                                      }),
                                    }),
                                  ],
                                }),
                              },
                              e.id
                            )
                          ),
                          pe.map((e) => {
                            var s;
                            return t.jsx(
                              "div",
                              {
                                className:
                                  "rounded-[20px] border border-white/80 bg-white/75 px-4 py-3",
                                children: t.jsxs("div", {
                                  className: "flex items-start gap-2",
                                  children: [
                                    t.jsx("span", {
                                      className: "mt-0.5 text-sm",
                                      children: e.emoji || Ne[e.eventType],
                                    }),
                                    t.jsxs("div", {
                                      className: "min-w-0 flex-1",
                                      children: [
                                        t.jsx("div", {
                                          className:
                                            "text-sm font-bold text-slate-800 leading-6 break-words",
                                          children: e.title,
                                        }),
                                        t.jsxs("div", {
                                          className:
                                            "mt-1 text-xs text-slate-500",
                                          children: [
                                            ((s = y.find(
                                              (o) => o.id === e.mapId
                                            )) == null
                                              ? void 0
                                              : s.name) || "未知地图",
                                            " · ",
                                            ve[e.eventType],
                                          ],
                                        }),
                                      ],
                                    }),
                                    t.jsx("button", {
                                      type: "button",
                                      onClick: () => st(e),
                                      className:
                                        "w-6 h-6 rounded-full border border-white/80 bg-white/80 text-slate-400 hover:text-[#6f8faa] flex items-center justify-center transition-colors shrink-0 mt-0.5",
                                      title: "编辑世界事件",
                                      children: t.jsx(we, {
                                        className: "w-3 h-3",
                                      }),
                                    }),
                                  ],
                                }),
                              },
                              e.id
                            );
                          }),
                        ],
                      })
                    : t.jsx("div", {
                        className:
                          "rounded-[20px] border border-dashed border-white/80 bg-white/45 px-4 py-5 text-sm leading-6 text-slate-500",
                        children:
                          "这一天还没有内容。你可以生成当前查看月份的世界事件，或者手动补世界事件与用户锚点。",
                      }),
                ],
              }),
            ],
          }),
          t.jsxs("section", {
            className:
              "bg-white/55 border border-white/80 rounded-[30px] p-4 shadow-[0_8px_18px_rgba(148,163,184,0.08)] backdrop-blur-2xl space-y-3",
            children: [
              t.jsxs("div", {
                className: "flex items-center gap-2 text-slate-800",
                children: [
                  t.jsx(ot, { className: "w-4 h-4 text-[#6f8faa]" }),
                  t.jsx("span", {
                    className: "text-sm font-bold",
                    children: "当前地图清单",
                  }),
                ],
              }),
              t.jsx("div", {
                className: "space-y-2",
                children: y.map((e) =>
                  t.jsxs(
                    "div",
                    {
                      className:
                        "rounded-[20px] border border-white/80 bg-white/70 px-4 py-3",
                      children: [
                        t.jsx("div", {
                          className: "text-sm font-bold text-slate-800",
                          children: e.name,
                        }),
                        t.jsx("div", {
                          className: "mt-1 text-xs text-slate-500 leading-5",
                          children: e.summary,
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
export { St as default };
