import { getRipeStatus } from "./getRipeStatus.js";

function renderImage(data) {
  if (!data.hasImage) {
    return "";
  }

  return `
    <div class="popup-image">
      <img
        src="${data.image}"
        alt="${data.name}"
      >
    </div>
  `;
}

function renderHeader(data) {
  return `
    <div class="popup-header">
      <h3 class="popup-title">
        ${data.name}
      </h3>
    </div>
  `;
}

function renderDetails(data, ripeStatus) {
  return `
    <div class="popup-meta">

      <div class="popup-meta-row">
        <span class="popup-meta-label">Best Season:</span>
        <span>${data.bestSeason}</span>
      </div>

      <div class="popup-meta-row">
        <span class="popup-meta-label">Ripe Status:</span>
        <span>${ripeStatus}</span>
      </div>

    </div>

    <p class="popup-description">
      ${data.description}
    </p>
  `;
}

export function popupTemplate(popupData) {
  const ripeStatus = getRipeStatus(popupData.ripeMonths);

  return `
    <div class="popup-card">

      ${renderImage(popupData)}

      <div class="popup-content">

        ${renderHeader(popupData)}

        ${renderDetails(popupData, ripeStatus)}

      </div>

      <div class="popup-actions">

        <button
          class="route-btn"
          data-lat="${popupData.latitude}"
          data-lng="${popupData.longitude}"
        >
          Get Directions
        </button>

      </div>

    </div>
  `;
}
