import { approvedTrees } from '../../data/approvedTrees.js'
import { addTreeMarkers } from '../map/markers.js'
import { initializeSearch } from '../search/search.js'

export async function loadTrees(map) {

  try {

    const response =
      await fetch('./data/trees.edible-trees.geojson')

    const geojson =
      await response.json()

    const edibleFeatures =
      geojson.features.filter(feature => {

        const properties =
          feature.properties || {}

        const commonName =
          (properties.CommonName || '').trim()

        // EXACT MATCH AGAINST CATEGORY MAP
        return Object.values(approvedTrees)
          .flat()
          .includes(commonName)

      })

    const edibleGeojson = {

      type: 'FeatureCollection',

      features: edibleFeatures

    }

    console.log(
      `Loaded edible trees: ${edibleFeatures.length}`
    )

    const treeLayer =
  addTreeMarkers(
    map,
    edibleGeojson
  )

initializeSearch(
  map,
  treeLayer
)

  }

  catch (error) {

    console.error(
      'Error loading trees:',
      error
    )

  }

}