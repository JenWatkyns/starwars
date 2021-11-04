import React from 'react';
import './css/error-banner.css';

/**
 * This component is a banner that is used to indicate an error
 * 
 * 
 */
 const ErrorBanner = () => {
    return (
        <div className='error-box'>
            <div className='error-msg'>
                <h4>Oh no! Occurred an error, it has.</h4>
                <p>Try again later, you must.</p>
            </div>
        </div>
    ); 
};

export default ErrorBanner;
