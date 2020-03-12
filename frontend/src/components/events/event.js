import React from 'react';
import { Card, Button, Modal, Alert, Badge } from 'react-bootstrap';

export const Events = (props) => {    
    let events = props.events;
    if(props.searchResults.length){
        events = props.searchResults;
    }
    const list = Object.keys(events).map((key,i) =>
        <Card bg="light" className = "mt-2" key={i}>
            <Card.Body>
            <Button type="button" variant="link" className="p-0" onClick={() => props.controlModal(true, events[key])}>{events[key].name}</Button>
            <Card.Text id="date">
                {events[key].date}
            </Card.Text>
            <Card.Text id="location">
                {events[key].location}
            </Card.Text>
            <Card.Text id="eligibility">
                {events[key].eligibility} majors
            </Card.Text>         
            </Card.Body>
            {props.eventIdApplied === events[key].id && <Badge variant="success">Registered</Badge>}
        </Card>
    );
    return (
        <div>
            {list}
            <Modal show={props.openModal} onHide={() => props.controlModal(false)}>
                <Modal.Header closeButton>
                <Modal.Title>{props.selectedEvent && props.selectedEvent.name}</Modal.Title>
                </Modal.Header>                
                <Modal.Body>
                    <div className="pb-2">
                        <li style={{listStyle: 'none'}}>
                            <p className="d-inline font-weight-bold mr-2">{props.selectedEvent && props.selectedEvent.date}</p>
                            <ul className="d-inline font-weight-bold mr-2">{props.selectedEvent && props.selectedEvent.location}</ul>
                            <ul className="d-inline font-weight-bold mr-2">{props.selectedEvent && props.selectedEvent.eligibility} majors</ul>
                        </li>
                    </div>                
                    <p className="font-italic">Description</p>
                    {props.selectedEvent && props.selectedEvent.description}   
                </Modal.Body>
                <Modal.Footer>
                {props.success && <Alert variant='success'>
                        Successfully applied!
                    </Alert>}
                {props.failure && <Alert variant='danger'>
                        You are not eligible for this event.
                    </Alert>}
                <Button variant="secondary" onClick={() => props.controlModal(false)}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={() => props.register(props.selectedEvent.id)}>
                    Register
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );  
}