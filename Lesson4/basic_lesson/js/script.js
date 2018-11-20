function main() {
        'use strict';

        let money,time,a,b,items;

        function start() {
                money = prompt("Ваш бюджет на месяц?", "0");
                time = prompt("Введите дату в формате YYYY-MM-DD", "0");
        
                while (isNaN(money) || money === "" || money === null) {
                         money = prompt("Ваш бюджет на месяц?", "0");
                }
        
                
        }
        start();

     
        let appData = {
        money,
        timeData: time,
        expenses: {},
        income: [],
        optionalExpenses: {},
        savings: true,
        chooseExpenses: function() {
                for(let i = 0; i < 2; i++){
                        a = prompt("Введите обязательную статью расходов в этом месяце", "");
                        b = prompt("Во сколько обойдется?", "");
               
                       if((typeof(a)) === 'string' && a != null && 
                       b != null && a != '' && b != '' && a.length < 50){
                               appData.expenses[a] = b;
                               }else {
                               alert('Error!');
                               i--;
                               }
                       }
        },

        detectDayBudget: function() {
                appData.moneyPerDay = (appData.money / 30).toFixed();
                alert("Ежедневный буджет : " + appData.moneyPerDay);
        },

        detectLevel:function() {
                if(appData.moneyPerDay < 100){
                        console.log("Минимальный уровень достатка");
                }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
                        console.log("Средний уровень достатка");
                }else if(appData.moneyPerDay > 2000){
                        console.log("Высокий уровень достатка");
                }else {
                        console.log("Произошла ошибка!");
                }
        },

        checkSavings: function() {
                if(appData.savings == true){
                        let save = +prompt("Какова сумма накоплений?", ""),
                            percent = +prompt("Под какой процент ?", "");

                        appData.monthInCome = save/100/12*percent;
                        alert("Доход в месяц с вашего депозита? " + appData.monthInCome);
                }
        },
        
        chooseOptExpenses:function() {
                for(let i = 1; i <= 3; i++){
                        let a = prompt("Статья необязательных расходов?", "");

                        if((typeof(a)) === 'string' && a != null && a != '' && a.length < 50){
                                appData.optionalExpenses[i] = a;
                        }else {
                                alert('Error!');
                                i--;
                        }
                }
        },

        chooseInCome:function() {
                do {
		        items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
		} while ((typeof(items)) !== 'string' || items === null || items === '');

                appData.income = items.split(", ");
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
                console.log("Способы доп. заработка: ");
		appData.income.forEach(function(item, i) {
		console.log((i+1) + ':' + item);
		});
                 
        }
};            

        for(let key in appData){
                console.log('Наша программа включает в себя данные:'+ key);
        }
}

main();
