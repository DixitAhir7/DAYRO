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

// login formm script

const btn = document.querySelector('button');
const form = document.querySelector('.show-form')

// btn.addEventListener('click', function () {
//     form.innerHTML = `
//     <form action="">
//         <label class="d-block" for="">enter name:</label>
//         <input type="text">

//             <label class="d-block" for="">enter password</label>
//             <input class="d-block" type="password" name="" id="p1">

//                 <input style="margin-top: 5px;" type="submit" value="submit">
//                 </form>
//                 `
// })



// Localstorage

const formStore = document.querySelector('.form form');
const inputName = document.querySelector('form input:first-child')
const inputPass = document.querySelector('form input:nth-child(2)')
const submitBtn = formStore.querySelector('input:nth-child(3)');

formStore.addEventListener('submit', (e) => {
    e.preventDefault()

    let username = inputName.value
    let userpass = inputPass.value

    localStorage.setItem('data', username)
    localStorage.setItem('data', userpass)
})