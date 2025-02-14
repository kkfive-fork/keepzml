"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6543],{20853:(e,s,a)=>{a.d(s,{A:()=>r});let r=(0,a(67401).A)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},16543:(e,s,a)=>{a.r(s),a.d(s,{default:()=>p});var r=a(95155),n=a(12115),c=a(87081),t=a(88860);function l(e){let s=function(e){var s;let a,r,n,{search:c,count:t}=e,l="searchList:key:".concat(c,"-").concat(t),o=localStorage.getItem(l);if(o)return{promise:Promise.resolve(JSON.parse(o)),abort:()=>{}};let i=(s={results:t,inc:"name,gender,email,nat,picture&noinfo"},r=(a=new AbortController).signal,n=Object.keys(s).reduce((e,a)=>"".concat(e).concat(e?"&":"").concat(a,"=").concat(s[a]),""),{promise:new Promise(e=>{fetch("".concat("https://randomuser.me/api","?").concat(n),{signal:r}).then(s=>{e(s.json())}).catch(()=>{console.warn("fetch has been canceled!")})}),controller:a});return{promise:i.promise.then(e=>(localStorage.setItem(l,JSON.stringify(e.results)),e.results)),abort:()=>{i.controller.abort()}}}(e);return{promise:s.promise.then(e=>e.map((e,s)=>({...e,id:(0,t.uR)(),desc:"".concat(s,"、").concat((0,t.Vg)()),fullname:e.name.first+" "+e.name.last,thumb:e.picture.thumbnail}))),abort:s.abort}}var o=a(31149),i=a(20853);function d(e){return(0,r.jsxs)("div",{className:"flex items-center border border-gray-200 px-2 rounded text-gray-500",children:[(0,r.jsx)(i.A,{size:18}),(0,r.jsx)("input",{className:"flex-1 !border-none p-2 text-sm",type:"text",...e})]})}function u(e){let{value:s,onChange:a}=e,[c,t]=(0,n.useState)(s);return(0,r.jsxs)(o.A,{children:[(0,r.jsx)("label",{htmlFor:"cars",className:"mr-8",children:"每一页个数"}),(0,r.jsxs)("select",{id:"cars",className:"border rounded px-3 py-1",value:c,onChange:function(e){let s=e.target.value;t(s),a&&a(s)},children:[(0,r.jsx)("option",{value:"1",children:"1"}),(0,r.jsx)("option",{value:"2",children:"2"}),(0,r.jsx)("option",{value:"3",children:"3"}),(0,r.jsx)("option",{value:"4",children:"4"})]})]})}function m(e){let{onChange:s}=e;return(0,r.jsxs)(o.A,{between:!0,children:[(0,r.jsx)(d,{onChange:function(e){s&&s({search:e.target.value})},placeholder:"Enter something"}),(0,r.jsx)(u,{value:"1",onChange:function(e){s&&s({count:e})}})]})}function h(e){let{promise:s}=e,a=(0,n.use)(s);return console.log(a),(0,r.jsx)("div",{className:"space-y-2",children:a.map(e=>(0,r.jsxs)("div",{className:"flex border rounded p-4 items-center border-gray-200",children:[(0,r.jsx)("img",{className:"w-14 h-14 rounded-full",src:e.thumb,alt:""}),(0,r.jsxs)("div",{className:"flex-1 ml-4",children:[(0,r.jsx)("div",{className:"font-bold",children:e.fullname}),(0,r.jsx)("div",{className:"text-gray-400 text-sm mt-1 line-clamp-1",children:e.desc})]})]},e.id))})}function p(){let e=(0,n.useRef)({search:"",count:1}),[s,a]=(0,n.useState)(()=>l(e.current));return(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)(m,{onChange:function(r){s.abort(),e.current=Object.assign(e.current,r),a(l(e.current))}}),(0,r.jsx)(n.Suspense,{fallback:(0,r.jsx)(c.A,{}),children:(0,r.jsx)(h,{promise:s.promise})})]})}},87081:(e,s,a)=>{a.d(s,{A:()=>n});var r=a(95155);function n(e){return"card"===e.type?(0,r.jsx)("div",{className:"border border-gray-200 rounded p-2 w-full",children:(0,r.jsx)("div",{className:"animate-pulse flex space-x-4 items-center",children:[1,2,3,4].map((e,s)=>(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)("div",{className:"rounded-md bg-gray-200  h-32"}),(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-2"}),(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-1"})]}),(0,r.jsx)("div",{className:"grid grid-cols-4 gap-4 mt-2",children:(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-3"})})]},"z-".concat(s)))})}):"header"===e.type?(0,r.jsx)("div",{className:"border border-gray-200 rounded p-4 w-full",children:(0,r.jsxs)("div",{className:"animate-pulse flex space-x-4 items-center",children:[(0,r.jsx)("div",{className:"rounded-full bg-gray-200 h-10 w-10"}),(0,r.jsxs)("div",{className:"flex-1 space-y-3 py-1",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded"}),(0,r.jsx)("div",{className:"space-y-3",children:(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-2"}),(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-1"})]})})]})]})}):(0,r.jsx)("div",{className:"border border-gray-200 rounded p-4 w-full",children:(0,r.jsxs)("div",{className:"animate-pulse flex space-x-4",children:[(0,r.jsx)("div",{className:"rounded-full bg-gray-200 h-10 w-10"}),(0,r.jsxs)("div",{className:"flex-1 space-y-5 py-1",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded"}),(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-2"}),(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded col-span-1"})]}),(0,r.jsx)("div",{className:"h-2 bg-gray-200 rounded"})]})]})]})})}},88860:(e,s,a)=>{function r(){for(var e=[],s=0;s<16;s++)e[s]="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".substr(Math.floor(16*Math.random()),1);return e[8]="-",e.join("")}a.d(s,{Vg:()=>c,uR:()=>r});let n=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];function c(){return n[Math.floor(10*Math.random())%5]}}}]);