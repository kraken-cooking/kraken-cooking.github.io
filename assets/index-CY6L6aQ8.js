(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",n=>{gsap.registerPlugin(ScrollTrigger),gsap.fromTo("#imageAvatar",{opacity:0},{opacity:1,duration:2,ease:"circ.in"}),ScrollTrigger.batch(".card-work",{start:"top 80%",onEnter:r=>{gsap.fromTo(r,{y:100,clipPath:"inset(0% 0% 0% 100%)"},{stagger:.5,duration:2,opacity:1,y:0,clipPath:"inset(0% 0% 0% 0%)"})},once:!0})});
