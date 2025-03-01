import findPlaces from './places.js'

let center;
let map;

export default async function initMap(request) {
    const { Map } = await google.maps.importLibrary("maps");
  
    center = { lat: 37.4161493, lng: -122.0812166 };
    map = (new Map(document.querySelector(".map"), {
      center: center,
      zoom: 11,
      mapId: import.meta.env.VITE_MAP_ID,
    }))

    findPlaces(request, map);
}

