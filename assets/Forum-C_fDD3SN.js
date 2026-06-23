import { r as j, j as e } from "./index-C41onZB-.js";
import {
  c as Mt,
  j as Ze,
  f as bn,
  t as Nn,
  h as jn,
  i as wn,
  m as vt,
  u as vn,
  l as $t,
  T as Ue,
  b as Le,
  J as Ve,
  P as Ct,
} from "./App-CYgIjxWH.js";
import { A as $n } from "./ApiErrorCard-DsY_S22O.js";
import { M as me } from "./Modal-BhAOmQIi.js";
import { S as pe, a as be, b as Je } from "./buttonStyles-CgOYb1KY.js";
import { f as Ft } from "./llmFetch-C_SjUca9.js";
import { C as Qe } from "./chevron-left-CTqCLzU8.js";
import { L as Ke } from "./loader-circle-CcTwnOUB.js";
import { R as It } from "./refresh-cw-BoDq0Pnx.js";
import { U as Cn } from "./users-CICUzMdL.js";
import { M as In } from "./message-circle-5JY3SDfG.js";
import { S as kt } from "./sparkles-CGxZnICD.js";
import { H as Tt } from "./hash-g_y78lcq.js";
import { C as St } from "./chevron-right-C_PIujnZ.js";
import { S as kn } from "./send-DYTL5zGj.js";
import { U as Tn } from "./user-CxsAAqKP.js";
import "./circle-alert-JwRkSIRb.js";
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sn = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  An = Mt("arrow-left", Sn);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pn = [
    ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
    ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
    ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
    [
      "line",
      { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
    ],
    [
      "line",
      { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" },
    ],
  ],
  At = Mt("share-2", Pn);
function He(o) {
  return o.replace(/<think(?:ing)?[\s\S]*?<\/think(?:ing)?>/gi, "").trim();
}
function _n(o, s) {
  let n = s + 1;
  for (
    ;
    n < o.length &&
    (o[n] === " " ||
      o[n] === "	" ||
      o[n] ===
        `
` ||
      o[n] === "\r");

  )
    n++;
  if (n >= o.length) return !0;
  const l = o[n];
  return l === "," || l === "}" || l === "]" || l === ":";
}
function et(o) {
  const s = [];
  let n = !1,
    l = !1;
  for (let i = 0; i < o.length; i++) {
    const c = o[i];
    if (l) {
      s.push(c), (l = !1);
      continue;
    }
    if (c === "\\" && n) {
      s.push(c), (l = !0);
      continue;
    }
    if (c === '"') {
      n
        ? _n(o, i)
          ? ((n = !1), s.push(c))
          : s.push("\\", '"')
        : ((n = !0), s.push(c));
      continue;
    }
    if (
      n &&
      (c ===
        `
` ||
        c === "\r")
    ) {
      c === "\r" &&
        o[i + 1] ===
          `
` &&
        i++,
        s.push("\\", "n");
      continue;
    }
    if (n && c !== "	" && c.charCodeAt(0) >= 0 && c.charCodeAt(0) <= 31) {
      s.push(
        "\\",
        "u",
        "0",
        "0",
        c.charCodeAt(0).toString(16).padStart(2, "0")
      );
      continue;
    }
    s.push(c);
  }
  let r = s.join("");
  return (r = r.replace(/,(\s*[}\]])/g, "$1")), r;
}
async function tt(o, s, n) {
  var c, p, f;
  const l = await Ft(o, {
    model: o.model,
    messages: [
      { role: "system", content: s },
      { role: "user", content: n },
    ],
    temperature: o.temperature,
  });
  if (!l.ok) throw new Error(`Forum API Error: ${l.status} ${l.errorText}`);
  const r = l.data || {},
    i = r.usage
      ? {
          promptTokens: r.usage.prompt_tokens || 0,
          completionTokens: r.usage.completion_tokens || 0,
          totalTokens: r.usage.total_tokens || 0,
        }
      : null;
  return {
    content: He(
      ((f =
        (p = (c = r.choices) == null ? void 0 : c[0]) == null
          ? void 0
          : p.message) == null
        ? void 0
        : f.content) || ""
    ),
    usage: i,
  };
}
function En(o, s) {
  return o
    ? s
      ? {
          promptTokens: o.promptTokens + s.promptTokens,
          completionTokens: o.completionTokens + s.completionTokens,
          totalTokens: o.totalTokens + s.totalTokens,
        }
      : o
    : s;
}
function Dt(o, s, n, l, r) {
  const i = bn(r, l),
    c = Nn(i),
    p = n.find(
      (u) => u.entityType === o && u.entityId === s && u.dateKey === c
    ),
    f = jn(p),
    I = wn(f, i),
    N = f.find((u) => I >= u.startMinute && I <= u.endMinute);
  return N
    ? `${N.title} (${vt(N.startMinute)}-${vt(N.endMinute)})`
    : "自由活动中";
}
function Mn(o, s, n, l, r, i, c, p) {
  var g, b;
  const f = Dt("character", o.id, s, p, o.timezone),
    I =
      o.bio ||
      [
        (g = o.intro) == null ? void 0 : g.slice(0, 80),
        (b = o.background) == null ? void 0 : b.slice(0, 120),
      ]
        .filter(Boolean)
        .join("；") ||
      "",
    N = [];
  for (const x of l) {
    if (x.fromEntityId === o.id) {
      const C =
        r.find((w) => w.id === x.toEntityId) ||
        i.find((w) => w.id === x.toEntityId) ||
        c.find((w) => w.id === x.toEntityId);
      C && N.push(`→${C.name}(${x.relationKind}${x.note ? "," + x.note : ""})`);
    }
    if (x.toEntityId === o.id) {
      const C =
        r.find((w) => w.id === x.fromEntityId) ||
        i.find((w) => w.id === x.fromEntityId) ||
        c.find((w) => w.id === x.fromEntityId);
      C && N.push(`←${C.name}(${x.relationKind}${x.note ? "," + x.note : ""})`);
    }
  }
  const u = N.length ? `  关系=${N.join("; ")}` : "";
  return `[${o.name}]（${o.gender || "?"}）${I}  当前=${f}${u}`;
}
function Fn(o, s, n, l, r, i) {
  const c = Dt("npc", o.id, s, i, o.timezone),
    p = o.bio || (o.intro ? o.intro.slice(0, 60) : "普通居民"),
    f = [];
  for (const N of n)
    if (N.fromEntityId === o.id || N.toEntityId === o.id) {
      const u = N.fromEntityId === o.id ? N.toEntityId : N.fromEntityId,
        g = l.find((b) => b.id === u) || r.find((b) => b.id === u);
      g && f.push(`${g.name}(${N.relationKind})`);
    }
  const I = f.length ? `  关系=${f.join("; ")}` : "";
  return `[NPC:${o.name}]（${o.gender || "?"}）${p}  当前=${c}${I}`;
}
function Rt(o, s) {
  const n = o.filter((l) =>
    l.categoryId === "keyword" || l.categoryId === "html"
      ? !1
      : l.isGlobalActive
      ? !0
      : s.some((r) => {
          var i;
          return (i = r.mountedWorldBookIds) == null
            ? void 0
            : i.includes(l.id);
        })
  );
  return n.length === 0
    ? ""
    : n.map(
        (l) => `[《${l.title}》] (${l.categoryId})
${l.content}`
      ).join(`

`);
}
function nt(o, s, n = 5) {
  const l = new Set(),
    r = [];
  for (const c of o) {
    const p = Ze.getRecentKnowledgeForSchedule(s, c, n);
    for (const f of p) l.has(f.id) || (l.add(f.id), r.push(f));
  }
  if (r.length === 0) return "暂无近期记忆可供参考。";
  r.sort((c, p) => (p.startTime || 0) - (c.startTime || 0));
  const i = r.slice(0, 20);
  return Ze.formatKnowledgeForSchedulePrompt(i);
}
function st(o, s, n, l, r, i = 30, c = 1500) {
  const p = new Set(),
    f = [];
  for (const u of o) {
    const g = Ze.buildCompactVisibleMessageWindow({
      entityId: u,
      messages: s,
      chats: n,
      allCharacters: l,
      allUsers: r,
      maxMessages: i,
      maxChars: c,
    });
    if (g && g !== "暂无可注入的未总结聊天记录。")
      for (const b of g.split(`
`))
        p.has(b) || (p.add(b), f.push(b));
  }
  if (f.length === 0) return "暂无可注入的聊天记录。";
  let I = 0;
  const N = [];
  for (let u = f.length - 1; u >= 0 && !(I + f[u].length > 4e3); u--)
    (I += f[u].length), N.unshift(f[u]);
  return N.join(`
`);
}
function Dn(o) {
  const s = [],
    n = o.rules;
  return (
    n != null &&
      n.forceAnonymous &&
      (s.push(
        "所有帖子强制匿名。主要角色发帖时使用可辨识的匿名化名（如性格特征相关的网名），读者可以隐约猜到是谁。路人和NPC使用完全随机的匿名ID。"
      ),
      s.push(
        "【内容主题限定】帖子内容是发帖者平时不太会公开说的心里话——嫉妒、执念、不甘、隐秘的喜欢、压抑的情绪、对某人的真实看法、羞耻的经历或念头。只有躲在匿名面具后才会说的话。不要涉及直接的暴力威胁、杀人意图或犯罪计划，偏向情感层面的阴暗面。禁止发普通日常闲聊或无关紧要的吐槽。"
      )),
    n != null &&
      n.allowSoftDelete &&
      s.push(
        '极少数帖子可以标记为"已删除"（isDeleted=true），模拟"发完就删"的真实感。但必须非常克制——一批帖子里最多只有一条被删，大多数批次不应该有任何删除。只在内容确实敏感到发帖者会后悔时才用。isDeleted 的帖子 content 照样写原始内容，前端会自动替换显示。'
      ),
    (n == null ? void 0 : n.primaryPoster) === "npc"
      ? s.push(`NPC和路人混合发帖，但两者角色不同：
NPC是"局内人"——他们自己就认识主要角色甚至参与了事件，所以发帖带有明确的个人立场和情感色彩。比如：某角色的朋友会帮忙说话或替人着急，某角色的对手可能阴阳怪气或冷嘲热讽，某个暗恋者会旁敲侧击打探消息。NPC发帖的内容必须符合他们自身的身份和人际关系，不是中立旁观的路人视角。
路人是"吃瓜群众"——他们不认识当事人，只是听到碎片消息就来发帖，可以求证、跟风、张冠李戴、添油加醋。
两者帖子类型都要丰富：求证帖、爆料帖、阴阳怪气帖、站队帖、纯凑热闹帖。允许出现偏离事实的误传和臆测。`)
      : (n == null ? void 0 : n.primaryPoster) === "anonymous" &&
        s.push("发帖者以匿名路人为主，偶尔有角色匿名出没。"),
    s.length
      ? s.join(`
`)
      : "无特殊规则。"
  );
}
function Rn(o) {
  const s = o.id;
  return s === "unverified"
    ? "里世界的帖子像深夜写给陌生人的私密独白——犹豫、纠结、自我怀疑、不敢当面说的话。语气可以软弱、可以自嘲、可以怨毒，但必须是掏心窝子的，不是隔靴搔痒的感慨。写的时候想象一个人凌晨三点盯着手机屏幕，打了又删、删了又打，最后终于发出来的那种东西。"
    : s === "signal_noise"
    ? `想象贴吧八卦区和豆瓣鹅组的混合体，但关键区别是：这里不全是旁观者，有些发帖人（NPC）自己就在局里。
NPC发帖时要站在自己的立场说话——如果他是当事人的朋友，帖子可能是帮腔、解释、或者替人不值；如果他跟当事人有过节，帖子可能是借题发挥、含沙射影；如果他暗恋某人，帖子可能是假装不经意地提起对方。NPC不会用旁观者口吻说"听说xxx"，而是用自己人口吻说"我跟你们讲那个人真的xxx"。
路人发帖才是纯吃瓜视角：刷到什么听到什么就来发，信息不全还爱脑补。
语气完全口语化，想到哪说哪，标点随缘。不要写得像新闻稿或剧情总结，要像一个人蹲在工位上摸鱼发帖。`
    : s === "anomaly_log"
    ? "都市怪谈的帖子像亲历者在论坛记录自己撞见的怪事——碎片化、带着不确定和后怕。发帖人自己也不知道到底发生了什么，只是把看到的、听到的记下来。语气克制但细节具体，越平静越有说服力。"
    : "";
}
function Bn(o) {
  const s = o.id;
  return s === "unverified"
    ? "这里是匿名树洞，评论者的典型反应：共情、追问细节、分享自己类似经历、或者反过来泼冷水。有人温柔有人刻薄，但都是真情实感不是客套。"
    : s === "signal_noise"
    ? '吃瓜群众集合区。评论者各怀心思：有人蹲后续催更（"然后呢然后呢"），有人质疑来源（"你这消息哪听的靠谱吗"），有人补刀爆料（"我还知道一个事更离谱"），有人站队开吵，有人看戏不嫌事大纯起哄，有人假装知情人讲得头头是道实际在瞎编。评论可以跑题、可以楼歪、可以接梗，不用每条都在讨论帖子主题。'
    : s === "anomaly_log"
    ? "这里是怪谈版，评论者的典型反应：半信半疑的追问、理性分析试图解释、感到后怕、或者直接说不信。有人认真有人调侃。"
    : "评论者反应自然多样：有人认同，有人反驳，有人跑题，有人只是路过随手一句。";
}
function Gn(o) {
  var n;
  const s = ((n = o.displayName) == null ? void 0 : n.trim().charAt(0)) || "影";
  return o.sourceType === "npc"
    ? `街角${s}`
    : o.sourceType === "character"
    ? `侧影${s}`
    : o.anonymousName || "匿名旅人";
}
function On(o, s, n, l) {
  const r = [],
    i = o.rules,
    c = [...s],
    p = [...n],
    f = (g) => {
      for (let b = g.length - 1; b > 0; b--) {
        const x = Math.floor(Math.random() * (b + 1));
        [g[b], g[x]] = [g[x], g[b]];
      }
      return g;
    };
  f(c), f(p);
  const I = [
    "深海旅人",
    "云端观测者",
    "信号拾荒者",
    "午夜档案员",
    "量子猫",
    "幽灵频率",
    "雾中行者",
    "星尘收集者",
    "回声猎手",
    "时间碎片",
    "平行世界漏网之鱼",
    "赛博浮游生物",
    "今天也没洗头",
    "职业退堂鼓选手",
    "咸鱼翻了个身",
    "摆烂第一名",
    "来都来了",
    "反正又没人看",
    "我在发呆别cue我",
    "人间观察日记",
    "网线那头的土拨鼠",
    "精神状态遥遥领先",
    "上班如上坟",
    "一坨不明物体",
    "头像是我本人",
    "专治不服",
    "脑子进水了但水质不错",
    "半夜emo冠军",
    "清醒着做梦",
    "别找我有事烧纸",
    "人间不值得但饭值得",
    "今天也想消失",
    "快乐是装的累是真的",
    "局外人",
    "假装在生活",
    "404号居民",
    "社恐晚期",
    "赛博摸鱼人",
    "ctrl+z人生",
    "三次元难民",
    "bug制造机",
    "NPC已下线",
    "充钱才能变强",
    "隔壁老王家的猫",
    "外卖还没到",
    "被窝里的哲学家",
    "阳台种花失败者",
    "通勤两小时选手",
    "周一恐惧症患者",
    "奶茶续命中",
    "还没想好叫什么",
  ];
  let N = Math.floor(Math.random() * I.length);
  const u = () => {
    const g = I[N % I.length];
    return N++, g;
  };
  if ((i == null ? void 0 : i.primaryPoster) === "npc") {
    const g = p.length >= 3 ? 0.55 : p.length >= 1 ? 0.25 : 0,
      b = g + (p.length >= 3 ? 0.35 : 0.6);
    for (let x = 0; x < l; x++) {
      const C = Math.random();
      if (C < g && p.length > 0) {
        const w = p[x % p.length];
        i != null && i.forceAnonymous
          ? r.push({
              authorType: "anonymous",
              entityId: w.id,
              displayName: w.name,
              sourceType: "npc",
              requiresGeneratedAlias: !0,
            })
          : r.push({
              authorType: "npc",
              entityId: w.id,
              displayName: w.name,
              sourceType: "npc",
            });
      } else if (C < b)
        r.push({
          authorType: "anonymous",
          displayName: u(),
          anonymousName: u(),
          sourceType: "anonymous",
        });
      else if (c.length > 0) {
        const w = c[x % c.length];
        i != null && i.forceAnonymous
          ? r.push({
              authorType: "anonymous",
              entityId: w.id,
              displayName: w.name,
              sourceType: "character",
              requiresGeneratedAlias: !0,
            })
          : r.push({
              authorType: "character",
              entityId: w.id,
              displayName: w.name,
              sourceType: "character",
            });
      } else
        r.push({
          authorType: "anonymous",
          displayName: u(),
          anonymousName: u(),
          sourceType: "anonymous",
        });
    }
  } else if (i != null && i.forceAnonymous)
    for (let g = 0; g < l; g++) {
      const b = Math.random();
      if (b < 0.35 && c.length > 0) {
        const x = c[g % c.length];
        r.push({
          authorType: "anonymous",
          entityId: x.id,
          displayName: x.name,
          sourceType: "character",
          requiresGeneratedAlias: !0,
        });
      } else if (b < 0.7 && p.length > 0) {
        const x = p[g % p.length];
        r.push({
          authorType: "anonymous",
          entityId: x.id,
          displayName: x.name,
          sourceType: "npc",
          requiresGeneratedAlias: !0,
        });
      } else
        r.push({
          authorType: "anonymous",
          displayName: u(),
          anonymousName: u(),
          sourceType: "anonymous",
        });
    }
  else
    for (let g = 0; g < l; g++) {
      const b = Math.random();
      if (b < 0.45 && c.length > 0) {
        const x = c[g % c.length];
        r.push({
          authorType: "character",
          entityId: x.id,
          displayName: x.name,
          sourceType: "character",
        });
      } else if (b < 0.7 && p.length > 0) {
        const x = p[g % p.length];
        r.push({
          authorType: "npc",
          entityId: x.id,
          displayName: x.name,
          sourceType: "npc",
        });
      } else
        r.push({
          authorType: "anonymous",
          displayName: u(),
          anonymousName: u(),
          sourceType: "anonymous",
        });
    }
  return r;
}
async function Ln(o) {
  var U, M;
  const {
      section: s,
      characters: n,
      npcs: l,
      users: r,
      messages: i,
      chats: c,
      knowledge: p,
      socialRelations: f,
      dailyPlans: I,
      existingPosts: N,
      preset: u,
      postCount: g = 4,
      now: b = new Date(),
    } = o,
    x = Rt(o.worldBooks ?? [], n),
    C = On(s, n, l, g),
    w = n.map((h) => Mn(h, I, p, f, n, l, r, b)),
    Q = l.map((h) => Fn(h, I, f, n, r, b)),
    O = [...n.map((h) => h.id), ...l.map((h) => h.id)],
    ne = nt(O, p, 5),
    ae = st(
      n.map((h) => h.id),
      i,
      c,
      n,
      r,
      30,
      1500
    ),
    te = N.filter((h) => h.sectionId === s.id)
      .sort((h, G) => G.createdAt - h.createdAt)
      .slice(0, 5),
    re = te.length
      ? te.map(
          (h) => `- ${h.anonymousName || "某人"}：${h.content.slice(0, 60)}`
        ).join(`
`)
      : "暂无已有帖子。",
    v = C.map((h, G) => {
      var d, A;
      let J,
        V = "";
      if (
        (h.authorType === "anonymous" && h.requiresGeneratedAlias
          ? (J = `匿名身份（原型：${h.sourceType === "npc" ? "NPC" : "角色"}「${
              h.displayName
            }」；请生成不暴露真名、但熟人可隐约辨认的匿名ID）`)
          : h.authorType === "anonymous"
          ? (J = `匿名路人「${h.anonymousName}」`)
          : h.authorType === "npc"
          ? (J = `NPC「${h.displayName}」`)
          : (d = s.rules) != null && d.forceAnonymous
          ? (J = `角色「${h.displayName}」（匿名化名：${h.anonymousName}）`)
          : (J = `角色「${h.displayName}」`),
        h.entityId && (h.sourceType === "npc" || h.sourceType === "character"))
      ) {
        const P =
          h.sourceType === "npc"
            ? l.find((k) => k.id === h.entityId)
            : n.find((k) => k.id === h.entityId);
        if (P) {
          const k =
              P.bio || ((A = P.intro) == null ? void 0 : A.slice(0, 80)) || "",
            _ = [];
          for (const S of f) {
            if (S.fromEntityId === P.id) {
              const B =
                n.find((R) => R.id === S.toEntityId) ||
                l.find((R) => R.id === S.toEntityId) ||
                r.find((R) => R.id === S.toEntityId);
              B &&
                _.push(
                  `和${B.name}是${S.relationKind}${
                    S.note ? "（" + S.note + "）" : ""
                  }`
                );
            }
            if (S.toEntityId === P.id) {
              const B =
                n.find((R) => R.id === S.fromEntityId) ||
                l.find((R) => R.id === S.fromEntityId) ||
                r.find((R) => R.id === S.fromEntityId);
              B &&
                _.push(
                  `${B.name}的${S.relationKind}${
                    S.note ? "（" + S.note + "）" : ""
                  }`
                );
            }
          }
          const D = [];
          k && D.push(k),
            _.length && D.push(_.join("；")),
            D.length && (V = `  → 身份：${D.join("。")}`);
        }
      }
      return `帖子${G + 1}：由 ${J} 发出${
        V
          ? `
` + V
          : ""
      }`;
    }).join(`
`),
    q =
      "你是一个沉浸式论坛模拟器。你要扮演多个不同身份的真实网友发帖，每个人有自己的口癖、情绪和表达习惯。严格按指定 JSON 格式输出。",
    ee = Rn(s),
    L = `你需要为论坛板块「${s.name}」生成 ${g} 条帖子。

## 板块
${s.name}——${s.description}
风格：${s.stylePrompt}

${Dn(s)}

${
  ee
    ? `## 这个板块的味儿
${ee}
`
    : ""
}## 发帖者安排
${v}

## 角色档案
${w.join(`
`)}
${
  Q.length
    ? `
` +
      Q.join(`
`)
    : ""
}

${
  x
    ? `## 世界设定
${x}
`
    : ""
}## 最近发生的事（素材，不是必须用）
${ne}

## 最近的聊天片段（感受语气和情绪，不要直接引用）
${ae}

## 已有帖子（避免撞车）
${re}

## 输出
JSON 数组，每条：
\`\`\`json
[{“index”:1,”title”:”标题”,”anonymousName”:”匿名昵称”,”content”:”正文”${
      (U = s.rules) != null && U.allowSoftDelete ? ",”isDeleted”:false" : ""
    }}]
\`\`\`

关键要求：
- 写出来要像真人随手发的，不是作文，不是小说旁白。该用短句用短句，该断句断句，可以有口癖、省略、语气词。
- 每个发帖者的语气必须不一样：有人啰嗦，有人惜字如金，有人阴阳怪气，有人真情实感。
- 正文长度自然浮动（30-250字，中文计字；若使用外语请保持同等篇幅），短帖和长帖混着来，不要整齐划一。
- 标题要抓人，像真实帖子标题，不要”随便说说””无题””今日分享”这种废话标题；中文标题 25 字以内，外语保持同等篇幅。
- 匿名发帖必须给 anonymousName；”匿名身份（原型）”的 anonymousName 要有角色风格痕迹但不能出现真名。${
      (M = s.rules) != null && M.allowSoftDelete
        ? `
- isDeleted 的帖子 content 照样写原始内容，前端自动替换显示。绝大多数帖子 isDeleted 应为 false。`
        : ""
    }
- 严禁出现 emoji、颜文字、表情包标记、markdown 格式。
- 当前时间：${b.toLocaleString("zh-CN", { hour12: !1 })}

只输出 JSON 数组。`;
  if (!(u != null && u.endpoint)) throw new Error("API preset 未配置 endpoint");
  const { content: ie, usage: X } = await tt(u, q, L);
  return { posts: Jn(ie, C, s, b), usage: X };
}
function Jn(o, s, n, l) {
  var I;
  const i = He(o).match(/\[[\s\S]*\]/);
  if (!i) return [];
  let c;
  try {
    c = JSON.parse(et(i[0]));
  } catch {
    return [];
  }
  if (!Array.isArray(c)) return [];
  const p = [],
    f = l.getTime();
  for (let N = 0; N < c.length && N < s.length; N++) {
    const u = c[N],
      g = s[N],
      b = typeof u.title == "string" ? Ie(u.title) : "",
      x =
        typeof u.anonymousName == "string"
          ? Ie(u.anonymousName).slice(0, 16)
          : "",
      C = typeof u.content == "string" ? Ce(u.content) : "";
    C &&
      p.push({
        id: `forum_${f}_${N}_${Math.random().toString(36).slice(2, 8)}`,
        sectionId: n.id,
        title: b || _e(C),
        authorType: g.authorType,
        authorId: g.entityId,
        anonymousName:
          g.authorType === "anonymous" ? x || g.anonymousName || Gn(g) : void 0,
        content: C,
        createdAt:
          f - (s.length - 1 - N) * 6e4 * (5 + Math.floor(Math.random() * 20)),
        isDeleted:
          ((I = n.rules) == null ? void 0 : I.allowSoftDelete) === !0 &&
          u.isDeleted === !0,
      });
  }
  return p;
}
function Ce(o, s) {
  const n = o
    .replace(/```[\s\S]*?```/g, (l) => l.replace(/```/g, ""))
    .replace(/^['"""'']+|['"""'']+$/g, "")
    .replace(/\r/g, "")
    .split(
      `
`
    )
    .map((l) => l.trim())
    .filter(Boolean)
    .join(
      `
`
    )
    .trim();
  return typeof s == "number" ? n.slice(0, s) : n;
}
function Ie(o) {
  return o
    .replace(/^['"“”‘’]+|['"“”‘’]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
function _e(o) {
  const s = o.replace(/\s+/g, "").slice(0, 16);
  return s ? `${s}${o.length > 16 ? "…" : ""}` : "未命名帖子";
}
function Kn(o) {
  const s = He(o).replace(/\r/g, "").trim();
  if (!s) return { title: "未命名同人文", content: "" };
  const n = s.match(/^标题[：:]\s*(.+)$/m);
  if (n) {
    const i = Ie(n[1] || ""),
      c = Ce(
        s
          .replace(n[0], "")
          .replace(/^\s*\n+/, "")
          .replace(
            /^(正文[：:]?|正文从下一行开始。?|以下是正文[：:]?)\s*$/gm,
            ""
          )
          .replace(/^请开始正文。?\s*$/gm, "")
      );
    return { title: i || _e(c), content: c };
  }
  const l = s
    .split(
      `
`
    )
    .map((i) => i.trim())
    .filter(Boolean);
  if (l.length >= 2 && l[0].length <= 30) {
    const i = Ie(l[0]),
      c = Ce(
        l.slice(1).join(`
`)
      );
    if (i && c) return { title: i, content: c };
  }
  const r = Ce(s);
  return { title: _e(r), content: r };
}
function zn(o) {
  return Ce(
    He(o)
      .replace(/\r/g, "")
      .replace(/^标题[：:].+$/gm, "")
      .replace(
        /^(正文[：:]?|正文从下一行开始。?|以下是正文[：:]?|请开始正文。?|继续正文[：:]?|续写[：:]?)\s*$/gm,
        ""
      )
      .trim()
  );
}
function Bt(o, s = 150) {
  const n = o
    .replace(/```[\s\S]*?```/g, (l) => l.replace(/```/g, ""))
    .replace(/^['"“”‘’]+|['"“”‘’]+$/g, "")
    .replace(/\r/g, "")
    .split(
      `
`
    )
    .map((l) => l.trim())
    .filter(Boolean)
    .join(" ")
    .trim();
  return n.length <= s ? n : `${n.slice(0, s - 1).trim()}…`;
}
function Gt(o, s, n, l, r) {
  if (n.authorId === o && n.anonymousName) return n.anonymousName;
  for (const i of l)
    if (i.authorId === o && i.anonymousName) return i.anonymousName;
  for (const i of r)
    if (i.authorId === o && i.anonymousName) return i.anonymousName;
  return Wn(s, n.id);
}
function Wn(o, s) {
  let n = 0;
  const l = o + s;
  for (let f = 0; f < l.length; f++) n = ((n << 5) - n + l.charCodeAt(f)) | 0;
  n = Math.abs(n);
  const r = [
      "沉默的",
      "午夜的",
      "雾中的",
      "迷路的",
      "失眠的",
      "透明的",
      "倒影里的",
      "风中的",
      "深海的",
      "逆光的",
      "角落里的",
      "断线的",
      "褪色的",
      "无名的",
      "影子般的",
    ],
    i = [
      "旅人",
      "观测者",
      "信号",
      "猫",
      "烟火",
      "玻璃",
      "钟表匠",
      "守夜人",
      "拾荒者",
      "独白",
      "纸飞机",
      "收信人",
      "候鸟",
      "灯塔",
      "漂流瓶",
    ],
    c = r[n % r.length],
    p = i[Math.floor(n / r.length) % i.length];
  return `${c}${p}`;
}
function Ot(o, s, n, l = [], r = []) {
  const i = [],
    c = [
      "低频旅人",
      "过路信号",
      "夜航员",
      "未知回声",
      "玻璃海",
      "潮汐观测者",
      "沙发选手",
      "前排卖瓜子",
      "不明真相的群众",
      "刚路过而已",
      "来抬杠的",
      "楼上说得对",
      "替大家问一句",
      "看戏不嫌事大",
      "认真你就输了",
      "匿了匿了",
      "吃瓜第一线",
      "围观不发言",
      "已读不回大师",
      "挖坟专业户",
      "潜水多年终于冒泡",
      "懂的都懂",
    ],
    p = c.filter((u) => !l.includes(u)),
    f = o.filter((u) => !r.includes(u.id)),
    I = s.filter((u) => !r.includes(u.id)),
    N = (u) => u[Math.floor(Math.random() * u.length)];
  for (let u = 0; u < n; u += 1) {
    const g = Math.random();
    if (g < 0.15 && f.length > 0) {
      const C = N(f);
      i.push({ authorType: "character", actor: C });
      continue;
    }
    if (g < 0.45 && I.length > 0) {
      const C = N(I);
      i.push({ authorType: "npc", actor: C });
      continue;
    }
    const b = p.length > 0 ? p : c,
      x = b[Math.floor(Math.random() * b.length)];
    i.push({ authorType: "anonymous", anonymousName: x });
  }
  return i;
}
function Lt(o, s) {
  return o.length === 0
    ? "暂无其他评论。"
    : o.slice(-8).map((n) => `- ${s(n)}：${n.content}`).join(`
`);
}
function Hn(o, s, n, l) {
  if (o.authorType === "anonymous") return o.anonymousName || "匿名路人";
  if (o.authorType === "user" && o.anonymousName) return o.anonymousName;
  if (!o.authorId) return "某人";
  const r = s.find((p) => p.id === o.authorId);
  if (r) return r.name;
  const i = n.find((p) => p.id === o.authorId);
  if (i) return i.name;
  const c = l.find((p) => p.id === o.authorId);
  return c ? c.name : "某人";
}
function Jt(o, s) {
  return qn(o);
}
function qn(o) {
  return o.replace(/^@\S+\s*/, "").trim();
}
function Kt(o) {
  const { post: s, characters: n, npcs: l, users: r } = o;
  if (s.authorType === "anonymous")
    return { name: s.anonymousName || "匿名路人" };
  if (s.authorType === "user" && s.anonymousName)
    return { name: s.anonymousName };
  if (s.authorId) {
    const i = n.find((f) => f.id === s.authorId);
    if (i) return { name: i.name, entityType: "character", entityId: i.id };
    const c = l.find((f) => f.id === s.authorId);
    if (c) return { name: c.name, entityType: "npc", entityId: c.id };
    const p = r.find((f) => f.id === s.authorId);
    if (p) return { name: p.name, entityType: "user", entityId: p.id };
  }
  return { name: "未知作者" };
}
async function Yn(o) {
  var G, J, V;
  const {
      post: s,
      section: n,
      existingComments: l,
      characters: r,
      npcs: i,
      users: c,
      messages: p,
      chats: f,
      socialRelations: I,
      knowledge: N,
      preset: u,
      commentCount: g = 3,
      now: b = new Date(),
    } = o,
    x = Kt({ post: s, characters: r, npcs: i, users: c }),
    C = x.entityType === "user",
    w = Ot(r, i, g, C ? [x.name] : [], C && x.entityId ? [x.entityId] : []),
    Q = l.slice(-6),
    O = w.map((d, A) => {
      const P = Q.length > 0,
        k = A > 0,
        _ = (P || k) && Math.random() < 0.6;
      let D, S;
      return (
        _ &&
          (P && (!k || Math.random() < 0.5)
            ? (D = Q[Math.floor(Math.random() * Q.length)])
            : k && (S = Math.floor(Math.random() * A))),
        { actor: d, index: A, targetComment: D, targetBatchIndex: S }
      );
    }),
    ae = Lt(l, (d) => d.anonymousName || d.authorId || "某人"),
    te = Ie(s.title || "") || _e(s.content),
    re = O.map(
      ({ actor: d, index: A, targetComment: P, targetBatchIndex: k }) => {
        var R, le;
        let _,
          D = "",
          S = "";
        if (d.authorType === "anonymous")
          (_ = d.anonymousName), (D = "匿名路人，口语化、简短");
        else {
          const z = d.actor;
          (_ = z.name),
            (D =
              z.bio ||
              ("background" in z
                ? (R = z.background) == null
                  ? void 0
                  : R.slice(0, 120)
                : null) ||
              ((le = z.intro) == null ? void 0 : le.slice(0, 80)) ||
              "未提供");
          const Z = [];
          for (const K of I) {
            if (K.fromEntityId === z.id) {
              const W =
                r.find((Y) => Y.id === K.toEntityId) ||
                i.find((Y) => Y.id === K.toEntityId) ||
                c.find((Y) => Y.id === K.toEntityId);
              W &&
                Z.push(
                  `→${W.name}(${K.relationKind}${K.note ? "," + K.note : ""})`
                );
            }
            if (K.toEntityId === z.id) {
              const W =
                r.find((Y) => Y.id === K.fromEntityId) ||
                i.find((Y) => Y.id === K.fromEntityId) ||
                c.find((Y) => Y.id === K.fromEntityId);
              W &&
                Z.push(
                  `←${W.name}(${K.relationKind}${K.note ? "," + K.note : ""})`
                );
            }
          }
          S = Z.length ? Z.join("; ") : "无";
        }
        let B;
        if (P) B = `回复模式，针对评论内容回复：「${P.content}」`;
        else if (k != null) {
          const z = O[k].actor,
            Z = z.authorType === "anonymous" ? z.anonymousName : z.actor.name;
          B = `回复模式，针对评论者${k + 1}（${Z}）的评论进行回复`;
        } else B = "新评论模式，直接对帖子内容发表评论";
        return `评论者${A + 1}：昵称="${_}"，简介="${D}"${
          S ? `，社交关系：${S}` : ""
        }，${B}`;
      }
    ).join(`
`),
    v = Bn(n),
    q = w
      .filter((d) => d.authorType !== "anonymous" && "actor" in d)
      .map((d) => d.actor.id),
    ee = [...new Set([...r.map((d) => d.id), ...i.map((d) => d.id), ...q])],
    L = nt(ee, N, 3),
    ie = st(
      r.map((d) => d.id),
      p,
      f,
      r,
      c,
      20,
      1e3
    ),
    X = `为这条帖子生成 ${w.length} 条评论，每条来自不同的人。

输出 JSON 数组：[{"index":1,"content":"评论内容"},...]
只输出 JSON，不要其他任何内容。

写法要求：
- 像真人在论坛随手打的回复，不是书面语，不是作文。
- 长短自然混搭：有人一句话带过（10字），有人多说两句（60-80字），不要每条都差不多长。
- 每个人说话方式要有区别：有人吐槽，有人共情，有人抬杠，有人跑题，有人阴阳怪气。参考各自的简介来决定口吻。
- 回复模式下针对对方评论内容回复，不要加@（UI自动显示）。
- 严禁 emoji、颜文字、表情包标记、markdown。
${
  C
    ? `- 帖主「${x.name}」是你们故事里的真实用户本人，他/她这次在论坛上用真名公开露面（不是匿名也不是化名）。已经在上面"背景事件"或"聊天片段"里跟「${x.name}」有过交集的角色，应当像认识的人一样反应——根据已有的关系、立场、情绪来回（亲密就亲密、有积怨就阴阳怪气、暗恋的可以借机表达）；只有完全没交集的匿名路人才以陌生人视角从帖子内容本身出发。注意不能代替帖主发言。`
    : ""
}

${
  v
    ? `氛围：${v}
`
    : ""
}板块：${n.name}（${n.stylePrompt}）

## 最近发生的事（评论者可能了解的背景）
${L}

## 最近的聊天片段（感受关系和情绪）
${ie}

帖子「${te}」by ${x.name}${s.isDeleted ? "（该帖已被作者删除）" : ""}：
${s.content}
${
  s.isDeleted
    ? `
注意：这条帖子已被作者发出后删除。评论者的反应应该自然分化——少数人在删除前看到了原文内容并对内容本身做出反应，大部分人没看到，只能从标题和别人的反应里猜测，可能会好奇追问"说了什么就删了？"、根据碎片信息脑补、或者纯凑热闹。不要所有人都看到了原文，也不要所有人都没看到。
`
    : ""
}
已有评论：
${ae}

评论者（重要：有简介和社交关系的角色是故事中的人物，他们对上述背景事件有自己的了解和立场，评论必须体现他们已知的信息，不能装作不知情；而匿名路人不了解这些背景，只能从帖子内容本身出发反应）：
${re}

输出 JSON 数组。`,
    de = "你是论坛评论模拟器，扮演多个不同网友回帖。严格输出 JSON 数组。";
  let U = "",
    M = null;
  try {
    if (!(u != null && u.endpoint))
      throw new Error("API preset 未配置 endpoint");
    const d = await tt(u, de, X);
    (U = d.content), (M = d.usage);
  } catch (d) {
    return (
      console.error("Forum batch comment generation failed:", d),
      { comments: [], usage: null }
    );
  }
  const h = [];
  try {
    const d = U.match(/\[[\s\S]*\]/);
    if (!d) throw new Error("No JSON array found in response");
    const A = JSON.parse(et(d[0])),
      P = {};
    for (const k of A) {
      const _ = k.index - 1;
      if (_ < 0 || _ >= w.length) continue;
      const D = w[_],
        S = O[_],
        B = Jt(Bt(k.content || ""));
      if (!B) continue;
      const R = !!(
          (G = n.rules) != null &&
          G.forceAnonymous &&
          D.authorType !== "anonymous"
        ),
        le =
          D.authorType === "anonymous"
            ? D.anonymousName
            : Gt(D.actor.id, D.actor.name, s, l, h);
      let z = (J = S.targetComment) == null ? void 0 : J.id;
      if (!z && S.targetBatchIndex != null) {
        const Z = P[S.targetBatchIndex];
        Z != null && (z = (V = h[Z]) == null ? void 0 : V.id);
      }
      (P[_] = h.length),
        h.push({
          id: `forum_comment_${b.getTime()}_${h.length}_${Math.random()
            .toString(36)
            .slice(2, 8)}`,
          postId: s.id,
          authorType: R ? "anonymous" : D.authorType,
          authorId: D.authorType === "anonymous" ? void 0 : D.actor.id,
          anonymousName: R || D.authorType === "anonymous" ? le : void 0,
          content: B,
          createdAt: b.getTime() + h.length,
          parentCommentId: z,
        });
    }
  } catch (d) {
    console.error("Forum comment JSON parse failed, raw:", U, d);
  }
  return { comments: h, usage: M };
}
async function Un(o) {
  var J, V;
  const {
      userComment: s,
      post: n,
      section: l,
      existingComments: r,
      characters: i,
      npcs: c,
      users: p,
      messages: f,
      chats: I,
      knowledge: N,
      preset: u,
      now: g = new Date(),
    } = o,
    b = Kt({ post: n, characters: i, npcs: c, users: p }),
    x = b.entityType === "user",
    C = Hn(s, i, c, p),
    w = [],
    Q = Math.random() < 0.5 ? 1 : 2,
    O = [];
  if (n.authorType === "character" && n.authorId) {
    const d = i.find((A) => A.id === n.authorId);
    d && O.push({ authorType: "character", actor: d });
  } else if (n.authorType === "npc" && n.authorId) {
    const d = c.find((A) => A.id === n.authorId);
    d && O.push({ authorType: "npc", actor: d });
  } else if (n.authorType === "anonymous" && n.anonymousName) {
    const d = n.authorId ? i.find((P) => P.id === n.authorId) : void 0,
      A = n.authorId ? c.find((P) => P.id === n.authorId) : void 0;
    d
      ? O.push({ authorType: "character", actor: d })
      : A
      ? O.push({ authorType: "npc", actor: A })
      : O.push({ authorType: "anonymous", anonymousName: n.anonymousName });
  }
  if (O.length < Q) {
    const d = [C],
      A = [];
    x && (d.push(b.name), b.entityId && A.push(b.entityId));
    const P = Ot(i, c, Q - O.length, d, A);
    O.push(...P);
  }
  const ne = O.slice(0, Q),
    ae = !!((J = l.rules) != null && J.forceAnonymous),
    te = ne.map((d, A) => {
      const k = A === 0 || Math.random() < 0.7 ? s : void 0;
      return { actor: d, index: A, targetComment: k };
    }),
    v = Lt(r, (d) => d.anonymousName || d.authorId || "某人"),
    q = Ie(n.title || "") || _e(n.content),
    ee = te.map(({ actor: d, index: A, targetComment: P }) => {
      var S, B;
      let k,
        _ = "";
      if (d.authorType === "anonymous")
        (k = d.anonymousName), (_ = "匿名路人，口语化、简短");
      else {
        const R = d.actor;
        (k = R.name),
          (_ =
            R.bio ||
            ("background" in R
              ? (S = R.background) == null
                ? void 0
                : S.slice(0, 120)
              : null) ||
            ((B = R.intro) == null ? void 0 : B.slice(0, 80)) ||
            "未提供");
      }
      const D = P
        ? `回复用户评论：「${P.content}」`
        : "直接对帖子内容发表新评论";
      return `回复者${A + 1}：昵称=”${k}”，简介=”${_}”，${D}`;
    }).join(`
`),
    L = ne
      .filter((d) => d.authorType !== "anonymous" && "actor" in d)
      .map((d) => d.actor.id),
    ie = [...new Set([...i.map((d) => d.id), ...c.map((d) => d.id), ...L])],
    X = nt(ie, N, 3),
    de = st(
      i.map((d) => d.id),
      f,
      I,
      i,
      p,
      20,
      1e3
    ),
    U = `用户在帖子下发了一条评论，现在生成 ${ne.length} 条回复。

输出 JSON 数组：[{“index”:1,”content”:”回复内容”},...]
只输出 JSON，不要其他内容。

写法要求：
- 像真人随手打的回复，口语化，有个性。
- 长短自然：可以短到几个字（”确实””笑死”），也可以认真回两三句话，看角色性格。
- 每个回复者语气要有区别，参考各自简介。
- 不要加@（UI自动显示回复标签）。
- 严禁 emoji、颜文字、表情包标记、markdown。
${
  x
    ? `- 帖主「${b.name}」是你们故事里的真实用户本人，用真名在论坛公开露面，不能代替帖主发言。`
    : ""
}
${
  s.authorType === "user" && !s.anonymousName
    ? `- 这条用户评论是用真名公开发的，发评论的「${C}」就是你们故事里的真实用户本人。跟「${C}」在背景事件或聊天片段里有过交集的回复者，应当像认识的人一样反应（基于已有关系、立场、情绪），不要装作陌生人；只有匿名路人才以陌生人视角回复。`
    : ""
}

板块：${l.name}（${l.stylePrompt}）

## 最近发生的事（角色可能了解的背景）
${X}

## 最近的聊天片段（感受关系和情绪）
${de}

帖子「${q}」by ${b.name}${n.isDeleted ? "（该帖已被作者删除）" : ""}：
${n.content}
${
  n.isDeleted
    ? `
注意：这条帖子已被作者发出后删除。评论者的反应应该自然分化——少数人在删除前看到了原文内容并对内容本身做出反应，大部分人没看到，只能从标题和别人的反应里猜测，可能会好奇追问"说了什么就删了？"、根据碎片信息脑补、或者纯凑热闹。不要所有人都看到了原文，也不要所有人都没看到。
`
    : ""
}
已有评论：
${v}

回复者（重要：有简介的角色是故事中的人物，他们对上述背景事件有自己的了解和立场，回复必须体现他们已知的信息；匿名路人不了解背景，只能从帖子表面出发）：
${ee}

输出 JSON 数组。`,
    M = "你是论坛回复模拟器，扮演真实网友回帖。严格输出 JSON 数组。";
  let h = "",
    G = null;
  try {
    if (!(u != null && u.endpoint))
      throw new Error("API preset 未配置 endpoint");
    const d = await tt(u, M, U);
    (h = d.content), (G = d.usage);
  } catch (d) {
    return (
      console.error("Auto-reply batch generation failed:", d),
      { comments: [], usage: null }
    );
  }
  try {
    const d = h.match(/\[[\s\S]*\]/);
    if (!d) throw new Error("No JSON array found in response");
    const A = JSON.parse(et(d[0]));
    for (const P of A) {
      const k = P.index - 1;
      if (k < 0 || k >= ne.length) continue;
      const _ = ne[k],
        D = te[k],
        S = Jt(Bt(P.content || ""));
      if (!S) continue;
      const B = n.authorType === "anonymous" && k === 0 && n.anonymousName,
        R = ae && _.authorType !== "anonymous",
        le = B
          ? n.anonymousName
          : _.authorType === "anonymous"
          ? _.anonymousName
          : Gt(_.actor.id, _.actor.name, n, r, w);
      w.push({
        id: `forum_comment_${g.getTime()}_reply_${k}_${Math.random()
          .toString(36)
          .slice(2, 8)}`,
        postId: n.id,
        authorType: R || B ? "anonymous" : _.authorType,
        authorId: _.authorType === "anonymous" ? void 0 : _.actor.id,
        anonymousName: R || _.authorType === "anonymous" || B ? le : void 0,
        content: S,
        createdAt: g.getTime() + 1e3 + k * 500,
        parentCommentId: (V = D.targetComment) == null ? void 0 : V.id,
      });
    }
  } catch (d) {
    console.error("Auto-reply JSON parse failed, raw:", h, d);
  }
  return { comments: w, usage: G };
}
const Pt = [
    "现代都市",
    "古代武侠",
    "赛博朋克",
    "末日废土",
    "校园青春",
    "奇幻异世界",
    "太空歌剧",
    "民国旧上海",
    "北欧神话",
    "蒸汽朋克",
    "江湖客栈",
    "深海城市",
    "荒野西部",
    "维多利亚伦敦",
    "战后重建",
  ],
  _t = [
    "甜文",
    "虐文",
    "悬疑",
    "冒险",
    "日常",
    "治愈",
    "暗黑",
    "搞笑",
    "BE（悲剧结局）",
    "HE（圆满结局）",
    "OE（开放结局）",
  ];
async function Vn(o) {
  const {
      characterA: s,
      characterB: n,
      worldSetting: l,
      genre: r,
      section: i,
      socialRelations: c,
      characters: p,
      npcs: f,
      users: I,
      preset: N,
      now: u = new Date(),
    } = o,
    g = p.filter((M) => M.id === s.id || M.id === n.id),
    b = Rt(o.worldBooks ?? [], g),
    x = [
      ...p.map((M) => ({ id: M.id, type: "character" })),
      ...f.map((M) => ({ id: M.id, type: "npc" })),
      ...I.map((M) => ({ id: M.id, type: "user" })),
    ],
    C = x.find((M) => M.id === s.id),
    w = x.find((M) => M.id === n.id);
  let Q = "无已知关系";
  if (C && w) {
    const M = c.find(
      (h) =>
        (h.fromEntityId === C.id && h.toEntityId === w.id) ||
        (h.fromEntityId === w.id && h.toEntityId === C.id)
    );
    M && (Q = `${M.relationKind}：${M.note}`);
  }
  const O = [
      "深海打字机",
      "量子笔记本",
      "午夜作者",
      "平行线编辑部",
      "纸飞机文学社",
      "赛博莎翁",
      "三点半的灵感",
      "逆光手稿",
      "云端写手",
      "胡同里的键盘",
      "离线诗人",
      "404号作者",
      "像素墨水",
      "漂流瓶文学",
      "晚风便利店",
    ],
    ne = O[Math.floor(Math.random() * O.length)],
    ae =
      "你是一个专业的同人文写手。根据给定的角色信息、世界观和题材，创作一篇完整的同人短篇小说。你必须先给出文章标题，再给出正文。严禁使用任何表情包标记、emoji、颜文字，只允许纯文字。",
    te = `请根据以下设定创作一篇同人短篇小说。

## 角色 A
- 名字：${s.name}
- 性别：${s.gender || "未知"}
- 简介：${s.intro || "未提供"}
- 背景：${s.background}

## 角色 B
- 名字：${n.name}
- 性别：${n.gender || "未知"}
- 简介：${n.intro || "未提供"}
- 背景：${n.background}

## 两人原本的关系
${Q}
（注意：在同人文中可以自由重新诠释两人的关系，不必完全遵循原设。）

## 世界观背景
${l}

## 题材
${r}

${
  b
    ? `## 世界书（世界观设定 / 角色补充）
以下是关于这个世界和角色的补充设定，创作时请保持角色性格和世界观的一致性。
${b}
`
    : ""
}
## 写作要求
1. 字数：1500-2500字。
1.1 最低不能少于 1500 字；如果还没写到完整收束，绝对不要提前停下。
2. 必须是完整的短篇故事，有起承转合。
3. 角色性格要基于原设但可以有新的演绎。
4. 世界观要与指定背景一致，让角色自然地融入这个平行宇宙。
5. 文风要有文学质感，不是流水账，不是大纲。
6. 对话、描写、叙事要平衡。
7. 故事结尾要有余韵，不要仓促收尾。
8. 你必须严格按照以下格式输出：
标题：你的文章标题

第二行开始直接写正文，不要再输出任何说明语、格式提示语、前言或后记。

现在开始创作。`;
  let re = "",
    v = null,
    q;
  const ee = async (M) => {
      var J, V, d, A, P;
      if (!(N != null && N.endpoint))
        throw new Error("API preset 未配置 endpoint");
      const h = await Ft(N, {
        model: N.model,
        messages: [
          { role: "system", content: ae },
          { role: "user", content: M },
        ],
        temperature: N.temperature ?? 0.85,
        max_tokens: 8192,
      });
      if (!h.ok)
        throw new Error(`Fanfic API Error: ${h.status} ${h.errorText}`);
      const G = h.data || {};
      return {
        content:
          ((d =
            (V = (J = G.choices) == null ? void 0 : J[0]) == null
              ? void 0
              : V.message) == null
            ? void 0
            : d.content) || "",
        finishReason:
          (P = (A = G.choices) == null ? void 0 : A[0]) == null
            ? void 0
            : P.finish_reason,
        usage: G.usage
          ? {
              promptTokens: G.usage.prompt_tokens || 0,
              completionTokens: G.usage.completion_tokens || 0,
              totalTokens: G.usage.total_tokens || 0,
            }
          : null,
      };
    },
    L = await ee(te);
  (re = L.content), (q = L.finishReason), (v = L.usage);
  const ie = Kn(re);
  let X = ie.content,
    de = 0;
  for (; X.length < 1400 && de < 2; ) {
    const M = `你上一版同人文的可见正文偏短，故事还没有充分展开并完成收束。请基于下面已经写好的内容继续写，不要重写前文，不要重复已经出现的句子，不要另起标题，不要解释，只直接续写正文，直到故事形成完整短篇并自然收尾。

标题：${ie.title}

已有正文：
${X}

现在直接继续正文。`,
      h = await ee(M),
      G = zn(h.content);
    if (((v = En(v, h.usage)), (q = h.finishReason || q), !G || X.includes(G)))
      break;
    (X = Ce(`${X}
${G}`)),
      (de += 1);
  }
  return {
    post: {
      id: `forum_post_${u.getTime()}_fanfic_${Math.random()
        .toString(36)
        .slice(2, 8)}`,
      sectionId: i.id,
      title: ie.title,
      authorType: "anonymous",
      anonymousName: ne,
      content: X,
      createdAt: u.getTime(),
      fanficMeta: {
        characterIds: [s.id, n.id],
        characterNames: [s.name, n.name],
        worldSetting: l,
        genre: r,
      },
    },
    usage: v,
  };
}
const ze = "__custom_fanfic_world__",
  We = "__custom_fanfic_genre__",
  zt = { textAlign: "justify" },
  Qn = { ...zt, textIndent: "2em" };
function Xe(o) {
  const s = new Date(o),
    l = new Date().getTime() - s.getTime(),
    r = Math.floor(l / 6e4);
  if (r < 1) return "刚刚";
  if (r < 60) return `${r}分钟前`;
  const i = Math.floor(r / 60);
  return i < 24
    ? `${i}小时前`
    : s.toLocaleString("zh-CN", {
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1,
      });
}
function Et(o) {
  return `https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${encodeURIComponent(
    o || "anonymous"
  )}`;
}
function Xn(o, s, n = !1) {
  const l = o
    .replace(/\r/g, "")
    .split(
      `
`
    )
    .map((r) => r.trim())
    .filter(Boolean);
  return l.length === 0
    ? e.jsx("div", {
        className:
          "text-sm text-slate-700 leading-relaxed whitespace-pre-wrap break-words",
        children: o,
      })
    : e.jsx("div", {
        className: `${
          s ? "text-[15px] leading-[1.9]" : "text-sm leading-relaxed"
        } text-slate-700 break-words`,
        children: l.map((r, i) =>
          e.jsx(
            "p",
            {
              className: "mb-3 last:mb-0 break-words",
              style: n ? Qn : zt,
              children: r,
            },
            `${i}-${r.slice(0, 12)}`
          )
        ),
      });
}
function ys() {
  var wt;
  const {
      characters: o,
      npcs: s,
      users: n,
      setUsers: l,
      activeUserId: r,
      setCurrentApp: i,
      forumSections: c,
      setForumSections: p,
      forumPosts: f,
      setForumPosts: I,
      forumComments: N,
      setForumComments: u,
      messages: g,
      chats: b,
      knowledge: x,
      socialRelations: C,
      dailyPlans: w,
      apiPresets: Q,
      activePresetId: O,
      setMessages: ne,
      worldBooks: ae,
    } = vn(),
    [te, re] = j.useState(null),
    [v, q] = j.useState(null),
    [ee, L] = j.useState(null),
    [ie, X] = j.useState(new Set()),
    [de, U] = j.useState(null),
    [M, h] = j.useState(null),
    [G, J] = j.useState(!1),
    [V, d] = j.useState(""),
    [A, P] = j.useState(""),
    [k, _] = j.useState(!1),
    [D, S] = j.useState(!1),
    [B, R] = j.useState(!1),
    [le, z] = j.useState(""),
    [Z, K] = j.useState(null),
    [W, Y] = j.useState(!1),
    [ot, ce] = j.useState(!1),
    [ve, Ee] = j.useState(""),
    [Wt, ke] = j.useState(!1),
    [Me, at] = j.useState(""),
    [Fe, rt] = j.useState(""),
    [it, Ne] = j.useState(null),
    [Ht, Te] = j.useState(!1),
    [xe, qt] = j.useState(""),
    [fe, Yt] = j.useState(""),
    [Se, lt] = j.useState(Pt[0]),
    [ct, Ut] = j.useState(""),
    [Ae, dt] = j.useState(_t[0]),
    [ut, Vt] = j.useState(""),
    [De, qe] = j.useState(!1),
    [Qt, Xt] = j.useState(0),
    [mt, je] = j.useState(null),
    [Zt, $e] = j.useState(!1),
    [Ye, ht] = j.useState(""),
    [en, Re] = j.useState(!1),
    ue = Q.find((t) => t.id === O),
    y = n.find((t) => t.id === r),
    pt = j.useMemo(() => [...c].sort((t, a) => t.sortOrder - a.sortOrder), [c]),
    T = te ? pt.find((t) => t.id === te) ?? null : null,
    xt =
      ((wt = T == null ? void 0 : T.rules) == null
        ? void 0
        : wt.primaryPoster) === "fanfic",
    tn = !!(T && !T.isSystem),
    Pe = j.useMemo(() => {
      const t = [];
      return (
        n.forEach((a) =>
          t.push({
            id: a.id,
            name: a.name,
            background: a.background,
            intro: a.intro,
            gender: a.gender,
            type: "user",
          })
        ),
        o.forEach((a) =>
          t.push({
            id: a.id,
            name: a.name,
            background: a.background,
            intro: a.intro,
            gender: a.gender,
            type: "character",
          })
        ),
        s.forEach((a) =>
          t.push({
            id: a.id,
            name: a.name,
            background: "",
            intro: a.intro,
            gender: a.gender,
            type: "npc",
          })
        ),
        t
      );
    }, [n, o, s]),
    ft = j.useMemo(
      () =>
        T
          ? f
              .filter((t) => t.sectionId === T.id)
              .sort((t, a) => a.createdAt - t.createdAt)
          : [],
      [f, T]
    ),
    nn = j.useMemo(() => {
      const t = {};
      return (
        f.forEach((a) => {
          t[a.sectionId] = (t[a.sectionId] || 0) + 1;
        }),
        t
      );
    }, [f]),
    sn = j.useMemo(() => {
      const t = {};
      return (
        N.forEach((a) => {
          t[a.postId] = (t[a.postId] || 0) + 1;
        }),
        t
      );
    }, [N]),
    yt = j.useMemo(
      () =>
        b.filter((t) =>
          t.isSpectator
            ? !1
            : t.isGroup
            ? t.creatorId === r || (!t.creatorId && r === "user")
            : t.memberIds.includes(r)
        ),
      [b, r]
    ),
    Be = Se === ze ? ct.trim() : Se,
    Ge = Ae === We ? ut.trim() : Ae,
    on = j.useCallback(() => {
      Xt((t) => t + 1), Te(!0);
    }, []),
    an = j.useCallback(() => {
      Te(!1), qe(!1);
    }, []),
    se = j.useMemo(
      () =>
        v
          ? N.filter((t) => t.postId === v.id).sort(
              (t, a) => t.createdAt - a.createdAt
            )
          : [],
      [N, v]
    ),
    rn = j.useMemo(() => {
      if (se.length <= 1) return se;
      const t = {},
        a = [],
        m = new Set(se.map(($) => $.id));
      se.forEach(($) => {
        const H = $.parentCommentId;
        H && m.has(H) ? (t[H] || (t[H] = []), t[H].push($)) : a.push($);
      }),
        Object.keys(t).forEach(($) => {
          t[$].sort((H, ye) => H.createdAt - ye.createdAt);
        }),
        a.sort(($, H) => $.createdAt - H.createdAt);
      const F = [],
        E = ($) => {
          F.push($), (t[$.id] || []).forEach((ye) => E(ye));
        };
      return a.forEach(($) => E($)), F;
    }, [se]),
    Oe = j.useMemo(() => {
      const t = {};
      return (
        se.forEach((a) => {
          t[a.id] = a;
        }),
        t
      );
    }, [se]),
    we = Z ? Oe[Z] : null,
    he = (t) => {
      if (t.authorType === "anonymous") return t.anonymousName || "匿名";
      if (t.authorId) {
        if (t.authorType === "user" && t.anonymousName) return t.anonymousName;
        const a = o.find((E) => E.id === t.authorId);
        if (a) return a.name;
        const m = s.find((E) => E.id === t.authorId);
        if (m) return m.name;
        const F = n.find((E) => E.id === t.authorId);
        if (F) return F.name;
      }
      return "未知";
    },
    gt = (t) => {
      if (t.authorType === "anonymous") {
        const a = t.anonymousName || "匿";
        return e.jsx("div", {
          className:
            "w-8 h-8 rounded-full overflow-hidden border border-white/70 bg-white shadow-sm shrink-0",
          children: e.jsx("img", {
            src: Et(a),
            alt: a,
            className: "w-full h-full object-cover",
            loading: "lazy",
          }),
        });
      }
      if (t.authorType === "user" && t.anonymousName)
        return e.jsx("div", {
          className:
            "w-8 h-8 rounded-full overflow-hidden border border-white/70 bg-white shadow-sm shrink-0",
          children: e.jsx("img", {
            src: Et(t.anonymousName),
            alt: t.anonymousName,
            className: "w-full h-full object-cover",
            loading: "lazy",
          }),
        });
      if (t.authorId) {
        const a =
          o.find((m) => m.id === t.authorId) ||
          s.find((m) => m.id === t.authorId) ||
          n.find((m) => m.id === t.authorId);
        if (a) return e.jsx(Le, { char: a, className: "w-8 h-8" });
      }
      return e.jsx("div", {
        className:
          "w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center",
        children: e.jsx(Tn, { className: "w-4 h-4 text-white" }),
      });
    },
    bt = (t) => {
      if (t.title && t.title.trim()) return t.title;
      const a = t.content.replace(/\s+/g, "").slice(0, 16);
      return a ? `${a}${t.content.length > 16 ? "…" : ""}` : "未命名帖子";
    },
    ln = (t) => {
      if (!t.parentCommentId) return t.content;
      const a = Oe[t.parentCommentId];
      if (!a) return t.content;
      const m = he(a),
        F = new RegExp(`^@${m}[s，,：:]*`),
        E = t.content.trim();
      return (F.test(E) && E.replace(F, "").trim()) || t.content;
    },
    Nt = (t) => {
      I((a) => a.filter((m) => m.id !== t)),
        u((a) => a.filter((m) => m.postId !== t)),
        (v == null ? void 0 : v.id) === t && q(null),
        L(null);
    },
    cn = (t) => {
      u((a) => {
        const m = new Set([t]);
        let F = !0;
        for (; F; )
          (F = !1),
            a.forEach((E) => {
              E.parentCommentId &&
                m.has(E.parentCommentId) &&
                !m.has(E.id) &&
                (m.add(E.id), (F = !0));
            });
        return a.filter((E) => !m.has(E.id));
      }),
        Z === t && K(null),
        U(null);
    },
    dn = (t) => {
      const a = c.find((m) => m.id === t);
      if (!a || a.isSystem) {
        h(null);
        return;
      }
      p((m) => m.filter((F) => F.id !== t)),
        I((m) => m.filter((F) => F.sectionId !== t)),
        u((m) => {
          const F = new Set(
            f.filter((E) => E.sectionId === t).map((E) => E.id)
          );
          return m.filter((E) => !F.has(E.postId));
        }),
        te === t && re(null),
        q(null),
        ke(!1),
        Te(!1),
        $e(!1),
        L(null),
        U(null),
        h(null);
    },
    un = j.useCallback(async () => {
      if (!(!T || k)) {
        Ne(null), _(!0);
        try {
          const t = await Ln({
            section: T,
            characters: o,
            npcs: s,
            users: n,
            messages: g,
            chats: b,
            knowledge: x,
            socialRelations: C,
            dailyPlans: w,
            existingPosts: f,
            worldBooks: ae,
            preset: ue,
            postCount: 4,
          });
          if (t.posts.length === 0) {
            Ne({
              title: "帖子生成失败",
              detail: "接口已返回，但没有生成可用的帖子内容。",
            });
            return;
          }
          I((a) => [...a, ...t.posts]);
        } catch (t) {
          console.error("Forum generation failed:", t),
            Ne({ title: "帖子生成失败", detail: $t(t) });
        } finally {
          _(!1);
        }
      }
    }, [T, k, o, s, n, g, b, x, C, w, f, ae, ue, I]),
    mn = j.useCallback(async () => {
      if (!(!T || !v || D)) {
        Ne(null), S(!0);
        try {
          const t = N.filter((m) => m.postId === v.id),
            a = await Yn({
              post: v,
              section: T,
              existingComments: t,
              characters: o,
              npcs: s,
              users: n,
              messages: g,
              chats: b,
              socialRelations: C,
              knowledge: x,
              preset: ue,
              commentCount: Math.floor(Math.random() * 8) + 3,
            });
          if (a.comments.length === 0) {
            Ne({
              title: "评论生成失败",
              detail: "接口已返回，但没有生成可用的评论内容。",
            });
            return;
          }
          u((m) => [...m, ...a.comments]);
        } catch (t) {
          console.error("Forum comments generation failed:", t),
            Ne({ title: "评论生成失败", detail: $t(t) });
        } finally {
          S(!1);
        }
      }
    }, [T, v, D, N, o, s, n, g, b, C, ue, u]),
    hn = j.useCallback(() => {
      if (!v || !y || !T) return;
      const t = le.trim(),
        a = we ? he(we) : "",
        m = we && a ? (t.startsWith(`@${a}`) ? t : `@${a} ${t}`) : t;
      if (!m) return;
      const F = W && y.forumAlias ? y.forumAlias : void 0,
        E = {
          id: `forum_comment_${Date.now()}_${Math.random()
            .toString(36)
            .slice(2, 8)}`,
          postId: v.id,
          authorType: "user",
          authorId: y.id,
          anonymousName: F,
          content: m,
          createdAt: Date.now(),
          parentCommentId: Z || void 0,
        };
      if ((u(($) => [...$, E]), z(""), K(null), ue && !B)) {
        R(!0);
        const $ = [...N, E];
        Un({
          userComment: E,
          post: v,
          section: T,
          existingComments: $,
          characters: o,
          npcs: s,
          users: n,
          messages: g,
          chats: b,
          knowledge: x,
          preset: ue,
        })
          .then((H) => {
            H.comments.length > 0 && u((ye) => [...ye, ...H.comments]);
          })
          .catch((H) => {
            console.error("Auto-reply generation failed:", H);
          })
          .finally(() => {
            R(!1);
          });
      }
    }, [v, T, le, y, W, Z, we, u, ue, B, N, o, s, n, g, b, C]),
    jt = j.useCallback(() => {
      const t = ve.trim();
      !t ||
        !y ||
        (l((a) => a.map((m) => (m.id === y.id ? { ...m, forumAlias: t } : m))),
        ce(!1),
        Y(!0));
    }, [ve, y, l]),
    pn = j.useCallback(() => {
      if (!T || !y) return;
      const t = Me.trim(),
        a = Fe.trim();
      if (!t && !a) return;
      const m = W && y.forumAlias ? y.forumAlias : void 0,
        F = {
          id: `forum_post_${Date.now()}_${Math.random()
            .toString(36)
            .slice(2, 8)}`,
          sectionId: T.id,
          title: t || "无标题",
          authorType: "user",
          authorId: y.id,
          anonymousName: m,
          content: a || "",
          createdAt: Date.now(),
        };
      I((E) => [...E, F]), at(""), rt(""), ke(!1), q(F);
    }, [T, y, W, Me, Fe, I]),
    xn = j.useCallback(async () => {
      if ((je(null), !T)) {
        je("未选择板块");
        return;
      }
      if (De) return;
      if (!xe || !fe || xe === fe) {
        je("请选择两个不同角色");
        return;
      }
      if (!Be || !Ge) {
        je("请选择世界观和题材");
        return;
      }
      const t = Pe.find((m) => m.id === xe),
        a = Pe.find((m) => m.id === fe);
      if (!t || !a) {
        je("角色数据异常，请重新选择");
        return;
      }
      if (!ue) {
        je("未配置 API Preset");
        return;
      }
      qe(!0);
      try {
        const m = await Vn({
          characterA: t,
          characterB: a,
          worldSetting: Be,
          genre: Ge,
          section: T,
          socialRelations: C,
          characters: o,
          npcs: s,
          users: n,
          worldBooks: ae,
          preset: ue,
        });
        I((F) => [...F, m.post]), Te(!1), q(m.post);
      } catch (m) {
        console.error("Fanfic generation failed:", m),
          je(`生成失败: ${(m == null ? void 0 : m.message) || "未知错误"}`);
      } finally {
        qe(!1);
      }
    }, [T, De, xe, fe, Be, Ge, Pe, C, o, s, n, ue, I]);
  if (v && T) {
    const t = v.isDeleted;
    return e.jsxs("div", {
      className:
        "echoes-page echoes-page-forum w-full h-full flex flex-col backdrop-blur-3xl relative",
      children: [
        e.jsx("div", {
          className:
            "echoes-page-header safe-top pb-3 px-4 bg-white/10 backdrop-blur-md border-b border-white/40 sticky top-0 z-10",
          children: e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsx("button", {
                type: "button",
                onClick: () => {
                  q(null), L(null), U(null), Re(!1), ce(!1), X(new Set());
                },
                className:
                  "echoes-forum-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                children: e.jsx(Qe, { className: "w-6 h-6" }),
              }),
              e.jsx("h1", {
                className: "text-2xl font-bold text-slate-800",
                children: "帖子详情",
              }),
            ],
          }),
        }),
        e.jsxs("div", {
          className: "flex-1 min-h-0 flex flex-col",
          children: [
            e.jsxs("div", {
              className: "flex-1 overflow-y-auto px-4 pt-3 pb-4 space-y-3",
              children: [
                e.jsxs("div", {
                  className:
                    "bg-white/80 backdrop-blur-xl border border-sky-100/50 rounded-2xl p-4 shadow-sm",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-start gap-2 mb-2.5",
                      children: [
                        e.jsx("div", {
                          className:
                            "text-lg font-semibold text-slate-800 leading-snug flex-1 break-words",
                          children: bt(v),
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => L(v.id),
                          className:
                            "p-2 -m-1 rounded-lg text-slate-300 hover:text-rose-400 hover:bg-rose-50/60 active:text-rose-500 active:bg-rose-50/80 transition-all flex-shrink-0",
                          title: "删除帖子",
                          children: e.jsx(Ue, { className: "w-4 h-4" }),
                        }),
                      ],
                    }),
                    t
                      ? ie.has(v.id)
                        ? e.jsx("div", {
                            className:
                              "text-sm text-slate-400 line-through whitespace-pre-wrap break-words",
                            children: v.content,
                          })
                        : e.jsx("div", {
                            role: "button",
                            tabIndex: 0,
                            onClick: () => X((a) => new Set(a).add(v.id)),
                            className:
                              "text-sm text-slate-400 italic cursor-pointer hover:text-slate-500 transition-colors",
                            children: "该帖子已被删除",
                          })
                      : Xn(
                          v.content,
                          !!v.fanficMeta,
                          v.sectionId === "parallel_universe"
                        ),
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-2 mt-3 pt-2 border-t border-slate-100/80",
                      children: [
                        gt(v),
                        e.jsxs("div", {
                          className: "min-w-0",
                          children: [
                            e.jsx("div", {
                              className:
                                "text-xs font-medium text-slate-500 truncate",
                              children: he(v),
                            }),
                            e.jsx("div", {
                              className: "text-[10px] text-slate-400",
                              children: Xe(v.createdAt),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-end gap-2",
                      children: [
                        e.jsxs("button", {
                          type: "button",
                          onClick: (a) => {
                            a.stopPropagation(), Re((m) => !m);
                          },
                          className: `echoes-forum-like-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium ${pe}`,
                          children: [
                            e.jsx(At, { className: "w-3.5 h-3.5" }),
                            "分享到聊天",
                          ],
                        }),
                        e.jsxs("button", {
                          type: "button",
                          onClick: mn,
                          disabled: D,
                          className: `echoes-forum-comment-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium ${pe} ${be}`,
                          children: [
                            D
                              ? e.jsx(Ke, {
                                  className: "w-3.5 h-3.5 animate-spin",
                                })
                              : e.jsx(It, { className: "w-3.5 h-3.5" }),
                            "生成评论",
                          ],
                        }),
                      ],
                    }),
                    en &&
                      e.jsxs("div", {
                        className:
                          "rounded-2xl border border-sky-100/60 bg-white/75 backdrop-blur-xl shadow-[0_8px_24px_rgba(148,163,184,0.12)] overflow-hidden",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex items-center justify-between px-3 py-2 border-b border-white/70 bg-[rgba(244,248,252,0.9)]",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-xs font-semibold text-slate-700",
                                    children: "选择分享目标",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "text-[10px] text-slate-400 mt-0.5",
                                    children:
                                      "将这条帖子发到任意现有私聊或群聊",
                                  }),
                                ],
                              }),
                              e.jsx("button", {
                                type: "button",
                                onClick: () => Re(!1),
                                className:
                                  "p-1 rounded-full hover:bg-white/70 text-slate-400 hover:text-slate-600 transition-colors",
                                "aria-label": "关闭分享列表",
                                children: e.jsx(An, { className: "w-4 h-4" }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "p-2 max-h-[260px] overflow-y-auto space-y-1",
                            children: [
                              yt.map((a) => {
                                const m = a.isGroup,
                                  F = m
                                    ? null
                                    : a.memberIds.find(($) => $ !== r),
                                  E = F
                                    ? o.find(($) => $.id === F) ||
                                      s.find(($) => $.id === F) ||
                                      n.find(($) => $.id === F)
                                    : null;
                                return e.jsxs(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => {
                                      const $ = v,
                                        H = T,
                                        ye = se
                                          .slice(0, 5)
                                          .map((oe) => ({
                                            authorName: he(oe),
                                            content: oe.content.slice(0, 60),
                                            authorId: oe.authorId,
                                          })),
                                        yn = {
                                          id: Math.random()
                                            .toString(36)
                                            .substring(7),
                                          chatId: a.id,
                                          senderId: r,
                                          text: `[论坛帖子] ${$.title}`,
                                          perceivers: [
                                            r,
                                            ...a.memberIds.filter(
                                              (oe) =>
                                                !n.some((ge) => ge.id === oe)
                                            ),
                                          ],
                                          timestamp: Date.now(),
                                          type: "forum_post",
                                          metadata: {
                                            senderName:
                                              (y == null ? void 0 : y.name) ||
                                              "",
                                            time: Date.now(),
                                            sourceName: "湍流",
                                            forumPost: {
                                              postId: $.id,
                                              sectionId: H.id,
                                              sectionName: H.name,
                                              title: $.title,
                                              content: $.isDeleted
                                                ? "[该帖子已被删除]"
                                                : $.content.slice(0, 300),
                                              authorName: he($),
                                              authorType:
                                                $.authorType === "user" &&
                                                $.anonymousName
                                                  ? "anonymous"
                                                  : $.authorType,
                                              authorId:
                                                $.authorType === "user" &&
                                                $.anonymousName
                                                  ? void 0
                                                  : $.authorId,
                                              commentSnippets:
                                                ye.length > 0
                                                  ? ye.map((oe) => {
                                                      const ge = se.find(
                                                        (gn) =>
                                                          gn.authorId ===
                                                          oe.authorId
                                                      );
                                                      return (ge == null
                                                        ? void 0
                                                        : ge.authorType) ===
                                                        "user" &&
                                                        (ge == null
                                                          ? void 0
                                                          : ge.anonymousName)
                                                        ? {
                                                            authorName:
                                                              oe.authorName,
                                                            content: oe.content,
                                                          }
                                                        : oe;
                                                    })
                                                  : void 0,
                                            },
                                          },
                                        };
                                      ne((oe) => [...oe, yn]), Re(!1);
                                    },
                                    className:
                                      "w-full flex items-center gap-3 p-3 rounded-2xl text-left hover:bg-white/60 transition-colors border border-transparent hover:border-white/70 group",
                                    children: [
                                      m
                                        ? a.avatarUrl
                                          ? e.jsx("img", {
                                              src: a.avatarUrl,
                                              alt: a.name,
                                              className:
                                                "w-10 h-10 rounded-full object-cover shadow-sm flex-shrink-0 border border-white/60",
                                              referrerPolicy: "no-referrer",
                                            })
                                          : e.jsx("div", {
                                              className:
                                                "w-10 h-10 rounded-full bg-white/50 border border-white/60 flex items-center justify-center flex-shrink-0 shadow-sm",
                                              children: e.jsx(Cn, {
                                                className:
                                                  "w-5 h-5 text-sky-600",
                                              }),
                                            })
                                        : E
                                        ? e.jsx(Le, {
                                            char: E,
                                            className:
                                              "w-10 h-10 text-lg flex-shrink-0",
                                          })
                                        : e.jsx("div", {
                                            className:
                                              "w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0",
                                            children: e.jsx(In, {
                                              className:
                                                "w-4 h-4 text-slate-400",
                                            }),
                                          }),
                                      e.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "font-semibold text-slate-800 truncate",
                                            children: a.name,
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "text-[10px] text-slate-400 mt-0.5",
                                            children: a.isGroup
                                              ? `群聊 · ${a.memberIds.length}人`
                                              : "私聊",
                                          }),
                                        ],
                                      }),
                                      e.jsx(At, {
                                        className:
                                          "w-4 h-4 text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity",
                                      }),
                                    ],
                                  },
                                  a.id
                                );
                              }),
                              yt.length === 0 &&
                                e.jsx("div", {
                                  className:
                                    "text-center text-sm text-slate-400 py-6",
                                  children: "暂无聊天窗口",
                                }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
                se.length > 0 &&
                  e.jsxs("div", {
                    className: "space-y-0",
                    children: [
                      e.jsxs("div", {
                        className:
                          "text-xs text-slate-400 font-medium px-1 mb-2",
                        children: ["评论 · ", se.length],
                      }),
                      rn.map((a) =>
                        e.jsxs(
                          "div",
                          {
                            className: `flex gap-2.5 py-2.5 border-b border-slate-100/60 last:border-b-0 ${
                              a.parentCommentId
                                ? "ml-5 pl-3 border-l border-slate-200/70"
                                : ""
                            }`,
                            children: [
                              gt(a),
                              e.jsxs("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-baseline gap-1.5",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-xs font-semibold text-slate-700",
                                        children: he(a),
                                      }),
                                      e.jsx("span", {
                                        className: "text-[10px] text-slate-400",
                                        children: Xe(a.createdAt),
                                      }),
                                    ],
                                  }),
                                  a.parentCommentId &&
                                    Oe[a.parentCommentId] &&
                                    e.jsxs("div", {
                                      className:
                                        "text-[11px] text-slate-400 mt-0.5",
                                      children: [
                                        "回复 @",
                                        he(Oe[a.parentCommentId]),
                                      ],
                                    }),
                                  e.jsx("div", {
                                    className:
                                      "text-sm text-slate-600 mt-0.5 leading-relaxed whitespace-pre-wrap break-words",
                                    children: ln(a),
                                  }),
                                  e.jsxs("div", {
                                    className: "mt-1 flex items-center gap-2",
                                    children: [
                                      e.jsx("button", {
                                        type: "button",
                                        onClick: () => K(a.id),
                                        className:
                                          "text-[11px] text-slate-400 hover:text-slate-600 transition-colors",
                                        children: "回复",
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        onClick: () => U(a.id),
                                        className:
                                          "text-[11px] text-slate-400 hover:text-rose-500 transition-colors",
                                        children: "删除",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          a.id
                        )
                      ),
                    ],
                  }),
                se.length === 0 &&
                  !t &&
                  e.jsx("div", {
                    className: "text-center text-xs text-slate-400 py-6",
                    children: "暂无评论",
                  }),
                B &&
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-2 justify-center py-3 text-xs text-slate-400",
                    children: [
                      e.jsx(Ke, { className: "w-3.5 h-3.5 animate-spin" }),
                      e.jsx("span", { children: "对方正在输入…" }),
                    ],
                  }),
              ],
            }),
            !t &&
              e.jsx("div", {
                className:
                  "px-4 pb-3 pt-2 border-t border-white/55 bg-[rgba(244,248,252,0.85)] backdrop-blur-md",
                children: e.jsxs("div", {
                  className:
                    "bg-white/75 border border-sky-100/50 rounded-2xl p-3",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2 mb-2",
                      children: [
                        e.jsxs("div", {
                          className:
                            "flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/80 border border-slate-200 text-[11px] text-slate-600",
                          children: [
                            y && e.jsx(Le, { char: y, className: "w-4 h-4" }),
                            e.jsx("span", {
                              className: "max-w-[60px] truncate",
                              children:
                                W && y != null && y.forumAlias
                                  ? y.forumAlias
                                  : (y == null ? void 0 : y.name) || "未知",
                            }),
                          ],
                        }),
                        y != null && y.forumAlias
                          ? e.jsx("button", {
                              type: "button",
                              onClick: () => Y(!W),
                              className: `flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] transition-all ${
                                W
                                  ? "border-amber-200 bg-amber-50/60 text-amber-600"
                                  : "border-slate-200 bg-white/60 text-slate-400"
                              }`,
                              children: W ? "🎭 化名" : "👤 真名",
                            })
                          : null,
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            Ee((y == null ? void 0 : y.forumAlias) || ""),
                              ce(!0);
                          },
                          className:
                            "p-1 rounded-lg text-slate-300 hover:text-slate-500 transition-colors",
                          title:
                            y != null && y.forumAlias ? "修改化名" : "设置化名",
                          children: e.jsx(Ve, { className: "w-3 h-3" }),
                        }),
                      ],
                    }),
                    we &&
                      e.jsxs("div", {
                        className:
                          "mb-2 flex items-center justify-between gap-2 text-[11px] text-slate-500",
                        children: [
                          e.jsxs("span", {
                            className: "truncate",
                            children: ["正在回复 @", he(we)],
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: () => K(null),
                            className:
                              "text-slate-400 hover:text-slate-600 transition-colors",
                            children: "取消",
                          }),
                        ],
                      }),
                    e.jsxs("div", {
                      className: "flex items-end gap-2",
                      children: [
                        e.jsx("textarea", {
                          value: le,
                          onChange: (a) => z(a.target.value),
                          placeholder: we ? "写下你的回复…" : "写下你的评论…",
                          rows: 2,
                          className:
                            "flex-1 resize-none px-3 py-2 rounded-xl bg-white/80 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[rgba(130,170,198,0.3)]",
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: hn,
                          disabled: !le.trim(),
                          className: `px-3 py-2 rounded-xl text-xs font-medium ${pe} ${be}`,
                          children: "发送",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        }),
        de &&
          e.jsx(me, {
            title: "删除评论",
            onClose: () => U(null),
            children: e.jsxs("div", {
              className: "text-center px-2",
              children: [
                e.jsx("p", {
                  className: "text-sm text-slate-700 mb-4",
                  children: "确定删除这条评论？其下回复也会一并删除。",
                }),
                e.jsxs("div", {
                  className: "flex gap-3 justify-center",
                  children: [
                    e.jsx("button", {
                      type: "button",
                      onClick: () => U(null),
                      className:
                        "px-5 py-2 text-sm rounded-xl bg-white/60 border border-slate-200 text-slate-600 hover:bg-white transition-colors",
                      children: "取消",
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => cn(de),
                      className:
                        "px-5 py-2 text-sm rounded-xl bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 transition-colors",
                      children: "删除",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ot &&
          e.jsx(me, {
            title: "设置化名",
            onClose: () => ce(!1),
            children: e.jsxs("div", {
              className: "px-2",
              children: [
                e.jsx("p", {
                  className: "text-xs text-slate-500 mb-3",
                  children: "给自己起一个论坛化名，用化名发言时别人认不出你。",
                }),
                e.jsx("input", {
                  type: "text",
                  value: ve,
                  onChange: (a) => Ee(a.target.value),
                  placeholder: "输入你的化名…",
                  maxLength: 20,
                  className:
                    "w-full px-3 py-2 rounded-xl bg-white/80 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[rgba(130,170,198,0.3)] mb-3",
                }),
                e.jsxs("div", {
                  className: "flex gap-3 justify-end",
                  children: [
                    (y == null ? void 0 : y.forumAlias) &&
                      e.jsx("button", {
                        type: "button",
                        onClick: () => {
                          l((a) =>
                            a.map((m) =>
                              m.id === r ? { ...m, forumAlias: void 0 } : m
                            )
                          ),
                            Y(!1),
                            ce(!1);
                        },
                        className:
                          "px-4 py-2 text-xs rounded-xl text-rose-500 hover:bg-rose-50 transition-colors",
                        children: "清除化名",
                      }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => ce(!1),
                      className:
                        "px-4 py-2 text-xs rounded-xl bg-white/60 border border-slate-200 text-slate-600 hover:bg-white transition-colors",
                      children: "取消",
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: jt,
                      disabled: !ve.trim(),
                      className: `px-4 py-2 text-xs rounded-xl font-medium ${pe} ${be}`,
                      children: "保存",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ee &&
          e.jsx(me, {
            title: "删除帖子",
            onClose: () => L(null),
            children: e.jsxs("div", {
              className: "text-center px-2",
              children: [
                e.jsx("p", {
                  className: "text-sm text-slate-700 mb-4",
                  children: "确定删除这条帖子及其所有评论？",
                }),
                e.jsxs("div", {
                  className: "flex gap-3 justify-center",
                  children: [
                    e.jsx("button", {
                      type: "button",
                      onClick: () => L(null),
                      className:
                        "px-5 py-2 text-sm rounded-xl bg-white/60 border border-slate-200 text-slate-600 hover:bg-white transition-colors",
                      children: "取消",
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => Nt(ee),
                      className:
                        "px-5 py-2 text-sm rounded-xl bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 transition-colors",
                      children: "删除",
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  }
  if (T)
    return e.jsxs("div", {
      className:
        "echoes-page echoes-page-forum w-full h-full flex flex-col backdrop-blur-3xl relative",
      children: [
        it &&
          e.jsx($n, {
            error: it,
            onClose: () => Ne(null),
            className: "absolute top-20 left-4 right-4 z-30",
          }),
        e.jsx("div", {
          className:
            "echoes-page-header safe-top pb-3 px-4 bg-white/10 backdrop-blur-md border-b border-white/40 sticky top-0 z-10",
          children: e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsx("button", {
                type: "button",
                onClick: () => {
                  re(null), q(null), L(null), Te(!1), ke(!1), $e(!1), ce(!1);
                },
                className:
                  "echoes-forum-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                children: e.jsx(Qe, { className: "w-6 h-6" }),
              }),
              e.jsxs("div", {
                className: "min-w-0 flex-1",
                children: [
                  e.jsx("h1", {
                    className: "text-2xl font-bold text-slate-800",
                    children: T.name,
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-1 mt-0.5",
                    children: [
                      e.jsx("p", {
                        className: "text-[11px] text-slate-500",
                        children: T.description,
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: () => {
                          ht(T.stylePrompt), $e(!0);
                        },
                        className:
                          "p-0.5 rounded text-slate-300 hover:text-slate-500 transition-colors flex-shrink-0",
                        title: "编辑板块提示词",
                        children: e.jsx(Ve, { className: "w-2.5 h-2.5" }),
                      }),
                    ],
                  }),
                ],
              }),
              xt
                ? e.jsx("button", {
                    type: "button",
                    onClick: on,
                    className: Je,
                    title: "约稿",
                    children: e.jsx(kt, { className: "w-4 h-4" }),
                  })
                : e.jsxs(e.Fragment, {
                    children: [
                      e.jsx("button", {
                        type: "button",
                        onClick: un,
                        disabled: k,
                        className: `${Je} ${
                          k ? "opacity-50 pointer-events-none" : ""
                        }`,
                        title: "生成新帖子",
                        children: k
                          ? e.jsx(Ke, { className: "w-4 h-4 animate-spin" })
                          : e.jsx(It, { className: "w-4 h-4" }),
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: () => ke(!0),
                        className: Je,
                        title: "发帖",
                        children: e.jsx(Ct, { className: "w-4 h-4" }),
                      }),
                    ],
                  }),
            ],
          }),
        }),
        e.jsx("div", {
          className: "flex-1 overflow-y-auto px-4 pb-6",
          children:
            ft.length === 0
              ? e.jsxs("div", {
                  className:
                    "flex flex-col items-center justify-center h-full gap-2 text-slate-400",
                  children: [
                    e.jsx(Tt, { className: "w-8 h-8 opacity-30" }),
                    e.jsx("p", {
                      className: "text-sm",
                      children: "还没有内容",
                    }),
                    e.jsx("p", {
                      className: "text-xs opacity-60",
                      children: xt
                        ? "点击 ✨ 约稿，生成第一篇同人文"
                        : "点击刷新按钮生成帖子",
                    }),
                  ],
                })
              : e.jsx("div", {
                  className: "space-y-2 pt-2",
                  children: ft.map((t) => {
                    const a = sn[t.id] || 0,
                      m = t.isDeleted;
                    return e.jsxs(
                      "div",
                      {
                        role: "button",
                        tabIndex: 0,
                        className:
                          "echoes-forum-post-card bg-white/75 backdrop-blur-xl border border-sky-100/40 rounded-2xl p-3.5 shadow-[0_2px_8px_rgba(148,163,184,0.06)] hover:shadow-[0_4px_16px_rgba(148,163,184,0.1)] active:bg-white/90 transition-all cursor-pointer group",
                        onClick: () => q(t),
                        children: [
                          e.jsxs("div", {
                            className: "flex items-start gap-2 mb-2",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-[16px] font-semibold text-slate-800 leading-snug line-clamp-2 flex-1 break-words",
                                children: bt(t),
                              }),
                              e.jsx("button", {
                                type: "button",
                                onClick: (F) => {
                                  F.stopPropagation(), L(t.id);
                                },
                                className:
                                  "relative p-2 -m-0.5 rounded-lg text-slate-300 hover:text-rose-400 hover:bg-rose-50/60 active:text-rose-400 active:bg-rose-50/60 transition-all flex-shrink-0",
                                title: "删除帖子",
                                children: e.jsx(Ue, {
                                  className: "w-3.5 h-3.5",
                                }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "flex items-center gap-2 text-[11px] text-slate-400",
                            children: [
                              e.jsxs("span", {
                                className: "truncate",
                                children: ["发帖人：", he(t)],
                              }),
                              e.jsx("span", { children: "·" }),
                              e.jsx("span", { children: Xe(t.createdAt) }),
                              e.jsx("span", { children: "·" }),
                              e.jsxs("span", { children: ["Re:", a] }),
                              m &&
                                e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx("span", { children: "·" }),
                                    e.jsx("span", {
                                      className: "italic",
                                      children: "已删除",
                                    }),
                                  ],
                                }),
                              e.jsx(St, {
                                className: "w-3.5 h-3.5 ml-auto text-slate-300",
                              }),
                            ],
                          }),
                          t.fanficMeta &&
                            e.jsxs("div", {
                              className: "flex flex-wrap gap-1.5 mt-2",
                              children: [
                                e.jsxs("span", {
                                  className:
                                    "px-1.5 py-0.5 rounded-md bg-violet-50/80 border border-violet-100/60 text-[10px] text-violet-500",
                                  children: [
                                    t.fanficMeta.characterNames[0],
                                    " × ",
                                    t.fanficMeta.characterNames[1],
                                  ],
                                }),
                                e.jsx("span", {
                                  className:
                                    "px-1.5 py-0.5 rounded-md bg-sky-50/80 border border-sky-100/60 text-[10px] text-sky-500",
                                  children: t.fanficMeta.worldSetting,
                                }),
                                e.jsx("span", {
                                  className:
                                    "px-1.5 py-0.5 rounded-md bg-amber-50/80 border border-amber-100/60 text-[10px] text-amber-500",
                                  children: t.fanficMeta.genre,
                                }),
                              ],
                            }),
                        ],
                      },
                      t.id
                    );
                  }),
                }),
        }),
        ee &&
          e.jsx(me, {
            title: "删除帖子",
            onClose: () => L(null),
            children: e.jsxs("div", {
              className: "text-center px-2",
              children: [
                e.jsx("p", {
                  className: "text-sm text-slate-700 mb-4",
                  children: "确定删除这条帖子及其所有评论？",
                }),
                e.jsxs("div", {
                  className: "flex gap-3 justify-center",
                  children: [
                    e.jsx("button", {
                      type: "button",
                      onClick: () => L(null),
                      className:
                        "px-5 py-2 text-sm rounded-xl bg-white/60 border border-slate-200 text-slate-600 hover:bg-white transition-colors",
                      children: "取消",
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => Nt(ee),
                      className:
                        "px-5 py-2 text-sm rounded-xl bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 transition-colors",
                      children: "删除",
                    }),
                  ],
                }),
              ],
            }),
          }),
        Wt &&
          e.jsx(me, {
            title: "发帖",
            onClose: () => ke(!1),
            children: e.jsxs("div", {
              className: "px-1",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-3",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/80 border border-slate-200 text-[11px] text-slate-600",
                      children: [
                        y && e.jsx(Le, { char: y, className: "w-4 h-4" }),
                        e.jsx("span", {
                          className: "max-w-[60px] truncate",
                          children:
                            W && y != null && y.forumAlias
                              ? y.forumAlias
                              : (y == null ? void 0 : y.name) || "未知",
                        }),
                      ],
                    }),
                    y != null && y.forumAlias
                      ? e.jsx("button", {
                          type: "button",
                          onClick: () => Y(!W),
                          className: `flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] transition-all ${
                            W
                              ? "border-amber-200 bg-amber-50/60 text-amber-600"
                              : "border-slate-200 bg-white/60 text-slate-400"
                          }`,
                          children: W ? "🎭 化名" : "👤 真名",
                        })
                      : null,
                    e.jsx("button", {
                      type: "button",
                      onClick: () => {
                        Ee((y == null ? void 0 : y.forumAlias) || ""), ce(!0);
                      },
                      className:
                        "p-1 rounded-lg text-slate-300 hover:text-slate-500 transition-colors",
                      title:
                        y != null && y.forumAlias ? "修改化名" : "设置化名",
                      children: e.jsx(Ve, { className: "w-3 h-3" }),
                    }),
                  ],
                }),
                e.jsx("input", {
                  type: "text",
                  value: Me,
                  onChange: (t) => at(t.target.value),
                  placeholder: "帖子标题",
                  maxLength: 80,
                  className:
                    "w-full px-3 py-2 rounded-xl bg-white/80 border border-slate-200 text-sm font-medium text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[rgba(130,170,198,0.3)] mb-2",
                }),
                e.jsx("textarea", {
                  value: Fe,
                  onChange: (t) => rt(t.target.value),
                  placeholder: "写点什么…",
                  rows: 5,
                  className:
                    "w-full resize-none px-3 py-2 rounded-xl bg-white/80 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[rgba(130,170,198,0.3)] mb-3",
                }),
                e.jsx("div", {
                  className: "flex justify-end",
                  children: e.jsxs("button", {
                    type: "button",
                    onClick: pn,
                    disabled: !Me.trim() && !Fe.trim(),
                    className: `flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-medium ${pe} ${be}`,
                    children: [e.jsx(kn, { className: "w-3.5 h-3.5" }), "发布"],
                  }),
                }),
              ],
            }),
          }),
        Ht &&
          e.jsx(
            me,
            {
              title: "约稿 · 平行宇宙",
              onClose: an,
              children: e.jsxs("div", {
                className: "px-1 space-y-4",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("label", {
                        className:
                          "block text-xs font-medium text-slate-500 mb-1.5",
                        children: "选择两个角色",
                      }),
                      e.jsxs("div", {
                        className: "flex gap-2 items-center",
                        children: [
                          e.jsxs("select", {
                            value: xe,
                            onChange: (t) => qt(t.target.value),
                            className:
                              "flex-1 px-3 py-2 rounded-xl bg-white/80 border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[rgba(130,170,198,0.3)]",
                            children: [
                              e.jsx("option", {
                                value: "",
                                children: "角色 A",
                              }),
                              Pe.map((t) =>
                                e.jsx(
                                  "option",
                                  {
                                    value: t.id,
                                    disabled: t.id === fe,
                                    children: t.name,
                                  },
                                  t.id
                                )
                              ),
                            ],
                          }),
                          e.jsx("span", {
                            className: "text-slate-300 text-xs font-bold",
                            children: "×",
                          }),
                          e.jsxs("select", {
                            value: fe,
                            onChange: (t) => Yt(t.target.value),
                            className:
                              "flex-1 px-3 py-2 rounded-xl bg-white/80 border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[rgba(130,170,198,0.3)]",
                            children: [
                              e.jsx("option", {
                                value: "",
                                children: "角色 B",
                              }),
                              Pe.map((t) =>
                                e.jsx(
                                  "option",
                                  {
                                    value: t.id,
                                    disabled: t.id === xe,
                                    children: t.name,
                                  },
                                  t.id
                                )
                              ),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("label", {
                        className:
                          "block text-xs font-medium text-slate-500 mb-1.5",
                        children: "世界观背景",
                      }),
                      e.jsxs("div", {
                        className: "flex flex-wrap gap-1.5",
                        children: [
                          Pt.map((t) =>
                            e.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => lt(t),
                                className: `px-2.5 py-1 rounded-lg text-xs border transition-all ${
                                  Se === t
                                    ? "border-sky-200 bg-sky-50/80 text-sky-600 font-medium"
                                    : "border-slate-200 bg-white/60 text-slate-500 hover:bg-white/80"
                                }`,
                                children: t,
                              },
                              t
                            )
                          ),
                          e.jsx("button", {
                            type: "button",
                            onClick: () => lt(ze),
                            className: `px-2.5 py-1 rounded-lg text-xs border transition-all ${
                              Se === ze
                                ? "border-sky-200 bg-sky-50/80 text-sky-600 font-medium"
                                : "border-slate-200 bg-white/60 text-slate-500 hover:bg-white/80"
                            }`,
                            children: "自定义",
                          }),
                        ],
                      }),
                      Se === ze &&
                        e.jsx("input", {
                          value: ct,
                          onChange: (t) => Ut(t.target.value),
                          placeholder: "输入自定义世界观背景",
                          className:
                            "mt-2 w-full px-3 py-2 rounded-xl bg-white/80 border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[rgba(130,170,198,0.3)]",
                        }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("label", {
                        className:
                          "block text-xs font-medium text-slate-500 mb-1.5",
                        children: "题材",
                      }),
                      e.jsxs("div", {
                        className: "flex flex-wrap gap-1.5",
                        children: [
                          _t.map((t) =>
                            e.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => dt(t),
                                className: `px-2.5 py-1 rounded-lg text-xs border transition-all ${
                                  Ae === t
                                    ? "border-amber-200 bg-amber-50/80 text-amber-600 font-medium"
                                    : "border-slate-200 bg-white/60 text-slate-500 hover:bg-white/80"
                                }`,
                                children: t,
                              },
                              t
                            )
                          ),
                          e.jsx("button", {
                            type: "button",
                            onClick: () => dt(We),
                            className: `px-2.5 py-1 rounded-lg text-xs border transition-all ${
                              Ae === We
                                ? "border-amber-200 bg-amber-50/80 text-amber-600 font-medium"
                                : "border-slate-200 bg-white/60 text-slate-500 hover:bg-white/80"
                            }`,
                            children: "自定义",
                          }),
                        ],
                      }),
                      Ae === We &&
                        e.jsx("input", {
                          value: ut,
                          onChange: (t) => Vt(t.target.value),
                          placeholder: "输入自定义题材",
                          className:
                            "mt-2 w-full px-3 py-2 rounded-xl bg-white/80 border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[rgba(196,164,132,0.25)]",
                        }),
                    ],
                  }),
                  mt &&
                    e.jsx("div", {
                      className:
                        "text-xs text-red-500 bg-red-50/80 rounded-lg px-3 py-2",
                      children: mt,
                    }),
                  e.jsx("div", {
                    className: "flex justify-end pt-1",
                    children: e.jsx("button", {
                      type: "button",
                      onClick: xn,
                      disabled: !xe || !fe || xe === fe || !Be || !Ge || De,
                      className: `flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-medium ${pe} ${be}`,
                      children: De
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(Ke, {
                                className: "w-3.5 h-3.5 animate-spin",
                              }),
                              " 生成中…",
                            ],
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(kt, { className: "w-3.5 h-3.5" }),
                              " 生成同人文",
                            ],
                          }),
                    }),
                  }),
                ],
              }),
            },
            Qt
          ),
        Zt &&
          T &&
          e.jsx(me, {
            title: `${T.name} · 板块提示词`,
            onClose: () => $e(!1),
            children: e.jsxs("div", {
              className: "px-1",
              children: [
                e.jsx("p", {
                  className: "text-xs text-slate-500 mb-2",
                  children:
                    "这段提示词会影响 AI 生成该板块帖子和评论时的风格与内容方向。",
                }),
                e.jsx("textarea", {
                  value: Ye,
                  onChange: (t) => ht(t.target.value),
                  rows: 6,
                  className:
                    "w-full resize-none px-3 py-2 rounded-xl bg-white/80 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[rgba(130,170,198,0.3)] mb-3",
                }),
                e.jsxs("div", {
                  className: "flex items-end justify-between gap-3",
                  children: [
                    e.jsx("div", {
                      className: "min-h-[36px] flex items-end",
                      children:
                        tn &&
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => h(T.id),
                          className:
                            "inline-flex items-center gap-1.5 px-3 py-2 text-xs rounded-xl border border-rose-200/80 bg-rose-50/80 text-rose-500 hover:bg-rose-100/80 transition-colors",
                          children: [
                            e.jsx(Ue, { className: "w-3.5 h-3.5" }),
                            "删除板块",
                          ],
                        }),
                    }),
                    e.jsxs("div", {
                      className: "flex gap-3 justify-end",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          onClick: () => $e(!1),
                          className:
                            "px-4 py-2 text-xs rounded-xl bg-white/60 border border-slate-200 text-slate-600 hover:bg-white transition-colors",
                          children: "取消",
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            p((t) =>
                              t.map((a) =>
                                a.id === T.id
                                  ? { ...a, stylePrompt: Ye.trim() }
                                  : a
                              )
                            ),
                              $e(!1);
                          },
                          disabled: !Ye.trim(),
                          className: `px-4 py-2 text-xs rounded-xl font-medium ${pe} ${be}`,
                          children: "保存",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        M &&
          T &&
          M === T.id &&
          e.jsx(me, {
            title: "删除板块",
            onClose: () => h(null),
            children: e.jsxs("div", {
              className: "text-center px-2",
              children: [
                e.jsx("p", {
                  className: "text-sm text-slate-700 mb-2",
                  children: "确定删除整个板块吗？",
                }),
                e.jsx("p", {
                  className: "text-xs text-slate-400 mb-4",
                  children:
                    "该板块下的所有帖子和评论都会一并删除，且无法恢复。",
                }),
                e.jsxs("div", {
                  className: "flex gap-3 justify-center",
                  children: [
                    e.jsx("button", {
                      type: "button",
                      onClick: () => h(null),
                      className:
                        "px-5 py-2 text-sm rounded-xl bg-white/60 border border-slate-200 text-slate-600 hover:bg-white transition-colors",
                      children: "取消",
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => dn(M),
                      className:
                        "px-5 py-2 text-sm rounded-xl bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 transition-colors",
                      children: "删除板块",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ot &&
          e.jsx(me, {
            title: "设置化名",
            onClose: () => ce(!1),
            children: e.jsxs("div", {
              className: "px-2",
              children: [
                e.jsx("p", {
                  className: "text-xs text-slate-500 mb-3",
                  children: "给自己起一个论坛化名，用化名发言时别人认不出你。",
                }),
                e.jsx("input", {
                  type: "text",
                  value: ve,
                  onChange: (t) => Ee(t.target.value),
                  placeholder: "输入你的化名…",
                  maxLength: 20,
                  className:
                    "w-full px-3 py-2 rounded-xl bg-white/80 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[rgba(130,170,198,0.3)] mb-3",
                }),
                e.jsxs("div", {
                  className: "flex gap-3 justify-end",
                  children: [
                    (y == null ? void 0 : y.forumAlias) &&
                      e.jsx("button", {
                        type: "button",
                        onClick: () => {
                          l((t) =>
                            t.map((a) =>
                              a.id === r ? { ...a, forumAlias: void 0 } : a
                            )
                          ),
                            Y(!1),
                            ce(!1);
                        },
                        className:
                          "px-4 py-2 text-xs rounded-xl text-rose-500 hover:bg-rose-50 transition-colors",
                        children: "清除化名",
                      }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => ce(!1),
                      className:
                        "px-4 py-2 text-xs rounded-xl bg-white/60 border border-slate-200 text-slate-600 hover:bg-white transition-colors",
                      children: "取消",
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: jt,
                      disabled: !ve.trim(),
                      className: `px-4 py-2 text-xs rounded-xl font-medium ${pe} ${be}`,
                      children: "保存",
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  const fn = () => {
    const t = V.trim();
    if (!t) return;
    const a = {
      id: `custom_${Date.now()}`,
      name: t,
      description: A.trim() || "自定义板块",
      stylePrompt: "自由话题区，语气轻松自然，发帖者类型混合，无特殊格式要求。",
      sortOrder: c.length,
      isSystem: !1,
      rules: { primaryPoster: "mixed" },
    };
    p((m) => [...m, a]), d(""), P(""), J(!1);
  };
  return e.jsxs("div", {
    className:
      "echoes-page echoes-page-forum w-full h-full flex flex-col backdrop-blur-3xl",
    children: [
      e.jsx("div", {
        className:
          "echoes-page-header safe-top pb-3 px-4 bg-white/10 backdrop-blur-md border-b border-white/40 sticky top-0 z-10",
        children: e.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            e.jsx("button", {
              type: "button",
              onClick: () => i("home"),
              className:
                "echoes-forum-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
              children: e.jsx(Qe, { className: "w-6 h-6" }),
            }),
            e.jsxs("div", {
              className: "min-w-0 flex-1",
              children: [
                e.jsx("h1", {
                  className: "text-2xl font-bold text-slate-800",
                  children: "湍流",
                }),
                e.jsx("p", {
                  className: "text-[11px] text-slate-500 mt-0.5",
                  children: "信息在这里碰撞、扭曲、不可预测地传播",
                }),
              ],
            }),
            e.jsx("button", {
              type: "button",
              onClick: () => J(!0),
              className: `echoes-forum-create-btn ${Je}`,
              title: "新建板块",
              children: e.jsx(Ct, { className: "w-4.5 h-4.5" }),
            }),
          ],
        }),
      }),
      G &&
        e.jsx(me, {
          title: "新建板块",
          onClose: () => J(!1),
          children: e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className:
                      "text-xs font-medium text-slate-500 mb-1.5 block",
                    children: "板块名称",
                  }),
                  e.jsx("input", {
                    type: "text",
                    value: V,
                    onChange: (t) => d(t.target.value),
                    placeholder: "给板块起个名字",
                    maxLength: 20,
                    className:
                      "w-full px-3 py-2.5 rounded-xl bg-white/80 border border-sky-100/60 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[rgba(130,170,198,0.3)] transition-shadow",
                    autoFocus: !0,
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className:
                      "text-xs font-medium text-slate-500 mb-1.5 block",
                    children: "板块简介",
                  }),
                  e.jsx("input", {
                    type: "text",
                    value: A,
                    onChange: (t) => P(t.target.value),
                    placeholder: "一句话描述（可选）",
                    maxLength: 50,
                    className:
                      "w-full px-3 py-2.5 rounded-xl bg-white/80 border border-sky-100/60 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[rgba(130,170,198,0.3)] transition-shadow",
                  }),
                ],
              }),
              e.jsx("button", {
                type: "button",
                onClick: fn,
                disabled: !V.trim(),
                className: `w-full py-2.5 rounded-xl text-sm font-medium ${pe} ${be}`,
                children: "创建",
              }),
            ],
          }),
        }),
      e.jsx("div", {
        className: "flex-1 overflow-y-auto px-4 pb-6 pt-2",
        children: e.jsx("div", {
          className: "space-y-2",
          children: pt.map((t) => {
            const a = nn[t.id] || 0;
            return e.jsx(
              "div",
              {
                className:
                  "echoes-forum-post-card bg-white/75 backdrop-blur-xl border border-sky-100/40 rounded-2xl p-4 shadow-[0_2px_8px_rgba(148,163,184,0.06)] hover:shadow-[0_4px_16px_rgba(148,163,184,0.1)] transition-shadow cursor-pointer group",
                onClick: () => re(t.id),
                children: e.jsxs("div", {
                  className: "flex items-center gap-3 py-2",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-10 h-10 rounded-xl bg-[rgba(130,170,198,0.12)] flex items-center justify-center shrink-0",
                      children: e.jsx(Tt, {
                        className: "w-4.5 h-4.5 text-[#6a96b0]",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        e.jsx("div", {
                          className: "text-[15px] font-semibold text-slate-800",
                          children: t.name,
                        }),
                        e.jsx("div", {
                          className:
                            "text-xs text-slate-400 mt-1 leading-snug line-clamp-1",
                          children: t.description,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-1.5 shrink-0",
                      children: [
                        a > 0 &&
                          e.jsx("span", {
                            className:
                              "text-[10px] text-slate-400 bg-slate-100/80 px-1.5 py-0.5 rounded-full",
                            children: a,
                          }),
                        e.jsx(St, {
                          className:
                            "w-4 h-4 text-slate-300 group-hover:text-slate-400 transition-colors",
                        }),
                      ],
                    }),
                  ],
                }),
              },
              t.id
            );
          }),
        }),
      }),
    ],
  });
}
export { ys as default };
