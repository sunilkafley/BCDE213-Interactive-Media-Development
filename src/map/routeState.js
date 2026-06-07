let currentRouteControl = null;

let routeChangeCallbacks = [];
let currentRouteSummary = null;

export function getRouteControl() {
  return currentRouteControl;
}

export function setRouteControl(routeControl) {
  currentRouteControl = routeControl;

  notifyRouteChange();
}

export function clearRouteControl() {
  currentRouteControl = null;

  notifyRouteChange();
}

export function subscribeToRouteChanges(callback) {
  routeChangeCallbacks.push(callback);
}

function notifyRouteChange() {
  routeChangeCallbacks.forEach((callback) => {
    callback(currentRouteControl !== null);
  });
}

export function getRouteSummary() {
  return currentRouteSummary;
}

export function setRouteSummary(summary) {
  currentRouteSummary = summary;

  notifyRouteChange();
}

export function clearRouteSummary() {
  currentRouteSummary = null;
}
