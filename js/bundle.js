!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(2)},function(e,n,t){},function(e,n,t){"use strict";t.r(n);t(1);!function(){if(window.innerWidth<=768){new Swiper(".swiper",{direction:"horizontal",loop:!0,initialSlide:0,slidesPerGroup:1,allowTouchMove:!0,simulateTouch:!0,slidesPerView:1.5,spaceBetween:15,mousewheel:{releaseOnEdges:!0},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar",clickable:!0},watchOverflow:!0})}if(window.innerWidth<=1440){document.getElementById("hideButton");const e=document.getElementById("toggleButton"),n=document.querySelectorAll(".hidden");e.addEventListener("click",()=>{n.forEach(e=>{e.classList.toggle("hidden")})})}if(window.innerWidth<=7680){document.getElementById("hideButton");const e=document.getElementById("toggleButton"),n=document.querySelectorAll(".hiddenmd");e.addEventListener("click",()=>{n.forEach(e=>{e.classList.toggle("hiddenmd")}),e.textContent.includes("Показать все")?e.innerHTML='<img src="./img/expand1.png">Скрыть':e.innerHTML='<img src="./img/expand.png">Показать все'})}}(),function(){if(window.innerWidth<=768){new Swiper(".swiper2",{direction:"horizontal",loop:!0,initialSlide:0,slidesPerGroup:1,allowTouchMove:!0,simulateTouch:!0,slidesPerView:1.5,spaceBetween:15,mousewheel:{releaseOnEdges:!0},pagination:{el:".swiper-pagination2",clickable:!0},navigation:{nextEl:".swiper-button-next2",prevEl:".swiper-button-prev2"},scrollbar:{el:".swiper-scrollbar2",clickable:!0},watchOverflow:!0})}if(window.innerWidth<=1440){document.getElementById("hidehideButton");const e=document.getElementById("toggletoggleButton"),n=document.querySelectorAll(".hidden2");e.addEventListener("click",()=>{n.forEach(e=>{e.classList.toggle("hidden2")})})}if(window.innerWidth<=7680){document.getElementById("hidehideButton");const e=document.getElementById("toggletoggleButton"),n=document.querySelectorAll(".hiddenmdmd");e.addEventListener("click",()=>{n.forEach(e=>{e.classList.toggle("hiddenmdmd")}),e.textContent.includes("Показать все")?e.innerHTML='<img src="./img/expand1.png">Скрыть':e.innerHTML='<img src="./img/expand.png">Показать все'})}}(),function(){if(window.innerWidth<=768){new Swiper(".swiper3",{direction:"horizontal",loop:!0,initialSlide:0,slidesPerGroup:1,allowTouchMove:!0,simulateTouch:!0,slidesPerView:1.5,spaceBetween:15,mousewheel:{releaseOnEdges:!0},pagination:{el:".swiper-pagination3",clickable:!0},navigation:{nextEl:".swiper-button-next3",prevEl:".swiper-button-prev3"},scrollbar:{el:".swiper-scrollbar3",clickable:!0},watchOverflow:!0})}}(),function(){const e=document.querySelector("nav"),n=document.querySelectorAll(".menu-icon"),t=document.querySelector(".overlay"),o=document.querySelector(".nav-header__burger");n.forEach(n=>{n.addEventListener("click",()=>{e.classList.toggle("open")})}),t.addEventListener("click",()=>{e.classList.remove("open")}),o.addEventListener("click",()=>{e.classList.remove("open")})}(),function(){const e=document.querySelector(".container"),n=document.querySelectorAll(".nav-icon__repair"),t=document.querySelector(".overlay_right"),o=document.querySelector(".container_close");n.forEach(n=>{n.addEventListener("click",()=>{e.classList.toggle("open")})}),t.addEventListener("click",()=>{e.classList.remove("open")}),o.addEventListener("click",()=>{e.classList.remove("open")})}(),function(){const e=document.querySelector(".container_call"),n=document.querySelectorAll(".nav-icon__check"),t=document.querySelector(".overlay_right_call"),o=document.querySelector(".container_call__close");n.forEach(n=>{n.addEventListener("click",()=>{e.classList.toggle("open")})}),t.addEventListener("click",()=>{e.classList.remove("open")}),o.addEventListener("click",()=>{e.classList.remove("open")})}(),console.log("Works!")}]);
//# sourceMappingURL=bundle.js.map