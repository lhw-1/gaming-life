import React from "react";
import { Button, Form } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="ControlInput1">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="name" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ControlInput2">
                    <Form.Label>Your email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ControlTextarea1">
                    <Form.Label>Any feedbacks for us?</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <Button>Submit</Button>
        </>
    );
};

export default ContactForm;