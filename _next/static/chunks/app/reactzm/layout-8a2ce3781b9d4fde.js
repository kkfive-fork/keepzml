(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[844],{49553:(e,t,a)=>{Promise.resolve().then(a.bind(a,4170))},85892:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(67401).A)("FolderDown",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]])},76511:(e,t,a)=>{"use strict";a.r(t),a.d(t,{column_id:()=>r,column_key:()=>s,column_url:()=>n,reactversion:()=>i,start_path:()=>l,user_ids:()=>c});let r="1890555309341343744",n="https://xinyuzone.cn/column/".concat(r),s="reactzm",l="/reactzm/2.preface",i="React@19.0.0",c=["1813145181655089152"]},4170:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var r=a(95155),n=a(85892),s=a(12115),l=a(76046),i=a(9121),c=a(30033),o=a(73312),d=a(56821),p=a(68854),x=a(39550),h=a(76511);let b=[{path:"0.live",name:"0、直播录屏地址",label:"live",type:"newer"},{type:"tip",name:"前言"},{path:"1.reason",name:"1、书名由来",label:"试读",type:"warning"},{path:"2.preface",name:"2、前言",label:"试读",type:"warning"},{path:"3.create",name:"3、创建React项目",label:"试读",type:"warning"},{path:"4.strcture",name:"4、项目结构 . 上",label:"试读",type:"warning"},{path:"5.strcture2",name:"4、项目结构 . 下",label:"试读",type:"warning"},{path:"6.buildup",name:"6、模块组装",label:"试读",type:"warning"},{path:"7.jsx",name:"7、JSX",label:"试读",type:"warning"},{type:"tip",name:"哲学"},{path:"0.overview",name:"0、React 哲学"},{path:"1.componentization",name:"1、组件化"},{path:"2.encaps",name:"2、封装思考"},{path:"3.dispatchui",name:"3、数据驱动视图"},{path:"4.grained",name:"4、组件最小粒度原则"},{path:"5.switch",name:"5、开关思维"}].map(e=>(e.path&&(e.path="/reactzm/".concat(e.path)),e));function u(e){let{children:t}=e,a=(0,l.usePathname)().split("/")[1],u=(0,s.useRef)(null),m=(0,x.i1)(e=>e.isLogin);return(0,s.useEffect)(()=>{m&&(0,p.bV)(h.column_id).then(e=>{(0,x.$t)(a,e.status)})},[m]),(0,r.jsxs)("div",{className:"pt-16 md:flex",children:[(0,r.jsx)("aside",{id:"vp-aside",className:"fixed top-0 left-0 bottom-0 overflow-y-scroll bg-gray-50 hidden md:block",children:(0,r.jsxs)("div",{className:"px-6 w-full",children:[(0,r.jsxs)("div",{className:"flex items-center pb-8 pt-24 sticky top-0 bg-gray-50 border-b border-b-gray-200 mb-8",children:[(0,r.jsx)("div",{className:"flex items-center justify-between p-1 border mr-3 rounded-md border-blue-200",children:(0,r.jsx)(n.A,{className:"text-blue-500",size:20})}),(0,r.jsxs)("div",{className:"text-sm",children:[(0,r.jsx)("div",{children:"当前版本"}),(0,r.jsx)("div",{className:"text-gray-500",children:h.reactversion})]})]}),(0,r.jsx)("nav",{className:"pb-8",children:(0,r.jsx)(i.A,{routers:b})})]})}),(0,r.jsxs)("div",{id:"vp-content",children:[t,(0,r.jsx)(o.A,{className:"fixed bottom-6 right-4 md:hidden",signal:!0,onClick:()=>u.current.show(),children:"目录"}),(0,r.jsxs)(c.A,{ref:u,direction:"left",width:"60%",children:[(0,r.jsx)("header",{className:"h-16 flex items-center px-4",children:(0,r.jsx)(d.K,{})}),(0,r.jsx)("nav",{className:"bg-white h-full py-8 overflow-scroll px-6",onClick:()=>u.current.close(),children:(0,r.jsx)(i.A,{routers:b})})]})]})]})}},9121:(e,t,a)=>{"use strict";a.d(t,{A:()=>p});var r=a(95155),n=a(12115),s=a(25926),l=a(59386),i=a(43463),c=a(69795);function o(e){let{primary:t,type:a,warning:n,danger:s,newer:l,hard:o,className:d,children:p}=e,x=(0,i.A)("text-sm text-gray-500 bg-gray-100 border-gray-200 border px-2 rounded-full text-xs",{"bg-blue-100 text-blue-500 border-blue-200":!!t||"primary"===a,"bg-green-100 text-green-500 border-green-200":!!l||"newer"===a,"bg-red-100 text-red-500 border-red-200":!!s||"danger"==a,"bg-orange-100 text-orange-500 border-orange-200":!!n||"warning"===a,"bg-fuchsia-100 text-fuchsia-500 border-fuchsia-200":!!o||"hard"===a},d);return(0,r.jsx)("label",{className:(0,c.QP)(x),children:p})}var d=a(9531);function p(e){let{routers:t}=e;return(0,r.jsx)("div",{className:"pb-12",children:t.map((e,t)=>"tip"===e.type?(0,r.jsx)(s.P.div,{className:"text-xs text-gray-400 first:pt-0 pb-4 pt-8",...x(.03*t),children:e.name},"z-".concat(t)):(0,n.createElement)(s.P.div,{...x(.03*t),key:e.path},(0,r.jsx)(l.A,{className:"text-gray-700",activeName:"text-blue-700",href:e.path,children:(0,r.jsxs)("li",{className:"py-2 text-xs transition flex items-center justify-between hover:text-blue-700",children:[(0,r.jsx)("div",{className:"line-clamp-1",children:e.name}),(0,r.jsx)(d.A,{when:!!e.label,children:(0,r.jsx)(o,{type:e.type,className:"ml-2",children:e.label})})]},e.path)})))})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{initial:{x:-30,opacity:0},animate:{x:0,opacity:1},transition:{duration:.4,delay:e}}}},73312:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});var r=a(95155),n=a(9531),s=a(69795),l=a(43463);function i(e){let t,a,i,c,o,d,p,x,h;let{className:b,primary:u,danger:m,sm:g,lg:y,signal:v,success:f,ghost:w,rect:j,disabled:N,...A}=e,k=!u&&!m&&!f&&!v,_=(0,s.QP)((0,l.A)("rounded border border-transparent font-medium cursor-pointer transition relative text-gray-700 inline-flex items-center justify-center space-x-1.5","text-[13px] py-1 px-3",{[(t="bg-gray-100 text-gray-600",a="hover:bg-gray-200 active:bg-gray-300",(w&&(t="bg-transparent text-gray-500",a="hover:text-gray-700 active:text-gray-700"),N)?(0,l.A)("opacity-70 cursor-not-allowed",t):(0,l.A)(t,a))]:k,[(i="bg-blue-500 text-white",c="hover:bg-blue-600 active:bg-blue-700",(w&&(i="bg-transparent text-blue-500",c="hover:text-blue-600 active:text-blue-700"),N)?(0,l.A)("opacity-70 cursor-not-allowed",i):(0,l.A)(i,c))]:u,[(o="bg-red-500 text-white",d="hover:bg-red-600 active:bg-red-700",(w&&(o="bg-transparent text-red-500",d="hover:text-red-600 active:text-red-700"),N)?(0,l.A)("opacity-70 cursor-not-allowed",o):(0,l.A)(o,d))]:m,[(p="bg-green-500 text-white",x="hover:bg-green-600 active:bg-green-700",(w&&(p="bg-transparent text-green-500",x="hover:text-green-600 active:text-green-700"),N)?(0,l.A)("opacity-70 cursor-not-allowed",p):(0,l.A)(p,x))]:f,[(h="bg-white border-sky-300 text-sky-500",N?(0,l.A)("opacity-70 cursor-not-allowed",h):(0,l.A)(h,"hover:border-sky-400 active:bg-sky-500 hover:text-sky-600 active:text-sky-700 hover:bg-sky-50 active:bg-sky-100"))]:v,"text-xs py-1.5 px-3":g,"text-md py-2 px-4":y,"p-2":j},b));return(0,r.jsxs)("button",{className:_,...A,disabled:N,children:[e.children,(0,r.jsx)(n.A,{when:v,children:(0,r.jsxs)("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[(0,r.jsx)("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),(0,r.jsx)("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})})]})}},9531:(e,t,a)=>{"use strict";function r(e){let{when:t,fallback:a=null,children:r}=e;return"boolean"==typeof t?t?r:a:t?"function"==typeof r?r(t):r:a}a.d(t,{A:()=>r}),a(12115)}},e=>{var t=t=>e(e.s=t);e.O(0,[5112,4003,7525,8173,5926,6821,8441,1517,7358],()=>t(49553)),_N_E=e.O()}]);