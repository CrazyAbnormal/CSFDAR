import{A as j}from"./AppLayout-C_0tXS6j.js";import"./index-C_63zdRr.js";import{_ as B}from"./Modal.vue_vue_type_script_setup_true_lang-CjE610LO.js";import"./vue-multiselect.css_vue_type_style_index_0_src_true_lang-B0IMtBhF.js";import{d as u,i as N,j as d,o as c,c as D,w as l,a as t,b as a,g as f,t as r,u as m,k as F,e as p,h as T,F as y,l as k}from"./app-HJaQnsHa.js";import"./sweetalert2.esm.all-BccGxJ0c.js";import"./dar-logo-B4Huuyod.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const L={class:"py-12"},P={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},R={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},$={class:"w-full m-5 text-right"},z={class:"text-center"},E={key:1,span:""},M={class:"m-2"},q={style:{color:"gray"}},G={class:"text-center"},nt={__name:"Index",props:{units:Object,unit_pstos:Object,pstos:Object},setup(i){const h=u(!1),x=u(null);u({});const v=u({}),_=u("");N(()=>_.value,o=>{k.get("/unit-pstos",{search:o},{preserveState:!0})});const b=async(o,e,g)=>{h.value=o,x.value=e,v.value=g},w=async()=>{v.value={}};let s=1;const V=async o=>{k.visit("/unit-pstos?page="+o,{preserveState:!0}),s=o};return(o,e)=>{const g=d("v-text-field"),C=d("v-col"),U=d("v-row"),S=d("v-btn"),A=d("v-pagination"),I=d("v-table"),O=d("v-card");return c(),D(j,{title:"Dashboard"},{header:l(()=>e[3]||(e[3]=[t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Unit PSTOs ",-1)])),default:l(()=>[t("div",L,[t("div",P,[t("div",R,[a(U,{style:{"margin-bottom":"-30px"}},{default:l(()=>[a(C,{cols:"6"},{default:l(()=>[t("div",$,[a(g,{loading:o.loading,"append-inner-icon":"mdi-magnify",density:"compact",label:"Search",variant:"solo","hide-details":"","single-line":"",modelValue:_.value,"onUpdate:modelValue":e[0]||(e[0]=n=>_.value=n),"onClick:appendInner":o.onClick},null,8,["loading","modelValue","onClick:appendInner"])])]),_:1})]),_:1}),a(O,{class:"m-3"},{default:l(()=>[a(I,null,{bottom:l(()=>[t("div",M,[t("span",q,[f(" Showing "+r(i.units.from)+" to "+r(i.units.to)+" out of ",1),t("b",null,r(i.units.total)+" records",1),f(" "+r(m(s)),1)]),t("div",G,[a(A,{modelValue:m(s),"onUpdate:modelValue":e[1]||(e[1]=n=>F(s)?s.value=n:s=n),length:i.units.last_page,circle:"",onClick:e[2]||(e[2]=n=>V(m(s)))},null,8,["modelValue","length"])])])]),default:l(()=>[e[5]||(e[5]=t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",{class:"text-left"}," Unit "),t("th",{class:"text-center"}," Actions ")])],-1)),t("tbody",null,[(c(!0),p(y,null,T(i.units.data,(n,H)=>(c(),p("tr",{key:n.id,class:"hover:bg-gray-200"},[n?(c(),p(y,{key:0},[t("td",null,r(n.id),1),t("td",null,r(n.unit_name),1),t("td",z,[a(S,{onClick:J=>b(!0,"Assign",n),size:"small","prepend-icon":"mdi-update",color:"primary"},{default:l(()=>e[4]||(e[4]=[f(" Assign ")])),_:2},1032,["onClick"])])],64)):(c(),p("td",E," No data at the moment"))]))),128))])]),_:1})]),_:1})])])]),a(B,{value:h.value,unit:v.value,unit_pstos:i.unit_pstos,pstos:i.pstos,action:x.value,page_number:m(s),onInput:b,onReloadUnits:w},null,8,["value","unit","unit_pstos","pstos","action","page_number"])]),_:1})}}};export{nt as default};
