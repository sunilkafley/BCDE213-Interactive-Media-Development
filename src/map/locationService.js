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

        resolve(currentLocation);
      },

      (error) => {
        reject(error);
      },

      {
        enableHighAccuracy: true,

        timeout: 10000,

        maximumAge: 0,
      },
    );
  });
}
