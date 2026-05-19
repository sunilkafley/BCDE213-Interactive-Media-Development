import { initMap } from './map/initMap.js'
import { loadTrees } from './services/loadTrees.js'

// START APPLICATION
async function initApp() {

  // CREATE MAP
  const map = initMap()

  // LOAD TREES
  await loadTrees(map)

}

// INITIALIZE
initApp()