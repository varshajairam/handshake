import React from 'react';
import { Card, Form } from 'react-bootstrap';

export const Experience = (props) => {  
    return (
        <Card bg="light">
            <Card.Body>
            <Card.Title>Work & Volunteer Experience</Card.Title>
            <Card.Text>
                {(props.experience && props.experience.length) ? props.experience[0].company_name : ''}
            </Card.Text>
            <Card.Text>
                {(props.experience && props.experience.length) ? props.experience[0].title : ''}
            </Card.Text>
            <Card.Text>
                {(props.experience && props.experience.length) ? props.experience[0].start_date + '-' : ''} {(props.experience && props.experience.length) ? props.experience[0].end_date + '|' : ''}{(props.experience && props.experience.length) ? props.experience[0].city : ''}, {(props.experience && props.experience.length) ? props.experience[0].country : ''}
            </Card.Text>       
            </Card.Body>
            <Card.Footer>
                <Card.Link href="#">Add Work Experience</Card.Link>
            </Card.Footer>
        </Card>
    );  
}