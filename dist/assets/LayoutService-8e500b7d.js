var l=Object.defineProperty;var b=(o,t,d)=>t in o?l(o,t,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[t]=d;var s=(o,t,d)=>(b(o,typeof t!="symbol"?t+"":t,d),d);import{ap as n,I as f,aq as e,ag as i}from"./index-ac5572e4.js";const a=class a{static init(){this.bodyStore=n(),this.configStore=f(),a.emptyElementClassesAndAttributes(document.body),a.initLayout(),a.initHeader(),a.initToolbar(),a.initAside(),a.initFooter()}static initLayout(){this.bodyStore.addBodyAttribute({qualifiedName:"id",value:"kt_body"})}static initHeader(){e.get(i.value,"header.fixed.desktop")&&this.bodyStore.addBodyClassname("header-fixed"),e.get(i.value,"header.fixed.tabletAndMobile")&&this.bodyStore.addBodyClassname("header-tablet-and-mobile-fixed")}static initToolbar(){e.get(i.value,"toolbar.display")&&(this.bodyStore.addBodyClassname("toolbar-enabled"),e.get(i.value,"toolbar.fixed")&&this.bodyStore.addBodyClassname("toolbar-fixed"),this.bodyStore.addBodyClassname("toolbar-tablet-and-mobile-fixed"))}static initAside(){e.get(i.value,"aside.display")&&(this.bodyStore.addBodyClassname("aside-enabled"),e.get(i.value,"aside.minimized")&&e.get(i.value,"aside.toggle")&&this.bodyStore.addBodyAttribute({qualifiedName:"data-kt-aside-minimize",value:"on"}),e.get(i.value,"aside.fixed")&&this.bodyStore.addBodyClassname("aside-fixed"),e.get(i.value,"aside.minimized")&&this.bodyStore.addBodyAttribute({qualifiedName:"data-kt-aside-minimize",value:"on"}))}static initFooter(){e.get(i.value,"footer.width")==="fixed"&&this.bodyStore.addBodyClassname("footer-fixed")}static emptyElementClassesAndAttributes(t){t.className="";for(let d=t.attributes.length;d-- >0;)t.removeAttributeNode(t.attributes[d])}};s(a,"bodyStore"),s(a,"configStore");let r=a;export{r as L};