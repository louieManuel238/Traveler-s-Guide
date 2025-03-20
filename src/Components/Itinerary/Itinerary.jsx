
import {Typography, Box, List, ListItemButton, ListItemText, Collapse} from '@mui/material'
import React, { useState, Fragment } from 'react';
import './Itinerary.scss'
const Itinerary = ({data, setFilteredActivityByDay}) => {

    const [openIndex, setOpenIndex] = useState(null);


    const handleClick = (index,day) => {
        setOpenIndex(openIndex === index ? null : index);
        setFilteredActivityByDay(openIndex === index ? [] : day.activity)
    };

    return (
        <section className='itinerary-panel'>
            <Box className="itinerary-panel__body">
                <ul className='itinerary-list'>
                    {data.Activities.map((day, index) => (
                        <li key={index} className='itinerary-list__item'>
                            <ListItemButton  onClick={() => handleClick(index,day)}>
                                <div className='travel-day'>
                                    <h4 className='itinerary-list__date'>{new Date(day.day).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</h4>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 4L16 12L8 20" stroke="#008080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <p className='itinerary-list__description'>{day.noteForTheDay}</p>
                                </div>
                            </ListItemButton>
                            <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                                <ul className='travel-day__collapse'>
                                    {day.activity.map((act, actIndex) => (
                                        <li key={actIndex} className='travel-day__places'>
                                            <p className='travel-day__name'>{act.place}</p>
                                            <p className='travel-day__description'>{act.description}</p>
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