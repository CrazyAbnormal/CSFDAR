import{T as _,o as i,e as n,b as t,u as a,w as d,F as b,Z as g,a as o,t as w,f as x,n as V,g as k,l as v}from"./app-DYbgwT7h.js";import{A as y}from"./AuthenticationCard-f4LlYLXT.js";import{_ as N}from"./AuthenticationCardLogo-CGRG7eeE.js";import{_ as $}from"./Checkbox-BDKnrSL6.js";import{_ as u,a as c}from"./TextInput--Th6sbyV.js";import{_ as p}from"./InputLabel-BlvmNcU1.js";import{_ as C}from"./PrimaryButton-DI5CSy17.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./dost-logo-B4Huuyod.js";const h={class:"text-center"},B={key:0,class:"mb-4 font-medium text-sm text-green-600"},S={class:"mt-4"},A={class:"block mt-4"},F={class:"flex items-center"},L={class:"flex items-center justify-end mt-4"},D={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(m){const e=_({email:"",password:"",remember:!1}),f=()=>{e.transform(l=>({...l,remember:e.remember?"on":""})).post("/login",{onFinish:()=>e.reset("password")})};return(l,s)=>(i(),n(b,null,[t(a(g),{title:"Log in"}),t(y,{id:"AuthenticationCard"},{default:d(()=>[o("div",h,[t(N)]),s[5]||(s[5]=o("h1",{class:"text-center"},"SIGNIN",-1)),m.status?(i(),n("div",B,w(m.status),1)):x("",!0),o("form",{onSubmit:v(f,["prevent"])},[o("div",null,[t(p,{for:"email",value:"Email"}),t(u,{id:"email",modelValue:a(e).email,"onUpdate:modelValue":s[0]||(s[0]=r=>a(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(c,{class:"mt-2",message:a(e).errors.email},null,8,["message"])]),o("div",S,[t(p,{for:"password",value:"Password"}),t(u,{id:"password",modelValue:a(e).password,"onUpdate:modelValue":s[1]||(s[1]=r=>a(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),t(c,{class:"mt-2",message:a(e).errors.password},null,8,["message"])]),o("div",A,[o("label",F,[t($,{checked:a(e).remember,"onUpdate:checked":s[2]||(s[2]=r=>a(e).remember=r),name:"remember"},null,8,["checked"]),s[3]||(s[3]=o("span",{class:"ms-2 text-sm text-gray-600"},"Remember me",-1))])]),o("div",L,[t(C,{class:V(["ms-4",{"opacity-25":a(e).processing}]),disabled:a(e).processing},{default:d(()=>s[4]||(s[4]=[k(" Log in ")])),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{D as default};
