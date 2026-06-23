import { r as C, j as a, R as re } from "./index-C41onZB-.js";
import {
  f as he,
  h as ve,
  i as He,
  m as ie,
  k as Ve,
  u as We,
  t as fe,
  P as qe,
  E as we,
  l as ge,
  T as Xe,
  J as Ze,
} from "./App-CYgIjxWH.js";
import { f as Te, h as $e } from "./gemini-CeriFUnH.js";
import { b as je } from "./worldBookScopes-B0JaUaci.js";
import { a as Qe } from "./buttonStyles-CgOYb1KY.js";
import { A as et } from "./ApiErrorCard-DsY_S22O.js";
import { M as tt } from "./Modal-BhAOmQIi.js";
import { C as rt } from "./chevron-left-CTqCLzU8.js";
import { L as Ce } from "./loader-circle-CcTwnOUB.js";
import { R as at } from "./refresh-cw-BoDq0Pnx.js";
import { A as nt, m as st } from "./proxy-DMomAik7.js";
import { T as it } from "./tag-Ka5DFHdS.js";
import "./giftFulfillment-DLU8FseI.js";
import "./initialShopItems-Bgx56oyu.js";
import "./llmFetch-C_SjUca9.js";
import "./circle-alert-JwRkSIRb.js";
const ot = ["clinical", "romantic", "chaotic", "minimal", "vintage", "dreamy"],
  Ne = 8,
  ke = 150,
  lt = 15e3,
  ct = 140,
  dt = 280,
  ut = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/,
  pt = {
    clinical: [
      "理性",
      "克制",
      "精确",
      "严肃",
      "秩序",
      "规则",
      "分析",
      "观察",
      "全局",
      "原则",
      "记录",
      "排障",
      "冷静",
      "尊重",
    ],
    romantic: [
      "温柔",
      "细腻",
      "感受",
      "陪伴",
      "接住",
      "在乎",
      "心",
      "笑",
      "余温",
      "柔软",
      "体贴",
      "共鸣",
      "注意到",
    ],
    chaotic: [
      "活泼",
      "外露",
      "跳跃",
      "直接",
      "语气词",
      "emoji",
      "表情",
      "推翻",
      "重来",
      "热闹",
      "冲动",
      "即兴",
    ],
    minimal: [
      "安静",
      "简洁",
      "少",
      "留白",
      "无机质",
      "冷淡",
      "干净",
      "沉默",
      "寡言",
      "简短",
    ],
    vintage: [
      "旧",
      "回响",
      "从前",
      "曾经",
      "疲惫",
      "褪色",
      "灰",
      "火",
      "蜡烛",
      "夜",
      "记得",
      "搬家前",
    ],
    dreamy: [
      "水",
      "光",
      "春天",
      "湖",
      "雾",
      "梦",
      "朦胧",
      "漂浮",
      "月",
      "云",
      "空灵",
      "冰层",
    ],
  };
function _e(e) {
  return String(e || "")
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .replace(/\r/g, "")
    .trim();
}
function L(e, t) {
  const r = _e(e).replace(/\s+/g, " ");
  return r ? (r.length > t ? `${r.slice(0, t - 1).trim()}…` : r) : "";
}
function mt(e) {
  const t = String(e || "")
    .replace(/\s+/g, " ")
    .trim();
  if (!t) return 0;
  let r = 0;
  for (const s of t) {
    if (s === " ") {
      r += 0.2;
      continue;
    }
    if (ut.test(s)) {
      r += 2;
      continue;
    }
    if (/^[\x00-\x7F]$/.test(s)) {
      r += /[A-Za-z0-9]/.test(s) ? 0.5 : 0.35;
      continue;
    }
    r += 1.5;
  }
  return Math.max(1, Math.ceil(r));
}
function xt(e) {
  return e
    ? new Date(e).toLocaleString("zh-CN", {
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1,
      })
    : "时间不明";
}
function oe(e, t) {
  const r = [];
  t != null && t.isLongTerm && r.push("长期记忆"),
    e.isEternal && r.push("永恒记忆");
  const s = r.length > 0 ? ` [${r.join(" / ")}]` : "";
  return `- ${xt(e.startTime)}${s}：${L(e.summary, ct)}`;
}
function ft(e) {
  return String(e || "")
    .split(/\r?\n\s*\r?\n/g)
    .map((t) => t.trim())
    .filter(Boolean);
}
function gt(e) {
  const t = e.match(/[^。！？!?\n]+[。！？!?]?/g);
  return !t || t.length === 0
    ? [e.trim()].filter(Boolean)
    : t.map((r) => r.trim()).filter(Boolean);
}
function le(e) {
  return ft(e).flatMap((t, r) =>
    gt(t).map((n, o) => ({
      id: `p${r + 1}s${o + 1}`,
      paragraphIndex: r,
      sentenceIndex: o,
      text: L(n, 180),
    }))
  );
}
function bt(e) {
  return e === "underline" || e === "strike" || e === "circle" ? e : null;
}
function yt(e) {
  return Ie(e ? [e] : [])[0] || null;
}
function ht(e, t) {
  if (!Array.isArray(e) || t.length === 0) return [];
  const r = new Map(t.map((n) => [n.id, n])),
    s = new Set();
  return e
    .map((n) => {
      const o =
          typeof (n == null ? void 0 : n.sentenceId) == "string"
            ? n.sentenceId.trim()
            : "",
        i = r.get(o),
        l = bt(n == null ? void 0 : n.mark);
      return !i || !l || s.has(o)
        ? null
        : (s.add(o),
          {
            sentenceId: o,
            paragraphIndex: i.paragraphIndex,
            sentenceIndex: i.sentenceIndex,
            mark: l,
            noteBlock:
              yt(
                (n == null ? void 0 : n.noteBlock) ||
                  (n == null ? void 0 : n.note) ||
                  null
              ) || void 0,
          });
    })
    .filter((n) => n !== null)
    .slice(0, 6);
}
function ce(e) {
  const t = `${e.intro || ""}
${e.background || ""}`,
    s = ot
      .map((o) => {
        const i = pt[o].reduce((l, p) => l + (t.includes(p) ? 1 : 0), 0);
        return { style: o, score: i };
      })
      .sort((o, i) => i.score - o.score)
      .filter((o) => o.score > 0)
      .map((o) => o.style),
    n = ["dreamy", "minimal", "vintage", "romantic", "clinical", "chaotic"];
  return [...s, ...n.filter((o) => !s.includes(o))].slice(0, 3);
}
function vt(e) {
  const [t, r, s] = ce(e);
  return [`- 首选：${t}`, `- 次选：${r}`, `- 备选：${s}`].join(`
`);
}
function wt(e) {
  const t = `${e.intro || ""}
${e.background || ""}`,
    r =
      t.includes("语气词") ||
      t.includes("emoji") ||
      t.includes("直接说出来") ||
      t.includes("推翻") ||
      t.includes("重来")
        ? "句子可以跳一点、碎一点，允许半句改口、插入括号、突然转弯。"
        : t.includes("精确") ||
          t.includes("克制") ||
          t.includes("原则") ||
          t.includes("全局") ||
          t.includes("噪音")
        ? "句子更克制，少废话，尽量一刀切到意思，不要拖泥带水。"
        : "句子节奏以自然呼吸为主，可以长短交替，但不要均匀得像范文。",
    s =
      t.includes("吐槽") || t.includes("荒诞") || t.includes("幕布")
        ? "允许冷幽默、轻讽刺、把荒谬摆出来让它自己发声。"
        : t.includes("感受") ||
          t.includes("水") ||
          t.includes("光") ||
          t.includes("雾") ||
          t.includes("春天")
        ? "允许把情绪转成触感、光线、水汽、温度之类的意象，不要只写抽象结论。"
        : t.includes("注意到") ||
          t.includes("接住") ||
          t.includes("皱眉") ||
          t.includes("笑")
        ? "多写细小观察，尤其是那些别人可能不会注意的瞬间反应。"
        : "优先保留角色本人的习惯性说法，不要用通用抒情腔覆盖掉。",
    n =
      t.includes("克制") || t.includes("退回去") || t.includes("站在稍远的地方")
        ? "情绪不要一下子交代完，允许先绕开、压住、装没事，再从缝里漏出来。"
        : t.includes("直接说出来") ||
          t.includes("过程本身") ||
          t.includes("在乎")
        ? "情绪可以外露，甚至先说出口再后悔，不必把自己收拾得很体面。"
        : "允许保留一点嘴硬、别扭或迟疑，不要把情绪处理得过于圆滑。",
    o =
      t.includes("全局") || t.includes("稍远的地方")
        ? "可以表现出“看得见结构，却不一定愿意承认自己已经卷进去”的盲点。"
        : t.includes("看不到全局") ||
          t.includes("先感受再理解") ||
          t.includes("在乎的事情太多")
        ? "可以表现出“感受到很多，但不一定来得及整理清楚”的盲点。"
        : "允许角色带着自己的偏见和误判写，不需要替他/她纠正。";
  return [
    `- 句子节奏：${r}`,
    `- 表达习惯：${s}`,
    `- 情绪处理：${n}`,
    `- 容许保留的盲点：${o}`,
  ].join(`
`);
}
function De(e, t) {
  return e === "clinical" ||
    e === "romantic" ||
    e === "chaotic" ||
    e === "minimal" ||
    e === "vintage" ||
    e === "dreamy"
    ? e
    : e === "playful"
    ? "chaotic"
    : e === "neat"
    ? "clinical"
    : e === "brooding"
    ? "vintage"
    : e === "gentle"
    ? "dreamy"
    : t;
}
function Tt(e) {
  return e === "text" ||
    e === "strike" ||
    e === "highlight" ||
    e === "redact" ||
    e === "doodle" ||
    e === "styled"
    ? e
    : "text";
}
function $t(e) {
  const t = _e((e == null ? void 0 : e.text) || "");
  if (!t) return null;
  const r = Tt(e == null ? void 0 : e.type),
    s = ["graphite", "blue", "brown", "olive", "plum"].includes(
      e == null ? void 0 : e.color
    )
      ? e.color
      : void 0,
    n = ["sm", "md", "lg"].includes(e == null ? void 0 : e.size)
      ? e.size
      : void 0;
  return { type: r, text: t, color: s, size: n };
}
function Ie(e) {
  return Array.isArray(e)
    ? e
        .map((r, s) => {
          const n = Array.isArray(r == null ? void 0 : r.segments)
            ? r.segments.map((o) => $t(o)).filter((o) => !!o)
            : [];
          return n.length === 0
            ? null
            : {
                id: `diary-block-${s}-${Math.random()
                  .toString(36)
                  .slice(2, 8)}`,
                segments: n,
                align: "left",
              };
        })
        .filter((r) => r !== null)
    : [];
}
function jt(e, t, r) {
  if (!e) return "暂无当日日程。";
  const s = ve(e);
  return s.length === 0
    ? "暂无当日日程。"
    : s.map((n) => {
        var p;
        const o =
            (n.placeId &&
              ((p = t.find((f) => f.id === n.placeId)) == null
                ? void 0
                : p.name)) ||
            "未指定地点",
          i = n.note ? `；备注：${L(n.note, 40)}` : "";
        let l = "";
        return (
          r != null &&
            (r > n.endMinute
              ? (l = " [已完成]")
              : r >= n.startMinute
              ? (l = " [进行中]")
              : (l = " [计划中]")),
          `- ${ie(n.startMinute)}-${ie(n.endMinute)} ${n.title} @ ${o}${i}${l}`
        );
      }).join(`
`);
}
function Ct(e, t, r, s) {
  var n, o, i;
  return (
    ((n = t.find((l) => l.id === e)) == null ? void 0 : n.name) ||
    ((o = r.find((l) => l.id === e)) == null ? void 0 : o.name) ||
    ((i = s.find((l) => l.id === e)) == null ? void 0 : i.name) ||
    e
  );
}
function Nt(e, t, r) {
  const s = t.find((o) => o.id === e);
  if (s != null && s.gender) return s.gender;
  const n = r.find((o) => o.id === e);
  return n != null && n.gender ? n.gender : "";
}
function kt(e, t, r, s, n) {
  const o = t
    .filter((i) => i.fromEntityId === e || i.toEntityId === e)
    .map((i) => {
      const l = i.fromEntityId === e ? i.toEntityId : i.fromEntityId,
        p = Ct(l, r, s, n),
        f = Nt(l, r, s),
        u = f ? `（${f}）` : "",
        g = i.note ? `（${L(i.note, 60)}）` : "";
      return `- ${p}${u}：${i.relationKind}${g}`;
    })
    .slice(0, 18);
  return o.length > 0
    ? o.join(`
`)
    : "暂无明确关系网。";
}
function _t(e) {
  return e
    ? e.bio
      ? [
          `- 名字：${e.name}`,
          e.gender ? `- 性别：${e.gender}` : "",
          `- 短资料 bio：${L(e.bio, 220)}`,
        ].filter(Boolean).join(`
`)
      : [
          `- 名字：${e.name}`,
          e.gender ? `- 性别：${e.gender}` : "",
          `- 简介：${e.intro || "未提供"}`,
          `- 背景：${e.background || "未提供"}`,
        ].filter(Boolean).join(`
`)
    : "当前用户资料缺失。";
}
function Dt(e, t) {
  const r = e
    .filter((u) => u.perceivers.includes(t))
    .sort((u, g) => (g.startTime || 0) - (u.startTime || 0));
  if (r.length === 0)
    return { earlyText: "", recentText: "暂无与这个角色直接相关的近期记忆。" };
  const s = r
      .slice(0, ke)
      .sort((u, g) => (u.startTime || 0) - (g.startTime || 0)),
    n = new Set(s.map((u) => u.id)),
    i = r
      .filter((u) => !n.has(u.id))
      .slice(0, Ne)
      .sort((u, g) => (u.startTime || 0) - (g.startTime || 0))
      .map((u) => oe(u, { isLongTerm: !0 })),
    l = s.map((u) => oe(u, { isLongTerm: !1 })),
    p =
      i.length > 0
        ? i.join(`
`)
        : "",
    f =
      l.length > 0
        ? l.join(`
`)
        : p
        ? "暂无最近的事件。"
        : "暂无与这个角色直接相关的近期记忆。";
  return { earlyText: p, recentText: f };
}
function It(e, t) {
  const r = e
    .filter((s) => s.perceivers.includes(t))
    .sort((s, n) => (n.startTime || 0) - (s.startTime || 0))
    .slice(0, Ne)
    .sort((s, n) => (s.startTime || 0) - (n.startTime || 0));
  return r.length === 0
    ? ""
    : r.map((s) => oe(s, { isLongTerm: !0 })).join(`
`);
}
function St(e, t, r, s) {
  const n = t.find((l) => l.id === e);
  if (n) return n.name;
  const o = r.find((l) => l.id === e);
  if (o) return o.name;
  const i = s.find((l) => l.id === e);
  return i ? i.name : "未知";
}
function At(e) {
  return e === "date"
    ? "赴约"
    : e === "date_narrator"
    ? "赴约旁白"
    : e === "date_ooc"
    ? "赴约OOC"
    : "线上";
}
function Kt(e) {
  if (e.isRecalled) return "[已撤回]";
  const t = typeof e.text == "string" ? e.text.trim() : "",
    r = L(t, dt);
  switch (e.type) {
    case "image":
    case "photo":
      return r ? `[图片：${r}]` : "[图片]";
    case "voice":
      return r ? `[语音：${r}]` : "[语音]";
    case "location":
      return r ? `[位置：${r}]` : "[位置]";
    case "phone_call":
    case "phone_call_transcript":
      return r ? `[语音通话：${r}]` : "[语音通话]";
    case "video_call":
    case "video_call_transcript":
      return r ? `[视频通话：${r}]` : "[视频通话]";
    case "transfer":
      return r ? `[转账：${r}]` : "[转账]";
    case "gift":
      return r ? `[礼物：${r}]` : "[礼物]";
    case "date_invite":
      return r ? `[赴约邀请：${r}]` : "[赴约邀请]";
    case "forward_card":
      return r ? `[转发：${r}]` : "[转发]";
    case "file":
      return r ? `[文件：${r}]` : "[文件]";
    case "poke":
      return r ? `[戳一戳：${r}]` : "[戳一戳]";
    default:
      return r || "[空消息]";
  }
}
function be(e, t) {
  const r = Ve(e.timestamp, t.timezone, "month-day-time"),
    s = At(e.subType),
    n = Kt(e);
  if (e.subType === "narrator" || e.subType === "date_narrator")
    return `[${r} ${s}] ${n}`;
  const o = St(e.senderId, t.characters, t.users, t.npcs);
  return `[${r} ${s}] ${o}：${n}`;
}
function Et(e) {
  const {
      messages: t,
      chats: r,
      character: s,
      characters: n,
      users: o,
      npcs: i,
    } = e,
    l = new Map();
  for (const m of r) l.set(m.id, m.lastRecapTimestamp || 0);
  const p = t.filter((m) => {
    if (
      !m.perceivers.includes(s.id) ||
      m.subType === "ooc" ||
      m.subType === "date_ooc" ||
      m.subType === "virtual" ||
      m.subType === "narrator"
    )
      return !1;
    const y = l.get(m.chatId) ?? 0;
    return !(m.timestamp <= y);
  });
  if (p.length === 0) return "";
  p.sort((m, y) => m.timestamp - y.timestamp);
  const f = p.slice(-ke);
  let u = 0;
  const g = [];
  for (let m = f.length - 1; m >= 0; m -= 1) {
    const y = f[m],
      $ = be(y, { timezone: s.timezone, characters: n, users: o, npcs: i }),
      N = mt($);
    u + N > lt || (g.push(y), (u += N));
  }
  return (
    g.reverse(),
    g.length === 0
      ? ""
      : g.map((m) =>
          be(m, { timezone: s.timezone, characters: n, users: o, npcs: i })
        ).join(`
`)
  );
}
function Mt(e, t, r) {
  const s = e
    .filter((n) => n.characterId === t && n.dateKey !== r)
    .sort(
      (n, o) => o.dateKey.localeCompare(n.dateKey) || o.updatedAt - n.updatedAt
    )
    .slice(0, 3);
  return s.length === 0
    ? "最近没有可参考的日记摘要。"
    : s.map((n) => `- ${n.dateKey}：${L(n.summary, 90)}`).join(`
`);
}
function Se(e) {
  const {
      character: t,
      dateKey: r,
      knowledge: s,
      socialRelations: n,
      dailyPlan: o,
      places: i,
      previousEntries: l,
      characters: p,
      users: f,
      npcs: u,
      messages: g,
      chats: m,
    } = e,
    y = he(t.timezone),
    $ = o ? ve(o) : [],
    N = He($, y),
    j = ie(N);
  let k = "",
    T = "";
  if (g && m) {
    k = It(s, t.id);
    const v = Et({
      messages: g,
      chats: m,
      character: t,
      characters: p,
      users: f,
      npcs: u,
    });
    T =
      v ||
      (k ? "暂无最近的对话与互动。" : "暂无与这个角色直接相关的近期互动。");
  } else {
    const v = Dt(s, t.id);
    (k = v.earlyText), (T = v.recentText);
  }
  return {
    earlyKnowledgeText: k,
    recentKnowledgeText: T,
    relationText: kt(t.id, n, p, f, u),
    scheduleText: jt(o, i, N),
    currentTimeLabel: j,
    previousSummaryText: Mt(l, t.id, r),
    stylePreferenceText: vt(t),
    voiceGuideText: wt(t),
  };
}
function Lt(e) {
  const {
      character: t,
      dateKey: r,
      knowledge: s,
      messages: n,
      chats: o,
      socialRelations: i,
      dailyPlan: l,
      places: p,
      previousEntries: f,
      characters: u,
      users: g,
      npcs: m,
    } = e,
    {
      earlyKnowledgeText: y,
      recentKnowledgeText: $,
      relationText: N,
      scheduleText: j,
      currentTimeLabel: k,
      previousSummaryText: T,
      stylePreferenceText: v,
      voiceGuideText: x,
    } = Se({
      character: t,
      dateKey: r,
      knowledge: s,
      messages: n,
      chats: o,
      socialRelations: i,
      dailyPlan: l,
      places: p,
      previousEntries: f,
      characters: u,
      users: g,
      npcs: m,
    });
  return `你要替角色写一篇“今日日记”。这是一篇角色自己的私人日志，不是报告，不是对用户说话，也不是聊天记录整理。
角色现在的时间是 ${r} ${k}，日记是在这个时间点写的，只能写到现在为止已经发生或正在发生的事。

先记住：这篇日记最重要的不是"把今天发生了什么说明白",不能写成流水账，而是"让人一眼就觉得这就是这个角色本人写的，而且是这一天、这个情绪、这一口气写下来的"。

硬约束：
1. 只能写 ${r} 这一天的日记，而且只能写到当前时间 ${k} 为止已经发生的事。日程里标注 [计划中] 的日程项尚未发生，不能当作已经经历的事来写。
2. 只使用角色自己的公共上下文：角色设定、角色最近的对话与互动原文、较早的长期记忆摘要、关系网、当日日程参考、最近几篇日记摘要。
3. 原始对话是素材，不是复制源。你可以挑一个词、一次停顿、一段动作、一句让你心里一颤的话来展开，但不要把消息一句一句抄进日记——日记是"写给自己看的情绪",不是聊天记录回放。
4. 最近几篇日记如果已经写过相同角度，就换一个新的切入点，避免明显重复。
5. 不要把日程当作写作提纲逐条展开；日程是一天的背景框架，真正驱动日记情绪的是角色经历的具体事件和互动。
6. 日记要保留角色口吻和性格，不同角色排版习惯不同。
7. 允许角色偏心、嘴硬、自相矛盾、突然停住、改口、阴阳怪气、过度敏感，允许不体面，但不要脱离角色。
8. 不要写成温吞的安全总结，不要像"今天经历了一些事，我有一些感受"这种泛化句式。
9. 开头必须有标题，而且标题要单独成一行，写完标题就换行。
10. 标题下一行必须写日期和天气，这一行也要像角色自己写下来的，不要像系统抬头。

内容要求：
- 先确定今天最核心的一种情绪或内在张力，只围绕它写，不要面面俱到。
- 情绪和张力的来源通常是具体发生的事件和互动——尤其是最近发生的——而不是一天的日程安排。
- 可以写得偏执、局部、主观，甚至误判；日记本来就不需要公正。
- 比起解释背景，更要写当下的触感、联想、停顿、反复、想遮住的话、差点写出来又划掉的话。
- 标题可以非常像这个角色本人，会文绉绉、会冷、会碎、会像随手起的名字，但不能是通用作文题目。
- 日期必须明确落到 ${r} 这一天，可以写成角色喜欢的样子，但不能缺失。
- 天气必须出现，但不要求夸张；可以只是天气、天光、空气、冷热、潮气、风感之类的一笔。如果公共上下文里没有特殊天气，就写得轻一点，不要硬编戏剧化天气。
- 至少出现一处非常具体、非常私人的表达习惯，让人能认出是这个角色，不是通用 AI 文风。
- 至少出现一句“不那么正确但很像本人会写”的句子，可以刻薄、脆弱、可笑、别扭、过度认真，但必须贴人。
- 不要平均分配情绪；允许整篇都被一种情绪压着走。
- 不要为了显得高级而写空泛抒情；如果要抒情，必须和角色自己的观察方式绑在一起。
- 不要写成“人物小传”或“事件复盘”；宁可写窄一点、怪一点，也不要写平。

角色声音参考：
${x}

下笔前先在心里完成这两个判断，但不要把分析过程原样输出：
1. 用一句内部判断句概括今天的别扭点，格式接近“我明明___，却___”。
2. 再决定这篇日记是怎么暴露这个别扭点的：是嘴硬，是碎碎念，是冷静过头，是突然失控，是写到一半划掉，还是假装轻描淡写。

如果写出来的文字看起来像“一个成熟旁白在替角色总结内心”，那就是写错了。它必须像角色自己写，允许狭窄、偏颇、难看，但要活。

风格要求：
- clinical：更冷静、档案式、细线网格，适合理性、克制、分析型、秩序感强的角色。
- romantic：更柔软、边角批注、浅色墨水，适合温柔、细腻、容易共情、表达情绪较柔和的角色。
- chaotic：拼贴、歪斜、涂抹感更重，适合活泼、外露、跳跃、直接、表情多的角色。
- minimal：留白很多、极简纸张，适合寡言、克制、低表达、冷静且不爱装饰的角色。
- vintage：旧书页、褪色墨迹，适合怀旧、疲惫、有回响感、喜欢把情绪压旧了再写出来的角色。
- dreamy：轻雾感、半透明批注、较空灵，适合感受先行、联想多、偏朦胧或诗性的角色。
- redact 只在“想写又不想被看到”的小片段里少量使用。
- styled 可用于轻微的字号或字色变化，不要整篇都花。
- 风格不是贴皮肤。styleHint 只决定纸面气质，真正决定好不好看的是角色声音本身。
- 如果角色本身说话很特别，就让排版为声音服务，而不是反过来用排版掩盖内容平庸。

基于角色资料推测的风格倾向：
${v}
请优先从这三种里选一个 styleHint，除非正文明显更适合其他风格。

输出要求：
1. 只输出 JSON，不要解释，不要代码块。
2. JSON 格式：
{
  "summary": "1-2句的极短摘要，供未来避免重复",
  "styleHint": "clinical | romantic | chaotic | minimal | vintage | dreamy",
  "blocks": [
    {
      "align": "left",
      "segments": [
        { "type": "text | strike | highlight | redact | doodle | styled", "text": "文字", "color": "graphite | blue | brown | olive | plum", "size": "sm | md | lg" }
      ]
    }
  ]
}
3. blocks 保持 4-7 段，每段 1-5 个 segments，正文统一左对齐，不要居中排整段内容。
4. 第 1 段必须是标题，只写标题本身，建议用 styled 或 lg 做一点区分。
5. 第 2 段必须是“日期 + 天气”这一行，允许更轻、更小，但不能省略日期或天气。
6. 第 3 段开始才进入正文。
7. doodle 的 text 只写短颜文字、拟声或小涂鸦词，如“(=^･ω･^=)”“……”“小太阳”。
8. summary 必须和正文角度一致，但更短。
9. blocks 里的每一段都应该像同一个人连续写下来的，不要每段都重新归零。
10. 可以有突然变短的句子、括号、小停顿、自我打断，但不要故意写得完全不可读。
11. 避免以下开头或总结腔：
- “今天我...”后面接平铺直叙的流水账
- “我意识到/我感到/我觉得”后面接正确但无个性的总结
- “总之/总体来说/其实”这类把情绪收平的句子
- 像旁白一样替角色解释自己的性格
12. 最好至少有一个瞬间让人感觉“这句有点过头了，但很像这个人真的会这样写”。
13. 不要追求每段都完整；允许有一段像呼吸卡住，只写到一半又拐走。

角色资料：
- 名字：${t.name}
- 简介：${t.intro || "未提供"}
- 背景：${t.background || "未提供"}

最近三篇日记摘要（用于避免角度重复，不必展开）：
${T}

角色关系网：
${N}

当日日程（一天的背景框架，不是日记的写作提纲）：
${j}

${
  y
    ? `角色较早的记忆与经历（摘要，已归档）：
${y}

`
    : ""
}角色最近的对话与互动原文（日记最核心的素材来源；是现场记录，不是让你抄写）：
${$}`;
}
function Rt(e) {
  const {
      character: t,
      userDiary: r,
      knowledge: s,
      messages: n,
      chats: o,
      socialRelations: i,
      dailyPlan: l,
      places: p,
      previousEntries: f,
      characters: u,
      users: g,
      npcs: m,
    } = e,
    y = g.find((h) => h.id === r.userId),
    {
      earlyKnowledgeText: $,
      recentKnowledgeText: N,
      relationText: j,
      scheduleText: k,
      previousSummaryText: T,
      stylePreferenceText: v,
      voiceGuideText: x,
    } = Se({
      character: t,
      dateKey: r.dateKey,
      knowledge: s,
      messages: n,
      chats: o,
      socialRelations: i,
      dailyPlan: l,
      places: p,
      previousEntries: f,
      characters: u,
      users: g,
      npcs: m,
    }),
    D = le(r.content),
    S =
      D.length > 0
        ? D.map((h) => `- ${h.id}: ${h.text}`).join(`
`)
        : "- p1s1: （内容为空，无法切句）";
  return `你要以角色 ${t.name} 的口吻，对下面这篇“用户自己写的今日日记”写批注。

这不是正式回信，不是安慰稿，不是分析报告。更像角色真的拿了一支笔，在对方的日记旁边写下边角备注、吐槽、补充、划掉、圈点、涂鸦、改口和犹豫。

硬约束：
1. 批注只基于 ${r.dateKey} 这一天，和角色自己的公共上下文来写。
2. 角色只能以自己的认知、偏见、关系感受去批，不要突然变成全知旁白。
3. 不要把用户日记重写一遍；重点是“对这篇内容作出角色化反应”。
4. 下面给到的对话原文是"角色私下里记得的片段"，你可以借用一两个细节、一个停顿、一句让角色心里一颤的话来扎进批注里，但绝对不要把消息原样抄成批注。
5. 允许角色划掉某句、吐槽某句、心软、嘴硬、留一个箭头式补充，但不要写成长篇说教。
6. 可以不完全公平，可以偏心，可以别扭，但要像这个角色本人。
7. 必须只从下面提供的句子编号里选目标句，不能自己编句子位置。

批注风格：
- 可以有 strike、highlight、doodle、styled、少量 redact。
- 像写在页边的小批注，不要写成完整书信。
- 可以出现短句、括号、箭头感、被打断的反应。
- 允许一两句很尖锐或很私人，但不要恶意攻击。
- 优先精确命中 2-5 句，而不是平均扫过整篇。

角色声音参考：
${x}

角色风格倾向：
${v}

输出要求：
1. 只输出 JSON，不要解释，不要代码块。
2. JSON 格式：
{
  "summary": "一句很短的批注摘要",
  "styleHint": "clinical | romantic | chaotic | minimal | vintage | dreamy",
  "sentenceAnchors": [
    {
      "sentenceId": "p1s1",
      "mark": "underline | strike | circle",
      "noteBlock": {
        "align": "left",
        "segments": [
          { "type": "text | strike | highlight | redact | doodle | styled", "text": "文字", "color": "graphite | blue | brown | olive | plum", "size": "sm | md | lg" }
        ]
      }
    }
  ]
}
3. sentenceAnchors 保持 2-5 条；每条都必须命中一个真实存在的 sentenceId。
4. noteBlock 可以省略，但如果写了，必须像一句短批注，不要超过 2 行感觉。
5. 批注应该明显像“角色在写旁批”，而不是重新写一篇日记。

用户日记句子编号：
${S}

用户日记正文：
${L(r.content, 1800)}

当前用户短资料：
${_t(y)}

角色资料：
- 名字：${t.name}
- 简介：${t.intro || "未提供"}
- 背景：${t.background || "未提供"}

最近三篇角色日记摘要：
${T}

角色关系网：
${j}

当日日程（一天的背景框架）：
${k}

${
  $
    ? `角色较早的记忆与经历（摘要，已归档）：
${$}

`
    : ""
}角色最近的对话与互动原文（现场记录，是批注的素材，不是抄写源）：
${N}`;
}
async function Pt(e) {
  var M;
  const {
    character: t,
    dateKey: r,
    knowledge: s,
    messages: n,
    chats: o,
    socialRelations: i,
    dailyPlan: l,
    places: p,
    previousEntries: f,
    characters: u,
    users: g,
    npcs: m,
    preset: y,
    overwriteEntryId: $,
    worldBooks: N,
  } = e;
  if (!(y != null && y.endpoint))
    throw new Error("需要先配置 API 预设才能生成日记");
  const k =
      je(N, "diary_write") +
      Lt({
        character: t,
        dateKey: r,
        knowledge: s,
        messages: n,
        chats: o,
        socialRelations: i,
        dailyPlan: l,
        places: p,
        previousEntries: f,
        characters: u,
        users: g,
        npcs: m,
      }),
    { content: T, usage: v } = await Te(y, k, !0);
  let x;
  try {
    x = JSON.parse($e(T));
  } catch {
    throw new Error("AI 返回的日记内容无法解析为 JSON");
  }
  const D = Ie(Array.isArray(x == null ? void 0 : x.blocks) ? x.blocks : []);
  if (D.length === 0) throw new Error("AI 返回的日记段落为空");
  const S = ce(t)[0] || "dreamy",
    h = Date.now();
  return {
    entry: {
      id: $ || `diary-${t.id}-${r}`,
      characterId: t.id,
      dateKey: r,
      summary: L(
        (x == null ? void 0 : x.summary) || `${t.name}写下了今天的片段。`,
        140
      ),
      styleHint: De(x == null ? void 0 : x.styleHint, S),
      blocks: D,
      generatedAt:
        ($ &&
          ((M = f.find((J) => J.id === $)) == null ? void 0 : M.generatedAt)) ||
        h,
      updatedAt: h,
      source: "ai",
    },
    usage: v,
  };
}
async function Bt(e) {
  const {
    character: t,
    userDiary: r,
    knowledge: s,
    messages: n,
    chats: o,
    socialRelations: i,
    dailyPlan: l,
    places: p,
    previousEntries: f,
    characters: u,
    users: g,
    npcs: m,
    preset: y,
    overwriteAnnotationId: $,
    worldBooks: N,
  } = e;
  if (!(y != null && y.endpoint))
    throw new Error("需要先配置 API 预设才能生成批注");
  const k =
      je(N, "diary_annotation") +
      Rt({
        character: t,
        userDiary: r,
        knowledge: s,
        messages: n,
        chats: o,
        socialRelations: i,
        dailyPlan: l,
        places: p,
        previousEntries: f,
        characters: u,
        users: g,
        npcs: m,
      }),
    { content: T, usage: v } = await Te(y, k, !0);
  let x;
  try {
    x = JSON.parse($e(T));
  } catch {
    throw new Error("AI 返回的批注内容无法解析为 JSON");
  }
  const D = le(r.content),
    S = ht(
      Array.isArray(x == null ? void 0 : x.sentenceAnchors)
        ? x.sentenceAnchors
        : [],
      D
    ),
    h = S.map((H) => H.noteBlock).filter((H) => !!H);
  if (S.length === 0 && h.length === 0)
    throw new Error("AI 返回的批注锚点为空");
  const I = ce(t)[0] || "dreamy",
    M = Date.now();
  return {
    annotation: {
      id: $ || `user-diary-annotation-${r.id}-${t.id}`,
      userDiaryId: r.id,
      userId: r.userId,
      characterId: t.id,
      dateKey: r.dateKey,
      summary: L(
        (x == null ? void 0 : x.summary) || `${t.name}留下了一点批注。`,
        120
      ),
      styleHint: De(x == null ? void 0 : x.styleHint, I),
      blocks: h,
      sentenceAnchors: S,
      generatedAt: M,
      updatedAt: M,
    },
    usage: v,
  };
}
const zt = {
    "bg-emerald-400": "#34d399",
    "bg-sky-400": "#38bdf8",
    "bg-red-400": "#f87171",
    "bg-blue-400": "#60a5fa",
    "bg-amber-400": "#fbbf24",
    "bg-purple-400": "#c084fc",
    "bg-pink-400": "#f472b6",
  },
  ye = 72;
function Ut(e) {
  const t = (e || "").trim();
  return t
    ? t.startsWith("#") || t.startsWith("rgb") || t.startsWith("hsl")
      ? t
      : zt[t] || "#94a3b8"
    : "#94a3b8";
}
function Ot(e) {
  const [t, r, s] = e.split("-");
  return `${t}.${r}.${s}`;
}
const Ft = {
  clinical: "Clinical",
  romantic: "Romantic",
  chaotic: "Chaotic",
  minimal: "Minimal",
  vintage: "Vintage",
  dreamy: "Dreamy",
};
function Gt(e) {
  return e === "clinical" ||
    e === "romantic" ||
    e === "chaotic" ||
    e === "minimal" ||
    e === "vintage" ||
    e === "dreamy"
    ? e
    : e === "playful"
    ? "chaotic"
    : e === "neat"
    ? "clinical"
    : e === "brooding"
    ? "vintage"
    : "dreamy";
}
function Ae(e) {
  const t = Gt(e.styleHint);
  return t === "clinical"
    ? {
        mode: t,
        paperClass:
          "bg-[#f7f8f8] border-[rgba(171,183,194,0.72)] shadow-[0_18px_42px_rgba(96,111,126,0.10)]",
        paperInnerClass: "pl-7 pr-6 pt-6 pb-7",
        bodyFontClass: "font-['Baskerville','STSong','Songti_SC','serif']",
        bodyTextClass:
          "text-[#3f4650] text-[14.5px] leading-[1.95] tracking-[0.012em]",
        summaryClass:
          "bg-[#edf3f8] border-[rgba(175,193,208,0.78)] text-[#536473]",
        accentColor: "#94a7b8",
        accentSoft: "rgba(148,167,184,0.12)",
        accentLine: "rgba(187,198,209,0.42)",
        tape: !1,
        overlay: "grid",
        marginDoodles: [],
        headerEyebrow: "archive note",
        dateClass: "text-[11px] tracking-[0.32em] uppercase text-[#8fa1b3]",
        summaryLabel: "observation",
        chipClass: "bg-white/75 border-[rgba(192,204,214,0.9)] text-[#6f8497]",
        summaryTextClass: "text-[12.5px] leading-[1.78]",
        summaryRotateClass: "rotate-0",
        summaryPinGradient:
          "radial-gradient(circle at 40% 40%, #8fa6b8, #52697b)",
        firstBlockMarker: "log",
      }
    : t === "romantic"
    ? {
        mode: t,
        paperClass:
          "bg-[linear-gradient(180deg,#faf4ef,#f6ede7)] border-[rgba(219,191,187,0.72)] shadow-[0_18px_42px_rgba(139,119,121,0.10)]",
        paperInnerClass: "pl-7 pr-6 pt-6 pb-7",
        bodyFontClass: "font-['STKaiti','KaiTi','FangSong','serif']",
        bodyTextClass: "text-[#564946] text-[16px] leading-[1.95]",
        summaryClass:
          "bg-[#faecef] border-[rgba(233,198,205,0.82)] text-[#7a6268]",
        accentColor: "#d0a0aa",
        accentSoft: "rgba(208,160,170,0.14)",
        accentLine: "rgba(220,197,193,0.28)",
        tape: !0,
        overlay: "none",
        marginDoodles: ["✿", "﹏"],
        headerEyebrow: "soft ink",
        dateClass:
          "font-['Caveat','STKaiti','KaiTi','cursive'] text-[16px] text-[#ca8b97]",
        summaryLabel: "margin note",
        chipClass: "bg-white/72 border-[rgba(229,197,204,0.88)] text-[#b27684]",
        summaryTextClass:
          "font-['STKaiti','KaiTi','serif'] text-[14px] leading-[1.76]",
        summaryRotateClass: "rotate-[-0.8deg]",
        summaryPinGradient:
          "radial-gradient(circle at 40% 40%, #e3a0ad, #a86473)",
        firstBlockMarker: null,
      }
    : t === "chaotic"
    ? {
        mode: t,
        paperClass:
          "bg-[linear-gradient(180deg,#f8eee4,#f1e6dc)] border-[rgba(201,168,149,0.72)] shadow-[0_18px_46px_rgba(133,107,92,0.12)]",
        paperInnerClass: "pl-7 pr-5 pt-6 pb-7",
        bodyFontClass: "font-['STKaiti','KaiTi','serif']",
        bodyTextClass: "text-[#4d433d] text-[16px] leading-[1.92]",
        summaryClass:
          "bg-[#f6e1d5] border-[rgba(222,184,162,0.82)] text-[#765a4f]",
        accentColor: "#d39a77",
        accentSoft: "rgba(211,154,119,0.16)",
        accentLine: "rgba(208,180,160,0.30)",
        tape: !0,
        overlay: "ruled",
        marginDoodles: ["✦", "↯", "…"],
        headerEyebrow: "scrap page",
        dateClass:
          "font-['Caveat','STKaiti','KaiTi','cursive'] text-[17px] text-[#c8845f]",
        summaryLabel: "scribble",
        chipClass: "bg-white/68 border-[rgba(222,184,162,0.88)] text-[#b36e48]",
        summaryTextClass:
          "font-['STKaiti','KaiTi','serif'] text-[14px] leading-[1.72]",
        summaryRotateClass: "rotate-[-1.2deg]",
        summaryPinGradient:
          "radial-gradient(circle at 40% 40%, #eca88b, #c16c4a)",
        firstBlockMarker: null,
      }
    : t === "minimal"
    ? {
        mode: t,
        paperClass:
          "bg-[#fbfaf8] border-[rgba(214,209,201,0.82)] shadow-[0_16px_36px_rgba(125,119,111,0.08)]",
        paperInnerClass: "pl-8 pr-8 pt-8 pb-9",
        bodyFontClass: "font-['Baskerville','STSong','Songti_SC','serif']",
        bodyTextClass:
          "text-[#46403b] text-[14px] leading-[2.12] tracking-[0.015em]",
        summaryClass:
          "bg-[#f6f3ee] border-[rgba(216,210,201,0.88)] text-[#6c655f]",
        accentColor: "#b3aba3",
        accentSoft: "rgba(179,171,163,0.09)",
        accentLine: "rgba(214,208,200,0.30)",
        tape: !1,
        overlay: "none",
        marginDoodles: [],
        headerEyebrow: "quiet page",
        dateClass: "text-[11px] tracking-[0.34em] uppercase text-[#9d968f]",
        summaryLabel: "note",
        chipClass: "bg-white/80 border-[rgba(218,212,205,0.92)] text-[#7c756f]",
        summaryTextClass: "text-[12px] leading-[1.8]",
        summaryRotateClass: "rotate-0",
        summaryPinGradient:
          "radial-gradient(circle at 40% 40%, #bbb3ab, #7f7871)",
        firstBlockMarker: null,
      }
    : t === "vintage"
    ? {
        mode: t,
        paperClass:
          "bg-[linear-gradient(180deg,#f3ebdc,#eadfce)] border-[rgba(176,155,126,0.72)] shadow-[0_18px_46px_rgba(120,101,76,0.12)]",
        paperInnerClass: "pl-7 pr-6 pt-6 pb-7",
        bodyFontClass: "font-['STSong','Songti_SC','serif']",
        bodyTextClass: "text-[#53483c] text-[15px] leading-[2.02]",
        summaryClass:
          "bg-[#efe2cf] border-[rgba(198,174,145,0.84)] text-[#705e4c]",
        accentColor: "#b89268",
        accentSoft: "rgba(184,146,104,0.14)",
        accentLine: "rgba(197,176,148,0.34)",
        tape: !1,
        overlay: "ruled",
        marginDoodles: ["⋯"],
        headerEyebrow: "old leaf",
        dateClass: "text-[12px] tracking-[0.22em] uppercase text-[#9f825f]",
        summaryLabel: "aftertaste",
        chipClass: "bg-white/62 border-[rgba(201,179,151,0.84)] text-[#8f6f4e]",
        summaryTextClass: "text-[12.5px] leading-[1.76]",
        summaryRotateClass: "rotate-[-0.45deg]",
        summaryPinGradient:
          "radial-gradient(circle at 40% 40%, #d3b082, #8d6d48)",
        firstBlockMarker: null,
      }
    : {
        mode: t,
        paperClass:
          "bg-[linear-gradient(180deg,#f7f7f5,#eef2f2)] border-[rgba(186,196,201,0.72)] shadow-[0_18px_42px_rgba(126,141,148,0.10)]",
        paperInnerClass: "pl-7 pr-6 pt-6 pb-7",
        bodyFontClass: "font-['STKaiti','KaiTi','serif']",
        bodyTextClass: "text-[#485159] text-[15.5px] leading-[2.02]",
        summaryClass:
          "bg-[rgba(234,241,244,0.78)] border-[rgba(186,202,212,0.82)] text-[#60707b]",
        accentColor: "#9db4c3",
        accentSoft: "rgba(157,180,195,0.14)",
        accentLine: "rgba(190,205,214,0.34)",
        tape: !1,
        overlay: "mist",
        marginDoodles: ["✧"],
        headerEyebrow: "haze note",
        dateClass: "text-[12px] tracking-[0.22em] uppercase text-[#8fa8b7]",
        summaryLabel: "drift",
        chipClass: "bg-white/72 border-[rgba(192,207,215,0.9)] text-[#7391a0]",
        summaryTextClass:
          "font-['STKaiti','KaiTi','serif'] text-[13.5px] leading-[1.78]",
        summaryRotateClass: "rotate-[-0.35deg]",
        summaryPinGradient:
          "radial-gradient(circle at 40% 40%, #b7ccd7, #6d8896)",
        firstBlockMarker: null,
      };
}
function Yt(e, t, r) {
  const s =
      e.color === "blue"
        ? "text-[#7093b3]"
        : e.color === "brown"
        ? "text-[#8a6c58]"
        : e.color === "olive"
        ? "text-[#748160]"
        : e.color === "plum"
        ? "text-[#7f617d]"
        : "text-inherit",
    n =
      e.size === "lg"
        ? "text-[1.18em]"
        : e.size === "sm"
        ? "text-[0.84em]"
        : "";
  if (e.type === "strike")
    return `${s} ${n} line-through decoration-[2px] decoration-[rgba(182,96,110,0.45)] opacity-75`.trim();
  if (e.type === "highlight") {
    const o =
      t.mode === "clinical" || t.mode === "minimal"
        ? "bg-[linear-gradient(180deg,transparent_55%,rgba(160,180,200,0.2)_55%,rgba(160,180,200,0.2)_92%,transparent_92%)]"
        : "bg-[linear-gradient(180deg,transparent_55%,rgba(246,225,144,0.72)_55%,rgba(246,225,144,0.72)_92%,transparent_92%)]";
    return `${s} ${n} ${o} px-0.5 rounded-[4px]`.trim();
  }
  return e.type === "doodle"
    ? `${s} ${n} inline-block text-[1.15em] italic rotate-[-4deg] align-middle`.trim()
    : e.type === "styled"
    ? `${s} ${n} font-semibold`.trim()
    : e.type === "redact"
    ? r
      ? `${s} ${n} transition-colors`.trim()
      : `${n} text-transparent bg-[#111111] rounded-[2px] box-decoration-clone cursor-pointer transition-colors`.trim()
    : `${s} ${n}`.trim();
}
function Ke(e) {
  const { segment: t, revealKey: r, revealed: s, onReveal: n, theme: o } = e,
    i = Yt(t, o, s);
  return t.type === "redact"
    ? s
      ? a.jsx("span", { className: i, children: t.text })
      : a.jsx("span", {
          role: "button",
          tabIndex: 0,
          onClick: () => n(r),
          onKeyDown: (l) => {
            (l.key === "Enter" || l.key === " ") && n(r);
          },
          className: i,
          title: "点击揭开",
          children: t.text,
        })
    : a.jsx("span", { className: i, children: t.text });
}
function Jt(e) {
  const {
    block: t,
    entryId: r,
    theme: s,
    index: n,
    revealedKeys: o,
    onReveal: i,
  } = e;
  return a.jsxs("div", {
    className: s.mode === "clinical" || s.mode === "minimal" ? "mb-4" : "mb-3",
    children: [
      s.firstBlockMarker && n === 0
        ? a.jsx("div", {
            className:
              "mb-1 text-[10px] tracking-[0.26em] uppercase text-[#a6b2bf]",
            children: s.firstBlockMarker,
          })
        : null,
      a.jsx("p", {
        className: `relative text-left ${s.bodyTextClass} ${s.bodyFontClass}`,
        children: t.segments.map((l, p) => {
          const f = `${r}:${t.id}:${p}`;
          return a.jsxs(
            re.Fragment,
            {
              children: [
                a.jsx(Ke, {
                  segment: l,
                  revealKey: f,
                  revealed: o.has(f),
                  onReveal: i,
                  theme: s,
                }),
                p < t.segments.length - 1 ? " " : "",
              ],
            },
            f
          );
        }),
      }),
    ],
  });
}
function Ht(e) {
  const {
      entry: t,
      characterName: r,
      revealedKeys: s,
      onReveal: n,
      onDelete: o,
    } = e,
    i = Ae(t);
  return a.jsxs("article", {
    className: `echoes-diary-card relative overflow-hidden rounded-[8px] border ${i.paperClass}`,
    children: [
      a.jsx("div", {
        className: "absolute inset-0 pointer-events-none",
        style: {
          background: `radial-gradient(circle at top, ${i.accentSoft}, transparent 42%)`,
        },
      }),
      a.jsx("div", {
        className: "absolute left-0 top-0 bottom-0 w-[3px]",
        style: { backgroundColor: i.accentColor, opacity: 0.7 },
      }),
      i.tape
        ? a.jsx("div", {
            className:
              "absolute right-7 top-[-7px] h-[20px] w-[62px] rotate-[-4deg] rounded-[2px] bg-[rgba(199,190,177,0.46)]",
          })
        : null,
      i.overlay === "ruled"
        ? a.jsx("div", {
            className: "absolute inset-0 pointer-events-none",
            style: {
              backgroundImage: `repeating-linear-gradient(transparent, transparent 31px, ${i.accentLine} 31px, ${i.accentLine} 32px)`,
            },
          })
        : null,
      i.overlay === "grid"
        ? a.jsx("div", {
            className: "absolute inset-0 pointer-events-none opacity-70",
            style: {
              backgroundImage: `linear-gradient(${i.accentLine} 1px, transparent 1px), linear-gradient(90deg, ${i.accentLine} 1px, transparent 1px)`,
              backgroundSize: "26px 26px",
            },
          })
        : null,
      i.overlay === "mist"
        ? a.jsx("div", {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background:
                "radial-gradient(circle at 18% 18%, rgba(255,255,255,0.48), transparent 26%), radial-gradient(circle at 80% 20%, rgba(226,236,241,0.46), transparent 24%), radial-gradient(circle at 64% 78%, rgba(214,226,232,0.35), transparent 28%)",
            },
          })
        : null,
      i.marginDoodles.map((l, p) =>
        a.jsx(
          "div",
          {
            className:
              "absolute right-3 text-[24px] opacity-55 pointer-events-none",
            style: { top: `${78 + p * 110}px`, color: i.accentColor },
            children: l,
          },
          `${t.id}-mark-${p}`
        )
      ),
      a.jsxs("div", {
        className: `relative z-[1] ${i.paperInnerClass}`,
        children: [
          a.jsxs("div", {
            className: "mb-4 flex items-start justify-between gap-3",
            children: [
              a.jsxs("div", {
                children: [
                  a.jsx("div", {
                    className:
                      "mb-1 text-[10px] uppercase tracking-[0.28em] text-[#948f88]",
                    children: i.headerEyebrow,
                  }),
                  a.jsx("div", {
                    className: "text-[13px] text-[#8e857e]",
                    children: r,
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "flex items-center gap-1.5",
                children: [
                  a.jsx("div", {
                    className: `rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] ${i.chipClass}`,
                    children: Ft[i.mode],
                  }),
                  a.jsx("button", {
                    type: "button",
                    onPointerDown: (l) => l.stopPropagation(),
                    onClick: (l) => {
                      l.stopPropagation(), o(t);
                    },
                    className:
                      "flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(124,101,83,0.12)] bg-[rgba(255,251,245,0.48)] text-[#9b8d82]/55 transition-colors hover:border-rose-200/70 hover:bg-rose-50/70 hover:text-rose-500",
                    title: "删除这篇角色日记",
                    children: a.jsx(Xe, { className: "h-3.5 w-3.5" }),
                  }),
                ],
              }),
            ],
          }),
          a.jsx("div", {
            className: "relative pr-6",
            children: t.blocks.map((l, p) =>
              a.jsx(
                Jt,
                {
                  block: l,
                  entryId: t.id,
                  theme: i,
                  index: p,
                  revealedKeys: s,
                  onReveal: n,
                },
                l.id
              )
            ),
          }),
          a.jsxs("div", {
            className: `relative mt-5 rounded-[4px] border px-4 py-3 ${i.summaryClass} ${i.summaryRotateClass}`,
            children: [
              a.jsx("div", {
                className:
                  "absolute left-4 top-[-6px] h-[11px] w-[11px] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.18)]",
                style: { background: i.summaryPinGradient },
              }),
              a.jsx("div", {
                className:
                  "mb-1 text-[10px] uppercase tracking-[0.24em] opacity-75",
                children: i.summaryLabel,
              }),
              a.jsx("div", {
                className: i.summaryTextClass,
                children: t.summary,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ee(e) {
  const { characterName: t, isToday: r } = e;
  return a.jsxs("article", {
    className:
      "relative overflow-hidden rounded-[8px] border border-[rgba(203,190,173,0.68)] bg-[linear-gradient(180deg,#fbf7ef,#f3ece1)] shadow-[0_18px_44px_rgba(124,118,108,0.10)]",
    children: [
      a.jsx("div", {
        className:
          "absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(216,197,169,0.14),transparent_40%)]",
      }),
      a.jsx("div", {
        className:
          "absolute left-0 top-0 bottom-0 w-[3px] bg-[rgba(200,154,112,0.7)]",
      }),
      a.jsxs("div", {
        className: "relative z-[1] pl-7 pr-6 pt-6 pb-8",
        children: [
          a.jsxs("div", {
            className: "mb-4 flex items-start justify-between gap-3",
            children: [
              a.jsxs("div", {
                children: [
                  a.jsx("div", {
                    className:
                      "mb-1 text-[10px] uppercase tracking-[0.28em] text-[#948f88]",
                    children: "blank page",
                  }),
                  a.jsx("div", {
                    className: "text-[13px] text-[#8e857e]",
                    children: t,
                  }),
                ],
              }),
              a.jsx("div", {
                className:
                  "rounded-full border border-[rgba(213,192,171,0.8)] bg-white/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[#9a785b]",
                children: r ? "Today" : "Blank",
              }),
            ],
          }),
          a.jsxs("div", {
            className:
              "min-h-[320px] rounded-[4px] border border-dashed border-[rgba(198,183,167,0.42)] bg-[rgba(255,252,247,0.58)] px-5 pt-14 pb-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]",
            children: [
              a.jsx(we, { className: "mx-auto h-8 w-8 text-[#c0ab96]" }),
              a.jsx("div", {
                className: "mt-4 text-[15px] font-semibold text-[#5b514a]",
                children: r ? "今天还没有日记" : "这一页还是空白",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Vt(e) {
  return e
    .split(/\r?\n\s*\r?\n/g)
    .map((t) => t.trim())
    .filter(Boolean);
}
function Wt(e) {
  return e === "strike"
    ? "decoration-[rgba(160,88,88,0.72)] line-through decoration-[2px]"
    : e === "circle"
    ? "rounded-full border border-[rgba(170,122,96,0.65)] px-1.5 py-0.5"
    : "underline decoration-[rgba(120,138,168,0.82)] decoration-[1.5px] underline-offset-[5px]";
}
function qt(e) {
  const {
    annotationId: t,
    block: r,
    theme: s,
    revealedKeys: n,
    onReveal: o,
    label: i,
  } = e;
  return a.jsxs("div", {
    className:
      "my-4 rounded-[4px] border border-[rgba(190,176,160,0.52)] bg-[rgba(255,250,243,0.92)] px-3 py-2.5 shadow-[0_8px_18px_rgba(107,94,83,0.08)]",
    children: [
      a.jsx("div", {
        className: "mb-1 text-[9px] uppercase tracking-[0.18em] text-[#9b8b80]",
        children: i,
      }),
      a.jsx("div", {
        className:
          "text-left text-[13px] leading-[1.72] text-[#5a5048] font-['STKaiti','KaiTi','serif']",
        children: r.segments.map((l, p) => {
          const f = `${t}:${r.id}:${p}`;
          return a.jsxs(
            re.Fragment,
            {
              children: [
                a.jsx(Ke, {
                  segment: l,
                  revealKey: f,
                  revealed: n.has(f),
                  onReveal: o,
                  theme: s,
                }),
                p < r.segments.length - 1 ? " " : "",
              ],
            },
            f
          );
        }),
      }),
    ],
  });
}
function Xt(e) {
  const {
      entry: t,
      annotation: r,
      characterName: s,
      revealedKeys: n,
      onReveal: o,
      onEdit: i,
      onAnnotate: l,
      isAnnotating: p,
    } = e,
    { canAnnotate: f } = e,
    u = r
      ? Ae({
          id: r.id,
          characterId: r.characterId,
          dateKey: r.dateKey,
          summary: r.summary,
          styleHint: r.styleHint,
          blocks: r.blocks,
          generatedAt: r.generatedAt,
          updatedAt: r.updatedAt,
        })
      : null,
    g = Vt(t.content),
    m = C.useMemo(() => le(t.content), [t.content]),
    y = C.useMemo(() => new Map(m.map((T) => [T.id, T])), [m]),
    $ = C.useMemo(() => {
      if (!(r != null && r.sentenceAnchors)) return new Map();
      const T = new Map();
      return (
        r.sentenceAnchors.forEach((v) => {
          const x = y.get(v.sentenceId);
          if (!x) return;
          const D = T.get(x.paragraphIndex) || [];
          T.set(x.paragraphIndex, [
            ...D,
            {
              ...v,
              paragraphIndex: x.paragraphIndex,
              sentenceIndex: x.sentenceIndex,
            },
          ]);
        }),
        T
      );
    }, [r == null ? void 0 : r.sentenceAnchors, y]),
    N = (r == null ? void 0 : r.id) || "",
    j = (r == null ? void 0 : r.summary) || "",
    k = g.length > 1 ? Math.min(1, g.length - 1) : 0;
  return a.jsxs("article", {
    className:
      "relative overflow-hidden rounded-[8px] border border-[rgba(187,176,164,0.7)] bg-[linear-gradient(180deg,#fffaf3,#f6efe5)] shadow-[0_18px_38px_rgba(121,109,98,0.10)]",
    children: [
      a.jsx("div", {
        className:
          "absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(221,204,182,0.14),transparent_42%)]",
      }),
      a.jsxs("div", {
        className: "relative z-[1] px-5 py-5",
        children: [
          a.jsxs("div", {
            className: "mb-4 flex items-start justify-between gap-3",
            children: [
              a.jsxs("div", {
                children: [
                  a.jsx("div", {
                    className:
                      "mb-1 text-[10px] uppercase tracking-[0.28em] text-[#96897e]",
                    children: "my note",
                  }),
                  a.jsx("div", {
                    className: "text-[13px] tracking-[0.16em] text-[#b08f72]",
                    children: Ot(t.dateKey),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  a.jsx("button", {
                    type: "button",
                    onClick: i,
                    className:
                      "inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(190,176,160,0.8)] bg-white/72 text-[#7b6f66] transition-colors hover:bg-white",
                    title: "修改或清空这篇用户日记",
                    children: a.jsx(Ze, { className: "h-4 w-4" }),
                  }),
                  a.jsx("button", {
                    type: "button",
                    onClick: l,
                    disabled: p || !f,
                    className:
                      "inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(190,176,160,0.8)] bg-white/72 text-[#7b6f66] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60",
                    title: f
                      ? r
                        ? `重写 ${s} 的批注标签`
                        : `请求 ${s} 给这页打标签批注`
                      : "只有今天的用户日记可以请求批注",
                    children: p
                      ? a.jsx(Ce, { className: "h-4 w-4 animate-spin" })
                      : a.jsx(it, { className: "h-4 w-4" }),
                  }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className:
              "relative overflow-hidden rounded-[4px] border border-[rgba(205,192,174,0.6)] bg-[rgba(255,253,249,0.86)] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]",
            children: [
              a.jsx("div", {
                className: "pointer-events-none absolute inset-0 opacity-70",
                style: {
                  backgroundImage:
                    "repeating-linear-gradient(transparent, transparent 33px, rgba(187,176,164,0.18) 33px, rgba(187,176,164,0.18) 34px)",
                },
              }),
              a.jsx("div", {
                className: "relative z-[1]",
                children: (g.length > 0 ? g : [t.content]).map((T, v, x) => {
                  const D = m
                      .filter((h) => h.paragraphIndex === v)
                      .sort((h, I) => h.sentenceIndex - I.sentenceIndex),
                    S = ($.get(v) || []).sort(
                      (h, I) => h.sentenceIndex - I.sentenceIndex
                    );
                  return a.jsxs(
                    re.Fragment,
                    {
                      children: [
                        a.jsx("p", {
                          className:
                            "mb-3 whitespace-pre-wrap break-words text-[15px] leading-[2.15] text-[#4d433d] font-['STKaiti','KaiTi','serif']",
                          children: D.map((h) => {
                            const I =
                              S.find((M) => M.sentenceId === h.id) || null;
                            return a.jsx(
                              re.Fragment,
                              {
                                children: a.jsx("span", {
                                  className: I ? Wt(I.mark) : "",
                                  children: h.text,
                                }),
                              },
                              `sentence-${t.id}-${h.id}`
                            );
                          }),
                        }),
                        u && j && v === k
                          ? a.jsxs("div", {
                              className: `my-4 rounded-[4px] border px-3 py-2 ${u.summaryClass} ${u.summaryRotateClass}`,
                              children: [
                                a.jsxs("div", {
                                  className:
                                    "mb-1 text-[9px] uppercase tracking-[0.18em] opacity-75",
                                  children: [s, " note"],
                                }),
                                a.jsx("div", {
                                  className: u.summaryTextClass,
                                  children: j,
                                }),
                              ],
                            })
                          : null,
                        u
                          ? S.map((h, I) =>
                              h.noteBlock
                                ? qt({
                                    annotationId: `${N}-${h.sentenceId}-${I}`,
                                    block: h.noteBlock,
                                    theme: u,
                                    revealedKeys: n,
                                    onReveal: o,
                                    label: `${s} edit`,
                                  })
                                : null
                            )
                          : null,
                        v < x.length - 1
                          ? a.jsx("div", { className: "h-1" })
                          : null,
                      ],
                    },
                    `paragraph-${t.id}-${v}`
                  );
                }),
              }),
              u
                ? a.jsx("div", {
                    className:
                      "pointer-events-none absolute left-4 top-4 h-[22px] w-[54px] rotate-[-5deg] rounded-[2px]",
                    style: { background: u.summaryPinGradient, opacity: 0.18 },
                  })
                : null,
            ],
          }),
        ],
      }),
    ],
  });
}
const Zt = {
  enter: (e) => ({
    x: e > 0 ? -86 : 86,
    rotate: e > 0 ? -2.4 : 2.4,
    opacity: 0.78,
    scale: 0.985,
    filter: "blur(0.3px)",
  }),
  center: { x: 0, rotate: 0, opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: (e) => ({
    x: e > 0 ? 116 : -116,
    rotate: e > 0 ? 3.2 : -3.2,
    opacity: 0,
    scale: 0.985,
    filter: "blur(0.5px)",
  }),
};
function Qt(e) {
  const {
    page: t,
    characterName: r,
    annotation: s,
    revealedKeys: n,
    onReveal: o,
    pageTurnDirection: i,
    pageIndex: l,
    totalPages: p,
    onOlderPage: f,
    onNewerPage: u,
    onEditUserDiary: g,
    onAnnotateUserDiary: m,
    isAnnotatingUserDiary: y,
    onDeleteCharacterDiary: $,
  } = e;
  return a.jsxs("div", {
    className: "relative overflow-hidden px-1 pt-1 pb-2",
    style: { touchAction: "pan-y" },
    children: [
      a.jsx("div", {
        className:
          "pointer-events-none absolute inset-x-4 top-4 h-full rounded-[8px] border border-[rgba(203,190,173,0.3)] bg-[rgba(247,239,228,0.48)] shadow-[0_12px_30px_rgba(119,106,95,0.08)]",
      }),
      a.jsx("div", {
        className:
          "pointer-events-none absolute inset-x-3 top-2 h-full rounded-[8px] border border-[rgba(212,198,179,0.42)] bg-[rgba(253,248,240,0.65)] shadow-[0_16px_34px_rgba(119,106,95,0.10)]",
      }),
      a.jsx(nt, {
        custom: i,
        mode: "wait",
        children: a.jsx(
          st.div,
          {
            custom: i,
            variants: Zt,
            initial: "enter",
            animate: "center",
            exit: "exit",
            transition: {
              type: "spring",
              stiffness: 320,
              damping: 34,
              mass: 0.9,
            },
            drag: "x",
            dragConstraints: { left: 0, right: 0 },
            dragElastic: 0.18,
            dragDirectionLock: !0,
            whileDrag: {
              rotate: l < p - 1 ? -2.8 : 1.8,
              boxShadow: "0 26px 52px rgba(103, 89, 75, 0.18)",
              cursor: "grabbing",
            },
            onDragEnd: (N, j) => {
              if (j.offset.x <= -ye || j.velocity.x <= -580) {
                u();
                return;
              }
              (j.offset.x >= ye || j.velocity.x >= 580) && f();
            },
            className: "relative cursor-grab will-change-transform",
            style: { touchAction: "pan-y" },
            children: a.jsxs("div", {
              className: "space-y-4",
              children: [
                t.entry
                  ? a.jsx(Ht, {
                      entry: t.entry,
                      characterName: r,
                      revealedKeys: n,
                      onReveal: o,
                      onDelete: $,
                    })
                  : a.jsx(Ee, { characterName: r, isToday: t.isToday }),
                t.userDiary
                  ? a.jsx(Xt, {
                      entry: t.userDiary,
                      annotation: s,
                      onEdit: g,
                      characterName: r,
                      revealedKeys: n,
                      onReveal: o,
                      onAnnotate: m,
                      isAnnotating: y,
                      canAnnotate: t.isToday,
                    })
                  : null,
              ],
            }),
          },
          t.key
        ),
      }),
    ],
  });
}
function gr() {
  var me;
  const {
      setCurrentApp: e,
      activeUserId: t,
      userContacts: r,
      characters: s,
      knowledge: n,
      socialRelations: o,
      dailyPlans: i,
      places: l,
      apiPresets: p,
      activePresetId: f,
      lastUsage: u,
      setLastUsage: g,
      users: m,
      npcs: y,
      messages: $,
      chats: N,
      characterDiaryEntries: j,
      setCharacterDiaryEntries: k,
      userDiaryEntries: T,
      setUserDiaryEntries: v,
      userDiaryAnnotations: x,
      setUserDiaryAnnotations: D,
      worldBooks: S,
    } = We(),
    [h, I] = C.useState(!1),
    [M, J] = C.useState(!1),
    [H, U] = C.useState(new Set()),
    [de, V] = C.useState(null),
    [O, W] = C.useState(0),
    [Me, ae] = C.useState(1),
    [Le, F] = C.useState(!1),
    [ue, ne] = C.useState(""),
    [Q, q] = C.useState(null),
    B = C.useMemo(
      () => s.filter((c) => (r[t] || []).includes(c.id)),
      [t, s, r]
    ),
    [A, se] = C.useState(((me = B[0]) == null ? void 0 : me.id) || "");
  C.useEffect(() => {
    if (B.length === 0) {
      se("");
      return;
    }
    B.some((c) => c.id === A) || se(B[0].id);
  }, [B, A]);
  const pe = p.find((c) => c.id === f) || p[0],
    _ = B.find((c) => c.id === A) || null,
    K = _ ? fe(he(_.timezone)) : fe(),
    ee = C.useMemo(
      () =>
        j
          .filter((c) => c.characterId === A)
          .sort(
            (c, d) =>
              d.dateKey.localeCompare(c.dateKey) || d.updatedAt - c.updatedAt
          ),
      [j, A]
    ),
    te = C.useMemo(
      () =>
        T.filter((c) => c.userId === t).sort(
          (c, d) =>
            d.dateKey.localeCompare(c.dateKey) || d.updatedAt - c.updatedAt
        ),
      [t, T]
    ),
    X = ee.find((c) => c.dateKey === K && c.source === "ai") || null,
    E = te.find((c) => c.dateKey === K) || null,
    G = C.useMemo(
      () =>
        A
          ? Array.from(
              new Set([
                K,
                ...ee.map((d) => d.dateKey),
                ...te.map((d) => d.dateKey),
              ])
            )
              .sort((d, b) => b.localeCompare(d))
              .map((d) => ({
                key: `diary-page-${A}-${t}-${d}`,
                dateKey: d,
                entry: ee.find((b) => b.dateKey === d) || null,
                userDiary: te.find((b) => b.dateKey === d) || null,
                isToday: d === K,
              }))
          : [],
      [t, A, ee, te, K]
    ),
    w = G[Math.min(O, Math.max(G.length - 1, 0))] || null,
    Z =
      (w != null &&
        w.userDiary &&
        x.find((c) => {
          var d;
          return (
            c.userDiaryId === ((d = w.userDiary) == null ? void 0 : d.id) &&
            c.userId === t &&
            c.characterId === A
          );
        })) ||
      null;
  C.useEffect(() => {
    W(0), ae(1), U(new Set());
  }, [A, K]),
    C.useEffect(() => {
      O > Math.max(G.length - 1, 0) && W(0);
    }, [G.length, O]);
  const Re = () => {
      O >= G.length - 1 || (ae(1), W((c) => c + 1), U(new Set()));
    },
    Pe = () => {
      O <= 0 || (ae(-1), W((c) => c - 1), U(new Set()));
    },
    Be = (c) => {
      U((d) => {
        const b = new Set(d);
        return b.add(c), b;
      });
    },
    ze = () => {
      ne((E == null ? void 0 : E.content) || ""),
        q(
          E
            ? { id: E.id, dateKey: E.dateKey, createdAt: E.createdAt }
            : { dateKey: K }
        ),
        F(!0);
    },
    Ue = () => {
      w != null &&
        w.userDiary &&
        (ne(w.userDiary.content || ""),
        q({
          id: w.userDiary.id,
          dateKey: w.userDiary.dateKey,
          createdAt: w.userDiary.createdAt,
        }),
        F(!0));
    },
    Oe = () => {
      var xe;
      const c = ue.trim(),
        d =
          Q ||
          (E
            ? { id: E.id, dateKey: E.dateKey, createdAt: E.createdAt }
            : { dateKey: K }),
        b = d.id || `user-diary-${t}-${d.dateKey}`;
      if (!c) {
        v((z) => z.filter((Y) => Y.id !== b)),
          D((z) => z.filter((Y) => Y.userDiaryId !== b)),
          ((xe = w == null ? void 0 : w.userDiary) == null ? void 0 : xe.id) ===
            b && U(new Set()),
          F(!1),
          q(null);
        return;
      }
      const R = Date.now(),
        P = {
          id: b,
          userId: t,
          dateKey: d.dateKey,
          content: c,
          createdAt: d.createdAt || R,
          updatedAt: R,
        };
      v((z) => [...z.filter((Je) => Je.id !== b), P]),
        D((z) => z.filter((Y) => Y.userDiaryId !== b)),
        d.dateKey === K && W(0),
        U(new Set()),
        F(!1),
        q(null);
    },
    Fe = async () => {
      if (
        !(!_ || !(w != null && w.userDiary) || !w.isToday || M) &&
        !(
          Z && !window.confirm(`${_.name} 的批注已经存在。是否重新生成并覆盖？`)
        )
      ) {
        J(!0), V(null);
        try {
          const c = i.find((b) => {
              var R;
              return (
                b.entityType === "character" &&
                b.entityId === _.id &&
                b.dateKey === ((R = w.userDiary) == null ? void 0 : R.dateKey)
              );
            }),
            d = await Bt({
              character: _,
              userDiary: w.userDiary,
              knowledge: n,
              messages: $,
              chats: N,
              socialRelations: o,
              dailyPlan: c,
              places: l,
              previousEntries: j,
              characters: s,
              users: m,
              npcs: y,
              preset: pe,
              overwriteAnnotationId: Z == null ? void 0 : Z.id,
              worldBooks: S,
            });
          D((b) => [
            ...b.filter(
              (P) =>
                !(
                  P.userDiaryId === d.annotation.userDiaryId &&
                  P.userId === d.annotation.userId &&
                  P.characterId === d.annotation.characterId
                )
            ),
            d.annotation,
          ]),
            d.usage && g(d.usage);
        } catch (c) {
          V({ title: "批注生成失败", detail: ge(c) });
        } finally {
          J(!1);
        }
      }
    },
    Ge = (c) => {
      window.confirm("确认删除这篇角色日记吗？这个操作不会删除用户日记。") &&
        k((b) => b.filter((R) => R.id !== c.id));
    },
    Ye = async () => {
      if (
        !(!_ || h) &&
        !(X && !window.confirm("今天的日记已经存在。是否重新生成并覆盖？"))
      ) {
        I(!0), V(null);
        try {
          const c = i.find(
              (b) =>
                b.entityType === "character" &&
                b.entityId === _.id &&
                b.dateKey === K
            ),
            d = await Pt({
              character: _,
              dateKey: K,
              knowledge: n,
              messages: $,
              chats: N,
              socialRelations: o,
              dailyPlan: c,
              places: l,
              previousEntries: j,
              characters: s,
              users: m,
              npcs: y,
              preset: pe,
              overwriteEntryId: X == null ? void 0 : X.id,
              worldBooks: S,
            });
          k((b) => [
            ...b.filter(
              (P) =>
                !(
                  P.characterId === d.entry.characterId &&
                  P.dateKey === d.entry.dateKey &&
                  P.source === "ai"
                )
            ),
            d.entry,
          ]),
            d.usage && g(d.usage);
        } catch (c) {
          V({ title: "日记生成失败", detail: ge(c) });
        } finally {
          I(!1);
        }
      }
    };
  return a.jsxs("div", {
    className:
      "echoes-page echoes-page-diary w-full h-full overflow-hidden bg-[#e9e1d6] text-[#312d29]",
    children: [
      a.jsxs("div", {
        className:
          "flex h-full w-full flex-col bg-[radial-gradient(circle_at_top,rgba(255,248,240,0.4),transparent_28%),linear-gradient(180deg,#eee7dc_0%,#e5ddd1_100%)]",
        children: [
          a.jsx("div", {
            className:
              "echoes-page-header safe-top sticky top-0 z-10 border-b border-[rgba(72,58,49,0.08)] bg-[rgba(247,241,233,0.92)] px-4 pb-4 backdrop-blur-md",
            children: a.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                a.jsx("button", {
                  onClick: () => e("home"),
                  className:
                    "echoes-diary-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/40 text-[#7d736d] hover:text-[#5f5852] transition-colors",
                  children: a.jsx(rt, { className: "w-6 h-6" }),
                }),
                a.jsx("div", {
                  className: "min-w-0 flex-1",
                  children: a.jsx("h1", {
                    className: "text-2xl font-bold text-[#2f2925]",
                    children: "日记",
                  }),
                }),
                a.jsx("button", {
                  type: "button",
                  onClick: ze,
                  className:
                    "echoes-diary-add-btn flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] border border-[rgba(214,199,182,0.46)] bg-[rgba(252,248,242,0.96)] text-[#8c7767] shadow-[0_4px_10px_rgba(148,128,111,0.10)] transition-colors hover:bg-white",
                  title: "写今日的日记",
                  children: a.jsx(qe, { className: "h-4.5 w-4.5" }),
                }),
              ],
            }),
          }),
          a.jsx("div", {
            className: "flex-1 overflow-y-auto pb-8",
            children:
              B.length === 0
                ? a.jsx("div", {
                    className: "px-4 pt-6",
                    children: a.jsx("div", {
                      className:
                        "rounded-[8px] border border-[rgba(109,96,88,0.12)] bg-[rgba(255,251,246,0.75)] px-5 py-8 text-center text-[13px] leading-[1.8] text-[#756c66] shadow-[0_10px_24px_rgba(99,87,79,0.08)]",
                      children: "暂无可查看角色",
                    }),
                  })
                : a.jsxs(a.Fragment, {
                    children: [
                      a.jsx("div", {
                        className:
                          "flex gap-3 overflow-x-auto px-5 py-4 scrollbar-hide",
                        children: B.map((c) => {
                          const d = c.id === A,
                            b = Ut(c.avatarColor);
                          return a.jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: () => se(c.id),
                              className:
                                "flex min-w-[66px] shrink-0 flex-col items-center gap-1.5",
                              children: [
                                a.jsx("div", {
                                  className: `flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-[2.5px] bg-white shadow-[0_6px_14px_rgba(105,92,82,0.12)] transition-all ${
                                    d ? "scale-[1.03]" : "opacity-75"
                                  }`,
                                  style: {
                                    borderColor: d ? b : "transparent",
                                    boxShadow: d
                                      ? `0 0 0 3px ${b}33, 0 6px 14px rgba(105,92,82,0.12)`
                                      : "0 6px 14px rgba(105,92,82,0.08)",
                                  },
                                  children: c.avatarUrl
                                    ? a.jsx("img", {
                                        src: c.avatarUrl,
                                        alt: "",
                                        className: "h-full w-full object-cover",
                                      })
                                    : a.jsx("div", {
                                        className:
                                          "text-[18px] font-semibold text-white",
                                        style: {
                                          backgroundColor: b,
                                          width: "100%",
                                          height: "100%",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                        },
                                        children: c.name.slice(0, 1),
                                      }),
                                }),
                                a.jsx("span", {
                                  className: `text-[11px] ${
                                    d
                                      ? "font-semibold text-[#2f2925]"
                                      : "text-[#7f736a]"
                                  }`,
                                  children: c.name,
                                }),
                              ],
                            },
                            c.id
                          );
                        }),
                      }),
                      a.jsxs("div", {
                        className: "space-y-5 px-4",
                        children: [
                          de
                            ? a.jsx(et, { error: de, onClose: () => V(null) })
                            : null,
                          w
                            ? a.jsx(Qt, {
                                page: w,
                                characterName:
                                  (_ == null ? void 0 : _.name) || "",
                                annotation: Z,
                                revealedKeys: H,
                                onReveal: Be,
                                pageTurnDirection: Me,
                                pageIndex: O,
                                totalPages: G.length,
                                onOlderPage: Re,
                                onNewerPage: Pe,
                                onEditUserDiary: Ue,
                                onAnnotateUserDiary: Fe,
                                isAnnotatingUserDiary: M,
                                onDeleteCharacterDiary: Ge,
                              })
                            : a.jsx(Ee, {
                                characterName:
                                  (_ == null ? void 0 : _.name) || "",
                                isToday: !0,
                              }),
                          w != null && w.isToday
                            ? a.jsx("div", {
                                className: "pb-1",
                                children: a.jsx("button", {
                                  type: "button",
                                  onClick: Ye,
                                  disabled: !_ || h,
                                  className: `echoes-diary-save-btn w-full rounded-[8px] border border-dashed border-[rgba(124,101,83,0.18)] bg-[rgba(255,251,245,0.72)] px-4 py-3 text-center text-[13px] tracking-[0.08em] text-[#7e6c5f] transition-all hover:border-[rgba(188,145,108,0.4)] hover:text-[#ba7f4f] disabled:cursor-not-allowed ${Qe}`,
                                  children: h
                                    ? a.jsxs("span", {
                                        className:
                                          "inline-flex items-center gap-2",
                                        children: [
                                          a.jsx(Ce, {
                                            className: "h-4 w-4 animate-spin",
                                          }),
                                          "生成中",
                                        ],
                                      })
                                    : X
                                    ? a.jsxs("span", {
                                        className:
                                          "inline-flex items-center gap-2",
                                        children: [
                                          a.jsx(at, { className: "h-4 w-4" }),
                                          "重写今日日记",
                                        ],
                                      })
                                    : a.jsxs("span", {
                                        className:
                                          "inline-flex items-center gap-2",
                                        children: [
                                          a.jsx(we, { className: "h-4 w-4" }),
                                          "生成今日日记",
                                        ],
                                      }),
                                }),
                              })
                            : null,
                          null,
                        ],
                      }),
                    ],
                  }),
          }),
        ],
      }),
      a.jsx(tt, {
        isOpen: Le,
        title: Q != null && Q.id ? "修改用户日记" : "写今日用户日记",
        onClose: () => {
          F(!1), q(null);
        },
        children: a.jsxs("div", {
          className: "space-y-4",
          children: [
            a.jsx("textarea", {
              value: ue,
              onChange: (c) => ne(c.target.value),
              placeholder:
                "写一点今天想记下来的东西。清空后保存会直接删除这篇日记和它的批注。",
              className:
                "min-h-[220px] w-full resize-none rounded-2xl border border-[rgba(190,176,160,0.55)] bg-white/70 px-4 py-3 text-[14px] leading-[1.8] text-[#4e443d] outline-none transition-colors focus:border-[rgba(164,148,130,0.85)]",
            }),
            a.jsxs("div", {
              className: "flex justify-end gap-2",
              children: [
                a.jsx("button", {
                  type: "button",
                  onClick: () => F(!1),
                  className:
                    "rounded-full border border-[rgba(190,176,160,0.68)] bg-white/65 px-4 py-2 text-[13px] text-[#776b63] transition-colors hover:bg-white",
                  children: "取消",
                }),
                a.jsx("button", {
                  type: "button",
                  onClick: Oe,
                  className:
                    "rounded-full border border-[rgba(171,147,121,0.72)] bg-[rgba(245,236,226,0.9)] px-4 py-2 text-[13px] text-[#6a584b] transition-colors hover:bg-[rgba(248,240,231,1)]",
                  children: "保存",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { gr as default };
