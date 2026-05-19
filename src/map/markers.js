import { fruitIcons } from '../utils/fruitIcons.js'

export function addTreeMarkers(map, geojson) {

  // MARKER CLUSTER GROUP
  const clusterGroup = L.markerClusterGroup({

    chunkedLoading: true,

    spiderfyOnMaxZoom: true,

    showCoverageOnHover: false,

    maxClusterRadius: 50,

    disableClusteringAtZoom: 17,

    iconCreateFunction: function(cluster) {

      const childCount =
        cluster.getChildCount()

      // HIDE SMALL CLUSTERS
      if (childCount < 5) {

        return L.divIcon({
          html: '',
          className: 'hidden-cluster',
          iconSize: [0, 0]
        })

      }

      // CUSTOM CLUSTER ICON
      return L.divIcon({

        html:
          `<div class="cluster-count">${childCount}</div>`,

        className: 'custom-cluster',

        iconSize: [40, 40]

      })

    }

  })

  // GEOJSON LAYER
  const treeLayer = L.geoJSON(geojson, {

    pointToLayer: function(feature, latlng) {

      const properties =
        feature.properties || {}

      const commonName =
        (properties.CommonName || '')
          .toLowerCase()

      let markerIcon =
        fruitIcons.default

      // MATCH FRUIT ICONS
      if (commonName.includes('almond')) {

        markerIcon =
          fruitIcons.almond

      }

      else if (commonName.includes('apple')) {

        markerIcon =
          fruitIcons.apple

      }

      else if (commonName.includes('apricot')) {

        markerIcon =
          fruitIcons.apricot

      }

      else if (commonName.includes('cherry')) {

        markerIcon =
          fruitIcons.cherry

      }

      else if (commonName.includes('crab')) {

        markerIcon =
          fruitIcons.crabapple

      }

      else if (commonName.includes('beech')) {

        markerIcon =
          fruitIcons.europeanbeech

      }

      else if (commonName.includes('hazel')) {

        markerIcon =
          fruitIcons.hazel

      }

      else if (commonName.includes('honey')) {

        markerIcon =
          fruitIcons.honeylocust

      }

      else if (commonName.includes('jelly')) {

        markerIcon =
          fruitIcons.jellypalm

      }

      else if (commonName.includes('juniper')) {

        markerIcon =
          fruitIcons.juniper

      }

      else if (commonName.includes('loquat')) {

        markerIcon =
          fruitIcons.loquat

      }

      else if (commonName.includes('mulberry')) {

        markerIcon =
          fruitIcons.mulberry

      }

      else if (commonName.includes('olive')) {

        markerIcon =
          fruitIcons.olive

      }

      else if (commonName.includes('peach')) {

        markerIcon =
          fruitIcons.peach

      }

      else if (commonName.includes('pear')) {

        markerIcon =
          fruitIcons.pear

      }

      else if (commonName.includes('persimon')) {

        markerIcon =
          fruitIcons.persimon

      }

      else if (commonName.includes('plum')) {

        markerIcon =
          fruitIcons.plum

      }

      else if (commonName.includes('quince')) {

        markerIcon =
          fruitIcons.quince

      }

      else if (commonName.includes('service')) {

        markerIcon =
          fruitIcons.serviceberry

      }

      else if (commonName.includes('strawberry')) {

        markerIcon =
          fruitIcons.strawberry

      }

      else if (commonName.includes('bay')) {

        markerIcon =
          fruitIcons.sweetbay

      }

      else if (commonName.includes('chestnut')) {

        markerIcon =
          fruitIcons.sweetchestnut

      }

      else if (commonName.includes('walnut')) {

        markerIcon =
          fruitIcons.walnut

      }

      // CREATE MARKER
      const marker = L.marker(
        latlng,
        {
          icon: markerIcon
        }
      )

      // POPUP
      marker.bindPopup(`

        <div class="popup-card">

          <h3>
            ${properties.CommonName || 'Fruit Tree'}
          </h3>

          <p>
            Christchurch, New Zealand
          </p>

        </div>

      `)

      return marker

    }

  })

  // ADD TO CLUSTER GROUP
  clusterGroup.addLayer(treeLayer)

  // ADD TO MAP
  map.addLayer(clusterGroup)
  return treeLayer 
  
}