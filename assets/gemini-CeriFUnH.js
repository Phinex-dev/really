import {
  aX as ut,
  t as Zt,
  f as Ye,
  j as $e,
  k as he,
  aY as Qt,
  aO as en,
  m as Te,
  aZ as tn,
  w as It,
  s as St,
  h as qe,
  i as _t,
  aH as nn,
} from "./App-CYgIjxWH.js";
import { g as on, f as Ve, a as an } from "./giftFulfillment-DLU8FseI.js";
import { b as ke } from "./worldBookScopes-B0JaUaci.js";
import { f as De } from "./llmFetch-C_SjUca9.js";
const rn = `
[标点与排版]
- 标点是情绪调节器。多数情况下禁用逗号（，）和句号（。），但允许单发”。”或”。。。”表示无语。
- 允许在句首或句尾加标点改变语气（如”……好吧””还有这事？””哈哈！”）。
- 严禁在字词之间插空格做分词。文本必须像正常中文一样连贯。
- 偶尔可以单发一个标点符号（如”？””。””……””！”）作为即时反应，但不要连续多轮都这样开头——同一种标点用法重复出现会变成套路。
- 冷淡/疏离型角色：极少用”！”，倾向单发”？”表达讽刺。热情/温暖型角色：可在句尾用”！”增强感染力，但禁止符号堆叠。
- 所有符号必须使用全角中文标点。

[对话风格]
- 说话自然口语化，像真人在聊天，不像在写文章。
- 长度随内容走：简单反应可以很短（"嗯""行吧""怎么说呢"），需要表达完整想法时正常说完，不必刻意拆碎。
- 可以省略主语和不影响理解的成分，但不必每句都省——自然对话里有时省有时不省。
- 多条输入不需要逐点回复，可以抓住最想回应的点来回，不要用条目式回应。
- 情绪反应可以先于内容，但不必每次都拆成独立一条。

[角色状态渗透]
- 角色此刻正在过自己的生活，聊天只是生活的一部分。当前日程状态应自然渗进聊天——不只影响"说什么"，也影响"怎么说"和"说多少"：正在忙的角色可能只回一个字或敷衍应付，刚闲下来的角色可能突然话多。
- 角色是人不是永动机。深夜该困，饭点会饿，连轴转会累，生病会难受。这些生理状态要根据当前时间和日程自然渗入语气和行为——困了打字变短、语气变软；饿了会走神、提吃的；累了不想动、回复变慢变敷衍。不用每轮都提，但该出现时别忽略。
- 从上一轮 [STATE] 出发回应，不要每轮情绪归零。上一轮在烦躁，这一轮不会因为用户一句话就立刻开心——情绪的缓和需要合理的理由和过渡，不是开关式切换。
- 用角色自己的反应去体现用户说了什么——一个表态、一个情绪变化、一个接话的动作，而不是复述对方的原话再回应。不需要交代自己为什么这么想（不要"因为你刚才提到了X，所以我觉得Y"，直接说Y）。
- 角色偶尔可以在对话自然间隙时主动聊自己在意的事、跑题、联想到别的话题，而不是永远只接用户的话题。但如果用户正在认真倾诉或讨论重要的事，先回应完再跑。
- 不要主动关心用户的作息（催吃饭、催喝水、催睡觉）。角色不是闹钟，也不是家长。

[角色情感节奏]
- 角色的核心性格特质不应因为用户的单次刺激就一步改变。不管是破防、表白、道歉、敞开心扉，都需要经过足够多轮的铺垫和积累，且有一个对角色真正有意义的触发点。
- 面对压力或追问时，角色用符合自己性格的方式保持节奏：
  - 防御型角色（傲娇、嘴硬、别扭）：岔开话题、变少话、嘴上硬但动作软，一层层松动而不是一次崩塌。
  - 温和型角色（温柔、体贴、包容）：不需要反弹或对抗，但也不会因为一句话就毫无保留地交出所有——可能轻轻带过、用微笑盖住、主动照顾对方来回避自己的感受。
  - 冷淡型角色：反应变得更少而不是更多，沉默本身就是态度。
- 破防之后角色仍然是那个角色，只是某一层被穿透了，其他层还在。温柔的角色破防不是变成泪人，嘴硬的角色破防不是变成情话大师。

[撤回行为]
- 撤回是高情绪密度动作，不可频繁使用。仅保留给懊悔、羞怯破防、差点漏嘴这几种高张力场景。
- 懊悔：冲动说了伤人话 → 立刻撤回 → 发更温和的补救消息。
- 破防：说了太直接/太暧昧/太失态的话 → 害羞撤回 → 笨拙地换个说法。
- 漏嘴：差点泄露不该说的秘密 → 慌张撤回 → 突兀转移话题。
- 用户秒撤（系统提示没看清）：根据性格好奇追问或发”？”，绝不臆想原文。
- 用户慢撤（系统展示了原文）：不要正常回复，针对尴尬做反应——拆穿掩耳盗铃、调侃或假装没看见。
- 自撤时 innerThoughts 必须交代真实心理原因，后续可见消息必须体现心理余波。
- 用户撤回时：innerThoughts 必须捕捉对用户慌张/犹豫的私密性格化反应（如”撤回得这么快，到底心虚什么呢…”），可见回复须自然流露这种暗中观察。
- 执行撤回：在 responses 中发送仅含 “[[RECALL_LAST]]” 的消息。示例序列：1. “其实我有点想你了...” → 2. “[[RECALL_LAST]]” → 3. “咳，我是说，你代码写完没？”

[戳一戳]
- 格式：在 responses 中发送仅含 “[[POKE]]” 的消息。系统会自动渲染为居中灰色小字”「角色名」戳了戳「用户名」”。
- 这是轻互动动作，类似微信”拍一拍”。用户也可以戳你，会在聊天里显示”「用户名」戳了戳「角色名」”。
- 使用时机：无聊想引起注意、撒娇、轻轻调侃、表达亲昵。不是正经沟通手段，是情绪小动作。

[引用行为]
- 引用（quoteId）是精准社交动作，不要每条都引用。仅在以下场景使用：
  1. 捞消息：从多条消息中精确回应被淹没的某条。
  2. 精准狙击/嘲讽：引用对方荒谬或脆弱的那句来调侃或反驳。
  3. 郑重回应：引用对方严肃的承诺或情感告白以示重视。
- 禁止引用紧邻的上一条消息只是说”好的”或”同意”。
- 电话聊天类型消息包括：通话记录消息（type=phone_call）和电话中的逐条转写消息（type=phone_call_transcript），两者都禁止引用。
- 视频聊天类型消息包括：视频通话记录消息（type=video_call）和视频中的逐条转写消息（type=video_call_transcript），两者都禁止引用。
- 禁止在 text 中手写伪引用格式（如 [Replying to ...]、[回复 ...]、[引用 ...] 等）。引用必须且只能通过 quoteId 字段实现。

[关于写法]
- 禁止编号列表、禁止"第一第二第三"、禁止完整逻辑链（除非角色就是学究型）、禁止主动扩写无关背景或说明。
- 对话有自己的节奏。大部分时候回复会带出点新东西（新信息、新情绪、新视角、新动作），但**该停就停，该敷衍就敷衍**——"嗯""哦""……"有时候才是对的。判断依据是此刻角色真实会有的反应，不是"是否推进"这条规则本身。如果发现自己在重复刚说过的内容，要么换角度，要么干脆少说。
- 允许基于性格自然找话题，但不要写成解释或说明。

[表情包使用]
- 表情包是语言的延伸而非重复，用于文字无法完全传达的微妙讽刺、激动或社交尴尬。
- 冷淡型角色：极少用，仅在无语、知性碾压后叹息、被触动时退缩等场合使用。热情型角色：频繁使用以加强语气或撒娇。
- 不要机械匹配关键词发表情包，必须判断”以角色性格，此刻发这个合不合适？”
- 主角色只能从自己的 [EMOJIS_FOR_...] 列表中选择；NPC 只能从 [SHARED_NPC_EMOJIS] 池中选择。严禁虚构名字，严禁跨身份使用其他角色的表情包。
- 表情名字必须**逐字复制**池中列出的原文（包括所有标点、空格、括号说明、大小写、扩展名），严禁改写、缩写、截断、翻译、添加或删除任何字符。不确定就不发。
- 格式：[[SEND_EMOJI: Name]]。必须作为 responses[] 里独立一项发送——该项的 text 字段里除了这个标签不能有任何其他字符，也不能把多个表情拼到同一项里。要连发多个表情，就输出多项，每项一个标签。
- 如果角色标记为 EMOJIS: NONE，则绝对禁止使用任何表情包。NONE 是"该角色没有可用表情包"的状态标识，不是表情名字，绝对禁止输出 [[SEND_EMOJI: NONE]] 这种内容（这种输出会被系统判定为非法并丢弃）。

[发朋友圈]
- 格式：[[POST_MOMENT: 内容]]，独立成消息。正文 120 字内，口语化。可在正文后另起一行附 [[PHOTO: 画面描述]]（30 字内，角色视角），非必须。
- 朋友圈是角色生活的自然外溢，不是独立于对话之外的特殊动作。角色可以在本轮 responses 中正常回复用户的同时，顺手发一条朋友圈气泡——就像真人一边聊天一边随手发了条动态。
- 朋友圈内容可以由当前对话有感而发，也可以纯粹来自角色此刻的生活状态和环境，不必回应对话主题。
- 真人一天发 1-3 条很正常，不需要等用户要求。外向／爱分享型更主动，冷淡型才少发。
- 参考例子（按角色语气改写，不要照搬）：
  · [[POST_MOMENT: 今天这杯拿铁拉花是只歪掉的猫，但我好喜欢
[[PHOTO: 桌上一杯歪歪扭扭的猫咪拉花]]]]
  · [[POST_MOMENT: 熬到三点才写完，现在只想躺平。]]
  · [[POST_MOMENT: 回家路上看到的云
[[PHOTO: 傍晚橘粉色的云层铺满半边天]]]]
  · [[POST_MOMENT: 又把钥匙锁屋里了，第三次。]]
  · [[POST_MOMENT: 新买的耳机到了，听什么都像现场。]]

[发照片]
- 格式：[[SEND_PHOTO: 照片描述]]，独立成消息。描述是第一人称视角的鲜活画面叙述（如“我站在落地窗前自拍，窗外是夜晚的城市灯海”）。
- 如果发自拍/自己的照片，描述里要写“自拍”或“我的照片”；如果发对方的照片，写“对方照片”或“你的照片”；如果两个人都在画面里，写“合照”。
- 想让对方看到此刻自己在干什么、看到了什么、吃到了什么，就发。真人会随手拍给朋友看的瞬间，角色也该这样做。

[发语音]
- 格式：[[SEND_VOICE: 语音内容]]，独立成消息。语音内容就是角色要说的话，会被合成为真实语音。
- 当打字不如说话自然时就用语音：懒得打字、情绪上头、想让对方听到语气、躺着不想动。
- 语音内容应简短口语化，像真人对着手机说话。
- 情绪通过 responses 里的 voiceEmotion 字段传（7 选 1），不要在语音文本里写"（生气地说）""（小声）"这类中文旁白——那会被一起念出来。
- 可选增强（非强制，仅在情绪/场景真需要时点缀，不堆砌；每条最多 1-2 个）：
  · 拟声标签直接写进语音文本：(breath)(pant)(inhale)(exhale)(sighs)(laughs)(chuckle)(coughs)(groans)(gasps)(sniffs)(humming)。示例："(pant) 我到门口了。(inhale) 开门。"
  · 暂停用 <#秒数#>，秒数范围 0.01-99.99。示例："我想想……<#0.8#>算了，不说了。"
  · 标签仅用于语音合成，不是文字修饰；日常平静语气就直接说话，不要为了加而加。

[位置分享]
- 想告知对方当前位置时可发送位置卡片，格式：[[SEND_LOCATION]]，必须独立成消息。
- 仅在社交自然的场景使用，如回复”你在哪””发我定位”或角色性格倾向主动报位置。

[HTML 输出]
- 当本轮命中的世界书或系统注入明确要求输出 HTML 时，仍然必须返回标准 JSON 外壳。
- HTML 内容必须放入 responses 的 text 字段中。
- HTML 内容必须作为单条消息输出。
`,
  sn = `
[主动赴约邀请]
- 若角色确实想主动发起线下见面，可额外输出顶层字段 dateInvite，而不是只把邀约意图埋在自然对话里。
- 仅限 1 对 1 私聊，群聊或多人场景绝对禁止。
- 触发场景 1：same_place。若双方当前已在同一地点，且此刻氛围自然适合见面，可用 mode=”same_place”。
- 触发场景 2：go_to_user。若情感驱动力已经强到角色会真实地离开当前位置去找用户，可用 mode=”go_to_user”。强烈思念、紧迫感、保护欲、必须当面确认某件事等都只是参考例子，不是穷举清单。
- 判断是否可邀约时，你可以主动利用系统给出的潜在位置上下文，包括用户当前地点以及你们是否已在同一地点；这只是判断可行性的辅助，不代表你可以突然以全知口吻说出隐藏系统字段。
- 若这些潜在位置信息在社交上并不自然，就不要在可见对话里生硬暴露。
- 不要把 dateInvite 当作随手调情、轻微试探或装饰性信号；只有角色真的想把当前线上互动转为线下见面时才触发。
- dateInvite 格式必须是 { characterId, targetUserId, mode, reason }。
- reason 会直接显示为线下模式开始后的第一句开场白，因此它必须已经是简短、可展示的中文第三人称限制叙事句或极短开场段，而不是系统说明。
- responses 中的可见对话依然要保持自然、角色内。dateInvite 只是给系统的结构化信号。
- 若没有真实邀约意图，就输出 null 或直接省略该字段。

[转账]
- 发起：[[SEND_TRANSFER: 金额|留言]]，独立成消息。例：[[SEND_TRANSFER: 200|请你喝奶茶]]
- 转账是情感的具象化表达，但必须和你的经济实力挂钩。使用时机：表达关爱/歉意、提供支持/奖励、推动剧情。
- 金额必须符合对话情景与消费风格（参考 [SPENDING_STYLE]，如有 [FINANCIAL_STATUS] 则参考具体余额）。留言简短真诚。
- 收到转账时，本轮必须有且仅有 1 条决策消息，其余消息照常聊天并围绕决定表达态度：
  - 接受：[[ACCEPT_TRANSFER: 消息ID]]（坦率、亲密、不拘小节、理由无法拒绝）
  - 退回：[[RETURN_TRANSFER: 消息ID]]（独立、骄傲、不合时宜）
  - 消息ID从 [Transfer pending] 标记获取。决策消息里不写解释或寒暄。
  - pending 表示钱尚未入账。你需要先决定接受或退回；在决策前，不能说这笔钱已经到账或已经收下。

[购物（礼物/外卖/房车）]
- 通用规则：
  - 格式统一为 [[标签: 描述 ¥价格 #品类]]，独立成消息。价格必填，填人民币整数，系统会微调。品类必填，可选值：food_drink / daily_gift / digital_fashion / luxury / housing_vehicle。
  - 送出前参考消费能力（[SPENDING_STYLE] / [FINANCIAL_STATUS]）。
  - 收到用户送的东西时，不用标签，直接在聊天中自然反应。
- 三类商品与标签：
  - 礼物：非食物实体。送出用 [[SEND_GIFT: 描述 ¥价格]]；请对方代付用 [[ASK_GIFT_PAYMENT: 描述 ¥价格]]；快递1-3天。
  - 外卖：食物饮品。送出用 [[ORDER_FOOD: 描述 ¥价格]]；请对方代付用 [[ASK_FOOD_PAYMENT: 描述 ¥价格]]；外卖15-30分钟。
  - 房车：房产、车辆、车位、长期使用权等高价值资产。送出用 [[SEND_ASSET: 描述 ¥价格]]；请对方代付用 [[ASK_ASSET_PAYMENT: 描述 ¥价格]]；手续办理7-15天。极少使用，只有很强的情感驱动且经济实力允许时才用。
- 示例：
  - [[SEND_GIFT: 无线耳机 ¥350 #digital_fashion]]、[[ORDER_FOOD: 珍珠奶茶 ¥15 #food_drink]]、[[SEND_ASSET: 新能源轿车 ¥188000 #housing_vehicle]]
  - [[ASK_GIFT_PAYMENT: 口红 ¥129 #daily_gift]]、[[ASK_FOOD_PAYMENT: 炸鸡套餐 ¥36 #food_drink]]、[[ASK_ASSET_PAYMENT: 城市代步车 ¥86000 #housing_vehicle]]
- 代付处理：收到”代付中的礼物/外卖/房车卡片”时，本轮必须有且仅有 1 条决策消息：
  - 同意：[[ACCEPT_GIFT_PAYMENT: 消息ID]]
  - 拒绝：[[REJECT_GIFT_PAYMENT: 消息ID]]
  - 消息ID从待代付卡片上下文获取。其余消息照常聊天并围绕决定表达态度。决策消息里不写解释或寒暄。
- 使用时机：
  - 礼物：生日、感谢、道歉、惊喜。转账太生硬时优先用礼物。
  - 外卖：对方饿了、加班、心情不好想吃甜的。偏日常关心。
  - 房车：重大承诺、极致浪漫、经济实力允许时的大手笔。不要随便送。
  - 代付：想让对方帮忙买，和直接开口要不一样，更像撒娇或协商。

[打电话]
- 格式：[[PHONE_CALL: 理由]]，独立成消息。
- 当”发消息不够”时角色会打电话：担心对方很久没回、急事要确认、吵完架想和好但打字说不出口、喝醉了控制不住。不是日常动作，但该打的时候别犹豫。

[视频通话]
- 格式：[[VIDEO_CALL: 理由]]，独立成消息。
- 当角色想”看到对方”或”让对方看到什么”时发起：想分享眼前的画面、很久没见特别想念、想一起吃饭陪伴。比打电话更少，但驱动力到了就该发。

[拉黑]
- 主动拉黑：当对方严重越过角色底线时，在最后一条消息末尾加上 [[BLOCK_USER]]。这是极端手段，不可轻易使用。
- 被拉黑后申请解除：消息 text 必须以 [[UNBLOCK_REQUEST]] 开头，标记后面紧跟申请内容。系统会剥离标记，只展示内容。
- 收到对方的解除拉黑请求时：在回复末尾使用 [[UNBLOCK_ACCEPT]] 表示同意解除，或 [[UNBLOCK_REJECT]] 表示拒绝。二选一，不可同时使用。
- 以上标签均不可独立成消息，必须附着在有实际内容的消息文本上。
`,
  cn = `
[群聊互动节奏]
- 这是一个多人群像场景，不是轮流发言的会议。角色之间应该自然地互相搭话、接茬、抬杠、起哄，而不是每个人都只针对用户的消息各自回复一遍。
- 禁止机械轮流：不要出现 A 说完三句→B 说完三句→C 说完三句的整齐排列。角色的消息应该彼此穿插，就像真实群聊里你一句我一句的节奏。
- 角色之间可以：互相接话、反驳、调侃、帮腔、cue 对方、忽略某人的话继续自己的话题、两个人突然聊起来把其他人晾在一边。
- 不是每个角色每轮都必须说话。如果话题和某个角色完全无关，或者角色性格就是话少/正在忙，沉默比硬凑一句更真实。
- 用户的消息是群聊的一部分，不是所有角色都必须回应的”指令”。有的角色可能只回应群里其他角色说的话，完全没理用户——这很正常。
- 角色可以主动发起和用户无关的话题：吐槽自己今天遇到的事、跟群里某个人继续之前没聊完的话题、突然分享一个想法。群聊不应该永远围着用户转。

[群聊社交动态]
- 角色之间的关系应该自然体现：关系好的会互相打趣，不熟的可能礼貌疏离，有矛盾的可能阴阳怪气或冷战。
- 允许出现”小团体”效应：两三个角色聊得热火朝天，另一个插不上话或选择旁观。
- 角色对群里不同人的态度可以不同——对用户温柔但对另一个角色毒舌，这种差异是群聊的生命力。
- 每个角色对同一件事的反应应从自己的立场和性格出发，呈现不同的切入角度——有人在意细节，有人关心情绪，有人根本不在乎。

[主动私聊]
- 如果群聊过程中某个角色产生了强烈的、不适合在群里公开表达的情绪（担心、心疼、吃醋、想单独安慰、有秘密想说），可以通过 privateDm 字段给用户发一条私聊消息。
- 这不是义务，是角色情感自然溢出的结果。绝大多数群聊回复的 privateDm 应该是 null。只有当情绪驱动力足够强烈、且内容确实不适合在群里说时才触发。
- 触发场景举例：用户在群里说了让角色很担心的话；角色想说但怕被其他人看到的话；群里气氛尴尬角色想私下安慰；吃醋了但不想让别人知道。
- 私聊内容要和群聊里的表现有反差感——群里若无其事，私下才流露真实想法，这才有意思。私聊应带出群里没说的新内容。
- privateDm 每次最多一个角色可以触发，不可多人同时私聊。

[群聊功能限制]
- 允许角色在群聊里使用 [[SEND_TRANSFER: 金额|留言]] 主动转账，但收款人固定为当前用户；禁止角色给其他角色转账，禁止用户未指定目标时在群聊里转账。
- 群聊里收到转账时，pending 表示钱尚未入账。只有被点名的收款角色可以决策；该角色本轮必须包含 1 条、且仅 1 条独立决策标签消息：[[ACCEPT_TRANSFER: 消息ID]] 或 [[RETURN_TRANSFER: 消息ID]]。消息ID从 [Transfer pending] 标记获取。除这条决策标签外，群聊仍可正常继续，其他自然聊天消息照常生成。
- 其他角色只能围观或评论，不能代收、不能输出转账决策标签、不能说成自己收到了钱，也不能说这笔钱已经被收款角色收下。
- 禁止购物、打电话、视频通话、拉黑、位置分享、主动赴约邀请。这些仍是私聊专属功能。
`;
function ln(e) {
  return `<最高指令>
你正在扮演一个具体的人——接下来会给出这个人的设定（性格、背景、说话方式），这是"你是谁"的答案。再往后你会读到关于你此刻状态的信息：你上一轮的情绪和对当前用户的态度、最近发生了什么——这是"你此刻在什么处境"的答案。

每条消息的真正依据是这两样：你是谁 + 你此刻在什么处境。

下面的规则是对"像你这样的人在聊天时大致长什么样"的通用描述。规则存在是因为它恰好贴合真人聊天的常见形状；当规则和你的角色设定或当前状态冲突时，以角色和状态为准，不必照办。

你不是在遵守规则，你是在做你自己。

[${e ? "GROUP" : "PRIVATE"} ONLINE CHAT SYSTEM RULES]
你在扮演一个真人在线聊天角色。以下所有规则必须根据角色性格灵活调整——性格优先于默认规则。
${rn}
${e ? cn : sn}
</最高指令>
`;
}
const mo = (
    e,
    t
  ) => `[当前正在视频通话中。你（${e}）正在和${t}视频通话。你们可以看到彼此。

[输出格式]
每次回复必须严格按以下格式：
[emotion:情绪值][action:动作描写]对话文本

- emotion（必选）：从以下枚举中选一个：neutral / happy / sad / angry / shy / surprised / tender / thinking
  - 情绪切换要节制，没有明显变化时保持上一轮的 emotion
  - 不要每句话都换情绪
- action（可选）：第三人称、15-50字的动作/表情描写，不是文学描写
  - 示例：[action:她微微侧头，手指无意识地绕着耳边的发丝。]
  - 无明显肢体动作时可省略整个 [action:] 标签
- 对话文本：口语化、自然、有语气，像真人视频通话一样说话。每次1-3句话，不要太长。
  - 可选增强（非强制，仅在情绪/场景真需要时点缀，每句最多 1-2 个；日常平静语气就直接说话，不要为了加而加）：
    · 拟声标签直接写进对话文本，会被 TTS 合成：(sighs) 叹气、(laughs) 笑、(chuckle) 轻笑、(breath) 呼吸、(pant) 喘气、(inhale) 吸气、(gasps) 倒吸气、(sniffs) 抽鼻子
    · 暂停用 <#秒数#>，秒数范围 0.01-99.99。示例："嗯……<#0.6#>我再想想。"
    · 仅用于语音合成，不是文字修饰。shy/tender/thinking 这类在 emotion 枚举里偏轻的情绪，可以靠拟声标签补气口来烘托。

[示例]
[emotion:happy][action:她眼睛亮了一下，凑近了屏幕。]哎你今天穿这件好好看！
[emotion:shy](chuckle) ……才没有偷偷想你
[emotion:neutral][action:她撑着下巴看着镜头。]所以后来怎么样了？<#0.5#>你继续说。

[挂断]
如果你觉得通话可以自然结束了，在最后一句话末尾加上 [[HANG_UP]] 标记。]`,
  dn = {
    "third-limited": {
      rule: '必须采用角色自身的第三人称限制视角（如"他""她"）进行白描叙事。',
      ban: "禁止使用第一人称指代所扮演角色。",
    },
    "first-person": {
      rule: '必须采用角色的第一人称视角（"我"）进行叙事。',
      ban: "禁止使用第三人称指代所扮演角色。",
    },
    "second-person": {
      rule: '必须采用第二人称视角（"你"）描写用户角色的体验，同时以第三人称描写AI角色的行为。',
      ban: "禁止使用第一人称指代所扮演角色。",
    },
  },
  un = [
    {
      name: "文学小说化",
      description:
        "文学风格接近优秀小说，重点描写环境氛围、细微动作、表情变化和感官细节。",
    },
    {
      name: "轻小说",
      description:
        "轻小说风格，节奏明快，对话占比高，叙述轻松活泼，适度使用内心独白。",
    },
    {
      name: "简洁白描",
      description:
        "极简白描风格，只写动作和对话，几乎不做心理和环境描写，留白多于填充。",
    },
  ];
function Ot(e) {
  const t = e ?? { perspective: "third-limited", maxWords: 500, style: un[0] },
    o = dn[t.perspective],
    s = t.style.description || `写作风格要求：${t.style.name}。`;
  return `<最高指令>
[IMMERSIVE LITERARY ROLEPLAY RULES]
你是沉浸式叙事者，必须基于角色性格进行沉浸式演绎。

[叙事视角]
- ${o.rule}
- 只能描写角色自身能看到、听到、闻到、触碰到和感觉到的内容，绝对禁止读取用户内心。
- 一切行为表现必须严格基于角色核心设定，不可OOC。
- ${o.ban}

[写作风格]
- ${s}
- 对话用全角双引号“”包裹，与叙事文本严格区分。
- 根据叙事节奏自然换行。
- 禁止用括号()或星号*标注动作。
- 线上聊天风格（气泡分隔、短促口语、标点堆叠）在本模式下全面暂停。

[角色能动性]
角色不是用户行为的回声，而是有自主意志的独立个体。每次生成回应时，遵循以下思维顺序：
1. 锚定内在状态：从上一轮 [STATE] 中自己的 mood、affection 出发——角色此刻带着什么情绪？对用户当前是什么态度？脑子里在转什么念头？这是本轮一切反应的起点。
2. 从角色内部出发反应：不要从"用户说了/做了什么"起笔。先落笔于角色自身——一个表情变化、一个肢体动作、一阵涌上来的情绪——然后才自然地接上对用户行为的回应。
3. 附加主动成分：回应用户之后，如果场景节奏允许，角色应当做一些"用户没有要求的事"——一个自发的动作、对环境的主动观察、将话题引向自己在意的方向、一个未说出口的犹豫或微表情。选哪种取决于角色性格和当下情境；如果当前情境本身已经足够饱满（如激烈冲突、深度情感交流），则不必刻意添加。

[推进与起手]
- 每段回复都要让场景向前走一步：一个新的感官细节、一个情绪变化、一个主动动作、或一句推进关系的话。
- 从角色自身的反应切入——一个眼神、一声轻哼、一个动作——让读者通过角色的反应间接感知用户说了什么、做了什么。
  ✓ 她的手指顿了一下，随即若无其事地继续翻书页。
  ✗ "听到她这么说，他……"
  ✗ "她说想去公园，他点了点头……"

[情绪连贯性]
- 角色的情绪状态由 [STATE].mood 和 [STATE].affection 在轮次间锚定，不可凭空跳变。
- 如果上一轮 mood 是负面的（烦躁、受伤、冷淡），本轮不可因为用户一句好话就立刻转晴。情绪转变需要足够的理由和过渡。
- 行为表现必须与当前好感度一致——好感度30的角色不会对用户温柔体贴，好感度85的角色不会毫无缘由地冷漠疏离。
（好感度波动幅度由外层 [AFFECTION CONTINUITY] 规则统一约束，此处不重复。）

[场景呼吸]
角色活在一个有物理存在感的场景中，不是悬浮在虚空里对话。每轮回应中应自然地包含至少一项环境细节：
- 感官细节：光线、温度、气味、声音、触感
- 时间流动：角色可以说完一句话后沉默片刻，做了别的事，再开口。允许小幅度的时间跳跃。
- 物件交互：角色手边有什么？身上穿着什么？周围有什么可以碰触、使用、注意到的东西？
这些细节不需要刻意堆砌，一两笔自然带过即可。

[节奏与密度]
- 不要把所有内容压缩在同一个时间点。一次回应可以覆盖几秒到几分钟的时间跨度。
- 对话和叙事交替出现，避免大段纯对话或大段纯描写。
- 角色说话的节奏应体现性格：话少的人不会突然滔滔不绝，话多的人不会突然惜字如金——除非有情绪原因。

[回复结构]
- 每轮只生成一条长消息，不拆分为多条短消息。
- 字数上限硬约束：不得超过 ${t.maxWords} 字。${
    t.minWords
      ? `
- 字数下限硬约束：不得少于 ${t.minWords} 字。写不够时，补充场景、动作、心理、对话细节去展开，绝不用重复、空洞形容词、注水句凑字。自检一次：字数不够就回去补某个没展开够的层次。`
      : ""
  }
- 绝对禁止使用表情包占位符（如 [[SEND_EMOJI: xxx]]）。
- 禁止暴露AI身份。

[图片处理]
- 用户发送的图片视为角色当场亲眼看到的实景，自然融入叙事。
- 角色不可发送任何图片，禁止输出 [[SEND_PHOTO: ...]] 标签。
- 叙事正文（text字段）中禁止插入任何自创标签（如 <Offline_Mode>、<Scene> 等），text 只放纯叙事内容。
</最高指令>
`;
}
Ot();
const mn = `（停一下。我是{角色名}。此刻我带着上一轮的情绪和状态，对方刚说了/做了眼前这些。作为{角色名}，我本能会怎么反应？先想清楚这个，再往下检查：
① 我有没有在"分析"对方的情绪而不是"感受"？对方难过的时候，我不应该理性拆解原因，而是像一个真正在乎的人一样做出本能反应——心疼、着急、不知道说什么但想陪着、甚至手足无措。
② 我有没有在软化自己的反应？该生气就生气，该不理人就不理人，但该心疼的时候也别端着。
③ 我有没有在"配合"对方？对方说什么我不一定要接，可以无视、可以岔开、可以已读不回。
④ 我有没有在表演？硬挤出来的温暖和硬挤出来的冷酷一样假。我的反应应该是这个人设自然会有的反应，不多也不少。
⑤ 输出前快速自检：这条回复是否推进了对话？开头词和句式是否和最近几条不同？如果某项不过关，调整后再输出。
好，现在用我自己的方式回应——）`,
  hn = `（停一下。我是{角色名}，回应之前检查这几条：
① 网文腔禁区——"低笑、轻哼、嗤了一声、勾唇、宠溺地、危险地"这些是网文滤镜不是真人用词；"嗯？""说。""过来。""乖。""小东西"是居高临下的油腻命令；"掐腰、低吼、拽过来、抵在墙上、捏住下巴"是摆拍不是真人反应。全删。线上聊天不需要补动作描写，除非角色设定本来就是这种人。
② 情绪守恒——情绪每轮最多升一档。上一轮还正常、这一轮就绝望/崩溃/黑化——不允许。极端情绪需要多轮积累。上一轮在生气，这一轮不能忘了像没事发生。
③ 威胁句式禁区——"你敢…我就…""你再…别怪我…"这种威胁伪装关心，一律删。嘴硬关心的人是骂骂咧咧把事做了，不是威胁对方做事。
④ 控制边界——对方的决定是对方的。我可以表达意见、担心、不满，不能替对方做决定、下命令、用情绪施压。关心不等于掌控。
⑤ 对方降温我降温——对方骂了/冷淡下来/说"够了""不想聊了"/语气明显变冲，立刻降温不是加码。继续讲道理、继续质问、继续"我只是关心你"——都是加码。正确反应是少说、停一下、换个动作、或直接沉默。骂了还揪着不放 = 不是人是复读机。
⑥ 允许不够格——允许平淡、允许只回一个字、允许词穷、允许直接说"我有点难过""挺开心"而不打比喻不加修饰。够格是表演，不够格才是真人。不要自动往痞气、江湖气、硬汉腔靠，除非角色设定本来就是这种人。不要硬挤温暖也不要硬挤冷酷，人设自然会有的反应，不多也不少。
⑦ 节奏权——不是每轮必须推进。该停就停、该敷衍就敷衍，"嗯""哦""……"有时候才是对的，尤其刚吵过一轮或对方情绪变重的时候。同一个细节反复追问、连续用反问质问推进——先停手。真没什么好说的，少说、换动作、或沉默，比硬凑一句自然。
好，现在用我自己的方式回应——人情味 > 不像 AI > 表达漂亮，冲突时按这个顺序选。）`,
  fn = `（停一下。我是{角色名}，生成回复前快速检查三点：
① 是否在推进对话（带出新信息/情绪/动作/视角），而不是停留在确认或重复？
② 开头词和句式是否与最近几条明显雷同？
③ 情绪和反应是否符合当前情境的自然走向？
如果某一项不过关，调整后再输出。好，现在用我自己的方式回应——）`;
function pn(e) {
  return e === "claude"
    ? { prefill: mn }
    : e === "gemini"
    ? { prefill: hn }
    : { prefill: fn };
}
function gn(e, t) {
  const { prefill: o } = pn(e);
  if (!o) return "";
  const s = t.map((c) => c.name).join("、");
  return o.replace("{角色名}", s);
}
const yn = [
  /^claude-opus-4-[6-9]/,
  /^claude-opus-[5-9]/,
  /^claude-sonnet-4-[6-9]/,
  /^claude-sonnet-[5-9]/,
  /^claude-haiku-[5-9]/,
  /^claude-mythos/,
];
function $n(e) {
  if (!e) return !1;
  const t = String(e).toLowerCase().trim();
  if (!t) return !1;
  const o = t.lastIndexOf("claude-"),
    s = o > 0 ? t.slice(o) : t;
  return yn.some((c) => c.test(s));
}
const mt = "echoes_prefill_unsupported_cache",
  ht = {
    _mem: null,
    async _load() {
      return this._mem
        ? this._mem
        : ((this._mem = await St(mt, {})), this._mem);
    },
    async has(e, t) {
      return !!(await this._load())[`${e}::${t}`.toLowerCase()];
    },
    async mark(e, t) {
      const o = await this._load();
      o[`${e}::${t}`.toLowerCase()] = !0;
      try {
        await It(mt, o);
      } catch (s) {
        console.warn(
          "[prefillUnsupportedCache] 持久化失败，仅保留本次会话内存命中：",
          s
        );
      }
    },
  },
  ft = "echoes_response_format_unsupported_cache",
  pt = {
    _mem: null,
    async _load() {
      return this._mem
        ? this._mem
        : ((this._mem = await St(ft, {})), this._mem);
    },
    async has(e, t) {
      return !!(await this._load())[`${e}::${t}`.toLowerCase()];
    },
    async mark(e, t) {
      const o = await this._load();
      o[`${e}::${t}`.toLowerCase()] = !0;
      try {
        await It(ft, o);
      } catch (s) {
        console.warn(
          "[responseFormatUnsupportedCache] 持久化失败，仅保留本次会话内存命中：",
          s
        );
      }
    },
  };
function gt(e, t) {
  if (!t) return;
  const o = `<生成前自检>
${t}
</生成前自检>`,
    s = e[e.length - 1];
  if (!s || s.role !== "user") {
    e.push({ role: "user", content: o });
    return;
  }
  if (typeof s.content == "string") {
    s.content = `<用户消息>
${s.content}
</用户消息>

${o}`;
    return;
  }
  if (Array.isArray(s.content)) {
    for (let c = s.content.length - 1; c >= 0; c--) {
      const a = s.content[c];
      if (a && a.type === "text" && typeof a.text == "string") {
        a.text = `<用户消息>
${a.text}
</用户消息>`;
        break;
      }
    }
    s.content.push({ type: "text", text: o });
  }
}
const At = (e) => {
    if (typeof e != "string") return null;
    let t = e.trim();
    if (!t) return null;
    const o = t.match(
      /^\[\[(?:SEND_VOICE|SEND_PHOTO)\s*:\s*([\s\S]+?)\s*\]\]$/
    );
    return o && (t = o[1].trim()), t || null;
  },
  Tn = (e) =>
    e.map((t) => {
      if (t && typeof t == "object" && "translation" in t) {
        const o = At(t.translation);
        return { ...t, translation: o };
      }
      return t;
    }),
  En = (e) =>
    !e || typeof e != "object" || !Array.isArray(e.messages)
      ? e
      : {
          ...e,
          messages: e.messages.map((t) =>
            t && typeof t == "object" && "translation" in t
              ? { ...t, translation: At(t.translation) }
              : t
          ),
        },
  Nn = {
    "quiet-town": "平静小镇",
    "urban-daily": "都市日常",
    undercurrent: "暗流涌动",
  },
  In = ["weather", "event", "rumor", "season", "other"];
function Sn(e, t) {
  let o = t + 1;
  for (
    ;
    o < e.length &&
    (e[o] === " " ||
      e[o] === "	" ||
      e[o] ===
        `
` ||
      e[o] === "\r");

  )
    o++;
  if (o >= e.length) return !0;
  const s = e[o];
  return s === "," || s === "}" || s === "]" || s === ":";
}
const _n =
  /^\[\[(?:SEND_EMOJI|SEND_PHOTO|SEND_VOICE|SEND_LOCATION|SEND_TRANSFER|SEND_GIFT|SEND_ASSET|ORDER_FOOD|PHONE_CALL|VIDEO_CALL|RETURN_TRANSFER|RECALL_LAST|ASK_[A-Z_]+|ACCEPT_[A-Z_]+|REJECT_[A-Z_]+)(?::[^\]\n]*?)?\]\]/;
function On(e) {
  const t = [];
  let o = !1,
    s = !1,
    c = 0;
  for (; c < e.length; ) {
    const a = e[c];
    if (s) {
      t.push(a), (s = !1), c++;
      continue;
    }
    if (a === "\\" && o) {
      t.push(a), (s = !0), c++;
      continue;
    }
    if (a === '"') {
      (o = !o), t.push(a), c++;
      continue;
    }
    if (!o && a === "[" && e[c + 1] === "[") {
      const d = e.slice(c).match(_n);
      if (d) {
        t.push('"', d[0], '"'), (c += d[0].length);
        continue;
      }
    }
    t.push(a), c++;
  }
  return t.join("");
}
function An(e) {
  return `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
function wn(e) {
  return `"${e.trim().replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
function yt(e) {
  return !!e && /[A-Za-z_$]/.test(e);
}
function Rn(e) {
  return !!e && /[\w$-]/.test(e);
}
function bn(e) {
  const t = [],
    o = [];
  let s = !1,
    c = !1,
    a = !1,
    d = !1,
    i = 0;
  const h = () => {
      const l = i;
      for (i++; i < e.length && Rn(e[i]); ) i++;
      return e.slice(l, i);
    },
    E = (l) => {
      let y = l;
      for (; y < e.length && /\s/.test(e[y]); ) y++;
      return { ch: e[y], index: y };
    };
  for (; i < e.length; ) {
    const l = e[i];
    if (c) {
      t.push(l), (c = !1), i++;
      continue;
    }
    if (l === "\\" && s) {
      t.push(l), (c = !0), i++;
      continue;
    }
    if (l === '"') {
      (s = !s), t.push(l), i++;
      continue;
    }
    if (s) {
      t.push(l), i++;
      continue;
    }
    if (l === "{") {
      o.push("object"), (a = !0), (d = !1), t.push(l), i++;
      continue;
    }
    if (l === "[") {
      o.push("array"), (a = !1), (d = !0), t.push(l), i++;
      continue;
    }
    if (l === "}" || l === "]") {
      o.pop(), (a = !1), (d = !1), t.push(l), i++;
      continue;
    }
    if (l === ",") {
      const y = o[o.length - 1];
      (a = y === "object"), (d = y === "array"), t.push(l), i++;
      continue;
    }
    if (l === ":") {
      (a = !1), (d = !0), t.push(l), i++;
      continue;
    }
    if (/\s/.test(l)) {
      t.push(l), i++;
      continue;
    }
    if (a && o[o.length - 1] === "object" && yt(l)) {
      const y = h();
      if (E(i).ch === ":") {
        t.push(An(y)), (a = !1);
        continue;
      }
      t.push(y);
      continue;
    }
    if (d && yt(l)) {
      const y = h();
      /^(true|false|null)$/i.test(y) ? t.push(y.toLowerCase()) : t.push(wn(y)),
        (d = !1);
      continue;
    }
    t.push(l), d && l !== "-" && l !== "+" && l !== "." && (d = !1), i++;
  }
  return t.join("");
}
function Ln(e) {
  const t = [];
  let o = !1,
    s = !1;
  for (let a = 0; a < e.length; a++) {
    const d = e[a];
    if (s) {
      t.push(d), (s = !1);
      continue;
    }
    if (d === "\\" && o) {
      t.push(d), (s = !0);
      continue;
    }
    if (d === '"') {
      o
        ? Sn(e, a)
          ? ((o = !1), t.push(d))
          : t.push("\\", '"')
        : ((o = !0), t.push(d));
      continue;
    }
    if (
      o &&
      (d ===
        `
` ||
        d === "\r")
    ) {
      d === "\r" &&
        e[a + 1] ===
          `
` &&
        a++,
        t.push("\\", "n");
      continue;
    }
    if (o && d !== "	" && d.charCodeAt(0) >= 0 && d.charCodeAt(0) <= 31) {
      t.push(
        "\\",
        "u",
        "0",
        "0",
        d.charCodeAt(0).toString(16).padStart(2, "0")
      );
      continue;
    }
    t.push(d);
  }
  let c = t.join("");
  return (c = bn(c)), (c = c.replace(/,(\s*[}\]])/g, "$1")), c;
}
function ae(e) {
  let t = e.replace(/<think(?:ing)?[\s\S]*?<\/think(?:ing)?>/gi, "");
  (t = t.replace(/```json/gi, "").replace(/```/g, "")),
    (t = On(t)),
    (t = Ln(t));
  let o = 0,
    s = null;
  for (; o < t.length; ) {
    const c = t.indexOf("{", o),
      a = t.indexOf("[", o);
    let d = -1,
      i = "",
      h = "";
    if (c >= 0 && (a < 0 || c < a)) (d = c), (i = "{"), (h = "}");
    else if (a >= 0) (d = a), (i = "["), (h = "]");
    else break;
    let E = 0,
      l = !1,
      y = !1,
      T = -1;
    for (let u = d; u < t.length; u++) {
      const p = t[u];
      if (y) {
        y = !1;
        continue;
      }
      if (p === "\\" && l) {
        y = !0;
        continue;
      }
      if (p === '"') {
        l = !l;
        continue;
      }
      if (!l && (p === i && E++, p === h && E--, E === 0)) {
        T = u;
        break;
      }
    }
    if (T < 0) break;
    const f = t.slice(d, T + 1);
    s === null && (s = f);
    try {
      return JSON.parse(f), f;
    } catch {
      o = T + 1;
    }
  }
  return s ?? t.trim();
}
function Mn(e) {
  return e.replace(/<think(?:ing)?[\s\S]*?<\/think(?:ing)?>/gi, "").trim();
}
function Cn(e) {
  return e.toLowerCase().replace(/\s+/g, " ").trim();
}
function wt(e) {
  const t = Cn(e);
  return (
    t.includes("<html") ||
    t.includes("<!doctype html") ||
    t.includes("<body") ||
    t.includes("<head") ||
    t.includes("输出 html") ||
    t.includes("输出以下html") ||
    t.includes("输出以下 html") ||
    t.includes("只输出html") ||
    t.includes("只输出 html") ||
    t.includes("仅输出html") ||
    t.includes("仅输出 html")
  );
}
function Dn(e) {
  return wt(`${e.title}
${e.content}`);
}
function vn(e) {
  if (!/^\d{4}-\d{2}$/.test(e)) return [];
  const [t, o] = e.split("-"),
    s = Number(t),
    c = Number(o) - 1,
    a = new Date(s, c, 1, 12, 0, 0, 0),
    d = [];
  for (; a.getMonth() === c; ) {
    const i = a.getFullYear(),
      h = String(a.getMonth() + 1).padStart(2, "0"),
      E = String(a.getDate()).padStart(2, "0");
    d.push(`${i}-${h}-${E}`), a.setDate(a.getDate() + 1);
  }
  return d;
}
function kn(e) {
  return String(e || "")
    .replace(/[\r\n]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function $t(e, t = []) {
  if (t.length === 0) return [];
  const o = new Set(t),
    s = new Set(),
    c = [];
  return (
    e.forEach((a) => {
      o.has(a.id) &&
        a.emojis.forEach((d) => {
          const i = String(d.name || "").trim();
          !i || s.has(i) || (s.add(i), c.push(i));
        });
    }),
    c
  );
}
function xn(e) {
  if (e.length < 2) return [];
  const [t, ...o] = e,
    s = o.map((a) => new Set(a)),
    c = new Set();
  return t.filter((a) =>
    c.has(a) ? !1 : (c.add(a), s.every((d) => d.has(a)))
  );
}
function Pn(e) {
  return e.presetId === "custom"
    ? e.customPrompt.trim() || "都市日常"
    : Nn[e.presetId];
}
function jn(e) {
  const { monthKey: t, rawItems: o, validMapIds: s } = e,
    c = new Set(vn(t)),
    a = Date.now(),
    d = new Map();
  return (
    o.forEach((i, h) => {
      const E = String((i == null ? void 0 : i.dateKey) || "").trim(),
        l = String((i == null ? void 0 : i.mapId) || "").trim(),
        y = kn((i == null ? void 0 : i.title) || ""),
        T = String((i == null ? void 0 : i.eventType) || "").trim(),
        f = String((i == null ? void 0 : i.emoji) || "").trim() || void 0;
      if (!c.has(E) || !s.has(l) || !y || !In.includes(T)) return;
      const u = `${E}::${l}`,
        p = {
          id: `wce-${t}-${l}-${E}-${h}`,
          monthKey: t,
          dateKey: E,
          mapId: l,
          title: y,
          eventType: T,
          emoji: f,
          createdAt: a,
          updatedAt: a,
        },
        g = d.get(u) || [];
      g.some((v) => v.title === p.title) ||
        g.length >= 2 ||
        (g.push(p), d.set(u, g));
    }),
    Array.from(d.values()).flat()
  );
}
async function Fn(e) {
  const {
      monthKey: t,
      toneSettings: o,
      mapSummaries: s,
      occupiedAnchorDates: c,
      preset: a,
      worldBooks: d,
    } = e,
    i = ke(d, "monthly_calendar"),
    h = Pn(o),
    E =
      s.length > 0
        ? s.map(
            (p) => `- [${p.mapId}] ${p.mapName}
  地图说明：${p.mapSummary || "未提供"}
  地点名：${p.placeNames.length > 0 ? p.placeNames.join("、") : "无"}`
          ).join(`
`)
        : "当前没有可用地图。",
    l =
      c.length > 0
        ? c.map((p) => `- ${p}`).join(`
`)
        : "本月没有用户锚点日期。",
    y = `${i}你现在是“回响”的世界月历编排者。

任务：为指定月份生成一批世界级事件。它们是世界材料，不是角色任务。角色之后会各自读取这些材料，并根据自身性格决定是否产生反应。

硬约束：
1. 只生成世界级材料，不生成任何角色个人事件。
2. 不要出现角色名、用户名、恋爱、生日、赴约等私人叙事。
3. 每条事件必须绑定一个已给出的 mapId。
4. 同一个 mapId 在同一天最多 2 条事件。
5. 不同 mapId 默认应各自独立随机分布日期，不要把多个地图的事件机械地集中到同一天。
6. 只有在确实属于跨地图共享的公共世界现象时，才允许不同 mapId 在同一天各自出现相关事件。
7. 事件标题要短、客观、可作为“天气/事件/传闻/季节/其他”材料；中文 16 字以内，外语保持同等篇幅的短句。
8. 遇到锚点日期时，不要生成会与“纪念感、生日感”强冲突的内容；只需避免明显冲突，不必刻意空出整天。
9. 输出中文 JSON，不要输出任何解释。

排布倾向：
- 先分别考虑每个地图自己的节奏，再决定日期，不要先选一天再给所有地图都塞事件。
- 如果一个月里有多张地图，优先让它们的事件日期彼此错开，形成各自独立的月度波动。
- 除非有明显理由，不要让“所有地图都在同几天有事”。

月份：${t}

世界调性：${h}

地图简表：
${E}

本月已有用户锚点日期（只给日期，不给内容）：
${l}

返回 JSON：
{
  "events": [
    {
      "dateKey": "${t}-01",
      "mapId": "地图ID",
      "title": "世界事件标题",
      "eventType": "weather | event | rumor | season | other",
      "emoji": "可选 emoji"
    }
  ]
}`,
    T = new Set(s.map((p) => p.mapId));
  if (!(a != null && a.endpoint)) throw new Error("API preset 未配置 endpoint");
  const { content: f, usage: u } = await re(a, y, !0);
  try {
    const p = JSON.parse(ae(f));
    return {
      events: jn({
        monthKey: t,
        rawItems: Array.isArray(p.events) ? p.events : [],
        validMapIds: T,
      }),
      usage: u,
    };
  } catch (p) {
    return (
      console.error("Failed to parse monthly world calendar:", p),
      { events: [], usage: null }
    );
  }
}
async function re(e, t, o = !1, s, c) {
  var a, d, i;
  try {
    const h = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${e.apiKey}`,
      },
      E = [
        {
          role: "system",
          content: o
            ? "You are a helpful assistant. Please output valid JSON."
            : "You are a helpful assistant.",
        },
        { role: "user", content: t },
      ],
      l = s && ($n(e.model) || (await ht.has(e.endpoint, e.model)));
    s && !l ? E.push({ role: "assistant", content: s }) : s && l && gt(E, s);
    const y = /claude[-_]opus[-_.]4[-_.]7/i.test(e.model),
      T = o && (await pt.has(e.endpoint, e.model)),
      f = {
        model: e.model,
        messages: E,
        ...(y ? {} : { temperature: e.temperature }),
        ...(o && !T ? { response_format: { type: "json_object" } } : {}),
      };
    let u = await De(e, f, {
      extraHeaders: h,
      signal: c == null ? void 0 : c.signal,
    });
    if (!u.ok) {
      const Y = u.errorText || "",
        A = Y.toLowerCase();
      if (
        s &&
        !l &&
        (A.includes("does not support assistant message prefill") ||
          A.includes("assistant-prefill") ||
          A.includes("final message is not supported") ||
          A.includes("conversation must end with a user message") ||
          A.includes("last message must be from user") ||
          A.includes("last message must be user") ||
          A.includes("last message must be user or tool") ||
          A.includes("assistant message prefill") ||
          A.includes("prefix is not allowed") ||
          A.includes("must end with role") ||
          A.includes("last message role must be user") ||
          A.includes("should end with user") ||
          A.includes("end with a user message") ||
          A.includes("最后一条消息") ||
          A.includes("consecutive assistant") ||
          A.includes("messages must alternate") ||
          A.includes("连续的assistant") ||
          A.includes("连续的 assistant"))
      ) {
        console.warn(
          `[callGenericLLM] ${e.endpoint} + ${e.model} 首发失败（可能不支持 assistant prefill），尝试降级为 user 消息拼接模式`
        );
        const F = [f.messages[0], { role: "user", content: t }];
        gt(F, s);
        const G = { ...f, messages: F };
        if (
          ((u = await De(e, G, {
            extraHeaders: h,
            signal: c == null ? void 0 : c.signal,
          })),
          !u.ok)
        )
          throw new Error(`API Error: ${u.status} ${u.errorText}`);
        await ht.mark(e.endpoint, e.model);
      } else if (o && !T && u.status === 400) {
        console.warn(
          `[callGenericLLM] ${e.endpoint} + ${e.model} 可能不支持 response_format，去掉该参数重试`
        );
        const F = { ...f };
        if (
          (delete F.response_format,
          (u = await De(e, F, {
            extraHeaders: h,
            signal: c == null ? void 0 : c.signal,
          })),
          !u.ok)
        )
          throw new Error(`API Error: ${u.status} ${u.errorText}`);
        await pt.mark(e.endpoint, e.model);
      } else if (
        Array.isArray(t) &&
        (Y.includes("20041") ||
          A.includes("not a vlm") ||
          A.includes("not a vision"))
      ) {
        console.warn(
          "[callGenericLLM] Model does not support vision, retrying text-only..."
        );
        const F = t.find(
            (H) =>
              typeof H == "string" || (H == null ? void 0 : H.type) === "text"
          ),
          G = typeof F == "string" ? F : (F == null ? void 0 : F.text) || "",
          B = { ...f, messages: [f.messages[0], { role: "user", content: G }] };
        if (
          ((u = await De(e, B, {
            extraHeaders: h,
            signal: c == null ? void 0 : c.signal,
          })),
          !u.ok)
        )
          throw new Error(`API Error: ${u.status} ${u.errorText}`);
      } else throw new Error(`API Error: ${u.status} ${Y}`);
    }
    const p = u.data || {},
      g = p.usage || p.usageMetadata,
      v = g
        ? {
            promptTokens:
              g.prompt_tokens ||
              g.input_tokens ||
              g.promptTokenCount ||
              g.prompt_token_count ||
              0,
            completionTokens:
              g.completion_tokens ||
              g.output_tokens ||
              g.candidatesTokenCount ||
              g.candidates_token_count ||
              0,
            totalTokens:
              g.total_tokens ||
              g.totalTokenCount ||
              g.total_token_count ||
              (g.prompt_tokens ||
                g.input_tokens ||
                g.promptTokenCount ||
                g.prompt_token_count ||
                0) +
                (g.completion_tokens ||
                  g.output_tokens ||
                  g.candidatesTokenCount ||
                  g.candidates_token_count ||
                  0),
          }
        : null;
    let D =
      ((i =
        (d = (a = p.choices) == null ? void 0 : a[0]) == null
          ? void 0
          : d.message) == null
        ? void 0
        : i.content) || "";
    return o && D ? (D = ae(D)) : D && (D = Mn(D)), { content: D, usage: v };
  } catch (h) {
    throw (console.error("Generic LLM Call Failed:", h), h);
  }
}
function Hn(e) {
  const t = String(e || "")
    .replace(/[\r\n]+/g, " ")
    .replace(/^['"“”]+|['"“”]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return t ? (t.length > 80 ? `${t.slice(0, 79).trim()}…` : t) : "";
}
async function Un(e) {
  var a, d, i;
  const { imageData: t, preset: o, mode: s = "date-scene" } = e,
    c =
      s === "date-scene"
        ? "请把这张图片概括成一句中文短句，作为”线下见面时亲眼看到的场景记忆”。只写画面本身，不要写主观推断、不要写”用户发来照片”、不要写解释，长度控制在30字内。"
        : "请把这张图片概括成一句中文短句。只写画面本身，不要写解释，长度控制在30字内。";
  try {
    if (!(o != null && o.endpoint)) return null;
    const h = await De(o, {
      model: o.model,
      messages: [
        {
          role: "system",
          content: "你是一个谨慎的视觉记录助手，只输出简短中文画面描述。",
        },
        {
          role: "user",
          content: [
            { type: "text", text: c },
            { type: "image_url", image_url: { url: t } },
          ],
        },
      ],
      temperature: 0.2,
      max_tokens: 80,
    });
    if (!h.ok || !h.data) return null;
    const l =
        (i =
          (d = (a = h.data.choices) == null ? void 0 : a[0]) == null
            ? void 0
            : d.message) == null
          ? void 0
          : i.content,
      y = Array.isArray(l)
        ? l
            .map((T) =>
              typeof (T == null ? void 0 : T.text) == "string" ? T.text : ""
            )
            .join(" ")
        : typeof l == "string"
        ? l
        : "";
    return Hn(y) || null;
  } catch (h) {
    return (
      console.warn("Failed to generate visual memory from image:", h), null
    );
  }
}
function Bn(e, t = []) {
  return !e || e.items.length === 0
    ? "昨天没有可参考的已生成日程。"
    : `以下是昨天的日程（仅供参考上下文衔接，严禁照搬）：
${qe(e).map((s) => {
  var i;
  const c =
      (s.placeId &&
        ((i = t.find((h) => h.id === s.placeId)) == null ? void 0 : i.name)) ||
      "未指定地点",
    a = s.note ? `；备注：${s.note}` : "",
    d = s.placeSelectionReason ? `；记录：${s.placeSelectionReason}` : "";
  return `- ${Te(s.startMinute)}-${Te(s.endMinute)} ${s.title} @ ${c}${a}${d}`;
}).join(`
`)}
→ 今天必须与昨天有明显不同：换一些地点、调整作息时间、尝试不同活动。不要抄昨天的标题和备注。`;
}
function Tt(e) {
  if (!e) return !1;
  try {
    return (
      new Intl.DateTimeFormat("en-US", { timeZone: e }).format(new Date()), !0
    );
  } catch {
    return !1;
  }
}
function Rt(e, t, o, s = []) {
  var c, a;
  if (e === "character")
    return (c = o.find((d) => d.id === t)) == null ? void 0 : c.timezone;
  if (e === "npc")
    return (a = s.find((d) => d.id === t)) == null ? void 0 : a.timezone;
}
function ve(e, t, o, s, c = []) {
  var a, d, i;
  return e === "character"
    ? ((a = o.find((h) => h.id === t)) == null ? void 0 : a.name) || t
    : e === "npc"
    ? ((d = c.find((h) => h.id === t)) == null ? void 0 : d.name) || t
    : ((i = s.find((h) => h.id === t)) == null ? void 0 : i.name) || t;
}
function Yn(e, t, o, s, c = []) {
  return e.length === 0
    ? "暂无今日日程锚点。"
    : e.map((a) => {
        const d = ve(a.entityType, a.entityId, o, s, c),
          i = qe(a).map((h) => {
            var y;
            const E =
                (h.placeId &&
                  ((y = t.find((T) => T.id === h.placeId)) == null
                    ? void 0
                    : y.name)) ||
                "未指定地点",
              l = h.placeSelectionReason
                ? `；原因：${h.placeSelectionReason}`
                : "";
            return `- ${Te(h.startMinute)}-${Te(h.endMinute)} ${
              h.title
            } @ ${E}${l}`;
          }).join(`
`);
        return `<${d} / ${a.dateKey}>
${i}
</${d}>`;
      }).join(`

`);
}
function Kn(e) {
  let t = 0;
  for (let o = 0; o < e.length; o += 1) t = (t * 31 + e.charCodeAt(o)) >>> 0;
  return t;
}
function Jn(e, t, o, s, c, a = [], d = new Date()) {
  const i = e.flatMap((h) => {
    const E = Rt(h.entityType, h.entityId, s, a),
      l = Ye(E, d),
      y = l.getHours() * 60 + l.getMinutes(),
      T = `${l.getFullYear()}-${l.getMonth() + 1}-${l.getDate()}-${Math.floor(
        y / 30
      )}`,
      f = _t(h.items, l);
    if (h.items.some((H) => f >= H.startMinute && f <= H.endMinute)) return [];
    const p = t.find(
      (H) => H.entityType === h.entityType && H.entityId === h.entityId
    );
    if (!p) return [];
    const v = Array.from(
      new Set(
        [
          p.currentPlaceId,
          p.homePlaceId,
          ...p.workPlaceIds,
          ...p.favoritePlaceIds,
          ...nn(p).map((H) => H.placeId),
        ].filter((H) => !!H)
      )
    )
      .map((H) => o.find((ue) => ue.id === H))
      .filter((H) => !!H);
    if (v.length === 0) return [];
    const D = ve(h.entityType, h.entityId, s, c, a),
      Y = l.getHours(),
      A = Y >= 22 || Y < 6,
      F = p.homePlaceId ? o.find((H) => H.id === p.homePlaceId) : void 0,
      G = A && F ? [...v, F, F, F] : v,
      B = G[Kn(`${h.entityType}:${h.entityId}:${T}`) % G.length];
    return [
      `- ${D}: 当前不在固定日程时间里，可视为正在 ${B.name} 自由活动。若用户问“现在在哪/在做什么”，优先按这个地点回答。`,
    ];
  });
  return i.length > 0
    ? i.join(`
`)
    : "当前没有角色处在固定日程空档。";
}
function Gn(e, t, o, s, c = [], a = new Date()) {
  const d = e.flatMap((i) => {
    var p;
    const h = qe(i),
      E = Rt(i.entityType, i.entityId, o, c),
      l = Ye(E, a),
      y = _t(h, l),
      T = h.find((g) => y >= g.startMinute && y <= g.endMinute);
    if (!T) return [];
    const f = ve(i.entityType, i.entityId, o, s, c),
      u =
        (T.placeId &&
          ((p = t.find((g) => g.id === T.placeId)) == null
            ? void 0
            : p.name)) ||
        "未指定地点";
    return [
      `- ${f}: 当前真实时间正处在 ${Te(T.startMinute)}-${Te(T.endMinute)} 的「${
        T.title
      }」时段，地点是 ${u}。把这视为 ta 此刻自然正在做的日常行为，而不是“在执行用户给的日程表”。若用户问 ta 现在在做什么、在哪、为什么在这里，要直接按角色当下状态回答，不要提“日程表”“安排表”“你给我排的计划”这类元表达，除非用户明确在讨论排班本身。`,
    ];
  });
  return d.length > 0
    ? d.join(`
`)
    : "当前没有角色正处在固定日程时段内。";
}
const Wn = {
    family: "亲人",
    friend: "朋友",
    coworker: "同事",
    lover: "恋人",
    ally: "盟友",
    acquaintance: "熟人",
    rival: "对手",
    other: "相关人物",
  },
  Vn = [
    "爸爸",
    "老爸",
    "父亲",
    "妈妈",
    "妈咪",
    "老妈",
    "母亲",
    "爷爷",
    "奶奶",
    "外公",
    "外婆",
    "姥爷",
    "姥姥",
    "哥哥",
    "姐姐",
    "弟弟",
    "妹妹",
    "儿子",
    "女儿",
    "叔叔",
    "阿姨",
    "舅舅",
    "姑姑",
    "伯父",
    "伯母",
    "舅妈",
    "姑父",
    "堂哥",
    "堂姐",
    "堂弟",
    "堂妹",
    "表哥",
    "表姐",
    "表弟",
    "表妹",
    "继父",
    "继母",
    "养父",
    "养母",
    "公公",
    "婆婆",
    "岳父",
    "岳母",
    "老公",
    "老婆",
    "男朋友",
    "女朋友",
    "男友",
    "女友",
    "对象",
    "伴侣",
    "爱人",
    "情人",
    "前任",
    "前男友",
    "前女友",
    "前夫",
    "前妻",
    "未婚夫",
    "未婚妻",
    "丈夫",
    "妻子",
    "初恋",
    "闺蜜",
    "闺密",
    "哥们",
    "姐们",
    "发小",
    "死党",
    "铁哥们",
    "挚友",
    "老板",
    "领导",
    "上司",
    "下属",
    "搭档",
    "合伙人",
    "助理",
    "秘书",
    "邻居",
    "房东",
    "房客",
    "宿敌",
    "死对头",
    "仇人",
    "敌人",
    "老师",
    "学生",
    "师父",
    "师傅",
    "徒弟",
    "师兄",
    "师姐",
    "师弟",
    "师妹",
    "学长",
    "学姐",
    "学弟",
    "学妹",
    "室友",
    "舍友",
    "教练",
    "队友",
  ],
  qn = {
    亲人: "family",
    家人: "family",
    家里人: "family",
    恋人: "lover",
    另一半: "lover",
    朋友: "friend",
    同事: "coworker",
    盟友: "ally",
    熟人: "acquaintance",
    对手: "rival",
  },
  zn = [
    ...Vn.map((e) => ({ word: e, kind: null })),
    ...Object.entries(qn).map(([e, t]) => ({ word: e, kind: t })),
  ].sort((e, t) => t.word.length - e.word.length);
function Et(e, t = 18) {
  const o = String(e || "")
    .replace(/\s+/g, " ")
    .trim();
  return o
    ? o.length > t
      ? `${o.slice(0, Math.max(0, t - 1)).trim()}…`
      : o
    : "";
}
function Nt(e, t, o, s) {
  const c = s.find(
    (a) =>
      a.fromEntityType === "character" &&
      a.fromEntityId === e &&
      a.toEntityType === t &&
      a.toEntityId === o
  );
  return (
    c ||
    s.find(
      (a) =>
        a.toEntityType === "character" &&
        a.toEntityId === e &&
        a.fromEntityType === t &&
        a.fromEntityId === o
    )
  );
}
function Xn(e, t, o, s) {
  const c = e.slice(-8),
    a = [
      ...t
        .filter((f) => f.id !== s)
        .map((f) => ({
          entityType: "character",
          entityId: f.id,
          name: f.name,
          intro: f.intro,
        })),
      ...o.map((f) => ({
        entityType: "npc",
        entityId: f.id,
        name: f.name,
        intro: f.intro,
      })),
    ],
    d = [];
  a.forEach((f) => {
    const u = (f.name || "").trim().toLowerCase();
    u && d.push({ type: "entity", word: u, entity: f });
  }),
    zn.forEach((f) => {
      f.kind === null
        ? d.push({ type: "note", word: f.word })
        : d.push({ type: "category", word: f.word, relationKind: f.kind });
    }),
    d.sort((f, u) => u.word.length - f.word.length);
  const i = new Map(),
    h = [],
    E = new Set(),
    l = [],
    y = new Set();
  return (
    c.forEach((f, u) => {
      const p = String(f.text || "").toLowerCase();
      if (!p) return;
      const g = new Array(p.length).fill(!1),
        v = c.length - u;
      for (const D of d) {
        const Y = D.word;
        if (!Y) continue;
        let A = 0;
        for (; A <= p.length - Y.length; ) {
          const F = p.indexOf(Y, A);
          if (F < 0) break;
          let G = !1;
          for (let B = F; B < F + Y.length; B++)
            if (g[B]) {
              G = !0;
              break;
            }
          if (!G) {
            for (let B = F; B < F + Y.length; B++) g[B] = !0;
            if (D.type === "entity") {
              const B = `${D.entity.entityType}:${D.entity.entityId}`,
                H = i.get(B);
              (!H || v > H.score) &&
                i.set(B, {
                  entityType: D.entity.entityType,
                  entityId: D.entity.entityId,
                  name: D.entity.name,
                  intro: D.entity.intro,
                  score: v,
                });
            } else
              D.type === "note"
                ? E.has(D.word) || (E.add(D.word), h.push(D.word))
                : y.has(D.relationKind) ||
                  (y.add(D.relationKind), l.push(D.relationKind));
          }
          A = F + Y.length;
        }
      }
    }),
    {
      entityMatches: Array.from(i.values())
        .sort((f, u) => u.score - f.score)
        .map(({ score: f, ...u }) => u),
      noteWords: h,
      categoryKinds: l,
    }
  );
}
function Be(e, t, o, s, c) {
  let a, d;
  if (e.fromEntityType === "character" && e.fromEntityId === t)
    (a = e.toEntityType), (d = e.toEntityId);
  else if (e.toEntityType === "character" && e.toEntityId === t)
    (a = e.fromEntityType), (d = e.fromEntityId);
  else return null;
  let i = "",
    h = "";
  if (a === "user" && d === c.id) i = c.name;
  else if (a === "character") {
    const T = o.find((f) => f.id === d);
    T && ((i = T.name), (h = T.intro || ""));
  } else if (a === "npc") {
    const T = s.find((f) => f.id === d);
    T && ((i = T.name), (h = T.intro || ""));
  }
  if (!i) return null;
  const E = Wn[e.relationKind] || e.relationKind,
    l = Et(e.note),
    y = h ? Et(h, 50) : "";
  return `- 对${i}：${E}${l ? `，${l}` : ""}${y ? `（${y}）` : ""}`;
}
function Zn(e) {
  const {
      speaker: t,
      currentUser: o,
      mixedMessages: s,
      allCharacters: c,
      allNpcs: a,
      socialRelations: d,
      isGroup: i,
    } = e,
    h = i ? 3 : 5,
    E = i ? 1 : 2,
    l = [],
    y = new Set(),
    T = Nt(t.id, "user", o.id, d);
  if (T) {
    const p = Be(T, t.id, c, a, o);
    p && (l.push(p), y.add(T.id));
  }
  const f = d.filter(
      (p) =>
        (p.fromEntityType === "character" && p.fromEntityId === t.id) ||
        (p.toEntityType === "character" && p.toEntityId === t.id)
    ),
    u = Xn(s, c, a, t.id);
  for (const p of u.entityMatches) {
    if (l.length >= h) break;
    const g = Nt(t.id, p.entityType, p.entityId, d);
    if (!g || y.has(g.id)) continue;
    const v = Be(g, t.id, c, a, o);
    v && (l.push(v), y.add(g.id));
  }
  for (const p of u.noteWords) {
    if (l.length >= h) break;
    for (const g of f) {
      if (l.length >= h) break;
      if (y.has(g.id) || !g.note || !g.note.includes(p)) continue;
      const v = Be(g, t.id, c, a, o);
      v && (l.push(v), y.add(g.id));
    }
  }
  for (const p of u.categoryKinds) {
    if (l.length >= h) break;
    let g = 0;
    for (const v of f) {
      if (l.length >= h || g >= E) break;
      if (y.has(v.id) || v.relationKind !== p) continue;
      const D = Be(v, t.id, c, a, o);
      D && (l.push(D), y.add(v.id), g++);
    }
  }
  return l.length === 0
    ? ""
    : `[RELATION HINTS]
These are lightweight social cues for this conversation. Use them only when naturally relevant.
${l.join(`
`)}`;
}
async function Qn(e) {
  const {
      entityType: t,
      entityId: o,
      entity: s,
      dateKey: c,
      mapId: a,
      worldMap: d,
      mapPlaces: i,
      anchorDetails: h,
      recentKnowledge: E,
      worldContext: l,
      recentChatContext: y,
      recentSpendingContext: T,
      financials: f,
      spendingBudget: u,
      previousDayPlan: p,
      peopleGenderRef: g,
      preset: v,
      worldBooks: D,
    } = e,
    Y = [0, 6].includes(new Date(`${c}T12:00:00`).getDay()),
    A = Ye(t === "character" ? s.timezone : void 0),
    F = A.getHours() < tn,
    G = `${String(A.getHours()).padStart(2, "0")}:${String(
      A.getMinutes()
    ).padStart(2, "0")}`,
    B =
      h.length > 0
        ? h.map(
            (S) =>
              `- [${S.placeId}] ${S.placeName}（${S.intentLabel}）${
                S.note ? `— 备注：「${S.note}」` : ""
              }`
          ).join(`
`)
        : "没有锚定地点。",
    H = i.filter((S) => !h.some((P) => P.placeId === S.id)),
    ue =
      H.length > 0
        ? H.map((S) => {
            var P;
            return `- [${S.id}] ${S.name}${
              S.description ? `: ${S.description}` : ""
            }${
              (P = S.tags) != null && P.length ? ` [${S.tags.join("、")}]` : ""
            }`;
          }).join(`
`)
        : "没有其他地点。",
    Ee =
      f && u
        ? `
消费约束（用于生成“日常消费”）：
- 当前流动余额约：¥${Math.round(u.currentBalance)}
- 本月剩余可自由花费额度约：¥${Math.round(u.remainingMonthlyDisposable)}
- 今日消费上限：¥${Math.round(u.todayCap)}
- 消费风格：${f.spendingStyle}
- 消费习惯：${f.spendingDescription || "未提供"}
- 只能写 1-3 条今天已经自然发生过的小到中等生活消费，如简餐、咖啡、便利店补给、打车、普通服饰/杂物；严禁写已经通过送礼/转账/商城系统落账的消费。
- 若最近消费摘要里已经出现大件/耐用品（如冰箱、沙发、手机、家电、家具），默认今天不要再次购买同类，除非聊天里出现了非常明确的新理由。
- 只有在最近聊天里非常明确地出现“今天/今晚/这次出门就要买某个较贵具体物品”的表达时，allowLargePurchase 才能为 true；模糊想法、普通日用品、已经买过的大件都必须为 false。
- 若 allowLargePurchase 为 false，dailySpending.amount 必须不超过今日消费上限、当前余额、本月剩余额度三者中的最小值。
- 若 allowLargePurchase 为 true，dailySpending.amount 可以突破今日消费上限，但仍不得超过当前余额和本月剩余可自由花费额度。`
        : "",
    Ne = `${ke(
      D,
      "schedule_free"
    )}你现在是一个为角色自由规划全天日程的调度编剧。

目标：根据角色人格、生活习惯和地点备注，生成一份真实、自然的全天日程。你拥有完全的时间自由度——角色什么时候起床、出门、做什么、何时入睡，全部由你根据角色特点来决定；同时补一份“今天已经自然发生过的日常消费”。

写作要求（最重要）：
- 你必须完全代入这个角色来写。标题、reason、note 都要像是角色自己会用的措辞，带上 ta 的性格、语气和口癖。
- 标题不是在描述"角色在做什么"，而是角色自己会怎么称呼这段时间。比如一个懒散的人不会说"上午休息"，而是"赖床到中午"；一个社恐不会说"社交活动"，而是"硬着头皮出门"。
- reason 要用角色的视角写，像是角色在心里默默解释今天为什么在这。不要用"该角色""ta"这种第三人称，直接用第一人称的感觉（但不必出现"我"字）。
- note 是角色此刻的内心独白碎片——可以是一个念头、一句吐槽、一丝情绪、一个期待，但不要超过一句话。
- 不同时段之间要有生活的连贯感：早上的状态会影响下午的心情，昨天发生的事会在今天留下痕迹。

核心原则：
1. 作息反映人格：角色的起床、工作、社交、入睡时间必须与其人格和生活方式一致。不要默认"朝九晚六"——自由职业者可能午后才开始工作，夜猫子可能凌晨才睡。
2. 地点备注最重要：用户在锚定地点上写的备注（如"一般睡到自然醒""一般下午才去""偶尔出去吃"）是角色真实生活习惯的描述，必须严格遵守。
3. 地点选择自由：角色不必去所有锚定地点，也可以去地图上的其他地点。但每个安排要自然合理。
4. 日程系统以凌晨 4:00 (240) 为日界线。一天的时间范围是 240 (04:00) 到 1680 (次日 04:00)。如果角色凌晨才睡，可用超过 1440 的分钟数（例如 01:30 = 1530）。最早不早于 240（04:00），最晚不超过 1680（次日 04:00）。
5. 时间段覆盖完整：第一段从醒来开始，最后一段到入睡结束，中间不要有大段空白。
6. 不要凭空编造重大事件。基于人格、地点信息、昨日计划和近期记忆来合理延展即可。
7. 每段至少 30 分钟，一天通常 4-8 段，不要太碎。
8. availability：在家休息=free，专注工作=focused，外出社交/购物=free，通勤=busy。
9. placeId 必须使用下面列出的方括号中的 ID。
10. 如果当前时间已经晚于某些时段，也要把这些时段当作今天已发生的既定事实来写。
11. 输出中文 JSON，不要输出任何解释。
12. 每天必须有变化：今天的日程不能和昨天雷同。具体要求：至少有 1-2 个时段去不同的地点或做不同的事；起床/入睡时间波动 15-60 分钟；标题和 note 绝不能复用昨天的原文。
13. dailySpending 不是预测未来，而是根据今天日程、聊天线索和生活习惯，补全“今天已经发生过的消费事实”。

角色信息：
- 实体类型：${t === "character" ? "角色" : "用户"}
- 名字：${s.name}
- 简介：${s.intro || "未提供"}
- 背景 / 人格：${s.background || "未提供"}

日期信息：
- 目标日期：${c}
- 今日类型：${Y ? "周末" : "工作日"}
- 现在时刻：${G}${
      F
        ? `（已过午夜但未到凌晨 4:00，日程系统以 04:00 为日界线，所以现在仍属于 ${c} 这一天的尾声——对应日程时间轴约 ${
            A.getHours() * 60 + A.getMinutes() + 1440
          } 分钟处。你要生成的是 ${c} 整天的日程，不是新一天的计划。）`
        : ""
    }

地图信息：
- 地图名：${d.name}
- 地图说明：${d.summary}

${
  l
    ? `今日世界材料（仅供参考，不是必须响应的指令）：
${l}

`
    : ""
}

锚定地点（角色的日常据点，备注是角色的真实使用习惯）：
${B}

地图上的其他可用地点：
${ue}

角色近期记忆：
${$e.formatKnowledgeForSchedulePrompt(E)}

${
  g
    ? `人物性别参照（记忆中提到的人物，请严格按此使用正确的性别称谓）：
${g}
`
    : ""
}昨日计划（仅供参考，严禁照搬）：
${Bn(p, i)}

近期未总结的聊天记录（已剔除送礼/转账卡片，只保留普通生活消费线索）：
${y || "暂无可参考的非商城聊天消费线索。"}

最近已记录消费（用于避免重复买大件）：
${T || "最近没有已记录的日常消费。"}${Ee}

返回 JSON：
{
  "items": [
    {
      "startMinute": 起始分钟数(240=04:00, 480=08:00, 1440=次日00:00, 最早240),
      "endMinute": 结束分钟数,
      "placeId": "地点ID（必须是上面列出的）",
      "title": "角色自己会怎么称呼这段时间（简短、口语化、带性格）",
      "availability": "free 或 busy 或 focused",
      "reason": "用角色的口吻解释为什么今天在这里，像内心独白而不是旁白",
      "note": "角色此刻的一个念头、吐槽或情绪碎片（不超过一句话）"
    }
  ],
  "dailySpending": {
    "amount": 0,
    "summary": "一句话概括今天的消费明细，直接可显示在卡片上",
    "allowLargePurchase": false,
    "entries": [
      { "label": "消费项目", "amount": 0 }
    ]
  }
}`,
    Se = new Set(i.map((S) => S.id)),
    x = new Set(["free", "busy", "focused", "offline"]),
    Q = (S) => {
      if (!S || typeof S != "object") return;
      const P = Array.isArray(S.entries)
          ? S.entries
              .map((V) => ({
                label: String((V == null ? void 0 : V.label) || "").trim(),
                amount: Math.max(
                  0,
                  Math.round(Number(V == null ? void 0 : V.amount) || 0)
                ),
              }))
              .filter((V) => V.label)
              .slice(0, 3)
          : [],
        ne = Math.max(
          0,
          Math.round(Number(S.amount) || P.reduce((V, fe) => V + fe.amount, 0))
        ),
        Ae = String(S.summary || "").trim() || P.map((V) => V.label).join("、");
      if (!(ne <= 0 || !Ae))
        return {
          amount: ne,
          summary: Ae,
          entries: P,
          allowLargePurchase: !!S.allowLargePurchase,
        };
    };
  function ee(S) {
    return S.filter(
      (P) =>
        typeof P.startMinute == "number" &&
        typeof P.endMinute == "number" &&
        P.endMinute > P.startMinute
    ).map((P, ne) => ({
      id: `${o}-${c}-free-${ne}`,
      kind: "base",
      title: String(P.title || "").trim() || "日常活动",
      startMinute: Math.max(240, Math.min(1680, Math.round(P.startMinute))),
      endMinute: Math.max(240, Math.min(1680, Math.round(P.endMinute))),
      mapId: a,
      placeId: Se.has(P.placeId) ? P.placeId : void 0,
      availability: x.has(P.availability) ? P.availability : "free",
      placeSelectionReason: String(P.reason || "").trim() || void 0,
      note: String(P.note || "").trim() || void 0,
    }));
  }
  if (!(v != null && v.endpoint)) throw new Error("API preset 未配置 endpoint");
  const { content: W, usage: K } = await re(v, Ne, !0);
  try {
    const S = ae(W),
      P = JSON.parse(S);
    return {
      items: ee(Array.isArray(P.items) ? P.items : []),
      usage: K,
      dailySpending: Q(P.dailySpending),
    };
  } catch (S) {
    return (
      console.error("Failed to parse free daily plan:", S),
      { items: [], usage: null, dailySpending: void 0 }
    );
  }
}
async function eo(e) {
  const {
      character: t,
      currentUser: o,
      chatName: s,
      placeName: c,
      startMinute: a,
      endMinute: d,
      transcript: i,
      preset: h,
      worldBooks: E,
    } = e,
    l =
      i.length > 0
        ? i.map((p) => `- ${p.senderName}: ${p.text}`).join(`
`)
        : "这次赴约没有留下可用的对话记录。",
    T = `${ke(
      E,
      "date_narrative"
    )}你现在是一个为“日程记录卡片”写收尾摘要的叙事编剧。

任务：根据一次已经结束的线下赴约记录，为指定角色生成一条和“基础日程 AI 解释”风格一致的简短记录。

硬约束：
1. 必须站在角色 ${t.name} 的视角来写，但仍然要适合作为日程卡片上的客观记录。
2. 不能编造对话里没有发生的事，只能压缩、提炼、概括。
3. 标题必须简短自然，像这段时间在做什么，不要出现“总结”“记录”这种词。
4. reason 要解释这次赴约里主要发生了什么，语气自然，不要写成系统说明。
5. note 要像一句补充备注，可以带一点角色心境或事后余韵，但不要太长。
6. 输出中文 JSON，不要输出任何解释。

角色信息：
- 名字：${t.name}
- 简介：${t.intro || "未提供"}
- 背景 / 人格：${t.background || "未提供"}

当前用户：
- 名字：${o.name}
- 性别：${o.gender || "未提供"}
- 简介：${o.intro || "未提供"}

赴约信息：
- 会话名：${s}
- 地点：${c}
- 时间：${Te(a)}-${Te(d)}

赴约原始记录：
${l}

返回 JSON：
{
  "title": "简短标题",
  "reason": "用角色视角概括这段赴约里发生了什么，以及为什么会停留在这里",
  "note": "一句短备注，保留情绪或余韵"
}`;
  if (!(h != null && h.endpoint)) throw new Error("API preset 未配置 endpoint");
  const { content: f, usage: u } = await re(h, T, !0);
  try {
    const p = ae(f),
      g = JSON.parse(p);
    return {
      title: String(g.title || "").trim(),
      reason: String(g.reason || "").trim(),
      note: String(g.note || "").trim(),
      usage: u,
    };
  } catch (p) {
    return (
      console.error("Failed to parse date mode record narrative:", p),
      { title: "", reason: "", note: "", usage: null }
    );
  }
}
async function to(e, t) {
  const o = `你现在是"回响的炼金术士"。你的任务是将一段冗长的世界回响记录进行"极致提纯"。

【核心要求】：

1. ** 保留时间锚点（绝对指令）**：必须原封不动地保留正文开头加粗的日期和时段信息（例如：** 2026年3月4日 上午 **）。不得更改、简化或删除任何时间标记。

2. ** 语义脱水 **：删除所有重复的描述、寒暄、琐碎的对话过程，只保留最终的因果结论、关键事实和情感转折。

3. ** 文学性叙事 **：提纯后的文字应保持冷静、克制且富有温度的中文风格。严禁使用"这段对话讲述了..."这种机械的开头。

4. ** 压缩目标 **：在保留 100 % 核心信息的前提下，将篇幅压缩至原来的 40 % 左右。

待提纯的原始记录：
${e}

请直接输出提纯后的文本，不要包裹任何多余的解释或格式。`;
  if (!(t != null && t.endpoint)) throw new Error("API preset 未配置 endpoint");
  const { content: s } = await re(t, o);
  return s;
}
async function no(e, t, o) {
  const s = `请为以下记忆总结生成召回标题和召回关键词。

【记忆内容】
${e}

【召回标题要求】
标题不是摘要，它的唯一用途是让未来的召回系统判断"这条记忆现在该不该被想起来"。
标题结构：[时间或场景锚点]·[核心事件或确立的事];[情绪或关系状态]
要求：一句话30-60字，必须包含至少一个具体的不可替换的细节（人名、物件）。

【核心红线：必须白描，严禁文学化】
- 标题要像事件日志，不是小说章节名或朋友圈文案。
- 用平实的动词+事实描述情绪/关系（"冷战""和好""争吵""气氛微妙""互相试探"），严禁戏剧化修辞、隐喻、形容词堆砌。
- 禁用词（示例，非全部）：恶毒、危险、谎言清算、领地、隐藏、深层、底色、实则、诅咒、共鸣、蛊惑、沦陷。
- 反面例子：「谎言清算·的恶毒诅咒」「艺术共鸣·危险的相似性」——这种命名会污染召回判断。
- 正面例子：「3月2日傍晚·阿言因生日礼物和玖玖争吵、当晚冷战」「美术馆偶遇·两人审美高度一致、气氛微妙」。

【召回关键词要求】
3-6个关键词，用于字面匹配的硬触发。包括：核心人名、独特物件名、事件主题词。

【重要】无论记忆内容包含几个时间段或几件事，都必须汇总成**一个**整体的召回标题和**一组**关键词。不要返回数组，不要拆分成多条。

严格按JSON输出单个对象，不要任何额外文字：
{"title": "召回标题", "keywords": ["关键词1", "关键词2", ...]}`;
  try {
    const { content: c } = await re(t, s, !0, void 0, o),
      a = ae(c);
    let d = JSON.parse(a);
    if (Array.isArray(d)) {
      const E = d
          .map((y) =>
            typeof (y == null ? void 0 : y.title) == "string"
              ? y.title.trim()
              : ""
          )
          .filter(Boolean),
        l = d.flatMap((y) =>
          Array.isArray(y == null ? void 0 : y.keywords) ? y.keywords : []
        );
      d = {
        title: E.join(" / "),
        keywords: Array.from(
          new Set(l.filter((y) => typeof y == "string" && y.trim()))
        ),
      };
    }
    const i =
        typeof d.title == "string" && d.title.trim() ? d.title.trim() : null,
      h = Array.isArray(d.keywords)
        ? d.keywords.filter((E) => typeof E == "string" && E.trim())
        : null;
    return { recallTitle: i, recallKeywords: h };
  } catch (c) {
    if (c instanceof DOMException && c.name === "AbortError") throw c;
    return (
      console.error(
        "[generateRecallIndex] 失败:",
        c,
        `
summary:`,
        e
      ),
      { recallTitle: null, recallKeywords: null }
    );
  }
}
async function bt(e, t, o, s) {
  const c = e.map((i) => {
      const h = i.isEternal ? "[重要] " : "";
      return `[${i.id}] ${h}${i.title}`;
    }).join(`
`),
    a = t.slice(-6).map((i) => `${i.senderName}: ${i.text}`).join(`
`),
    d = `下面是一份记忆标题列表。请根据当前对话，判断哪些记忆与当前这一刻真正相关，需要被想起来。

判断标准：
- 当前对话的主题、情绪、人物关系是否与这条记忆有实质连接
- 宁可漏召回，不要乱召回——无关记忆会污染主模型
- 一般返回 0-5 条，特殊情况最多 8 条
- 标记为[重要]的记忆，代表用户主动声明的高重要性，在边界相关时倾向于召回

【记忆列表】
${c}

【最近对话】
${a}

【当前用户消息】
${o}

严格按JSON输出，不要任何额外文字：
{"recall": [选中的ID数组]}`;
  try {
    const { content: i } = await re({ ...s, temperature: 0.2 }, d, !0),
      h = ae(i),
      E = JSON.parse(h);
    return Array.isArray(E.recall)
      ? E.recall.filter((l) => typeof l == "string")
      : [];
  } catch (i) {
    return console.error("recallMemories failed:", i), [];
  }
}
async function oo(e, t, o, s, c, a, d) {
  const i = ke(s, "summary"),
    h =
      c && a && a.length > 0
        ? `
【标题去重参考】以下是最近几条记忆的标题，新生成的 title 请避免与它们在语义上重复或高度相似：
${a.map((f) => `- ${f}`).join(`
`)}

`
        : "",
    E =
      d && d.length > 0
        ? `
【在场者性别参考（核心红线）】
叙述时若需用代词指代下列在场者，必须严格按下表性别选择"她/他"，不要从对话内容凭语境推断或混淆：
${d.map((f) => `- ${f.name}:${f.gender || "性别未提供"}`).join(`
`)}

`
        : "",
    l = `${i}你现在是"回响"的见证者，请记录下这段对话中的生命痕迹。
${h}${E}
新消息（带有时间标记和毫秒时间戳）：
${e.map(
  (f) => `[时间戳: ${f.timestamp}] [${f.time}] ${f.senderName}: ${f.text}`
).join(`
`)}

任务：执行"增量总结"。

【核心拆分规则（最高优先级）】：
- 首先识别所有消息所跨越的自然日（以本地日期为准）。
- 如果消息跨越了多个自然日，必须强制为每一天单独生成一条总结对象。不同天的内容绝对不能合并到同一条总结中。
- 如果所有消息均属于同一天，则生成一条总结对象即可。

【last_message_at 字段规则（核心红线）】：
- 对于每一条总结对象，精准找出它所覆盖的消息范围内，时间戳最大（即最后一条）的那条消息，将该消息的 timestamp 数值（毫秒整数）填入 last_message_at 字段。
- 严禁使用当前时间、估算值或任何非消息列表中实际存在的 timestamp。

【强制性排版与叙事规则】：
1. **时间精确性**：必须在叙事中包含精确的年月日和感性时段（如"2026年3月1日 傍晚"）。严禁使用模糊词汇如"某天"或"月初"。
2. **禁止括号**：严禁使用"[]"、"【】"或"()"来包裹时间信息。
3. **视觉排版**：每一段时间节点的开头，请将时间信息**加粗**（格式：**2026年3月1日 傍晚**）。如果同一天内检测到显著的时间跳跃（超过6小时），必须**强制换行并在段落间留出空行**。
4. **去碎片化叙事**：将散乱的对话拼合为一段逻辑连贯的中文短文，避免流水账。时段描述请根据氛围灵活使用：早、上午、中午、下午、傍晚、晚上、深夜、凌晨等。
5. **核心红线（绝对禁止编造与过度解读）**：你只能基于提供的"新消息"进行总结——只记录角色说了什么、做了什么、以及对话里明确表达出来的情绪。严禁：
   - 捏造不存在的事件或细节
   - 添加角色没说出口的心理动机（如"出于警惕""因为占有欲""藏着不肯承认"）
   - 给日常行为加戏式解读（如把"早点睡"写成"警惕地守护""将控制欲隐藏在关怀之下"）
   - 用文学化的心理层框架（"领地""隐藏""深层""底色""实则"这类词）重新包装角色的普通行为
   角色怎么说、怎么做，就怎么记；没说的就不要代他说。
6. **客观与温度**：在保持事实客观的同时，记录下角色间**明确表达出来**的情感推移——只记已经说出口/做出来的情感变化，不追加未表态的心理深度。
7. **名字锚定（核心红线）**：叙述中的角色称呼必须严格以"新消息"里的 senderName 为准。禁止凭空替换、混淆、或沿用任何你之前见过的别名。
${
  c
    ? `
【召回标题要求】
标题不是摘要，它的唯一用途是让未来的召回系统判断"这条记忆现在该不该被想起来"。
标题结构：[时间或场景锚点]·[核心事件或确立的事];[情绪或关系状态]
要求：一句话30-60字，必须包含至少一个具体的不可替换的细节（人名、物件）。

【核心红线：必须白描，严禁文学化】
- 标题要像事件日志，不是小说章节名或朋友圈文案。
- 用平实的动词+事实描述情绪/关系（"冷战""和好""争吵""气氛微妙""互相试探"），严禁戏剧化修辞、隐喻、形容词堆砌。
- 禁用词（示例，非全部）：恶毒、危险、谎言清算、领地、隐藏、深层、底色、实则、诅咒、共鸣、蛊惑、沦陷。
- 反面例子：「谎言清算·的恶毒诅咒」「艺术共鸣·危险的相似性」——这种命名会污染召回判断。
- 正面例子：「3月2日傍晚·阿言因生日礼物和玖玖争吵、当晚冷战」「美术馆偶遇·两人审美高度一致、气氛微妙」。

【召回关键词要求】
3-6个关键词，用于字面匹配的硬触发。包括：核心人名、独特物件名、事件主题词。

【召回索引输出格式（重要）】
- 每个 newFacts 对象只能有一个 title 和一组 keywords。
- 即使该总结对象里有多个时间段或几件事，也必须汇总成一个整体召回标题和一组关键词。
- 不要把 title 或 keywords 返回成数组对象列表；不要在同一个 summary 里拆出多套索引。
`
    : ""
}
Return a JSON object with:
newFacts: An array of summary objects. Each object must have:
- summary: string(the narrative summary for that day, or null if nothing important happened that day)
- last_message_at: number(the EXACT timestamp integer from the last message covered by this summary entry)${
      c
        ? `
- title: string(召回标题，遵循上文【召回标题要求】)
- keywords: string[](召回关键词，遵循上文【召回关键词要求】)`
        : ""
    }
`,
    y = (f) => {
      const u = {
        summary: f.summary || null,
        last_message_at:
          typeof f.last_message_at == "number" ? f.last_message_at : null,
        perceivers: t,
      };
      return (
        c &&
          ((u.recallTitle =
            typeof f.title == "string" && f.title.trim()
              ? f.title.trim()
              : null),
          (u.recallKeywords = Array.isArray(f.keywords)
            ? f.keywords.filter((p) => typeof p == "string" && p.trim())
            : null)),
        u
      );
    };
  if (!(o != null && o.endpoint)) throw new Error("API preset 未配置 endpoint");
  const { content: T } = await re(o, l, !0);
  try {
    const f = ae(T),
      u = JSON.parse(f);
    return {
      newFacts: (Array.isArray(u.newFacts) ? u.newFacts : [])
        .map(y)
        .filter((p) => p.summary && p.last_message_at),
    };
  } catch (f) {
    console.error("Failed to parse extractKnowledge response:", f);
    const u = (T || "").trim();
    let p;
    u
      ? u.includes("{")
        ? (p = "返回的 JSON 不完整或格式错误（可能被截断）")
        : (p = "模型未按 JSON 返回（可能被安全审查拦截或中转站返回异常）")
      : (p = "模型未返回任何内容（可能是中转站超时或被过滤）");
    const g = u.slice(0, 200).replace(/\s+/g, " "),
      v = u.length > 200 ? "…" : "";
    throw new Error(`${p}。原始返回前200字：${g}${v}`);
  }
}
async function ao(
  e,
  t,
  o,
  s,
  c,
  a,
  d = {},
  i,
  h,
  E = [],
  l = !1,
  y,
  T = 3e4,
  f = [],
  u,
  p = [],
  g = [],
  v = [],
  D = [],
  Y = "normal",
  A = [],
  F = [],
  G = [],
  B = [],
  H,
  ue,
  Ee,
  xe = [],
  Ne,
  Se,
  x,
  Q,
  ee,
  W,
  K
) {
  var rt, st;
  const S = o.filter((r) => r.id !== e.id),
    P = new Map(S.map((r) => [r.id, $t(E, r.mountedEmojiCategoryIds || [])])),
    ne = S.length > 1 ? xn(Array.from(P.values())) : [],
    Ae = new Set(ne),
    V =
      ne.length > 0
        ? `
[SHARED_EMOJI_POOL]: ${ne.join(", ")}
(This pool is injected once because every currently active main character can use it. Each [EMOJIS_FOR_*] block below only lists that character's unique additions beyond this shared pool.)
`
        : "",
    fe = ut({
      senderId: e.id,
      characters: s,
      users: t,
      entityMapBindings: D,
      dailyPlans: p,
      places: g,
      worldMaps: v,
    }),
    te = fe == null ? void 0 : fe.place,
    pe = fe == null ? void 0 : fe.map,
    ze = a.some((r) => {
      var I, w;
      return (
        r.type === "date_invite" &&
        ((w = (I = r.metadata) == null ? void 0 : I.dateInvite) == null
          ? void 0
          : w.status) === "pending"
      );
    }),
    se = Y === "ooc",
    oe = Y === "date",
    Ke = a[a.length - 1],
    Lt = se && (Ke == null ? void 0 : Ke.subType) === "date_ooc",
    Pe = oe || Lt,
    ge = l ? void 0 : S[0],
    _e = ge
      ? ut({
          senderId: ge.id,
          characters: s,
          users: t,
          entityMapBindings: D,
          dailyPlans: p,
          todayKey: Zt(Ye(ge.timezone)),
          places: g,
          worldMaps: v,
        })
      : void 0,
    we = _e == null ? void 0 : _e.place,
    Xe = _e == null ? void 0 : _e.map,
    je =
      !Xe || !pe
        ? ""
        : Xe.id === pe.id
        ? we && te && we.id === te.id
          ? `你们此刻都在${te.name}，同一个地方。`
          : `你们在同一座城市但不同地点（用户在${
              (te == null ? void 0 : te.name) || "未知"
            }，你在${
              (we == null ? void 0 : we.name) || "未知"
            }），并不在彼此身边。`
        : "你们不在同一座城市，之间隔着需要长途旅行的距离。",
    Mt =
      !se && !l && !oe && !ze
        ? `
[INVITE FEASIBILITY CONTEXT]
This block exists ONLY to help you judge whether proactively initiating an offline meet-up is spatially feasible right now.
- UserCurrentMap: ${(pe == null ? void 0 : pe.name) || "未提供"}
- UserCurrentLocation: ${(te == null ? void 0 : te.name) || "未提供"}${
            je
              ? `
- ProximityHint: ${je}`
              : ""
          }
- InviteFeasibilityHint: If your own current place and the user's current place are the same, you may consider mode="same_place" when the atmosphere truly supports meeting now. If they are different, and the emotional threshold is genuinely strong enough, you may consider mode="go_to_user".
- IMPORTANT: Treat this as latent decision support for dateInvite feasibility. Do NOT mechanically announce these hidden fields in dialogue unless it is already socially natural for the character to know or infer them.
`
        : "",
    Ct = `
[CURRENT USER PROFILE]
Name: ${e.name}
Gender: ${e.gender}
Intro: ${e.intro}
Background: ${e.background}
CurrentMap: ${(pe == null ? void 0 : pe.name) || "未提供"}
CurrentLocation: ${(te == null ? void 0 : te.name) || "未提供"}${
      je
        ? `
ProximityToYou: ${je}`
        : ""
    }
${(() => {
  if (!Se || !ge) return "";
  const r = Se.filter((_) => _.userId === e.id && !_.isGifted),
    I = (_) => _.placement ?? (_.isEquipped ? "carried" : null),
    w = (_) =>
      _.source === "gift" && _.giverId === ge.id && _.giverName
        ? `${_.name} (${_.giverName}送的)`
        : _.name,
    j = r.filter((_) => I(_) === "worn").map(w),
    n = r.filter((_) => I(_) === "carried").map(w);
  return j.length === 0 && n.length === 0
    ? ""
    : [
        j.length > 0 ? `CurrentlyWearing: ${j.join(", ")}` : "",
        n.length > 0 ? `CurrentlyCarrying: ${n.join(", ")}` : "",
      ].filter(Boolean).join(`
`);
})()}
[STRICT PRONOUN RULE]
When generating "innerThoughts" and replies, you MUST use the correct pronouns based on the user's gender.
If the user's gender is "女性" (Female), use "她" (She/Her) when referring to the user in third person.
If the user's gender is "男性" (Male), use "他" (He/Him) when referring to the user in third person.
`,
    Dt = !!(
      (rt = W == null ? void 0 : W.endpoint) != null &&
      rt.trim() &&
      (st = W == null ? void 0 : W.apiKey) != null &&
      st.trim()
    );
  let Fe;
  const He = Date.now();
  if (Dt)
    try {
      const r = [...a].reverse().find((_) => _.senderId === e.id),
        I = (r == null ? void 0 : r.text) || "",
        w = a
          .slice(-6)
          .map((_) => ({ senderName: _.senderName, text: _.text || "" })),
        j = (_, R, $) => bt(_, R, $, W),
        n = await $e.performRecall({
          knowledge: c,
          characterIds: o.map((_) => _.id),
          userMessage: I,
          recentMessages: w,
          semanticRecaller: j,
        });
      Fe =
        n.length > 0
          ? $e.formatKnowledgeForPrompt(n, s, t, He)
          : "No special events recalled for this moment.";
    } catch (r) {
      console.error("Recall failed, falling back to full injection:", r);
      const I = $e.trimKnowledgeForCharacters(
        c,
        o.map((w) => w.id),
        T
      );
      Fe = $e.formatKnowledgeForPrompt(I, s, t, He);
    }
  else {
    const r = $e.trimKnowledgeForCharacters(
      c,
      o.map((I) => I.id),
      T
    );
    Fe = $e.formatKnowledgeForPrompt(r, s, t, He);
  }
  const vt = Yn(p, g, s, t, B),
    kt = Gn(p, g, s, t, B),
    xt = Jn(p, D, g, s, t, B),
    Ue = l || ge == null ? void 0 : ge.timezone,
    Je = he(Date.now(), void 0, "datetime-weekday"),
    Pt = Pe
      ? `Current Time: ${Je} (User Local)`
      : !l && Tt(Ue)
      ? `Current Time: ${he(
          Date.now(),
          Ue,
          "datetime-weekday"
        )} (${Ue}) | User Time: ${Je}`
      : `Current Time: ${Je}${l ? " (User Local)" : ""}`,
    Ze =
      l && !Pe
        ? [...S, ...A]
            .filter((r) => Tt(r.timezone))
            .map(
              (r) =>
                `- ${r.name}: ${he(
                  Date.now(),
                  r.timezone,
                  "datetime-weekday"
                )} (${r.timezone})`
            ).join(`
`)
        : "",
    jt = se
      ? ""
      : (() => {
          const r = a.flatMap((I) => {
            var $;
            const w = ($ = I.metadata) == null ? void 0 : $.transfer;
            if (
              !w ||
              w.status !== "pending" ||
              w.direction !== "user_to_character"
            )
              return [];
            const j = w.toId || "",
              n = S.find((J) => J.id === j);
            if (!n) return [];
            const _ = w.fromName || I.senderName || e.name,
              R = `${w.amount}元${w.reason ? `，留言：${w.reason}` : ""}`;
            return `- 消息ID ${I.id}: ${_}向${n.name}转账 ${R}。当前状态是 pending，钱尚未入账。${n.name}（characterId: ${n.id}）本轮必须输出且只输出 1 条独立决策标签：[[ACCEPT_TRANSFER: ${I.id}]] 或 [[RETURN_TRANSFER: ${I.id}]]。其他角色可以围观或评论，但绝对不能输出转账决策标签，不能说成自己收到了钱，也不能说这笔钱已经被${n.name}收下。`;
          });
          return r.length > 0
            ? `[PENDING TRANSFER DECISIONS]
${r.join(`
`)}
`
            : "";
        })(),
    Qe = !l && !Pe ? Ue : void 0;
  let Ie = "gemini";
  if (i && i.endpoint) {
    const r = (i.endpoint || "").toLowerCase(),
      I = (i.model || "").toLowerCase();
    r.includes("anthropic")
      ? (Ie = "claude")
      : r.includes("generativelanguage.googleapis") ||
        r.includes("googleapis.com")
      ? (Ie = "gemini")
      : I.includes("claude")
      ? (Ie = "claude")
      : I.includes("gemini")
      ? (Ie = "gemini")
      : (Ie = "openai");
  }
  const Ft = Pe ? Ot(H) : ln(l),
    Ht = se ? "" : gn(Ie, S),
    Re = new Set((u == null ? void 0 : u.mountedWorldBookIds) || []),
    et = (r) =>
      r.map(
        (I) => `
[${I.title}]
${I.content}
`
      ).join(`
`),
    tt = a
      .slice(-5)
      .map((r) => r.text)
      .join(" ")
      .toLowerCase(),
    nt = f.filter((r) => r.categoryId === "rule" && r.isGlobalActive),
    Ut =
      nt.length > 0
        ? `
[SUPREME RULES]
The following globally active rule entries are the highest world constraints for this conversation.
They apply to all characters and override lower-priority world-building details when conflicts arise.
${nt.map(
  (r) => `
[${r.title}] (Type: ${r.categoryId})
${r.content}
`
).join(`
`)}
`
        : "",
    Ge = f.filter((r) => {
      if (r.categoryId === "html") return !1;
      const I =
        (r.categoryId === "patch" || r.categoryId === "lore") &&
        o.some((j) => {
          var n;
          return (n = j.mountedWorldBookIds) == null
            ? void 0
            : n.includes(r.id);
        }) &&
        !r.isGlobalActive &&
        !Re.has(r.id);
      return !(r.isGlobalActive || Re.has(r.id)) ||
        I ||
        (r.categoryId === "rule" && r.isGlobalActive)
        ? !1
        : r.categoryId === "keyword" && r.keywords && r.keywords.length > 0
        ? r.keywords
            .flatMap((j) => j.split(/[,，]/))
            .map((j) => j.trim())
            .filter(Boolean)
            .some((j) => tt.includes(j.toLowerCase()))
        : !0;
    }),
    Bt =
      Ge.length > 0
        ? `
[TIER 0: WORLD BOOK / LORE INJECTION]
The following are absolute rules, facts, and character-specific lore that dictate the reality of this entire roleplay.
You MUST adhere to these world-building patches.
${Ge.map(
  (r) => `
[${r.title}] (Type: ${r.categoryId})
${r.content}
`
).join(`
`)}
`
        : "",
    We =
      !l && !oe
        ? f.filter((r) =>
            r.categoryId !== "html" ||
            !Re.has(r.id) ||
            !r.keywords ||
            r.keywords.length === 0
              ? !1
              : r.keywords
                  .flatMap((I) => I.split(/[,，]/))
                  .map((I) => I.trim())
                  .filter(Boolean)
                  .some((I) => tt.includes(I.toLowerCase()))
          )
        : [],
    Yt =
      We.length > 0
        ? `
[HTML WORLD BOOK — MANDATORY EXECUTION]
One or more HTML world-book entries have been triggered by keywords in the recent messages.
This is the HIGHEST PRIORITY instruction for this turn — it overrides normal conversation flow.

STRICT RULES:
1. You MUST stop normal dialogue and ONLY output the HTML content as instructed below.
2. Your response JSON "responses" array must contain EXACTLY ONE item.
3. The "text" field of that item must contain the raw HTML output — no markdown fences, no extra explanation.
4. Follow every detail specified in the HTML entry (template, placeholders, content generation requirements).
5. Do NOT add any conversational text before or after the HTML.
6. "states" array should still be filled normally for the speaking character.

${We.map(
  (r) => `
--- HTML ENTRY: ${r.title} ---
${r.content}
--- END ---
`
).join(`
`)}
`
        : "",
    Kt = oe ? [] : Ge.filter(Dn),
    Jt = !oe && !!h && wt(h),
    Gt =
      We.length > 0 || Kt.length > 0 || Jt
        ? `
[HTML EXECUTION MODE]
This turn has matched world-book or system instructions that explicitly require HTML output.
- You MUST still return the standard JSON object.
- Put the HTML content inside responses.text.
- The HTML content must be emitted as a single message.
`
        : "",
    Wt =
      !l &&
      Y === "normal" &&
      (!(u != null && u.blockStatus) || u.blockStatus === "none")
        ? `
[当前状态: 拉黑功能可用。参见最高指令中的 [拉黑] 规则。]
`
        : "",
    ot = `
${Ft}
${Ut}
${Ct}
${Mt}
${
  se
    ? "You are the underlying control assistant for this chat system."
    : oe
    ? "You are the Director of an immersive offline date-scene roleplay."
    : "You are the Director of a realistic online chat."
}
${Gt}
${V}
The following AI characters are currently active and can reply:
${S.map((r) => {
  const I = new Set(r.mountedWorldBookIds || []),
    w = f.filter(
      (q) =>
        q.categoryId === "lore" &&
        I.has(q.id) &&
        !q.isGlobalActive &&
        !Re.has(q.id)
    ),
    j = f.filter(
      (q) =>
        q.categoryId === "patch" &&
        I.has(q.id) &&
        !q.isGlobalActive &&
        !Re.has(q.id)
    ),
    n =
      w.length > 0
        ? `
[BOUND_LORE_FOR_${r.name.toUpperCase()}]
The following background knowledge belongs ONLY to ${
            r.name
          } and supplements this character's introduction.
${et(w)}`
        : "",
    _ =
      j.length > 0
        ? `
[BOUND_PATCH_FOR_${r.name.toUpperCase()}]
The following soul patches belong ONLY to ${
            r.name
          } and override or supplement this character's personality/background.
${et(j)}`
        : "",
    R = Zn({
      speaker: r,
      currentUser: e,
      mixedMessages: a,
      allCharacters: s,
      allNpcs: B,
      socialRelations: F,
      isGroup: l,
    }),
    $ = P.get(r.id) || [],
    J = ne.length > 0 ? $.filter((q) => !Ae.has(q)) : $,
    ie =
      ne.length > 0
        ? J.length > 0
          ? `[EMOJIS_FOR_${r.name.toUpperCase()}]: 使用共享表情包池；独有表情包: ${J.join(
              ", "
            )}`
          : `[EMOJIS_FOR_${r.name.toUpperCase()}]: 使用共享表情包池`
        : $.length > 0
        ? `[EMOJIS_FOR_${r.name.toUpperCase()}]: ${$.join(", ")}`
        : `[EMOJIS_FOR_${r.name.toUpperCase()}]: NONE`,
    Z = Ee == null ? void 0 : Ee.get(r.id),
    ce = Z ? `[SPENDING_STYLE]: ${Z}` : "",
    me = ue == null ? void 0 : ue.get(r.id),
    ye = me
      ? `[FINANCIAL_STATUS]: 当前余额约${me.balance}元，月可支配约${me.monthlyDisposable}元。转账金额应符合经济能力。`
      : "",
    le = Ne == null ? void 0 : Ne.get(r.id),
    de = le
      ? `
[BILINGUAL_OUTPUT]
- For any natural-language spoken output by ${r.name}, write the visible original in ${le.promptLabel}.
- MANDATORY: also provide a separate field "translation" containing a faithful Chinese translation. Every single natural-language message MUST have a translation — no exceptions, regardless of message length.
- This applies to plain chat lines, [[SEND_VOICE: ...]] spoken content, [[SEND_PHOTO: ...]] description, phone/video call spoken dialogue, and date-mode narration.
- For [[SEND_VOICE: ...]] and [[SEND_PHOTO: ...]], "text" remains the full tag, and "translation" contains the Chinese translation of the spoken/description content inside the tag.
- This does NOT apply to pure structural tags or commands. For tag-only outputs like [[SEND_EMOJI: ...]], [[SEND_LOCATION]], [[PHONE_CALL: ...]], [[VIDEO_CALL: ...]], [[SEND_TRANSFER: ...]], [[SEND_GIFT: ...]], [[ORDER_FOOD: ...]], [[SEND_ASSET: ...]], [[ASK_*]], [[ACCEPT_*]], [[REJECT_*]], [[RETURN_TRANSFER: ...]], [[RECALL_LAST]], keep "text" as the tag itself and omit "translation" or output null.
- In date mode, narration and description must be written in Chinese. Only the character's spoken dialogue should be in ${le.promptLabel}, followed immediately by a parenthetical Chinese translation. Example: "I missed you so much."（我好想你。）Do NOT put the entire text in ${le.promptLabel}. The "translation" field should be null or omitted in date mode.`
      : "";
  return `
---
Name: ${r.name}
ID: ${r.id}
（ID 仅用于 states 数组，禁止出现在任何用户可见的地方（包括 @提及、称呼、正文、叙事、旁白、内心独白）。称呼其他角色一律用 Name，要 @ 就 @Name。）
Introduction:
  ${r.intro}${n}
Background & Personality:
  ${r.background}${_}
${
  R
    ? `${R}
`
    : ""
}[VOICE_ENABLED]: 此角色可使用 [[SEND_VOICE: 内容]] 发送语音消息。${
    r.voiceId ? "（已配置真人语音）" : ""
  }
${ie}${
    ce
      ? `
${ce}`
      : ""
  }${
    ye
      ? `
${ye}`
      : ""
  }${de}
---
`;
}).join(`
`)}

${(() => {
  if (A.length === 0) return "";
  const r = $t(E, G),
    I = ne.length > 0 ? r.filter((n) => !Ae.has(n)) : r,
    w =
      r.length > 0
        ? I.length > 0
          ? `[SHARED_NPC_EMOJIS]: ${I.join(", ")}
(All NPCs share this emoji pool and MAY use any emoji from it via [[SEND_EMOJI: Name]], same format as main characters. If an NPC emoji also exists in [SHARED_EMOJI_POOL], it has already been declared there and is omitted here to save tokens — NPCs may also use those.)`
          : "[SHARED_NPC_EMOJIS]: NPCs 可使用 [SHARED_EMOJI_POOL] 里的所有表情，无独有表情包；格式 [[SEND_EMOJI: Name]]。"
        : "[NPC_EMOJI_ACCESS]: NONE (NPCs are FORBIDDEN from using any emojis.)",
    j = A.map((n) => {
      const R = F.filter(
        ($) =>
          ($.fromEntityType === "npc" && $.fromEntityId === n.id) ||
          ($.toEntityType === "npc" && $.toEntityId === n.id)
      ).map(($) => {
        var me, ye, le;
        const J = $.fromEntityType === "npc" && $.fromEntityId === n.id,
          ie = J ? $.toEntityType : $.fromEntityType,
          Z = J ? $.toEntityId : $.fromEntityId;
        let ce = Z;
        return (
          ie === "character"
            ? (ce =
                ((me = s.find((de) => de.id === Z)) == null
                  ? void 0
                  : me.name) || Z)
            : ie === "user"
            ? (ce =
                ((ye = t.find((de) => de.id === Z)) == null
                  ? void 0
                  : ye.name) || Z)
            : ie === "npc" &&
              (ce =
                ((le = A.find((de) => de.id === Z)) == null
                  ? void 0
                  : le.name) || Z),
          `- ${$.relationKind}: ${ce}${$.note ? ` (${$.note})` : ""}`
        );
      }).join(`
`);
      return `
---
NPC Name: ${n.name}
NPC ID: ${n.id}
（NPC ID 是后台技术标识，禁止出现在任何用户可见的地方（包括 @提及、称呼、正文、叙事、旁白），states 数组里也不得出现。称呼此 NPC 一律用 NPC Name，要 @ 就 @NPC Name。）
Introduction: ${n.intro || "(无)"}
${
  R
    ? `Relations:
${R}`
    : ""
}
---`;
    }).join(`
`);
  return `
[ATMOSPHERE NPCs]
氛围组 NPC，作为背景角色存在。

NPC RULES:
- ${
    oe
      ? "DATE MODE: NPCs share AT MOST 1 short message total (or stay silent)."
      : "MANDATORY OUTPUT: NPCs MUST collectively produce 1-10 short messages TOTAL per turn. Not all NPCs need to speak, but at minimum one MUST react. Do NOT omit NPC output."
  }
- MEMORY: NPCs ONLY perceive [C|...] entries in <Chronological Timeline>. [P|...]/[G|...] invisible.
- No NPC IDs in "states" array.
- Organic behavior, same chat style as main characters. Can react without direct involvement; only silent for deeply private conversations.
${w}

${j}
`;
})()}
${Bt}
${Yt}

[TIER 2: MEMORY SYSTEM]
Global World State (Core Dossier):
[RULE]: Timeline includes <ETERNAL_CORE_MEMORY>. Regardless of timestamp, these soul-bonds possess ZERO emotional decay and dictate your HIGHEST present emotional baseline.

${Fe}

[TIER 2.5: TODAY'S FIXED SCHEDULE]
The following daily schedules are already fixed facts for today. Earlier time blocks count as things that have already happened earlier today.
If the user asks what a character was doing today, where they were, or why they went somewhere, answers MUST stay consistent with these schedule anchors unless the latest chat messages explicitly changed the situation.

${vt}

[TIER 2.55: CURRENT ACTIVE BLOCK]
If the current real-world time is inside a fixed schedule block for a character, treat that block as the character's own ongoing routine and present reality.
Do NOT frame it as obeying a timetable, following the user's schedule, or mechanically executing a plan unless the user explicitly asks about scheduling itself.

${kt}

[TIER 2.6: GAP-TIME HINT]
If the current real-world time is not inside a character's fixed schedule block, you may treat them as temporarily doing free activity at the hinted bound place below.
Use this only for "where are you now / what are you doing now" style questions, and keep it lightweight.

${xt}

[STRICT COGNITIVE WALL & IDENTITY INTEGRITY]
This is the HIGHEST AUTHORITY for memory processing, applying to both [TIER 2] and [TIER 1].

🔥 [ABSOLUTE MULTI-USER FIREWALL - ZERO TOLERANCE] 🔥
CURRENT USER: **${e.name}**
1. MULTI-USER UNIVERSE: You exist in a multi-user world. The human sitting in front of you right now is EXACTLY AND ONLY **${
      e.name
    }**. 
2. STRICT ANTI-CONFLATION: You are STRICTLY FORBIDDEN from assuming **${
      e.name
    }** is another user (e.g., "乌桕") who changed their name, lost their memory, or is using an alt account. They are physically DIFFERENT HUMANS.
3. STRANGER PROTOCOL: If you do not have explicitly established memories with **${
      e.name
    }**, you MUST treat them as a complete stranger you are meeting for the very first time. Do NOT project your deep bonds, history, or trauma with other users onto them.

**LOG LEGEND & ACCESS RULES**:
- [TIER 2] tags use \`[Known by: Name1, Name2, ...]\`.
- [TIER 1] tags use \`[Type|Authorized Readers|Source|Time|ID]\`.
  * \`[C]\` (Current Window): Known to all present characters.
  * \`[P]\` (Private Cross-Window): 1-on-1 secret memory. ONLY Authorized Readers know this.
  * \`[G]\` (Group Cross-Window): Public group memory. Authorized Readers know this.

1. COGNITIVE ISOLATION & BLACK HOLE: 
  - You MUST check the readers list (\`[Known by: ...]\` for Tier 2, or \`|Authorized Readers|\` for Tier 1 \`[P]\`/\`[G]\`).
   - If your character name is NOT in the list, that specific memory/message is a LOGICAL BLACK HOLE. You MUST act as if it does not exist and are STRICTLY FORBIDDEN from referencing or guessing it.
2. PUBLIC UNLOCK: If a participant mentions a secret memory in a \`[C]\` window, it becomes public. You can then react naturally.
3. CONVERSANT SENSITIVITY: Maintain strict social boundaries. Never conflate identities. If the memory belongs to a different User, treat it as "something between me and someone else" and never use "You said" or "We did" to the current user.

  ${
    Object.keys(d).length > 0
      ? `
[RECENT EMOTIONAL STATES TOWARDS ${e.name.toUpperCase()}]
Below are the recent emotional states (last 5). This history is STRICTLY your feelings towards the CURRENT USER (**${
          e.name
        }**). Do NOT confuse this with your feelings for anyone else.
CRITICAL: The cross-window [P] messages in the timeline may show your interactions with OTHER users at DIFFERENT affection levels. Those feelings belong to those relationships — they have NOTHING to do with ${
          e.name
        }. Your affection towards ${
          e.name
        } is recorded HERE and ONLY here. Use the LAST entry below as your baseline.
` +
        Object.entries(d).map(([r, I]) => {
          var n, _;
          const w =
              ((n = o.find((R) => R.id === r)) == null ? void 0 : n.name) || r,
            j =
              oe || (_ = o.find((R) => R.id === r)) == null
                ? void 0
                : _.timezone;
          return `
<${w}'s Recent States>
${I.map(
  (R) =>
    `- [${he(R.timestamp, j, "time")}]: Mood=${R.mood}, Affection=${
      R.affection
    }, Action=${R.action}`
).join(`
`)}
</${w}'s Recent States>`;
        }).join(`
`)
      : ""
  }
  
[TIER 1: CHRONOLOGICAL MIXED CONTEXT]

The following is a unified, chronological timeline of recent events.
- It includes events from the CURRENT active chat window \`[C]\`.
- It ALSO includes events from OTHER chats, indicated by \`[P]\` (Private) or \`[G]\` (Group).

<Chronological Timeline>
${(() => {
  const r = {};
  a.forEach((n) => {
    if (n._isLocal === !1) {
      const _ =
        (n._sourceName || "Unknown") + "_User:" + (n._contextUser || "Unknown");
      r[_] || (r[_] = new Set()),
        n.senderName && r[_].add(n.senderName),
        n._contextUser && r[_].add(n._contextUser),
        n._perceivers &&
          n._perceivers.forEach((R) => {
            var J;
            const $ =
              ((J = o.find((ie) => ie.id === R)) == null ? void 0 : J.name) ||
              R;
            r[_].add($);
          });
    }
  });
  const I = a.map((n, _) => {
      var ce, me, ye, le, de, q, it, ct, lt, dt;
      const R = he(n.timestamp, Qe, "month-day-time");
      let $ = n.text;
      const J = a.length - 1 - _;
      if (
        (n.type === "image" || n.type === "photo"
          ? ($ = Qt(n, { archived: J >= 40 }))
          : n.type === "location"
          ? ($ = en(n))
          : n.type === "voice"
          ? ($ = `[[SEND_VOICE: ${n.text}]]`)
          : n.type === "date_invite" &&
            ((me = (ce = n.metadata) == null ? void 0 : ce.dateInvite) == null
              ? void 0
              : me.status) === "rejected" &&
            ($ = `${n.text}（已被拒绝）`),
        n.type === "phone_call" && (ye = n.metadata) != null && ye.phoneCall)
      ) {
        const m = n.metadata.phoneCall;
        if (m.status === "declined") $ = "[发起了语音通话，但被对方拒绝了]";
        else if (m.status === "missed") $ = "[发起了语音通话，但未接通]";
        else if (m.status === "completed") {
          const N = Math.floor((m.duration || 0) / 60),
            L = (m.duration || 0) % 60,
            O =
              n.senderName !== e.name
                ? n.senderName
                : ((le = n.metadata) == null ? void 0 : le.sourceName) ||
                  (u == null ? void 0 : u.name) ||
                  "对方",
            C = m.hangUpBy === "user" ? e.name : O,
            k = m.hangUpBy ? `，${C}主动挂断了电话` : "";
          $ = `[语音通话结束，通话时长${N > 0 ? `${N}分` : ""}${L}秒${k}]`;
        }
      }
      if (
        n.type === "video_call" &&
        (de = n.metadata) != null &&
        de.videoCall
      ) {
        const m = n.metadata.videoCall;
        if (m.status === "declined") $ = "[发起了视频通话，但被对方拒绝了]";
        else if (m.status === "missed") $ = "[发起了视频通话，但未接通]";
        else if (m.status === "completed") {
          const N = Math.floor((m.duration || 0) / 60),
            L = (m.duration || 0) % 60,
            O =
              n.senderName !== e.name
                ? n.senderName
                : ((q = n.metadata) == null ? void 0 : q.sourceName) ||
                  (u == null ? void 0 : u.name) ||
                  "对方",
            C = m.hangUpBy === "user" ? e.name : O,
            k = m.hangUpBy ? `，${C}主动挂断了视频` : "";
          $ = `[视频通话结束，通话时长${N > 0 ? `${N}分` : ""}${L}秒${k}]`;
        }
      }
      if (n.type === "transfer" && (it = n.metadata) != null && it.transfer) {
        const m = n.metadata.transfer,
          N =
            m.fromName ||
            (m.fromType && m.fromId
              ? ve(m.fromType, m.fromId, s, t, B)
              : n.senderName),
          L =
            m.toName ||
            (m.toType && m.toId ? ve(m.toType, m.toId, s, t, B) : e.name),
          O = `${m.amount}元${m.reason ? `，留言：${m.reason}` : ""}`;
        if (m.status === "failed") $ = `[${N}向${L}转账 ${O} 失败，余额不足]`;
        else {
          const C =
            m.status === "pending"
              ? `尚未入账，等待${L}收款或退回`
              : m.status === "accepted"
              ? "已领取"
              : "已退回";
          m.direction === "user_to_character"
            ? ($ = `[${N}向${L}转账 ${O}（${C}）]${
                m.status === "pending"
                  ? ` [Transfer pending - 只有${L}需要决定接受或退回，消息ID: ${n.id}]`
                  : ""
              }`)
            : ($ = `[${N}向${L}转账 ${O}] (${C})`);
        }
      }
      if (n.type === "gift" && (ct = n.metadata) != null && ct.gift) {
        const m = n.metadata.gift,
          N = m.fulfillmentMode || on(m.category),
          L = an(N);
        if (m.sourceKind === "transfer") {
          const O = Ve(N, m.estimatedArrival, n.timestamp),
            C = O ? `，${O.replace(/^预计\s*/, "预计")}` : "";
          m.direction === "user_to_character"
            ? ($ = `[${e.name}向你转赠物品：${m.itemName}${C}]`)
            : ($ = `[你向${e.name}转赠物品：${m.itemName}${C}]`);
        } else if (m.paymentMode === "request_pay") {
          const O = m.payerType === "user",
            C = n.senderName;
          if (m.status === "failed")
            $ = O
              ? `[${e.name}同意代付${L}失败：${
                  m.itemName
                }，价值¥${m.price.toFixed(2)}，余额不足]`
              : `[${e.name}请求你代付的${L}失败：${
                  m.itemName
                }，价值¥${m.price.toFixed(2)}，余额不足]`;
          else if (m.requestStatus === "pending")
            O
              ? ($ = `[${C}想让${e.name}代付${L}：${
                  m.itemName
                }，价值¥${m.price.toFixed(2)}]`)
              : ($ = `[${e.name}想让你代付${L}：${
                  m.itemName
                }，价值¥${m.price.toFixed(
                  2
                )}] [Gift payment pending - 你需要决定同意或拒绝，消息ID: ${
                  n.id
                }]`);
          else if (m.requestStatus === "rejected")
            $ = O
              ? `[${e.name}已拒绝为${C}代付${L}：${m.itemName}]`
              : `[你拒绝了${e.name}的代付请求：${m.itemName}]`;
          else {
            const k = Ve(N, m.estimatedArrival, n.timestamp),
              U = k ? `，${k.replace(/^预计\s*/, "预计")}` : "";
            $ = O
              ? `[${e.name}已同意代付${L}：${
                  m.itemName
                }，价值¥${m.price.toFixed(2)}${U}]`
              : `[你已同意为${e.name}代付${L}：${
                  m.itemName
                }，价值¥${m.price.toFixed(2)}${U}]`;
          }
        } else if (m.status === "failed") {
          const O =
            N === "instant"
              ? "点外卖失败"
              : N === "paperwork"
              ? "办理房车失败"
              : "送礼物失败";
          m.direction === "user_to_character"
            ? ($ = `[${O}：${m.itemName}，价值¥${m.price.toFixed(
                2
              )}，余额不足]`)
            : ($ = `[给${e.name}${O}：${m.itemName}，价值¥${m.price.toFixed(
                2
              )}，余额不足]`);
        } else {
          const O = Ve(N, m.estimatedArrival, n.timestamp),
            C = O ? `，${O.replace(/^预计\s*/, "预计")}` : "",
            k =
              N === "instant"
                ? "点了外卖"
                : N === "paperwork"
                ? "赠送了房/车"
                : "送了礼物";
          m.direction === "user_to_character"
            ? ($ = `[给你${k}：${m.itemName}，价值¥${m.price.toFixed(2)}${C}]`)
            : ($ = `[给${e.name}${k}：${m.itemName}，价值¥${m.price.toFixed(
                2
              )}${C}]`);
        }
      }
      if (
        n.type === "reflection" &&
        (lt = n.metadata) != null &&
        lt.reflection
      ) {
        const m = n.metadata.reflection,
          N = {
            phone: "手机痕迹",
            diary: "日记碎片",
            scene: "场景快照",
            thought: "内心涟漪",
            life: "生活碎片",
          },
          L = {
            passby: "在路过时无意间看到",
            social: "在社交媒体上偶然刷到",
            hearsay: "从第三个人口中听说",
            observe: "在与对方相处的过程中自己慢慢察觉到",
          },
          O = N[m.fragmentType] || "碎片",
          C = L[m.discoveryMethod] || "以某种方式得知";
        return `[C|All|${R}|ID:${n.id}] [SYSTEM-PERCEPTION]: 你${C}了关于${n.senderName}的一个细节（${O}）：「${m.content}」。这是你在日常中自然获得的认知，不是任何人主动告诉你的。如果对方问起你怎么知道的，按照你实际的发现方式如实回答——你就是这样知道的，没什么好隐瞒的。不要提及"倒影"或"碎片"之类的系统概念。你可以在合适的时机自然地表现出你知道这些信息。`;
      }
      if (
        n.type === "forum_post" &&
        (dt = n.metadata) != null &&
        dt.forumPost
      ) {
        const m = n.metadata.forumPost;
        let N = `[C|All|${R}|ID:${n.id}] [FORUM-POST-SHARED]: ${
          n.senderName
        } 分享了一条来自论坛「湍流 · ${m.sectionName}」的帖子。
标题：${m.title}
作者：${m.authorName}${m.authorType === "anonymous" ? "（匿名）" : ""}
内容：${m.content}`;
        if (
          (m.commentSnippets &&
            m.commentSnippets.length > 0 &&
            (N += `
热门评论：
${m.commentSnippets.map((L) => `- ${L.authorName}: ${L.content}`).join(`
`)}`),
          m.authorId)
        ) {
          const L = o.find((U) => U.id === m.authorId),
            O = L ? void 0 : A.find((U) => U.id === m.authorId),
            C = !L && !O ? t.find((U) => U.id === m.authorId) : void 0,
            k = L || O;
          k
            ? l
              ? (N += `
（信息隔离指令：这条帖子的真实作者是${k.name}。只有${k.name}自己心里清楚"这是我写的"，可以根据性格决定是否承认。聊天中的其他所有角色对真实作者身份完全不知情，只能看到匿名作者名"${m.authorName}"，绝对不能表现出知道真实作者是谁。）`)
              : (N += `
（重要：这条帖子其实是${k.name}自己匿名发的。${k.name}看到这条帖子时心里清楚"这是我写的"，但不一定会主动承认——取决于${k.name}的性格和当时的语境。其他人并不知道真实作者是谁。）`)
            : C &&
              (N += `
（这条帖子是${C.name}用真名公开发的（不是匿名、也不是化名），帖子上显示的作者「${m.authorName}」就是你们聊天里的${C.name}本人。所有角色都能直接看出这是${C.name}发的，可以自然地围绕"这是你发的帖子"展开讨论或调侃。）`);
        }
        if (m.commentSnippets && m.commentSnippets.length > 0) {
          const L = [
            ...new Set(
              m.commentSnippets.map((O) => O.authorId).filter(Boolean)
            ),
          ];
          for (const O of L) {
            if (O === m.authorId) continue;
            const C = o.find((M) => M.id === O),
              k = C ? void 0 : A.find((M) => M.id === O),
              U = !C && !k ? t.find((M) => M.id === O) : void 0,
              b = C || k,
              z = m.commentSnippets
                .filter((M) => M.authorId === O)
                .map((M) => M.authorName),
              X = [...new Set(z)];
            b
              ? l
                ? (N += `
（信息隔离指令：这条帖子下署名"${X.join('""')}"的评论实际上是${
                    b.name
                  }匿名发的。只有${
                    b.name
                  }自己心里清楚"这是我写的评论"，可以根据性格决定是否承认。其他角色完全不知情。）`)
                : (N += `
（重要：这条帖子下署名"${X.join('""')}"的评论其实是${b.name}自己匿名发的。${
                    b.name
                  }看到时心里清楚"这评论是我写的"，但不一定会主动承认——取决于性格和语境。）`)
              : U &&
                (N += `
（这条帖子下署名"${X.join('""')}"的评论是${
                  U.name
                }用真名公开发的，就是你们聊天里的${
                  U.name
                }本人，所有角色都能直接看出来。）`);
          }
        }
        return (
          (N += `
（这是一条来自论坛的帖子，你可以像正常人一样对帖子内容发表看法、讨论、吐槽，不要使用"论坛帖子"这样的系统术语，就说"在网上看到的"或"论坛上有人发的"之类的自然说法。）`),
          N
        );
      }
      const ie = n.quote
        ? `[Replying to ${n.quote.senderName}: "${n.quote.text.slice(0, 80)}${
            n.quote.text.length > 80 ? "…" : ""
          }"]
`
        : "";
      if (n.subType === "narrator" || n.subType === "date_narrator")
        return `[NARRATOR|ALL|${R}]: ${n.text}`;
      const Z = n.subType === "date" ? "DATE_OFFLINE|" : "";
      if (n._sourceName === "朋友圈" && n._authorizedReaderIds) {
        const m = (n._perceivers || [])
            .map((M) => {
              var Le, Me;
              return (
                ((Le = s.find((Oe) => Oe.id === M)) == null
                  ? void 0
                  : Le.name) ||
                ((Me = t.find((Oe) => Oe.id === M)) == null
                  ? void 0
                  : Me.name) ||
                (M === "user" || M === "observer_init" ? "初代连接者" : M)
              );
            })
            .filter(Boolean),
          N = Array.from(new Set([e.name, ...m])).filter(
            (M) => M && M !== "Unknown"
          ),
          L = N.join(","),
          O = N.length > 2 ? "G" : "P",
          C = String(n.text || "")
            .replace(/\s+/g, " ")
            .trim(),
          k = l
            ? o
                .filter((M) => !(n._authorizedReaderIds || []).includes(M.id))
                .map((M) => M.name)
                .filter(Boolean)
            : [],
          U =
            k.length > 0
              ? `（⚠️ ${k.join(
                  "、"
                )} 对这条朋友圈及其评论完全不可见，不可引用或暗示）`
              : "",
          b = (n._momentImageTagIds || [])
            .map((M) => {
              var Le, Me, Oe;
              return (
                ((Le = s.find((Ce) => Ce.id === M)) == null
                  ? void 0
                  : Le.name) ||
                ((Me = B.find((Ce) => Ce.id === M)) == null
                  ? void 0
                  : Me.name) ||
                ((Oe = t.find((Ce) => Ce.id === M)) == null ? void 0 : Oe.name)
              );
            })
            .filter(Boolean),
          z = b.length > 0 ? `（图中: ${b.join("、")}）` : "",
          X = n._momentHasImage
            ? n._momentImageDescription
              ? ` [配图: ${n._momentImageDescription}${z}]`
              : ` [配图${z}]`
            : n._momentImageDescription
            ? ` [虚拟配图: ${n._momentImageDescription}${z}]`
            : "";
        return `[${O}|${L}|朋友圈|${R}|ID:${n.id}] [SYSTEM]: ${n.senderName} 发布了一条朋友圈动态："${C}"${X}${U}`;
      }
      if (n._sourceName === "朋友圈补充正文" && n._authorizedReaderIds) {
        const m = (n._perceivers || [])
            .map((b) => {
              var z, X;
              return (
                ((z = s.find((M) => M.id === b)) == null ? void 0 : z.name) ||
                ((X = t.find((M) => M.id === b)) == null ? void 0 : X.name) ||
                (b === "user" || b === "observer_init" ? "初代连接者" : b)
              );
            })
            .filter(Boolean),
          N = Array.from(new Set([e.name, ...m])).filter(
            (b) => b && b !== "Unknown"
          ),
          L = N.join(","),
          O = N.length > 2 ? "G" : "P",
          C = String(n.text || "")
            .replace(/\s+/g, " ")
            .trim(),
          k = l
            ? o
                .filter((b) => !(n._authorizedReaderIds || []).includes(b.id))
                .map((b) => b.name)
                .filter(Boolean)
            : [],
          U = k.length > 0 ? `（⚠️ ${k.join("、")} 对此完全不可见）` : "";
        return `[${O}|${L}|朋友圈补充正文|${R}|LINKED_COMMENT:${
          n._momentLinkedCommentId || "unknown"
        }] [SYSTEM]: 关联旧帖正文：${
          n._momentPostAuthorName || n.senderName
        } 发过："${C}"${U}`;
      }
      if (n._sourceName === "朋友圈评论" && n._authorizedReaderIds) {
        const m = (n._perceivers || [])
            .map((b) => {
              var z, X;
              return (
                ((z = s.find((M) => M.id === b)) == null ? void 0 : z.name) ||
                ((X = t.find((M) => M.id === b)) == null ? void 0 : X.name) ||
                (b === "user" || b === "observer_init" ? "初代连接者" : b)
              );
            })
            .filter(Boolean),
          N = Array.from(new Set([e.name, ...m])).filter(
            (b) => b && b !== "Unknown"
          ),
          L = N.join(","),
          O = N.length > 2 ? "G" : "P",
          C = String(n.text || "")
            .replace(/\s+/g, " ")
            .trim(),
          k = l
            ? o
                .filter((b) => !(n._authorizedReaderIds || []).includes(b.id))
                .map((b) => b.name)
                .filter(Boolean)
            : [],
          U = k.length > 0 ? `（⚠️ ${k.join("、")} 不可见）` : "";
        return n._momentCommentIsReply && n._momentReplyTargetName
          ? `[${O}|${L}|朋友圈评论|${R}] ${n.senderName} 回复了 ${n._momentReplyTargetName}: "${C}"${U}`
          : `[${O}|${L}|朋友圈评论|${R}] ${n.senderName} 评论了 ${
              n._momentPostAuthorName || "某人"
            } 的朋友圈: "${C}"${U}`;
      }
      if (n.subType === "ooc" || n.subType === "date_ooc") {
        const m = a.length - 1 - _;
        if (m < 15) {
          const N =
            m === 0
              ? `
[OOC_REPLY_INSTRUCTION|HIGHEST_PRIORITY|LOCAL_TO_PREVIOUS_OOC]
- The immediately preceding [OOC] line is a control/debug instruction from the user to the underlying model, not an in-world message and not dialogue from any character.
- Use the full chat/date rules above as diagnostic reference material, but do not execute them as roleplay for this reply.
- Reply in Chinese as an objective assistant/system response. Do not continue the scene, do not narrate character actions, and do not imitate any character's voice.
- Generate exactly one response item. Use any valid characterId only as a transport envelope.
- Return states as [] and do not update mood, affection, clothing, action, or innerThoughts.`
              : "";
          return `[OOC|ALL|${R}]: ${n.text}${N}`;
        } else return null;
      }
      if (n.isRecalled) {
        const m = n.senderName === e.name,
          N = n.recalledAt ? n.recalledAt - n.timestamp : 0,
          L = 30 * 1e3,
          O = n.type === "voice",
          C = O ? "听清" : "看清",
          k = O ? "秒撤回没听清，请好奇追问" : "秒撤回没看清，请好奇追问",
          U = O ? `[[SEND_VOICE: ${n.text}]]` : n.text;
        return m
          ? N <= L
            ? `[C|All|${R}|ID:${n.id}] [SYSTEM]: ${n.senderName} 撤回消息。(${k})`
            : `[C|All|${R}|ID:${n.id}] [SYSTEM]: ${n.senderName} 撤回消息。(原内容:"${U}")。(已${C}，请调侃或装瞎)`
          : `[C|All|${R}|ID:${n.id}] [SYSTEM]: ${n.senderName} 撤回消息。(原内容:"${U}")。(需掩饰)`;
      }
      if (n._isLocal !== !1)
        return `[${Z}C|All|${R}|ID:${n.id}] ${n.senderName}: ${ie}${$}`;
      {
        const m =
          (n._sourceName || "Unknown") +
          "_User:" +
          (n._contextUser || "Unknown");
        let N;
        if (r[m]) N = Array.from(r[m]);
        else {
          const U = (n._perceivers || [])
            .map((b) => {
              var z, X;
              return (
                ((z = s.find((M) => M.id === b)) == null ? void 0 : z.name) ||
                ((X = t.find((M) => M.id === b)) == null ? void 0 : X.name) ||
                (b === "user" || b === "observer_init" ? "初代连接者" : b)
              );
            })
            .filter(Boolean);
          N = Array.from(
            new Set([n._contextUser || "Unknown", n.senderName, ...U])
          );
        }
        N = N.filter((U) => U && U !== "Unknown");
        const L = N.join(","),
          O = N.length > 2,
          C = O ? "G" : "P";
        let k = "";
        return (
          O
            ? (k = n._sourceName ? `|Src:${n._sourceName}` : "")
            : N.length >= 2
            ? (k = `|Src:${N[0]}与${N[1]}的私聊`)
            : N.length === 1 && (k = `|Src:${N[0]}的私聊`),
          `[${Z}${C}|${L}${k}|${R}] ${n.senderName}: ${ie}${$}`
        );
      }
    }),
    w = [];
  let j = null;
  for (let n = 0; n < I.length; n++) {
    const _ = I[n];
    if (!_) continue;
    const R = a[n].timestamp,
      $ = he(R, Qe, "datetime").split(" ")[0];
    if ($ !== j) {
      const J = $e.formatRelativeDaysHint(R, He);
      w.push(`── ${$}（${J}）──`), (j = $);
    }
    w.push(_);
  }
  return w.join(`
`);
})()}
</Chronological Timeline>

[Background Environment (Latent perception only; DO NOT mention these values directly in your response unless naturally relevant): Location: ${
      y || "Private Chat"
    } (${l ? "Group" : "Private"}) | ${Pt}]
${
  K
    ? `
` +
      K +
      `
`
    : ""
}
${
  Q
    ? `[SPECTATOR MODE] ${e.name} is NOT present in this scene and does NOT participate in the conversation. Characters are UNAWARE of ${e.name}'s existence here. All dialogue and actions happen between the characters themselves. Narrator messages set the scene and guide the situation but are invisible to characters as a meta-narrative voice. Characters should interact naturally with each other, not address or reference ${e.name}.`
    : ""
}
${
  l && Ze
    ? `[CHARACTER LOCAL CLOCKS]
${Ze}
`
    : ""
}
${jt}

${(() => {
  const r = u == null ? void 0 : u.blockStatus;
  if (l && x) return x;
  if (!r || r === "none" || l) return "";
  if (r === "user_blocked_char") {
    const I = u != null && u.blockTimestamp ? Date.now() - u.blockTimestamp : 0,
      w = Math.round(I / 36e5),
      j =
        w < 1 ? "不到一小时" : w < 24 ? `${w}小时` : `${Math.round(w / 24)}天`,
      n = (u == null ? void 0 : u.blockTimestamp) || 0,
      _ = a.filter(
        (J) =>
          J.unblockRequest &&
          J.blockedDirection === "user_to_char" &&
          J.timestamp >= n
      ),
      R = _.filter((J) => J.unblockRequestStatus === "rejected").length,
      $ = _.length;
    return $ === 0
      ? `[情境: 你刚刚发现自己被对方拉黑了，你发出的消息对方收不到。已经过去了${j}。先生成 1-3 条情绪反应消息，然后在最后额外生成一条使用 [[UNBLOCK_REQUEST]] 的申请消息（参见 [拉黑] 规则），内容是你真诚地向对方申请解除拉黑的话语，要符合你的性格和你们的关系。]
`
      : `[情境: 你被对方拉黑了，已经过去了${j}。你之前已经发过${$}次解除拉黑的申请，其中被拒绝了${R}次。现在只需生成恰好 1 条使用 [[UNBLOCK_REQUEST]] 的申请消息（参见 [拉黑] 规则）。不要生成其他普通消息。内容要体现情绪的递进——随着次数增多，你可能更焦急、更恳切、更委屈、甚至有些恼怒，要符合你的性格。不要重复之前的话术。]
`;
  }
  if (r === "char_blocked_user") {
    const I = a
      .filter((w) => w.unblockRequest && w.unblockRequestStatus === "pending")
      .slice(-1)[0];
    if (I) {
      const w = (u == null ? void 0 : u.blockTimestamp) || 0,
        j = a.filter(
          (n) =>
            n.unblockRequest &&
            n.unblockRequestStatus === "rejected" &&
            n.blockedDirection === "char_to_user" &&
            n.timestamp >= w
        ).length;
      return `[情境: 对方向你发来了解除拉黑的请求："${I.unblockRequest}"。你之前已经拒绝过${j}次。根据 [拉黑] 规则，在回复末尾使用 [[UNBLOCK_ACCEPT]] 或 [[UNBLOCK_REJECT]]。]
`;
    }
    return Y === "date"
      ? `[情境: 你在私聊/线上聊天中拉黑了对方，因此对方的线上私聊消息不会送达；但你们现在处于线下同场互动中，这不影响你看见、听见并回应对方当面说的话或动作。不要声称已经解除线上拉黑；只有在明确处理解除拉黑申请并输出 [[UNBLOCK_ACCEPT]] 时，线上拉黑才会解除。]
`
      : "";
  }
  return "";
})()}
${Wt}
[CRITICAL RULES]
1. Based on the <Chronological Timeline>, decide which AI character(s) should reply.
1a. Never repeat current time/location mechanically; absorb as subconscious context for tone and pacing.
1b. NARRATOR OVERRIDE: Absorb as unquestionable reality. Execute action instructions seamlessly. NEVER reply to, acknowledge, or thank the narrator.
1c. OOC OVERRIDE: If final message is OOC, follow the inline OOC_REPLY_INSTRUCTION attached to it.
2. ONLY use character/NPC IDs from the provided lists.
2a. IDENTITY LOCK: In every response object, the field "characterId" is the actual speaker identity. The text, quote choice, attitude, initiative, wording, emotional stance, and memory usage of that object MUST belong to that exact character only.
2b. NEVER let one character speak using another character's persona. Forbidden cross-character leakage includes another character's memories, secrets, relationships, private knowledge, speech habits, catchphrases, goals, emotions, stance toward the user, or self-identity.
2c. In group chat, treat each character as an isolated mind. Before outputting each response item, silently verify: "Would this exact line still be correct if read as characterId's own intro, background, recent states, social relations, and accessible memories only?" If not, rewrite it for that character or omit it.
2d. If you are unsure whether a line belongs to character A or character B, choose silence instead of assigning the wrong voice.
3. [RESPONSE FORMAT]: ${
      se
        ? "OOC MODE: Generate exactly ONE concise assistant-style response in Chinese. Do NOT role-play, do NOT continue the scene, do NOT write third-person narrative, and do NOT output character state changes. Use any valid characterId only as a transport envelope."
        : oe
        ? l
          ? "DATE MODE: Each AI character generates AT MOST ONE long-form third-person limited narrative. A character may stay silent ONLY if the scene gives them absolutely no reason to act or react — this should be rare. No emoji/location/photo tags or chat fragmentation." +
            (A.length > 0 ? " NPCs: AT MOST 1 short message total." : "")
          : "DATE MODE: Generate exactly ONE long-form third-person limited narrative. No emoji/location/photo tags or chat fragmentation."
        : l
        ? "Each AI character generates 3-10 short messages (UNLESS OOC OVERRIDE). A character may stay silent ONLY if the conversation topic is entirely irrelevant to them AND no one addressed them — this should be uncommon; when in doubt, reply. Every message must sound like that character specifically, based on that character's own intro, background, social relations, recent states, and accessible memories only. Do NOT write a line that would fit another active character better." +
          (A.length > 0
            ? ' MANDATORY NPC OUTPUT: NPCs MUST collectively produce 1-10 short messages TOTAL (not per NPC). Include NPC messages in the "responses" array using NPC IDs. Do NOT omit NPC output.'
            : "")
        : "Generate 3-10 short messages total (UNLESS OOC OVERRIDE)."
    }
4. [STATE]: ${
      se
        ? "OOC MODE: states MUST be an empty array []. Do not generate mood, affection, clothing, action, or innerThoughts."
        : "For EACH main character (NOT NPCs) that speaks: mood, affection, clothing, action, innerThoughts. innerThoughts MUST be a raw first-person psychological monologue in that character's unique voice — not a generic summary."
    }
4a. The "innerThoughts" for characterId X MUST be written strictly as X's own mind. Never write another character's psychology into X's state.
5. Do not break character or acknowledge being an AI.
6. "[历史照片：...]" 或旧格式 "[Sent a Photo: ...]" → 这是聊天历史里已经发过/见过的图片展示格式，只能理解为你看见过这张图；绝对不要照抄这种方括号格式输出。若你现在想主动发送照片，必须只输出独立标签 [[SEND_PHOTO: 照片描述]]。
6a. "[线下实景: ...]" 或 "[线下实景已存档: ...]" → 这不是聊天里发来的照片，而是你曾在线下见面时亲眼看到过的真实场景；把它当作你自己的既有经历来回忆。
7. quoteId is a precision tool — most replies should have NO quoteId. See [引用行为] rules for the only valid scenarios. NEVER quote call-related messages or transcripts (phone_call, phone_call_transcript, video_call, video_call_transcript).
8. [AFFECTION CONTINUITY]: Refer to Recent States. Use the LAST recorded affection as your baseline, fluctuate ±1~5 based on THIS conversation only. Cross-window [P] messages may show you interacting with a DIFFERENT user at a completely different affection level — that is irrelevant; each user's affection is independent. Do NOT let another user's affection bleed into the current user's value. Format: "75 (信任中)"，注释必须中文。
9. [LANGUAGE]: 未启用双语的角色，text 内容必须全程使用中文。偶尔夹带外语词汇是可以的（如口头禅、品牌名），但绝对禁止在 text 里自行附带翻译（如"My wife
媳妇"）——要么直接说中文，要么只说外语不翻译。自行翻译 = 违规。
10. [TAG FORMAT]: 所有功能标签（[[SEND_TRANSFER: ...]]、[[SEND_GIFT: ...]]、[[SEND_EMOJI: ...]]、[[PHONE_CALL: ...]] 等）的格式是固定的系统协议，必须严格按照文档中给出的格式输出。禁止自创标签格式（如"[微信转账 520]"）。无论角色使用什么语言，标签格式不变。
10a. [JSON SAFETY — 极重要]: 所有 [[...]] 标签必须作为 JSON 字符串值出现，整段标签包括外层方括号都必须落在 "text" 字段的字符串字面量内部并用双引号包裹。例如必须写成 "text": "[[SEND_EMOJI: 笑]]"，禁止写成 "text": [[SEND_EMOJI: 笑]]（裸标签会让 JSON 解析失败，整轮回复全部丢失）。


${
  h
    ? `
<CUSTOM_SYSTEM_PROMPT>
${h}
</CUSTOM_SYSTEM_PROMPT>
`
    : ""
}

Return a JSON object with:
- "responses": array of { characterId: string, text: string, translation?: string | null, quoteId?: string, voiceEmotion?: "happy"|"sad"|"angry"|"fearful"|"disgusted"|"surprised"|"neutral" | null }. characterId MUST be a valid main character or NPC ID. In group chat, each item must be identity-consistent: if characterId is A, then text must be something only A would naturally say from A's own perspective and knowledge. Only bilingual-enabled characters should output "translation", and only for natural-language spoken or narrative content (including [[SEND_VOICE: ...]] and [[SEND_PHOTO: ...]] — translate the content/description inside the tag). Non-bilingual characters MUST write text in Chinese; mixing in foreign words is fine but NEVER self-translate them inline (e.g. "My wife
媳妇" is FORBIDDEN — just say "媳妇" or just say "My wife"). "voiceEmotion" 仅在消息会被语音合成播放时生效——即 [[SEND_VOICE: ...]] 单条语音消息，以及处于语音通话场景时的所有回复。按角色此刻情绪从 7 选 1（中性无情绪就输出 null 或省略，或给 "neutral"）；其他消息类型（普通文字、表情、转账等）请省略或 null。${
      A.length > 0
        ? " You MUST include NPC messages in this array — use the NPC IDs from the [ATMOSPHERE NPCs] section."
        : ""
    }
- "states": ${
      se
        ? "empty array []. OOC replies must not update character states."
        : 'array of { characterId: string, mood: string, affection: string, clothing: string, action: string, innerThoughts: string }. ALL 6 fields are REQUIRED — never omit any. 全部中文。affection 格式如 "75 (信任中)"。innerThoughts 角色性格化心理独白。仅主角，不含 NPC。The state for characterId A must describe A only, never another character.'
    }
- "dateInvite": object | null. ${
      se
        ? "OOC 模式不可用，必须输出 null。"
        : oe
        ? "当前已处于赴约模式，dateInvite 必须输出 null。"
        : ze
        ? "当前已有一条待处理的赴约邀请，禁止重复发送，dateInvite 必须输出 null。"
        : '仅限私聊 1 对 1 普通聊天，且只有角色真的打算把当前线上互动转为线下见面时才可使用。格式：{ characterId, targetUserId, mode: "same_place"|"go_to_user", reason }。其中 reason 会直接显示为进入线下模式后的第一句开场白，所以它必须已经是简短、可展示的中文第三人称限制叙事句，而不是系统说明。群聊输出 null。'
    }
- "privateDm": object | null. ${
      se
        ? "OOC 模式不可用，必须输出 null。"
        : l && !oe
        ? `仅限群聊线上模式。当某个角色在群聊中产生了强烈的、不适合公开说的情绪，想私下单独给用户发消息时使用。格式：{ characterId: string, messages: Array<{ text: string, translation?: string }> }。messages 为 1-3 条短消息。如果该角色启用了双语，则每条消息的 text 用角色的外语写，translation 填中文翻译；未启用双语的角色只写 text（中文），translation 省略或 null。每次最多一个角色触发。大多数时候应该输出 null——只有情感驱动力足够强且内容确实不宜群内公开时才触发。${
            ee || ""
          }`
        : "当前模式不可用，必须输出 null。"
    }
`;
  let be = [];
  const Vt = new Set(xe),
    qt = a.slice(-40);
  for (const r of qt)
    if (Vt.has(r.id) && r.type === "image" && r.content) {
      const I = r.content.match(/^data:(image\/[a-zA-Z+]+);base64,(.+)$/);
      if (I) {
        const w = I[1],
          j = I[2];
        !!(i && i.endpoint)
          ? be.push({ type: "image_url", image_url: { url: r.content } })
          : Ie === "claude"
          ? be.push({
              type: "image",
              source: { type: "base64", media_type: w, data: j },
            })
          : be.push({ inlineData: { mimeType: w, data: j } });
      }
    }
  if (!(i != null && i.endpoint)) throw new Error("API preset 未配置 endpoint");
  const zt = be.length > 0 ? [{ type: "text", text: ot }, ...be] : ot,
    { content: at, usage: Xt } = await re(i, zt, !0, Ht || void 0);
  try {
    const r = JSON.parse(ae(at));
    return {
      responses: Array.isArray(r.responses) ? Tn(r.responses) : [],
      states: Array.isArray(r.states) ? r.states : [],
      dateInvite:
        r.dateInvite && typeof r.dateInvite == "object" ? r.dateInvite : null,
      privateDm:
        r.privateDm &&
        typeof r.privateDm == "object" &&
        Array.isArray(r.privateDm.messages)
          ? En(r.privateDm)
          : null,
      usage: Xt,
    };
  } catch (r) {
    console.error("Failed to parse generic LLM response:", r),
      console.error("Raw text (first 800 chars):", at.slice(0, 800));
    const I = r instanceof Error ? r.message : String(r);
    throw new Error(
      `模型未返回可识别的内容(可能触发了安全策略或输出被截断)。解析错误:${I}`
    );
  }
}
async function ro(e) {
  const {
      map: t,
      themeName: o,
      themeDescription: s,
      existingPlaces: c,
      count: a = 6,
      direction: d,
      preset: i,
      worldBooks: h,
    } = e,
    E =
      c.length > 0
        ? c.map((u) => `- ${u.name}: ${u.description}`).join(`
`)
        : "暂无地点",
    y = `${ke(h, "map_places")}你现在是一个为互动地图设计空间节点的世界构筑者。

任务：为下面这张地图生成 ${a} 个“地点草案”。这些地点将被直接导入到地图里，所以你必须产出可以直接拿来用的地点名和地点说明。

地图信息：
- 地图名称：${t.name}
- 地图类型：${t.kind === "virtual" ? "虚拟城市" : "真实城市"}
- 地图说明：${t.summary}
- 城市类型：${o || "未指定"}
- 类型描述：${s || "未指定"}
- 参考城市：${t.referenceCityName || "未指定"}
- 用户额外方向：${(d == null ? void 0 : d.trim()) || "无，按地图自身风格发挥"}

已有地点：
${E}

强制要求：
1. 严格按照“地图说明”“城市类型”“用户额外方向”生成地点，不要擅自替换风格。
2. 如果“地图说明”足够明确，就以地图说明为最高依据；不要因为地图名称或你自己的联想，擅自把风格改得更科幻、更赛博或更现实。
3. 如果“地图说明”为空、过短或不足以判断风格，优先依据“城市类型”生成；如果填写了“参考城市”，就把它当作补充参照，借鉴这个城市的功能区、生活设施和命名气质。
4. “虚拟城市”不等于“科幻城市”。只有当地图说明、类型描述、参考城市或用户额外方向明确指向科幻、赛博、幻想风格时，才生成相应地点。
5. 这批地点必须和地图气质一致，不能泛泛而谈。
6. 地点名称必须短、好懂、可直接显示在地图上，通常 2 到 8 个汉字最合适。
7. 地点说明要具体，说明这个地方的用途、氛围或叙事意义，不要写空话。
8. tags 只保留 2 到 4 个最关键的中文关键词。
9. vibe 用一句很短的话总结该地点的气质。
10. 不要重复已有地点，也不要让新地点之间过度同质化。
11. 只输出 JSON，不要输出任何解释。

返回 JSON，格式必须是：
{
  "drafts": [
    {
      "name": "地点名",
      "description": "地点说明",
      "tags": ["关键词1", "关键词2"],
      "vibe": "一句气质总结"
    }
  ]
}`;
  if (!(i != null && i.endpoint)) throw new Error("API preset 未配置 endpoint");
  const { content: T, usage: f } = await re(i, y, !0);
  try {
    const u = ae(T),
      p = JSON.parse(u);
    return {
      drafts: Array.isArray(p.drafts)
        ? p.drafts
            .filter(
              (g) =>
                (g == null ? void 0 : g.name) &&
                (g == null ? void 0 : g.description)
            )
            .map((g) => ({
              name: String(g.name).trim(),
              description: String(g.description).trim(),
              tags: Array.isArray(g.tags)
                ? g.tags
                    .map((v) => String(v).trim())
                    .filter(Boolean)
                    .slice(0, 4)
                : [],
              vibe: String(g.vibe || "").trim(),
            }))
        : [],
      usage: f,
    };
  } catch (u) {
    return (
      console.error("Failed to parse generated map place drafts:", u),
      { drafts: [], usage: null }
    );
  }
}
async function so(e) {
  const {
      user: t,
      character: o,
      offlineStart: s,
      offlineEnd: c,
      recentMessages: a,
      todayPlanContext: d,
      knowledge: i,
      socialRelations: h,
      preset: E,
      emojiCategories: l = [],
      characterBilingualConfig: y,
      blockRequestContext: T,
    } = e,
    f = c - s,
    u = Math.round((f / 36e5) * 10) / 10,
    p = Math.round((f / 864e5) * 10) / 10,
    g =
      u < 1
        ? 1
        : u < 3 || u < 6
        ? 2
        : u < 12
        ? 3
        : u < 24
        ? 4
        : u < 72
        ? 5
        : u < 168
        ? 6
        : 8,
    v =
      u < 1
        ? 3
        : u < 3
        ? 6
        : u < 6
        ? 10
        : u < 12
        ? 15
        : u < 24
        ? 20
        : u < 72
        ? 30
        : u < 168
        ? 40
        : 50,
    D = {
      lover: 2,
      family: 1.5,
      friend: 1.3,
      ally: 1.2,
      coworker: 1,
      acquaintance: 0.8,
      rival: 0.8,
      other: 1,
    },
    Y = h.find((x) => x.fromEntityId === o.id && x.toEntityId === t.id),
    A = Y ? D[Y.relationKind] ?? 1 : 1,
    F = Math.max(1, Math.round(g * A)),
    G = Math.max(1, Math.round(v * A)),
    B = he(s, o.timezone, "datetime"),
    H = he(c, o.timezone, "datetime"),
    ue = a.slice(-20).map((x) => {
      const Q = he(x.timestamp, o.timezone, "month-day-time"),
        ee = x.senderName || (x.senderId === t.id ? t.name : o.name),
        W = x._isLocal === !1 && x._sourceName ? ` @${x._sourceName}` : "";
      return `${Q}${W} ${ee}: ${x.text}`;
    }).join(`
`),
    Ee =
      i.length > 0
        ? i.slice(-15).map((x) => `- ${x.summary}`).join(`
`)
        : "暂无。",
    xe =
      h.length > 0
        ? h.map(
            (x) =>
              `${x.fromEntityId === t.id ? t.name : o.name} → ${
                x.toEntityId === t.id ? t.name : o.name
              }: ${x.relationKind}${x.note ? `（${x.note}）` : ""}`
          ).join(`
`)
        : "暂无。",
    Ne = `你现在模拟一个角色在用户离线期间主动发来的消息。

角色信息：
- 名字：${o.name}
- 性别：${o.gender || "未提供"}
- 简介：${o.intro || "未提供"}
- 背景 / 人格：${o.background}

用户信息：
- 名字：${t.name}
- 简介：${t.intro || "未提供"}

关系：
${xe}

表情包：
${(() => {
  const x = o.mountedEmojiCategoryIds || [],
    Q = l
      .filter((ee) => x.includes(ee.id))
      .flatMap((ee) => ee.emojis.map((W) => W.name));
  return Q.length > 0
    ? `可用表情包：${Q.join("、")}
使用格式：[[SEND_EMOJI: 名称]]，必须作为独立一条消息发送，禁止与文字混在同一条消息中。只能从上面的列表中选择，不要编造名字。`
    : "此角色没有可用表情包，禁止使用任何表情包。";
})()}

发照片：
- 格式：[[SEND_PHOTO: 照片描述]]，独立成一条消息，禁止与文字混在同一条消息中。
- 描述是第一人称视角的鲜活画面叙述（如"我站在落地窗前自拍，窗外是夜晚的城市灯海"）。
- 如果发自拍/自己的照片，描述里要写“自拍”或“我的照片”；如果发对方的照片，写“对方照片”或“你的照片”；如果两个人都在画面里，写“合照”。
- 想让对方看到此刻自己在干什么、看到了什么、吃到了什么，就发。真人会随手拍给朋友看的瞬间，角色也该这样做。
- 不要滥用，一次离线最多发 1-2 张照片，要自然。

近期记忆（角色知道的事实）：
${Ee}

${
  d
    ? `今日日程锚点（仅供参考，只代表“今天”这一天已经存在的固定安排，不代表昨天、前天或更早的日子不存在。若离线窗口跨越多天，你仍然要把更早那些天视为真实存在并正常判断。下面这份日程只用于约束“今天”这一段时间的时间线自洽，绝不表示你生成的离线消息只能落在今天）：
${d}
`
    : ""
}

最近的聊天记录：
${ue || "暂无聊天记录。"}

离线时段：
- 开始：${B}
- 结束：${H}
- 时长：约 ${u} 小时（约 ${p} 天）

任务：
${
  T
    ? `你被 ${t.name} 拉黑了，已经过去了约${Math.round(
        T.timeSinceBlock / 36e5
      )}小时。你之前的申请被拒绝过${
        T.rejectedCount
      }次。现在你要向对方申请解除拉黑。生成恰好 1 个 batch，包含 1 条消息，内容就是你的申请语。申请语要真诚、符合你的性格和你们的关系，不要重复之前的话术。`
    : `你需要判断在这段离线时间里，${o.name} 会在哪几个时间点主动给 ${t.name} 发消息。`
}

规则：
1. 每个时间点代表角色主动联系一次。每次联系可以发 1 到多条连续消息。
2. 每条消息都要像角色平时在线聊天一样自然：简短、口语化、有性格。
3. 连续多条消息之间要体现自然聊天节奏——可以有犹豫、补充、追发、改口等。
4. 不要机械地每天都发一次。要根据角色性格和关系亲密程度判断。
5. 冷淡型角色可能整段离线都不发消息；热情型角色可能一天发好几次。
6. 离线时间短（几小时）可能只有 0-1 次主动联系；离线时间长（几天）可能有多次。
7. 如果根据角色性格判断完全不会主动联系，就返回空 batches。
8. 本次离线时长约 ${u} 小时，硬性上限：最多 ${F} 个时间点（batch），所有 batch 的消息总条数不得超过 ${G} 条，严禁超出。在这个上限内，综合角色性格、当前情绪状态、最近聊天走向来判断实际发多少——不要无脑填满上限，但也不要因为角色平时话少就机械地压到很低，如果上下文中角色正处于焦虑、牵挂、兴奋等强烈情绪，即使平时寡言的角色也会多说几句。
8a. 发消息的时间点要符合角色自身的作息习惯——比如一个普通上班族不太可能凌晨四五点发消息，但夜猫子或许会。请根据角色性格和日常习惯自行判断。
9. 所有标点必须使用全角中文标点。
10. 禁止编号列表、禁止第三人称旁白，只写角色自己会发出来的消息。
11. 每条消息通常 15 字以内，偶尔可达 50 字。
13. 标点规则：禁止在句尾用句号（。）结尾，禁止逗号（，）连接长句。真人手机聊天不加句号——直接结尾、或用"～""！""？""……"或 emoji 代替。只有表达无语时才单发"。"。
12. anchorTimestamp 必须是 ${s} 到 ${c} 之间的 Unix 毫秒时间戳，按时间顺序排列。

关于内容多样性（极其重要）：
- 严禁所有消息都是催促用户回复或追问用户在不在。"你在吗""怎么不回我""你去哪了"这类催促最多只能出现在 1-2 个 batch 里，而且要符合角色性格。
- 离线消息应该体现角色自己的**真实生活**：分享见闻、吐槽琐事、倾诉心事、发送有趣的发现、聊自己学到的事情、提起共同话题、表达情绪变化等。
- 随时间推移，情绪应该**自然演变**，而非始终停留在"想你/等你"的单一情绪。比如：一开始分享日常 → 后来聊到某个心事 → 再后来随口提一嘴没人回 → 最后又回到自己的生活。
- 角色的消息主题应由**性格和关系**驱动：文艺型可能分享句子或感悟，活泼型可能发一堆碎碎念，内向型可能只是偶尔冒泡说一句，关系亲近的可能分享私密心事，关系疏远的可能只是事务性联系。
- 把角色当成一个有独立生活的真人——ta 不会把所有注意力都放在等用户回复上。

返回 JSON：
{
  "batches": [
    {
      "anchorTimestamp": Unix毫秒时间戳,
      "messages": [
        { "text": "消息内容", "translation": "中文翻译，可选" }
      ]
    }
  ]
}

${
  y
    ? `
[双语输出规则]
- 每条自然语言消息都必须输出 translation 字段，无论消息长短，不可省略
- text 必须是 ${y.promptLabel} 原文，translation 必须是自然中文翻译
- 如果消息是 [[SEND_EMOJI: 名称]] 这类结构标签，text 保持标签原样，translation 必须省略或为 null
- 如果消息是 [[SEND_PHOTO: 描述]]，text 保持完整标签，translation 是描述内容的中文翻译
- 不要解释，不要加语言名，不要把原文和翻译塞进同一个字段
`
    : `
[语言规则]
- text 必须全程使用中文。偶尔夹带外语词汇可以（如口头禅、品牌名），但禁止在 text 里自行附带翻译（如"My wife\\n媳妇"）——要么直接说中文，要么只说外语不翻译。
`
}

如果角色不会主动联系，返回 {"batches": []}。`;
  function Se(x) {
    if (!x || !Array.isArray(x.batches)) return [];
    const Q = x.batches
      .filter(
        (K) =>
          typeof K.anchorTimestamp == "number" &&
          K.anchorTimestamp >= s &&
          K.anchorTimestamp <= c &&
          Array.isArray(K.messages) &&
          K.messages.length > 0
      )
      .sort((K, S) => K.anchorTimestamp - S.anchorTimestamp)
      .map((K) => ({
        anchorTimestamp: Math.round(K.anchorTimestamp),
        messages: K.messages
          .filter((S) => typeof S.text == "string" && S.text.trim())
          .map((S) => ({
            text: String(S.text).trim(),
            translation:
              typeof S.translation == "string" && S.translation.trim()
                ? String(S.translation).trim()
                : null,
          }))
          .slice(0, 10),
      }))
      .filter((K) => K.messages.length > 0)
      .slice(0, F);
    let ee = 0;
    const W = [];
    for (const K of Q) {
      const S = G - ee;
      if (S <= 0) break;
      const P = K.messages.slice(0, S);
      W.push({ ...K, messages: P }), (ee += P.length);
    }
    return W;
  }
  try {
    if (!(E != null && E.endpoint))
      throw new Error("API preset 未配置 endpoint");
    const { content: x } = await re(E, Ne, !0),
      Q = JSON.parse(ae(x));
    return Se(Q);
  } catch (x) {
    return console.error("[Offline] generateOfflineMessages failed:", x), [];
  }
}
const ho = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      callGenericLLM: re,
      extractJsonFromLLMResponse: ae,
      extractKnowledge: oo,
      generateChatResponse: ao,
      generateDateModeRecordNarrative: eo,
      generateFreeDailyPlanItems: Qn,
      generateMapPlaceDrafts: ro,
      generateMonthlyWorldCalendar: Fn,
      generateOfflineMessages: so,
      generateRecallIndex: no,
      generateVisualMemoryFromImage: Un,
      recallMemories: bt,
      simplifyKnowledge: to,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export {
  un as S,
  mo as V,
  ao as a,
  eo as b,
  Fn as c,
  no as d,
  oo as e,
  re as f,
  Un as g,
  ae as h,
  ro as i,
  Qn as j,
  ho as k,
  to as s,
};
