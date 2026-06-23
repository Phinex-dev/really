var e=`:root {
  color-scheme: light dark;
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  background: transparent;
}

body {
  width: max-content;
  max-width: 100%;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "PingFang SC", "Noto Sans SC", sans-serif;
}

.status-card-frame {
  width: 330px;
  max-width: calc(100vw - 24px);
  overflow: hidden;
}

.status-card-frame img,
.status-card-frame svg,
.status-card-frame video {
  max-width: 100%;
}
`;function t(e){return(e||``).trim()}function n(e){return e.replace(/^\s*<script(?:\s[^>]*)?>/i,``).replace(/<\/script>\s*$/i,``).trim()}function r(e,t,n=``){return e.replace(/\$(\d+)/g,(e,r)=>{let i=Number(r);return!Number.isInteger(i)||i<=0?e:t[i-1]??(i===1?n:``)})}function i(e,t,n=``){return t&&t.length>1?e.replace(/\$(\d+)/g,(e,n)=>{let r=Number(n);return!Number.isInteger(r)||r<=0?e:r>=t.length?``:t[r]||``}):e.replace(/\$(\d+)/g,(e,t)=>t===`1`?n:``)}function a(e,t){let n=t||{};return e.replace(/{{#\s*([^}]+?)\s*}}([\s\S]*?){{\/\s*([^}]+?)\s*}}/g,(e,t,r,i)=>{let a=t.trim();if(a!==i.trim())return e;let o=n[a];return Array.isArray(o)?o.map((e,t)=>r.replace(/{{\s*\.\s*}}/g,e).replace(/{{\s*@index\s*}}/g,String(t))).join(``):``}).replace(/{{\s*([^#/][^}]*)\s*}}/g,(e,t)=>{let r=t.trim();if(r===`.`||r===`@index`)return e;let i=n[r];return Array.isArray(i)?i.join(`、`):typeof i==`string`?i:``})}function o(e,t){let n=t.parsedData?a(e,t.parsedData):e;return t.previewValues?r(n,t.previewValues,t.extracted):t.matchResult||!t.parsedData?i(n,t.matchResult||null,t.extracted||``):n.replace(/\$(\d+)/g,``)}function s(e){return e?e.templateVersion===2||!!e.htmlBody?.trim()||!!e.cssTemplate?.trim()||!!e.jsTemplate?.trim():!1}function c(r,i={}){if(!s(r)){let e=t(r.htmlTemplate);return e?o(e,i):``}let a=t(r.htmlBody);if(!a)return``;let c=t(r.headTemplate),l=t(r.cssTemplate),u=n(t(r.jsTemplate)),d=i.includeScripts??r.allowScripts===!0,f=c?o(c,i):``,p=o(a,i),m=o(l,i),h=o(u,i);return`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
${f}
<style>
${e}
${m}
</style>
</head>
<body>
<main class="status-card-frame">
${p}
</main>${d&&i.parsedData?`\n<script>window.__statusData = JSON.parse(decodeURIComponent("${encodeURIComponent(JSON.stringify(i.parsedData))}"));<\/script>`:``}${d&&h?`\n<script>\n${h}\n<\/script>`:``}
</body>
</html>`}function l(e){let t=e||``,n=[],r=[],i=t.replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gi,(e,t)=>(t.trim()&&n.push(t.trim()),``));i=i.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi,(e,t,n)=>/\bsrc\s*=/i.test(t||``)?e:(n.trim()&&r.push(n.trim()),``));let a=i.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);return{htmlBody:(a?a[1]:i.replace(/<!doctype\b[^>]*>/gi,``).replace(/<html\b[^>]*>|<\/html>/gi,``).replace(/<head\b[^>]*>[\s\S]*?<\/head>/gi,``).trim()).trim(),cssTemplate:n.join(`

`).trim(),jsTemplate:r.join(`

`).trim()}}var u={命途:`plot_anchor`,此幕:`scene_progress`,草蛇灰线:`clue_foreshadow`,人心向背:`character_stance`,怦然:`romance_affection`,暗涌:`romance_tension`,此身:`player_condition`,风云录:`world_faction`,伏机:`event_trigger`,执笔:`narrative_control`},d=Object.fromEntries(Object.entries(u).map(([e,t])=>[t,e])),f={剧情锚点栏:`命途`,场景推进栏:`此幕`,线索伏笔栏:`草蛇灰线`,角色立场栏:`人心向背`,恋爱心动栏:`怦然`,恋爱拉扯栏:`暗涌`,玩家状态栏:`此身`,世界势力栏:`风云录`,事件触发栏:`伏机`,叙事控制栏:`执笔`},p=/<status>([\s\S]*?)<\/status>/i,m=/^\s*([^:：\n][^:：]*?)\s*[:：]\s*(.*?)\s*$/,h=/^\s*-\s*(.*?)\s*$/;function g(e){let t=e.trim(),n=t.match(/^(.+?)[-－—–](.+)$/);if(!n)return t;let r=n[1].trim(),i=n[2].trim(),a=f[r]||d[r]||(u[r]?r:``);return a?`${a}-${i}`:t}function _(e){return g(e).trim().replace(/\s+/g,``).toLocaleLowerCase()}function v(e,t){if(e===t)return 0;if(!e)return t.length;if(!t)return e.length;let n=Array.from({length:t.length+1},(e,t)=>t),r=Array.from({length:t.length+1},()=>0);for(let i=1;i<=e.length;i+=1){r[0]=i;for(let a=1;a<=t.length;a+=1){let o=e[i-1]===t[a-1]?0:1;r[a]=Math.min(n[a]+1,r[a-1]+1,n[a-1]+o)}for(let e=0;e<=t.length;e+=1)n[e]=r[e]}return n[t.length]}function y(e,t){let n=g(e);if(!t?.length)return n;let r=_(n),i=t.find(e=>_(e.name)===r);if(i)return i.name;let a=t.find(e=>{let t=_(e.name);return t&&(r.includes(t)||t.includes(r))});if(a)return a.name;let o=null;for(let e of t){let t=_(e.name);if(!t)continue;let n=v(r,t);(!o||n<o.distance)&&(o={name:e.name,distance:n})}if(!o)return n;let s=Math.max(r.length,_(o.name).length),c=s<=4?1:Math.max(1,Math.floor(s*.34));return o.distance<=c?o.name:n}function b(e,t){if(!t?.length)return;let n=_(e);return t.find(e=>_(e.name)===n)}function x(e){let t=e.trim();if(!t)return[];let n=t.split(/\s+-\s+/).map(e=>e.trim()).filter(Boolean);return n.length>1?n:[t]}function S(e,t,n){if(!t)return;let r=e[t];Array.isArray(r)?r.push(n):typeof r==`string`&&r.trim()?e[t]=[r,n]:e[t]=[n]}function C(e,t){let n=(e||``).match(p);if(!n)return null;let r=n[1].trim(),i={},a=null;for(let e of r.split(/\r?\n/)){let n=e.trimEnd();if(!n.trim())continue;let r=n.match(h);if(r&&a){S(i,a,r[1].trim());continue}let o=n.match(m);if(o){let e=y(o[1],t),n=o[2].trim(),r=b(e,t);n?(i[e]=r?.type===`list`?x(n):n,a=null):(i[e]=Array.isArray(i[e])?i[e]:[],a=e);continue}}return{fields:i,raw:r}}function w(e){let t=[`<status>`],n=e.length>0?e:[{name:`字段1`,type:`text`,description:`字段1示例值`}];for(let e of n){let n=e.name?.trim()||`字段`;e.type===`list`?(t.push(`${n}:`),t.push(`  - ${n}示例1`),t.push(`  - ${n}示例2`),t.push(`  - ${n}示例3`)):t.push(`${n}: ${n}示例值`)}return t.push(`</status>`),t.join(`
`)}export{l as a,s as i,C as n,c as r,w as t};