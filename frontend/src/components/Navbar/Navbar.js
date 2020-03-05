import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Form, Button} from 'react-bootstrap';
import logo from '../../assets/new-handshake-logo.png';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Navigation extends Component {
    submitHandler = (event) => {
        event.preventDefault();
        if(event.target.innerText === "Sign In") {
            this.props.history.push('/login');
        } else {
            this.props.history.push('/signup');
        }   
    }

    render() {
        // let redirectVar = null;
        // if(localStorage.getItem('token')){
        //     redirectVar = <Redirect to='/login' />
        // }
        return (
            <Navbar bg="dark" variant="dark">                
                <Nav className="mr-auto">
                    <Navbar.Brand href="#"><img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Handshake</Navbar.Brand>
                    {/* <Navbar.Brand href="#home">Students</Navbar.Brand>
                    <Navbar.Brand href="#home">Employers</Navbar.Brand> */}
                </Nav>
                {/* <Form inline onSubmit={this.submitHandler}> */}
                    {!localStorage.getItem('token') && <Button variant="outline-info" type="button" onClick={this.submitHandler.bind(this)}>Sign In</Button>}
                {/* </Form>
                <Form inline onSubmit={this.submitHandler}> */}
                    {!localStorage.getItem('token') && <Button variant="outline-info" type="button" onClick={this.submitHandler}>Sign Up</Button>}
                {/* </Form> */}
                {/* <Button variant="outline-info" type="button" onClick={this.submitHandler}>Sign In</Button>
                <Button variant="outline-info" type="button" onClick={this.submitHandler}>Sign Up</Button> */}
                {localStorage.getItem('token') &&
                <NavDropdown title="Username" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/logout">Sign Out</NavDropdown.Item>
                </NavDropdown>}
            </Navbar>
        );
    };
};

export default withRouter(connect(null)(Navigation));