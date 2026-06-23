const r = [
    { id: "summary", label: "总结 / 记忆提取", group: "memory", defaultOn: !0 },
    {
      id: "schedule_free",
      label: "日程·自由规划",
      group: "memory",
      defaultOn: !0,
    },
    { id: "diary_write", label: "角色日记", group: "memory", defaultOn: !1 },
    {
      id: "diary_annotation",
      label: "日记批注",
      group: "memory",
      defaultOn: !1,
    },
    {
      id: "monthly_calendar",
      label: "月历世界事件",
      group: "world",
      defaultOn: !1,
    },
    { id: "map_places", label: "地图地点草稿", group: "world", defaultOn: !1 },
    { id: "shop_items", label: "商城物品", group: "world", defaultOn: !1 },
    { id: "wallet_finance", label: "角色财务", group: "world", defaultOn: !1 },
    { id: "baixiang", label: "百相日报", group: "world", defaultOn: !1 },
    {
      id: "date_narrative",
      label: "赴约卡片总结",
      group: "world",
      defaultOn: !1,
    },
    {
      id: "character_room",
      label: "角色房间生成",
      group: "room",
      defaultOn: !1,
    },
    { id: "alone_time", label: "独处碎碎念", group: "room", defaultOn: !1 },
    { id: "timeslot", label: "陪伴场景开场", group: "room", defaultOn: !1 },
    { id: "visit_time", label: "访问台词", group: "room", defaultOn: !1 },
    { id: "peek_room", label: "偷看房间观察", group: "room", defaultOn: !1 },
    { id: "pet_dialogue", label: "桌宠台词", group: "room", defaultOn: !1 },
  ],
  n = { memory: "记忆与计划", world: "世界内容", room: "房间 / 陪伴" },
  u = r.filter((e) => e.defaultOn).map((e) => e.id),
  i = r.map((e) => e.id);
function s(e, t, d = !0) {
  const a = (e || []).filter(
    (l) =>
      l.categoryId === "rule" &&
      l.isGlobalActive &&
      Array.isArray(l.scopes) &&
      l.scopes.includes(t)
  );
  if (a.length === 0) return "";
  const o = a.map(
    (l) => `[${l.title}]
${l.content}`
  ).join(`

`);
  return d
    ? o +
        `

`
    : o;
}
export { i as A, u as D, r as W, n as a, s as b };
