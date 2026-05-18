import { approvedTrees } from '../../data/approvedTrees.js'

async function countTrees() {

  try {

    // LOAD ORIGINAL DATASET
    const response =
      await fetch('./data/trees.geojson')

    const geojson =
      await response.json()

    const counts = {}

    // INITIALIZE COUNTS
    approvedTrees.forEach(name => {

      counts[name] = 0

    })

    // COUNT TREES
    geojson.features.forEach(feature => {

      const properties =
        feature.properties || {}

      const commonName =
        (properties.CommonName || '').trim()

      if (approvedTrees.includes(commonName)) {

        counts[commonName]++

      }

    })

    // DISPLAY COUNTS
    console.log('========== TREE COUNTS ==========')

    Object.entries(counts).forEach(([tree, count]) => {

      console.log(`${tree}: ${count}`)

    })

    console.log('=================================')

  }

  catch (error) {

    console.error(error)

  }

}

countTrees()