import { a, j as e } from "./index-C41onZB-.js";
import { X as i } from "./App-CYgIjxWH.js";
const c = ({ isOpen: s = !0, title: t, onClose: o, children: l }) =>
  s
    ? a.createPortal(
        e.jsx("div", {
          className:
            "echoes-modal-backdrop fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm",
          onClick: o,
          children: e.jsxs("div", {
            className:
              "echoes-modal-container bg-white/70 backdrop-blur-3xl border border-white/60 shadow-2xl rounded-3xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-200 flex flex-col max-h-[80%]",
            onClick: (r) => r.stopPropagation(),
            children: [
              e.jsxs("div", {
                className:
                  "echoes-modal-header flex justify-between items-center p-4 border-b border-white/40 flex-shrink-0",
                children: [
                  e.jsx("h3", {
                    className: "text-lg font-semibold text-slate-800",
                    children: t,
                  }),
                  e.jsx("button", {
                    onClick: o,
                    className:
                      "echoes-modal-close-btn p-1 rounded-full hover:bg-white/50 text-slate-500 transition-colors",
                    children: e.jsx(i, { className: "w-5 h-5" }),
                  }),
                ],
              }),
              e.jsx("div", {
                className: "echoes-modal-content p-4 overflow-y-auto flex-1",
                children: l,
              }),
            ],
          }),
        }),
        document.body
      )
    : null;
export { c as M };
