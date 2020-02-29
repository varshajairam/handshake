import React from 'react';
import { Card, InputGroup, FormControl, Button } from 'react-bootstrap';

export const Skillset = (props) => {  
    return (
        <Card bg="light">
            <Card.Body>
            <Card.Title>Skills</Card.Title>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Add skills"
                aria-label="Add skills"
                aria-describedby="basic-addon2"/>
                <InputGroup.Append>
                    <Button variant="outline-success" type="button">Add</Button>
                </InputGroup.Append>
            </InputGroup>
            {props.skills}               
            </Card.Body>
        </Card>
    );  
  
}