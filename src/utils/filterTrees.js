import { approvedTrees } from '../../data/approvedTrees.js'

async function filterTrees() {

  try {

    const response =
      await fetch('./data/trees.geojson')

    const geojson =
      await response.json()

    // EXACT MATCH FILTER
    const filteredFeatures =
      geojson.features.filter(feature => {

        const properties =
          feature.properties || {}

        const commonName =
          (properties.CommonName || '').trim()

        return approvedTrees.includes(commonName)

      })

    // CLEAN GEOJSON
    const edibleGeojson = {

      type: 'FeatureCollection',

      features: filteredFeatures

    }

    console.log(
      `Filtered Trees: ${filteredFeatures.length}`
    )

    console.log(edibleGeojson)

  }

  catch (error) {

    console.error(error)

  }

}

filterTrees()