import React, { Component } from 'react';
import { JobSearch } from '../../components/job-search/jobSearch';
import { Jobs } from '../../components/jobs/jobs';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { PATH } from '../../config';
import { connect } from 'react-redux';
import { saveJobs, returnJobs, controlModal } from './store/action';

class Dashboard extends Component {

    filters = [];
    selectedJob = {};

    componentDidMount() {
        this.getJobs();
    }

    getJobs = () => {
        axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
        axios.get(PATH  + "/jobs")
        .then(res => {
            if(res.status === 200){
                if(res.data){
                    this.props.saveJobs(res.data);
                }
            }
        })
        .catch(err=>{
            //this.props.setError(err.response.data);
        })
    }

    search = (event) => {
        event.preventDefault();
        let jobs = this.props.jobs.filter(job => {
            return job[event.target.elements[0].getAttribute('id')].toLowerCase().includes(event.target.elements[0].value.toLowerCase())
        });
        if(this.filters.length) {
            this.filters.forEach(filter => {
                jobs = jobs.filter(job => {
                    return job['job_type'] === filter;
                })
            })
        }

        this.props.returnJobs(jobs);
    }

    recordFilters = (event) => {
        this.filters.push(event.target.innerText);
    }

    controlModal = (action, job) => {
        this.props.controlModal(action);
        this.selectedJob = job;
    }

    render() {
        return (            
            <Container className="mt-5 mb-5">
                <h1 class="display-4">Job Search</h1>
                <div className="w-100 bg-light text-dark p-5 shadow rounded">
                    <JobSearch submitHandler={this.search} recordFilters = { this.recordFilters }></JobSearch>
                </div>
                <div className="w-100 bg-light text-dark mt-5 p-5 shadow rounded">
                    <Jobs jobs = { this.props.jobs } searchResults = { this.props.searchResults } controlModal = {this.controlModal} openModal = {this.props.openModal} selectedJob = {this.selectedJob}></Jobs>
                </div>
            </Container>  
        )
    };
};

const mapStateToProps = (state) => {
    return {
        jobs: state.job.jobs,
        searchResults: state.job.searchResults,
        openModal: state.job.openModal
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveJobs: (data) => dispatch(saveJobs(data)),
        returnJobs: (data) => dispatch(returnJobs(data)),
        controlModal: (data) => dispatch(controlModal(data))
        // saveEducationInfo: (data) => dispatch(saveEducationInfo(data)),
        // saveExperienceInfo: (data) => dispatch(saveExperienceInfo(data)),
        // saveSkillset: (data) => dispatch(saveSkillset(data)),
        // changeMode: (data) => dispatch(changeMode(data)),
        // enableSave: (data) => dispatch(enableSave(data)),
        // saveProfilePic: (data) => dispatch(saveProfilePic(data)),
        // changeEdMode: (data) => dispatch(changeEdMode(data)),
        // changeExpMode: (data) => dispatch(changeExpMode(data)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);