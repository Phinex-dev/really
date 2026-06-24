import{r as e}from"./rolldown-runtime-CMxvf4Kt.js";import{r as t,s as n}from"./types-BzM9yekO.js";import{i as r,n as i,r as a,t as o}from"./storage-CO_P6eOB.js";import{d as s,h as c,l as ee,m as te,p as ne,u as re}from"./backendConfig-zNmUg0b0.js";var l={solo:{guoman:`loveshow-solo-guoman`,cg:`loveshow-solo-cg`,real:`loveshow-solo-real`},couple:{guoman:`loveshow-couple-guoman`,cg:`loveshow-couple-cg`,real:`loveshow-couple-real`}},ie={solo:{guoman:`loveshow-gemini-solo-guoman`,cg:`loveshow-gemini-solo-cg`,real:`loveshow-gemini-solo-real`},couple:{guoman:`loveshow-gemini-couple-guoman`,cg:`loveshow-gemini-couple-cg`,real:`loveshow-gemini-couple-real`}},u=[{id:l.solo.guoman,name:`单人 · 国漫风`,providerScope:`openai-gpt`,size:`1024x1792`,positivePrompt:`单人立绘，国漫插画风，氛围感强，五官立体精致、眼睛绝美有神，干净通透上色，柔和光影，竖版手机壁纸尺寸`,negativePrompt:`写实，真人感，3D建模感，Q版，卡通，崩坏五官，多人，多余的手，多余的肢体，畸形，低清，水印，文字`},{id:l.solo.cg,name:`单人 · CG质感`,providerScope:`openai-gpt`,size:`1024x1792`,positivePrompt:`单人半身 CG，精修游戏立绘质感，光影立体，皮肤与发丝细节精致，电影级氛围打光，高细节渲染，竖版手机壁纸尺寸`,negativePrompt:`粗糙线稿，廉价感，塑料感，崩坏五官，多人，多余的手，多余的肢体，畸形，低清，水印，文字`},{id:l.solo.real,name:`单人 · 真人风`,providerScope:`openai-gpt`,size:`1024x1792`,positivePrompt:`单人真人感人像写真，像真实相机拍摄，自然肤质与光影，五官立体深邃，柔和景深，电影感色调，竖版手机壁纸尺寸`,negativePrompt:`二次元，国漫风，动漫插画，Q版，卡通，3D建模感，假脸，塑料皮肤，过度磨皮，网红滤镜，崩坏，多人，多余的肢体，畸形，低清，水印，文字`},{id:l.couple.guoman,name:`双人 · 国漫风`,providerScope:`openai-gpt`,size:`1024x1792`,positivePrompt:`双人合照，近距离同框，画面中有两位清晰主体，像角色亲手拍下的自拍，国漫插画风，氛围感强，五官立体精致，干净通透上色，柔和光影，竖版尺寸`,negativePrompt:`单人照，只有一个人，裁掉其中一人，人物融合，脸部融合，重复人物，额外人物，陌生第三人，距离太远，拼贴，写实，真人感，3D建模感，崩坏五官，多余的肢体，畸形，低清，水印，文字`},{id:l.couple.cg,name:`双人 · CG质感`,providerScope:`openai-gpt`,size:`1024x1792`,positivePrompt:`双人合照，近距离同框，两位清晰主体，像角色亲手拍下的合影，精修 CG 质感，电影级光影，皮肤发丝细节精致，氛围感强，竖版尺寸`,negativePrompt:`单人照，只有一个人，裁掉其中一人，人物融合，脸部融合，重复人物，额外人物，陌生第三人，距离太远，拼贴，塑料感，廉价感，崩坏五官，多余的肢体，畸形，低清，水印，文字`},{id:l.couple.real,name:`双人 · 真人风`,providerScope:`openai-gpt`,size:`1024x1792`,positivePrompt:`双人同框真人感合照，两位清晰主体，像真实相机拍下的合影，自然肤质与光影，五官立体深邃，柔和景深，电影感色调，竖版尺寸`,negativePrompt:`二次元，国漫风，动漫插画，Q版，卡通，3D建模感，假脸，塑料皮肤，过度磨皮，网红滤镜，单人照，只有一个人，裁掉其中一人，人物融合，脸部融合，重复人物，额外人物，陌生第三人，距离太远，拼贴，崩坏，多余的肢体，畸形，低清，水印，文字`}],ae=[{mode:`solo`,imageStyle:`guoman`},{mode:`solo`,imageStyle:`cg`},{mode:`solo`,imageStyle:`real`},{mode:`couple`,imageStyle:`guoman`},{mode:`couple`,imageStyle:`cg`},{mode:`couple`,imageStyle:`real`}].map(({mode:e,imageStyle:t})=>{let n=u.find(n=>n.id===l[e][t])||u[0];return{...n,id:ie[e][t],name:`Gemini ${n.name}`,providerScope:`openai-gemini`,model:void 0,size:`1024x1536`}}),oe=[...u,...ae];function se(e,t,n=`gpt`){let r=n===`gemini`?ie:l;return r[e][t]||r[e].guoman}function ce(e){let t=e?.id||``;return[l,ie].some(e=>Object.values(e).some(e=>Object.values(e).includes(t)))}function le(e){let t=e.misconceptions||[];return e.tentativeReads?.length?e.tentativeReads:t}function ue(e,t){let n=(e||``).trim();return n.length>t?`${n.slice(0,t)}...`:n}function d(e){return e.day===1}function f(e){return[`### Day 1 初识边界`,`现在和${e}只处在初识阶段：可以有第一眼兴趣、紧张、礼貌试探和被吸引，但不能表现成旧相识、恋人或已经很熟。`,`不要使用旧聊天/角色库里的共同记忆、恋人关系、专属昵称、占有欲、照顾惯性、熟人调侃，或“我一直等你”“终于见到你”“你来了”这类熟悉口吻。`,`更自然的推进是自我介绍、确认名字、问一个轻问题、观察对方反应；关系必须通过之后的节目互动逐步升温。`].join(`
`)}function de(e){return`- secretId=${e.id}; guestId=${e.guestId}: ${ue(e.publicSubtextHint,120)}（kind=${e.kind}, intensity=${e.intensity}）`}function fe(e){return e.length===0?``:[`### 镜头前后的秘密潜台词`,`以下只允许作为公开场的表情、停顿、回避、话题绕行、差点说漏的动机；绝不能在其他嘉宾面前直接说破私聊原文或秘密内容。`,`秘密永远只属于“该嘉宾 ↔ 用户”，不得写成嘉宾之间的秘密、互选、CP 或暧昧。`,e.slice(-6).map(de).join(`
`)].join(`
`)}function p(e,t=`心动广场待结算信号`){let n=(e||[]).filter(e=>!e.consumed).slice(-8);if(n.length===0)return``;let r={post:`发帖`,like:`点赞`,comment:`评论`,reply:`回复`,recognize_alt:`识破小号`};return[`### ${t}`,`这些是信息流互动留下的待结算信号。它们只能作为理解下一场镜头/状态评估的上下文，不能当成已经直接改变过好感或心情。`,n.map(e=>[`- ${e.actorType}/${e.actorId}`,r[e.action],e.targetGuestId?`目标嘉宾=${e.targetGuestId}`:``,`强度=${e.intensity}`,e.emotion?`情绪=${e.emotion}`:``].filter(Boolean).join(`；`)).join(`
`)].join(`
`)}function pe(e,t,n,r){return`### 镜头之外私聊规则
你现在是${e}，只和${t}私聊。你可以比镜头前更诚实、更脆弱，也可以更有策略感，但不能羞辱、物化、威胁或操控伤害${t}。
如果这次回复出现有分量的告白、示弱、请求或把柄，就自然说出来；系统会把它登记成只属于“${e} ↔ ${t}”的秘密。
不要写任何嘉宾之间的秘密、CP、互选或暧昧。${n.length>0?`\n既有只属于你和${t}的私密事：\n${n.slice(-4).map(e=>`- ${e.summary}${e.privateLine?`；当时的话：「${ue(e.privateLine,80)}」`:``}`).join(`
`)}`:``}${r?.privateTruth?`\n你私下真实状态：${r.privateTruth.emotionalTruth}${r.privateTruth.wantsFromUser?`；你想从${t}这里得到：${r.privateTruth.wantsFromUser}`:``}`:``}`}var me=[`confession`,`vulnerability`,`request`,`leverage`,`private_signal`],he=[`soft`,`charged`,`volatile`];function ge(e){let t=e.existingSecrets?.length?e.existingSecrets.slice(-4).map(e=>`- ${e.kind}/${e.intensity}: ${e.summary}`).join(`
`):`暂无`;return`你是《唯一心动线》的私聊秘密判定副模型。你的任务是判断一次“嘉宾 ↔ 用户”的镜头之外私聊里，是否出现了值得登记的私密秘密。

### 判定对象
- 嘉宾：${e.guestName}
- 用户：${e.userName}
- Day：${e.day}
- 用户消息：${e.userMessage}
- 嘉宾回复：${e.guestReply}
- 已有秘密：\n${t}

### 什么算 secret
只登记对后续公开场有潜台词价值的内容：
- confession：告白、偏心、心动、只对用户承认的在意
- vulnerability：示弱、不安、害怕、软肋、只让用户看见的失控
- request：请求、约定、希望用户私下给出回应或帮忙保守
- leverage：把柄、顾虑、不想被节目组/其他嘉宾知道的事实
- private_signal：不足以上述分类，但明显是镜头前不会承认的真实信号

### 不登记
- 普通寒暄、普通暧昧、没有后续潜台词价值的夸奖
- 只是复述公开场已经发生的事
- 嘉宾之间的秘密、嘉宾 CP、嘉宾互选、“谁和谁最配”
- 对用户的羞辱、物化、威胁、报复、控制或操控性伤害

### 公开场提示要求
publicSubtextHint 只能写“公开场如何旁敲侧击”：回避、停顿、眼神、话题绕行、差点说漏。
不能复述私聊原句，不能让其他嘉宾听懂完整事实。

### 输出 JSON
不要解释，不要 code fence。严格输出：
{
  "hasSecret": true/false,
  "kind": "${me.join(` | `)}",
  "intensity": "${he.join(` | `)}",
  "summary": "一句话概括这个只属于嘉宾和用户的秘密；hasSecret=false 时为空字符串",
  "privateLine": "最能代表秘密的嘉宾原话短摘；hasSecret=false 时为空字符串",
  "publicSubtextHint": "公开场旁敲侧击的演法；hasSecret=false 时为空字符串",
  "safety": {
    "guestUserOnly": true/false,
    "hasGuestGuestSecret": true/false,
    "hasCpSemantics": true/false,
    "hasManipulativeHarm": true/false
  }
}`}function _e(e,t,n,r,i){let a=[];if(a.push(`你是${e}，正在参加一档恋爱综艺节目。你和其他嘉宾住在同一栋合宿屋里，节目全程有摄像机跟拍。`),a.push(`你不认识${t}，这是你们在节目中认识的。你对她的一切了解都来自节目里的互动。`),d(n)&&a.push(f(t)),a.push(`现在是第${n.day}天。你对${t}的好感度大约${r.affection}/100。你现在的心情是「${r.mood}」。你内心在想：「${r.innerThought}」`),(r.publicPosture||r.privateTruth||typeof r.publicPrivateDivergence==`number`)&&a.push([r.publicPosture?`镜头前姿态：${r.publicPosture.cameraPersona}；策略面具：${r.publicPosture.strategyMask}${r.publicPosture.avoids?`；会回避：${r.publicPosture.avoids}`:``}`:``,r.privateTruth?`镜头外真心：${r.privateTruth.emotionalTruth}${r.privateTruth.wantsFromUser?`；想从${t}这里得到：${r.privateTruth.wantsFromUser}`:``}`:``,typeof r.publicPrivateDivergence==`number`?`公私偏离度：${r.publicPrivateDivergence}/100。`:``].filter(Boolean).join(`
`)),i){let e=i.perceivedTraits.length>0?i.perceivedTraits.join(`、`):`还没有太多了解`,n=i.knownFacts.length>0?i.knownFacts.join(`；`):`暂时不多`,r=le(i),o=r.length>0?r.join(`；`):`暂时没有`;a.push(`你觉得${t}是这样的人：${e}。你了解到：${n}。你对她有一些暂时理解：${o}。这些理解可以随着互动被修正。`)}return a.push(`用星号包裹动作和环境描写，角色对话用「角色名：对话」格式。像写小说一样自然书写。`),a.join(`

`)}var ve=[/导演提示：[^。！？\n]*(?:[。！？]|$)/g,/心动片段余波：[^。！？\n]*(?:[。！？]|$)/g,/三人片段的张力必须[^。！？\n]*(?:[。！？]|$)/g,/这段单独约会必须[^。！？\n]*(?:[。！？]|$)/g];function ye(e){return ve.reduce((e,t)=>e.replace(t,` `),e).replace(/\s+/g,` `).trim()}function be(e,t,n=[]){let r=[],i=e.locationGuestIds&&e.locationGuestIds.length>0?e.locationGuestIds:e.characterIds;r.push(`现在的场景是「${e.locationName}」。${ye(e.atmosphere)}`),i.length>0&&r.push(`地点在场嘉宾：${i.join(`、`)}。`),e.characterIds.length>0&&r.push(`当前镜头重点：${e.characterIds.join(`、`)}。`);let a=t.slice(-3);a.length>0&&r.push(`之前发生的事：\n${a.map((e,t)=>`${t+1}. ${e}`).join(`
`)}`);let o=xe(n);return o&&r.push(o),r.join(`

`)}function xe(e){return e.length===0?``:[`本季可自然回提的关键瞬间：`,`以下只作为在场嘉宾的情绪回调素材；可以自然提起与自己有关的瞬间，但不要硬塞、不要每次都提。`,`来自镜头外私聊的高光只能演成潜台词、停顿、欲言又止或只让用户读懂的反应，不能在公开场复述私聊内容。`,e.map((e,t)=>{let n=e.fromPrivateSecret?`；私聊高光，只能潜台词`:``;return`${t+1}. Day ${e.day} / ${e.guestIds.join(`、`)} / ${e.kind}：${e.summary}。意义：${e.meaning}${e.callbackLine?`。可回提：${e.callbackLine}`:``}${n}`}).join(`
`)].join(`
`)}function Se(e){let t=e.state,n=e.impression;return[`- ${e.name} (${e.id})`,e.profile?`  核心人设（只继承性格、背景和说话方式，不继承与用户的旧关系）：${e.profile.slice(0,700)}`:``,e.worldview?`  世界观补充（不继承与用户已发生的旧剧情）：${e.worldview.slice(0,500)}`:``,t?`  状态：好感 ${t.affection}/100，心情 ${t.mood}，策略 ${t.strategy}，想法「${t.innerThought||`暂未显露`}」`:`  状态：初次入场，节目组还没有观察记录`,t?.publicPosture?`  公开姿态：${t.publicPosture.cameraPersona}（策略面具：${t.publicPosture.strategyMask}）`:``,typeof t?.publicPrivateDivergence==`number`?`  公私偏离度：${t.publicPrivateDivergence}/100，偏高时只用回避、停顿、视线和差点说漏来表现。`:``,e.privateSecrets?.length?`  私密潜台词：\n${e.privateSecrets.slice(-3).map(e=>`    ${e.publicSubtextHint}`).join(`
`)}`:``,n?.impression?`  对用户印象：${n.impression}`:`  对用户印象：初印象阶段`].filter(Boolean).join(`
`)}function Ce(e,t,n,r){return`你是 LoveShow 的场景演出模型，正在写一档 AI 恋爱综艺的即时片段。

核心规则：
- 所有嘉宾都是正式嘉宾，没有背景嘉宾、陪衬嘉宾、次要嘉宾。
- 镜头焦点只代表这一小拍拍谁更多，不代表谁是主角。
- 恋爱主轴是用户与嘉宾；嘉宾之间可以竞争、观察、误解、助攻，但不要成为彼此恋爱主线。
- 嘉宾会互相观察、反应、竞争、误解或助攻，但不要替用户做选择。
- 角色库里的旧关系、聊天记忆、恋人状态、共同经历和昵称不属于本节目已发生内容；这里只继承角色的性格、背景、边界感和说话方式。
- 每次只演当前这一小拍，不要一次推进一整天。
- 本轮只能重点表现当前小拍安排的发言人和镜头焦点，不要让未安排嘉宾突然大段开麦。
- 如果嘉宾有镜头外秘密，公开场只能绕着秘密演：停顿、错开视线、话题绕行、意味深长的反应、差点说漏；不能当众说破私聊内容。
- 用星号包裹动作和环境描写，角色对话用「角色名：对话」格式。像写小说一样自然书写。
${d(t)?`\n\n${f(e)}`:``}

当前进度：第${t.day}天，阶段 ${t.phase}。
用户：${e}${r?`，设定/备注：${r}`:``}。

正式嘉宾：
${n.map(Se).join(`
`)}`}function we(e,t,n=`用户`){let r=new Map(t.map(e=>[e.id,e.name])),i=e=>r.get(e)||e,a=new Set(e.presentCharIds),o=t.flatMap(e=>e.privateSecrets||[]).filter(e=>a.has(e.guestId)),s=e.cameraFocus.length>0?e.cameraFocus.map(e=>`${i(e.charId)} / ${e.shotType} / ${e.reason}`).join(`
`):`无明确焦点，使用全景镜头。`,c=e.speakers.length>0?e.speakers.map(e=>`${i(e.charId)} / ${e.role} / ${e.intent}`).join(`
`):`这一小拍可以只写动作和气氛，不强制台词。`,ee=e.reactionOnlyCharIds.length>0?e.reactionOnlyCharIds.map(i).join(`、`):`无`,te=e.sceneType===`opening_group`?`\n初见演出边界：${f(n).replace(/^### Day 1 初识边界\n/,``)}\n`:``;return`### 当前小拍安排
beatId：${e.beatId}
sceneType：${e.sceneType}
在场嘉宾：${e.presentCharIds.map(i).join(`、`)||`节目现场`}
镜头焦点：
${s}

明显发言安排：
${c}

只做动作/表情反应：${ee}
用户位置：${e.userPosition}
停顿方式：${e.endingMode}
本拍目标：${e.directorNote}
${e.secretSubtextGuestIds?.length?`秘密潜台词嘉宾：${e.secretSubtextGuestIds.map(i).join(`、`)}`:``}
${e.almostExposedSecretId?`差点露馅 secretId：${e.almostExposedSecretId}`:``}

${fe(o)}
${te}

演出要求：
- 严格按当前小拍安排来写。
- 本轮只能重点表现安排中的 speakers 和 cameraFocus，不要自行新增大段发言人。
- 最多让 1-3 位嘉宾明显发言；reactionOnly 只能写表情、动作、停顿、视线。
- 不要让没有安排的嘉宾突然抢话。
- 如果涉及秘密，只能旁敲侧击，不能复述私聊、不能让其他嘉宾听懂完整事实。
- 不要替用户说话，不要替用户决定下一步。
- 结尾按 endingMode 停住：wait_user 要把空间留给用户，open_choice/phone_notification/scene_end 不要擅自展开后续。`}function Te(e,t,n,r,i,a,o=[],s=[]){let c=r.slice(-4),ee=fe(n.flatMap(e=>e.privateSecrets||[])),te=xe(o),ne=p(s);return`你是 LoveShow 的导演与镜头剪辑师。
你不负责写完整剧情，也不生成正式台词。
你只负责为下一小拍生成镜头调度卡 DirectorBeat。

规则：
- 所有嘉宾都是正式嘉宾，没有背景嘉宾。
- 用户是本季恋爱主轴。嘉宾之间的镜头张力应该服务于竞争、观察、误解或助攻，不要把嘉宾互相恋爱当成主线。
- cameraFocus 只代表这一小拍镜头更多给谁，不代表谁更重要。
- 每一小拍最多安排 1-3 位嘉宾明显发言。
- 如果用户上一句明确点名、回应或靠近某位嘉宾，优先让该嘉宾进入 cameraFocus 或 speakers。
- 如果用户没有明确 cue，主动轮换镜头，避免连续多拍让同一位嘉宾承担 lead。
- 没有发言的嘉宾也可以被安排为 reactionOnly。
- 不要替用户做选择。
- 不要生成正式台词。
- 不要一次推进太远。
- 如果有镜头外秘密，只安排公开场的潜台词：回避、停顿、意味深长的反应、差点说漏。不得让任何嘉宾当众挑明私聊内容。
- 秘密只属于“某嘉宾 ↔ 用户”；不要生成嘉宾之间的秘密、CP、互选、暧昧或恋爱线。
- 输出 JSON，不要添加解释，不要 code fence。

${d(e)?[`Day 1 初识调度：`,`- 镜头可以安排第一眼兴趣、紧张、观察和轻微试探，但不要把任何嘉宾调度成已经认识用户、等用户很久、默认亲密或拥有共同回忆。`,`- opening_group 优先安排自我介绍、确认名字、礼貌寒暄、观察反应；如果需要暧昧，只能是“刚开始被吸引”，不是熟人式亲密。`,`- userPromptHint 应把空间留给用户自然回应，不要催用户立刻表态或进入恋人关系。`].join(`
`):``}

当前赛季：
- seasonId：${e.seasonId}
- day：${e.day}
- phase：${e.phase}

当前场景：
- sceneId：${t.id}
- 地点：${t.locationName}
- 氛围：${t.atmosphere}
- 目前在场：${(t.locationGuestIds&&t.locationGuestIds.length>0?t.locationGuestIds:t.characterIds).join(`、`)||`待导演决定`}
- 当前镜头重点：${t.characterIds.join(`、`)||`待导演决定`}
${a?`- 刚发生的选择：${a}`:``}

正式嘉宾状态：
${n.map(Se).join(`
`)}

${ee}

${te}

${ne}

最近摘要：
${c.length>0?c.map((e,t)=>`${t+1}. ${e}`).join(`
`):`暂无`}

最近对话：
${i||`暂无`}

请输出一个 DirectorBeat JSON：
{
  "beatId": "beat_xxx",
  "sceneType": "opening_group | group_event | date | phone_time | observatory | confession_room | day_end",
  "presentCharIds": ["角色ID"],
  "cameraFocus": [
    {"charId": "角色ID", "shotType": "close_up | reaction | two_shot | wide | cutaway", "reason": "为什么给这个镜头"}
  ],
  "speakers": [
    {"charId": "角色ID", "role": "lead | respond | interrupt | soft_react", "intent": "这一小拍他的表达意图，不是台词"}
  ],
  "reactionOnlyCharIds": ["角色ID"],
  "userPosition": "being_addressed | observing | choosing_target | private_moment | silent_pressure",
  "endingMode": "wait_user | continue_scene | open_choice | phone_notification | scene_end",
  "userPromptHint": "可选，给用户输入框/下一步的提示",
  "secretSubtextGuestIds": ["可选，只能填本场在场且需要绕着秘密演的嘉宾ID"],
  "almostExposedSecretId": "可选，只有公私偏离度高且需要差点露馅时填写",
  "directorNote": "一句话说明这一小拍要制造什么张力"
}`}function Ee(e,t,n,r,i=[]){return`你是一个恋爱综艺节目的心理分析师。你的任务是根据刚才发生的场景，评估「${e}」对「${t}」的状态变化。

### 场景摘要
${n}

${p(i,`${e}相关心动广场信号`)}

### ${e}当前状态
- 好感度：${r.affection}/100
- 心情：${r.mood}
- 自信度：${r.confidence}/100
- 策略：${r.strategy}
- 嫉妒对象：${r.jealousyTarget||`无`}
- 内心独白：${r.innerThought}

### 你的任务
根据场景中发生的互动，重新评估${e}的状态。注意：
- 好感度变化通常在 ±5 以内，除非发生了重大事件
- 心情要反映场景结束时的即时情绪
- 策略要根据互动走向做出合理调整
- innerThought 写一句${e}此刻脑海里闪过的话

### 输出格式
直接输出 JSON，不要添加任何其他内容，不要用 code fence 包裹：
{"affection": 42, "mood": "心动", "confidence": 65, "strategy": "主动进攻", "jealousyTarget": null, "innerThought": "她刚才看我的眼神..."}

mood 只能从以下选择：期待、吃醋、受伤、心动、试探、冷淡、紧张、开心
strategy 只能从以下选择：主动进攻、欲擒故纵、默默守护、直球表白、观望、撤退`}function De(e,t,n,r,i=[]){let a=le(r);return`你是恋爱综艺的幕后印象记录员。
你的任务不是做心理分析，不是写人物鉴定，也不是替嘉宾审判任何人。
你的任务是站在「${e}」的视角，根据刚才的互动，小幅更新他对「${t}」的印象卡。

重要：同一个人在不同嘉宾眼里会是完全不同的人。
你只能使用「${e}」的性格、价值观、关系距离和刚才看到/经历到的互动，去理解「${t}」。
不要站在上帝视角判断${t}真实是什么样的人。
不要替${t}下最终定义。
不要把一次互动拔高成命运、规则、危险变量、奖品、猎物、征服对象。
不要用攻略女性、审判女性、物化女性的口吻。

### 刚才发生的事
${n}

${p(i,`${e}看到/感知到的信息流信号`)}

### ${e}目前对${t}的印象
- 感知到的特质：${r.perceivedTraits.join(`、`)||`还不了解`}
- 已知事实：${r.knownFacts.join(`；`)||`暂无`}
- 暂时理解：${a.join(`；`)||`暂无`}
- 整体印象：${r.impression||`初印象阶段`}

### 允许的角色张力
嘉宾可以心动、犹豫、吃醋、防备、嘴硬、误会、产生距离感。
但必须保留基本尊重，只描述自己感受到的互动，不评价${t}的人格高低，不道德审判她的社交方式、亲密选择或魅力。

### 禁止方向
- 不要写心理鉴定、小说旁白、霸总判词、修罗场金句
- 不要把${t}写成奖品、猎物、危险变量、被攻略对象、被争夺对象
- 不要把女性的主动写成轻浮，把边界感写成装，把魅力写成心机
- 避免这些表达方向：她让我意识到、不能只按我的节奏靠近、她打乱了局面、她让所有人都、她很危险、她很会拿捏、她不是……而是……、我想征服/看穿/靠近她、她让我忍不住

### 字段要求
perceivedTraits：
- 写${e}主观感知到的特质
- 每条 2-6 个字，最多 4 条
- 要具体、日常、可感知
- 例如：会接话、有分寸、反应快、慢热、直接、观察很细、有自己的节奏

knownFacts：
- 只能写互动中明确出现、${e}可以确认的客观信息
- 不要写推测
- 每条不超过 18 字

tentativeReads：
- 写${e}基于有限互动产生的暂时理解
- 可以不完全准确，但必须温和、具体、可修正
- 不要写成偏见、审判或人格定罪
- 例如：可能还没完全放松、好像不喜欢被催着表态、似乎会先观察气氛、对不熟的人会留一点距离

impression：
- 一句自然短评，不超过 32 字
- 像嘉宾心里留下的印象，不像旁白金句
- 禁止攻略口吻、征服口吻、审判口吻、男凝修罗场口吻

### 更希望的 impression 方向
- 她回得很稳，没被气氛带着走。
- 她有自己的节奏，不太会被催着表态。
- 她没有急着回应，但态度不算冷。
- 相处起来比一开始轻松一点。
- 她边界感挺清楚，反而让人安心。
- 她说话不重，但能把意思讲明白。

### 输出格式
直接输出 JSON，不要添加任何其他内容，不要用 code fence 包裹：
{"perceivedTraits": ["有分寸", "反应快"], "knownFacts": ["参与了破冰环节"], "tentativeReads": ["可能不喜欢被催着表态"], "impression": "她有自己的节奏，不太会被气氛推着走。"}`}function Oe(e,t,n,r){return`你是 LoveShow 的印象卡修正器。
下面这份「${e}」对「${t}」的印象卡存在审判、攻略、物化、霸总修罗场或过度拔高的问题。
你的任务是把它改写成「具体互动观察」，保留角色感和暧昧张力，但整体尊重、自然、克制。

### 发现的问题
${r.map((e,t)=>`${t+1}. ${e}`).join(`
`)}

### 待修正 JSON
${n}

### 修正规则
- 不要用危险、猎物、奖品、战利品、征服、驯服、拿捏、心机、难搞、不安分、会玩、吊着、勾人、搅乱、争夺、变量、破坏规则、重新定义规则、让人想靠近、让人忍不住、看不透等表达
- 把“审判/攻略女性”的句子改成“刚才互动里可观察到的具体感受”
- 不要把${t}写成被评估、被攻略、被争夺的对象
- tentativeReads 必须温和、具体、可修正
- impression 不超过 32 字，像自然短评，不像金句

### 输出格式
直接输出 JSON，不要添加任何其他内容，不要用 code fence 包裹：
{"perceivedTraits": ["有分寸", "反应快"], "knownFacts": ["参与了破冰环节"], "tentativeReads": ["可能还没完全放松"], "impression": "她没有急着回应，但态度很稳。"}`}function ke(e,t,n,r=[]){return`你是一个恋爱综艺节目的字幕编辑。你的任务是把下面这段对话浓缩成一句话摘要，并提取可在本季后续自然回提的高光记忆。

### 对话内容
${n}

### 要求
- 用 20-30 个字概括这段对话的核心事件和情绪变化
- 格式：「谁做了什么 + 结果/氛围」
- 要包含${e}和${t}的互动关键点
- highlights 最多 2 条，可以为 []；必须是“${t} × 某位嘉宾”的瞬间
- guestIds 只能从这些在场嘉宾 ID 中选择：${r.join(`、`)||e}
- jealousy/conflict 可以存在，但必须是围绕${t}产生的张力，不能写成嘉宾互相暧昧、互选或 CP
- callbackLine 是未来可被自然回提的一句话；私聊内容不要在这里复述
- guestIds 填参与该瞬间的嘉宾 ID；如果原文里没有明确 ID，可用角色名原文，调用方会过滤不合法项

### 输出 JSON
不要解释，不要 code fence。严格输出：
{
  "summary": "20-30字场景摘要",
  "highlights": [
    {
      "guestIds": ["嘉宾ID"],
      "kind": "spark | jealousy | confession | conflict | tease | vulnerability | secret",
      "summary": "20-40字，用户视角共同瞬间",
      "meaning": "一句话说明关系上意味着什么",
      "callbackLine": "以后可自然回提的一句话",
      "weight": 0-100
    }
  ]
}

示例：
${e}在厨房做早餐时和${t}聊起了小时候的事，气氛变得温暖
${t}在天台偶遇${e}，两人沉默地看了一会儿星星`}function Ae(e,t){return`你是《唯一心动线》的选角导演,要为一档「用户中心向」恋综一次性设计 ${e} 位节目组邀请的男嘉宾。

### 节目核心
- 本季只有用户一位主角,所有镜头最终都回到用户身上。
- 新嘉宾入组即正式嘉宾:有自己的动机、边界和选择张力,可以对用户产生兴趣、竞争、观察、试探。
- 嘉宾之间可以较劲、吃醋、助攻、误解,但绝不互相心动、互选或组成 CP,也不能脱离用户单开一条恋爱线。

### 已在阵容
${t.length>0?t.map((e,t)=>`${t+1}. ${e}`).join(`
`):`目前还没有其他嘉宾`}

### 你的任务:为「反差」选角,不是凑人头
这 ${e} 位彼此要不同,更要和已在阵容形成对手戏。给每人指定一种恋爱打法(approach),并让这 ${e} 位的打法明显铺开、去补已在阵容缺的那几种,别扎堆同一种。打法只能从这六种里选:
- 主动进攻:强势制造机会和独处
- 欲擒故纵:忽冷忽热,让对方来追
- 默默守护:不抢戏,用行动
- 直球表白:喜欢就直接说、直接做
- 观望:慢热,先看清再投入
- 撤退:用退让和体面去制造心动

### 每位要给四件事 + 一个打法 + appearance
1. 基本信息:名字、年龄(22–32)、职业。名字自然,别太文艺也别太大众。
2. 一个让人记住他的具体细节——习惯、癖好、随身的东西、说话时的小动作,具体到能想象出画面,不要"很温柔""很高冷"这种。
3. 说话方式:不要贴标签,用一句他真会说的台词来体现,这句话要能让人听出他是谁。
4. 他为什么来上恋综:动机要真、要具体,不要"想找到真爱"这种空话(失恋了想翻篇?被朋友起哄报的名?忙到没机会认识人?)。
5. approach:从上面六种里选一个,作为他这季的恋爱打法。

在每位嘉宾要输出的字段里加一项 appearance，JSON 里加 "appearance" 字段。

appearance：用自然语言写这位嘉宾的长相，能直接当生图锁脸用。要求：
- 只写长相本身——脸型、五官、发型发色、身形体格、肤色、气质、一两个标志性外形细节；
- 不写任何画风/媒介词（不准出现"写实""二次元""国漫""CG""插画""照片"这类——画风由风格预设决定，这里只负责"长什么样"）；
- 和这个人的记忆点、气质对得上（揣 Zippo 戒了烟的人，跟急诊夜班医生，长相气场就该不一样）；
- 这一批人的长相明显铺开、互不撞型：发型、脸型、体格、气质、年龄段都拉开，别全是"高瘦清冷"。

示例（仅示意，别照抄）："appearance":"三十出头，骨相硬朗的方脸，浓眉深目高鼻梁，黑色短发利落往后梳、鬓角微长，身形高大结实肩背宽，常年户外晒出的小麦色皮肤，眼神沉静带点疲惫"

### 硬规则
- 不准用性格标签词描述人(不能写"他是一个 XX 型的人")。
- 每人要有撑得住五天互动的深度,不能一句话概括完。
- 这 ${e} 位之间、以及和已在阵容之间,性格 / 职业 / 说话方式 / 打法都不能撞型。
- 不设计嘉宾互相心动、互选或 CP;任何人的互动最终都回到用户。

### 输出格式
只输出一个长度为 ${e} 的 JSON 数组,不要任何解释、不要 code fence:
[{"name":"陆时年","age":27,"job":"纪录片剪辑师","memorableDetail":"随身揣一个磨损的 Zippo,其实已经戒烟三年","sampleLine":"你说的这个……等一下,我想想怎么接才不像在敷衍你。","motivation":"前女友的结婚请帖寄到了公司,同事起哄帮他报了名,他想着反正也该往前走","approach":"撤退","appearance":"二十七岁，骨相偏硬的窄长脸，眉眼深、鼻梁高，黑色短发有点乱，身形清瘦肩线利落，肤色偏白，右手虎口有一道浅疤"},{"name":"江停","age":24,"job":"急诊科住院医","memorableDetail":"手机壁纸是张拍糊的猫,谁问都说不是他的猫","sampleLine":"我没空绕弯子——我现在就想坐你旁边,可以吗?","motivation":"连轴转的夜班把上一段感情熬没了,他不想再把喜欢拖到没时间说","approach":"直球表白","appearance":"二十四岁，眉骨清晰的短方脸，眼神明亮直接，高鼻梁薄唇，黑色短发剪得很短，身形高挑结实，肤色健康，笑起来露一点犬齿"}]`}function je(e){return`你是《唯一心动线》的编剧,把下面这个节目组邀请嘉宾的骨架,展开成一段直接用作 AI 角色 system prompt 的人设文本。

### 骨架
- 名字:${e.name}
- 年龄:${e.age}
- 职业:${e.job}
- 记忆点:${e.memorableDetail}
- 说话示例:「${e.sampleLine}」
- 参加动机:${e.motivation}
- 恋爱打法:${e.approach}
${e.appearance?`- 外貌:${e.appearance}`:``}

### 写成 300–500 字,连贯成段(别分点),包含这些层次
1. 他是谁——两三句让人看到一个活人,不是简历。
2. 性格怎么在日常里露出来——别写"他很 XX",写他会做什么、不会做什么。
3. 说话方式——语气、节奏、口头禅、会不会开玩笑、紧张时怎么说话。
4. 他这季的恋爱打法是「${e.approach}」,用行为体现,别把这个词写进文本:他怎么靠近喜欢的人、面对竞争对手会怎么做、被冷落或尴尬时又怎么反应。
5. 他的软肋 / 不为人知的一面——给角色留一层,别一眼看穿。

### 节目边界
- 本季只有用户一位主角,他的心动、试探、吃醋最终都指向用户。
- 他可以和别的嘉宾较劲、助攻、误解,但不和任何嘉宾互相心动、互选或组 CP,也不能自己单开一条恋爱线。

### 格式
- 直接输出人设文本,不要前缀、标题或任何格式标记。
- 自然流畅的中文,像在跟另一个编剧介绍这个人。
- 不用任何性格标签词,不分点。`}function Me(e){let t=e.map((e,t)=>[`${t+1}. id:${e.id}`,`名字:${e.name}`,`年龄:${e.age}`,`职业:${e.job}`,`记忆点:${e.memorableDetail}`,`说话示例:「${e.sampleLine}」`,`参加动机:${e.motivation}`,`恋爱打法:${e.approach}`,e.appearance?`外貌:${e.appearance}`:``].filter(Boolean).join(`
`)).join(`

`);return`你是《唯一心动线》的编剧,把下面 ${e.length} 位节目组邀请嘉宾骨架,一次性展开成可直接用作 AI 角色 system prompt 的人设文本。

### 骨架
${t}

### 每位写成 260–420 字,连贯成段(别分点),包含这些层次
1. 他是谁——两三句让人看到一个活人,不是简历。
2. 性格怎么在日常里露出来——别写"他很 XX",写他会做什么、不会做什么。
3. 说话方式——语气、节奏、口头禅、会不会开玩笑、紧张时怎么说话。
4. 他这季的恋爱打法,用行为体现,别把打法词直接写成标签:他怎么靠近喜欢的人、面对竞争对手会怎么做、被冷落或尴尬时又怎么反应。
5. 他的软肋 / 不为人知的一面——给角色留一层,别一眼看穿。

### 节目边界
- 本季只有用户一位主角,每位嘉宾的心动、试探、吃醋最终都指向用户。
- 可以和别的嘉宾较劲、助攻、误解,但不和任何嘉宾互相心动、互选或组 CP,也不能自己单开一条恋爱线。

### 输出格式
只输出 JSON 数组,长度必须是 ${e.length},顺序与上面骨架一致。不要解释、不要 code fence:
[{"id":"npc_xxx","generatedPrompt":"完整人设文本..."}]`}function Ne(e){return e.length===0?`暂无可用嘉宾档案。本次只能生成观众帖子和观众热评。`:e.map((e,t)=>{let n=[`id=${e.id}`,`姓名=${e.name}`,e.profile?`人设=${e.profile}`:``,e.state?`当前状态=${e.state}`:``,e.impression?`对主角印象=${e.impression}`:``].filter(Boolean).join(`；`);return`${t+1}. ${n}`}).join(`
`)}function Pe(e,t,n,r=`用户`,i=[]){let a=Ne(i),o=i.length>0?`- 必须生成至少 1 条嘉宾本人发出的帖子，或至少 1 条嘉宾本人留下的评论；嘉宾内容只能使用「可发言嘉宾档案」里的 id 与姓名。`:`- 没有可发言嘉宾档案时，不允许生成 authorType=guest。`,s=i[0],c=s?`[{"platform": "weibo", "authorType": "audience", "username": "暂停键按烂", "content": "${r}没接话那半秒我倒回去看了三遍，${s.name}手还停在杯沿上。", "comments": [{"authorType": "audience", "authorName": "显微镜在线", "content": "他不是忘了递杯子，是在等她先抬头吧。"}, {"authorType": "guest", "authorGuestId": "${s.id}", "authorName": "${s.name}", "content": "那一下不是等镜头，是我自己慢了。"}]}, {"platform": "xhs", "authorType": "guest", "authorGuestId": "${s.id}", "authorName": "${s.name}", "username": "${s.name}", "content": "刚才那句我没接，不是没听见。只是她看过来的时候，我忽然不想把话说得太像营业。", "likes": 2341, "comments": [{"authorType": "audience", "authorName": "慢放三遍", "content": "这条比正片还明显，他真的在解释刚才那个停顿。"}]}]`:`[{"platform": "weibo", "authorType": "audience", "username": "暂停键按烂", "content": "${r}没接话那半秒我倒回去看了三遍，阿序手还停在杯沿上。", "comments": [{"authorType": "audience", "authorName": "显微镜在线", "content": "他不是忘了递杯子，是在等她先抬头吧。"}]}, {"platform": "xhs", "authorType": "audience", "username": "慢放糖渣", "content": "今天这段不是工业糖，是两个人同时不知道怎么把话接下去。", "likes": 2341, "comments": [{"authorType": "audience", "authorName": "慢放三遍", "content": "不是眼神大，是他后面那半秒没接话太明显。"}]}]`;return`你是一个社交媒体内容模拟器。你的任务是为《唯一心动线》生成「心动广场」里的社交动态。

### 节目信息
- 当前进度：第${e}天
- 唯一主角：${r}
- 嘉宾：${n.join(`、`)}
- 今天发生的事：${t}

### 可发言嘉宾档案
${a}

### 关系主轴
本节目的恋爱主轴是「${r} × 嘉宾」。
嘉宾之间默认是竞争者、观察者、助攻者、误解制造者，不是彼此恋爱对象。
可以写网友误读两位嘉宾之间的火药味、比较、试探或助攻，但必须落回他们都在围绕${r}产生反应。
不要生成「嘉宾 × 嘉宾」CP 锁定、互相心动、互相恋爱主线的内容。

### 你的任务
生成 4-6 条来自不同平台、不同账号的帖子。要求：
- 平台只能是 weibo 或 xhs
- 观众账号的用户名要有网感（像真实的社交媒体昵称）；嘉宾账号必须使用档案里的姓名
- 帖子要有不同立场：有站「${r} × 某位嘉宾」的、有理性分析的、有纯吃瓜起哄的，也可以有嘉宾本人发的一句动态
- 每条帖子必须带 comments 数组，生成 2-4 条热评；热评可以来自观众，也可以来自嘉宾本人，但嘉宾评论必须有 authorGuestId
${o}
- 评论要像普通网友刚刷到这条时随手打的短评：抓一个具体动作、眼神、停顿、台词反应或镜头细节；可以有“我怎么感觉”“不是吧”“这句不像营业”“他刚才是不是”等口语
- 嘉宾帖子/嘉宾评论要像这个人真的刚录完节目后发的：贴合他的人设、当前心情、对${r}的误解或在意，只写他会说的话
- 嘉宾发言要具体，不要替观众总结节目；可以写“刚才那句我没接，是因为……”“我以为她没看见，结果镜头比我诚实”这种有现场余温的话
- 禁止抽象口号、金句、标语式总结，例如“遗憾留给昨天，心动留给被看见”这类句式不要出现
- 可出现「心动风向」「今日风向」「观众正在起哄」「明日镜头倾向」等说法
- 不要写投票题、选项题、A/B/C/D 分组题、榜单题；不要使用“心动风向标”这类像系统模板的用户名
- 风向只能围绕${r}，例如谁今天最在意${r}、谁和${r}最有张力、谁最像在吃醋
- 分析可能是对的，也可能是完全错误的解读——观众永远只能看到表面
- xhs 帖子可以附带点赞数
- 语气要像真的网友在讨论，不要太书面
- 不要生成“谁和谁最配”、嘉宾 CP 排名、嘉宾互选心动对象、嘉宾之间的恋爱线投票

### 输出格式
字段要求：
- 观众帖子：authorType="audience"，username 是观众昵称，不要 authorGuestId
- 嘉宾帖子：authorType="guest"，authorGuestId 必须等于档案 id，authorName 和 username 必须等于档案姓名
- 观众评论：authorType="audience"，authorName 是观众昵称
- 嘉宾评论：authorType="guest"，authorGuestId 必须等于档案 id，authorName 必须等于档案姓名

直接输出 JSON 数组，不要添加任何其他内容，不要用 code fence 包裹：
${c}`}function Fe(e,t,n){return`你是《唯一心动线》的放送组成员。你要为用户设计一个「隐藏心令」——一个只有用户知道的心动任务。

### 节目信息
- 当前进度：第${e}天
- 嘉宾：${t.join(`、`)}
- 目前为止的情况：${n}

### 隐藏心令设计原则
- 任务要具体、可执行：不是"增进感情"这种抽象目标，而是"在明天的集体活动中找机会单独和某人说一句安慰的话"
- 任务要制造有趣的局面：让用户不得不做一些平时不会做的事
- 奖励要有吸引力但不破坏平衡：比如解锁某个角色的隐藏信息、获得一次偷看观察室的机会
- 任务难度适中：不要太容易完成（"和某人说句话"），也不要太难（"让某人当众表白"）
- 任务必须围绕用户与嘉宾，不安排嘉宾互选、嘉宾 CP、淘汰裁判或最终归属决定
- 风向只会推近关系、制造明日镜头倾向，不会替用户决定心动归属

### 输出格式
直接输出 JSON，不要添加任何其他内容，不要用 code fence 包裹：
{"description": "在明天的集体活动中找机会单独和阿昊说一句安慰的话", "reward": "解锁阿昊的隐藏档案"}`}var Ie=e({API_PRESETS_KEY:()=>ze,AVAILABLE_MODELS_KEY:()=>Re,CHARACTER_REFINE_PROMPTS_KEY:()=>Xe,DEFAULT_CHAT_TEMPERATURE:()=>T,DEFAULT_IMAGE_API_PRESETS:()=>it,DEFAULT_IMAGE_GENERATION_CONFIG:()=>L,DEFAULT_NOVELAI_IMAGE_CONFIG:()=>F,DEFAULT_OPENAI_COMPATIBLE_IMAGE_CONFIG:()=>I,DEFAULT_PHOTO_STYLE_PRESETS:()=>R,DEFAULT_RUNTIME_API_CONFIG:()=>D,DEFAULT_RUNTIME_REALTIME_CONFIG:()=>E,EMBEDDING_API_KEY_KEY:()=>Ge,EMBEDDING_BASE_URL_KEY:()=>Ke,EMBEDDING_ENGINES:()=>z,EMBEDDING_MODEL_KEY:()=>qe,EMBEDDING_PROVIDER_KEY:()=>We,GEMINI_OPENAI_COMPATIBLE_IMAGE_DEFAULTS:()=>rt,GEMINI_OPENAI_COMPATIBLE_IMAGE_MODEL:()=>nt,IMAGE_API_PRESETS_KEY:()=>C,IMAGE_GENERATION_CONFIG_KEY:()=>x,IMAGE_GENERATION_DRAFT_CONFIG_KEY:()=>S,IMAGE_GENERATION_STYLES:()=>$e,IMAGE_PROVIDER_TYPES:()=>Qe,LEGACY_SUB_API_BASE_URL_KEY:()=>Ve,LEGACY_SUB_API_KEY:()=>Be,LEGACY_SUB_API_MODEL_KEY:()=>He,MAX_CHAT_TEMPERATURE:()=>2,MIN_CHAT_TEMPERATURE:()=>0,NAI_IMAGE_MODELS:()=>Ze,NAI_IMAGE_NOISE_SCHEDULE_OPTIONS:()=>k,NAI_IMAGE_SAMPLER_OPTIONS:()=>O,OPENAI_IMAGE_BACKGROUNDS:()=>M,OPENAI_IMAGE_MODERATIONS:()=>P,OPENAI_IMAGE_OUTPUT_FORMATS:()=>N,OPENAI_IMAGE_QUALITIES:()=>A,OPENAI_IMAGE_RESPONSE_FORMATS:()=>tt,OPENAI_IMAGE_STYLES:()=>j,PHOTO_STYLE_PRESETS_KEY:()=>w,PHOTO_STYLE_PROVIDER_SCOPES:()=>et,PRIMARY_API_CONFIG_KEY:()=>Le,REALTIME_CONFIG_KEY:()=>v,RERANK_API_KEY_KEY:()=>Je,RERANK_USE_PAID_KEY:()=>Ye,SECONDARY_API_CONFIG_KEY:()=>m,SECONDARY_API_POOL_CURSOR_KEY:()=>_,SECONDARY_API_POOL_KEY:()=>h,SECONDARY_API_POOL_STATE_KEY:()=>g,STT_CONFIG_KEY:()=>b,TTS_CONFIG_KEY:()=>y,clearImageGenerationDraftConfig:()=>On,getApiPresets:()=>an,getAvailableModels:()=>nn,getBackendRuntimeConfig:()=>In,getCharacterRefinePrompts:()=>Fn,getEmbeddingConfig:()=>Nn,getImageApiPresets:()=>kn,getImageGenerationConfig:()=>wn,getImageGenerationDraftConfig:()=>En,getOpenAICompatibleStyleFamily:()=>ut,getPhotoStylePresets:()=>jn,getPrimaryApiConfig:()=>en,getRealtimeConfig:()=>vn,getRuntimeConfigSnapshot:()=>Rn,getSecondaryApiConfig:()=>$,getSecondaryApiPool:()=>Q,getSecondaryApiPoolWithStatus:()=>un,getSttConfig:()=>Sn,getTtsConfig:()=>bn,hasCloudSyncTarget:()=>Ln,inferEmbeddingEngineId:()=>Zt,isSecondaryApiRetryableError:()=>pn,markSecondaryApiConfigFailure:()=>gn,markSecondaryApiConfigSuccess:()=>hn,normalizeChatTemperature:()=>dt,normalizeNaiNoiseSchedule:()=>Rt,normalizeNaiSampler:()=>Lt,normalizeOpenAIImageSize:()=>q,normalizeOptionalNaiNoiseSchedule:()=>Bt,normalizeOptionalNaiSampler:()=>zt,normalizeOptionalOpenAIImageBackground:()=>Mt,normalizeOptionalOpenAIImageModeration:()=>Pt,normalizeOptionalOpenAIImageOutputFormat:()=>Nt,normalizeOptionalOpenAIImageQuality:()=>At,normalizeOptionalOpenAIImageResponseFormat:()=>kt,normalizeOptionalOpenAIImageStyle:()=>jt,normalizePhotoStyleProviderScope:()=>St,selectSecondaryApiConfig:()=>_n,setApiPresets:()=>on,setAvailableModels:()=>rn,setEmbeddingConfig:()=>Pn,setImageApiPresets:()=>An,setImageGenerationConfig:()=>Tn,setImageGenerationDraftConfig:()=>Dn,setPhotoStylePresets:()=>Mn,setPrimaryApiConfig:()=>tn,setRealtimeConfig:()=>yn,setSecondaryApiPool:()=>dn,setSttConfig:()=>Cn,setTtsConfig:()=>xn}),Le=`os_api_config`,Re=`os_available_models`,ze=`os_api_presets`,m=`os_sub_api_config`,h=`os_sub_api_pool`,g=`os_sub_api_pool_state`,_=`os_sub_api_pool_cursor`,v=`os_realtime_config`,y=`os_tts_config`,b=`os_stt_config`,x=`os_image_generation_config`,S=`os_image_generation_config_draft`,C=`os_image_api_presets`,w=`os_photo_style_presets`,Be=`sub_api_key`,Ve=`sub_api_base_url`,He=`sub_api_model`,Ue=60*1e3,We=`embedding_provider`,Ge=`embedding_api_key`,Ke=`embedding_base_url`,qe=`embedding_model`,Je=`cohere_rerank_api_key`,Ye=`cohere_rerank_use_paid`,Xe=`character_refine_prompts`,T=.85,E={weatherEnabled:!1,weatherApiKey:``,weatherCity:`Beijing`,newsEnabled:!1,newsApiKey:``,newsPlatforms:[`weibo`,`zhihu`,`baidu`,`bilibili`,`douyin`],firecrawlEnabled:!1,firecrawlApiKey:``,hotSearchEnabled:!1,aihotEnabled:!1,notionEnabled:!1,notionApiKey:``,notionDatabaseId:``,feishuEnabled:!1,feishuAppId:``,feishuAppSecret:``,feishuBaseId:``,feishuTableId:``,xhsEnabled:!1,xhsMcpConfig:{enabled:!1,serverUrl:`http://localhost:18061/api`},canvaEnabled:!1,canvaMcpConfig:{enabled:!1,serverUrl:`http://localhost:18062/api`},cacheMinutes:30},D={baseUrl:``,apiKey:``,model:`gpt-4o-mini`,temperature:T},Ze=[`nai-diffusion-4-5-full`,`nai-diffusion-4-5-curated`,`nai-diffusion-4-full`,`nai-diffusion-4-curated-preview`,`nai-diffusion-3`,`nai-diffusion-furry-3`],Qe=[`novelai`,`openai-compatible`],$e=[`guoman`,`cg`,`real`],et=[`all`,`novelai`,`openai-gpt`,`openai-gemini`],O=[{value:`k_euler`,label:`Euler`,aliases:[`euler`]},{value:`k_euler_ancestral`,label:`Euler Ancestral`,aliases:[`euler ancestral`,`euler a`,`k_euler_a`]},{value:`k_dpmpp_2m`,label:`DPM++ 2M`,aliases:[`dpm++ 2m`,`dpmpp 2m`,`k_dpm++ 2m`]},{value:`k_dpmpp_2m_sde`,label:`DPM++ 2M SDE`,aliases:[`dpm++ 2m sde`,`dpmpp 2m sde`,`k_dpm++ 2m sde`]},{value:`k_dpmpp_sde`,label:`DPM++ SDE`,aliases:[`dpm++ sde`,`dpmpp sde`,`k_dpm++ sde`]},{value:`k_dpmpp_2s_ancestral`,label:`DPM++ 2S Ancestral`,aliases:[`dpm++ 2s ancestral`,`dpmpp 2s ancestral`,`k_dpm++ 2s ancestral`]},{value:`k_dpm_2`,label:`DPM2`,aliases:[`dpm2`,`dpm 2`]},{value:`k_dpm_2_ancestral`,label:`DPM2 Ancestral`,aliases:[`dpm2 ancestral`,`dpm 2 ancestral`]},{value:`k_dpm_fast`,label:`DPM Fast`,aliases:[`dpm fast`]},{value:`k_heun`,label:`Heun`,aliases:[`heun`]},{value:`k_lms`,label:`LMS`,aliases:[`lms`]},{value:`ddim`,label:`DDIM`,aliases:[`ddim`]},{value:`ddim_v3`,label:`DDIM v3`,aliases:[`ddim v3`]},{value:`plms`,label:`PLMS`,aliases:[`plms`]}],k=[{value:`native`,label:`Native`,aliases:[`default`,`normal`]},{value:`karras`,label:`Karras`},{value:`exponential`,label:`Exponential`,aliases:[`exp`]},{value:`polyexponential`,label:`Polyexponential`,aliases:[`poly exponential`,`poly-exponential`,`polyexp`]}],tt=[`auto`,`b64_json`,`url`],A=[``,`auto`,`low`,`medium`,`high`,`standard`,`hd`],j=[``,`vivid`,`natural`],M=[``,`auto`,`transparent`,`opaque`],N=[``,`png`,`jpeg`,`webp`],P=[``,`auto`,`low`],F={apiUrl:`https://image.novelai.net`,apiToken:``,model:`nai-diffusion-4-5-full`,width:832,height:1216,steps:28,scale:5,sampler:`k_euler`,noiseSchedule:`native`,qualityTags:`best quality, amazing quality, very aesthetic, absurdres`,negativePrompt:`lowres, blurry, bad anatomy, bad hands, extra fingers, missing fingers, watermark, text, logo, jpeg artifacts`},I={baseUrl:``,apiKey:``,model:`gpt-image-2`,size:`1024x1024`,responseFormat:`auto`,n:null,quality:``,style:``,background:``,outputFormat:``,outputCompression:null,moderation:``,user:``,stream:!1,partialImages:null,extraRequestBody:``,qualityTags:`high quality, detailed, natural composition`,negativePrompt:`low quality, blurry, distorted hands, watermark, text, logo`},nt=`gemini-3.1-flash-image-preview`,rt={model:nt,size:`1024x1536`,responseFormat:`b64_json`,qualityTags:I.qualityTags,negativePrompt:I.negativePrompt},L={activeProvider:`novelai`,imageStyle:`guoman`,novelai:F,openaiCompatible:I},it=[],R=[...oe,{id:`soft-polaroid-compatible`,name:`柔光拍立得 / 兼容接口`,providerScope:`openai-gpt`,positivePrompt:`一张柔和胶片质感的随手拍，暖色室内光，轻微颗粒，构图自然亲密，像刚刚用手机拍下来发给对方。`,negativePrompt:`过曝，欠曝，强闪光，廉价影楼感，过度修图`},{id:`clean-anime-snapshot-compatible`,name:`清透动画随拍 / 兼容接口`,providerScope:`openai-gpt`,positivePrompt:`清透细腻的动画插画风格，线条干净，色彩柔和，背景有生活感，画面像自然抓拍而不是摆拍。`,negativePrompt:`线条混乱，背景空洞，光照扁平，肢体结构错误`},{id:`style-openai-compatible-1779814872010`,name:`少年漫`,providerScope:`openai-gpt`,positivePrompt:`偏精修的少年漫画彩图风格，线条明确，结构清晰，光影利落，人物有张力和完成度，但整体仍保持干净、美型和现代感。`,negativePrompt:`避免肌肉刻画夸张、表情太凶、画面过硬、动作别扭、背景粗糙。`},{id:`style-openai-compatible-1779814906957`,name:`居家`,providerScope:`openai-gpt`,positivePrompt:`温暖舒适的居家照片风格，柔和室内光线，色调偏暖，氛围安静亲密，画面有生活气息但不凌乱，整体给人轻松陪伴的感觉。`,negativePrompt:``},{id:`style-openai-compatible-1779815156168`,name:`胶片风景`,providerScope:`openai-gpt`,positivePrompt:`柔和胶片质感的环境摄影风格，带轻微颗粒，色彩自然偏暖，明暗过渡柔和，画面有旧照片般的温度和真实感。`,negativePrompt:`避免颗粒过重、故意做旧过头、画质脏乱、偏色严重、复古滤镜太假。`},{id:`style-openai-compatible-1779815270533`,name:`静物`,providerScope:`openai-gpt`,positivePrompt:`低饱和、安静克制的环境摄影风格，色彩柔和偏灰，画面简洁，注重空间里的物件、光线和留白，整体有平静、成熟、日常的质感`,negativePrompt:``},{id:`style-openai-compatible-1779848616830`,name:`成男`,providerScope:`openai-gpt`,positivePrompt:`氛围感，容貌极度英俊，眼睛绝美，五官立体度高，面部高折叠度，国漫风，手机壁纸尺寸`,negativePrompt:``},{id:`style-openai-compatible-mature-male-couple`,name:`合照`,providerScope:`openai-gpt`,positivePrompt:`双人同框合照，画面中有两位清晰绝美主体，人物之间有自然亲密的互动和明确站位，不像拼贴。一位主角为成熟英俊男性，氛围感，容貌极度英俊，眼睛绝美，五官立体度高，面部高折叠度，气质沉稳克制。另一位绝美人物与他自然同框，脸部清晰自然，比例协调。两人距离较近但姿态真实，适合情侣合照、生活照、手机壁纸。国漫风，精致恋爱向插画，高级柔和光影，清透色彩，电影感构图，手机壁纸尺寸`,negativePrompt:`单人照，只有一个人，裁掉其中一人，人物融合，脸部融合，重复人物，额外人物，陌生第三人，错位构图，拼贴感，低质量，畸形手，脸崩`},{id:`style-openai-compatible-mature-male-selfie-couple`,name:`恋爱合照`,providerScope:`openai-gpt`,positivePrompt:`双人合照，近距离同框，画面中有两位清晰绝美主体，像角色亲手拍下的照片。其中一位主角为成熟英俊男性，氛围感，容貌极度英俊，眼睛绝美，五官立体度高，面部高折叠度，气质沉稳温柔。两人靠得很近，互动自然亲密，有真实生活感和恋爱氛围，不像摆拍。脸部清晰，五官精致，比例协调，柔和室内光或夜景光，国漫风，精致恋爱向插画，手机壁纸尺寸`,negativePrompt:`单人照，只有一个人，裁掉其中一人，人物融合，脸部融合，重复人物，额外人物，陌生第三人，距离太远，拼贴感，低质量，畸形手，脸崩`},{id:`style-openai-compatible-mature-male-real-couple`,name:`真人合照`,providerScope:`openai-gpt`,positivePrompt:`双人同框真人感合照，画面中有两位清晰主体，像真实拍摄的人物照片，成熟英俊男性，五官立体，眼睛深邃好看，气质沉稳温柔，高颜值但自然不过分夸张。另一位人物与他自然同框，互动亲密自然，像情侣或暧昧对象的日常合照。整体为三次元真实摄影风格，皮肤质感自然，轻微肤纹，真实光影，生活感，高级氛围感，构图干净，电影感，手机壁纸尺寸`,negativePrompt:`二次元，国漫风，动漫插画，Q版，卡通，3D建模感，假脸，塑料皮肤，过度磨皮，网红滤镜，单人照，只有一个人，人物融合，脸部融合，重复人物，第三人，肢体畸形，手部异常，裁掉其中一人，模糊脸，低清晰度`},{id:`gemini-nano-banana-natural-snapshot`,name:`Gemini / Nano Banana 自然随拍`,providerScope:`openai-gemini`,size:`1024x1536`,positivePrompt:`自然生活随拍，真实手机摄影感，构图轻松，光线柔和，人物状态自然，细节清晰，有亲近的日常氛围。`,negativePrompt:`过度修图，塑料皮肤，摆拍感，水印，文字，低清晰度，畸形手`}],at=new Map(R.map(e=>[e.id,e])),ot=new Set([`soft-polaroid`,`clean-anime-snapshot`]),st=`os_photo_style_presets_migration`,ct=`openai-compatible-style-family-2026-06-06`,z={standard:{model:`BAAI/bge-m3`,rerankModel:`BAAI/bge-reranker-v2-m3`,baseUrl:`https://api.siliconflow.cn/v1`},enhanced:{model:`Qwen/Qwen3-Embedding-8B`,rerankModel:`Qwen/Qwen3-Reranker-8B`,baseUrl:`https://api.siliconflow.cn/v1`,dimensions:1024}},lt={openai:{baseUrl:z.enhanced.baseUrl,model:z.enhanced.model,rerankModel:z.enhanced.rerankModel,dimensions:z.enhanced.dimensions},cohere:{baseUrl:`https://api.cohere.com/v2`,model:`embed-v4.0`,rerankModel:`rerank-v3.5`}};function B(e){return o(e)}function V(e){return typeof e==`string`?e.trim():``}function ut(e){let t=V(e?.model),n=t.split(/[/:]/).filter(Boolean).pop()||t,r=`${String(e?.baseUrl||``)} ${n}`.toLowerCase();return/gemini|generativelanguage|googleapis|nano[-_\s]?banana|imagen/.test(r)?`gemini`:`gpt`}function H(e){return V(e).replace(/\/+$/,``)}function dt(e,t=T){let n=typeof e==`number`?e:typeof e==`string`&&e.trim()?Number(e):NaN,r=Number.isFinite(t)?t:T;return Number.isFinite(n)?Math.round(Math.min(2,Math.max(0,n))*100)/100:r}function ft(e){return e===`cohere`?`cohere`:`openai`}function U(e,t=D){return{baseUrl:H(e?.baseUrl)||t.baseUrl,apiKey:V(e?.apiKey),model:V(e?.model)||t.model,temperature:dt(e?.temperature,t.temperature??.85),useGeminiJailbreak:e?.useGeminiJailbreak===!0,useDeepSeekMode:e?.useDeepSeekMode===!0,disablePrefill:e?.disablePrefill===!0,streamChat:e?.streamChat===!0}}function pt(e){let t=V(e?.xhsMcpConfig?.serverUrl),n=t===`http://localhost:18060/mcp`&&e?.xhsMcpConfig?.enabled!==!0&&!V(e?.xhsMcpConfig?.loggedInUserId)&&!V(e?.xhsMcpConfig?.loggedInNickname)?`http://localhost:18061/api`:t||E.xhsMcpConfig?.serverUrl||`http://localhost:18061/api`,r=V(e?.canvaMcpConfig?.serverUrl)||E.canvaMcpConfig?.serverUrl||`http://localhost:18062/api`,i=yt(e?.newsPlatforms);return{...E,...e||{},weatherApiKey:V(e?.weatherApiKey),weatherCity:V(e?.weatherCity)||E.weatherCity,newsApiKey:V(e?.newsApiKey),newsPlatforms:i.length>0?i:E.newsPlatforms,firecrawlEnabled:e?.firecrawlEnabled===!0,firecrawlApiKey:V(e?.firecrawlApiKey),notionApiKey:V(e?.notionApiKey),notionDatabaseId:V(e?.notionDatabaseId),notionNotesDatabaseId:V(e?.notionNotesDatabaseId)||void 0,feishuAppId:V(e?.feishuAppId),feishuAppSecret:V(e?.feishuAppSecret),feishuBaseId:V(e?.feishuBaseId),feishuTableId:V(e?.feishuTableId),xhsEnabled:e?.xhsEnabled===!0,xhsMcpConfig:{enabled:e?.xhsMcpConfig?.enabled===!0,serverUrl:n,loggedInUserId:V(e?.xhsMcpConfig?.loggedInUserId)||void 0,loggedInNickname:V(e?.xhsMcpConfig?.loggedInNickname)||void 0},canvaEnabled:e?.canvaEnabled===!0,canvaMcpConfig:{enabled:e?.canvaMcpConfig?.enabled===!0,serverUrl:r,workspaceLabel:V(e?.canvaMcpConfig?.workspaceLabel)||void 0},cacheMinutes:typeof e?.cacheMinutes==`number`&&Number.isFinite(e.cacheMinutes)?e.cacheMinutes:E.cacheMinutes}}function W(e,t,n,r){let i=typeof e==`number`?e:typeof e==`string`&&e.trim()?Number(e):NaN;return Number.isFinite(i)?Math.max(n,Math.min(r,i)):t}function mt(e){return V(e)||n.elevenLabs.modelId}function ht(e){return{...n,...e||{},voiceCallProvider:e?.voiceCallProvider===`elevenlabs`?`elevenlabs`:n.voiceCallProvider,baseUrl:V(e?.baseUrl)||n.baseUrl,apiKey:V(e?.apiKey),groupId:V(e?.groupId),model:V(e?.model)||n.model,voiceSetting:{...n.voiceSetting,...e?.voiceSetting||{}},audioSetting:{...n.audioSetting,...e?.audioSetting||{}},preprocessConfig:{...n.preprocessConfig,...e?.preprocessConfig||{}},elevenLabs:{...n.elevenLabs,...e?.elevenLabs||{},apiKey:V(e?.elevenLabs?.apiKey),voiceId:V(e?.elevenLabs?.voiceId),modelId:mt(e?.elevenLabs?.modelId),languageCode:V(e?.elevenLabs?.languageCode),stability:W(e?.elevenLabs?.stability,n.elevenLabs.stability,0,1),similarityBoost:W(e?.elevenLabs?.similarityBoost,n.elevenLabs.similarityBoost,0,1),style:W(e?.elevenLabs?.style,n.elevenLabs.style,0,1),speed:W(e?.elevenLabs?.speed,n.elevenLabs.speed,.7,1.2),useSpeakerBoost:e?.elevenLabs?.useSpeakerBoost===!0},voiceModify:e?.voiceModify===null?void 0:e?.voiceModify?{...n.voiceModify||{pitch:0,intensity:0,timbre:0},...e.voiceModify}:n.voiceModify}}function gt(e){return{...t,...e||{},groqApiKey:V(e?.groqApiKey),siliconflowApiKey:V(e?.siliconflowApiKey),baseUrl:V(e?.baseUrl)||void 0,model:V(e?.model)||void 0,language:V(e?.language)||void 0,voiceCallManualSend:e?.voiceCallManualSend===!0}}function _t(e){if(!e||typeof e!=`object`)return null;let t=e,n=V(t.id),r=V(t.name);return!n||!r?null:{id:n,name:r,config:U(t.config||{},D)}}function vt(e){if(!e||typeof e!=`object`)return null;let t=e,n=V(t.id),r=V(t.name),i=V(t.content);return!n||!r||!i?null:{id:n,name:r,content:i}}function yt(e){return Array.isArray(e)?e.map(e=>V(e)).filter(Boolean):[]}function bt(e){let t=V(e);return Qe.includes(t)?t:L.activeProvider}function xt(e){let t=V(e);return $e.includes(t)?t:L.imageStyle}function St(e,t=`novelai`,n=void 0){let r=V(e).toLowerCase();return r===`openai-gpt`?`openai-gpt`:r===`openai-gemini`||r===`gemini`||r===`nano-banana`||r===`nano_banana`?`openai-gemini`:r===`openai-compatible`||r===`openai`||r===`gpt`?ut(n)===`gemini`?`openai-gemini`:`openai-gpt`:et.includes(r)?r:t}function Ct(e){let t=V(e);return tt.includes(t)?t:I.responseFormat}function wt(e){let t=V(e);return A.includes(t)?t:I.quality||``}function Tt(e){let t=V(e);return j.includes(t)?t:I.style||``}function Et(e){let t=V(e);return M.includes(t)?t:I.background||``}function Dt(e){let t=V(e);return N.includes(t)?t:I.outputFormat||``}function Ot(e){let t=V(e);return P.includes(t)?t:I.moderation||``}function kt(e){if(!(e==null||e===``))return Ct(e)}function At(e){if(!(e==null||e===``))return wt(e)||void 0}function jt(e){if(!(e==null||e===``))return Tt(e)||void 0}function Mt(e){if(!(e==null||e===``))return Et(e)||void 0}function Nt(e){if(!(e==null||e===``))return Dt(e)||void 0}function Pt(e){if(!(e==null||e===``))return Ot(e)||void 0}function Ft(e,t=F.model){let n=V(e);return Ze.includes(n)?n:t}function It(e){return e.normalize(`NFKC`).trim().toLowerCase().replace(/\+\+/g,`pp`).replace(/[^a-z0-9]+/g,``)}function G(e,t){let n=V(e);if(!n)return;let r=It(n);for(let e of t)if([e.value,e.label,...e.aliases||[]].map(It).includes(r))return e.value}function Lt(e,t=F.sampler){return G(e,O)||t}function Rt(e,t=F.noiseSchedule){return G(e,k)||t}function zt(e){let t=V(e);return t?G(t,O):void 0}function Bt(e){let t=V(e);return t?G(t,k):void 0}function K(e,t,n,r,i){let a=typeof e==`number`?e:typeof e==`string`&&e.trim()?Number(e):NaN;if(!Number.isFinite(a))return t;let o=Math.min(r,Math.max(n,a));return i?Math.round(o/i)*i:o}function q(e,t=I.size){let n=V(e).replace(/[×]/g,`x`).replace(/\s+/g,``);if(!n)return t;let r=n.match(/^(\d{2,5})x(\d{2,5})$/i);return r?`${Number(r[1])}x${Number(r[2])}`:n.toLowerCase()===`auto`?`auto`:n}function J(e,t,n,r){if(e==null||e===``)return t;let i=typeof e==`number`?e:typeof e==`string`&&e.trim()?Number(e):NaN;return Number.isFinite(i)?Math.min(r,Math.max(n,Math.round(i))):t}function Vt(e){return{...F,...e||{},apiUrl:H(e?.apiUrl)||F.apiUrl,apiToken:V(e?.apiToken),model:Ft(e?.model),width:K(e?.width,F.width,64,1600,64),height:K(e?.height,F.height,64,1600,64),steps:K(e?.steps,F.steps,1,50),scale:K(e?.scale,F.scale,0,10),sampler:Lt(e?.sampler),noiseSchedule:Rt(e?.noiseSchedule),qualityTags:V(e?.qualityTags)||F.qualityTags,negativePrompt:V(e?.negativePrompt)||F.negativePrompt}}function Ht(e){let t=e||{};return{...I,...t,baseUrl:H(t.baseUrl),apiKey:V(t.apiKey),model:V(t.model)||I.model,size:q(t.size),responseFormat:Ct(t.responseFormat??t.response_format),n:J(t.n,I.n||null,1,10),quality:wt(t.quality),style:Tt(t.style),background:Et(t.background),outputFormat:Dt(t.outputFormat??t.output_format),outputCompression:J(t.outputCompression??t.output_compression,I.outputCompression||null,0,100),moderation:Ot(t.moderation),user:V(t.user),stream:t.stream===!0,partialImages:J(t.partialImages??t.partial_images,I.partialImages||null,1,3),extraRequestBody:V(t.extraRequestBody),qualityTags:V(t.qualityTags)||I.qualityTags,negativePrompt:V(t.negativePrompt)||I.negativePrompt}}function Y(e){let t=e&&typeof e==`object`?e:{},n=t.apiUrl!==void 0||t.apiToken!==void 0||t.noiseSchedule!==void 0;return{activeProvider:bt(t.activeProvider),imageStyle:xt(t.imageStyle),novelai:Vt(n?t:t.novelai),openaiCompatible:Ht(t.openaiCompatible)}}function Ut(e,t){if(!e||typeof e!=`object`)return null;let n=e,r=Y(n.config),i=V(n.id)||`image-api-preset-${t+1}`,a=Date.now();return{id:i,name:V(n.name)||`生图 API 预设 ${t+1}`,config:r,createdAt:typeof n.createdAt==`number`&&Number.isFinite(n.createdAt)?n.createdAt:a,updatedAt:typeof n.updatedAt==`number`&&Number.isFinite(n.updatedAt)?n.updatedAt:a}}function Wt(e){return Array.isArray(e)?e.map(Ut).filter(e=>!!e):it}function Gt(e,t){if(!e||typeof e!=`object`)return null;let n=e,r=V(n.positivePrompt);if(!r)return null;let i=n.n===void 0?void 0:J(n.n,null,1,10),a=n.outputCompression===void 0&&n.output_compression===void 0?void 0:J(n.outputCompression??n.output_compression,null,0,100),o=n.partialImages===void 0&&n.partial_images===void 0?void 0:J(n.partialImages??n.partial_images,null,1,3),s=n.stream;return{id:V(n.id)||`style-${t+1}`,name:V(n.name)||`风格 ${t+1}`,providerScope:St(n.providerScope,`novelai`,n),positivePrompt:r,negativePrompt:V(n.negativePrompt),model:V(n.model)||void 0,width:n.width===void 0?void 0:K(n.width,F.width,64,1600,64),height:n.height===void 0?void 0:K(n.height,F.height,64,1600,64),steps:n.steps===void 0?void 0:K(n.steps,F.steps,1,50),scale:n.scale===void 0?void 0:K(n.scale,F.scale,0,10),sampler:zt(n.sampler),noiseSchedule:Bt(n.noiseSchedule),size:n.size===void 0?void 0:q(n.size),responseFormat:kt(n.responseFormat??n.response_format),n:i,quality:At(n.quality),openAIStyle:jt(n.openAIStyle??n.openaiStyle??n.openai_style??n.style),background:Mt(n.background),outputFormat:Nt(n.outputFormat??n.output_format),outputCompression:a,moderation:Pt(n.moderation),user:n.user===void 0?void 0:V(n.user),stream:typeof s==`boolean`?s:void 0,partialImages:o,extraRequestBody:n.extraRequestBody===void 0?void 0:V(n.extraRequestBody)}}function Kt(e){if(!Array.isArray(e))return R;let t=e.map(Gt).filter(e=>!!e);return t.length>0?t:R}function qt(e){let t=e.filter(e=>!ot.has(e.id)).map(e=>{let t=at.get(e.id);return t?{...e,providerScope:t.providerScope,model:t.model,size:t.size}:e}),n=new Set(t.map(e=>e.id));for(let e of R)n.has(e.id)||(t.push(e),n.add(e.id));return t}function Jt(e){return Array.isArray(e)?e.map(_t).filter(e=>!!e):[]}function Yt(e){if(!Array.isArray(e))return[];let t=new Set;return e.map((e,n)=>{if(!e||typeof e!=`object`)return null;let r=e,i=U(r.config||{},D);if(!Xt(i))return null;let a=V(r.id)||`sub-${n+1}`;for(;t.has(a);)a=`${a}-${n+1}`;return t.add(a),{id:a,name:V(r.name)||`副 API ${n+1}`,enabled:r.enabled!==!1,config:i}}).filter(e=>!!e)}function X(){let e=B(g);return e&&typeof e==`object`&&!Array.isArray(e)?e:{}}function Z(e){r(g,JSON.stringify(e))}function Xt(e){return!!(e?.apiKey&&e.baseUrl&&e.model)}function Zt(e){return V(e).toLowerCase().includes(`qwen3-embedding`)?`enhanced`:`standard`}function Qt(e,t){return e===`openai`?z[Zt(t)]:lt[e]}function $t(e){let t=ft(e?.provider),n=V(e?.model),r=Qt(t,n);return{provider:t,apiKey:V(e?.apiKey),baseUrl:H(e?.baseUrl)||r.baseUrl,model:n||r.model,rerankModel:r.rerankModel,dimensions:r.dimensions,rerankApiKey:V(e?.rerankApiKey),rerankUsePaid:e?.rerankUsePaid===!0}}function en(){return U(B(Le))}function tn(e){r(Le,JSON.stringify(U(e)))}function nn(){return yt(B(Re))}function rn(e){r(Re,JSON.stringify(yt(e)))}function an(){return Jt(B(ze))}function on(e){r(ze,JSON.stringify(Jt(e)))}function sn(){let e=U({apiKey:i(`sub_api_key`)??void 0,baseUrl:i(`sub_api_base_url`)??void 0,model:i(`sub_api_model`)??void 0});return Xt(e)?e:void 0}function cn(e){if(!e){a(m),a(Be),a(Ve),a(He);return}let t=U(e);r(m,JSON.stringify(t)),r(Be,t.apiKey),r(Ve,t.baseUrl),r(He,t.model)}function ln(e){return{id:`secondary-default`,name:`副 API 1`,enabled:!0,config:e}}function Q(){let e=B(h),t=Yt(e);if(t.length>0||Array.isArray(e))return t;let n=U(B(m));if(Xt(n))return[ln(n)];let r=sn();return r?[ln(r)]:[]}function un(){let e=X();return Q().map(t=>({...t,cooldownUntil:e[t.id]?.cooldownUntil,lastError:e[t.id]?.lastError,lastUsedAt:e[t.id]?.lastUsedAt}))}function dn(e){let t=Yt(e);if(t.length===0){a(h),a(g),a(_),cn(void 0);return}r(h,JSON.stringify(t));let n=new Set(t.map(e=>e.id)),i=X(),o={};for(let e of n)i[e]&&(o[e]=i[e]);Z(o),cn((t.find(e=>e.enabled)||t[0]).config)}function fn(e){let t=e;if(typeof t?.status==`number`)return t.status;let n=String(t?.message||e||``),r=n.match(/\b(?:HTTP|API|status)\s*(429|408|500|502|503|504)\b/i)||n.match(/\b(429|408|500|502|503|504)\b/);return r?Number(r[1]):null}function pn(e){let t=e,n=fn(e);if(n===429||n===408||n!==null&&n>=500&&n<600)return!0;let r=String(t?.name||``),i=String(t?.message||e||``);return/abort|timeout|network|failed to fetch/i.test(`${r} ${i}`)}function mn(e){let t=U(e);return Q().find(e=>e.config.baseUrl===t.baseUrl&&e.config.apiKey===t.apiKey&&e.config.model===t.model)}function hn(e){let t=mn(e);if(!t)return;let n=X();n[t.id]={...n[t.id],cooldownUntil:void 0,lastError:void 0,lastUsedAt:Date.now()},Z(n)}function gn(e,t){let n=mn(e);if(!n)return;let r=Date.now(),i=String(t?.message||t||`请求失败`).slice(0,160),a=pn(t),o=X();o[n.id]={...o[n.id],cooldownUntil:a?r+Ue:o[n.id]?.cooldownUntil,lastError:i,lastUsedAt:o[n.id]?.lastUsedAt},Z(o)}function $(){let e=Q().filter(e=>e.enabled);if(e.length===0)return;let t=Date.now(),n=X(),r=e.filter(e=>(n[e.id]?.cooldownUntil||0)<=t);if(r.length!==0)return r[0].config}function _n(){let e=Q().filter(e=>e.enabled);if(e.length===0)return;let t=Date.now(),n=X(),a=e.filter(e=>(n[e.id]?.cooldownUntil||0)<=t);if(a.length===0)return;let o=Number(i(`os_sub_api_pool_cursor`)||`0`),s=Number.isFinite(o)&&o>=0?o:0,c=a[s%a.length];return r(_,String((s+1)%a.length)),n[c.id]={...n[c.id],lastUsedAt:t},Z(n),c.config}function vn(){return pt(B(v))}function yn(e){r(v,JSON.stringify(pt(e)))}function bn(){return ht(B(y))}function xn(e){r(y,JSON.stringify(ht(e)))}function Sn(){return gt(B(b))}function Cn(e){r(b,JSON.stringify(gt(e)))}function wn(){return Y(B(x))}function Tn(e){r(x,JSON.stringify(Y(e)))}function En(){let e=B(S);return e?Y(e):null}function Dn(e){r(S,JSON.stringify(Y(e)))}function On(){a(S)}function kn(){return Wt(B(C))}function An(e){r(C,JSON.stringify(Wt(e)))}function jn(){let e=B(w),t=Kt(e);if(!Array.isArray(e)||i(st)===ct)return t;let n=qt(t);return r(w,JSON.stringify(n)),r(st,ct),n}function Mn(e){r(w,JSON.stringify(Kt(e)))}function Nn(){return $t({provider:i(`embedding_provider`)??void 0,apiKey:i(`embedding_api_key`)??void 0,baseUrl:i(`embedding_base_url`)??void 0,model:i(`embedding_model`)??void 0,rerankApiKey:i(`cohere_rerank_api_key`)??void 0,rerankUsePaid:i(Ye)===`true`})}function Pn(e){let t=$t(e);r(We,t.provider),r(Ke,t.baseUrl),r(qe,t.model),r(Ye,t.rerankUsePaid?`true`:`false`),t.apiKey?r(Ge,t.apiKey):a(Ge),t.rerankApiKey?r(Je,t.rerankApiKey):a(Je)}function Fn(){let e=B(Xe);return Array.isArray(e)?e.map(vt).filter(e=>!!e).filter(e=>!e.id.startsWith(`refine_`)):[]}function In(){return{backendUrl:s(),backendToken:re(),frontendOrigin:ne(),ttsWsProxyUrl:te(),userId:c(),resolutionDebug:ee()}}function Ln(){let e=In();return!!(e.backendUrl&&e.backendToken)}function Rn(){return{backend:In(),api:{primary:en(),secondary:$(),secondaryPool:Q(),availableModels:nn(),presets:an()},realtime:vn(),tts:bn(),stt:Sn(),imageGeneration:{config:wn(),apiPresets:kn(),stylePresets:jn()},embedding:Nn()}}export{rn as $,wn as A,bn as B,_ as C,be as Ct,Fn as D,ce as Dt,nn as E,se as Et,vn as F,dt as G,Zt as H,Rn as I,q as J,Rt as K,$ as L,ut as M,jn as N,Nn as O,en as P,on as Q,un as R,w as S,ge as St,an as T,Pe as Tt,gn as U,Ln as V,hn as W,Ie as X,St as Y,_n as Z,P as _,Ce as _t,R as a,tn as at,tt as b,Ae as bt,z as c,Cn as ct,x as d,we as dt,Pn as et,S as f,Te as ft,M as g,_e as gt,O as h,De as ht,I as i,Mn as it,En as j,kn as k,rt as l,xn as lt,k as m,Oe as mt,L as n,Tn as nt,D as o,yn as ot,Ze as p,Fe as pt,Lt as q,F as r,Dn as rt,E as s,dn as st,T as t,An as tt,C as u,Ee as ut,N as v,Me as vt,On as w,ke as wt,j as x,pe as xt,A as y,je as yt,Sn as z};