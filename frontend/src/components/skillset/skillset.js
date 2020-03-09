import React from 'react';
import { Card, Form, FormControl, Button, Alert } from 'react-bootstrap';

export const Skillset = (props) => {  
    //const [show, setShow] = useState(true);
    let skill = props.skills.map(skill => {
        return(           
            <Alert variant="info" onClose = { () => props.removeHandler(skill) } dismissible>
                <p>{skill}</p>
            </Alert>
        )
    })
    return (
        <Card bg="light">
            <Card.Body>
            <Card.Title>Skills</Card.Title>
            <Form onSubmit = {props.submitHandler}>
            <Form.Group controlId="formBasicEmail">
            <FormControl
                placeholder="Add skills"
                aria-label="Add skills"
                aria-describedby="basic-addon2" name="skill"/>
            </Form.Group>
            <Button variant="outline-success" type="submit">Add</Button>
            </Form>
            {skill}   
            </Card.Body>
        </Card>
    );  
  
}