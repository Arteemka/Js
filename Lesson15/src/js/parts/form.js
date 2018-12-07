

function form() {
	"use strict";
  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
  var form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input'),
      validPhone = document.querySelectorAll('.popup-form__input'),
      inValid = document.getElementsByTagName('input'),
      statusMessage = document.createElement('div'),
      contactform = document.getElementById("form");
  statusMessage.classList.add('status');
  var valid = true;

  var _loop = function _loop(i) {
    if (inValid[i].type == 'tel' && valid == true) {
      inValid[i].addEventListener('keyup', function () {
        inValid[i].value = inValid[i].value.replace(/[^\+0-9\(\) ]/ig, '');
      });
    }
  };

  for (var i = 0; i < inValid.length; i++) {
    _loop(i);
  }

  var inputForm = function inputForm(e) {
    e.addEventListener('submit', function (event) {
      event.preventDefault();
      e.appendChild(statusMessage);
      var formData = new FormData(e);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
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
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postData(formData).then(function () {
        return statusMessage.innerHTML = message.loading;
      }).then(function () {
        return statusMessage.innerHTML = message.success;
      }).catch(function () {
        return statusMessage.innerHTML = message.failure;
      }).then(clearInput);
    });
  };

  inputForm(form);
  inputForm(contactform);
}

module.exports = form;