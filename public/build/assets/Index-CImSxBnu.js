import{A as z}from"./AppLayout-hUuFfRvB.js";import{_ as U}from"./Modal.vue_vue_type_script_setup_true_lang-DT_8orue.js";import{d as r,i as $,j as a,o as c,c as D,w as l,a as e,b as n,g as m,t as u,u as k,k as L,e as p,h as R,F as C,N as h}from"./app-DYbgwT7h.js";import{S as j}from"./sweetalert2.esm.all-BccGxJ0c.js";import"./dost-logo-B4Huuyod.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const F={class:"py-12"},E={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},M={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},Y={class:"w-full m-5 text-right"},q={class:"text-right m-5"},G={class:"text-center"},H={key:1,span:""},J={class:"m-2"},K={style:{color:"gray"}},Q={class:"text-center"},st={__name:"Index",props:{pstos:Object},setup(i){const x=r(!1),y=r(null);r({});const w=r({}),v=r("");$(()=>v.value,s=>{h.get("/pstos",{search:s},{preserveState:!0})});const f=async(s,t,_)=>{x.value=s,y.value=t,w.value=_},S=async s=>{j.fire({html:'<div style="font-weight: bold; font-size:25px">Are you sure you want to delete this record?</div> ',icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, I'm sure",showLoaderOnConfirm:!0}).then(t=>{t.isConfirmed&&h.post("/pstos/delete",{id:s})})},V=async()=>{pstos.value={}};let d=1;const O=async s=>{h.visit("/pstos?page="+s,{preserveState:!0}),d=s};return(s,t)=>{const _=a("v-text-field"),b=a("v-col"),g=a("v-btn"),T=a("v-row"),N=a("v-pagination"),B=a("v-table"),P=a("v-card");return c(),D(z,{title:"Dashboard"},{header:l(()=>t[4]||(t[4]=[e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," PSTOs ",-1)])),default:l(()=>[e("div",F,[e("div",E,[e("div",M,[n(T,{style:{"margin-bottom":"-30px"}},{default:l(()=>[n(b,null,{default:l(()=>[e("div",Y,[n(_,{loading:s.loading,"append-inner-icon":"mdi-magnify",density:"compact",label:"Search",variant:"solo","hide-details":"","single-line":"",modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=o=>v.value=o),"onClick:appendInner":s.onClick},null,8,["loading","modelValue","onClick:appendInner"])])]),_:1}),n(b,null,{default:l(()=>[e("div",q,[n(g,{onClick:t[1]||(t[1]=o=>f(!0,"Add",null)),size:"small","prepend-icon":"mdi-plus",color:"green"},{default:l(()=>t[5]||(t[5]=[m(" PSTO ")])),_:1})])]),_:1})]),_:1}),n(P,{class:"m-3"},{default:l(()=>[n(B,null,{bottom:l(()=>[e("div",J,[e("span",K,[m(" Showing "+u(i.pstos.from)+" to "+u(i.pstos.to)+" out of ",1),e("b",null,u(i.pstos.total)+" records",1)]),e("div",Q,[n(N,{modelValue:k(d),"onUpdate:modelValue":t[2]||(t[2]=o=>L(d)?d.value=o:d=o),length:i.pstos.last_page,circle:"",onClick:t[3]||(t[3]=o=>O(k(d)))},null,8,["modelValue","length"])])])]),default:l(()=>[t[8]||(t[8]=e("thead",null,[e("tr",null,[e("th",{class:"text-left"}," # "),e("th",{class:"text-left"}," Name "),e("th",{class:"text-center"}," Actions ")])],-1)),e("tbody",null,[(c(!0),p(C,null,R(i.pstos.data,(o,A)=>(c(),p("tr",{key:o.id,class:"hover:bg-gray-200"},[o?(c(),p(C,{key:0},[e("td",null,u(A+1),1),e("td",null,u(o.psto_name),1),e("td",G,[n(g,{class:"mr-3",onClick:I=>S(o.id),size:"small","prepend-icon":"mdi-delete",color:"red"},{default:l(()=>t[6]||(t[6]=[m(" Delete ")])),_:2},1032,["onClick"]),n(g,{onClick:I=>f(!0,"Update",o),size:"small","prepend-icon":"mdi-update",color:"primary"},{default:l(()=>t[7]||(t[7]=[m(" Update ")])),_:2},1032,["onClick"])])],64)):(c(),p("td",H," No data at the moment"))]))),128))])]),_:1})]),_:1})])])]),n(U,{value:x.value,psto:w.value,action:y.value,onInput:f,onReloadPSTOs:V},null,8,["value","psto","action"])]),_:1})}}};export{st as default};
