import { f as S, h as T } from "./gemini-CeriFUnH.js";
import { b as I } from "./worldBookScopes-B0JaUaci.js";
function _(n) {
  return (n.incomeSources ?? []).reduce((r, t) => r + t.amount, 0);
}
async function M(n) {
  const { character: c, userId: r, preset: t, workPlace: e, worldBooks: a } = n,
    y = `${I(
      a,
      "wallet_finance"
    )}你是一个角色设定分析工具。根据以下角色介绍，合理推断其经济状况。

## 角色信息
- 名字：${c.name}
- 性别：${c.gender || "未知"}
- 简介：${c.intro || "无"}
- 背景：${c.background || "无"}${
      e
        ? `
- 工作/上学地点：${e.name}${
            e.description
              ? `
  地点描述：${e.description}`
              : ""
          }
  请结合该地点信息推断角色在此处的具体职业或身份`
        : ""
    }

## 要求
根据角色的职业、家庭背景、生活方式、性格等线索，推断其经济状况和收入结构。

收入来源说明：
- 角色可能有多种收入来源，不仅仅是工资。比如：家族供养、信托收益、投资理财、自由职业、经营收入等。
- 如果角色月薪很低但家境优越或有大量存款，说明有其他收入来源支撑其生活水平。
- 无业角色也可能有家庭生活费、被动收入等。
- 如果角色有明确的工作/上学地点，说明角色在该地点有固定职务或学业，对应的收入应为 salary 类型，label 应包含该地点名称（如"星光咖啡馆月薪"）。
- 每项收入的 type 取值：salary（在固定场所工作的工资/薪酬）、family（家族/家庭供养）、investment（投资收益）、freelance（无固定工作场所的自由职业/兼职）、other（其他）
- 重要：如果角色有投资/理财资产（investmentAssets > 0），则 incomeSources 中必须包含一条 type 为 investment 的收入，金额为合理的月均投资收益。如果投资资产为 0 或极少则不需要。

月可支配额度 monthlyDisposable 说明：
- 等于「所有收入来源加总 - 固定月支出」后的可自由花费金额。
- 这是角色每个月用于日常消费、社交、购物等的预算。

请以严格 JSON 格式输出（不要包含任何其他文字）：
{
  "incomeSources": [
    { "label": "<来源标签，简短中文，如'星光咖啡馆月薪'>", "amount": <月金额，数字>, "type": "<salary|family|investment|freelance|other>" }
  ],
  "monthlyDisposable": <月可支配额度，数字>,
  "savings": <当前存款，数字>,
  "fixedMonthlyExpense": <月固定支出（房租、交通、订阅等），数字>,
  "investmentAssets": <投资/理财资产，没有填 0，数字>,
  "spendingStyle": "<frugal|moderate|generous|extravagant>",
  "currency": "CNY",
  "financialPersonality": "<一句话描述这个角色目前的财务心态，10-20字，要贴合角色性格，不要千篇一律>",
  "spendingDescription": "<一两句话描述这个角色个性化的花钱习惯和态度，要有趣味和细节，20-40字>",
  "investmentDescription": "<如果 investmentAssets > 0，写一句角色风格的理财描述；如果没有投资则填空字符串>"
}`,
    { content: b, usage: m } = await S(t, y, !0),
    l = T(b);
  let o;
  try {
    o = JSON.parse(l);
  } catch {
    throw new Error(
      "AI 返回的数据格式不完整，请检查模型的 max_tokens 设置后重试"
    );
  }
  const d = new Date(),
    g = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`,
    x = new Set(["salary", "family", "investment", "freelance", "other"]),
    f = Array.isArray(o.incomeSources)
      ? o.incomeSources
          .filter(
            (i) => i && typeof i.amount == "number" && i.amount > 0 && i.label
          )
          .map((i) => ({
            label: String(i.label).trim(),
            amount: Math.round(Number(i.amount)),
            type: x.has(i.type) ? i.type : "other",
          }))
      : [{ label: "月收入", amount: 5e3, type: "salary" }],
    h = f.reduce((i, v) => i + v.amount, 0),
    s = Number(o.fixedMonthlyExpense) || 2e3,
    p = Number(o.monthlyDisposable) || Math.max(h - s, 0);
  return {
    financials: {
      userId: r,
      characterId: c.id,
      incomeSources: f,
      monthlyDisposable: p,
      savings: Number(o.savings) || 1e4,
      fixedMonthlyExpense: s,
      investmentAssets: Number(o.investmentAssets) || 0,
      spendingStyle: ["frugal", "moderate", "generous", "extravagant"].includes(
        o.spendingStyle
      )
        ? o.spendingStyle
        : "moderate",
      currency: o.currency || "CNY",
      initializedAt: Date.now(),
      lastPayday: g,
      financialPersonality: o.financialPersonality || "",
      spendingDescription: o.spendingDescription || "",
      investmentDescription: o.investmentDescription || "",
    },
    usage: m,
  };
}
function w(n, c, r) {
  let t = n.savings;
  for (const e of c) {
    const a = e.fromType === "character" && e.fromId === n.characterId,
      u = e.toType === "character" && e.toId === n.characterId;
    switch (e.type) {
      case "salary":
        u && (t += e.amount);
        break;
      case "fixed_expense":
        a && (t -= e.amount);
        break;
      case "transfer_out":
        a && e.transferStatus !== "returned" && (t -= e.amount);
        break;
      case "transfer_in":
        u && e.transferStatus !== "returned" && (t += e.amount);
        break;
      case "gift_purchase":
        a && (t -= e.amount);
        break;
      case "gift_receive":
        break;
      case "investment_contribution":
        a && (t -= e.amount);
        break;
    }
  }
  if (r)
    for (const e of r)
      e.entityType === "character" &&
        e.entityId === n.characterId &&
        e.dailyExpense &&
        (t -= e.dailyExpense);
  return t;
}
function N(n, c) {
  let r = n.balance;
  for (const t of c) {
    const e = t.fromType === "user" && t.fromId === n.userId,
      a = t.toType === "user" && t.toId === n.userId;
    switch (t.type) {
      case "transfer_out":
        e && t.transferStatus !== "returned" && (r -= t.amount);
        break;
      case "transfer_in":
        a && t.transferStatus !== "returned" && (r += t.amount);
        break;
      case "gift_purchase":
        e && (r -= t.amount);
        break;
      case "self_purchase":
        e && (r -= t.amount);
        break;
      case "user_edit":
        a ? (r += t.amount) : e && (r -= t.amount);
        break;
    }
  }
  return r;
}
const A = {
    frugal: "节俭",
    moderate: "普通",
    generous: "大方",
    extravagant: "挥霍",
  },
  D = { frugal: 0.5, moderate: 0.35, generous: 0.2, extravagant: 0.1 };
function P(n, c, r, t) {
  const e = r.slice(0, 7),
    a = n.characterId,
    u = [];
  if (n.lastPayday === e) return { newTx: u };
  const y = _(n);
  if (y > 0) {
    const m = n.incomeSources ?? [],
      l = m.length === 1 ? m[0].label : m.map((o) => o.label).join("、");
    u.push({
      id: `salary-${a}-${e}`,
      type: "salary",
      fromType: "system",
      fromId: "system",
      toType: "character",
      toId: a,
      amount: y,
      timestamp: Date.now(),
      dateKey: r,
      description: l,
    });
  }
  if (
    (n.fixedMonthlyExpense > 0 &&
      u.push({
        id: `fixed-${a}-${e}`,
        type: "fixed_expense",
        fromType: "character",
        fromId: a,
        toType: "system",
        toId: "system",
        amount: n.fixedMonthlyExpense,
        timestamp: Date.now(),
        dateKey: r,
        description: "本月固定支出（房租、交通等）",
      }),
    n.lastPayday && t)
  ) {
    const m = n.lastPayday,
      l = c.filter((s) => s.dateKey.startsWith(m)),
      o = t
        .filter(
          (s) =>
            s.entityType === "character" &&
            s.entityId === a &&
            s.dateKey.startsWith(m) &&
            s.dailyExpense
        )
        .reduce((s, p) => s + p.dailyExpense, 0),
      d = l
        .filter(
          (s) =>
            s.fromType === "character" &&
            s.fromId === a &&
            ["transfer_out", "gift_purchase"].includes(s.type) &&
            s.transferStatus !== "returned"
        )
        .reduce((s, p) => s + p.amount, 0),
      g = o + d,
      x = Math.max(n.monthlyDisposable - g, 0),
      f = D[n.spendingStyle] ?? 0.35,
      h = Math.round(x * f);
    h > 0 &&
      u.push({
        id: `invest-${a}-${m}`,
        type: "investment_contribution",
        fromType: "character",
        fromId: a,
        toType: "system",
        toId: "system",
        amount: h,
        timestamp: Date.now(),
        dateKey: r,
        description: "上月结余转入理财",
      });
  }
  const b = { ...n, lastPayday: e };
  return { newTx: u, updatedFinancials: b };
}
export { A as S, w as a, _ as b, N as c, P as e, M as g };
