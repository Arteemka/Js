function main(){
    'use strict';
    //1
    let str = "урок-3-был слишком легким";
    let Str = str[0].toUpperCase() + str.slice(1);
    console.log(Str);
   //2  
    Str = Str.replace(/-/g," ");
    console.log(Str);

    Str = Str.slice(Str.lastIndexOf("легким"));
    Str = Str.replace(/им/, "о");

    console.log(Str);

    let arr = [20,33,1, "Человек",2,3], sum = 0;   

    for(let i = 0; i < arr.length;i++){
        if(typeof(arr[i]) === "number"){
            sum += arr[i] ** 3;
        }

    }
    console.log(Math.sqrt(sum));
}

main();