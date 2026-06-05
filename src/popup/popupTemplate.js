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
    <p>
      Best Season:
      ${data.bestSeason}
    </p>

    <p>
      Ripe Status:
      ${ripeStatus}
    </p>

    <p>
      ${data.description}
    </p>
  `;
}

export function popupTemplate(popupData) {
  const ripeStatus = getRipeStatus(popupData.ripeMonths);

  return `
    <div class="popup-card">

      ${renderImage(popupData)}

      ${renderHeader(popupData)}

      ${renderDetails(popupData, ripeStatus)}

      <button 
        class="route-btn" 
        data-lat="${popupData.latitude}"
        data-lng="${popupData.longitude}"
        >
        Route To Tree
        </button>

    </div>
  `;
}
