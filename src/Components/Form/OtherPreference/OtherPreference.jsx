import { Box, Typography, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
const OtherPreference = ({dietaryRestrictions, setDietaryRestrictions, specialRequirements, setSpecialRequirements}) => {
    const handleDietaryChange = (event) => {
        setDietaryRestrictions({
            ...dietaryRestrictions,
            [event.target.value]: event.target.checked,
        });
    };

    const handleSpecialChange = (event) => {
        setSpecialRequirements({
            ...specialRequirements,
            [event.target.value]: event.target.checked,
        });
    };

    return (
        <Box>
            <Typography variant="h2" gutterBottom className='search-section__header'>🌱 Preferences & Needs</Typography>
            <div className='search-section__body'>
                <FormControl component="fieldset" margin="normal">
                    <FormLabel component="legend">Dietary Restrictions:</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox name="dietary" value="vegetarian" checked={dietaryRestrictions.vegetarian} onChange={handleDietaryChange} />}
                            label="Vegetarian 🌱"
                        />
                        <FormControlLabel
                            control={<Checkbox name="dietary" value="vegan" checked={dietaryRestrictions.vegan} onChange={handleDietaryChange} />}
                            label="Vegan 🥑"
                        />
                        <FormControlLabel
                            control={<Checkbox name="dietary" value="glutenFree" checked={dietaryRestrictions.glutenFree} onChange={handleDietaryChange} />}
                            label="Gluten-Free 🚫🌾"
                        />
                    </FormGroup>
                </FormControl>

                <FormControl component="fieldset" margin="normal">
                    <FormLabel component="legend">Special Requirements:</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox name="special" value="accessibility" checked={specialRequirements.accessibility} onChange={handleSpecialChange} />}
                            label="Accessibility Needs ♿"
                        />
                        <FormControlLabel
                            control={<Checkbox name="special" value="petFriendly" checked={specialRequirements.petFriendly} onChange={handleSpecialChange} />}
                            label="Pet-Friendly 🐾"
                        />
                        <FormControlLabel
                            control={<Checkbox name="special" value="kidFriendly" checked={specialRequirements.kidFriendly} onChange={handleSpecialChange} />}
                            label="Kid-Friendly 👶"
                        />
                    </FormGroup>
                </FormControl>
            </div>
        </Box>
    );
};

export default OtherPreference;