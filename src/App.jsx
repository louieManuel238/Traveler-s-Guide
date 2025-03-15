
import './App.scss';
import './api/googleCaller';
import Map from './Components/Maps/Maps';


import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';

import React, { useState, useEffect } from 'react';
import Itinerary from './Components/Itinerary/Itinerary';

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
      <section>
        <Navigation/>
        <Header/>
      </section>
        <MainContent setJsonResult={setJsonResult}/>
        <div>
            {data && Object.keys(data).length !== 0 && <Itinerary data={data}/>}
        </div>
       <Map data={data}/>
      </>

  
  );
}

export default App
