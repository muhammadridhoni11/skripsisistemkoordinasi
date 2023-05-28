

function loginguru(){

    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if (username.value ==="guru1" && password.value ==="guru1") {
        window.location.href = "http://127.0.0.1:5500/home.html"
    } else {
        alert("masukan id dan password")
    }}