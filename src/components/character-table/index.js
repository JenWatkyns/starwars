import React from 'react';
import './css/character-table.css';
import CharacterTableRow from '../character-table-row';
import LoadingSpinner from '../loading-spinner';
import Button from '../button';
import LastRow from '../last-row';
import sortFunc from '../../helpers/sort';
import filterFunc from '../../helpers/filter';
import sumFunc from '../../helpers/sum';
import convertFunc from '../../helpers/convert';

/**
 * This component is a table used to display character information
 *
 * @param {array} contains the film's information
 * @param {string} status of the API
 */

const CharacterTable = ({ filmInfo, status }) => {
  const [charArr, setCharArr] = React.useState(filmInfo);
  const [height, setHeight] = React.useState(sumFunc(filmInfo));
  const [nameOrder, setOrderN] = React.useState(true);
  const [genderOrder, setOrderG] = React.useState(true);
  const [heightOrder, setOrderH] = React.useState(true);

  React.useEffect(() => {
    setCharArr(filmInfo);
    setHeight(sumFunc(filmInfo));
  }, [filmInfo]);

  React.useEffect(() => {
    setHeight(sumFunc(charArr));
  }, [charArr]);

  return (
    <div className="character-table">
      <div className="filter-btns-box">
        <div className="text">
          <p>Filter By:</p>
        </div>
        <Button
          text="Female"
          onClick={() => {
            setCharArr([...filterFunc(filmInfo, 'female')]);
          }}
        />
        <Button
          text="Male"
          onClick={() => {
            setCharArr([...filterFunc(filmInfo, 'male')]);
          }}
        />
        <Button
          text="Other"
          onClick={() => {
            setCharArr([...filterFunc(filmInfo, 'other')]);
          }}
        />
        <Button
          text="Remove Filter"
          onClick={() => {
            setCharArr([...filmInfo]);
          }}
        />
      </div>
      <div className="character-table-headers">
        <Button
          text="Name"
          className="table-header"
          onClick={() => {
            setCharArr([...sortFunc(charArr, 'name', nameOrder)]);
            setOrderN(!nameOrder);
          }}
        />
        <Button
          text="Gender"
          className="table-header"
          onClick={() => {
            setCharArr([...sortFunc(charArr, 'gender', genderOrder)]);
            setOrderG(!genderOrder);
          }}
        />
        <Button
          text="Height"
          className="table-header"
          onClick={() => {
            setCharArr([...sortFunc(charArr, 'height', heightOrder)]);
            setOrderH(!heightOrder);
          }}
        />
      </div>
      <div className="character-info">
        {status === 'success' ? (
          <div>
            {charArr.map((character) => (
              <CharacterTableRow name={character.name} gender={character.gender} height={character.height} key={character.name} />
            ))}
            <LastRow charCount={charArr.length} height={height} feet={Math.floor(convertFunc(height))} inches={Math.round((convertFunc(height) % 1) * 12)} />
          </div>
        ) : (
          <LoadingSpinner />
        )}
        ;
      </div>
    </div>
  );
};

export default CharacterTable;
