(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4103],{76493:(e,t,r)=>{Promise.resolve().then(r.bind(r,41495)),Promise.resolve().then(r.bind(r,19394)),Promise.resolve().then(r.bind(r,86531)),Promise.resolve().then(r.bind(r,91310)),Promise.resolve().then(r.bind(r,34034)),Promise.resolve().then(r.bind(r,65470)),Promise.resolve().then(r.bind(r,65703)),Promise.resolve().then(r.t.bind(r,83458,23))},77711:(e,t,r)=>{"use strict";r.d(t,{default:()=>l.a});var n=r(21956),l=r.n(n)},21956:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(60306)._(r(30580));function l(e,t){var r;let l={};"function"==typeof e&&(l.loader=e);let s={...l,...t};return(0,n.default)({...s,modules:null==(r=s.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},39827:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return l}});let n=r(93719);function l(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return r}},30580:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let n=r(95155),l=r(12115),s=r(39827),a=r(79214);function i(e){return{default:e&&"default"in e?e.default:e}}let o={loader:()=>Promise.resolve(i(()=>null)),loading:null,ssr:!0},d=function(e){let t={...o,...e},r=(0,l.lazy)(()=>t.loader().then(i)),d=t.loading;function c(e){let i=d?(0,n.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,o=!t.ssr||!!t.loading,c=o?l.Suspense:l.Fragment,u=t.ssr?(0,n.jsxs)(n.Fragment,{children:["undefined"==typeof window?(0,n.jsx)(a.PreloadChunks,{moduleIds:t.modules}):null,(0,n.jsx)(r,{...e})]}):(0,n.jsx)(s.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(r,{...e})});return(0,n.jsx)(c,{...o?{fallback:i}:{},children:u})}return c.displayName="LoadableComponent",c}},79214:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return i}});let n=r(95155),l=r(47650),s=r(75861),a=r(18284);function i(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let r=s.workAsyncStorage.getStore();if(void 0===r)return null;let i=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files;i.push(...t)}}return 0===i.length?null:(0,n.jsx)(n.Fragment,{children:i.map(e=>{let t=r.assetPrefix+"/_next/"+(0,a.encodeURIPath)(e);return e.endsWith(".css")?(0,n.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,l.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},19394:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var n=r(95155),l=r(77711),s=r(56167);let a=(0,l.default)(()=>r.e(3128).then(r.bind(r,93128)),{loadableGenerated:{webpack:()=>[93128]},ssr:!1});function i(){return(0,n.jsx)(s.A,{children:(0,n.jsx)(a,{})})}},86531:(e,t,r)=>{"use strict";r.d(t,{CopyButton:()=>i});var n=r(95155),l=r(12115),s=r(98867),a=r(23920);function i(e){let{text:t}=e,[r,i]=(0,l.useState)(!1);return(0,n.jsx)("button",{className:"button",onClick:()=>{navigator.clipboard.writeText(t),i(!0),setTimeout(()=>i(!1),1200)},"aria-label":"Copy to clipboard",children:r?(0,n.jsx)(s.A,{size:16}):(0,n.jsx)(a.A,{size:16})})}},91310:(e,t,r)=>{"use strict";r.d(t,{PreWithRef:()=>a});var n=r(95155),l=r(10268),s=r(12115);function a(e){return function(e){let t=(0,s.useRef)(!0);(0,s.useLayoutEffect)(()=>{if(e.current){let r=e.current.querySelectorAll("[data-focus=true]"),n=e.current.getBoundingClientRect(),l=1/0,s=-1/0;r.forEach(e=>{let t=e.getBoundingClientRect();l=Math.min(l,t.top-n.top),s=Math.max(s,t.bottom-n.top)}),(s>n.height||l<0)&&e.current.scrollTo({top:e.current.scrollTop+l-10,behavior:t.current?"instant":"smooth"}),t.current=!1}})}((0,l.J2)(e)),(0,n.jsx)(l.AX,{merge:e})}},40468:(e,t,r)=>{"use strict";r.d(t,{bd:()=>w,NY:()=>P,S$:()=>k});var n=r(95155),l=r(50079),s=r(86531),a=r(98881);function i(e){let{title:t,lang:r}=e,l=t||r||"";l.endsWith(".mdx")?l=l.slice(0,-4)+".md":l.endsWith(".mjs")?l=l.slice(0,-4)+".js":l.endsWith(".javascript")&&(l=l.slice(0,-11)+".js");let{svg:s,color:a}=o(l),i=s.replace(/svg/,"svg fill='".concat(a,"' height='20'"));return(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:i}})}(0,a.themeIcons)({blue:"#519aba",grey:"#4d5a5e","grey-light":"#6d8086",green:"#8dc149",orange:"#e37933",pink:"#f55385",purple:"#a074c4",red:"#cc3e44",white:"#d4d7d6",yellow:"#cbcb41",ignore:"#41535b"});let o=(0,a.themeIcons)({blue:"#498ba7",grey:"#455155","grey-light":"#627379",green:"#7fae42",orange:"#f05138",pink:"#dd4b78",purple:"#9068b0",red:"#b8383d",white:"#bfc2c1",yellow:"#b7b73b",ignore:"#3b4b52"});var d=r(43463),c=r(69795);function u(e){var t;let r=e.split(" "),n=null!==(t=r.filter(e=>e.startsWith("-")))&&void 0!==t?t:"";return{title:r.filter(e=>!e.startsWith("-"))[0],flags:n}}function f(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,c.QP)((0,d.$)(t))}var m=r(10268);let b={name:"callout",transform:e=>{let{name:t,query:r,lineNumber:n,fromColumn:l,toColumn:s}=e;return{name:t,query:r,fromLineNumber:n,toLineNumber:n,data:{...e.data,column:(l+s)/2}}},AnnotatedLine:e=>{let{annotation:t,...r}=e,{column:l}=t.data,{indentation:s,children:a}=r;return(0,n.jsxs)(m.F,{merge:r,children:[a,(0,n.jsxs)("div",{style:{minWidth:"".concat(l+4,"ch"),marginLeft:"".concat(s,"ch")},className:"w-fit border bg-editorGroupHeader-tabsBackground border-editorGroup-border rounded px-0 relative my-1 whitespace-break-spaces prose-p:my-1 prose-p:mx-2 select-none",children:[(0,n.jsx)("div",{style:{left:"".concat(l-s-1,"ch")},className:"absolute border-l border-t  border-editorGroup-border w-2 h-2 rotate-45 -translate-y-1/2 -top-[1px]  bg-editorGroupHeader-tabsBackground"}),t.data.children||(0,n.jsx)("div",{className:"px-2",children:t.query})]})]})}},h={name:"mark",Line:e=>{let{annotation:t,...r}=e,l=x(t);return(0,n.jsx)("div",{style:{borderLeft:"solid 2px transparent",borderLeftColor:t&&l,backgroundColor:t&&"rgb(from ".concat(l," r g b / 0.13)")},className:"flex",children:(0,n.jsx)(m.F,{merge:r,className:"px-2 flex-1"})})},Inline:e=>{let{annotation:t,children:r}=e,l=x(t);return(0,n.jsx)("span",{style:{outline:"solid 1px rgb(from ".concat(l," r g b / 0.5)"),backgroundColor:"rgb(from ".concat(l," r g b / 0.13)")},className:"rounded px-0.5 py-0 -mx-0.5",children:r})}};function x(e){let t=Number((null==e?void 0:e.query)||"2")%p.length;return p[t]||(null==e?void 0:e.query)}let p=["#22c55e","#14b8a6","#0ea5e9","#8b5cf6","#d946ef","#ec4899"],y={name:"diff",onlyIfAnnotated:!0,transform:e=>{let t="-"==e.query?"#f85149":"#3fb950";return[e,{...e,name:"mark",query:t}]},Line:e=>{let{annotation:t,...r}=e;return(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"ml-2 text-gray-400 select-none",children:(null==t?void 0:t.query)||" "}),(0,n.jsx)(m.F,{merge:r})]})}},g={name:"focus",PreWithRef:r(91310).PreWithRef,onlyIfAnnotated:!0,Line:e=>(0,n.jsx)(m.F,{merge:e,className:"opacity-50 data-[focus]:opacity-100"}),AnnotatedLine:e=>{let{annotation:t,...r}=e;return(0,n.jsx)(m.F,{merge:r,"data-focus":!0})}};var j=r(96609);let v={name:"line-numbers",Line:e=>{let{totalLines:t,lineNumber:r}=e,l=t.toString().length;return(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("span",{className:"line-number px-4 text-gray-400 text-xs select-none",children:1===t?(0,n.jsx)(j.A,{size:14}):(0,n.jsx)(N,{lineNumber:r,max:l})}),(0,n.jsx)(m.F,{merge:e,className:"flex-1 pl-2"})]})}};function N(e){let{lineNumber:t,max:r}=e,l=r-t.toString().length,s="";if(l>0)for(let e=0;e<l;e++)s+="0";return(0,n.jsxs)("span",{children:[t,(0,n.jsx)("span",{className:"invisible",children:s})]})}function w(e){let{codeblock:t,className:r=""}=e,{flags:a}=u(t.meta),i=t.lang;return(0,n.jsxs)("div",{className:f("code-base",{[r]:!!r,error:a.includes("-error")},i),children:[a.includes("-c")&&(0,n.jsx)(s.CopyButton,{text:t.value}),(0,n.jsx)(l.A,{code:t,handlers:[b,h,y,g,v]})]})}function P(e){let{lang:t="",meta:r="",value:l}=e,{title:s}=u(r);return(s||"shellscript"!=t||(s="shell"),s)?(0,n.jsx)("div",{className:"code-header px-2 py-2 text-sm border-b border-gray-200 bg-gray-50",children:(0,n.jsx)(k,{meta:r,lang:t})}):null}function k(e){let{meta:t="",className:r="",lang:l}=e,{title:s}=u(t);return s||"shellscript"!==l||(s="shell"),(0,n.jsxs)("div",{className:f("flex items-center gap-1 relative z-10",{[r]:!!r}),children:[s&&(0,n.jsx)(i,{title:s}),(0,n.jsx)("span",{children:s})]})}},34034:(e,t,r)=>{"use strict";r.d(t,{N:()=>s,default:()=>a});var n=r(95155),l=r(12115);let s=(0,l.createContext)({index:0,setIndex:()=>{}});function a(e){let{children:t}=e,[r,a]=(0,l.useState)(0);return(0,n.jsx)(s.Provider,{value:{index:r,setIndex:a},children:t})}},65470:(e,t,r)=>{"use strict";r.d(t,{CodeTabHeader:()=>c});var n=r(95155),l=r(12115),s=r(40468),a=r(25683),i=r(85495),o=r(34034),d=r(43463);function c(e){let{tabs:t}=e,{index:r,setIndex:c}=(0,l.use)(o.N),[u,f]=(0,l.useState)(null),m=(0,l.useRef)(null);function b(){m.current=window.setTimeout(()=>{f(null)},200)}return(0,n.jsx)("div",{className:(0,d.A)("flex px-1 py-2 bg-gray-50 gap-1 overflow-auto border-b border-gray-200",{"flex-col w-40 border-r border-b-0":t.length>5}),children:t.map((e,t)=>(0,n.jsxs)("div",{onMouseEnter:()=>{m.current&&window.clearTimeout(m.current),f(t)},onMouseLeave:b,onClick:()=>{c(t)},className:"relative text-sm transition-colors delay-150 hover:delay-0 pl-2 pr-3 py-1 cursor-pointer",children:[(0,n.jsx)(a.N,{children:u===t&&(0,n.jsx)(i.P.span,{className:"absolute inset-0 rounded bg-gray-200",layoutId:"hoverBackground",initial:{opacity:0},animate:{opacity:1,transition:{duration:.15}},exit:{opacity:0,transition:{duration:.15}}})}),(0,n.jsx)(s.S$,{meta:e.meta,className:r===t?"text-blue-700":""})]},e.meta))})}},65703:(e,t,r)=>{"use strict";r.d(t,{CodeTabsInner:()=>c});var n=r(95155),l=r(43463),s=r(12115),a=r(66494),i=r(25926),o=r(40468),d=r(34034);function c(e){let{highlighteds:t}=e,{index:r}=(0,s.use)(d.N);return(0,n.jsx)(a.N,{mode:"wait",children:(0,n.jsx)(i.P.div,{className:(0,l.A)("icon",{"flex-1 w-0":t.length>5}),initial:{y:-10,opacity:0},animate:{y:0,opacity:1},exit:{y:10,opacity:0},transition:{duration:.2},children:(0,n.jsx)(o.bd,{codeblock:t[r]})},t[r].meta)})}},56167:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(95155),l=r(12115),s=r(67401);let a=(0,s.A)("TvMinimalPlay",[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]]),i=(0,s.A)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);var o=r(31149),d=r(43463);function c(e){let{className:t}=e,[r,s]=(0,l.useState)(!0),c=(0,l.useRef)(null);(0,l.useEffect)(()=>{setTimeout(()=>{let e=c.current.getBoundingClientRect().height;c.current.style.minHeight="".concat(e,"px")},50)},[]);let u=(0,d.A)("preview border rounded border-gray-200 overflow-hidden my-5",t);return(0,n.jsxs)("div",{className:u,children:[(0,n.jsxs)("header",{className:"flex border-b border-gray-200 bg-gray-50 items-center justify-between px-4 py-2",children:[(0,n.jsxs)(o.A,{children:[(0,n.jsx)(a,{size:16}),(0,n.jsx)("div",{className:"ml-2 text-sm",children:"预览"})]}),(0,n.jsx)(i,{size:16,className:"text-gray-500 cursor-pointer",onClick:function(){s(!1),setTimeout(()=>{s(!0)},40)}})]}),(0,n.jsx)("div",{className:"p-4",ref:c,children:r?e.children:null})]})}},31149:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(95155),l=r(43463),s=r(69795);function a(e){let{children:t,start:r,end:a,around:o,between:d,className:c,center:u,col:f,...m}=e,b=(0,l.A)("flex items-center flex-row",{"flex-col":f,"justify-start":r,"justify-end":a,"justify-around":o,"justify-between":d,"justify-center":u},c);return(0,n.jsx)(i,{className:(0,s.QP)(b),...m,children:t})}function i(e){let{className:t,children:r,...a}=e,i="",o="",d="";Object.keys(a).forEach(e=>{0===e.indexOf("bg-")&&(i+="".concat(e," ")),0===e.indexOf("border-")&&(o+=" ".concat(e," ")),0===e.indexOf("rounded-")&&(d+=" ".concat(e," "))});let c=(0,l.A)(i,o,d,t);return(0,n.jsx)("div",{className:(0,s.QP)(c),...a,children:r})}},83458:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[3459,7525,4320,5926,2794,8441,1517,7358],()=>t(76493)),_N_E=e.O()}]);