import {
  getRouteControl,
  setRouteControl,
  clearRouteControl,
} from "./routeState.js";
import { showRouteInfo } from "./routeInfoCard.js";

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
  routeControl.on("routesfound", (event) => {
    const route = event.routes[0];

    const distance = `${(route.summary.totalDistance / 1000).toFixed(1)} km`;

    const duration = `${Math.round(route.summary.totalTime / 60)} min`;

    showRouteInfo({
      distance,
      duration,
    });
  });

  setRouteControl(routeControl);
}
