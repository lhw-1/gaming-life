import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ContactModal = (props) => {
    return (
        <Modal 
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <strong>{props.heading}</strong>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.text}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ContactModal;