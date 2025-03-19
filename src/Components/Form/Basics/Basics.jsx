import AutoCompleteAddressSearch from "./AutoCompleteAddressSearch";
import { Typography } from "@mui/material";
import {motion} from 'framer-motion'

const Basics = ({setPlace}) => {
    return (
        <motion.section className="form-container__form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1}}
        >
             <Typography variant="h2" gutterBottom className='search-section__header'>🌍 Where do you want to go?</Typography>
            <div className="search-section__body">
            <AutoCompleteAddressSearch setPlace={setPlace}/>
            </div>
        </motion.section>
    );
};

export default Basics;