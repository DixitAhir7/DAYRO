// all validation here
// login-form validation

export class Loginvalidation {

    getemail() {
        const getemailvalue = localStorage.getItem('login');
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
            const seepassword = document.querySelector('#toggleIcon');

            form.addEventListener("submit", function (event) {
                event.preventDefault();

                const emailValue = emailInput.value.trim();
                const passwordValue = passwordInput.value.trim();

                const obj = { emailvaluestore: emailValue, passwordValuestore: passwordValue };
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

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
                    emailregexerror.style.display = 'none';
                }

                // password validation
                if (!obj.passwordValuestore) {
                    passworderror.style.display = 'block';
                    passworderror.innerHTML = 'please set strong password'
                } else if (obj.passwordValuestore) {
                    passworderror.style.display = 'none';
                }

                // conformation of logininfo
                if (emailRegex.test(obj.emailvaluestore) && obj.passwordValuestore) {
                    console.log('login succesful welcome');
                    localStorage.setItem('login', JSON.stringify(obj.emailvaluestore));
                    loginBtn.style.display = "none";
                    logoutBtn.style.display = "block";
                    localStorage.removeItem('logout');
                }
            });

            // show password
            seepassword.addEventListener('click', (e) => {
                e.preventDefault();
                const pwdInput = passwordInput;
                if (pwdInput.type === 'password') {
                    pwdInput.type = 'text';
                } else {
                    pwdInput.type = 'password';
                }
            });

            // on refresh
            window.addEventListener('DOMContentLoaded', () => {
                const getlogininfo = localStorage.getItem('login')
                const logoutinfo = localStorage.getItem('logout');
                if (getlogininfo) {
                    loginBtn.style.display = "none";
                    logoutBtn.style.display = "block";
                }
                if (logoutinfo) {
                    loginBtn.style.display = "block";
                    logoutBtn.style.display = "none";
                }
            })
            modal.style.display = "none";
        } catch (error) {
            console.error("Login error:", error.message);
        }
    }
};

// logout function
function logouthandle() {
    const loginBtn = document.querySelector('.user-info .login-btn');
    const logoutButton = document.querySelector('.Logout button');
    try {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            const userans_logout = prompt('are you sure? (yes,no)');
            if (userans_logout === 'yes'.toLowerCase().trim()) {
                loginBtn.style.display = 'block';
                localStorage.setItem('logout', 'added')
                localStorage.removeItem('login');
                logoutButton.style.display = 'none';
            }
        })
    } catch (e) {
        console.log('logout button error:', e);
    }
}

logouthandle()
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
                    collapseBtn.style.display = 'block';
                    closeBtn.style.display = 'none'
                } else if (!isCollapsed) {
                    collapseBtn.style.display = 'none';
                    closeBtn.style.display = 'block'
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

// hiding text when sidebar collapsed
export function labels() {
    const allatags = document.querySelectorAll('a');
    allatags.forEach((atags) => { atags.classList.add('labels') })
};

// adding fontweight 
export function fontweight() {
    const atags_font = document.querySelectorAll(' a');
    atags_font.forEach((tag, index) => {
        if (![0, 4, 5, 8, 9, 10].includes(Number(index))) {
            tag.classList.add('fw-medium');
        }
    })
};