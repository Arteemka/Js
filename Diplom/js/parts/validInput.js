


function validInput() {
	"use strict";
  let textArea = document.getElementsByTagName('textarea')[0],
        input = document.getElementsByTagName('input');
    for (let i = 0; i < input.length; i++) {
        if (input[i].name == 'phone' && valid == true) {
            input[i].addEventListener('keyup', function () {
                input[i].value = input[i].value.replace(/[^\+0-9\(\) ]/ig, '');
            });
        } else if (input[i].name == 'name' && valid == true) {
            input[i].addEventListener('keyup', function () {
                input[i].value = input[i].value.replace(/[^а-яА-ЯёЁ\s]/ig, '');
            });
        } else if (input[i].name == 'email' && valid == true) {
            input[i].addEventListener('keyup', function () {
                input[i].value = input[i].value.replace(/[^a-zA-Z0-9/.@.\.]/ig, '');
            });
        } else if (input[i].name == 'message' && valid == true) {
            input[i].addEventListener('keyup', function () {
                input[i].value = input[i].value.replace(/[^а-яА-ЯёЁ\s]/ig, '');
            });
        }
    }
    textArea.addEventListener('keyup', function () {
        textArea.value = textArea.value.replace(/[^а-яА-ЯёЁ\s]/ig, '');
    });
}

module.exports = validInput;