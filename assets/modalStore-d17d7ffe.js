import{s as b,h as j}from"./index-bc7dc0c5.js";import{b as S}from"./index-39e354ab.js";import{r as k,g as O}from"./iconBase-3b7d111a.js";const v=e=>{e?S.defaults.headers.common.Authorization="Bearer "+e:delete S.defaults.headers.common.Authorization},z={logIn(e){return S.post("/auth/local/login",e)},refresh(){return S.get("/auth/refresh")},signUp(e){return S.post("/auth/local/signup",e)}},x=e=>{let t;const n=new Set,o=(s,h)=>{const u=typeof s=="function"?s(t):s;if(!Object.is(u,t)){const f=t;t=h??typeof u!="object"?u:Object.assign({},t,u),n.forEach(g=>g(t,f))}},r=()=>t,i={setState:o,getState:r,subscribe:s=>(n.add(s),()=>n.delete(s)),destroy:()=>n.clear()};return t=e(o,r,i),i},A=e=>e?x(e):x;var I={exports:{}},w={};var m=k.exports,T=b.exports;function V(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var M=typeof Object.is=="function"?Object.is:V,D=T.useSyncExternalStore,q=m.useRef,B=m.useEffect,C=m.useMemo,U=m.useDebugValue;w.useSyncExternalStoreWithSelector=function(e,t,n,o,r){var c=q(null);if(c.current===null){var l={hasValue:!1,value:null};c.current=l}else l=c.current;c=C(function(){function s(a){if(!h){if(h=!0,u=a,a=o(a),r!==void 0&&l.hasValue){var d=l.value;if(r(d,a))return f=d}return f=a}if(d=f,M(u,a))return d;var p=o(a);return r!==void 0&&r(d,p)?d:(u=a,f=p)}var h=!1,u,f,g=n===void 0?null:n;return[function(){return s(t())},g===null?void 0:function(){return s(g())}]},[t,n,o,r]);var i=D(e,c[0],c[1]);return B(function(){l.hasValue=!0,l.value=i},[i]),U(i),i};(function(e){e.exports=w})(I);const W=O(I.exports),{useSyncExternalStoreWithSelector:_}=W;function F(e,t=e.getState,n){const o=_(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return k.exports.useDebugValue(o),o}const y=e=>{const t=typeof e=="function"?A(e):e,n=(o,r)=>F(t,o,r);return Object.assign(n,t),n},E=e=>e?y(e):y,H=E(e=>({user:{},authenticated:!1,loading:!0,accessToken:localStorage.getItem("at"),logOut(){e({user:{},accessToken:null,loading:!1,authenticated:!1}),localStorage.removeItem("at")},async initAuthenticate(t){const n=o=>e(()=>({authenticated:!0,loading:!1,accessToken:localStorage.getItem("at"),user:o}));if(t){localStorage.setItem("at",t.token),v(t.token),n(t.user);return}try{if(!localStorage.getItem("at")){e({user:{},accessToken:null,loading:!1,authenticated:!1});return}const o=await z.refresh();v(o.data.token),localStorage.setItem("at",o.data.token),n(o.data.user)}catch(o){console.log(o),e({user:{},accessToken:null,loading:!1,authenticated:!1})}finally{j()}}})),J=E(e=>({show:!1,size:"md",title:null,content:null,closeModal(){e({show:!1,title:null,content:null})},setModal(t){e({show:!0,content:t.children,size:t.size||"md",title:t.title})}}));export{J as a,z as b,E as c,v as t,H as u};
