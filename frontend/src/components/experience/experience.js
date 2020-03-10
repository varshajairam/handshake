import React from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

export const Experience = (props) => {
    let content;
    
    if(!props.expMode && props.experience && props.experience.length){
        content = (
            <div>
                <Card.Text>
                    Company: {(props.experience && props.experience.length) ? props.experience[0].company_name : ''}
                </Card.Text>
                <Card.Text>
                    Title: {(props.experience && props.experience.length) ? props.experience[0].title : ''}
                </Card.Text>
                <Card.Text>
                    Duration: {(props.experience && props.experience.length) ? props.experience[0].start_date + ' to' : ''} {(props.experience && props.experience.length) ? props.experience[0].end_date: ''}
                </Card.Text>
                <Card.Text>
                    Work Description: {(props.experience && props.experience.length) ? props.experience[0].work_description : ''}
                </Card.Text> 
                <Card.Text>
                    Location: {(props.experience && props.experience.length) ? props.experience[0].city : ''}, {(props.experience && props.experience.length) ? props.experience[0].country : ''}
                </Card.Text>               
            </div>
        );
    } else {
        content = (
            <Form onSubmit = {props.submitHandler}>
            <Form.Row>
            <Form.Group as={Col} controlId="formGridCompanyName">
                <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter company name" />
                </Form.Group>


                <Form.Group as={Col} controlId="formGridTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group as={Col} controlId="formGridStartDate">
                <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEndDate">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control placeholder = "Enter City"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="Enter State" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter Country" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridDesc">
                <Form.Label>Work Description</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder= "Describe roles and responsibilities" />
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
            <Card.Title>Work & Volunteer Experience</Card.Title>
               {content}
            </Card.Body>
            <Card.Footer>
            <Button variant="link" onClick = { () => props.changeExpMode(true) }>Add Work Experience</Button>
            </Card.Footer>
        </Card>
    ); 

}