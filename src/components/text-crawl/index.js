/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import './css/text-crawl.css';

/**
 * This component is a text crawl used to display information
 *
 * @param {array} An array of Star Wars films
 * @param {id} the id of an object in the array
 */
const TextCrawl = ({ films, id }) => {
  const crawl = films.filter((film) => film.id === id)[0]?.openingCrawl;
  return (
    <div className="text-crawl">
      <marquee className="crawl" direction="up" scrollamount={1} loop="infinite">{crawl}</marquee>
    </div>
  );
};

export default TextCrawl;
