(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8993],{18993:(e,r,t)=>{Promise.resolve().then(t.bind(t,98087))},74810:(e,r,t)=>{"use strict";t.r(r),t.d(r,{column_id:()=>s,column_key:()=>a,column_url:()=>o,reactversion:()=>i,start_path:()=>c,user_ids:()=>l});var n=t(5782);let s="1876449089626005504",o="https://xinyuzone.cn/column/".concat(s),a="r19base",c="/r19base/1.change",i="React@19.0.0",l=["1813145181655089152","1876539126241779712","1874636777894313984","1889381002569383936","1843582181168160768"].concat(n.d)},44939:(e,r,t)=>{"use strict";t.r(r),t.d(r,{column_id:()=>s,column_key:()=>a,column_url:()=>o,reactversion:()=>i,start_path:()=>c,user_ids:()=>l});var n=t(5782);let s="1881667258187706368",o="https://xinyuzone.cn/column/".concat(s),a="r19lightning",c="how",i="React@19.0.0",l=[""].concat(n.d)},6213:(e,r,t)=>{"use strict";t.r(r),t.d(r,{column_id:()=>s,column_key:()=>a,column_url:()=>o,reactversion:()=>i,start_path:()=>c,user_ids:()=>l});var n=t(5782);let s="1876560978079080448",o="https://xinyuzone.cn/column/".concat(s),a="r19plus",c="/r19plus/1.structuring",i="React@19.0.0",l=["1813145181655089152","1843582181168160768","1823968445075886080","1831498228496052224","1881680380730470400","1881892019736080384","1825536164048674816","1875380572919300096","1877210221991239680","1843938724933836800","1876539126241779712","1889381002569383936","1876603137427726336"].concat(n.d)},29614:(e,r,t)=>{"use strict";t.r(r),t.d(r,{column_id:()=>s,column_key:()=>a,column_url:()=>o,reactversion:()=>i,start_path:()=>c,user_ids:()=>l});var n=t(5782);let s="1877242199536902144",o="https://xinyuzone.cn/column/".concat(s),a="reactprinciple",c="/reactprinciple/0.multi",i="react@19.0.0",l=["1813145181655089152","1874635429748539392","1825416080919633920","1876473278160396288","1876461934652645376","1874636334774484992","1876458676324360192","1843293842095513600","1844190120425857024","1823968445075886080","1876508277882445824","1843501381710028800","1876602774721093632","1828957522866892800"].concat(n.d)},76511:(e,r,t)=>{"use strict";t.r(r),t.d(r,{column_id:()=>s,column_key:()=>a,column_url:()=>o,reactversion:()=>i,start_path:()=>c,user_ids:()=>l});var n=t(5782);let s="1890555309341343744",o="https://xinyuzone.cn/column/".concat(s),a="reactzm",c="/reactzm/2.preface",i="React@19.0.0",l=["1813145181655089152"].concat(n.d)},68854:(e,r,t)=>{"use strict";t.d(r,{Be:()=>o,bV:()=>c,qb:()=>s,ug:()=>a});var n=t(30912);function s(e){return(0,n.Jt)("/eden/v1/open/oauth2/access_token",{app_id:n.Dj,code:e,grant_type:"authorization_code"})}function o(e){return(0,n.Jt)("/eden/v1/open/oauth2/refresh_token",{app_id:n.Dj,grant_type:"refresh_token",refresh_token:e})}function a(){return(0,n.Jt)("/eden/v1/open/userinfo",{})}function c(e){return(0,n.Jt)("/eden/v1/open/column/subscription/status",{column_id:e})}},39550:(e,r,t)=>{"use strict";t.d(r,{$t:()=>u,i1:()=>c,xI:()=>o});var n=t(99827),s=t(68854);async function o(){let e=localStorage.getItem("access_token"),r=localStorage.getItem("refresh_token"),t=localStorage.getItem("open_id"),n=Object.fromEntries(new URLSearchParams(window.location.search.slice(1)).entries()).code;if(!e&&!n)return d(!1),{isLogin:!1};let o={};if(0!=(o=!e&&n?await (0,s.qb)(n):await (0,s.Be)(r||"")).status_code)return console.error(o.status_msg),localStorage.setItem("access_token",""),d(!1),{isLogin:!1};e=o.access_token,r=o.refresh_token,t=o.open_id,localStorage.setItem("access_token",e),localStorage.setItem("refresh_token",r),localStorage.setItem("open_id",t);let a={isLogin:!0,access_token:e,open_id:t,...await (0,s.ug)()};return d(!0),l(a),a}let a={isLogin:!1,userinfo:{},subscrible:{reactprinciple:0,r19base:0,r19plus:0,zustand:0,r19lightning:0,reactzm:0,supercss:0}},c=(0,n.v)(()=>a),i=c.setState,l=e=>{i({userinfo:e})};function d(e){i({isLogin:e})}function u(e,r){i(t=>({subscrible:{...t.subscrible,[e]:r}}))}},45131:(e,r,t)=>{"use strict";t.r(r),t.d(r,{column_id:()=>s,column_key:()=>a,column_url:()=>o,reactversion:()=>i,start_path:()=>c,user_ids:()=>l});var n=t(5782);let s="189055530934134374x",o="/payment",a="supercss",c="/supercss/1.px",i="CSS 3.x",l=["1813145181655089152","1823968445075886080","1825360982176694272","1843293842095513600","1825542437850849280","1843292611159564288","1843423073341317120","1825335843305291776","1867511769992531968","1843501381710028800","1823924840911147008","1843467711817228288","1843300423470194688","1843290535742447616"].concat(n.d)},5782:(e,r,t)=>{"use strict";t.d(r,{d:()=>n});let n=["1876473278160396288","1876603137427726336","1844190120425857024","1876458676324360192","1825412530181251072","1843290729850642432","1825345714910134272","1883829263195709440"]},71132:(e,r,t)=>{"use strict";t.r(r),t.d(r,{column_id:()=>s,column_key:()=>a,column_url:()=>o,reactversion:()=>i,start_path:()=>c,user_ids:()=>l});var n=t(5782);let s="1881981249548120064",o="https://xinyuzone.cn/column/".concat(s),a="r19lightning",c="/zustand/0.page",i="zustand@5.0.3",l=["1876458676324360192","1823968445075886080"].concat(n.d)},86531:(e,r,t)=>{"use strict";t.d(r,{CopyButton:()=>c});var n=t(95155),s=t(12115),o=t(98867),a=t(23920);function c(e){let{text:r}=e,[t,c]=(0,s.useState)(!1);return(0,n.jsx)("button",{className:"button",onClick:()=>{navigator.clipboard.writeText(r),c(!0),setTimeout(()=>c(!1),1200)},"aria-label":"Copy to clipboard",children:t?(0,n.jsx)(o.A,{size:16}):(0,n.jsx)(a.A,{size:16})})}},91310:(e,r,t)=>{"use strict";t.d(r,{PreWithRef:()=>a});var n=t(95155),s=t(10268),o=t(12115);function a(e){return function(e){let r=(0,o.useRef)(!0);(0,o.useLayoutEffect)(()=>{if(e.current){let t=e.current.querySelectorAll("[data-focus=true]"),n=e.current.getBoundingClientRect(),s=1/0,o=-1/0;t.forEach(e=>{let r=e.getBoundingClientRect();s=Math.min(s,r.top-n.top),o=Math.max(o,r.bottom-n.top)}),(o>n.height||s<0)&&e.current.scrollTo({top:e.current.scrollTop+s-10,behavior:r.current?"instant":"smooth"}),r.current=!1}})}((0,s.J2)(e)),(0,n.jsx)(s.AX,{merge:e})}},40468:(e,r,t)=>{"use strict";t.d(r,{bd:()=>_,NY:()=>N,S$:()=>S});var n=t(95155),s=t(50079),o=t(86531),a=t(98881);function c(e){let{title:r,lang:t}=e,s=r||t||"";s.endsWith(".mdx")?s=s.slice(0,-4)+".md":s.endsWith(".mjs")?s=s.slice(0,-4)+".js":s.endsWith(".javascript")&&(s=s.slice(0,-11)+".js");let{svg:o,color:a}=i(s),c=o.replace(/svg/,"svg fill='".concat(a,"' height='20'"));return(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:c}})}(0,a.themeIcons)({blue:"#519aba",grey:"#4d5a5e","grey-light":"#6d8086",green:"#8dc149",orange:"#e37933",pink:"#f55385",purple:"#a074c4",red:"#cc3e44",white:"#d4d7d6",yellow:"#cbcb41",ignore:"#41535b"});let i=(0,a.themeIcons)({blue:"#498ba7",grey:"#455155","grey-light":"#627379",green:"#7fae42",orange:"#f05138",pink:"#dd4b78",purple:"#9068b0",red:"#b8383d",white:"#bfc2c1",yellow:"#b7b73b",ignore:"#3b4b52"});var l=t(43463),d=t(69795);function u(e){var r;let t=e.split(" "),n=null!==(r=t.filter(e=>e.startsWith("-")))&&void 0!==r?r:"";return{title:t.filter(e=>!e.startsWith("-"))[0],flags:n}}function g(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,d.QP)((0,l.$)(r))}var h=t(10268);let p={name:"callout",transform:e=>{let{name:r,query:t,lineNumber:n,fromColumn:s,toColumn:o}=e;return{name:r,query:t,fromLineNumber:n,toLineNumber:n,data:{...e.data,column:(s+o)/2}}},AnnotatedLine:e=>{let{annotation:r,...t}=e,{column:s}=r.data,{indentation:o,children:a}=t;return(0,n.jsxs)(h.F,{merge:t,children:[a,(0,n.jsxs)("div",{style:{minWidth:"".concat(s+4,"ch"),marginLeft:"".concat(o,"ch")},className:"w-fit border bg-editorGroupHeader-tabsBackground border-editorGroup-border rounded px-0 relative my-1 whitespace-break-spaces prose-p:my-1 prose-p:mx-2 select-none",children:[(0,n.jsx)("div",{style:{left:"".concat(s-o-1,"ch")},className:"absolute border-l border-t  border-editorGroup-border w-2 h-2 rotate-45 -translate-y-1/2 -top-[1px]  bg-editorGroupHeader-tabsBackground"}),r.data.children||(0,n.jsx)("div",{className:"px-2",children:r.query})]})]})}},m={name:"mark",Line:e=>{let{annotation:r,...t}=e,s=f(r);return(0,n.jsx)("div",{style:{borderLeft:"solid 2px transparent",borderLeftColor:r&&s,backgroundColor:r&&"rgb(from ".concat(s," r g b / 0.13)")},className:"flex",children:(0,n.jsx)(h.F,{merge:t,className:"px-2 flex-1"})})},Inline:e=>{let{annotation:r,children:t}=e,s=f(r);return(0,n.jsx)("span",{style:{outline:"solid 1px rgb(from ".concat(s," r g b / 0.5)"),backgroundColor:"rgb(from ".concat(s," r g b / 0.13)")},className:"rounded px-0.5 py-0 -mx-0.5",children:t})}};function f(e){let r=Number((null==e?void 0:e.query)||"2")%v.length;return v[r]||(null==e?void 0:e.query)}let v=["#22c55e","#14b8a6","#0ea5e9","#8b5cf6","#d946ef","#ec4899"],b={name:"diff",onlyIfAnnotated:!0,transform:e=>{let r="-"==e.query?"#f85149":"#3fb950";return[e,{...e,name:"mark",query:r}]},Line:e=>{let{annotation:r,...t}=e;return(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"ml-2 text-gray-400 select-none",children:(null==r?void 0:r.query)||" "}),(0,n.jsx)(h.F,{merge:t})]})}},x={name:"focus",PreWithRef:t(91310).PreWithRef,onlyIfAnnotated:!0,Line:e=>(0,n.jsx)(h.F,{merge:e,className:"opacity-50 data-[focus]:opacity-100"}),AnnotatedLine:e=>{let{annotation:r,...t}=e;return(0,n.jsx)(h.F,{merge:t,"data-focus":!0})}};var y=t(96609);let k={name:"line-numbers",Line:e=>{let{totalLines:r,lineNumber:t}=e,s=r.toString().length;return(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("span",{className:"line-number px-4 text-gray-400 text-xs select-none",children:1===r?(0,n.jsx)(y.A,{size:14}):(0,n.jsx)(j,{lineNumber:t,max:s})}),(0,n.jsx)(h.F,{merge:e,className:"flex-1 pl-2"})]})}};function j(e){let{lineNumber:r,max:t}=e,s=t-r.toString().length,o="";if(s>0)for(let e=0;e<s;e++)o+="0";return(0,n.jsxs)("span",{children:[r,(0,n.jsx)("span",{className:"invisible",children:o})]})}function _(e){let{codeblock:r,className:t=""}=e,{flags:a}=u(r.meta),c=r.lang;return(0,n.jsxs)("div",{className:g("code-base",{[t]:!!t,error:a.includes("-error")},c),children:[a.includes("-c")&&(0,n.jsx)(o.CopyButton,{text:r.value}),(0,n.jsx)(s.A,{code:r,handlers:[p,m,b,x,k]})]})}function N(e){let{lang:r="",meta:t="",value:s}=e,{title:o}=u(t);return(o||"shellscript"!=r||(o="shell"),o)?(0,n.jsx)("div",{className:"code-header px-2 py-2 text-sm border-b border-gray-200 bg-gray-50",children:(0,n.jsx)(S,{meta:t,lang:r})}):null}function S(e){let{meta:r="",className:t="",lang:s}=e,{title:o}=u(r);return o||"shellscript"!==s||(o="shell"),(0,n.jsxs)("div",{className:g("flex items-center gap-1 relative z-10",{[t]:!!t}),children:[o&&(0,n.jsx)(c,{title:o}),(0,n.jsx)("span",{children:o})]})}},98087:(e,r,t)=>{"use strict";t.d(r,{default:()=>N});var n=t(95155),s=t(82327),o=t(93573),a=t(6932),c=t(92991),i=t(42329),l=t(48173),d=t.n(l),u=t(30904),g=t(70154),h=t(50079),p=t(40468);let m={name:"github-from-css",type:"from-css",tokenColors:[{scope:["comment","punctuation.definition.comment","string.comment"],settings:{foreground:"var(--ch-1)"}},{scope:["constant","entity.name.constant","variable.other.constant","variable.other.enummember","variable.language","entity"],settings:{foreground:"var(--ch-2)"}},{scope:["entity.name","meta.export.default","meta.definition.variable"],settings:{foreground:"var(--ch-3)"}},{scope:["variable.parameter.function","meta.jsx.children","meta.block","meta.tag.attributes","entity.name.constant","meta.object.member","meta.embedded.expression"],settings:{foreground:"var(--ch-4)"}},{scope:"entity.name.function",settings:{foreground:"var(--ch-5)"}},{scope:["entity.name.tag","support.class.component"],settings:{foreground:"var(--ch-6)"}},{scope:"keyword",settings:{foreground:"var(--ch-7)"}},{scope:["storage","storage.type"],settings:{foreground:"var(--ch-7)"}},{scope:["storage.modifier.package","storage.modifier.import","storage.type.java"],settings:{foreground:"var(--ch-4)"}},{scope:["string","string punctuation.section.embedded source"],settings:{foreground:"var(--ch-8)"}},{scope:"support",settings:{foreground:"var(--ch-2)"}},{scope:"meta.property-name",settings:{foreground:"var(--ch-2)"}},{scope:"variable",settings:{foreground:"var(--ch-3)"}},{scope:"variable.other",settings:{foreground:"var(--ch-4)"}},{scope:"invalid.broken",settings:{foreground:"var(--ch-9)",fontStyle:"italic"}},{scope:"invalid.deprecated",settings:{foreground:"var(--ch-9)",fontStyle:"italic"}},{scope:"invalid.illegal",settings:{foreground:"var(--ch-9)",fontStyle:"italic"}},{scope:"invalid.unimplemented",settings:{foreground:"var(--ch-9)",fontStyle:"italic"}},{scope:"carriage-return",settings:{background:"var(--ch-7)",foreground:"var(--ch-10)",fontStyle:"italic underline"}},{scope:"message.error",settings:{foreground:"var(--ch-9)"}},{scope:"string variable",settings:{foreground:"var(--ch-2)"}},{scope:["source.regexp","string.regexp"],settings:{foreground:"var(--ch-8)"}},{scope:["string.regexp.character-class","string.regexp constant.character.escape","string.regexp source.ruby.embedded","string.regexp string.regexp.arbitrary-repitition"],settings:{foreground:"var(--ch-8)"}},{scope:"string.regexp constant.character.escape",settings:{foreground:"var(--ch-6)",fontStyle:"bold"}},{scope:"support.constant",settings:{foreground:"var(--ch-2)"}},{scope:"support.variable",settings:{foreground:"var(--ch-2)"}},{scope:"support.type.property-name.json",settings:{foreground:"var(--ch-6)"}},{scope:"meta.module-reference",settings:{foreground:"var(--ch-2)"}},{scope:"punctuation.definition.list.begin.markdown",settings:{foreground:"var(--ch-3)"}},{scope:["markup.heading","markup.heading entity.name"],settings:{foreground:"var(--ch-2)",fontStyle:"bold"}},{scope:"markup.quote",settings:{foreground:"var(--ch-6)"}},{scope:"markup.italic",settings:{foreground:"var(--ch-4)",fontStyle:"italic"}},{scope:"markup.bold",settings:{foreground:"var(--ch-4)",fontStyle:"bold"}},{scope:["markup.underline"],settings:{fontStyle:"underline"}},{scope:["markup.strikethrough"],settings:{fontStyle:"strikethrough"}},{scope:"markup.inline.raw",settings:{foreground:"var(--ch-2)"}},{scope:["markup.deleted","meta.diff.header.from-file","punctuation.definition.deleted"],settings:{background:"var(--ch-11)",foreground:"var(--ch-9)"}},{scope:["punctuation.section.embedded"],settings:{foreground:"var(--ch-7)"}},{scope:["markup.inserted","meta.diff.header.to-file","punctuation.definition.inserted"],settings:{background:"var(--ch-12)",foreground:"var(--ch-6)"}},{scope:["markup.changed","punctuation.definition.changed"],settings:{background:"var(--ch-13)",foreground:"var(--ch-3)"}},{scope:["markup.ignored","markup.untracked"],settings:{background:"var(--ch-2)",foreground:"var(--ch-14)"}},{scope:"meta.diff.range",settings:{foreground:"var(--ch-5)",fontStyle:"bold"}},{scope:"meta.diff.header",settings:{foreground:"var(--ch-2)"}},{scope:"meta.separator",settings:{foreground:"var(--ch-2)",fontStyle:"bold"}},{scope:"meta.output",settings:{foreground:"var(--ch-2)"}},{scope:["brackethighlighter.tag","brackethighlighter.curly","brackethighlighter.round","brackethighlighter.square","brackethighlighter.angle","brackethighlighter.quote"],settings:{foreground:"var(--ch-15)"}},{scope:"brackethighlighter.unmatched",settings:{foreground:"var(--ch-9)"}},{scope:["constant.other.reference.link","string.other.link"],settings:{foreground:"var(--ch-8)",fontStyle:"underline"}}],colors:{"editor.background":"var(--ch-16)","editor.foreground":"var(--ch-4)","editor.lineHighlightBackground":"var(--ch-17)","editor.rangeHighlightBackground":"var(--ch-18)","editor.infoForeground":"var(--ch-19)","editor.selectionBackground":"var(--ch-20)",focusBorder:"var(--ch-21)","tab.activeBackground":"var(--ch-16)","tab.activeForeground":"var(--ch-4)","tab.inactiveBackground":"var(--ch-22)","tab.inactiveForeground":"var(--ch-15)","tab.border":"var(--ch-23)","tab.activeBorder":"var(--ch-16)","editorGroup.border":"var(--ch-23)","editorGroupHeader.tabsBackground":"var(--ch-22)","editorLineNumber.foreground":"var(--ch-24)","input.background":"var(--ch-16)","input.foreground":"var(--ch-4)","input.border":"var(--ch-23)","icon.foreground":"var(--ch-15)","sideBar.background":"var(--ch-22)","sideBar.foreground":"var(--ch-4)","sideBar.border":"var(--ch-23)","list.activeSelectionBackground":"var(--ch-25)","list.activeSelectionForeground":"var(--ch-4)","list.hoverBackground":"var(--ch-17)","list.hoverForeground":"var(--ch-4)",foreground:"var(--ch-4)",background:"var(--ch-16)","lighter.inlineBackground":"var(--ch-26)"}};async function f(e){let{codeblock:r}=e,t=await (0,g.Z)(r,m);return(0,n.jsxs)("div",{className:"code-wrapper border my-4 border-gray-200 rounded overflow-hidden",children:[(0,n.jsx)(p.NY,{...r}),(0,n.jsx)(p.bd,{codeblock:t})]})}async function v(e){let{codeblock:r}=e,t=await (0,g.Z)(r,m);return(0,n.jsx)(h.c,{code:t,style:t.style})}t(83458);var b=t(76046),x=t(30712),y=t(39550),k=t(30912);let j={reactprinciple:t(29614),r19base:t(74810),r19plus:t(6213),zustand:t(71132),r19lightning:t(44939),reactzm:t(76511),supercss:t(45131)};function _(e){let{children:r,pass:t}=e,{userinfo:s,subscrible:o,isLogin:a}=(0,y.i1)(),c=(0,b.usePathname)();if(!t&&!a)return(0,n.jsxs)("div",{className:"w-full py-32 flex flex-col justify-center items-center",children:[(0,n.jsx)(x.A,{className:"text-cyan-500",size:32}),(0,n.jsx)("div",{className:"my-2 text-lg font-bold",children:"您还没有登录"}),(0,n.jsx)("div",{className:"text-xs",children:"本网站仅支持通过三方授权平台新语进行登录"}),(0,n.jsx)(d(),{href:(0,k.i9)(),className:"bg-green-500 py-1.5 px-4 text-white rounded mt-8",children:"登录"})]});let i=c.split("/")[1],{user_ids:l,column_url:u}=j[i],g=o[i],h=l.includes(s.user_id);return t||1===g||h?r:(0,n.jsxs)("div",{className:"w-full py-32 flex flex-col justify-center items-center",children:[(0,n.jsx)(x.A,{className:"text-cyan-500",size:32}),(0,n.jsx)("div",{className:"my-2 text-lg font-bold",children:"您还没有订阅"}),(0,n.jsx)("div",{children:"你需要在新语社区的专栏中订阅之后才能访问内容"}),(0,n.jsx)(d(),{href:u,className:"bg-green-500 py-1.5 px-4 text-white rounded mt-8",children:"订阅"})]})}function N(e){return(0,n.jsxs)("div",{className:"pt-4 md:pt-8 relative flex justify-center",children:[(0,n.jsxs)("div",{id:"cp-content",className:"px-4 md:px-8 2xl:px-24 pb-24 w-0 flex-1",children:[(0,n.jsx)(_,{pass:e.pass,children:(0,n.jsx)("div",{className:"keep",children:e.post?(0,n.jsx)(e.post,{components:{Code:f,InlineCode:v}}):e.children})}),(0,n.jsx)("div",{id:"diviler_",className:"border-b border-gray-300 my-8 border-dashed scroll-mt-24"}),(0,n.jsx)(u.A,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",mapping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN"},"c")]}),(0,n.jsx)("aside",{id:"cp-aside",className:"pr-6 relative items-start",children:(0,n.jsxs)("div",{id:"headings",className:"w-full sticky top-24 space-y-4 text-gray-700",children:[(0,n.jsxs)(d(),{href:"https://xinyuzone.cn/column/1818097927437131776",className:"block rounded bg-gray-50 p-4 border border-gray-100",target:"_blank",children:[(0,n.jsx)(s.A,{className:"text-blue-400"}),(0,n.jsx)("div",{className:"font-bold my-2",children:"JavaScript 核心进阶"}),(0,n.jsx)("div",{className:"text-sm leading-6",children:"从构建基础知识体系出发，抓紧核心基础内容，给你地道的前端进阶思维"})]}),(0,n.jsxs)(d(),{href:"https://usehook.cn/",className:"block rounded bg-gray-50 p-4 border border-gray-100",target:"_blank",children:[(0,n.jsx)(o.A,{className:"text-green-400"}),(0,n.jsx)("div",{className:"font-bold my-2",children:"React 19 全解"}),(0,n.jsx)("div",{className:"text-sm leading-6",children:"全网第一本系统介绍 React 19 的小册，大量实践案例，给你沉浸式学习体验"})]}),(0,n.jsxs)(d(),{href:"https://usehook.cn/advance/index",className:"block rounded bg-gray-50 p-4 border border-gray-100",target:"_blank",children:[(0,n.jsx)(a.A,{className:"text-red-400"}),(0,n.jsx)("div",{className:"font-bold my-2",children:"React 19 尊享版"}),(0,n.jsx)("div",{className:"text-sm leading-6",children:"专为前端资深架构师提供的进阶内容，聚焦项目架构，强化开发效率与开发体验"})]}),(0,n.jsx)("div",{className:"rounded bg-gray-100 py-8 text-center text-gray-500",children:(0,n.jsx)("div",{className:"",children:"成为赞助商"})}),(0,n.jsxs)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"rounded py-2 border border-gray-200 text-center flex items-center justify-center cursor-pointer",children:[(0,n.jsx)(c.A,{size:16}),(0,n.jsx)("div",{className:"ml-2",children:"滚动到顶部"})]}),(0,n.jsxs)("div",{onClick:function(){let e=document.getElementById("diviler_");e&&e.scrollIntoView({block:"start",behavior:"smooth"})},className:"rounded py-2 border border-gray-200 text-center flex items-center justify-center cursor-pointer",children:[(0,n.jsx)(i.A,{size:16}),(0,n.jsx)("div",{className:"ml-2",children:"滚动到评论"})]})]})})]})}},30912:(e,r,t)=>{"use strict";t.d(r,{Dj:()=>s,Jt:()=>o,i9:()=>a});let n="https://xinyuzone.cn",s="e89ookqtbk74";async function o(e,r){let t=r;if(!t.grant_type){let e=localStorage.getItem("access_token"),r=localStorage.getItem("open_id");t={...t,access_token:e,open_id:r}}let s=new URLSearchParams(t).toString(),o="".concat(n).concat(e,"?").concat(s);return(await fetch(o)).json()}function a(){let e="appid=".concat(s,"&redirect_uri=").concat(encodeURIComponent("https://usehook.cn/"),"&response_type=code&scope=openapi_userinfo#xinyu_redirect");return"".concat(n,"/connect/oauth2/authorize?").concat(e)}},83458:()=>{}}]);