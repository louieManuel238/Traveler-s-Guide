import React, { useState } from 'react';
import './CreateSearch.scss';


import AutoCompleteAddressSearch from './AutoCompleteAddressSearch';
import DateRange from './DateRange';

const CreateSearch = () => {
    
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [place, setPlace] = useState({});
    console.log(place)
    return (
        <section className='search-section'>
            <h2 className='search-section__header'>Where do you want to go?</h2>
            <form className='search-section__search-form'>
                <AutoCompleteAddressSearch setPlace={setPlace}/>
                <DateRange 
                    startDate={startDate} setStartDate={setStartDate}
                    endDate={endDate} setEndDate={setEndDate}
                    />
            </form>
        </section>
        
    );
};

export default CreateSearch;