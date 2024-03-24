import{g as D}from"./assets-1d85a7f2.js";import{D as X,L as V}from"./KTDataTable-b879a43b.js";import{h as x}from"./dom-2bc3e434.js";import{S as y}from"./sweetalert2-1d8e21d8.js";import{m as B,r as n,ac as R,av as S,_ as N,p as _,q as v,w as g,x as t,K as p,C as k,a0 as A,a6 as M,am as T,L as h,A as w,aw as z,o as E,M as K,z as I,F as O}from"./index-f4707fd9.js";import"./index.esm-214eccd4.js";import{a as F}from"./index-2c54fd16.js";const L=B({name:"update-proflie-xml",components:{},props:{id:{type:Number,required:!0},name:{type:String,required:!0},active:{type:Boolean,required:!0}},setup(e,{emit:o}){const m=n(null),r=n(null),l=n(!1),s=n({Id:e.id??0,Name:e.name??"",Active:e.active??!1});R(()=>[e.id,e.name,e.active],([b,f,a])=>{s.value.Id=b!==void 0?Number(b):0,s.value.Name=f!==void 0?String(f):"",s.value.Active=f!==void 0?!!a:!1});const i=n({Name:[{required:!0,message:"Inserire il nome del materiale",trigger:"change"}]}),d="ProfileXml";return{formData:s,rules:i,submit:()=>{m.value&&m.value.validate(b=>{if(b)l.value=!0,S.post(`${d}/Update`,s.value).then(()=>{l.value=!1,y.fire({text:"Operazione completata!",icon:"success",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}).then(()=>{x(r.value)}),o("formUpdateSubmitted",s.value)}).catch(({response:f})=>{console.log(f),l.value=!1,y.fire({text:"Attenzione, si è verificato un errore.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})});else return l.value=!1,y.fire({text:"Attenzione, non tutti i campi sono corretti.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}),!1})},formRef:m,loading:l,addCustomerModalRef:r,getAssetPath:D}}}),j={class:"modal fade",id:"kt_modal_update_type",ref:"updateTypeModal",tabindex:"-1","aria-hidden":"true"},H={class:"modal-dialog modal-dialog-centered mw-650px"},W={class:"modal-content"},G={class:"modal-header",id:"kt_modal_type_header"},J=t("h2",{class:"fw-bold"},"Modifica profilo xml",-1),Q={id:"kt_modal_type_close","data-bs-dismiss":"modal",class:"btn btn-icon btn-sm btn-active-icon-primary"},Y={class:"modal-body py-10 px-lg-17"},Z={class:"scroll-y me-n7 pe-7",id:"kt_modal_type_scroll","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto","data-kt-scroll-dependencies":"#kt_modal_type_header","data-kt-scroll-wrappers":"#kt_modal_type_scroll","data-kt-scroll-offset":"300px"},ee={class:"fv-row mb-7"},te=t("label",{class:"required fs-6 fw-semobold mb-2"},"Nome materiale",-1),oe={class:"fv-row mb-7"},ae={class:"form-check form-switch form-check-custom form-check-solid"},se=t("label",{class:"form-check-label"}," Attivato ",-1),ne={class:"modal-footer flex-center"},le=["data-kt-indicator"],ie={key:0,class:"indicator-label"},re={key:1,class:"indicator-progress"},de=t("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1);function ce(e,o,m,r,l,s){const i=_("KTIcon"),d=_("el-form");return v(),g("div",j,[t("div",H,[t("div",W,[t("div",G,[J,t("div",Q,[p(i,{"icon-name":"cross","icon-class":"fs-1"})])]),p(d,{onSubmit:o[2]||(o[2]=z(c=>e.submit(),["prevent"])),model:e.formData,rules:e.rules,ref:"formRef"},{default:k(()=>[t("div",Y,[t("div",Z,[t("div",ee,[te,A(t("input",{required:"",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=c=>e.formData.Name=c),type:"text",placeholder:"Nome..."},null,512),[[M,e.formData.Name]])]),t("div",oe,[t("div",ae,[A(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[1]||(o[1]=c=>e.formData.Active=c)},null,512),[[T,e.formData.Active]]),se])])])]),t("div",ne,[t("button",{"data-kt-indicator":e.loading?"on":null,class:"btn btn-lg btn-primary",type:"submit"},[e.loading?w("",!0):(v(),g("span",ie,[h(" Invia "),p(i,{"icon-name":"arrow-right","icon-class":"fs-2 me-2 me-0"})])),e.loading?(v(),g("span",re,[h(" Attendere... "),de])):w("",!0)],8,le)])]),_:1},8,["model","rules"])])])],512)}const me=N(L,[["render",ce]]),ue=B({name:"add-accessory-type-modal",components:{},setup(e,{emit:o}){const m=n(null),r=n(null),l=n(!1),s=n({Name:"",Active:!0}),i=n({name:[{required:!0,message:"Inserire il nome",trigger:"change"}]}),d="ProfileXml";return{formData:s,rules:i,submit:()=>{m.value&&m.value.validate(b=>{if(b)l.value=!0,S.post(`${d}/Create`,s.value).then(()=>{l.value=!1,y.fire({text:"Operazione completata!",icon:"success",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}).then(()=>{x(r.value)}),o("formAddSubmitted",s.value)}).catch(({response:f})=>{console.log(f),l.value=!1,y.fire({text:"Attenzione, si è verificato un errore.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})});else return l.value=!1,y.fire({text:"Attenzione, non tutti i campi sono corretti.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}),!1})},formRef:m,loading:l,addCustomerModalRef:r,getAssetPath:D}}}),fe={class:"modal fade",id:"kt_modal_add_type",ref:"addTypeModal",tabindex:"-1","aria-hidden":"true"},pe={class:"modal-dialog modal-dialog-centered mw-650px"},be={class:"modal-content"},_e={class:"modal-header",id:"kt_modal_add_type_header"},he=t("h2",{class:"fw-bold"},"Aggiungi tipologia accessorio",-1),ve={id:"kt_modal_add_type_close","data-bs-dismiss":"modal",class:"btn btn-icon btn-sm btn-active-icon-primary"},ge={class:"modal-body py-10 px-lg-17"},ye={class:"scroll-y me-n7 pe-7",id:"kt_modal_add_type_scroll","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto","data-kt-scroll-dependencies":"#kt_modal_add_type_header","data-kt-scroll-wrappers":"#kt_modal_add_type_scroll","data-kt-scroll-offset":"300px"},ke={class:"fv-row mb-7"},$e=t("label",{class:"required fs-6 fw-semobold mb-2"},"Nome",-1),Ae={class:"fv-row mb-7"},we={class:"form-check form-switch form-check-custom form-check-solid"},Se=t("label",{class:"form-check-label"}," Attivato ",-1),Ce={class:"modal-footer flex-center"},Ie=t("button",{type:"reset",id:"kt_modal_add_customer_cancel",class:"btn btn-light me-3"}," Scarta ",-1),De=["data-kt-indicator"],Be={key:0,class:"indicator-label"},Ne={key:1,class:"indicator-progress"},Me=t("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1);function xe(e,o,m,r,l,s){const i=_("KTIcon"),d=_("el-form");return v(),g("div",fe,[t("div",pe,[t("div",be,[t("div",_e,[he,t("div",ve,[p(i,{"icon-name":"cross","icon-class":"fs-1"})])]),p(d,{onSubmit:o[2]||(o[2]=z(c=>e.submit(),["prevent"])),model:e.formData,rules:e.rules,ref:"formRef"},{default:k(()=>[t("div",ge,[t("div",ye,[t("div",ke,[$e,A(t("input",{required:"",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=c=>e.formData.Name=c),type:"text",placeholder:"Nome..."},null,512),[[M,e.formData.Name]])]),t("div",Ae,[t("div",we,[A(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[1]||(o[1]=c=>e.formData.Active=c)},null,512),[[T,e.formData.Active]]),Se])])])]),t("div",Ce,[Ie,t("button",{"data-kt-indicator":e.loading?"on":null,class:"btn btn-lg btn-primary",type:"submit"},[e.loading?w("",!0):(v(),g("span",Be,[h(" Invia "),p(i,{"icon-name":"arrow-right","icon-class":"fs-2 me-2 me-0"})])),e.loading?(v(),g("span",Ne,[h(" Attendere... "),Me])):w("",!0)],8,De)])]),_:1},8,["model","rules"])])])],512)}const Te=N(ue,[["render",xe]]),ze=e=>S.get(`ProfileXml/Get?currentPage=0&filterRequest=${e}`,"").then(({data:o})=>o.data.map(r=>({id:r.id,name:r.name,active:r.active}))).catch(({response:o})=>(console.error(o),[])),Pe=B({name:"Profile-xml-list",components:{Datatable:X,UpdateProfileXmlModal:me,AddProfileXmlModal:Te,Loading:V},setup(){let e=n(!0),o=n(0),m=n(""),r=n(!1);const l=n([{columnName:"Nome materiale",columnLabel:"name",sortEnabled:!0,columnWidth:300},{columnName:"Azioni",columnLabel:"actions",sortEnabled:!1,columnWidth:135}]),s=n([]);let i=n([]);async function d(u){i.value=await ze(u),e.value=!1}E(()=>{e.value=!0,d("")});const c=()=>{s.value.forEach(u=>{b(u)}),s.value.length=0},b=u=>{e.value=!0,S.post(`ProfileXml/Delete?id=${u}`,{}).then(()=>{y.fire({text:"Operazione completata!",icon:"success",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}).then(()=>{d("")})}).catch(({response:$})=>{y.fire({text:$.data.message,icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}).then(()=>{d("")})})},f=n(""),a=()=>{d(f.value),K.reinitialization()},C=u=>{const $=u.order==="asc";u.label&&F(i.value,u.label,{reverse:$})},P=u=>{s.value=u};function U(u,$,q){o.value=u,m.value=$,r.value=q}return{tableData:i,tableHeader:l,deleteItem:b,search:f,searchItems:a,selectedIds:s,deleteFewItems:c,sort:C,onItemSelect:P,getAssetPath:D,loading:e,selectedId:o,selectedName:m,selectedActive:r,showUpdateModal:U,getItems:d}}}),Ue={class:"card"},qe={class:"card-header border-0 pt-6"},Xe={class:"card-title"},Ve={class:"d-flex align-items-center position-relative my-1"},Re={class:"card-toolbar"},Ee={key:0,class:"d-flex justify-content-end","data-kt-customer-table-toolbar":"base"},Ke={type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#kt_modal_add_type"},Oe={key:1,class:"d-flex justify-content-end align-items-center","data-kt-customer-table-toolbar":"selected"},Fe={class:"fw-bold me-5"},Le={class:"me-2"},je=t("div",{class:"d-flex justify-content-end align-items-center d-none","data-kt-customer-table-toolbar":"selected"},[t("div",{class:"fw-bold me-5"},[t("span",{class:"me-2","data-kt-customer-table-select":"selected_count"}),h("Selezionati ")]),t("button",{type:"button",class:"btn btn-danger","data-kt-customer-table-select":"delete_selected"}," Elimina Selezionati ")],-1),He={class:"card-body pt-0"},We=["onClick"],Ge=["onClick"];function Je(e,o,m,r,l,s){const i=_("KTIcon"),d=_("router-link"),c=_("Datatable"),b=_("UpdateProfileXmlModal"),f=_("AddProfileXmlModal");return v(),g(O,null,[t("div",Ue,[t("div",qe,[t("div",Xe,[t("div",Ve,[p(i,{"icon-name":"magnifier","icon-class":"fs-1 position-absolute ms-6"}),A(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>e.search=a),onInput:o[1]||(o[1]=a=>e.searchItems()),class:"form-control form-control-solid w-250px ps-15",placeholder:"Ricerca"},null,544),[[M,e.search]])])]),t("div",Re,[e.selectedIds.length===0?(v(),g("div",Ee,[t("button",Ke,[p(i,{"icon-name":"plus","icon-class":"fs-2"}),h(" Aggiungi profilo per xml ")])])):(v(),g("div",Oe,[t("div",Fe,[t("span",Le,I(e.selectedIds.length),1),h("Selezionati ")]),t("button",{type:"button",class:"btn btn-danger",onClick:o[2]||(o[2]=a=>e.deleteFewItems())}," Elimina Selezionati ")])),je])]),t("div",He,[p(c,{onOnSort:e.sort,onOnItemsSelect:e.onItemSelect,data:e.tableData,header:e.tableHeader,"enable-items-per-page-dropdown":!0,"checkbox-enabled":!0,"checkbox-label":"id",loading:e.loading},{name:k(({row:a})=>[p(d,{to:{name:"update-accessory",params:{id:a.id}},class:"text-gray-600 text-hover-primary mb-1"},{default:k(()=>[h(I(a.name),1)]),_:2},1032,["to"])]),code:k(({row:a})=>[h(I(a.Active?"Attivo":"Disattivo"),1)]),actions:k(({row:a})=>[t("button",{class:"btn btn-light-info me-1","data-bs-toggle":"modal","data-bs-target":"#kt_modal_update_type",onClick:C=>e.showUpdateModal(a.id,a.name,a.active)},"Dettagli",8,We),t("button",{onClick:C=>e.deleteItem(a.id),class:"btn btn-light-danger me-1"},"Elimina",8,Ge)]),_:1},8,["onOnSort","onOnItemsSelect","data","header","loading"])])]),p(b,{id:e.selectedId,name:e.selectedName,active:e.selectedActive,onFormUpdateSubmitted:o[3]||(o[3]=a=>e.getItems(""))},null,8,["id","name","active"]),p(f,{onFormAddSubmitted:o[4]||(o[4]=a=>e.getItems(""))})],64)}const st=N(Pe,[["render",Je]]);export{st as default};
