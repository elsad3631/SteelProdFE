import{g as C}from"./assets-2a66e18f.js";import{D as U,L as q}from"./KTDataTable-b34f43d4.js";import{h as D}from"./dom-668969a5.js";import{S as v}from"./sweetalert2-e92a9e07.js";import{j as w,r as n,a3 as O,an as T,_ as N,l as b,m as g,n as y,p as t,B as m,z as $,W as B,a0 as M,O as h,x as A,am as x,o as E,M as R,w as I,F as V}from"./index-ac5572e4.js";import{a as F}from"./index-68cf51a8.js";import{g as K}from"./accessoryTypes-96bcb43f.js";const L=w({name:"update-accessory-type",components:{},props:{id:{type:Number,required:!0},name:{type:String,required:!0}},setup(e,{emit:o}){const r=n(null),f=n(null),s=n(!1),l=n({Id:e.id??0,Name:e.name??""});O(()=>[e.id,e.name],([p,_])=>{l.value.Id=p!==void 0?Number(p):0,l.value.Name=_!==void 0?String(_):""});const a=n({name:[{required:!0,message:"Inserire il nome",trigger:"change"}]}),u="AccessoryType";return{formData:l,rules:a,submit:()=>{r.value&&r.value.validate(p=>{if(p)s.value=!0,T.post(`${u}/Update`,l.value).then(()=>{s.value=!1,v.fire({text:"Operazione completata!",icon:"success",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}).then(()=>{D(f.value)}),o("formUpdateSubmitted",l.value)}).catch(({response:_})=>{console.log(_),s.value=!1,v.fire({text:"Attenzione, si è verificato un errore.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})});else return s.value=!1,v.fire({text:"Attenzione, non tutti i campi sono corretti.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}),!1})},formRef:r,loading:s,addCustomerModalRef:f,getAssetPath:C}}}),j={class:"modal fade",id:"kt_modal_update_type",ref:"updateTypeModal",tabindex:"-1","aria-hidden":"true"},W={class:"modal-dialog modal-dialog-centered mw-650px"},H={class:"modal-content"},P={class:"modal-header",id:"kt_modal_type_header"},G=t("h2",{class:"fw-bold"},"Modifica tipologia accessorio",-1),J={id:"kt_modal_type_close","data-bs-dismiss":"modal",class:"btn btn-icon btn-sm btn-active-icon-primary"},Q={class:"modal-body py-10 px-lg-17"},X={class:"scroll-y me-n7 pe-7",id:"kt_modal_type_scroll","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto","data-kt-scroll-dependencies":"#kt_modal_type_header","data-kt-scroll-wrappers":"#kt_modal_type_scroll","data-kt-scroll-offset":"300px"},Y={class:"fv-row mb-7"},Z=t("label",{class:"required fs-6 fw-semobold mb-2"},"Nome",-1),ee={class:"modal-footer flex-center"},te=["data-kt-indicator"],oe={key:0,class:"indicator-label"},se={key:1,class:"indicator-progress"},ae=t("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1);function ne(e,o,r,f,s,l){const a=b("KTIcon"),u=b("el-form");return g(),y("div",j,[t("div",W,[t("div",H,[t("div",P,[G,t("div",J,[m(a,{"icon-name":"cross","icon-class":"fs-1"})])]),m(u,{onSubmit:o[1]||(o[1]=x(c=>e.submit(),["prevent"])),model:e.formData,rules:e.rules,ref:"formRef"},{default:$(()=>[t("div",Q,[t("div",X,[t("div",Y,[Z,B(t("input",{required:"",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=c=>e.formData.Name=c),type:"text",placeholder:"Nome..."},null,512),[[M,e.formData.Name]])])])]),t("div",ee,[t("button",{"data-kt-indicator":e.loading?"on":null,class:"btn btn-lg btn-primary",type:"submit"},[e.loading?A("",!0):(g(),y("span",oe,[h(" Invia "),m(a,{"icon-name":"arrow-right","icon-class":"fs-2 me-2 me-0"})])),e.loading?(g(),y("span",se,[h(" Attendere... "),ae])):A("",!0)],8,te)])]),_:1},8,["model","rules"])])])],512)}const le=N(L,[["render",ne]]),ie=w({name:"add-accessory-type-modal",components:{},setup(e,{emit:o}){const r=n(null),f=n(null),s=n(!1),l=n({Name:""}),a=n({name:[{required:!0,message:"Inserire il nome",trigger:"change"}]}),u="AccessoryType";return{formData:l,rules:a,submit:()=>{r.value&&r.value.validate(p=>{if(p)s.value=!0,T.post(`${u}/Create`,l.value).then(()=>{s.value=!1,v.fire({text:"Operazione completata!",icon:"success",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}).then(()=>{D(f.value)}),o("formAddSubmitted",l.value)}).catch(({response:_})=>{console.log(_),s.value=!1,v.fire({text:"Attenzione, si è verificato un errore.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})});else return s.value=!1,v.fire({text:"Attenzione, non tutti i campi sono corretti.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}),!1})},formRef:r,loading:s,addCustomerModalRef:f,getAssetPath:C}}}),re={class:"modal fade",id:"kt_modal_add_type",ref:"addTypeModal",tabindex:"-1","aria-hidden":"true"},de={class:"modal-dialog modal-dialog-centered mw-650px"},ce={class:"modal-content"},me={class:"modal-header",id:"kt_modal_add_type_header"},ue=t("h2",{class:"fw-bold"},"Aggiungi tipologia accessorio",-1),pe={id:"kt_modal_add_type_close","data-bs-dismiss":"modal",class:"btn btn-icon btn-sm btn-active-icon-primary"},fe={class:"modal-body py-10 px-lg-17"},_e={class:"scroll-y me-n7 pe-7",id:"kt_modal_add_type_scroll","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto","data-kt-scroll-dependencies":"#kt_modal_add_type_header","data-kt-scroll-wrappers":"#kt_modal_add_type_scroll","data-kt-scroll-offset":"300px"},be={class:"fv-row mb-7"},he=t("label",{class:"required fs-6 fw-semobold mb-2"},"Nome",-1),ge={class:"modal-footer flex-center"},ye=t("button",{type:"reset",id:"kt_modal_add_customer_cancel",class:"btn btn-light me-3"}," Scarta ",-1),ve=["data-kt-indicator"],$e={key:0,class:"indicator-label"},ke={key:1,class:"indicator-progress"},Ae=t("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1);function Se(e,o,r,f,s,l){const a=b("KTIcon"),u=b("el-form");return g(),y("div",re,[t("div",de,[t("div",ce,[t("div",me,[ue,t("div",pe,[m(a,{"icon-name":"cross","icon-class":"fs-1"})])]),m(u,{onSubmit:o[1]||(o[1]=x(c=>e.submit(),["prevent"])),model:e.formData,rules:e.rules,ref:"formRef"},{default:$(()=>[t("div",fe,[t("div",_e,[t("div",be,[he,B(t("input",{required:"",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=c=>e.formData.Name=c),type:"text",placeholder:"Nome..."},null,512),[[M,e.formData.Name]])])])]),t("div",ge,[ye,t("button",{"data-kt-indicator":e.loading?"on":null,class:"btn btn-lg btn-primary",type:"submit"},[e.loading?A("",!0):(g(),y("span",$e,[h(" Invia "),m(a,{"icon-name":"arrow-right","icon-class":"fs-2 me-2 me-0"})])),e.loading?(g(),y("span",ke,[h(" Attendere... "),Ae])):A("",!0)],8,ve)])]),_:1},8,["model","rules"])])])],512)}const Ie=N(ie,[["render",Se]]),Ce=w({name:"accessory-type-list",components:{Datatable:U,UpdateAccessoryTypeModal:le,AddAccessoryTypeModal:Ie,Loading:q},setup(){let e=n(!0),o=n(0),r=n("");const f=n([{columnName:"Nome",columnLabel:"name",sortEnabled:!0,columnWidth:300},{columnName:"Azioni",columnLabel:"actions",sortEnabled:!1,columnWidth:135}]),s=n([]);let l=n([]);async function a(d){l.value=await K(d),e.value=!1}E(()=>{e.value=!0,a("")});const u=()=>{s.value.forEach(d=>{c(d)}),s.value.length=0},c=d=>{e.value=!0,T.post(`AccessoryType/Delete?id=${d}`,{}).then(()=>{v.fire({text:"Operazione completata!",icon:"success",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}).then(()=>{a("")})}).catch(({response:k})=>{v.fire({text:k.data.message,icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}).then(()=>{a("")})})},p=n(""),_=()=>{a(p.value),R.reinitialization()},i=d=>{const k=d.order==="asc";d.label&&F(l.value,d.label,{reverse:k})},S=d=>{s.value=d};function z(d,k){o.value=d,r.value=k}return{tableData:l,tableHeader:f,deleteItem:c,search:p,searchItems:_,selectedIds:s,deleteFewItems:u,sort:i,onItemSelect:S,getAssetPath:C,loading:e,selectedId:o,selectedName:r,showUpdateModal:z,getItems:a}}}),we={class:"card"},Te={class:"card-header border-0 pt-6"},Ne={class:"card-title"},Be={class:"d-flex align-items-center position-relative my-1"},Me={class:"card-toolbar"},De={key:0,class:"d-flex justify-content-end","data-kt-customer-table-toolbar":"base"},xe={type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#kt_modal_add_type"},ze={key:1,class:"d-flex justify-content-end align-items-center","data-kt-customer-table-toolbar":"selected"},Ue={class:"fw-bold me-5"},qe={class:"me-2"},Oe=t("div",{class:"d-flex justify-content-end align-items-center d-none","data-kt-customer-table-toolbar":"selected"},[t("div",{class:"fw-bold me-5"},[t("span",{class:"me-2","data-kt-customer-table-select":"selected_count"}),h("Selezionati ")]),t("button",{type:"button",class:"btn btn-danger","data-kt-customer-table-select":"delete_selected"}," Elimina Selezionati ")],-1),Ee={class:"card-body pt-0"},Re=["onClick"],Ve=["onClick"];function Fe(e,o,r,f,s,l){const a=b("KTIcon"),u=b("router-link"),c=b("Datatable"),p=b("UpdateAccessoryTypeModal"),_=b("AddAccessoryTypeModal");return g(),y(V,null,[t("div",we,[t("div",Te,[t("div",Ne,[t("div",Be,[m(a,{"icon-name":"magnifier","icon-class":"fs-1 position-absolute ms-6"}),B(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=i=>e.search=i),onInput:o[1]||(o[1]=i=>e.searchItems()),class:"form-control form-control-solid w-250px ps-15",placeholder:"Ricerca"},null,544),[[M,e.search]])])]),t("div",Me,[e.selectedIds.length===0?(g(),y("div",De,[t("button",xe,[m(a,{"icon-name":"plus","icon-class":"fs-2"}),h(" Aggiungi tipologia accessorio ")])])):(g(),y("div",ze,[t("div",Ue,[t("span",qe,I(e.selectedIds.length),1),h("Selezionati ")]),t("button",{type:"button",class:"btn btn-danger",onClick:o[2]||(o[2]=i=>e.deleteFewItems())}," Elimina Selezionati ")])),Oe])]),t("div",Ee,[m(c,{onOnSort:e.sort,onOnItemsSelect:e.onItemSelect,data:e.tableData,header:e.tableHeader,"enable-items-per-page-dropdown":!0,"checkbox-enabled":!0,"checkbox-label":"id",loading:e.loading},{code:$(({row:i})=>[h(I(i.code),1)]),name:$(({row:i})=>[m(u,{to:{name:"update-accessory",params:{id:i.id}},class:"text-gray-600 text-hover-primary mb-1"},{default:$(()=>[h(I(i.name),1)]),_:2},1032,["to"])]),actions:$(({row:i})=>[t("button",{class:"btn btn-light-info me-1","data-bs-toggle":"modal","data-bs-target":"#kt_modal_update_type",onClick:S=>e.showUpdateModal(i.id,i.name)},"Dettagli",8,Re),t("button",{onClick:S=>e.deleteItem(i.id),class:"btn btn-light-danger me-1"},"Elimina",8,Ve)]),_:1},8,["onOnSort","onOnItemsSelect","data","header","loading"])])]),m(p,{id:e.selectedId,name:e.selectedName,onFormUpdateSubmitted:o[3]||(o[3]=i=>e.getItems(""))},null,8,["id","name"]),m(_,{onFormAddSubmitted:o[4]||(o[4]=i=>e.getItems(""))})],64)}const Je=N(Ce,[["render",Fe]]);export{Je as default};
