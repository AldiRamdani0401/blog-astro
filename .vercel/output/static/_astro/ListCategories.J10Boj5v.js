import{j as t}from"./jsx-runtime.CLpGMVip.js";import{r as e}from"./index.BL7xzsR_.js";function n(){alert("React Jalan..")}const a=()=>t.jsxs("div",{className:"flex flex-row gap-2 w-full py-1 select-none",children:[t.jsx("button",{type:"button",className:"bg-yellow-300 text-slate-600 px-2 text-sm rounded-md font-medium hover:bg-yellow-200 hover:font-bold shadow-md cursor-pointer",onClick:n,children:"JavaScript"}),t.jsx("button",{type:"button",className:"bg-indigo-800 text-slate-50 px-2 text-sm rounded-md font-medium hover:bg-indigo-600 hover:font-bold shadow-md cursor-pointer",children:"Astro"}),t.jsx("button",{type:"button",className:"bg-blue-500 text-slate-50 px-2 text-sm rounded-md font-medium hover:bg-blue-300 hover:font-bold shadow-md cursor-pointer",children:"Solid"}),t.jsx("button",{type:"button",className:"bg-blue-700 text-slate-50 px-2 text-sm rounded-md font-medium hover:bg-blue-500 hover:font-bold shadow-md cursor-pointer",children:"TypeScript"}),t.jsx("button",{type:"button",className:"bg-blue-800 text-slate-50 px-2 text-sm rounded-md font-medium hover:bg-blue-600 hover:font-bold shadow-md cursor-pointer",children:"Golang"})]});function d(){return t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"2em",height:"2em",children:[t.jsx("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}),t.jsx("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z",children:t.jsx("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})})]})}const u=()=>{const[o,r]=e.useState(!0);return e.useEffect(()=>{const s=setTimeout(()=>{r(!1)},5e3);return()=>clearTimeout(s)},[]),o?t.jsx(d,{}):t.jsx(a,{})};export{u as default};
