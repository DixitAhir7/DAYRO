// function initMap() {
//     const gujarat = { lat: 22.3094, lng: 72.1362 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 5,
//         center: gujarat,
//     });

//     const junagadh = { lat: 21.5222, lng: 70.4579 };
//     const marker = new google.maps.Marker({
//         position: junagadh,
//         map: map,
//         title: "Junagadh",
//     });

//     marker.addListener("click", () => {
//         console.log('clicked junagadh');
//     });
// }

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 22.3094, lng: 72.1362 },
    });

    const cities = [
        {
            name: "Junagadh",
            lat: 21.5222,
            lng: 70.4579,
            history: "Junagadh is known for its rich Nawabi history and Uparkot Fort.",
        },
        {
            name: "Lothal",
            lat: 22.5215,
            lng: 72.2483,
            history: "Lothal was one of the most prominent cities of the Indus Valley Civilization.",
        },
        {
            name: "Somnath",
            lat: 20.8880,
            lng: 70.4012,
            history: "Somnath is known for the famous Jyotirlinga temple and historical invasions.",
        },
    ];

    cities.forEach((citynames) => {
        const marker = new google.maps.Marker({
            position: { lattitude: citynames.lat, longitude: citynames.lng }, map,
            Name: citynames.name
        });

        marker.addListener("click", () => {
            console.log(`clicked ${citynames.name}`);
        });
    })
}

initMap();