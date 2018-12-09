window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    //таймер
    let deadline = '2018-11-29';

    let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            hours,
            minutes,
            seconds;


        if (t <= 0) {
            hours = minutes = seconds = 0;
        } else {
            seconds = Math.floor((t / 1000) % 60);
            minutes = Math.floor((t / 1000 / 60) % 60);
            hours = Math.floor((t / (1000 * 60 * 60))) +
                new Date().getTimezoneOffset() / 60;
        }


        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds

        };
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.hours < 10) {
                hours.textContent = "0" + t.hours;
            } else {
                hours.textContent = t.hours;
            }
            if (t.minutes < 10) {
                minutes.textContent = "0" + t.minutes;
            } else {
                minutes.textContent = t.minutes;
            }
            if (t.seconds < 10) {
                seconds.textContent = "0" + t.seconds;
            } else {
                seconds.textContent = t.seconds;
            }

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
        updateClock();
    };
    setClock('timer', deadline);

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        closes = document.querySelector('.popup-close');


    let modalS = function () {
        overlay.style.display = 'block';
        overlay.classList.add('.more-splash');
        document.body.style.overflow = 'hidden';
    };

    more.addEventListener('click', function () {
        modalS();
    });

    closes.addEventListener('click', function () {

        overlay.style.display = 'none';
        more.classList.remove('.more-splash');
        document.body.style.overflow = '';
    });


    let modal = document.getElementsByClassName("info")[0];

    modal.addEventListener("click", (e) => {
        let target = e.target;
        if (target.matches(".description-btn")) {
            modalS();
        }
    });

    //form       
    let message = {
        loading: './img/load.png',
        success: './img/succes.png',
        failure: './img/err.svg'
    };



    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        validPhone = document.querySelectorAll('.popup-form__input'),
        inValid = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        contactform = document.getElementById("form"),
        pic = document.createElement("img");

        pic.style.width = '100px';
        pic.style.height = '100px';
        pic.style.marginLeft = '200px';
      
        statusMessage.classList.add("status");
        statusMessage.style.marginTop = "10px";
    let valid = true;
    for (let i = 0; i < inValid.length; i++) {
        if (inValid[i].type == 'tel' && valid == true) {
            inValid[i].addEventListener('keyup', function () {
                inValid[i].value = inValid[i].value.replace(/[^\+0-9\(\) ]/ig, '');
            });
        }
    }

    let inputForm = function (e) {
        e.addEventListener('submit', function (event) {
            event.preventDefault();

            e.appendChild(statusMessage);


            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            let formData = new FormData(e);
            let obj = {}; // создаем объект для формата JSON
            formData.forEach(function (value, key) {
                obj[key] = value;
            });

            let json = JSON.stringify(obj);
            request.send(json);


            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                    pic.src = message.loading;
                    statusMessage.appendChild(pic);
                } else if (request.readyState === 4 && request.status == 200) {
                    pic.src = message.success;
                    statusMessage.appendChild(pic);
                } else {
                    pic.src = message.failure;
                    statusMessage.appendChild(pic);
                   
                }
            });

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        });
    };
    inputForm(form);
    inputForm(contactform);
});