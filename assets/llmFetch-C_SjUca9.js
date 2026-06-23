async function y(n, o, e) {
  const a = !!n.useStream,
    u = a ? { ...o, stream: !0, stream_options: { include_usage: !0 } } : o,
    t = await fetch(`${n.endpoint}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${n.apiKey}`,
        ...((e == null ? void 0 : e.extraHeaders) || {}),
      },
      body: JSON.stringify(u),
      signal: e == null ? void 0 : e.signal,
    });
  if (!t.ok) {
    const r = await t.text();
    return { ok: !1, status: t.status, data: null, errorText: p(r, a) };
  }
  if (
    (t.headers.get("content-type") || "")
      .toLowerCase()
      .includes("text/event-stream")
  ) {
    const r = await S(t);
    return { ok: !0, status: t.status, data: r, errorText: null };
  }
  const l = await t.text();
  if (!l) return { ok: !0, status: t.status, data: null, errorText: null };
  try {
    const r = JSON.parse(l);
    return { ok: !0, status: t.status, data: r, errorText: null };
  } catch {
    return {
      ok: !1,
      status: t.status,
      data: null,
      errorText: `非 JSON 响应：${l.slice(0, 300)}`,
    };
  }
}
function p(n, o) {
  if (!o || !n) return n;
  const e = n.toLowerCase();
  return e.includes("stream_option") ||
    e.includes("stream is not") ||
    e.includes("streaming is not") ||
    e.includes("stream not supported") ||
    e.includes("streaming not supported") ||
    e.includes("does not support stream") ||
    (e.includes("unknown field") && e.includes("stream")) ||
    (e.includes("unrecognized") && e.includes("stream")) ||
    n.includes("流式")
    ? `（提示：当前开了"流式兼容模式"，但服务端拒绝了——一般用户请关闭这个开关再试）
${n}`
    : n;
}
async function S(n) {
  var r;
  const o = (r = n.body) == null ? void 0 : r.getReader();
  if (!o)
    return {
      choices: [{ message: { role: "assistant", content: "" } }],
      usage: null,
    };
  const e = new TextDecoder();
  let a = "",
    u = "",
    t = "assistant",
    g = null,
    h = null;
  const l = (m) => {
    var i;
    if (!m.startsWith("data:")) return;
    const c = m.slice(5).trim();
    if (!(!c || c === "[DONE]"))
      try {
        const d = JSON.parse(c),
          s = (i = d.choices) == null ? void 0 : i[0],
          f = s == null ? void 0 : s.delta;
        f
          ? (typeof f.content == "string" && (u += f.content),
            f.role && (t = f.role))
          : s != null &&
            s.message &&
            (typeof s.message.content == "string" && (u += s.message.content),
            s.message.role && (t = s.message.role)),
          s != null && s.finish_reason && (g = s.finish_reason),
          d.usage && (h = d.usage);
      } catch {}
  };
  for (;;) {
    const { value: m, done: c } = await o.read();
    if (c) break;
    a += e.decode(m, { stream: !0 });
    let i;
    for (
      ;
      (i = a.indexOf(`
`)) >= 0;

    ) {
      const d = a.slice(0, i).replace(/\r$/, "");
      (a = a.slice(i + 1)), l(d);
    }
  }
  return (
    a.length > 0 && l(a.replace(/\r$/, "")),
    {
      choices: [{ message: { role: t, content: u }, finish_reason: g }],
      usage: h,
    }
  );
}
export { y as f };
