let button = document.querySelector(".button");
let box = document.querySelector(".box");

button.addEventListener("click",click);

function click(){
    if(box.style.background !== "yellow"){
        box.style.background = "yellow";
    } else {
        box.style.background = "green";
    }
}
