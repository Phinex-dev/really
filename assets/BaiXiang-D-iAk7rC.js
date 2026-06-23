import { r as $, j as e } from "./index-C41onZB-.js";
import {
  c as te,
  au as X,
  aO as se,
  j as ae,
  u as ie,
  aC as ne,
} from "./App-CYgIjxWH.js";
import { e as H } from "./bio-D6j723LQ.js";
import { b as re } from "./worldBookScopes-B0JaUaci.js";
import { f as le } from "./llmFetch-C_SjUca9.js";
import { A as W, m as d } from "./proxy-DMomAik7.js";
import { R as ce } from "./refresh-cw-BoDq0Pnx.js";
import { C as oe } from "./chevron-left-CTqCLzU8.js";
import { S as de } from "./star-CVoNwJVA.js";
import { Z as xe } from "./zap-CKIKz9eO.js";
import { F as pe } from "./flame-FM_iMr0c.js";
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const me = [
    [
      "path",
      {
        d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",
        key: "1f1r0c",
      },
    ],
  ],
  he = te("diamond", me),
  G = `
你必须严格输出一个 JSON 对象，格式如下（不要输出任何 JSON 以外的内容）：
{
  "style": "<风格ID>",
  "date": "<YYYY-MM-DD>",
  "masthead": {
    "title": "<报纸名称>",
    "subtitle": "<副标题/英文名，可选>",
    "issue": "<期号>",
    "slogan": "<标语>",
    "price": "<售价，可选>"
  },
  "headline": {
    "tag": "<标签，可选>",
    "title": "<头条标题>",
    "body": "<头条正文>",
    "pull": "<突出引述，可选>"
  },
  "sections": [
    { "tag": "<栏目标签，可选>", "title": "<标题>", "body": "<正文>" }
  ],
  "ad": "<虚构广告，一段文字>",
  "footer": "<底部文字，可选>"
}
sections 数组包含 2-3 个栏目。所有文本字段直接用字符串，不要嵌套额外结构。`.trim(),
  ge = `
你是「猛料快報」编辑部的总编辑。你的报纸是全城销量最高的八卦小报。

世界观与语气：
- 使用港式粤语书面语，全文繁体字。
- 所有事件都要极度夸张化，不存在小事——任何日常互动都是「震驚」「獨家」「疑點重重」。
- 角色之间的任何互动都必须解读为八卦新闻：暧昧、密會、衝突、背叛、陰謀。
- 标题必须使用感叹号，越多越好。前缀用「震驚！！」「獨家」「突發」「爆料」。
- 正文用短句猛轟，语气像在对读者喊。
- 知情人士、目擊者、讀者爆料是你最爱的消息来源。
- headline.pull 应该是一句来自"知情人士"的爆炸性引述，用引号包裹。
- masthead: title="猛料快報", slogan 包含「全城最快 · 獨家猛料」, price 用港币。
- ad 写一条浮夸的港式广告（减肥药、风水大师、跌打酒之类）。

${G}
`.trim(),
  ue = `
你是「真理报」——观测者委员会机关报的编辑委员会。

世界观与语气：
- 一切纳入集体主义叙事框架。角色全部称为"同志"，没有个人情绪，只有思想动态。
- 任何正面行为都是「高度革命觉悟」，任何负面事件都是「不影响整体生产指标的正常工作损耗」。
- 栏目标签使用：「重要公报」「生产报告」「思想动态」「模范同志表彰」等。
- headline.tag 固定为「重要公报」。
- 语气庄重、官方，使用「据观测者委员会通报」「委员会高度评价」「号召全体成员学习」等句式。
- 正文使用缩进两字符的长段落，句式工整，像官方文件。
- masthead: title="真理报", slogan 包含「以观测之名，建设精神文明新世界」, price="免费"。
- ad 区域写一条「模范同志表彰」或集体主义标语，不写商业广告。
- footer 可用一条号召性标语。

${G}
`.trim(),
  fe = `
你是「预言家日报」的特约记者。这是巫师界最权威（也最不可靠）的报纸。

世界观与语气：
- 哈利波特世界的叙事腔调。一切事件都是魔法事件。
- 使用不可靠叙述者视角：「据一位不愿透露姓名的消息人士」「魔法部拒绝评论」「本报了解到」。
- 日常物品和行为都要魔法化解读（咖啡=魔药、争吵=施咒、散步=巡逻）。
- 带一种悬疑的、半信半疑的新闻腔。
- 栏目标签可用：「巫师生活」「魔法部通告」「活点地图追踪」等。
- masthead: title="预言家日报", slogan 包含「为您报道巫师界一切值得知道的事」, price 用纳特。
- headline 标题要有魔法悬疑感，正文引用各种匿名消息源。
- ad 写一条魔法商品广告（如速效逃课糖、飞天扫帚、记忆球）。
- footer 可用一条魔法部提醒。

${G}
`.trim(),
  be = `
你是「社交季刊」的编辑。这是一份维多利亚时代风格的上流社会刊物。

世界观与语气：
- 极度克制和优雅，从不直说任何事。
- 核心句式：「据悉」「不便评论」「或许并无深意，但仍觉有必要记录」「本刊无意揣测」「据一位与本刊关系甚为密切的消息人士」。
- 所有事件都用迂回、含蓄的方式描述，像在说八卦但假装自己不是在说八卦。
- 正文使用长句、从句嵌套、缩进两字符的典雅段落，行文如 19 世纪书信体。
- 栏目标签可用：「编者按」「本季要闻」「社交札记」等。
- masthead: title="社交季刊", subtitle="The Echoes Society Quarterly", slogan 包含「关于上流社会一切值得低声谈论之事」, price 用先令。
- headline 标题要足够长且故意模糊，如「关于某位绅士深夜现身阳台一事之我们所能谨慎透露的部分」。
- ad 写一条维多利亚时代的优雅广告（手套行、香水、裁缝）。

${G}
`.trim(),
  je = `
你是一堆散落在篝火旁的残页碎片。没有叙述者，没有编辑部，没有记者。

世界观与语气：
- 这不是报纸，是拾取物。格式是物品描述、石碑铭文、残缺手记、被污渍模糊的纸页。
- 信息断裂、暧昧、需要读者自己拼凑。句子可以中途断开，用省略号或破折号表示残缺。
- 没有完整叙事——每个 section 都是一个独立碎片，彼此之间不必有明确连接。
- 语气冷峻、空灵、充满宿命感。像黑暗之魂的物品描述和环境叙事。
- section.tag 用碎片类型：「残缺的手记 · 其一」「石碑铭文」「被污渍模糊的纸页」「褪色的信件残片」「旅人笔记」。
- section.title 是碎片的第一行文字（短句，斜体感），section.body 是剩余内容。
- masthead: title="篝火残页", issue 可用模糊表述如「不知第几夜」, slogan="篝火旁拾得"。不需要 price。
- headline 也是一个碎片，不是新闻头条。tag 可省略。
- ad 写一段篝火旁的低语或旅商的叫卖（「不死人，要买点什么吗……」）。
- footer 用一句宿命感结语，如「前方无路可走。」「余烬终将熄灭。」

${G}
`.trim(),
  Ne = { hk: ge, ussr: ue, prophet: fe, victorian: be, souls: je },
  ye = 1e4,
  we = 5e3,
  ve = "baixiang_",
  z = 4;
function ke() {
  const s = new Date(),
    t = new Date(s.getTime() - z * 36e5),
    a = new Date(t.getFullYear(), t.getMonth(), t.getDate()),
    n = new Date(a);
  n.setDate(n.getDate() - 1);
  const r = `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(n.getDate()).padStart(2, "0")}`,
    l = new Date(n);
  l.setHours(z, 0, 0, 0);
  const i = new Date(a);
  return (
    i.setHours(z, 0, 0, 0),
    { dateStr: r, rangeStart: l.getTime(), rangeEnd: i.getTime() }
  );
}
function I(s) {
  return typeof s == "string" && s.trim().length > 0;
}
function L(s) {
  return s === void 0 || typeof s == "string";
}
function K(s) {
  if (!s || typeof s != "object") return !1;
  const t = s;
  if (!I(t.style) || !I(t.date) || !I(t.ad) || !L(t.footer)) return !1;
  const a = t.masthead;
  if (
    !a ||
    typeof a != "object" ||
    !I(a.title) ||
    !I(a.issue) ||
    !I(a.slogan) ||
    !L(a.subtitle) ||
    !L(a.price)
  )
    return !1;
  const n = t.headline;
  return !(
    !n ||
    typeof n != "object" ||
    !I(n.title) ||
    !I(n.body) ||
    !L(n.tag) ||
    !L(n.pull) ||
    !Array.isArray(t.sections) ||
    t.sections.length === 0 ||
    !t.sections.every(
      (r) => r && typeof r == "object" && I(r.title) && I(r.body) && L(r.tag)
    )
  );
}
function Be(s) {
  return s.replace(/<think(?:ing)?[\s\S]*?<\/think(?:ing)?>/gi, "").trim();
}
async function Ae(s, t, a) {
  var l, i, c;
  const n = await le(s, {
    model: s.model,
    messages: [
      { role: "system", content: t },
      { role: "user", content: a },
    ],
    temperature: s.temperature,
  });
  if (!n.ok) throw new Error(`Baixiang API Error: ${n.status} ${n.errorText}`);
  const r = n.data || {};
  return Be(
    ((c =
      (i = (l = r.choices) == null ? void 0 : l[0]) == null
        ? void 0
        : i.message) == null
      ? void 0
      : c.content) || ""
  );
}
function De(s, t) {
  let a = t + 1;
  for (
    ;
    a < s.length &&
    (s[a] === " " ||
      s[a] === "	" ||
      s[a] ===
        `
` ||
      s[a] === "\r");

  )
    a++;
  if (a >= s.length) return !0;
  const n = s[a];
  return n === "," || n === "}" || n === "]" || n === ":";
}
function Ce(s) {
  const t = [];
  let a = !1,
    n = !1;
  for (let l = 0; l < s.length; l++) {
    const i = s[l];
    if (n) {
      t.push(i), (n = !1);
      continue;
    }
    if (i === "\\" && a) {
      t.push(i), (n = !0);
      continue;
    }
    if (i === '"') {
      a
        ? De(s, l)
          ? ((a = !1), t.push(i))
          : t.push("\\", '"')
        : ((a = !0), t.push(i));
      continue;
    }
    if (
      a &&
      (i ===
        `
` ||
        i === "\r")
    ) {
      i === "\r" &&
        s[l + 1] ===
          `
` &&
        l++,
        t.push("\\", "n");
      continue;
    }
    if (a && i !== "	" && i.charCodeAt(0) >= 0 && i.charCodeAt(0) <= 31) {
      t.push(
        "\\",
        "u",
        "0",
        "0",
        i.charCodeAt(0).toString(16).padStart(2, "0")
      );
      continue;
    }
    t.push(i);
  }
  let r = t.join("");
  return (r = r.replace(/,(\s*[}\]])/g, "$1")), r;
}
function Se(s) {
  let t = s.replace(/<think(?:ing)?[\s\S]*?<\/think(?:ing)?>/gi, "");
  (t = t.replace(/```json/gi, "").replace(/```/g, "")), (t = Ce(t));
  const a = t.indexOf("{"),
    n = t.indexOf("[");
  let r = -1,
    l = !0;
  if (
    (a >= 0 && (n < 0 || a < n)
      ? ((r = a), (l = !0))
      : n >= 0 && ((r = n), (l = !1)),
    r >= 0)
  ) {
    const i = l ? "{" : "[",
      c = l ? "}" : "]";
    let o = 0,
      x = !1,
      y = !1;
    for (let w = r; w < t.length; w++) {
      const u = t[w];
      if (y) {
        y = !1;
        continue;
      }
      if (u === "\\" && x) {
        y = !0;
        continue;
      }
      if (u === '"') {
        x = !x;
        continue;
      }
      if (!x && (u === i && o++, u === c && o--, o === 0))
        return t.slice(r, w + 1);
    }
  }
  return t.trim();
}
function Ee(s, t, a, n, r, l, i) {
  var k, v, C;
  const c = new Set(),
    o = new Map(t.map((f) => [f.id, f])),
    x = s.filter(
      (f) =>
        f.timestamp >= l &&
        f.timestamp < i &&
        f.subType !== "ooc" &&
        f.subType !== "date_ooc"
    ),
    y = new Map();
  for (const f of x) {
    const B = y.get(f.chatId) || [];
    B.push(f), y.set(f.chatId, B);
  }
  const w = [];
  let u = 0;
  for (const [f, B] of y) {
    const _ = o.get(f);
    if (!_) continue;
    B.sort((g, M) => g.timestamp - M.timestamp);
    const S = [_.isGroup ? `【群聊：${_.name}】` : `【${_.name}】`];
    for (const g of B) {
      c.add(g.senderId), g.perceivers.forEach((h) => c.add(h));
      const M =
          ((k = a.find((h) => h.id === g.senderId)) == null
            ? void 0
            : k.name) ||
          ((v = n.find((h) => h.id === g.senderId)) == null
            ? void 0
            : v.name) ||
          ((C = r.find((h) => h.id === g.senderId)) == null
            ? void 0
            : C.name) ||
          g.senderId,
        m =
          g.type === "image" || g.type === "photo"
            ? "[图片]"
            : g.type === "location"
            ? se(g, { compact: !0 })
            : g.isRecalled
            ? "[消息已撤回]"
            : g.text,
        b = new Date(g.timestamp).toLocaleString("zh-CN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: !1,
        });
      S.push(`${b} ${M}: ${m}`);
    }
    const F = S.join(`
`);
    if (u + F.length > ye && w.length > 0) break;
    w.push(F), (u += F.length);
  }
  return {
    text:
      w.length > 0
        ? w.join(`

`)
        : "昨日无聊天记录。",
    involvedEntityIds: c,
  };
}
function $e(s, t, a, n, r) {
  const l = new Set(),
    i = s
      .filter((x) => (x.startTime ? x.startTime >= n && x.startTime < r : !1))
      .sort((x, y) => (x.startTime || 0) - (y.startTime || 0));
  if (i.length === 0)
    return { text: "昨日无已总结的事件记录。", involvedEntityIds: l };
  const c = [];
  let o = 0;
  for (const x of i) {
    x.perceivers.forEach((k) => l.add(k));
    const y = x.perceivers
        .map((k) => ae.resolvePerceiverName(k, t, a))
        .join("、"),
      u = `- ${
        x.startTime
          ? new Date(x.startTime).toLocaleString("zh-CN", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1,
            })
          : "?"
      } [${y}] ${x.summary}`;
    if (o + u.length > we && c.length > 0) break;
    c.push(u), (o += u.length);
  }
  return {
    text: c.join(`
`),
    involvedEntityIds: l,
  };
}
function Te(s, t, a, n) {
  const r = [];
  for (const l of s) {
    const i = t.find((x) => x.id === l);
    if (i != null && i.bio) {
      r.push(i.bio);
      continue;
    }
    const c = a.find((x) => x.id === l);
    if (c != null && c.bio) {
      r.push(c.bio);
      continue;
    }
    const o = n.find((x) => x.id === l);
    if (o != null && o.bio) {
      r.push(o.bio);
      continue;
    }
  }
  return r.length > 0
    ? r.join(`
`)
    : "无角色信息。";
}
function Ie(s, t, a, n, r) {
  return `今天的日期是 ${t}，风格ID是 "${s}"。

## 登场角色
${r}

## 昨日聊天记录
${a}

## 昨日事件总结
${n}

请根据以上素材，生成一份完整的报纸 JSON。严格按照指定格式输出，不要输出任何 JSON 以外的内容。`;
}
function q(s, t) {
  return `${ve}${s}_${t}`;
}
async function V(s, t) {
  return X.getItem(q(s, t));
}
async function J(s, t) {
  await X.removeItem(q(s, t));
}
async function _e(s) {
  await X.setItem(q(s.date, s.style), s);
}
async function Z(s) {
  const {
      style: t,
      messages: a,
      chats: n,
      characters: r,
      users: l,
      npcs: i,
      knowledge: c,
      preset: o,
      worldBooks: x,
      onCharactersUpdate: y,
      onUsersUpdate: w,
      onNpcsUpdate: u,
    } = s,
    { dateStr: k, rangeStart: v, rangeEnd: C } = ke(),
    f = await V(k, t);
  if (f) return f;
  const B = Ee(a, n, r, l, i, v, C),
    _ = $e(c, r, l, v, C),
    T = new Set([...B.involvedEntityIds, ..._.involvedEntityIds]),
    S = r.filter((p) => T.has(p.id) && !p.bio),
    F = l.filter((p) => T.has(p.id) && !p.bio),
    g = i.filter((p) => T.has(p.id) && !p.bio);
  if (S.length > 0) {
    const p = await H(S, o);
    if (p.size > 0 && y) {
      y((N) => N.map((D) => (p.has(D.id) ? { ...D, bio: p.get(D.id) } : D)));
      for (const N of r) p.has(N.id) && (N.bio = p.get(N.id));
    }
  }
  if (F.length > 0) {
    const p = await H(F, o);
    if (p.size > 0 && w) {
      w((N) => N.map((D) => (p.has(D.id) ? { ...D, bio: p.get(D.id) } : D)));
      for (const N of l) p.has(N.id) && (N.bio = p.get(N.id));
    }
  }
  if (g.length > 0) {
    const p = await H(g, o);
    if (p.size > 0 && u) {
      u((N) => N.map((D) => (p.has(D.id) ? { ...D, bio: p.get(D.id) } : D)));
      for (const N of i) p.has(N.id) && (N.bio = p.get(N.id));
    }
  }
  const M = Te(T, r, l, i),
    b = re(x, "baixiang") + Ne[t],
    h = Ie(t, k, B.text, _.text, M);
  if (!(o != null && o.endpoint)) throw new Error("API preset 未配置 endpoint");
  const j = await Ae(o, b, h),
    A = Se(j),
    E = JSON.parse(A);
  if (((E.style = t), (E.date = k), !K(E)))
    throw new Error("Baixiang returned an invalid newspaper payload");
  return await _e(E), E;
}
const Fe = {
  hk: {
    icon: "📠",
    messages: [
      "线人来电中……",
      "狗仔队赶往现场……",
      "总编拍桌定标题……",
      "加印！！加印！！！",
    ],
    bg: "bg-gradient-to-b from-[#1a0000] to-[#0d0000]",
    bar: "bg-[#d40000]",
    text: "text-[#d40000]/70",
    iconGlow: "drop-shadow-[0_0_24px_rgba(212,0,0,0.3)]",
  },
  ussr: {
    icon: "⚙️",
    messages: [
      "电报传输中……",
      "委员会审核内容……",
      "删除不当言论……",
      "公报已获批准，同志",
    ],
    bg: "bg-gradient-to-b from-[#1a0808] to-[#0d0404]",
    bar: "bg-[#D4A84B]",
    text: "text-[#D4A84B]/60",
    iconGlow: "drop-shadow-[0_0_24px_rgba(212,168,75,0.25)]",
  },
  prophet: {
    icon: "🪶",
    messages: [
      "猫头鹰正在派送……",
      "羽毛笔自动书写中……",
      "魔法墨水缓缓显现……",
      "今日预言已就绪",
    ],
    bg: "bg-gradient-to-b from-[#1a1508] to-[#0d0a04]",
    bar: "bg-[#C4A265]",
    text: "text-[#C4A265]/60",
    iconGlow: "drop-shadow-[0_0_24px_rgba(196,162,101,0.25)]",
  },
  victorian: {
    icon: "🖋️",
    messages: [
      "印刷机缓缓转动……",
      "编辑斟酌措辞中……",
      "确认未涉及不雅内容……",
      "本期已付梓",
    ],
    bg: "bg-gradient-to-b from-[#1a1810] to-[#0d0c08]",
    bar: "bg-[#C4B99A]",
    text: "text-[#C4B99A]/50",
    iconGlow: "drop-shadow-[0_0_24px_rgba(196,185,154,0.2)]",
  },
  souls: {
    icon: "🔥",
    messages: ["余烬微明……", "灰烬中浮现文字……", "碎片正在拼合……", "…………"],
    bg: "bg-gradient-to-b from-[#080706] to-[#030302]",
    bar: "bg-[#C4854A]/60",
    text: "text-[#C4854A]/30",
    iconGlow: "drop-shadow-[0_0_32px_rgba(196,133,74,0.2)]",
  },
};
function Me({ styleId: s, done: t, onComplete: a }) {
  const n = Fe[s],
    [r, l] = $.useState(0),
    [i, c] = $.useState(!0);
  return (
    $.useEffect(() => {
      if (r >= n.messages.length - 1) return;
      const o = setTimeout(() => l((x) => x + 1), 1200);
      return () => clearTimeout(o);
    }, [r, n.messages.length]),
    $.useEffect(() => {
      if (!t) return;
      l(n.messages.length - 1);
      const o = setTimeout(() => c(!1), 800);
      return () => clearTimeout(o);
    }, [t, n.messages.length]),
    e.jsx(W, {
      onExitComplete: a,
      children:
        i &&
        e.jsxs(d.div, {
          initial: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.5 },
          className: `echoes-loading-screen fixed inset-0 z-50 flex flex-col items-center justify-center ${n.bg}`,
          children: [
            e.jsx(d.div, {
              initial: { scale: 0.8, opacity: 0 },
              animate: { scale: [1, 1.06, 1], opacity: 1 },
              transition: {
                opacity: { duration: 0.4 },
                scale: { duration: 2.4, repeat: 1 / 0, ease: "easeInOut" },
              },
              className: `text-5xl mb-10 ${n.iconGlow}`,
              children: n.icon,
            }),
            e.jsx("div", {
              className: "h-6 flex items-center justify-center",
              children: e.jsx(W, {
                mode: "wait",
                children: e.jsx(
                  d.p,
                  {
                    initial: { opacity: 0, y: 6 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -6 },
                    transition: { duration: 0.25 },
                    className: `text-[13px] tracking-[0.12em] ${n.text}`,
                    children: n.messages[r],
                  },
                  r
                ),
              }),
            }),
            e.jsx("div", {
              className:
                "echoes-loading-progress-bar w-48 h-[2px] bg-white/[0.06] rounded-full mt-6 overflow-hidden",
              children: e.jsx(d.div, {
                className: `h-full origin-left rounded-full ${n.bar}`,
                initial: { scaleX: 0 },
                animate: { scaleX: t ? 1 : 0.85 },
                transition: t
                  ? { duration: 0.4, ease: "easeOut" }
                  : { duration: 18, ease: "linear" },
              }),
            }),
          ],
        }),
    })
  );
}
const Pe = (s) =>
    s.replace(/^[\s"'「」『』“”‘’…✧—─★☆]+|[\s"'「」『』“”‘’…✧—─★☆]+$/g, ""),
  R = (s) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: s * 0.12 },
  });
function Oe({ paper: s }) {
  const { masthead: t, headline: a, sections: n, ad: r, footer: l } = s;
  let i = 0;
  return e.jsxs("div", {
    className: "min-h-full bg-[#FDF6EC] text-[#1a1a1a] font-serif",
    children: [
      e.jsxs(d.div, {
        ...R(i++),
        className: "safe-top bg-[#d40000] px-5 py-4 text-center",
        children: [
          e.jsx("h1", {
            className:
              "text-3xl font-black tracking-[0.15em] text-[#FFD700] drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]",
            children: t.title,
          }),
          t.subtitle &&
            e.jsx("p", {
              className: "text-[11px] text-white/60 font-sans mt-0.5",
              children: t.subtitle,
            }),
          e.jsxs("div", {
            className:
              "flex items-center justify-center gap-3 mt-1 text-[11px] text-white/70",
            children: [
              e.jsx("span", { children: t.issue }),
              e.jsx("span", { className: "text-white/30", children: "|" }),
              e.jsx("span", { children: t.slogan }),
              t.price &&
                e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("span", {
                      className: "text-white/30",
                      children: "|",
                    }),
                    e.jsx("span", { children: t.price }),
                  ],
                }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "px-4 py-4 space-y-4",
        children: [
          e.jsxs(d.div, {
            ...R(i++),
            className: "border-b-2 border-[#d40000] pb-4",
            children: [
              a.tag &&
                e.jsx("span", {
                  className:
                    "inline-block bg-[#d40000] text-white text-[11px] font-bold px-2 py-0.5 rounded-sm mb-2",
                  children: a.tag,
                }),
              e.jsx("h2", {
                className:
                  "text-[22px] font-black leading-tight tracking-wide text-[#1a1a1a]",
                children: a.title,
              }),
              e.jsx("p", {
                className: "mt-2 text-[14px] leading-relaxed text-[#333]",
                children: a.body,
              }),
              a.pull &&
                e.jsxs(d.blockquote, {
                  ...R(i++),
                  className:
                    "mt-3 pl-3 border-l-4 border-[#d40000] text-[#d40000] font-bold text-[15px] italic",
                  children: ["「", Pe(a.pull), "」"],
                }),
            ],
          }),
          n.map((c, o) =>
            e.jsxs(
              d.div,
              {
                ...R(i++),
                className: "border-b border-[#e0d5c5] pb-3",
                children: [
                  c.tag &&
                    e.jsxs("span", {
                      className:
                        "text-[11px] font-bold text-[#d40000] tracking-wider mb-1 block",
                      children: ["▍", c.tag],
                    }),
                  e.jsx("h3", {
                    className: "text-[16px] font-bold leading-snug",
                    children: c.title,
                  }),
                  e.jsx("p", {
                    className: "mt-1 text-[13px] leading-relaxed text-[#444]",
                    children: c.body,
                  }),
                ],
              },
              o
            )
          ),
          e.jsxs(d.div, {
            ...R(i++),
            className:
              "bg-[#FFF8E8] border border-dashed border-[#d4a84b] rounded px-4 py-3 text-center",
            children: [
              e.jsx("p", {
                className: "text-[11px] text-[#999] mb-1",
                children: "── 广告 ──",
              }),
              e.jsx("p", {
                className: "text-[13px] text-[#8B7355] italic",
                children: r,
              }),
            ],
          }),
          l &&
            e.jsx(d.p, {
              ...R(i++),
              className: "text-center text-[11px] text-[#999] italic pt-2 pb-4",
              children: l,
            }),
        ],
      }),
    ],
  });
}
const Ye = (s) =>
    s.replace(/^[\s"'「」『』“”‘’…✧—─★☆]+|[\s"'「」『』“”‘’…✧—─★☆]+$/g, ""),
  P = (s) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: s * 0.12 },
  });
function Le({ paper: s }) {
  const { masthead: t, headline: a, sections: n, ad: r, footer: l } = s;
  let i = 0;
  return e.jsxs("div", {
    className: "min-h-full bg-[#1a0a0a] text-[#E8D5B5]",
    children: [
      e.jsxs(d.div, {
        ...P(i++),
        className:
          "safe-top bg-[#8B1A1A] px-5 py-4 text-center border-b-2 border-[#D4A84B]",
        children: [
          e.jsx("div", {
            className: "text-[#D4A84B] text-sm tracking-[0.3em] mb-1",
            children: "☆ ☆ ☆",
          }),
          e.jsx("h1", {
            className: "text-3xl font-black tracking-[0.2em] text-[#D4A84B]",
            children: t.title,
          }),
          t.subtitle &&
            e.jsx("p", {
              className: "text-[11px] text-[#D4A84B]/50 font-sans mt-0.5",
              children: t.subtitle,
            }),
          e.jsx("div", {
            className: "mt-1 text-[11px] text-[#E8D5B5]/40 tracking-wide",
            children: t.issue,
          }),
          e.jsx("div", {
            className: "text-[11px] text-[#E8D5B5]/40 tracking-wide",
            children: t.slogan,
          }),
        ],
      }),
      e.jsxs(d.div, {
        ...P(i++),
        className:
          "bg-[#6B1010] px-4 py-2 text-center text-[12px] text-[#D4A84B] tracking-[0.25em] font-bold border-b border-[#D4A84B]/20",
        children: [
          "★ Пролетарии всех стран, ★",
          e.jsx("br", {}),
          "★ соединяйтесь! ★",
        ],
      }),
      e.jsxs("div", {
        className: "px-4 py-4 space-y-4",
        children: [
          e.jsxs(d.div, {
            ...P(i++),
            className: "border-b border-[#D4A84B]/20 pb-4",
            children: [
              a.tag &&
                e.jsxs("span", {
                  className:
                    "inline-block bg-[#D4A84B] text-[#1a0a0a] text-[11px] font-bold px-2 py-0.5 mb-2",
                  children: ["▋ ", a.tag],
                }),
              e.jsx("h2", {
                className:
                  "text-[20px] font-black leading-tight tracking-wide text-[#D4A84B]",
                children: a.title,
              }),
              e.jsx("p", {
                className: "mt-2 text-[14px] leading-relaxed text-[#E8D5B5]/80",
                children: a.body,
              }),
              a.pull &&
                e.jsxs(d.blockquote, {
                  ...P(i++),
                  className:
                    "mt-3 pl-3 border-l-4 border-[#D4A84B] text-[#D4A84B]/90 font-bold text-[14px]",
                  children: ["——「", Ye(a.pull), "」"],
                }),
            ],
          }),
          n.map((c, o) =>
            e.jsxs(
              d.div,
              {
                ...P(i++),
                className: "border-b border-[#D4A84B]/10 pb-3",
                children: [
                  c.tag &&
                    e.jsxs("span", {
                      className:
                        "text-[11px] font-bold text-[#D4A84B]/70 tracking-[0.2em] mb-1 block",
                      children: ["▋ ", c.tag],
                    }),
                  e.jsx("h3", {
                    className:
                      "text-[15px] font-bold leading-snug text-[#D4A84B]/90",
                    children: c.title,
                  }),
                  e.jsx("p", {
                    className:
                      "mt-1 text-[13px] leading-relaxed text-[#E8D5B5]/60",
                    children: c.body,
                  }),
                ],
              },
              o
            )
          ),
          e.jsxs(d.div, {
            ...P(i++),
            className:
              "bg-[#2a1515] border border-[#D4A84B]/20 px-4 py-3 text-center",
            children: [
              e.jsx("p", {
                className:
                  "text-[11px] text-[#D4A84B]/40 mb-1 tracking-[0.2em]",
                children: "── 公 告 ──",
              }),
              e.jsx("p", {
                className: "text-[13px] text-[#E8D5B5]/50 italic",
                children: r,
              }),
            ],
          }),
          l &&
            e.jsx(d.p, {
              ...P(i++),
              className:
                "text-center text-[11px] text-[#E8D5B5]/30 italic pt-2 pb-4 tracking-wide",
              children: l,
            }),
          e.jsx(d.div, {
            ...P(i++),
            className: "text-center text-[#D4A84B]/30 text-sm pb-4",
            children: "☆ ☆ ☆",
          }),
        ],
      }),
    ],
  });
}
const U = (s) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: s * 0.12 },
});
function Re({ paper: s }) {
  const { masthead: t, headline: a, sections: n, ad: r, footer: l } = s;
  let i = 0;
  return e.jsxs("div", {
    className: "min-h-full bg-[#F5EBDA] text-[#3D3225]",
    children: [
      e.jsxs(d.div, {
        ...U(i++),
        className: "safe-top px-5 py-5 text-center border-b-2 border-[#8B7355]",
        children: [
          e.jsx("h1", {
            className:
              "text-3xl font-bold italic tracking-[0.1em] text-[#3D3225]",
            children: t.title,
          }),
          t.subtitle &&
            e.jsx("p", {
              className: "text-[11px] text-[#8B7355] font-sans mt-0.5 italic",
              children: t.subtitle,
            }),
          e.jsx("p", {
            className: "mt-2 text-[11px] text-[#8B7355]/70",
            children: t.issue,
          }),
          e.jsxs("p", {
            className: "text-[11px] text-[#8B7355]/70 mt-0.5",
            children: ["✦ ", t.slogan, t.price ? ` · ${t.price}` : "", " ✦"],
          }),
          e.jsxs("div", {
            className:
              "mt-3 flex items-center justify-center gap-2 text-[#8B7355]/40 text-[10px]",
            children: [
              e.jsx("span", {
                className: "flex-1 border-t border-[#8B7355]/30",
              }),
              e.jsx("span", { children: "⚡" }),
              e.jsx("span", {
                className: "flex-1 border-t border-[#8B7355]/30",
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "px-4 py-4 space-y-4",
        children: [
          e.jsxs(d.div, {
            ...U(i++),
            className: "pb-4",
            children: [
              a.tag &&
                e.jsx("span", {
                  className:
                    "inline-block border border-dashed border-[#8B7355] text-[#8B7355] text-[11px] px-2 py-0.5 rounded-sm mb-2 italic",
                  children: a.tag,
                }),
              e.jsx("h2", {
                className:
                  "text-[20px] font-bold italic leading-tight text-[#3D3225]",
                children: a.title,
              }),
              e.jsx("p", {
                className:
                  "mt-2 text-[14px] leading-relaxed text-[#5A4A38] italic",
                children: a.body,
              }),
              a.pull &&
                e.jsxs(d.blockquote, {
                  ...U(i++),
                  className:
                    "mt-3 px-4 py-2 border border-dashed border-[#8B7355]/50 rounded bg-[#EDE3D0] text-[#5A4A38] italic text-[14px] text-center",
                  children: ["✦ ", a.pull, " ✦"],
                }),
              e.jsxs("div", {
                className:
                  "mt-4 flex items-center gap-2 text-[#8B7355]/30 text-[10px]",
                children: [
                  e.jsx("span", {
                    className: "flex-1 border-t border-[#8B7355]/20",
                  }),
                  e.jsx("span", { children: "~" }),
                  e.jsx("span", {
                    className: "flex-1 border-t border-[#8B7355]/20",
                  }),
                ],
              }),
            ],
          }),
          n.map((c, o) =>
            e.jsxs(
              d.div,
              {
                ...U(i++),
                className: "pb-3",
                children: [
                  c.tag &&
                    e.jsxs("span", {
                      className:
                        "text-[11px] text-[#8B7355] italic tracking-wider mb-1 block",
                      children: ["— ", c.tag, " —"],
                    }),
                  e.jsx("h3", {
                    className:
                      "text-[15px] font-bold italic leading-snug text-[#3D3225]",
                    children: c.title,
                  }),
                  e.jsx("p", {
                    className:
                      "mt-1 text-[13px] leading-relaxed text-[#5A4A38]/80 italic",
                    children: c.body,
                  }),
                  e.jsxs("div", {
                    className:
                      "mt-3 flex items-center gap-2 text-[#8B7355]/30 text-[10px]",
                    children: [
                      e.jsx("span", {
                        className: "flex-1 border-t border-[#8B7355]/20",
                      }),
                      e.jsx("span", { children: "~" }),
                      e.jsx("span", {
                        className: "flex-1 border-t border-[#8B7355]/20",
                      }),
                    ],
                  }),
                ],
              },
              o
            )
          ),
          e.jsxs(d.div, {
            ...U(i++),
            className:
              "border border-dashed border-[#8B7355]/40 rounded-lg px-4 py-3 bg-[#EDE3D0]/60 text-center",
            children: [
              e.jsx("p", {
                className: "text-[11px] text-[#8B7355]/50 mb-1 italic",
                children: "— 魔法部公告 —",
              }),
              e.jsx("p", {
                className: "text-[13px] text-[#5A4A38]/70 italic",
                children: r,
              }),
            ],
          }),
          l &&
            e.jsx(d.p, {
              ...U(i++),
              className:
                "text-center text-[11px] text-[#8B7355]/50 italic pt-2 pb-4",
              children: l,
            }),
        ],
      }),
    ],
  });
}
const Ue = (s) =>
    s.replace(/^[\s"'「」『』“”‘’…✧—─★☆]+|[\s"'「」『』“”‘’…✧—─★☆]+$/g, ""),
  O = (s) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: s * 0.14 },
  });
function Ge({ paper: s }) {
  const { masthead: t, headline: a, sections: n, ad: r, footer: l } = s;
  let i = 0;
  return e.jsxs("div", {
    className: "min-h-full bg-[#F8F4EE] text-[#2C2824]",
    children: [
      e.jsxs(d.div, {
        ...O(i++),
        className: "safe-top px-6 pt-8 pb-5 text-center",
        children: [
          e.jsx("div", {
            className: "text-[10px] text-[#A09888] tracking-[0.4em] mb-2",
            children: "─── ✿ ───",
          }),
          e.jsx("h1", {
            className:
              "text-[26px] font-light tracking-[0.15em] text-[#2C2824]",
            children: t.title,
          }),
          t.subtitle &&
            e.jsx("p", {
              className:
                "text-[11px] text-[#A09888] font-sans mt-1 tracking-[0.1em]",
              children: t.subtitle,
            }),
          e.jsx("p", {
            className: "mt-3 text-[10px] text-[#A09888] tracking-[0.15em]",
            children: t.issue,
          }),
          e.jsxs("p", {
            className: "text-[10px] text-[#A09888] tracking-[0.15em] mt-0.5",
            children: [t.slogan, t.price ? ` · ${t.price}` : ""],
          }),
          e.jsx("div", { className: "mt-4 border-t border-[#D4CFC7]" }),
        ],
      }),
      e.jsxs("div", {
        className: "px-6 pb-6 space-y-5",
        children: [
          e.jsxs(d.div, {
            ...O(i++),
            children: [
              a.tag &&
                e.jsx("span", {
                  className:
                    "text-[10px] text-[#A09888] tracking-[0.2em] mb-2 block uppercase",
                  children: a.tag,
                }),
              e.jsx("h2", {
                className:
                  "text-[19px] font-normal leading-relaxed tracking-[0.05em] text-[#2C2824]",
                children: a.title,
              }),
              e.jsx("p", {
                className: "mt-3 text-[13.5px] leading-[1.9] text-[#4A4540]",
                children: a.body,
              }),
              a.pull &&
                e.jsxs(d.blockquote, {
                  ...O(i++),
                  className:
                    "mt-4 px-5 py-3 text-center text-[13px] italic text-[#7A7060] leading-relaxed",
                  children: ["“", Ue(a.pull), "”"],
                }),
              e.jsxs("div", {
                className: "mt-5 flex items-center gap-3 text-[#C4BFB5]",
                children: [
                  e.jsx("span", {
                    className: "flex-1 border-t border-[#D4CFC7]",
                  }),
                  e.jsx("span", { className: "text-[9px]", children: "✦" }),
                  e.jsx("span", {
                    className: "flex-1 border-t border-[#D4CFC7]",
                  }),
                ],
              }),
            ],
          }),
          n.map((c, o) =>
            e.jsxs(
              d.div,
              {
                ...O(i++),
                children: [
                  c.tag &&
                    e.jsx("span", {
                      className:
                        "text-[10px] text-[#A09888] tracking-[0.2em] mb-2 block",
                      children: c.tag,
                    }),
                  e.jsx("h3", {
                    className:
                      "text-[15px] font-normal leading-relaxed tracking-[0.04em] text-[#2C2824]",
                    children: c.title,
                  }),
                  e.jsx("p", {
                    className: "mt-2 text-[13px] leading-[1.85] text-[#5A5550]",
                    children: c.body,
                  }),
                  e.jsxs("div", {
                    className: "mt-4 flex items-center gap-3 text-[#C4BFB5]",
                    children: [
                      e.jsx("span", {
                        className: "flex-1 border-t border-[#D4CFC7]",
                      }),
                      e.jsx("span", { className: "text-[9px]", children: "✦" }),
                      e.jsx("span", {
                        className: "flex-1 border-t border-[#D4CFC7]",
                      }),
                    ],
                  }),
                ],
              },
              o
            )
          ),
          e.jsxs(d.div, {
            ...O(i++),
            className: "border border-[#D4CFC7] rounded px-5 py-4 text-center",
            children: [
              e.jsx("p", {
                className: "text-[10px] text-[#A09888] tracking-[0.15em] mb-2",
                children: "── 告  示 ──",
              }),
              e.jsx("p", {
                className:
                  "text-[12.5px] text-[#7A7060] italic leading-relaxed",
                children: r,
              }),
            ],
          }),
          l &&
            e.jsx(d.p, {
              ...O(i++),
              className:
                "text-center text-[11px] text-[#A09888] pt-3 pb-2 tracking-[0.08em]",
              children: l,
            }),
          e.jsx(d.div, {
            ...O(i++),
            className:
              "text-center text-[10px] text-[#C4BFB5] tracking-[0.4em] pb-4",
            children: "─── ✿ ───",
          }),
        ],
      }),
    ],
  });
}
const He = (s) =>
    s.replace(/^[\s"'「」『』“”‘’…✧—─★☆]+|[\s"'「」『』“”‘’…✧—─★☆]+$/g, ""),
  Y = (s) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, delay: 0.3 + s * 0.18 },
  });
function ze({ paper: s }) {
  const { masthead: t, headline: a, sections: n, ad: r, footer: l } = s;
  let i = 0;
  return e.jsxs("div", {
    className:
      "min-h-full bg-[#0A0908] text-[#8B7D6B] relative overflow-hidden",
    children: [
      e.jsx("div", {
        className:
          "pointer-events-none absolute inset-0 flex items-start justify-center",
        children: e.jsx("div", {
          className:
            "mt-32 h-64 w-64 rounded-full bg-[#C4854A]/[0.04] blur-[80px]",
        }),
      }),
      e.jsxs("div", {
        className: "relative z-10",
        children: [
          e.jsxs(d.div, {
            ...Y(i++),
            className: "safe-top px-6 pt-10 pb-6 text-center",
            children: [
              e.jsx("h1", {
                className:
                  "text-[22px] font-light tracking-[0.25em] text-[#C4854A]/75",
                children: t.title,
              }),
              t.subtitle &&
                e.jsx("p", {
                  className:
                    "text-[10px] text-[#8B7D6B]/40 font-sans mt-1 tracking-[0.15em]",
                  children: t.subtitle,
                }),
              e.jsx("p", {
                className:
                  "mt-3 text-[10px] text-[#8B7D6B]/35 tracking-[0.2em]",
                children: t.issue,
              }),
              e.jsx("div", {
                className: "mt-4 mx-auto w-12 border-t border-[#C4854A]/15",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "px-6 pb-8 space-y-6",
            children: [
              e.jsxs(d.div, {
                ...Y(i++),
                children: [
                  a.tag &&
                    e.jsx("span", {
                      className:
                        "text-[10px] text-[#C4854A]/45 tracking-[0.2em] mb-3 block",
                      children: a.tag,
                    }),
                  e.jsx("h2", {
                    className:
                      "text-[17px] font-light leading-relaxed tracking-[0.08em] text-[#C4854A]/65",
                    children: a.title,
                  }),
                  e.jsx("p", {
                    className: "mt-3 text-[13px] leading-[2] text-[#8B7D6B]/60",
                    children: a.body,
                  }),
                  a.pull &&
                    e.jsxs(d.p, {
                      ...Y(i++),
                      className:
                        "mt-4 text-center text-[12px] text-[#C4854A]/40 italic tracking-wider",
                      children: ["……", He(a.pull), "……"],
                    }),
                ],
              }),
              e.jsx("div", {
                className: "mx-auto w-8 border-t border-[#C4854A]/10",
              }),
              n.map((c, o) =>
                e.jsxs(
                  d.div,
                  {
                    ...Y(i++),
                    children: [
                      c.tag &&
                        e.jsxs("span", {
                          className:
                            "text-[10px] text-[#8B7D6B]/35 tracking-[0.2em] mb-2 block",
                          children: ["〔", c.tag, "〕"],
                        }),
                      e.jsx("h3", {
                        className:
                          "text-[14px] font-light tracking-[0.06em] text-[#C4854A]/55",
                        children: c.title,
                      }),
                      e.jsx("p", {
                        className:
                          "mt-2 text-[12.5px] leading-[2] text-[#8B7D6B]/50",
                        children: c.body,
                      }),
                      o < n.length - 1 &&
                        e.jsx("div", {
                          className:
                            "mt-5 mx-auto w-6 border-t border-[#C4854A]/8",
                        }),
                    ],
                  },
                  o
                )
              ),
              e.jsx("div", {
                className: "mx-auto w-8 border-t border-[#C4854A]/10",
              }),
              e.jsx(d.div, {
                ...Y(i++),
                className: "text-center",
                children: e.jsx("p", {
                  className: "text-[12px] text-[#8B7D6B]/40 italic leading-[2]",
                  children: r,
                }),
              }),
              l &&
                e.jsx(d.p, {
                  ...Y(i++),
                  className:
                    "text-center text-[11px] text-[#8B7D6B]/30 italic pt-4 tracking-wider",
                  children: l,
                }),
              e.jsx(d.div, {
                ...Y(i++),
                className:
                  "text-center text-[#C4854A]/15 text-[10px] tracking-[0.6em] pb-6",
                children: "· · ·",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Q = { hk: Oe, ussr: Le, prophet: Re, victorian: Ge, souls: ze },
  Je = ["hk", "ussr", "prophet", "victorian", "souls"],
  Ke = [
    {
      id: "hk",
      name: "猛料快報",
      subtitle: "Hong Kong Tabloid",
      desc: "全城最快，獨家猛料",
      Icon: ne,
      color: "#d40000",
      bg: "bg-[linear-gradient(135deg,#2a0000,#440000)]",
    },
    {
      id: "ussr",
      name: "真理报",
      subtitle: "Soviet Bulletin",
      desc: "观测者委员会机关报",
      Icon: de,
      color: "#D4A84B",
      bg: "bg-[linear-gradient(135deg,#1a0a0a,#2a1515)]",
    },
    {
      id: "prophet",
      name: "预言家日报",
      subtitle: "Daily Prophet",
      desc: "巫师界一切值得知道的事",
      Icon: xe,
      color: "#C4A265",
      bg: "bg-[linear-gradient(135deg,#1a1508,#2a2010)]",
    },
    {
      id: "victorian",
      name: "社交季刊",
      subtitle: "Victorian Gazette",
      desc: "一切值得低声谈论之事",
      Icon: he,
      color: "#C4B99A",
      bg: "bg-[linear-gradient(135deg,#141210,#1f1c18)]",
    },
    {
      id: "souls",
      name: "篝火残页",
      subtitle: "Soulsborne Fragments",
      desc: "…………",
      Icon: pe,
      color: "#C4854A",
      bg: "bg-[linear-gradient(135deg,#060504,#0D0B09)]",
    },
  ];
function ee() {
  const s = new Date(Date.now() - 144e5),
    t = new Date(s.getFullYear(), s.getMonth(), s.getDate());
  return (
    t.setDate(t.getDate() - 1),
    `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(
      t.getDate()
    ).padStart(2, "0")}`
  );
}
function nt() {
  const {
      setCurrentApp: s,
      messages: t,
      chats: a,
      characters: n,
      users: r,
      npcs: l,
      knowledge: i,
      setCharacters: c,
      setUsers: o,
      setNpcs: x,
      apiPresets: y,
      activePresetId: w,
      worldBooks: u,
    } = ie(),
    k = w ? y.find((m) => m.id === w) : void 0,
    [v, C] = $.useState({ kind: "list" }),
    [f, B] = $.useState(new Set()),
    [_, T] = $.useState(!1),
    S = $.useRef(null);
  $.useEffect(() => {
    const m = ee();
    Promise.all(
      Je.map(async (b) => {
        const h = await V(m, b);
        return h ? (K(h) ? b : (await J(m, b), null)) : null;
      })
    ).then((b) => {
      const h = new Set(b.filter((j) => j !== null));
      h.size > 0 && B(h);
    });
  }, []);
  const F = $.useCallback(
      async (m) => {
        const b = ee(),
          h = await V(b, m);
        if (h)
          if (!K(h))
            await J(b, m),
              B((j) => {
                const A = new Set(j);
                return A.delete(m), A;
              });
          else {
            C({ kind: "paper", paper: h });
            return;
          }
        T(!1), (S.current = null), C({ kind: "loading", style: m });
        try {
          const j = await Z({
            style: m,
            messages: t,
            chats: a,
            characters: n,
            users: r,
            npcs: l,
            knowledge: i,
            preset: k,
            worldBooks: u,
            onCharactersUpdate: c,
            onUsersUpdate: o,
            onNpcsUpdate: x,
          });
          (S.current = j), B((A) => new Set(A).add(m)), T(!0);
        } catch (j) {
          console.error("[百相] 生成失败", j), C({ kind: "list" });
        }
      },
      [t, a, n, r, l, i, k, u, c, o, x]
    ),
    g = $.useCallback(() => {
      C(S.current ? { kind: "paper", paper: S.current } : { kind: "list" });
    }, []),
    M = {
      hk: "bg-[#FDF6EC]",
      ussr: "bg-[#1a0a0a]",
      prophet: "bg-[#F5EBDA]",
      victorian: "bg-[#F8F4EE]",
      souls: "bg-[#0A0908]",
    };
  if (v.kind === "loading") {
    const m = S.current,
      b = m ? Q[m.style] : null;
    return e.jsxs("div", {
      className: `echoes-baixiang-paper h-full relative ${m ? M[m.style] : ""}`,
      children: [
        m &&
          b &&
          e.jsx("div", {
            className: "absolute inset-0 overflow-y-auto",
            children: e.jsx(b, { paper: m }),
          }),
        e.jsx(Me, { styleId: v.style, done: _, onComplete: g }),
      ],
    });
  }
  if (v.kind === "paper") {
    const m = Q[v.paper.style],
      h =
        v.paper.style === "ussr" || v.paper.style === "souls"
          ? "bg-white/[0.06] border-white/[0.08] text-white/25 hover:text-white/40 hover:bg-white/[0.1]"
          : "bg-black/[0.05] border-black/[0.08] text-black/25 hover:text-black/40 hover:bg-black/[0.08]";
    return e.jsx("div", {
      className: `echoes-baixiang-paper h-full flex flex-col ${
        M[v.paper.style]
      }`,
      children: e.jsxs("div", {
        className: "flex-1 overflow-y-auto",
        children: [
          e.jsx(m, { paper: v.paper }),
          e.jsxs("div", {
            className: "flex justify-center items-center gap-3 py-6",
            children: [
              e.jsx("button", {
                onClick: () => C({ kind: "list" }),
                className: `px-6 py-2.5 rounded-full border text-[13px] transition-all tracking-wider ${h}`,
                children: "← 返回百相",
              }),
              e.jsx("button", {
                onClick: async () => {
                  const j = v.paper.style;
                  await J(v.paper.date, j),
                    B((A) => {
                      const E = new Set(A);
                      return E.delete(j), E;
                    }),
                    T(!1),
                    (S.current = null),
                    C({ kind: "loading", style: j });
                  try {
                    const A = await Z({
                      style: j,
                      messages: t,
                      chats: a,
                      characters: n,
                      users: r,
                      npcs: l,
                      knowledge: i,
                      preset: k,
                      worldBooks: u,
                      onCharactersUpdate: c,
                      onUsersUpdate: o,
                      onNpcsUpdate: x,
                    });
                    (S.current = A), B((E) => new Set(E).add(j)), T(!0);
                  } catch (A) {
                    console.error("[百相] 重新生成失败", A),
                      C({ kind: "list" });
                  }
                },
                className: `echoes-baixiang-refresh-btn p-2.5 rounded-full border transition-all ${h}`,
                children: e.jsx(ce, { className: "w-3.5 h-3.5" }),
              }),
            ],
          }),
        ],
      }),
    });
  }
  return e.jsxs("div", {
    className:
      "echoes-page echoes-page-baixiang h-full flex flex-col text-[#E8E0D0]",
    children: [
      e.jsx("div", {
        className:
          "echoes-page-header safe-top pb-4 px-4 bg-white/[0.03] backdrop-blur-md border-b border-white/[0.06] sticky top-0 z-10",
        children: e.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            e.jsx("button", {
              onClick: () => s("home"),
              className:
                "echoes-baixiang-back-btn p-1.5 -ml-1.5 rounded-full hover:bg-white/10 text-[#6B6255] hover:text-[#A89B85] transition-colors",
              children: e.jsx(oe, { className: "w-6 h-6" }),
            }),
            e.jsxs("div", {
              className: "min-w-0 flex-1",
              children: [
                e.jsx("h1", {
                  className: "text-2xl font-bold text-[#E8E0D0]/70",
                  children: "百相",
                }),
                e.jsx("p", {
                  className: "text-[11px] text-[#6B6255] mt-0.5",
                  children: "同一个世界的不同面相",
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsxs("div", {
        className: "flex-1 overflow-y-auto px-4 py-5 space-y-3",
        children: [
          Ke.map(
            ({
              id: m,
              name: b,
              subtitle: h,
              desc: j,
              Icon: A,
              color: E,
              bg: p,
            }) =>
              e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => F(m),
                  className: `echoes-baixiang-card w-full flex items-center gap-4 rounded-xl border border-white/[0.06] px-5 py-4 text-left transition-all hover:brightness-125 ${p}`,
                  children: [
                    e.jsx("div", {
                      className:
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-white/[0.04]",
                      children: e.jsx(A, {
                        className: "w-5 h-5",
                        style: { color: E },
                        strokeWidth: 1.6,
                      }),
                    }),
                    e.jsxs("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        e.jsx("div", {
                          className: "text-[17px] font-bold tracking-[0.12em]",
                          style: { color: E },
                          children: b,
                        }),
                        e.jsx("div", {
                          className:
                            "text-[11px] text-white/35 font-sans mt-0.5",
                          children: h,
                        }),
                        e.jsx("div", {
                          className: "text-[12px] text-white/25 italic mt-1",
                          children: j,
                        }),
                      ],
                    }),
                    e.jsx("span", {
                      className: "shrink-0 text-[11px] text-white/20 font-sans",
                      children: f.has(m) ? "已生成 →" : "生成 →",
                    }),
                  ],
                },
                m
              )
          ),
          e.jsx("p", {
            className:
              "text-center text-[11px] text-[#3D3730] italic pt-5 tracking-wide",
            children: "素材来源：昨日全局聊天记录",
          }),
        ],
      }),
    ],
  });
}
export { nt as default };
