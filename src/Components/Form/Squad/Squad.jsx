import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Typography } from "@mui/material";

const Squad = ({setSquad, squad}) => {
    return (
        <section className="form-container__form">
             <Typography variant="h2" gutterBottom  className='search-section__header'>👥 Travel Squad</Typography>

            <FormControl className="search-section__body">
            <FormLabel>Who’s Joining? (Solo, Couple, Friends, Family, Group)</FormLabel>
            <RadioGroup value={squad} onChange={(e)=>setSquad(e.target.value)}>
                <FormControlLabel value="solo" control={<Radio />} label="Solo" />
                <FormControlLabel value="couple" control={<Radio />} label="Couple" />
                <FormControlLabel value="group" control={<Radio />} label="Group" />
            </RadioGroup>
        </FormControl>
        </section>
    );
};

export default Squad;