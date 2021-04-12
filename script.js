let div = document.querySelector(".box")
let butt = document.querySelector(".button")
let senderCounter;

butt.addEventListener('click',function (){
    console.log("asdasfasfg")
    div.style.backgroundColor = "yellow"
})

let primary = document.querySelector(".primary")
let danger = document.querySelector(".danger")
let inf = document.querySelector(".counter")


primary.addEventListener('click',function (){
    if(senderCounter === null){
        senderCounter=0
    } else {
        senderCounter++;
    }
    inf.textContent = senderCounter;
})

danger.addEventListener('click',function (){

})



