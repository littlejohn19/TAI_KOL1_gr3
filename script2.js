let i = 0;
let send = document.querySelector(".btn-primary");
send.addEventListener('click', sendMessage);
let clear = document.querySelector(".btn-danger");
clear.addEventListener('click', clearAll);
function sendMessage(event){
    let licznik = document.querySelector(".licznik");
    i = i + 1;
    licznik.innerHTML = i;
    let table = document.querySelector(".table");

    let formEmail = document.querySelector("#form-email");
    let formTitle = document.querySelector("#form-title");
    let formMessage = document.querySelector("#form-message");

    let tableEmail = document.querySelector("#table-email");
    let tableTitle = document.querySelector("#table-title");
    let tableMessage = document.querySelector("#table-message");

    table.style.display = "block";

    tableEmail.innerHTML = formEmail.value;
    tableTitle.innerHTML = formTitle.value;
    tableMessage.innerHTML = formMessage.value;
}
function clearAll(event){
    let table = document.querySelector(".table");
    table.style.display = "none";
    let formEmail = document.querySelector("#form-email");
    let formTitle = document.querySelector("#form-title");
    let formMessage = document.querySelector("#form-message");

    formEmail.value = "";
    formTitle.value = "";
    formMessage.value = "";
}