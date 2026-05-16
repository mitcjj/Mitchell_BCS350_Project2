let login = document.getElementById("loginForm");
login.addEventListener("submit", checkCredentials);

let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let usernameError = document.getElementById("usernameError");
let passwordError = document.getElementById("passwordError");

function checkCredentials() {
    let username = usernameInput.value;
    let password = passwordInput.value;

    usernameError.innerText = "";
    passwordError.innerText = "";
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