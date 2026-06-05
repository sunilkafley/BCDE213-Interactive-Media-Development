import { approvedTrees } from "../../data/approvedTrees.js";
import { addTreeMarkers } from "../map/markers.js";
import { initializeSearch } from "../search/search.js";
import { initializeFilters } from "../search/filters.js";

export async function loadTrees(map) {
  try {
    const response = await fetch("./data/edible-trees.geojson");

    const geojson = await response.json();

    const edibleFeatures = geojson.features.filter((feature) => {
      const properties = feature.properties || {};

      const commonName = (properties.CommonName || "").trim();

      // EXACT MATCH AGAINST CATEGORY MAP
      return Object.values(approvedTrees).flat().includes(commonName);
    });

    const edibleGeojson = {
      type: "FeatureCollection",

      features: edibleFeatures,
    };

    console.log(`Loaded edible trees: ${edibleFeatures.length}`);

    const { clusterGroup, allMarkers } = addTreeMarkers(map, edibleGeojson);

    initializeSearch(map, clusterGroup, allMarkers);
    initializeFilters(clusterGroup, allMarkers);
  } catch (error) {
    console.error("Error loading trees:", error);
  }
}
