import { userTime } from "../time/time-script/time.js";
import { validatelogin } from "../validation-file/validate.js";


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


// for login-validation

validatelogin()

// this is script for dropdown

window.toggleDropdown = function () {
    let submenu = document.getElementById("submenu");
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
};


// this script is for sidebar

const sidebar = document.querySelector('.sidebar');
const collapseBtn = document.querySelector('.sidebarToggle');

document.addEventListener('DOMContentLoaded', () => {
    collapseBtn.addEventListener('click', (e) => {

        e.preventDefault();
        sidebar.classList.toggle('sidebar-collapse');

        // if (sidebar.classList.contains('sidebar-collapse')) {
        //     sidebar.innerHTML = `<a class="text-black sidebarToggle" href=""><i class="bi bi-list sidebarBtn"></i></a>`
        // }else{
        //     sidebar.innerHTML = `<i class="bi bi-arrow-right-circle-fill"></i>`
        // }
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


// count spending-time
userTime() 