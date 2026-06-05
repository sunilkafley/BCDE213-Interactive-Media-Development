import { DEFAULT_CENTER, DEFAULT_ZOOM } from "./initMap.js";

export function initializeControls(map) {
  const mapElement = document.querySelector(".map-section");

  if (!mapElement) {
    return;
  }

  const controls = document.createElement("div");

  controls.className = "map-controls";

  controls.innerHTML = `
    <button
      id="locateBtn"
      class="map-control-btn"
      aria-label="Locate Me"
    >
      <img
        src="assets/icons/location.webp"
        alt=""
      >
    </button>

    <button
      id="zoomInBtn"
      class="map-control-btn"
      aria-label="Zoom In"
    >
      <img
        src="assets/icons/plus.webp"
        alt=""
      >
    </button>

    <button
      id="zoomOutBtn"
      class="map-control-btn"
      aria-label="Zoom Out"
    >
      <img
        src="assets/icons/minus.webp"
        alt=""
      >
    </button>

    <button
      id="resetViewBtn"
      class="map-control-btn"
      aria-label="Reset Map"
    >
      <img
        src="assets/icons/reset.webp"
        alt=""
      >
    </button>
  `;

  mapElement.appendChild(controls);
  mapElement.appendChild(controls);

  const zoomInBtn = document.getElementById("zoomInBtn");

  zoomInBtn?.addEventListener("click", () => {
    map.zoomIn();
  });

  const zoomOutBtn = document.getElementById("zoomOutBtn");

  zoomOutBtn?.addEventListener("click", () => {
    map.zoomOut();
  });

  const resetViewBtn = document.getElementById("resetViewBtn");

  resetViewBtn?.addEventListener("click", () => {
    map.setView(DEFAULT_CENTER, DEFAULT_ZOOM);
  });
}
