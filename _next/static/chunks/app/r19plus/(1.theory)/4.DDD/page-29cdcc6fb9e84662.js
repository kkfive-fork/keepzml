(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1310,1953,2853,3507,4493,4727,5060,5757,6791,8194,8914,9018,9888],{48151:(e,r,t)=>{Promise.resolve().then(t.bind(t,41495)),Promise.resolve().then(t.bind(t,86531)),Promise.resolve().then(t.bind(t,91310)),Promise.resolve().then(t.bind(t,34034)),Promise.resolve().then(t.bind(t,65470)),Promise.resolve().then(t.bind(t,65703)),Promise.resolve().then(t.t.bind(t,83458,23))},86531:(e,r,t)=>{"use strict";t.d(r,{CopyButton:()=>i});var n=t(95155),s=t(12115),a=t(98867),l=t(23920);function i(e){let{text:r}=e,[t,i]=(0,s.useState)(!1);return(0,n.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(r),i(!0),setTimeout(()=>i(!1),1200)},"aria-label":"Copy to clipboard",children:t?(0,n.jsx)(a.A,{size:16}):(0,n.jsx)(l.A,{size:16})})}},91310:(e,r,t)=>{"use strict";t.d(r,{PreWithRef:()=>l});var n=t(95155),s=t(10268),a=t(12115);function l(e){return function(e){let r=(0,a.useRef)(!0);(0,a.useLayoutEffect)(()=>{if(e.current){let t=e.current.querySelectorAll("[data-focus=true]"),n=e.current.getBoundingClientRect(),s=1/0,a=-1/0;t.forEach(e=>{let r=e.getBoundingClientRect();s=Math.min(s,r.top-n.top),a=Math.max(a,r.bottom-n.top)}),(a>n.height||s<0)&&e.current.scrollTo({top:e.current.scrollTop+s-10,behavior:r.current?"instant":"smooth"}),r.current=!1}})}((0,s.J2)(e)),(0,n.jsx)(s.AX,{merge:e})}},40468:(e,r,t)=>{"use strict";t.d(r,{bd:()=>w,NY:()=>k,S$:()=>C});var n=t(95155),s=t(50079),a=t(86531),l=t(98881);function i(e){let{title:r,lang:t}=e,s=r||t||"";s.endsWith(".mdx")?s=s.slice(0,-4)+".md":s.endsWith(".mjs")?s=s.slice(0,-4)+".js":s.endsWith(".javascript")&&(s=s.slice(0,-11)+".js");let{svg:a,color:l}=o(s),i=a.replace(/svg/,"svg fill='".concat(l,"' height='20'"));return(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:i}})}(0,l.themeIcons)({blue:"#519aba",grey:"#4d5a5e","grey-light":"#6d8086",green:"#8dc149",orange:"#e37933",pink:"#f55385",purple:"#a074c4",red:"#cc3e44",white:"#d4d7d6",yellow:"#cbcb41",ignore:"#41535b"});let o=(0,l.themeIcons)({blue:"#498ba7",grey:"#455155","grey-light":"#627379",green:"#7fae42",orange:"#f05138",pink:"#dd4b78",purple:"#9068b0",red:"#b8383d",white:"#bfc2c1",yellow:"#b7b73b",ignore:"#3b4b52"});var c=t(43463),d=t(69795);function u(e){var r;let t=e.split(" "),n=null!==(r=t.filter(e=>e.startsWith("-")))&&void 0!==r?r:"";return{title:t.filter(e=>!e.startsWith("-"))[0],flags:n}}function m(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,d.QP)((0,c.$)(r))}var b=t(10268);let x={name:"callout",transform:e=>{let{name:r,query:t,lineNumber:n,fromColumn:s,toColumn:a}=e;return{name:r,query:t,fromLineNumber:n,toLineNumber:n,data:{...e.data,column:(s+a)/2}}},AnnotatedLine:e=>{let{annotation:r,...t}=e,{column:s}=r.data,{indentation:a,children:l}=t;return(0,n.jsxs)(b.F,{merge:t,children:[l,(0,n.jsxs)("div",{style:{minWidth:"".concat(s+4,"ch"),marginLeft:"".concat(a,"ch")},className:"w-fit border bg-editorGroupHeader-tabsBackground border-editorGroup-border rounded px-0 relative my-1 whitespace-break-spaces prose-p:my-1 prose-p:mx-2 select-none",children:[(0,n.jsx)("div",{style:{left:"".concat(s-a-1,"ch")},className:"absolute border-l border-t  border-editorGroup-border w-2 h-2 rotate-45 -translate-y-1/2 -top-[1px]  bg-editorGroupHeader-tabsBackground"}),r.data.children||(0,n.jsx)("div",{className:"px-2",children:r.query})]})]})}},h={name:"mark",Line:e=>{let{annotation:r,...t}=e,s=p(r);return(0,n.jsx)("div",{style:{borderLeft:"solid 2px transparent",borderLeftColor:r&&s,backgroundColor:r&&"rgb(from ".concat(s," r g b / 0.13)")},className:"flex",children:(0,n.jsx)(b.F,{merge:t,className:"px-2 flex-1"})})},Inline:e=>{let{annotation:r,children:t}=e,s=p(r);return(0,n.jsx)("span",{style:{outline:"solid 1px rgb(from ".concat(s," r g b / 0.5)"),backgroundColor:"rgb(from ".concat(s," r g b / 0.13)")},className:"rounded px-0.5 py-0 -mx-0.5",children:t})}};function p(e){let r=Number((null==e?void 0:e.query)||"2")%f.length;return f[r]||(null==e?void 0:e.query)}let f=["#22c55e","#14b8a6","#0ea5e9","#8b5cf6","#d946ef","#ec4899"],g={name:"diff",onlyIfAnnotated:!0,transform:e=>{let r="-"==e.query?"#f85149":"#3fb950";return[e,{...e,name:"mark",query:r}]},Line:e=>{let{annotation:r,...t}=e;return(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"ml-2 text-gray-400 select-none",children:(null==r?void 0:r.query)||" "}),(0,n.jsx)(b.F,{merge:t})]})}},y={name:"focus",PreWithRef:t(91310).PreWithRef,onlyIfAnnotated:!0,Line:e=>(0,n.jsx)(b.F,{merge:e,className:"opacity-50 data-[focus]:opacity-100"}),AnnotatedLine:e=>{let{annotation:r,...t}=e;return(0,n.jsx)(b.F,{merge:t,"data-focus":!0})}};var v=t(96609);let j={name:"line-numbers",Line:e=>{let{totalLines:r,lineNumber:t}=e,s=r.toString().length;return(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("span",{className:"line-number px-4 text-gray-400 text-xs select-none",children:1===r?(0,n.jsx)(v.A,{size:14}):(0,n.jsx)(N,{lineNumber:t,max:s})}),(0,n.jsx)(b.F,{merge:e,className:"flex-1 pl-2"})]})}};function N(e){let{lineNumber:r,max:t}=e,s=t-r.toString().length,a="";if(s>0)for(let e=0;e<s;e++)a+="0";return(0,n.jsxs)("span",{children:[r,(0,n.jsx)("span",{className:"invisible",children:a})]})}function w(e){let{codeblock:r,className:t=""}=e,{flags:l}=u(r.meta),i=r.lang;return(0,n.jsxs)("div",{className:m("code-base",{[t]:!!t,error:l.includes("-error")},i),children:[l.includes("-c")&&(0,n.jsx)(a.CopyButton,{text:r.value}),(0,n.jsx)(s.A,{code:r,handlers:[x,h,g,y,j]})]})}function k(e){let{lang:r="",meta:t="",value:s}=e,{title:a}=u(t);return(a||"shellscript"!=r||(a="shell"),a)?(0,n.jsx)("div",{className:"code-header px-2 py-2 text-sm border-b border-gray-200 bg-gray-50",children:(0,n.jsx)(C,{meta:t,lang:r})}):null}function C(e){let{meta:r="",className:t="",lang:s}=e,{title:a}=u(r);return a||"shellscript"!==s||(a="shell"),(0,n.jsxs)("div",{className:m("flex items-center gap-1 relative z-10",{[t]:!!t}),children:[a&&(0,n.jsx)(i,{title:a}),(0,n.jsx)("span",{children:a})]})}},34034:(e,r,t)=>{"use strict";t.d(r,{N:()=>a,default:()=>l});var n=t(95155),s=t(12115);let a=(0,s.createContext)({index:0,setIndex:()=>{}});function l(e){let{children:r}=e,[t,l]=(0,s.useState)(0);return(0,n.jsx)(a.Provider,{value:{index:t,setIndex:l},children:r})}},65470:(e,r,t)=>{"use strict";t.d(r,{CodeTabHeader:()=>d});var n=t(95155),s=t(12115),a=t(40468),l=t(25683),i=t(85495),o=t(34034),c=t(43463);function d(e){let{tabs:r}=e,{index:t,setIndex:d}=(0,s.use)(o.N),[u,m]=(0,s.useState)(null),b=(0,s.useRef)(null);function x(){b.current=window.setTimeout(()=>{m(null)},200)}return(0,n.jsx)("div",{className:(0,c.A)("flex px-1 py-2 bg-gray-50 gap-1 overflow-auto border-b border-gray-200",{"flex-col w-40 border-r border-b-0":r.length>5}),children:r.map((e,r)=>(0,n.jsxs)("div",{onMouseEnter:()=>{b.current&&window.clearTimeout(b.current),m(r)},onMouseLeave:x,onClick:()=>{d(r)},className:"relative text-sm transition-colors delay-150 hover:delay-0 pl-2 pr-3 py-1 cursor-pointer",children:[(0,n.jsx)(l.N,{children:u===r&&(0,n.jsx)(i.P.span,{className:"absolute inset-0 rounded bg-gray-200",layoutId:"hoverBackground",initial:{opacity:0},animate:{opacity:1,transition:{duration:.15}},exit:{opacity:0,transition:{duration:.15}}})}),(0,n.jsx)(a.S$,{meta:e.meta,className:t===r?"text-blue-700":""})]},e.meta))})}},65703:(e,r,t)=>{"use strict";t.d(r,{CodeTabsInner:()=>d});var n=t(95155),s=t(43463),a=t(12115),l=t(66494),i=t(25926),o=t(40468),c=t(34034);function d(e){let{highlighteds:r}=e,{index:t}=(0,a.use)(c.N);return(0,n.jsx)(l.N,{mode:"wait",children:(0,n.jsx)(i.P.div,{className:(0,s.A)("icon",{"flex-1 w-0":r.length>5}),initial:{y:-10,opacity:0},animate:{y:0,opacity:1},exit:{y:10,opacity:0},transition:{duration:.2},children:(0,n.jsx)(o.bd,{codeblock:r[t]})},r[t].meta)})}},83458:()=>{}},e=>{var r=r=>e(e.s=r);e.O(0,[3459,7525,4320,5926,2794,8441,1517,7358],()=>r(48151)),_N_E=e.O()}]);