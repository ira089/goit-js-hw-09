const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),bodyColor:document.querySelector("body")};t.btnStart.addEventListener("click",(function(){t.btnStart.disabled=!0,t.btnStop.disabled=!1,o=setInterval((()=>{t.bodyColor.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.btnStop.addEventListener("click",(function(){clearInterval(o),t.btnStart.disabled=!1,t.btnStop.disabled=!0}));let o=null;
//# sourceMappingURL=01-color-switcher.0ff1cfad.js.map
