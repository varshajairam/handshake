import React, { Component } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { loginUser } from '../../js/actions';
import { connect } from 'react-redux';

class Login extends Component {
    errorMsg = null;
    state = {
        email_id: "",
        password: "",
    };
    
    submitHandler = async (event) => {
        event.preventDefault();
        const data = {
            email_id: this.state.email_id,
            password: this.state.password
        }
        axios.defaults.withCredentials = true;
        // try{
        //     let response = await axios.post("http://localhost:3001" + "/login", data);
            
        //     if(response.status == 200){
        //         //this.props.history.push('/dashboard');
        //     } else {
        //         console.log(response);
        //     }
        // } catch(err){
        //     this.errorMsg = <Alert variant="danger">{err.response.data}</Alert>
        // }
        axios.post("http://localhost:3001" + "/login", data)
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

    render() {
        return (
            <Container className="m-5 d-flex justify-content-center">                
                <Form onSubmit={this.submitHandler}>
                <h1 className="lead text-center">Hello! Enter details below to sign in to your account.</h1>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required onChange={this.emailHandler}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required onChange={this.passwordHandler} />
                    </Form.Group>
                    {this.errorMsg}
                    <Button type="submit">Sign in</Button>
                </Form>
            </Container>            
        )
    };
};

// const mapStateToProps = (state) => {
//     return {
//         credentials: state
//     };
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         loginUser: (email_id, password) => dispatch(loginUser({email_id, password}))
//     }
// }

//connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login;