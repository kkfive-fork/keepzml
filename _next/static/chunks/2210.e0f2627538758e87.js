"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2210],{42210:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var l=n(95155),s=n(12115);let r=function(e){let{counter:t}=e,n=performance.now();for(;performance.now()-n<1;);return(0,l.jsx)("li",{children:t})};var c=n(73552);function a(e){let{value:t}=e;return(0,l.jsx)(c.Ay,{className:"font-bold text-7xl",value:t,format:{notation:"compact"},locales:"en-US"})}let i=(0,s.memo)(e=>{let{counter:t}=e,n=[];for(let e=0;e<200;e++)n.push((0,l.jsx)(r,{counter:t},e));return(0,l.jsxs)("div",{className:"text-red-500 flex-1",children:[(0,l.jsxs)("div",{className:"flex-1 text-center",children:[(0,l.jsx)(a,{value:t}),(0,l.jsx)("div",{children:"耗时任务"})]}),(0,l.jsx)("ul",{className:"h-32 hidden",children:n})]})}),u=(0,n(99827).v)(e=>({counter:0,increment:()=>e(e=>({counter:e.counter+1}))}));function o(){let e=u(e=>e.counter),t=u(e=>e.increment),n=(0,s.useDeferredValue)(e);return(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(i,{counter:n}),(0,l.jsxs)("div",{className:"flex-1 text-center",children:[(0,l.jsx)(a,{value:e}),(0,l.jsx)("div",{children:"高优先级任务"})]})]}),(0,l.jsx)("div",{className:"text-right mt-8",children:(0,l.jsx)("button",{className:"button",onClick:t,children:"counter++"})})]})}},99827:(e,t,n)=>{n.d(t,{v:()=>i});var l=n(12115);let s=e=>{let t;let n=new Set,l=(e,l)=>{let s="function"==typeof e?e(t):e;if(!Object.is(s,t)){let e=t;t=(null!=l?l:"object"!=typeof s||null===s)?s:Object.assign({},t,s),n.forEach(n=>n(t,e))}},s=()=>t,r={setState:l,getState:s,getInitialState:()=>c,subscribe:e=>(n.add(e),()=>n.delete(e))},c=t=e(l,s,r);return r},r=e=>e?s(e):s,c=e=>e,a=e=>{let t=r(e),n=e=>(function(e,t=c){let n=l.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return l.useDebugValue(n),n})(t,e);return Object.assign(n,t),n},i=e=>e?a(e):a}}]);