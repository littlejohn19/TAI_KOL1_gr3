let button = document.querySelector(".btn-primary")
let button_reset = document.querySelector(".btn-danger")
let table = document.querySelector(".message-table")


let count =0;
button.addEventListener('click', function (event) {
    let email=document.getElementById("email").value;
    let topic=document.getElementById("topic").value;
    let message=document.getElementById("message").value;
    count ++;
    let fill_table= count +
        '<table class="table table-bordered table-sm ">\n' +
        '  <thead>\n' +
        '    <tr>\n' +
        '      <th scope="col">Wiadomość:</th>\n' +
        '      <th scope="col"></th>\n' +
        '    </tr>\n' +
        '  </thead>\n' +
        '  <tbody>\n' +
        '    <tr>\n' +
        '      <th scope="row">Email</th>\n' +
        '      <td>'+email+'</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '      <th scope="row">Temat</th>\n' +
        '      <td>'+topic+'</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '      <th scope="row">Wiadomość</th>\n' +
        '      <td>'+message+'</td>\n' +
        '    </tr>\n' +
        '    <tr>\n' +
        '      <th scope="row">Została wysłana!</th>\n' +
        '      <td></td>\n' +
        '    </tr>\n' +
        '  </tbody>\n' +
        '\n' +
        '</table>';
    table.innerHTML = fill_table;
});

button_reset.addEventListener('click', function (event) {
    fill_table="";
    table.innerHTML = fill_table;

});

