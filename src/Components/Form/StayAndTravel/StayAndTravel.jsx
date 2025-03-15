import React from 'react';

const StayAndTravel = () => {
    return (
        <div>
            <h1>🏠 Stay & Travel</h1>
            <h2>Accommodation Type:</h2>
            <ul>
                <li><label><input type="checkbox" /> Hostel/Budget Hotel 🛏️</label></li>
                <li><label><input type="checkbox" /> Boutique Hotel/Airbnb 🏨</label></li>
                <li><label><input type="checkbox" /> Luxury Resort 🌴</label></li>
                <li><label><input type="checkbox" /> Quirky Stays (e.g., treehouse, glamping) 🌳</label></li>
            </ul>
            <h2>Transportation Preferences:</h2>
            <ul>
                <li><label><input type="checkbox" /> Flights ✈️</label></li>
                <li><label><input type="checkbox" /> Trains 🚆</label></li>
                <li><label><input type="checkbox" /> Road Trip 🚗</label></li>
                <li><label><input type="checkbox" /> Mix & Match 🔀</label></li>
            </ul>
        </div>
    );
};

export default StayAndTravel;