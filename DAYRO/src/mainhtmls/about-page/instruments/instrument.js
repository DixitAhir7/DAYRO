"use strict"

const benjo = document.querySelector('.benjo-details p span');
const sarkariTune = document.querySelector('audio');

benjo.addEventListener('click', (e) => {
    if (sarkariTune.paused) {
        sarkariTune.play();
    } else {
        sarkariTune.pause();
    }
})