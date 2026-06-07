import { initMap } from "./map/initMap.js";
import { loadTrees } from "./services/loadTrees.js";
import { initLegendDrawer } from "./ui/legendDrawer.js";
import { createFruitFilterPanel } from "./legend/createFruitFilterPanel.js";
import { initializeControls } from "./map/controls.js";
import { startOnboarding } from "./ui/onboarding.js";
import { initializeDisclaimerTrigger } from "./ui/disclaimerTrigger.js";
import { initializeUserLocation } from "./map/userLocationMarker.js";
import { initializeTutorialView } from "./tutorial/tutorialView.js";

// START APPLICATION
async function initApp() {
  // CREATE LEGEND CATEGORIES
  createFruitFilterPanel();

  // INITIALIZE LEGEND DRAWER
  initLegendDrawer();

  //DISCLAIMER
  initializeDisclaimerTrigger();

  // CREATE MAP
  const map = initMap();

  // INITIALIZE MAP CONTROLS
  initializeControls(map);

  initializeUserLocation(map);
  initializeTutorialView();

  // LOAD TREES
  await loadTrees(map);
}
// ONBOARDING
startOnboarding();

// INITIALIZE
initApp();
