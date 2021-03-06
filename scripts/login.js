function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    })

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    })

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        const username1 = document.getElementById("idUsernameOrEmail").value;
        const password1 = document.getElementById("idPassword").value;
        const usernameDb = localStorage.getItem("USERNAME");
        const passwordDb = localStorage.getItem("PASSWORD");
        const emailDb = localStorage.getItem("EMAIL");
        if (username1 === usernameDb || username1 === emailDb && password1 === passwordDb) {
            alert("Login successfully");
            window.location.replace("pages/main.html");
            return false;
        } else {
            setFormMessage(loginForm, "error", "Invalid username/password combination");
        }

    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 8) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
function accountForm() {

    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const signPassword = document.getElementById("signupPassword").value;
    const signPassword2 = document.getElementById("signupPassword2").value;

    if (signPassword === signPassword2) {
        window.localStorage.setItem("USERNAME", username);
        window.localStorage.setItem("EMAIL", email);
        window.localStorage.setItem("PASSWORD", signPassword);
    } else {
        alert("Passwords do not match!");
    }
}