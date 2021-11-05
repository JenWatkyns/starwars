import React from 'react';
import './css/character-table-row.css';

/**
 * This component is used to display character information within a row
 *
 * @param {string} passes through a name
 * @param {string} passes through the gender
 * @param {number} passes through height
 */

const CharacterTableRow = ({ name, gender, height }) => (
  <div className="character-table-row">
    <div className="table-item">
      {name}
    </div>
    <div className="table-item">
      {gender}
    </div>
    <div className="table-item">
      {height}
    </div>
  </div>
);

export default CharacterTableRow;
