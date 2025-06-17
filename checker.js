const map = L.map('map').setView([20.5937, 78.9629], 4); // India-centered view

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 10,
  attribution: 'Map data © OpenStreetMap contributors',
}).addTo(map);

let planeMarkers = [];

// Function to load planes from OpenSky
async function loadPlanes() {
  const response = await fetch('https://opensky-network.org/api/states/all');
  const data = await response.json();

  // Clear old markers
  planeMarkers.forEach(marker => map.removeLayer(marker));
  planeMarkers = [];

  if (data.states) {
    data.states.forEach(flight => {
      const lat = flight[6];
      const lon = flight[5];
      const callsign = flight[1] || 'Unknown';

      if (lat && lon) {
        const marker = L.marker([lat, lon])
          .addTo(map)
          .bindPopup(`✈️ ${callsign}`);
        planeMarkers.push(marker);
      }
    });
  }
}

// Initial load
loadPlanes();

// Refresh every 10 seconds
setInterval(loadPlanes, 10000);
