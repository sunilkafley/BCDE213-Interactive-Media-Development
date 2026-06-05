export function showGuidelinesModal(onContinue) {
  const modal = document.createElement("div");

  modal.className = "onboarding-modal";

  modal.id = "guidelinesModal";

  modal.innerHTML = `
  <div class="onboarding-card">

    <div class="guidelines-title">

        <img
            src="assets/guidelines/tree.webp"
            alt=""
            class="guidelines-title-icon"
        >

        <h3>
            Community Foraging Guidelines
        </h2>

    </div>
    <ul class="guidelines-list">

      <li>
        <img
          src="assets/guidelines/greenapple.webp"
          alt=""
          class="guidelines-icon"
        >

        <span>
          Take only what you need
          for a few days
        </span>
      </li>

      <li>
        <img
          src="assets/guidelines/lemon.webp"
          alt=""
          class="guidelines-icon"
        >

        <span>
          Do not pick unripe fruit
        </span>
      </li>

      <li>
        <img
          src="assets/guidelines/grapes.webp"
          alt=""
          class="guidelines-icon"
        >

        <span>
          Leave some for others
        </span>
      </li>

      <li>
        <img
          src="assets/guidelines/plant.webp"
          alt=""
          class="guidelines-icon"
        >

        <span>
          Respect the trees and
          nearby homes
        </span>
      </li>

      <li>
        <img
          src="assets/guidelines/noentry.webp"
          alt=""
          class="guidelines-icon"
        >

        <span>
          Do not enter private
          property
        </span>
      </li>

    </ul>

    <p>
      Let's keep foraging fair
      and sustainable for all.
    </p>

    <button
      id="guidelinesOkBtn"
      class="onboarding-btn-allow"
    >
      OK
    </button>

  </div>
`;

  document.body.appendChild(modal);

  document.getElementById("guidelinesOkBtn")?.addEventListener("click", () => {
    modal.remove();

    onContinue?.();
  });
}
