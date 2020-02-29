import React from 'react';
import { Card, Image, Button, Row, Col, Form } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user from '../../assets/user.png';

export const BasicDetails = (props) => {
    let content;
    
    if(!props.mode){
        content = (
            <div>
                <Row className="justify-content-center">
                    <Card.Title>{props.details ? (props.details.first_name + ' ' + props.details.last_name) : ''}</Card.Title>
                </Row>
                <Row className="justify-content-center">
                    <Card.Text>
                        {props.education && props.education.length ? props.education[0].college_name : ''}
                    </Card.Text>
                </Row>
                <Row className="justify-content-center">
                    <Card.Text>
                        {(props.education && props.education.length) ? (props.education[0].degree + ', ' + props.education[0].major) : ''}
                    </Card.Text>
                </Row>
                <Row className="justify-content-center">
                    <Card.Text>
                    {(props.education && props.education.length) ? 'GPA: ' + props.education[0].cgpa : ''}
                    </Card.Text>
                </Row>
            </div>
        );
    } else {
        content = (
            <Form onSubmit={props.submitHandler}>
                <Row>
                    <Col>
                        <Form.Label>
                            First Name
                    </Form.Label>
                        <Form.Control defaultValue={props.details ? props.details.first_name : ''} readOnly />
                    </Col>
                    <Col>
                        <Form.Label>
                            Last Name
                        </Form.Label>
                        <Form.Control placeholder="Last name" onChange={props.updateHandler}/>
                    </Col>                    
                </Row>
                <Row>
                    <Col>
                    <Form.Control plaintext readOnly defaultValue={(props.education && props.education.length) ? props.education[0].college_name : ''} />
                    <Form.Control plaintext readOnly defaultValue={(props.education && props.education.length) ? (props.education[0].degree + ', ' + props.education[0].major) : ''} />
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Button type="submit" variant="success">Save</Button>
                        <Button type="button" className="ml-2" variant="danger" onClick={props.modeHandler}>Cancel</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
        
    return (
        <Card bg="light">
            <Card.Body>
            <Row><Button variant="link" style={{paddingLeft: '300px'}} onClick={props.modeHandler}><FontAwesomeIcon icon={faEdit} /></Button></Row>
            <Row className="justify-content-center">
                <Image src={user} width="100"
                    height="100" roundedCircle />
            </Row>
            {content}
            </Card.Body>
        </Card>
    );

}