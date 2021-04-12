let counter = document.querySelector('.counter');
let buttonSubmit = document.querySelector('.btn-primary');
let buttonReset = document.querySelector('.btn-danger');
let table = document.querySelector('.tabela');
let message = document.querySelector('.message');
let topic = document.querySelector('.topic');
let email = document.querySelector('.email');
let emailSent = document.querySelector('.emailDisplay');
let topicSent = document.querySelector('.topicDisplay');
let messageSent = document.querySelector('.messageDisplay');


let count = 0;
buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    table.style.display = 'block'
    count++
    counter.innerHTML = count
    messageSent.innerHTML = message.value
    emailSent.innerHTML = email.value
    topicSent.innerHTML = topic.value


});


buttonReset.addEventListener('click', function (event) {
    table.style.display = 'none'
    count = 0;
    counter.innerHTML = count
});
