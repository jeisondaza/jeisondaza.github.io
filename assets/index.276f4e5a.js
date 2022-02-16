var T=Object.defineProperty,L=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var x=(e,r,a)=>r in e?T(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,g=(e,r)=>{for(var a in r||(r={}))B.call(r,a)&&x(e,a,r[a]);if(_)for(var a of _(r))E.call(r,a)&&x(e,a,r[a]);return e},C=(e,r)=>L(e,A(r));import{r as d,j as v,R as F,a as M}from"./vendor.3dbe5566.js";const I=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}};I();const O=e=>{const[r,a]=d.exports.useState([]),[n,s]=d.exports.useState(null),[o,c]=d.exports.useState(!1);return d.exports.useEffect(()=>{const u=new AbortController,m=u.signal;return(async()=>{c(!0);try{const l=await fetch(e);if(!l.ok){let p=new Error("Error en la petici\xF3n fetch");throw p.status=l.status||"00",p.statusText=l.statusText||"Ocurri\xF3 un error",p}const k=await l.json();m.aborted||(a(k),s(null))}catch(l){m.aborted||(a(null),s(l))}finally{m.aborted||c(!1)}})(),()=>u.abort()},[e]),{data:r,error:n,loading:o}};const t=v.exports.jsx,i=v.exports.jsxs,P=v.exports.Fragment,z=({post:e})=>i("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"post_card",children:[t("img",{className:"post_img",src:e.social_image,alt:"post image"}),t("h3",{children:e.title})]}),H=()=>{const{data:e}=O("https://dev.to/api/articles?username=jeisondaza21");return i("section",{className:"fullHeight container",children:[t("h2",{className:"title",children:"Visit my blog"}),t("article",{className:"post",children:e.map((r,a)=>t(z,{post:r},a))})]})};const N={title:"Jeison Daza",subtitle:"Front-end Developer",content:["I\u2019m a 24 year old self-taught with 2 years of experience designing and building landing pages and web apps.","I strive for the results of my work to be products that are enjoyable to use and that are written with code that\u2019s easy to maintain and easy to understand."]},y={title:"My Skills",subtitle:"Through my studies I have gained an understanding of computer science and web development concepts.",content:[{title:"Front-end",tech:["HTML & CSS","JavaScript ES6","Web Components","React","Vue"]},{title:"Back-end",tech:["Node.js","Express","Mongo DB","PostgreSQL"]},{title:"Tools",tech:["Git","Postman","Figma"]}]},j={title:"My journey in web development",subtitle:"I like to stay busy and always have a project in the works.",content:[{title:"Pokemon App",description:"A pokedex that consumes the pokemon API. Made with Vue.js using vue-router and i18n",url:"https://poke-challenge-seven.vercel.app/",repo:"https://github.com/jeisondaza/poke-challenge"},{title:"Business Landing Page",description:"Responsive design of a business home page whit home, services, pricing, and more sections.",url:"https://business-homepage.vercel.app/",repo:"https://github.com/jeisondaza/business-homepage"},{title:"Only CSS keyboard",description:"A keyboard drawn with just CSS, HTML and JS.",url:"https://keyboard-puce.vercel.app/",repo:"https://github.com/jeisondaza/keyboard"}]},f={title:"Let's Build Something",word:" Together",subtitle:"Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",icons:[{name:"linkedin",url:"https://www.linkedin.com/in/jeison-daza-dev/"},{name:"gitHub",url:"https://github.com/jeisondaza"},{name:"twitter",url:"https://twitter.com/JeisonDaza21"}]};const S=({content:e})=>t("p",{className:"subtitle_paragraph",children:e});const D=({content:e,img:r})=>i("a",{className:"icon_box",href:e.url,target:"_blank",children:[t("img",{className:"icon",src:r,alt:e.name}),t("div",{className:"icon_fondo"})]}),R=()=>{const e=(a,n)=>{const s={Accept:"application/json"},o=new AbortController;return n.signal=o.signal,n.method=n.method||"GET",n.headers=n.headers?g(g({},s),n.headers):s,n.body=JSON.stringify(n.body)||!1,n.body||delete n.body,setTimeout(()=>o.abort(),3e3),fetch(a,n).then(c=>c.ok?c.json():Promise.reject({err:!0,status:c.status||"00",statusText:c.statusText||"An error occurred"})).catch(c=>c)};return{post:(a,n={})=>(n.method="POST",e(a,n))}},q=(e,r)=>{const[a,n]=d.exports.useState(e),[s,o]=d.exports.useState({}),[c,u]=d.exports.useState(!1),[m,b]=d.exports.useState(null),l=h=>{const{name:w,value:$}=h.target;n(C(g({},a),{[w]:$}))};return{form:a,errors:s,loading:c,response:m,handelBlur:h=>{l(h),o(r(a))},handleChange:l,handleSubmit:h=>{if(h.preventDefault(),o(r(a)),Object.keys(s).length===0)u(!0),R().post("https://formsubmit.co/ajax/jeisondazadev@gmail.com",{headers:{"Content-Type":"application/json"},body:a}).then(w=>{u(!1),b(!0),n(e),setTimeout(()=>b(!1),2e3)});else return}}};function G({msg:e,color:r}){return t("p",{className:`style ${r}`,children:e})}const J={email:"",description:""},V=e=>{let r={},a=/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;return e.email.trim()?a.test(e.email.trim())||(r.email="Enter a valid email"):r.email='The "email" field is required',e.description.trim()||(r.description='The "description" field is required'),r};function K(){const{form:e,errors:r,loading:a,response:n,handelBlur:s,handleChange:o,handleSubmit:c}=q(J,V);return i(P,{children:[i("form",{className:"form",onSubmit:c,children:[t("input",{className:"form_input email",type:"email",name:"email",placeholder:"Email",onChange:o,onBlur:s,value:e.email,required:!0}),t("textarea",{className:"form_input description",name:"description",cols:"30",rows:"20",placeholder:"What you want",onChange:o,onBlur:s,value:e.description,required:!0}),t("input",{className:"form_submit",type:"submit",value:"Send"})]}),n&&t(G,{msg:"Your message has been sent \u{1F389}",color:"success"})]})}var W="/assets/linkedin.e2f5ddd2.svg",Q="/assets/github.a2757fce.svg",U="/assets/twitter.6b45b2cb.svg";const Y=()=>{let e=[W,Q,U];return i("section",{className:"contact container fullHeight",children:[i("h2",{className:"title",children:[f.title," ",t("span",{className:"gradient",children:f.word})]}),t(S,{content:f.subtitle}),i("article",{className:"contact_size",children:[t("div",{className:"icons_container",children:f.icons.map((r,a)=>t(D,{content:r,img:e[a]},a))}),t(K,{})]})]})};var X="/assets/meBG.02c16be5.png";const Z=({title:e,subtitle:r})=>i("figure",{className:"avatar_container",children:[t("img",{className:"avatar_img",src:X,alt:"me"}),i("figcaption",{children:[t("h1",{className:"title",children:e}),t("h2",{className:"avatar_subtitle gradient",children:r})]})]});const ee=({content:e})=>t("article",{className:"home_bio",children:e.map((r,a)=>t("p",{className:"home_description",children:r},a))}),te=()=>i("section",{className:"home_container",children:[t(Z,{title:N.title,subtitle:N.subtitle}),t(ee,{content:N.content})]});const re=()=>i("nav",{className:"nav_container",children:[t("a",{className:"active",href:"",children:"HOME"}),t("a",{href:"",children:"SKILLS"}),t("a",{href:"",children:"WORK"}),t("a",{href:"",children:"CONTACT"})]});const ae=({content:e,reverse:r,img:a})=>i("div",{className:`card ${!r&&"reverse"}`,children:[t("img",{src:a,loading:"lazy",decoding:"sync",alt:"project img",className:"card_img"}),i("div",{className:"card_description",children:[t("h3",{children:e.title}),t("p",{children:e.description}),i("div",{className:"card_btns",children:[t("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"btn_cta",children:"Go live"}),t("a",{href:e.repo,target:"_blank",rel:"noreferrer",className:"btn_text",children:"GitHub"})]})]})]});var se="/assets/poke.93551c2b.jpg",ne="/assets/bssn.892e814e.jpg",oe="/assets/keyboard.57bca779.jpg";const ie=()=>{let e=[se,ne,oe];return i("section",{className:"container",children:[t("h2",{className:"title gradient",children:j.title}),t(S,{content:j.subtitle}),t("article",{className:"card_container",children:j.content.map((r,a)=>t(ae,{content:r,img:e[a],reverse:a%2},a))})]})};const ce=({content:e})=>i("li",{className:"list",children:[t("div",{className:"list_bullet"})," ",e]}),le=({content:e})=>i("div",{className:"tech_section",children:[t("p",{className:"tech_title",children:e.title}),t("ul",{className:"tech_group",children:e.tech.map((r,a)=>t(ce,{content:r},a))})]}),de=()=>i("section",{className:"skills container",children:[t("h2",{className:"title",children:y.title}),t(S,{content:y.subtitle}),t("article",{className:"tech_container",children:y.content.map((e,r)=>t(le,{content:e},r))})]});function ue(){return i(P,{children:[t(re,{}),t(te,{}),t(de,{}),t(ie,{}),t(Y,{}),t(H,{})]})}F.render(t(M.StrictMode,{children:t(ue,{})}),document.getElementById("root"));
