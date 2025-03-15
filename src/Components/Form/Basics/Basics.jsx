import AutoCompleteAddressSearch from "./AutoCompleteAddressSearch";
import DateRange from "./DateRange";

const Basics = ({setEndDate,setStartDate,setPlace, startDate, endDate}) => {
    return (
        <div>
            <AutoCompleteAddressSearch setPlace={setPlace}/>
            <DateRange 
                startDate={startDate} setStartDate={setStartDate}
                endDate={endDate} setEndDate={setEndDate}
            />
        </div>
    );
};

export default Basics;