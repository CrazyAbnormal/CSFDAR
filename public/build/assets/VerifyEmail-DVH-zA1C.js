import{T as p,p as y,o as d,e as l,b as t,u as o,w as i,F as v,Z as x,a as s,f as h,n as b,g as r,m as u,l as _}from"./app-DYbgwT7h.js";import{A as w}from"./AuthenticationCard-f4LlYLXT.js";import{_ as k}from"./AuthenticationCardLogo-CGRG7eeE.js";import{_ as V}from"./PrimaryButton-DI5CSy17.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./dost-logo-B4Huuyod.js";const E={class:"text-center"},A={key:0,class:"mb-4 font-medium text-sm text-green-600"},C={class:"mt-4 flex items-center justify-between"},j={__name:"VerifyEmail",props:{status:String},setup(f){const m=f,n=p({}),c=()=>{n.post(route("verification.send"))},g=y(()=>m.status==="verification-link-sent");return(a,e)=>(d(),l(v,null,[t(o(x),{title:"Email Verification"}),t(w,{id:"AuthenticationCard"},{default:i(()=>[s("div",E,[t(k)]),e[3]||(e[3]=s("h1",{class:"text-center"},"VERIFY EMAIL",-1)),e[4]||(e[4]=s("div",{class:"mb-4 text-sm text-gray-600"}," Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1)),g.value?(d(),l("div",A," A new verification link has been sent to the email address you provided in your profile settings. ")):h("",!0),s("form",{onSubmit:_(c,["prevent"])},[s("div",C,[t(V,{class:b({"opacity-25":o(n).processing}),disabled:o(n).processing},{default:i(()=>e[0]||(e[0]=[r(" Resend Verification Email ")])),_:1},8,["class","disabled"]),s("div",null,[t(o(u),{href:a.route("profile.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:i(()=>e[1]||(e[1]=[r(" Edit Profile")])),_:1},8,["href"]),t(o(u),{href:a.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ms-2"},{default:i(()=>e[2]||(e[2]=[r(" Log Out ")])),_:1},8,["href"])])])],32)]),_:1})],64))}};export{j as default};
