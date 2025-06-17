// Initialize map centered on India
var map = L.map('map').setView([22.9734, 78.6569], 5);

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors',
  maxZoom: 18,
}).addTo(map);

// Add a marker in Delhi
L.marker([28.6139, 77.2090])
  .addTo(map)
  .bindPopup('<b>Delhi</b><br>Capital of India.')
  .openPopup();
