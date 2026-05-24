export function enableGeolocation(map) {

  // CHECK SUPPORT
  if (!navigator.geolocation) {

    console.error(
      'Geolocation not supported'
    )

    return

  }

  // GET USER LOCATION
  navigator.geolocation.getCurrentPosition(

    // SUCCESS
    function(position) {

      const latitude =
        position.coords.latitude

      const longitude =
        position.coords.longitude

      const accuracy =
        position.coords.accuracy

      // USER LOCATION
      const userLatLng = [

        latitude,

        longitude

      ]

      // CENTER MAP
      map.setView(
        userLatLng,
        16
      )

      // USER MARKER
      const userMarker = L.circleMarker(
        userLatLng,
        {

          radius: 10,

          fillColor: '#2563eb',

          color: '#ffffff',

          weight: 3,

          opacity: 1,

          fillOpacity: 1

        }
      )

      // ADD TO MAP
      userMarker.addTo(map)

      // ACCURACY CIRCLE
      L.circle(
        userLatLng,
        {

          radius: accuracy,

          color: '#2563eb',

          fillColor: '#2563eb',

          fillOpacity: 0.15,

          weight: 1

        }

      ).addTo(map)

      // POPUP
      userMarker.bindPopup(`

        <div class="popup-card">

          <h3>
            Your Location
          </h3>

          <p>
            Accuracy:
            ${Math.round(accuracy)} meters
          </p>

        </div>

      `)

    },

    // ERROR
    function(error) {

      console.error(
        'Location access denied',
        error
      )

    },

    // OPTIONS
    {

      enableHighAccuracy: true,

      timeout: 10000,

      maximumAge: 0

    }

  )

}