"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8567],{38567:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var s=n(95155),l=n(12115);let u=(0,n(99827).v)(()=>({x:0,y:0}));function i(){u.setState(e=>({x:e.x+1,y:e.y+1}))}function r(){let e=u(e=>e.x),t=u(e=>e.y);return(0,l.useEffect)(()=>(window.addEventListener("mousemove",i),()=>{window.removeEventListener("mousemove",i)}),[]),(0,s.jsxs)("div",{className:"text-center",children:["鼠标当前位置",(0,s.jsxs)("div",{className:"font-bold text-2xl mt-4",children:[e,", ",t]})]})}},99827:(e,t,n)=>{n.d(t,{v:()=>a});var s=n(12115);let l=e=>{let t;let n=new Set,s=(e,s)=>{let l="function"==typeof e?e(t):e;if(!Object.is(l,t)){let e=t;t=(null!=s?s:"object"!=typeof l||null===l)?l:Object.assign({},t,l),n.forEach(n=>n(t,e))}},l=()=>t,u={setState:s,getState:l,getInitialState:()=>i,subscribe:e=>(n.add(e),()=>n.delete(e))},i=t=e(s,l,u);return u},u=e=>e?l(e):l,i=e=>e,r=e=>{let t=u(e),n=e=>(function(e,t=i){let n=s.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return s.useDebugValue(n),n})(t,e);return Object.assign(n,t),n},a=e=>e?r(e):r}}]);