import{d,c as p,r as m,o as _,a as h,b as v,e as y,f as i}from"./vendor.7c7960ad.js";const E=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};E();const g="modulepreload",a={},L="/",c=function(n,s){return!s||s.length===0?n():Promise.all(s.map(o=>{if(o=`${L}${o}`,o in a)return;a[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":g,e||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),e)return new Promise((u,f)=>{r.addEventListener("load",u),r.addEventListener("error",f)})})).then(()=>n())},w=d({setup(l){return console.log("App"),(n,s)=>{const o=m("router-view");return _(),p(o)}}});h(w).use(v({history:y(),routes:[{path:"/",component:i(()=>c(()=>import("./Home.f65e0f10.js"),["assets/Home.f65e0f10.js","assets/vendor.7c7960ad.js"]))},{path:"/view1",component:i(()=>c(()=>import("./View1.5b5c4ee9.js"),["assets/View1.5b5c4ee9.js","assets/vendor.7c7960ad.js"]))},{path:"/view2",component:i(()=>c(()=>import("./View2.8fafa3f9.js"),["assets/View2.8fafa3f9.js","assets/vendor.7c7960ad.js"]))},{path:"/view3",component:i(()=>c(()=>import("./View3.1ffcde89.js"),["assets/View3.1ffcde89.js","assets/vendor.7c7960ad.js"]))}]})).mount("#app");
