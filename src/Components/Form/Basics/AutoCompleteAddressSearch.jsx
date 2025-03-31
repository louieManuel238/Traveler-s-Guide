import { useEffect, useState } from 'react';
import './AutoCompleteAddressSearch.scss';
import {TextField, ListItemButton, ListItemText, ListItem, List} from '@mui/material';
import {RoomIcon} from '../../SVG/Marker';


const AutoCompleteAddressSearch = ({setPlace}) => {
    const [input, setInput] = useState("");
    const [predictions, setPredictions] = useState([]);
    const [isSelecting, setIsSelecting] = useState(false);

    useEffect(()=>{
      const autoComplete = async () => {
        
        const { AutocompleteSuggestion, AutocompleteSessionToken } = await google.maps.importLibrary("places");
        const token = new AutocompleteSessionToken();
        let request = {
          input,
          includedPrimaryTypes: ['(regions)']
        };
        request.sessionToken = token;
        const { suggestions } = await AutocompleteSuggestion.fetchAutocompleteSuggestions(request);
        setPredictions(suggestions);
      }
      if(input && !isSelecting)autoComplete();
      else setPredictions([])
      if (isSelecting) setIsSelecting(false);

    },[input])

    const handleSelect = (item) => {
      setPlace(item.placePrediction.text.toString());
      setInput(item.placePrediction.text.toString());  
      setPredictions([]);
      setIsSelecting(true);
    };

    return (
      <>
        <div className='address-search'>
          <RoomIcon className="address-search__icon" />
          <TextField className="address-search__bar" label="Country/City" variant="outlined"    
            onChange={(e)=>{setInput(e.target.value)}} value={input}/>
        </div>
          <List className='address-search__list'>
            {predictions.map((item, index) => {
                return <ListItem key={index} className='prediction'>
                <ListItemButton onClick={() => { handleSelect(item)}}>
                  <ListItemText className='prediction--maintext' 
                  primary={item.placePrediction.text.toString()}
                  />
                </ListItemButton>
                </ListItem>;
            })}
          </List>
        </>
    );
};

export default AutoCompleteAddressSearch;