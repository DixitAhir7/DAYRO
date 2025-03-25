// this is modal script

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
// alerting if user entered email and psword: login succesfull

submitBtn.addEventListener("click", function () {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) return alert("Please enter both email and password.");
    if (password.length < 5) return alert("Password must be at least 5 characters long.");

    alert("Login Successful!");
    modal.style.display = "none";
});

// this is script for dropdown

function toggleDropdown() {
    let submenu = document.getElementById("submenu");
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}



// this script is for sidebar

document.getElementById("toggleSidebar").addEventListener("click", function () {
    document.getElementById("sidebar").style.display = "block";
});

document.getElementById("closeSidebar").addEventListener("click", function () {
    document.getElementById("sidebar").style.display = "none";
});



// script for opening page in new tab
document.addEventListener("DOMContentLoaded", () => {
    const aTag = document.querySelector("header nav .about-web a");

    if (aTag) {
        aTag.addEventListener("click", (e) => {

            e.preventDefault();

            // getting link using href attribute
            const URL = aTag.getAttribute("href");

            if (URL) {
                window.open(URL, "_blank");
            } else {
                console.error("No href attribute found on the link.");
            }
        });
    } else {
        console.error("Anchor tag not found.");
    }
});