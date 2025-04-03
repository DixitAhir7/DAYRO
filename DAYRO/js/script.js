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

const sidebar = document.querySelector('.sidebar');
const collapseBtn = document.querySelector('.sidebarToggle');

document.addEventListener('DOMContentLoaded', () => {
    collapseBtn.addEventListener('click', (e) => {

        e.preventDefault();
        sidebar.classList.toggle('sidebar-collapse');

        // changing the button on,off

        if (sidebar.classList.contains('sidebar-collapse')) {
            collapseBtn.innerHTML = `<a href=""><i class="bi bi-toggle2-off text-black fs-4"></i></a>`;
        } else {
            collapseBtn.innerHTML = `<a href="" class="sidebarToggle"><i class="bi bi-toggle2-on text-black fs-4"></i></a>`;
        }

    });
});


// when user enter first time!

document.addEventListener("DOMContentLoaded", function () {

    if (!localStorage.getItem("visited")) {
        console.log("User visiting for the first time!");
        alert("Welcome to our website for the first time!");

        localStorage.setItem("visited", "true");

    } else {
        console.log("Welcome back!");
    }
});


// how much time has spend in website

let startTime = Date.now();

window.addEventListener("beforeunload", () => {
    const endTime = Date.now();
    const timeSpent = endTime - startTime;
    const timesec = timeSpent / 1000;
    const timeMin = Math.floor(timesec / 60)

    console.log(`you wasted ${timeMin} minutes`);
});