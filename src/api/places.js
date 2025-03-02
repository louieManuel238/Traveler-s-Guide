async function findPlaces(request, map) {
  const { Place } = await google.maps.importLibrary("places");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  //@ts-ignore
  const { places } = await Place.searchByText(request);

  if (places.length) {
    // console.log(places)
    
    const { LatLngBounds } = await google.maps.importLibrary("core");
    const bounds = new LatLngBounds();

    
    // Loop through and get all the results.
    places.forEach((place) => {
      const markerView = new AdvancedMarkerElement({
        map,
        position: place.location,
        title: place.displayName,
      });

      bounds.extend(place.location);
    });
    map.fitBounds(bounds);
  } else {
    console.log("No results");
  }
}

export default findPlaces;
