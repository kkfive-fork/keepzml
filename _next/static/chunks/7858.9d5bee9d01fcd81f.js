"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7858],{87858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var c=n(95155);let l=(0,n(99827).v)()(e=>({count:1,inc:()=>e(e=>({count:e.count+1})),dec:()=>e(e=>({count:e.count-1}))}));var s=n(73552);function a(e){let{value:t}=e;return(0,c.jsx)(s.Ay,{className:"font-bold text-7xl",value:t,format:{notation:"compact"},locales:"en-US"})}var u=n(31149);function r(){let e=l(e=>e.count),t=l(e=>e.inc),n=l(e=>e.dec);return(0,c.jsxs)("div",{className:"flex flex-col items-center space-y-4",children:[(0,c.jsx)(u.A,{center:!0,className:"border border-gray-200 rounded size-48",children:(0,c.jsx)(a,{value:e})}),(0,c.jsxs)("div",{className:"space-x-2",children:[(0,c.jsx)("button",{className:"button",onClick:n,children:"count--"}),(0,c.jsx)("button",{className:"button",onClick:t,children:"count++"})]})]})}},99827:(e,t,n)=>{n.d(t,{v:()=>r});var c=n(12115);let l=e=>{let t;let n=new Set,c=(e,c)=>{let l="function"==typeof e?e(t):e;if(!Object.is(l,t)){let e=t;t=(null!=c?c:"object"!=typeof l||null===l)?l:Object.assign({},t,l),n.forEach(n=>n(t,e))}},l=()=>t,s={setState:c,getState:l,getInitialState:()=>a,subscribe:e=>(n.add(e),()=>n.delete(e))},a=t=e(c,l,s);return s},s=e=>e?l(e):l,a=e=>e,u=e=>{let t=s(e),n=e=>(function(e,t=a){let n=c.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return c.useDebugValue(n),n})(t,e);return Object.assign(n,t),n},r=e=>e?u(e):u}}]);