import React from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

export const Jobs = (props) => {
    let jobs = props.jobs;
    if(props.searchResults.length){
        jobs = props.searchResults;
    }
    const list = Object.keys(jobs).map(key =>
        <Card bg="light" className = "mt-2">
            <Card.Body>
            <Button type="button" variant="link" onClick={() => props.controlModal(true, jobs[key])}>{jobs[key].title}</Button>
            <Card.Text id="type">
                {jobs[key].job_type}
            </Card.Text>
            <Card.Text id="location">
                {jobs[key].location}
            </Card.Text>
            <Card.Text id="salary">
                ${jobs[key].salary} / hour
            </Card.Text>
            <Card.Text id="posting_date">
                {jobs[key].posting_date}
            </Card.Text>          
            </Card.Body>
        </Card>
    );
    return (
        <div>
            {list}
            <Modal show={props.openModal} onHide={() => props.controlModal(false)}>
                <Modal.Header closeButton>
                <Modal.Title>{props.selectedJob && props.selectedJob.title}</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <div className="pb-2">
                    <p className="d-inline font-weight-bold mr-2">{props.selectedJob && props.selectedJob.job_type}</p>
                    <p className="d-inline font-weight-bold mr-2">{props.selectedJob && props.selectedJob.location}</p>
                    <p className="d-inline font-weight-bold mr-2">${props.selectedJob && props.selectedJob.salary} per hour</p>
                    <p className="d-inline font-weight-bold mr-2">{props.selectedJob && props.selectedJob.posting_date}</p>
                    </div>                
                    <p className="font-italic">Description</p>
                    {props.selectedJob && props.selectedJob.description}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => props.controlModal(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => props.controlModal(false)}>
                    Apply
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );  
}