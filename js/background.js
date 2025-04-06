const body = document.body;
const BACKGROUND_KEY = "images/GFRIEND-IMG/";
const bgRandomMAX = 33;
const bgIntervalNUM = 60 * 5 * 1000;

function backgroundSet(){
    const randomImageNum = Math.floor(Math.random() * (bgRandomMAX+1));
    body.style.background = `url(${BACKGROUND_KEY}${randomImageNum}.jpg) center center no-repeat fixed`;
    body.style.backgroundSize = 'cover';
}

body.addEventListener("load", backgroundSet());

setInterval(() => {
    backgroundSet();
}, bgIntervalNUM);
