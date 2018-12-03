let rubb = document.getElementById('rub');
let usdd = document.getElementById('usd');

rubb.addEventListener('input', () => {
    let request = new XMLHttpRequest();
    
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);
            usdd.value = rubb.value / data.usd;

        } else {
            usdd.value = "Что-то пошло не так!";
        }
    });
});