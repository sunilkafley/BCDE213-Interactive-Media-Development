import { popupTemplate } from "./popupTemplate.js";
import { attachPopupEvents } from "./attachPopupEvents.js";

export function createPopup(marker, popupData, map) {
  marker.bindPopup(popupTemplate(popupData));

  marker.on("popupopen", (event) => {
    const popupElement = event.popup.getElement();

    attachPopupEvents(popupElement, map);
  });
}
