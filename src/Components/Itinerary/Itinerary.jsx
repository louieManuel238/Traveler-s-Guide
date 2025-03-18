
import {Typography, Box, List, ListItemButton, ListItemText, Collapse} from '@mui/material'
import React, { useState, Fragment } from 'react';
import './Itinerary.scss'
const Itinerary = ({data}) => {
  
    const days = data.Activities;
    const [filteredDays, setFilteredDays] = useState(days);

    const filterByDate = (date) => {
        const filtered = days.filter((activity) => activity.day === date);
        setFilteredDays(filtered);
    };
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className='itinerary-panel'>
            <Box className="itinerary-panel__body">
                <ul className='itinerary-list'>
                    {filteredDays.map((day, index) => (
                        <li key={index} className='itinerary-list__item'>
                            <ListItemButton  onClick={() => handleClick(index)}>
                                <div className='travel-day'>
                                    <h4 className='itinerary-list__date'>{new Date(day.day).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</h4>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 4L16 12L8 20" stroke="#008080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className='itinerary-list__description'>{day.noteForTheDay}</p>
                                </div>
                            </ListItemButton>
                            <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                                <ul className='travel-day__collapse'>
                                    {day.activity.map((act, actIndex) => (
                                        <li key={actIndex} className='travel-day__places'>
                                            <ListItemText primary={act.place} />
                                            <ListItemText primary={act.description} />
                                        </li>
                                    ))}
                                </ul>
                            </Collapse>
                        </li>
                    ))}
                </ul>
            </Box>
        </section>
    );
};

export default Itinerary;