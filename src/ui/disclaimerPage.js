import { disclaimerContent } from "./disclaimerContent.js";
import { startOnboarding } from "./onboarding.js";

export function closeDisclaimerPage() {
  const existingPage = document.querySelector(".disclaimer-overlay");

  if (existingPage) {
    existingPage.remove();
  }
}

function buildSection(section) {
  const items = section.items.map((item) => `<li>${item}</li>`).join("");

  return `
    <section class="disclaimer-section">

      <h3 class="disclaimer-section-title">
        ${section.heading}
      </h3>

      <ul class="disclaimer-list">
        ${items}
      </ul>

    </section>
  `;
}

export function openDisclaimerPage(options = {}) {
  // Prevent duplicate overlays
  closeDisclaimerPage();

  const sections = disclaimerContent.sections.map(buildSection).join("");

  const overlay = document.createElement("div");
  const showLocationActions = options.locationDenied === true;
  const showCloseButton = !showLocationActions;

  overlay.className = "disclaimer-overlay";
  console.log(disclaimerContent);
  console.log(sections);
  const locationActions = showLocationActions
    ? `
      <section class="disclaimer-actions">

        <h3 class="disclaimer-section-title">
          Location Access Required
        </h3>

        <p class="disclaimer-message">
          Location access was not enabled.

          You can continue using Fruit Finder, but some features may be unavailable
        </p>

        <div class="disclaimer-action-buttons">

          <button
            id="retryLocationButton"
            class="disclaimer-primary-btn"
          >
            Try Again
          </button>

          <button
            id="continueWithoutLocationButton"
            class="disclaimer-secondary-btn"
          >
            Continue to Map
          </button>

        </div>

      </section>
    `
    : "";

  overlay.innerHTML = `
    <div class="disclaimer-page">

      <header class="disclaimer-header">

        <h2 class="disclaimer-title">
          ${disclaimerContent.title}
        </h2>

        ${
          showCloseButton
            ? `
      <button
        class="disclaimer-close"
        aria-label="Close Disclaimer"
      >
        ×
      </button>
    `
            : ""
        }

      </header>

      <div class="disclaimer-content">

        <p class="disclaimer-introduction">
          ${disclaimerContent.introduction}
        </p>

        ${sections}
        ${locationActions}

        <footer class="disclaimer-footer">
          ${disclaimerContent.footer}
        </footer>

      </div>

    </div>
  `;

  document.body.appendChild(overlay);
  const retryButton = overlay.querySelector("#retryLocationButton");

  const continueButton = overlay.querySelector(
    "#continueWithoutLocationButton",
  );
  continueButton?.addEventListener("click", () => {
    closeDisclaimerPage();
  });
  retryButton?.addEventListener("click", () => {
    closeDisclaimerPage();

    startOnboarding();
  });

  // Close button
  overlay
    .querySelector(".disclaimer-close")
    .addEventListener("click", closeDisclaimerPage);

  // Close when clicking backdrop
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeDisclaimerPage();
    }
  });
}
