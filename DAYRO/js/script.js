// this is modal script

//getting modal html

const modal = document.getElementById("loginModal");
const openModalBtn = document.getElementById("openmodal");
const closeModalBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".submit");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");

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


// getting value 
// alerting if user entered email and ps login succesfull

submitBtn.addEventListener("click", function () {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) return alert("Please enter both email and password.");
    if (password.length < 6) return alert("Password must be at least 6 characters long.");

    alert("Login Successful!");
    modal.style.display = "none";
});

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