import{P as S,_ as s,R as e,N as E,a as M,B as j,S as T,b as y,c as R,d as U}from"./vendor.4541ccc3.js";const V=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function u(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=u(t);fetch(t.href,r)}};V();function h({setToken:c}){return s.exports.useState(null),s.exports.useState(null),e.createElement("div",{className:"hero min-h-screen bg-base-200"},e.createElement("div",{className:"flex-col justify-center hero-content lg:flex-row"},e.createElement("div",{className:"text-center lg:text-left"},e.createElement("h1",{className:"mb-5 text-5xl font-bold"},"\u6B22\u8FCE"),e.createElement("p",{className:"mb-5"},"\u55B5\u65CF\u7A7A\u95F4\u7AD9\uFF0C\u6B63\u5728\u5EFA\u8BBE\u4E2D")),e.createElement("div",{className:"card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"},e.createElement("div",{className:"card-body"},e.createElement("div",{className:"form-control"},e.createElement("label",{className:"label"},e.createElement("span",{className:"label-text"})),e.createElement("input",{type:"text",placeholder:"\u7528\u6237\u540D",className:"input input-bordered"})),e.createElement("div",{className:"form-control"},e.createElement("label",{className:"label"},e.createElement("span",{className:"label-text"})),e.createElement("input",{type:"text",placeholder:"\u5BC6\u7801",className:"input input-bordered"}),e.createElement("label",{className:"label"},e.createElement("a",{href:"#",className:"label-text-alt"},"\u5BC6\u7801\u662F\u4F60\u7684\u751F\u65E5"))),e.createElement("div",{className:"form-control mt-6"},e.createElement("input",{type:"button",defaultValue:"\u767B\u9646",className:"btn btn-primary"}))))))}h.propTypes={setToken:S.func.isRequired};var z=[{city:"Gao Yao Fields",averagePrice:30,propertyCount:1,imageUrl:"img/GaoYaoTerracedFields2.jpeg",imageAlt:"Gao Yao TerracedFields"},{city:"Hg Mine Remains",averagePrice:60,propertyCount:2,imageUrl:"img/HgMineRemains.jpeg",imageAlt:"Hg Mine Remains"},{city:"Long Quan Mountain",averagePrice:10,propertyCount:5,imageUrl:"img/LongQuanMountain.jpeg",imageAlt:"Long Quan Mountain"},{city:"Pai Ting Falls",averagePrice:50,propertyCount:2,imageUrl:"img/PaiTingFalls.jpeg",imageAlt:"Pai Ting Fall"},{city:"Shi Qiao Village",averagePrice:20,propertyCount:2,imageUrl:"img/ShiQiaoVillage.jpeg",imageAlt:"ShiQiaoVillage"},{city:"Wan Da Town",averagePrice:70,propertyCount:36,imageUrl:"img/WanDaTown.jpeg",imageAlt:"Wan Da Town"},{city:"Longevity Palace",averagePrice:"??",propertyCount:1,imageUrl:"img/LongevityPalace.png",imageAlt:"Longevity Palace"},{city:"Drum Tower Park",averagePrice:"0",propertyCount:1,imageUrl:"img/DrumTowerPark.png",imageAlt:"Drum Tower Park"}];function O({destination:c}){return e.createElement("div",{key:c.city,className:"flex items-center bg-white rounded-lg shadow-lg overflow-hidden"},e.createElement("img",{className:"h-28 w-28 flex-shrink-0 object-cover ",src:c.imageUrl,alt:c.imageAlt}),e.createElement("div",{className:"px-6 py-4"},e.createElement("h3",{className:"text-sm font-semibold text-gray-800"},c.city," "),e.createElement("p",{className:"text-gray-600 text-xs mt-1"},"\xA5",c.averagePrice," / day averge"),e.createElement("div",{className:"mt-4"},e.createElement("a",{className:"text-indigo-500 hover:text-indigo-400 font-semibold text-xs",href:"#"},"Explore ",c.propertyCount," properties"))))}function Q(){return e.createElement("div",null,e.createElement("div",{className:`px-8 py-8 max-w-xl mx-auto\r
          sm:max-w-xl\r
          lg:max-w-6xl lg:px-12\r
          xl:max-w-full\r
          `},e.createElement("h2",{className:"text-xl text-neutral font-semibold"}," Popular Destinations "),e.createElement("p",{className:"description text-neutral-content"}," A selection fo great vacation palces with lots to see and explore. "),e.createElement("div",{className:`grid gap-6 mt-6\r
            lg:grid-cols-2 \r
            xl:grid-cols-3\r
            2xl:grid-cols-4\r
            `},z.map(c=>e.createElement(O,{destination:c,key:c.city})))))}class G extends e.Component{constructor(n){super(n);this.state={error:null,isLoaded:!1,users:[]}}componentDidMount(){fetch("http://jsonplaceholder.typicode.com/users").then(n=>n.json()).then(n=>{this.setState({isLoaded:!0,users:n})},n=>{this.setState({isLoaded:!0,error:n})})}render(){const{error:n,isLoaded:u,users:d}=this.state;return n?e.createElement("div",null,"Error: ",n.message):u?e.createElement("ul",null,d.map(t=>e.createElement("li",{key:t.id},t.name," | ",t.email))):e.createElement("div",null,"Loading...")}}function W(){return e.createElement("div",null,e.createElement("div",{className:`\r
        lg:grid-cols-2\r
        2xl:grid-cols-5`},e.createElement("div",{className:`px-8 py-12 max-w-screen-xl mx-auto\r
                sm:max-w-xl\r
                lg:px12 lg:py-24 lg:max-w-full\r
                xl:mr-0\r
                2xl:col-span-2`},e.createElement("div",{className:"xl:max-w-xl"},e.createElement("img",{className:`h-56 rounded-lg shadow-xl\r
                sm:mt-8 sm:h-96 sm:w-full sm:object-cover\r
                sm:object-center\r
                lg:hidden`,src:"img/KaLaMiaoDancer.jpg",alt:"Join cation"}),e.createElement("h1",{className:`mt-6 text-xl capitalize font-bold text-gray-900\r
                sm:mt-8 sm:text-3xl\r
                lg:text-2xl\r
                xl:text-3xl`},"\u6BCF\u5230\u4E00\u5730\uFF0C\u4F60\u90FD\u6B22\u559C",e.createElement("br",null),e.createElement("span",{className:"text-primary"}," \u4EAB\u53D7\u751F\u6D3B ")),e.createElement("p",{className:"description text-neutral"},"\u4E16\u754C\u4E0A\u7684\u67D0\u4E2A\u89D2\u843D\uFF0C\u6709\u7279\u8272\u7684\u81EA\u7136\u666F\u89C2\u6709\u5929\u4E0B\u5947\u6CC9\u6253\u9F13\u4E95\uFF1B \u6709\u5343\u59FF\u767E\u6001\u7684\u5F69\u8272\u91D1\u74DC\u6D1E\uFF1B \u6709\u57CE\u90CA\u4E07\u4EA9\u76F8\u6620\u6210\u8DA3\u7684\u7EA2\u3001\u767D\u3001\u7D2B\u4E09\u8272\u675C\u9E43\uFF1B \u6709\u7D20\u6709\u9ED4\u4E1C\u7B2C\u4E00\u7011\u7684\u6392\u5EF7\u7011\u5E03\uFF1B\u7EFF\u8272\u5B9D\u5E93\u732B\u9F3B\u5CAD\u68EE\u6797\u516C\u56ED\uFF1B\u8FD8\u6709\u6E29\u67D4\u591A\u60C5\u7684\u6CB3\u6D41\u6CB3\u5C94\u6CB3\u3002"),e.createElement("div",{className:"mt-4 space-x-3 sm:mt-6"},e.createElement("a",{href:"/destinations"},e.createElement("button",{className:`btn btn-primary shadow-lg\r
                    hover:-translate-y-0.5 transform transition`},"\u4E86\u89E3\u66F4\u591A")),e.createElement("a",{href:"/random"},e.createElement("button",{className:"btn btn-secondary"},"\u968F\u673A\u6570\u5B57")))))),e.createElement("div",{className:`hidden relative\r
                lg:block\r
                2xl:col-span-3`},e.createElement("img",{className:`absolute inset-0 w-full h-full object-cover\r
                object-center`,src:"img/KaLaMiaoDancer.jpg",alt:"Workcation"})))}function _(){return e.createElement("div",{className:"navbar shadow-lg bg-neutral text-neutral-content fixed-top relative"},e.createElement(E,{to:"/"},e.createElement("div",{className:"hidden sm:block flex-none px-2 "},e.createElement("div",{className:"btn-ghost space-x-1"},e.createElement("img",{className:"max-w-9 max-h-9 float-left",src:"img/MiozusIcon.png",alt:"Miozus"}),e.createElement("p",{className:"text-2xl font-bold float-right "},"Miozus"))),e.createElement("div",{className:"sm:hidden flex-auto px-0 "},e.createElement("button",{className:"btn btn-square btn-ghost"},e.createElement("img",{className:"max-w-9 max-h-9 ",src:"img/MiozusIcon.png",alt:"Miozus"})))),e.createElement(E,{to:"/destinations"},e.createElement("div",{className:"flex-1 absolute inset-y-2 right-16"},e.createElement("button",{className:"btn btn-square btn-ghost"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-6 h-6 stroke-current"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))))),e.createElement("div",{className:"flex-1 ml-4"},e.createElement("div",{className:"form-control "},e.createElement("input",{type:"text",placeholder:"\u641C\u7D22",className:"input input-ghost"}))),e.createElement(E,{to:"/login"},e.createElement("div",{className:"flex-none absolute inset-y-2 right-2"},e.createElement("div",{className:"btn btn-square btn-ghost"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"}),e.createElement("circle",{cx:"12",cy:"10",r:"3"}),e.createElement("circle",{cx:"12",cy:"12",r:"10"}))))))}M("SQQVH2TJZW","37fd71de7265b30e277c8dcbf12414de");const b=[{type:"ball",code:1},{type:"ball",code:2},{type:"ball",code:3},{type:"ball",code:4},{type:"ball",code:5},{type:"ball",code:6},{type:"ball",code:7},{type:"ball",code:8},{type:"ball",code:9},{type:"ball",code:10},{type:"ball",code:11},{type:"ball",code:12},{type:"ball",code:13},{type:"ball",code:14},{type:"ball",code:15},{type:"ball",code:16},{type:"ball",code:17},{type:"ball",code:18},{type:"ball",code:19},{type:"ball",code:20},{type:"ball",code:21},{type:"ball",code:22},{type:"ball",code:23},{type:"ball",code:24},{type:"ball",code:25},{type:"ball",code:26},{type:"ball",code:27},{type:"ball",code:28},{type:"ball",code:29},{type:"ball",code:30},{type:"ball",code:31},{type:"ball",code:32},{type:"ball",code:33},{type:"ball",code:34},{type:"ball",code:35},{type:"ball",code:36},{type:"ball",code:37},{type:"ball",code:38},{type:"ball",code:39},{type:"ball",code:40},{type:"ball",code:41},{type:"ball",code:42},{type:"ball",code:43},{type:"ball",code:44},{type:"ball",code:45},{type:"ball",code:46},{type:"ball",code:47},{type:"ball",code:48},{type:"ball",code:49},{type:"ball",code:50},{type:"ball",code:51},{type:"ball",code:52},{type:"ball",code:53},{type:"ball",code:54},{type:"ball",code:55},{type:"ball",code:56},{type:"ball",code:57},{type:"ball",code:58},{type:"ball",code:59},{type:"ball",code:60},{type:"ball",code:61},{type:"ball",code:62},{type:"ball",code:63},{type:"ball",code:64},{type:"ball",code:65},{type:"ball",code:66},{type:"ball",code:67},{type:"ball",code:68},{type:"ball",code:69},{type:"ball",code:70},{type:"ball",code:71},{type:"ball",code:72},{type:"ball",code:73},{type:"ball",code:74},{type:"ball",code:75},{type:"ball",code:76},{type:"ball",code:77},{type:"ball",code:78},{type:"ball",code:79},{type:"ball",code:80}];function q(){const[c,n]=s.exports.useState(new Array(b.length).fill(!1)),[u,d]=s.exports.useState(new Array(b.length).fill({opacity:0,color:"black"})),[t,r]=s.exports.useState([]);var[m,f]=s.exports.useState([]);const[x,v]=s.exports.useState(4),[N,w]=s.exports.useState("count"),C=(l,a)=>{const o=c.map((i,p)=>p===l?!i:i),g=u.map((i,p)=>p===l?a?{opacity:100,color:"white"}:{opacity:0,color:"black"}:i);n(o),d(g);const L=o.reduce((i,p,P)=>p===!0?i.concat(b[P].code):i,[]);r(L)},F=()=>{var l=new Set;if(x<=t.length)for(;l.size<x;){var a=Math.floor(Math.random()*t.length);const o=t[a];l.add(o)}m=Array.from(l).sort((o,g)=>o-g),f(m)};function k({index:l}){return e.createElement("td",null,e.createElement("div",{className:"relative"},e.createElement("label",{className:"cursor-pointer label space-x-3"},e.createElement("div",{className:"absolute left-4 bottom-5 top-2"},e.createElement("div",{className:`bg-secondary w-6 rounded-lg opacity-${u[l].opacity}`},e.createElement("span",{className:"opacity-0"},"hidden")),e.createElement("span",{className:`relative left-1 bottom-6 label-text text-${u[l].color}`},l+1)),e.createElement("div",null,e.createElement("input",{type:"checkbox",key:`checkbox-custom-${l+1}`,checked:c[l],className:"checkbox checkbox-secondary",onChange:()=>C(l,!c[l])})),e.createElement("span",{className:"checkbox-mark"}))))}function D({offset:l}){return e.createElement("tr",null,b.map(({code:a},o)=>{if(l<=o&&o<l+5)return e.createElement(k,{index:a-1,key:a})}))}function B(){let l=[];for(let a=0;a<b.length;a=a+5)l.push(e.createElement(D,{offset:a,key:a}));return l}function A(){const l=[1,2,3,4,5,6,7,8,9,10];return e.createElement("select",{className:"select select-bordered select-secondary select-ghost max-w-xs",onChange:a=>v(a.target.value)&w(a.target.value),defaultValue:N},e.createElement("option",{id:"option-custom-0",disabled:"disabled"},"count"),l.map((a,o)=>e.createElement("option",{key:o,id:"option-custom-{e}",value:a},a)))}return e.createElement("div",{className:"flex flex-col place-items-center mt-5"},e.createElement("table",{className:"align-center "},e.createElement("thead",null),e.createElement("tbody",null,e.createElement(B,null))),e.createElement("div",{className:"space-y-3 relative"},e.createElement("div",{className:"divider place-items-center"},t.length),e.createElement("div",{className:"form-control"},e.createElement("div",{className:"flex space-x-2 "},e.createElement(A,null),e.createElement("button",{className:"btn btn-secondary",onClick:F},"go"))),e.createElement("div",{className:"grid card h-20  rounded-lg text-neutral mb-5"},m.toString())))}function H(){return e.createElement(j,null,e.createElement(_,null),e.createElement("div",{className:"bg-gray-200 "},e.createElement(T,null,e.createElement(y,{exact:!0,replace:!0,path:"/",component:W}),e.createElement(y,{path:"/login",component:h}),e.createElement(y,{path:"/destinations",component:Q}),e.createElement(y,{path:"/random",component:q}),e.createElement(R,{to:"/"}))))}U.render(e.createElement(e.StrictMode,null,e.createElement(H,null)),document.getElementById("root"));
