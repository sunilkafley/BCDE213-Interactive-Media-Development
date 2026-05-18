import { initMap } from './map/initMap.js'

import { loadTrees } from './services/loadTrees.js'

import { addTreeMarkers } from './map/markers.js'

const map = initMap()

async function initializeApp() {

  const geojson = await loadTrees()

  if (!geojson) return

  addTreeMarkers(map, geojson)

}

initializeApp()