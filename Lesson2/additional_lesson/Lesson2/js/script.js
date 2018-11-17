function main(){
    'use strict';

  let arr = ['3456', '7892', '5237', '879', '375', '789','657'];

    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] == 3 || arr[i][0]== 7){
            console.log(arr[i]);
        }
    }
}

main();