const edibleKeywords = [

  'almond',
  'apple',
  'apricot',
  'cherry',
  'crab apple',
  'elderberry',
  'european beech',
  'hazel',
  'honey locust',
  'jelly palm',
  'juniper',
  'loquat',
  'mulberry',
  'olive',
  'peach',
  'pear',
  'persimon',
  'plum',
  'quince',
  'service berry',
  'strawberry tree',
  'sweet bay',
  'sweet chestnut',
  'walnut'

]

async function filterEdibleTrees() {

  try {

    // LOAD ORIGINAL DATASET
    const response = await fetch('../../data/trees.geojson')

    const geojson = await response.json()

    // FILTER FEATURES
    const filteredFeatures = geojson.features.filter(feature => {

      const properties = feature.properties || {}

      const commonName =
        (properties.CommonName || '').toLowerCase()

      const species =
        (properties.Species || '').toLowerCase()

      const botanicalName =
        (properties.BotanicName || '').toLowerCase()

      return edibleKeywords.some(keyword =>

        commonName.includes(keyword) ||
        species.includes(keyword) ||
        botanicalName.includes(keyword)

      )

    })

    // CLEAN GEOJSON
    const edibleGeojson = {

      type: 'FeatureCollection',

      features: filteredFeatures

    }

    console.log(
      `Total official fruit trees: ${filteredFeatures.length}`
    )

    console.log(edibleGeojson)

  }

  catch (error) {

    console.error(
      'Error filtering trees:',
      error
    )

  }

}

filterEdibleTrees()