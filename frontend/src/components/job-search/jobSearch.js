import React from 'react';
import { Card, Form, Button, Row, Col, Container } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const JobSearch = (props) => {  
    return (       

        <Form onSubmit={props.submitHandler} className="w-100">
            <Form.Control type="text" placeholder="Enter job title" className="mr-sm-2" />
            <Form.Control type="text" placeholder="Enter company name" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>            
        </Form>
    );  
}