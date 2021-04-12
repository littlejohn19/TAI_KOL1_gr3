let email = document.querySelector('.email')
let topic = document.querySelector('.topic')
let mess = document.querySelector('.mess')

let email2 = document.querySelector('.emailT')
let topic2 = document.querySelector('.topicT')
let mess2 = document.querySelector('.messT')

let sendButton = document.querySelector('.button')
let resetButton = document.querySelector('.reset')

let tableT = document.querySelector('.tabelka')

let count = 0;
let counter = document.querySelector('.counter')

sendButton.addEventListener('click', () => {
    tableT.style.display = 'block'
    email2.innerHTML = email.value
    topic2.innerHTML = topic.value
    mess2.innerHTML = mess.value
    count++
    counter.innerHTML = count
})

resetButton.addEventListener('click', () => {
    tableT.style.display = 'none'
})
