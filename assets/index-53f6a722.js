import{j as c}from"./iconBase-3b7d111a.js";import{P as n}from"./index-be2da344.js";import{u as f}from"./index-a4924570.js";import{u as d}from"./modalStore-d17d7ffe.js";import{Q as i}from"./react-toastify.esm-9ef0ae5c.js";import"./index-1773b9ca.js";import"./index-39e354ab.js";import"./config-bb52a63e.js";import"./index-0ad39150.js";import"./getMaximiumRol-3d17b9cf.js";import"./capitalize-1790f93b.js";import"./validationSchemaUserDto-9dd65add.js";import"./object-be89183a.js";import"./index-ac0909fd.js";import"./formik.esm-ac5c4b53.js";import"./index-bc7dc0c5.js";const Q=l=>{const{user:p,initAuthenticate:a,accessToken:m}=d();async function u(t){var o,e,s;try{(o=t.password)!=null&&o.trim()||delete t.password;const r=await f.updateProfileUser(t);a({token:m,user:r.data}),i.success("User updated successfully.")}catch(r){console.log(r),i.error(((s=(e=r==null?void 0:r.response)==null?void 0:e.data)==null?void 0:s.message)||"Error updating user profile")}}return c.exports.jsx(n,{user:p,onSubmitUpdateUser:u})};export{Q as default};
