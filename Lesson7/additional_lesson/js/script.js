function main() {
   'use strict';

   window.requestAnimationFrame(function () {
      return  window.requestAnimationFrame || 
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      }
   });

   let elem11 = document.createElement('div');
   elem11.id = "anim";
   document.body.appendChild(elem11);
   let elem12 = document.createElement('div');
   elem12.id = "anim1";
   document.body.appendChild(elem12);
   let elem13 = document.createElement('div');
   elem13.id = "anim2";
   document.body.appendChild(elem13);
   let elem14 = document.createElement('div');
   elem14.id = "anim3";
   document.body.appendChild(elem14);
   let elem15 = document.createElement('div');
   elem15.id = "anim4";
   document.body.appendChild(elem15);
   let elem16 = document.createElement('div');
   elem16.id = "anim5";
   document.body.appendChild(elem16);
   let btn1 = document.createElement('button');
   btn1.id = 'btn';
   btn1.textContent = "Click Me";
   document.body.appendChild(btn1);

   let elem = document.getElementById("anim"),
      elem1 = document.getElementById("anim1"),
      elem2 = document.getElementById("anim2"),
      elem3 = document.getElementById("anim3"),
      elem4 = document.getElementById("anim4"),
      elem5 = document.getElementById("anim5"),
      btn = document.getElementById("btn"),
      startTime;

   function when(time) {
      if (time === undefined){
         time = Date.now();}
      if (startTime === undefined){
         startTime = time;
      }

      elem.style.left = ((time - startTime) / 10 % 1200) + "px";
      elem1.style.left = ((time - startTime) / 10 % 1200) + "px";
      elem2.style.left = ((time - startTime) / 10 % 1200) + "px";
      elem3.style.left = ((time - startTime) / 10 % 1200) + "px";
      elem4.style.left = ((time - startTime) / 10 % 1200) + "px";
      elem5.style.left = ((time - startTime) / 10 % 1200) + "px";
   }



   btn.addEventListener("click", function () {
      (function animloop() {
         when();
         requestAnimationFrame(animloop, elem);
      })();
   });
}
main();