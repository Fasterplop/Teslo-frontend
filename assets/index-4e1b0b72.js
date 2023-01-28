import{b as a,R as P,a as c,_ as f}from"./index-39e354ab.js";import{G as A,j as e,r}from"./iconBase-3b7d111a.js";import{L as g}from"./index-bc7dc0c5.js";import{A as w}from"./DataTable-aa997715.js";import{B as z}from"./index.esm-0a3c5416.js";import{a as D}from"./index.esm-047accf7.js";import{L as F}from"./index-602607c3.js";import{s as j}from"./styled-components.browser.esm-e75c5c18.js";import{T as k}from"./index-1521be78.js";import{T as H}from"./index-5799cdaf.js";const n={counters:()=>a.get("/dashboard/counters"),findAllOrdersByYear:t=>a.get(`/dashboard/findAllOrders/${t}`),findAllOrdersByYearMonth:(t,s)=>a.get(`/dashboard/findOrders/${t}/${s}`),findPaymentMethodsByYearMonth:(t,s)=>a.get(`/dashboard/findPaymentMethods/${t}/${s}`),getLastTenUsers:()=>a.get("/dashboard/getTenUsers"),getLastTenOrders:()=>a.get("/dashboard/getTenOrders")};function R(t){return A({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.5-8v2H11v2h2v-2h1a2.5 2.5 0 1 0 0-5h-4a.5.5 0 1 1 0-1h5.5V8H13V6h-2v2h-1a2.5 2.5 0 0 0 0 5h4a.5.5 0 1 1 0 1H8.5z"}}]}]})(t)}const x=t=>{const{path:s,Icon:o,colouredIcon:p,title:h,value:l}=t;return e.exports.jsx(F,{to:s,children:e.exports.jsxs($,{backgroundHoverColor:p,children:[e.exports.jsx(E,{children:e.exports.jsx(o,{})}),e.exports.jsxs(V,{colorText:t.colouredIcon,children:[e.exports.jsx(P,{isTrue:h,children:e.exports.jsx("span",{children:t.title})}),e.exports.jsx(P,{isTrue:l||l===0,children:e.exports.jsx("h6",{className:"mt-2",children:l})})]})]})})},$=j.div`
	padding: 30px;
	display: flex;
	align-items: center;
	background-color: #fff;
	box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
	border-radius: 20px;
	position: relative;
	overflow: hidden;
	z-index: 1;
	transition: color 0.5s ease 0s;
	margin-bottom: 10px;

	&::before {
		content: '';
		width: 100%;
		padding-top: 100%;
		border-radius: 50%;
		background-image: linear-gradient(
			to top right,
			#363636,
			${t=>t.backgroundHoverColor}
		);
		position: absolute;
		left: -50%;
		top: 0;
		transform: scale(0);
		transition: transform 0.8s ease 0s;
	}

	&:hover::before {
		transform: scale(3);
	}

	svg {
		color: ${t=>t.backgroundHoverColor};
	}

	&:hover {
		h4,
		h6,
		span,
		svg {
			color: #fff;
		}
	}
`,E=j.div`
	font-size: 2.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 5;
`,V=j.div`
	flex-grow: 1;
	text-align: center;
	z-index: 1;
	text-transform: capitalize;

	h4,
	span {
		color: #111;
		font-weight: 600;
	}
	h4 {
		font-size: 2.5rem;
		margin-bottom: 10px;
	}
`,W=t=>{const{totales:s}=t;return e.exports.jsxs(r.exports.Fragment,{children:[e.exports.jsx(x,{title:"Categories",Icon:w,value:s.totalCategories,path:c.categories.path,colouredIcon:"#04ccd6"}),e.exports.jsx(x,{title:"Products",Icon:z,value:s.totalProducts,path:c.products.path,colouredIcon:"#ff5252"}),e.exports.jsx(x,{title:"Users",Icon:D,value:s.totalUsers,path:c.users.path,colouredIcon:"#40407a"}),e.exports.jsx(x,{title:"Orders",Icon:R,value:s.totalOrders,path:c.orders.path,colouredIcon:"#3ae374"})]})},G=[{title:"Date Created",field:"dateCreatedFormattedWithouHour",center:!0},{title:"Full Name",field:"fullName"},{title:"Actions",field:"actions",center:!0}],q=t=>{const{users:s,setUsers:o}=t;return e.exports.jsx(k,{isFetching:!1,users:s,setUsers:o,showCreate:!1,showPagination:!1,showSearch:!1,heading:G})},J=[{title:"ID",field:"idorder"},{title:"Full name",field:"fullName"},{title:"Date",field:"dateCreatedFormatted"},{title:"Total",field:"totalFormatted",center:!0},{title:"Payment Method",field:"paymentMethod.title"},{title:"status",field:"badgeStatus",center:!0},{title:"Actions",field:"actions",center:!0}],K=t=>{const{orders:s,setOrders:o}=t;return e.exports.jsx(H,{orders:s,setOrders:o,isFetching:!1,showPagination:!1,showSearch:!1,heading:J})},Q=r.exports.lazy(()=>f(()=>import("./BarChartYearOrders-84d45234.js"),["assets/BarChartYearOrders-84d45234.js","assets/iconBase-3b7d111a.js","assets/index-03a409d8.js","assets/index-67732e07.js","assets/styled-components.browser.esm-e75c5c18.js","assets/formik.esm-ac5c4b53.js","assets/index-bc7dc0c5.js","assets/index-39e354ab.js","assets/config-bb52a63e.js","assets/DataTable-aa997715.js","assets/index.esm-047accf7.js","assets/index.esm-0a3c5416.js","assets/index-602607c3.js","assets/index-7c3fcb85.js","assets/index-1521be78.js","assets/index-a4924570.js","assets/modalStore-d17d7ffe.js","assets/react-toastify.esm-9ef0ae5c.js","assets/getMaximiumRol-3d17b9cf.js","assets/capitalize-1790f93b.js","assets/dayjs.min-5ff67288.js","assets/index-5799cdaf.js","assets/index-1773b9ca.js"])),X=r.exports.lazy(()=>f(()=>import("./LineChartOrders-794e548c.js"),["assets/LineChartOrders-794e548c.js","assets/iconBase-3b7d111a.js","assets/index-03a409d8.js","assets/index-67732e07.js","assets/styled-components.browser.esm-e75c5c18.js","assets/formik.esm-ac5c4b53.js","assets/index-bc7dc0c5.js","assets/index-39e354ab.js","assets/config-bb52a63e.js","assets/DataTable-aa997715.js","assets/index.esm-047accf7.js","assets/index.esm-0a3c5416.js","assets/index-602607c3.js","assets/index-7c3fcb85.js","assets/index-1521be78.js","assets/index-a4924570.js","assets/modalStore-d17d7ffe.js","assets/react-toastify.esm-9ef0ae5c.js","assets/getMaximiumRol-3d17b9cf.js","assets/capitalize-1790f93b.js","assets/dayjs.min-5ff67288.js","assets/index-5799cdaf.js","assets/index-1773b9ca.js"])),Z=r.exports.lazy(()=>f(()=>import("./ChartPiePaymentMethods-e25dd315.js"),["assets/ChartPiePaymentMethods-e25dd315.js","assets/iconBase-3b7d111a.js","assets/index-03a409d8.js","assets/index-67732e07.js","assets/styled-components.browser.esm-e75c5c18.js","assets/formik.esm-ac5c4b53.js","assets/index-bc7dc0c5.js","assets/index-39e354ab.js","assets/config-bb52a63e.js","assets/DataTable-aa997715.js","assets/index.esm-047accf7.js","assets/index.esm-0a3c5416.js","assets/index-602607c3.js","assets/index-7c3fcb85.js","assets/index-1521be78.js","assets/index-a4924570.js","assets/modalStore-d17d7ffe.js","assets/react-toastify.esm-9ef0ae5c.js","assets/getMaximiumRol-3d17b9cf.js","assets/capitalize-1790f93b.js","assets/dayjs.min-5ff67288.js","assets/index-5799cdaf.js","assets/index-1773b9ca.js"])),C=new Date,d=C.getFullYear(),_=C.getMonth()+1,ee=t=>{const[s,o]=r.exports.useState(!0),[p,h]=r.exports.useState({totalCategories:0,totalOrders:0,totalProducts:0,totalUsers:0}),[l,y]=r.exports.useState([]),[N,b]=r.exports.useState([]),[v,O]=r.exports.useState({year:d,orders:[]}),[m,T]=r.exports.useState({year:d,month:"",total:"0",orders:[]}),[i,M]=r.exports.useState({year:d,month:"",paymentMethods:[]});return r.exports.useEffect(()=>{async function S(){try{o(!0);const[u,B,I,Y,L,U]=await Promise.all([n.counters(),n.getLastTenUsers(),n.getLastTenOrders(),n.findAllOrdersByYear(d),n.findAllOrdersByYearMonth(d,_),n.findPaymentMethodsByYearMonth(d,_)]);h(u.data),y(B.data),b(I.data),O(Y.data),T(L.data),M(U.data)}catch(u){console.log(u)}finally{o(!1)}}S()},[]),s?e.exports.jsx(g,{loading:!0}):(console.log(i),e.exports.jsxs("div",{children:[e.exports.jsxs("div",{className:"grid lg:grid-cols-2 gap-4",children:[e.exports.jsx("div",{children:e.exports.jsx("div",{className:"grid lg:grid-cols-2 gap-4",children:e.exports.jsx(W,{totales:p})})}),e.exports.jsx("div",{children:e.exports.jsxs("div",{className:"tile",children:[e.exports.jsxs("h6",{className:"mb-3",children:["Total Payment Methods (",i.month," -"," ",i.year,")"]}),e.exports.jsx(Z,{paymentMethods:i,setPaymentMethods:M})]})})]}),e.exports.jsxs("div",{className:"grid lg:grid-cols-12 gap-4 mt-6",children:[e.exports.jsx("div",{className:"lg:col-span-5 xl:col-span-4",children:e.exports.jsxs("div",{className:"tile",children:[e.exports.jsx("h6",{className:"mb-3",children:"Users"}),e.exports.jsx(q,{users:l,setUsers:y})]})}),e.exports.jsx("div",{className:"lg:col-span-7 xl:col-span-8",children:e.exports.jsxs("div",{className:"tile",children:[e.exports.jsx("h6",{className:"mb-3",children:"Orders"}),e.exports.jsx(K,{orders:N,setOrders:b})]})})]}),e.exports.jsxs("div",{className:"grid lg:grid-cols-2 gap-4 mt-6",children:[e.exports.jsxs("div",{className:"tile",children:[e.exports.jsxs("h6",{className:"mb-3",children:["Total orders by month (",v.year,")"]}),e.exports.jsx(r.exports.Suspense,{fallback:e.exports.jsx(g,{loading:!0}),children:e.exports.jsx(Q,{orders:v,setOrders:O})})]}),e.exports.jsxs("div",{className:"tile",children:[e.exports.jsxs("h6",{className:"mb-3",children:["Total orders by day (",m.month," -"," ",m.year,")"]}),e.exports.jsx(r.exports.Suspense,{fallback:e.exports.jsx(g,{loading:!0}),children:e.exports.jsx(X,{orders:m,setOrders:T})})]})]})]}))},xe=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{n as d,xe as i};
