import React from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CareerObjective = (props) => {  
    let content;

    if(props.save){
        content = (
            <div>
                <Form onSubmit={props.submitHandler}>
                <Form.Group>
                    <Form.Control as="textarea" rows="3" defaultValue={ props.career_obj } onChange={props.updateHandler} />
                </Form.Group>
                <Button variant="success" type="submit">
                    Save
                </Button>
                </Form>
            </div>
        )
    } else {
        content = (
            <Row>
                <Col>
                <Form.Control plaintext defaultValue={ props.career_obj } rows="3" readOnly />
                </Col>
            </Row>
        )
    }

    return (
        <Card bg="light">
            <Card.Body>
            <Row><Button variant="link" style={{paddingLeft: '680px'}} onClick={props.enableSave}><FontAwesomeIcon icon={faEdit} /></Button></Row>
            <Card.Title>My Journey</Card.Title>
            <Card.Text>
                What are you passionate about? What are you looking for on Handshake? What is your career objective?
            </Card.Text>
            {content}        
            </Card.Body>
        </Card>
    );  
}