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

* script for artist video
<script>
    "use strict"

const requestdb = indexedDB.open('database', 1);

const form = document.querySelector('form');
const submit = form.querySelector('input[type="submit"]');
const videoFile = form.querySelector('input[type="file"]');
const videoSection = document.querySelector('.add-video');

// media-querry for video
const mediaQuerry = window.matchMedia("(max-width: 768px)")
const mediaQuerry2 = window.matchMedia("(max-width: 400px)")

requestdb.onerror = (e) => console.error('IndexedDB error:', e);

requestdb.onsuccess = (e) => {
    console.log('Database successfully opened');
    const db = e.target.result;

    // creating storage inside indexddb

    const transaction = db.transaction('Data', 'readonly');
    const store = transaction.objectStore('Data');

    // it'll get all video
    const request = store.getAll();

    request.onsuccess = () => {
        const allVideos = request.result;
        videoSection.innerHTML = '';

        /*
        in allvideos result will shown,
        foreach will run in every added video and it's creating video tag inside div
        */

        allVideos.forEach((videoEntry) => {
            const videoContainer = document.createElement('div');
            videoContainer.style.marginBottom = '10px';

            const videoElem = document.createElement('video');
            videoElem.src = videoEntry.video;
            videoElem.controls = true;
            videoElem.style.display = 'block';
            videoElem.style.width = "450px"
            videoElem.style.height = "450px"
            videoElem.addEventListener('play', () => pauseAllExcept(videoElem));

            // setting size for videos in phones

            try {
                if (mediaQuerry.matches) {
                    videoElem.style.width = '300px'
                    videoElem.style.height = "300px"
                } else if (mediaQuerry2.matches) {
                    videoElem.style.width = '300px'
                    videoElem.style.height = "300px"
                }
            } catch (e) {
                console.warn('error', e);
            } finally {
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.style.marginTop = '5px';
                deleteBtn.addEventListener('click', () => {
                    const askusertodelete = prompt('are you sure?')
                    if (askusertodelete.trim().toLowerCase() === 'yes') {
                        deleteVideo(videoEntry.id, videoContainer)
                    } else if (askusertodelete.trim().toLowerCase() === 'no') return;
                })
                videoContainer.appendChild(videoElem);
                videoContainer.appendChild(deleteBtn);
                videoSection.appendChild(videoContainer);
            }
        });
    };
};

// this is for creating database objectStores
requestdb.onupgradeneeded = (e) => {
    let db = e.target.result;
    if (!db.objectStoreNames.contains('Data')) {
        const createObj = db.createObjectStore('Data', { keyPath: 'id', autoIncrement: true });
        createObj.createIndex('videos', 'video', { unique: false });
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    displayVideo();
});

function displayVideo() {
    const db = requestdb.result;
    const file = videoFile.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        const videoURL = e.target.result;
        const videoElem = document.createElement('video');
        videoElem.src = videoURL;
        videoElem.controls = true;
        videoElem.style.width = "450px"
        videoElem.style.height = "450px"
        videoElem.style.display = 'block';
        videoElem.style.marginBottom = '10px';
        videoElem.addEventListener('play', () => pauseAllExcept(videoElem));
        videoElem ? form.reset() : ''
        videoSection.appendChild(videoElem);

        const transaction = db.transaction('Data', 'readwrite');
        const storeObj = transaction.objectStore('Data');

        storeObj.add({ video: videoURL });
    };
    file ? reader.readAsDataURL(file) : '';
};

// it's for pausing video 

function pauseAllExcept(currentVideo) {
    /*
    will get all video, and loop inside all videos,
    only one video plays at a time
    */
    const allVideos = document.querySelectorAll('video');
    allVideos.forEach((video) => {
        video !== currentVideo ? video.pause() : '';
    });
};

// clearing video

function deleteVideo(id, container) {
    try {
        const db = requestdb.result;
        const transaction = db.transaction('Data', 'readwrite');
        const store = transaction.objectStore('Data');

        // deleting based on stored id in indexdb
        const deleteRequest = store.delete(id);

        deleteRequest.onsuccess = () => {
            container.remove();
        };

        deleteRequest.onerror = (e) => {
            console.error('Delete failed', e);
        };
    } catch (e) { console.log(e); }
}

deleteVideo();
</script>

<html>
 <!-- i'll add daily news about Gujrat's culture and everything if possible -->
     <section class="news-section">
        <div class="row">
            <div class="col-4">
                <div class="contentdiv">
                    <a href="https://www.youtube.com/live/0mPmTMYK8-I?si=Mr5XiOLRGxp3SYVx">
                        <img src="public/IMG/Screenshot 2025-05-12 194518.png" alt="">
                        <p>Religious Dayro was held at mangaldham bhaguda</p>
                    </a>
                </div>
            </div>
            <div class="col-4">
                <div class="contentdiv">
                    <a href="https://www.youtube.com/live/0mPmTMYK8-I?si=Mr5XiOLRGxp3SYVx">
                        <img src="public/kalakaro-img/kirtidan-gadhvi.jpeg" alt="">
                        <p>kirtidan gadhvi and many more kalakar was there</p>
                    </a>
                </div>
            </div>
            <div class="col-4">
                <div class="contentdiv">
                    <a href="https://youtube.com/shorts/dAscOeohseU?si=8E8UWP87hP4DInaC">
                        <img src="public/kalakaro-img/gaman santhal.jpg" alt="">
                        <p>watch bhuvaji buy his new car</p>
                    </a>
                </div>
            </div>
        </div>
    </section> 

</html>