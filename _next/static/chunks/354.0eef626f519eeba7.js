"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[354],{10354:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(95155),l=r(73312),a=r(12115);function o(e,t){let r=e.length;e.push(t),function(e,t,r){let n=r;for(;n>0;){let r=n-1>>>1,l=e[r];if(!(s(l,t)>0))return;e[r]=t,e[n]=l,n=r}}(e,t,r)}function s(e,t){let r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}function c(){let e=(0,a.useRef)(null),[t,r]=(0,a.useState)(!1),c=(0,a.useRef)([]);function i(){let t=performance.now(),r=document.createElement("span");for(r.innerText="1";performance.now()-t<1;);e.current.appendChild(r)}function u(){let t=performance.now(),r=document.createElement("span");for(r.style.color="red",r.innerHTML="<strong>2</strong>";performance.now()-t<1;);e.current.appendChild(r)}return(0,a.useEffect)(()=>{for(let e=0;e<3e3;e++){let t={callback:i,id:e,sortIndex:100};o(c.current,t)}},[]),(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsxs)("div",{className:"space-x-2",children:[(0,n.jsx)(l.A,{success:!0,disabled:!t,onClick:function(){o(c.current,{callback:u,id:0,sortIndex:1})},children:"插入高优先级任务"}),(0,n.jsx)(l.A,{danger:!0,disabled:t,onClick:function(){r(!0),requestIdleCallback(function e(){if(0===c.current.length)return r(!1);requestIdleCallback(t=>{let r;for(;(r=function(e){if(0===e.length)return null;let t=e[0],r=e.pop();return r!==t&&(e[0]=r,function(e,t,r){let n=0,l=e.length,a=l>>>1;for(;n<a;){let r=(n+1)*2-1,a=e[r],o=r+1,c=e[o];if(0>s(a,t))o<l&&0>s(c,a)?(e[n]=c,e[o]=t,n=o):(e[n]=a,e[r]=t,n=r);else{if(!(o<l&&0>s(c,t)))return;e[n]=c,e[o]=t,n=o}}}(e,r,0)),t}(c.current))&&!t.didTimeout&&t.timeRemaining()>0;)r.callback();e()})})},children:t?"插入中...":"插入 100 万个子节点"})]}),(0,n.jsx)("div",{ref:e,className:"h-72 break-words overflow-y-scroll"})]})}},73312:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(95155),l=r(9531),a=r(69795),o=r(43463);function s(e){let t,r,s,c,i,u,d,x,f;let{className:p,primary:b,danger:g,sm:h,lg:y,signal:v,success:m,ghost:k,rect:w,disabled:A,...j}=e,N=!b&&!g&&!m&&!v,C=(0,a.QP)((0,o.A)("rounded border border-transparent font-medium cursor-pointer transition relative text-gray-700 inline-flex items-center justify-center space-x-1.5","text-[13px] py-1 px-3",{[(t="bg-gray-100 text-gray-600",r="hover:bg-gray-200 active:bg-gray-300",(k&&(t="bg-transparent text-gray-500",r="hover:text-gray-700 active:text-gray-700"),A)?(0,o.A)("opacity-70 cursor-not-allowed",t):(0,o.A)(t,r))]:N,[(s="bg-blue-500 text-white",c="hover:bg-blue-600 active:bg-blue-700",(k&&(s="bg-transparent text-blue-500",c="hover:text-blue-600 active:text-blue-700"),A)?(0,o.A)("opacity-70 cursor-not-allowed",s):(0,o.A)(s,c))]:b,[(i="bg-red-500 text-white",u="hover:bg-red-600 active:bg-red-700",(k&&(i="bg-transparent text-red-500",u="hover:text-red-600 active:text-red-700"),A)?(0,o.A)("opacity-70 cursor-not-allowed",i):(0,o.A)(i,u))]:g,[(d="bg-green-500 text-white",x="hover:bg-green-600 active:bg-green-700",(k&&(d="bg-transparent text-green-500",x="hover:text-green-600 active:text-green-700"),A)?(0,o.A)("opacity-70 cursor-not-allowed",d):(0,o.A)(d,x))]:m,[(f="bg-white border-sky-300 text-sky-500",A?(0,o.A)("opacity-70 cursor-not-allowed",f):(0,o.A)(f,"hover:border-sky-400 active:bg-sky-500 hover:text-sky-600 active:text-sky-700 hover:bg-sky-50 active:bg-sky-100"))]:v,"text-xs py-1.5 px-3":h,"text-md py-2 px-4":y,"p-2":w},p));return(0,n.jsxs)("button",{className:C,...j,disabled:A,children:[e.children,(0,n.jsx)(l.A,{when:v,children:(0,n.jsxs)("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[(0,n.jsx)("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),(0,n.jsx)("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})})]})}},9531:(e,t,r)=>{function n(e){let{when:t,fallback:r=null,children:n}=e;return"boolean"==typeof t?t?n:r:t?"function"==typeof n?n(t):n:r}r.d(t,{A:()=>n}),r(12115)}}]);