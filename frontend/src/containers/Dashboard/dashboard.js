import React, { Component } from 'react';
import { JobSearch } from '../../components/job-search/jobSearch';
import { Jobs } from '../../components/jobs/jobs';
import { Container, Row, Col } from 'react-bootstrap';

class Dashboard extends Component {
    render() {
        return (
            <Container className="mt-5 mb-5">
                <div className="w-50">
                <JobSearch></JobSearch>
                </div>
                
            </Container>  
        )
    };
};

export default Dashboard;