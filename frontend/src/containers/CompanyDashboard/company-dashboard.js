import React, { Component } from 'react';
import { JobSearch } from '../../components/job-search/jobSearch';
import { Jobs } from '../../components/jobs/jobs';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { PATH } from '../../config';
import { connect } from 'react-redux';
import { saveJobs, returnJobs, controlModal, saveResume, applyToJob } from './store/action';

class CompanyDashboard extends Component {

//     filters = [];
//     selectedJob = {};
//     jobIdApplied = null;

//     componentDidMount() {
//         this.getJobs();
//     }

//     getJobs = () => {
//         axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
//         axios.get(PATH  + "/jobs")
//         .then(res => {
//             if(res.status === 200){
//                 if(res.data){
//                     this.props.saveJobs(res.data);
//                 }
//             }
//         })
//         .catch(err=>{
//             //this.props.setError(err.response.data);
//         })
//     }

//     search = (event) => {
//         event.preventDefault();
//         let jobs = this.props.jobs.filter(job => {
//             return job[event.target.elements[0].getAttribute('id')].toLowerCase().includes(event.target.elements[0].value.toLowerCase())
//         });
//         if(this.filters.length) {
//             this.filters.forEach(filter => {
//                 jobs = jobs.filter(job => {
//                     return job['job_type'] === filter;
//                 })
//             })
//         }

//         this.props.returnJobs(jobs);
//     }

//     recordFilters = (event) => {
//         this.filters.push(event.target.innerText);
//     }

//     controlModal = (action, job) => {
//         this.props.controlModal(action);
//         this.selectedJob = job;
//     }

//     saveResume = (event, jobId) => {        
//         event.preventDefault();
//         const formData = new FormData();
//         const file = event.target.form.elements[0].files[0];
//         formData.append('resume', file);
//         formData.append('id', jobId);
//         axios.post(PATH + "/jobs/application", formData, {
//             headers: {
//                 'content-type':'multipart/form-data'
//             }
//         })
//         .then(res => {
//             if(res.status === 200){
//                 this.jobIdApplied = jobId;
//                 this.props.saveResume(PATH + "/" + file.name);
//             }
//         })
//         .catch(err=>{
//             //this.props.authFail(err.response.data.msg);
//         })        
//     }

//     applyToJob = () => {
//         this.props.applyToJob(true);
//     }

    render() {
        return (            
            // <Container className="mt-5 mb-5">
            //     <h1 class="display-4">Job Search</h1>
            //     <div className="w-100 bg-light text-dark p-5 shadow rounded">
            //         <JobSearch submitHandler={this.search} recordFilters = { this.recordFilters }></JobSearch>
            //     </div>
            //     <div className="w-100 bg-light text-dark mt-5 p-5 shadow rounded">
            //         <Jobs jobs = { this.props.jobs } searchResults = { this.props.searchResults } controlModal = {this.controlModal} openModal = {this.props.openModal} selectedJob = {this.selectedJob} applyToJob = {this.applyToJob} success = {this.props.success} saveResume = {this.saveResume} jobIdApplied = {this.jobIdApplied}></Jobs>
            //     </div>
            // </Container>
            <div></div>  
        )
    };
};

const mapStateToProps = (state) => {
    return {
        // jobs: state.job.jobs,
        // searchResults: state.job.searchResults,
        // openModal: state.job.openModal,
        // success: state.job.success
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // saveJobs: (data) => dispatch(saveJobs(data)),
        // returnJobs: (data) => dispatch(returnJobs(data)),
        // controlModal: (data) => dispatch(controlModal(data)),
        // saveResume: (data) => dispatch(saveResume(data)),
        // applyToJob: (data) => dispatch(applyToJob(data)),
        // saveSkillset: (data) => dispatch(saveSkillset(data)),
        // changeMode: (data) => dispatch(changeMode(data)),
        // enableSave: (data) => dispatch(enableSave(data)),
        // saveProfilePic: (data) => dispatch(saveProfilePic(data)),
        // changeEdMode: (data) => dispatch(changeEdMode(data)),
        // changeExpMode: (data) => dispatch(changeExpMode(data)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CompanyDashboard);