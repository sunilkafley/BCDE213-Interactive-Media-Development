import { requestLocation } from "../map/locationService.js";
import { drawRoute } from "../map/directions.js";

export function attachPopupEvents(popupElement, map) {
  const routeButton = popupElement.querySelector(".route-btn");

  if (!routeButton) {
    return;
  }

  routeButton.addEventListener("click", async () => {
    try {
      const location = await requestLocation();

      const destination = {
        latitude: Number(routeButton.dataset.lat),

        longitude: Number(routeButton.dataset.lng),
      };

      drawRoute(map, location, destination);
    } catch (error) {
      console.error("Unable to create route", error);
    }
  });
}
