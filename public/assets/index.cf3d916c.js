import{j as l,B as m,a as u,F as f,r as p,l as g,c as h}from"./vendor.952e38ef.js";const y=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}};y();var b="/assets/logo.8d3ce88e.jpeg",v="/assets/logo-letters.e380070a.png";const e=l.exports.jsx,r=l.exports.jsxs,x=l.exports.Fragment,_=()=>r("header",{className:"p-4 h-[5.5rem] flex items-center",children:[e("img",{className:"w-14 rounded-full",src:b,alt:"Kintsugi logo"}),e("img",{className:"ml-4 w-32",src:v,alt:"Kintsugi logo letters"})]});var w="/assets/coming-soon-yellow.7dbea8d5.png";const N=()=>e("main",{className:"px-4 place-self-center",children:e("img",{className:"w-96",src:w,alt:"Coming soon"})}),c=({link:o,icon:n})=>e("a",{className:"mx-4 text-3xl text-white hover:text-[#ffdc3a] transition-colors duration-300",href:o,children:n()}),k=()=>r("footer",{className:"p-4 flex flex-col items-center text-white",children:[r("div",{className:"flex justify-center mb-4",children:[e(c,{link:"https://instagram.com/kintsuginft?utm_medium=copy_link",icon:()=>e(m,{})}),e(c,{link:"https://twitter.com/kintsuginft?s=11&t=-Hmo9i2gU_f1C2mPJtVE2A",icon:()=>e(u,{})}),e(c,{link:"https://discord.gg/SAkZpkdh",icon:()=>e(f,{})})]}),e("p",{className:"text-xs",children:"Copyright \xA9 2022 Kintsugi NFTs"})]}),L=()=>r(x,{children:[e(p,{id:"tsparticles",init:async i=>{await g(i)},options:{fpsLimit:120,particles:{number:{value:200,density:{enable:!0,value_area:800}},color:{value:"#fc07fa"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"bounce",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}}),r("div",{className:"relative h-screen grid grid-rows-[min-content_1fr_min-content] gap-4 z-30",children:[e(_,{}),e(N,{}),e(k,{})]})]}),j=()=>e(L,{});const F=document.getElementById("root"),z=h.createRoot(F);z.render(e(j,{}));
