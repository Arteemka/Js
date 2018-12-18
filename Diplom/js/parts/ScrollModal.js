


function scrollModal() {
	"use strict";
  let b = document.getElementsByTagName('button'),
        check;

    let but = function () {
        for (let i = 0; i < b.length; i++) {
            b[i].onclick = function () {
                console.log(this.innerHTML);
            };
        }
    };
    if (but()) {
        check = false;
    } else {
        check = true;
    }
    console.log(check);
    if (check) {
        window.onscroll = function () {
            let clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
            let documentHeight = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
            let scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

            if ((documentHeight - clientHeight) <= scrollTop) {

                if (popupGift) {
                    popupGift.style.display = 'block';
                    popupGift.classList.add('.more-splash');
                    document.body.style.overflow = 'hidden';
                    elements.remove(elements);
                    document.body.style.overflow = '';

                }
            }

        }
    }

}

module.exports = scrollModal;