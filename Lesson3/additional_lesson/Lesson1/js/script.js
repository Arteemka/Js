function main(){
    'use strict';
    //1
    let str = "урок-3-был слишком легким";
    let Str = str[0].toUpperCase() + str.slice(1);
    console.log(Str);
   //2  
    Str = Str.replace(/-/g," ");
    console.log(Str);

     let S = Str.slice(Str.lastIndexOf("легким"));
    let s = S.replace(/им/, "о");
    let a = Str.substr(0, 19);
             let cat = a.concat(s);
             console.log(cat);
    

    
    


    let arr = [20,33,1, "Человек",2,3], sum = 0;   

    for(let i = 0; i < arr.length;i++){
        if(typeof(arr[i]) === "number"){
            sum += arr[i]; 
               
        }
        
    }
     
     
        console.log(Math.pow(sum,3)); 
    console.log(Math.sqrt(sum));

    function add (text){
        if((typeof(text)) === 'string' ){
            text = text.trim();
            if(text.length > 50){
             let str = text.substr(0, 50);
             let point = "...";
             let cat = str.concat(point);
             console.log(cat);
            }else{
                console.log(text);
            }
            
        }else {
        	alert("Вы велли не строку");
        }
    }
    let text = prompt("Введите слово","");
    add(text);
}

main();