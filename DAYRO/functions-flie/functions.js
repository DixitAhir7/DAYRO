// all validation here
// login-form validation

export class Loginvalidation {

    getemail() {
        const getemailvalue = localStorage.getItem('loginInfo');
        if (getemailvalue) {
            const parsedemail = JSON.parse(getemailvalue);
            return parsedemail.emailInputstore
        }
    };

    getvalue() {
        return this.getemail()
    };

    getlogoutinfo() {
        const logoutstore = localStorage.getItem('logout');
        return logoutstore
    }

    validatelogin() {
        try {
            const form = document.querySelector('#loginForm');
            const emailInput = document.querySelector(".email");
            const passwordInput = document.querySelector("#loginModal input[type='password']");
            const modal = document.getElementById("loginModal");
            const loginBtn = document.querySelector('.user-info .login-btn');
            const logoutBtn = document.querySelector('.user-info .Logout button');
            const emailerror = document.querySelector('#emailerror');
            const passworderror = document.querySelector('#passworderror');
            const passworderrorregex = document.querySelector('#passwordregex');
            const emailregexerror = document.querySelector('#emailregex');

            form.addEventListener("submit", function (event) {
                event.preventDefault();

                const emailValue = emailInput.value.trim();
                const passwordValue = passwordInput.value.trim();

                const obj = { emailvaluestore: emailValue, passwordValuestore: passwordValue };
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;


                // email validation
                if (!obj.emailvaluestore) {
                    emailerror.style.display = 'block';
                    emailerror.innerHTML = 'please enter valid email'
                } else if (!emailRegex.test(obj.emailvaluestore)) {
                    emailerror.innerHTML = '';
                    emailerror.style.display = 'none';
                    emailregexerror.innerHTML = 'please check your email ex:royal@gmail.com';
                    emailregexerror.style.display = 'block';
                } else if (obj.emailvaluestore) {
                    emailerror.style.display = 'none';
                }

                // password validation
                if (!obj.passwordValuestore) {
                    passworderror.style.display = 'block';
                    passworderror.innerHTML = 'please set strong password'
                } else if (!passwordRegex.test(obj.emailvaluestore)) {
                    passworderror.innerHTML = '';
                    passworderror.style.display = 'none';
                    passworderrorregex.innerHTML = 'please include this:aA0@ 8-characters ';
                    passworderrorregex.style.display = 'block';
                } else if (obj.passwordValuestore) {
                    passworderror.style.display = 'none';
                }
            });

            // on refresh
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
};

// function for loginmodal
export function popup() {
    const modal = document.querySelector('#loginModal');
    const sidebarloginbtn = document.querySelector('#sidebarmodal');
    const sidebarclosebtn = document.querySelector('.close');

    sidebarloginbtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        localStorage.setItem('modal', 'opened');
    })

    sidebarclosebtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'none';
        localStorage.setItem('modal', 'closed');
    })
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
                sidebar.classList.remove('sidebar-collapse');
                mainContent.classList.toggle('main-expand');
                updateIcon();
                savingstate();
            });

            function savingstate() {
                const issidebaropen = sidebar.classList.contains('sidebar-collapse');
                if (issidebaropen) {
                    localStorage.setItem('sidebar', 'collapsed');
                } else {
                    localStorage.setItem('sidebar', 'expanded');
                }
            };

            // sidebar stays as it is on exploring to any page
            window.addEventListener('DOMContentLoaded', () => {
                const sidebar = document.querySelector('.sidebar');
                const sidebarState = localStorage.getItem('sidebar');

                if (sidebarState === 'expanded') {
                    sidebar.classList.remove('sidebar-collapse');
                } else {
                    sidebar.classList.add('sidebar-collapse');
                }
                updateIcon();
            });

            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                sidebar.classList.add('sidebar-collapse');
                mainContent.classList.remove('main-expand');
                updateIcon();
                savingstate();
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
            } else { console.log("Welcome back!"); }
        });
    } catch (e) { console.log(e); }
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

// manual translation
const select = document.querySelector('select');
const darktag = document.querySelector('.theme-mode a');

export function translateguj() {
    select.addEventListener('click', (e) => {
        e.preventDefault();

        const selectvalue = select.value;
        if (selectvalue == 'ગુજરાતી') {
            darktag.textContent = 'શ્યામ';
            localStorage.setItem('language', 'gujrati');
        } else if (selectvalue === 'english') {
            darktag.textContent = 'dark';
            localStorage.setItem('language', 'english');
        }
    })
};

export function shareDayro() {
    const sharebtn = document.querySelector('#forshare');
    sharebtn.addEventListener('click', (E) => {
        E.preventDefault();
        if (navigator.share) {
            navigator.share({
                url: window.location.href,
            })
                .then(() => console.log('Shared successfully'))
                .catch((error) => console.log('Error sharing', error));
        } else {
            console.log('error while sharing');
        }
    })
};

// hoverbackground in sidebar
export function addhoverbackground() {
    const sidebarelements = document.querySelectorAll('nav a');

    sidebarelements.forEach(elements => {
        elements.addEventListener('mouseenter', () => {
            elements.style.color = 'black';
            elements.style.backgroundColor = 'white';
            elements.style.borderRadius = '7px';
        });

        elements.addEventListener('mouseleave', () => {
            elements.style.color = '';
            elements.style.backgroundColor = '';
        });
    })
};

// function for adding animation class
// *checks html elements
export function addanimationclass() {
    document.querySelectorAll('*').forEach(el => {
        for (let cls of el.classList) {
            if (cls.startsWith('animate__')) {
                el.classList.add('animate__animated');
                break;
            }
        }
    });
}