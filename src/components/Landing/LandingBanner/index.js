import React from 'react';
import { Button } from 'react-bootstrap';

import image from '../../../assets/landing.png';

const LandingBanner = () => {
    return (
        <div className="banner-landing">
            <div>
                <img className="image-landing" src={image} />
            </div>
            <div className="caption-landing">
                <h3>Study Better.</h3>
                <h3>Study Smart.</h3>
                <p>Improve your studying skills with Memit today.</p>
                <Button className="btn-landing" href="/subscribe">Subscribe Now</Button>
            </div>
        </div>
    );
};

export default LandingBanner;