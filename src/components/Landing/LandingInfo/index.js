import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import icon_1 from '../../../assets/landing_icon_1.png';
import icon_2 from '../../../assets/landing_icon_2.png';
import icon_3 from '../../../assets/landing_icon_3.png';
import LandingInfoBox from './LandingInfoBox';

const LandingInfo = () => {

    const subheading_1 = "Enhance your learning";
    const text_1 = "Our placard system will help you with your memorization process - quick and easy!";

    const subheading_2 = "Customize your timetable";
    const text_2 = "With our award-winning algorithm, we'll create a personalized timetable for you, all based on your preferences and conveniences.";

    const subheading_3 = "Set up an immersive environment";
    const text_3 = "We know that distractions can often be difficult to handle. To help you focus, we will set up a virtual study environment, just for you!";

    return (
        <div className="banner-info">
            <Row className="box-info justify-content-md-center">
                <Row className="box-info-heading">
                    <p className="heading-info">
                        Bring your study plan to the next level
                    </p>
                </Row>
                <Col>
                    <LandingInfoBox icon={icon_1} subheading={subheading_1} text={text_1}/>
                </Col>
                <Col>
                    <LandingInfoBox icon={icon_2} subheading={subheading_2} text={text_2}/>  
                </Col>
                <Col>
                    <LandingInfoBox icon={icon_3} subheading={subheading_3} text={text_3}/>
                </Col>
                <Row className="justify-content-md-center">
                    <Button className="btn-landing-info" href="/overview">Learn More</Button>
                </Row>
            </Row>
        </div>
    );
};

export default LandingInfo;