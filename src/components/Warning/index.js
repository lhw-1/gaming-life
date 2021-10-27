import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

import '../styles.css';

const Warning = () => {
    return (
        <Container fluid className="warning">
            <Row className="banner-warning">
                <Link to={ROUTES.EXPLANATION} className="link-warning">
                    <p className="text-warning">Is this really for you?</p>
                </Link>
            </Row>
        </Container>
    );
};

export default Warning;