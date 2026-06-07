let currentLocation = null;

export function getStoredLocation() {
  return currentLocation;
}

export function hasLocation() {
  return currentLocation !== null;
}

export function requestLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation not supported"));

      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        currentLocation = {
          latitude: position.coords.latitude,

          longitude: position.coords.longitude,

          accuracy: position.coords.accuracy,
        };

        document.dispatchEvent(new CustomEvent("fruitfinder:location-updated"));

        resolve(currentLocation);
      },

      (error) => {
        reject(error);
      },

      {
        enableHighAccuracy: false,

        timeout: 5000,

        maximumAge: 300000,
      },
    );
  });
}

export function getCurrentLatLng() {
  if (!currentLocation) {
    return null;
  }

  return [currentLocation.latitude, currentLocation.longitude];
}
