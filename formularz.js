const email = document.querySelector('.email-field');
const thema = document.querySelector('.thema-field');
const mess = document.querySelector('.mess-field')
const table = document.querySelector('.result-table')
let clicks = 0;

const emailInput = document.querySelector('.email-input');
const themaInput = document.querySelector('.thema-input');
const messInput = document.querySelector('.mess-input')

function sendMessage(){
    email.innerText = emailInput.value;
    thema.innerText = themaInput.value;
    mess.innerText = messInput.value;
    table.style.display = "block"
    clicks += 1
    document.getElementById("clicks").innerHTML = clicks;
}

function clearMessage(){
    email.innerText = "";
    thema.innerText = "";
    mess.innerText = "";
    table.style.display = "none"
}