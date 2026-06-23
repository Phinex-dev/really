import { j as G } from "./gemini-CeriFUnH.js";
import { a as Y } from "./wallet-C4f3BB2q.js";
import { j as S, I as P, aH as H, aJ as V } from "./App-CYgIjxWH.js";
const q = 12e4;
function z(e, t, r) {
  return new Promise((a, n) => {
    const i = setTimeout(
      () => n(new Error(`${r}超时（${t / 1e3}s），请检查网络或 API 状态`)),
      t
    );
    e.then(a, n).finally(() => clearTimeout(i));
  });
}
const $ = { frugal: 0.3, moderate: 0.5, generous: 0.7, extravagant: 0.9 };
function L(e) {
  return e <= 500 ? e : 500 + 500 * Math.log(e / 500);
}
const J = { frugal: 0.03, moderate: 0.07, generous: 0.12, extravagant: 0.18 },
  Q = { frugal: 80, moderate: 160, generous: 320, extravagant: 600 };
function X(e) {
  return !(
    e.subType === "ooc" ||
    e.subType === "date_ooc" ||
    e.type === "gift" ||
    e.type === "transfer"
  );
}
function Z(e) {
  const {
      entityId: t,
      messages: r,
      chats: a,
      allCharacters: n,
      allUsers: i,
      maxMessages: l = 30,
      maxChars: o = 1200,
    } = e,
    c = new Map(a.map((p) => [p.id, p])),
    u = S.getVisibleUnrecappedMessagesForEntity({
      entityId: t,
      messages: r,
      chats: a,
      limit: l * 2,
    })
      .filter(X)
      .reverse();
  if (u.length === 0) return "暂无可参考的非商城聊天消费线索。";
  const g = u.map((p) => {
    const f = c.get(p.chatId),
      M = S.resolveMessageSenderName(p.senderId, n, i);
    return S.formatMessageForCompactPrompt(p, M, f == null ? void 0 : f.name);
  });
  let y = 0;
  const m = [];
  for (let p = g.length - 1; p >= 0; p -= 1) {
    const f = g[p],
      M = y + f.length + (m.length > 0 ? 1 : 0);
    if (!(M > o) && (m.unshift(f), (y = M), m.length >= l)) break;
  }
  return m.length > 0
    ? m.join(`
`)
    : "暂无可参考的非商城聊天消费线索。";
}
function ee(e, t, r) {
  const a = e
    .filter(
      (n) =>
        n.entityType === "character" &&
        n.entityId === t &&
        n.dateKey !== r &&
        !!n.dailyExpense
    )
    .sort((n, i) => i.dateKey.localeCompare(n.dateKey))
    .slice(0, 6)
    .map((n) => {
      var o;
      const i =
          (o = n.expenseEntries) == null
            ? void 0
            : o.map((c) => c.label).filter(Boolean),
        l = i && i.length > 0 ? i.join("、") : n.expenseSummary || "日常消费";
      return `- ${n.dateKey}: ${l}（¥${n.dailyExpense}）`;
    });
  return a.length > 0
    ? a.join(`
`)
    : "最近没有已记录的日常消费。";
}
function te(e, t, r, a, n) {
  if (!e) return;
  const i = r.slice(0, 7),
    l = n.filter(
      (h) =>
        !(h.entityType === "character" && h.entityId === t && h.dateKey === r)
    ),
    o = Math.max(0, Y(e, a, l)),
    c = l
      .filter(
        (h) =>
          h.entityType === "character" &&
          h.entityId === t &&
          h.dateKey.startsWith(i) &&
          !!h.dailyExpense
      )
      .reduce((h, b) => h + (b.dailyExpense || 0), 0),
    u = a
      .filter(
        (h) =>
          h.fromType === "character" &&
          h.fromId === t &&
          h.dateKey.startsWith(i) &&
          ["transfer_out", "gift_purchase"].includes(h.type) &&
          h.transferStatus !== "returned"
      )
      .reduce((h, b) => h + b.amount, 0),
    g = Math.max(0, e.monthlyDisposable - c - u),
    y = Math.max(e.monthlyDisposable / 30, 0),
    m = e.spendingStyle ?? "moderate",
    p = $[m] ?? 0.5,
    f = L(y) * p,
    M = Math.min(
      y * (m === "extravagant" ? 0.4 : m === "generous" ? 0.3 : 0.2),
      3e4
    ),
    C = Math.round(Math.max(Q[m] ?? 160, f * 3.2 + M));
  return { currentBalance: o, remainingMonthlyDisposable: g, todayCap: C };
}
function ne(e, t, r) {
  if (t <= 0) return [];
  const a = e
    .map((o) => ({
      label: String(o.label || "").trim(),
      amount: Math.max(0, Math.round(Number(o.amount) || 0)),
    }))
    .filter((o) => o.label)
    .slice(0, 3);
  if (a.length === 0) return [{ label: r || "日常消费", amount: t }];
  const n = a.reduce((o, c) => o + c.amount, 0);
  if (n <= 0) {
    const o = Math.floor(t / a.length);
    let c = t - o * a.length;
    return a.map((u, g) => ({
      ...u,
      amount: o + (g === a.length - 1 ? c : 0),
    }));
  }
  let i = 0;
  const l = a
    .map((o, c) => {
      if (c === a.length - 1) return { ...o, amount: Math.max(t - i, 0) };
      const u = Math.max(0, Math.round(t * (o.amount / n)));
      return (i += u), { ...o, amount: u };
    })
    .filter((o) => o.amount > 0);
  return l.length > 0 ? l : [{ label: r || a[0].label, amount: t }];
}
function F(e, t) {
  return e
    ? t
      ? Math.max(0, Math.min(e.remainingMonthlyDisposable, e.currentBalance))
      : Math.max(
          0,
          Math.min(e.todayCap, e.remainingMonthlyDisposable, e.currentBalance)
        )
    : Number.POSITIVE_INFINITY;
}
function re(e, t, r) {
  const a = t.monthlyDisposable / 30,
    n = t.spendingStyle ?? "moderate",
    i = L(a) * ($[n] ?? 0.5),
    l = Math.random() < (J[n] ?? 0.07),
    o = l ? 1.5 + Math.random() * 2.5 : 1,
    c = l ? a * ($[n] ?? 0.5) * o : i,
    u = Math.round(Math.max(c * (0.6 + Math.random() * 0.8), 0)),
    g = F(r, !1),
    y = Math.round(Math.max(0, Math.min(u, g))),
    m = e.items
      .filter((f) => f.kind !== "temporary")
      .slice(0, 3)
      .map((f) => f.title),
    p = m.length > 0 ? m.join("、") : "日常消费";
  return {
    amount: y,
    summary: p,
    entries: y > 0 ? [{ label: p, amount: y }] : [],
  };
}
function D(e, t, r, a) {
  if (!t) return e;
  const n = re(e, t, r);
  if (!a)
    return {
      ...e,
      dailyExpense: n.amount,
      expenseSummary: n.summary,
      expenseEntries: n.entries,
    };
  const i = Math.round(Math.max(0, a.amount)),
    l = F(r, a.allowLargePurchase),
    o = Math.max(0, Math.min(i, l));
  if (o <= 0)
    return {
      ...e,
      dailyExpense: n.amount,
      expenseSummary: n.summary,
      expenseEntries: n.entries,
    };
  const c =
      String(a.summary || "").trim() ||
      a.entries.map((g) => g.label).join("、") ||
      n.summary,
    u = ne(a.entries, o, c);
  return { ...e, dailyExpense: o, expenseSummary: c, expenseEntries: u };
}
function ae(e, t) {
  const r = new Date(`${e}T12:00:00`);
  r.setDate(r.getDate() + t);
  const a = r.getFullYear(),
    n = String(r.getMonth() + 1).padStart(2, "0"),
    i = String(r.getDate()).padStart(2, "0");
  return `${a}-${n}-${i}`;
}
function oe(e, t, r, a) {
  return e === "character"
    ? r.find((n) => n.id === t)
    : a.find((n) => n.id === t);
}
function se(e) {
  const { dateKey: t, mapId: r, worldCalendarEvents: a } = e;
  return a.filter((n) => n.dateKey === t && n.mapId === r);
}
function ie(e) {
  const { dateKey: t, characterId: r, userAnchors: a } = e;
  return a.filter((n) =>
    n.dateKey !== t
      ? !1
      : n.visibilityMode === "all"
      ? !0
      : n.visibleToCharacterIds.includes(r)
  );
}
function le(e) {
  return `${e.emoji ? `${e.emoji} ` : ""}${e.title}`.trim();
}
function ce(e, t, r) {
  var a, n;
  return e.anchorType === "birthday"
    ? `今天是${
        e.entityType === "character"
          ? ((a = t.find((l) => l.id === e.entityId)) == null
              ? void 0
              : a.name) ||
            e.shortLabel ||
            "某人"
          : ((n = r.find((l) => l.id === e.entityId)) == null
              ? void 0
              : n.name) ||
            e.shortLabel ||
            "观察者"
      }的生日`
    : `今天是纪念日：${e.shortLabel}`;
}
function de(e) {
  const {
      dateKey: t,
      entityType: r,
      entityId: a,
      mapId: n,
      worldCalendarEvents: i,
      userAnchors: l,
      characters: o,
      users: c,
    } = e,
    u = se({ dateKey: t, mapId: n, worldCalendarEvents: i }),
    g =
      r === "character"
        ? ie({ dateKey: t, characterId: a, userAnchors: l })
        : [],
    y = [];
  return (
    u.length > 0 &&
      y.push(`今日世界事件：
${u.map((m) => `- ${le(m)}`).join(`
`)}`),
    g.length > 0 &&
      y.push(`今日日期锚点：
${g.map((m) => `- ${ce(m, o, c)}`).join(`
`)}`),
    y.length > 0
      ? y.join(`

`)
      : void 0
  );
}
function pe(e, t) {
  return [
    ...e.filter(
      (r) =>
        !(
          r.entityType === t.entityType &&
          r.entityId === t.entityId &&
          r.dateKey === t.dateKey
        )
    ),
    t,
  ];
}
function fe(e, t, r) {
  return `${e}:${t}:${r}`;
}
async function ge(e) {
  const {
      entityType: t,
      entityId: r,
      dateKey: a,
      binding: n,
      places: i,
      worldMaps: l,
      dailyPlans: o,
      characters: c,
      users: u,
      knowledge: g,
      messages: y,
      chats: m,
      preset: p,
      characterFinancials: f,
      transactions: M = [],
      worldCalendarEvents: C = [],
      userAnchors: h = [],
      socialRelations: b = [],
      worldBooks: B,
    } = e,
    x =
      t === "character"
        ? f == null
          ? void 0
          : f.find((s) => s.characterId === r)
        : void 0,
    T = oe(t, r, c, u),
    v = l.find((s) => s.id === n.currentMapId),
    w = i.filter((s) => s.mapId === n.currentMapId),
    N = de({
      dateKey: a,
      entityType: t,
      entityId: r,
      mapId: n.currentMapId,
      worldCalendarEvents: C,
      userAnchors: h,
      characters: c,
      users: u,
    }),
    j = o.find(
      (s) => s.entityType === t && s.entityId === r && s.dateKey === ae(a, -1)
    ),
    _ = t === "character" ? S.getRecentKnowledgeForSchedule(g, r) : [],
    A =
      y && m
        ? Z({
            entityId: r,
            messages: y,
            chats: m,
            allCharacters: c,
            allUsers: u,
          })
        : void 0,
    k = t === "character" ? ee(o, r, a) : void 0,
    E = t === "character" ? te(x, r, a, M, o) : void 0,
    U = (() => {
      const s = new Set(
          b
            .filter((d) => d.fromEntityId === r || d.toEntityId === r)
            .map((d) => (d.fromEntityId === r ? d.toEntityId : d.fromEntityId))
        ),
        I = [];
      for (const d of c)
        d.id !== r &&
          d.gender &&
          s.has(d.id) &&
          I.push(`- ${d.name}：${d.gender}`);
      for (const d of u)
        d.id !== r &&
          d.gender &&
          s.has(d.id) &&
          I.push(`- ${d.name}：${d.gender}`);
      return I.length > 0
        ? I.join(`
`)
        : void 0;
    })();
  let K;
  if (!T || !v) {
    const s = P({
      entityType: t,
      entityId: r,
      binding: n,
      places: i,
      dateKey: a,
    });
    return { plan: D(s, x, E), usage: null };
  }
  const R = H(n)
    .filter((s) => s.placeId)
    .map((s) => {
      const I = w.find((d) => d.id === s.placeId);
      return {
        intentLabel: V(s),
        placeName: (I == null ? void 0 : I.name) || "",
        placeId: s.placeId,
        note: s.note || "",
      };
    })
    .filter((s) => s.placeName);
  try {
    const {
      items: s,
      usage: I,
      dailySpending: d,
    } = await z(
      G({
        entityType: t,
        entityId: r,
        entity: T,
        dateKey: a,
        mapId: n.currentMapId,
        worldMap: v,
        mapPlaces: w,
        anchorDetails: R,
        recentKnowledge: _,
        worldContext: N,
        recentChatContext: A,
        recentSpendingContext: k,
        previousDayPlan: j,
        financials: x,
        spendingBudget: E,
        peopleGenderRef: U,
        preset: p,
        worldBooks: B,
      }),
      q,
      "日程自由生成"
    );
    if (s.length > 0) {
      const W = {
        id: `${t}-${r}-${a}`,
        entityType: t,
        entityId: r,
        dateKey: a,
        mapId: n.currentMapId,
        generatedAt: Date.now(),
        status: "final",
        items: s,
      };
      return { plan: D(W, x, E, d), usage: I };
    }
  } catch (s) {
    console.error("Free-form daily plan generation failed, falling back:", s),
      (K = { stage: "free", error: s });
  }
  const O = P({
    entityType: t,
    entityId: r,
    binding: n,
    places: i,
    dateKey: a,
  });
  return { plan: D(O, x, E), usage: null, generationError: K };
}
export { ge as b, fe as g, pe as u };
