let signup = document.getElementById("signupForm");
signup.addEventListener("submit", checkForm);

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
        return false;
    }
    if (!usernameRegex.test(username)) {
        usernameError.innerText = "Username can only use letters and numbers";
        return false;
    }
    if (false) { // check if db already has this user
        return false;
    }
    usernameError.innerText = "";
    return true;
}

function checkPassword() {
    let password = passwordInput.value;
    let upperRegex = /[A-Z]/;
    let lowerRegex = /[a-z]/;
    let numberRegex = /[0-9]/;

    if (password.length < 1) {
        passwordError.innerText = "Password is required";
        return false;
    }
    if (password.length > 1 && password.length < 6) {
        passwordError.innerText = "Password needs to be at least 6 characters";
        return false;
    }
    if (!upperRegex.test(password)) {
        passwordError.innerText = "Password needs to have at least 1 uppercase letter";
        return false;
    }
    if (!lowerRegex.test(password)) {
        passwordError.innerText = "Password needs to have at least 1 lowercase letter";
        return false;
    }
    if (!numberRegex.test(password)) {
        passwordError.innerText = "Password needs to have at least 1 number";
        return false;
    }
    passwordError.innerText = "";
    return true;
}

function checkForm(e) {
    let validUsername = checkUsername();
    let validPassword = checkPassword();
    if(!validUsername || !validPassword) {
        e.preventDefault();
    }
}