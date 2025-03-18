
import './App.scss';
import './api/googleCaller';
import Map from './Components/Maps/Maps';
import IntroSection from './pages/IntroSection/IntroSection';
import MainContent from './Components/MainContent/MainContent';


import React, { useState, useEffect } from 'react';
import Itinerary from './Components/Itinerary/Itinerary';
import FormsSection from './pages/FormsSection/FormsSection';

function App() {


  const [jsonResult,setJsonResult] = useState({});
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const result = await jsonResult;
      setData(result);
    };
    getData();
  }, [jsonResult]);

  return (
      <>
        <IntroSection/>
        <FormsSection setJsonResult={setJsonResult}/>
        <div className='itinerary-map'>
            {data && Object.keys(data).length !== 0 && <Itinerary data={data}/>}
            <Map data={data}/>
        </div>

      </>

  
  );
}

export default App
