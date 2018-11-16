function main() {
'use strict';

let i = 0,a,b,income = [];
let money = prompt("Ваш бюджет на месяц?", "0");
let time = prompt("Введите дату в формате YYYY-MM-DD", "0");

 while(i<2){
         a = prompt("Введите обязательную статью расходов в этом месяце", "0");
         b = prompt("Во сколько обойдется?", "0");
         i++;
 }

let appData = {
    money,
    timeData: time,
    expenses: a + ':' + b,
    income: income,
    optionalExpenses: null,
    savings: false
}

alert(appData.money/30);
}

main();