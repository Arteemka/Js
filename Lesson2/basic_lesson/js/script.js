function main() {
        'use strict';

        let money = prompt("Ваш бюджет на месяц?", "0");
        let time = prompt("Введите дату в формате YYYY-MM-DD", "0");
     
        let appData = {
        money,
        timeData: time,
        expenses: {},
        income: [],
        optionalExpenses: null,
        savings: false
        };

        // for(let i = 0; i < 2; i++){
        //         let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        //             b = prompt("Во сколько обойдется?", "");

        //         if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        //                 && a != '' && b != '' && a.length < 50){
        //                 appData.expenses[a] = b;
        //         }else {
        //                 console.log('Error!');
        //                 i--;
        //         }
        // }

        // let i = 0;
        // while(i < 2){
        //         let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        //             b = prompt("Во сколько обойдется?", "");

        //         if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        //                 && a != '' && b != '' && a.length < 50){
        //                 appData.expenses[a] = b;
        //                 i++;
        //         }else {
        //                 console.log('Error!');                                  
        //         }
        // }

        let i = 0;
        do{
                let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                    b = prompt("Во сколько обойдется?", "");

                if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
                        && a != '' && b != '' && a.length < 50){
                        appData.expenses[a] = b;
                        i++;
                }else {
                        console.log('Error!'); 
                                                       
                }
        }while(i < 2);

        alert(appData.money/30);

}

main();