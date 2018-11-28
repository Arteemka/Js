function main() {
    'use strict';

    let Data = new Date(),
        Day,
        Month,
        Year,
        Hours,
        Minutes,
        Seconds;

    Day = Data.getDate();
    Month = Data.getMonth() + 1;
    Year = Data.getFullYear();
    Hours = Data.getHours();
    Minutes = Data.getMinutes();
    Seconds = Data.getSeconds();

    if (Day < 10) {
        Day = '0' + Day;
    }

    if (Month < 10) {
        Month = '0' + Month;
    }

    if (Hours < 10) {
        Hours = '0' + Hours;
    }

    if (Minutes < 10) {
        Minutes = '0' + Minutes;
    }

    if (Seconds < 10) {
        Seconds = '0' + Seconds;
    }



    let p = document.createElement("p");
    p.id = "pan";
    document.body.appendChild(p);
    let date = (Hours + ":" + Minutes + ":" + Seconds + " " + Day + ":" + Month + ":" + Year);
    p.insertAdjacentHTML('beforeBegin', date);


    let div = document.createElement("div");
    div.id = "week";
    document.body.appendChild(div);
    let Week = document.getElementById("week");

    function getWeekDay(date) {
        date = date || new Date();
        var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        var day = date.getDay();
        return days[day];
    }

    Week.insertAdjacentHTML('beforeBegin', getWeekDay(Data));


    let input1 = document.createElement('input');
    input1.id = "input1";
    input1.placeholder = "11.01.2018";
    document.body.appendChild(input1);
    let isInput1 = document.getElementById("input1");

    let input2 = document.createElement('input');
    input2.id = "input2";
    input2.placeholder = "11.02.2018";
    document.body.appendChild(input2);
    let isInput2 = document.getElementById("input2");

    let input3 = document.createElement('input');
    input3.id = "input3";
    document.body.appendChild(input3);
    

    let button = document.createElement('button');
    button.id = "button";
    document.body.appendChild(button);
    document.getElementById("button").innerText = 'OK';
    let isButton = document.getElementById("button");

    isButton.addEventListener('click', function () {

        a(isInput1.value, isInput2.value);

        function a(m, b) {

            let firstarray = m.match(/(\d{2})\.(\d{2})\.(\d{4})/);
            let secondarray = b.match(/(\d{2})\.(\d{2})\.(\d{4})/);
            let first = Date.UTC(firstarray[3], firstarray[2] - 1, firstarray[1]);
            let second = Date.UTC(secondarray[3], secondarray[2] - 1, secondarray[1]);
            let days = Math.ceil((second - first) / (1000 * 60 * 60 * 24));
            document.getElementById('input3').value = Math.abs(days);
            
        }
    });
}

main();