import{S as v}from"./SectionTitle-BpPw8nzs.js";import{o as f,e as x,b as c,w as n,r as o,a as s,i as _,z as g,C as b,q as $,c as w,s as m,E as u,D as y,n as k,f as B,G as C}from"./app-HJaQnsHa.js";const S={class:"md:grid md:grid-cols-3 md:gap-6"},E={class:"mt-5 md:mt-0 md:col-span-2"},W={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"},q={__name:"ActionSection",setup(e){return(a,t)=>(f(),x("div",S,[c(v,null,{title:n(()=>[o(a.$slots,"title")]),description:n(()=>[o(a.$slots,"description")]),_:3}),s("div",E,[s("div",W,[o(a.$slots,"content")])])]))}},z={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},D={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:a}){const t=e,i=a;_(()=>t.show,()=>{t.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const l=()=>{t.closeable&&i("close")},d=r=>{r.key==="Escape"&&t.show&&l()};g(()=>document.addEventListener("keydown",d)),b(()=>{document.removeEventListener("keydown",d),document.body.style.overflow=null});const p=$(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[t.maxWidth]);return(r,h)=>(f(),w(C,{to:"body"},[c(u,{"leave-active-class":"duration-200"},{default:n(()=>[m(s("div",z,[c(u,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:n(()=>[m(s("div",{class:"fixed inset-0 transform transition-all",onClick:l},h[0]||(h[0]=[s("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1)]),512),[[y,e.show]])]),_:1}),c(u,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:n(()=>[m(s("div",{class:k(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",p.value])},[e.show?o(r.$slots,"default",{key:0}):B("",!0)],2),[[y,e.show]])]),_:3})],512),[[y,e.show]])]),_:3})]))}},M={class:"px-6 py-4"},N={class:"text-lg font-medium text-gray-900"},T={class:"mt-4 text-sm text-gray-600"},V={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-end"},A={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:a}){const t=a,i=()=>{t("close")};return(l,d)=>(f(),w(D,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:i},{default:n(()=>[s("div",M,[s("div",N,[o(l.$slots,"title")]),s("div",T,[o(l.$slots,"content")])]),s("div",V,[o(l.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{D as _,q as a,A as b};
