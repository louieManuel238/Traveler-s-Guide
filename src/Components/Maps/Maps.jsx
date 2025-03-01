import initMap from "../../api/map";

const Map = () => {
    const request = {
        textQuery: "Canals in Amsterdam, Netherlands",
        fields: ["displayName", "location", "businessStatus", "photos"],
        includedType: "",
        locationBias: { lat: 37.4161493, lng: -122.0812166 },
        isOpenNow: true,
        language: "en-US",
        maxResultCount: 8,
        minRating: 3.2,
        region: "us",
        useStrictTypeFiltering: false,
      };
      
    initMap(request);
    return(<div className="map"></div>);
}

export default Map;