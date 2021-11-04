import React from 'react';
import BannerHeader from '../../components/banner-header';
import DropDown from '../drop-down/connected';
import './css/initial-screen.css';

/**
 * This component is the initial screen before any movies are selected
 * 
 * @param {func} a function that passes the id up
 */

 const InitialScreen = ({ setId }) => {
    return (
        <div>
            <BannerHeader />
            <div className="initial-drop-down">
                <DropDown setId={setId} />
            </div>
        </div>
    ); 
};

export default InitialScreen;
