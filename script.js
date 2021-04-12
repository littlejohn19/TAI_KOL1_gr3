let box = document.querySelector('.box');
let button = document.querySelector('.button');


button.addEventListener('click', function (event) {
    event.preventDefault();
    box.classList.add('change');

});
