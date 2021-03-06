
function timer() {
	"use strict";
  var deadline = '2018-12-10';

  var getTimeRemaining = function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        hours,
        minutes,
        seconds;

    if (t <= 0) {
      hours = minutes = seconds = 0;
    } else {
      seconds = Math.floor(t / 1000 % 60);
      minutes = Math.floor(t / 1000 / 60 % 60);
      hours = Math.floor(t / (1000 * 60 * 60)) + new Date().getTimezoneOffset() / 60;
    }

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  var setClock = function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock);

    function updateClock() {
      var t = getTimeRemaining(endtime);
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
}

module.exports = timer;