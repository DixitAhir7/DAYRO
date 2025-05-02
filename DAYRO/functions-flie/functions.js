// all validation here
// login-form validation

export function validatelogin() {
    try {
        const form = document.querySelector('form');
        const emailInput = document.querySelector(".email");
        const passwordInput = document.querySelector("input[type='password']");
        const modal = document.getElementById("loginModal");
        const loginBtn = document.querySelector('.user-info .login-btn');
        const logoutBtn = document.querySelector('.user-info .Logout button');

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let emailValue = emailInput.value.trim();
            let passwordValue = passwordInput.value.trim();

            // saving data and sending it to login-page
            let obj = {
                emailvalue: emailValue,
                passwordvalue: passwordValue,
            };
            localStorage.setItem("loginInfo", JSON.stringify(obj));

            // login-out buttons handling
            if (localStorage.getItem('loginInfo')) {
                loginBtn.style.display = "none";
                logoutBtn.style.display = "block";
            }
        });

        window.addEventListener('DOMContentLoaded', () => {
            const getlogininfo = localStorage.getItem('loginInfo')
            if (getlogininfo) {
                loginBtn.style.display = "none";
                logoutBtn.style.display = "block";
                localStorage.setItem('logout', 'added')
            }
        })
        modal.style.display = "none";

    } catch (error) {
        console.error("Login error:", error.message);
    }
}

// this script is for sidebar

export function sidebarBtn() {
    try {
        const sidebar = document.querySelector('.sidebar');
        const collapseBtn = document.querySelector('.sidebarToggle');
        const mainContent = document.querySelector('.main-content');
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

            if (localStorage.getItem('modalOpen') === 'true') {
                document.getElementById('loginModal').style.display = 'block';
            }

            document.querySelectorAll('.login-btn').forEach(button => {
                button.addEventListener('click', () => {
                    document.getElementById('loginModal').style.display = 'block';
                    localStorage.setItem('modalOpen', 'true');
                });
            });

            document.querySelector('.close').addEventListener('click', () => {
                document.getElementById('loginModal').style.display = 'none';
                localStorage.setItem('modalOpen', 'false');
            });
        });
    } catch (e) {
        console.warn(e);
    }
};

// logout function
const logoutButton = document.querySelector('.Logout button');

try {
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        const userans_logout = prompt('are you sure? (yes,no)');
        if (userans_logout === 'yes'.toLowerCase()) {
            localStorage.removeItem('loginInfo');
        }
    })

} catch (e) {
    console.log('logout button error:', e);
}