import{A as $,i as d,y as A,d as f,j as l,o as b,c as g,w as s,b as o,a as r,t as F,u as M,f as q,g as y,l as V}from"./app-HJaQnsHa.js";import{s as z}from"./vue-multiselect.css_vue_type_style_index_0_src_true_lang-B0IMtBhF.js";const E={class:"text-h5"},G={style:{"text-align":"end"}},J=$({__name:"Modal",props:{unit:{type:Object,default:null},unit_pstos:{type:Object,default:null},pstos:{type:Object,default:null},value:{type:Boolean,default:!1},action:{type:String},page_number:{type:Number}},emits:["reloadUnitPSTOs","input"],setup(c,{emit:S}){const u=S,i=c;d(()=>i.unit,n=>{n&&(e.unit_id=n.id,e.unit_name=n.unit_name,V.get("/unit-pstos?page="+i.page_number,{form:e},{preserveState:!0}))}),d(()=>i.unit_pstos,n=>{n&&(e.pstos=n.data)});const e=A({unit_id:null,unit_name:null,pstos:null}),p=f(!1);d(()=>i.value,n=>{p.value=n});const O=f("");d(()=>i.action,n=>{O.value=n}),d(()=>e.selected_service,n=>{e.selected_unit=null});const k=async()=>{V.post("/unit-pstos/assign",e),u("input",!1),u("reloadUnitPSTOs"),e.id="",e.pstos=null},x=n=>{u("input",n),u("reloadUnitPSTOs"),e.id="",e.pstos=null};return(n,t)=>{const T=l("v-card-title"),U=l("v-text-field"),m=l("v-col"),w=l("v-row"),C=l("v-card-body"),P=l("v-spacer"),N=l("v-divider"),_=l("v-icon"),v=l("v-btn"),j=l("v-card-action"),B=l("v-card"),D=l("v-dialog");return b(),g(D,{modelValue:p.value,"onUpdate:modelValue":t[4]||(t[4]=a=>p.value=a),width:"600",height:"800",scrollable:"",persistent:""},{default:s(()=>[o(B,null,{default:s(()=>[o(T,{class:"bg-indigo mb-5"},{default:s(()=>[r("span",E,F(i.action)+" Unit PSTO",1)]),_:1}),o(C,null,{default:s(()=>[o(w,null,{default:s(()=>[o(m,{cols:"11",class:"m-3",style:{"margin-bottom":"-20px"}},{default:s(()=>[o(U,{label:"Name*",modelValue:e.unit_name,"onUpdate:modelValue":t[0]||(t[0]=a=>e.unit_name=a),variant:"outlined"},null,8,["modelValue"])]),_:1}),c.unit_pstos.data?(b(),g(m,{key:0,class:"my-auto mr-5 ml-5"},{default:s(()=>[t[5]||(t[5]=r("label",null,"PSTOs",-1)),o(M(z),{modelValue:e.pstos,"onUpdate:modelValue":t[1]||(t[1]=a=>e.pstos=a),options:c.pstos.data,multiple:!0,placeholder:"Select Unit PSTO",label:"psto_name","track-by":"psto_name"},null,8,["modelValue","options"])]),_:1})):q("",!0)]),_:1})]),_:1}),o(P),o(j,null,{default:s(()=>[o(N),r("div",G,[o(v,{class:"ma-2",color:"blue-grey-lighten-2",onClick:t[2]||(t[2]=a=>x(!1))},{default:s(()=>[o(_,{start:"",icon:"mdi-cancel"}),t[6]||(t[6]=y(" Cancel "))]),_:1}),o(v,{class:"ma-2",color:"green-darken-1",type:"button",onClick:t[3]||(t[3]=a=>k())},{default:s(()=>[t[7]||(t[7]=y(" Save ")),o(_,{end:"",icon:"mdi-check"})]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}});export{J as _};
