import React from 'react';

import Banner from '../Banner';
import Footer from '../Footer';

import '../styles.css';

const Overview = () => {
    const text1 = "Our application is a downloadable application that can be installed on both Desktop and Mobile. "
        + "The download link to our app will be sent to you after subscription. ";
    const text2 = "Once you download our application, you will be asked to enter your preferences and details. "
        + "Don't worry - we will only use this information for setting up a timetable perfectly tailored to your personal needs! "
        + "Once your timetable has been setup, you can upload your study materials to our application. ";
    const text3 = "During the designated study times, we will set up an environment on your device where you will be able to focus on your studies using your uploaded study materials. "
        + "You will also have access to a number of our smart features based on your subscription plan, including our Placard feature. ";
    const text4 = "It's time to give yourself the support that you deserve! What are you waiting for? ";
    return (
        <div>
            <Banner heading={"Overview"} text1={text1} text2={text2} text3={text3} text4={text4} type={1} />
            <Footer />
        </div>
    );
};

export default Overview;