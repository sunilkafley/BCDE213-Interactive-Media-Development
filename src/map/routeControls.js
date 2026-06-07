import {
  getRouteControl,
  clearRouteControl,
  subscribeToRouteChanges,
} from "./routeState.js";
import { getRoutePanel } from "./routeInfoCard.js";
import { hideRouteInfo } from "./routeInfoCard.js";

export function initializeClearRouteControl(map) {
  const button = document.createElement("button");

  button.className = "map-clear-route-btn";

  button.innerHTML = "EXIT";

  button.title = "Clear Route";

  button.classList.add("route-control-hidden");

  button.addEventListener("click", () => {
    const routeControl = getRouteControl();

    if (!routeControl) {
      return;
    }

    map.removeControl(routeControl);

    clearRouteControl();
    hideRouteInfo();
  });

  subscribeToRouteChanges((hasRoute) => {
    button.classList.toggle("route-control-hidden", !hasRoute);
  });

  button.classList.toggle("route-control-hidden", getRouteControl() === null);

  const controlsContainer = document.querySelector(".map-controls");

  if (!controlsContainer) {
    return;
  }

  controlsContainer.appendChild(button);
}
