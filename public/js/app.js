const batasWilayah = './data/map.geojson';

// Inisialisasi Peta (seperti yang kita diskusikan sebelumnya)
const map = L.map('map').setView([-6.9047338,106.9033833], 16);

// Base Layer (OpenStreetMap)
const osmBase = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Rizki Kurnia'
}).addTo(map);

// Base Layer (ArcGIS Satellite)
const arcgisSatellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; Rizki Kurnia'
});

// Layer Control
const baseMaps = {
    "OpenStreetMap": osmBase,
    "ArcGIS Satellite": arcgisSatellite
};
L.control.layers(baseMaps).addTo(map);
// Muat data batas wilayah untuk ditampilkan di peta