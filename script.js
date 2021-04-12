let btn = document.querySelector(".button");
btn.addEventListener("click", changeColor);
function changeColor(event){
    let box = document.querySelector(".box");
    box.style.backgroundColor = "yellow";
}
