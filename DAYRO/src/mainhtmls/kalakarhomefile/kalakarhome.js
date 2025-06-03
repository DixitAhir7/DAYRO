"use strict"

// for suggestions object

const suggestionobj = [
    { 'kirtidan gadhvi': { name: 'kirtidan Gadhvi', age: 58, significantWork: 'singer' } },
    { 'mayabhai ahir': { name: 'Mayabhai Ahir', age: 60, significantWork: 'comedy' }, },
    { 'ishardan gadhvi': { name: 'ishardan Gadhvi', age: 58, significantWork: 'folk Music' } },
    { 'devayt khavad': { name: 'devayt khavad', age: 58, significantWork: 'folk Music' } },
    { 'bhikhudan gadhvi': { name: 'bhikhudan gadhvi', age: 58, significantWork: 'folk Music' } },
    { 'Dhirubhai Sarvaiya': { name: 'dhirubhai sarvaiya', age: 58, significantWork: 'comedy' } },
    { 'gaman santhal': { name: 'gaman santhal', age: 58, significantWork: 'singer' } },
    { 'sairam Dave': { name: 'sairam dave', age: 58, significantWork: 'comedy' } },
    { 'falguni pathak': 'Falguni Pathak' },
    { 'rajbha Gadhvi': 'Rajbha ' },
    { 'aditya Gadhvi': 'aditya gadhvi' },
    { 'brijraj Gadhvi': 'Brijraj Gadhvi' },
    { 'geeta rabari': 'Geeta Rabari' },
    { 'kinjal dave': 'Kinjal Dave' },
    { 'osman mir': 'Osman Mir' },
    { 'gopal sadhu': 'Gopal Sadhu' },
    { 'jignesh barot': 'Jignesh Barot' },
    { 'rasmitaben rabari': 'Rasmita Rabari' },
    { 'praful dave': 'praful dave' },
    { 'uday dhandhal': 'uday dhandhal' },
    { 'birju barot': 'Birju Barot' },
    { 'sagardan Gadhvi': 'Sagardan Gadhvi' },
    { 'raj Gadhvi': 'Raj Gadhvi' },
    { 'maniraj Barot': 'Maniraj ' },
    { 'pareshdan Gadhvi': 'Pareshdan Gadhvi' },
    { 'rajal Barot': 'Rajal Barot' },
    { 'umesh Barot': 'Umesh Barot' },
    { 'bhavesh ahir': 'Bhavesh Ahir' },
    { 'arjun ahir': 'Arjun Ahir' },
    { 'hemant Chauhan': 'Hemant' },
    { 'ramdas Gondaliya': 'Ramdas' },
    { 'hitesh Antala': 'Hitesh' },
    { 'hakabha Gadhvi': 'Hakabha' },
    { 'diwaliben bhil': 'diwaliben' },
    { 'piyush mistry': 'Piyush Mistry' },
    { 'shailesh maharaj': 'Shailesh Maharaj' },
    { 'Shahabuddin rathod': 'Shahabuddin Rathod' },
    { 'Jitubhai Dwarkavada': 'Jitubhai ' },
];

// suggestions for searching artist
try {
    function showsuggestions() {
        const inputSearchsuggestion = document.querySelector('.search-sec input[type="text"]');
        const showsuggestions = document.querySelector('.show-suggestions');

        inputSearchsuggestion.addEventListener('input', (e) => {
            inputSearchsuggestion.classList.remove('borderstyle')
            e.preventDefault();
            showsuggestions.style.display = 'block';
            let searchvalue = inputSearchsuggestion.value.toLowerCase().trim();
            showsuggestions.innerHTML = "";
            if (!searchvalue) {
                showsuggestions.style.display = 'none';
                inputSearchsuggestion.classList.add('borderstyle')
                return;
            };

            const kalakardata = suggestionobj.map(obj => Object.keys(obj)[0]);
            const filterednames = kalakardata.filter(name => name.toLowerCase().includes(searchvalue));
            filterednames.forEach(match => {
                const suggestion = document.createElement('a');
                suggestion.textContent = match;
                suggestion.classList.add('suggestion-item');
                const searchicon = document.querySelector('#search-icon');

                searchicon.addEventListener('click', (e) => {
                    e.preventDefault();
                    const clickedartisturl = suggestionobj.find((data) => {
                        return data[inputSearchsuggestion.value] ? true : '';
                    });
                    let url = null;
                    if (clickedartisturl && typeof clickedartisturl === 'object') {
                        url = Object.values(clickedartisturl)[0];
                    }
                    else {
                        feedbackdiv.style.display = 'block';
                        createfeedbackbox();
                    }

                });
                suggestion.addEventListener('click', () => {
                    inputSearchsuggestion.value = match;
                    showsuggestions.innerHTML = "";
                    showsuggestions.style.display = 'none';
                    const clickedartisturl = suggestionobj.find(data => {
                        return data[inputSearchsuggestion.value] ? true : '';
                    }
                    );
                    let url = null;
                    if (clickedartisturl && typeof clickedartisturl === 'object') {
                        url = Object.values(clickedartisturl)[0];
                        console.log(url);
                    }
                    feedbackdiv.style.display = 'block';
                    createfeedbackbox();
                });
                showsuggestions.appendChild(suggestion);
            });

            document.addEventListener('click', (event) => {
                if (!showsuggestions.contains(event.target) && event.target !== inputSearchsuggestion) {
                    showsuggestions.innerHTML = '';
                    showsuggestions.style.display = 'none';
                }
            });
        });
        inputSearchsuggestion.classList.add('borderstyle')
    }
    showsuggestions();
} catch (e) { console.log('suggestion error:', e); };

// feedback when search not found
const feedbacktext = document.querySelector('.feedback-section textarea');
const feedbackaddbtn = document.querySelector('.feedback-section .feedbackbtns #send');
const skipfeedback = document.querySelector('.feedback-section .feedbackbtns #skip');
const feedbackdiv = document.querySelector('.feedback-section');
feedbackdiv.style.display = 'none';

//forstoring feedback value
function createfeedbackbox() { feedbackaddbtn.addEventListener('click', gettingvaluefeedback) };
feedbackaddbtn.addEventListener('click', function () {
    const inputSearchsuggestion = document.querySelector('.search-sec input[type="text"]');
    const msgdiv = document.createElement('div');
    msgdiv.className = 'msgdiv';
    const icon = document.createElement('i');
    icon.classList.add('fa-solid');
    const ptag_msg = document.createElement('p');
    ptag_msg.className = 'ptagformsg';
    ptag_msg.innerHTML = 'Thanks for feedback';
    document.body.appendChild(msgdiv).appendChild(ptag_msg);
    feedbackdiv.style.display = 'none';
    setTimeout(() => {
        msgdiv.classList.add('hide');
        msgdiv.addEventListener('transitionend', () => { msgdiv.remove() })
    }, 1200); inputSearchsuggestion.value = null;
});

function gettingvaluefeedback() {
    const feedbackvalue = feedbacktext.value;
    feedbackvalue ? console.log(feedbackvalue) : feedbacktext.value = null;
    feedbacktext.value = null;
};