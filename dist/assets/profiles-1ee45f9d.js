import{at as r}from"./index-93335d48.js";const n=t=>r.get(`Profiles/Get?currentPage=0&filterRequest=${t}`,"").then(({data:e})=>e.data).catch(({response:e})=>(console.log(e),[])),l=t=>r.get(`Profiles/GetById?id=${t}`,"").then(({data:e})=>e).catch(({response:e})=>{console.log(e)});export{l as a,n as g};