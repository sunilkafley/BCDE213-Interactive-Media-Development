function createIcon(iconName) {
  return L.icon({
    iconUrl: `assets/markers/${iconName}.webp`,

    iconSize: [32, 32],

    iconAnchor: [16, 32],

    popupAnchor: [0, -28],
  });
}

export const fruitIcons = {
  almond: createIcon("almond"),

  apple: createIcon("apple"),

  apricot: createIcon("apricot"),

  cherry: createIcon("cherry"),

  crabapple: createIcon("crabapple"),

  elderberry: createIcon("elderberry"),

  europeanbeech: createIcon("europeanbeech"),

  hazel: createIcon("hazel"),

  honeylocust: createIcon("honeylocust"),

  juniper: createIcon("juniper"),

  loquat: createIcon("loquat"),

  mulberry: createIcon("mulberry"),

  olive: createIcon("olive"),

  peach: createIcon("peach"),

  pear: createIcon("pear"),

  persimmon: createIcon("persimmon"),

  plum: createIcon("plum"),

  quince: createIcon("quince"),

  serviceberry: createIcon("serviceberry"),

  strawberry: createIcon("strawberry"),

  sweetbay: createIcon("sweetbay"),

  sweetchestnut: createIcon("sweetchestnut"),

  walnut: createIcon("walnut"),

  default: createIcon("default"),
};

const fruitIconMap = [
  ["almond", "almond"],
  ["apple", "apple"],
  ["apricot", "apricot"],
  ["cherry", "cherry"],
  ["crab", "crabapple"],
  ["beech", "europeanbeech"],
  ["hazel", "hazel"],
  ["honey", "honeylocust"],
  ["juniper", "juniper"],
  ["loquat", "loquat"],
  ["mulberry", "mulberry"],
  ["olive", "olive"],
  ["peach", "peach"],
  ["pear", "pear"],
  ["persimmon", "persimmon"],
  ["plum", "plum"],
  ["quince", "quince"],
  ["service", "serviceberry"],
  ["strawberry", "strawberry"],
  ["bay", "sweetbay"],
  ["chestnut", "sweetchestnut"],
  ["walnut", "walnut"],
];

export function getFruitIcon(commonName = "") {
  const normalizedName = commonName.toLowerCase();

  const match = fruitIconMap.find(([keyword]) =>
    normalizedName.includes(keyword),
  );

  return match ? fruitIcons[match[1]] : fruitIcons.default;
}
