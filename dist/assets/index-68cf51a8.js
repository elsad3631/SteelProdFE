import{at as g}from"./index-ac5572e4.js";var j=Object.prototype.toString,d=function(t){var r=typeof t;return r==="undefined"?"undefined":t===null?"null":t===!0||t===!1||t instanceof Boolean?"boolean":r==="string"||t instanceof String?"string":r==="number"||t instanceof Number?"number":r==="function"||t instanceof Function?typeof t.constructor.name<"u"&&t.constructor.name.slice(0,9)==="Generator"?"generatorfunction":"function":typeof Array.isArray<"u"&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":(r=j.call(t),r==="[object RegExp]"?"regexp":r==="[object Date]"?"date":r==="[object Arguments]"?"arguments":r==="[object Error]"?"error":r==="[object Promise]"?"promise":b(t)?"buffer":r==="[object Set]"?"set":r==="[object WeakSet]"?"weakset":r==="[object Map]"?"map":r==="[object WeakMap]"?"weakmap":r==="[object Symbol]"?"symbol":r==="[object Map Iterator]"?"mapiterator":r==="[object Set Iterator]"?"setiterator":r==="[object String Iterator]"?"stringiterator":r==="[object Array Iterator]"?"arrayiterator":r==="[object Int8Array]"?"int8array":r==="[object Uint8Array]"?"uint8array":r==="[object Uint8ClampedArray]"?"uint8clampedarray":r==="[object Int16Array]"?"int16array":r==="[object Uint16Array]"?"uint16array":r==="[object Int32Array]"?"int32array":r==="[object Uint32Array]"?"uint32array":r==="[object Float32Array]"?"float32array":r==="[object Float64Array]"?"float64array":"object")};function b(e){return e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var a=d,m=function(t,r,n){if(n!=null&&a(n)!=="string")throw new TypeError('expected "prop" to be undefined or a string');var u=a(t),i=a(r);return n&&(u==="object"&&(t=t[n],u=a(t)),i==="object"&&(r=r[n],i=a(r))),u==="null"?i==="null"?0:i==="undefined"?-1:1:u==="undefined"?i==="null"?1:i==="undefined"?0:1:i==="null"||i==="undefined"||t<r?-1:t>r?1:0};/*!
 * get-value <https://github.com/jonschlinkert/get-value>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var A=function(e,t,r,n,u){if(!p(e)||!t)return e;if(t=s(t),r&&(t+="."+s(r)),n&&(t+="."+s(n)),u&&(t+="."+s(u)),t in e)return e[t];for(var i=t.split("."),c=i.length,f=-1;e&&++f<c;){for(var o=i[f];o[o.length-1]==="\\";)o=o.slice(0,-1)+"."+i[++f];e=e[o]}return e};function p(e){return e!==null&&(typeof e=="object"||typeof e=="function")}function s(e){return e?Array.isArray(e)?e.join("."):e:""}/*!
 * array-sort <https://github.com/jonschlinkert/array-sort>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var S=m,h=d,l=A;function w(e,t,r){if(e==null)return[];if(!Array.isArray(e))throw new TypeError("array-sort expects an array.");if(arguments.length===1)return e.sort();var n=I([].slice.call(arguments,1));return h(n[n.length-1])==="object"&&(r=n.pop()),e.sort(x(n,r))}function x(e,t){return t=t||{},function(n,u){for(var i=e.length,c=-1,f;++c<i&&(f=y(e[c],n,u),f===0););return t.reverse===!0?f*-1:f}}function y(e,t,r){return typeof e=="function"?e(t,r,y.bind(null,null)):e&&typeof t=="object"&&typeof r=="object"?y(null,l(t,e),l(r,e)):S(t,r)}function I(e){return[].concat.apply([],e)}var B=w;const O=g(B);export{O as a};
