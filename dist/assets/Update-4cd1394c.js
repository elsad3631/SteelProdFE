import{g as h}from"./assets-2a66e18f.js";import{j as w,u as _,ao as y,r as p,o as k,an as g,_ as C,n as m,p as o,am as D,W as a,a0 as n,x as b,O as S,F as V,m as c}from"./index-ac5572e4.js";import{e as v,a as U}from"./markings-88375b0b.js";import{S as u}from"./sweetalert2-e92a9e07.js";const B=w({name:"module-xml-details",components:{},setup(){const e=_(),t=y(),d=e.params.id;let s=p(!0);const i=p(v);async function f(){const r=await U(d);i.value=r||v,s.value=!1}return k(()=>{s.value=!0,f()}),{getAssetPath:h,item:i,saveChanges:()=>{s.value=!0,g.post("Marking/Update",i.value).then(()=>{s.value=!1,u.fire({text:"Operazione completata!",icon:"success",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})}).catch(({response:r})=>{console.log(r),s.value=!1,u.fire({text:"Attenzione, si è verificato un errore.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})})},deleteItem:()=>{s.value=!0,g.post(`Marking/Delete?id=${d}`,{}).then(()=>{setTimeout(()=>{s.value=!1,u.fire({text:"Operazione completata!",icon:"success",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})},1e3),t.push({name:"markings-list"})}).catch(({response:r})=>{console.log(r)})},loading:s}}}),M=o("div",{class:"card mb-5 mb-xl-10"},[o("div",{class:"card-header border-0"},[o("div",{class:"card-title m-0"},[o("h3",{class:"fw-bold m-0"},"Dettagli marcatura")])])],-1),A={class:"collapse show"},F={class:"card-body border-top p-9"},I={class:"row mb-6"},L=o("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Nome materiale",-1),T={class:"col-lg-8 fv-row"},N={class:"row mb-6"},$=o("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"IdFac",-1),q={class:"col-lg-8 fv-row"},x={class:"row mb-6"},z=o("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"DX",-1),O={class:"col-lg-8 fv-row"},R={class:"row mb-6"},j=o("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"DY",-1),E={class:"col-lg-8 fv-row"},X={class:"row mb-6"},Y=o("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Lung",-1),P={class:"col-lg-8 fv-row"},W={class:"row mb-6"},G=o("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Larg",-1),H={class:"col-lg-8 fv-row"},J={class:"row mb-6"},K=o("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Str",-1),Q={class:"col-lg-8 fv-row"},Z=o("div",{class:"row mb-6"},[o("label",{class:"col-lg-12 col-form-label fw-semobold fs-6"},"Range")],-1),oo={class:"row mb-6"},eo={class:"col-lg-6 fv-row"},to={class:"col-lg-6 fv-row"},lo={class:"card-footer d-flex justify-content-end py-6 px-9"},so=["data-kt-indicator"],ao={key:0,class:"indicator-label"},no={key:1,class:"indicator-progress"},ro=o("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1);function io(e,t,d,s,i,f){return c(),m(V,null,[M,o("div",A,[o("form",{class:"form",novalidate:"",onSubmit:t[10]||(t[10]=D(l=>e.saveChanges(),["prevent"]))},[o("div",F,[o("div",I,[L,o("div",T,[a(o("input",{required:"",type:"text",class:"form-control form-control-lg",placeholder:"Nome","onUpdate:modelValue":t[0]||(t[0]=l=>e.item.MaterialName=l)},null,512),[[n,e.item.MaterialName]])])]),o("div",N,[$,o("div",q,[a(o("input",{required:"",type:"text",class:"form-control form-control-lg",placeholder:"IdFac","onUpdate:modelValue":t[1]||(t[1]=l=>e.item.IdFac=l)},null,512),[[n,e.item.IdFac]])])]),o("div",x,[z,o("div",O,[a(o("input",{type:"text",class:"form-control form-control-lg",placeholder:"DX","onUpdate:modelValue":t[2]||(t[2]=l=>e.item.Dx=l)},null,512),[[n,e.item.Dx]])])]),o("div",R,[j,o("div",E,[a(o("input",{type:"text",class:"form-control form-control-lg",placeholder:"DY","onUpdate:modelValue":t[3]||(t[3]=l=>e.item.Dy=l)},null,512),[[n,e.item.Dy]])])]),o("div",X,[Y,o("div",P,[a(o("input",{type:"text",class:"form-control form-control-lg",placeholder:"Lung","onUpdate:modelValue":t[4]||(t[4]=l=>e.item.Lung=l)},null,512),[[n,e.item.Lung]])])]),o("div",W,[G,o("div",H,[a(o("input",{type:"text",class:"form-control form-control-lg",placeholder:"Larg","onUpdate:modelValue":t[5]||(t[5]=l=>e.item.Larg=l)},null,512),[[n,e.item.Larg]])])]),o("div",J,[K,o("div",Q,[a(o("input",{type:"text",class:"form-control form-control-lg",placeholder:"Str","onUpdate:modelValue":t[6]||(t[6]=l=>e.item.Str=l)},null,512),[[n,e.item.Str]])])]),Z,o("div",oo,[o("div",eo,[a(o("input",{type:"text",class:"form-control form-control-lg",placeholder:"Da","onUpdate:modelValue":t[7]||(t[7]=l=>e.item.From=l)},null,512),[[n,e.item.From]])]),o("div",to,[a(o("input",{type:"text",class:"form-control form-control-lg",placeholder:"A","onUpdate:modelValue":t[8]||(t[8]=l=>e.item.To=l)},null,512),[[n,e.item.To]])])])]),o("div",lo,[o("button",{type:"button",onClick:t[9]||(t[9]=l=>e.deleteItem()),class:"btn btn-danger btn-active-light-primary me-2"}," Elimina "),o("button",{"data-kt-indicator":e.loading?"on":null,class:"btn btn-lg btn-primary",type:"submit"},[e.loading?b("",!0):(c(),m("span",ao," Salva modifiche ")),e.loading?(c(),m("span",no,[S(" Attendere... "),ro])):b("",!0)],8,so)])],32)])],64)}const go=C(B,[["render",io]]);export{go as default};
