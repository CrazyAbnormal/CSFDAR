import{_ as O}from"./dar-logo-B4Huuyod.js";import{j as o,o as r,e as b,b as n,u as f,a,g as i,t as u,f as g,w as t,F as p,Z as S,c as x,h as j,p as v,l as C}from"./app-HJaQnsHa.js";import{A as B}from"./aos--TLeZiu-.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";const V={"data-aos":"fade-down","data-aos-duration":"500","data-aos-delay":"500",style:{"backdrop-filter":"blur(2px)"},class:"bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"},D={class:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"},F={href:"/",class:"flex items-center space-x-3 rtl:space-x-reverse"},z={class:"self-center text-2xl font-semibold whitespace-nowrap"},A={key:0},L={class:"w-full border bg-blue"},P={style:{height:"150px"},class:"card mx-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"},$={class:"mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"},E={__name:"PSTOs",props:{region_id:Number,region:Object,service_id:Number,unit_id:Number,unit:Object,sub_unit_id:Number,sub_unit:Object,pstos:Object},setup(s){B.init();const y=async(m,e,d,c,l)=>{C.get("/services/csf?region_id="+m+"&service_id="+e+"&unit_id="+d+"&sub_unit_id="+c+"&psto_id="+l)},k=async m=>{window.history.back()};return(m,e)=>{const d=o("v-card-title"),c=o("v-col"),l=o("v-row"),w=o("v-icon"),h=o("v-btn"),N=o("v-container");return r(),b(p,null,[n(f(S),{title:"Service Units"}),a("nav",V,[a("div",D,[a("a",F,[e[3]||(e[3]=a("img",{src:O,class:"h-8",alt:"DAR Logo"},null,-1)),a("span",z,[e[1]||(e[1]=i("DAR ")),s.region?(r(),b("span",A,u(s.region.code),1)):g("",!0),e[2]||(e[2]=i(" Customer Relation Management System"))])])])]),n(N,{"fill-height":""},{default:t(()=>[n(l,{class:"mx-15",style:{"margin-top":"100px"}},{default:t(()=>[n(c,null,{default:t(()=>[a("div",L,[s.sub_unit?(r(),x(d,{key:0,class:"text-center text-uppercase"},{default:t(()=>[i(u(s.sub_unit.sub_unit_name),1)]),_:1})):g("",!0),s.unit?(r(),x(d,{key:1,class:"text-center text-uppercase"},{default:t(()=>[i(u(s.unit.unit_name),1)]),_:1})):g("",!0)])]),_:1})]),_:1}),n(l,{class:"mx-15 mt-5",align:"center",justify:"center"},{default:t(()=>[(r(!0),b(p,null,j(s.pstos,_=>(r(),x(c,{cols:"12",sm:"4",md:"4",lg:"4"},{default:t(()=>[n(f(v),{onClick:I=>y(s.region_id,s.service_id,s.unit_id,s.sub_unit_id,_.id)},{default:t(()=>[a("div",P,[n(w,{color:"red",size:"x-large",class:"p-3"},{default:t(()=>e[4]||(e[4]=[i("mdi-map-marker-outline")])),_:1}),a("h5",$,u(_.psto_name),1)])]),_:2},1032,["onClick"])]),_:2},1024))),256))]),_:1}),n(l,null,{default:t(()=>[n(f(v),{onClick:e[0]||(e[0]=_=>k())},{default:t(()=>[n(h,{"prepend-icon":"mdi-arrow-left",style:{"margin-left":"120px"}},{default:t(()=>e[5]||(e[5]=[i("Back")])),_:1})]),_:1})]),_:1})]),_:1})],64)}}},q=T(E,[["__scopeId","data-v-89d640c0"]]);export{q as default};
