const clockDIV = document.querySelector('#clock');
clockDIV.classList.add("fc-white");

const dateSPAN = document.querySelector('#date');
dateSPAN.classList.add("fs50");
dateSPAN.classList.add("black-shadow");

const weeksdaySPAN = document.querySelector('#weeksday');
weeksdaySPAN.classList.add("fs30");
weeksdaySPAN.classList.add("black-shadow");

const timeSPAN = document.querySelector('#time');
timeSPAN.classList.add("fs100");
timeSPAN.classList.add("yellow-shadow");

function updateClock(){
    const nowDate = new Date();
    const year = nowDate.getFullYear();
    const month = `0${String(nowDate.getMonth()+1)}`.slice(-2);
    const day = `0${String(nowDate.getDate())}`.slice(-2);
    dateSPAN.innerHTML = `${year}/${month}/${day}`;

    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    weeksdaySPAN.innerHTML = weekday[nowDate.getDay()];


    const hour = `0${String(nowDate.getHours())}`.slice(-2);
    const minute = `0${String(nowDate.getMinutes())}`.slice(-2);
    const second = `0${String(nowDate.getSeconds())}`.slice(-2);
    timeSPAN.innerHTML = `${hour}:${minute}:${second}`;
}

updateClock();

setInterval(() => {
    updateClock();
}, 1000);