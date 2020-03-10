import React, { Component } from 'react';
import { BasicDetails } from '../../components/basic-details/basic-details';
import { CareerObjective } from '../../components/career-objective/career-objective';
import { Education } from '../../components/education/education';
import { Experience } from '../../components/experience/experience';
import { Skillset } from '../../components/skillset/skillset';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { PATH } from '../../config';
import { saveBasicDetails, saveEducationInfo, saveExperienceInfo, saveSkillset, changeMode, enableSave, saveProfilePic, changeEdMode, changeExpMode } from './store/action';

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
        axios.get(PATH  + "/profile/details")
        .then(res => {
            if(res.status === 200){
                if(res.data){
                    if(res.data.profile_pic) {
                        this.props.saveProfilePic(PATH + "/" + res.data.profile_pic);
                    }
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
        axios.get(PATH + "/profile/education")
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

    updateEducationInfo = (value) => {
        let newEducation = [];
        Object.assign(newEducation, this.props.education);
        newEducation.push(value);            
        this.props.saveEducationInfo(newEducation);
    }

    saveEducationInfo = (event) => {
        event.preventDefault();
        const data = {
            "college_name": event.target.elements[0].value,            
            "degree": event.target.elements[1].value,
            "year_of_passing": event.target.elements[2].value,
            "major": event.target.elements[3].value,
            "city": event.target.elements[4].value,
            "state": event.target.elements[5].value,            
            "zip": event.target.elements[6].value,
            "gpa": event.target.elements[7].value           
        }
        axios.post(PATH + "/profile/education", data)
        .then(res => {
            if(res.status === 200){
                this.updateEducationInfo(data);
                this.changeEdMode(false);
                //this.props.mode = false;
            }
        })
        .catch(err=>{
            //this.props.authFail(err.response.data.msg);
        })
    }

    changeEdMode = (mode) => {
        this.props.changeEdMode(mode);
    }

    changeExpMode = (mode) => {
        this.props.changeExpMode(mode);
    }

    getExperienceInfo = () => {
        axios.get(PATH + "/profile/experience")
        .then(res => {
            if(res.status === 200){
                if(res.data){
                    this.props.saveExperienceInfo(res.data);
                }
            }
        })
        .catch(err=>{
            //this.props.setError(err.response.data);
        })
    }

    updateExperienceInfo = (value) => {
        let newExperience = [];
        Object.assign(newExperience, this.props.experience);
        newExperience.push(value);            
        this.props.saveExperienceInfo(newExperience);
    }

    saveExperienceInfo = (event) => {
        event.preventDefault();
        const data = {
            "company_name": event.target.elements[0].value,            
            "title": event.target.elements[1].value,
            "start_date": event.target.elements[2].value,
            "end_date": event.target.elements[3].value,
            "city": event.target.elements[4].value,
            "state": event.target.elements[5].value,
            "country": event.target.elements[6].value,
            "work_description": event.target.elements[7].value     
        }
        axios.post(PATH + "/profile/experience", data)
        .then(res => {
            if(res.status === 200){
                this.updateExperienceInfo(data);
                this.changeExpMode(false);
            }
        })
        .catch(err=>{
            //this.props.authFail(err.response.data.msg);
        })
    }

    getSkillset = () => {
        axios.get(PATH + "/profile/skillset")
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
        axios.post(PATH + "/profile/details", this.props.basicDetails)
        .then(res => {
            if(res.status === 200){
                this.changeMode({target : {innerText : 'Save'}});
            }
        })
        .catch(err=>{
            //this.props.authFail(err.response.data.msg);
        })
    }

    changeMode = (event) => {
        if(event.target.innerText === 'Cancel' || event.target.innerText === 'Save'){
            this.props.changeMode(false);
        } else {
            this.props.changeMode(true);
        }
    }

    enableSave = (event) => {
        if(!event){
            this.props.enableSave(false);
        } else {
            this.props.enableSave(true);
        }        
    }

    updateCareerObj = (event) => {
        let newDetails = {};
        Object.assign(newDetails, this.props.basicDetails);
        newDetails.career_obj = event.target.value;
        this.props.saveBasicDetails(newDetails);
    }

    saveCareerObj = (event) => {
        event.preventDefault();
        axios.post(PATH + "/profile/details", this.props.basicDetails)
        .then(res => {
            if(res.status === 200){
                this.props.enableSave(false);
            }
        })
        .catch(err=>{
            //this.props.authFail(err.response.data.msg);
        })
    }

    updateSkillset = (value, action) => {
        let newSkills = [];
        Object.assign(newSkills, this.props.skillset);
        let idx = newSkills.findIndex(skill => skill.toLowerCase() === value.toLowerCase());
        if(action === "remove") {
            if(idx > -1) {
                newSkills.splice(idx, 1);
            }
        }            
        else {
            if(idx === -1) {
                newSkills.push(value);
            }            
        }
        this.props.saveSkillset(newSkills);
    }

    saveSkillset = (event) => {
        event.preventDefault();
        const data =  { skill: event.target.elements[0].value };
        axios.post(PATH + "/profile/skillset", data)
        .then(res => {
            if(res.status === 200){ 
                this.updateSkillset(data.skill);
            }
        })
        .catch(err=>{
            //this.props.authFail(err.response.data.msg);
        })
    }

    removeSkillset = (data) => {
        axios.post(PATH + "/profile/skillset", data)
        .then(res => {
            if(res.status === 200){ 
                this.updateSkillset(data.skill);
            }
        })
        .catch(err=>{
            //this.props.authFail(err.response.data.msg);
        })
    }

    removeSkill = (skill) => {
        this.updateSkillset(skill, "remove");
    }

    addProfilePic = (event) => {
        event.preventDefault();
        const formData = new FormData();
        const file = event.target.elements[0].files[0];
        formData.append('profile_pic', event.target.elements[0].files[0]);
        formData.append('id', this.props.basicDetails.id);
        axios.post(PATH + "/profile/profilepic", formData, {
            headers: {
                'content-type':'multipart/form-data'
            }
        })
        .then(res => {
            if(res.status === 200){
                this.props.saveProfilePic(PATH + "/" + file.name);
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
                            <BasicDetails details={this.props.basicDetails} education={this.props.education} updateHandler = {this.updateBasicDetails} submitHandler={this.saveBasicDetails} mode = {this.props.mode} modeHandler = {this.changeMode} addProfilePic = {this.addProfilePic} profilePic = { this.props.profile_pic }></BasicDetails><br/>
                            <Skillset skills={this.props.skillset} submitHandler={this.saveSkillset} removeHandler = { this.removeSkill }></Skillset>
                        </Col>
                        <Col sm={8} md={8} lg={8}>
                            <CareerObjective career_obj = {this.props.basicDetails ? this.props.basicDetails.career_obj : ''} updateHandler = {this.updateCareerObj} submitHandler={this.saveCareerObj} save = {this.props.save} enableSave={this.enableSave}></CareerObjective><br/>
                            <Education education = {this.props.education} submitHandler = {this.saveEducationInfo} changeEdMode = {this.changeEdMode} edMode = {this.props.edMode}></Education><br/>
                            <Experience experience = {this.props.experience} submitHandler = {this.saveExperienceInfo} changeExpMode = {this.changeExpMode} expMode = {this.props.expMode}></Experience>
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
        save: state.profile.save,
        profile_pic: state.profile.profile_pic,
        edMode: state.profile.edMode,
        expMode: state.profile.expMode
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
        saveProfilePic: (data) => dispatch(saveProfilePic(data)),
        changeEdMode: (data) => dispatch(changeEdMode(data)),
        changeExpMode: (data) => dispatch(changeExpMode(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);