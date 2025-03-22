import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Typography } from "@mui/material";
import {motion} from 'framer-motion';

const Budget = ({setBudget, budget}) => {
    return (
        <motion.section className="form-container__form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1}}
        >
            <Typography variant="h2" gutterBottom className='search-section__header'>💰 Budget Vibes</Typography>
            <div  className="search-section__body">
            <FormControl>
                <FormLabel>Spending Style:</FormLabel>
                <RadioGroup value={budget} onChange={(e)=>setBudget(e.target.value)}>
                    <FormControlLabel value="budget" control={<Radio/>} label="Budget Backpacker 🎒" />
                    <FormControlLabel value="mid-range" control={<Radio />} label="Mid-Range Explorer 💼" />
                    <FormControlLabel value="luxury" control={<Radio />} label="Luxury Seeker 💎" />
                </RadioGroup>
            </FormControl>
            </div>
        </motion.section>
    );
};

export default Budget;