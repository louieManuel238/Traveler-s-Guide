import { useEffect, useRef, useState } from 'react';
import './AutoCompleteAddressSearch.scss';
import {TextField, ListItemButton, ListItemText, ListItem, List} from '@mui/material';
import {RoomIcon} from '../../SVG/Marker';


const AutoCompleteAddressSearch = ({setPlace}) => {
    
    // const searchBarRef = useRef(null);
    // const [isPlacesLibraryLoaded, setIsPlacesLibraryLoaded] = useState(false);
    // const placeAutocomplete = useRef(null);
    
    // useEffect(() => {
    //   async function loadPlacesLibrary() {
    //     if (!isPlacesLibraryLoaded) {
    //       try {
    //         await google.maps.importLibrary("places");
    //         setIsPlacesLibraryLoaded(true);
    //       } catch (error) {
    //         console.error("Error loading places library:", error);
    //       }
    //     }
    //   }
    //   loadPlacesLibrary();
     
    // }, [isPlacesLibraryLoaded]);

    // useEffect(() => {
    //     if (isPlacesLibraryLoaded) {
    //         if(!placeAutocomplete.current){
    //             placeAutocomplete.current = new google.maps.places.PlaceAutocompleteElement();
    //             if (searchBarRef.current) {
    //                 searchBarRef.current.addEventListener('gmp-placeselect', async ({place}) => {
    //                     await place.fetchFields({fields: ["displayName", "formattedAddress", "location"],
    //                       types: ['country', 'locality']}
    //                     )
    //                     setPlace(JSON.stringify(place.toJSON(), null,2,))
    //                 });
    //                 searchBarRef.current.appendChild(placeAutocomplete.current);
    //             }
    //         }
    //     }
    //     return () => {
    //         if (placeAutocomplete.current && searchBarRef.current && searchBarRef.current.contains(placeAutocomplete.current)) {
    //             searchBarRef.current.removeChild(placeAutocomplete.current);
    //             placeAutocomplete.current = null;
    //         }
    //     };
    // }, [isPlacesLibraryLoaded]);
    ///---------------------------------
    const [input, setInput] = useState("");
    const [predictions, setPredictions] = useState([]);
    useEffect(()=>{
      const autoComplete = async () => {
        const { AutocompleteService } = await google.maps.importLibrary("places");
        const service = new AutocompleteService();
        const request = {
          input,
          types: ['(regions)']
        };
        service.getPlacePredictions(request, (predictions, status) => {
           (status === google.maps.places.PlacesServiceStatus.OK)?
             setPredictions(predictions):
            console.error("AutocompleteService failed:", status);
        });
      }
      if(input)autoComplete();
      else setPredictions([])
      console.log("useEff")
    },[input])

    const handleSelect = (item) => {
        setPlace(item.description);
        setInput(item.description);
        setPredictions([]);
    }

    return (
      <>
        {/* <div id='search-bar' className='search-section__search-bar' ref={searchBarRef}></div> */}
      
        <div className='address-search'>
          <RoomIcon className="address-search__icon" />
          <TextField className="address-search__bar" label="Country/City" variant="outlined"    
            onChange={(e)=>{setInput(e.target.value)}} value={input}/>
        </div>
          <List className='address-search__list'>
            {predictions.map((item) => {
              return <ListItem key={item.place_id} className='prediction'>
                <ListItemButton onClick={()=>handleSelect(item)} >
                  <ListItemText className='prediction--maintext' 
                  primary={item.structured_formatting.main_text}
                  secondary={item.structured_formatting.secondary_text}
                  />
                  {/* <ListItemText className='prediction--subtext'></ListItemText> */}
                </ListItemButton>
              </ListItem>;
            })}
          </List>
     
        </>
    );
};

export default AutoCompleteAddressSearch;