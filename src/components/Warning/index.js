import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

import '../styles.css';

const Warning = () => {

    const messageArr = [
        "Is this really for you?",
        "Did you manage to spot the games being played?",
        "And... how many did you spot?"
    ];
    const [warningIndex, setWarningIndex] = useState(0);

    return (
        <Container fluid className="warning">
            <Row className="banner-warning">
                <Link 
                    to={
                        warningIndex === 2 
                            ? ROUTES.EXPLANATION 
                            : ROUTES.WARNING
                    } 
                    onClick={() => setWarningIndex(warningIndex + 1)} 
                    className="link-warning"
                >
                    <p className="text-warning">{messageArr[warningIndex]}</p>
                </Link>
            </Row>
        </Container>
    );
};

export default Warning;