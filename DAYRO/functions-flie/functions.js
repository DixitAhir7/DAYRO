"use strict";

// login-form validation
export class Loginvalidation {
    getemail() {
        const getemailvalue = localStorage.getItem('email');
        if (getemailvalue) {
            const parsedemail = JSON.parse(getemailvalue);
            return parsedemail;
        }
    };

    getvalue() { return this.getemail() };

    getlogoutinfo() {
        const logoutstore = localStorage.getItem('logout');
        if (logoutstore) {
            return logoutstore;
        }
    }

    validatelogin() {
        try {
            const form = document.querySelector('#loginModal form'); const emailInput = form.querySelector(".email"); const passwordInput = form.querySelector("#loginModal input[type='password']"); const modal = document.getElementById("loginModal"); modal.style.display = 'none'; const loginBtn = document.querySelector('.user-info .login-btn a'); const logoutBtn = document.querySelector('.user-info .Logout a'); const emailerror = form.querySelector('#emailerror'); const passworderror = form.querySelector('#passworderror'); const emailregexerror = form.querySelector('#emailregex'); const seepassword = form.querySelector('#toggleIcon'); const getlogininfo = localStorage.getItem('email');
            const logoutinfo = localStorage.getItem('logout');

            form.addEventListener("submit", function (event) {
                event.preventDefault(); const emailValue = emailInput.value.trim(); const passwordValue = passwordInput.value.trim(); const obj = { emailvaluestore: emailValue, passwordValuestore: passwordValue }; const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

                // email validation
                if (!obj.emailvaluestore) {
                    emailerror.style.display = 'block';
                    emailerror.innerHTML = 'please enter valid email';
                    emailerror.style.color = 'white'
                } else if (!emailRegex.test(obj.emailvaluestore)) {
                    emailerror.innerHTML = '';
                    emailerror.style.display = 'none';
                    emailregexerror.innerHTML = 'please check your email ex:royal@gmail.com'; emailregexerror.style.display = 'block';
                    emailregexerror.style.color = 'white'
                } else if (obj.emailvaluestore) {
                    emailerror.style.display = 'none';
                    emailregexerror.style.display = 'none';
                }

                // password validation
                if (!obj.passwordValuestore) {
                    passworderror.style.display = 'block';
                    passworderror.innerHTML = 'please set strong password';
                    passworderror.style.color = 'white';
                } else if (obj.passwordValuestore) { passworderror.style.display = 'none'; };

                // login conformed
                if (emailRegex.test(obj.emailvaluestore) && obj.passwordValuestore) {
                    localStorage.setItem('email', JSON.stringify(obj.emailvaluestore));
                    // localStorage.setItem('password', JSON.stringify(obj.passwordValuestore));
                    loginBtn.style.display = "none";
                    logoutBtn.style.display = "block";
                    localStorage.removeItem('logout');
                };
            });

            logouthandle();

            // show password
            seepassword.addEventListener('click', (e) => {
                e.preventDefault(); const pwdInput = passwordInput; if (pwdInput.type === 'password') pwdInput.type = 'text'; else pwdInput.type = 'password';
            });

            window.addEventListener('DOMContentLoaded', () => {
                if (getlogininfo) {
                    loginBtn.style.display = "none";
                    logoutBtn.style.display = "inline-block";
                }
                if (logoutinfo) {
                    loginBtn.style.display = "inline-block";
                    logoutBtn.style.display = "none";
                }
            });
        } catch (error) { console.error("Login error:", error.message); }
    }
};

// logout function
function logouthandle() {
    const loginBtn = document.querySelector('.user-info .login-btn'); const logoutButton = document.querySelector('.Logout a');
    try {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            const userans_logout = prompt('are you sure? (yes,no)');
            if (userans_logout === 'yes'.toLowerCase().trim()) {
                loginBtn.style.display = 'block';
                localStorage.setItem('logout', 'added');
                logoutButton.style.display = 'none';
            }
        })
    } catch (e) { console.log('logout button error:', e); }
};

function setUsername() {

}

// function for loginmodal
export function popup() {
    const modal = document.querySelector('#loginModal'); const sidebarloginbtn = document.querySelector('#sidebarmodal'); const sidebarclosebtn = document.querySelector('.close');
    sidebarloginbtn.addEventListener('click', (e) => { e.preventDefault(); modal.style.display = 'block'; localStorage.setItem('modal', 'opened'); }); sidebarclosebtn.addEventListener('click', (e) => { e.preventDefault(); modal.style.display = 'none'; localStorage.setItem('modal', 'closed'); })
};

// this script is for sidebar
export function sidebarBtn() {
    try {
        const sidebar = document.querySelector('.sidebar');
        const collapseBtn = document.querySelector('.sidebarToggle');
        const closeBtn = document.querySelector('.close-sidebar');
        const sidebarclass = 'sidebar-collapse';

        document.addEventListener('DOMContentLoaded', () => {
            collapseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                sidebar.classList.remove(sidebarclass);
                updateIcon();
                savingstate();
            });

            function savingstate() {
                const issidebaropen = sidebar.classList.contains(sidebarclass);
                issidebaropen ? localStorage.setItem('sidebar', 'collapsed') : localStorage.setItem('sidebar', 'expanded')
            };

            // sidebar stays as it is on exploring to any page
            window.addEventListener('DOMContentLoaded', () => {
                const sidebar = document.querySelector('.sidebar');
                const sidebarState = localStorage.getItem('sidebar');
                if (sidebarState === 'expanded') sidebar.classList.remove(sidebarclass);
                else sidebar.classList.add(sidebarclass);
                updateIcon();
            });

            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                sidebar.classList.add(sidebarclass);
                updateIcon();
                savingstate();
            });

            function updateIcon() {
                const isCollapsed = sidebar.classList.contains('sidebar-collapse');
                if (isCollapsed) {
                    collapseBtn.style.display = 'block';
                    closeBtn.style.display = 'none';
                }
                else if (!isCollapsed) {
                    collapseBtn.style.display = 'none';
                    closeBtn.style.display = 'block'
                }
            }
        });
    } catch (e) { console.info("sidebar didn't opened", e); }
};

// when user enter first time
export function firstTime() {
    try {
        document.addEventListener("DOMContentLoaded", () => {
            !localStorage.getItem('visited') ? console.log('User visiting for the first time!') : ''
        });
    } catch (e) { console.log(e); }
};

export function shareDayro() {
    const sharebtn = document.querySelector('#forshare');
    sharebtn.addEventListener('click', (E) => {
        E.preventDefault(); if (navigator.share) {
            navigator.share({ url: window.location.href, }).then(() => console.log('Shared successfully'))
                .catch((error) => console.log('Error sharing', error));
        } else { console.log('error while sharing'); }
    })
};

// hoverbackground in sidebar
export function addhoverbackground() {
    const sidebarelements = document.querySelectorAll('aside a');
    sidebarelements.forEach(elements => {
        elements.addEventListener('mouseenter', () => {
            elements.style.color = 'black'; elements.style.backgroundColor = 'white'; elements.style.borderRadius = '7px';
        }); elements.addEventListener('mouseleave', () => { elements.style.color = ''; elements.style.backgroundColor = ''; });
    })
};

// function for adding animation class
// *checks html elements
export function addanimationclass() {
    try {
        document.querySelectorAll('*').forEach(el => {
            for (let cls of el.classList) { if (cls.startsWith('animate__')) { el.classList.add('animate__animated'); break; } }
        });
    } catch (e) { console.log(e); }
};

// hiding text when sidebar collapsed
export function labels() {
    try {
        const allatags = document.querySelectorAll('a'); allatags.forEach((atags) => { atags.classList.add('labels') })
    } catch (e) { console.log(e); }
};

// addingclass
export function fontweight() {
    try {
        const atags_font = document.querySelectorAll('a'); atags_font.forEach((tag, index) => {
            if (![0, 4, 5, 8, 9, 10, 11, 12].includes(Number(index))) { tag.classList.add('fw-medium'); }
        })
    } catch (e) { console.log(e); }
};

// for translating to gujrati
export async function fetchjson() {
    try {
        const translate = document.querySelector('.translate select');
        translate.addEventListener('click', async (e) => {
            e.preventDefault();
            const translatevalue = translate.value;
            if (translatevalue === 'ગુજરાતી') {
                const response = await fetch('lang.json', { method: 'GET', headers: { 'Accept': 'application/json', }, credentials: 'omit' }); if (!response.ok) console.log("status:", response.status);
                const data = await response.json(); const datatag = document.querySelectorAll('*'); datatag.forEach(dataatribute => {
                    const keys = dataatribute.getAttribute('data-i18n'); if (data[keys]) { dataatribute.innerHTML = data[keys] } localStorage.setItem('language', 'gujrati');
                });
            } else { localStorage.setItem('language', 'english') };
        })
    } catch (e) { console.log(e); }
};

// loadmore content in about
export function loadmorecontent() {
    try {
        const content = document.querySelectorAll('.webinfo .weblink'); const loadbtn = document.querySelector('.loadmorebtn button'); content.forEach((descriptiton, index) => {
            loadbtn.addEventListener('click', () => {
                ![0, 1, 2, 3].includes(index) ? descriptiton.classList.toggle('forload') : 'failed';
                localStorage.setItem('loadbtn', descriptiton.classList.contains('forload') ? 'removed' : 'added');
            })
        })
    } catch (e) { console.log(e); }
};

export function toggleDropdown() {
    try {
        const getdropdownbtn = document.querySelector('.ReligionalHistory');
        getdropdownbtn.addEventListener('click', (e) => {
            e.preventDefault(); document.getElementById("historyDropdown").classList.toggle("show");
        })
    } catch (e) { console.log(e); }
};