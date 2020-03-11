import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/new-handshake-logo.png';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Navigation extends Component {
    render() {
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
            </Nav>
                {!localStorage.getItem('token') && <Link to='/login'>Sign In</Link>}
                {!localStorage.getItem('token') && <Link className="pl-5" to='/signup'>Sign Up</Link>}
                {localStorage.getItem('token') &&
                <NavDropdown title="User " id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/logout">Sign Out</NavDropdown.Item>
                </NavDropdown>}
            </Navbar>
        );
    };
};
 
export default withRouter(connect(null)(Navigation));