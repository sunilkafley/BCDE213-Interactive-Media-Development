let currentRouteControl = null;

export function getRouteControl() {
  return currentRouteControl;
}

export function setRouteControl(routeControl) {
  currentRouteControl = routeControl;
}

export function clearRouteControl() {
  currentRouteControl = null;
}
