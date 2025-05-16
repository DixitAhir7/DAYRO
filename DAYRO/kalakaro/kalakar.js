// searching scrpt for artists
// search selectors form
const form = document.querySelector('form'); const inputSearch = form.querySelector('input[type="text"]'); const result = document.querySelector('.no-result'); const content = document.querySelectorAll('.artist-img'); const show_content = document.querySelector('.show-content'); const searchicon = document.querySelector('#search-icon');

// feedback when search not found
const feedbacktext = document.querySelector('.feedback-section textarea'); const feedbackaddbtn = document.querySelector('.feedback-section .feedbackbtns #send'); const skipfeedback = document.querySelector('.feedback-section .feedbackbtns #skip'); const feedbackdiv = document.querySelector('.feedback-section');
feedbackdiv.style.display = 'none';

//forstoring feedback value
function createfeedbackbox() { feedbackaddbtn.addEventListener('click', gettingvaluefeedback) };
function gettingvaluefeedback() { const feedbackvalue = feedbacktext.value; if (feedbackvalue) { console.log(feedbackvalue); feedbacktext.value = null; } };

// footer fixed while search
function footerPosition() {
    const footer = document.querySelector('footer'); footer.style.position = 'fixed'; footer.style.bottom = '0px'; footer.style.width = '1200px';
};


// Script for searching artists with images
function displayImages() {
    try {
        searchicon.addEventListener('click', (e) => {
            e.preventDefault(); const search = inputSearch.value.toLowerCase().trim(); let found = false; content.forEach((divImg) => {
                const img = divImg.querySelector("img"); const altText = img.getAttribute('alt').toLowerCase().trim(); if (altText.includes(search)) {
                    divImg.style.display = "block"; found = true;
                } else { divImg.style.display = "none"; }
            }); if (!found) {
                const feedbackdiv = document.querySelector('.feedback-section'); const notfoundmsg = document.createElement('h1'); notfoundmsg.innerHTML = 'sorry not found what you looking for'; notfoundmsg.style.fontWeight = 'normal'; notfoundmsg.style.textAlign = 'center';
                document.body.insertBefore(notfoundmsg, feedbackdiv); feedbackdiv.style.display = 'block';
                createfeedbackbox();
            }
        });
    } catch (e) { console.log(e); }
}; displayImages();

// suggestions for searching artist
try {
    function showsuggestions() {
        const inputSearchsuggestion = document.querySelector('input[type="text"]'); const img = document.querySelectorAll("img"); const showsuggestions = document.querySelector('.show-suggestions');
        inputSearchsuggestion.addEventListener('input', (e) => {
            e.preventDefault(); showsuggestions.style.display = 'block'; let searchvalue = inputSearchsuggestion.value.toLowerCase().trim(); showsuggestions.innerHTML = ""; const altdata = []; if (!searchvalue) { showsuggestions.style.display = 'none'; return };
            img.forEach(images => { const getdata = images.getAttribute('alt'); altdata.push(getdata); });
            const filterednames = altdata.filter(data => { return data.toLowerCase().includes(searchvalue.toLowerCase().trim()); }); filterednames.slice(0, altdata.length).forEach(match => {
                const suggestion = document.createElement('div'); suggestion.textContent = match; suggestion.classList.add('suggestion-item');

                // when i click on suggestion then it adds back to search
                suggestion.addEventListener('click', () => { inputSearchsuggestion.value = match; showsuggestions.innerHTML = ""; showsuggestions.style.display = 'none' }); showsuggestions.appendChild(suggestion);
            })
            document.addEventListener('click', (event) => {
                if (!showsuggestions.contains(event.target) && event.target !== inputSearchsuggestion) { showsuggestions.innerHTML = ''; showsuggestions.style.display = 'none'; }
            });
        });
    } showsuggestions();
} catch (e) { console.log('suggestion error:', e); };

// for adding atribute in all images loading
try {
    function loadImg() { const allimages = document.querySelectorAll('img'); allimages.forEach((imagesdata) => { imagesdata.setAttribute('loading', 'lazy'); }) }; loadImg();
} catch (e) { console.log('while adding loading atribute:', e); }