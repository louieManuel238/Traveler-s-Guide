import React, { useState } from 'react';
import './CreateSearch.scss';
import GeminiAI from '../../api/gemini.js';

import AutoCompleteAddressSearch from './AutoCompleteAddressSearch';
import DateRange from './DateRange';

const CreateSearch = ({setJsonResult}) => {
    
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [place, setPlace] = useState({});
    const geminiAPI = new GeminiAI();

    const submitSearch = (event)=>{
        event.preventDefault();
        const prompt = `Create a travel itinerary for to ${place} 
        from ${startDate} to ${endDate}
        focus on adventure, food, include top attractions. 
        return only specific place for activities with a location`;
        setJsonResult(
            async()=> await geminiAPI.GenerateResponse(prompt)
        )
    }
    return (
        <section className='search-section'>
            <h2 className='search-section__header'>Where do you want to go?</h2>
            <form className='search-section__search-form'>
                <AutoCompleteAddressSearch setPlace={setPlace}/>
                <DateRange 
                    startDate={startDate} setStartDate={setStartDate}
                    endDate={endDate} setEndDate={setEndDate}
                    />
                <button type='submit' onClick={submitSearch}>Generate Itenerary</button>
            </form>
        </section>
        
    );
};

export default CreateSearch;