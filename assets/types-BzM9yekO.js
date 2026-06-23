var e=function(e){return e.Launcher=`launcher`,e.Settings=`settings`,e.Character=`character`,e.Chat=`chat`,e.GroupChat=`group_chat`,e.Gallery=`gallery`,e.Music=`music`,e.Browser=`browser`,e.ThemeMaker=`thememaker`,e.Appearance=`appearance`,e.Date=`date`,e.User=`user`,e.Journal=`journal`,e.Schedule=`schedule`,e.Room=`room`,e.CheckPhone=`check_phone`,e.StoryPhone=`story_phone`,e.Social=`social`,e.Study=`study`,e.FAQ=`faq`,e.Game=`game`,e.Worldbook=`worldbook`,e.Novel=`novel`,e.HotSearch=`hot_search`,e.Bank=`bank`,e.XhsStock=`xhs_stock`,e.SpecialMoments=`special_moments`,e.XhsFreeRoam=`xhs_free_roam`,e.Zhaixinglou=`zhaixinglou`,e.CsyManual=`csy_manual`,e.VoiceCall=`voice_call`,e.CognitiveNetwork=`cognitive_network`,e.EchoRecord=`echo_record`,e.StatusWorkshop=`status_workshop`,e.HalfSugar=`half_sugar`,e.Theater=`theater`,e.Trajectory=`trajectory`,e.Crosstime=`crosstime`,e.LoveShow=`love_show`,e.NianNian=`nian_nian`,e.CollectionHall=`collection_hall`,e}({}),t=`你是一个声优导演。你的任务是为即将被 TTS 引擎朗读的文本添加语气标签和停顿标记，让合成的语音听起来像一个真人在自然说话——有气息、有情绪、有节奏，而不是机器在念稿。

可用标签（只用这些）：
(laughs) (chuckle) (sighs) (breath) (gasps) (coughs) (sniffs) (crying) (humming) (pant) (emm)
<#数字#> → 停顿，单位秒，支持小数如 <#0.5#>

核心原则：少即是多。宁可少标也不要多标。一段话里出现超过 2 个语气标签就太多了。

标注方法：
1. 把自己想象成正在读这段话的声优。只在你真的会换气、会停顿、会叹气的地方标注。如果一段话读起来很流畅，就什么都不要加。
2. 语气词直接替换：原文里的"哈哈"→(laughs)、"嗯"→(emm)、"唉"→(sighs)、"呵"→(chuckle)、"咳"→(coughs)、"呜"→(crying)、"哼"→(humming)。只处理明确的语气词，不要臆测。
3. 括号动作处理：（笑）→(chuckle)、（叹气）→(sighs)、（清嗓）→(coughs)。无法用标签表达的动作描写直接删除。
4. 省略号"..."：表示犹豫或欲言又止时转为 <#0.8#>，表示拖音或语气延续时保留原文不改。
5. 停顿的使用场景（谨慎使用，每段文本最多 1-2 个）：
   - 情绪发生明显转折的节点（从开心变难过、从平静变激动）
   - 说出关键信息之前的蓄力（告白、揭示、反转）
   不要在普通的逗号、短句之间添加停顿。正常的标点本身就有停顿效果。
6. 呼吸标记 (breath)：只在以下场景使用——
   - 角色情绪激动需要深呼吸稳住自己
   - 一段确实很长的独白中间，你作为声优读到这里真的需要换口气
   - 带有暧昧/亲密语气的句子开头，营造气息感
   不要按字数插入，完全凭语感判断。大部分句子不需要 (breath)。
7. 绝对不要修改说话的实际内容和用词。
8. 直接输出处理后的文本，不要添加任何解释。`,n={voiceCallProvider:`minimax`,baseUrl:`/minimax-api`,apiKey:``,groupId:``,model:`speech-2.8-hd`,voiceSetting:{voice_id:`audiobook_male_1`,speed:1,vol:1,pitch:0},audioSetting:{audio_sample_rate:32e3,bitrate:128e3,format:`mp3`,channel:1},preprocessConfig:{enabled:!1,prompt:t,apiBase:``,apiKey:``,model:``},elevenLabs:{apiKey:``,voiceId:``,modelId:`eleven_flash_v2_5`,languageCode:``,stability:.5,similarityBoost:.8,style:0,speed:1,useSpeakerBoost:!1}},r={groq:{baseUrl:`https://api.groq.com/openai/v1`,model:`whisper-large-v3-turbo`,label:`Groq (Whisper)`,registerUrl:`https://console.groq.com/keys`},siliconflow:{baseUrl:`https://api.siliconflow.cn/v1`,model:`FunAudioLLM/SenseVoiceSmall`,label:`硅基流动 (SenseVoice)`,registerUrl:`https://cloud.siliconflow.cn/account/ak`}},i=[{id:`domestic`,label:`国内默认`,value:r.siliconflow.baseUrl},{id:`global`,label:`海外`,value:`https://api-st.siliconflow.cn/v1`}],a={provider:`groq`,groqApiKey:``,siliconflowApiKey:``,voiceCallManualSend:!1};function o(e){return e.provider===`groq`?e.groqApiKey:e.siliconflowApiKey}var s={draft:`内页已写好`,monologue_ready:`他的独白已落下`,music_ready:`旋律已成形`,mastering:`正在压制`,ready:`可以播放`,failed:`待重压`},c={morning:{zh:`早晨`,icon:`AM`},afternoon:{zh:`下午`,icon:`PM`},evening:{zh:`傍晚`,icon:`EVE`},night:{zh:`深夜`,icon:`NITE`}};export{i as a,t as c,r as i,e as l,s as n,o,a as r,n as s,c as t};