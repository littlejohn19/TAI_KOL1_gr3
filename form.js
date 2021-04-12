

let btnClear = document.querySelector(".btn-danger");
let btnSend = document.querySelector(".btn-primary");

let email = document.querySelector(".emailIn");
let topic = document.querySelector(".topicIn");
let text = document.querySelector(".textIn");

let em = document.querySelector(".em");
let mes = document.querySelector(".mes");
let topi = document.querySelector(".to");

let res = document.querySelector(".result");

let count = 0;
let cou = document.querySelector(".counter");

btnSend.addEventListener('click', function (event){
    em.innerHTML = email.value;
    mes.innerHTML = text.value;
    topi.innerHTML = topic.value;
    res.style.display = 'block';
    cou.style.display = 'block';
    count++;
    cou.innerHTML = count;
});

btnClear.addEventListener('click', function (event){
   res.style.display = 'none';
   cou.style.display = 'none';
   count = 0;

});
