function createIcon(iconName) {

  return L.icon({

    iconUrl: `assets/markers/${iconName}.png`,

    iconSize: [38, 38],

    iconAnchor: [19, 38],

    popupAnchor: [0, -32]

  })

}

// ICONS
export const fruitIcons = {

  apple: createIcon('apple'),

  cherry: createIcon('cherry'),

  pear: createIcon('pear'),

  peach: createIcon('peach'),

  plum: createIcon('plum'),

  default: createIcon('default')

}