window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', function (event) {
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
    let deadline = '2018-11-27';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Math.abs(Date.parse(new Date())),
            hours,
            minutes,
            seconds;

        if (t <= 0) {
            hours = minutes = seconds = 0;
        } else {
            seconds = Math.floor((t / 1000) % 60);
            minutes = Math.floor((t / 1000 / 60) % 60);
            hours = Math.floor((t / (1000 * 60 * 60)));
        }

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds

        };
    }

    function setClock(id, endtime) {
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
    }
    setClock('timer', deadline);

    //scroll
    function isScroll(options) {
        let start = performance.now();
        requestAnimationFrame(function isScroll(time) {
            let timeF = (time - start) / options.duration ;
            if (timeF > 1) {
                timeF = 1;
            }
            let progress = options.timing(timeF);
            options.draw(progress);
            if (timeF < 1) {
                requestAnimationFrame(isScroll);
            }
        });
    }

    function circ(timeF) {
        return 1 - Math.sin(Math.acos(timeF));
    }

    function isOut(timing) {
        return function (timeF) {
            return 1 - timing(1 - timeF);
        };
    }

    let circOut = isOut(circ),
        menu = document.querySelector("nav ul");

    menu.addEventListener("click", function (e) {
        let li = e.target.closest("li");
        e.preventDefault();
        if (li) {
            let myTime = 10000;
            let elem = document.querySelector(e.target.getAttribute("href"));
            isScroll({
                duration: myTime,
                timing: circOut,
                draw: function (progress) {
                    window.scrollBy(0, (progress *
                        (elem.getBoundingClientRect().top - menu.offsetHeight)));
                
                    }
            });
        }
    });
    
});