import{j as t}from"./iconBase-3b7d111a.js";import{H as p}from"./index-3334a6a5.js";import{p as a}from"./index-59c680b6.js";import{u as m}from"./useQueryState-f450e7e7.js";import{T as c}from"./index-fbd1e212.js";import"./index.esm-047accf7.js";import"./index-602607c3.js";import"./index-7c3fcb85.js";import"./index-39e354ab.js";import"./config-bb52a63e.js";import"./index-bc7dc0c5.js";import"./QueryClientProvider.esm-05af3f1d.js";import"./DataTable-aa997715.js";import"./formik.esm-ac5c4b53.js";import"./modalStore-d17d7ffe.js";import"./capitalize-1790f93b.js";import"./dayjs.min-5ff67288.js";import"./react-toastify.esm-9ef0ae5c.js";import"./index-c48ce783.js";async function d(){const{data:r}=await a.getAllProducts();return r}function u(){return m(["products"],d,[])}const Q=r=>{const{data:o,setData:s,isFetching:e,refetch:i}=u();return t.exports.jsxs(t.exports.Fragment,{children:[t.exports.jsx(p,{to:"/dashboard",children:"Dashboard"}),t.exports.jsx("div",{className:"tile",children:t.exports.jsx(c,{products:o,setProducts:s,isFetching:e,refetch:i})})]})};export{Q as default};