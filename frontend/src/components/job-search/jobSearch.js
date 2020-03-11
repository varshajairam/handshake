import React from 'react';
import { Card, Form, Button, Row, Col, Container, InputGroup } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const JobSearch = (props) => {
    return (
        <Form onSubmit={props.submitHandler}>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="title">
                    <Form.Label>Search by job title or company name</Form.Label>
                    <Form.Control type="text" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid input.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="city">
                    <Form.Label>Search by location</Form.Label>
                    <Form.Control type="text" />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                    <Button type="submit" style={{ marginTop: '32px' }}>Search</Button>
                </Form.Group>
            </Form.Row>
            <Form.Row className='w-50'>
                <Form.Group as={Col} md="3" controlId="fullTimeFilter">
                    <button type="button" className="btn btn-outline-primary">Full-Time</button>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="partTimeFilter">
                    <button type="button" className="btn btn-outline-primary">Part-Time</button>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="internFilter">
                    <button type="button" onClick = {props.recordFilters} className="btn btn-outline-primary">Internship</button>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="oncampusFilter">
                    <button type="button" className="btn btn-outline-primary">On-Campus</button>
                </Form.Group>
            </Form.Row>
        </Form>
    );
}