const BottomSheetState = {
  COLLAPSED: "is-collapsed",
  EXPANDED: "is-expanded",
};

function setBottomSheetState(state) {
  const sheet = document.querySelector(".sidebar");

  if (!sheet) return;

  sheet.classList.remove(BottomSheetState.COLLAPSED, BottomSheetState.EXPANDED);

  sheet.classList.add(state);

  updateChevron(state === BottomSheetState.EXPANDED);
}

function updateChevron(isExpanded) {
  const chevron = document.getElementById("legendChevron");

  if (!chevron) return;

  chevron.src = isExpanded
    ? "assets/icons/chevrondown.webp"
    : "assets/icons/chevronup.webp";

  chevron.alt = isExpanded ? "Collapse Fruit Legend" : "Expand Fruit Legend";
}

export function initLegendDrawer() {
  const toggle = document.getElementById("legendToggle");
  const sheet = document.querySelector(".sidebar");

  if (!toggle || !sheet) return;

  updateChevron(sheet.classList.contains(BottomSheetState.EXPANDED));

  toggle.addEventListener("click", () => {
    const isCollapsed = sheet.classList.contains(BottomSheetState.COLLAPSED);

    setBottomSheetState(
      isCollapsed ? BottomSheetState.EXPANDED : BottomSheetState.COLLAPSED,
    );
  });
}
