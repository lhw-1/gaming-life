import React from 'react';

import Modal from '../Modal';
import ContactForm from './ContactForm';

import '../styles.css';

const Contact = (props) => {

    const heading = "We'd love to hear from you!";

    return (
        <Modal {...props} heading={heading} text={<ContactForm />}/>
    );
};

export default Contact;