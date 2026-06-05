// src/legend/createFruitFilterPanel.js

import { fruitLabels } from "../config/fruitLabels.js";

export function createFruitFilterPanel() {
  const container = document.getElementById("legendCategories");

  if (!container) {
    console.warn("Fruit Finder: #legendCategories not found.");
    return;
  }

  container.innerHTML = "";

  Object.entries(fruitLabels).forEach(([fruitKey, fruitLabel]) => {
    const chip = document.createElement("button");

    chip.type = "button";
    chip.className = "fruit-chip";

    chip.dataset.fruit = fruitKey;

    chip.setAttribute("aria-pressed", "false");

    chip.innerHTML = `
      <img
        class="fruit-chip-icon"
        src="assets/markers/${fruitKey}.webp"
        alt=""
        loading="lazy"
      >

      <span class="fruit-chip-label">
        ${fruitLabel}
      </span>
    `;

    container.appendChild(chip);
  });

  console.log(
    `Fruit Finder: ${Object.keys(fruitLabels).length} fruit filter chips created.`,
  );
}
