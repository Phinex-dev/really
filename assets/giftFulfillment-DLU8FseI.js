import { g as f } from "./initialShopItems-Bgx56oyu.js";
function i(t, r = []) {
  return t === "housing_vehicle"
    ? "paperwork"
    : t && f(t, r).isInstant
    ? "instant"
    : "delivery";
}
function e(t, r = Date.now()) {
  return t === "instant"
    ? r + (15 + Math.floor(Math.random() * 16)) * 60 * 1e3
    : t === "paperwork"
    ? r + (7 + Math.floor(Math.random() * 9)) * 24 * 60 * 60 * 1e3
    : r + (1 + Math.floor(Math.random() * 3)) * 24 * 60 * 60 * 1e3;
}
function u(t, r = Date.now()) {
  return t === "instant" || t === "paperwork"
    ? e(t, r)
    : r + (2 + Math.floor(Math.random() * 5)) * 60 * 60 * 1e3;
}
function l(t) {
  return t === "instant" ? "外卖" : t === "paperwork" ? "房/车" : "礼物";
}
function p(t, r, n) {
  if (!r || !n) return null;
  const a = Math.max(0, r - n);
  return t === "instant"
    ? `预计 ${Math.round(a / 6e4)} 分钟送达`
    : t === "paperwork"
    ? `预计 ${Math.round(a / 864e5)} 天内办妥`
    : `预计 ${Math.round(a / 864e5)} 天内到达`;
}
export { l as a, e as b, u as c, p as f, i as g };
