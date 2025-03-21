// this is modal script

const modal = document.getElementById("loginModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("loginForm").onsubmit = function (event) {
    event.preventDefault();
    alert("Login successful!");
    modal.style.display = "none";
}


// storing userdata in localsotrage
// this is for just pratice !don't use localstorage for personal information


// const form = document.querySelector('#loginModal form');
// const inputEmail = document.querySelector('.modal input:first-child');
// const inputPassword = document.querySelector('.modal .password');
// const submitBtn = document.querySelector('.modal button')


// const storingData = form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     let EmailValue = inputEmail.value
//     let passwordValue = inputPassword.value

//     localStorage.setItem('username:', JSON.stringify(EmailValue))
//     localStorage.setItem('password:', JSON.stringify(passwordValue))

// })

/*
if login was succesful the clearing the field
*/


// function clearInputs() {
//     document.querySelectorAll('.loginModal form input').forEach(input => {
//         input.value = "";
//     });
// }


function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle i');

    sidebar.classList.toggle('collapsed');

    // Change toggle button icon
    if (sidebar.classList.contains('collapsed')) {
        toggleBtn.classList.remove('fa-chevron-left');
        toggleBtn.classList.add('fa-chevron-right');
    } else {
        toggleBtn.classList.remove('fa-chevron-right');
        toggleBtn.classList.add('fa-chevron-left');
    }
}

function toggleDropdown(element) {
    const dropdownContent = element.nextElementSibling;
    const dropdownIcon = element.querySelector('.dropdown-icon');
    const isCollapsed = document.querySelector('.sidebar').classList.contains('collapsed');

    if (!isCollapsed) {
        element.parentElement.classList.toggle('active');
        dropdownIcon.style.transform = element.parentElement.classList.contains('active')
            ? 'rotate(180deg)'
            : 'rotate(0)';
    }
}

// Add mobile support
if (window.innerWidth <= 768) {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('collapsed');
}