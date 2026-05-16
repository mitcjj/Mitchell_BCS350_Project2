let signup = document.getElementById("signupForm");
signup.addEventListener("submit", checkForm);

let validUsername = false;
let validPassword = false;

let usernameInput = document.getElementById("username");
usernameInput.addEventListener("change", checkUsername);

let passwordInput = document.getElementById("password");
passwordInput.addEventListener("change", checkPassword);

let usernameError = document.getElementById("usernameError");
let passwordError = document.getElementById("passwordError");

function checkUsername() {
    let username = usernameInput.value;
    let usernameRegex = /^[A-Za-z0-9]+$/;

    if (username.length < 1) {
        usernameError.innerText = "Username is required";
        validUsername = false;
        return;
    }
    if (!usernameRegex.test(username)) {
        usernameError.innerText = "Username can only use letters and numbers";
        validUsername = false;
        return;
    }
    if (false) { // check if db already has this user
        validUsername = false;
        return;
    }
    usernameError.innerText = "";
    validUsername = true;
}

function checkPassword() {
    let password = passwordInput.value;
    let upperRegex = /[A-Z]/;
    let lowerRegex = /[a-z]/;
    let numberRegex = /[0-9]/;

    if (password.length < 1) {
        passwordError.innerText = "Password is required";
        validPassword = false;
        return;
    }
    if (password.length > 1 && password.length < 6) {
        passwordError.innerText = "Password needs to be at least 6 characters";
        validPassword = false;
        return;
    }
    if (!upperRegex.test(password)) {
        passwordError.innerText = "Password needs to have at least 1 uppercase letter";
        validPassword = false;
        return;
    }
    if (!lowerRegex.test(password)) {
        passwordError.innerText = "Password needs to have at least 1 lowercase letter";
        validPassword = false;
        return;
    }
    if (!numberRegex.test(password)) {
        passwordError.innerText = "Password needs to have at least 1 number";
        validPassword = false;
        return;
    }
    passwordError.innerText = "";
    validPassword = true;
}

function checkForm(e) {
    if(!validUsername || !validPassword) {
        e.preventDefault();
    }
}