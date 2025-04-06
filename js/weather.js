const positionSPAN = document.querySelector("#position");
positionSPAN.classList.add("position");

const weatherSPAN = document.querySelector("#weather");
weatherSPAN.classList.add("weather");

const APIKEY ="59045fe239bc3e5d3e8c405d7bb6fa44";
const ICONURL="https://openweathermap.org/img/wn/";

function geoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;

    fetch(apiURL).then((response) => response.json()).then((data) => {
        positionSPAN.innerHTML=data.name;
        const weatherICON=document.createElement("img");
        weatherICON.src=`${ICONURL}${data.weather[0].icon}.png`;
        weatherSPAN.appendChild(weatherICON); 
    });
}

function geoNG(){
    alert("Can't get your position.")
}

navigator.geolocation.getCurrentPosition(geoOK, geoNG);
