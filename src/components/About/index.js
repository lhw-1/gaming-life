import React from 'react';

import Banner from '../Banner';
import Footer from '../Footer';

import '../styles.css';

const About = () => {
    const text1 = "Welcome to Memit! ";
    const text2 = "As a company, we're fully dedicated to helping you achieve your potential. ";
    const text3 = "Founded in 2017 by Samuel Lee, Memit has come a long way from its beginnings in a home office. "
        + "When Samuel first started out, his passion for helping others study better drove him to research various learning methods and time management techniques. "
        + "Since then, he has managed to turn his research and hard work into a single handy application - Memit! "
        + "We now help students from all over the world, and we are positively thrilled to be a part of our students' learning experience. ";
    const text4 = "We hope that you enjoy our service as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us! ";
    return (
        <div>
            <Banner heading={"About us"} text1={text1} text2={text2} text3={text3} text4={text4} type={0} />
            <Footer />
        </div>
    );
};

export default About;