function main(){
    'use strict';

    let week = ["Monday", "Tuesday", 
                "Wednesday", "Thursday",
                 "Friday", "Saturday", "Sunday"], 
                 date = new Date(),
                 day = date.getDay(),
                i = 0;

    let div = document.createElement("div");
        div.id = "week";
        document.body.appendChild(div);
    let Week = document.getElementById("week"); 

    while (i < week.length) {
	     if(i == day - 1){
             if(i == 5 || i == 6){
                let strong = "<strong>"+ "<i>" + week[i] +"</i>"+"</strong>"+ "<br>";
                Week.insertAdjacentHTML('beforeBegin', strong);
                i++;
             }else{
                let strong = "<i>" + week[i] +"</i>"+ "<br>";
                Week.insertAdjacentHTML('beforeBegin', strong);
                i++;
             }
        }else if (i == 5 || i == 6) {
            var strong = "<strong>"+ week[i] +"</strong>"+ "<br>";
            Week.insertAdjacentHTML('beforeBegin', strong);
		    i++;
        }else {
            var parag = week[i] + "<br>";
            Week.insertAdjacentHTML('beforeBegin', parag);
			i++;
		}
    }

   
   
}

main();