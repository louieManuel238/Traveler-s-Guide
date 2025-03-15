import React from 'react';

const OtherPreference = () => {
    return (
        <div>
            <h2>🌱 Preferences & Needs</h2>
            
            <fieldset>
                <legend>Dietary Restrictions:</legend>
                <label><input type="checkbox" name="dietary" value="vegetarian" />Vegetarian 🌱</label>
                <label>
                    <input type="checkbox" name="dietary" value="vegan" />
                    Vegan 🥑
                </label>
                <label>
                    <input type="checkbox" name="dietary" value="gluten-free" />
                    Gluten-Free 🚫🌾
                </label>
                <label>
                    <input type="checkbox" name="dietary" value="none" />
                    None!
                </label>
            </fieldset>

            <fieldset>
                <legend>Special Requirements:</legend>
                <label>
                    <input type="checkbox" name="special" value="accessibility" />
                    Accessibility Needs ♿
                </label>
                <label>
                    <input type="checkbox" name="special" value="pet-friendly" />
                    Pet-Friendly 🐾
                </label>
                <label>
                    <input type="checkbox" name="special" value="kid-friendly" />
                    Kid-Friendly 👶
                </label>
            </fieldset>

            <fieldset>
                <legend>Climate Preference:</legend>
                <label>
                    <input type="checkbox" name="climate" value="sunny-warm" />
                    Sunny & Warm ☀️
                </label>
                <label>
                    <input type="checkbox" name="climate" value="cool-crisp" />
                    Cool & Crisp ❄️
                </label>
                <label>
                    <input type="checkbox" name="climate" value="no-preference" />
                    No Preference 🌈
                </label>
            </fieldset>
        </div>
    );
};

export default OtherPreference;