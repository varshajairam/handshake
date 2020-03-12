import React from 'react';
import { Card, Form, Button, Row, Col, Container, InputGroup } from 'react-bootstrap';

export const ApplicationSearch = (props) => {
    return (
        <Form onSubmit={props.submitHandler}>
            <Form.Row className='w-50'>
                <Form.Group as={Col} md="3" controlId="fullTimeFilter">
                    <button type="button" onClick = {props.submitHandler} className="btn btn-outline-primary">Pending</button>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="partTimeFilter">
                    <button type="button" onClick = {props.submitHandler} className="btn btn-outline-primary">Reviewed</button>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="internFilter">
                    <button type="button" onClick = {props.submitHandler} className="btn btn-outline-primary">Declined</button>
                </Form.Group>
            </Form.Row>
        </Form>
    );
}