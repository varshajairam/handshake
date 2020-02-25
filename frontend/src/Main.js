import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import StudentSignup from './components/Signup/StudentSignup';
import CompanySignup from './components/Signup/CompanySignup';

class Main extends Component {
    render() {
        return(
            <div>
                <Route path="/" component={Navigation} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/student" component={StudentSignup} />
                <Route path="/company" component={CompanySignup} />
            </div>
        );
    };
};

export default Main;