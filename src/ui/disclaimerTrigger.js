import { openDisclaimerPage } from "./disclaimerPage.js";

export function initializeDisclaimerTrigger() {
  const disclaimerButton = document.getElementById("disclaimerButton");

  if (!disclaimerButton) {
    return;
  }

  disclaimerButton.addEventListener("click", openDisclaimerPage);
}
