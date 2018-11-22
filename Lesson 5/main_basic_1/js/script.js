let menuItem = document.getElementsByClassName('menu-item');

menuItem[1].innerHTML = menuItem[1].innerHTML.replace(/Третий/, 'Второй');
menuItem[2].innerHTML = menuItem[2].innerHTML.replace(/Второй/, 'Третий');

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