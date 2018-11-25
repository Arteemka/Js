function main() {
    'use strict';

    let startButton = document.getElementById('start'),
        budgetValue = document.getElementsByClassName('budget-value')[0],
        dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
        levelValue = document.getElementsByClassName('level-value')[0],
        expensesValue = document.getElementsByClassName('expenses-value')[0],
        optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
        incomeValue = document.getElementsByClassName('income-value')[0],
        monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
        yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
        expensesItem = document.body.querySelectorAll('.expenses-item'),
        expensesBtn = document.getElementsByTagName('button')[0],
        optionalExpensesBtn = document.getElementsByTagName('button')[1],
        countBudgetBtn = document.getElementsByTagName('button')[2],
        optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
        chooseIncome = document.querySelector('.choose-income'),
        checkSavings = document.querySelector('.checksavings'),
        chooseSum = document.querySelector('.choose-sum'),
        choosePercent = document.querySelector('.choose-percent'),
        yearValue = document.querySelector('.year-value'),
        monthValue = document.querySelector('.month-value'),
        dayValue = document.querySelector('.day-value');



    expensesBtn.disabled = true;
    optionalExpensesBtn.disabled = true;
    countBudgetBtn.disabled = true;
    expensesBtn.style.backgroundImage = "linear-gradient(336deg,#ccc,#ccc)";
    optionalExpensesBtn.style.backgroundImage = "linear-gradient(336deg,#ccc,#ccc)";
    countBudgetBtn.style.backgroundImage = "linear-gradient(336deg,#ccc,#ccc)";

    let money, time, sum = 0;

    


    startButton.addEventListener('click', function () {

        time = prompt("Введите дату в формате YYYY-MM-DD", "0");
        money = prompt("Ваш бюджет на месяц?", "0");

        while (isNaN(money) || money === "" || money === null) {
            money = prompt("Ваш бюджет на месяц?", "0");
        }

        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money;
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDate();

        expensesBtn.disabled = false;
        optionalExpensesBtn.disabled = false;
        countBudgetBtn.disabled = false;

        expensesBtn.style.backgroundImage = "linear-gradient(336deg,#ffbd75,#ff964b)";
        optionalExpensesBtn.style.backgroundImage = "linear-gradient(336deg,#ffbd75,#ff964b)";
        countBudgetBtn.style.backgroundImage = "linear-gradient(336deg,#ffbd75,#ff964b)";

    });

    expensesBtn.addEventListener('click', function () {

        let check = false;
        expensesItem.forEach(function (item) {

            if (item.value != '' && item.value != null) {
                check = true;
                item.style.border = "1px solid #fff";
            } else {
                check = false;
                item.style.border = "1px solid red";
            }
        });

        if (check) {
            for (let i = 0; i < expensesItem.length; i++) {
                let a = expensesItem[i].value,
                    b = expensesItem[++i].value;

                if ( !isNaN(b) && (typeof (a)) === 'string' && a != null &&
                    b != null && a != '' && b != '' && a.length < 50) {
                    appData.expenses[a] = b;
                    sum += +b;
                } else {
               
                    return alert('Неправельно введена цена. Введите число!');
                }
            }
            expensesValue.textContent = sum.toFixed();
        }
    });



    optionalExpensesBtn.addEventListener('click', function () {

        let check = false;
        
        expensesItem.forEach(function (item) {

            if (item.value != '' && item.value != null) {
                check = true;
                item.style.border = "1px solid #fff";
            } else {
                check = false;
                item.style.border = "1px solid red";
            }
        });

        function isRegex(reg) {
            var pattern = /^[а-яА-ЯЁё\s]+$/;
            return pattern.test(reg);
        }
        

        if (check) {
            let string = '';

            for (let i = 0; i < optionalExpensesItem.length; i++) {
                let opt = optionalExpensesItem[i].value;
                if (isRegex(optionalExpensesItem[i].value)) {
                    appData.optionalExpenses[i] = opt;
                    string += opt + ' ';
                } else {
                    return alert('Неправельно введена строка. Введите только русскую кириллицу!');
                }
            }
            optionalexpensesValue.textContent = string;


        }
    });

    countBudgetBtn.addEventListener('click', function () {

        let check = false;
        expensesItem.forEach(function (item) {
            if (item.value != '' && item.value != null) {
                check = true;
                item.style.border = "1px solid #fff";
            } else {
                check = false;
                item.style.border = "1px solid red";
            }
        });

        if (check) {
            if (appData.budget != undefined) {
                appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();
                if (appData.moneyPerDay > 0 && appData.moneyPerDay < 100) {
                    levelValue.textContent = "Минимальный уровень достатка";
                    dayBudgetValue.textContent = appData.moneyPerDay;
                } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                    levelValue.textContent = "Средний уровень достатка";
                    dayBudgetValue.textContent = appData.moneyPerDay;
                } else if (appData.moneyPerDay > 2000) {
                    levelValue.textContent = "Высокий уровень достатка";
                    dayBudgetValue.textContent = appData.moneyPerDay;
                } else {
                    levelValue.textContent = "Произошла ошибка!";
                }
            } else {
                dayBudgetValue.textContent = 'Произошла ошибка';
            }
        }

    });

    chooseIncome.addEventListener('input', function () {

        let items = chooseIncome.value;
        appData.income = items.split(", ");
        incomeValue.textContent = appData.income;
    });

    chooseSum.style.backgroundColor = "#ccc";
    choosePercent.style.backgroundColor = "#ccc";
    chooseSum.setAttribute("readonly", true);
    choosePercent.setAttribute("readonly", true);

    checkSavings.addEventListener('input', function () {

        checkSavings = false;

        if (appData.savings == true) {
            appData.savings = false;
            chooseSum.style.backgroundColor = "#ccc";
            choosePercent.style.backgroundColor = "#ccc";
            chooseSum.setAttribute("readonly", true);
            choosePercent.setAttribute("readonly", true);
            chooseSum.value = '';
            choosePercent.value = '';
        } else {
            appData.savings = true;
            chooseSum.style.backgroundColor = "#fff";
            choosePercent.style.backgroundColor = "#fff";
            chooseSum.removeAttribute("readonly");
            choosePercent.removeAttribute("readonly");
        }
    });

    chooseSum.addEventListener('input', function () {

        if (appData.savings == true) {
            let sum = +chooseSum.value,
                percent = +choosePercent.value;

            appData.monthInCome = sum / 100 / 12 * percent;
            appData.yearInCome = sum / 100 * percent;

            monthsavingsValue.textContent = appData.monthInCome.toFixed(1);
            yearsavingsValue.textContent = appData.yearInCome.toFixed(1);
        }
    });

    choosePercent.addEventListener('input', function () {

        if (appData.savings == true) {
            let sum = +chooseSum.value,
                percent = +choosePercent.value;

            appData.monthInCome = sum / 100 / 12 * percent;
            appData.yearInCome = sum / 100 * percent;

            monthsavingsValue.textContent = appData.monthInCome.toFixed(1);
            yearsavingsValue.textContent = appData.yearInCome.toFixed(1);
        }
    });

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        income: [],
        optionalExpenses: {},
        savings: false,

    };

    for (let key in appData) {
        console.log('Наша программа включает в себя данные:' + key);
    }

  
}
main();