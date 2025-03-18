import './Calendar.scss';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const Calendar = ({setStartDate, setEndDate}) => {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);
      const [dates] = state;
      setStartDate(dates.startDate);
      setEndDate(dates.endDate);

    const [isMobileSize, setIsMobileSize] = useState(window.innerWidth < 700);
    const handleResize = () => setIsMobileSize(window.innerWidth < 700);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="form-container__form">
            <Typography variant="h2" gutterBottom className='search-section__header'>📅 When do you want to go?</Typography>
            <div className='search-section__body'>
            <DateRange
            onChange={item => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={isMobileSize ? 1 : 2}
            ranges={state}
            direction="horizontal"
            preventSnapRefocus={true}
            calendarFocus="backwards"
            rangeColors={["#50E3C2"]}
            />;
            </div>
        </section>
    );
};

export default Calendar;