let div = document.querySelector(".box")
let butt = document.querySelector(".button")
let senderCounter;

butt.addEventListener('click',function (){
    div.style.backgroundColor = "yellow"
})

let primary = document.querySelector(".primary")
let danger = document.querySelector(".danger")
let inf = document.querySelector("#counter")
let email = document.querySelector("#inputEmail")
let theme = document.querySelector("#inputTheme")
let message = document.querySelector("#inputMessage")


primary.addEventListener('click',function (){
    if(senderCounter === null){
        senderCounter=0
    } else {
        senderCounter++;
    }
    inf.textContent = senderCounter;
    console.log(senderCounter)
})




danger.addEventListener('click',function (){
    email.textContent="";
    theme.textContent="";
    message.textContent="";
    senderCounter=0;
    inf.textContent = senderCounter;

})



