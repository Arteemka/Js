function main(){
    'use strict';
    function StringNum(n) {
        n = String(n).split('').map(Number);
        return n;
    }

    let num = 33721, 
    result = 1,
    arr = StringNum(num);


    for (var i = 0; i < arr.length; i++) {
        result *= arr[i];
    }

    console.log(result);
    let a = result **3;
    let str = a.toString(10);
    let s = str.substr(0, 2);
    alert( Number.parseInt(s));
}

main();