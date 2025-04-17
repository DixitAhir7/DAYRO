// hasya-artists script //

// when user search footer stays as it is
function positionapplywhensearch() {
    try {
        const searchInput = document.querySelector("input[type='text']");
        const footer = document.querySelector("footer");

        searchInput.addEventListener("input", () => {
            const value = searchInput.value.trim();

            if (value) {
                footer.style.position = "fixed";
                footer.style.bottom = "0";
                footer.style.width = "100%";
            } else {
                footer.style.position = "static";
            }
        });
    } catch (e) {
        console.log(e);
    }
};

positionapplywhensearch();

// searching scrpt for artists
const form = document.querySelector('form');
const inputSearch = form.querySelector('input[type="text"]');
const result = document.querySelector('.no-result');
const content = document.querySelectorAll('.artist-img');
const show_content = document.querySelector('.show-content');
const iNPUT_SUBMIT = document.createElement('input');
iNPUT_SUBMIT.type = "submit";
iNPUT_SUBMIT.value = "Search";
form.appendChild(iNPUT_SUBMIT);


// Script for searching artists with images

function displayImages() {
    try {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const search = inputSearch.value.toLowerCase().trim();
            let found = false;

            content.forEach((divImg) => {
                const img = divImg.querySelector("img");
                const altText = img.getAttribute('alt').toLowerCase();

                if (altText.includes(search)) {
                    divImg.style.display = "block";
                    found = true;
                } else {
                    divImg.style.display = "none";
                }
            });

            if (!found) {
                result.style.display = "block";
            } else {
                result.style.display = "none";
            }
        });
    } catch (e) {
        console.log(e);
    }
};

displayImages();


// script for sorting based on type of artists


function sortingArtists() {
    try {
        const sortform = document.querySelector('.sortForm');
        const select = document.querySelector('#selected');
        const allartist = document.querySelectorAll('.artist-img');

        

        sortform.addEventListener('submit', (e) => {
            e.preventDefault();
            const selectvalue = select.value;

            allartist.forEach(artist => {
                const type = artist.getAttribute('data-type');
                if (selectvalue === "kalakaro") {
                    artist.style.display = "block";
                } else if (selectvalue === "hasya kalakaro" && type === "hasya") {
                    artist.style.display = "block";
                } else if (selectvalue === "folk singers" && type === "folk") {
                    artist.style.display = "block";
                } else {
                    artist.style.display = "none";
                }
            });
        });
    } catch (e) {
        console.warn('sorting error:', e);
    };
};

sortingArtists();