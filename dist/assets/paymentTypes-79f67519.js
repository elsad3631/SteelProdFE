import{at as a}from"./index-93335d48.js";const o=r=>a.get(`PaymentType/Get?currentPage=0&filterRequest=${r}`,"").then(({data:e})=>e.data.map(t=>({id:t.id,name:t.name}))).catch(({response:e})=>(console.error(e),[]));export{o as g};
