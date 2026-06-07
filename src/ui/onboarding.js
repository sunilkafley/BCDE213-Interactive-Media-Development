import { requestLocation } from "../map/locationService.js";

import { showGuidelinesModal } from "./guidelinesModal.js";
import { openDisclaimerPage } from "./disclaimerPage.js";

export function showOnboardingModal(onAllow, onDeny) {
  const existingModal = document.getElementById("onboardingModal");

  if (existingModal) {
    return;
  }

  const modal = document.createElement("div");

  modal.id = "onboardingModal";

  modal.className = "onboarding-modal";

  modal.innerHTML = `
    <div class="onboarding-card">

      <h2>
        "Fruit Finder" Would Like to Use Your Location
      </h2>

      <p>
        "Fruit Finder" uses your
        location to:
      </p>

      <ul>
        <li>
          Show nearby fruit trees
        </li>

        <li>
          Calculate distances
        </li>

        <li>
          Provide navigation
        </li>
      </ul>

      <p>
        Would you like "Fruit Finder" to grant permission access to your location?
      </p>

      <div
        class="onboarding-actions"
      >
        <button
          id="denyLocationBtn"
          class="onboarding-btn-deny"
        >
          Don't Allow
        </button>

        <button
          id="allowLocationBtn"
          class="onboarding-btn-allow"
        >
          Allow
        </button>
      </div>

    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById("allowLocationBtn")?.addEventListener("click", () => {
    modal.remove();

    onAllow?.();
  });

  document.getElementById("denyLocationBtn")?.addEventListener("click", () => {
    modal.remove();

    onDeny?.();
  });
}

export function startOnboarding() {
  showOnboardingModal(
    async () => {
      try {
        const location = await requestLocation();

        console.log("Location granted:", location);

        showGuidelinesModal(() => {
          console.log("Onboarding complete");
        });
      } catch (error) {
        console.error("Location error:", error);
      }
    },

    () => {
      openDisclaimerPage({
        locationDenied: true,
      });
    },
  );
}
