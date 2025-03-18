import { FormControl, FormLabel, FormGroup, Checkbox, Radio, RadioGroup, FormControlLabel, Typography } from '@mui/material';

const Adventure = ({adventure, setAdventure, pace, setPace}) => {
    const { relaxation, thrill, culture, food, nature, nightlife, offTheGrid } = adventure;
    const error = [ relaxation, thrill, culture, food, nature, nightlife, offTheGrid].filter((v)=>v).length > 3;

    const handleChangeAdventure = (event) => {
        
        setAdventure({
          ...adventure,
          [event.target.name]: event.target.checked,
        });
      };
      


    return (
        <section className="form-container__form">
        <Typography variant="h2" gutterBottom className='search-section__header'>🎯  Adventure Style</Typography>
        <div className='search-section__body'>
            <FormControl component="fieldset" variant="standard" error={error}>
                <FormLabel component="legend">Pick Your Vibe:</FormLabel>

                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={relaxation} onChange={handleChangeAdventure} name="relaxation" />} label="Relaxation & Wellness 🧘‍♂️" />
                    <FormControlLabel control={<Checkbox checked={thrill} onChange={handleChangeAdventure} name="thrill" />} label="Thrills & Adventure 🪂" />
                    <FormControlLabel control={<Checkbox checked={culture} onChange={handleChangeAdventure} name="culture" />} label="Culture & History 🏛️" />
                    <FormControlLabel control={<Checkbox checked={food} onChange={handleChangeAdventure} name="food" />} label="Foodie Heaven 🍜" />
                    <FormControlLabel control={<Checkbox checked={nature} onChange={handleChangeAdventure} name="nature" />} label="Nature & Wildlife 🌿" />
                    <FormControlLabel control={<Checkbox checked={nightlife} onChange={handleChangeAdventure} name="nightlife" />} label="Nightlife & Parties 🎉" />
                    <FormControlLabel control={<Checkbox checked={offTheGrid} onChange={handleChangeAdventure} name="offTheGrid" />} label="Off-the-Grid Escape 🏕️" />
                </FormGroup>
        </FormControl>
        <FormControl component="fieldset" variant="standard">
                <FormLabel component="legend">Trip Pace:</FormLabel>
                <RadioGroup component="fieldset" variant="standard" value={pace} onChange={(e)=>setPace(e.target.value)}>
                    <FormControlLabel control={<Radio value="slow" name="slow" />} label="Slow & Leisurely 🐢" />
                    <FormControlLabel control={<Radio value="balanced" name="balanced" />} label="Balanced Mix ⚖️" />
                    <FormControlLabel control={<Radio value="gogogo" name="gogogo" />} label="Go-Go-Go! 🚀" />
                </RadioGroup>
            </FormControl>
            </div>
        </section>
    );
};

export default Adventure;