"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7853],{87853:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(95155),s=n(12115),r=n(88860),o={method:"GET",redirect:"follow"};async function i(e){return await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo",o),{value:e,id:(0,r.uR)()}}function u(e){let{message:t}=e,[n]=(0,s.useState)(()=>i(t));return(0,a.jsx)("div",{className:"indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded",children:(0,a.jsx)(s.Suspense,{fallback:(0,a.jsxs)(a.Fragment,{children:[t,(0,a.jsx)("small",{children:"(Sendding...)"})]}),children:(0,a.jsx)(l,{promise:n})})})}function l(e){let{promise:t}=e;return(0,s.use)(t).value}function c(){let[e,t]=(0,s.useState)([]),n=(0,s.useRef)(null);async function o(a){t([...e,{value:a.get("message"),id:(0,r.uR)()}]),n.current.reset()}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("form",{action:o,ref:n,className:"flex",children:[(0,a.jsx)("input",{type:"text",name:"message",placeholder:"enter your message"}),(0,a.jsx)("button",{type:"submit",className:"ml-2",children:"Send"})]}),e.map(e=>(0,a.jsx)(u,{message:e.value},e.id))]})}},88860:(e,t,n)=>{function a(){for(var e=[],t=0;t<16;t++)e[t]="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".substr(Math.floor(16*Math.random()),1);return e[8]="-",e.join("")}n.d(t,{Vg:()=>r,uR:()=>a});let s=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];function r(){return s[Math.floor(10*Math.random())%5]}}}]);