import React, { Component } from 'react';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';

class Navigation extends Component {

    submitHandler = (event) => {
        if(event.target.innerText === "Sign In")
            this.props.history.push('/login');
        else
            this.props.history.push('/signup');
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">                
                <Nav className="mr-auto">
                    <Navbar.Brand href="#home">Students</Navbar.Brand>
                    <Navbar.Brand href="#home">Employers</Navbar.Brand>
                </Nav>
                <Form inline onSubmit={this.submitHandler}>
                    <Button variant="outline-info" type="submit">Sign In</Button>
                </Form>
                <Form inline onSubmit={this.submitHandler}>
                    <Button variant="outline-info" type="submit">Sign Up</Button>
                </Form>
            </Navbar>
        );
    };
};

export default Navigation;