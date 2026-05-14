let signup = document.querySelector("#signupForm");
signup.addEventListener("submit", checkForm);

let validUsername = false;
let validPassword = false;

let usernameInput = document.getElementById("username");
usernameInput.addEventListener("change", checkUsername);

let passwordInput = document.getElementById("password");
passwordInput.addEventListener("change", checkPassword);

function checkUsername() {
    let username = usernameInput.value;
    let usernameRegex = /^[A-Za-z0-9]/;

    if (!usernameRegex.test(username)) {
        //add warning "Username can only use letters and numbers"
        validUsername = false;
        return;
    }
    if (false) { //db already has this user
        validUsername = false;
        return;
    }
    validUsername = true;
}

function checkPassword() {
    let password = passwordInput.value;
    let upperRegex = /[A-Z]/;
    let lowerRegex = /[a-z]/;
    let numberRegex = /[0-9]/;

    if (password.length < 16) {
        //warning about length
        validPassword = false;
        return;
    }
    if (!upperRegex.test(password)) {
        //warning about upper
        validPassword = false;
        return;
    }
    if (!lowerRegex.test(password)) {
        //warning about lower
        validPassword = false;
        return;
    }
    if (!numberRegex.test(password)) {
        //warning about number
        validPassword = false;
        return;
    }
    validPassword = true;
}

function checkForm(e) {
    if(!validUsername || !validPassword) return;{
        e.preventDefault();
    }
}