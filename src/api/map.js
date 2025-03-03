import findPlaces from "./places";

let center;
let map;

export default async function initMap(data,request) {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const { LatLng } = google.maps.importLibrary("core");

    center = { lat: 37.4161493, lng: -122.0812166 };

    map = (new Map(document.querySelector(".map"), {
      streetViewControl: false,
      center: center,
      zoom: 4,
      mapId: import.meta.env.VITE_MAP_ID,
    }))
    
    if (data && Object.keys(data).length !== 0) {
      console.log(data.Activities);
      data.Activities.forEach((item) => {
        if (item.activity) {
          item.activity.forEach((activity) => {
           
            const position = {lat: Number(activity.location.lat), lng: Number(activity.location.lng)}
            console.log(position)
            new AdvancedMarkerElement({
              map,
              position: position,
            });
          });
        }
      })
    }
    
    //  findPlaces(request, map);
}

//depricated no need for this