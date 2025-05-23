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