import{j as e}from"./iconBase-3b7d111a.js";import{I as i,B as m}from"./index-ac0909fd.js";import{u as l}from"./index-a4924570.js";import{a as n}from"./modalStore-d17d7ffe.js";import{F as c,a as p}from"./formik.esm-ac5c4b53.js";import{Q as s}from"./react-toastify.esm-9ef0ae5c.js";import{c as d,a as u}from"./object-be89183a.js";import"./index-39e354ab.js";import"./config-bb52a63e.js";import"./index-bc7dc0c5.js";const f={email:""},x=d({email:u().required("Email is required").email("Email not valid")}),k=h=>{const{closeModal:o}=n(),a=async t=>{try{const r=await l.sendRequestPassword(t);s.success(r.data.msg),o()}catch(r){console.log(r),s.error(r.response.data.message||"Error sending message to the email")}};return e.exports.jsx(c,{initialValues:f,validationSchema:x,onSubmit:a,children:e.exports.jsxs(p,{children:[e.exports.jsx(i,{name:"email",label:"Email",placeholder:"Type your email",showSuccess:!1}),e.exports.jsx(m,{full:!0,className:"btn-primary",children:"Send Email"})]})})};export{k as default};
