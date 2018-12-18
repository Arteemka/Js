


function timer() {
	"use strict";
  setTimeout(function () {
        popupConsultation.style.display = 'block';
        popupConsultation.classList.add('.more-splash');
        document.body.style.overflow = 'hidden';
    }, 60000);

}

module.exports = timer;