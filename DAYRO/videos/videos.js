const requestdb = indexedDB.open('database', 1);

const form = document.querySelector('form');
const submit = form.querySelector('input[type="submit"]');
const videoFile = form.querySelector('input[type="file"]');
const videoSection = document.querySelector('section');

requestdb.onerror = (e) => console.error('IndexedDB error:', e);

requestdb.onsuccess = (e) => {
    console.log('Database successfully opened');
    const db = e.target.result;

    const transaction = db.transaction('Data', 'readonly');
    const store = transaction.objectStore('Data');
    const request = store.getAll();

    request.onsuccess = () => {
        const allVideos = request.result;
        videoSection.innerHTML = '';

        allVideos.forEach((videoEntry) => {
            const videoElem = document.createElement('video');
            videoElem.src = videoEntry.video;
            videoElem.controls = true;
            videoElem.style.display = 'block';
            videoElem.style.marginBottom = '10px';

            videoElem.addEventListener('play', () => pauseAllExcept(videoElem));

            videoSection.appendChild(videoElem);
        });
    };

};

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
        videoElem.style.display = 'block';
        videoElem.style.marginBottom = '10px';

        videoElem.addEventListener('play', () => pauseAllExcept(videoElem));

        videoSection.appendChild(videoElem);

        const transaction = db.transaction('Data', 'readwrite');
        const storeObj = transaction.objectStore('Data');

        storeObj.add({
            video: videoURL,
        });
    };


    if (file) {
        reader.readAsDataURL(file);
    } else {
        alert('Please select a video file.');
    }
}

function pauseAllExcept(currentVideo) {
    const allVideos = document.querySelectorAll('video');
    allVideos.forEach((video) => {
        if (video !== currentVideo) {
            video.pause();
        }
    });
};