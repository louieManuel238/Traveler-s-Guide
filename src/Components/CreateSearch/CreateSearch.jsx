import { useState } from 'react';
import './CreateSearch.scss';
import GeminiAI from '../../api/gemini.js';
import Basics from '../Form/Basics/Basics.jsx';
import Budget from '../Form/Budget/Budjet.jsx';
import Squad from '../Form/Squad/Squad.jsx';
import Adventure from '../Form/Adventure/Adventure.jsx';
import StayAndTravel from '../Form/StayAndTravel/StayAndTravel.jsx';
import OtherPreference from '../Form/OtherPreference/OtherPreference.jsx';
import Steps from '../Form/Steps/Steps.jsx';

const CreateSearch = ({setJsonResult}) => {
    
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [place, setPlace] = useState({});
    const [preference, setPreference] = useState([]);
    const geminiAPI = new GeminiAI();

    const submitSearch = (event)=>{
        event.preventDefault();
        const prompt = `Create a travel itinerary to ${place} 
        from ${startDate} to ${endDate}
        focus on ${preference} include top attractions. 
        return only specific place for activities with a location`;
        setJsonResult(
            async()=> await geminiAPI.GenerateNewResponse(prompt)
        )
    }
    return (
        <section className='search-section'>
            <h2 className='search-section__header'>Where do you want to go?</h2>
            <form className='search-section__search-form'>
              
            <Steps steps={[
                <Basics setPlace={setPlace} 
                    setEndDate={setEndDate}
                    endDate={endDate} 
                    startDate={startDate}
                    setStartDate={setStartDate}/>,
                <Budget/>,
                <Squad/>,
                <Adventure/>,
                <StayAndTravel/>,
                <OtherPreference/>
              ]}/>
              

                <button type='submit' onClick={submitSearch}>Generate Itenerary</button>
            </form>
        </section>
        
    );
};

export default CreateSearch;