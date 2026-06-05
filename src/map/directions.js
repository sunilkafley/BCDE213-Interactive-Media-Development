import {
  getRouteControl,
  setRouteControl,
  clearRouteControl,
} from "./routeState.js";

function removeExistingRoute(map) {
  const routeControl = getRouteControl();

  if (!routeControl) {
    return;
  }

  map.removeControl(routeControl);

  clearRouteControl();
}

export function drawRoute(map, start, destination) {
  removeExistingRoute(map);

  const routeControl = L.Routing.control({
    waypoints: [
      L.latLng(start.latitude, start.longitude),

      L.latLng(destination.latitude, destination.longitude),
    ],

    addWaypoints: false,

    draggableWaypoints: false,

    fitSelectedRoutes: true,

    show: false,
  });

  routeControl.addTo(map);

  setRouteControl(routeControl);
}
