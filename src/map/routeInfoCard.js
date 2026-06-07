const ROUTE_MODE_ICONS = {
  drive: "assets/icons/car.webp",
};

let routePanel = null;
let routeInfoCard = null;

function createRoutePanel() {
  const mapSection = document.querySelector(".map-section");

  if (!mapSection) {
    return null;
  }

  const panel = document.createElement("div");

  panel.className = "route-panel";

  panel.hidden = true;

  const card = document.createElement("div");

  card.className = "route-info-card";

  panel.appendChild(card);

  mapSection.appendChild(panel);

  routeInfoCard = card;

  return panel;
}

export function getRoutePanel() {
  return routePanel;
}

export function showRouteInfo({ distance, duration, mode = "drive" }) {
  if (!routePanel) {
    routePanel = createRoutePanel();
  }

  if (!routePanel || !routeInfoCard) {
    return;
  }

  const icon = ROUTE_MODE_ICONS[mode] || ROUTE_MODE_ICONS.drive;

  routeInfoCard.innerHTML = `
    <div class="route-info-header">
      <img
        src="${icon}"
        alt=""
        class="route-info-icon"
      >

      <span class="route-info-duration">
        ${duration}
      </span>
    </div>

    <div class="route-info-distance">
      ${distance}
    </div>
  `;

  routePanel.hidden = false;
}

export function hideRouteInfo() {
  if (!routePanel) {
    return;
  }

  routePanel.hidden = true;
}
