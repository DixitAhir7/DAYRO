// all validation here

// login-form validation

export function validatelogin() {
    try {
        const submitBtn = document.querySelector(".submit");
        const emailInput = document.querySelector(".email");
        const passwordInput = document.querySelector(".password");
        const modal = document.getElementById("loginModal");
        const loginBtn = document.querySelector('.user-info .login-btn');

        submitBtn.addEventListener("click", function (event) {
            event.preventDefault();

            let emailValue = emailInput.value.trim();
            let passwordValue = passwordInput.value.trim();

            if (!emailValue || !passwordValue) {
                alert("Please enter both email and password.");
                return;
            }

            if (passwordValue.length < 5) {
                alert("Password must be at least 5 characters long.");
                return;
            }

            // saving data and sending it to login-page
            let obj = {
                emailvalue: emailValue,
                passwordvalue: passwordValue,
            };
            localStorage.setItem("loginInfo", JSON.stringify(obj));
            console.log("login succesful");
        });

        if (localStorage.getItem('loginInfo')) {
            loginBtn.style.display = "none";

        }
        modal.style.display = "none";


    } catch (error) {
        console.error("Login error:", error.message);
    }
}


export function dropdownBtn() {
    try {
        window.toggleDropdown = function () {
            let submenu = document.getElementById("submenu");
            submenu.style.display = submenu.style.display === "block" ? "none" : "block";
        };
    } catch (e) {
        console.warn('dropdown did not worked', e);
    };
};


// this script is for sidebar

export function sidebarBtn() {

    try {
        const sidebar = document.querySelector('.sidebar');
        const collapseBtn = document.querySelector('.sidebarBtn');
        const mainContent = document.querySelector('.main-content');

        document.addEventListener('DOMContentLoaded', () => {
            collapseBtn.addEventListener('click', (e) => {

                e.preventDefault();
                sidebar.classList.toggle('sidebar-collapse');
                mainContent.classList.add('main-expand')
            });
        });
    } catch (e) {
        console.info("sidebar didn't opened", e);
    }
};


// when user enter first time!

export function firstTime() {
    document.addEventListener("DOMContentLoaded", function () {

        if (!localStorage.getItem("visited")) {
            console.log("User visiting for the first time!");
            alert("Welcome to our website for the first time!");

            localStorage.setItem("visited", "true");

        } else {
            console.log("Welcome back!");
        }
    });
}


// this is modal script
export function popUp() {

    try {
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
    } catch (e) {
        console.warn(e);
    };
};