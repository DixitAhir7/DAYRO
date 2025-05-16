// for suggestions object

const suggestionobj = [
    { 'kirtidan gadhvi': '../individualkalakaro/kirtidan/kirtidan.html' },
    { 'mayabhai ahir': 'individualkalakaro/mayaAhir/Mayaahir.html' },
    { 'ishardan gadhvi': 'Ishardan' },
    { 'devayt khavad': 'Devayt Khavad' },
    { 'bhikhudan gadhvi': 'Bhikhudan Gadhvi' },
    { 'Dhirubhai Sarvaiya': 'Dhirubhai ' },
    { 'gaman santhal': '' },
    { 'sairam Dave': 'Sairam ' },
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
        const inputSearchsuggestion = document.querySelector('.search-sec input[type="text"]'); const searchsection = document.querySelector('.search-sec'); const showsuggestions = document.querySelector('.show-suggestions');
        inputSearchsuggestion.addEventListener('input', (e) => {
            inputSearchsuggestion.classList.remove('borderstyle')
            e.preventDefault(); showsuggestions.style.display = 'block'; let searchvalue = inputSearchsuggestion.value.toLowerCase().trim(); showsuggestions.innerHTML = ""; if (!searchvalue) {
                showsuggestions.style.display = 'none'; inputSearchsuggestion.classList.add('borderstyle')
                return
            }; const kalakardata = suggestionobj.map(obj => Object.keys(obj)[0]);
            const filterednames = kalakardata.filter(name => name.toLowerCase().includes(searchvalue));
            filterednames.forEach(match => {
                const suggestion = document.createElement('a'); suggestion.textContent = match; suggestion.classList.add('suggestion-item');
                const searchicon = document.querySelector('#search-icon');
                searchicon.addEventListener('click', (e) => {
                    e.preventDefault();
                    const clickedartisturl = suggestionobj.find((data) => {
                        if (data[inputSearchsuggestion.value]) return true
                    });

                    let url = Object.values(clickedartisturl)[0]
                    window.location.assign(url)
                })
                suggestion.addEventListener('click', () => {
                    inputSearchsuggestion.value = match; showsuggestions.innerHTML = ""; showsuggestions.style.display = 'none';
                    const clickedartisturl = suggestionobj.find((data) => {
                        if (data[inputSearchsuggestion.value]) return true
                    });

                    let url = Object.values(clickedartisturl)[0]
                    window.location.assign(url)
                }); showsuggestions.appendChild(suggestion);
            });

            document.addEventListener('click', (event) => {
                if (!showsuggestions.contains(event.target) && event.target !== inputSearchsuggestion) { showsuggestions.innerHTML = ''; showsuggestions.style.display = 'none'; }
            });
        });
        inputSearchsuggestion.classList.add('borderstyle')


    } showsuggestions();
} catch (e) { console.log('suggestion error:', e); };