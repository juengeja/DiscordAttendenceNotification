export default(async()=>{function t(){}function e(t){return t()}function r(){return Object.create(null)}function n(t){t.forEach(e)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,l=!1;function c(t,e,r,n){for(;t<e;){const o=t+(e-t>>1);r(o)<=n?t=o+1:e=o}return t}function s(t,e,r){const n=function(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}(t);if(!n.getElementById(e)){const t=g("style");t.id=e,t.textContent=r,function(t,e){!function(t,e){t.appendChild(e)}(t.head||t,e)}(n,t)}}function d(t,e){if(l){for(function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let r=0;r<e.length;r++){const n=e[r];void 0!==n.claim_order&&t.push(n)}e=t}const r=new Int32Array(e.length+1),n=new Int32Array(e.length);r[0]=-1;let o=0;for(let t=0;t<e.length;t++){const a=e[t].claim_order,i=(o>0&&e[r[o]].claim_order<=a?o+1:c(1,o,(t=>e[r[t]].claim_order),a))-1;n[t]=r[i]+1;const l=i+1;r[l]=t,o=Math.max(l,o)}const a=[],i=[];let l=e.length-1;for(let t=r[o]+1;0!=t;t=n[t-1]){for(a.push(e[t-1]);l>=t;l--)i.push(e[l]);l--}for(;l>=0;l--)i.push(e[l]);a.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,r=0;e<i.length;e++){for(;r<a.length&&i[e].claim_order>=a[r].claim_order;)r++;const n=r<a.length?a[r]:null;t.insertBefore(i[e],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function u(t,e,r){l&&!r?d(t,e):e.parentNode===t&&e.nextSibling==r||t.insertBefore(e,r||null)}function h(t){t.parentNode.removeChild(t)}function f(t,e){for(let r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function g(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function v(){return p(" ")}function m(){return p("")}function b(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function y(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function x(t){return Array.from(t.childNodes)}function _(t,e,r,n,o=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const a=(()=>{for(let n=t.claim_info.last_index;n<t.length;n++){const a=t[n];if(e(a)){const e=r(a);return void 0===e?t.splice(n,1):t[n]=e,o||(t.claim_info.last_index=n),a}}for(let n=t.claim_info.last_index-1;n>=0;n--){const a=t[n];if(e(a)){const e=r(a);return void 0===e?t.splice(n,1):t[n]=e,o?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=n,a}}return n()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function $(t,e,r){return function(t,e,r,n){return _(t,(t=>t.nodeName===e),(t=>{const e=[];for(let n=0;n<t.attributes.length;n++){const o=t.attributes[n];r[o.name]||e.push(o.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>n(e)))}(t,e,r,g)}function w(t,e){return _(t,(t=>3===t.nodeType),(t=>{const r=""+e;if(t.data.startsWith(r)){if(t.data.length!==r.length)return t.splitText(r.length)}else t.data=r}),(()=>p(e)),!0)}function E(t){return w(t," ")}function D(t,e){t.value=null==e?"":e}function I(t){i=t}const k=[],T=[],N=[],B=[],L=Promise.resolve();let C=!1;function O(t){N.push(t)}function S(t){B.push(t)}const A=new Set;let z=0;function P(){const t=i;do{for(;z<k.length;){const t=k[z];z++,I(t),j(t.$$)}for(I(null),k.length=0,z=0;T.length;)T.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];A.has(e)||(A.add(e),e())}N.length=0}while(k.length);for(;B.length;)B.pop()();C=!1,A.clear(),I(t)}function j(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const U=new Set;let V;function H(){V={r:0,c:[],p:V}}function R(){V.r||n(V.c),V=V.p}function q(t,e){t&&t.i&&(U.delete(t),t.i(e))}function G(t,e,r,n){if(t&&t.o){if(U.has(t))return;U.add(t),V.c.push((()=>{U.delete(t),n&&(r&&t.d(1),n())})),t.o(e)}}function M(t,e,r){const n=t.$$.props[e];void 0!==n&&(t.$$.bound[n]=r,r(t.$$.ctx[n]))}function Y(t){t&&t.c()}function F(t,e){t&&t.l(e)}function W(t,r,a,i){const{fragment:l,on_mount:c,on_destroy:s,after_update:d}=t.$$;l&&l.m(r,a),i||O((()=>{const r=c.map(e).filter(o);s?s.push(...r):n(r),t.$$.on_mount=[]})),d.forEach(O)}function J(t,e){const r=t.$$;null!==r.fragment&&(n(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function K(e,o,a,c,s,d,u,f=[-1]){const g=i;I(e);const p=e.$$={fragment:null,ctx:null,props:d,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(g?g.$$.context:[])),callbacks:r(),dirty:f,skip_bound:!1,root:o.target||g.$$.root};u&&u(p.root);let v=!1;if(p.ctx=a?a(e,o.props||{},((t,r,...n)=>{const o=n.length?n[0]:r;return p.ctx&&s(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),v&&function(t,e){-1===t.$$.dirty[0]&&(k.push(t),C||(C=!0,L.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),r})):[],p.update(),v=!0,n(p.before_update),p.fragment=!!c&&c(p.ctx),o.target){if(o.hydrate){l=!0;const t=x(o.target);p.fragment&&p.fragment.l(t),t.forEach(h)}else p.fragment&&p.fragment.c();o.intro&&q(e.$$.fragment),W(e,o.target,o.anchor,o.customElement),l=!1,P()}I(g)}class Q{$destroy(){J(this,1),this.$destroy=t}$on(t,e){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const t=r.indexOf(e);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function X(t){s(t,"svelte-g445h8","h1.svelte-g445h8{color:white;font-size:5em;font-weight:200;margin-bottom:4.5%}p.svelte-g445h8{color:white}a.svelte-g445h8{color:aqua\r\n  }.input.svelte-g445h8{background-color:transparent;color:white;border:none;font-weight:500;font-size:17px !important;cursor:pointer;z-index:1;padding:rem !important;font-size:10px;box-shadow:0 5px 12px -2px rgba(255, 255, 255, 0.3);text-align:center}.button.svelte-g445h8{background:rgba(255, 255, 255, 0.621);border:1px solid rgba(255, 255, 255, 0.4);color:rgb(52, 17, 255);border:none;text-transform:uppercase;font-weight:500;font-size:17px !important;cursor:pointer;z-index:1;padding:1rem !important;font-size:0.9rem !important;box-shadow:0 5px 12px -2px rgba(0, 0, 0, 0.3)}.user.svelte-g445h8{font-size:1.1rem !important;padding:0.6rem 1rem !important;position:relative;background:rgba(255, 255, 255, 0.185);border:1px solid rgba(104, 12, 92, 0.4);border-bottom-color:rgba(168, 44, 158, 0.5);box-shadow:0 5px 12px -2px rgba(0, 0, 0, 0.3);font-weight:300;max-width:20%;color:#cfd9e6;border-top-right-radius:0;border-bottom-right-radius:0;background-color:transparent;margin-left:39%;border-radius:150px;margin-bottom:32%}.user.svelte-g445h8:hover{box-shadow:0 10px 30px -2px rgba(0, 0, 0, 0.3);z-index:0}.user.svelte-g445h8:focus{z-index:0;background:rgba(0, 0, 0, 0.3);color:white}.user.svelte-g445h8:-webkit-input-placeholder{color:rgba(255, 255, 255, 0.4);font-size:1.1rem}.user.svelte-g445h8:-moz-input-placeholder{color:rgba(255, 255, 255, 0.4);font-size:1.1rem}.user.svelte-g445h8:-ms-input-placeholder{color:rgba(71, 94, 170, 0.4);font-size:1.1rem}.bild.svelte-g445h8{background-image:url(https://th.bing.com/th/id/R.f05dac9a8d8f8b0fa0e81e8a46c54c91?rik=L74b%2fqnHB%2brLww&pid=ImgRaw&r=0);background-position:30% 32%;background-repeat:no-repeat;background-attachment:fixed;background-size:cover}")}function Z(e){let r,o,a,i,l,c,s,f,m,_,I,k,T,N,B,L,C,O;return{c(){r=g("body"),o=g("h1"),a=g("b"),i=p("Please enter your Chat-ID:"),l=v(),c=g("div"),s=g("input"),f=v(),m=g("button"),_=p("Submit"),I=v(),k=g("p"),T=p("Contact our "),N=g("a"),B=p("Telegram-Bot"),L=p(" to get your Chat-ID."),this.h()},l(t){r=$(t,"BODY",{class:!0});var e=x(r);o=$(e,"H1",{class:!0});var n=x(o);a=$(n,"B",{});var d=x(a);i=w(d,"Please enter your Chat-ID:"),d.forEach(h),n.forEach(h),l=E(e),c=$(e,"DIV",{id:!0,class:!0});var u=x(c);s=$(u,"INPUT",{id:!0,class:!0}),f=E(u),m=$(u,"BUTTON",{class:!0,type:!0,onsubmit:!0});var g=x(m);_=w(g,"Submit"),g.forEach(h),u.forEach(h),I=E(e),k=$(e,"P",{class:!0});var p=x(k);T=w(p,"Contact our "),N=$(p,"A",{href:!0,class:!0});var v=x(N);B=w(v,"Telegram-Bot"),v.forEach(h),L=w(p," to get your Chat-ID."),p.forEach(h),e.forEach(h),this.h()},h(){y(o,"class","svelte-g445h8"),y(s,"id","chat_id"),y(s,"class","input svelte-g445h8"),y(m,"class","button svelte-g445h8"),y(m,"type","submit"),y(m,"onsubmit","return false"),y(c,"id","Login"),y(c,"class","user svelte-g445h8"),y(N,"href","https://t.me/discordattendancenotificationbot"),y(N,"class","svelte-g445h8"),y(k,"class","svelte-g445h8"),y(r,"class","bild svelte-g445h8")},m(t,n){u(t,r,n),d(r,o),d(o,a),d(a,i),d(r,l),d(r,c),d(c,s),D(s,e[0]),d(c,f),d(c,m),d(m,_),d(r,I),d(r,k),d(k,T),d(k,N),d(N,B),d(k,L),C||(O=[b(s,"input",e[2]),b(m,"click",e[3])],C=!0)},p(t,[e]){1&e&&s.value!==t[0]&&D(s,t[0])},i:t,o:t,d(t){t&&h(r),C=!1,n(O)}}}function tt(t,e,r){let{chatID:n}=e,{handleClickSubmitLogin:o=(()=>{})}=e;return t.$$set=t=>{"chatID"in t&&r(0,n=t.chatID),"handleClickSubmitLogin"in t&&r(1,o=t.handleClickSubmitLogin)},[n,o,function(){n=this.value,r(0,n)},()=>o()]}class et extends Q{constructor(t){super(),K(this,t,tt,Z,a,{chatID:0,handleClickSubmitLogin:1},X)}}function rt(t){s(t,"svelte-ryivu7","table.svelte-ryivu7{border:3px solid;border-color:rgb(180, 72, 159);margin-top:8%;margin-left:8px;color:white;width:100%;margin-bottom:1%;border-collapse:collapse}th.svelte-ryivu7{border:3px solid;border-collapse:collapse;border-color:rgb(180, 72, 159);color:aqua;padding:5px}td.svelte-ryivu7{border:3px solid;border-collapse:collapse;border-color:rgb(180, 72, 159);color:white;padding:5px}.tabellendiv.svelte-ryivu7{padding-left:5%;width:100%;background-color:transparent;border-radius:100px;padding-bottom:4vh}p.svelte-ryivu7{color:white;font-style:italic;font-size:110%;text-align:center}.b.svelte-ryivu7{color:rgb(74, 140, 202)}.body2.svelte-ryivu7{background-image:linear-gradient(to right, rgb(6, 6, 22) ,rgb(20, 21, 66) , rgb(50, 25, 95), rgb(48, 23, 94), rgb(77, 11, 68), rgb(63, 29, 58), rgb(27, 2, 23));height:100%;min-height:99vh}.button1.svelte-ryivu7{background-color:transparent;border-start-start-radius:50px;border-bottom-left-radius:50px;background-image:linear-gradient(to right, rgb(8, 94, 37) ,rgb(24, 100, 56) , rgb(23, 117, 46), rgb(23, 110, 59), rgb(20, 117, 53), rgb(25, 122, 58), rgb(32, 121, 77));color:white}.button2.svelte-ryivu7{border-end-end-radius:50px;border-top-right-radius:50px;color:rgb(255, 255, 255);background:linear-gradient(to right, rgb(124, 45, 70) ,rgb(128, 23, 46) , rgb(128, 14, 33), rgb(110, 10, 10));border-color:rgb(146, 23, 44)}.button3.svelte-ryivu7{background-color:transparent;background-image:linear-gradient(to right, rgb(45, 107, 71) ,rgb(66, 74, 165) , rgb(58, 67, 184), rgb(68, 61, 170), rgb(37, 65, 168), rgb(65, 46, 177), rgb(143, 66, 66));color:white\r\n}.button4.svelte-ryivu7{color:rgb(255, 255, 255);background:linear-gradient(to right, rgb(124, 45, 70) ,rgb(128, 23, 46) , rgb(128, 14, 33), rgb(110, 10, 10));border-color:rgb(146, 23, 44)}h1.svelte-ryivu7{color:white;font-size:5em;font-weight:200}.grid-container.svelte-ryivu7{display:grid;grid-template-columns:repeat(3, 1fr);padding-top:2%;gap:10px;grid-template-rows:repeat(100px, auto);text-align:right;align-items:baseline}.grid-item.svelte-ryivu7{color:white}label.svelte-ryivu7{padding-right:4px}.formular.svelte-ryivu7{padding-top:1%;margin-left:33%;width:30%;padding-right:4%;background-color:transparent;border-radius:100px;box-shadow:0 5px 80px 70px rgba(99, 59, 117, 0.3);padding-bottom:1vh}.buttons.svelte-ryivu7{margin-top:5%;padding-bottom:5%;margin-left:13%}")}function nt(t,e,r){const n=t.slice();return n[27]=e[r],n}function ot(t,e,r){const n=t.slice();return n[30]=e[r],n}function at(t,e,r){const n=t.slice();return n[33]=e[r],n}function it(e){let r,n,o=e[33]+"";return{c(){r=g("th"),n=p(o),this.h()},l(t){r=$(t,"TH",{class:!0});var e=x(r);n=w(e,o),e.forEach(h),this.h()},h(){y(r,"class","svelte-ryivu7")},m(t,e){u(t,r,e),d(r,n)},p:t,d(t){t&&h(r)}}}function lt(e){let r,n,o=e[30]+"";return{c(){r=g("td"),n=p(o),this.h()},l(t){r=$(t,"TD",{class:!0});var e=x(r);n=w(e,o),e.forEach(h),this.h()},h(){y(r,"class","svelte-ryivu7")},m(t,e){u(t,r,e),d(r,n)},p:t,d(t){t&&h(r)}}}function ct(t){let e,r,n,o,a,i,l,c=Object.values(t[27]),s=[];for(let e=0;e<c.length;e+=1)s[e]=lt(ot(t,c,e));return{c(){e=g("tr");for(let t=0;t<s.length;t+=1)s[t].c();r=v(),n=g("button"),o=p("Delete"),a=v(),this.h()},l(t){e=$(t,"TR",{});var i=x(e);for(let t=0;t<s.length;t+=1)s[t].l(i);r=E(i),n=$(i,"BUTTON",{class:!0,type:!0});var l=x(n);o=w(l,"Delete"),l.forEach(h),a=E(i),i.forEach(h),this.h()},h(){y(n,"class","button4 svelte-ryivu7"),y(n,"type","reset")},m(c,h){u(c,e,h);for(let t=0;t<s.length;t+=1)s[t].m(e,null);d(e,r),d(e,n),d(n,o),d(e,a),i||(l=b(n,"click",t[16]),i=!0)},p(t,n){if(128&n[0]){let o;for(c=Object.values(t[27]),o=0;o<c.length;o+=1){const a=ot(t,c,o);s[o]?s[o].p(a,n):(s[o]=lt(a),s[o].c(),s[o].m(e,r))}for(;o<s.length;o+=1)s[o].d(1);s.length=c.length}},d(t){t&&h(e),f(s,t),i=!1,l()}}}function st(e){let r,o,a,i,l,c,s,m,_,I,k,T,N,B,L,C,O,S,A,z,P,j,U,V,H,R,q,G,M,Y,F,W,J,K,Q,X,Z,tt,et,rt,ot,lt,st,dt,ut,ht,ft,gt,pt,vt,mt,bt,yt,xt,_t,$t,wt,Et,Dt,It,kt=Object.keys(e[7][0]),Tt=[];for(let t=0;t<kt.length;t+=1)Tt[t]=it(at(e,kt,t));let Nt=Object.values(e[7]),Bt=[];for(let t=0;t<Nt.length;t+=1)Bt[t]=ct(nt(e,Nt,t));return{c(){r=g("body"),o=g("h1"),a=g("b"),i=p("Add to List of Notifications for:"),l=v(),c=g("form"),s=g("p"),m=p("Logged in with Chat-ID: "),_=g("b"),I=p(e[0]),k=v(),T=g("div"),N=g("div"),B=g("label"),L=p("discord server:"),C=v(),O=g("div"),S=g("input"),A=v(),z=g("div"),P=g("input"),j=v(),U=g("div"),V=g("label"),H=p("specific channel:"),R=v(),q=g("div"),G=g("input"),M=v(),Y=g("div"),F=g("input"),W=v(),J=g("div"),K=g("label"),Q=p("discord user:"),X=v(),Z=g("div"),tt=g("input"),et=v(),rt=g("div"),ot=g("input"),lt=v(),st=g("div"),dt=g("button"),ut=p("Submit"),ht=v(),ft=g("button"),gt=p("Update"),pt=v(),vt=g("button"),mt=p("Reset"),bt=v(),yt=g("div"),xt=g("table"),_t=g("thead"),$t=g("tr");for(let t=0;t<Tt.length;t+=1)Tt[t].c();wt=v(),Et=g("tbody");for(let t=0;t<Bt.length;t+=1)Bt[t].c();this.h()},l(t){r=$(t,"BODY",{class:!0});var n=x(r);o=$(n,"H1",{class:!0});var d=x(o);a=$(d,"B",{});var u=x(a);i=w(u,"Add to List of Notifications for:"),u.forEach(h),d.forEach(h),l=E(n),c=$(n,"FORM",{class:!0});var f=x(c);s=$(f,"P",{class:!0});var g=x(s);m=w(g,"Logged in with Chat-ID: "),_=$(g,"B",{class:!0});var p=x(_);I=w(p,e[0]),p.forEach(h),g.forEach(h),k=E(f),T=$(f,"DIV",{class:!0});var v=x(T);N=$(v,"DIV",{class:!0});var b=x(N);B=$(b,"LABEL",{for:!0,class:!0});var y=x(B);L=w(y,"discord server:"),y.forEach(h),b.forEach(h),C=E(v),O=$(v,"DIV",{class:!0});var D=x(O);S=$(D,"INPUT",{class:!0,id:!0,type:!0,name:!0,placeholder:!0}),D.forEach(h),A=E(v),z=$(v,"DIV",{class:!0});var nt=x(z);P=$(nt,"INPUT",{class:!0,id:!0,type:!0,name:!0,placeholder:!0}),nt.forEach(h),j=E(v),U=$(v,"DIV",{class:!0});var at=x(U);V=$(at,"LABEL",{for:!0,class:!0});var it=x(V);H=w(it,"specific channel:"),it.forEach(h),at.forEach(h),R=E(v),q=$(v,"DIV",{class:!0});var ct=x(q);G=$(ct,"INPUT",{id:!0,tpye:!0,name:!0,placeholder:!0}),ct.forEach(h),M=E(v),Y=$(v,"DIV",{class:!0});var Dt=x(Y);F=$(Dt,"INPUT",{id:!0,tpye:!0,name:!0,placeholder:!0}),Dt.forEach(h),W=E(v),J=$(v,"DIV",{class:!0});var It=x(J);K=$(It,"LABEL",{for:!0,class:!0});var kt=x(K);Q=w(kt,"discord user:"),kt.forEach(h),It.forEach(h),X=E(v),Z=$(v,"DIV",{class:!0});var Nt=x(Z);tt=$(Nt,"INPUT",{id:!0,tpye:!0,name:!0,placeholder:!0}),Nt.forEach(h),et=E(v),rt=$(v,"DIV",{class:!0});var Lt=x(rt);ot=$(Lt,"INPUT",{id:!0,tpye:!0,name:!0,placeholder:!0}),Lt.forEach(h),v.forEach(h),lt=E(f),st=$(f,"DIV",{class:!0});var Ct=x(st);dt=$(Ct,"BUTTON",{class:!0});var Ot=x(dt);ut=w(Ot,"Submit"),Ot.forEach(h),ht=E(Ct),ft=$(Ct,"BUTTON",{class:!0});var St=x(ft);gt=w(St,"Update"),St.forEach(h),pt=E(Ct),vt=$(Ct,"BUTTON",{class:!0,type:!0});var At=x(vt);mt=w(At,"Reset"),At.forEach(h),Ct.forEach(h),bt=E(f),yt=$(f,"DIV",{class:!0});var zt=x(yt);xt=$(zt,"TABLE",{class:!0});var Pt=x(xt);_t=$(Pt,"THEAD",{});var jt=x(_t);$t=$(jt,"TR",{});var Ut=x($t);for(let t=0;t<Tt.length;t+=1)Tt[t].l(Ut);Ut.forEach(h),jt.forEach(h),wt=E(Pt),Et=$(Pt,"TBODY",{});var Vt=x(Et);for(let t=0;t<Bt.length;t+=1)Bt[t].l(Vt);Vt.forEach(h),Pt.forEach(h),zt.forEach(h),f.forEach(h),n.forEach(h),this.h()},h(){y(o,"class","svelte-ryivu7"),y(_,"class","b svelte-ryivu7"),y(s,"class","svelte-ryivu7"),y(B,"for","discord_server"),y(B,"class","svelte-ryivu7"),y(N,"class","grid-item svelte-ryivu7"),y(S,"class","l1"),y(S,"id","discord_server"),y(S,"type","text"),y(S,"name","discord_server"),y(S,"placeholder","server-id"),y(O,"class","grid-item svelte-ryivu7"),y(P,"class","l1"),y(P,"id","server_nickname"),y(P,"type","text"),y(P,"name","server_nickname"),y(P,"placeholder","server-nickname"),y(z,"class","grid-item svelte-ryivu7"),y(V,"for","specific_channel"),y(V,"class","svelte-ryivu7"),y(U,"class","grid-item svelte-ryivu7"),y(G,"id","specific_channel"),y(G,"tpye","text"),y(G,"name","specific_channel"),y(G,"placeholder","channel-id"),y(q,"class","grid-item svelte-ryivu7"),y(F,"id","channel"),y(F,"tpye","text"),y(F,"name","channel_nickname"),y(F,"placeholder","channel-nickname"),y(Y,"class","grid-item svelte-ryivu7"),y(K,"for","discord_user"),y(K,"class","svelte-ryivu7"),y(J,"class","grid-item svelte-ryivu7"),y(tt,"id","discord_user"),y(tt,"tpye","text"),y(tt,"name","discord_user"),y(tt,"placeholder","user-id"),y(Z,"class","grid-item svelte-ryivu7"),y(ot,"id","user_nickname"),y(ot,"tpye","text"),y(ot,"name","user_nickname"),y(ot,"placeholder","user-nickname"),y(rt,"class","grid-item svelte-ryivu7"),y(T,"class","grid-container svelte-ryivu7"),y(dt,"class","button1 svelte-ryivu7"),y(ft,"class","button3 svelte-ryivu7"),y(vt,"class","button2 svelte-ryivu7"),y(vt,"type","reset"),y(st,"class","buttons svelte-ryivu7"),y(xt,"class","table svelte-ryivu7"),y(yt,"class","tabellendiv svelte-ryivu7"),y(c,"class","formular svelte-ryivu7"),y(r,"class","body2 svelte-ryivu7")},m(t,n){u(t,r,n),d(r,o),d(o,a),d(a,i),d(r,l),d(r,c),d(c,s),d(s,m),d(s,_),d(_,I),d(c,k),d(c,T),d(T,N),d(N,B),d(B,L),d(T,C),d(T,O),d(O,S),D(S,e[1]),d(T,A),d(T,z),d(z,P),D(P,e[2]),d(T,j),d(T,U),d(U,V),d(V,H),d(T,R),d(T,q),d(q,G),D(G,e[3]),d(T,M),d(T,Y),d(Y,F),D(F,e[4]),d(T,W),d(T,J),d(J,K),d(K,Q),d(T,X),d(T,Z),d(Z,tt),D(tt,e[5]),d(T,et),d(T,rt),d(rt,ot),D(ot,e[6]),d(c,lt),d(c,st),d(st,dt),d(dt,ut),d(st,ht),d(st,ft),d(ft,gt),d(st,pt),d(st,vt),d(vt,mt),d(c,bt),d(c,yt),d(yt,xt),d(xt,_t),d(_t,$t);for(let t=0;t<Tt.length;t+=1)Tt[t].m($t,null);d(xt,wt),d(xt,Et);for(let t=0;t<Bt.length;t+=1)Bt[t].m(Et,null);Dt||(It=[b(S,"input",e[9]),b(P,"input",e[10]),b(G,"input",e[11]),b(F,"input",e[12]),b(tt,"input",e[13]),b(ot,"input",e[14]),b(dt,"click",e[15])],Dt=!0)},p(t,e){var r,n;if(1&e[0]&&(r=I,n=""+(n=t[0]),r.wholeText!==n&&(r.data=n)),2&e[0]&&S.value!==t[1]&&D(S,t[1]),4&e[0]&&P.value!==t[2]&&D(P,t[2]),8&e[0]&&G.value!==t[3]&&D(G,t[3]),16&e[0]&&F.value!==t[4]&&D(F,t[4]),32&e[0]&&tt.value!==t[5]&&D(tt,t[5]),64&e[0]&&ot.value!==t[6]&&D(ot,t[6]),128&e[0]){let r;for(kt=Object.keys(t[7][0]),r=0;r<kt.length;r+=1){const n=at(t,kt,r);Tt[r]?Tt[r].p(n,e):(Tt[r]=it(n),Tt[r].c(),Tt[r].m($t,null))}for(;r<Tt.length;r+=1)Tt[r].d(1);Tt.length=kt.length}if(128&e[0]){let r;for(Nt=Object.values(t[7]),r=0;r<Nt.length;r+=1){const n=nt(t,Nt,r);Bt[r]?Bt[r].p(n,e):(Bt[r]=ct(n),Bt[r].c(),Bt[r].m(Et,null))}for(;r<Bt.length;r+=1)Bt[r].d(1);Bt.length=Nt.length}},i:t,o:t,d(t){t&&h(r),f(Tt,t),f(Bt,t),Dt=!1,n(It)}}}function dt(t,e,r){const n=(new AbortController).signal;let{chatID:o}=e,a="",i="",l="",c="",s="",d="";async function u(){if(""!==l&&void 0!==o&&/^\d+$/.test(l)){""===c&&r(4,c=void 0);const t=await fetch("http://5.45.107.109:8800/api/v1/persistence/post/channel/",{signal:n,method:"POST",body:{channelID:l,chatID:o,name:c}}),e=await t.json();console.log(await e.status)}if(""!==s&&void 0!==o&&/^\d+$/.test(s)){""===d&&r(6,d=void 0);const t=await fetch("http://5.45.107.109:8800/api/v1/persistence/post/user/",{signal:n,method:"POST",body:{userID:s,chatID:o,name:d}}),e=await t.json();console.log(await e.status)}if(""!==a&&void 0!==o&&/^\d+$/.test(a)){""===i&&r(2,i=void 0);const t=await fetch("http://5.45.107.109:8800/api/v1/persistence/post/guild/",{signal:n,method:"POST",body:{guildID:a,chatID:o,name:i}}),e=await t.json();console.log(await e.status)}}return document.getElementsByName("entry"),document.querySelector("tabellendiv"),async function(){const t=await fetch(`http://5.45.107.109:8800/api/v1/persistence/get/channelByID/${o}`,{signal:n,method:"GET"});await t.json();const e=await fetch(`http://5.45.107.109:8800/api/v1/persistence/get/userByID/${o}`,{signal:n,method:"GET"});await e.json();const r=await fetch(`http://5.45.107.109:8800/api/v1/persistence/get/guildByID/${o}`,{signal:n,method:"GET"});await r.json()}(),t.$$set=t=>{"chatID"in t&&r(0,o=t.chatID)},[o,a,i,l,c,s,d,[{Number:1,Type:"Discord-Channel",Name:"124324234445",Nickname:"Hans"},{Number:2,Type:"User-Name",Name:"123131232342",Nickname:"Peter"},{Number:3,Type:"User-Name",Name:"123123123234",Nickname:"Maier"}],u,function(){a=this.value,r(1,a)},function(){i=this.value,r(2,i)},function(){l=this.value,r(3,l)},function(){c=this.value,r(4,c)},function(){s=this.value,r(5,s)},function(){d=this.value,r(6,d)},()=>u(),()=>function(){let t=document.querySelector(".button4");t.addEventListener("click",function(t){let e=t;const r=t.closest("tr");console.log(r),e.closest("tr").remove()}(t))}()]}class ut extends Q{constructor(t){super(),K(this,t,dt,st,a,{chatID:0},rt,[-1,-1])}}function ht(t){let e,r,n;function o(e){t[4](e)}let a={handleClickSubmitLogin:t[3]};return void 0!==t[1]&&(a.chatID=t[1]),e=new et({props:a}),T.push((()=>M(e,"chatID",o))),{c(){Y(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,r){W(e,t,r),n=!0},p(t,n){const o={};!r&&2&n&&(r=!0,o.chatID=t[1],S((()=>r=!1))),e.$set(o)},i(t){n||(q(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function ft(t){let e,r,n;function o(e){t[5](e)}let a={};return void 0!==t[1]&&(a.chatID=t[1]),e=new ut({props:a}),T.push((()=>M(e,"chatID",o))),{c(){Y(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,r){W(e,t,r),n=!0},p(t,n){const o={};!r&&2&n&&(r=!0,o.chatID=t[1],S((()=>r=!1))),e.$set(o)},i(t){n||(q(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function gt(t){let e,r,n,o="Login"===t[0]&&ht(t),a="Home"===t[0]&&ft(t);return{c(){o&&o.c(),e=v(),a&&a.c(),r=m()},l(t){o&&o.l(t),e=E(t),a&&a.l(t),r=m()},m(t,i){o&&o.m(t,i),u(t,e,i),a&&a.m(t,i),u(t,r,i),n=!0},p(t,[n]){"Login"===t[0]?o?(o.p(t,n),1&n&&q(o,1)):(o=ht(t),o.c(),q(o,1),o.m(e.parentNode,e)):o&&(H(),G(o,1,1,(()=>{o=null})),R()),"Home"===t[0]?a?(a.p(t,n),1&n&&q(a,1)):(a=ft(t),a.c(),q(a,1),a.m(r.parentNode,r)):a&&(H(),G(a,1,1,(()=>{a=null})),R())},i(t){n||(q(o),q(a),n=!0)},o(t){G(o),G(a),n=!1},d(t){o&&o.d(t),t&&h(e),a&&a.d(t),t&&h(r)}}}function pt(t,e,r){let n="Login",o="";const a=(new AbortController).signal;async function i(){const t=await fetch(`http://5.45.107.109:8800/api/v1/persistence/get/chatID/${o}`,{signal:a,method:"GET"}),e=await t.json();!0===await e.exists?r(0,n="Home"):alert(`Chat-ID '${o}' is not registered. Please contact our Telegram-Bot!`)}return[n,o,i,()=>i(),function(t){o=t,r(1,o)},function(t){o=t,r(1,o)}]}return new class extends Q{constructor(t){super(),K(this,t,pt,gt,a,{})}}({target:document.querySelector("#__snel"),props:{}}),{}})();