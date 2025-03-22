import { useEffect, useRef, useState} from "react";
import {DoubleArrowUp} from '../SVG/Arrow'
import './Maps.scss';

const Map = ({data, filteredActivityByDay, placeMarkerPan}) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef(new Set([]));
  const [markerSelected,setMarkerSelected] = useState();
  const center = { lat: 37.4161493, lng: -122.0812166 };

  useEffect(() => {
    async function initMap() {
      try{
        if (mapInstanceRef.current) return; 

        const { Map} = await google.maps.importLibrary("maps");
        mapInstanceRef.current = ( new Map(mapRef.current, {
          streetViewControl: false,
          center: center,
          zoom: 4,
          minZoom: 2,
          maxZoom: 18,
          mapId: import.meta.env.VITE_MAP_ID,
          restriction: {
            latLngBounds: {north: 85, south: -85, west: -180, east: 180},
            strictBounds: false,
          },
          gestureHandling: "greedy"
        }))
        google.maps.event.addListener(mapInstanceRef.current, "idle", () => {
          setTimeout(() => {
            google.maps.event.trigger(mapInstanceRef.current, "resize");
          }, 100);
        });

      } catch(error){
        console.error("Error initializing map", error)
      } 
    }
    initMap();
  },[])

  useEffect(()=>{
    async function placeMarkers() {
      try {
        if (!mapInstanceRef.current) return;
        const { AdvancedMarkerElement, PinElement} = await google.maps.importLibrary("marker");
        const {InfoWindow } = await google.maps.importLibrary("maps");
        const { LatLng } = await google.maps.importLibrary("core");

        // Remove old markers
        markersRef.current.forEach(marker => marker.setMap(null));
        markersRef.current = new Set([]);
        let firstPosition = null;
        const infoWindow = new InfoWindow();
        const activities = filteredActivityByDay.length > 0 
          ? filteredActivityByDay 
          : data?.Activities?.reduce((acc, item) => {
              if (item.activity) acc.push(...item.activity);
              return acc;
            }, []) || [];
        
        activities.forEach((activity)=>{
          const position = new LatLng(activity.location);
          const pinRegular = new PinElement({
            background: '#50E3C2',
            borderColor: '#29967e',
            glyphColor: "white",
          })
          const marker = new AdvancedMarkerElement({
            map: mapInstanceRef.current,
            position: position,
            title: `${activity.place} - ${activity.longDescription}`,
            content: pinRegular.element,
            gmpClickable: true,
          });
          marker.addListener('gmp-click',()=>{
            const pinSize = new PinElement({
              scale: 1.5,
              background: '#50E3C2',
              borderColor: '#29967e',
              glyphColor: "white",
            })
            //reset all marker size
            markersRef.current.forEach(marker => {
              const resetPin = new PinElement({
                background: '#50E3C2',
                borderColor: '#29967e',
                glyphColor: "white",
              });
              marker.content = resetPin.element;
            });

            marker.content = pinSize.element;
            // mapInstanceRef.current.setZoom(12);
 
            infoWindow.close();
            infoWindow.setContent(marker.title);
            infoWindow.open(marker.map, marker);

            mapInstanceRef.current.panTo(marker.position);
          });
            markersRef.current.add(marker)
            if (!firstPosition) firstPosition = position;   
        });

        if (firstPosition) mapInstanceRef.current.setCenter(firstPosition);

      } catch (error) {
        console.error("Error placing markers:", error);
      }
    }
    placeMarkers();

  },[data, filteredActivityByDay])

//  Fix zoom/pan rendering issues
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    function handleMapRedraw() {
      google.maps.event.trigger(mapInstanceRef.current, "resize");
    }

    // Listen for zoom or drag events
    google.maps.event.addListener(mapInstanceRef.current, "zoom_changed", handleMapRedraw);
    google.maps.event.addListener(mapInstanceRef.current, "dragend", handleMapRedraw);

    return () => {
      google.maps.event.clearListeners(mapInstanceRef.current, "zoom_changed");
      google.maps.event.clearListeners(mapInstanceRef.current, "dragend");
    };
  }, []);

  //Pan to location when activity on side panel is clicked
  useEffect(()=>{
   
    async function panToLocation(){
      const { LatLng } = await google.maps.importLibrary("core");
      const { PinElement} = await google.maps.importLibrary("marker"); 
      const position = new LatLng(placeMarkerPan.location);
      const pinSize = new PinElement({
        scale: 1.5,
        background: '#50E3C2',
        borderColor: '#29967e',
        glyphColor: "white",
      })
      const pinRegular = new PinElement({
        background: '#50E3C2',
        borderColor: '#29967e',
        glyphColor: "white",
      })
       mapInstanceRef.current.setZoom(12);
      mapInstanceRef.current.panTo(position);
      const iterator = markersRef.current.keys();
      const marker = iterator.find(marker => marker.position.lat === placeMarkerPan.location.lat && marker.position.lng === placeMarkerPan.location.lng);
      marker.content = pinSize.element;
      if(markerSelected && marker !== markerSelected) markerSelected.content = pinRegular.element;
      setMarkerSelected(marker);
    } 
    if(placeMarkerPan!=null) panToLocation();
    
  },[placeMarkerPan])



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