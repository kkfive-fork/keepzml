"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4233],{4233:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var r=a(95155),d=a(12115),n=a(87081),l=a(88860);let i="https://randomuser.me/api/?results=".concat(3,"&inc=name,gender,email,nat,picture&noinfo"),c=async()=>{let e=await fetch(i);return(await e.json()).results.map(e=>(e.desc=(0,l.Vg)(),e.id=(0,l.uR)(),e))};function t(e){let{promise:s}=e,a=(0,d.use)(s);return(0,r.jsx)("div",{className:"mb-4",children:a.map(e=>(0,r.jsxs)("div",{className:"flex border-b py-4 mx-4 items-center border-dashed border-gray-300",children:[(0,r.jsx)("img",{className:"w-14 h-14 rounded-full",src:e.picture.large,alt:""}),(0,r.jsxs)("div",{className:"flex-1 ml-4",children:[(0,r.jsx)("div",{className:"font-bold",children:e.name.last}),(0,r.jsx)("div",{className:"text-gray-400 text-sm mt-1 line-clamp-1",children:e.desc})]})]},e.id))})}let o=()=>{let[e,s]=(0,d.useState)(()=>[c()]);return(0,r.jsxs)(r.Fragment,{children:[e.map(e=>(0,r.jsx)(d.Suspense,{fallback:(0,r.jsx)(n.A,{}),children:(0,r.jsx)(t,{promise:e})},(0,l.uR)())),(0,r.jsx)("div",{className:"text-center my-4",children:(0,r.jsx)("button",{className:"button",onClick:()=>{s([...e,c()])},children:"loading more"})})]})}},87081:(e,s,a)=>{a.d(s,{A:()=>d});var r=a(95155);function d(e){return"card"===e.type?(0,r.jsx)("div",{className:"border border-gray-200 rounded p-2 w-full",children:(0,r.jsx)("div",{className:"animate-pulse flex space-x-4 items-center",children:[1,2,3,4].map((e,s)=>(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)("div",{className:"rounded-md bg-gray-200  h-32"}),(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-2"}),(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-1"})]}),(0,r.jsx)("div",{className:"grid grid-cols-4 gap-4 mt-2",children:(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-3"})})]},"z-".concat(s)))})}):"header"===e.type?(0,r.jsx)("div",{className:"border border-gray-200 rounded p-4 w-full",children:(0,r.jsxs)("div",{className:"animate-pulse flex space-x-4 items-center",children:[(0,r.jsx)("div",{className:"rounded-full bg-gray-200 h-10 w-10"}),(0,r.jsxs)("div",{className:"flex-1 space-y-3 py-1",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded"}),(0,r.jsx)("div",{className:"space-y-3",children:(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-2"}),(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-1"})]})})]})]})}):(0,r.jsx)("div",{className:"border border-gray-200 rounded p-4 w-full",children:(0,r.jsxs)("div",{className:"animate-pulse flex space-x-4",children:[(0,r.jsx)("div",{className:"rounded-full bg-gray-200 h-10 w-10"}),(0,r.jsxs)("div",{className:"flex-1 space-y-5 py-1",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded"}),(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-2"}),(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-1"})]}),(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded"})]})]})]})})}},88860:(e,s,a)=>{function r(){for(var e=[],s=0;s<16;s++)e[s]="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".substr(Math.floor(16*Math.random()),1);return e[8]="-",e.join("")}a.d(s,{Vg:()=>n,uR:()=>r});let d=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];function n(){return d[Math.floor(10*Math.random())%5]}}}]);