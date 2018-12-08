
function calc() {
  "use strict";
  var person = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      valueInput = document.querySelectorAll('.counter-block-input'),
      place = document.getElementById("select"),
      totalValue = document.getElementById('total'),
      personSum = +person.value,
      daysSum = +restDays.value,
      totalSum = 0,
      base = place.options[place.selectedIndex].value;
  valueInput.forEach(function (elem, i, mas) {
    mas[i].addEventListener('input', function () {
      mas[i].value = mas[i].value.replace(/^[^0-9]$/ig, '');
    });
  });
  totalValue.innerHTML = 0;

  function isInteger(num) {
    num = Number(num);
    return (num ^ 0) === num;
  }

  person.addEventListener('input', function () {
    personSum = +this.value;
    totalSum = (daysSum + personSum) * 4000;

    if (person.value == '' || restDays.value == '' || person.value < 1 || restDays.value < 1 || !isInteger(person.value) || !isInteger(restDays.value)) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = totalSum * base;
    }
  });
  restDays.addEventListener('input', function () {
    daysSum = +this.value;
    totalSum = (daysSum + personSum) * 4000;

    if (person.value == '' || restDays.value == '' || person.value < 1 || restDays.value < 1 || !isInteger(person.value) || !isInteger(restDays.value)) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = totalSum * base;
    }
  });
  place.addEventListener('change', function () {
    if (person.value == '' || restDays.value == '' || person.value < 1 || restDays.value < 1 || !isInteger(person.value) || !isInteger(restDays.value)) {
      totalValue.innerHTML = 0;
    } else {
      base = place.options[place.selectedIndex].value;
      totalValue.innerHTML = totalSum * base;
    }
  });
}

module.exports = calc;