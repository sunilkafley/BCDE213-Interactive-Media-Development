export function initMap() {

  const map = L.map('map').setView(
    [-43.5321, 172.6362],
    13
  )

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution:
        '&copy; OpenStreetMap contributors'
    }
  ).addTo(map)

  return map

}