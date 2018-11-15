'use strict';

let money = prompt("Ваш бюджет на месяц?", "0");
let time = prompt("Введите дату в формате YYYY-MM-DD", "0");

 
let income = [];
 income.push(prompt("Введите обязательную статью расходов в этом месяце", "0"));
 income.push(prompt("Во сколько обойдется?", "0"));
 income.push(prompt("Введите обязательную статью расходов в этом месяце", "0"));
 income.push(prompt("Во сколько обойдется?", "0"));

let appData = {
    money,
    timeData: time,
    expenses: {
        income : income
        },
        optionalExpenses: null,
        savings: false
}

//console.log(appData.expenses.income);
alert(appData.money/30);
