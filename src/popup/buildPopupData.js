import { fruitMetadata } from "../data/fruitMetadata.js";

export function buildPopupData(feature, latlng) {
  const properties = feature.properties || {};

  const commonName = (properties.CommonName || "").toLowerCase();

  const metadataKey = Object.keys(fruitMetadata).find((key) =>
    commonName.includes(key),
  );

  const metadata = fruitMetadata[metadataKey] || null;

  return {
    name: metadata?.displayName || properties.CommonName || "Fruit Tree",

    scientificName: properties.ScientificName || "",

    latitude: latlng.lat,

    longitude: latlng.lng,

    distance: null,

    image: metadata?.image || "",

    hasImage: metadata?.hasImage || false,

    description: metadata?.description || "",

    bestSeason: metadata?.bestSeason || "",

    ripeMonths: metadata?.ripeMonths || [],

    markerIcon: metadata?.markerIcon || "",
  };
}
