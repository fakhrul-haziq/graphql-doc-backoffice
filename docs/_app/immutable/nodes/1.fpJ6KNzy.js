import{s as x,a as b,f as _,l as j,X as y,d as c,c as w,g as f,h as v,m as H,j as z,i as S,G as d,n as $,H as q,B as A}from"../chunks/scheduler.X4qejJLZ.js";import{S as B,i as C}from"../chunks/index.C5OLbMYN.js";import{p as D}from"../chunks/stores.B-Ncso6t.js";function G(a){let n,i,e,r,s=a[0].status+"",o,u,p,h;return document.title=n="Error - "+a[0].status,{c(){i=b(),e=_("div"),r=_("h1"),o=j(s),u=b(),p=_("p"),h=j(a[1]),this.h()},l(t){y("svelte-1wpfhz9",document.head).forEach(c),i=w(t),e=f(t,"DIV",{class:!0});var m=v(e);r=f(m,"H1",{});var E=v(r);o=H(E,s),E.forEach(c),u=w(m),p=f(m,"P",{});var g=v(p);h=H(g,a[1]),g.forEach(c),m.forEach(c),this.h()},h(){z(e,"class","wrapper svelte-1ldjxpt")},m(t,l){S(t,i,l),S(t,e,l),d(e,r),d(r,o),d(e,u),d(e,p),d(p,h)},p(t,[l]){l&1&&n!==(n="Error - "+t[0].status)&&(document.title=n),l&1&&s!==(s=t[0].status+"")&&$(o,s),l&2&&$(h,t[1])},i:q,o:q,d(t){t&&(c(i),c(e))}}}function I(a,n,i){let e;A(a,D,s=>i(0,e=s));let r;return a.$$.update=()=>{var s;if(a.$$.dirty&1){const o=((s=e.error)==null?void 0:s.message)||"An unexpected error occurred.";i(1,r=o.endsWith(".")?o:`${o}.`)}},[e,r]}class X extends B{constructor(n){super(),C(this,n,I,G,x,{})}}export{X as component};
