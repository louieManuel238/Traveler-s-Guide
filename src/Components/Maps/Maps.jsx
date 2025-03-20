import { useEffect, useRef } from "react";
import {DoubleArrowUp} from '../SVG/Arrow'
import './Maps.scss';
const Map = ({data}) => {
  
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const center = { lat: 37.4161493, lng: -122.0812166 };

  useEffect(() => {
    async function initMap() {
      try{
        const { Map } = await google.maps.importLibrary("maps");
        mapInstanceRef.current = ( new Map(mapRef.current, {
          streetViewControl: false,
          center: center,
          zoom: 4,
          minZoom: 2,
          maxZomm: 12,
          mapId: import.meta.env.VITE_MAP_ID,
          restriction: {
            latLngBounds: {north: 85, south: -85, west: -180, east: 180},
            strictBounds: false,
          },
          gestureHandling: "greedy"
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
          let firstPosition = null;
          data.Activities.forEach((item) => {
            if (item.activity) {
              item.activity.forEach((activity) => {
                const position = new LatLng(activity.location);
                const marker = new AdvancedMarkerElement({
                  map: mapInstanceRef.current,
                  position: position,
                });
                 markersRef.current.push(marker)
                 if (!firstPosition) {
                  firstPosition = position;
                }
              });
            }
          })
          if (firstPosition) {
            mapInstanceRef.current.setCenter(firstPosition);
          }
        }
      } catch (error) {
        console.error("Error placing markers:", error);
      }
    }
    if (mapInstanceRef.current) placeMarkers();
    
  },[data])


  
    return(
      <div className="map-container">
      <div className="map-container__arrow">
        <a href="#main-content">
          <DoubleArrowUp/>
        </a>
        </div>
      
        <div className="map" ref={mapRef}></div>
      
      </div>
    );
}

export default Map;