import{at as s}from"./index-93335d48.js";const o=t=>s.get(`DeliveryType/Get?currentPage=0&filterRequest=${t}`,"").then(({data:e})=>e.data.map(r=>({id:r.id,name:r.name}))).catch(({response:e})=>(console.error(e),[]));export{o as g};
