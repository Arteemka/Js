let p = document.createElement("p");
    p.id = "time";
    document.body.appendChild(p);
let a = document.getElementById('time');

function startTime() {
    var date = new Date();
    var hours = date.getHours() + 1;
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    a.innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(startTime, 1000);
  }
  a.onload = startTime();
