export function initializeTutorialView() {
  const tutorialButton = document.getElementById("tutorialButton");

  const tutorialModal = document.getElementById("tutorialModal");

  const closeTutorial = document.getElementById("closeTutorial");

  const tutorialVideo = document.getElementById("tutorialVideo");

  if (!tutorialButton || !tutorialModal || !closeTutorial) {
    return;
  }

  tutorialButton.addEventListener("click", (event) => {
    event.preventDefault();

    tutorialModal.classList.remove("hidden");
  });

  function closeModal() {
    tutorialModal.classList.add("hidden");

    if (tutorialVideo) {
      tutorialVideo.pause();
      tutorialVideo.currentTime = 0;
    }
  }

  closeTutorial.addEventListener("click", closeModal);

  tutorialModal.addEventListener("click", (event) => {
    if (event.target === tutorialModal) {
      closeModal();
    }
  });
}
