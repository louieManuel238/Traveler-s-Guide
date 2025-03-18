import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Typography } from "@mui/material";

const Budget = ({setBudget, budget}) => {
    return (
        <section className="form-container__form">
            <Typography variant="h2" gutterBottom className='search-section__header'>💰 Budget Vibes</Typography>
            <FormControl className="search-section__body">
                <FormLabel>Spending Style:</FormLabel>
                <RadioGroup value={budget} onChange={(e)=>setBudget(e.target.value)}>
                    <FormControlLabel value="budget" control={<Radio/>} label="Budget Backpacker 🎒" />
                    <FormControlLabel value="mid-range" control={<Radio />} label="Mid-Range Explorer 💼" />
                    <FormControlLabel value="luxury" control={<Radio />} label="Luxury Seeker 💎" />
                </RadioGroup>
            </FormControl>
        </section>
    );
};

export default Budget;