function main() {
        'use strict';

        let i = 0,a,b,c,d,income = [];
        let money = prompt("Ваш бюджет на месяц?", "0");
        let time = prompt("Введите дату в формате YYYY-MM-DD", "0");

        a = prompt("Введите обязательную статью расходов в этом месяце", "0");
        b = prompt("Во сколько обойдется?", "0");
        c = prompt("Введите обязательную статью расходов в этом месяце", "0");
        d = prompt("Во сколько обойдется?", "0");
                

        let appData = {
        money,
        timeData: time,
        expenses: {},
        income: income,
        optionalExpenses: null,
        savings: false
        };

        appData.expenses[a] = b;
        appData.expenses[c] = d;


        console.log(appData.expenses);
        alert(appData.money/30);

}

main();