import React from 'react';
import BannerHeader from '../../components/banner-header';
import ErrorBanner from '../error-banner';

/**
 * This component shows the error banner, should content not be able to load
 * 
 *
 */

 const ErrorScreen = () => {
    return (
        <div>
            <BannerHeader />
            <ErrorBanner className="banner" />
        </div>
    ); 
};

export default ErrorScreen;