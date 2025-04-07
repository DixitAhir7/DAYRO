// all validation here

// login-form validation

export function validatelogin() {
    const submitBtn = document.querySelector(".submit");
    const emailInput = document.querySelector(".email");
    const passwordInput = document.querySelector(".password");
    const modal = document.getElementById("loginModal");
    const openModalBtn = document.getElementById("openmodal");
    const closeModalBtn = document.querySelector(".close");

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