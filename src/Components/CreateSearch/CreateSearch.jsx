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
import Calendar from '../Form/Calendar/Calendar.jsx';

const CreateSearch = ({setJsonResult}) => {
    
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [place, setPlace] = useState({});
    const [budget, setBudget] = useState("");
    const [squad, setSquad] = useState("");
    const [pace, setPace] =useState("")
    const [accommodation, setAccommodation] = useState({
        hostel: false,
        boutique: false,
        luxury: false,
        quirky: false,
    });

    const [transportation, setTransportation] = useState({
        flights: false,
        trains: false,
        roadTrip: false,
    });
    const [dietaryRestrictions, setDietaryRestrictions] = useState({
        vegetarian: false,
        vegan: false,
        glutenFree: false,
    });

    const [specialRequirements, setSpecialRequirements] = useState({
        accessibility: false,
        petFriendly: false,
        kidFriendly: false,
    });
    const [adventure, setAdventure] = useState({
        relaxation: false,
        thrill: false,
        culture: false,
        food: false,
        nature: false,
        nightlife: false,
        offTheGrid: false
      });

    const geminiAPI = new GeminiAI();

    const message = {
        place: place,
        startDate: startDate,
        endDate: endDate,
        budget: budget,
        squad: squad,
        adventure: adventure,
        pace: pace,
        accommodation: accommodation,
        transportation: transportation,
        dietaryRestrictions: dietaryRestrictions,
        specialRequirements: specialRequirements
    }

    const submitSearch = (event)=>{
        event.preventDefault();

      console.log(message);

        setJsonResult(
            async()=> await geminiAPI.GenerateNewResponse(message)
        )
    }
    return (
        <section className='search-section'>
            <form className='search-section__search-form'>
              
            <Steps steps={[
                <Basics setPlace={setPlace}/>,
                <Calendar  setStartDate={setStartDate} setEndDate={setEndDate}/>,
                <Budget setBudget={setBudget} budget={budget}/>,
                <Squad setSquad={setSquad} squad={squad}/>,
                <Adventure setPace={setPace} setAdventure={setAdventure} adventure={adventure} pace={pace}/>,
                <StayAndTravel setAccommodation={setAccommodation} setTransportation={setTransportation} 
                accommodation={accommodation} transportation={transportation}/>,
                <OtherPreference setDietaryRestrictions={setDietaryRestrictions} setSpecialRequirements={setSpecialRequirements} 
                dietaryRestrictions={dietaryRestrictions} specialRequirements={specialRequirements}/>
              ]}
              submit={submitSearch}
            />
              

                
            </form>
        </section>
        
    );
};

export default CreateSearch;