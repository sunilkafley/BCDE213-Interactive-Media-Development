export function getRipeStatus(ripeMonths = []) {
  const currentMonth = new Date().getMonth() + 1;

  return ripeMonths.includes(currentMonth) ? "Ripe" : "Out of Season";
}
