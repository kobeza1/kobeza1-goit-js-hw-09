function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequire7bc7=r);var l=r("eWCmQ");const s=document.querySelector("form"),{elements:{delay:u,step:d,amount:a}}=s;function f(e,o){const n=Math.random()>.3;return new Promise(((i,t)=>{setTimeout((()=>{n?i({position:e,delay:o}):t({position:e,delay:o})}),o)}))}s.addEventListener("submit",(function(o){o.preventDefault();let n=Number(u.value);const t=Number(d.value),r=Number(a.value);for(i=1;i<=r;i+=1)f(i,n).then((({position:o,delay:n})=>{console.log(`✅ Fulfilled promise ${o} in ${n}ms`),e(l).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{console.log(`❌ Rejected promise ${o} in ${n}ms`),e(l).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)})),n+=t}));
//# sourceMappingURL=03-promises.909cb4f4.js.map