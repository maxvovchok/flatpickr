const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");const a={interval:null,start(){t.disabled=!0,e.disabled=!1,this.interval=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)},stop(){clearInterval(this.interval),e.disabled=!0,t.disabled=!1}};t.addEventListener("click",(()=>{a.start()})),e.addEventListener("click",(()=>{a.stop()}));
//# sourceMappingURL=01-color-switcher.6adab200.js.map