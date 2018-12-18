
function calc() {
  "use strict";
  
        var size = document.querySelector('#size'),
            material = document.querySelector('#material'),
            options = document.querySelector('#options'),
            promocode = document.querySelector('.promocode'),
            priceInput = document.querySelector('.calc-price');
        var sizeChange= {
          1: 500,
          2: 1000,
          3: 1500,
          4: 2000
        },
            materialChange = {
          1: 500,
          2: 1000,
          3: 1500
        },
            optionsChange = {
          1: 500,
          2: 1000,
          3: 2000
        };
      
        function change() {
          if (size.options.selectedIndex > 0 && material.options.selectedIndex > 0) {
            var price = sizeChange[size.options.selectedIndex] + materialChange[material.options.selectedIndex];
      
            if (options.options.selectedIndex > 0) {
              price = price + optionsChange[options.options.selectedIndex];
            }
      
            if (promocode.value == 'IWANTPOPART') {
              price = price * 0.7;
            }
      
            priceInput.textContent = price;
          } else {
            priceInput.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
          }
        }
      
        size.addEventListener('change', function () {
          change();
        });
        material.addEventListener('change', function () {
          change();
        });
        options.addEventListener('change', function () {
          change();
        });
        promocode.addEventListener('input', function () {
          change();
        });
      
}

module.exports = calc;