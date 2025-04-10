const requestdb = indexedDB.open('database', 1);

const form = document.querySelector('form');
const submit = form.querySelector('input[type="submit"]');
const videoFile = form.querySelector('input[type="file"]');
const show = document.querySelector('section video');

requestdb.onerror = (e) => console.log(e);

requestdb.onsuccess = (e) => {
    console.log('database successfully opened');
    const db = e.target.result;

    const transaction = db.transaction('Data', 'readonly');
    const store = transaction.objectStore('Data');
    const request = store.getAll();

    // ai-logic for save video even after refresh

    request.onsuccess = () => {
        const allVideos = request.result;
        if (allVideos.length > 0) {
            const lastVideo = allVideos[allVideos.length - 1];
            show.src = lastVideo.video;
            show.style.display = 'block';
        };
    };
};

requestdb.onupgradeneeded = (e) => {
    let db = e.target.result;

    if (!db.objectStoreNames.contains('Data')) {
        const createObj = db.createObjectStore('Data', { keyPath: 'id', autoIncrement: true });
        createObj.createIndex('videos', 'videos', { unique: true });
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    displayVideo();
});


// this function is for showing selected video on display

function displayVideo() {
    const db = requestdb.result;
    const file = videoFile.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        const videoURL = e.target.result;

        if (show) {
            show.src = videoURL;
            show.style.display = 'block';
        } else {
            console.error('Video element not found');
        }

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
};