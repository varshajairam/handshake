import React, { Component } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { addEmail, addPassword, authSuccess, authFail} from './store/action';
import { PATH } from '../../config';

class Login extends Component {
    submitHandler = async (event) => {
        event.preventDefault();
        const data = {
            email_id: this.props.email_id,
            password: this.props.password
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
        axios.post(PATH + "/login", data)
        .then(res => {
            if(res.status == 200){
                this.props.authSuccess(res.data.token);
                this.props.history.push('/dashboard');
            }
        })
        .catch(err=>{
            this.props.authFail(err.response.data.msg);
        })
    }

    emailHandler = (event) => {
        this.props.addEmail(event.target.value);
    }

    passwordHandler = (event) => {
        this.props.addPassword(event.target.value);
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
                    {this.props.error && <Alert variant="danger">{this.props.error}</Alert>}
                    <Button type="submit">Sign in</Button>
                </Form>
            </Container>            
        )
    };
};

const mapStateToProps = (state) => {
    return {
        email_id: state.login.email_id,
        password: state.login.password,
        error: state.login.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEmail: (email_id) => dispatch(addEmail(email_id)),
        addPassword: (password) => dispatch(addPassword(password)),
        authSuccess: (token) => dispatch(authSuccess(token)),
        authFail: (error) => dispatch(authFail(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);