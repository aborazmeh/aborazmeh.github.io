var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function s(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function a(e){e.parentNode.removeChild(e)}function u(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function c(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function f(){return d(" ")}function g(){return d("")}function h(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function p(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}class v{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=c(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)i(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(a)}}let y;function b(e){y=e}function w(){const e=function(){if(!y)throw new Error("Function called outside component initialization");return y}();return(t,n)=>{const r=e.$$.callbacks[t];if(r){const s=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);r.slice().forEach((t=>{t.call(e,s)}))}}}const k=[],$=[],x=[],j=[],E=Promise.resolve();let _=!1;function M(e){x.push(e)}let T=!1;const L=new Set;function N(){if(!T){T=!0;do{for(let e=0;e<k.length;e+=1){const t=k[e];b(t),A(t.$$)}for(b(null),k.length=0;$.length;)$.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];L.has(t)||(L.add(t),t())}x.length=0}while(k.length);for(;j.length;)j.pop()();_=!1,T=!1,L.clear()}}function A(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}const C=new Set;let H;function O(e,t){e&&e.i&&(C.delete(e),e.i(t))}function S(e,t,n,r){if(e&&e.o){if(C.has(e))return;C.add(e),H.c.push((()=>{C.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function R(e){e&&e.c()}function F(e,n,l,o){const{fragment:i,on_mount:a,on_destroy:u,after_update:c}=e.$$;i&&i.m(n,l),o||M((()=>{const n=a.map(t).filter(s);u?u.push(...n):r(n),e.$$.on_mount=[]})),c.forEach(M)}function D(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function B(e,t){-1===e.$$.dirty[0]&&(k.push(e),_||(_=!0,E.then(N)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function I(t,s,l,o,i,u,c=[-1]){const d=y;b(t);const f=t.$$={fragment:null,ctx:null,props:u,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:s.context||[]),callbacks:n(),dirty:c,skip_bound:!1};let g=!1;if(f.ctx=l?l(t,s.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=s)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](s),g&&B(t,e)),n})):[],f.update(),g=!0,r(f.before_update),f.fragment=!!o&&o(f.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);f.fragment&&f.fragment.l(e),e.forEach(a)}else f.fragment&&f.fragment.c();s.intro&&O(t.$$.fragment),F(t,s.target,s.anchor,s.customElement),N()}b(d)}class z{$destroy(){D(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let V={};fetch("strings.json").then((e=>e.json())).then((e=>V=e)).catch((e=>console.error(e)));const q=["English","Turkish","French"];function P(e){return V.ar[e]?V.ar[e]:(e.match(/[ا-ي]/)||console.warn(`translate: "${e}`),e)}function Y(e,t,n,r=!0){return null==e[t]||null==e[t][n]?"":Array.isArray(e[t][n])?r?e[t][n].map((e=>P(e))).join("، "):e[t][n].join("، "):r?P(e[t][n]):e[t][n]}function G(e){const t={Arabic:"🇸🇾",English:"🇬🇧",Turkish:"🇹🇷",French:"🇫🇷",Hebrew:"🇮🇱",Chinese:"🇨🇳",Farsi:"🇮🇷"};return Array.isArray(e)?e.map((e=>t[e])).join(" "):t[e]}function J(e,t,n){const r=e.slice();return r[5]=t[n],r}function K(e){let t,n,r,s,l,u=e[1].loan["@dueDate"]&&Q(e);return{c(){t=c("div"),n=c("div"),r=c("div"),s=c("i"),l=d("\n          مُعار\n          \n          "),u&&u.c(),m(s,"class","fa fa-clock-o svelte-117uukr"),m(s,"aria-hidden","true"),m(r,"class","loaned-text svelte-117uukr"),m(n,"class","loaned-container svelte-117uukr"),m(t,"class","loaned-overlay svelte-117uukr")},m(e,a){i(e,t,a),o(t,n),o(n,r),o(r,s),o(r,l),u&&u.m(r,null)},p(e,t){e[1].loan["@dueDate"]?u?u.p(e,t):(u=Q(e),u.c(),u.m(r,null)):u&&(u.d(1),u=null)},d(e){e&&a(t),u&&u.d()}}}function Q(e){let t,n,r,s=e[1].loan["@dueDate"]+"";return{c(){t=d("لغاية\n            "),n=c("span"),r=d(s),m(n,"class","loaned-date svelte-117uukr")},m(e,s){i(e,t,s),i(e,n,s),o(n,r)},p(e,t){2&t&&s!==(s=e[1].loan["@dueDate"]+"")&&p(r,s)},d(e){e&&a(t),e&&a(n)}}}function U(e){let t,n,r,s,l,u,g,h=(e[0].title||"")+"",v=(e[0].subtitle||"")+"",y=e[0].languages&&W(e);return{c(){t=c("div"),n=d(h),r=f(),s=c("span"),y&&y.c(),l=f(),u=c("div"),g=d(v),m(s,"class","languages svelte-117uukr"),m(u,"class","subtitle svelte-117uukr"),m(t,"class","title svelte-117uukr")},m(e,a){i(e,t,a),o(t,n),o(t,r),o(t,s),y&&y.m(s,null),o(t,l),o(t,u),o(u,g)},p(e,t){1&t&&h!==(h=(e[0].title||"")+"")&&p(n,h),e[0].languages?y?y.p(e,t):(y=W(e),y.c(),y.m(s,null)):y&&(y.d(1),y=null),1&t&&v!==(v=(e[0].subtitle||"")+"")&&p(g,v)},d(e){e&&a(t),y&&y.d()}}}function W(e){let t,n=G(e[0].languages.language)+"";return{c(){t=d(n)},m(e,n){i(e,t,n)},p(e,r){1&r&&n!==(n=G(e[0].languages.language)+"")&&p(t,n)},d(e){e&&a(t)}}}function X(e){let t,n,r,s,l=Y(e[0],"authors","author",!1)+"";return{c(){t=c("div"),n=c("i"),r=f(),s=d(l),m(n,"class","fa fa-user svelte-117uukr"),m(n,"aria-hidden","true"),m(t,"class","author svelte-117uukr")},m(e,l){i(e,t,l),o(t,n),o(t,r),o(t,s)},p(e,t){1&t&&l!==(l=Y(e[0],"authors","author",!1)+"")&&p(s,l)},d(e){e&&a(t)}}}function Z(e){let t,n,r,s,l,u,d,h,p,v,y,b,w,k,$=e[0].translators&&ee(e),x=e[0].editors&&te(e),j=(e[0].publisher||e[0].pub_year)&&ne(e),E=(e[0].edition||e[0].binding||e[0].pages)&&le(),_=e[0].edition&&oe(e),M=e[0].binding&&ae(e),T=e[0].pages&&ce(e),L=e[0].isbn&&de(e),N=e[0].genres&&fe(e),A=e[0].keywords&&ge(e),C=e[0].rating&&he(e),H=e[0].comments&&ye(e);return{c(){$&&$.c(),t=f(),x&&x.c(),n=f(),j&&j.c(),r=f(),s=c("div"),E&&E.c(),l=f(),_&&_.c(),u=f(),M&&M.c(),d=f(),T&&T.c(),h=f(),L&&L.c(),p=f(),v=c("div"),N&&N.c(),y=f(),A&&A.c(),b=f(),C&&C.c(),w=f(),H&&H.c(),k=g(),m(s,"class","hidden author svelte-117uukr"),m(v,"class","author classification svelte-117uukr")},m(e,a){$&&$.m(e,a),i(e,t,a),x&&x.m(e,a),i(e,n,a),j&&j.m(e,a),i(e,r,a),i(e,s,a),E&&E.m(s,null),o(s,l),_&&_.m(s,null),o(s,u),M&&M.m(s,null),o(s,d),T&&T.m(s,null),i(e,h,a),L&&L.m(e,a),i(e,p,a),i(e,v,a),N&&N.m(v,null),o(v,y),A&&A.m(v,null),o(v,b),C&&C.m(v,null),i(e,w,a),H&&H.m(e,a),i(e,k,a)},p(e,o){e[0].translators?$?$.p(e,o):($=ee(e),$.c(),$.m(t.parentNode,t)):$&&($.d(1),$=null),e[0].editors?x?x.p(e,o):(x=te(e),x.c(),x.m(n.parentNode,n)):x&&(x.d(1),x=null),e[0].publisher||e[0].pub_year?j?j.p(e,o):(j=ne(e),j.c(),j.m(r.parentNode,r)):j&&(j.d(1),j=null),e[0].edition||e[0].binding||e[0].pages?E||(E=le(),E.c(),E.m(s,l)):E&&(E.d(1),E=null),e[0].edition?_?_.p(e,o):(_=oe(e),_.c(),_.m(s,u)):_&&(_.d(1),_=null),e[0].binding?M?M.p(e,o):(M=ae(e),M.c(),M.m(s,d)):M&&(M.d(1),M=null),e[0].pages?T?T.p(e,o):(T=ce(e),T.c(),T.m(s,null)):T&&(T.d(1),T=null),e[0].isbn?L?L.p(e,o):(L=de(e),L.c(),L.m(p.parentNode,p)):L&&(L.d(1),L=null),e[0].genres?N?N.p(e,o):(N=fe(e),N.c(),N.m(v,y)):N&&(N.d(1),N=null),e[0].keywords?A?A.p(e,o):(A=ge(e),A.c(),A.m(v,b)):A&&(A.d(1),A=null),e[0].rating?C?C.p(e,o):(C=he(e),C.c(),C.m(v,null)):C&&(C.d(1),C=null),e[0].comments?H?H.p(e,o):(H=ye(e),H.c(),H.m(k.parentNode,k)):H&&(H.d(1),H=null)},d(e){$&&$.d(e),e&&a(t),x&&x.d(e),e&&a(n),j&&j.d(e),e&&a(r),e&&a(s),E&&E.d(),_&&_.d(),M&&M.d(),T&&T.d(),e&&a(h),L&&L.d(e),e&&a(p),e&&a(v),N&&N.d(),A&&A.d(),C&&C.d(),e&&a(w),H&&H.d(e),e&&a(k)}}}function ee(e){let t,n,r,s,l=Y(e[0],"translators","translator",!1)+"";return{c(){t=c("div"),n=c("i"),r=f(),s=d(l),m(n,"class","fa fa-user svelte-117uukr"),m(n,"aria-hidden","true"),m(t,"class","hidden author svelte-117uukr")},m(e,l){i(e,t,l),o(t,n),o(t,r),o(t,s)},p(e,t){1&t&&l!==(l=Y(e[0],"translators","translator",!1)+"")&&p(s,l)},d(e){e&&a(t)}}}function te(e){let t,n,r,s,l=Y(e[0],"editors","editor",!1)+"";return{c(){t=c("div"),n=c("i"),r=f(),s=d(l),m(n,"class","fa fa-user svelte-117uukr"),m(n,"aria-hidden","true"),m(t,"class","hidden author svelte-117uukr")},m(e,l){i(e,t,l),o(t,n),o(t,r),o(t,s)},p(e,t){1&t&&l!==(l=Y(e[0],"editors","editor",!1)+"")&&p(s,l)},d(e){e&&a(t)}}}function ne(e){let t,n,r=e[0].publisher&&re(e),s=e[0].pub_year&&se(e);return{c(){t=c("div"),r&&r.c(),n=f(),s&&s.c(),m(t,"class","hidden author svelte-117uukr")},m(e,l){i(e,t,l),r&&r.m(t,null),o(t,n),s&&s.m(t,null)},p(e,l){e[0].publisher?r?r.p(e,l):(r=re(e),r.c(),r.m(t,n)):r&&(r.d(1),r=null),e[0].pub_year?s?s.p(e,l):(s=se(e),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(e){e&&a(t),r&&r.d(),s&&s.d()}}}function re(e){let t,n,r,s=e[0].publisher+"";return{c(){t=c("i"),n=f(),r=d(s),m(t,"class","fa fa-building svelte-117uukr"),m(t,"aria-hidden","true")},m(e,s){i(e,t,s),i(e,n,s),i(e,r,s)},p(e,t){1&t&&s!==(s=e[0].publisher+"")&&p(r,s)},d(e){e&&a(t),e&&a(n),e&&a(r)}}}function se(e){let t,n,r,s=e[0].pub_year+"";return{c(){t=c("i"),n=f(),r=d(s),m(t,"class","fa fa-at svelte-117uukr"),m(t,"aria-hidden","true")},m(e,s){i(e,t,s),i(e,n,s),i(e,r,s)},p(e,t){1&t&&s!==(s=e[0].pub_year+"")&&p(r,s)},d(e){e&&a(t),e&&a(n),e&&a(r)}}}function le(e){let t;return{c(){t=c("i"),m(t,"class","fa fa-book svelte-117uukr"),m(t,"aria-hidden","true")},m(e,n){i(e,t,n)},d(e){e&&a(t)}}}function oe(e){let t,n,r,s,l,o=P("الطبعة")+"",u=e[0].edition+"",c=(e[0].binding||e[0].pages)&&ie();return{c(){t=d(o),n=d(": "),r=d(u),s=f(),c&&c.c(),l=g()},m(e,o){i(e,t,o),i(e,n,o),i(e,r,o),i(e,s,o),c&&c.m(e,o),i(e,l,o)},p(e,t){1&t&&u!==(u=e[0].edition+"")&&p(r,u),e[0].binding||e[0].pages?c||(c=ie(),c.c(),c.m(l.parentNode,l)):c&&(c.d(1),c=null)},d(e){e&&a(t),e&&a(n),e&&a(r),e&&a(s),c&&c.d(e),e&&a(l)}}}function ie(e){let t;return{c(){t=d("—")},m(e,n){i(e,t,n)},d(e){e&&a(t)}}}function ae(e){let t,n,r,s=P(e[0].binding)+"",l=e[0].pages&&ue();return{c(){t=d(s),n=f(),l&&l.c(),r=g()},m(e,s){i(e,t,s),i(e,n,s),l&&l.m(e,s),i(e,r,s)},p(e,n){1&n&&s!==(s=P(e[0].binding)+"")&&p(t,s),e[0].pages?l||(l=ue(),l.c(),l.m(r.parentNode,r)):l&&(l.d(1),l=null)},d(e){e&&a(t),e&&a(n),l&&l.d(e),e&&a(r)}}}function ue(e){let t;return{c(){t=d("—")},m(e,n){i(e,t,n)},d(e){e&&a(t)}}}function ce(e){let t,n,r,s=e[0].pages+"",l=P("صفحة")+"";return{c(){t=d(s),n=f(),r=d(l)},m(e,s){i(e,t,s),i(e,n,s),i(e,r,s)},p(e,n){1&n&&s!==(s=e[0].pages+"")&&p(t,s)},d(e){e&&a(t),e&&a(n),e&&a(r)}}}function de(e){let t,n,r,s,l=e[0].isbn+"";return{c(){t=c("div"),n=c("i"),r=f(),s=d(l),m(n,"class","fa fa-barcode svelte-117uukr"),m(n,"aria-hidden","true"),m(t,"class","hidden author svelte-117uukr")},m(e,l){i(e,t,l),o(t,n),o(t,r),o(t,s)},p(e,t){1&t&&l!==(l=e[0].isbn+"")&&p(s,l)},d(e){e&&a(t)}}}function fe(e){let t,n,r,s,l=Y(e[0],"genres","genre")+"";return{c(){t=c("div"),n=c("i"),r=f(),s=d(l),m(n,"class","fa fa-tag svelte-117uukr"),m(n,"aria-hidden","true"),m(t,"class","summary svelte-117uukr")},m(e,l){i(e,t,l),o(t,n),o(t,r),o(t,s)},p(e,t){1&t&&l!==(l=Y(e[0],"genres","genre")+"")&&p(s,l)},d(e){e&&a(t)}}}function ge(e){let t,n,r,s,l=Y(e[0],"keywords","keyword")+"";return{c(){t=c("div"),n=c("i"),r=f(),s=d(l),m(n,"class","fa fa-tags svelte-117uukr"),m(n,"aria-hidden","true"),m(t,"class","summary svelte-117uukr")},m(e,l){i(e,t,l),o(t,n),o(t,r),o(t,s)},p(e,t){1&t&&l!==(l=Y(e[0],"keywords","keyword")+"")&&p(s,l)},d(e){e&&a(t)}}}function he(e){let t,n=[...Array(5).keys()].reverse(),r=[];for(let t=0;t<n.length;t+=1)r[t]=ve(J(e,n,t));return{c(){t=c("div");for(let e=0;e<r.length;e+=1)r[e].c();m(t,"class","summary svelte-117uukr")},m(e,n){i(e,t,n);for(let e=0;e<r.length;e+=1)r[e].m(t,null)},p(e,s){if(1&s){let l;for(n=[...Array(5).keys()].reverse(),l=0;l<n.length;l+=1){const o=J(e,n,l);r[l]?r[l].p(o,s):(r[l]=ve(o),r[l].c(),r[l].m(t,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=n.length}},d(e){e&&a(t),u(r,e)}}}function me(e){let t;return{c(){t=c("i"),m(t,"class","fa fa-star-o svelte-117uukr"),m(t,"aria-hidden","true")},m(e,n){i(e,t,n)},d(e){e&&a(t)}}}function pe(e){let t;return{c(){t=c("i"),m(t,"class","fa fa-star rating-star svelte-117uukr"),m(t,"aria-hidden","true")},m(e,n){i(e,t,n)},d(e){e&&a(t)}}}function ve(e){let t;function n(e,t){return e[5]+1<=e[0].rating?pe:me}let r=n(e),s=r(e);return{c(){s.c(),t=g()},m(e,n){s.m(e,n),i(e,t,n)},p(e,l){r!==(r=n(e))&&(s.d(1),s=r(e),s&&(s.c(),s.m(t.parentNode,t)))},d(e){s.d(e),e&&a(t)}}}function ye(e){let t,n,r,s,l=(e[0].comments||"")+"";return{c(){t=c("div"),n=c("i"),r=f(),m(n,"class","fa fa-info-circle svelte-117uukr"),m(n,"aria-hidden","true"),s=new v(null),m(t,"class","hidden bottom summary svelte-117uukr")},m(e,a){i(e,t,a),o(t,n),o(t,r),s.m(l,t)},p(e,t){1&t&&l!==(l=(e[0].comments||"")+"")&&s.p(l)},d(e){e&&a(t)}}}function be(t){let n,r,s,l,u,d,g,p,v,y,b,w,k=t[0].loaned&&K(t),$=t[0].title&&U(t),x=t[0].authors&&X(t),j=t[2]&&Z(t);return{c(){n=c("div"),k&&k.c(),r=f(),s=c("div"),l=c("img"),d=f(),g=c("div"),$&&$.c(),p=f(),x&&x.c(),v=f(),j&&j.c(),l.src!==(u=t[0].cover&&`images/${t[0].cover}`||"images/no-cover.svg")&&m(l,"src",u),m(l,"onerror","this.onerror=null;this.src='images/no-cover.svg';"),m(l,"class","book svelte-117uukr"),m(l,"alt","book cover"),m(s,"class","flex-column image svelte-117uukr"),m(g,"class","flex-column info svelte-117uukr"),m(n,"class",y="card flex-row "+(q.includes(t[0].languages.language)?"ltr":"")+" "+(t[2]===t[0].id?"open":"")+" svelte-117uukr")},m(e,a){i(e,n,a),k&&k.m(n,null),o(n,r),o(n,s),o(s,l),o(n,d),o(n,g),$&&$.m(g,null),o(g,p),x&&x.m(g,null),o(g,v),j&&j.m(g,null),b||(w=h(n,"click",t[3]),b=!0)},p(e,[t]){e[0].loaned?k?k.p(e,t):(k=K(e),k.c(),k.m(n,r)):k&&(k.d(1),k=null),1&t&&l.src!==(u=e[0].cover&&`images/${e[0].cover}`||"images/no-cover.svg")&&m(l,"src",u),e[0].title?$?$.p(e,t):($=U(e),$.c(),$.m(g,p)):$&&($.d(1),$=null),e[0].authors?x?x.p(e,t):(x=X(e),x.c(),x.m(g,v)):x&&(x.d(1),x=null),e[2]?j?j.p(e,t):(j=Z(e),j.c(),j.m(g,null)):j&&(j.d(1),j=null),5&t&&y!==(y="card flex-row "+(q.includes(e[0].languages.language)?"ltr":"")+" "+(e[2]===e[0].id?"open":"")+" svelte-117uukr")&&m(n,"class",y)},i:e,o:e,d(e){e&&a(n),k&&k.d(),$&&$.d(),x&&x.d(),j&&j.d(),b=!1,w()}}}function we(e,t,n){let{entry:r}=t,{borrower:s}=t,{current:l}=t;const o=w();return e.$$set=e=>{"entry"in e&&n(0,r=e.entry),"borrower"in e&&n(1,s=e.borrower),"current"in e&&n(2,l=e.current)},[r,s,l,function(){o("current",{value:l===r.id?null:r.id})}]}class ke extends z{constructor(e){super(),I(this,e,we,be,l,{entry:0,borrower:1,current:2})}}function $e(t){let n,s,l,u,d,g,p,v,y,b,w,k,$,x,j,E,_,M,T,L,N,A,C,H,O,S,R,F;return{c(){n=c("nav"),s=c("div"),l=c("div"),u=c("input"),d=f(),g=c("label"),g.innerHTML='<i class="fa fa-search svelte-1ey7jy9"></i>',p=f(),v=c("a"),y=c("i"),w=f(),k=c("div"),$=c("div"),$.innerHTML='<span class="caret-inner svelte-1ey7jy9"></span>',x=f(),j=c("div"),E=c("button"),E.textContent="العناوين",_=f(),M=c("div"),T=c("button"),T.textContent="المؤلفين",L=f(),N=c("div"),A=c("button"),A.textContent="اللغة",C=f(),H=c("div"),O=c("button"),O.textContent="تاريخ النشر",m(u,"type","search"),m(u,"placeholder","عنوان | مؤلف | لغة | تصنيف | وسم"),m(u,"class","svelte-1ey7jy9"),m(g,"for","search"),m(g,"class","svelte-1ey7jy9"),m(l,"class","search-container svelte-1ey7jy9"),m(y,"class",b="fa fa-sort-amount-"+t[1]+" svelte-1ey7jy9"),m(y,"aria-hidden","true"),m(v,"class","dropdown-button svelte-1ey7jy9"),m(v,"aria-label","Sort"),m(v,"title","Sort"),m(v,"href","#!"),m(s,"class","nav-container svelte-1ey7jy9"),m($,"class","dropdown-caret svelte-1ey7jy9"),m(E,"class","button svelte-1ey7jy9"),m(j,"class","svelte-1ey7jy9"),m(T,"class","button svelte-1ey7jy9"),m(M,"class","svelte-1ey7jy9"),m(A,"class","button svelte-1ey7jy9"),m(N,"class","svelte-1ey7jy9"),m(O,"class","button svelte-1ey7jy9"),m(H,"class","svelte-1ey7jy9"),m(k,"class",S="dropdown-menu "+(t[0]?"":"hidden")+" svelte-1ey7jy9"),m(n,"class","svelte-1ey7jy9")},m(e,r){i(e,n,r),o(n,s),o(s,l),o(l,u),o(l,d),o(l,g),o(s,p),o(s,v),o(v,y),o(n,w),o(n,k),o(k,$),o(k,x),o(k,j),o(j,E),o(k,_),o(k,M),o(M,T),o(k,L),o(k,N),o(N,A),o(k,C),o(k,H),o(H,O),R||(F=[h(u,"input",t[2]),h(v,"click",t[4]),h(E,"click",t[5]),h(T,"click",t[6]),h(A,"click",t[7]),h(O,"click",t[8])],R=!0)},p(e,[t]){2&t&&b!==(b="fa fa-sort-amount-"+e[1]+" svelte-1ey7jy9")&&m(y,"class",b),1&t&&S!==(S="dropdown-menu "+(e[0]?"":"hidden")+" svelte-1ey7jy9")&&m(k,"class",S)},i:e,o:e,d(e){e&&a(n),R=!1,r(F)}}}function xe(e,t,n){let{showSortingMenu:r=!1}=t,{sortingModifier:s}=t;const l=w();function o(e){l("sort",{value:e})}return e.$$set=e=>{"showSortingMenu"in e&&n(0,r=e.showSortingMenu),"sortingModifier"in e&&n(1,s=e.sortingModifier)},[r,s,function(e){l("filter",{value:e.target.value})},o,()=>n(0,r=!r),()=>o("titles"),()=>o("authors"),()=>o("languages"),()=>o("pub_years")]}class je extends z{constructor(e){super(),I(this,e,xe,$e,l,{showSortingMenu:0,sortingModifier:1})}}function Ee(t){let n,r,s;return{c(){n=c("div"),n.innerHTML='<svg style="vertical-align: text-bottom;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M6.101 261.899L25.9 281.698c4.686 4.686 12.284 4.686 16.971 0L198 126.568V468c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12V126.568l155.13 155.13c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 35.515c-4.686-4.686-12.284-4.686-16.971 0L6.101 244.929c-4.687 4.686-4.687 12.284 0 16.97z"></path></svg>',m(n,"class","top-scrollerx js-top-scrollerx svg-icons svelte-1e5n6b5")},m(e,l){i(e,n,l),r||(s=h(n,"click",t[1]),r=!0)},p:e,d(e){e&&a(n),r=!1,s()}}}function _e(t){let n,r=t[0]&&Ee(t);return{c(){r&&r.c(),n=g()},m(e,t){r&&r.m(e,t),i(e,n,t)},p(e,[t]){e[0]?r?r.p(e,t):(r=Ee(e),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i:e,o:e,d(e){r&&r.d(e),e&&a(n)}}}function Me(e,t,n){let{show:r=!1}=t;window.onscroll=function(e){n(0,r=(document.documentElement.scrollTop||document.body.scrollTop)>=575)};return e.$$set=e=>{"show"in e&&n(0,r=e.show)},[r,()=>window.scrollTo({top:0,behavior:"smooth"})]}class Te extends z{constructor(e){super(),I(this,e,Me,_e,l,{show:0})}}function Le(e,t,n){const r=e.slice();return r[15]=t[n],r}function Ne(e){let t,n;function r(...t){return e[12](e[15],...t)}return t=new ke({props:{entry:e[15],current:e[2],borrower:e[1].find(r)}}),t.$on("current",e[13]),{c(){R(t.$$.fragment)},m(e,r){F(t,e,r),n=!0},p(n,s){e=n;const l={};1&s&&(l.entry=e[15]),4&s&&(l.current=e[2]),3&s&&(l.borrower=e[1].find(r)),t.$set(l)},i(e){n||(O(t.$$.fragment,e),n=!0)},o(e){S(t.$$.fragment,e),n=!1},d(e){D(t,e)}}}function Ae(e){let t,n,s,l,d,g,h;n=new je({props:{sortingModifier:e[3]}}),n.$on("filter",e[10]),n.$on("sort",e[11]);let p=e[0],v=[];for(let t=0;t<p.length;t+=1)v[t]=Ne(Le(e,p,t));const y=e=>S(v[e],1,1,(()=>{v[e]=null}));return g=new Te({}),{c(){t=c("main"),R(n.$$.fragment),s=f(),l=c("div");for(let e=0;e<v.length;e+=1)v[e].c();d=f(),R(g.$$.fragment),m(l,"class","center list svelte-1lty05y"),m(t,"class","svelte-1lty05y")},m(e,r){i(e,t,r),F(n,t,null),o(t,s),o(t,l);for(let e=0;e<v.length;e+=1)v[e].m(l,null);o(t,d),F(g,t,null),h=!0},p(e,[t]){const s={};if(8&t&&(s.sortingModifier=e[3]),n.$set(s),7&t){let n;for(p=e[0],n=0;n<p.length;n+=1){const r=Le(e,p,n);v[n]?(v[n].p(r,t),O(v[n],1)):(v[n]=Ne(r),v[n].c(),O(v[n],1),v[n].m(l,null))}for(H={r:0,c:[],p:H},n=p.length;n<v.length;n+=1)y(n);H.r||r(H.c),H=H.p}},i(e){if(!h){O(n.$$.fragment,e);for(let e=0;e<p.length;e+=1)O(v[e]);O(g.$$.fragment,e),h=!0}},o(e){S(n.$$.fragment,e),v=v.filter(Boolean);for(let e=0;e<v.length;e+=1)S(v[e]);S(g.$$.fragment,e),h=!1},d(e){e&&a(t),D(n),u(v,e),D(g)}}}function Ce(e,t,n){let{entries:r=[]}=t,{borrowers:s=[]}=t,{current:l=null}=t,{originalEntries:o=[]}=t,{filteredOriginalEntries:i=[]}=t,{pagination:a=0}=t,{sortingType:u="titles"}=t,{sortingModifier:c="asc"}=t;function d(){const e=i.length?i:o;n(0,r=e.slice(0,n(8,a+=10))),scrollByLines(5)}function f(e){function t(e,t){return"asc"===c?e>t:e<t}function s(e){let t=i.length?i:o;t=t.sort(e),n(0,r=t.slice(0,r.length))}switch(n(3,c=u===e&&"asc"===c?"desc":"asc"),n(9,u=e),u){case"titles":s(((e,n)=>e.title&&n.title&&t(e.title,n.title)?1:-1));break;case"authors":s(((e,n)=>e.authors&&n.authors&&t(e.authors.author,n.authors.author)?1:-1));break;case"languages":s(((e,n)=>e.languages&&n.languages&&t(e.languages.language,n.languages.language)?1:-1));break;case"ratings":s(((e,n)=>e.rating&&n.rating&&t(parseInt(e.rating),parseInt(n.rating))?1:-1));break;case"pub_years":s(((e,n)=>e.pub_year&&n.pub_year&&t(parseInt(e.pub_year),parseInt(n.pub_year))?1:-1))}}function g(e){n(7,i=o.filter((t=>t.title.match(new RegExp(e,"i"))||Y(t,"authors","author",!1).match(new RegExp(e,"i"))||G(t.languages.language).match(new RegExp(e,"i"))||function(e,t){const n={Arabic:["عربي","عربى"],English:["انجليزي","انجليزى","انكليزي","انكليزى","انگليزي","انگليزى","إنجليزي","إنجليزى","إنكليزي","إنكليزى","إنگليزي","إنگليزى"],Hebrew:["عبري","عبرى"],Chinese:["صيني","صينى"],French:["فرنسي","فرنسى"],Farsi:["فارسي","فارسى"],Turkish:["تركي","تركى"]};return!!e.match(new RegExp(t,"i"))||!!n[e]&&n[e].join("").includes(t)}("object"==typeof t.languages.language?t.languages.language[0]:t.languages.language,e)||Y(t,"genres","genre").match(new RegExp(e,"i"))||Y(t,"keywords","keyword").match(new RegExp(e,"i"))))),n(0,r=i)}fetch("./data.json").then((e=>e.json())).then((e=>{n(6,o=e.entry.sort(((e,t)=>e.title>t.title?1:-1))),e.borrowers&&n(1,s="object"==typeof e.borrowers?[e.borrowers.borrower]:e.borrowers.borrower)})).then((()=>d())).catch((e=>console.error(e))),document.addEventListener("DOMContentLoaded",(function(e){document.addEventListener("scroll",(function(e){const t=document.body.scrollHeight;window.scrollY+window.innerHeight+100>=t&&d()}))}));return e.$$set=e=>{"entries"in e&&n(0,r=e.entries),"borrowers"in e&&n(1,s=e.borrowers),"current"in e&&n(2,l=e.current),"originalEntries"in e&&n(6,o=e.originalEntries),"filteredOriginalEntries"in e&&n(7,i=e.filteredOriginalEntries),"pagination"in e&&n(8,a=e.pagination),"sortingType"in e&&n(9,u=e.sortingType),"sortingModifier"in e&&n(3,c=e.sortingModifier)},[r,s,l,c,f,g,o,i,a,u,e=>g(e.detail.value),e=>f(e.detail.value),(e,t)=>t.loan["@entryRef"]===e.id,e=>n(2,l=e.detail.value)]}return new class extends z{constructor(e){super(),I(this,e,Ce,Ae,l,{entries:0,borrowers:1,current:2,originalEntries:6,filteredOriginalEntries:7,pagination:8,sortingType:9,sortingModifier:3})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
