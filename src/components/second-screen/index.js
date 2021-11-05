import React from 'react';
import BannerHeader from '../banner-header';
import DropDown from '../drop-down/connected';
import TextCrawl from '../text-crawl/connected';
import CharacterTable from '../character-table/connected';
import './css/second-screen.css';

/**
 * This component is the initial screen before any movies are selected
 *
 * @param {func} a function that passes the id up
 * @param {string} the id of the array
 */

const SecondScreen = ({ setId, id }) => (
  <div className="component-box">
    <BannerHeader />
    <div className="box-within">
      <div className="drop-down-box">
        <DropDown setId={setId} id={id} />
      </div>
      <div className="text-crawl-box">
        <TextCrawl id={id} />
      </div>
      <div className="character-table-box">
        <CharacterTable />
      </div>
    </div>
  </div>
);

export default SecondScreen;
