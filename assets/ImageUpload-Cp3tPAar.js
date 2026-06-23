import { j as e } from "./index-C41onZB-.js";
import { C as w } from "./camera-D3fQhOQq.js";
const b = ({ avatarUrl: i, onUpload: c, fallbackChar: n, hideLabel: u }) => {
  const p = (x) => {
      var m;
      const d = (m = x.target.files) == null ? void 0 : m[0];
      if (d) {
        const l = new FileReader();
        (l.onloadend = () => {
          const o = new Image();
          (o.onload = () => {
            const r = document.createElement("canvas");
            let t = o.width,
              a = o.height;
            const s = 512;
            t > a
              ? t > s && ((a *= s / t), (t = s))
              : a > s && ((t *= s / a), (a = s)),
              (r.width = t),
              (r.height = a);
            const h = r.getContext("2d");
            if (h) {
              h.drawImage(o, 0, 0, t, a);
              const g = r.toDataURL("image/webp", 0.8);
              c(g);
            } else c(l.result);
          }),
            (o.src = l.result);
        }),
          l.readAsDataURL(d);
      }
    },
    f = n.avatarColor || "bg-slate-400";
  return e.jsxs("div", {
    className: "echoes-image-upload flex flex-col items-center gap-2 mb-4",
    children: [
      e.jsxs("div", {
        className: "relative group cursor-pointer",
        children: [
          e.jsx("div", {
            className:
              "echoes-image-upload-preview w-20 h-20 rounded-full overflow-hidden border-2 border-white/80 shadow-md",
            children: i
              ? e.jsx("img", {
                  src: i,
                  alt: "Avatar",
                  className: "w-full h-full object-cover",
                  referrerPolicy: "no-referrer",
                })
              : e.jsx("div", {
                  className: `w-full h-full flex items-center justify-center text-3xl font-bold text-white ${f}`,
                  children: n.name.charAt(0).toUpperCase(),
                }),
          }),
          e.jsx("div", {
            className:
              "echoes-image-upload-overlay absolute inset-0 bg-black/40 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
            children: e.jsx(w, {
              className: "echoes-image-upload-icon w-6 h-6 text-white",
            }),
          }),
          e.jsx("input", {
            type: "file",
            accept: "image/*",
            onChange: p,
            className:
              "echoes-image-upload-input absolute inset-0 w-full h-full opacity-0 cursor-pointer",
          }),
        ],
      }),
      !u &&
        e.jsx("span", {
          className: "text-xs text-slate-500",
          children: "点击更换头像",
        }),
    ],
  });
};
export { b as I };
