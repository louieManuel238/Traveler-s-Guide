import { useEffect, useRef } from "react";


const Map = ({data, setShouldFetchPlaces}) => {
  
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const center = { lat: 37.4161493, lng: -122.0812166 };

  console.log(data)

  useEffect(() => {
    
    async function initMap() {
      try{
        const { Map } = await google.maps.importLibrary("maps");

  
        mapInstanceRef.current = ( new Map(mapRef.current, {
          streetViewControl: false,
          center: center,
          zoom: 4,
          mapId: import.meta.env.VITE_MAP_ID,
        }))
      
      } catch(error){
        console.error("Error initializing map", error)
      } 
    }
    initMap();
  },[])

  useEffect(()=>{
    async function placeMarkers() {
      try {
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        const { LatLng } = await google.maps.importLibrary("core");

        markersRef.current.forEach(marker => marker.setMap(null));
        markersRef.current = [];

        if (data && Object.keys(data).length !== 0) {
          // console.log(data.Activities);
          data.Activities.forEach((item) => {
            if (item.activity) {
              item.activity.forEach((activity) => {
                const position = new LatLng(activity.location);
                const marker = new AdvancedMarkerElement({
                  map: mapInstanceRef.current,
                  position: position,
                });
                 markersRef.current.push(marker)   
              });
            }
          })
        }
      } catch (error) {
        console.error("Error placing markers:", error);
      }
    }
    if (mapInstanceRef.current) placeMarkers();
    
  },[data])


  
    return(<div className="map" ref={mapRef}></div>);
}

export default Map;