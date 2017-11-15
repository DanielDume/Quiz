
var url = "http://quiz-shm.herokuapp.com";

$("#logoutBtn").on("click",function () {
    logout();
});
function logout(){
    $.post({
        url: url + "/logout",
        async: true,
        contentType: "application/json",
        beforeSend: function(xhr){
            xhr.setRequestHeader("X-Auth-Token", window.localStorage.getItem("token"));
        },
        success: function(data){
            // alert(data.toString());
        },
        error: function(data){
            // alert(data);
        }
    });
    window.localStorage.setItem("token", "");
    go_to_html_main_menu()
}

function go_to_html_main_menu(){
    window.location.href = "login.html";
}