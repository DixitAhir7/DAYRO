// artists script //

// while searching footer stays as it is
function positionapplywhensearch() {
    try {
        const inputSearch = document.querySelector('input[type="text"]');
        const footer = document.querySelector("footer");

        inputSearch.addEventListener("input", () => {
            const value = inputSearch.value.trim();

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

// positionapplywhensearch();

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
            !found ? result.style.display = 'block' : 'none';
        });
    } catch (e) {
        console.log(e);
    }
};

displayImages();


// suggestions for searching artist

try {
    function showsuggestions() {
        const inputSearchsuggestion = document.querySelector('input[type="text"]');
        const img = document.querySelectorAll("img");
        const showsuggestions = document.querySelector('.show-suggestions');

        inputSearchsuggestion.addEventListener('input', (e) => {
            e.preventDefault();
            const searchvalue = inputSearchsuggestion.value.toLowerCase().trim();
            showsuggestions.innerHTML = "";

            const altdata = [];

            if (!searchvalue) return;

            img.forEach(images => {
                const getdata = images.getAttribute('alt');
                altdata.push(getdata);
            });

            const filterednames = altdata.filter(data => {
                return data.toLowerCase().includes(searchvalue.toLowerCase());
            });

            filterednames.slice(0, 5).forEach(match => {
                const suggestion = document.createElement('div');
                suggestion.textContent = match;
                suggestion.classList.add('suggestion-item');

                // when i click on suggestion then it adds back to search
                suggestion.addEventListener('click', () => {
                    inputSearchsuggestion.value = match;
                    showsuggestions.innerHTML = "";
                });
                showsuggestions.appendChild(suggestion);
            })
        });
    }

    showsuggestions();
} catch (e) { console.log('suggestion error:', e); };

// default suggestions in search

function suggestionDefault() {
    const defaultsuggestions = document.querySelector('.default-suggestions');
    const inputSearchsuggestion = document.querySelector('input[type="text"]');

    inputSearchsuggestion.addEventListener('focus', () => {
        const imagesalt = document.querySelectorAll('img');
        defaultsuggestions.innerHTML = '';
        imagesalt.forEach((imgdata) => {
            const getalt = imgdata.getAttribute('alt');
            if (getalt) {
                const suggestionItem = document.createElement('div');
                suggestionItem.textContent = getalt;
                suggestionItem.addEventListener('click', () => {
                    inputSearchsuggestion.value = getalt;
                });
                defaultsuggestions.appendChild(suggestionItem);
                defaultsuggestions.style.maxHeight = '350px';
                defaultsuggestions.style.overflowY = 'auto';
            }
        });
    });

    // when i click outside it should remove and after found also...
    document.addEventListener('click', (event) => {
        if (!defaultsuggestions.contains(event.target) && event.target !== inputSearchsuggestion) {
            defaultsuggestions.innerHTML = '';
        }
    });
}
// suggestionDefault();


// script for sorting based on type of artists

function sortingArtists() {
    try {
        const sortform = document.querySelector('.sortForm');
        const select = document.querySelector('#selected');
        const allartist = document.querySelectorAll('.artist-img');
        // const footerPosition = document.querySelector('footer');

        sortform.addEventListener('submit', (e) => {
            e.preventDefault();
            const selectvalue = select.value;

            allartist.forEach(artist => {
                const type = artist.getAttribute('data-type');
                if (selectvalue === "kalakaro") { artist.style.display = "block"; }
                else if (selectvalue === "hasya kalakaro" && type === "hasya") artist.style.display = "block";
                else if (selectvalue === "folk singers" && type === "folk") artist.style.display = "block";
                else if (selectvalue === "singers" && type === "singers") artist.style.display = "block";
                else if (selectvalue === "santvani" && type === "santvani") artist.style.display = "block";
                else { artist.style.display = "none"; }
            });
        });
    } catch (e) { console.warn('sorting error:', e); };
};

sortingArtists();


// for adding atribute in all images loading
try {
    function loadImg() {
        const allimages = document.querySelectorAll('img');
        allimages.forEach((imagesdata) => { imagesdata.setAttribute('loading', 'lazy'); })
    };
    loadImg();
} catch (e) { console.log('while adding loading atribute:', e); }


// function to prevent page from reloading

function preventloading() {
    const allatags = document.querySelectorAll('a');
    allatags.forEach((tags) => {
        tags.href = 'javascript:void()'
    })
}
preventloading();