import React, { Component } from 'react';
import { Events } from '../../components/events/event';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { PATH } from '../../config';
import { connect } from 'react-redux';
import { saveEvents, returnEvents, controlModal } from './store/action';

class CompanyEvents extends Component {
    selectedEvent = {};

    componentDidMount() {
        this.getEvents();
    }

    getEvents = () => {
        axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
        axios.get(PATH  + "/events/all")
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

    createEvent = () => {
        this.props.history.push('/createevent');
    }

    render() {
        return (            
            <Container className="mt-5 mb-5">
                <h1 className="display-4">View Events</h1>
                <Button variant="primary" type="button" onClick={this.createEvent}>Create New Event</Button>
                <div className="w-100 bg-light text-dark mt-5 p-5 shadow rounded">
                    <Events events = { this.props.events } searchResults = { this.props.searchResults } controlModal = {this.controlModal} openModal = {this.props.openModal} selectedEvent = {this.selectedEvent} ></Events>
                </div>
            </Container>  
        )
    };
};

const mapStateToProps = (state) => {
    return {
        events: state.event.events,
        searchResults: state.event.searchResults,
        openModal: state.event.openModal
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveEvents: (data) => dispatch(saveEvents(data)),
        returnEvents: (data) => dispatch(returnEvents(data)),
        controlModal: (data) => dispatch(controlModal(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyEvents);