import{a as o,j as s,L as a,O as i}from"./client-ok51kevS.js";const r=function(){const e=o.useLoaderData();return s.jsxs("div",{className:"p-2 flex gap-2",children:[s.jsx("ul",{className:"list-disc pl-4",children:[...e,{id:"i-do-not-exist",title:"Non-existent Post"}].map(t=>s.jsx("li",{className:"whitespace-nowrap",children:s.jsx(a,{to:"/posts/$postId",params:{postId:t.id},className:"block py-1 text-blue-800 hover:text-blue-600",activeProps:{className:"text-black font-bold"},children:s.jsx("div",{children:t.title.substring(0,20)})})},t.id))}),s.jsx("hr",{}),s.jsx(i,{})]})};export{r as component};
