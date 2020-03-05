import React, { Component } from 'react';
import { BasicDetails } from '../../components/basic-details/basic-details';
import { CareerObjective } from '../../components/career-objective/career-objective';
import { Education } from '../../components/education/education';
import { Experience } from '../../components/experience/experience';
import { skillset, Skillset } from '../../components/skillset/skillset';
import { CardDeck, Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { saveBasicDetails, saveEducationInfo, saveExperienceInfo, saveSkillset, changeMode, enableSave } from './store/action';

class Profile extends Component {

    constructor(){
        super();
        this.updateCareerObj = this.updateCareerObj.bind(this);
    }

    componentDidMount(){
        this.getBasicDetails();
        this.getEducationInfo();
        this.getExperienceInfo();
        this.getSkillset();
    }

    getBasicDetails = () => {
        axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
        axios.get("http://localhost:3001/profile/details")
        .then(res => {
            if(res.status === 200){
                if(res.data){
                    this.props.saveBasicDetails({...res.data, editMode:false});
                    if(res.data.career_obj){
                        this.props.save = false;
                    }
                }
            }
        })
        .catch(err=>{
            //this.props.setError(err.response.data);
        })
    }

    getEducationInfo = () => {
        axios.get("http://localhost:3001/profile/education")
        .then(res => {
            if(res.status == 200){
                if(res.data){
                    this.props.saveEducationInfo(res.data);
                }
            }
        })
        .catch(err=>{
            //this.props.setError(err.response.data);
        })
    }

    getExperienceInfo = () => {
        axios.get("http://localhost:3001/profile/experience")
        .then(res => {
            if(res.status == 200){
                if(res.data){
                    this.props.saveExperienceInfo(res.data);
                }
            }
        })
        .catch(err=>{
            //this.props.setError(err.response.data);
        })
    }

    getSkillset = () => {
        axios.get("http://localhost:3001/profile/skillset")
        .then(res => {
            if(res.status == 200){
                if(res.data){
                    this.props.saveSkillset(res.data);
                }
            }
        })
        .catch(err=>{
            //this.props.setError(err.response.data);
        })
    }

    updateBasicDetails = (event) => {
        let newDetails = {};
        Object.assign(newDetails, this.props.basicDetails);
        newDetails.last_name = event.target.value;
        this.props.saveBasicDetails(newDetails);
    }

    saveBasicDetails = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/profile/details", this.props.basicDetails)
        .then(res => {
            if(res === 200){
                this.props.mode = false;
            }
        })
        .catch(err=>{
            //this.props.authFail(err.response.data.msg);
        })
    }

    changeMode = (event) => {
        if(event.target.innerText = 'Cancel')
            this.props.changeMode(true);
        else
            this.props.changeMode(false);
    }

    enableSave = (event) => {
        this.props.enableSave(true);
    }

    updateCareerObj = (event) => {
        let newDetails = {};
        Object.assign(newDetails, this.props.basicDetails);
        newDetails.career_obj = event.target.value;
        this.props.saveBasicDetails(newDetails);
    }

    saveCareerObj = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/profile/details", this.props.basicDetails)
        .then(res => {
            if(res.status === 200){
                this.props.save = false;
            }
        })
        .catch(err=>{
            //this.props.authFail(err.response.data.msg);
        })
    }

    saveSkillset = (event) => {
        this.props.skillset.push(event.target.value);
        axios.post("http://localhost:3001/profile/skillset", this.props.skillset)
        .then(res => {
            if(res.status === 200){ 
            }
        })
        .catch(err=>{
            //this.props.authFail(err.response.data.msg);
        })
    }

    render(){
        // if(this.props.basicDetails && this.props.education && this.props.education.length && this.props.experience && this.props.experience.length){
            return (
                <Container className="mt-5 mb-5">
                    <Row>
                        <Col sm={4} md={4} lg={4}>
                            <BasicDetails details={this.props.basicDetails} education={this.props.education} updateHandler = {this.updateBasicDetails} submitHandler={this.saveBasicDetails} mode = {this.props.mode} modeHandler = {this.changeMode}></BasicDetails><br/>
                            <Skillset skills={this.props.skillset} submitHandler={this.saveSkillset}></Skillset>
                        </Col>
                        <Col sm={8} md={8} lg={8}>
                            <CareerObjective career_obj = {this.props.basicDetails ? this.props.basicDetails.career_obj : ''} updateHandler = {this.updateCareerObj} submitHandler={this.saveCareerObj} save = {this.props.save} enableSave={this.enableSave}></CareerObjective><br/>
                            <Education education = {this.props.education}></Education><br/>
                            <Experience experience = {this.props.experience}></Experience>
                        </Col>
                    </Row>
                </Container>            
            )
        //}
        //return null;       
    }
}

const mapStateToProps = (state) => {
    return {
        basicDetails: state.profile.basicDetails,
        education: state.profile.education,
        experience: state.profile.experience,
        skillset: state.profile.skillset,
        mode: state.profile.mode,
        save: state.profile.save
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveBasicDetails: (data) => dispatch(saveBasicDetails(data)),
        saveEducationInfo: (data) => dispatch(saveEducationInfo(data)),
        saveExperienceInfo: (data) => dispatch(saveExperienceInfo(data)),
        saveSkillset: (data) => dispatch(saveSkillset(data)),
        changeMode: (data) => dispatch(changeMode(data)),
        enableSave: (data) => dispatch(enableSave(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);