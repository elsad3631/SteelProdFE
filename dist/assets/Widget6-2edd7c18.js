import{g as o}from"./assets-2a66e18f.js";import{D as x}from"./Dropdown2-b1588b63.js";import{j as u,r as g,_ as b,l as m,m as a,n as c,p as t,B as l,F as _,q as f,A as n,w as r,ae as v}from"./index-ac5572e4.js";import{D}from"./Dropdown1-38ecbf82.js";import{D as C}from"./Dropdown3-467b18f6.js";const B=u({name:"kt-widget-3",components:{Dropdown2:x},props:{widgetClasses:String},setup(){return{list:g([{color:"success",title:"Create FireStone Logo",text:"Due in 2 Days"},{color:"primary",title:"Stakeholder Meeting",text:"Due in 3 Days"},{color:"warning",title:"Scoping & Estimations",text:"Due in 5 Days"},{color:"primary",title:"KPI App Showcase",text:"Due in 2 Days"},{color:"danger",title:"Project Meeting",text:"Due in 12 Days"},{color:"success",title:"Customers Update",text:"Due in 1 week"}]),getAssetPath:o}}}),S={class:"card-header border-0"},K=t("h3",{class:"card-title fw-bold text-dark"},"Todo",-1),z={class:"card-toolbar"},I={type:"button",class:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},j={class:"card-body pt-2"},L=t("div",{class:"form-check form-check-custom form-check-solid mx-5"},[t("input",{class:"form-check-input",type:"checkbox",value:""})],-1),T={class:"flex-grow-1"},N={href:"#",class:"text-gray-800 text-hover-primary fw-bold fs-6"},A={class:"text-muted fw-semobold d-block"};function P(e,h,y,w,k,$){const d=m("KTIcon"),p=m("Dropdown2");return a(),c("div",{class:n(["card",e.widgetClasses])},[t("div",S,[K,t("div",z,[t("button",I,[l(d,{"icon-name":"category","icon-class":"fs-2"})]),l(p)])]),t("div",j,[(a(!0),c(_,null,f(e.list,(s,i)=>(a(),c("div",{key:i,class:n([{"mb-8":e.list.length-1!==i},"d-flex align-items-center"])},[t("span",{class:n(["bullet bullet-vertical h-40px",`bg-${s.color}`])},null,2),L,t("div",T,[t("a",N,r(s.title),1),t("span",A,r(s.text),1)]),t("span",{class:n(["badge fs-8 fw-bold",`badge-light-${s.color}`])},"New",2)],2))),128))])],2)}const mt=b(B,[["render",P]]),M=u({name:"kt-widget-6",components:{Dropdown1:D},props:{widgetClasses:String},setup(){return{list:g([{image:o("media/stock/600x400/img-20.jpg"),title:"Cup & Green",size:"87KB",color:"success",status:"Approved"},{image:o("media/stock/600x400/img-19.jpg"),title:"Yellow Background",size:"1.2MB",color:"warning",status:"In Progress"},{image:o("media/stock/600x400/img-25.jpg"),title:"Nike & Blue",size:"87KB",color:"success",status:"Success"},{image:o("media/stock/600x400/img-24.jpg"),title:"Red Boots",size:"345KB",color:"danger",status:"Rejected"}]),getAssetPath:o}}}),F={class:"card-header align-items-center border-0 mt-4"},R=t("h3",{class:"card-title align-items-start flex-column"},[t("span",{class:"fw-bold text-dark"},"Latest Media"),t("span",{class:"text-muted mt-1 fw-semobold fs-7"},"Articles and publications")],-1),W={class:"card-toolbar"},E={type:"button",class:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},G={class:"card-body pt-3"},V={class:"symbol symbol-60px symbol-2by3 me-4"},q={class:"d-flex flex-row-fluid flex-wrap align-items-center"},U={class:"flex-grow-1 me-2"},Y={href:"#",class:"text-gray-800 fw-bold text-hover-primary fs-6"},H={class:"text-muted fw-semobold d-block pt-1"};function J(e,h,y,w,k,$){const d=m("KTIcon"),p=m("Dropdown1");return a(),c("div",{class:n(["card",e.widgetClasses])},[t("div",F,[R,t("div",W,[t("button",E,[l(d,{"icon-name":"category","icon-class":"fs-2"})]),l(p)])]),t("div",G,[(a(!0),c(_,null,f(e.list,(s,i)=>(a(),c("div",{key:i,class:n([{"mb-7":e.list.length-1!==i},"d-flex align-items-sm-center"])},[t("div",V,[t("div",{class:"symbol-label",style:v({backgroundImage:`url(${s.image})`})},null,4)]),t("div",q,[t("div",U,[t("a",Y,r(s.title),1),t("span",H,"Size: "+r(s.size),1)]),t("span",{class:n([`badge-light-${s.color}`,"badge fs-8 fw-bold my-2"])},r(s.status),3)])],2))),128))])],2)}const pt=b(M,[["render",J]]),O=u({name:"kt-widget-6",components:{Dropdown3:C},props:{widgetClasses:String},setup(){return{list:g([{color:"warning",icon:o("media/icons/duotune/abstract/abs027.svg"),title:"Group lunch celebration",text:"Due in 2 Days",number:"+28%"},{color:"success",icon:o("media/icons/duotune/art/art005.svg"),title:"Navigation optimization",text:"Due in 2 Days",number:"+50%"},{color:"danger",icon:o("media/icons/duotune/communication/com012.svg"),title:"Rebrand strategy planning",text:"Due in 5 Days",number:"-27%"},{color:"info",icon:o("media/icons/duotune/communication/com012.svg"),title:"Product goals strategy",text:"Due in 7 Days",number:"+8%"}]),getAssetPath:o}}}),Q={class:"card-header border-0"},X=t("h3",{class:"card-title fw-bold text-dark"},"Notifications",-1),Z={class:"card-toolbar"},tt={type:"button",class:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},st={class:"card-body pt-0"},et={class:"flex-grow-1 me-2"},ot={href:"#",class:"fw-bold text-gray-800 text-hover-primary fs-6"},nt={class:"text-muted fw-semobold d-block"};function at(e,h,y,w,k,$){const d=m("KTIcon"),p=m("Dropdown3");return a(),c("div",{class:n(["card",e.widgetClasses])},[t("div",Q,[X,t("div",Z,[t("button",tt,[l(d,{"icon-name":"category","icon-class":"fs-2"})]),l(p)])]),t("div",st,[(a(!0),c(_,null,f(e.list,(s,i)=>(a(),c("div",{key:i,class:n([[e.list.length-1!==i,`bg-light-${s.color}`],"d-flex align-items-center rounded p-5 mb-7"])},[l(d,{"icon-name":"abstract-26","icon-class":`text-${s.color} fs-1 me-5`},null,8,["icon-class"]),t("div",et,[t("a",ot,r(s.title),1),t("span",nt,r(s.text),1)]),t("span",{class:n([`text-${s.color}`,"fw-bold py-1"])},r(s.number),3)],2))),128))])],2)}const ut=b(O,[["render",at]]);export{mt as L,pt as a,ut as b};