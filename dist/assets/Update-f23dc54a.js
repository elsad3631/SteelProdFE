import{g}from"./assets-ce4ccef5.js";import{m as _,u as k,H as w,r as h,o as V,at as v,_ as C,w as r,x as o,au as U,a0 as t,a6 as i,aj as n,A as m,L as D,F as R,q as d}from"./index-93335d48.js";import{e as y,a as A}from"./modulesXml-6854a25e.js";import{S as f}from"./sweetalert2-d38ee055.js";const M=_({name:"module-xml-details",components:{},setup(){const e=k(),l=w(),p=e.params.id;let a=h(!0);const u=h(y);async function b(){const c=await A(p);u.value=c||y,a.value=!1}return V(()=>{a.value=!0,b()}),{getAssetPath:g,item:u,saveChanges:()=>{a.value=!0,v.post("ModuleXml/Update",u.value).then(()=>{a.value=!1,f.fire({text:"Operazione completata!",icon:"success",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})}).catch(({response:c})=>{console.log(c),a.value=!1,f.fire({text:"Attenzione, si è verificato un errore.",icon:"error",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})})},deleteItem:()=>{a.value=!0,v.post(`Materials/Delete?id=${p}`,{}).then(()=>{setTimeout(()=>{a.value=!1,f.fire({text:"Operazione completata!",icon:"success",buttonsStyling:!1,confirmButtonText:"Continua!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}})},1e3),l.push({name:"accessories-list"})}).catch(({response:c})=>{console.log(c)})},loading:a}}}),N=o("div",{class:"card mb-5 mb-xl-10"},[o("div",{class:"card-header border-0"},[o("div",{class:"card-title m-0"},[o("h3",{class:"fw-bold m-0"},"Dettagli modulo")])])],-1),q={class:"collapse show"},B={class:"card-body border-top p-9"},S={class:"row mb-6"},X=o("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Nome modulo",-1),$={class:"col-lg-8 fv-row"},j={class:"row mb-6"},O=o("label",{class:"col-lg-4 col-form-label required fw-semobold fs-6"},"Nome xml Opera",-1),T={class:"col-lg-8 fv-row"},I=o("hr",null,null,-1),z={class:"row mb-6"},E=o("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"DX",-1),F={class:"col-lg-8 fv-row"},H={class:"row mb-6 justify-content-end"},L={class:"col-lg-4"},P=o("label",{class:"fs-6 fw-semobold mb-2"},"Arrotondamento per difetto",-1),G={class:"col-lg-4"},J=o("label",{class:"fs-6 fw-semobold mb-2"},"Arrotondamento per eccesso",-1),K=o("hr",null,null,-1),Q={class:"row mb-6"},W=o("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"DA",-1),Y={class:"col-lg-8 fv-row"},Z={class:"row mb-6 justify-content-end"},x={class:"col-lg-4"},oo=o("label",{class:"fs-6 fw-semobold mb-2"},"Arrotondamento per difetto",-1),eo={class:"col-lg-4"},lo=o("label",{class:"fs-6 fw-semobold mb-2"},"Arrotondamento per eccesso",-1),so=o("hr",null,null,-1),to={class:"row mb-6"},no=o("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"NRip",-1),io={class:"col-lg-8 fv-row"},ao={class:"row mb-6 justify-content-end"},ro={class:"col-lg-4"},mo=o("label",{class:"fs-6 fw-semobold mb-2"},"Arrotondamento per difetto",-1),co={class:"col-lg-4"},uo=o("label",{class:"fs-6 fw-semobold mb-2"},"Arrotondamento per eccesso",-1),po=o("hr",null,null,-1),fo={class:"row mb-6"},bo=o("label",{class:"col-lg-4 col-form-label fw-semobold fs-6"},"DxRip",-1),ho={class:"col-lg-8 fv-row"},vo={class:"row mb-6 justify-content-end"},yo={class:"col-lg-4"},go=o("label",{class:"fs-6 fw-semobold mb-2"},"Arrotondamento per difetto",-1),_o={class:"col-lg-4"},ko=o("label",{class:"fs-6 fw-semobold mb-2"},"Arrotondamento per eccesso",-1),wo=o("hr",null,null,-1),Vo={class:"row mb-6"},Co={class:"form-check form-switch form-check-custom form-check-solid"},Uo=o("label",{class:"form-check-label"}," Controllo sul range ",-1),Do={key:0,class:"row mb-6"},Ro={class:"col-lg-6"},Ao=o("label",{class:"fs-6 fw-semobold mb-2"},"Da",-1),Mo={class:"col-lg-6"},No=o("label",{class:"fs-6 fw-semobold mb-2"},"a",-1),qo=o("hr",null,null,-1),Bo={class:"row mb-6"},So={class:"form-check form-switch form-check-custom form-check-solid"},Xo=o("label",{class:"form-check-label"}," Controllo sul cliente ",-1),$o={key:1,class:"row mb-6"},jo={class:"fv-row"},Oo=o("hr",null,null,-1),To={class:"row mb-6"},Io={class:"form-check form-switch form-check-custom form-check-solid"},zo=o("label",{class:"form-check-label"}," Controllo sul materiale ",-1),Eo={key:2,class:"row mb-6"},Fo={class:"fv-row"},Ho=o("hr",null,null,-1),Lo={class:"row mb-6"},Po={class:"form-check form-switch form-check-custom form-check-solid"},Go=o("label",{class:"form-check-label"}," Controllo sul colore del materiale ",-1),Jo={key:3,class:"row mb-6"},Ko={class:"fv-row"},Qo=o("hr",null,null,-1),Wo={class:"row mb-6"},Yo={class:"form-check form-switch form-check-custom form-check-solid"},Zo=o("label",{class:"form-check-label"}," Controllo sul modello della grata ",-1),xo={key:4,class:"row mb-6"},oe={class:"fv-row"},ee=o("hr",null,null,-1),le={class:"card-footer d-flex justify-content-end py-6 px-9"},se=["data-kt-indicator"],te={key:0,class:"indicator-label"},ne={key:1,class:"indicator-progress"},ie=o("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1);function ae(e,l,p,a,u,b){return d(),r(R,null,[N,o("div",q,[o("form",{class:"form",novalidate:"",onSubmit:l[26]||(l[26]=U(s=>e.saveChanges(),["prevent"]))},[o("div",B,[o("div",S,[X,o("div",$,[t(o("input",{required:"",type:"text",class:"form-control form-control-lg",placeholder:"Nome","onUpdate:modelValue":l[0]||(l[0]=s=>e.item.name=s)},null,512),[[i,e.item.name]])])]),o("div",j,[O,o("div",T,[t(o("input",{required:"",type:"text",class:"form-control form-control-lg",placeholder:"Nome xml Opera","onUpdate:modelValue":l[1]||(l[1]=s=>e.item.nameXmlOpera=s)},null,512),[[i,e.item.nameXmlOpera]])])]),I,o("div",z,[E,o("div",F,[t(o("input",{type:"text",class:"form-control form-control-lg",placeholder:"DX","onUpdate:modelValue":l[2]||(l[2]=s=>e.item.dx=s)},null,512),[[i,e.item.dx]])])]),o("div",H,[o("div",L,[P,t(o("input",{class:"form-check-input ms-2","onUpdate:modelValue":l[3]||(l[3]=s=>e.item.roundDx=s),type:"checkbox"},null,512),[[n,e.item.roundDx]])]),o("div",G,[J,t(o("input",{class:"form-check-input ms-2","onUpdate:modelValue":l[4]||(l[4]=s=>e.item.ceilDx=s),type:"checkbox"},null,512),[[n,e.item.ceilDx]])])]),K,o("div",Q,[W,o("div",Y,[t(o("input",{type:"text",class:"form-control form-control-lg",placeholder:"DA","onUpdate:modelValue":l[5]||(l[5]=s=>e.item.da=s)},null,512),[[i,e.item.da]])])]),o("div",Z,[o("div",x,[oo,t(o("input",{class:"form-check-input ms-2","onUpdate:modelValue":l[6]||(l[6]=s=>e.item.roundDa=s),type:"checkbox"},null,512),[[n,e.item.roundDa]])]),o("div",eo,[lo,t(o("input",{class:"form-check-input ms-2","onUpdate:modelValue":l[7]||(l[7]=s=>e.item.ceilDa=s),type:"checkbox"},null,512),[[n,e.item.ceilDa]])])]),so,o("div",to,[no,o("div",io,[t(o("input",{type:"text",class:"form-control form-control-lg",placeholder:"NRip","onUpdate:modelValue":l[8]||(l[8]=s=>e.item.nRip=s)},null,512),[[i,e.item.nRip]])])]),o("div",ao,[o("div",ro,[mo,t(o("input",{class:"form-check-input ms-2","onUpdate:modelValue":l[9]||(l[9]=s=>e.item.roundNRip=s),type:"checkbox"},null,512),[[n,e.item.roundNRip]])]),o("div",co,[uo,t(o("input",{class:"form-check-input ms-2","onUpdate:modelValue":l[10]||(l[10]=s=>e.item.ceilNRip=s),type:"checkbox"},null,512),[[n,e.item.ceilNRip]])])]),po,o("div",fo,[bo,o("div",ho,[t(o("input",{type:"text",class:"form-control form-control-lg",placeholder:"DxRip","onUpdate:modelValue":l[11]||(l[11]=s=>e.item.dxRip=s)},null,512),[[i,e.item.dxRip]])])]),o("div",vo,[o("div",yo,[go,t(o("input",{class:"form-check-input ms-2","onUpdate:modelValue":l[12]||(l[12]=s=>e.item.roundDxRip=s),type:"checkbox"},null,512),[[n,e.item.roundDxRip]])]),o("div",_o,[ko,t(o("input",{class:"form-check-input ms-2","onUpdate:modelValue":l[13]||(l[13]=s=>e.item.ceilDxRip=s),type:"checkbox"},null,512),[[n,e.item.ceilDxRip]])])]),wo,o("div",Vo,[o("div",Co,[t(o("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":l[14]||(l[14]=s=>e.item.byRange=s)},null,512),[[n,e.item.byRange]]),Uo])]),e.item.byRange?(d(),r("div",Do,[o("div",Ro,[Ao,t(o("input",{required:"",class:"form-control ms-2","onUpdate:modelValue":l[15]||(l[15]=s=>e.item.from=s),type:"text"},null,512),[[i,e.item.from]])]),o("div",Mo,[No,t(o("input",{required:"",class:"form-control ms-2","onUpdate:modelValue":l[16]||(l[16]=s=>e.item.to=s),type:"text"},null,512),[[i,e.item.to]])])])):m("",!0),qo,o("div",Bo,[o("div",So,[t(o("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":l[17]||(l[17]=s=>e.item.byCustomer=s)},null,512),[[n,e.item.byCustomer]]),Xo])]),e.item.byCustomer?(d(),r("div",$o,[o("div",jo,[t(o("input",{required:"",type:"text",class:"form-control form-control-lg",placeholder:"Nome cliente","onUpdate:modelValue":l[18]||(l[18]=s=>e.item.customer=s)},null,512),[[i,e.item.customer]])])])):m("",!0),Oo,o("div",To,[o("div",Io,[t(o("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":l[19]||(l[19]=s=>e.item.byMaterial=s)},null,512),[[n,e.item.byMaterial]]),zo])]),e.item.byMaterial?(d(),r("div",Eo,[o("div",Fo,[t(o("input",{required:"",type:"text",class:"form-control form-control-lg",placeholder:"Nome materiale","onUpdate:modelValue":l[20]||(l[20]=s=>e.item.materialName=s)},null,512),[[i,e.item.materialName]])])])):m("",!0),Ho,o("div",Lo,[o("div",Po,[t(o("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":l[21]||(l[21]=s=>e.item.byMaterialColor=s)},null,512),[[n,e.item.byMaterialColor]]),Go])]),e.item.byMaterialColor?(d(),r("div",Jo,[o("div",Ko,[t(o("input",{required:"",type:"text",class:"form-control form-control-lg",placeholder:"Colore materiale","onUpdate:modelValue":l[22]||(l[22]=s=>e.item.materialColor=s)},null,512),[[i,e.item.materialColor]])])])):m("",!0),Qo,o("div",Wo,[o("div",Yo,[t(o("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":l[23]||(l[23]=s=>e.item.byModel=s)},null,512),[[n,e.item.byModel]]),Zo])]),e.item.byModel?(d(),r("div",xo,[o("div",oe,[t(o("input",{required:"",type:"text",class:"form-control form-control-lg",placeholder:"Modello della grata","onUpdate:modelValue":l[24]||(l[24]=s=>e.item.model=s)},null,512),[[i,e.item.model]])])])):m("",!0),ee]),o("div",le,[o("button",{type:"button",onClick:l[25]||(l[25]=s=>e.deleteItem()),class:"btn btn-danger btn-active-light-primary me-2"}," Elimina "),o("button",{"data-kt-indicator":e.loading?"on":null,class:"btn btn-lg btn-primary",type:"submit"},[e.loading?m("",!0):(d(),r("span",te," Salva modifiche ")),e.loading?(d(),r("span",ne,[D(" Attendere... "),ie])):m("",!0)],8,se)])],32)])],64)}const pe=C(M,[["render",ae]]);export{pe as default};
