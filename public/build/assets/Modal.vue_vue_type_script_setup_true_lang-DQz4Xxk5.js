import{z as q,i as p,x as O,d as g,j as a,o as $,c as z,w as n,b as o,a as b,t as A,g as V,N as x}from"./app-DYbgwT7h.js";const M={class:"text-h5"},T={style:{"text-align":"end"}},F=q({__name:"Modal",props:{division:{type:Object,default:null},value:{type:Boolean,default:!1},action:{type:String}},emits:["reloadDivisions","input"],setup(y,{emit:k}){const i=k,d=y;p(()=>d.division,l=>{l&&(e.id=l.id,e.name=l.name,e.short_name=l.short_name,e.slug=l.slug)});const e=O({id:null,name:null,short_name:null,slug:null}),r=g(!1);p(()=>d.value,l=>{r.value=l});const c=g("");p(()=>d.action,l=>{c.value=l});const w=async()=>{c.value=="Add"?x.post("/divisions/add",e):c.value=="Update"&&x.post("/divisions/update",e),i("input",!1),i("reloadDivisions"),e.id="",e.name="",e.short_name="",e.slug=""},D=l=>{i("input",l),i("reloadDivisions"),e.id="",e.name="",e.short_name="",e.slug=""};return(l,t)=>{const N=a("v-card-title"),u=a("v-text-field"),m=a("v-col"),_=a("v-row"),C=a("v-card-text"),U=a("v-spacer"),B=a("v-divider"),v=a("v-icon"),f=a("v-btn"),S=a("v-card-action"),h=a("v-card"),j=a("v-dialog");return $(),z(j,{modelValue:r.value,"onUpdate:modelValue":t[5]||(t[5]=s=>r.value=s),width:"600",scrollable:"",persistent:""},{default:n(()=>[o(h,null,{default:n(()=>[o(N,{class:"bg-indigo"},{default:n(()=>[b("span",M,A(d.action)+" Division",1)]),_:1}),o(C,null,{default:n(()=>[o(_,{style:{"margin-bottom":"-30px"}},{default:n(()=>[o(m,{cols:"12"},{default:n(()=>[o(u,{"prepend-icon":"mdi-account",label:"Name*",modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=s=>e.name=s),variant:"outlined"},null,8,["modelValue"])]),_:1})]),_:1}),o(_,{style:{"margin-bottom":"-30px"}},{default:n(()=>[o(m,{cols:"12"},{default:n(()=>[o(u,{"prepend-icon":"mdi-account",label:"Short Name*",modelValue:e.short_name,"onUpdate:modelValue":t[1]||(t[1]=s=>e.short_name=s),variant:"outlined",required:""},null,8,["modelValue"])]),_:1})]),_:1}),o(_,{style:{"margin-bottom":"-30px"}},{default:n(()=>[o(m,{cols:"12"},{default:n(()=>[o(u,{"prepend-icon":"mdi-account",label:"Order*",modelValue:e.slug,"onUpdate:modelValue":t[2]||(t[2]=s=>e.slug=s),variant:"outlined",type:"number",required:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(U),o(S,null,{default:n(()=>[o(B),b("div",T,[o(f,{class:"ma-2",color:"blue-grey-lighten-2",onClick:t[3]||(t[3]=s=>D(!1))},{default:n(()=>[o(v,{start:"",icon:"mdi-cancel"}),t[6]||(t[6]=V(" Cancel "))]),_:1}),o(f,{class:"ma-2",color:"green-darken-1",type:"button",onClick:t[4]||(t[4]=s=>w())},{default:n(()=>[t[7]||(t[7]=V(" Save ")),o(v,{end:"",icon:"mdi-check"})]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}});export{F as _};
