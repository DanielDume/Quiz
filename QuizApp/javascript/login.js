console.log("Hello baby");
var url = "http://quiz-shm.herokuapp.com";

$("#loginBtn").on("click",function () {
    authenticate();
});

function authenticate(){
    var username = $("#usernameInput").val();
    var password = $("#passwordInput").val();
    $.post({
        url: url + "/sign_in",
        contentType: "application/json",
        data: JSON.stringify({"username":username, "password":password}),
        success: function (data) {
            window.localStorage.setItem("token", data['token']);
            go_to_html_main_menu();
        },
        error: function(){
            console.log('Bad credentials!');
            go_to_login();
        }
    })
}

function go_to_html_main_menu(){
    window.location.href = "sign_in.html";
}

function go_to_login(){
    window.location.href = "welcome.html";
}

// make Enter key as submmit
$(function() {
    $("body").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            $('#loginBtn').click();
            return false;
        } else {
            return true;
        }
    });
});