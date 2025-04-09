//video funtionality where users can add videos and have fun

const form = document.querySelector('form');
const video = form.querySelector('form input[type="file"]');
const displayVideo = document.querySelector('section .show-video');
const submit = form.querySelector('input[type="submit"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // window.addEventListener('DOMContentLoaded', () => {

    //     // note: if file > 5 mb then it won't be store in localstorage

    //     const savedVideo = localStorage.getItem('videoopened');
    //     if (savedVideo) {
    //         displayVideo.innerHTML = `
    //             <video src="${JSON.parse(savedVideo)}" controls autoplay width="500"></video>
    //         `;
    //     }
    // });

    // video can not added again

    // if (displayVideo.querySelector('video')) {
    //     return;
    // }

    const videoFile = video.files[0];

    if (videoFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const videoUrl = event.target.result;

            displayVideo.innerHTML += `
                <video src="${videoUrl}" controls autoplay width="500"></video>
            `;

            // localStorage.setItem('videoopened', JSON.stringify(videoUrl));
        };
        reader.readAsDataURL(videoFile);
    } else {
        alert('Choose at least one video');
    }
});