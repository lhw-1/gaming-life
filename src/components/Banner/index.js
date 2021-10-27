import React from "react";

import about from '../../assets/about.png';
import overview from '../../assets/overview.png';
import subscribe from '../../assets/subscribe.png';

const Banner = (props) => {

    const captionHeaderClassName = 
        props.type === 2 
            ? "caption-header-page subscribe" 
            : "caption-header-page";
    const captionTextClassName = 
        props.type === 2 
            ? "caption-text-page subscribe" 
            : "caption-text-page";

    return (
        <div className="banner-landing">
            <div>
                <img 
                    className="image-landing" 
                    src={ 
                        props.type === 0 
                            ? about 
                            : props.type === 1 
                                ? overview 
                                : subscribe 
                        }
                />
            </div>
            <div className="banner-text-page">
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