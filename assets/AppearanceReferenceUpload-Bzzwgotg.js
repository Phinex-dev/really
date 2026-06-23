import { R as f, j as e } from "./index-C41onZB-.js";
import { aG as p, T as g } from "./App-CYgIjxWH.js";
import { T as u } from "./triangle-alert-Bl8c-dcA.js";
const j =
    "建议上传清晰正面或 3/4 头像，简单背景、无遮挡、自然表情。参考图只用于辅助稳定五官和发型，不会替代外貌提示词，仅对支持图片输入的 GPT Image 类模型生效。",
  w =
    "请仅上传你拥有版权、已获授权，或确认可合法用于生图参考的图片。不要上传受版权保护的作品、明星/网红/真人隐私照片、他人未授权肖像或任何你无权使用的图片。参考图会发送给你选择的生图服务商处理；由此产生的版权、肖像权和隐私风险需由上传者自行承担。",
  S = ({ value: c, onChange: l }) => {
    const [i, o] = f.useState(!1),
      b = (n) => {
        var m;
        const x = (m = n.target.files) == null ? void 0 : m[0];
        if (((n.target.value = ""), !x || !i)) return;
        const a = new FileReader();
        (a.onload = () => {
          const r = new Image();
          (r.onload = () => {
            let { width: t, height: s } = r;
            (t > 768 || s > 768) &&
              (t >= s
                ? ((s = Math.round((s / t) * 768)), (t = 768))
                : ((t = Math.round((t / s) * 768)), (s = 768)));
            const d = document.createElement("canvas");
            (d.width = t), (d.height = s);
            const h = d.getContext("2d");
            if (!h) {
              l(String(a.result || ""));
              return;
            }
            h.drawImage(r, 0, 0, t, s), l(d.toDataURL("image/jpeg", 0.82));
          }),
            (r.onerror = () => l(String(a.result || ""))),
            (r.src = String(a.result || ""));
        }),
          a.readAsDataURL(x);
      };
    return e.jsxs("div", {
      children: [
        e.jsx("label", {
          className:
            "block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1",
          children: "外观参考图",
        }),
        e.jsx("div", {
          className:
            "rounded-2xl border border-white/60 bg-white/35 p-3 shadow-sm backdrop-blur-md",
          children: e.jsxs("div", {
            className: "flex items-start gap-3",
            children: [
              e.jsx("div", {
                className:
                  "h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-white/70 bg-white/50",
                children: c
                  ? e.jsx("img", {
                      src: c,
                      alt: "外观参考图",
                      className: "h-full w-full object-cover",
                    })
                  : e.jsx("div", {
                      className:
                        "flex h-full w-full items-center justify-center text-slate-300",
                      children: e.jsx(p, { className: "h-7 w-7" }),
                    }),
              }),
              e.jsxs("div", {
                className: "min-w-0 flex-1",
                children: [
                  e.jsx("p", {
                    className: "text-[11px] leading-5 text-slate-500",
                    children: j,
                  }),
                  e.jsxs("div", {
                    className:
                      "mt-3 rounded-xl border border-amber-200/80 bg-amber-50/80 p-2.5 text-amber-800 shadow-sm",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-start gap-2",
                        children: [
                          e.jsx(u, {
                            className: "mt-0.5 h-3.5 w-3.5 shrink-0",
                          }),
                          e.jsxs("div", {
                            className: "min-w-0",
                            children: [
                              e.jsx("p", {
                                className: "text-[11px] font-bold leading-4",
                                children: "版权与肖像权免责声明",
                              }),
                              e.jsx("p", {
                                className: "mt-1 text-[10.5px] leading-4",
                                children: w,
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("label", {
                        className:
                          "mt-2 flex cursor-pointer items-start gap-2 text-[11px] font-bold leading-4 text-amber-900",
                        children: [
                          e.jsx("input", {
                            type: "checkbox",
                            checked: i,
                            onChange: (n) => o(n.target.checked),
                            className:
                              "mt-0.5 h-3.5 w-3.5 rounded border-amber-300 text-[#89b6d3] focus:ring-[#89b6d3]",
                          }),
                          e.jsx("span", {
                            children:
                              "我确认拥有该图片的使用权，并理解参考图会交由所选生图服务处理。",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "mt-3 flex flex-wrap gap-2",
                    children: [
                      e.jsxs("label", {
                        className: `inline-flex items-center gap-1.5 rounded-full border border-white/75 px-3 py-1.5 text-[12px] font-bold transition-all ${
                          i
                            ? "cursor-pointer bg-white/60 text-[#6f8faa] hover:bg-white/80"
                            : "cursor-not-allowed bg-white/35 text-slate-300"
                        }`,
                        children: [
                          e.jsx(p, { className: "h-3.5 w-3.5" }),
                          "上传参考图",
                          e.jsx("input", {
                            type: "file",
                            accept: "image/*",
                            onChange: b,
                            disabled: !i,
                            className: "hidden",
                          }),
                        ],
                      }),
                      c
                        ? e.jsxs("button", {
                            type: "button",
                            onClick: () => {
                              l(void 0), o(!1);
                            },
                            className:
                              "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold text-slate-400 transition-colors hover:bg-white/60 hover:text-red-400",
                            children: [
                              e.jsx(g, { className: "h-3.5 w-3.5" }),
                              "删除",
                            ],
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
export { S as A };
