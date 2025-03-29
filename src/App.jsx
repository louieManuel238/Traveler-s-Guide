
import './App.scss';
import './api/googleCaller';
import IntroSection from './pages/IntroSection/IntroSection';
import FormsSection from './pages/FormsSection/FormsSection';
import ItinerarySection from './pages/ItinerarySection/ItinerarySection';
import React, { useState, useEffect } from 'react';

function App() {

  const [jsonResult,setJsonResult] = useState({});
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await jsonResult;
      setData(result);
    };
    getData();
  }, [jsonResult]);
  useEffect(() => {
    console.log("VITE_MAP_ID:", import.meta.env.VITE_MAP_ID);
  }, []);
  return (
    <>
      <IntroSection/>
      <FormsSection setJsonResult={setJsonResult}/>
      <ItinerarySection data={data}/>
    </>
    );
}


export default App
