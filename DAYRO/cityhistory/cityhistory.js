function initMap() {
    const gujarat = { lat: 22.3094, lng: 72.1362 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: gujarat,
    });

    const junagadh = { lat: 21.5222, lng: 70.4579 };
    const marker = new google.maps.Marker({
        position: junagadh,
        map: map,
        title: "Junagadh",
    });

    marker.addListener("click", () => {
    });
}