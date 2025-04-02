// this is for color combination text

{/* <p id="colorText">ડાયરો</p>
<script>
    const colors = ["red", "orange", "yellow", "green", "blue"];
    const textElement = document.getElementById("colorText");
    textElement.innerHTML = textElement.textContent
        .split("")
        .map((char, i) => `<span style="color: ${colors[i % colors.length]};">${char}</span>`)
        .join("");
</script> */}


// using google api for language translation into any language
// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
// }


// Localstorage

// const formStore = document.querySelector('.form form');
// const inputName = document.querySelector('form input:first-child')
// const inputPass = document.querySelector('form input:nth-child(2)')
// const submitBtn = formStore.querySelector('input:nth-child(3)');

// formStore.addEventListener('submit', (e) => {
//     e.preventDefault()

//     let username = inputName.value
//     let userpass = inputPass.value

//     localStorage.setItem('data', username)
//     localStorage.setItem('data', userpass)
// })


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