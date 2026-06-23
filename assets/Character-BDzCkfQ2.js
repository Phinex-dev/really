import { r as d, j as e } from "./index-C41onZB-.js";
import { V as Kt } from "./types-wPl3FSgV.js";
import {
  c as ft,
  u as Br,
  _ as v,
  S as Or,
  b as z,
  P as Ee,
  V as Kr,
  $ as pt,
  y as Lr,
  z as Lt,
  a0 as zt,
  T as Dt,
  a1 as $t,
  a2 as Ft,
} from "./App-CYgIjxWH.js";
import { I as Wt } from "./ImageUpload-Cp3tPAar.js";
import { A as zr } from "./AppearanceReferenceUpload-Bzzwgotg.js";
import { g as Ie } from "./bio-D6j723LQ.js";
import { S as mt, a as xt, b as Gt } from "./buttonStyles-CgOYb1KY.js";
import { U as Dr } from "./users-CICUzMdL.js";
import { C as Vt } from "./chevron-right-C_PIujnZ.js";
import { C as Yt } from "./chevron-up-B8HwjlFZ.js";
import { C as Ht } from "./chevron-down-DsGpUXIv.js";
import { C as $r } from "./chevron-left-CTqCLzU8.js";
import "./camera-D3fQhOQq.js";
import "./triangle-alert-Bl8c-dcA.js";
import "./llmFetch-C_SjUca9.js";
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fr = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  Wr = ft("download", Fr);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gr = [
    [
      "path",
      {
        d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",
        key: "fm4g5t",
      },
    ],
    ["path", { d: "M2 13h10", key: "pgb2dq" }],
    ["path", { d: "m9 16 3-3-3-3", key: "6m91ic" }],
  ],
  Vr = ft("folder-input", Gr);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yr = [
    ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
    ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
    ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
  ],
  qt = ft("link-2", Yr),
  Hr = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
  qr = new Uint8Array([116, 69, 88, 116]),
  Qr = (() => {
    const a = new Uint32Array(256);
    for (let o = 0; o < 256; o++) {
      let l = o;
      for (let c = 0; c < 8; c++) l = l & 1 ? 3988292384 ^ (l >>> 1) : l >>> 1;
      a[o] = l >>> 0;
    }
    return a;
  })();
function Xr(a) {
  let o = 4294967295;
  for (let l = 0; l < a.length; l++) o = Qr[(o ^ a[l]) & 255] ^ (o >>> 8);
  return (o ^ 4294967295) >>> 0;
}
function tr(a) {
  if (a.length < 8) return !1;
  for (let o = 0; o < 8; o++) if (a[o] !== Hr[o]) return !1;
  return !0;
}
function rr(a, o) {
  return a[o] * 16777216 + ((a[o + 1] << 16) | (a[o + 2] << 8) | a[o + 3]);
}
function Qt(a, o, l) {
  (o[l] = (a >>> 24) & 255),
    (o[l + 1] = (a >>> 16) & 255),
    (o[l + 2] = (a >>> 8) & 255),
    (o[l + 3] = a & 255);
}
function Xt(a) {
  const o = new Uint8Array(a.length);
  for (let l = 0; l < a.length; l++) {
    const c = a.charCodeAt(l);
    if (c > 255) throw new Error(`Non-Latin-1 character at index ${l}`);
    o[l] = c;
  }
  return o;
}
function Re(a) {
  let o = "";
  for (let l = 0; l < a.length; l++) o += String.fromCharCode(a[l]);
  return o;
}
function Jr(a) {
  let o = 8;
  for (; o < a.length; ) {
    const l = rr(a, o);
    if (Re(a.subarray(o + 4, o + 8)) === "IEND") return o;
    o += 8 + l + 4;
  }
  throw new Error("IEND chunk not found");
}
function Zr(a, o, l) {
  if (!tr(a)) throw new Error("不是有效的 PNG 文件");
  if (o.length < 1 || o.length > 79)
    throw new Error("keyword 长度需在 1-79 之间");
  const c = Xt(o),
    h = Xt(l),
    x = c.length + 1 + h.length,
    b = Jr(a),
    f = 8 + x + 4,
    N = new Uint8Array(f);
  Qt(x, N, 0),
    N.set(qr, 4),
    N.set(c, 8),
    (N[8 + c.length] = 0),
    N.set(h, 8 + c.length + 1);
  const R = Xr(N.subarray(4, 8 + x));
  Qt(R, N, 8 + x);
  const p = new Uint8Array(a.length + f);
  return (
    p.set(a.subarray(0, b), 0), p.set(N, b), p.set(a.subarray(b), b + f), p
  );
}
function es(a, o) {
  if (!tr(a)) throw new Error("不是有效的 PNG 文件");
  let l = 8;
  for (; l + 12 <= a.length; ) {
    const c = rr(a, l),
      h = Re(a.subarray(l + 4, l + 8));
    if (h === "IEND") break;
    if (h === "tEXt") {
      const x = a.subarray(l + 8, l + 8 + c);
      let b = -1;
      for (let f = 0; f < x.length; f++)
        if (x[f] === 0) {
          b = f;
          break;
        }
      if (b > 0 && Re(x.subarray(0, b)) === o) return Re(x.subarray(b + 1));
    }
    l += 8 + c + 4;
  }
  return null;
}
const sr = "echoes-card",
  ar = "echoes-character-card",
  nr = 1;
function ts(a) {
  const o = new TextEncoder().encode(a);
  let l = "";
  for (let c = 0; c < o.length; c++) l += String.fromCharCode(o[c]);
  return btoa(l);
}
function rs(a) {
  const o = atob(a),
    l = new Uint8Array(o.length);
  for (let c = 0; c < o.length; c++) l[c] = o.charCodeAt(c);
  return new TextDecoder().decode(l);
}
function ss(a) {
  const o = atob(a),
    l = new Uint8Array(o.length);
  for (let c = 0; c < o.length; c++) l[c] = o.charCodeAt(c);
  return l;
}
async function as(a) {
  return new Promise((o, l) => {
    const c = new Image();
    (c.crossOrigin = "anonymous"),
      (c.onload = () => {
        try {
          const h = document.createElement("canvas");
          (h.width = c.naturalWidth || c.width),
            (h.height = c.naturalHeight || c.height);
          const x = h.getContext("2d");
          if (!x) {
            l(new Error("canvas 上下文创建失败"));
            return;
          }
          x.drawImage(c, 0, 0);
          const b = h.toDataURL("image/png"),
            f = b.indexOf("base64,");
          if (f < 0) {
            l(new Error("toDataURL 失败"));
            return;
          }
          o(ss(b.slice(f + 7)));
        } catch (h) {
          l(h);
        }
      }),
      (c.onerror = () =>
        l(new Error("头像图片加载失败(可能是外链 CORS 问题)"))),
      (c.src = a);
  });
}
function ns(a, o, l) {
  const c = new Set();
  for (const x of l)
    x.fromEntityType === "character" &&
      x.fromEntityId === a &&
      x.toEntityType === "npc" &&
      c.add(x.toEntityId),
      x.toEntityType === "character" &&
        x.toEntityId === a &&
        x.fromEntityType === "npc" &&
        c.add(x.fromEntityId);
  const h = [];
  for (const x of c) {
    const b = new Set();
    for (const f of l)
      f.fromEntityType === "npc" &&
        f.fromEntityId === x &&
        f.toEntityType === "character" &&
        f.toEntityId !== a &&
        b.add(f.toEntityId),
        f.toEntityType === "npc" &&
          f.toEntityId === x &&
          f.fromEntityType === "character" &&
          f.fromEntityId !== a &&
          b.add(f.fromEntityId);
    if (b.size === 0) {
      const f = o.find((N) => N.id === x);
      f && h.push(f);
    }
  }
  return h;
}
function os(a, o) {
  const l = o.characters.find((p) => p.id === a);
  if (!l) throw new Error("角色不存在");
  const c = new Set(l.mountedWorldBookIds || []),
    h = o.worldBooks.filter(
      (p) =>
        c.has(p.id) && (p.categoryId === "patch" || p.categoryId === "lore")
    ),
    x = new Set(h.map((p) => p.subCategoryId).filter((p) => !!p)),
    b = o.worldBookSubcategories.filter((p) => x.has(p.id)),
    f = ns(a, o.npcs, o.socialRelations),
    N = new Set(f.map((p) => p.id)),
    R = o.socialRelations.filter((p) => {
      if (
        !(
          (p.fromEntityType === "character" && p.fromEntityId === a) ||
          (p.toEntityType === "character" && p.toEntityId === a)
        )
      )
        return !1;
      const E = p.fromEntityId === a ? p.toEntityType : p.fromEntityType,
        u = p.fromEntityId === a ? p.toEntityId : p.fromEntityId;
      return E === "npc" && N.has(u);
    });
  return {
    format: ar,
    version: nr,
    exportedAt: Date.now(),
    character: l,
    petImages: { ...(o.characterPetImages[a] || {}) },
    worldBooks: h,
    worldBookSubcategories: b,
    npcs: f,
    relations: R,
  };
}
async function is(a) {
  const o = a.character.avatarUrl;
  if (!o) throw new Error("角色没有头像,无法导出");
  const l = await as(o),
    c = JSON.stringify(a),
    h = ts(c),
    x = Zr(l, sr, h);
  return new Blob([x], { type: "image/png" });
}
async function ls(a) {
  const o = await a.arrayBuffer(),
    l = new Uint8Array(o),
    c = es(l, sr);
  if (!c)
    throw new Error(
      "这张 PNG 里没有角色卡数据(可能不是 Echoes 导出的卡,或被微信等平台压缩破坏了)"
    );
  let h;
  try {
    const x = rs(c);
    h = JSON.parse(x);
  } catch {
    throw new Error("角色卡数据解析失败");
  }
  if (!cs(h)) throw new Error("角色卡格式不识别");
  return h;
}
function cs(a) {
  if (!a || typeof a != "object") return !1;
  const o = a;
  return (
    o.format === ar &&
    o.version === nr &&
    typeof o.character == "object" &&
    o.character !== null &&
    typeof o.petImages == "object" &&
    o.petImages !== null &&
    Array.isArray(o.worldBooks) &&
    Array.isArray(o.npcs) &&
    Array.isArray(o.relations) &&
    (o.worldBookSubcategories === void 0 ||
      Array.isArray(o.worldBookSubcategories))
  );
}
function me(a) {
  return `${a}-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 8)}`;
}
function ds(a) {
  const o = me("char"),
    l = new Map();
  for (const u of a.npcs) l.set(u.id, me("npc"));
  const c = new Map();
  for (const u of a.worldBooks) c.set(u.id, me("wb"));
  const h = new Map(),
    x = a.worldBookSubcategories ?? [];
  for (const u of x) h.set(u.id, me("wbsub"));
  const b = x.map((u) => ({ ...u, id: h.get(u.id) })),
    f = a.worldBooks.map((u) => ({
      ...u,
      id: c.get(u.id),
      subCategoryId: u.subCategoryId ? h.get(u.subCategoryId) : void 0,
    })),
    N = a.npcs.map((u) => ({ ...u, id: l.get(u.id) })),
    R = a.character.id,
    p = Date.now(),
    g = a.relations.map((u, T) => {
      const A = (M, J) =>
        M === "character" && J === R
          ? o
          : M === "npc" && l.has(J)
          ? l.get(J)
          : J;
      return {
        ...u,
        id: me(`rel-${T}`),
        fromEntityId: A(u.fromEntityType, u.fromEntityId),
        toEntityId: A(u.toEntityType, u.toEntityId),
        createdAt: u.createdAt ?? p,
        updatedAt: p,
      };
    });
  return {
    newCharacter: {
      ...a.character,
      id: o,
      mountedWorldBookIds: (a.character.mountedWorldBookIds || [])
        .map((u) => c.get(u))
        .filter((u) => !!u),
      mountedEmojiCategoryIds: void 0,
    },
    newNpcs: N,
    newWorldBooks: f,
    newWorldBookSubcategories: b,
    newRelations: g,
    newPetImages: { ...a.petImages },
  };
}
const $ = [
    "bg-red-400",
    "bg-blue-400",
    "bg-emerald-400",
    "bg-amber-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-sky-400",
  ],
  hs = Object.fromEntries(pt.map((a) => [a.value, a.label]));
function us() {
  const a = Intl.supportedValuesOf;
  if (!a) return [];
  try {
    return a("timeZone");
  } catch {
    return [];
  }
}
const Jt = us();
function D(a) {
  const o = a.split("/");
  return `${(o[o.length - 1] || a).replace(/_/g, " ")} (${a})`;
}
function ie(a) {
  return a
    .toLowerCase()
    .replace(/[_\s-]+/g, " ")
    .trim();
}
const Zt = ({ value: a, onChange: o, placeholder: l }) => {
  const [c, h] = d.useState(a ? D(a) : ""),
    [x, b] = d.useState(!1),
    f = d.useRef(null);
  d.useEffect(() => {
    h(a ? D(a) : "");
  }, [a]),
    d.useEffect(
      () => () => {
        f.current && clearTimeout(f.current);
      },
      []
    );
  const N = d.useMemo(() => {
      const g = ie(c);
      return Jt.map((u) => {
        const T = ie(u),
          A = ie(D(u));
        let M = 0;
        return (
          g
            ? T === g || A === g
              ? (M = 5)
              : T.startsWith(g) || A.startsWith(g)
              ? (M = 4)
              : (T.includes(g) || A.includes(g)) && (M = 3)
            : (M = 1),
          { timezone: u, score: M }
        );
      })
        .filter((u) => u.score > 0)
        .sort(
          (u, T) =>
            T.score - u.score || u.timezone.localeCompare(T.timezone, "en")
        )
        .slice(0, 12)
        .map((u) => u.timezone);
    }, [c]),
    R = (g) => {
      o(g), h(D(g)), b(!1);
    },
    p = () => {
      f.current = setTimeout(() => {
        b(!1);
        const g = c.trim();
        if (!g) {
          o(""), h("");
          return;
        }
        const E = ie(g),
          u = Jt.find((T) => {
            const A = D(T);
            return ie(T) === E || ie(A) === E;
          });
        if (u) {
          o(u), h(D(u));
          return;
        }
        h(a ? D(a) : "");
      }, 120);
    };
  return e.jsxs("div", {
    className: "relative min-w-0",
    children: [
      e.jsx("input", {
        type: "text",
        value: c,
        onChange: (g) => {
          const E = g.target.value;
          h(E), b(!0), E.trim() || o("");
        },
        onFocus: () => b(!0),
        onBlur: p,
        placeholder: l,
        autoComplete: "off",
        spellCheck: !1,
        className:
          "w-full min-w-0 bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
      }),
      x && N.length > 0
        ? e.jsx("div", {
            className:
              "absolute left-0 right-0 top-full z-20 mt-2 max-h-56 overflow-y-auto rounded-2xl border border-white/80 bg-[rgba(248,251,253,0.98)] p-1.5 shadow-[0_14px_36px_rgba(148,163,184,0.18)] backdrop-blur-xl",
            children: N.map((g) =>
              e.jsx(
                "button",
                {
                  type: "button",
                  onMouseDown: (E) => E.preventDefault(),
                  onClick: () => R(g),
                  className:
                    "block w-full rounded-xl px-3 py-2 text-left text-sm text-slate-700 transition-colors hover:bg-white/85",
                  children: e.jsx("span", {
                    className: "block break-words leading-5",
                    children: D(g),
                  }),
                },
                g
              )
            ),
          })
        : null,
    ],
  });
};
function xe(a) {
  const [o, ...l] = a.split(":"),
    c = l.join(":");
  return !c || (o !== "user" && o !== "character" && o !== "npc")
    ? null
    : { entityType: o, entityId: c };
}
function pe(a, o) {
  return [a, o].sort().join("::");
}
function le(a, o) {
  if (a === o) return a === "character";
  const l = [a, o].sort().join(":");
  return l === "character:user" || l === "npc:user" || l === "character:npc";
}
function Te(a, o) {
  return [a, o].sort().join(":") === "character:user";
}
function Se(a) {
  return a === "user" ? "用户" : a === "character" ? "角色" : "NPC";
}
function er(a, o) {
  return a === "other"
    ? `请填写具体关系，例如：上司、姐姐、前导师、委托人${
        o ? `（相对 ${o}）` : ""
      }`
    : "补充说明这段关系，例如：大学室友、父亲的旧同事、最近重新联系上...";
}
function ms(a, o) {
  return {
    id: "temp",
    name: a || "新",
    background: "",
    avatarColor: $[o % $.length],
  };
}
function xs(a, o) {
  return {
    id: "temp",
    name: a || "新",
    intro: "",
    avatarColor: $[o % $.length],
  };
}
const Rs = () => {
  const {
      setCurrentApp: a,
      activeUserId: o,
      characters: l,
      setCharacters: c,
      npcs: h,
      setNpcs: x,
      users: b,
      userContacts: f,
      setUserContacts: N,
      setCharacterContacts: R,
      socialRelations: p,
      setSocialRelations: g,
      setChats: E,
      setMessages: u,
      setKnowledge: T,
      setEntityMapBindings: A,
      setDailyPlans: M,
      setMomentPosts: J,
      setMomentComments: bt,
      minimaxApiKey: or,
      minimaxGroupId: ir,
      characterPetImages: Pe,
      setCharacterPetImages: fe,
      setActivePetCharIds: lr,
      setPetDialogues: cr,
      setCharacterDiaryEntries: dr,
      setUserDiaryAnnotations: hr,
      worldBooks: ur,
      setWorldBooks: mr,
      worldBookSubcategories: xr,
      setWorldBookSubcategories: pr,
    } = Br(),
    [_e, U] = d.useState("home"),
    [be, F] = d.useState("list"),
    [y, gt] = d.useState(null),
    [B, Ae] = d.useState(""),
    [Z, Me] = d.useState(""),
    [ge, Ue] = d.useState(""),
    [ee, Be] = d.useState(""),
    [te, Oe] = d.useState(""),
    [Ke, Le] = d.useState(""),
    [ze, De] = d.useState(),
    [$e, Fe] = d.useState(""),
    [We, Ge] = d.useState(""),
    [W, ye] = d.useState({}),
    yt = d.useRef(null),
    wt = d.useRef("neutral"),
    vt = d.useRef(null),
    [Ve, Ye] = d.useState(!1),
    [He, qe] = d.useState(!1),
    [we, G] = d.useState("list"),
    [K, Nt] = d.useState(null),
    [O, Qe] = d.useState(""),
    [re, Xe] = d.useState(""),
    [ve, Je] = d.useState(""),
    [se, Ze] = d.useState(""),
    [et, tt] = d.useState(""),
    [V, ae] = d.useState("list"),
    [rt, fr] = d.useState("character"),
    [Ne, st] = d.useState(null),
    [Y, at] = d.useState(""),
    [H, nt] = d.useState(""),
    [je, ot] = d.useState("friend"),
    [ke, it] = d.useState("friend"),
    [lt, ct] = d.useState(""),
    [dt, ht] = d.useState(""),
    [br, jt] = d.useState(!1),
    [gr, yr] = d.useState(""),
    ce = d.useRef(null);
  d.useEffect(
    () => () => {
      ce.current && clearTimeout(ce.current);
    },
    []
  );
  const j = (t) => {
      yr(t),
        jt(!0),
        ce.current && clearTimeout(ce.current),
        (ce.current = setTimeout(() => jt(!1), 2e3));
    },
    q = d.useMemo(
      () => [
        ...b.map((t) => ({
          id: t.id,
          entityType: "user",
          entityId: t.id,
          name: t.name,
          avatarUrl: t.avatarUrl,
          avatarColor: "bg-slate-400",
          intro: t.intro,
        })),
        ...l.map((t) => ({
          id: t.id,
          entityType: "character",
          entityId: t.id,
          name: t.name,
          avatarUrl: t.avatarUrl,
          avatarColor: t.avatarColor,
          intro: t.intro,
        })),
        ...h.map((t) => ({
          id: t.id,
          entityType: "npc",
          entityId: t.id,
          name: t.name,
          avatarUrl: t.avatarUrl,
          avatarColor: t.avatarColor,
          intro: t.intro,
        })),
      ],
      [l, h, b]
    ),
    L = d.useMemo(
      () => new Map(q.map((t) => [v(t.entityType, t.entityId), t])),
      [q]
    );
  d.useMemo(() => {
    const t = new Map();
    return (
      p.forEach((r) => {
        if (!le(r.fromEntityType, r.toEntityType)) return;
        const s = v(r.fromEntityType, r.fromEntityId),
          n = v(r.toEntityType, r.toEntityId),
          i = pe(s, n),
          m = i.split("::"),
          w = L.get(m[0]),
          I = L.get(m[1]);
        if (!w || !I) return;
        const S = t.get(i) || { pairKey: i, leftEntity: w, rightEntity: I };
        s === m[0] && n === m[1] ? (S.leftToRight = r) : (S.rightToLeft = r),
          t.set(i, S);
      }),
      [...t.values()].sort((r, s) => {
        const n = `${r.leftEntity.name}-${r.rightEntity.name}`,
          i = `${s.leftEntity.name}-${s.rightEntity.name}`;
        return n.localeCompare(i, "zh-CN");
      })
    );
  }, [L, p]);
  const kt = d.useMemo(() => q.filter((t) => t.entityType === rt), [q, rt]),
    wr = d.useMemo(() => {
      const t = {};
      return (
        p.forEach((r) => {
          if (!le(r.fromEntityType, r.toEntityType)) return;
          const s = v(r.fromEntityType, r.fromEntityId);
          t[s] = (t[s] || 0) + 1;
        }),
        t
      );
    }, [p]),
    P = (Ne && L.get(Ne)) || null,
    Ct = d.useMemo(() => {
      if (!P) return [];
      const t = [];
      return (
        p
          .filter(
            (r) =>
              r.fromEntityType === P.entityType &&
              r.fromEntityId === P.entityId &&
              le(r.fromEntityType, r.toEntityType)
          )
          .forEach((r) => {
            const s = L.get(v(r.toEntityType, r.toEntityId));
            if (!s) return;
            const n = p.find(
              (i) =>
                i.fromEntityType === r.toEntityType &&
                i.fromEntityId === r.toEntityId &&
                i.toEntityType === r.fromEntityType &&
                i.toEntityId === r.fromEntityId
            );
            t.push({
              pairKey: pe(
                v(r.fromEntityType, r.fromEntityId),
                v(r.toEntityType, r.toEntityId)
              ),
              counterpart: s,
              forwardRelation: r,
              reverseRelation: n,
            });
          }),
        t.sort((r, s) =>
          r.counterpart.name.localeCompare(s.counterpart.name, "zh-CN")
        )
      );
    }, [L, P, p]),
    Et = d.useMemo(() => {
      const t = new Set();
      return (
        Object.entries(f).forEach(([r, s]) => {
          s.forEach((n) => {
            t.add(pe(v("user", r), v("character", n)));
          });
        }),
        t
      );
    }, [f]),
    de = () => {
      gt(null),
        Ae(""),
        Me(""),
        Ue(""),
        Be(""),
        Oe(""),
        Le(""),
        De(void 0),
        Fe(""),
        Ge(""),
        ye({});
    },
    he = () => {
      Nt(null), Qe(""), Xe(""), Je(""), Ze(""), tt("");
    },
    It = (t) => {
      const r = b[0]
          ? v("user", b[0].id)
          : l[0]
          ? v("character", l[0].id)
          : h[0]
          ? v("npc", h[0].id)
          : "",
        s = xe(r),
        n = s
          ? q.find(
              (i) =>
                v(i.entityType, i.entityId) !== r &&
                le(s.entityType, i.entityType)
            )
          : void 0;
      at(r),
        nt(n ? v(n.entityType, n.entityId) : ""),
        ot("friend"),
        it("friend"),
        ct(""),
        ht("");
    },
    vr = () => {
      de(), Ye(!1), qe(!1), U("characters"), F("add");
    },
    Nr = (t) => {
      gt(t.id),
        Ae(t.name),
        Me(t.gender || ""),
        Ue(t.timezone || ""),
        Be(t.intro || ""),
        Oe(t.background || ""),
        Le(t.imagePrompt || ""),
        De(t.imageReference),
        Fe(t.avatarUrl || ""),
        Ge(t.voiceId || ""),
        ye(t.portraits || {}),
        Ye(!1),
        qe(!1),
        U("characters"),
        F("edit");
    },
    jr = () => {
      he(), U("npcs"), G("add");
    },
    kr = (t) => {
      Nt(t.id),
        Qe(t.name),
        Xe(t.gender || ""),
        Je(t.timezone || ""),
        Ze(t.intro || ""),
        tt(t.avatarUrl || ""),
        U("npcs"),
        G("edit");
    },
    Cr = (t) => {
      It(), U("relations"), ae("add");
    },
    Er = (t) => {
      var r, s, n, i;
      at(v(t.leftEntity.entityType, t.leftEntity.entityId)),
        nt(v(t.rightEntity.entityType, t.rightEntity.entityId)),
        ot(((r = t.leftToRight) == null ? void 0 : r.relationKind) || "friend"),
        it(((s = t.rightToLeft) == null ? void 0 : s.relationKind) || "friend"),
        ct(((n = t.leftToRight) == null ? void 0 : n.note) || ""),
        ht(((i = t.rightToLeft) == null ? void 0 : i.note) || ""),
        U("relations"),
        ae("edit");
    },
    ut = () => {
      U("home"), F("list"), G("list"), ae("list"), de(), he(), It();
    },
    Tt = () => {
      if (be === "list") {
        ut();
        return;
      }
      F("list"), de();
    },
    St = () => {
      if (we === "list") {
        ut();
        return;
      }
      G("list"), he();
    },
    Rt = () => {
      if (V === "list" && !Ne) {
        ut();
        return;
      }
      if (V === "list" && Ne) {
        st(null);
        return;
      }
      ae("list");
    },
    Ir = () => {
      if (B.trim()) {
        if (be === "add") {
          const t = {
            id: Math.random().toString(36).substring(7),
            name: B,
            gender: Z,
            timezone: ge.trim() || void 0,
            intro: ee,
            background: te,
            imagePrompt: Ke.trim() || void 0,
            imageReference: ze,
            avatarColor: $[l.length % $.length],
            avatarUrl: $e || void 0,
            voiceId: We || void 0,
            portraits: Object.keys(W).length > 0 ? W : void 0,
          };
          c((n) => [...n, t]);
          const r = t.id;
          Ie({ name: B, gender: Z, intro: ee, background: te })
            .then((n) =>
              c((i) => i.map((m) => (m.id === r ? { ...m, bio: n } : m)))
            )
            .catch(() => {});
          const s = {
            id: Math.random().toString(36).substring(7),
            name: t.name,
            memberIds: [o, t.id],
            isGroup: !1,
            lastRecapTimestamp: 0,
            lastReadTimestamp: 0,
          };
          E((n) => [...n, s]), j("档案创建完成，角色已就绪");
        } else if (y) {
          const t = l.find((s) => s.id === y),
            r =
              t &&
              (t.name !== B ||
                t.gender !== Z ||
                t.timezone !== (ge.trim() || void 0) ||
                t.intro !== ee ||
                t.background !== te);
          if (
            (c((s) =>
              s.map((n) =>
                n.id === y
                  ? {
                      ...n,
                      name: B,
                      gender: Z,
                      timezone: ge.trim() || void 0,
                      intro: ee,
                      background: te,
                      imagePrompt: Ke.trim() || void 0,
                      imageReference: ze,
                      avatarUrl: $e || void 0,
                      voiceId: We || void 0,
                      portraits: Object.keys(W).length > 0 ? W : void 0,
                    }
                  : n
              )
            ),
            r)
          ) {
            const s = y;
            Ie({ name: B, gender: Z, intro: ee, background: te })
              .then((n) =>
                c((i) => i.map((m) => (m.id === s ? { ...m, bio: n } : m)))
              )
              .catch(() => {});
          }
          E((s) =>
            s.map((n) =>
              !n.isGroup && n.memberIds.includes(y) ? { ...n, name: B } : n
            )
          ),
            j("档案同步完成，角色已就绪");
        }
        F("list"), de();
      }
    },
    Tr = () => {
      if (
        !y ||
        !window.confirm(
          "确认注销这个角色档案吗？TA 的动态和相关关系也会一起移除。"
        )
      )
        return;
      const r = y;
      c((s) => s.filter((n) => n.id !== r)),
        N((s) => {
          const n = {};
          return (
            Object.entries(s).forEach(([i, m]) => {
              n[i] = m.filter((w) => w !== r);
            }),
            n
          );
        }),
        R((s) => $t(s, r)),
        g((s) => Ft(s, "character", r)),
        E((s) => {
          const n = [];
          return (
            s.forEach((i) => {
              if (i.isGroup) {
                i.memberIds.includes(r)
                  ? n.push({
                      ...i,
                      memberIds: i.memberIds.filter((m) => m !== r),
                    })
                  : n.push(i);
                return;
              }
              i.memberIds.includes(r) || n.push(i);
            }),
            n
          );
        }),
        u((s) => s.filter((n) => n.senderId !== r)),
        T((s) =>
          s.map((n) => ({
            ...n,
            perceivers: n.perceivers.filter((i) => i !== r),
          }))
        ),
        A((s) =>
          s.filter((n) => !(n.entityType === "character" && n.entityId === r))
        ),
        M((s) =>
          s.filter((n) => !(n.entityType === "character" && n.entityId === r))
        ),
        J((s) =>
          s
            .filter((n) => n.authorId !== r)
            .map((n) => {
              var i;
              return {
                ...n,
                authorizedReaderIds:
                  (i = n.authorizedReaderIds) == null
                    ? void 0
                    : i.filter((m) => m !== r),
              };
            })
        ),
        bt((s) => s.filter((n) => n.authorId !== r)),
        fe((s) => {
          const n = { ...s };
          return delete n[r], n;
        }),
        lr((s) => {
          const n = {};
          return (
            Object.entries(s).forEach(([i, m]) => {
              n[i] = m.filter((w) => w !== r);
            }),
            n
          );
        }),
        cr((s) => {
          const n = { ...s };
          return (
            Object.keys(n).forEach((i) => {
              (i === r || i.endsWith(`:${r}`)) && delete n[i];
            }),
            n
          );
        }),
        dr((s) => s.filter((n) => n.characterId !== r)),
        hr((s) => s.filter((n) => n.characterId !== r)),
        j("角色档案已注销"),
        F("list"),
        de();
    },
    Sr = async () => {
      if (!y) return;
      const t = l.find((r) => r.id === y);
      if (t) {
        if (!t.avatarUrl || !t.avatarUrl.startsWith("data:")) {
          j("请先上传本地头像后再导出");
          return;
        }
        try {
          const r = os(y, {
              characters: l,
              npcs: h,
              worldBooks: ur,
              worldBookSubcategories: xr,
              socialRelations: p,
              characterPetImages: Pe,
            }),
            s = await is(r),
            n = s.size / (1024 * 1024),
            i = URL.createObjectURL(s),
            m = document.createElement("a");
          (m.href = i),
            (m.download = `${t.name || "character"}-card.png`),
            document.body.appendChild(m),
            m.click(),
            document.body.removeChild(m),
            setTimeout(() => URL.revokeObjectURL(i), 1e3),
            n > 5
              ? j(
                  `已导出 ${n.toFixed(
                    1
                  )}MB,请用「原图/文件」分享,聊天图压缩会损坏数据`
                )
              : j("角色卡已导出");
        } catch (r) {
          j(`导出失败:${r instanceof Error ? r.message : "未知错误"}`);
        }
      }
    },
    Rr = async (t) => {
      try {
        const r = await ls(t),
          s = ds(r);
        c((n) => [...n, s.newCharacter]),
          s.newNpcs.length && x((n) => [...n, ...s.newNpcs]),
          s.newWorldBookSubcategories.length &&
            pr((n) => [...n, ...s.newWorldBookSubcategories]),
          s.newWorldBooks.length && mr((n) => [...n, ...s.newWorldBooks]),
          s.newRelations.length && g((n) => [...n, ...s.newRelations]),
          Object.keys(s.newPetImages).length &&
            fe((n) => ({ ...n, [s.newCharacter.id]: s.newPetImages })),
          j(`已导入「${s.newCharacter.name}」`);
      } catch (r) {
        j(`导入失败:${r instanceof Error ? r.message : "未知错误"}`);
      }
    },
    Pr = () => {
      if (O.trim()) {
        if (we === "add") {
          const t = {
            id: Math.random().toString(36).substring(7),
            name: O,
            gender: re,
            timezone: ve.trim() || void 0,
            intro: se,
            avatarColor: $[h.length % $.length],
            avatarUrl: et || void 0,
          };
          x((s) => [...s, t]);
          const r = t.id;
          Ie({ name: O, gender: re, intro: se })
            .then((s) =>
              x((n) => n.map((i) => (i.id === r ? { ...i, bio: s } : i)))
            )
            .catch(() => {}),
            j("NPC 档案已创建");
        } else if (K) {
          const t = h.find((s) => s.id === K),
            r =
              t &&
              (t.name !== O ||
                t.gender !== re ||
                t.timezone !== (ve.trim() || void 0) ||
                t.intro !== se);
          if (
            (x((s) =>
              s.map((n) =>
                n.id === K
                  ? {
                      ...n,
                      name: O,
                      gender: re,
                      timezone: ve.trim() || void 0,
                      intro: se,
                      avatarUrl: et || void 0,
                    }
                  : n
              )
            ),
            r)
          ) {
            const s = K;
            Ie({ name: O, gender: re, intro: se })
              .then((n) =>
                x((i) => i.map((m) => (m.id === s ? { ...m, bio: n } : m)))
              )
              .catch(() => {});
          }
          j("NPC 档案已更新");
        }
        G("list"), he();
      }
    },
    _r = () => {
      if (
        !K ||
        !window.confirm(
          "确认删除这个 NPC 档案吗？TA 的评论和相关关系也会一起移除。"
        )
      )
        return;
      const r = K;
      x((s) => s.filter((n) => n.id !== r)),
        g((s) => Ft(s, "npc", r)),
        R((s) => $t(s, r)),
        bt((s) => s.filter((n) => n.authorId !== r)),
        j("NPC 档案已删除"),
        G("list"),
        he();
    },
    Ar = () => {
      const t = xe(Y),
        r = xe(H);
      if (
        !t ||
        !r ||
        t.entityId === r.entityId ||
        !le(t.entityType, r.entityType)
      )
        return;
      const s = Te(t.entityType, r.entityType),
        n = pe(Y, H),
        i = Et.has(n);
      if (s && !i) {
        j(
          "用户与角色的关系请先在通讯录添加联系人，再来档案馆管理关系类型和备注"
        );
        return;
      }
      if (je === "other" && !lt.trim()) {
        j("左侧关系选了自定义，请在备注里写清具体关系");
        return;
      }
      if (ke === "other" && !dt.trim()) {
        j("右侧关系选了自定义，请在备注里写清具体关系");
        return;
      }
      g((m) => {
        let w = zt(m, {
          fromEntityType: t.entityType,
          fromEntityId: t.entityId,
          toEntityType: r.entityType,
          toEntityId: r.entityId,
          relationKind: je,
          note: lt.trim(),
        });
        return (
          (w = zt(w, {
            fromEntityType: r.entityType,
            fromEntityId: r.entityId,
            toEntityType: t.entityType,
            toEntityId: t.entityId,
            relationKind: ke,
            note: dt.trim(),
          })),
          w
        );
      }),
        j(V === "add" ? "关系已建立" : "关系已更新"),
        ae("list");
    },
    Mr = (t) => {
      if (Te(t.leftEntity.entityType, t.rightEntity.entityType)) {
        j("用户与角色的断开请前往通讯录删除联系人");
        return;
      }
      window.confirm(
        `确认移除 ${t.leftEntity.name} 与 ${t.rightEntity.name} 的关系记录吗？`
      ) &&
        (R((s) => Lr(s, t.leftEntity.entityId, t.rightEntity.entityId)),
        g((s) => {
          let n = Lt(
            s,
            t.leftEntity.entityType,
            t.leftEntity.entityId,
            t.rightEntity.entityType,
            t.rightEntity.entityId
          );
          return (
            (n = Lt(
              n,
              t.rightEntity.entityType,
              t.rightEntity.entityId,
              t.leftEntity.entityType,
              t.leftEntity.entityId
            )),
            n
          );
        }),
        j("关系已移除"));
    },
    Q = (t, r, s, n) =>
      e.jsxs("div", {
        className:
          "safe-top pb-4 px-4 bg-white/10 backdrop-blur-md border-b border-white/40 flex items-center justify-between sticky top-0 z-10",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-2 min-w-0",
            children: [
              e.jsx("button", {
                onClick: r,
                className:
                  "echoes-character-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                children: e.jsx($r, { className: "w-6 h-6" }),
              }),
              e.jsxs("div", {
                className: "min-w-0",
                children: [
                  e.jsx("h1", {
                    className: "text-2xl font-bold text-slate-800",
                    children: t,
                  }),
                  null,
                ],
              }),
            ],
          }),
          n,
        ],
      }),
    X = () =>
      br
        ? e.jsx("div", {
            className:
              "fixed top-24 inset-x-4 z-[999] flex justify-center pointer-events-none",
            children: e.jsx("div", {
              className:
                "px-6 py-3 bg-white/60 backdrop-blur-xl border border-white/60 shadow-2xl rounded-2xl max-w-full",
              style: { animation: "charToastSlideIn 0.3s ease-out" },
              children: e.jsx("p", {
                className:
                  "text-sm font-medium text-slate-800 text-center leading-relaxed break-words",
                children: gr,
              }),
            }),
          })
        : null;
  if (_e === "home")
    return e.jsxs("div", {
      className:
        "echoes-page echoes-page-character h-full flex flex-col backdrop-blur-2xl relative",
      children: [
        Q("档案馆", () => a("home")),
        e.jsx("div", {
          className: "flex-1 overflow-y-auto px-5 pb-16 pt-6 space-y-4",
          children: [
            {
              key: "characters",
              title: "角色档案",
              description: "管理完整角色设定、头像与背景。",
              icon: Or,
              onClick: () => {
                U("characters"), F("list");
              },
            },
            {
              key: "npcs",
              title: "NPC 档案",
              description: "只保留姓名、头像、性别与基本介绍。",
              icon: Dr,
              onClick: () => {
                U("npcs"), G("list");
              },
            },
            {
              key: "relations",
              title: "关系管理",
              description: "维护角色、用户与 NPC 之间的关系类型和备注。",
              icon: qt,
              onClick: () => {
                U("relations"), ae("list");
              },
            },
          ].map((t) => {
            const r = t.icon;
            return e.jsx(
              "button",
              {
                onClick: t.onClick,
                className:
                  "w-full rounded-[26px] border border-white/70 bg-white/52 px-5 py-5 text-left shadow-[0_12px_28px_rgba(148,163,184,0.1)] transition-all hover:bg-white/66 hover:shadow-[0_18px_36px_rgba(148,163,184,0.14)]",
                children: e.jsxs("div", {
                  className: "flex items-center gap-4",
                  children: [
                    e.jsx("div", {
                      className:
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[rgba(242,247,251,0.96)] border border-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]",
                      children: e.jsx(r, {
                        className: "w-5 h-5 text-[#7c97ab]",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        e.jsx("h2", {
                          className:
                            "text-[16px] font-semibold leading-none text-slate-600",
                          children: t.title,
                        }),
                        e.jsx("p", {
                          className:
                            "mt-1.5 text-[12px] leading-5 text-slate-400",
                          children: t.description,
                        }),
                      ],
                    }),
                    e.jsx(Vt, { className: "w-5 h-5 shrink-0 text-[#b2c0cd]" }),
                  ],
                }),
              },
              t.key
            );
          }),
        }),
        X(),
        e.jsx("style", {
          children: `
          @keyframes charToastSlideIn {
            0% { opacity: 0; transform: translateY(-12px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `,
        }),
      ],
    });
  if (_e === "characters") {
    if (be === "list")
      return e.jsxs("div", {
        className:
          "echoes-page echoes-page-character h-full flex flex-col backdrop-blur-2xl relative",
        children: [
          Q(
            "角色档案",
            Tt,
            void 0,
            e.jsx("button", {
              onClick: () => {
                var i;
                return (i = vt.current) == null ? void 0 : i.click();
              },
              className: Gt,
              title: "导入角色卡",
              children: e.jsx(Vr, { className: "w-5 h-5" }),
            })
          ),
          e.jsx("input", {
            ref: vt,
            type: "file",
            accept: "image/png",
            className: "hidden",
            onChange: (i) => {
              var w;
              const m = (w = i.target.files) == null ? void 0 : w[0];
              m && Rr(m), (i.target.value = "");
            },
          }),
          e.jsx("div", {
            className:
              "flex-1 overflow-y-auto overscroll-y-contain px-6 pb-20 pt-6",
            style: { WebkitOverflowScrolling: "touch" },
            children: e.jsxs("div", {
              className: "grid grid-cols-3 gap-y-8 gap-x-4",
              children: [
                l.map((i) =>
                  e.jsxs(
                    "div",
                    {
                      onClick: () => Nr(i),
                      className:
                        "echoes-character-card flex flex-col items-center gap-3 cursor-pointer group",
                      children: [
                        e.jsx(z, {
                          char: i,
                          className:
                            "w-20 h-20 text-3xl shadow-md group-hover:scale-105 transition-transform duration-300 border-2 border-white",
                        }),
                        e.jsx("span", {
                          className:
                            "text-sm font-medium text-slate-700 text-center leading-none",
                          children: i.name,
                        }),
                      ],
                    },
                    i.id
                  )
                ),
                e.jsxs("button", {
                  onClick: vr,
                  className:
                    "echoes-character-add-btn flex flex-col items-center gap-3 cursor-pointer group",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-20 h-20 rounded-full bg-white/30 border-2 border-dashed border-white/60 flex items-center justify-center group-hover:border-sky-400 group-hover:bg-sky-50/50 transition-all",
                      children: e.jsx(Ee, {
                        className:
                          "w-8 h-8 text-slate-400 group-hover:text-sky-500",
                      }),
                    }),
                    e.jsx("span", {
                      className:
                        "text-sm font-medium text-slate-400 group-hover:text-sky-500 leading-none",
                      children: "新建",
                    }),
                  ],
                }),
              ],
            }),
          }),
          X(),
        ],
      });
    const t = y ? l.find((i) => i.id === y) : null,
      r = be === "add",
      s = Kt.reduce((i, m) => i + (W[m] ? 1 : 0), 0),
      n = y ? Object.values(Pe[y] || {}).filter(Boolean).length : 0;
    return e.jsxs("div", {
      className:
        "echoes-page echoes-page-character h-full flex flex-col backdrop-blur-2xl relative",
      children: [
        Q(
          r ? "新建角色档案" : "角色档案配置",
          Tt,
          void 0,
          r
            ? null
            : e.jsx("button", {
                onClick: Tr,
                className:
                  "echoes-character-delete-btn text-red-500 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors",
                children: e.jsx(Dt, { className: "w-5 h-5" }),
              })
        ),
        e.jsx("div", {
          className: "flex-1 overflow-y-auto",
          children: e.jsxs("div", {
            className: "p-6 space-y-6",
            children: [
              e.jsx("div", {
                className: "flex justify-center",
                children: e.jsx(Wt, {
                  avatarUrl: $e,
                  onUpload: Fe,
                  fallbackChar: t || ms(B, l.length),
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
                        value: B,
                        onChange: (i) => Ae(i.target.value),
                        placeholder: "给角色起个名字",
                        className:
                          "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
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
                        value: Z,
                        onChange: (i) => Me(i.target.value),
                        placeholder: "自由填写...",
                        className:
                          "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "min-w-0",
                    children: [
                      e.jsx("label", {
                        className:
                          "block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1",
                        children: "时区",
                      }),
                      e.jsx(Zt, {
                        value: ge,
                        onChange: Ue,
                        placeholder: "例如 America/New_York",
                      }),
                      e.jsx("p", {
                        className:
                          "mt-1 px-1 text-[10px] leading-4 text-slate-400 break-all",
                        children:
                          "留空则跟随用户本地时间，填写时使用 IANA 时区字符串。",
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
                        value: ee,
                        onChange: (i) => Be(i.target.value),
                        className:
                          "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                        placeholder: "详细描述角色的性格和说话方式...",
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
                        value: te,
                        onChange: (i) => Oe(i.target.value),
                        className:
                          "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                        placeholder: "角色的背景故事、在世界中的定位...",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("label", {
                        className:
                          "block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1",
                        children: "生图外貌提示词",
                      }),
                      e.jsx("textarea", {
                        value: Ke,
                        onChange: (i) => Le(i.target.value),
                        className:
                          "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                        placeholder:
                          "例如：黑色长发，琥珀色眼睛，左眼下有一颗小痣，常穿白衬衫",
                      }),
                      e.jsx("p", {
                        className:
                          "text-[10px] text-slate-400 mt-1 ml-1 leading-4",
                        children:
                          "角色发虚拟照片时，如果描述里写“自拍 / 我的照片 / 对方照片 / 合照”等关键词，会自动拼接对应人物外貌。",
                      }),
                    ],
                  }),
                  e.jsx(zr, { value: ze, onChange: De }),
                  or && ir
                    ? e.jsxs("div", {
                        children: [
                          e.jsx("label", {
                            className:
                              "block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1",
                            children: "语音 ID (MiniMax)",
                          }),
                          e.jsx("input", {
                            type: "text",
                            value: We,
                            onChange: (i) => Ge(i.target.value),
                            placeholder:
                              "例如 male-qn-qingse、female-shaonv 等",
                            className:
                              "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                          }),
                          e.jsx("p", {
                            className: "text-[10px] text-slate-400 mt-1 ml-1",
                            children:
                              "填写 MiniMax 语音 ID，可在 MiniMax 平台查看可用声音列表",
                          }),
                        ],
                      })
                    : e.jsx("div", {
                        className:
                          "bg-white/30 border border-white/50 rounded-2xl p-3",
                        children: e.jsx("p", {
                          className: "text-xs text-slate-400",
                          children:
                            "🎙️ 语音功能需先在「设置 → 语音功能」中配置 MiniMax API Key 和 Group ID",
                        }),
                      }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "rounded-3xl border border-white/55 bg-white/25 shadow-sm backdrop-blur-md overflow-hidden",
                children: [
                  e.jsxs("button", {
                    type: "button",
                    onClick: () => Ye((i) => !i),
                    className:
                      "w-full flex items-start justify-between gap-4 px-4 py-3.5 text-left transition-colors hover:bg-white/20",
                    children: [
                      e.jsxs("div", {
                        className: "min-w-0",
                        children: [
                          e.jsx("label", {
                            className:
                              "block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 ml-1 pointer-events-none",
                            children: "视频通话立绘",
                          }),
                          e.jsxs("p", {
                            className:
                              "text-[10px] leading-4 text-slate-400 ml-1",
                            children: [
                              "为不同情绪上传立绘图片，推荐 9:16 竖屏比例。已上传 ",
                              s,
                              "/8 张。",
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "shrink-0 flex items-center gap-2 pt-0.5 text-slate-400",
                        children: [
                          e.jsx("span", {
                            className: "text-[10px] font-medium",
                            children: Ve ? "收起" : "展开",
                          }),
                          Ve
                            ? e.jsx(Yt, { className: "w-4 h-4" })
                            : e.jsx(Ht, { className: "w-4 h-4" }),
                        ],
                      }),
                    ],
                  }),
                  Ve &&
                    e.jsx("div", {
                      className: "px-4 pb-4 pt-1 border-t border-white/45",
                      children: e.jsx("div", {
                        className: "grid grid-cols-4 gap-3",
                        children: Kt.map((i) => {
                          const m = {
                              neutral: "平静",
                              happy: "开心",
                              sad: "难过",
                              angry: "生气",
                              shy: "害羞",
                              surprised: "惊讶",
                              tender: "温柔",
                              thinking: "思考",
                            },
                            w = !!W[i];
                          return e.jsxs(
                            "div",
                            {
                              className: "flex flex-col items-center gap-1.5",
                              children: [
                                e.jsx("div", {
                                  onClick: () => {
                                    var I;
                                    (wt.current = i),
                                      (I = yt.current) == null || I.click();
                                  },
                                  className: `w-full aspect-[3/4] rounded-xl border-2 border-dashed flex items-center justify-center cursor-pointer transition-all overflow-hidden ${
                                    w
                                      ? "border-emerald-300/50 bg-emerald-50/30"
                                      : "border-white/50 bg-white/20 hover:border-[#89b6d3]/40"
                                  }`,
                                  children: w
                                    ? e.jsx("img", {
                                        src: W[i],
                                        className: "w-full h-full object-cover",
                                        alt: i,
                                      })
                                    : e.jsx(Ee, {
                                        className: "w-5 h-5 text-slate-400",
                                      }),
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[10px] text-slate-500 font-medium",
                                  children: m[i],
                                }),
                                w &&
                                  e.jsx("button", {
                                    onClick: (I) => {
                                      I.stopPropagation(),
                                        ye((S) => {
                                          const _ = { ...S };
                                          return delete _[i], _;
                                        });
                                    },
                                    className:
                                      "text-[9px] text-red-400 hover:text-red-500",
                                    children: "移除",
                                  }),
                              ],
                            },
                            i
                          );
                        }),
                      }),
                    }),
                  e.jsx("input", {
                    ref: yt,
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: (i) => {
                      var I;
                      const m = (I = i.target.files) == null ? void 0 : I[0];
                      if (!m) return;
                      const w = new FileReader();
                      (w.onload = (S) => {
                        var ue;
                        const _ = (ue = S.target) == null ? void 0 : ue.result;
                        _ && ye((Ce) => ({ ...Ce, [wt.current]: _ }));
                      }),
                        w.readAsDataURL(m),
                        (i.target.value = "");
                    },
                  }),
                ],
              }),
              !r &&
                y &&
                e.jsxs("div", {
                  className:
                    "rounded-3xl border border-white/55 bg-white/25 shadow-sm backdrop-blur-md overflow-hidden",
                  children: [
                    e.jsxs("button", {
                      type: "button",
                      onClick: () => qe((i) => !i),
                      className:
                        "w-full flex items-start justify-between gap-4 px-4 py-3.5 text-left transition-colors hover:bg-white/20",
                      children: [
                        e.jsxs("div", {
                          className: "min-w-0",
                          children: [
                            e.jsx("label", {
                              className:
                                "block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 ml-1 pointer-events-none",
                              children: "桌宠图片",
                            }),
                            e.jsxs("p", {
                              className:
                                "text-[10px] leading-4 text-slate-400 ml-1",
                              children: [
                                "上传桌宠各状态的像素图。已上传 ",
                                n,
                                "/7 张，至少需要「站立」。",
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "shrink-0 flex items-center gap-2 pt-0.5 text-slate-400",
                          children: [
                            e.jsx("span", {
                              className: "text-[10px] font-medium",
                              children: He ? "收起" : "展开",
                            }),
                            He
                              ? e.jsx(Yt, { className: "w-4 h-4" })
                              : e.jsx(Ht, { className: "w-4 h-4" }),
                          ],
                        }),
                      ],
                    }),
                    He &&
                      e.jsx("div", {
                        className: "px-4 pb-4 pt-1 border-t border-white/45",
                        children: e.jsx("div", {
                          className: "space-y-2",
                          children: [
                            { key: "idle", label: "站立", required: !0 },
                            { key: "walk1", label: "走路 1" },
                            { key: "walk2", label: "走路 2" },
                            { key: "held", label: "拎起" },
                            { key: "poked", label: "被戳" },
                            { key: "climb", label: "爬墙" },
                            { key: "fall", label: "坠落" },
                          ].map(({ key: i, label: m, required: w }) => {
                            const I = Pe[y] || {};
                            return e.jsxs(
                              "div",
                              {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-10 h-10 rounded-lg border border-white/80 bg-white/50 flex items-center justify-center overflow-hidden shrink-0",
                                    children: I[i]
                                      ? e.jsx("img", {
                                          src: I[i],
                                          alt: m,
                                          className:
                                            "w-full h-full object-contain",
                                          style: {
                                            imageRendering: "pixelated",
                                          },
                                        })
                                      : e.jsx("span", {
                                          className:
                                            "text-[10px] text-slate-400",
                                          children: "空",
                                        }),
                                  }),
                                  e.jsx("div", {
                                    className: "flex-1 min-w-0",
                                    children: e.jsxs("span", {
                                      className:
                                        "text-xs text-slate-600 font-medium",
                                      children: [m, w ? " *" : ""],
                                    }),
                                  }),
                                  e.jsxs("label", {
                                    className:
                                      "text-[11px] text-[#6f8faa] font-bold cursor-pointer hover:underline",
                                    children: [
                                      "上传",
                                      e.jsx("input", {
                                        type: "file",
                                        accept: "image/*",
                                        className: "hidden",
                                        onChange: (S) => {
                                          var Ce;
                                          const _ =
                                            (Ce = S.target.files) == null
                                              ? void 0
                                              : Ce[0];
                                          if (!_) return;
                                          const ue = new FileReader();
                                          (ue.onload = (Ur) => {
                                            var Bt;
                                            const Ut =
                                              (Bt = Ur.target) == null
                                                ? void 0
                                                : Bt.result;
                                            Ut &&
                                              y &&
                                              fe((Ot) => ({
                                                ...Ot,
                                                [y]: {
                                                  ...(Ot[y] || {}),
                                                  [i]: Ut,
                                                },
                                              }));
                                          }),
                                            ue.readAsDataURL(_),
                                            (S.target.value = "");
                                        },
                                      }),
                                    ],
                                  }),
                                  I[i] &&
                                    e.jsx("button", {
                                      onClick: () => {
                                        y &&
                                          fe((S) => {
                                            const _ = { ...(S[y] || {}) };
                                            return (
                                              delete _[i], { ...S, [y]: _ }
                                            );
                                          });
                                      },
                                      className:
                                        "text-[9px] text-red-400 hover:text-red-500",
                                      children: "移除",
                                    }),
                                ],
                              },
                              i
                            );
                          }),
                        }),
                      }),
                  ],
                }),
              e.jsxs("div", {
                className: "pt-4 pb-10 space-y-3",
                children: [
                  e.jsx("button", {
                    onClick: Ir,
                    disabled: !B.trim(),
                    className: `echoes-character-save-btn w-full rounded-2xl py-4 font-bold ${mt} ${xt}`,
                    children: r ? "创建角色档案" : "更新角色档案",
                  }),
                  !r &&
                    e.jsxs("div", {
                      className: "space-y-1.5",
                      children: [
                        e.jsxs("button", {
                          onClick: Sr,
                          className:
                            "w-full rounded-xl py-2.5 text-sm font-medium text-slate-600 bg-white/40 hover:bg-white/60 border border-white/60 backdrop-blur-md flex items-center justify-center gap-2 transition-colors",
                          children: [
                            e.jsx(Wr, { className: "w-4 h-4" }),
                            "导出为角色卡",
                          ],
                        }),
                        e.jsx("p", {
                          className:
                            "text-[11px] text-slate-400 text-center leading-relaxed",
                          children: "格式仅适配 Echoes，不与其他平台角色卡互通",
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        }),
        X(),
      ],
    });
  }
  if (_e === "npcs") {
    if (we === "list")
      return e.jsxs("div", {
        className:
          "echoes-page echoes-page-character h-full flex flex-col backdrop-blur-2xl relative",
        children: [
          Q("NPC 档案", St),
          e.jsx("div", {
            className:
              "flex-1 overflow-y-auto overscroll-y-contain px-6 pb-20 pt-6",
            style: { WebkitOverflowScrolling: "touch" },
            children: e.jsxs("div", {
              className: "grid grid-cols-3 gap-y-8 gap-x-4",
              children: [
                h.map((s) =>
                  e.jsxs(
                    "div",
                    {
                      onClick: () => kr(s),
                      className:
                        "flex flex-col items-center gap-3 cursor-pointer group",
                      children: [
                        e.jsx(z, {
                          char: s,
                          className:
                            "w-20 h-20 text-3xl shadow-md group-hover:scale-105 transition-transform duration-300 border-2 border-white",
                        }),
                        e.jsx("span", {
                          className:
                            "text-sm font-medium text-slate-700 text-center leading-none",
                          children: s.name,
                        }),
                      ],
                    },
                    s.id
                  )
                ),
                e.jsxs("button", {
                  onClick: jr,
                  className:
                    "flex flex-col items-center gap-3 cursor-pointer group",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-20 h-20 rounded-full bg-white/30 border-2 border-dashed border-white/60 flex items-center justify-center group-hover:border-sky-400 group-hover:bg-sky-50/50 transition-all",
                      children: e.jsx(Ee, {
                        className:
                          "w-8 h-8 text-slate-400 group-hover:text-sky-500",
                      }),
                    }),
                    e.jsx("span", {
                      className:
                        "text-sm font-medium text-slate-400 group-hover:text-sky-500 leading-none",
                      children: "新建",
                    }),
                  ],
                }),
              ],
            }),
          }),
          X(),
        ],
      });
    const t = K ? h.find((s) => s.id === K) : null,
      r = we === "add";
    return e.jsxs("div", {
      className:
        "echoes-page echoes-page-character h-full flex flex-col backdrop-blur-2xl relative",
      children: [
        Q(
          r ? "新建 NPC 档案" : "NPC 档案配置",
          St,
          void 0,
          r
            ? null
            : e.jsx("button", {
                onClick: _r,
                className:
                  "text-red-500 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors",
                children: e.jsx(Dt, { className: "w-5 h-5" }),
              })
        ),
        e.jsx("div", {
          className: "flex-1 overflow-y-auto",
          children: e.jsxs("div", {
            className: "p-6 space-y-6",
            children: [
              e.jsx("div", {
                className: "flex justify-center",
                children: e.jsx(Wt, {
                  avatarUrl: et,
                  onUpload: tt,
                  fallbackChar: t || xs(O, h.length),
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
                        value: O,
                        onChange: (s) => Qe(s.target.value),
                        placeholder: "给 NPC 起个名字",
                        className:
                          "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
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
                        value: re,
                        onChange: (s) => Xe(s.target.value),
                        placeholder: "自由填写...",
                        className:
                          "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "min-w-0",
                    children: [
                      e.jsx("label", {
                        className:
                          "block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1",
                        children: "时区",
                      }),
                      e.jsx(Zt, {
                        value: ve,
                        onChange: Je,
                        placeholder: "例如 Asia/Tokyo",
                      }),
                      e.jsx("p", {
                        className:
                          "mt-1 px-1 text-[10px] leading-4 text-slate-400 break-all",
                        children:
                          "留空则跟随用户本地时间，填写时使用 IANA 时区字符串。",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("label", {
                        className:
                          "block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1",
                        children: "基本介绍",
                      }),
                      e.jsx("textarea", {
                        value: se,
                        onChange: (s) => Ze(s.target.value),
                        className:
                          "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                        placeholder:
                          "写清这个 NPC 的气质、身份和在世界里的位置...",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "pt-4 pb-10",
                children: e.jsx("button", {
                  onClick: Pr,
                  disabled: !O.trim(),
                  className: `w-full rounded-2xl py-4 font-bold ${mt} ${xt}`,
                  children: r ? "创建 NPC 档案" : "更新 NPC 档案",
                }),
              }),
            ],
          }),
        }),
        X(),
      ],
    });
  }
  if (V === "list") {
    const t = [
      { value: "user", label: "用户" },
      { value: "character", label: "角色" },
      { value: "npc", label: "NPC" },
    ];
    return e.jsxs("div", {
      className:
        "echoes-page echoes-page-character h-full flex flex-col backdrop-blur-2xl relative",
      children: [
        Q(
          P ? P.name : "关系管理",
          Rt,
          void 0,
          P
            ? void 0
            : e.jsx("button", {
                onClick: () => Cr(),
                "aria-label": "新建关系",
                className: Gt,
                children: e.jsx(Ee, { className: "w-4 h-4" }),
              })
        ),
        e.jsx("div", {
          className: "flex-1 overflow-y-auto px-5 pb-16 pt-5",
          children: P
            ? Ct.length === 0
              ? e.jsx("div", {
                  className: "space-y-4",
                  children: e.jsxs("div", {
                    className:
                      "rounded-[24px] border border-dashed border-[rgba(191,211,224,0.95)] bg-[rgba(244,249,253,0.82)] px-5 py-6 text-left",
                    children: [
                      e.jsxs("div", {
                        className: "text-base font-bold text-[#67859d]",
                        children: [P.name, " 还没有关系"],
                      }),
                      e.jsx("div", {
                        className: "mt-2 text-sm leading-6 text-[#7b92a5]",
                        children:
                          "如需新建关系，请返回关系管理页并使用右上角的加号入口。",
                      }),
                    ],
                  }),
                })
              : e.jsx("div", {
                  className: "space-y-3",
                  children: Ct.map((r) => {
                    const s = {
                        pairKey: r.pairKey,
                        leftEntity: P,
                        rightEntity: r.counterpart,
                        leftToRight: r.forwardRelation,
                        rightToLeft: r.reverseRelation,
                      },
                      n = Te(P.entityType, r.counterpart.entityType);
                    return e.jsxs(
                      "div",
                      {
                        className:
                          "rounded-[24px] border border-white/70 bg-white/55 px-4 py-4 shadow-[0_10px_26px_rgba(148,163,184,0.08)]",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              e.jsx(z, {
                                char: r.counterpart,
                                className:
                                  "w-12 h-12 text-base border border-white/85",
                              }),
                              e.jsxs("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "truncate text-[16px] font-bold text-slate-800",
                                        children: r.counterpart.name,
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "rounded-full bg-[rgba(224,235,242,0.86)] px-2 py-0.5 text-[10px] font-bold text-[#70889d]",
                                        children:
                                          hs[r.forwardRelation.relationKind],
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "mt-1 text-[12px] text-slate-400",
                                    children: Se(r.counterpart.entityType),
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "mt-2 text-[13px] leading-6 text-slate-500 line-clamp-2",
                                    children:
                                      r.forwardRelation.note ||
                                      (r.forwardRelation.relationKind ===
                                      "other"
                                        ? "请填写具体关系"
                                        : "未填写备注"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "mt-4 flex items-center justify-end gap-2",
                            children: [
                              e.jsx("button", {
                                onClick: () => Mr(s),
                                className: `rounded-full border border-white/70 px-3 py-1.5 text-xs font-bold transition-colors ${
                                  n
                                    ? "bg-white/45 text-slate-400 hover:bg-white/60"
                                    : "bg-white/55 text-red-500 hover:bg-red-50"
                                }`,
                                children: n ? "去通讯录删除" : "删除",
                              }),
                              e.jsxs("button", {
                                onClick: () => Er(s),
                                className:
                                  "inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/55 px-3 py-1.5 text-xs font-bold text-[#6f8faa] transition-colors hover:bg-white/75",
                                children: [
                                  e.jsx(Kr, { className: "w-3.5 h-3.5" }),
                                  "编辑",
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      r.pairKey
                    );
                  }),
                })
            : e.jsxs("div", {
                className: "space-y-4",
                children: [
                  e.jsx("div", {
                    className:
                      "rounded-[22px] border border-white/70 bg-white/52 p-1 shadow-[0_10px_24px_rgba(148,163,184,0.08)]",
                    children: e.jsx("div", {
                      className: "grid grid-cols-3 gap-1",
                      children: t.map((r) => {
                        const s = rt === r.value;
                        return e.jsx(
                          "button",
                          {
                            onClick: () => {
                              fr(r.value), st(null);
                            },
                            className: `rounded-[18px] px-3 py-2.5 text-sm font-bold transition-colors ${
                              s
                                ? "bg-[rgba(220,234,245,0.92)] text-[#5c7c94]"
                                : "text-slate-400 hover:bg-white/60 hover:text-slate-600"
                            }`,
                            children: r.label,
                          },
                          r.value
                        );
                      }),
                    }),
                  }),
                  kt.length === 0
                    ? e.jsx("div", {
                        className:
                          "rounded-[24px] border border-dashed border-white/70 bg-white/35 p-6 text-center text-sm leading-7 text-slate-500",
                        children: "当前分页还没有可配置的人物。",
                      })
                    : e.jsx("div", {
                        className: "space-y-3",
                        children: kt.map((r) => {
                          const s = v(r.entityType, r.entityId),
                            n = wr[s] || 0;
                          return e.jsx(
                            "button",
                            {
                              onClick: () => st(s),
                              className:
                                "w-full rounded-[24px] border border-white/70 bg-white/55 px-4 py-4 text-left shadow-[0_10px_26px_rgba(148,163,184,0.08)] transition-all hover:bg-white/68",
                              children: e.jsxs("div", {
                                className: "flex items-center gap-4",
                                children: [
                                  e.jsx(z, {
                                    char: r,
                                    className:
                                      "w-14 h-14 text-lg border border-white/85",
                                  }),
                                  e.jsxs("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "text-[17px] font-bold text-slate-800 truncate",
                                        children: r.name,
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "mt-1 text-[12px] text-slate-400",
                                        children: [
                                          Se(r.entityType),
                                          " · ",
                                          n,
                                          " 条关系",
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx(Vt, {
                                    className:
                                      "w-5 h-5 shrink-0 text-[#b2c0cd]",
                                  }),
                                ],
                              }),
                            },
                            s
                          );
                        }),
                      }),
                ],
              }),
        }),
        X(),
      ],
    });
  }
  const k = L.get(Y),
    C = L.get(H),
    ne = xe(Y),
    oe = xe(H),
    Pt = V === "edit" && k && C,
    _t = !!(ne && oe && Te(ne.entityType, oe.entityType)),
    At = !!(Y && H && Et.has(pe(Y, H))),
    Mt = !!(
      ne &&
      oe &&
      ne.entityId !== oe.entityId &&
      le(ne.entityType, oe.entityType) &&
      (!_t || At)
    );
  return e.jsxs("div", {
    className:
      "echoes-page echoes-page-character h-full flex flex-col backdrop-blur-2xl relative",
    children: [
      Q(V === "add" ? "新建关系" : "编辑关系", Rt),
      e.jsx("div", {
        className: "flex-1 overflow-y-auto px-5 pb-16 pt-5",
        children: e.jsxs("div", {
          className: "space-y-5",
          children: [
            e.jsx("div", {
              className:
                "rounded-[28px] border border-white/65 bg-white/55 p-5 shadow-[0_18px_40px_rgba(148,163,184,0.12)] space-y-4",
              children: e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className:
                      "block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1",
                    children: "关系双方",
                  }),
                  e.jsx("div", {
                    className:
                      "rounded-[24px] border border-white/70 bg-[rgba(245,248,251,0.84)] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",
                    children: e.jsxs("div", {
                      className:
                        "grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start gap-3",
                      children: [
                        e.jsxs("div", {
                          className:
                            "min-w-0 rounded-[20px] border border-white/70 bg-white/70 px-3 py-3",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-3 min-w-0",
                              children: [
                                k
                                  ? e.jsx(z, {
                                      char: k,
                                      className:
                                        "w-11 h-11 shrink-0 text-base border border-white/85",
                                    })
                                  : null,
                                e.jsxs("div", {
                                  className: "min-w-0",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "truncate text-sm font-bold text-slate-800",
                                      children:
                                        (k == null ? void 0 : k.name) ||
                                        "选择左侧人物",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "mt-1 text-[11px] text-slate-400",
                                      children: k ? Se(k.entityType) : "左侧",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            !Pt &&
                              e.jsx("select", {
                                value: Y,
                                onChange: (t) => at(t.target.value),
                                className:
                                  "echoes-select-character mt-3 w-full bg-white/70 border border-white/70 shadow-sm backdrop-blur-md rounded-2xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                                children: q.map((t) =>
                                  e.jsxs(
                                    "option",
                                    {
                                      value: v(t.entityType, t.entityId),
                                      children: [
                                        t.name,
                                        " · ",
                                        t.entityType === "user"
                                          ? "用户"
                                          : t.entityType === "character"
                                          ? "角色"
                                          : "NPC",
                                      ],
                                    },
                                    v(t.entityType, t.entityId)
                                  )
                                ),
                              }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#89a5ba] shadow-[0_6px_16px_rgba(148,163,184,0.12)] mt-2",
                          children: e.jsx(qt, { className: "h-4 w-4" }),
                        }),
                        e.jsxs("div", {
                          className:
                            "min-w-0 rounded-[20px] border border-white/70 bg-white/70 px-3 py-3",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-3 min-w-0",
                              children: [
                                C
                                  ? e.jsx(z, {
                                      char: C,
                                      className:
                                        "w-11 h-11 shrink-0 text-base border border-white/85",
                                    })
                                  : null,
                                e.jsxs("div", {
                                  className: "min-w-0",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "truncate text-sm font-bold text-slate-800",
                                      children:
                                        (C == null ? void 0 : C.name) ||
                                        "选择右侧人物",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "mt-1 text-[11px] text-slate-400",
                                      children: C ? Se(C.entityType) : "右侧",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            !Pt &&
                              e.jsxs("select", {
                                value: H,
                                onChange: (t) => nt(t.target.value),
                                className:
                                  "mt-3 w-full bg-white/70 border border-white/70 shadow-sm backdrop-blur-md rounded-2xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                                children: [
                                  e.jsx("option", {
                                    value: "",
                                    children: "请选择另一方",
                                  }),
                                  q.map((t) => {
                                    const r = v(t.entityType, t.entityId);
                                    return e.jsxs(
                                      "option",
                                      {
                                        value: r,
                                        children: [
                                          t.name,
                                          " · ",
                                          t.entityType === "user"
                                            ? "用户"
                                            : t.entityType === "character"
                                            ? "角色"
                                            : "NPC",
                                        ],
                                      },
                                      r
                                    );
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  !Mt &&
                    e.jsx("p", {
                      className: "mt-2 text-xs leading-5 text-amber-600",
                      children:
                        "当前只支持 用户↔角色、用户↔NPC、角色↔角色、角色↔NPC，不支持 NPC↔NPC 或 用户↔用户。",
                    }),
                  ne &&
                    oe &&
                    _t &&
                    !At &&
                    e.jsx("p", {
                      className: "mt-2 text-xs leading-5 text-amber-600",
                      children:
                        "用户↔角色只能通过通讯录建立或删除；在这里仅可编辑已存在联系人的关系类型与备注。",
                    }),
                ],
              }),
            }),
            e.jsxs("div", {
              className:
                "rounded-[28px] border border-white/65 bg-white/55 p-5 shadow-[0_18px_40px_rgba(148,163,184,0.12)] space-y-5",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        k
                          ? e.jsx(z, {
                              char: k,
                              className:
                                "w-11 h-11 text-base border border-white/80",
                            })
                          : null,
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className: "text-sm font-bold text-slate-800",
                              children:
                                (k == null ? void 0 : k.name) || "左侧实体",
                            }),
                            e.jsx("div", {
                              className: "text-[11px] text-slate-400",
                              children: "怎么看右侧的人",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "mt-3 space-y-3",
                      children: [
                        e.jsx("select", {
                          value: je,
                          onChange: (t) => ot(t.target.value),
                          className:
                            "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                          children: pt.map((t) =>
                            e.jsx(
                              "option",
                              { value: t.value, children: t.label },
                              t.value
                            )
                          ),
                        }),
                        e.jsx("textarea", {
                          value: lt,
                          onChange: (t) => ct(t.target.value),
                          className:
                            "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                          placeholder: er(je, C == null ? void 0 : C.name),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "border-t border-white/60 pt-5",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        C
                          ? e.jsx(z, {
                              char: C,
                              className:
                                "w-11 h-11 text-base border border-white/80",
                            })
                          : null,
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className: "text-sm font-bold text-slate-800",
                              children:
                                (C == null ? void 0 : C.name) || "右侧实体",
                            }),
                            e.jsx("div", {
                              className: "text-[11px] text-slate-400",
                              children: "怎么看左侧的人",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "mt-3 space-y-3",
                      children: [
                        e.jsx("select", {
                          value: ke,
                          onChange: (t) => it(t.target.value),
                          className:
                            "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                          children: pt.map((t) =>
                            e.jsx(
                              "option",
                              { value: t.value, children: t.label },
                              t.value
                            )
                          ),
                        }),
                        e.jsx("textarea", {
                          value: dt,
                          onChange: (t) => ht(t.target.value),
                          className:
                            "w-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md rounded-2xl px-4 py-3 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#89b6d3]/20 focus:border-[#89b6d3] transition-all text-slate-800",
                          placeholder: er(ke, k == null ? void 0 : k.name),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "pb-10",
              children: e.jsx("button", {
                onClick: Ar,
                disabled: !Mt,
                className: `w-full rounded-2xl py-4 font-bold ${mt} ${xt}`,
                children: V === "add" ? "建立关系" : "更新关系",
              }),
            }),
          ],
        }),
      }),
      X(),
      e.jsx("style", {
        children: `
        @keyframes charToastSlideIn {
          0% { opacity: 0; transform: translateY(-12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `,
      }),
    ],
  });
};
export { Rs as CharacterApp, Rs as default };
