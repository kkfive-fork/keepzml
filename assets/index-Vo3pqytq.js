import{c as b,r as y,j as t}from"./index-CChRFWmF.js";import{I as p}from"./index-BgxcxkDL.js";function E(){const e=b.c(16);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=[],e[0]=r):r=e[0];const[l,_]=y.useState(r);let a;e[1]!==l?(a=function(c){const h=c.get("title"),j=c.get("content");_([...l,{title:h,content:j}])},e[1]=l,e[2]=a):a=e[2];const x=a;let m;e[3]===Symbol.for("react.memo_cache_sentinel")?(m=t.jsx(p,{label:"Name",name:"title",placeholder:"Enter Title",required:!0,pattern:"[0-9]{6}"}),e[3]=m):m=e[3];let f;e[4]===Symbol.for("react.memo_cache_sentinel")?(f=t.jsx(p,{label:"Content",name:"content",placeholder:"please input your content",required:!0}),e[4]=f):f=e[4];let d;e[5]===Symbol.for("react.memo_cache_sentinel")?(d=t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{type:"submit",children:"Submit"})}),e[5]=d):d=e[5];let s;e[6]!==x?(s=t.jsxs("form",{action:x,children:[m,f,d]}),e[6]=x,e[7]=s):s=e[7];let n;if(e[8]!==l){let o;e[10]===Symbol.for("react.memo_cache_sentinel")?(o=(c,h)=>t.jsxs("div",{className:"_07_item",children:[t.jsx("h2",{children:c.title}),t.jsx("p",{children:c.content})]},`${c.title}-${h}`),e[10]=o):o=e[10],n=l.map(o),e[8]=l,e[9]=n}else n=e[9];let i;e[11]!==n?(i=t.jsx("ul",{className:"_07_list",children:n}),e[11]=n,e[12]=i):i=e[12];let u;return e[13]!==s||e[14]!==i?(u=t.jsxs("div",{className:"border p-4 rounded-xl",children:[s,i]}),e[13]=s,e[14]=i,e[15]=u):u=e[15],u}export{E as default};
