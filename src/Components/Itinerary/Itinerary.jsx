import React, { useState } from 'react';

const Itinerary = ({ data }) => {
    
    const days = data.Activities;
    console.log(days)
    const [filteredDays, setFilteredDays] = useState(days);

    const filterByDate = (date) => {
        const filtered = days.filter((activity) => activity.day === date);
        setFilteredDays(filtered);
    };

    return (
        <div>
            {days.map((day)=> (<div>{day.day}</div>))}
            <h1>{data.Title}</h1>
            <p>{data.NoteForItinerary}</p>
            
                <div>
                    <h2>{filteredDays.day}</h2>
                    <p>{filteredDays.noteForTheDay}</p>
{/* 
                    {filteredDays.activity.map((act, index) => (
                        <div key={index}>
                            <h3>{act.place}</h3>
                            <p>{act.description}</p>
                            <p>Location: {act.location.lat}, {act.location.lng}</p>
                        </div>
                    ))} */}
                </div>
            
        </div>
    );
};

export default Itinerary;