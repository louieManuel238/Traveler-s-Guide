import React, { useEffect } from 'react';

const Itinerary = ({ data }) => {
    
    return (
        <div>
            <h1>{data.Title}</h1>
            <p>{data.NoteForItinerary}</p>
            {data.Activities.map((activity, index) => (
                <div key={index}>
                    <h2>{activity.day}</h2>
                    <p>{activity.noteForTheDay}</p>
                    {activity.activity.map((act, idx) => (
                        <div key={idx}>
                            <h3>{act.place}</h3>
                            <p>{act.description}</p>
                            <p>Location: {act.location.lat}, {act.location.lng}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Itinerary;