import { approvedTrees } from "../../data/approvedTrees.js";

const activeFilters = new Set();

function getFruitType(commonName = "") {
  const name = commonName.trim();

  for (const [fruitKey, treeNames] of Object.entries(approvedTrees)) {
    if (treeNames.includes(name)) {
      return fruitKey;
    }
  }

  return null;
}

function updateChipState(chip, isActive) {
  chip.setAttribute("aria-pressed", String(isActive));

  chip.classList.toggle("fruit-chip--active", isActive);
}

function updateFilterCount() {
  const title = document.getElementById("fruitLegendTitle");

  if (!title) {
    return;
  }

  const count = activeFilters.size;

  title.textContent = count > 0 ? `Fruit Legend (${count})` : "Fruit Legend";
}

function applyFilters(clusterGroup, allMarkers) {
  clusterGroup.clearLayers();

  // DEFAULT STATE
  if (activeFilters.size === 0) {
    clusterGroup.addLayers(allMarkers);

    return;
  }

  const filteredMarkers = allMarkers.filter((marker) => {
    const commonName = marker.feature?.properties?.CommonName || "";

    const fruitType = getFruitType(commonName);

    return activeFilters.has(fruitType);
  });

  clusterGroup.addLayers(filteredMarkers);
}

export function initializeFilters(clusterGroup, allMarkers) {
  const chips = document.querySelectorAll(".fruit-chip");

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const fruitKey = chip.dataset.fruit;

      if (activeFilters.has(fruitKey)) {
        activeFilters.delete(fruitKey);

        updateChipState(chip, false);
      } else {
        activeFilters.add(fruitKey);

        updateChipState(chip, true);
      }

      applyFilters(clusterGroup, allMarkers);

      updateFilterCount();
    });
  });

  updateFilterCount();
}
