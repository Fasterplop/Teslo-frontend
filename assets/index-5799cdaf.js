import{b as l,a as C,f as F,_ as f,R as U}from"./index-39e354ab.js";import{j as e,r as d,c as _}from"./iconBase-3b7d111a.js";import{D as k,a as M}from"./DataTable-aa997715.js";import{a as w,h as R}from"./index-bc7dc0c5.js";import{a as x}from"./modalStore-d17d7ffe.js";import{d as N}from"./dayjs.min-5ff67288.js";import{A as S}from"./index-1773b9ca.js";import{e as A,i as V,f as D}from"./index.esm-047accf7.js";import{L as P}from"./index-602607c3.js";import{V as u}from"./config-bb52a63e.js";import{c as T}from"./capitalize-1790f93b.js";const v={getAll:()=>l.get("/payment-methods"),getOne:t=>l.get(`/payment-methods/${t}`),createOne:t=>l.post("/payment-methods",t),updateOne:(t,s)=>l.put(`/payment-methods/${t}`,s),deleteOne:t=>l.delete(`/payment-methods/${t}`)},E=[{title:"ID",field:"idorder"},{title:"Reference",field:"reference"},{title:"Full name",field:"fullName"},{title:"Date",field:"dateCreatedFormatted"},{title:"Payment Method",field:"paymentMethod.title"},{title:"Total",field:"totalFormatted",center:!0},{title:"status",field:"badgeStatus",center:!0},{title:"Actions",field:"actions",center:!0}],L=t=>{const{order:s,onClickUpdateOrder:n,onClickViewUser:i}=t,r=()=>n(s),c=()=>i(s);return e.exports.jsxs(d.exports.Fragment,{children:[e.exports.jsx(P,{to:C.invoiceOrder.fnPath(s.idorder),className:"btn btn-success btn-xs",children:e.exports.jsx(A,{})}),e.exports.jsxs(S,{validRoles:[u.ADMIN,u.SUPER_USER],children:[e.exports.jsx("button",{className:"btn btn-warning btn-xs",onClick:c,children:e.exports.jsx(V,{})}),e.exports.jsx("button",{className:"btn btn-primary btn-xs",onClick:r,children:e.exports.jsx(D,{})})]})]})},z=t=>{const{status:s}=t;return e.exports.jsx("span",{className:_("btn btn-xs cursor-default btn-pill px-4",s==="cancelled"&&"btn-danger",s==="completed"&&"btn-success",s==="pending"&&"btn-warning"),children:T(s)})},I=t=>{const{orders:s,onClickUpdateOrder:n,onClickViewUser:i}=t;return s.map(r=>({...r,actions:e.exports.jsx(L,{order:r,onClickUpdateOrder:n,onClickViewUser:i}),fullName:r.user.firstName+" "+r.user.lastName,dateCreatedFormatted:N(r.dateCreated).format("DD/MM/YYYY"),totalFormatted:F.format(r.total),badgeStatus:e.exports.jsx(z,{status:r.status})}))},$=d.exports.lazy(()=>f(()=>import("./FormUpdateOrder-40edb9f1.js"),["assets/FormUpdateOrder-40edb9f1.js","assets/iconBase-3b7d111a.js","assets/index-ac0909fd.js","assets/index-39e354ab.js","assets/config-bb52a63e.js","assets/formik.esm-ac5c4b53.js","assets/index-398deebc.js","assets/index-6161b94e.js","assets/capitalize-1790f93b.js","assets/react-toastify.esm-9ef0ae5c.js"])),Y=d.exports.lazy(()=>f(()=>import("./ModalViewUser-575fc6dd.js"),["assets/ModalViewUser-575fc6dd.js","assets/iconBase-3b7d111a.js","assets/getMaximiumRol-3d17b9cf.js","assets/config-bb52a63e.js","assets/capitalize-1790f93b.js","assets/dayjs.min-5ff67288.js"])),q=t=>{const{orders:s,isFetching:n,heading:i,setOrders:r,refetch:c,showPagination:h,showSearch:b}=t,p=x(a=>a.setModal),j=x(a=>a.closeModal);async function g(a){function y(o){r(s.map(m=>m.idorder===o.idorder?{...o}:m)),j()}try{w();const o=await v.getAll();p({title:`Update Order ${a.idorder}`,size:"lg",children:e.exports.jsx(d.exports.Suspense,{fallback:e.exports.jsx(e.exports.Fragment,{}),children:e.exports.jsx($,{paymentMethods:o.data,order:a,onSuccess:y})})})}catch(o){console.log(o)}finally{R()}}function O(a){p({title:`View Order #${a.idorder} User`,children:e.exports.jsx(d.exports.Suspense,{fallback:e.exports.jsx(e.exports.Fragment,{}),children:e.exports.jsx(Y,{user:a.user})}),size:"md"})}return e.exports.jsx(k,{buttons:e.exports.jsx(e.exports.Fragment,{children:e.exports.jsx(U,{isTrue:c,children:e.exports.jsx("button",{className:"btn btn-alternative btn-xs",onClick:c,children:e.exports.jsx(M,{})})})}),data:I({orders:s,onClickUpdateOrder:g,onClickViewUser:O}),loading:n,heading:i,showPagination:h,showSearch:b})};q.defaultProps={heading:E};export{q as T,v as p};