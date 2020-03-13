import React, { Component } from 'react';
import { EventSearch } from '../../components/event-search/eventSearch';
import { Events } from '../../components/events/event';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { PATH } from '../../config';
import { connect } from 'react-redux';
import { saveEvents, returnEvents, controlModal, registerSuccess, registerFailure } from './store/action';

class Event extends Component {
    selectedEvent = {};
    eventIdApplied = null;

    componentDidMount() {
        this.getEvents();
    }

    getEvents = () => {
        axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
        axios.get(PATH  + "/events")
        .then(res => {
            if(res.status === 200){
                if(res.data){
                    this.props.saveEvents(res.data);
                }
            }
        })
        .catch(err=>{
            //this.props.setError(err.response.data);
        })
    }

    getRegisteredEvents = () => {
        axios.get(PATH  + "/events?status=REGISTERED")
        .then(res => {
            if(res.status === 200){
                if(res.data){
                    this.props.saveEvents(res.data);
                    this.props.returnEvents([]);
                }
            }
        })
        .catch(err=>{
            //this.props.setError(err.response.data);
        })
    }

    search = (event) => {
        event.preventDefault();
        let events = this.props.events.filter(ev => {
            return ev[event.target.elements[0].getAttribute('id')].toLowerCase().includes(event.target.elements[0].value.toLowerCase())
        });
        this.props.returnEvents(events);
    }

    controlModal = (action, ev) => {
        this.props.controlModal(action);
        this.selectedEvent = ev;
        this.props.registerSuccess(false);
        this.props.registerFailure(null);
    }

    register = (id) => {
        if((localStorage.getItem('major') && localStorage.getItem('major') === this.selectedEvent.eligibility) || this.selectedEvent.eligibility === "All") {
            axios.post(PATH + "/events/register", {status: "REGISTERED", id})
            .then(res => {
                if(res.status === 200){
                    this.eventIdApplied = id;
                    this.props.registerSuccess(true);
                }
            })
            .catch(err=>{
                //this.props.authFail(err.response.data.msg);
            })
        } else {
            this.props.registerFailure(true);
        }      
    }

    render() {
        return (            
            <Container className="mt-5 mb-5">
                <h1 className="display-4">Upcoming Events</h1>
                <Button variant="link float-right" type="button" onClick={this.getRegisteredEvents}>Click to view registered events</Button>
                <div className="w-100 bg-light text-dark p-5 shadow rounded">
                    <EventSearch submitHandler={this.search}></EventSearch>
                </div>
                <div className="w-100 bg-light text-dark mt-5 p-5 shadow rounded">
                    <Events events = { this.props.events } searchResults = { this.props.searchResults } controlModal = {this.controlModal} openModal = {this.props.openModal} selectedEvent = {this.selectedEvent} register = {this.register} success = {this.props.success} failure = {this.props.failure} eventIdApplied = {this.eventIdApplied}></Events>
                </div>
            </Container>  
        )
    };
};

const mapStateToProps = (state) => {
    return {
        events: state.event.events,
        searchResults: state.event.searchResults,
        openModal: state.event.openModal,
        success: state.event.success,
        failure: state.event.failure
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveEvents: (data) => dispatch(saveEvents(data)),
        returnEvents: (data) => dispatch(returnEvents(data)),
        controlModal: (data) => dispatch(controlModal(data)),
        registerSuccess: (data) => dispatch(registerSuccess(data)),
        registerFailure: (data) => dispatch(registerFailure(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);