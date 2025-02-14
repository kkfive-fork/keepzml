"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6610],{23511:(e,s,a)=>{a.d(s,{A:()=>r});let r=(0,a(67401).A)("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]])},30712:(e,s,a)=>{a.d(s,{A:()=>r});let r=(0,a(67401).A)("Tent",[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]])},16610:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var r=a(95155),d=a(12115),n=a(87081),i=a(23511),l=a(30712),t=a(31149);let c=e=>{let{value:s}=(0,d.use)(e.promise);return s?(0,r.jsxs)("div",{className:"flex border border-gray-200 p-4 rounded items-start",children:[(0,r.jsx)(l.A,{}),(0,r.jsxs)("div",{className:"flex-1 ml-3",children:[(0,r.jsx)("div",{children:"React introduction"}),(0,r.jsx)("div",{className:"text-sm leading-6 mt-2 text-gray-600",children:s})]})]}):(0,r.jsxs)(t.A,{col:!0,className:"border border-gray-200 p-4 rounded",children:[(0,r.jsx)(i.A,{}),(0,r.jsx)("div",{className:"mt-2 text-sm",children:"no data."})]})};var o=a(88860),m={method:"GET",redirect:"follow"};async function u(){return await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo",m),{value:(0,o.Vg)()}}function h(){let[e,s]=(0,d.useState)(Promise.resolve({value:""}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"text-right mb-4",children:(0,r.jsx)("button",{onClick:function(){s(u())},children:"更新数据"})}),(0,r.jsx)(d.Suspense,{fallback:(0,r.jsx)(n.A,{}),children:(0,r.jsx)(c,{promise:e})})]})}},87081:(e,s,a)=>{a.d(s,{A:()=>d});var r=a(95155);function d(e){return"card"===e.type?(0,r.jsx)("div",{className:"border border-gray-200 rounded p-2 w-full",children:(0,r.jsx)("div",{className:"animate-pulse flex space-x-4 items-center",children:[1,2,3,4].map((e,s)=>(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)("div",{className:"rounded-md bg-gray-200  h-32"}),(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-2"}),(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-1"})]}),(0,r.jsx)("div",{className:"grid grid-cols-4 gap-4 mt-2",children:(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-3"})})]},"z-".concat(s)))})}):"header"===e.type?(0,r.jsx)("div",{className:"border border-gray-200 rounded p-4 w-full",children:(0,r.jsxs)("div",{className:"animate-pulse flex space-x-4 items-center",children:[(0,r.jsx)("div",{className:"rounded-full bg-gray-200 h-10 w-10"}),(0,r.jsxs)("div",{className:"flex-1 space-y-3 py-1",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded"}),(0,r.jsx)("div",{className:"space-y-3",children:(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-2"}),(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-1"})]})})]})]})}):(0,r.jsx)("div",{className:"border border-gray-200 rounded p-4 w-full",children:(0,r.jsxs)("div",{className:"animate-pulse flex space-x-4",children:[(0,r.jsx)("div",{className:"rounded-full bg-gray-200 h-10 w-10"}),(0,r.jsxs)("div",{className:"flex-1 space-y-5 py-1",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded"}),(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-2"}),(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-1"})]}),(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded"})]})]})]})})}},88860:(e,s,a)=>{function r(){for(var e=[],s=0;s<16;s++)e[s]="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".substr(Math.floor(16*Math.random()),1);return e[8]="-",e.join("")}a.d(s,{Vg:()=>n,uR:()=>r});let d=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];function n(){return d[Math.floor(10*Math.random())%5]}}}]);