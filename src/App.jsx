
import './App.scss';
import './api/googleCaller';
import Map from './Components/Maps/Maps';
import GenerateResponse from './api/gemini';


import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';

import React, { useState, useEffect } from 'react';

function App() {
  // GenerateResponse();
  return (
    
     
      <>
      
      <section>
        <Navigation/>
        <Header/>
      </section>
        <MainContent/>
        <Map/>
      </>

  
  );
}

export default App
