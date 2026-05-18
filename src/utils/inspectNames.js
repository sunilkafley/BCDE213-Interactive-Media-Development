async function inspectTreeNames() {

  try {

    const response =
      await fetch('./data/trees.geojson')

    const geojson =
      await response.json()

    const names = new Set()

    geojson.features.forEach(feature => {

      const properties =
        feature.properties || {}

      const commonName =
        properties.CommonName || ''

      if (commonName.trim()) {

        names.add(
          commonName.trim()
        )

      }

    })

    // SORT
    const sortedNames =
      Array.from(names).sort()

    // DISPLAY CLEANLY
    sortedNames.forEach(name => {

      console.log(name)

    })

    console.log(
      `Total unique names: ${sortedNames.length}`
    )

  }

  catch (error) {

    console.error(error)

  }

}

inspectTreeNames()