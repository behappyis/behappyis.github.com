const loginDIV = document.querySelector("#login");
const loginFORM = loginDIV.querySelector("form");
const loginINPUT = loginFORM.querySelector("input");
const loginBTN = loginFORM.querySelector("button");
const loginH1 = loginDIV.querySelector("h1");
const LOGINEDNAME ="loginedNAME";

loginH1.classList.add("hidden");
loginH1.classList.add("greeting")

function checkLogined(){
    const loginedNAME = localStorage.getItem(LOGINEDNAME);
    if(loginedNAME){
        loginFORM.classList.add("hidden");
        loginH1.classList.contains("hidden") ? loginH1.classList.remove("hidden") : "";
        loginH1.innerHTML = loginedNAME;
    } else {
        loginH1.classList.add("hidden");
        loginFORM.classList.contains("hidden") ? loginFORM.classList.remove("hidden") : "";
        loginH1.innerHTML = "";
        loginINPUT.value = "";
    }
    displayTODO(loginedNAME);
}

function displayTODO(loginedNAME){
    const todoDIV = document.querySelector("#todo");
    if(loginedNAME){
        todoDIV.classList.contains("hidden") ? todoDIV.classList.remove("hidden") : "";
    } else {
        todoDIV.classList.contains("hidden") ? "" : todoDIV.classList.add("hidden");
    }
}

function login(event){
    event.preventDefault();
    localStorage.setItem(LOGINEDNAME,loginINPUT.value);
    checkLogined();
}

function logout(event){
    event.preventDefault();
    if(confirm("Are you sure logout?")){
        localStorage.removeItem(LOGINEDNAME);
        checkLogined();
    }
}

checkLogined();
loginFORM.addEventListener("submit", login);

loginH1.addEventListener("click", logout);

