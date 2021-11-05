import React from 'react';
import './css/loading-spinner.css';
import spinner from '../../images/star-wars-spinner.svg';

/**
 * This component is a loading spinner that is visible while files are being loaded.
 */
const LoadingSpinner = () => (
  <div className="spinner-box">
    <img src={spinner} alt="Loading Spinner" />
  </div>
);

export default LoadingSpinner;
