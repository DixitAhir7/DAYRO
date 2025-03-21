// this is modal script

const modal = document.getElementById("loginModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("loginForm").onsubmit = function (event) {
    event.preventDefault();
    alert("Login successful!");
    modal.style.display = "none";
}


// storing userdata in localsotrage
// this is for just pratice !don't use localstorage for personal information


// const form = document.querySelector('#loginModal form');
// const inputEmail = document.querySelector('.modal input:first-child');
// const inputPassword = document.querySelector('.modal .password');
// const submitBtn = document.querySelector('.modal button')


// const storingData = form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     let EmailValue = inputEmail.value
//     let passwordValue = inputPassword.value

//     localStorage.setItem('username:', JSON.stringify(EmailValue))
//     localStorage.setItem('password:', JSON.stringify(passwordValue))

// })

/*
if login was succesful the clearing the field
*/


// function clearInputs() {
//     document.querySelectorAll('.loginModal form input').forEach(input => {
//         input.value = "";
//     });
// }