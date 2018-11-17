function main(){
    'use strict';

    let Week = document.getElementById('Week');
    let week = ["Monday", "Tuesday", 
                "Wednesday", "Thursday",
                 "Friday", "Saturday", "Sunday"],
                i = 0;
   
    while (i < week.length) {
	    if (i == 4) {
            var italics = "<i>" + week[i] +"</i>" + "<br>";
            Week.insertAdjacentHTML('beforeBegin', italics);
			i++;
        }else if (i == 5 || i == 6) {
            var strong = "<strong>" + week[i] + "</strong>" + "<br>";
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