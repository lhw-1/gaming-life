import React from 'react';

import Modal from '../Modal';
import TermsText from './TermsText';

import '../styles.css';

const Terms = (props) => {

    const heading = "Terms of Service";

    return (
        <Modal {...props} heading={heading} text={<TermsText />}/>
    );
};

export default Terms;