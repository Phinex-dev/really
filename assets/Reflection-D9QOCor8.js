import { r as m, j as e, R as P } from "./index-C41onZB-.js";
import {
  j as U,
  u as ue,
  t as W,
  E as z,
  l as fe,
  J as B,
  C as ge,
  T as je,
} from "./App-CYgIjxWH.js";
import { f as ve, h as Ne } from "./gemini-CeriFUnH.js";
import { b as we, S as se, a as ye } from "./buttonStyles-CgOYb1KY.js";
import { A as ke } from "./ApiErrorCard-DsY_S22O.js";
import { C as K } from "./chevron-left-CTqCLzU8.js";
import { L as Ce } from "./loader-circle-CcTwnOUB.js";
import { S as Z } from "./sparkles-CGxZnICD.js";
import { C as ae } from "./cloud-CpRFALJq.js";
import { C as re } from "./camera-D3fQhOQq.js";
import { C as ne } from "./coffee-z5kKF3o0.js";
import { S as G } from "./smartphone-0twgdLJZ.js";
import { A as Se } from "./arrow-up-BaJqBU9m.js";
import { F as Ie } from "./footprints-dK-79cS6.js";
import { M as $e } from "./message-circle-5JY3SDfG.js";
import { S as Te } from "./search-BLOZ0mEQ.js";
import "./giftFulfillment-DLU8FseI.js";
import "./initialShopItems-Bgx56oyu.js";
import "./worldBookScopes-B0JaUaci.js";
import "./llmFetch-C_SjUca9.js";
import "./circle-alert-JwRkSIRb.js";
const _e = [
  {
    id: "phone",
    label: "手机痕迹",
    description: "搜索记录、app使用、未读消息等数字足迹",
  },
  {
    id: "diary",
    label: "日记碎片",
    description: "便签、备忘录、没发出去的话、潦草的文字",
  },
  {
    id: "scene",
    label: "场景快照",
    description: "某个瞬间的画面，像一帧照片：桌上的杯子、窗外的光",
  },
  {
    id: "thought",
    label: "内心涟漪",
    description: "一闪而过的念头、情绪的暗流、说不出口的感受",
  },
  {
    id: "life",
    label: "生活碎片",
    description: "吃过的东西、走过的路、无意识的小习惯",
  },
];
function Ee(a) {
  return a
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .replace(/\r/g, "")
    .trim();
}
function Ae(a) {
  const {
      user: o,
      dateKey: l,
      knowledge: c,
      messages: d,
      chats: y,
      characters: g,
      users: u,
      worldBooks: p,
      socialRelations: j,
      categoriesToGenerate: r,
    } = a,
    $ = U.getRecentKnowledgeForSchedule(c, o.id, 8),
    S = U.formatKnowledgeForSchedulePrompt($),
    v = U.buildCompactVisibleMessageWindow({
      entityId: o.id,
      messages: d,
      chats: y,
      allCharacters: g,
      allUsers: u,
      maxMessages: 80,
      maxChars: 4e3,
    }),
    E = p.filter((s) => s.categoryId !== "keyword" && s.isGlobalActive),
    A =
      E.length > 0
        ? E.map(
            (s) => `[${s.title}]
${s.content.slice(0, 500)}`
          ).join(`

`)
        : "无额外世界书。",
    D = {
      family: "家人",
      friend: "朋友",
      coworker: "同事",
      lover: "恋人",
      ally: "同盟",
      acquaintance: "熟人",
      rival: "对手",
      other: "其他",
    },
    b = (s, f = 60) => {
      if (s != null && s.trim())
        return s.trim().length > f
          ? `${s
              .trim()
              .slice(0, f - 1)
              .trim()}…`
          : s.trim();
    },
    k = new Map();
  for (const s of j)
    s.fromEntityId === o.id
      ? k.set(s.toEntityId, s)
      : s.toEntityId === o.id && k.set(s.fromEntityId, s);
  const C = g
      .filter((s) => k.has(s.id))
      .map((s) => {
        const f = k.get(s.id),
          F = D[f.relationKind] || f.relationKind,
          T = f.note ? b(f.note, 40) : void 0,
          O = T ? `${F}（${T}）` : F,
          M = b(s.intro),
          _ = [`- ${s.name}【${O}】`];
        return M && (_[0] += `：${M}`), _[0];
      }),
    N =
      C.length > 0
        ? C.join(`
`)
        : "无已设定的人际关系。",
    x = r.map((s) => `- ${s.id}: ${s.label} — ${s.description}`).join(`
`);
  return `你现在要为用户（user）生成"倒影"内容——从ta今天的所有互动中，推演出ta当天的生活碎片。

核心理念：
- 这不是侧写报告，不是条目化分析。这是像水面倒影一样、散落的生活痕迹。
- 每个碎片应该是独立的、具体的、有画面感的小片段。
- 语气亲密但不矫情，像从第二人称视角写的：不说"用户做了什么"，而是直接写碎片本身。
- 碎片应该有生活的质感：不完整的、随意的、真实的。

用户信息：
- 名字：${o.name}
- 性别：${o.gender || "未指定"}
- 简介：${o.intro || "未提供"}
- 背景：${o.background || "未提供"}

日期：${l}

本次需要生成的碎片类型：
${x}

每种类型的要求：
- phone（手机痕迹）：写成搜索记录、app通知、未读消息数等，像翻看别人手机时瞥到的画面。
- diary（日记碎片）：写成便签、备忘录、草稿箱里没发出去的句子。语气跳跃、不完整。
- scene（场景快照）：写成一帧定格画面，用简短文字描绘一个瞬间。重画面，轻叙事。
- thought（内心涟漪）：写成一闪而过的念头或情绪碎片。可以只有一两句话，但要准确击中。
- life（生活碎片）：小动作、小习惯、无意识的行为——泡了第三杯咖啡、把耳机线绕了又解开。

输出要求：
1. 只输出 JSON，不要解释，不要代码块。
2. JSON 是一个对象，key 是碎片类型 ID，value 是一个数组，每个数组元素是一个对象：
   { "content": "碎片内容文本", "mood": "一个描述氛围的词，如：安静/不安/温暖/疲惫/期待/平淡" }
3. 每种类型生成 1-3 个碎片，数量随机，不要每种都恰好一样多。
4. 碎片之间不要有逻辑连续性，它们是散落的。
5. 不要出现"以下是""好的我来"等元话术。不要提系统、prompt等元信息。
6. 碎片内容应当参考用户今天的聊天和记忆来推演，但不要机械复述聊天内容。

与用户相关的近期记忆摘要：
${S}

用户今日参与的聊天片段（供推演参考，不要直接抄）：
${v}

世界观背景：
${A}

用户的人际关系（可作为推演参考，角色关系可能影响日常生活的细节）：
${N}

请直接返回 JSON，格式示意：
{
${r.map((s) => `  "${s.id}": [{ "content": "...", "mood": "..." }]`).join(`,
`)}
}`;
}
async function De(a) {
  const {
      user: o,
      dateKey: l,
      knowledge: c,
      messages: d,
      chats: y,
      characters: g,
      users: u,
      worldBooks: p,
      socialRelations: j,
      preset: r,
    } = a,
    $ = [..._e].sort(() => Math.random() - 0.5),
    S = 3 + Math.floor(Math.random() * 3),
    v = $.slice(0, Math.min(S, $.length)),
    E = Ae({
      user: o,
      dateKey: l,
      knowledge: c,
      messages: d,
      chats: y,
      characters: g,
      users: u,
      worldBooks: p,
      socialRelations: j,
      categoriesToGenerate: v,
    });
  if (!(r != null && r.endpoint))
    throw new Error("需要配置 API 预设才能生成倒影内容");
  const { content: A, usage: D } = await ve(r, E, !0);
  let b;
  try {
    b = JSON.parse(Ne(A));
  } catch {
    throw new Error("AI 返回的内容无法解析为 JSON");
  }
  const k = Date.now(),
    C = [];
  for (const N of v) {
    const x = b[N.id];
    if (Array.isArray(x))
      for (const s of x)
        !s.content ||
          typeof s.content != "string" ||
          C.push({
            id: `ref-${l}-${N.id}-${Math.random().toString(36).slice(2, 8)}`,
            userId: o.id,
            dateKey: l,
            type: N.id,
            content: Ee(s.content),
            isUserWritten: !1,
            mood: typeof s.mood == "string" ? s.mood : void 0,
            createdAt: k + C.length,
          });
  }
  return { fragments: C, usage: D };
}
const oe = { phone: G, diary: z, scene: re, thought: ae, life: ne, custom: B },
  le = {
    phone: "手机痕迹",
    diary: "日记碎片",
    scene: "场景快照",
    thought: "内心涟漪",
    life: "生活碎片",
    custom: "我写的",
  },
  ee = [
    {
      id: "passby",
      Icon: Ie,
      label: "路过看到",
      desc: "经过你身边时余光瞥见了什么",
    },
    {
      id: "social",
      Icon: G,
      label: "刷到动态",
      desc: "在社交媒体上偶然刷到了你的痕迹",
    },
    {
      id: "hearsay",
      Icon: $e,
      label: "别人提起",
      desc: "从第三个人那里听说了关于你的事",
    },
    {
      id: "observe",
      Icon: Te,
      label: "自己察觉",
      desc: "在相处中慢慢注意到的细节",
    },
  ],
  te = [
    { type: "diary", Icon: z, label: "日记" },
    { type: "thought", Icon: ae, label: "涟漪" },
    { type: "scene", Icon: re, label: "快照" },
    { type: "life", Icon: ne, label: "生活" },
    { type: "phone", Icon: G, label: "痕迹" },
  ];
function Fe(a) {
  const o = W(),
    l = W(new Date(Date.now() - 864e5));
  if (a === o) return "今天";
  if (a === l) return "昨天";
  const [, c, d] = a.split("-");
  return `${parseInt(c)}月${parseInt(d)}日`;
}
const Me = ({ fragment: a, onTap: o, onShare: l }) => {
    const c = a.isUserWritten;
    return e.jsxs("div", {
      className: `echoes-reflection-card relative rounded-2xl p-4 border transition-all duration-300 cursor-pointer
        ${
          c
            ? "bg-white/[0.42] border-dashed border-[rgba(180,160,130,0.25)]"
            : "bg-white/[0.68] border-white/45"
        }
        shadow-[0_1px_16px_rgba(80,110,140,0.05)]
        hover:shadow-[0_4px_28px_rgba(80,110,140,0.08)] hover:-translate-y-[1px]`,
      onClick: () => o(a.id),
      children: [
        e.jsxs("div", {
          className: "flex items-center justify-between mb-2.5",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-[7px]",
              children: [
                P.createElement(oe[a.type] || B, {
                  className: "w-3.5 h-3.5 text-[#9daebb]",
                  strokeWidth: 1.6,
                }),
                e.jsx("span", {
                  className: "text-[11px] text-[#9daebb] font-normal",
                  children: le[a.type] || "碎片",
                }),
              ],
            }),
            e.jsx("span", {
              className: "text-[10px] text-[#9daebb] font-light",
              children: new Date(a.createdAt).toLocaleTimeString("zh-CN", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: !1,
              }),
            }),
          ],
        }),
        e.jsx("p", {
          className: `text-[14px] leading-[1.78] whitespace-pre-wrap break-words
        ${c ? "font-serif text-[#5d6b78]" : "text-[#2c3a4a]"}
      `,
          children: a.content,
        }),
        !a.sharedTo &&
          e.jsx("div", {
            className: "flex justify-end mt-2.5",
            children: e.jsx("button", {
              className: `px-3 py-1 rounded-full
              border border-[rgba(170,195,220,0.2)] bg-white/60 backdrop-blur-sm
              text-[10.5px] text-[#9daebb] flex items-center gap-1
              transition-all duration-200 active:scale-95 hover:border-[rgba(170,195,220,0.4)] hover:text-[#6b7d8e] hover:bg-white/85`,
              onClick: (d) => {
                d.stopPropagation(), l(a);
              },
              children: "让角色发现 ›",
            }),
          }),
        a.sharedTo &&
          e.jsx("div", {
            className: "mt-2.5",
            children: a.sharedTo.impression
              ? e.jsxs("div", {
                  children: [
                    e.jsxs("div", {
                      className:
                        "inline-flex items-center gap-[5px] text-[10.5px] text-[#9daebb] mb-1.5",
                      children: [
                        e.jsx("span", {
                          className:
                            "w-[4px] h-[4px] rounded-full bg-[rgba(160,170,200,0.35)]",
                        }),
                        e.jsxs("span", {
                          children: [
                            e.jsx("span", {
                              className: "text-[#6b7d8e]",
                              children: a.sharedTo.characterName,
                            }),
                            " 对你形成了新的印象",
                          ],
                        }),
                        e.jsx("span", {
                          className:
                            "w-[4px] h-[4px] rounded-full bg-[rgba(160,170,200,0.35)]",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-[12.5px] text-[#6b7d8e] leading-[1.75] pl-[9px] border-l-[1.5px] border-[rgba(160,170,200,0.2)]",
                      children: a.sharedTo.impression,
                    }),
                  ],
                })
              : e.jsxs("div", {
                  className: "text-[10px] text-[#9daebb] font-light",
                  children: ["已让 ", a.sharedTo.characterName, " 发现"],
                }),
          }),
      ],
    });
  },
  Re = ({ fragment: a, onSave: o, onDelete: l, onClose: c }) => {
    const [d, y] = m.useState(a.content),
      [g, u] = m.useState(!1),
      p = d.trim() !== a.content,
      j = () => {
        d.trim() && o({ ...a, content: d.trim() });
      };
    return e.jsxs("div", {
      className:
        "fixed inset-0 z-50 bg-white/95 backdrop-blur-xl flex flex-col",
      children: [
        e.jsxs("div", {
          className:
            "safe-top pb-3 px-4 border-b border-slate-100 flex items-center gap-2",
          children: [
            e.jsx("button", {
              onClick: c,
              className:
                "echoes-reflection-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors",
              children: e.jsx(K, { className: "w-6 h-6" }),
            }),
            e.jsxs("div", {
              className: "flex-1 flex items-center gap-1.5",
              children: [
                P.createElement(oe[a.type] || B, {
                  className: "w-3.5 h-3.5 text-[#9daebb]",
                  strokeWidth: 1.6,
                }),
                e.jsx("span", {
                  className: "text-[11px] font-medium text-[#9daebb]",
                  children: le[a.type] || "碎片",
                }),
                a.isUserWritten &&
                  e.jsx("span", {
                    className: "text-[9px] text-slate-400 ml-1",
                    children: "· 手写",
                  }),
                a.mood &&
                  e.jsxs("span", {
                    className: "text-[9px] text-slate-400/80 italic ml-1",
                    children: ["· ", a.mood],
                  }),
              ],
            }),
            p &&
              e.jsxs("button", {
                className: `px-3 py-1.5 rounded-xl text-[11px] ${se}`,
                onClick: j,
                children: [
                  e.jsx(ge, { className: "w-3 h-3 inline mr-1" }),
                  "保存",
                ],
              }),
          ],
        }),
        e.jsx("div", {
          className: "flex-1 px-5 py-4 overflow-y-auto",
          children: e.jsx("textarea", {
            className:
              "w-full h-full text-[14px] text-slate-700 bg-transparent border-none outline-none resize-none leading-relaxed placeholder:text-slate-300",
            value: d,
            onChange: (r) => y(r.target.value),
            placeholder: "碎片内容...",
            autoFocus: !0,
          }),
        }),
        e.jsxs("div", {
          className:
            "shrink-0 px-5 py-4 border-t border-slate-100 flex items-center",
          children: [
            e.jsx("span", {
              className: "text-[10px] text-slate-300",
              children: new Date(a.createdAt).toLocaleString("zh-CN", {
                month: "numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: !1,
              }),
            }),
            e.jsx("div", { className: "flex-1" }),
            g
              ? e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx("span", {
                      className: "text-[11px] text-rose-400",
                      children: "确认删除？",
                    }),
                    e.jsx("button", {
                      className:
                        "px-3 py-1.5 rounded-xl text-[11px] text-slate-400 hover:text-slate-600 transition-colors",
                      onClick: () => u(!1),
                      children: "取消",
                    }),
                    e.jsx("button", {
                      className:
                        "px-3 py-1.5 rounded-xl text-[11px] bg-rose-50 text-rose-500 border border-rose-200/60 hover:bg-rose-100 transition-colors",
                      onClick: () => l(a.id),
                      children: "删除",
                    }),
                  ],
                })
              : e.jsx("button", {
                  className:
                    "echoes-reflection-delete-btn p-2 rounded-xl text-slate-300 hover:text-rose-400 hover:bg-rose-50/60 transition-colors",
                  onClick: () => u(!0),
                  children: e.jsx(je, { className: "w-4 h-4" }),
                }),
          ],
        }),
      ],
    });
  },
  Oe = ({ fragment: a, characters: o, onConfirm: l, onClose: c }) => {
    var j;
    const [d, y] = m.useState(((j = o[0]) == null ? void 0 : j.id) || ""),
      [g, u] = m.useState(ee[0].id),
      p = o.find((r) => r.id === d);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx("div", {
          className:
            "fixed inset-0 bg-[rgba(30,40,55,0.25)] backdrop-blur-[3px] z-[100] transition-opacity duration-300",
          onClick: c,
        }),
        e.jsxs("div", {
          className:
            "fixed bottom-0 left-0 right-0 z-[101] bg-[rgba(250,252,255,0.96)] backdrop-blur-[20px] rounded-t-[20px] px-6 pb-9 max-w-[440px] mx-auto shadow-[0_-4px_40px_rgba(60,80,110,0.1)] animate-sheet-up",
          children: [
            e.jsx("div", {
              className:
                "w-9 h-1 rounded-full bg-[rgba(170,185,200,0.3)] mx-auto mt-3 mb-5",
            }),
            e.jsx("div", {
              className: "text-[15px] font-medium text-[#2c3a4a] mb-1.5",
              children: "让角色发现这片碎片",
            }),
            e.jsx("div", {
              className:
                "text-[12px] text-[#9daebb] font-light leading-relaxed mb-5 px-3.5 py-2.5 bg-[rgba(170,195,220,0.06)] rounded-[10px] border-l-2 border-[rgba(170,195,220,0.2)]",
              children: a.content,
            }),
            e.jsx("div", {
              className:
                "text-[11px] text-[#9daebb] font-normal tracking-wider mb-2.5",
              children: "谁会发现？",
            }),
            e.jsx("div", {
              className:
                "flex gap-2.5 mb-5 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide",
              style: { WebkitOverflowScrolling: "touch" },
              children: o.map((r) =>
                e.jsxs(
                  "button",
                  {
                    className: `shrink-0 flex items-center gap-2 px-3.5 py-2.5 rounded-xl border-[1.5px] transition-all
                ${
                  d === r.id
                    ? `border-[${r.avatarColor}] bg-[${r.avatarColor}10]`
                    : "border-[rgba(170,195,220,0.2)] bg-white/50 hover:border-[rgba(170,195,220,0.4)] hover:bg-white/80"
                }`,
                    style:
                      d === r.id
                        ? {
                            borderColor: r.avatarColor,
                            backgroundColor: r.avatarColor + "0a",
                          }
                        : void 0,
                    onClick: () => y(r.id),
                    children: [
                      e.jsx("div", {
                        className:
                          "w-7 h-7 rounded-full flex items-center justify-center text-[11px] text-white font-medium shrink-0 overflow-hidden",
                        style: { backgroundColor: r.avatarColor },
                        children: r.avatarUrl
                          ? e.jsx("img", {
                              src: r.avatarUrl,
                              alt: "",
                              className: "w-full h-full object-cover",
                            })
                          : r.name[0],
                      }),
                      e.jsx("span", {
                        className: "text-[13px] text-[#2c3a4a] font-normal",
                        children: r.name,
                      }),
                    ],
                  },
                  r.id
                )
              ),
            }),
            e.jsx("div", {
              className:
                "text-[11px] text-[#9daebb] font-normal tracking-wider mb-2.5",
              children: "怎么发现的？",
            }),
            e.jsx("div", {
              className: "flex flex-col gap-2 mb-6",
              children: ee.map((r) =>
                e.jsxs(
                  "button",
                  {
                    className: `flex items-center gap-3 px-4 py-3 rounded-xl border-[1.5px] transition-all text-left
                ${
                  g === r.id
                    ? "bg-white/75 border-[rgba(170,195,220,0.35)] shadow-[0_1px_10px_rgba(80,110,140,0.05)]"
                    : "border-transparent bg-white/40 hover:bg-white/70 hover:border-[rgba(170,195,220,0.2)]"
                }`,
                    onClick: () => u(r.id),
                    children: [
                      e.jsx("div", {
                        className:
                          "w-9 h-9 rounded-[10px] bg-[rgba(170,195,220,0.08)] flex items-center justify-center shrink-0",
                        children: e.jsx(r.Icon, {
                          className: "w-4 h-4 text-[#9daebb]",
                          strokeWidth: 1.6,
                        }),
                      }),
                      e.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          e.jsx("div", {
                            className:
                              "text-[13px] text-[#2c3a4a] font-normal mb-0.5",
                            children: r.label,
                          }),
                          e.jsx("div", {
                            className: "text-[11px] text-[#9daebb] font-light",
                            children: r.desc,
                          }),
                        ],
                      }),
                    ],
                  },
                  r.id
                )
              ),
            }),
            e.jsx("button", {
              className: `w-full py-3.5 rounded-[14px] text-[14px] font-normal tracking-wider ${se} ${ye}`,
              disabled: !d,
              onClick: () => {
                p && l(p.id, p.name, g);
              },
              children: p ? `让 ${p.name} 发现` : "选择角色",
            }),
          ],
        }),
      ],
    });
  };
function nt() {
  var X;
  const {
      setCurrentApp: a,
      currentUser: o,
      activeUserId: l,
      users: c,
      knowledge: d,
      messages: y,
      setMessages: g,
      chats: u,
      characters: p,
      worldBooks: j,
      apiPresets: r,
      activePresetId: $,
      reflectionFragments: S,
      setReflectionFragments: v,
      lastUsage: E,
      setLastUsage: A,
      socialRelations: D,
    } = ue(),
    [b, k] = m.useState(!1),
    [C, N] = m.useState(null),
    [x, s] = m.useState(null),
    [f, F] = m.useState(""),
    [T, O] = m.useState("diary"),
    [M, _] = m.useState(!1),
    R = W(new Date()),
    [ie, de] = m.useState(new Set([R])),
    [Y, L] = m.useState(null),
    ce = m.useRef(null),
    xe = r.find((t) => t.id === $) || r[0],
    J = m.useMemo(() => S.filter((t) => !t.userId || t.userId === l), [S, l]),
    H = m.useMemo(() => {
      const t = {};
      for (const n of J)
        t[n.dateKey] || (t[n.dateKey] = []), t[n.dateKey].push(n);
      for (const n of Object.keys(t))
        t[n].sort((i, w) => w.createdAt - i.createdAt);
      return Object.entries(t).sort((n, i) => i[0].localeCompare(n[0]));
    }, [J]),
    V = async () => {
      if (!b) {
        k(!0), L(null);
        try {
          const t = await De({
            user: o,
            dateKey: R,
            knowledge: d,
            messages: y,
            chats: u,
            characters: p,
            users: c,
            worldBooks: j,
            socialRelations: D,
            preset: xe,
          });
          v((n) => [...n, ...t.fragments]), t.usage && A(t.usage);
        } catch (t) {
          L({ title: "倒影生成失败", detail: fe(t) });
        } finally {
          k(!1);
        }
      }
    },
    q = () => {
      if (!f.trim()) return;
      const t = {
        id: `ref-${R}-custom-${Math.random().toString(36).slice(2, 8)}`,
        userId: l,
        dateKey: R,
        type: T,
        content: f.trim(),
        isUserWritten: !0,
        createdAt: Date.now(),
      };
      v((n) => [...n, t]), F(""), _(!1);
    },
    me = (t) => {
      v((n) => n.filter((i) => i.id !== t)), N(null);
    },
    pe = (t) => {
      v((n) => n.map((i) => (i.id === t.id ? t : i))), N(null);
    },
    he = (t, n, i) => {
      if (!x) return;
      v((h) =>
        h.map((I) =>
          I.id === x.id
            ? {
                ...I,
                sharedTo: {
                  characterId: t,
                  characterName: n,
                  discoveryMethod: i,
                },
              }
            : I
        )
      );
      const w = u.find(
        (h) => !h.isGroup && h.memberIds.includes(t) && h.memberIds.includes(l)
      );
      if (w) {
        const h = {
          id: Math.random().toString(36).substring(7),
          chatId: w.id,
          senderId: l,
          text: x.content,
          perceivers: [
            l,
            ...w.memberIds.filter((I) => !c.some((be) => be.id === I)),
          ],
          timestamp: Date.now(),
          type: "reflection",
          metadata: {
            senderName: (o == null ? void 0 : o.name) || "",
            time: x.createdAt,
            sourceName: "倒影",
            reflection: {
              fragmentId: x.id,
              fragmentType: x.type,
              content: x.content,
              discoveryMethod: i,
              mood: x.mood,
            },
          },
        };
        g((I) => [...I, h]);
      }
      s(null);
    },
    Q = (C && S.find((t) => t.id === C)) || null;
  return e.jsxs("div", {
    className:
      "echoes-page echoes-page-reflection w-full h-full flex flex-col relative overflow-hidden",
    children: [
      e.jsxs("div", {
        className: "fixed inset-0 pointer-events-none z-0",
        children: [
          e.jsx("div", {
            className:
              "absolute top-[15%] left-[25%] w-[55%] h-[40%] rounded-full bg-[rgba(175,210,245,0.10)] blur-3xl",
          }),
          e.jsx("div", {
            className:
              "absolute top-[55%] right-[25%] w-[35%] h-[30%] rounded-full bg-[rgba(190,200,230,0.07)] blur-3xl",
          }),
        ],
      }),
      Q &&
        e.jsx(Re, {
          fragment: Q,
          onSave: pe,
          onDelete: me,
          onClose: () => N(null),
        }),
      x &&
        (() => {
          const t = p.filter((n) =>
            u.some(
              (i) =>
                !i.isGroup &&
                i.memberIds.includes(n.id) &&
                i.memberIds.includes(l)
            )
          );
          return (
            t.length > 0 &&
            e.jsx(Oe, {
              fragment: x,
              characters: t,
              onConfirm: he,
              onClose: () => s(null),
            })
          );
        })(),
      e.jsx("div", {
        className:
          "safe-top pb-4 px-4 bg-white/10 backdrop-blur-md border-b border-white/40 sticky top-0 z-10",
        children: e.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            e.jsx("button", {
              onClick: () => a("home"),
              className:
                "echoes-reflection-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
              children: e.jsx(K, { className: "w-6 h-6" }),
            }),
            e.jsxs("div", {
              className: "min-w-0 flex-1",
              children: [
                e.jsx("h1", {
                  className: "text-2xl font-bold text-slate-800",
                  children: "倒影",
                }),
                e.jsx("p", {
                  className: "text-[11px] text-slate-500 mt-0.5",
                  children: "观测者的水面 · 映出你的轮廓",
                }),
              ],
            }),
            e.jsx("div", {
              className: "flex items-center gap-2 shrink-0",
              children: e.jsx("button", {
                className: `${we} ${b ? "opacity-50 pointer-events-none" : ""}`,
                onClick: V,
                disabled: b,
                title: "生成碎片",
                children: b
                  ? e.jsx(Ce, { className: "w-4 h-4 animate-spin" })
                  : e.jsx(Z, { className: "w-4 h-4" }),
              }),
            }),
          ],
        }),
      }),
      Y &&
        e.jsx("div", {
          className: "px-5 pb-2 relative z-10",
          children: e.jsx(ke, { error: Y, onClose: () => L(null) }),
        }),
      e.jsxs("div", {
        ref: ce,
        className:
          "flex-1 overflow-y-auto px-5 pb-28 relative z-[1] hide-scrollbar",
        children: [
          b &&
            e.jsxs("div", {
              className: "my-6",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-1.5 h-1.5 rounded-full bg-slate-300 animate-pulse",
                    }),
                    e.jsx("span", {
                      className: "text-[11px] text-[#9daebb] font-light",
                      children: "正在凝视水面...",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "space-y-3",
                  children: [...Array(3)].map((t, n) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "bg-white/[0.5] border border-white/40 rounded-2xl p-4 animate-pulse",
                        children: [
                          e.jsx("div", {
                            className: "h-3 bg-slate-200/50 rounded w-16 mb-3",
                          }),
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsx("div", {
                                className: "h-3 bg-slate-100/80 rounded w-full",
                              }),
                              e.jsx("div", {
                                className: "h-3 bg-slate-100/60 rounded w-4/5",
                              }),
                            ],
                          }),
                        ],
                      },
                      n
                    )
                  ),
                }),
              ],
            }),
          H.length === 0 &&
            !b &&
            e.jsxs("div", {
              className:
                "flex flex-col items-center justify-center h-[60vh] text-center",
              children: [
                e.jsx("div", {
                  className: "text-3xl mb-4 opacity-30",
                  children: "〰️",
                }),
                e.jsx("p", {
                  className: "text-sm text-[#9daebb] mb-1",
                  children: "还没有倒影",
                }),
                e.jsxs("p", {
                  className:
                    "text-[11px] text-[#9daebb]/60 mb-6 max-w-[200px] font-light",
                  children: [
                    "点击右上角 ✨ 生成今天的生活碎片,",
                    e.jsx("br", {}),
                    "或在下方写下你的碎片",
                  ],
                }),
                e.jsxs("button", {
                  className: `px-5 py-2.5 rounded-full text-[12px] border border-[rgba(170,195,220,0.2)] bg-white/50
                text-[#6b7d8e] hover:bg-white/80 hover:border-[rgba(170,195,220,0.35)] transition-all`,
                  onClick: V,
                  disabled: b,
                  children: [
                    e.jsx(Z, { className: "w-3.5 h-3.5 inline mr-1.5" }),
                    "生成今日倒影",
                  ],
                }),
              ],
            }),
          H.map(([t, n]) => {
            const i = !ie.has(t);
            return e.jsxs(
              "div",
              {
                children: [
                  e.jsxs("div", {
                    className:
                      "relative py-5 flex items-center justify-center cursor-pointer select-none",
                    onClick: () =>
                      de((w) => {
                        const h = new Set(w);
                        return h.has(t) ? h.delete(t) : h.add(t), h;
                      }),
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[rgba(170,195,220,0.2)] to-transparent",
                      }),
                      e.jsxs("span", {
                        className:
                          "relative px-4 bg-[#f5f7fa] text-[11px] text-[#9daebb] font-light tracking-wider flex items-center gap-2",
                        children: [
                          Fe(t),
                          e.jsxs("span", {
                            className: "text-[9px] opacity-60",
                            children: ["(", n.length, ")"],
                          }),
                          e.jsx(K, {
                            className: `w-3 h-3 transition-transform duration-200 ${
                              i ? "-rotate-90" : "rotate-0"
                            }`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  !i &&
                    e.jsx("div", {
                      className: "flex flex-col gap-3 mb-2",
                      children: n.map((w, h) =>
                        e.jsx(
                          "div",
                          {
                            style: { animationDelay: `${h * 0.04}s` },
                            className: "animate-rise",
                            children: e.jsx(Me, {
                              fragment: w,
                              onTap: N,
                              onShare: s,
                            }),
                          },
                          w.id
                        )
                      ),
                    }),
                ],
              },
              t
            );
          }),
        ],
      }),
      e.jsx("div", {
        className:
          "fixed bottom-0 left-0 right-0 z-10 pointer-events-none bg-gradient-to-t from-[#f5f7fa] via-[#f5f7fa]/60 to-transparent pt-4 pb-8 px-5",
        children: e.jsxs("div", {
          className: "max-w-[400px] mx-auto pointer-events-auto",
          children: [
            M &&
              e.jsx("div", {
                className: "flex gap-1.5 mb-2 px-1 animate-rise",
                children: te.map(({ type: t, Icon: n, label: i }) =>
                  e.jsxs(
                    "button",
                    {
                      className: `flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[10.5px] border transition-all
                    ${
                      T === t
                        ? "bg-white/80 border-[rgba(170,195,220,0.4)] text-[#2c3a4a] shadow-[0_1px_6px_rgba(80,110,140,0.06)]"
                        : "bg-white/40 border-transparent text-[#9daebb] hover:text-[#6b7d8e] hover:bg-white/60"
                    }`,
                      onClick: () => O(t),
                      children: [
                        e.jsx(n, { className: "w-3 h-3", strokeWidth: 1.6 }),
                        i,
                      ],
                    },
                    t
                  )
                ),
              }),
            e.jsxs("div", {
              className:
                "flex items-center gap-2.5 bg-white/75 backdrop-blur-[14px] rounded-full px-3.5 py-2 border border-[rgba(170,195,220,0.2)] shadow-[0_2px_20px_rgba(80,110,140,0.06)] transition-all focus-within:border-[rgba(170,195,220,0.4)] focus-within:shadow-[0_4px_28px_rgba(80,110,140,0.1)]",
              children: [
                e.jsx("button", {
                  className:
                    "shrink-0 text-[#9daebb] hover:text-[#6b7d8e] transition-colors",
                  onClick: () => _(!M),
                  children: P.createElement(
                    ((X = te.find((t) => t.type === T)) == null
                      ? void 0
                      : X.Icon) || z,
                    { className: "w-4 h-4", strokeWidth: 1.6 }
                  ),
                }),
                e.jsx("input", {
                  type: "text",
                  className:
                    "flex-1 bg-transparent border-none outline-none text-[13px] text-[#2c3a4a] placeholder:text-[#9daebb] placeholder:font-light py-1.5",
                  style: { fontFamily: "'Noto Serif SC', serif" },
                  placeholder: "落入水面的碎片…",
                  value: f,
                  onChange: (t) => F(t.target.value),
                  onFocus: () => _(!0),
                  onKeyDown: (t) => {
                    t.key === "Enter" &&
                      !t.shiftKey &&
                      (t.preventDefault(), q());
                  },
                }),
                e.jsx("button", {
                  className:
                    "w-[30px] h-[30px] rounded-full bg-[rgba(140,185,225,0.12)] text-[#9daebb] flex items-center justify-center shrink-0 transition-all hover:bg-[rgba(140,185,225,0.25)] hover:text-[#6b7d8e] disabled:opacity-30",
                  onClick: q,
                  disabled: !f.trim(),
                  children: e.jsx(Se, { className: "w-[13px] h-[13px]" }),
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsxs("div", {
        className:
          "fixed bottom-[88px] left-1/2 -translate-x-1/2 pointer-events-none z-0 opacity-25",
        children: [
          e.jsx("div", {
            className:
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-[rgba(175,210,240,0.25)] rounded-full animate-ripple1",
          }),
          e.jsx("div", {
            className:
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-[rgba(175,210,240,0.25)] rounded-full animate-ripple2",
          }),
          e.jsx("div", {
            className:
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-[rgba(175,210,240,0.25)] rounded-full animate-ripple3",
          }),
        ],
      }),
    ],
  });
}
export { nt as default };
