var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");let u=0,i=0;function l(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}const s={starPromises:document.querySelector("button"),form:document.querySelector(".form"),delayInput:document.querySelector('input[name="delay"]'),stepInput:document.querySelector('input[name="step"]'),amountInput:document.querySelector('input[name="amount"]')};s.starPromises.addEventListener("click",(function(e){e.preventDefault();const t=Number(s.stepInput.value),n=Number(s.amountInput.value),o=Number(s.delayInput.value);for(let e=0;e<n;e+=1)u=e+1,i=o+t*e,l(u,i).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.success(`❌ Rejected promise ${e} in ${t}ms`)}));s.form.reset()}));
//# sourceMappingURL=03-promises.833d6b2e.js.map
