// all validation here

// login-form validation

export function validatelogin() {
    const submitBtn = document.querySelector(".submit");
    const emailInput = document.querySelector(".email");
    const passwordInput = document.querySelector(".password");
    const modal = document.getElementById("loginModal");

    try {
        submitBtn.addEventListener("click", function () {

            let obj = {
                emailvalue: emailInput.value,
                passwordvalue: passwordInput.value
            }

            if (!obj.emailvalue || !obj.passwordvalue) {
                return alert("Please enter both email and password.");
            }

            // saving data and sending it to login-page

            if (obj.emailvalue && obj.passwordvalue) {
                localStorage.setItem('loginInfo', JSON.stringify(obj));
                window.location.href = "login.html";
                console.log('login succesful');
                return false;
            }

            if (obj.passwordvalue.length < 5) {
                return alert("Password must be at least 5 characters long.");
            }

            modal.style.display = "none";
        });
    } catch (e) {
        console.log('got login error', e);
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