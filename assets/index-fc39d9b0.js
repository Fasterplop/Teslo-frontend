import{j as e,r as s}from"./iconBase-3b7d111a.js";import{H as v}from"./index-3334a6a5.js";import{a as A,P as E,_ as m,R as N}from"./index-39e354ab.js";import{D as T,a as U}from"./DataTable-aa997715.js";import{a as j}from"./modalStore-d17d7ffe.js";import{e as I,f as L,g as w,h as V}from"./index.esm-047accf7.js";import{c as D}from"./index-c48ce783.js";import{u as z}from"./useQueryState-f450e7e7.js";import{d as H}from"./dayjs.min-5ff67288.js";import{A as _}from"./index-1773b9ca.js";import{L as O}from"./index-602607c3.js";import{V as c}from"./config-bb52a63e.js";import{Q as b}from"./react-toastify.esm-9ef0ae5c.js";import"./formik.esm-ac5c4b53.js";import"./index-bc7dc0c5.js";import"./QueryClientProvider.esm-05af3f1d.js";import"./index-7c3fcb85.js";async function Y(){const{data:a}=await D.getCategories();return a}function Q(){return z(["categories"],Y,[])}const B=[{title:"Image",field:"imgTable",center:!0},{title:"Name",field:"title"},{title:"Date Created",field:"dateFormatted",center:!0},{title:"Actions",field:"actions",center:!0}],q=a=>{const{category:r,onDeleteCategory:i,onUpdateCategory:n}=a,o=()=>n(r),p=()=>i(r);return e.exports.jsxs("div",{children:[e.exports.jsx(O,{to:A.viewCategory.fnPath(r.idcategory),className:"btn btn-success btn-xs",children:e.exports.jsx(I,{})}),e.exports.jsxs(_,{validRoles:[c.ADMIN,c.SUPER_USER],children:[e.exports.jsx("button",{className:"btn btn-primary btn-xs",onClick:o,children:e.exports.jsx(L,{})}),e.exports.jsx("button",{className:"btn btn-danger btn-xs",onClick:p,children:e.exports.jsx(w,{})})]})]})},G=a=>{const{categories:r,onDeleteCategory:i,onUpdateCategory:n}=a;return r.map(o=>({...o,dateFormatted:H(o.dateCreated).format("DD/MM/YYYY HH:mm:ss"),imgTable:e.exports.jsx("img",{src:o.image?E+"/category/"+o.image:"/img/others/box.png",className:"w-16 mx-auto",alt:"Box default Image"}),actions:e.exports.jsx(q,{category:o,onDeleteCategory:i,onUpdateCategory:n})}))},J=s.exports.lazy(()=>m(()=>import("./FormCreateCategory-caad499d.js"),["assets/FormCreateCategory-caad499d.js","assets/iconBase-3b7d111a.js","assets/useTimeOutMessage-d962b019.js","assets/formik.esm-ac5c4b53.js","assets/react-toastify.esm-9ef0ae5c.js","assets/object-be89183a.js","assets/index-ac0909fd.js","assets/index-39e354ab.js","assets/config-bb52a63e.js","assets/index-c48ce783.js"])),K=s.exports.lazy(()=>m(()=>import("./FormUpdateCategory-f666f8cf.js"),["assets/FormUpdateCategory-f666f8cf.js","assets/iconBase-3b7d111a.js","assets/useTimeOutMessage-d962b019.js","assets/formik.esm-ac5c4b53.js","assets/react-toastify.esm-9ef0ae5c.js","assets/object-be89183a.js","assets/index-ac0909fd.js","assets/index-39e354ab.js","assets/config-bb52a63e.js","assets/index-c48ce783.js"])),W=s.exports.lazy(()=>m(()=>import("./ModalDeleteCategory-21bd3183.js"),["assets/ModalDeleteCategory-21bd3183.js","assets/iconBase-3b7d111a.js","assets/ConfirmModal-8f8003a5.js","assets/Modal-be6ca283.js","assets/index-bc7dc0c5.js","assets/index-39e354ab.js","assets/config-bb52a63e.js","assets/index.esm-047accf7.js","assets/create-visual-element-6082da53.js"])),X=a=>{const[r,i]=s.exports.useState(!1),[n,o]=s.exports.useState(null),[p,u]=s.exports.useState(null),{data:l,setData:d,isFetching:F,refetch:S}=Q(),y=j(t=>t.setModal),C=j(t=>t.closeModal),R=t=>{const x=f=>{d(l.map(g=>g.idcategory===f.idcategory?{...g,...f}:g)),C()};y({title:"Update Category",children:e.exports.jsx(s.exports.Suspense,{fallback:e.exports.jsx(e.exports.Fragment,{}),children:e.exports.jsx(K,{category:t,onSuccess:x})}),size:"md"})},M=()=>{const t=x=>{d([x,...l]),C()};y({title:"Create Category",children:e.exports.jsx(s.exports.Suspense,{fallback:e.exports.jsx(e.exports.Fragment,{}),children:e.exports.jsx(J,{onSuccess:t})})})},h=()=>{i(!1),o(null)},P=t=>{i(!0),o(t)},k=async()=>{try{u(!0),await D.deleteCategory(n.idcategory),d(l.filter(t=>t.idcategory!==n.idcategory)),h(),b.success("Category deleted successfully")}catch(t){console.log(t),b.error(t.response.data.message||"There was an error deleting the category")}finally{u(!1)}};return e.exports.jsxs(s.exports.Fragment,{children:[e.exports.jsx(T,{buttons:e.exports.jsxs(s.exports.Fragment,{children:[e.exports.jsx(_,{validRoles:[c.ADMIN,c.SUPER_USER],children:e.exports.jsx("button",{className:"btn btn-primary btn-xs",onClick:M,children:e.exports.jsx(V,{})})}),e.exports.jsx("button",{className:"btn btn-outline-alternative btn-xs",onClick:()=>S(),children:e.exports.jsx(U,{})})]}),data:G({categories:l,onDeleteCategory:P,onUpdateCategory:R}),heading:B,loading:F}),e.exports.jsx(N,{isTrue:r,children:e.exports.jsx(s.exports.Suspense,{fallback:e.exports.jsx(e.exports.Fragment,{}),children:e.exports.jsx(W,{onAcceptDeleteCategory:k,onCloseModalDelete:h,showModalDeleteCategory:r,category:n,isLoading:p})})})]})},ue=a=>e.exports.jsxs(s.exports.Fragment,{children:[e.exports.jsx(v,{to:"/dashboard",children:"Dashboard"}),e.exports.jsx("div",{className:"tile",children:e.exports.jsx(X,{})})]});export{ue as default};