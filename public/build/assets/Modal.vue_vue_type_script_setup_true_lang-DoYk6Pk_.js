import{s as h}from"./vue-multiselect.css_vue_type_style_index_0_src_true_lang-C5TQkDqB.js";import j from"./ByUnitMonthly-4Csxawkn.js";import{P as A}from"./index-DajnbktX.js";import{z as M,d as g,i as U,x as z,j as o,o as y,e as D,b as t,w as a,a as r,g as p,t as F,u as T,c as $,f as q,F as E}from"./app-DYbgwT7h.js";const I={style:{"text-align":"end"}},L=M({__name:"Modal",props:{form:{type:Object,default:null},assignatorees:{type:Object,default:null},user:{type:Object,default:null},value:{type:Boolean,default:!1},data:{type:Boolean},generated:{type:Boolean}},emits:["input"],setup(l,{emit:b}){const c=b,m=l,i=g(!1);U(()=>m.value,n=>{i.value=n});const d=z({prepared_by:m.user,noted_by:{}}),w=n=>{c("input",n)},x=g(!1),k=async()=>{x.value=!0,(await new A).print(document.querySelector(".print-id"),[` 
          @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;800&family=Roboto:wght@100;300;400;500;700;900&display=swap');
          * {
              font-family: 'Time New Roman'
          }
          .new-page {
              page-break-before: always;
          }
          .th-color{
              background-color: #8fd1e8;
          }
          .text-center{
            text-align: center;
          }
          .text-right{
            text-align:end
          }
          table {
            border-collapse: collapse;
            width: 100%; /* Optional: Set a width for the table */
          }

          tr, th, td {
            border: 1px solid rgb(145, 139, 139); /* Optional: Add a border for better visibility */
            padding: 3px; /* Optional: Add padding for better spacing */
          }
          .page-break {
            page-break-before: always; /* or page-break-after: always; */
          }

        `]),c("input",!1)};return(n,e)=>{const B=o("v-card-title"),V=o("v-text-field"),u=o("v-col"),f=o("v-row"),C=o("v-card-text"),N=o("v-spacer"),O=o("v-divider"),_=o("v-icon"),v=o("v-btn"),P=o("v-card-action"),R=o("v-card"),S=o("v-dialog");return y(),D(E,null,[t(S,{modelValue:i.value,"onUpdate:modelValue":e[3]||(e[3]=s=>i.value=s),width:"800",height:"800",scrollable:"",persistent:""},{default:a(()=>[t(R,null,{default:a(()=>[t(B,{class:"bg-indigo"},{default:a(()=>e[4]||(e[4]=[r("span",{class:"text-h5"},"Select Assignatoree",-1)])),_:1}),t(C,null,{default:a(()=>[t(f,{style:{"margin-bottom":"-30px"}},{default:a(()=>[t(u,null,{default:a(()=>[e[5]||(e[5]=r("label",null,"Prepared By:",-1)),t(V,{size:"small",variant:"text",readonly:""},{default:a(()=>[p(F(l.user.name),1)]),_:1})]),_:1})]),_:1}),t(f,{style:{"margin-top":"-50px"}},{default:a(()=>[t(u,null,{default:a(()=>[e[6]||(e[6]=r("label",null,"Noted By:",-1)),t(T(h),{modelValue:d.noted_by,"onUpdate:modelValue":e[0]||(e[0]=s=>d.noted_by=s),options:l.assignatorees,multiple:!1,placeholder:"Noted By:",label:"name","track-by":"name","allow-empty":!1,class:"ml-5"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1}),t(N),t(P,null,{default:a(()=>[t(O),r("div",I,[t(v,{class:"ma-2",color:"blue-grey-lighten-2",onClick:e[1]||(e[1]=s=>w(!1))},{default:a(()=>[t(_,{start:"",icon:"mdi-cancel"}),e[7]||(e[7]=p(" Cancel "))]),_:1}),t(v,{class:"ma-2",color:"green-darken-1",type:"button",onClick:e[2]||(e[2]=s=>k())},{default:a(()=>[e[8]||(e[8]=p(" Print Preview ")),t(_,{end:"",icon:"mdi-print"})]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l.form.csi_type=="By Month"?(y(),$(j,{key:0,form:l.form,data:l.data,form_assignatorees:d},null,8,["form","data","form_assignatorees"])):q("",!0)],64)}}});export{L as _};
