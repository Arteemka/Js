
function burger() {
	"use strict";
    let burger = document.getElementsByClassName('burger')[0],
        li = document.getElementsByClassName('burger-menu');
   
    if (window.innerWidth <= 768) {
        console.log(burger);
        burger.addEventListener('click', function () {
            if (li[0].style.display == 'none' || li[0].style.display == '') {
                li[0].style.display = 'block';
            } else {
                li[0].style.display = 'none';
            }
        });
    } else {
        li[0].style.display = 'none';
    }
}

module.exports = burger;