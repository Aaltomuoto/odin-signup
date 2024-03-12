const form = document.querySelector('form');
const passwordField = document.getElementById('password');
const confirmField = document.getElementById('confirm');
const pwError = document.querySelector('#password + span.error');
const conError = document.querySelector('#confirm + span.error');

passwordField.addEventListener('input', (e) => {
    if (passwordField.validity.valid) {
        pwError.textContent = '';
        pwError.className = 'error';
    } else {
        showError();
    }
});

confirmField.addEventListener('input', (e) => {
    if (confirmField.validity.valid) {
        conError.textContent = '';
        conError.className = 'error';
    } else {
        showError();
    }
});

form.addEventListener('submit', (e) => {
    console.log(passwordField.value)
    if(!passwordField.validity.valid || !confirmField.validity.valid) {
        showError();
        event.preventDefault();
    } else if (passwordField.value !== confirmField.value) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (!passwordField.validity.valid) {
        if (passwordField.validity.valueMissing) {
            pwError.textContent = 'You need to enter a password';
        } else if (passwordField.validity.tooShort) {
            pwError.textContent = `Password should be at least ${passwordField.minLength} characters; you entered ${passwordField.value.length}`
        }
        pwError.className = 'error active';
    } else if (!confirmField.validity.valid) {
        if (confirmField.validity.valueMissing) {
            conError.textContent = 'You need to enter a password';
        } else if (confirmField.validity.tooShort) {
            conError.textContent = `Password should be at least ${passwordField.minLength} characters; you entered ${passwordField.value.length}`
        }
        conError.className = 'error active';
    } else if (passwordField.value !== confirmField.value) {
        pwError.className = 'error active';
        pwError.textContent = `Passwords do not match`
    }
}