var z0=Object.defineProperty;var W0=(r,e,t)=>e in r?z0(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var An=(r,e,t)=>(W0(r,typeof e!="symbol"?e+"":e,t),t),Y0=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var sa=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)};var as=(r,e,t)=>(Y0(r,e,"access private method"),t);import{b as _s}from"./paths.sJJXH8Ga.js";import{S as Ln,i as Bn,a as nn,t as an,g as _t,c as Rt,b as qt,d as ur,m as jt,e as Ht}from"./index.C5OLbMYN.js";import{s as Fn,e as ee,i as In,d as J,r as Ke,u as sp,f as Nn,g as On,h as qn,a4 as Ss,x as nt,y as et,z as tt,R as ui,q as Ic,l as Ea,m as ba,n as Aa,H as Jn,j as ge,G as At,a as _a,c as Ra,U as Q0,V as J0,a7 as Tc,o as X0}from"./scheduler.X4qejJLZ.js";function ut(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function op(r,e){const t={},s={},o={$$scope:1};let u=r.length;for(;u--;){const l=r[u],p=e[u];if(p){for(const d in l)d in p||(s[d]=1);for(const d in p)o[d]||(t[d]=p[d],o[d]=1);r[u]=p}else for(const d in l)o[d]=1}for(const l in s)l in t||(t[l]=void 0);return t}function IE(r){return typeof r=="object"&&r!==null?r:{}}function da(...r){return"/"+r.flatMap(e=>e.split("/")).filter(e=>!!e).join("/")}function ga(r){return r.startsWith("/")||r.startsWith("#")}function ap(r,e){return e.slug(r).replace(/--+/g,"-")}function oa(r){let e,t;const s=r[5].default,o=Ke(s,r,r[4],null);let u=[{id:r[1]}],l={};for(let p=0;p<u.length;p+=1)l=sp(l,u[p]);return{c(){e=Nn(`h${r[0].depth}`),o&&o.c(),this.h()},l(p){e=On(p,(`h${r[0].depth}`||"null").toUpperCase(),{id:!0});var d=qn(e);o&&o.l(d),d.forEach(J),this.h()},h(){Ss(`h${r[0].depth}`)(e,l)},m(p,d){In(p,e,d),o&&o.m(e,null),t=!0},p(p,d){o&&o.p&&(!t||d&16)&&nt(o,s,p,p[4],t?tt(s,p[4],d,null):et(p[4]),null),Ss(`h${p[0].depth}`)(e,l=op(u,[(!t||d&2)&&{id:p[1]}]))},i(p){t||(nn(o,p),t=!0)},o(p){an(o,p),t=!1},d(p){p&&J(e),o&&o.d(p)}}}function Z0(r){let e=`h${r[0].depth}`,t,s,o=`h${r[0].depth}`&&oa(r);return{c(){o&&o.c(),t=ee()},l(u){o&&o.l(u),t=ee()},m(u,l){o&&o.m(u,l),In(u,t,l),s=!0},p(u,[l]){`h${u[0].depth}`?e?Fn(e,`h${u[0].depth}`)?(o.d(1),o=oa(u),e=`h${u[0].depth}`,o.c(),o.m(t.parentNode,t)):o.p(u,l):(o=oa(u),e=`h${u[0].depth}`,o.c(),o.m(t.parentNode,t)):e&&(o.d(1),o=null,e=`h${u[0].depth}`)},i(u){s||(nn(o,u),s=!0)},o(u){an(o,u),s=!1},d(u){u&&J(t),o&&o.d(u)}}}function K0(r,e,t){let{$$slots:s={},$$scope:o}=e,{token:u}=e,{options:l}=e;const p=void 0;let d;return r.$$set=S=>{"token"in S&&t(0,u=S.token),"options"in S&&t(2,l=S.options),"$$scope"in S&&t(4,o=S.$$scope)},r.$$.update=()=>{r.$$.dirty&5&&t(1,d=ap(u.text,l.slugger))},[u,d,l,p,o,s]}class ny extends Ln{constructor(e){super(),Bn(this,e,K0,Z0,Fn,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function ey(r){let e,t;const s=r[4].default,o=Ke(s,r,r[3],null);return{c(){e=Nn("blockquote"),o&&o.c()},l(u){e=On(u,"BLOCKQUOTE",{});var l=qn(e);o&&o.l(l),l.forEach(J)},m(u,l){In(u,e,l),o&&o.m(e,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&nt(o,s,u,u[3],t?tt(s,u[3],l,null):et(u[3]),null)},i(u){t||(nn(o,u),t=!0)},o(u){an(o,u),t=!1},d(u){u&&J(e),o&&o.d(u)}}}function ty(r,e,t){let{$$slots:s={},$$scope:o}=e;const u=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class ry extends Ln{constructor(e){super(),Bn(this,e,ty,ey,Fn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function vc(r,e,t){const s=r.slice();return s[3]=e[t],s}function Ec(r){let e,t,s=ut(r[0]),o=[];for(let l=0;l<s.length;l+=1)o[l]=bc(vc(r,s,l));const u=l=>an(o[l],1,1,()=>{o[l]=null});return{c(){for(let l=0;l<o.length;l+=1)o[l].c();e=ee()},l(l){for(let p=0;p<o.length;p+=1)o[p].l(l);e=ee()},m(l,p){for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(l,p);In(l,e,p),t=!0},p(l,p){if(p&7){s=ut(l[0]);let d;for(d=0;d<s.length;d+=1){const S=vc(l,s,d);o[d]?(o[d].p(S,p),nn(o[d],1)):(o[d]=bc(S),o[d].c(),nn(o[d],1),o[d].m(e.parentNode,e))}for(_t(),d=s.length;d<o.length;d+=1)u(d);Rt()}},i(l){if(!t){for(let p=0;p<s.length;p+=1)nn(o[p]);t=!0}},o(l){o=o.filter(Boolean);for(let p=0;p<o.length;p+=1)an(o[p]);t=!1},d(l){l&&J(e),ui(o,l)}}}function bc(r){let e,t;return e=new up({props:{token:r[3],renderers:r[1],options:r[2]}}),{c(){qt(e.$$.fragment)},l(s){ur(e.$$.fragment,s)},m(s,o){jt(e,s,o),t=!0},p(s,o){const u={};o&1&&(u.token=s[3]),o&2&&(u.renderers=s[1]),o&4&&(u.options=s[2]),e.$set(u)},i(s){t||(nn(e.$$.fragment,s),t=!0)},o(s){an(e.$$.fragment,s),t=!1},d(s){Ht(e,s)}}}function iy(r){let e,t,s=r[0]&&Ec(r);return{c(){s&&s.c(),e=ee()},l(o){s&&s.l(o),e=ee()},m(o,u){s&&s.m(o,u),In(o,e,u),t=!0},p(o,[u]){o[0]?s?(s.p(o,u),u&1&&nn(s,1)):(s=Ec(o),s.c(),nn(s,1),s.m(e.parentNode,e)):s&&(_t(),an(s,1,1,()=>{s=null}),Rt())},i(o){t||(nn(s),t=!0)},o(o){an(s),t=!1},d(o){o&&J(e),s&&s.d(o)}}}function sy(r,e,t){let{tokens:s}=e,{renderers:o}=e,{options:u}=e;return r.$$set=l=>{"tokens"in l&&t(0,s=l.tokens),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,u=l.options)},[s,o,u]}class Rs extends Ln{constructor(e){super(),Bn(this,e,sy,iy,Fn,{tokens:0,renderers:1,options:2})}}function Ac(r){let e,t,s;var o=r[1][r[0].type];function u(l,p){return{props:{token:l[0],options:l[2],renderers:l[1],$$slots:{default:[uy]},$$scope:{ctx:l}}}}return o&&(e=Ic(o,u(r))),{c(){e&&qt(e.$$.fragment),t=ee()},l(l){e&&ur(e.$$.fragment,l),t=ee()},m(l,p){e&&jt(e,l,p),In(l,t,p),s=!0},p(l,p){if(p&3&&o!==(o=l[1][l[0].type])){if(e){_t();const d=e;an(d.$$.fragment,1,0,()=>{Ht(d,1)}),Rt()}o?(e=Ic(o,u(l)),qt(e.$$.fragment),nn(e.$$.fragment,1),jt(e,t.parentNode,t)):e=null}else if(o){const d={};p&1&&(d.token=l[0]),p&4&&(d.options=l[2]),p&2&&(d.renderers=l[1]),p&15&&(d.$$scope={dirty:p,ctx:l}),e.$set(d)}},i(l){s||(e&&nn(e.$$.fragment,l),s=!0)},o(l){e&&an(e.$$.fragment,l),s=!1},d(l){l&&J(t),e&&Ht(e,l)}}}function oy(r){let e=r[0].raw+"",t;return{c(){t=Ea(e)},l(s){t=ba(s,e)},m(s,o){In(s,t,o)},p(s,o){o&1&&e!==(e=s[0].raw+"")&&Aa(t,e)},i:Jn,o:Jn,d(s){s&&J(t)}}}function ay(r){let e,t;return e=new Rs({props:{tokens:r[0].tokens,renderers:r[1],options:r[2]}}),{c(){qt(e.$$.fragment)},l(s){ur(e.$$.fragment,s)},m(s,o){jt(e,s,o),t=!0},p(s,o){const u={};o&1&&(u.tokens=s[0].tokens),o&2&&(u.renderers=s[1]),o&4&&(u.options=s[2]),e.$set(u)},i(s){t||(nn(e.$$.fragment,s),t=!0)},o(s){an(e.$$.fragment,s),t=!1},d(s){Ht(e,s)}}}function uy(r){let e,t,s,o;const u=[ay,oy],l=[];function p(d,S){return"tokens"in d[0]&&d[0].tokens?0:1}return e=p(r),t=l[e]=u[e](r),{c(){t.c(),s=ee()},l(d){t.l(d),s=ee()},m(d,S){l[e].m(d,S),In(d,s,S),o=!0},p(d,S){let D=e;e=p(d),e===D?l[e].p(d,S):(_t(),an(l[D],1,1,()=>{l[D]=null}),Rt(),t=l[e],t?t.p(d,S):(t=l[e]=u[e](d),t.c()),nn(t,1),t.m(s.parentNode,s))},i(d){o||(nn(t),o=!0)},o(d){an(t),o=!1},d(d){d&&J(s),l[e].d(d)}}}function ly(r){let e,t,s=r[1][r[0].type]&&Ac(r);return{c(){s&&s.c(),e=ee()},l(o){s&&s.l(o),e=ee()},m(o,u){s&&s.m(o,u),In(o,e,u),t=!0},p(o,[u]){o[1][o[0].type]?s?(s.p(o,u),u&3&&nn(s,1)):(s=Ac(o),s.c(),nn(s,1),s.m(e.parentNode,e)):s&&(_t(),an(s,1,1,()=>{s=null}),Rt())},i(o){t||(nn(s),t=!0)},o(o){an(s),t=!1},d(o){o&&J(e),s&&s.d(o)}}}function cy(r,e,t){let{token:s}=e,{renderers:o}=e,{options:u}=e;return r.$$set=l=>{"token"in l&&t(0,s=l.token),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,u=l.options)},[s,o,u]}class up extends Ln{constructor(e){super(),Bn(this,e,cy,ly,Fn,{token:0,renderers:1,options:2})}}function _c(r,e,t){const s=r.slice();return s[4]=e[t],s}function Rc(r){let e,t;return e=new up({props:{token:{...r[4]},options:r[1],renderers:r[2]}}),{c(){qt(e.$$.fragment)},l(s){ur(e.$$.fragment,s)},m(s,o){jt(e,s,o),t=!0},p(s,o){const u={};o&1&&(u.token={...s[4]}),o&2&&(u.options=s[1]),o&4&&(u.renderers=s[2]),e.$set(u)},i(s){t||(nn(e.$$.fragment,s),t=!0)},o(s){an(e.$$.fragment,s),t=!1},d(s){Ht(e,s)}}}function aa(r){let e,t,s,o=ut(r[0].items),u=[];for(let S=0;S<o.length;S+=1)u[S]=Rc(_c(r,o,S));const l=S=>an(u[S],1,1,()=>{u[S]=null});let p=[{start:t=r[0].start||1}],d={};for(let S=0;S<p.length;S+=1)d=sp(d,p[S]);return{c(){e=Nn(r[3]);for(let S=0;S<u.length;S+=1)u[S].c();this.h()},l(S){e=On(S,(r[3]||"null").toUpperCase(),{start:!0});var D=qn(e);for(let T=0;T<u.length;T+=1)u[T].l(D);D.forEach(J),this.h()},h(){Ss(r[3])(e,d)},m(S,D){In(S,e,D);for(let T=0;T<u.length;T+=1)u[T]&&u[T].m(e,null);s=!0},p(S,D){if(D&7){o=ut(S[0].items);let T;for(T=0;T<o.length;T+=1){const F=_c(S,o,T);u[T]?(u[T].p(F,D),nn(u[T],1)):(u[T]=Rc(F),u[T].c(),nn(u[T],1),u[T].m(e,null))}for(_t(),T=o.length;T<u.length;T+=1)l(T);Rt()}Ss(S[3])(e,d=op(p,[(!s||D&1&&t!==(t=S[0].start||1))&&{start:t}]))},i(S){if(!s){for(let D=0;D<o.length;D+=1)nn(u[D]);s=!0}},o(S){u=u.filter(Boolean);for(let D=0;D<u.length;D+=1)an(u[D]);s=!1},d(S){S&&J(e),ui(u,S)}}}function py(r){let e=r[3],t,s=r[3]&&aa(r);return{c(){s&&s.c(),t=ee()},l(o){s&&s.l(o),t=ee()},m(o,u){s&&s.m(o,u),In(o,t,u)},p(o,[u]){o[3]?e?Fn(e,o[3])?(s.d(1),s=aa(o),e=o[3],s.c(),s.m(t.parentNode,t)):s.p(o,u):(s=aa(o),e=o[3],s.c(),s.m(t.parentNode,t)):e&&(s.d(1),s=null,e=o[3])},i:Jn,o(o){an(s,o)},d(o){o&&J(t),s&&s.d(o)}}}function fy(r,e,t){let{token:s}=e,{options:o}=e,{renderers:u}=e,l;return r.$$set=p=>{"token"in p&&t(0,s=p.token),"options"in p&&t(1,o=p.options),"renderers"in p&&t(2,u=p.renderers)},r.$$.update=()=>{r.$$.dirty&1&&t(3,l=s.ordered?"ol":"ul")},[s,o,u,l]}class dy extends Ln{constructor(e){super(),Bn(this,e,fy,py,Fn,{token:0,options:1,renderers:2})}}function gy(r){let e,t;const s=r[4].default,o=Ke(s,r,r[3],null);return{c(){e=Nn("li"),o&&o.c()},l(u){e=On(u,"LI",{});var l=qn(e);o&&o.l(l),l.forEach(J)},m(u,l){In(u,e,l),o&&o.m(e,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&nt(o,s,u,u[3],t?tt(s,u[3],l,null):et(u[3]),null)},i(u){t||(nn(o,u),t=!0)},o(u){an(o,u),t=!1},d(u){u&&J(e),o&&o.d(u)}}}function hy(r,e,t){let{$$slots:s={},$$scope:o}=e;const u=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class my extends Ln{constructor(e){super(),Bn(this,e,hy,gy,Fn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Sy(r){let e;return{c(){e=Nn("br")},l(t){e=On(t,"BR",{})},m(t,s){In(t,e,s)},p:Jn,i:Jn,o:Jn,d(t){t&&J(e)}}}function Dy(r,e,t){return[void 0,void 0,void 0]}class yy extends Ln{constructor(e){super(),Bn(this,e,Dy,Sy,Fn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Iy(r){let e,t,s=r[0].text+"",o,u;return{c(){e=Nn("pre"),t=Nn("code"),o=Ea(s),this.h()},l(l){e=On(l,"PRE",{});var p=qn(e);t=On(p,"CODE",{class:!0});var d=qn(t);o=ba(d,s),d.forEach(J),p.forEach(J),this.h()},h(){ge(t,"class",u=`lang-${r[0].lang}`)},m(l,p){In(l,e,p),At(e,t),At(t,o)},p(l,[p]){p&1&&s!==(s=l[0].text+"")&&Aa(o,s),p&1&&u!==(u=`lang-${l[0].lang}`)&&ge(t,"class",u)},i:Jn,o:Jn,d(l){l&&J(e)}}}function Ty(r,e,t){let{token:s}=e;const o=void 0,u=void 0;return r.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class vy extends Ln{constructor(e){super(),Bn(this,e,Ty,Iy,Fn,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Ey(r){let e,t=r[0].raw.slice(1,r[0].raw.length-1)+"",s;return{c(){e=Nn("code"),s=Ea(t)},l(o){e=On(o,"CODE",{});var u=qn(e);s=ba(u,t),u.forEach(J)},m(o,u){In(o,e,u),At(e,s)},p(o,[u]){u&1&&t!==(t=o[0].raw.slice(1,o[0].raw.length-1)+"")&&Aa(s,t)},i:Jn,o:Jn,d(o){o&&J(e)}}}function by(r,e,t){let{token:s}=e;const o=void 0,u=void 0;return r.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class Ay extends Ln{constructor(e){super(),Bn(this,e,by,Ey,Fn,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Fc(r,e,t){const s=r.slice();return s[3]=e[t],s}function Cc(r,e,t){const s=r.slice();return s[6]=e[t],s}function wc(r,e,t){const s=r.slice();return s[9]=e[t],s}function Nc(r){let e,t,s,o;return t=new Rs({props:{tokens:r[9].tokens,options:r[1],renderers:r[2]}}),{c(){e=Nn("th"),qt(t.$$.fragment),s=_a(),this.h()},l(u){e=On(u,"TH",{scope:!0});var l=qn(e);ur(t.$$.fragment,l),s=Ra(l),l.forEach(J),this.h()},h(){ge(e,"scope","col")},m(u,l){In(u,e,l),jt(t,e,null),At(e,s),o=!0},p(u,l){const p={};l&1&&(p.tokens=u[9].tokens),l&2&&(p.options=u[1]),l&4&&(p.renderers=u[2]),t.$set(p)},i(u){o||(nn(t.$$.fragment,u),o=!0)},o(u){an(t.$$.fragment,u),o=!1},d(u){u&&J(e),Ht(t)}}}function Oc(r){let e,t,s;return t=new Rs({props:{tokens:r[6].tokens,options:r[1],renderers:r[2]}}),{c(){e=Nn("td"),qt(t.$$.fragment)},l(o){e=On(o,"TD",{});var u=qn(e);ur(t.$$.fragment,u),u.forEach(J)},m(o,u){In(o,e,u),jt(t,e,null),s=!0},p(o,u){const l={};u&1&&(l.tokens=o[6].tokens),u&2&&(l.options=o[1]),u&4&&(l.renderers=o[2]),t.$set(l)},i(o){s||(nn(t.$$.fragment,o),s=!0)},o(o){an(t.$$.fragment,o),s=!1},d(o){o&&J(e),Ht(t)}}}function xc(r){let e,t,s,o=ut(r[3]),u=[];for(let p=0;p<o.length;p+=1)u[p]=Oc(Cc(r,o,p));const l=p=>an(u[p],1,1,()=>{u[p]=null});return{c(){e=Nn("tr");for(let p=0;p<u.length;p+=1)u[p].c();t=_a()},l(p){e=On(p,"TR",{});var d=qn(e);for(let S=0;S<u.length;S+=1)u[S].l(d);t=Ra(d),d.forEach(J)},m(p,d){In(p,e,d);for(let S=0;S<u.length;S+=1)u[S]&&u[S].m(e,null);At(e,t),s=!0},p(p,d){if(d&7){o=ut(p[3]);let S;for(S=0;S<o.length;S+=1){const D=Cc(p,o,S);u[S]?(u[S].p(D,d),nn(u[S],1)):(u[S]=Oc(D),u[S].c(),nn(u[S],1),u[S].m(e,t))}for(_t(),S=o.length;S<u.length;S+=1)l(S);Rt()}},i(p){if(!s){for(let d=0;d<o.length;d+=1)nn(u[d]);s=!0}},o(p){u=u.filter(Boolean);for(let d=0;d<u.length;d+=1)an(u[d]);s=!1},d(p){p&&J(e),ui(u,p)}}}function _y(r){let e,t,s,o,u,l,p=ut(r[0].header),d=[];for(let N=0;N<p.length;N+=1)d[N]=Nc(wc(r,p,N));const S=N=>an(d[N],1,1,()=>{d[N]=null});let D=ut(r[0].rows),T=[];for(let N=0;N<D.length;N+=1)T[N]=xc(Fc(r,D,N));const F=N=>an(T[N],1,1,()=>{T[N]=null});return{c(){e=Nn("table"),t=Nn("thead"),s=Nn("tr");for(let N=0;N<d.length;N+=1)d[N].c();o=_a(),u=Nn("tbody");for(let N=0;N<T.length;N+=1)T[N].c()},l(N){e=On(N,"TABLE",{});var k=qn(e);t=On(k,"THEAD",{});var L=qn(t);s=On(L,"TR",{});var Q=qn(s);for(let Vn=0;Vn<d.length;Vn+=1)d[Vn].l(Q);Q.forEach(J),L.forEach(J),o=Ra(k),u=On(k,"TBODY",{});var dn=qn(u);for(let Vn=0;Vn<T.length;Vn+=1)T[Vn].l(dn);dn.forEach(J),k.forEach(J)},m(N,k){In(N,e,k),At(e,t),At(t,s);for(let L=0;L<d.length;L+=1)d[L]&&d[L].m(s,null);At(e,o),At(e,u);for(let L=0;L<T.length;L+=1)T[L]&&T[L].m(u,null);l=!0},p(N,[k]){if(k&7){p=ut(N[0].header);let L;for(L=0;L<p.length;L+=1){const Q=wc(N,p,L);d[L]?(d[L].p(Q,k),nn(d[L],1)):(d[L]=Nc(Q),d[L].c(),nn(d[L],1),d[L].m(s,null))}for(_t(),L=p.length;L<d.length;L+=1)S(L);Rt()}if(k&7){D=ut(N[0].rows);let L;for(L=0;L<D.length;L+=1){const Q=Fc(N,D,L);T[L]?(T[L].p(Q,k),nn(T[L],1)):(T[L]=xc(Q),T[L].c(),nn(T[L],1),T[L].m(u,null))}for(_t(),L=D.length;L<T.length;L+=1)F(L);Rt()}},i(N){if(!l){for(let k=0;k<p.length;k+=1)nn(d[k]);for(let k=0;k<D.length;k+=1)nn(T[k]);l=!0}},o(N){d=d.filter(Boolean);for(let k=0;k<d.length;k+=1)an(d[k]);T=T.filter(Boolean);for(let k=0;k<T.length;k+=1)an(T[k]);l=!1},d(N){N&&J(e),ui(d,N),ui(T,N)}}}function Ry(r,e,t){let{token:s}=e,{options:o}=e,{renderers:u}=e;return r.$$set=l=>{"token"in l&&t(0,s=l.token),"options"in l&&t(1,o=l.options),"renderers"in l&&t(2,u=l.renderers)},[s,o,u]}class Fy extends Ln{constructor(e){super(),Bn(this,e,Ry,_y,Fn,{token:0,options:1,renderers:2})}}function Cy(r){let e,t=r[0].text+"",s;return{c(){e=new Q0(!1),s=ee(),this.h()},l(o){e=J0(o,!1),s=ee(),this.h()},h(){e.a=s},m(o,u){e.m(t,o,u),In(o,s,u)},p(o,[u]){u&1&&t!==(t=o[0].text+"")&&e.p(t)},i:Jn,o:Jn,d(o){o&&(J(s),e.d())}}}function wy(r,e,t){let{token:s}=e;const o=void 0,u=void 0;return r.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class Ny extends Ln{constructor(e){super(),Bn(this,e,wy,Cy,Fn,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Oy(r){let e,t;const s=r[4].default,o=Ke(s,r,r[3],null);return{c(){e=Nn("p"),o&&o.c()},l(u){e=On(u,"P",{});var l=qn(e);o&&o.l(l),l.forEach(J)},m(u,l){In(u,e,l),o&&o.m(e,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&nt(o,s,u,u[3],t?tt(s,u[3],l,null):et(u[3]),null)},i(u){t||(nn(o,u),t=!0)},o(u){an(o,u),t=!1},d(u){u&&J(e),o&&o.d(u)}}}function xy(r,e,t){let{$$slots:s={},$$scope:o}=e;const u=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class ky extends Ln{constructor(e){super(),Bn(this,e,xy,Oy,Fn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Ly(r){let e,t,s,o;const u=r[4].default,l=Ke(u,r,r[3],null);return{c(){e=Nn("a"),l&&l.c(),this.h()},l(p){e=On(p,"A",{href:!0,title:!0});var d=qn(e);l&&l.l(d),d.forEach(J),this.h()},h(){ge(e,"href",t=ga(r[0].href)?da(r[1].baseUrl,r[0].href):r[0].href),ge(e,"title",s=r[0].title)},m(p,d){In(p,e,d),l&&l.m(e,null),o=!0},p(p,[d]){l&&l.p&&(!o||d&8)&&nt(l,u,p,p[3],o?tt(u,p[3],d,null):et(p[3]),null),(!o||d&3&&t!==(t=ga(p[0].href)?da(p[1].baseUrl,p[0].href):p[0].href))&&ge(e,"href",t),(!o||d&1&&s!==(s=p[0].title))&&ge(e,"title",s)},i(p){o||(nn(l,p),o=!0)},o(p){an(l,p),o=!1},d(p){p&&J(e),l&&l.d(p)}}}function By(r,e,t){let{$$slots:s={},$$scope:o}=e,{token:u}=e,{options:l}=e;const p=void 0;return r.$$set=d=>{"token"in d&&t(0,u=d.token),"options"in d&&t(1,l=d.options),"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class Py extends Ln{constructor(e){super(),Bn(this,e,By,Ly,Fn,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function Uy(r){let e;const t=r[4].default,s=Ke(t,r,r[3],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,u){s&&s.m(o,u),e=!0},p(o,[u]){s&&s.p&&(!e||u&8)&&nt(s,t,o,o[3],e?tt(t,o[3],u,null):et(o[3]),null)},i(o){e||(nn(s,o),e=!0)},o(o){an(s,o),e=!1},d(o){s&&s.d(o)}}}function $y(r,e,t){let{$$slots:s={},$$scope:o}=e;const u=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class My extends Ln{constructor(e){super(),Bn(this,e,$y,Uy,Fn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Vy(r){let e,t;const s=r[4].default,o=Ke(s,r,r[3],null);return{c(){e=Nn("dfn"),o&&o.c()},l(u){e=On(u,"DFN",{});var l=qn(e);o&&o.l(l),l.forEach(J)},m(u,l){In(u,e,l),o&&o.m(e,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&nt(o,s,u,u[3],t?tt(s,u[3],l,null):et(u[3]),null)},i(u){t||(nn(o,u),t=!0)},o(u){an(o,u),t=!1},d(u){u&&J(e),o&&o.d(u)}}}function Gy(r,e,t){let{$$slots:s={},$$scope:o}=e;const u=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class qy extends Ln{constructor(e){super(),Bn(this,e,Gy,Vy,Fn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function jy(r){let e,t;const s=r[4].default,o=Ke(s,r,r[3],null);return{c(){e=Nn("del"),o&&o.c()},l(u){e=On(u,"DEL",{});var l=qn(e);o&&o.l(l),l.forEach(J)},m(u,l){In(u,e,l),o&&o.m(e,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&nt(o,s,u,u[3],t?tt(s,u[3],l,null):et(u[3]),null)},i(u){t||(nn(o,u),t=!0)},o(u){an(o,u),t=!1},d(u){u&&J(e),o&&o.d(u)}}}function Hy(r,e,t){let{$$slots:s={},$$scope:o}=e;const u=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class zy extends Ln{constructor(e){super(),Bn(this,e,Hy,jy,Fn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Wy(r){let e,t;const s=r[4].default,o=Ke(s,r,r[3],null);return{c(){e=Nn("em"),o&&o.c()},l(u){e=On(u,"EM",{});var l=qn(e);o&&o.l(l),l.forEach(J)},m(u,l){In(u,e,l),o&&o.m(e,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&nt(o,s,u,u[3],t?tt(s,u[3],l,null):et(u[3]),null)},i(u){t||(nn(o,u),t=!0)},o(u){an(o,u),t=!1},d(u){u&&J(e),o&&o.d(u)}}}function Yy(r,e,t){let{$$slots:s={},$$scope:o}=e;const u=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class Qy extends Ln{constructor(e){super(),Bn(this,e,Yy,Wy,Fn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Jy(r){let e;return{c(){e=Nn("hr")},l(t){e=On(t,"HR",{})},m(t,s){In(t,e,s)},p:Jn,i:Jn,o:Jn,d(t){t&&J(e)}}}function Xy(r,e,t){return[void 0,void 0,void 0]}class Zy extends Ln{constructor(e){super(),Bn(this,e,Xy,Jy,Fn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Ky(r){let e,t;const s=r[4].default,o=Ke(s,r,r[3],null);return{c(){e=Nn("strong"),o&&o.c()},l(u){e=On(u,"STRONG",{});var l=qn(e);o&&o.l(l),l.forEach(J)},m(u,l){In(u,e,l),o&&o.m(e,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&nt(o,s,u,u[3],t?tt(s,u[3],l,null):et(u[3]),null)},i(u){t||(nn(o,u),t=!0)},o(u){an(o,u),t=!1},d(u){u&&J(e),o&&o.d(u)}}}function nI(r,e,t){let{$$slots:s={},$$scope:o}=e;const u=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class eI extends Ln{constructor(e){super(),Bn(this,e,nI,Ky,Fn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function tI(r){let e,t,s,o;return{c(){e=Nn("img"),this.h()},l(u){e=On(u,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){Tc(e.src,t=r[0].href)||ge(e,"src",t),ge(e,"title",s=r[0].title),ge(e,"alt",o=r[0].text),ge(e,"class","markdown-image svelte-z38cge")},m(u,l){In(u,e,l)},p(u,[l]){l&1&&!Tc(e.src,t=u[0].href)&&ge(e,"src",t),l&1&&s!==(s=u[0].title)&&ge(e,"title",s),l&1&&o!==(o=u[0].text)&&ge(e,"alt",o)},i:Jn,o:Jn,d(u){u&&J(e)}}}function rI(r,e,t){let{token:s}=e;const o=void 0,u=void 0;return r.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class iI extends Ln{constructor(e){super(),Bn(this,e,rI,tI,Fn,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function sI(r){let e;const t=r[4].default,s=Ke(t,r,r[3],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,u){s&&s.m(o,u),e=!0},p(o,[u]){s&&s.p&&(!e||u&8)&&nt(s,t,o,o[3],e?tt(t,o[3],u,null):et(o[3]),null)},i(o){e||(nn(s,o),e=!0)},o(o){an(s,o),e=!1},d(o){s&&s.d(o)}}}function oI(r,e,t){let{$$slots:s={},$$scope:o}=e;const u=void 0,l=void 0,p=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,p,o,s]}class kc extends Ln{constructor(e){super(),Bn(this,e,oI,sI,Fn,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Fa(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let lr=Fa();function lp(r){lr=r}const cp=/[&<>"']/,aI=new RegExp(cp.source,"g"),pp=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,uI=new RegExp(pp.source,"g"),lI={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Lc=r=>lI[r];function be(r,e){if(e){if(cp.test(r))return r.replace(aI,Lc)}else if(pp.test(r))return r.replace(uI,Lc);return r}const cI=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function pI(r){return r.replace(cI,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const fI=/(^|[^\[])\^/g;function yn(r,e){let t=typeof r=="string"?r:r.source;e=e||"";const s={replace:(o,u)=>{let l=typeof u=="string"?u:u.source;return l=l.replace(fI,"$1"),t=t.replace(o,l),s},getRegex:()=>new RegExp(t,e)};return s}function Bc(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const si={exec:()=>null};function Pc(r,e){const t=r.replace(/\|/g,(u,l,p)=>{let d=!1,S=l;for(;--S>=0&&p[S]==="\\";)d=!d;return d?"|":" |"}),s=t.split(/ \|/);let o=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;o<s.length;o++)s[o]=s[o].trim().replace(/\\\|/g,"|");return s}function us(r,e,t){const s=r.length;if(s===0)return"";let o=0;for(;o<s;){const u=r.charAt(s-o-1);if(u===e&&!t)o++;else if(u!==e&&t)o++;else break}return r.slice(0,s-o)}function dI(r,e){if(r.indexOf(e[1])===-1)return-1;let t=0;for(let s=0;s<r.length;s++)if(r[s]==="\\")s++;else if(r[s]===e[0])t++;else if(r[s]===e[1]&&(t--,t<0))return s;return-1}function Uc(r,e,t,s){const o=e.href,u=e.title?be(e.title):null,l=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){s.state.inLink=!0;const p={type:"link",raw:t,href:o,title:u,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,p}return{type:"image",raw:t,href:o,title:u,text:be(l)}}function gI(r,e){const t=r.match(/^(\s+)(?:```)/);if(t===null)return e;const s=t[1];return e.split(`
`).map(o=>{const u=o.match(/^\s+/);if(u===null)return o;const[l]=u;return l.length>=s.length?o.slice(s.length):o}).join(`
`)}class Ds{constructor(e){An(this,"options");An(this,"rules");An(this,"lexer");this.options=e||lr}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const s=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:us(s,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const s=t[0],o=gI(s,t[3]||"");return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:o}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let s=t[2].trim();if(/#$/.test(s)){const o=us(s,"#");(this.options.pedantic||!o||/ $/.test(o))&&(s=o.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const s=us(t[0].replace(/^ *>[ \t]?/gm,""),`
`),o=this.lexer.state.top;this.lexer.state.top=!0;const u=this.lexer.blockTokens(s);return this.lexer.state.top=o,{type:"blockquote",raw:t[0],tokens:u,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let s=t[1].trim();const o=s.length>1,u={type:"list",raw:"",ordered:o,start:o?+s.slice(0,-1):"",loose:!1,items:[]};s=o?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=o?s:"[*+-]");const l=new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`);let p="",d="",S=!1;for(;e;){let D=!1;if(!(t=l.exec(e))||this.rules.block.hr.test(e))break;p=t[0],e=e.substring(p.length);let T=t[2].split(`
`,1)[0].replace(/^\t+/,dn=>" ".repeat(3*dn.length)),F=e.split(`
`,1)[0],N=0;this.options.pedantic?(N=2,d=T.trimStart()):(N=t[2].search(/[^ ]/),N=N>4?1:N,d=T.slice(N),N+=t[1].length);let k=!1;if(!T&&/^ *$/.test(F)&&(p+=F+`
`,e=e.substring(F.length+1),D=!0),!D){const dn=new RegExp(`^ {0,${Math.min(3,N-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Vn=new RegExp(`^ {0,${Math.min(3,N-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),En=new RegExp(`^ {0,${Math.min(3,N-1)}}(?:\`\`\`|~~~)`),Cn=new RegExp(`^ {0,${Math.min(3,N-1)}}#`);for(;e;){const xn=e.split(`
`,1)[0];if(F=xn,this.options.pedantic&&(F=F.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),En.test(F)||Cn.test(F)||dn.test(F)||Vn.test(e))break;if(F.search(/[^ ]/)>=N||!F.trim())d+=`
`+F.slice(N);else{if(k||T.search(/[^ ]/)>=4||En.test(T)||Cn.test(T)||Vn.test(T))break;d+=`
`+F}!k&&!F.trim()&&(k=!0),p+=xn+`
`,e=e.substring(xn.length+1),T=F.slice(N)}}u.loose||(S?u.loose=!0:/\n *\n *$/.test(p)&&(S=!0));let L=null,Q;this.options.gfm&&(L=/^\[[ xX]\] /.exec(d),L&&(Q=L[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),u.items.push({type:"list_item",raw:p,task:!!L,checked:Q,loose:!1,text:d,tokens:[]}),u.raw+=p}u.items[u.items.length-1].raw=p.trimEnd(),u.items[u.items.length-1].text=d.trimEnd(),u.raw=u.raw.trimEnd();for(let D=0;D<u.items.length;D++)if(this.lexer.state.top=!1,u.items[D].tokens=this.lexer.blockTokens(u.items[D].text,[]),!u.loose){const T=u.items[D].tokens.filter(N=>N.type==="space"),F=T.length>0&&T.some(N=>/\n.*\n/.test(N.raw));u.loose=F}if(u.loose)for(let D=0;D<u.items.length;D++)u.items[D].loose=!0;return u}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const s=t[1].toLowerCase().replace(/\s+/g," "),o=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",u=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:o,title:u}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const s=Pc(t[1]),o=t[2].replace(/^\||\| *$/g,"").split("|"),u=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],l={type:"table",raw:t[0],header:[],align:[],rows:[]};if(s.length===o.length){for(const p of o)/^ *-+: *$/.test(p)?l.align.push("right"):/^ *:-+: *$/.test(p)?l.align.push("center"):/^ *:-+ *$/.test(p)?l.align.push("left"):l.align.push(null);for(const p of s)l.header.push({text:p,tokens:this.lexer.inline(p)});for(const p of u)l.rows.push(Pc(p,l.header.length).map(d=>({text:d,tokens:this.lexer.inline(d)})));return l}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:be(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const s=t[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const l=us(s.slice(0,-1),"\\");if((s.length-l.length)%2===0)return}else{const l=dI(t[2],"()");if(l>-1){const d=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,d).trim(),t[3]=""}}let o=t[2],u="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);l&&(o=l[1],u=l[3])}else u=t[3]?t[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(s)?o=o.slice(1):o=o.slice(1,-1)),Uc(t,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:u&&u.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let s;if((s=this.rules.inline.reflink.exec(e))||(s=this.rules.inline.nolink.exec(e))){const o=(s[2]||s[1]).replace(/\s+/g," "),u=t[o.toLowerCase()];if(!u){const l=s[0].charAt(0);return{type:"text",raw:l,text:l}}return Uc(s,u,s[0],this.lexer)}}emStrong(e,t,s=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!o||o[3]&&s.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!s||this.rules.inline.punctuation.exec(s)){const l=[...o[0]].length-1;let p,d,S=l,D=0;const T=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(T.lastIndex=0,t=t.slice(-1*e.length+l);(o=T.exec(t))!=null;){if(p=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!p)continue;if(d=[...p].length,o[3]||o[4]){S+=d;continue}else if((o[5]||o[6])&&l%3&&!((l+d)%3)){D+=d;continue}if(S-=d,S>0)continue;d=Math.min(d,d+S+D);const F=[...o[0]][0].length,N=e.slice(0,l+o.index+F+d);if(Math.min(l,d)%2){const L=N.slice(1,-1);return{type:"em",raw:N,text:L,tokens:this.lexer.inlineTokens(L)}}const k=N.slice(2,-2);return{type:"strong",raw:N,text:k,tokens:this.lexer.inlineTokens(k)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let s=t[2].replace(/\n/g," ");const o=/[^ ]/.test(s),u=/^ /.test(s)&&/ $/.test(s);return o&&u&&(s=s.substring(1,s.length-1)),s=be(s,!0),{type:"codespan",raw:t[0],text:s}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let s,o;return t[2]==="@"?(s=be(t[1]),o="mailto:"+s):(s=be(t[1]),o=s),{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}url(e){var s;let t;if(t=this.rules.inline.url.exec(e)){let o,u;if(t[2]==="@")o=be(t[0]),u="mailto:"+o;else{let l;do l=t[0],t[0]=((s=this.rules.inline._backpedal.exec(t[0]))==null?void 0:s[0])??"";while(l!==t[0]);o=be(t[0]),t[1]==="www."?u="http://"+t[0]:u=t[0]}return{type:"link",raw:t[0],text:o,href:u,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let s;return this.lexer.state.inRawBlock?s=t[0]:s=be(t[0]),{type:"text",raw:t[0],text:s}}}}const hI=/^(?: *(?:\n|$))+/,mI=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,SI=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,pi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,DI=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,fp=/(?:[*+-]|\d{1,9}[.)])/,dp=yn(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,fp).getRegex(),Ca=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,yI=/^[^\n]+/,wa=/(?!\s*\])(?:\\.|[^\[\]\\])+/,II=yn(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",wa).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),TI=yn(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,fp).getRegex(),Fs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Na=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,vI=yn("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Na).replace("tag",Fs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),gp=yn(Ca).replace("hr",pi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fs).getRegex(),EI=yn(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",gp).getRegex(),Oa={blockquote:EI,code:mI,def:II,fences:SI,heading:DI,hr:pi,html:vI,lheading:dp,list:TI,newline:hI,paragraph:gp,table:si,text:yI},$c=yn("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",pi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fs).getRegex(),bI={...Oa,table:$c,paragraph:yn(Ca).replace("hr",pi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",$c).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fs).getRegex()},AI={...Oa,html:yn(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Na).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:si,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:yn(Ca).replace("hr",pi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",dp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},hp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,_I=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,mp=/^( {2,}|\\)\n(?!\s*$)/,RI=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,fi="\\p{P}$+<=>`^|~",FI=yn(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,fi).getRegex(),CI=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,wI=yn(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,fi).getRegex(),NI=yn("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,fi).getRegex(),OI=yn("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,fi).getRegex(),xI=yn(/\\([punct])/,"gu").replace(/punct/g,fi).getRegex(),kI=yn(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),LI=yn(Na).replace("(?:-->|$)","-->").getRegex(),BI=yn("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",LI).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ys=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,PI=yn(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",ys).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Sp=yn(/^!?\[(label)\]\[(ref)\]/).replace("label",ys).replace("ref",wa).getRegex(),Dp=yn(/^!?\[(ref)\](?:\[\])?/).replace("ref",wa).getRegex(),UI=yn("reflink|nolink(?!\\()","g").replace("reflink",Sp).replace("nolink",Dp).getRegex(),xa={_backpedal:si,anyPunctuation:xI,autolink:kI,blockSkip:CI,br:mp,code:_I,del:si,emStrongLDelim:wI,emStrongRDelimAst:NI,emStrongRDelimUnd:OI,escape:hp,link:PI,nolink:Dp,punctuation:FI,reflink:Sp,reflinkSearch:UI,tag:BI,text:RI,url:si},$I={...xa,link:yn(/^!?\[(label)\]\((.*?)\)/).replace("label",ys).getRegex(),reflink:yn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ys).getRegex()},ha={...xa,escape:yn(hp).replace("])","~|])").getRegex(),url:yn(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},MI={...ha,br:yn(mp).replace("{2,}","*").getRegex(),text:yn(ha.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ls={normal:Oa,gfm:bI,pedantic:AI},ni={normal:xa,gfm:ha,breaks:MI,pedantic:$I};class We{constructor(e){An(this,"tokens");An(this,"options");An(this,"state");An(this,"tokenizer");An(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||lr,this.options.tokenizer=this.options.tokenizer||new Ds,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:ls.normal,inline:ni.normal};this.options.pedantic?(t.block=ls.pedantic,t.inline=ni.pedantic):this.options.gfm&&(t.block=ls.gfm,this.options.breaks?t.inline=ni.breaks:t.inline=ni.gfm),this.tokenizer.rules=t}static get rules(){return{block:ls,inline:ni}}static lex(e,t){return new We(t).lex(e)}static lexInline(e,t){return new We(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(p,d,S)=>d+"    ".repeat(S.length));let s,o,u,l;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(p=>(s=p.call({lexer:this},e,t))?(e=e.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(u=e,this.options.extensions&&this.options.extensions.startBlock){let p=1/0;const d=e.slice(1);let S;this.options.extensions.startBlock.forEach(D=>{S=D.call({lexer:this},d),typeof S=="number"&&S>=0&&(p=Math.min(p,S))}),p<1/0&&p>=0&&(u=e.substring(0,p+1))}if(this.state.top&&(s=this.tokenizer.paragraph(u))){o=t[t.length-1],l&&o.type==="paragraph"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s),l=u.length!==e.length,e=e.substring(s.raw.length);continue}if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(e){const p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let s,o,u,l=e,p,d,S;if(this.tokens.links){const D=Object.keys(this.tokens.links);if(D.length>0)for(;(p=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)D.includes(p[0].slice(p[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(p=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(p=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,p.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(d||(S=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(D=>(s=D.call({lexer:this},e,t))?(e=e.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.escape(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(e)){e=e.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.link(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(e,l,S)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(e)){e=e.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(e))){e=e.substring(s.raw.length),t.push(s);continue}if(u=e,this.options.extensions&&this.options.extensions.startInline){let D=1/0;const T=e.slice(1);let F;this.options.extensions.startInline.forEach(N=>{F=N.call({lexer:this},T),typeof F=="number"&&F>=0&&(D=Math.min(D,F))}),D<1/0&&D>=0&&(u=e.substring(0,D+1))}if(s=this.tokenizer.inlineText(u)){e=e.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(S=s.raw.slice(-1)),d=!0,o=t[t.length-1],o&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(e){const D="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(D);break}else throw new Error(D)}}return t}}class Is{constructor(e){An(this,"options");this.options=e||lr}code(e,t,s){var u;const o=(u=(t||"").match(/^\S*/))==null?void 0:u[0];return e=e.replace(/\n$/,"")+`
`,o?'<pre><code class="language-'+be(o)+'">'+(s?e:be(e,!0))+`</code></pre>
`:"<pre><code>"+(s?e:be(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,s){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,s){const o=t?"ol":"ul",u=t&&s!==1?' start="'+s+'"':"";return"<"+o+u+`>
`+e+"</"+o+`>
`}listitem(e,t,s){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const s=t.header?"th":"td";return(t.align?`<${s} align="${t.align}">`:`<${s}>`)+e+`</${s}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,s){const o=Bc(e);if(o===null)return s;e=o;let u='<a href="'+e+'"';return t&&(u+=' title="'+t+'"'),u+=">"+s+"</a>",u}image(e,t,s){const o=Bc(e);if(o===null)return s;e=o;let u=`<img src="${e}" alt="${s}"`;return t&&(u+=` title="${t}"`),u+=">",u}text(e){return e}}class ka{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,s){return""+s}image(e,t,s){return""+s}br(){return""}}class lt{constructor(e){An(this,"options");An(this,"renderer");An(this,"textRenderer");this.options=e||lr,this.options.renderer=this.options.renderer||new Is,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ka}static parse(e,t){return new lt(t).parse(e)}static parseInline(e,t){return new lt(t).parseInline(e)}parse(e,t=!0){let s="";for(let o=0;o<e.length;o++){const u=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]){const l=u,p=this.options.extensions.renderers[l.type].call({parser:this},l);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){s+=p||"";continue}}switch(u.type){case"space":continue;case"hr":{s+=this.renderer.hr();continue}case"heading":{const l=u;s+=this.renderer.heading(this.parseInline(l.tokens),l.depth,pI(this.parseInline(l.tokens,this.textRenderer)));continue}case"code":{const l=u;s+=this.renderer.code(l.text,l.lang,!!l.escaped);continue}case"table":{const l=u;let p="",d="";for(let D=0;D<l.header.length;D++)d+=this.renderer.tablecell(this.parseInline(l.header[D].tokens),{header:!0,align:l.align[D]});p+=this.renderer.tablerow(d);let S="";for(let D=0;D<l.rows.length;D++){const T=l.rows[D];d="";for(let F=0;F<T.length;F++)d+=this.renderer.tablecell(this.parseInline(T[F].tokens),{header:!1,align:l.align[F]});S+=this.renderer.tablerow(d)}s+=this.renderer.table(p,S);continue}case"blockquote":{const l=u,p=this.parse(l.tokens);s+=this.renderer.blockquote(p);continue}case"list":{const l=u,p=l.ordered,d=l.start,S=l.loose;let D="";for(let T=0;T<l.items.length;T++){const F=l.items[T],N=F.checked,k=F.task;let L="";if(F.task){const Q=this.renderer.checkbox(!!N);S?F.tokens.length>0&&F.tokens[0].type==="paragraph"?(F.tokens[0].text=Q+" "+F.tokens[0].text,F.tokens[0].tokens&&F.tokens[0].tokens.length>0&&F.tokens[0].tokens[0].type==="text"&&(F.tokens[0].tokens[0].text=Q+" "+F.tokens[0].tokens[0].text)):F.tokens.unshift({type:"text",text:Q+" "}):L+=Q+" "}L+=this.parse(F.tokens,S),D+=this.renderer.listitem(L,k,!!N)}s+=this.renderer.list(D,p,d);continue}case"html":{const l=u;s+=this.renderer.html(l.text,l.block);continue}case"paragraph":{const l=u;s+=this.renderer.paragraph(this.parseInline(l.tokens));continue}case"text":{let l=u,p=l.tokens?this.parseInline(l.tokens):l.text;for(;o+1<e.length&&e[o+1].type==="text";)l=e[++o],p+=`
`+(l.tokens?this.parseInline(l.tokens):l.text);s+=t?this.renderer.paragraph(p):p;continue}default:{const l='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}parseInline(e,t){t=t||this.renderer;let s="";for(let o=0;o<e.length;o++){const u=e[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]){const l=this.options.extensions.renderers[u.type].call({parser:this},u);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(u.type)){s+=l||"";continue}}switch(u.type){case"escape":{const l=u;s+=t.text(l.text);break}case"html":{const l=u;s+=t.html(l.text);break}case"link":{const l=u;s+=t.link(l.href,l.title,this.parseInline(l.tokens,t));break}case"image":{const l=u;s+=t.image(l.href,l.title,l.text);break}case"strong":{const l=u;s+=t.strong(this.parseInline(l.tokens,t));break}case"em":{const l=u;s+=t.em(this.parseInline(l.tokens,t));break}case"codespan":{const l=u;s+=t.codespan(l.text);break}case"br":{s+=t.br();break}case"del":{const l=u;s+=t.del(this.parseInline(l.tokens,t));break}case"text":{const l=u;s+=t.text(l.text);break}default:{const l='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}}class oi{constructor(e){An(this,"options");this.options=e||lr}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}An(oi,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var ci,ma,As,yp;class VI{constructor(...e){sa(this,ci);sa(this,As);An(this,"defaults",Fa());An(this,"options",this.setOptions);An(this,"parse",as(this,ci,ma).call(this,We.lex,lt.parse));An(this,"parseInline",as(this,ci,ma).call(this,We.lexInline,lt.parseInline));An(this,"Parser",lt);An(this,"Renderer",Is);An(this,"TextRenderer",ka);An(this,"Lexer",We);An(this,"Tokenizer",Ds);An(this,"Hooks",oi);this.use(...e)}walkTokens(e,t){var o,u;let s=[];for(const l of e)switch(s=s.concat(t.call(this,l)),l.type){case"table":{const p=l;for(const d of p.header)s=s.concat(this.walkTokens(d.tokens,t));for(const d of p.rows)for(const S of d)s=s.concat(this.walkTokens(S.tokens,t));break}case"list":{const p=l;s=s.concat(this.walkTokens(p.items,t));break}default:{const p=l;(u=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&u[p.type]?this.defaults.extensions.childTokens[p.type].forEach(d=>{const S=p[d].flat(1/0);s=s.concat(this.walkTokens(S,t))}):p.tokens&&(s=s.concat(this.walkTokens(p.tokens,t)))}}return s}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(s=>{const o={...s};if(o.async=this.defaults.async||o.async||!1,s.extensions&&(s.extensions.forEach(u=>{if(!u.name)throw new Error("extension name required");if("renderer"in u){const l=t.renderers[u.name];l?t.renderers[u.name]=function(...p){let d=u.renderer.apply(this,p);return d===!1&&(d=l.apply(this,p)),d}:t.renderers[u.name]=u.renderer}if("tokenizer"in u){if(!u.level||u.level!=="block"&&u.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=t[u.level];l?l.unshift(u.tokenizer):t[u.level]=[u.tokenizer],u.start&&(u.level==="block"?t.startBlock?t.startBlock.push(u.start):t.startBlock=[u.start]:u.level==="inline"&&(t.startInline?t.startInline.push(u.start):t.startInline=[u.start]))}"childTokens"in u&&u.childTokens&&(t.childTokens[u.name]=u.childTokens)}),o.extensions=t),s.renderer){const u=this.defaults.renderer||new Is(this.defaults);for(const l in s.renderer){if(!(l in u))throw new Error(`renderer '${l}' does not exist`);if(l==="options")continue;const p=l,d=s.renderer[p],S=u[p];u[p]=(...D)=>{let T=d.apply(u,D);return T===!1&&(T=S.apply(u,D)),T||""}}o.renderer=u}if(s.tokenizer){const u=this.defaults.tokenizer||new Ds(this.defaults);for(const l in s.tokenizer){if(!(l in u))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;const p=l,d=s.tokenizer[p],S=u[p];u[p]=(...D)=>{let T=d.apply(u,D);return T===!1&&(T=S.apply(u,D)),T}}o.tokenizer=u}if(s.hooks){const u=this.defaults.hooks||new oi;for(const l in s.hooks){if(!(l in u))throw new Error(`hook '${l}' does not exist`);if(l==="options")continue;const p=l,d=s.hooks[p],S=u[p];oi.passThroughHooks.has(l)?u[p]=D=>{if(this.defaults.async)return Promise.resolve(d.call(u,D)).then(F=>S.call(u,F));const T=d.call(u,D);return S.call(u,T)}:u[p]=(...D)=>{let T=d.apply(u,D);return T===!1&&(T=S.apply(u,D)),T}}o.hooks=u}if(s.walkTokens){const u=this.defaults.walkTokens,l=s.walkTokens;o.walkTokens=function(p){let d=[];return d.push(l.call(this,p)),u&&(d=d.concat(u.call(this,p))),d}}this.defaults={...this.defaults,...o}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return We.lex(e,t??this.defaults)}parser(e,t){return lt.parse(e,t??this.defaults)}}ci=new WeakSet,ma=function(e,t){return(s,o)=>{const u={...o},l={...this.defaults,...u};this.defaults.async===!0&&u.async===!1&&(l.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),l.async=!0);const p=as(this,As,yp).call(this,!!l.silent,!!l.async);if(typeof s>"u"||s===null)return p(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return p(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(l.hooks&&(l.hooks.options=l),l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(s):s).then(d=>e(d,l)).then(d=>l.hooks?l.hooks.processAllTokens(d):d).then(d=>l.walkTokens?Promise.all(this.walkTokens(d,l.walkTokens)).then(()=>d):d).then(d=>t(d,l)).then(d=>l.hooks?l.hooks.postprocess(d):d).catch(p);try{l.hooks&&(s=l.hooks.preprocess(s));let d=e(s,l);l.hooks&&(d=l.hooks.processAllTokens(d)),l.walkTokens&&this.walkTokens(d,l.walkTokens);let S=t(d,l);return l.hooks&&(S=l.hooks.postprocess(S)),S}catch(d){return p(d)}}},As=new WeakSet,yp=function(e,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const o="<p>An error occurred:</p><pre>"+be(s.message+"",!0)+"</pre>";return t?Promise.resolve(o):o}if(t)return Promise.reject(s);throw s}};const or=new VI;function Dn(r,e){return or.parse(r,e)}Dn.options=Dn.setOptions=function(r){return or.setOptions(r),Dn.defaults=or.defaults,lp(Dn.defaults),Dn};Dn.getDefaults=Fa;Dn.defaults=lr;Dn.use=function(...r){return or.use(...r),Dn.defaults=or.defaults,lp(Dn.defaults),Dn};Dn.walkTokens=function(r,e){return or.walkTokens(r,e)};Dn.parseInline=or.parseInline;Dn.Parser=lt;Dn.parser=lt.parse;Dn.Renderer=Is;Dn.TextRenderer=ka;Dn.Lexer=We;Dn.lexer=We.lex;Dn.Tokenizer=Ds;Dn.Hooks=oi;Dn.parse=Dn;Dn.options;Dn.setOptions;Dn.use;Dn.walkTokens;Dn.parseInline;lt.parse;We.lex;const GI=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,qI=Object.hasOwnProperty;class Ip{constructor(){this.occurrences,this.reset()}slug(e,t){const s=this;let o=jI(e,t===!0);const u=o;for(;qI.call(s.occurrences,o);)s.occurrences[u]++,o=u+"-"+s.occurrences[u];return s.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function jI(r,e){return typeof r!="string"?"":(e||(r=r.toLowerCase()),r.replace(GI,"").replace(/ /g,"-"))}function HI(r){return new We().lex(r)}const zI=()=>({heading:ny,blockquote:ry,list:dy,list_item:my,br:yy,code:vy,codespan:Ay,table:Fy,html:Ny,paragraph:ky,link:Py,text:My,def:qy,del:zy,em:Qy,hr:Zy,strong:eI,image:iI,space:kc,escape:kc}),WI=()=>({baseUrl:"/",slugger:new Ip});function YI(){const r=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||r(e)},X0(()=>{console.warn=r})}function QI(r){let e,t;return e=new Rs({props:{tokens:r[0],renderers:r[1],options:r[2]}}),{c(){qt(e.$$.fragment)},l(s){ur(e.$$.fragment,s)},m(s,o){jt(e,s,o),t=!0},p(s,[o]){const u={};o&1&&(u.tokens=s[0]),o&2&&(u.renderers=s[1]),o&4&&(u.options=s[2]),e.$set(u)},i(s){t||(nn(e.$$.fragment,s),t=!0)},o(s){an(e.$$.fragment,s),t=!1},d(s){Ht(e,s)}}}function JI(r,e,t){YI();let{source:s}=e,{options:o={}}=e,{renderers:u={}}=e,l,p,d;return r.$$set=S=>{"source"in S&&t(3,s=S.source),"options"in S&&t(4,o=S.options),"renderers"in S&&t(5,u=S.renderers)},r.$$.update=()=>{r.$$.dirty&56&&(t(0,l=HI(s)),t(1,p={...zI(),...u}),t(2,d={...WI(),...o}))},[l,p,d,s,o,u]}class TE extends Ln{constructor(e){super(),Bn(this,e,JI,QI,Fn,{source:3,options:4,renderers:5})}}const di={joinUrlPaths:da,isRelative:ga,generatePathSegment:ap};var ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function XI(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function cs(){return{convert:r=>r==null||r===""?null:String(r),asString:r=>String(r),type:r=>r.string().optional()}}function Mc(r){return{convert:e=>{if(typeof e=="object")return e;if(typeof e=="string"){const t=JSON.parse(e);return typeof t!="object"?null:t}return null},asString:e=>JSON.stringify(e),type:e=>e.record(r(e).optional()).optional()}}function ps(r){return{convert:e=>{if(Array.isArray(e))return e;if(typeof e=="string"){const t=JSON.parse(e);return Array.isArray(t)?t:null}return null},asString:e=>JSON.stringify(e),type:e=>e.array(r(e)).optional()}}function Vc(r){return{convert:e=>e==null||!r.find(t=>t===e)?null:e,asString:e=>String(e),type:e=>e.enum(r).optional()}}function Ee(r,e){const t=s=>e.convert(s[r]);return{name:ZI(r),key:r,asEnv:s=>({[r]:e.asString(s)}),zod:{type:e.type},get:t,getOrDefault:(s,o)=>t(s)??o}}function ZI(r){return r.toLowerCase().replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace("-","").replace("_",""))}var La={APP_LOGO:Ee("APP_LOGO",cs()),APP_TITLE:Ee("APP_TITLE",cs()),APP_FAVICON:Ee("APP_FAVICON",cs()),SITE_ROOT:Ee("SITE_ROOT",cs()),SITE_META:Ee("SITE_META",Mc(r=>r.string())),CUSTOM_STYLES:Ee("CUSTOM_STYLES",ps(r=>r.string())),FIELDS_SORTING:Ee("FIELDS_SORTING",Vc(["default","alphabetical"])),ARGUMENTS_SORTING:Ee("ARGUMENTS_SORTING",Vc(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:Ee("QUERY_GENERATION_FACTORIES",Mc(r=>r.union([r.string(),r.boolean(),r.number(),r.null(),r.record(r.unknown())]))),PAGES:Ee("PAGES",ps(r=>{const e=r.lazy(()=>r.object({title:r.string().min(1),content:r.union([r.array(e),r.string().min(1)])}));return e})),EXTERNAL_LINKS:Ee("EXTERNAL_LINKS",ps(r=>r.object({label:r.string().min(1),href:r.string().min(1),position:r.union([r.literal("header"),r.literal("navigation")]).optional(),kind:r.string().min(1).optional(),group:r.string().min(1).optional()}))),DIRECTIVES:Ee("DIRECTIVES",ps(r=>r.object({name:r.string().min(1),args:r.array(r.string())})))};function KI(){return{convert:r=>{if(r===null||r===void 0)return null;switch(typeof r){case"boolean":return r;case"string":const e=r.toLowerCase().trim();return e==="true"||e==="t"||e==="1";case"number":return r!==0;default:return null}},asString:r=>String(r),type:r=>r.boolean().optional()}}Ee("MAGIDOC_GENERATE",KI());var Ts={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ts.exports;(function(r,e){(function(){var t,s="4.17.21",o=200,u="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",p="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",S=500,D="__lodash_placeholder__",T=1,F=2,N=4,k=1,L=2,Q=1,dn=2,Vn=4,En=8,Cn=16,xn=32,te=64,Xn=128,dt=256,O=512,X=30,re="...",Nt=800,Yt=16,mi=1,pr=2,Si=3,it=1/0,Ue=9007199254740991,fr=17976931348623157e292,Qt=NaN,Ae=4294967295,_=Ae-1,M=Ae>>>1,P=[["ary",Xn],["bind",Q],["bindKey",dn],["curry",En],["curryRight",Cn],["flip",O],["partial",xn],["partialRight",te],["rearg",dt]],U="[object Arguments]",gn="[object Array]",Pn="[object AsyncFunction]",hn="[object Boolean]",_e="[object Date]",xr="[object DOMException]",Ot="[object Error]",Zn="[object Function]",qa="[object GeneratorFunction]",$e="[object Map]",kr="[object Number]",lf="[object Null]",gt="[object Object]",ja="[object Promise]",cf="[object Proxy]",Lr="[object RegExp]",Me="[object Set]",Br="[object String]",Di="[object Symbol]",pf="[object Undefined]",Pr="[object WeakMap]",ff="[object WeakSet]",Ur="[object ArrayBuffer]",dr="[object DataView]",Ps="[object Float32Array]",Us="[object Float64Array]",$s="[object Int8Array]",Ms="[object Int16Array]",Vs="[object Int32Array]",Gs="[object Uint8Array]",qs="[object Uint8ClampedArray]",js="[object Uint16Array]",Hs="[object Uint32Array]",df=/\b__p \+= '';/g,gf=/\b(__p \+=) '' \+/g,hf=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ha=/&(?:amp|lt|gt|quot|#39);/g,za=/[&<>"']/g,mf=RegExp(Ha.source),Sf=RegExp(za.source),Df=/<%-([\s\S]+?)%>/g,yf=/<%([\s\S]+?)%>/g,Wa=/<%=([\s\S]+?)%>/g,If=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Tf=/^\w*$/,vf=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zs=/[\\^$.*+?()[\]{}|]/g,Ef=RegExp(zs.source),Ws=/^\s+/,bf=/\s/,Af=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,_f=/\{\n\/\* \[wrapped with (.+)\] \*/,Rf=/,? & /,Ff=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Cf=/[()=,{}\[\]\/\s]/,wf=/\\(\\)?/g,Nf=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ya=/\w*$/,Of=/^[-+]0x[0-9a-f]+$/i,xf=/^0b[01]+$/i,kf=/^\[object .+?Constructor\]$/,Lf=/^0o[0-7]+$/i,Bf=/^(?:0|[1-9]\d*)$/,Pf=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,yi=/($^)/,Uf=/['\n\r\u2028\u2029\\]/g,Ii="\\ud800-\\udfff",$f="\\u0300-\\u036f",Mf="\\ufe20-\\ufe2f",Vf="\\u20d0-\\u20ff",Qa=$f+Mf+Vf,Ja="\\u2700-\\u27bf",Xa="a-z\\xdf-\\xf6\\xf8-\\xff",Gf="\\xac\\xb1\\xd7\\xf7",qf="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",jf="\\u2000-\\u206f",Hf=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Za="A-Z\\xc0-\\xd6\\xd8-\\xde",Ka="\\ufe0e\\ufe0f",nu=Gf+qf+jf+Hf,Ys="['’]",zf="["+Ii+"]",eu="["+nu+"]",Ti="["+Qa+"]",tu="\\d+",Wf="["+Ja+"]",ru="["+Xa+"]",iu="[^"+Ii+nu+tu+Ja+Xa+Za+"]",Qs="\\ud83c[\\udffb-\\udfff]",Yf="(?:"+Ti+"|"+Qs+")",su="[^"+Ii+"]",Js="(?:\\ud83c[\\udde6-\\uddff]){2}",Xs="[\\ud800-\\udbff][\\udc00-\\udfff]",gr="["+Za+"]",ou="\\u200d",au="(?:"+ru+"|"+iu+")",Qf="(?:"+gr+"|"+iu+")",uu="(?:"+Ys+"(?:d|ll|m|re|s|t|ve))?",lu="(?:"+Ys+"(?:D|LL|M|RE|S|T|VE))?",cu=Yf+"?",pu="["+Ka+"]?",Jf="(?:"+ou+"(?:"+[su,Js,Xs].join("|")+")"+pu+cu+")*",Xf="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Zf="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",fu=pu+cu+Jf,Kf="(?:"+[Wf,Js,Xs].join("|")+")"+fu,nd="(?:"+[su+Ti+"?",Ti,Js,Xs,zf].join("|")+")",ed=RegExp(Ys,"g"),td=RegExp(Ti,"g"),Zs=RegExp(Qs+"(?="+Qs+")|"+nd+fu,"g"),rd=RegExp([gr+"?"+ru+"+"+uu+"(?="+[eu,gr,"$"].join("|")+")",Qf+"+"+lu+"(?="+[eu,gr+au,"$"].join("|")+")",gr+"?"+au+"+"+uu,gr+"+"+lu,Zf,Xf,tu,Kf].join("|"),"g"),id=RegExp("["+ou+Ii+Qa+Ka+"]"),sd=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,od=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ad=-1,_n={};_n[Ps]=_n[Us]=_n[$s]=_n[Ms]=_n[Vs]=_n[Gs]=_n[qs]=_n[js]=_n[Hs]=!0,_n[U]=_n[gn]=_n[Ur]=_n[hn]=_n[dr]=_n[_e]=_n[Ot]=_n[Zn]=_n[$e]=_n[kr]=_n[gt]=_n[Lr]=_n[Me]=_n[Br]=_n[Pr]=!1;var bn={};bn[U]=bn[gn]=bn[Ur]=bn[dr]=bn[hn]=bn[_e]=bn[Ps]=bn[Us]=bn[$s]=bn[Ms]=bn[Vs]=bn[$e]=bn[kr]=bn[gt]=bn[Lr]=bn[Me]=bn[Br]=bn[Di]=bn[Gs]=bn[qs]=bn[js]=bn[Hs]=!0,bn[Ot]=bn[Zn]=bn[Pr]=!1;var ud={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},ld={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},cd={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},pd={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},fd=parseFloat,dd=parseInt,du=typeof ei=="object"&&ei&&ei.Object===Object&&ei,gd=typeof self=="object"&&self&&self.Object===Object&&self,Yn=du||gd||Function("return this")(),Ks=e&&!e.nodeType&&e,Jt=Ks&&!0&&r&&!r.nodeType&&r,gu=Jt&&Jt.exports===Ks,no=gu&&du.process,Re=function(){try{var I=Jt&&Jt.require&&Jt.require("util").types;return I||no&&no.binding&&no.binding("util")}catch{}}(),hu=Re&&Re.isArrayBuffer,mu=Re&&Re.isDate,Su=Re&&Re.isMap,Du=Re&&Re.isRegExp,yu=Re&&Re.isSet,Iu=Re&&Re.isTypedArray;function Se(I,A,b){switch(b.length){case 0:return I.call(A);case 1:return I.call(A,b[0]);case 2:return I.call(A,b[0],b[1]);case 3:return I.call(A,b[0],b[1],b[2])}return I.apply(A,b)}function hd(I,A,b,$){for(var Z=-1,fn=I==null?0:I.length;++Z<fn;){var jn=I[Z];A($,jn,b(jn),I)}return $}function Fe(I,A){for(var b=-1,$=I==null?0:I.length;++b<$&&A(I[b],b,I)!==!1;);return I}function md(I,A){for(var b=I==null?0:I.length;b--&&A(I[b],b,I)!==!1;);return I}function Tu(I,A){for(var b=-1,$=I==null?0:I.length;++b<$;)if(!A(I[b],b,I))return!1;return!0}function xt(I,A){for(var b=-1,$=I==null?0:I.length,Z=0,fn=[];++b<$;){var jn=I[b];A(jn,b,I)&&(fn[Z++]=jn)}return fn}function vi(I,A){var b=I==null?0:I.length;return!!b&&hr(I,A,0)>-1}function eo(I,A,b){for(var $=-1,Z=I==null?0:I.length;++$<Z;)if(b(A,I[$]))return!0;return!1}function Rn(I,A){for(var b=-1,$=I==null?0:I.length,Z=Array($);++b<$;)Z[b]=A(I[b],b,I);return Z}function kt(I,A){for(var b=-1,$=A.length,Z=I.length;++b<$;)I[Z+b]=A[b];return I}function to(I,A,b,$){var Z=-1,fn=I==null?0:I.length;for($&&fn&&(b=I[++Z]);++Z<fn;)b=A(b,I[Z],Z,I);return b}function Sd(I,A,b,$){var Z=I==null?0:I.length;for($&&Z&&(b=I[--Z]);Z--;)b=A(b,I[Z],Z,I);return b}function ro(I,A){for(var b=-1,$=I==null?0:I.length;++b<$;)if(A(I[b],b,I))return!0;return!1}var Dd=io("length");function yd(I){return I.split("")}function Id(I){return I.match(Ff)||[]}function vu(I,A,b){var $;return b(I,function(Z,fn,jn){if(A(Z,fn,jn))return $=fn,!1}),$}function Ei(I,A,b,$){for(var Z=I.length,fn=b+($?1:-1);$?fn--:++fn<Z;)if(A(I[fn],fn,I))return fn;return-1}function hr(I,A,b){return A===A?Od(I,A,b):Ei(I,Eu,b)}function Td(I,A,b,$){for(var Z=b-1,fn=I.length;++Z<fn;)if($(I[Z],A))return Z;return-1}function Eu(I){return I!==I}function bu(I,A){var b=I==null?0:I.length;return b?oo(I,A)/b:Qt}function io(I){return function(A){return A==null?t:A[I]}}function so(I){return function(A){return I==null?t:I[A]}}function Au(I,A,b,$,Z){return Z(I,function(fn,jn,Tn){b=$?($=!1,fn):A(b,fn,jn,Tn)}),b}function vd(I,A){var b=I.length;for(I.sort(A);b--;)I[b]=I[b].value;return I}function oo(I,A){for(var b,$=-1,Z=I.length;++$<Z;){var fn=A(I[$]);fn!==t&&(b=b===t?fn:b+fn)}return b}function ao(I,A){for(var b=-1,$=Array(I);++b<I;)$[b]=A(b);return $}function Ed(I,A){return Rn(A,function(b){return[b,I[b]]})}function _u(I){return I&&I.slice(0,wu(I)+1).replace(Ws,"")}function De(I){return function(A){return I(A)}}function uo(I,A){return Rn(A,function(b){return I[b]})}function $r(I,A){return I.has(A)}function Ru(I,A){for(var b=-1,$=I.length;++b<$&&hr(A,I[b],0)>-1;);return b}function Fu(I,A){for(var b=I.length;b--&&hr(A,I[b],0)>-1;);return b}function bd(I,A){for(var b=I.length,$=0;b--;)I[b]===A&&++$;return $}var Ad=so(ud),_d=so(ld);function Rd(I){return"\\"+pd[I]}function Fd(I,A){return I==null?t:I[A]}function mr(I){return id.test(I)}function Cd(I){return sd.test(I)}function wd(I){for(var A,b=[];!(A=I.next()).done;)b.push(A.value);return b}function lo(I){var A=-1,b=Array(I.size);return I.forEach(function($,Z){b[++A]=[Z,$]}),b}function Cu(I,A){return function(b){return I(A(b))}}function Lt(I,A){for(var b=-1,$=I.length,Z=0,fn=[];++b<$;){var jn=I[b];(jn===A||jn===D)&&(I[b]=D,fn[Z++]=b)}return fn}function bi(I){var A=-1,b=Array(I.size);return I.forEach(function($){b[++A]=$}),b}function Nd(I){var A=-1,b=Array(I.size);return I.forEach(function($){b[++A]=[$,$]}),b}function Od(I,A,b){for(var $=b-1,Z=I.length;++$<Z;)if(I[$]===A)return $;return-1}function xd(I,A,b){for(var $=b+1;$--;)if(I[$]===A)return $;return $}function Sr(I){return mr(I)?Ld(I):Dd(I)}function Ve(I){return mr(I)?Bd(I):yd(I)}function wu(I){for(var A=I.length;A--&&bf.test(I.charAt(A)););return A}var kd=so(cd);function Ld(I){for(var A=Zs.lastIndex=0;Zs.test(I);)++A;return A}function Bd(I){return I.match(Zs)||[]}function Pd(I){return I.match(rd)||[]}var Ud=function I(A){A=A==null?Yn:Dr.defaults(Yn.Object(),A,Dr.pick(Yn,od));var b=A.Array,$=A.Date,Z=A.Error,fn=A.Function,jn=A.Math,Tn=A.Object,co=A.RegExp,$d=A.String,Ce=A.TypeError,Ai=b.prototype,Md=fn.prototype,yr=Tn.prototype,_i=A["__core-js_shared__"],Ri=Md.toString,Sn=yr.hasOwnProperty,Vd=0,Nu=function(){var n=/[^.]+$/.exec(_i&&_i.keys&&_i.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Fi=yr.toString,Gd=Ri.call(Tn),qd=Yn._,jd=co("^"+Ri.call(Sn).replace(zs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ci=gu?A.Buffer:t,Bt=A.Symbol,wi=A.Uint8Array,Ou=Ci?Ci.allocUnsafe:t,Ni=Cu(Tn.getPrototypeOf,Tn),xu=Tn.create,ku=yr.propertyIsEnumerable,Oi=Ai.splice,Lu=Bt?Bt.isConcatSpreadable:t,Mr=Bt?Bt.iterator:t,Xt=Bt?Bt.toStringTag:t,xi=function(){try{var n=tr(Tn,"defineProperty");return n({},"",{}),n}catch{}}(),Hd=A.clearTimeout!==Yn.clearTimeout&&A.clearTimeout,zd=$&&$.now!==Yn.Date.now&&$.now,Wd=A.setTimeout!==Yn.setTimeout&&A.setTimeout,ki=jn.ceil,Li=jn.floor,po=Tn.getOwnPropertySymbols,Yd=Ci?Ci.isBuffer:t,Bu=A.isFinite,Qd=Ai.join,Jd=Cu(Tn.keys,Tn),Hn=jn.max,Kn=jn.min,Xd=$.now,Zd=A.parseInt,Pu=jn.random,Kd=Ai.reverse,fo=tr(A,"DataView"),Vr=tr(A,"Map"),go=tr(A,"Promise"),Ir=tr(A,"Set"),Gr=tr(A,"WeakMap"),qr=tr(Tn,"create"),Bi=Gr&&new Gr,Tr={},ng=rr(fo),eg=rr(Vr),tg=rr(go),rg=rr(Ir),ig=rr(Gr),Pi=Bt?Bt.prototype:t,jr=Pi?Pi.valueOf:t,Uu=Pi?Pi.toString:t;function g(n){if(kn(n)&&!K(n)&&!(n instanceof un)){if(n instanceof we)return n;if(Sn.call(n,"__wrapped__"))return $l(n)}return new we(n)}var vr=function(){function n(){}return function(i){if(!wn(i))return{};if(xu)return xu(i);n.prototype=i;var a=new n;return n.prototype=t,a}}();function Ui(){}function we(n,i){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=t}g.templateSettings={escape:Df,evaluate:yf,interpolate:Wa,variable:"",imports:{_:g}},g.prototype=Ui.prototype,g.prototype.constructor=g,we.prototype=vr(Ui.prototype),we.prototype.constructor=we;function un(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ae,this.__views__=[]}function sg(){var n=new un(this.__wrapped__);return n.__actions__=ce(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=ce(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=ce(this.__views__),n}function og(){if(this.__filtered__){var n=new un(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function ag(){var n=this.__wrapped__.value(),i=this.__dir__,a=K(n),c=i<0,f=a?n.length:0,h=yh(0,f,this.__views__),m=h.start,y=h.end,v=y-m,R=c?y:m-1,C=this.__iteratees__,x=C.length,B=0,G=Kn(v,this.__takeCount__);if(!a||!c&&f==v&&G==v)return ul(n,this.__actions__);var W=[];n:for(;v--&&B<G;){R+=i;for(var tn=-1,Y=n[R];++tn<x;){var sn=C[tn],cn=sn.iteratee,Te=sn.type,oe=cn(Y);if(Te==pr)Y=oe;else if(!oe){if(Te==mi)continue n;break n}}W[B++]=Y}return W}un.prototype=vr(Ui.prototype),un.prototype.constructor=un;function Zt(n){var i=-1,a=n==null?0:n.length;for(this.clear();++i<a;){var c=n[i];this.set(c[0],c[1])}}function ug(){this.__data__=qr?qr(null):{},this.size=0}function lg(n){var i=this.has(n)&&delete this.__data__[n];return this.size-=i?1:0,i}function cg(n){var i=this.__data__;if(qr){var a=i[n];return a===d?t:a}return Sn.call(i,n)?i[n]:t}function pg(n){var i=this.__data__;return qr?i[n]!==t:Sn.call(i,n)}function fg(n,i){var a=this.__data__;return this.size+=this.has(n)?0:1,a[n]=qr&&i===t?d:i,this}Zt.prototype.clear=ug,Zt.prototype.delete=lg,Zt.prototype.get=cg,Zt.prototype.has=pg,Zt.prototype.set=fg;function ht(n){var i=-1,a=n==null?0:n.length;for(this.clear();++i<a;){var c=n[i];this.set(c[0],c[1])}}function dg(){this.__data__=[],this.size=0}function gg(n){var i=this.__data__,a=$i(i,n);if(a<0)return!1;var c=i.length-1;return a==c?i.pop():Oi.call(i,a,1),--this.size,!0}function hg(n){var i=this.__data__,a=$i(i,n);return a<0?t:i[a][1]}function mg(n){return $i(this.__data__,n)>-1}function Sg(n,i){var a=this.__data__,c=$i(a,n);return c<0?(++this.size,a.push([n,i])):a[c][1]=i,this}ht.prototype.clear=dg,ht.prototype.delete=gg,ht.prototype.get=hg,ht.prototype.has=mg,ht.prototype.set=Sg;function mt(n){var i=-1,a=n==null?0:n.length;for(this.clear();++i<a;){var c=n[i];this.set(c[0],c[1])}}function Dg(){this.size=0,this.__data__={hash:new Zt,map:new(Vr||ht),string:new Zt}}function yg(n){var i=Xi(this,n).delete(n);return this.size-=i?1:0,i}function Ig(n){return Xi(this,n).get(n)}function Tg(n){return Xi(this,n).has(n)}function vg(n,i){var a=Xi(this,n),c=a.size;return a.set(n,i),this.size+=a.size==c?0:1,this}mt.prototype.clear=Dg,mt.prototype.delete=yg,mt.prototype.get=Ig,mt.prototype.has=Tg,mt.prototype.set=vg;function Kt(n){var i=-1,a=n==null?0:n.length;for(this.__data__=new mt;++i<a;)this.add(n[i])}function Eg(n){return this.__data__.set(n,d),this}function bg(n){return this.__data__.has(n)}Kt.prototype.add=Kt.prototype.push=Eg,Kt.prototype.has=bg;function Ge(n){var i=this.__data__=new ht(n);this.size=i.size}function Ag(){this.__data__=new ht,this.size=0}function _g(n){var i=this.__data__,a=i.delete(n);return this.size=i.size,a}function Rg(n){return this.__data__.get(n)}function Fg(n){return this.__data__.has(n)}function Cg(n,i){var a=this.__data__;if(a instanceof ht){var c=a.__data__;if(!Vr||c.length<o-1)return c.push([n,i]),this.size=++a.size,this;a=this.__data__=new mt(c)}return a.set(n,i),this.size=a.size,this}Ge.prototype.clear=Ag,Ge.prototype.delete=_g,Ge.prototype.get=Rg,Ge.prototype.has=Fg,Ge.prototype.set=Cg;function $u(n,i){var a=K(n),c=!a&&ir(n),f=!a&&!c&&Vt(n),h=!a&&!c&&!f&&_r(n),m=a||c||f||h,y=m?ao(n.length,$d):[],v=y.length;for(var R in n)(i||Sn.call(n,R))&&!(m&&(R=="length"||f&&(R=="offset"||R=="parent")||h&&(R=="buffer"||R=="byteLength"||R=="byteOffset")||It(R,v)))&&y.push(R);return y}function Mu(n){var i=n.length;return i?n[Ao(0,i-1)]:t}function wg(n,i){return Zi(ce(n),nr(i,0,n.length))}function Ng(n){return Zi(ce(n))}function ho(n,i,a){(a!==t&&!qe(n[i],a)||a===t&&!(i in n))&&St(n,i,a)}function Hr(n,i,a){var c=n[i];(!(Sn.call(n,i)&&qe(c,a))||a===t&&!(i in n))&&St(n,i,a)}function $i(n,i){for(var a=n.length;a--;)if(qe(n[a][0],i))return a;return-1}function Og(n,i,a,c){return Pt(n,function(f,h,m){i(c,f,a(f),m)}),c}function Vu(n,i){return n&&ot(i,zn(i),n)}function xg(n,i){return n&&ot(i,fe(i),n)}function St(n,i,a){i=="__proto__"&&xi?xi(n,i,{configurable:!0,enumerable:!0,value:a,writable:!0}):n[i]=a}function mo(n,i){for(var a=-1,c=i.length,f=b(c),h=n==null;++a<c;)f[a]=h?t:Jo(n,i[a]);return f}function nr(n,i,a){return n===n&&(a!==t&&(n=n<=a?n:a),i!==t&&(n=n>=i?n:i)),n}function Ne(n,i,a,c,f,h){var m,y=i&T,v=i&F,R=i&N;if(a&&(m=f?a(n,c,f,h):a(n)),m!==t)return m;if(!wn(n))return n;var C=K(n);if(C){if(m=Th(n),!y)return ce(n,m)}else{var x=ne(n),B=x==Zn||x==qa;if(Vt(n))return pl(n,y);if(x==gt||x==U||B&&!f){if(m=v||B?{}:wl(n),!y)return v?ch(n,xg(m,n)):lh(n,Vu(m,n))}else{if(!bn[x])return f?n:{};m=vh(n,x,y)}}h||(h=new Ge);var G=h.get(n);if(G)return G;h.set(n,m),sc(n)?n.forEach(function(Y){m.add(Ne(Y,i,a,Y,n,h))}):rc(n)&&n.forEach(function(Y,sn){m.set(sn,Ne(Y,i,a,sn,n,h))});var W=R?v?Bo:Lo:v?fe:zn,tn=C?t:W(n);return Fe(tn||n,function(Y,sn){tn&&(sn=Y,Y=n[sn]),Hr(m,sn,Ne(Y,i,a,sn,n,h))}),m}function kg(n){var i=zn(n);return function(a){return Gu(a,n,i)}}function Gu(n,i,a){var c=a.length;if(n==null)return!c;for(n=Tn(n);c--;){var f=a[c],h=i[f],m=n[f];if(m===t&&!(f in n)||!h(m))return!1}return!0}function qu(n,i,a){if(typeof n!="function")throw new Ce(l);return Zr(function(){n.apply(t,a)},i)}function zr(n,i,a,c){var f=-1,h=vi,m=!0,y=n.length,v=[],R=i.length;if(!y)return v;a&&(i=Rn(i,De(a))),c?(h=eo,m=!1):i.length>=o&&(h=$r,m=!1,i=new Kt(i));n:for(;++f<y;){var C=n[f],x=a==null?C:a(C);if(C=c||C!==0?C:0,m&&x===x){for(var B=R;B--;)if(i[B]===x)continue n;v.push(C)}else h(i,x,c)||v.push(C)}return v}var Pt=ml(st),ju=ml(Do,!0);function Lg(n,i){var a=!0;return Pt(n,function(c,f,h){return a=!!i(c,f,h),a}),a}function Mi(n,i,a){for(var c=-1,f=n.length;++c<f;){var h=n[c],m=i(h);if(m!=null&&(y===t?m===m&&!Ie(m):a(m,y)))var y=m,v=h}return v}function Bg(n,i,a,c){var f=n.length;for(a=en(a),a<0&&(a=-a>f?0:f+a),c=c===t||c>f?f:en(c),c<0&&(c+=f),c=a>c?0:ac(c);a<c;)n[a++]=i;return n}function Hu(n,i){var a=[];return Pt(n,function(c,f,h){i(c,f,h)&&a.push(c)}),a}function Qn(n,i,a,c,f){var h=-1,m=n.length;for(a||(a=bh),f||(f=[]);++h<m;){var y=n[h];i>0&&a(y)?i>1?Qn(y,i-1,a,c,f):kt(f,y):c||(f[f.length]=y)}return f}var So=Sl(),zu=Sl(!0);function st(n,i){return n&&So(n,i,zn)}function Do(n,i){return n&&zu(n,i,zn)}function Vi(n,i){return xt(i,function(a){return Tt(n[a])})}function er(n,i){i=$t(i,n);for(var a=0,c=i.length;n!=null&&a<c;)n=n[at(i[a++])];return a&&a==c?n:t}function Wu(n,i,a){var c=i(n);return K(n)?c:kt(c,a(n))}function ie(n){return n==null?n===t?pf:lf:Xt&&Xt in Tn(n)?Dh(n):Nh(n)}function yo(n,i){return n>i}function Pg(n,i){return n!=null&&Sn.call(n,i)}function Ug(n,i){return n!=null&&i in Tn(n)}function $g(n,i,a){return n>=Kn(i,a)&&n<Hn(i,a)}function Io(n,i,a){for(var c=a?eo:vi,f=n[0].length,h=n.length,m=h,y=b(h),v=1/0,R=[];m--;){var C=n[m];m&&i&&(C=Rn(C,De(i))),v=Kn(C.length,v),y[m]=!a&&(i||f>=120&&C.length>=120)?new Kt(m&&C):t}C=n[0];var x=-1,B=y[0];n:for(;++x<f&&R.length<v;){var G=C[x],W=i?i(G):G;if(G=a||G!==0?G:0,!(B?$r(B,W):c(R,W,a))){for(m=h;--m;){var tn=y[m];if(!(tn?$r(tn,W):c(n[m],W,a)))continue n}B&&B.push(W),R.push(G)}}return R}function Mg(n,i,a,c){return st(n,function(f,h,m){i(c,a(f),h,m)}),c}function Wr(n,i,a){i=$t(i,n),n=kl(n,i);var c=n==null?n:n[at(xe(i))];return c==null?t:Se(c,n,a)}function Yu(n){return kn(n)&&ie(n)==U}function Vg(n){return kn(n)&&ie(n)==Ur}function Gg(n){return kn(n)&&ie(n)==_e}function Yr(n,i,a,c,f){return n===i?!0:n==null||i==null||!kn(n)&&!kn(i)?n!==n&&i!==i:qg(n,i,a,c,Yr,f)}function qg(n,i,a,c,f,h){var m=K(n),y=K(i),v=m?gn:ne(n),R=y?gn:ne(i);v=v==U?gt:v,R=R==U?gt:R;var C=v==gt,x=R==gt,B=v==R;if(B&&Vt(n)){if(!Vt(i))return!1;m=!0,C=!1}if(B&&!C)return h||(h=new Ge),m||_r(n)?Rl(n,i,a,c,f,h):mh(n,i,v,a,c,f,h);if(!(a&k)){var G=C&&Sn.call(n,"__wrapped__"),W=x&&Sn.call(i,"__wrapped__");if(G||W){var tn=G?n.value():n,Y=W?i.value():i;return h||(h=new Ge),f(tn,Y,a,c,h)}}return B?(h||(h=new Ge),Sh(n,i,a,c,f,h)):!1}function jg(n){return kn(n)&&ne(n)==$e}function To(n,i,a,c){var f=a.length,h=f,m=!c;if(n==null)return!h;for(n=Tn(n);f--;){var y=a[f];if(m&&y[2]?y[1]!==n[y[0]]:!(y[0]in n))return!1}for(;++f<h;){y=a[f];var v=y[0],R=n[v],C=y[1];if(m&&y[2]){if(R===t&&!(v in n))return!1}else{var x=new Ge;if(c)var B=c(R,C,v,n,i,x);if(!(B===t?Yr(C,R,k|L,c,x):B))return!1}}return!0}function Qu(n){if(!wn(n)||_h(n))return!1;var i=Tt(n)?jd:kf;return i.test(rr(n))}function Hg(n){return kn(n)&&ie(n)==Lr}function zg(n){return kn(n)&&ne(n)==Me}function Wg(n){return kn(n)&&is(n.length)&&!!_n[ie(n)]}function Ju(n){return typeof n=="function"?n:n==null?de:typeof n=="object"?K(n)?Ku(n[0],n[1]):Zu(n):Dc(n)}function vo(n){if(!Xr(n))return Jd(n);var i=[];for(var a in Tn(n))Sn.call(n,a)&&a!="constructor"&&i.push(a);return i}function Yg(n){if(!wn(n))return wh(n);var i=Xr(n),a=[];for(var c in n)c=="constructor"&&(i||!Sn.call(n,c))||a.push(c);return a}function Eo(n,i){return n<i}function Xu(n,i){var a=-1,c=pe(n)?b(n.length):[];return Pt(n,function(f,h,m){c[++a]=i(f,h,m)}),c}function Zu(n){var i=Uo(n);return i.length==1&&i[0][2]?Ol(i[0][0],i[0][1]):function(a){return a===n||To(a,n,i)}}function Ku(n,i){return Mo(n)&&Nl(i)?Ol(at(n),i):function(a){var c=Jo(a,n);return c===t&&c===i?Xo(a,n):Yr(i,c,k|L)}}function Gi(n,i,a,c,f){n!==i&&So(i,function(h,m){if(f||(f=new Ge),wn(h))Qg(n,i,m,a,Gi,c,f);else{var y=c?c(Go(n,m),h,m+"",n,i,f):t;y===t&&(y=h),ho(n,m,y)}},fe)}function Qg(n,i,a,c,f,h,m){var y=Go(n,a),v=Go(i,a),R=m.get(v);if(R){ho(n,a,R);return}var C=h?h(y,v,a+"",n,i,m):t,x=C===t;if(x){var B=K(v),G=!B&&Vt(v),W=!B&&!G&&_r(v);C=v,B||G||W?K(y)?C=y:Un(y)?C=ce(y):G?(x=!1,C=pl(v,!0)):W?(x=!1,C=fl(v,!0)):C=[]:Kr(v)||ir(v)?(C=y,ir(y)?C=uc(y):(!wn(y)||Tt(y))&&(C=wl(v))):x=!1}x&&(m.set(v,C),f(C,v,c,h,m),m.delete(v)),ho(n,a,C)}function nl(n,i){var a=n.length;if(a)return i+=i<0?a:0,It(i,a)?n[i]:t}function el(n,i,a){i.length?i=Rn(i,function(h){return K(h)?function(m){return er(m,h.length===1?h[0]:h)}:h}):i=[de];var c=-1;i=Rn(i,De(z()));var f=Xu(n,function(h,m,y){var v=Rn(i,function(R){return R(h)});return{criteria:v,index:++c,value:h}});return vd(f,function(h,m){return uh(h,m,a)})}function Jg(n,i){return tl(n,i,function(a,c){return Xo(n,c)})}function tl(n,i,a){for(var c=-1,f=i.length,h={};++c<f;){var m=i[c],y=er(n,m);a(y,m)&&Qr(h,$t(m,n),y)}return h}function Xg(n){return function(i){return er(i,n)}}function bo(n,i,a,c){var f=c?Td:hr,h=-1,m=i.length,y=n;for(n===i&&(i=ce(i)),a&&(y=Rn(n,De(a)));++h<m;)for(var v=0,R=i[h],C=a?a(R):R;(v=f(y,C,v,c))>-1;)y!==n&&Oi.call(y,v,1),Oi.call(n,v,1);return n}function rl(n,i){for(var a=n?i.length:0,c=a-1;a--;){var f=i[a];if(a==c||f!==h){var h=f;It(f)?Oi.call(n,f,1):Fo(n,f)}}return n}function Ao(n,i){return n+Li(Pu()*(i-n+1))}function Zg(n,i,a,c){for(var f=-1,h=Hn(ki((i-n)/(a||1)),0),m=b(h);h--;)m[c?h:++f]=n,n+=a;return m}function _o(n,i){var a="";if(!n||i<1||i>Ue)return a;do i%2&&(a+=n),i=Li(i/2),i&&(n+=n);while(i);return a}function rn(n,i){return qo(xl(n,i,de),n+"")}function Kg(n){return Mu(Rr(n))}function nh(n,i){var a=Rr(n);return Zi(a,nr(i,0,a.length))}function Qr(n,i,a,c){if(!wn(n))return n;i=$t(i,n);for(var f=-1,h=i.length,m=h-1,y=n;y!=null&&++f<h;){var v=at(i[f]),R=a;if(v==="__proto__"||v==="constructor"||v==="prototype")return n;if(f!=m){var C=y[v];R=c?c(C,v,y):t,R===t&&(R=wn(C)?C:It(i[f+1])?[]:{})}Hr(y,v,R),y=y[v]}return n}var il=Bi?function(n,i){return Bi.set(n,i),n}:de,eh=xi?function(n,i){return xi(n,"toString",{configurable:!0,enumerable:!1,value:Ko(i),writable:!0})}:de;function th(n){return Zi(Rr(n))}function Oe(n,i,a){var c=-1,f=n.length;i<0&&(i=-i>f?0:f+i),a=a>f?f:a,a<0&&(a+=f),f=i>a?0:a-i>>>0,i>>>=0;for(var h=b(f);++c<f;)h[c]=n[c+i];return h}function rh(n,i){var a;return Pt(n,function(c,f,h){return a=i(c,f,h),!a}),!!a}function qi(n,i,a){var c=0,f=n==null?c:n.length;if(typeof i=="number"&&i===i&&f<=M){for(;c<f;){var h=c+f>>>1,m=n[h];m!==null&&!Ie(m)&&(a?m<=i:m<i)?c=h+1:f=h}return f}return Ro(n,i,de,a)}function Ro(n,i,a,c){var f=0,h=n==null?0:n.length;if(h===0)return 0;i=a(i);for(var m=i!==i,y=i===null,v=Ie(i),R=i===t;f<h;){var C=Li((f+h)/2),x=a(n[C]),B=x!==t,G=x===null,W=x===x,tn=Ie(x);if(m)var Y=c||W;else R?Y=W&&(c||B):y?Y=W&&B&&(c||!G):v?Y=W&&B&&!G&&(c||!tn):G||tn?Y=!1:Y=c?x<=i:x<i;Y?f=C+1:h=C}return Kn(h,_)}function sl(n,i){for(var a=-1,c=n.length,f=0,h=[];++a<c;){var m=n[a],y=i?i(m):m;if(!a||!qe(y,v)){var v=y;h[f++]=m===0?0:m}}return h}function ol(n){return typeof n=="number"?n:Ie(n)?Qt:+n}function ye(n){if(typeof n=="string")return n;if(K(n))return Rn(n,ye)+"";if(Ie(n))return Uu?Uu.call(n):"";var i=n+"";return i=="0"&&1/n==-it?"-0":i}function Ut(n,i,a){var c=-1,f=vi,h=n.length,m=!0,y=[],v=y;if(a)m=!1,f=eo;else if(h>=o){var R=i?null:gh(n);if(R)return bi(R);m=!1,f=$r,v=new Kt}else v=i?[]:y;n:for(;++c<h;){var C=n[c],x=i?i(C):C;if(C=a||C!==0?C:0,m&&x===x){for(var B=v.length;B--;)if(v[B]===x)continue n;i&&v.push(x),y.push(C)}else f(v,x,a)||(v!==y&&v.push(x),y.push(C))}return y}function Fo(n,i){return i=$t(i,n),n=kl(n,i),n==null||delete n[at(xe(i))]}function al(n,i,a,c){return Qr(n,i,a(er(n,i)),c)}function ji(n,i,a,c){for(var f=n.length,h=c?f:-1;(c?h--:++h<f)&&i(n[h],h,n););return a?Oe(n,c?0:h,c?h+1:f):Oe(n,c?h+1:0,c?f:h)}function ul(n,i){var a=n;return a instanceof un&&(a=a.value()),to(i,function(c,f){return f.func.apply(f.thisArg,kt([c],f.args))},a)}function Co(n,i,a){var c=n.length;if(c<2)return c?Ut(n[0]):[];for(var f=-1,h=b(c);++f<c;)for(var m=n[f],y=-1;++y<c;)y!=f&&(h[f]=zr(h[f]||m,n[y],i,a));return Ut(Qn(h,1),i,a)}function ll(n,i,a){for(var c=-1,f=n.length,h=i.length,m={};++c<f;){var y=c<h?i[c]:t;a(m,n[c],y)}return m}function wo(n){return Un(n)?n:[]}function No(n){return typeof n=="function"?n:de}function $t(n,i){return K(n)?n:Mo(n,i)?[n]:Ul(mn(n))}var ih=rn;function Mt(n,i,a){var c=n.length;return a=a===t?c:a,!i&&a>=c?n:Oe(n,i,a)}var cl=Hd||function(n){return Yn.clearTimeout(n)};function pl(n,i){if(i)return n.slice();var a=n.length,c=Ou?Ou(a):new n.constructor(a);return n.copy(c),c}function Oo(n){var i=new n.constructor(n.byteLength);return new wi(i).set(new wi(n)),i}function sh(n,i){var a=i?Oo(n.buffer):n.buffer;return new n.constructor(a,n.byteOffset,n.byteLength)}function oh(n){var i=new n.constructor(n.source,Ya.exec(n));return i.lastIndex=n.lastIndex,i}function ah(n){return jr?Tn(jr.call(n)):{}}function fl(n,i){var a=i?Oo(n.buffer):n.buffer;return new n.constructor(a,n.byteOffset,n.length)}function dl(n,i){if(n!==i){var a=n!==t,c=n===null,f=n===n,h=Ie(n),m=i!==t,y=i===null,v=i===i,R=Ie(i);if(!y&&!R&&!h&&n>i||h&&m&&v&&!y&&!R||c&&m&&v||!a&&v||!f)return 1;if(!c&&!h&&!R&&n<i||R&&a&&f&&!c&&!h||y&&a&&f||!m&&f||!v)return-1}return 0}function uh(n,i,a){for(var c=-1,f=n.criteria,h=i.criteria,m=f.length,y=a.length;++c<m;){var v=dl(f[c],h[c]);if(v){if(c>=y)return v;var R=a[c];return v*(R=="desc"?-1:1)}}return n.index-i.index}function gl(n,i,a,c){for(var f=-1,h=n.length,m=a.length,y=-1,v=i.length,R=Hn(h-m,0),C=b(v+R),x=!c;++y<v;)C[y]=i[y];for(;++f<m;)(x||f<h)&&(C[a[f]]=n[f]);for(;R--;)C[y++]=n[f++];return C}function hl(n,i,a,c){for(var f=-1,h=n.length,m=-1,y=a.length,v=-1,R=i.length,C=Hn(h-y,0),x=b(C+R),B=!c;++f<C;)x[f]=n[f];for(var G=f;++v<R;)x[G+v]=i[v];for(;++m<y;)(B||f<h)&&(x[G+a[m]]=n[f++]);return x}function ce(n,i){var a=-1,c=n.length;for(i||(i=b(c));++a<c;)i[a]=n[a];return i}function ot(n,i,a,c){var f=!a;a||(a={});for(var h=-1,m=i.length;++h<m;){var y=i[h],v=c?c(a[y],n[y],y,a,n):t;v===t&&(v=n[y]),f?St(a,y,v):Hr(a,y,v)}return a}function lh(n,i){return ot(n,$o(n),i)}function ch(n,i){return ot(n,Fl(n),i)}function Hi(n,i){return function(a,c){var f=K(a)?hd:Og,h=i?i():{};return f(a,n,z(c,2),h)}}function Er(n){return rn(function(i,a){var c=-1,f=a.length,h=f>1?a[f-1]:t,m=f>2?a[2]:t;for(h=n.length>3&&typeof h=="function"?(f--,h):t,m&&se(a[0],a[1],m)&&(h=f<3?t:h,f=1),i=Tn(i);++c<f;){var y=a[c];y&&n(i,y,c,h)}return i})}function ml(n,i){return function(a,c){if(a==null)return a;if(!pe(a))return n(a,c);for(var f=a.length,h=i?f:-1,m=Tn(a);(i?h--:++h<f)&&c(m[h],h,m)!==!1;);return a}}function Sl(n){return function(i,a,c){for(var f=-1,h=Tn(i),m=c(i),y=m.length;y--;){var v=m[n?y:++f];if(a(h[v],v,h)===!1)break}return i}}function ph(n,i,a){var c=i&Q,f=Jr(n);function h(){var m=this&&this!==Yn&&this instanceof h?f:n;return m.apply(c?a:this,arguments)}return h}function Dl(n){return function(i){i=mn(i);var a=mr(i)?Ve(i):t,c=a?a[0]:i.charAt(0),f=a?Mt(a,1).join(""):i.slice(1);return c[n]()+f}}function br(n){return function(i){return to(mc(hc(i).replace(ed,"")),n,"")}}function Jr(n){return function(){var i=arguments;switch(i.length){case 0:return new n;case 1:return new n(i[0]);case 2:return new n(i[0],i[1]);case 3:return new n(i[0],i[1],i[2]);case 4:return new n(i[0],i[1],i[2],i[3]);case 5:return new n(i[0],i[1],i[2],i[3],i[4]);case 6:return new n(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new n(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var a=vr(n.prototype),c=n.apply(a,i);return wn(c)?c:a}}function fh(n,i,a){var c=Jr(n);function f(){for(var h=arguments.length,m=b(h),y=h,v=Ar(f);y--;)m[y]=arguments[y];var R=h<3&&m[0]!==v&&m[h-1]!==v?[]:Lt(m,v);if(h-=R.length,h<a)return El(n,i,zi,f.placeholder,t,m,R,t,t,a-h);var C=this&&this!==Yn&&this instanceof f?c:n;return Se(C,this,m)}return f}function yl(n){return function(i,a,c){var f=Tn(i);if(!pe(i)){var h=z(a,3);i=zn(i),a=function(y){return h(f[y],y,f)}}var m=n(i,a,c);return m>-1?f[h?i[m]:m]:t}}function Il(n){return yt(function(i){var a=i.length,c=a,f=we.prototype.thru;for(n&&i.reverse();c--;){var h=i[c];if(typeof h!="function")throw new Ce(l);if(f&&!m&&Ji(h)=="wrapper")var m=new we([],!0)}for(c=m?c:a;++c<a;){h=i[c];var y=Ji(h),v=y=="wrapper"?Po(h):t;v&&Vo(v[0])&&v[1]==(Xn|En|xn|dt)&&!v[4].length&&v[9]==1?m=m[Ji(v[0])].apply(m,v[3]):m=h.length==1&&Vo(h)?m[y]():m.thru(h)}return function(){var R=arguments,C=R[0];if(m&&R.length==1&&K(C))return m.plant(C).value();for(var x=0,B=a?i[x].apply(this,R):C;++x<a;)B=i[x].call(this,B);return B}})}function zi(n,i,a,c,f,h,m,y,v,R){var C=i&Xn,x=i&Q,B=i&dn,G=i&(En|Cn),W=i&O,tn=B?t:Jr(n);function Y(){for(var sn=arguments.length,cn=b(sn),Te=sn;Te--;)cn[Te]=arguments[Te];if(G)var oe=Ar(Y),ve=bd(cn,oe);if(c&&(cn=gl(cn,c,f,G)),h&&(cn=hl(cn,h,m,G)),sn-=ve,G&&sn<R){var $n=Lt(cn,oe);return El(n,i,zi,Y.placeholder,a,cn,$n,y,v,R-sn)}var je=x?a:this,Et=B?je[n]:n;return sn=cn.length,y?cn=Oh(cn,y):W&&sn>1&&cn.reverse(),C&&v<sn&&(cn.length=v),this&&this!==Yn&&this instanceof Y&&(Et=tn||Jr(Et)),Et.apply(je,cn)}return Y}function Tl(n,i){return function(a,c){return Mg(a,n,i(c),{})}}function Wi(n,i){return function(a,c){var f;if(a===t&&c===t)return i;if(a!==t&&(f=a),c!==t){if(f===t)return c;typeof a=="string"||typeof c=="string"?(a=ye(a),c=ye(c)):(a=ol(a),c=ol(c)),f=n(a,c)}return f}}function xo(n){return yt(function(i){return i=Rn(i,De(z())),rn(function(a){var c=this;return n(i,function(f){return Se(f,c,a)})})})}function Yi(n,i){i=i===t?" ":ye(i);var a=i.length;if(a<2)return a?_o(i,n):i;var c=_o(i,ki(n/Sr(i)));return mr(i)?Mt(Ve(c),0,n).join(""):c.slice(0,n)}function dh(n,i,a,c){var f=i&Q,h=Jr(n);function m(){for(var y=-1,v=arguments.length,R=-1,C=c.length,x=b(C+v),B=this&&this!==Yn&&this instanceof m?h:n;++R<C;)x[R]=c[R];for(;v--;)x[R++]=arguments[++y];return Se(B,f?a:this,x)}return m}function vl(n){return function(i,a,c){return c&&typeof c!="number"&&se(i,a,c)&&(a=c=t),i=vt(i),a===t?(a=i,i=0):a=vt(a),c=c===t?i<a?1:-1:vt(c),Zg(i,a,c,n)}}function Qi(n){return function(i,a){return typeof i=="string"&&typeof a=="string"||(i=ke(i),a=ke(a)),n(i,a)}}function El(n,i,a,c,f,h,m,y,v,R){var C=i&En,x=C?m:t,B=C?t:m,G=C?h:t,W=C?t:h;i|=C?xn:te,i&=~(C?te:xn),i&Vn||(i&=~(Q|dn));var tn=[n,i,f,G,x,W,B,y,v,R],Y=a.apply(t,tn);return Vo(n)&&Ll(Y,tn),Y.placeholder=c,Bl(Y,n,i)}function ko(n){var i=jn[n];return function(a,c){if(a=ke(a),c=c==null?0:Kn(en(c),292),c&&Bu(a)){var f=(mn(a)+"e").split("e"),h=i(f[0]+"e"+(+f[1]+c));return f=(mn(h)+"e").split("e"),+(f[0]+"e"+(+f[1]-c))}return i(a)}}var gh=Ir&&1/bi(new Ir([,-0]))[1]==it?function(n){return new Ir(n)}:ta;function bl(n){return function(i){var a=ne(i);return a==$e?lo(i):a==Me?Nd(i):Ed(i,n(i))}}function Dt(n,i,a,c,f,h,m,y){var v=i&dn;if(!v&&typeof n!="function")throw new Ce(l);var R=c?c.length:0;if(R||(i&=~(xn|te),c=f=t),m=m===t?m:Hn(en(m),0),y=y===t?y:en(y),R-=f?f.length:0,i&te){var C=c,x=f;c=f=t}var B=v?t:Po(n),G=[n,i,a,c,f,C,x,h,m,y];if(B&&Ch(G,B),n=G[0],i=G[1],a=G[2],c=G[3],f=G[4],y=G[9]=G[9]===t?v?0:n.length:Hn(G[9]-R,0),!y&&i&(En|Cn)&&(i&=~(En|Cn)),!i||i==Q)var W=ph(n,i,a);else i==En||i==Cn?W=fh(n,i,y):(i==xn||i==(Q|xn))&&!f.length?W=dh(n,i,a,c):W=zi.apply(t,G);var tn=B?il:Ll;return Bl(tn(W,G),n,i)}function Al(n,i,a,c){return n===t||qe(n,yr[a])&&!Sn.call(c,a)?i:n}function _l(n,i,a,c,f,h){return wn(n)&&wn(i)&&(h.set(i,n),Gi(n,i,t,_l,h),h.delete(i)),n}function hh(n){return Kr(n)?t:n}function Rl(n,i,a,c,f,h){var m=a&k,y=n.length,v=i.length;if(y!=v&&!(m&&v>y))return!1;var R=h.get(n),C=h.get(i);if(R&&C)return R==i&&C==n;var x=-1,B=!0,G=a&L?new Kt:t;for(h.set(n,i),h.set(i,n);++x<y;){var W=n[x],tn=i[x];if(c)var Y=m?c(tn,W,x,i,n,h):c(W,tn,x,n,i,h);if(Y!==t){if(Y)continue;B=!1;break}if(G){if(!ro(i,function(sn,cn){if(!$r(G,cn)&&(W===sn||f(W,sn,a,c,h)))return G.push(cn)})){B=!1;break}}else if(!(W===tn||f(W,tn,a,c,h))){B=!1;break}}return h.delete(n),h.delete(i),B}function mh(n,i,a,c,f,h,m){switch(a){case dr:if(n.byteLength!=i.byteLength||n.byteOffset!=i.byteOffset)return!1;n=n.buffer,i=i.buffer;case Ur:return!(n.byteLength!=i.byteLength||!h(new wi(n),new wi(i)));case hn:case _e:case kr:return qe(+n,+i);case Ot:return n.name==i.name&&n.message==i.message;case Lr:case Br:return n==i+"";case $e:var y=lo;case Me:var v=c&k;if(y||(y=bi),n.size!=i.size&&!v)return!1;var R=m.get(n);if(R)return R==i;c|=L,m.set(n,i);var C=Rl(y(n),y(i),c,f,h,m);return m.delete(n),C;case Di:if(jr)return jr.call(n)==jr.call(i)}return!1}function Sh(n,i,a,c,f,h){var m=a&k,y=Lo(n),v=y.length,R=Lo(i),C=R.length;if(v!=C&&!m)return!1;for(var x=v;x--;){var B=y[x];if(!(m?B in i:Sn.call(i,B)))return!1}var G=h.get(n),W=h.get(i);if(G&&W)return G==i&&W==n;var tn=!0;h.set(n,i),h.set(i,n);for(var Y=m;++x<v;){B=y[x];var sn=n[B],cn=i[B];if(c)var Te=m?c(cn,sn,B,i,n,h):c(sn,cn,B,n,i,h);if(!(Te===t?sn===cn||f(sn,cn,a,c,h):Te)){tn=!1;break}Y||(Y=B=="constructor")}if(tn&&!Y){var oe=n.constructor,ve=i.constructor;oe!=ve&&"constructor"in n&&"constructor"in i&&!(typeof oe=="function"&&oe instanceof oe&&typeof ve=="function"&&ve instanceof ve)&&(tn=!1)}return h.delete(n),h.delete(i),tn}function yt(n){return qo(xl(n,t,Gl),n+"")}function Lo(n){return Wu(n,zn,$o)}function Bo(n){return Wu(n,fe,Fl)}var Po=Bi?function(n){return Bi.get(n)}:ta;function Ji(n){for(var i=n.name+"",a=Tr[i],c=Sn.call(Tr,i)?a.length:0;c--;){var f=a[c],h=f.func;if(h==null||h==n)return f.name}return i}function Ar(n){var i=Sn.call(g,"placeholder")?g:n;return i.placeholder}function z(){var n=g.iteratee||na;return n=n===na?Ju:n,arguments.length?n(arguments[0],arguments[1]):n}function Xi(n,i){var a=n.__data__;return Ah(i)?a[typeof i=="string"?"string":"hash"]:a.map}function Uo(n){for(var i=zn(n),a=i.length;a--;){var c=i[a],f=n[c];i[a]=[c,f,Nl(f)]}return i}function tr(n,i){var a=Fd(n,i);return Qu(a)?a:t}function Dh(n){var i=Sn.call(n,Xt),a=n[Xt];try{n[Xt]=t;var c=!0}catch{}var f=Fi.call(n);return c&&(i?n[Xt]=a:delete n[Xt]),f}var $o=po?function(n){return n==null?[]:(n=Tn(n),xt(po(n),function(i){return ku.call(n,i)}))}:ra,Fl=po?function(n){for(var i=[];n;)kt(i,$o(n)),n=Ni(n);return i}:ra,ne=ie;(fo&&ne(new fo(new ArrayBuffer(1)))!=dr||Vr&&ne(new Vr)!=$e||go&&ne(go.resolve())!=ja||Ir&&ne(new Ir)!=Me||Gr&&ne(new Gr)!=Pr)&&(ne=function(n){var i=ie(n),a=i==gt?n.constructor:t,c=a?rr(a):"";if(c)switch(c){case ng:return dr;case eg:return $e;case tg:return ja;case rg:return Me;case ig:return Pr}return i});function yh(n,i,a){for(var c=-1,f=a.length;++c<f;){var h=a[c],m=h.size;switch(h.type){case"drop":n+=m;break;case"dropRight":i-=m;break;case"take":i=Kn(i,n+m);break;case"takeRight":n=Hn(n,i-m);break}}return{start:n,end:i}}function Ih(n){var i=n.match(_f);return i?i[1].split(Rf):[]}function Cl(n,i,a){i=$t(i,n);for(var c=-1,f=i.length,h=!1;++c<f;){var m=at(i[c]);if(!(h=n!=null&&a(n,m)))break;n=n[m]}return h||++c!=f?h:(f=n==null?0:n.length,!!f&&is(f)&&It(m,f)&&(K(n)||ir(n)))}function Th(n){var i=n.length,a=new n.constructor(i);return i&&typeof n[0]=="string"&&Sn.call(n,"index")&&(a.index=n.index,a.input=n.input),a}function wl(n){return typeof n.constructor=="function"&&!Xr(n)?vr(Ni(n)):{}}function vh(n,i,a){var c=n.constructor;switch(i){case Ur:return Oo(n);case hn:case _e:return new c(+n);case dr:return sh(n,a);case Ps:case Us:case $s:case Ms:case Vs:case Gs:case qs:case js:case Hs:return fl(n,a);case $e:return new c;case kr:case Br:return new c(n);case Lr:return oh(n);case Me:return new c;case Di:return ah(n)}}function Eh(n,i){var a=i.length;if(!a)return n;var c=a-1;return i[c]=(a>1?"& ":"")+i[c],i=i.join(a>2?", ":" "),n.replace(Af,`{
/* [wrapped with `+i+`] */
`)}function bh(n){return K(n)||ir(n)||!!(Lu&&n&&n[Lu])}function It(n,i){var a=typeof n;return i=i??Ue,!!i&&(a=="number"||a!="symbol"&&Bf.test(n))&&n>-1&&n%1==0&&n<i}function se(n,i,a){if(!wn(a))return!1;var c=typeof i;return(c=="number"?pe(a)&&It(i,a.length):c=="string"&&i in a)?qe(a[i],n):!1}function Mo(n,i){if(K(n))return!1;var a=typeof n;return a=="number"||a=="symbol"||a=="boolean"||n==null||Ie(n)?!0:Tf.test(n)||!If.test(n)||i!=null&&n in Tn(i)}function Ah(n){var i=typeof n;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?n!=="__proto__":n===null}function Vo(n){var i=Ji(n),a=g[i];if(typeof a!="function"||!(i in un.prototype))return!1;if(n===a)return!0;var c=Po(a);return!!c&&n===c[0]}function _h(n){return!!Nu&&Nu in n}var Rh=_i?Tt:ia;function Xr(n){var i=n&&n.constructor,a=typeof i=="function"&&i.prototype||yr;return n===a}function Nl(n){return n===n&&!wn(n)}function Ol(n,i){return function(a){return a==null?!1:a[n]===i&&(i!==t||n in Tn(a))}}function Fh(n){var i=ts(n,function(c){return a.size===S&&a.clear(),c}),a=i.cache;return i}function Ch(n,i){var a=n[1],c=i[1],f=a|c,h=f<(Q|dn|Xn),m=c==Xn&&a==En||c==Xn&&a==dt&&n[7].length<=i[8]||c==(Xn|dt)&&i[7].length<=i[8]&&a==En;if(!(h||m))return n;c&Q&&(n[2]=i[2],f|=a&Q?0:Vn);var y=i[3];if(y){var v=n[3];n[3]=v?gl(v,y,i[4]):y,n[4]=v?Lt(n[3],D):i[4]}return y=i[5],y&&(v=n[5],n[5]=v?hl(v,y,i[6]):y,n[6]=v?Lt(n[5],D):i[6]),y=i[7],y&&(n[7]=y),c&Xn&&(n[8]=n[8]==null?i[8]:Kn(n[8],i[8])),n[9]==null&&(n[9]=i[9]),n[0]=i[0],n[1]=f,n}function wh(n){var i=[];if(n!=null)for(var a in Tn(n))i.push(a);return i}function Nh(n){return Fi.call(n)}function xl(n,i,a){return i=Hn(i===t?n.length-1:i,0),function(){for(var c=arguments,f=-1,h=Hn(c.length-i,0),m=b(h);++f<h;)m[f]=c[i+f];f=-1;for(var y=b(i+1);++f<i;)y[f]=c[f];return y[i]=a(m),Se(n,this,y)}}function kl(n,i){return i.length<2?n:er(n,Oe(i,0,-1))}function Oh(n,i){for(var a=n.length,c=Kn(i.length,a),f=ce(n);c--;){var h=i[c];n[c]=It(h,a)?f[h]:t}return n}function Go(n,i){if(!(i==="constructor"&&typeof n[i]=="function")&&i!="__proto__")return n[i]}var Ll=Pl(il),Zr=Wd||function(n,i){return Yn.setTimeout(n,i)},qo=Pl(eh);function Bl(n,i,a){var c=i+"";return qo(n,Eh(c,xh(Ih(c),a)))}function Pl(n){var i=0,a=0;return function(){var c=Xd(),f=Yt-(c-a);if(a=c,f>0){if(++i>=Nt)return arguments[0]}else i=0;return n.apply(t,arguments)}}function Zi(n,i){var a=-1,c=n.length,f=c-1;for(i=i===t?c:i;++a<i;){var h=Ao(a,f),m=n[h];n[h]=n[a],n[a]=m}return n.length=i,n}var Ul=Fh(function(n){var i=[];return n.charCodeAt(0)===46&&i.push(""),n.replace(vf,function(a,c,f,h){i.push(f?h.replace(wf,"$1"):c||a)}),i});function at(n){if(typeof n=="string"||Ie(n))return n;var i=n+"";return i=="0"&&1/n==-it?"-0":i}function rr(n){if(n!=null){try{return Ri.call(n)}catch{}try{return n+""}catch{}}return""}function xh(n,i){return Fe(P,function(a){var c="_."+a[0];i&a[1]&&!vi(n,c)&&n.push(c)}),n.sort()}function $l(n){if(n instanceof un)return n.clone();var i=new we(n.__wrapped__,n.__chain__);return i.__actions__=ce(n.__actions__),i.__index__=n.__index__,i.__values__=n.__values__,i}function kh(n,i,a){(a?se(n,i,a):i===t)?i=1:i=Hn(en(i),0);var c=n==null?0:n.length;if(!c||i<1)return[];for(var f=0,h=0,m=b(ki(c/i));f<c;)m[h++]=Oe(n,f,f+=i);return m}function Lh(n){for(var i=-1,a=n==null?0:n.length,c=0,f=[];++i<a;){var h=n[i];h&&(f[c++]=h)}return f}function Bh(){var n=arguments.length;if(!n)return[];for(var i=b(n-1),a=arguments[0],c=n;c--;)i[c-1]=arguments[c];return kt(K(a)?ce(a):[a],Qn(i,1))}var Ph=rn(function(n,i){return Un(n)?zr(n,Qn(i,1,Un,!0)):[]}),Uh=rn(function(n,i){var a=xe(i);return Un(a)&&(a=t),Un(n)?zr(n,Qn(i,1,Un,!0),z(a,2)):[]}),$h=rn(function(n,i){var a=xe(i);return Un(a)&&(a=t),Un(n)?zr(n,Qn(i,1,Un,!0),t,a):[]});function Mh(n,i,a){var c=n==null?0:n.length;return c?(i=a||i===t?1:en(i),Oe(n,i<0?0:i,c)):[]}function Vh(n,i,a){var c=n==null?0:n.length;return c?(i=a||i===t?1:en(i),i=c-i,Oe(n,0,i<0?0:i)):[]}function Gh(n,i){return n&&n.length?ji(n,z(i,3),!0,!0):[]}function qh(n,i){return n&&n.length?ji(n,z(i,3),!0):[]}function jh(n,i,a,c){var f=n==null?0:n.length;return f?(a&&typeof a!="number"&&se(n,i,a)&&(a=0,c=f),Bg(n,i,a,c)):[]}function Ml(n,i,a){var c=n==null?0:n.length;if(!c)return-1;var f=a==null?0:en(a);return f<0&&(f=Hn(c+f,0)),Ei(n,z(i,3),f)}function Vl(n,i,a){var c=n==null?0:n.length;if(!c)return-1;var f=c-1;return a!==t&&(f=en(a),f=a<0?Hn(c+f,0):Kn(f,c-1)),Ei(n,z(i,3),f,!0)}function Gl(n){var i=n==null?0:n.length;return i?Qn(n,1):[]}function Hh(n){var i=n==null?0:n.length;return i?Qn(n,it):[]}function zh(n,i){var a=n==null?0:n.length;return a?(i=i===t?1:en(i),Qn(n,i)):[]}function Wh(n){for(var i=-1,a=n==null?0:n.length,c={};++i<a;){var f=n[i];c[f[0]]=f[1]}return c}function ql(n){return n&&n.length?n[0]:t}function Yh(n,i,a){var c=n==null?0:n.length;if(!c)return-1;var f=a==null?0:en(a);return f<0&&(f=Hn(c+f,0)),hr(n,i,f)}function Qh(n){var i=n==null?0:n.length;return i?Oe(n,0,-1):[]}var Jh=rn(function(n){var i=Rn(n,wo);return i.length&&i[0]===n[0]?Io(i):[]}),Xh=rn(function(n){var i=xe(n),a=Rn(n,wo);return i===xe(a)?i=t:a.pop(),a.length&&a[0]===n[0]?Io(a,z(i,2)):[]}),Zh=rn(function(n){var i=xe(n),a=Rn(n,wo);return i=typeof i=="function"?i:t,i&&a.pop(),a.length&&a[0]===n[0]?Io(a,t,i):[]});function Kh(n,i){return n==null?"":Qd.call(n,i)}function xe(n){var i=n==null?0:n.length;return i?n[i-1]:t}function nm(n,i,a){var c=n==null?0:n.length;if(!c)return-1;var f=c;return a!==t&&(f=en(a),f=f<0?Hn(c+f,0):Kn(f,c-1)),i===i?xd(n,i,f):Ei(n,Eu,f,!0)}function em(n,i){return n&&n.length?nl(n,en(i)):t}var tm=rn(jl);function jl(n,i){return n&&n.length&&i&&i.length?bo(n,i):n}function rm(n,i,a){return n&&n.length&&i&&i.length?bo(n,i,z(a,2)):n}function im(n,i,a){return n&&n.length&&i&&i.length?bo(n,i,t,a):n}var sm=yt(function(n,i){var a=n==null?0:n.length,c=mo(n,i);return rl(n,Rn(i,function(f){return It(f,a)?+f:f}).sort(dl)),c});function om(n,i){var a=[];if(!(n&&n.length))return a;var c=-1,f=[],h=n.length;for(i=z(i,3);++c<h;){var m=n[c];i(m,c,n)&&(a.push(m),f.push(c))}return rl(n,f),a}function jo(n){return n==null?n:Kd.call(n)}function am(n,i,a){var c=n==null?0:n.length;return c?(a&&typeof a!="number"&&se(n,i,a)?(i=0,a=c):(i=i==null?0:en(i),a=a===t?c:en(a)),Oe(n,i,a)):[]}function um(n,i){return qi(n,i)}function lm(n,i,a){return Ro(n,i,z(a,2))}function cm(n,i){var a=n==null?0:n.length;if(a){var c=qi(n,i);if(c<a&&qe(n[c],i))return c}return-1}function pm(n,i){return qi(n,i,!0)}function fm(n,i,a){return Ro(n,i,z(a,2),!0)}function dm(n,i){var a=n==null?0:n.length;if(a){var c=qi(n,i,!0)-1;if(qe(n[c],i))return c}return-1}function gm(n){return n&&n.length?sl(n):[]}function hm(n,i){return n&&n.length?sl(n,z(i,2)):[]}function mm(n){var i=n==null?0:n.length;return i?Oe(n,1,i):[]}function Sm(n,i,a){return n&&n.length?(i=a||i===t?1:en(i),Oe(n,0,i<0?0:i)):[]}function Dm(n,i,a){var c=n==null?0:n.length;return c?(i=a||i===t?1:en(i),i=c-i,Oe(n,i<0?0:i,c)):[]}function ym(n,i){return n&&n.length?ji(n,z(i,3),!1,!0):[]}function Im(n,i){return n&&n.length?ji(n,z(i,3)):[]}var Tm=rn(function(n){return Ut(Qn(n,1,Un,!0))}),vm=rn(function(n){var i=xe(n);return Un(i)&&(i=t),Ut(Qn(n,1,Un,!0),z(i,2))}),Em=rn(function(n){var i=xe(n);return i=typeof i=="function"?i:t,Ut(Qn(n,1,Un,!0),t,i)});function bm(n){return n&&n.length?Ut(n):[]}function Am(n,i){return n&&n.length?Ut(n,z(i,2)):[]}function _m(n,i){return i=typeof i=="function"?i:t,n&&n.length?Ut(n,t,i):[]}function Ho(n){if(!(n&&n.length))return[];var i=0;return n=xt(n,function(a){if(Un(a))return i=Hn(a.length,i),!0}),ao(i,function(a){return Rn(n,io(a))})}function Hl(n,i){if(!(n&&n.length))return[];var a=Ho(n);return i==null?a:Rn(a,function(c){return Se(i,t,c)})}var Rm=rn(function(n,i){return Un(n)?zr(n,i):[]}),Fm=rn(function(n){return Co(xt(n,Un))}),Cm=rn(function(n){var i=xe(n);return Un(i)&&(i=t),Co(xt(n,Un),z(i,2))}),wm=rn(function(n){var i=xe(n);return i=typeof i=="function"?i:t,Co(xt(n,Un),t,i)}),Nm=rn(Ho);function Om(n,i){return ll(n||[],i||[],Hr)}function xm(n,i){return ll(n||[],i||[],Qr)}var km=rn(function(n){var i=n.length,a=i>1?n[i-1]:t;return a=typeof a=="function"?(n.pop(),a):t,Hl(n,a)});function zl(n){var i=g(n);return i.__chain__=!0,i}function Lm(n,i){return i(n),n}function Ki(n,i){return i(n)}var Bm=yt(function(n){var i=n.length,a=i?n[0]:0,c=this.__wrapped__,f=function(h){return mo(h,n)};return i>1||this.__actions__.length||!(c instanceof un)||!It(a)?this.thru(f):(c=c.slice(a,+a+(i?1:0)),c.__actions__.push({func:Ki,args:[f],thisArg:t}),new we(c,this.__chain__).thru(function(h){return i&&!h.length&&h.push(t),h}))});function Pm(){return zl(this)}function Um(){return new we(this.value(),this.__chain__)}function $m(){this.__values__===t&&(this.__values__=oc(this.value()));var n=this.__index__>=this.__values__.length,i=n?t:this.__values__[this.__index__++];return{done:n,value:i}}function Mm(){return this}function Vm(n){for(var i,a=this;a instanceof Ui;){var c=$l(a);c.__index__=0,c.__values__=t,i?f.__wrapped__=c:i=c;var f=c;a=a.__wrapped__}return f.__wrapped__=n,i}function Gm(){var n=this.__wrapped__;if(n instanceof un){var i=n;return this.__actions__.length&&(i=new un(this)),i=i.reverse(),i.__actions__.push({func:Ki,args:[jo],thisArg:t}),new we(i,this.__chain__)}return this.thru(jo)}function qm(){return ul(this.__wrapped__,this.__actions__)}var jm=Hi(function(n,i,a){Sn.call(n,a)?++n[a]:St(n,a,1)});function Hm(n,i,a){var c=K(n)?Tu:Lg;return a&&se(n,i,a)&&(i=t),c(n,z(i,3))}function zm(n,i){var a=K(n)?xt:Hu;return a(n,z(i,3))}var Wm=yl(Ml),Ym=yl(Vl);function Qm(n,i){return Qn(ns(n,i),1)}function Jm(n,i){return Qn(ns(n,i),it)}function Xm(n,i,a){return a=a===t?1:en(a),Qn(ns(n,i),a)}function Wl(n,i){var a=K(n)?Fe:Pt;return a(n,z(i,3))}function Yl(n,i){var a=K(n)?md:ju;return a(n,z(i,3))}var Zm=Hi(function(n,i,a){Sn.call(n,a)?n[a].push(i):St(n,a,[i])});function Km(n,i,a,c){n=pe(n)?n:Rr(n),a=a&&!c?en(a):0;var f=n.length;return a<0&&(a=Hn(f+a,0)),ss(n)?a<=f&&n.indexOf(i,a)>-1:!!f&&hr(n,i,a)>-1}var nS=rn(function(n,i,a){var c=-1,f=typeof i=="function",h=pe(n)?b(n.length):[];return Pt(n,function(m){h[++c]=f?Se(i,m,a):Wr(m,i,a)}),h}),eS=Hi(function(n,i,a){St(n,a,i)});function ns(n,i){var a=K(n)?Rn:Xu;return a(n,z(i,3))}function tS(n,i,a,c){return n==null?[]:(K(i)||(i=i==null?[]:[i]),a=c?t:a,K(a)||(a=a==null?[]:[a]),el(n,i,a))}var rS=Hi(function(n,i,a){n[a?0:1].push(i)},function(){return[[],[]]});function iS(n,i,a){var c=K(n)?to:Au,f=arguments.length<3;return c(n,z(i,4),a,f,Pt)}function sS(n,i,a){var c=K(n)?Sd:Au,f=arguments.length<3;return c(n,z(i,4),a,f,ju)}function oS(n,i){var a=K(n)?xt:Hu;return a(n,rs(z(i,3)))}function aS(n){var i=K(n)?Mu:Kg;return i(n)}function uS(n,i,a){(a?se(n,i,a):i===t)?i=1:i=en(i);var c=K(n)?wg:nh;return c(n,i)}function lS(n){var i=K(n)?Ng:th;return i(n)}function cS(n){if(n==null)return 0;if(pe(n))return ss(n)?Sr(n):n.length;var i=ne(n);return i==$e||i==Me?n.size:vo(n).length}function pS(n,i,a){var c=K(n)?ro:rh;return a&&se(n,i,a)&&(i=t),c(n,z(i,3))}var fS=rn(function(n,i){if(n==null)return[];var a=i.length;return a>1&&se(n,i[0],i[1])?i=[]:a>2&&se(i[0],i[1],i[2])&&(i=[i[0]]),el(n,Qn(i,1),[])}),es=zd||function(){return Yn.Date.now()};function dS(n,i){if(typeof i!="function")throw new Ce(l);return n=en(n),function(){if(--n<1)return i.apply(this,arguments)}}function Ql(n,i,a){return i=a?t:i,i=n&&i==null?n.length:i,Dt(n,Xn,t,t,t,t,i)}function Jl(n,i){var a;if(typeof i!="function")throw new Ce(l);return n=en(n),function(){return--n>0&&(a=i.apply(this,arguments)),n<=1&&(i=t),a}}var zo=rn(function(n,i,a){var c=Q;if(a.length){var f=Lt(a,Ar(zo));c|=xn}return Dt(n,c,i,a,f)}),Xl=rn(function(n,i,a){var c=Q|dn;if(a.length){var f=Lt(a,Ar(Xl));c|=xn}return Dt(i,c,n,a,f)});function Zl(n,i,a){i=a?t:i;var c=Dt(n,En,t,t,t,t,t,i);return c.placeholder=Zl.placeholder,c}function Kl(n,i,a){i=a?t:i;var c=Dt(n,Cn,t,t,t,t,t,i);return c.placeholder=Kl.placeholder,c}function nc(n,i,a){var c,f,h,m,y,v,R=0,C=!1,x=!1,B=!0;if(typeof n!="function")throw new Ce(l);i=ke(i)||0,wn(a)&&(C=!!a.leading,x="maxWait"in a,h=x?Hn(ke(a.maxWait)||0,i):h,B="trailing"in a?!!a.trailing:B);function G($n){var je=c,Et=f;return c=f=t,R=$n,m=n.apply(Et,je),m}function W($n){return R=$n,y=Zr(sn,i),C?G($n):m}function tn($n){var je=$n-v,Et=$n-R,yc=i-je;return x?Kn(yc,h-Et):yc}function Y($n){var je=$n-v,Et=$n-R;return v===t||je>=i||je<0||x&&Et>=h}function sn(){var $n=es();if(Y($n))return cn($n);y=Zr(sn,tn($n))}function cn($n){return y=t,B&&c?G($n):(c=f=t,m)}function Te(){y!==t&&cl(y),R=0,c=v=f=y=t}function oe(){return y===t?m:cn(es())}function ve(){var $n=es(),je=Y($n);if(c=arguments,f=this,v=$n,je){if(y===t)return W(v);if(x)return cl(y),y=Zr(sn,i),G(v)}return y===t&&(y=Zr(sn,i)),m}return ve.cancel=Te,ve.flush=oe,ve}var gS=rn(function(n,i){return qu(n,1,i)}),hS=rn(function(n,i,a){return qu(n,ke(i)||0,a)});function mS(n){return Dt(n,O)}function ts(n,i){if(typeof n!="function"||i!=null&&typeof i!="function")throw new Ce(l);var a=function(){var c=arguments,f=i?i.apply(this,c):c[0],h=a.cache;if(h.has(f))return h.get(f);var m=n.apply(this,c);return a.cache=h.set(f,m)||h,m};return a.cache=new(ts.Cache||mt),a}ts.Cache=mt;function rs(n){if(typeof n!="function")throw new Ce(l);return function(){var i=arguments;switch(i.length){case 0:return!n.call(this);case 1:return!n.call(this,i[0]);case 2:return!n.call(this,i[0],i[1]);case 3:return!n.call(this,i[0],i[1],i[2])}return!n.apply(this,i)}}function SS(n){return Jl(2,n)}var DS=ih(function(n,i){i=i.length==1&&K(i[0])?Rn(i[0],De(z())):Rn(Qn(i,1),De(z()));var a=i.length;return rn(function(c){for(var f=-1,h=Kn(c.length,a);++f<h;)c[f]=i[f].call(this,c[f]);return Se(n,this,c)})}),Wo=rn(function(n,i){var a=Lt(i,Ar(Wo));return Dt(n,xn,t,i,a)}),ec=rn(function(n,i){var a=Lt(i,Ar(ec));return Dt(n,te,t,i,a)}),yS=yt(function(n,i){return Dt(n,dt,t,t,t,i)});function IS(n,i){if(typeof n!="function")throw new Ce(l);return i=i===t?i:en(i),rn(n,i)}function TS(n,i){if(typeof n!="function")throw new Ce(l);return i=i==null?0:Hn(en(i),0),rn(function(a){var c=a[i],f=Mt(a,0,i);return c&&kt(f,c),Se(n,this,f)})}function vS(n,i,a){var c=!0,f=!0;if(typeof n!="function")throw new Ce(l);return wn(a)&&(c="leading"in a?!!a.leading:c,f="trailing"in a?!!a.trailing:f),nc(n,i,{leading:c,maxWait:i,trailing:f})}function ES(n){return Ql(n,1)}function bS(n,i){return Wo(No(i),n)}function AS(){if(!arguments.length)return[];var n=arguments[0];return K(n)?n:[n]}function _S(n){return Ne(n,N)}function RS(n,i){return i=typeof i=="function"?i:t,Ne(n,N,i)}function FS(n){return Ne(n,T|N)}function CS(n,i){return i=typeof i=="function"?i:t,Ne(n,T|N,i)}function wS(n,i){return i==null||Gu(n,i,zn(i))}function qe(n,i){return n===i||n!==n&&i!==i}var NS=Qi(yo),OS=Qi(function(n,i){return n>=i}),ir=Yu(function(){return arguments}())?Yu:function(n){return kn(n)&&Sn.call(n,"callee")&&!ku.call(n,"callee")},K=b.isArray,xS=hu?De(hu):Vg;function pe(n){return n!=null&&is(n.length)&&!Tt(n)}function Un(n){return kn(n)&&pe(n)}function kS(n){return n===!0||n===!1||kn(n)&&ie(n)==hn}var Vt=Yd||ia,LS=mu?De(mu):Gg;function BS(n){return kn(n)&&n.nodeType===1&&!Kr(n)}function PS(n){if(n==null)return!0;if(pe(n)&&(K(n)||typeof n=="string"||typeof n.splice=="function"||Vt(n)||_r(n)||ir(n)))return!n.length;var i=ne(n);if(i==$e||i==Me)return!n.size;if(Xr(n))return!vo(n).length;for(var a in n)if(Sn.call(n,a))return!1;return!0}function US(n,i){return Yr(n,i)}function $S(n,i,a){a=typeof a=="function"?a:t;var c=a?a(n,i):t;return c===t?Yr(n,i,t,a):!!c}function Yo(n){if(!kn(n))return!1;var i=ie(n);return i==Ot||i==xr||typeof n.message=="string"&&typeof n.name=="string"&&!Kr(n)}function MS(n){return typeof n=="number"&&Bu(n)}function Tt(n){if(!wn(n))return!1;var i=ie(n);return i==Zn||i==qa||i==Pn||i==cf}function tc(n){return typeof n=="number"&&n==en(n)}function is(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Ue}function wn(n){var i=typeof n;return n!=null&&(i=="object"||i=="function")}function kn(n){return n!=null&&typeof n=="object"}var rc=Su?De(Su):jg;function VS(n,i){return n===i||To(n,i,Uo(i))}function GS(n,i,a){return a=typeof a=="function"?a:t,To(n,i,Uo(i),a)}function qS(n){return ic(n)&&n!=+n}function jS(n){if(Rh(n))throw new Z(u);return Qu(n)}function HS(n){return n===null}function zS(n){return n==null}function ic(n){return typeof n=="number"||kn(n)&&ie(n)==kr}function Kr(n){if(!kn(n)||ie(n)!=gt)return!1;var i=Ni(n);if(i===null)return!0;var a=Sn.call(i,"constructor")&&i.constructor;return typeof a=="function"&&a instanceof a&&Ri.call(a)==Gd}var Qo=Du?De(Du):Hg;function WS(n){return tc(n)&&n>=-Ue&&n<=Ue}var sc=yu?De(yu):zg;function ss(n){return typeof n=="string"||!K(n)&&kn(n)&&ie(n)==Br}function Ie(n){return typeof n=="symbol"||kn(n)&&ie(n)==Di}var _r=Iu?De(Iu):Wg;function YS(n){return n===t}function QS(n){return kn(n)&&ne(n)==Pr}function JS(n){return kn(n)&&ie(n)==ff}var XS=Qi(Eo),ZS=Qi(function(n,i){return n<=i});function oc(n){if(!n)return[];if(pe(n))return ss(n)?Ve(n):ce(n);if(Mr&&n[Mr])return wd(n[Mr]());var i=ne(n),a=i==$e?lo:i==Me?bi:Rr;return a(n)}function vt(n){if(!n)return n===0?n:0;if(n=ke(n),n===it||n===-it){var i=n<0?-1:1;return i*fr}return n===n?n:0}function en(n){var i=vt(n),a=i%1;return i===i?a?i-a:i:0}function ac(n){return n?nr(en(n),0,Ae):0}function ke(n){if(typeof n=="number")return n;if(Ie(n))return Qt;if(wn(n)){var i=typeof n.valueOf=="function"?n.valueOf():n;n=wn(i)?i+"":i}if(typeof n!="string")return n===0?n:+n;n=_u(n);var a=xf.test(n);return a||Lf.test(n)?dd(n.slice(2),a?2:8):Of.test(n)?Qt:+n}function uc(n){return ot(n,fe(n))}function KS(n){return n?nr(en(n),-Ue,Ue):n===0?n:0}function mn(n){return n==null?"":ye(n)}var nD=Er(function(n,i){if(Xr(i)||pe(i)){ot(i,zn(i),n);return}for(var a in i)Sn.call(i,a)&&Hr(n,a,i[a])}),lc=Er(function(n,i){ot(i,fe(i),n)}),os=Er(function(n,i,a,c){ot(i,fe(i),n,c)}),eD=Er(function(n,i,a,c){ot(i,zn(i),n,c)}),tD=yt(mo);function rD(n,i){var a=vr(n);return i==null?a:Vu(a,i)}var iD=rn(function(n,i){n=Tn(n);var a=-1,c=i.length,f=c>2?i[2]:t;for(f&&se(i[0],i[1],f)&&(c=1);++a<c;)for(var h=i[a],m=fe(h),y=-1,v=m.length;++y<v;){var R=m[y],C=n[R];(C===t||qe(C,yr[R])&&!Sn.call(n,R))&&(n[R]=h[R])}return n}),sD=rn(function(n){return n.push(t,_l),Se(cc,t,n)});function oD(n,i){return vu(n,z(i,3),st)}function aD(n,i){return vu(n,z(i,3),Do)}function uD(n,i){return n==null?n:So(n,z(i,3),fe)}function lD(n,i){return n==null?n:zu(n,z(i,3),fe)}function cD(n,i){return n&&st(n,z(i,3))}function pD(n,i){return n&&Do(n,z(i,3))}function fD(n){return n==null?[]:Vi(n,zn(n))}function dD(n){return n==null?[]:Vi(n,fe(n))}function Jo(n,i,a){var c=n==null?t:er(n,i);return c===t?a:c}function gD(n,i){return n!=null&&Cl(n,i,Pg)}function Xo(n,i){return n!=null&&Cl(n,i,Ug)}var hD=Tl(function(n,i,a){i!=null&&typeof i.toString!="function"&&(i=Fi.call(i)),n[i]=a},Ko(de)),mD=Tl(function(n,i,a){i!=null&&typeof i.toString!="function"&&(i=Fi.call(i)),Sn.call(n,i)?n[i].push(a):n[i]=[a]},z),SD=rn(Wr);function zn(n){return pe(n)?$u(n):vo(n)}function fe(n){return pe(n)?$u(n,!0):Yg(n)}function DD(n,i){var a={};return i=z(i,3),st(n,function(c,f,h){St(a,i(c,f,h),c)}),a}function yD(n,i){var a={};return i=z(i,3),st(n,function(c,f,h){St(a,f,i(c,f,h))}),a}var ID=Er(function(n,i,a){Gi(n,i,a)}),cc=Er(function(n,i,a,c){Gi(n,i,a,c)}),TD=yt(function(n,i){var a={};if(n==null)return a;var c=!1;i=Rn(i,function(h){return h=$t(h,n),c||(c=h.length>1),h}),ot(n,Bo(n),a),c&&(a=Ne(a,T|F|N,hh));for(var f=i.length;f--;)Fo(a,i[f]);return a});function vD(n,i){return pc(n,rs(z(i)))}var ED=yt(function(n,i){return n==null?{}:Jg(n,i)});function pc(n,i){if(n==null)return{};var a=Rn(Bo(n),function(c){return[c]});return i=z(i),tl(n,a,function(c,f){return i(c,f[0])})}function bD(n,i,a){i=$t(i,n);var c=-1,f=i.length;for(f||(f=1,n=t);++c<f;){var h=n==null?t:n[at(i[c])];h===t&&(c=f,h=a),n=Tt(h)?h.call(n):h}return n}function AD(n,i,a){return n==null?n:Qr(n,i,a)}function _D(n,i,a,c){return c=typeof c=="function"?c:t,n==null?n:Qr(n,i,a,c)}var fc=bl(zn),dc=bl(fe);function RD(n,i,a){var c=K(n),f=c||Vt(n)||_r(n);if(i=z(i,4),a==null){var h=n&&n.constructor;f?a=c?new h:[]:wn(n)?a=Tt(h)?vr(Ni(n)):{}:a={}}return(f?Fe:st)(n,function(m,y,v){return i(a,m,y,v)}),a}function FD(n,i){return n==null?!0:Fo(n,i)}function CD(n,i,a){return n==null?n:al(n,i,No(a))}function wD(n,i,a,c){return c=typeof c=="function"?c:t,n==null?n:al(n,i,No(a),c)}function Rr(n){return n==null?[]:uo(n,zn(n))}function ND(n){return n==null?[]:uo(n,fe(n))}function OD(n,i,a){return a===t&&(a=i,i=t),a!==t&&(a=ke(a),a=a===a?a:0),i!==t&&(i=ke(i),i=i===i?i:0),nr(ke(n),i,a)}function xD(n,i,a){return i=vt(i),a===t?(a=i,i=0):a=vt(a),n=ke(n),$g(n,i,a)}function kD(n,i,a){if(a&&typeof a!="boolean"&&se(n,i,a)&&(i=a=t),a===t&&(typeof i=="boolean"?(a=i,i=t):typeof n=="boolean"&&(a=n,n=t)),n===t&&i===t?(n=0,i=1):(n=vt(n),i===t?(i=n,n=0):i=vt(i)),n>i){var c=n;n=i,i=c}if(a||n%1||i%1){var f=Pu();return Kn(n+f*(i-n+fd("1e-"+((f+"").length-1))),i)}return Ao(n,i)}var LD=br(function(n,i,a){return i=i.toLowerCase(),n+(a?gc(i):i)});function gc(n){return Zo(mn(n).toLowerCase())}function hc(n){return n=mn(n),n&&n.replace(Pf,Ad).replace(td,"")}function BD(n,i,a){n=mn(n),i=ye(i);var c=n.length;a=a===t?c:nr(en(a),0,c);var f=a;return a-=i.length,a>=0&&n.slice(a,f)==i}function PD(n){return n=mn(n),n&&Sf.test(n)?n.replace(za,_d):n}function UD(n){return n=mn(n),n&&Ef.test(n)?n.replace(zs,"\\$&"):n}var $D=br(function(n,i,a){return n+(a?"-":"")+i.toLowerCase()}),MD=br(function(n,i,a){return n+(a?" ":"")+i.toLowerCase()}),VD=Dl("toLowerCase");function GD(n,i,a){n=mn(n),i=en(i);var c=i?Sr(n):0;if(!i||c>=i)return n;var f=(i-c)/2;return Yi(Li(f),a)+n+Yi(ki(f),a)}function qD(n,i,a){n=mn(n),i=en(i);var c=i?Sr(n):0;return i&&c<i?n+Yi(i-c,a):n}function jD(n,i,a){n=mn(n),i=en(i);var c=i?Sr(n):0;return i&&c<i?Yi(i-c,a)+n:n}function HD(n,i,a){return a||i==null?i=0:i&&(i=+i),Zd(mn(n).replace(Ws,""),i||0)}function zD(n,i,a){return(a?se(n,i,a):i===t)?i=1:i=en(i),_o(mn(n),i)}function WD(){var n=arguments,i=mn(n[0]);return n.length<3?i:i.replace(n[1],n[2])}var YD=br(function(n,i,a){return n+(a?"_":"")+i.toLowerCase()});function QD(n,i,a){return a&&typeof a!="number"&&se(n,i,a)&&(i=a=t),a=a===t?Ae:a>>>0,a?(n=mn(n),n&&(typeof i=="string"||i!=null&&!Qo(i))&&(i=ye(i),!i&&mr(n))?Mt(Ve(n),0,a):n.split(i,a)):[]}var JD=br(function(n,i,a){return n+(a?" ":"")+Zo(i)});function XD(n,i,a){return n=mn(n),a=a==null?0:nr(en(a),0,n.length),i=ye(i),n.slice(a,a+i.length)==i}function ZD(n,i,a){var c=g.templateSettings;a&&se(n,i,a)&&(i=t),n=mn(n),i=os({},i,c,Al);var f=os({},i.imports,c.imports,Al),h=zn(f),m=uo(f,h),y,v,R=0,C=i.interpolate||yi,x="__p += '",B=co((i.escape||yi).source+"|"+C.source+"|"+(C===Wa?Nf:yi).source+"|"+(i.evaluate||yi).source+"|$","g"),G="//# sourceURL="+(Sn.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ad+"]")+`
`;n.replace(B,function(Y,sn,cn,Te,oe,ve){return cn||(cn=Te),x+=n.slice(R,ve).replace(Uf,Rd),sn&&(y=!0,x+=`' +
__e(`+sn+`) +
'`),oe&&(v=!0,x+=`';
`+oe+`;
__p += '`),cn&&(x+=`' +
((__t = (`+cn+`)) == null ? '' : __t) +
'`),R=ve+Y.length,Y}),x+=`';
`;var W=Sn.call(i,"variable")&&i.variable;if(!W)x=`with (obj) {
`+x+`
}
`;else if(Cf.test(W))throw new Z(p);x=(v?x.replace(df,""):x).replace(gf,"$1").replace(hf,"$1;"),x="function("+(W||"obj")+`) {
`+(W?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(y?", __e = _.escape":"")+(v?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+x+`return __p
}`;var tn=Sc(function(){return fn(h,G+"return "+x).apply(t,m)});if(tn.source=x,Yo(tn))throw tn;return tn}function KD(n){return mn(n).toLowerCase()}function n0(n){return mn(n).toUpperCase()}function e0(n,i,a){if(n=mn(n),n&&(a||i===t))return _u(n);if(!n||!(i=ye(i)))return n;var c=Ve(n),f=Ve(i),h=Ru(c,f),m=Fu(c,f)+1;return Mt(c,h,m).join("")}function t0(n,i,a){if(n=mn(n),n&&(a||i===t))return n.slice(0,wu(n)+1);if(!n||!(i=ye(i)))return n;var c=Ve(n),f=Fu(c,Ve(i))+1;return Mt(c,0,f).join("")}function r0(n,i,a){if(n=mn(n),n&&(a||i===t))return n.replace(Ws,"");if(!n||!(i=ye(i)))return n;var c=Ve(n),f=Ru(c,Ve(i));return Mt(c,f).join("")}function i0(n,i){var a=X,c=re;if(wn(i)){var f="separator"in i?i.separator:f;a="length"in i?en(i.length):a,c="omission"in i?ye(i.omission):c}n=mn(n);var h=n.length;if(mr(n)){var m=Ve(n);h=m.length}if(a>=h)return n;var y=a-Sr(c);if(y<1)return c;var v=m?Mt(m,0,y).join(""):n.slice(0,y);if(f===t)return v+c;if(m&&(y+=v.length-y),Qo(f)){if(n.slice(y).search(f)){var R,C=v;for(f.global||(f=co(f.source,mn(Ya.exec(f))+"g")),f.lastIndex=0;R=f.exec(C);)var x=R.index;v=v.slice(0,x===t?y:x)}}else if(n.indexOf(ye(f),y)!=y){var B=v.lastIndexOf(f);B>-1&&(v=v.slice(0,B))}return v+c}function s0(n){return n=mn(n),n&&mf.test(n)?n.replace(Ha,kd):n}var o0=br(function(n,i,a){return n+(a?" ":"")+i.toUpperCase()}),Zo=Dl("toUpperCase");function mc(n,i,a){return n=mn(n),i=a?t:i,i===t?Cd(n)?Pd(n):Id(n):n.match(i)||[]}var Sc=rn(function(n,i){try{return Se(n,t,i)}catch(a){return Yo(a)?a:new Z(a)}}),a0=yt(function(n,i){return Fe(i,function(a){a=at(a),St(n,a,zo(n[a],n))}),n});function u0(n){var i=n==null?0:n.length,a=z();return n=i?Rn(n,function(c){if(typeof c[1]!="function")throw new Ce(l);return[a(c[0]),c[1]]}):[],rn(function(c){for(var f=-1;++f<i;){var h=n[f];if(Se(h[0],this,c))return Se(h[1],this,c)}})}function l0(n){return kg(Ne(n,T))}function Ko(n){return function(){return n}}function c0(n,i){return n==null||n!==n?i:n}var p0=Il(),f0=Il(!0);function de(n){return n}function na(n){return Ju(typeof n=="function"?n:Ne(n,T))}function d0(n){return Zu(Ne(n,T))}function g0(n,i){return Ku(n,Ne(i,T))}var h0=rn(function(n,i){return function(a){return Wr(a,n,i)}}),m0=rn(function(n,i){return function(a){return Wr(n,a,i)}});function ea(n,i,a){var c=zn(i),f=Vi(i,c);a==null&&!(wn(i)&&(f.length||!c.length))&&(a=i,i=n,n=this,f=Vi(i,zn(i)));var h=!(wn(a)&&"chain"in a)||!!a.chain,m=Tt(n);return Fe(f,function(y){var v=i[y];n[y]=v,m&&(n.prototype[y]=function(){var R=this.__chain__;if(h||R){var C=n(this.__wrapped__),x=C.__actions__=ce(this.__actions__);return x.push({func:v,args:arguments,thisArg:n}),C.__chain__=R,C}return v.apply(n,kt([this.value()],arguments))})}),n}function S0(){return Yn._===this&&(Yn._=qd),this}function ta(){}function D0(n){return n=en(n),rn(function(i){return nl(i,n)})}var y0=xo(Rn),I0=xo(Tu),T0=xo(ro);function Dc(n){return Mo(n)?io(at(n)):Xg(n)}function v0(n){return function(i){return n==null?t:er(n,i)}}var E0=vl(),b0=vl(!0);function ra(){return[]}function ia(){return!1}function A0(){return{}}function _0(){return""}function R0(){return!0}function F0(n,i){if(n=en(n),n<1||n>Ue)return[];var a=Ae,c=Kn(n,Ae);i=z(i),n-=Ae;for(var f=ao(c,i);++a<n;)i(a);return f}function C0(n){return K(n)?Rn(n,at):Ie(n)?[n]:ce(Ul(mn(n)))}function w0(n){var i=++Vd;return mn(n)+i}var N0=Wi(function(n,i){return n+i},0),O0=ko("ceil"),x0=Wi(function(n,i){return n/i},1),k0=ko("floor");function L0(n){return n&&n.length?Mi(n,de,yo):t}function B0(n,i){return n&&n.length?Mi(n,z(i,2),yo):t}function P0(n){return bu(n,de)}function U0(n,i){return bu(n,z(i,2))}function $0(n){return n&&n.length?Mi(n,de,Eo):t}function M0(n,i){return n&&n.length?Mi(n,z(i,2),Eo):t}var V0=Wi(function(n,i){return n*i},1),G0=ko("round"),q0=Wi(function(n,i){return n-i},0);function j0(n){return n&&n.length?oo(n,de):0}function H0(n,i){return n&&n.length?oo(n,z(i,2)):0}return g.after=dS,g.ary=Ql,g.assign=nD,g.assignIn=lc,g.assignInWith=os,g.assignWith=eD,g.at=tD,g.before=Jl,g.bind=zo,g.bindAll=a0,g.bindKey=Xl,g.castArray=AS,g.chain=zl,g.chunk=kh,g.compact=Lh,g.concat=Bh,g.cond=u0,g.conforms=l0,g.constant=Ko,g.countBy=jm,g.create=rD,g.curry=Zl,g.curryRight=Kl,g.debounce=nc,g.defaults=iD,g.defaultsDeep=sD,g.defer=gS,g.delay=hS,g.difference=Ph,g.differenceBy=Uh,g.differenceWith=$h,g.drop=Mh,g.dropRight=Vh,g.dropRightWhile=Gh,g.dropWhile=qh,g.fill=jh,g.filter=zm,g.flatMap=Qm,g.flatMapDeep=Jm,g.flatMapDepth=Xm,g.flatten=Gl,g.flattenDeep=Hh,g.flattenDepth=zh,g.flip=mS,g.flow=p0,g.flowRight=f0,g.fromPairs=Wh,g.functions=fD,g.functionsIn=dD,g.groupBy=Zm,g.initial=Qh,g.intersection=Jh,g.intersectionBy=Xh,g.intersectionWith=Zh,g.invert=hD,g.invertBy=mD,g.invokeMap=nS,g.iteratee=na,g.keyBy=eS,g.keys=zn,g.keysIn=fe,g.map=ns,g.mapKeys=DD,g.mapValues=yD,g.matches=d0,g.matchesProperty=g0,g.memoize=ts,g.merge=ID,g.mergeWith=cc,g.method=h0,g.methodOf=m0,g.mixin=ea,g.negate=rs,g.nthArg=D0,g.omit=TD,g.omitBy=vD,g.once=SS,g.orderBy=tS,g.over=y0,g.overArgs=DS,g.overEvery=I0,g.overSome=T0,g.partial=Wo,g.partialRight=ec,g.partition=rS,g.pick=ED,g.pickBy=pc,g.property=Dc,g.propertyOf=v0,g.pull=tm,g.pullAll=jl,g.pullAllBy=rm,g.pullAllWith=im,g.pullAt=sm,g.range=E0,g.rangeRight=b0,g.rearg=yS,g.reject=oS,g.remove=om,g.rest=IS,g.reverse=jo,g.sampleSize=uS,g.set=AD,g.setWith=_D,g.shuffle=lS,g.slice=am,g.sortBy=fS,g.sortedUniq=gm,g.sortedUniqBy=hm,g.split=QD,g.spread=TS,g.tail=mm,g.take=Sm,g.takeRight=Dm,g.takeRightWhile=ym,g.takeWhile=Im,g.tap=Lm,g.throttle=vS,g.thru=Ki,g.toArray=oc,g.toPairs=fc,g.toPairsIn=dc,g.toPath=C0,g.toPlainObject=uc,g.transform=RD,g.unary=ES,g.union=Tm,g.unionBy=vm,g.unionWith=Em,g.uniq=bm,g.uniqBy=Am,g.uniqWith=_m,g.unset=FD,g.unzip=Ho,g.unzipWith=Hl,g.update=CD,g.updateWith=wD,g.values=Rr,g.valuesIn=ND,g.without=Rm,g.words=mc,g.wrap=bS,g.xor=Fm,g.xorBy=Cm,g.xorWith=wm,g.zip=Nm,g.zipObject=Om,g.zipObjectDeep=xm,g.zipWith=km,g.entries=fc,g.entriesIn=dc,g.extend=lc,g.extendWith=os,ea(g,g),g.add=N0,g.attempt=Sc,g.camelCase=LD,g.capitalize=gc,g.ceil=O0,g.clamp=OD,g.clone=_S,g.cloneDeep=FS,g.cloneDeepWith=CS,g.cloneWith=RS,g.conformsTo=wS,g.deburr=hc,g.defaultTo=c0,g.divide=x0,g.endsWith=BD,g.eq=qe,g.escape=PD,g.escapeRegExp=UD,g.every=Hm,g.find=Wm,g.findIndex=Ml,g.findKey=oD,g.findLast=Ym,g.findLastIndex=Vl,g.findLastKey=aD,g.floor=k0,g.forEach=Wl,g.forEachRight=Yl,g.forIn=uD,g.forInRight=lD,g.forOwn=cD,g.forOwnRight=pD,g.get=Jo,g.gt=NS,g.gte=OS,g.has=gD,g.hasIn=Xo,g.head=ql,g.identity=de,g.includes=Km,g.indexOf=Yh,g.inRange=xD,g.invoke=SD,g.isArguments=ir,g.isArray=K,g.isArrayBuffer=xS,g.isArrayLike=pe,g.isArrayLikeObject=Un,g.isBoolean=kS,g.isBuffer=Vt,g.isDate=LS,g.isElement=BS,g.isEmpty=PS,g.isEqual=US,g.isEqualWith=$S,g.isError=Yo,g.isFinite=MS,g.isFunction=Tt,g.isInteger=tc,g.isLength=is,g.isMap=rc,g.isMatch=VS,g.isMatchWith=GS,g.isNaN=qS,g.isNative=jS,g.isNil=zS,g.isNull=HS,g.isNumber=ic,g.isObject=wn,g.isObjectLike=kn,g.isPlainObject=Kr,g.isRegExp=Qo,g.isSafeInteger=WS,g.isSet=sc,g.isString=ss,g.isSymbol=Ie,g.isTypedArray=_r,g.isUndefined=YS,g.isWeakMap=QS,g.isWeakSet=JS,g.join=Kh,g.kebabCase=$D,g.last=xe,g.lastIndexOf=nm,g.lowerCase=MD,g.lowerFirst=VD,g.lt=XS,g.lte=ZS,g.max=L0,g.maxBy=B0,g.mean=P0,g.meanBy=U0,g.min=$0,g.minBy=M0,g.stubArray=ra,g.stubFalse=ia,g.stubObject=A0,g.stubString=_0,g.stubTrue=R0,g.multiply=V0,g.nth=em,g.noConflict=S0,g.noop=ta,g.now=es,g.pad=GD,g.padEnd=qD,g.padStart=jD,g.parseInt=HD,g.random=kD,g.reduce=iS,g.reduceRight=sS,g.repeat=zD,g.replace=WD,g.result=bD,g.round=G0,g.runInContext=I,g.sample=aS,g.size=cS,g.snakeCase=YD,g.some=pS,g.sortedIndex=um,g.sortedIndexBy=lm,g.sortedIndexOf=cm,g.sortedLastIndex=pm,g.sortedLastIndexBy=fm,g.sortedLastIndexOf=dm,g.startCase=JD,g.startsWith=XD,g.subtract=q0,g.sum=j0,g.sumBy=H0,g.template=ZD,g.times=F0,g.toFinite=vt,g.toInteger=en,g.toLength=ac,g.toLower=KD,g.toNumber=ke,g.toSafeInteger=KS,g.toString=mn,g.toUpper=n0,g.trim=e0,g.trimEnd=t0,g.trimStart=r0,g.truncate=i0,g.unescape=s0,g.uniqueId=w0,g.upperCase=o0,g.upperFirst=Zo,g.each=Wl,g.eachRight=Yl,g.first=ql,ea(g,function(){var n={};return st(g,function(i,a){Sn.call(g.prototype,a)||(n[a]=i)}),n}(),{chain:!1}),g.VERSION=s,Fe(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){g[n].placeholder=g}),Fe(["drop","take"],function(n,i){un.prototype[n]=function(a){a=a===t?1:Hn(en(a),0);var c=this.__filtered__&&!i?new un(this):this.clone();return c.__filtered__?c.__takeCount__=Kn(a,c.__takeCount__):c.__views__.push({size:Kn(a,Ae),type:n+(c.__dir__<0?"Right":"")}),c},un.prototype[n+"Right"]=function(a){return this.reverse()[n](a).reverse()}}),Fe(["filter","map","takeWhile"],function(n,i){var a=i+1,c=a==mi||a==Si;un.prototype[n]=function(f){var h=this.clone();return h.__iteratees__.push({iteratee:z(f,3),type:a}),h.__filtered__=h.__filtered__||c,h}}),Fe(["head","last"],function(n,i){var a="take"+(i?"Right":"");un.prototype[n]=function(){return this[a](1).value()[0]}}),Fe(["initial","tail"],function(n,i){var a="drop"+(i?"":"Right");un.prototype[n]=function(){return this.__filtered__?new un(this):this[a](1)}}),un.prototype.compact=function(){return this.filter(de)},un.prototype.find=function(n){return this.filter(n).head()},un.prototype.findLast=function(n){return this.reverse().find(n)},un.prototype.invokeMap=rn(function(n,i){return typeof n=="function"?new un(this):this.map(function(a){return Wr(a,n,i)})}),un.prototype.reject=function(n){return this.filter(rs(z(n)))},un.prototype.slice=function(n,i){n=en(n);var a=this;return a.__filtered__&&(n>0||i<0)?new un(a):(n<0?a=a.takeRight(-n):n&&(a=a.drop(n)),i!==t&&(i=en(i),a=i<0?a.dropRight(-i):a.take(i-n)),a)},un.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},un.prototype.toArray=function(){return this.take(Ae)},st(un.prototype,function(n,i){var a=/^(?:filter|find|map|reject)|While$/.test(i),c=/^(?:head|last)$/.test(i),f=g[c?"take"+(i=="last"?"Right":""):i],h=c||/^find/.test(i);f&&(g.prototype[i]=function(){var m=this.__wrapped__,y=c?[1]:arguments,v=m instanceof un,R=y[0],C=v||K(m),x=function(sn){var cn=f.apply(g,kt([sn],y));return c&&B?cn[0]:cn};C&&a&&typeof R=="function"&&R.length!=1&&(v=C=!1);var B=this.__chain__,G=!!this.__actions__.length,W=h&&!B,tn=v&&!G;if(!h&&C){m=tn?m:new un(this);var Y=n.apply(m,y);return Y.__actions__.push({func:Ki,args:[x],thisArg:t}),new we(Y,B)}return W&&tn?n.apply(this,y):(Y=this.thru(x),W?c?Y.value()[0]:Y.value():Y)})}),Fe(["pop","push","shift","sort","splice","unshift"],function(n){var i=Ai[n],a=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",c=/^(?:pop|shift)$/.test(n);g.prototype[n]=function(){var f=arguments;if(c&&!this.__chain__){var h=this.value();return i.apply(K(h)?h:[],f)}return this[a](function(m){return i.apply(K(m)?m:[],f)})}}),st(un.prototype,function(n,i){var a=g[i];if(a){var c=a.name+"";Sn.call(Tr,c)||(Tr[c]=[]),Tr[c].push({name:i,func:a})}}),Tr[zi(t,dn).name]=[{name:"wrapper",func:t}],un.prototype.clone=sg,un.prototype.reverse=og,un.prototype.value=ag,g.prototype.at=Bm,g.prototype.chain=Pm,g.prototype.commit=Um,g.prototype.next=$m,g.prototype.plant=Vm,g.prototype.reverse=Gm,g.prototype.toJSON=g.prototype.valueOf=g.prototype.value=qm,g.prototype.first=g.prototype.head,Mr&&(g.prototype[Mr]=Mm),g},Dr=Ud();Jt?((Jt.exports=Dr)._=Dr,Ks._=Dr):Yn._=Dr}).call(ei)})(Ts,Ts.exports);var nT=Ts.exports;const Ft=XI(nT),eT="Medium Article",tT="https://asset.brandfetch.io/idPF9SmwKn/id3BcGnhTM.png?updated=1703746251335",rT='[{"title":"omni-onboarding-backoffice-be","content":"\\n# omni-onboarding-backoffice-be\\nThis is Graphql Documentation for omni-onboarding-backoffice-be\\n## Where to go next?\\n- Star the project on [GitHub](https://github.com/magidoc-org/magidoc) \\n- Read the [documentation](https://magidoc.js.org/introduction/welcome)\\n"}]',iT="true",Tp={APP_TITLE:eT,APP_LOGO:tT,PAGES:rT,MAGIDOC_GENERATE:iT};function vE(r){return r.get(Tp)}function Ba(r,e){return r.getOrDefault(Tp,e)}function pn(r,e){if(!!!r)throw new Error(e)}function Ct(r){return typeof r=="object"&&r!==null}function Qe(r,e){if(!!!r)throw new Error(e??"Unexpected invariant triggered.")}const sT=/\r\n|[\n\r]/g;function Sa(r,e){let t=0,s=1;for(const o of r.body.matchAll(sT)){if(typeof o.index=="number"||Qe(!1),o.index>=e)break;t=o.index+o[0].length,s+=1}return{line:s,column:e+1-t}}function oT(r){return vp(r.source,Sa(r.source,r.start))}function vp(r,e){const t=r.locationOffset.column-1,s="".padStart(t)+r.body,o=e.line-1,u=r.locationOffset.line-1,l=e.line+u,p=e.line===1?t:0,d=e.column+p,S=`${r.name}:${l}:${d}
`,D=s.split(/\r\n|[\n\r]/g),T=D[o];if(T.length>120){const F=Math.floor(d/80),N=d%80,k=[];for(let L=0;L<T.length;L+=80)k.push(T.slice(L,L+80));return S+Gc([[`${l} |`,k[0]],...k.slice(1,F+1).map(L=>["|",L]),["|","^".padStart(N)],["|",k[F+1]]])}return S+Gc([[`${l-1} |`,D[o-1]],[`${l} |`,T],["|","^".padStart(d)],[`${l+1} |`,D[o+1]]])}function Gc(r){const e=r.filter(([s,o])=>o!==void 0),t=Math.max(...e.map(([s])=>s.length));return e.map(([s,o])=>s.padStart(t)+(o?" "+o:"")).join(`
`)}function aT(r){const e=r[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:r[1],positions:r[2],path:r[3],originalError:r[4],extensions:r[5]}:e}class q extends Error{constructor(e,...t){var s,o,u;const{nodes:l,source:p,positions:d,path:S,originalError:D,extensions:T}=aT(t);super(e),this.name="GraphQLError",this.path=S??void 0,this.originalError=D??void 0,this.nodes=qc(Array.isArray(l)?l:l?[l]:void 0);const F=qc((s=this.nodes)===null||s===void 0?void 0:s.map(k=>k.loc).filter(k=>k!=null));this.source=p??(F==null||(o=F[0])===null||o===void 0?void 0:o.source),this.positions=d??(F==null?void 0:F.map(k=>k.start)),this.locations=d&&p?d.map(k=>Sa(p,k)):F==null?void 0:F.map(k=>Sa(k.source,k.start));const N=Ct(D==null?void 0:D.extensions)?D==null?void 0:D.extensions:void 0;this.extensions=(u=T??N)!==null&&u!==void 0?u:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),D!=null&&D.stack?Object.defineProperty(this,"stack",{value:D.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,q):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(e+=`

`+oT(t.loc));else if(this.source&&this.locations)for(const t of this.locations)e+=`

`+vp(this.source,t);return e}toJSON(){const e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function qc(r){return r===void 0||r.length===0?void 0:r}function Wn(r,e,t){return new q(`Syntax Error: ${t}`,{source:r,positions:[e]})}class uT{constructor(e,t,s){this.start=e.start,this.end=t.end,this.startToken=e,this.endToken=t,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Ep{constructor(e,t,s,o,u,l){this.kind=e,this.start=t,this.end=s,this.line=o,this.column=u,this.value=l,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const bp={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},lT=new Set(Object.keys(bp));function jc(r){const e=r==null?void 0:r.kind;return typeof e=="string"&&lT.has(e)}var Le;(function(r){r.QUERY="query",r.MUTATION="mutation",r.SUBSCRIPTION="subscription"})(Le||(Le={}));var H;(function(r){r.QUERY="QUERY",r.MUTATION="MUTATION",r.SUBSCRIPTION="SUBSCRIPTION",r.FIELD="FIELD",r.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",r.FRAGMENT_SPREAD="FRAGMENT_SPREAD",r.INLINE_FRAGMENT="INLINE_FRAGMENT",r.VARIABLE_DEFINITION="VARIABLE_DEFINITION",r.SCHEMA="SCHEMA",r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.FIELD_DEFINITION="FIELD_DEFINITION",r.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.ENUM_VALUE="ENUM_VALUE",r.INPUT_OBJECT="INPUT_OBJECT",r.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(H||(H={}));var E;(function(r){r.NAME="Name",r.DOCUMENT="Document",r.OPERATION_DEFINITION="OperationDefinition",r.VARIABLE_DEFINITION="VariableDefinition",r.SELECTION_SET="SelectionSet",r.FIELD="Field",r.ARGUMENT="Argument",r.FRAGMENT_SPREAD="FragmentSpread",r.INLINE_FRAGMENT="InlineFragment",r.FRAGMENT_DEFINITION="FragmentDefinition",r.VARIABLE="Variable",r.INT="IntValue",r.FLOAT="FloatValue",r.STRING="StringValue",r.BOOLEAN="BooleanValue",r.NULL="NullValue",r.ENUM="EnumValue",r.LIST="ListValue",r.OBJECT="ObjectValue",r.OBJECT_FIELD="ObjectField",r.DIRECTIVE="Directive",r.NAMED_TYPE="NamedType",r.LIST_TYPE="ListType",r.NON_NULL_TYPE="NonNullType",r.SCHEMA_DEFINITION="SchemaDefinition",r.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",r.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",r.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",r.FIELD_DEFINITION="FieldDefinition",r.INPUT_VALUE_DEFINITION="InputValueDefinition",r.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",r.UNION_TYPE_DEFINITION="UnionTypeDefinition",r.ENUM_TYPE_DEFINITION="EnumTypeDefinition",r.ENUM_VALUE_DEFINITION="EnumValueDefinition",r.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",r.DIRECTIVE_DEFINITION="DirectiveDefinition",r.SCHEMA_EXTENSION="SchemaExtension",r.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",r.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",r.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",r.UNION_TYPE_EXTENSION="UnionTypeExtension",r.ENUM_TYPE_EXTENSION="EnumTypeExtension",r.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(E||(E={}));function Da(r){return r===9||r===32}function li(r){return r>=48&&r<=57}function Ap(r){return r>=97&&r<=122||r>=65&&r<=90}function Pa(r){return Ap(r)||r===95}function _p(r){return Ap(r)||li(r)||r===95}function cT(r){var e;let t=Number.MAX_SAFE_INTEGER,s=null,o=-1;for(let l=0;l<r.length;++l){var u;const p=r[l],d=pT(p);d!==p.length&&(s=(u=s)!==null&&u!==void 0?u:l,o=l,l!==0&&d<t&&(t=d))}return r.map((l,p)=>p===0?l:l.slice(t)).slice((e=s)!==null&&e!==void 0?e:0,o+1)}function pT(r){let e=0;for(;e<r.length&&Da(r.charCodeAt(e));)++e;return e}function fT(r,e){const t=r.replace(/"""/g,'\\"""'),s=t.split(/\r\n|[\n\r]/g),o=s.length===1,u=s.length>1&&s.slice(1).every(N=>N.length===0||Da(N.charCodeAt(0))),l=t.endsWith('\\"""'),p=r.endsWith('"')&&!l,d=r.endsWith("\\"),S=p||d,D=!(e!=null&&e.minimize)&&(!o||r.length>70||S||u||l);let T="";const F=o&&Da(r.charCodeAt(0));return(D&&!F||u)&&(T+=`
`),T+=t,(D||S)&&(T+=`
`),'"""'+T+'"""'}var w;(function(r){r.SOF="<SOF>",r.EOF="<EOF>",r.BANG="!",r.DOLLAR="$",r.AMP="&",r.PAREN_L="(",r.PAREN_R=")",r.SPREAD="...",r.COLON=":",r.EQUALS="=",r.AT="@",r.BRACKET_L="[",r.BRACKET_R="]",r.BRACE_L="{",r.PIPE="|",r.BRACE_R="}",r.NAME="Name",r.INT="Int",r.FLOAT="Float",r.STRING="String",r.BLOCK_STRING="BlockString",r.COMMENT="Comment"})(w||(w={}));class dT{constructor(e){const t=new Ep(w.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==w.EOF)do if(e.next)e=e.next;else{const t=hT(this,e.end);e.next=t,t.prev=e,e=t}while(e.kind===w.COMMENT);return e}}function gT(r){return r===w.BANG||r===w.DOLLAR||r===w.AMP||r===w.PAREN_L||r===w.PAREN_R||r===w.SPREAD||r===w.COLON||r===w.EQUALS||r===w.AT||r===w.BRACKET_L||r===w.BRACKET_R||r===w.BRACE_L||r===w.PIPE||r===w.BRACE_R}function Nr(r){return r>=0&&r<=55295||r>=57344&&r<=1114111}function Cs(r,e){return Rp(r.charCodeAt(e))&&Fp(r.charCodeAt(e+1))}function Rp(r){return r>=55296&&r<=56319}function Fp(r){return r>=56320&&r<=57343}function ar(r,e){const t=r.source.body.codePointAt(e);if(t===void 0)return w.EOF;if(t>=32&&t<=126){const s=String.fromCodePoint(t);return s==='"'?`'"'`:`"${s}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function Gn(r,e,t,s,o){const u=r.line,l=1+t-r.lineStart;return new Ep(e,t,s,u,l,o)}function hT(r,e){const t=r.source.body,s=t.length;let o=e;for(;o<s;){const u=t.charCodeAt(o);switch(u){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++r.line,r.lineStart=o;continue;case 13:t.charCodeAt(o+1)===10?o+=2:++o,++r.line,r.lineStart=o;continue;case 35:return mT(r,o);case 33:return Gn(r,w.BANG,o,o+1);case 36:return Gn(r,w.DOLLAR,o,o+1);case 38:return Gn(r,w.AMP,o,o+1);case 40:return Gn(r,w.PAREN_L,o,o+1);case 41:return Gn(r,w.PAREN_R,o,o+1);case 46:if(t.charCodeAt(o+1)===46&&t.charCodeAt(o+2)===46)return Gn(r,w.SPREAD,o,o+3);break;case 58:return Gn(r,w.COLON,o,o+1);case 61:return Gn(r,w.EQUALS,o,o+1);case 64:return Gn(r,w.AT,o,o+1);case 91:return Gn(r,w.BRACKET_L,o,o+1);case 93:return Gn(r,w.BRACKET_R,o,o+1);case 123:return Gn(r,w.BRACE_L,o,o+1);case 124:return Gn(r,w.PIPE,o,o+1);case 125:return Gn(r,w.BRACE_R,o,o+1);case 34:return t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34?vT(r,o):DT(r,o)}if(li(u)||u===45)return ST(r,o,u);if(Pa(u))return ET(r,o);throw Wn(r.source,o,u===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Nr(u)||Cs(t,o)?`Unexpected character: ${ar(r,o)}.`:`Invalid character: ${ar(r,o)}.`)}return Gn(r,w.EOF,s,s)}function mT(r,e){const t=r.source.body,s=t.length;let o=e+1;for(;o<s;){const u=t.charCodeAt(o);if(u===10||u===13)break;if(Nr(u))++o;else if(Cs(t,o))o+=2;else break}return Gn(r,w.COMMENT,e,o,t.slice(e+1,o))}function ST(r,e,t){const s=r.source.body;let o=e,u=t,l=!1;if(u===45&&(u=s.charCodeAt(++o)),u===48){if(u=s.charCodeAt(++o),li(u))throw Wn(r.source,o,`Invalid number, unexpected digit after 0: ${ar(r,o)}.`)}else o=ua(r,o,u),u=s.charCodeAt(o);if(u===46&&(l=!0,u=s.charCodeAt(++o),o=ua(r,o,u),u=s.charCodeAt(o)),(u===69||u===101)&&(l=!0,u=s.charCodeAt(++o),(u===43||u===45)&&(u=s.charCodeAt(++o)),o=ua(r,o,u),u=s.charCodeAt(o)),u===46||Pa(u))throw Wn(r.source,o,`Invalid number, expected digit but got: ${ar(r,o)}.`);return Gn(r,l?w.FLOAT:w.INT,e,o,s.slice(e,o))}function ua(r,e,t){if(!li(t))throw Wn(r.source,e,`Invalid number, expected digit but got: ${ar(r,e)}.`);const s=r.source.body;let o=e+1;for(;li(s.charCodeAt(o));)++o;return o}function DT(r,e){const t=r.source.body,s=t.length;let o=e+1,u=o,l="";for(;o<s;){const p=t.charCodeAt(o);if(p===34)return l+=t.slice(u,o),Gn(r,w.STRING,e,o+1,l);if(p===92){l+=t.slice(u,o);const d=t.charCodeAt(o+1)===117?t.charCodeAt(o+2)===123?yT(r,o):IT(r,o):TT(r,o);l+=d.value,o+=d.size,u=o;continue}if(p===10||p===13)break;if(Nr(p))++o;else if(Cs(t,o))o+=2;else throw Wn(r.source,o,`Invalid character within String: ${ar(r,o)}.`)}throw Wn(r.source,o,"Unterminated string.")}function yT(r,e){const t=r.source.body;let s=0,o=3;for(;o<12;){const u=t.charCodeAt(e+o++);if(u===125){if(o<5||!Nr(s))break;return{value:String.fromCodePoint(s),size:o}}if(s=s<<4|ti(u),s<0)break}throw Wn(r.source,e,`Invalid Unicode escape sequence: "${t.slice(e,e+o)}".`)}function IT(r,e){const t=r.source.body,s=Hc(t,e+2);if(Nr(s))return{value:String.fromCodePoint(s),size:6};if(Rp(s)&&t.charCodeAt(e+6)===92&&t.charCodeAt(e+7)===117){const o=Hc(t,e+8);if(Fp(o))return{value:String.fromCodePoint(s,o),size:12}}throw Wn(r.source,e,`Invalid Unicode escape sequence: "${t.slice(e,e+6)}".`)}function Hc(r,e){return ti(r.charCodeAt(e))<<12|ti(r.charCodeAt(e+1))<<8|ti(r.charCodeAt(e+2))<<4|ti(r.charCodeAt(e+3))}function ti(r){return r>=48&&r<=57?r-48:r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:-1}function TT(r,e){const t=r.source.body;switch(t.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Wn(r.source,e,`Invalid character escape sequence: "${t.slice(e,e+2)}".`)}function vT(r,e){const t=r.source.body,s=t.length;let o=r.lineStart,u=e+3,l=u,p="";const d=[];for(;u<s;){const S=t.charCodeAt(u);if(S===34&&t.charCodeAt(u+1)===34&&t.charCodeAt(u+2)===34){p+=t.slice(l,u),d.push(p);const D=Gn(r,w.BLOCK_STRING,e,u+3,cT(d).join(`
`));return r.line+=d.length-1,r.lineStart=o,D}if(S===92&&t.charCodeAt(u+1)===34&&t.charCodeAt(u+2)===34&&t.charCodeAt(u+3)===34){p+=t.slice(l,u),l=u+1,u+=4;continue}if(S===10||S===13){p+=t.slice(l,u),d.push(p),S===13&&t.charCodeAt(u+1)===10?u+=2:++u,p="",l=u,o=u;continue}if(Nr(S))++u;else if(Cs(t,u))u+=2;else throw Wn(r.source,u,`Invalid character within String: ${ar(r,u)}.`)}throw Wn(r.source,u,"Unterminated string.")}function ET(r,e){const t=r.source.body,s=t.length;let o=e+1;for(;o<s;){const u=t.charCodeAt(o);if(_p(u))++o;else break}return Gn(r,w.NAME,e,o,t.slice(e,o))}const bT=10,Cp=2;function j(r){return ws(r,[])}function ws(r,e){switch(typeof r){case"string":return JSON.stringify(r);case"function":return r.name?`[function ${r.name}]`:"[function]";case"object":return AT(r,e);default:return String(r)}}function AT(r,e){if(r===null)return"null";if(e.includes(r))return"[Circular]";const t=[...e,r];if(_T(r)){const s=r.toJSON();if(s!==r)return typeof s=="string"?s:ws(s,t)}else if(Array.isArray(r))return FT(r,t);return RT(r,t)}function _T(r){return typeof r.toJSON=="function"}function RT(r,e){const t=Object.entries(r);return t.length===0?"{}":e.length>Cp?"["+CT(r)+"]":"{ "+t.map(([o,u])=>o+": "+ws(u,e)).join(", ")+" }"}function FT(r,e){if(r.length===0)return"[]";if(e.length>Cp)return"[Array]";const t=Math.min(bT,r.length),s=r.length-t,o=[];for(let u=0;u<t;++u)o.push(ws(r[u],e));return s===1?o.push("... 1 more item"):s>1&&o.push(`... ${s} more items`),"["+o.join(", ")+"]"}function CT(r){const e=Object.prototype.toString.call(r).replace(/^\[object /,"").replace(/]$/,"");if(e==="Object"&&typeof r.constructor=="function"){const t=r.constructor.name;if(typeof t=="string"&&t!=="")return t}return e}const ft=globalThis.process?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;if(typeof e=="object"&&e!==null){var s;const o=t.prototype[Symbol.toStringTag],u=Symbol.toStringTag in e?e[Symbol.toStringTag]:(s=e.constructor)===null||s===void 0?void 0:s.name;if(o===u){const l=j(e);throw new Error(`Cannot use ${o} "${l}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class wp{constructor(e,t="GraphQL request",s={line:1,column:1}){typeof e=="string"||pn(!1,`Body must be a string. Received: ${j(e)}.`),this.body=e,this.name=t,this.locationOffset=s,this.locationOffset.line>0||pn(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||pn(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function wT(r){return ft(r,wp)}function NT(r,e){return new Np(r,e).parseDocument()}function OT(r,e){const t=new Np(r,e);t.expectToken(w.SOF);const s=t.parseValueLiteral(!1);return t.expectToken(w.EOF),s}class Np{constructor(e,t={}){const s=wT(e)?e:new wp(e);this._lexer=new dT(s),this._options=t,this._tokenCounter=0}parseName(){const e=this.expectToken(w.NAME);return this.node(e,{kind:E.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:E.DOCUMENT,definitions:this.many(w.SOF,this.parseDefinition,w.EOF)})}parseDefinition(){if(this.peek(w.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===w.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw Wn(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(w.BRACE_L))return this.node(e,{kind:E.OPERATION_DEFINITION,operation:Le.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let s;return this.peek(w.NAME)&&(s=this.parseName()),this.node(e,{kind:E.OPERATION_DEFINITION,operation:t,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(w.NAME);switch(e.value){case"query":return Le.QUERY;case"mutation":return Le.MUTATION;case"subscription":return Le.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(w.PAREN_L,this.parseVariableDefinition,w.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:E.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(w.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(w.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(w.DOLLAR),this.node(e,{kind:E.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:E.SELECTION_SET,selections:this.many(w.BRACE_L,this.parseSelection,w.BRACE_R)})}parseSelection(){return this.peek(w.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName();let s,o;return this.expectOptionalToken(w.COLON)?(s=t,o=this.parseName()):o=t,this.node(e,{kind:E.FIELD,alias:s,name:o,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(w.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(w.PAREN_L,t,w.PAREN_R)}parseArgument(e=!1){const t=this._lexer.token,s=this.parseName();return this.expectToken(w.COLON),this.node(t,{kind:E.ARGUMENT,name:s,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(w.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(w.NAME)?this.node(e,{kind:E.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:E.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:E.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:E.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const t=this._lexer.token;switch(t.kind){case w.BRACKET_L:return this.parseList(e);case w.BRACE_L:return this.parseObject(e);case w.INT:return this.advanceLexer(),this.node(t,{kind:E.INT,value:t.value});case w.FLOAT:return this.advanceLexer(),this.node(t,{kind:E.FLOAT,value:t.value});case w.STRING:case w.BLOCK_STRING:return this.parseStringLiteral();case w.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:E.BOOLEAN,value:!0});case"false":return this.node(t,{kind:E.BOOLEAN,value:!1});case"null":return this.node(t,{kind:E.NULL});default:return this.node(t,{kind:E.ENUM,value:t.value})}case w.DOLLAR:if(e)if(this.expectToken(w.DOLLAR),this._lexer.token.kind===w.NAME){const s=this._lexer.token.value;throw Wn(this._lexer.source,t.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:E.STRING,value:e.value,block:e.kind===w.BLOCK_STRING})}parseList(e){const t=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:E.LIST,values:this.any(w.BRACKET_L,t,w.BRACKET_R)})}parseObject(e){const t=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:E.OBJECT,fields:this.any(w.BRACE_L,t,w.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,s=this.parseName();return this.expectToken(w.COLON),this.node(t,{kind:E.OBJECT_FIELD,name:s,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[];for(;this.peek(w.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token;return this.expectToken(w.AT),this.node(t,{kind:E.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let t;if(this.expectOptionalToken(w.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(w.BRACKET_R),t=this.node(e,{kind:E.LIST_TYPE,type:s})}else t=this.parseNamedType();return this.expectOptionalToken(w.BANG)?this.node(e,{kind:E.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:E.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(w.STRING)||this.peek(w.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),o=this.many(w.BRACE_L,this.parseOperationTypeDefinition,w.BRACE_R);return this.node(e,{kind:E.SCHEMA_DEFINITION,description:t,directives:s,operationTypes:o})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType();this.expectToken(w.COLON);const s=this.parseNamedType();return this.node(e,{kind:E.OPERATION_TYPE_DEFINITION,operation:t,type:s})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),o=this.parseConstDirectives();return this.node(e,{kind:E.SCALAR_TYPE_DEFINITION,description:t,name:s,directives:o})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),o=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(e,{kind:E.OBJECT_TYPE_DEFINITION,description:t,name:s,interfaces:o,directives:u,fields:l})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(w.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(w.BRACE_L,this.parseFieldDefinition,w.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),s=this.parseName(),o=this.parseArgumentDefs();this.expectToken(w.COLON);const u=this.parseTypeReference(),l=this.parseConstDirectives();return this.node(e,{kind:E.FIELD_DEFINITION,description:t,name:s,arguments:o,type:u,directives:l})}parseArgumentDefs(){return this.optionalMany(w.PAREN_L,this.parseInputValueDef,w.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),s=this.parseName();this.expectToken(w.COLON);const o=this.parseTypeReference();let u;this.expectOptionalToken(w.EQUALS)&&(u=this.parseConstValueLiteral());const l=this.parseConstDirectives();return this.node(e,{kind:E.INPUT_VALUE_DEFINITION,description:t,name:s,type:o,defaultValue:u,directives:l})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),o=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(e,{kind:E.INTERFACE_TYPE_DEFINITION,description:t,name:s,interfaces:o,directives:u,fields:l})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),o=this.parseConstDirectives(),u=this.parseUnionMemberTypes();return this.node(e,{kind:E.UNION_TYPE_DEFINITION,description:t,name:s,directives:o,types:u})}parseUnionMemberTypes(){return this.expectOptionalToken(w.EQUALS)?this.delimitedMany(w.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),o=this.parseConstDirectives(),u=this.parseEnumValuesDefinition();return this.node(e,{kind:E.ENUM_TYPE_DEFINITION,description:t,name:s,directives:o,values:u})}parseEnumValuesDefinition(){return this.optionalMany(w.BRACE_L,this.parseEnumValueDefinition,w.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),s=this.parseEnumValueName(),o=this.parseConstDirectives();return this.node(e,{kind:E.ENUM_VALUE_DEFINITION,description:t,name:s,directives:o})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Wn(this._lexer.source,this._lexer.token.start,`${fs(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),o=this.parseConstDirectives(),u=this.parseInputFieldsDefinition();return this.node(e,{kind:E.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:s,directives:o,fields:u})}parseInputFieldsDefinition(){return this.optionalMany(w.BRACE_L,this.parseInputValueDef,w.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===w.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),s=this.optionalMany(w.BRACE_L,this.parseOperationTypeDefinition,w.BRACE_R);if(t.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:E.SCHEMA_EXTENSION,directives:t,operationTypes:s})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(e,{kind:E.SCALAR_TYPE_EXTENSION,name:t,directives:s})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&o.length===0&&u.length===0)throw this.unexpected();return this.node(e,{kind:E.OBJECT_TYPE_EXTENSION,name:t,interfaces:s,directives:o,fields:u})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&o.length===0&&u.length===0)throw this.unexpected();return this.node(e,{kind:E.INTERFACE_TYPE_EXTENSION,name:t,interfaces:s,directives:o,fields:u})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseUnionMemberTypes();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:E.UNION_TYPE_EXTENSION,name:t,directives:s,types:o})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:E.ENUM_TYPE_EXTENSION,name:t,directives:s,values:o})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(e,{kind:E.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:s,fields:o})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(w.AT);const s=this.parseName(),o=this.parseArgumentDefs(),u=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const l=this.parseDirectiveLocations();return this.node(e,{kind:E.DIRECTIVE_DEFINITION,description:t,name:s,arguments:o,repeatable:u,locations:l})}parseDirectiveLocations(){return this.delimitedMany(w.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(H,t.value))return t;throw this.unexpected(e)}node(e,t){return this._options.noLocation!==!0&&(t.loc=new uT(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw Wn(this._lexer.source,t.start,`Expected ${Op(e)}, found ${fs(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){const t=this._lexer.token;if(t.kind===w.NAME&&t.value===e)this.advanceLexer();else throw Wn(this._lexer.source,t.start,`Expected "${e}", found ${fs(t)}.`)}expectOptionalKeyword(e){const t=this._lexer.token;return t.kind===w.NAME&&t.value===e?(this.advanceLexer(),!0):!1}unexpected(e){const t=e??this._lexer.token;return Wn(this._lexer.source,t.start,`Unexpected ${fs(t)}.`)}any(e,t,s){this.expectToken(e);const o=[];for(;!this.expectOptionalToken(s);)o.push(t.call(this));return o}optionalMany(e,t,s){if(this.expectOptionalToken(e)){const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(s));return o}return[]}many(e,t,s){this.expectToken(e);const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(s));return o}delimitedMany(e,t){this.expectOptionalToken(e);const s=[];do s.push(t.call(this));while(this.expectOptionalToken(e));return s}advanceLexer(){const{maxTokens:e}=this._options,t=this._lexer.advance();if(e!==void 0&&t.kind!==w.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw Wn(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function fs(r){const e=r.value;return Op(r.kind)+(e!=null?` "${e}"`:"")}function Op(r){return gT(r)?`"${r}"`:r}const xT=5;function Ns(r,e){const[t,s]=e?[r,e]:[void 0,r];let o=" Did you mean ";t&&(o+=t+" ");const u=s.map(d=>`"${d}"`);switch(u.length){case 0:return"";case 1:return o+u[0]+"?";case 2:return o+u[0]+" or "+u[1]+"?"}const l=u.slice(0,xT),p=l.pop();return o+l.join(", ")+", or "+p+"?"}function zc(r){return r}function Cr(r,e){const t=Object.create(null);for(const s of r)t[e(s)]=s;return t}function sr(r,e,t){const s=Object.create(null);for(const o of r)s[e(o)]=t(o);return s}function bt(r,e){const t=Object.create(null);for(const s of Object.keys(r))t[s]=e(r[s],s);return t}function kT(r,e){let t=0,s=0;for(;t<r.length&&s<e.length;){let o=r.charCodeAt(t),u=e.charCodeAt(s);if(ds(o)&&ds(u)){let l=0;do++t,l=l*10+o-ya,o=r.charCodeAt(t);while(ds(o)&&l>0);let p=0;do++s,p=p*10+u-ya,u=e.charCodeAt(s);while(ds(u)&&p>0);if(l<p)return-1;if(l>p)return 1}else{if(o<u)return-1;if(o>u)return 1;++t,++s}}return r.length-e.length}const ya=48,LT=57;function ds(r){return!isNaN(r)&&ya<=r&&r<=LT}function Os(r,e){const t=Object.create(null),s=new BT(r),o=Math.floor(r.length*.4)+1;for(const u of e){const l=s.measure(u,o);l!==void 0&&(t[u]=l)}return Object.keys(t).sort((u,l)=>{const p=t[u]-t[l];return p!==0?p:kT(u,l)})}class BT{constructor(e){this._input=e,this._inputLowerCase=e.toLowerCase(),this._inputArray=Wc(this._inputLowerCase),this._rows=[new Array(e.length+1).fill(0),new Array(e.length+1).fill(0),new Array(e.length+1).fill(0)]}measure(e,t){if(this._input===e)return 0;const s=e.toLowerCase();if(this._inputLowerCase===s)return 1;let o=Wc(s),u=this._inputArray;if(o.length<u.length){const D=o;o=u,u=D}const l=o.length,p=u.length;if(l-p>t)return;const d=this._rows;for(let D=0;D<=p;D++)d[0][D]=D;for(let D=1;D<=l;D++){const T=d[(D-1)%3],F=d[D%3];let N=F[0]=D;for(let k=1;k<=p;k++){const L=o[D-1]===u[k-1]?0:1;let Q=Math.min(T[k]+1,F[k-1]+1,T[k-1]+L);if(D>1&&k>1&&o[D-1]===u[k-2]&&o[D-2]===u[k-1]){const dn=d[(D-2)%3][k-2];Q=Math.min(Q,dn+1)}Q<N&&(N=Q),F[k]=Q}if(N>t)return}const S=d[l%3][p];return S<=t?S:void 0}}function Wc(r){const e=r.length,t=new Array(e);for(let s=0;s<e;++s)t[s]=r.charCodeAt(s);return t}function Pe(r){if(r==null)return Object.create(null);if(Object.getPrototypeOf(r)===null)return r;const e=Object.create(null);for(const[t,s]of Object.entries(r))e[t]=s;return e}function PT(r){return`"${r.replace(UT,$T)}"`}const UT=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function $T(r){return MT[r.charCodeAt(0)]}const MT=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],ri=Object.freeze({});function xp(r,e,t=bp){const s=new Map;for(const dn of Object.values(E))s.set(dn,kp(e,dn));let o,u=Array.isArray(r),l=[r],p=-1,d=[],S=r,D,T;const F=[],N=[];do{p++;const dn=p===l.length,Vn=dn&&d.length!==0;if(dn){if(D=N.length===0?void 0:F[F.length-1],S=T,T=N.pop(),Vn)if(u){S=S.slice();let Cn=0;for(const[xn,te]of d){const Xn=xn-Cn;te===null?(S.splice(Xn,1),Cn++):S[Xn]=te}}else{S=Object.defineProperties({},Object.getOwnPropertyDescriptors(S));for(const[Cn,xn]of d)S[Cn]=xn}p=o.index,l=o.keys,d=o.edits,u=o.inArray,o=o.prev}else if(T){if(D=u?p:l[p],S=T[D],S==null)continue;F.push(D)}let En;if(!Array.isArray(S)){var k,L;jc(S)||pn(!1,`Invalid AST Node: ${j(S)}.`);const Cn=dn?(k=s.get(S.kind))===null||k===void 0?void 0:k.leave:(L=s.get(S.kind))===null||L===void 0?void 0:L.enter;if(En=Cn==null?void 0:Cn.call(e,S,D,T,F,N),En===ri)break;if(En===!1){if(!dn){F.pop();continue}}else if(En!==void 0&&(d.push([D,En]),!dn))if(jc(En))S=En;else{F.pop();continue}}if(En===void 0&&Vn&&d.push([D,S]),dn)F.pop();else{var Q;o={inArray:u,index:p,keys:l,edits:d,prev:o},u=Array.isArray(S),l=u?S:(Q=t[S.kind])!==null&&Q!==void 0?Q:[],p=-1,d=[],T&&N.push(T),T=S}}while(o!==void 0);return d.length!==0?d[d.length-1][1]:r}function VT(r){const e=new Array(r.length).fill(null),t=Object.create(null);for(const s of Object.values(E)){let o=!1;const u=new Array(r.length).fill(void 0),l=new Array(r.length).fill(void 0);for(let d=0;d<r.length;++d){const{enter:S,leave:D}=kp(r[d],s);o||(o=S!=null||D!=null),u[d]=S,l[d]=D}if(!o)continue;const p={enter(...d){const S=d[0];for(let T=0;T<r.length;T++)if(e[T]===null){var D;const F=(D=u[T])===null||D===void 0?void 0:D.apply(r[T],d);if(F===!1)e[T]=S;else if(F===ri)e[T]=ri;else if(F!==void 0)return F}},leave(...d){const S=d[0];for(let T=0;T<r.length;T++)if(e[T]===null){var D;const F=(D=l[T])===null||D===void 0?void 0:D.apply(r[T],d);if(F===ri)e[T]=ri;else if(F!==void 0&&F!==!1)return F}else e[T]===S&&(e[T]=null)}};t[s]=p}return t}function kp(r,e){const t=r[e];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:r.enter,leave:r.leave}}function ct(r){return xp(r,qT)}const GT=80,qT={Name:{leave:r=>r.value},Variable:{leave:r=>"$"+r.name},Document:{leave:r=>V(r.definitions,`

`)},OperationDefinition:{leave(r){const e=ln("(",V(r.variableDefinitions,", "),")"),t=V([r.operation,V([r.name,e]),V(r.directives," ")]," ");return(t==="query"?"":t+" ")+r.selectionSet}},VariableDefinition:{leave:({variable:r,type:e,defaultValue:t,directives:s})=>r+": "+e+ln(" = ",t)+ln(" ",V(s," "))},SelectionSet:{leave:({selections:r})=>He(r)},Field:{leave({alias:r,name:e,arguments:t,directives:s,selectionSet:o}){const u=ln("",r,": ")+e;let l=u+ln("(",V(t,", "),")");return l.length>GT&&(l=u+ln(`(
`,ms(V(t,`
`)),`
)`)),V([l,V(s," "),o]," ")}},Argument:{leave:({name:r,value:e})=>r+": "+e},FragmentSpread:{leave:({name:r,directives:e})=>"..."+r+ln(" ",V(e," "))},InlineFragment:{leave:({typeCondition:r,directives:e,selectionSet:t})=>V(["...",ln("on ",r),V(e," "),t]," ")},FragmentDefinition:{leave:({name:r,typeCondition:e,variableDefinitions:t,directives:s,selectionSet:o})=>`fragment ${r}${ln("(",V(t,", "),")")} on ${e} ${ln("",V(s," ")," ")}`+o},IntValue:{leave:({value:r})=>r},FloatValue:{leave:({value:r})=>r},StringValue:{leave:({value:r,block:e})=>e?fT(r):PT(r)},BooleanValue:{leave:({value:r})=>r?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:r})=>r},ListValue:{leave:({values:r})=>"["+V(r,", ")+"]"},ObjectValue:{leave:({fields:r})=>"{"+V(r,", ")+"}"},ObjectField:{leave:({name:r,value:e})=>r+": "+e},Directive:{leave:({name:r,arguments:e})=>"@"+r+ln("(",V(e,", "),")")},NamedType:{leave:({name:r})=>r},ListType:{leave:({type:r})=>"["+r+"]"},NonNullType:{leave:({type:r})=>r+"!"},SchemaDefinition:{leave:({description:r,directives:e,operationTypes:t})=>ln("",r,`
`)+V(["schema",V(e," "),He(t)]," ")},OperationTypeDefinition:{leave:({operation:r,type:e})=>r+": "+e},ScalarTypeDefinition:{leave:({description:r,name:e,directives:t})=>ln("",r,`
`)+V(["scalar",e,V(t," ")]," ")},ObjectTypeDefinition:{leave:({description:r,name:e,interfaces:t,directives:s,fields:o})=>ln("",r,`
`)+V(["type",e,ln("implements ",V(t," & ")),V(s," "),He(o)]," ")},FieldDefinition:{leave:({description:r,name:e,arguments:t,type:s,directives:o})=>ln("",r,`
`)+e+(Yc(t)?ln(`(
`,ms(V(t,`
`)),`
)`):ln("(",V(t,", "),")"))+": "+s+ln(" ",V(o," "))},InputValueDefinition:{leave:({description:r,name:e,type:t,defaultValue:s,directives:o})=>ln("",r,`
`)+V([e+": "+t,ln("= ",s),V(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:r,name:e,interfaces:t,directives:s,fields:o})=>ln("",r,`
`)+V(["interface",e,ln("implements ",V(t," & ")),V(s," "),He(o)]," ")},UnionTypeDefinition:{leave:({description:r,name:e,directives:t,types:s})=>ln("",r,`
`)+V(["union",e,V(t," "),ln("= ",V(s," | "))]," ")},EnumTypeDefinition:{leave:({description:r,name:e,directives:t,values:s})=>ln("",r,`
`)+V(["enum",e,V(t," "),He(s)]," ")},EnumValueDefinition:{leave:({description:r,name:e,directives:t})=>ln("",r,`
`)+V([e,V(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:r,name:e,directives:t,fields:s})=>ln("",r,`
`)+V(["input",e,V(t," "),He(s)]," ")},DirectiveDefinition:{leave:({description:r,name:e,arguments:t,repeatable:s,locations:o})=>ln("",r,`
`)+"directive @"+e+(Yc(t)?ln(`(
`,ms(V(t,`
`)),`
)`):ln("(",V(t,", "),")"))+(s?" repeatable":"")+" on "+V(o," | ")},SchemaExtension:{leave:({directives:r,operationTypes:e})=>V(["extend schema",V(r," "),He(e)]," ")},ScalarTypeExtension:{leave:({name:r,directives:e})=>V(["extend scalar",r,V(e," ")]," ")},ObjectTypeExtension:{leave:({name:r,interfaces:e,directives:t,fields:s})=>V(["extend type",r,ln("implements ",V(e," & ")),V(t," "),He(s)]," ")},InterfaceTypeExtension:{leave:({name:r,interfaces:e,directives:t,fields:s})=>V(["extend interface",r,ln("implements ",V(e," & ")),V(t," "),He(s)]," ")},UnionTypeExtension:{leave:({name:r,directives:e,types:t})=>V(["extend union",r,V(e," "),ln("= ",V(t," | "))]," ")},EnumTypeExtension:{leave:({name:r,directives:e,values:t})=>V(["extend enum",r,V(e," "),He(t)]," ")},InputObjectTypeExtension:{leave:({name:r,directives:e,fields:t})=>V(["extend input",r,V(e," "),He(t)]," ")}};function V(r,e=""){var t;return(t=r==null?void 0:r.filter(s=>s).join(e))!==null&&t!==void 0?t:""}function He(r){return ln(`{
`,ms(V(r,`
`)),`
}`)}function ln(r,e,t=""){return e!=null&&e!==""?r+e+t:""}function ms(r){return ln("  ",r.replace(/\n/g,`
  `))}function Yc(r){var e;return(e=r==null?void 0:r.some(t=>t.includes(`
`)))!==null&&e!==void 0?e:!1}function Ia(r,e){switch(r.kind){case E.NULL:return null;case E.INT:return parseInt(r.value,10);case E.FLOAT:return parseFloat(r.value);case E.STRING:case E.ENUM:case E.BOOLEAN:return r.value;case E.LIST:return r.values.map(t=>Ia(t,e));case E.OBJECT:return sr(r.fields,t=>t.name.value,t=>Ia(t.value,e));case E.VARIABLE:return e==null?void 0:e[r.name.value]}}function rt(r){if(r!=null||pn(!1,"Must provide name."),typeof r=="string"||pn(!1,"Expected name to be a string."),r.length===0)throw new q("Expected name to be a non-empty string.");for(let e=1;e<r.length;++e)if(!_p(r.charCodeAt(e)))throw new q(`Names must only contain [_a-zA-Z0-9] but "${r}" does not.`);if(!Pa(r.charCodeAt(0)))throw new q(`Names must start with [_a-zA-Z] but "${r}" does not.`);return r}function jT(r){if(r==="true"||r==="false"||r==="null")throw new q(`Enum values cannot be named: ${r}`);return rt(r)}function Ua(r){return Wt(r)||me(r)||ue(r)||Je(r)||Xe(r)||Ze(r)||cr(r)||ae(r)}function Wt(r){return ft(r,wt)}function me(r){return ft(r,pt)}function HT(r){if(!me(r))throw new Error(`Expected ${j(r)} to be a GraphQL Object type.`);return r}function ue(r){return ft(r,vs)}function zT(r){if(!ue(r))throw new Error(`Expected ${j(r)} to be a GraphQL Interface type.`);return r}function Je(r){return ft(r,Es)}function Xe(r){return ft(r,wr)}function Ze(r){return ft(r,bs)}function cr(r){return ft(r,he)}function ae(r){return ft(r,on)}function Lp(r){return Wt(r)||Xe(r)||Ze(r)||$a(r)&&Lp(r.ofType)}function Bp(r){return Wt(r)||me(r)||ue(r)||Je(r)||Xe(r)||$a(r)&&Bp(r.ofType)}function Pp(r){return Wt(r)||Xe(r)}function WT(r){return ue(r)||Je(r)}class he{constructor(e){Ua(e)||pn(!1,`Expected ${j(e)} to be a GraphQL type.`),this.ofType=e}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class on{constructor(e){Up(e)||pn(!1,`Expected ${j(e)} to be a GraphQL nullable type.`),this.ofType=e}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function $a(r){return cr(r)||ae(r)}function Up(r){return Ua(r)&&!ae(r)}function YT(r){if(!Up(r))throw new Error(`Expected ${j(r)} to be a GraphQL nullable type.`);return r}function EE(r){return Wt(r)||me(r)||ue(r)||Je(r)||Xe(r)||Ze(r)}function QT(r){if(r){let e=r;for(;$a(e);)e=e.ofType;return e}}function $p(r){return typeof r=="function"?r():r}function Mp(r){return typeof r=="function"?r():r}class wt{constructor(e){var t,s,o,u;const l=(t=e.parseValue)!==null&&t!==void 0?t:zc;this.name=rt(e.name),this.description=e.description,this.specifiedByURL=e.specifiedByURL,this.serialize=(s=e.serialize)!==null&&s!==void 0?s:zc,this.parseValue=l,this.parseLiteral=(o=e.parseLiteral)!==null&&o!==void 0?o:(p,d)=>l(Ia(p,d)),this.extensions=Pe(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(u=e.extensionASTNodes)!==null&&u!==void 0?u:[],e.specifiedByURL==null||typeof e.specifiedByURL=="string"||pn(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${j(e.specifiedByURL)}.`),e.serialize==null||typeof e.serialize=="function"||pn(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),e.parseLiteral&&(typeof e.parseValue=="function"&&typeof e.parseLiteral=="function"||pn(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class pt{constructor(e){var t;this.name=rt(e.name),this.description=e.description,this.isTypeOf=e.isTypeOf,this.extensions=Pe(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>Gp(e),this._interfaces=()=>Vp(e),e.isTypeOf==null||typeof e.isTypeOf=="function"||pn(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${j(e.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:jp(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Vp(r){var e;const t=$p((e=r.interfaces)!==null&&e!==void 0?e:[]);return Array.isArray(t)||pn(!1,`${r.name} interfaces must be an Array or a function which returns an Array.`),t}function Gp(r){const e=Mp(r.fields);return Fr(e)||pn(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),bt(e,(t,s)=>{var o;Fr(t)||pn(!1,`${r.name}.${s} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||pn(!1,`${r.name}.${s} field resolver must be a function if provided, but got: ${j(t.resolve)}.`);const u=(o=t.args)!==null&&o!==void 0?o:{};return Fr(u)||pn(!1,`${r.name}.${s} args must be an object with argument names as keys.`),{name:rt(s),description:t.description,type:t.type,args:qp(u),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Pe(t.extensions),astNode:t.astNode}})}function qp(r){return Object.entries(r).map(([e,t])=>({name:rt(e),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Pe(t.extensions),astNode:t.astNode}))}function Fr(r){return Ct(r)&&!Array.isArray(r)}function jp(r){return bt(r,e=>({description:e.description,type:e.type,args:Hp(e.args),resolve:e.resolve,subscribe:e.subscribe,deprecationReason:e.deprecationReason,extensions:e.extensions,astNode:e.astNode}))}function Hp(r){return sr(r,e=>e.name,e=>({description:e.description,type:e.type,defaultValue:e.defaultValue,deprecationReason:e.deprecationReason,extensions:e.extensions,astNode:e.astNode}))}function JT(r){return ae(r.type)&&r.defaultValue===void 0}class vs{constructor(e){var t;this.name=rt(e.name),this.description=e.description,this.resolveType=e.resolveType,this.extensions=Pe(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=Gp.bind(void 0,e),this._interfaces=Vp.bind(void 0,e),e.resolveType==null||typeof e.resolveType=="function"||pn(!1,`${this.name} must provide "resolveType" as a function, but got: ${j(e.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:jp(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Es{constructor(e){var t;this.name=rt(e.name),this.description=e.description,this.resolveType=e.resolveType,this.extensions=Pe(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=XT.bind(void 0,e),e.resolveType==null||typeof e.resolveType=="function"||pn(!1,`${this.name} must provide "resolveType" as a function, but got: ${j(e.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function XT(r){const e=$p(r.types);return Array.isArray(e)||pn(!1,`Must provide Array of types or a function which returns such an array for Union ${r.name}.`),e}class wr{constructor(e){var t;this.name=rt(e.name),this.description=e.description,this.extensions=Pe(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=ZT(this.name,e.values),this._valueLookup=new Map(this._values.map(s=>[s.value,s])),this._nameLookup=Cr(this._values,s=>s.name)}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return this._values}getValue(e){return this._nameLookup[e]}serialize(e){const t=this._valueLookup.get(e);if(t===void 0)throw new q(`Enum "${this.name}" cannot represent value: ${j(e)}`);return t.name}parseValue(e){if(typeof e!="string"){const s=j(e);throw new q(`Enum "${this.name}" cannot represent non-string value: ${s}.`+gs(this,s))}const t=this.getValue(e);if(t==null)throw new q(`Value "${e}" does not exist in "${this.name}" enum.`+gs(this,e));return t.value}parseLiteral(e,t){if(e.kind!==E.ENUM){const o=ct(e);throw new q(`Enum "${this.name}" cannot represent non-enum value: ${o}.`+gs(this,o),{nodes:e})}const s=this.getValue(e.value);if(s==null){const o=ct(e);throw new q(`Value "${o}" does not exist in "${this.name}" enum.`+gs(this,o),{nodes:e})}return s.value}toConfig(){const e=sr(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:e,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function gs(r,e){const t=r.getValues().map(o=>o.name),s=Os(e,t);return Ns("the enum value",s)}function ZT(r,e){return Fr(e)||pn(!1,`${r} values must be an object with value names as keys.`),Object.entries(e).map(([t,s])=>(Fr(s)||pn(!1,`${r}.${t} must refer to an object with a "value" key representing an internal value but got: ${j(s)}.`),{name:jT(t),description:s.description,value:s.value!==void 0?s.value:t,deprecationReason:s.deprecationReason,extensions:Pe(s.extensions),astNode:s.astNode}))}class bs{constructor(e){var t;this.name=rt(e.name),this.description=e.description,this.extensions=Pe(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=KT.bind(void 0,e)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const e=bt(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:e,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function KT(r){const e=Mp(r.fields);return Fr(e)||pn(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),bt(e,(t,s)=>(!("resolve"in t)||pn(!1,`${r.name}.${s} field has a resolve property, but Input Types cannot define resolvers.`),{name:rt(s),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Pe(t.extensions),astNode:t.astNode}))}const la=2147483647,ca=-2147483648,nv=new wt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(r){const e=gi(r);if(typeof e=="boolean")return e?1:0;let t=e;if(typeof e=="string"&&e!==""&&(t=Number(e)),typeof t!="number"||!Number.isInteger(t))throw new q(`Int cannot represent non-integer value: ${j(e)}`);if(t>la||t<ca)throw new q("Int cannot represent non 32-bit signed integer value: "+j(e));return t},parseValue(r){if(typeof r!="number"||!Number.isInteger(r))throw new q(`Int cannot represent non-integer value: ${j(r)}`);if(r>la||r<ca)throw new q(`Int cannot represent non 32-bit signed integer value: ${r}`);return r},parseLiteral(r){if(r.kind!==E.INT)throw new q(`Int cannot represent non-integer value: ${ct(r)}`,{nodes:r});const e=parseInt(r.value,10);if(e>la||e<ca)throw new q(`Int cannot represent non 32-bit signed integer value: ${r.value}`,{nodes:r});return e}}),ev=new wt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(r){const e=gi(r);if(typeof e=="boolean")return e?1:0;let t=e;if(typeof e=="string"&&e!==""&&(t=Number(e)),typeof t!="number"||!Number.isFinite(t))throw new q(`Float cannot represent non numeric value: ${j(e)}`);return t},parseValue(r){if(typeof r!="number"||!Number.isFinite(r))throw new q(`Float cannot represent non numeric value: ${j(r)}`);return r},parseLiteral(r){if(r.kind!==E.FLOAT&&r.kind!==E.INT)throw new q(`Float cannot represent non numeric value: ${ct(r)}`,r);return parseFloat(r.value)}}),Mn=new wt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(r){const e=gi(r);if(typeof e=="string")return e;if(typeof e=="boolean")return e?"true":"false";if(typeof e=="number"&&Number.isFinite(e))return e.toString();throw new q(`String cannot represent value: ${j(r)}`)},parseValue(r){if(typeof r!="string")throw new q(`String cannot represent a non string value: ${j(r)}`);return r},parseLiteral(r){if(r.kind!==E.STRING)throw new q(`String cannot represent a non string value: ${ct(r)}`,{nodes:r});return r.value}}),Be=new wt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(r){const e=gi(r);if(typeof e=="boolean")return e;if(Number.isFinite(e))return e!==0;throw new q(`Boolean cannot represent a non boolean value: ${j(e)}`)},parseValue(r){if(typeof r!="boolean")throw new q(`Boolean cannot represent a non boolean value: ${j(r)}`);return r},parseLiteral(r){if(r.kind!==E.BOOLEAN)throw new q(`Boolean cannot represent a non boolean value: ${ct(r)}`,{nodes:r});return r.value}}),zp=new wt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(r){const e=gi(r);if(typeof e=="string")return e;if(Number.isInteger(e))return String(e);throw new q(`ID cannot represent value: ${j(r)}`)},parseValue(r){if(typeof r=="string")return r;if(typeof r=="number"&&Number.isInteger(r))return r.toString();throw new q(`ID cannot represent value: ${j(r)}`)},parseLiteral(r){if(r.kind!==E.STRING&&r.kind!==E.INT)throw new q("ID cannot represent a non-string and non-integer value: "+ct(r),{nodes:r});return r.value}}),xs=Object.freeze([Mn,nv,ev,Be,zp]);function tv(r){return xs.some(({name:e})=>r.name===e)}function gi(r){if(Ct(r)){if(typeof r.valueOf=="function"){const e=r.valueOf();if(!Ct(e))return e}if(typeof r.toJSON=="function")return r.toJSON()}return r}function rv(r){return ft(r,zt)}class zt{constructor(e){var t,s;this.name=rt(e.name),this.description=e.description,this.locations=e.locations,this.isRepeatable=(t=e.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Pe(e.extensions),this.astNode=e.astNode,Array.isArray(e.locations)||pn(!1,`@${e.name} locations must be an Array.`);const o=(s=e.args)!==null&&s!==void 0?s:{};Ct(o)&&!Array.isArray(o)||pn(!1,`@${e.name} args must be an object with argument names as keys.`),this.args=qp(o)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:Hp(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const iv=new zt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[H.FIELD,H.FRAGMENT_SPREAD,H.INLINE_FRAGMENT],args:{if:{type:new on(Be),description:"Included when true."}}}),sv=new zt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[H.FIELD,H.FRAGMENT_SPREAD,H.INLINE_FRAGMENT],args:{if:{type:new on(Be),description:"Skipped when true."}}}),ov="No longer supported",Wp=new zt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[H.FIELD_DEFINITION,H.ARGUMENT_DEFINITION,H.INPUT_FIELD_DEFINITION,H.ENUM_VALUE],args:{reason:{type:Mn,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:ov}}}),Yp=new zt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[H.SCALAR],args:{url:{type:new on(Mn),description:"The URL that specifies the behavior of this scalar."}}}),Or=Object.freeze([iv,sv,Wp,Yp]);function av(r){return typeof r=="object"&&typeof(r==null?void 0:r[Symbol.iterator])=="function"}function ii(r,e){if(ae(e)){const t=ii(r,e.ofType);return(t==null?void 0:t.kind)===E.NULL?null:t}if(r===null)return{kind:E.NULL};if(r===void 0)return null;if(cr(e)){const t=e.ofType;if(av(r)){const s=[];for(const o of r){const u=ii(o,t);u!=null&&s.push(u)}return{kind:E.LIST,values:s}}return ii(r,t)}if(Ze(e)){if(!Ct(r))return null;const t=[];for(const s of Object.values(e.getFields())){const o=ii(r[s.name],s.type);o&&t.push({kind:E.OBJECT_FIELD,name:{kind:E.NAME,value:s.name},value:o})}return{kind:E.OBJECT,fields:t}}if(Pp(e)){const t=e.serialize(r);if(t==null)return null;if(typeof t=="boolean")return{kind:E.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const s=String(t);return Qc.test(s)?{kind:E.INT,value:s}:{kind:E.FLOAT,value:s}}if(typeof t=="string")return Xe(e)?{kind:E.ENUM,value:t}:e===zp&&Qc.test(t)?{kind:E.INT,value:t}:{kind:E.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${j(t)}.`)}Qe(!1,"Unexpected input type: "+j(e))}const Qc=/^-?(?:0|[1-9][0-9]*)$/,Ma=new pt({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Mn,resolve:r=>r.description},types:{description:"A list of all types supported by this server.",type:new on(new he(new on(Ye))),resolve(r){return Object.values(r.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new on(Ye),resolve:r=>r.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Ye,resolve:r=>r.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Ye,resolve:r=>r.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new on(new he(new on(Qp))),resolve:r=>r.getDirectives()}})}),Qp=new pt({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new on(Mn),resolve:r=>r.name},description:{type:Mn,resolve:r=>r.description},isRepeatable:{type:new on(Be),resolve:r=>r.isRepeatable},locations:{type:new on(new he(new on(Jp))),resolve:r=>r.locations},args:{type:new on(new he(new on(ks))),args:{includeDeprecated:{type:Be,defaultValue:!1}},resolve(r,{includeDeprecated:e}){return e?r.args:r.args.filter(t=>t.deprecationReason==null)}}})}),Jp=new wr({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:H.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:H.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:H.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:H.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:H.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:H.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:H.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:H.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:H.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:H.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:H.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:H.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:H.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:H.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:H.UNION,description:"Location adjacent to a union definition."},ENUM:{value:H.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:H.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:H.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:H.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Ye=new pt({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new on(Kp),resolve(r){if(Wt(r))return vn.SCALAR;if(me(r))return vn.OBJECT;if(ue(r))return vn.INTERFACE;if(Je(r))return vn.UNION;if(Xe(r))return vn.ENUM;if(Ze(r))return vn.INPUT_OBJECT;if(cr(r))return vn.LIST;if(ae(r))return vn.NON_NULL;Qe(!1,`Unexpected type: "${j(r)}".`)}},name:{type:Mn,resolve:r=>"name"in r?r.name:void 0},description:{type:Mn,resolve:r=>"description"in r?r.description:void 0},specifiedByURL:{type:Mn,resolve:r=>"specifiedByURL"in r?r.specifiedByURL:void 0},fields:{type:new he(new on(Xp)),args:{includeDeprecated:{type:Be,defaultValue:!1}},resolve(r,{includeDeprecated:e}){if(me(r)||ue(r)){const t=Object.values(r.getFields());return e?t:t.filter(s=>s.deprecationReason==null)}}},interfaces:{type:new he(new on(Ye)),resolve(r){if(me(r)||ue(r))return r.getInterfaces()}},possibleTypes:{type:new he(new on(Ye)),resolve(r,e,t,{schema:s}){if(WT(r))return s.getPossibleTypes(r)}},enumValues:{type:new he(new on(Zp)),args:{includeDeprecated:{type:Be,defaultValue:!1}},resolve(r,{includeDeprecated:e}){if(Xe(r)){const t=r.getValues();return e?t:t.filter(s=>s.deprecationReason==null)}}},inputFields:{type:new he(new on(ks)),args:{includeDeprecated:{type:Be,defaultValue:!1}},resolve(r,{includeDeprecated:e}){if(Ze(r)){const t=Object.values(r.getFields());return e?t:t.filter(s=>s.deprecationReason==null)}}},ofType:{type:Ye,resolve:r=>"ofType"in r?r.ofType:void 0}})}),Xp=new pt({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new on(Mn),resolve:r=>r.name},description:{type:Mn,resolve:r=>r.description},args:{type:new on(new he(new on(ks))),args:{includeDeprecated:{type:Be,defaultValue:!1}},resolve(r,{includeDeprecated:e}){return e?r.args:r.args.filter(t=>t.deprecationReason==null)}},type:{type:new on(Ye),resolve:r=>r.type},isDeprecated:{type:new on(Be),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Mn,resolve:r=>r.deprecationReason}})}),ks=new pt({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new on(Mn),resolve:r=>r.name},description:{type:Mn,resolve:r=>r.description},type:{type:new on(Ye),resolve:r=>r.type},defaultValue:{type:Mn,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(r){const{type:e,defaultValue:t}=r,s=ii(t,e);return s?ct(s):null}},isDeprecated:{type:new on(Be),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Mn,resolve:r=>r.deprecationReason}})}),Zp=new pt({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new on(Mn),resolve:r=>r.name},description:{type:Mn,resolve:r=>r.description},isDeprecated:{type:new on(Be),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Mn,resolve:r=>r.deprecationReason}})});var vn;(function(r){r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.INPUT_OBJECT="INPUT_OBJECT",r.LIST="LIST",r.NON_NULL="NON_NULL"})(vn||(vn={}));const Kp=new wr({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:vn.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:vn.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:vn.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:vn.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:vn.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:vn.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:vn.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:vn.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new on(Ma);new on(Mn);new on(Mn);const Ls=Object.freeze([Ma,Qp,Jp,Ye,Xp,ks,Zp,Kp]);function uv(r){return Ls.some(({name:e})=>r.name===e)}class nf{constructor(e){var t,s;this.__validationErrors=e.assumeValid===!0?[]:void 0,Ct(e)||pn(!1,"Must provide configuration object."),!e.types||Array.isArray(e.types)||pn(!1,`"types" must be Array if provided but got: ${j(e.types)}.`),!e.directives||Array.isArray(e.directives)||pn(!1,`"directives" must be Array if provided but got: ${j(e.directives)}.`),this.description=e.description,this.extensions=Pe(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=(t=e.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=e.query,this._mutationType=e.mutation,this._subscriptionType=e.subscription,this._directives=(s=e.directives)!==null&&s!==void 0?s:Or;const o=new Set(e.types);if(e.types!=null)for(const u of e.types)o.delete(u),ze(u,o);this._queryType!=null&&ze(this._queryType,o),this._mutationType!=null&&ze(this._mutationType,o),this._subscriptionType!=null&&ze(this._subscriptionType,o);for(const u of this._directives)if(rv(u))for(const l of u.args)ze(l.type,o);ze(Ma,o),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const u of o){if(u==null)continue;const l=u.name;if(l||pn(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[l]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${l}".`);if(this._typeMap[l]=u,ue(u)){for(const p of u.getInterfaces())if(ue(p)){let d=this._implementationsMap[p.name];d===void 0&&(d=this._implementationsMap[p.name]={objects:[],interfaces:[]}),d.interfaces.push(u)}}else if(me(u)){for(const p of u.getInterfaces())if(ue(p)){let d=this._implementationsMap[p.name];d===void 0&&(d=this._implementationsMap[p.name]={objects:[],interfaces:[]}),d.objects.push(u)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(e){switch(e){case Le.QUERY:return this.getQueryType();case Le.MUTATION:return this.getMutationType();case Le.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(e){return this.getTypeMap()[e]}getPossibleTypes(e){return Je(e)?e.getTypes():this.getImplementations(e).objects}getImplementations(e){const t=this._implementationsMap[e.name];return t??{objects:[],interfaces:[]}}isSubType(e,t){let s=this._subTypeMap[e.name];if(s===void 0){if(s=Object.create(null),Je(e))for(const o of e.getTypes())s[o.name]=!0;else{const o=this.getImplementations(e);for(const u of o.objects)s[u.name]=!0;for(const u of o.interfaces)s[u.name]=!0}this._subTypeMap[e.name]=s}return s[t.name]!==void 0}getDirectives(){return this._directives}getDirective(e){return this.getDirectives().find(t=>t.name===e)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function ze(r,e){const t=QT(r);if(!e.has(t)){if(e.add(t),Je(t))for(const s of t.getTypes())ze(s,e);else if(me(t)||ue(t)){for(const s of t.getInterfaces())ze(s,e);for(const s of Object.values(t.getFields())){ze(s.type,e);for(const o of s.args)ze(o.type,e)}}else if(Ze(t))for(const s of Object.values(t.getFields()))ze(s.type,e)}return e}function lv(r){return r.kind===E.SCHEMA_DEFINITION||hi(r)||r.kind===E.DIRECTIVE_DEFINITION}function hi(r){return r.kind===E.SCALAR_TYPE_DEFINITION||r.kind===E.OBJECT_TYPE_DEFINITION||r.kind===E.INTERFACE_TYPE_DEFINITION||r.kind===E.UNION_TYPE_DEFINITION||r.kind===E.ENUM_TYPE_DEFINITION||r.kind===E.INPUT_OBJECT_TYPE_DEFINITION}function cv(r){return r.kind===E.SCHEMA_EXTENSION||Va(r)}function Va(r){return r.kind===E.SCALAR_TYPE_EXTENSION||r.kind===E.OBJECT_TYPE_EXTENSION||r.kind===E.INTERFACE_TYPE_EXTENSION||r.kind===E.UNION_TYPE_EXTENSION||r.kind===E.ENUM_TYPE_EXTENSION||r.kind===E.INPUT_OBJECT_TYPE_EXTENSION}function pv(r){const e=Object.create(null),t=r.getSchema(),s=t?t.getDirectives():Or;for(const l of s)e[l.name]=l.args.map(p=>p.name);const o=r.getDocument().definitions;for(const l of o)if(l.kind===E.DIRECTIVE_DEFINITION){var u;const p=(u=l.arguments)!==null&&u!==void 0?u:[];e[l.name.value]=p.map(d=>d.name.value)}return{Directive(l){const p=l.name.value,d=e[p];if(l.arguments&&d)for(const S of l.arguments){const D=S.name.value;if(!d.includes(D)){const T=Os(D,d);r.reportError(new q(`Unknown argument "${D}" on directive "@${p}".`+Ns(T),{nodes:S}))}}return!1}}}function fv(r){const e=Object.create(null),t=r.getSchema(),s=t?t.getDirectives():Or;for(const u of s)e[u.name]=u.locations;const o=r.getDocument().definitions;for(const u of o)u.kind===E.DIRECTIVE_DEFINITION&&(e[u.name.value]=u.locations.map(l=>l.value));return{Directive(u,l,p,d,S){const D=u.name.value,T=e[D];if(!T){r.reportError(new q(`Unknown directive "@${D}".`,{nodes:u}));return}const F=dv(S);F&&!T.includes(F)&&r.reportError(new q(`Directive "@${D}" may not be used on ${F}.`,{nodes:u}))}}}function dv(r){const e=r[r.length-1];switch("kind"in e||Qe(!1),e.kind){case E.OPERATION_DEFINITION:return gv(e.operation);case E.FIELD:return H.FIELD;case E.FRAGMENT_SPREAD:return H.FRAGMENT_SPREAD;case E.INLINE_FRAGMENT:return H.INLINE_FRAGMENT;case E.FRAGMENT_DEFINITION:return H.FRAGMENT_DEFINITION;case E.VARIABLE_DEFINITION:return H.VARIABLE_DEFINITION;case E.SCHEMA_DEFINITION:case E.SCHEMA_EXTENSION:return H.SCHEMA;case E.SCALAR_TYPE_DEFINITION:case E.SCALAR_TYPE_EXTENSION:return H.SCALAR;case E.OBJECT_TYPE_DEFINITION:case E.OBJECT_TYPE_EXTENSION:return H.OBJECT;case E.FIELD_DEFINITION:return H.FIELD_DEFINITION;case E.INTERFACE_TYPE_DEFINITION:case E.INTERFACE_TYPE_EXTENSION:return H.INTERFACE;case E.UNION_TYPE_DEFINITION:case E.UNION_TYPE_EXTENSION:return H.UNION;case E.ENUM_TYPE_DEFINITION:case E.ENUM_TYPE_EXTENSION:return H.ENUM;case E.ENUM_VALUE_DEFINITION:return H.ENUM_VALUE;case E.INPUT_OBJECT_TYPE_DEFINITION:case E.INPUT_OBJECT_TYPE_EXTENSION:return H.INPUT_OBJECT;case E.INPUT_VALUE_DEFINITION:{const t=r[r.length-3];return"kind"in t||Qe(!1),t.kind===E.INPUT_OBJECT_TYPE_DEFINITION?H.INPUT_FIELD_DEFINITION:H.ARGUMENT_DEFINITION}default:Qe(!1,"Unexpected kind: "+j(e.kind))}}function gv(r){switch(r){case Le.QUERY:return H.QUERY;case Le.MUTATION:return H.MUTATION;case Le.SUBSCRIPTION:return H.SUBSCRIPTION}}function hv(r){const e=r.getSchema(),t=e?e.getTypeMap():Object.create(null),s=Object.create(null);for(const u of r.getDocument().definitions)hi(u)&&(s[u.name.value]=!0);const o=[...Object.keys(t),...Object.keys(s)];return{NamedType(u,l,p,d,S){const D=u.name.value;if(!t[D]&&!s[D]){var T;const F=(T=S[2])!==null&&T!==void 0?T:p,N=F!=null&&mv(F);if(N&&Jc.includes(D))return;const k=Os(D,N?Jc.concat(o):o);r.reportError(new q(`Unknown type "${D}".`+Ns(k),{nodes:u}))}}}}const Jc=[...xs,...Ls].map(r=>r.name);function mv(r){return"kind"in r&&(lv(r)||cv(r))}function Sv(r){var e,t,s;const o=r.getSchema(),u=(e=(t=(s=o==null?void 0:o.astNode)!==null&&s!==void 0?s:o==null?void 0:o.getQueryType())!==null&&t!==void 0?t:o==null?void 0:o.getMutationType())!==null&&e!==void 0?e:o==null?void 0:o.getSubscriptionType();let l=0;return{SchemaDefinition(p){if(u){r.reportError(new q("Cannot define a new schema within a schema extension.",{nodes:p}));return}l>0&&r.reportError(new q("Must provide only one schema definition.",{nodes:p})),++l}}}function Dv(r){const e=r.getSchema(),t=Object.create(null);for(const o of r.getDocument().definitions)hi(o)&&(t[o.name.value]=o);return{ScalarTypeExtension:s,ObjectTypeExtension:s,InterfaceTypeExtension:s,UnionTypeExtension:s,EnumTypeExtension:s,InputObjectTypeExtension:s};function s(o){const u=o.name.value,l=t[u],p=e==null?void 0:e.getType(u);let d;if(l?d=yv[l.kind]:p&&(d=Iv(p)),d){if(d!==o.kind){const S=Tv(o.kind);r.reportError(new q(`Cannot extend non-${S} type "${u}".`,{nodes:l?[l,o]:o}))}}else{const S=Object.keys({...t,...e==null?void 0:e.getTypeMap()}),D=Os(u,S);r.reportError(new q(`Cannot extend type "${u}" because it is not defined.`+Ns(D),{nodes:o.name}))}}}const yv={[E.SCALAR_TYPE_DEFINITION]:E.SCALAR_TYPE_EXTENSION,[E.OBJECT_TYPE_DEFINITION]:E.OBJECT_TYPE_EXTENSION,[E.INTERFACE_TYPE_DEFINITION]:E.INTERFACE_TYPE_EXTENSION,[E.UNION_TYPE_DEFINITION]:E.UNION_TYPE_EXTENSION,[E.ENUM_TYPE_DEFINITION]:E.ENUM_TYPE_EXTENSION,[E.INPUT_OBJECT_TYPE_DEFINITION]:E.INPUT_OBJECT_TYPE_EXTENSION};function Iv(r){if(Wt(r))return E.SCALAR_TYPE_EXTENSION;if(me(r))return E.OBJECT_TYPE_EXTENSION;if(ue(r))return E.INTERFACE_TYPE_EXTENSION;if(Je(r))return E.UNION_TYPE_EXTENSION;if(Xe(r))return E.ENUM_TYPE_EXTENSION;if(Ze(r))return E.INPUT_OBJECT_TYPE_EXTENSION;Qe(!1,"Unexpected type: "+j(r))}function Tv(r){switch(r){case E.SCALAR_TYPE_EXTENSION:return"scalar";case E.OBJECT_TYPE_EXTENSION:return"object";case E.INTERFACE_TYPE_EXTENSION:return"interface";case E.UNION_TYPE_EXTENSION:return"union";case E.ENUM_TYPE_EXTENSION:return"enum";case E.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Qe(!1,"Unexpected kind: "+j(r))}}function vv(r){var e;const t=Object.create(null),s=r.getSchema(),o=(e=s==null?void 0:s.getDirectives())!==null&&e!==void 0?e:Or;for(const p of o)t[p.name]=Cr(p.args.filter(JT),d=>d.name);const u=r.getDocument().definitions;for(const p of u)if(p.kind===E.DIRECTIVE_DEFINITION){var l;const d=(l=p.arguments)!==null&&l!==void 0?l:[];t[p.name.value]=Cr(d.filter(Ev),S=>S.name.value)}return{Directive:{leave(p){const d=p.name.value,S=t[d];if(S){var D;const T=(D=p.arguments)!==null&&D!==void 0?D:[],F=new Set(T.map(N=>N.name.value));for(const[N,k]of Object.entries(S))if(!F.has(N)){const L=Ua(k.type)?j(k.type):ct(k.type);r.reportError(new q(`Directive "@${d}" argument "${N}" of type "${L}" is required, but it was not provided.`,{nodes:p}))}}}}}}function Ev(r){return r.type.kind===E.NON_NULL_TYPE&&r.defaultValue==null}function Gt(r,e,t){if(r){if(r.kind===E.VARIABLE){const s=r.name.value;if(t==null||t[s]===void 0)return;const o=t[s];return o===null&&ae(e)?void 0:o}if(ae(e))return r.kind===E.NULL?void 0:Gt(r,e.ofType,t);if(r.kind===E.NULL)return null;if(cr(e)){const s=e.ofType;if(r.kind===E.LIST){const u=[];for(const l of r.values)if(Xc(l,t)){if(ae(s))return;u.push(null)}else{const p=Gt(l,s,t);if(p===void 0)return;u.push(p)}return u}const o=Gt(r,s,t);return o===void 0?void 0:[o]}if(Ze(e)){if(r.kind!==E.OBJECT)return;const s=Object.create(null),o=Cr(r.fields,u=>u.name.value);for(const u of Object.values(e.getFields())){const l=o[u.name];if(!l||Xc(l.value,t)){if(u.defaultValue!==void 0)s[u.name]=u.defaultValue;else if(ae(u.type))return;continue}const p=Gt(l.value,u.type,t);if(p===void 0)return;s[u.name]=p}return s}if(Pp(e)){let s;try{s=e.parseLiteral(r,t)}catch{return}return s===void 0?void 0:s}Qe(!1,"Unexpected input type: "+j(e))}}function Xc(r,e){return r.kind===E.VARIABLE&&(e==null||e[r.name.value]===void 0)}function bv(r,e,t){var s;const o={},u=(s=e.arguments)!==null&&s!==void 0?s:[],l=Cr(u,p=>p.name.value);for(const p of r.args){const d=p.name,S=p.type,D=l[d];if(!D){if(p.defaultValue!==void 0)o[d]=p.defaultValue;else if(ae(S))throw new q(`Argument "${d}" of required type "${j(S)}" was not provided.`,{nodes:e});continue}const T=D.value;let F=T.kind===E.NULL;if(T.kind===E.VARIABLE){const k=T.name.value;if(t==null||!Av(t,k)){if(p.defaultValue!==void 0)o[d]=p.defaultValue;else if(ae(S))throw new q(`Argument "${d}" of required type "${j(S)}" was provided the variable "$${k}" which was not provided a runtime value.`,{nodes:T});continue}F=t[k]==null}if(F&&ae(S))throw new q(`Argument "${d}" of non-null type "${j(S)}" must not be null.`,{nodes:T});const N=Gt(T,S,t);if(N===void 0)throw new q(`Argument "${d}" has invalid value ${ct(T)}.`,{nodes:T});o[d]=N}return o}function ef(r,e,t){var s;const o=(s=e.directives)===null||s===void 0?void 0:s.find(u=>u.name.value===r.name);if(o)return bv(r,o,t)}function Av(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function tf(r,e){const t=new Map;for(const s of r){const o=e(s),u=t.get(o);u===void 0?t.set(o,[s]):u.push(s)}return t}function _v(r){return{DirectiveDefinition(s){var o;const u=(o=s.arguments)!==null&&o!==void 0?o:[];return t(`@${s.name.value}`,u)},InterfaceTypeDefinition:e,InterfaceTypeExtension:e,ObjectTypeDefinition:e,ObjectTypeExtension:e};function e(s){var o;const u=s.name.value,l=(o=s.fields)!==null&&o!==void 0?o:[];for(const d of l){var p;const S=d.name.value,D=(p=d.arguments)!==null&&p!==void 0?p:[];t(`${u}.${S}`,D)}return!1}function t(s,o){const u=tf(o,l=>l.name.value);for(const[l,p]of u)p.length>1&&r.reportError(new q(`Argument "${s}(${l}:)" can only be defined once.`,{nodes:p.map(d=>d.name)}));return!1}}function Rv(r){return{Field:e,Directive:e};function e(t){var s;const o=(s=t.arguments)!==null&&s!==void 0?s:[],u=tf(o,l=>l.name.value);for(const[l,p]of u)p.length>1&&r.reportError(new q(`There can be only one argument named "${l}".`,{nodes:p.map(d=>d.name)}))}}function Fv(r){const e=Object.create(null),t=r.getSchema();return{DirectiveDefinition(s){const o=s.name.value;if(t!=null&&t.getDirective(o)){r.reportError(new q(`Directive "@${o}" already exists in the schema. It cannot be redefined.`,{nodes:s.name}));return}return e[o]?r.reportError(new q(`There can be only one directive named "@${o}".`,{nodes:[e[o],s.name]})):e[o]=s.name,!1}}}function Cv(r){const e=Object.create(null),t=r.getSchema(),s=t?t.getDirectives():Or;for(const p of s)e[p.name]=!p.isRepeatable;const o=r.getDocument().definitions;for(const p of o)p.kind===E.DIRECTIVE_DEFINITION&&(e[p.name.value]=!p.repeatable);const u=Object.create(null),l=Object.create(null);return{enter(p){if(!("directives"in p)||!p.directives)return;let d;if(p.kind===E.SCHEMA_DEFINITION||p.kind===E.SCHEMA_EXTENSION)d=u;else if(hi(p)||Va(p)){const S=p.name.value;d=l[S],d===void 0&&(l[S]=d=Object.create(null))}else d=Object.create(null);for(const S of p.directives){const D=S.name.value;e[D]&&(d[D]?r.reportError(new q(`The directive "@${D}" can only be used once at this location.`,{nodes:[d[D],S]})):d[D]=S)}}}}function wv(r){const e=r.getSchema(),t=e?e.getTypeMap():Object.create(null),s=Object.create(null);return{EnumTypeDefinition:o,EnumTypeExtension:o};function o(u){var l;const p=u.name.value;s[p]||(s[p]=Object.create(null));const d=(l=u.values)!==null&&l!==void 0?l:[],S=s[p];for(const D of d){const T=D.name.value,F=t[p];Xe(F)&&F.getValue(T)?r.reportError(new q(`Enum value "${p}.${T}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:D.name})):S[T]?r.reportError(new q(`Enum value "${p}.${T}" can only be defined once.`,{nodes:[S[T],D.name]})):S[T]=D.name}return!1}}function Nv(r){const e=r.getSchema(),t=e?e.getTypeMap():Object.create(null),s=Object.create(null);return{InputObjectTypeDefinition:o,InputObjectTypeExtension:o,InterfaceTypeDefinition:o,InterfaceTypeExtension:o,ObjectTypeDefinition:o,ObjectTypeExtension:o};function o(u){var l;const p=u.name.value;s[p]||(s[p]=Object.create(null));const d=(l=u.fields)!==null&&l!==void 0?l:[],S=s[p];for(const D of d){const T=D.name.value;Ov(t[p],T)?r.reportError(new q(`Field "${p}.${T}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:D.name})):S[T]?r.reportError(new q(`Field "${p}.${T}" can only be defined once.`,{nodes:[S[T],D.name]})):S[T]=D.name}return!1}}function Ov(r,e){return me(r)||ue(r)||Ze(r)?r.getFields()[e]!=null:!1}function xv(r){const e=[];let t=Object.create(null);return{ObjectValue:{enter(){e.push(t),t=Object.create(null)},leave(){const s=e.pop();s||Qe(!1),t=s}},ObjectField(s){const o=s.name.value;t[o]?r.reportError(new q(`There can be only one input field named "${o}".`,{nodes:[t[o],s.name]})):t[o]=s.name}}}function kv(r){const e=r.getSchema(),t=Object.create(null),s=e?{query:e.getQueryType(),mutation:e.getMutationType(),subscription:e.getSubscriptionType()}:{};return{SchemaDefinition:o,SchemaExtension:o};function o(u){var l;const p=(l=u.operationTypes)!==null&&l!==void 0?l:[];for(const d of p){const S=d.operation,D=t[S];s[S]?r.reportError(new q(`Type for ${S} already defined in the schema. It cannot be redefined.`,{nodes:d})):D?r.reportError(new q(`There can be only one ${S} type in schema.`,{nodes:[D,d]})):t[S]=d}return!1}}function Lv(r){const e=Object.create(null),t=r.getSchema();return{ScalarTypeDefinition:s,ObjectTypeDefinition:s,InterfaceTypeDefinition:s,UnionTypeDefinition:s,EnumTypeDefinition:s,InputObjectTypeDefinition:s};function s(o){const u=o.name.value;if(t!=null&&t.getType(u)){r.reportError(new q(`Type "${u}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:o.name}));return}return e[u]?r.reportError(new q(`There can be only one type named "${u}".`,{nodes:[e[u],o.name]})):e[u]=o.name,!1}}const Bv=Object.freeze([Sv,kv,Lv,wv,Nv,_v,Fv,hv,fv,Cv,Dv,pv,Rv,xv,vv]);class Pv{constructor(e,t){this._ast=e,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(e){this._onError(e)}getDocument(){return this._ast}getFragment(e){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const s of this.getDocument().definitions)s.kind===E.FRAGMENT_DEFINITION&&(t[s.name.value]=s);this._fragments=t}return t[e]}getFragmentSpreads(e){let t=this._fragmentSpreads.get(e);if(!t){t=[];const s=[e];let o;for(;o=s.pop();)for(const u of o.selections)u.kind===E.FRAGMENT_SPREAD?t.push(u):u.selectionSet&&s.push(u.selectionSet);this._fragmentSpreads.set(e,t)}return t}getRecursivelyReferencedFragments(e){let t=this._recursivelyReferencedFragments.get(e);if(!t){t=[];const s=Object.create(null),o=[e.selectionSet];let u;for(;u=o.pop();)for(const l of this.getFragmentSpreads(u)){const p=l.name.value;if(s[p]!==!0){s[p]=!0;const d=this.getFragment(p);d&&(t.push(d),o.push(d.selectionSet))}}this._recursivelyReferencedFragments.set(e,t)}return t}}class Uv extends Pv{constructor(e,t,s){super(e,s),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function $v(r,e,t=Bv){const s=[],o=new Uv(r,e,l=>{s.push(l)}),u=t.map(l=>l(o));return xp(r,VT(u)),s}function Mv(r){const e=$v(r);if(e.length!==0)throw new Error(e.map(t=>t.message).join(`

`))}function Vv(r,e){Ct(r)&&Ct(r.__schema)||pn(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${j(r)}.`);const t=r.__schema,s=sr(t.types,O=>O.name,O=>F(O));for(const O of[...xs,...Ls])s[O.name]&&(s[O.name]=O);const o=t.queryType?D(t.queryType):null,u=t.mutationType?D(t.mutationType):null,l=t.subscriptionType?D(t.subscriptionType):null,p=t.directives?t.directives.map(dt):[];return new nf({description:t.description,query:o,mutation:u,subscription:l,types:Object.values(s),directives:p,assumeValid:e==null?void 0:e.assumeValid});function d(O){if(O.kind===vn.LIST){const X=O.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");return new he(d(X))}if(O.kind===vn.NON_NULL){const X=O.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");const re=d(X);return new on(YT(re))}return S(O)}function S(O){const X=O.name;if(!X)throw new Error(`Unknown type reference: ${j(O)}.`);const re=s[X];if(!re)throw new Error(`Invalid or incomplete schema, unknown type: ${X}. Ensure that a full introspection query is used in order to build a client schema.`);return re}function D(O){return HT(S(O))}function T(O){return zT(S(O))}function F(O){if(O!=null&&O.name!=null&&O.kind!=null)switch(O.kind){case vn.SCALAR:return N(O);case vn.OBJECT:return L(O);case vn.INTERFACE:return Q(O);case vn.UNION:return dn(O);case vn.ENUM:return Vn(O);case vn.INPUT_OBJECT:return En(O)}const X=j(O);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${X}.`)}function N(O){return new wt({name:O.name,description:O.description,specifiedByURL:O.specifiedByURL})}function k(O){if(O.interfaces===null&&O.kind===vn.INTERFACE)return[];if(!O.interfaces){const X=j(O);throw new Error(`Introspection result missing interfaces: ${X}.`)}return O.interfaces.map(T)}function L(O){return new pt({name:O.name,description:O.description,interfaces:()=>k(O),fields:()=>Cn(O)})}function Q(O){return new vs({name:O.name,description:O.description,interfaces:()=>k(O),fields:()=>Cn(O)})}function dn(O){if(!O.possibleTypes){const X=j(O);throw new Error(`Introspection result missing possibleTypes: ${X}.`)}return new Es({name:O.name,description:O.description,types:()=>O.possibleTypes.map(D)})}function Vn(O){if(!O.enumValues){const X=j(O);throw new Error(`Introspection result missing enumValues: ${X}.`)}return new wr({name:O.name,description:O.description,values:sr(O.enumValues,X=>X.name,X=>({description:X.description,deprecationReason:X.deprecationReason}))})}function En(O){if(!O.inputFields){const X=j(O);throw new Error(`Introspection result missing inputFields: ${X}.`)}return new bs({name:O.name,description:O.description,fields:()=>te(O.inputFields)})}function Cn(O){if(!O.fields)throw new Error(`Introspection result missing fields: ${j(O)}.`);return sr(O.fields,X=>X.name,xn)}function xn(O){const X=d(O.type);if(!Bp(X)){const re=j(X);throw new Error(`Introspection must provide output type for fields, but received: ${re}.`)}if(!O.args){const re=j(O);throw new Error(`Introspection result missing field args: ${re}.`)}return{description:O.description,deprecationReason:O.deprecationReason,type:X,args:te(O.args)}}function te(O){return sr(O,X=>X.name,Xn)}function Xn(O){const X=d(O.type);if(!Lp(X)){const Nt=j(X);throw new Error(`Introspection must provide input type for arguments, but received: ${Nt}.`)}const re=O.defaultValue!=null?Gt(OT(O.defaultValue),X):void 0;return{description:O.description,type:X,defaultValue:re,deprecationReason:O.deprecationReason}}function dt(O){if(!O.args){const X=j(O);throw new Error(`Introspection result missing directive args: ${X}.`)}if(!O.locations){const X=j(O);throw new Error(`Introspection result missing directive locations: ${X}.`)}return new zt({name:O.name,description:O.description,isRepeatable:O.isRepeatable,locations:O.locations.slice(),args:te(O.args)})}}function Gv(r,e,t){var s,o,u,l;const p=[],d=Object.create(null),S=[];let D;const T=[];for(const _ of e.definitions)if(_.kind===E.SCHEMA_DEFINITION)D=_;else if(_.kind===E.SCHEMA_EXTENSION)T.push(_);else if(hi(_))p.push(_);else if(Va(_)){const M=_.name.value,P=d[M];d[M]=P?P.concat([_]):[_]}else _.kind===E.DIRECTIVE_DEFINITION&&S.push(_);if(Object.keys(d).length===0&&p.length===0&&S.length===0&&T.length===0&&D==null)return r;const F=Object.create(null);for(const _ of r.types)F[_.name]=Vn(_);for(const _ of p){var N;const M=_.name.value;F[M]=(N=Zc[M])!==null&&N!==void 0?N:Ae(_)}const k={query:r.query&&Q(r.query),mutation:r.mutation&&Q(r.mutation),subscription:r.subscription&&Q(r.subscription),...D&&re([D]),...re(T)};return{description:(s=D)===null||s===void 0||(o=s.description)===null||o===void 0?void 0:o.value,...k,types:Object.values(F),directives:[...r.directives.map(dn),...S.map(mi)],extensions:Object.create(null),astNode:(u=D)!==null&&u!==void 0?u:r.astNode,extensionASTNodes:r.extensionASTNodes.concat(T),assumeValid:(l=t==null?void 0:t.assumeValid)!==null&&l!==void 0?l:!1};function L(_){return cr(_)?new he(L(_.ofType)):ae(_)?new on(L(_.ofType)):Q(_)}function Q(_){return F[_.name]}function dn(_){const M=_.toConfig();return new zt({...M,args:bt(M.args,X)})}function Vn(_){if(uv(_)||tv(_))return _;if(Wt(_))return xn(_);if(me(_))return te(_);if(ue(_))return Xn(_);if(Je(_))return dt(_);if(Xe(_))return Cn(_);if(Ze(_))return En(_);Qe(!1,"Unexpected type: "+j(_))}function En(_){var M;const P=_.toConfig(),U=(M=d[P.name])!==null&&M!==void 0?M:[];return new bs({...P,fields:()=>({...bt(P.fields,gn=>({...gn,type:L(gn.type)})),...it(U)}),extensionASTNodes:P.extensionASTNodes.concat(U)})}function Cn(_){var M;const P=_.toConfig(),U=(M=d[_.name])!==null&&M!==void 0?M:[];return new wr({...P,values:{...P.values,...Ue(U)},extensionASTNodes:P.extensionASTNodes.concat(U)})}function xn(_){var M;const P=_.toConfig(),U=(M=d[P.name])!==null&&M!==void 0?M:[];let gn=P.specifiedByURL;for(const hn of U){var Pn;gn=(Pn=Kc(hn))!==null&&Pn!==void 0?Pn:gn}return new wt({...P,specifiedByURL:gn,extensionASTNodes:P.extensionASTNodes.concat(U)})}function te(_){var M;const P=_.toConfig(),U=(M=d[P.name])!==null&&M!==void 0?M:[];return new pt({...P,interfaces:()=>[..._.getInterfaces().map(Q),...fr(U)],fields:()=>({...bt(P.fields,O),...pr(U)}),extensionASTNodes:P.extensionASTNodes.concat(U)})}function Xn(_){var M;const P=_.toConfig(),U=(M=d[P.name])!==null&&M!==void 0?M:[];return new vs({...P,interfaces:()=>[..._.getInterfaces().map(Q),...fr(U)],fields:()=>({...bt(P.fields,O),...pr(U)}),extensionASTNodes:P.extensionASTNodes.concat(U)})}function dt(_){var M;const P=_.toConfig(),U=(M=d[P.name])!==null&&M!==void 0?M:[];return new Es({...P,types:()=>[..._.getTypes().map(Q),...Qt(U)],extensionASTNodes:P.extensionASTNodes.concat(U)})}function O(_){return{..._,type:L(_.type),args:_.args&&bt(_.args,X)}}function X(_){return{..._,type:L(_.type)}}function re(_){const M={};for(const U of _){var P;const gn=(P=U.operationTypes)!==null&&P!==void 0?P:[];for(const Pn of gn)M[Pn.operation]=Nt(Pn.type)}return M}function Nt(_){var M;const P=_.name.value,U=(M=Zc[P])!==null&&M!==void 0?M:F[P];if(U===void 0)throw new Error(`Unknown type: "${P}".`);return U}function Yt(_){return _.kind===E.LIST_TYPE?new he(Yt(_.type)):_.kind===E.NON_NULL_TYPE?new on(Yt(_.type)):Nt(_)}function mi(_){var M;return new zt({name:_.name.value,description:(M=_.description)===null||M===void 0?void 0:M.value,locations:_.locations.map(({value:P})=>P),isRepeatable:_.repeatable,args:Si(_.arguments),astNode:_})}function pr(_){const M=Object.create(null);for(const gn of _){var P;const Pn=(P=gn.fields)!==null&&P!==void 0?P:[];for(const hn of Pn){var U;M[hn.name.value]={type:Yt(hn.type),description:(U=hn.description)===null||U===void 0?void 0:U.value,args:Si(hn.arguments),deprecationReason:hs(hn),astNode:hn}}}return M}function Si(_){const M=_??[],P=Object.create(null);for(const gn of M){var U;const Pn=Yt(gn.type);P[gn.name.value]={type:Pn,description:(U=gn.description)===null||U===void 0?void 0:U.value,defaultValue:Gt(gn.defaultValue,Pn),deprecationReason:hs(gn),astNode:gn}}return P}function it(_){const M=Object.create(null);for(const gn of _){var P;const Pn=(P=gn.fields)!==null&&P!==void 0?P:[];for(const hn of Pn){var U;const _e=Yt(hn.type);M[hn.name.value]={type:_e,description:(U=hn.description)===null||U===void 0?void 0:U.value,defaultValue:Gt(hn.defaultValue,_e),deprecationReason:hs(hn),astNode:hn}}}return M}function Ue(_){const M=Object.create(null);for(const gn of _){var P;const Pn=(P=gn.values)!==null&&P!==void 0?P:[];for(const hn of Pn){var U;M[hn.name.value]={description:(U=hn.description)===null||U===void 0?void 0:U.value,deprecationReason:hs(hn),astNode:hn}}}return M}function fr(_){return _.flatMap(M=>{var P,U;return(P=(U=M.interfaces)===null||U===void 0?void 0:U.map(Nt))!==null&&P!==void 0?P:[]})}function Qt(_){return _.flatMap(M=>{var P,U;return(P=(U=M.types)===null||U===void 0?void 0:U.map(Nt))!==null&&P!==void 0?P:[]})}function Ae(_){var M;const P=_.name.value,U=(M=d[P])!==null&&M!==void 0?M:[];switch(_.kind){case E.OBJECT_TYPE_DEFINITION:{var gn;const Zn=[_,...U];return new pt({name:P,description:(gn=_.description)===null||gn===void 0?void 0:gn.value,interfaces:()=>fr(Zn),fields:()=>pr(Zn),astNode:_,extensionASTNodes:U})}case E.INTERFACE_TYPE_DEFINITION:{var Pn;const Zn=[_,...U];return new vs({name:P,description:(Pn=_.description)===null||Pn===void 0?void 0:Pn.value,interfaces:()=>fr(Zn),fields:()=>pr(Zn),astNode:_,extensionASTNodes:U})}case E.ENUM_TYPE_DEFINITION:{var hn;const Zn=[_,...U];return new wr({name:P,description:(hn=_.description)===null||hn===void 0?void 0:hn.value,values:Ue(Zn),astNode:_,extensionASTNodes:U})}case E.UNION_TYPE_DEFINITION:{var _e;const Zn=[_,...U];return new Es({name:P,description:(_e=_.description)===null||_e===void 0?void 0:_e.value,types:()=>Qt(Zn),astNode:_,extensionASTNodes:U})}case E.SCALAR_TYPE_DEFINITION:{var xr;return new wt({name:P,description:(xr=_.description)===null||xr===void 0?void 0:xr.value,specifiedByURL:Kc(_),astNode:_,extensionASTNodes:U})}case E.INPUT_OBJECT_TYPE_DEFINITION:{var Ot;const Zn=[_,...U];return new bs({name:P,description:(Ot=_.description)===null||Ot===void 0?void 0:Ot.value,fields:()=>it(Zn),astNode:_,extensionASTNodes:U})}}}}const Zc=Cr([...xs,...Ls],r=>r.name);function hs(r){const e=ef(Wp,r);return e==null?void 0:e.reason}function Kc(r){const e=ef(Yp,r);return e==null?void 0:e.url}function qv(r,e){r!=null&&r.kind===E.DOCUMENT||pn(!1,"Must provide valid Document AST."),(e==null?void 0:e.assumeValid)!==!0&&(e==null?void 0:e.assumeValidSDL)!==!0&&Mv(r);const s=Gv({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},r,e);if(s.astNode==null)for(const u of s.types)switch(u.name){case"Query":s.query=u;break;case"Mutation":s.mutation=u;break;case"Subscription":s.subscription=u;break}const o=[...s.directives,...Or.filter(u=>s.directives.every(l=>l.name!==u.name))];return new nf({...s,directives:o})}function jv(r,e){const t=NT(r,{noLocation:e==null?void 0:e.noLocation,allowLegacyFragmentVariables:e==null?void 0:e.allowLegacyFragmentVariables});return qv(t,{assumeValidSDL:e==null?void 0:e.assumeValidSDL,assumeValid:e==null?void 0:e.assumeValid})}const np=`
input DashboardInput {
  tab: String
  page: String
  resultLimit: String
  search: CustomResultInput
  filter: [CustomResultInput]
  sort: [CustomResultInput]
}


input CustomResultInput {
  column: String
  value: String
}


type CommonOutput {
  data: CommonResult
  error: Error
}


type CommonResult {
  result: CommonResponse
}


type CommonResponse {
  status: Boolean
  message: String
}


type Error {
  errorCode: String
  message: String
  statusCode: String
  errorList: [String]
}


type FileBase64 {
  url: String
  base64: String
  date: String
  name: String
  path: String
  size: Float
  type: String
}


type Mutation {
  userLogin(input: LoginInput): UserLogin
  approveRejectSettings(input: ApproveRejectInput): CommonOutput
  approveReject(input: ApproveRejectInput): CommonOutput
  bulkUploadStatus(input: BulkUploadStatusInput): CommonOutput
  bulkUpload(input: BulkUploadInput): CommonOutput
  cancelAuditedActivity(input: cancelAuditedActivityInput): CommonOutput
  caseStatus(input: CaseStatusInput): CommonOutput
  createCase(input: NewCaseInput): CommonOutput
  createGroup(input: GroupInput): CommonOutput
  createRole(input: RoleInput): CommonOutput
  createSettings(input: CreateSettingsInput): CommonOutput
  createTransactionsRef(input: CreateTransactionsRefInput): CommonOutput
  createUser(input: UserAdminInput): CommonOutput
  dailySummaryReport(input: DailySummaryReportInput): DailySummaryReportOutput
  exportInBackground(input: ExportInBackgroundInput): ExportListRes
  downloadDaily(input: DownloadDailyInput): DownloadReportOutput
  eddReportsPdf(input: EddReportPdf): EddReportPdfOutput
  editGroup(input: EditGroupInput): CommonOutput
  editRole(input: EditRoleInput): CommonOutput
  editUser(input: EditUserAdminInput): CommonOutput
  enableOmni(input: IdActionInput): CommonOutput
  financeStatus(input: FinanceStatusInput): CommonOutput
  fundStatus(input: FundStatusInput): CommonOutput
  fundUpload(input: FundInput): CommonOutput
  opsStatus(input: OpsStatusInput): CommonOutput
  targetDateRequest(input: TargetDateRequestInput): CommonOutput
  targetDateResponse(input: TargetDateResponseInput): CommonOutput
  transactionCheckerStatus(input: ApproveRejectInput): TransactionStatusOutput
  transactionStatus(input: TransactionStatusInput): TransactionStatusOutput
  transactionTrackingReport(input: TransactionTrackingReportInput): TransactionTrackingReportOutput
  updateInbox(input: UpdateInboxInput): CommonOutput
  updateSeen(input: SeenInput): CommonOutput
  updateTransactionReportStatus(input: DownloadDailyInput): UpdateTransactionReportStatusOutput
  userBulkUpload(input: UserBulkUploadInput): CommonOutput
  userUpdateStatus(input: IdActionUpdateInput): CommonOutput
  validateDropdown(input: VDropDownInput): VDropDownOutput
  dailySummaryReportProcess(input: dailySummaryReportProcessInput): DailySummaryReportProgressResponse
  operationReportProcess(input: operationReportProgressInput): OperationReportProgressResponse
}


input LoginInput {
  username: String
  password: String
}


type UserLogin {
  data: JWTResult
  error: Error
}


type JWTResult {
  result: JWT
}


type JWT {
  accessToken: String
  idToken: String
  refreshToken: String
  name: String
  email: String
  role: [String]
  group: [String]
  department: String
  accessLevel: String
  permission: String
  username: String
  inboxCount: Int
  branchName: String
}


input ApproveRejectInput {
  tab: String
  requestId: String
  action: String
  remarks: String
}


input BulkUploadStatusInput {
  fundDocumentId: String
  status: String
  remark: String
}


input BulkUploadInput {
  numberOfDocuments: Int
  date: String
  documents: [BulkDocumentsInput]
}


input BulkDocumentsInput {
  fileName: String
  fileSize: Int
  fundAbbr: String
  documentType: String
  path: String
}


input cancelAuditedActivityInput {
  auditLogId: Int
}


input CaseStatusInput {
  caseId: String
  action: String
  amlaRemark: [AmlaRemark]
  reason: [ReasonIdRemark]
  remark: String
}


input AmlaRemark {
  questionId: String
  remark: String
  title: String
}


input ReasonIdRemark {
  reasonId: String
  remark: String
}


input NewCaseInput {
  cases: [NewCaseDetail]
  utaId: String
}


input NewCaseDetail {
  reasonId: String
  triggerId: String
  moduleId: String
  addQuestion: [String]
  targetDate: String
  remark: String
}


input GroupInput {
  groupName: String
  description: String
  roles: [Int]
  branch: [Int]
}


input RoleInput {
  roleName: String
  description: String
  grant: String
  permission: PermissionInput
}


input PermissionInput {
  accountManagement: AccountManagementInput
  reports: ReportsInput
  ceTransaction: CeTransactionInput
  adviser: AdviserInput
  userManagement: UserManagementInput
  activityLogs: ActivityLogsInput
  ceDashboard: CeDashboardInput
  branchOffices: PBranchOfficesInput
  eddCase: EddCaseInput
  financeDashboard: FinanceDashboardInput
  financeCases: FinanceCasesInput
  productSettings: ProductSettingsInput
  uploads: UploadsInput
  operationDashboard: OperationDashboardInput
  operationCases: OperationCasesInput
  systemSettings: SystemSettingsInput
}


input SystemSettingsInput {
  isAll: String
  permissionLevel: String
  epfTab: SSEpfTabActionInput
}


input SSEpfTabActionInput {
  isAll: String
  actions: SSEpfTabInput
  reviewApproval: SSEpfTabReviewInput
}


input SSEpfTabReviewInput {
  canApproveChange: String
}


input SSEpfTabInput {
  canChangeSettings: String
}


input AccountManagementInput {
  isAll: String
  permissionLevel: String
  login: LoginActionInput
  inbox: InboxActionInput
  profile: ProfileActionInput
}


input ReportsInput {
  isAll: String
  permissionLevel: String
  operationalReport: ReportActionInput
}


input ReportActionInput {
  isAll: String
  actions: ReportPermissionInput
}


input ReportPermissionInput {
  canDownloadRegularInvestmentReport: String
  canDownloadMoneySightedCTAReport: String
  canDownloadThirdPartyDailyBookingReport: String
  canDownloadUserAccessAuditTrailReport: String
  canDownloadUserAccountStatusReport: String
  canDownloadEpfApplicationStatusReport: String
  canDownloadSwitchingSubmissionReport: String
  canDownloadRedemptionSubmissionReport: String
  canDownloadBranchControlSalesSubmissionSummaryReport: String
  canDownloadSalesSubmissionStatisticSummaryMoneyMarketReport: String
  canDownloadSalesSubmissionStatisticDetailsReport: String
}


input LoginActionInput {
  isAll: String
  actions: LoginPermissionInput
}


input LoginPermissionInput {
  canDoPasswordRecovery: String
}


input InboxActionInput {
  isAll: String
  actions: InboxPermissionInput
}


input InboxPermissionInput {
  canReadNotifications: String
}


input ProfileActionInput {
  isAll: String
  actions: ProfilePermissionInput
}


input ProfilePermissionInput {
  canViewStaffDetails: String
}


input CeTransactionInput {
  isAll: String
  permissionLevel: String
  pendingTab: CePendingTabActionInput
  upcomingTab: CeUpcomingTabActionInput
  hardCopyTab: CeHardCopyTabActionInput
  reRoutedTab: CeReRoutedTabActionInput
  historyTab: CeHistoryTabActionInput
}


input CePendingTabActionInput {
  isAll: String
  actions: CePendingTabInput
  reviewApproval: CePendingTabReviewInput
}


input CePendingTabInput {
  canViewTransactionList: String
  canViewDetails: String
  canExportList: String
  canDownloadTransactionReport: String
  canDownloadDailySummary: String
  canVerifyTransactions: String
  canReroute: String
  canReject: String
}


input CePendingTabReviewInput {
  canApproveVerify: String
  canApproveReRoute: String
  canApproveReject: String
}


input CeUpcomingTabActionInput {
  isAll: String
  actions: CeUpcomingTabInput
}


input CeUpcomingTabInput {
  canViewTransactionList: String
  canViewDetails: String
  canExportList: String
}


input CeHardCopyTabActionInput {
  isAll: String
  actions: CeHardCopyTabInput
}


input CeHardCopyTabInput {
  canViewTransactionList: String
  canViewDetails: String
  canExportList: String
  canReceiveHardCopy: String
}


input CeReRoutedTabActionInput {
  isAll: String
  actions: CeReRoutedTabInput
}


input CeReRoutedTabInput {
  canViewTransactionList: String
  canViewDetails: String
  canExportList: String
  canDoDueDateExtension: String
}


input CeHistoryTabActionInput {
  isAll: String
  actions: CeHistoryTabInput
}


input CeHistoryTabInput {
  canViewTransactionList: String
  canViewDetails: String
  canExportList: String
  canDownloadTransactionReport: String
}


input AdviserInput {
  isAll: String
  permissionLevel: String
  advisersTab: AdviserBranchTabActionInput
  investorsTab: InvestorTabActionInput
}


input AdviserBranchTabActionInput {
  isAll: String
  actions: AdviserBranchTabInput
}


input AdviserBranchTabInput {
  canViewAdviserList: String
  canViewAdvisersProfile: String
  canExportList: String
}


input InvestorTabActionInput {
  isAll: String
  actions: InvestorTabInput
}


input InvestorTabInput {
  canViewInvestorsList: String
}


input UserManagementInput {
  isAll: String
  permissionLevel: String
  userTab: UserTabInput
  userGroupTab: UserGroupTabInput
  rolesPermissionTab: RolesPermissionTabInput
}


input UserTabInput {
  isAll: String
  actions: UserTabActionInput
  reviewApproval: UserTabReviewInput
}


input UserTabActionInput {
  canViewUserList: String
  canViewUserDetails: String
  canExportList: String
  canEditUserDetails: String
  canCreateNewUser: String
  canBulkImport: String
  canSuspendUser: String
  canReactivateUser: String
  canTerminateUser: String
}


input UserTabReviewInput {
  canApproveEditUserDetails: String
  canApproveCreateNewUser: String
  canApproveBulkImport: String
  canApproveSuspendUser: String
  canApproveReactivateUser: String
  canApproveTerminateUser: String
}


input UserGroupTabInput {
  isAll: String
  actions: UserGroupTabActionInput
  reviewApproval: UserGroupTabReviewInput
}


input UserGroupTabActionInput {
  canViewUserGroupList: String
  canExportList: String
  canCreateNewUserGroup: String
  canEditUserGroup: String
  canSuspendUserGroup: String
  canReactivateUserGroup: String
  canDeleteUserGroup: String
}


input UserGroupTabReviewInput {
  canApproveCreateNewUserGroup: String
  canApproveEditUserGroup: String
  canApproveSuspendUserGroup: String
  canApproveReactivateUserGroup: String
  canApproveDeleteUserGroup: String
}


input RolesPermissionTabInput {
  isAll: String
  actions: RolesPermissionTabActionInput
  reviewApproval: RolesPermissionTabReviewInput
}


input RolesPermissionTabActionInput {
  canViewRolesList: String
  canExportList: String
  canCreateUserRole: String
  canEditUserRoleDetails: String
  canSuspendUserRole: String
  canReactivateUserRole: String
  canDeleteUserRole: String
}


input RolesPermissionTabReviewInput {
  canApproveCreateUserRole: String
  canApproveEditUserRole: String
  canApproveSuspendUserRole: String
  canApproveReactivateUserRole: String
  canApproveDeleteUserRole: String
}


input ActivityLogsInput {
  isAll: String
  permissionLevel: String
  userActivityTab: UserActivityTabInput
  reportsTab: ReportsTabInput
}


input UserActivityTabInput {
  isAll: String
  actions: UserActivityTabActionInput
}


input UserActivityTabActionInput {
  canViewUserActivityList: String
  canViewActivityDetails: String
  canExportList: String
  canExportReport: String
}


input ReportsTabInput {
  isAll: String
  actions: ReportsTabActionInput
}


input ReportsTabActionInput {
  canViewReportList: String
  canExportList: String
}


input CeDashboardInput {
  isAll: String
  permissionLevel: String
  overview: OverviewTabActionInput
  allBranch: AllBranchTabActionInput
  pendingTab: CePendingTabActionInput
  upcomingTab: CeUpcomingTabActionInput
  hardCopyTab: CeHardCopyTabActionInput
  reRoutedTab: CeReRoutedTabActionInput
  historyTab: CeHistoryTabActionInput
  dueDateTab: CeDueDateTabActionInput
}


input OverviewTabActionInput {
  isAll: String
  actions: OverviewTabInput
}


input OverviewTabInput {
  canViewOverview: String
}


input AllBranchTabActionInput {
  isAll: String
  actions: AllBranchTabInput
}


input AllBranchTabInput {
  canViewAllBranchList: String
  canExportList: String
}


input CeDueDateTabActionInput {
  isAll: String
  actions: CeDueDateTabInput
  reviewApproval: CeDueDateTabReviewInput
}


input CeDueDateTabInput {
  canViewDueDateExtensionList: String
  canViewDetails: String
  canExportList: String
}


input CeDueDateTabReviewInput {
  canApproveDueDateExtension: String
}


input PBranchOfficesInput {
  isAll: String
  permissionLevel: String
  allBranchTab: PAllBranchTabActionInput
  advisersTab: PAllBranchTabActionInput
  investorsTab: InvestorTabActionInput
}


input PAllBranchTabActionInput {
  isAll: String
  actions: PBranchOfficeInput
}


input PBranchOfficeInput {
  canViewAllBranchList: String
  canViewAdvisersInvestors: String
  canExportList: String
  canViewAdviserList: String
  canViewAdvisersProfile: String
}


input EddCaseInput {
  isAll: String
  permissionLevel: String
  newTab: NewTabActionInput
  reRoutedTab: EddReRoutedTabActionInput
  closedTab: ClosedTabActionInput
}


input NewTabActionInput {
  isAll: String
  actions: NewTabInput
  caseActions: NewTabCaseInput
}


input NewTabInput {
  canViewNewCase: String
  canViewDetails: String
  canAddNewCase: String
  canExportList: String
  canDownloadMonthlyReport: String
}


input NewTabCaseInput {
  canChangeResponse: String
  canCancelCase: String
}


input EddReRoutedTabActionInput {
  isAll: String
  actions: EddReRoutedTabInput
  caseActions: EddReRoutedTabCaseInput
}


input EddReRoutedTabInput {
  canViewReRoutedCasesList: String
  canViewDetails: String
  canExportList: String
  canDownloadMonthlyReport: String
}


input EddReRoutedTabCaseInput {
  canChangeResponse: String
}


input ClosedTabActionInput {
  isAll: String
  actions: ClosedTabInput
  caseActions: ClosedTabCaseInput
}


input ClosedTabInput {
  canViewClosedCaseList: String
  canViewDetails: String
  canExportList: String
  canDownloadMonthlyReport: String
}


input ClosedTabCaseInput {
  canDownloadEddReport: String
  canDownloadEddCommentsReport: String
}


input FinanceDashboardInput {
  isAll: String
  permissionLevel: String
  overview: OverviewTabActionInput
  branchVerifiedTab: FinanceTabActionInput
  moneySightedFundTab: FinanceTabActionInput
}


input FinanceTabActionInput {
  isAll: String
  actions: FinanceTabInput
}


input FinanceTabInput {
  canViewBranchVerifiedList: String
  canViewDetails: String
  canExportList: String
  canReceivePayment: String
  canReRouteTransaction: String
}


input FinanceCasesInput {
  isAll: String
  permissionLevel: String
  reRoutedTab: FinanceCasesReRoutedTabActionInput
  historyTab: FinanceHistoryTabActionInput
}


input FinanceCasesReRoutedTabActionInput {
  isAll: String
  actions: FinanceCasesReRoutedTabInput
  reviewApproval: FinanceCasesReRoutedTabReviewInput
}


input FinanceCasesReRoutedTabInput {
  canViewReRoutedList: String
  canViewDetails: String
  canExportList: String
}


input FinanceCasesReRoutedTabReviewInput {
  canDoDueDateExtension: String
}


input FinanceHistoryTabActionInput {
  isAll: String
  actions: FinanceHistoryTabInput
}


input FinanceHistoryTabInput {
  canViewHistoryList: String
  canViewDetails: String
  canExportList: String
}


input ProductSettingsInput {
  isAll: String
  permissionLevel: String
  allFundsTab: AllFundsTabActionInput
  allAmpTab: AllAmpTabActionInput
  navPerUnitTab: NavPerUnitTabActionInput
  distributionTab: DistributionTabActionInput
  documentsTab: DocumentsTabActionInput
}


input AllFundsTabActionInput {
  isAll: String
  actions: AllFundsTabInput
}


input AllFundsTabInput {
  canViewFundList: String
  canViewDetails: String
  canExportList: String
}


input AllAmpTabActionInput {
  isAll: String
  actions: AllAmpTabInput
}


input AllAmpTabInput {
  canViewAmpList: String
  canViewDetails: String
  canExportList: String
}


input NavPerUnitTabActionInput {
  isAll: String
  actions: NavPerUnitTabInput
}


input NavPerUnitTabInput {
  canViewNavPerUnitList: String
  canViewDetails: String
  canExportList: String
}


input DistributionTabActionInput {
  isAll: String
  actions: DistributionTabInput
}


input DistributionTabInput {
  canViewHistoryList: String
  canViewDetails: String
  canExportList: String
}


input DocumentsTabActionInput {
  isAll: String
  actions: DocumentsTabInput
}


input DocumentsTabInput {
  canViewFundDocumentsList: String
  canPreviewProspectus: String
  canPreviewHighlight: String
  canPreviewAnnual: String
  canPreviewMonthly: String
  canExportList: String
}


input UploadsInput {
  isAll: String
  permissionLevel: String
  masterFundTab: MasterFundTabActionInput
  navPerUnitTab: UploadNavTabActionInput
  distributionTab: UploadDistributionTabActionInput
  documentsTab: UploadDocumentsTabActionInput
}


input MasterFundTabActionInput {
  isAll: String
  actions: MasterFundTabInput
  reviewApproval: MasterFundTabReviewInput
}


input MasterFundTabInput {
  canViewReRoutedList: String
  canPreviewMasterFund: String
  canExportList: String
  canImportMasterFund: String
}


input MasterFundTabReviewInput {
  canApproveMasterFund: String
}


input UploadNavTabActionInput {
  isAll: String
  actions: UploadNavTabInput
  reviewApproval: UploadNavReviewInput
}


input UploadNavTabInput {
  canViewRejectedList: String
  canPreviewNav: String
  canExportList: String
  canImportNav: String
}


input UploadNavReviewInput {
  canApproveNav: String
}


input UploadDistributionTabActionInput {
  isAll: String
  actions: UploadDistributionTabInput
  reviewApproval: UploadDistributionReviewInput
}


input UploadDistributionTabInput {
  canViewHistoryList: String
  canPreviewDistribution: String
  canExportList: String
  canImportDistribution: String
}


input UploadDistributionReviewInput {
  canApproveDistribution: String
}


input UploadDocumentsTabActionInput {
  isAll: String
  actions: UploadDocumentsTabInput
  reviewApproval: UploadDocumentsReviewInput
}


input UploadDocumentsTabInput {
  canViewHistoryList: String
  canViewDocuments: String
  canExportList: String
  canBulkUpload: String
}


input UploadDocumentsReviewInput {
  canApproveBulkUpload: String
}


input OperationDashboardInput {
  isAll: String
  permissionLevel: String
  overview: OverviewTabActionInput
  branchVerifiedTab: OpsVerifiedTabActionInput
  moneySightedFundTab: OpsVerifiedTabActionInput
  epfTab: OpsVerifiedTabActionInput
  ddaTab: OpsVerifiedTabActionInput
  financeReRoutedTab: FinanceReroutedTabActionInput
}


input OpsVerifiedTabActionInput {
  isAll: String
  actions: OpsVerifiedTabInput
}


input OpsVerifiedTabInput {
  canViewTransactionList: String
  canViewDetails: String
  canExportList: String
  canReroute: String
  canReject: String
}


input FinanceReroutedTabActionInput {
  isAll: String
  actions: FinanceReroutedTabInput
}


input FinanceReroutedTabInput {
  canViewTransactionList: String
  canViewDetails: String
  canExportList: String
  canFreezeTransaction: String
  canUnFreezeTransaction: String
}


input OperationCasesInput {
  isAll: String
  permissionLevel: String
  reRoutedTab: OpsReRoutedTabActionInput
  rejectedTab: OpsRejectedTabActionInput
  historyTab: OpsHistoryTabActionInput
}


input OpsReRoutedTabActionInput {
  isAll: String
  actions: OpsReRoutedTabInput
  reviewApproval: OpsReRoutedTabReviewInput
}


input OpsReRoutedTabInput {
  canViewReRoutedList: String
  canViewDetails: String
  canExportList: String
}


input OpsReRoutedTabReviewInput {
  canApproveDueDateExtension: String
}


input OpsRejectedTabActionInput {
  isAll: String
  actions: OpsRejectedTabInput
}


input OpsRejectedTabInput {
  canViewRejectedList: String
  canViewDetails: String
  canExportList: String
}


input OpsHistoryTabActionInput {
  isAll: String
  actions: OpsHistoryTabInput
}


input OpsHistoryTabInput {
  canViewHistoryList: String
  canViewDetails: String
  canExportList: String
}


input CreateSettingsInput {
  settings: SettingsBodyInput
  sendAgent: Boolean
  sendOfficeUser: Boolean
}


input SettingsBodyInput {
  isMultiUtmc: EpfSettingsInput
}


input EpfSettingsInput {
  effectiveDate: String
  value: Boolean
}


input CreateTransactionsRefInput {
  orderNo: String
}


input UserAdminInput {
  username: String
  ssoId: String
  name: String
  status: String
  branch: String
  department: String
  email: String
  mobileNumber: String
  description: String
  userGroup: [String]
}


input DailySummaryReportInput {
  branchId: String
  backgroundProcess: Boolean
}


type DailySummaryReportOutput {
  data: DailySummaryReportOutputResult
  error: Error
}


type DailySummaryReportOutputResult {
  result: DailySummaryReportOutputResponse
}


type DailySummaryReportOutputResponse {
  status: Boolean
  message: String
  path: String
}


input ExportInBackgroundInput {
  endpoint: String
  url: String
}


type ExportListObj {
  url: String
  endpoint: String
}


type ExportListRes {
  data: ExportListResult
  error: Error
}


type ExportListResult {
  result: ExportListObj
}


input DownloadDailyInput {
  transactionRef: [String]
}


type DownloadReportOutput {
  data: DownloadReportResult
  error: Error
}


type DownloadReportResult {
  result: DownloadReportResponse
}


type DownloadReportResponse {
  message: String
  link: String
}


input EddReportPdf {
  caseId: Int
  tab: String
}


type EddReportPdfOutput {
  data: EddReportPdfOutputResult
  error: Error
}


type EddReportPdfOutputResult {
  result: EddReportPdfOutputResponse
}


type EddReportPdfOutputResponse {
  status: Boolean
  message: String
}


input EditGroupInput {
  groupId: String
  description: String
  status: String
  roles: [String]
  branch: [String]
}


input EditRoleInput {
  roleId: String
  description: String
  status: String
  grant: String
  permission: PermissionInput
}


input EditUserAdminInput {
  userId: String
  ssoId: String
  name: String
  status: String
  branch: String
  department: String
  email: String
  mobileNumber: String
  description: String
  userGroup: [String]
}


input IdActionInput {
  id: String
  action: String
}


input FinanceStatusInput {
  transactionRef: [String]
  status: String
  reason: String
  remark: String
}


input FundStatusInput {
  fundDocumentId: Int
  status: String
  remark: String
  tab: String
}


input FundInput {
  tab: String
  document: DocumentInput
  data: String
}


input DocumentInput {
  fileName: String
  file: String
  type: String
  fileSize: Int
}


input OpsStatusInput {
  transactionRef: String
  status: String
  reasonId: String
  remark: String
}


input TargetDateRequestInput {
  transactionRef: String
  targetDate: String
  remark: String
}


input TargetDateResponseInput {
  requestId: String
  targetDate: String
  action: String
  remark: String
}


type TransactionStatusOutput {
  data: TransactionStatusResponse
  error: Error
}


type TransactionStatusResponse {
  result: TransactionStatusResult
}


type TransactionStatusResult {
  status: Boolean
  message: String
  transactionAffected: [String]
}


input TransactionStatusInput {
  transactionRef: [String]
  action: String
  docList: [DocList]
  reasonId: [String]
  remark: String
  targetDate: String
}


input DocList {
  category: String
  docId: [String]
}


input TransactionTrackingReportInput {
  orderNo: String
  reportFormat: String
  transactionRef: String
}


type TransactionTrackingReportOutput {
  data: TransactionTrackingReportOutputResult
  error: Error
}


type TransactionTrackingReportOutputResult {
  result: TransactionTrackingReportOutputResponse
}


type TransactionTrackingReportOutputResponse {
  message: String
  status: Boolean
  path: String
}


input UpdateInboxInput {
  source: [String]
}


input SeenInput {
  dashboard: String
  tab: [String]
  referenceKey: String
}


type UpdateTransactionReportStatusOutput {
  data: UpdateTransactionReportStatusResult
  error: Error
}


type UpdateTransactionReportStatusResult {
  result: UpdateTransactionReportStatusResponse
}


type UpdateTransactionReportStatusResponse {
  message: String
}


input UserBulkUploadInput {
  document: BulkDocInput
  data: String
}


input BulkDocInput {
  fileName: String
  fileType: String
  fileSize: Int
  fileString: String
}


input IdActionUpdateInput {
  id: String
  action: String
  viewType: String
}


input VDropDownInput {
  roles: [String]
}


type VDropDownOutput {
  data: VDropDownOutputResult
  error: Error
}


type VDropDownOutputResult {
  result: VDropDownOutputRes
}


type VDropDownOutputRes {
  roles: [String]
  grant: String
}


type Query {
  accountInfo(input: accountInfoInput): accountInfoOutput
  activityLogDashboard(input: DashboardInput): ActivityLogDashboard
  adviserDashboard(input: AdviserDashboardInput): AdviserDashboard
  adviserSummary(input: AdviserSummaryInput): AdviserSummaryOutput
  agentProfile(input: AgentProfileInput): SAAgentProfile
  allPendingDashboard(input: BranchDashboardInput): AllPendingDashboard
  allSubmittedDashboard(input: BranchDashboardInput): AllSubmittedDashboard
  branchDashboardV2(input: BranchDashboardInput): BranchDashboardV2
  branchDashboard(input: BranchDashboardInput): BranchDashboard
  branchOffices(input: BranchOfficesInput): BranchOffices
  caseCheck(input: CaseCheckInput): CommonOutput
  caseDetails(input: CaseDetailsInput): CaseDetails
  dailySummaryCount(input: DailySummaryCountInput): DailySummaryCountOutput
  dashboardExportList(input: DashboardExportInput): DashboardExportListOutput
  distributionHistory(input: DistributionHistoryInput): DistributionHistoryOutput
  eddCaseHistory(input: CaseHistoryInput): EddCaseHistory
  eddClientAccounts(input: EddClientAccountsInput): EddClientAccounts
  eddClientList(input: EddClientListInput): EddClientList
  eddDashboard(input: DashboardInput): EddDashboard
  eddModuleList(input: EddModuleListInput): EddModuleList
  eddReasonList(input: EddReasonListInput): ReasonOutput
  fileCheck(input: FileCheckInput): FileCheckOutput
  financeCasesDashboard(input: DashboardInput): FinanceCasesDashboard
  financeDashboard(input: DashboardInput): FinanceDashboard
  fundDataDashboard(input: DashboardInput): FundDataDashboard
  fundDocumentDashboard(input: DashboardInput): FundDocumentDashboard
  fundSummary(input: FundSummaryInput): FundSummaryOutput
  fundUploadData(input: FundUploadDataInput): FundUploadDataOutput
  generateEddReportMonthly(input: GenerateEddReportMonthlyInput): GenerateEddReportMonthlyOutput
  getDropDownList: DropDownList
  getEddModule(input: GetEddModuleInput): GetEddModuleResponse
  getHolidays: HolidaysOutput
  getIdInformation(input: IdInfoInput): IdInformation
  getLogData(input: GetLogDataInput): GetLogDataOutput
  getOperationalReportFilters(input: getOperationalReportFiltersInput): getOperationalReportFiltersOutput
  getOperationalReport(input: getOperationalReportFiltersInput): getOperationalReportOutput
  getOrderSummaryV2Cr(input: OrderSummaryInputV2): OrderSummaryOutputV2
  getOrderSummaryV2(input: OrderSummaryInputV2): OrderSummaryOutputV2
  getOrderSummary(input: OrderSummaryInput): OrderSummaryOutput
  getTransactionStatusOverview(input: TransactionStatusOverviewInput): TransactionStatusOverviewOutput
  getTransactionTracking(input: TransactionTrackingInput): TransactionTrackingOutput
  hqCeDashboard(input: DashboardInput): HqCeDashboardOutput
  inboxDashboard(input: InboxInput): GetInbox
  investorDashboard(input: DashboardInput): InvestorDashboardOutput
  investorProfile(input: investorProfileInput): investorProfileOutput
  logOut: CommonOutput
  newCaseDefinition(input: NewCaseDefinitionInput): NewCaseDefinition
  getOperationalReportDashboard(input: ReportDashboardInput): getOperationalReportDashboardOutput
  opsCasesDashboard(input: DashboardInput): OpsCasesDashboard
  opsDashboard(input: DashboardInput): OpsDashboard
  pendingSubmissionDashboard(input: BranchDashboardInput): PendingSubmissionDashboard
  ppaDownloadV2(input: TransactionRefArrayInput): DownloadReportOutput
  ppaDownload(input: TransactionRefArrayInput): DownloadReportOutput
  statusDropDown(input: StatusDropDownInput): StatusDropDownOutput
  systemAdminAdviserDashboard(input: DashboardInput): SystemAdminAdviserDashboard
  systemAdminDashboard(input: DashboardInput): SystemAdminDashboard
  systemAdminExport(input: ExportInput): DownloadReportOutput
  systemAdminInboxData(input: SystemAdminInboxDataInput): SystemAdminInboxDataOutput
  systemSettingsDashboard(input: DashboardInput): SystemSettingsDashboard
  trackingDashboard(input: BranchDashboardInput): TrackingDashboard
  transactionPdf(input: TransactionPdfInput): TransactionPdfOutput
  transactionReasonListV2(input: TransactionReasonListInputV2): TransactionReasonListOutputV2
  transactionReasonList(input: TransactionReasonListInput): TransactionReasonListOutput
  transactionRequest(input: TransactionRequestInput): TransactionRequestOutput
  userProfile: UserProfileOutput
}


input accountInfoInput {
  accountNo: String
  tab: String
}


type accountInfoOutput {
  data: accountInfoResult
  error: Error
}


type accountInfoResult {
  result: accountInfoRes
}


type accountInfoRes {
  investmentSummary: InvestmentSummary
  orderNo: String
  profile: [ClientProfile]
  transactionDetails: TxDetails
  transactionRef: String
}


type ActivityLogDashboard {
  data: ActivityLogDashboardResult
  error: Error
}


type ActivityLogDashboardResult {
  result: ActivityLogDashboardResponse
}


type ActivityLogDashboardResponse {
  logs: [ActivityLog]
  page: Int
  pages: Int
  activityCount: Int
  reportCount: Int
}


type ActivityLog {
  id: String
  operationName: String
  name: String
  code: String
  roles: [String]
  eventType: String
  createdOn: String
  status: String
  action: String
  fileSize: String
  userName: String
}


input AdviserDashboardInput {
  branchId: String
  page: String
  resultLimit: String
  search: CustomResultInput
  filter: [CustomResultInput]
  sort: [CustomResultInput]
}


type AdviserDashboard {
  data: AdviserDashboardResults
  error: Error
}


type AdviserDashboardResults {
  result: AdviserDashboardResponse
}


type AdviserDashboardResponse {
  advisers: [Advisers]
  adviserCount: Int
  page: Int
  pages: Int
}


type Advisers {
  branchName: String
  adviserList: [Adviser]
}


type Adviser {
  agentId: String
  agentName: String
  agentCode: String
  bdmName: String
  bdmCode: String
  uplineName: String
  uplineCode: String
  status: String
  createdOn: String
  lastUpdated: String
  branchName: String
}


input AdviserSummaryInput {
  tab: String
  agentId: String
  page: String
  resultLimit: String
  search: CustomResultInput
  sort: [CustomResultInput]
  filter: [CustomResultInput]
}


type AdviserSummaryOutput {
  data: AdviserSummaryResults
  error: Error
}


type AdviserSummaryResults {
  result: AdviserSummary
}


type AdviserSummary {
  profile: AgentProfileDetailed
  investor: [InvestorDetail]
  totalResultCount: Int
  investorCount: Int
  typeCount: [Int]
  page: Int
  pages: Int
}


type AgentProfileDetailed {
  name: String
  code: String
  nric: String
  personalDetails: AgentPersonalDetails
  contactDetails: AgentContactDetails
  addressInfo: AgentAddressInfo
}


type AgentPersonalDetails {
  licenseCode: String
  homeBranch: String
  omniEnabled: String
  bdmName: String
  bdmCode: String
  bdmEmail: String
  uplineName: String
  uplineCode: String
  region: String
  adviserChannel: String
  adviserRank: String
  agency: String
}


type AgentContactDetails {
  email: String
  mobileNo: String
}


type AgentAddressInfo {
  address: String
  postcode: String
  addrTown: String
  state: String
  country: String
}


type InvestorDetail {
  clientId: String
  clientName: String
  clientIdNum: String
  riskCategory: String
  individualCount: Int
  principalCount: Int
  jointholderCount: Int
  totalAccount: Int
  lastUpdated: String
  lastActivity: String
}


input AgentProfileInput {
  userId: String
}


type SAAgentProfile {
  data: SAgentProfileResult
  error: Error
}


type SAgentProfileResult {
  result: SAgentProfile
}


type SAgentProfile {
  userId: String
  nric: String
  name: String
  status: String
  personalDetails: SAPersonalDetails
  contactDetails: SAContactDetails
  addressInfo: SAAddressInfo
}


type SAPersonalDetails {
  licenseCode: String
  homeBranch: String
  omniEnabled: String
  bdmName: String
  bdmCode: String
  bdmEmail: String
  uplineName: String
  uplineCode: String
  region: String
  adviserChannel: String
  adviserRank: String
  agency: String
}


type SAContactDetails {
  email: String
  mobileNo: String
}


type SAAddressInfo {
  address: String
  postcode: String
  addrTown: String
  state: String
  country: String
}


type AllPendingDashboard {
  data: AllPendingDashboardResult
  error: Error
}


type AllPendingDashboardResult {
  result: AllPendingDashboardResponse
}


type AllPendingDashboardResponse {
  groupedTransactions: TransactionByBranch
  totalResultCount: Int
  statuses: [PendingStatus]
  page: Int
  pages: Int
  filters: PendingDashboardFilters
}


type AllSubmittedDashboard {
  data: AllSubmittedDashboardResult
  error: Error
}


type AllSubmittedDashboardResult {
  result: AllSubmittedDashboardResponse
}


type AllSubmittedDashboardResponse {
  batchCount: [BatchCountList]
  changeRequestsCount: Int
  cutOffCount: [Int]
  dailyCount: Int
  enableBulkVerify: Boolean
  filters: BranchFilters
  groupedTransactions: HqSubmittedGrouping
  groupedTransactionsCr: HqCRGrouping
  hardcopyCount: Int
  historyCount: Int
  page: Int
  pages: Int
  rerouteCount: Int
  transactions: [Transactions]
  transactionsCount: Int
  typeCount: [Int]
  typeSeen: [Boolean]
  upcomingCount: Int
}


type HqSubmittedGrouping {
  grouping: [HqSubmittedByBranch]
}


type HqSubmittedByBranch {
  groupingData: GroupingData
  transactionData: TransactionByTime
  type: String
}


type HqCRGrouping {
  grouping: [HqCrByBranch]
}


type HqCrByBranch {
  groupingData: GroupingData
  transactionData: TransactionByOrder
  type: String
}


type BranchDashboardV2 {
  data: BranchDashboardV2Result
  error: Error
}


type BranchDashboardV2Result {
  result: BranchDashboardV2Response
}


type BranchDashboardV2Response {
  batchCount: [BatchCountList]
  changeRequestsCount: Int
  cutOffCount: [Int]
  dailyCount: Int
  enableBulkVerify: Boolean
  filters: BranchFilters
  groupedTransactions: TransactionByTime
  hardcopyCount: Int
  historyCount: Int
  page: Int
  pages: Int
  rerouteCount: Int
  transactions: [Transactions]
  transactionsCount: Int
  typeCount: [Int]
  typeSeen: [Boolean]
  upcomingCount: Int
}


type TransactionByTime {
  grouping: [GroupByTime]
}


type GroupByTime {
  groupingData: GroupingData
  transactionData: TransactionByOrder
  type: String
}


type GroupingData {
  key: String
  value: String
}


type TransactionByOrder {
  grouping: [GroupByOrder]
}


type GroupByOrder {
  groupingData: GroupingOrder
  transactionData: TransactionGrouping
  type: String
}


type GroupingOrder {
  jointName: String
  jointNumber: String
  orderNo: String
  principalName: String
  principalNumber: String
  viewable: String
  accountNo: String
  noTransactions: Int
}


type TransactionGrouping {
  data: [Transactions]
}


type BranchFilters {
  accountType: [String]
  branchStatus: [String]
  fundType: [String]
  paymentMethod: [String]
  riskCategory: [String]
  transactionType: [String]
  cutOffTime: [String]
}


input BranchDashboardInput {
  branchId: String
  filter: [CustomResultInput]
  page: String
  resultLimit: String
  search: CustomResultInput
  sort: [CustomResultInput]
  tab: String
}


type BranchDashboard {
  data: BranchDashboardResult
  error: Error
}


type BranchDashboardResult {
  result: BranchDashboardResponse
}


type BranchDashboardResponse {
  batchCount: [BatchCountList]
  cutOffCount: [Int]
  dailyCount: Int
  hardcopyCount: Int
  historyCount: Int
  page: Int
  pages: Int
  enableBulkVerify: Boolean
  rerouteCount: Int
  totalResultCount: Int
  transactions: [Transactions]
  typeCount: [Int]
  typeSeen: [Boolean]
  upcomingCount: Int
}


type BatchCountList {
  batchTime: String
  count: Int
}


type Transactions {
  accountType: String
  agentCode: String
  agentName: String
  aging: String
  approvalType: String
  batchTime: String
  bdmName: String
  branchName: String
  clientIdNum: String
  clientName: String
  createdOn: String
  cutOffTime: String
  extendTargetDate: String
  fundAbbr: String
  fundCategory: String
  fundCode: String
  fundType: String
  isSeen: Boolean
  jointName: String
  jointNumber: String
  lastUpdated: String
  orderNo: String
  paymentMethod: String
  remarks: [StatusRemark]
  requestId: Int
  requestedBy: String
  riskCategory: String
  status: String
  submittedOn: String
  targetDate: String
  totalUnits: String
  totalInvestment: [TotalInvestment]
  transactionRef: String
  transactionType: String
  utmc: String
  isVerified: Boolean
  viewable: String
  accountNo: String
  noTransactions: Int
  extendRemarks: [StatusRemark]
  isPhysicalDocRequired: Boolean
}


type TotalInvestment {
  fundCurrency: String
  investmentAmount: String
}


type StatusRemark {
  content: [String]
  title: String
}


input BranchOfficesInput {
  page: String
  resultLimit: String
  search: CustomResultInput
  filter: [CustomResultInput]
  sort: [CustomResultInput]
}


type BranchOffices {
  data: BranchOfficesResults
  error: Error
}


type BranchOfficesResults {
  result: BranchOfficesResponse
}


type BranchOfficesResponse {
  branches: [Branch]
  stateList: [String]
  totalResultCount: Int
  branchCount: Int
  page: Int
  pages: Int
}


type Branch {
  branchId: String
  name: String
  code: String
  state: String
  agentCount: Int
  clientCount: Int
  dailyCount: Int
  rerouteCount: Int
  hardcopyCount: Int
}


input CaseCheckInput {
  utaId: String
  clientIdNum: String
  triggerId: String
}


input CaseDetailsInput {
  caseId: String
  responseId: String
  tab: String
}


type CaseDetails {
  data: CaseDetailsResult
  error: Error
}


type CaseDetailsResult {
  result: CaseDetailsResponses
}


type CaseDetailsResponses {
  name: String
  clientIdNum: String
  idFile: String
  idType: String
  officerName: String
  remark: [StatusRemark]
  status: String
  caseSummary: CaseSummary
  assignedAdviser: AssignedAdviser
  headings: [CaseHeading]
  response: [CaseResponse]
}


type CaseSummary {
  caseDetails: EddCaseInfo
  personalDetails: PersonalDetails
  accountSummary: AccountSummary
}


type EddCaseInfo {
  caseId: String
  caseNo: String
  createdOn: String
  closedDate: String
  eddTrigger: [StatusRemark]
  eddReason: [StatusRemark]
  satisfactoryStatus: String
}


type PersonalDetails {
  nationality: String
  email: String
  phone: String
  occupation: String
  employerName: String
  grossIncome: String
}


type AccountSummary {
  accountNo: String
  accountCreatedOn: String
  investorType: String
  accountHolder: String
  agentId: String
  agentCode: String
  receipt: FileBase64
  productType: String
  fundOption: String
}


type AssignedAdviser {
  personalDetails: AdviserPersonalDetails
  contactDetails: SAContactDetails
  addressInformation: AgentAddressInfo
}


type AdviserPersonalDetails {
  agentName: String
  agentCode: String
  nric: String
  licenseCode: String
  branch: String
  region: String
  channel: String
  omniEnabled: String
  bdmName: String
  bdmCode: String
  bdmEmail: String
  uplineName: String
  uplineCode: String
  rank: String
  agency: String
}


type CaseHeading {
  responseId: Int
  submittedOn: String
  remarkOn: String
}


type CaseResponse {
  questionNo: String
  title: String
  description: String
  questionId: String
  answers: String
  amlaRemark: String
}


input DailySummaryCountInput {
  branchId: String
}


type DailySummaryCountOutput {
  data: DailySummaryCountOutputResult
  error: Error
}


type DailySummaryCountOutputResult {
  result: DailySummaryCountOutputRes
}


type DailySummaryCountOutputRes {
  result: [String]
  count: String
  enableBulkVerify: Boolean
}


input DashboardExportInput {
  endpoint: String
  branchId: String
  tab: String
  search: CustomResultInput
  filter: [CustomResultInput]
  sort: [CustomResultInput]
  backgroundProcess: Boolean
}


type DashboardExportListOutput {
  data: DashboardExportListResult
  error: Error
}


type DashboardExportListResult {
  result: DashboardExportListRes
}


type DashboardExportListRes {
  message: String
  endpoint: String
  adviserdashboard: [Adviser]
  branchoffices: [Branch]
  branchdashboard: [Transactions]
  hqcedashboardBranch: [Branch]
  hqcedashboardExtension: [Transactions]
  systemadmindashboard: [SystemAdminDashboardData]
  activitylogdashboard: [ActivityLog]
  systemadminadviserdashboard: [SADashboardData]
  funddatadashboard: [FundData]
  funddocumentdashboard: [FundDocument]
  edddashboard: [Case]
  branchdashboardv2: [Transactions]
  branchdashboardv2NonGrouping: [Transactions]
  pendingsubmissiondashboard: [Transactions]
  allsubmitteddashboard: [Transactions]
  allsubmitteddashboardNonGrouping: [Transactions]
  allpendingdashboard: [Transactions]
  investordashboard: [InvestorDashboardRawJson]
}


input DistributionHistoryInput {
  fundId: Int
  dateFrom: String
  dateTo: String
  fundClass: String
  tab: String
}


type DistributionHistoryOutput {
  data: DistributionHistoryResult
  error: Error
}


type DistributionHistoryResult {
  result: DistributionHistoryResponse
}


type DistributionHistoryResponse {
  message: String
  status: Boolean
  result: [DistributionResultArray]
  fundClass: [String]
}


type DistributionResultArray {
  fundCurrency: String
  latestNavPerUnit: String
  navChange: String
  navChangePercentage: String
  netDistribution: String
  netChange: String
  netChangePercentage: String
  grossDistribution: String
  grossChange: String
  grossChangePercentage: String
  unitSplit: String
  latestNavDate: String
  change: String
  changePercentage: String
  closingDate: String
}


input CaseHistoryInput {
  utaId: String
  clientIdNum: String
  sort: [CustomResultInput]
}


type EddCaseHistory {
  data: EddCaseHistoryResult
  error: Error
}


type EddCaseHistoryResult {
  result: EddCaseHistoryResponse
}


type EddCaseHistoryResponse {
  principal: [EddCaseHistoryInfo]
  joint: [EddCaseHistoryInfo]
}


type EddCaseHistoryInfo {
  caseId: String
  caseNo: String
  eddTrigger: [StatusRemark]
  eddReason: [StatusRemark]
  createdOn: String
  closedOn: String
  remarks: [StatusRemark]
  status: String
  name: String
  clientIdNumber: String
}


input EddClientAccountsInput {
  clientIdNum: String
  page: String
  resultLimit: String
  search: CustomResultInput
  sort: [CustomResultInput]
}


type EddClientAccounts {
  data: EddClientAccountResult
  error: Error
}


type EddClientAccountResult {
  result: EddClientAccountResponse
}


type EddClientAccountResponse {
  accounts: [EddClientAccountList]
  totalResultCount: Int
  page: Int
  pages: Int
}


type EddClientAccountList {
  utaId: String
  accountNumber: String
  clientId: String
  clientName: String
  clientIdNum: String
  jointId: String
  jointName: String
  jointIdNum: String
  registrationDate: String
  servicingAdviserName: String
  servicingAdviserCode: String
  origin: String
  hasEddCase: Boolean
}


input EddClientListInput {
  page: String
  resultLimit: String
  search: CustomResultInput
  sort: [CustomResultInput]
}


type EddClientList {
  data: EddClientListResult
  error: Error
}


type EddClientListResult {
  result: EddClientListResponse
}


type EddClientListResponse {
  clients: [EddClient]
  totalResultCount: Int
  page: Int
  pages: Int
}


type EddClient {
  clientId: String
  clientName: String
  clientIdNum: String
  clientAccountCount: String
}


type EddDashboard {
  data: EddDashboardResult
  error: Error
}


type EddDashboardResult {
  result: EddDashboardResponse
}


type EddDashboardResponse {
  cases: [Case]
  newCount: Int
  rerouteCount: Int
  closeCount: Int
  page: Int
  pages: Int
}


type Case {
  caseId: Int
  caseNo: String
  accountType: String
  clientIdNum: String
  clientName: String
  accountNo: String
  agentName: String
  agentCode: String
  bdmName: String
  bdmCode: String
  status: String
  remarks: [StatusRemark]
  targetDate: String
  lastUpdated: String
  submittedOn: String
  createdOn: String
  aging: String
  isSeen: Boolean
}


input EddModuleListInput {
  reasonId: String
}


type EddModuleList {
  data: EddModuleListResult
  error: Error
}


type EddModuleListResult {
  result: EddModuleListResponse
}


type EddModuleListResponse {
  module: [EddModuleDescription]
}


type EddModuleDescription {
  moduleId: Int
  name: String
}


input EddReasonListInput {
  actionType: String
}


type ReasonOutput {
  data: ReasonResults
  error: Error
}


type ReasonResults {
  result: ReasonResponse
}


type ReasonResponse {
  reasons: [ReasonList]
  targetDate: String
}


type ReasonList {
  reasonId: String
  category: String
  subCategory: [[String]]
}


input FileCheckInput {
  fileName: String
  tab: String
  fundAbbr: [String]
}


type FileCheckOutput {
  data: FileCheckOutputResult
  error: Error
}


type FileCheckOutputResult {
  result: FileCheckOutputRes
}


type FileCheckOutputRes {
  status: Boolean
  message: String
  fundData: [FundNameDetails]
}


type FundNameDetails {
  fundAbbr: String
  fundName: String
}


type FinanceCasesDashboard {
  data: FinanceCasesDashboardResult
  error: Error
}


type FinanceCasesDashboardResult {
  result: FinanceCasesDashboardResponse
}


type FinanceCasesDashboardResponse {
  transactions: [FinanceCases]
  page: Int
  pages: Int
  branchCount: Int
  moneyMarketFundCount: Int
}


type FinanceCases {
  clientName: String
  clientIdNum: String
  lastUpdated: String
  transactionType: String
  transactionRef: String
  agentCode: String
  accountNo: String
  agentName: String
  fundType: String
  totalInvestment: String
  status: String
  remarks: String
}


type FinanceDashboard {
  data: FinanceDashboardResult
  error: Error
}


type FinanceDashboardResult {
  result: FinanceDashboardResponse
}


type FinanceDashboardResponse {
  transactions: [Finance]
  branchVerifiedCount: Int
  totalResultCount: Int
  branchCount: [Int]
  page: Int
  pages: Int
  moneyMarketFundCount: Int
}


type Finance {
  clientName: String
  clientIdNum: String
  lastUpdated: String
  transactionType: String
  transactionRef: String
  agentCode: String
  accountNo: String
  agentName: String
  fundType: String
  totalInvestment: String
  status: String
}


type FundDataDashboard {
  data: FundDataDashboardResult
  error: Error
}


type FundDataDashboardResult {
  result: FundDataDashboardResponse
}


type FundDataDashboardResponse {
  transactions: [FundData]
  page: Int
  pages: Int
  allFundsCount: Int
  ampFundCount: Int
  filters: FundFilters
}


type FundFilters {
  fundCategory: [String]
  fundType: [String]
  issuingHouse: [String]
  fundClass: [String]
  fundCurrency: [String]
  fundStatus: [String]
  riskCategory: [String]
}


type FundData {
  fundAbbr: String
  fundId: Int
  fundName: String
  fundClass: String
  fundCurrency: String
  lastUpdated: String
  fundType: String
  fundCategory: String
  fundStatus: String
  isSyariah: Int
  latestNavPerUnit: String
  previousNavPerUnit: String
  latestNavDate: String
  previousNavDate: String
  grossDistribution: String
  netDistribution: String
  unitSplit: String
  document: [DocArray]
  riskCategory: String
  latestGrossDate: String
  latestNetDate: String
  timestamp: String
  issuingHouse: String
  closingDate: String
  unitClosingDate: String
  startDate: String
}


type DocArray {
  name: String
  url: String
  documentType: String
}


type FundDocumentDashboard {
  data: FundDocumentDashboardResult
  error: Error
}


type FundDocumentDashboardResult {
  result: FundDocumentDashboardResponse
}


type FundDocumentDashboardResponse {
  transactions: [FundDocument]
  page: Int
  pages: Int
  filters: UploadFilters
}


type UploadFilters {
  status: [String]
}


type FundDocument {
  fileName: String
  lastUpdate: String
  status: String
  fileSize: String
  remark: String
  fileType: String
  uploadedOn: String
  totalDocuments: Int
  fundDocumentId: Int
  isSeen: Boolean
}


input FundSummaryInput {
  fundId: Int
  tab: String
}


type FundSummaryOutput {
  data: FundSummaryResult
  error: Error
}


type FundSummaryResult {
  result: FundSummaryResponse
}


type FundSummaryResponse {
  fundName: String
  utmc: String
  fundSummary: FundSummary
  investmentSummary: FundInvestmentSummary
  feesSummary: FundFeesSummary
  epfSummary: FundEpfSummary
  redemptionSummary: FundRedemptionSummary
  switchingSummary: FundSwitchingSummary
  salesSummary: FundSalesSummary
  topUpSummary: FundTopUpSummary
  transferSummary: FundTransferSummary
  description: String
  filters: FundSummaryFilter
}


type FundSummary {
  nonBusinessDayFrom: String
  nonBusinessDayTo: String
  fundCode: String
  fundCategory: String
  fundProcessingGroup: String
  fundDescription: String
  fundType: String
  isSyariah: Boolean
  fundClass: String
  trustee: String
  scProcessingGroup: String
  fundStartDate: Int
  iopEndDate: Int
  maturityDate: String
  commercialStartDate: String
  lipperCode: String
  felSharing: String
  ageGroup: String
  riskCategory: String
  closedEnd: Boolean
  transactionsAfterIopAllow: Boolean
  minimumBalanceHoldingUnits: String
  distributedBy: String
  isFea: Boolean
  landingFund: String
}


type FundInvestmentSummary {
  instruction: String
  dividentTiming: String
  minimumDividentPayoutAmount: String
  dailyIncomeDistribution: Boolean
  fundBaseCurrency: String
  fundClassCurrency: String
  isAipAllowed: Boolean
  coolOffDays: Int
  moneySightedFund: Boolean
  dedicatedFund: Boolean
  differenceFundPrice: String
  salesSettlementDay: String
}


type FundFeesSummary {
  issuePrice: String
  annualManagementFee: String
  annualTrusteeFee: String
  ampFee: String
  minSalesFees: String
  maxSalesFees: String
  exitFeesCharge: String
  exitFeesChargeAmount: String
  gstParameter: Int
}


type FundEpfSummary {
  epfApproved: Boolean
  epfStatus: String
  minSalesFee: String
  maxSalesFee: String
  maxNewSalesAmountEpf: String
  minNewSalesAmountEpf: String
  minTopupAmountEpf: String
  exitFeesCharge: String
  exitFeesChargeAmount: String
  maxTopupAmountEpf: String
}


type FundRedemptionSummary {
  redemptionType: String
  minRedemptionUnits: String
  redemptionSettleDate: String
  redemption: Boolean
  redemptionCoolOff: Boolean
  redemptionCutOffTime: String
  batchCutOffTime: String
}


type FundSwitchingSummary {
  switchingType: String
  switchingFee: String
  transactionsAfterIopSwitchIn: Boolean
  transactionsAfterIopSwitchOut: Boolean
  minSwitchOutUnits: String
  switchingSettlementDate: String
  switchingGroup: String
  minSalesAmountEpf: String
  minSalesAmountNonEpf: String
  minTopUpEpf: String
  minTopUpNonEpf: String
}


type FundSalesSummary {
  transactionsAfterIopNewSales: Boolean
  minNewSalesAmount: String
  maxNewSalesAmount: String
  minBalanceHoldingUnits: String
  salesCutOffTime: String
  batchCutOffTime: String
}


type FundTopUpSummary {
  transactionsAfterIopTopUpSales: Boolean
  minTopUpAmount: String
  maxTopUpAmount: String
}


type FundTransferSummary {
  transactionsAfterIopTransfer: Boolean
  minTransferOutUnits: String
  transferFee: String
}


type FundSummaryFilter {
  fundClass: [String]
}


input FundUploadDataInput {
  fundDocumentId: Int
}


type FundUploadDataOutput {
  data: FundUploadDataOutputResult
  error: Error
}


type FundUploadDataOutputResult {
  result: FundUploadDataOutputResponse
}


type FundUploadDataOutputResponse {
  message: String
  data: String
  user: String
  transaction: FundTransaction
}


type FundTransaction {
  status: String
  user: String
  remark: String
}


input GenerateEddReportMonthlyInput {
  dateFrom: String
  dateTo: String
  statusIds: [String]
}


type GenerateEddReportMonthlyOutput {
  data: GenerateEddReportMonthlyResult
  error: Error
}


type GenerateEddReportMonthlyResult {
  result: GenerateEddReportMonthlyRes
}


type GenerateEddReportMonthlyRes {
  message: String
  url: String
}


type DropDownList {
  data: DropDownListResult
  error: Error
}


type DropDownListResult {
  result: DropDownListRes
}


type DropDownListRes {
  departments: [DropDownListOutput]
  accessLevel: [DropDownListOutput]
  branches: [DropDownListOutput]
  groups: [DropDownListOutput]
  roles: [DropDownListOutput]
  agency: [DropDownListOutput]
  channel: [DropDownListOutput]
  eventTypes: [String]
}


type DropDownListOutput {
  id: String
  value: String
}


input GetEddModuleInput {
  moduleId: String
}


type GetEddModuleResponse {
  data: GetEddModuleResult
  error: Error
}


type GetEddModuleResult {
  result: [EddQuestion]
}


type EddQuestion {
  title: String
  description: String
  options: [EddOption]
}


type EddOption {
  id: String
  position: Int
  parent: [String]
  title: String
  description: String
  info: String
  type: String
  hasRemark: Boolean
  hasDoc: Boolean
  multiSelection: Boolean
  autoHide: Boolean
  values: [String]
  valuesDescription: [String]
}


type HolidaysOutput {
  data: HolidaysResult
  error: Error
}


type HolidaysResult {
  result: HolidayList
}


type HolidayList {
  holidays: [String]
}


input IdInfoInput {
  id: String
  requestId: String
  viewType: String
}


type IdInformation {
  data: IdInformationResponse
  error: Error
}


type IdInformationResponse {
  result: IdInformationResult
}


type IdInformationResult {
  info: String
}


input GetLogDataInput {
  id: Int
}


type GetLogDataOutput {
  data: GetLogDataOutputResult
  error: Error
}


type GetLogDataOutputResult {
  result: GetLogDataOutputResponse
}


type GetLogDataOutputResponse {
  message: String
  status: Boolean
  data: GetLogData
}


type GetLogData {
  code: String
  operationName: String
  fileSize: String
  roles: String
  createdOn: String
  name: String
  eventType: String
  operationStatus: String
  data: String
  type: String
  timestamp: String
  remark: String
  status: String
  fundData: String
  authorName: String
  approverName: String
}


input getOperationalReportFiltersInput {
  reportName: String
  filter: [CustomResultInput]
}


type getOperationalReportFiltersOutput {
  data: getOperationalReportFiltersOutputResult
  error: Error
}


type getOperationalReportFiltersOutputResult {
  result: [getOperationalReportFiltersOutputResultRes]
}


type getOperationalReportFiltersOutputResultRes {
  column: String
  value: [String]
}


type getOperationalReportOutput {
  data: getOperationalReportOutputResult
  error: Error
}


type getOperationalReportOutputResult {
  result: getOperationalReportOutputObj
}


type getOperationalReportOutputObj {
  reportName: String
  message: String
  status: Int
  id: String
}


input OrderSummaryInputV2 {
  requestId: String
  transactionRef: String
  orderNumber: String
  endpoint: String
  tab: String
}


type OrderSummaryOutputV2 {
  data: OrderSummaryResultV2
  error: Error
}


type OrderSummaryResultV2 {
  result: OrderSummaryResV2
}


type OrderSummaryResV2 {
  requestId: Int
  requesterName: String
  approval: ApprovalResponse
  status: String
  orderNo: String
  transactionRef: String
  transactionType: String
  isEtb: Boolean
  remarks: [StatusRemark]
  extensionRemarks: ExtensionRemarks
  totalInvestment: [TotalInvestment]
  totalRedeemAmount: [TotalRedeemAmount]
  transactionDetails: [TxDetails]
  investmentSummary: [InvestmentSummary]
  paymentSummary: [PaymentSummary]
  profile: [ClientProfile]
  documentSummary: DocumentSummary
  riskSubmitted: RiskInfo
  totalSwitchOutUnits: String
  totalRedeemUnits: String
  switchingSummary: [SwitchOutSummary]
  redemptionSummary: [RedemptionSummary]
  redeemSummary: RedeemSummary
}


type RedeemSummary {
  redeemType: String
  redemptionMethod: String
  incomeTaxDetails: RedeemIncomeTax
  proceedPayable: ProceedPayable
}


type ProceedPayable {
  bankSummary: AccountBankResponse
  ctaSummary: CtaSummaryResponse
  epfDetails: EpfDetailsResponse
}


type EpfDetailsResponse {
  epfNumber: String
  epfType: String
}


type CtaSummaryResponse {
  ctaNumber: String
  name: String
}


type AccountBankResponse {
  localBank: [BankDetails]
  foreignBank: [BankDetails]
}


type RedeemIncomeTax {
  taxNumber: String
  reason: String
}


type TotalRedeemAmount {
  fundCurrency: String
  redeemAmount: String
}


type RedemptionSummary {
  fundId: String
  fundName: String
  utmc: String
  fundAbbr: String
  fundCode: String
  units: String
  fundProcessingGroup: String
  fundType: String
  fundCategory: String
  isSyariah: String
  fundingOption: String
  isEpf: String
  fundIssuer: String
  availableUnits: String
  availableAmounts: String
  fundClass: String
  fundCurrency: String
  distributionInstruction: String
  exitFee: String
  redeemAmount: String
  currency: String
}


type SwitchOutSummary {
  switchInInfo: [SwitchInfo]
  switchOutInfo: SwitchInfo
}


type SwitchInfo {
  utmc: String
  fundCode: String
  fundName: String
  fundClass: String
  currency: String
  availableUnits: String
  salesCharge: String
  distributionInstructions: String
  exitFee: String
  switchingFee: String
  switchingLeadTime: String
  units: String
  switchOutUnits: String
  isNewFund: Boolean
}


type DocumentSummary {
  accountType: String
  softcopy: Softcopy
  hardcopy: Hardcopy
}


type Softcopy {
  required: Boolean
  documents: [DocumentList]
}


type Hardcopy {
  required: Boolean
  utmcDocs: [DocumentList]
  accDocs: [DocumentList]
}


type DocumentList {
  mainHeader: String
  subHeader: String
  documents: [DocumentMetadata]
}


type DocumentMetadata {
  title: String
  name: String
  url: String
  type: String
  label: String
}


input OrderSummaryInput {
  endpoint: String
  orderNumber: String
  requestId: String
  tab: String
  transactionRef: String
}


type OrderSummaryOutput {
  data: OrderSummaryResult
  error: Error
}


type OrderSummaryResult {
  result: OrderSummaryRes
}


type OrderSummaryRes {
  approval: ApprovalResponse
  extensionRemarks: ExtensionRemarks
  investmentSummary: [InvestmentSummary]
  orderNo: String
  paymentSummary: [PaymentSummary]
  profile: [ClientProfile]
  remarks: [StatusRemark]
  requestId: Int
  requestorName: String
  status: String
  totalInvestment: [TotalInvestment]
  transactionDetails: TxDetails
  transactionRef: String
}


type ApprovalResponse {
  eventType: String
  name: String
  remarks: String
  status: String
}


type ExtensionRemarks {
  date: String
  remarks: String
}


type TxDetails {
  accountNo: String
  accountOperationMode: String
  accountType: String
  bdmName: String
  kibProcessingBranch: String
  registrationDate: String
  servicingAdviserCode: String
  servicingAdviserName: String
  utaId: String
}


type InvestmentSummary {
  accountFund: String
  distributionInstructions: String
  feaTagged: String
  fundClass: String
  fundCode: String
  fundCurrency: String
  fundName: String
  investmentAmount: String
  investmentType: String
  productType: String
  recurring: String
  salesCharge: String
  utmc: String
  isTopup: Boolean
}


type PaymentSummary {
  bankAccountName: String
  bankAccountNumber: String
  bankName: String
  checkNumber: String
  clientName: String
  clientTrustAccountNumber: String
  epfAccountNumber: String
  epfReferenceNo: String
  frequency: String
  fundCurrency: String
  investmentAmount: String
  kibBankAccountNumber: String
  kibBankName: String
  paymentMethod: String
  paymentOn: String
  proofOfPayment: FileBase64
  recurringBank: String
  recurringType: String
  referenceNumber: String
  remark: String
  surplusNote: String
  isCombined: Boolean
  status: String
}


type ClientProfile {
  isEtb: Boolean
  addressInformation: AddressInformation
  bankInformation: BankTypes
  contactDetails: ContactDetails
  crsDeclaration: CrsDeclaration
  employmentInformation: EmploymentDetails
  epfDetails: EpfDetails
  fatcaDeclaration: FatcaDeclaration
  feaDeclaration: FeaDeclaration
  idFile: String
  idNumber: String
  idType: String
  name: String
  personalDetails: ClientDetails
  riskInfo: RiskInfo
  lastUpdated: String
  principal: Boolean
  accountHolder: String
  origin: String
}


type ClientDetails {
  bumiputera: String
  countryOfBirth: String
  dateOfBirth: String
  educationLevel: String
  gender: String
  maritalStatus: String
  monthlyHouseholdIncome: String
  mothersMaidenName: String
  nationality: String
  placeOfBirth: String
  race: String
  relationship: String
  salutation: String
  expirationDate: String
  riskProfile: String
}


type EpfDetails {
  epfAccountType: String
  epfMemberNumber: String
}


type EmploymentDetails {
  address: AddressDetails
  annualIncome: String
  nameOfEmployer: String
  natureOfBusiness: String
  occupation: String
}


type AddressDetails {
  address: SubAddress
  city: String
  country: String
  postCode: String
  state: String
}


type SubAddress {
  line1: String
  line2: String
  line3: String
  line4: String
}


type ContactDetails {
  email: String
  faxNumber: String
  homeNumber: String
  mobileNumber: String
  officeNumber: String
}


type AddressInformation {
  mailingAddress: AddressDetails
  permanentAddress: AddressDetails
}


type BankTypes {
  foreignBank: [BankDetails]
  localBank: [BankDetails]
}


type BankDetails {
  id: Int
  bankAccountName: String
  bankAccountNumber: String
  bankLocation: String
  bankName: String
  bankSwiftCode: String
  currency: [String]
  isNewBank: Boolean
}


type FatcaDeclaration {
  certificate: FileBase64
  confirmAddress: String
  correspondenceDeclaration: String
  reason: String
  usBorn: String
  usCitizen: String
  formW9: FileBase64
  formW8Ben: FileBase64
  pendingDoc: String
}


type CrsDeclaration {
  taxResident: String
  tin: [TinInfo]
}


type TinInfo {
  country: String
  reason: String
  tinNumber: String
}


type FeaDeclaration {
  balance: String
  borrowingFacility: String
  resident: String
}


type RiskInfo {
  fundChoice: String
  hnwStatus: String
  message: String
  rangeOfReturn: String
  riskCategory: String
  typeOfFunds: String
}


input TransactionStatusOverviewInput {
  orderNo: String
  transactionRef: String
}


type TransactionStatusOverviewOutput {
  data: TransactionStatusOverviewOutputResult
  error: Error
}


type TransactionStatusOverviewOutputResult {
  result: TransactionStatusOverviewOutputResponse
}


type TransactionStatusOverviewOutputResponse {
  statusOverview: [StatusOverview]
}


type StatusOverview {
  level: String
  steps: [Steps]
}


type Steps {
  createdOn: String
  status: String
  current: Boolean
}


input TransactionTrackingInput {
  orderNo: String
  filter: [TransactionTrackingFilter]
  transactionRef: String
}


input TransactionTrackingFilter {
  column: String
  value: String
}


type TransactionTrackingOutput {
  data: TransactionTrackingOutputResult
  error: Error
}


type TransactionTrackingOutputResult {
  result: TransactionTrackingOutputResponse
}


type TransactionTrackingOutputResponse {
  trackingSummary: [TrackingSummary]
  filters: TransactionTrackingFilters
}


type TrackingSummary {
  level: String
  data: [TrackingSteps]
}


type TrackingSteps {
  createdOn: String
  status: String
  name: String
  username: String
  remarks: [Remark]
}


type Remark {
  title: String
  content: [String]
}


type TransactionTrackingFilters {
  levels: [String]
}


type HqCeDashboardOutput {
  data: HqCeDashboardResult
  error: Error
}


type HqCeDashboardResult {
  result: HqCeDashboard
}


type HqCeDashboard {
  overview: HQOverview
  totalResultCount: Int
  page: Int
  pages: Int
  branches: [Branch]
  stateList: [String]
  branchCount: Int
  transactions: [Transactions]
  extensionCount: Int
}


type HQOverview {
  daily: Int
  reroute: Int
  extension: Int
  hardcopy: Int
}


input InboxInput {
  page: String
  resultLimit: String
  search: String
  source: [String]
}


type GetInbox {
  data: InboxResult
  error: Error
}


type InboxResult {
  result: InboxResponse
}


type InboxResponse {
  inbox: [InboxMessage]
  newMessageCount: String
  page: String
  pages: String
}


type InboxMessage {
  notificationId: String
  title: String
  message: String
  senderName: String
  source: String
  searchKey: String
  searchType: String
  searchLink: String
  searchId: String
  isRead: Boolean
  updatedAt: String
  createdOn: String
  isSeen: Boolean
}


type InvestorDashboardOutput {
  data: InvestorDashboardResult
  error: Error
}


type InvestorDashboardResult {
  result: InvestorDashboard
}


type InvestorDashboard {
  filters: InvestorDashboardFilters
  investorsCount: Int
  investors: [Investors]
  page: Int
  pages: Int
}


type Investors {
  branchName: String
  investorList: [Investor]
}


type Investor {
  investmentSummary: InvestmentSummary
  lastUpdated: String
  profile: [ClientProfile]
  transactionDetails: TxDetails
  transactionRef: String
  branchName: String
}


type InvestorDashboardFilters {
  paymentMethod: [String]
  riskCategory: [String]
}


type InvestorDashboardRawJson {
  clientName: String
  jointClientName: String
  agentName: String
  agentCode: String
  paymentMethod: String
  orderType: String
  transactionRef: String
  transactionType: String
  lastUpdated: String
  accountType: String
  accountNo: String
  registrationDate: String
  agentId: String
  branchId: Int
  branchName: String
  riskCategory: String
  aging: String
}


input investorProfileInput {
  idNumber: String
  tab: String
}


type investorProfileOutput {
  data: investorProfileResult
  error: Error
}


type investorProfileResult {
  result: investorProfileRes
}


type investorProfileRes {
  documentSummary: InvestorProfileDocs
  profile: ClientProfileV2
}


type InvestorProfileDocs {
  softCopy: [DocsInfo]
  hardCopy: [DocsInfo]
}


type DocsInfo {
  path: String
  name: String
  docName: String
  url: String
  type: String
}


type ClientProfileV2 {
  addressInformation: AddressInformation
  bankInformation: BankTypes
  contactDetails: ContactDetails
  crsDeclaration: CrsDeclaration
  employmentInformation: EmploymentDetails
  epfDetails: EpfDetails
  fatcaDeclaration: FatcaDeclarationV2
  feaDeclaration: FeaDeclaration
  idFile: String
  idNumber: String
  idType: String
  name: String
  personalDetails: ClientDetails
  riskInfo: RiskInfo
  lastUpdated: String
  principal: Boolean
}


type FatcaDeclarationV2 {
  certificate: String
  confirmAddress: String
  correspondenceDeclaration: String
  reason: String
  usBorn: String
  usCitizen: String
  formW9: String
  formW8Ben: String
}


input NewCaseDefinitionInput {
  utaId: String
}


type NewCaseDefinition {
  data: NewCaseDefinitionResponse
  error: Error
}


type NewCaseDefinitionResponse {
  result: NewCaseDefinitionResults
}


type NewCaseDefinitionResults {
  targetDate: String
  eddTrigger: [ReasonList]
  eddReason: [ReasonList]
  investmentSummary: InvestmentSummary
  transactionDetails: TxDetails
  profile: [ClientProfile]
  onboardingReceipt: FileBase64
}


input ReportDashboardInput {
  search: String
  source: String
}


type getOperationalReportDashboardOutput {
  data: getOperationalReportDashboardOutputResult
  error: Error
}


type getOperationalReportDashboardOutputResult {
  result: [getOperationalReportDashboardOutputObj]
}


type getOperationalReportDashboardOutputObj {
  reportName: String
  lastDownloaded: String
}


type OpsCasesDashboard {
  data: OpsCasesDashboardResponse
  error: Error
}


type OpsCasesDashboardResponse {
  result: OpsCasesDashboardResult
}


type OpsCasesDashboardResult {
  transactions: [Transactions]
  totalResultCount: Int
  rerouteCount: Int
  rejectCount: Int
  historyCount: Int
  pages: Int
  page: Int
}


type OpsDashboard {
  data: OpsDashboardResponse
  error: Error
}


type OpsDashboardResponse {
  result: OpsDashboardResult
}


type OpsDashboardResult {
  transactions: [Transactions]
  branchCount: [Int]
  totalResultCount: Int
  verifiedCount: Int
  sightedCount: Int
  epfCount: Int
  ddaCount: Int
  financeCount: Int
  pages: Int
  page: Int
}


type PendingSubmissionDashboard {
  data: PendingSubmissionDashboardResult
  error: Error
}


type PendingSubmissionDashboardResult {
  result: PendingSubmissionDashboardResponse
}


type PendingSubmissionDashboardResponse {
  groupedTransactions: TransactionByOrder
  totalResultCount: Int
  statuses: [PendingStatus]
  page: Int
  pages: Int
  filters: PendingDashboardFilters
}


type PendingStatus {
  tab: String
  count: Int
}


type PendingDashboardFilters {
  accountType: [String]
  fundType: [String]
  paymentMethod: [String]
  transactionType: [String]
}


input TransactionRefArrayInput {
  transactionRef: [String]
  tab: String
}


input StatusDropDownInput {
  endpoint: String
  tab: String
}


type StatusDropDownOutput {
  data: StatusDropDownResponse
  error: Error
}


type StatusDropDownResponse {
  result: StatusDropDownResult
}


type StatusDropDownResult {
  statusList: [String]
}


type SystemAdminAdviserDashboard {
  data: SAAdviserDashboardResult
  error: Error
}


type SAAdviserDashboardResult {
  result: SAAdviserDashboardResponse
}


type SAAdviserDashboardResponse {
  advisers: [SADashboardData]
  page: Int
  pages: Int
  adviserCount: Int
}


type SADashboardData {
  branch: String
  advisers: [SADashboardDataResult]
}


type SADashboardDataResult {
  agentId: String
  agentName: String
  bdmName: String
  bdmCode: String
  channel: String
  agency: String
  licenseCode: String
  createdOn: String
  lastUpdated: String
  status: String
  omniEnabled: String
  agentCode: String
}


type SystemAdminDashboard {
  data: SystemAdminDashboardResult
  error: Error
}


type SystemAdminDashboardResult {
  result: SystemAdminDashboardResponse
}


type SystemAdminDashboardResponse {
  transactions: [SystemAdminDashboardData]
  overview: SystemAdminOverview
  page: Int
  pages: Int
  bulkId: [String]
  totalUserCount: Int
  totalGroupCount: Int
  totalRoleCount: Int
  groupCount: Int
  roleCount: Int
}


type SystemAdminOverview {
  totalSuspendedUsers: Int
  totalActiveUsers: Int
  totalActiveGroups: Int
  totalActiveRoles: Int
  totalEditUserRequest: Int
  totalBulkImportRequest: Int
  totalCreatedUserRequest: Int
  totalSuspendedUserRequest: Int
  totalReactivateUserRequest: Int
  totalTerminateUserRequest: Int
  totalGroupRequest: Int
  totalEditGroupRequest: Int
  totalSuspendedGroupRequest: Int
  totalReactivateGroupRequest: Int
  totalDeleteGroupRequest: Int
  totalRoleRequest: Int
  totalEditRoleRequest: Int
  totalSuspendedRoleRequest: Int
  totalReactivateRoleRequest: Int
  totalDeleteRoleRequest: Int
}


type SystemAdminDashboardData {
  staffName: String
  userId: String
  loginId: String
  department: String
  userGroup: [String]
  lastLogin: String
  groupId: String
  groupName: String
  branch: [String]
  userCount: String
  roleCount: String
  roleId: String
  roleName: String
  description: String
  accessLevel: String
  requestId: String
  timestamp: String
  status: String
  source: String
  isSeen: Boolean
  lastUpdated: String
  action: String
}


input ExportInput {
  toExport: String
}


input SystemAdminInboxDataInput {
  id: Int
}


type SystemAdminInboxDataOutput {
  data: SystemAdminInboxDataOutputResult
  error: Error
}


type SystemAdminInboxDataOutputResult {
  result: GetInboxOutputResponse
}


type GetInboxOutputResponse {
  message: String
  status: Boolean
  data: SystemAdminInboxData
}


type SystemAdminInboxData {
  value: String
  authorName: String
  approverName: String
  approvalStatus: String
  isExpired: Boolean
  source: String
  type: String
  createdOn: String
  remarks: String
  fundData: String
}


type SystemSettingsDashboard {
  data: SystemSettingsDashboardResult
  error: Error
}


type SystemSettingsDashboardResult {
  result: SystemSettingsDashboardResponse
}


type SystemSettingsDashboardResponse {
  settings: [SystemSettingsDashboardRes]
  totalResultCount: Int
  page: Int
  pages: Int
}


type SystemSettingsDashboardRes {
  settingsId: Int
  displayName: String
  description: String
  status: String
  currentStatus: String
  requestStatus: String
  requestEffectiveDate: String
  requestId: String
  effectiveDate: String
  lastUpdated: String
  isSeen: Boolean
}


type TrackingDashboard {
  data: TrackingDashboardResult
  error: Error
}


type TrackingDashboardResult {
  result: TrackingDashboardResponse
}


type TrackingDashboardResponse {
  groupedTransactions: TransactionByBranch
  totalResultCount: Int
  filters: TrackingFilters
  page: Int
  pages: Int
}


type TrackingFilters {
  branchName: [String]
  transactionType: [String]
  branchStatus: [String]
  batchTime: [String]
}


type TransactionByBranch {
  grouping: [GroupByBranch]
}


type GroupByBranch {
  type: String
  groupingData: GroupingData
  transactionData: TransactionByOrder
}


input TransactionPdfInput {
  transactionId: String
  tab: String
}


type TransactionPdfOutput {
  data: TransactionPdfOutputResult
  error: Error
}


type TransactionPdfOutputResult {
  result: TransactionPdfOutputResponse
}


type TransactionPdfOutputResponse {
  message: String
  status: Boolean
  path: String
}


input TransactionReasonListInputV2 {
  source: String
  actionType: String
  transactionType: String
  transactionRef: String
}


type TransactionReasonListOutputV2 {
  data: TransactionReasonListResult
  error: Error
}


input TransactionReasonListInput {
  source: String
  actionType: String
  transactionType: String
  salesType: String
  transactionRef: String
}


type TransactionReasonListOutput {
  data: TransactionReasonListResult
  error: Error
}


type TransactionReasonListResult {
  result: TransactionReasonList
}


type TransactionReasonList {
  reasons: [ReasonList]
  targetDate: String
  rerouteDocuments: [DocumentData]
}


type DocumentData {
  fileName: String
  issuingHouse: String
  documentName: String
  id: String
  reRoutedDoc: Boolean
}


input TransactionRequestInput {
  requestId: String
}


type TransactionRequestOutput {
  data: TransactionRequestResult
  error: Error
}


type TransactionRequestResult {
  result: TransactionRequestRes
}


type TransactionRequestRes {
  orderNo: String
  requestId: Int
  requestorName: String
  reasons: [ReasonList]
  eventType: String
  approval: ApprovalResponse
  targetDate: String
  rerouteDocuments: [DocumentData]
}


type UserProfileOutput {
  data: UserProfileResult
  error: Error
}


type UserProfileResult {
  result: UserProfileRes
}


type UserProfileRes {
  name: String
  status: String
  homeBranch: String
  department: String
  email: String
  mobileNo: String
}


type Subscription {
  dailySummaryReportProgress(mutations: [String]): DailySummaryReportProgressResponse
  onDashboardExportList(mutations: [String]): ExportListRes
  operationReportProgress(mutations: [String]): OperationReportProgressResponse
}


type DailySummaryReportProgressResponse {
  data: DailySummaryReportProgressResult
  error: Error
}


type DailySummaryReportProgressResult {
  result: DailySummaryReportObj
}


type DailySummaryReportObj {
  message: String
  event: String
  id: String
}


input dailySummaryReportProcessInput {
  message: String
  event: String
  id: String
}


type OperationReportProgressResponse {
  data: OperationReportProgressResult
  error: Error
}


type OperationReportProgressResult {
  result: OperationReportObj
}


type OperationReportObj {
  message: String
  event: String
  id: String
}


input operationReportProgressInput {
  message: String
  event: String
  id: String
}

schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}
`;class Hv{constructor(e){An(this,"mapping");this.mapping=e}getFor(e){return this.mapping.get(e.name)}}var ai;(function(r){r.UNION="union",r.ARGUMENT="argument",r.FIELD="field"})(ai||(ai={}));function zv(r){const e=new Map;return Wv(r,t=>{me(t)&&Yv(t,s=>{const o=Ta(s.type);pa(e,o).references.push({kind:ai.FIELD,parent:t,by:s}),Qv(s,l=>{const p=Ta(l.type);pa(e,p).references.push({kind:ai.ARGUMENT,field:s,type:t,by:l})})}),Je(t)&&t.getTypes().forEach(s=>{pa(e,s).references.push({kind:ai.UNION,by:t})})}),new Hv(e)}function Wv(r,e){Object.entries(r.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||e(t)})}function Yv(r,e){Object.entries(r.getFields()).forEach(([,t])=>{e(t)})}function Qv(r,e){Object.entries(r.args).forEach(([,t])=>{e(t)})}function pa(r,e){let t=r.get(e.name);return t||(t={references:[]},r.set(e.name,t)),t}function Ta(r){return ae(r)||cr(r)?Ta(r.ofType):r}const le=uE(),va=Ba(La.DIRECTIVES,[]);var tp;const Jv=Bs((tp=le.getQueryType())==null?void 0:tp.getFields());var rp;const Xv=Bs((rp=le.getMutationType())==null?void 0:rp.getFields());var ip;const Zv=Bs((ip=le.getSubscriptionType())==null?void 0:ip.getFields()),Ga=Ft.keyBy(sf(),r=>r.name.toLocaleLowerCase()),Kv=Ft.mapValues(Ga,r=>{const e=va.find(t=>(t==null?void 0:t.name)===r.name||(t==null?void 0:t.name)==="*");return e?e.args.some(t=>t==="*")?r.args:e.args.map(t=>r.args.find(s=>s.name===t)).filter(t=>!!t):[]}),nE=Bs(le.getTypeMap()),eE=zv(le);function Bs(r){return Ft.mapKeys(r||{},(e,t)=>t.toLocaleLowerCase())}function tE(){return Ft.size(le.getTypeMap())<=10}function rE(){return[fa("Queries",le.getQueryType()),fa("Mutations",le.getMutationType()),fa("Subscriptions",le.getSubscriptionType()),lE(),oE()].filter(r=>!!r)}function fa(r,e){return sE(r,iE(e))}function iE(r){return Ft.sortBy((r==null?void 0:r.getFields())||{},e=>e.name)}function sE(r,e){return e.length===0?null:{type:"menu",title:r,children:e.map(t=>({type:"page",title:t.name,section:r,deprecated:!!t.deprecationReason,href:di.joinUrlPaths(_s,r.toLocaleLowerCase(),t.name)}))}}function oE(){return tE()?null:{type:"menu",title:"Types",children:Ft.sortBy(Ft.map(le.getTypeMap()),e=>e.name).filter(e=>!e.name.startsWith("__")).map(e=>({type:"page",title:e.name,section:"Types",href:di.joinUrlPaths(_s,"types",e.name)}))}}function bE(){return!!le.getQueryType()}function AE(r){return Jv[r.toLocaleLowerCase()]}function _E(){return!!le.getMutationType()}function RE(r){return Xv[r.toLocaleLowerCase()]}function FE(){return!!le.getSubscriptionType()}function CE(r){return Zv[r.toLocaleLowerCase()]}function wE(r){return nE[r.toLocaleLowerCase()]}function aE(r){return Ga[r.toLocaleLowerCase()]}function NE(r){return aE(r.name)!==void 0}function OE(){return Ft.size(Ga)>0}function xE(r){return Kv[r.name.toLocaleLowerCase()]||[]}function kE(r){if(r)return eE.getFor(r)}function LE(r){return Ft.flatMap(r.getFields(),e=>({field:e,possibleDescriptions:rf(e,r)}))}function rf(r,e){return r?r.description?[{description:r.description,from:e}]:me(e)?e.getInterfaces().flatMap(t=>rf(t.getFields()[r.name],t)):[]:[]}function sf(){return va.some(r=>(r==null?void 0:r.name)==="*")?le.getDirectives().filter(r=>!["include","skip","deprecated","specifiedBy"].includes(r.name)):va.filter(r=>!!(r!=null&&r.name)).map(({name:r})=>r?le.getDirective(r):void 0).filter(r=>!!r)}function uE(){return np.trim().length===0?Vv(JSON.parse(JSON.stringify({__schema:{types:[]}}))):jv(np)}function lE(){const r=sf();return r.length===0?null:{type:"menu",title:"Directives",children:r.map(e=>({type:"page",title:e.name,href:di.joinUrlPaths(_s,"directives",e.name),section:"Directives"}))}}const BE=Ba(La.APP_TITLE,"GraphQL Documentation"),of=pE().concat(rE());dE(of);const cE=Object.freeze(of),PE=fE();function pE(){return Ba(La.PAGES,hE()).filter(e=>!!e).map(e=>uf([],e))}function fE(){const r=gE();if(r)return r.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function dE(r){function e(s,o){for(const u of s){if(u.type==="page"){o(u);continue}u.type==="menu"&&e(u.children,o)}}let t;e(r,s=>{t&&(t.next={title:s.title,section:s.section,href:s.href},s.previous={title:t.title,section:t.section,href:t.href}),t=s})}function gE(){return af(()=>!0)}function UE(r){return af(e=>e.href.toLocaleLowerCase()===r.toLocaleLowerCase())}function af(r){function e(t){for(const s of t){if(s.type==="page"&&r(s))return s;if(s.type==="menu"){const o=e(s.children);if(o)return o}}return null}return e(cE)}function uf(r,e){if(typeof e.content=="string")return{type:"page",title:e.title,content:e.content,href:di.joinUrlPaths(_s,...r,ep(e.title))};const t=r.concat([ep(e.title)]);return{type:"menu",title:e.title,children:e.content.map(s=>({...uf(t,s),section:e.title}))}}function ep(r){return di.generatePathSegment(r,new Ip)}function hE(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(r=>r.trim()).join(`
`)}]}]}export{bE as A,Ip as B,AE as C,FE as D,CE as E,QT as F,ae as G,cr as H,Up as I,Pp as J,wE as K,kE as L,LE as M,NE as N,E as O,EE as P,Rs as Q,ai as R,up as S,TE as T,ei as U,XI as V,Ft as _,IE as a,Ba as b,We as c,me as d,ut as e,ue as f,op as g,Wt as h,Xe as i,Je as j,Ze as k,tE as l,Dn as m,BE as n,vE as o,cE as p,PE as q,UE as r,le as s,La as t,di as u,OE as v,aE as w,xE as x,_E as y,RE as z};
