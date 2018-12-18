

function form() {
	"use strict";
  let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };



    let form = document.querySelector('.form'),
        inputForm = form.getElementsByTagName('input'),
        formone = document.querySelector('.form-one'),
        formtwo = document.querySelector('.form-two'),
        inputForm1 = formone.getElementsByTagName('input'),
        inputForm2 = formtwo.getElementsByTagName('input'),

        statusMessage = document.createElement('div');



    statusMessage.classList.add('status');


    let inputFormm = function (e) {
        e.addEventListener('submit', function (event) {
            event.preventDefault();

            e.appendChild(statusMessage);


            let request = new XMLHttpRequest();
            request.open('POST', 'mailer/smart.php');
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
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            for (let i = 0; i < inputForm.length; i++) {
                inputForm[i].value = '';
            }
            for (let i = 0; i < inputForm1.length; i++) {
                inputForm1[i].value = '';
            }
            for (let i = 0; i < inputForm2.length; i++) {
                inputForm2[i].value = '';
            }
        });
    };
    inputFormm(form);
    inputFormm(formone);
    inputFormm(formtwo);



}

module.exports = form;