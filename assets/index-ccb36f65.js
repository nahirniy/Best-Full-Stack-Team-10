(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),l=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),n.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};o.addEventListener("click",l),r.addEventListener("click",l),window.matchMedia("(min-width: 1440px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const i=document.querySelectorAll('a[href^="#"]');i.forEach(n=>{n.addEventListener("click",d)});function d(n){n.preventDefault();const o=this.getAttribute("href"),r=document.querySelector(o);anime({targets:document.documentElement,scrollTop:r.offsetTop,duration:1750,easing:"easeInOutQuad"})}const c=document.getElementById("scrollToTop");c.addEventListener("click",()=>{anime({targets:document.documentElement,scrollTop:0,duration:1e3,easing:"easeInOutQuad"})});window.addEventListener("scroll",()=>{window.scrollY>100?c.style.display="block":c.style.display="none"});
