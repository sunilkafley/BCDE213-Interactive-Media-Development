export function initializeSearch(
  map,
  clusterGroup,
  allMarkers
) {

  const searchInput =
    document.getElementById(
      'search-input'
    )

  if (!searchInput) {

    console.error(
      'Search input not found'
    )

    return

  }

  searchInput.addEventListener(
    'input',
    function(event) {

      const searchText =
        event.target.value
          .toLowerCase()
          .trim()

      // CLEAR CURRENT MARKERS
      clusterGroup.clearLayers()

      // FILTER MATCHES
      const matchedMarkers =
        allMarkers.filter(marker => {

          const feature =
            marker.feature

          if (!feature) return false

          const properties =
            feature.properties || {}

          const commonName =
            (
              properties.CommonName || ''
            ).toLowerCase()

          const streetName =
            (
              properties.StreetName || ''
            ).toLowerCase()

          return (

            commonName.includes(searchText)

            ||

            streetName.includes(searchText)

          )

        })

      // ADD FILTERED MARKERS
      matchedMarkers.forEach(marker => {

        clusterGroup.addLayer(marker)

      })

      // ZOOM TO RESULTS
      if (matchedMarkers.length > 0) {

        const group =
          L.featureGroup(matchedMarkers)

        map.fitBounds(
          group.getBounds(),
          {
            padding: [50, 50]
          }
        )

      }

    }

  )

}