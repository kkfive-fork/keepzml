"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9239],{49239:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var r=a(95155),n=a(12115),d=a(87081),i=a(88860),t={method:"GET",redirect:"follow"};async function l(){return await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo",t),{value:(0,i.Vg)(),id:(0,i.uR)()}}function c(e){let{promise:s,index:a=0}=e,{id:n,value:d}=function(e){if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;if("pending"===e.status)throw e;throw e.status="pending",e.then(s=>{e.status="fulfilled",e.value=s},s=>{e.status="rejected",e.reason=s}),e}(s);return(0,r.jsxs)("div",{className:"flex border border-gray-200 p-4 rounded items-start",children:[(0,r.jsx)("img",{className:"w-10",src:"https://api.dicebear.com/7.x/miniavs/svg?seed=".concat(a),alt:""}),(0,r.jsxs)("div",{className:"flex-1 ml-3",children:[(0,r.jsx)("div",{children:n||"momo"}),(0,r.jsx)("div",{className:"text-sm mt-1 text-gray-600",children:d})]})]})}function o(){let[e,s]=(0,n.useState)(()=>[l()]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"text-right mb-4",children:(0,r.jsx)("button",{className:"button",onClick:function(){s([...e,l()])},children:"新增数据"})}),(0,r.jsx)("div",{className:"space-y-4",children:e.map((e,s)=>(0,r.jsx)(n.Suspense,{fallback:(0,r.jsx)(d.A,{}),children:(0,r.jsx)(c,{promise:e,index:s})},(0,i.uR)()))})]})}},87081:(e,s,a)=>{a.d(s,{A:()=>n});var r=a(95155);function n(e){return"card"===e.type?(0,r.jsx)("div",{className:"border border-gray-200 rounded p-2 w-full",children:(0,r.jsx)("div",{className:"animate-pulse flex space-x-4 items-center",children:[1,2,3,4].map((e,s)=>(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)("div",{className:"rounded-md bg-gray-200  h-32"}),(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-2"}),(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-1"})]}),(0,r.jsx)("div",{className:"grid grid-cols-4 gap-4 mt-2",children:(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-3"})})]},"z-".concat(s)))})}):"header"===e.type?(0,r.jsx)("div",{className:"border border-gray-200 rounded p-4 w-full",children:(0,r.jsxs)("div",{className:"animate-pulse flex space-x-4 items-center",children:[(0,r.jsx)("div",{className:"rounded-full bg-gray-200 h-10 w-10"}),(0,r.jsxs)("div",{className:"flex-1 space-y-3 py-1",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded"}),(0,r.jsx)("div",{className:"space-y-3",children:(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-2"}),(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-1"})]})})]})]})}):(0,r.jsx)("div",{className:"border border-gray-200 rounded p-4 w-full",children:(0,r.jsxs)("div",{className:"animate-pulse flex space-x-4",children:[(0,r.jsx)("div",{className:"rounded-full bg-gray-200 h-10 w-10"}),(0,r.jsxs)("div",{className:"flex-1 space-y-5 py-1",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded"}),(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-2"}),(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-1"})]}),(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded"})]})]})]})})}},88860:(e,s,a)=>{function r(){for(var e=[],s=0;s<16;s++)e[s]="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".substr(Math.floor(16*Math.random()),1);return e[8]="-",e.join("")}a.d(s,{Vg:()=>d,uR:()=>r});let n=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];function d(){return n[Math.floor(10*Math.random())%5]}}}]);