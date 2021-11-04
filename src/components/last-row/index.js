import React from 'react';
import '../character-table-row/css/character-table-row.css';

/**
 * This component is used to display character information within a row
 * 
 * @param {number} length of the array
 * @param {number} sum of total height
 * @param {number} sum of total height in feet
 * @param {number} remaining inches of total height sum
 */

const LastRow = ({ charCount, height, feet, inches }) => {
    return (
        <div className='character-table-row'>
            <div className='table-item height-row'>
              Character Count: {charCount} | Total Height: {height} cm ({feet}ft/{inches}in)
            </div>                
        </div>
    );
};

export default LastRow;
