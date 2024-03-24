import{g as k}from"./assets-ce4ccef5.js";import{D as w,L as S}from"./KTDataTable-88696261.js";import{E,A as N}from"./AddGoodReceiptModal-d5aa7320.js";import{a as D}from"./index-39b333fd.js";import{m as x,r as m,o as L,at as M,M as A,_ as R,w as h,x as o,K as s,a0 as $,a6 as C,L as n,z as u,C as l,F as G,p,q as f}from"./index-93335d48.js";import{g as z}from"./goodsReceipt-233fcfcf.js";import"./sweetalert2-d38ee055.js";import"./alphabet-a5bbf61c.js";import"./dom-8a591f7a.js";import"./accessories-e9fb4bc6.js";import"./materials-1e134421.js";import"./profiles-1ee45f9d.js";import"./suppliers-d1b63873.js";const F=x({name:"goods-receipt-list",components:{Datatable:w,ExportGoodReceiptsModal:E,AddGoodReceiptModal:N,Loading:S},setup(){let t=m(!0);const a=m([{columnName:"Numero documento",columnLabel:"documentNumber",sortEnabled:!0,columnWidth:175},{columnName:"Lotto",columnLabel:"goodName",sortEnabled:!0,columnWidth:230},{columnName:"Quantità",columnLabel:"quantity",sortEnabled:!0,columnWidth:175},{columnName:"Data",columnLabel:"date",sortEnabled:!0,columnWidth:175},{columnName:"Azioni",columnLabel:"actions",sortEnabled:!1,columnWidth:135}]),i=m([]);let b=m([]);async function r(e){b.value=await z(e),t.value=!1}L(()=>{t.value=!0,r("")});const _=()=>{i.value.forEach(e=>{d(e)}),i.value.length=0},d=e=>{t.value=!0,M.post(`GoodReceipt/Delete?id=${e}`,{}).then(()=>{r("")}).catch(({response:g})=>{console.log(g)})},c=m("");return{tableData:b,tableHeader:a,deleteItem:d,search:c,searchItems:()=>{r(c.value),A.reinitialization()},selectedIds:i,deleteFewItems:_,sort:e=>{const g=e.order==="asc";e.label&&D(b.value,e.label,{reverse:g})},onItemSelect:e=>{i.value=e},getAssetPath:k,loading:t,getItems:r}}}),T={class:"card"},W={class:"card-header border-0 pt-6"},q={class:"card-title"},O={class:"d-flex align-items-center position-relative my-1"},V={class:"card-toolbar"},j={key:0,class:"d-flex justify-content-end","data-kt-customer-table-toolbar":"base"},B={type:"button",class:"btn btn-light-primary me-3","data-bs-toggle":"modal","data-bs-target":"#kt_export_modal"},K={type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#kt_modal_add"},H={key:1,class:"d-flex justify-content-end align-items-center","data-kt-customer-table-toolbar":"selected"},P={class:"fw-bold me-5"},Q={class:"me-2"},U=o("div",{class:"d-flex justify-content-end align-items-center d-none","data-kt-customer-table-toolbar":"selected"},[o("div",{class:"fw-bold me-5"},[o("span",{class:"me-2","data-kt-customer-table-select":"selected_count"}),n("Selezionati ")]),o("button",{type:"button",class:"btn btn-danger","data-kt-customer-table-select":"delete_selected"}," Elimina Selezionati ")],-1),J={class:"card-body pt-0"},X=["onClick"];function Y(t,a,i,b,r,_){const d=p("KTIcon"),c=p("router-link"),v=p("Datatable"),y=p("ExportGoodReceiptsModal"),I=p("AddGoodReceiptModal");return f(),h(G,null,[o("div",T,[o("div",W,[o("div",q,[o("div",O,[s(d,{"icon-name":"magnifier","icon-class":"fs-1 position-absolute ms-6"}),$(o("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>t.search=e),onInput:a[1]||(a[1]=e=>t.searchItems()),class:"form-control form-control-solid w-250px ps-15",placeholder:"Ricerca"},null,544),[[C,t.search]])])]),o("div",V,[t.selectedIds.length===0?(f(),h("div",j,[o("button",B,[s(d,{"icon-name":"exit-up","icon-class":"fs-2"}),n(" Export ")]),o("button",K,[s(d,{"icon-name":"plus","icon-class":"fs-2"}),n(" Aggiungi ")])])):(f(),h("div",H,[o("div",P,[o("span",Q,u(t.selectedIds.length),1),n("Selezionati ")]),o("button",{type:"button",class:"btn btn-danger",onClick:a[2]||(a[2]=e=>t.deleteFewItems())}," Elimina Selezionati ")])),U])]),o("div",J,[s(v,{onOnSort:t.sort,onOnItemsSelect:t.onItemSelect,data:t.tableData,header:t.tableHeader,"enable-items-per-page-dropdown":!0,"checkbox-enabled":!0,"checkbox-label":"id",loading:t.loading},{documentNumber:l(({row:e})=>[n(u(e.documentNumber),1)]),goodName:l(({row:e})=>[s(c,{to:{name:"update-good-receipt",params:{id:e.id}},class:"text-gray-600 text-hover-primary mb-1"},{default:l(()=>[n(u(e.goodName),1)]),_:2},1032,["to"])]),quantity:l(({row:e})=>[n(u(e.quantity),1)]),date:l(({row:e})=>[n(u(new Date(e.date).toLocaleDateString("it-IT")),1)]),actions:l(({row:e})=>[s(c,{to:{name:"update-good-receipt",params:{id:e.id}},class:"btn btn-light-info me-1"},{default:l(()=>[n("Dettagli")]),_:2},1032,["to"]),o("button",{onClick:g=>t.deleteItem(e.id),class:"btn btn-light-danger me-1"},"Elimina",8,X)]),_:1},8,["onOnSort","onOnItemsSelect","data","header","loading"])])]),s(y),s(I,{onFormAddSubmitted:a[3]||(a[3]=e=>t.getItems(""))})],64)}const ue=R(F,[["render",Y]]);export{ue as default};