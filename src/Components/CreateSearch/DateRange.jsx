import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DateRange = ({startDate, endDate, setStartDate, setEndDate}) => {


  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return <DatePicker 
    showIcon
    selected={startDate} 
    onChange={onChange}
    startDate={startDate}
    endDate={endDate}
    selectsRange
    
 />;
};

export default DateRange;