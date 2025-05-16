 <!-- script for opening page in new tab -->
 <!-- this is for main index.html script -->

<script>
document.addEventListener("DOMContentLoaded", () => {
    const aTag = document.querySelector("header nav .about-web a");

    if (aTag) {
        aTag.addEventListener("click", (e) => {

            e.preventDefault();

            // getting link using href attribute
            const URL = aTag.getAttribute("href");

            if (URL) {
                window.open(URL, "_blank");
            } else {
                console.error("No href attribute found on the link.");
            }
        });
    } else {
        console.error("Anchor tag not found.");
    }
});   

// how much time has spend in website

export function userTime() {
    const oldStart = localStorage.getItem("startTime");

    if (oldStart) {
        const previousTime = Number(oldStart);
        const now = Date.now();
        const timeSpent = now - previousTime;
        const timeSec = Math.floor(timeSpent / 1000);
        const timeMin = Math.floor(timeSec / 60);

        console.log(`You spent ${timeMin} minutes`);
        localStorage.removeItem("startTime");
    }
    localStorage.setItem("startTime", Date.now());
}


# for sharing apps

// loader function
 window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  loader.style.display = "none";
  content.style.display = "block";
});

// viewsondayro: for appending views

function appendview() {
    const viewstextarea = document.querySelector('.usersviews textarea');
    const displayhtml = document.querySelector('.displayuserviews p');
    const textareavalue = viewstextarea.value.trim();
    let deletedviewCount = localStorage.getItem('deletedview');
    if (deletedviewCount > 1) {
        displayhtml.innerHTML += `${textareavalue} <br>`;
    }
    localStorage.setItem('deletedview', (deletedviewCount));
}

<!-- script for default suggestions -->

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
}
</script>

<!-- json for kalakaro name translate -->

"artistnames": [
        "માયાભાઇ આહીર",
        "કીર્તીદાન ગઢવી",
        "ઈશરદાન ગઢવી",
        "દેવાયત ખવડ",
        "ભીખુદાન ગઢવી",
        "ધીરુભાઈ સરવૈયા",
        "ભૂવાજી",
        "સાઈરામ દવે",
        "ફાલ્ગુની પાઠક",
        "રાજભા ગઢવી",
        "બ્રિજરાજ ગઢવી",
        "ગીતા રબારી",
        "કિંજલ દવે",
        "ઓસમાંન મીર",
        "ગોપાલ સાધુ",
        "જીગ્નેશ બારોટ",
        "રસમિતા રબારી",
        "પ્રફુલ દવે",
        "બિરજુ બારોટ",
        "સાગરદાન ગઢવી",
        "રાજ ગઢવી",
        "મનિરાજ બારોટ",
        "પરેશદન ગઢવી",
        "રાજલ બારોટ",
        "ઉમેશ બારોટ",
        "ભાવેશ આહીર",
        "અર્જુન આહીર",
        "હેમંત ચૌહાણ",
        "રામદાસ ગોંડળીયા",
        "હિતેશ અંટાલા",
        "હકાભાં ગઢવી",
        "દિવાળીબેન ભીલ",
        "પિયુસ મિસ્ત્રી",
        "શૈલેષ મહારાજ",
        "શાહબુદ્દીન રાઠોડ",
        "જીતુભાઈ દ્વારકવાડા"
    ]