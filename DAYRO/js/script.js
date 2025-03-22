// this is modal script


const modal = document.getElementById("loginModal");
const openModalBtn = document.getElementById("openmodal");
const closeModalBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


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


// this is script for dropdown

function toggleDropdown() {
    let submenu = document.getElementById("submenu");
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}