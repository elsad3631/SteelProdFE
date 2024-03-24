import{g as C}from"./assets-1d85a7f2.js";import{m as y,r as k,J as $,o as w,ap as A,_ as x,q as I,w as T,x as e,G as i,ao as c,L as d,aq as V,aa as f,ar as b,K as m,a0 as l,as as n,a5 as p,a6 as U,am as M,z as h,C as F,F as N,N as H,p as _}from"./index-f4707fd9.js";import{u as L,t as P}from"./documentation-45a80652.js";const B=y({name:"CodeHighlighter",props:{lang:String,fieldHeight:Number},setup(t){const s=k(t.fieldHeight),{init:r}=L(),u=$(()=>s.value+"px");return w(()=>{A.highlightAll(),r()}),{getHeightInPixesls:u}},components:{}}),D={class:"py-5"},K={class:"highlight"},E=e("button",{class:"highlight-copy btn","data-bs-toggle":"tooltip",title:"","data-bs-original-title":"Copy code"}," copy ",-1),G={class:"highlight-code"};function O(t,s,r,u,a,S){return I(),T("div",D,[e("div",K,[E,e("div",G,[e("pre",{class:i(`language-${t.lang}`),style:c({height:t.getHeightInPixesls})},[e("code",{class:i(`language-${t.lang}`)},[d(`
          `),V(t.$slots,"default"),d(`
        `)],2)],6)])])])}const R=x(B,[["render",O]]),v="layoutBuilderTabIndex_demo8",W=y({name:"layout-builder",components:{CodeHighlighter:R},setup(){const t=k(0);return w(()=>{t.value=parseInt(localStorage.getItem(v)||"0")}),{tabIndex:t,config:f,reset:a=>{a.preventDefault(),localStorage.removeItem(b),window.location.reload()},setActiveTab:a=>{t.value=parseInt(a.target.getAttribute("data-tab-index")),localStorage.setItem(v,t.value.toString())},submit:a=>{a.preventDefault(),localStorage.setItem(b,JSON.stringify(f.value)),window.location.reload()},themeName:P,getAssetPath:C}}}),j={class:"card mb-10"},q={class:"card-body d-flex align-items-center py-8"},J={class:"d-flex h-50px w-50px h-lg-80px w-lg-80px flex-shrink-0 flex-center position-relative align-self-start align-self-lg-center mt-3 mt-lg-0"},Y=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"text-primary h-75px w-75px h-lg-100px w-lg-100px position-absolute opacity-5"},[e("path",{fill:"currentColor",d:"M10.2,21.23,4.91,18.17a3.58,3.58,0,0,1-1.8-3.11V8.94a3.58,3.58,0,0,1,1.8-3.11L10.2,2.77a3.62,3.62,0,0,1,3.6,0l5.29,3.06a3.58,3.58,0,0,1,1.8,3.11v6.12a3.58,3.58,0,0,1-1.8,3.11L13.8,21.23A3.62,3.62,0,0,1,10.2,21.23Z"})],-1),Z=e("div",{class:"ms-6"},[e("p",{class:"list-unstyled text-gray-600 fw-semobold fs-6 p-0 m-0"}," The layout builder is to assist your set and configure your preferred project layout specifications and preview it in real time and export the HTML template with its includable partials of this demo. The downloaded version does not include the assets folder since the layout builder's main purpose is to help to generate the final HTML code without hassle. ")],-1),Q={class:"card mb-10"},X={class:"card-header card-header-stretch"},ee={class:"nav nav-stretch nav-line-tabs fw-semobold border-0",role:"tablist",id:"kt_layout_builder_tabs",ref:"kt_layout_builder_tabs"},te={class:"nav-item"},se={class:"nav-item"},oe={class:"nav-item"},ie={class:"nav-item"},le={class:"nav-item"},ae={class:"card-body"},ne={class:"tab-content pt-3",id:"kt_tabs"},de={class:"form-group d-flex flex-stack"},ce=e("div",{class:"d-flex flex-column"},[e("h4",{class:"fw-bold text-dark"},"Keenicons Style"),e("div",null,[e("span",{class:"fs-7 fw-semibold text-muted"},"Select global UI icons style."),d(h(" ")+" "),e("a",{class:"fw-semibold",href:"https://preview.keenthemes.com/html/metronic/docs/icons/keenicons",target:"_blank"},"Learn more")])],-1),re={class:"d-flex flex-stack gap-3 mw-lg-600px","data-kt-buttons":"true","data-kt-buttons-target":".form-check-image,.form-check-input","data-kt-initialized":"1"},ue={class:"form-check-wrapper d-flex flex-center border-gray-200 border-2 mb-0 py-3 px-4"},pe=e("span",{class:"fs-7 fw-semibold ms-2 text-gray-500 parent-active-gray-700 parent-hover-gray-700"},"Duotone",-1),me={style:{visibility:"hidden",height:"0",width:"0",overflow:"hidden"}},he=["checked"],ge=e("div",{class:"form-check-wrapper d-flex flex-center border-gray-200 border-2 mb-0 py-3 px-4"},[e("i",{class:"ki-outline ki-picture fs-1 text-gray-500 parent-active-gray-700 parent-hover-gray-700"}),e("span",{class:"fs-7 fw-semibold ms-2 text-gray-500 parent-active-gray-700 parent-hover-gray-700"},"Outline")],-1),fe={style:{visibility:"hidden",height:"0",width:"0",overflow:"hidden"}},be=["checked"],_e=e("div",{class:"form-check-wrapper d-flex flex-center border-gray-200 border-2 mb-0 py-3 px-4"},[e("i",{class:"ki-solid ki-picture fs-1 text-gray-500 parent-active-gray-700 parent-hover-gray-700"}),e("span",{class:"fs-7 fw-semibold ms-2 text-gray-500 parent-active-gray-700 parent-hover-gray-700"},"Solid")],-1),ve={style:{visibility:"hidden",height:"0",width:"0",overflow:"hidden"}},ye=["checked"],ke=e("div",{class:"separator separator-dashed my-6"},null,-1),we={class:"row mb-10"},xe=e("label",{class:"col-lg-3 col-form-label text-lg-end"},"Illustration Set:",-1),Ie={class:"col-lg-8 pe-10"},Te={class:"row g-9 mb-3"},Se={class:"col-6"},ze={class:"btn btn-outline btn-outline-dashed btn-outline-default d-flex flex-column text-start p-6",for:"sketchy-1"},Ce={class:"d-flex mb-2"},$e={class:"form-check form-check-custom form-check-solid form-check-sm me-5"},Ae=e("span",{class:"fs-4 fw-bold"},"Sketchy",-1),Ve={class:"col-6"},Ue={class:"btn btn-outline btn-outline-dashed btn-outline-default d-flex flex-column text-start p-6",for:"sigma-1"},Me={class:"d-flex mb-2"},Fe={class:"form-check form-check-custom form-check-solid form-check-sm me-5"},Ne=e("span",{class:"fs-4 fw-bold"},"Sigma",-1),He={class:"col-6"},Le={class:"btn btn-outline btn-outline-dashed btn-outline-default d-flex flex-column text-start p-6",for:"dozzy-1"},Pe={class:"d-flex mb-2"},Be={class:"form-check form-check-custom form-check-solid form-check-sm me-5"},De=e("span",{class:"fs-4 fw-bold"},"Dozzy",-1),Ke={class:"col-6"},Ee={class:"btn btn-outline btn-outline-dashed btn-outline-default d-flex flex-column text-start p-6",for:"unitedpalms-1"},Ge={class:"d-flex mb-2"},Oe={class:"form-check form-check-custom form-check-solid form-check-sm me-5"},Re=e("span",{class:"fs-4 fw-bold"},"United Palms",-1),We=e("div",{class:"form-text text-muted"}," Select one of our in-house designed illustration set and apply globally for all apps and pages ",-1),je={class:"row mb-10"},qe=e("label",{class:"col-lg-3 col-form-label text-lg-end"},"Width:",-1),Je={class:"col-lg-9 col-xl-4"},Ye=e("option",{value:"fluid"},"Fluid",-1),Ze=e("option",{value:"fixed"},"Fixed",-1),Qe=[Ye,Ze],Xe=e("div",{class:"form-text text-muted"}," Select header width type. ",-1),et={class:"row mb-10"},tt=e("label",{class:"col-lg-3 col-form-label text-lg-end"},"Menu Icon:",-1),st={class:"col-lg-9 col-xl-4"},ot=e("option",{value:"keenthemes"},"Keenthemes Font Icons",-1),it=e("option",{value:"bootstrap"},"Bootstrap Font Icons",-1),lt=[ot,it],at=e("div",{class:"form-text text-muted"},"Select menu icon type.",-1),nt={class:"row mb-10"},dt=e("label",{class:"col-lg-3 col-form-label text-lg-end"},"Minimized:",-1),ct={class:"col-lg-9 col-xl-4"},rt={class:"switch switch-icon"},ut={class:"form-check form-check-custom form-check-solid form-switch mb-2"},pt=e("div",{class:"form-text text-muted"}," Minimize secondary panel by default ",-1),mt={class:"row mb-10"},ht=e("label",{class:"col-lg-3 col-form-label text-lg-end"},"Width:",-1),gt={class:"col-lg-9 col-xl-4"},ft=e("option",{value:"fluid"},"Fluid",-1),bt=e("option",{value:"fixed"},"Fixed",-1),_t=[ft,bt],vt=e("div",{class:"form-text text-muted"}," Select layout width type. ",-1),yt={class:"row mb-10"},kt=e("label",{class:"col-lg-3 col-form-label text-lg-end"},"Width:",-1),wt={class:"col-lg-9 col-xl-4"},xt=e("option",{value:"fluid"},"Fluid",-1),It=e("option",{value:"fixed"},"Fixed",-1),Tt=[xt,It],St=e("div",{class:"form-text text-muted"}," Select layout width type. ",-1),zt={class:"card-footer py-6"},Ct={class:"row"},$t=e("div",{class:"col-lg-3"},null,-1),At={class:"col-lg-9"},Vt=H('<input type="hidden" id="kt_layout_builder_tab" name="layout-builder[tab]"><input type="hidden" id="kt_layout_builder_action" name="layout-builder[action]"><button type="submit" id="kt_layout_builder_preview" class="btn btn-primary me-2"><span class="indicator-label"> Preview </span><span class="indicator-progress"> Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span></button>',3),Ut={class:"card"},Mt={class:"card-body p-10 p-lg-15"},Ft=e("h1",{class:"anchor fw-bold mb-5",id:"overview"},"Generated config",-1),Nt={class:"py-5"},Ht=e("code",null,"metronic/vue/theme/src/core/config/DefaultLayoutConfig.ts",-1);function Lt(t,s,r,u,a,S){const g=_("KTIcon"),z=_("CodeHighlighter");return I(),T(N,null,[e("div",j,[e("div",q,[e("div",J,[Y,m(g,{"icon-name":"wrench","icon-class":"fs-2x fs-lg-3x text-primary position-absolute"})]),Z])]),e("div",Q,[e("div",X,[e("ul",ee,[e("li",te,[e("a",{class:i(["nav-link cursor-pointer",{active:t.tabIndex===0}]),"data-bs-toggle":"tab",onClick:s[0]||(s[0]=o=>t.setActiveTab(o)),"data-tab-index":"0",role:"tab"}," Main ",2)]),e("li",se,[e("a",{class:i(["nav-link cursor-pointer",{active:t.tabIndex===1}]),"data-bs-toggle":"tab",onClick:s[1]||(s[1]=o=>t.setActiveTab(o)),"data-tab-index":"1",role:"tab"}," Header ",2)]),e("li",oe,[e("a",{class:i(["nav-link cursor-pointer",{active:t.tabIndex===3}]),"data-bs-toggle":"tab",onClick:s[2]||(s[2]=o=>t.setActiveTab(o)),"data-tab-index":"3",role:"tab"}," Aside ",2)]),e("li",ie,[e("a",{class:i(["nav-link cursor-pointer",{active:t.tabIndex===4}]),"data-bs-toggle":"tab",onClick:s[3]||(s[3]=o=>t.setActiveTab(o)),"data-tab-index":"4",role:"tab"}," Content ",2)]),e("li",le,[e("a",{class:i(["nav-link cursor-pointer",{active:t.tabIndex===5}]),"data-bs-toggle":"tab",onClick:s[4]||(s[4]=o=>t.setActiveTab(o)),"data-tab-index":"5",role:"tab"}," Footer ",2)])],512)]),e("form",{class:"form",id:"kt_layout_builder_form",onSubmit:s[19]||(s[19]=o=>t.submit(o))},[e("div",ae,[e("div",ne,[e("div",{class:i(["tab-pane",{active:t.tabIndex===0}]),id:"kt_builder_main"},[e("div",de,[ce,e("div",re,[e("label",{class:i([t.config.general.iconsType==="duotone"&&"active","form-check-image form-check-success w-100 parent-active parent-hover"])},[e("div",ue,[m(g,{"icon-type":"duotone","icon-name":"picture","icon-class":"fs-1 text-gray-500 parent-active-gray-700 parent-hover-gray-700"}),pe]),e("div",me,[l(e("input",{"onUpdate:modelValue":s[5]||(s[5]=o=>t.config.general.iconsType=o),class:"form-check-input",type:"radio",value:"duotone",checked:t.config.general.iconsType==="duotone"},null,8,he),[[n,t.config.general.iconsType]])])],2),e("label",{class:i([t.config.general.iconsType==="outline"&&"active","form-check-image form-check-success w-100 parent-active parent-hover"])},[ge,e("div",fe,[l(e("input",{"onUpdate:modelValue":s[6]||(s[6]=o=>t.config.general.iconsType=o),class:"form-check-input",type:"radio",value:"outline",name:"outline",checked:t.config.general.iconsType==="outline"},null,8,be),[[n,t.config.general.iconsType]])])],2),e("label",{class:i([t.config.general.iconsType==="solid"&&"active","form-check-image form-check-success w-100 parent-active parent-hover"])},[_e,e("div",ve,[l(e("input",{"onUpdate:modelValue":s[7]||(s[7]=o=>t.config.general.iconsType=o),class:"form-check-input",type:"radio",value:"solid",name:"solid",checked:t.config.general.iconsType==="solid"},null,8,ye),[[n,t.config.general.iconsType]])])],2)])]),ke,e("div",we,[xe,e("div",Ie,[e("div",Te,[e("div",Se,[e("label",ze,[e("span",Ce,[e("span",$e,[l(e("input",{class:"form-check-input",type:"radio","onUpdate:modelValue":s[8]||(s[8]=o=>t.config.illustrations.set=o),value:"sketchy-1",name:"illustrations-set",id:"sketchy-1"},null,512),[[n,t.config.illustrations.set]])]),Ae]),e("span",{style:c({backgroundImage:`url(${t.getAssetPath("/media/illustrations/sketchy-1/1.png")})`}),class:"d-block h-200px w-100 bgi-no-repeat bgi-size-contain bgi-position-center"},null,4)])]),e("div",Ve,[e("label",Ue,[e("span",Me,[e("span",Fe,[l(e("input",{class:"form-check-input",type:"radio","onUpdate:modelValue":s[9]||(s[9]=o=>t.config.illustrations.set=o),value:"sigma-1",name:"illustrations-set",id:"sigma-1"},null,512),[[n,t.config.illustrations.set]])]),Ne]),e("span",{style:c({backgroundImage:`url(${t.getAssetPath("/media/illustrations/sigma-1/1.png")})`}),class:"d-block h-200px w-100 bgi-no-repeat bgi-size-contain bgi-position-center"},null,4)])]),e("div",He,[e("label",Le,[e("span",Pe,[e("span",Be,[l(e("input",{class:"form-check-input",type:"radio","onUpdate:modelValue":s[10]||(s[10]=o=>t.config.illustrations.set=o),value:"dozzy-1",name:"illustrations-set",id:"dozzy-1"},null,512),[[n,t.config.illustrations.set]])]),De]),e("span",{style:c({backgroundImage:`url(${t.getAssetPath("/media/illustrations/dozzy-1/1.png")})`}),class:"d-block h-200px w-100 bgi-no-repeat bgi-size-contain bgi-position-center"},null,4)])]),e("div",Ke,[e("label",Ee,[e("span",Ge,[e("span",Oe,[l(e("input",{class:"form-check-input",type:"radio","onUpdate:modelValue":s[11]||(s[11]=o=>t.config.illustrations.set=o),value:"unitedpalms-1",name:"illustrations-set",id:"unitedpalms-1"},null,512),[[n,t.config.illustrations.set]])]),Re]),e("span",{style:c({backgroundImage:`url(${t.getAssetPath("/media/illustrations/unitedpalms-1/1.png")})`}),class:"d-block h-200px w-100 bgi-no-repeat bgi-size-contain bgi-position-center"},null,4)])])]),We])])],2),e("div",{class:i(["tab-pane",{active:t.tabIndex===1}]),id:"kt_builder_header"},[e("div",je,[qe,e("div",Je,[l(e("select",{class:"form-select form-select-solid","onUpdate:modelValue":s[12]||(s[12]=o=>t.config.header.width=o)},Qe,512),[[p,t.config.header.width]]),Xe])])],2),e("div",{class:i(["tab-pane",{active:t.tabIndex===3}]),id:"kt_builder_aside"},[e("div",et,[tt,e("div",st,[l(e("select",{class:"form-select form-select-solid","onUpdate:modelValue":s[13]||(s[13]=o=>t.config.aside.menuIcon=o)},lt,512),[[p,t.config.aside.menuIcon]]),at])]),e("div",nt,[dt,e("div",ct,[e("span",rt,[l(e("input",{type:"hidden","onUpdate:modelValue":s[14]||(s[14]=o=>t.config.aside.minimized=o)},null,512),[[U,t.config.aside.minimized]]),e("div",ut,[l(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":s[15]||(s[15]=o=>t.config.aside.minimized=o)},null,512),[[M,t.config.aside.minimized]])])]),pt])])],2),e("div",{class:i(["tab-pane",{active:t.tabIndex===4}]),id:"kt_builder_content"},[e("div",mt,[ht,e("div",gt,[l(e("select",{class:"form-select form-select-solid","onUpdate:modelValue":s[16]||(s[16]=o=>t.config.content.width=o)},_t,512),[[p,t.config.content.width]]),vt])])],2),e("div",{class:i(["tab-pane",{active:t.tabIndex===5}]),id:"kt_builder_footer"},[e("div",yt,[kt,e("div",wt,[l(e("select",{class:"form-select form-select-solid","onUpdate:modelValue":s[17]||(s[17]=o=>t.config.footer.width=o)},Tt,512),[[p,t.config.footer.width]]),St])])],2)])]),e("div",zt,[e("div",Ct,[$t,e("div",At,[Vt,e("button",{onClick:s[18]||(s[18]=o=>t.reset(o)),type:"button",id:"kt_layout_builder_reset",class:"btn btn-active-light btn-color-muted fw-semobold"}," Reset ")])])])],32)]),e("div",Ut,[e("div",Mt,[Ft,e("div",Nt,[d(" This config is used as a "),e("b",null,h(t.themeName),1),d(" layout config, you can update default values inside file "),Ht]),m(z,{lang:"json"},{default:F(()=>[d(h(t.config),1)]),_:1})])])],64)}const Kt=x(W,[["render",Lt]]);export{Kt as default};
