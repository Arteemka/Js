function main() {
    'use strict';

    let Data = new Date(),
        Day,
        Month,
        Year,
        Hours,
        Minutes,
        Seconds;

        Day = Data.getDay();
        Month = Data.getMonth()+1;
        Year = Data.getFullYear();
        Hours = Data.getHours()+1;
        Minutes = Data.getMinutes();
        Seconds = Data.getSeconds();

        if (Day < 10) {
            Day = '0' + Day;}

        if (Month < 10){ Month = '0' + Month;}

        
        let p = document.createElement("p");
        p.id = "pan";
        document.body.appendChild(p); 
        let date = (Hours + ":" + Minutes + ":" + Seconds + " " + Day + ":" + Month + ":" + Year);
                      p.insertAdjacentHTML('beforeBegin', date);

                      let week = ["Monday", "Tuesday", 
                      "Wednesday", "Thursday",
                       "Friday", "Saturday", "Sunday"], 
                      i = 0;
      
          let div = document.createElement("div");
              div.id = "week";
              document.body.appendChild(div);
          let Week = document.getElementById("week"); 
      
          while (i < week.length) {
               if (i == Day - 1) {
                      let strong =  week[i] + "<br>";
                      Week.insertAdjacentHTML('beforeBegin', strong);
                      
                   }
                   i++;
          }
      

}
main();