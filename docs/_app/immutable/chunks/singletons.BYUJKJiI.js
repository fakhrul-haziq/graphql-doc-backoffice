import{w as u}from"./index.CDy_TeOZ.js";import{a as h}from"./paths.B0crJpvL.js";const b="1710229972805",E="sveltekit:snapshot",A="sveltekit:scroll",R="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function y(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function I(){return{x:pageXOffset,y:pageYOffset}}function c(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function _(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function S(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=_(e)}}function T(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!s||m(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:r,target:s,download:l}}function x(e){let t=null,n=null,s=null,r=null,l=null,a=null,o=e;for(;o&&o!==document.documentElement;)s===null&&(s=c(o,"preload-code")),r===null&&(r=c(o,"preload-data")),t===null&&(t=c(o,"keepfocus")),n===null&&(n=c(o,"noscroll")),l===null&&(l=c(o,"reload")),a===null&&(a=c(o,"replacestate")),o=_(o);function i(g){switch(g){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:d[s??"off"],preload_data:d[r??"off"],keep_focus:i(t),noscroll:i(n),reload:i(l),replace_state:i(a)}}function p(e){const t=u(e);let n=!0;function s(){n=!0,t.update(a=>a)}function r(a){n=!1,t.set(a)}function l(a){let o;return t.subscribe(i=>{(o===void 0||n&&i!==o)&&a(o=i)})}return{notify:s,set:r,subscribe:l}}function v(){const{set:e,subscribe:t}=u(!1);let n;async function s(){clearTimeout(n);try{const r=await fetch(`${h}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==b;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:s}}function m(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function O(e){e.client}const U={url:p({}),page:p({}),navigating:u(null),updated:v()};export{R as I,f as P,A as S,E as a,T as b,x as c,U as d,O as e,S as f,y as g,m as i,I as s};
