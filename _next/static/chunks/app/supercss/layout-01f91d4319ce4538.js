(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2170],{84501:(e,t,r)=>{Promise.resolve().then(r.bind(r,2303))},85892:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(67401).A)("FolderDown",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]])},45131:(e,t,r)=>{"use strict";r.r(t),r.d(t,{column_id:()=>a,column_key:()=>l,column_url:()=>n,reactversion:()=>c,start_path:()=>i,user_ids:()=>d});var s=r(5782);let a="189055530934134374x",n="/payment",l="supercss",i="/supercss/1.px",c="CSS 3.x",d=["1813145181655089152","1823968445075886080","1825360982176694272","1843293842095513600","1825542437850849280","1843292611159564288","1843423073341317120","1825335843305291776","1867511769992531968","1843501381710028800","1823924840911147008","1843467711817228288","1843300423470194688","1843290535742447616"].concat(s.d)},2303:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var s=r(95155),a=r(85892),n=r(12115),l=r(76046),i=r(9121),c=r(30033),d=r(73312),o=r(73974),x=r(68854),p=r(39550),u=r(45131);let b=[{type:"tip",name:"尺寸单位"},{path:"1.px",name:"1、像素与分辨率",label:"试读",type:"warning"},{path:"2.pxp",name:"2、像素在实践中的细节考虑"},{path:"3.em",name:"3、em",label:"试读",type:"warning"},{path:"4.emp",name:"4、em 实践应用运用思考"}].map(e=>(e.path&&(e.path="/supercss/".concat(e.path)),e));function h(e){let{children:t}=e,r=(0,l.usePathname)().split("/")[1],h=(0,n.useRef)(null),g=(0,p.i1)(e=>e.isLogin),m=(0,p.i1)(e=>e.userinfo);return(0,n.useEffect)(()=>{if(g){if(u.user_ids.includes(m.user_id))return(0,p.$t)(r,1);(0,x.bV)(u.column_id).then(e=>{(0,p.$t)(r,e.status)})}},[g]),(0,s.jsxs)("div",{className:"pt-16 md:flex",children:[(0,s.jsx)("aside",{id:"vp-aside",className:"fixed top-0 left-0 bottom-0 overflow-y-scroll bg-gray-50 hidden md:block",children:(0,s.jsxs)("div",{className:"px-6 w-full",children:[(0,s.jsxs)("div",{className:"flex items-center pb-8 pt-24 sticky top-0 bg-gray-50 border-b border-b-gray-200 mb-8",children:[(0,s.jsx)("div",{className:"flex items-center justify-between p-1 border mr-3 rounded-md border-blue-200",children:(0,s.jsx)(a.A,{className:"text-blue-500",size:20})}),(0,s.jsxs)("div",{className:"text-sm",children:[(0,s.jsx)("div",{children:"当前版本"}),(0,s.jsx)("div",{className:"text-gray-500",children:u.reactversion})]})]}),(0,s.jsx)("nav",{className:"pb-8",children:(0,s.jsx)(i.A,{routers:b})})]})}),(0,s.jsxs)("div",{id:"vp-content",children:[t,(0,s.jsx)(d.A,{className:"fixed bottom-6 right-4 md:hidden",signal:!0,onClick:()=>h.current.show(),children:"目录"}),(0,s.jsxs)(c.A,{ref:h,direction:"left",width:"60%",children:[(0,s.jsx)("header",{className:"h-16 flex items-center px-4",children:(0,s.jsx)(o.K,{})}),(0,s.jsx)("nav",{className:"bg-white h-full py-8 overflow-scroll px-6",onClick:()=>h.current.close(),children:(0,s.jsx)(i.A,{routers:b})})]})]})]})}},5782:(e,t,r)=>{"use strict";r.d(t,{d:()=>s});let s=["1876473278160396288","1876603137427726336","1844190120425857024","1876458676324360192","1825412530181251072","1843290729850642432","1825345714910134272","1883829263195709440","1825385750548447232"]},9121:(e,t,r)=>{"use strict";r.d(t,{A:()=>x});var s=r(95155),a=r(12115),n=r(25926),l=r(59386),i=r(43463),c=r(69795);function d(e){let{primary:t,type:r,warning:a,danger:n,newer:l,hard:d,className:o,children:x}=e,p=(0,i.A)("text-sm text-gray-500 bg-gray-100 border-gray-200 border px-2 rounded-full text-xs",{"bg-blue-100 text-blue-500 border-blue-200":!!t||"primary"===r,"bg-green-100 text-green-500 border-green-200":!!l||"newer"===r,"bg-red-100 text-red-500 border-red-200":!!n||"danger"==r,"bg-orange-100 text-orange-500 border-orange-200":!!a||"warning"===r,"bg-fuchsia-100 text-fuchsia-500 border-fuchsia-200":!!d||"hard"===r},o);return(0,s.jsx)("label",{className:(0,c.QP)(p),children:x})}var o=r(9531);function x(e){let{routers:t}=e;return(0,s.jsx)("div",{className:"pb-12",children:t.map((e,t)=>"tip"===e.type?(0,s.jsx)(n.P.div,{className:"text-xs text-gray-400 first:pt-0 pb-4 pt-8",...p(.03*t),children:e.name},"z-".concat(t)):(0,a.createElement)(n.P.div,{...p(.03*t),key:e.path},(0,s.jsx)(l.A,{className:"text-gray-700",activeName:"text-blue-700",href:e.path,children:(0,s.jsxs)("li",{className:"py-2 text-xs transition flex items-center justify-between hover:text-blue-700",children:[(0,s.jsx)("div",{className:"line-clamp-1",children:e.name}),(0,s.jsx)(o.A,{when:!!e.label,children:(0,s.jsx)(d,{type:e.type,className:"ml-2",children:e.label})})]},e.path)})))})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{initial:{x:-30,opacity:0},animate:{x:0,opacity:1},transition:{duration:.4,delay:e}}}},73312:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var s=r(95155),a=r(9531),n=r(69795),l=r(43463);function i(e){let t,r,i,c,d,o,x,p,u;let{className:b,primary:h,danger:g,sm:m,lg:y,signal:v,success:f,ghost:j,rect:w,disabled:N,...A}=e,k=!h&&!g&&!f&&!v,_=(0,n.QP)((0,l.A)("rounded border border-transparent font-medium cursor-pointer transition relative text-gray-700 inline-flex items-center justify-center space-x-1.5","text-[13px] py-1 px-3",{[(t="bg-gray-100 text-gray-600",r="hover:bg-gray-200 active:bg-gray-300",(j&&(t="bg-transparent text-gray-500",r="hover:text-gray-700 active:text-gray-700"),N)?(0,l.A)("opacity-70 cursor-not-allowed",t):(0,l.A)(t,r))]:k,[(i="bg-blue-500 text-white",c="hover:bg-blue-600 active:bg-blue-700",(j&&(i="bg-transparent text-blue-500",c="hover:text-blue-600 active:text-blue-700"),N)?(0,l.A)("opacity-70 cursor-not-allowed",i):(0,l.A)(i,c))]:h,[(d="bg-red-500 text-white",o="hover:bg-red-600 active:bg-red-700",(j&&(d="bg-transparent text-red-500",o="hover:text-red-600 active:text-red-700"),N)?(0,l.A)("opacity-70 cursor-not-allowed",d):(0,l.A)(d,o))]:g,[(x="bg-green-500 text-white",p="hover:bg-green-600 active:bg-green-700",(j&&(x="bg-transparent text-green-500",p="hover:text-green-600 active:text-green-700"),N)?(0,l.A)("opacity-70 cursor-not-allowed",x):(0,l.A)(x,p))]:f,[(u="bg-white border-sky-300 text-sky-500",N?(0,l.A)("opacity-70 cursor-not-allowed",u):(0,l.A)(u,"hover:border-sky-400 active:bg-sky-500 hover:text-sky-600 active:text-sky-700 hover:bg-sky-50 active:bg-sky-100"))]:v,"text-xs py-1.5 px-3":m,"text-md py-2 px-4":y,"p-2":w},b));return(0,s.jsxs)("button",{className:_,...A,disabled:N,children:[e.children,(0,s.jsx)(a.A,{when:v,children:(0,s.jsxs)("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[(0,s.jsx)("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),(0,s.jsx)("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})})]})}},9531:(e,t,r)=>{"use strict";function s(e){let{when:t,fallback:r=null,children:s}=e;return"boolean"==typeof t?t?s:r:t?"function"==typeof s?s(t):s:r}r.d(t,{A:()=>s}),r(12115)}},e=>{var t=t=>e(e.s=t);e.O(0,[5112,4003,7525,8173,5926,3974,8441,1517,7358],()=>t(84501)),_N_E=e.O()}]);