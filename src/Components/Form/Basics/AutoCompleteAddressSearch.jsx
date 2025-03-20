import { useEffect, useState } from 'react';
import './AutoCompleteAddressSearch.scss';
import {TextField, ListItemButton, ListItemText, ListItem, List} from '@mui/material';
import {RoomIcon} from '../../SVG/Marker';


const AutoCompleteAddressSearch = ({setPlace}) => {
 
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