import { getFruitIcon } from "../utils/fruitIcons.js";
import { createPopup } from "../popup/createPopup.js";
import { buildPopupData } from "../popup/buildPopupData.js";

export function addTreeMarkers(map, geojson) {
  // MARKER CLUSTER GROUP
  const clusterGroup = L.markerClusterGroup({
    chunkedLoading: true,

    spiderfyOnMaxZoom: true,

    showCoverageOnHover: false,

    maxClusterRadius: 50,

    disableClusteringAtZoom: 17,

    iconCreateFunction: function (cluster) {
      const childCount = cluster.getChildCount();

      // HIDE SMALL CLUSTERS
      if (childCount < 5) {
        return L.divIcon({
          html: "",
          className: "hidden-cluster",
          iconSize: [0, 0],
        });
      }

      // CUSTOM CLUSTER ICON
      return L.divIcon({
        html: `<div class="cluster-count">${childCount}</div>`,

        className: "custom-cluster",

        iconSize: [40, 40],
      });
    },
  });

  // GEOJSON LAYER
  const treeLayer = L.geoJSON(geojson, {
    pointToLayer: function (feature, latlng) {
      const properties = feature.properties || {};

      const markerIcon = getFruitIcon(properties.CommonName);

      const marker = L.marker(latlng, {
        icon: markerIcon,
      });

      // POPUP
      const popupData = buildPopupData(feature, latlng);

      createPopup(marker, popupData, map);

      return marker;
    },
  });

  const allMarkers = [];

  treeLayer.eachLayer((layer) => {
    allMarkers.push(layer);
  });

  // ADD TO CLUSTER GROUP
  clusterGroup.addLayer(treeLayer);

  // ADD TO MAP
  map.addLayer(clusterGroup);
  return {
    clusterGroup,
    allMarkers,
  };
}
