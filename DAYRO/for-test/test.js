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
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}
