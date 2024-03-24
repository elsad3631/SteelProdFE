import{g as w}from"./assets-ce4ccef5.js";import{D as _}from"./Dropdown3-cbc0a13c.js";import{P as C,a as q,C as V,I as T,E as U,L as A,b as P,S as N,N as S}from"./Statement-cfa8a3ff.js";import{m as z,u as k,H as B,r as b,o as E,at as g,_ as I,w as d,x as e,au as D,a0 as s,a6 as n,a5 as M,F as h,y as $,A as y,L as R,q as m,z as F}from"./index-93335d48.js";import{a as L}from"./suppliers-d1b63873.js";import{g as O}from"./paymentTypes-79f67519.js";import{S as f}from"./sweetalert2-d38ee055.js";import"./dom-8a591f7a.js";import"./index.esm-1ae408a5.js";import"./KTDataTable-88696261.js";const X={id:0,name:"",code:"",uniqueCode:"",address:"",zipCode:"",city:"",country:"",province:"",vatNumber:"",fiscalCode:"",contactPerson:"",phone:0,mobile:0,email:"",pec:"",fax:"",referenceAgent:"",paymentTypeId:0,bankDetails:"",notes:"",paymentType:{id:0,name:""}},j=z({name:"supplier-details",components:{PaymentRecords:C,PaymentMethods:q,CreditBalance:V,Invoices:T,Events:U,Logs:A,Earnings:P,Statement:N,Dropdown3:_,NewCardModal:S},setup(){const o=k(),t=B(),u=o.params.id;let a=b(!0);const r=b(X);let c=b([]);async function l(){c.value=await O("");const i=await L(u);i&&(r.value=i),a.value=!1}return E(()=>{a.value=!0,l()}),{getAssetPath:w,item:r,saveChanges:()=>{var v;a.value=!0;const i=(v=r.value)==null?void 0:v.paymentType.name;if((i?c.value.find(p=>p.name===i):void 0)===void 0){f.fire({text:"Attenzione, selezionare la modalità di pagamento.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}});return}g.post("Suppliers/Update",r.value).then(()=>{setTimeout(()=>{a.value=!1,f.fire({text:"Operazione completata!",icon:"success",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})},2e3)}).catch(({response:p})=>{console.log(p),a.value=!1,f.fire({text:"Attenzione, si è verificato un errore.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})})},PaymentTypes:c,deleteItem:()=>{a.value=!0,g.post(`Suppliers/Delete?id=${u}`,{}).then(()=>{setTimeout(()=>{a.value=!1,f.fire({text:"Operazione completata!",icon:"success",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})},1e3),t.push({name:"suppliers-list"})}).catch(({response:i})=>{console.log(i)})},loading:a}}}),H=e("div",{class:"card mb-5 mb-xl-10"},[e("div",{class:"card-header border-0"},[e("div",{class:"card-title m-0"},[e("h3",{class:"fw-bold m-0"},"Dettagli")])])],-1),G={class:"collapse show"},J={class:"card-body border-top p-9"},K={class:"row mb-6"},Q=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Nome",-1),W={class:"col-lg-8 fv-row"},Y={class:"row mb-6"},Z=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Codice",-1),x={class:"col-lg-8 fv-row"},ee={class:"row mb-6"},oe=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Codice univoco",-1),le={class:"col-lg-8 fv-row"},te={class:"row mb-6"},se=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Indirizzo",-1),ne={class:"col-lg-8 fv-row"},ae={class:"row mb-6"},ie=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Codice postale",-1),re={class:"col-lg-8 fv-row"},de={class:"row mb-6"},me=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Città",-1),ce={class:"col-lg-8 fv-row"},fe={class:"row mb-6"},ue=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Nazione",-1),pe={class:"col-lg-8 fv-row"},be={class:"row mb-6"},ve=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Provincia",-1),ge={class:"col-lg-8 fv-row"},he={class:"row mb-6"},ye=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"P. IVA",-1),we={class:"col-lg-8 fv-row"},_e={class:"row mb-6"},Ce=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Codice fiscale",-1),qe={class:"col-lg-8 fv-row"},Ve={class:"row mb-6"},Te=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Referente",-1),Ue={class:"col-lg-8 fv-row"},Ae={class:"row mb-6"},Pe=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Telefono",-1),Ne={class:"col-lg-8 fv-row"},Se={class:"row mb-6"},ze=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Cellulare",-1),ke={class:"col-lg-8 fv-row"},Be={class:"row mb-6"},Ee=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Email",-1),Ie={class:"col-lg-8 fv-row"},De={class:"row mb-6"},Me=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"PEC",-1),$e={class:"col-lg-8 fv-row"},Re={class:"row mb-6"},Fe=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"FAX",-1),Le={class:"col-lg-8 fv-row"},Oe={class:"row mb-6"},Xe=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Agente di riferimento",-1),je={class:"col-lg-8 fv-row"},He={class:"row mb-6"},Ge=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Metodo di pagamento",-1),Je={class:"col-lg-8 fv-row"},Ke=["value"],Qe={class:"row mb-6"},We=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Coordinate bancarie",-1),Ye={class:"col-lg-8 fv-row"},Ze={class:"row mb-6"},xe=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Note",-1),eo={class:"col-lg-8 fv-row"},oo={class:"row mb-6"},lo=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Note",-1),to={class:"col-lg-8 fv-row"},so={class:"card-footer d-flex justify-content-end py-6 px-9"},no=["data-kt-indicator"],ao={key:0,class:"indicator-label"},io={key:1,class:"indicator-progress"},ro=e("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1);function mo(o,t,u,a,r,c){return m(),d(h,null,[H,e("div",G,[e("form",{class:"form",novalidate:"",onSubmit:t[22]||(t[22]=D(l=>o.saveChanges(),["prevent"]))},[e("div",J,[e("div",K,[Q,e("div",W,[s(e("input",{type:"text",name:"name",class:"form-control form-control-lg",placeholder:"Nome","onUpdate:modelValue":t[0]||(t[0]=l=>o.item.name=l)},null,512),[[n,o.item.name]])])]),e("div",Y,[Z,e("div",x,[s(e("input",{type:"text",name:"code",class:"form-control form-control-lg",placeholder:"Codice","onUpdate:modelValue":t[1]||(t[1]=l=>o.item.code=l)},null,512),[[n,o.item.code]])])]),e("div",ee,[oe,e("div",le,[s(e("input",{type:"text",name:"uniqueCode",class:"form-control form-control-lg",placeholder:"Codice univoco","onUpdate:modelValue":t[2]||(t[2]=l=>o.item.uniqueCode=l)},null,512),[[n,o.item.uniqueCode]])])]),e("div",te,[se,e("div",ne,[s(e("input",{type:"text",name:"address",class:"form-control form-control-lg",placeholder:"Indirizzo","onUpdate:modelValue":t[3]||(t[3]=l=>o.item.address=l)},null,512),[[n,o.item.address]])])]),e("div",ae,[ie,e("div",re,[s(e("input",{type:"text",name:"zipCode",class:"form-control form-control-lg",placeholder:"Codice postale","onUpdate:modelValue":t[4]||(t[4]=l=>o.item.zipCode=l)},null,512),[[n,o.item.zipCode]])])]),e("div",de,[me,e("div",ce,[s(e("input",{type:"text",name:"city",class:"form-control form-control-lg",placeholder:"Città","onUpdate:modelValue":t[5]||(t[5]=l=>o.item.city=l)},null,512),[[n,o.item.city]])])]),e("div",fe,[ue,e("div",pe,[s(e("input",{type:"text",name:"country",class:"form-control form-control-lg",placeholder:"Nazione","onUpdate:modelValue":t[6]||(t[6]=l=>o.item.country=l)},null,512),[[n,o.item.country]])])]),e("div",be,[ve,e("div",ge,[s(e("input",{type:"text",name:"province",class:"form-control form-control-lg",placeholder:"Provincia","onUpdate:modelValue":t[7]||(t[7]=l=>o.item.province=l)},null,512),[[n,o.item.province]])])]),e("div",he,[ye,e("div",we,[s(e("input",{type:"text",name:"vatNumber",class:"form-control form-control-lg",placeholder:"P. IVA","onUpdate:modelValue":t[8]||(t[8]=l=>o.item.vatNumber=l)},null,512),[[n,o.item.vatNumber]])])]),e("div",_e,[Ce,e("div",qe,[s(e("input",{type:"text",name:"fiscalCode",class:"form-control form-control-lg",placeholder:"Codice fiscale","onUpdate:modelValue":t[9]||(t[9]=l=>o.item.fiscalCode=l)},null,512),[[n,o.item.fiscalCode]])])]),e("div",Ve,[Te,e("div",Ue,[s(e("input",{type:"text",name:"contactPerson",class:"form-control form-control-lg",placeholder:"Referente","onUpdate:modelValue":t[10]||(t[10]=l=>o.item.contactPerson=l)},null,512),[[n,o.item.contactPerson]])])]),e("div",Ae,[Pe,e("div",Ne,[s(e("input",{type:"number",name:"phone",class:"form-control form-control-lg",placeholder:"Telefono","onUpdate:modelValue":t[11]||(t[11]=l=>o.item.phone=l)},null,512),[[n,o.item.phone]])])]),e("div",Se,[ze,e("div",ke,[s(e("input",{type:"number",name:"mobile",class:"form-control form-control-lg",placeholder:"Cellulare","onUpdate:modelValue":t[12]||(t[12]=l=>o.item.mobile=l)},null,512),[[n,o.item.mobile]])])]),e("div",Be,[Ee,e("div",Ie,[s(e("input",{type:"email",name:"email",class:"form-control form-control-lg",placeholder:"Email","onUpdate:modelValue":t[13]||(t[13]=l=>o.item.email=l)},null,512),[[n,o.item.email]])])]),e("div",De,[Me,e("div",$e,[s(e("input",{type:"text",name:"pec",class:"form-control form-control-lg",placeholder:"PEC","onUpdate:modelValue":t[14]||(t[14]=l=>o.item.pec=l)},null,512),[[n,o.item.pec]])])]),e("div",Re,[Fe,e("div",Le,[s(e("input",{type:"text",name:"fax",class:"form-control form-control-lg",placeholder:"FAX","onUpdate:modelValue":t[15]||(t[15]=l=>o.item.fax=l)},null,512),[[n,o.item.fax]])])]),e("div",Oe,[Xe,e("div",je,[s(e("input",{type:"text",name:"referenceAgent",class:"form-control form-control-lg",placeholder:"Agente di riferimento","onUpdate:modelValue":t[16]||(t[16]=l=>o.item.referenceAgent=l)},null,512),[[n,o.item.referenceAgent]])])]),e("div",He,[Ge,e("div",Je,[s(e("select",{as:"select",name:"paymentType",class:"form-select form-select-lg fw-semobold","onUpdate:modelValue":t[17]||(t[17]=l=>o.item.paymentType.name=l)},[(m(!0),d(h,null,$(o.PaymentTypes,l=>(m(),d("option",{key:l.id,value:l.name},F(l.name),9,Ke))),128))],512),[[M,o.item.paymentType.name]])])]),e("div",Qe,[We,e("div",Ye,[s(e("input",{type:"text",name:"bankDetails",class:"form-control form-control-lg",placeholder:"Coordinate bancarie","onUpdate:modelValue":t[18]||(t[18]=l=>o.item.bankDetails=l)},null,512),[[n,o.item.bankDetails]])])]),e("div",Ze,[xe,e("div",eo,[s(e("input",{type:"text",name:"notes",class:"form-control form-control-lg",placeholder:"Note","onUpdate:modelValue":t[19]||(t[19]=l=>o.item.notes=l)},null,512),[[n,o.item.notes]])])]),e("div",oo,[lo,e("div",to,[s(e("input",{type:"text",name:"notes",class:"form-control form-control-lg",placeholder:"Note","onUpdate:modelValue":t[20]||(t[20]=l=>o.item.notes=l)},null,512),[[n,o.item.notes]])])])]),e("div",so,[e("button",{type:"button",onClick:t[21]||(t[21]=l=>o.deleteItem()),class:"btn btn-danger btn-active-light-primary me-2"}," Elimina "),e("button",{"data-kt-indicator":o.loading?"on":null,class:"btn btn-lg btn-primary",type:"submit"},[o.loading?y("",!0):(m(),d("span",ao," Salva modifiche ")),o.loading?(m(),d("span",io,[R(" Attendere... "),ro])):y("",!0)],8,no)])],32)])],64)}const Vo=I(j,[["render",mo]]);export{Vo as default};