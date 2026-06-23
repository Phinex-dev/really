import { b as x, c as M } from "./initialShopItems-Bgx56oyu.js";
import { f as b, h as C } from "./gemini-CeriFUnH.js";
import { a as L } from "./giftFulfillment-DLU8FseI.js";
import { b as R } from "./worldBookScopes-B0JaUaci.js";
function w(e, c, o) {
  return Math.min(o, Math.max(c, e));
}
function S(e, c) {
  const o = String((e == null ? void 0 : e.name) || "")
      .trim()
      .slice(0, 24),
    r = String((e == null ? void 0 : e.description) || "")
      .trim()
      .slice(0, 60),
    t = Number(e == null ? void 0 : e.minPrice),
    i = Number(
      (e == null ? void 0 : e.maxPrice) ?? (e == null ? void 0 : e.minPrice)
    );
  if (!o || !r || !Number.isFinite(t) || t <= 0) return null;
  const n = Math.round(w(t, c.priceRange.min, c.priceRange.max) * 100) / 100,
    s = Number.isFinite(i) && i >= t ? i : t,
    a = Math.round(w(s, n, c.priceRange.max) * 100) / 100;
  return {
    id: `custom_${Math.random().toString(36).substring(2, 10)}`,
    name: o,
    category: c.id,
    minPrice: n,
    maxPrice: a,
    description: r,
    isCustom: !0,
  };
}
async function G({
  category: e,
  existingItems: c,
  preset: o,
  count: r = 8,
  worldBooks: t,
}) {
  if (!o) throw new Error("请先在设置中配置并选择一个可用的 AI 模型。");
  const i = R(t, "shop_items", !1),
    n = Array.from(
      new Set(
        c
          .filter((m) => m.category === e.id && !m.isDeleted)
          .map((m) => m.name.trim())
          .filter(Boolean)
      )
    ),
    s =
      e.id === "housing_vehicle"
        ? "paperwork"
        : e.isInstant
        ? "instant"
        : "delivery",
    a = [
      i ? i.trimEnd() : "",
      "你是一个移动商城的商品策划助手。请根据给定分类生成一批适合直接上架的商品。",
      `分类名称：${e.label}`,
      `履约类型：${
        s === "instant"
          ? "即时送达（食物、饮品、熟食、甜品等）"
          : s === "paperwork"
          ? "手续办理（房产、车辆、车位等高价值资产，7-15天办妥）"
          : "快递配送（非食物实体商品）"
      }`,
      `价格区间：¥${e.priceRange.min} - ¥${e.priceRange.max}`,
      `关键词：${e.keywords.join("、") || "无"}`,
      `生成数量：${r}`,
      n.length
        ? `该分类现有商品名（禁止重复）：${n.join("、")}`
        : "该分类当前还没有商品，可以从零开始生成。",
      s === "instant"
        ? "要求：只能生成可点单的食物、饮品、甜品、熟食或套餐，不要生成耳机、鲜花、摆件这类礼物。"
        : s === "paperwork"
        ? `要求：只能生成需要手续办理的${L(
            s
          )}类高价值商品，不要生成奶茶、蛋糕、鲜花、耳机这类普通商品。`
        : "要求：只能生成非食物实体礼物，不要生成奶茶、蛋糕、便当等外卖。",
      '输出 JSON 对象，格式必须为：{"items":[{"name":"","minPrice":0,"maxPrice":0,"description":""}]}。',
      "要求：名称自然，像商城商品；价格合理；description 写成一句简短卖点；不要输出任何 JSON 之外的解释。",
    ].join(`
`),
    { content: u, usage: l } = await b(o, a, !0),
    p = JSON.parse(C(u || "{}")),
    P = Array.isArray(p == null ? void 0 : p.items) ? p.items : [],
    f = new Set(n.map((m) => m.toLowerCase())),
    h = [];
  for (const m of P) {
    const d = S(m, e);
    if (!d) continue;
    const g = d.name.toLowerCase();
    f.has(g) || (f.add(g), h.push(d));
  }
  if (h.length === 0) throw new Error("AI 没有返回可用的商品结果，请重试。");
  return { items: h, usage: l };
}
function $(e, c) {
  const o = e.toLowerCase();
  let r = null,
    t = 0;
  for (const i of c) {
    let n = 0;
    o.includes(i.name.toLowerCase()) && (n += 10);
    const s = i.description.split(/[，,、\s]+/).filter((l) => l.length >= 2);
    for (const l of s) o.includes(l.toLowerCase()) && (n += 3);
    const u = i.name.split("").filter((l) => o.includes(l)).length;
    u >= 2 && (n += u), n > t && ((t = n), (r = i));
  }
  return t >= 3 ? r : null;
}
function N(e, c = []) {
  const o = e.toLowerCase();
  let r = "daily_gift",
    t = 0;
  for (const i of x(c)) {
    const n = i.keywords.filter((s) => o.includes(s)).length;
    n > t && ((t = n), (r = i.id));
  }
  return r;
}
function A(e, c, o = []) {
  const r = c || N(e, o),
    t = x(o).find((a) => a.id === r),
    i = (t == null ? void 0 : t.priceRange) || M[r] || { min: 15, max: 300 },
    n = Math.round((i.min + (i.max - i.min) * 0.2) * 100) / 100,
    s = Math.round((i.min + (i.max - i.min) * 0.6) * 100) / 100;
  return {
    id: `gen_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    name: e.slice(0, 20),
    category: r,
    minPrice: n,
    maxPrice: s,
    description: e,
    isCustom: !0,
  };
}
function y(e, c, o = [], r, t) {
  const i = $(e, c);
  let n = i || A(e, void 0, o);
  r && n.category !== r && (n = { ...n, category: r });
  let s;
  if (i)
    s =
      n.minPrice === n.maxPrice
        ? n.minPrice
        : Math.round(
            (n.minPrice + Math.random() * (n.maxPrice - n.minPrice)) * 100
          ) / 100;
  else if (t && t > 0) {
    const a = 0.8 + Math.random() * 0.4;
    s = Math.round(t * a * 100) / 100;
  } else
    s =
      n.minPrice === n.maxPrice
        ? n.minPrice
        : Math.round(
            (n.minPrice + Math.random() * (n.maxPrice - n.minPrice)) * 100
          ) / 100;
  return { product: n, price: s };
}
export { G as g, y as r };
