import{g as z}from"./assets-1d85a7f2.js";import{D}from"./Dropdown3-f6579cd1.js";import{P as M,a as q,C as R,I as U,E,L,b as P,S as $,N as G}from"./Statement-d05381a2.js";import{m as T,u as F,H as Q,r as d,o as x,ac as O,av as S,_ as j,w as c,x as e,aw as H,a0 as m,a6 as v,a5 as _,F as w,y as A,A as B,L as J,q as u,z as N}from"./index-f4707fd9.js";import{e as k,a as K}from"./goodsReceipt-fd538825.js";import{g as W}from"./accessories-6bb592d5.js";import{g as X}from"./materials-f54a9f5b.js";import{g as Y}from"./profiles-7a8cc4d2.js";import{g as Z}from"./suppliers-19452d9f.js";import{S as p}from"./sweetalert2-1d8e21d8.js";import"./dom-2bc3e434.js";import"./index.esm-214eccd4.js";import"./KTDataTable-b879a43b.js";const ee=T({name:"good-receipt-details",components:{PaymentRecords:M,PaymentMethods:q,CreditBalance:R,Invoices:U,Events:E,Logs:L,Earnings:P,Statement:$,Dropdown3:D,NewCardModal:G},setup(){const t=F(),s=Q(),g=t.params.id;let n=d(!0);const a=d(k);let b=d([]),o=d([]),y=d([]),C=d([]),f=d([]),h=d(0);async function V(){C.value=await Z("");const l=await K(g);a.value=l||k,h.value=a.value.typeId,await I(a.value.typeId,null),n.value=!1}x(()=>{n.value=!0,V()}),O(h,async(l,i)=>{a.value.typeId=l,f.value=[],await I(l,i)});async function I(l,i){l==0&&i!=0?(b.value=await W(""),f.value=b.value.map(r=>({id:r.id,name:r.name}))):l==1&&i!=1?(y.value=await Y(""),f.value=y.value.map(r=>({id:r.id,name:r.name}))):l==2&&i!=2&&(o.value=await X(""),f.value=o.value.map(r=>({id:r.id,name:r.name})))}return{getAssetPath:z,item:a,saveChanges:()=>{var l;if(n.value=!0,a.value.supplierId===0){p.fire({text:"Attenzione, selezionare il fornitore.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}});return}if(a.value.goodId===0){p.fire({text:"Attenzione, selezionare il lotto.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}});return}a.value.goodName=((l=f.value.find(i=>i.id===a.value.goodId))==null?void 0:l.name)||"",S.post("GoodReceipt/Update",a.value).then(()=>{setTimeout(()=>{n.value=!1,p.fire({text:"Operazione completata!",icon:"success",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})},2e3)}).catch(({response:i})=>{console.log(i.data.message),n.value=!1,p.fire({text:"Attenzione, si è verificato un errore.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})})},GoodsList:f,typeId:h,Suppliers:C,deleteItem:()=>{n.value=!0,S.post(`GoodReceipt/Delete?id=${g}`,{}).then(()=>{setTimeout(()=>{n.value=!1,p.fire({text:"Operazione completata!",icon:"success",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})},1e3),s.push({name:"goods-receipt-list"})}).catch(({response:l})=>{console.log(l)})},loading:n}}}),oe=e("div",{class:"card mb-5 mb-xl-10"},[e("div",{class:"card-header border-0"},[e("div",{class:"card-title m-0"},[e("h3",{class:"fw-bold m-0"},"Dettagli")])])],-1),te={class:"collapse show"},se={class:"card-body border-top p-9"},le={class:"row mb-6"},ae=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Numero documento",-1),ne={class:"col-lg-8 fv-row"},ie={class:"row mb-6"},re=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Data",-1),de={class:"col-lg-8 fv-row"},ce={class:"row mb-6"},me=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Tipologia",-1),ue={class:"col-lg-8 fv-row"},fe=e("option",{value:"0"},"Accessorio",-1),pe=e("option",{value:"1"},"Profilo",-1),ve=e("option",{value:"2"},"Materiale",-1),ge=[fe,pe,ve],be={class:"row mb-6"},he=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Lotto",-1),_e={class:"col-lg-8 fv-row"},we=["value"],ye={class:"row mb-6"},Ce=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Quantità",-1),Ie={class:"col-lg-8 fv-row"},Se={class:"row mb-6"},Ae=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Fornitore",-1),Be={class:"col-lg-8 fv-row"},Ne=["value"],ke={class:"row mb-6"},Ve=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},[e("span",null,"Descrizione")],-1),ze={class:"col-lg-8 fv-row"},De={class:"card-footer d-flex justify-content-end py-6 px-9"},Me=["data-kt-indicator"],qe={key:0,class:"indicator-label"},Re={key:1,class:"indicator-progress"},Ue=e("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1);function Ee(t,s,g,n,a,b){return u(),c(w,null,[oe,e("div",te,[e("form",{class:"form",novalidate:"",onSubmit:s[8]||(s[8]=H(o=>t.saveChanges(),["prevent"]))},[e("div",se,[e("div",le,[ae,e("div",ne,[m(e("input",{type:"text",name:"DocumentNumber",class:"form-control form-control-lg",placeholder:"Nome","onUpdate:modelValue":s[0]||(s[0]=o=>t.item.documentNumber=o)},null,512),[[v,t.item.documentNumber]])])]),e("div",ie,[re,e("div",de,[m(e("input",{type:"date",name:"date",class:"form-control form-control-lg","onUpdate:modelValue":s[1]||(s[1]=o=>t.item.date=o)},null,512),[[v,t.item.date]])])]),e("div",ce,[me,e("div",ue,[m(e("select",{as:"select",class:"form-select form-select-lg fw-semobold","onUpdate:modelValue":s[2]||(s[2]=o=>t.typeId=o)},ge,512),[[_,t.typeId]])])]),e("div",be,[he,e("div",_e,[m(e("select",{as:"select",class:"form-select form-select-lg fw-semobold","onUpdate:modelValue":s[3]||(s[3]=o=>t.item.goodId=o)},[(u(!0),c(w,null,A(t.GoodsList,o=>(u(),c("option",{key:o.id,value:o.id},N(o.name),9,we))),128))],512),[[_,t.item.goodId]])])]),e("div",ye,[Ce,e("div",Ie,[m(e("input",{type:"number",name:"Quantity",class:"form-control form-control-lg",placeholder:"Quantità","onUpdate:modelValue":s[4]||(s[4]=o=>t.item.quantity=o)},null,512),[[v,t.item.quantity]])])]),e("div",Se,[Ae,e("div",Be,[m(e("select",{as:"select",name:"supplier",class:"form-select form-select-lg fw-semobold","onUpdate:modelValue":s[5]||(s[5]=o=>t.item.supplierId=o)},[(u(!0),c(w,null,A(t.Suppliers,o=>(u(),c("option",{key:o.id,value:o.id},N(o.name),9,Ne))),128))],512),[[_,t.item.supplierId]])])]),e("div",ke,[Ve,e("div",ze,[m(e("textarea",{name:"note",class:"form-control form-control-lg","onUpdate:modelValue":s[6]||(s[6]=o=>t.item.note=o)},null,512),[[v,t.item.note]])])])]),e("div",De,[e("button",{type:"button",onClick:s[7]||(s[7]=o=>t.deleteItem()),class:"btn btn-danger btn-active-light-primary me-2"}," Elimina "),e("button",{"data-kt-indicator":t.loading?"on":null,class:"btn btn-lg btn-primary",type:"submit"},[t.loading?B("",!0):(u(),c("span",qe," Salva modifiche ")),t.loading?(u(),c("span",Re,[J(" Attendere... "),Ue])):B("",!0)],8,Me)])],32)])],64)}const Ye=j(ee,[["render",Ee]]);export{Ye as default};
