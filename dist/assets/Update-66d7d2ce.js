import{g as A}from"./assets-2a66e18f.js";import{D as U}from"./Dropdown3-467b18f6.js";import{K as P}from"./NewCardModal-563106ef.js";import{P as z,a as I,C as k,I as N,E as B,L as q,b as E,S}from"./Statement-2e550b54.js";import{j as Z,u as D,ao as M,r as u,o as $,an as T,_ as R,n as m,p as e,am as F,W as i,a0 as a,aj as h,F as y,q as C,x as O,O as j,m as c,w as _}from"./index-ac5572e4.js";import{a as L}from"./customers-087117ed.js";import{g as K}from"./customerTypes-6e894c59.js";import{g as W}from"./DeliveryTypes-4fbe9e42.js";import{g as G}from"./paymentTypes-391e1e9c.js";import{S as f}from"./sweetalert2-e92a9e07.js";import"./dom-668969a5.js";import"./index.esm-4ca12020.js";import"./KTDataTable-b34f43d4.js";const H=Z({name:"customer-details",components:{PaymentRecords:z,PaymentMethods:I,CreditBalance:k,Invoices:N,Events:B,Logs:q,Earnings:E,Statement:S,Dropdown3:U,NewCardModal:P},setup(){const t=D(),s=M(),b=t.params.id;let d=u(!0);const n=u({id:0,zipCode:"",address:"",city:"",country:"",province:"",administrativeOfficeAddress:"",administrativeOfficeZipCode:"",administrativeOfficeCity:"",administrativeOfficeCountry:"",administrativeOfficeProvince:"",operatingOfficeAddress:"",operatingOfficeZipCode:"",operatingOfficeCity:"",operatingOfficeCountry:"",operatingOfficeProvince:"",vatNumber:"",fiscalCode:"",contactPerson:"",phone:"",mobile:"",email:"",pec:"",uniqueCode:"",referenceAgent:"",paymentTypeId:0,paymentType:"",bankCoordinates:"",notes:"",fax:"",bank:"",deliveryTypeId:0,deliveryType:"",customerType:"",customerTypeId:0,code:"",name:""});let g=u([]),l=u([]),w=u([]);async function V(){var p,v,r;g.value=await K(""),l.value=await G(""),w.value=await W("");const o=await L(b);n.value={id:b,code:(o==null?void 0:o.code)||"",name:(o==null?void 0:o.name)||"",customerTypeId:(o==null?void 0:o.customerTypeId)||0,address:(o==null?void 0:o.address)||"",zipCode:(o==null?void 0:o.zipCode)||"",city:(o==null?void 0:o.city)||"",country:(o==null?void 0:o.country)||"",province:(o==null?void 0:o.province)||"",administrativeOfficeAddress:(o==null?void 0:o.administrativeOfficeAddress)||"",administrativeOfficeZipCode:(o==null?void 0:o.administrativeOfficeZipCode)||"",administrativeOfficeCity:(o==null?void 0:o.administrativeOfficeCity)||"",administrativeOfficeCountry:(o==null?void 0:o.administrativeOfficeCountry)||"",administrativeOfficeProvince:(o==null?void 0:o.administrativeOfficeProvince)||"",operatingOfficeAddress:(o==null?void 0:o.operatingOfficeAddress)||"",operatingOfficeZipCode:(o==null?void 0:o.operatingOfficeZipCode)||"",operatingOfficeCity:(o==null?void 0:o.operatingOfficeCity)||"",operatingOfficeCountry:(o==null?void 0:o.operatingOfficeCountry)||"",operatingOfficeProvince:(o==null?void 0:o.operatingOfficeProvince)||"",vatNumber:(o==null?void 0:o.vatNumber)||"",fiscalCode:(o==null?void 0:o.fiscalCode)||"",contactPerson:(o==null?void 0:o.contactPerson)||"",phone:(o==null?void 0:o.phone)||"",mobile:(o==null?void 0:o.mobile)||"",email:(o==null?void 0:o.email)||"",pec:(o==null?void 0:o.pec)||"",uniqueCode:(o==null?void 0:o.uniqueCode)||"",referenceAgent:(o==null?void 0:o.referenceAgent)||"",paymentTypeId:(o==null?void 0:o.paymentTypeId)||0,bankCoordinates:(o==null?void 0:o.bankCoordinates)||"",notes:(o==null?void 0:o.notes)||"",fax:(o==null?void 0:o.fax)||"",bank:(o==null?void 0:o.bank)||"",deliveryTypeId:(o==null?void 0:o.deliveryTypeId)||0,customerType:((p=o==null?void 0:o.customerType)==null?void 0:p.name)||"",deliveryType:((v=o==null?void 0:o.deliveryType)==null?void 0:v.name)||"",paymentType:((r=o==null?void 0:o.paymentType)==null?void 0:r.name)||""},console.log(o),d.value=!1}return $(()=>{d.value=!0,V()}),{getAssetPath:A,item:n,saveChanges:()=>{d.value=!0;const o=g.value.find(r=>r.name===n.value.customerType),p=l.value.find(r=>r.name===n.value.paymentType),v=w.value.find(r=>r.name===n.value.deliveryType);if(o===void 0){f.fire({text:"Attenzione, selezionare la tipologia di cliente.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}});return}if(p===void 0){f.fire({text:"Attenzione, selezionare la modalità di pagamento.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}});return}if(v===void 0){f.fire({text:"Attenzione, selezionare il metodo di consegna.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}});return}n.value.deliveryTypeId=v.id,n.value.paymentTypeId=p.id,n.value.customerTypeId=o.id,T.post("Customers/Update",n.value).then(()=>{setTimeout(()=>{d.value=!1,f.fire({text:"Operazione completata!",icon:"success",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})},2e3)}).catch(({response:r})=>{console.log(r),d.value=!1,f.fire({text:"Attenzione, si è verificato un errore.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})})},CustomerTypes:g,PaymentTypes:l,DeliveryTypes:w,deleteItem:()=>{d.value=!0,T.post(`Customers/Delete?id=${b}`,{}).then(()=>{setTimeout(()=>{d.value=!1,f.fire({text:"Operazione completata!",icon:"success",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})},1e3),s.push({name:"customers-list"})}).catch(({response:o})=>{console.log(o)})},loading:d}}}),J=e("div",{class:"card mb-5 mb-xl-10"},[e("div",{class:"card-header border-0"},[e("div",{class:"card-title m-0"},[e("h3",{class:"fw-bold m-0"},"Dettagli")])])],-1),Q={class:"collapse show"},X={class:"card-body border-top p-9"},Y={class:"row mb-6"},x=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Codice",-1),ee={class:"col-lg-8 fv-row"},oe={class:"row mb-6"},le=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Nome",-1),te={class:"col-lg-8 fv-row"},se={class:"row mb-6"},ie=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Tipologia cliente",-1),ae={class:"col-lg-8 fv-row"},ne=["value"],re={class:"row mb-6"},de=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Modalità di pagamento",-1),me={class:"col-lg-8 fv-row"},ce=["value"],fe={class:"row mb-6"},pe=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Modalità di consegna",-1),ve={class:"col-lg-8 fv-row"},ue=["value"],be={class:"row mb-6"},ge=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Indirizzo",-1),ye={class:"col-lg-8 fv-row"},we={class:"row mb-6"},he=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"CAP",-1),Ce={class:"col-lg-8 fv-row"},_e={class:"row mb-6"},Te=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Città",-1),Oe={class:"col-lg-8 fv-row"},Ve={class:"row mb-6"},Ae=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Nazione",-1),Ue={class:"col-lg-8 fv-row"},Pe={class:"row mb-6"},ze=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Provincia",-1),Ie={class:"col-lg-8 fv-row"},ke={class:"row mb-6"},Ne=e("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Note",-1),Be={class:"col-lg-8 fv-row"},qe={class:"row mb-6"},Ee=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Indirizzo sede amministativa",-1),Se={class:"col-lg-8 fv-row"},Ze={class:"row mb-6"},De=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Cap sede amministativa",-1),Me={class:"col-lg-8 fv-row"},$e={class:"row mb-6"},Re=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Città sede amministativa",-1),Fe={class:"col-lg-8 fv-row"},je={class:"row mb-6"},Le=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Nazione sede amministativa",-1),Ke={class:"col-lg-8 fv-row"},We={class:"row mb-6"},Ge=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Provincia sede amministativa",-1),He={class:"col-lg-8 fv-row"},Je={class:"row mb-6"},Qe=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Indirizzo sede operativa",-1),Xe={class:"col-lg-8 fv-row"},Ye={class:"row mb-6"},xe=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Cap sede operativa",-1),eo={class:"col-lg-8 fv-row"},oo={class:"row mb-6"},lo=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Città sede operativa",-1),to={class:"col-lg-8 fv-row"},so={class:"row mb-6"},io=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Nazione sede operativa",-1),ao={class:"col-lg-8 fv-row"},no={class:"row mb-6"},ro=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Provincia sede operativa",-1),mo={class:"col-lg-8 fv-row"},co={class:"row mb-6"},fo=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"P. IVA",-1),po={class:"col-lg-8 fv-row"},vo={class:"row mb-6"},uo=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Codice ficale",-1),bo={class:"col-lg-8 fv-row"},go={class:"row mb-6"},yo=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Referente",-1),wo={class:"col-lg-8 fv-row"},ho={class:"row mb-6"},Co=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Telefono",-1),_o={class:"col-lg-8 fv-row"},To={class:"row mb-6"},Oo=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Cellulare",-1),Vo={class:"col-lg-8 fv-row"},Ao={class:"row mb-6"},Uo=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Email",-1),Po={class:"col-lg-8 fv-row"},zo={class:"row mb-6"},Io=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"PEC",-1),ko={class:"col-lg-8 fv-row"},No={class:"row mb-6"},Bo=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Codice univoco",-1),qo={class:"col-lg-8 fv-row"},Eo={class:"row mb-6"},So=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Agente di riferimento",-1),Zo={class:"col-lg-8 fv-row"},Do={class:"row mb-6"},Mo=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Coordinate bancarie",-1),$o={class:"col-lg-8 fv-row"},Ro={class:"row mb-6"},Fo=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Fax",-1),jo={class:"col-lg-8 fv-row"},Lo={class:"row mb-6"},Ko=e("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"Banca",-1),Wo={class:"col-lg-8 fv-row"},Go={class:"card-footer d-flex justify-content-end py-6 px-9"},Ho=["data-kt-indicator"],Jo={key:0,class:"indicator-label"},Qo={key:1,class:"indicator-progress"},Xo=e("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1);function Yo(t,s,b,d,n,g){return c(),m(y,null,[J,e("div",Q,[e("form",{class:"form",novalidate:"",onSubmit:s[34]||(s[34]=F(l=>t.saveChanges(),["prevent"]))},[e("div",X,[e("div",Y,[x,e("div",ee,[i(e("input",{type:"text",name:"code",class:"form-control form-control-lg",placeholder:"Codice","onUpdate:modelValue":s[0]||(s[0]=l=>t.item.code=l)},null,512),[[a,t.item.code]])])]),e("div",oe,[le,e("div",te,[i(e("input",{type:"text",name:"name",class:"form-control form-control-lg",placeholder:"Nome","onUpdate:modelValue":s[1]||(s[1]=l=>t.item.name=l)},null,512),[[a,t.item.name]])])]),e("div",se,[ie,e("div",ae,[i(e("select",{as:"select",name:"customerType",class:"form-select form-select-lg fw-semobold","onUpdate:modelValue":s[2]||(s[2]=l=>t.item.customerType=l)},[(c(!0),m(y,null,C(t.CustomerTypes,l=>(c(),m("option",{key:l.id,value:l.name},_(l.name),9,ne))),128))],512),[[h,t.item.customerType]])])]),e("div",re,[de,e("div",me,[i(e("select",{as:"select",name:"paymentType",class:"form-select form-select-lg fw-semobold","onUpdate:modelValue":s[3]||(s[3]=l=>t.item.paymentType=l)},[(c(!0),m(y,null,C(t.PaymentTypes,l=>(c(),m("option",{key:l.id,value:l.name},_(l.name),9,ce))),128))],512),[[h,t.item.paymentType]])])]),e("div",fe,[pe,e("div",ve,[i(e("select",{as:"select",name:"deliveryType",class:"form-select form-select-lg fw-semobold","onUpdate:modelValue":s[4]||(s[4]=l=>t.item.deliveryType=l)},[(c(!0),m(y,null,C(t.DeliveryTypes,l=>(c(),m("option",{key:l.id,value:l.name},_(l.name),9,ue))),128))],512),[[h,t.item.deliveryType]])])]),e("div",be,[ge,e("div",ye,[i(e("input",{type:"text",name:"address",class:"form-control form-control-lg",placeholder:"Indirizzo","onUpdate:modelValue":s[5]||(s[5]=l=>t.item.address=l)},null,512),[[a,t.item.address]])])]),e("div",we,[he,e("div",Ce,[i(e("input",{type:"text",name:"supplierArticleCode",class:"form-control form-control-lg",placeholder:"CAP","onUpdate:modelValue":s[6]||(s[6]=l=>t.item.zipCode=l)},null,512),[[a,t.item.zipCode]])])]),e("div",_e,[Te,e("div",Oe,[i(e("input",{type:"text",name:"city",class:"form-control form-control-lg",placeholder:"Città","onUpdate:modelValue":s[7]||(s[7]=l=>t.item.city=l)},null,512),[[a,t.item.city]])])]),e("div",Ve,[Ae,e("div",Ue,[i(e("input",{type:"text",name:"country",class:"form-control form-control-lg",placeholder:"Nazione","onUpdate:modelValue":s[8]||(s[8]=l=>t.item.country=l)},null,512),[[a,t.item.country]])])]),e("div",Pe,[ze,e("div",Ie,[i(e("input",{type:"text",name:"province",class:"form-control form-control-lg",placeholder:"Provincia","onUpdate:modelValue":s[9]||(s[9]=l=>t.item.province=l)},null,512),[[a,t.item.province]])])]),e("div",ke,[Ne,e("div",Be,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Note","onUpdate:modelValue":s[10]||(s[10]=l=>t.item.notes=l)},null,512),[[a,t.item.notes]])])]),e("div",qe,[Ee,e("div",Se,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Indirizzo sede amministativa","onUpdate:modelValue":s[11]||(s[11]=l=>t.item.administrativeOfficeAddress=l)},null,512),[[a,t.item.administrativeOfficeAddress]])])]),e("div",Ze,[De,e("div",Me,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Cap sede amministativa","onUpdate:modelValue":s[12]||(s[12]=l=>t.item.administrativeOfficeZipCode=l)},null,512),[[a,t.item.administrativeOfficeZipCode]])])]),e("div",$e,[Re,e("div",Fe,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Città sede amministativa","onUpdate:modelValue":s[13]||(s[13]=l=>t.item.administrativeOfficeCity=l)},null,512),[[a,t.item.administrativeOfficeCity]])])]),e("div",je,[Le,e("div",Ke,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Nazione sede amministativa","onUpdate:modelValue":s[14]||(s[14]=l=>t.item.administrativeOfficeCountry=l)},null,512),[[a,t.item.administrativeOfficeCountry]])])]),e("div",We,[Ge,e("div",He,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Provincia sede amministativa","onUpdate:modelValue":s[15]||(s[15]=l=>t.item.administrativeOfficeProvince=l)},null,512),[[a,t.item.administrativeOfficeProvince]])])]),e("div",Je,[Qe,e("div",Xe,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Indirizzo sede operativa","onUpdate:modelValue":s[16]||(s[16]=l=>t.item.operatingOfficeAddress=l)},null,512),[[a,t.item.operatingOfficeAddress]])])]),e("div",Ye,[xe,e("div",eo,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Cap sede operativa","onUpdate:modelValue":s[17]||(s[17]=l=>t.item.operatingOfficeZipCode=l)},null,512),[[a,t.item.operatingOfficeZipCode]])])]),e("div",oo,[lo,e("div",to,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Città sede operativa","onUpdate:modelValue":s[18]||(s[18]=l=>t.item.operatingOfficeCity=l)},null,512),[[a,t.item.operatingOfficeCity]])])]),e("div",so,[io,e("div",ao,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Nazione sede operativa","onUpdate:modelValue":s[19]||(s[19]=l=>t.item.operatingOfficeCountry=l)},null,512),[[a,t.item.operatingOfficeCountry]])])]),e("div",no,[ro,e("div",mo,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Provincia sede operativa","onUpdate:modelValue":s[20]||(s[20]=l=>t.item.operatingOfficeProvince=l)},null,512),[[a,t.item.operatingOfficeProvince]])])]),e("div",co,[fo,e("div",po,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"P. IVA","onUpdate:modelValue":s[21]||(s[21]=l=>t.item.vatNumber=l)},null,512),[[a,t.item.vatNumber]])])]),e("div",vo,[uo,e("div",bo,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Codice ficale","onUpdate:modelValue":s[22]||(s[22]=l=>t.item.fiscalCode=l)},null,512),[[a,t.item.fiscalCode]])])]),e("div",go,[yo,e("div",wo,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Referente","onUpdate:modelValue":s[23]||(s[23]=l=>t.item.contactPerson=l)},null,512),[[a,t.item.contactPerson]])])]),e("div",ho,[Co,e("div",_o,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Telefono","onUpdate:modelValue":s[24]||(s[24]=l=>t.item.phone=l)},null,512),[[a,t.item.phone]])])]),e("div",To,[Oo,e("div",Vo,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Cellulare","onUpdate:modelValue":s[25]||(s[25]=l=>t.item.mobile=l)},null,512),[[a,t.item.mobile]])])]),e("div",Ao,[Uo,e("div",Po,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Email","onUpdate:modelValue":s[26]||(s[26]=l=>t.item.email=l)},null,512),[[a,t.item.email]])])]),e("div",zo,[Io,e("div",ko,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"PEC","onUpdate:modelValue":s[27]||(s[27]=l=>t.item.pec=l)},null,512),[[a,t.item.pec]])])]),e("div",No,[Bo,e("div",qo,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Codice univoco","onUpdate:modelValue":s[28]||(s[28]=l=>t.item.uniqueCode=l)},null,512),[[a,t.item.uniqueCode]])])]),e("div",Eo,[So,e("div",Zo,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Agente di riferimento","onUpdate:modelValue":s[29]||(s[29]=l=>t.item.referenceAgent=l)},null,512),[[a,t.item.referenceAgent]])])]),e("div",Do,[Mo,e("div",$o,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Coordinate bancarie","onUpdate:modelValue":s[30]||(s[30]=l=>t.item.bankCoordinates=l)},null,512),[[a,t.item.bankCoordinates]])])]),e("div",Ro,[Fo,e("div",jo,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Fax","onUpdate:modelValue":s[31]||(s[31]=l=>t.item.fax=l)},null,512),[[a,t.item.fax]])])]),e("div",Lo,[Ko,e("div",Wo,[i(e("input",{type:"text",class:"form-control form-control-lg",placeholder:"Banca","onUpdate:modelValue":s[32]||(s[32]=l=>t.item.bank=l)},null,512),[[a,t.item.bank]])])])]),e("div",Go,[e("button",{type:"button",onClick:s[33]||(s[33]=l=>t.deleteItem()),class:"btn btn-danger btn-active-light-primary me-2"}," Elimina "),e("button",{"data-kt-indicator":t.loading?"on":null,class:"btn btn-lg btn-primary",type:"submit"},[t.loading?O("",!0):(c(),m("span",Jo," Salva modifiche ")),t.loading?(c(),m("span",Qo,[j(" Attendere... "),Xo])):O("",!0)],8,Ho)])],32)])],64)}const vl=R(H,[["render",Yo]]);export{vl as default};