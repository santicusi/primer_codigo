
var map = L.map('map', {
    center: [3.44822551, -76.55711691],
    zoom: 16,
    maxBounds: [
        [3.447, -76.558], 
        [3.449, -76.556]  
    ]
});


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var iconoPersonalizado = L.icon({
    iconUrl: 'zoo.png', 
    iconSize: [50, 50], 
    iconAnchor: [15, 30], 
    popupAnchor: [0, -30] 
});


var marcadorPersonalizado = L.marker([3.44822551,-76.55711691], { icon: iconoPersonalizado }).addTo(map);
marcadorPersonalizado.bindPopup("Visitanos ahora!!");


