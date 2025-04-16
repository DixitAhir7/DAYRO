// all validation here
// login-form validation

export function validatelogin() {
    try {
        const form = document.querySelector('#loginModal form');
        const emailInput = document.querySelector("input[type='email]");
        const passwordInput = document.querySelector("input[type='password']");
        const modal = document.getElementById("loginModal");
        const loginBtn = document.querySelector('.user-info .login-btn');

        form.addEventListener("submit", function (event) {
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
            alert("login succesful");
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
        const collapseBtn = document.querySelector('.sidebarToggle');
        const mainContent = document.querySelector('.main-content');
        const displayIcon = document.querySelector('.display-icon');
        const closeBtn = document.querySelector('.close-sidebar');

        document.addEventListener('DOMContentLoaded', () => {
            updateIcon();

            collapseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                sidebar.classList.toggle('sidebar-collapse');
                mainContent.classList.toggle('main-expand');
                updateIcon();
            });

            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                sidebar.classList.add('sidebar-collapse');
                mainContent.classList.remove('main-expand');
                updateIcon();
            });

            function updateIcon() {
                const isCollapsed = sidebar.classList.contains('sidebar-collapse');

                if (isCollapsed) {
                    collapseBtn.style.display = 'inline-block';
                    closeBtn.style.display = 'none';
                } else {
                    collapseBtn.style.display = 'none';
                    closeBtn.style.display = 'inline-block';
                }
            }
        });
    } catch (e) {
        console.info("sidebar didn't opened", e);
    }
};

// when user enter first time!

export function firstTime() {
    document.addEventListener("DOMContentLoaded", () => {

        if (!localStorage.getItem("visited")) {
            console.log("User visiting for the first time!");
            localStorage.setItem("visited", "true");
        } else {
            console.log("Welcome back!");
        }
    });
}

// this is modal script
export function popUp() {

    try {
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll('.login-btn').forEach(button => {
                button.addEventListener('click', () => {
                    document.getElementById('loginModal').style.display = 'block';
                });
            });

            document.querySelector('.close').addEventListener('click', () => {
                document.getElementById('loginModal').style.display = 'none';
            });
        });

    } catch (e) {
        console.warn(e);
    };
};