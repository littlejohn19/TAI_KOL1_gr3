let buttonBg = document.querySelector(".changeBg");
let body = document.body;

buttonBg.addEventListener("click",changeBackground);

function changeBackground(){
    if(document.body.style.background !== "white"){
        document.body.style.background = "white";
    } else {
        document.body.style.background = "red";
    }
}
