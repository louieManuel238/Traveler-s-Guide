import React from 'react';

const Adventure = () => {
    return (
        <div>
            <h2>Adventure Style</h2>
            <p>Pick Your Vibe (Choose up to 3):</p>
            <ul>
                <li><input type="checkbox" id="relaxation" name="vibe" value="Relaxation & Wellness" /> <label htmlFor="relaxation">Relaxation & Wellness 🧘‍♂️</label></li>
                <li><input type="checkbox" id="thrills" name="vibe" value="Thrills & Adventure" /> <label htmlFor="thrills">Thrills & Adventure 🪂</label></li>
                <li><input type="checkbox" id="culture" name="vibe" value="Culture & History" /> <label htmlFor="culture">Culture & History 🏛️</label></li>
                <li><input type="checkbox" id="foodie" name="vibe" value="Foodie Heaven" /> <label htmlFor="foodie">Foodie Heaven 🍜</label></li>
                <li><input type="checkbox" id="nature" name="vibe" value="Nature & Wildlife" /> <label htmlFor="nature">Nature & Wildlife 🌿</label></li>
                <li><input type="checkbox" id="nightlife" name="vibe" value="Nightlife & Parties" /> <label htmlFor="nightlife">Nightlife & Parties 🎉</label></li>
                <li><input type="checkbox" id="offgrid" name="vibe" value="Off-the-Grid Escape" /> <label htmlFor="offgrid">Off-the-Grid Escape 🏕️</label></li>
            </ul>
            <p>Trip Pace:</p>
            <ul>
                <li><input type="checkbox" id="slow" name="pace" value="Slow & Leisurely" /> <label htmlFor="slow">Slow & Leisurely 🐢</label></li>
                <li><input type="checkbox" id="balanced" name="pace" value="Balanced Mix" /> <label htmlFor="balanced">Balanced Mix ⚖️</label></li>
                <li><input type="checkbox" id="gogogo" name="pace" value="Go-Go-Go!" /> <label htmlFor="gogogo">Go-Go-Go! 🚀</label></li>
            </ul>
        </div>
    );
};

export default Adventure;