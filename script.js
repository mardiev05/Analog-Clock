var hourEl = document.querySelector(".hour");
var minEl = document.querySelector(".min");
var secEl = document.querySelector(".sec");
var dateEl = document.querySelector(".date");

setInterval(function analogClock() {
    var currentTime = new Date();
    console.log(currentTime);
    var secDeg = (currentTime.getSeconds() / 60) * 360 - 90;
    var minDeg = (currentTime.getMinutes() / 60) * 360 - 90;
    var hourDeg = (currentTime.getHours() / 12) * 360 - 90;
    var dateDeg = currentTime.getMonth() + 1;
    secEl.style.transform = `rotate(${secDeg}deg)`;
    minEl.style.transform = `rotate(${minDeg}deg)`;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    dateEl.innerHTML = dateDeg;
}, 1000);

analogClock();