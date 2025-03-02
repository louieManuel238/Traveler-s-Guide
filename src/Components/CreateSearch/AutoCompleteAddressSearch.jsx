import React, { useEffect, useRef, useState } from 'react';
import Autocomplete from "react-google-autocomplete";


const AutoCompleteAddressSearch = () => {
    
    const searchBarRef = useRef(null);
    const [isPlacesLibraryLoaded, setIsPlacesLibraryLoaded] = useState(false);
    const placeAutocomplete = useRef(null);
    
    useEffect(() => {
      async function loadPlacesLibrary() {
        if (!isPlacesLibraryLoaded) {
          try {
            await google.maps.importLibrary("places");
            setIsPlacesLibraryLoaded(true);
          } catch (error) {
            console.error("Error loading places library:", error);
          }
        }
      }
      loadPlacesLibrary();
      console.log("loaoded")
    }, [isPlacesLibraryLoaded]);

    useEffect(() => {
        if (isPlacesLibraryLoaded) {
            if(!placeAutocomplete.current){
                placeAutocomplete.current = new google.maps.places.PlaceAutocompleteElement();
                if (searchBarRef.current) searchBarRef.current.appendChild(placeAutocomplete.current);
            }
        }
        return () => {
            if (placeAutocomplete.current && searchBarRef.current && searchBarRef.current.contains(placeAutocomplete.current)) {
                searchBarRef.current.removeChild(placeAutocomplete.current);
                placeAutocomplete.current = null;
            }
        };
    }, [isPlacesLibraryLoaded]);

    return (
        <div id='search-bar' className='search-section__search-bar' ref={searchBarRef}></div>
    );
};

export default AutoCompleteAddressSearch;