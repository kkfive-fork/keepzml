"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7075],{67075:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var c=n(95155),s=n(31149);let l=(0,n(99827).v)()(e=>({count1:1,count2:1,inc_count1:()=>e(e=>({count1:e.count1+1})),dec_count1:()=>e(e=>({count1:e.count1-1})),inc_count2:()=>e(e=>({count2:e.count2+1})),dec_count2:()=>e(e=>({count2:e.count2-1}))}));var u=n(73552);function o(e){let{value:t}=e;return(0,c.jsx)(u.Ay,{className:"font-bold text-7xl",value:t,format:{notation:"compact"},locales:"en-US"})}function r(){let e=l(e=>e.count1),t=l(e=>e.inc_count1);return(0,c.jsxs)("div",{className:"flex flex-col items-center space-y-4",children:[(0,c.jsx)(s.A,{center:!0,className:"border border-gray-200 rounded size-48",children:(0,c.jsx)(o,{value:e})}),(0,c.jsx)("div",{className:"space-x-2",children:(0,c.jsx)("button",{className:"button",onClick:t,children:"count++"})})]})}function a(){let e=l(e=>e.count2),t=l(e=>e.inc_count2);return(0,c.jsxs)("div",{className:"flex flex-col items-center space-y-4",children:[(0,c.jsx)(s.A,{center:!0,className:"border border-gray-200 rounded size-48",children:(0,c.jsx)(o,{value:e})}),(0,c.jsx)("div",{className:"space-x-2",children:(0,c.jsx)("button",{className:"button",onClick:t,children:"count++"})})]})}function i(){return(0,c.jsxs)("div",{className:"flex items-center justify-center space-x-4",children:[(0,c.jsx)(r,{}),(0,c.jsx)(a,{})]})}},99827:(e,t,n)=>{n.d(t,{v:()=>r});var c=n(12115);let s=e=>{let t;let n=new Set,c=(e,c)=>{let s="function"==typeof e?e(t):e;if(!Object.is(s,t)){let e=t;t=(null!=c?c:"object"!=typeof s||null===s)?s:Object.assign({},t,s),n.forEach(n=>n(t,e))}},s=()=>t,l={setState:c,getState:s,getInitialState:()=>u,subscribe:e=>(n.add(e),()=>n.delete(e))},u=t=e(c,s,l);return l},l=e=>e?s(e):s,u=e=>e,o=e=>{let t=l(e),n=e=>(function(e,t=u){let n=c.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return c.useDebugValue(n),n})(t,e);return Object.assign(n,t),n},r=e=>e?o(e):o}}]);