import { popupTemplate } from "./popupTemplate.js";
import { attachPopupEvents } from "./attachPopupEvents.js";

export function createPopup(marker, popupData, map) {
  marker.bindPopup(popupTemplate(popupData), {
    autoPan: true,

    keepInView: true,

    autoPanPadding: [20, 20],

    maxWidth: 320,
  });

  marker.on("popupopen", (event) => {
    const popupElement = event.popup.getElement();

    attachPopupEvents(popupElement, map);
  });
}
