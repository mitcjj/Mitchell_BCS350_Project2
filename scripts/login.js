let login = document.querySelector("#loginForm");
login.addEventListener("submit", checkCredentials);

let validCredentials = false;

let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");

function checkCredentials() {
    let username = usernameInput.value;
    let password = passwordInput.value;

    //test user and password
}

function checkForm(e) {
    if(!checkCredentials()) {
        e.preventDefault();
    }

}