
import './App.scss';
import './api/googleCaller';
import Map from './Components/Maps/Maps';


import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';

import React, { useState, useEffect } from 'react';
import Itinerary from './Components/Itinerary/Itinerary';
import PlacesAPI from './api/places';

function App() {
  const [jsonResult,setJsonResult] = useState({});
  const [data, setData] = useState({});
  const [shouldFetchPlaces, setShouldFetchPlaces] = useState(false);
  const placesAPI = new PlacesAPI();

  const request = {
    textQuery: "",
    fields: ["displayName", "location", "businessStatus", "photos"],
    includedType: "",
    locationBias: { lat: 53.5461, lng: -113.4937 },
    language: "en-US",
    region: "us",
    useStrictTypeFiltering: false,
  };

  
  useEffect(() => {
    const getData = async () => {
      const result = await jsonResult;
      setData(result);
      setShouldFetchPlaces(true);
    };
    getData();
  }, [jsonResult]);

  // console.log(data);
  useEffect(() => {
    const fetchPlaces = async () => {
      if (Object.keys(data).length !== 0) {
        const updatedData = { ...data}
        for (const day of updatedData.Activities) {
          for (const activity of day.activity) {
            request.textQuery = activity.place;
            request.locationBias = {
              lat: Number(activity.location.lat),
              lng: Number(activity.location.lng),
            };
            try {
              const placeSearch = await placesAPI.findPlaces(request);
                console.log(placeSearch.displayName, placeSearch.location);
                activity.location = placeSearch.location;
            } catch (error) {
              console.error("Error fetching places:", error);
            }
          }
        }
        setData(updatedData);
        setShouldFetchPlaces(false);
      }
    };
    if (shouldFetchPlaces)fetchPlaces();
  }, [shouldFetchPlaces,data]);

  return (
    
     
      <>
      <section>
        <Navigation/>
        <Header/>
      </section>
        <MainContent setJsonResult={setJsonResult}/>
        <div>
            {!shouldFetchPlaces && <Itinerary data={data}/>}
        </div>
        <Map data={data} setShouldFetchPlaces={setShouldFetchPlaces}/>
      </>

  
  );
}

export default App
