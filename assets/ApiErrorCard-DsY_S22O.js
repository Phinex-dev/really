import { j as e } from "./index-C41onZB-.js";
import { C as a } from "./circle-alert-JwRkSIRb.js";
import { X as l } from "./App-CYgIjxWH.js";
const c = ({ error: s, onClose: r, className: t = "" }) =>
  e.jsx("div", {
    className: t,
    children: e.jsxs("div", {
      className:
        "echoes-error-card bg-white/75 backdrop-blur-xl border border-rose-200/80 text-slate-800 px-4 py-3 rounded-2xl shadow-[0_10px_30px_rgba(148,163,184,0.2)] flex items-start gap-3",
      children: [
        e.jsx("div", {
          className:
            "echoes-error-card-icon-bg bg-rose-100 p-2 rounded-full shrink-0",
          children: e.jsx(a, { className: "w-4 h-4 text-rose-500" }),
        }),
        e.jsxs("div", {
          className: "min-w-0 flex-1",
          children: [
            e.jsx("div", {
              className: "text-sm font-semibold text-slate-900",
              children: s.title,
            }),
            e.jsx("div", {
              className: "text-sm text-slate-600 break-words mt-1",
              children: s.detail,
            }),
          ],
        }),
        e.jsx("button", {
          type: "button",
          onClick: r,
          className:
            "echoes-error-card-close-btn p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-white/60 transition-colors",
          "aria-label": "关闭错误提示",
          children: e.jsx(l, { className: "w-4 h-4" }),
        }),
      ],
    }),
  });
export { c as A };
