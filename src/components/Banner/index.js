import React from "react";

import about from '../../assets/about.png';
import overview from '../../assets/overview.png';
import subscribe from '../../assets/subscribe.png';

const Banner = (props) => {

    const bannerClassName = 
        props.type === 2
            ? "banner-text-page-subscribe"
            : "banner-text-page";
    const captionHeaderClassName = 
        props.type === 2 
            ? "caption-header-page-subscribe" 
            : "caption-header-page";
    const captionTextClassName = 
        props.type === 2 
            ? "caption-text-page-subscribe" 
            : "caption-text-page";
    const image = 
        props.type === 0 
            ? about 
            : props.type === 1 
                ? overview 
                : subscribe 

    return (
        <div className="banner-landing">
            <div>
                <img 
                    className="image-landing" 
                    src={image} />
            </div>
            <div className={bannerClassName}>
                <p className={captionHeaderClassName}>{props.heading}</p>
                <p className={captionTextClassName}>{props.text1}</p>
                <p className={captionTextClassName}>{props.text2}</p>
                <p className={captionTextClassName}>{props.text3}</p>
                <p className={captionTextClassName}>{props.text4}</p>
                <p className={captionTextClassName}>{props.text5}</p>
                <p className={captionTextClassName}>{props.text6}</p>
            </div>
        </div>
    );
};

export default Banner;