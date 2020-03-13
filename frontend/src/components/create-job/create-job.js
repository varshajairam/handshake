import React, { Component } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { PATH } from '../../config';
import { connect } from 'react-redux';
import { createSuccess, addTitle, addPostingDate, addLocation, addJobType, addDesc, addAppDeadline, addSalary } from './store/action';
import { Redirect } from 'react-router';

class CreateJob extends Component {
    submitHandler = async (event) => {
        event.preventDefault();
        let data = {
            title: this.props.title,
            posting_date: this.props.posting_date,
            app_deadline: this.props.app_deadline,
            location: this.props.location,
            salary: this.props.salary,
            description: this.props.description,
            job_type: this.props.job_type,
        };
        axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
        axios.post(PATH + "/jobs", data)
        .then(res => {
            if(res.status === 200){                                                                                                                  
                this.props.createSuccess(true);
                this.props.history.push("/companyDashboard");
            }
        })
        .catch(err=>{
            //this.props.setSignupError(err.response.data);
        })
    }

    titleHandler = (event) => {
        this.props.addTitle(event.target.value);
        //this.props.setSignupError(null);
    }

    postingHandler = (event) => {
        this.props.addPostingDate(event.target.value);
        //this.props.setSignupError(null);
    }

    deadlineHandler = (event) => {
        this.props.addAppDeadline(event.target.value);
        //this.props.setSignupError(null);
    }

    locationHandler = (event) => {
        this.props.addLocation(event.target.value);
        //this.props.setSignupError(null);
    }

    salaryHandler = (event) => {
        this.props.addSalary(event.target.value);
        //this.props.setSignupError(null);
    }

    descHandler = (event) => {
        this.props.addDesc(event.target.value);
        //this.props.setSignupError(null);
    }

    jobTypeHandler = (event) => {
        this.props.addJobType(event.target.value);
        //this.props.setSignupError(null);
    }

    render() {
        return (
            <Container className="m-5 justify-content-center">                
                <Form onSubmit={this.submitHandler}>
                <h1 className="lead text-center">Create Job</h1>
                    <Form.Group controlId="title">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" required onChange = {this.titleHandler}/>
                    </Form.Group>
                    <Form.Group controlId="posting">
                        <Form.Label>Posting Date</Form.Label>
                        <Form.Control type="date" required onChange = {this.postingHandler}/>
                    </Form.Group> 
                    <Form.Group controlId="deadline">                   
                        <Form.Label>Application Deadline</Form.Label>
                        <Form.Control type="date" required onChange = {this.deadlineHandler}/>
                    </Form.Group>                    
                    <Form.Group controlId="location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter city, state, country" required onChange = {this.locationHandler}/>
                    </Form.Group>
                    <Form.Group controlId="salary">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="number" placeholder="Enter salary" required onChange = {this.salaryHandler}/>
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange = {this.descHandler}/>
                    </Form.Group>
                    <Form.Group controlId="category">
                        <Form.Label>Job Category</Form.Label>
                        <Form.Control as="select" onChange = {this.jobTypeHandler}>
                        <option>Choose...</option>
                        <option>Full-Time</option>
                        <option>Part-Time</option>
                        <option>On-Campus</option>
                        <option>Internship</option>
                    </Form.Control>
                    </Form.Group>
                    {this.props.error && <Alert variant="danger">{this.props.error}</Alert>}
                    <Button type="submit" className="mb-5">Create</Button>
                    {this.props.success && <Alert variant="success" >
                        <p>Job created!</p>
                    </Alert>}
                </Form>
            </Container>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        title: state.createjob.title,
        posting_date: state.createjob.posting_date,
        app_deadline: state.createjob.app_deadline,
        location: state.createjob.location,
        salary: state.createjob.salary,
        description: state.createjob.description,
        job_type: state.createjob.job_type,
        success: state.createjob.success
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        createSuccess: (data) => dispatch(createSuccess(data)),
        addTitle: (data) => dispatch(addTitle(data)),
        addPostingDate: (data) => dispatch(addPostingDate(data)),
        addAppDeadline: (data) => dispatch(addAppDeadline(data)),
        addLocation: (data) => dispatch(addLocation(data)),
        addDesc: (data) => dispatch(addDesc(data)),
        addJobType: (data) => dispatch(addJobType(data)),
        addSalary: (data) => dispatch(addSalary(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);