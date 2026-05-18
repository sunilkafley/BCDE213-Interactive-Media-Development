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

      // MATCH ICONS
      if (commonName.includes('almond')) {
        markerIcon = fruitIcons.almond
      }

      else if (commonName.includes('apple')) {
        markerIcon = fruitIcons.apple
      }

      else if (commonName.includes('apricot')) {
        markerIcon = fruitIcons.apricot
      }

      else if (commonName.includes('cherry')) {
        markerIcon = fruitIcons.cherry
      }

      else if (commonName.includes('crab apple')) {
        markerIcon = fruitIcons.crabapple
      }

      else if (commonName.includes('elderberry')) {
        markerIcon = fruitIcons.elderberry
      }

      else if (commonName.includes('european beech')) {
        markerIcon = fruitIcons.europeanbeech
      }

      else if (commonName.includes('hazel')) {
        markerIcon = fruitIcons.hazel
      }

      else if (commonName.includes('honey locust')) {
        markerIcon = fruitIcons.honeylocust
      }

      else if (commonName.includes('jelly palm')) {
        markerIcon = fruitIcons.jellypalm
      }

      else if (commonName.includes('juniper')) {
        markerIcon = fruitIcons.juniper
      }

      else if (commonName.includes('loquat')) {
        markerIcon = fruitIcons.loquat
      }

      else if (commonName.includes('mulberry')) {
        markerIcon = fruitIcons.mulberry
      }

      else if (commonName.includes('olive')) {
        markerIcon = fruitIcons.olive
      }

      else if (commonName.includes('peach')) {
        markerIcon = fruitIcons.peach
      }

      else if (commonName.includes('pear')) {
        markerIcon = fruitIcons.pear
      }

      else if (commonName.includes('persimon')) {
        markerIcon = fruitIcons.persimon
      }

      else if (commonName.includes('plum')) {
        markerIcon = fruitIcons.plum
      }

      else if (commonName.includes('quince')) {
        markerIcon = fruitIcons.quince
      }

      else if (commonName.includes('service berry')) {
        markerIcon = fruitIcons.serviceberry
      }

      else if (commonName.includes('strawberry')) {
        markerIcon = fruitIcons.strawberry
      }

      else if (commonName.includes('sweet bay')) {
        markerIcon = fruitIcons.sweetbay
      }

      else if (commonName.includes('sweet chestnut')) {
        markerIcon = fruitIcons.sweetchestnut
      }

      else if (commonName.includes('walnut')) {
        markerIcon = fruitIcons.walnut
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