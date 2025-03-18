import AutoCompleteAddressSearch from "./AutoCompleteAddressSearch";
import { Typography } from "@mui/material";

const Basics = ({setPlace}) => {
    return (
        <section className="form-container__form">
             <Typography variant="h2" gutterBottom className='search-section__header'>🌍 Where do you want to go?</Typography>
            <div className="search-section__body">
            <AutoCompleteAddressSearch setPlace={setPlace}/>
            </div>
        </section>
    );
};

export default Basics;