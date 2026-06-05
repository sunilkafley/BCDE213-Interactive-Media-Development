export const DEFAULT_CENTER = [-43.5321, 172.6362];

export const DEFAULT_ZOOM = 13;

export function initMap() {
  const map = L.map("map", {
    zoomControl: false,
  }).setView(DEFAULT_CENTER, DEFAULT_ZOOM);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  return map;
}
