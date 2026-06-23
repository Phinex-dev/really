import { r as h, j as e } from "./index-C41onZB-.js";
import {
  c as Ie,
  u as qe,
  l as xe,
  T as Ae,
  E as Ne,
  P as He,
  aN as Ke,
  U as Qe,
} from "./App-CYgIjxWH.js";
import { A as ye } from "./ApiErrorCard-DsY_S22O.js";
import { f as X } from "./gemini-CeriFUnH.js";
import { C as he } from "./chevron-left-CTqCLzU8.js";
import { L as me } from "./loader-circle-CcTwnOUB.js";
import { R as Z } from "./rotate-ccw-CbYjPK1x.js";
import { C as ke } from "./chevron-down-DsGpUXIv.js";
import { S as Ze } from "./send-DYTL5zGj.js";
import "./circle-alert-JwRkSIRb.js";
import "./giftFulfillment-DLU8FseI.js";
import "./initialShopItems-Bgx56oyu.js";
import "./worldBookScopes-B0JaUaci.js";
import "./llmFetch-C_SjUca9.js";
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xe = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm",
      },
    ],
  ],
  et = Ie("moon", Xe);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tt = [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ],
  st = Ie("sun", tt);
function Te(a, s) {
  try {
    return JSON.parse(a);
  } catch {
    throw new Error(`浮生：${s}返回的内容无法解析为 JSON`);
  }
}
function Re(a, s, r) {
  const d = r === "男" || r === "男性" ? "他" : "她";
  switch (a) {
    case "second-person":
      return "使用第二人称叙事，称呼用户为「你」。";
    case "first-person":
      return "使用第一人称叙事，称呼角色自己为「我」，让读者代入该角色。";
    case "third-limited":
      return `使用第三人称有限视角叙事，称呼用户角色为「${s}」或「${d}」。`;
  }
}
function Ee(a) {
  const s = a.filter((r) => r.isGlobalActive);
  return s.length === 0
    ? ""
    : `【全局世界书】
${s.map(
  (r) => `[${r.title}]（类型：${r.categoryId}）
${r.content}`
).join(`
`)}`;
}
function nt(a, s) {
  return a.map((r) => {
    const d = [`名字：${r.name}`];
    r.gender && d.push(`性别：${r.gender}`),
      r.intro && d.push(`简介：${r.intro}`);
    const o = new Set(r.mountedWorldBookIds || []),
      f = s.filter(
        (c) => c.categoryId === "lore" && o.has(c.id) && !c.isGlobalActive
      );
    f.length > 0 &&
      d.push(`补充背景知识：
${f.map((c) => `- ${c.title}：${c.content}`).join(`
`)}`),
      d.push(`人设：${r.background}`);
    const u = s.filter(
      (c) => c.categoryId === "patch" && o.has(c.id) && !c.isGlobalActive
    );
    return (
      u.length > 0 &&
        d.push(`灵魂补丁：
${u.map((c) => `- ${c.title}：${c.content}`).join(`
`)}`),
      d.join(`
`)
    );
  }).join(`
---
`);
}
function rt(a, s, r, d, o, f = 8, u = []) {
  const c = [],
    p = Ee(u);
  p && c.push(p),
    c.push(`【世界观】
场景：${a.scene}
冲突种子：${a.conflictSeed}
氛围关键词：${a.keywords.join("、")}
暗线：${a.hiddenArc}`);
  const j = Object.entries(a.characterRoles).map(([v, b]) => {
    const N = d.find((M) => M.id === v),
      T = (N == null ? void 0 : N.name) ?? v,
      R = N != null && N.background ? `（原始性格特征：${N.background}）` : "";
    return `${T}：${b}${R}`;
  });
  if (o) {
    const v = o.background ? `（原始性格特征：${o.background}）` : "";
    j.unshift(`${o.name}（用户）：${a.userRole}${v}`);
  } else j.unshift(`用户：${a.userRole}`);
  c.push(`【角色（平行身份）】
${j.join(`
`)}`),
    r.length > 0 &&
      c.push(`【之前的故事摘要】
${r.map((v) => v.text).join(`
`)}`);
  const k = s.slice(-f);
  return (
    k.length > 0 &&
      c.push(`【最近对话】
${k.map((v) =>
  v.role === "narrator" ? `[叙述者] ${v.text}` : `[用户选择] ${v.text}`
).join(`
`)}`),
    c.join(`

`)
  );
}
function Me(a) {
  return a.map((s) => {
    if (s.type === "narration") return s.text;
    const r = s.action ? `（${s.action}）` : "";
    return `${s.character}${r}：「${s.text}」`;
  }).join(`
`);
}
function at(a) {
  let s = a.trim();
  for (
    ;
    (s.startsWith("「") && s.endsWith("」")) ||
    (s.startsWith("『") && s.endsWith("』")) ||
    (s.startsWith("“") && s.endsWith("”")) ||
    (s.startsWith('"') && s.endsWith('"') && s.length > 1) ||
    (s.startsWith("'") && s.endsWith("'") && s.length > 1) ||
    (s.startsWith("‘") && s.endsWith("’"));

  )
    s = s.slice(1, -1).trim();
  return s;
}
function De(a) {
  return Array.isArray(a)
    ? a
        .map((s) =>
          s.type === "dialogue"
            ? {
                type: "dialogue",
                text: at(String(s.text || "")),
                character: String(s.character || ""),
                action: s.action ? String(s.action) : void 0,
              }
            : { type: "narration", text: String(s.text || "") }
        )
        .filter((s) => s.text)
    : [];
}
async function it(a) {
  const {
      preset: s,
      user: r,
      characters: d,
      perspective: o,
      userTheme: f,
      worldBooks: u = [],
    } = a,
    c = nt(d, u),
    p = Re(o, r.name, r.gender),
    j = Ee(u),
    k = `你是「浮生」系统的世界架构师。

任务：基于下列角色的性格和人设，构建一个平行宇宙世界观，并撰写开场白。

## 角色信息

### 用户
名字：${r.name}
性别：${r.gender}
简介：${r.intro}
背景：${r.background}

### AI 角色
${c}

${
  j
    ? `## 全局世界书
以下是全局规则和设定，在构建世界观时必须遵守：
${j}
`
    : ""
}${
      f
        ? `## 用户指定题材方向（最高优先级）
用户明确要求的题材是：「${f}」
你必须严格按照这个方向构建世界观。不要偏离用户指定的题材去生成悬疑、惊悚、奇幻等用户没有要求的类型。
`
        : `## 题材方向
由你自由发挥，请大胆创造有趣且出人意料的设定。
`
    }
## 叙事视角
${p}

## 输出要求
返回严格 JSON，结构如下：
{
  "title": "世界短标题（2-6字，用·分隔，如「法租界·雨夜」「星际矿场」「末日花园」）",
  "scene": "时代与场景描述（2-3 句话，要有画面感）",
  "characterRoles": {
    "<角色ID>": "该角色在平行世界的身份与处境（1-2 句）"
  },
  "userRole": "用户在平行世界的身份与处境（1-2 句）",
  "conflictSeed": "核心冲突种子（1 句话，引出故事张力）",
  "keywords": ["氛围关键词1", "关键词2", "关键词3"],
  "hiddenArc": "1-2 句话描述故事暗线，这条暗线将在背景中影响故事走向但不会直接告知用户",
  "openingSegments": [
    { "type": "narration", "text": "场景描写…" },
    { "type": "dialogue", "character": "角色名", "text": "角色说的话", "action": "可选的动作描写，必须是完整的句子，有句号。" },
    { "type": "narration", "text": "叙事继续…" }
  ],
  "choices": [
    { "id": 1, "text": "选项1（≤15字）", "tag": "标签" },
    { "id": 2, "text": "选项2（≤15字）", "tag": "标签" },
    { "id": 3, "text": "选项3（≤15字）", "tag": "标签" }
  ]
}

## 核心原则
- 角色的平行身份必须保留其原始人设的核心性格特征，但可以放到完全不同的背景中
- 如果用户指定了题材方向，必须严格遵守，这是最高优先级；世界观的氛围、冲突类型、暗线都必须围绕用户指定的题材展开
- 如果用户没有指定题材，则自由发挥，大胆创造有趣且出人意料的设定
- 开场白用文学化的叙事语言，不要写成说明文
- 开场白中应该自然地让至少一个角色开口说话，让场景活起来
- openingSegments 产生 4-10 个 segments，总字数 500-800 字，充分铺开场景和角色登场
- 三个选项应指向不同的故事方向，各有特色，但都要符合用户指定的题材方向
- 暗线要巧妙，与表面冲突形成反差或互补，同样不能偏离题材方向
- characterRoles 的 key 必须用角色 ID：${d.map((M) => M.id).join(", ")}`,
    { content: v } = await X(s, k, !0),
    b = Te(v, "世界观生成"),
    N = {
      title: b.title || "",
      scene: b.scene || "",
      characterRoles: b.characterRoles || {},
      userRole: b.userRole || "",
      conflictSeed: b.conflictSeed || "",
      keywords: Array.isArray(b.keywords) ? b.keywords : [],
      hiddenArc: b.hiddenArc || "",
    },
    T = (b.choices || []).map((M, ee) => ({
      id: M.id ?? ee + 1,
      text: String(M.text || ""),
      tag: String(M.tag || ""),
    })),
    R = De(b.openingSegments || []);
  return {
    worldSetting: N,
    openingSegments: R,
    openingText: R.length > 0 ? Me(R) : String(b.openingText || ""),
    openingChoices: T,
  };
}
async function Se(a) {
  const {
      preset: s,
      user: r,
      characters: d,
      session: o,
      userInput: f,
      worldBooks: u = [],
    } = a,
    c = rt(o.worldSetting, o.messages, o.summaries, d, r, 8, u),
    p = Re(o.perspective, r.name, r.gender),
    j = o.messages.filter((T) => T.role === "user").length,
    k = `你是「浮生」故事的叙述者，负责推进平行宇宙剧情。
你同时扮演所有参与角色，在叙事中穿插角色的对话和动作。根据情境判断谁该说话、谁该行动，不是每个角色每轮都要出场。

## 上下文
${c}

## 叙事视角
${p}

## 用户的行动
${f}

## 当前进度
这是用户的第 ${j} 次行动。

## 输出要求
返回严格 JSON：
{
  "segments": [
    { "type": "narration", "text": "旁白叙事…" },
    { "type": "dialogue", "character": "角色名", "text": "角色说的话", "action": "可选的动作描写，必须是完整的句子，有句号。" },
    { "type": "narration", "text": "旁白继续…" }
  ],
  "choices": [
    { "id": 1, "text": "选项1（≤15字）", "tag": "标签" },
    { "id": 2, "text": "选项2（≤15字）", "tag": "标签" },
    { "id": 3, "text": "选项3（≤15字）", "tag": "标签" }
  ],
  "isEnding": false
}

segments 说明：
- "narration"：旁白叙事，描绘场景、氛围、内心活动
- "dialogue"：角色对话，character 必须是角色的名字，text 是角色说的话，action 可选（一句话，必须是完整的句子，有句号。）
- 每次推进产生 4-10 个 segments，自然交织旁白和对话
- 全部 segments 加起来 500-800 字，充分展开场景描写和角色互动

## isEnding 说明
- isEnding 表示"这个故事是否已经走到一个自然的结局点"
- 当故事中的核心冲突已基本解决、角色的命运走向明朗、叙事弧线接近收束时，设为 true
- 一般来说，前 8 轮不要设为 true；第 8 轮之后，如果叙事节奏合适，可以开始收束
- 当 isEnding 为 true 时，这一轮的叙事应有"落幕感"——可以用意象、氛围、角色的一句话来暗示故事正走向终点
- 即使 isEnding 为 true，仍然提供 3 个选项，让用户可以选择继续故事

## 角色扮演规则
- 你负责扮演所有 AI 角色，让他们开口说话、做出动作
- 每个角色的台词和行为必须贴合其平行身份的性格
- 根据情境判断谁该参与这个场景，不用每轮所有角色都出场
- 对话要有性格化的口吻，不要写成千篇一律的旁白体

## 叙事优先级（从高到低）
1. **氛围感** — 场景描写要有画面、气味、声音，让读者沉浸
2. **选项有趣** — 三个选项必须指向截然不同的故事方向，带有性格色彩或道德抉择
3. **角色像那个角色** — AI 角色的对话和行为必须贴合其平行身份的性格
4. **叙事节奏** — 不要总是紧张对峙，松弛与高潮交替，偶尔给日常、幽默、温情留空间
5. **逻辑自洽** — 但不要为了自洽牺牲上面四点

## 关键规则
- 每次推进只写一个场景片段，不要试图把故事推进太远
- 暗线应该以微妙的方式影响故事发展（伏笔、氛围暗示），但不要在叙事中直接点破
- 不要重复用户的选择内容，直接展开该选择引发的后续
- 如果用户输入了自由文本而非选项，灵活接纳并合理融入故事`,
    { content: v } = await X(s, k, !0),
    b = Te(v, "故事推进"),
    N = De(b.segments || []);
  return {
    segments: N,
    text: N.length > 0 ? Me(N) : String(b.narratorText || ""),
    choices: (b.choices || []).map((T, R) => ({
      id: T.id ?? R + 1,
      text: String(T.text || ""),
      tag: String(T.tag || ""),
    })),
    isEnding: !!b.isEnding,
  };
}
async function lt(a) {
  const { preset: s, messages: r, existingSummaries: d } = a,
    o =
      d.length > 0
        ? `已有摘要：
${d.map((p) => p.text).join(`
`)}

`
        : "",
    f = r.map((p) =>
      p.role === "narrator" ? `[叙述者] ${p.text}` : `[用户] ${p.text}`
    ).join(`
`),
    u = `你是故事摘要助手。请将以下故事片段压缩为简洁的叙事摘要。

${o}需要摘要的新内容：
${f}

要求：
- 保留关键情节转折、角色互动、重要决策
- 2-4 句话，100 字以内
- 不要丢失任何会影响后续剧情理解的细节
- 只输出摘要文本，不要任何额外格式`,
    { content: c } = await X(s, u, !1);
  return c.trim();
}
async function ot(a) {
  const { preset: s, worldSetting: r, summaries: d, messages: o } = a,
    f =
      d.length > 0
        ? d.map((p) => p.text).join(`
`)
        : o
            .slice(-10)
            .map((p) =>
              p.role === "narrator" ? `[叙述者] ${p.text}` : `[用户] ${p.text}`
            ).join(`
`),
    u = `以下是一段平行宇宙故事的完整记录。

## 世界观设定
场景：${r.scene}
冲突：${r.conflictSeed}
关键词：${r.keywords.join("、")}

## 故事经过
${f}

请为这段故事写一段"判词"——用几句话总结这段故事的核心：
谁做了什么关键选择，走向了什么结局，留下了什么遗憾或圆满。

重要：基于**实际发生的故事内容**生成判词，不要基于预设暗线。用户实际走过的路才是这段浮生的真正故事。

风格要求：
- 与世界观的氛围匹配（古风设定用古风语言，现代设定用现代语言，赛博朋克用冷硬风格……）
- 简短，**严格不超过 50 字**
- 有诗意，像一枚印章盖在故事的最后一页
- 只输出判词文本，不要引号、不要额外格式

判词示例（仅供风格参考，不要照搬）：
- 民国风："法租界的雨停了三次，你们错过了两次，赶上了最后一次。"
- 赛博朋克："数据洪流里捞出一段未加密的记忆。已归档。访问权限：仅限当事人。"
- 奇幻："那条龙最终没有被杀死，它只是决定不再飞了。"
- 校园日常："六月的蝉还在叫，但留下来的人已经听懂了它在说什么。"`,
    { content: c } = await X(s, u, !1);
  return c.trim().replace(/^["「『]+|["」』]+$/g, "");
}
const ct = 16;
function dt(a, s) {
  const r = s.length > 0 ? s[s.length - 1].coveredUpTo : 0;
  return a.length - r >= ct;
}
function xt(a, s) {
  const r = s.length > 0 ? s[s.length - 1].coveredUpTo : 0,
    d = a.length - 8;
  return d <= r ? [] : a.slice(r, d);
}
const A = { textIndent: "2em", textAlign: "justify" };
function It() {
  const {
      setCurrentApp: a,
      characters: s,
      currentUser: r,
      floatingLifeSessions: d,
      setFloatingLifeSessions: o,
      apiPresets: f,
      activePresetId: u,
      worldBooks: c,
      activeUserId: p,
      userContacts: j,
    } = qe(),
    k = d.filter((t) => t.userId === p),
    v = j[p] || [],
    b = s.filter((t) => v.includes(t.id)),
    N = r.gender === "男" || r.gender === "男性" ? "他" : "她",
    T = [
      {
        value: "second-person",
        label: "第二人称",
        desc: "「你推开了那扇门…」",
      },
      {
        value: "third-limited",
        label: "第三人称",
        desc: `「${N}推开了那扇门…」`,
      },
      { value: "first-person", label: "第一人称", desc: "「我推开了那扇门…」" },
    ],
    [R, M] = h.useState(
      () => localStorage.getItem("floating_light_mode") === "1"
    ),
    ee = h.useCallback(() => {
      M((t) => {
        const l = !t;
        return (
          localStorage.setItem("floating_light_mode", l ? "1" : "0"),
          document.documentElement.style.setProperty("--fl-switch", "1"),
          requestAnimationFrame(() => {
            (document.body.style.transform = "translateZ(0)"),
              requestAnimationFrame(() => {
                (document.body.style.transform = ""),
                  document.documentElement.style.removeProperty("--fl-switch");
              });
          }),
          l
        );
      });
    }, []),
    te = R ? " echoes-floating-light" : "",
    [J, L] = h.useState(null),
    [We, Y] = h.useState(!1),
    [q, pe] = h.useState([]),
    [ge, Ue] = h.useState("third-limited"),
    [ue, fe] = h.useState(""),
    [S, B] = h.useState(!1),
    [H, U] = h.useState(null),
    [F, be] = h.useState(""),
    [G, se] = h.useState(null),
    K = h.useRef(null),
    _e = h.useRef(null),
    ne = h.useRef({}),
    [Pe, Le] = h.useState(!1),
    [V, Be] = h.useState(!1),
    [_, re] = h.useState(null),
    n = J ? k.find((t) => t.id === J) ?? null : null,
    ve = k.filter((t) => t.status === "active"),
    je = k.filter((t) => t.status === "archived"),
    D = h.useCallback(() => {
      const t = u ? f.find((l) => l.id === u) : void 0;
      if (!(t != null && t.endpoint))
        throw new Error("请先在设置中配置 API 预设");
      return t;
    }, [f, u]),
    w = h.useCallback(
      (t, l) => {
        o((m) => m.map((i) => (i.id === t ? { ...i, ...l } : i)));
      },
      [o]
    ),
    ae = h.useCallback(() => {
      setTimeout(() => {
        var t;
        return (t = K.current) == null
          ? void 0
          : t.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }, []),
    O = h.useCallback((t) => {
      setTimeout(() => {
        var m;
        const l = ne.current[t];
        if (l) {
          l.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        (m = K.current) == null || m.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }, []),
    Oe = h.useCallback(
      (t) => (l) => {
        if (l) {
          ne.current[t] = l;
          return;
        }
        delete ne.current[t];
      },
      []
    ),
    Q = h.useCallback(
      async (t) => {
        if (!dt(t.messages, t.summaries)) return;
        const l = xt(t.messages, t.summaries);
        if (l.length !== 0)
          try {
            const m = D(),
              g = {
                text: await lt({
                  preset: m,
                  messages: l,
                  existingSummaries: t.summaries,
                }),
                coveredUpTo: t.messages.length - 8,
                generatedAt: Date.now(),
              };
            w(t.id, { summaries: [...t.summaries, g] });
          } catch (m) {
            console.warn("摘要生成失败（不影响游戏）:", m);
          }
      },
      [D, w]
    ),
    ie = h.useCallback(
      async (t) => {
        B(!0), U(null), se(null);
        try {
          const l = D(),
            m = s.filter((g) => t.participantIds.includes(g.id)),
            i = await it({
              preset: l,
              user: r,
              characters: m,
              perspective: t.perspective,
              userTheme: t.userTheme || void 0,
              worldBooks: c,
            });
          se(i),
            w(t.id, {
              worldSetting: i.worldSetting,
              pendingOpening: {
                openingSegments: i.openingSegments,
                openingText: i.openingText,
                openingChoices: i.openingChoices,
              },
            });
        } catch (l) {
          U({ title: "世界观生成失败", detail: xe(l) });
        } finally {
          B(!1);
        }
      },
      [D, s, r, w, c]
    ),
    ze = h.useCallback(() => {
      if (!n) return;
      const t = G
        ? {
            openingSegments: G.openingSegments,
            openingText: G.openingText,
            openingChoices: G.openingChoices,
          }
        : n.pendingOpening;
      if (!t) return;
      const l = {
        id: `msg_${Date.now()}`,
        role: "narrator",
        text: t.openingText,
        segments: t.openingSegments.length > 0 ? t.openingSegments : void 0,
        choices: t.openingChoices,
        timestamp: Date.now(),
      };
      w(n.id, { messages: [l], pendingOpening: void 0 }), se(null), O(l.id);
    }, [n, G, w, O]),
    le = h.useCallback(
      async (t, l) => {
        if (!n || S) return;
        B(!0), U(null);
        const m = {
            id: `msg_${Date.now()}`,
            role: "user",
            text: t,
            choiceId: l ?? void 0,
            timestamp: Date.now(),
          },
          i = [...n.messages, m];
        w(n.id, { messages: i }), be(""), ae();
        try {
          const g = D(),
            y = s.filter((P) => n.participantIds.includes(P.id)),
            I = await Se({
              preset: g,
              user: r,
              characters: y,
              session: { ...n, messages: i },
              userInput: t,
              worldBooks: c,
            }),
            $ = {
              id: `msg_${Date.now() + 1}`,
              role: "narrator",
              text: I.text,
              segments: I.segments.length > 0 ? I.segments : void 0,
              choices: I.choices,
              isEnding: I.isEnding || void 0,
              timestamp: Date.now(),
            },
            x = [...i, $];
          w(n.id, { messages: x }), O($.id), Q({ ...n, messages: x });
        } catch (g) {
          w(n.id, { messages: n.messages }),
            U({ title: "故事推进失败", detail: xe(g) });
        } finally {
          B(!1);
        }
      },
      [n, S, D, s, r, w, ae, O, Q, c]
    ),
    Fe = h.useCallback(() => {
      if (!n) return;
      const t = n.messages;
      t.length > 0 &&
        t[t.length - 1].role === "user" &&
        w(n.id, { messages: t.slice(0, -1) });
    }, [n, w]),
    Ge = h.useCallback(async () => {
      if (!n || S) return;
      const t = n.messages;
      if (
        t.length < 2 ||
        t[t.length - 1].role !== "narrator" ||
        t[t.length - 2].role !== "user"
      )
        return;
      const l = t[t.length - 2],
        i = (t[t.length - 1].choices || []).filter((y) => y.text.trim()),
        g = t.slice(0, -1);
      w(n.id, { messages: g }), B(!0), U(null);
      try {
        const y = D(),
          I = s.filter((E) => n.participantIds.includes(E.id)),
          $ = await Se({
            preset: y,
            user: r,
            characters: I,
            session: { ...n, messages: g },
            userInput: l.text,
            worldBooks: c,
          }),
          x = $.choices.filter((E) => E.text.trim()),
          P = {
            id: `msg_${Date.now() + 1}`,
            role: "narrator",
            text: $.text,
            segments: $.segments.length > 0 ? $.segments : void 0,
            choices: x.length > 0 ? x : i,
            isEnding: $.isEnding || void 0,
            timestamp: Date.now(),
          },
          W = [...g, P];
        w(n.id, { messages: W }), O(P.id), Q({ ...n, messages: W });
      } catch (y) {
        U({ title: "重新生成失败", detail: xe(y) });
      } finally {
        B(!1);
      }
    }, [n, S, D, s, r, w, ae, O, Q, c]),
    Ve = () => {
      if (q.length === 0) return;
      const t = {
        id: `fl_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        userId: p,
        status: "active",
        createdAt: Date.now(),
        archivedAt: null,
        worldSetting: {
          title: "",
          scene: "",
          characterRoles: {},
          userRole: "",
          conflictSeed: "",
          keywords: [],
          hiddenArc: "",
        },
        participantIds: q,
        perspective: ge,
        userTheme: ue || void 0,
        messages: [],
        summaries: [],
        verdict: null,
      };
      o((l) => [t, ...l]), L(t.id), Y(!1), pe([]), fe(""), ie(t);
    },
    oe = h.useCallback(
      (t) => {
        _ === t
          ? (o((l) => l.filter((m) => m.id !== t)),
            J === t && L(null),
            re(null))
          : re(t);
      },
      [_, o, J]
    ),
    we = async (t) => {
      const l = d.find((m) => m.id === t);
      if (l) {
        w(t, { status: "archived", archivedAt: Date.now() });
        try {
          const m = D(),
            i = await ot({
              preset: m,
              worldSetting: l.worldSetting,
              summaries: l.summaries,
              messages: l.messages,
            });
          w(t, { verdict: i });
        } catch (m) {
          console.warn("判词生成失败:", m);
        }
        L(null);
      }
    };
  if (n) {
    const t = n.status === "archived",
      l = s.filter((i) => n.participantIds.includes(i.id)),
      m =
        n.worldSetting.title || n.worldSetting.keywords.join("·") || "新的浮生";
    return (
      n.messages.length > 0,
      e.jsxs("div", {
        className: `echoes-page echoes-page-floating h-full flex flex-col text-slate-200 relative overflow-hidden${te}`,
        children: [
          e.jsx(mt, {}),
          e.jsx("div", {
            className:
              "echoes-page-header safe-top pb-4 px-4 bg-white/[0.03] backdrop-blur-md border-b border-white/[0.06] sticky top-0 z-10",
            children: e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx("button", {
                  onClick: () => L(null),
                  className:
                    "echoes-floating-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/10 text-slate-500 hover:text-slate-300 transition-colors",
                  children: e.jsx(he, { className: "w-6 h-6" }),
                }),
                e.jsxs("div", {
                  className: "min-w-0 flex-1",
                  children: [
                    e.jsx("h1", {
                      className:
                        "text-lg font-medium text-blue-100/60 font-serif tracking-wide",
                      children: m,
                    }),
                    n.worldSetting.keywords.length > 0 &&
                      e.jsx("div", {
                        className: "flex gap-1.5 mt-0.5",
                        children: n.worldSetting.keywords.map((i) =>
                          e.jsx(
                            "span",
                            {
                              className:
                                "px-1.5 py-0.5 text-[10px] text-slate-500 bg-white/[0.04] border border-white/[0.05] rounded",
                              children: i,
                            },
                            i
                          )
                        ),
                      }),
                  ],
                }),
                e.jsx("button", {
                  onClick: () => oe(n.id),
                  onBlur: () => _ === n.id && re(null),
                  className: `p-1.5 rounded-full transition-colors ${
                    _ === n.id
                      ? "bg-red-500/15 text-red-400 hover:bg-red-500/25"
                      : "hover:bg-white/10 text-slate-600 hover:text-slate-400"
                  }`,
                  title: _ === n.id ? "再点一次确认删除" : "删除",
                  children: e.jsx(Ae, { className: "w-4.5 h-4.5" }),
                }),
                !t &&
                  e.jsx("button", {
                    onClick: () => we(n.id),
                    className:
                      "px-3 py-1.5 text-[12px] text-slate-400 border border-white/[0.08] rounded-lg hover:bg-white/[0.06] transition-colors",
                    children: "封存",
                  }),
              ],
            }),
          }),
          e.jsx("div", {
            ref: _e,
            className: "flex-1 overflow-y-auto px-12 py-6",
            onScroll: (i) => {
              const g = i.currentTarget;
              Le(g.scrollHeight - g.scrollTop - g.clientHeight > 300);
            },
            children:
              n.messages.length === 0
                ? n.worldSetting.scene
                  ? e.jsxs("div", {
                      className: "space-y-5 pb-4",
                      children: [
                        e.jsxs("div", {
                          className: "text-center",
                          children: [
                            e.jsx("div", {
                              className:
                                "text-[11px] tracking-[6px] text-blue-200/20 mb-2",
                              children: "平行世界",
                            }),
                            e.jsx("div", {
                              className: "w-8 h-px bg-blue-200/10 mx-auto",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "px-4 py-3.5 bg-white/[0.03] border border-white/[0.06] rounded-lg",
                          children: [
                            e.jsx("div", {
                              className:
                                "text-[10px] text-slate-600 tracking-wide mb-1.5 text-center",
                              children: "时代与场景",
                            }),
                            e.jsx("p", {
                              className:
                                "text-sm text-slate-300 leading-relaxed font-serif",
                              style: A,
                              children: n.worldSetting.scene,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "px-4 py-3.5 bg-white/[0.03] border border-white/[0.06] rounded-lg space-y-2.5",
                          children: [
                            e.jsx("div", {
                              className:
                                "text-[10px] text-slate-600 tracking-wide text-center",
                              children: "角色身份",
                            }),
                            Object.entries(n.worldSetting.characterRoles).map(
                              ([i, g]) => {
                                const y = s.find((I) => I.id === i);
                                return e.jsxs(
                                  "div",
                                  {
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "text-sm text-blue-100/50 text-center",
                                        children:
                                          (y == null ? void 0 : y.name) ?? i,
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-sm text-slate-400 mt-0.5",
                                        style: A,
                                        children: g,
                                      }),
                                    ],
                                  },
                                  i
                                );
                              }
                            ),
                            e.jsxs("div", {
                              className: "pt-1.5 border-t border-white/[0.04]",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "text-sm text-blue-100/50 text-center",
                                  children: [r.name, "（你）"],
                                }),
                                e.jsx("p", {
                                  className: "text-sm text-slate-400 mt-0.5",
                                  style: A,
                                  children: n.worldSetting.userRole,
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "px-4 py-3.5 bg-white/[0.03] border border-white/[0.06] rounded-lg",
                          children: [
                            e.jsx("div", {
                              className:
                                "text-[10px] text-slate-600 tracking-wide mb-1.5 text-center",
                              children: "冲突种子",
                            }),
                            e.jsx("p", {
                              className: "text-sm text-slate-400 font-serif",
                              style: A,
                              children: n.worldSetting.conflictSeed,
                            }),
                            n.worldSetting.keywords.length > 0 &&
                              e.jsx("div", {
                                className: "flex flex-wrap gap-1.5 mt-2",
                                children: n.worldSetting.keywords.map((i) =>
                                  e.jsx(
                                    "span",
                                    {
                                      className:
                                        "px-2 py-0.5 text-[10px] text-slate-500 bg-white/[0.04] border border-white/[0.06] rounded",
                                      children: i,
                                    },
                                    i
                                  )
                                ),
                              }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex gap-3 pt-2",
                          children: [
                            e.jsxs("button", {
                              onClick: () => ie(n),
                              disabled: S,
                              className:
                                "flex-1 py-3 rounded-lg text-sm text-slate-400 bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] transition-colors inline-flex items-center justify-center gap-1.5 disabled:opacity-40",
                              children: [
                                S
                                  ? e.jsx(me, {
                                      className: "w-3.5 h-3.5 animate-spin",
                                    })
                                  : e.jsx(Z, { className: "w-3.5 h-3.5" }),
                                "重新生成",
                              ],
                            }),
                            e.jsx("button", {
                              onClick: ze,
                              disabled: S,
                              className:
                                "flex-1 py-3 rounded-lg text-sm text-slate-200 bg-white/10 border border-white/10 hover:bg-white/15 transition-colors disabled:opacity-40",
                              children: "进入浮生",
                            }),
                          ],
                        }),
                      ],
                    })
                  : e.jsx("div", {
                      className:
                        "flex flex-col items-center justify-center h-full text-center gap-4",
                      children: S
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(me, {
                                className:
                                  "w-8 h-8 text-blue-200/25 animate-spin",
                              }),
                              e.jsx("p", {
                                className: "text-sm text-slate-500",
                                children: "正在造梦…",
                              }),
                            ],
                          })
                        : H
                        ? e.jsxs("div", {
                            className: "w-full max-w-sm",
                            children: [
                              e.jsx(ye, { error: H, onClose: () => U(null) }),
                              e.jsx("div", {
                                className: "flex justify-center mt-3",
                                children: e.jsxs("button", {
                                  onClick: () => ie(n),
                                  className:
                                    "px-4 py-2 text-xs text-slate-300 bg-white/[0.06] border border-white/10 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-1.5",
                                  children: [
                                    e.jsx(Z, { className: "w-3.5 h-3.5" }),
                                    " 重试",
                                  ],
                                }),
                              }),
                            ],
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(Ne, {
                                className: "w-10 h-10 text-slate-600",
                              }),
                              e.jsx("p", {
                                className: "text-sm text-slate-400",
                                children: "世界观尚未生成",
                              }),
                            ],
                          }),
                    })
                : e.jsxs("div", {
                    className: "space-y-5",
                    children: [
                      t &&
                        n.verdict &&
                        e.jsxs("div", {
                          className:
                            "flex flex-col items-center gap-4 pt-4 pb-6 mb-2 border-b border-white/[0.04]",
                          children: [
                            e.jsx("div", {
                              className:
                                "text-[11px] tracking-[6px] text-blue-200/20",
                              children: "判词",
                            }),
                            e.jsx("div", {
                              className: "w-8 h-px bg-blue-200/10",
                            }),
                            e.jsx("p", {
                              className:
                                "text-base leading-relaxed text-center text-blue-100/60 max-w-[280px] font-serif",
                              children: n.verdict,
                            }),
                            e.jsx("div", {
                              className: "w-8 h-px bg-blue-200/10",
                            }),
                            e.jsxs("div", {
                              className: "text-xs text-slate-600 text-center",
                              children: [
                                m,
                                e.jsx("br", {}),
                                e.jsxs("span", {
                                  className: "text-[11px]",
                                  children: [
                                    "与 ",
                                    l.map((i) => i.name).join("、"),
                                    " 的浮生",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      n.worldSetting.scene &&
                        e.jsxs("div", {
                          className: "pb-4 mb-1 border-b border-white/[0.04]",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-[13px] leading-[1.8] text-slate-400 font-serif",
                              style: A,
                              children: n.worldSetting.scene,
                            }),
                            e.jsxs("div", {
                              className: "mt-3 space-y-1",
                              children: [
                                l.map((i) => {
                                  const g = n.worldSetting.characterRoles[i.id];
                                  return e.jsx(
                                    "p",
                                    {
                                      className:
                                        "text-[12px] leading-[1.7] text-slate-500",
                                      style: A,
                                      children: g ? `${i.name}——${g}` : i.name,
                                    },
                                    i.id
                                  );
                                }),
                                n.worldSetting.userRole &&
                                  e.jsxs("p", {
                                    className:
                                      "text-[12px] leading-[1.7] text-slate-500",
                                    style: A,
                                    children: [
                                      r.name,
                                      "——",
                                      n.worldSetting.userRole,
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      (() => {
                        const i = n.summaries[n.summaries.length - 1],
                          g = (i == null ? void 0 : i.coveredUpTo) ?? -1,
                          y = g >= 0 ? n.messages.slice(0, g + 1) : [],
                          I = g >= 0 ? n.messages.slice(g + 1) : n.messages,
                          $ = n.messages;
                        return e.jsxs(e.Fragment, {
                          children: [
                            y.length > 0 &&
                              e.jsxs("div", {
                                className: "mb-2",
                                children: [
                                  e.jsxs("button", {
                                    onClick: () => Be(!V),
                                    className:
                                      "w-full flex items-center gap-2 py-2.5 text-[12px] text-slate-500 hover:text-slate-400 transition-colors",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "flex-1 h-px bg-white/[0.04]",
                                      }),
                                      e.jsx(ke, {
                                        className: `w-3.5 h-3.5 transition-transform ${
                                          V ? "rotate-180" : ""
                                        }`,
                                      }),
                                      e.jsx("span", {
                                        children: V
                                          ? "收起早期故事"
                                          : `${y.length} 条早期消息已折叠`,
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "flex-1 h-px bg-white/[0.04]",
                                      }),
                                    ],
                                  }),
                                  V &&
                                    e.jsx("div", {
                                      className: "space-y-5 opacity-70 mb-5",
                                      children: y.map((x, P) =>
                                        e.jsx(
                                          "div",
                                          {
                                            children:
                                              x.role === "narrator"
                                                ? x.segments &&
                                                  x.segments.length > 0
                                                  ? e.jsx("div", {
                                                      className: "space-y-4",
                                                      children: x.segments.map(
                                                        (W, E) =>
                                                          e.jsx(
                                                            Ce,
                                                            {
                                                              segment: W,
                                                              characters: l,
                                                              currentUser: r,
                                                            },
                                                            E
                                                          )
                                                      ),
                                                    })
                                                  : e.jsx("div", {
                                                      className: "space-y-2",
                                                      children: x.text
                                                        .split(
                                                          `
`
                                                        )
                                                        .filter(Boolean)
                                                        .map((W, E) =>
                                                          e.jsx(
                                                            "p",
                                                            {
                                                              className:
                                                                "text-[14px] leading-[1.9] text-slate-300 font-serif",
                                                              style: A,
                                                              children: W,
                                                            },
                                                            E
                                                          )
                                                        ),
                                                    })
                                                : e.jsx("div", {
                                                    className:
                                                      "flex justify-end py-1",
                                                    children: e.jsxs("div", {
                                                      className:
                                                        "px-4 py-2.5 bg-blue-400/[0.04] border border-blue-300/[0.08] rounded-lg text-[13px] text-blue-200/40 max-w-[80%] font-serif",
                                                      children: ["▸ ", x.text],
                                                    }),
                                                  }),
                                          },
                                          x.id
                                        )
                                      ),
                                    }),
                                  !V &&
                                    i &&
                                    e.jsxs("div", {
                                      className:
                                        "px-4 py-3 bg-white/[0.02] border border-white/[0.04] rounded-lg mb-4",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "text-[11px] text-slate-600 tracking-wider mb-1.5",
                                          children: "此前故事",
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-[13px] leading-[1.8] text-slate-500 font-serif",
                                          children: i.text,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            I.map((x, P) => {
                              const W = $.length - I.length + P,
                                E = W === $.length - 1,
                                ce = x.role === "narrator" && E,
                                Je = E && x.role === "user" && !S && !t,
                                Ye =
                                  !E &&
                                  x.role === "narrator" &&
                                  W === $.length - 2 &&
                                  $[$.length - 1].role === "user" &&
                                  !S &&
                                  !t,
                                z = (ce || Ye) && !t && !S;
                              return e.jsxs(
                                "div",
                                {
                                  ref: Oe(x.id),
                                  style: { scrollMarginTop: "24px" },
                                  children: [
                                    x.role === "narrator"
                                      ? x.segments && x.segments.length > 0
                                        ? e.jsx("div", {
                                            className: "space-y-4",
                                            children: x.segments.map((C, de) =>
                                              e.jsx(
                                                Ce,
                                                {
                                                  segment: C,
                                                  characters: l,
                                                  currentUser: r,
                                                },
                                                de
                                              )
                                            ),
                                          })
                                        : e.jsx("div", {
                                            className: "space-y-2",
                                            children: x.text
                                              .split(
                                                `
`
                                              )
                                              .filter(Boolean)
                                              .map((C, de) =>
                                                e.jsx(
                                                  "p",
                                                  {
                                                    className:
                                                      "text-[14px] leading-[1.9] text-slate-300 font-serif",
                                                    style: A,
                                                    children: C,
                                                  },
                                                  de
                                                )
                                              ),
                                          })
                                      : e.jsx("div", {
                                          className: "flex justify-end py-1",
                                          children: e.jsxs("div", {
                                            className:
                                              "px-4 py-2.5 bg-blue-400/[0.04] border border-blue-300/[0.08] rounded-lg text-[13px] text-blue-200/40 max-w-[80%] font-serif",
                                            children: ["▸ ", x.text],
                                          }),
                                        }),
                                    Je &&
                                      e.jsx("div", {
                                        className: "flex justify-end mt-1.5",
                                        children: e.jsxs("button", {
                                          onClick: Fe,
                                          className:
                                            "flex items-center gap-1.5 px-2.5 py-1 text-[11px] text-amber-400/50 hover:text-amber-300/70 transition-colors rounded hover:bg-white/[0.03]",
                                          children: [
                                            e.jsx(Z, { className: "w-3 h-3" }),
                                            "生成已中断，重新选择",
                                          ],
                                        }),
                                      }),
                                    ce &&
                                      !t &&
                                      !S &&
                                      n.messages.length >= 2 &&
                                      e.jsx("div", {
                                        className: "flex justify-end mt-1.5",
                                        children: e.jsxs("button", {
                                          onClick: Ge,
                                          className:
                                            "flex items-center gap-1.5 px-2.5 py-1 text-[11px] text-slate-600 hover:text-slate-400 transition-colors rounded hover:bg-white/[0.03]",
                                          children: [
                                            e.jsx(Z, { className: "w-3 h-3" }),
                                            "重新生成",
                                          ],
                                        }),
                                      }),
                                    x.choices &&
                                      x.choices.length > 0 &&
                                      (ce || x.role === "narrator") &&
                                      e.jsxs("div", {
                                        className: "mt-5 space-y-2.5",
                                        children: [
                                          z &&
                                            x.isEnding &&
                                            e.jsxs("div", {
                                              className:
                                                "text-center mb-4 space-y-3",
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "text-[11px] text-blue-200/35 tracking-[4px] font-serif",
                                                  children:
                                                    "故事似乎走到了尾声",
                                                }),
                                                e.jsx("button", {
                                                  onClick: () => we(n.id),
                                                  className:
                                                    "px-5 py-2.5 text-[12px] text-blue-200/50 border border-blue-200/15 rounded-lg hover:bg-blue-200/[0.04] hover:border-blue-200/20 transition-all font-serif tracking-wide",
                                                  children: "封存这段浮生",
                                                }),
                                                e.jsx("div", {
                                                  className:
                                                    "text-[10px] text-slate-700 tracking-[2px]",
                                                  children: "或者，继续书写",
                                                }),
                                              ],
                                            }),
                                          z &&
                                            !x.isEnding &&
                                            e.jsx("div", {
                                              className:
                                                "text-[11px] text-slate-600 tracking-[3px] text-center mb-3",
                                              children: "你的选择",
                                            }),
                                          x.choices.map((C) =>
                                            e.jsxs(
                                              "button",
                                              {
                                                disabled: !z,
                                                onClick: () =>
                                                  z && le(C.text, C.id),
                                                className: `w-full px-4 py-3.5 text-left bg-white/[0.02] border border-white/[0.06] rounded-lg transition-all flex items-center justify-between ${
                                                  z
                                                    ? "hover:bg-white/[0.06] hover:border-white/15 hover:translate-x-0.5"
                                                    : "opacity-30 pointer-events-none"
                                                }`,
                                                children: [
                                                  e.jsx("span", {
                                                    className:
                                                      "text-[13px] text-slate-400 font-serif",
                                                    children: C.text,
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "text-[10px] text-slate-600 shrink-0 ml-3 px-1.5 py-0.5 bg-white/[0.03] rounded",
                                                    children: C.tag,
                                                  }),
                                                ],
                                              },
                                              C.id
                                            )
                                          ),
                                          z &&
                                            e.jsxs("div", {
                                              className: "mt-3 flex gap-2",
                                              children: [
                                                e.jsx("input", {
                                                  value: F,
                                                  onChange: (C) =>
                                                    be(C.target.value),
                                                  onKeyDown: (C) => {
                                                    C.key === "Enter" &&
                                                      F.trim() &&
                                                      le(F.trim());
                                                  },
                                                  placeholder:
                                                    "或者，写下你想做的事…",
                                                  className:
                                                    "flex-1 px-4 py-3.5 bg-white/[0.02] border border-dashed border-white/[0.06] rounded-lg text-[13px] text-slate-300/80 placeholder-slate-700 font-serif outline-none focus:border-white/15 transition-colors",
                                                }),
                                                F.trim() &&
                                                  e.jsx("button", {
                                                    onClick: () => le(F.trim()),
                                                    className:
                                                      "px-3 py-3 bg-white/[0.04] border border-white/[0.06] rounded-lg hover:bg-white/[0.08] transition-colors",
                                                    children: e.jsx(Ze, {
                                                      className:
                                                        "w-4 h-4 text-slate-500",
                                                    }),
                                                  }),
                                              ],
                                            }),
                                        ],
                                      }),
                                  ],
                                },
                                x.id
                              );
                            }),
                          ],
                        });
                      })(),
                      S &&
                        e.jsxs("div", {
                          className: "flex items-center gap-2 py-4",
                          children: [
                            e.jsx(me, {
                              className:
                                "w-4 h-4 text-blue-200/20 animate-spin",
                            }),
                            e.jsx("span", {
                              className: "text-[11px] text-slate-700",
                              children: "落笔中…",
                            }),
                          ],
                        }),
                      H &&
                        !S &&
                        e.jsx(ye, {
                          error: H,
                          onClose: () => U(null),
                          className: "py-3",
                        }),
                      e.jsx("div", { ref: K }),
                    ],
                  }),
          }),
          Pe &&
            !t &&
            e.jsx("button", {
              onClick: () => {
                var i;
                return (i = K.current) == null
                  ? void 0
                  : i.scrollIntoView({ behavior: "smooth" });
              },
              className:
                "absolute bottom-20 right-4 z-20 p-2.5 rounded-full bg-white/[0.08] border border-white/[0.1] backdrop-blur-sm text-slate-400 hover:text-slate-200 hover:bg-white/[0.14] transition-all shadow-lg",
              children: e.jsx(ke, { className: "w-5 h-5" }),
            }),
        ],
      })
    );
  }
  return We
    ? e.jsxs("div", {
        className: `echoes-page echoes-page-floating h-full flex flex-col text-slate-200${te}`,
        children: [
          e.jsx("div", {
            className:
              "echoes-page-header safe-top pb-4 px-4 bg-white/[0.03] backdrop-blur-md border-b border-white/[0.06] sticky top-0 z-10",
            children: e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx("button", {
                  onClick: () => Y(!1),
                  className:
                    "echoes-floating-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/10 text-slate-500 hover:text-slate-300 transition-colors",
                  children: e.jsx(he, { className: "w-6 h-6" }),
                }),
                e.jsx("h1", {
                  className: "text-2xl font-bold text-blue-100/70",
                  children: "开启浮生",
                }),
              ],
            }),
          }),
          e.jsxs("div", {
            className: "flex-1 overflow-y-auto px-8 py-5 space-y-6",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("div", {
                    className: "text-xs text-slate-500 mb-3 tracking-wide",
                    children: "选择角色",
                  }),
                  e.jsx("div", {
                    className: "space-y-2",
                    children:
                      b.length === 0
                        ? e.jsx("div", {
                            className:
                              "text-center py-6 text-slate-500 text-xs",
                            children: "当前用户没有好友，请先在聊天页添加好友",
                          })
                        : b.map((t) => {
                            const l = q.includes(t.id);
                            return e.jsxs(
                              "button",
                              {
                                onClick: () =>
                                  pe((m) =>
                                    l
                                      ? m.filter((i) => i !== t.id)
                                      : [...m, t.id]
                                  ),
                                className: `w-full px-4 py-3 rounded-lg text-left flex items-center gap-3 transition-all border ${
                                  l
                                    ? "bg-white/10 border-white/20 text-slate-200"
                                    : "bg-white/[0.03] border-white/[0.06] text-slate-400 hover:bg-white/[0.06]"
                                }`,
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-medium overflow-hidden",
                                    style: {
                                      backgroundColor: t.avatarColor + "40",
                                    },
                                    children: t.avatarUrl
                                      ? e.jsx("img", {
                                          src: t.avatarUrl,
                                          alt: "",
                                          className:
                                            "w-full h-full object-cover",
                                        })
                                      : t.name[0],
                                  }),
                                  e.jsx("div", {
                                    className: "flex-1 min-w-0",
                                    children: e.jsx("div", {
                                      className: "text-sm truncate",
                                      children: t.name,
                                    }),
                                  }),
                                  l &&
                                    e.jsx("div", {
                                      className:
                                        "w-2 h-2 rounded-full bg-blue-300/50 shrink-0",
                                    }),
                                ],
                              },
                              t.id
                            );
                          }),
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("div", {
                    className: "text-xs text-slate-500 mb-3 tracking-wide",
                    children: "叙事视角",
                  }),
                  e.jsx("div", {
                    className: "space-y-2",
                    children: T.map((t) =>
                      e.jsxs(
                        "button",
                        {
                          onClick: () => Ue(t.value),
                          className: `w-full px-4 py-3 rounded-lg text-left transition-all border ${
                            ge === t.value
                              ? "bg-white/10 border-white/20"
                              : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"
                          }`,
                          children: [
                            e.jsx("div", {
                              className: "text-sm text-slate-300",
                              children: t.label,
                            }),
                            e.jsx("div", {
                              className: "text-[11px] text-slate-500 mt-0.5",
                              children: t.desc,
                            }),
                          ],
                        },
                        t.value
                      )
                    ),
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsxs("div", {
                    className: "text-xs text-slate-500 mb-3 tracking-wide",
                    children: [
                      "题材方向 ",
                      e.jsx("span", {
                        className: "text-slate-600",
                        children: "（可选，留空则 AI 随机生成）",
                      }),
                    ],
                  }),
                  e.jsx("input", {
                    value: ue,
                    onChange: (t) => fe(t.target.value),
                    placeholder: "例：末日公路片、民国悬疑、赛博朋克…",
                    className:
                      "w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-sm text-slate-300 placeholder-slate-600 outline-none focus:border-white/15 transition-colors",
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className: "shrink-0 px-4 py-4 border-t border-white/5",
            children: e.jsx("button", {
              onClick: Ve,
              disabled: q.length === 0,
              className:
                "w-full py-3 rounded-lg text-sm font-medium transition-all disabled:opacity-30 disabled:pointer-events-none bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10",
              children: "进入浮生",
            }),
          }),
        ],
      })
    : e.jsxs("div", {
        className: `echoes-page echoes-page-floating h-full flex flex-col text-slate-200${te}`,
        children: [
          e.jsx("div", {
            className:
              "echoes-page-header safe-top pb-4 px-4 bg-white/[0.03] backdrop-blur-md border-b border-white/[0.06] sticky top-0 z-10",
            children: e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx("button", {
                  onClick: () => a("home"),
                  className:
                    "echoes-floating-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/10 text-slate-500 hover:text-slate-300 transition-colors",
                  children: e.jsx(he, { className: "w-6 h-6" }),
                }),
                e.jsxs("div", {
                  className: "min-w-0 flex-1",
                  children: [
                    e.jsx("h1", {
                      className: "text-2xl font-bold text-blue-100/70",
                      children: "浮生",
                    }),
                    e.jsx("p", {
                      className: "text-[11px] text-slate-500 mt-0.5",
                      children: "一场醒来就忘的梦",
                    }),
                  ],
                }),
                e.jsx("button", {
                  onClick: ee,
                  className:
                    "echoes-floating-theme-btn p-2 rounded-full hover:bg-white/10 text-slate-500 hover:text-slate-300 transition-colors",
                  title: R ? "切换深色" : "切换浅色",
                  children: R
                    ? e.jsx(et, { className: "w-4 h-4" })
                    : e.jsx(st, { className: "w-4 h-4" }),
                }),
                e.jsx("button", {
                  onClick: () => Y(!0),
                  className:
                    "p-2 rounded-full hover:bg-white/10 text-slate-500 hover:text-slate-300 transition-colors",
                  children: e.jsx(He, { className: "w-5 h-5" }),
                }),
              ],
            }),
          }),
          e.jsx("div", {
            className: "flex-1 overflow-y-auto px-8 py-4 space-y-6",
            children:
              k.length === 0
                ? e.jsxs("div", {
                    className:
                      "flex flex-col items-center justify-center h-full text-center gap-4 pb-16",
                    children: [
                      e.jsx(Ne, { className: "w-10 h-10 text-slate-700" }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "text-sm text-slate-500",
                            children: "尚无故事",
                          }),
                          e.jsx("p", {
                            className: "text-xs text-slate-600 mt-1",
                            children: "在另一个世界里，他们是谁，你又是谁？",
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        onClick: () => Y(!0),
                        className:
                          "mt-2 px-5 py-2.5 text-xs text-slate-300 bg-white/[0.06] border border-white/10 rounded-lg hover:bg-white/10 transition-colors",
                        children: "开启浮生",
                      }),
                    ],
                  })
                : e.jsxs(e.Fragment, {
                    children: [
                      ve.length > 0 &&
                        e.jsxs("div", {
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2 mb-3",
                              children: [
                                e.jsx(Ke, {
                                  className: "w-3.5 h-3.5 text-blue-300/30",
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[11px] text-slate-500 tracking-wide",
                                  children: "进行中",
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "space-y-2",
                              children: ve.map((t) =>
                                e.jsx(
                                  $e,
                                  {
                                    session: t,
                                    characters: s,
                                    onClick: () => L(t.id),
                                    onDelete: () => oe(t.id),
                                    confirmDelete: _ === t.id,
                                  },
                                  t.id
                                )
                              ),
                            }),
                          ],
                        }),
                      je.length > 0 &&
                        e.jsxs("div", {
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2 mb-3",
                              children: [
                                e.jsx(Qe, {
                                  className: "w-3.5 h-3.5 text-slate-600",
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[11px] text-slate-500 tracking-wide",
                                  children: "故梦",
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "space-y-2",
                              children: je.map((t) =>
                                e.jsx(
                                  $e,
                                  {
                                    session: t,
                                    characters: s,
                                    onClick: () => L(t.id),
                                    onDelete: () => oe(t.id),
                                    confirmDelete: _ === t.id,
                                  },
                                  t.id
                                )
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
          }),
        ],
      });
}
function $e({
  session: a,
  characters: s,
  onClick: r,
  onDelete: d,
  confirmDelete: o,
}) {
  const f = a.participantIds
      .map((j) => {
        var k;
        return ((k = s.find((v) => v.id === j)) == null ? void 0 : k.name) ?? j;
      })
      .join("、"),
    u = a.worldSetting.keywords,
    c = new Date(a.createdAt).toLocaleDateString("zh-CN", {
      month: "short",
      day: "numeric",
    }),
    p = a.messages.length;
  return e.jsxs("div", {
    onClick: r,
    role: "button",
    tabIndex: 0,
    className:
      "w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.06] rounded-lg text-left hover:bg-white/[0.06] transition-all group cursor-pointer",
    children: [
      e.jsxs("div", {
        className: "flex items-start justify-between gap-2",
        children: [
          e.jsxs("div", {
            className: "min-w-0 flex-1",
            children: [
              e.jsx("div", {
                className: "text-sm text-slate-300 truncate",
                children:
                  a.worldSetting.title ||
                  (u.length > 0 ? u.join("·") : "新的浮生"),
              }),
              e.jsx("div", {
                className: "text-[11px] text-slate-500 mt-1 truncate",
                children: f,
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex items-center gap-1.5 shrink-0",
            children: [
              e.jsx("span", {
                className: "text-[10px] text-slate-600 mt-0.5",
                children: c,
              }),
              e.jsx("button", {
                onClick: (j) => {
                  j.stopPropagation(), d();
                },
                className: `p-1 rounded transition-colors ${
                  o ? "bg-red-500/15 text-red-400" : "hover:bg-white/5"
                }`,
                title: o ? "再点一次确认删除" : "删除",
                children: e.jsx(Ae, {
                  className: `w-3.5 h-3.5 ${o ? "" : "text-slate-700"}`,
                }),
              }),
            ],
          }),
        ],
      }),
      a.verdict &&
        e.jsxs("p", {
          className:
            "text-[12px] text-blue-200/30 mt-2 line-clamp-1 font-serif italic",
          children: ["「", a.verdict, "」"],
        }),
      e.jsx("div", {
        className: "text-[10px] text-slate-600 mt-1.5",
        children: a.status === "archived" ? "已封存" : `${p} 条消息`,
      }),
    ],
  });
}
function Ce({ segment: a, characters: s, currentUser: r }) {
  var d;
  if (a.type === "dialogue") {
    const o = s.find((j) => j.name === a.character),
      f = !o && a.character === r.name,
      u = (o == null ? void 0 : o.avatarColor) || void 0,
      c = (o == null ? void 0 : o.avatarUrl) || (f ? r.avatarUrl : void 0),
      p = (o == null ? void 0 : o.name) || a.character || "?";
    return e.jsxs("div", {
      children: [
        e.jsxs("div", {
          className: "flex flex-col items-center mb-2",
          children: [
            e.jsx("div", {
              className:
                "w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-medium overflow-hidden",
              style: {
                backgroundColor: u ? u + "25" : "rgba(255,255,255,0.05)",
              },
              children: c
                ? e.jsx("img", {
                    src: c,
                    alt: "",
                    className: "w-full h-full object-cover",
                  })
                : e.jsx("span", {
                    style: { color: u || "#94a3b8" },
                    children: p[0],
                  }),
            }),
            e.jsx("div", {
              className: "text-[11px] text-blue-300/35 tracking-wider mt-1",
              children: (d = a.character) == null ? void 0 : d.toUpperCase(),
            }),
          ],
        }),
        a.action &&
          e.jsx("p", {
            className:
              "text-[13px] leading-[1.8] text-indigo-300/40 italic font-serif mb-1.5",
            style: A,
            children: a.action,
          }),
        e.jsxs("div", {
          className: "text-[14px] leading-[1.9] text-slate-200/85 font-serif",
          style: A,
          children: ["「", a.text, "」"],
        }),
      ],
    });
  }
  return e.jsx("div", {
    className: "space-y-2 pl-3 border-l border-indigo-300/10",
    children: a.text
      .split(
        `
`
      )
      .filter(Boolean)
      .map((o, f) =>
        e.jsx(
          "p",
          {
            className: "text-[14px] leading-[1.9] text-slate-400/75 font-serif",
            style: A,
            children: o,
          },
          f
        )
      ),
  });
}
const ht = 40;
function mt() {
  const a = h.useMemo(
    () =>
      Array.from({ length: ht }, (s, r) => ({
        id: r,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 1.2 + Math.random() * 1.8,
        opacity: 0.06 + Math.random() * 0.12,
        width: 1,
        height: 12 + Math.random() * 18,
      })),
    []
  );
  return e.jsxs("div", {
    className: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
    children: [
      e.jsx("style", {
        children: `
        @keyframes fl-rain {
          0% { transform: translateY(-20px); opacity: 0; }
          10% { opacity: var(--drop-op); }
          90% { opacity: var(--drop-op); }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `,
      }),
      a.map((s) =>
        e.jsx(
          "div",
          {
            className: "absolute bg-blue-300/60 rounded-full",
            style: {
              left: `${s.left}%`,
              width: s.width,
              height: s.height,
              "--drop-op": s.opacity,
              animationName: "fl-rain",
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
            },
          },
          s.id
        )
      ),
    ],
  });
}
export { It as default };
