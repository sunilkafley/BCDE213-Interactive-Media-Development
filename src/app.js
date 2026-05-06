// Create map
const map = L.map('map').setView([-43.5321, 172.6362], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; OpenStreetMap contributors'
}).addTo(map);

// Load GeoJSON file
fetch('data/trees.geojson')
  .then(response => response.json())
  .then(data => {

    // Add GeoJSON layer
    L.geoJSON(data, {

      // Popup for each feature
      onEachFeature: function (feature, layer) {

        const popupContent = `
          <strong>${feature.properties.name}</strong><br>
          Fruit Type: ${feature.properties.fruit}
        `;

        layer.bindPopup(popupContent);
      }

    }).addTo(map);

  })
  .catch(error => {
    console.error('Error loading GeoJSON:', error);
  });