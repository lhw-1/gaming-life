import React from 'react';
import { Container, Button, Row } from 'react-bootstrap';

import ExplanationAccordion from './ExplanationAccordion';

import '../styles.css';

const Explanation = () => {
    return (
        <Container className="warning">
            <Row className="banner-explanation">
                <p className="text-explanation">What you have seen is an example of a website designed to sell a certain product.</p>
                <p className="text-explanation">As a user of this website, you might have noticed certain connotations about the language used within the website. If you were careful enough, you might already have noticed something odd or unusual within the website.</p>
                <p className="text-explanation">But perhaps we can also frame the marketing of the product, in the medium of a website, as a "game". </p>
                <p className="text-explanation">When given this perspective, I’m sure you can think of some ways in which the website could be construed as a game.</p>
                <p className="text-explanation">If you wish to do so, you may click the button below to go back to the website and explore it further, or to "replay the game".</p>
                <Button variant="success" className="btn-replay" href="/" target="_blank">Replay</Button>
                <p className="text-explanation">Here are my thoughts on the project. Reading through my views may "spoil" the game for you, however.</p>
                <ExplanationAccordion />
            </Row>
        </Container>
    );
};

export default Explanation;