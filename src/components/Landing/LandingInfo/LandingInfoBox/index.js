import React from 'react';

const LandingInfoBox = (props) => {
    return (
        <div className="box-info-text">
            <img className="icon-landing" src={props.icon} />
            <p className="text-info subheading">
                {props.subheading}
            </p>
            <p className="text-info">
                {props.text}
            </p>
        </div>
    );
};

export default LandingInfoBox;