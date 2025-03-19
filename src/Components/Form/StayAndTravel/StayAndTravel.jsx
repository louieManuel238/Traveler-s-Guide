import {FormControl, FormControlLabel, FormGroup, FormLabel, Checkbox, Typography} from '@mui/material'
import {motion} from 'framer-motion';

const StayAndTravel = ({accommodation, setAccommodation, transportation, setTransportation}) => {
    const handleAccommodationChange = (event) => {
        setAccommodation({
            ...accommodation,
            [event.target.name]: event.target.checked,
        });
    };

    const handleTransportationChange = (event) => {
        setTransportation({
            ...transportation,
            [event.target.name]: event.target.checked,
        });
    };

    return (
        <motion.section className="form-container__form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1}}
        >
            <Typography variant="h2" gutterBottom className='search-section__header'>🏠 Stay & Travel</Typography>
            <div className='search-section__body'>
                <FormControl component="fieldset" variant="standard">
                    <FormLabel component="legend">Accommodation Type:</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={accommodation.hostel} onChange={handleAccommodationChange} name="hostel" />}
                            label="Hostel/Budget Hotel 🛏️"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={accommodation.boutique} onChange={handleAccommodationChange} name="boutique" />}
                            label="Boutique Hotel/Airbnb 🏨"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={accommodation.luxury} onChange={handleAccommodationChange} name="luxury" />}
                            label="Luxury Resort 🌴"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={accommodation.quirky} onChange={handleAccommodationChange} name="quirky" />}
                            label="Quirky Stays (e.g., treehouse, glamping) 🌳"
                        />
                    </FormGroup>
                </FormControl>
                <FormControl component="fieldset" variant="standard">
                    <FormLabel component="legend">Transportation Preferences:</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={transportation.flights} onChange={handleTransportationChange} name="flights" />}
                            label="Flights ✈️"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={transportation.trains} onChange={handleTransportationChange} name="trains" />}
                            label="Trains 🚆"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={transportation.roadTrip} onChange={handleTransportationChange} name="roadTrip" />}
                            label="Road Trip 🚗"
                        />
                    </FormGroup>
                </FormControl>
            </div>
        </motion.section>
    );
};

export default StayAndTravel;