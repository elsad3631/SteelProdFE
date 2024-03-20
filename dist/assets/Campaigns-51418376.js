import{g as c}from"./assets-2a66e18f.js";import{D as b}from"./Dropdown3-467b18f6.js";import{j as n,_ as r,l as i,m as d,n as g,p as s,w as a,B as e,A as l,F as w,C as m}from"./index-ac5572e4.js";const x=n({name:"card-2",components:{Dropdown3:b},props:{cardClasses:String,icon:String,title:String,content:String,color:String,arrow:String,footerData:String,footerText:String,indicatorValue:String,indicatorLabel:String},setup(){return{getAssetPath:c}}}),y={class:"card-header flex-nowrap border-0 pt-9"},$={class:"card-title m-0"},k={class:"symbol symbol-45px w-45px bg-light me-5"},S=["src"],P={href:"#",class:"fs-4 fw-semobold text-hover-primary text-gray-600 m-0"},C={class:"card-toolbar m-0"},A={type:"button",class:"btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},D={class:"card-body d-flex flex-column px-9 pt-6 pb-8"},T={class:"fs-2tx fw-bold mb-3"},L={class:"d-flex align-items-center flex-wrap mb-5 mt-auto fs-6"},V={class:"fw-semobold text-gray-400"},B={class:"d-flex align-items-center fw-semobold"},F={class:"badge bg-light text-gray-700 px-3 py-2 me-2"},M={class:"text-gray-400 fs-7"};function N(t,p,h,f,u,v){const o=i("KTIcon"),_=i("Dropdown3");return d(),g("div",{class:l(["card h-100",t.cardClasses])},[s("div",y,[s("div",$,[s("div",k,[s("img",{src:t.icon,alt:"image",class:"p-3"},null,8,S)]),s("a",P,a(t.title),1)]),s("div",C,[s("button",A,[e(o,{"icon-name":"category","icon-class":"fs-3 text-primary"})]),e(_)])]),s("div",D,[s("div",T,a(t.content),1),s("div",L,[e(o,{"icon-name":t.arrow,"icon-class":`fs-3 me-1 text-${t.color}`},null,8,["icon-name","icon-class"]),s("div",{class:l([`text-${t.color}`,"fw-bold me-2"])},a(t.footerData),3),s("div",V,a(t.footerText),1)]),s("div",B,[s("span",F,a(t.indicatorValue),1),s("span",M,a(t.indicatorLabel),1)])])],2)}const R=r(x,[["render",N]]),I=n({name:"profile-campaigns",components:{Card2:R},setup(){return{getAssetPath:c}}}),K=m('<div class="d-flex flex-wrap flex-stack my-5"><h2 class="fw-semobold my-2"> Campaigns <span class="fs-4 text-gray-400 ms-1">30 Days</span></h2><div class="d-flex align-items-center my-2"><div class="w-100px me-5"><select name="status" data-control="select2" data-hide-search="true" class="form-select form-select-white form-select-sm"><option value="1" selected>30 Days</option><option value="2">90 Days</option><option value="3">6 Months</option><option value="4">1 Year</option></select></div><button class="btn btn-primary btn-sm" data-bs-toggle="tooltip" title="Coming soon"> Plan Campaigns </button></div></div>',1),Y={class:"row g-6 g-xl-9"},j={class:"col-sm-6 col-xl-4"},z={class:"card h-100"},E={class:"col-sm-6 col-xl-4"},G={class:"card h-100"},q={class:"col-sm-6 col-xl-4"},H={class:"card h-100"},J={class:"col-sm-6 col-xl-4"},O={class:"card h-100"},Q={class:"col-sm-6 col-xl-4"},U={class:"card h-100"},W={class:"col-sm-6 col-xl-4"},X={class:"card h-100"},Z={class:"col-sm-6 col-xl-4"},ss={class:"card h-100"},ts={class:"col-sm-6 col-xl-4"},os={class:"card h-100"},es=m('<div class="d-flex flex-stack flex-wrap pt-10"><div class="fs-6 fw-semobold text-gray-700"> Showing 1 to 10 of 50 entries </div><ul class="pagination"><li class="page-item previous"><a href="#" class="page-link"><i class="previous"></i></a></li><li class="page-item active"><a href="#" class="page-link">1</a></li><li class="page-item"><a href="#" class="page-link">2</a></li><li class="page-item"><a href="#" class="page-link">3</a></li><li class="page-item"><a href="#" class="page-link">4</a></li><li class="page-item"><a href="#" class="page-link">5</a></li><li class="page-item"><a href="#" class="page-link">6</a></li><li class="page-item next"><a href="#" class="page-link"><i class="next"></i></a></li></ul></div>',1);function as(t,p,h,f,u,v){const o=i("Card2");return d(),g(w,null,[K,s("div",Y,[s("div",j,[s("div",z,[e(o,{"card-classes":"h-100",title:"Twitch Posts",icon:t.getAssetPath("media/svg/brand-logos/twitch.svg"),content:"$500.00",color:"success",arrow:"arrow-up-right","footer-data":"+40.5%","footer-text":"more impressions","indicator-value":"0.5%","indicator-label":"MRR"},null,8,["icon"])])]),s("div",E,[s("div",G,[e(o,{"card-classes":"h-100",title:"Twitter Followers",icon:t.getAssetPath("media/svg/brand-logos/twitter.svg"),content:"807k",color:"success",arrow:"arrow-up-right","footer-data":"+17.62%","footer-text":"Followers growth","indicator-label":"New trials","indicator-value":"5%"},null,8,["icon"])])]),s("div",q,[s("div",H,[e(o,{"card-classes":"h-100",title:"Spotify Listeners",icon:t.getAssetPath("media/svg/brand-logos/spotify.svg"),content:"1,073",color:"danger",arrow:"arrow-down-right","footer-data":"+10.45%","footer-text":"Less comments than usual","indicator-label":"Impressions","indicator-value":"40%"},null,8,["icon"])])]),s("div",J,[s("div",O,[e(o,{"card-classes":"h-100",title:"Pinterest Posts",icon:t.getAssetPath("media/svg/brand-logos/pinterest-p.svg"),content:"97",color:"success",arrow:"arrow-up-right","footer-data":"+26.1%","footer-text":"More posts","indicator-label":"Spend","indicator-value":"10%"},null,8,["icon"])])]),s("div",Q,[s("div",U,[e(o,{"card-classes":"h-100",title:"Github Contributes",icon:t.getAssetPath("media/svg/brand-logos/github.svg"),content:"4,109",color:"danger",arrow:"arrow-down-right","footer-data":"+32.8%","footer-text":"Less contributions","indicator-label":"Dispute","indicator-value":"40%"},null,8,["icon"])])]),s("div",W,[s("div",X,[e(o,{"card-classes":"h-100",title:"Youtube Subscribers",icon:t.getAssetPath("media/svg/brand-logos/youtube-3.svg"),content:"354",color:"success",arrow:"arrow-up-right","footer-data":"+29.45%","footer-text":"Subscribers growth","indicator-label":"Subscribers","indicator-value":"40%"},null,8,["icon"])])]),s("div",Z,[s("div",ss,[e(o,{"card-classes":"h-100",title:"Telegram Posts",icon:t.getAssetPath("media/svg/brand-logos/telegram.svg"),content:"566",color:"success",arrow:"arrow-up-right","footer-data":"+11.4%","footer-text":"more clicks","indicator-label":"Profit","indicator-value":"40%"},null,8,["icon"])])]),s("div",ts,[s("div",os,[e(o,{"card-classes":"h-100",title:"Reddit Awards",icon:t.getAssetPath("media/svg/brand-logos/reddit.svg"),content:"2.1M",color:"success",arrow:"arrow-down-right","footer-data":"-46.7%","footer-text":"more adds","indicator-label":"Retention","indicator-value":"0.0%"},null,8,["icon"])])])]),es],64)}const ns=r(I,[["render",as]]);export{ns as default};
