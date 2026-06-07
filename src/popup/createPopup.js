import { popupTemplate } from "./popupTemplate.js";
import { attachPopupEvents } from "./attachPopupEvents.js";

export function createPopup(marker, popupData, map) {
  marker.bindPopup(popupTemplate(popupData), {
    autoPan: true,

    keepInView: true,

    autoPanPaddingTopLeft: [50, 50],
    autoPanPaddingBottomRight: [50, 320],

    maxWidth: 240,
  });

  marker.on("popupopen", (event) => {
    const popupElement = event.popup.getElement();

    attachPopupEvents(popupElement, map);
  });
}
