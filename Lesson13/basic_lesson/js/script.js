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
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };



    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        validPhone = document.querySelectorAll('.popup-form__input'),
        inValid = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        contactform = document.getElementById("form");


    statusMessage.classList.add('status');
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
            let formData = new FormData(e);

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    request.addEventListener('readystatechange', function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                    request.send(data);
                });


            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
        });
    };
    inputForm(form);
    inputForm(contactform);


    //slider
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides();

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlides(n) {
        showSlides(slideIndex = n);
    }
    prev.addEventListener('click', function () {
        plusSlides(-1);
    });
    next.addEventListener('click', function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlides(i);
            }
        }
    });

    //calc

    let person = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        valueInput = document.querySelectorAll('.counter-block-input'),
        place = document.getElementById("select"),
        totalValue = document.getElementById('total'),
        personSum = +person.value,
        daysSum = +restDays.value,
        totalSum = 0,
        base = place.options[place.selectedIndex].value;

    valueInput.forEach(function (elem, i, mas) {
        mas[i].addEventListener('input', function () {
            mas[i].value = mas[i].value.replace(/^[^0-9]$/ig, '');
        });
    });

    totalValue.innerHTML = 0;

    function isInteger(num) {
        num = Number(num);
        return (num ^ 0) === num;
    }

    person.addEventListener('input', function () {
        personSum = +this.value;
        totalSum = (daysSum + personSum) * 4000;

        if ((person.value == '' || restDays.value == '') ||
            (person.value < 1 || restDays.value < 1) ||
            (!(isInteger(person.value)) || !(isInteger(restDays.value)))) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = totalSum * base;
        }
    });

    restDays.addEventListener('input', function () {
        daysSum = +this.value;
        totalSum = (daysSum + personSum) * 4000;

        if ((person.value == '' || restDays.value == '') ||
            (person.value < 1 || restDays.value < 1) ||
            (!(isInteger(person.value)) || !(isInteger(restDays.value)))) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = totalSum * base;
        }
    });

    place.addEventListener('change', function () {
        if ((person.value == '' || restDays.value == '') ||
            (person.value < 1 || restDays.value < 1) ||
            (!(isInteger(person.value)) || !(isInteger(restDays.value)))) {
            totalValue.innerHTML = 0;
        } else {
            base = place.options[place.selectedIndex].value;
            totalValue.innerHTML = totalSum * base;
        }
    });
});