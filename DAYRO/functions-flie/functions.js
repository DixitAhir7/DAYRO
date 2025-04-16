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
                } else if (!isCollapsed) {
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
    try {
        document.addEventListener("DOMContentLoaded", () => {

            if (!localStorage.getItem("visited")) {
                console.log("User visiting for the first time!");
                localStorage.setItem("visited", "true");
            } else {
                console.log("Welcome back!");
            }
        });
    } catch (e) {
        console.log(e);
    }
};

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


// hasya-artists script //

// when user search footer stays as it is
export function positionapplywhensearch() {
    try {
        const searchInput = document.querySelector("input[type='text']");
        const footer = document.querySelector("footer");

        searchInput.addEventListener("input", () => {
            const value = searchInput.value.trim();

            if (value) {
                footer.style.position = "fixed";
                footer.style.bottom = "0";
                footer.style.width = "100%";
            } else {
                footer.style.position = "static";
            }
        });
    } catch (e) {
        console.log(e);
    }
};

// if user wants to see it again
export function ifuserwants() {
    try {
        document.addEventListener('DOMContentLoaded', () => {
            const modal = document.getElementById("infoModal");
            const openBtn = document.querySelector('footer #ifuserwants');
            let closeBtn = document.querySelector(".close");

            if (openBtn) {
                openBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    modal.style.display = "block";
                });
            } closeBtn.onclick = function () {
                modal.style.display = "none";
            };
        });
    } catch (e) {
        console.log(e);
    }
};


// script for modal information only

export function showFirsttimeonly() {
    try {
        document.addEventListener('DOMContentLoaded', () => {
            let modal = document.getElementById("infoModal");
            let closeBtn = document.querySelector(".close");

            if (!localStorage.getItem('visitedcomedypage')) {
                modal.style.display = "block";

                localStorage.setItem('visitedcomedypage', 'true');

                closeBtn.onclick = function () {
                    modal.style.display = "none";
                };

                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                };
            }
        });
    } catch (e) {
        console.log(e);
    }
};



const form = document.querySelector('form');
const inputSearch = form.querySelector('input[type="text"]');
const result = document.querySelector('.no-result');
const content = document.querySelectorAll('.artist-img');
const iNPUT_SUBMIT = document.createElement('input');
iNPUT_SUBMIT.type = "submit";
iNPUT_SUBMIT.value = "Search";
form.appendChild(iNPUT_SUBMIT);

// Script for searching artists with images

export function displayImages() {
    try {
        form.addEventListener('input', (e) => {
            e.preventDefault();

            const search = inputSearch.value.toLowerCase().trim();
            let found = false;

            content.forEach((divImg) => {
                const img = divImg.querySelector("img");
                const altText = img.getAttribute('alt').toLowerCase();
                if (altText.includes(search)) {
                    divImg.style.display = "block";
                    found = true;
                } else {
                    divImg.style.display = "none";
                }
            });

            if (!found) {
                result.style.display = "block";
            } else {
                result.style.display = "none";
            }
        });
    } catch (e) {
        console.log(e);
    }
};