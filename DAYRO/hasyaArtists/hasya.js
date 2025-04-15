const form = document.querySelector('form');
const inputSearch = form.querySelector('input[type="text"]');
const result = document.querySelector('.no-result');
const content = document.querySelectorAll('.artist-img')
const iNPUT_SUBMIT = document.createElement('input');
iNPUT_SUBMIT.type = "submit";
iNPUT_SUBMIT.value = "search"
form.appendChild(iNPUT_SUBMIT);

// script for searching artists with images

try {
    function displayImages() {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const search = inputSearch.value.toLowerCase().trim()
            let found = false;

            content.forEach((divImg) => {
                const img = divImg.querySelector("img")
                const altText = img.getAttribute('alt').toLowerCase()
                if (altText.includes(search)) {
                    divImg.style.display = "block";
                    found = true;
                } else if (!altText.includes(search)) {
                    divImg.style.display = "block";
                } else {
                    divImg.style.display = "none"
                }
            })
        })
    }
    displayImages();
} catch (e) {
    console.log('erorr', e);
};