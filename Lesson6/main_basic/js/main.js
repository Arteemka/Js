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
        expensesItem = document.getElementsByClassName('expenses-item'),
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

    let money, time, a, b, items, sum = 0;;

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
        dayValue.value = new Date(Date.parse(time)).getDay(); 
    
    });

    expensesBtn.addEventListener('click', function () {
        
        
        for (let i = 0; i < expensesItem.length; i++) {
            a = expensesItem[i].value;
            b = expensesItem[++i].value;
            if(a == '' || b == '' ){
                expensesBtn.disabled =false;
            } else {

            if ((typeof (a)) === 'string' && a != null &&
                b != null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
                sum += +b;
            } else {
               
                i--;
            }
        
        expensesValue.textContent = sum.toFixed();
        expensesBtn.disabled =true;
        }
    }
    
    });

    optionalExpensesBtn.addEventListener('click', function () {

        for (let i = 0; i <= optionalExpensesItem.length; i++) {
            
            let opt = optionalExpensesItem[i].value;
    
            if ((typeof (opt)) === 'string' && opt != null && opt != '' && opt.length < 50) {
                appData.optionalExpenses[i] = opt;
                optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
            } else {
               
                i--;
            }
          
    }
    });

    countBudgetBtn.addEventListener('click', function () {
        
        if (appData.budget != undefined) {
            appData.moneyPerDay = ((appData.budget - sum)/ 30).toFixed();
            dayBudgetValue.textContent = appData.moneyPerDay;
    
            if (appData.moneyPerDay < 100) {
                levelValue.textContent = "Минимальный уровень достатка";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = "Средний уровень достатка";
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = "Высокий уровень достатка";
            } else {
                levelValue.textContent = "Произошла ошибка!";
            }
        } else {
            dayBudgetValue.textContent = 'Произошла ошибка';}
       
    });

    chooseIncome.addEventListener('input', function () {

        items = chooseIncome.value;
        appData.income = items.split(", ");
        incomeValue.textContent = appData.income;
    });

    checkSavings.addEventListener('input', function () {

         if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
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