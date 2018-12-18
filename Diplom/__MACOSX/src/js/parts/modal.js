

function modal() {
	"use strict";
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      closes = document.querySelector('.popup-close');

  var modalS = function modalS() {
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
  var modal = document.getElementsByClassName("info")[0];
  modal.addEventListener("click", function (e) {
    var target = e.target;

    if (target.matches(".description-btn")) {
      modalS();
    }
  });
}

module.exports = modal;