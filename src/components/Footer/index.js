import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import Contact from '../Contact';
import Terms from '../Terms';
import Privacy from '../Privacy';

const Footer = () => {
    
    const [contactModalShow, setContactModalShow] = useState(false);
    const [termsModalShow, setTermsModalShow] = useState(false);
    const [privacyModalShow, setPrivacyModalShow] = useState(false);
    
    return (
        <div className="box-footer">
            <Navbar bg="light" expand="lg">
                <Container className="box-footer-navbar">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => setContactModalShow(true)}>Contact us</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link onClick={() => setTermsModalShow(true)}>Terms of Service</Nav.Link>
                        <Nav.Link onClick={() => setPrivacyModalShow(true)}>Privacy Policy</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr />
            <p className="text-footer">@2113 Memit, UTC. All Rights Reserved.</p>
            <Contact show={contactModalShow} onHide={() => setContactModalShow(false)}/>
            <Terms show={termsModalShow} onHide={() => setTermsModalShow(false)}/>
            <Privacy show={privacyModalShow} onHide={() => setPrivacyModalShow(false)}/>
        </div>
    );
};

export default Footer;