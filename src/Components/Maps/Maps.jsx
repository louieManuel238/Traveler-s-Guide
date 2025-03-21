import { useEffect, useRef, useState  } from "react";
import {DoubleArrowUp} from '../SVG/Arrow'
import './Maps.scss';
const Map = ({data, filteredActivityByDay, placeMarkerPan}) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const center = { lat: 37.4161493, lng: -122.0812166 };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    async function initMap() {
      try{
        if (!isVisible || mapInstanceRef.current) return; 

        const { Map} = await google.maps.importLibrary("maps");
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

        setTimeout(() => {
          google.maps.event.trigger(mapInstanceRef.current, "resize");
        }, 100);

      } catch(error){
        console.error("Error initializing map", error)
      } 
    }
    initMap();
  },[isVisible])

  useEffect(()=>{
    async function placeMarkers() {
      try {
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        // const {InfoWindow } = await google.maps.importLibrary("maps");
        const { LatLng } = await google.maps.importLibrary("core");

        markersRef.current.forEach(marker => marker.setMap(null));
        markersRef.current = [];
        let firstPosition = null;
        
        const activities = filteredActivityByDay.length > 0 
          ? filteredActivityByDay 
          : data?.Activities?.reduce((acc, item) => {
              if (item.activity) {acc.push(...item.activity);}
              return acc;
            }, []) || [];

        activities.forEach((activity)=>{
          const position = new LatLng(activity.location);
            const marker = new AdvancedMarkerElement({
              map: mapInstanceRef.current,
              position: position,
              title: activity.place,
              gmpClickable: true
            });
            marker.addListener('gmp-click',()=>{
              mapInstanceRef.current.setZoom(15);
              mapInstanceRef.current.setCenter(marker.position);
              mapInstanceRef.current.panTo(marker.position);
            });
            markersRef.current.push(marker)
            if (!firstPosition) {firstPosition = position;}    
        });

        if (firstPosition) {mapInstanceRef.current.setCenter(firstPosition);}

        // if(filteredActivityByDay.length==0){
        //     if (data && Object.keys(data).length !== 0) {
        //     let firstPosition = null;
        //     data.Activities.forEach((item) => {
        //       if (item.activity) {
        //         item.activity.forEach((activity) => {
        //           const position = new LatLng(activity.location);
        //           const marker = new AdvancedMarkerElement({
        //             map: mapInstanceRef.current,
        //             position: position,
        //             title: activity.place,
        //             gmpClickable: true
        //           });
        //           marker.addListener('gmp-click',()=>{
        //             mapInstanceRef.current.setZoom(15);
        //             mapInstanceRef.current.setCenter(marker.position);
        //             mapInstanceRef.current.panTo(marker.position);
                    
        //           })
        //           markersRef.current.push(marker)
        //           if (!firstPosition) {firstPosition = position;}
        //         });
        //       }
        //     })
        //     if (firstPosition) {mapInstanceRef.current.setCenter(firstPosition);}
        //   }
        // }
        // else{
        //   for(const activity of filteredActivityByDay){
        //     const position = new LatLng(activity.location);
        //     const marker = new AdvancedMarkerElement({
        //       map: mapInstanceRef.current,
        //       position: position,
        //       title: activity.place,
        //       gmpClickable: true
        //     });
        //     marker.addListener('gmp-click',()=>{
        //       mapInstanceRef.current.setZoom(15);
        //       mapInstanceRef.current.setCenter(marker.position);
        //       mapInstanceRef.current.panTo(marker.position);
        //       // const infoWindow = new google.maps.InfoWindow({
        //       //   content: marker.title
        //       // });
        //       // infoWindow.close();
        //       // infoWindow.open(mapInstanceRef.current, marker);
        //     })
        //     mapInstanceRef.current.panTo(position);
        //     markersRef.current.push(marker)
        //   }
        // }
      } catch (error) {
        console.error("Error placing markers:", error);
      }
    }
    if (mapInstanceRef.current) placeMarkers();

    
  },[data, filteredActivityByDay, isVisible])

  useEffect(()=>{
    async function panToLocation(){
      const { LatLng } = await google.maps.importLibrary("core");
      const position = new LatLng(placeMarkerPan.location);
      mapInstanceRef.current.setZoom(15);
      mapInstanceRef.current.setCenter(position);
      mapInstanceRef.current.panTo(position);
      const marker = markersRef.current.find(marker => marker.position.lat === placeMarkerPan.location.lat && marker.position.lng === placeMarkerPan.location.lng);
      // console.log(marker.background)
      

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