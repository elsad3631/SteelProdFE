import{av as r}from"./index-f4707fd9.js";const s={id:0,MaterialName:"",IdFac:"0",Dx:"0",Dy:"0",Lung:"0",Larg:"0",Str:"0",From:"",To:""},o=e=>r.get(`Marking/Get?currentPage=0&filterRequest=${e}`,"").then(({data:t})=>t.data).catch(({response:t})=>(console.log(t),[])),g=e=>r.get(`Marking/GetById?id=${e}`,"").then(({data:t})=>t).catch(({response:t})=>{console.log(t)});export{g as a,s as e,o as g};
