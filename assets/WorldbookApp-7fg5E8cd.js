import{o as e}from"./rolldown-runtime-CMxvf4Kt.js";import{t}from"./react-ICqv4BO6.js";import{t as n}from"./jsx-runtime-DDrWIXeu.js";import{Bt as r,Vt as i}from"./index-YamY73pN.js";var a=e(t(),1),o=n(),s=`
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Archivo:wght@400;500;600;700&family=Noto+Serif+SC:wght@400;500;600;700&display=swap');

.wb-root{
  --paper:#F1F0EB; --paper-2:#E8E6DD; --card:#F7F6F2;
  --ink:#1A1A18; --ink-2:#4D4C47; --ink-3:#8C8A82;
  --line:rgba(26,26,24,.16); --line-2:rgba(26,26,24,.36);
  --paper-line:rgba(241,240,235,.45);
  --oxblood:#6E2A28;
  --serif:"Fraunces","Songti SC","STSong","Noto Serif SC","Source Han Serif SC",serif;
  --sans:"Archivo",system-ui,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;
  --mono:ui-monospace,SFMono-Regular,"SF Mono",Menlo,monospace;
  position:relative; isolation:isolate; height:100%; width:100%;
  display:flex; flex-direction:column; overflow:hidden;
  background:var(--paper); color:var(--ink); font-family:var(--sans);
  -webkit-font-smoothing:antialiased;
}
.wb-root *,.wb-root *::before,.wb-root *::after{box-sizing:border-box;}
.wb-grain{position:absolute;inset:0;pointer-events:none;z-index:0;opacity:.05;mix-blend-mode:multiply;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}

.wb-cover{position:relative;z-index:10;background:var(--ink);color:var(--paper);
  display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 18px;flex:none;}
.wb-cover.compact{padding:14px 16px;}
.wb-mark{display:flex;flex-direction:column;gap:3px;line-height:1;align-items:center;flex:1;min-width:0;}
.wb-eyebrow{font-family:var(--sans);font-size:8.5px;font-weight:600;letter-spacing:.26em;
  text-transform:uppercase;color:rgba(241,240,235,.5);max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.wb-wordmark{font-family:var(--serif);font-weight:500;font-size:23px;letter-spacing:.04em;color:var(--paper);}
.wb-iconbtn{display:inline-flex;align-items:center;justify-content:center;color:var(--paper);
  background:transparent;border:none;cursor:pointer;padding:4px;margin:-4px;flex:none;}
.wb-new{display:inline-flex;align-items:center;gap:7px;font-family:var(--sans);font-size:10px;font-weight:600;
  letter-spacing:.16em;text-transform:uppercase;color:var(--paper);border:1px solid var(--paper-line);
  border-radius:2px;padding:8px 12px;background:transparent;cursor:pointer;transition:background .15s;flex:none;white-space:nowrap;}
.wb-new:active{background:rgba(241,240,235,.12);}
.wb-cancel{font-family:var(--sans);font-size:12px;letter-spacing:.06em;color:rgba(241,240,235,.72);
  background:transparent;border:none;cursor:pointer;padding:4px 2px;flex:none;}
.wb-titletxt{font-family:var(--serif);font-weight:500;font-size:16px;letter-spacing:.06em;color:var(--paper);
  min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.wb-save{font-family:var(--sans);font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;
  background:var(--paper);color:var(--ink);border:none;border-radius:2px;padding:9px 16px;cursor:pointer;transition:opacity .15s;flex:none;}
.wb-save:active{opacity:.8;}

.wb-body{position:relative;z-index:1;flex:1;overflow-y:auto;padding:22px 18px 80px;}
.wb-body.form{padding:24px 20px 60px;}
.wb-noscroll::-webkit-scrollbar{display:none;}
.wb-noscroll{scrollbar-width:none;}

.wb-toc{display:flex;align-items:baseline;justify-content:space-between;gap:12px;}
.wb-toc .l{font-family:var(--serif);font-size:19px;font-weight:600;letter-spacing:.04em;color:var(--ink);}
.wb-toc .r{font-family:var(--serif);font-size:13px;color:var(--ink-3);font-variant-numeric:tabular-nums;white-space:nowrap;}
.wb-rule2{position:relative;height:0;border-top:1.5px solid var(--ink);margin:11px 0 6px;}
.wb-rule2::after{content:"";position:absolute;left:0;right:0;top:3px;border-top:.5px solid var(--line-2);}

.wb-cat{display:flex;align-items:center;gap:11px;cursor:pointer;user-select:none;padding:16px 2px 11px;}
.wb-cat .sign{flex:none;color:var(--ink-2);transition:transform .3s cubic-bezier(.2,.6,.2,1);display:inline-flex;}
.wb-cat.open .sign{transform:rotate(90deg);}
.wb-cat .name{font-family:var(--serif);font-size:15px;font-weight:600;letter-spacing:.03em;color:var(--ink);
  min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.wb-cat .hr{flex:1;height:1px;background:var(--line);min-width:16px;}
.wb-cat .num{font-family:var(--serif);font-size:13px;color:var(--ink-3);font-variant-numeric:tabular-nums;flex:none;}

.wb-collapse{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows .32s ease,opacity .28s ease;}
.wb-collapse.open{grid-template-rows:1fr;opacity:1;margin-top:2px;}
.wb-collapse>div{overflow:hidden;}

.wb-plate{border:1px solid var(--line);border-radius:2px;background:var(--card);margin-bottom:10px;transition:border-color .2s;}
.wb-plate:hover{border-color:var(--line-2);}
.wb-plate.open{border-color:var(--ink);}
.wb-pmain{display:flex;gap:14px;padding:14px 14px 14px 15px;cursor:pointer;align-items:flex-start;}
.wb-no{font-family:var(--serif);font-weight:300;font-size:26px;line-height:.9;color:var(--ink-3);min-width:34px;
  font-variant-numeric:tabular-nums;letter-spacing:-.01em;padding-top:1px;transition:color .2s;}
.wb-plate.open .wb-no{color:var(--ink);}
.wb-pinfo{flex:1;min-width:0;}
.wb-ptitle{font-family:var(--serif);font-size:16px;font-weight:600;line-height:1.3;color:var(--ink);
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.wb-pmeta{margin-top:7px;display:flex;align-items:center;gap:9px;flex-wrap:wrap;}
.wb-tag{font-family:var(--sans);font-size:8.5px;font-weight:600;letter-spacing:.13em;text-transform:uppercase;
  color:var(--ink-2);border:1px solid var(--line);border-radius:2px;padding:2px 6px;line-height:1.4;}
.wb-date{font-family:var(--mono);font-size:10px;letter-spacing:.02em;color:var(--ink-3);}
.wb-acts{display:flex;gap:1px;flex:none;}
.wb-act{display:inline-flex;align-items:center;justify-content:center;padding:8px;color:var(--ink-3);
  background:transparent;border:none;border-radius:2px;cursor:pointer;transition:color .15s,background .15s;}
.wb-act:hover{color:var(--ink);background:rgba(26,26,24,.05);}
.wb-act.del:hover{color:var(--oxblood);background:rgba(110,42,40,.08);}

.wb-pbody{padding:0 15px 16px;}
.wb-div{position:relative;height:0;border-top:1px solid var(--ink);margin-bottom:13px;}
.wb-div::after{content:"";position:absolute;left:0;right:0;top:2.5px;border-top:.5px solid var(--line-2);}
.wb-content{font-family:var(--serif);font-size:13.5px;line-height:1.85;color:var(--ink-2);white-space:pre-wrap;word-break:break-word;}
.wb-content .empty{font-style:italic;color:var(--ink-3);}

.wb-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:90px 24px;text-align:center;}
.wb-empty .orn{width:34px;height:1px;background:var(--line-2);}
.wb-empty .t{font-family:var(--serif);font-style:italic;font-size:16px;color:var(--ink-2);}
.wb-empty .s{font-family:var(--sans);font-size:9.5px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--ink-3);}

.wb-field{margin-bottom:26px;}
.wb-label{margin-bottom:11px;display:flex;align-items:baseline;}
.wb-label .cn{font-family:var(--serif);font-size:12.5px;font-weight:600;letter-spacing:.04em;color:var(--ink-2);}
.wb-label .en{font-family:var(--sans);font-size:8.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-3);margin-left:.55em;}
.wb-input{width:100%;background:transparent;border:none;border-bottom:1px solid var(--line);padding:9px 2px;color:var(--ink);outline:none;transition:border-color .2s;}
.wb-input::placeholder{color:var(--ink-3);opacity:.75;font-style:italic;}
.wb-input:focus{border-bottom-color:var(--ink);}
.wb-input.title{font-family:var(--serif);font-size:21px;font-weight:600;letter-spacing:.01em;}
.wb-input.cat{font-family:var(--serif);font-size:15px;}
.wb-hint{font-family:var(--sans);font-size:10px;letter-spacing:.02em;color:var(--ink-3);margin-top:8px;}

.wb-posgrid{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
.wb-pos{text-align:left;border:1px solid var(--line);border-radius:2px;padding:11px 12px;background:transparent;cursor:pointer;transition:all .15s;}
.wb-pos:hover{border-color:var(--line-2);}
.wb-pos.on{background:var(--ink);border-color:var(--ink);}
.wb-pos .t{font-family:var(--serif);font-size:13px;font-weight:600;color:var(--ink);transition:color .15s;}
.wb-pos .d{font-family:var(--sans);font-size:8.5px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3);margin-top:4px;transition:color .15s;}
.wb-pos.on .t{color:var(--paper);}
.wb-pos.on .d{color:rgba(241,240,235,.62);}

.wb-textarea{width:100%;min-height:280px;background:var(--paper-2);border:1px solid var(--line-2);border-radius:2px;padding:16px;
  font-family:var(--serif);font-size:14px;line-height:1.85;color:var(--ink-2);resize:none;outline:none;transition:border-color .2s,background .2s;}
.wb-textarea::placeholder{color:var(--ink-3);opacity:.8;font-style:italic;}
.wb-textarea:focus{border-color:var(--ink);background:var(--card);}

/* delete-modal inner styling (the Modal wrapper itself lives in components/os/Modal) */
.wb-mbody .e{font-family:var(--sans);font-size:8.5px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--oxblood);}
.wb-mbody{font-family:var(--serif);font-size:14px;line-height:1.7;color:var(--ink-2);text-align:center;padding:6px 0;}
.wb-mbody b{font-weight:600;color:var(--ink);}
.wb-mbody .warn{font-family:var(--sans);font-size:10px;letter-spacing:.04em;color:var(--ink-3);margin-top:8px;display:block;}
.wb-btn{flex:1;padding:11px;border-radius:2px;font-family:var(--sans);font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:opacity .15s;}
.wb-btn:active{opacity:.85;}
.wb-btn.ghost{background:transparent;border:1px solid var(--ink);color:var(--ink);}
.wb-btn.danger{background:var(--oxblood);border:1px solid var(--oxblood);color:var(--paper);}

@keyframes wbFade{from{opacity:0}to{opacity:1}}
@keyframes wbRise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.wb-fade{animation:wbFade .3s ease both;}
.wb-rise{animation:wbRise .36s cubic-bezier(.2,.6,.2,1) both;}
@media (max-width:380px){
  .wb-cover{gap:8px;padding-left:14px;padding-right:14px;}
  .wb-cover.compact{padding-left:12px;padding-right:12px;}
  .wb-eyebrow{font-size:7.5px;letter-spacing:.18em;}
  .wb-wordmark{font-size:20px;}
  .wb-new{font-size:0;gap:0;padding:8px 9px;}
  .wb-body{padding:19px 14px 72px;}
  .wb-body.form{padding:20px 14px 52px;}
  .wb-pmain{gap:10px;padding:13px 10px 13px 12px;}
  .wb-no{font-size:23px;min-width:30px;}
  .wb-act{padding:7px;}
  .wb-textarea{min-height:230px;}
}
@media (max-width:340px){
  .wb-posgrid{grid-template-columns:1fr;}
  .wb-save{padding:8px 12px;}
  .wb-titletxt{font-size:15px;}
}
@media (prefers-reduced-motion:reduce){
  .wb-fade,.wb-rise{animation:none!important;}
  .wb-collapse,.wb-cat .sign{transition:none!important;}
}
`,c=[{value:`top`,cn:`人设之前`,desc:`最顶部`},{value:`after_worldview`,cn:`世界观之后`,desc:`默认`},{value:`after_impression`,cn:`印象之后`,desc:`记忆之前`},{value:`bottom`,cn:`记忆之后`,desc:`最底部`}],l=e=>c.find(t=>t.value===e)||c[1],u=e=>new Date(e).toLocaleDateString(`en-CA`),d=e=>String(e).padStart(2,`0`),f=()=>(0,o.jsx)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.4`,children:(0,o.jsx)(`path`,{d:`M15 19 8 12l7-7`,strokeLinecap:`round`,strokeLinejoin:`round`})}),p=()=>(0,o.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,o.jsx)(`path`,{d:`M12 5v14M5 12h14`,strokeLinecap:`round`})}),m=()=>(0,o.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,children:(0,o.jsx)(`path`,{d:`m9 6 6 6-6 6`,strokeLinecap:`round`,strokeLinejoin:`round`})}),h=()=>(0,o.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.25`,children:(0,o.jsx)(`path`,{d:`m16.5 3.5 4 4L8 20l-4 1 1-4L16.5 3.5Z`,strokeLinecap:`round`,strokeLinejoin:`round`})}),g=()=>(0,o.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.25`,children:(0,o.jsx)(`path`,{d:`M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13`,strokeLinecap:`round`,strokeLinejoin:`round`})}),_=()=>{let{closeApp:e,worldbooks:t,addWorldbook:n,updateWorldbook:_,deleteWorldbook:v,addToast:y,registerBackHandler:b}=i(),[x,S]=(0,a.useState)(!1),[C,w]=(0,a.useState)(null),[T,E]=(0,a.useState)(null),[D,O]=(0,a.useState)(null),[k,A]=(0,a.useState)(``),[j,M]=(0,a.useState)(``),[N,P]=(0,a.useState)(``),[F,I]=(0,a.useState)(`after_worldview`),[L,R]=(0,a.useState)(!1),z=(0,a.useCallback)(()=>L?(R(!1),!0):x?(S(!1),!0):D?(O(null),!0):(e(),!0),[e,x,D,L]);(0,a.useEffect)(()=>b(z),[z,b]);let B=(0,a.useMemo)(()=>{let e={};return t.forEach(t=>{let n=t.category||`未分类设定 (General)`;e[n]||(e[n]=[]),e[n].push(t)}),e},[t]),V=()=>{w(null),A(``),M(``),P(``),I(`after_worldview`),S(!0)},H=e=>{w(e),A(e.title),M(e.content),P(e.category||``),I(e.position||`after_worldview`),S(!0)},U=async()=>{if(!k.trim()){y(`请输入标题`,`error`);return}let e=N.trim()||`未分类设定 (General)`;C?(await _(C.id,{title:k,content:j,category:e,position:F}),y(`已保存 (同步至相关角色)`,`success`)):(n({id:`wb-${Date.now()}`,title:k,content:j,category:e,position:F,createdAt:Date.now(),updatedAt:Date.now()}),y(`新书已创建`,`success`)),S(!1)},W=(e,t)=>{e.stopPropagation(),w(t),R(!0)},G=()=>{C&&(v(C.id),R(!1),w(null),S(!1))},K=e=>E(T===e?null:e),q=e=>O(D===e?null:e);if(x)return(0,o.jsxs)(`div`,{className:`wb-root wb-fade`,children:[(0,o.jsx)(`style`,{children:s}),(0,o.jsx)(`div`,{className:`wb-grain`}),(0,o.jsxs)(`div`,{className:`wb-cover compact sully-safe-topbar-compact`,children:[(0,o.jsx)(`button`,{className:`wb-cancel`,onClick:z,children:`取消`}),(0,o.jsx)(`span`,{className:`wb-titletxt`,children:C?`编辑条目`:`新建条目`}),(0,o.jsx)(`button`,{className:`wb-save`,onClick:U,children:`保存`})]}),(0,o.jsxs)(`div`,{className:`wb-body form wb-noscroll`,children:[(0,o.jsxs)(`div`,{className:`wb-field`,children:[(0,o.jsxs)(`div`,{className:`wb-label`,children:[(0,o.jsx)(`span`,{className:`cn`,children:`标题`}),(0,o.jsx)(`span`,{className:`en`,children:`Title`})]}),(0,o.jsx)(`input`,{className:`wb-input title`,value:k,onChange:e=>A(e.target.value),placeholder:`魔法体系、公司背景...`})]}),(0,o.jsxs)(`div`,{className:`wb-field`,children:[(0,o.jsxs)(`div`,{className:`wb-label`,children:[(0,o.jsx)(`span`,{className:`cn`,children:`分组`}),(0,o.jsx)(`span`,{className:`en`,children:`Category`})]}),(0,o.jsx)(`input`,{className:`wb-input cat`,value:N,onChange:e=>P(e.target.value),placeholder:`世界观、人物、地理...`,list:`wb-category-suggestions`}),(0,o.jsx)(`datalist`,{id:`wb-category-suggestions`,children:Object.keys(B).map(e=>(0,o.jsx)(`option`,{value:e},e))}),(0,o.jsx)(`p`,{className:`wb-hint`,children:`输入相同名称可自动归入已有分组。`})]}),(0,o.jsxs)(`div`,{className:`wb-field`,children:[(0,o.jsxs)(`div`,{className:`wb-label`,children:[(0,o.jsx)(`span`,{className:`cn`,children:`插入位置`}),(0,o.jsx)(`span`,{className:`en`,children:`Injection`})]}),(0,o.jsx)(`div`,{className:`wb-posgrid`,children:c.map(e=>(0,o.jsxs)(`button`,{type:`button`,onClick:()=>I(e.value),className:`wb-pos${F===e.value?` on`:``}`,children:[(0,o.jsx)(`div`,{className:`t`,children:e.cn}),(0,o.jsx)(`div`,{className:`d`,children:e.desc})]},e.value))})]}),(0,o.jsxs)(`div`,{className:`wb-field`,children:[(0,o.jsxs)(`div`,{className:`wb-label`,children:[(0,o.jsx)(`span`,{className:`cn`,children:`设定内容`}),(0,o.jsx)(`span`,{className:`en`,children:`Content`})]}),(0,o.jsx)(`textarea`,{className:`wb-textarea`,value:j,onChange:e=>M(e.target.value),placeholder:`在此写下详细设定，支持 Markdown...`})]})]})]});let J=t.length;return(0,o.jsxs)(`div`,{className:`wb-root wb-fade`,children:[(0,o.jsx)(`style`,{children:s}),(0,o.jsx)(`div`,{className:`wb-grain`}),(0,o.jsxs)(`div`,{className:`wb-cover sully-safe-topbar`,children:[(0,o.jsx)(`button`,{className:`wb-iconbtn`,onClick:z,"aria-label":`返回`,children:(0,o.jsx)(f,{})}),(0,o.jsxs)(`div`,{className:`wb-mark`,children:[(0,o.jsx)(`span`,{className:`wb-eyebrow`,children:`Lorebook · 世界设定集`}),(0,o.jsx)(`span`,{className:`wb-wordmark`,children:`世界书`})]}),(0,o.jsxs)(`button`,{className:`wb-new`,onClick:V,children:[(0,o.jsx)(p,{}),`新建`]})]}),(0,o.jsxs)(`div`,{className:`wb-body wb-noscroll`,children:[(0,o.jsxs)(`div`,{className:`wb-toc`,children:[(0,o.jsx)(`span`,{className:`l`,children:`目录`}),(0,o.jsxs)(`span`,{className:`r`,children:[J,` 则 · `,Object.keys(B).length,` 类`]})]}),(0,o.jsx)(`div`,{className:`wb-rule2`}),J===0&&(0,o.jsxs)(`div`,{className:`wb-empty`,children:[(0,o.jsx)(`div`,{className:`orn`}),(0,o.jsx)(`div`,{className:`t`,children:`尚未写下任何设定`}),(0,o.jsx)(`div`,{className:`s`,children:`Begin the codex`}),(0,o.jsx)(`div`,{className:`orn`})]}),Object.entries(B).map(([e,t])=>{let n=T===e;return(0,o.jsxs)(`div`,{className:`wb-rise`,children:[(0,o.jsxs)(`div`,{className:`wb-cat${n?` open`:``}`,onClick:()=>K(e),children:[(0,o.jsx)(`span`,{className:`sign`,children:(0,o.jsx)(m,{})}),(0,o.jsx)(`span`,{className:`name`,children:e}),(0,o.jsx)(`span`,{className:`hr`}),(0,o.jsx)(`span`,{className:`num`,children:d(t.length)})]}),(0,o.jsx)(`div`,{className:`wb-collapse${n?` open`:``}`,children:(0,o.jsx)(`div`,{children:t.map((e,t)=>{let n=D===e.id,r=l(e.position);return(0,o.jsxs)(`div`,{className:`wb-plate${n?` open`:``}`,children:[(0,o.jsxs)(`div`,{className:`wb-pmain`,onClick:()=>q(e.id),children:[(0,o.jsx)(`div`,{className:`wb-no`,children:d(t+1)}),(0,o.jsxs)(`div`,{className:`wb-pinfo`,children:[(0,o.jsx)(`div`,{className:`wb-ptitle`,children:e.title}),(0,o.jsxs)(`div`,{className:`wb-pmeta`,children:[(0,o.jsx)(`span`,{className:`wb-tag`,children:r.cn}),(0,o.jsx)(`span`,{className:`wb-date`,children:u(e.updatedAt)})]})]}),(0,o.jsxs)(`div`,{className:`wb-acts`,children:[(0,o.jsx)(`button`,{className:`wb-act`,title:`编辑`,onClick:t=>{t.stopPropagation(),H(e)},children:(0,o.jsx)(h,{})}),(0,o.jsx)(`button`,{className:`wb-act del`,title:`删除`,onClick:t=>W(t,e),children:(0,o.jsx)(g,{})})]})]}),n&&(0,o.jsxs)(`div`,{className:`wb-pbody wb-fade`,children:[(0,o.jsx)(`div`,{className:`wb-div`}),(0,o.jsx)(`div`,{className:`wb-content`,children:e.content||(0,o.jsx)(`span`,{className:`empty`,children:`暂无内容...`})})]})]},e.id)})})})]},e)})]}),(0,o.jsx)(r,{isOpen:L,title:`删除确认`,onClose:()=>R(!1),footer:(0,o.jsxs)(`div`,{className:`flex gap-3 w-full`,children:[(0,o.jsx)(`button`,{onClick:()=>R(!1),className:`wb-btn ghost`,children:`取消`}),(0,o.jsx)(`button`,{onClick:G,className:`wb-btn danger`,children:`确认删除`})]}),children:(0,o.jsxs)(`div`,{className:`wb-mbody`,children:[(0,o.jsx)(`div`,{className:`e`,style:{marginBottom:6},children:`Confirm`}),`确定要删除 `,(0,o.jsxs)(`b`,{children:[`「`,C?.title,`」`]}),` 吗？`,(0,o.jsx)(`span`,{className:`warn`,children:`此操作无法撤销。`})]})})]})};export{_ as default};