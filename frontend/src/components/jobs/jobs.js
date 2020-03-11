import React from 'react';
import { Card } from 'react-bootstrap';

export const Jobs = (props) => {
    let jobs = props.jobs;
    if(props.searchResults.length){
        jobs = props.searchResults;
    }
    const list = Object.keys(jobs).map(key =>
        <Card bg="light" className = "mt-2">
            <Card.Body>
            <Card.Title>{jobs[key].title}</Card.Title>
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
        </div>
    );  
}