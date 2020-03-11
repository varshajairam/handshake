import React from 'react';
import { Card, Button, Modal, Form, Alert, Badge } from 'react-bootstrap';

export const Jobs = (props) => {    
    let jobs = props.jobs;
    if(props.searchResults.length){
        jobs = props.searchResults;
    }
    const list = Object.keys(jobs).map(key =>
        <Card bg="light" className = "mt-2">
            <Card.Body>
            <Button type="button" variant="link" className="p-0" onClick={() => props.controlModal(true, jobs[key])}>{jobs[key].title}</Button>
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
            {props.jobIdApplied === jobs[key].id && props.success && <Badge variant="success">Applied</Badge>}
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
                        <li style={{listStyle: 'none'}}>
                            <p className="d-inline font-weight-bold mr-2">{props.selectedJob && props.selectedJob.job_type}</p>
                            <ul className="d-inline font-weight-bold mr-2">{props.selectedJob && props.selectedJob.location}</ul>
                            <ul className="d-inline font-weight-bold mr-2">${props.selectedJob && props.selectedJob.salary} per hour</ul>
                            <ul className="d-inline font-weight-bold mr-2">{props.selectedJob && props.selectedJob.posting_date}</ul>
                        </li>
                    </div>                
                    <p className="font-italic">Description</p>
                    {props.selectedJob && props.selectedJob.description}
                    <Form className="pt-2">
                        <Form.Control type="file" id="file" name="file" multiple />
                        <Button variant = "link" className="p-0" onClick={(e) => { props.saveResume(e, props.selectedJob.id) }}>Upload Resume</Button>
                    </Form>    
                </Modal.Body>
                <Modal.Footer>
                {props.success && <Alert variant='success'>
                        Successfully applied!
                    </Alert>}
                <Button variant="secondary" onClick={() => props.controlModal(false)}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={props.applyToJob}>
                    Apply
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );  
}