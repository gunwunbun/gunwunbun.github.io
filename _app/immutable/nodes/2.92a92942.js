import{S as Be,i as Fe,s as ce,k as d,q as b,a as g,l as u,m as f,r as k,c as p,h as c,n as i,b as ie,D as s,J as st,H as pl,C as nt,K as x,L as ts,e as at,M as ls,N as rt,E as ot,F as it,G as ct,O as qe,g as D,d as S,P as ss,Q as Jl,R as Q,y as z,z as C,A as H,T as vl,B as T,U as as,V as rs}from"../chunks/index.139bef6a.js";function ns(o){let e,r,l=" ",t,a,n,E,_;return{c(){e=d("label"),r=d("input"),t=b(l),a=g(),n=d("span"),this.h()},l(y){e=u(y,"LABEL",{class:!0});var $=f(e);r=u($,"INPUT",{class:!0,type:!0}),t=k($,l),a=p($),n=u($,"SPAN",{class:!0}),f(n).forEach(c),$.forEach(c),this.h()},h(){i(r,"class","togglerInput svelte-cke41r"),i(r,"type","checkbox"),r.checked=o[0],i(n,"class","ball svelte-cke41r"),i(e,"class","toggler svelte-cke41r")},m(y,$){ie(y,e,$),s(e,r),s(e,t),s(e,a),s(e,n),E||(_=st(r,"click",o[1]),E=!0)},p(y,[$]){$&1&&(r.checked=y[0])},i:pl,o:pl,d(y){y&&c(e),E=!1,_()}}}function os(o,e,r){let l=!0;function t(){r(0,l=!l),localStorage.setItem("theme",l?"dark":"light"),l?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),l=!0):(document.documentElement.classList.remove("dark"),l=!1),[l,t]}class is extends Be{constructor(e){super(),Fe(this,e,os,ns,ce,{})}}const Ql={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function Xl(o,e,r){const l=o.slice();return l[9]=e[r][0],l[10]=e[r][1],l}function gl(o){let e,r=[o[10]],l={};for(let t=0;t<r.length;t+=1)l=x(l,r[t]);return{c(){e=ts(o[9]),this.h()},l(t){e=ls(t,o[9],{}),f(e).forEach(c),this.h()},h(){rt(e,l)},m(t,a){ie(t,e,a)},p(t,a){rt(e,l=qe(r,[a&16&&t[10]]))},d(t){t&&c(e)}}}function Yl(o){let e=o[9],r,l=o[9]&&gl(o);return{c(){l&&l.c(),r=at()},l(t){l&&l.l(t),r=at()},m(t,a){l&&l.m(t,a),ie(t,r,a)},p(t,a){t[9]?e?ce(e,t[9])?(l.d(1),l=gl(t),e=t[9],l.c(),l.m(r.parentNode,r)):l.p(t,a):(l=gl(t),e=t[9],l.c(),l.m(r.parentNode,r)):e&&(l.d(1),l=null,e=t[9])},d(t){t&&c(r),l&&l.d(t)}}}function cs(o){let e,r,l,t,a=o[4],n=[];for(let h=0;h<a.length;h+=1)n[h]=Yl(Xl(o,a,h));const E=o[8].default,_=nt(E,o,o[7],null);let y=[Ql,o[5],{width:o[2]},{height:o[2]},{stroke:o[1]},{"stroke-width":o[3]},{class:l=`lucide-icon lucide lucide-${o[0]} ${o[6].class??""}`}],$={};for(let h=0;h<y.length;h+=1)$=x($,y[h]);return{c(){e=ts("svg");for(let h=0;h<n.length;h+=1)n[h].c();r=at(),_&&_.c(),this.h()},l(h){e=ls(h,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var m=f(e);for(let w=0;w<n.length;w+=1)n[w].l(m);r=at(),_&&_.l(m),m.forEach(c),this.h()},h(){rt(e,$)},m(h,m){ie(h,e,m);for(let w=0;w<n.length;w+=1)n[w]&&n[w].m(e,null);s(e,r),_&&_.m(e,null),t=!0},p(h,[m]){if(m&16){a=h[4];let w;for(w=0;w<a.length;w+=1){const de=Xl(h,a,w);n[w]?n[w].p(de,m):(n[w]=Yl(de),n[w].c(),n[w].m(e,r))}for(;w<n.length;w+=1)n[w].d(1);n.length=a.length}_&&_.p&&(!t||m&128)&&ot(_,E,h,h[7],t?ct(E,h[7],m,null):it(h[7]),null),rt(e,$=qe(y,[Ql,m&32&&h[5],(!t||m&4)&&{width:h[2]},(!t||m&4)&&{height:h[2]},(!t||m&2)&&{stroke:h[1]},(!t||m&8)&&{"stroke-width":h[3]},(!t||m&65&&l!==(l=`lucide-icon lucide lucide-${h[0]} ${h[6].class??""}`))&&{class:l}]))},i(h){t||(D(_,h),t=!0)},o(h){S(_,h),t=!1},d(h){h&&c(e),ss(n,h),_&&_.d(h)}}}function ds(o,e,r){const l=["name","color","size","strokeWidth","iconNode"];let t=Jl(e,l),{$$slots:a={},$$scope:n}=e,{name:E}=e,{color:_="currentColor"}=e,{size:y=24}=e,{strokeWidth:$=2}=e,{iconNode:h}=e;return o.$$set=m=>{r(6,e=x(x({},e),Q(m))),r(5,t=Jl(e,l)),"name"in m&&r(0,E=m.name),"color"in m&&r(1,_=m.color),"size"in m&&r(2,y=m.size),"strokeWidth"in m&&r(3,$=m.strokeWidth),"iconNode"in m&&r(4,h=m.iconNode),"$$scope"in m&&r(7,n=m.$$scope)},e=Q(e),[E,_,y,$,h,t,e,n,a]}class us extends Be{constructor(e){super(),Fe(this,e,ds,cs,ce,{name:0,color:1,size:2,strokeWidth:3,iconNode:4})}}const _l=us;function fs(o){let e;const r=o[2].default,l=nt(r,o,o[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&8)&&ot(l,r,t,t[3],e?ct(r,t[3],a,null):it(t[3]),null)},i(t){e||(D(l,t),e=!0)},o(t){S(l,t),e=!1},d(t){l&&l.d(t)}}}function hs(o){let e,r;const l=[{name:"arrow-right"},o[1],{iconNode:o[0]}];let t={$$slots:{default:[fs]},$$scope:{ctx:o}};for(let a=0;a<l.length;a+=1)t=x(t,l[a]);return e=new _l({props:t}),{c(){z(e.$$.fragment)},l(a){C(e.$$.fragment,a)},m(a,n){H(e,a,n),r=!0},p(a,[n]){const E=n&3?qe(l,[l[0],n&2&&vl(a[1]),n&1&&{iconNode:a[0]}]):{};n&8&&(E.$$scope={dirty:n,ctx:a}),e.$set(E)},i(a){r||(D(e.$$.fragment,a),r=!0)},o(a){S(e.$$.fragment,a),r=!1},d(a){T(e,a)}}}function ms(o,e,r){let{$$slots:l={},$$scope:t}=e;const a=[["line",{x1:"5",y1:"12",x2:"19",y2:"12"}],["polyline",{points:"12 5 19 12 12 19"}]];return o.$$set=n=>{r(1,e=x(x({},e),Q(n))),"$$scope"in n&&r(3,t=n.$$scope)},e=Q(e),[a,e,l,t]}class gs extends Be{constructor(e){super(),Fe(this,e,ms,hs,ce,{})}}const lt=gs;function ps(o){let e;const r=o[2].default,l=nt(r,o,o[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&8)&&ot(l,r,t,t[3],e?ct(r,t[3],a,null):it(t[3]),null)},i(t){e||(D(l,t),e=!0)},o(t){S(l,t),e=!1},d(t){l&&l.d(t)}}}function vs(o){let e,r;const l=[{name:"clipboard-list"},o[1],{iconNode:o[0]}];let t={$$slots:{default:[ps]},$$scope:{ctx:o}};for(let a=0;a<l.length;a+=1)t=x(t,l[a]);return e=new _l({props:t}),{c(){z(e.$$.fragment)},l(a){C(e.$$.fragment,a)},m(a,n){H(e,a,n),r=!0},p(a,[n]){const E=n&3?qe(l,[l[0],n&2&&vl(a[1]),n&1&&{iconNode:a[0]}]):{};n&8&&(E.$$scope={dirty:n,ctx:a}),e.$set(E)},i(a){r||(D(e.$$.fragment,a),r=!0)},o(a){S(e.$$.fragment,a),r=!1},d(a){T(e,a)}}}function _s(o,e,r){let{$$slots:l={},$$scope:t}=e;const a=[["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]];return o.$$set=n=>{r(1,e=x(x({},e),Q(n))),"$$scope"in n&&r(3,t=n.$$scope)},e=Q(e),[a,e,l,t]}class bs extends Be{constructor(e){super(),Fe(this,e,_s,vs,ce,{})}}const Zl=bs;function ks(o){let e;const r=o[2].default,l=nt(r,o,o[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&8)&&ot(l,r,t,t[3],e?ct(r,t[3],a,null):it(t[3]),null)},i(t){e||(D(l,t),e=!0)},o(t){S(l,t),e=!1},d(t){l&&l.d(t)}}}function $s(o){let e,r;const l=[{name:"globe"},o[1],{iconNode:o[0]}];let t={$$slots:{default:[ks]},$$scope:{ctx:o}};for(let a=0;a<l.length;a+=1)t=x(t,l[a]);return e=new _l({props:t}),{c(){z(e.$$.fragment)},l(a){C(e.$$.fragment,a)},m(a,n){H(e,a,n),r=!0},p(a,[n]){const E=n&3?qe(l,[l[0],n&2&&vl(a[1]),n&1&&{iconNode:a[0]}]):{};n&8&&(E.$$scope={dirty:n,ctx:a}),e.$set(E)},i(a){r||(D(e.$$.fragment,a),r=!0)},o(a){S(e.$$.fragment,a),r=!1},d(a){T(e,a)}}}function ws(o,e,r){let{$$slots:l={},$$scope:t}=e;const a=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"2",y1:"12",x2:"22",y2:"12"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"}]];return o.$$set=n=>{r(1,e=x(x({},e),Q(n))),"$$scope"in n&&r(3,t=n.$$scope)},e=Q(e),[a,e,l,t]}class Es extends Be{constructor(e){super(),Fe(this,e,ws,$s,ce,{})}}const es=Es;function ys(o){let e,r,l,t,a,n,E,_,y,$,h,m,w,de,ue,dt,Ue,X,N,fe,he,ut,ft,G,j,We,ht,F,me,mt,gt,ge,pt,vt,W,_t,Y,bt,L,Oe,kt,O,Z,$t,pe,wt,Et,ve,yt,It,q,Dt,ee,St,B,te,_e,Nt,xt,be,Vt,Mt,le,Pt,se,At,ke,$e,zt,Ct,I,we,ae,Ht,Ee,Tt,jt,ye,Lt,Gt,Ie,Rt,Bt,V,De,re,Ft,Se,Wt,Ot,Ne,qt,Ut,xe,Kt,Jt,M,Ve,ne,Qt,Me,Xt,Yt,Pe,Zt,el,Ae,tl,ll,P,ze,oe,sl,Ce,al,rl,He,nl,ol,Te,il,Ke,cl,bl;return t=new is({}),_=new lt({props:{class:"ml-2 mb-1 inline"}}),Y=new lt({props:{class:"arrow ml-1"}}),ee=new lt({props:{class:"arrow ml-1"}}),se=new lt({props:{class:"arrow ml-1"}}),ae=new es({props:{size:"18"}}),re=new Zl({props:{size:"18"}}),ne=new Zl({props:{size:"18"}}),oe=new es({props:{size:"18"}}),{c(){e=d("div"),r=d("div"),l=d("div"),z(t.$$.fragment),a=g(),n=d("a"),E=b("GitHub"),z(_.$$.fragment),y=g(),$=d("div"),h=d("div"),m=d("img"),de=g(),ue=d("h4"),dt=b("byte me;"),Ue=g(),X=d("div"),N=d("div"),fe=d("div"),he=d("h2"),ut=b("Projects"),ft=g(),G=d("div"),j=d("div"),We=d("div"),ht=g(),F=d("div"),me=d("h1"),mt=b("Slime Shooter"),gt=g(),ge=d("p"),pt=b("Top-Down Shooter game made with Unity, built for WebGL."),vt=g(),W=d("span"),_t=b("Take me there "),z(Y.$$.fragment),bt=g(),L=d("div"),Oe=d("div"),kt=g(),O=d("div"),Z=d("h1"),$t=b("Lizard Launcher "),pe=d("span"),wt=b("(Closed Alpha)"),Et=g(),ve=d("p"),yt=b("Cataclysm: Dark Days Ahead launcher app built with Rust and SvelteKit."),It=g(),q=d("span"),Dt=b("Take me there "),z(ee.$$.fragment),St=g(),B=d("div"),te=d("div"),_e=d("h1"),Nt=b("My other work"),xt=g(),be=d("p"),Vt=b("Check out my GitHub to see more of my projects."),Mt=g(),le=d("span"),Pt=b("Take me there "),z(se.$$.fragment),At=g(),ke=d("div"),$e=d("h2"),zt=b("Working experience"),Ct=g(),I=d("div"),we=d("span"),z(ae.$$.fragment),Ht=g(),Ee=d("h1"),Tt=b("Steel Vintage Bikes GmbH"),jt=g(),ye=d("time"),Lt=b("2019 - Current"),Gt=g(),Ie=d("p"),Rt=b("Full-stack web development. Building and maintaining Magento 2 e-commerce store."),Bt=g(),V=d("div"),De=d("span"),z(re.$$.fragment),Ft=g(),Se=d("h3"),Wt=b("Remote job"),Ot=g(),Ne=d("time"),qt=b("Feb 2020 - Current"),Ut=g(),xe=d("p"),Kt=b("Front-end redesign and migration, administrative tool development and sysadmin tasks."),Jt=g(),M=d("div"),Ve=d("span"),z(ne.$$.fragment),Qt=g(),Me=d("h3"),Xt=b("Internship abroad"),Yt=g(),Pe=d("time"),Zt=b("Sep 2019 - Feb 2020"),el=g(),Ae=d("p"),tl=b("Magento 1 > 2 migration and development of administrative tool."),ll=g(),P=d("div"),ze=d("span"),z(oe.$$.fragment),sl=g(),Ce=d("h1"),al=b("React Online"),rl=g(),He=d("time"),nl=b("2021"),ol=g(),Te=d("p"),il=b("Built the proof of concept of a digital library based on Drupal, applying Optical Character Recognition (OCR) on old newspapers and documents and exploring the Apache Solr search platform."),this.h()},l(v){e=u(v,"DIV",{class:!0});var je=f(e);r=u(je,"DIV",{class:!0});var Je=f(r);l=u(Je,"DIV",{class:!0});var Qe=f(l);C(t.$$.fragment,Qe),a=p(Qe),n=u(Qe,"A",{class:!0,href:!0,target:!0,rel:!0});var dl=f(n);E=k(dl,"GitHub"),C(_.$$.fragment,dl),dl.forEach(c),Qe.forEach(c),y=p(Je),$=u(Je,"DIV",{class:!0});var kl=f($);h=u(kl,"DIV",{class:!0});var Xe=f(h);m=u(Xe,"IMG",{src:!0,class:!0,alt:!0}),de=p(Xe),ue=u(Xe,"H4",{class:!0});var $l=f(ue);dt=k($l,"byte me;"),$l.forEach(c),Xe.forEach(c),kl.forEach(c),Je.forEach(c),je.forEach(c),Ue=p(v),X=u(v,"DIV",{class:!0});var wl=f(X);N=u(wl,"DIV",{class:!0});var R=f(N);fe=u(R,"DIV",{class:!0});var El=f(fe);he=u(El,"H2",{class:!0});var yl=f(he);ut=k(yl,"Projects"),yl.forEach(c),El.forEach(c),ft=p(R),G=u(R,"DIV",{class:!0});var Le=f(G);j=u(Le,"DIV",{class:!0});var Ge=f(j);We=u(Ge,"DIV",{class:!0}),f(We).forEach(c),ht=p(Ge),F=u(Ge,"DIV",{class:!0});var Ye=f(F);me=u(Ye,"H1",{class:!0});var Il=f(me);mt=k(Il,"Slime Shooter"),Il.forEach(c),gt=p(Ye),ge=u(Ye,"P",{class:!0});var Dl=f(ge);pt=k(Dl,"Top-Down Shooter game made with Unity, built for WebGL."),Dl.forEach(c),Ye.forEach(c),vt=p(Ge),W=u(Ge,"SPAN",{class:!0,href:!0});var ul=f(W);_t=k(ul,"Take me there "),C(Y.$$.fragment,ul),ul.forEach(c),Ge.forEach(c),bt=p(Le),L=u(Le,"DIV",{class:!0});var Re=f(L);Oe=u(Re,"DIV",{class:!0}),f(Oe).forEach(c),kt=p(Re),O=u(Re,"DIV",{class:!0});var Ze=f(O);Z=u(Ze,"H1",{class:!0});var fl=f(Z);$t=k(fl,"Lizard Launcher "),pe=u(fl,"SPAN",{class:!0});var Sl=f(pe);wt=k(Sl,"(Closed Alpha)"),Sl.forEach(c),fl.forEach(c),Et=p(Ze),ve=u(Ze,"P",{class:!0});var Nl=f(ve);yt=k(Nl,"Cataclysm: Dark Days Ahead launcher app built with Rust and SvelteKit."),Nl.forEach(c),Ze.forEach(c),It=p(Re),q=u(Re,"SPAN",{class:!0,href:!0});var hl=f(q);Dt=k(hl,"Take me there "),C(ee.$$.fragment,hl),hl.forEach(c),Re.forEach(c),St=p(Le),B=u(Le,"DIV",{class:!0});var et=f(B);te=u(et,"DIV",{});var tt=f(te);_e=u(tt,"H1",{class:!0});var xl=f(_e);Nt=k(xl,"My other work"),xl.forEach(c),xt=p(tt),be=u(tt,"P",{class:!0});var Vl=f(be);Vt=k(Vl,"Check out my GitHub to see more of my projects."),Vl.forEach(c),tt.forEach(c),Mt=p(et),le=u(et,"SPAN",{class:!0});var ml=f(le);Pt=k(ml,"Take me there "),C(se.$$.fragment,ml),ml.forEach(c),et.forEach(c),Le.forEach(c),At=p(R),ke=u(R,"DIV",{class:!0});var Ml=f(ke);$e=u(Ml,"H2",{class:!0});var Pl=f($e);zt=k(Pl,"Working experience"),Pl.forEach(c),Ml.forEach(c),Ct=p(R),I=u(R,"DIV",{class:!0});var A=f(I);we=u(A,"SPAN",{class:!0});var Al=f(we);C(ae.$$.fragment,Al),Al.forEach(c),Ht=p(A),Ee=u(A,"H1",{class:!0});var zl=f(Ee);Tt=k(zl,"Steel Vintage Bikes GmbH"),zl.forEach(c),jt=p(A),ye=u(A,"TIME",{class:!0});var Cl=f(ye);Lt=k(Cl,"2019 - Current"),Cl.forEach(c),Gt=p(A),Ie=u(A,"P",{class:!0});var Hl=f(Ie);Rt=k(Hl,"Full-stack web development. Building and maintaining Magento 2 e-commerce store."),Hl.forEach(c),Bt=p(A),V=u(A,"DIV",{class:!0});var U=f(V);De=u(U,"SPAN",{class:!0});var Tl=f(De);C(re.$$.fragment,Tl),Tl.forEach(c),Ft=p(U),Se=u(U,"H3",{class:!0});var jl=f(Se);Wt=k(jl,"Remote job"),jl.forEach(c),Ot=p(U),Ne=u(U,"TIME",{class:!0});var Ll=f(Ne);qt=k(Ll,"Feb 2020 - Current"),Ll.forEach(c),Ut=p(U),xe=u(U,"P",{class:!0});var Gl=f(xe);Kt=k(Gl,"Front-end redesign and migration, administrative tool development and sysadmin tasks."),Gl.forEach(c),U.forEach(c),Jt=p(A),M=u(A,"DIV",{class:!0});var K=f(M);Ve=u(K,"SPAN",{class:!0});var Rl=f(Ve);C(ne.$$.fragment,Rl),Rl.forEach(c),Qt=p(K),Me=u(K,"H3",{class:!0});var Bl=f(Me);Xt=k(Bl,"Internship abroad"),Bl.forEach(c),Yt=p(K),Pe=u(K,"TIME",{class:!0});var Fl=f(Pe);Zt=k(Fl,"Sep 2019 - Feb 2020"),Fl.forEach(c),el=p(K),Ae=u(K,"P",{class:!0});var Wl=f(Ae);tl=k(Wl,"Magento 1 > 2 migration and development of administrative tool."),Wl.forEach(c),K.forEach(c),A.forEach(c),ll=p(R),P=u(R,"DIV",{class:!0});var J=f(P);ze=u(J,"SPAN",{class:!0});var Ol=f(ze);C(oe.$$.fragment,Ol),Ol.forEach(c),sl=p(J),Ce=u(J,"H1",{class:!0});var ql=f(Ce);al=k(ql,"React Online"),ql.forEach(c),rl=p(J),He=u(J,"TIME",{class:!0});var Ul=f(He);nl=k(Ul,"2021"),Ul.forEach(c),ol=p(J),Te=u(J,"P",{class:!0});var Kl=f(Te);il=k(Kl,"Built the proof of concept of a digital library based on Drupal, applying Optical Character Recognition (OCR) on old newspapers and documents and exploring the Apache Solr search platform."),Kl.forEach(c),J.forEach(c),R.forEach(c),wl.forEach(c),this.h()},h(){i(n,"class","btn git rounded border mr-8"),i(n,"href","https://github.com/gunwunbun"),i(n,"target","_blank"),i(n,"rel","noreferrer"),i(l,"class","relative w-full flex justify-end bg-secondary-light dark:bg-secondary py-4 rounded-xl"),as(m.src,w="https://avatars.githubusercontent.com/u/34831190?v=3")||i(m,"src",w),i(m,"class","w-1/4 lg:w-3/12 rounded-full"),i(m,"alt","Me"),i(ue,"class","quote mt-4"),i(h,"class","flex flex-col justify-center items-center"),i($,"class","flex flex-col justify-center items-center mt-16"),i(r,"class","w-11/12 md:w-3/4 2xl:w-1/2 max-w-screen-xl"),i(e,"class","w-full py-8 flex items-center justify-center"),i(he,"class","font-semibold text-4xl"),i(fe,"class","mt-16"),i(We,"class","absolute rounded-xl inset-0 w-full h-full bg-accent bg-opacity-95"),i(me,"class","title text-white"),i(ge,"class","mt-2 mb-4 leading-relaxed text-md text-gray-100 h-16"),i(F,"class","z-10"),i(W,"class","mt-8 btn-inline flex items-center text-white mx-auto z-10"),i(W,"href","https://simmer.io/@gunwunbun/slimeshooter"),i(j,"class","relative bg-slime-shooter rounded-xl p-8 mt-8 card flex flex-col justify-between"),i(Oe,"class","absolute rounded-xl inset-0 w-full h-full bg-[#326470] bg-opacity-95"),i(pe,"class","text-gray-300 text-sm"),i(Z,"class","title text-white"),i(ve,"class","mt-2 mb-4 leading-relaxed text-md text-gray-100 h-16"),i(O,"class","z-10"),i(q,"class","mt-8 btn-inline flex items-center text-white mx-auto z-10"),i(q,"href","https://github.com/gunwunbun"),i(L,"class","relative bg-lizard-launcher bg-cover rounded-xl p-8 lg:mt-8 card flex flex-col justify-between"),i(_e,"class","title"),i(be,"class","my-6 leading-relaxed text-xl"),i(le,"class","btn-inline flex items-center"),i(B,"class","bg-secondary-light rounded-xl p-8 card flex flex-col justify-between"),i(G,"class","grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-fit"),i($e,"class","font-semibold text-4xl"),i(ke,"class","mt-16"),i(we,"class","work-icon"),i(Ee,"class","title"),i(ye,"class","text-gray-500 text-lg inline-block my-1.5 font-medium"),i(Ie,"class","paragraph"),i(De,"class","work-icon"),i(Se,"class","text-xl font-semibold tracking-tight"),i(Ne,"class","text-gray-500 inline-block my-1.5 font-medium"),i(xe,"class","paragraph"),i(V,"class","pl-8 mt-8 border-l-4 border-secondary-light"),i(Ve,"class","work-icon"),i(Me,"class","text-xl font-semibold tracking-tight"),i(Pe,"class","text-gray-500 inline-block my-1.5 font-medium"),i(Ae,"class","paragraph"),i(M,"class","pl-8 pt-8 border-l-4 border-secondary-light"),i(I,"class","mt-12 pl-8 border-l-4 border-secondary-light w-full lg:w-3/4 relative"),i(ze,"class","work-icon"),i(Ce,"class","title"),i(He,"class","text-gray-500 text-lg inline-block my-1.5 font-medium"),i(Te,"class","paragraph"),i(P,"class","pt-12 pl-8 border-l-4 border-secondary-light w-full lg:w-3/4 relative"),i(N,"class","w-11/12 md:w-3/4 2xl:w-1/2 max-w-screen-xl"),i(X,"class","w-full px-0 pt-0 lg:pb-8 pb-8 flex items-center justify-center")},m(v,je){ie(v,e,je),s(e,r),s(r,l),H(t,l,null),s(l,a),s(l,n),s(n,E),H(_,n,null),s(r,y),s(r,$),s($,h),s(h,m),s(h,de),s(h,ue),s(ue,dt),ie(v,Ue,je),ie(v,X,je),s(X,N),s(N,fe),s(fe,he),s(he,ut),s(N,ft),s(N,G),s(G,j),s(j,We),s(j,ht),s(j,F),s(F,me),s(me,mt),s(F,gt),s(F,ge),s(ge,pt),s(j,vt),s(j,W),s(W,_t),H(Y,W,null),s(G,bt),s(G,L),s(L,Oe),s(L,kt),s(L,O),s(O,Z),s(Z,$t),s(Z,pe),s(pe,wt),s(O,Et),s(O,ve),s(ve,yt),s(L,It),s(L,q),s(q,Dt),H(ee,q,null),s(G,St),s(G,B),s(B,te),s(te,_e),s(_e,Nt),s(te,xt),s(te,be),s(be,Vt),s(B,Mt),s(B,le),s(le,Pt),H(se,le,null),s(N,At),s(N,ke),s(ke,$e),s($e,zt),s(N,Ct),s(N,I),s(I,we),H(ae,we,null),s(I,Ht),s(I,Ee),s(Ee,Tt),s(I,jt),s(I,ye),s(ye,Lt),s(I,Gt),s(I,Ie),s(Ie,Rt),s(I,Bt),s(I,V),s(V,De),H(re,De,null),s(V,Ft),s(V,Se),s(Se,Wt),s(V,Ot),s(V,Ne),s(Ne,qt),s(V,Ut),s(V,xe),s(xe,Kt),s(I,Jt),s(I,M),s(M,Ve),H(ne,Ve,null),s(M,Qt),s(M,Me),s(Me,Xt),s(M,Yt),s(M,Pe),s(Pe,Zt),s(M,el),s(M,Ae),s(Ae,tl),s(N,ll),s(N,P),s(P,ze),H(oe,ze,null),s(P,sl),s(P,Ce),s(Ce,al),s(P,rl),s(P,He),s(He,nl),s(P,ol),s(P,Te),s(Te,il),Ke=!0,cl||(bl=[st(j,"click",o[1]),st(L,"click",o[2]),st(B,"click",o[3])],cl=!0)},p:pl,i(v){Ke||(D(t.$$.fragment,v),D(_.$$.fragment,v),D(Y.$$.fragment,v),D(ee.$$.fragment,v),D(se.$$.fragment,v),D(ae.$$.fragment,v),D(re.$$.fragment,v),D(ne.$$.fragment,v),D(oe.$$.fragment,v),Ke=!0)},o(v){S(t.$$.fragment,v),S(_.$$.fragment,v),S(Y.$$.fragment,v),S(ee.$$.fragment,v),S(se.$$.fragment,v),S(ae.$$.fragment,v),S(re.$$.fragment,v),S(ne.$$.fragment,v),S(oe.$$.fragment,v),Ke=!1},d(v){v&&c(e),T(t),T(_),v&&c(Ue),v&&c(X),T(Y),T(ee),T(se),T(ae),T(re),T(ne),T(oe),cl=!1,rs(bl)}}}function Is(o){const e=a=>window.open(a,"_blank");return[e,a=>e("https://github.com/hollow-em/lizardLauncher"),a=>e("https://github.com/hollow-em/lizardLauncher"),a=>e("https://github.com/gunwunbun")]}class Ss extends Be{constructor(e){super(),Fe(this,e,Is,ys,ce,{})}}export{Ss as component};
