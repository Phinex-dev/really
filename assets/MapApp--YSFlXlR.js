import { r as d, j as e } from "./index-C41onZB-.js";
import {
  u as Ut,
  D as R,
  t as Bt,
  aH as ie,
  aI as nt,
  aJ as Yt,
  V as Ft,
  P as Gt,
  aG as Tt,
  T as Ot,
  b as _e,
  aK as Xt,
  az as Kt,
  aL as de,
  l as Wt,
} from "./App-CYgIjxWH.js";
import { b as it, S as D, a as dt } from "./buttonStyles-CgOYb1KY.js";
import { i as Ht } from "./gemini-CeriFUnH.js";
import { A as Jt } from "./ApiErrorCard-DsY_S22O.js";
import { C as Vt } from "./chevron-left-CTqCLzU8.js";
import { C as oe } from "./chevron-down-DsGpUXIv.js";
import { U as qt } from "./upload-Dz6P4EmD.js";
import { R as Qt } from "./rotate-ccw-CbYjPK1x.js";
import { S as Zt } from "./sparkles-CGxZnICD.js";
import "./giftFulfillment-DLU8FseI.js";
import "./initialShopItems-Bgx56oyu.js";
import "./worldBookScopes-B0JaUaci.js";
import "./llmFetch-C_SjUca9.js";
import "./circle-alert-JwRkSIRb.js";
const V = () => Math.random().toString(36).substring(2, 10),
  es = [
    { role: "home", note: "" },
    { role: "work", note: "" },
    { role: "favorite", note: "" },
  ],
  ce = { home: "home", work: "work", favorite: "dining", custom: "custom" },
  ts = [
    { x: 50, y: 18 },
    { x: 72, y: 28 },
    { x: 28, y: 30 },
    { x: 64, y: 46 },
    { x: 36, y: 52 },
    { x: 74, y: 66 },
    { x: 26, y: 72 },
    { x: 52, y: 82 },
  ];
function ss(y, h) {
  switch (y) {
    case "home":
      return "回家休息的地方";
    case "work":
      return "白天处理事务的地方";
    case "dining":
      return "常来吃饭补给的地方";
    case "entertainment":
      return "约会放松或社交的地方";
    case "transit":
      return "通勤换乘或短暂停留的地方";
    case "custom":
      return h != null && h.trim()
        ? `这个地点和“${h.trim()}”的关系`
        : "写清这个自定义标签对应的地点意义";
    default:
      return "写清这个地点对角色的意义";
  }
}
function xe(y, h, k, I) {
  const j = [h, k, I];
  return es.map((b, f) => ({
    id: `${y}-anchor-${b.role}`,
    role: b.role,
    intent: ce[b.role],
    customIntentLabel: "",
    placeId: j[f],
    note: b.note,
  }));
}
function ot(y, h) {
  var f, C, _;
  const k = [
      h.find((u) => u.role === "home") || xe(y.id)[0],
      h.find((u) => u.role === "work") || xe(y.id)[1],
      h.find((u) => u.role === "favorite") || xe(y.id)[2],
      ...h.filter((u) => !["home", "work", "favorite"].includes(u.role)),
    ],
    I = (f = k.find((u) => u.intent === "home")) == null ? void 0 : f.placeId,
    j = (C = k.find((u) => u.intent === "work")) == null ? void 0 : C.placeId,
    b =
      (_ = k.find((u) =>
        ["dining", "entertainment"].includes(u.intent || "")
      )) == null
        ? void 0
        : _.placeId;
  return {
    ...y,
    placeAnchors: k,
    homePlaceId: I,
    workPlaceIds: j ? [j] : [],
    favoritePlaceIds: b ? [b] : [],
    updatedAt: Date.now(),
  };
}
function as(y) {
  return new Promise((h, k) => {
    const I = new FileReader();
    (I.onload = () => {
      const j = new Image();
      (j.onload = () => {
        const b = document.createElement("canvas");
        let f = j.width,
          C = j.height;
        const _ = 1080;
        f > _ && ((C *= _ / f), (f = _)), (b.width = f), (b.height = C);
        const u = b.getContext("2d");
        if (!u) {
          h(I.result);
          return;
        }
        u.drawImage(j, 0, 0, f, C), h(b.toDataURL("image/jpeg", 0.82));
      }),
        (j.onerror = k),
        (j.src = I.result);
    }),
      (I.onerror = k),
      I.readAsDataURL(y);
  });
}
const vs = () => {
  var st, at, rt;
  const {
      setCurrentApp: y,
      users: h,
      characters: k,
      apiPresets: I,
      activePresetId: j,
      mapThemes: b,
      worldMaps: f,
      setWorldMaps: C,
      places: _,
      setPlaces: u,
      setWorldCalendarEvents: ct,
      entityMapBindings: L,
      setEntityMapBindings: T,
      dailyPlans: me,
      setDailyPlans: ue,
      setLastUsage: xt,
      worldBooks: mt,
    } = Ut(),
    [q, pe] = d.useState(((st = f[0]) == null ? void 0 : st.id) || ""),
    [ut, Q] = d.useState(!1),
    [pt, be] = d.useState(!1),
    [O, X] = d.useState(1),
    [he, Ae] = d.useState(""),
    [$e, Ee] = d.useState("virtual"),
    [K, Me] = d.useState(R[0].id),
    [De, ze] = d.useState(""),
    [Re, Le] = d.useState(""),
    [Z, Ue] = d.useState(""),
    [fe, bt] = d.useState("custom"),
    [Be, Ye] = d.useState(""),
    [U, ge] = d.useState(""),
    [A, E] = d.useState(null),
    [ve, W] = d.useState(!1),
    [Fe, Ge] = d.useState(!1),
    [Te, ee] = d.useState(!1),
    [Oe, we] = d.useState(!1),
    [N, P] = d.useState(null),
    [g, te] = d.useState(null),
    [ht, ft] = d.useState(""),
    [gt, se] = d.useState(!1),
    [Xe, je] = d.useState(""),
    [Ke, We] = d.useState(
      "严格按地图描述、城市类型和参考城市生成地点；如果描述不足，再根据城市类型补全。"
    ),
    [B, ae] = d.useState([]),
    [He, Je] = d.useState(!1),
    [Ve, Y] = d.useState(null),
    qe = d.useRef(null),
    a = d.useMemo(() => f.find((t) => t.id === q) || f[0], [q, f]),
    o = d.useMemo(() => {
      const t = b.find((r) => r.id === (a == null ? void 0 : a.themeId)),
        s = R.find((r) => r.id === (a == null ? void 0 : a.themeId)) || R[0];
      return t
        ? {
            ...s,
            ...t,
            previewImage: t.previewImage || s.previewImage,
            previewGradient: t.previewGradient || s.previewGradient,
            description: t.description || s.description,
          }
        : s;
    }, [b, a == null ? void 0 : a.themeId]),
    vt = d.useMemo(() => I.find((t) => t.id === j), [j, I]),
    v = d.useMemo(() => {
      const t = b.find((r) => r.id === K),
        s = R.find((r) => r.id === K) || R[0];
      return t
        ? {
            ...s,
            ...t,
            previewImage: t.previewImage || s.previewImage,
            previewGradient: t.previewGradient || s.previewGradient,
            description: t.description || s.description,
          }
        : s;
    }, [K, b]),
    p = d.useMemo(
      () => _.filter((t) => t.mapId === (a == null ? void 0 : a.id)),
      [_, a]
    ),
    S = d.useMemo(
      () => [
        ...h.map((t) => ({
          key: `user:${t.id}`,
          entityType: "user",
          entity: t,
        })),
        ...k.map((t) => ({
          key: `character:${t.id}`,
          entityType: "character",
          entity: t,
        })),
      ],
      [h, k]
    ),
    x = S.find((t) => t.key === U) || S[0],
    Ne = Bt(),
    $ = x
      ? L.find(
          (t) => t.entityType === x.entityType && t.entityId === x.entity.id
        )
      : void 0,
    ye = ($ == null ? void 0 : $.currentMapId) === (a == null ? void 0 : a.id),
    ke = $ ? ie($) : [],
    wt =
      (x == null ? void 0 : x.entityType) === "character"
        ? me.find(
            (t) =>
              t.entityType === "character" &&
              t.entityId === x.entity.id &&
              t.dateKey === Ne
          )
        : void 0,
    re = (x == null ? void 0 : x.entityType) === "character" ? nt(wt) : void 0,
    Ie =
      re != null && re.placeId
        ? ((at = p.find((t) => t.id === re.placeId)) == null
            ? void 0
            : at.name) || "未定位"
        : null,
    jt = ke.map((t) => {
      var s;
      return {
        id: t.id,
        label: Yt(t),
        placeName: t.placeId
          ? ((s = p.find((r) => r.id === t.placeId)) == null
              ? void 0
              : s.name) || "未知地点"
          : "未绑定地点",
      };
    }),
    le = p.find((t) => t.id === A) || null,
    Qe = le || p[p.length - 1] || null,
    F = N === "__new_place__";
  d.useEffect(() => {
    if (!U && S[0]) {
      ge(S[0].key);
      return;
    }
    U && !S.some((t) => t.key === U) && S[0] && ge(S[0].key);
  }, [S, U]),
    d.useEffect(() => {
      Ge(!1);
    }, [U, q]),
    d.useEffect(() => {
      ee(!1), W(!1), E(null), P(null), we(!1);
    }, [q]),
    d.useEffect(() => {
      ae([]),
        Y(null),
        Q(!1),
        se(!1),
        je((a == null ? void 0 : a.summary) || ""),
        We(
          "严格按地图描述、城市类型和参考城市生成地点；如果描述不足，再根据城市类型补全。"
        );
    }, [a == null ? void 0 : a.id, a == null ? void 0 : a.summary]),
    d.useEffect(() => {
      A && !p.some((t) => t.id === A) && E(null),
        N && N !== "__new_place__" && !p.some((t) => t.id === N) && P(null);
    }, [A, N, p]);
  const Nt = d.useMemo(() => {
      const t = [],
        s = {};
      return (
        S.forEach(({ entityType: r, entity: l }) => {
          var J;
          const i = L.find((w) => w.entityType === r && w.entityId === l.id);
          if (!i || i.currentMapId !== (a == null ? void 0 : a.id)) return;
          const n =
              r === "character"
                ? me.find(
                    (w) =>
                      w.entityType === r &&
                      w.entityId === l.id &&
                      w.dateKey === Ne
                  )
                : void 0,
            c = r === "character" ? nt(n) : void 0,
            m = (J = ie(i).find((w) => w.placeId)) == null ? void 0 : J.placeId,
            ne =
              (c == null ? void 0 : c.placeId) ||
              i.currentPlaceId ||
              m ||
              i.homePlaceId ||
              i.workPlaceIds[0] ||
              i.favoritePlaceIds[0];
          if (!ne) return;
          const M = p.find(
            (w) =>
              w.id === ne && w.positionX !== void 0 && w.positionY !== void 0
          );
          M &&
            ((s[M.id] = (s[M.id] || 0) + 1),
            t.push({
              id: `${r}-${l.id}`,
              entityType: r,
              entity: l,
              place: M,
              label: (c == null ? void 0 : c.activity) || "当前落点",
              indexAtPlace: s[M.id] - 1,
            }));
        }),
        t
      );
    }, [S, me, L, a, p, Ne]),
    Ze = (t, s) => {
      var M, J, w, lt;
      if (!a) return;
      const r = L.find((G) => G.entityType === t && G.entityId === s),
        l = Date.now(),
        i = (M = de(p, "home")) == null ? void 0 : M.id,
        n = (J = de(p, "work")) == null ? void 0 : J.id,
        c =
          ((w = de(p, "dining")) == null ? void 0 : w.id) ||
          ((lt = de(p, "entertainment")) == null ? void 0 : lt.id);
      if (r) {
        T((G) =>
          G.map((Se) =>
            Se.id === r.id ? { ...Se, currentMapId: a.id, updatedAt: l } : Se
          )
        );
        return;
      }
      const m = V(),
        ne = {
          id: m,
          entityType: t,
          entityId: s,
          homeMapId: a.id,
          currentMapId: a.id,
          currentPlaceId: i || n || c,
          homePlaceId: i,
          workPlaceIds: n ? [n] : [],
          favoritePlaceIds: c ? [c] : [],
          placeAnchors: xe(m, i, n, c),
          updatedAt: l,
        };
      T((G) => [...G, ne]);
    },
    et = (t, s, r) => {
      const l = L.find((i) => i.entityType === t && i.entityId === s);
      if (!l) {
        Ze(t, s);
        return;
      }
      T((i) => i.map((n) => (n.id === l.id ? r(n) : n)));
    },
    z = (t) => {
      x &&
        et(x.entityType, x.entity.id, (s) => {
          const r = t(ie(s));
          return ot(s, r);
        });
    },
    Ce = () => {
      Ue(""), bt("custom"), Ye(""), te(null), F && P(null);
    },
    yt = () => {
      if ((ee(!0), ve)) {
        W(!1), Ce();
        return;
      }
      E(null), P(null), W(!0);
    },
    H = (t, s) => {
      u((r) => r.map((l) => (l.id === t ? s(l) : l)));
    },
    tt = (t) => {
      t.length !== 0 &&
        (T((s) =>
          s.map((r) => {
            const l = ie(r).map((n) =>
                t.includes(n.placeId || "") ? { ...n, placeId: void 0 } : n
              ),
              i = ot(r, l);
            return {
              ...i,
              currentPlaceId: t.includes(r.currentPlaceId || "")
                ? void 0
                : i.currentPlaceId,
              updatedAt: Date.now(),
            };
          })
        ),
        ue((s) =>
          s.map((r) => ({
            ...r,
            items: r.items.map((l) =>
              t.includes(l.placeId || "") ? { ...l, placeId: void 0 } : l
            ),
          }))
        ));
    },
    kt = (t) => {
      tt([t]);
    },
    It = (t) =>
      Array.from(
        { length: t },
        (s, r) =>
          ts[r] || { x: 24 + (r % 3) * 24, y: 24 + Math.floor(r / 3) * 18 }
      ),
    Ct = async () => {
      if (a) {
        we(!0), Je(!0), Y(null);
        try {
          const { drafts: t, usage: s } = await Ht({
            map: a,
            themeName: o == null ? void 0 : o.name,
            themeDescription: o == null ? void 0 : o.description,
            existingPlaces: p,
            count: a.id === "map-default-city" ? 6 : 5,
            direction: Ke,
            preset: vt,
            worldBooks: mt,
          });
          ae(t),
            xt(s),
            t.length === 0 &&
              Y({
                title: "地点生成失败",
                detail: "这次没有生成可用地点。可以换个方向描述后再试一次。",
              });
        } catch (t) {
          console.error("Failed to generate AI places:", t),
            Y({ title: "地点生成失败", detail: Wt(t) }),
            ae([]);
        } finally {
          Je(!1);
        }
      }
    },
    Pt = () => {
      if (!a || B.length === 0) return;
      const t = It(B.length),
        s = Date.now(),
        r = B.map((l, i) => ({
          id: V(),
          mapId: a.id,
          name: l.name,
          category: "custom",
          description: l.description,
          tags: l.tags,
          positionX: t[i].x,
          positionY: t[i].y,
        }));
      u((l) => [...l, ...r]),
        a.id === "map-default-city" &&
          C((l) =>
            l.map((i) =>
              i.id === a.id
                ? {
                    ...i,
                    summary:
                      "AI 居住的回响空间，地点结构会根据生成结果持续演化。",
                    updatedAt: s,
                  }
                : i
            )
          ),
        ae([]),
        Y(null);
    },
    St = () => {
      a &&
        (C((t) =>
          t.map((s) =>
            s.id === a.id
              ? { ...s, summary: Xe.trim() || s.summary, updatedAt: Date.now() }
              : s
          )
        ),
        se(!1));
    },
    _t = () => {
      if (!a) return;
      const t = _.filter((r) => r.mapId === a.id).map((r) => r.id);
      window.confirm(
        `确认删除地图「${a.name}」吗？该地图下的地点、角色绑定、日程和世界日历事件都会一并清空。`
      ) &&
        (tt(t),
        u((r) => r.filter((l) => l.mapId !== a.id)),
        T((r) =>
          r.filter((l) => l.currentMapId !== a.id && l.homeMapId !== a.id)
        ),
        ue((r) => r.filter((l) => l.mapId !== a.id)),
        ct((r) => r.filter((l) => l.mapId !== a.id)),
        C((r) => {
          const l = r.filter((n) => n.id !== a.id),
            i = l[0];
          return pe((i == null ? void 0 : i.id) || ""), l;
        }),
        Q(!1));
    },
    At = (t) => {
      const s = p.find((l) => l.id === t);
      !s ||
        !window.confirm(
          `确认删除地点「${s.name}」吗？相关人物锚点和当前地点引用会一并清空。`
        ) ||
        (u((l) => l.filter((i) => i.id !== t)),
        kt(t),
        ue((l) =>
          l.map((i) => ({
            ...i,
            items: i.items.map((n) =>
              n.placeId === t ? { ...n, placeId: void 0 } : n
            ),
          }))
        ),
        A === t && E(null),
        N === t && P(null));
    },
    $t = () => {
      if (!he.trim() || b.length === 0) return;
      const t = Date.now(),
        s = {
          id: V(),
          name: he.trim(),
          kind: $e,
          summary: De.trim() || "一张等待你继续放置地点与角色的新地图。",
          referenceCityName: Re.trim() || void 0,
          themeId: K,
          createdAt: t,
          updatedAt: t,
        };
      C((r) => [...r, s]),
        pe(s.id),
        be(!1),
        X(1),
        Ae(""),
        ze(""),
        Le(""),
        Ee("virtual"),
        Me(R[0].id);
    },
    Et = () => {
      be(!0), X(1);
    },
    Mt = () => {
      be(!1), X(1);
    },
    Dt = () => {
      if (!a || !g || !Z.trim()) return;
      const t = {
        id: V(),
        mapId: a.id,
        name: Z.trim(),
        category: fe,
        description: Be.trim() || "地图上的一个可访问地点。",
        tags: fe === "custom" ? [] : [fe],
        positionX: g.x,
        positionY: g.y,
      };
      u((s) => [...s, t]), Ce(), W(!1);
    },
    Pe = (t) => {
      a &&
        C((s) =>
          s.map((r) =>
            r.id === a.id
              ? { ...r, backgroundImage: t, updatedAt: Date.now() }
              : r
          )
        );
    },
    zt = (t) => {
      const s = t.currentTarget.getBoundingClientRect(),
        r = ((t.clientX - s.left) / s.width) * 100,
        l = ((t.clientY - s.top) / s.height) * 100,
        i = {
          x: Math.max(4, Math.min(96, r)),
          y: Math.max(6, Math.min(94, l)),
        };
      if (N) {
        if (F) {
          te(i);
          return;
        }
        H(N, (n) => ({ ...n, positionX: i.x, positionY: i.y })), E(N), P(null);
        return;
      }
    },
    Rt = async (t) => {
      var l;
      const s = (l = t.target.files) == null ? void 0 : l[0];
      if (!s) return;
      const r = await as(s);
      Pe(r), (t.target.value = "");
    },
    Lt =
      a != null && a.backgroundImage
        ? {
            backgroundImage: `linear-gradient(to bottom, rgba(10, 15, 20, 0.10), rgba(10, 15, 20, 0.35)), url(${a.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }
        : o != null && o.previewImage
        ? {
            backgroundImage: `linear-gradient(to bottom, rgba(10, 15, 20, 0.10), rgba(10, 15, 20, 0.35)), url(${o.previewImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }
        : void 0;
  return e.jsxs("div", {
    className: "echoes-page echoes-page-map w-full h-full flex flex-col",
    children: [
      Ve &&
        e.jsx(Jt, {
          error: Ve,
          onClose: () => Y(null),
          className:
            "absolute top-24 left-1/2 w-[min(92%,32rem)] -translate-x-1/2 z-[60] animate-in fade-in slide-in-from-top-4 duration-300",
        }),
      e.jsxs("div", {
        className:
          "echoes-page-header safe-top px-4 pt-1 pb-4 sticky top-0 z-20 bg-[#eef4f7]/90 backdrop-blur-xl border-b border-white/70",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-2 mb-3",
            children: [
              e.jsx("button", {
                onClick: () => y("home"),
                className:
                  "echoes-map-back-btn p-1.5 -ml-1 rounded-full hover:bg-white/70 text-slate-500 hover:text-slate-700 transition-colors",
                children: e.jsx(Vt, { className: "w-6 h-6" }),
              }),
              e.jsx("div", {
                className: "min-w-0 flex-1 text-2xl font-bold text-slate-800",
                children: "地图",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsxs("div", {
                className: "relative flex-1",
                children: [
                  e.jsx("select", {
                    value: (a == null ? void 0 : a.id) || "",
                    onChange: (t) => pe(t.target.value),
                    className:
                      "echoes-map-search-input w-full appearance-none bg-white/85 border border-white rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm outline-none focus:border-[#89b6d3] focus:ring-2 focus:ring-[#89b6d3]/20 transition-all",
                    children: f.map((t) =>
                      e.jsx("option", { value: t.id, children: t.name }, t.id)
                    ),
                  }),
                  e.jsx(oe, {
                    className:
                      "w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none",
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: () => Q(!0),
                className: it,
                "aria-label": "编辑地图",
                title: "编辑地图",
                children: e.jsx(Ft, { className: "w-4 h-4" }),
              }),
              e.jsx("button", {
                onClick: Et,
                className: it,
                "aria-label": "创建地图",
                title: "创建地图",
                children: e.jsx(Gt, { className: "w-4 h-4" }),
              }),
            ],
          }),
        ],
      }),
      ut &&
        a &&
        e.jsx("div", {
          className:
            "absolute inset-0 z-30 bg-slate-950/35 backdrop-blur-sm px-4 py-5 flex items-start justify-center overflow-y-auto",
          children: e.jsxs("div", {
            className:
              "w-full max-w-[420px] bg-white/92 border border-white rounded-[32px] shadow-2xl p-4 space-y-4 mt-6",
            children: [
              e.jsxs("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("div", {
                        className:
                          "text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400",
                        children: "编辑地图",
                      }),
                      e.jsx("div", {
                        className:
                          "text-[1.65rem] leading-none font-bold text-slate-800 mt-1",
                        children: a.name,
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: () => Q(!1),
                    className:
                      "px-3 py-2 rounded-full bg-slate-100 text-slate-500 text-xs font-bold hover:bg-slate-200 transition-colors",
                    children: "关闭",
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "rounded-[24px] border border-slate-200 bg-slate-50 p-3.5 flex items-center gap-3",
                children: [
                  e.jsx("div", {
                    className: `w-24 h-16 rounded-2xl overflow-hidden flex-shrink-0 ${
                      a.backgroundImage || (o != null && o.previewImage)
                        ? ""
                        : `bg-gradient-to-br ${
                            (o == null ? void 0 : o.previewGradient) ||
                            "from-sky-500 via-cyan-400 to-slate-900"
                          }`
                    }`,
                    style:
                      a.backgroundImage || (o != null && o.previewImage)
                        ? {
                            backgroundImage: `url(${
                              a.backgroundImage ||
                              (o == null ? void 0 : o.previewImage)
                            })`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }
                        : void 0,
                  }),
                  e.jsxs("div", {
                    className: "min-w-0",
                    children: [
                      e.jsx("div", {
                        className:
                          "text-xs font-bold uppercase tracking-[0.22em] text-slate-400",
                        children: "地图底图",
                      }),
                      e.jsx("div", {
                        className: "text-sm font-bold text-slate-800 mt-1",
                        children: (o == null ? void 0 : o.name) || "未定义类型",
                      }),
                      e.jsx("div", {
                        className:
                          "text-xs text-slate-500 mt-1 leading-relaxed",
                        children:
                          "上传自定义底图后会覆盖当前预览，清除后回到默认类型底图。",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx("div", {
                    className:
                      "text-[11px] font-bold tracking-[0.08em] text-slate-400 px-1",
                    children: "地图描述",
                  }),
                  gt
                    ? e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx("textarea", {
                            value: Xe,
                            onChange: (t) => je(t.target.value),
                            placeholder: "写一段更适合 AI 生成地点的地图描述",
                            className:
                              "w-full h-24 resize-none bg-white border border-slate-200 rounded-2xl px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-[#89b6d3] focus:ring-2 focus:ring-[#89b6d3]/20 transition-all",
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx("button", {
                                onClick: St,
                                className: `px-4 py-2 rounded-full text-xs font-bold ${D}`,
                                children: "保存描述",
                              }),
                              e.jsx("button", {
                                onClick: () => {
                                  je(a.summary), se(!1);
                                },
                                className:
                                  "px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold",
                                children: "取消",
                              }),
                            ],
                          }),
                        ],
                      })
                    : e.jsx("button", {
                        onClick: () => se(!0),
                        className:
                          "w-full text-left rounded-2xl bg-white border border-slate-200 px-3 py-3 text-sm text-slate-700",
                        children: a.summary,
                      }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx("div", {
                    className:
                      "text-[11px] font-bold tracking-[0.08em] text-slate-400 px-1",
                    children: "更换底图",
                  }),
                  e.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                      e.jsxs("button", {
                        onClick: () => {
                          var t;
                          return (t = qe.current) == null ? void 0 : t.click();
                        },
                        className: `flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold ${D}`,
                        children: [
                          e.jsx(qt, { className: "w-3.5 h-3.5" }),
                          "上传底图",
                        ],
                      }),
                      e.jsxs("button", {
                        onClick: () => {
                          const t = window.prompt(
                            "请输入底图 URL",
                            a.backgroundImage || ht
                          );
                          t !== null && (ft(t), Pe(t.trim() || void 0));
                        },
                        className:
                          "flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700",
                        children: [
                          e.jsx(Tt, { className: "w-3.5 h-3.5" }),
                          "URL 底图",
                        ],
                      }),
                      a.backgroundImage &&
                        e.jsx("button", {
                          onClick: () => Pe(void 0),
                          className:
                            "px-3 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-red-500",
                          children: "清除底图",
                        }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "pt-2 border-t border-slate-200 flex items-center justify-between gap-3",
                children: [
                  e.jsxs("div", {
                    className: "min-w-0 flex-1",
                    children: [
                      e.jsx("div", {
                        className: "text-sm font-bold text-slate-800",
                        children: "删除地图",
                      }),
                      e.jsx("div", {
                        className: "text-xs text-slate-500 mt-1",
                        children: "会一并清空该地图下的地点、绑定和日程数据。",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: _t,
                    className:
                      "shrink-0 whitespace-nowrap px-3 py-2 rounded-full bg-white border border-rose-200 text-rose-500 text-xs font-bold flex items-center gap-2",
                    children: [e.jsx(Ot, { className: "w-3.5 h-3.5" }), "删除"],
                  }),
                ],
              }),
            ],
          }),
        }),
      pt &&
        e.jsx("div", {
          className:
            "absolute inset-0 z-30 bg-slate-950/35 backdrop-blur-sm px-4 py-5 flex items-start justify-center overflow-y-auto",
          children: e.jsxs("div", {
            className:
              "w-full max-w-[420px] bg-white/92 border border-white rounded-[32px] shadow-2xl p-4 space-y-3 mt-6",
            children: [
              e.jsxs("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("div", {
                        className:
                          "text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400",
                        children: "创建地图",
                      }),
                      e.jsx("div", {
                        className:
                          "text-[1.65rem] leading-none font-bold text-slate-800 mt-1",
                        children: O === 1 ? "城市类型" : "名称与说明",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: Mt,
                    className:
                      "px-3 py-2 rounded-full bg-slate-100 text-slate-500 text-xs font-bold hover:bg-slate-200 transition-colors",
                    children: "关闭",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-2 gap-2",
                children: [
                  e.jsx("div", {
                    className: `h-1.5 rounded-full ${
                      O === 1 ? "bg-[#7fa6c1]" : "bg-slate-200"
                    }`,
                  }),
                  e.jsx("div", {
                    className: `h-1.5 rounded-full ${
                      O === 2 ? "bg-[#7fa6c1]" : "bg-slate-200"
                    }`,
                  }),
                ],
              }),
              O === 1 &&
                e.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    e.jsx("div", {
                      className: "text-[13px] text-slate-600 leading-relaxed",
                      children:
                        "决定原始底图，创建后无法更改。即使后续覆盖，清除时也会回到这里。",
                    }),
                    e.jsx("div", {
                      className: "grid grid-cols-1 gap-2.5",
                      children: R.map((t) => {
                        const s = K === t.id;
                        return e.jsxs(
                          "button",
                          {
                            onClick: () => Me(t.id),
                            className: `overflow-hidden rounded-[24px] border text-left transition-all ${
                              s
                                ? "border-[#b8cfdf] ring-2 ring-[#dbeaf4]/90 shadow-[0_8px_22px_rgba(132,167,197,0.12)]"
                                : "border-slate-200 bg-white hover:border-[#c9dbe8]"
                            }`,
                            children: [
                              e.jsx("div", {
                                className: `h-20 ${
                                  t.previewImage
                                    ? ""
                                    : `bg-gradient-to-br ${t.previewGradient}`
                                }`,
                                style: t.previewImage
                                  ? {
                                      backgroundImage: `url(${t.previewImage})`,
                                      backgroundSize: "cover",
                                      backgroundPosition: "center",
                                    }
                                  : void 0,
                              }),
                              e.jsxs("div", {
                                className: "p-3 bg-white",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-[15px] font-bold text-slate-800",
                                    children: t.name,
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "text-[11px] text-slate-500 mt-1.5 leading-relaxed line-clamp-2",
                                    children: t.description,
                                  }),
                                ],
                              }),
                            ],
                          },
                          t.id
                        );
                      }),
                    }),
                    e.jsx("button", {
                      onClick: () => X(2),
                      className: `w-full py-4 rounded-2xl font-bold ${D}`,
                      children: "下一步",
                    }),
                  ],
                }),
              O === 2 &&
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsxs("div", {
                      className:
                        "rounded-[24px] border border-slate-200 bg-slate-50 p-3.5 flex items-center gap-3",
                      children: [
                        e.jsx("div", {
                          className: `w-24 h-16 rounded-2xl overflow-hidden flex-shrink-0 ${
                            v != null && v.previewImage
                              ? ""
                              : `bg-gradient-to-br ${
                                  (v == null ? void 0 : v.previewGradient) ||
                                  "from-sky-500 via-cyan-400 to-slate-900"
                                }`
                          }`,
                          style:
                            v != null && v.previewImage
                              ? {
                                  backgroundImage: `url(${v.previewImage})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                }
                              : void 0,
                        }),
                        e.jsxs("div", {
                          className: "min-w-0",
                          children: [
                            e.jsx("div", {
                              className:
                                "text-xs font-bold uppercase tracking-[0.22em] text-slate-400",
                              children: "已选类型",
                            }),
                            e.jsx("div", {
                              className:
                                "text-sm font-bold text-slate-800 mt-1",
                              children: v == null ? void 0 : v.name,
                            }),
                            e.jsx("div", {
                              className:
                                "text-xs text-slate-500 mt-1 leading-relaxed",
                              children: v == null ? void 0 : v.description,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "grid grid-cols-2 gap-3",
                      children: [
                        e.jsx("input", {
                          value: he,
                          onChange: (t) => Ae(t.target.value),
                          placeholder: "地图名称",
                          className:
                            "col-span-2 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#89b6d3] focus:ring-2 focus:ring-[#89b6d3]/20 transition-all",
                        }),
                        e.jsxs("select", {
                          value: $e,
                          onChange: (t) => Ee(t.target.value),
                          className:
                            "bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#89b6d3] focus:ring-2 focus:ring-[#89b6d3]/20 transition-all",
                          children: [
                            e.jsx("option", {
                              value: "virtual",
                              children: "虚拟城市",
                            }),
                            e.jsx("option", {
                              value: "real",
                              children: "真实城市",
                            }),
                          ],
                        }),
                        e.jsx("input", {
                          value: Re,
                          onChange: (t) => Le(t.target.value),
                          placeholder: "参考城市（可选）",
                          className:
                            "bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#89b6d3] focus:ring-2 focus:ring-[#89b6d3]/20 transition-all",
                        }),
                        e.jsx("textarea", {
                          value: De,
                          onChange: (t) => ze(t.target.value),
                          placeholder: "地图说明",
                          className:
                            "col-span-2 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-700 outline-none h-24 resize-none focus:border-[#89b6d3] focus:ring-2 focus:ring-[#89b6d3]/20 transition-all",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsx("button", {
                          onClick: () => X(1),
                          className:
                            "px-4 py-3 rounded-2xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-colors",
                          children: "上一步",
                        }),
                        e.jsx("button", {
                          onClick: $t,
                          className: `flex-1 py-4 rounded-2xl font-bold ${D}`,
                          children: "创建地图",
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        }),
      e.jsx("div", {
        className: "flex-1 overflow-y-auto px-4 pb-28 pt-4 space-y-4",
        children:
          a &&
          e.jsxs(e.Fragment, {
            children: [
              e.jsxs("section", {
                className:
                  "bg-white/80 border border-white rounded-[32px] p-3 shadow-sm space-y-3",
                children: [
                  e.jsxs("div", {
                    className: `relative w-full aspect-[9/16] rounded-[28px] overflow-hidden border border-white/60 shadow-inner ${
                      a.backgroundImage || (o != null && o.previewImage)
                        ? ""
                        : `bg-gradient-to-br ${
                            (o == null ? void 0 : o.previewGradient) ||
                            "from-sky-500 via-cyan-400 to-slate-900"
                          }`
                    }`,
                    style: Lt,
                    onClick: zt,
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)] pointer-events-none",
                      }),
                      e.jsxs("div", {
                        className:
                          "absolute top-4 left-4 right-4 flex items-start justify-between gap-3 z-10",
                        children: [
                          e.jsxs("div", {
                            className:
                              "max-w-[70%] rounded-2xl bg-black/18 backdrop-blur-md px-4 py-3 text-white border border-white/15",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-[11px] uppercase tracking-[0.22em] text-white/65 font-bold",
                                children: "当前地图",
                              }),
                              e.jsx("div", {
                                className:
                                  "text-2xl font-bold mt-1 leading-none",
                                children: a.name,
                              }),
                              e.jsx("div", {
                                className:
                                  "text-xs text-white/78 mt-2 leading-relaxed",
                                children: a.summary,
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "rounded-full bg-black/18 backdrop-blur-md px-3 py-2 text-xs text-white font-semibold border border-white/15 whitespace-nowrap",
                            children:
                              a.kind === "real" ? "真实城市" : "虚拟城市",
                          }),
                        ],
                      }),
                      p.map((t) => {
                        const s = t.positionX ?? 50,
                          r = t.positionY ?? 50;
                        return e.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: (l) => {
                              l.stopPropagation(), E(t.id), P(null);
                            },
                            className:
                              "absolute -translate-x-1/2 -translate-y-1/2 z-[11]",
                            style: { left: `${s}%`, top: `${r}%` },
                            children: e.jsxs("div", {
                              className: "flex flex-col items-center gap-1",
                              children: [
                                e.jsx("div", {
                                  className: `w-4 h-4 rounded-full bg-white border-2 transition-colors ${
                                    A === t.id
                                      ? "border-white/90 shadow-[0_0_0_3px_rgba(255,255,255,0.3),0_0_18px_rgba(255,255,255,0.16)]"
                                      : "border-slate-900 shadow-[0_0_0_3px_rgba(255,255,255,0.22)]"
                                  }`,
                                }),
                                e.jsx("div", {
                                  className: `px-2.5 py-1 rounded-full backdrop-blur-md text-[11px] font-semibold text-white whitespace-nowrap border shadow-sm transition-colors ${
                                    A === t.id
                                      ? "bg-white/24 border-white/38 shadow-[0_8px_22px_rgba(15,23,42,0.24)]"
                                      : "bg-black/38 border-white/10"
                                  }`,
                                  children: t.name,
                                }),
                              ],
                            }),
                          },
                          t.id
                        );
                      }),
                      Nt.map((t) => {
                        const s = t.indexAtPlace * 16 - 8,
                          r = t.indexAtPlace * -10 - 22;
                        return e.jsx(
                          "div",
                          {
                            className:
                              "absolute z-[12] -translate-x-1/2 -translate-y-1/2",
                            style: {
                              left: `calc(${t.place.positionX}% + ${s}px)`,
                              top: `calc(${t.place.positionY}% + ${r}px)`,
                            },
                            children: e.jsxs("div", {
                              className: "flex flex-col items-center gap-1",
                              children: [
                                e.jsx(_e, {
                                  char: t.entity,
                                  className:
                                    "w-10 h-10 text-xs border-2 border-white shadow-lg",
                                }),
                                e.jsx("div", {
                                  className:
                                    "px-2 py-1 rounded-full bg-white/88 backdrop-blur-md text-[10px] font-bold text-slate-700 shadow-sm whitespace-nowrap max-w-[110px] truncate",
                                  children: t.entity.name,
                                }),
                              ],
                            }),
                          },
                          t.id
                        );
                      }),
                      g &&
                        e.jsx("div", {
                          className:
                            "absolute -translate-x-1/2 -translate-y-1/2 z-[13]",
                          style: { left: `${g.x}%`, top: `${g.y}%` },
                          children: e.jsxs("div", {
                            className: "flex flex-col items-center gap-1",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-5 h-5 rounded-full bg-amber-400 border-2 border-white shadow-lg animate-pulse",
                              }),
                              e.jsx("div", {
                                className:
                                  "px-2 py-1 rounded-full bg-amber-400/92 text-[10px] font-bold text-slate-900 whitespace-nowrap",
                                children: "新地点落点",
                              }),
                            ],
                          }),
                        }),
                      (F || N) &&
                        e.jsx("div", {
                          className:
                            "absolute bottom-4 left-4 right-4 flex justify-end z-10",
                          children: e.jsxs("div", {
                            className:
                              "rounded-2xl bg-black/18 backdrop-blur-md px-4 py-3 text-white border border-white/15 max-w-[72%]",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-[11px] font-bold uppercase tracking-[0.22em] text-white/60",
                                children: "使用方式",
                              }),
                              e.jsx("div", {
                                className:
                                  "text-xs text-white/82 mt-1 leading-relaxed",
                                children: F
                                  ? "新增地点模式：点击地图，为这个新地点记录位置。"
                                  : "重新定位模式：点击地图，把当前选中的地点移动到新位置。",
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                  e.jsx("input", {
                    ref: qe,
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: Rt,
                  }),
                ],
              }),
              e.jsxs("section", {
                className:
                  "bg-white/80 border border-white rounded-[28px] p-4 shadow-sm space-y-3",
                children: [
                  e.jsx("div", {
                    children: e.jsx("div", {
                      className: "min-w-0",
                      children: e.jsx("div", {
                        className: "text-sm font-bold text-slate-800",
                        children: "地图上的角色与用户",
                      }),
                    }),
                  }),
                  e.jsx("div", {
                    className: "-mx-1 px-1 overflow-x-auto pb-1",
                    children: e.jsx("div", {
                      className: "flex items-start gap-3 min-w-max",
                      children: S.map(
                        ({ key: t, entityType: s, entity: r }) => {
                          const l = L.find(
                              (c) => c.entityType === s && c.entityId === r.id
                            ),
                            i = (x == null ? void 0 : x.key) === t,
                            n = (l == null ? void 0 : l.currentMapId) === a.id;
                          return e.jsxs(
                            "button",
                            {
                              onClick: () => ge(t),
                              className: `w-[74px] flex-shrink-0 flex flex-col items-center gap-2 rounded-[22px] px-2.5 py-3 transition-all ${
                                i
                                  ? "bg-white/85 backdrop-blur-xl text-slate-800 border border-[#d9e5ee] shadow-[0_8px_20px_rgba(148,163,184,0.12)]"
                                  : "bg-slate-50/80 text-slate-700 border border-slate-200 hover:border-sky-200"
                              }`,
                              children: [
                                e.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    e.jsx(_e, {
                                      char: r,
                                      className: `w-12 h-12 text-sm border-2 ${
                                        i
                                          ? "border-[#e5edf4] shadow-sm"
                                          : "border-white"
                                      }`,
                                    }),
                                    e.jsx("div", {
                                      className: `absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 ${
                                        n
                                          ? "bg-emerald-400 border-white"
                                          : "bg-slate-300 border-white"
                                      }`,
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "text-[11px] font-bold leading-tight text-center line-clamp-2",
                                  children: r.name,
                                }),
                              ],
                            },
                            t
                          );
                        }
                      ),
                    }),
                  }),
                  x &&
                    e.jsxs("div", {
                      className:
                        "rounded-[24px] border border-slate-200 bg-slate-50 p-3.5 space-y-3",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            e.jsx(_e, {
                              char: x.entity,
                              className:
                                "w-12 h-12 text-sm border-2 border-white",
                            }),
                            e.jsxs("div", {
                              className: "min-w-0 flex-1",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center gap-2 font-bold text-slate-800",
                                  children: [
                                    e.jsx("span", { children: x.entity.name }),
                                    e.jsx("span", {
                                      className: `text-[11px] px-2 py-1 rounded-full border ${
                                        x.entityType === "character"
                                          ? "bg-sky-50/80 border-sky-100 text-sky-600"
                                          : "bg-violet-50/80 border-violet-100 text-violet-600"
                                      }`,
                                      children:
                                        x.entityType === "character"
                                          ? "角色"
                                          : "用户",
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className: "text-xs text-slate-500 mt-1",
                                  children: $
                                    ? `当前地图：${
                                        ((rt = f.find(
                                          (t) => t.id === $.currentMapId
                                        )) == null
                                          ? void 0
                                          : rt.name) || "未知"
                                      }`
                                    : "尚未绑定地图",
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              onClick: () => Ze(x.entityType, x.entity.id),
                              className: `px-3 py-2 rounded-full text-xs font-bold border backdrop-blur-xl shadow-sm transition-colors ${
                                ye
                                  ? "bg-emerald-50/90 border-emerald-100 text-emerald-700"
                                  : "bg-white/82 border-white text-slate-700 hover:bg-white"
                              }`,
                              children: ye ? "已在此地图" : "移动到这里",
                            }),
                          ],
                        }),
                        $ &&
                          ye &&
                          e.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-2",
                                    children: "当前状态",
                                  }),
                                  x.entityType === "user"
                                    ? e.jsx(e.Fragment, {
                                        children: e.jsxs("select", {
                                          value: $.currentPlaceId || "",
                                          onChange: (t) =>
                                            et(
                                              x.entityType,
                                              x.entity.id,
                                              (s) => ({
                                                ...s,
                                                currentPlaceId:
                                                  t.target.value || void 0,
                                                updatedAt: Date.now(),
                                              })
                                            ),
                                          className:
                                            "w-full bg-white border border-slate-200 rounded-2xl px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-[#89b6d3] focus:ring-2 focus:ring-[#89b6d3]/20 transition-all",
                                          children: [
                                            e.jsx("option", {
                                              value: "",
                                              children: "选择当前位置",
                                            }),
                                            p.map((t) =>
                                              e.jsx(
                                                "option",
                                                {
                                                  value: t.id,
                                                  children: t.name,
                                                },
                                                t.id
                                              )
                                            ),
                                          ],
                                        }),
                                      })
                                    : e.jsxs("div", {
                                        className:
                                          "rounded-[20px] border border-slate-200 bg-slate-50/90 px-4 py-3",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "text-sm font-bold text-slate-800",
                                            children: Ie
                                              ? `当前按日程显示在：${Ie}`
                                              : "当前按角色日程与锚点结果显示位置",
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "text-[11px] text-slate-500 mt-2 leading-relaxed",
                                            children: Ie
                                              ? "角色地图位置默认跟随今日日程。若想改变位置，请使用赴约功能召集角色。"
                                              : "这里不再手动改角色位置。角色会优先跟随今日日程；若当天还没有可用日程，地图会回落到生活锚点结果。",
                                          }),
                                        ],
                                      }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-2",
                                    children: "生活锚点",
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "rounded-[20px] border border-slate-200 bg-white overflow-hidden",
                                    children: [
                                      e.jsxs("button", {
                                        type: "button",
                                        onClick: () => Ge((t) => !t),
                                        className: "w-full px-3 py-3 text-left",
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "flex items-start justify-between gap-3",
                                            children: [
                                              e.jsx("div", {
                                                className: "min-w-0 flex-1",
                                                children: e.jsx("div", {
                                                  className:
                                                    "text-sm font-bold text-slate-800",
                                                  children:
                                                    "什么时候去什么位置",
                                                }),
                                              }),
                                              e.jsx(oe, {
                                                className: `w-4 h-4 text-slate-400 mt-0.5 transition-transform ${
                                                  Fe ? "rotate-180" : ""
                                                }`,
                                              }),
                                            ],
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "flex flex-wrap gap-2 mt-3",
                                            children: jt.map((t) =>
                                              e.jsxs(
                                                "div",
                                                {
                                                  className:
                                                    "rounded-full bg-slate-50 border border-slate-200 px-2.5 py-1.5 text-[11px] leading-none text-slate-600 max-w-full",
                                                  children: [
                                                    e.jsx("span", {
                                                      className:
                                                        "font-bold text-slate-700",
                                                      children: t.label,
                                                    }),
                                                    e.jsx("span", {
                                                      className:
                                                        "mx-1 text-slate-300",
                                                      children: "·",
                                                    }),
                                                    e.jsx("span", {
                                                      children: t.placeName,
                                                    }),
                                                  ],
                                                },
                                                t.id
                                              )
                                            ),
                                          }),
                                        ],
                                      }),
                                      Fe &&
                                        e.jsxs("div", {
                                          className:
                                            "space-y-2.5 border-t border-slate-200 bg-slate-50/55 px-3 py-3",
                                          children: [
                                            ke.map((t) => {
                                              const s = new Set(
                                                  ke
                                                    .filter(
                                                      (n) => n.id !== t.id
                                                    )
                                                    .map(
                                                      (n) =>
                                                        n.intent || ce[n.role]
                                                    )
                                                    .filter(
                                                      (n) => n && n !== "custom"
                                                    )
                                                ),
                                                r = p,
                                                l = t.intent || ce[t.role],
                                                i = Xt.filter((n) =>
                                                  n.id === "custom"
                                                    ? !0
                                                    : n.id === l || !s.has(n.id)
                                                );
                                              return e.jsxs(
                                                "div",
                                                {
                                                  className:
                                                    "rounded-[20px] border border-slate-200 bg-white px-3 py-3",
                                                  children: [
                                                    t.role === "custom" &&
                                                      e.jsx("div", {
                                                        className:
                                                          "flex justify-end mb-2",
                                                        children: e.jsx(
                                                          "button",
                                                          {
                                                            onClick: () =>
                                                              z((n) =>
                                                                n.filter(
                                                                  (c) =>
                                                                    c.id !==
                                                                    t.id
                                                                )
                                                              ),
                                                            className:
                                                              "text-[11px] font-bold text-rose-500",
                                                            children: "删除",
                                                          }
                                                        ),
                                                      }),
                                                    e.jsxs("div", {
                                                      className:
                                                        "grid grid-cols-2 gap-2 mb-1.5 px-1",
                                                      children: [
                                                        e.jsx("div", {
                                                          className:
                                                            "text-[11px] font-bold tracking-[0.08em] text-slate-400",
                                                          children: "日程标签",
                                                        }),
                                                        e.jsx("div", {
                                                          className:
                                                            "text-[11px] font-bold tracking-[0.08em] text-slate-400",
                                                          children: "绑定地点",
                                                        }),
                                                      ],
                                                    }),
                                                    e.jsxs("div", {
                                                      className:
                                                        "grid grid-cols-2 gap-2 mb-2",
                                                      children: [
                                                        l === "custom"
                                                          ? e.jsxs("div", {
                                                              className:
                                                                "flex gap-2",
                                                              children: [
                                                                e.jsx("input", {
                                                                  value:
                                                                    t.customIntentLabel ||
                                                                    "",
                                                                  onChange: (
                                                                    n
                                                                  ) =>
                                                                    z((c) =>
                                                                      c.map(
                                                                        (m) =>
                                                                          m.id ===
                                                                          t.id
                                                                            ? {
                                                                                ...m,
                                                                                intent:
                                                                                  "custom",
                                                                                customIntentLabel:
                                                                                  n
                                                                                    .target
                                                                                    .value,
                                                                              }
                                                                            : m
                                                                      )
                                                                    ),
                                                                  placeholder:
                                                                    "输入自定义日程标签",
                                                                  className:
                                                                    "min-w-0 flex-1 bg-white border border-slate-200 rounded-2xl px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-[#89b6d3] focus:ring-2 focus:ring-[#89b6d3]/20 transition-all",
                                                                }),
                                                                e.jsx(
                                                                  "button",
                                                                  {
                                                                    type: "button",
                                                                    onClick:
                                                                      () => {
                                                                        const n =
                                                                          i.find(
                                                                            (
                                                                              c
                                                                            ) =>
                                                                              c.id !==
                                                                              "custom"
                                                                          );
                                                                        z((c) =>
                                                                          c.map(
                                                                            (
                                                                              m
                                                                            ) =>
                                                                              m.id ===
                                                                              t.id
                                                                                ? {
                                                                                    ...m,
                                                                                    intent:
                                                                                      (n ==
                                                                                      null
                                                                                        ? void 0
                                                                                        : n.id) ||
                                                                                      ce[
                                                                                        m
                                                                                          .role
                                                                                      ],
                                                                                    customIntentLabel:
                                                                                      "",
                                                                                  }
                                                                                : m
                                                                          )
                                                                        );
                                                                      },
                                                                    className:
                                                                      "w-10 h-10 flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500",
                                                                    "aria-label":
                                                                      "切回固定标签",
                                                                    title:
                                                                      "切回固定标签",
                                                                    children:
                                                                      e.jsx(
                                                                        Qt,
                                                                        {
                                                                          className:
                                                                            "w-4 h-4",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                              ],
                                                            })
                                                          : e.jsx("select", {
                                                              value: l,
                                                              onChange: (n) =>
                                                                z((c) =>
                                                                  c.map((m) =>
                                                                    m.id ===
                                                                    t.id
                                                                      ? {
                                                                          ...m,
                                                                          intent:
                                                                            n
                                                                              .target
                                                                              .value,
                                                                          customIntentLabel:
                                                                            (n
                                                                              .target
                                                                              .value ===
                                                                              "custom",
                                                                            ""),
                                                                        }
                                                                      : m
                                                                  )
                                                                ),
                                                              className:
                                                                "w-full bg-white border border-slate-200 rounded-2xl px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-[#89b6d3] focus:ring-2 focus:ring-[#89b6d3]/20 transition-all",
                                                              children: i.map(
                                                                (n) =>
                                                                  e.jsx(
                                                                    "option",
                                                                    {
                                                                      value:
                                                                        n.id,
                                                                      children:
                                                                        n.label,
                                                                    },
                                                                    n.id
                                                                  )
                                                              ),
                                                            }),
                                                        e.jsxs("select", {
                                                          value:
                                                            t.placeId || "",
                                                          onChange: (n) =>
                                                            z((c) =>
                                                              c.map((m) =>
                                                                m.id === t.id
                                                                  ? {
                                                                      ...m,
                                                                      placeId:
                                                                        n.target
                                                                          .value ||
                                                                        void 0,
                                                                    }
                                                                  : m
                                                              )
                                                            ),
                                                          className:
                                                            "bg-white border border-slate-200 rounded-2xl px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-[#89b6d3] focus:ring-2 focus:ring-[#89b6d3]/20 transition-all",
                                                          children: [
                                                            e.jsx("option", {
                                                              value: "",
                                                              children:
                                                                "选择当前地图地点",
                                                            }),
                                                            r.map((n) =>
                                                              e.jsx(
                                                                "option",
                                                                {
                                                                  value: n.id,
                                                                  children:
                                                                    n.name,
                                                                },
                                                                n.id
                                                              )
                                                            ),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    e.jsx("div", {
                                                      className:
                                                        "mb-1.5 px-1 text-[11px] font-bold tracking-[0.08em] text-slate-400",
                                                      children: "地点备注",
                                                    }),
                                                    e.jsx("div", {
                                                      children: e.jsx("input", {
                                                        value: t.note,
                                                        onChange: (n) =>
                                                          z((c) =>
                                                            c.map((m) =>
                                                              m.id === t.id
                                                                ? {
                                                                    ...m,
                                                                    note: n
                                                                      .target
                                                                      .value,
                                                                  }
                                                                : m
                                                            )
                                                          ),
                                                        placeholder: ss(
                                                          l,
                                                          t.customIntentLabel
                                                        ),
                                                        className:
                                                          "w-full bg-white border border-slate-200 rounded-2xl px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-[#89b6d3] focus:ring-2 focus:ring-[#89b6d3]/20 transition-all",
                                                      }),
                                                    }),
                                                  ],
                                                },
                                                t.id
                                              );
                                            }),
                                            e.jsx("button", {
                                              onClick: () =>
                                                z((t) => [
                                                  ...t,
                                                  {
                                                    id: V(),
                                                    role: "custom",
                                                    intent: "custom",
                                                    customIntentLabel: "",
                                                    placeId: void 0,
                                                    note: "",
                                                  },
                                                ]),
                                              className:
                                                "w-full rounded-[20px] border border-dashed border-slate-300 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-600 hover:border-sky-300 hover:text-sky-600 transition-colors",
                                              children: "+ 新增生活锚点",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "text-[11px] text-slate-500 mt-2",
                                    children:
                                      "绑定角色在不同情境下出现的地点。",
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
                  "bg-white/80 border border-white rounded-[28px] p-4 shadow-sm space-y-3",
                children: [
                  e.jsxs("button", {
                    type: "button",
                    onClick: () => ee((t) => !t),
                    className:
                      "w-full text-left rounded-[20px] border border-slate-200 bg-white px-3 py-3",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-start justify-between gap-3",
                        children: [
                          e.jsx("div", {
                            className: "min-w-0 flex-1",
                            children: e.jsx("div", {
                              className: "text-sm font-bold text-slate-800",
                              children: "地点管理",
                            }),
                          }),
                          e.jsx(oe, {
                            className: `w-4 h-4 text-slate-400 mt-0.5 transition-transform ${
                              Te ? "rotate-180" : ""
                            }`,
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex flex-wrap items-center gap-2 mt-3 text-xs text-slate-500",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-2.5 py-1.5",
                            children: [
                              e.jsx(Kt, { className: "w-3.5 h-3.5" }),
                              p.length,
                              " 个地点",
                            ],
                          }),
                          Qe &&
                            e.jsxs("div", {
                              className:
                                "rounded-full bg-slate-50 border border-slate-200 px-2.5 py-1.5 max-w-full",
                              children: [
                                e.jsx("span", {
                                  className: "font-bold text-slate-700",
                                  children: le ? "最近编辑" : "最近地点",
                                }),
                                e.jsx("span", {
                                  className: "mx-1 text-slate-300",
                                  children: "·",
                                }),
                                e.jsx("span", { children: Qe.name }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  Te &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsx("div", {
                          className: "space-y-2",
                          children: p.map((t) => {
                            var s, r;
                            return e.jsxs(
                              "div",
                              {
                                className:
                                  "rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-start justify-between gap-3",
                                    children: [
                                      e.jsxs("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "font-bold text-slate-800",
                                            children: t.name,
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "text-xs text-slate-500 mt-1 leading-relaxed",
                                            children: t.description,
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className: "text-right",
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "text-[11px] text-slate-400 font-bold whitespace-nowrap",
                                            children: [
                                              ((s = t.positionX) == null
                                                ? void 0
                                                : s.toFixed(0)) ?? "--",
                                              " / ",
                                              ((r = t.positionY) == null
                                                ? void 0
                                                : r.toFixed(0)) ?? "--",
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "mt-2 flex items-center justify-end gap-2",
                                            children: [
                                              e.jsx("button", {
                                                onClick: () => {
                                                  if ((ee(!0), A === t.id)) {
                                                    E(null),
                                                      N === t.id && P(null);
                                                    return;
                                                  }
                                                  E(t.id), P(null), W(!1);
                                                },
                                                className:
                                                  "px-2.5 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-slate-600",
                                                children:
                                                  A === t.id ? "收起" : "编辑",
                                              }),
                                              e.jsx("button", {
                                                onClick: () => At(t.id),
                                                className:
                                                  "px-2.5 py-1.5 rounded-full bg-white border border-rose-200 text-[11px] font-bold text-rose-500",
                                                children: "删除",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  A === t.id &&
                                    e.jsxs("div", {
                                      className:
                                        "mt-3 pt-3 border-t border-slate-200 space-y-3",
                                      children: [
                                        e.jsxs("div", {
                                          className: "grid grid-cols-2 gap-2",
                                          children: [
                                            e.jsx("input", {
                                              value: t.name,
                                              onChange: (l) =>
                                                H(t.id, (i) => ({
                                                  ...i,
                                                  name: l.target.value,
                                                })),
                                              placeholder: "地点名称",
                                              className:
                                                "col-span-2 bg-white border border-slate-200 rounded-2xl px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-[#89b6d3] focus:ring-2 focus:ring-[#89b6d3]/20 transition-all",
                                            }),
                                            e.jsx("textarea", {
                                              value: t.description,
                                              onChange: (l) =>
                                                H(t.id, (i) => ({
                                                  ...i,
                                                  description: l.target.value,
                                                })),
                                              placeholder: "地点解释",
                                              className:
                                                "col-span-2 bg-white border border-slate-200 rounded-2xl px-3 py-2.5 text-sm text-slate-700 outline-none h-20 resize-none focus:border-[#89b6d3] focus:ring-2 focus:ring-[#89b6d3]/20 transition-all",
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "rounded-2xl border border-slate-200 bg-white px-3 py-2.5 transition-all focus-within:border-[#89b6d3] focus-within:ring-2 focus-within:ring-[#89b6d3]/20",
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-1",
                                                  children: "X",
                                                }),
                                                e.jsx("input", {
                                                  type: "number",
                                                  min: 0,
                                                  max: 100,
                                                  step: 0.1,
                                                  value: t.positionX ?? "",
                                                  onChange: (l) =>
                                                    H(t.id, (i) => ({
                                                      ...i,
                                                      positionX:
                                                        l.target.value === ""
                                                          ? void 0
                                                          : Math.max(
                                                              0,
                                                              Math.min(
                                                                100,
                                                                Number(
                                                                  l.target.value
                                                                )
                                                              )
                                                            ),
                                                    })),
                                                  className:
                                                    "w-full text-sm text-slate-700 outline-none",
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "rounded-2xl border border-slate-200 bg-white px-3 py-2.5 transition-all focus-within:border-[#89b6d3] focus-within:ring-2 focus-within:ring-[#89b6d3]/20",
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-1",
                                                  children: "Y",
                                                }),
                                                e.jsx("input", {
                                                  type: "number",
                                                  min: 0,
                                                  max: 100,
                                                  step: 0.1,
                                                  value: t.positionY ?? "",
                                                  onChange: (l) =>
                                                    H(t.id, (i) => ({
                                                      ...i,
                                                      positionY:
                                                        l.target.value === ""
                                                          ? void 0
                                                          : Math.max(
                                                              0,
                                                              Math.min(
                                                                100,
                                                                Number(
                                                                  l.target.value
                                                                )
                                                              )
                                                            ),
                                                    })),
                                                  className:
                                                    "w-full text-sm text-slate-700 outline-none",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsx("div", {
                                          className: "flex items-center gap-2",
                                          children: e.jsx("button", {
                                            onClick: () =>
                                              P((l) =>
                                                l === t.id ? null : t.id
                                              ),
                                            className: `px-3 py-2 rounded-full text-xs font-bold transition-all ${
                                              N === t.id
                                                ? D
                                                : "bg-white border border-slate-200 text-slate-600"
                                            }`,
                                            children:
                                              N === t.id
                                                ? "点击地图中..."
                                                : "在地图上重新定位",
                                          }),
                                        }),
                                      ],
                                    }),
                                ],
                              },
                              t.id
                            );
                          }),
                        }),
                        e.jsx("button", {
                          onClick: yt,
                          className:
                            "w-full rounded-[20px] border border-dashed border-slate-300 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-600 hover:border-sky-300 hover:text-sky-600 transition-colors",
                          children: ve ? "收起新增地点" : "+ 新增地点",
                        }),
                        ve &&
                          e.jsx("div", {
                            className:
                              "rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3",
                            children: e.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between gap-3",
                                  children: [
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("div", {
                                          className: "font-bold text-slate-800",
                                          children: "新增地点",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "text-xs text-slate-500 mt-1",
                                          children:
                                            "先填写信息，再用地图定位这个地点。",
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "text-[11px] text-slate-400 font-bold whitespace-nowrap",
                                      children: g
                                        ? `${g.x.toFixed(0)} / ${g.y.toFixed(
                                            0
                                          )}`
                                        : "-- / --",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "grid grid-cols-2 gap-2",
                                  children: [
                                    e.jsx("input", {
                                      value: Z,
                                      onChange: (t) => Ue(t.target.value),
                                      placeholder: "地点名称",
                                      className:
                                        "col-span-2 bg-white border border-slate-200 rounded-2xl px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-[#89b6d3] focus:ring-2 focus:ring-[#89b6d3]/20 transition-all",
                                    }),
                                    e.jsx("textarea", {
                                      value: Be,
                                      onChange: (t) => Ye(t.target.value),
                                      placeholder: "地点解释",
                                      className:
                                        "col-span-2 bg-white border border-slate-200 rounded-2xl px-3 py-2.5 text-sm text-slate-700 outline-none h-20 resize-none focus:border-[#89b6d3] focus:ring-2 focus:ring-[#89b6d3]/20 transition-all",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "rounded-2xl border border-slate-200 bg-white px-3 py-2.5 transition-all focus-within:border-[#89b6d3] focus-within:ring-2 focus-within:ring-[#89b6d3]/20",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-1",
                                          children: "X",
                                        }),
                                        e.jsx("input", {
                                          type: "number",
                                          min: 0,
                                          max: 100,
                                          step: 0.1,
                                          value:
                                            (g == null ? void 0 : g.x) ?? "",
                                          onChange: (t) =>
                                            te((s) => ({
                                              x:
                                                t.target.value === ""
                                                  ? 0
                                                  : Math.max(
                                                      0,
                                                      Math.min(
                                                        100,
                                                        Number(t.target.value)
                                                      )
                                                    ),
                                              y:
                                                (s == null ? void 0 : s.y) ?? 0,
                                            })),
                                          className:
                                            "w-full text-sm text-slate-700 outline-none",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "rounded-2xl border border-slate-200 bg-white px-3 py-2.5 transition-all focus-within:border-[#89b6d3] focus-within:ring-2 focus-within:ring-[#89b6d3]/20",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-1",
                                          children: "Y",
                                        }),
                                        e.jsx("input", {
                                          type: "number",
                                          min: 0,
                                          max: 100,
                                          step: 0.1,
                                          value:
                                            (g == null ? void 0 : g.y) ?? "",
                                          onChange: (t) =>
                                            te((s) => ({
                                              x:
                                                (s == null ? void 0 : s.x) ?? 0,
                                              y:
                                                t.target.value === ""
                                                  ? 0
                                                  : Math.max(
                                                      0,
                                                      Math.min(
                                                        100,
                                                        Number(t.target.value)
                                                      )
                                                    ),
                                            })),
                                          className:
                                            "w-full text-sm text-slate-700 outline-none",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className: "flex items-center gap-2",
                                  children: e.jsx("button", {
                                    onClick: () =>
                                      P((t) =>
                                        t === "__new_place__"
                                          ? null
                                          : "__new_place__"
                                      ),
                                    className: `px-3 py-2 rounded-full text-xs font-bold transition-all ${
                                      F
                                        ? D
                                        : "bg-white border border-slate-200 text-slate-600"
                                    }`,
                                    children: F
                                      ? "点击地图中..."
                                      : "在地图上定位地点",
                                  }),
                                }),
                                e.jsxs("div", {
                                  className: "flex gap-2",
                                  children: [
                                    e.jsx("button", {
                                      onClick: Dt,
                                      disabled: !g || !Z.trim(),
                                      className: `flex-1 py-3 rounded-2xl font-bold ${D} ${dt}`,
                                      children: "添加到地图",
                                    }),
                                    e.jsx("button", {
                                      onClick: Ce,
                                      className:
                                        "px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold",
                                      children: "清除点位",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        le &&
                          e.jsxs("div", {
                            className: "text-[11px] text-slate-500",
                            children: [
                              "当前正在编辑「",
                              le.name,
                              "」。点击地图上的地点标签也可以快速切换到它。",
                            ],
                          }),
                      ],
                    }),
                ],
              }),
              e.jsxs("section", {
                className:
                  "bg-white/80 border border-white rounded-[28px] p-4 shadow-sm backdrop-blur-2xl space-y-3 relative overflow-hidden",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.55),_transparent_58%)] pointer-events-none",
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => we((t) => !t),
                    className:
                      "relative w-full text-left rounded-[20px] border border-white/80 bg-white/65 backdrop-blur-xl px-4 py-3 shadow-sm",
                    children: e.jsxs("div", {
                      className: "flex items-start justify-between gap-3",
                      children: [
                        e.jsxs("div", {
                          className: "min-w-0 flex-1",
                          children: [
                            e.jsx("div", {
                              className:
                                "text-xs font-bold uppercase tracking-[0.22em] text-slate-400",
                              children: "AI 地点生成",
                            }),
                            e.jsxs("div", {
                              className:
                                "text-lg font-bold text-slate-800 mt-2",
                              children: [
                                "为 ",
                                (a == null ? void 0 : a.name) || "当前地图",
                                " 生成一批新地点",
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "text-xs text-slate-500 mt-2 leading-relaxed",
                              children:
                                "按地图描述、城市类型和参考城市生成地点草案。",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsxs("div", {
                              className:
                                "px-3 py-2 rounded-full bg-white/75 border border-white text-xs font-bold whitespace-nowrap text-slate-600 flex items-center gap-2 shadow-sm",
                              children: [
                                e.jsx(Zt, {
                                  className: "w-3.5 h-3.5 text-sky-500",
                                }),
                                "Beta",
                              ],
                            }),
                            e.jsx(oe, {
                              className: `w-4 h-4 text-slate-400 mt-0.5 transition-transform ${
                                Oe ? "rotate-180" : ""
                              }`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Oe &&
                    e.jsxs("div", {
                      className:
                        "relative space-y-3 rounded-[24px] border border-white/80 bg-white/55 backdrop-blur-xl p-3.5 shadow-sm",
                      children: [
                        e.jsx("textarea", {
                          value: Ke,
                          onChange: (t) => We(t.target.value),
                          placeholder: "告诉 AI 这张地图应该生成什么风格的地点",
                          className:
                            "w-full h-24 resize-none rounded-[20px] border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#89b6d3] focus:ring-2 focus:ring-[#89b6d3]/20 transition-all",
                        }),
                        e.jsxs("div", {
                          className: "flex gap-2",
                          children: [
                            e.jsx("button", {
                              onClick: Ct,
                              disabled: He || !a,
                              className: `flex-1 py-3 rounded-2xl font-bold ${D} ${dt}`,
                              children: He
                                ? "生成中..."
                                : `生成 ${
                                    (a == null ? void 0 : a.id) ===
                                    "map-default-city"
                                      ? "回响"
                                      : "地图"
                                  }地点草案`,
                            }),
                            B.length > 0 &&
                              e.jsx("button", {
                                onClick: Pt,
                                className:
                                  "px-4 py-3 rounded-2xl border border-sky-200 bg-sky-50/90 backdrop-blur-xl text-sky-700 font-bold hover:bg-sky-100 transition-colors",
                                children: "追加导入",
                              }),
                          ],
                        }),
                        B.length > 0 &&
                          e.jsx("div", {
                            className: "space-y-2",
                            children: B.map((t, s) =>
                              e.jsxs(
                                "div",
                                {
                                  className:
                                    "rounded-[22px] border border-slate-200 bg-white/80 px-4 py-3",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center justify-between gap-3",
                                      children: [
                                        e.jsx("div", {
                                          className: "font-bold text-slate-800",
                                          children: t.name,
                                        }),
                                        t.vibe &&
                                          e.jsx("div", {
                                            className:
                                              "text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-600",
                                            children: t.vibe,
                                          }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "text-sm text-slate-600 mt-2 leading-relaxed",
                                      children: t.description,
                                    }),
                                    t.tags.length > 0 &&
                                      e.jsx("div", {
                                        className:
                                          "flex flex-wrap gap-1.5 mt-3",
                                        children: t.tags.map((r) =>
                                          e.jsx(
                                            "span",
                                            {
                                              className:
                                                "px-2 py-1 rounded-full bg-slate-100 text-[11px] font-bold text-slate-600",
                                              children: r,
                                            },
                                            r
                                          )
                                        ),
                                      }),
                                  ],
                                },
                                `${t.name}-${s}`
                              )
                            ),
                          }),
                      ],
                    }),
                ],
              }),
            ],
          }),
      }),
    ],
  });
};
export { vs as default };
