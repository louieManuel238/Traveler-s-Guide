
class PlacesAPI{
  constructor(){

  }
  async findPlaces(request) {

    const { Place } = await google.maps.importLibrary("places");
     const { places } = await Place.searchByText(request);
    
    if (places.length) {
      console.log(places[0]);
      return places[0];
    } else {
      console.log("No results");
    }
  }
}



export default PlacesAPI;
