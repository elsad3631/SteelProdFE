import{an as n}from"./index-ac5572e4.js";const o=t=>n.get(`DeliveryType/Get?currentPage=0&filterRequest=${t}`,"").then(({data:e})=>e.data.map(r=>({id:r.id,name:r.name}))).catch(({response:e})=>(console.error(e),[]));export{o as g};
