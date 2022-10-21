let map = L.map('map', {
  preferCanvas: true,
  scrollWheelZoom: false,
  zoomControl: false
}).setView([41.48024697281712, -71.31101489218936], 15);

L.control.zoom({
  position: 'bottomright'
}).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  detectRetina: true,
  maxZoom: 18,
}).addTo(map);

let customIcon = L.icon({
  iconUrl: '../assets/icon-location.svg',
  iconSize: [66, 88],
  iconAnchor: [33, 85],
  popupAnchor: [-3, -76]
});

let marker = L.marker([41.48024697281712, -71.31101489218936], {
  icon: customIcon
}).addTo(map);

marker.bindPopup("<h2>99 king street</h2><p>Newport, RI 02840</p><p>USA</p>", {
  offset: L.point(4, 15),
  minWidth: 125,
});