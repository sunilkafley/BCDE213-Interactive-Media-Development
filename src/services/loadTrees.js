export async function loadTrees() {

  try {

    const response = await fetch('./data/edible-trees.geojson')

    const geojson = await response.json()

    return geojson

  }

  catch (error) {

    console.error(
      'Error loading edible trees:',
      error
    )

  }

}