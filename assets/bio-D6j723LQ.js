import { f as h } from "./llmFetch-C_SjUca9.js";
function g(o) {
  return o.replace(/<think(?:ing)?[\s\S]*?<\/think(?:ing)?>/gi, "").trim();
}
async function l(o, r, i) {
  var e, c, s;
  const n = await h(o, {
    model: o.model,
    messages: [
      { role: "system", content: r },
      { role: "user", content: i },
    ],
    temperature: o.temperature,
  });
  if (!n.ok) throw new Error(`Bio API Error: ${n.status} ${n.errorText}`);
  const t = n.data || {};
  return g(
    ((s =
      (c = (e = t.choices) == null ? void 0 : e[0]) == null
        ? void 0
        : c.message) == null
      ? void 0
      : s.content) || ""
  );
}
async function $(o, r) {
  const { name: i, gender: n, intro: t, background: e } = o;
  if (!((t && t.trim().length > 5) || (e && e.trim().length > 5))) {
    const a = n ? `，${n}` : "";
    return `${i}${a}。暂无更多信息。`;
  }
  const s = [`姓名：${i}`];
  n && s.push(`性别：${n}`),
    t != null && t.trim() && s.push(`个人介绍：${t.trim()}`),
    e != null && e.trim() && s.push(`身份背景：${e.trim()}`);
  const u = `根据以下角色信息，写一段 80-200 字的第三人称短简介。
要求：自然流畅，概括此人的身份、性格特征和关键细节。不要编造信息中没有的内容。直接输出简介文本，不要加标题或引号。

${s.join(`
`)}`,
    f = "你是一个角色简介撰写器。输出简洁的中文短简介，不超过200字。";
  if (!(r != null && r.endpoint)) throw new Error("API preset 未配置 endpoint");
  const m = await l(r, f, u);
  if (m.length < 10) {
    const a = n ? `，${n}` : "";
    return `${i}${a}。暂无更多信息。`;
  }
  return m;
}
async function p(o, r) {
  const i = o.filter((t) => !t.bio);
  if (i.length === 0) return new Map();
  const n = new Map();
  for (const t of i)
    try {
      const e = await $(t, r);
      n.set(t.id, e);
    } catch {
      const e = t.gender ? `，${t.gender}` : "";
      n.set(t.id, `${t.name}${e}。暂无更多信息。`);
    }
  return n;
}
export { p as e, $ as g };
