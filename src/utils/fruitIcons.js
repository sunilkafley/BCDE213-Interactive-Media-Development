function createIcon(iconName) {

  return L.icon({

    iconUrl: `assets/markers/${iconName}.webp`,

    iconSize: [32, 32],

    iconAnchor: [16, 32],

    popupAnchor: [0, -28]

  })

}

export const fruitIcons = {

  almond: createIcon('almond'),

  apple: createIcon('apple'),

  apricot: createIcon('apricot'),

  cherry: createIcon('cherry'),

  crabapple: createIcon('crabapple'),

  elderberry: createIcon('elderberry'),

  europeanbeech: createIcon('europeanbeech'),

  hazel: createIcon('hazel'),

  honeylocust: createIcon('honeylocust'),

  jellypalm: createIcon('jellypalm'),

  juniper: createIcon('juniper'),

  loquat: createIcon('loquat'),

  mulberry: createIcon('mulberry'),

  olive: createIcon('olive'),

  peach: createIcon('peach'),

  pear: createIcon('pear'),

  persimon: createIcon('persimon'),

  plum: createIcon('plum'),

  quince: createIcon('quince'),

  serviceberry: createIcon('serviceberry'),

  strawberry: createIcon('strawberry'),

  sweetbay: createIcon('sweetbay'),

  sweetchestnut: createIcon('sweetchestnut'),

  walnut: createIcon('walnut'),

  default: createIcon('apple')

}