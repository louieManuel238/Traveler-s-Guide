import React from 'react';

const ArrowRight = () => {
    return (
        <svg width="150" height="100" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="30,20 110,50 30,80 50,50" fill="#50E3C2" />
        </svg>
    );
};
const ArrowLeft = () => {
    return (
        <svg width="150" height="100" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="120,20 40,50 120,80 100,50" fill="#50E3C2" />
        </svg>
    );
};

const DoubleArrowDown = () => 
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 26 26" height="26px" id="Layer_1" version="1.1" viewBox="0 0 26 26" width="26px" xmlSpace="preserve"><g>
        <polygon fill="#231F20" points="0.046,2.582 2.13,0.498 12.967,11.334 23.803,0.498 25.887,2.582 12.967,15.502  "/>
        <polygon fill="#231F20" points="0.046,13.582 2.13,11.498 12.967,22.334 23.803,11.498 25.887,13.582 12.967,26.502  "/></g></svg>
    
const DoubleArrowUp = () => <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 26 26" xmlSpace="preserve">
<g>
  <polygon fill="#231F20" points="13,0 0,13 2.1,15.1 13,4.2 23.9,15.1 26,13"/>
  <polygon fill="#231F20" points="13,9 0,22 2.1,24.1 13,13.2 23.9,24.1 26,22"/>
</g>
</svg>

 
export {ArrowRight, ArrowLeft, DoubleArrowDown, DoubleArrowUp};