// Create map
const map = L.map('map').setView([-43.5321, 172.6362], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add marker in Christchurch
L.marker([-43.5321, 172.6362])
  .addTo(map)
  .bindPopup('Christchurch City Centre')
  .openPopup();