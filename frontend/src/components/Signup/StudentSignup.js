import React, { Component } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

class StudentSignup extends Component {
    state = {
        first_name: "",
        last_name: "",
        email_id: "",
        password: "",
        collegeName: "",
        errorMsg: null    
    }
    
    submitHandler = async (event) => {
        event.preventDefault();
        let data = {...this.state};
        data.entity = "student";
        axios.defaults.withCredentials = true;
        // try{
        //     let response = await axios.post("http://localhost:3001" + "/signup", data);
            
        //     if(response.status == 200){
        //         console.log("yes");
        //         //this.props.history.push('/dashboard');
        //     } else {
        //         console.log(response);
        //     }
        // } catch(err){
        //     this.errorMsg = <Alert variant="danger">
        //                         {err.response.data}
        //                     </Alert>
        // }
        axios.post("http://localhost:3001" + "/signup", data)
        .then(res => {
            if(res.status == 200){
                //this.props.history.push('/dashboard');
            }
        })
        .catch(err=>{
            this.errorMsg = <Alert variant="danger">{err.response.data}</Alert>;
        })
    }

    emailHandler = (event) => {
        this.setState({
            email_id: event.target.value
        })
    }

    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    firstNameHandler = (event) => {
        this.setState({
            first_name: event.target.value
        })
    }

    lastNameHandler = (event) => {
        this.setState({
            last_name: event.target.value
        })
    }

    collegeNameHandler = (event) => {
        this.setState({
            college_name: event.target.value
        })
    }

    render() {
        return (
            <Container className="m-5 d-flex justify-content-center">                
                <Form onSubmit={this.submitHandler}>
                <h1 className="lead text-center">Hello! Please enter the below details.</h1>
                    <Form.Group controlId="formGroupFname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" required onChange={this.firstNameHandler} />
                    </Form.Group>
                    <Form.Group controlId="formGroupLname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" required onChange={this.lastNameHandler} />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">                   
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required onChange={this.emailHandler}/>
                    </Form.Group>                    
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" required onChange={this.passwordHandler} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" required onChange={this.passwordHandler} />
                    </Form.Group>
                    <Form.Group controlId="formGroupCollege">
                        <Form.Label>College Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter college name" required onChange={this.collegeName} />
                    </Form.Group>
                    {this.state.errorMsg}
                    <Button type="submit">Confirm</Button>
                </Form>
            </Container>            
        )
    };
};

export default StudentSignup;