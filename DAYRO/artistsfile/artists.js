// getting artist data to display data of searched artists

const getArtistData = JSON.parse(localStorage.getItem('searchedArtist')) || [];
const getMainDiv = document.querySelector('.artists');

getMainDiv.innerHTML += `
     <h2>${getArtistData.name}</h2>
            <p>${getArtistData.age}</p>
            <p>${getArtistData.significantWork}</p>
`