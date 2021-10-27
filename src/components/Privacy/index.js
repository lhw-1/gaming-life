import React from 'react';

import Modal from '../Modal';
import PrivacyText from './PrivacyText';

import '../styles.css';

const Privacy = (props) => {

    const heading = "Privacy Policy";

    return (
        <Modal {...props} heading={heading} text={<PrivacyText />}/>
    );
};

export default Privacy;