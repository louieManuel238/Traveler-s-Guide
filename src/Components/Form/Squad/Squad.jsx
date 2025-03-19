import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Typography } from "@mui/material";
import {motion} from 'framer-motion';

const Squad = ({setSquad, squad}) => {
    return (
        <motion.section className="form-container__form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1}}
        >
             <Typography variant="h2" gutterBottom  className='search-section__header'>👥 Travel Squad</Typography>

            <FormControl className="search-section__body">
            <FormLabel>Who’s Joining? (Solo, Couple, Friends, Family, Group)</FormLabel>
            <RadioGroup value={squad} onChange={(e)=>setSquad(e.target.value)}>
                <FormControlLabel value="solo" control={<Radio />} label="Solo" />
                <FormControlLabel value="couple" control={<Radio />} label="Couple" />
                <FormControlLabel value="group" control={<Radio />} label="Group" />
            </RadioGroup>
        </FormControl>
        </motion.section>
    );
};

export default Squad;