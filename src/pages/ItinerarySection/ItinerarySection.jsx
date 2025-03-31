import {useState, useEffect, useRef} from 'react';
import Itinerary from '../../Components/Itinerary/Itinerary';
import Map from '../../Components/Maps/Maps';
import './ItinerarySection.scss';
import { Typography, Box } from '@mui/material';

const ItinerarySection = ({data}) => {
    const [filteredActivityByDay,setFilteredActivityByDay] = useState([]);
    const [placeMarkerPan, setPlaceMarkerPan] = useState();
    const sectionRef = useRef(null);

    useEffect(() => {
        if (data && Object.keys(data).length !== 0 && sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, [data])

    return (
        <div className='itinerary-map' id='itinerary-map' ref={sectionRef}>
            {data && Object.keys(data).length !== 0 &&
             <Box className='itinerary-panel__header'>
                <Typography variant="h2" gutterBottom className='itinerary-panel__main-header'>{data.Title}</Typography>
                <h3 className='itinerary-panel__sub-header'>{data.NoteForItinerary}</h3>
            </Box>}
           
            {/* {data && Object.keys(data).length !== 0 && <Itinerary data={data} />} */}

            <Map data={data} filteredActivityByDay={filteredActivityByDay} placeMarkerPan={placeMarkerPan}/>
            {data && Object.keys(data).length !== 0 && 
                <Itinerary data={data} 
                    setFilteredActivityByDay={setFilteredActivityByDay}
                    setPlaceMarkerPan={setPlaceMarkerPan}
                />}
      
        </div>
    );
};

export default ItinerarySection;