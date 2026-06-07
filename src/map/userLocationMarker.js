import { getStoredLocation } from "./locationService.js";

let userLocationMarker = null;
let userLocationHalo = null;
let pulseMarker = null;

export function showUserLocation(map, latitude, longitude) {
  const latlng = [latitude, longitude];

  if (userLocationMarker) {
    userLocationMarker.setLatLng(latlng);
    userLocationHalo.setLatLng(latlng);
    pulseMarker?.setLatLng(latlng);

    return;
  }

  userLocationHalo = L.circle(latlng, {
    radius: 20,
    stroke: false,
    fillColor: "#4285F4",
    fillOpacity: 0.15,
  }).addTo(map);

  const pulseIcon = L.divIcon({
    className: "user-location-pulse",
    html: "<div></div>",
    iconSize: [32, 32],
  });

  pulseMarker = L.marker(latlng, {
    icon: pulseIcon,
    interactive: false,
  }).addTo(map);

  userLocationMarker = L.circleMarker(latlng, {
    radius: 8,
    fillColor: "#4285F4",
    color: "#ffffff",
    weight: 3,
    fillOpacity: 1,
  }).addTo(map);
}

export function restoreUserLocation(map) {
  const location = getStoredLocation();

  if (!location) {
    return false;
  }

  showUserLocation(map, location.latitude, location.longitude);

  return true;
}

export function clearUserLocation(map) {
  if (userLocationMarker) {
    map.removeLayer(userLocationMarker);
    userLocationMarker = null;
  }

  if (userLocationHalo) {
    map.removeLayer(userLocationHalo);
    userLocationHalo = null;
  }

  if (pulseMarker) {
    map.removeLayer(pulseMarker);
    pulseMarker = null;
  }
}

export function initializeUserLocation(map) {
  restoreUserLocation(map);

  document.addEventListener("fruitfinder:location-updated", () => {
    restoreUserLocation(map);
  });
}
