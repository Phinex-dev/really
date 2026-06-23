import { j as u, r as c } from "./index-C41onZB-.js";
import { O as m, A as l, u as g } from "./App-CYgIjxWH.js";
function p(n) {
  return new Promise((t) => {
    let s = 0;
    const i = 1,
      a = () => {
        const e = new Image();
        e.decoding = "async";
        const o = () => {
            typeof e.decode == "function"
              ? e
                  .decode()
                  .then(() => t())
                  .catch(() => t())
              : t();
          },
          r = () => {
            s < i ? (s++, window.setTimeout(a, 500)) : t();
          };
        (e.onload = o),
          (e.onerror = r),
          (e.src = n),
          e.complete && e.naturalWidth > 0 && o();
      };
    a();
  });
}
function h({ onReady: n }) {
  const {
      isInitializing: t,
      v2BgImage: s,
      v2Avatar: i,
      widgetImg1: a,
      widgetImg2: e,
    } = g(),
    [o, r] = c.useState(!1),
    d = c.useCallback(() => {
      const f = [s, i, a, e].filter(Boolean);
      if (f.length === 0) {
        r(!0);
        return;
      }
      Promise.all(f.map(p)).then(() => r(!0));
    }, [s, i, a, e]);
  return (
    c.useEffect(() => {
      t || d();
    }, [t, d]),
    c.useEffect(() => {
      !t && o && n();
    }, [t, o, n]),
    null
  );
}
function E({ onReady: n }) {
  return u.jsxs(m, { children: [u.jsx(h, { onReady: n }), u.jsx(l, {})] });
}
export { E as default };
