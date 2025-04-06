const body = document.body;
const BACKGROUND_KEY = "/images/GFRIEND-IMG/";
const randomMAX = 33;

function backgroundSet(){
    const randomNum = Math.floor(Math.random() * (randomMAX+1));
    body.style.background = `url(${BACKGROUND_KEY}${randomNum}.jpg) center center no-repeat fixed`;
    body.style.backgroundSize = 'cover';
}

body.addEventListener("load", backgroundSet());

setInterval(backgroundSet, 60*5*1000);
