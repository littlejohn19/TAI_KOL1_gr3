let send = document.querySelector(".btnSend");
let clear = document.querySelector(".btnClear");

send.addEventListener("click", function () {
    let tekstEmail = document.querySelector("#inputMail").value;
    let tekstTemat = document.querySelector("#inputTopic").value;
    let tekstWiadomosc = document.querySelector("#inputMessage").value;
    document.querySelector(".mail").innerText = tekstEmail;
    document.querySelector(".temat").innerText = tekstTemat;
    document.querySelector(".wiadomosc").innerText = tekstWiadomosc;

    let cnt = parseInt(document.querySelector("#counter").innerText);
    console.log(cnt);
    document.querySelector("#counter").innerText = cnt+1;
})
clear.addEventListener("click", function () {
    document.querySelector(".mail").innerText = "";
    document.querySelector(".temat").innerText = "";
    document.querySelector(".wiadomosc").innerText = "";
})
