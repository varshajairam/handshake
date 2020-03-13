import React, { Component } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { PATH } from '../../config';
import { connect } from 'react-redux';
import { addTime, addName, addDate, addLocation, addEligibility, addDesc } from './store/action';
import { Redirect } from 'react-router';

class CreateEvent extends Component {

    submitHandler = async (event) => {
        event.preventDefault();
        let data = {
            name: this.props.name,
            description: this.props.description,
            date: this.props.date,
            time: this.props.time,
            eligibility: this.props.eligibility,
            location: this.props.location
        };
        axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
        axios.post(PATH + "/events", data)
        .then(res => {
            if(res.status === 200){                                                                                                                  
                //this.props.createSuccess(true);
                this.props.history.push("/companyDashboard");
            }
        })
        .catch(err=>{
            //this.props.setSignupError(err.response.data);
        })
    }

    nameHandler = (event) => {
        this.props.addName(event.target.value);
        //this.props.setSignupError(null);
    }

    descHandler = (event) => {
        this.props.addDesc(event.target.value);
        //this.props.setSignupError(null);
    }

    dateHandler = (event) => {
        this.props.addDate(event.target.value);
        //this.props.setSignupError(null);
    }

    locationHandler = (event) => {
        this.props.addLocation(event.target.value);
        //this.props.setSignupError(null);
    }

    timeHandler = (event) => {
        this.props.addTime(event.target.value);
        //this.props.setSignupError(null);
    }

    eligibilityHandler = (event) => {
        this.props.addEligibility(event.target.value);
        //this.props.setSignupError(null);
    }

    render() {
        return (
            <Container className="m-5 justify-content-center">                
                <Form onSubmit={this.submitHandler}>
                <h1 className="lead text-center">Create Event</h1>
                    <Form.Group controlId="name">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" required onChange = {this.nameHandler}/>
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange = {this.descHandler}/>
                    </Form.Group> 
                    <Form.Group controlId="date">                   
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" required onChange = {this.dateHandler}/>
                    </Form.Group>                    
                    <Form.Group controlId="time">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="time" onChange = {this.timeHandler}/>
                    </Form.Group>
                    <Form.Group controlId="eligibility">
                        <Form.Label>Eligibility</Form.Label>
                        <Form.Control type="text" onChange = {this.eligibilityHandler}/>
                    </Form.Group>
                    <Form.Group controlId="location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" required onChange = {this.locationHandler}/>
                    </Form.Group>
                    {/* {this.props.error && <Alert variant="danger">{this.props.error}</Alert>} */}
                    <Button type="submit" className="mb-5">Create</Button>
                    {this.props.success && <Alert variant="success" >
                        <p>Event created!</p>
                    </Alert>}
                </Form>
            </Container>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        name: state.createevent.name,
        date: state.createevent.date,
        location: state.createevent.location,
        time: state.createevent.time,
        description: state.createevent.description,
        eligibility: state.createevent.eligibility
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // createSuccess: (data) => dispatch(createSuccess(data)),
        addName: (data) => dispatch(addName(data)),
        addDate: (data) => dispatch(addDate(data)),
        addLocation: (data) => dispatch(addLocation(data)),
        addTime: (data) => dispatch(addTime(data)),
        addDesc: (data) => dispatch(addDesc(data)),
        addEligibility: (data) => dispatch(addEligibility(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);