import React from 'react';
import { Card, Form } from 'react-bootstrap';

export const Education = (props) => {  
    return (
        <Card bg="light">
            <Card.Body>
            <Card.Title>Education</Card.Title>
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
            </Card.Body>
            <Card.Footer>
                <Card.Link href="#">Add School</Card.Link>
            </Card.Footer>
        </Card>
    );  
}