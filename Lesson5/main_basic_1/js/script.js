function main() {
    'use strict';

    let menu = document.getElementsByClassName('menu');
    let menuItem = document.getElementsByClassName('menu-item');

    menu[0].insertBefore(menuItem[1], menuItem[3]);



    let newLi = document.createElement('li');
    newLi.classList.add('menu-item');
    newLi.innerHTML = 'Пятый пункт';

    document.getElementsByClassName('menu')[0].appendChild(newLi);

    document.body.style.background =
        "url(./img/apple_true.jpg) center no-repeat";

    document.getElementById('title').innerHTML =
        "Мы продаем только подлинную технику Apple";

    let column = document.getElementsByClassName('column')[1];
    let adv = document.getElementsByClassName('adv')[0];
    column.removeChild(adv);

    let opinion = prompt('Как Вы относитесь к технике Apple?');
    let answer = document.getElementById('prompt');
    answer.innerHTML = opinion;
}
main();