import { r as c, j as e } from "./index-C41onZB-.js";
import {
  c as Ct,
  au as B,
  j as _e,
  u as zs,
  T as Xs,
  b as at,
  aD as Js,
} from "./App-CYgIjxWH.js";
import { d as Zs } from "./initialShopItems-Bgx56oyu.js";
import { b as Pt } from "./worldBookScopes-B0JaUaci.js";
import { f as Et } from "./llmFetch-C_SjUca9.js";
import { C as re } from "./chevron-left-CTqCLzU8.js";
import { R as Qs } from "./rotate-ccw-CbYjPK1x.js";
import { A as ea } from "./arrow-down-CROGvue2.js";
import { A as ta } from "./arrow-up-BaJqBU9m.js";
import { C as sa } from "./coffee-z5kKF3o0.js";
import { L as qe } from "./loader-circle-CcTwnOUB.js";
import { E as aa } from "./eye-CAZ7QyaF.js";
import { U as la } from "./users-CICUzMdL.js";
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const na = [
    ["path", { d: "M11 20H2", key: "nlcfvz" }],
    [
      "path",
      {
        d: "M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",
        key: "au4z13",
      },
    ],
    ["path", { d: "M11 4H8a2 2 0 0 0-2 2v14", key: "74r1mk" }],
    ["path", { d: "M14 12h.01", key: "1jfl7z" }],
    ["path", { d: "M22 20h-3", key: "vhrsz" }],
  ],
  ra = Ct("door-open", na);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ia = [
    ["path", { d: "m3 7 5 5-5 5V7", key: "couhi7" }],
    ["path", { d: "m21 7-5 5 5 5V7", key: "6ouia7" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "M12 14v2", key: "8jcxud" }],
    ["path", { d: "M12 8v2", key: "1woqiv" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
  ],
  ca = Ct("flip-horizontal-2", ia);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oa = [
    ["path", { d: "m14.622 17.897-10.68-2.913", key: "vj2p1u" }],
    [
      "path",
      {
        d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",
        key: "18tc5c",
      },
    ],
    [
      "path",
      {
        d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",
        key: "ytzfxy",
      },
    ],
  ],
  da = Ct("paintbrush", oa);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pa = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
    ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
  ],
  fa = Ct("user-plus", pa),
  ga = "sprite_regions_v1_",
  ys = new Map();
async function Ge(r, n) {
  const f = `${r}|${n.map((m) => m.src).join("|")}`,
    g = ys.get(f);
  if (g) return g;
  const P = new Map(),
    L = new Map();
  await Promise.all(
    n.map(async ({ key: m, src: u }) => {
      const y = `${r}:${m}`,
        j = await ma(u);
      P.set(y, j);
      const w = `${ga}${u}`,
        E = await B.getItem(w).catch(() => null);
      if (E) L.set(y, E);
      else {
        const T = xa(j);
        L.set(y, T), B.setItem(w, T).catch(() => {});
      }
    })
  );
  const h = [];
  for (const { key: m } of n) {
    const u = `${r}:${m}`;
    L.get(u).forEach((j, w) => {
      h.push({ ...j, id: `${r}:${m}:${w}`, category: u });
    });
  }
  const N = { images: P, regions: h };
  return ys.set(f, N), N;
}
function ma(r) {
  return new Promise((n, f) => {
    const g = new Image();
    (g.crossOrigin = "anonymous"),
      (g.onload = () => n(g)),
      (g.onerror = () => f(new Error(`Failed to load image: ${r}`))),
      (g.src = r);
  });
}
function xa(r) {
  const n = document.createElement("canvas");
  (n.width = r.width), (n.height = r.height);
  const f = n.getContext("2d");
  f.drawImage(r, 0, 0);
  const { width: g, height: P } = n,
    h = f.getImageData(0, 0, g, P).data,
    N = new Uint8Array(g * P),
    m = (y, j) =>
      y < 0 || y >= g || j < 0 || j >= P ? !1 : h[(j * g + y) * 4 + 3] > 10,
    u = [];
  for (let y = 0; y < P; y++)
    for (let j = 0; j < g; j++) {
      const w = y * g + j;
      if (N[w] || !m(j, y)) continue;
      let E = j,
        T = j,
        R = y,
        X = y;
      const O = [[j, y]];
      for (N[w] = 1; O.length > 0; ) {
        const [A, te] = O.shift();
        A < E && (E = A),
          A > T && (T = A),
          te < R && (R = te),
          te > X && (X = te);
        for (let F = -1; F <= 1; F++)
          for (let se = -1; se <= 1; se++) {
            if (se === 0 && F === 0) continue;
            const M = A + se,
              J = te + F;
            if (M < 0 || M >= g || J < 0 || J >= P) continue;
            const Z = J * g + M;
            !N[Z] && m(M, J) && ((N[Z] = 1), O.push([M, J]));
          }
      }
      const V = T - E + 1,
        U = X - R + 1;
      V >= 4 && U >= 4 && u.push({ x: E, y: R, width: V, height: U });
    }
  return (
    u.sort((y, j) => {
      const w = Math.floor(y.y / 20),
        E = Math.floor(j.y / 20);
      return w !== E ? w - E : y.x - j.x;
    }),
    u
  );
}
const _ = "/assets/sprites/pack-classic",
  _t = {
    id: "classic",
    name: "简约原木",
    wallSrc: `${_}/wall.png`,
    floorSrc: `${_}/floor.png`,
    categories: [
      { key: "bed", label: "床", src: `${_}/单人床.png` },
      { key: "nightstand", label: "床头柜", src: `${_}/床头柜.png` },
      { key: "wardrobe", label: "衣柜", src: `${_}/衣柜.png` },
      { key: "coatrack", label: "衣帽架", src: `${_}/衣帽架.png` },
      { key: "desk", label: "书桌", src: `${_}/书桌.png` },
      { key: "desk-stool", label: "书桌凳", src: `${_}/书桌凳.png` },
      { key: "bookshelf", label: "书柜", src: `${_}/矮书柜.png` },
      { key: "shelf-empty", label: "置物架", src: `${_}/置物架（空）.png` },
      { key: "shelf-full", label: "置物架(满)", src: `${_}/置物架（满）.png` },
      { key: "dining-table", label: "餐桌", src: `${_}/餐桌.png` },
      { key: "dining-chair", label: "餐椅", src: `${_}/餐椅.png` },
      { key: "sofa", label: "长沙发", src: `${_}/长沙发.png` },
      { key: "armchair", label: "单人沙发", src: `${_}/单人沙发.png` },
      { key: "cabinet", label: "矮柜", src: `${_}/矮柜.png` },
      { key: "bench", label: "长椅", src: `${_}/长椅.png` },
      { key: "coffee-table", label: "茶几", src: `${_}/茶几.png` },
      { key: "carpet", label: "地毯", src: `${_}/地毯.png` },
      { key: "floor-lamp", label: "落地灯", src: `${_}/落地灯.png` },
      { key: "table-lamp", label: "台灯", src: `${_}/台灯.png` },
      { key: "vase-empty", label: "花瓶", src: `${_}/花瓶（空）.png` },
      { key: "vase-flower", label: "花瓶(插花)", src: `${_}/花瓶（插花）.png` },
      { key: "painting", label: "装饰画", src: `${_}/装饰画.png` },
      { key: "pillow", label: "抱枕", src: `${_}/抱枕.png` },
      { key: "book", label: "书", src: `${_}/书.png` },
      { key: "clock", label: "闹钟", src: `${_}/闹钟.png` },
      { key: "teacup", label: "茶杯", src: `${_}/茶杯.png` },
      { key: "teapot", label: "茶壶", src: `${_}/茶壶.png` },
      { key: "plate", label: "餐盘", src: `${_}/餐盘.png` },
      { key: "plant", label: "盆栽", src: `${_}/盆栽.png` },
    ],
  },
  W = "/assets/sprites/pack-western",
  ha = {
    id: "western",
    name: "西部风情",
    wallSrc: `${W}/wall.png`,
    floorSrc: `${W}/floor.png`,
    categories: [
      { key: "bed", label: "床", src: `${W}/床.png` },
      { key: "nightstand", label: "床头柜", src: `${W}/床头柜.png` },
      { key: "wardrobe", label: "衣柜", src: `${W}/衣柜.png` },
      { key: "sofa", label: "长沙发", src: `${W}/长沙发.png` },
      { key: "armchair", label: "单人沙发", src: `${W}/单人沙发.png` },
      { key: "dining-table", label: "餐桌", src: `${W}/餐桌.png` },
      { key: "dining-chair", label: "餐椅", src: `${W}/餐椅.png` },
      { key: "coffee-table", label: "茶几", src: `${W}/茶几.png` },
      { key: "cabinet", label: "矮柜", src: `${W}/矮柜.png` },
      { key: "shelf", label: "置物柜", src: `${W}/置物柜.png` },
      { key: "wall-shelf", label: "墙上置物架", src: `${W}/墙上置物架.png` },
      { key: "carpet", label: "地毯", src: `${W}/地毯.png` },
      { key: "stool", label: "矮凳", src: `${W}/矮凳.png` },
      { key: "round-stool", label: "小圆凳", src: `${W}/小圆凳.png` },
      { key: "bar-stool", label: "高脚凳", src: `${W}/高脚凳.png` },
      { key: "painting", label: "装饰画", src: `${W}/装饰画.png` },
      { key: "skull", label: "动物头骨", src: `${W}/动物头骨.png` },
      { key: "plant", label: "盆栽", src: `${W}/盆栽.png` },
    ],
  },
  S = "/assets/sprites/pack-modern",
  ua = {
    id: "modern",
    name: "都市摩登",
    wallSrc: `${S}/wall.png`,
    floorSrc: `${S}/floor.png`,
    categories: [
      { key: "bed", label: "双人床", src: `${S}/双人床.png` },
      { key: "nightstand", label: "床头柜", src: `${S}/床头柜.png` },
      { key: "wardrobe", label: "衣柜", src: `${S}/衣柜.png` },
      { key: "sofa", label: "长沙发", src: `${S}/长沙发.png` },
      { key: "armchair", label: "单人沙发", src: `${S}/单人沙发.png` },
      { key: "dining-table", label: "餐桌", src: `${S}/餐桌.png` },
      { key: "dining-chair", label: "餐椅", src: `${S}/餐椅.png` },
      { key: "coffee-table", label: "茶几", src: `${S}/茶几.png` },
      { key: "cabinet", label: "矮柜", src: `${S}/矮柜.png` },
      { key: "av-cabinet", label: "影音柜", src: `${S}/影音柜.png` },
      { key: "shelf-empty", label: "置物架", src: `${S}/置物架（空）.png` },
      { key: "shelf-full", label: "置物架(满)", src: `${S}/置物架（满）.png` },
      { key: "carpet", label: "地毯", src: `${S}/地毯.png` },
      { key: "stool", label: "矮凳", src: `${S}/矮凳.png` },
      { key: "floor-lamp", label: "落地灯", src: `${S}/落地灯.png` },
      { key: "table-lamp", label: "台灯", src: `${S}/台灯.png` },
      { key: "painting", label: "装饰画", src: `${S}/装饰画.png` },
      { key: "mirror", label: "镜子", src: `${S}/镜子.png` },
      { key: "pillow", label: "抱枕", src: `${S}/抱枕.png` },
      { key: "book", label: "书", src: `${S}/书.png` },
      { key: "plant", label: "盆栽", src: `${S}/盆栽.png` },
      { key: "candle", label: "烛台", src: `${S}/烛台.png` },
      { key: "vase-flower", label: "插花高脚杯", src: `${S}/插花高脚杯.png` },
      { key: "wine-glass", label: "高脚杯", src: `${S}/高脚杯.png` },
      { key: "liquor", label: "洋酒", src: `${S}/洋酒.png` },
      { key: "cd-player", label: "CD机", src: `${S}/CD机.png` },
      { key: "vinyl", label: "黑胶唱机", src: `${S}/黑胶唱机.png` },
      { key: "hifi", label: "Hi-Fi音响组", src: `${S}/Hi-Fi音响组.png` },
      { key: "speaker-big", label: "音响(大)", src: `${S}/音响（大）.png` },
      { key: "speaker-small", label: "音响(小)", src: `${S}/音响（小）.png` },
    ],
  },
  v = "/assets/sprites/pack-mansion",
  ya = {
    id: "mansion",
    name: "豪华庄园",
    wallSrc: `${v}/wall.png`,
    floorSrc: `${v}/floor.png`,
    categories: [
      { key: "bed", label: "双人床", src: `${v}/双人床.png` },
      { key: "bed-canopy", label: "床幔", src: `${v}/床幔.png` },
      { key: "nightstand", label: "床头柜", src: `${v}/床头柜.png` },
      { key: "sofa", label: "长沙发", src: `${v}/长沙发.png` },
      { key: "armchair", label: "单人沙发", src: `${v}/单人沙发.png` },
      { key: "chaise", label: "贵妃榻", src: `${v}/贵妃榻.png` },
      { key: "dining-table", label: "餐桌", src: `${v}/餐桌.png` },
      { key: "dining-chair", label: "餐椅", src: `${v}/餐椅.png` },
      { key: "desk", label: "书桌", src: `${v}/书桌.png` },
      { key: "desk-chair", label: "书桌椅", src: `${v}/书桌椅.png` },
      { key: "bookshelf", label: "书柜", src: `${v}/书柜.png` },
      { key: "coffee-table", label: "茶几", src: `${v}/茶几.png` },
      { key: "side-table", label: "边几", src: `${v}/边几.png` },
      { key: "carved-table", label: "雕花边几", src: `${v}/雕花边几.png` },
      { key: "cabinet", label: "矮柜", src: `${v}/矮柜.png` },
      { key: "stool", label: "矮凳", src: `${v}/矮凳.png` },
      { key: "carpet", label: "地毯", src: `${v}/地毯.png` },
      { key: "fireplace", label: "壁炉", src: `${v}/壁炉.png` },
      { key: "grandfather-clock", label: "落地钟", src: `${v}/落地钟.png` },
      { key: "globe-bar", label: "地球仪酒柜", src: `${v}/地球仪酒柜.png` },
      { key: "painting", label: "装饰画", src: `${v}/装饰画.png` },
      { key: "candle-big", label: "烛台(大)", src: `${v}/烛台（大）.png` },
      { key: "candle-small", label: "烛台(小)", src: `${v}/烛台（小）.png` },
      { key: "candle-wall", label: "烛台(挂壁)", src: `${v}/烛台（挂壁）.png` },
      { key: "antique-vase", label: "古董瓷瓮", src: `${v}/古董瓷瓮.png` },
      { key: "book", label: "书", src: `${v}/书.png` },
      { key: "letter", label: "信笺", src: `${v}/信笺.png` },
      { key: "ink-brush", label: "笔墨", src: `${v}/笔墨.png` },
      { key: "wine", label: "酒", src: `${v}/酒.png` },
      { key: "wine-glass", label: "酒杯", src: `${v}/酒杯.png` },
      { key: "dog", label: "小狗", src: `${v}/小狗.png` },
    ],
  },
  C = "/assets/sprites/pack-elegant",
  ba = {
    id: "elegant",
    name: "经典优雅",
    wallSrc: `${C}/wall.png`,
    floorSrc: `${C}/floor.png`,
    categories: [
      { key: "bed", label: "床", src: `${C}/床.png` },
      { key: "nightstand", label: "床头柜", src: `${C}/床头柜.png` },
      { key: "bedside-lamp", label: "床头灯", src: `${C}/床头灯.png` },
      { key: "wardrobe", label: "衣柜", src: `${C}/衣柜.png` },
      { key: "sofa", label: "长沙发", src: `${C}/长沙发.png` },
      { key: "armchair", label: "单人沙发", src: `${C}/单人沙发.png` },
      { key: "dining-table", label: "餐桌", src: `${C}/餐桌.png` },
      { key: "dining-chair", label: "餐椅", src: `${C}/餐椅.png` },
      { key: "desk", label: "书桌", src: `${C}/书桌.png` },
      { key: "desk-chair", label: "书桌椅", src: `${C}/书桌椅.png` },
      { key: "bookshelf", label: "书柜", src: `${C}/书柜.png` },
      { key: "coffee-table", label: "茶几", src: `${C}/茶几.png` },
      { key: "side-table", label: "边几", src: `${C}/边几.png` },
      { key: "cabinet", label: "矮柜", src: `${C}/矮柜.png` },
      { key: "stool", label: "矮凳", src: `${C}/矮凳.png` },
      { key: "carpet", label: "地毯", src: `${C}/地毯.png` },
      { key: "table-lamp", label: "台灯", src: `${C}/台灯.png` },
      { key: "wall-photo", label: "壁挂相片", src: `${C}/壁挂相片.png` },
      { key: "certificate", label: "裱框证书", src: `${C}/裱框证书.png` },
      { key: "pillow", label: "抱枕", src: `${C}/抱枕.png` },
      { key: "book", label: "书", src: `${C}/书.png` },
      { key: "plate", label: "餐盘", src: `${C}/餐盘.png` },
      { key: "teacup", label: "茶杯", src: `${C}/茶杯.png` },
      { key: "teapot", label: "茶壶", src: `${C}/茶壶.png` },
      { key: "wine", label: "酒", src: `${C}/酒.png` },
      { key: "wine-glass", label: "酒杯", src: `${C}/酒杯.png` },
      { key: "vase-flower", label: "插花", src: `${C}/插花.png` },
      { key: "ceramic-jar", label: "装饰瓷罐", src: `${C}/装饰瓷罐.png` },
      { key: "plant", label: "盆栽", src: `${C}/盆栽.png` },
      { key: "slippers", label: "拖鞋", src: `${C}/拖鞋.png` },
    ],
  },
  k = "/assets/sprites/pack-singleman",
  ka = {
    id: "singleman",
    name: "单身男子",
    wallSrc: `${k}/wall.png`,
    floorSrc: `${k}/floor.png`,
    categories: [
      { key: "bed", label: "单人床", src: `${k}/单人床.png` },
      { key: "mattress", label: "床垫", src: `${k}/床垫.png` },
      { key: "blanket", label: "被子", src: `${k}/被子.png` },
      { key: "pillow", label: "枕头", src: `${k}/枕头.png` },
      { key: "wardrobe", label: "衣柜", src: `${k}/衣柜.png` },
      { key: "tshirt-rack", label: "T恤挂架", src: `${k}/T恤挂架.png` },
      { key: "armchair", label: "单人沙发", src: `${k}/单人沙发.png` },
      { key: "desk", label: "桌子", src: `${k}/桌子.png` },
      { key: "coffee-table", label: "茶几", src: `${k}/茶几.png` },
      { key: "shelf-empty", label: "置物架", src: `${k}/置物架（空）.png` },
      { key: "shelf-full", label: "置物架(满)", src: `${k}/置物架（满）.png` },
      { key: "storage-box", label: "收纳箱", src: `${k}/收纳箱.png` },
      { key: "cardboard", label: "纸箱", src: `${k}/纸箱.png` },
      { key: "floor-mat", label: "地垫", src: `${k}/地垫.png` },
      { key: "cardboard-mat", label: "纸壳地垫", src: `${k}/纸壳地垫.png` },
      { key: "window", label: "窗户", src: `${k}/窗户.png` },
      { key: "tv", label: "电视", src: `${k}/电视.png` },
      { key: "laptop", label: "笔记本电脑", src: `${k}/笔记本电脑.png` },
      { key: "game-console", label: "游戏机", src: `${k}/游戏机.png` },
      { key: "game-cartridge", label: "游戏卡带", src: `${k}/游戏卡带.png` },
      { key: "game-controller", label: "游戏手柄", src: `${k}/游戏手柄.png` },
      { key: "microwave", label: "微波炉", src: `${k}/微波炉.png` },
      { key: "instant-noodle", label: "泡面", src: `${k}/泡面.png` },
      { key: "canned-drink", label: "罐装饮料", src: `${k}/罐装饮料.png` },
      { key: "soda-bottle", label: "大瓶汽水", src: `${k}/大瓶汽水.png` },
      { key: "drink-cooler", label: "饮料保冷箱", src: `${k}/饮料保冷箱.png` },
      { key: "beer", label: "啤酒", src: `${k}/啤酒.png` },
      { key: "milk-bucket", label: "桶装牛奶", src: `${k}/桶装牛奶.png` },
      { key: "empty-bottle", label: "空酒瓶", src: `${k}/空酒瓶.png` },
      { key: "bottle-candle", label: "酒瓶蜡烛", src: `${k}/酒瓶蜡烛.png` },
      { key: "vase-flower", label: "玻璃瓶插花", src: `${k}/玻璃瓶插花.png` },
      { key: "poster", label: "海报", src: `${k}/海报.png` },
      { key: "book", label: "书", src: `${k}/书.png` },
      { key: "medkit", label: "医药箱", src: `${k}/医药箱.png` },
      { key: "tin-plant", label: "铁罐盆栽", src: `${k}/铁罐盆栽.png` },
    ],
  },
  q = [_t, ha, ua, ya, ba, ka];
q.map((r) => ({ id: `wall-${r.id}`, label: `${r.name}墙纸`, src: r.wallSrc }));
q.map((r) => ({
  id: `floor-${r.id}`,
  label: `${r.name}地板`,
  src: r.floorSrc,
}));
function wa(r) {
  return r.replace(/<think(?:ing)?[\s\S]*?<\/think(?:ing)?>/gi, "").trim();
}
const vt = {},
  Is = {};
for (const r of q) {
  Is[r.id] = r.name;
  for (const n of r.categories)
    (vt[`${r.id}:${n.key}`] = n.label), vt[n.key] || (vt[n.key] = n.label);
}
function $a(r) {
  return Is[r.split(":")[0]] || "";
}
function ja(r) {
  const n = new Set(),
    f = [];
  for (const g of r)
    n.has(g.category) ||
      (n.add(g.category),
      f.push({ key: g.category, label: vt[g.category] || g.category }));
  return f;
}
const Ia =
  "你是一个台词生成助手。严格按照用户要求的 JSON 格式输出，不要添加任何解释、markdown 标记或代码块包裹。";
function va(r, n, f, g, P) {
  const L = n.map((m) => {
      const u = $a(m.key);
      return u
        ? `- ${m.key}（${m.label}，${u}风格）：3-5 句`
        : `- ${m.key}（${m.label}）：3-5 句`;
    }).join(`
`),
    h = n.map((m) => `"${m.key}"`).join(", ");
  return `${Pt(
    P,
    "alone_time"
  )}你需要为一个用户在自己的小屋中"独处时间"生成与每件家具互动的台词。

用户信息：
- 名称：${r.name}
${r.gender ? `- 性别：${r.gender}` : ""}
${r.intro ? `- 简介：${r.intro}` : ""}
${r.background ? `- 背景：${r.background}` : ""}
${r.bio ? `- 个人简介：${r.bio}` : ""}

用户最近的记忆（长期知识）：
${f}

最近的时间线片段（仅作灵感参考，不要逐条复述）：
${g}

场景：用户独自待在自己精心布置的像素小屋里，一个人百无聊赖地跟家具互动。

[台词风格——核心原则]
你生成的是一个真人独处时的自言自语，不是治愈系文案、不是鸡汤、不是小红书语录。
风格不固定，根据用户性格、当前心境和最近经历自然切换：
- 吐槽型：对家具碎碎念、嫌弃但离不开（"这个沙发坐久了腰真的废""你怎么又歪了"）
- 脑洞型：给家具编故事、想象它有人格（"如果你是人的话，你应该是个沉默寡言但很靠谱的那种""这盏灯活过来一定会嫌我晚睡"）
- 情绪流露型：借家具说出当下真实感受（"今天真的累了""看着这个杯子突然想起上次一起喝茶"）
- 无厘头型：莫名其妙但就是会说的话（"……为什么我要跟一把椅子对视""好想躺下但是刚铺好的"）
- 丧/毒舌/矫情/犯懒/发呆都可以，拒绝全部温馨正能量

[硬性要求]
- 每句 5-30 字，第一人称
- 语气自然口语化，可以有省略号、语气词、半句话说完就不说了
- 同一分类的几句台词之间风格要有变化，不要全部一个腔调
- 结合用户最近的心情和经历，让台词有"这个人最近确实在经历这些事"的感觉
- 禁止输出任何解释、前言、markdown，只输出纯 JSON
- 所有台词必须使用中文，即使上下文中出现外语也不要使用外语
- 只输出纯文字台词，不要输出图片、表情包、sticker 等非文字内容（emoji 可以适当使用）

用户房间里摆放了这些家具，请按分类生成台词：
${L}

请直接输出如下格式的 JSON（不要包裹在 \`\`\` 中），key 为家具分类 key：
{${h.replace(/"/g, '"')}}
其中每个 key 对应一个字符串数组。`;
}
async function Na(r) {
  var te, F, se;
  const {
      preset: n,
      currentUser: f,
      furniture: g,
      knowledge: P,
      messages: L,
      chats: h,
      characters: N,
      users: m,
      worldBooks: u,
    } = r,
    y = ja(g);
  if (y.length === 0) throw new Error("房间里还没有摆放家具");
  const j = _e
      .filterKnowledgeForCharacter(P, f.id)
      .sort((M, J) => (J.startTime || 0) - (M.startTime || 0))
      .slice(0, 8),
    w = _e.formatKnowledgeForSchedulePrompt(j),
    E = _e.buildCompactVisibleMessageWindow({
      entityId: f.id,
      messages: L,
      chats: h,
      allCharacters: N,
      allUsers: m,
      maxMessages: 50,
      maxChars: 5e3,
    }),
    T = await Et(n, {
      model: n.model,
      messages: [
        { role: "system", content: Ia },
        { role: "user", content: va(f, y, w, E, u) },
      ],
      temperature: Math.min(n.temperature + 0.1, 1.5),
    });
  if (!T.ok) throw new Error(`独处台词生成失败: ${T.status} ${T.errorText}`);
  const R = T.data || {};
  let X = wa(
    ((se =
      (F = (te = R.choices) == null ? void 0 : te[0]) == null
        ? void 0
        : F.message) == null
      ? void 0
      : se.content) || ""
  );
  X = X.replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
  const O = JSON.parse(X),
    V = (M) => M.replace(/\[\[SEND_\w+:.*?\]\]/g, "").trim(),
    U = {};
  for (const M of y) {
    const J = O[M.key];
    Array.isArray(J)
      ? (U[M.key] = J.map((Z) => (typeof Z == "string" ? V(Z) : ""))
          .filter((Z) => Z.length > 0)
          .slice(0, 5))
      : (U[M.key] = []);
  }
  if (Object.values(U).filter((M) => M.length === 0).length > y.length / 2)
    throw new Error("台词生成不完整，大部分分类为空");
  return U;
}
function Sa(r) {
  return r.replace(/<think(?:ing)?[\s\S]*?<\/think(?:ing)?>/gi, "").trim();
}
const Nt = {},
  vs = {};
for (const r of q) {
  vs[r.id] = r.name;
  for (const n of r.categories)
    (Nt[`${r.id}:${n.key}`] = n.label), Nt[n.key] || (Nt[n.key] = n.label);
}
function Ca(r) {
  const n = r.split(":")[0];
  return vs[n] || "";
}
function Pa(r) {
  const n = new Set(),
    f = [];
  for (const g of r)
    n.has(g.category) ||
      (n.add(g.category),
      f.push({ key: g.category, label: Nt[g.category] || g.category }));
  return f;
}
const Ea =
  "你是一个台词生成助手。严格按照用户要求的 JSON 格式输出，不要添加任何解释、markdown 标记或代码块包裹。";
function _a(r, n, f, g, P, L, h, N, m, u) {
  const y = f.map((O) => {
      const V = Ca(O.key);
      return V
        ? `- "${O.key}"（${O.label}，${V}风格）`
        : `- "${O.key}"（${O.label}）`;
    }).join(`
`),
    j = f.map((O) => `"${O.key}"`).join(", "),
    w = h === "knock",
    E = w ? n.name : r.name,
    T = w ? r.name : n.name,
    R = N
      ? `
${n.name}的住处：${N.name}
住处描述：${N.description}`
      : "";
  return `${Pt(
    u,
    "visit_time"
  )}你需要为两个人在小屋里"串门"生成与家具互动的对话。

屋主（${E}）信息：
- 名称：${E}
${
  w
    ? n.gender
      ? `- 性别：${n.gender}`
      : ""
    : r.gender
    ? `- 性别：${r.gender}`
    : ""
}
${
  w
    ? n.intro
      ? `- 简介：${n.intro}`
      : ""
    : r.intro
    ? `- 简介：${r.intro}`
    : ""
}
${w && n.background ? `- 背景：${n.background}` : ""}
${
  w
    ? n.bio
      ? `- 个人简介：${n.bio}`
      : ""
    : r.bio
    ? `- 个人简介：${r.bio}`
    : ""
}

来访的客人（${T}）信息：
- 名称：${T}
${
  w
    ? r.gender
      ? `- 性别：${r.gender}`
      : ""
    : n.gender
    ? `- 性别：${n.gender}`
    : ""
}
${
  w
    ? r.intro
      ? `- 简介：${r.intro}`
      : ""
    : n.intro
    ? `- 简介：${n.intro}`
    : ""
}
${w ? "" : n.background ? `- 背景：${n.background}` : ""}
${
  w
    ? r.bio
      ? `- 个人简介：${r.bio}`
      : ""
    : n.bio
    ? `- 个人简介：${n.bio}`
    : ""
}
${R}

两人最近的记忆（长期知识）：
${g}

两人之间的私聊记录（重点参考，体现真实关系和语气）：
${P}

近期时间线片段（补充上下文，仅作灵感参考）：
${L}

场景：${
    m
      ? `${r.name}和${n.name}住在一起。两人在自己家里闲逛，看着房间里的家具聊天。这是两人共同的家，家具是共有的。`
      : `${T}来${E}的像素小屋做客。这是${E}的家，房间里的家具都是${E}的。${
          w
            ? `${n.name}作为屋主带${r.name}参观自己的房间。`
            : `${r.name}作为屋主带${n.name}参观自己的房间。`
        }`
  }

[对白风格——核心原则]
这是两个熟人之间真实、鲜活的闲聊，要有"人味儿"。
- 对话必须紧扣具体家具本身展开——不要泛泛而谈，要针对这件具体的东西聊
- 屋主对自己的东西有故事：为什么买的、怎么用的、有什么糗事、背后的执念或癖好
- 客人的反应要有个性：可能毒舌吐槽、可能八卦追问、可能自说自话联想到别的、可能故意拆台
- 鼓励以下真实互动：
  · 突然暴露隐私的尴尬（"这个...你别翻那个抽屉"）
  · 意想不到的吐槽或毒舌（"你审美真的...一言难尽"）
  · 抢话、打断、话题跑偏
  · 从家具引出两人之间的回忆或私密话题
  · 屋主的得意炫耀或心虚掩饰
- 语气要贴合两人的性格和关系——如果聊天记录里是损友就互损，暧昧就暧昧，客气就客气
- 绝对禁止：空洞的夸赞（"好看""不错"）、治愈系文案、采访式问答（"这个有什么故事吗""嗯有的"）
- 每句 5-30 字，口语化，可以有语气词、省略号、感叹号
- 所有对白必须使用中文，即使上下文中出现外语也不要使用外语
- 只输出纯文字对白，不要输出图片、表情包、sticker 等非文字内容（emoji 可以适当使用）

[格式要求]
为每件家具生成 3 组对话，每组是一来一回共 2 句。
${
  m
    ? "谁先开口都行，自然就好。"
    : w
    ? `每组中 ${n.name}（屋主）先说，${r.name}（客人）后回。`
    : `每组中 ${r.name}（屋主）先说，${n.name}（客人）后回。`
}
3 组之间风格尽量不同——比如一组是正经介绍、一组是吐槽翻车、一组是跑题闲扯。

房间里摆放了这些家具：
${y}

请直接输出如下格式的 JSON（不要包裹在 \`\`\` 中）：
{${j}}
其中每个 key 对应一个数组，数组里有 3 个子数组，每个子数组包含 2 个对象：
[{"speaker":"user","text":"${r.name}说的话"},{"speaker":"character","text":"${
    n.name
  }说的话"}]
重要：speaker:"user" 永远代表 ${r.name}，speaker:"character" 永远代表 ${
    n.name
  }。`;
}
async function bs(r) {
  var ze, nt, De;
  const {
      preset: n,
      currentUser: f,
      character: g,
      furniture: P,
      knowledge: L,
      messages: h,
      chats: N,
      characters: m,
      users: u,
      mode: y = "invite",
      homePlace: j,
      cohabiting: w,
      worldBooks: E,
    } = r,
    T = Pa(P);
  if (T.length === 0) throw new Error("房间里还没有摆放家具");
  const R = _e
      .filterKnowledgeForCharacter(L, f.id)
      .sort((Y, ue) => (ue.startTime || 0) - (Y.startTime || 0))
      .slice(0, 5),
    X = _e
      .filterKnowledgeForCharacter(L, g.id)
      .sort((Y, ue) => (ue.startTime || 0) - (Y.startTime || 0))
      .slice(0, 5),
    O = [...R, ...X],
    V = _e.formatKnowledgeForSchedulePrompt(O),
    U = N.find(
      (Y) =>
        !Y.isGroup && Y.memberIds.includes(f.id) && Y.memberIds.includes(g.id)
    ),
    A = U
      ? _e.buildCompactVisibleMessageWindow({
          entityId: g.id,
          messages: h,
          chats: [U],
          allCharacters: m,
          allUsers: u,
          maxMessages: 40,
          maxChars: 4e3,
        })
      : "（两人之间还没有聊天记录）",
    te = _e.buildCompactVisibleMessageWindow({
      entityId: f.id,
      messages: h,
      chats: N,
      allCharacters: m,
      allUsers: u,
      maxMessages: 20,
      maxChars: 2e3,
    }),
    F = await Et(n, {
      model: n.model,
      messages: [
        { role: "system", content: Ea },
        { role: "user", content: _a(f, g, T, V, A, te, y, j, w, E) },
      ],
      temperature: Math.min(n.temperature + 0.1, 1.5),
    });
  if (!F.ok) throw new Error(`对白生成失败: ${F.status} ${F.errorText}`);
  const se = F.data || {};
  let M = Sa(
    ((De =
      (nt = (ze = se.choices) == null ? void 0 : ze[0]) == null
        ? void 0
        : nt.message) == null
      ? void 0
      : De.content) || ""
  );
  M = M.replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
  const J = JSON.parse(M),
    Z = (Y) => Y.replace(/\[\[SEND_\w+:.*?\]\]/g, "").trim(),
    Ae = {};
  for (const Y of T) {
    const ue = J[Y.key];
    Array.isArray(ue)
      ? (Ae[Y.key] = ue
          .filter(
            (ye) =>
              Array.isArray(ye) &&
              ye.length === 2 &&
              ye.every(
                (ie) =>
                  typeof ie == "object" &&
                  ie !== null &&
                  "speaker" in ie &&
                  "text" in ie
              )
          )
          .map((ye) => ye.map((ie) => ({ ...ie, text: Z(ie.text) })))
          .filter((ye) => ye.every((ie) => ie.text.length > 0))
          .slice(0, 3))
      : (Ae[Y.key] = []);
  }
  if (Object.values(Ae).filter((Y) => Y.length === 0).length > T.length / 2)
    throw new Error("对白生成不完整，大部分分类为空");
  return Ae;
}
const ks = {
  classic: [
    {
      spriteId: "classic:coatrack:0",
      category: "classic:coatrack",
      x: 141,
      y: 48,
      flipped: !1,
    },
    {
      spriteId: "classic:shelf-full:1",
      category: "classic:shelf-full",
      x: 96,
      y: 40,
      flipped: !1,
    },
    {
      spriteId: "classic:carpet:1",
      category: "classic:carpet",
      x: 96,
      y: 144,
      flipped: !1,
    },
    {
      spriteId: "classic:dining-chair:0",
      category: "classic:dining-chair",
      x: 112,
      y: 112,
      flipped: !1,
    },
    {
      spriteId: "classic:dining-table:0",
      category: "classic:dining-table",
      x: 104,
      y: 128,
      flipped: !1,
    },
    {
      spriteId: "classic:plate:0",
      category: "classic:plate",
      x: 112,
      y: 144,
      flipped: !1,
    },
    {
      spriteId: "classic:carpet:0",
      category: "classic:carpet",
      x: 16,
      y: 96,
      flipped: !1,
    },
    {
      spriteId: "classic:dining-chair:3",
      category: "classic:dining-chair",
      x: 112,
      y: 152,
      flipped: !1,
    },
    {
      spriteId: "classic:sofa:3",
      category: "classic:sofa",
      x: 16,
      y: 64,
      flipped: !1,
    },
    {
      spriteId: "classic:armchair:5",
      category: "classic:armchair",
      x: 64,
      y: 88,
      flipped: !1,
    },
    {
      spriteId: "classic:cabinet:0",
      category: "classic:cabinet",
      x: 146,
      y: 136,
      flipped: !1,
    },
    {
      spriteId: "classic:cabinet:0",
      category: "classic:cabinet",
      x: 146,
      y: 162,
      flipped: !1,
    },
    {
      spriteId: "classic:coffee-table:1",
      category: "classic:coffee-table",
      x: 24,
      y: 104,
      flipped: !1,
    },
    {
      spriteId: "classic:floor-lamp:0",
      category: "classic:floor-lamp",
      x: 0,
      y: 56,
      flipped: !1,
    },
    {
      spriteId: "classic:vase-flower:0",
      category: "classic:vase-flower",
      x: 149,
      y: 128,
      flipped: !1,
    },
    {
      spriteId: "classic:painting:0",
      category: "classic:painting",
      x: 24,
      y: 40,
      flipped: !1,
    },
    {
      spriteId: "classic:painting:1",
      category: "classic:painting",
      x: 48,
      y: 40,
      flipped: !1,
    },
    {
      spriteId: "classic:painting:2",
      category: "classic:painting",
      x: 24,
      y: 8,
      flipped: !1,
    },
    {
      spriteId: "classic:painting:3",
      category: "classic:painting",
      x: 96,
      y: 16,
      flipped: !1,
    },
    {
      spriteId: "classic:painting:4",
      category: "classic:painting",
      x: 120,
      y: 8,
      flipped: !1,
    },
    {
      spriteId: "classic:clock:0",
      category: "classic:clock",
      x: 120,
      y: 40,
      flipped: !1,
    },
    {
      spriteId: "classic:teacup:0",
      category: "classic:teacup",
      x: 32,
      y: 104,
      flipped: !1,
    },
    {
      spriteId: "classic:teacup:2",
      category: "classic:teacup",
      x: 112,
      y: 128,
      flipped: !1,
    },
    {
      spriteId: "classic:teapot:0",
      category: "classic:teapot",
      x: 120,
      y: 136,
      flipped: !1,
    },
    {
      spriteId: "classic:plant:1",
      category: "classic:plant",
      x: 72,
      y: 64,
      flipped: !1,
    },
    {
      spriteId: "classic:bookshelf:0",
      category: "classic:bookshelf",
      x: 16,
      y: 120,
      flipped: !1,
    },
    {
      spriteId: "classic:desk:2",
      category: "classic:desk",
      x: 32,
      y: 152,
      flipped: !1,
    },
    {
      spriteId: "classic:shelf-empty:0",
      category: "classic:shelf-empty",
      x: 0,
      y: 128,
      flipped: !1,
    },
    {
      spriteId: "classic:table-lamp:0",
      category: "classic:table-lamp",
      x: 64,
      y: 136,
      flipped: !1,
    },
    {
      spriteId: "classic:book:0",
      category: "classic:book",
      x: 40,
      y: 160,
      flipped: !1,
    },
    {
      spriteId: "classic:book:1",
      category: "classic:book",
      x: 32,
      y: 144,
      flipped: !1,
    },
    {
      spriteId: "classic:teacup:1",
      category: "classic:teacup",
      x: 64,
      y: 160,
      flipped: !1,
    },
    {
      spriteId: "classic:plant:2",
      category: "classic:plant",
      x: 0,
      y: 120,
      flipped: !1,
    },
    {
      spriteId: "classic:plant:3",
      category: "classic:plant",
      x: 0,
      y: 144,
      flipped: !1,
    },
    {
      spriteId: "classic:desk-stool:3",
      category: "classic:desk-stool",
      x: 40,
      y: 168,
      flipped: !1,
    },
  ],
  western: [
    {
      spriteId: "western:wardrobe:2",
      category: "western:wardrobe",
      x: 120,
      y: 40,
      flipped: !1,
    },
    {
      spriteId: "western:skull:0",
      category: "western:skull",
      x: 48,
      y: 16,
      flipped: !1,
    },
    {
      spriteId: "western:painting:1",
      category: "western:painting",
      x: 24,
      y: 40,
      flipped: !1,
    },
    {
      spriteId: "western:painting:0",
      category: "western:painting",
      x: 8,
      y: 40,
      flipped: !1,
    },
    {
      spriteId: "western:painting:2",
      category: "western:painting",
      x: 120,
      y: 8,
      flipped: !1,
    },
    {
      spriteId: "western:painting:3",
      category: "western:painting",
      x: 8,
      y: 8,
      flipped: !1,
    },
    {
      spriteId: "western:wall-shelf:0",
      category: "western:wall-shelf",
      x: 80,
      y: 40,
      flipped: !1,
    },
    {
      spriteId: "western:cabinet:3",
      category: "western:cabinet",
      x: 8,
      y: 64,
      flipped: !1,
    },
    {
      spriteId: "western:shelf:1",
      category: "western:shelf",
      x: 40,
      y: 56,
      flipped: !1,
    },
    {
      spriteId: "western:carpet:2",
      category: "western:carpet",
      x: 16,
      y: 120,
      flipped: !1,
    },
    {
      spriteId: "western:bar-stool:0",
      category: "western:bar-stool",
      x: 72,
      y: 80,
      flipped: !1,
    },
    {
      spriteId: "western:dining-chair:0",
      category: "western:dining-chair",
      x: 40,
      y: 112,
      flipped: !1,
    },
    {
      spriteId: "western:dining-chair:2",
      category: "western:dining-chair",
      x: 56,
      y: 128,
      flipped: !1,
    },
    {
      spriteId: "western:plant:5",
      category: "western:plant",
      x: 16,
      y: 64,
      flipped: !1,
    },
    {
      spriteId: "western:dining-chair:2",
      category: "western:dining-chair",
      x: 24,
      y: 128,
      flipped: !0,
    },
    {
      spriteId: "western:dining-table:1",
      category: "western:dining-table",
      x: 32,
      y: 128,
      flipped: !1,
    },
    {
      spriteId: "western:dining-chair:1",
      category: "western:dining-chair",
      x: 40,
      y: 152,
      flipped: !1,
    },
    {
      spriteId: "western:carpet:1",
      category: "western:carpet",
      x: 120,
      y: 104,
      flipped: !1,
    },
    {
      spriteId: "western:stool:0",
      category: "western:stool",
      x: 96,
      y: 80,
      flipped: !1,
    },
    {
      spriteId: "western:round-stool:0",
      category: "western:round-stool",
      x: 136,
      y: 176,
      flipped: !1,
    },
    {
      spriteId: "western:coffee-table:1",
      category: "western:coffee-table",
      x: 96,
      y: 176,
      flipped: !1,
    },
    {
      spriteId: "western:sofa:0",
      category: "western:sofa",
      x: 134,
      y: 96,
      flipped: !1,
    },
    {
      spriteId: "western:coffee-table:0",
      category: "western:coffee-table",
      x: 112,
      y: 112,
      flipped: !1,
    },
    {
      spriteId: "western:plant:1",
      category: "western:plant",
      x: 104,
      y: 160,
      flipped: !1,
    },
    {
      spriteId: "western:plant:0",
      category: "western:plant",
      x: 8,
      y: 176,
      flipped: !1,
    },
    {
      spriteId: "western:plant:5",
      category: "western:plant",
      x: 136,
      y: 168,
      flipped: !1,
    },
    {
      spriteId: "western:stool:1",
      category: "western:stool",
      x: 80,
      y: 176,
      flipped: !1,
    },
    {
      spriteId: "western:plant:3",
      category: "western:plant",
      x: 80,
      y: 160,
      flipped: !1,
    },
  ],
  modern: [
    {
      spriteId: "modern:carpet:1",
      category: "modern:carpet",
      x: 64,
      y: 80,
      flipped: !1,
    },
    {
      spriteId: "modern:nightstand:0",
      category: "modern:nightstand",
      x: 80,
      y: 72,
      flipped: !1,
    },
    {
      spriteId: "modern:floor-lamp:1",
      category: "modern:floor-lamp",
      x: 0,
      y: 104,
      flipped: !1,
    },
    {
      spriteId: "modern:bed:0",
      category: "modern:bed",
      x: 106,
      y: 64,
      flipped: !1,
    },
    {
      spriteId: "modern:shelf-full:0",
      category: "modern:shelf-full",
      x: 0,
      y: 128,
      flipped: !1,
    },
    {
      spriteId: "modern:painting:0",
      category: "modern:painting",
      x: 16,
      y: 16,
      flipped: !1,
    },
    {
      spriteId: "modern:painting:4",
      category: "modern:painting",
      x: 128,
      y: 8,
      flipped: !1,
    },
    {
      spriteId: "modern:painting:5",
      category: "modern:painting",
      x: 56,
      y: 8,
      flipped: !1,
    },
    {
      spriteId: "modern:speaker-big:0",
      category: "modern:speaker-big",
      x: 144,
      y: 166,
      flipped: !1,
    },
    {
      spriteId: "modern:speaker-big:3",
      category: "modern:speaker-big",
      x: 0,
      y: 56,
      flipped: !1,
    },
    {
      spriteId: "modern:av-cabinet:1",
      category: "modern:av-cabinet",
      x: 16,
      y: 64,
      flipped: !1,
    },
    {
      spriteId: "modern:dining-table:0",
      category: "modern:dining-table",
      x: 32,
      y: 136,
      flipped: !1,
    },
    {
      spriteId: "modern:stool:0",
      category: "modern:stool",
      x: 56,
      y: 104,
      flipped: !1,
    },
    {
      spriteId: "modern:table-lamp:1",
      category: "modern:table-lamp",
      x: 88,
      y: 56,
      flipped: !1,
    },
    {
      spriteId: "modern:pillow:0",
      category: "modern:pillow",
      x: 112,
      y: 88,
      flipped: !1,
    },
    {
      spriteId: "modern:pillow:2",
      category: "modern:pillow",
      x: 136,
      y: 80,
      flipped: !1,
    },
    {
      spriteId: "modern:book:1",
      category: "modern:book",
      x: 16,
      y: 56,
      flipped: !1,
    },
    {
      spriteId: "modern:vase-flower:0",
      category: "modern:vase-flower",
      x: 72,
      y: 128,
      flipped: !1,
    },
    {
      spriteId: "modern:liquor:0",
      category: "modern:liquor",
      x: 40,
      y: 48,
      flipped: !1,
    },
    {
      spriteId: "modern:vinyl:0",
      category: "modern:vinyl",
      x: 40,
      y: 128,
      flipped: !1,
    },
    {
      spriteId: "modern:hifi:0",
      category: "modern:hifi",
      x: 56,
      y: 40,
      flipped: !1,
    },
    {
      spriteId: "modern:painting:3",
      category: "modern:painting",
      x: 104,
      y: 24,
      flipped: !1,
    },
  ],
  mansion: [
    {
      spriteId: "mansion:carpet:0",
      category: "mansion:carpet",
      x: 0,
      y: 72,
      flipped: !1,
    },
    {
      spriteId: "mansion:bed-canopy:0",
      category: "mansion:bed-canopy",
      x: 0,
      y: 24,
      flipped: !1,
    },
    {
      spriteId: "mansion:bed:0",
      category: "mansion:bed",
      x: 0,
      y: 64,
      flipped: !1,
    },
    {
      spriteId: "mansion:desk:1",
      category: "mansion:desk",
      x: 40,
      y: 152,
      flipped: !1,
    },
    {
      spriteId: "mansion:desk-chair:1",
      category: "mansion:desk-chair",
      x: 56,
      y: 184,
      flipped: !1,
    },
    {
      spriteId: "mansion:bookshelf:3",
      category: "mansion:bookshelf",
      x: 0,
      y: 112,
      flipped: !1,
    },
    {
      spriteId: "mansion:fireplace:1",
      category: "mansion:fireplace",
      x: 80,
      y: 56,
      flipped: !1,
    },
    {
      spriteId: "mansion:grandfather-clock:0",
      category: "mansion:grandfather-clock",
      x: 128,
      y: 40,
      flipped: !1,
    },
    {
      spriteId: "mansion:painting:2",
      category: "mansion:painting",
      x: 104,
      y: 8,
      flipped: !1,
    },
    {
      spriteId: "mansion:painting:1",
      category: "mansion:painting",
      x: 64,
      y: 16,
      flipped: !1,
    },
    {
      spriteId: "mansion:candle-big:0",
      category: "mansion:candle-big",
      x: 96,
      y: 40,
      flipped: !1,
    },
    {
      spriteId: "mansion:candle-small:0",
      category: "mansion:candle-small",
      x: 88,
      y: 48,
      flipped: !1,
    },
    {
      spriteId: "mansion:letter:0",
      category: "mansion:letter",
      x: 64,
      y: 152,
      flipped: !1,
    },
    {
      spriteId: "mansion:ink-brush:0",
      category: "mansion:ink-brush",
      x: 80,
      y: 152,
      flipped: !1,
    },
    {
      spriteId: "mansion:ink-brush:1",
      category: "mansion:ink-brush",
      x: 80,
      y: 160,
      flipped: !1,
    },
    {
      spriteId: "mansion:dog:0",
      category: "mansion:dog",
      x: 8,
      y: 168,
      flipped: !1,
    },
    {
      spriteId: "mansion:dining-chair:3",
      category: "mansion:dining-chair",
      x: 128,
      y: 104,
      flipped: !1,
    },
    {
      spriteId: "mansion:stool:1",
      category: "mansion:stool",
      x: 64,
      y: 112,
      flipped: !1,
    },
    {
      spriteId: "mansion:dining-chair:3",
      category: "mansion:dining-chair",
      x: 96,
      y: 104,
      flipped: !0,
    },
    {
      spriteId: "mansion:dining-table:1",
      category: "mansion:dining-table",
      x: 104,
      y: 96,
      flipped: !1,
    },
    {
      spriteId: "mansion:globe-bar:0",
      category: "mansion:globe-bar",
      x: 128,
      y: 144,
      flipped: !1,
    },
    {
      spriteId: "mansion:side-table:0",
      category: "mansion:side-table",
      x: 96,
      y: 160,
      flipped: !1,
    },
    {
      spriteId: "mansion:wine:1",
      category: "mansion:wine",
      x: 112,
      y: 96,
      flipped: !1,
    },
    {
      spriteId: "mansion:wine:0",
      category: "mansion:wine",
      x: 120,
      y: 104,
      flipped: !1,
    },
    {
      spriteId: "mansion:wine-glass:0",
      category: "mansion:wine-glass",
      x: 48,
      y: 152,
      flipped: !1,
    },
  ],
  elegant: [
    {
      spriteId: "elegant:carpet:2",
      category: "elegant:carpet",
      x: 80,
      y: 104,
      flipped: !1,
    },
    {
      spriteId: "elegant:sofa:2",
      category: "elegant:sofa",
      x: 88,
      y: 64,
      flipped: !1,
    },
    {
      spriteId: "elegant:wall-photo:0",
      category: "elegant:wall-photo",
      x: 88,
      y: 32,
      flipped: !1,
    },
    {
      spriteId: "elegant:wall-photo:1",
      category: "elegant:wall-photo",
      x: 128,
      y: 16,
      flipped: !1,
    },
    {
      spriteId: "elegant:wall-photo:2",
      category: "elegant:wall-photo",
      x: 128,
      y: 48,
      flipped: !1,
    },
    {
      spriteId: "elegant:certificate:1",
      category: "elegant:certificate",
      x: 24,
      y: 24,
      flipped: !1,
    },
    {
      spriteId: "elegant:certificate:2",
      category: "elegant:certificate",
      x: 40,
      y: 48,
      flipped: !1,
    },
    {
      spriteId: "elegant:cabinet:3",
      category: "elegant:cabinet",
      x: 56,
      y: 72,
      flipped: !1,
    },
    {
      spriteId: "elegant:plant:0",
      category: "elegant:plant",
      x: 64,
      y: 56,
      flipped: !1,
    },
    {
      spriteId: "elegant:side-table:0",
      category: "elegant:side-table",
      x: 142,
      y: 72,
      flipped: !1,
    },
    {
      spriteId: "elegant:ceramic-jar:1",
      category: "elegant:ceramic-jar",
      x: 144,
      y: 64,
      flipped: !1,
    },
    {
      spriteId: "elegant:ceramic-jar:0",
      category: "elegant:ceramic-jar",
      x: 149,
      y: 72,
      flipped: !1,
    },
    {
      spriteId: "elegant:stool:0",
      category: "elegant:stool",
      x: 72,
      y: 120,
      flipped: !1,
    },
    {
      spriteId: "elegant:carpet:0",
      category: "elegant:carpet",
      x: 24,
      y: 160,
      flipped: !1,
    },
    {
      spriteId: "elegant:coffee-table:1",
      category: "elegant:coffee-table",
      x: 96,
      y: 112,
      flipped: !1,
    },
    {
      spriteId: "elegant:dining-chair:1",
      category: "elegant:dining-chair",
      x: 56,
      y: 152,
      flipped: !1,
    },
    {
      spriteId: "elegant:dining-chair:1",
      category: "elegant:dining-chair",
      x: 24,
      y: 152,
      flipped: !0,
    },
    {
      spriteId: "elegant:dining-chair:3",
      category: "elegant:dining-chair",
      x: 40,
      y: 136,
      flipped: !1,
    },
    {
      spriteId: "elegant:armchair:2",
      category: "elegant:armchair",
      x: 134,
      y: 104,
      flipped: !1,
    },
    {
      spriteId: "elegant:dining-table:0",
      category: "elegant:dining-table",
      x: 32,
      y: 152,
      flipped: !1,
    },
    {
      spriteId: "elegant:plate:1",
      category: "elegant:plate",
      x: 40,
      y: 168,
      flipped: !1,
    },
    {
      spriteId: "elegant:dining-chair:4",
      category: "elegant:dining-chair",
      x: 40,
      y: 176,
      flipped: !1,
    },
    {
      spriteId: "elegant:plate:0",
      category: "elegant:plate",
      x: 48,
      y: 152,
      flipped: !1,
    },
    {
      spriteId: "elegant:teacup:0",
      category: "elegant:teacup",
      x: 96,
      y: 112,
      flipped: !1,
    },
    {
      spriteId: "elegant:bookshelf:0",
      category: "elegant:bookshelf",
      x: 0,
      y: 48,
      flipped: !1,
    },
    {
      spriteId: "elegant:teacup:1",
      category: "elegant:teacup",
      x: 112,
      y: 112,
      flipped: !1,
    },
    {
      spriteId: "elegant:wine-glass:1",
      category: "elegant:wine-glass",
      x: 40,
      y: 152,
      flipped: !1,
    },
    {
      spriteId: "elegant:side-table:0",
      category: "elegant:side-table",
      x: 136,
      y: 184,
      flipped: !1,
    },
    {
      spriteId: "elegant:desk:1",
      category: "elegant:desk",
      x: 0,
      y: 88,
      flipped: !1,
    },
    {
      spriteId: "elegant:desk-chair:1",
      category: "elegant:desk-chair",
      x: 16,
      y: 112,
      flipped: !1,
    },
    {
      spriteId: "elegant:book:1",
      category: "elegant:book",
      x: 16,
      y: 96,
      flipped: !1,
    },
    {
      spriteId: "elegant:vase-flower:0",
      category: "elegant:vase-flower",
      x: 40,
      y: 72,
      flipped: !1,
    },
    {
      spriteId: "elegant:plant:1",
      category: "elegant:plant",
      x: 112,
      y: 152,
      flipped: !1,
    },
    {
      spriteId: "elegant:ceramic-jar:2",
      category: "elegant:ceramic-jar",
      x: 136,
      y: 176,
      flipped: !1,
    },
    {
      spriteId: "elegant:table-lamp:0",
      category: "elegant:table-lamp",
      x: 8,
      y: 80,
      flipped: !1,
    },
  ],
  singleman: [
    {
      spriteId: "singleman:floor-mat:0",
      category: "singleman:floor-mat",
      x: 80,
      y: 128,
      flipped: !1,
    },
    {
      spriteId: "singleman:bed:2",
      category: "singleman:bed",
      x: 0,
      y: 80,
      flipped: !1,
    },
    {
      spriteId: "singleman:wardrobe:2",
      category: "singleman:wardrobe",
      x: 64,
      y: 48,
      flipped: !1,
    },
    {
      spriteId: "singleman:tshirt-rack:1",
      category: "singleman:tshirt-rack",
      x: 8,
      y: 40,
      flipped: !1,
    },
    {
      spriteId: "singleman:coffee-table:1",
      category: "singleman:coffee-table",
      x: 120,
      y: 80,
      flipped: !1,
    },
    {
      spriteId: "singleman:game-console:0",
      category: "singleman:game-console",
      x: 72,
      y: 128,
      flipped: !1,
    },
    {
      spriteId: "singleman:tshirt-rack:0",
      category: "singleman:tshirt-rack",
      x: 32,
      y: 40,
      flipped: !1,
    },
    {
      spriteId: "singleman:armchair:5",
      category: "singleman:armchair",
      x: 96,
      y: 152,
      flipped: !1,
    },
    {
      spriteId: "singleman:shelf-full:1",
      category: "singleman:shelf-full",
      x: 0,
      y: 160,
      flipped: !1,
    },
    {
      spriteId: "singleman:window:0",
      category: "singleman:window",
      x: 120,
      y: 8,
      flipped: !1,
    },
    {
      spriteId: "singleman:tv:3",
      category: "singleman:tv",
      x: 96,
      y: 112,
      flipped: !1,
    },
    {
      spriteId: "singleman:game-controller:0",
      category: "singleman:game-controller",
      x: 120,
      y: 136,
      flipped: !1,
    },
    {
      spriteId: "singleman:cardboard:1",
      category: "singleman:cardboard",
      x: 120,
      y: 189,
      flipped: !1,
    },
    {
      spriteId: "singleman:game-cartridge:1",
      category: "singleman:game-cartridge",
      x: 80,
      y: 120,
      flipped: !1,
    },
    {
      spriteId: "singleman:drink-cooler:0",
      category: "singleman:drink-cooler",
      x: 96,
      y: 72,
      flipped: !1,
    },
    {
      spriteId: "singleman:storage-box:10",
      category: "singleman:storage-box",
      x: 72,
      y: 152,
      flipped: !1,
    },
    {
      spriteId: "singleman:instant-noodle:1",
      category: "singleman:instant-noodle",
      x: 72,
      y: 152,
      flipped: !1,
    },
    {
      spriteId: "singleman:poster:1",
      category: "singleman:poster",
      x: 40,
      y: 8,
      flipped: !1,
    },
    {
      spriteId: "singleman:tin-plant:0",
      category: "singleman:tin-plant",
      x: 48,
      y: 183,
      flipped: !1,
    },
    {
      spriteId: "singleman:microwave:0",
      category: "singleman:microwave",
      x: 120,
      y: 64,
      flipped: !1,
    },
    {
      spriteId: "singleman:desk:1",
      category: "singleman:desk",
      x: 0,
      y: 128,
      flipped: !1,
    },
    {
      spriteId: "singleman:laptop:0",
      category: "singleman:laptop",
      x: 8,
      y: 128,
      flipped: !1,
    },
    {
      spriteId: "singleman:book:7",
      category: "singleman:book",
      x: 32,
      y: 120,
      flipped: !1,
    },
    {
      spriteId: "singleman:storage-box:3",
      category: "singleman:storage-box",
      x: 128,
      y: 152,
      flipped: !1,
    },
    {
      spriteId: "singleman:canned-drink:1",
      category: "singleman:canned-drink",
      x: 128,
      y: 152,
      flipped: !1,
    },
    {
      spriteId: "singleman:soda-bottle:0",
      category: "singleman:soda-bottle",
      x: 136,
      y: 144,
      flipped: !1,
    },
    {
      spriteId: "singleman:bottle-candle:1",
      category: "singleman:bottle-candle",
      x: 144,
      y: 72,
      flipped: !1,
    },
    {
      spriteId: "singleman:medkit:0",
      category: "singleman:medkit",
      x: 72,
      y: 40,
      flipped: !1,
    },
    {
      spriteId: "singleman:cardboard:0",
      category: "singleman:cardboard",
      x: 136,
      y: 182,
      flipped: !1,
    },
  ],
};
function Aa(r) {
  return r.replace(/<think(?:ing)?[\s\S]*?<\/think(?:ing)?>/gi, "").trim();
}
function Ma(r) {
  const n = Date.now();
  return r.map((f, g) => ({
    id: `default_${n}_${g}`,
    spriteId: f.spriteId,
    category: f.category,
    x: f.x,
    y: f.y,
    flipped: f.flipped,
  }));
}
async function Ra(r) {
  var w, E, T;
  const { preset: n, character: f, homePlace: g, worldBooks: P } = r,
    L = q.map((R) => `- "${R.id}"（${R.name}）`).join(`
`),
    N = `${Pt(
      P,
      "character_room"
    )}根据以下角色信息，从可选风格包中选一个最匹配的。

角色：${f.name}
${f.gender ? `性别：${f.gender}` : ""}
${f.intro ? `简介：${f.intro}` : ""}
${f.background ? `背景：${f.background}` : ""}
${f.bio ? `个人简介：${f.bio}` : ""}
${g ? `家的位置：${g.name}（${g.description}）` : ""}

可选风格包：
${L}

只输出风格包 ID（如 "classic"），不要任何其他内容。`,
    m = await Et(n, {
      model: n.model,
      messages: [
        {
          role: "system",
          content: "你是一个选择助手。只输出选项 ID，不要任何解释。",
        },
        { role: "user", content: N },
      ],
      temperature: 0.3,
    });
  if (!m.ok) throw new Error(`风格选择失败: ${m.status}`);
  const u = m.data || {};
  let y = Aa(
    ((T =
      (E = (w = u.choices) == null ? void 0 : w[0]) == null
        ? void 0
        : E.message) == null
      ? void 0
      : T.content) || ""
  ).trim();
  if (((y = y.replace(/["""']/g, "").trim()), q.some((R) => R.id === y)))
    return y;
  const j = q.find((R) => y.includes(R.id));
  return j ? j.id : "classic";
}
async function Gt(r) {
  const n = await Ra(r),
    f = q.find((P) => P.id === n),
    g = ks[n] || ks.classic;
  return {
    packId: f.id,
    wallSrc: f.wallSrc,
    floorSrc: f.floorSrc,
    furniture: Ma(g),
  };
}
function Ta(r) {
  return r.replace(/<think(?:ing)?[\s\S]*?<\/think(?:ing)?>/gi, "").trim();
}
const St = {},
  Ns = {};
for (const r of q) {
  Ns[r.id] = r.name;
  for (const n of r.categories)
    (St[`${r.id}:${n.key}`] = n.label), St[n.key] || (St[n.key] = n.label);
}
function La(r) {
  return Ns[r.split(":")[0]] || "";
}
function Oa(r) {
  const n = new Set(),
    f = [];
  for (const g of r)
    n.has(g.category) ||
      (n.add(g.category),
      f.push({ key: g.category, label: St[g.category] || g.category }));
  return f;
}
function Da(r, n, f, g, P) {
  const L = f.map((m) => {
      const u = La(m.key);
      return u
        ? `- "${m.key}"（${m.label}，${u}风格）`
        : `- "${m.key}"（${m.label}）`;
    }).join(`
`),
    h = f.map((m) => `"${m.key}"`).join(", ");
  return `${Pt(P, "peek_room")}你现在要为一个角色的房间生成"物件观察描写"。

场景设定：
${
  g
    ? `你和${r.name}住在一起，趁ta不在家，偷偷翻看ta的东西——虽然住在同一个屋檐下，但有些角落你从没仔细看过。`
    : `${r.name}不在家。你偷偷溜进了ta的房间，小心翼翼地打量每一件东西——像个闯入私人领地的小偷，试图从物件的痕迹里拼凑出ta不为人知的一面。`
}

角色信息：
- 名称：${r.name}
${r.gender ? `- 性别：${r.gender}` : ""}
${r.intro ? `- 简介：${r.intro}` : ""}
${r.background ? `- 背景：${r.background}` : ""}
${r.bio ? `- 个人简介：${r.bio}` : ""}
${
  n
    ? `
住处位置：${n.name}
住处描述：${n.description}`
    : ""
}

[写作风格——核心原则]
你写的是窥探者视角的碎片化观察笔记。核心是"我看到了什么"→"这说明了什么"的暗示链条。

好的观察像这样：
- 从具体物证推断生活习惯："三个闹钟，时间各差五分钟。最远的那个贴了两层胶带——大概被摔过。"
- 发现不该发现的东西："枕头底下压着一本写了一半的东西，翻开第一页就合上了——好像不应该看。"
- 物件之间的矛盾暗示性格："书架上整整齐齐，但最下层塞满了拆开没组装完的快递。"
- 带着窃入者的心虚和好奇："冰箱门上贴的照片...凑近看了一眼，心跳漏了半拍。"

绝对禁止：
- 空洞的概括（"可以看出ta很xxx"、"似乎是个xxx的人"）
- 散文腔和抒情（"阳光洒在..."、"岁月的痕迹"）
- 没有画面感的描述（"摆放整齐"、"有些旧了"）
- 复述角色简介里已有的信息

每条 15-50 字。用"你"或无主语均可。语气可以是好奇、心虚、意外、觉得好笑、微妙心动——但要克制，点到为止。
所有描写必须使用中文，即使上下文中出现外语也不要使用外语。
只输出纯文字描写，不要输出图片、表情包、sticker 等非文字内容（emoji 可以适当使用）。

[家具列表]
房间里有这些物件：
${L}

请为每件家具生成 3 条观察描写，风格尽量不同（比如一条客观描述、一条意外发现、一条带情绪反应）。

直接输出如下格式的 JSON（不要包裹在 \`\`\` 中）：
{${h}}
其中每个 key 对应一个字符串数组（3 个元素）。`;
}
async function Ka(r) {
  var R, X, O;
  const {
      preset: n,
      character: f,
      homePlace: g,
      furniture: P,
      cohabiting: L,
      worldBooks: h,
    } = r,
    N = Oa(P);
  if (N.length === 0) throw new Error("房间里还没有家具");
  const m = await Et(n, {
    model: n.model,
    messages: [
      {
        role: "system",
        content:
          "你是一个场景描写助手。严格按照用户要求的 JSON 格式输出，不要添加任何解释、markdown 标记或代码块包裹。",
      },
      { role: "user", content: Da(f, g, N, L, h) },
    ],
    temperature: Math.min(n.temperature + 0.1, 1.3),
  });
  if (!m.ok) throw new Error(`观察描写生成失败: ${m.status} ${m.errorText}`);
  const u = m.data || {};
  let y = Ta(
    ((O =
      (X = (R = u.choices) == null ? void 0 : R[0]) == null
        ? void 0
        : X.message) == null
      ? void 0
      : O.content) || ""
  );
  y = y
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
  const j = JSON.parse(y),
    w = (V) => V.replace(/\[\[SEND_\w+:.*?\]\]/g, "").trim(),
    E = {};
  for (const V of N) {
    const U = j[V.key];
    Array.isArray(U)
      ? (E[V.key] = U.map((A) => (typeof A == "string" ? w(A) : ""))
          .filter((A) => A.length > 0)
          .slice(0, 3))
      : (E[V.key] = []);
  }
  if (Object.values(E).filter((V) => V.length === 0).length > N.length / 2)
    throw new Error("观察描写生成不完整");
  return E;
}
const Ss = 20,
  Cs = 26,
  z = 8,
  lt = Ss * z,
  It = Cs * z,
  ws = 11 * z,
  Fa = "rgba(0,0,0,0.04)",
  Ba = 4;
function $s(r) {
  return new Promise((n, f) => {
    const g = new Image();
    (g.onload = () => n(g)),
      (g.onerror = () => f(new Error(`Failed to load: ${r}`))),
      (g.src = r);
  });
}
const js = _t,
  Ua = {};
for (const r of _t.categories) Ua[r.key] = r.label;
function sl() {
  const {
      setCurrentApp: r,
      activeUserId: n,
      currentUser: f,
      knowledge: g,
      messages: P,
      chats: L,
      characters: h,
      users: N,
      apiPresets: m,
      activePresetId: u,
      wardrobeItems: y,
      setWardrobeItems: j,
      unlockedFurniturePackIds: w,
      setUnlockedFurniturePackIds: E,
      places: T,
      entityMapBindings: R,
      userContacts: X,
      worldBooks: O,
    } = zs(),
    V = X[n] || [],
    U = h.filter((t) => V.includes(t.id)),
    [A, te] = c.useState(null),
    [F, se] = c.useState(js.wallSrc),
    [M, J] = c.useState(js.floorSrc),
    [Z, Ae] = c.useState(null),
    [Oe, ze] = c.useState(null),
    [nt, De] = c.useState(!0),
    [Y, ue] = c.useState(null),
    [ye, ie] = c.useState(0),
    [Q, Xe] = c.useState([]),
    [ee, oe] = c.useState(null),
    [zt, Ps] = c.useState(null),
    [I, Es] = c.useState("menu"),
    D = c.useCallback((t) => {
      t !== "catalog" && oe(null), Es(t);
    }, []),
    rt = `house_alone_${n}`,
    [Ie, Xt] = c.useState(null),
    [it, Jt] = c.useState(!1),
    [Zt, ct] = c.useState(null),
    [At, Mt] = c.useState([]),
    [Rt, ve] = c.useState(null),
    Qt = c.useRef(null);
  c.useEffect(() => {
    B.getItem(rt)
      .then((t) => {
        t && Xt(t);
      })
      .catch(() => {});
  }, [rt]),
    c.useEffect(() => {
      var t;
      (t = Qt.current) == null || t.scrollIntoView({ behavior: "smooth" });
    }, [At]);
  const ot = c.useCallback(async () => {
      ct(null), Mt([]);
      const t = m.find((a) => a.id === u);
      if (!t) {
        ct("请先在设置中配置 API");
        return;
      }
      if (Q.length === 0) {
        ct("房间里还没有家具，先去装修吧");
        return;
      }
      Jt(!0);
      try {
        const a = await Na({
          preset: t,
          currentUser: f,
          furniture: Q,
          knowledge: g,
          messages: P,
          chats: L,
          characters: h,
          users: N,
          worldBooks: O,
        });
        await B.setItem(rt, a).catch(() => {}), Xt(a);
      } catch (a) {
        ct(a.message || "台词生成失败");
      } finally {
        Jt(!1);
      }
    }, [m, u, Q, f, g, P, L, h, N, rt]),
    _s = c.useCallback(() => {
      D("alone"), !Ie && !it && ot();
    }, [D, Ie, it, ot]),
    [Ne, As] = c.useState(null),
    [Se, Tt] = c.useState(null),
    [dt, es] = c.useState(!1),
    [pt, Je] = c.useState(null),
    [Lt, ft] = c.useState([]),
    Ot = c.useRef({}),
    ts = c.useRef(null);
  c.useEffect(() => {
    var t;
    (t = ts.current) == null || t.scrollIntoView({ behavior: "smooth" });
  }, [Lt]);
  const Me = c.useMemo(() => h.find((t) => t.id === Ne), [h, Ne]),
    ce = c.useCallback(
      (t) => {
        const a = R.find((s) => s.entityId === n),
          l = R.find((s) => s.entityId === t);
        return !(a != null && a.homePlaceId) || !(l != null && l.homePlaceId)
          ? !1
          : a.homePlaceId === l.homePlaceId;
      },
      [R, n]
    ),
    gt = c.useCallback(async () => {
      if (!Ne) return;
      const t = h.find((l) => l.id === Ne);
      if (!t) return;
      Je(null), ft([]), (Ot.current = {});
      const a = m.find((l) => l.id === u);
      if (!a) {
        Je("请先在设置中配置 API");
        return;
      }
      if (Q.length === 0) {
        Je("房间里还没有家具，先去装修吧");
        return;
      }
      es(!0);
      try {
        const l = await bs({
          preset: a,
          currentUser: f,
          character: t,
          furniture: Q,
          knowledge: g,
          messages: P,
          chats: L,
          characters: h,
          users: N,
          cohabiting: ce(t.id),
          worldBooks: O,
        });
        await B.setItem(`house_visit_${n}_${Ne}`, l).catch(() => {}), Tt(l);
      } catch (l) {
        Je(l.message || "对白生成失败");
      } finally {
        es(!1);
      }
    }, [Ne, m, u, Q, f, g, P, L, h, N, n, ce]),
    Ms = c.useCallback(
      async (t) => {
        As(t), ft([]), Je(null);
        const a = await B.getItem(`house_visit_${n}_${t}`).catch(() => null);
        Tt(a || null), D("visit");
      },
      [D, n]
    );
  c.useEffect(() => {
    I === "visit" && Ne && !Se && !dt && !pt && gt();
  }, [I, Ne, Se, dt, pt, gt]);
  const [H, ss] = c.useState(null),
    [$, ae] = c.useState(null),
    [de, be] = c.useState([]),
    [Rs, pe] = c.useState(null),
    [Ts, fe] = c.useState(null),
    [Ls, ge] = c.useState(null),
    [Ke, Fe] = c.useState(!1),
    [mt, ke] = c.useState(null),
    [le, Ze] = c.useState(!1),
    [Be, xt] = c.useState(null),
    [as, ls] = c.useState(!1),
    [ns, Dt] = c.useState(null),
    [Kt, Ft] = c.useState([]),
    ht = c.useRef({}),
    rs = c.useRef(null),
    [we, Os] = c.useState(null),
    [Ce, ut] = c.useState(null),
    [yt, is] = c.useState(!1),
    [bt, Qe] = c.useState(null),
    [Bt, kt] = c.useState([]),
    wt = c.useRef({}),
    cs = c.useRef(null),
    $e = c.useMemo(() => h.find((t) => t.id === H), [h, H]);
  c.useEffect(() => {
    var t;
    (t = rs.current) == null || t.scrollIntoView({ behavior: "smooth" });
  }, [Kt]);
  const me = c.useCallback(
      (t) => {
        const a = R.find((l) => l.entityId === t);
        if (a != null && a.homePlaceId)
          return T.find((l) => l.id === a.homePlaceId);
      },
      [R, T]
    ),
    Pe = c.useMemo(() => (H ? ce(H) : !1), [H, ce]),
    Re = c.useCallback(
      (t) => {
        const a = R.find((s) => s.entityId === t),
          l = (a == null ? void 0 : a.homePlaceId) || t;
        return `house_charroom_${n}_${l}`;
      },
      [R, n]
    ),
    os = c.useCallback(async () => {
      if (!H || de.length === 0) return;
      const t = h.find((l) => l.id === H);
      if (!t) return;
      const a = m.find((l) => l.id === u);
      if (!a) {
        Dt("请先在设置中配置 API");
        return;
      }
      Dt(null), Ft([]), (ht.current = {}), ls(!0);
      try {
        const l = me(H),
          s = await Ka({
            preset: a,
            character: t,
            homePlace: l,
            furniture: de,
            cohabiting: Pe,
            worldBooks: O,
          });
        await B.setItem(`house_peekobs_${n}_${H}`, s).catch(() => {}), xt(s);
      } catch (l) {
        Dt(l.message || "描写生成失败");
      } finally {
        ls(!1);
      }
    }, [H, de, h, m, u, me, n, Pe]),
    Ds = c.useCallback(
      async (t) => {
        if (
          (ss(t),
          ke(null),
          ae(null),
          be([]),
          pe(null),
          fe(null),
          ge(null),
          Ze(!1),
          xt(null),
          Ft([]),
          (ht.current = {}),
          D("peekroom"),
          ce(t))
        ) {
          ae({ packId: "", wallSrc: F, floorSrc: M, furniture: Q }),
            be(Q),
            pe(A),
            fe(Z),
            ge(Oe),
            B.getItem(`house_peekobs_${n}_${t}`)
              .then((s) => {
                s && xt(s);
              })
              .catch(() => {});
          return;
        }
        const a = Re(t);
        try {
          const s = await B.getItem(a);
          if (s) {
            ae(s),
              be(s.furniture),
              B.getItem(`house_peekobs_${n}_${t}`)
                .then((d) => {
                  d && xt(d);
                })
                .catch(() => {});
            const i = q.find((d) => d.id === s.packId);
            if (i) {
              const d = await Ge(i.id, i.categories);
              pe(d);
            }
            const p = new Image();
            p.src = s.wallSrc;
            const o = new Image();
            (o.src = s.floorSrc),
              await Promise.all([
                new Promise((d) => {
                  (p.onload = () => d()), (p.onerror = () => d());
                }),
                new Promise((d) => {
                  (o.onload = () => d()), (o.onerror = () => d());
                }),
              ]),
              fe(p),
              ge(o);
            return;
          }
        } catch {}
        const l = m.find((s) => s.id === u);
        if (!l) {
          ke("请先在设置中配置 API");
          return;
        }
        Fe(!0);
        try {
          const s = h.find((b) => b.id === t);
          if (!s) throw new Error("角色不存在");
          const i = me(t),
            p = await Gt({
              preset: l,
              character: s,
              homePlace: i,
              worldBooks: O,
            });
          await B.setItem(a, p).catch(() => {}), ae(p), be(p.furniture);
          const o = q.find((b) => b.id === p.packId);
          if (o) {
            const b = await Ge(o.id, o.categories);
            pe(b);
          }
          const d = new Image();
          d.src = p.wallSrc;
          const x = new Image();
          (x.src = p.floorSrc),
            await Promise.all([
              new Promise((b) => {
                (d.onload = () => b()), (d.onerror = () => b());
              }),
              new Promise((b) => {
                (x.onload = () => b()), (x.onerror = () => b());
              }),
            ]),
            fe(d),
            ge(x);
        } catch (s) {
          ke(s.message || "房间生成失败");
        } finally {
          Fe(!1);
        }
      },
      [D, n, m, u, h, me, ce, Re, Q, F, M, A, Z, Oe]
    ),
    Ks = c.useCallback(async () => {
      if (!H) return;
      const t = m.find((l) => l.id === u);
      if (!t) {
        ke("请先在设置中配置 API");
        return;
      }
      const a = h.find((l) => l.id === H);
      if (a) {
        ke(null), Fe(!0);
        try {
          const l = me(H),
            s = await Gt({
              preset: t,
              character: a,
              homePlace: l,
              worldBooks: O,
            });
          await B.setItem(Re(H), s), ae(s);
          const i = q.find((d) => d.id === s.packId);
          if (i) {
            const d = await Ge(i.id, i.categories);
            pe(d);
          }
          const p = new Image();
          p.src = s.wallSrc;
          const o = new Image();
          (o.src = s.floorSrc),
            await Promise.all([
              new Promise((d) => {
                (p.onload = () => d()), (p.onerror = () => d());
              }),
              new Promise((d) => {
                (o.onload = () => d()), (o.onerror = () => d());
              }),
            ]),
            fe(p),
            ge(o);
        } catch (l) {
          ke(l.message || "房间生成失败");
        } finally {
          Fe(!1);
        }
      }
    }, [H, m, u, h, me, n]),
    xe = c.useMemo(() => h.find((t) => t.id === we), [h, we]);
  c.useEffect(() => {
    var t;
    (t = cs.current) == null || t.scrollIntoView({ behavior: "smooth" });
  }, [Bt]);
  const $t = c.useCallback(async () => {
      if (!we) return;
      const t = h.find((l) => l.id === we);
      if (!t) return;
      const a = m.find((l) => l.id === u);
      if (!a) {
        Qe("请先在设置中配置 API");
        return;
      }
      if (de.length === 0) {
        Qe("房间里还没有家具");
        return;
      }
      Qe(null), kt([]), (wt.current = {}), is(!0);
      try {
        const l = me(we),
          s = await bs({
            preset: a,
            currentUser: f,
            character: t,
            furniture: de,
            knowledge: g,
            messages: P,
            chats: L,
            characters: h,
            users: N,
            mode: "knock",
            homePlace: l,
            cohabiting: Pe,
            worldBooks: O,
          });
        await B.setItem(`house_knock_${n}_${we}`, s).catch(() => {}), ut(s);
      } catch (l) {
        Qe(l.message || "对白生成失败");
      } finally {
        is(!1);
      }
    }, [we, m, u, de, f, g, P, L, h, N, me, n, Pe]),
    ds = c.useCallback(
      async (t) => {
        if (
          (Os(t),
          Qe(null),
          ut(null),
          kt([]),
          (wt.current = {}),
          ss(t),
          ke(null),
          ae(null),
          be([]),
          pe(null),
          fe(null),
          ge(null),
          Ze(!1),
          D("knock"),
          ce(t))
        ) {
          const s = await B.getItem(`house_knock_${n}_${t}`).catch(() => null);
          s && ut(s),
            ae({ packId: "", wallSrc: F, floorSrc: M, furniture: Q }),
            be(Q),
            pe(A),
            fe(Z),
            ge(Oe);
          return;
        }
        const a = Re(t);
        try {
          const s = await B.getItem(a);
          if (s) {
            const i = await B.getItem(`house_knock_${n}_${t}`).catch(
              () => null
            );
            i && ut(i), ae(s), be(s.furniture);
            const p = q.find((x) => x.id === s.packId);
            p && pe(await Ge(p.id, p.categories));
            const o = new Image();
            o.src = s.wallSrc;
            const d = new Image();
            (d.src = s.floorSrc),
              await Promise.all([
                new Promise((x) => {
                  (o.onload = () => x()), (o.onerror = () => x());
                }),
                new Promise((x) => {
                  (d.onload = () => x()), (d.onerror = () => x());
                }),
              ]),
              fe(o),
              ge(d);
            return;
          }
        } catch {}
        const l = m.find((s) => s.id === u);
        if (!l) {
          ke("请先在设置中配置 API");
          return;
        }
        Fe(!0);
        try {
          const s = h.find((b) => b.id === t);
          if (!s) throw new Error("角色不存在");
          const i = me(t),
            p = await Gt({
              preset: l,
              character: s,
              homePlace: i,
              worldBooks: O,
            });
          await B.setItem(a, p).catch(() => {}), ae(p), be(p.furniture);
          const o = q.find((b) => b.id === p.packId);
          o && pe(await Ge(o.id, o.categories));
          const d = new Image();
          d.src = p.wallSrc;
          const x = new Image();
          (x.src = p.floorSrc),
            await Promise.all([
              new Promise((b) => {
                (d.onload = () => b()), (d.onerror = () => b());
              }),
              new Promise((b) => {
                (x.onload = () => b()), (x.onerror = () => b());
              }),
            ]),
            fe(d),
            ge(x);
        } catch (s) {
          ke(s.message || "房间生成失败");
        } finally {
          Fe(!1);
        }
      },
      [D, n, m, u, h, me, ce, Re, Q, F, M, A, Z, Oe]
    );
  c.useEffect(() => {
    I === "knock" && we && $ && !Ke && !Ce && !yt && !bt && $t();
  }, [I, we, $, Ke, Ce, yt, bt, $t]);
  const et = c.useRef(null),
    Ut = c.useRef(null),
    [K, Fs] = c.useState(2),
    jt = c.useRef(null);
  c.useEffect(() => {
    De(!0), ue(null);
    let t = !1;
    const a = (l, s, i) =>
      Promise.race([
        l,
        new Promise((p, o) =>
          setTimeout(() => o(new Error(`${i} 加载超时`)), s)
        ),
      ]);
    return (
      Promise.allSettled(
        q.map((l) => a(Ge(l.id, l.categories), 15e3, l.name))
      ).then((l) => {
        if (t) return;
        const s = new Map(),
          i = [];
        let p = 0;
        if (
          (l.forEach((o, d) => {
            o.status === "fulfilled"
              ? (o.value.images.forEach((x, b) => s.set(b, x)),
                i.push(...o.value.regions),
                p++)
              : console.warn(
                  `[HouseApp] 风格包 ${q[d].id} 加载失败:`,
                  o.reason
                );
          }),
          p === 0)
        ) {
          ue("素材加载失败，请检查网络后重试"), De(!1);
          return;
        }
        te({ images: s, regions: i }), De(!1);
      }),
      () => {
        t = !0;
      }
    );
  }, [ye]),
    c.useEffect(() => {
      $s(F)
        .then(Ae)
        .catch(() => Ae(null));
    }, [F]),
    c.useEffect(() => {
      $s(M)
        .then(ze)
        .catch(() => ze(null));
    }, [M]);
  const tt = c.useMemo(
    () =>
      A
        ? q
            .map((t) => {
              const a = [];
              for (const l of t.categories) {
                const s = A.regions.filter(
                  (i) => i.category === `${t.id}:${l.key}`
                );
                s.length > 0 &&
                  a.push({ key: l.key, label: l.label, regions: s });
              }
              return { pack: t, groups: a };
            })
            .filter((t) => t.groups.length > 0)
        : [],
    [A]
  );
  c.useEffect(() => {
    const t = y.filter((s) => s.category === "furniture_pack" && s.isEquipped);
    if (t.length === 0) return;
    const a = t.map((s) => Zs(s)).filter((s) => !!s);
    a.length > 0 &&
      E((s) => {
        const i = new Set(s);
        for (const p of a) i.add(p);
        return i.size === s.length ? s : Array.from(i);
      });
    const l = new Set(t.map((s) => s.id));
    j((s) => s.filter((i) => !l.has(i.id)));
  }, [y, j, E]);
  const Wt = c.useMemo(() => {
      const t = new Set([_t.id]);
      for (const a of w) t.add(a);
      return t;
    }, [w]),
    Ue = c.useMemo(() => tt.filter((t) => Wt.has(t.pack.id)), [tt, Wt]),
    ps = c.useMemo(() => {
      if (
        !($ != null && $.packId) ||
        new Set(Ue.map((l) => l.pack.id)).has($.packId)
      )
        return Ue;
      const a = tt.find((l) => l.pack.id === $.packId);
      return a ? [...Ue, a] : Ue;
    }, [Ue, tt, $]);
  c.useEffect(() => {
    const t = Ut.current;
    if (!t) return;
    const a = new ResizeObserver((l) => {
      var i;
      const s = ((i = l[0]) == null ? void 0 : i.contentRect.width) || 320;
      Fs(Math.max(1, s / lt));
    });
    return a.observe(t), () => a.disconnect();
  }, [I]);
  const We = I === "peekroom" || I === "knock",
    G = We ? A || Rs : A,
    Te = We ? Ts : Z,
    st = We ? Ls : Oe,
    je = We ? de : Q,
    Vt = c.useCallback(
      (t) => (G == null ? void 0 : G.images.get(t.category)),
      [G]
    ),
    fs = c.useCallback(() => {
      const t = et.current;
      if (!t || !G) return;
      const a = t.getContext("2d");
      a.imageSmoothingEnabled = !1;
      const l = lt * K,
        s = It * K;
      (t.width = l), (t.height = s);
      const i = ws * K;
      if (
        ((a.fillStyle = "#e8ddd0"),
        a.fillRect(0, 0, l, i + 1),
        (a.fillStyle = "#f5f0e8"),
        a.fillRect(0, i, l, s - i),
        st)
      ) {
        const o = st.width * K,
          d = st.height * K;
        for (let x = i; x < s; x += d)
          for (let b = 0; b < l; b += o) a.drawImage(st, b, x, o, d);
      } else (a.fillStyle = "#f5f0e8"), a.fillRect(0, i, l, s - i);
      (a.strokeStyle = Fa), (a.lineWidth = 1);
      for (let o = 0; o <= Ss; o++)
        a.beginPath(),
          a.moveTo(o * z * K, i),
          a.lineTo(o * z * K, s),
          a.stroke();
      const p = Math.ceil(ws / z);
      for (let o = p; o <= Cs; o++)
        a.beginPath(),
          a.moveTo(0, o * z * K),
          a.lineTo(l, o * z * K),
          a.stroke();
      if (Te) {
        const o = (Te.width * i) / Te.height;
        for (let d = 0; d < l; d += o) {
          const x = Math.min(o, l - d),
            b = Te.width * (x / o);
          a.drawImage(Te, 0, 0, b, Te.height, d, 0, x, i);
        }
      } else (a.fillStyle = "#e8ddd0"), a.fillRect(0, 0, l, i);
      (a.strokeStyle = "rgba(0,0,0,0.1)"),
        (a.lineWidth = 2),
        a.beginPath(),
        a.moveTo(0, i),
        a.lineTo(l, i),
        a.stroke();
      for (const o of je) {
        const d = G.regions.find((Gs) => Gs.id === o.spriteId);
        if (!d) continue;
        const x = Vt(d);
        if (!x) continue;
        const b = o.x * K,
          Ye = o.y * K,
          Le = d.width * K,
          us = d.height * K;
        o.flipped
          ? (a.save(),
            a.translate(b + Le, Ye),
            a.scale(-1, 1),
            a.drawImage(x, d.x, d.y, d.width, d.height, 0, 0, Le, us),
            a.restore())
          : a.drawImage(x, d.x, d.y, d.width, d.height, b, Ye, Le, us);
      }
      if (ee) {
        const o = je.find((d) => d.id === ee);
        if (o) {
          const d = G.regions.find((x) => x.id === o.spriteId);
          d &&
            ((a.strokeStyle = "rgba(56,189,248,0.8)"),
            (a.lineWidth = 2),
            a.setLineDash([4, 3]),
            a.strokeRect(
              o.x * K - 1,
              o.y * K - 1,
              d.width * K + 2,
              d.height * K + 2
            ),
            a.setLineDash([]));
        }
      }
      if (Rt) {
        const o = je.find((d) => d.id === Rt);
        if (o) {
          const d = G.regions.find((x) => x.id === o.spriteId);
          d &&
            ((a.fillStyle = "rgba(255,255,255,0.35)"),
            a.fillRect(o.x * K, o.y * K, d.width * K, d.height * K));
        }
      }
    }, [G, Te, st, je, K, ee, Rt, Vt]);
  c.useEffect(() => {
    fs();
  }, [fs]);
  const Ve = c.useCallback(
      (t) => (G == null ? void 0 : G.regions.find((a) => a.id === t)),
      [G]
    ),
    He = c.useCallback(
      (t, a) => {
        if (!G) return null;
        for (let l = je.length - 1; l >= 0; l--) {
          const s = je[l],
            i = Ve(s.spriteId);
          if (
            i &&
            t >= s.x &&
            t < s.x + i.width &&
            a >= s.y &&
            a < s.y + i.height
          )
            return s;
        }
        return null;
      },
      [G, je, Ve]
    ),
    Ee = c.useCallback((t) => {
      const l = et.current.getBoundingClientRect();
      return {
        x: ((t.clientX - l.left) / l.width) * lt,
        y: ((t.clientY - l.top) / l.height) * It,
      };
    }, []),
    ne = c.useCallback(
      (t) => {
        We ? be(t) : Xe(t);
      },
      [We]
    ),
    gs = I === "catalog" || ((I === "peekroom" || I === "knock") && le),
    Bs = c.useCallback(
      (t) => {
        if (I === "alone") {
          const s = Ee(t),
            i = He(s.x, s.y);
          if (i && Ie) {
            const p = Ie[i.category];
            if (p && p.length > 0) {
              const o = p[Math.floor(Math.random() * p.length)];
              Mt((d) => [...d, { text: o, key: Date.now() }]);
            }
            ve(i.id), setTimeout(() => ve(null), 300);
          }
          return;
        }
        if (I === "visit") {
          const s = Ee(t),
            i = He(s.x, s.y);
          if (i && Se) {
            const p = Se[i.category];
            if (p && p.length > 0) {
              const o = Ot.current[i.category] ?? 0,
                d = p[o % p.length];
              Ot.current[i.category] = o + 1;
              const x = Date.now();
              ft((b) => [...b, ...d.map((Ye, Le) => ({ ...Ye, key: x + Le }))]);
            }
            ve(i.id), setTimeout(() => ve(null), 300);
          }
          return;
        }
        if (I === "knock" && !le) {
          const s = Ee(t),
            i = He(s.x, s.y);
          if (i && Ce) {
            const p = Ce[i.category];
            if (p && p.length > 0) {
              const o = wt.current[i.category] ?? 0,
                d = p[o % p.length];
              wt.current[i.category] = o + 1;
              const x = Date.now();
              kt((b) => [...b, ...d.map((Ye, Le) => ({ ...Ye, key: x + Le }))]);
            }
            ve(i.id), setTimeout(() => ve(null), 300);
          }
          return;
        }
        if (I === "peekroom" && !le) {
          const s = Ee(t),
            i = He(s.x, s.y);
          if (i && Be) {
            const p = Be[i.category];
            if (p && p.length > 0) {
              const o = ht.current[i.category] ?? 0,
                d = p[o % p.length];
              (ht.current[i.category] = o + 1),
                Ft((x) => [...x, { text: d, key: Date.now() }]);
            }
            ve(i.id), setTimeout(() => ve(null), 300);
          }
          return;
        }
        if (!gs) return;
        const a = Ee(t),
          l = He(a.x, a.y);
        l
          ? ((jt.current = {
              itemId: l.id,
              startX: a.x,
              startY: a.y,
              offsetX: a.x - l.x,
              offsetY: a.y - l.y,
              moved: !1,
            }),
            t.target.setPointerCapture(t.pointerId),
            t.preventDefault())
          : ee && oe(null);
      },
      [gs, I, He, Ee, ee, Ie, Se, le, Be, Ce]
    ),
    Us = c.useCallback(
      (t) => {
        const a = jt.current;
        if (!a) return;
        const l = Ee(t),
          s = l.x - a.startX,
          i = l.y - a.startY;
        if (!a.moved && Math.abs(s) + Math.abs(i) < Ba) return;
        (a.moved = !0), ee && oe(null);
        const p = l.x - a.offsetX,
          o = l.y - a.offsetY;
        ne((d) => d.map((x) => (x.id !== a.itemId ? x : { ...x, x: p, y: o })));
      },
      [Ee, ee, ne]
    ),
    Ws = c.useCallback(
      (t) => {
        const a = jt.current;
        a &&
          ((jt.current = null),
          a.moved
            ? ne((l) =>
                l.map((s) => {
                  if (s.id !== a.itemId) return s;
                  const i = Ve(s.spriteId);
                  if (!i) return s;
                  const p = Math.round(s.x / z) * z,
                    o = Math.round(s.y / z) * z;
                  return {
                    ...s,
                    x: Math.max(0, Math.min(lt - i.width, p)),
                    y: Math.max(0, Math.min(It - i.height, o)),
                  };
                })
              )
            : oe((l) => (l === a.itemId ? null : a.itemId)));
      },
      [Ve, ne]
    ),
    Ht = c.useCallback(
      (t) => {
        const a = Math.round((lt / 2 - t.width / 2) / z) * z,
          l = Math.round((It / 2 - t.height / 2) / z) * z,
          s = {
            id: `f-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
            spriteId: t.id,
            category: t.category,
            x: a,
            y: l,
            flipped: !1,
          };
        ne((i) => [...i, s]), oe(s.id);
      },
      [ne]
    ),
    ms = c.useCallback(
      async (t) => {
        if (!$ || $.wallSrc === t) return;
        const a = new Image();
        (a.src = t),
          await new Promise((l) => {
            (a.onload = () => l()), (a.onerror = () => l());
          }),
          fe(a),
          ae((l) => l && { ...l, wallSrc: t });
      },
      [$]
    ),
    xs = c.useCallback(
      async (t) => {
        if (!$ || $.floorSrc === t) return;
        const a = new Image();
        (a.src = t),
          await new Promise((l) => {
            (a.onload = () => l()), (a.onerror = () => l());
          }),
          ge(a),
          ae((l) => l && { ...l, floorSrc: t });
      },
      [$]
    ),
    hs = c.useCallback(
      (t, a) => {
        ne((l) => {
          const s = l.findIndex((o) => o.id === t);
          if (s < 0) return l;
          const i = a === "up" ? s + 1 : s - 1;
          if (i < 0 || i >= l.length) return l;
          const p = [...l];
          return ([p[s], p[i]] = [p[i], p[s]]), p;
        });
      },
      [ne]
    ),
    Vs = c.useCallback(
      (t) => {
        ne((a) =>
          a.map((l) => (l.id === t ? { ...l, flipped: !l.flipped } : l))
        );
      },
      [ne]
    ),
    Hs = c.useCallback(
      (t) => {
        ne((a) => a.filter((l) => l.id !== t)), oe(null);
      },
      [ne]
    ),
    Ys = c.useCallback(() => {
      if (!ee || !G || !et.current) return null;
      const t = je.find((x) => x.id === ee);
      if (!t) return null;
      const a = Ve(t.spriteId);
      if (!a) return null;
      const l = et.current,
        s = l.getBoundingClientRect(),
        i = Ut.current;
      if (!i) return null;
      const p = i.getBoundingClientRect(),
        o = (t.x + a.width / 2) * K * (s.width / l.width) + s.left - p.left,
        d = t.y * K * (s.height / l.height) + s.top - p.top;
      return { x: o, y: d };
    }, [ee, G, je, K, Ve]),
    he = `house_layout_user_${n}`,
    Yt = c.useRef(null);
  if (
    (c.useEffect(() => {
      const t = (l) =>
          (l.furniture || []).map((s) => ({
            ...s,
            spriteId:
              typeof s.spriteId == "number"
                ? `${l.packId || "classic"}:${s.category}:${s.spriteId}`
                : s.spriteId,
            category: s.category ?? "",
            flipped: s.flipped ?? !1,
          })),
        a = (l) => {
          var s;
          (s = l == null ? void 0 : l.furniture) != null && s.length
            ? Xe(t(l))
            : Xe([]),
            l != null && l.wallSrc && se(l.wallSrc),
            l != null && l.floorSrc && J(l.floorSrc);
        };
      B.getItem(he)
        .then((l) => {
          var s;
          if (l) a(l);
          else
            try {
              const i = localStorage.getItem(he);
              if (i) {
                const p = JSON.parse(i);
                a(p),
                  (s = p == null ? void 0 : p.furniture) != null &&
                    s.length &&
                    B.setItem(he, { ...p, furniture: t(p) }).catch(() => {}),
                  localStorage.removeItem(he);
              }
            } catch {}
          Yt.current = he;
        })
        .catch(() => {
          Xe([]), (Yt.current = he);
        });
    }, [he]),
    c.useEffect(() => {
      if (!A || Yt.current !== he) return;
      const t = {
        houseId: "default",
        ownerId: n,
        ownerType: "user",
        packId: "mixed",
        furniture: Q,
        wallSrc: F,
        floorSrc: M,
        updatedAt: Date.now(),
      };
      B.setItem(he, t).catch(() => {});
    }, [Q, F, M, n, he, A]),
    c.useEffect(() => {
      if (!H || !$ || de.length === 0 || ce(H)) return;
      const t = Re(H),
        a = { ...$, furniture: de };
      B.setItem(t, a).catch(() => {});
    }, [de, H, $, n, Re, ce]),
    nt)
  )
    return e.jsx("div", {
      className: "echoes-page h-full flex items-center justify-center",
      children: e.jsx("div", {
        className: "text-slate-400 text-[13px]",
        children: "加载素材中...",
      }),
    });
  if (Y)
    return e.jsxs("div", {
      className:
        "echoes-page h-full flex flex-col items-center justify-center gap-3",
      children: [
        e.jsx("div", { className: "text-slate-500 text-[13px]", children: Y }),
        e.jsx("button", {
          onClick: () => ie((t) => t + 1),
          className:
            "text-[12px] px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors",
          children: "重试",
        }),
      ],
    });
  const qt = Ys(),
    qs =
      I === "menu"
        ? "小屋"
        : I === "goout" || I === "peek" || I === "knocklist"
        ? "外出串门"
        : I === "peekroom"
        ? `${($e == null ? void 0 : $e.name) ?? ""}的小屋`
        : I === "knock"
        ? `${(xe == null ? void 0 : xe.name) ?? ""}的小屋`
        : "我的小屋";
  return e.jsxs("div", {
    className: "echoes-page echoes-page-house h-full flex flex-col",
    children: [
      e.jsxs("div", {
        className:
          "echoes-page-header safe-top pb-4 px-4 border-b border-white/40 flex items-center gap-2 sticky top-0 z-10 bg-white/20 backdrop-blur-md",
        children: [
          e.jsx("button", {
            onClick: () => r("home"),
            className:
              "p-1.5 -ml-1.5 rounded-full hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
            children: e.jsx(re, { className: "w-6 h-6" }),
          }),
          e.jsx("h1", {
            className: "text-2xl font-bold text-slate-800 flex-1",
            children: qs,
          }),
          I === "catalog" &&
            e.jsx("button", {
              onClick: () => {
                Xe([]), oe(null);
              },
              className:
                "p-1.5 rounded-full hover:bg-white/60 text-slate-400 hover:text-slate-600 transition-colors",
              title: "清空所有家具",
              children: e.jsx(Qs, { className: "w-4 h-4" }),
            }),
        ],
      }),
      e.jsxs("div", {
        ref: Ut,
        className: "relative w-full shrink-0",
        style: { aspectRatio: "3 / 4", maxHeight: "65%" },
        children: [
          e.jsx("canvas", {
            ref: et,
            style: {
              width: "100%",
              height: "100%",
              imageRendering: "pixelated",
              touchAction: "none",
              display: "block",
            },
            onPointerDown: Bs,
            onPointerMove: Us,
            onPointerUp: Ws,
          }),
          ee &&
            qt &&
            e.jsxs("div", {
              className:
                "absolute z-20 flex items-center gap-0.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-slate-200/80 px-1 py-0.5",
              style: {
                left: qt.x,
                top: qt.y,
                transform: "translate(-50%, -100%) translateY(-8px)",
              },
              onPointerDown: (t) => t.stopPropagation(),
              children: [
                e.jsx("button", {
                  onClick: () => hs(ee, "down"),
                  className:
                    "p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors",
                  title: "下移一层",
                  children: e.jsx(ea, { className: "w-4 h-4" }),
                }),
                e.jsx("button", {
                  onClick: () => hs(ee, "up"),
                  className:
                    "p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors",
                  title: "上移一层",
                  children: e.jsx(ta, { className: "w-4 h-4" }),
                }),
                e.jsx("button", {
                  onClick: () => Vs(ee),
                  className:
                    "p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors",
                  title: "左右翻转",
                  children: e.jsx(ca, { className: "w-4 h-4" }),
                }),
                e.jsx("div", { className: "w-px h-4 bg-slate-200 mx-0.5" }),
                e.jsx("button", {
                  onClick: () => Hs(ee),
                  className:
                    "p-1.5 rounded-full hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors",
                  title: "删除",
                  children: e.jsx(Xs, { className: "w-4 h-4" }),
                }),
              ],
            }),
        ],
      }),
      I === "catalog" && zt
        ? (() => {
            const t = tt.find((s) => s.pack.id === zt);
            if (!t) return null;
            const { pack: a, groups: l } = t;
            return e.jsxs("div", {
              className:
                "flex-1 min-h-0 flex flex-col border-t border-slate-300/50 bg-[#f5f0e8]/80 backdrop-blur-sm",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between px-3 py-1.5 shrink-0",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-0.5",
                      children: [
                        e.jsx("button", {
                          onClick: () => D("styles"),
                          className:
                            "p-0.5 -ml-0.5 rounded hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                          children: e.jsx(re, { className: "w-4 h-4" }),
                        }),
                        e.jsx("span", {
                          className:
                            "text-[11px] font-bold text-slate-600 tracking-wide",
                          children: a.name,
                        }),
                      ],
                    }),
                    e.jsx("span", {
                      className: "text-[10px] text-slate-400",
                      children: "点击添加 · 拖动摆放",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex-1 overflow-y-auto px-3 pb-3",
                  children: [
                    e.jsxs("div", {
                      className: "mb-3",
                      children: [
                        e.jsx("div", {
                          className:
                            "text-[10px] text-slate-500 font-medium mb-1.5 px-0.5",
                          children: "墙纸",
                        }),
                        e.jsx("div", {
                          className: "grid grid-cols-5 gap-2",
                          children: e.jsx("button", {
                            onClick: () => se(a.wallSrc),
                            className: `flex items-center justify-center rounded-lg border-2 transition-all p-0.5 aspect-square active:scale-95 overflow-hidden ${
                              F === a.wallSrc
                                ? "border-sky-400 ring-1 ring-sky-200"
                                : "border-slate-200/80 bg-white/90 hover:border-sky-300"
                            }`,
                            children: e.jsx("img", {
                              src: a.wallSrc,
                              alt: "墙纸",
                              className: "w-full h-full object-cover",
                              style: { imageRendering: "pixelated" },
                            }),
                          }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "mb-3",
                      children: [
                        e.jsx("div", {
                          className:
                            "text-[10px] text-slate-500 font-medium mb-1.5 px-0.5",
                          children: "地板",
                        }),
                        e.jsx("div", {
                          className: "grid grid-cols-5 gap-2",
                          children: e.jsx("button", {
                            onClick: () => J(a.floorSrc),
                            className: `flex items-center justify-center rounded-lg border-2 transition-all p-0.5 aspect-square active:scale-95 overflow-hidden ${
                              M === a.floorSrc
                                ? "border-sky-400 ring-1 ring-sky-200"
                                : "border-slate-200/80 bg-white/90 hover:border-sky-300"
                            }`,
                            children: e.jsx("img", {
                              src: a.floorSrc,
                              alt: "地板",
                              className: "w-full h-full object-cover",
                              style: { imageRendering: "pixelated" },
                            }),
                          }),
                        }),
                      ],
                    }),
                    l.map((s) =>
                      e.jsxs(
                        "div",
                        {
                          className: "mb-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "text-[10px] text-slate-500 font-medium mb-1.5 px-0.5",
                              children: s.label,
                            }),
                            e.jsx("div", {
                              className: "grid grid-cols-5 gap-2",
                              children: s.regions.map((i) => {
                                const p = Vt(i);
                                return e.jsx(
                                  "button",
                                  {
                                    onClick: () => Ht(i),
                                    className:
                                      "flex items-center justify-center rounded-lg border-2 border-slate-200/80 bg-white/90 hover:border-sky-300 hover:bg-sky-50/50 transition-all p-1 aspect-square active:scale-95",
                                    children: e.jsx("canvas", {
                                      ref: (o) => {
                                        if (!o || !p) return;
                                        const d = o.getContext("2d"),
                                          x = Math.max(i.width, i.height),
                                          b = Math.min(
                                            3,
                                            Math.floor(40 / x) || 1
                                          );
                                        (o.width = i.width * b),
                                          (o.height = i.height * b),
                                          (d.imageSmoothingEnabled = !1),
                                          d.clearRect(0, 0, o.width, o.height),
                                          d.drawImage(
                                            p,
                                            i.x,
                                            i.y,
                                            i.width,
                                            i.height,
                                            0,
                                            0,
                                            i.width * b,
                                            i.height * b
                                          );
                                      },
                                      style: { imageRendering: "pixelated" },
                                    }),
                                  },
                                  i.id
                                );
                              }),
                            }),
                          ],
                        },
                        s.key
                      )
                    ),
                  ],
                }),
              ],
            });
          })()
        : I === "styles"
        ? e.jsxs("div", {
            className:
              "flex-1 min-h-0 flex flex-col border-t border-slate-300/50 bg-[#f5f0e8]/80 backdrop-blur-sm",
            children: [
              e.jsx("div", {
                className:
                  "flex items-center justify-between px-3 py-1.5 shrink-0",
                children: e.jsxs("div", {
                  className: "flex items-center gap-0.5",
                  children: [
                    e.jsx("button", {
                      onClick: () => D("house"),
                      className:
                        "p-0.5 -ml-0.5 rounded hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                      children: e.jsx(re, { className: "w-4 h-4" }),
                    }),
                    e.jsx("span", {
                      className:
                        "text-[11px] font-bold text-slate-600 tracking-wide",
                      children: "装修风格",
                    }),
                  ],
                }),
              }),
              e.jsx("div", {
                className: "flex-1 overflow-y-auto px-3 pb-3",
                children: e.jsx("div", {
                  className: "grid grid-cols-2 gap-2",
                  children: q.map((t) => {
                    const a = Wt.has(t.id);
                    return e.jsxs(
                      "button",
                      {
                        onClick: () => (a ? (Ps(t.id), D("catalog")) : void 0),
                        className: `flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${
                          a
                            ? "bg-white/70 border-slate-200/60 hover:bg-white/90 active:scale-[0.97]"
                            : "bg-slate-100/50 border-slate-200/40 opacity-50 cursor-not-allowed"
                        }`,
                        children: [
                          e.jsx("img", {
                            src: t.floorSrc,
                            alt: t.name,
                            className: "w-10 h-10 rounded-lg object-cover",
                            style: { imageRendering: "pixelated" },
                          }),
                          e.jsx("span", {
                            className: "text-[11px] font-medium text-slate-600",
                            children: t.name,
                          }),
                          !a &&
                            e.jsx("span", {
                              className: "text-[9px] text-slate-400",
                              children: "🔒 未解锁",
                            }),
                        ],
                      },
                      t.id
                    );
                  }),
                }),
              }),
            ],
          })
        : I === "house"
        ? e.jsxs("div", {
            className:
              "flex-1 min-h-0 flex flex-col border-t border-slate-300/50 bg-[#f5f0e8]/80 backdrop-blur-sm",
            children: [
              e.jsx("div", {
                className:
                  "flex items-center justify-between px-3 py-1.5 shrink-0",
                children: e.jsxs("div", {
                  className: "flex items-center gap-0.5",
                  children: [
                    e.jsx("button", {
                      onClick: () => D("menu"),
                      className:
                        "p-0.5 -ml-0.5 rounded hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                      children: e.jsx(re, { className: "w-4 h-4" }),
                    }),
                    e.jsx("span", {
                      className:
                        "text-[11px] font-bold text-slate-600 tracking-wide",
                      children: "我的小屋",
                    }),
                  ],
                }),
              }),
              e.jsx("div", {
                className: "flex-1 overflow-y-auto px-3 pb-3",
                children: e.jsxs("div", {
                  className: "grid grid-cols-3 gap-2 h-full",
                  children: [
                    e.jsxs("button", {
                      onClick: _s,
                      className:
                        "flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white/70 border border-slate-200/60 hover:bg-white/90 transition-all active:scale-[0.97]",
                      children: [
                        e.jsx(sa, { className: "w-5 h-5 text-slate-500" }),
                        e.jsx("span", {
                          className: "text-[11px] font-medium text-slate-600",
                          children: "独处时间",
                        }),
                      ],
                    }),
                    e.jsxs("button", {
                      onClick: () => D("invite"),
                      className:
                        "flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white/70 border border-slate-200/60 hover:bg-white/90 transition-all active:scale-[0.97]",
                      children: [
                        e.jsx(fa, { className: "w-5 h-5 text-slate-500" }),
                        e.jsx("span", {
                          className: "text-[11px] font-medium text-slate-600",
                          children: "邀请好友",
                        }),
                      ],
                    }),
                    e.jsxs("button", {
                      onClick: () => D("styles"),
                      className:
                        "flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white/70 border border-slate-200/60 hover:bg-white/90 transition-all active:scale-[0.97]",
                      children: [
                        e.jsx(da, { className: "w-5 h-5 text-slate-500" }),
                        e.jsx("span", {
                          className: "text-[11px] font-medium text-slate-600",
                          children: "装修",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        : I === "alone"
        ? e.jsxs("div", {
            className:
              "flex-1 min-h-0 flex flex-col border-t border-slate-300/50 bg-[#f5f0e8]/80 backdrop-blur-sm",
            children: [
              e.jsxs("div", {
                className:
                  "flex items-center justify-between px-3 py-1.5 shrink-0",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-0.5",
                    children: [
                      e.jsx("button", {
                        onClick: () => {
                          D("house"), Mt([]);
                        },
                        className:
                          "p-0.5 -ml-0.5 rounded hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                        children: e.jsx(re, { className: "w-4 h-4" }),
                      }),
                      e.jsx("span", {
                        className:
                          "text-[11px] font-bold text-slate-600 tracking-wide",
                        children: "独处时间",
                      }),
                    ],
                  }),
                  !it &&
                    e.jsx("button", {
                      onClick: ot,
                      className:
                        "text-[10px] text-slate-400 hover:text-slate-600 transition-colors",
                      children: Ie ? "换一批" : "生成台词",
                    }),
                ],
              }),
              e.jsx("div", {
                className: "flex-1 min-h-0 overflow-y-auto px-4 py-3",
                children: it
                  ? e.jsxs("div", {
                      className:
                        "flex items-center justify-center gap-2 text-slate-400 h-full",
                      children: [
                        e.jsx(qe, { className: "w-5 h-5 animate-spin" }),
                        e.jsx("span", {
                          className: "text-[12px]",
                          children: "正在感受房间的氛围...",
                        }),
                      ],
                    })
                  : Zt
                  ? e.jsxs("div", {
                      className:
                        "flex items-center justify-center gap-2 h-full",
                      children: [
                        e.jsx("span", {
                          className: "text-[12px] text-red-400",
                          children: Zt,
                        }),
                        e.jsx("button", {
                          onClick: ot,
                          className:
                            "text-[12px] text-slate-500 hover:text-slate-700 underline",
                          children: "重试",
                        }),
                      ],
                    })
                  : Ie && At.length > 0
                  ? e.jsxs("div", {
                      className: "flex flex-col gap-3",
                      children: [
                        At.map((t) =>
                          e.jsxs(
                            "div",
                            {
                              className:
                                "flex items-start gap-3 animate-[rise_0.2s_ease-out]",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "shrink-0 w-10 h-10 rounded-full bg-white/90 border-2 border-white shadow-md overflow-hidden flex items-center justify-center mt-0.5",
                                  children: f.avatarUrl
                                    ? e.jsx("img", {
                                        src: f.avatarUrl,
                                        alt: "",
                                        className: "w-full h-full object-cover",
                                      })
                                    : e.jsx("span", {
                                        className:
                                          "text-sm text-slate-400 font-semibold",
                                        children: f.name[0],
                                      }),
                                }),
                                e.jsx("div", {
                                  className:
                                    "bg-white/95 backdrop-blur-sm rounded-2xl rounded-tl-sm shadow-md border border-slate-200/80 px-3.5 py-2.5 max-w-[85%] w-fit",
                                  children: e.jsx("span", {
                                    className:
                                      "text-[14px] text-slate-700 leading-relaxed",
                                    children: t.text,
                                  }),
                                }),
                              ],
                            },
                            t.key
                          )
                        ),
                        e.jsx("div", { ref: Qt }),
                      ],
                    })
                  : Ie
                  ? e.jsx("div", {
                      className: "flex items-center justify-center h-full",
                      children: e.jsx("span", {
                        className: "text-[12px] text-slate-400",
                        children: "💭 点击房间里的家具，与它们互动",
                      }),
                    })
                  : e.jsx("div", {
                      className:
                        "flex flex-col items-center justify-center h-full gap-2",
                      children: e.jsx("span", {
                        className: "text-[12px] text-slate-400",
                        children: "还没有台词，点击右上角「生成台词」开始",
                      }),
                    }),
              }),
            ],
          })
        : I === "invite"
        ? e.jsxs("div", {
            className:
              "flex-1 min-h-0 flex flex-col border-t border-slate-300/50 bg-[#f5f0e8]/80 backdrop-blur-sm",
            children: [
              e.jsx("div", {
                className:
                  "flex items-center justify-between px-3 py-1.5 shrink-0",
                children: e.jsxs("div", {
                  className: "flex items-center gap-0.5",
                  children: [
                    e.jsx("button", {
                      onClick: () => D("house"),
                      className:
                        "p-0.5 -ml-0.5 rounded hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                      children: e.jsx(re, { className: "w-4 h-4" }),
                    }),
                    e.jsx("span", {
                      className:
                        "text-[11px] font-bold text-slate-600 tracking-wide",
                      children: "邀请好友",
                    }),
                  ],
                }),
              }),
              e.jsx("div", {
                className: "flex-1 min-h-0 overflow-y-auto px-3 pb-3",
                children:
                  U.length === 0
                    ? e.jsx("div", {
                        className: "flex items-center justify-center h-full",
                        children: e.jsx("span", {
                          className: "text-[12px] text-slate-400",
                          children: "通讯录里还没有好友",
                        }),
                      })
                    : e.jsx("div", {
                        className: "flex flex-col gap-1.5",
                        children: U.map((t) =>
                          e.jsxs(
                            "button",
                            {
                              onClick: () => Ms(t.id),
                              className:
                                "flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 border border-slate-200/60 hover:bg-white/90 transition-all active:scale-[0.98]",
                              children: [
                                e.jsx(at, { char: t, className: "w-9 h-9" }),
                                e.jsx("span", {
                                  className:
                                    "text-[13px] font-medium text-slate-700",
                                  children: t.name,
                                }),
                              ],
                            },
                            t.id
                          )
                        ),
                      }),
              }),
            ],
          })
        : I === "visit" && Me
        ? e.jsxs("div", {
            className:
              "flex-1 min-h-0 flex flex-col border-t border-slate-300/50 bg-[#f5f0e8]/80 backdrop-blur-sm",
            children: [
              e.jsxs("div", {
                className:
                  "flex items-center justify-between px-3 py-1.5 shrink-0",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-0.5",
                    children: [
                      e.jsx("button", {
                        onClick: () => {
                          D("invite"), ft([]);
                        },
                        className:
                          "p-0.5 -ml-0.5 rounded hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                        children: e.jsx(re, { className: "w-4 h-4" }),
                      }),
                      e.jsx("span", {
                        className:
                          "text-[11px] font-bold text-slate-600 tracking-wide",
                        children: ce(Me.id)
                          ? `${Me.name}回家了`
                          : `${Me.name} 来做客`,
                      }),
                    ],
                  }),
                  !dt &&
                    e.jsx("button", {
                      onClick: gt,
                      className:
                        "text-[10px] text-slate-400 hover:text-slate-600 transition-colors",
                      children: Se ? "换一批" : "生成对白",
                    }),
                ],
              }),
              e.jsx("div", {
                className: "flex-1 min-h-0 overflow-y-auto px-4 py-3",
                children: dt
                  ? e.jsxs("div", {
                      className:
                        "flex items-center justify-center gap-2 text-slate-400 h-full",
                      children: [
                        e.jsx(qe, { className: "w-5 h-5 animate-spin" }),
                        e.jsxs("span", {
                          className: "text-[12px]",
                          children: [Me.name, "正在路上..."],
                        }),
                      ],
                    })
                  : pt
                  ? e.jsxs("div", {
                      className:
                        "flex items-center justify-center gap-2 h-full",
                      children: [
                        e.jsx("span", {
                          className: "text-[12px] text-red-400",
                          children: pt,
                        }),
                        e.jsx("button", {
                          onClick: gt,
                          className:
                            "text-[12px] text-slate-500 hover:text-slate-700 underline",
                          children: "重试",
                        }),
                      ],
                    })
                  : Se && Lt.length > 0
                  ? e.jsxs("div", {
                      className: "flex flex-col gap-3",
                      children: [
                        Lt.map((t) =>
                          e.jsxs(
                            "div",
                            {
                              className: `flex items-start gap-3 animate-[rise_0.2s_ease-out] ${
                                t.speaker === "character"
                                  ? "flex-row-reverse"
                                  : ""
                              }`,
                              children: [
                                e.jsx("div", {
                                  className:
                                    "shrink-0 w-10 h-10 rounded-full bg-white/90 border-2 border-white shadow-md overflow-hidden flex items-center justify-center mt-0.5",
                                  children:
                                    t.speaker === "user"
                                      ? f.avatarUrl
                                        ? e.jsx("img", {
                                            src: f.avatarUrl,
                                            alt: "",
                                            className:
                                              "w-full h-full object-cover",
                                          })
                                        : e.jsx("span", {
                                            className:
                                              "text-sm text-slate-400 font-semibold",
                                            children: f.name[0],
                                          })
                                      : e.jsx(at, {
                                          char: Me,
                                          className: "w-10 h-10",
                                        }),
                                }),
                                e.jsx("div", {
                                  className: `backdrop-blur-sm rounded-2xl shadow-md border border-slate-200/80 px-3.5 py-2.5 max-w-[70%] w-fit ${
                                    t.speaker === "user"
                                      ? "bg-white/95 rounded-tl-sm"
                                      : "bg-sky-50/95 rounded-tr-sm"
                                  }`,
                                  children: e.jsx("span", {
                                    className:
                                      "text-[14px] text-slate-700 leading-relaxed",
                                    children: t.text,
                                  }),
                                }),
                              ],
                            },
                            t.key
                          )
                        ),
                        e.jsx("div", { ref: ts }),
                      ],
                    })
                  : Se
                  ? e.jsx("div", {
                      className: "flex items-center justify-center h-full",
                      children: e.jsxs("span", {
                        className: "text-[12px] text-slate-400",
                        children: ["💬 点击房间里的家具，和", Me.name, "聊聊"],
                      }),
                    })
                  : e.jsx("div", {
                      className:
                        "flex flex-col items-center justify-center h-full gap-2",
                      children: e.jsx("span", {
                        className: "text-[12px] text-slate-400",
                        children: "还没有对白，点击右上角「生成对白」开始",
                      }),
                    }),
              }),
            ],
          })
        : I === "goout"
        ? e.jsxs("div", {
            className:
              "flex-1 min-h-0 flex flex-col border-t border-slate-300/50 bg-[#f5f0e8]/80 backdrop-blur-sm",
            children: [
              e.jsx("div", {
                className:
                  "flex items-center justify-between px-3 py-1.5 shrink-0",
                children: e.jsxs("div", {
                  className: "flex items-center gap-0.5",
                  children: [
                    e.jsx("button", {
                      onClick: () => D("menu"),
                      className:
                        "p-0.5 -ml-0.5 rounded hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                      children: e.jsx(re, { className: "w-4 h-4" }),
                    }),
                    e.jsx("span", {
                      className:
                        "text-[11px] font-bold text-slate-600 tracking-wide",
                      children: "外出串门",
                    }),
                  ],
                }),
              }),
              e.jsx("div", {
                className: "flex-1 overflow-y-auto px-3 pb-3",
                children: e.jsxs("div", {
                  className: "grid grid-cols-2 gap-3 h-full",
                  children: [
                    e.jsxs("button", {
                      onClick: () => D("peek"),
                      className:
                        "flex flex-col items-center justify-center gap-2 rounded-xl bg-white/70 border border-slate-200/60 hover:bg-white/90 transition-all active:scale-[0.97]",
                      children: [
                        e.jsx(aa, { className: "w-6 h-6 text-slate-500" }),
                        e.jsx("span", {
                          className: "text-[12px] font-semibold text-slate-700",
                          children: "悄悄参观",
                        }),
                        e.jsx("span", {
                          className: "text-[10px] text-slate-400 -mt-1",
                          children: "ta不在家时偷看",
                        }),
                      ],
                    }),
                    e.jsxs("button", {
                      onClick: () => D("knocklist"),
                      className:
                        "flex flex-col items-center justify-center gap-2 rounded-xl bg-white/70 border border-slate-200/60 hover:bg-white/90 transition-all active:scale-[0.97]",
                      children: [
                        e.jsx(ra, { className: "w-6 h-6 text-slate-500" }),
                        e.jsx("span", {
                          className: "text-[12px] font-semibold text-slate-700",
                          children: "敲门做客",
                        }),
                        e.jsx("span", {
                          className: "text-[10px] text-slate-400 -mt-1",
                          children: "ta在家时互动",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        : I === "peek"
        ? e.jsxs("div", {
            className:
              "flex-1 min-h-0 flex flex-col border-t border-slate-300/50 bg-[#f5f0e8]/80 backdrop-blur-sm",
            children: [
              e.jsx("div", {
                className:
                  "flex items-center justify-between px-3 py-1.5 shrink-0",
                children: e.jsxs("div", {
                  className: "flex items-center gap-0.5",
                  children: [
                    e.jsx("button", {
                      onClick: () => D("goout"),
                      className:
                        "p-0.5 -ml-0.5 rounded hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                      children: e.jsx(re, { className: "w-4 h-4" }),
                    }),
                    e.jsx("span", {
                      className:
                        "text-[11px] font-bold text-slate-600 tracking-wide",
                      children: "悄悄参观",
                    }),
                  ],
                }),
              }),
              e.jsx("div", {
                className: "flex-1 min-h-0 overflow-y-auto px-3 pb-3",
                children:
                  U.length === 0
                    ? e.jsx("div", {
                        className: "flex items-center justify-center h-full",
                        children: e.jsx("span", {
                          className: "text-[12px] text-slate-400",
                          children: "通讯录里还没有好友",
                        }),
                      })
                    : e.jsx("div", {
                        className: "flex flex-col gap-1.5",
                        children: U.map((t) =>
                          e.jsxs(
                            "button",
                            {
                              onClick: () => Ds(t.id),
                              className:
                                "flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 border border-slate-200/60 hover:bg-white/90 transition-all active:scale-[0.98]",
                              children: [
                                e.jsx(at, { char: t, className: "w-9 h-9" }),
                                e.jsx("span", {
                                  className:
                                    "text-[13px] font-medium text-slate-700",
                                  children: t.name,
                                }),
                              ],
                            },
                            t.id
                          )
                        ),
                      }),
              }),
            ],
          })
        : I === "knocklist"
        ? e.jsxs("div", {
            className:
              "flex-1 min-h-0 flex flex-col border-t border-slate-300/50 bg-[#f5f0e8]/80 backdrop-blur-sm",
            children: [
              e.jsx("div", {
                className:
                  "flex items-center justify-between px-3 py-1.5 shrink-0",
                children: e.jsxs("div", {
                  className: "flex items-center gap-0.5",
                  children: [
                    e.jsx("button", {
                      onClick: () => D("goout"),
                      className:
                        "p-0.5 -ml-0.5 rounded hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                      children: e.jsx(re, { className: "w-4 h-4" }),
                    }),
                    e.jsx("span", {
                      className:
                        "text-[11px] font-bold text-slate-600 tracking-wide",
                      children: "敲门做客",
                    }),
                  ],
                }),
              }),
              e.jsx("div", {
                className: "flex-1 min-h-0 overflow-y-auto px-3 pb-3",
                children:
                  U.length === 0
                    ? e.jsx("div", {
                        className: "flex items-center justify-center h-full",
                        children: e.jsx("span", {
                          className: "text-[12px] text-slate-400",
                          children: "通讯录里还没有好友",
                        }),
                      })
                    : e.jsx("div", {
                        className: "flex flex-col gap-1.5",
                        children: U.map((t) =>
                          e.jsxs(
                            "button",
                            {
                              onClick: () => ds(t.id),
                              className:
                                "flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 border border-slate-200/60 hover:bg-white/90 transition-all active:scale-[0.98]",
                              children: [
                                e.jsx(at, { char: t, className: "w-9 h-9" }),
                                e.jsx("span", {
                                  className:
                                    "text-[13px] font-medium text-slate-700",
                                  children: t.name,
                                }),
                              ],
                            },
                            t.id
                          )
                        ),
                      }),
              }),
            ],
          })
        : I === "knock" && xe
        ? e.jsxs("div", {
            className:
              "flex-1 min-h-0 flex flex-col border-t border-slate-300/50 bg-[#f5f0e8]/80 backdrop-blur-sm",
            children: [
              e.jsxs("div", {
                className:
                  "flex items-center justify-between px-3 py-1.5 shrink-0",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-0.5",
                    children: [
                      e.jsx("button", {
                        onClick: () => {
                          D("knocklist"), kt([]);
                        },
                        className:
                          "p-0.5 -ml-0.5 rounded hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                        children: e.jsx(re, { className: "w-4 h-4" }),
                      }),
                      e.jsx("span", {
                        className:
                          "text-[11px] font-bold text-slate-600 tracking-wide",
                        children: Pe
                          ? `和${xe.name}在家`
                          : `在${xe.name}家做客`,
                      }),
                    ],
                  }),
                  !yt &&
                    !Ke &&
                    $ &&
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        !Pe &&
                          e.jsx("button", {
                            onClick: () => {
                              Ze((t) => !t), oe(null);
                            },
                            className: `text-[10px] transition-colors ${
                              le
                                ? "text-sky-500 font-semibold"
                                : "text-slate-400 hover:text-slate-600"
                            }`,
                            children: le ? "完成装修" : "帮ta装修",
                          }),
                        !le &&
                          e.jsx("button", {
                            onClick: $t,
                            className:
                              "text-[10px] text-slate-400 hover:text-slate-600 transition-colors",
                            children: Ce ? "换一批" : "生成对白",
                          }),
                      ],
                    }),
                ],
              }),
              e.jsx("div", {
                className: "flex-1 min-h-0 overflow-y-auto px-4 py-3",
                children: Ke
                  ? e.jsxs("div", {
                      className:
                        "flex items-center justify-center gap-2 text-slate-400 h-full",
                      children: [
                        e.jsx(qe, { className: "w-5 h-5 animate-spin" }),
                        e.jsxs("span", {
                          className: "text-[12px]",
                          children: ["正在前往", xe.name, "的家..."],
                        }),
                      ],
                    })
                  : mt
                  ? e.jsxs("div", {
                      className:
                        "flex flex-col items-center justify-center gap-2 h-full",
                      children: [
                        e.jsx("span", {
                          className: "text-[12px] text-red-400",
                          children: mt,
                        }),
                        e.jsx("button", {
                          onClick: () => ds(xe.id),
                          className:
                            "text-[12px] text-slate-500 hover:text-slate-700 underline",
                          children: "重试",
                        }),
                      ],
                    })
                  : $ && le
                  ? e.jsxs("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        e.jsx("span", {
                          className: "text-[11px] text-slate-500 text-center",
                          children: "拖拽家具调整位置，点击家具可翻转/删除",
                        }),
                        A &&
                          ps.map(({ pack: t, groups: a }) =>
                            e.jsxs(
                              "div",
                              {
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-[10px] text-slate-500 font-medium mb-1 px-0.5",
                                    children: t.name,
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "grid grid-cols-4 gap-1.5 mb-1.5",
                                    children: [
                                      e.jsxs("button", {
                                        onClick: () => ms(t.wallSrc),
                                        className: `flex flex-col items-center gap-0.5 p-1.5 rounded-lg border transition-all active:scale-95 overflow-hidden ${
                                          ($ == null ? void 0 : $.wallSrc) ===
                                          t.wallSrc
                                            ? "border-sky-400 ring-1 ring-sky-200 bg-white"
                                            : "border-slate-200/60 bg-white/70 hover:bg-white/90"
                                        }`,
                                        children: [
                                          e.jsx("img", {
                                            src: t.wallSrc,
                                            alt: "墙纸",
                                            className:
                                              "w-8 h-8 object-cover rounded",
                                            style: {
                                              imageRendering: "pixelated",
                                            },
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-[9px] text-slate-400 truncate w-full text-center",
                                            children: "墙纸",
                                          }),
                                        ],
                                      }),
                                      e.jsxs("button", {
                                        onClick: () => xs(t.floorSrc),
                                        className: `flex flex-col items-center gap-0.5 p-1.5 rounded-lg border transition-all active:scale-95 overflow-hidden ${
                                          ($ == null ? void 0 : $.floorSrc) ===
                                          t.floorSrc
                                            ? "border-sky-400 ring-1 ring-sky-200 bg-white"
                                            : "border-slate-200/60 bg-white/70 hover:bg-white/90"
                                        }`,
                                        children: [
                                          e.jsx("img", {
                                            src: t.floorSrc,
                                            alt: "地板",
                                            className:
                                              "w-8 h-8 object-cover rounded",
                                            style: {
                                              imageRendering: "pixelated",
                                            },
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-[9px] text-slate-400 truncate w-full text-center",
                                            children: "地板",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: "grid grid-cols-4 gap-1.5",
                                    children: a.map((l) =>
                                      l.regions.map((s) => {
                                        const i = A.images.get(s.category);
                                        return i
                                          ? e.jsxs(
                                              "button",
                                              {
                                                onClick: () => Ht(s),
                                                className:
                                                  "flex flex-col items-center gap-0.5 p-1.5 rounded-lg bg-white/70 border border-slate-200/60 hover:bg-white/90 transition-all active:scale-95",
                                                children: [
                                                  e.jsx("canvas", {
                                                    ref: (p) => {
                                                      if (!p) return;
                                                      const o =
                                                        p.getContext("2d");
                                                      if (!o) return;
                                                      const d = Math.min(
                                                        32 / s.width,
                                                        32 / s.height,
                                                        2
                                                      );
                                                      (p.width = s.width * d),
                                                        (p.height =
                                                          s.height * d),
                                                        (o.imageSmoothingEnabled =
                                                          !1),
                                                        o.drawImage(
                                                          i,
                                                          s.x,
                                                          s.y,
                                                          s.width,
                                                          s.height,
                                                          0,
                                                          0,
                                                          p.width,
                                                          p.height
                                                        );
                                                    },
                                                    style: {
                                                      imageRendering:
                                                        "pixelated",
                                                      maxWidth: 32,
                                                      maxHeight: 32,
                                                    },
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "text-[9px] text-slate-400 truncate w-full text-center",
                                                    children: l.label,
                                                  }),
                                                ],
                                              },
                                              s.id
                                            )
                                          : null;
                                      })
                                    ),
                                  }),
                                ],
                              },
                              t.id
                            )
                          ),
                      ],
                    })
                  : yt
                  ? e.jsxs("div", {
                      className:
                        "flex items-center justify-center gap-2 text-slate-400 h-full",
                      children: [
                        e.jsx(qe, { className: "w-5 h-5 animate-spin" }),
                        e.jsx("span", {
                          className: "text-[12px]",
                          children: "正在敲门...",
                        }),
                      ],
                    })
                  : bt
                  ? e.jsxs("div", {
                      className:
                        "flex items-center justify-center gap-2 h-full",
                      children: [
                        e.jsx("span", {
                          className: "text-[12px] text-red-400",
                          children: bt,
                        }),
                        e.jsx("button", {
                          onClick: $t,
                          className:
                            "text-[12px] text-slate-500 hover:text-slate-700 underline",
                          children: "重试",
                        }),
                      ],
                    })
                  : Ce && Bt.length > 0
                  ? e.jsxs("div", {
                      className: "flex flex-col gap-3",
                      children: [
                        Bt.map((t) =>
                          e.jsxs(
                            "div",
                            {
                              className: `flex items-start gap-3 animate-[rise_0.2s_ease-out] ${
                                t.speaker === "character"
                                  ? "flex-row-reverse"
                                  : ""
                              }`,
                              children: [
                                e.jsx("div", {
                                  className:
                                    "shrink-0 w-10 h-10 rounded-full bg-white/90 border-2 border-white shadow-md overflow-hidden flex items-center justify-center mt-0.5",
                                  children:
                                    t.speaker === "user"
                                      ? f.avatarUrl
                                        ? e.jsx("img", {
                                            src: f.avatarUrl,
                                            alt: "",
                                            className:
                                              "w-full h-full object-cover",
                                          })
                                        : e.jsx("span", {
                                            className:
                                              "text-sm text-slate-400 font-semibold",
                                            children: f.name[0],
                                          })
                                      : e.jsx(at, {
                                          char: xe,
                                          className: "w-10 h-10",
                                        }),
                                }),
                                e.jsx("div", {
                                  className: `backdrop-blur-sm rounded-2xl shadow-md border border-slate-200/80 px-3.5 py-2.5 max-w-[70%] w-fit ${
                                    t.speaker === "user"
                                      ? "bg-white/95 rounded-tl-sm"
                                      : "bg-sky-50/95 rounded-tr-sm"
                                  }`,
                                  children: e.jsx("span", {
                                    className:
                                      "text-[14px] text-slate-700 leading-relaxed",
                                    children: t.text,
                                  }),
                                }),
                              ],
                            },
                            t.key
                          )
                        ),
                        e.jsx("div", { ref: cs }),
                      ],
                    })
                  : Ce
                  ? e.jsx("div", {
                      className: "flex items-center justify-center h-full",
                      children: e.jsxs("span", {
                        className: "text-[12px] text-slate-400",
                        children: ["点击房间里的家具，和", xe.name, "聊聊"],
                      }),
                    })
                  : e.jsx("div", {
                      className:
                        "flex flex-col items-center justify-center h-full gap-2",
                      children: e.jsx("span", {
                        className: "text-[12px] text-slate-400",
                        children: "还没有对白，点击右上角「生成对白」开始",
                      }),
                    }),
              }),
            ],
          })
        : I === "peekroom" && $e
        ? e.jsxs("div", {
            className:
              "flex-1 min-h-0 flex flex-col border-t border-slate-300/50 bg-[#f5f0e8]/80 backdrop-blur-sm",
            children: [
              e.jsxs("div", {
                className:
                  "flex items-center justify-between px-3 py-1.5 shrink-0",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-0.5",
                    children: [
                      e.jsx("button", {
                        onClick: () => {
                          D("peek"), ae(null), pe(null), Ze(!1), oe(null);
                        },
                        className:
                          "p-0.5 -ml-0.5 rounded hover:bg-white/60 text-slate-500 hover:text-slate-700 transition-colors",
                        children: e.jsx(re, { className: "w-4 h-4" }),
                      }),
                      e.jsx("span", {
                        className:
                          "text-[11px] font-bold text-slate-600 tracking-wide",
                        children: Pe
                          ? `偷看${$e.name}的东西`
                          : `${$e.name}的小屋`,
                      }),
                    ],
                  }),
                  !Ke &&
                    $ &&
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        !Pe &&
                          e.jsx("button", {
                            onClick: () => {
                              Ze((t) => !t), oe(null);
                            },
                            className: `text-[10px] transition-colors ${
                              le
                                ? "text-sky-500 font-semibold"
                                : "text-slate-400 hover:text-slate-600"
                            }`,
                            children: le ? "完成装修" : "帮ta装修",
                          }),
                        !le &&
                          !as &&
                          e.jsx("button", {
                            onClick: os,
                            className:
                              "text-[10px] text-slate-400 hover:text-slate-600 transition-colors",
                            children: Be ? "换一批" : "生成描写",
                          }),
                      ],
                    }),
                ],
              }),
              e.jsx("div", {
                className: "flex-1 min-h-0 overflow-y-auto px-4 py-3",
                children: Ke
                  ? e.jsxs("div", {
                      className:
                        "flex items-center justify-center gap-2 text-slate-400 h-full",
                      children: [
                        e.jsx(qe, { className: "w-5 h-5 animate-spin" }),
                        e.jsxs("span", {
                          className: "text-[12px]",
                          children: ["正在窥探", $e.name, "的房间..."],
                        }),
                      ],
                    })
                  : mt
                  ? e.jsxs("div", {
                      className:
                        "flex flex-col items-center justify-center gap-2 h-full",
                      children: [
                        e.jsx("span", {
                          className: "text-[12px] text-red-400",
                          children: mt,
                        }),
                        e.jsx("button", {
                          onClick: Ks,
                          className:
                            "text-[12px] text-slate-500 hover:text-slate-700 underline",
                          children: "重试",
                        }),
                      ],
                    })
                  : $ && le
                  ? e.jsxs("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        e.jsx("span", {
                          className: "text-[11px] text-slate-500 text-center",
                          children: "拖拽家具调整位置，点击家具可翻转/删除",
                        }),
                        A &&
                          ps.map(({ pack: t, groups: a }) =>
                            e.jsxs(
                              "div",
                              {
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-[10px] text-slate-500 font-medium mb-1 px-0.5",
                                    children: t.name,
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "grid grid-cols-4 gap-1.5 mb-1.5",
                                    children: [
                                      e.jsxs("button", {
                                        onClick: () => ms(t.wallSrc),
                                        className: `flex flex-col items-center gap-0.5 p-1.5 rounded-lg border transition-all active:scale-95 overflow-hidden ${
                                          ($ == null ? void 0 : $.wallSrc) ===
                                          t.wallSrc
                                            ? "border-sky-400 ring-1 ring-sky-200 bg-white"
                                            : "border-slate-200/60 bg-white/70 hover:bg-white/90"
                                        }`,
                                        children: [
                                          e.jsx("img", {
                                            src: t.wallSrc,
                                            alt: "墙纸",
                                            className:
                                              "w-8 h-8 object-cover rounded",
                                            style: {
                                              imageRendering: "pixelated",
                                            },
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-[9px] text-slate-400 truncate w-full text-center",
                                            children: "墙纸",
                                          }),
                                        ],
                                      }),
                                      e.jsxs("button", {
                                        onClick: () => xs(t.floorSrc),
                                        className: `flex flex-col items-center gap-0.5 p-1.5 rounded-lg border transition-all active:scale-95 overflow-hidden ${
                                          ($ == null ? void 0 : $.floorSrc) ===
                                          t.floorSrc
                                            ? "border-sky-400 ring-1 ring-sky-200 bg-white"
                                            : "border-slate-200/60 bg-white/70 hover:bg-white/90"
                                        }`,
                                        children: [
                                          e.jsx("img", {
                                            src: t.floorSrc,
                                            alt: "地板",
                                            className:
                                              "w-8 h-8 object-cover rounded",
                                            style: {
                                              imageRendering: "pixelated",
                                            },
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-[9px] text-slate-400 truncate w-full text-center",
                                            children: "地板",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: "grid grid-cols-4 gap-1.5",
                                    children: a.map((l) =>
                                      l.regions.map((s) => {
                                        const i = A.images.get(s.category);
                                        return i
                                          ? e.jsxs(
                                              "button",
                                              {
                                                onClick: () => Ht(s),
                                                className:
                                                  "flex flex-col items-center gap-0.5 p-1.5 rounded-lg bg-white/70 border border-slate-200/60 hover:bg-white/90 transition-all active:scale-95",
                                                children: [
                                                  e.jsx("canvas", {
                                                    ref: (p) => {
                                                      if (!p) return;
                                                      const o =
                                                        p.getContext("2d");
                                                      if (!o) return;
                                                      const d = Math.min(
                                                        32 / s.width,
                                                        32 / s.height,
                                                        2
                                                      );
                                                      (p.width = s.width * d),
                                                        (p.height =
                                                          s.height * d),
                                                        (o.imageSmoothingEnabled =
                                                          !1),
                                                        o.drawImage(
                                                          i,
                                                          s.x,
                                                          s.y,
                                                          s.width,
                                                          s.height,
                                                          0,
                                                          0,
                                                          p.width,
                                                          p.height
                                                        );
                                                    },
                                                    style: {
                                                      imageRendering:
                                                        "pixelated",
                                                      maxWidth: 32,
                                                      maxHeight: 32,
                                                    },
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "text-[9px] text-slate-400 truncate w-full text-center",
                                                    children: l.label,
                                                  }),
                                                ],
                                              },
                                              s.id
                                            )
                                          : null;
                                      })
                                    ),
                                  }),
                                ],
                              },
                              t.id
                            )
                          ),
                      ],
                    })
                  : $
                  ? e.jsx("div", {
                      className: "flex flex-col h-full",
                      children: as
                        ? e.jsxs("div", {
                            className:
                              "flex items-center justify-center gap-2 text-slate-400 h-full",
                            children: [
                              e.jsx(qe, { className: "w-5 h-5 animate-spin" }),
                              e.jsxs("span", {
                                className: "text-[12px]",
                                children: ["正在观察", $e.name, "的房间..."],
                              }),
                            ],
                          })
                        : ns
                        ? e.jsxs("div", {
                            className:
                              "flex flex-col items-center justify-center gap-2 h-full",
                            children: [
                              e.jsx("span", {
                                className: "text-[12px] text-red-400",
                                children: ns,
                              }),
                              e.jsx("button", {
                                onClick: os,
                                className:
                                  "text-[12px] text-slate-500 hover:text-slate-700 underline",
                                children: "重试",
                              }),
                            ],
                          })
                        : Be && Kt.length > 0
                        ? e.jsxs("div", {
                            className: "flex flex-col gap-2.5",
                            children: [
                              Kt.map((t) =>
                                e.jsx(
                                  "div",
                                  {
                                    className:
                                      "animate-[rise_0.2s_ease-out] backdrop-blur-sm rounded-2xl shadow-md border border-slate-200/80 bg-white/95 px-3.5 py-2.5 w-fit max-w-[90%]",
                                    children: e.jsx("span", {
                                      className:
                                        "text-[13px] text-slate-600 leading-relaxed italic",
                                      children: t.text,
                                    }),
                                  },
                                  t.key
                                )
                              ),
                              e.jsx("div", { ref: rs }),
                            ],
                          })
                        : Be
                        ? e.jsx("div", {
                            className:
                              "flex items-center justify-center h-full",
                            children: e.jsx("span", {
                              className: "text-[12px] text-slate-400",
                              children: "点击房间里的物件，看看能发现什么",
                            }),
                          })
                        : e.jsx("div", {
                            className:
                              "flex items-center justify-center h-full",
                            children: e.jsxs("span", {
                              className: "text-[12px] text-slate-400",
                              children: [
                                "点击右上角「生成描写」，观察",
                                $e.name,
                                "的生活痕迹",
                              ],
                            }),
                          }),
                    })
                  : null,
              }),
            ],
          })
        : e.jsxs("div", {
            className:
              "flex-1 min-h-0 flex flex-col border-t border-slate-300/50 bg-[#f5f0e8]/80 backdrop-blur-sm",
            children: [
              e.jsx("div", {
                className:
                  "flex items-center justify-between px-3 py-1.5 shrink-0",
                children: e.jsx("span", {
                  className:
                    "text-[11px] font-bold text-slate-600 tracking-wide",
                  children: "菜单",
                }),
              }),
              e.jsx("div", {
                className: "flex-1 overflow-y-auto px-3 pb-3",
                children: e.jsxs("div", {
                  className: "grid grid-cols-2 gap-3 h-full",
                  children: [
                    e.jsxs("button", {
                      onClick: () => D("house"),
                      className:
                        "flex flex-col items-center justify-center gap-2 rounded-xl bg-white/70 border border-slate-200/60 hover:bg-white/90 transition-all active:scale-[0.97]",
                      children: [
                        e.jsx(Js, { className: "w-6 h-6 text-slate-500" }),
                        e.jsx("span", {
                          className: "text-[12px] font-semibold text-slate-700",
                          children: "我的小屋",
                        }),
                      ],
                    }),
                    e.jsxs("button", {
                      onClick: () => D("goout"),
                      className:
                        "flex flex-col items-center justify-center gap-2 rounded-xl bg-white/70 border border-slate-200/60 hover:bg-white/90 transition-all active:scale-[0.97]",
                      children: [
                        e.jsx(la, { className: "w-6 h-6 text-slate-500" }),
                        e.jsx("span", {
                          className: "text-[12px] font-semibold text-slate-700",
                          children: "外出串门",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
    ],
  });
}
export { sl as default };
