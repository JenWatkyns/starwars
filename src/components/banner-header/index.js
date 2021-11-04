import React from 'react';
import './css/banner-header.css';
import logo from '../../images/star-wars.svg';

/**
 * This component is a banner that is used as a header displaying the Star Wars logo
 * 
 */

const BannerHeader = () => {
    return (
        <div className='logo-box'>
            <img className='logo' src={logo} alt='Star Wars Logo' />
        </div>
    ); 
};

export default BannerHeader;
