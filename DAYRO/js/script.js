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

/*
if login was succesful the clearing the field
*/

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()

    let email = document.querySelector('header .loginModal .email').value;
    let password = document.querySelector('header .loginModal .password').value;


    if (email && password) {
        document.querySelector('form').reset()
    } else { alert('please try again') }
})