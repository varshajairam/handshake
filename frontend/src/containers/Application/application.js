import React, { Component } from 'react';
import { Applications } from '../../components/application/application';
import { ApplicationSearch } from '../../components/application-search/appSearch';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { PATH } from '../../config';
import { connect } from 'react-redux';
import { getJobs, saveJobs, returnAppliedJobs } from './store/action';

class Application extends Component {

    filters = [];

    componentDidMount() {
        this.getApplications();
    }

    getApplications = () => {
        axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
        axios.get(PATH  + "/jobs/application")
        .then(res => {
            if(res.status === 200){
                if(res.data){
                    this.props.getJobs(res.data);
                    this.getJobs();                    
                }
            }
        })
        .catch(err=>{
            //this.props.setError(err.response.data);
        })
    }

    getJobs = () => {
        axios.get(PATH  + "/jobs")
        .then(res => {
            if(res.status === 200){
                if(res.data){
                    let completeJobs = [];
                    this.props.applications.forEach(app => {
                        let jobModel = {
                            title: "",
                            posting_date: "",
                            app_deadline: "",
                            location: "",
                            salary: "",
                            description: "",
                            job_type: "",
                            status: "",
                            applied_date: ""
                        };
                        let idx = res.data.findIndex((job) => {
                            return job.id === app.job_id;
                        });
                        if(idx > -1){
                            jobModel.title = res.data[idx].title;
                            jobModel.posting_date = res.data[idx].posting_date;
                            jobModel.app_deadline = res.data[idx].app_deadline;
                            jobModel.location = res.data[idx].location;
                            jobModel.salary = res.data[idx].salary;
                            jobModel.description = res.data[idx].description;
                            jobModel.job_type = res.data[idx].job_type;
                            jobModel.status = app.status;
                            jobModel.applied_date = app.applied_date;
                            completeJobs.push(jobModel);
                        }                        
                    })                    
                    this.props.saveJobs(completeJobs);
                }
            }
        })
        .catch(err=>{
            //this.props.setError(err.response.data);
        })
    }

    search = (event) => {
        event.preventDefault();
        let jobs = [];
        jobs = this.props.jobs.filter(job => {
            return job['status'] === event.target.innerText;
        });
        this.props.returnAppliedJobs(jobs);
    }

    render() {
        return (            
            <Container className="mt-5 mb-5">
                <h1 class="display-4">View Applications</h1>
                <div className="w-100 bg-light text-dark p-5 shadow rounded">
                    <ApplicationSearch submitHandler={this.search}></ApplicationSearch>
                </div>
                <div className="w-100 bg-light text-dark mt-5 p-5 shadow rounded">
                    <Applications applications = { this.props.jobs } searchResults = { this.props.searchResults }></Applications>
                </div>
            </Container>  
        )
    };
};

const mapStateToProps = (state) => {
    return {
        applications: state.app.applications,
        jobs: state.app.jobs,
        searchResults: state.app.searchResults,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getJobs: (data) => dispatch(getJobs(data)),
        returnAppliedJobs: (data) => dispatch(returnAppliedJobs(data)),
        saveJobs: (data) => dispatch(saveJobs(data)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Application);