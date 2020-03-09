import React from 'react';
import { Card, Form, Col, Button } from 'react-bootstrap';

export const Education = (props) => {
    let content;
    
    if(!props.edMode){
        content = (
            <div>
                <Card.Text>
                    {(props.education && props.education.length) ? props.education[0].college_name : ''}
                </Card.Text>
                <Card.Text>
                    {(props.education && props.education.length) ? props.education[0].degree : ''}
                </Card.Text>
                <Card.Text>
                    {(props.education && props.education.length) ? props.education[0].year_of_passing: ''}
                </Card.Text>
                <Card.Text>
                    {(props.education && props.education.length) ? props.education[0].major: ''}
                </Card.Text>
                <Card.Text>
                    {(props.education && props.education.length) ? props.education[0].cgpa: ''}
                </Card.Text>    
            </div>
        );
    } else {
        content = (
            <Form onSubmit = {props.submitHandler}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCollege">
                    <Form.Label>College Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter college" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDegree">
                    <Form.Label>Degree</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridYear">
                    <Form.Label>Year of Passing</Form.Label>
                    <Form.Control placeholder="Enter year of passing" />
                </Form.Group>

                <Form.Group controlId="formGridMajor">
                    <Form.Label>Major</Form.Label>
                    <Form.Control placeholder="Enter major" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="Enter state" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridGpa">
                    <Form.Label>GPA</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }

    return (
        <Card bg="light">
            <Card.Body>
            <Card.Title>Education</Card.Title>
            {content}            
            </Card.Body>
            <Card.Footer>
            <Button variant="link" onClick = { () => props.changeEdMode(true) }>Add School</Button>
            </Card.Footer>
        </Card>
    );  
}