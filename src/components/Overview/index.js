import React from 'react';

import Banner from '../Banner';
import Footer from '../Footer';

import '../styles.css';

const Overview = () => {
    const text1 = "Memit is a desktop / mobile application that aims to fulfill all your studying needs!"
    const text2 = "After subscribing to one of our plans, we will send you the download link to our application via email. "
        + "You will be asked to enter your preferences and details during the setup process. "
        + "Don't worry - this information will be used for setting up a timetable perfectly tailored to your personal needs! ";
    const text3 = "Once your timetable has been setup, you can upload your study materials to our application. "
        + "During the designated study times, we will set up an environment on your device where you will be able to focus on your studies using your uploaded study materials. "
        + "Memit may restrict some features on your device to create a more conducive environment for studying. "
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