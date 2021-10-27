import React from 'react';
import { Button, Row } from 'react-bootstrap';

import '../styles.css';

const Explanation = () => {
    const text = "..."
    return (
        <div className="warning">
            <Row className="banner-explanation">
                <p className="text-explanation">{text}</p>
                <Button className="btn-original" href="/" target="_blank">Original Site</Button>
            </Row>
        </div>
    );
};

export default Explanation;