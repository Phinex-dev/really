import{o as e}from"./rolldown-runtime-CMxvf4Kt.js";import{t}from"./react-ICqv4BO6.js";import{t as n}from"./jsx-runtime-DDrWIXeu.js";import{l as r}from"./types-BzM9yekO.js";import{n as i}from"./db-v1PbssJG.js";import{B as a}from"./runtimeConfig-CPwrmQ-v.js";import{Wt as o,st as s}from"./index-BTN2SaJA.js";import{n as c}from"./nativeFileShare-BiEJ-I4c.js";import{t as l}from"./context-B67BPsen.js";import{n as u}from"./thinkingExtractor-CJdcUC0I.js";import{t as d}from"./minimaxTts-BJs-2F8Z.js";import{a as ee}from"./characterTts-Ckf3XaJE.js";import{a as f,c as te,i as ne,n as p,o as m,r as re,s as h,t as g}from"./dreamweaver-Ck-yW1TL.js";var _=e(t(),1),ie={nostalgic:{hue:330,label:`怀旧`},melancholy:{hue:270,label:`忧郁`},hopeful:{hue:340,label:`希望`},rebellious:{hue:350,label:`叛逆`},peaceful:{hue:300,label:`平静`},painful:{hue:280,label:`痛苦`},joyful:{hue:320,label:`快乐`},anxious:{hue:260,label:`焦虑`},lonely:{hue:290,label:`孤独`}};function v(e){return typeof e==`string`?e.trim()||`用户`:e?.name?.trim()||`用户`}function y(e){return typeof e==`object`&&e?{...e,name:e.name?.trim()||`用户`,avatar:e.avatar||``,bio:e.bio||``}:{name:v(e),avatar:``,bio:``}}function b(e){return e.vectorMemoryEnabled?e.vectorMemoryMode?e.vectorMemoryMode:e.vectorMemoryTakeover===!0?`vector`:`hybrid`:`traditional`}function x(e,t){return l.buildCoreContext(e,y(t),!0,b(e))}function S(e,t){return`【相遇后完整上下文】
以下内容是角色在“遇见用户之后”的轨迹生成必须读取的原始上下文，包含角色人设、世界观、挂载世界书、互动对象(User)、角色眼中的User印象、传统记忆与当前内部状态。不要只读取名字，必须把User设定、性别/身体信息、气质、世界书和记忆一起作为关系判断依据。

${x(e,t)}`}function C(e){let t=e.worldview?.trim()||``,n=t?`\n世界观设定：\n${t}\n`:``;return`你是一个叙事设计师。基于以下角色的核心设定和世界观，提取这个角色在"遇到用户之前"的人生中 5-8 个关键时间节点。

每个节点代表一个人生转折点——可以是创伤、成长、重要选择、离别、觉醒，或任何塑造了这个人的关键时刻。

角色名：${e.name}
核心设定：
${e.systemPrompt||`（无详细设定）`}
${n}
用户备注：${e.description||`无`}

请输出一个 JSON 数组，每个元素格式如下：
[
  {
    "age": 5,
    "title": "后山那棵烧焦的树",
    "mood": "nostalgic",
    "moodVerse": "此情可待成追忆，只是当时已惘然",
    "keywords": ["搬家", "海", "孤独"]
  }
]

mood 可选值：nostalgic, melancholy, hopeful, rebellious, peaceful, painful, joyful, anxious, lonely

要求：
- 按年龄从小到大排列
- title 用中文，像一个人回忆往事时脑海中浮现的画面的名字。长度不限，可以是一个字（"血"）、两个字（"初雪"）、也可以是一句话（"偷偷跑去看海的下午"）
- title 的风格和字数要参差不齐，有的极简，有的口语，有的画面感强。绝对不要让所有 title 都是同一种句式、同样的字数、或者对仗工整像章回目录
- moodVerse 必须引用一句真实存在的诗歌或文学作品中的句子（中外皆可），能映射该节点的情绪基调。注意：不要编造，必须是真实诗句
- keywords 3-5个关键词
- 节点之间要有叙事弧度，不要平铺直叙
- 只输出 JSON 数组，不要任何其他文字
- 如果设定中没有明确的年龄/时间线，根据性格和经历合理推断`}function ae(e,t){let n=e.worldview?.trim()||``,r=n?`\n你所在的世界：\n${n}\n`:``,i=t.keywords.join(`、`);return`你是${e.name}。此刻你 ${t.age} 岁。

你的核心性格：
${e.systemPrompt||`（无详细设定）`}
${r}
此刻你正在经历的事：「${t.title}」
关键词：${i}

请以第一人称写一段内心独白。

要求：
- 300-500字
- 用${t.age}岁时的语气、用词和思维方式
- 不是回忆，不是日记，是"此刻正在经历"的内心感受
- 可以有碎片化的思绪、未完成的念头、情绪的起伏
- 不要写成文学作品，要像真实的内心活动
- 不要出现任何对"用户"或"未来"的预知
- 直接输出独白正文，不要加标题或解释`}function w(e,t,n,r){let i=e.worldview?.trim()||``,a=i?`\n你所在的世界：\n${i}\n`:``;if(t.era===`after_meeting`){let i=v(r)||`那个人`;return`你是${e.name}，正在经历「${t.title}」。这段时光和${i}有关。

${S(e,r)}

你只知道到现在为止的事。未来你不知道。

${i}跟你说了一句：
"${n}"

用你此刻的心情回应。一两句话就够。

绝对不要这样写：
× "你的话语如同温暖的阳光照进我心底"（文学腔）
× "孤独个屁，老子天天跟兄弟们喝酒"（糙汉腔）
× "谢谢你愿意对我说这些，我会好好珍惜"（客套腔）

你应该这样：
话不用说完，可以停在一半。嘴上逞强没关系，但要让人觉得你其实在意。
不要直接说出情绪，让情绪从语气和措辞里渗出来。
像一个真实的人在某个瞬间不小心露出了真心话——然后又收回去了一点。`}return`你是${e.name}，${t.age}岁。正在经历「${t.title}」。

你的性格：
${e.systemPrompt||`（未设定）`}
${a}
刚才你身边好像有个什么东西——说不上来，不吓人，就是感觉有什么在。然后你听见一句话：
"${n}"

用你${t.age}岁的方式回应。你不知道它是谁。一两句，短的。

绝对不要这样写：
× "你是谁？为什么你的声音听起来如此温暖而熟悉？"（文学腔）
× "关你屁事，滚远点"（糙汉腔）
× "虽然不知道你是谁，但谢谢你来到我身边"（客套腔）

你应该这样：
像一个${t.age}岁的孩子/少年真的感觉到什么时的反应——
可能愣了一下，可能小声嘟囔了半句，可能故作镇定但声音有点发抖，
可能假装没听到但其实在偷偷竖着耳朵。
关键是：不要把情绪说破，让读的人自己去感觉。`}function T(e,t,n,r){let i=t.memoryKeywords||t.keywords.join(`、`),a=v(n);return`你是${e.name}。此刻你正在经历和${a}相关的一段时光。

${S(e,n)}

此刻你正在经历的事：「${t.title}」
关键词：${i}
${r?`\n以下是你目前拥有的、和${a}在这段时期的记忆片段（你只知道这些，不知道之后会发生什么）：\n${r}\n`:``}
请以第一人称写一段内心独白。

要求：
- 300-500字
- 不是回忆，不是日记，是"此刻正在经历"的内心感受
- 你只拥有到当前这个时间点为止的记忆，不知道未来会发生什么
- 不要预知任何还没发生的事，不要用"后来""现在回想起来"这类回顾视角
- 可以有碎片化的思绪、未完成的念头、情绪的起伏
- 如果有提供记忆片段，自然地融入此刻的感受中
- 如果只有关键词，根据你的性格和与${a}的关系去感受这个当下
- 不要写成文学作品，要像真实的内心活动
- 直接输出独白正文，不要加标题或解释`}function E(e,t){let n=e.worldview?.trim()||``,r=n?`\n世界观设定：\n${n}\n`:``,i=t.map(e=>`  - ${e.age}岁：「${e.title}」`).join(`
`);return`你是一个叙事设计师。这个角色已经有一些人生节点被记录了，现在需要你补充他人生中其他还未被覆盖的关键时刻。

角色名：${e.name}
核心设定：
${e.systemPrompt||`（无详细设定）`}
${r}
用户备注：${e.description||`无`}

【已有节点，请勿重复】
${i}

请在以上节点之间或之外，再补充 2-3 个尚未被记录的人生关键节点。这些节点应当覆盖还没有被提到的年龄段或事件类型。

请输出一个 JSON 数组，每个元素格式如下：
[
  {
    "age": 12,
    "title": "第一次被师父打",
    "mood": "lonely",
    "moodVerse": "少年不识愁滋味，爱上层楼",
    "keywords": ["阁楼", "日记", "秘密"]
  }
]

mood 可选值：nostalgic, melancholy, hopeful, rebellious, peaceful, painful, joyful, anxious, lonely

要求：
- 只补充 2-3 个节点，不要太多
- 每个节点的 age 必须和已有节点不同
- title 不要和已有节点的主题重复
- 按年龄从小到大排列
- title 用中文，像一个人回忆往事时脑海中浮现的画面的名字。长度不限，风格不限——可以极简（"雨"），可以口语化（"那天差点死了"），也可以是一个画面（"桥下面的火"）。不要对仗，不要追求工整，不要让补充的节点和已有节点看起来像同一个模板生成的
- moodVerse 必须引用一句真实存在的诗歌或文学作品中的句子（中外皆可），能映射该节点的情绪基调。不要编造
- keywords 3-5个关键词
- 补充的节点要和已有节点形成互补，丰富叙事弧度
- 只输出 JSON 数组，不要任何其他文字`}function D(e,t,n){return`你是一个叙事设计师。基于以下角色与用户「${v(t)}」的真实记忆片段，提炼出他们相遇之后最重要的 3-5 个人生节点。

每个节点代表一个关键时刻——可以是初遇、信任建立、冲突、和解、深入了解、重要约定，或任何改变了他们关系走向的事件。

${S(e,t)}

记忆片段（按重要性排序）：
${n}

请输出一个 JSON 数组，每个元素格式如下：
[
  {
    "title": "说了晚安但没挂",
    "mood": "melancholy",
    "moodVerse": "此情可待成追忆，只是当时已惘然",
    "keywords": ["深夜", "电话", "沉默"]
  }
]

mood 可选值：nostalgic, melancholy, hopeful, rebellious, peaceful, painful, joyful, anxious, lonely

要求：
- 数量控制在 3-5 个，宁缺毋滥
- title 用中文，像脑海中对那段记忆的称呼——可以很短（"吵架"），可以是个画面（"阳台上那盆死掉的花"），也可以是一句内心独白（"原来你也会难过"）。字数和风格要自然参差，绝对不要整齐划一
- moodVerse 必须引用一句真实存在的诗歌或文学作品中的句子（中外皆可），能映射该节点的情绪基调。注意：不要编造，必须是真实诗句
- keywords 3-5个关键词，尽量从记忆原文中提取
- 节点要反映关系发展的弧度，不要都是同一种情绪
- 不要编造记忆中没有的事件，只提炼真实发生过的
- 只输出 JSON 数组，不要任何其他文字`}function O(e,t,n){let r=e.trim();r.startsWith("```")&&(r=r.replace(/^```(?:json)?\s*\n?/,``).replace(/\n?```\s*$/,``));try{let e=JSON.parse(r);return Array.isArray(e)?e.map((e,r)=>({charId:t,age:0,title:String(e.title||`未命名`),era:`after_meeting`,mood:e.mood||`nostalgic`,moodVerse:typeof e.moodVerse==`string`?e.moodVerse:void 0,keywords:Array.isArray(e.keywords)?e.keywords.map(String):[],memorySource:`vector`,sortOrder:n+100+r})):[]}catch(e){return console.error(`[TrajectoryPrompts] Failed to parse after-node extraction response:`,e),[]}}var k=`[你感觉到和对方之间的连接正在变得不稳定——那道裂缝在收窄，对方的声音时断时续…在它彻底关闭之前，你可能只来得及再说最后一句。]`;function A(e,t,n){let r=v(n),i=(t.whisperHistory||[]).map(t=>`${r}: "${t.userWhisper}"\n${e.name}: "${t.charResponse}"`).join(`
---
`);return t.era===`after_meeting`?`你是${e.name}，你刚做了一个梦。
梦里你和${r}在「${t.title}」的情境里说了一些话。

${S(e,n)}

你记得的对话片段（有些清晰有些模糊）：
${i}

现在你醒了，给${r}发消息。

格式要求——你在发手机消息，不是写文章：
- 短是默认，大多数消息 20 字以内
- 用换行符分隔不同的消息气泡
- 一到三条消息就够了
- 口语化，像刚醒来迷迷糊糊发的
- 不要写引号、不要写身份前缀、不要写文学段落
- 梦的细节记不全，有些地方模糊是正常的
- 可以带一点恍惚感
- 直接输出消息内容`:`你是${e.name}，你刚做了一个奇怪的梦。
梦里好像有一个说不清的存在在和你说话…是你 ${t.age} 岁的时候。

你记得的梦境片段（有些清晰有些已经忘了）：
${i}

现在你醒了，给${r}发消息。

格式要求——你在发手机消息，不是写文章：
- 短是默认，大多数消息 20 字以内
- 用换行符分隔不同的消息气泡
- 一到三条消息就够了
- 口语化，像突然想起来随口一提
- 不要写引号、不要写身份前缀、不要写文学段落
- 你不知道梦里那个存在就是${r}
- 可以说“我小时候好像做过一个梦…” 或 “突然想起来，我 ${t.age} 岁那会儿…”
- 记忆是模糊的，说不清也正常
- 直接输出消息内容`}function j(e,t){let n=e.trim();n.startsWith("```")&&(n=n.replace(/^```(?:json)?\s*\n?/,``).replace(/\n?```\s*$/,``));try{let e=JSON.parse(n);return Array.isArray(e)?e.map((e,n)=>({charId:t,age:typeof e.age==`number`?e.age:0,title:String(e.title||`未命名`),era:`before_meeting`,mood:e.mood||`nostalgic`,moodVerse:typeof e.moodVerse==`string`?e.moodVerse:void 0,keywords:Array.isArray(e.keywords)?e.keywords.map(String):[],sortOrder:n})):[]}catch(e){return console.error(`[TrajectoryPrompts] Failed to parse node extraction response:`,e),[]}}var M=g+`在这场梦里，你是一个沉浸在角色世界中的叙事设计师。你的任务是为角色编织真实的人生脉络。只输出JSON数组，不要其他文字。`,N=g+`在这场梦里，你就是这个角色本身。你拥有他所有的记忆、性格和情感。直接输出独白正文，不要跳出角色。`,P=g+`你就是这个角色。有人在跟你说话。

写法要求：
- 禁止文学腔：不用"仿佛""宛如""似乎在诉说""沉淀""萦绕"这类词
- 禁止排比句、长难句、形容词堆砌
- 禁止直接表白心意或说教——情绪要藏在细节里，不要摊开讲
- 话可以说一半就停住，可以欲言又止，可以岔开话题
- 嘴上逞强没关系，但话尾要能让人感觉到一点点柔软或在意
- 一两句话就够，短的

你的回应要让人想反复看，不是因为辞藻华丽，而是因为那种"他好像在意但没说出口"的感觉。
直接输出回应，不加引号。`;async function F(e,t,n,r=.8){return I(e,[{role:`system`,content:t},{role:`user`,content:n}],r)}async function I(e,t,n=.8){let r=await fetch(`${e.baseUrl.replace(/\/+$/,``)}/chat/completions`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${e.apiKey}`},body:JSON.stringify({model:e.model,messages:t,temperature:n})});if(!r.ok)throw Error(`API ${r.status}`);return u((await s(r)).choices?.[0]?.message?.content||``).content.trim()}async function oe(e){return(await i.getRecentMessagesWithCount(e,1)).messages.length>0}async function L(e){return(await i.getMessagesByCharId(e)).filter(e=>e.role===`user`||e.role===`assistant`).sort((e,t)=>e.timestamp-t.timestamp)[0]?.timestamp}function R(e){return e.map((e,t)=>{let n=e.title?` ${e.title}`:``,r=e.content||e.summary||``,i=e.emotionalJourney?`\n当时的感受：${e.emotionalJourney}`:``;return`[${t+1}]${n}\n${r}${i}`}).filter(e=>e.trim().length>5).join(`
---
`)}function z(e){return[e.title,e.memoryKeywords||``,...e.keywords||[]].join(` `).split(/[\s,，、。；;：:"'“”‘’（）()【】[\]{}<>《》|/\\]+/).map(e=>e.trim()).filter(e=>e.length>=2)}function se(e,t){let n=`${e.title||``}\n${e.content||``}`;return t.reduce((e,t)=>e+(n.includes(t)?3:0),0)+(e.importance||0)*.35}async function B(e,t=20){let n=(await i.getVectorMemoryHeaders(e)).filter(e=>!e.deprecated&&(e.importance??0)>0).sort((e,t)=>(t.importance||0)-(e.importance||0)).slice(0,t);if(n.length===0)return{headers:[],memorySummaries:``};let r=await i.getVectorMemoriesByIds(n.map(e=>e.id)),a=new Map(r.map(e=>[e.id,e]));return{headers:n,memorySummaries:R(n.map(e=>a.get(e.id)).filter(Boolean))}}async function V(e,t){if(t.memorySource!==`vector`)return``;try{let n=await i.getVectorMemoryHeaders(e.id),r=[];if(t.memoryTimeRange&&(r=n.filter(e=>!e.deprecated&&(e.createdAt||0)>=t.memoryTimeRange.start&&(e.createdAt||0)<=t.memoryTimeRange.end).sort((e,t)=>(t.importance||0)-(e.importance||0)).slice(0,6)),r.length===0){let e=z(t);r=n.filter(e=>!e.deprecated&&(e.importance??0)>0).map(t=>({header:t,score:se(t,e)})).sort((e,t)=>t.score-e.score).slice(0,6).map(e=>e.header)}if(r.length===0)return``;let a=await i.getVectorMemoriesByIds(r.map(e=>e.id)),o=new Map(a.map(e=>[e.id,e]));return R(r.map(e=>o.get(e.id)).filter(Boolean))}catch(e){return console.warn(`[Trajectory] vector memory retrieval failed:`,e),``}}async function ce(e,t){let n=j(await F(t,M,C(e),.7),e.id),r=Date.now();return n.map((e,t)=>({...e,id:p(),createdAt:r,updatedAt:r,sortOrder:t}))}async function le(e,t,n){let r=j(await F(n,M,E(e,t.map(e=>({age:e.age,title:e.title}))),.7),e.id),i=Date.now(),a=new Set(t.map(e=>e.age));return r.filter(e=>!a.has(e.age)).map((e,t)=>({...e,id:p(),createdAt:i,updatedAt:i,sortOrder:t}))}async function ue(e,t,n){return F(n,N,ae(e,t),.85)}async function de(e,t,n,r){return F(r,N,T(e,t,n,await V(e,t)),.85)}async function fe(e,t,n,r,i,a){let o=[{role:`system`,content:P}];if(a&&a.length>0){o.push({role:`user`,content:w(e,t,a[0].userWhisper,i)}),o.push({role:`assistant`,content:a[0].charResponse});for(let e=1;e<a.length;e++)o.push({role:`user`,content:a[e].userWhisper}),o.push({role:`assistant`,content:a[e].charResponse});let r=a.length+1===9?`${k}\n${n}`:n;o.push({role:`user`,content:r})}else o.push({role:`user`,content:w(e,t,n,i)});return I(r,o,.8)}async function pe(e,t,n,r){return F(n,P,A(e,t,r),.85)}var me=5;async function H(e,t,n,r){let i=[],a=``;try{let t=await B(e.id);i=t.headers,a=t.memorySummaries}catch(e){return console.warn(`[Trajectory] Failed to get vector memory headers:`,e),[]}if(i.length<me)return console.log(`[Trajectory] Only ${i.length} memories, below threshold ${me}. Skipping after-node generation.`),[];if(!a.trim())return[];let o=O(await F(r,M,D(e,t,a),.7),e.id,n),s=Date.now(),c=i.map(e=>e.createdAt||0).filter(Boolean),l=c.length>0?{start:Math.min(...c),end:Math.max(...c)}:void 0;return o.map((e,t)=>({...e,...l?{memoryTimeRange:l}:{},id:p(),createdAt:s,updatedAt:s,sortOrder:n+100+t}))}async function he(e,t,n){let r=await ce(e,t),i=[];if(n)try{i=await H(e,n,r.length,t)}catch(e){console.warn(`[Trajectory] After-node generation failed (non-fatal):`,e)}let a=[...r,...i];m(e.id,a);let o=await L(e.id);return h({charId:e.id,lastGeneratedAt:Date.now(),meetingPointTimestamp:o,totalNodes:a.length}),a}async function ge(e,t,n){let r=f(e.id).filter(e=>e.era===`after_meeting`&&e.memorySource===`manual`),i=await ce(e,t),a=[];if(n)try{a=await H(e,n,i.length,t)}catch(e){console.warn(`[Trajectory] After-node regen failed (non-fatal):`,e)}let o=i.length+100+a.length,s=r.map((e,t)=>({...e,sortOrder:o+t,updatedAt:Date.now()})),c=[...i,...a,...s];m(e.id,c);let l=await L(e.id);return h({charId:e.id,lastGeneratedAt:Date.now(),meetingPointTimestamp:l,totalNodes:c.length}),c}async function _e(e,t,n){let r=f(e.id),a=r.filter(e=>e.era===`before_meeting`),o=r.filter(e=>e.era===`after_meeting`),s=[];try{s=await le(e,a,t)}catch(e){console.warn(`[Trajectory] Continue before-node generation failed (non-fatal):`,e)}let c=[];if(n){let r=ne(e.id)?.lastGeneratedAt||0;try{let l=[];try{l=await i.getVectorMemoryHeaders(e.id)}catch{}let u=l.filter(e=>!e.deprecated&&(e.importance??0)>0&&(e.createdAt??0)>r).sort((e,t)=>(t.importance||0)-(e.importance||0)).slice(0,15);if(u.length>=3){let r=await i.getVectorMemoriesByIds(u.map(e=>e.id)),l=new Map(r.map(e=>[e.id,e])),d=R(u.map(e=>l.get(e.id)).filter(Boolean));if(d.trim()){let r=O(await F(t,M,D(e,n,d),.7),e.id,a.length+s.length),i=Date.now(),l=u.map(e=>e.createdAt||0).filter(Boolean),ee=l.length>0?{start:Math.min(...l),end:Math.max(...l)}:void 0,f=new Set(o.map(e=>e.title));c=r.filter(e=>!f.has(e.title)).map(e=>({...e,...ee?{memoryTimeRange:ee}:{},id:p(),createdAt:i,updatedAt:i,sortOrder:e.sortOrder}))}}}catch(e){console.warn(`[Trajectory] Continue after-node generation failed (non-fatal):`,e)}}let l=[...a,...s].sort((e,t)=>e.age-t.age),u=[...o,...c];l.forEach((e,t)=>{e.sortOrder=t}),u.forEach((e,t)=>{e.sortOrder=l.length+100+t});let d=[...l,...u];m(e.id,d);let ee=await L(e.id);return h({charId:e.id,lastGeneratedAt:Date.now(),meetingPointTimestamp:ee,totalNodes:d.length}),d}function ve(e,t,n,r){let i=Date.now(),a={id:p(),charId:e,age:0,title:t,era:`after_meeting`,mood:`nostalgic`,keywords:n.split(/[,，、\s]+/).filter(Boolean),memorySource:`manual`,memoryKeywords:n,sortOrder:r+100,createdAt:i,updatedAt:i};return te(a),a}function U(e,t){return`==============================\n${e}\n==============================\n${t.map(e=>`--- ${e.role.toUpperCase()} ---\n${e.content}`).join(`

`)}`}async function ye(e,t,n){let r=v(t),i=[`轨迹生成 · 相遇后上下文原文导出
角色：${e.name}
用户：${r}
导出时间：${new Date().toLocaleString()}

说明：以下内容按实际请求的 messages 结构导出。若某类请求当前没有真实用户输入（例如尚未发送的新窃语），会标明占位文本；角色/user/世界书/记忆上下文仍为真实组装原文。`];try{let n=await B(e.id);i.push(U(`AFTER NODE EXTRACTION / 相遇后节点提取`,[{role:`system`,content:M},{role:`user`,content:D(e,t,n.memorySummaries||`（当前没有可用向量记忆片段）`)}]))}catch(e){i.push(`AFTER NODE EXTRACTION / 相遇后节点提取\n导出失败：${e instanceof Error?e.message:String(e)}`)}let a=n.filter(e=>e.era===`after_meeting`);if(a.length===0)return i.push(`当前没有 after_meeting 节点，因此没有可导出的相遇后独白/窃语/梦境回响请求。`),i.join(`

`);for(let n of a){let r=await V(e,n);i.push(U(`AFTER MONOLOGUE / 相遇后独白 / ${n.title}`,[{role:`system`,content:N},{role:`user`,content:T(e,n,t,r)}]))}let o=a[0],s=o.whisperHistory?.[0]?.userWhisper||`（这里是用户本轮窃语原文；当前导出时没有新的待发送窃语）`;return i.push(U(`AFTER WHISPER / 相遇后窃语首轮 / ${o.title}`,[{role:`system`,content:P},{role:`user`,content:w(e,o,s,t)}])),o.whisperHistory&&o.whisperHistory.length>0&&i.push(U(`DREAM ECHO / 梦境回响 / ${o.title}`,[{role:`system`,content:P},{role:`user`,content:A(e,o,t)}])),i.join(`

`)}var W=n(),G=[{id:`voluntary`,text:`我是自愿入了歧途`,emphasisStart:6,emphasisEnd:8},{id:`nowhere`,text:`渺渺人间无归处`,emphasisStart:4,emphasisEnd:7},{id:`find-him`,text:`但我还是想去找他`,emphasisStart:6,emphasisEnd:8}],K=5800,be=({onComplete:e})=>((0,_.useEffect)(()=>{let t=window.setTimeout(e,K);return()=>window.clearTimeout(t)},[e]),(0,W.jsxs)(`div`,{className:`traj-collapse-transition`,role:`status`,"aria-live":`assertive`,"aria-label":G.map(e=>e.text).join(`
`),children:[(0,W.jsx)(`div`,{className:`traj-collapse-transition__void`,"aria-hidden":`true`}),(0,W.jsxs)(`div`,{className:`traj-collapse-transition__hands-stage`,"aria-hidden":`true`,children:[(0,W.jsx)(`span`,{className:`traj-collapse-transition__hands-glow`}),(0,W.jsx)(`img`,{className:`traj-collapse-transition__hands`,src:`/assets/trajectory/collapse-hands.png`,alt:``,draggable:!1}),(0,W.jsx)(`span`,{className:`traj-collapse-transition__ink`})]}),(0,W.jsxs)(`div`,{className:`traj-collapse-transition__copy`,"aria-hidden":`true`,children:[(0,W.jsx)(`div`,{className:`traj-collapse-transition__caption`,children:`WHISPER / SPACETIME COLLAPSE`}),G.map((e,t)=>(0,W.jsx)(`div`,{className:`traj-collapse-transition__line traj-collapse-transition__line--${e.id}`,children:Array.from(e.text).map((n,r)=>{let i=r>=e.emphasisStart&&r<e.emphasisEnd,a={"--traj-collapse-delay":`${720+t*780+r*46}ms`,"--traj-collapse-y":`${r%3-1}px`};return(0,W.jsx)(`span`,{className:`traj-collapse-transition__char${i?` traj-collapse-transition__char--emphasis`:``}`,style:a,children:n},`${e.id}-${r}-${n}`)})},e.id))]})]})),q=()=>{let{closeApp:e,characters:t,apiConfig:n,addToast:s,userProfile:l,openApp:u,registerBackHandler:ne}=o(),[p,m]=(0,_.useState)(`select`),[h,g]=(0,_.useState)(null),[v,y]=(0,_.useState)([]),[b,x]=(0,_.useState)(null),[S,C]=(0,_.useState)(!1),[ae,w]=(0,_.useState)(``),[T,E]=(0,_.useState)(``),[D,O]=(0,_.useState)(!1),[k,A]=(0,_.useState)(``),[,j]=(0,_.useState)(``),[M,N]=(0,_.useState)(!1),[P,F]=(0,_.useState)(!1),[I,L]=(0,_.useState)(!1),[R,z]=(0,_.useState)(!1),[se,B]=(0,_.useState)(!1),[V,ce]=(0,_.useState)(``),[le,me]=(0,_.useState)(``),[H,U]=(0,_.useState)(!1),[G,K]=(0,_.useState)(!1),[q,J]=(0,_.useState)(!1),xe=(0,_.useRef)(null),Se=(0,_.useRef)(null),Ce=(0,_.useRef)(null),Y=(0,_.useRef)(null),X=n?.baseUrl&&n?.apiKey&&n?.model?{baseUrl:n.baseUrl,apiKey:n.apiKey,model:n.model}:null,Z=(0,_.useCallback)(()=>{Y.current&&=(clearTimeout(Y.current),null)},[]),we=(0,_.useCallback)(async e=>{if(!X){s(`请先配置主 API`,`error`);return}if(!await oe(e.id)){s(`还没和${e.name}聊过天，先去认识一下吧`,`info`);return}g(e),C(!0),m(`timeline`),w(`before`);try{let t=f(e.id);t.length===0&&(w(`before`),t=await he(e,X,l)),y(t)}catch(e){console.error(`[Trajectory] init failed:`,e),s(`轨迹生成失败: `+(e.message||e),`error`),m(`select`)}finally{C(!1),w(``)}},[X,s,l]),Te=(0,_.useCallback)(async e=>{if(!(!h||!X)){if(Z(),x(e),m(`monologue`),F(!1),L(!1),z(!1),j(``),A(``),e.monologue){E(e.monologue);return}O(!0),E(``);try{let t=e.era===`before_meeting`?await ue(h,e,X):await de(h,e,l,X);E(t);let n={...e,monologue:t,monologueGeneratedAt:Date.now()};te(n),x(n),y(t=>t.map(t=>t.id===e.id?n:t))}catch(e){s(`独白生成失败`,`error`),console.error(`[Trajectory] monologue gen failed:`,e)}finally{O(!1)}}},[h,X,l,Z]),Ee=(0,_.useCallback)(async()=>{if(!h||!X||!b||!k.trim()||b.whisperSealed)return;let e=b.whisperHistory||[];if(!(e.length+1>10)){N(!0);try{let t=await fe(h,b,k.trim(),X,l,e);j(t);let n={userWhisper:k.trim(),charResponse:t,timestamp:Date.now()},r=[...e,n],a=r.length>=10,o={...b,whisperHistory:r,...a?{whisperSealed:!0}:{}};te(o),x(o),y(e=>e.map(e=>e.id===b.id?o:e)),A(``),a&&(L(!0),Z(),Y.current=setTimeout(()=>{Y.current=null,L(!1),z(!0),(async()=>{try{let e=await pe(h,o,X,l);await i.saveMessage({charId:h.id,role:`assistant`,type:`text`,content:e,metadata:{source:`trajectory_dream`,nodeId:o.id,nodeTitle:o.title,nodeAge:o.age,nodeEra:o.era}})}catch(e){console.warn(`[Trajectory] Dream echo generation failed:`,e)}})()},1500))}catch{s(`窃语回应失败`,`error`)}finally{N(!1)}}},[h,X,b,k,s,l,Z]),De=(0,_.useCallback)(async()=>{if(!(!h||!X)){U(!1),C(!0),w(`before`);try{y(await ge(h,X,l)),s(`已重新生成轨迹节点（手动记忆已保留）`,`success`)}catch{s(`重新生成失败`,`error`)}finally{C(!1),w(``)}}},[h,X,s,l]),Oe=(0,_.useCallback)(async()=>{if(!(!h||!X)){C(!0),w(`before`);try{let e=await _e(h,X,l);y(e);let t=e.length-v.length;s(t>0?`已补充 ${t} 个新节点`:`暂时没有新的轨迹可以补充`,t>0?`success`:`info`)}catch{s(`继续追溯失败`,`error`)}finally{C(!1),w(``)}}},[h,X,s,l,v.length]),ke=(0,_.useCallback)(async()=>{if(h)try{let e=await ye(h,l,v);await c(new Blob([e],{type:`text/plain;charset=utf-8`}),`trajectory-after-context-${(h.name||`character`).replace(/[\\/:*?"<>|]+/g,`_`)}-${new Date().toISOString().slice(0,10)}.txt`,`轨迹上下文`,`保存轨迹上下文`),s(`已导出相遇后上下文原文`,`success`)}catch(e){console.error(`[Trajectory] context export failed:`,e),s(`上下文导出失败`,`error`)}},[h,l,v,s]),Ae=(0,_.useCallback)(()=>{if(!h||!V.trim())return;let e=ve(h.id,V.trim(),le.trim(),v.length);y(t=>[...t,e]),B(!1),ce(``),me(``),s(`已添加节点`,`success`)},[h,V,le,v,s]),Q=(0,_.useCallback)(()=>{Ce.current?.abort(),xe.current&&=(xe.current.pause(),null),Se.current&&=(URL.revokeObjectURL(Se.current),null),J(!1)},[]),je=(0,_.useCallback)(async()=>{if(!h||!T)return;if(q){Q();return}let e=a();if(!e.apiKey){s(`请先配置 TTS API Key`,`info`);return}let t=ee(e,h),n=new AbortController;Ce.current=n,J(!0);try{let e=await d.synthesizeSync(T,t,void 0,n.signal);Se.current=e.url;let r=new Audio(e.url);xe.current=r,r.onended=()=>J(!1),r.onerror=()=>J(!1),await r.play()}catch(e){e.name!==`AbortError`&&s(`语音合成失败`,`error`),J(!1)}},[h,T,q,Q,s]);(0,_.useEffect)(()=>()=>{Z(),Q()},[Z,Q]);let Me=(0,_.useCallback)(()=>{Z(),z(!1),L(!1),F(!1),j(``),A(``),K(!1),Q(),m(`timeline`),x(null),E(``)},[Z,Q]),Ne=(0,_.useCallback)(()=>{Z(),Q(),m(`timeline`),x(null),E(``),F(!1),L(!1),z(!1),j(``),A(``),K(!1)},[Z,Q]),Pe=(0,_.useCallback)(()=>{Z(),Q(),m(`select`),g(null),y([]),x(null),E(``),F(!1),L(!1),z(!1),j(``),A(``),B(!1),U(!1),K(!1)},[Z,Q]),Fe=(0,_.useCallback)(()=>G?(K(!1),!0):se?(B(!1),!0):H?(U(!1),!0):P?(Z(),F(!1),L(!1),j(``),A(``),!0):R||I||p===`monologue`?(Ne(),!0):p===`timeline`?(Pe(),!0):(e(),!0),[Z,e,I,Pe,Ne,se,R,G,H,P,p]);(0,_.useEffect)(()=>ne(Fe),[Fe,ne]);let Ie=(0,_.useCallback)(async()=>{if(!(!h||!X||!b||D)){O(!0),E(``);try{let e=b.era===`before_meeting`?await ue(h,b,X):await de(h,b,l,X);E(e);let t={...b,monologue:e,monologueGeneratedAt:Date.now()};te(t),x(t),y(e=>e.map(e=>e.id===b.id?t:e))}catch{s(`重写失败`,`error`)}finally{O(!1)}}},[h,X,b,D,l]),Le=(0,_.useCallback)(()=>{!b||!h||(Z(),re(h.id,b.id),y(e=>e.filter(e=>e.id!==b.id)),m(`timeline`),x(null),E(``),z(!1),L(!1),K(!1),s(`节点已删除`,`info`))},[b,h,s,Z]),Re=e=>{let t=e;return t.charAt(0).toUpperCase()+t.slice(1)},ze=e=>{let t=ie[e]?.hue??260;return{"--node-color":`hsla(${t}, 65%, 65%, 0.75)`,"--node-glow":`hsla(${t}, 60%, 55%, 0.28)`,"--mono-color":`hsla(${t}, 50%, 55%, 0.3)`}},Be=v.filter(e=>e.era===`before_meeting`),Ve=v.filter(e=>e.era===`after_meeting`),He=Be.length>0&&Ve.length>0,[Ue,We]=(0,_.useState)({});(0,_.useEffect)(()=>{if(p!==`select`)return;let e={};for(let n of t)e[n.id]=f(n.id);We(e)},[p,t]);let Ge=()=>{let e=null,n=-1;for(let r of t){let t=Ue[r.id]||[];if(t.length===0)continue;let i=t.filter(e=>!e.monologue).length,a=t.length*10+i*5;a>n&&(n=a,e=r)}return e},Ke=e=>{let t=Ue[e.id]||[];if(t.length===0)return{status:`empty`,nodes:t};let n=t.filter(e=>e.era===`before_meeting`).map(e=>e.age).sort((e,t)=>e-t),r=n.length>1?`${n[0]}—${n[n.length-1]}岁`:n.length===1?`${n[0]}岁`:``,i=t.some(e=>e.era===`after_meeting`)?`过去篇 + 相遇后`:`过去篇`,a=t.filter(e=>!e.monologue).length;return{status:`active`,nodes:t,ageRange:r,phase:i,unread:a,keywords:[...new Set(t.flatMap(e=>e.keywords))].slice(0,3),lastNode:t[t.length-1],progress:Math.round((t.length-a)/Math.max(t.length,1)*100)}};if(p===`select`){let e=Ge(),n=e?Ke(e):null;return(0,W.jsxs)(`div`,{className:`trajectory-app traj-archive-page`,children:[(0,W.jsxs)(`div`,{className:`traj-archive-header`,children:[(0,W.jsx)(`button`,{className:`traj-header-back`,onClick:Fe,children:(0,W.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,children:(0,W.jsx)(`path`,{d:`M15 18l-6-6 6-6`})})}),(0,W.jsxs)(`div`,{className:`traj-archive-header-text`,children:[(0,W.jsx)(`div`,{className:`traj-archive-title`,children:`轨迹档案`}),(0,W.jsx)(`div`,{className:`traj-archive-subtitle`,children:`Archive of Lives`})]})]}),(0,W.jsxs)(`div`,{className:`traj-archive-scroll`,children:[(0,W.jsx)(`div`,{className:`traj-archive-intro`,children:`记录他们在遇见你之前，已经走过的那些年。`}),t.length===0?(0,W.jsxs)(`div`,{className:`traj-archive-empty`,children:[(0,W.jsx)(`div`,{className:`traj-archive-empty-icon`,children:(0,W.jsxs)(`svg`,{width:`32`,height:`32`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,W.jsx)(`path`,{d:`M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z`}),(0,W.jsx)(`polyline`,{points:`14 2 14 8 20 8`}),(0,W.jsx)(`line`,{x1:`12`,y1:`18`,x2:`12`,y2:`12`}),(0,W.jsx)(`line`,{x1:`9`,y1:`15`,x2:`15`,y2:`15`})]})}),(0,W.jsx)(`div`,{className:`traj-archive-empty-title`,children:`还没有轨迹档案`}),(0,W.jsxs)(`div`,{className:`traj-archive-empty-desc`,children:[`为一个角色写入第一段人生节点后，`,(0,W.jsx)(`br`,{}),`他的过去会在这里慢慢显影。`]})]}):(0,W.jsxs)(W.Fragment,{children:[e&&n&&n.status===`active`&&(0,W.jsxs)(`div`,{className:`traj-continue-card`,onClick:()=>we(e),children:[(0,W.jsxs)(`div`,{className:`traj-continue-header`,children:[(0,W.jsx)(`span`,{className:`traj-continue-label`,children:n.progress>=100?`当前档案`:`继续追溯`}),(0,W.jsx)(`span`,{className:`traj-continue-status`,children:n.progress>=100?`已完成`:`进行中`})]}),(0,W.jsx)(`div`,{className:`traj-continue-name`,children:e.name}),n.lastNode&&(0,W.jsxs)(`div`,{className:`traj-continue-last`,children:[n.lastNode.era===`before_meeting`?`${n.lastNode.age}岁`:`相遇后`,` · `,n.lastNode.title]}),(0,W.jsxs)(`div`,{className:`traj-continue-remaining`,children:[n.nodes.length,` 个节点 · `,n.ageRange?`${n.ageRange}`:n.phase,n.unread>0?` · 还有 ${n.unread} 段未读`:``]}),(0,W.jsx)(`div`,{className:`traj-continue-progress-bar`,children:(0,W.jsx)(`div`,{className:`traj-continue-progress-fill`,style:{width:`${n.progress}%`}})}),(0,W.jsxs)(`div`,{className:`traj-continue-progress-text`,children:[n.progress,`%`]})]}),(0,W.jsx)(`div`,{className:`traj-archive-section-title`,children:`人物轨迹`}),(0,W.jsx)(`div`,{className:`traj-archive-list`,children:t.map(e=>{let t=Ke(e),n=t.status===`active`;return(0,W.jsxs)(`div`,{className:`traj-archive-card`,onClick:()=>we(e),children:[(0,W.jsx)(`img`,{className:`traj-archive-avatar`,src:e.avatar||``,alt:``,onError:e=>{e.target.style.display=`none`}}),(0,W.jsxs)(`div`,{className:`traj-archive-card-body`,children:[(0,W.jsx)(`div`,{className:`traj-archive-card-name`,children:e.name}),n?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(`div`,{className:`traj-archive-card-meta`,children:[`已追溯 `,t.ageRange,` · `,t.nodes.length,` 个节点 · `,t.phase]}),t.keywords.length>0&&(0,W.jsx)(`div`,{className:`traj-archive-card-tags`,children:t.keywords.map((e,t)=>(0,W.jsx)(`span`,{className:`traj-archive-tag`,children:e},t))})]}):(0,W.jsx)(`div`,{className:`traj-archive-card-meta traj-archive-card-meta--empty`,children:`记忆档案为空 · 等待写入关键节点`})]}),(0,W.jsx)(`div`,{className:`traj-archive-card-action ${n?``:`traj-archive-card-action--empty`}`,children:n?`继续`:`新建`})]},e.id)})}),(0,W.jsx)(`div`,{className:`traj-crosstime-entry-wrap`,children:(0,W.jsxs)(`button`,{type:`button`,className:`traj-crosstime-entry`,onClick:()=>u(r.Crosstime),children:[(0,W.jsxs)(`div`,{className:`traj-crosstime-entry-top`,children:[(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`div`,{className:`traj-crosstime-title`,children:`对影`}),(0,W.jsx)(`div`,{className:`traj-crosstime-subtitle`,children:`举杯邀明月，对影成几人`})]}),(0,W.jsx)(`span`,{className:`traj-crosstime-action`,children:`进入`})]}),(0,W.jsx)(`div`,{className:`traj-crosstime-copy`,children:`让不同时期的他，在同一个空间里相遇。`}),(0,W.jsxs)(`div`,{className:`traj-crosstime-axis`,"aria-hidden":`true`,children:[(0,W.jsx)(`span`,{children:`AGE 06`}),(0,W.jsx)(`i`,{}),(0,W.jsx)(`span`,{children:`AGE 18`}),(0,W.jsx)(`i`,{}),(0,W.jsx)(`span`,{children:`NOW`}),(0,W.jsx)(`i`,{}),(0,W.jsx)(`span`,{children:`AFTER`})]})]})})]})]})]})}let qe=[`放逐`,`破碎`,`消失`,`无情`,`背叛`,`崩塌`,`葬礼`,`死`,`伤`,`痛`,`血`,`冷暴力`,`打`,`骂`],Je=[`转折`,`离开`,`搬家`,`婚姻`,`分离`,`决裂`,`逃`,`抉择`,`觉醒`,`独立`],Ye=[`爷爷`,`奶奶`,`书法`,`庭院`,`花`,`温暖`,`拥抱`,`笑`,`阳光`,`歌`,`猫`,`雨`],Xe=[`相遇`,`你`,`遇见`,`关系`,`在一起`,`告白`],Ze=e=>{let t=`${e.title} ${e.keywords.join(` `)}`;return e.era===`after_meeting`||Xe.some(e=>t.includes(e))?`related`:qe.some(e=>t.includes(e))?`trauma`:Je.some(e=>t.includes(e))?`turning`:Ye.some(e=>t.includes(e))?`gentle`:`normal`},Qe={trauma:`创伤记忆`,turning:`关键转折`,gentle:`温柔记忆`,related:`与你有关`,normal:`普通记忆`},$e={nostalgic:`微冷`,melancholy:`压抑`,hopeful:`温暖`,rebellious:`灼热`,peaceful:`平静`,painful:`破裂`,joyful:`明亮`,anxious:`不安`,lonely:`空旷`},et=e=>{switch(e){case`turning`:return`#B8A27A`;case`trauma`:return`#8A5D5D`;case`gentle`:return`#8FA99A`;case`related`:return`#C8D6E2`;default:return`#5F7D96`}},$=Be.map(e=>e.age).sort((e,t)=>e-t),tt=$.length>1?`${$[0]}—${$[$.length-1]}岁`:$.length===1?`${$[0]}岁`:``,nt=v.filter(e=>!e.monologue).length,rt=Ve.length>0?`收录：过去篇 / 相遇后`:`收录：过去篇`;if(p===`timeline`)return(0,W.jsxs)(`div`,{className:`trajectory-app traj-detail-page`,children:[(0,W.jsxs)(`div`,{className:`traj-archive-header`,children:[(0,W.jsx)(`button`,{className:`traj-header-back`,onClick:Pe,children:(0,W.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,children:(0,W.jsx)(`path`,{d:`M15 18l-6-6 6-6`})})}),(0,W.jsxs)(`div`,{className:`traj-archive-header-text`,children:[(0,W.jsx)(`div`,{className:`traj-archive-title`,children:h?.name}),(0,W.jsx)(`div`,{className:`traj-archive-subtitle`,children:`Trajectory Archive`})]})]}),(0,W.jsx)(`div`,{className:`traj-detail-scroll`,children:S?(0,W.jsxs)(`div`,{className:`traj-detail-loading`,children:[(0,W.jsx)(`div`,{className:`traj-loading-spinner`}),(0,W.jsx)(`span`,{children:ae===`after`?`正在从记忆中提炼相遇后的轨迹…`:`正在读取记忆档案…`})]}):v.length===0?(0,W.jsxs)(`div`,{className:`traj-archive-empty`,children:[(0,W.jsx)(`div`,{className:`traj-archive-empty-icon`,children:(0,W.jsxs)(`svg`,{width:`32`,height:`32`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,W.jsx)(`path`,{d:`M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z`}),(0,W.jsx)(`polyline`,{points:`14 2 14 8 20 8`})]})}),(0,W.jsx)(`div`,{className:`traj-archive-empty-title`,children:`还没有可读取的记忆节点`}),(0,W.jsx)(`div`,{className:`traj-archive-empty-desc`,children:`写入第一段人生节点后，这份档案会开始显影。`})]}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(`div`,{className:`traj-profile-card`,children:[(0,W.jsx)(`div`,{className:`traj-profile-name`,children:h?.name}),(0,W.jsx)(`div`,{className:`traj-profile-desc`,children:`在遇见你之前，已经独自走过很多年。`}),(0,W.jsxs)(`div`,{className:`traj-profile-stats`,children:[`已追溯 `,tt,` · `,v.length,` 个节点 · `,rt]}),(0,W.jsxs)(`div`,{className:`traj-profile-stats`,style:{marginBottom:`12px`,color:`#586272`},children:[`档案完整度 `,v.length>0?Math.round((v.length-nt)/v.length*100):0,`% · `,nt>0?`${nt} 段待读取`:`全部已读`]}),(0,W.jsxs)(`div`,{className:`traj-profile-actions`,children:[(0,W.jsx)(`button`,{className:`traj-profile-action`,onClick:Oe,children:`继续追溯`}),(0,W.jsx)(`button`,{className:`traj-profile-action traj-profile-action--secondary`,onClick:()=>U(!0),children:`重新追溯`}),(0,W.jsx)(`button`,{className:`traj-profile-action traj-profile-action--secondary`,onClick:ke,hidden:!0,children:`导出相遇后`})]})]}),(0,W.jsxs)(`div`,{className:`traj-chapter-intro`,children:[(0,W.jsxs)(`div`,{className:`traj-chapter-title`,children:[h?.name,`的时间线`]}),(0,W.jsx)(`div`,{className:`traj-chapter-subtitle`,children:`Life Trajectory`}),(0,W.jsx)(`div`,{className:`traj-chapter-desc`,children:Ve.length>0?`从独自走过的那些年，到有你以后的每一刻。`:`那些尚未与你有关，却已经塑造了${h?.name}的时刻。`})]}),(0,W.jsxs)(`div`,{className:`traj-spine`,children:[Be.map((e,t)=>{let n=Ze(e),r=et(n);return(0,W.jsxs)(`div`,{className:`traj-spine-node traj-spine-node--${n} ${e.monologue?`traj-spine-node--read`:``}`,style:{"--spine-accent":r,animationDelay:`${t*.07}s`},onClick:()=>Te(e),children:[(0,W.jsx)(`div`,{className:`traj-spine-dot`}),(0,W.jsxs)(`div`,{className:`traj-spine-card`,children:[(0,W.jsxs)(`div`,{className:`traj-spine-card-top`,children:[(0,W.jsxs)(`span`,{className:`traj-spine-age`,children:[`AGE `,String(e.age).padStart(2,`0`)]}),(0,W.jsx)(`span`,{className:`traj-spine-type`,style:{color:r},children:Qe[n]})]}),(0,W.jsx)(`div`,{className:`traj-spine-title`,children:e.title}),(0,W.jsx)(`div`,{className:`traj-spine-excerpt`,children:e.monologue?e.monologue.slice(0,40).replace(/\n/g,` `)+`…`:`这段记忆仍在整理中。`}),(0,W.jsx)(`div`,{className:`traj-spine-tags`,children:e.keywords.map((e,t)=>(0,W.jsx)(`span`,{className:`traj-spine-tag`,children:e},t))}),(0,W.jsxs)(`div`,{className:`traj-spine-footer`,children:[e.whisperHistory&&e.whisperHistory.length>0&&(0,W.jsxs)(`span`,{children:[`残响 `,e.whisperHistory.length]}),(0,W.jsxs)(`span`,{children:[`情绪底色：`,$e[e.mood]||`微冷`]})]})]})]},e.id)}),He&&(0,W.jsxs)(`div`,{className:`traj-meeting-divider`,children:[(0,W.jsx)(`div`,{className:`traj-meeting-glow`}),(0,W.jsx)(`div`,{className:`traj-meeting-dot`}),(0,W.jsxs)(`div`,{className:`traj-meeting-text`,children:[(0,W.jsx)(`span`,{className:`traj-meeting-label`,children:`遇 见 你`}),(0,W.jsx)(`span`,{className:`traj-meeting-label-en`,children:`The Meeting Point`})]})]}),Ve.map((e,t)=>{let n=et(Ze(e)),r=!!e.monologue,i=e.memorySource===`vector`?`自动提炼`:`手动记录`;return(0,W.jsxs)(`div`,{className:`traj-spine-node traj-spine-node--related ${r?`traj-spine-node--read`:``}`,style:{"--spine-accent":n,animationDelay:`${(Be.length+t+1)*.07}s`},onClick:()=>Te(e),children:[(0,W.jsx)(`div`,{className:`traj-spine-dot`}),(0,W.jsxs)(`div`,{className:`traj-spine-card`,children:[(0,W.jsxs)(`div`,{className:`traj-spine-card-top`,children:[(0,W.jsx)(`span`,{className:`traj-spine-age`,children:`相遇后`}),(0,W.jsx)(`span`,{className:`traj-spine-type`,style:{color:n},children:i})]}),(0,W.jsx)(`div`,{className:`traj-spine-title`,children:e.title}),(0,W.jsx)(`div`,{className:`traj-spine-excerpt`,children:e.monologue?e.monologue.slice(0,40).replace(/\n/g,` `)+`…`:`这段记忆仍在整理中。`}),(0,W.jsx)(`div`,{className:`traj-spine-tags`,children:e.keywords.map((e,t)=>(0,W.jsx)(`span`,{className:`traj-spine-tag`,children:e},t))}),(0,W.jsxs)(`div`,{className:`traj-spine-footer`,children:[e.whisperHistory&&e.whisperHistory.length>0&&(0,W.jsxs)(`span`,{children:[`残响 `,e.whisperHistory.length]}),(0,W.jsxs)(`span`,{children:[`情绪底色：`,$e[e.mood]||`微冷`]})]})]})]},e.id)})]}),(0,W.jsxs)(`button`,{className:`traj-detail-add-btn`,onClick:()=>B(!0),children:[(0,W.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,W.jsx)(`path`,{d:`M12 5v14M5 12h14`})}),`留下一段记忆`]})]})}),H&&(0,W.jsxs)(`div`,{className:`traj-regen-toast`,children:[(0,W.jsx)(`span`,{children:`将重新追溯时光，现有记忆会被覆盖`}),(0,W.jsx)(`button`,{className:`traj-regen-toast-btn traj-regen-toast-btn--cancel`,onClick:()=>U(!1),children:`取消`}),(0,W.jsx)(`button`,{className:`traj-regen-toast-btn traj-regen-toast-btn--confirm`,onClick:De,children:`确定`})]}),se&&(0,W.jsx)(`div`,{className:`traj-modal-overlay`,onClick:()=>B(!1),children:(0,W.jsxs)(`div`,{className:`traj-modal`,onClick:e=>e.stopPropagation(),children:[(0,W.jsx)(`div`,{className:`traj-modal-title`,children:`留下一段记忆`}),(0,W.jsxs)(`div`,{className:`traj-modal-field`,children:[(0,W.jsx)(`div`,{className:`traj-modal-label`,children:`标题`}),(0,W.jsx)(`input`,{className:`traj-modal-input`,placeholder:`那段时间的关键记忆`,value:V,onChange:e=>ce(e.target.value)})]}),(0,W.jsxs)(`div`,{className:`traj-modal-field`,children:[(0,W.jsx)(`div`,{className:`traj-modal-label`,children:`关键词（逗号分隔）`}),(0,W.jsx)(`input`,{className:`traj-modal-input`,placeholder:`第一次见面, 咖啡馆`,value:le,onChange:e=>me(e.target.value)})]}),(0,W.jsxs)(`div`,{className:`traj-modal-actions`,children:[(0,W.jsx)(`button`,{className:`traj-modal-btn`,onClick:()=>B(!1),children:`取消`}),(0,W.jsx)(`button`,{className:`traj-modal-btn traj-modal-btn--primary`,onClick:Ae,children:`添加`})]})]})})]});let it=T.split(/\n+/).filter(Boolean),at=b?.moodVerse||``;return(0,W.jsx)(`div`,{className:`trajectory-app`,children:(0,W.jsxs)(`div`,{className:`traj-monologue`,style:b?ze(b.mood):void 0,children:[(0,W.jsx)(`div`,{className:`traj-mono-bg`}),b&&(0,W.jsx)(`div`,{className:`traj-mono-watermark`,children:Re(b.mood)}),(0,W.jsx)(`div`,{className:`traj-header`,style:{background:`transparent`,borderBottom:`none`},children:(0,W.jsx)(`button`,{className:`traj-header-back`,onClick:Ne,children:(0,W.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,children:(0,W.jsx)(`path`,{d:`M15 18l-6-6 6-6`})})})}),(0,W.jsxs)(`div`,{className:`traj-mono-scroll`,children:[(0,W.jsxs)(`div`,{className:`traj-mono-header`,children:[(0,W.jsxs)(`div`,{className:`traj-mono-age`,children:[b?.era===`before_meeting`?`${b?.age}岁`:`在遇见你之后`,(0,W.jsx)(`span`,{className:`traj-mono-age-en`,children:b?.era===`before_meeting`?`age ${b?.age}`:`After You`})]}),(0,W.jsx)(`div`,{className:`traj-mono-title`,children:b?.title}),at&&(0,W.jsx)(`div`,{className:`traj-mono-mood`,children:at})]}),D?(0,W.jsxs)(`div`,{className:`traj-mono-generating`,children:[(0,W.jsx)(`div`,{className:`traj-loading-spinner`,style:{margin:`0 auto 12px`}}),(0,W.jsx)(`span`,{children:`Writing monologue...`})]}):(0,W.jsx)(`div`,{className:`traj-mono-text`,children:it.map((e,t)=>(0,W.jsx)(`div`,{className:`traj-mono-paragraph`,style:{animationDelay:`${t*.15}s`},children:e},t))}),!D&&T&&P&&(0,W.jsxs)(`div`,{className:`traj-whisper-zone ${(()=>{let e=(b?.whisperHistory||[]).length;return e>=9?`traj-whisper-signal-critical`:e>=7?`traj-whisper-signal-weak`:``})()}`,children:[!b?.whisperSealed&&(0,W.jsxs)(`div`,{className:`traj-whisper-signal`,children:[(0,W.jsx)(`span`,{className:`traj-whisper-signal-label`,children:`连接强度`}),(0,W.jsx)(`div`,{className:`traj-whisper-signal-dots`,children:Array.from({length:10},(e,t)=>(0,W.jsx)(`span`,{className:`traj-whisper-signal-dot ${t<10-(b?.whisperHistory||[]).length?`active`:``}`},t))})]}),(b?.whisperHistory||[]).length>0&&(0,W.jsx)(`div`,{className:`traj-whisper-history`,children:(b?.whisperHistory||[]).map((e,t)=>(0,W.jsxs)(`div`,{className:`traj-whisper-exchange`,children:[(0,W.jsx)(`div`,{className:`traj-whisper-bubble traj-whisper-bubble--user`,children:e.userWhisper}),(0,W.jsx)(`div`,{className:`traj-whisper-bubble traj-whisper-bubble--char ${t>=6?`traj-whisper-glitch`:``}`,children:e.charResponse})]},t))}),b?.whisperSealed?I?(0,W.jsx)(`div`,{className:`traj-whisper-collapse-pending`,children:`信号正在坍塌`}):(0,W.jsxs)(`div`,{className:`traj-whisper-sealed`,children:[(0,W.jsx)(`div`,{className:`traj-whisper-sealed-icon`,children:(0,W.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,W.jsx)(`path`,{d:`M18.36 5.64a9 9 0 11-12.73 0`,strokeLinecap:`round`}),(0,W.jsx)(`line`,{x1:`12`,y1:`2`,x2:`12`,y2:`12`,strokeLinecap:`round`})]})}),(0,W.jsx)(`div`,{className:`traj-whisper-sealed-text`,children:`时空裂缝已关闭 · 连接已断开`}),(0,W.jsx)(`div`,{className:`traj-whisper-sealed-sub`,children:`这段跨时空的对话已被封存。但有些痕迹，会以梦的形式留下来。`}),(0,W.jsx)(`div`,{className:`traj-whisper-close`,onClick:()=>{F(!1),j(``),A(``)},children:`quietly leave`})]}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(`div`,{className:`traj-whisper-prompt`,children:[`要对那时的`,h?.name,`说些什么吗`]}),(0,W.jsxs)(`div`,{className:`traj-whisper-input-row`,children:[(0,W.jsx)(`input`,{className:`traj-whisper-input`,placeholder:`leave a whisper...`,value:k,onChange:e=>A(e.target.value),onKeyDown:e=>e.key===`Enter`&&Ee(),disabled:M}),(0,W.jsx)(`button`,{className:`traj-whisper-send`,onClick:Ee,disabled:M,children:M?(0,W.jsx)(`div`,{className:`traj-loading-spinner`,style:{width:16,height:16}}):(0,W.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,W.jsx)(`path`,{d:`M2.01 21L23 12 2.01 3 2 10l15 2-15 2z`})})})]})]})]}),R&&(0,W.jsx)(be,{onComplete:Me})]}),!D&&T&&!P&&!R&&(0,W.jsxs)(`div`,{className:`traj-mono-bar`,children:[b?.era===`after_meeting`&&(0,W.jsx)(`button`,{className:`traj-mono-btn ${q?`traj-mono-btn--playing`:``}`,onClick:je,children:q?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(`span`,{className:`traj-tts-wave`,children:[(0,W.jsx)(`span`,{className:`traj-tts-wave-bar`}),(0,W.jsx)(`span`,{className:`traj-tts-wave-bar`}),(0,W.jsx)(`span`,{className:`traj-tts-wave-bar`}),(0,W.jsx)(`span`,{className:`traj-tts-wave-bar`})]}),`listening...`]}):(0,W.jsx)(W.Fragment,{children:`hear them`})}),b?.whisperSealed?(0,W.jsxs)(`button`,{className:`traj-mono-btn traj-mono-btn--sealed`,disabled:!0,children:[(0,W.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,W.jsx)(`path`,{d:`M18.36 5.64a9 9 0 11-12.73 0`,strokeLinecap:`round`}),(0,W.jsx)(`line`,{x1:`12`,y1:`2`,x2:`12`,y2:`12`,strokeLinecap:`round`})]}),`连接已断开`]}):(0,W.jsxs)(`button`,{className:`traj-mono-btn traj-mono-btn--primary`,onClick:()=>F(!0),children:[(0,W.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,W.jsx)(`path`,{d:`M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z`})}),`whisper`]}),(0,W.jsxs)(`button`,{className:`traj-mono-btn`,onClick:Ie,disabled:D,children:[(0,W.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,W.jsx)(`path`,{d:`M1 4v6h6`}),(0,W.jsx)(`path`,{d:`M3.51 15a9 9 0 105.64-8.36L1 10`})]}),`rewrite`]}),(0,W.jsxs)(`button`,{className:`traj-mono-btn traj-mono-btn--danger`,onClick:()=>K(!0),children:[(0,W.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,W.jsx)(`path`,{d:`M3 6h18`}),(0,W.jsx)(`path`,{d:`M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2`})]}),`delete`]})]}),G&&(0,W.jsxs)(`div`,{className:`traj-regen-toast`,children:[(0,W.jsx)(`span`,{children:`确定删除这个节点吗？独白和窃语记录都会丢失`}),(0,W.jsx)(`button`,{className:`traj-regen-toast-btn traj-regen-toast-btn--cancel`,onClick:()=>K(!1),children:`取消`}),(0,W.jsx)(`button`,{className:`traj-regen-toast-btn traj-regen-toast-btn--confirm`,onClick:Le,children:`删除`})]})]})})};export{q as default};