(()=>{"use strict";(()=>{const e=document.getElementById("timer-days"),t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let l,s,r,c,i;const u=()=>{i=(()=>{let e=new Date("29 december 2024").getTime(),t=(new Date).getTime();if(t>=e)return{timeRemaining:0,days:0,hours:0,minutes:0,seconds:0};let n=(e-t)/1e3,o=Math.floor(n/60/60/24),i=Math.floor(n/60/60%24),u=Math.floor(n/60%60),d=Math.floor(n%60);return l=o>4?" Дней :":1===o?" День :":0===o?"":" Дня :",s=i>4?" Часа :":1===i?" Час :":0===i?"":" Часов :",r=u>4?" Минут :":1===u?" Минута :":0===u?"":" Минуты :",c=d>4?" Секунд ":1===d?" Секунда":0===d?"":" Секунды",{timeRemaining:n,days:o,hours:i,minutes:u,seconds:d}})();let u=i.days,a=i.hours,m=i.minutes,y=i.seconds;0===u&&0===a&&0===m&&0===y?(document.querySelector(".timer-action").textContent="К сожалению Акция закончилась",e.textContent="00 :",t.textContent="00 :",n.textContent="00 :",o.textContent="00"):function(){let p=u+l,g=a+s,h=m+r,f=y+c;""===l&&(p=null),""===s&&(g=null),""===r&&(h=null),""===c&&(f=null),e.textContent=u<10&&u>0?`0${p}`:p,t.textContent=a<10&&a>0?`0${g}`:g,n.textContent=m<10&&m>0?`0${h}`:h,o.textContent=y<10&&y>0?`0${f}`:f,i.timeRemaining<=0&&clearInterval(d)}()};u();const d=setInterval(u,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),l=()=>{t.classList.toggle("active-menu")};for(let e=0;e<o.length;e++);o.forEach((e=>{e.addEventListener("click",l)})),e.addEventListener("click",l),n.addEventListener("click",l)})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-close"),o=()=>{window.innerWidth>=768?(t.style.transform="scale(0)",t.style.opacity="0",setTimeout((()=>{t.style.display="none"}),300)):t.style.display="none"},l=()=>{t.style.display="block",window.innerWidth>=768?setTimeout((()=>{t.style.transform="scale(1)",t.style.opacity="1"}),10):(t.style.transform="none",t.style.opacity="1")};n.addEventListener("click",o),e.forEach((e=>{e.addEventListener("click",l)})),t.addEventListener("click",(e=>{e.target===t&&o()}))})()})();