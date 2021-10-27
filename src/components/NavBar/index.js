import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import '../styles.css';

const NavBar = () => {
    return (
        <Navbar fixed="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Memit</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/about">About us</Nav.Link>
                    <Nav.Link href="/overview">Overview</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link className="nav-subscribe" href="/subscribe">Subscribe Now</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;