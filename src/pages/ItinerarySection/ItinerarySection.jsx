import React from 'react';
import Itinerary from '../../Components/Itinerary/Itinerary';
import Map from '../../Components/Maps/Maps';

const ItinerarySection = ({ data }) => {
    return (
        <div className='itinerary-map'>
            {data && Object.keys(data).length !== 0 && <Itinerary data={data} />}
            <Map data={data} />
        </div>
    );
};

export default ItinerarySection;