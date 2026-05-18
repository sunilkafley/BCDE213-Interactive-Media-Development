import { fruitIcons } from '../utils/fruitIcons.js'

export function addTreeMarkers(map, geojson) {

  // CLUSTER GROUP
  const clusterGroup = L.markerClusterGroup({

    chunkedLoading: true,

    spiderfyOnMaxZoom: true,

    showCoverageOnHover: false,

    maxClusterRadius: 50

  })

  // GEOJSON LAYER
  const treeLayer = L.geoJSON(geojson, {

    pointToLayer: function(feature, latlng) {

      const properties = feature.properties || {}

      const commonName =
        (properties.CommonName || '').toLowerCase()

      let markerIcon = fruitIcons.default

      // DETECT TYPE
      if (commonName.includes('apple')) {
        markerIcon = fruitIcons.apple
      }

      else if (commonName.includes('cherry')) {
        markerIcon = fruitIcons.cherry
      }

      else if (commonName.includes('pear')) {
        markerIcon = fruitIcons.pear
      }

      else if (commonName.includes('peach')) {
        markerIcon = fruitIcons.peach
      }

      else if (commonName.includes('plum')) {
        markerIcon = fruitIcons.plum
      }

      // RETURN MARKER
      return L.marker(latlng, {
        icon: markerIcon
      })

    },

    onEachFeature: function(feature, layer) {

      const properties = feature.properties || {}

      const commonName =
        properties.CommonName || 'Unknown Tree'

      const botanicalName =
        properties.BotanicName || ''

      const location =
        properties.Address || 'Christchurch'

      // POPUP
      layer.bindPopup(`

        <div class="popup-card">

          <div class="popup-header">

            <h3>${commonName}</h3>

          </div>

          <div class="popup-content">

            <p>
              <strong>Botanical Name:</strong>
              ${botanicalName}
            </p>

            <p>
              <strong>Location:</strong>
              ${location}
            </p>

          </div>

          <button class="popup-btn">

            View Directions

          </button>

        </div>

      `)

    }

  })

  // ADD TO CLUSTER
  clusterGroup.addLayer(treeLayer)

  // ADD TO MAP
  map.addLayer(clusterGroup)

}