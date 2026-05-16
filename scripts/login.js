let login = document.getElementById("validate");
login.addEventListener("submit", checkCredentials);

let validCredentials = false;

let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let usernameError = document.getElementById("username");
let passwordError = document.getElementById("username");

function checkCredentials() {
    let username = usernameInput.value;
    let password = passwordInput.value;

    if (username.length < 1) {
        usernameError.innerText = "Username is required";
        return false;
    }
    if (password.length < 1) {
        passwordError.innerText = "Password is required";
        return false;
    }
    //test user and password in db
    return true;
}

function checkForm(e) {
    if(!checkCredentials()) {
        e.preventDefault();
    }

}